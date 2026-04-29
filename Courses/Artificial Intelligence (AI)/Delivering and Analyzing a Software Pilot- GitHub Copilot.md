---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: delivering-and-analyzing-a-software-pilot-github-copilot
url: "https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot"
duration_minutes: 165
duration: 2h 45m
level: Advanced
updated: 10/28/2024
learners: 81700
skills:
  - GitHub
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQH257Ak0HzYQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729632133892?e=2147483647&amp;v=beta&amp;t=6SjIfwx5wQAR2dJVS_X1NjiMHdEuj11HURTH8Flcbvg"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Transform Your Programming with AI Coding Tools]]'
  - '[[Master GitHub Copilot]]'
prev_courses:
  - '[[Responsible GitHub Copilot- Creating Reliable Code Ethically]]'
  - '[[Supercharge the Development Process with GitHub Extensions for Copilot Chat]]'
next_courses:
  - null
  - '[[Responsible GitHub Copilot- Creating Reliable Code Ethically]]'
path_nav: '[{"path":"Transform Your Programming with AI Coding Tools","position":7,"total":7,"prev":"Responsible GitHub Copilot- Creating Reliable Code Ethically","next":null},{"path":"Master GitHub Copilot","position":4,"total":8,"prev":"Supercharge the Development Process with GitHub Extensions for Copilot Chat","next":"Responsible GitHub Copilot- Creating Reliable Code Ethically"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/github
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Delivering%20and%20Analyzing%20a%20Software%20Pilot-%20GitHub%20Copilot.md)

![Delivering and Analyzing a Software Pilot: GitHub Copilot](https://media.licdn.com/dms/image/v2/D4D0DAQH257Ak0HzYQQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1729632133892?e=2147483647&amp;v=beta&amp;t=6SjIfwx5wQAR2dJVS_X1NjiMHdEuj11HURTH8Flcbvg)

# Delivering and Analyzing a Software Pilot: GitHub Copilot

> Running a successful software pilot is essential for introducing new tools into your organization’s workflows. In this course, instructor Mike Smith guides you through the process of planning, executing, and evaluating a software pilot that can lead to informed decision-making and a strong business case for full deployment. While using GitHub Copilot as a practical example, the lessons apply to an

> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot) | 2h 45m | Advanced | 82K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Introduction and overview
  - What you should know
  - Who this course is for
- [**1. Getting Started with GitHub Copilot**](#1-getting-started-with-github-copilot) (2 videos)
  - Overview of GitHub Copilot
  - Setting up GitHub Copilot for development
- [**2. Planning a Software Pilot**](#2-planning-a-software-pilot) (4 videos)
  - Defining objectives and goals
  - Selecting the pilot team
  - Establishing key performance indicators
  - Preparing your environment for the pilot
- [**3. Launching the Pilot**](#3-launching-the-pilot) (4 videos)
  - Steps to officially start the pilot
  - Initial challenges and how to address them
  - Communication strategies during the pilot
  - Ensuring smooth operations and support
- [**4. Monitoring the Pilot**](#4-monitoring-the-pilot) (4 videos)
  - Tools and techniques for monitoring
  - Capturing and analyzing metrics
  - Making adjustments during the pilot
  - Case studies of effective monitoring
- [**5. Ending the Pilot**](#5-ending-the-pilot) (4 videos)
  - Criteria for concluding the pilot
  - Steps for a structured wrap-up
  - Transitioning from pilot to full deployment
  - Common pitfalls to avoid at this stage
- [**6. Gathering Feedback**](#6-gathering-feedback) (4 videos)
  - Methods for collecting feedback
  - Organizing and preparing feedback for analysis
  - Prioritizing feedback and identifying trends
  - Engaging with pilot teams post-pilot
- [**7. Using NLTK to Analyze Feedback**](#7-using-nltk-to-analyze-feedback) (5 videos)
  - Introduction to NLTK for text analysis
  - Preparing your data for analysis
  - Techniques to identify sentiments and themes
  - Gathering metrics from GitHub regarding Copilot usage
  - Visualizing data and results
- [**8. Writing a Business Case**](#8-writing-a-business-case) (4 videos)
  - Structuring your business case
  - Incorporating data and insights from the pilot
  - Presenting results to stakeholders
  - Strategies for gaining support for full deployment
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps to continue your software pilot journey

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction and overview
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980&t=0)** - [Michael] Have you ever launched a software pilot only to be overwhelmed by the data or struggle to show its value to your stakeholders?
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980&t=9)** Well, if so, this course is here to help.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980&t=12)** In this course, we're going to learn how to run a successful software pilot, how to analyze both user feedback and system usage, and how to build a business case for full deployment.
>
> **[0:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980&t=26)** We're going to use GitHub Copilot as an example through this course, but the lessons apply to any software.
>
> **[0:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980&t=34)** And by the end of this course, you'll be able to analyze your pilot data and confidently present it to your stakeholders.
>
> **[0:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-and-overview?u=76281980&t=40)** Hi there, I'm Mike, and with over a decade of experience in both tech and data analysis, I'm here to guide you step by step to ensure your pilot's success.

> [!info]- Semantic Content
>
> **Tools:** github (1)
> **Speakers:** - [michael] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=0)** - [Presenter] Now, before we dive into the details of running a successful software pilot, it's important to make sure that you have a solid foundation.
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=9)** Think of it as checking your equipment before a big climb.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=13)** You want to be well prepared to tackle any challenges ahead.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=17)** In this video, we'll cover the key concepts and tools you should be familiar with before starting the course.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=25)** This course is designed for professionals who are responsible for piloting software and making data-driven decisions about full deployment.
>
> **[0:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=34)** Whether you're a project manager, a software engineer, or a business analyst, having a basic understanding of software pilot processes will be extremely helpful.
>
> **[0:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=44)** So let's start with the basics.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=46)** You should have a general understanding of what a software pilot is, and by software pilot, I mean a small-scale test run of a new software tool within a controlled environment.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=58)** This involves planning the pilot, selecting participants, monitoring and implementation, and analyzing the results.
>
> **[1:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=67)** If you've never run a software pilot before, don't worry.
>
> **[1:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=70)** This course will guide you through all of the processes.
>
> **[1:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=74)** Now, whilst familiarity with GitHub Copilot will be beneficial, it's certainly not a requirement.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=81)** We're using GitHub Copilot as a primary example throughout this course.
>
> **[1:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=87)** If you haven't used GitHub Copilot before, don't worry.
>
> **[1:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=91)** You don't need to be an expert, but a basic understanding of just what GitHub Copilot is and how it integrates into development will be a bonus.
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=101)** Another key area of knowledge is natural language processing or NLP, and while you certainly don't need to be a data scientist, having just a basic grasp of NLP concepts will help you understand how we will be using it to analyze user feedback during the pilot.
>
> **[1:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=118)** If you're brand new to natural language processing, consider familiarizing yourself with some of the basic concepts like sentiment analysis and text classification.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=128)** Finally, it's important to be comfortable using tools like Excel and other data analysis software, as we'll be dealing with data throughout the course.
>
> **[2:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=139)** You'll need to know how to manipulate data, create visualizations, and interpret results to build your business case.
>
> **[2:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/what-you-should-know?u=76281980&t=148)** So in summary, having a basic understanding of things like software pilots, GitHub Copilot, natural language processing, and data analysis tools will set you up for success during this course.

> [!info]- Semantic Content
>
> **Tools:** github (5)
> **Code Keywords:** let (1), finally, (1), case. (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** make (1)
> **Analogies:** think of it as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [presenter] (1)

#### Who this course is for
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=0)** - [Narrator] Deciding whether a course is right for you is like choosing the right tool for the job.
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=6)** Getting it right can save you time and effort, and set you up for success.
>
> **[0:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=10)** This video will help you determine if this course is a good fit for your needs, so you can move forward with confidence.
>
> **[0:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=18)** This course is primarily designed for decision makers within business who are responsible for planning and executing software pilots and rollouts.
>
> **[0:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=28)** If you're a project manager, IT director, product owner, or anyone who needs to ensure the new software tool is thoroughly tested before full deployment, then you're in the right place.
>
> **[0:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=42)** Throughout this course, we'll be using GitHub Copilot as our main example.
>
> **[0:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=47)** However, the strategies, frameworks, and techniques you'll learn here are transferable to any software you might be piloting.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=56)** Whether you are testing a new CRM, an enterprise solution, or an AI-driven tool like Copilot, the principles for running a successful pilot remain the same.
>
> **[1:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=68)** This course is especially valuable for those who need to make data-driven decisions about whether or not to fully deploy new software.
>
> **[1:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=77)** You'll learn how to gather and analyze feedback, assess the success of your pilot, and to build a compelling business case for deployment.
>
> **[1:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=87)** If you're responsible for these critical decisions, this course will provide you with the tools and knowledge you need to make those informed choices.
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=98)** It's also worth noting that this course is ideal for professionals who want to enhance their skills in natural language processing and data analysis using Python.
>
> **[1:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=110)** While the course is accessible to those with a basic understanding, it's particularly beneficial for those who want to deepen their expertise in these areas, using them to gain insights from user feedback and pilot data.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=124)** If you find yourself responsible for ensuring that your organization's software tools are the right fit and that they deliver the expected value, this course is tailored to help you succeed.
>
> **[2:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=137)** The lessons you'll learn will empower you to manage software pilots effectively, mitigate risks, and drive successful outcomes for your business.
>
> **[2:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=149)** So to sum up, the course is for decision makers who need to plan and execute software pilots with confidence.
>
> **[2:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/who-this-course-is-for?u=76281980&t=157)** It's for those who want to ensure that the software they choose truly meets their organization's needs and who are committed to making informed, data-driven decisions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), python (1), find (1)
> **Env Vars:** crm (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Getting Started with GitHub Copilot

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of GitHub Copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=0)** - [Speaker] Have you ever wished for a coding assistant that could help you write code faster and more efficiently?
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=7)** Well, GitHub copilot might be just the solution you've been looking for.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=13)** In this video, I'll introduce you to GitHub Copilot, explore its key features, and discuss the benefits and considerations of using it in your development projects.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=25)** Now, for those who don't know, GitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI.
>
> **[0:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=34)** It is designed to assist developers by suggesting code snippets or entire functions as you type based on the context of your code.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=46)** Let's start with the key features of GitHub Copilot.
>
> **[0:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=49)** One of the most impressive features is the ability to provide context aware code completions.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=56)** This means that it can understand the code you are writing and suggest relevant code to complete the task at hand.
>
> **[1:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=65)** Another feature is its capability to generate code for common programming tasks.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=71)** For example, if you're writing a function to sort an array, copilot can suggest the entire function for you.
>
> **[1:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=80)** GitHub Copilot also supports multiple programming languages, making a really versatile tool for developers working with different technologies.
>
> **[1:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=92)** Now, let's talk about the benefits of using GitHub Copilot.
>
> **[1:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=96)** First and foremost, it can significantly speed up your coding processes by reducing the amount of boilerplate code you need to write.
>
> **[1:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=107)** It also helps in learning new languages and frameworks by providing examples and suggestions as you code.
>
> **[1:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=116)** This can be particularly useful for junior developers or those trying out any new technology.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=124)** However, there are some considerations to keep in mind.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=128)** GitHub Copilot is not perfect by any stretch and can sometimes suggest incorrect or even insecure code.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=136)** It is essential to review and understand the code it suggests before using it in your project.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=146)** Additionally, there are concerns about code quality and originality since copilot suggestions are based on publicly available code.
>
> **[2:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=158)** So make sure you validate and customize the generated code to fit your specific needs.
>
> **[2:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=166)** In conclusion, GitHub Copilot is a powerful tool that can enhance your development workflow, but it is important to use it responsibly and with a critical eye.
>
> **[3:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=180)** In the next video, we'll walk through a whistle stop tour of setting up GitHub Copilot for your development environment.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/overview-of-github-copilot?u=76281980&t=187)** So stay tuned.

> [!info]- Semantic Content
>
> **Tools:** github (10)
> **Code Keywords:** let (2), function (2), for. (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** boilerplate (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)

#### Setting up GitHub Copilot for development
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=0)** - [Narrator] Have you ever felt like coding could be more efficient if you had an intelligent assistant by your side?
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=6)** Well, with GitHub Copilot, you could make that a reality.
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=11)** In this video, I'll guide you through the process of setting up GitHub Copilot for your development environment, and by the end, you'll have Copilot ready to assist you in all your coding tasks.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=25)** So let's start with the installation.
>
> **[0:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=27)** To begin, you will need a GitHub account and an active subscription to GitHub Copilot.
>
> **[0:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=35)** If you don't have these yet, head on over to GitHub and set these up.
>
> **[0:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=40)** Once you have your account ready, open your IDE.
>
> **[0:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=43)** GitHub copilot currently supports VS Code, JetBrains, and Neovim.
>
> **[0:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=49)** Now I'm using VS Code for this demo.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=51)** So navigate to the extensions view by clicking on the extensions icon in the left hand sidebar.
>
> **[0:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=57)** In the search bar, just type in GitHub Copilot, and then just install.
>
> **[1:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=64)** Now, this will also install the Copilot chat feature as well.
>
> **[1:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=69)** Now, after installation is complete, you will need to sign into GitHub through your IDE.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=75)** Now to do this on VS Code, I'm just going to go down to the bottom left hand corner where the account icon is.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=81)** Click on that and then click on Sign in with GitHub to use GitHub Copilot.
>
> **[1:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=87)** This will also sign me into the GitHub Copilot chat so I only need to do this once And once you've authorized GitHub Copilot, go back to your IDE and you should see in the bottom right hand corner where the GitHub Copilot icon is, if you click on it, it will now say Status: Ready.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=106)** This means you're all signed in and authenticated with your GitHub account and your Copilot subscription.
>
> **[1:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=114)** Now let's configure GitHub Copilot.
>
> **[1:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=117)** Go to the settings by clicking on the gear icon in the bottom left hand corner and selecting Settings.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=124)** From here, we can simply type in the search bar, Copilot, and we can find the Copilot specific settings.
>
> **[2:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=131)** Here, you can adjust settings like enabling or disabling suggestions, customizing suggestion triggers, and many more.
>
> **[2:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=140)** You can adjust these based purely on your own preferences.
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=144)** Finally, let's test our setup.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=146)** Let's open up a new file and start typing a common coding task.
>
> **[2:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=151)** Like creating a function you should see that GitHub Copilot starts suggesting code snippets as you type.
>
> **[2:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=162)** And that's it.
>
> **[2:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=163)** You've successfully set up GitHub copilot for your development environment.
>
> **[2:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=168)** Now remember, whilst Copilot is a powerful tool, it's always important to review and understand the code that it suggests.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=177)** In the next video, I'm going to dive deeper into defining the objectives and goals used for a wider software pilot.
>
> **[3:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/setting-up-github-copilot-for-development?u=76281980&t=186)** Stay tuned.

> [!info]- Semantic Content
>
> **Tools:** github (17), vs code (3), neovim (1)
> **Code Keywords:** let (4), finally, (1), function (1), type. (1)
> **UI Navigation:** click on (3), navigate to (1), go to (1)
> **Prerequisites:** install (2), configure (1), setup (1), set up (1)
> **Env Vars:** ide (3)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1), in the next (1)
> **Definitions:** is a  (1)


### 2. Planning a Software Pilot

