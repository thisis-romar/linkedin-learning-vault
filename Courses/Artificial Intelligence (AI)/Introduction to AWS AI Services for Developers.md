---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-aws-ai-services-for-developers
url: "https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers"
duration_minutes: 51
duration: 51m
level: Beginner
updated: 5/8/2024
learners: 99574
skills:
  - AI Software Development
  - Artificial Intelligence (AI)
  - Amazon Web Services (AWS)
exercise_files: true
github: "https://github.com/LinkedInLearning/introduction-to-aws-ai-services-for-developers-3808105"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGq2TjllTTTyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715042358770?e=2147483647&amp;v=beta&amp;t=vPk7rvzturvJBIFqDrZbRiTHLJTyzyN-mamvWlBa5IE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your AWS Development Skills- Exploring Complex Application Development]]'
prev_courses:
  - '[[Aws Essential Training For Developers]]'
next_courses:
  - '[[AWS for Developers- CLI Tips]]'
path_nav: '[{"path":"Advance Your AWS Development Skills- Exploring Complex Application Development","position":2,"total":6,"prev":"Aws Essential Training For Developers","next":"AWS for Developers- CLI Tips"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/amazon-web-services-aws
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20AWS%20AI%20Services%20for%20Developers.md)

![Introduction to AWS AI Services for Developers](https://media.licdn.com/dms/image/v2/D560DAQGq2TjllTTTyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715042358770?e=2147483647&amp;v=beta&amp;t=vPk7rvzturvJBIFqDrZbRiTHLJTyzyN-mamvWlBa5IE)

# Introduction to AWS AI Services for Developers

> Artificial Intelligence is assisting developers by speeding up their workflows, automating boilerplate code generation, and giving them an extra set of eyes to look for security vulnerabilities and performance issues within their applications. Teams of any size can benefit by using a new set of AI-assisted development tools released by Amazon Web Services. In this course, Halvanta founder Jeremy V

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers) | 51m | Beginner | 100K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [AI assisted development with AWS](#ai-assisted-development-with-aws)
  - [What you should know](#what-you-should-know)
- [**1. AWS CodeWhisperer**](#1-aws-codewhisperer) (3 videos)
  - [AI coding assistants](#ai-coding-assistants)
  - [AWS Toolkit](#aws-toolkit)
  - [Autogenerating code](#autogenerating-code)
- [**2. CodeGuru Security**](#2-codeguru-security) (8 videos)
  - [Shift-left testing](#shift-left-testing)
  - [AWS CodeGuru Security](#aws-codeguru-security)
  - [Track changes with AWS CodeCommit](#track-changes-with-aws-codecommit)
  - [Visual Studio Code and AWS CodeCommit](#visual-studio-code-and-aws-codecommit)
  - [CodeGuru with AWS CodePipeline](#codeguru-with-aws-codepipeline)
  - [CodeGuru Dashboard](#codeguru-dashboard)
  - [CodeGuru Detector Library](#codeguru-detector-library)
  - [Closing a finding in CodeGuru Security](#closing-a-finding-in-codeguru-security)
- [**3. CodeGuru Profiler**](#3-codeguru-profiler) (5 videos)
  - [Shift-right testing](#shift-right-testing)
  - [CodeGuru Profiler](#codeguru-profiler)
  - [CodeGuru Profiler with Python](#codeguru-profiler-with-python)
  - [CodeGuru Profiler groups](#codeguru-profiler-groups)
  - [CodeGuru Profiler reports](#codeguru-profiler-reports)
- [**Conclusion**](#conclusion) (2 videos)
  - [Removing costs from CodeGuru](#removing-costs-from-codeguru)
  - [More AI services](#more-ai-services)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [AI assisted development with AWS](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=0)** Is [[Artificial Intelligence (AI)|artificial intelligence]] going to lead to a robot revolution that overthrows humanity?
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=7)** Maybe, but not today.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=9)** Can the headlines be believed that AI will replace all developers?
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=15)** No.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=16)** Just like the calculator sped up people's ability to do quick calculations, AI can assist developers by making us quicker and helping us to write better code and catch mistakes.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=28)** [[Amazon Web Services (AWS)|Amazon Web Services]] has several AI tools for assisting developers.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=33)** My name is JV, and I'm not AI-generated yet.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-assisted-development-with-aws?u=76281980&t=37)** Let me show you how you can make friends with your new robot overlords.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)

#### [What you should know](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=0)** If you're new to working with [[Amazon Web Services (AWS)|Amazon Web Services]], I highly recommend, you check out my other course first, [[Aws Essential Training For Developers]], to learn about the fundamentals of creating a new AWS account for the first time and some of the best practices for managing user accounts.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=19)** In this course, I'll be using an IAM user within my AWS account.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=25)** So if these terms are new to you, definitely check out the first part of my essentials course to get a walkthrough of how to set up your own IAM user.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=34)** And if you've worked with any kind of AI before, you'll know that the results can be unpredictable.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=42)** We'll look at some services that use [[Generative AI]], so if your results don't exactly match mine, that's okay.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=50)** The goal of this course is to show you what's possible with AI as a developer, not to create working code that will execute. Even though the code examples are in [[Python (Programming Language)|Python]], you don't have to know any Python to go through this course.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=66)** In your mind, when you see Python on the screen, just substitute out your preferred language of choice.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=74)** A few of the AWS services we'll be looking at are currently in a preview state, so some of the screens may not look exactly the same for you as AWS makes improvements.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=85)** Check out the exercise files, Q&A, and comments for this course for any updated notes on things that might have changed in AWS.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=94)** There's a [[GitHub]] repository for this course that includes forks of sample code provided by AWS for testing out these services.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=103)** If any of the sample code changes as these services change, I'll update the repository.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/what-you-should-know?u=76281980&t=109)** All right. Let's get into the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Generative AI]] (1), [[GitHub]] (1)
> **CLI Commands:** aws (7), python (3)
> **Env Vars:** aws (7), iam (2)
> **Exercise Files:** sample code (2), exercise files (1)
> **Tools:** github (1)
> **Prerequisites:** set up (1)


### 1. AWS CodeWhisperer

[↑ Back to Table of Contents](#table-of-contents)

#### [AI coding assistants](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=0)** A coding assistant that is built into your code editor can scan your existing source code and as you type, make recommendations to you that you can use to autocomplete parts of your code.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=12)** So if in your source code, you have a variable called email_address that stores the email address of the current user, and when you start typing the variable name, email, the autocomplete function of your code assistant will pop up with a dialog under your [[Cursor]] and try to fill in the underscore address part for you.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=34)** Coding assistant can also download a language server that runs in the background on your computer that is programmed with the rules and documentation of your particular programming language.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=46)** [[Microsoft]] calls this feature IntelliSense, but other editors have similar features.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=53)** So if you type 'print' to use the print function and then type an open parentheses to start the parameter list for your function call, the language server can show you helpful tooltips about this function.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=66)** These tools have existed in programming for many years now, and they're great because you don't always have to have the documentation up, and it can remind you of small details of your language that you don't have to keep in your head, especially for functions and classes you may not use every day.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=85)** But what if your code editor could peer into the future and know the next block of code that you'll need to write?
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=94)** Pairing [[Artificial Intelligence (AI)|artificial intelligence]] with your coding assistant takes autocompletion to the next level.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=102)** Using a large language model or LLM, which is like your phone keyboard's auto suggestion feature, if it was bitten by a radioactive spider and gained superpowers, allowing your code editor to pull not only from your source code's documentation, but also from millions of lines of code from other projects.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=125)** This allows it to guess at the next chunk of code that you're about to write, and it can suggest for you an entire paragraph of code custom written for your context with your variable names.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=140)** Depending on the sources that have been fed into the large language model, this code may have stronger security and may include well-researched best practices that have already solved problems you haven't even encountered yet when, say, validating an email address.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=158)** There are several AI coding assistants that are being offered right now, and more are being released all the time.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=166)** [[GitHub Copilot]] was released by Microsoft and easily plugs into the Visual Studio [[Microsoft Products|products]].
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=174)** If you're interested in seeing what GitHub Copilot can do for you, search our catalog specifically for the keywords of GitHub Copilot.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=182)** The branding of [[Microsoft Copilot|Copilot]] is being used in other products to augment other [[Microsoft Products]], but GitHub Copilot is specifically for code editors.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=194)** Not to be upstaged, Amazon has also launched their own AI coding assistant called CodeWhisperer.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=203)** It has similar features to Copilot, but whereas Copilot was trained on more general code bases, CodeWhisperer has targeted training that helps it produce better suggestions when writing code for [[Amazon Web Services (AWS)|Amazon Web Services]].
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=218)** It has a tighter integration into the AWS ecosystem, and it is trained for making code that conforms to AWS best practices.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/ai-coding-assistants?u=76281980&t=228)** Let's set up CodeWhisperer and see what code it can auto suggest for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (4), [[Microsoft Copilot|Copilot]] (3), [[Microsoft]] (2), [[Microsoft Products|Products]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Tools:** github (4), visual studio (1)
> **CLI Commands:** aws (2), make (1)
> **Env Vars:** aws (2), llm (1)
> **Exercise Files:** source code (3)
> **Prerequisites:** you'll need (1), set up (1)
> **Code Identifiers:** email_address (1)
> **Documentation:** the documentation (1)

#### [AWS Toolkit](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=0)** CodeWhisperer will integrate into several different integrated development environments.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=6)** Visual Studio Code is one of the most popular IDEs and does a great job of showing off the capabilities of CodeWhisperer.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=15)** If you don't already have Visual Studio Code installed, you can download it from [[Microsoft]]'s website.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=22)** Within Visual Studio Code, in the lower left corner, click the settings gear and click on "Extensions."
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=32)** In the search, type, 'AWS toolkit'. Click "Install" on the AWS toolkit card.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=41)** Click on the "Use for free no AWS account required" button.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=49)** To use CodeWhisperer through the AWS toolkit, you'll need to register for an AWS builder ID.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=56)** Click "Open in browser" and then in the browser window, confirm the code that you see.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=63)** If your organization is already using CodeWhisperer, you can sign on with your AWS IAM account if you've been granted access to CodeWhisperer.
>
> **[1:13](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=73)** Complete the form to create a new builder ID or use an existing ID if you already have this account with AWS.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=83)** After you've signed in, you may be asked to allow AWS toolkit to access your data.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=93)** If you see this screen, click the "Allow" button.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=97)** Close the browser window and go back to Visual Studio Code.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-toolkit?u=76281980&t=102)** Once you've signed in to your builder ID and the AWS toolkit is signed in, you can now get access to some of the development tools available to you from AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (1)
> **Env Vars:** aws (10), iam (1)
> **CLI Commands:** aws (10)
> **Tools:** visual studio (4)
> **UI Navigation:** click on (2)
> **Prerequisites:** install (1), you'll need (1)
> **Cross-References:** go back to (1)

#### [Autogenerating code](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=0)** Amazon has some sample code that they've provided to demo the features of Code Guru, and we can use the sample code to see what CodeWhisperer can do.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=10)** Included with this course is a [[GitHub]] repository that includes forks of these sample Amazon repositories.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=19)** You'll need to already have [[Git]] set up within Visual Studio Code, but if you don't, [[Microsoft]] has a great tutorial in the docs for Visual Studio Code.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=30)** If this is your first time working with Git, we've got several courses in the catalog.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=36)** They can give you an overview of working with source control, but if this is your first time, I'll still walk you through all of the commands.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=46)** Inside a Visual Studio Code, in the main navigation, click on "Terminal" and click on "New Terminal."
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=55)** If you already have a bottom pane up, you can also click on the terminal tab and start a new terminal session from there.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=63)** Inside the terminal, type, 'git, space, dash, dash, version' and hit "Enter."
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=70)** And this is going to make sure that you've got Git installed and the path is working correctly.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=76)** Now let's see where you're currently at on your computer in this terminal window by typing PWD and hitting enter.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=85)** This will show you the full path to where the repository is going to clone to.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=91)** Then type, 'git space, clone' and paste in the URL for this course's Git repository and then hit "Enter."
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=106)** If you're asked to authorize the host, type yes, and hit enter.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=111)** Now that you have your own work and copy of the code cloned within Visual Studio Code, go to file and then open and browse to the folder where you cloned your repository.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=127)** Click "Yes, I trust the authors."
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=131)** Within the working copy of this repository, go into the Amazon-codeguru-reviewer-sample-app-[[Python (Programming Language)|Python]] folder.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=144)** Click inside the SRC folder and then go into the main and Python folder, and then click on the lambda_handler.py file.
>
> **[2:38](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=158)** If Visual Studio asks you to install the recommended Python extension, click the 'install' button.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=165)** And once that's been installed, click back on the lambda_handler.py file.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=172)** I'm not going to expect you to be a Python expert and read this code, but the sample code uses a few different AWS services to load in some records into Kinesis, pull a list of topic names from Simple Notification Service, and it has a few other bits of Python that interact with AWS.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=193)** This first little chunk of code loads some sample data into Python from a file called sum_file_path.txt.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=204)** Well, we don't have some filepath.txt.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=208)** Let's imagine you had this file stored in an S3 bucket, and you want to pull that file into your code, but you don't remember any of the Python for this.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=221)** Check this out.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=223)** Start a new Python code comment by typing hashtag, and then type a space, and then type out the code comment of the code that you want to write.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=235)** So type, connect to S3 and then hit "Enter."
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=242)** You'll see that CodeWhisperer will fill in an autosuggestion of the next line.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=248)** Press the tab key to accept the suggestion.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=253)** Hit "Enter" to move to the next line.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=255)** You'll see that it continues to guess at what the next line should be.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=261)** Hit "Tab" and enter again.
>
> **[4:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=264)** If a line has indentation, you'll have to add the indentation by hitting the tab a few times and then keep hitting enter to fill out the next line.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=275)** And look at that.
>
> **[4:38](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=278)** We've got Python code that connects us to S3.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=283)** So now that we have a connection to S3, we need to read our imaginary text file from the S3 bucket.
>
> **[4:52](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=292)** So start another Python code, comment with hashtag and then type, 'Load a file from S3 into a variable' and hit "Enter."
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=304)** If you hit "Tab" and enter to keep autosuggesting lines, it'll complete for you the code you need to load this text file into a local Python variable.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=317)** It's showing you where you need to fill in your own bucket name and object key for your text file.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/autogenerating-code?u=76281980&t=325)** It will continue to autosuggest code when it has hints for you, and the code will usually be context aware, so it'll even include variable names used within the [[Representational State Transfer (REST)|rest]] of your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (11), [[Git]] (6), [[GitHub]] (1), [[Microsoft]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (11), git (6), aws (2), make (1)
> **Tools:** terminal (6), visual studio (5), github (1)
> **Env Vars:** aws (2), pwd (1), url (1), src (1)
> **File Paths:** lambda_handler.py (2), sum_file_path.txt (1), filepath.txt (1)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** install (2), you'll need (1), set up (1)
> **Code Identifiers:** lambda_handler (2), sum_file_path (1)


