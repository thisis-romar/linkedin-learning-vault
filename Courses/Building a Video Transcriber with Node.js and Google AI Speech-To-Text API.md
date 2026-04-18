---
type: course
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
created: 2026-04-17
---

# Building a Video Transcriber with Node.js and Google AI Speech-To-Text API

> Formerly complicated tasks like audio transcription for videos have become much simpler thanks to the rise of APIs like Google's Speech-to-Text. But while this exciting new tool can handle transcription, if you want to transcribe a lot of audio, your code still needs to set up connections and authentication and pipe the information back and forth.  In this course, instructor Fikayo Adepoju shows y

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api) | 1h 9m | Intermediate | 2608K learners

## Instructor

- [[Fikayo Adepoju]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-video-transcriber-with-nodejs-and-google-ai-speech-to-text-api-4485002)

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Machine Transcription
- Node.js

## Table of Contents

### Introduction

#### AI-powered video transcription
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=0)** - [Fikayo] Artificial intelligence-powered features are fast becoming a must-have in today's applications.
>
> **[0:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=5)** That is why, in this course, we are going to be demonstrating how developers can implement AI features in their applications by building a video transcribing tool from scratch.
>
> **[0:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=15)** This tool will make use of Google AI's Speech-To-Text API to extract transcription text from videos using an AI model.
>
> **[0:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=24)** I am inviting you to join me on this course as we build an AI-powered video transcribing tool using Node.js and Google Cloud's Speech-to-Text API.
>
> **[0:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=35)** Hi, I am Fikayo Adepoju and I have been building applications for over 10 years now.
>
> **[0:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/ai-powered-video-transcription?u=76281980&t=41)** Sounds exciting? Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), node (1)
> **Env Vars:** api (2)
> **File Paths:** node.js (1)
> **Code Keywords:** let (1)
> **Speakers:** - [fikayo] (1)

#### Who is this course for?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=0)** - [Instructor] So who should take this course?
>
> **[0:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=3)** If you have found your way to this course, this is the time to answer a couple of questions that will determine if this is the right course for you.
>
> **[0:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=10)** Ready? Let's go.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=12)** Are you a developer, development team, project manager, or engineering manager trying to learn how to add AI features to your application?
>
> **[0:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=21)** Are you interested in Google's AI tools and the capabilities of its API and want to learn how it can be integrated into applications?
>
> **[0:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=29)** Or are you just looking for a project-based course that teaches the implementation of artificial intelligence in software applications?
>
> **[0:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=37)** If your answer to any of these questions is yes, then you are in the right place.
>
> **[0:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=43)** This course will teach you everything you need to know about adding AI features to your software, using the Google Speech-to-Text API.
>
> **[0:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=51)** You'll learn by doing, as this course takes a hands-on approach as we get to build an entire application that transcribes video content using AI from scratch.
>
> **[1:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/who-is-this-course-for?u=76281980&t=62)** Sounds good? Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** api (2)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=0)** - [Instructor] In order to take this course, there are a couple of skills you need to have under your belt.
>
> **[0:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=5)** These skills are required for you to successfully follow along with this course.
>
> **[0:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=9)** First is knowing the three front-end technologies.
>
> **[0:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=13)** You are required to have at least a basic understanding of how to code with HTML, CSS, and JavaScript.
>
> **[0:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=21)** You also need to have spent some time working in an IDE.
>
> **[0:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=25)** That's an integrated development environment.
>
> **[0:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=28)** You can use any IDE you want, but for this course, we'll be making use of the popular Visual Studio Code.
>
> **[0:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=35)** Next, you need to have some familiarity with version control systems, like Git, and using a remote repository, like GitHub.
>
> **[0:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=44)** To build a backend application, we'll be making use of Node.js.
>
> **[0:48](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=48)** However, you can still follow along and replicate the program in any backend language of your choice.
>
> **[0:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=54)** If you need help learning any of these technologies mentioned, you can check out the LinkedIn Learning Library to get a ton of resources on these topics.
>
> **[1:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/what-you-should-know?u=76281980&t=62)** Now that you know the requirements for taking this course, let's get started building our video transcribing application.

> [!info]- Semantic Content
>
> **Env Vars:** ide (2), html (1), css (1)
> **Prerequisites:** you need to have (2), required to (1)
> **CLI Commands:** git (1), node (1)
> **Tools:** visual studio (1), github (1)
> **File Paths:** node.js (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)


### 1. Setting Up Google AI Speech-to-Text

#### Signing up for a Google Cloud account
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=0)** - [Instructor] In this video, we'll begin our project by first creating a Google Cloud account.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=6)** This will be required to make use of Google's speech to text AI models as the service is one of the numerous services offered by the Google Cloud platform.
>
> **[0:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=16)** I have already set up an account, so this video will be more of a walkthrough for those who haven't set up an account or people that don't know how to set one up.
>
> **[0:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=26)** If you already have an account, feel free to skip this video and head over to the next one.
>
> **[0:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=31)** To set up a new Google Cloud account, head over to the official site at cloud.[google.com](https://google.com).
>
> **[0:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=39)** Here you can set up a free account and get started using Google's cloud services.
>
> **[0:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=45)** To create an account, click the get started for free button on the homepage.
>
> **[0:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=51)** This will take you to Google's login page.
>
> **[0:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=54)** If you already have a Gmail account, use this to sign up.
>
> **[0:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=58)** If you don't have a Gmail account set up, you can use the create account button at the base of the login box to create one.
>
> **[1:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=66)** Once signed up, you'll then be able to access the Google Cloud console.
>
> **[1:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=71)** This is the console you will see once you're logged into your account.
>
> **[1:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=75)** Here you can access all of Google Cloud services by creating a project and enabling necessary Google Cloud APIs.
>
> **[1:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=83)** You can also set up your billing, configure Google Cloud's identity management system, and use other Google Cloud services like Storage, SQL, Kubernetes, and many more.
>
> **[1:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/signing-up-for-a-google-cloud-account?u=76281980&t=95)** In the following videos in this chapter, we'll be setting up our Google Cloud account to use Google's speech to text API.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (6), required to (1), configure (1)
> **Env Vars:** sql (1), api (1)
> **CLI Commands:** make (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)

#### Setting up billing
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=0)** - [Instructor] In this video, we'll be diving into the essential step of setting up a billing account on the Google Cloud platform.
>
> **[0:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=7)** Establishing this correctly ensures that you efficiently utilize GCPs services without interruption.
>
> **[0:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=14)** If you have already set this up, you can skip this video and move on to the next one.
>
> **[0:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=19)** To begin setting up your billing account from your GCP dashboard, click on the navigation menu.
>
> **[0:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=25)** This is typically represented by three horizontal lines.
>
> **[0:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=30)** From the flyout menu, select Billing.
>
> **[0:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=34)** If it's your first time here, you might not see any billing accounts.
>
> **[0:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=39)** As you can see, I already have a billing account set up.
>
> **[0:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=43)** If it's your first time here, you might not see any billing accounts.
>
> **[0:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=47)** To create one, you'll see a Create Account button.
>
> **[0:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=50)** This will take you to a billing form where you can fill in your account name and also associate the billing account with an organization if you're part of one.
>
> **[0:59](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=59)** This can help you better associate and manage expenses if you have multiple projects.
>
> **[1:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=65)** After filling the billing form, you can then add your payment information.
>
> **[1:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=69)** You can typically use credit cards, bank accounts, or other payment methods available in your country.
>
> **[1:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=74)** Before finalizing your billing account, take a moment to review the terms of service and any related policies.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=80)** Ensure you understand the billing cycle, costs associated with services, and any potential fees.
>
> **[1:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=86)** Once you're satisfied with the details, you can activate your billing account as I have done here.
>
> **[1:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-billing?u=76281980&t=91)** You can now connect this billing account to your Google Cloud projects.