> [↑ Back to Table of Contents](#table-of-contents)

#### Defining objectives and goals
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=0)** - [Narrator] Imagine starting a road trip without knowing your destination.
>
> **[0:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=4)** Now, fair enough, you might enjoy the ride, but it's unlikely you'll reach a satisfying conclusion.
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=11)** This is what happens when you work on projects without clear objectives or goals.
>
> **[0:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=19)** In this video, we'll explore the importance of defining objectives and goals, how to set them effectively, and provide examples to guide you through your own projects.
>
> **[0:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=33)** Setting clear objectives and goals is crucial for any project objectives.
>
> **[0:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=40)** Provide direction.
>
> **[0:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=41)** While goals give you measurable targets to achieve, and without them, you risk wasting time and resources.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=51)** First, let's discuss objectives.
>
> **[0:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=54)** Objectives are broad statements that describe what you aim to achieve.
>
> **[0:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=59)** They should be specific, measurable, achievable, relevant, and time bound, often referred to as SMART objectives.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=71)** For example, if you are launching a new product, a good objective might be increase market awareness of the new product by 20% within six months.
>
> **[1:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=83)** And whilst this is a great objective, we can make it a bit well smarter by being a touch more specific.
>
> **[1:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=93)** To make the objective SMART, we'd want to say something along the lines of "Increase market awareness of our new product by 20%, "as measured by customer surveys "and online engagement metrics, "through a comprehensive marketing strategy "including digital campaigns, PR, "and targeted advertising within six months, "starting from Q3, "with progress reviewed every two months."
>
> **[2:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=126)** This is a SMART objective.
>
> **[2:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=129)** It allows it to be specific, measurable, achievable, relevant, and time bound.
>
> **[2:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=137)** Goals, on the other hand, are more specific and actionable steps that help you achieve your overall objectives.
>
> **[2:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=145)** They break down the objective into smaller, manageable tasks.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=153)** Using our previous example, a goal might be conduct three webinars and publish five blog posts about the new product within the first three months.
>
> **[2:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=165)** These goals are specific actions that can contribute to the larger objective.
>
> **[2:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=173)** When setting your own objectives and goals, start by identifying the main purpose of your project.
>
> **[3:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=181)** Ask yourself what you want to achieve and why that's important.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=187)** This clarity will guide you through your planning and execution.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=193)** Then break down your objectives into smaller goals.
>
> **[3:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=198)** Ensure each goal is actionable and contributes directly to achieving your main objective.
>
> **[3:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=206)** Now let's look at another example.
>
> **[3:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=209)** If your objective is to improve customer satisfaction, a related goal could be implement a new customer feedback system within three months.
>
> **[3:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=220)** This goal is specific, actionable, and time bound.
>
> **[3:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=226)** So in conclusion, defining clear objectives and goals is essential for project success.
>
> **[3:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=233)** They provide direction, ensure efficient use of resources, and allow you to manage progress.
>
> **[4:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=240)** Now in the next video, I'm going to discuss how to select the right pilot team to execute your project effectively.
>
> **[4:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/defining-objectives-and-goals?u=76281980&t=249)** So stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** smart (3)
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### Selecting the pilot team
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=0)** - [Instructor] Have you ever worked on a project that just seemed to fall apart because the team just didn't seem right?
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=7)** Well, it's a common problem, but one that can be avoided with some careful planning.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=13)** In this video, we'll talk about the importance of selecting the right pilot team, the key qualities and roles to consider, and the steps to forming an effective team.
>
> **[0:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=28)** By the end, you will have a solid strategy for building a team that can successfully execute your pilot project.
>
> **[0:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=37)** So let's start with why selecting the right pilot team is so crucial.
>
> **[0:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=43)** The success of any project heavily depends on the people involved.
>
> **[0:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=49)** A well-chosen team can navigate challenges, innovate solutions, and drive the project to success.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=58)** When forming a pilot team, you're looking for a mix of skills and personalities that complement each other.
>
> **[1:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=66)** This diversity ensures that different perspectives are considered and potential blind spots are covered.
>
> **[1:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=74)** Now let's discuss the key qualities and roles you should look out for in your pilot team members.
>
> **[1:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=82)** First, you need a project leader.
>
> **[1:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=85)** This person should have strong leadership skills, be able to motivate the team, and have a clear vision of the project's goals.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=95)** Next, consider having some subject-matter experts on board.
>
> **[1:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=99)** These individuals bring deep technical knowledge and expertise in the specific area your project is focused on.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=106)** They can provide invaluable assets and guidance.
>
> **[1:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=110)** You'll also need technical experts.
>
> **[1:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=114)** This role is crucial for any project involving complex technical skills.
>
> **[1:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=119)** The technical expert ensures that the technical aspects of the project are feasible and well-executed.
>
> **[2:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=127)** And don't forget about the importance of having creative thinkers on your team.
>
> **[2:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=132)** Creative thinkers bring innovative ideas and solutions to the table.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=136)** They can help you see opportunities and solve problems in ways you might not have considered.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=142)** Now, communication is key in any team, so having a good communicator is essential.
>
> **[2:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=149)** This person ensures that everyone is on the same page, facilitating smooth communication between team members and stakeholders.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=159)** So once you've identified the roles and qualities needed, the next step is to actually form the team.
>
> **[2:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=166)** Start by assessing the skills and experience of potential team members.
>
> **[2:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=171)** Look for those who have a proven track record of success in similar projects.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=177)** And it's also important to consider team dynamics.
>
> **[3:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=181)** Ensure that the team members can work well together and that there is mutual respect.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=187)** A team with good chemistry is more likely to collaborate effectively and maintain high morale.
>
> **[3:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=194)** And after selecting your team, clearly communicate the project's goals, objectives, and each member's role.
>
> **[3:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=203)** This clarity helps align everyone's efforts and ensures that all the team members understand their responsibilities.
>
> **[3:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=213)** And remember to encourage open communication and regular check-ins to monitor progress and address any issues early.
>
> **[3:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=222)** This proactive approach helps keep the project on track and fosters a collaborative team environment.
>
> **[3:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=231)** So selecting the right pilot team is essential for the success of the project.
>
> **[3:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=237)** By carefully choosing team members based on their skills, experience, and the ability to work well together, you set the foundation for a successful pilot project.
>
> **[4:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/selecting-the-pilot-team?u=76281980&t=250)** And in the next video, we'll explore how to establish key performance indicators to measure your project's success, so stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Best Practices:** don't forget (1), remember to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Establishing key performance indicators
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=0)** - [Narrator] Imagine running a marathon without any markers to tell you how far you'd gone or how much further you need to go.
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=7)** It would be a bit of a challenge to pace yourself or even know if you're making good time.
>
> **[0:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=14)** In much the same way, working on a project without key performance indicators, or KPIs, can leave you a bit directionless and unsure of your progress.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=25)** In this video, we'll define KPIs, discuss their importance, show you how to choose relevant KPIs for your project, and provide some examples to get you started.
>
> **[0:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=39)** KPIs are measurable values that demonstrate how effective a company or project is achieving its key objectives.
>
> **[0:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=47)** They provide a clear gauge of success and help keep your team focused on critical goals.
>
> **[0:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=54)** So let's begin by understanding why KPIs are so important.
>
> **[1:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=60)** They give you concrete data to guide your decision making, allowing you to track progress over time and help identify areas that need improvement.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=75)** Without KPIs, it's easy to lose sight of your goals or misallocate resources.
>
> **[1:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=82)** KPIs ensure that everyone on your team is aligned and working towards the same common objectives.
>
> **[1:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=90)** So how do you choose relevant KPIs for the project?
>
> **[1:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=96)** We'll start by clearly defining your project objectives.
>
> **[1:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=100)** What are you trying to achieve?
>
> **[1:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=102)** Make sure that your KPIs are directly related to these objectives.
>
> **[1:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=109)** For example, if your objective is to improve customer satisfaction, then a relevant KPI might be the net promoter score, NPS, which measures customer loyalty and satisfaction.
>
> **[2:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=125)** Ensure that your KPIs are SMART.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=128)** And by that I mean specific, measurable, achievable, relevant, and time-bound like we've discussed previously.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=136)** This framework helps create clear and actionable indicators that provide meaningful insights.
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=144)** Let's take a look at another example.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=146)** If your project aims to increase sales, then a potential KPI could be the conversion rate, which measures the percentage of visitors who make a purchase.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=159)** It's also important to limit the number of KPIs to a manageable amount.
>
> **[2:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=164)** Too many indicators can overwhelm your team and dilute focus.
>
> **[2:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=169)** Choose a few key metrics that provide the most value.
>
> **[2:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=175)** Once you've selected your KPIs, establish a baseline to understand your starting point.
>
> **[3:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=180)** This will help tremendously to measure progress accurately and set realistic results, and regularly review and update your KPIs as your project evolves.
>
> **[3:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=194)** What was relevant at the start might change as you progress, so it's important to stay flexible and adapt your indicators accordingly.
>
> **[3:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=204)** So to wrap up, let's summarize with some examples of effective KPIs across different types of projects.
>
> **[3:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=214)** For a marketing campaign, try the click through rate and return on investment as a KPI.
>
> **[3:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=219)** For a software development project, the bug fix rates and feature adoption rate would make good KPIs.
>
> **[3:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=228)** And for a customer service initiative, average resolution time and overall customer satisfaction score would be great KPIs.
>
> **[3:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=238)** In conclusion, establishing the right KPIs is essential for tracking the success of your projects and making informed decisions.
>
> **[4:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=248)** They provide clarity, focus, and a roadmap for achieving your goals.
>
> **[4:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=255)** And coming up in the next video, we'll discuss how to prepare your environment for your pilot project, ensuring everything is set up for success.
>
> **[4:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/establishing-key-performance-indicators?u=76281980&t=266)** So stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** kpi (3), nps (1), smart (1)
> **CLI Commands:** make (3)
> **Code Keywords:** let (3)
> **Cross-References:** coming up (1), in the next (1)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### Preparing your environment for the pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=0)** - Have you ever tried baking a cake in a messy kitchen?
>
> **[0:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=3)** It can be a recipe for disaster, believe me.
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=7)** Now, similarly, embarking on a pilot project without preparing your environment first can lead to unexpected challenges.
>
> **[0:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=16)** In this video, we'll discuss the importance of preparing your environment for the pilot project, walk you through the key steps to set up your environment, and share best practices to ensure everything is ready for a successful launch.
>
> **[0:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=33)** Now, preparing your environment is crucial because it ensures that all of the necessary tools, resources, and systems are in place before you start.
>
> **[0:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=44)** This preparation helps prevent delays and minimizes disruptions during the pilot project.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=51)** So, let's start with the key steps to set up your environment.
>
> **[0:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=54)** The first step is to identify and gather all of the necessary resources.
>
> **[0:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=59)** This includes software, hardware, documentation, and any of the materials your team will need.
>
> **[1:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=67)** Make sure to install and configure any required software in advance.
>
> **[1:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=73)** Remember, whilst GitHub Copilot is the primary focus of this pilot project example, this can be applied to any pilot project.
>
> **[1:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=84)** This might also include project management tools, calibration platforms, or any specialist software relevant to your pilot project.
>
> **[1:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=94)** Documentation is another crucial component, believe me.
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=98)** Prepare detailed guides and manuals that outline the procedures and protocols for the pilot.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=106)** This ensures that everyone on the team and beyond knows what to do and can follow standardized processes.
>
> **[1:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=116)** It's also essential to set up a dedicated space for your pilot.
>
> **[2:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=121)** This could be a physical location or a virtual workspace where all your team members can collaborate and communicate effectively.
>
> **[2:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=130)** One good example would be your own channel on Teams, for example.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=136)** Now, let's talk about best practices to ensure your environment is ready.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=142)** One best practice is to conduct a dry run.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=146)** Before the official start of the project, simulate the entire process to identify any potential issues and address them beforehand.
>
> **[2:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=156)** Now, whilst I wasn't the biggest believer in this particular piece of advice before I ran my pilot project, believe me, I'm a believer now.
>
> **[2:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=165)** Regular communication is key.
>
> **[2:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=167)** Make sure to establish clear communication channels and protocols so that team members can easily share updates, ask questions, and report issues.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=177)** This helps maintain transparency and keeps everyone on the same page.
>
> **[3:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=184)** Backup plans are also crucial, even if we don't like to think about it.
>
> **[3:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=188)** Prepare some contingency plans for potential challenges or failures, or high risk items that might occur during the project.
>
> **[3:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=197)** This might include having backup equipment, alternate workflows, or additional support resources just ready to go.
>
> **[3:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=206)** Another best practice is to monitor and review your environment continuously.
>
> **[3:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=211)** Regularly check that all systems are functioning correctly and make any adjustments as needed.
>
> **[3:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=218)** This is a proactive approach and it helps prevent small issues from becoming major problems through the project.
>
> **[3:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=225)** Now, in conclusion, preparing your environment for a pilot project of any kind is an essential step that sets up the foundations for success.
>
> **[3:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=235)** By gathering resources, setting up tools, and following best practices, you can ensure a smooth and effective pilot launch.
>
> **[4:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=246)** And coming up in a moment, we're going to discuss the steps to officially start your pilot, ensuring everything is in place for a successful kickoff.
>
> **[4:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-environment-for-the-pilot?u=76281980&t=254)** So, stay tuned.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (3), install (1), configure (1)
> **Best Practices:** make sure to (2), best practice (2)
> **CLI Commands:** make (3)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** coming up (1)
> **Tools:** github (1)
> **Analogies:** for example (1)


### 3. Launching the Pilot

