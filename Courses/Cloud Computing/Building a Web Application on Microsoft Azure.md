---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-web-application-on-microsoft-azure-22880696
url: "https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696"
duration_minutes: 108
duration: 1h 48m
level: Intermediate
updated: 10/6/2023
learners: 11522
skills:
  - Microsoft Azure
  - Web Application Design
exercise_files: true
github: "https://github.com/LinkedInLearning/building-a-web-application-on-microsoft-azure-4405955"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH3FlqFYlaSpQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696444981713?e=2147483647&amp;v=beta&amp;t=1FPowhH8nsHjgbZXKG-cKF2H9SuvuqssLlmlAgfrv8M"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Getting Started as an Azure Developer]]'
prev_courses:
  - '[[Azure Quick Tips for Developers]]'
next_courses:
  - '[[Azure Storage Essential Training (2021)]]'
path_nav: '[{"path":"Getting Started as an Azure Developer","position":4,"total":7,"prev":"Azure Quick Tips for Developers","next":"Azure Storage Essential Training (2021)"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/microsoft-azure
  - skill/web-application-design
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Building%20a%20Web%20Application%20on%20Microsoft%20Azure.md)

![Building a Web Application on Microsoft Azure](https://media.licdn.com/dms/image/v2/D560DAQH3FlqFYlaSpQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696444981713?e=2147483647&amp;v=beta&amp;t=1FPowhH8nsHjgbZXKG-cKF2H9SuvuqssLlmlAgfrv8M)

# Building a Web Application on Microsoft Azure

> Microsoft Azure offers a wide range of integrated services for developers looking to build a web application on the cloud. In this course, instructor and Microsoft MVP Rodrigo Díaz Concha shows you the fundamentals of how to build web applications that take advantage of several of these services, including Azure DevOps, Azure App Service, Azure SQL, Azure Functions, and more.Upskill as an in-deman

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696) | 1h 48m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Using Azure DevOps for Storing Your Code]]** (5 videos)
- **[[#2. Hosting and Running the Web Application in Azure App Service]]** (6 videos)
- **[[#3. Using Azure SQL for Your Data Storage]]** (4 videos)
- **[[#4. Using Azure Storage for Storing Binary Files]]** (10 videos)
- **[[#5. Using Azure Functions to Improve Your Web Application]]** (7 videos)
- **[[#6. Taking Advantage of Azure Logic Apps for Your Web App]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Capitalize on the power of Azure to craft your web app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=0)** - [Rodrigo] Need to create web applications in Azure?
>
> **[0:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=3)** Learn practical techniques to implement cloud native web applications.
>
> **[0:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=7)** We'll create and employ the pet management application for the Wisdom Pet Medicine Company from start to finish by using Azure DevOps, App Services, SQL Database and Functions.
>
> **[0:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=20)** I'll show you the essential techniques and the most common features required to get your application up and running in no time.
>
> **[0:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=28)** My name is Rodrigo Diaz Concha, and I'm a member of the Microsoft MVPs and Regional Directors.
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=34)** Your learning journey is about to start.
>
> **[0:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=37)** Let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [rodrigo] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=0)** - [Instructor] To get the most out of this training course, it's recommended that you have certain knowledge beforehand.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=6)** The first topic that I want to mention is Azure itself.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=10)** Things like what resource groups are, and a basic knowledge of how to use the Azure portal will be enough.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=17)** In addition, you should be comfortable reading C# code.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=21)** Don't worry, you don't have to be an expert in .NET, and I won't focus on that particular code too much.
>
> **[0:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=30)** Previous experience with any programming language should be enough for you.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=35)** Even though I use .NET and C# for the Wisdom Pet Medicine application, I'm not going to describe Azure concepts you couldn't use in your own programming language.
>
> **[0:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=47)** And finally, some Git knowledge should come in handy.
>
> **[0:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=51)** In concrete, I'm going to use push/pull and pull requests.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=56)** Now, speaking of the tools, we're going to use, of course, .NET SDK.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=61)** It's the first one since this is an [ASP.NET](https://ASP.NET) core web application.
>
> **[1:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=66)** And you need an IDE.
>
> **[1:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=68)** In this case, I used Visual Studio, but you can follow the entire course with Visual Studio Code if you like.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=77)** And Git for cloning the repository and for following the exercises.
>
> **[1:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=84)** And finally, the Azure Storage Explorer.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=88)** I use this when testing the Azure Function and the Azure Storage Account.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=94)** Before I end this video, let me remind you that you can open an Azure account for free at the [azure.com/free](https://azure.com/free) website.

> [!info]- Semantic Content
>
> **Env Vars:** net (4), sdk (1), asp (1), ide (1)
> **Code Keywords:** finally, (2), case, (1), function (1), let (1)
> **Tools:** visual studio (2), azure portal (1)
> **CLI Commands:** git (2)
> **URLs:** [asp.net](https://asp.net) (1), [azure.com](https://azure.com) (1)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### What you are going to build
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=0)** - [Instructor] In this course, we'll build a pet management application for Wisdom Pet Medicine, a fictitious veterinary hospital and pet grooming company that has been expanding its business for a few years.
>
> **[0:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=13)** The aim of Wisdom Pet Medicine is to establish itself as a leading source of pet healthcare expertise.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=21)** They create tailored healthcare plans that are specific to each of their patients.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=27)** The application is based on web technologies and serves to handle the information of pets that are registered in the hospital.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=35)** The company specifically focuses on caring for dogs, cats, and rabbits.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=41)** To begin, we'll use a code base created with [ASP.NET](https://ASP.NET) Core and the C# programming language.
>
> **[0:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=47)** This web application uses the Entity Framework Core and it's in-memory data provider.
>
> **[0:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=54)** We're going to store the code for this application centrally in Azure Repos, one of the Azure DevOps services.
>
> **[1:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=62)** Next, we're going to deploy an Azure App Service to host and run the application.
>
> **[1:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=68)** The App Service will also include a deployment slot named Dev that will be connected to Azure Repos.
>
> **[1:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=76)** The setup will ensure that any code changes are automatically deployed to the slot.
>
> **[1:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=83)** Then we'll stop using the memory data provider and set up an Azure SQL Database to store the data.
>
> **[1:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=91)** The initial code base uses the images directly from the static wwwroot folder.
>
> **[1:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=98)** To improve this, we'll create an Azure storage account, which we'll use initially to store the photos of the pets.
>
> **[1:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=106)** Later, we're going to create a second project to implement an Azure Function.
>
> **[1:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=112)** The function's job will be to generate a thumbnail for the uploaded image.
>
> **[1:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=117)** Additionally, we'll also create a slot named Dev that will connect to the second project located in Azure Repos.
>
> **[2:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=125)** Finally, we'll create an Azure Logic App for sending an email whenever there's a new role in the pet stable.
>
> **[2:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=133)** By the end of the course, you'll have developed a cloud native application using Microsoft Azure and some of its most notable services.
>
> **[2:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=143)** Okay, fasten your seat belts since this is going to be fun.
>
> **[2:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=148)** Join me in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), static (1), this, (1), finally, (1)
> **Env Vars:** asp (1), net (1), sql (1)
> **Prerequisites:** setup (1), set up (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 1. Using Azure DevOps for Storing Your Code

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using Azure DevOps for storing your code
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=0)** - [Instructor] After a few days of work, you have a functional first version of the path management application.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=6)** You built it using [ASP.NET](https://ASP.NET) Core and the C# programming language.
>
> **[0:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=12)** You're using Entity Framework Core within memory data provider for data access.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=18)** Right now, the project resides solely in your development machine.
>
> **[0:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=22)** So you want to be sure your hard work is well-protected.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=27)** That's why you wisely decided to utilize Azure DevOps, a platform that allows you to store your source code centrally and securely.
>
> **[0:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=38)** So stick with me in this chapter where we'll uncover just how straightforward it is to start with Azure DevOps.

> [!info]- Semantic Content
>
> **Env Vars:** asp (1), net (1)
> **Code Keywords:** protected (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Exploring the Pet Management application base source code
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=0)** - [Instructor] Let me show you the application that we're going to use in this course.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=5)** So as you can see here in the terminal, I have the wpm folder, which is the root folder.
>
> **[0:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=12)** And inside the source folder we have the wpm dot web, asp dot net core application.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=21)** And also this Visual Studio solution file.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=25)** So let me change the folder to wpm dot web so I can easily execute dot net run.
>
> **[0:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=33)** And let's open up this local host webpage.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=41)** And as you can see, this is our regular asp dot net core application.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=46)** Nothing fancy.
>
> **[0:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=48)** However, I added this Pets menu item, which is the Pets Management system that we're going to use in this course.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=59)** So here, as you can see, we have the Pets catalog.
>
> **[1:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=63)** So I can easily go ahead and view a pet, say that I want to view this pet, and I can view its details such as the age and the weight and the owners.
>
> **[1:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=78)** And let's go back here to the Pets catalog.
>
> **[1:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=82)** I can also search.
>
> **[1:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=84)** Say that I want to search for Nina.
>
> **[1:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=87)** Here's Nina.
>
> **[1:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=89)** I can view this dog.
>
> **[1:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=91)** I can go back and I can edit this pet.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=96)** Say that I want to change the age and let's change the weight.
>
> **[1:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=101)** And finally click Save.
>
> **[1:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=104)** So you can see that I successfully changed the age and the weight of this pet.
>
> **[1:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=110)** Okay, let's go back here again and let's click on Create.
>
> **[1:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=115)** And now let's create a new pet.
>
> **[1:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=117)** Say Snoopy, age 10, weight 25.
>
> **[2:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=124)** And Snoopy is a beagle dog.
>
> **[2:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=127)** So let's say, and as you can see, I now have Snoopy as part of this Pet catalog.
>
> **[2:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=136)** Okay, so now let's open up this solution in Visual Studio so we can see the source code.
>
> **[2:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=146)** Here we are in Visual Studio, and let's open up this cs port file.
>
> **[2:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=151)** If you're not familiar with dot net, this is the configuration file for this project.
>
> **[2:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=157)** So we can easily see that this is targeting dot net seven and I'm using a couple of packages that are the memory provider for the edited framework core and also the SQL Server provider.
>
> **[2:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=173)** In this case, I'm only using the memory provider.
>
> **[2:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=178)** So you can see that in the program dot cs file.
>
> **[3:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=183)** Particularly in this line, we can see that I am executing at in memory WpmDb.
>
> **[3:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=191)** In other words, I'm using an in memory database instead of using SQL server.
>
> **[3:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=198)** In this course we're going to use Azure SQL, so eventually we're going to change this.
>
> **[3:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=206)** Here we are in Visual Studio.
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=208)** So let's open up this cs file.
>
> **[3:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=212)** If you're not familiar with dot net this is a configuration file for this project.
>
> **[3:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=217)** So we can see that this is targeting dot net seven.
>
> **[3:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=221)** And also this is referencing a couple of packages which are SQL Server and in memory for the entity framework core orm.
>
> **[3:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=232)** In its current state I'm only using the memory provider.
>
> **[3:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=237)** So we can open up the program cs file.
>
> **[4:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=240)** And here in line number seven, you can see that I'm executing add in memory WpmDb.
>
> **[4:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=248)** So if we follow this implementation, you can see that this is precisely executing the use in memory database for the additive framework core.
>
> **[4:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=261)** In other words, each time I execute this application the entire database will be deleted and regenerated.
>
> **[4:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=272)** Speaking of which, if I open up the WpmDb context file, we can see that this is the database for the pets management system for the Wisdom Pet Medicine Company.
>
> **[4:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=286)** In this course we're going to use Azure SQL so eventually we're going to replace this method call with the one that configures the SQL server provider.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (1), this. (1)
> **Env Vars:** sql (6)
> **Tools:** visual studio (4), terminal (1)
> **Definitions:** is a  (2), in other words (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Creating a new Azure DevOps account and organization
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how you can create a new Azure DevOps account.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=8)** So, the first thing that you need to do is navigate to dev.[azure.com](https://azure.com), and you're going to land in this webpage where you can read more information about all the different services included in Azure DevOps.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=25)** As you can see here in this webpage, Azure DevOps has many different services.
>
> **[0:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=32)** However, in this course we're going to focus on Azure Repos, which is the service that allows us to host the source code for our applications.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=44)** Okay, so let's scroll back here and click on the start free button.
>
> **[0:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=51)** Then, I'm going to enter my Microsoft account credentials, which I did already to expedite this process.
>
> **[1:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=60)** So, now, I have to click on continue.
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=65)** And in this other section I need to specify the organization name.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=70)** In this course, I'm going to use Wisdom Pet Medicine.
>
> **[1:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=75)** So, I already did that, that's why this is going to tell me that the name is already taken.
>
> **[1:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=83)** And then, you need to specify the region that you want to use.
>
> **[1:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=87)** So, be sure to use the closest to your location.
>
> **[1:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=92)** And in this case, I'm going to use Central US.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=95)** And finally, you have to type those cap check correctors for validation purposes.
>
> **[1:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=103)** Okay, so let me show you the final result.
>
> **[1:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=107)** I have the Azure DevOps account that I created and the Wisdom Pet Medicine organization.
>
> **[1:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=113)** So, I'm ready to create a new project and we're going to do that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), case, (1), finally, (1)
> **UI Navigation:** click on (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Creating a new Azure DevOps project and adding existing code
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=0)** - [Instructor] Now that we've created this new organization, let's got ahead and create a new project, and let's name it, say WPN, which stands for wisdom pet medicine.
>
> **[0:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=12)** And we're going to use a private visibility.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=17)** And, finally, we're going to use Git as its version control technology.
>
> **[0:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=23)** So, let's go ahead and click on the create project button.
>
> **[0:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=29)** And, as you can see here, this process is quite fast.
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=34)** So, here's the landing page for the project that we successfully created.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=41)** And now we're ready to navigate to Repos.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=44)** And, in this case, we don't have any source code yet.
>
> **[0:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=48)** And, it makes sense, because I need to push the existing code page that we're going to use in this course.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=56)** So, there are a couple of options that I can use here.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=61)** The first one is cloning the entire repository in my computer and then copying the entire project to that new folder.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=72)** Or, I can use an existing folder, and use the Git remote add command to specify and configure this new project as its remote repo.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=88)** So let's use this option.
>
> **[1:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=90)** I'm going to copy the entire command set I have here, so we're ready to open up the terminal.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=100)** Here, in the terminal, I'm going to paste those commands.
>
> **[1:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=105)** And, let's press Enter, so the remote repo is configured.
>
> **[1:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=113)** And we push the entire source code to the repo.
>
> **[1:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=119)** So, this is successful.
>
> **[2:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=121)** Let's go back to the browser.
>
> **[2:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=125)** So, now, we're ready to refresh the browser to see that we have the contents for this project that we're going to use in this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), private (1), finally, (1), case, (1)
> **CLI Commands:** git (2)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), navigate to (1)
> **Exercise Files:** source code (2)
> **Env Vars:** wpn (1)
> **Cross-References:** go back to (1)
> **Definitions:** stands for (1)