### 2. CodeGuru Security

[↑ Back to Table of Contents](#table-of-contents)

#### [Shift-left testing](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=0)** [[Artificial Intelligence (AI)|Artificial intelligence]] isn't only transforming the way you write code, but it's also transforming the ways that you can test your code for errors.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=10)** The [[Software Development]] Lifecycle, abbreviated as SDLC, refers to the entire timeline of the planning, design and creation of your code, to its deployment to real users and even its eventual sunset.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=27)** Even when you're using [[Agile Development|agile]] development practices to build your software in short iterations, you'll be doing shorter cycles of the SDLC.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=38)** People define the phases of the software development lifecycle differently, but generally, it's broken down into these phases.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=49)** Planning; where you figure out what your software will do.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=53)** Design; where you sketch out how your software will look and how you might go about constructing it.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=59)** Development; where you write the code.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=62)** Testing; where you determine that everything works as intended.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=67)** Deployment; where real users start using your software.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=71)** And finally, maintenance; where you support the code in use and fix bugs.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=78)** In practice, people have noticed that if you place more of the emphasis on testing your code earlier in the development life cycle while it's actually being created, you can catch costly mistakes before your software enters the testing phase where these bugs could potentially get missed and get pushed into production.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=100)** This is called shift left testing because you're moving the testing phase more to the left side and earlier in your development process.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=111)** Some of these practices include [[Continuous Integration (CI)|continuous integration]] or CI and [[Test-Driven Development]] abbreviated as TDD, where you are continually testing your code and the new code from your teammates against a set of tests you defined ahead of time.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=131)** But these tests only catch the bugs you programmed them to look for.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=136)** What about all the bugs and software vulnerabilities you didn't write tests for?
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-left-testing?u=76281980&t=142)** [[Amazon Web Services (AWS)|Amazon Web Services]] has a solution for that with CodeGuru.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Agile Development|Agile]] (1), [[Continuous Integration (CI)|Continuous integration]] (1), [[Test-Driven Development]] (1)
> **Env Vars:** sdlc (2), tdd (1)
> **Cross-References:** earlier in (2)
> **Definitions:** refers to (1), is called (1)

