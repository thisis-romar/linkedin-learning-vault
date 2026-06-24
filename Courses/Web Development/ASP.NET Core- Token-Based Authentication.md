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
  - '[Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)'
prev_courses:
  - '[Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security](Securing%20ASP.NET%20Core%20Apps-%20Advanced%20Techniques%20for%20Web%20Application%20Security.md)'
next_courses:
  - '[ASP.NET Core in .NET 6- Dependency Injection](ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md)'
path_nav: '[{"path":"Getting Started as an ASP.NET Core Developer","position":6,"total":9,"prev":"Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security","next":"ASP.NET Core in .NET 6- Dependency Injection"}]'
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/tokens
  - skill/asp-net-core
status: not-started
created: 2026-05-03
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
  - [Why use exception token-based authentication?](#why-use-exception-token-based-authentication)
  - [What you should know](#what-you-should-know)
- [**1. Getting Started with Authentication**](#1-getting-started-with-authentication) (4 videos)
  - [Authentication vs. authorization](#authentication-vs-authorization)
  - [Cookie-based vs. token-based authentication](#cookie-based-vs-token-based-authentication)
  - [What is identity platform?](#what-is-identity-platform)
  - [JSON Web Token](#json-web-token)
- [**2. Token-Based Authentication**](#2-token-based-authentication) (11 videos)
  - [Setting up Entity Framework Core](#setting-up-entity-framework-core)
  - [Adding default identity tables using EF Core](#adding-default-identity-tables-using-ef-core)
  - [Configuring token-based authentication](#configuring-token-based-authentication)
  - [Adding the authentication controller](#adding-the-authentication-controller)
  - [Registering new users using UserManager](#registering-new-users-using-usermanager)
  - [Logging in users](#logging-in-users)
  - [Generating an access token](#generating-an-access-token)
  - [Adding the RefreshToken table](#adding-the-refreshtoken-table)
  - [Generating and storing refresh tokens](#generating-and-storing-refresh-tokens)
  - [Injecting TokenValidationParameters](#injecting-tokenvalidationparameters)
  - [Refreshing expired tokens](#refreshing-expired-tokens)
- [**3. Role-Based Authentication**](#3-role-based-authentication) (4 videos)
  - [Seeding the database with roles](#seeding-the-database-with-roles)
  - [Adding role claims to tokens](#adding-role-claims-to-tokens)
  - [Adding role authentication to a controller](#adding-role-authentication-to-a-controller)
  - [Adding multiple roles to a controller](#adding-multiple-roles-to-a-controller)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps for learning more token-based authentication](#next-steps-for-learning-more-token-based-authentication)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why use exception token-based authentication?](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/why-use-exception-token-based-authentication?u=76281980&t=0)** - [Ervis] One of the most important features in building robust applications is to make sure that your apps are secure. And the basis of all security is controlling access to your apps. We'll start off by talking about the difference between the authentication and authorization and the common capabilities of the Identity framework. Next, you'll learn how to register users to your app, generate access and refresh [Tokens](../../Skills/Web%20Development/Tokens.md), and also store the refresh tokens in an [SQL](../../Skills/Data%20Science/SQL.md) database using the Entity Framework core. By the end of this course, you'll learn how to add role claims to an access token and implement the role-based authentication in a Web API. Hi, I am Ervis Trupja and I specialize in building .NET web applications. Join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning course as we explore the token-based authentication in an [ASP.NET](https://ASP.NET) Web API application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [ASP.NET Web API](../../Skills/Web%20Development/ASP.NET%20Web%20API.md) (1)
> **Env Vars:** api (2), net (2), sql (1), asp (1)
> **CLI Commands:** make (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Speakers:** - [ervis] (1)

#### [What you should know](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-you-should-know?u=76281980&t=0)** - [Instructor] Let us talk about a couple of things that you need to know. During this course, we will add token based authentication to web API application. So having a basic understanding of web APIs is recommended, but it is not required. As a programming language I'll use C#. So having basic knowledge of C# is required. I'll be using the .NET core version 5.0. So having some basic knowledge of any .NET core framework is recommended, but it is not required. As my coding editor, I'll be using Visual Studio 2019 Community Edition, but you can use any version of Visual Studio 2019 or later. Throughout these course, if you'd like to follow along while I'm coding, you can download the exercise files from the [GitHub](../../Skills/Software%20Development/GitHub.md) repository of these course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** net (2), api (1)
> **Tools:** visual studio (2), github (1)
> **Exercise Files:** download the (1), exercise files (1)
> **Best Practices:** recommended (2)
> **Versions:** version 5 (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started with Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Authentication vs. authorization](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=0)** - [Instructor] Authentication and authorization are two really important concepts when it comes to securing your web APIs, but also your applications in general. Even though these two concepts sound similar to each other, they are different. Now, per definition, authentication is the process of validating the identity of a registered user who is accessing a service or an application. And authorization is the process of validating the authenticated user if the user has permissions to access a certain service or an application. So basically authentication is the process of verifying if a user exists, and authorization is the process of checking if the existing user has permissions. Now to better understand these two concepts, let us take a real world example. Let us think of a company building. Within this company, we can have different offices. For example, we have the manager offices, we have the program, our offices and other offices. And in this company, we have different employees, let us say different users alike, we have managers, we have programmers, et cetera. And these users or employees can enter the building, so they are all authenticated to enter the building. But depending on their role within this company,
>
> **[1:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/authentication-vs-authorization?u=76281980&t=94)** they can have access to different rooms or offices. And this is when authorization comes into place. So for example, the managers are authorized to access the manager [office](../../Skills/Web%20Development/Microsoft%20Office.md). The programmers are authorized to access the programmer offices. But if a programmer wants to access the manager offices, then they need to have a certain level of permission. So authentication is to be able to access the building and authorization is to have permission or to be authorized to access certain areas within that building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Analogies:** for example (2), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Cookie-based vs. token-based authentication](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=0)** - [Instructor] On this course, you learn about the token-based authentication, but the traditional way of authenticating users in a web application is by using the cookie-based authentication. But what are the key differences between the traditional cookie-based authentication and the token-based authentication? In the cookie-based authentication, you typically have a browser and a server. And if you want to be authenticated, you'd send the username and the password to the server. Let's say by using an API endpoint /authenticate, then the server is going to check if the credentials are correct. And if the credentials are correct, then the server is going to create a session in the server memory. Then it is going to return to the user that sessionId. Now this sessionId gets stored in a cookie in the browser, and that is why we call this authentication type cookie-based authentication because the sessionId gets stored in a cookie. Then next, if you want to get some data from the server, you'd pass the sessionId as part of the request as well, and then the server is going to check if the sessionId is valid and return some data. Now, in the cookie-based authentication, we have two main problems. The first problem is that if let's say millions of users try to access your app at the same time, then the server is going to create millions of sessions, which is going to overload your server.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=96)** The second problem is that if your cookies get stolen from the browser, the sessionIds are stolen as well. But how does the token-based authentication resolve these two issues? In the token-based authentication, the same way we have a browser and a server, if you want to be authenticated, you would send the username and password, and they server would check if these credentials are valid. If the credentials are valid, the server will not create a session, but instead it is going to generate a token. This token is just an encrypted string, which has enough valuable information for the server to find out the identity of a user. After the token is returned to the browser, the token will be stored in the browser, and on the next request when you want to get some data from the server, you'd use the authorization Bearer and pass the token value. The server is going to check if the token is valid, it is going to return some data. So far we have resolved the first problem, which was that this server would get overloaded if millions of users let's say tried to access the application at the same time, because in this case, the server does not create sessions, but instead it just generates [Tokens](../../Skills/Web%20Development/Tokens.md), and the tokens are returned to the user, which then gets stored in the browser or in the device or wherever you are accessing the application from. But the second problem is still valid.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/cookie-based-vs-token-based-authentication?u=76281980&t=189)** So if someone steals the token from the user, then they're able to access the application. Now, it's important to mention that the tokens have an expiration time. So even if your token gets stolen, it will expire after typically 5 to 10 minutes, because that is the standard token lifetime. And the malicious users are going to lose access to the system after the token is expired, and that is why we have two types of tokens. We have the short lived tokens, like the access token, or the token that gets returned from the server. But we also have long lived tokens. We also call them refresh tokens. So once the token is expired, we use our refresh token to generate a new token, which is then returned to the user and the user will use then the new token to get the data. On the upcoming parts, you are going to learn how to generate a token, how to generate a refresh token, how to refresh or how to generate a new access token by using the refresh token and much more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (7)
> **Code Identifiers:** sessionid (5), sessionids (1)
> **CLI Commands:** find (1)
> **Env Vars:** api (1)
> **Definitions:** we call this (1)
> **Speakers:** - [instructor] (1)

#### [What is identity platform?](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/what-is-identity-platform-14186101?u=76281980&t=0)** - [Instructor] In this course we are going to use the Entity Framework Core to work with data in an [SQL server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database. We are also going to use another .NET framework, which is going to help us manage identity-related functionality, for example, to create a new user account, to add roles to a user, et cetera. The identity framework has a lot of features, but some of the key ones are that it's really useful if you are building, let's say, an MVC application, because it can generate a lot of default UI that you can use to manage your users. But since we are going to work with a web API project, we are going to use identity to manage identity-related data. For example, we are going to use it to manage users, to manage passwords, and to manage roles. But you can also use this framework to manage the profile data, to manage the user claims, the [Tokens](../../Skills/Web%20Development/Tokens.md), the email confirmation, and much more. To be able to use the identity framework, you will have to install this package. And you are going to learn on the upcoming parts on how to install this package and use the identity framework to work with user data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** sql (1), net (1), mvc (1), api (1)
> **Analogies:** for example (2)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### [JSON Web Token](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=0)** - [Instructor] The [JSON](../../Skills/Web%20Development/JSON.md) Web Token, or the JWT, is the token type that we are going to use throughout this course. And, per definition, the JWT is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. In other words, a JWT, or as we're going to call it from now on, a token, is just an encrypted string which has enough information so the server is able to identify the user. A token, or a JWT, has three parts. It has the header, it has the payloads and the signature. In the header part you have information about the type of the token, which in our case is going to be a JWT, and also the signing algorithm. In the payload part you have the claims, and claims are just properties or definitions for the user. Like, for example, the first name of the user, it can be the username, the ID, and also the role. So, for example, to each rolls the user belongs, et cetera. The claims are of three types. You have registered claims, you have public claims and also private claims. The last part is the signature part, and the signature part is used to make sure that the token was not changed.
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/json-web-token-14185181?u=76281980&t=95)** Now if you want to learn more about the JWT, you can navigate to this URL. In there you are going to find a debugger. And then, in here, for example, if you paste a valid token, here on the left or the right, you are going to see the decoded information of that encoded string. So you have the header, and in the header you have the algorithm, and then you have the type of the token. In this case it is a JWT, and that is the same token type that we are going to use in our course. Then you have payloads, and in the payload you have the subject, you have the name, you have the issued at, and then, at the end, you have the verify signature section, where if you change the secret key you'll see that the third section is also updated, so check out this part. You'll see that as I change the part in here, that part is also updating.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **Env Vars:** jwt (7), json (2), url (1)
> **Definitions:** is an  (1), in other words (1), is a  (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 2. Token-Based Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up Entity Framework Core](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=0)** - [Instructor] Now that you know all you need to know to get started with the token-based authentication, it is time to write some code. And throughout this course, you'll add the token-based authentication to .NET 5 Web API. And to work with data, we are going to use the Entity Framework Core. So for that, on this part, you'll learn how to set up the Entity Framework Core in a Web API project. So let us go to Visual Studio and see it in action. The API that we are going to use throughout this course is a simple API which has just three controllers. The HomeController has a single API endpoint of type Get. Then in here we have the ManagementController and the StudentController. Now, to set up the Entity Framework Core, the first thing that we need to do is that we need to create a database. So for that, I'll just go to the Server Explorer. And if you do not see the Server Explorer in here, you can just go to View, and then in here go to the Server Explorer. Now, in the Data Connections, I'll just right-click and then Create New [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) Database, and then here I'll type my server name, and my server name is ETR then /sqlserver. I'll just use [Windows](../../Glossary/Service/Windows.md) Authentication and then define a database name. I'll name this database, let's say, school-db, or just school-api-db,
>
> **[1:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=99)** and then click the OK button. Now that the database was created, we are going to get the Connection String from this database. So for that, I'll just right-click in here and then go to Properties, and then copy the Connection String value. So Control + A to select the value and then Control + C to copy the value. Now, let us go to the Solution Explorer and then here go to the appsettings.[JSON](../../Skills/Web%20Development/JSON.md) file, and we are going to store this value in this file because in the Web API projects, this is the file where you put the Connection Strings, the API keys, et cetera. So I'm going to create a new section in here. That is going to be the ConnectionStrings. And then inside the ConnectionStrings, I'll create a key. I'll name this key DefaultConnection. And then I'll paste the Connection String in here. Now, let us save the changes and go to the Solution Explorer one more time. In the Solution Explorer, so inside this project I'll create a folder. I'm going to name this folder Data because inside this folder, I'm going to put all the data-related files. Now, to connect the SQL Server with the models that we are going to use to work with data, we need to create a translator, and this translator needs to be able to understand both SQL Server but also C# code. Now, inside the Data folder,
>
> **[3:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=194)** we are going to add the DbContext file. The DbContext file is also known as the translator file because it is able to understand [SQL](../../Skills/Data%20Science/SQL.md) code but also C# code. Now, we are going to create our custom DbContext file. So for that, let us just add a C# class. I'll just right-click, then go to Add. We're going to add a class. We are going to name our DbContext file AppDbContext, and then click Add. Now, for this file to be defined as the DbContext file of our app, we need to add from the base class DbContext. Now, if you hover on the DbContext and then Show potential fixes, we see that we do not get any meaningful suggestions. And the reason for that is because the DbContext file belongs to the Entity Framework Core. So now let us install that package. For that, go to Tools and then go to NuGet Package Manager and then Manage NuGet Packages for Solution. Then in here go to Browse. And in the Browse section, search for EntityFrameworkCore, so EntityFrameworkCore. Then select the first option, which is the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).EntityFrameworkCore, select the project and click Install. Then accept the licenses.
>
> **[4:50](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=290)** Now that the package was installed, you can just go back to the AppDbContext file. And now when you hover on the DbContext, you'll see that you can use the Microsoft.EntityFrameworkCore package that we just installed. Now, we can see that the error is gone. Next, we are going to create the constructor, so ctor, and then double-Tab. The constructor is created. And the constructor will take as a parameter the DbContextOptions, and this is a generic class so we are going to pass in here as a parameter the same file that we want to use as our DbContext, so the AppDbContext. And I'm going to name this parameter options, but we need to also pass the same value to the base class, so base and then just options. Now, this is all you need to do in the AppDbContext file. The last step in here is that now you need to configure the AppDbContext with the SQL Server. So let us go to the Solution Explorer one more time and then go to the Startup.cs, which is also known as the configuration file because in here you put all the configurations. And then here the first thing that we need to do is that we need to get the Connection String. So for that, I'll create the ConnectionString property, so prop, then double-Tab, this will be of type string, and the name is going to be ConnectionString. Now, inside the Startup constructor,
>
> **[6:23](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=383)** I'll just set the value of the ConnectionString to be equal to the Configuration. So by using the Configuration, now we can read the content from the appsettings.json file, .GetConnectionString. And when you use the GetConnectionString method, it will go to the appsettings.json file and search for the ConnectionStrings section. And then the parameter needs to be the Connection String name that you want to use. So, basically, inside this method, you need to pass as a parameter the Connection String name, and in our case that is the DefaultConnection. So now that we have the ConnectionString inside the ConfigureServices method, we need to add some code. So just before the AddControllers, I'm going to type in here Configure DB Context with SQL. And then in here I'll type services.AddDbContext. Now, here we need to define our DBContext file, and that is the AppDbContext. Let us import the namespace, and the namespace is the SchoolApp.API.Data. And now for this DBContext, we need to define the database that we want to use. So, basically, in here I'll just type options that go to, and then options.UseSqlServer, and we see that we still get an error in here.
>
> **[8:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/setting-up-entity-framework-core?u=76281980&t=480)** So let us just copy this value, go back to the NuGet Packages, and then here after the EntityFrameworkCore, I'll just type Sql Server or just Sql, and then just install the Microsoft.EntityFrameworkCore.SqlServer, so Install. Then accept the license. Now, let us go back to the Startup.cs, and here we see that we get a suggestion, and the suggestion is to use the Microsoft.EntityFrameworkCore, and the parameter for the UseSqlServer is going to be the ConnectionString. And this is all you need to do to add Entity Framework Core to Web API project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (5), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (3), [Windows](../../Glossary/Service/Windows.md) (1)
> **UI Navigation:** go to (16), right-click (3), select the (3)
> **Env Vars:** api (9), sql (6), net (1), etr (1)
> **Prerequisites:** install (4), set up (2), configure (2)
> **Definitions:** is a  (2), known as (2)
> **File Paths:** appsettings.json (3)
> **Cross-References:** go back to (3)
> **Tools:** visual studio (1)

#### [Adding default identity tables using EF Core](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=0)** - [Instructor] On this part, you'll learn how to add the default identity framework tables using the Entity Framework Core. To add these tables to the database, you can just use the identity frameworks models and properties. But with the Entity Framework Core, it is possible to inherit from one of the identity models and add custom properties, which are going to be translated as custom columns in the database. Now, let us to go to Visual Studio and see it in action. The first thing that we are going to do in Visual Studio is that we are going to create a custom model and inherit from the identity user base class. Then we are going to add a custom property. And we are going to see how this custom property creates a custom column in the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database that we created on the last part. So for that, let us go to the Solution Explorer. And then inside the data folder, we are going to create a new folder. We're going to name this folder Models. Now, inside the Models folder, we are going to create our custom model. And models are just C-sharp classes. So let us name this model the ApplicationUser. And then click the Add Button. And here, let us inherit from the base class identity because we created the application user as a custom class for the already existing identity user class, which belongs to the ASPNETCore.identity. And here, if you do not add any properties,
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=96)** the columns that you are going to see in the database are going to be the properties of the identity user. So if I just right-click and then go to Definition. And then here, right-click on the identity user and go to Definition one more time. These are the properties that you are going to see in the database. So you have, for example, the phone number, you have the email, the normalized email; you have the username, the access failed count, et cetera. But we see that we only have username. We do not have a first name or a last name. So let us just go to the ApplicationUser. And in here, let us add the first name and last name properties. So this is going to be of type string. And it is going to be first name. The other property is going to be the last name. So string last name. And let us also add another one of type string. And this is going to be just custom. So let us see the changes. And the next step is that you need to go to the AppDbContext file. And in the AppDbContext file, you need to modify the Dbcontext base class. Now, instead of inheriting from the base class Dbcontext, you need to inherit from the identityDbcontext. And this is going to take as parameter the class that you want to use to work with the user-related data.
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=190)** And in our case, we created a custom class, the ApplicationUser. Otherwise, you would have to define the identity user base class. So since we created the ApplicationUser, I'm going to define the ApplicationUser in here as well. Now, let us import the namespaces. So let us start with the ApplicationUser, and that is in the data.models. Now, let us also add the namespace for the identityDbcontext. And for that, we need to install the package, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).ASPNETCore.identity.entityframeworkcore. So I'll just select in here find and install latest version. And we can say that the error is gone because the package is installed. And the last step is that you need to go to the Startup.CS. And then here, scroll down to the configure services method. And just after the configure Dbcontext with [SQL](../../Skills/Data%20Science/SQL.md), we are going to first add identity, which we are going to also use in the upcoming part. So just add identity. And then in here, I'll type services.AddIdentity. And then the first parameter is going to be the ApplicationUser. So ApplicationUser. And then import the namespace. And that is the data.models. And the second parameter is going to be the base class that is responsible for the user roles. In our case, that is the IdentityRole
>
> **[4:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=286)** because we didn't create a custom class for the IdentityRole. But if you want, you can also create a custom class. So the namespace is going to be ASPNETCore.identity. Then next, you need to define the class that is going to be used to work with the identity-related tables. And for that, I'm just going to type in here .addentityframeworkstores. And in here, we are going define the AppDbcontext file. And then at the end, just adddefaulttokenproviders. Now, this is all you need to do. But now, since we added all the configurations, we are going to now see how we can create the tables in our database. For that we are going to create the migration. So I'll just go to the Package Manager Console. Then here, I'll type Add-Migration IdentityTablesAdded and then press Enter. In here, we see that we get an error. And that's right because we need to install an additional package. So let us just go to Tools, then NuGet Package Manager, the Manage NuGet Packages for Solution. And then in here, I'll search for tools. And then select the Microsoft.entityframeworkcore.tools. And then select the Project, Install. Then accept the license.
>
> **[6:22](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=382)** And now, let us go back to the Package Manager Console. And here, I'm going to run the same command one more time. So Add-Migration IdentityTablesAdded. Now, we see that the command is working. So a build has started. The build succeeded. Now, that command will generate a class with the same name of the migration. So IdentityTablesAdded. And here, we see that we have a typo, but you can ignore the typo. And this class, inherits on the base class migration. Inside this class, you have two methods. So the up method and the down method, which is the method that is going to be executed if you want to remove these migration. And we can see that it will basically just remove all the tables. And the tables will be created in the up method. We are going to see just the first one. So we have, for example, in here the ASPNETroles. And we see that in this table, we have four properties. We have the ID, we have the name, the normalized name, We have the concurrencystamp. And if you go for example to the next one, the ASPNETusers. And for this table, we define that we want to use the application user custom table. So if you go to that section. And here, you can see that we have the first name, we have the last name, and we have the custom columns. Now, to apply the migration in the database,
>
> **[7:58](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-default-identity-tables-using-ef-core?u=76281980&t=478)** you can just type in here update-database and then press Enter. You can see that the command was executed successfully. So you can just go now to the Server Explorer. And you just refresh. And then just open the database. And then if you go inside the tables, you are going to see all the identity framework default tables. So you have the ASPNETusers. This table will be used to store the users. You have the roles, the logins, the claims, the ASPNETroles, and the other one in here. So the ASPNETuserroles is the joining table between the ASPNETusers and the ASPNETroles. You also have the ASPNETusertokens and the ASPNETroleclaims.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **UI Navigation:** go to (10), right-click (2), select the (2), scroll down (1), open the (1)
> **Prerequisites:** install (4), configure (2)
> **Analogies:** for example (3)
> **Code Identifiers:** identitydbcontext (2)
> **Env Vars:** sql (2)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)

#### [Configuring token-based authentication](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=0)** - [Instructor] Now that we have set up the entity framework and also used the identity framework to create the default identity-related tables, it is time to create the token-based authentication. For that, let us go to Visual Studio and see it in action. In Visual Studio, the first thing that we are going to do is that we are going to define the JWT keys. And we are going to use these keys to generate a strong token. So for that, I'm going to create a new section in here, and this section is going to be named JWT. And then inside this section, the must have property or the must have key is the secret key because without a secret key, you cannot generate a token. So Secret. And this is basically just a string, which is 16 chars or longer. And it is used to generate a strong token. So it's basically used to encrypt the token. For that, I'll just define here this-is-just, let's say strong-key. Now that we have the JWT secret key, let us go to the Startup.cs. And then in the Startup.cs, after the Add Identity, we are going to first add the authentication. So Add Authentication. And we need to add the authentication because we need to define the authentication schemes. So for that, I'll just type in here services.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=97)** Type AddAuthentication. And then inside here, I'll type options. Then go to. And now we are going to define the default authentication scheme, the challenge scheme, and just the scheme itself. So for that, I'll just type in here options.DefaultAuthenticationScheme is equal to JwtBearer, so BearerDefaults. Now let us import the namespace because we see that we get an error. And at the namespace, you'll need to install the package [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).Authentication.JwtBearer. So I'll just select this option, and then go to the find and install latest version. So now we see that once the package is installed, the error is gone, and now we need to define the default authentication scheme. And that is going to be just the AuthenticationScheme. Next, let us also define the challenge scheme. So options.DefaultChallengeScheme, and that will be the same way, JwtBearerDefaults.AuthenticationScheme. And the last one, options.DefaultScheme, that is going to also be JwtDefaults.AuthenticationScheme.
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=188)** Now, this is all you need to do in this section. Next, you're going to add the actual JWT bearer configuration. So just after the AddAuthentication, you need to actually remove this semicolon. You need to type .AddJwtBearer. And for the JwtBearer, so I'll just put this down here, and then just type in here Add JWT Bearer. Inside the Add JWT Bearer, you're going to actually define the mechanism that is going to be used to valid a token. So basically inside here when you send a token to the API endpoint, inside here, you define the code that is used to check if the token is valid or not. So I'll just type in here options. And then inside the options, we are going to first define that this SaveToken is equal to true, so SaveToken is equal to true. The second property is the RequireHttpsMetadata. RequireHttpsMetadata, and if you check the description, it says that this gets or sets if HTTPS is required for the [Metadata](../../Skills/Web%20Development/Metadata.md) address or authority. So basically, by setting this property to false, what you do is that you allow the token-based authentication to work over HTTP as well.
>
> **[4:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=283)** Next, we are going to define the most important part, and that is the token validation parameters. So these are all the parameters that are going to be used to validate if the token is valid. So options.tokenValidationParameters is equal to new TokenValidationParameters. I'm just going to remove the IdentityModel.[Tokens](../../Skills/Web%20Development/Tokens.md). And then import the namespace for the TokenValidationParameters. So that is the IdentityModel.Tokens. And now inside here, we are going to define all the parameters that we want to use to check for the token validation. So the first thing that we're going to set to be true is the signing key. So validateIssuerSigningKey. And once you set this property to true, what you need to do next is that you need to define or you need to set which is the issuer signing key. And now our signing key was just added in the appsettings.[JSON](../../Skills/Web%20Development/JSON.md) file. So basically we are going to use this key to check if the token is valid because the same key is also used to generate the token. So basically how it works is that when you generate the token, you use this secret key, and then when you validate the token, you use the same secret key. So in the Startup.cs,
>
> **[6:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=376)** we need now to set the IssuerSigningKey. That is going to be new SymmetricSecurityKey and then we are going to use the Encoding, so Encoding. Let us import the namespace for the encoding. And the namespace is system.txt, then .ASCII.GetBytes, and then we are going to use the configuration to get the secret key. So inside the configuration, we have the JWT section, and in this section you have the secret key. Now, if you want, you can just leave it this way but if you want to generate a stronger key, you need to also use like other data like the issuer, the audience, et cetera. So let us just go to the appsettings.json file, and in here I'm going to also define the audience. So audience. And in the audience, I'll just have the audience to be user. So that is just a data you can set. But I'm going to also set, let's say the issuer. And as an issuer, I'm going to set the app itself. So just go to Solution Explorer, right click, then go to Properties. Then you go to Debug. Then scroll down in here. And copy these values, so copy. And then I'll just paste it in here.
>
> **[7:51](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=471)** So save the changes. Now let us go back to the Startup.cs because we're going to also configure the audience and the issuer. So in the Startup.cs. Now we are going to say that we want to validate the issuer as well. So ValidateIssuer. That is going to be true. And then we need to now define the ValidIssuer. The ValidIssuer is going to come from the configuration. And inside the configuration, we have the JWT section, and inside this section, we have the Issuer key. So basically, it is this value. So this is the value for this key. Now let us also use the audience in the Startup.cs. ValidateAudience is equal to true, and the ValidAudience is going to be the configuration. And then inside the configuration, we are going to use the JWT, and then audience. Now, we added everything that we need to add in the configure services but for the configure services to work, we need to also update the configure method. So inside the configure method, just after the UseRouting, we are going to add the authentication and authorization. For that I'll just type in here app.UseAuthentication.
>
> **[9:31](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/configuring-token-based-authentication?u=76281980&t=571)** And the UseAuthorization was already defined when I created the empty web API project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** jwt (9), api (2), https (1), http (1), ascii (1)
> **UI Navigation:** go to (8), scroll down (1)
> **Prerequisites:** configure (5), install (2), set up (1), you'll need (1)
> **File Paths:** appsettings.json (2), system.txt (1)
> **Code Identifiers:** tokenvalidationparameters (1), validateissuersigningkey (1)
> **Tools:** visual studio (2)
> **CLI Commands:** find (1)

#### [Adding the authentication controller](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=0)** - [Instructor] To work with our users in our web API, we are going to add a new controller. And that is going to be the authentication controller. In this controller, we are going to inject all the necessary services to work with user data. For that, let us go to Visual Studio and see it in action. In Visual Studio, I'll go to the Solution Explorer, and then right click in the Controllers folder, add a new controller. This is going to be an API controller, so I'll just go to the API in here, and then select the first option, API Controller dash Empty. And I click the Add button. Then next, you need to define a controller name, and I'm going to name this controller AuthenticationController. And then click the Add button one more time. Now that the controller is added, I'm going to add all the necessary services in here, and then inject them in the controller constructor so we can use them in the API endpoints of this controller. So let us start with the first one. It's going to be a private readonly. And we are going to use the userManager. Let us import the namespace for the UserManager and that belongs to the AspNetCore.Identity. And then as a parameter, we are going to pass the ApplicationUser, which is the base class for the identity user
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=95)** of the identity framework. So let us import the namespace, and the namespace is the API.Data.Models. And we are going to name it _userManager. The userManager is just a C# class, which provides the APIs for managing users in a persistent store. And the persistent store in our case is the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) database. So this is basically just an AspNetCore.Identity class that we can use to work with our users. So you can create a user, you can add a password to the user, et cetera. Now, let us define the other class we are going to use. So private readonly. Now, this is going to be the RoleManager, and as the name already indicates, the RoleManager will provide the APIs for managing roles in the SQL Server database. As a parameter, we are going to pass the AspNetCore.Identity class, and that is the IdentityRole class, and we are going name this property _roleManager. Next, I'm going to also use the AppDbContext because if you want to store some data in the database, we need the AppDbContext file. So private readonly is going to be the AppDbContext, and then just _context. Then at the end, we are going to inject the IConfiguration interface
>
> **[3:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=188)** because if we want to get some data from the appsettings.[JSON](../../Skills/Web%20Development/JSON.md) file, we need the IConfiguration interface. So private readonly, and this is going to be the IConfiguration and then just _configuration. Now, let us import the namespace for the AppDbContext, and for the AppDbContext, that is the API.Data. And for the IConfiguration, that is the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).Extensions.Configuration. Now, let us create the constructor because we need to inject all these classes and interfaces. So I'll just copy the first one. Paste it in here. Remove the underscore. Then next, let us also paste this second one, so copy and then just paste it in here. I'll remove the underscore. Then the AppDbContext. So Control + C, Control + V. Remove the underscore. And the last one is the Configuration. So the configuration interface. I'll just paste it in here. And remove the underscore. Now let us assign all the values. So _userManager is going to be the userManager. The _roleManager is going to be the roleManager. The _context is going to be the context.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-authentication-controller?u=76281980&t=282)** And the _configuration is going to be the configuration. Now, let us just save the changes, and this is all you need to do in this part to create the authentication controller.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** api (7), sql (2)
> **Code Identifiers:** usermanager (3), rolemanager (1)
> **UI Navigation:** go to (3), select the (1)
> **Tools:** visual studio (2)
> **File Paths:** appsettings.json (1)
> **Speakers:** - [instructor] (1)

#### [Registering new users using UserManager](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=0)** - [Instructor] Now that we have set up the authentication controller and the entity framework code, it is time to start working with actual user data. You'll first learn how to register a user in our app. And for that, we'll add a new API endpoint in the authentication controller. So let's go to visual studio and see it in action. In the authentication controller, we are going to create the new API endpoint. So just after the constructor, I'm going to type the API type. So the API end point type, and this is going to be of type Http post. Now, if you want, you can also define a custom name. So in this case, I'll just define the name of this API endpoint to be register-user. And then you'll type public async, then task. The return is going to be an IAction result and the name just Register. Now, we're going to send the user data as part of a request body. So for that, I'll just type in here FromBody, and then you are going to define the data tab. As a data tab, you're going to create another class. And this class is going to have only the necessary properties that we need to register a user. So for that, I'll just go to the Solution Explorer and then here, right click on the data folder and add a new folder. I'm going to name these folder view models.
>
> **[1:36](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=96)** And then inside the view models folder, I'm going to add the first view model, and that is going to be the registerVM. Now, inside this class, we're going to define just the properties that we need. So let us start with the, let's say the FirstName, then we will have the LastName, then next, we're going to have, let's say the EmailAddress, then we have the username. So problem string username. And then at the end we have the Password. If you want, you can add some value addition decorators to these properties. So let's say for example, if we want to make the email address or required fields Required and then import the namespace and the namespace for required is the component model.data notations. And that let us do the same for the username and the password. Now, let us see changes in here and go back to the authentication controller and then define in here, the FromBody to be the RegisterVM, then import the namespace and the namespace for the RegisterVM is Data.ViewModels. Let us also name it to be better RegisterVM. And then inside here, we are going to write all the code. But before we add a new user to the database,
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=189)** we are going to add two checks. First of all, we're going to check if the model is valid, all this means is that for example, in the RegisterVM, we defined the email address to be required. We're going to check if the email address actually has a value. So let us go back to the authentication controller. So for that, I'm just going to type in here if the modelState.IsValid and then in here is not valid. Then we are just going to return a BadRequest, which says that "Please, provide all the required fields."
>
> **[3:57](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=237)** The second check is going to be to check if the user already exists in our database. So for that, I'll just type in your var user exists = and to check if the user exists in our database, we're going to use the user manager, so await_userManager.FindByEmailAsync.
>
> **[4:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=264)** And then passes a bar meter the registeredVM.EmailAddress. Now, if the user exists is different from now. So if the user is already in our database, we are going to return another BadRequest, which says that the User, and then I'll just add in here the dollar sign, then insight curly brackets the registeredVM.EmailAddress already exists. And then next, we are going to construct the epic mission user object, which I go into use to add the user to the database. So for that, I'll just type in your ApplicationUser, and this is going to be our newUser = new ApplicationUser. And then you are going to define for this user, the first name to be the registerVM .FirstName. Then we have the LastName and this is going to be registerVM.LastName. And then we have the email address or Email is going to be the registeredVM.Email. Then we have the Username = registerVM.Username. And the last property that we're going to define in here is the security stamps. So SecurityStamp =Guid.NewGuid.ToString.
>
> **[6:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=366)** So now that we have the new user, we are going to use again, user manager to create this user. For that I'll just type var results = await_userManager.CreateAsync
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=384)** and this will take two parameters. The first parameter is going to be the new user. And then to this user, we are going to assign the password. So for that, I'll just use the registerVM.Password. And then we are going to check if the result is a success, or if the result.Succeeded, we are just going to return_Ok and then User Created. Otherwise we are just go to return BadRequest, which says that the "User could not be Created." Now, these is all you need to do. I'll just now start the app so we can test these API endpoints. So in here now you can see the authentication section and in the authentication section, you have a single API endpoint, the registerUser and the registerUser is off type Post. So I'll just click in here and then try it out, then scroll down in here and provide a first name. So I'll just provide my first name then a last name. Then the email address, I'll just test@[gmail.com](https://gmail.com). The username is going to be a trupia and the password is going to be let us say coding@2021, and then I'm going to click the, Create the execute button. So now that the request was signed,
>
> **[8:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/registering-new-users-using-usermanager?u=76281980&t=481)** if you scroll down in here, you can see that you have a response code of 200, which means a success and the response body is userCreated. Now, if you try to execute the same request with the same data one more time, so execute, and then scroll down. You'll see that you get a 400 and the response body is that user test@[gmail.com](https://gmail.com) already exists. I'm going to close the browser and go to visual studio. In visual studio, let us just go to the server explorer and in the server explorer, just right click on the AspNet Users Table, and then Show Table Data. In a table data, you can see that now we have a single role, and that is the user that we just added because it has the first name set to the Alvis, the last name Trupia and all the properties that we set in the request. And this is how you can add a new user in the database using the user magic class of the identity framework.

> [!info]- Semantic Content
>
> **Code Identifiers:** registervm (5), registeredvm (3), registeruser (2), modelstate (1), newuser (1)
> **UI Navigation:** go to (5), scroll down (3), click on (2)
> **Env Vars:** api (7)
> **Tools:** visual studio (3)
> **URLs:** [gmail.com](https://gmail.com) (2)
> **Cross-References:** go back to (2)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)

#### [Logging in users](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=0)** - On the last bar, you'll learn how to register user, using the userManager. On this part, you'll learn how to sign in a user using the userManager, but you can also use the sign-in manager which is another class from the identity framework. So for that, let us go to visual studio and see it in action. In visual studio, we are going to create another API end point software that just after the registered user, I'm going to create another HTTP post. And the name for this one is going to be login-user. Then I'll type in your public async. The return type is going to be of type task<IActionResult> and then login(). The same way the user data will be passed from the request body. So for that, the same way we are going to have, in your front body, and we are going to create a new view model. So for that, I'll just go to the Solution Explorer and then just click in the register. VM control C control V I'll change the name from register VM to loginVM. So, login VM. Then open the loginVM change the class in here to be loginVM. I'll remove the first name, the last name, and then just the, the email address and the password also remove the username. And both these fields are required.
>
> **[1:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=98)** So let us now, go back to the authentication controller and in here now I'll type loginVM, and then loginVM. The first thing that we need to check is it we need to check if the loginVM is valid. So for that, I'll just type in your, if not the ModelState.IsValid, and then I'm just going to return a BadRequest and the bad request will be please provide all required fields. And then after this check, we are going to check if the user exists in the database. So for that var userExists is equal to, and then we are going to use the userManager. So, _userManager.FindByEmailAsync and then passes a bar meter, the logVM.Email Address. Now, if the user exists or if the userExists is different from null, so is different from null. And also the await _userManager.CheckPasswordAsync
>
> **[3:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=180)** and I knew you need to pass two power meters. The user exists, and the loginVM.password. So, if the user exists in the database and the password is also correct, then we are just going to return an Ok user logged in or signed in. Otherwise, they're just going to return unauthorized. So, this is a way to login users or basically to check if the user credentials exist in our database, because in the upcoming parts, if the user exists, we are just going to generate a token, and then return that token to the user. But for now, we are just going to check if the user exists and then if the password is correct and then just return an okay user signed in. Now, let us see all the changes and run the application. So now, we can see that we have another API end point, the login user, and then click try it out. Scroll down in here. We need to provide the email address. So that is test@[gmail.com](https://gmail.com) and the password from the last user was coding at 2021 and then click the execute button. If you'll scroll down in here, you'll see that the response called is 200, which means a success and the Response Body user signed 10. Now let us scroll up in here
>
> **[4:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/logging-in-users?u=76281980&t=278)** and then change the password to be 2022, and then click execute. If you scroll down in here, you'll see that now we have a 401 error and the response body has a title of unauthorized.

> [!info]- Semantic Content
>
> **Code Identifiers:** loginvm (7), usermanager (3), userexists (2), logvm (1)
> **UI Navigation:** scroll down (3), go to (2), open the (1), scroll up (1)
> **Env Vars:** api (2), http (1)
> **Tools:** visual studio (2)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - on (1)

#### [Generating an access token](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=0)** - [Instructor] And now it is time to generate the access token. The token or the access token, as we have already mentioned is an encrypted string, which stores valuable information about the user. In our case, after the user has already been signed in, we are going to generate a token, which now we are going to return to the users and the users can use that token to access the API endpoints. So let us now go to visual studio and see reaction. In the login user API endpoints after the user has already been identified, we are going to generate a token. So for that in here, I'll just type var tokenValue is equal to, this is going to be on async method, so await and then GenerateJwTokenAsync.
>
> **[0:59](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=59)** It will take a single parameter, and that bar meter is going to be the userExists. And the userExists if you hover over the mouse, you'll see that it is of type ApplicationUser. Now this method does not exist. So I'll just create this method. I'll click in here and then generate this method. Not let us just scroll down in here and then in year we are going to return. So this is going to be a private async, then Task. The response is going to be a new view model. So let us just go to the solution explorer, and in the view models, we are going to add a new class. The class name is going to be AuthResultVM. The AuthResultVM for now is going to have two properties. The first property is going to be the token itself, and the second property is going to be the expiration time. So prop the type is going to be DateTime, and the name is going to be, ExpiresAt. Now let us see the changes in here and go back to the authentication controller. Now near change the task return type to be AuthResultVM, and now let us type some code. The first one I think that we need to define is going to be the authentication claims and claims are just properties related to the user software that I'll just type in here
>
> **[2:32](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=152)** var authClaims = new List of Claims. So list of claim, then let's import the namespace for the claim, and that is part of the system.security.claims. And then you are going to define some different claims. So for that new claim, and that is going to be from claim types. So ClaimTypes.Name. And the ClaimType.Name is going to be the userExists.Username. Let us actually change the user exists to be just user and I'm going to paste some other claims in here. So we have the name identifier, and I've said the name identified to be the ID. Let us change the userExists in here to be just user. Then we have some registerClaims and from the registerClaims, we have the Email registeredclaim that is said to be the user.Email. We have the subject and have just said the subject to be the email, we had the GTI and for the GTI I have just created a NewGuid. Next, we need to get the secret key from the app settings.[JSON](../../Skills/Web%20Development/JSON.md) file. So I'll just go to the solution explorer because we have already typed that code and then go to the startup.cs, scroll down in here to the secret part, and then just copy these parts, so Ctrl + C,
>
> **[4:08](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=248)** then go back to the authentication controller and I'll type in here var authSigningKey is equal to, and I'll let us import this symmetric security key, then import the Encoding and then replace the configuration with the _configuration. Then next, we are going to define the actual token. So for that var token = new JwTSecurityToken.
>
> **[4:44](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=284)** And then in here, we are going to define the issuer. The issuer the same way is going to come from the configuration. So in the upside is the JSON file. We have the Jwt section and in this section, we have the IssuerKey, then after the Issuer, we are going to define the audience. So audience and the audience is going to be _configuration. So the same way configuration, and then just copy this part paste in here. This is going to be the audience. Then next, we're going to set the expire. So the expiration time expires. And the expiration time for this token is going to DateTime.UtcNow.Add minutes
>
> **[5:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=339)** and we are going to add one minute. So it will expire after one minute and the typical expiration time for the token is five to 10 minutes. Then next we are going to add the claims and the claims is going to be the authClaims. And the last priority is going to be the signing credentials. And the signing credentials is going to be new signing credentials. The first bar meter is going to be the authSigningKey, and the second bar meter, the Security algorithm, so SecurityAlgorithms.Hmacsha and then 256.
>
> **[6:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=384)** Now by using the token, we can generate the Jwt Token. So for that var Jwt Token = new Jwt
>
> **[6:38](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=398)** and then security token handler, how we are going to use the WriteToken method, which takes as a bar meter, the security token that we just created, so token. Now we have the Jwt, so let us just construct a response, for that I'm going to type in here var response is equal to, and the response is going to be a new AuthResultVM. Then in the AuthResultVM, we have the token and the token is going to be the Jwt token. And we have the ExpiresAt, and to get the ExpiresAt, you can just choose the token.validTo property. And then at the end, you just need to return the response. Now that we have constructed the token, then I'll just scroll up in here. And then instead of returning the Ok "user signed in," I'm going to return the tokenvalue. Now to test this functionality, let us just go to annual the controller. So solution explorer, then let's say the home controller, and then in the home controller, I'm going to add the authorize attributes or Authorize. What this means is that if you want to access this API endpoint or basically any API endpoints within this controller, you need to be authenticated. So I'll just start the app and then to test the API enpoints, I'll use the postman.
>
> **[8:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=494)** Now, in postman, I'm going to create a new request and that is going to be an Http get to the home controller. And then if you click Send in here, you'll see that you get the 401 unauthorized. So let us go and sign in the user. This' going to be a post, an antibody when you go to the row and then change the text in here to be JSON. Then inside here, I'm going to define the email address to be, let's say, test@[gmail.com](https://gmail.com) and the best [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is going to be Coding@2021.
>
> **[9:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-an-access-token?u=76281980&t=541)** And here, if I change the API endpoint to be api/authentication/login-user, and then click, the Send button is a response now we get an expires at an a talk on value. So I'll just copy this token value Ctrl + C and then go to the home controller API endpoint and go to the authorization changing you're at the type to be Bearer token, and then paste the token that I just copied in here, and then click the Send button one more time. Now you can see that the user was authenticated using the token value. Now, if you'll go to the [jwt.io](https://jwt.io) and then you hear go to debugger and then paste your token in here, on the right you're going to see that the name is said to be trupia, the name identifier just the Guid pops the email is tests@[gmail.com](https://gmail.com). You have the issuer, the value that you put in the app site is that JSON file and the audience is also coming from the F settings.json file which is the value user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **UI Navigation:** go to (10), scroll down (2), scroll up (1)
> **Code Identifiers:** userexists (4), authclaims (2), registerclaims (2), authsigningkey (2), tokenvalue (1)
> **Env Vars:** api (7), json (3), gti (2)
> **URLs:** [gmail.com](https://gmail.com) (2), [jwt.io](https://jwt.io) (1)
> **Tools:** postman (2), visual studio (1)
> **File Paths:** settings.json (2)
> **Cross-References:** go back to (2)

#### [Adding the RefreshToken table](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=0)** - [Instructor] So far, you have learned how to generate an access token, but access [Tokens](../../Skills/Web%20Development/Tokens.md), or just tokens, are short-lived because they are valid for typically five to 10 minutes. Once a token is expired, you need to use a refresh token to generate a new token. The refresh tokens are long-lived tokens, and they typically are valid for up to six months. So it makes sense to store these tokens in the database, but to do so, we need to first create a table and we are going to create a table named Refresh Tokens. So let us go to Visual Studio and see it in action. To create a new a new table, we are going to add a new model. So for that, let us go to the Solution Explorer that inside the models, I'll just add a new class. So, add a class. I'm going to name this class Refresh Token and then click the add button. Now the first property is going to be the identifier for the refresh token and is going to be of type integer. And the name is going to be ID. Now to make sure that this property is set as the identifier for the refresh tokens table, you can use the key data notation. So let us import the namespace and the namespace is the component model.datanotations, and the next let us define all the properties.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=97)** The first property is going to be the token. So the token itself, the refresh token, so string, and then the value token. The next we're going to create the JWT ID. So prop, string, and then JWT. ID. The next, we're going to set a bool property. The name is going to be isRevoked, because if your refresh token gets stolen, then you can just revoke this token from the database. The next, this will have a date time and a date expire. So prop, date, time, and this is going to be date added. And the other date time is going to be the date expire. Now the refresh tokens belong to different users. So for that we are going to add a relationship between the refresh token and the users. In here, I'll just type the foreign keys of prop, string, and that is going to be the user ID. And then down here, prop is going to be the application user, because this is the custom class that we created to work with the user related data. And the name of this property is going to be user. Now the entity framework core is smart enough to know that the user ID is related to the user in here. But if you want,
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=189)** you can use the foreignkey data (indistinct). Foreign key, let us import the namespace, and that is the component model.datanotation.schema, and then name of and pass the parameter, the user ID. Now we added the model. Next, we need to go to the Solution Explorer. And then in here go to the appDBContext file. And then just after the constructor, we are going to define now the table name. So prop and the data type is going to be DB set. The parameter is going to be the refresh token. And that in here, we are going to define the refresh token's name, which is also going to be used by the entity framework to create the table with the same name in our database. So now everything is set up. Let us go to the package manager console. In here, I'll add a new migration. So Add-migration and then refreshTokensTableadded
>
> **[4:20](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-the-refreshtoken-table?u=76281980&t=260)** and then press enter. So we see that a new file named Refresh Tokens Table Added was created. And inside here, we have the definition for creating a table named refresh tokens. To apply this change in the database, just type in your update-database and press enter. Now, if you go to the Server Explorer and then you're just refresh the tables, you'll see that you have the refresh tokens table. And then if you click the show table data, that is currently empty because we didn't add any refresh tokens. And that is what you are going to learn in the next part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (12)
> **UI Navigation:** go to (6)
> **Code Identifiers:** isrevoked (1), appdbcontext (1), refreshtokenstableadded (1)
> **Env Vars:** jwt (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** visual studio (1)
> **Prerequisites:** set up (1)

#### [Generating and storing refresh tokens](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=0)** - [Instructor] So now that you've created the refresh token stable, it is time to generate a refresh token and also store that token in the [SQL](../../Skills/Data%20Science/SQL.md) database. So, let's go to Visual Studio and see connection. In Visual Studio, you need to go to the authentication controller and then you scroll down to the login user. Inside the login user, we have the generateJWTTokenAsync. Let's scroll down in here as well. So after the token is created and you'll also generate the jwtToken using the right token method, we are going to create and store the refresh token. So for that, in here, I'll just type var refreshToken is equal to new RefreshToken. And then inside here, we are going to define all the properties. The first property is going to be the JwtId is equal to the token.Id. The second property is going to be the IsRevoked and I'm going to set the IsRevoked to false. Then we have the UserId and the UserId is going to be the user.id. Then, next, we have the DateAdded and the DateAdded is going to be DateTime.UtcNow, and the DateExpire is going to be the DateTime.UtcNow and it is going to expire after six months of AddMonths
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=101)** and then six. Then, in here, we are going to have the token value. So token is equal to, and the token is going to be just a really complex or secure string. In our case, I'll just use two guids, so Guid.NewGuid, then .ToString, and to this guid, I'm going to add an additional guid, just so I can make it even stronger. So dash then a plus in here, then guid.NewGuid and then .ToString. Now, we have everything set up for the RefreshToken. Next, we need to add the RefreshToken to the database on await _context.RefreshTokens.AddAsync,
>
> **[2:34](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/generating-and-storing-refresh-tokens?u=76281980&t=154)** then paste the parameter of the refreshToken. And then next, just await _context.SaveChangesAsync. Then, at the end in the response, we need to also include the refresh token, but for that, we need to add an additional property. So we have the token, we're going to also add the RefreshToken. Save the changes. And then in here, the RefreshToken is going to be the refreshToken.Token. So now, let us save the changes around the app. Then, in Postman, I'll just go to the post request, and then just login the user. So the user that I already have in our database, so I click the send button. And now the response you can see that we have the token. We have the refreshToken and the expiresAt. Now, let us go to Visual Studio. In here, I'll stop Visual Studio, then go to the server explorer, then just refresh this table. Then, right click and then show table data. And now, in here, you can see that we have a RefreshToken. This is the token value, this is the jwtID. Then you have the DateAdded, the DateExpire, the UserId, and IsRevoked is set to false.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Code Identifiers:** refreshtoken (4), generatejwttokenasync (1), jwttoken (1), expiresat (1), jwtid (1)
> **UI Navigation:** go to (5), scroll down (2)
> **Tools:** visual studio (4), postman (1)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Injecting TokenValidationParameters](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=0)** - [Instructor] If a token is expired, it's really important to be able to generate a new access token using a refresh token. But before we write the actual code of refreshing [Tokens](../../Skills/Web%20Development/Tokens.md), we are going to first inject the token validation parameters as we are going to need it in the next part. So let's go to Visual Studio. In the Startup.cs, scroll down to the ConfigureServices method. And then from here, you need to get these parts. So you need to get the new TokenValidationParameters. So I'm just going to select this part and then Ctrl+X to cut this value. And then just before the Identity, I'm going to type in here var tokenValidationParameters = and then paste the token validation parameters. Now, in here I'm going to also set the ValidateLifetime = true, and also the ClockSkew = TimeSpan.Zero.
>
> **[1:16](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=76)** The reason why we need to set the ClockSkew to TimeSpan.zero is because we have set the expiration time to be one minute. And when you have a one minute expiration time, you need to also define the ClockSkew because by default, the expiration time is going to be 10 minutes. So let us see the changes in here. And then just after this definition, I'm going to type services.addSingleton, and then this is the parameter, the token validation parameters. Now the TokenValidationParameters needs to also be put inside the Add JWT Bearear. So tokenValidationParameters. And now this is all you need to do in the Startup.cs Next, let us go to the AuthenticationController. And then, in here, scroll down just after the configuration, I'm going to type in here private readonly, and this is going to be the TokenValidationParameters underscore the TokenValidationParameters Now let us inject the TokenValidationParameters in the constructor, so Ctrl+C Then just paste it in here, remove the underscore so they are different. And then just assign the value to the TokenValidationParameters = TokenValidationParameters And this is all you need to do to inject
>
> **[2:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/injecting-tokenvalidationparameters?u=76281980&t=173)** the TokenValidationParameters which you are going to use in the next part.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **UI Navigation:** go to (2), scroll down (2)
> **Code Identifiers:** tokenvalidationparameters (2), addsingleton (1)
> **Cross-References:** in the next (2)
> **Env Vars:** jwt (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Refreshing expired tokens](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=0)** - [Instructor] On this part, you'll learn how to generate a new access token using a refresh token. For that, let's go to Visual Studio. In Visual Studio, in the AuthenticationController, we are going to create a new API endpoint. So I'm just going to copy the login-user, then just paste it down here. Replace the login-user with refresh-token, then change the Login with RefreshToken. We're going to also create a new view model. So let us just go to the Solution Explorer. Then inside the ViewModels, right-click, then go to Add. We are going to add a new class. We are going to name this class TokenRequestVM, and I click the Add button. Now, inside here we are going to have two properties. The first property is going to be of type string, and it's going to be the Token, and the second property is going to be the RefreshToken, so RefreshToken. Now, both fields are going to be required. So let us import the namespace for Required, and that is the date annotations, and let's add the same decorator to the RefreshToken. Now, let us go back to the AuthenticationController and changing here the LoginVM to be the TokenRequestVM.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=97)** So this is going to be the tokenRequestVM. We are going to first check if the model state is valid. And if it is valid, then we are going to verify and generate a token. So I'm just going to remove the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code. And then here I'll just type var result is equal to await VerifyAndGenerateTokenAsync, and this is going to take as a parameter the tokenRequestVM. Now, let us create this method, so let us just generate this method. So we have the method in here, and the response is going to be async, then we have Task AuthResultVM. Now, the first thing that we're going to do in here is that we are going to create a JWT security token handler. So var jwtTokenHandler is equal to the Security Token Handler. And then inside a try-catch block, we are going to write the actual code. But before we write any code in here, we are going to first get the token from the database and also the application user. So for that, I'll just type in here var storedToken is equal to await, then _context.RefreshTokens .FirstDefaultAsync. Let us import the namespace for this method.
>
> **[3:15](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=195)** That is the Entity Framework Core. And then in here I'll type x that goes to x.Token is equal to the tokenRequestVM.RefreshToken. So now that we have this storedToken or the token in the database, in the same row we also have the user ID, so now we are able to get the dbUser. So dbUser is equal to await, then _userManager.FindByIdAsync method and pass as a parameter the storedToken.UserId.
>
> **[4:01](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=241)** Now, inside the try block, we are going to check if the token is valid. So for that, I'll just type in here var tokenCheckResult is equal to, and in here I'm going to use the jwtTokenHandler.ValidateToken method which takes three parameters. The first parameter is going to be the token itself that we want to validate, so tokenRequestVM.Token. The second parameter is going to be the _tokenValidationParameters that we injected in the last part. And the third parameter is going to be the actual result from this check. So for that, I'll just type in out var validatedToken. Now, if the token is not valid, an exception is going to be thrown. And if an exception is thrown, the exception type is going to be the Token expire, so SecurityTokenExpiredException. And if the token is expired, what you need to do next is that you can just check if the storedToken actually is still valid. So if the storedToken .DateExpire is greater than or equal to the DateTime.UtcNow, so if the storedToken or the refreshToken is still valid, then we are just going to generate a new token.
>
> **[5:39](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=339)** So, basically, we are just going to call the GenerateJWTTokenAsync, so in here. And then this will take as a first parameter the user or the dbUser, and the second parameter is going to be null. Now, let us modify the GenerateJWTTokenAsync because now we have a second parameter, and the second parameter is going to be the RefreshToken, so rToken. And if the refreshToken is null, so let us scroll down in here, and I'll just type in here before the refreshToken, if the refreshToken, so rToken, is different from null, what this means is that we have the refreshToken, it is valid, but we just want to generate a new token, new access token, that in that case I'm going to just construct a response in here, so var response is equal to, and actually we have this part, so var response, up here. And the RefreshToken is going to be the rToken.Token. And in here we have the rTokenResponse, or you can name this one anything you want, and then just return the rTokenResponse. But if the RefreshToken
>
> **[7:14](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=434)** is not valid, so in here, so else, then we are going to generate a new token async, but now this takes two parameters, the dbUser, and the second parameter is going to be null. So if it is null, a new RefreshToken will also be generated. But if it's not null, so if the storedToken is still valid, then we're not going to update the storedToken. In here just add await, and then in here await, and now everything should work as expected. And here don't forget the semicolon, save the changes, and now if you want, and now let us just start the app. We see that we have an error. And now let us just go to the errors that we have in here. Then in here just add return await, then semicolon at the end, and in here the same way, return await, then we have the semicolon. In here the same way, if you want to generate a new token, even though the token has not expired yet, then in that case, you can just the same method. So just copy and paste it in here. So we'll basically just get the existing access token or the storedToken, and not update. The reason why it doesn't update is because we just added this condition in here. So if the token
>
> **[8:49](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=529)** is different from null, then we are not generating a new refreshToken. Now, let us save the changes and just scroll up in here. We see that we get an error. And the reason for that is because we have not returned a response yet. So just return Ok, and then pass as parameter the result, and then save the changes. We see that we still have an error. So I'll just go here, click, and now the reason for this error is because we updated this method. So now let us update the code in here. This is going to be null. And since it is null, it is going to generate an access token and a refresh token. Now, let us start this project and then go to Postman. In here I'm just going to log in with my existing user. So if I try to now, for example, just go and access the HomeController, if I click Send, you can see that I get the 401 Unauthorized error. Now, let us go to the POST, then click Send. This is the new token, so Control + C, then just go to Authorization and then just paste it in here and click Send. Now, you can see that we were able to be authenticated because we have now 200 and a Welcome to HomeController.
>
> **[10:24](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=624)** Let us go to the POST request and actually create a new request. So I'll just copy this part, creates a new request, this is going to be a POST, then just paste it in here. Now, this is going to be refresh-token. Then go to the Body part, then go to Role, and change the Text to be [JSON](../../Skills/Web%20Development/JSON.md). Then I'll just go to the other POST request and then just copy this whole section, Control + C, and then just paste it in here, and then just remove the expiresAt. And now I'll actually wait for the token to expire, and I've set the expire time to be one minute. So after one minute, these requests should not be valid. And now when you click the Send button, you see that you get the 401 Unauthorized. Now, let me go to the refresh-token API endpoint and then just click the Send button. You see that the request just generated a new token, but the refreshToken is still the same. And the reason for that is because it has not expired yet, because the expiry time was set to be six months. So let us copy the new token value, so this value, Ctrl + C, and go to the GET request, then just replace the token. So, as you can see, the old one is expired. Just replace the old one with the new one,
>
> **[12:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/refreshing-expired-tokens?u=76281980&t=720)** and then click Send, and now you can see that you get a 200 response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Code Identifiers:** storedtoken (9), refreshtoken (7), tokenrequestvm (4), dbuser (4), rtoken (3)
> **UI Navigation:** go to (13), right-click (1), scroll down (1), scroll up (1)
> **Env Vars:** post (4), api (2), jwt (1), json (1)
> **API Endpoints:** post  (2), get  (1)
> **Tools:** visual studio (2), postman (1)
> **Cross-References:** go back to (1), in the last (1)
> **Analogies:** for example (1)


### 3. Role-Based Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Seeding the database with roles](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=0)** - [Instructor] On this chapter, we are going to talk about the role-based authentication or, as we call it differently, the authorization. To get started with this chapter, we are going to first seed the database. So we are going to add some default roles to the database that we are going to use in the upcoming parts. For that, let us go to Visual Studio and see it in action. In Visual Studio, the first thing that we are going to do is that we're going to create a new file, so a new class. And inside this class, we are going to create a method which is going to add the roles in our database. So since this is a data-related file inside the Data folder, I'll just right-click and then go to Add, then here go to Class. The class name is going to be AppDbInitializer, and then click the Add button. Inside this class, I'll just type public static, this is going to be a static method, async Task. The name is going to be SeedRolesToDb. And the parameter is going to be the IApplicationBuilder interface, IApplicationBuilder, and then I'll just name it applicationBuilder. Now, let us import the namespace for the IApplicationBuilder, and that is part of the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md).AspNetCore.Builder.
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=97)** Then inside here I'm going to create a reference to the role manager. So for that, we need to first create a scope for the application services. So using, and then in here var serviceScope is equal to, and then applicationBuilder.ApplicationServices.CreateScope.
>
> **[2:06](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=126)** Now, let us import the namespace for the CreateScope, and that is the Microsoft.Extensions.DependencyInjection. And then inside here, we are going to create a reference to the role manager, so var roleManager is equal to, and this is going to be serviceScope.ServiceProvider.GetRequiredService. And the service that we are going to get is the RoleManager, and we are going to pass the parameter in here the IdentityRole which is the base class for the role-related stuff in the Identity Framework. Now, let us import the namespace for the RoleManager. That is the AspNetCore.Identity, and that also includes the IdentityRole. Now, down here we are going to first check if the role exists in our database. And if it doesn't exist, then we are going to add the role to the database. The roles that we are going to add, if we go to the Solution Explorer and then go to Controllers, we see that we have the HomeController, the ManagementController, and the StudentController. Now, we are going to add just two roles, the Management role and the Student role. So in here I'll just type if does not and then awaits roleManager.RoleExistsAsync, and we are going to check for the Manager role, so Manager.
>
> **[3:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=223)** So if it doesn't exist, then we are just going to add this role, so await roleManager.CreateAsync, and it will take as a parameter the IdentityRole object, so new IdentityRole, and the role is going to be Manager. Now, if you want, you can just create some static properties and then you can use the static properties in here. So let us just go to the Solution Explorer. And then in the Data folder, I'll just add a new folder. I'll name this folder Helpers. And then inside here, I'll just create a new class. I'm going to name this class UserRoles, and then click Add. This is going to be a static class. And inside it, we'll have two roles, so public const string, and then the first role is going to be Manager is equal to Manager, and the second role is going to be Student, so the value is going to be Student. Now, let us go back to the AppDbInitializer and then in here replace the Manager with the UserRoles.
>
> **[5:11](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=311)** And then let us import the namespace, so UserRoles.Manager, and then just replace the other Manager down here. And we are going to do the same for the Student role, so I'll just copy this part and then just paste it down here, change the UserRoles in here to Student and down here to Student as well. So we created this SeedRolesToDb method. Now, let us just go to the Startup.cs because we need to call this method from the Startup.cs. Then here scroll down to the Configure method. And then after the app.UseEndpoints, we're going to seed the database. So for that, now I'll just type in here AppDbInitializer.SeedRolesToDb, and this will take as a parameter the ApplicationBuilder. Now, if you want, you can just wait on this method, and the error is gone. Now, let us just run the application and see if the roles are stored in the database. So the app started successfully. I'll just close the browser so the app is stopped and then go to the Server Explorer. And then in the Server Explorer,
>
> **[6:43](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/seeding-the-database-with-roles?u=76281980&t=403)** I'll just refresh the school-api-db, and then here go to Tables, and then just right-click in the AspNetRoles, and then Show Table Data. And here you can see that the roles that we just create were stored in our database so now we can use them in the API endpoints.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **UI Navigation:** go to (9), right-click (2), scroll down (1)
> **Code Identifiers:** rolemanager (3), applicationbuilder (2), servicescope (2)
> **Tools:** visual studio (2)
> **Env Vars:** api (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### [Adding role claims to tokens](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=0)** - On this part, you'll learn how to modify the token value so it also includes the user role. For that, let us go to Visual Studio. In Visual Studio, the first thing that we're going to update is going to be the register VM. So for that go to data, then in here, view models, and then register VM. And here after the password, we want to also include the user role. So I'll just type in here role and I'll let us just go to the authentication controller. And then inside the register user, after the user has been created, we are just going to add in here the user role. So if the result is success, then you are going to add user role, and then we are going to return, okay. To add the user role, we need to first check if the role is a valid role. So switch, we are going to switch on registered VM.role. And then you are going to check if the case is the user roles and then import the namespace for the user role. So if the case is user roles.manager, then we are going to add this user to the role manager.
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=93)** So await then underscore user manager.addtoroleasync.
>
> **[1:41](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=101)** And we are going to add to this role, the new user. So new user will be added to the role userroles.manager.
>
> **[1:53](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=113)** Then break. Now, let us also check for the student role because we also have the student role, so I'll just copy this section and paste it down here. Change the userroles.manager to userroles.student. And we're going to add this user to the student's role. Otherwise, we are just going to default, break and we are not going to add the user to any role. Now I'll just put a break point in here and then just start the application. So now that we modified the register user API end point, let us also go and modify the generate JWT token method. So let us just scroll down in here. And we come to this method, the generate JWT token async. And in here we have the auth claims section. And a role is also a claim so it basically defines, or it describes who the user is. So for that, just after the existing auth claims, we are going to also add the user role claims. So add user role claims. But to be able to add the user role claims, we need to first get all the roles for the user. So for that, I'll just type in here VAR, user roles is equal to await and underscore usermanager.getrolesasync
>
> **[3:28](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=208)** and then pass as a parameter, the user. Now for each user role, so for each VAR user role in user roles, we are going to add a claim, so authclaims.add, and we are going to add a new claim and the claim is going to be of type claimtypes.roles. So claimtypes.role. And the value for this claim is going to be the user role. Now, in our case, in the register method, we have just assumed that the user belongs to a single role, but this implementation also supports cases when a user has multiple roles. Now let us just save all the changes around the app. Then you'll just go to the register user. Then you try it out. Just going to type in here students then last name. Student's email address is going to be student@[student.com](https://student.com).
>
> **[4:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-claims-to-tokens?u=76281980&t=277)** The username is going to be students. The password is going to be coding@2021, and the role is going to be student. Now I'll just click execute in here. And if you scroll down in here, you're going to see that the user was created. So now let us just go and sign in. So now let us go and sign in using this account. I'll scroll down in here and go to the login user and try it out. The email address is the student@[student.com](https://student.com) and the password is coding@2021 and then click the execute button. If you scroll down in here, you get the token, you get the refresh token and the expiresAT. Now let us copy the token, control C and then just go to [jwt.io](https://jwt.io). Then you go to debugger, replace the token with your token and if you scroll down in here, you can see the name is students. And then in here you have the email, you have the subject, the JTI, but also the role and the role is now set to be student.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7), scroll down (5)
> **Env Vars:** jwt (2), var (2), api (1), jti (1)
> **URLs:** [student.com](https://student.com) (2), [jwt.io](https://jwt.io) (1)
> **Tools:** visual studio (2)
> **Code Identifiers:** expiresat (1)
> **Definitions:** is a  (1)
> **Speakers:** - on (1)

#### [Adding role authentication to a controller](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=0)** - [Instructor] So far, we have just added the authorized attribute in the home controller, which required all the users to be authenticated. And anyone, regardless of their role, could access that controller. On this part, you'll learn how to add roles to the authorized attribute, so only the defined roles can access the controller. So, for example, the student controller is going to be accessed just by the students and the manager controller just by the users with the manager role. For that, let us go to Visual Studio. In Visual Studio, I'll go to the Solution Explorer, and then you're going to go to the Controllers. And in Controllers, I'll open the management controller and the student controller. I the student controller I'll add the authorized attributes, so authorize then import the namespace, which is the AspNetCore.Authorization and then here, define the role. So roles is equal to the user roles dot, and then we are going to use the student role, but let us first import the API.Data.Helpers namespace, then dot student. So this way we have defined the student controller to be accessed just by the users, that have the student role. So let us copy this line and then just go to the management controller,
>
> **[1:33](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=93)** and then I'll paste that line in here. Important namespace for the authorize, and then is the AspNetCore.Authorization and UserRoles. So UserRoles, and that is the data.helpers. Now, let us change the role in here to be manager and save the changes. Now, I'll just run Visual Studio and check if everything is working as expected. To test these controllers, I'm going to use Postman because we need to pass as a bimeter, the token value as well. So let us first create a new user. So register user, then go to the body and in the body, we're going to have the first name. Let's say, the first name is going to be manager. The last name, then we have the email address, we have the password and we're going to also have the role set to manager. So here the email address is going to be manager@[manager.com](https://manager.com) and the password coding at 2021. So I'll just click send and then you will see that we get a 400 bad request and the reason for that is because if you check the errors in here, the username is also required.
>
> **[3:09](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=189)** So let us add the username up here. The username is also going to be manager and then click the send button one more time. So we see that the user was created. Now let us change the register user in here to be log in user and then remove the username, the first name and last name, but also the role and then click the send button. Now you'll we see that the token is generated, so let us copy the token. So control C, let us go to the first gets and then just go to the authorization, and this is the home controller, which just requires the users to be authenticated, it doesn't check for any roles. And then let us just click send. We see that we are authenticated and we get the welcome to home controller, but if I go to the student controller, because I'm logged in with the manager role, this is going to fail, but we get a 403 Forbidden. Which means that we were able to be authenticated, but we were not authorized because the role was a different role. Now let us change the controller to be management and then click the send button. And now you can see that we get the 401, but the reason for that in these cases because the token has expired. So then I'll just go and sign in one more time.
>
> **[4:42](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-role-authentication-to-a-controller?u=76281980&t=282)** The token was expired because the lifetime will set to be one minutes, so control C, let us go back, paste it in here and then click send. And now we can see that we are authenticated and authorized successfully. Now, if you want, we can do the same for the student role, so let us just go to the post request in here. And then in the body, I'm going to use the students@[students.com](https://students.com) and then click send, let us copy these token value, control C. And here, try to access the management controller. So I'll just replace a token and then click send. We get a 403 Forbidden, but if I go and try to access the student controller and I click send, everything will work as expected because in here we see that we get the 200, OK status code, and the message is welcome to student controller.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (8), open the (1)
> **Tools:** visual studio (3), postman (1)
> **URLs:** [manager.com](https://manager.com) (1), [students.com](https://students.com) (1)
> **Env Vars:** api (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Adding multiple roles to a controller](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=0)** - [Instructor] On the last part, you added the role-based authentication in your controller. You updated the Student controller so it's accessible just by the Student role and the management controller just by the Manager role. But in the identity framework, it's also possible to add multiple roles in the same controller. You can have different roles which access all the API endpoints, or you can have different roles accessing different API endpoints within the same controller. Let us go to Visual Studio and see it in action. In Visual Studio, we are going to modify the HomeController and in the authorize attribute, we are going to add the Student and the Manager roles. So for that in here I'll just type roles and the roles need to be a format string and then separated by a comma. So the first role is going to be user roles and then let us just import the space, then in here, .Student. Now let us join these two roles with a comma and then in here type, UserRoles.Manager. Now down here, I'll just create another API endpoint. So we have an httpGet. Let us create another httpGet. So the first one, the first httpGet is going to be let us say, Student,
>
> **[1:35](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=95)** and the second one is going to be, let us say, Manager. So the first one will be accessible by the Student role and the second one by the Manager role. So GetStudent, GetManager. Here let us change the text in your HomeController, Student, and the other one HomeController Manager. Now with the current configuration, so we have just defined the roles in the controller level, in this case, all the API endpoints are going to be accessed by the Student role and the Manager role. So let us start the application and test what we have just written. In here, let us first login as a Student. So let us go to the body and then we have in here student@[student.com](https://student.com). Click Send. I'll copy the token and then go to the first request, changing here from Student to home and then slash Student. And the just go to the authorization. Replace the old token with the new one and click Send. And you can see that we are able to access the Student API endpoint. Now let us just go to the Login User and change the Student to be Manager, so manager@[manager.com](https://manager.com), and then click Send. Let's copy the token value,
>
> **[3:10](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=190)** go back to the httpGet, replace the old token with the new one and then click Send. You can see that we are able to access the Student API endpoint, but also the Manager, you see the Manager is also accessible. Now let us go back to Visual Studio and then here, I'll just stop Visual Studio, I'll copy the authorized line and then just paste it in here in the Student. I'll let the role in here, just the Student role then paste the same line in the Manager. So I'll just copy this one, paste it in here, change the role to be Manager, then save the changes. Now let us run the app one more time.
>
> **[4:07](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=247)** So we can see that the app ran successfully, so let us go to Postman, and then in here, go to the http POST request for authenticating a user. And I'm going to be authenticated as a Manager, so I have in here the email address and the password and then click the Send button. So you can see that a token was generated. I'll just copy this token, Control-C, and then go to the first request, which is the httpGet to get the Student API endpoint from the HomeController. So just paste the token in here, but now we know that the token that we paste in here is a Manager token, and I click the Send button. Now you'll see that you get the 403 Forbidden error, which means that the user was authenticated but was not authorized. And that's right because we just defined that the Student API endpoint will be accessible just from the Student roles. And here on the HomeController, then I'll just change the Student to be Manager, and then use the same token and click the Send button. And you are going to see that we have the 20O OK status code. So in here we have the message, Welcome to HomeController Manager. So let us go to the POST request one more time and then here change the login user from Manager to just Student. So student@[student.com](https://student.com) and then click the Send button. Let us copy this token, so Control-C
>
> **[5:46](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/adding-multiple-roles-to-a-controller?u=76281980&t=346)** and then go back to the Get request. And here now if you replace the token with the Student token and try to access the Manager API endpoint, you will get a 403 Error. But if you try to access the Student API endpoint with a Student token, then you are going to see that you get a 200 status code.

> [!info]- Semantic Content
>
> **Env Vars:** api (10), post (2)
> **UI Navigation:** go to (9)
> **Code Identifiers:** httpget (5)
> **Tools:** visual studio (4), postman (1)
> **URLs:** [student.com](https://student.com) (2), [manager.com](https://manager.com) (1)
> **Cross-References:** go back to (3)
> **API Endpoints:** post  (2)
> **Definitions:** is a  (1), means that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps for learning more token-based authentication](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=0)** - [Instructor] Thank you for joining me in this course. During this course, we learned about the token based authentication. You first learned about the difference between authentication and authorization, the JWT and the identity framework. Then next you learned about authenticating users in a web API. We at first learned how to register a user, how to generate an access and a refresh token, and also how to generate a new access token using a refresh token. By the end of this course, we also talked about authorization. You learned how to set a role as a claim in a user's access token. You also learned how to add multiple roles within a single controller. Well this is what you have learned so far, but what should you learn next? When we generated a new access token using a refresh token, we just checked for the expiration time. Now you could add another check for the IsRevoked property. You have also learned how to generate and store in the database a refresh token. Now you could try to invalidate a refresh token by setting for example, the expiry time to a date in the past or just setting the IsRevoked property to true. In any case, if you need help to resolve your challenges or have a question about this course, feel free to get in touch with me via Twitter or [LinkedIn](../../Skills/Web%20Development/LinkedIn.md). And if you want to learn more about the .net technologies,
>
> **[1:37](https://www.linkedin.com/learning/asp-dot-net-core-token-based-authentication/next-steps-for-learning-more-token-based-authentication?u=76281980&t=97)** you can check out my other courses here at LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **Env Vars:** jwt (1), api (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Ervis Trupja](../../Instructors/Web%20Development/Ervis%20Trupja.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/asp-net-core-token-based-authentication-2427293)

## Skills Covered

- Tokens
- ASP.NET Core

## Path Context

### In [Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)
← [Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security](Securing%20ASP.NET%20Core%20Apps-%20Advanced%20Techniques%20for%20Web%20Application%20Security.md) | **6 of 9** | [ASP.NET Core in .NET 6- Dependency Injection](ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md) →

## Appears In

- [Getting Started as an ASP.NET Core Developer](../../Paths/Web%20Development/Learning%20Paths/Getting%20Started%20as%20an%20ASP.NET%20Core%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Building Web APIs with ASP.NET Core 8](Building%20Web%20APIs%20with%20ASP.NET%20Core%208.md) — ASP.NET Core
- [ASP.NET Core- Building a GraphQL API](ASP.NET%20Core-%20Building%20a%20GraphQL%20API.md) — ASP.NET Core
- [ASP.NET Core in .NET 6- Dependency Injection](ASP.NET%20Core%20in%20.NET%206-%20Dependency%20Injection.md) — ASP.NET Core
- [Securing ASP.NET Core Apps- Advanced Techniques for Web Application Security](Securing%20ASP.NET%20Core%20Apps-%20Advanced%20Techniques%20for%20Web%20Application%20Security.md) — ASP.NET Core
- [Building Angular and ASP.NET Core Applications](Building%20Angular%20and%20ASP.NET%20Core%20Applications.md) — ASP.NET Core

---

[↑ Back to top](#)