#### Creating and accepting a pull request in Azure Repos
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=0)** - Generally speaking, you don't work directly in the master or main branches.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=6)** Instead, you create a new branch and then implement those changes or features in that newly created branch.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=14)** And finally, you create a new pull request so somebody with enough permissions can merge those changes back to the main or master branch.
>
> **[0:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=26)** So, let's do this.
>
> **[0:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=28)** I'm going to create a new branch here, and let's name it "fix".
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=34)** And let's click on Create.
>
> **[0:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=36)** And now, say that I want to implement some changes or fixes in this code.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=42)** I don't want to change anything, so I'm just going to add a new line here, and let's save this file.
>
> **[0:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=49)** And as you can see here, in Visual Studio, it detects that this particular file has a change.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=56)** So, I'm ready to add a message before I commit those changes.
>
> **[1:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=63)** So, "Fixed the Create feature."
>
> **[1:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=66)** And let's click on Commit All.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=71)** And now I'm ready to push those changes back to my fix branch in the server.
>
> **[1:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=79)** So, let's do this.
>
> **[1:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=82)** And now, those changes are in the server.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=88)** Fantastic.
>
> **[1:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=89)** Let's open up the browser.
>
> **[1:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=92)** Here in Azure DevOps.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=94)** I navigated to the WPM project and then I navigated to the pull requests page.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=102)** So you can see that it identifies that I updated the fix branch, and I can create a pull request right from here.
>
> **[1:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=111)** So, the title and the description are fine.
>
> **[1:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=115)** And let's click on Create.
>
> **[1:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=119)** So, here, I need to approve this pull request.
>
> **[2:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=123)** Of course, in real world applications there's somebody else who is reviewing and verifying those pull requests.
>
> **[2:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=133)** And finally, I'm going to mark this pull request as complete.
>
> **[2:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=140)** And let's click on complete merge.
>
> **[2:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=142)** After some seconds those changes that I implemented will be merged to the master branch.
>
> **[2:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=151)** In addition, if I navigate to the branches page, you can see that I only have the master branch because the fix branch was deleted after the merge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), finally, (2), this. (2)
> **UI Navigation:** click on (4), navigate to (1)
> **Env Vars:** wpm (1)
> **Tools:** visual studio (1)
> **Speakers:** - generally (1)


### 2. Hosting and Running the Web Application in Azure App Service

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Hosting and running the web application in Azure App Service
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=0)** - [Instructor] The company's confident its use of Azure DevOps will accelerate its development cycles and enable faster value delivery.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=10)** They're looking forward to using the application to provide helpful feedback.
>
> **[0:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=16)** Together, you acknowledge the significant benefits of continuous software delivery.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=21)** Prompted by this, you delve into Azure to uncover a service that could enable this goal.
>
> **[0:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=28)** You stumble upon Azure App Service a service specializing in deploying, hosting, and running code-based or even container image based web applications and services.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=42)** The time has arrived to deliver your application to your users.
>
> **[0:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=47)** Okay, let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **Speakers:** - [instructor] (1)

#### Provisioning a new Azure App Service resource in the portal
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=0)** - [Instructor] Now we're ready to create the Azure App Service that we're going to use to run our application.
>
> **[0:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=7)** So as you can see here, I already created this Wisdom Pet Medicine Resource Group.
>
> **[0:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=13)** So let's click on create to create a new resource.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=17)** And here in the marketplace, I'm going to search for web app.
>
> **[0:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=24)** This is a template that I want to use.
>
> **[0:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=26)** Even though it's based on the Azure App Services, the name of the template is Web App, and this is because Azure App Services support different workloads, and web applications is just one of them.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=42)** Okay, let's click on Create.
>
> **[0:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=45)** And here you need to specify the subscription, and of course the resource group, and then the name.
>
> **[0:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=54)** In this case, I'm going to specify wpmappservice.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=59)** Take into account that this name should be unique in the entire Azure Cloud.
>
> **[1:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=66)** So it looks like wpmappservice is available.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=70)** So now we need to specify if we want to publish code or maybe Docker containers, or even the static web apps.
>
> **[1:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=79)** In this case, I'm going to choose code that is based on the .NET 7 runtime and you need to select the operating system.
>
> **[1:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=90)** In this case, I'm going to use Windows.
>
> **[1:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=92)** However, Linux is another option that you can use for .NET applications because .NET is across platform technology.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=102)** Okay, so now let me search for West US 3 which is the closest region that I have right now.
>
> **[1:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=112)** And now we need to specify the pricing plan.
>
> **[1:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=116)** In other words, we need to create a new app service plan resource that is the hardware configuration that we want to use.
>
> **[2:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=126)** So let's create a new one named wpmappserviceplan.
>
> **[2:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=133)** You can always navigate to explore pricing plans to understand the different configurations and features that those plans have.
>
> **[2:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=143)** In this case, I'm going to use Premium V3 P1V3, and this is because I want to use some features from the premium pricing plans.
>
> **[2:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=154)** Okay, so now zone redundancy, which in this case, I'm not going to use, so it's fine to leave it that way as disabled.
>
> **[2:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=167)** Let's navigate to deployment.
>
> **[2:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=169)** In this other option, you can specify GitHub action settings.
>
> **[2:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=174)** In this case, we're not going to use GitHub actions, that's why I want to navigate to networking.
>
> **[3:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=181)** I want to enable public access so I'm going to leave those features and values as is.
>
> **[3:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=188)** Let's navigate to monitoring.
>
> **[3:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=191)** Here the portal is asking me if I want to enable application insights, which I do.
>
> **[3:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=197)** However, let's change the name to wpmapplicationinsights,
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=208)** just like that.
>
> **[3:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=210)** And let's click on, okay.
>
> **[3:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=213)** And finally, if you want to specify some tags, this is the place, otherwise you can just click on review and create to understand the different options that you selected.
>
> **[3:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=227)** Okay, so let's click on create and let's wait for this resource to be deployed.
>
> **[3:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=232)** So I'm going to pause the video.
>
> **[3:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=237)** After a while, the deployment will be completed so we can navigate to this resource and this is the webpage that we're going to use to manage this App Service.
>
> **[4:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=249)** You can always test this by navigating to this default domain URL.
>
> **[4:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=254)** So let's click on this, and this webpage means that the App Service is running correctly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), case, (6), static (1), for . (1), public (1)
> **UI Navigation:** click on (6), navigate to (5), select the (1)
> **Env Vars:** net (3), p1v3 (1), url (1)
> **Definitions:** is a  (1), in other words (1), means that (1)
> **Tools:** github (2)
> **Exercise Files:** template (2)
> **CLI Commands:** docker (1)
> **Analogies:** just like (1)