#### [AWS CodeGuru Security](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=0)** There are a few [[Microsoft Products|products]] under the name of CodeGuru in [[Amazon Web Services (AWS)|Amazon Web Services]].
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=6)** The first one we're going to look at is called CodeGuru Security.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=11)** CodeGuru security will look at your source code and scan it for security vulnerabilities and known performance bugs.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=20)** It can integrate directly into your code editor like Visual Studio, or you can connect it to your build process, and it can scan your source code every time a developer changes code within your code repository.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=37)** It works with several popular programming languages such as [[JavaScript]], [[Python (Programming Language)|Python]], and [[Java]].
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=45)** Another product that uses the CodeGuru name is called CodeGuru Reviewer.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=53)** The CodeGuru Reviewer has some similar features to CodeGuru security and it's possible that AWS will over time replace CodeGuru Reviewer with CodeGuru security.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=67)** So I'm not going to go in-depth with that product.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=71)** The last service that we'll look at is called CodeGuru Profiler, and this product will help you inspect your source code as it runs in production for performance issues.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=84)** We'll dive into CodeGuru Profiler in a later chapter.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/aws-codeguru-security?u=76281980&t=89)** For now, let's take a look at CodeGuru Security and see what it can find wrong with our sample Python code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Microsoft Products|Products]] (1), [[JavaScript]] (1), [[Java]] (1)
> **CLI Commands:** python (2), aws (1), find (1)
> **Exercise Files:** source code (3)
> **Definitions:** is called (3)
> **Env Vars:** aws (1)
> **Tools:** visual studio (1)
> **Analogies:** such as (1)