> [↑ Back to Table of Contents](#table-of-contents)

#### Steps to officially start the pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=0)** - [Instructor] Now, imagine you're about to launch a new product.
>
> **[0:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=3)** You've done all the prep work, but that final step of actually launching it can be the most nerve wracking.
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=11)** The same goes for starting a pilot project.
>
> **[0:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=15)** Now in this video, we'll explore the importance of officially starting the pilot.
>
> **[0:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=20)** Outline the key steps to launch the project.
>
> **[0:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=23)** And share best practices for a smooth and successful launch.
>
> **[0:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=29)** Officially, starting your pilot is pretty crucial because it marks the transition from planning over to execution, and it sets the stage for your team to begin testing and validating your project in a real world setting.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=46)** The first step to officially starting your pilot is to hold a kickoff meeting.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=51)** This meeting brings all of the stakeholders together to review the project objectives, the timelines, or the roles that we've discussed, everything.
>
> **[1:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=61)** It's a chance to align everyone's expectations and ensure that all of the team members are on exactly the same page.
>
> **[1:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=69)** During the kickoff meeting, present a clear agenda that includes the project scope, any key milestones and deliverables.
>
> **[1:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=78)** This helps to provide structure and clarity.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=81)** Setting a positive tone for the rest of the project.
>
> **[1:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=86)** It can be more powerful than you might think.
>
> **[1:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=89)** The next step is to communicate the launch date and timelines to all of the relevant parties.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=95)** Make sure that everyone involved knows when the pilot's starting and what the key deadlines are.
>
> **[1:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=102)** This ensures that there are no surprises and that everyone is prepared.
>
> **[1:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=107)** It is also really important to establish a clear communication plan.
>
> **[1:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=113)** Define how updates will be shared, how often team meetings will occur, and what channels will be used for communication.
>
> **[2:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=122)** Consistent and clear communication is vital for keeping the project on track.
>
> **[2:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=130)** Now, before the pilot officially starts, confirm that all the resources are in place.
>
> **[2:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=137)** This includes verifying all the necessary software, all the hardware, all of the documentation is ready and accessible, conduct some final pre-flight checks to ensure everything is in order.
>
> **[2:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=151)** On the launch day, start by making a formal announcement to the team.
>
> **[2:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=156)** This can be really important.
>
> **[2:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=158)** It can be done via email, a team meeting, or a collaboration platform.
>
> **[2:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=163)** The announcement should reiterate the project's objectives and the importance of the pilot project.
>
> **[2:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=170)** During the pilot, monitor progress closely.
>
> **[2:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=174)** Regularly check in with team members to address any issues that arise, and to provide support as needed.
>
> **[3:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=182)** This helps to quickly resolve any problems and keep the project moving forwards.
>
> **[3:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=189)** It is also beneficial to collect feedback through the pilot phase.
>
> **[3:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=195)** Encourage team members to share their observations and suggestions.
>
> **[3:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=199)** They'll probably surprise you.
>
> **[3:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=202)** This feedback can be invaluable for making adjustments and improvements during the pilot.
>
> **[3:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=209)** And to ensure a smooth launch, follow best practices like maintaining flexibility, being prepared to adapt and keeping the team motivated.
>
> **[3:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=219)** Recognize and celebrate the small wins to maintain morale and momentum.
>
> **[3:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=227)** This step is really important as the morale and momentum will keep the cadence of your project moving forwards.
>
> **[3:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=236)** So in conclusion, officially starting your pilot project is a critical step that requires some careful planning and execution.
>
> **[4:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=244)** And by following these steps and best practices, you can absolutely set up your project for success.
>
> **[4:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=251)** And in the next video, we're going to discuss initial challenges you may face and how to address them effectively.
>
> **[4:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-to-officially-start-the-pilot?u=76281980&t=258)** So, stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Initial challenges and how to address them
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=0)** - [Instructor] Starting a pilot project is a little bit like setting sale on a new voyage.
>
> **[0:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=5)** No matter how well you plan, you are likely to encounter some rough waters early on.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=12)** In this video, we will discuss common initial challenges that can arise in a pilot project, share strategies to address these challenges, and highlight the importance of a proactive problem-solving solution.
>
> **[0:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=26)** One of the first challenges you might face is resource limitations.
>
> **[0:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=30)** This could include insufficient budget, lack of necessary tools, or limited space or expertise.
>
> **[0:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=38)** These limitations can slow down progress and impact the quality of your pilot.
>
> **[0:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=44)** To address resource limitations, it is crucial to prioritize.
>
> **[0:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=48)** Identify the most critical resources required for the pilot's success, and allocate your budget and efforts accordingly.
>
> **[0:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=57)** Additionally, seek out alternative solutions or partnerships that can help fill the gaps.
>
> **[1:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=65)** Another common challenge is team alignment.
>
> **[1:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=68)** With team members coming from different departments and backgrounds, there might be varying expectations or even communication styles, leading to some misunderstandings and eventual delays.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=81)** To ensure team alignment, hold regular meetings to synchronize everyone's understanding of the project's goals and progress.
>
> **[1:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=92)** Use clear, consistent communication channels and tools to keep everyone informed and engaged.
>
> **[1:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=100)** Technical issues can also pose significant challenges early on in the pilot.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=106)** These might include software bugs, hardware malfunctions, or integration problems.
>
> **[1:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=112)** Such issues can derail your project if not addressed promptly.
>
> **[1:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=117)** To try and mitigate technical issues, establish a robust support system.
>
> **[2:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=122)** This includes having technical experts on hand, creating a detailed troubleshooting guide, and setting up a process for reporting and resolving issues quickly.
>
> **[2:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=132)** Don't forget, just because your company has an IT support ticketing system doesn't necessarily mean everyone knows how to use it.
>
> **[2:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=140)** Another big hurdle you might face will be resistance to change.
>
> **[2:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=145)** Team members or certain stakeholders might be hesitant to adopt new processes or tools, fearing the unknown or potential disruptions in their everyday workflow.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=159)** To overcome resistance to change, engage stakeholders early and often, clearly communicate the benefits of the pilot and how it aligns to overall organizational goals, provide training and support to help ease the transition and build confidence in this new process or application that you're piloting.
>
> **[3:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=182)** It's also essential to monitor progress and gather feedback continuously.
>
> **[3:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=189)** Early feedback can help you identify issues way before they become major problems and allow for timely adjustments.
>
> **[3:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=198)** Encourage open communication, where team members feel comfortable sharing their concerns and suggestions.
>
> **[3:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=206)** This creates a really collaborative environment, where problems are addressed collectively and solutions are more effective.
>
> **[3:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=215)** And finally, celebrate the little victories.
>
> **[3:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=218)** Recognizing and rewarding early successes can really boost team morale and enforce a positive impact in the pilot, and it motivates everyone to stay committed.
>
> **[3:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=231)** So in conclusion, where initial challenges in the pilot project are inevitable, being prepared to address them proactively can make a significant difference.
>
> **[4:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=242)** By prioritizing resources, aligning your team, and maintaining open communication, you can navigate these challenges pretty effectively.
>
> **[4:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/initial-challenges-and-how-to-address-them?u=76281980&t=253)** And coming up next, we're going to dive into communication strategies that can keep your pilot project on track and ensure everyone is aligned, so stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Communication strategies during the pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=0)** - [Instructor] Think about the last time you went on a group trip.
>
> **[0:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=4)** Without clear communication, the trip can quickly turn chaotic, with people ending up in different places or missing key activities.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=13)** The same principle applies for managing a pilot project.
>
> **[0:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=18)** In this video, we'll explore the importance of effective communication during a pilot, share key communication strategies, and introduce tools and techniques to help you maintain clear communication throughout the project.
>
> **[0:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=33)** Now, effective communication is vital during a pilot because it ensures that everyone involved understands the project's objectives, progress, and any issues that arises.
>
> **[0:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=45)** It also helps keep the team aligned and focused on the goals.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=51)** One of the most important communication strategies that's normally underutilized is to establish regular check-ins.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=58)** These can be daily stand-ups, weekly progress meetings, or biweekly retrospectives.
>
> **[1:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=64)** The frequency will depend on the nature of the project and the team needs as well.
>
> **[1:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=70)** Now during these check-ins, encourage open dialogue.
>
> **[1:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=74)** Create a safe environment where team members feel comfortable sharing their thoughts, challenges, and successes.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=81)** This fosters collaboration and innovative problem-solving.
>
> **[1:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=87)** Another key strategy is to use a central communications platform.
>
> **[1:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=91)** Tools like Slack, Microsoft Teams, or similar platforms can help streamline communication, keeping all conversations and documents in one accessible place.
>
> **[1:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=104)** Consistency is crucial.
>
> **[1:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=107)** Use the same communication tools and channels consistently so that everyone knows where to find information and updates.
>
> **[1:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=117)** This reduces the risk of miscommunication and ensures no one is left out.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=124)** Additionally, use visual aids to enhance communication.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=128)** Diagrams, charts, and project dashboards can help convey complex information far more clearly and effectively.
>
> **[2:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=139)** Visuals can make it easier for team members to understand and retain key points and goals.
>
> **[2:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=148)** Feedback loops are also essential.
>
> **[2:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=150)** Encourage continuous feedback from your team to identify any communication gaps and address them promptly.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=159)** This ongoing feedback helps improve the communication process over time.
>
> **[2:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=166)** Now, transparency is another really important aspect.
>
> **[2:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=171)** Be transparent about the project's progress, challenges faced, and any decisions made.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=177)** This builds trust and keeps everyone informed, reducing uncertainty and speculation.
>
> **[3:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=186)** Now let's talk about some specific tools and techniques.
>
> **[3:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=189)** For instance, project management tools like Asana, Trello, and Jira can help track progress, assign tasks, and keep everyone updated on the project status.
>
> **[3:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=203)** Video conferencing tools like Zoom or Teams are great for face-to-face meetings, especially for remote teams.
>
> **[3:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=211)** They help maintain a personal connection and ensure that everyone can participate fully in discussions.
>
> **[3:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=220)** Lastly, document everything in something like OneDrive or your business's most prevalent documenting software.
>
> **[3:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=230)** Meeting notes, decisions, action items, and updates should be well-documented and shared with the team.
>
> **[3:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=238)** This ensures that everyone has a reference point and can review information as needed.
>
> **[4:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=245)** So in conclusion, effective communication is the backbone of a successful pilot project.
>
> **[4:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=253)** By establishing regular check-ins, using a central communication platform, and maintaining transparency, you can keep your team informed, engaged, and aligned.
>
> **[4:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/communication-strategies-during-the-pilot?u=76281980&t=267)** In the next video, we'll discuss how to ensure smooth operations and support throughout your pilot project, so stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Tools:** slack (1), jira (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Ensuring smooth operations and support
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=0)** - [Narrator] Imagine you are hosting a live concert.
>
> **[0:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=3)** The performers are ready, the audience is excited, but without smooth operations behind the scenes, the show will quickly fall apart.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=13)** The same is true for managing a pilot project.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=17)** In this video, we'll discuss the importance of ensuring smooth operations during the pilot.
>
> **[0:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=23)** Share key strategies for maintaining seamless processes and explain how to provide effective support to your team.
>
> **[0:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=34)** Smooth operations are critical during a pilot because they keep everything running efficiently, minimizing disruptions, and help the team keep focused on their tasks without any unnecessary disruptions.
>
> **[0:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=49)** One of the key steps to ensuring smooth operations is to establish clear workflows.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=56)** Define each step of the process, assign responsibilities, and make sure everyone knows their role.
>
> **[1:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=66)** For example, create a detailed project plan that outlines all the tasks, deadlines, and who is responsible for each task.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=75)** This helps in tracking progress and ensures accountability too.
>
> **[1:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=82)** Communication is also key.
>
> **[1:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=84)** Regular check-ins, updates, and open channels for communication help in quickly addressing any issues that might arise.
>
> **[1:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=94)** Use platforms like Slack or Teams, or even email for constant communication.
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=101)** Monitoring and reporting are also essential.
>
> **[1:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=105)** Keep track of progress through regular status reports and dashboarding.
>
> **[1:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=110)** This helps in identifying bottlenecks and addressing them promptly.
>
> **[1:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=115)** Providing effective support is another crucial aspect.
>
> **[2:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=121)** Ensure that technical support, training and resources are readily available to your team where possible.
>
> **[2:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=129)** This includes having a dedicated support team or individuals who can assist with any issues that might come up and encourage a culture of continuous improvements.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=142)** Regularly.
>
> **[2:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=143)** Gather feedback from your team about what's working well and what could be improved.
>
> **[2:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=150)** Use this feedback to make necessary adjustments and enhance operations.
>
> **[2:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=157)** So wrapping up, ensure smooth operations and providing effective support during your pilot are essential for success.
>
> **[2:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=167)** By establishing clear workflows, using standardized tools, maintaining communication, and offering robust support, you can help your team achieve their goals effectively.
>
> **[3:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=183)** And coming up next, we're going to dive into the tools and techniques for monitoring your pilot project to ensure everything stays on track.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/ensuring-smooth-operations-and-support?u=76281980&t=193)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Analogies:** imagine (1), for example (1)
> **Cross-References:** coming up (1)
> **Tools:** slack (1)
> **Speakers:** - [narrator] (1)


### 4. Monitoring the Pilot