#### Creating a new deployment slot for development
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=0)** - [Instructor] There are many different ways we can use to deploy the application to Azure App Service.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=6)** For example, we can use Visual Studio, we can use Visual Studio Code, or we can even do it manually.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=14)** However, in this course, I'm going to show you a great feature of App Services.
>
> **[0:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=20)** That is the deployment slots.
>
> **[0:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=23)** With deployment slots, we can have different environments we can use for deploying the applications.
>
> **[0:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=30)** So as you can see here in this moment, I have a single deployment slot, which is the production one, and I'm going to create another one for development purposes.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=42)** So let's click on Add Slot and the name will be dev.
>
> **[0:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=48)** So as you can see, the name is being part of the final name of this deployment slot, it's being used as a suffix.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=56)** And now I need to choose if I want to clone the settings from the original App Service.
>
> **[1:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=63)** In this moment, I don't have any kind of custom settings, so that's why I'm not going to clone anything.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=70)** Okay, so let's click on Add, and let's wait for this to be created.
>
> **[1:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=74)** After a while, this deployment slot will be created.
>
> **[1:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=78)** Okay, so now we're ready to close this.
>
> **[1:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=82)** And here in the list we can see that we have two deployment slots, the original one, and of course the one that we just created.
>
> **[1:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=93)** You can navigate between deployment slots by clicking on the link that is here on the list.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=100)** So let's do that.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=102)** And now we're ready to deploy the application to this particular deployment slot.
>
> **[1:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=108)** We're going to do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), while, (1), this. (1)
> **Tools:** visual studio (2)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Connecting the deployment slot to Azure Repos
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=0)** - [Instructor] We have created this deployment slot, and now we're ready to publish the application.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=6)** So, we can do that by navigating to the deployment center.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=10)** And in the deployment center, I'm going to use the Azure repos source.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=17)** So if I select this, you can see that in this Azure repos section, I can choose the organization, I can select the project, which is WPM, the repository, and finally, the branch that I want to use.
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=34)** In this case, it's the master branch.
>
> **[0:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=37)** So this is working because I'm using the same Microsoft account for both the Azure portal and the Azure DevOps account that I created before.
>
> **[0:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=47)** Okay, so let's save this by clicking on the save button, and let's wait for this to be deployed.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=59)** And after some seconds the deployment slot will be connected to the Azure repos account that we created before.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=70)** So let's do this.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=71)** Let's navigate to logs.
>
> **[1:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=74)** And here, let's click on refresh.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=77)** So you can see, that this is deploying the application in its current state.
>
> **[1:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=83)** So this is a current state of the application that is in the Azure repos project.
>
> **[1:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=90)** Okay, so this is done, and now we're ready to test the application.
>
> **[1:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=97)** So let's go back here to the overview page, and let's navigate to the deployment slot.
>
> **[1:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=106)** And if we do that, you can see that we're displaying the application that we just published.
>
> **[1:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=115)** So, if I navigate to Pets, I can see the different pets that we had before.
>
> **[2:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=123)** Just as expected.
>
> **[2:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=128)** Remember that the application was deployed to this deployment slot, and not the app service itself.
>
> **[2:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=136)** In other words, if I navigate here to home, and then the app service, and I navigate to the default domain, you can see that the app service itself has this content, and the deployment slot has this other content.
>
> **[2:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=157)** So you can see here in the URL, that those two are different.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (1), finally, (1), case, (1), this. (1)
> **UI Navigation:** navigate to (4), select the (1), click on (1)
> **Env Vars:** wpm (1), url (1)
> **Definitions:** is a  (1), in other words (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### Modifying the source code to automatically publish the app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=0)** - [Instructor] Now that we've connected Azure Repos to this deployment slot, why don't we make some changes to the source code, just to verify that application is automatically published to this slot, after we accept the pull request.
>
> **[0:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=15)** So let's do that.
>
> **[0:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=16)** Let's open up the terminal.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=18)** In here, I'm going to create a new branch.
>
> **[0:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=22)** And I'm going to name it menu, since I want to make some changes in the menu items.
>
> **[0:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=28)** And let's execute git checkout.
>
> **[0:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=31)** And now, let's open up Visual Studio Code.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=35)** So here, I want to modify Layout.cshtml, because this is a place where we can find the menu items for this application.
>
> **[0:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=45)** So I'm going to change Pets to Pet Management.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=50)** Something like this.
>
> **[0:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=52)** And... Let's commit those changes.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=59)** And finally, let's click on publish branch.
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=65)** So this is publishing the branch back to the server.
>
> **[1:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=68)** So we're ready to go to the browser.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=71)** Here we are in the WPM project, and let's navigate to repose.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=77)** And here, you can see that I updated the menu branch.
>
> **[1:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=82)** So let's click on create a pull request, and let's click on create, and I'm going to approve my own pull request.
>
> **[1:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=93)** Let's click on complete.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=95)** And finally, I'm going to click on complete merge.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=100)** So let's wait for this.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=102)** And the pull request was completed.
>
> **[1:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=106)** So, we're ready to go back to the deployment slot.
>
> **[1:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=111)** Let's go here to logs, and let's click on refresh.
>
> **[1:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=117)** So as you can see, now the application will be published again with this change.
>
> **[2:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=124)** So let's pause the video.
>
> **[2:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=129)** And after some seconds, this deployment will be completed.
>
> **[2:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=133)** We can see that in the status column, it says success.
>
> **[2:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=139)** So, if I go here to the overview page, I can navigate to the default domain of this deployment slot, and we can see the change that was automatically published.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (2), finally, (2)
> **UI Navigation:** click on (6), navigate to (2), in the menu (1), go to (1)
> **CLI Commands:** make (2), git (1), find (1)
> **Tools:** terminal (1), visual studio (1)
> **Env Vars:** wpm (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### Swapping the deployment slots
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=0)** - [Instructor] Let's suppose you've completed all the required changes and features in your development environment.
>
> **[0:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=7)** In other words, in your dev deployment slot.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=10)** And now you're ready to roll out these modifications into the production environment.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=17)** What would you do?
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=18)** Luckily, deployment slots have the swap feature.
>
> **[0:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=22)** That allows us to swap the contents between a source and a target.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=27)** So in this case, the source is the dev deployment slot and the target will be production.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=35)** Below, we can see the different config changes that are going to be applied after this process finishes.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=42)** So let's do this.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=44)** Let's click on swap and wait for this process to complete.
>
> **[0:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=49)** After a little while, the process will be completed and now we're ready to close this panel.
>
> **[0:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=55)** And what happens if I navigate to the dev deployment slot?
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=61)** In this case, I'm displaying the old contents.
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=65)** In other words, the contents that come from the production deployment slot.
>
> **[1:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=69)** And let's duplicate this and let's remove the suffix.
>
> **[1:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=75)** So you can see that now, the app service itself has the application.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=81)** We can see that the path management application is running in the app service just as expected.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=88)** That said, it's easy to see how deployment slots allow you to have a clean and a straightforward development workflow.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (2), this. (1), while, (1)
> **UI Navigation:** click on (1), navigate to (1)
> **Definitions:** in other words (2)
> **Speakers:** - [instructor] (1)


### 3. Using Azure SQL for Your Data Storage

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using Azure SQL for your data storage
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980&t=0)** - [Instructor] So far, the application has been using temporary in-memory data.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980&t=5)** However, we require a more reliable database to handle the company's workload and consistently store information.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980&t=14)** Azure SQL Database is the perfect choice for our relational database.
>
> **[0:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980&t=19)** And with any framework core, making changes to the code is effortless.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980&t=25)** It's time to see this in action, so let's go ahead and get started.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), let (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### Creating the Azure SQL server and database
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=0)** - [Rodrigo] In this video, I'm going to show you how to deploy a new Azure SQL Database and its related server.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=6)** So let's click on Create.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=8)** And the template that we're looking for is Azure SQL.
>
> **[0:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=11)** So let's search for this, and let's use this template, and let's click on Create.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=18)** This template allows you to use SQL in different ways; however, the option that we're looking for is SQL databases.
>
> **[0:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=24)** So let's click onc Create again.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=27)** And after specifying both the subscription and the resource group, we're ready to specify the name.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=35)** This is the name of the database.
>
> **[0:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=36)** So the database will be WPM.
>
> **[0:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=40)** And we need to create a new server.
>
> **[0:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=43)** So let's click on Create New.
>
> **[0:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=45)** And the name of the server is going to be WPM SQL Server.
>
> **[0:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=51)** And my location is West US 3.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=56)** So now, I'm ready to specify how can I connect to this server.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=61)** In this case, I'm going to use both SQL Server authentication and Azure Active Directory authentication.
>
> **[1:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=69)** So for the SQL Server authentication, I want to use this username and a password.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=77)** So let's write this down just like this.
>
> **[1:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=84)** And now, for the Azure Active Directory authentication, I need to select an admin.
>
> **[1:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=92)** So let's pause the video.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=95)** I selected my own user as the admin.
>
> **[1:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=99)** So we're ready to go back.
>
> **[1:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=101)** Let's click on Okay.
>
> **[1:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=104)** And now, I need to specify if I want to use the elastic pool, which I don't.
>
> **[1:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=110)** And I need to specify if I am going to create a development environment or a production environment.
>
> **[1:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=119)** So this is related to the kind of hardware that you want to deploy.
>
> **[2:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=125)** So in this case, I'm going to use development, which is related to the serverless option.
>
> **[2:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=130)** This is going to be cheaper.
>
> **[2:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=132)** And of course, you can always go here and configure your database for your own requirements.
>
> **[2:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=142)** Talking about storage redundancy, it's fine to use locally redundant backup storage.
>
> **[2:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=149)** Let's go here to Networking.
>
> **[2:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=151)** In this case, I'm going to change to a public endpoint.
>
> **[2:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=155)** And I'm going to be sure that Azure services and resources can access this server.
>
> **[2:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=163)** And I'm going to add my own client IP address.
>
> **[2:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=168)** And let's go to Security.
>
> **[2:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=172)** This is fine.
>
> **[2:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=174)** And let's click on Review and Create and Create again.
>
> **[3:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=180)** So remember, we're going to create a new SQL Server in a database.
>
> **[3:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=187)** Let's wait for this process to finish.
>
> **[3:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=192)** After a while, this process will complete, and we're ready to go to this resource.
>
> **[3:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=198)** And we can see that this is a SQL database, which is WPM.
>
> **[3:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=203)** And we can navigate to the server by clicking on this link.
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=208)** Fantastic!
>
> **[3:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=210)** Follow me to the next video where we're going to modify the source code so we can use this SQL database instead of the in-memory database that we're using currently.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), case, (3), this, (1), new. (1), this. (1)
> **Env Vars:** sql (10), wpm (3)
> **UI Navigation:** click on (5), go to (2), navigate to (1)
> **Exercise Files:** template (3), source code (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)