#### [Track changes with AWS CodeCommit](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=0)** You can integrate CodeGuru Security into your development pipeline using a variety of the popular tools for source control and [[Continuous Integration (CI)|continuous integration]].
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=10)** The documentation has guides to integrate CodeGuru security with [[GitHub]], GitLab, [[Bitbucket]], several IDEs, and you can even use the AWS API through the AWS [[CLI]] to write your own integration.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=28)** AWS has its own integration into its own CI/CD product, which is called AWS CodePipeline.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=37)** So we're going to keep all of this within Amazon's ecosystem and tie this into our sample source code, which we're going to place in an AWS CdeCommit repository, which is like Amazon's version of GitHub.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=53)** To create a new CodeCommit repository from within your AWS console, type, 'CodeCommit' in the services search bar and click on the entry that auto completes.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=65)** On the left hand side under source, make sure that repositories is selected.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=71)** Click on the "Create repository" button in the upper right hand corner.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=76)** For repository name, type, 'CodeGuruSecuritycoursedemo' with no spaces in between the words, and then add some random numbers to the end of the repo name to make this unique.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=91)** At the bottom, click the "Create" button.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=95)** In the services search bar at the top, type, 'IAM' and then click on the entry that auto completes.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=105)** Under users on the left side, select your IAM user that you're currently logged in as.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=112)** Click on the "Security Credentials" tab.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=116)** Under HTTPS, 'Get credentials for AWS CodeCommit', click "Generate credentials."
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=125)** You'll need to save the username and password that's on the screen, because you'll only ever see it once.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=134)** When you're done, click the "Close" button.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=139)** Switch back to the code commit dashboard.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=145)** Now, next to your repository name, under the clone URL column, click the HTTPS option.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/track-changes-with-aws-codecommit?u=76281980&t=154)** Now that we have URL for our CodeCommit repository copied to our clipboard, we're going to clone this repository into our Visual Studio Code environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[Bitbucket]] (1), [[CLI]] (1)
> **Env Vars:** aws (7), iam (2), https (2), url (2), api (1)
> **CLI Commands:** aws (7), make (2), cd (1)
> **Tools:** github (2), gitlab (1), bitbucket (1), aws console (1), visual studio (1)
> **UI Navigation:** click on (4)
> **Documentation:** the documentation (1)
> **Exercise Files:** source code (1)
> **Definitions:** is called (1)

#### [Visual Studio Code and AWS CodeCommit](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=0)** In Visual Studio Code, go up to the top menu, click "Terminal" and select New Terminal.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=8)** Since we're currently in the working copy of the course's sample repo, type, 'CD, space, dot, dot' to go up a directory.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=19)** Now, type, '[[Git]], space, clone, space' and then paste in the URL of the CodeCommit repository that we just created.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=30)** Visual Studio Code should prompt you at the top for the username and password that you just created under your IAM account.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=40)** Click on the "Explorer" tab within Visual Studio Code on the left hand side.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=47)** On the [[Python (Programming Language)|Python]] file from the course sample repo that we used earlier, right-click on it and click "Copy."
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=55)** Under the top menu, under file, select, 'Open Folder.'
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=60)** Navigate to the CodeGuru Security Course demo folder that we just created on our computers within the terminal, when we cloned our code commit repository.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=72)** Click the "Yes, I trust the author's" button.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=76)** Then on the left, under the Explorer, right-click within this folder and click "Paste."
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=84)** In the top menu, under terminal, click on "New terminal."
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=89)** You should be within the folder of the cloned repository.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=94)** Type, 'Git, space, status' to get a status of this git work and copy.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=101)** We have our Python file in an untracked state, so let's add it to the repo.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=106)** First, type, 'Git, space add, space, dash, A' This will add all of the untracked files into a commit.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=119)** Now, type, 'Git, space, commit, space, dash m space' and then within double quotes type in your commit message.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=129)** I'm going to type, "first commit."
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=132)** Great.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=134)** Now, type, 'Git, space, push' to push this code up to CodeCommit.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=141)** Back in the AWS console, click on the "Refresh" button.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=146)** And now we can look at the code that we just committed to our CodeCommit repository.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=152)** Click on the name of your repository.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/visual-studio-code-and-aws-codecommit?u=76281980&t=156)** Now that we have our sample code in CodeCommit, let's use code build to tie CodeGuru Security into our build process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (6), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** git (6), python (2), cd (1), aws (1)
> **Tools:** terminal (5), visual studio (3), aws console (1)
> **UI Navigation:** click on (4), right-click (2), navigate to (1)
> **Env Vars:** url (1), iam (1), aws (1)
> **Exercise Files:** sample code (1)

