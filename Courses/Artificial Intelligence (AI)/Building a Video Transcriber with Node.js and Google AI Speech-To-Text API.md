---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api
url: "https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api"
duration_minutes: 69
duration: 1h 9m
level: Intermediate
updated: 12/15/2023
learners: 2608329
skills:
  - AI Software Development
  - Artificial Intelligence (AI)
  - Machine Transcription
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/building-a-video-transcriber-with-nodejs-and-google-ai-speech-to-text-api-4485002"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQE-HeK__tSoEA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702508337928?e=2147483647&amp;v=beta&amp;t=-bMuKzkCcu3voQwZlYlmP5R5KtIoBnRO6zo-UoKojOU"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)'
prev_courses:
  - '[Building with Google Gemini Advanced and Ultra](Building%20with%20Google%20Gemini%20Advanced%20and%20Ultra.md)'
next_courses:
  - '[Google Cloud Platform for Machine Learning Essential Training](Google%20Cloud%20Platform%20for%20Machine%20Learning%20Essential%20Training.md)'
path_nav: '[{"path":"Develop Your AI Skills with Google Gemini and Google Cloud Platform","position":5,"total":7,"prev":"Building with Google Gemini Advanced and Ultra","next":"Google Cloud Platform for Machine Learning Essential Training"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/machine-transcription
  - skill/node-js
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20a%20Video%20Transcriber%20with%20Node.js%20and%20Google%20AI%20Speech-To-Text%20API.md)