#### Modifying the application to use the SQL EF provider
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=0)** - [Instructor] In its current state, this application is using an in-memory database.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=5)** In other words, each time we execute the application, all the changes will be lost and that's not okay.
>
> **[0:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=15)** That's why we need some kind of persistent storage such as Azure SQL database.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=21)** That's why in this video we're going to change the code to use the SQL database that we just implemented.
>
> **[0:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=29)** Okay, let me show you how.
>
> **[0:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=31)** Here in the program.cs file, in line number seven, we have this method call that is AddInMemoryWpmDb.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=41)** This is an extension method that I implemented.
>
> **[0:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=45)** So if I show you the code, you can see that this is using memory database that comes from the in-memory provider of the Entity Framework Core.
>
> **[0:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=58)** So luckily we have this other method that is AddWpmDb, and this other method uses the SQL Server provider for Entity Framework Core.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=71)** However, this provider needs a connection string.
>
> **[1:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=75)** In this case, the name of the connection string should be Wpm.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=81)** Okay, so we need to make some changes in the code.
>
> **[1:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=85)** Let's go ahead and get started.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=88)** Let's go back to program.cs because we need to replace this method call with AddWpmDb.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=96)** And this expects an IConfiguration object, and I'm going to pass builder.Configuration.
>
> **[1:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=104)** Okay, now we need the connection string.
>
> **[1:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=108)** So let's go back to the Azure portal.
>
> **[1:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=112)** Here in the Azure portal, we are in the SQL Server overview page.
>
> **[1:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=117)** And if we navigate to SQL Databases, we can see the entire list of databases implemented in this SQL Server.
>
> **[2:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=127)** So we have wpm, let's click on this.
>
> **[2:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=131)** And under Settings, we can find connection strings.
>
> **[2:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=136)** This is the connection string that we're going to use in the application.
>
> **[2:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=140)** We just need to replace the password.
>
> **[2:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=144)** Okay, let's copy this and let's go back to Visual Studio.
>
> **[2:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=148)** Here in Visual Studio, I need to store the connection string.
>
> **[2:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=154)** There are many ways we can use to store that connection string.
>
> **[2:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=158)** We can use appsettings.json We can use appsettings.development.json.
>
> **[2:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=165)** However, let me show you a better option which is user secrets.
>
> **[2:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=170)** So I'm going to right click on the project and I'm going to use Manage User Secrets.
>
> **[2:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=177)** This is a secret.json file that won't be pushed to the centralized repository.
>
> **[3:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=185)** So as you can see, the location of this secrets.json file is inside this computer and won't be available in the centralized repository.
>
> **[3:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=196)** That's why it's way better to use the user secrets instead of the appsettings.json files.
>
> **[3:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=205)** Okay, so let's create a new ConnectionStrings element, ConnectionStrings.
>
> **[3:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=213)** This is the name that .NET expects.
>
> **[3:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=217)** And the name is Wpm, and the value is the connection string.
>
> **[3:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=223)** I just need to replace the password because as you can see here, it has a placeholder.
>
> **[3:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=230)** So I'm going to pause the video and replace the password.
>
> **[3:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=234)** Great, now I need to create a new branch.
>
> **[3:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=238)** I don't want this to be in the master branch.
>
> **[4:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=242)** So let's create a new branch and let's name it sql.
>
> **[4:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=246)** And I'm going to choose bring the changes to sql.
>
> **[4:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=250)** And now we're ready to test this application out.
>
> **[4:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=255)** So let's start a new debugging session.
>
> **[4:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=259)** And here we can navigate to Pet Management.
>
> **[4:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=263)** And as you can see, I have the entire pet catalog, just as expected.
>
> **[4:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=269)** However, the data comes from the Azure SQL database instance and not from the in-memory database.
>
> **[4:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=278)** We can even verify this if we go back to the Azure portal.
>
> **[4:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=282)** Here in the Azure portal, I'm going to open the query editor and I'm going to use Azure Active Directory authentication.
>
> **[4:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=293)** And here, I can expand the tables.
>
> **[4:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=296)** So you can see that we have now five tables, and actually I can right click on one of those tables and see the contents of this particular table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (1), pass (1), this. (1)
> **Env Vars:** sql (7), net (1)
> **Tools:** azure portal (4), visual studio (2)
> **UI Navigation:** click on (3), navigate to (2), open the (1)
> **File Paths:** appsettings.json (2), appsettings.development.json (1), secret.json (1), secrets.json (1)
> **Cross-References:** go back to (4)
> **Definitions:** in other words (1), is an  (1), is a  (1)
> **CLI Commands:** make (1), find (1)

#### Creating a pull request for publishing the changes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=0)** - [Instructor] Remember that I created this branch in the previous video?
>
> **[0:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=3)** There's a reason why and I'm going to explain that to you in a little bit.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=8)** In this moment, I want to push the changes to the remote SQL branch.
>
> **[0:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=15)** So I'm going to use this git changes branch and let's type, Implemented the SQL Server provider.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=25)** And let's click on Commit All and let's push those changes back to the remote branch.
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=34)** So let's do this.
>
> **[0:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=36)** And this is done.
>
> **[0:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=40)** And now we're ready to go back to Azure DevOps.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=44)** So here in the Azure DevOps portal, I'm going to navigate to Repos and then Pull Requests.
>
> **[0:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=52)** And as you can see here, it identifies that I updated the SQL branch right now.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=59)** So let's click on Create a pull request and say, Implemented the SQL Server provider.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=72)** And let's click on Create.
>
> **[1:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=76)** Let's approve.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=77)** And finally, let's complete this pull request.
>
> **[1:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=83)** So it's been merged.
>
> **[1:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=86)** So let's navigate to the Azure portal, and let's go back here to the resource group.
>
> **[1:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=97)** And let's navigate to the dev deployment slot.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=102)** Deployment Center.
>
> **[1:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=107)** And then let's open up the logs.
>
> **[1:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=111)** And as you can see, this is deploying the application in this moment.
>
> **[1:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=117)** So let's wait for this process to finish.
>
> **[2:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=121)** And after a while, this process will be completed.
>
> **[2:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=125)** And let's navigate to Overview.
>
> **[2:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=130)** And finally, let's navigate to this default domain.
>
> **[2:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=136)** So we can see that this is not working in this moment.
>
> **[2:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=141)** Can you identify why?
>
> **[2:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=144)** If your answer is because we don't have the connection string in the deployment slot, you are right.
>
> **[2:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=151)** So let's go back here to the Azure portal.
>
> **[2:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=155)** And if we go here to Configuration, we will be able to add this connection string.
>
> **[2:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=163)** So let's add a new connection string, which is Wpm, and then I'm going to paste the connection string that I copied from the SQL database.
>
> **[2:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=173)** So let's paste it right here.
>
> **[2:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=176)** And of course I need to change the password.
>
> **[3:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=180)** And to do that, I'm going to pause the video.
>
> **[3:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=183)** Okay, and now I'm ready to change the type, which is SQL Azure.
>
> **[3:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=190)** And with this other configuration setting, which is deployment slot setting, we can specify that this connection string will be attached to this deployment slot only, which is not the case when I swap the slots.
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=208)** I want this connection string to replace the one that is in the production slot.
>
> **[3:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=213)** Or if you don't want to replace that connection string, then you should choose this option.
>
> **[3:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=222)** So it'll depend if you have different databases for production and development.
>
> **[3:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=230)** Okay, so let's click on this deployment slots setting because I only have one database so it actually won't make a difference right now.
>
> **[3:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=239)** And let's click on OK, and finally, let's click on Save.
>
> **[4:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=245)** Let's continue and let's wait for this process to finish.
>
> **[4:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=251)** So the process is quite fast.
>
> **[4:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=253)** You're already finished and now we're ready to test the application again.
>
> **[4:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=258)** Let's go back to this tab and let's refresh the webpage.
>
> **[4:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=262)** And now the application is running, so we can navigate to the Pet Management option.
>
> **[4:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=268)** We can see that we have all the pets and everything is working just as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (25), finally, (3), type, (2), this. (1), while, (1)
> **UI Navigation:** click on (6), navigate to (6)
> **Env Vars:** sql (6)
> **Cross-References:** go back to (2), previous video (1)
> **CLI Commands:** git (1), make (1)
> **Tools:** azure portal (2)
> **Speakers:** - [instructor] (1)


### 4. Using Azure Storage for Storing Binary Files

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using Azure Storage for storing binary files
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980&t=0)** - [Instructor] The company asks you to add a feature for updating pet photos.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980&t=5)** One requirement is that the application must keep the pictures in a centralized and secure location.
>
> **[0:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980&t=12)** To achieve this, you decide to use an Azure storage account which can store various types of data, including blobs, message queues, tables and shared files.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980&t=25)** The good news is that implementing this logic is quite easy thanks to the number of npm packages and SDKs available for Azure.
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980&t=34)** So without any delay, let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), let (1)
> **CLI Commands:** npm (1)
> **Speakers:** - [instructor] (1)

#### Creating the Storage account using the Azure portal
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how to deploy the storage account that we're going to use in the Wisdom Pet Medicine solution.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=8)** So let's click on Create and let's search for storage.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=14)** And the one that we need is storage account.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=18)** So let's click on Create.
>
> **[0:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=20)** And after specifying both the subscription and the resource group, we're ready to specify the name, which should be unique in the entire Azure Cloud.
>
> **[0:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=33)** So let's say with wisdompetmedicinestorage, and then the region, which is West US 3, in my case.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=44)** And performance, which is standard, we don't need premium features at all.
>
> **[0:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=51)** And for redundancy, let's use luckily, redundant storage.
>
> **[0:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=57)** Okay, so be sure to select allow enabling public access on individual containers.
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=65)** And in networking, be sure to select enable public access from all networks.
>
> **[1:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=73)** So those are the default values, so we don't need to do anything else.
>
> **[1:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=78)** So let's click on Review.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=81)** You can always verify all the settings and configurations that you selected.
>
> **[1:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=87)** And let's click on Create.
>
> **[1:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=90)** So we're ready to wait for this process to finish.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=94)** So let me pause the video.
>
> **[1:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=98)** So this is deployed, and we can navigate to this resource, so we can see this overview page, and now we're ready to use it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), public (2), case. (1), else. (1)
> **UI Navigation:** click on (4), navigate to (1)
> **Speakers:** - [instructor] (1)

#### Creating the Blob container in the Storage account
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=1)** - [Instructor] The Azure storage account is a versatile service since it allows me to store blobs, and file shares, and queues and tables.
>
> **[0:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=9)** However, let's focus on containers.
>
> **[0:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=13)** Containers are similar to folders where we can store different blobs.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=18)** So let's create a new container and let's name it Photos.
>
> **[0:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=24)** And the access level that we need is blob since we need to have anonymous read access for the blobs that we're going to upload, in other words, the pets photos.
>
> **[0:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=36)** So let's click on create and we can navigate to photos to upload those pictures.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=44)** So let's click on upload.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=46)** And here I'm going to use the Windows Explorer.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=50)** As you can see, I already navigated to the images sub folder in the source code, and let's drag and drop those image files.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=61)** And finally, let's click on upload.
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=65)** So this process is quite fast and now we're ready to view those pictures.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=72)** For example, let's use Nina.jpg.
>
> **[1:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=75)** I can click on this button and then select view, edit so we can see this picture.
>
> **[1:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=82)** And I can also navigate to overview to copy the full url and let's paste it.
>
> **[1:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=93)** So you can see that the fully qualified name of this picture is this one that we have on the screen.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=102)** In other words, we need to modify the seed data and also the database data that we have in Azure SQL to load those pictures from the blob storage.
>
> **[1:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=115)** So we're going to do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), finally, (1)
> **UI Navigation:** click on (4), navigate to (2), drag and drop (1)
> **Analogies:** picture (2), similar to (1), for example (1)
> **Definitions:** in other words (2), is a  (1)
> **Env Vars:** sql (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Modifying the seed data to read the photos from the container
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=1)** - [Instructor] We need to update the seed data and also the Azure SQL database data to reflect the new URL for the photos.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=10)** So there are different ways we can do this, however, I'm going to use the following technique.
>
> **[0:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=16)** I want to modify the wpmtv context file that has the seed data, and then I'm going to drop all the tables in the database so the next execution of the application regenerates the entire tables with the new data.
>
> **[0:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=37)** So let's do this, first, let's create a new branch and let's name it, Seed and let's click on create, and let's modify this.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=50)** I'm going to paste the URL that comes from the Azure Portal.
>
> **[0:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=55)** So remember that this is using the Azure storage account that we provisioned, and also the photos container.
>
> **[1:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=67)** So let's modify this other pet as well.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=72)** And finally Cati.
>
> **[1:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=75)** Okay, so let's do this.
>
> **[1:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=79)** And now we're ready to save this file and let's save those changes.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=88)** Seed data updated, and let's commit all the changes, and let's push the changes back to the seed branch in the remote server, which is Azure DevOps.
>
> **[1:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=105)** Okay, so we're ready to go to Azure DevOps.
>
> **[1:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=109)** Here in Azure DevOps, let's navigate to pull requests and then let's click on create a pull request and create.
>
> **[1:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=119)** Let's approve this pull request, and finally complete.
>
> **[2:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=123)** Okay, so let's complete this merge.
>
> **[2:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=126)** And with this, let's go to the Azure Portal.
>
> **[2:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=131)** Here in the Azure Portal.
>
> **[2:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=133)** I want to navigate to the Azure SQL database which is wpm, let's do this, and let's open up the query editor and let's use Azure Active Directory.
>
> **[2:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=148)** Since we used the serverless option, we need to wait a little bit for this to spin up and let's click again.
>
> **[2:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=158)** I have the queries that we're going to execute to drop all the tables right here in the notepad.
>
> **[2:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=166)** So I'm going to paste those here and execute them, so we don't have tables anymore, and that's fine, since I want the execution of the application to regenerate the entire structure.
>
> **[3:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=182)** So let's go back here to the resource group, and now let's navigate to the deployment slot and let's navigate to the application.
>
> **[3:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=199)** So let's navigate to pet management, and let's see if we have the picture of this dog, which we do.
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=208)** Let's copy this image link, or let's select open image, new tab, so we can verify that this is precisely the photo that comes from the Azure storage account.
>
> **[3:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=223)** Excellent.
>
> **[3:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=225)** However, we need an additional feature here.
>
> **[3:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=229)** If we navigate to a dog, say I want to navigate to Cati, there's no way, currently, to upload a picture for this particular pet.
>
> **[4:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=243)** So we're going to do that in the following videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (26), this, (4), this. (2)
> **UI Navigation:** navigate to (7), click on (2), go to (2)
> **Env Vars:** sql (2), url (2)
> **Tools:** azure portal (3)
> **Analogies:** picture (2)
> **Speakers:** - [instructor] (1)