#### [CodeGuru with AWS CodePipeline](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=0)** In the services search bar, type, 'CodeGuru' and click on the entry that auto completes.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=7)** On the left hand side, under security, click on "Integrations."
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=12)** Click the "Integrate with AWS CodePipeline" button.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=18)** Under Step 1, Click on the "Open template in CloudFormation" button.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=25)** For the stack name type, 'CodeGguruSsecurityDemoWithCodeBuid'
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=34)** Under capabilities, click the "I acknowledge that AWS CloudFormation might create IAM resources with custom names."
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=45)** And then click the "Create stack" button.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=50)** Click the "Refresh" button to get the latest updated results about the steps within the CloudFormation template.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=57)** You might have to click "Refresh" for several minutes until this step completes.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=62)** When the template indicates that it has a status of create_complete, you can now close this new tab that it opened.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=72)** Back in the CodeGuru setup tab, under Step 2, click on the "CodePipeline console" link.
>
> **[1:20](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=80)** Click the "Create Pipeline" button.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=84)** For pipeline name type, 'CodeGuruSecurityDemoPipeline' with no spaces.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=92)** Click "Next" at the bottom of this step.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=96)** Under the source provider pull down, click "AWS Code Commit." Under repository name, click inside the field and click on the Code Guru Security course demo repo that you created.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=112)** Under the branch name field, click, and the only branch that should show up is the one labeled main.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=119)** Click the next button at the bottom of this step.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=123)** Under Build provider, click on "AWS CodeBuild."
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=129)** Make sure that you have the region selected where your AWS Code Commit project is at, and the region where you ran the CloudFormation template from earlier.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=140)** Under project name, click within the field and select CodeGuru Security.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=147)** This was created for us by the CloudFormation template.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=151)** Click the next button at the bottom of this wizard then click the "Skip Deploy stage" button.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=159)** If you want a full CI/CD Pipeline created for your project, you'll need to decide where you will deploy your project to.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=167)** But since this is just an example using some sample code, we'll skip the deploy stage.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=174)** At the bottom of this summary page, click the "Create Pipeline" button.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-with-aws-codepipeline?u=76281980&t=181)** Now you should have a CodePipeline set up for your next step.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (5), make (1), cd (1)
> **Env Vars:** aws (5), iam (1)
> **UI Navigation:** click on (6)
> **Exercise Files:** template (5), sample code (1)
> **Prerequisites:** setup (1), you'll need (1), set up (1)
> **Code Identifiers:** create_complete (1)

#### [CodeGuru Dashboard](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=0)** In the AWS console in the service's search bar, type, 'CodeGuru' and click on the entry that auto completes.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=8)** Under security, on the left, click on "Scans."
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=12)** Underneath the scans table, click on the "CodePipeline scan."
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=18)** This dashboard shows the results of the latest scan on our source code when the CodeBuild step ran from within our CodePipeline.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=27)** Underneath the metrics tab, it shows us that CodeGuru Security has found seven findings it would like us to address within our code.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=37)** Click on the "Findings" tab.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=41)** The findings can be sorted by severity so you can work on the most severe issues first.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=50)** Click on one of the vulnerabilities listed as CWE400, 664 resource leak.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=60)** CodeGuru will give you a description of the finding, and it'll even give you some suggestions on how to fix this code.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=70)** Look at the code highlighted underneath the code snippet.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=74)** It's telling us that using the open function like this can cause resource leaks, and that may cause [[Python (Programming Language)|Python]] to eat up memory resources on the server if a bunch of people are accessing this code, or the files that's opening are really big.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=90)** Under the vulnerability name, click on the "Resource leak" link.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=97)** This opens a new tab in the CodeGuru detector library.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-dashboard?u=76281980&t=103)** Let's dive into what the detector library is telling us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (6)
> **CLI Commands:** aws (1), python (1)
> **Env Vars:** aws (1), cwe400 (1)
> **Tools:** aws console (1)
> **Exercise Files:** source code (1)