![Building a Video Transcriber with Node.js and Google AI Speech-To-Text API](https://media.licdn.com/dms/image/v2/D4D0DAQE-HeK__tSoEA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702508337928?e=2147483647&amp;v=beta&amp;t=-bMuKzkCcu3voQwZlYlmP5R5KtIoBnRO6zo-UoKojOU)

# Building a Video Transcriber with Node.js and Google AI Speech-To-Text API

> Formerly complicated tasks like audio transcription for videos have become much simpler thanks to the rise of APIs like Google's Speech-to-Text. But while this exciting new tool can handle transcription, if you want to transcribe a lot of audio, your code still needs to set up connections and authentication and pipe the information back and forth. In this course, instructor Fikayo Adepoju shows yo

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api) | 1h 9m | Intermediate | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [AI-powered video transcription](#ai-powered-video-transcription)
  - [Who is this course for?](#who-is-this-course-for)
  - [What you should know](#what-you-should-know)
- [**1. Setting Up Google AI Speech-to-Text**](#1-setting-up-google-ai-speech-to-text) (5 videos)
  - [Signing up for a Google Cloud account](#signing-up-for-a-google-cloud-account)
  - [Setting up billing](#setting-up-billing)
  - [Creating your GCP project](#creating-your-gcp-project)
  - [Enabling the Speech-to-Text](#enabling-the-speech-to-text)
  - [Getting your access credentials](#getting-your-access-credentials)
- [**2. Building the Video Transcriber Interface**](#2-building-the-video-transcriber-interface) (5 videos)
  - [Cloning the seed project](#cloning-the-seed-project)
  - [Project code walk-through](#project-code-walk-through)
  - [Adding the video upload functionality](#adding-the-video-upload-functionality)
  - [Adding the transcribe video function](#adding-the-transcribe-video-function)
  - [Adding the transcription display function](#adding-the-transcription-display-function)
- [**3. Building the Backend: Connecting to the AI**](#3-building-the-backend-connecting-to-the-ai) (5 videos)
  - [Building out the Express.js API](#building-out-the-expressjs-api)
  - [Configuring Google’s Speech library](#configuring-googles-speech-library)
  - [Adding routes](#adding-routes)
  - [Setting up file upload functionality](#setting-up-file-upload-functionality)
  - [Transcribing with the Google AI Speech-to-Text](#transcribing-with-the-google-ai-speech-to-text)
- [**4. Bringing It All Together**](#4-bringing-it-all-together) (3 videos)
  - [Connecting the front end to the API](#connecting-the-front-end-to-the-api)
  - [Adding a progress indicator](#adding-a-progress-indicator)
  - [Editing transcriptions](#editing-transcriptions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [AI-powered video transcription](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=0)** - [Fikayo] [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md)-powered features are fast becoming a must-have in today's applications. That is why, in this course, we are going to be demonstrating how developers can implement AI features in their applications by building a video transcribing tool from scratch. This tool will make use of [Google](../../Glossary/Service/Google.md) AI's Speech-To-Text API to extract transcription text from videos using an AI model. I am inviting you to join me on this course as we build an AI-powered video transcribing tool using [Node.js](../../Skills/Web%20Development/Node.js.md) and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md)'s Speech-to-Text API. Hi, I am Fikayo Adepoju and I have been building applications for over 10 years now. Sounds exciting? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Google](../../Glossary/Service/Google.md) (1), [Node.js](../../Skills/Web%20Development/Node.js.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **CLI Commands:** make (1), node (1)
> **Env Vars:** api (2)
> **File Paths:** node.js (1)
> **Speakers:** - [fikayo] (1)

#### [Who is this course for?](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=0)** - [Instructor] So who should take this course? If you have found your way to this course, this is the time to answer a couple of questions that will determine if this is the right course for you. Ready? Let's go. Are you a developer, development team, project manager, or engineering manager trying to learn how to add AI features to your application? Are you interested in [Google](../../Glossary/Service/Google.md)'s AI tools and the capabilities of its API and want to learn how it can be integrated into applications? Or are you just looking for a project-based course that teaches the implementation of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) in software applications? If your answer to any of these questions is yes, then you are in the right place. This course will teach you everything you need to know about adding AI features to your software, using the Google Speech-to-Text API. You'll learn by doing, as this course takes a hands-on approach as we get to build an entire application that transcribes video content using AI from scratch. Sounds good? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to take this course, there are a couple of skills you need to have under your belt. These skills are required for you to successfully follow along with this course. First is knowing the three front-end technologies. You are required to have at least a basic understanding of how to code with [HTML](../../Skills/Web%20Development/HTML.md), CSS, and [JavaScript](../../Skills/Software%20Development/JavaScript.md). You also need to have spent some time working in an IDE. That's an integrated development environment. You can use any IDE you want, but for this course, we'll be making use of the popular Visual Studio Code. Next, you need to have some familiarity with [Version Control](../../Skills/Web%20Development/Version%20Control.md) systems, like [Git](../../Skills/Software%20Development/Git.md), and using a remote repository, like [GitHub](../../Skills/Software%20Development/GitHub.md). To build a backend application, we'll be making use of [Node.js](../../Skills/Web%20Development/Node.js.md). However, you can still follow along and replicate the program in any backend language of your choice. If you need help learning any of these technologies mentioned, you can check out the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library to get a ton of resources on these topics. Now that you know the requirements for taking this course, let's get started building our video transcribing application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** ide (2), html (1), css (1)
> **Prerequisites:** you need to have (2), required to (1)
> **CLI Commands:** git (1), node (1)
> **Tools:** visual studio (1), github (1)
> **File Paths:** node.js (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up Google AI Speech-to-Text

[↑ Back to Table of Contents](#table-of-contents)

#### [Signing up for a Google Cloud account](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=0)** - [Instructor] In this video, we'll begin our project by first creating a [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) account. This will be required to make use of [Google](../../Glossary/Service/Google.md)'s speech to text AI models as the service is one of the numerous services offered by the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). I have already set up an account, so this video will be more of a walkthrough for those who haven't set up an account or people that don't know how to set one up. If you already have an account, feel free to skip this video and head over to the next one. To set up a new Google Cloud account, head over to the official site at cloud.[google.com](https://google.com). Here you can set up a free account and get started using Google's [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). To create an account, click the get started for free button on the homepage. This will take you to Google's login page. If you already have a Gmail account, use this to sign up. If you don't have a Gmail account set up, you can use the create account button at the base of the login box to create one. Once signed up, you'll then be able to access the Google Cloud console. This is the console you will see once you're logged into your account. Here you can access all of Google Cloud services by creating a project and enabling necessary Google Cloud APIs. You can also set up your billing, configure Google Cloud's identity management system, and use other Google Cloud services like Storage, [SQL](../../Skills/Data%20Science/SQL.md), [Kubernetes](../../Skills/DevOps/Kubernetes.md), and many more.
>
> **[1:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=95)** In the following videos in this chapter, we'll be setting up our Google Cloud account to use Google's speech to text API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (8), [Google](../../Glossary/Service/Google.md) (5), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Prerequisites:** set up (6), required to (1), configure (1)
> **Env Vars:** sql (1), api (1)
> **CLI Commands:** make (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)

#### [Setting up billing](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=0)** - [Instructor] In this video, we'll be diving into the essential step of setting up a billing account on the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). Establishing this correctly ensures that you efficiently utilize GCPs services without interruption. If you have already set this up, you can skip this video and move on to the next one. To begin setting up your billing account from your GCP dashboard, click on the navigation menu. This is typically represented by three horizontal lines. From the flyout menu, select Billing. If it's your first time here, you might not see any billing accounts. As you can see, I already have a billing account set up. If it's your first time here, you might not see any billing accounts. To create one, you'll see a Create Account button. This will take you to a billing form where you can fill in your account name and also associate the billing account with an organization if you're part of one. This can help you better associate and manage expenses if you have multiple projects. After filling the billing form, you can then add your payment information. You can typically use credit cards, bank accounts, or other payment methods available in your country. Before finalizing your billing account, take a moment to review the terms of service and any related policies. Ensure you understand the billing cycle, costs associated with services, and any potential fees. Once you're satisfied with the details, you can activate your billing account as I have done here. You can now connect this billing account
>
> **[1:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=93)** to your [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** gcp (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating your GCP project](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=0)** - [Instructor] In this video, we'll be creating our GCP project, which is going to contain our setup for access to the [Google](../../Glossary/Service/Google.md) AI speech to text API. Projects are the foundational building blocks in GCP. They help you organize, manage, and track your cloud-based endeavors, be it a simple app or a complex infrastructure. Starting on your GCP dashboard at the top left corner, here, you'll see a dropdown indicating your current project. Let's click on this. A menu appears, displaying all your existing projects. To create a new project, at the top of this menu, you'll find a new project button. Let's click on that. In the form that appears, you need to type in a name for your project, so let's go ahead and do that. We're just going to say, my video transcribing project.
>
> **[1:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=60)** You can also select an organization on the way to put this project. But for this project, we're just going to be skipping this step. So click create, and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) will automatically create your project. As you can see, our project is currently being created, the task is currently in progress. Once the creation of your project is complete, click on the select project link on the notification. As you can see, the dashboard is now switched to our project. That's the one we just created. You can also always use this dropdown to select any project of choice. Let's cancel that. Now that our project is selected, the dashboard displays the project information and the current status of the project. This project should already be connected to a billing account. If not, you can navigate to the billing page by using the link on the side menu. As you can see, this project is currently not linked to any billing account, so let's do that. To link this project to a billing account, let's click the link, a billing account button. Now, let's click set account to activate this billing account for our selected project. And now, our project has been successfully set up with a billing account. You can also set up budget alerts to track your spending on this project. With our project all set up, we can now proceed
>
> **[2:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=153)** to setting up Google's speech to text API for this project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **UI Navigation:** click on (3), dropdown (2), navigate to (1)
> **Env Vars:** gcp (3), api (2)
> **Prerequisites:** set up (3), setup (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Enabling the Speech-to-Text](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=0)** - [Instructor] In this video, we'll be enabling [Google](../../Glossary/Service/Google.md)'s Speech-to-Text API for our GCP project. We'll be configuring access to the API and fetching the credentials to use in our code to make authenticated requests to the API. Let's begin. First, ensure that your project is selected on the project dropdown menu at the top of the page. Next, click the side menu and select APIs & Services. Under this menu, click on Library. On the Library page, you'll see a list of services and APIs and [products](../../Skills/Software%20Development/Microsoft%20Products.md) offered by [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md). To access the Speech-to-Text API, let's use the search box and type in speech to text, and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=52)** From the search results that appear, let's click on Cloud Speech-to-Text API. Here on the API page, we're going to be enabling this API for this project. So click on the big blue Enable button. Google Cloud then goes to work, enabling this API for our project. Once the API is enabled, you'll then be transported to the API page where you can configure your credentials and monitor your API usage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Google](../../Glossary/Service/Google.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** api (11), gcp (1)
> **UI Navigation:** click on (3), dropdown (1)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Getting your access credentials](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=0)** - [Instructor] Now that we have enabled the speech to text API for our project, let's create the credentials we'll use to access it. To do that, let's navigate to our credentials page by going to APIs and services on the side menu and click on credentials. On the credentials page, let's click the create credentials button to begin creating our credentials. This brings up a list of credentials that we can create. From this list, we're going to be selecting service account. On the service account creation page, we have been prompted to enter a bunch of details for our service account, and the first is the service account name. So here I'm just going to enter, let's say something like my project service account. That should be good enough. We'll also be accepting the auto generated service account and we can ignore the service description. So let's go ahead and click create and continue. In the access grant section, click the role dropdown and select owner. Going to be selecting owner as our role. This will give us full access to all permissions on this API. In production environment, you want to be more specific about the permissions you're granting on the usage of this API by your application. This can be configured in your [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Identity Management section. Configuring that is beyond the scope of this course. However, you can check out GCP courses on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library to learn how you can create safe and secure configurations
>
> **[1:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=94)** for your GCP account. But for now, let's proceed by clicking the continue button.
>
> **[1:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=104)** We are going to be ignoring the last section on granting access to users and finish up by clicking the done button. Now that we have created our service account, we get routed back to the credentials page. To generate our actual credentials, let's scroll down to the service account section and click the service account we just created. On the page that appears, click on the keys tab. Here you'll see a add key dropdown. Let's click on it and select create new key. On the key creation dialogue, select [JSON](../../Skills/Web%20Development/JSON.md) as the key type and click create. This is the key we'll be using to get authenticated access to the [Google](../../Glossary/Service/Google.md) Speech to Text API. Let's select a location on our system. Click save and this key will be automatically downloaded onto our machine. Do note that this is a sensitive key and must be stored and accessed in a secure manner. As this is a demo project, we'll simply save it on our computer and access it directly in code. But in a production environment, you want to use something more secure, like an environment variable or other recommended secure ways that Google has for securing its API Keys.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** api (5), gcp (2), json (1)
> **UI Navigation:** click on (3), dropdown (2), navigate to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Building the Video Transcriber Interface

[↑ Back to Table of Contents](#table-of-contents)

#### [Cloning the seed project](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=0)** - [Instructor] To begin building out our video transcribing tool, we will clone the seed project for this course. This project helps us get a lot of the front-end boilerplates out of the way, and defines a simple structure for our project. We can grab a link to our seed project by coming to the [GitHub](../../Skills/Software%20Development/GitHub.md) repo, going to Code and click in SSH, then we can click the icon here to get the link. In order for you to follow along with this course, you can grab the link to this repo in the course notes, and it's also displayed on the screen. Once you've grabbed the link, let's go to our terminal and clone the project. To download the seed project onto our machine, you first ensure that [Git](../../Skills/Software%20Development/Git.md) is installed on your system. Git is a simple versioning tool for managing different versions of your project, and also collaborating through remote repositories. You can confirm that Git is installed by running the command git -v in your terminal. If you don't have Git installed, you can head over to their website and install the software for your specific operating system. With Git installed on your system, run the following command in your terminal to clone the seed project. Say git clone, and paste the repo. Then we hit Enter to run the command. GitHub goes to work by cloning our project into the location we're currently at in our machine. Make sure you run this command at the location
>
> **[1:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=92)** on your computer where you want the project to live. Once the cloning process is done, you will see a folder in your working directory. As you can see, we now have the seed project on our machine. In the next video, we'll be walking through the project files and the base code in this folder to get familiar with what we just cloned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Git](../../Skills/Software%20Development/Git.md) (7), [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **CLI Commands:** git (7), ssh (1), make (1)
> **Tools:** terminal (3), github (2)
> **Exercise Files:** github repo (1), download the (1)
> **Env Vars:** ssh (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Project code walk-through](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=0)** - [Instructor] Now that we have our seed project cloned onto our system, let's open it up to explore what we have. I'll be opening up the project in Visual Studio Code. However, feel free to open it up in any code editor of your choice. I actually coded a good part of this project using the nano editor. Here in Visual Studio Code, we can see our folder structure on the left. Currently, the project only contains one folder named frontend. This is where all our base code currently lives. There is also a gitignore file, which as expected, ignores all the files and folders we do not wish to upload to our remote repository. If you open this up, you'll see some files that have been proactively ignored. These are files and folders we'll be creating later on in the project. Now back to the frontend folder. If you open this up, you'll see it contains just one file, a route index.[HTML](../../Skills/Web%20Development/HTML.md) file. This will contain the entire frontend of our application as I have made sure to keep things simple. Before we look at the code within this file, let's go on our frontend app to see what we're working with. We'll be using the node JSS model http server to achieve this. This model spins up an add-on server and serves our html files with it. At the root of the project in your terminal, run the following command, npx http-server ./frontend.
>
> **[1:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=94)** This will spin up a server listing on port 8080 by default, and from there, we can access our application. If port 8080 is already in use on your system, the http server model provides options for you to specify a different port. Now let's go to our browser and access the frontend application. This will be at [http://localhost](http://localhost), port 8080.
>
> **[2:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=125)** And as you can see, our index.html homepage loads up. Let's go through all the page elements one by one. First, we have the video preview section. Here you can see and play back the selected video before transcribing it. Just below that, we have the file upload widget. We'll be adding logic that loads a video in the preview once it is selected using this form control. Next is the button the user will click to send the video to the backend application to process the transcription. Finally, all alone on the right-hand side, we have the container where the result of the transcription will be displayed. I'm sure you can already guess the simple workflow of our video transcribing application, but let me just reiterate it one more time. A user selects the video they want to transcribe using the file upload tool. The video displays in the preview and can be played back. Once the user confirms that this is the video they want to transcribe, they then click the Transcribe button, which sends a request to the backend along with the video selected. Once the transcription process is done, the result that is the transcribed text is then displayed in the container on the right-hand side. Pretty straightforward, right? Now, let's take a look at the code behind all this. Do note that these are currently dumb widgets as no logic has been added to them yet. The workflow I just defined is what we are going to be writing code for in the following videos. Here, in Visual Studio Code, I have opened the index.html file.
>
> **[3:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=219)** Let's take it from the top. First let's pull this aside, so that we can have more screen real estate. The file starts with some boilerplate html code. First, we have the doc type, lang and head definitions. The page has been given a title of Video Transcribing Tool, which you can change to any other title you prefer. Next, we import the bootstrap CSS library for some standard styling. And below that, we have a small CSS script to define an overflow of scroll for our transcription display section. Now let's scroll down to the body. In the body, we can see two container scripts that define the left and the right sides of our application. In the left section, we have a video tag, an input tag, and also a button. This is the button that will be clicked to trigger the transcription operation. They have all been assigned IDs, which we'll be making use of later on to add logic with [JavaScript](../../Skills/Software%20Development/JavaScript.md). On the right-hand side container div, we also have a child div. This div will order transcribed text that is returned from the backend server, which we'll also be developing later on in this course. Below the interface code, we import the Axios JavaScript library. This will be used to make API calls to our backend server. Next is an empty script tag where all our custom application logic
>
> **[5:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=311)** is going to be written, and that completes the tour of our seed project. In the next video, we'll start adding the proposed functionality for this application, starting with the file upload and preview. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [HTML](../../Skills/Web%20Development/HTML.md) (5), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (2)
> **Env Vars:** css (2), jss (1), api (1)
> **Tools:** visual studio (3), terminal (1)
> **File Paths:** index.html (3)
> **CLI Commands:** node (1), npx (1), make (1)
> **Ports:** port 8080 (3)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [http://localhost](http://localhost) (1)

#### [Adding the video upload functionality](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=0)** - [Instructor] In this video, we're going to be scripting our video selection and preview functionality. This will ensure that once the user selects a video to be transcribed, that video is loaded into the preview and can be played back. Let's begin by targeting all the elements in our page, using their IDs, and saving the undos to this element into variables. Scroll down to the custom [JavaScript](../../Skills/Software%20Development/JavaScript.md) section and begin. We start with our upload widget by saying const video upload equals document dot get element by ID and set it
>
> **[0:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=40)** to the value of the ID of our video upload widget, which is also video upload. Now let's just repeat this for our video preview transcribe button and where our transcription text is going to be displayed.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=64)** With all this in place, we now have handles to all our page elements. Next, let us create another variable, and this time we'll be creating a variable that's going to hold the selected file. For now we're not going to be initializing it to any default, so I'm just going to put the semicolon. Now that we have all these handles, let's write our video selection function. First, let's add an event handler to the file component change event. This piece of code enables us to trigger an action when a file is selected using the video upload widget. Next, inside our function, let's check if a file has been selected. If a file is selected, that is, if this code is true, let's get a handle on the file that was selected. This will hold a pointer to the location of the file. Next, let's generate an object URL to the location of the file so that we can load the video in our preview screen. With this object URL generated, we can then load it into our preview screen. To do this, we need to set the source attribute to our video element to the URL we just created. Awesome. Now, let's test this out. Let's save the file and back here in our browser, let us refresh the page to make sure that all the changes have kicked in. Once that is done, let's select a video and see what happens.
>
> **[2:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=157)** As you can see, once we selected the video, it is automatically loaded into the preview, and here in the preview we can play the video to ensure that it's the exact video we want to transcribe. I can already see the preview image, so I know that it is the right video. (muffled audio plays) And that's good enough for me. In the next video, we'll be adding the function that sends our video to our backend for transcription. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **Env Vars:** url (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Adding the transcribe video function](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=0)** - In this video, we're going to be adding the function that sends our video to our backend for transcription. Our backend has not been built yet, but once we have that, we'll come and update this function to point to it. But for now, let's write the function to continue building our frontend. To begin, let's flesh out the function definition for a function called transcribe video. This is going to be an async function, so we add our async keyword and then we'll flesh out a function. (keyboard typing) This function will be triggered when our transcribe button, that is this button here, it is going to be triggered when this button is clicked. Let's scroll back down. Now let's hook up a click and latter to transcribe button, and this event handler will call our transcribe video function. Perfect, now let's get back to the transcribe video function. (mouse clicking) First, let's create a new form data object for the request we'll be sending. This will enable us attach files to our request, so let's go ahead and attach our file. (keyboard typing) We are going to give this parameter the name file, and that's the name we're going to be using to receive it at the backend. We'll set this to our selected file variable. (keyboard typing) This is the variable that we set to equal this value. That's the value of the file that was selected. Finally, we'll send the request to our API with the form data as our payload.
>
> **[1:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=94)** We'll be doing this inside a try catch block. Scroll down, try, (keyboard typing) catch, (keyboard typing) and the try section we call our API. (mouse clicking) (keyboard typing) Now, this is a bunch of code I just dumped at you. For clarity, let me go through it step by step. Here we've made our request, and we're using a placeholder for our backend URL because we have not created this backend project yet. We have also defined errors to set the appropriate content type, since we are going to be sending a file in this request. Now let's check if the request is successful, and if so, we'll be calling another function to handle it. (keyboard typing)
>
> **[2:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=149)** As you can see, we are calling the function display transcription to undo the transcription data. We'll be defining this function in the following video, but for now, just to wrap things up, let's handle the error scenario. In the catch block, let's use our console.log function to print out the error. (keyboard typing) Along with that, let's display an alert to the user, indicating that the transcription operation failed.

> [!info]- Semantic Content
>
> **Non-Speech:** (keyboard typing) (8), (mouse clicking) (2)
> **Env Vars:** api (2), url (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Adding the transcription display function](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=0)** - [Instructor] In a previous video, we called the displayTranscription function to undo the successful response of our transcription operation. In this video, we're going to be writing out that function. This is going to be a very small function. However, it is good for the principle of suppression of concerns to have this action in a different function. Let's scroll down, and just below the button click event handler, let us flesh out our displayTranscription function. (keyboard keys clicking) This function takes in the response as its only argument. Inside the function, set the innerHTML of the transcribedText element to the text property from the response.data. Scroll down. (keyboard keys clicking) The text property is where our transcription result is stored. This will ensure that the transcription is loaded into the container on the right hand side, displaying the transcription results to the user. If you're bit worried that we haven't been testing anything out yet, don't fret. In later videos, we'll be doing that once we have our frontend hooked up to the backend application we'll be building next.

> [!info]- Semantic Content
>
> **Code Identifiers:** displaytranscription (2), innerhtml (1), transcribedtext (1)
> **UI Navigation:** scroll down (2)
> **Non-Speech:** (keyboard keys clicking) (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 3. Building the Backend: Connecting to the AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Building out the Express.js API](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=0)** - In this section, we're going to be building out the backend API that will process our transcription. This API will simply serve as a middleman between our client and the API exposed by the AI model that will be doing the transcription operation. In this video, we'll begin development by kickstarting the [Node.js](../../Skills/Web%20Development/Node.js.md) application. In the project folder, just beside our frontend folder, create a new folder for the API with the name backend. Now let's move into the folder, and let's set up the project. First, run the command [npm](../../Skills/Web%20Development/npm.md) init to initialize the folder as a Node.js project. We'll be adding the -y flag in order to skip the interactive project initialization prompts and accept the defaults. Now that we have our package.[JSON](../../Skills/Web%20Development/JSON.md) file scaffolded, we can start installing our packages. To begin, we'll be installing just two packages. And this will be the express package and the cors package. So let's go ahead and install this by running the command npm install express cors
>
> **[1:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=70)** and hit enter. Once the installation is done, we can now start writing our server code. Let's begin by creating a server.js file in the root of our backend project folder. The new file, server.js. In this file, we start by bringing in the packages we just installed, bringing in the express package, and then we'll bring in the cors package.
>
> **[1:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=114)** In this project, we'll also need to pass request parameters. And to do that, we're going to be making use of the body-parser library. So let's install that and also bring it in. Let's go to our terminal, clear. And in our terminal, I'm going to run npm install body-parser.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=139)** And this will bring in our body-parser library. Next, let's create our express app and assign it to a variable. We're going to be assigning it to a variable called app. Now let's configure this app to use the cors package. So app.use(cors()); This will help us take care of any cors errors we might be having. But in a production scenario, you want to have standard cors settings. Finally, to wrap up our boilerplate express app, let's declare a port and make our app listen on that port.
>
> **[3:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=188)** If there's no port set on the environment, we default this to 1330. Now let's make our app listen on that port.
>
> **[3:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=203)** Once our app is listening, let's write a message to our console. And that wraps up our boilerplate Node.js application. Now we can run the app in our console to see if everything works fine. Here in the console, run the command node server.js to boot up the application. Now our app running message displays, and we can start adding all the cool functionality that we have planned to this Node.js application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (4), [npm](../../Skills/Web%20Development/npm.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** node (5), npm (3), make (2)
> **File Paths:** node.js (4), server.js (3), package.json (1)
> **Prerequisites:** install (4), set up (1), initialization (1), configure (1)
> **Env Vars:** api (4)
> **Tools:** terminal (2)
> **Exercise Files:** boilerplate (2)
> **UI Navigation:** go to (1)

#### [Configuring Google’s Speech library](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=0)** - [Instructor] In this video, we'll be setting up the [Google](../../Glossary/Service/Google.md) Speech-to-Text client library in our [Node.js](../../Skills/Web%20Development/Node.js.md) application. This will allow us, use up our libraries provided by Google for Node.js to call the [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) API. We'll be setting up this library using our service account credentials. That is the one we downloaded from a Google Cloud account. The first step is to install the client library for Node.js. This library is also available for popular languages like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), [Java](../../Skills/Software%20Development/Java.md), and Go. To install the package, we type the command [npm](../../Skills/Web%20Development/npm.md) install. First, let's make sure that we are in our backend folder, okay? So we type npm install @google-cloud/speech.
>
> **[0:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=53)** This will get all the Google Cloud Speech library. To run the command, let's hit Enter. Once the package is installed, we can then proceed to set it up. Before we head over to VS Code, let's save our service account credentials, that was the one downloaded from the previous video, to the root of the backend project. I'm just going to go and grab that, my Desktop, copy it to my backend folder, and just paste it here. That's my video transcribing project service account credentials. That's a [JSON](../../Skills/Web%20Development/JSON.md) file. If you prefer not to move files around or you want to access a service account credential file from a secure location, you can go to your terminal and set a Google environment variable. This environment variable will be recognized via code and inherited via code any time you use the client library. This can be set by running the command export. The environment variable is GOOGLE_APPLICATION _CREDENTIALS.
>
> **[2:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=126)** You would then set this to the path of your service account credential file. That's a JSON file. Like I said, with this, the client library will automatically recognize this environment variable and make use of it for authentication. For this project, we're just going to be accessing the file directly in our code. So let's head back to Visual Studio Code. Here in Visual Studio Code, to begin configuring our library, we first import it into our server.js file. So let's go up, say const speech equals require @google-cloud/speech.
>
> **[2:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=177)** Next, we're going to come down here just under our cors definition and instantiate a new instance, a new client instance of our speech library. So client equals new speech.SpeechClient,
>
> **[3:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=199)** open the parenthesis, and then inside we're going to set an object, and inside the object we're going to define a property called keyFilename, and this is going to be set to the path of our file. Our file is currently in here, so I could just come here and say the name so I can give me access to copy the file. I'll go back to our code. Just paste it in here. Remember to add the .json extension. Save that. As I mentioned earlier, let's put this aside, if you have already defined the environment variable that we looked at earlier, then you don't need to specify this. We're mainly doing this for convenience so that we don't clash it anywhere the duplicate environment variable that might have been set on the system. So let's save the file. And with this in place, we can now call the Google Cloud Speech-to-Text API and use it to transcribe our files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (5), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (4), [Node.js](../../Skills/Web%20Development/Node.js.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (3), [npm](../../Skills/Web%20Development/npm.md) (2)
> **CLI Commands:** node (3), npm (2), make (2), python (1)
> **Env Vars:** api (2), json (2), google_application (1)
> **File Paths:** node.js (3), server.js (1)
> **Tools:** visual studio (2), vs code (1), terminal (1)
> **Prerequisites:** install (4)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** go to (1), open the (1)

#### [Adding routes](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=0)** - [Instructor] In this video, we'll be adding two routes to our application. The first route will be a base route, and we'll simply spit out a conventional welcome message. The second route will be the endpoint that actually performs the transcription and will be called from the front end, Web Client. So let's begin. The first route will be a Get Request endpoint. So I just come here, just under our client definition, say app.get, that'll be for our base route. I'll set the handler, say Request Response. And this route will simply return the message, Welcome, so res.send, so Welcome to A.I Transcription.API.
>
> **[0:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=57)** So, just a simple standard based route. Next, let's move on to our next route. Unlike the first one, the following route will be a post request. Let's say app.post, the endpoint will be called, transcribe, but you can give this any other name you feel will be more appropriate for your application. So I say Transcribe, do the handler, which is req, res, and for now we're going to be leaving this empty. The functionalities will be added in the coming video, but now we have two routes that we're going to be working with for this application.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Setting up file upload functionality](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=0)** - [Instructor] In order to transcribe video files, we need to be able to receive and store video files. That is what we'll be setting up in this video. To begin, first, we need to install a [Node.js](../../Skills/Web%20Development/Node.js.md) package that will help us achieve this. In the terminal, we're going to be installing the multer package. And to do that, simply run the command, [npm](../../Skills/Web%20Development/npm.md) install multer. And let's hit Enter to run the command. Once the package is installed, time to add over to our project in Visual Studio Code to add our upload functionality. Here in Visual Studio Code, first we bring in our multer package by using require. So const, multer, equals require.
>
> **[0:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=55)** Aside to the installed multer package, we'll also be needing the part and FS models from the node.js call library to correctly define our upload part, and access the file system functions respectively. So let's bring these two in. With all the required dependencies brought in, we can now start writing our upload function. The first step is to configure where we will be storing our uploaded video files, and generating file names. For this, we're going to be creating a multer storage configuration. So let's scroll down, and just below our client, let's create our multer storage configuration.
>
> **[1:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=105)** In the configuration object, first, let's set our upload directory to a folder with the name of "Uploads". We're going to be creating this folder later on.
>
> **[2:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=120)** With our upload parts defined, let's now automatically generate random names for our uploaded files using timestamps. And we're going to be doing that by setting the file name property.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=139)** With this definition, we'll now generate a unique file name for every uploaded file using the current timestamp. Lastly, we create an upload object by passing the storage configuration to the multer library. We pulled down, say const upload.
>
> **[2:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=165)** Now that we have the upload object set up and configured, we'll be including it as a middleware on our transcribe endpoint. This will ensure that any file uploaded will be automatically processed.
>
> **[3:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=183)** We'll be setting the parameter for the uploaded file to have the name of "file", just as we have specified at the front end. And while we are on that, I'm going to be adding the keyword "async" to this handler, as we'll be performing some asynchronous operations inside this transcribe route handler. Now with this setup, when a video file is uploaded, we can access the file part from the request object. One last thing. We did specify that all files will be uploaded to an uploads directory. So let's go ahead and create that directory at the root of our backend project. So we go to backend, click New Folder, and say uploads. Perfect. And with that in place, we can start working on our transcription functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (2), [npm](../../Skills/Web%20Development/npm.md) (1)
> **Prerequisites:** install (2), configure (1), set up (1), setup (1)
> **CLI Commands:** node (2), npm (1)
> **Tools:** visual studio (2), terminal (1)
> **File Paths:** node.js (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Transcribing with the Google AI Speech-to-Text](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=0)** - [Instructor] Now that we have set up our [Google](../../Glossary/Service/Google.md) speech library and our file uploads feature, we will now write the code to transcribe our videos to text. One important thing you need to know about the Google speech to text API is that at the moment, it does not have the ability to process video files. This API can currently only transcribe audio files. So we need a way to extract audio out of the video files we will upload. We will then send the audio file to the Google speech to text API. This might sound like a lot of work, but don't worry, we will have it sorted out in no time. And there are packages on [npm](../../Skills/Web%20Development/npm.md) to make this all happen. But first we need a way to extract audio files from videos, and to do that we will be using the FFmpeg library. FFmpeg is a free and open source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams. To add this feature to our [Node.js](../../Skills/Web%20Development/Node.js.md) project, we're going to be needing two packages. First is the ffmpeg-static library, which is a static FFmpeg binary that works for [Windows](../../Glossary/Service/Windows.md), macOS, and [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). This library gives us all the necessary FFmpeg binaries required and returns the part of a statically linked FFmpeg binary on the local file system. We will also be needing the fluent-ffmpeg library. This allows us to use the FFmpeg library
>
> **[1:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=95)** in our Node.js project using a fluent and easy to use API. Trust me, working with FFmpeg is made a whole lot better in Node.js with this library. So let's (indistinct) to our terminal and install these two libraries. To install the FFmpeg library and the fluent-ffmpeg library, we're run the command npm install ffmpeg-static fluent-ffmpeg.
>
> **[2:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=130)** For older systems, you might need to specify a specific version of ffmpeg-static like 4.4.1. Remember to check your OS version to find the library that is compatible with your operating system. However, if you're running the latest version of your operating system or at least two versions back, you should be good just running ffmpeg-static. But if you get any errors installing this library, you might want to check out the version that works for your operating system. So now that we have our Node.js FFmpeg libraries installed, let's start writing our video transcribing feature. First, let's bring in our libraries. For the ffmpeg-static library. We say const ffmpegStatic, or ffmpegPath, rather, as this returns the path. So require ffmpeg-static.
>
> **[3:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=197)** Next we bring in our fluent-ffmpeg library, saying const ffmpeg equals require fluent-ffmpeg.
>
> **[3:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=212)** Awesome. Next we set the FFmpeg path on the fluent library using the path returned by the ffmpeg-static library. This allows the fluent-ffmpeg library to access the correct installation part of the FFmpeg binary. So let's just scroll down. Just under our multer configuration we say ffmpeg.setFfmpegPath
>
> **[4:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=246)** open parenthesis and we copy, we scroll up and copy this, our FFmpeg path. Scroll down and paste it here. Perfect. With that in place, we can then proceed with our video transcription instructions. So let's go down to our transcribe endpoint. I'm going to be closing this panel so that we can have more screen real estate. And here we'll first check if a file has been uploaded in order to return an error message if not.
>
> **[4:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=290)** With that in place, the next thing we'll do is to get the uploaded video path and define a path for the audio file that will be extracted from it.
>
> **[5:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=307)** With this defined, let's now use the fluent-ffmpeg package to extract audio from the video file into an audio file. First we call ffmpeg and set the video path. Then we'll set the format to wav. Let's bring this down. Next we'll set the audio codec. Next we'll be setting the audio frequency. Set the audio channel to one. We'll then listen on the end event that signifies that the process is done and then we can process a callback. We'll also check for errors by listening on the error event.
>
> **[6:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=373)** Scroll down. And here we'll just write a simple console.error message. Just use error. Say error extracting audio and we just simply print our error. And finally we'll call the save method and save our audio to the audio file path.
>
> **[6:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=405)** That was a lot. Let's also make sure that we are sending a message back to the server when an error occurs. We say res.status 500 and send an error.
>
> **[7:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=424)** And here we just say error processing video. Perfect. Now we have written all the code necessary to extract our audio and save it to our audio path. As I specified earlier, the end event signifies the end of this process. And inside this callback, we're going to be sending our audio file to Google speech to text API for transcription. So let's write the code to do that. First we use the fs model to convert our audio file to bytes as this is the format that will be sent to the speech API. So we'll say const. Move this down a little bit. Say const audioBytes equal fs.readFileSync.
>
> **[8:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=482)** We're passing our audio path. And set it to a base 64 string.
>
> **[8:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=497)** Next we'll be setting up our transcription request by defining the parameters for the request. We say const request. Open the request configuration object. I'll first set the audio property which is set on object and it's going to take one property, which is content, and that content will be set to our audioBytes. Next we're going to be defining a config property, which is also set to an object. And inside here we set the encoding property to LINEAR16,
>
> **[9:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=545)** the sampleRateHertz property to 16000,
>
> **[9:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=555)** which is our audio frequency, the audio frequency that we defined in the FFmpeg conversion. Then our languageCode. LanguageCode will be set to English US.
>
> **[9:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=575)** And with all that defined, we have our transcription request configuration in place. We will now be sending our transcription request and using the try catch block in order to make sure that we are catching any errors from the operation. So let's scroll down once again, and below the request object, we say try catch errors.
>
> **[10:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=607)** And let's just deal with the errors first. So here we say console.error. I'll just set that to API error. And that should just simply print out the error. We will also send an error message to the client and an error status, say res.status 500 .send,
>
> **[10:42](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=642)** error transcribing video.
>
> **[10:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=654)** And this will also print the message from the error. Save that. Now in our try block, let's write the actual transcription code. Scroll down once again so we have this in view. And here we're going to call the transcription API by saying await client.recognize request.
>
> **[11:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=689)** And we're going to save the response here in this response variable. The response comes as an array and inside it we can pick the response object.
>
> **[11:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=711)** Now that we have our response, let's get our transcription down to the client. For that we'll say const transcription equals response.results.map.
>
> **[12:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=730)** Open the map function. Say result. And here we'll say result.alternatives. Pick the first result and grab the transcript. And lastly, we call the join function and join at every new line character. Yeah, I think we're missing the return statement here. Return, yeah. Good. Now that we have this in place, let's do some cleanup. Let's delete the files that were uploaded and the audio that was extracted. To do that, I will say fs.unlinkSync. I'll give IT the videoFilePath. We'll also be deleting the audio file.
>
> **[13:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=802)** And finally, we can then return our transcription, calling res.send. Inside res.send, simply just return our transcription. That's the one we got up here. So with all this in place, we can now connect our front end to our backend. But first, let's run to our backend once again to make sure that we are not getting any errors. So here in the terminal, we're going to clear the terminal and we run node server.
>
> **[14:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=843)** Our server runs fine, so we're good. Now we can start integrating our front end with this backend.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [Node.js](../../Skills/Web%20Development/Node.js.md) (4), [npm](../../Skills/Web%20Development/npm.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **CLI Commands:** node (5), make (4), npm (2), find (1)
> **Code Identifiers:** audiobytes (2), macos (1), ffmpegstatic (1), ffmpegpath (1), setffmpegpath (1)
> **Env Vars:** api (8), npm (1), linear16 (1)
> **UI Navigation:** scroll down (5), open the (2), scroll up (1)
> **File Paths:** node.js (4)
> **Prerequisites:** install (3), set up (1)
> **Tools:** terminal (3)


### 4. Bringing It All Together

[↑ Back to Table of Contents](#table-of-contents)

#### [Connecting the front end to the API](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=0)** - [Instructor] Now that we're done writing our backend, time to integrate it with our client application and test things out. We're going to start by pointing our frontend app to the backend application. So, let's change the placeholder backend URL text in the call to our API to the address of the backend, and point to the transcribed endpoint. Now we're going to scroll down to where we have our code. Scroll down, that's here. Let me just pull this aside, so we get some space. And now, we point this to HTTP, colon, local host, colon 1330. That's our backend. And then we point to our transcribe endpoint. Let's save that. HTTP local host transcribe. Also, if we scroll down to our transcription display function, we have specified that the transcription text is coming from the text property, from the response. So let's go to our backend and set that up. We go to our backend. And come to where we're sending our transcription. And I'm just going to cut out the transcription, set an object, set the text property, and that will be equal to our transcription. Make sure you save that.
>
> **[1:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=92)** Let's also go back to the front end, and make sure that it's saved. It's now time to test things out, and I really hope we don't get any errors. First, let's go to our backend, and run it. Node server. Backend is running fine. So let's head over to our front end. You want to also make sure that your front end is running, so your front end is not currently running. Remember to run the MPX HTTP server, front end command. Now here in our front end, let us refresh the page to make sure that our changes have kicked in. I'm also going to be viewing the page source, to ensure that we're now pointing to our backend URL. Just scroll down. As you can see, HTTP local host, 1330 transcribe. Great. Now let's go back to our page. I'm also going to be opening up the developer tools, so that we can inspect the network tab. Got the network tab. Good. Let's draw this down, let's draw this down, so that we can see our screen clearly. Now let's select our video file. Select this video file. Click open. We have our video loaded. Now let us click our transcribe button,
>
> **[3:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=187)** and let's see what happens. Click transcribe. Going to go to the network tab to make sure that something is going on. As you can see, our transcribe request is in flight. So let's just wait 'til that completes and see what we get back. Now that took a while, but soon enough, we can see our transcribed text in the window on the right hand side. Let's pull down our network or our developer tools. And as you can see, the results are pretty impressive, especially for a video I recorded several years ago, and didn't use a very great recording equipment. Though some words were still spelt in a funny way, like [PHP](../../Skills/Software%20Development/PHP.md) being spelled as GHB here and this com com that I can't remember (chuckles), I can't remember what it is. But yeah, I'm still going to give the transcription API like a 92% pass mark. I think it really did a great job. In the next video, we will look at adding some small improvements to this application. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** http (4), url (2), api (2), mpx (1), php (1)
> **UI Navigation:** scroll down (4), go to (4)
> **CLI Commands:** make (5), node (1), php (1)
> **Cross-References:** go back to (2), in the next (2)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### [Adding a progress indicator](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=0)** - [Instructor] The transcription process is asynchronous, and we need to provide a way to give feedback to the user while the process is ongoing. So, in this video we'll be adding a progress indicator to our front-end application. We'll be adding a progress bar that shows up while the request to the backend is being processed, and disappears once this transcription is returned. We'll be adding this progress bar just below the file upload widget. This seed project uses Bootstrap, so I'm going to be taking advantage of the animated progress bar component in the Bootstrap Library. Let's head over to VS Code to start writing our progress bar. So here in VS code, let's go under our upload widget. And here we're going to start with a div, with the class name progress. Once we have that, let's go inside the div. Going to create some space up here, and down here. Scroll down a little. So inside the div, we set up the progress bar div, and set its range to 100%. So it's a div. And say class equal. Progress bar. Space. Progress bar striped. So that we can see the striped animation. And then we animate it
>
> **[1:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=93)** by adding the class progress bar animated. To make the animation full length, set the style property. And inside there we set the width to 100%. So we have set our div with the class of progress, as a wrapper for our progress body. Let's save that and check it out in the browser. So, here in the browser, let's refresh the page. And here, there is our animated progress bar. Now we need to keep this progress bar hidden by default, and show it only when the transaction with the backend is in progress. So, let's head back to VS code to make that happen. So the first thing we're going to do is add an ID to our progress bar container div. That's the div with a class of progress. So I'm just going to say ID equals. And give it an idea of transcription progress bar.
>
> **[2:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=163)** Now I'm going to copy this ID, and add the CSS property that will make sure that it is hidden by default. So scroll up. And just below the transcribed text property, I'm going to add another one with the ID I just copied. And inside here we're going to set visibility hidden. This property is going to hide our progress bar by default. Now let's refresh our page. As you can see, our progress bar is now hidden by default. Awesome. Now let's add the logic to show and add our progress bar based on the state of the transcription operation. Back in VS Code, let's scroll down to the [JavaScript](../../Skills/Software%20Development/JavaScript.md) section. And first we get an angle on our progress bar using the ID. Const. Transcription progress bar, equals.
>
> **[3:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=232)** Now that we have an angle on our ID, let us set the progress bar to appear when the transaction is ongoing, and disappear when the transcription is done. Let's scroll down. And just above our try card block, let us make the progress bar visible. Say transaction progress bar, dot style, dot visibility,
>
> **[4:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=259)** equals visible. Perfect. Now let's make sure that we hide this progress bar when the transcription operation is done or when an error occurs. So I'm just going to copy this, scroll down, and just after the if statement that checks the response data, I'll paste this. And we set the progress bar back to hidden. Let's also go into our error block. And add this just before the alert. And set it to hidden, also. So when an error occurs, the progress bar once again disappears. Now let's save the page and test this out. In the browser, once again, refresh the page to make sure that your changes have kicked in. Now with the page refreshed, let's test our progress indicator. Select a file. Open. Now let's click Transcribe. You see our progress bar, the operation is ongoing, and we're just going to wait for it to be done. And we'll see our progress bar disappear once the operation is done, and our transcription displayed on the right hand side. As you can see, once our transcription loads up, the progress bar disappears. And now we have a way to give the users a visual feedback
>
> **[5:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=353)** that the transcription process is ongoing, so that they can be patient to wait 'til it's done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (6)
> **UI Navigation:** scroll down (4), scroll up (1)
> **Tools:** vs code (4)
> **Env Vars:** css (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Editing transcriptions](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=0)** - [Instructor] As you may have noticed, even though the transcription results are great, it's not perfect. Sometimes you would like to edit this transcription before you copy it and use for your use case. But how do we make the transcription that is returned editable? One clever way to do this is to load the transcription returned into an editable text field instead of a div container. So, let's do just that. Here in VS Code, we start by commenting out our div. That's a transcription div. The transcription display div is commented out and we're going to be replacing it with the textarea, textarea element. We're going to be sizing up the textarea element using the cols and rows attributes. For continuity of our code, let's also give the text area the same id as we did for the transcription display div. Just copy that from here and paste it here. The final change we need to make has to do with how we load the transcription into our page. Let's scroll down to the section of our page where that is done. Scroll down and find the displayTranscription function. Now, instead of using innerHTML to load our transcription, we switch the div to value, which is more appropriate for a text area element. With this done, we can then save the file and let's test this out in our browser.
>
> **[1:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=95)** Now, here in our browser... Once again, let us refresh the page. Select our video. Open it. Click Transcribe. Our progress by it's showing. Nice. And now when the transcription process is done, we can go into the results and edit the transcription. For example, I know that this is ed and not edge, so I can change this. This VLC is actually [PHP](../../Skills/Software%20Development/PHP.md), so I'm going to change it to PHP. I also know that this is not HP, so I'm also going to be changing it to PHP, and you can continue to edit this transcription as much as you want. And once you're done, you can then copy it and use it for any use case you have intended. Now we have a fully functional video transcribing tool making use of [Google](../../Glossary/Service/Google.md)'s speech-to-text API that also allows us to edit the results, to refine it to its best shape. How awesome is that?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [Google](../../Glossary/Service/Google.md) (1)
> **CLI Commands:** php (3), make (2), find (1)
> **Env Vars:** php (3), vlc (1), api (1)
> **Code Identifiers:** displaytranscription (1), innerhtml (1)
> **UI Navigation:** scroll down (2)
> **Tools:** vs code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=0)** - [Fikayo] I hope you enjoyed building our AI video transcribing tool, and I hope that this project has given you a better understanding into implementing AI features in your software applications. I'd like to mention that there is an exact mirror of this course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library, where you get to use OpenAI's API instead of the [Google](../../Glossary/Service/Google.md)'s Speech-to-Text API. So if you're interested in that, I advise that you check it out. The LinkedIn Learning Library is also full of a ton of AI courses. Whether you're a programmer just looking for APIs to use to add AI POD features to your applications, or you are a data scientist that wants to build their own AI models from scratch, there are courses in the library for every use case. Once again, I am Fikayo Adepoju, and you can reach out to me on any of my socials displayed on the screen. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** api (2), pod (1)
> **Definitions:** is an  (1)
> **Speakers:** - [fikayo] (1)


## Instructor

- [Fikayo Adepoju](../../Instructors/Artificial%20Intelligence%20(AI)/Fikayo%20Adepoju.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-video-transcriber-with-nodejs-and-google-ai-speech-to-text-api-4485002)

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Machine Transcription
- Node.js

## Path Context

### In [Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)
← [Building with Google Gemini Advanced and Ultra](Building%20with%20Google%20Gemini%20Advanced%20and%20Ultra.md) | **5 of 7** | [Google Cloud Platform for Machine Learning Essential Training](Google%20Cloud%20Platform%20for%20Machine%20Learning%20Essential%20Training.md) →

## Appears In

- [Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)

## Related Courses

_Courses sharing skills:_

- [Exploring the Future of Development with GitHub Copilot Workspace](Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI), AI Software Development
- [AI Orchestration- Foundations](AI%20Orchestration-%20Foundations.md) — Artificial Intelligence (AI), AI Software Development
- [Welcome To The Building Ai Products Understanding The Workflow Professional Certificate](Welcome%20To%20The%20Building%20Ai%20Products%20Understanding%20The%20Workflow%20Professional%20Certificate.md) — Artificial Intelligence (AI), AI Software Development
- [Advanced Python Projects- Build AI Applications](Advanced%20Python%20Projects-%20Build%20AI%20Applications.md) — Artificial Intelligence (AI), AI Software Development
- [Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence](../Cloud%20Computing/Google%20Cloud%20Digital%20Cloud%20Leader%20Cert%20Prep-%203%20Innovating%20with%20Google%20Cloud%20Artificial%20Intelligence.md) — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)