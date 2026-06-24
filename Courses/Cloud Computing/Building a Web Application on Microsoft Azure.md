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
  - '[Getting Started as an Azure Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20Azure%20Developer.md)'
prev_courses:
  - '[Azure Quick Tips for Developers](Azure%20Quick%20Tips%20for%20Developers.md)'
next_courses:
  - '[Azure Storage Essential Training (2021)](Azure%20Storage%20Essential%20Training%20(2021).md)'
path_nav: '[{"path":"Getting Started as an Azure Developer","position":4,"total":7,"prev":"Azure Quick Tips for Developers","next":"Azure Storage Essential Training (2021)"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/microsoft-azure
  - skill/web-application-design
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/Building%20a%20Web%20Application%20on%20Microsoft%20Azure.md)

![Building a Web Application on Microsoft Azure](https://media.licdn.com/dms/image/v2/D560DAQH3FlqFYlaSpQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696444981713?e=2147483647&amp;v=beta&amp;t=1FPowhH8nsHjgbZXKG-cKF2H9SuvuqssLlmlAgfrv8M)

# Building a Web Application on Microsoft Azure

> Microsoft Azure offers a wide range of integrated services for developers looking to build a web application on the cloud. In this course, instructor and Microsoft MVP Rodrigo Díaz Concha shows you the fundamentals of how to build web applications that take advantage of several of these services, including Azure DevOps, Azure App Service, Azure SQL, Azure Functions, and more.Upskill as an in-deman

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696) | 1h 48m | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Capitalize on the power of Azure to craft your web app](#capitalize-on-the-power-of-azure-to-craft-your-web-app)
  - [What you need to know](#what-you-need-to-know)
  - [What you are going to build](#what-you-are-going-to-build)
- [**1. Using Azure DevOps for Storing Your Code**](#1-using-azure-devops-for-storing-your-code) (5 videos)
  - [Using Azure DevOps for storing your code](#using-azure-devops-for-storing-your-code)
  - [Exploring the Pet Management application base source code](#exploring-the-pet-management-application-base-source-code)
  - [Creating a new Azure DevOps account and organization](#creating-a-new-azure-devops-account-and-organization)
  - [Creating a new Azure DevOps project and adding existing code](#creating-a-new-azure-devops-project-and-adding-existing-code)
  - [Creating and accepting a pull request in Azure Repos](#creating-and-accepting-a-pull-request-in-azure-repos)
- [**2. Hosting and Running the Web Application in Azure App Service**](#2-hosting-and-running-the-web-application-in-azure-app-service) (6 videos)
  - [Hosting and running the web application in Azure App Service](#hosting-and-running-the-web-application-in-azure-app-service)
  - [Provisioning a new Azure App Service resource in the portal](#provisioning-a-new-azure-app-service-resource-in-the-portal)
  - [Creating a new deployment slot for development](#creating-a-new-deployment-slot-for-development)
  - [Connecting the deployment slot to Azure Repos](#connecting-the-deployment-slot-to-azure-repos)
  - [Modifying the source code to automatically publish the app](#modifying-the-source-code-to-automatically-publish-the-app)
  - [Swapping the deployment slots](#swapping-the-deployment-slots)
- [**3. Using Azure SQL for Your Data Storage**](#3-using-azure-sql-for-your-data-storage) (4 videos)
  - [Using Azure SQL for your data storage](#using-azure-sql-for-your-data-storage)
  - [Creating the Azure SQL server and database](#creating-the-azure-sql-server-and-database)
  - [Modifying the application to use the SQL EF provider](#modifying-the-application-to-use-the-sql-ef-provider)
  - [Creating a pull request for publishing the changes](#creating-a-pull-request-for-publishing-the-changes)
- [**4. Using Azure Storage for Storing Binary Files**](#4-using-azure-storage-for-storing-binary-files) (10 videos)
  - [Using Azure Storage for storing binary files](#using-azure-storage-for-storing-binary-files)
  - [Creating the Storage account using the Azure portal](#creating-the-storage-account-using-the-azure-portal)
  - [Creating the Blob container in the Storage account](#creating-the-blob-container-in-the-storage-account)
  - [Modifying the seed data to read the photos from the container](#modifying-the-seed-data-to-read-the-photos-from-the-container)
  - [Modifying the user interface to upload photos](#modifying-the-user-interface-to-upload-photos)
  - [Implementing the StorageService class](#implementing-the-storageservice-class)
  - [Invoking the StorageService from the Edit page](#invoking-the-storageservice-from-the-edit-page)
  - [Testing the web application locally](#testing-the-web-application-locally)
  - [Publishing the application to the deployment slot](#publishing-the-application-to-the-deployment-slot)
  - [Swapping the production and dev deployment slots](#swapping-the-production-and-dev-deployment-slots)
- [**5. Using Azure Functions to Improve Your Web Application**](#5-using-azure-functions-to-improve-your-web-application) (7 videos)
  - [Using Azure Functions to improve your web application](#using-azure-functions-to-improve-your-web-application)
  - [Creating the Azure Functions project and repository](#creating-the-azure-functions-project-and-repository)
  - [Testing the function by using the Azure Storage Explorer](#testing-the-function-by-using-the-azure-storage-explorer)
  - [Implementing the resize code and the output binding](#implementing-the-resize-code-and-the-output-binding)
  - [Modifying the web application to display the thumbnails](#modifying-the-web-application-to-display-the-thumbnails)
  - [Pushing all the changes to the remote repositories](#pushing-all-the-changes-to-the-remote-repositories)
  - [Provisioning the Function App resource and testing the app](#provisioning-the-function-app-resource-and-testing-the-app)
- [**6. Taking Advantage of Azure Logic Apps for Your Web App**](#6-taking-advantage-of-azure-logic-apps-for-your-web-app) (4 videos)
  - [Taking advantage of Azure Logic Apps for your web app](#taking-advantage-of-azure-logic-apps-for-your-web-app)
  - [Creating the Azure Logic App resource for sending an email](#creating-the-azure-logic-app-resource-for-sending-an-email)
  - [Testing the Logic App](#testing-the-logic-app)
  - [Modifying the existing Logic App to add a custom SQL Query](#modifying-the-existing-logic-app-to-add-a-custom-sql-query)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Capitalize on the power of Azure to craft your web app](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/capitalize-on-the-power-of-azure-to-craft-your-web-app?u=76281980&t=0)** - [Rodrigo] Need to create web applications in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md)? Learn practical techniques to implement cloud native web applications. We'll create and employ the pet management application for the Wisdom Pet Medicine Company from start to finish by using Azure [DevOps](../../Topics/DevOps.md), App Services, [SQL](../../Skills/Data%20Science/SQL.md) Database and Functions. I'll show you the essential techniques and the most common features required to get your application up and running in no time. My name is Rodrigo Diaz Concha, and I'm a member of the [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) MVPs and Regional Directors. Your learning journey is about to start. Let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [DevOps](../../Topics/DevOps.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [rodrigo] (1)

#### [What you need to know](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=0)** - [Instructor] To get the most out of this training course, it's recommended that you have certain knowledge beforehand. The first topic that I want to mention is [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) itself. Things like what resource groups are, and a basic knowledge of how to use the Azure portal will be enough. In addition, you should be comfortable reading C# code. Don't worry, you don't have to be an expert in .NET, and I won't focus on that particular code too much. Previous experience with any programming language should be enough for you. Even though I use .NET and C# for the Wisdom Pet Medicine application, I'm not going to describe Azure concepts you couldn't use in your own programming language. And finally, some [Git](../../Skills/Software%20Development/Git.md) knowledge should come in handy. In concrete, I'm going to use push/pull and pull requests. Now, speaking of the tools, we're going to use, of course, .NET SDK. It's the first one since this is an [ASP.NET](https://ASP.NET) core web application. And you need an IDE. In this case, I used Visual Studio, but you can follow the entire course with Visual Studio Code if you like. And Git for cloning the repository and for following the exercises. And finally, the Azure Storage Explorer. I use this when testing the Azure Function and the Azure Storage Account.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-need-to-know?u=76281980&t=94)** Before I end this video, let me remind you that you can open an Azure account for free at the [azure.com/free](https://azure.com/free) website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [Git](../../Skills/Software%20Development/Git.md) (2), [ASP.NET Core](../../Skills/Web%20Development/ASP.NET%20Core.md) (1)
> **Env Vars:** net (4), sdk (1), asp (1), ide (1)
> **Tools:** visual studio (2), azure portal (1)
> **CLI Commands:** git (2)
> **URLs:** [asp.net](https://asp.net) (1), [azure.com](https://azure.com) (1)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [What you are going to build](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=0)** - [Instructor] In this course, we'll build a pet management application for Wisdom Pet Medicine, a fictitious veterinary hospital and pet grooming company that has been expanding its business for a few years. The aim of Wisdom Pet Medicine is to establish itself as a leading source of pet healthcare expertise. They create tailored healthcare plans that are specific to each of their patients. The application is based on web technologies and serves to handle the information of pets that are registered in the hospital. The company specifically focuses on caring for dogs, cats, and rabbits. To begin, we'll use a code base created with [ASP.NET](https://ASP.NET) Core and the C# programming language. This web application uses the Entity Framework Core and it's in-memory data provider. We're going to store the code for this application centrally in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Repos, one of the [Azure DevOps Services](../../Skills/Software%20Development/Azure%20DevOps%20Services.md). Next, we're going to deploy an Azure App Service to host and run the application. The App Service will also include a deployment slot named Dev that will be connected to Azure Repos. The setup will ensure that any code changes are automatically deployed to the slot. Then we'll stop using the memory data provider and set up an Azure [SQL](../../Skills/Data%20Science/SQL.md) Database to store the data. The initial code base uses the images directly
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/what-you-are-going-to-build?u=76281980&t=94)** from the static wwwroot folder. To improve this, we'll create an Azure storage account, which we'll use initially to store the photos of the pets. Later, we're going to create a second project to implement an Azure Function. The function's job will be to generate a thumbnail for the uploaded image. Additionally, we'll also create a slot named Dev that will connect to the second project located in Azure Repos. Finally, we'll create an Azure Logic App for sending an email whenever there's a new role in the pet stable. By the end of the course, you'll have developed a cloud native application using [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and some of its most notable services. Okay, fasten your seat belts since this is going to be fun. Join me in the next chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [ASP.NET Core](../../Skills/Web%20Development/ASP.NET%20Core.md) (1), [Azure DevOps Services](../../Skills/Software%20Development/Azure%20DevOps%20Services.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** asp (1), net (1), sql (1)
> **Prerequisites:** setup (1), set up (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 1. Using Azure DevOps for Storing Your Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Azure DevOps for storing your code](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-devops-for-storing-your-code?u=76281980&t=0)** - [Instructor] After a few days of work, you have a functional first version of the path management application. You built it using [ASP.NET](https://ASP.NET) Core and the C# programming language. You're using Entity Framework Core within memory data provider for data access. Right now, the project resides solely in your development machine. So you want to be sure your hard work is well-protected. That's why you wisely decided to utilize [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md), a platform that allows you to store your source code centrally and securely. So stick with me in this chapter where we'll uncover just how straightforward it is to start with Azure DevOps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [DevOps](../../Topics/DevOps.md) (2), [ASP.NET Core](../../Skills/Web%20Development/ASP.NET%20Core.md) (1)
> **Env Vars:** asp (1), net (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the Pet Management application base source code](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=0)** - [Instructor] Let me show you the application that we're going to use in this course. So as you can see here in the terminal, I have the wpm folder, which is the root folder. And inside the source folder we have the wpm dot web, asp dot net core application. And also this Visual Studio solution file. So let me change the folder to wpm dot web so I can easily execute dot net run. And let's open up this local host webpage.
>
> **[0:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=41)** And as you can see, this is our regular asp dot net core application. Nothing fancy. However, I added this Pets menu item, which is the Pets Management system that we're going to use in this course. So here, as you can see, we have the Pets catalog. So I can easily go ahead and view a pet, say that I want to view this pet, and I can view its details such as the age and the weight and the owners. And let's go back here to the Pets catalog. I can also search. Say that I want to search for Nina. Here's Nina. I can view this dog. I can go back and I can edit this pet. Say that I want to change the age and let's change the weight. And finally click Save. So you can see that I successfully changed the age and the weight of this pet. Okay, let's go back here again and let's click on Create. And now let's create a new pet. Say Snoopy, age 10, weight 25. And Snoopy is a beagle dog. So let's say, and as you can see, I now have Snoopy as part of this Pet catalog. Okay, so now let's open up this solution in Visual Studio
>
> **[2:21](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=141)** so we can see the source code. Here we are in Visual Studio, and let's open up this cs port file. If you're not familiar with dot net, this is the configuration file for this project. So we can easily see that this is targeting dot net seven and I'm using a couple of packages that are the memory provider for the edited framework core and also the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) provider. In this case, I'm only using the memory provider. So you can see that in the program dot cs file. Particularly in this line, we can see that I am executing at in memory WpmDb. In other words, I'm using an in memory database instead of using SQL server. In this course we're going to use [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [SQL](../../Skills/Data%20Science/SQL.md), so eventually we're going to change this. Here we are in Visual Studio. So let's open up this cs file. If you're not familiar with dot net this is a configuration file for this project. So we can see that this is targeting dot net seven. And also this is referencing a couple of packages which are SQL Server and in memory for the entity framework core orm. In its current state I'm only using the memory provider.
>
> **[3:57](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/exploring-the-pet-management-application-base-source-code?u=76281980&t=237)** So we can open up the program cs file. And here in line number seven, you can see that I'm executing add in memory WpmDb. So if we follow this implementation, you can see that this is precisely executing the use in memory database for the additive framework core. In other words, each time I execute this application the entire database will be deleted and regenerated. Speaking of which, if I open up the WpmDb context file, we can see that this is the database for the pets management system for the Wisdom Pet Medicine Company. In this course we're going to use Azure SQL so eventually we're going to replace this method call with the one that configures the SQL server provider.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [SQL](../../Skills/Data%20Science/SQL.md) (2)
> **Env Vars:** sql (6)
> **Tools:** visual studio (4), terminal (1)
> **Definitions:** is a  (2), in other words (2)
> **UI Navigation:** click on (1)
> **Exercise Files:** source code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Creating a new Azure DevOps account and organization](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how you can create a new [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md) account. So, the first thing that you need to do is navigate to dev.[azure.com](https://azure.com), and you're going to land in this webpage where you can read more information about all the different services included in Azure DevOps. As you can see here in this webpage, Azure DevOps has many different services. However, in this course we're going to focus on Azure Repos, which is the service that allows us to host the source code for our applications. Okay, so let's scroll back here and click on the start free button. Then, I'm going to enter my [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) account credentials, which I did already to expedite this process. So, now, I have to click on continue. And in this other section I need to specify the organization name. In this course, I'm going to use Wisdom Pet Medicine. So, I already did that, that's why this is going to tell me that the name is already taken. And then, you need to specify the region that you want to use. So, be sure to use the closest to your location. And in this case, I'm going to use Central US.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-account-and-organization?u=76281980&t=95)** And finally, you have to type those cap check correctors for validation purposes. Okay, so let me show you the final result. I have the Azure DevOps account that I created and the Wisdom Pet Medicine organization. So, I'm ready to create a new project and we're going to do that in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [DevOps](../../Topics/DevOps.md) (4), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **UI Navigation:** click on (2)
> **URLs:** [azure.com](https://azure.com) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Creating a new Azure DevOps project and adding existing code](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=0)** - [Instructor] Now that we've created this new organization, let's got ahead and create a new project, and let's name it, say WPN, which stands for wisdom pet medicine. And we're going to use a private visibility. And, finally, we're going to use [Git](../../Skills/Software%20Development/Git.md) as its [Version Control](../../Skills/Web%20Development/Version%20Control.md) technology. So, let's go ahead and click on the create project button. And, as you can see here, this process is quite fast. So, here's the landing page for the project that we successfully created. And now we're ready to navigate to Repos. And, in this case, we don't have any source code yet. And, it makes sense, because I need to push the existing code page that we're going to use in this course. So, there are a couple of options that I can use here. The first one is cloning the entire repository in my computer and then copying the entire project to that new folder. Or, I can use an existing folder, and use the Git remote add command to specify and configure this new project as its remote repo. So let's use this option. I'm going to copy the entire command set I have here, so we're ready to open up the terminal.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-azure-devops-project-and-adding-existing-code?u=76281980&t=100)** Here, in the terminal, I'm going to paste those commands. And, let's press Enter, so the remote repo is configured. And we push the entire source code to the repo. So, this is successful. Let's go back to the browser. So, now, we're ready to refresh the browser to see that we have the contents for this project that we're going to use in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **CLI Commands:** git (2)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), navigate to (1)
> **Exercise Files:** source code (2)
> **Env Vars:** wpn (1)
> **Cross-References:** go back to (1)
> **Definitions:** stands for (1)

#### [Creating and accepting a pull request in Azure Repos](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=0)** - Generally speaking, you don't work directly in the master or main branches. Instead, you create a new branch and then implement those changes or features in that newly created branch. And finally, you create a new pull request so somebody with enough permissions can merge those changes back to the main or master branch. So, let's do this. I'm going to create a new branch here, and let's name it "fix". And let's click on Create. And now, say that I want to implement some changes or fixes in this code. I don't want to change anything, so I'm just going to add a new line here, and let's save this file. And as you can see here, in Visual Studio, it detects that this particular file has a change. So, I'm ready to add a message before I commit those changes. So, "Fixed the Create feature." And let's click on Commit All. And now I'm ready to push those changes back to my fix branch in the server. So, let's do this. And now, those changes are in the server. Fantastic. Let's open up the browser. Here in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md).
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-and-accepting-a-pull-request-in-azure-repos?u=76281980&t=94)** I navigated to the WPM project and then I navigated to the pull requests page. So you can see that it identifies that I updated the fix branch, and I can create a pull request right from here. So, the title and the description are fine. And let's click on Create. So, here, I need to approve this pull request. Of course, in real world applications there's somebody else who is reviewing and verifying those pull requests. And finally, I'm going to mark this pull request as complete. And let's click on complete merge. After some seconds those changes that I implemented will be merged to the master branch. In addition, if I navigate to the branches page, you can see that I only have the master branch because the fix branch was deleted after the merge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **UI Navigation:** click on (4), navigate to (1)
> **Env Vars:** wpm (1)
> **Tools:** visual studio (1)
> **Speakers:** - generally (1)


### 2. Hosting and Running the Web Application in Azure App Service

[↑ Back to Table of Contents](#table-of-contents)

#### [Hosting and running the web application in Azure App Service](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/hosting-and-running-the-web-application-in-azure-app-service?u=76281980&t=0)** - [Instructor] The company's confident its use of [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md) will accelerate its development cycles and enable faster value delivery. They're looking forward to using the application to provide helpful feedback. Together, you acknowledge the significant benefits of continuous software delivery. Prompted by this, you delve into Azure to uncover a service that could enable this goal. You stumble upon Azure App Service a service specializing in deploying, hosting, and running code-based or even container image based web applications and services. The time has arrived to deliver your application to your users. Okay, let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [DevOps](../../Topics/DevOps.md) (1)
> **Speakers:** - [instructor] (1)

#### [Provisioning a new Azure App Service resource in the portal](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=0)** - [Instructor] Now we're ready to create the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) App Service that we're going to use to run our application. So as you can see here, I already created this Wisdom Pet Medicine Resource Group. So let's click on create to create a new resource. And here in the marketplace, I'm going to search for web app. This is a template that I want to use. Even though it's based on the Azure App Services, the name of the template is Web App, and this is because Azure App Services support different workloads, and web applications is just one of them. Okay, let's click on Create. And here you need to specify the subscription, and of course the resource group, and then the name. In this case, I'm going to specify wpmappservice. Take into account that this name should be unique in the entire Azure Cloud. So it looks like wpmappservice is available. So now we need to specify if we want to publish code or maybe Docker containers, or even the static web apps. In this case, I'm going to choose code that is based on the .NET 7 runtime and you need to select the operating system. In this case, I'm going to use [Windows](../../Glossary/Service/Windows.md). However, [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) is another option
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=95)** that you can use for .NET applications because .NET is across platform technology. Okay, so now let me search for West US 3 which is the closest region that I have right now. And now we need to specify the pricing plan. In other words, we need to create a new app service plan resource that is the [Hardware](../../Topics/Hardware.md) configuration that we want to use. So let's create a new one named wpmappserviceplan. You can always navigate to explore pricing plans to understand the different configurations and features that those plans have. In this case, I'm going to use Premium V3 P1V3, and this is because I want to use some features from the premium pricing plans. Okay, so now zone redundancy, which in this case, I'm not going to use, so it's fine to leave it that way as disabled. Let's navigate to deployment. In this other option, you can specify [GitHub](../../Skills/Software%20Development/GitHub.md) action settings. In this case, we're not going to use GitHub actions, that's why I want to navigate to networking. I want to enable public access so I'm going to leave those features and values as is. Let's navigate to monitoring.
>
> **[3:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=191)** Here the portal is asking me if I want to enable application insights, which I do. However, let's change the name to wpmapplicationinsights,
>
> **[3:28](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-a-new-azure-app-service-resource-in-the-portal?u=76281980&t=208)** just like that. And let's click on, okay. And finally, if you want to specify some tags, this is the place, otherwise you can just click on review and create to understand the different options that you selected. Okay, so let's click on create and let's wait for this resource to be deployed. So I'm going to pause the video. After a while, the deployment will be completed so we can navigate to this resource and this is the webpage that we're going to use to manage this App Service. You can always test this by navigating to this default domain URL. So let's click on this, and this webpage means that the App Service is running correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **UI Navigation:** click on (6), navigate to (5), select the (1)
> **Env Vars:** net (3), p1v3 (1), url (1)
> **Definitions:** is a  (1), in other words (1), means that (1)
> **Tools:** github (2)
> **Exercise Files:** template (2)
> **CLI Commands:** docker (1)
> **Analogies:** just like (1)

#### [Creating a new deployment slot for development](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=0)** - [Instructor] There are many different ways we can use to deploy the application to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) App Service. For example, we can use Visual Studio, we can use Visual Studio Code, or we can even do it manually. However, in this course, I'm going to show you a great feature of App Services. That is the deployment slots. With deployment slots, we can have different environments we can use for deploying the applications. So as you can see here in this moment, I have a single deployment slot, which is the production one, and I'm going to create another one for development purposes. So let's click on Add Slot and the name will be dev. So as you can see, the name is being part of the final name of this deployment slot, it's being used as a suffix. And now I need to choose if I want to clone the settings from the original App Service. In this moment, I don't have any kind of custom settings, so that's why I'm not going to clone anything. Okay, so let's click on Add, and let's wait for this to be created. After a while, this deployment slot will be created. Okay, so now we're ready to close this. And here in the list we can see that we have two deployment slots, the original one, and of course the one that we just created. You can navigate between deployment slots
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-new-deployment-slot-for-development?u=76281980&t=95)** by clicking on the link that is here on the list. So let's do that. And now we're ready to deploy the application to this particular deployment slot. We're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Tools:** visual studio (2)
> **UI Navigation:** click on (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Connecting the deployment slot to Azure Repos](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=0)** - [Instructor] We have created this deployment slot, and now we're ready to publish the application. So, we can do that by navigating to the deployment center. And in the deployment center, I'm going to use the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) repos source. So if I select this, you can see that in this Azure repos section, I can choose the organization, I can select the project, which is WPM, the repository, and finally, the branch that I want to use. In this case, it's the master branch. So this is working because I'm using the same [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) account for both the Azure portal and the Azure [DevOps](../../Topics/DevOps.md) account that I created before. Okay, so let's save this by clicking on the save button, and let's wait for this to be deployed. And after some seconds the deployment slot will be connected to the Azure repos account that we created before. So let's do this. Let's navigate to logs. And here, let's click on refresh. So you can see, that this is deploying the application in its current state. So this is a current state of the application that is in the Azure repos project. Okay, so this is done,
>
> **[1:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/connecting-the-deployment-slot-to-azure-repos?u=76281980&t=93)** and now we're ready to test the application. So let's go back here to the overview page, and let's navigate to the deployment slot. And if we do that, you can see that we're displaying the application that we just published. So, if I navigate to Pets, I can see the different pets that we had before. Just as expected. Remember that the application was deployed to this deployment slot, and not the app service itself. In other words, if I navigate here to home, and then the app service, and I navigate to the default domain, you can see that the app service itself has this content, and the deployment slot has this other content. So you can see here in the URL, that those two are different.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **UI Navigation:** navigate to (4), select the (1), click on (1)
> **Env Vars:** wpm (1), url (1)
> **Definitions:** is a  (1), in other words (1)
> **Tools:** azure portal (1)
> **Speakers:** - [instructor] (1)

#### [Modifying the source code to automatically publish the app](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=0)** - [Instructor] Now that we've connected [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Repos to this deployment slot, why don't we make some changes to the source code, just to verify that application is automatically published to this slot, after we accept the pull request. So let's do that. Let's open up the terminal. In here, I'm going to create a new branch. And I'm going to name it menu, since I want to make some changes in the menu items. And let's execute [Git](../../Skills/Software%20Development/Git.md) checkout. And now, let's open up Visual Studio Code. So here, I want to modify Layout.cshtml, because this is a place where we can find the menu items for this application. So I'm going to change Pets to Pet Management. Something like this. And... Let's commit those changes. And finally, let's click on publish branch. So this is publishing the branch back to the server. So we're ready to go to the browser. Here we are in the WPM project, and let's navigate to repose. And here, you can see that I updated the menu branch. So let's click on create a pull request, and let's click on create, and I'm going to approve my own pull request. Let's click on complete.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-source-code-to-automatically-publish-the-app?u=76281980&t=95)** And finally, I'm going to click on complete merge. So let's wait for this. And the pull request was completed. So, we're ready to go back to the deployment slot. Let's go here to logs, and let's click on refresh. So as you can see, now the application will be published again with this change. So let's pause the video. And after some seconds, this deployment will be completed. We can see that in the status column, it says success. So, if I go here to the overview page, I can navigate to the default domain of this deployment slot, and we can see the change that was automatically published.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **UI Navigation:** click on (6), navigate to (2), in the menu (1), go to (1)
> **CLI Commands:** make (2), git (1), find (1)
> **Tools:** terminal (1), visual studio (1)
> **Env Vars:** wpm (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)

#### [Swapping the deployment slots](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=0)** - [Instructor] Let's suppose you've completed all the required changes and features in your development environment. In other words, in your dev deployment slot. And now you're ready to roll out these modifications into the production environment. What would you do? Luckily, deployment slots have the swap feature. That allows us to swap the contents between a source and a target. So in this case, the source is the dev deployment slot and the target will be production. Below, we can see the different config changes that are going to be applied after this process finishes. So let's do this. Let's click on swap and wait for this process to complete. After a little while, the process will be completed and now we're ready to close this panel. And what happens if I navigate to the dev deployment slot? In this case, I'm displaying the old contents. In other words, the contents that come from the production deployment slot. And let's duplicate this and let's remove the suffix. So you can see that now, the app service itself has the application. We can see that the path management application is running in the app service just as expected. That said, it's easy to see how deployment slots allow you to have a clean
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-deployment-slots?u=76281980&t=94)** and a straightforward development workflow.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1), navigate to (1)
> **Definitions:** in other words (2)
> **Speakers:** - [instructor] (1)


### 3. Using Azure SQL for Your Data Storage

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Azure SQL for your data storage](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-sql-for-your-data-storage?u=76281980&t=0)** - [Instructor] So far, the application has been using temporary in-memory data. However, we require a more reliable database to handle the company's workload and consistently store information. [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [SQL](../../Skills/Data%20Science/SQL.md) Database is the perfect choice for our relational database. And with any framework core, making changes to the code is effortless. It's time to see this in action, so let's go ahead and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** sql (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Azure SQL server and database](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=0)** - [Rodrigo] In this video, I'm going to show you how to deploy a new [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [SQL](../../Skills/Data%20Science/SQL.md) Database and its related server. So let's click on Create. And the template that we're looking for is Azure SQL. So let's search for this, and let's use this template, and let's click on Create. This template allows you to use SQL in different ways; however, the option that we're looking for is SQL [Databases](../../Skills/Software%20Development/Databases.md). So let's click onc Create again. And after specifying both the subscription and the resource group, we're ready to specify the name. This is the name of the database. So the database will be WPM. And we need to create a new server. So let's click on Create New. And the name of the server is going to be WPM [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). And my location is West US 3. So now, I'm ready to specify how can I connect to this server. In this case, I'm going to use both SQL Server authentication and [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) authentication. So for the SQL Server authentication, I want to use this username and a password. So let's write this down just like this. And now, for the Azure Active Directory authentication, I need to select an admin. So let's pause the video.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=95)** I selected my own user as the admin. So we're ready to go back. Let's click on Okay. And now, I need to specify if I want to use the elastic pool, which I don't. And I need to specify if I am going to create a development environment or a production environment. So this is related to the kind of [Hardware](../../Topics/Hardware.md) that you want to deploy. So in this case, I'm going to use development, which is related to the serverless option. This is going to be cheaper. And of course, you can always go here and configure your database for your own requirements. Talking about storage redundancy, it's fine to use locally redundant backup storage. Let's go here to Networking. In this case, I'm going to change to a public endpoint. And I'm going to be sure that Azure services and resources can access this server. And I'm going to add my own client IP address. And let's go to Security. This is fine. And let's click on Review and Create and Create again. So remember, we're going to create a new SQL Server in a database. Let's wait for this process to finish.
>
> **[3:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-sql-server-and-database?u=76281980&t=192)** After a while, this process will complete, and we're ready to go to this resource. And we can see that this is a SQL database, which is WPM. And we can navigate to the server by clicking on this link. Fantastic! Follow me to the next video where we're going to modify the source code so we can use this SQL database instead of the in-memory database that we're using currently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [SQL](../../Skills/Data%20Science/SQL.md) (6), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (4), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** sql (10), wpm (3)
> **UI Navigation:** click on (5), go to (2), navigate to (1)
> **Exercise Files:** template (3), source code (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)

#### [Modifying the application to use the SQL EF provider](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=0)** - [Instructor] In its current state, this application is using an in-memory database. In other words, each time we execute the application, all the changes will be lost and that's not okay. That's why we need some kind of persistent storage such as [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [SQL](../../Skills/Data%20Science/SQL.md) database. That's why in this video we're going to change the code to use the SQL database that we just implemented. Okay, let me show you how. Here in the program.cs file, in line number seven, we have this method call that is AddInMemoryWpmDb. This is an extension method that I implemented. So if I show you the code, you can see that this is using memory database that comes from the in-memory provider of the Entity Framework Core. So luckily we have this other method that is AddWpmDb, and this other method uses the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) provider for Entity Framework Core. However, this provider needs a connection string. In this case, the name of the connection string should be Wpm. Okay, so we need to make some changes in the code. Let's go ahead and get started. Let's go back to program.cs because we need to replace this method call with AddWpmDb.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=96)** And this expects an IConfiguration object, and I'm going to pass builder.Configuration. Okay, now we need the connection string. So let's go back to the Azure portal. Here in the Azure portal, we are in the SQL Server overview page. And if we navigate to SQL [Databases](../../Skills/Software%20Development/Databases.md), we can see the entire list of databases implemented in this SQL Server. So we have wpm, let's click on this. And under Settings, we can find connection strings. This is the connection string that we're going to use in the application. We just need to replace the password. Okay, let's copy this and let's go back to Visual Studio. Here in Visual Studio, I need to store the connection string. There are many ways we can use to store that connection string. We can use appsettings.[JSON](../../Skills/Web%20Development/JSON.md) We can use appsettings.development.json. However, let me show you a better option which is user secrets. So I'm going to right click on the project and I'm going to use Manage User Secrets. This is a secret.json file that won't be pushed to the centralized repository. So as you can see, the location of this secrets.json file is inside this computer
>
> **[3:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=191)** and won't be available in the centralized repository. That's why it's way better to use the user secrets instead of the appsettings.json files. Okay, so let's create a new ConnectionStrings element, ConnectionStrings. This is the name that .NET expects. And the name is Wpm, and the value is the connection string. I just need to replace the password because as you can see here, it has a placeholder. So I'm going to pause the video and replace the password. Great, now I need to create a new branch. I don't want this to be in the master branch. So let's create a new branch and let's name it sql. And I'm going to choose bring the changes to sql. And now we're ready to test this application out. So let's start a new debugging session. And here we can navigate to Pet Management. And as you can see, I have the entire pet catalog, just as expected. However, the data comes from the Azure SQL database instance and not from the in-memory database. We can even verify this if we go back to the Azure portal. Here in the Azure portal, I'm going to open the query editor
>
> **[4:47](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-application-to-use-the-sql-ef-provider?u=76281980&t=287)** and I'm going to use [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) authentication. And here, I can expand the tables. So you can see that we have now five tables, and actually I can right click on one of those tables and see the contents of this particular table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (6), [JSON](../../Skills/Web%20Development/JSON.md) (5), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3), [Databases](../../Skills/Software%20Development/Databases.md) (2)
> **Env Vars:** sql (7), net (1)
> **Tools:** azure portal (4), visual studio (2)
> **UI Navigation:** click on (3), navigate to (2), open the (1)
> **File Paths:** appsettings.json (2), appsettings.development.json (1), secret.json (1), secrets.json (1)
> **Cross-References:** go back to (4)
> **Definitions:** in other words (1), is an  (1), is a  (1)
> **CLI Commands:** make (1), find (1)

#### [Creating a pull request for publishing the changes](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=0)** - [Instructor] Remember that I created this branch in the previous video? There's a reason why and I'm going to explain that to you in a little bit. In this moment, I want to push the changes to the remote [SQL](../../Skills/Data%20Science/SQL.md) branch. So I'm going to use this [Git](../../Skills/Software%20Development/Git.md) changes branch and let's type, Implemented the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) provider. And let's click on Commit All and let's push those changes back to the remote branch. So let's do this. And this is done. And now we're ready to go back to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md). So here in the Azure DevOps portal, I'm going to navigate to Repos and then Pull Requests. And as you can see here, it identifies that I updated the SQL branch right now. So let's click on Create a pull request and say, Implemented the SQL Server provider.
>
> **[1:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=72)** And let's click on Create. Let's approve. And finally, let's complete this pull request. So it's been merged. So let's navigate to the Azure portal, and let's go back here to the resource group.
>
> **[1:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=97)** And let's navigate to the dev deployment slot. Deployment Center. And then let's open up the logs. And as you can see, this is deploying the application in this moment. So let's wait for this process to finish. And after a while, this process will be completed. And let's navigate to Overview. And finally, let's navigate to this default domain. So we can see that this is not working in this moment. Can you identify why? If your answer is because we don't have the connection string in the deployment slot, you are right. So let's go back here to the Azure portal. And if we go here to Configuration, we will be able to add this connection string. So let's add a new connection string, which is Wpm, and then I'm going to paste the connection string that I copied from the SQL database. So let's paste it right here. And of course I need to change the password. And to do that, I'm going to pause the video. Okay, and now I'm ready to change the type, which is SQL Azure.
>
> **[3:10](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-a-pull-request-for-publishing-the-changes?u=76281980&t=190)** And with this other configuration setting, which is deployment slot setting, we can specify that this connection string will be attached to this deployment slot only, which is not the case when I swap the slots. I want this connection string to replace the one that is in the production slot. Or if you don't want to replace that connection string, then you should choose this option. So it'll depend if you have different [Databases](../../Skills/Software%20Development/Databases.md) for production and development. Okay, so let's click on this deployment slots setting because I only have one database so it actually won't make a difference right now. And let's click on OK, and finally, let's click on Save. Let's continue and let's wait for this process to finish. So the process is quite fast. You're already finished and now we're ready to test the application again. Let's go back to this tab and let's refresh the webpage. And now the application is running, so we can navigate to the Pet Management option. We can see that we have all the pets and everything is working just as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [SQL](../../Skills/Data%20Science/SQL.md) (4), [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (2), [DevOps](../../Topics/DevOps.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
> **UI Navigation:** click on (6), navigate to (6)
> **Env Vars:** sql (6)
> **Cross-References:** go back to (2), previous video (1)
> **CLI Commands:** git (1), make (1)
> **Tools:** azure portal (2)
> **Speakers:** - [instructor] (1)


### 4. Using Azure Storage for Storing Binary Files

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Azure Storage for storing binary files](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-storage-for-storing-binary-files?u=76281980&t=0)** - [Instructor] The company asks you to add a feature for updating pet photos. One requirement is that the application must keep the pictures in a centralized and secure location. To achieve this, you decide to use an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) storage account which can store various types of data, including blobs, message queues, tables and shared files. The good news is that implementing this logic is quite easy thanks to the number of [npm](../../Skills/Web%20Development/npm.md) packages and SDKs available for Azure. So without any delay, let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **CLI Commands:** npm (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Storage account using the Azure portal](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=0)** - [Instructor] In this video, I'm going to show you how to deploy the storage account that we're going to use in the Wisdom Pet Medicine solution. So let's click on Create and let's search for storage. And the one that we need is storage account. So let's click on Create. And after specifying both the subscription and the resource group, we're ready to specify the name, which should be unique in the entire [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Cloud. So let's say with wisdompetmedicinestorage, and then the region, which is West US 3, in my case. And performance, which is standard, we don't need premium features at all. And for redundancy, let's use luckily, redundant storage. Okay, so be sure to select allow enabling public access on individual containers. And in networking, be sure to select enable public access from all networks. So those are the default values, so we don't need to do anything else. So let's click on Review. You can always verify all the settings and configurations that you selected. And let's click on Create. So we're ready to wait for this process to finish. So let me pause the video.
>
> **[1:38](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-storage-account-using-the-azure-portal?u=76281980&t=98)** So this is deployed, and we can navigate to this resource, so we can see this overview page, and now we're ready to use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **UI Navigation:** click on (4), navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Blob container in the Storage account](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=1)** - [Instructor] The [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) storage account is a versatile service since it allows me to store blobs, and file shares, and queues and tables. However, let's focus on containers. Containers are similar to folders where we can store different blobs. So let's create a new container and let's name it Photos. And the access level that we need is blob since we need to have anonymous read access for the blobs that we're going to upload, in other words, the pets photos. So let's click on create and we can navigate to photos to upload those pictures. So let's click on upload. And here I'm going to use the [Windows](../../Glossary/Service/Windows.md) Explorer. As you can see, I already navigated to the images sub folder in the source code, and let's drag and drop those image files. And finally, let's click on upload. So this process is quite fast and now we're ready to view those pictures. For example, let's use Nina.jpg. I can click on this button and then select view, edit so we can see this picture. And I can also navigate to overview to copy the full url and let's paste it. So you can see that the fully qualified name of this picture
>
> **[1:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-blob-container-in-the-storage-account?u=76281980&t=99)** is this one that we have on the screen. In other words, we need to modify the seed data and also the database data that we have in Azure [SQL](../../Skills/Data%20Science/SQL.md) to load those pictures from the blob storage. So we're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **UI Navigation:** click on (4), navigate to (2), drag and drop (1)
> **Analogies:** picture (2), similar to (1), for example (1)
> **Definitions:** in other words (2), is a  (1)
> **Env Vars:** sql (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Modifying the seed data to read the photos from the container](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=1)** - [Instructor] We need to update the seed data and also the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [SQL](../../Skills/Data%20Science/SQL.md) database data to reflect the new URL for the photos. So there are different ways we can do this, however, I'm going to use the following technique. I want to modify the wpmtv context file that has the seed data, and then I'm going to drop all the tables in the database so the next execution of the application regenerates the entire tables with the new data. So let's do this, first, let's create a new branch and let's name it, Seed and let's click on create, and let's modify this. I'm going to paste the URL that comes from the Azure Portal. So remember that this is using the Azure storage account that we provisioned, and also the photos container. So let's modify this other pet as well. And finally Cati. Okay, so let's do this. And now we're ready to save this file and let's save those changes. Seed data updated, and let's commit all the changes, and let's push the changes back to the seed branch
>
> **[1:41](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=101)** in the remote server, which is Azure [DevOps](../../Topics/DevOps.md). Okay, so we're ready to go to Azure DevOps. Here in Azure DevOps, let's navigate to pull requests and then let's click on create a pull request and create. Let's approve this pull request, and finally complete. Okay, so let's complete this merge. And with this, let's go to the Azure Portal. Here in the Azure Portal. I want to navigate to the Azure SQL database which is wpm, let's do this, and let's open up the query editor and let's use [Azure Active Directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md). Since we used the serverless option, we need to wait a little bit for this to spin up and let's click again. I have the queries that we're going to execute to drop all the tables right here in the notepad. So I'm going to paste those here and execute them, so we don't have tables anymore, and that's fine, since I want the execution of the application to regenerate the entire structure. So let's go back here to the resource group, and now let's navigate to the deployment slot and let's navigate to the application.
>
> **[3:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-seed-data-to-read-the-photos-from-the-container?u=76281980&t=199)** So let's navigate to pet management, and let's see if we have the picture of this dog, which we do. Let's copy this image link, or let's select open image, new tab, so we can verify that this is precisely the photo that comes from the Azure storage account. Excellent. However, we need an additional feature here. If we navigate to a dog, say I want to navigate to Cati, there's no way, currently, to upload a picture for this particular pet. So we're going to do that in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (10), [DevOps](../../Topics/DevOps.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Azure active directory](../../Skills/Cloud%20Computing/Microsoft%20Entra%20ID.md) (1)
> **UI Navigation:** navigate to (7), click on (2), go to (2)
> **Env Vars:** sql (2), url (2)
> **Tools:** azure portal (3)
> **Analogies:** picture (2)
> **Speakers:** - [instructor] (1)

#### [Modifying the user interface to upload photos](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=0)** - We need to modify the application so we can implement the photo-uploading feature. I already created this photos branch, and we're going to modify Edit, which is the page that allows me to update an existing pet. So here we need a new control for uploading a photo to a specific pet. And that element is going to be input of type file. As you can see, this kind of pages are a combination of [HTML](../../Skills/Web%20Development/HTML.md) and the Razor pages syntax. If you're not familiar with Razor pages or the [asp.net](https://asp.net) core framework, don't worry, okay? This is going to be easy. So this input is implemented inside this form that has the post method and the multipart form-data enctype. And we can get rid of this line. It was implemented that way because I needed a mechanism for storing the photo URLs. However, with this implementation that we're going to do, that won't be required anymore. Okay, so before I continue with this implementation let's open up this code behind file, since I need to expose a new property of type IFormFile. And let's name this property FileUpload.
>
> **[1:35](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-user-interface-to-upload-photos?u=76281980&t=95)** And this is going to be get and set. And we're going to decorate this property with the BindProperty attribute. This attribute allows me to bind FileUpload with a control. So here I'm going to use the asp-for expression that comes from the Razor pages syntax. And let's use the name of the property that we just implemented. So this is the way that I'm using for binding those two things together. And let's use a CSS class, say form-control. And, finally, let's wrap this inside a div, just like the other divs. And this is going to be class mb-3. And with this, we're ready to implement the storage service.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [ASP.NET Core](../../Skills/Web%20Development/ASP.NET%20Core.md) (1)
> **Env Vars:** html (1), css (1)
> **URLs:** [asp.net](https://asp.net) (1)
> **Analogies:** just like (1)
> **Speakers:** - we (1)

#### [Implementing the StorageService class](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=0)** - [Instructor] We're going to implement a new storage service class that encapsulates the logic for communicating to the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) storage account. In the .NET world, we use NuGet packages for reusing code. So in this project I'm going to add a new NuGet package reference that is Azure Storage Blobs. It was created by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and it contains all the required libraries for using storage accounts in your .NET code. So let's install this. And now we're ready to add a new folder and let's name it Services. And here, I'm going to add a new class that is storage service, and I want to expose the following method. I want to return the final URL of the file that we're uploading. So public, we're going to return this asynchronously. And let's name this UploadAsync. And this is going to receive a stream and the fileName.
>
> **[1:20](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=80)** So the first thing that I want to do is position this stream at zero. And then I'm going to create a new BlobContainerClient object. So containerClient equals new BlobContainerClient. So as you can see, it has many different overloads. However, we're going to use this one that takes the connection string and the blob container name. We know that the container name is photos, so photos is the value that we're going to use here. What about the connection string? So for this I'm going to inject a IConfiguration object and I'm going to put this in a private field, and I want to create connectionString configuration. And I'm going to execute GetConnectionString. And the name for this connection string will be WpmStorage. So this is the connection string that this storage account uses. So here, I want to use connectionString. Okay, so now we're ready to obtain the blob client. So blobClient equals containerClient GetBlobClient. And the name of this blob will be the fileName
>
> **[2:56](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-storageservice-class?u=76281980&t=176)** that we're receiving as the parameter. So I want to use blobClient for uploading the file. So I'm going to pass the stream, and then I'm going to specify that I want to override the blob if it already exists. And of course we need to await this. And finally, let's return blobClient.Uri converted ToString. And of course I need async right here. So with this, we finished this implementation of the storage service class. Before I end this video, we just need to register this object here as a singleton. Let's do this, StorageService. Fantastic. Join me in the next video where we're going to use this StorageService object in the edit page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Code Identifiers:** blobclient (3), filename (2), containerclient (2), connectionstring (2)
> **Env Vars:** net (2), url (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Invoking the StorageService from the Edit page](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=0)** - [Instructor] Now we need to modify the edit page to inject the storage service object. So we're going to do that in the constructor. So let's inject StorageService. Remember that it was registered as a singleton in the program.CS file. And let's save this in a field. Okay, so now we're ready to modify the own post method. And the first thing that I want to do is validate if FileUpload is not null, in which case, I want to create a new memory stream object, say fileStream, new memoryStream. And I'm going to copy the entire contents of the file that is going to be uploaded to this file stream. So fileUpload.CopyTo(fileStream). And now we're ready to execute storage service, UploadAsync. I'm going to pass this memory stream object and the file name. The file name, I can take it from fileUpload.FileName. And of course, we need to await for this and save the result. And I'm going to use this result for modifying the photo URL of the existing pet. So let's do this.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/invoking-the-storageservice-from-the-edit-page?u=76281980&t=94)** Excellent! Now we're ready to test the application.

> [!info]- Semantic Content
>
> **Code Identifiers:** filestream (2), fileupload (2), memorystream (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Testing the web application locally](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=0)** - [Instructor] If we want to test the application, we need the connection string. So here in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) portal I navigated to the storage account. And under security and networking we can find access keys. So here in Access Keys, we can find the connection string. So we can copy this and then go back to Visual Studio. Here in Visual Studio I'm going to right click on the project and then I'm going to select manage user secrets. I'm going to create this WPM storage connection string and then I'm going to paste the connection string that I just copied from the Azure portal. To expedite this process, I did this before. Okay, so now we're ready to start debugging. Here we have the application running so we can navigate to pet management. And let's see if there's a picture here. Of course, there's a picture of this dog. Let's go back and let's modify say box this rabbit. Let's click on edit and let's choose a file and let's select this picture. And finally, let's click on save. So let's view this pad. And as you can see, this pet now has a picture. So let's do this again with another pad.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-web-application-locally?u=76281980&t=96)** Say that I want to modify this cat, edit, choose file, and then this photo, save. And finally, let's click on view. So as you can see, this is the picture that we uploaded to the Azure storage account. Let's copy the image address and we can see that of course, this comes from the Azure storage account and the photos container. Let's go back to the Azure portal. Here in the Azure portal we can go here and navigate to containers and then photos. And we can see that we have gray bunny rabbit and surprised cat, those two images that we just uploaded.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (6)
> **Tools:** azure portal (4), visual studio (2)
> **UI Navigation:** click on (4), navigate to (2)
> **Analogies:** picture (5)
> **CLI Commands:** find (2), cat (2)
> **Cross-References:** go back to (2)
> **Env Vars:** wpm (1)
> **Speakers:** - [instructor] (1)

#### [Publishing the application to the deployment slot](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=0)** - [Instructor] With all of these changes in place, we're now ready to push them to the remote branch. You can click on push here in Visual Studio or you can open up a terminal and execute [Git](../../Skills/Software%20Development/Git.md) push or you can use Visual Studio Code. Regardless of what technique you use, we need to open [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md) and create a pull request. Here we are in Azure DevOps and let's create this pull request and let's name it photos. And let's click on create and let's approve this. And finally, let's click on complete. So now we need to navigate to the deployment slot. So let's go here to the Azure portal and let's open up this deployment slot. And here we can navigate to the deployment center so we can see if the application is already deployed so we can see that this was published successfully. So let's go back here to the overview page and then let's navigate to the default domain. So let's navigate to pet management and let's try to view Garfield. It doesn't have a picture. Let's try to view Bugs.
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=94)** We can see that Bugs is working and Cheshire is working. So let's try to change a photo of Cati. So let's choose a file. Here's a new picture of Cati, and let's click on save. We can see that we're receiving this error. Can you imagine why? If your answer is because we need to have the connection string, you're absolutely right. We need to go back here to the deployment slot and then navigate to configuration because we need to have the connection string for the storage account. So let's add a new connection string, WpmStorage and let's paste the connection string. And then we need to set the type which is custom. And let's click on okay. So let's click on save, and we can go back here and test the application again. So let's try to change Cati's photo. So let's return, edit, choose file. Let's try again. And now it's working. One more thing before I end this video.
>
> **[3:08](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=188)** Let's close this and let's swap the slots. So let's go here and let's swap the development slot with the production slot. So let's click on swap. Let's be sure that we are transferring the WpmStorage connection string. And we're ready to go. Let's swap this out. And after a while, this process will be finished so we can close this and test the production slot. So let's go ahead and let's go here to the WPM App service and let's navigate to this default domain. We can see that this is not working so let's investigate what's going on here. So let's see if it has the correct configuration. So we can see that WPM storage is there. However, WPM is not here, and this is happening because WPM is marked as a deployment configuration. So let's go here to the development slot and let's go here to the configuration. We have WPM, and let's edit.
>
> **[4:44](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/publishing-the-application-to-the-deployment-slot?u=76281980&t=284)** Let's uncheck this. Let's click on okay, and let's save this, and let's try to swap things out again. Swap and now it's trying to push WPM as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [DevOps](../../Topics/DevOps.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
> **UI Navigation:** click on (8), navigate to (5)
> **Env Vars:** wpm (6)
> **Tools:** visual studio (2), terminal (1), azure portal (1)
> **Analogies:** picture (2), imagine (1)
> **CLI Commands:** git (1)
> **Speakers:** - [instructor] (1)

#### [Swapping the production and dev deployment slots](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=0)** - [Instructor] If you wanted to swap the slots, the production slot wouldn't work. The thing is that we have a configuration which is the WPM connection string that is configured as a deployment slot setting. I chose that when I created WPM. However, I'm going to change this right now, otherwise this WPM connection string won't be transferred to the production slot. So let's change this. Let's click on Save, and now we're ready to start the swap process. So let's go ahead and navigate to Deployment Slots. And let's click on Swap. We can see that the source is the dev slot and the target is the production slot. It's paramount to verify that we're transferring both WPM and WPM storage connection strings. So let's click on Swap. Now that the process has completed, we can close this and let's navigate to the overview page and then the service plan. Let's navigate to the app service itself and default domain. So this is the app service, in other words, the production slot. And let's navigate to Pet Management. We can see that this is working,
>
> **[1:34](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/swapping-the-production-and-dev-deployment-slots?u=76281980&t=94)** and let's verify that Cheshire has its photo. And let's verify that we can change the photo of a pet. Say, I want to edit Bugs. Let's choose a file. Let's try this photo again and let's save it. And we can see that this is working just as expected. Let's try this again with other pet. Let's go ahead and edit Gianni. Choose file. This is another picture of Gianni, save, and we can see that this is working successfully.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), navigate to (3)
> **Env Vars:** wpm (5)
> **Definitions:** in other words (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)


### 5. Using Azure Functions to Improve Your Web Application

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Azure Functions to improve your web application](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/using-azure-functions-to-improve-your-web-application?u=76281980&t=0)** - [Instructor] The company's extremely pleased with the progress so far, and now views application as a critical component of its operations. You have received a new requirement to include pet photos in the Pets Catalog. However, the company's worried about the potential negative impact of this feature on the page's performance due to the presence of some large and heavy images. You instinct is to check if [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Functions with its powerful triggers and bindings could be the ideal solution for this requirement. Upon discovering that Azure Functions is a potent, multi-platform technology, you decide to use it in the project. So let's roll up our sleeves and get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Azure Functions project and repository](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=1)** - [Instructor] In this chapter, we're going to create a new [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) function for creating thumbnails. I don't want to use the same repo since this one is already connected to a deployment slot in Azure. That's why I'm going to create a new repo for this. Okay, let's jump right in. Let's navigate to repos, and let's select new repository. And the name is WPM Thumbnail Creator. And let's add a read me file and also a [Git](../../Skills/Software%20Development/Git.md) ignore file based on the Visual Studio template. Okay, so let's click on create. Now we're ready to clone this in the computer. So let's copy the URL, and let's open up the terminal. Here we are in the [Windows](../../Glossary/Service/Windows.md) terminal, and let's execute git clone with this URL. And this is going to create the wpm dash thumbnail creator folder. So we can navigate to this folder. So we can see that we have the read me file and also the git ignore file. Okay, so now we're ready to open Visual Studio to create the project. Here in Visual Studio, let's select file new project. And the template that we want to use is Azure functions. We can find this template under the Cloud category. So let's select this, and let's click on next. The project name is Thumbnail Creator,
>
> **[1:39](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=99)** and of course, we need to select WPM Thumbnail Creator since this is the folder that we cloned from Azure repos. Okay, so let's click on next. And now we're going to select .NET 6. And we're going to use the blob trigger, since we want the function to execute automatically after the new blob is uploaded to the photos container. So the connection string name that we're going to use is WPM Storage, and the path is photos. That's the name of the container. Okay, so let's click on create. Okay, so let's make some changes in the code. First, I want to use the file-scoped namespace feature. So let's do this, and let's change the namespace to WPM. And the function, I want to name it Thumbnail Creator as well. Thumbnail Creator. So let's do this. And the function name, instead of function one, I want to use name of Thumbnail Creator. I think this is better. And finally, I'm going to update the NuGet package references to be sure we're running the latest releases.
>
> **[3:13](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-functions-project-and-repository?u=76281980&t=193)** So let's right click here and manage NuGet packages, and click on updates, select all packages. And finally, let's click on update. Okay, so now we're ready to test if this is compiling, which it does. Excellent. We also need to add the connection of strings in this local settings [JSON](../../Skills/Web%20Development/JSON.md) file, and we're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Git](../../Skills/Software%20Development/Git.md) (3), [Windows](../../Glossary/Service/Windows.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **UI Navigation:** click on (6), navigate to (2)
> **Env Vars:** wpm (4), url (2), net (1)
> **CLI Commands:** git (3), find (1), make (1)
> **Tools:** visual studio (3), terminal (1), windows terminal (1)
> **Exercise Files:** template (3)
> **Speakers:** - [instructor] (1)

#### [Testing the function by using the Azure Storage Explorer](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=0)** - [Instructor] We use triggers and bindings to build [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) functions. Triggers are components that specify how and when your function will be involved. On the other hand, bindings are components that allow you to receive or send data from and to other services and platforms. For example, we're creating this ThumbnailCreator function. This is using the blob trigger. This trigger allows me to automatically execute the function after we upload a new blob to this particular container, which is photos. And as you can see, this is an attribute that is decorating this stream object. So we don't have to do anything else to obtain the entire byte array that represents the photo that's given to you by the blob trigger, which is pretty cool if you ask me. And we have this other parameter, which is name. This is the name of the blob that we've just uploaded. That's why it's being used as a placeholder here. And finally, it's using the ILogger object for logging purposes. So this is the initial code that we're going to use. Of course, we need to set this connection string, and we have different options for doing that. The one that I'm going to use is I'm going to use this local settings [JSON](../../Skills/Web%20Development/JSON.md) file, and I'm going to specify the connection string here.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=96)** I already have it in the notepad, so I'm just adding this WPM storage setting in this JSON file. However, take into account that this is a special file that won't be pushed to your repository, so this won't be available in the source code. Okay, so we're ready to test this out. I have the connection string, and let's see if this is working. Let's start this debugging session. So it's running now, and I want to use the Azure Storage Explorer. Instead of going to the portal, I'm going to use the following application. Here in the Azure Storage Explorer, I'm going to right click on Storage Accounts and then connect to Azure storage, and let's select a storage account or service. And I have a connection string. So let's click on Next and I'm going to paste the entire connection string. Let's do this. And finally, let's click on Next. So this is a nice way that we have when building Azure functions and we're using storage accounts. You don't have to go to the portal. We can use this application, which is open source and cross platform as well.
>
> **[3:11](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-function-by-using-the-azure-storage-explorer?u=76281980&t=191)** So let's expand blob containers. And of course we have those photos there. And to test this Azure function, what I'm going to do is I'm going to drag and drop any photo, say gianni2.jpg. Of course, I already have this gianni2.jpg file. Let's replace it. So we can see here in the Azure function that it automatically executes with this name gianni2.jpg. So we can see and verify that this is working as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (2)
> **UI Navigation:** click on (3), go to (1), drag and drop (1)
> **Env Vars:** json (2), wpm (1)
> **Definitions:** is a  (2), is an  (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implementing the resize code and the output binding](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=0)** - [Instructor] In this video we're going to implement the code for creating the thumbnails. For this, I'm going to use the ImageSharp NuGet package. So let's right click on the project and then Manage NuGet Packages. And the name is SixLabors.ImageSharp. So let's install this and we're ready to go. So let's go back here and let's do the following. Underneath run let's create a new method named, say, Resize where I want to receive the input stream. In other words, the stream that represents the photo that has been uploaded. And I also want to receive the output stream, so this stream will be used for writing purposes. So I'm going to write the resized image in this stream. Okay, so let's do the following. I'm going to use the image class that comes from the SixLabors.ImageSharp namespace and let's execute load, since I want to load this input stream and I want to save this in a variable, I think it's better to use using since it implements idisposable. And let's execute mutate.
>
> **[1:37](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=97)** And let's pass this expression, which is resize And I want all the thumbnails to have 50 pixels wide and the height is zero. In other words, I want to respect the original aspect ratio. Okay, let's continue with image.Save, and then I'm going to pass output stream. And the format is JpegFormat.Instance. Of course, this code will only work with JPEG files, but you're free to implement and support other formats as well. So now I'm ready to invoke resize here, resize, and I'm going to pass input stream, which is my blob. And what happens with the output stream? For this, I want to implement an output binding. So I'm going to use this other attribute, which is blob. And this other attribute supports a blob path as well. And also the file access mode, and finally the connection name. So in this case, I don't want to use the same container, I want to use another container, which is going to be thumbnails.
>
> **[3:09](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=189)** Of course, we need to create the container in the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) storage account. And let's use the same name of the blob. And for the connection, I want WpmStorage as well. This is going to be the same connection string, that's why I'm reusing this. And about the file access format, and for the file access mode, I want to use FileAccess.Write because I want to write the resized image in that stream. So this is just the attribute I need to decorate something, so let's use stream and let's name it thumbnail just like this. So I can pass resize my blob, and then thumbnail. And finally, let's use Logger, this log object, log information and something like the name of the file,
>
> **[4:24](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/implementing-the-resize-code-and-the-output-binding?u=76281980&t=264)** name processed, or something. Just like this, and I think it's better to rename things. This should be logger. And this is the thumbnail, and this is the blob. Okay, I think it looks better this way. And finally, let's create the container in the Azure storage account. So let's go back to the Azure portal. Here in the Azure portal let's navigate to containers, and then let's click on container, thumbnails, and let's make it blob and finally create. And with this, we're ready to test this out, so join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4)
> **UI Navigation:** click on (2), navigate to (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** azure portal (2)
> **Definitions:** in other words (2)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Env Vars:** jpeg (1)

#### [Modifying the web application to display the thumbnails](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=0)** - We need to modify the [AESP.net](https://AESP.net) core web application since we need to show the thumbnails in the pets catalog. So the pets catalog is implemented in this index.cs [HTML](../../Skills/Web%20Development/HTML.md) file. And we have this table. So let's add a new cell, and inside the cell we're going to use this image for showing the thumbnails. So the class is image thumbnail. This is a regular bootstrap thing and alt for those pets that don't have a picture, and finally, the source. I know for sure that I have photo URL; however, this photo URL is pointing to the photos container, and I need to show the thumbnails. So this way that we have right now is just replace photos with thumbnails. And I think this is nice, since we don't want to modify the pet class and some other options that we could implement. Okay, so finally, let's modify the site.CSS file since I want to add a new style for the TRs, in other words, for the table rows. Particularly I want a fixed height row and the content should be virtually aligned to the middle.
>
> **[1:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-web-application-to-display-the-thumbnails?u=76281980&t=100)** Okay, so we're ready to test this out. So here in the browser, let's navigate to pet management. So we can see that this is working as suspected. We have Cati. Cati has a thumbnail, and we can see that this comes from thumbnails. And if we saw Cati, we will see, right here, we will see that this is the full picture of Cati. So we can see that here. Okay, so this is the new UI, and it looks nice. So we're ready to publish the application. In other words, we're ready to publish both the function and also this web application. So join me in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** url (2), aesp (1), html (1), css (1)
> **Definitions:** in other words (2), is a  (1)
> **Analogies:** picture (2)
> **File Paths:** site.css (1)
> **URLs:** [aesp.net](https://aesp.net) (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)

#### [Pushing all the changes to the remote repositories](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/pushing-all-the-changes-to-the-remote-repositories?u=76281980&t=0)** - [Instructor] Let's commit all the changes and let's push all of them to the remote repository. So UI changed or something? Commit and then push. Okay, so we're ready to go to [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [DevOps](../../Topics/DevOps.md). So here we just need to create a pull request and approve it. So let's do this, and this is done. Let's go back to Visual Studio. Here I am in Visual Studio once again, however I loaded the ThumbnailCreator solution since I want to push the changes to the main branch in the remote repository of this other repository. So let's go back to Azure DevOps. Here, I want to navigate to the project, and then repos, and I want to switch to this other repo so we can see that I have all of those changes here. So this is done, now I need to create a new Azure function app in the Azure portal. So join me in the next video where I'm going to do that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [DevOps](../../Topics/DevOps.md) (2)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** visual studio (2), azure portal (1)
> **UI Navigation:** go to (1), navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Provisioning the Function App resource and testing the app](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=0)** - [Instructor] Okay, let's create a function app. Let's click on Create and then search for function, the name of the template is Function App, and let's specify the name, Say, wpmfunctionapp should be unique in the entire [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Cloud. And we need to specify if we want to deploy code or a container image. In this case, it's code of course. And .NET 6, and the region is, in this case, West US 3. Okay, now I need to specify if I want to use [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or [Windows](../../Glossary/Service/Windows.md), in this case, I'm going to use Windows. And in this case, I want to use the Consumption plan, in other words, the serverless flavor of Azure Functions. Okay, so now the storage, I don't want to create a new storage account. In fact, I want to reuse the existing one, and for networking, let's enable the public access. And I want to use Application Insights, and of course, I want to reuse the existing Application Insights resource. For deployment, we don't want to use [GitHub](../../Skills/Software%20Development/GitHub.md) Actions this time and we're ready to click on Review and create. So let's click on Create
>
> **[1:33](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=93)** and wait for this process to finish. Okay, now we can go to the resource. So here we are in this function app, and similar to the app service, I want to create a new deployment slot. So let's create dev and let's click on Add, since I want to deploy the function to this deployment slot. And after a little while, this will finish, so let's close it, let's navigate to the deployment slot, and let's go to Deployment Center. Since I want to connect this deployment slot to Azure Repos. So let's select Azure Repos, and of course, the organization is wisdompetmedicine. The project is the same wpm, however, the repository is different since I want to use wpm-thumbnailcreator and the branch is main. Okay, so let's save those changes and let's display the logs. So this is starting to publish, however, let's modify the configuration because we need the WpmStorage connection string. So it's not a regular connection string, it's a setting,
>
> **[3:05](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=185)** so I need to add a new application setting WpmStorage and the value. I'm going to pause the video since I need to go ahead and grab the connection string. Okay, so let's paste it. And this is not a deployment slot setting, and let's click on OK, and finally Save. Okay, so we published this application, we added this application setting, so we're ready to test this out. Let's execute the web application. So let me duplicate this and let's navigate here to the Overview page and then the resource group. Since I want to navigate to the dev deployment slot of the app service and then the default domain. So this isn't working, let's go back to the portal and verify the configuration. Let's go ahead and verify this. So the reason is that I lost my connection strings when I swapped. So let's pause the video to add both the WPM
>
> **[4:40](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=280)** and WpmStorage connection strings. Okay, great, so now we're ready to go back here to the overview page. And once again, navigate to the default domain so we can see that this is working as expected now, so we can go ahead and navigate to pet management, so we can see that all of those pets, they have a thumbnail, and we can verify this if I copy the image link, and we can see that this comes from the thumbnails container. "Why do we have all of those thumbnails, all of a sudden?" You may ask. Well, the first time the Azure function ran, it detected the files in the photos container and proceeded to generate all the corresponding thumbnails automatically. In fact, if we go back here in the Azure portal, we can verify that. So let's navigate to the resource group and then the Azure Storage account, and then Containers, thumbnails, so you can see that all of them were created at the same time. Fantastic! Now let's go back to the pet management application since we want to assign a photo to Garfield and Roger. So let's edit Garfield, Choose File, and we have Hungry cat, let's save it, and finally, Roger,
>
> **[6:19](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/provisioning-the-function-app-resource-and-testing-the-app?u=76281980&t=379)** Edit, Choose File, and here's the photo for Roger, save it, and let's refresh this. And after a couple of seconds, we have this other thumbnail as well. Remember that Azure Functions run asynchronously.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (8), [Windows](../../Glossary/Service/Windows.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** click on (5), navigate to (5), go to (2)
> **Env Vars:** net (1), wpm (1)
> **Cross-References:** go back to (2)
> **Tools:** github (1), azure portal (1)
> **CLI Commands:** cat (1)
> **Exercise Files:** template (1)
> **Definitions:** in other words (1)


### 6. Taking Advantage of Azure Logic Apps for Your Web App

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking advantage of Azure Logic Apps for your web app](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/taking-advantage-of-azure-logic-apps-for-your-web-app?u=76281980&t=0)** - [Instructor] You are informed that Melissa, the head of the pet department, is very enthusiastic about the application. She has expressed her desire to be notified via email whenever a new pet is added. You don't want to spend a lot of time on this email sending feature. Luckily, you've discovered that implementing this logic quickly and efficiently is possible with [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Logic Apps. So without further delay, let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Speakers:** - [instructor] (1)

#### [Creating the Azure Logic App resource for sending an email](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=0)** - [Instructor] In this video, we're going to create an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Logic app for sending emails whenever a new pet is added to the Wisdom Pet Medicine application. So let's click on create and the template that we're looking for is Logic App. So let's click on create and then let's specify a unique name such as WPM Logic App. And we're going to publish a workflow and my region is West US three and I want to use the consumption plan since it's the serverless option of Logic Apps. Okay, so let's click on review and create. And finally, let's click on create. So this process is quite fast. There's no need for me to pause the video and let's navigate to the resource. And here, as you can see, we're going to see a designer that we can use for configuring this Logic app. In this case, I want to use the blank Logic app template and then I need to specify the trigger that is going to execute this Logic app. In this case, I want to use the [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) trigger, particularly when an item is created. So let's create this trigger. And the first time you do this, you'll have to configure the SQL Server connection that you want to use. So let's name it WPM. And in this case, I want to use SQL Server authentication.
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=96)** And the SQL Server name is this name. Remember that we provisioned an Azure SQL server in the previous chapters. So the database name is WPM. Let's use my username and password and now there's no need for a gateway so let's click on create and let's wait for this process to finish. It looks like the connection was successful so let's select the server and then the database name. And finally, the table that I want to use, in this case is pets. So how often do you want to check for items? In this case, let's use 10 seconds and we're ready to go. In this case, I want to use another step which is the [outlook.com](https://outlook.com) action. Specifically, I want to send an email. So let's search for send an email V2 and this is asking me for my credentials. So let's pause the video. Once I complete that action, it'll prompt me to grant the following permissions and I'm going to click on accept. So we're ready to configure this other step that allows me to send an email. So I'm going to use Melissa.[LinkedIn](../../Skills/Web%20Development/LinkedIn.md).learning@[outlook.com](https://outlook.com)
>
> **[3:07](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/creating-the-azure-logic-app-resource-for-sending-an-email?u=76281980&t=187)** which is Melissa's email account. So let's specify the subject, say new pet. And now here I'm ready to configure the body. So this previous step, it's going to give me some data that I can use in this other action so let's click on see more. So I can use for instance, the name and the weight and the age. So as you can see, this is going to detect what kind of results we're going to have after this action completes. So say that I want name and then age. Let's put the age, years old. And the weight is weight kilograms. And for the name I want to use, say this size and bold and also age and weight to be bold. Awesome. So now we're ready to test this out and we're going to do that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (5), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **UI Navigation:** click on (7), navigate to (1), select the (1)
> **Env Vars:** sql (5), wpm (3)
> **Prerequisites:** configure (3)
> **URLs:** [outlook.com](https://outlook.com) (2)
> **Exercise Files:** template (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Testing the Logic App](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/testing-the-logic-app?u=76281980&t=0)** - [Instructor] Let's save the Logic app and then navigate to the web application. Here, I already have the web application. Remember that we're using the [Java](../../Skills/Software%20Development/Java.md) slot. This has the latest version of the pet management application. So let's click on create and say the name is Shadow, eight years old, 12 kilograms, and say, this is mixed. Okay, so let's save it. So we have Shadow. We can go back to the logic app. And here, let's close this designer so we can see that this completed successfully, so we're ready to open Melissa's inbox. Here we are in Melissa's account, and as you can see, she received this Wisdom Pet Medicine email that says that Shadow was created and we can see that it has the data of this newly created pet. But, what if we wanted to include the breed name? That's precisely what we're going to do in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Java](../../Skills/Software%20Development/Java.md) (1)
> **UI Navigation:** navigate to (1), click on (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Modifying the existing Logic App to add a custom SQL Query](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=0)** - [Instructor] We need to modify this [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Logic App to send the breed name to Melissa. So let's jump right in. Let's click on Edit. And here, I need to add an additional action. Since this when an item is created trigger is only telling me about what happened to the pets table. However, the breed name is inside the breeds table. That's why we need an additional action. So let's click on this command and then add an action. And here, I want to select [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md). Specifically I want to use execute a [SQL](../../Skills/Data%20Science/SQL.md) query, and let's select the SQL Server, the database, and finally the query. So I can type the entire query here. One important thing is that, as you can see, there's no need for me to configure the SQL Server again since those configurations are stored in the same resource group. Okay, so let's specify the query, which I happen to have here in the notepad to expedite this process. So as you can see, I'm obtaining name, age, and weight from the pets table and breed name from the breeds table. And finally, this WHERE expression, I want to use the ID that comes from this previous action
>
> **[1:36](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=96)** which is when an item is created. So this is done and now I can use its results here in this other send an email action. So for instance, I want to add breed and then the value of breed name. So for obtaining the breed name, I need to do an additional step. Since if I select See More, you can see that I have two things, which are Query Results and ResultSets. These options are excessively complex for my simple need of getting the breed name. So those are not enough. I need to grab the breed name. So I want to switch to the code view since I need to modify this expression that is right here. As you can see, this is obtaining the execute a SQL query v2 body. However, I'm going to add an additional expression which is ResultSets. ResultSets and then table one. And then the first item. And finally the breed name. Again, this is because this action is not obtaining the schema of the result set.
>
> **[3:12](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/modifying-the-existing-logic-app-to-add-a-custom-sql-query?u=76281980&t=192)** That's why I need to do this manually. Okay, so this is done. I'm ready to go back to the designer, and here, I can use this expression instead of the entire result set. Okay, so it looks like this is going to work. So we're ready to save this. And let's go back to the application. So let's add a new tab and then let's paste the application URL. Let's navigate to Pet Management and let's add a new pet, say Whiskers. And then three years old, six kilograms. And say again, mixed. Finally, let's click on Save. So we have Whiskers. So let's go back to the Logic App. Let's close this and let's click on Refresh so we can see that this execution completed successfully. So let's go ahead and open Melissa's inbox. So here we are in Melissa's inbox, and you can see that Melissa received this other email with the Whiskers information and now we're sending the breed name as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Sql server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md) (3), [SQL](../../Skills/Data%20Science/SQL.md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** sql (5), where (1), url (1)
> **UI Navigation:** click on (4), select the (1), switch to (1), navigate to (1)
> **Cross-References:** go back to (3)
> **SQL:** where (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-web-application-on-microsoft-azure-22880696/next-steps?u=76281980&t=0)** - [Instructor] Great job. You finished this course. At this point, you should have a solid understanding of some of the essential services you can use to build web applications in [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). I would like to recommend my Extend Web Application Functionality on [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) training course as a continuation of your learning journey. Moreover, if you are already familiar with Azure's fundamental concepts, why not consider becoming certified? The [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) AZ-900 exam is your gateway to obtaining the Azure Fundamental Certification, a highly respected industry recognition. You can also find exam preparation courses here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. I hope you've enjoyed this course as much as I've enjoyed creating it for you. If you do, please let me know. As always, thanks for watching, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** az (1), find (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Rodrigo Díaz Concha](../../Instructors/Artificial%20Intelligence%20(AI)/Rodrigo%20D%C3%ADaz%20Concha.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-web-application-on-microsoft-azure-4405955)

## Skills Covered

- Microsoft Azure
- Web Application Design

## Path Context

### In [Getting Started as an Azure Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20Azure%20Developer.md)
← [Azure Quick Tips for Developers](Azure%20Quick%20Tips%20for%20Developers.md) | **4 of 7** | [Azure Storage Essential Training (2021)](Azure%20Storage%20Essential%20Training%20(2021).md) →

## Appears In

- [Getting Started as an Azure Developer](../../Paths/Cloud%20Computing/Learning%20Paths/Getting%20Started%20as%20an%20Azure%20Developer.md)

## Related Courses

_Courses sharing skills:_

- [Blockchain for Developers- Hyperledger Fabric on Azure](../Cybersecurity/Blockchain%20for%20Developers-%20Hyperledger%20Fabric%20on%20Azure.md) — Microsoft Azure
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Microsoft Azure
- [Azure DevOps for Beginners](Azure%20DevOps%20for%20Beginners.md) — Microsoft Azure
- [Azure Storage Essential Training (2021)](Azure%20Storage%20Essential%20Training%20(2021).md) — Microsoft Azure
- [Azure Quick Tips for Developers](Azure%20Quick%20Tips%20for%20Developers.md) — Microsoft Azure

---

[↑ Back to top](#)