> [↑ Back to Table of Contents](#table-of-contents)

#### Tools and techniques for monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=0)** - [Instructor] Imagine you're navigating a ship across the ocean.
>
> **[0:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=4)** Without the right instruments to monitor your course, you could easily drift off track.
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=9)** The same principle applies to managing a pilot project.
>
> **[0:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=14)** So let's dive into the importance of monitoring a pilot project, introducing key tools for effective monitoring, and exploring techniques for tracking progress and improvement.
>
> **[0:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=29)** Monitoring your pilot project is crucial because it allows you to track progress, identify any issues early, and make data-driven decisions.
>
> **[0:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=40)** And without proper monitoring, small problems can escalate really quickly into major setbacks.
>
> **[0:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=48)** So let's start with the key tools for effective monitoring.
>
> **[0:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=52)** One of the most commonly used tools is project management software.
>
> **[0:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=57)** Programs like Asana, Trello, and Jira help you organize tasks, assign responsibilities, and track deadlines.
>
> **[1:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=67)** These tools provide visual dashboards that give you a real-time overview of your project's status.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=75)** You can see which tasks are completed, which ones are in progress, and which are overdue, allowing you to quickly address any bottlenecks.
>
> **[1:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=86)** Another essential tool is time tracking software, like Toggl, Harvest, or Clockify, primarily for monitoring the duration your team devotes to various tasks.
>
> **[1:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=97)** While this data can be useful for workflow optimization, it is important to know that time spent is not necessarily an indicator of productivity.
>
> **[1:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=108)** Additionally, consider using communication tools, like Slack or Teams.
>
> **[1:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=112)** These platforms facilitate real-time communication and collaboration, making it so much easier to address issues as they arise and keep everyone on the same page.
>
> **[2:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=122)** This is especially true of any globally distributed teams you have as well.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=128)** Now let's talk about techniques for tracking progress and performance.
>
> **[2:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=132)** One really effective technique is setting up regular status meetings.
>
> **[2:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=137)** These meetings provide an opportunity to review progress, discuss challenges, and adjust plans as needed.
>
> **[2:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=145)** During these meetings, use a standardized reporting format to ensure consistency.
>
> **[2:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=151)** These might include a project status report that covers the key metrics, upcoming milestones, and any risks and issues that might need attention.
>
> **[2:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=161)** Another technique is milestone tracking.
>
> **[2:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=164)** Break your project into smaller, manageable milestones, and then track progress against these checkpoints.
>
> **[2:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=172)** This helps in maintaining focus and provides a sense of accomplishment as each milestone is achieved.
>
> **[3:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=180)** Great visual aids like Gantt charts can also be helpful.
>
> **[3:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=184)** These tools provide a easy-to-read visual representation of your project's timeline and progress, making it easier to spot delays and adjust plans accordingly.
>
> **[3:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=198)** It's also important to gather feedback continuously.
>
> **[3:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=201)** Encourage your pilot team to share their insights and observations regularly.
>
> **[3:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=208)** This feedback can provide valuable information for making improvements and ensuring that the project stays on track.
>
> **[3:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=216)** So in conclusion, effective monitoring is essential for the success of your pilot project.
>
> **[3:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=222)** By using the right tools and techniques, you can track progress, address any issues early, and ensure that your project meets its objectives.
>
> **[3:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=233)** And coming up next, we're going to dive into capturing and analyzing metrics to further optimize your project.
>
> **[4:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/tools-and-techniques-for-monitoring?u=76281980&t=241)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Tools:** jira (1), slack (1)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Capturing and analyzing metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=0)** - [Instructor] Have you ever tried improving your fitness without tracking your progress?
>
> **[0:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=4)** It's difficult to know what's working and what isn't without concrete data.
>
> **[0:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=10)** The same principle applies to managing a pilot project.
>
> **[0:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=15)** In this video, we'll discuss the importance of capturing metrics during a pilot, highlight key metrics to track and explore techniques for analyzing these metrics effectively.
>
> **[0:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=28)** Now, capturing metrics is crucial because it provides objective data that helps you understand how well your pilot project is performing.
>
> **[0:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=38)** Metrics allow you to measure progress, identify any areas of improvement, and make all important data-driven decisions.
>
> **[0:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=48)** One of the first steps in capturing metrics is to define what you need to measure.
>
> **[0:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=53)** Now, this can all depend on the goal of your pilot, but common metrics include performance metrics, user engagement metrics, and financial metrics.
>
> **[1:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=64)** Performance metrics might include things like system uptime, response times, and error rates.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=71)** These metrics help you understand the technical performance of your pilot.
>
> **[1:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=78)** User engagement metrics can include the number of active users, user retention rates, and user satisfaction.
>
> **[1:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=86)** These metrics provide insights into how well users are interacting with your system.
>
> **[1:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=93)** And financial metrics could involve tracking costs, return on investment, and budget adherence.
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=101)** These metrics are essential for understanding the financial health of your project.
>
> **[1:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=109)** Now, once you've identified the key metrics to track, the next step is to use the right tools for data collection.
>
> **[1:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=117)** Tools like Power BI, Tableau, or custom dashboards can help you gather and visualize this data effectively, and regularly review the collected data to monitor progress and detect any anomalies, set up automatic reports or alerting to stay informed about critical changes or any issues.
>
> **[2:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=143)** Analyzing and investigating the metrics involves looking for trends and patterns.
>
> **[2:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=149)** Use some statistical techniques and data visualizations to understand the story behind the numbers.
>
> **[2:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=156)** Now, we'll go through some of this later on in the course, but for an example, you could identify correlations between different metrics to uncover the root cause of some issues.
>
> **[2:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=168)** And additionally, you can segment your data to gain deeper insights into it.
>
> **[2:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=174)** Another example, analyze metrics by user demographics or time periods or specific features to understand how different factors impact your pilot project.
>
> **[3:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=188)** It's also important to compare your metrics against benchmarks and targets.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=193)** This can really help you evaluate whether your pilot is meeting expectations and where any adjustments might be needed.
>
> **[3:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=202)** Finally, use the insights gained from your analysis to make informed data-driven decisions, adjust your strategies, allocate resources more effectively, and communicate findings with your team to ensure everyone is aligned.
>
> **[3:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=222)** So summing up, capturing and analyzing metrics during a pilot project is essential for measuring success and making all important data-driven decisions.
>
> **[3:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=233)** And by defining some key metrics, using the right tools, and regularly reviewing and analyzing the data, you can optimize your pilot's performance.
>
> **[4:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=246)** And coming up next, we're going to explore how you can make adjustments during the pilot based on the insights gained from your metrics analysis.
>
> **[4:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/capturing-and-analyzing-metrics?u=76281980&t=256)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** finally, (1)
> **Cross-References:** coming up (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Making adjustments during the pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=0)** - [Instructor] Imagine you are driving on a long road trip.
>
> **[0:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=3)** Even with the best planning you might encounter unexpected detours or roadblocks.
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=11)** How you adjust your route determines whether you reach your destination smoothly.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=17)** The same goes for managing a pilot project.
>
> **[0:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=22)** In this video, we'll discuss the importance of making adjustments during a pilot, how to identify when and what adjustments are needed, and how to implement these changes, effectively.
>
> **[0:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=36)** Now, making adjustments during a pilot is crucial because it allows you to respond to real world challenges and insights that arise.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=46)** This flexibility helps ensure the project remains aligned with its goals and delivers the desired outcome.
>
> **[0:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=55)** The first step in making effective adjustments is to identify when they are needed.
>
> **[1:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=62)** Pay close attention to the metrics you've been capturing.
>
> **[1:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=66)** Look for trends, anomalies, and feedback that indicate a need for change.
>
> **[1:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=74)** For example, if user engagement metrics are lower than expected, it might indicate that the user experience needs improvement.
>
> **[1:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=83)** Similarly, if you've consistently missed deadlines, you might suggest the need for better resource allocation.
>
> **[1:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=93)** Once you've identified the need for adjustments, determine what changes are necessary.
>
> **[1:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=100)** This involves diagnosing the root cause of these issues and considering various solutions.
>
> **[1:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=107)** Engage your team in brainstorming sessions to help explore different options.
>
> **[1:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=113)** When deciding on adjustments, prioritize change that will have the most significant impact on your project's success.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=124)** Focus on high-impact areas first, to ensure your efforts are effectively directed.
>
> **[2:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=133)** Implementing changes, effectively requires a structured approach.
>
> **[2:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=138)** Start by clearly communicating the changes to your team.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=142)** Ensure everyone understands the reasons behind the adjustment and their roles in implementing them.
>
> **[2:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=151)** Create a detailed action plan that outlines the steps needed to implement the adjustments, align responsibilities, set deadlines, and establish checkpoints to monitor progress.
>
> **[2:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=164)** This ensures that everyone is aligned and accountable.
>
> **[2:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=170)** It's also important to test these adjustments on a smaller scale first, before fully rolling them out.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=177)** This helps to validate the effectiveness of the change and helps you make any necessary tweaks before broader implementation.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=187)** Now, continuous monitoring is essential during this phase.
>
> **[3:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=191)** Keep tracking your metrics to evaluate the impact of these adjustments.
>
> **[3:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=198)** Be prepared to make further changes if the initial adjustments don't yield the desired results.
>
> **[3:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=205)** And as always, encourage open communication and especially feedback from your team throughout this adjustment process.
>
> **[3:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=215)** This allows you to gather insights and make improvements continuously.
>
> **[3:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=223)** So, to sum up, making timely and effective adjustments during a pilot project is vital for its success.
>
> **[3:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=231)** By identifying the need for changes, prioritizing high-impact adjustments, and implementing them with a structured approach, you can navigate challenges and keep your project on track.
>
> **[4:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=247)** And in the next video, we're going to explore case studies of effective monitoring to provide real world examples on how these principles could be applied.
>
> **[4:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/making-adjustments-during-the-pilot?u=76281980&t=257)** So, stay tuned!

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Analogies:** imagine (1), for example (1)
> **Code Keywords:** yield (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Case studies of effective monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=0)** - [Narrator] Imagine trying to bake the perfect cake without ever checking on it while it's in the oven.
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=6)** You'd have no idea if it was rising correctly or if it was going to burn.
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=11)** Monitoring a pilot project is just as crucial to ensure that it turns out as expected.
>
> **[0:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=18)** In this video, we will explore effective monitoring through real world case studies.
>
> **[0:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=24)** By examining these case studies, you'll gain insights into best practices and strategies that you can apply to your own projects.
>
> **[0:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=35)** Effective monitoring involves regularly checking progress, identifying issues early, and making informed adjustments.
>
> **[0:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=44)** This proactive approach can significantly enhance the success of your pilot project.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=51)** Let's dive into our first case study Roux Academy, an art, media, and design school.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=58)** They were piloting a new student resource monitoring system.
>
> **[1:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=63)** They implemented a robust monitoring system using real time dashboards to track user engagement and system performance.
>
> **[1:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=72)** By monitoring these metrics daily, they identified a trend where user engagement dropped during certain times of the day.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=81)** This insight led to investigate further and discover that server maintenance was causing slowdowns.
>
> **[1:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=89)** They adjusted their maintenance schedule and sought an immediate improvement in user engagement.
>
> **[1:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=94)** This example highlights the importance of real time monitoring and being responsive to the data.
>
> **[1:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=103)** Our second case study involves H+ Sport, a nutrition and fitness company.
>
> **[1:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=109)** They were piloting a new customer management system, and they used comprehensive analytics to monitor customer feedback, system usage, and staff efficiency.
>
> **[2:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=122)** Through detailed surveys and feedback forms, they collected customer satisfaction scores.
>
> **[2:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=129)** They also tracked how often the staff were using key features of the system, and this data was analyzed weekly.
>
> **[2:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=139)** They noticed that certain features were underutilized, which led them to provide additional training for the staff.
>
> **[2:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=147)** As a result, overall system usage increased and customer satisfaction scores improved.
>
> **[2:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=155)** This case study shows the value of combining both quantitative data, like system usage and qualitative data like customer feedback to get a really comprehensive understanding of the pilot's impact.
>
> **[2:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=174)** Finally, let's look at Two Trees Olive Oil, which piloted a completely new production line.
>
> **[3:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=180)** Now, they used IOT sensors to monitor crop performance and production efficiency in real time.
>
> **[3:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=188)** The sensors provided data on things like soil saturation, production speed, and the overall health of their harvest.
>
> **[3:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=197)** They also set up alerts for any deviations from the norm, allowing them to address issues immediately.
>
> **[3:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=207)** By analyzing this data, they optimize their maintenance schedules and reduce their crop loss by 20%.
>
> **[3:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=215)** Production efficiency improves significantly as a result as well.
>
> **[3:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=221)** This case study underscores the importance of leveraging technology for real-time monitoring and immediate problem resolution.
>
> **[3:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=232)** So in summary, effective monitoring is essential for the success of any pilot project.
>
> **[3:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=238)** By learning from these case studies, you can apply similar strategies to your own projects to ensure they stay on track and achieve their objectives.
>
> **[4:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=250)** And in the next video, we'll discuss the criteria for concluding a pilot, helping you determine when it's time to wrap up and evaluate the project's success.
>
> **[4:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/case-studies-of-effective-monitoring?u=76281980&t=260)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Env Vars:** iot (1)
> **Cross-References:** in the next (1)
> **Analogies:** imagine (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


### 5. Ending the Pilot

> [↑ Back to Table of Contents](#table-of-contents)

#### Criteria for concluding the pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=0)** - [Instructor] Have you ever watched a movie that just didn't quite know when to end?
>
> **[0:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=5)** It might have had a strong start, but by the end it's kind of lost its way.
>
> **[0:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=10)** The same can happen with a pilot project if you don't know when to conclude it.
>
> **[0:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=16)** In this video, we'll explore the key criteria for concluding a pilot project, how to evaluate its outcome, and the decision making process for whether to scale, revise, or even terminate the project.
>
> **[0:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=32)** Concluding a pilot at the right time is critical.
>
> **[0:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=36)** If you end too early, you might miss out on some valuable insights.
>
> **[0:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=42)** If you drag things out too long, you risk wasting resources and losing momentum.
>
> **[0:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=48)** The first step is knowing what to measure.
>
> **[0:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=52)** Start by evaluating the pilot against its original objectives.
>
> **[0:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=57)** Did it achieve the goals you set out?
>
> **[1:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=60)** Review the key metrics that you've been tracking.
>
> **[1:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=63)** These could include performance metrics, user engagements, cost effectiveness, and any other indicators that might be relevant to the project.
>
> **[1:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=74)** It's also important to consider qualitative feedback.
>
> **[1:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=78)** What are your team's impressions?
>
> **[1:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=80)** How do the users and stakeholders feel about the results?
>
> **[1:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=84)** This feedback can provide context that numbers alone might miss.
>
> **[1:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=90)** Another critical aspect is the sustainability of the results.
>
> **[1:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=94)** So, ask yourself, are the successes of the pilot replicable and scalable?
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=101)** Is the project sustainable in the long-term, or were the results due to unique non-repeatable circumstances?
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=111)** Financial evaluation is also another key area.
>
> **[1:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=114)** Compare the costs against the benefits gained.
>
> **[1:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=117)** Did the pilot stay within budget, for example, and more importantly, does the projected return on investment justify further investment?
>
> **[2:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=127)** Once you've gathered all of this information, it's time to make a decision.
>
> **[2:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=131)** If the pilot met its objectives, it was cost effective and it's scalable, you might decide to move forward and scale the project further.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=142)** On the other hand, if there were significant issues but the project still holds potential, you might decide to revise and refine the approach before scaling it.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=153)** Consider what adjustments are needed and how they can be implemented.
>
> **[2:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=158)** However, not every pilot will be a success.
>
> **[2:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=162)** If the project didn't meet its objectives, the results aren't sustainable, or the costs just outweigh the benefits, it might be best to terminate the project.
>
> **[2:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=173)** Remember, no progress is ever made without experimentation.
>
> **[2:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=179)** Concluding a pilot project involves careful evaluation of both quantitative metrics and qualitative feedback.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=187)** By considering whether the results are sustainable and scalable and weighing the financial implications, you can make an informed decision about the future of your project.
>
> **[3:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=200)** Coming up next, we'll discuss the steps for a structured wrap-up of your pilot project, ensuring everything is properly documented and that valuable insights are captured for future use.
>
> **[3:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/criteria-for-concluding-the-pilot?u=76281980&t=212)** So, stay tuned!

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** coming up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Steps for a structured wrap-up
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=0)** - [Instructor] Imagine completing a journey and not taking a moment to reflect on what you'd learned along the way.
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=6)** You'd miss out on valuable insights that could make the next journey even better.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=12)** Wrapping up a pilot project works kind of the same way.
>
> **[0:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=15)** It's about gathering insights and preparing for the future.
>
> **[0:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=20)** In this lesson, we'll go over the key steps for wrapping up a pilot project in a structured way, how to document the results and lessons learned, and how to get ready for the next phase, whether that's scaling up or shifting direction.
>
> **[0:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=37)** Wrapping up a pilot project is more than just ticking off the final task.
>
> **[0:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=41)** It's an opportunity to consolidate what you've learned, celebrate successes, and address any issues that arose during the pilot.
>
> **[0:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=50)** The first step is to gather and review all relevant data.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=56)** Start by collecting all of the metrics and feedback you've gathered throughout the pilot.
>
> **[1:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=63)** This includes performance data, user feedback, financial metrics, and any other relevant information.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=71)** Ensure that this data is organized and accessible.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=75)** Next, schedule a wrap-up meeting with your team and the key stakeholders.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=81)** The goal of this meeting is to review the data, discuss what went well and what didn't, and identify key lessons learned.
>
> **[1:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=91)** Make sure everyone has access to the data beforehand.
>
> **[1:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=96)** During the meeting, take the time to document the lessons learned, what strategies worked well, what unexpected challenges did you encounter, and how did the team handle those challenges?
>
> **[1:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=108)** These insights are invaluable for future projects.
>
> **[1:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=112)** After gathering the lessons learned, it is crucial to document them in a formal report.
>
> **[1:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=119)** This report should include an overview of the pilot, the key metrics, the successes, the challenges, and the recommendations for the next steps.
>
> **[2:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=130)** This documents serves as a valuable reference for future projects.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=136)** Another important step is to review the resources used during the pilot.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=142)** Did the project stay within budget?
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=144)** Were there any resource constraints?
>
> **[2:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=147)** This analysis will help you plan better for future phases or similar projects.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=153)** And finally, think about what's next.
>
> **[2:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=156)** If the pilot program was a success, you may be preparing for a full rollout of the project.
>
> **[2:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=162)** If there were real problems, you might be revising the approach, or considering bidding the project altogether.
>
> **[2:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=169)** Either way, having a clear plan of the next steps is essential.
>
> **[2:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=175)** Now remember, the wrap-up phase isn't just about closing the book on the pilot.
>
> **[3:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=181)** It's about setting the stage for what comes next, whether it's expanding, refining, or maybe shifting focus.
>
> **[3:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=188)** The wrap-up formally ensures you're prepared for the future.
>
> **[3:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=194)** But next, we're going to dive into transitioning from pilot to full deployment, exploring how to scale your project successfully based on the insights and data you've gathered.
>
> **[3:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/steps-for-a-structured-wrap-up?u=76281980&t=206)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Transitioning from pilot to full deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=0)** - [Instructor] Have you ever watched your favorite sports team practice really intensively, only to struggle when it's game time?
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=7)** And that transition from practice to real performance can be tricky.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=12)** And the same can be said of moving from a pilot project to a full deployment.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=17)** In this session, we will cover the key considerations for transitioning your project from pilot to full deployment, the steps you can take to ensure a smooth transition and how to prepare your team and stakeholders for the upcoming changes.
>
> **[0:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=34)** Transitioning from the pilot to full deployment is a critical phase.
>
> **[0:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=40)** It's where the real world impact of your project is put to the test on a larger scale.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=46)** The first consideration is to ensure that the pilot success factors are scalable.
>
> **[0:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=53)** Start by reviewing what worked well in the pilot.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=58)** Were there specific strategies or tools that made the pilot particularly successful?
>
> **[1:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=65)** Ensure that these can be replicated on a larger scale.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=71)** If certain elements were only feasible during the smaller scope, you'll need to adapt them for full deployment.
>
> **[1:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=79)** A good example of this is in-person meetings.
>
> **[1:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=82)** This works great for a pilot team of say, less than 10 people, but not so much if you have a global team of hundreds.
>
> **[1:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=91)** Next, develop a detailed rollout plan.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=95)** This needs to include timelines, resource allocation, any risk management strategies, and clear milestones.
>
> **[1:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=103)** The goal here is to take what was learned during the pilot and apply it methodically to full deployment.
>
> **[1:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=112)** Communication is also key during this transition.
>
> **[1:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=116)** Ensure that all stakeholders are informed about the upcoming changes.
>
> **[2:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=121)** This includes updating them on the results of the pilot, explaining how the full deployment will be different and what they can expect during this transitional period.
>
> **[2:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=133)** Another critical step is to prepare your team.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=136)** This might involve additional training, scaling up resources, or bringing in new team members.
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=144)** The transition is often smoother when the team feels confident and well-prepared for the increased demands of full deployment.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=153)** It's also important to set up monitoring and support systems that can handle the scale of the full deployment.
>
> **[2:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=162)** What worked on a small pilot might again, need to be expanded or enhanced to support a larger user base or just more complex operations.
>
> **[2:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=174)** In summary, the transition from pilot to full deployment requires careful planning and communication.
>
> **[3:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=180)** By ensuring scalability, developing a detailed rollout plan, preparing your team, and enhancing support systems, you can increase the chances of a successful deployment.
>
> **[3:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/transitioning-from-pilot-to-full-deployment?u=76281980&t=194)** Coming up next, we'll look at the common pitfalls to avoid during this stage, helping you steer clear of potential obstacles as you move forward with your deployment.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (1), set up (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Common pitfalls to avoid at this stage
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=0)** - [Narrator] Have you ever seen an Olympic runner trip and fall just as they were about to cross the finish line?
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=7)** It is heartbreaking to watch, especially when they were so close.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=13)** The same thing can happen during a project's transition from pilots to full deployment if you're not careful.
>
> **[0:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=21)** In this lesson, we're going to explore the common pitfalls that can occur at this critical stage, how to recognize and avoid them, and strategies for maintaining momentum and success as you scale up your project.
>
> **[0:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=37)** One of the most common pitfalls is failing to properly scale resources.
>
> **[0:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=43)** During a pilot, it's easy to manage with limited resources, but full deployment often requires a significant increase in capacity.
>
> **[0:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=54)** If you don't scale up your resources, whether it's staff, technology, or even budget, you risk bottlenecking the project and causing major delays.
>
> **[1:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=66)** To avoid this, make sure to review your resource needs well in advance of full deployment.
>
> **[1:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=72)** Consider not just what worked during the pilot, but what will be needed to support the full scope of the project.
>
> **[1:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=82)** This might include hiring additional staff, upgrading technology, or increasing your budget allocation.
>
> **[1:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=90)** Another pitfall is underestimating the importance of ongoing communication during the pilot phase.
>
> **[1:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=99)** Communication is often straightforward because of the smaller team and scope.
>
> **[1:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=104)** However, as you scale, it becomes more challenging to keep everyone informed and aligned.
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=111)** Poor communication can lead to misunderstandings, duplicated efforts and missed deadlines.
>
> **[1:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=119)** The solution here is to establish as robust a communication plan as you can tailored for the larger scale.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=128)** This should include regular updates, clear channels of feedback, and meetings at key milestones.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=136)** Make sure that everyone knows where to find the information they need, and that communication lines always remain open.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=146)** Another common issue is rushing the transition.
>
> **[2:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=150)** In the excitement of moving from pilot to full deployment.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=153)** There is a temptation to accelerate the process.
>
> **[2:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=157)** However, skipping key steps or not allowing enough time for adjustments can lead to some pretty significant setbacks.
>
> **[2:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=168)** To prevent this, stick to your rollout plan and refer to it often to check your progress.
>
> **[2:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=175)** Even if things seem to be going well, it's important follow the structured steps you've outlined, allowing time for proper testing, adjustments, and feedback at each stage.
>
> **[3:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=189)** Finally, a lack of flexibility can be a pretty major pitfall, and even with the best planning, unexpected challenges will arise.
>
> **[3:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=199)** If your team is too rigid, you may struggle to adapt to these changes, which can derail the entire deployment.
>
> **[3:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=208)** To combat this, foster a culture of adaptability.
>
> **[3:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=212)** Encourage your team to be proactive and open to change, and to make sure you have contingency plans in place for any potential issues.
>
> **[3:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=222)** Being flexible allows you to pivot quickly and keep the project on track.
>
> **[3:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=229)** In summary, then avoiding these common pitfalls such as failing to scale resources, underestimating communication needs, rushing the transition and lacking flexibility can make the difference between a successful full deployment and a frustrating setback.
>
> **[4:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=249)** And next up, we're going to explore effective methods of collecting feedback during your project's deployment, ensuring that you have the insights needed to make informed decisions moving forwards.
>
> **[4:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/common-pitfalls-to-avoid-at-this-stage?u=76281980&t=263)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (1)
> **Code Keywords:** this, (3), finally, (1)
> **Warnings:** pitfall (2)
> **Definitions:** is a  (1)
> **Prerequisites:** make sure you have (1)
> **Speakers:** - [narrator] (1)