> [!info]- Semantic Content
>
> **Env Vars:** gcp (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating your GCP project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=0)** - [Instructor] In this video, we'll be creating our GCP project, which is going to contain our setup for access to the Google AI speech to text API.
>
> **[0:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=9)** Projects are the foundational building blocks in GCP.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=12)** They help you organize, manage, and track your cloud-based endeavors, be it a simple app or a complex infrastructure.
>
> **[0:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=20)** Starting on your GCP dashboard at the top left corner, here, you'll see a dropdown indicating your current project.
>
> **[0:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=27)** Let's click on this.
>
> **[0:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=30)** A menu appears, displaying all your existing projects.
>
> **[0:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=34)** To create a new project, at the top of this menu, you'll find a new project button.
>
> **[0:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=40)** Let's click on that.
>
> **[0:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=44)** In the form that appears, you need to type in a name for your project, so let's go ahead and do that.
>
> **[0:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=51)** We're just going to say, my video transcribing project.
>
> **[1:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=60)** You can also select an organization on the way to put this project.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=64)** But for this project, we're just going to be skipping this step.
>
> **[1:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=67)** So click create, and Google Cloud will automatically create your project.
>
> **[1:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=75)** As you can see, our project is currently being created, the task is currently in progress.
>
> **[1:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=84)** Once the creation of your project is complete, click on the select project link on the notification.
>
> **[1:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=93)** As you can see, the dashboard is now switched to our project.
>
> **[1:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=97)** That's the one we just created.
>
> **[1:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=99)** You can also always use this dropdown to select any project of choice.
>
> **[1:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=104)** Let's cancel that.
>
> **[1:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=106)** Now that our project is selected, the dashboard displays the project information and the current status of the project.
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=112)** This project should already be connected to a billing account.
>
> **[1:56](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=116)** If not, you can navigate to the billing page by using the link on the side menu.
>
> **[2:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=124)** As you can see, this project is currently not linked to any billing account, so let's do that.
>
> **[2:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=130)** To link this project to a billing account, let's click the link, a billing account button.
>
> **[2:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=135)** Now, let's click set account to activate this billing account for our selected project.
>
> **[2:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=142)** And now, our project has been successfully set up with a billing account.
>
> **[2:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=146)** You can also set up budget alerts to track your spending on this project.
>
> **[2:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/creating-your-gcp-project?u=76281980&t=150)** With our project all set up, we can now proceed to setting up Google's speech to text API for this project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this. (1)
> **UI Navigation:** click on (3), dropdown (2), navigate to (1)
> **Env Vars:** gcp (3), api (2)
> **Prerequisites:** set up (3), setup (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Enabling the Speech-to-Text
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=0)** - [Instructor] In this video, we'll be enabling Google's Speech-to-Text API for our GCP project.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=6)** We'll be configuring access to the API and fetching the credentials to use in our code to make authenticated requests to the API.
>
> **[0:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=14)** Let's begin.
>
> **[0:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=15)** First, ensure that your project is selected on the project dropdown menu at the top of the page.
>
> **[0:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=21)** Next, click the side menu and select APIs & Services.
>
> **[0:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=26)** Under this menu, click on Library.
>
> **[0:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=31)** On the Library page, you'll see a list of services and APIs and products offered by Google Cloud.
>
> **[0:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=38)** To access the Speech-to-Text API, let's use the search box and type in speech to text, and hit Enter.
>
> **[0:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=52)** From the search results that appear, let's click on Cloud Speech-to-Text API.
>
> **[0:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=58)** Here on the API page, we're going to be enabling this API for this project.
>
> **[1:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=63)** So click on the big blue Enable button.
>
> **[1:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=66)** Google Cloud then goes to work, enabling this API for our project.
>
> **[1:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/enabling-the-speech-to-text?u=76281980&t=72)** Once the API is enabled, you'll then be transported to the API page where you can configure your credentials and monitor your API usage.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), gcp (1)
> **UI Navigation:** click on (3), dropdown (1)
> **Code Keywords:** let (3)
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Getting your access credentials
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=0)** - [Instructor] Now that we have enabled the speech to text API for our project, let's create the credentials we'll use to access it.
>
> **[0:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=7)** To do that, let's navigate to our credentials page by going to APIs and services on the side menu and click on credentials.
>
> **[0:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=17)** On the credentials page, let's click the create credentials button to begin creating our credentials.
>
> **[0:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=23)** This brings up a list of credentials that we can create.
>
> **[0:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=25)** From this list, we're going to be selecting service account.
>
> **[0:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=29)** On the service account creation page, we have been prompted to enter a bunch of details for our service account, and the first is the service account name.
>
> **[0:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=37)** So here I'm just going to enter, let's say something like my project service account.
>
> **[0:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=47)** That should be good enough.
>
> **[0:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=49)** We'll also be accepting the auto generated service account and we can ignore the service description.
>
> **[0:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=55)** So let's go ahead and click create and continue.
>
> **[1:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=61)** In the access grant section, click the role dropdown and select owner.
>
> **[1:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=67)** Going to be selecting owner as our role.
>
> **[1:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=70)** This will give us full access to all permissions on this API.
>
> **[1:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=73)** In production environment, you want to be more specific about the permissions you're granting on the usage of this API by your application.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=80)** This can be configured in your Google Cloud Identity Management section.
>
> **[1:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=84)** Configuring that is beyond the scope of this course.
>
> **[1:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=86)** However, you can check out GCP courses on the LinkedIn Learning library to learn how you can create safe and secure configurations for your GCP account.
>
> **[1:36](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=96)** But for now, let's proceed by clicking the continue button.
>
> **[1:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=104)** We are going to be ignoring the last section on granting access to users and finish up by clicking the done button.
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=112)** Now that we have created our service account, we get routed back to the credentials page.
>
> **[1:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=117)** To generate our actual credentials, let's scroll down to the service account section and click the service account we just created.
>
> **[2:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=126)** On the page that appears, click on the keys tab.
>
> **[2:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=131)** Here you'll see a add key dropdown.
>
> **[2:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=134)** Let's click on it and select create new key.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=139)** On the key creation dialogue, select JSON as the key type and click create.
>
> **[2:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=146)** This is the key we'll be using to get authenticated access to the Google Speech to Text API.
>
> **[2:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=154)** Let's select a location on our system.
>
> **[2:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=157)** Click save and this key will be automatically downloaded onto our machine.
>
> **[2:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=163)** Do note that this is a sensitive key and must be stored and accessed in a secure manner.
>
> **[2:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=169)** As this is a demo project, we'll simply save it on our computer and access it directly in code.
>
> **[2:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/getting-your-access-credentials?u=76281980&t=175)** But in a production environment, you want to use something more secure, like an environment variable or other recommended secure ways that Google has for securing its API Keys.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), continue (2)
> **Env Vars:** api (5), gcp (2), json (1)
> **UI Navigation:** click on (3), dropdown (2), navigate to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Building the Video Transcriber Interface

#### Cloning the seed project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=0)** - [Instructor] To begin building out our video transcribing tool, we will clone the seed project for this course.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=6)** This project helps us get a lot of the front-end boilerplates out of the way, and defines a simple structure for our project.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=12)** We can grab a link to our seed project by coming to the GitHub repo, going to Code and click in SSH, then we can click the icon here to get the link.
>
> **[0:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=25)** In order for you to follow along with this course, you can grab the link to this repo in the course notes, and it's also displayed on the screen.
>
> **[0:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=32)** Once you've grabbed the link, let's go to our terminal and clone the project.
>
> **[0:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=37)** To download the seed project onto our machine, you first ensure that Git is installed on your system.
>
> **[0:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=43)** Git is a simple versioning tool for managing different versions of your project, and also collaborating through remote repositories.
>
> **[0:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=50)** You can confirm that Git is installed by running the command git -v in your terminal.
>
> **[0:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=58)** If you don't have Git installed, you can head over to their website and install the software for your specific operating system.
>
> **[1:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=65)** With Git installed on your system, run the following command in your terminal to clone the seed project.
>
> **[1:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=71)** Say git clone, and paste the repo.
>
> **[1:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=76)** Then we hit Enter to run the command.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=80)** GitHub goes to work by cloning our project into the location we're currently at in our machine.
>
> **[1:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=91)** Make sure you run this command at the location on your computer where you want the project to live.
>
> **[1:36](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=96)** Once the cloning process is done, you will see a folder in your working directory.
>
> **[1:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=101)** As you can see, we now have the seed project on our machine.
>
> **[1:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/cloning-the-seed-project?u=76281980&t=105)** In the next video, we'll be walking through the project files and the base code in this folder to get familiar with what we just cloned.