#### Modifying the user interface to upload photos
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=0)** - We need to modify the application so we can implement the photo-uploading feature.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=5)** I already created this photos branch, and we're going to modify Edit, which is the page that allows me to update an existing pet.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=17)** So here we need a new control for uploading a photo to a specific pet.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=25)** And that element is going to be input of type file.
>
> **[0:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=32)** As you can see, this kind of pages are a combination of HTML and the Razor pages syntax.
>
> **[0:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=39)** If you're not familiar with Razor pages or the [asp.net](https://asp.net) core framework, don't worry, okay?
>
> **[0:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=47)** This is going to be easy.
>
> **[0:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=49)** So this input is implemented inside this form that has the post method and the multipart form-data enctype.
>
> **[1:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=60)** And we can get rid of this line.
>
> **[1:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=62)** It was implemented that way because I needed a mechanism for storing the photo URLs.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=70)** However, with this implementation that we're going to do, that won't be required anymore.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=77)** Okay, so before I continue with this implementation let's open up this code behind file, since I need to expose a new property of type IFormFile.
>
> **[1:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=91)** And let's name this property FileUpload.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=95)** And this is going to be get and set.
>
> **[1:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=99)** And we're going to decorate this property with the BindProperty attribute.
>
> **[1:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=105)** This attribute allows me to bind FileUpload with a control.
>
> **[1:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=111)** So here I'm going to use the asp-for expression that comes from the Razor pages syntax.
>
> **[2:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=120)** And let's use the name of the property that we just implemented.
>
> **[2:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=125)** So this is the way that I'm using for binding those two things together.
>
> **[2:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=131)** And let's use a CSS class, say form-control.
>
> **[2:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=142)** And, finally, let's wrap this inside a div, just like the other divs.
>
> **[2:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=152)** And this is going to be class mb-3.
>
> **[2:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=158)** And with this, we're ready to implement the storage service.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), continue (1), class, (1), finally, (1), this, (1)
> **Env Vars:** html (1), css (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Analogies:** just like (1)
> **Speakers:** - we (1)

#### Implementing the StorageService class
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=0)** - [Instructor] We're going to implement a new storage service class that encapsulates the logic for communicating to the Azure storage account.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=8)** In the .NET world, we use NuGet packages for reusing code.
>
> **[0:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=13)** So in this project I'm going to add a new NuGet package reference that is Azure Storage Blobs.
>
> **[0:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=23)** It was created by Microsoft and it contains all the required libraries for using storage accounts in your .NET code.
>
> **[0:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=33)** So let's install this.
>
> **[0:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=36)** And now we're ready to add a new folder and let's name it Services.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=44)** And here, I'm going to add a new class that is storage service, and I want to expose the following method.
>
> **[0:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=54)** I want to return the final URL of the file that we're uploading.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=61)** So public, we're going to return this asynchronously.
>
> **[1:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=66)** And let's name this UploadAsync.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=71)** And this is going to receive a stream and the fileName.
>
> **[1:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=80)** So the first thing that I want to do is position this stream at zero.
>
> **[1:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=87)** And then I'm going to create a new BlobContainerClient object.
>
> **[1:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=92)** So containerClient equals new BlobContainerClient.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=100)** So as you can see, it has many different overloads.
>
> **[1:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=105)** However, we're going to use this one that takes the connection string and the blob container name.
>
> **[1:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=112)** We know that the container name is photos, so photos is the value that we're going to use here.
>
> **[2:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=121)** What about the connection string?
>
> **[2:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=124)** So for this I'm going to inject a IConfiguration object and I'm going to put this in a private field, and I want to create connectionString configuration.
>
> **[2:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=141)** And I'm going to execute GetConnectionString.
>
> **[2:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=144)** And the name for this connection string will be WpmStorage.
>
> **[2:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=150)** So this is the connection string that this storage account uses.
>
> **[2:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=156)** So here, I want to use connectionString.
>
> **[2:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=162)** Okay, so now we're ready to obtain the blob client.
>
> **[2:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=166)** So blobClient equals containerClient GetBlobClient.
>
> **[2:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=173)** And the name of this blob will be the fileName that we're receiving as the parameter.
>
> **[2:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=179)** So I want to use blobClient for uploading the file.
>
> **[3:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=185)** So I'm going to pass the stream, and then I'm going to specify that I want to override the blob if it already exists.
>
> **[3:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=195)** And of course we need to await this.
>
> **[3:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=198)** And finally, let's return blobClient.Uri converted ToString.
>
> **[3:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=206)** And of course I need async right here.
>
> **[3:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=211)** So with this, we finished this implementation of the storage service class.
>
> **[3:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=219)** Before I end this video, we just need to register this object here as a singleton.
>
> **[3:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=227)** Let's do this, StorageService.
>
> **[3:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=235)** Fantastic.
>
> **[3:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=236)** Join me in the next video where we're going to use this StorageService object in the edit page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), this, (2), public (1), private (1)
> **Code Identifiers:** blobclient (3), filename (2), containerclient (2), connectionstring (2)
> **Env Vars:** net (2), url (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Invoking the StorageService from the Edit page
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=0)** - [Instructor] Now we need to modify the edit page to inject the storage service object.
>
> **[0:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=7)** So we're going to do that in the constructor.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=10)** So let's inject StorageService.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=14)** Remember that it was registered as a singleton in the program.CS file.
>
> **[0:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=19)** And let's save this in a field.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=25)** Okay, so now we're ready to modify the own post method.
>
> **[0:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=29)** And the first thing that I want to do is validate if FileUpload is not null, in which case, I want to create a new memory stream object, say fileStream, new memoryStream.
>
> **[0:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=45)** And I'm going to copy the entire contents of the file that is going to be uploaded to this file stream.
>
> **[0:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=53)** So fileUpload.CopyTo(fileStream).
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=61)** And now we're ready to execute storage service, UploadAsync.
>
> **[1:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=66)** I'm going to pass this memory stream object and the file name.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=70)** The file name, I can take it from fileUpload.FileName.
>
> **[1:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=76)** And of course, we need to await for this and save the result.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=81)** And I'm going to use this result for modifying the photo URL of the existing pet.
>
> **[1:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=91)** So let's do this.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=94)** Excellent! Now we're ready to test the application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), pass (1), await (1), this. (1)
> **Code Identifiers:** filestream (2), fileupload (2), memorystream (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### Testing the web application locally
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=0)** - [Instructor] If we want to test the application, we need the connection string.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=5)** So here in the Azure portal I navigated to the storage account.
>
> **[0:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=11)** And under security and networking we can find access keys.
>
> **[0:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=16)** So here in Access Keys, we can find the connection string.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=21)** So we can copy this and then go back to Visual Studio.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=27)** Here in Visual Studio I'm going to right click on the project and then I'm going to select manage user secrets.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=35)** I'm going to create this WPM storage connection string and then I'm going to paste the connection string that I just copied from the Azure portal.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=46)** To expedite this process, I did this before.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=50)** Okay, so now we're ready to start debugging.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=56)** Here we have the application running so we can navigate to pet management.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=61)** And let's see if there's a picture here.
>
> **[1:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=64)** Of course, there's a picture of this dog.
>
> **[1:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=67)** Let's go back and let's modify say box this rabbit.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=72)** Let's click on edit and let's choose a file and let's select this picture.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=81)** And finally, let's click on save.
>
> **[1:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=83)** So let's view this pad.
>
> **[1:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=87)** And as you can see, this pet now has a picture.
>
> **[1:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=93)** So let's do this again with another pad.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=96)** Say that I want to modify this cat, edit, choose file, and then this photo, save.
>
> **[1:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=105)** And finally, let's click on view.
>
> **[1:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=108)** So as you can see, this is the picture that we uploaded to the Azure storage account.
>
> **[1:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=116)** Let's copy the image address and we can see that of course, this comes from the Azure storage account and the photos container.
>
> **[2:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=126)** Let's go back to the Azure portal.
>
> **[2:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=130)** Here in the Azure portal we can go here and navigate to containers and then photos.
>
> **[2:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=137)** And we can see that we have gray bunny rabbit and surprised cat, those two images that we just uploaded.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), finally, (2)
> **Tools:** azure portal (4), visual studio (2)
> **UI Navigation:** click on (4), navigate to (2)
> **Analogies:** picture (5)
> **CLI Commands:** find (2), cat (2)
> **Cross-References:** go back to (2)
> **Env Vars:** wpm (1)
> **Speakers:** - [instructor] (1)