### 6. Gathering Feedback

> [↑ Back to Table of Contents](#table-of-contents)

#### Methods for collecting feedback
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=0)** - [Instructor] Whilst I'm certainly no expert in the kitchen, I know that you should never cook a new recipe without tasting it along the way.
>
> **[0:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=10)** You might follow the instructions perfectly, but without that instant feedback, you won't know if the dish is too bland or salty, or just right, until it's too late.
>
> **[0:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=22)** The same is true of running a project.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=25)** You need that feedback to make timely adjustments and ensure success.
>
> **[0:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=31)** So, let's explore in this video the importance of collecting feedback during a project, discuss different methods of gathering that feedback and help you choose the right method for your specific needs.
>
> **[0:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=47)** Collecting feedback is crucial because it allows you to make informed decisions, identify potential issues early, and understand how well your project is meeting its objectives.
>
> **[1:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=61)** Feedback helps you stay on course and to make necessary adjustments before it's too late.
>
> **[1:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=67)** One of the most common methods of collecting feedback that I personally recommend is through surveys.
>
> **[1:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=73)** Surveys can be distributed to a large audience, allowing you to gather a broad range of opinions.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=81)** They can be structured with multiple choice questions to gather quantitative data or open-ended questions for qualitative insights.
>
> **[1:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=92)** Another effective method is conducting interviews.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=95)** Now, interviews provide a more in-depth understanding of participant experiences and opinions.
>
> **[1:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=103)** While they are more time consuming, interviews allow for follow-up questions and deeper exploration of specific topics.
>
> **[1:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=113)** One of the ways I've used interviews is to explore specific negative feedback about a project to find out the reason that specific user might have been having a hard time and what I could do to help.
>
> **[2:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=126)** Focus groups are also really valuable, particularly when you want to explore ideas in a collaborative setting.
>
> **[2:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=134)** In a focus group, participants can discuss their experiences and ideas, often leading to richer feedback as they build on each other's thoughts.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=146)** And don't overlook the power of being on observation duty.
>
> **[2:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=150)** Sometimes watching how users interact with your product or process can reveal issues or opportunities that participants might not think to mention in a survey or an interview.
>
> **[2:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=163)** Observational feedback is especially useful for any UI or UX projects or when physically testing products.
>
> **[2:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=173)** Each of these methods has its strength.
>
> **[2:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=175)** So, how do you choose the right one?
>
> **[2:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=178)** Well, consider your project's specific needs, the type of feedback you are looking for, and your available resources.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=187)** For instance, if you need broad quantitative data, surveys might be best.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=193)** If you are exploring complex issues, interviews or focus groups could be more effective.
>
> **[3:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=200)** It's also important to consider the timing of your feedback collection.
>
> **[3:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=205)** Early stage feedback might require broader methods like surveys, while mid or late stage feedback could benefit from more in-depth methods like interviews or focus groups.
>
> **[3:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=218)** So, collecting feedback is a vital part of managing a successful pilot project.
>
> **[3:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=224)** By understanding the different methods available, surveys, interviews, focus groups, and direct observation, you can choose the right approach for your needs and gather the insights necessary to guide your project to success.
>
> **[4:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=242)** And coming up next, we'll look at how to organize and prepare the feedback you've collected for analysis, ensuring that you can extract meaningful insights and take action effectively.
>
> **[4:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/methods-for-collecting-feedback?u=76281980&t=254)** So, stay tuned!

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (1), for, (1), require (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Organizing and preparing feedback for analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=0)** - [Narrator] Have you ever tried solving a jigsaw puzzle without first sorting the pieces?
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=6)** I know some people can, but personally it's a bit overwhelming and progress is slow.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=12)** The same is true when trying to analyze feedback without first organizing it.
>
> **[0:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=18)** Let's discuss why it's important to organize your feedback before diving into analysis.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=25)** Explore methods for categorizing and sorting feedback and show you how to prepare it for effective analysis.
>
> **[0:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=34)** Organizing your feedback is really crucial because it helps you see the bigger picture.
>
> **[0:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=40)** When feedback is scattered or unstructured, it's easy to miss key insights or trends.
>
> **[0:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=47)** Proper organization sets the stage for meaningful analysis.
>
> **[0:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=52)** One of the first steps is to categorize your feedback.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=56)** Start by grouping similar comments or observations together.
>
> **[1:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=60)** Categories could include product, features, user experience, customer support, or any other relevant aspects of your project.
>
> **[1:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=69)** Once you have your categories, it's helpful to sort the feedback within each category.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=75)** You could do this by date, source, or even sentiment.
>
> **[1:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=80)** For example, sorting by sentiment, positive, neutral, or negative can help you quickly identify areas of strength and concern.
>
> **[1:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=91)** Another really useful method is to tag feedback with keywords or labels.
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=98)** This allows you to easily filter and search for specific themes later on.
>
> **[1:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=104)** I find simply having a few tags in something like Excel can be really helpful for this.
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=111)** And as you organize, be sure to consolidate duplicate feedback.
>
> **[1:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=116)** If multiple people are mentioning the same issue or suggestion, it's probably a sign that this area may need more attention.
>
> **[2:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=126)** Consolidating helps to reduce noise and focus on the most significant insights.
>
> **[2:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=133)** After organizing, the next step is to prepare your feedback for analysis.
>
> **[2:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=139)** This might involve creating summaries for each category, highlighting each of the key points, or even visualizing the data with charts or graphs.
>
> **[2:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=150)** The goal here is to make the analysis process as straightforward as possible.
>
> **[2:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=158)** It is also important to ensure that your feedback is accessible to all relevant team members store in a centralized location, such as a shared drive or some sort of project management tool so that everyone can easily access and contribute to the process.
>
> **[3:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=181)** So summing up, organizing and preparing feedback before analysis is a critical step in making sense of the data you've collected.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=193)** By categorizing, sorting and summarizing this feedback, you set yourself up for a more efficient and effective analysis process.
>
> **[3:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=205)** And coming up we'll explore how to prioritize the feedback you've organized and identify trends that can drive actionable outcomes in your project.
>
> **[3:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/organizing-and-preparing-feedback-for-analysis?u=76281980&t=216)** So stay tuned.