> [!info]- Semantic Content
>
> **CLI Commands:** git (7), ssh (1), make (1)
> **Tools:** terminal (3), github (2)
> **Exercise Files:** github repo (1), download the (1)
> **Code Keywords:** let (1)
> **Env Vars:** ssh (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Project code walk-through
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=0)** - [Instructor] Now that we have our seed project cloned onto our system, let's open it up to explore what we have.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=6)** I'll be opening up the project in Visual Studio Code.
>
> **[0:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=9)** However, feel free to open it up in any code editor of your choice.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=12)** I actually coded a good part of this project using the nano editor.
>
> **[0:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=18)** Here in Visual Studio Code, we can see our folder structure on the left.
>
> **[0:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=22)** Currently, the project only contains one folder named frontend.
>
> **[0:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=26)** This is where all our base code currently lives.
>
> **[0:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=30)** There is also a gitignore file, which as expected, ignores all the files and folders we do not wish to upload to our remote repository.
>
> **[0:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=39)** If you open this up, you'll see some files that have been proactively ignored.
>
> **[0:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=45)** These are files and folders we'll be creating later on in the project.
>
> **[0:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=49)** Now back to the frontend folder.
>
> **[0:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=51)** If you open this up, you'll see it contains just one file, a route index.html file.
>
> **[0:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=58)** This will contain the entire frontend of our application as I have made sure to keep things simple.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=64)** Before we look at the code within this file, let's go on our frontend app to see what we're working with.
>
> **[1:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=69)** We'll be using the node JSS model http server to achieve this.
>
> **[1:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=74)** This model spins up an add-on server and serves our html files with it.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=80)** At the root of the project in your terminal, run the following command, npx http-server ./frontend.
>
> **[1:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=94)** This will spin up a server listing on port 8080 by default, and from there, we can access our application.
>
> **[1:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=101)** If port 8080 is already in use on your system, the http server model provides options for you to specify a different port.
>
> **[1:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=110)** Now let's go to our browser and access the frontend application.
>
> **[1:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=113)** This will be at [http://localhost](http://localhost), port 8080.
>
> **[2:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=125)** And as you can see, our index.html homepage loads up.
>
> **[2:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=130)** Let's go through all the page elements one by one.
>
> **[2:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=133)** First, we have the video preview section.
>
> **[2:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=136)** Here you can see and play back the selected video before transcribing it.
>
> **[2:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=140)** Just below that, we have the file upload widget.
>
> **[2:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=144)** We'll be adding logic that loads a video in the preview once it is selected using this form control.
>
> **[2:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=150)** Next is the button the user will click to send the video to the backend application to process the transcription.
>
> **[2:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=158)** Finally, all alone on the right-hand side, we have the container where the result of the transcription will be displayed.
>
> **[2:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=164)** I'm sure you can already guess the simple workflow of our video transcribing application, but let me just reiterate it one more time.
>
> **[2:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=172)** A user selects the video they want to transcribe using the file upload tool.
>
> **[2:56](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=176)** The video displays in the preview and can be played back.
>
> **[3:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=180)** Once the user confirms that this is the video they want to transcribe, they then click the Transcribe button, which sends a request to the backend along with the video selected.
>
> **[3:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=190)** Once the transcription process is done, the result that is the transcribed text is then displayed in the container on the right-hand side.
>
> **[3:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=198)** Pretty straightforward, right?
>
> **[3:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=200)** Now, let's take a look at the code behind all this.
>
> **[3:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=203)** Do note that these are currently dumb widgets as no logic has been added to them yet.
>
> **[3:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=209)** The workflow I just defined is what we are going to be writing code for in the following videos.
>
> **[3:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=214)** Here, in Visual Studio Code, I have opened the index.html file.
>
> **[3:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=219)** Let's take it from the top.
>
> **[3:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=221)** First let's pull this aside, so that we can have more screen real estate.
>
> **[3:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=225)** The file starts with some boilerplate html code.
>
> **[3:48](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=228)** First, we have the doc type, lang and head definitions.
>
> **[3:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=234)** The page has been given a title of Video Transcribing Tool, which you can change to any other title you prefer.
>
> **[4:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=242)** Next, we import the bootstrap CSS library for some standard styling.
>
> **[4:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=246)** And below that, we have a small CSS script to define an overflow of scroll for our transcription display section.
>
> **[4:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=256)** Now let's scroll down to the body.
>
> **[4:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=258)** In the body, we can see two container scripts that define the left and the right sides of our application.
>
> **[4:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=265)** In the left section, we have a video tag, an input tag, and also a button.
>
> **[4:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=274)** This is the button that will be clicked to trigger the transcription operation.
>
> **[4:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=278)** They have all been assigned IDs, which we'll be making use of later on to add logic with JavaScript.
>
> **[4:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=286)** On the right-hand side container div, we also have a child div.
>
> **[4:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=291)** This div will order transcribed text that is returned from the backend server, which we'll also be developing later on in this course.
>
> **[4:59](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=299)** Below the interface code, we import the Axios JavaScript library.
>
> **[5:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=304)** This will be used to make API calls to our backend server.
>
> **[5:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=308)** Next is an empty script tag where all our custom application logic is going to be written, and that completes the tour of our seed project.
>
> **[5:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=317)** In the next video, we'll start adding the proposed functionality for this application, starting with the file upload and preview.
>
> **[5:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/project-code-walkthrough?u=76281980&t=324)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (2), default, (1), finally, (1), type, (1)
> **Env Vars:** css (2), jss (1), api (1)
> **Tools:** visual studio (3), terminal (1)
> **File Paths:** index.html (3)
> **CLI Commands:** node (1), npx (1), make (1)
> **Ports:** port 8080 (3)
> **UI Navigation:** go to (1), scroll down (1)
> **URLs:** [http://localhost](http://localhost) (1)

#### Adding the video upload functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=0)** - [Instructor] In this video, we're going to be scripting our video selection and preview functionality.
>
> **[0:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=5)** This will ensure that once the user selects a video to be transcribed, that video is loaded into the preview and can be played back.
>
> **[0:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=13)** Let's begin by targeting all the elements in our page, using their IDs, and saving the undos to this element into variables.
>
> **[0:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=21)** Scroll down to the custom JavaScript section and begin.
>
> **[0:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=25)** We start with our upload widget by saying const video upload equals document dot get element by ID and set it
>
> **[0:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=40)** to the value of the ID of our video upload widget, which is also video upload.
>
> **[0:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=49)** Now let's just repeat this for our video preview transcribe button and where our transcription text is going to be displayed.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=64)** With all this in place, we now have handles to all our page elements.
>
> **[1:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=68)** Next, let us create another variable, and this time we'll be creating a variable that's going to hold the selected file.
>
> **[1:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=77)** For now we're not going to be initializing it to any default, so I'm just going to put the semicolon.
>
> **[1:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=83)** Now that we have all these handles, let's write our video selection function.
>
> **[1:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=87)** First, let's add an event handler to the file component change event.
>
> **[1:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=94)** This piece of code enables us to trigger an action when a file is selected using the video upload widget.
>
> **[1:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=100)** Next, inside our function, let's check if a file has been selected.
>
> **[1:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=106)** If a file is selected, that is, if this code is true, let's get a handle on the file that was selected.
>
> **[1:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=113)** This will hold a pointer to the location of the file.
>
> **[1:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=117)** Next, let's generate an object URL to the location of the file so that we can load the video in our preview screen.
>
> **[2:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=125)** With this object URL generated, we can then load it into our preview screen.
>
> **[2:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=130)** To do this, we need to set the source attribute to our video element to the URL we just created.
>
> **[2:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=136)** Awesome.
>
> **[2:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=137)** Now, let's test this out.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=139)** Let's save the file and back here in our browser, let us refresh the page to make sure that all the changes have kicked in.
>
> **[2:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=146)** Once that is done, let's select a video and see what happens.
>
> **[2:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=157)** As you can see, once we selected the video, it is automatically loaded into the preview, and here in the preview we can play the video to ensure that it's the exact video we want to transcribe.
>
> **[2:48](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=168)** I can already see the preview image, so I know that it is the right video.
>
> **[2:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=173)** (muffled audio plays) And that's good enough for me.
>
> **[3:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=180)** In the next video, we'll be adding the function that sends our video to our backend for transcription.
>
> **[3:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-video-upload-functionality?u=76281980&t=184)** See you there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), function (3), const (1), default, (1), this, (1)
> **Env Vars:** url (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Adding the transcribe video function
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=0)** - In this video, we're going to be adding the function that sends our video to our backend for transcription.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=6)** Our backend has not been built yet, but once we have that, we'll come and update this function to point to it.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=12)** But for now, let's write the function to continue building our frontend.
>
> **[0:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=16)** To begin, let's flesh out the function definition for a function called transcribe video.
>
> **[0:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=23)** This is going to be an async function, so we add our async keyword and then we'll flesh out a function.
>
> **[0:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=28)** (keyboard typing) This function will be triggered when our transcribe button, that is this button here, it is going to be triggered when this button is clicked.
>
> **[0:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=39)** Let's scroll back down.
>
> **[0:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=41)** Now let's hook up a click and latter to transcribe button, and this event handler will call our transcribe video function.
>
> **[0:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=49)** Perfect, now let's get back to the transcribe video function.
>
> **[0:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=53)** (mouse clicking) First, let's create a new form data object for the request we'll be sending.
>
> **[1:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=61)** This will enable us attach files to our request, so let's go ahead and attach our file.
>
> **[1:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=67)** (keyboard typing) We are going to give this parameter the name file, and that's the name we're going to be using to receive it at the backend.
>
> **[1:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=76)** We'll set this to our selected file variable.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=80)** (keyboard typing) This is the variable that we set to equal this value.
>
> **[1:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=85)** That's the value of the file that was selected.
>
> **[1:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=89)** Finally, we'll send the request to our API with the form data as our payload.
>
> **[1:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=94)** We'll be doing this inside a try catch block.
>
> **[1:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=98)** Scroll down, try, (keyboard typing) catch, (keyboard typing) and the try section we call our API.
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=112)** (mouse clicking) (keyboard typing) Now, this is a bunch of code I just dumped at you.
>
> **[1:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=117)** For clarity, let me go through it step by step.
>
> **[2:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=121)** Here we've made our request, and we're using a placeholder for our backend URL because we have not created this backend project yet.
>
> **[2:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=128)** We have also defined errors to set the appropriate content type, since we are going to be sending a file in this request.
>
> **[2:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=135)** Now let's check if the request is successful, and if so, we'll be calling another function to handle it.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=139)** (keyboard typing)
>
> **[2:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=149)** As you can see, we are calling the function display transcription to undo the transcription data.
>
> **[2:36](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=156)** We'll be defining this function in the following video, but for now, just to wrap things up, let's handle the error scenario.
>
> **[2:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=163)** In the catch block, let's use our console.log function to print out the error.
>
> **[2:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcribe-video-function?u=76281980&t=167)** (keyboard typing) Along with that, let's display an alert to the user, indicating that the transcription operation failed.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), let (12), async (2), continue (1), finally, (1)
> **Non-Speech:** (keyboard typing) (8), (mouse clicking) (2)
> **Env Vars:** api (2), url (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Adding the transcription display function
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=0)** - [Instructor] In a previous video, we called the displayTranscription function to undo the successful response of our transcription operation.
>
> **[0:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=8)** In this video, we're going to be writing out that function.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=12)** This is going to be a very small function.
>
> **[0:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=14)** However, it is good for the principle of suppression of concerns to have this action in a different function.
>
> **[0:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=20)** Let's scroll down, and just below the button click event handler, let us flesh out our displayTranscription function.
>
> **[0:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=28)** (keyboard keys clicking) This function takes in the response as its only argument.
>
> **[0:36](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=36)** Inside the function, set the innerHTML of the transcribedText element to the text property from the response.data.
>
> **[0:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=44)** Scroll down. (keyboard keys clicking) The text property is where our transcription result is stored.
>
> **[0:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=52)** This will ensure that the transcription is loaded into the container on the right hand side, displaying the transcription results to the user.
>
> **[1:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=60)** If you're bit worried that we haven't been testing anything out yet, don't fret.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-the-transcription-display-function?u=76281980&t=64)** In later videos, we'll be doing that once we have our frontend hooked up to the backend application we'll be building next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (2)
> **Code Identifiers:** displaytranscription (2), innerhtml (1), transcribedtext (1)
> **UI Navigation:** scroll down (2)
> **Non-Speech:** (keyboard keys clicking) (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 3. Building the Backend: Connecting to the AI

#### Building out the Express.js API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=0)** - In this section, we're going to be building out the backend API that will process our transcription.
>
> **[0:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=5)** This API will simply serve as a middleman between our client and the API exposed by the AI model that will be doing the transcription operation.
>
> **[0:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=13)** In this video, we'll begin development by kickstarting the Node.js application.
>
> **[0:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=18)** In the project folder, just beside our frontend folder, create a new folder for the API with the name backend.
>
> **[0:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=27)** Now let's move into the folder, and let's set up the project.
>
> **[0:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=32)** First, run the command npm init to initialize the folder as a Node.js project.
>
> **[0:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=38)** We'll be adding the -y flag in order to skip the interactive project initialization prompts and accept the defaults.
>
> **[0:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=45)** Now that we have our package.json file scaffolded, we can start installing our packages.
>
> **[0:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=51)** To begin, we'll be installing just two packages.
>
> **[0:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=53)** And this will be the express package and the cors package.
>
> **[0:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=57)** So let's go ahead and install this by running the command npm install express cors
>
> **[1:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=70)** and hit enter.
>
> **[1:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=73)** Once the installation is done, we can now start writing our server code.
>
> **[1:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=78)** Let's begin by creating a server.js file in the root of our backend project folder.
>
> **[1:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=85)** The new file, server.js.
>
> **[1:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=91)** In this file, we start by bringing in the packages we just installed, bringing in the express package, and then we'll bring in the cors package.
>
> **[1:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=114)** In this project, we'll also need to pass request parameters.
>
> **[1:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=118)** And to do that, we're going to be making use of the body-parser library.
>
> **[2:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=122)** So let's install that and also bring it in.
>
> **[2:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=124)** Let's go to our terminal, clear.
>
> **[2:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=129)** And in our terminal, I'm going to run npm install body-parser.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=139)** And this will bring in our body-parser library.
>
> **[2:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=145)** Next, let's create our express app and assign it to a variable.
>
> **[2:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=153)** We're going to be assigning it to a variable called app.
>
> **[2:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=157)** Now let's configure this app to use the cors package.
>
> **[2:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=160)** So app.use(cors()); This will help us take care of any cors errors we might be having.
>
> **[2:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=170)** But in a production scenario, you want to have standard cors settings.
>
> **[2:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=174)** Finally, to wrap up our boilerplate express app, let's declare a port and make our app listen on that port.
>
> **[3:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=188)** If there's no port set on the environment, we default this to 1330.
>
> **[3:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=194)** Now let's make our app listen on that port.
>
> **[3:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=203)** Once our app is listening, let's write a message to our console.
>
> **[3:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=211)** And that wraps up our boilerplate Node.js application.
>
> **[3:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=214)** Now we can run the app in our console to see if everything works fine.
>
> **[3:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=218)** Here in the console, run the command node server.js to boot up the application.
>
> **[3:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/building-out-the-express-js-api?u=76281980&t=229)** Now our app running message displays, and we can start adding all the cool functionality that we have planned to this Node.js application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (1), finally, (1)
> **CLI Commands:** node (5), npm (3), make (2)
> **File Paths:** node.js (4), server.js (3), package.json (1)
> **Prerequisites:** install (4), set up (1), initialization (1), configure (1)
> **Env Vars:** api (4)
> **Tools:** terminal (2)
> **Exercise Files:** boilerplate (2)
> **UI Navigation:** go to (1)

#### Configuring Google’s Speech library
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=0)** - [Instructor] In this video, we'll be setting up the Google Speech-to-Text client library in our Node.js application.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=6)** This will allow us, use up our libraries provided by Google for Node.js to call the Google Cloud API.
>
> **[0:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=13)** We'll be setting up this library using our service account credentials.
>
> **[0:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=17)** That is the one we downloaded from a Google Cloud account.
>
> **[0:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=20)** The first step is to install the client library for Node.js.
>
> **[0:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=24)** This library is also available for popular languages like Python, Java, and Go.
>
> **[0:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=29)** To install the package, we type the command npm install.
>
> **[0:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=35)** First, let's make sure that we are in our backend folder, okay?
>
> **[0:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=41)** So we type npm install @google-cloud/speech.
>
> **[0:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=53)** This will get all the Google Cloud Speech library.
>
> **[0:56](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=56)** To run the command, let's hit Enter.
>
> **[1:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=61)** Once the package is installed, we can then proceed to set it up.
>
> **[1:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=65)** Before we head over to VS Code, let's save our service account credentials, that was the one downloaded from the previous video, to the root of the backend project.
>
> **[1:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=75)** I'm just going to go and grab that, my Desktop, copy it to my backend folder, and just paste it here.
>
> **[1:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=84)** That's my video transcribing project service account credentials.
>
> **[1:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=89)** That's a JSON file.
>
> **[1:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=91)** If you prefer not to move files around or you want to access a service account credential file from a secure location, you can go to your terminal and set a Google environment variable.
>
> **[1:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=103)** This environment variable will be recognized via code and inherited via code any time you use the client library.
>
> **[1:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=110)** This can be set by running the command export.
>
> **[1:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=115)** The environment variable is GOOGLE_APPLICATION _CREDENTIALS.
>
> **[2:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=126)** You would then set this to the path of your service account credential file.
>
> **[2:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=132)** That's a JSON file.
>
> **[2:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=134)** Like I said, with this, the client library will automatically recognize this environment variable and make use of it for authentication.
>
> **[2:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=142)** For this project, we're just going to be accessing the file directly in our code.
>
> **[2:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=149)** So let's head back to Visual Studio Code.
>
> **[2:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=152)** Here in Visual Studio Code, to begin configuring our library, we first import it into our server.js file.
>
> **[2:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=158)** So let's go up, say const speech equals require @google-cloud/speech.
>
> **[2:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=177)** Next, we're going to come down here just under our cors definition and instantiate a new instance, a new client instance of our speech library.
>
> **[3:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=189)** So client equals new speech.SpeechClient,
>
> **[3:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=199)** open the parenthesis, and then inside we're going to set an object, and inside the object we're going to define a property called keyFilename, and this is going to be set to the path of our file.
>
> **[3:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=217)** Our file is currently in here, so I could just come here and say the name so I can give me access to copy the file.
>
> **[3:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=227)** I'll go back to our code.
>
> **[3:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=230)** Just paste it in here.
>
> **[3:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=233)** Remember to add the .json extension.
>
> **[3:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=237)** Save that.
>
> **[3:59](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=239)** As I mentioned earlier, let's put this aside, if you have already defined the environment variable that we looked at earlier, then you don't need to specify this.
>
> **[4:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=249)** We're mainly doing this for convenience so that we don't clash it anywhere the duplicate environment variable that might have been set on the system.
>
> **[4:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=256)** So let's save the file.
>
> **[4:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/configuring-google-s-speech-library?u=76281980&t=258)** And with this in place, we can now call the Google Cloud Speech-to-Text API and use it to transcribe our files.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), export. (1), this, (1), const (1), require (1)
> **CLI Commands:** node (3), npm (2), make (2), python (1)
> **Env Vars:** api (2), json (2), google_application (1)
> **File Paths:** node.js (3), server.js (1)
> **Tools:** visual studio (2), vs code (1), terminal (1)
> **Prerequisites:** install (4)
> **Cross-References:** previous video (1), go back to (1)
> **UI Navigation:** go to (1), open the (1)