#### Publishing the application to the deployment slot
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=0)** - [Instructor] With all of these changes in place, we're now ready to push them to the remote branch.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=6)** You can click on push here in Visual Studio or you can open up a terminal and execute git push or you can use Visual Studio Code.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=17)** Regardless of what technique you use, we need to open Azure DevOps and create a pull request.
>
> **[0:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=24)** Here we are in Azure DevOps and let's create this pull request and let's name it photos.
>
> **[0:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=34)** And let's click on create and let's approve this.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=41)** And finally, let's click on complete.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=46)** So now we need to navigate to the deployment slot.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=50)** So let's go here to the Azure portal and let's open up this deployment slot.
>
> **[0:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=57)** And here we can navigate to the deployment center so we can see if the application is already deployed so we can see that this was published successfully.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=71)** So let's go back here to the overview page and then let's navigate to the default domain.
>
> **[1:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=78)** So let's navigate to pet management and let's try to view Garfield.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=88)** It doesn't have a picture.
>
> **[1:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=92)** Let's try to view Bugs.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=94)** We can see that Bugs is working and Cheshire is working.
>
> **[1:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=102)** So let's try to change a photo of Cati.
>
> **[1:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=107)** So let's choose a file.
>
> **[1:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=112)** Here's a new picture of Cati, and let's click on save.
>
> **[1:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=117)** We can see that we're receiving this error.
>
> **[2:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=120)** Can you imagine why?
>
> **[2:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=122)** If your answer is because we need to have the connection string, you're absolutely right.
>
> **[2:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=129)** We need to go back here to the deployment slot and then navigate to configuration because we need to have the connection string for the storage account.
>
> **[2:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=141)** So let's add a new connection string, WpmStorage and let's paste the connection string.
>
> **[2:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=150)** And then we need to set the type which is custom.
>
> **[2:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=155)** And let's click on okay.
>
> **[2:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=159)** So let's click on save, and we can go back here and test the application again.
>
> **[2:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=170)** So let's try to change Cati's photo.
>
> **[2:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=175)** So let's return, edit, choose file.
>
> **[3:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=180)** Let's try again.
>
> **[3:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=183)** And now it's working.
>
> **[3:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=185)** One more thing before I end this video.
>
> **[3:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=188)** Let's close this and let's swap the slots.
>
> **[3:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=193)** So let's go here and let's swap the development slot with the production slot.
>
> **[3:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=201)** So let's click on swap.
>
> **[3:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=204)** Let's be sure that we are transferring the WpmStorage connection string.
>
> **[3:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=211)** And we're ready to go.
>
> **[3:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=214)** Let's swap this out.
>
> **[3:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=220)** And after a while, this process will be finished so we can close this and test the production slot.
>
> **[3:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=230)** So let's go ahead and let's go here to the WPM App service and let's navigate to this default domain.
>
> **[4:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=244)** We can see that this is not working so let's investigate what's going on here.
>
> **[4:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=250)** So let's see if it has the correct configuration.
>
> **[4:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=254)** So we can see that WPM storage is there.
>
> **[4:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=258)** However, WPM is not here, and this is happening because WPM is marked as a deployment configuration.
>
> **[4:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=270)** So let's go here to the development slot and let's go here to the configuration.
>
> **[4:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=280)** We have WPM, and let's edit.
>
> **[4:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=284)** Let's uncheck this.
>
> **[4:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=287)** Let's click on okay, and let's save this, and let's try to swap things out again.
>
> **[4:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=297)** Swap and now it's trying to push WPM as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (41), this. (2), finally, (1), return, (1), while, (1)
> **UI Navigation:** click on (8), navigate to (5)
> **Env Vars:** wpm (6)
> **Tools:** visual studio (2), terminal (1), azure portal (1)
> **Analogies:** picture (2), imagine (1)
> **CLI Commands:** git (1)
> **Speakers:** - [instructor] (1)

#### Swapping the production and dev deployment slots
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=0)** - [Instructor] If you wanted to swap the slots, the production slot wouldn't work.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=5)** The thing is that we have a configuration which is the WPM connection string that is configured as a deployment slot setting.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=14)** I chose that when I created WPM.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=18)** However, I'm going to change this right now, otherwise this WPM connection string won't be transferred to the production slot.
>
> **[0:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=30)** So let's change this.
>
> **[0:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=33)** Let's click on Save, and now we're ready to start the swap process.
>
> **[0:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=40)** So let's go ahead and navigate to Deployment Slots.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=44)** And let's click on Swap.
>
> **[0:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=47)** We can see that the source is the dev slot and the target is the production slot.
>
> **[0:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=54)** It's paramount to verify that we're transferring both WPM and WPM storage connection strings.
>
> **[1:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=64)** So let's click on Swap.
>
> **[1:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=68)** Now that the process has completed, we can close this and let's navigate to the overview page and then the service plan.
>
> **[1:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=78)** Let's navigate to the app service itself and default domain.
>
> **[1:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=84)** So this is the app service, in other words, the production slot.
>
> **[1:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=89)** And let's navigate to Pet Management.
>
> **[1:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=91)** We can see that this is working, and let's verify that Cheshire has its photo.
>
> **[1:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=99)** And let's verify that we can change the photo of a pet.
>
> **[1:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=104)** Say, I want to edit Bugs.
>
> **[1:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=107)** Let's choose a file.
>
> **[1:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=110)** Let's try this photo again and let's save it.
>
> **[1:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=114)** And we can see that this is working just as expected.
>
> **[1:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=119)** Let's try this again with other pet.
>
> **[2:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=121)** Let's go ahead and edit Gianni.
>
> **[2:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=124)** Choose file.
>
> **[2:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=126)** This is another picture of Gianni, save, and we can see that this is working successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), this. (1)
> **UI Navigation:** click on (3), navigate to (3)
> **Env Vars:** wpm (5)
> **Definitions:** in other words (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 5. Using Azure Functions to Improve Your Web Application

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Using Azure Functions to improve your web application
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=0)** - [Instructor] The company's extremely pleased with the progress so far, and now views application as a critical component of its operations.
>
> **[0:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=9)** You have received a new requirement to include pet photos in the Pets Catalog.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=14)** However, the company's worried about the potential negative impact of this feature on the page's performance due to the presence of some large and heavy images.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=25)** You instinct is to check if Azure Functions with its powerful triggers and bindings could be the ideal solution for this requirement.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=35)** Upon discovering that Azure Functions is a potent, multi-platform technology, you decide to use it in the project.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=42)** So let's roll up our sleeves and get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Creating the Azure Functions project and repository
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=1)** - [Instructor] In this chapter, we're going to create a new Azure function for creating thumbnails.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=5)** I don't want to use the same repo since this one is already connected to a deployment slot in Azure.
>
> **[0:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=12)** That's why I'm going to create a new repo for this.
>
> **[0:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=15)** Okay, let's jump right in.
>
> **[0:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=17)** Let's navigate to repos, and let's select new repository.
>
> **[0:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=22)** And the name is WPM Thumbnail Creator.
>
> **[0:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=29)** And let's add a read me file and also a git ignore file based on the Visual Studio template.
>
> **[0:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=37)** Okay, so let's click on create.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=41)** Now we're ready to clone this in the computer.
>
> **[0:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=44)** So let's copy the URL, and let's open up the terminal.
>
> **[0:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=49)** Here we are in the Windows terminal, and let's execute git clone with this URL.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=56)** And this is going to create the wpm dash thumbnail creator folder.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=61)** So we can navigate to this folder.
>
> **[1:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=64)** So we can see that we have the read me file and also the git ignore file.
>
> **[1:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=70)** Okay, so now we're ready to open Visual Studio to create the project.
>
> **[1:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=76)** Here in Visual Studio, let's select file new project.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=81)** And the template that we want to use is Azure functions.
>
> **[1:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=86)** We can find this template under the Cloud category.
>
> **[1:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=89)** So let's select this, and let's click on next.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=95)** The project name is Thumbnail Creator, and of course, we need to select WPM Thumbnail Creator since this is the folder that we cloned from Azure repos.
>
> **[1:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=113)** Okay, so let's click on next.
>
> **[1:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=116)** And now we're going to select .NET 6.
>
> **[1:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=119)** And we're going to use the blob trigger, since we want the function to execute automatically after the new blob is uploaded to the photos container.
>
> **[2:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=130)** So the connection string name that we're going to use is WPM Storage, and the path is photos.
>
> **[2:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=140)** That's the name of the container.
>
> **[2:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=142)** Okay, so let's click on create.
>
> **[2:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=147)** Okay, so let's make some changes in the code.
>
> **[2:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=151)** First, I want to use the file-scoped namespace feature.
>
> **[2:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=155)** So let's do this, and let's change the namespace to WPM.
>
> **[2:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=161)** And the function, I want to name it Thumbnail Creator as well.
>
> **[2:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=168)** Thumbnail Creator.
>
> **[2:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=170)** So let's do this.
>
> **[2:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=173)** And the function name, instead of function one, I want to use name of Thumbnail Creator.
>
> **[3:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=182)** I think this is better.
>
> **[3:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=184)** And finally, I'm going to update the NuGet package references to be sure we're running the latest releases.
>
> **[3:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=193)** So let's right click here and manage NuGet packages, and click on updates, select all packages.
>
> **[3:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=203)** And finally, let's click on update.
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=208)** Okay, so now we're ready to test if this is compiling, which it does.
>
> **[3:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=216)** Excellent.
>
> **[3:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=217)** We also need to add the connection of strings in this local settings json file, and we're going to do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (5), this. (2), this, (2), finally, (2)
> **UI Navigation:** click on (6), navigate to (2)
> **Env Vars:** wpm (4), url (2), net (1)
> **CLI Commands:** git (3), find (1), make (1)
> **Tools:** visual studio (3), terminal (1), windows terminal (1)
> **Exercise Files:** template (3)
> **Speakers:** - [instructor] (1)