#### [CodeGuru Detector Library](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=0)** The CodeGuru detector library contains the vulnerabilities and the rules that CodeGuru is using to scan your code.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=9)** On the left hand side of the page, you can see all the detectors that are currently programmed for [[Python (Programming Language)|Python]], and Amazon is adding more and more to make CodeGuru even better.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=22)** You can click on the links to learn more about the vulnerabilities as they were originally published.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=30)** You can use the breadcrumbs at the top to click on Python.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=35)** This will give you a short description of each detector.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=41)** Click "Browse by severity" and then click on "Critical Severity."
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=48)** Click on "Hardcoded credentials".
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=53)** In the example code shown below, you'll see that CodeGuru is scanning your code for anywhere that you might have copy pasted your AWS secret access keys directly into your source code.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=66)** This continues to be a common source of security breaches today, because the developer can mistakenly use their access credentials directly within their source code, and then that source code either becomes compromised or becomes included in a public code repository.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=83)** It has become very easy for hackers to scan large numbers of public repositories looking for these access keys, and then once they have your access keys, they can use that for whatever permissions your account has been granted to steal other data in your AWS account.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=101)** CodeGuru will also scan access keys from other services besides AWS.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=107)** So if your SendGrid credentials are pasted directly into your code, it'll also show up as a finding in CodeGuru Security.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=115)** You will also see some sample code on how to fix these issues, which can help you close out an issue quickly before this code ends up in production.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=125)** Close this new tab that CodeGuru Security opened.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-detector-library?u=76281980&t=129)** Let's fix one of the issues within our sample code and close out our first finding in CodeGuru.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** aws (3), python (2), make (1)
> **Exercise Files:** source code (3), sample code (2)
> **UI Navigation:** click on (4)
> **Env Vars:** aws (3)