#### Adding routes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=0)** - [Instructor] In this video, we'll be adding two routes to our application.
>
> **[0:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=4)** The first route will be a base route, and we'll simply spit out a conventional welcome message.
>
> **[0:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=9)** The second route will be the endpoint that actually performs the transcription and will be called from the front end, Web Client.
>
> **[0:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=16)** So let's begin.
>
> **[0:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=18)** The first route will be a Get Request endpoint.
>
> **[0:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=21)** So I just come here, just under our client definition, say app.get, that'll be for our base route.
>
> **[0:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=32)** I'll set the handler, say Request Response.
>
> **[0:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=39)** And this route will simply return the message, Welcome, so res.send, so Welcome to A.I Transcription.API.
>
> **[0:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=57)** So, just a simple standard based route.
>
> **[1:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=61)** Next, let's move on to our next route.
>
> **[1:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=63)** Unlike the first one, the following route will be a post request.
>
> **[1:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=67)** Let's say app.post, the endpoint will be called, transcribe, but you can give this any other name you feel will be more appropriate for your application.
>
> **[1:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=79)** So I say Transcribe, do the handler, which is req, res, and for now we're going to be leaving this empty.
>
> **[1:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-routes?u=76281980&t=90)** The functionalities will be added in the coming video, but now we have two routes that we're going to be working with for this application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### Setting up file upload functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=0)** - [Instructor] In order to transcribe video files, we need to be able to receive and store video files.
>
> **[0:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=5)** That is what we'll be setting up in this video.
>
> **[0:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=7)** To begin, first, we need to install a node.js package that will help us achieve this.
>
> **[0:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=13)** In the terminal, we're going to be installing the multer package.
>
> **[0:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=16)** And to do that, simply run the command, npm install multer.
>
> **[0:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=24)** And let's hit Enter to run the command.
>
> **[0:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=32)** Once the package is installed, time to add over to our project in Visual Studio Code to add our upload functionality.
>
> **[0:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=38)** Here in Visual Studio Code, first we bring in our multer package by using require.
>
> **[0:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=43)** So const, multer, equals require.
>
> **[0:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=55)** Aside to the installed multer package, we'll also be needing the part and FS models from the node.js call library to correctly define our upload part, and access the file system functions respectively.
>
> **[1:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=68)** So let's bring these two in.
>
> **[1:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=75)** With all the required dependencies brought in, we can now start writing our upload function.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=80)** The first step is to configure where we will be storing our uploaded video files, and generating file names.
>
> **[1:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=86)** For this, we're going to be creating a multer storage configuration.
>
> **[1:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=91)** So let's scroll down, and just below our client, let's create our multer storage configuration.
>
> **[1:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=105)** In the configuration object, first, let's set our upload directory to a folder with the name of "Uploads".
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=112)** We're going to be creating this folder later on.
>
> **[2:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=120)** With our upload parts defined, let's now automatically generate random names for our uploaded files using timestamps.
>
> **[2:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=128)** And we're going to be doing that by setting the file name property.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=139)** With this definition, we'll now generate a unique file name for every uploaded file using the current timestamp.
>
> **[2:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=147)** Lastly, we create an upload object by passing the storage configuration to the multer library.
>
> **[2:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=153)** We pulled down, say const upload.
>
> **[2:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=165)** Now that we have the upload object set up and configured, we'll be including it as a middleware on our transcribe endpoint.
>
> **[2:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=172)** This will ensure that any file uploaded will be automatically processed.
>
> **[3:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=183)** We'll be setting the parameter for the uploaded file to have the name of "file", just as we have specified at the front end.
>
> **[3:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=195)** And while we are on that, I'm going to be adding the keyword "async" to this handler, as we'll be performing some asynchronous operations inside this transcribe route handler.
>
> **[3:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=205)** Now with this setup, when a video file is uploaded, we can access the file part from the request object.
>
> **[3:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=213)** One last thing.
>
> **[3:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=214)** We did specify that all files will be uploaded to an uploads directory.
>
> **[3:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=219)** So let's go ahead and create that directory at the root of our backend project.
>
> **[3:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=225)** So we go to backend, click New Folder, and say uploads.
>
> **[3:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=232)** Perfect.
>
> **[3:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/setting-up-file-upload-functionality?u=76281980&t=233)** And with that in place, we can start working on our transcription functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), require (2), const (2), this. (1), function (1)
> **Prerequisites:** install (2), configure (1), set up (1), setup (1)
> **CLI Commands:** node (2), npm (1)
> **Tools:** visual studio (2), terminal (1)
> **File Paths:** node.js (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Speakers:** - [instructor] (1)

#### Transcribing with the Google AI Speech-to-Text
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=0)** - [Instructor] Now that we have set up our Google speech library and our file uploads feature, we will now write the code to transcribe our videos to text.
>
> **[0:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=8)** One important thing you need to know about the Google speech to text API is that at the moment, it does not have the ability to process video files.
>
> **[0:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=18)** This API can currently only transcribe audio files.
>
> **[0:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=22)** So we need a way to extract audio out of the video files we will upload.
>
> **[0:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=28)** We will then send the audio file to the Google speech to text API.
>
> **[0:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=32)** This might sound like a lot of work, but don't worry, we will have it sorted out in no time.
>
> **[0:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=38)** And there are packages on NPM to make this all happen.
>
> **[0:42](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=42)** But first we need a way to extract audio files from videos, and to do that we will be using the FFmpeg library.
>
> **[0:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=50)** FFmpeg is a free and open source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams.
>
> **[1:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=63)** To add this feature to our Node.js project, we're going to be needing two packages.
>
> **[1:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=68)** First is the ffmpeg-static library, which is a static FFmpeg binary that works for Windows, macOS, and Linux.
>
> **[1:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=78)** This library gives us all the necessary FFmpeg binaries required and returns the part of a statically linked FFmpeg binary on the local file system.
>
> **[1:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=89)** We will also be needing the fluent-ffmpeg library.
>
> **[1:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=93)** This allows us to use the FFmpeg library in our Node.js project using a fluent and easy to use API.
>
> **[1:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=100)** Trust me, working with FFmpeg is made a whole lot better in Node.js with this library.
>
> **[1:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=106)** So let's (indistinct) to our terminal and install these two libraries.
>
> **[1:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=110)** To install the FFmpeg library and the fluent-ffmpeg library, we're run the command npm install ffmpeg-static fluent-ffmpeg.
>
> **[2:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=130)** For older systems, you might need to specify a specific version of ffmpeg-static like 4.4.1.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=139)** Remember to check your OS version to find the library that is compatible with your operating system.
>
> **[2:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=145)** However, if you're running the latest version of your operating system or at least two versions back, you should be good just running ffmpeg-static.
>
> **[2:36](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=156)** But if you get any errors installing this library, you might want to check out the version that works for your operating system.
>
> **[2:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=165)** So now that we have our Node.js FFmpeg libraries installed, let's start writing our video transcribing feature.
>
> **[2:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=173)** First, let's bring in our libraries.
>
> **[2:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=175)** For the ffmpeg-static library.
>
> **[2:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=178)** We say const ffmpegStatic, or ffmpegPath, rather, as this returns the path.
>
> **[3:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=189)** So require ffmpeg-static.
>
> **[3:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=197)** Next we bring in our fluent-ffmpeg library, saying const ffmpeg equals require fluent-ffmpeg.
>
> **[3:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=212)** Awesome.
>
> **[3:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=213)** Next we set the FFmpeg path on the fluent library using the path returned by the ffmpeg-static library.
>
> **[3:42](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=222)** This allows the fluent-ffmpeg library to access the correct installation part of the FFmpeg binary.
>
> **[3:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=229)** So let's just scroll down.
>
> **[3:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=232)** Just under our multer configuration we say ffmpeg.setFfmpegPath
>
> **[4:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=246)** open parenthesis and we copy, we scroll up and copy this, our FFmpeg path.
>
> **[4:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=255)** Scroll down and paste it here.
>
> **[4:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=258)** Perfect.
>
> **[4:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=259)** With that in place, we can then proceed with our video transcription instructions.
>
> **[4:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=264)** So let's go down to our transcribe endpoint.
>
> **[4:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=268)** I'm going to be closing this panel so that we can have more screen real estate.
>
> **[4:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=275)** And here we'll first check if a file has been uploaded in order to return an error message if not.
>
> **[4:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=290)** With that in place, the next thing we'll do is to get the uploaded video path and define a path for the audio file that will be extracted from it.
>
> **[5:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=307)** With this defined, let's now use the fluent-ffmpeg package to extract audio from the video file into an audio file.
>
> **[5:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=317)** First we call ffmpeg and set the video path.
>
> **[5:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=326)** Then we'll set the format to wav.
>
> **[5:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=332)** Let's bring this down.
>
> **[5:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=334)** Next we'll set the audio codec.
>
> **[5:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=339)** Next we'll be setting the audio frequency.
>
> **[5:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=344)** Set the audio channel to one.
>
> **[5:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=351)** We'll then listen on the end event that signifies that the process is done and then we can process a callback.
>
> **[6:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=363)** We'll also check for errors by listening on the error event.
>
> **[6:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=373)** Scroll down.
>
> **[6:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=375)** And here we'll just write a simple console.error message.
>
> **[6:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=379)** Just use error.
>
> **[6:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=381)** Say error extracting audio and we just simply print our error.
>
> **[6:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=392)** And finally we'll call the save method and save our audio to the audio file path.
>
> **[6:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=405)** That was a lot.
>
> **[6:48](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=408)** Let's also make sure that we are sending a message back to the server when an error occurs.
>
> **[6:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=415)** We say res.status 500 and send an error.
>
> **[7:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=424)** And here we just say error processing video.
>
> **[7:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=429)** Perfect.
>
> **[7:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=431)** Now we have written all the code necessary to extract our audio and save it to our audio path.
>
> **[7:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=438)** As I specified earlier, the end event signifies the end of this process.
>
> **[7:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=443)** And inside this callback, we're going to be sending our audio file to Google speech to text API for transcription.
>
> **[7:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=451)** So let's write the code to do that.
>
> **[7:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=453)** First we use the fs model to convert our audio file to bytes as this is the format that will be sent to the speech API.
>
> **[7:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=460)** So we'll say const.
>
> **[7:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=464)** Move this down a little bit.
>
> **[7:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=467)** Say const audioBytes equal fs.readFileSync.
>
> **[8:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=482)** We're passing our audio path.
>
> **[8:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=487)** And set it to a base 64 string.
>
> **[8:17](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=497)** Next we'll be setting up our transcription request by defining the parameters for the request.
>
> **[8:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=503)** We say const request.
>
> **[8:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=509)** Open the request configuration object.
>
> **[8:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=512)** I'll first set the audio property which is set on object and it's going to take one property, which is content, and that content will be set to our audioBytes.
>
> **[8:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=527)** Next we're going to be defining a config property, which is also set to an object.
>
> **[8:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=534)** And inside here we set the encoding property to LINEAR16,
>
> **[9:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=545)** the sampleRateHertz property to 16000,
>
> **[9:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=555)** which is our audio frequency, the audio frequency that we defined in the FFmpeg conversion.
>
> **[9:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=561)** Then our languageCode.
>
> **[9:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=565)** LanguageCode will be set to English US.
>
> **[9:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=575)** And with all that defined, we have our transcription request configuration in place.
>
> **[9:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=580)** We will now be sending our transcription request and using the try catch block in order to make sure that we are catching any errors from the operation.
>
> **[9:48](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=588)** So let's scroll down once again, and below the request object, we say try catch errors.
>
> **[10:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=607)** And let's just deal with the errors first.
>
> **[10:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=608)** So here we say console.error.
>
> **[10:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=614)** I'll just set that to API error.
>
> **[10:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=621)** And that should just simply print out the error.
>
> **[10:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=628)** We will also send an error message to the client and an error status, say res.status 500 .send,
>
> **[10:42](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=642)** error transcribing video.
>
> **[10:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=654)** And this will also print the message from the error.
>
> **[11:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=661)** Save that.
>
> **[11:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=663)** Now in our try block, let's write the actual transcription code.
>
> **[11:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=667)** Scroll down once again so we have this in view.
>
> **[11:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=671)** And here we're going to call the transcription API by saying await client.recognize request.
>
> **[11:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=689)** And we're going to save the response here in this response variable.
>
> **[11:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=699)** The response comes as an array and inside it we can pick the response object.
>
> **[11:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=711)** Now that we have our response, let's get our transcription down to the client.
>
> **[11:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=715)** For that we'll say const transcription equals response.results.map.
>
> **[12:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=730)** Open the map function.
>
> **[12:13](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=733)** Say result.
>
> **[12:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=740)** And here we'll say result.alternatives.
>
> **[12:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=747)** Pick the first result and grab the transcript.
>
> **[12:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=754)** And lastly, we call the join function and join at every new line character.
>
> **[12:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=763)** Yeah, I think we're missing the return statement here.
>
> **[12:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=766)** Return, yeah.
>
> **[12:48](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=768)** Good.
>
> **[12:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=769)** Now that we have this in place, let's do some cleanup.
>
> **[12:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=773)** Let's delete the files that were uploaded and the audio that was extracted.
>
> **[12:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=777)** To do that, I will say fs.unlinkSync.
>
> **[13:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=784)** I'll give IT the videoFilePath.
>
> **[13:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=790)** We'll also be deleting the audio file.
>
> **[13:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=802)** And finally, we can then return our transcription, calling res.send.
>
> **[13:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=810)** Inside res.send, simply just return our transcription.
>
> **[13:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=817)** That's the one we got up here.
>
> **[13:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=820)** So with all this in place, we can now connect our front end to our backend.
>
> **[13:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=824)** But first, let's run to our backend once again to make sure that we are not getting any errors.
>
> **[13:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=830)** So here in the terminal, we're going to clear the terminal and we run node server.
>
> **[14:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=843)** Our server runs fine, so we're good.
>
> **[14:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/transcribing-with-the-google-ai-speech-to-text?u=76281980&t=845)** Now we can start integrating our front end with this backend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), static (8), const (6), require (2), function (2)
> **CLI Commands:** node (5), make (4), npm (2), find (1)
> **Code Identifiers:** audiobytes (2), macos (1), ffmpegstatic (1), ffmpegpath (1), setffmpegpath (1)
> **Env Vars:** api (8), npm (1), linear16 (1)
> **UI Navigation:** scroll down (5), open the (2), scroll up (1)
> **File Paths:** node.js (4)
> **Prerequisites:** install (3), set up (1)
> **Tools:** terminal (3)