#### Testing the function by using the Azure Storage Explorer
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=0)** - [Instructor] We use triggers and bindings to build Azure functions.
>
> **[0:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=4)** Triggers are components that specify how and when your function will be involved.
>
> **[0:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=11)** On the other hand, bindings are components that allow you to receive or send data from and to other services and platforms.
>
> **[0:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=21)** For example, we're creating this ThumbnailCreator function.
>
> **[0:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=26)** This is using the blob trigger.
>
> **[0:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=29)** This trigger allows me to automatically execute the function after we upload a new blob to this particular container, which is photos.
>
> **[0:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=38)** And as you can see, this is an attribute that is decorating this stream object.
>
> **[0:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=43)** So we don't have to do anything else to obtain the entire byte array that represents the photo that's given to you by the blob trigger, which is pretty cool if you ask me.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=56)** And we have this other parameter, which is name.
>
> **[0:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=58)** This is the name of the blob that we've just uploaded.
>
> **[1:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=63)** That's why it's being used as a placeholder here.
>
> **[1:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=67)** And finally, it's using the ILogger object for logging purposes.
>
> **[1:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=73)** So this is the initial code that we're going to use.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=77)** Of course, we need to set this connection string, and we have different options for doing that.
>
> **[1:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=85)** The one that I'm going to use is I'm going to use this local settings JSON file, and I'm going to specify the connection string here.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=96)** I already have it in the notepad, so I'm just adding this WPM storage setting in this JSON file.
>
> **[1:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=105)** However, take into account that this is a special file that won't be pushed to your repository, so this won't be available in the source code.
>
> **[1:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=118)** Okay, so we're ready to test this out.
>
> **[2:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=122)** I have the connection string, and let's see if this is working.
>
> **[2:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=127)** Let's start this debugging session.
>
> **[2:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=132)** So it's running now, and I want to use the Azure Storage Explorer.
>
> **[2:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=139)** Instead of going to the portal, I'm going to use the following application.
>
> **[2:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=145)** Here in the Azure Storage Explorer, I'm going to right click on Storage Accounts and then connect to Azure storage, and let's select a storage account or service.
>
> **[2:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=159)** And I have a connection string.
>
> **[2:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=161)** So let's click on Next and I'm going to paste the entire connection string.
>
> **[2:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=169)** Let's do this.
>
> **[2:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=171)** And finally, let's click on Next.
>
> **[2:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=175)** So this is a nice way that we have when building Azure functions and we're using storage accounts.
>
> **[3:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=183)** You don't have to go to the portal.
>
> **[3:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=185)** We can use this application, which is open source and cross platform as well.
>
> **[3:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=191)** So let's expand blob containers.
>
> **[3:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=194)** And of course we have those photos there.
>
> **[3:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=197)** And to test this Azure function, what I'm going to do is I'm going to drag and drop any photo, say gianni2.jpg.
>
> **[3:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=212)** Of course, I already have this gianni2.jpg file.
>
> **[3:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=216)** Let's replace it.
>
> **[3:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=218)** So we can see here in the Azure function that it automatically executes with this name gianni2.jpg.
>
> **[3:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=228)** So we can see and verify that this is working as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (5), finally, (2), this. (1)
> **UI Navigation:** click on (3), go to (1), drag and drop (1)
> **Env Vars:** json (2), wpm (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Implementing the resize code and the output binding
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=0)** - [Instructor] In this video we're going to implement the code for creating the thumbnails.
>
> **[0:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=5)** For this, I'm going to use the ImageSharp NuGet package.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=8)** So let's right click on the project and then Manage NuGet Packages.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=14)** And the name is SixLabors.ImageSharp.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=18)** So let's install this and we're ready to go.
>
> **[0:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=24)** So let's go back here and let's do the following.
>
> **[0:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=31)** Underneath run let's create a new method named, say, Resize where I want to receive the input stream.
>
> **[0:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=42)** In other words, the stream that represents the photo that has been uploaded.
>
> **[0:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=48)** And I also want to receive the output stream, so this stream will be used for writing purposes.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=59)** So I'm going to write the resized image in this stream.
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=65)** Okay, so let's do the following.
>
> **[1:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=68)** I'm going to use the image class that comes from the SixLabors.ImageSharp namespace and let's execute load, since I want to load this input stream and I want to save this in a variable, I think it's better to use using since it implements idisposable.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=94)** And let's execute mutate.
>
> **[1:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=97)** And let's pass this expression, which is resize And I want all the thumbnails to have 50 pixels wide and the height is zero.
>
> **[1:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=109)** In other words, I want to respect the original aspect ratio.
>
> **[1:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=115)** Okay, let's continue with image.Save, and then I'm going to pass output stream.
>
> **[2:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=124)** And the format is JpegFormat.Instance.
>
> **[2:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=132)** Of course, this code will only work with JPEG files, but you're free to implement and support other formats as well.
>
> **[2:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=142)** So now I'm ready to invoke resize here, resize, and I'm going to pass input stream, which is my blob.
>
> **[2:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=154)** And what happens with the output stream?
>
> **[2:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=158)** For this, I want to implement an output binding.
>
> **[2:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=163)** So I'm going to use this other attribute, which is blob.
>
> **[2:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=168)** And this other attribute supports a blob path as well.
>
> **[2:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=173)** And also the file access mode, and finally the connection name.
>
> **[3:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=180)** So in this case, I don't want to use the same container, I want to use another container, which is going to be thumbnails.
>
> **[3:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=189)** Of course, we need to create the container in the Azure storage account.
>
> **[3:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=195)** And let's use the same name of the blob.
>
> **[3:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=199)** And for the connection, I want WpmStorage as well.
>
> **[3:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=206)** This is going to be the same connection string, that's why I'm reusing this.
>
> **[3:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=211)** And about the file access format, and for the file access mode, I want to use FileAccess.Write because I want to write the resized image in that stream.
>
> **[3:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=229)** So this is just the attribute I need to decorate something, so let's use stream and let's name it thumbnail just like this.
>
> **[4:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=241)** So I can pass resize my blob, and then thumbnail.
>
> **[4:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=249)** And finally, let's use Logger, this log object, log information and something like the name of the file,
>
> **[4:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=264)** name processed, or something.
>
> **[4:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=269)** Just like this, and I think it's better to rename things.
>
> **[4:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=277)** This should be logger.
>
> **[4:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=279)** And this is the thumbnail, and this is the blob.
>
> **[4:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=284)** Okay, I think it looks better this way.
>
> **[4:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=290)** And finally, let's create the container in the Azure storage account.
>
> **[4:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=294)** So let's go back to the Azure portal.
>
> **[4:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=298)** Here in the Azure portal let's navigate to containers, and then let's click on container, thumbnails, and let's make it blob and finally create.
>
> **[5:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=315)** And with this, we're ready to test this out, so join me in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), this, (4), pass (4), this. (2), finally, (2)
> **UI Navigation:** click on (2), navigate to (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** azure portal (2)
> **Definitions:** in other words (2)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Env Vars:** jpeg (1)

#### Modifying the web application to display the thumbnails
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=0)** - We need to modify the [AESP.net](https://AESP.net) core web application since we need to show the thumbnails in the pets catalog.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=8)** So the pets catalog is implemented in this index.cs HTML file.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=14)** And we have this table.
>
> **[0:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=16)** So let's add a new cell, and inside the cell we're going to use this image for showing the thumbnails.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=27)** So the class is image thumbnail.
>
> **[0:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=30)** This is a regular bootstrap thing and alt for those pets that don't have a picture, and finally, the source.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=41)** I know for sure that I have photo URL; however, this photo URL is pointing to the photos container, and I need to show the thumbnails.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=56)** So this way that we have right now is just replace photos with thumbnails.
>
> **[1:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=64)** And I think this is nice, since we don't want to modify the pet class and some other options that we could implement.
>
> **[1:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=75)** Okay, so finally, let's modify the site.CSS file since I want to add a new style for the TRs, in other words, for the table rows.
>
> **[1:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=90)** Particularly I want a fixed height row and the content should be virtually aligned to the middle.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=100)** Okay, so we're ready to test this out.
>
> **[1:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=103)** So here in the browser, let's navigate to pet management.
>
> **[1:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=108)** So we can see that this is working as suspected.
>
> **[1:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=113)** We have Cati.
>
> **[1:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=114)** Cati has a thumbnail, and we can see that this comes from thumbnails.
>
> **[2:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=121)** And if we saw Cati, we will see, right here, we will see that this is the full picture of Cati.
>
> **[2:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=132)** So we can see that here.
>
> **[2:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=136)** Okay, so this is the new UI, and it looks nice.
>
> **[2:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=143)** So we're ready to publish the application.
>
> **[2:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=146)** In other words, we're ready to publish both the function and also this web application.
>
> **[2:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=156)** So join me in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (2), function (1)
> **Env Vars:** url (2), aesp (1), html (1), css (1)
> **Definitions:** in other words (2), is a  (1)
> **Analogies:** picture (2)
> **File Paths:** site.css (1)
> **URLs:** [aesp.net](https://aesp.net) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)

#### Pushing all the changes to the remote repositories
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=0)** - [Instructor] Let's commit all the changes and let's push all of them to the remote repository.
>
> **[0:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=6)** So UI changed or something?
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=10)** Commit and then push.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=14)** Okay, so we're ready to go to Azure DevOps.
>
> **[0:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=19)** So here we just need to create a pull request and approve it.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=25)** So let's do this, and this is done.
>
> **[0:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=32)** Let's go back to Visual Studio.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=35)** Here I am in Visual Studio once again, however I loaded the ThumbnailCreator solution since I want to push the changes to the main branch in the remote repository of this other repository.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=50)** So let's go back to Azure DevOps.
>
> **[0:53](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=53)** Here, I want to navigate to the project, and then repos, and I want to switch to this other repo so we can see that I have all of those changes here.
>
> **[1:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=67)** So this is done, now I need to create a new Azure function app in the Azure portal.
>
> **[1:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=76)** So join me in the next video where I'm going to do that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1), switch (1), function (1)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** visual studio (2), azure portal (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Speakers:** - [instructor] (1)

#### Provisioning the Function App resource and testing the app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=0)** - [Instructor] Okay, let's create a function app.
>
> **[0:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=2)** Let's click on Create and then search for function, the name of the template is Function App, and let's specify the name, Say, wpmfunctionapp should be unique in the entire Azure Cloud.
>
> **[0:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=19)** And we need to specify if we want to deploy code or a container image.
>
> **[0:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=25)** In this case, it's code of course.
>
> **[0:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=28)** And .NET 6, and the region is, in this case, West US 3.
>
> **[0:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=37)** Okay, now I need to specify if I want to use Linux or Windows, in this case, I'm going to use Windows.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=46)** And in this case, I want to use the Consumption plan, in other words, the serverless flavor of Azure Functions.
>
> **[0:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=55)** Okay, so now the storage, I don't want to create a new storage account.
>
> **[1:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=60)** In fact, I want to reuse the existing one, and for networking, let's enable the public access.
>
> **[1:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=71)** And I want to use Application Insights, and of course, I want to reuse the existing Application Insights resource.
>
> **[1:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=82)** For deployment, we don't want to use GitHub Actions this time and we're ready to click on Review and create.
>
> **[1:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=90)** So let's click on Create and wait for this process to finish.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=96)** Okay, now we can go to the resource.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=100)** So here we are in this function app, and similar to the app service, I want to create a new deployment slot.
>
> **[1:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=107)** So let's create dev and let's click on Add, since I want to deploy the function to this deployment slot.
>
> **[2:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=121)** And after a little while, this will finish, so let's close it, let's navigate to the deployment slot, and let's go to Deployment Center.
>
> **[2:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=132)** Since I want to connect this deployment slot to Azure Repos.
>
> **[2:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=138)** So let's select Azure Repos, and of course, the organization is wisdompetmedicine.
>
> **[2:25](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=145)** The project is the same wpm, however, the repository is different since I want to use wpm-thumbnailcreator and the branch is main.
>
> **[2:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=159)** Okay, so let's save those changes and let's display the logs.
>
> **[2:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=168)** So this is starting to publish, however, let's modify the configuration because we need the WpmStorage connection string.
>
> **[3:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=180)** So it's not a regular connection string, it's a setting, so I need to add a new application setting WpmStorage and the value.
>
> **[3:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=193)** I'm going to pause the video since I need to go ahead and grab the connection string.
>
> **[3:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=198)** Okay, so let's paste it.
>
> **[3:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=202)** And this is not a deployment slot setting, and let's click on OK, and finally Save.
>
> **[3:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=215)** Okay, so we published this application, we added this application setting, so we're ready to test this out.
>
> **[3:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=227)** Let's execute the web application.
>
> **[3:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=232)** So let me duplicate this and let's navigate here to the Overview page and then the resource group.
>
> **[4:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=248)** Since I want to navigate to the dev deployment slot of the app service and then the default domain.
>
> **[4:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=261)** So this isn't working, let's go back to the portal and verify the configuration.
>
> **[4:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=267)** Let's go ahead and verify this.
>
> **[4:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=271)** So the reason is that I lost my connection strings when I swapped.
>
> **[4:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=276)** So let's pause the video to add both the WPM and WpmStorage connection strings.
>
> **[4:45](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=285)** Okay, great, so now we're ready to go back here to the overview page.
>
> **[4:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=292)** And once again, navigate to the default domain so we can see that this is working as expected now, so we can go ahead and navigate to pet management, so we can see that all of those pets, they have a thumbnail, and we can verify this if I copy the image link, and we can see that this comes from the thumbnails container.
>
> **[5:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=320)** "Why do we have all of those thumbnails, all of a sudden?"
>
> **[5:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=323)** You may ask.
>
> **[5:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=324)** Well, the first time the Azure function ran, it detected the files in the photos container and proceeded to generate all the corresponding thumbnails automatically.
>
> **[5:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=335)** In fact, if we go back here in the Azure portal, we can verify that.
>
> **[5:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=340)** So let's navigate to the resource group and then the Azure Storage account, and then Containers, thumbnails, so you can see that all of them were created at the same time.
>
> **[5:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=355)** Fantastic!
>
> **[5:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=356)** Now let's go back to the pet management application since we want to assign a photo to Garfield and Roger.
>
> **[6:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=366)** So let's edit Garfield, Choose File, and we have Hungry cat, let's save it, and finally, Roger, Edit, Choose File, and here's the photo for Roger, save it, and let's refresh this.
>
> **[6:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=392)** And after a couple of seconds, we have this other thumbnail as well.
>
> **[6:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=397)** Remember that Azure Functions run asynchronously.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), function (6), case, (4), this. (2), public (1)
> **UI Navigation:** click on (5), navigate to (5), go to (2)
> **Env Vars:** net (1), wpm (1)
> **Cross-References:** go back to (2)
> **Tools:** github (1), azure portal (1)
> **CLI Commands:** cat (1)
> **Exercise Files:** template (1)
> **Definitions:** in other words (1)