#### [Closing a finding in CodeGuru Security](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=0)** Click on the "Resource leak" underneath the vulnerability name again.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=5)** The detector library is telling us that to fix our sample code, we need to change how we call the open function and then loop over each line within that file.
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=17)** Back in Visual Studio Code, scroll down to the line number that was detected by CodeGuru Security.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=26)** To fix this, change the very beginning of this line to the keyword width.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=34)** Then it should proceed with the original open function and at the end of that line, type, 'as, space, flp, colon.'
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=47)** And then we need to indent all the code that's underneath
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=55)** this statement.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=57)** And then a few lines down in the code, we have the same problem.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=63)** So on this line number, change this line to width, space, the original open function, and then at the end of that line, type, 'as, space, FP, colon.'
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=79)** And just like before, we'll need to indent all the lines that come after this statement.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=86)** And now, this should have fixed the problem. Underneath file, Click "Save" or command S or ctrl S for [[Windows]].
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=97)** Under the terminal tab, type, '[[Git]], space, status' and you'll see that our sample file has been modified.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=107)** Type, 'Git, space, commit space, dash am, space' and then within double quotes, put in your commit message.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=119)** I'm going to call mine "fixed open call" and then hit "Enter."
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=127)** Type 'git push' to send the change back up to CodeCommit.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=132)** Back in the AWS console, type CodePipeline in the service's search bar and click on the entry that auto completes.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=141)** After a few moments, you should see the latest execution status switch to in-progress as your CodePipeline runs.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=149)** Click the "Refresh" button periodically to check on its status.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=155)** Once the status has changed to succeded, switch back to the CodeGuru console.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=164)** Click on findings underneath the security section.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=171)** You'll see that the findings that we just fixed are now gone from the list.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=178)** Congratulations.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=180)** You just fixed your first finding.
>
> **[3:04](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=184)** Back in Visual Studio Code, click on "CodeWhisperer" in the status bar across the bottom.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=191)** Then click on "Run Security scan."
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=195)** You can also run CodeGuru Security directly from VS Code.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=202)** It will show you any findings underneath the problems tab.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=207)** It won't send these findings up to the Cloud Guru Security dashboard for the [[Representational State Transfer (REST)|rest]] of your team to see.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/closing-a-finding-in-codeguru-security?u=76281980&t=213)** But running a security scan within VS Code is a great way to check your code before you commit it, just to see if it's going to detect any new findings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (3), [[Windows]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **UI Navigation:** click on (5), scroll down (1), switch to (1)
> **Tools:** visual studio (2), vs code (2), terminal (1), aws console (1)
> **CLI Commands:** git (3), aws (1)
> **Env Vars:** aws (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)


### 3. CodeGuru Profiler

[↑ Back to Table of Contents](#table-of-contents)

#### [Shift-right testing](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=0)** Similar to shift-left testing, which shifts the focus on testing into the development stage, shift-right testing continues the testing process past the deployment phases.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=14)** In shift-right testing, you will test your software under real world conditions to simulate what will happen when users do things with your software that you might not have tests for.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=26)** There are strategies where you send duplicate traffic patterns of your production traffic to a testing version of your app to see how it will respond, or you can send a portion of your real user traffic to a new version of your app to watch for potential performance issues before sending all your user traffic to your new version.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=50)** A key component of getting observability into how your application is performing in the real world is to install an Application Performance Monitor, or APM into your code or platform.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=65)** One component that an APM can provide you is a Profiler.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=70)** A Profiler will let you know when you have bottlenecks in your code that are slowing it down, or if you have code that is consuming too much memory.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/shift-right-testing?u=76281980&t=79)** [[Amazon Web Services (AWS)|Amazon Web Services]] has a few services that will give you observability into how your code is running, and one of those is CodeGuru Profiler.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Env Vars:** apm (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** install (1)

#### [CodeGuru Profiler](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980&t=0)** CodeGuru Profiler is a profiler that can be installed into [[Java]] or [[Python (Programming Language)|Python]] applications.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980&t=7)** Since it can be installed into the JVM for Java applications, it can be used with any language that uses the JVM.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980&t=16)** You can install the libraries for the profiler directly into your Python source code using pip.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980&t=24)** You can also call the profiler from the command line and pass in a single script to run.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980&t=31)** CodeGuru Profiler is also built in to the debugging and the monitoring tools within AWS Lambda serverless functions.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler?u=76281980&t=41)** For our example today, we're going to create a new Lambda function using some sample code provided by AWS and profile this code using CodeGuru Profiler.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Java]] (2), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), aws (2), pip (1)
> **Env Vars:** jvm (2), aws (2)
> **Exercise Files:** source code (1), sample code (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [CodeGuru Profiler with Python](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=0)** To make this example code from AWS work, we first need to set up some of the assets that the Lambda function will access. From within the AWS dashboard in the service search bar, switch over to S3.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=15)** Click on "Create bucket."
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=19)** For bucket name, type, 'profiler-demo-' and then add a unique value since all of our buckets need to be different.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=29)** I'll type halvantainstructor with some random numbers.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=34)** At the bottom, click on "Create bucket."
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=39)** Switch over to the IAM dashboard.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=46)** Click on "Roles" and then click the "Create role" button.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=52)** Select AWS service and under the service pull down, select Lambda.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=61)** Then click the "Next" button.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=66)** In the search bar, search for AWSLambdabasicexecutionrole with no spaces.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=74)** Select it and click "Next."
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=78)** For roll name, type, 'profiler-demo-' and then put in the same unique value you used earlier for the bucket name, and then end it with -role.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=92)** At the bottom, click the "Create role" button.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=97)** Scroll up and click on the role that we just created.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=103)** Under the Add Permissions pulldown, click "Create inline policy."
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=109)** Click the "[[JSON]]" button in the editor.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=113)** Inside the highlighted curly brackets, replace it with this bit of code.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=120)** This will grant this role the ability to put objects into our S3 buckets on our account, as well as put custom metrics into CloudWatch, both of which are in the example Lambda code.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=133)** At the bottom, click "Next."
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=137)** For policy name, type, 'profiler-demo-' and put your unique name again and end it with -inline policy.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=150)** At the bottom, click the "Create policy" button.
>
> **[2:34](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=154)** In the services search bar, type, 'Lambda.'
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=160)** In the left hand menu, click on "Functions," then click the "Create function" button.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=168)** For function name, type, 'profiler-demo-' and put the same unique value you used earlier.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=179)** Set the runtime to [[Python (Programming Language)|Python]] 3.8.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=187)** If you don't see Python 3.8 listed, select the next highest version closest to it.
>
> **[3:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=196)** Under change default execution role, click "Use an existing role" and select the role we created earlier.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=206)** Then click the "Create function" button.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=210)** Scroll down and click on the configuration tab, and on the left, select General Configuration.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=219)** Click the "Edit" button and set the timeout to 10 seconds.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=225)** Then click the "Save" button.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=231)** Back under the configuration tab on the left, select Environment Variables.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=238)** Click the "Edit" button.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=241)** And then click the "Add Environment variable" button.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=245)** For key, type, 'S3_BUCKET' in all capital letters, and for value, type the name of the S3 bucket that we created earlier.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=258)** Click the "Save" button.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=261)** Scroll down and click on the "Code" tab.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=267)** In Visual Studio Code, open the folder of the working copy of this course's [[GitHub]] repo.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=275)** Go underneath the folder titled, AWS-CodeGuru-Profiler-Python-Demo-Application.
>
> **[4:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=287)** Click underneath this folder and find the Lambda_function.py file.
>
> **[4:54](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=294)** Paste in all the code from this file into the Lambda code editor.
>
> **[5:02](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=302)** Click the "Deploy" button. Back up at the top, underneath the function overview, click on the "Add trigger" button.
>
> **[5:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=316)** In the search bar for the source pull down, type, 'eventbridge' with no spaces.
>
> **[5:23](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=323)** Select the EventBridge option.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=327)** Click "Create a new rule."
>
> **[5:30](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=330)** For real name, type, 'profiler-demo- and put your unique name again and then end it with -rule.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=340)** Under rule type, select schedule expression and then in the schedule expression field, type, 'rate', open parentheses, one minute, closing parentheses.'
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=355)** And then click the "Add" button.
>
> **[5:58](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=358)** This will tell EventBridge to run our Lambda function once every minute.
>
> **[6:04](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=364)** Scroll down and under the configuration tab click on "Monitoring and Operations Tools" on the left side.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=373)** Under additional monitoring tools, click the "Edit" button.
>
> **[6:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=378)** Underneath Amazon CodeGuru Profiler, turn on code profiling and click "Save" at the bottom.
>
> **[6:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=386)** Scroll down and click on the "Monitor" tab.
>
> **[6:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=392)** Each minute as the scheduler trigger runs, you should have another invocation stack up on the chart.
>
> **[6:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=401)** Click the "View CodeGuru Profiles" button at the top.
>
> **[6:46](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=406)** It's going to take CodeGuru Profiler 15 minutes to show the profiling group it made for us, and then another hour before it has compiled enough data to show us charts.
>
> **[6:59](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-with-python?u=76281980&t=419)** So go take a walk or read a chapter in a good book while we wait for CodeGuru to do its thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[JSON]] (1), [[GitHub]] (1)
> **UI Navigation:** click on (10), scroll down (4), select the (3), scroll up (1), open the (1)
> **CLI Commands:** aws (4), python (3), make (1), find (1)
> **Env Vars:** aws (4), iam (1), json (1), s3_bucket (1)
> **Versions:** python 3 (2)
> **Tools:** visual studio (1), github (1)
> **File Paths:** lambda_function.py (1)
> **Exercise Files:** github repo (1)

#### [CodeGuru Profiler groups](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=0)** Profiling groups in CodeGuru Profiler allow you to collect reporting metrics from the profiler and group them together based on your entire application.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=11)** Or you can group them together by a subsystem or component within your application.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=16)** How you create your profiling groups will depend on the architecture of your application, and how you would like to separate reporting data.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=25)** For our example, Lambda created a profile and group for us based on the name of our serverless function.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=33)** But how you design your profile in groups is up to you.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=36)** After your Lambda function has run enough times and enough profiling data is collected into CodeGuru Profiler, you should see the status change to profiling with a green check.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-groups?u=76281980&t=49)** Click on the name of the profiling group, and let's explore what data it has collected for us.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (1)