> [!info]- Semantic Content
>
> **Analogies:** picture (1), for example (1), such as (1)
> **CLI Commands:** find (1), make (1)
> **Code Keywords:** let (1), this. (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Prioritizing feedback and identifying trends
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=0)** - [Instructor] Imagine being at a buffet with dozens of dishes but you only have one plate.
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=7)** How do you choose what to eat?
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=9)** I like to focus on what looks best and that will satisfy me most.
>
> **[0:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=14)** And prioritizing feedback works in a similar way.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=17)** You can't act on everything, so you need to focus on what will have the greatest impact.
>
> **[0:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=24)** So in this video, let's talk about the importance of prioritizing feedback, methods for identifying key trends in data and how to turn those trends into actionable insights that can drive the project forward.
>
> **[0:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=41)** Prioritizing feedback is essential because not all feedback is equally valuable or actionable.
>
> **[0:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=49)** By focusing on the most critical pieces of feedback, you can address the areas that will make the biggest difference in your project's success.
>
> **[0:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=59)** One effective method of prioritizing feedback is to categorize it based on impact and effort.
>
> **[1:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=68)** High impact, low effort changes should be your top priority, as they offer the most significant improvement with the least amount of work.
>
> **[1:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=78)** And conversely, low impact, but high effort changes can often be deprioritized.
>
> **[1:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=85)** After categorizing feedback, the next step is to identify key trends.
>
> **[1:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=92)** Look for patterns in the feedback.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=95)** Are multiple users mentioning the same issue?
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=98)** Are there recurrent suggestions?
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=101)** Trends like this indicate areas that need your attention.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=106)** There is no magic bullet for this step.
>
> **[1:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=109)** You just need to start analyzing the data.
>
> **[1:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=112)** Using tools like word clouds or even sentiment analysis can help you quickly spot trends in large volumes of feedback.
>
> **[2:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=122)** These tools visually represent the most common words or phrases, making it easier to see what's on people's minds.
>
> **[2:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=132)** Once you've identified these trends, the challenge then is turning them into actionable insights.
>
> **[2:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=140)** This means translating the feedback into specific, implementable changes.
>
> **[2:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=147)** For example, if users frequently mention a confusing interface, an actionable insight might be to redesign that part of the interface for better usability.
>
> **[2:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=160)** It is also important to communicate these insights to your team and your stakeholders.
>
> **[2:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=167)** Present your findings clearly, along with recommended actions so that everyone understands the rationale behind these changes and they're on board with the implementation.
>
> **[3:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=182)** So summing up, prioritizing feedback and identifying trends is crucial to making informed, impactful decisions.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=193)** By categorizing your feedback, spotting patterns, and turning those patterns into actionable insights, you can ensure that your project evolves in the most effective way possible.
>
> **[3:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=208)** And next up, we'll dive into how to engage with your pilot team post pilot, ensuring that their feedback and experiences are integrated into the ongoing project.
>
> **[3:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/prioritizing-feedback-and-identifying-trends?u=76281980&t=222)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (1)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Engaging with pilot teams post-pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=0)** - [Announcer] Imagine you've just finished a marathon, you cross the finish line, but the real growth happens when you reflect on your performance and learn from the experience.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=12)** The same is true after completing a pilot project.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=17)** Your pilot teams hold valuable insights that can help you drive success.
>
> **[0:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=23)** In this video, we're going to explore the importance of engaging with your pilot teams after the pilot concludes, discuss methods for gathering their feedback and insights, and show you how to integrate this feedback into your ongoing projects.
>
> **[0:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=41)** Now, engaging with your pilot team post pilot is crucial because they have firsthand experience with your project.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=51)** Their insights can reveal what worked well, what challenges arose, and what could be improved upon.
>
> **[0:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=59)** This feedback is essential for refining your project before a full scale rollout.
>
> **[1:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=65)** One especially effective method for gathering feedback is to conduct a debriefing session.
>
> **[1:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=72)** This could be a formal meeting where team members share their thoughts on the pilot successes, challenges, and areas of improvement.
>
> **[1:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=82)** Encourage open dialogue and make sure everyone has an opportunity to contribute to it.
>
> **[1:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=89)** Another approach, as mentioned previously, is to use surveys or questionnaires.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=95)** These can be distributed to the pilot team members to gather more structured feedback.
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=101)** Surveys allow you to ask specific questions that can help you dig deeper into particular aspects of the project.
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=111)** Additionally, one-on-one interviews can be valuable for collecting more detailed feedback.
>
> **[1:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=119)** These conversations can uncover nuanced insights that might not surface in a group setting.
>
> **[2:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=127)** Interviews also give team members the space to speak more freely about their experience.
>
> **[2:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=135)** Now, once you've collected some feedback, it is important to integrate it into your ongoing project.
>
> **[2:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=143)** Start by categorizing the feedback.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=146)** What are the common themes?
>
> **[2:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=148)** What are the most critical points that need to be addressed?
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=153)** Use this feedback to make necessary adjustments to your project plan.
>
> **[2:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=158)** Whether it's refining a process, improving communication, or addressing technical issues.
>
> **[2:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=165)** Pilot team insights can guide these changes and ensure your project is on the right track.
>
> **[2:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=173)** And don't forget to close the loop with your pilot teams.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=177)** Let them know how their feedback has been used and the impact it's had on the project.
>
> **[3:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=183)** It not only shows that you value their input, but it also encourages them to remain engaged in future phases of the project.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=193)** So engaging with your pilot teams after the pilot is a vital step in refining and improving your project.
>
> **[3:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=203)** By gathering their insights through debriefing sessions, surveys, and interviews, and then integrating that feedback into your ongoing work, you can drive continuous improvement and set the stage for future success.
>
> **[3:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=220)** And coming up next, we're going to dive into the technical segment of our course and go through the introduction of natural language processing for text analysis, where you'll learn how to leverage this powerful tool to analyze textual data effectively.
>
> **[3:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/engaging-with-pilot-teams-post-pilot?u=76281980&t=238)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** let (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [announcer] (1)


### 7. Using NLTK to Analyze Feedback

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to NLTK for text analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=0)** - [Instructor] Have you ever been shopping online and when looking at reviews of a product, not being able to decide if the review is positive or negative because of how it's worded?
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=11)** That's where NLTK comes in.
>
> **[0:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=13)** It's like having a powerful translator that helps you analyze and understand large amounts of text data.
>
> **[0:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=23)** In this video, I'll introduce you to the Natural Language Toolkit, or NLTK, a leading library in Python for working with human language data.
>
> **[0:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=35)** We'll cover its key features, how it supports text analysis, and ways you can apply it in your own projects.
>
> **[0:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=45)** NLTK is a comprehensive library for text processing and analysis.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=51)** It provides easy to use interfaces to over 50 corpora, which are collections of written and spoken text, and lexical resources, which are databases of words.
>
> **[1:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=66)** NLTK also includes a suite of text processing libraries for classification tokenization, stemming and much more.
>
> **[1:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=74)** Some of this, we'll go through in this video.
>
> **[1:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=78)** Now this is a longer video than normal and it does involve quite a lot of side by side coding.
>
> **[1:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=84)** So grab yourself a snack or a drink, get your code editor of choice open, and let's get cracking.
>
> **[1:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=90)** One of the easiest ways I like to use NLTK is to download and install the Anaconda platform.
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=98)** This makes sure that I have all of the additional packages I need for using NLTK with Python, packages like numpai, for example, that otherwise I'd have to install separately.
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=111)** Now to install this on Windows, simply go to the Anaconda website and head to their download section.
>
> **[1:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=118)** They will initially ask you for your email address, so enter it and you'll get a URL to the download link.
>
> **[2:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=125)** If you don't want to enter your email address, you can also go to the address bar and type in slash success and it will take you to the download link.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=136)** Once that's all installed and you've opened up a Jupyter notebook, you can start using Python freely in its own environment.
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=144)** Now, to test the packages like numpai and NLTK are in fact installed, you can run the following code.
>
> **[2:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=151)** Now, all of this code will be available as exercise files in this lesson, just in case you want to copy and paste it.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=159)** But for me, I'm going to go import sys and then import NLTK and then import numpai.
>
> **[2:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=171)** And then what I wanted to do is print parentheses quotes, Python version, closed quotes, comma, sys.version,
>
> **[3:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=185)** and then closed parentheses.
>
> **[3:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=187)** And then I want exactly the same.
>
> **[3:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=191)** So I'm just going to copy and paste this twice more but instead of Python, I want it to say NLTK.
>
> **[3:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=199)** And instead of sys version, it's going to say nltk.__version,
>
> **[3:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=210)** 'cause that's just the way it is, unfortunately.
>
> **[3:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=212)** And then underscore underscore again, and then exactly the same thing.
>
> **[3:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=217)** In fact, if I just copy and paste this line and paste it over this one, that's probably going to be easier for me and it should replace this with numpai and replace NLTK with numpai.
>
> **[3:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=232)** And then to run it, I'm just going to hit shift and enter.
>
> **[3:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=236)** And there we can see that Python, NLTK, and numpai are all installed.
>
> **[4:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=242)** One of the most powerful features of NLTK is its ability to tokenize text.
>
> **[4:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=248)** Now tokenization is the process of breaking down text into individual words or sentences, which is the first step in many text analysis tasks.
>
> **[4:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=260)** This allows you to analyze the structure of the text more effectively.
>
> **[4:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=266)** And to do this in this Jupyter notebook, I'm going to scroll down and I'm going to say import NLTK.
>
> **[4:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=274)** Then from nltk.tokenize, import word_tokenize, sent_tokenize
>
> **[4:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=290)** And then I want to download the necessary resources that I need, so I'm going to go nltk.download(''),
>
> **[5:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=302)** and then I'm just going to say punkt, P-U-N-K-T, which is the package that I need.
>
> **[5:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=307)** And now I need to give it some sample text.
>
> **[5:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=310)** So I'm going to say text equals.
>
> **[5:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=313)** And it's very important that you have it in triple quotes.
>
> **[5:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=316)** It's one of those syntactical rules you have to follow.
>
> **[5:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=319)** And I'm going to say some sample text here, and I will replace that shortly with an actual fictitious review of GitHub copilot that I've got on standby.
>
> **[5:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=332)** But right now I'm just going to leave it as that.
>
> **[5:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=335)** So next up I want to tokenize that text into sentences.
>
> **[5:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=339)** So I'm going to say sentence_tokens, which will be sent tokenize and then (text),
>
> **[5:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=355)** and then print parentheses, double quotes and then close parentheses as well and say sentence tokenization: and then slash N for a new line.
>
> **[6:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=370)** And between the double quote and the parentheses, I'm going to say comma and then sentence_tokens.
>
> **[6:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=380)** So that should also be sentence underscore tokens above it.
>
> **[6:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=382)** Yep, excellent stuff.
>
> **[6:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=384)** And now next what I want to do is, I want to tokenize the text into words.
>
> **[6:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=388)** So first sentences, then words.
>
> **[6:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=391)** Now with the text sum sample text here, that's not going to be very useful, but with the text I'm going to put in there in a second, it will be very useful.
>
> **[6:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=399)** So I'm going to say word, I'm going to scroll down very slightly.
>
> **[6:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=405)** Underscore tokens equals word_tokenize,
>
> **[6:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=413)** then parentheses text close parentheses and then print parentheses double quotes closed parentheses 'cause otherwise I'll forget, and then I'm going a new line.
>
> **[7:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=425)** So slash N for new line, then word tokenization colon, and then a new line as well.
>
> **[7:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=434)** This just makes it nice and easy to read once it's printed out.
>
> **[7:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=437)** Now again, between the double quote and the parentheses, I want comma and then word underscore tokens, and that's it.
>
> **[7:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=446)** Now all I need to do is just copy paste my sample text over and it should tokenize it nicely for me.
>
> **[7:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=452)** So if I highlight this and then paste, there you can see I've got a fictitious review of GitHub copilot.
>
> **[7:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=459)** And if I just run this, you can see that if I scroll up, it's tokenized that text into both sentences in the top section and individual words, including punctuation marks in the bottom section as well.
>
> **[7:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=476)** Another key feature of NLTK is the support for stemming and lemmatization.
>
> **[8:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=483)** Now these processes reduce words to their base or root form, which helps in analyzing the underlying meaning of the text.
>
> **[8:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=492)** For example, the words running, ran and runs could all be reduced to the root word of run.
>
> **[8:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=501)** Now to do this with this sample review, what I'm going to need to do is say import nltk and then from nltk dot.
>
> **[8:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=513)** And just to save some time, I'm just going to copy that 'cause I'll need to write it at least another couple of times.
>
> **[8:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=518)** I'm going to say .stem import PorterStemmer, PorterStemmer, not potter stemmer.
>
> **[8:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=529)** And then from nltk.stem, import WordNetLemmatizer.
>
> **[9:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=540)** And then finally we want from nltk.tokenize, import word_tokenize.
>
> **[9:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=551)** So that's importing all the packages we need.
>
> **[9:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=554)** Now I need to download the necessary resources.
>
> **[9:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=557)** So I'm going to say nltk.download, parentheses, single quotes, close parentheses.
>
> **[9:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=565)** I'm just going to copy that line and paste it two more times 'cause I'll need it a couple of times.
>
> **[9:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=569)** So we want punkt, which is what we used earlier.
>
> **[9:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=572)** I want wordnet and I want omw-1.4.
>
> **[9:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=581)** Very nice and easy to remember. This is the lemmatizer.
>
> **[9:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=584)** So now I need some sample text.
>
> **[9:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=586)** So just like before, I'm going to say text equals triple quotes, and this time I'm actually going to put that sample review in there first time.
>
> **[9:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=596)** So next stage is to tokenize the text into words just like we did last time.
>
> **[10:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=602)** So we're going to say word_tokens = work_tokenize, and then the text, the sample text that we've given it.
>
> **[10:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=613)** Now I want to initialize the PorterStemmer and WordNetLemmatizer.
>
> **[10:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=618)** So I'm just going to say stemmer, which is what I'll invoke it as.
>
> **[10:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=621)** And I'm going to say PorterStemmer(), and lemmatizer = WordNetLemmatizer().
>
> **[10:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=639)** And now I want to stem the words.
>
> **[10:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=641)** So to do that, I'm going to say stemmed_words.
>
> **[10:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=647)** And now I need square brackets for this one.
>
> **[10:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=649)** I'm going to say stemmer.stem for word.
>
> **[10:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=656)** And then between the square bracket and the parentheses, I'm going to say for word in word_tokens.
>
> **[11:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=665)** And then I want to print open parentheses, quotes, close parentheses and I'm going to say stemmed words:, and then I want a new line so slash N, and then tucked between the close parentheses and the double quote, and I say comma stemmed_words.
>
> **[11:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=689)** So that will give me a printout of the stemmed words and then the actual variable of stemmed words, which is the stemmed words from the text that we gave it before.
>
> **[11:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=699)** So next up, I want to lemmatize the words.
>
> **[11:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=701)** So if I go lemmatized_words, which will equal, and again, square brackets, lemmatizer.lemmatize(word)
>
> **[11:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=718)** for word in word_tokens, and then close brackets.
>
> **[12:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=725)** And then exactly the same as last time, print parentheses double quotes closed parentheses, otherwise I'll forget, slash N for a new line and then lemmatized words.
>
> **[12:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=739)** And the default for lemmatized words is nouns.
>
> **[12:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=742)** So I'm just going to say that these are the nouns because next, I'm going to show you how to do it with verbs as well and then colon and then new line, which keeps everything nice and tidy.
>
> **[12:34](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=754)** And again, nestled between that double quote and that parentheses, I have a comma and lemmatized_words.
>
> **[12:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=763)** So this is so similar in fact, I'm actually going to copy and paste this entire chunk of text and just run you through how to do verbs at the same time.
>
> **[12:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=772)** So it's going to be lemmatized_words_verb, and then it's simply lemmatizer, lemmatize word and then after word but before the close of this parentheses, I'm going to put comma and then POS equals single quotes and then a V inside that for verb.
>
> **[13:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=794)** And then right at the very end, I'm just going to say underscore verb 'cause that's what I've called it at the start.
>
> **[13:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=801)** And instead of nouns, 'cause that would be very confusing, I'm going to put verb there, verbs.
>
> **[13:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=807)** And that should be everything.
>
> **[13:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=810)** And here you can see we have the collection of stemmed words, the nouns, and the verbs themselves from that review.
>
> **[13:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=821)** NLTK also offers tools for text classification, enabling you to categorize text into predefined classes.
>
> **[13:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=831)** This is particularly useful in tasks like sentiment analysis, where you might want to classify text as positive, negative or neutral.
>
> **[14:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=841)** And to do this with our text, I'm first going to say import nltk then from nltk.classify import NaiveBayesClassifier.
>
> **[14:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=864)** And then from nltk.corpus, import movie_reviews.
>
> **[14:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=875)** That's important in a second, and I'll explain why.
>
> **[14:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=877)** And then import random.
>
> **[14:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=880)** And then from nltk import classify.
>
> **[14:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=887)** So what this has done, this has imported the necessary modules from NLTK.
>
> **[14:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=892)** The naive base classifier is basically the neural network that these decisions will go through to say whether or not something is positive, neutral, or negative.
>
> **[15:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=900)** The corpus is the collection of text that that will be trained on.
>
> **[15:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=904)** So movie reviews are a great corpus for this because they're normally very positive, very negative, or very neutral.
>
> **[15:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=911)** We've imported random because we're going to be using that shortly.
>
> **[15:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=914)** And also we've got the classifier, which allows us to classify something with a confidence score basically.
>
> **[15:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=922)** So in order to download the movie reviews, we're going to go nltk.download, and then parentheses, single quotes, close parentheses, and then movie reviews.
>
> **[15:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=936)** And we now need to extract features from a document.
>
> **[15:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=940)** So we need to define this as extract_features(words):,
>
> **[15:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=951)** and then return curly brace word: True for word in words,
>
> **[16:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=963)** and then close curly brace.
>
> **[16:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=965)** And now we need to load the movie reviews data and prepare training and testing data sets.
>
> **[16:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=973)** So for this, I want to say documents = square bracket then parentheses and then list, then open another parentheses and go movie_reviews.words,
>
> **[16:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=992)** another close parentheses fileid, double close parentheses comma then category, and then close parentheses again.
>
> **[16:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1005)** And now for category in movie underscore whoops, underscore reviews, told you this was live coding, dot categories().
>
> **[17:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1020)** And then for fileid in movie_reviews.fileid,
>
> **[17:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1031)** open parentheses category close parentheses, then close square bracket.
>
> **[17:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1037)** Now I need to shuffle the documents to randomize the order as well.
>
> **[17:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1041)** Otherwise, we overtrain our classifier, random.shuffle(documents).
>
> **[17:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1050)** That's as easy as that needs to be.
>
> **[17:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1052)** And now I need to extract the features from the documents.
>
> **[17:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1055)** So feature_sets is going to be equals to closed bracket and then parentheses, extract_features parentheses d comma C close parentheses
>
> **[17:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1074)** for parentheses (d, c) in documents, and then close square bracket.
>
> **[18:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1083)** So these extract specific features from those documents so it can use it.
>
> **[18:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1089)** And now I need to split the data into training and testing sets.
>
> **[18:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1093)** Normally this is 80% training, 20% testing.
>
> **[18:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1099)** So to do this, I want train size, train_size = int open parentheses length, or len, open parentheses feature_sets close parentheses then multiply by 0.8, then close parentheses.
>
> **[18:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1121)** And now I want train_set, and then test_set equals feature_sets square bracket,
>
> **[18:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1135)** :train_size and then close square brackets then comma.
>
> **[19:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1141)** And then I want feature_sets square bracket,
>
> **[19:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1149)** train_size: close square bracket.
>
> **[19:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1156)** Now one of the last things we need to do is we need to train the NaiveBayesClassifier.
>
> **[19:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1161)** So to do that, I'm going to say classifier equals the NaiveBayesClassifier,
>
> **[19:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1175)** dot train parentheses train_set, which always makes me want to have a little train set sound effect when I type that, but it never happens.
>
> **[19:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1187)** Maybe one day.
>
> **[19:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1188)** And now I want to evaluate, once that's trained, I want to evaluate the accuracy of this classifier.
>
> **[19:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1195)** So I'm going to say accuracy, otherwise I wouldn't know if it's actually accurate or not.
>
> **[20:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1202)** Classify.accuracy(classifier, test_set).
>
> **[20:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1221)** And then print parentheses f, couple of double quotes, classifier accuracy colon space.
>
> **[20:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1233)** And then in curly braces, I'm going to want the accuracy times by or multiply by 100, then colon 0.2 F.
>
> **[20:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1246)** And then after that, I want percentage.
>
> **[20:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1249)** So this will show me its accuracy, basically.
>
> **[20:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1252)** And now after all of that, I want to close off that with another parentheses.
>
> **[20:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1256)** And then I want to show the most informative features.
>
> **[21:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1261)** And this is very easy to do because all I need to say is, classifier.show_most_informative_features,
>
> **[21:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1277)** And then give me the 10 most informative features.
>
> **[21:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1280)** Nice and easy, that one.
>
> **[21:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1282)** Next up, I want some sample text.
>
> **[21:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1284)** So that's going to be sample_text =, and I'm going to paste in, so you don't need to see me write this exact same review again, our fictitious GitHub copilot review.
>
> **[21:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1297)** And then below that, I want to say sample_features = extract_features,
>
> **[21:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1310)** open parentheses, sample_text.split, and then open, close, close parentheses.
>
> **[21:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1319)** And finally, I want to print and then parentheses, couple double quotes and close parentheses, otherwise I'll forget to close it.
>
> **[22:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1327)** I want slash N for new line, and then classification for sample text colon.
>
> **[22:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1338)** And then after this, nestled between the double quote and the parentheses, comma.
>
> **[22:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1342)** Classifier.classify open parentheses sample_features,
>
> **[22:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1352)** then double close parentheses.
>
> **[22:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1356)** So from this, we have a classifier accuracy, if I just scroll down a little bit of 78%, and it's taken quite a few keywords and features from these movie reviews, and it's graded them as positive or negative.
>
> **[22:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1373)** That's trained that algorithm, that machine learning algorithm to distinguish between a positive review and a negative review.
>
> **[23:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1381)** And based on that training, it's classified our sample text as positive.
>
> **[23:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1389)** Applying NLTK to real world tasks can open up numerous possibilities, whether you are analyzing customer reviews, processing large data sets for legal documents, or even performing natural language processing on social media data.
>
> **[23:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1406)** NLTK provides the tools you need to make sense of it all.
>
> **[23:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1412)** In summary, then, NLTK is a powerful library that offers a wide range of tools for text analysis.
>
> **[23:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1420)** By understanding its features and how to apply them, you'll be well equipped to tackle complex text processing tasks in your projects.
>
> **[23:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1430)** Coming up next, we'll explore how to prepare your data for analysis, ensuring that you have clean, structured data ready for NLTK to work its magic.
>
> **[24:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/introduction-to-nltk-for-text-analysis?u=76281980&t=1441)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Identifiers:** feature_sets (4), word_tokenize (3), word_tokens (3), movie_reviews (3), extract_features (3)
> **Env Vars:** nltk (20), url (1), pos (1)
> **Code Keywords:** this, (6), let (1), finally, (1)
> **CLI Commands:** python (6), make (1)
> **Tools:** github (3), anaconda (2), jupyter (2)
> **UI Navigation:** scroll down (3), go to (2), scroll up (1)
> **Analogies:** for example (2), just like (2), it's like (1)
> **Exercise Files:** download the (3), exercise files (1)