### 6. Taking Advantage of Azure Logic Apps for Your Web App

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Taking advantage of Azure Logic Apps for your web app
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980&t=0)** - [Instructor] You are informed that Melissa, the head of the pet department, is very enthusiastic about the application.
>
> **[0:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980&t=8)** She has expressed her desire to be notified via email whenever a new pet is added.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980&t=14)** You don't want to spend a lot of time on this email sending feature.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980&t=18)** Luckily, you've discovered that implementing this logic quickly and efficiently is possible with Azure Logic Apps.
>
> **[0:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980&t=26)** So without further delay, let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Creating the Azure Logic App resource for sending an email
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=0)** - [Instructor] In this video, we're going to create an Azure Logic app for sending emails whenever a new pet is added to the Wisdom Pet Medicine application.
>
> **[0:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=10)** So let's click on create and the template that we're looking for is Logic App.
>
> **[0:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=18)** So let's click on create and then let's specify a unique name such as WPM Logic App.
>
> **[0:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=27)** And we're going to publish a workflow and my region is West US three and I want to use the consumption plan since it's the serverless option of Logic Apps.
>
> **[0:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=40)** Okay, so let's click on review and create.
>
> **[0:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=43)** And finally, let's click on create.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=46)** So this process is quite fast.
>
> **[0:48](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=48)** There's no need for me to pause the video and let's navigate to the resource.
>
> **[0:54](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=54)** And here, as you can see, we're going to see a designer that we can use for configuring this Logic app.
>
> **[1:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=62)** In this case, I want to use the blank Logic app template and then I need to specify the trigger that is going to execute this Logic app.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=72)** In this case, I want to use the SQL Server trigger, particularly when an item is created.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=77)** So let's create this trigger.
>
> **[1:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=81)** And the first time you do this, you'll have to configure the SQL Server connection that you want to use.
>
> **[1:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=88)** So let's name it WPM.
>
> **[1:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=91)** And in this case, I want to use SQL Server authentication.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=96)** And the SQL Server name is this name.
>
> **[1:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=101)** Remember that we provisioned an Azure SQL server in the previous chapters.
>
> **[1:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=107)** So the database name is WPM.
>
> **[1:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=111)** Let's use my username and password and now there's no need for a gateway so let's click on create and let's wait for this process to finish.
>
> **[2:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=122)** It looks like the connection was successful so let's select the server and then the database name.
>
> **[2:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=129)** And finally, the table that I want to use, in this case is pets.
>
> **[2:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=134)** So how often do you want to check for items?
>
> **[2:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=137)** In this case, let's use 10 seconds and we're ready to go.
>
> **[2:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=144)** In this case, I want to use another step which is the [outlook.com](https://outlook.com) action.
>
> **[2:31](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=151)** Specifically, I want to send an email.
>
> **[2:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=154)** So let's search for send an email V2 and this is asking me for my credentials.
>
> **[2:42](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=162)** So let's pause the video.
>
> **[2:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=164)** Once I complete that action, it'll prompt me to grant the following permissions and I'm going to click on accept.
>
> **[2:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=172)** So we're ready to configure this other step that allows me to send an email.
>
> **[2:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=179)** So I'm going to use Melissa.linkedin.learning@[outlook.com](https://outlook.com)
>
> **[3:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=187)** which is Melissa's email account.
>
> **[3:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=190)** So let's specify the subject, say new pet.
>
> **[3:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=195)** And now here I'm ready to configure the body.
>
> **[3:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=200)** So this previous step, it's going to give me some data that I can use in this other action so let's click on see more.
>
> **[3:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=210)** So I can use for instance, the name and the weight and the age.
>
> **[3:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=216)** So as you can see, this is going to detect what kind of results we're going to have after this action completes.
>
> **[3:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=226)** So say that I want name and then age.
>
> **[3:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=232)** Let's put the age, years old.
>
> **[3:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=236)** And the weight is weight kilograms.
>
> **[4:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=244)** And for the name I want to use, say this size and bold and also age and weight to be bold.
>
> **[4:16](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=256)** Awesome.
>
> **[4:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=257)** So now we're ready to test this out and we're going to do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), case, (5), finally, (2), this, (1)
> **UI Navigation:** click on (7), navigate to (1), select the (1)
> **Env Vars:** sql (5), wpm (3)
> **Prerequisites:** configure (3)
> **URLs:** [outlook.com](https://outlook.com) (2)
> **Exercise Files:** template (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Testing the Logic App
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=0)** - [Instructor] Let's save the Logic app and then navigate to the web application.
>
> **[0:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=4)** Here, I already have the web application.
>
> **[0:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=7)** Remember that we're using the java slot.
>
> **[0:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=9)** This has the latest version of the pet management application.
>
> **[0:14](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=14)** So let's click on create and say the name is Shadow, eight years old, 12 kilograms, and say, this is mixed.
>
> **[0:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=26)** Okay, so let's save it.
>
> **[0:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=28)** So we have Shadow.
>
> **[0:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=30)** We can go back to the logic app.
>
> **[0:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=33)** And here, let's close this designer so we can see that this completed successfully, so we're ready to open Melissa's inbox.
>
> **[0:46](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=46)** Here we are in Melissa's account, and as you can see, she received this Wisdom Pet Medicine email that says that Shadow was created and we can see that it has the data of this newly created pet.
>
> **[1:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=61)** But, what if we wanted to include the breed name?
>
> **[1:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=65)** That's precisely what we're going to do in the following video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **UI Navigation:** navigate to (1), click on (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Modifying the existing Logic App to add a custom SQL Query
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=0)** - [Instructor] We need to modify this Azure Logic App to send the breed name to Melissa.
>
> **[0:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=7)** So let's jump right in.
>
> **[0:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=9)** Let's click on Edit.
>
> **[0:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=11)** And here, I need to add an additional action.
>
> **[0:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=15)** Since this when an item is created trigger is only telling me about what happened to the pets table.
>
> **[0:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=23)** However, the breed name is inside the breeds table.
>
> **[0:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=26)** That's why we need an additional action.
>
> **[0:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=29)** So let's click on this command and then add an action.
>
> **[0:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=35)** And here, I want to select SQL Server.
>
> **[0:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=39)** Specifically I want to use execute a SQL query, and let's select the SQL Server, the database, and finally the query.
>
> **[0:52](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=52)** So I can type the entire query here.
>
> **[0:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=56)** One important thing is that, as you can see, there's no need for me to configure the SQL Server again since those configurations are stored in the same resource group.
>
> **[1:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=68)** Okay, so let's specify the query, which I happen to have here in the notepad to expedite this process.
>
> **[1:17](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=77)** So as you can see, I'm obtaining name, age, and weight from the pets table and breed name from the breeds table.
>
> **[1:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=87)** And finally, this WHERE expression, I want to use the ID that comes from this previous action which is when an item is created.
>
> **[1:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=98)** So this is done and now I can use its results here in this other send an email action.
>
> **[1:49](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=109)** So for instance, I want to add breed and then the value of breed name.
>
> **[1:58](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=118)** So for obtaining the breed name, I need to do an additional step.
>
> **[2:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=124)** Since if I select See More, you can see that I have two things, which are Query Results and ResultSets.
>
> **[2:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=135)** These options are excessively complex for my simple need of getting the breed name.
>
> **[2:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=140)** So those are not enough.
>
> **[2:23](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=143)** I need to grab the breed name.
>
> **[2:27](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=147)** So I want to switch to the code view since I need to modify this expression that is right here.
>
> **[2:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=156)** As you can see, this is obtaining the execute a SQL query v2 body.
>
> **[2:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=164)** However, I'm going to add an additional expression which is ResultSets.
>
> **[2:51](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=171)** ResultSets and then table one.
>
> **[2:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=176)** And then the first item.
>
> **[2:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=179)** And finally the breed name.
>
> **[3:04](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=184)** Again, this is because this action is not obtaining the schema of the result set.
>
> **[3:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=192)** That's why I need to do this manually.
>
> **[3:15](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=195)** Okay, so this is done.
>
> **[3:18](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=198)** I'm ready to go back to the designer, and here, I can use this expression instead of the entire result set.
>
> **[3:29](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=209)** Okay, so it looks like this is going to work.
>
> **[3:32](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=212)** So we're ready to save this.
>
> **[3:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=214)** And let's go back to the application.
>
> **[3:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=217)** So let's add a new tab and then let's paste the application URL.
>
> **[3:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=224)** Let's navigate to Pet Management and let's add a new pet, say Whiskers.
>
> **[3:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=235)** And then three years old, six kilograms.
>
> **[3:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=239)** And say again, mixed.
>
> **[4:02](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=242)** Finally, let's click on Save.
>
> **[4:06](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=246)** So we have Whiskers.
>
> **[4:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=248)** So let's go back to the Logic App.
>
> **[4:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=250)** Let's close this and let's click on Refresh so we can see that this execution completed successfully.
>
> **[4:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=260)** So let's go ahead and open Melissa's inbox.
>
> **[4:26](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=266)** So here we are in Melissa's inbox, and you can see that Melissa received this other email with the Whiskers information and now we're sending the breed name as well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), finally, (2), switch (1), this. (1)
> **Env Vars:** sql (5), where (1), url (1)
> **UI Navigation:** click on (4), select the (1), switch to (1), navigate to (1)
> **Cross-References:** go back to (3)
> **SQL:** where (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=0)** - [Instructor] Great job.
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=1)** You finished this course.
>
> **[0:03](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=3)** At this point, you should have a solid understanding of some of the essential services you can use to build web applications in Azure.
>
> **[0:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=11)** I would like to recommend my Extend Web Application Functionality on Microsoft Azure training course as a continuation of your learning journey.
>
> **[0:22](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=22)** Moreover, if you are already familiar with Azure's fundamental concepts, why not consider becoming certified?
>
> **[0:30](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=30)** The Microsoft AZ-900 exam is your gateway to obtaining the Azure Fundamental Certification, a highly respected industry recognition.
>
> **[0:43](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=43)** You can also find exam preparation courses here in the LinkedIn Learning Library.
>
> **[0:50](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=50)** I hope you've enjoyed this course as much as I've enjoyed creating it for you.
>
> **[0:55](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=55)** If you do, please let me know.
>
> **[0:59](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=59)** As always, thanks for watching, and I'll see you next time.

> [!info]- Semantic Content
>
> **CLI Commands:** az (1), find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Rodrigo Díaz Concha]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-web-application-on-microsoft-azure-4405955)

## Skills Covered

- Microsoft Azure
- Web Application Design

## Path Context

### In [[Getting Started as an Azure Developer]]
← [[Azure Quick Tips for Developers]] | **4 of 7** | [[Azure Storage Essential Training (2021)]] →

## Appears In

- [[Getting Started as an Azure Developer]]

## Related Courses

_Courses sharing skills:_

- [[Blockchain for Developers- Hyperledger Fabric on Azure]] — Microsoft Azure
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Microsoft Azure
- [[Azure DevOps for Beginners]] — Microsoft Azure
- [[Azure Storage Essential Training (2021)]] — Microsoft Azure
- [[Azure Quick Tips for Developers]] — Microsoft Azure

---

[↑ Back to top](#)