### 4. Bringing It All Together

#### Connecting the front end to the API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=0)** - [Instructor] Now that we're done writing our backend, time to integrate it with our client application and test things out.
>
> **[0:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=7)** We're going to start by pointing our frontend app to the backend application.
>
> **[0:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=11)** So, let's change the placeholder backend URL text in the call to our API to the address of the backend, and point to the transcribed endpoint.
>
> **[0:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=21)** Now we're going to scroll down to where we have our code.
>
> **[0:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=26)** Scroll down, that's here.
>
> **[0:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=30)** Let me just pull this aside, so we get some space.
>
> **[0:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=33)** And now, we point this to HTTP, colon, local host, colon 1330.
>
> **[0:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=44)** That's our backend.
>
> **[0:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=46)** And then we point to our transcribe endpoint.
>
> **[0:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=52)** Let's save that.
>
> **[0:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=55)** HTTP local host transcribe.
>
> **[0:59](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=59)** Also, if we scroll down to our transcription display function, we have specified that the transcription text is coming from the text property, from the response.
>
> **[1:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=70)** So let's go to our backend and set that up.
>
> **[1:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=74)** We go to our backend.
>
> **[1:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=75)** And come to where we're sending our transcription.
>
> **[1:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=80)** And I'm just going to cut out the transcription, set an object, set the text property, and that will be equal to our transcription.
>
> **[1:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=90)** Make sure you save that.
>
> **[1:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=92)** Let's also go back to the front end, and make sure that it's saved.
>
> **[1:36](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=96)** It's now time to test things out, and I really hope we don't get any errors.
>
> **[1:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=100)** First, let's go to our backend, and run it.
>
> **[1:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=106)** Node server.
>
> **[1:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=110)** Backend is running fine.
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=112)** So let's head over to our front end.
>
> **[1:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=114)** You want to also make sure that your front end is running, so your front end is not currently running.
>
> **[1:59](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=119)** Remember to run the MPX HTTP server, front end command.
>
> **[2:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=126)** Now here in our front end, let us refresh the page to make sure that our changes have kicked in.
>
> **[2:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=131)** I'm also going to be viewing the page source, to ensure that we're now pointing to our backend URL.
>
> **[2:18](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=138)** Just scroll down.
>
> **[2:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=142)** As you can see, HTTP local host, 1330 transcribe.
>
> **[2:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=147)** Great.
>
> **[2:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=148)** Now let's go back to our page.
>
> **[2:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=150)** I'm also going to be opening up the developer tools, so that we can inspect the network tab.
>
> **[2:39](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=159)** Got the network tab.
>
> **[2:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=161)** Good.
>
> **[2:44](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=164)** Let's draw this down, let's draw this down, so that we can see our screen clearly.
>
> **[2:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=169)** Now let's select our video file.
>
> **[2:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=175)** Select this video file.
>
> **[2:59](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=179)** Click open.
>
> **[3:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=181)** We have our video loaded.
>
> **[3:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=183)** Now let us click our transcribe button, and let's see what happens.
>
> **[3:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=189)** Click transcribe.
>
> **[3:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=191)** Going to go to the network tab to make sure that something is going on.
>
> **[3:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=195)** As you can see, our transcribe request is in flight.
>
> **[3:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=199)** So let's just wait 'til that completes and see what we get back.
>
> **[3:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=203)** Now that took a while, but soon enough, we can see our transcribed text in the window on the right hand side.
>
> **[3:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=209)** Let's pull down our network or our developer tools.
>
> **[3:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=213)** And as you can see, the results are pretty impressive, especially for a video I recorded several years ago, and didn't use a very great recording equipment.
>
> **[3:42](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=222)** Though some words were still spelt in a funny way, like PHP being spelled as GHB here and this com com that I can't remember (chuckles), I can't remember what it is.
>
> **[3:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=231)** But yeah, I'm still going to give the transcription API like a 92% pass mark.
>
> **[3:56](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=236)** I think it really did a great job.
>
> **[3:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=238)** In the next video, we will look at adding some small improvements to this application.
>
> **[4:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/connecting-the-front-end-to-the-api?u=76281980&t=243)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (1), while, (1), pass (1)
> **Env Vars:** http (4), url (2), api (2), mpx (1), php (1)
> **UI Navigation:** scroll down (4), go to (4)
> **CLI Commands:** make (5), node (1), php (1)
> **Cross-References:** go back to (2), in the next (2)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Adding a progress indicator
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=0)** - [Instructor] The transcription process is asynchronous, and we need to provide a way to give feedback to the user while the process is ongoing.
>
> **[0:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=7)** So, in this video we'll be adding a progress indicator to our front-end application.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=12)** We'll be adding a progress bar that shows up while the request to the backend is being processed, and disappears once this transcription is returned.
>
> **[0:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=20)** We'll be adding this progress bar just below the file upload widget.
>
> **[0:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=26)** This seed project uses Bootstrap, so I'm going to be taking advantage of the animated progress bar component in the Bootstrap Library.
>
> **[0:33](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=33)** Let's head over to VS Code to start writing our progress bar.
>
> **[0:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=38)** So here in VS code, let's go under our upload widget.
>
> **[0:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=45)** And here we're going to start with a div, with the class name progress.
>
> **[0:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=54)** Once we have that, let's go inside the div.
>
> **[0:57](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=57)** Going to create some space up here, and down here.
>
> **[1:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=62)** Scroll down a little.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=64)** So inside the div, we set up the progress bar div, and set its range to 100%.
>
> **[1:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=70)** So it's a div.
>
> **[1:14](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=74)** And say class equal.
>
> **[1:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=79)** Progress bar.
>
> **[1:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=82)** Space.
>
> **[1:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=84)** Progress bar striped.
>
> **[1:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=89)** So that we can see the striped animation.
>
> **[1:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=92)** And then we animate it by adding the class progress bar animated.
>
> **[1:41](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=101)** To make the animation full length, set the style property.
>
> **[1:47](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=107)** And inside there we set the width to 100%.
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=112)** So we have set our div with the class of progress, as a wrapper for our progress body.
>
> **[2:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=120)** Let's save that and check it out in the browser.
>
> **[2:03](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=123)** So, here in the browser, let's refresh the page.
>
> **[2:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=128)** And here, there is our animated progress bar.
>
> **[2:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=132)** Now we need to keep this progress bar hidden by default, and show it only when the transaction with the backend is in progress.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=139)** So, let's head back to VS code to make that happen.
>
> **[2:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=144)** So the first thing we're going to do is add an ID to our progress bar container div.
>
> **[2:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=148)** That's the div with a class of progress.
>
> **[2:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=150)** So I'm just going to say ID equals.
>
> **[2:34](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=154)** And give it an idea of transcription progress bar.
>
> **[2:43](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=163)** Now I'm going to copy this ID, and add the CSS property that will make sure that it is hidden by default.
>
> **[2:50](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=170)** So scroll up.
>
> **[2:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=173)** And just below the transcribed text property, I'm going to add another one with the ID I just copied.
>
> **[3:01](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=181)** And inside here we're going to set visibility hidden.
>
> **[3:08](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=188)** This property is going to hide our progress bar by default.
>
> **[3:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=192)** Now let's refresh our page.
>
> **[3:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=196)** As you can see, our progress bar is now hidden by default.
>
> **[3:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=199)** Awesome.
>
> **[3:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=200)** Now let's add the logic to show and add our progress bar based on the state of the transcription operation.
>
> **[3:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=207)** Back in VS Code, let's scroll down to the JavaScript section.
>
> **[3:32](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=212)** And first we get an angle on our progress bar using the ID.
>
> **[3:37](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=217)** Const.
>
> **[3:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=220)** Transcription progress bar, equals.
>
> **[3:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=232)** Now that we have an angle on our ID, let us set the progress bar to appear when the transaction is ongoing, and disappear when the transcription is done.
>
> **[4:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=242)** Let's scroll down.
>
> **[4:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=244)** And just above our try card block, let us make the progress bar visible.
>
> **[4:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=250)** Say transaction progress bar, dot style, dot visibility,
>
> **[4:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=259)** equals visible.
>
> **[4:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=263)** Perfect.
>
> **[4:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=264)** Now let's make sure that we hide this progress bar when the transcription operation is done or when an error occurs.
>
> **[4:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=271)** So I'm just going to copy this, scroll down, and just after the if statement that checks the response data, I'll paste this.
>
> **[4:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=285)** And we set the progress bar back to hidden.
>
> **[4:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=291)** Let's also go into our error block.
>
> **[4:53](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=293)** And add this just before the alert.
>
> **[4:58](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=298)** And set it to hidden, also.
>
> **[5:02](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=302)** So when an error occurs, the progress bar once again disappears.
>
> **[5:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=306)** Now let's save the page and test this out.
>
> **[5:10](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=310)** In the browser, once again, refresh the page to make sure that your changes have kicked in.
>
> **[5:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=316)** Now with the page refreshed, let's test our progress indicator.
>
> **[5:20](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=320)** Select a file.
>
> **[5:26](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=326)** Open.
>
> **[5:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=329)** Now let's click Transcribe.
>
> **[5:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=331)** You see our progress bar, the operation is ongoing, and we're just going to wait for it to be done.
>
> **[5:38](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=338)** And we'll see our progress bar disappear once the operation is done, and our transcription displayed on the right hand side.
>
> **[5:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=345)** As you can see, once our transcription loads up, the progress bar disappears.
>
> **[5:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/adding-a-progress-indicator?u=76281980&t=351)** And now we have a way to give the users a visual feedback that the transcription process is ongoing, so that they can be patient to wait 'til it's done.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), default. (3), default, (1), const (1), this, (1)
> **CLI Commands:** make (6)
> **UI Navigation:** scroll down (4), scroll up (1)
> **Tools:** vs code (4)
> **Env Vars:** css (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Editing transcriptions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=0)** - [Instructor] As you may have noticed, even though the transcription results are great, it's not perfect.
>
> **[0:06](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=6)** Sometimes you would like to edit this transcription before you copy it and use for your use case.
>
> **[0:11](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=11)** But how do we make the transcription that is returned editable?
>
> **[0:15](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=15)** One clever way to do this is to load the transcription returned into an editable text field instead of a div container.
>
> **[0:22](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=22)** So, let's do just that.
>
> **[0:25](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=25)** Here in VS Code, we start by commenting out our div.
>
> **[0:28](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=28)** That's a transcription div.
>
> **[0:29](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=29)** The transcription display div is commented out and we're going to be replacing it with the textarea, textarea element.
>
> **[0:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=45)** We're going to be sizing up the textarea element using the cols and rows attributes.
>
> **[0:55](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=55)** For continuity of our code, let's also give the text area the same id as we did for the transcription display div.
>
> **[1:04](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=64)** Just copy that from here and paste it here.
>
> **[1:07](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=67)** The final change we need to make has to do with how we load the transcription into our page.
>
> **[1:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=72)** Let's scroll down to the section of our page where that is done.
>
> **[1:16](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=76)** Scroll down and find the displayTranscription function.
>
> **[1:21](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=81)** Now, instead of using innerHTML to load our transcription, we switch the div to value, which is more appropriate for a text area element.
>
> **[1:30](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=90)** With this done, we can then save the file and let's test this out in our browser.
>
> **[1:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=95)** Now, here in our browser... Once again, let us refresh the page.
>
> **[1:40](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=100)** Select our video.
>
> **[1:46](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=106)** Open it.
>
> **[1:49](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=109)** Click Transcribe.
>
> **[1:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=111)** Our progress by it's showing.
>
> **[1:52](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=112)** Nice.
>
> **[1:54](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=114)** And now when the transcription process is done, we can go into the results and edit the transcription.
>
> **[2:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=120)** For example, I know that this is ed and not edge, so I can change this.
>
> **[2:05](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=125)** This VLC is actually PHP, so I'm going to change it to PHP.
>
> **[2:09](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=129)** I also know that this is not HP, so I'm also going to be changing it to PHP, and you can continue to edit this transcription as much as you want.
>
> **[2:19](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=139)** And once you're done, you can then copy it and use it for any use case you have intended.
>
> **[2:24](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=144)** Now we have a fully functional video transcribing tool making use of Google's speech-to-text API that also allows us to edit the results, to refine it to its best shape.
>
> **[2:35](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/editing-transcriptions?u=76281980&t=155)** How awesome is that?

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case. (1), function (1), switch (1), this. (1)
> **CLI Commands:** php (3), make (2), find (1)
> **Env Vars:** php (3), vlc (1), api (1)
> **Code Identifiers:** displaytranscription (1), innerhtml (1)
> **UI Navigation:** scroll down (2)
> **Tools:** vs code (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=0)** - [Fikayo] I hope you enjoyed building our AI video transcribing tool, and I hope that this project has given you a better understanding into implementing AI features in your software applications.
>
> **[0:12](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=12)** I'd like to mention that there is an exact mirror of this course in the LinkedIn Learning Library, where you get to use OpenAI's API instead of the Google's Speech-to-Text API.
>
> **[0:23](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=23)** So if you're interested in that, I advise that you check it out.
>
> **[0:27](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=27)** The LinkedIn Learning Library is also full of a ton of AI courses.
>
> **[0:31](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=31)** Whether you're a programmer just looking for APIs to use to add AI POD features to your applications, or you are a data scientist that wants to build their own AI models from scratch, there are courses in the library for every use case.
>
> **[0:45](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=45)** Once again, I am Fikayo Adepoju, and you can reach out to me on any of my socials displayed on the screen.
>
> **[0:51](https://www.linkedin.com/learning/building-a-video-transcriber-with-node-js-and-google-ai-speech-to-text-api/next-steps?u=76281980&t=51)** Happy coding.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), pod (1)
> **Code Keywords:** case. (1)
> **Definitions:** is an  (1)
> **Speakers:** - [fikayo] (1)


## Path Context

### In [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]
← [[Building with Google Gemini Advanced and Ultra]] | **5 of 7** | [[Google Cloud Platform for Machine Learning Essential Training]] →

## Appears In

- [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development