#### Preparing your data for analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=0)** - [Instructor] Now imagine trying to cook a really nice meal with ingredients straight from the garden, dirt, stems, leaves, and all.
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=9)** You wouldn't start cooking without first cleaning and prepping those ingredients.
>
> **[0:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=14)** The same principle applies to data analysis.
>
> **[0:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=18)** Before you can dive into the analysis, you need to prepare your data properly.
>
> **[0:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=24)** In this video, we'll focus on the importance of preparing your data for analysis, explore key techniques for cleaning and preprocessing text data, and walk you through coding examples that show you how to remove stop words and identify bigrams using Python.
>
> **[0:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=45)** Preparing your data is a crucial step that can significantly impact the quality of your analysis.
>
> **[0:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=53)** Clean, well-prepared data leads to more accurate and meaningful results.
>
> **[0:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=59)** So let's start with one of the foundational tasks, removing stop words.
>
> **[1:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=66)** Stop words are common words such as and, the, and is that don't add much value to text analysis.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=75)** Removing them helps reduce noise in your data, and makes it easier to focus on meaningful words.
>
> **[1:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=83)** So let's dive straight in.
>
> **[1:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=85)** I'm going to need to import nltk.
>
> **[1:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=90)** And then from nltk.corpus, I'm going to import stopwords.
>
> **[1:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=99)** And don't forget that a corpus is just a collection of words and stop words, as we've just identified, are the meaningless words that we want to remove from our example text that we're going to use.
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=111)** And then I want to import re.
>
> **[1:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=115)** Now I need to download those stop words.
>
> **[1:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=118)** Now I've imported them, I actually need to download them.
>
> **[2:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=120)** So I'm going to say nltk.download, parenthesis, single quote, closed parenthesis, otherwise I'll forget, and then stopwords.
>
> **[2:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=132)** Now I need to define the function to actually remove the words.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=136)** So I'm going to define remove underscore, whoops, that's my bad spelling.
>
> **[2:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=142)** You get live coding.
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=144)** Stopwords, open parentheses on text, closed parentheses then colon, and then stopwords are going to be, it's going to be stop underscore words actually, is going to be the set open parenthesis of stopwords dot words, open parenthesis English 'cause that's what I'm focusing on right now and then double close parentheses and then words are going to be re dot findall and open parehthesis r single quotes slash w plus and then after the quote, it's comma and then text,
>
> **[3:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=194)** and then close parentheses and then filtered words.
>
> **[3:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=199)** Oops! Filtered underscore words are going to be square bracket.
>
> **[3:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=204)** That's an important distinction.
>
> **[3:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=205)** Word for word in words.
>
> **[3:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=210)** Lots of the use of the word 'word' there, almost as though that's a stop word in itself.
>
> **[3:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=216)** If word dot lower, open parenthesis, not in stop underscore words close square bracket, then return space dot join, open parenthesis, filtered underscore words, close parenthesis.
>
> **[4:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=242)** Otherwise, I'll forget.
>
> **[4:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=243)** So that has defined the function to remove the actual stop words from whatever text I put in.
>
> **[4:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=249)** Now, you can make this run against an actual file, but for this example, I'm going to have it run against some sample text.
>
> **[4:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=256)** So if I say sample underscore text equals, and if you've watched the previous videos, you know exactly what I'm about to paste in here.
>
> **[4:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=263)** It's our fictitious GitHub copilot review, also surrounded by triple quotation marks.
>
> **[4:31](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=271)** And then under that, I'm going to say cleaned underscore text equals, remove underscore stop words, parentheses, sample underscore, underscore text, close parentheses, and then print parentheses cleaned text, close parentheses.
>
> **[4:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=298)** And there we have it.
>
> **[4:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=299)** We can see the stop words like our, has, a, in have all been removed from that sample text leaving the most meaningful words behind.
>
> **[5:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=312)** So as you can see, the function filters out common stop words from the sample text, leaving those with a more relevant words.
>
> **[5:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=321)** This clean data is now much easier to analyze.
>
> **[5:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=325)** Now let's talk about identifying bigrams.
>
> **[5:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=330)** Bigrams are pairs of consecutive words that can provide more context than single words alone.
>
> **[5:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=337)** For example, machine learning is more meaningful as a bigram than the two words machine and learning.
>
> **[5:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=345)** Given the sentence, I love Mike's LinkedIn learning course, the bigrams would be, I love, love Mike's, Mike's LinkedIn, LinkedIn Learning and Learning course.
>
> **[6:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=361)** So let's use nltk to identify bigrams in our sample text.
>
> **[6:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=367)** So on my editor, on my Jupiter notebook, I'm going to say from nltk dot collocations and then import bigram associate measures.
>
> **[6:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=390)** And also by bigram collection finder.
>
> **[6:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=398)** Now I need to define the function to find the bigrams in that text that we generated a moment ago.
>
> **[6:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=405)** So def find underscore bigrams which is text, and then close parentheses and colon and then words equals re dot find all open parentheses r single quote, slash w plus very similar to earlier.
>
> **[7:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=428)** And the single quote again, then comma, and then text, and then close parentheses.
>
> **[7:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=433)** And then the next line bigram underscore measures equals bigram assoc measures, open close parentheses.
>
> **[7:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=449)** And then finder equals bigram collocation finder dot from underscore underscore words, open parentheses words, close parentheses and then bigrams equals finder dot nbest open parentheses bigram underscore measures dot pmi and then let's give it a value of how many bigrams that we want it to find.
>
> **[8:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=490)** Let's say 10, the top 10 bigrams that it can find given its learning and then return bigrams.
>
> **[8:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=501)** Let me just scroll down a bit.
>
> **[8:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=503)** So then we're going to use it on our cleaned text from earlier.
>
> **[8:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=507)** So I'm going to say bigrams equals find, underscore bigrams, open parentheses cleaned underscore text.
>
> **[8:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=518)** And because we've run these in unison or in succession, I should say, it means that it can lead off of the previous results.
>
> **[8:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=525)** So the text we generated earlier is relevant in this example in this environment.
>
> **[8:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=531)** And then print, open parentheses bigram.
>
> **[8:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=536)** Now if I run that, we can see that the identify the top 10 identified bigrams in that cleaned text are 30 developers, AI ability, since implementing, ability quickly, able focus, also decreased, automating repetitive, building features, deadlines consistently and decreased need.
>
> **[9:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=563)** All of those words make more impact and more sense when together than potentially they would if they were separate.
>
> **[9:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=572)** So in summary, preparing your data by removing the stop words and identifying bigrams is essential for effective text analysis.
>
> **[9:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=582)** These steps help you focus on the most meaningful parts of your data, setting the stage for deeper analysis.
>
> **[9:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=591)** And up next, we'll explore techniques to identify sentiments and themes in your text data, helping you uncover deeper insights and patterns.
>
> **[10:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/preparing-your-data-for-analysis?u=76281980&t=603)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4)
> **CLI Commands:** find (6), make (2), python (1)
> **Analogies:** imagine (1), such as (1), for example (1), similar to (1)
> **Definitions:** is a  (1), means that (1)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Techniques to identify sentiments and themes
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=0)** - [Instructor] Have you ever read a review and instantly known whether it was positive or negative?
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=6)** Our brains are wired to pick up on sentiments and themes, but when it comes to large data sets, we need the help of technology to do it effectively.
>
> **[0:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=18)** In this video, we're going to explore the techniques to identify sentiments and themes within text data.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=25)** We'll walk through a coding example where we extract sentiments from individual product reviews, and by the end, you'll be able to automate this process and apply it to your own data sets.
>
> **[0:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=41)** So in my jupyter notebook, let's say I have seven reviews for GitHub Copilot or whatever software I happen to be piloting.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=51)** If I were to sit and read through these, I could ascertain whether or not they were positive, negative, or neutral.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=56)** But if there was multiple or hundreds or thousands of these, that would be impossible.
>
> **[1:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=62)** So in order to have code do this for me, what I'm going to need to do is say from textblob, import textblob,
>
> **[1:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=77)** and then I will need those sample reviews.
>
> **[1:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=79)** So I will say reviews = square bracket, very important.
>
> **[1:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=85)** And then paste those reviews in there, making sure that at the end of each review or line of text, I have a comma and everything is encapsulated in its own set of double quotes.
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=98)** So I now need to analyze the sentiment for each review and classify it as positive, negative, or neutral.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=106)** So for this, I'm going to say for review in reviews,
>
> **[1:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=114)** blob = Text Blob (review) then sentiment = blob.sentiment.polarity.
>
> **[2:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=136)** Okay, so now I need to classify the statements.
>
> **[2:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=141)** So if I say if, just scroll down a bit as well, if sentiment > 0: then the sentiment_type = "Positive".
>
> **[2:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=163)** And I'm going to say elif the sentiment == 0 oops, 0: then the sentiment_type = "Neutral."
>
> **[3:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=184)** And also else if the sentiment_type = "Negative."
>
> **[3:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=197)** So what this does is it looks at the sentiment score.
>
> **[3:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=200)** If it's higher than zero, it'll be positive.
>
> **[3:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=202)** If it's zero, it'll be neutral.
>
> **[3:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=204)** And if it's lower than zero, it'll be negative.
>
> **[3:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=209)** And now I need to output the sentiment type and score.
>
> **[3:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=213)** So if I say print and then f " Review: and then space ' { }.
>
> **[3:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=229)** I want review, which will then be in those single quotes that I mentioned a second ago, instead of being there, has a sentiment score of, and then whatever the sentiment is {sentiment} and is classified as the sentiment_type.
>
> **[4:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=259)** And then close curly bracket, close quotations, and close parentheses.
>
> **[4:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=267)** And that should be everything.
>
> **[4:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=270)** Now, if I've run this, we can see that it has taken those reviews, scored them, and given us an actual type classifier for it.
>
> **[4:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=280)** So the first review, you can see that it has scored it as 0.46875, which is very specific, and it's classified as positive because it's more than zero.
>
> **[4:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=291)** The second one is 0.0, and therefore it's neutral.
>
> **[4:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=294)** And the third one is minus 0.4, and it's classified as negative and so on and so on.
>
> **[5:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=302)** So by analyzing these sentiment scores, you can quickly assess the overall tone of the reviews.
>
> **[5:10](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=310)** This is particularly useful when dealing with large volumes of text data where manual analysis would be far too time consuming.
>
> **[5:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=321)** To summarize, sentiment analysis is a powerful technique for understanding the emotional tone of text data.
>
> **[5:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=330)** And by using libraries like Text Blob, you can easily extract sentiments from reviews, social media posts, and other textual content.
>
> **[5:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=341)** And coming up next, we'll explore not only how to get the qualitative data from your reviews and feedback, but the quantitative data that are the hard metrics that will fuel your visualizations and your charts.
>
> **[5:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/techniques-to-identify-sentiments-and-themes?u=76281980&t=355)** So stay tuned.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), let (1), if, (1), elif (1)
> **Code Identifiers:** sentiment_type (4)
> **Versions:** 0.46875 (1), 0.0 (1), 0.4 (1)
> **Tools:** jupyter (1), github (1)
> **Cross-References:** coming up (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Gathering metrics from GitHub regarding Copilot usage
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=0)** - [Instructor] Imagine trying to access your bank account online without a password.
>
> **[0:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=5)** It's pretty impossible, right?
>
> **[0:06](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=6)** Just as passwords protect your personal information, access tokens serve as the key to access GitHub's API securely.
>
> **[0:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=17)** Without them, you wouldn't be able to retrieve valuable data like how often GitHub Copilot is being used across your organization.
>
> **[0:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=26)** In this video, we're going to cover how to generate a GitHub access token, install GitHub on the CLI, and also use the CLI to harvest Copilot usage data from the GitHub API.
>
> **[0:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=41)** Let's start by understanding what a GitHub access token actually is and why it's important.
>
> **[0:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=48)** A GitHub access token is a personal access token that allows you to authenticate to GitHub's API without using your password every time.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=58)** It's a secure way to interact with GitHub programmatically.
>
> **[1:03](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=63)** So let's generate a GitHub access token.
>
> **[1:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=67)** First, let's log into your GitHub account, navigate to your profile, and then click on settings.
>
> **[1:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=76)** On your profile page, if you go all the way to the bottom on the left hand side, you can see developer settings.
>
> **[1:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=83)** Clicking on that and then clicking on personal access tokens gives you the options of fine-grained tokens and tokens classic at time of making this.
>
> **[1:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=95)** I just want a classic token.
>
> **[1:38](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=98)** Now, all I need to do is click on generate new token and then generate new token classic.
>
> **[1:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=105)** All I now need to do is give it a name.
>
> **[1:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=107)** So I'm going to say Pilot Program Metrics.
>
> **[1:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=114)** The default expiration date is set to 30 days.
>
> **[1:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=116)** However, you can set it to no expiration or a custom amount.
>
> **[2:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=120)** No expiration is probably not advised, however.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=124)** In regards to scopes, the sort of scopes you'll need for gathering GitHub Copilot data specifically would be repo and admin, so repo and admin org.
>
> **[2:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=139)** And now I just need to scroll down to the bottom, click generate token, and it will generate me this token.
>
> **[2:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=147)** And make sure to copy this token down immediately, because GitHub will only show this once.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=153)** Store it securely, as you'll need it for accessing the GitHub API.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=159)** Now that we have our GitHub access token, let's install GitHub on the command line interface.
>
> **[2:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=165)** The GitHub CLI is a really powerful tool that lets you interact with GitHub directly from your terminal.
>
> **[2:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=172)** To install it, just navigate to cli.[github.com](https://github.com) and download the executable file here for Windows.
>
> **[3:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=182)** Now with the GitHub CLI installed, it is time to authenticate it using the access token we generate earlier, so in your terminal, run hg auth login, and it will ask if you want to log into [github.com](https://github.com) or the GitHub Enterprise Server, I'm going to choose [github.com](https://github.com).
>
> **[3:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=201)** It's also going to ask what my preferred protocol for GI operations are on the host.
>
> **[3:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=205)** Now, mine for this instance are going to be HTTPS.
>
> **[3:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=209)** It's also going to ask me if I want to authenticate using my GitHub credentials.
>
> **[3:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=213)** For this, I'm going to say yes, and I'm going to say paste in an authentication token.
>
> **[3:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=220)** At this point, this is where you would paste in that access token.
>
> **[3:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=223)** I don't need to do this on my terminal because I've already done this.
>
> **[3:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=228)** Now that we're all authenticated, we're going to use the CLI to gather data from the GitHub Copilot API.
>
> **[3:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=235)** We're going to use the following command to retrieve the Copilot usage metrics, GH for GitHub, and then API-H, and then in quotation marks, accept application slash vnvd.github
>
> **[4:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=263)** plus JSON, which is what we're going to be getting the data back in.
>
> **[4:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=268)** Then after that quotation mark, have another header, so -H again, and say in, double quotation marks, X-github-API-version, colon, space, 2022-11-28, and that's outside of that quotation marks.
>
> **[4:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=292)** And then we need the organization link dor the organization we're going to be retrieving data from, so it's going to be org, and then name of org.
>
> **[5:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=305)** So you would replace name of org for your organization's name in GitHub, and then Copilot, and then usage.
>
> **[5:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=317)** Once you've run this, you would get a large amount of JSON data back.
>
> **[5:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=323)** Now, the JSON data I've run here is fictitious data built upon the example results from the getting started guide on the GitHub Copilot API documentation site.
>
> **[5:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=337)** But as you can see, it gives you information like the day, the total suggestions counts, the acceptance counts, the lines suggested, and much, much more.
>
> **[5:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=347)** These are hard metrics.
>
> **[5:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=350)** This is your quantitative data that you'll be building on in your business case.
>
> **[5:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=357)** In summary, we've walked through how to generate a GitHub access token, installed the GitHub CLI, and used it to retrieve usage metrics from the Copilot API.
>
> **[6:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=369)** These are your hard metrics for your pilot program.
>
> **[6:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=373)** In this example, it is GitHub Copilot, but these hard metrics could be for any software you are piloting at the time.
>
> **[6:22](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/gathering-metrics-from-github-regarding-copilot-usage?u=76281980&t=382)** Coming up next, we're going to explore how to visualize all of this data we've gathered so far, turning raw metrics into actionable insights, so stay tuned.

> [!info]- Semantic Content
>
> **Tools:** github (33), terminal (3), command line (1)
> **Env Vars:** api (9), cli (6), json (3), https (1)
> **Code Keywords:** let (4), this. (2), this, (2), interface (1), from, (1)
> **Prerequisites:** install (3), you'll need (2), getting started (1)
> **UI Navigation:** navigate to (2), click on (2), scroll down (1)
> **URLs:** [github.com](https://github.com) (3)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### Visualizing data and results
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=0)** - [Narrator] In this video, we have reached the moment of this course where everything starts coming together that we've gathered so far.
>
> **[0:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=7)** It is time to transform our data into visualizations that help us understand the trends and patterns within it, whether it's qualitative data like sentiment analysis or quantitative metrics gathered through the GitHub Copilot API.
>
> **[0:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=24)** Turning this raw data into graphs will be key to drawing insights and presenting a compelling business case for this pilot project.
>
> **[0:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=36)** Let's begin with the sentiment analysis where we've taken user feedback and applied sentiment scores to each review in the previous videos.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=46)** Each piece of feedback has been categorized into three possible sentiment types.
>
> **[0:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=53)** Positive, negative, or neutral.
>
> **[0:55](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=55)** These qualitative data points help us understand how users felt about the software during the pilot, whether they loved it, found it okay, or had some frustrations.
>
> **[1:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=67)** This can be useful to find common areas or routinely mentioned areas of the system that were piloting.
>
> **[1:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=76)** We can visualize this by creating a pie chart that shows us the number of reviews that fell into each sentiment category, and by doing this, we can quickly grasp the overall user experience in one simple graphic.
>
> **[1:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=93)** Next, let's move onto the metrics we gathered through the GitHub Copilot API.
>
> **[1:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=99)** These numbers give us quantitative insights into how the software was used throughout the pilot.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=106)** This data includes things like the total number of suggestions and acceptances, the lines of code generated, and how many users were actively engaging with the software.
>
> **[1:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=119)** Now, because this data was in JSON format, I have paused it separately into a CSV file to make it more manageable and ready for visualization.
>
> **[2:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=129)** So here's how it looks in a CSV format.
>
> **[2:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=135)** Now, whilst this goes a little beyond the scope of this course, if you wanted to convert JSON format data into CSV quite easily.
>
> **[2:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=145)** I will include a script in the exercise files that you can run to do this using Excel.
>
> **[2:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=153)** We can graph this data over time.
>
> **[2:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=155)** One effective way to visualize these metrics is to use a line graph.
>
> **[2:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=162)** This shows the total suggestions versus the total acceptances over the days of the pilot.
>
> **[2:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=170)** This type of graph really helps us track adoption and user engagement.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=177)** Now that we have both the sentiment data and the usage data in a visual format, we can combine these insights to tell a cohesive story.
>
> **[3:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=188)** For example, we can create side-by-side graphs where one shows user sentiment and the other shows system usage.
>
> **[3:17](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=197)** This juxtaposition might reveal interesting correlations such as whether positive sentiment increases as users engage more deeply with the software, or if frustration grows with more frequent use.
>
> **[3:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=215)** These visualizations are not just for understanding the pilot results, however, they are also an essential part of telling the story to stakeholders.
>
> **[3:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=225)** So in summary, visualizing both sentiment and usage metrics is crucial for understanding the true impact of this pilot.
>
> **[3:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=236)** These graphs will be invaluable when you are ready to present your business case to stakeholders as they provide clear data backed insights into both user experience and the overall systems performance.
>
> **[4:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=252)** And coming up next, we'll explore how to incorporate these visualizations into a compelling narrative that can help secure support for your full deployment.
>
> **[4:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/visualizing-data-and-results?u=76281980&t=263)** So stay tuned.