#### [CodeGuru Profiler reports](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=0)** This report will show us where our Lambda function is spending most of its time and resources.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=6)** Underneath CPU summary, click on "Visualize CPU."
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=12)** The long blue bars show us where our sample code is collecting profiling data.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=20)** The green lines stacked on top of the blue bars are all the function calls in the libraries we've included in our code.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=28)** That isn't code we are responsible for, but we can see what effect this code has on our dependent code.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=35)** Lambda handler is the main function of our code, and stacked upon it, we can see that the check prime function is taking a lot of the CPU resources.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=47)** If you roll over this bar, it'll tell you the CPU usage and the estimated cost of running this for one year.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=55)** The check prime function isn't really doing much other than computing primes to waste CPU cycles, and it doesn't really call anything else.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=65)** So we can probably take that out and save ourselves some CPU cycles.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=70)** The put metric function calls CloudWatch to send in metrics to AWS, so you can see all of the HTTP calls that the AWS libraries make to CloudWatch to make this connection possible.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=85)** The S3 put object function takes up almost a 10th of our runtime.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=92)** In the breadcrumbs at the top, click on the profiling group name again.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=97)** Under latency summary, click the "Visualize Latency" button.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=103)** This gives you a similar graph.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=105)** But now instead of looking at where the code is spending extra CPU cycles, now you're looking for spots where your code is waiting on other things to happen, such as network calls.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=117)** You may not be spending CPU cycles, but your code may be running slow if it's waiting too long for a response back from an API you are calling.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=127)** Use the breadcrumbs to click on your profiling group again.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=130)** Scroll down and under recommendations, click on the "View report" button.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=138)** This report will use machine learning to find recommendations of where you can improve your code.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=146)** Look at the recommendation for the expensive direct calls to CloudWatch.
>
> **[2:32](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=152)** Click on the suggested resolution steps box.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/codeguru-profiler-reports?u=76281980&t=156)** CodeGuru can give you advice on how to correct this problem within the code, and it'll even tell you where to find this in your code.

> [!info]- Semantic Content
>
> **Env Vars:** cpu (8), aws (2), http (1), api (1)
> **CLI Commands:** aws (2), make (2), find (2)
> **UI Navigation:** click on (5), scroll down (1)
> **Exercise Files:** sample code (1)
> **Analogies:** such as (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Removing costs from CodeGuru](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=0)** CodeWhisperer and CodeGuru Security should not incur you any additional costs while they are still in a preview state.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=8)** You will need to remove the S3 bucket that we created for the CodeGuru Profiler demo.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=15)** Switch back to S3.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=19)** On the left, under buckets, select the bucket that we created and then click "Delete" and follow the prompts.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=29)** You may have to click the "Empty bucket" button to empty
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=38)** its contents first.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=41)** Then in the services search bar, type, 'EventBridge.'
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=52)** On the left, click on "Rules" and scroll down and find the rule that we created earlier that triggers our Lambda function.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=63)** If you leave this running for too long, you might see some additional charges from Lambda.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=69)** You can disable or delete this event that causes our Lambda function to run each minute for the CodeGuru Profiler demo.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=79)** You can also delete the Lambda function if you won't be using it.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=83)** Switch back to CodeGuru.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=86)** Underneath profiling groups, you can delete the CodeGuru Profiler group that we created from this dashboard.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=97)** Also, you will need to delete the CodePipeline that we created.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=104)** Switch over to the CodePipeline dashboard, select the pipeline and click "Delete Pipeline."
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=115)** On the left, under CodeBuild, click on "Build projects."
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=120)** Click on the build project that we created.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=123)** Ans under actions, select delete.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=128)** On the left, underneath CodeCommit, click on "Repositories."
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=134)** You can also select the CodeCommit repository that we created and click "Delete."
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/removing-costs-from-codeguru?u=76281980&t=143)** If you want to clean up your AWS account entirely, you can also delete the role we created, but you won't get extra charges from having an unused role on your account.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (4), select the (3), scroll down (1)
> **CLI Commands:** find (1), aws (1)
> **Env Vars:** aws (1)

#### [More AI services](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980&t=0)** Amazon is releasing new AI tools all the time to help speed up your development.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980&t=7)** You might have seen prompts for Amazon Q within Visual Studio Code after installing the AWS toolkit.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980&t=16)** This [[Generative AI]] will allow you to ask it questions, and it can be a great resource for quickly summarizing information found in the AWS documentation.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980&t=29)** You can also check out new AI services as they are launched underneath the AI section of the Machine Learning category of services on the AWS homepage.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980&t=41)** Thank you for spending this time with me.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-aws-ai-services-for-developers/more-ai-services?u=76281980&t=43)** And I wish upon you and your new AI friends code that runs the first time and is always free of bugs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (1)
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Tools:** visual studio (1)


## Instructor

- [[Jeremy Villeneuve]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-aws-ai-services-for-developers-3808105)

## Skills Covered

- AI Software Development
- Artificial Intelligence (AI)
- Amazon Web Services (AWS)

## Path Context

### In [[Advance Your AWS Development Skills- Exploring Complex Application Development]]
← [[Aws Essential Training For Developers]] | **2 of 6** | [[AWS for Developers- CLI Tips]] →

## Appears In

- [[Advance Your AWS Development Skills- Exploring Complex Application Development]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)