> [!info]- Semantic Content
>
> **Env Vars:** csv (3), api (2), json (2)
> **Code Keywords:** let (2), this, (1)
> **CLI Commands:** find (1), make (1)
> **Tools:** github (2)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** coming up (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)


### 8. Writing a Business Case

> [↑ Back to Table of Contents](#table-of-contents)

#### Structuring your business case
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/structuring-your-business-case?u=76281980)

#### Incorporating data and insights from the pilot
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=0)** - [Instructor] Have you ever made a big decision based just on your gut feeling, only to realize later that you should have looked at the facts first?
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=9)** Now, when it comes to convincing stakeholders to back your project, relying on intuition alone isn't enough.
>
> **[0:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=16)** The data and insights you gather during the pilot phase are your most powerful tools.
>
> **[0:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=23)** They turn your proposal from an idea into a concept.
>
> **[0:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=29)** In this video, we're going to explore how to incorporate data and insights from the pilot phase into your evolving business case that we started in the previous video.
>
> **[0:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=39)** We'll discuss the best methods for integrating this data and how to present it effectively, particularly using tools like PowerPoint.
>
> **[0:50](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=50)** So let's start by understanding why data from the pilot phase is so crucial.
>
> **[0:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=56)** The pilot phase is essentially a small-scale trial run of your project.
>
> **[1:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=61)** It allows you to test your assumptions, identify potential challenges, and gather concrete evidence of what works and what doesn't.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=71)** Its data is invaluable when you're building your business case as it provides real-world validation for your proposed solution.
>
> **[1:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=83)** The first step in incorporating this data is to analyze the results from your pilot.
>
> **[1:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=89)** Look at key metrics that indicate success or areas that might need improvement.
>
> **[1:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=96)** For example, if your pilot was focused on improving efficiency, metrics like time saved or cost reductions are critical.
>
> **[1:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=105)** Once you've identified these metrics, you can integrate them into your business case in several ways.
>
> **[1:53](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=113)** One effective method is to include a dedicated section in your business case titled Pilot Results or Appendix.
>
> **[2:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=122)** In this section, summarize the key findings and show how they support your proposed solution.
>
> **[2:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=129)** This not only strengthens your argument, but also demonstrates that your proposal is grounded in actual data.
>
> **[2:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=138)** Another approach is to weave the pilot data throughout your business case.
>
> **[2:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=144)** For instance, when discussing the benefits of your project, you can reference specific pilot results to back up these claims.
>
> **[2:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=152)** This approach creates a narrative that consistently ties your proposal to proven outcomes, making it more compelling.
>
> **[2:43](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=163)** When presenting this data, visuals are your best friend.
>
> **[2:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=167)** Charts, graphs, and tables can help make complex data easier to understand at a glance.
>
> **[2:54](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=174)** In PowerPoint, you can use line graphs to show trends over time, bar charts to compare different variables, or pie charts to illustrate proportions.
>
> **[3:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=184)** Choose the type of visualization that best conveys your message.
>
> **[3:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=191)** It's also important to make sure your visuals are clear and not cluttered.
>
> **[3:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=195)** Each slide should focus on one main idea or data point.
>
> **[3:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=200)** You can use color coding and labels to highlight the most important information.
>
> **[3:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=206)** And keep text to a minimum, remember, your goal is to make the data as digestible as possible for the audience.
>
> **[3:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=215)** So incorporating data and insights from your pilot phase into your business case is essential for making a strong evidence-based proposal.
>
> **[3:45](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=225)** By analyzing your pilot results, integrating them into your case, and presenting them with crystal clear visuals, you can turn your proposal into a compelling argument for action.
>
> **[3:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=239)** Coming up next, we're going to dive into how to present these results to stakeholders, ensuring that your data-driven insights resonate and lead to the support you need.
>
> **[4:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/incorporating-data-and-insights-from-the-pilot?u=76281980&t=251)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), case. (1), case, (1)
> **Cross-References:** previous video (1), coming up (1)
> **Analogies:** for example (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Presenting results to stakeholders
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=0)** - [Instructor] Imagine you've put in months of hard work running a pilot program, gathering data, and analyzing the results.
>
> **[0:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=9)** Now it's time to present your findings to stakeholders.
>
> **[0:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=14)** This is a pivotal moment.
>
> **[0:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=16)** How you present your results can make the difference between getting full support for your project or having it canceled.
>
> **[0:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=26)** In this video, we're going to explore how to present your results effectively to stakeholders.
>
> **[0:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=32)** We'll discuss techniques for presenting data in a way that builds confidence,, and we'll cover some best practices for structuring and delivering a persuasive business case.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=46)** So let's start by talking about the importance of knowing your audience.
>
> **[0:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=51)** Before you present, take some time to understand who your stakeholders actually are.
>
> **[0:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=58)** What are their main concerns?
>
> **[1:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=60)** What do they care about most?
>
> **[1:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=62)** Tailoring your presentation to address these concerns directly will make your message far more impactful.
>
> **[1:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=71)** Once you understand your audience, it is essential to structure your presentation in a way that leads them logically through the data and the conclusions.
>
> **[1:21](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=81)** Start with a clear and concise executive summary.
>
> **[1:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=85)** This should provide a snapshot of your key findings and the recommendations for them to follow.
>
> **[1:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=92)** The goal here is to capture attention and set the stage for the details to come.
>
> **[1:40](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=100)** When presenting the data itself, clarity is key.
>
> **[1:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=104)** Use visuals, like charts, graphs, and tables, to make the data more digestible.
>
> **[1:51](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=111)** For example, if you're showing how a solution improved efficiency during a pilot, a simple before-and-after bar chart can quickly convey the impact.
>
> **[2:01](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=121)** Avoid cluttered slides.
>
> **[2:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=124)** Each slide should focus on one main idea.
>
> **[2:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=131)** It is also important to contextualize the data.
>
> **[2:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=135)** Don't just show numbers, explain what they mean.
>
> **[2:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=138)** For instance, if you increased efficiency by 20%, explain how that translates to cost savings or faster project timelines.
>
> **[2:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=148)** This helps stakeholders understand the real-world implications of your results.
>
> **[2:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=156)** Building confidence in your business case involves more than just data.
>
> **[2:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=161)** You need to tell a compelling story.
>
> **[2:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=164)** Start by framing the problem that your project addresses.
>
> **[2:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=168)** Walk through the pilot results that demonstrate your solution's effectiveness, and end with a strong call to action.
>
> **[2:57](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=177)** Make it clear that moving forward with full deployment is the next logical step.
>
> **[3:05](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=185)** Another key aspect of building confidence is anticipating and addressing potential concerns.
>
> **[3:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=192)** Before your presentation, have a think about questions or objections that stakeholders might have.
>
> **[3:19](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=199)** Prepare your responses well in advance, and include some supporting data or examples that reinforce your position.
>
> **[3:30](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=210)** And when it comes to delivering your presentation, practice is crucial.
>
> **[3:36](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=216)** Rehearse your presentation multiple times to ensure that you're comfortable with the material and that your delivery is smooth.
>
> **[3:44](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=224)** Pay attention to your pacing.
>
> **[3:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=227)** Give stakeholders time to absorb each point before moving on.
>
> **[3:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=232)** And remember to make eye contact and engage with your audience throughout the presentation.
>
> **[4:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=240)** So to sum up, presenting the results to stakeholders is about more than just sharing data.
>
> **[4:07](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=247)** It's about building a compelling case that resonates with your audience.
>
> **[4:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=252)** By understanding your stakeholders, structuring your presentation effectively, and delivering your message with confidence, you can increase the likelihood of gaining the support you need for full deployment.
>
> **[4:27](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=267)** And coming up next, we'll discuss strategies for gaining support for full deployment, ensuring that your project moves forwards with the backing that it needs.
>
> **[4:37](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/presenting-results-to-stakeholders?u=76281980&t=277)** So stay tuned.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Analogies:** imagine (1), for example (1), for instance (1)
> **Code Keywords:** case. (1), let (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)

#### Strategies for gaining support for full deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=0)** - [Instructor] Have you ever tried to push a boulder uphill by yourself?
>
> **[0:04](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=4)** No, me either, but I know it's an overwhelming task.
>
> **[0:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=8)** However, with the right help, it can become manageable.
>
> **[0:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=11)** The same goes for moving a project from pilot to full deployment.
>
> **[0:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=16)** You need the support of your stakeholders to get it over the line.
>
> **[0:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=20)** Without their buy-in, even the best ideas can stall.
>
> **[0:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=25)** In this video, we're going to explore strategies for gaining the support you need to fully deploy your project.
>
> **[0:32](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=32)** We'll discuss how to effectively communicate the value of your project, engage stakeholders throughout the process, and maintain that support as you move towards full implementation.
>
> **[0:47](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=47)** So let's start by understanding why stakeholder support is so critical.
>
> **[0:52](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=52)** Stakeholders often control the resources, approvals, and decisions that can make or break a project.
>
> **[1:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=60)** Gaining their support ensures that you have the necessary backing, both financially and organizationally, to move forwards.
>
> **[1:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=69)** Without it, even the most promising projects can be left in limbo.
>
> **[1:15](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=75)** One of the most effective strategies for gaining support is to clearly articulate the values of your project.
>
> **[1:23](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=83)** Stakeholders need to understand not just what you're doing, but why it matters.
>
> **[1:29](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=89)** This means framing your project in terms of benefits that it will deliver, whether that's cost saving, increased efficiency, or competitive advantage.
>
> **[1:41](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=101)** And to do this, tailor your message to your audience.
>
> **[1:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=106)** Different stakeholders have different concerns.
>
> **[1:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=109)** Some might be focused on financial returns, whilst others might care more about operational improvements.
>
> **[1:56](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=116)** By addressing these specific concerns, you make it easier for stakeholders to see how your project aligns with their overall goals.
>
> **[2:08](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=128)** Another key strategy is to engage stakeholders early and often.
>
> **[2:14](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=134)** Don't wait until your project is fully developed to seek their input.
>
> **[2:18](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=138)** Involve them from the beginning, whether through regular updates, feedback sessions, or informal check-ins.
>
> **[2:26](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=146)** This not only builds trust, but also allows you to address any concerns before they become obstacles.
>
> **[2:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=155)** Building a coalition of support is also crucial.
>
> **[2:39](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=159)** Identify key influencers within your organization, those who have respect and ear of other stakeholders.
>
> **[2:49](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=169)** If you can get these individuals on board with your project, they can help you champion it and sway others who might be on the fence.
>
> **[2:59](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=179)** Maintaining support is just as important as gaining it As your project progresses, continue to keep stakeholders informed about key milestones and successes.
>
> **[3:13](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=193)** Celebrate those wins publicly and acknowledge the contributions of those who helped make them happen.
>
> **[3:20](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=200)** This reinforces the value of your project and keeps momentum going.
>
> **[3:28](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=208)** So in summary, gaining support for full deployment requires a strategic approach.
>
> **[3:35](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=215)** By clearly communicating the value of your project, engaging stakeholders throughout the process, and building a coalition of support, you can increase the likelihood of success.
>
> **[3:48](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/strategies-for-gaining-support-for-full-deployment?u=76281980&t=228)** And remember, maintaining that support is key to ensuring your project reaches its full potential.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** let (1), this, (1), continue (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps to continue your software pilot journey
> [LinkedIn Learning](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=0)** - [Narrator] Congratulations, you've just completed this course on running a successful software pilot and using that information to build a solid business case for full deployment.
>
> **[0:12](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=12)** Whether you are testing GitHub Copilot or any other software, you now have a comprehensive framework to ensure your pilot is a success.
>
> **[0:24](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=24)** Over the last few lessons, we've explored a range of strategies to help you confidently manage your software pilot projects.
>
> **[0:33](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=33)** We began by discussing how to plan and execute a pilot, including identifying the right team and defining clear objectives.
>
> **[0:46](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=46)** From there, we dove into gathering metrics from both qualitative feedback like sentiment analysis and quantitative feedback, such as the usage statistics from GitHub Copilot.
>
> **[1:02](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=62)** You've learned how to organize and analyze that data to draw meaningful results.
>
> **[1:09](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=69)** And finally, we talked about crafting a business case based on your pilot's results.
>
> **[1:16](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=76)** Whether that means highlighting improved productivity or addressing potential challenges.
>
> **[1:25](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=85)** And the key takeaway, you now have the tools to ensure that any pilot you run is well organized data-driven and convincing enough to secure stakeholder buy-in for future deployments.
>
> **[1:42](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=102)** And as for next steps, I highly recommend checking out the GitHub Copilot training videos by Ray Villalobos on LinkedIn Learning to deepen your knowledge of how to best leverage GitHub Copilot for your team.
>
> **[1:58](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=118)** And don't forget, you can follow me on LinkedIn and other social media platforms for more insights, tips, and other tech and gaming related content.
>
> **[2:11](https://www.linkedin.com/learning/delivering-and-analyzing-a-software-pilot-github-copilot/next-steps-to-continue-your-software-pilot-journey?u=76281980&t=131)** Thanks again for completing this course, and I look forward to hearing about your pilot's projects successes.

> [!info]- Semantic Content
>
> **Tools:** github (4)
> **Code Keywords:** finally, (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Mike Smith]]

## Resources

- Exercise files available

## Skills Covered

- GitHub

## Path Context

### In [[Transform Your Programming with AI Coding Tools]]
← [[Responsible GitHub Copilot- Creating Reliable Code Ethically]] | **7 of 7**

### In [[Master GitHub Copilot]]
← [[Supercharge the Development Process with GitHub Extensions for Copilot Chat]] | **4 of 8** | [[Responsible GitHub Copilot- Creating Reliable Code Ethically]] →

## Appears In

- [[Transform Your Programming with AI Coding Tools]]
- [[Master GitHub Copilot]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub

---

[↑ Back to top](#)