---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-pipeline-automation-with-github-actions-using-r-and-python
url: "https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python"
duration_minutes: 132
duration: 2h 12m
level: Intermediate
updated: 4/23/2024
learners: 8552
skills:
  - Python (Programming Language)
  - R (Programming Language)
  - GitHub
  - Data Pipelines
exercise_files: true
github: "https://github.com/LinkedInLearning/data-pipeline-automation-with-github-actions-4503382"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHvVdDve6puQA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713388433219?e=2147483647&amp;v=beta&amp;t=mG5AuFH5Tkyk2oiJYqBS0Zx_Z2OiYNRNGFYlNWvTuoA"
linkedin_topic: Data Science
learning_paths:
  - '[[Advance Your Data Engineering Skills]]'
prev_courses:
  - '[[Data Engineering Project- Build Streaming Ingestion Pipelines for Snowflake with AWS]]'
next_courses:
  - '[[End-to-End Data Engineering Project]]'
path_nav: '[{"path":"Advance Your Data Engineering Skills","position":9,"total":10,"prev":"Data Engineering Project- Build Streaming Ingestion Pipelines for Snowflake with AWS","next":"End-to-End Data Engineering Project"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/devops
  - skill/python-programming-language
  - skill/r-programming-language
  - skill/github
  - skill/data-pipelines
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Pipeline%20Automation%20with%20GitHub%20Actions%20Using%20R%20and%20Python.md)

![Data Pipeline Automation with GitHub Actions Using R and Python](https://media.licdn.com/dms/image/v2/D560DAQHvVdDve6puQA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713388433219?e=2147483647&amp;v=beta&amp;t=mG5AuFH5Tkyk2oiJYqBS0Zx_Z2OiYNRNGFYlNWvTuoA)

# Data Pipeline Automation with GitHub Actions Using R and Python

> In this course, learn how to set up workflows on GitHub Actions to automate processes with both R and Python. Instructor Rami Krispin takes you through the automation process, sharing real-world examples. He shows you how to set up a data pipeline, pull metadata from a pipeline, and deploy a live dashboard with GitHub Actions and Pages. If you’re tired of spending hours running scripts manually, o

> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python) | 2h 12m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. EIA API** (17 videos)
- **3. 2. Data Automation** (7 videos)
- **4. 3. Deployment** (7 videos)
- **5. 4. Monitoring** (2 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Data pipeline automation with GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=0)** - Do you spend hours on running scripts manually?
>
> **[0:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=3)** Do you frequently pull data from APIs or other data sources and update dashboards and reports?
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=9)** If so, you are in the right place.
>
> **[0:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=11)** In this course, we will learn how to set workflows on GitHub actions to automate processes with both R and Python.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=19)** We will demonstrate the automation process with real life examples.
>
> **[0:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=23)** Specifically, we will set a data pipeline to pull the hourly demand for electricity in California from the EIA API, and deploy a live dashboard with GitHub actions and pages.
>
> **[0:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=35)** Hi, I'm Rami Krispin, senior manager of Data Science and Engineering.
>
> **[0:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=39)** I have decades of experience in working with data.
>
> **[0:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=42)** Are you ready to take the journey with me?
>
> **[0:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=44)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** eia (1), api (1)
> **Tools:** github (2)
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Speakers:** - do (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=0)** - [Instructor] To successfully complete the course, you will need to know either R or Python, as I will demo in both languages in this course.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=9)** You also need some basic command line knowledge, including Git.
>
> **[0:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=14)** You can complete the course without knowledge in Docker, but it's highly recommended.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=19)** All the code and examples will be used in the course are available in the course repo.
>
> **[0:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=25)** This course has Docker integration setting for VS Code with the Dev Containers extension.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=32)** This includes both the R and Python dependencies, which you can load on your local machine to reproduce the code.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), docker (2), git (1)
> **Tools:** command line (1), vs code (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 2. 1. EIA API

#### EIA API
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=0)** - [Instructor] During the course, we will utilize the EIA API to extract electricity related data with the help of GitHub Actions and other tools.
>
> **[0:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=10)** In this chapter, our focus will be on the EIA API, its functionality, the variety of datasets available on the API, their structure, and how to retrieve the data using R and Python.
>
> **[0:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=24)** Before getting started with the API, let's first explain what EIA is.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=32)** EIA stands for Energy Information Administration or the U.S. Energy Information Administration.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=40)** It is a principle agency of the U.S. Federal Statistical System and part of the U.S. Department of Energy.
>
> **[0:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=48)** This agency is responsible for collecting, analyzing, and disseminating energy information to support policymaking and public understanding of this field.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=61)** The EAI website, [eia.gov](https://eia.gov), is a great resource for the U.S. energy sector.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=68)** On the website, you can find recent news and updates related to the energy sector, daily reports, key KPIs, such as natural gas or crude oil, future prices, short and long-term energy outlook and forecast, and, of course, data, a lot of it with a great API access.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=94)** That includes more than 1 million series related to different subfields of the energy sector, such as electricity, natural gas, crude oil, CO2 emissions, and others.
>
> **[1:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=109)** To use the API, you need to have a valid API key.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=114)** Let's open the browser at [eia.gov](https://eia.gov) and see the steps for setting an API key.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=120)** We're now on the [eia.gov](https://eia.gov) website.
>
> **[2:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=125)** Let's go to the bottom of the page, Look for the Features, and under the Features, look for the API logo.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=133)** Click the API logo.
>
> **[2:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=135)** Then click the REGISTER button on the right side.
>
> **[2:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=139)** That should pop up a registration form, where you have to fill your details.
>
> **[2:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=145)** If the form is not popping up, check if an ad blocker is installed on your browser.
>
> **[2:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=152)** Disable it if needed for this website and refresh the browser.
>
> **[2:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=156)** Once you complete the registration process and confirm your details, you should receive an email from the EIA Developer email address with the API key.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), eia (5), eai (1), co2 (1), register (1)
> **Code Keywords:** let (3), public (1)
> **URLs:** [eia.gov](https://eia.gov) (3)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** python (1), find (1)
> **UI Navigation:** open the (1), go to (1)
> **Analogies:** such as (2)
> **Prerequisites:** getting started (1), you need to have (1)

#### Setting an environment variable
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=0)** - [Instructor] In this video, we will learn how to store the EIA_API_KEY as an environment variable on the Mac operating system.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=9)** We will use the terminal to set the environment variable.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=13)** There are a couple of ways to store environment variables in MacOS.
>
> **[0:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=18)** We will use the .zshenv file, which as its name implies, it is designated file to store environment variables, which will be available to any application upon their launch.
>
> **[0:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=35)** Let's now on the terminal open the .zshenv using Vim.
>
> **[0:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=45)** I'm in the root folder, and the .zshenv file should be located under the root folder.
>
> **[0:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=52)** So let's do Vim .zshenv, and here we go.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=61)** And as you can see, the file is empty.
>
> **[1:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=64)** To add the environment variable, click I to switch from the view to insert mode.
>
> **[1:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=73)** As you can see, I clicked I, and now this is indicated I'm in insert mode.
>
> **[1:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=78)** Now, let's set a variable by calling the variable EIA_API_KEY.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=90)** I'm using all uppercase.
>
> **[1:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=91)** You can choose either way.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=93)** And let's assign the value.
>
> **[1:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=95)** I copy/paste the value of my API key, and I will put it over here.
>
> **[1:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=101)** Now, before we go ahead and save the file, let's add export command before to make sure that this will be available to any application.
>
> **[1:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=111)** Export, type here export, space, and we are ready to save the file.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=120)** To save the file, we first need to exit insert mode by clicking escape.
>
> **[2:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=126)** Now, click column and type W to wright and Q quit.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=133)** Note that by default, the terminal sourced the .zshenv file during the terminal launch.
>
> **[2:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=140)** So any changes made afterward won't be automatically sourced.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=144)** So for example, if you try to print the variable with the echo command, let's type echo, dollar sign, and EIA_API_KEY, it's empty.
>
> **[2:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=157)** So either you can close the terminal or to source this file, and you will be able to see the file.
>
> **[2:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=165)** So let's test it.
>
> **[2:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=166)** Source .zshenv, and let's try again to print.
>
> **[2:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=175)** And as you can see, now, the variable is available.
>
> **[2:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=178)** And if you open a new terminal window and try to run again, it should be there.
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=187)** Last but not least, the process in Linux-based OS should be similar.
>
> **[3:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=193)** Be aware that for Windows OS, the process of saving environment variables might be a little bit different, but the way you're going to load it will be the same.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), export, (2), switch (1), default, (1)
> **Tools:** terminal (6), vim (2)
> **Env Vars:** eia_api_key (3), api (1)
> **Warnings:** note that (1), be aware (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The EIA API dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=0)** - [Instructor] In this video, we will review the eia API dashboard and learn how to use its functionality to search data, apply filters, and extract the query settings.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=13)** This information, as you will see later on this course, will be used for when setting the get request via our Python to pull data from the API programmatically.
>
> **[0:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=25)** Let's go now to the browser and log in again to [eia.gov](https://eia.gov).
>
> **[0:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=31)** Under the features section, click the API icon and then click the browse the API, which will open the API dashboard.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=46)** First things first, we will select the API route, which defines the type of energy category and the subcategory below.
>
> **[0:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=56)** For example, let's select the electricity category.
>
> **[1:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=62)** Then a new popup will show with the electricity subcategories.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=69)** As we are interested in the daily and hourly data, we'll select the electricity power operation daily and hourly.
>
> **[1:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=80)** In this case, there is a second subcategory and we can see the options over here.
>
> **[1:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=87)** And we are interested in the hourly demand for sub region.
>
> **[1:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=91)** Let's click it.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=93)** As you can see, it's loading all the information.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=97)** Once we choose the route, we can start filtering and customizing the data sets that available in this route.
>
> **[1:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=106)** You can customize the series start and end time with the frequency filter.
>
> **[1:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=112)** For example, you can see the data is available since 2018.
>
> **[1:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=119)** In addition, you can use the facet filter to select a specific balancing authority, which represent the region, or select a specific provider using the sub region filter.
>
> **[2:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=134)** Let's select both of them and see the filter options.
>
> **[2:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=138)** We choose the balancing authority, which is represented the parent.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=144)** It's loading all the information on the backend, so it might take a second or two.
>
> **[2:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=149)** And as you can see, there are eight balancing authority, and we can select the selection and we can add also the sub region and see the one below.
>
> **[2:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=163)** Overall, there are 83 sub regions available under the parent category.
>
> **[2:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=169)** So now let's say we want to narrow down and we want only the one that available for California independent system operator or CISO.
>
> **[2:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=179)** Let's click it and click the save selection.
>
> **[3:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=185)** Now you can see the number of sub region narrowed down to four, the one under CISO.
>
> **[3:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=193)** We can finalize our selection by selecting the Pacific Gas and Electric Sub region and save the selection.
>
> **[3:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=202)** Last but not least, let's submit the request.
>
> **[3:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=207)** The dashboard will retain some useful information about the query such as the API endpoint on the left side and the query header on the right side in a JSON format, which we will use later to pull data directly from the API.
>
> **[3:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=225)** We will talk later on in this chapter about the structure of the get request and how can we use the header and the API URL to set the get request.
>
> **[3:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=238)** Last but not least, you can see the selection data below.
>
> **[4:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=244)** You can plot it by clicking any of the chart symbols under the chart column.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), ciso (2), json (1), url (1)
> **Code Keywords:** let (7), case, (1)
> **UI Navigation:** select the (4), open the (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** python (1)
> **URLs:** [eia.gov](https://eia.gov) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### GET request structure
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=0)** - [Instructor] In this video we'll review the structure of the API GET request, which we'll use later to query data from the API.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=9)** A GET request, as the name implies, is a request from the API to get some information.
>
> **[0:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=16)** In our case to get data.
>
> **[0:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=18)** Before diving into more details, let's review the API main characteristics.
>
> **[0:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=25)** Throughout the course we'll use version 2 of the API or v2.
>
> **[0:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=30)** Please note that version 2 comes with major changes compared to version 1 therefore version 2 does not support application built for version 1.
>
> **[0:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=42)** Rhe API follows standard HTTP protocol and the API is also use RESTful standards and it is stateless application.
>
> **[0:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=55)** This means that the API does not have a login application or memory.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=61)** You will have to attach your API key with any GET request.
>
> **[1:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=67)** The API supports only GET request, which enable us to pull data from the EIA data catalog.
>
> **[1:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=75)** The API provides two type of data structures, time series and metadata, which we will use in more details in the coming slides.
>
> **[1:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=85)** The EIA API follows the standard structure of GET request, which start with the API endpoint or the internet address of the API.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=96)** In this case [https://api.eia.gov](https://api.eia.gov)/ followed by the API version v2 and the sector routes, for example, electricity and its sub routes.
>
> **[1:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=118)** After setting the API path, we can add the query parameters or filters followed by the API key.
>
> **[2:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=127)** The API is a stateless, therefore we will have to add the API key to every GET request.
>
> **[2:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=135)** Now that we concatenate the API path and the query with a question sign and use the ampersand sign to concatenate the different parameters as well as the API key.
>
> **[2:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=151)** Last but not least, the order of both the query parameters and the API key does not matter.
>
> **[2:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=157)** You can switch between them and it will still work.
>
> **[2:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=161)** Let's review a GET request we created in the previous video to pull the electricity data for the Pacific Gas and Electricity operator under the California Balancing Authority sub region and break down to its components.
>
> **[2:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=178)** Let's go back to the API dashboard we used before and review the GET request that the dashboard provided us.
>
> **[3:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=186)** As you can see, this is the exact one that we're going to review now.
>
> **[3:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=194)** And it start as I discussed before with the API endpoint, followed by the version of the a API v2.
>
> **[3:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=203)** And then the main route electricity sector, followed by the sub route, in this case RTO, which represent the electricity power operation and the region-sub-ba-data, which represents the hourly demand by sub region.
>
> **[3:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=226)** Note that we close the route statement with data to define to the API that we want to pull data as opposed to metadata.
>
> **[3:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=236)** Next, we supply the query details that indicates the filtering parameters and the additional arguments such as the frequency argument that define the time zone of the series timestamp, data argument to flag the type of data metric, the facets argument that enable us to filter the data.
>
> **[4:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=263)** In this case, as our series is under the California Balancing Authority, we set the parent parameter to CISO, which stands for California Independent System Operator and the sub parameter or sub region to PGAE.
>
> **[4:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=284)** And the third argument to define how we want to sort the data.
>
> **[4:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=289)** Last but not least, we use the length argument to define the rows limit per query in this case set to the maximum 5,000 rows.
>
> **[5:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=302)** The offset argument is set to zero, which means that we will pull the first 5,000 rows that are available under those filters.
>
> **[5:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=312)** After the query, we will add the API key to the request, which is of course not included in the GET request from the dashboard.
>
> **[5:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=321)** As mentioned above, we use the question sings to concatenate the API path and the route with the query and separate the query parameters using the ampersand sign between.
>
> **[5:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=335)** In the next video, we'll continue to use this query to pull data via the browser.

> [!info]- Semantic Content
>
> **Env Vars:** api (28), eia (2), http (1), rto (1), ciso (1)
> **API Endpoints:** get  (9)
> **Code Keywords:** let (3), switch (1), case, (1), continue (1)
> **Versions:** version 2 (3), version 1 (2)
> **Definitions:** is a  (2), means that (2), stands for (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Analogies:** for example (1), such as (1)
> **Warnings:** note that (2)

#### Querying the data via the browser
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=0)** - [Instructor] In the previous videos, we reviewed the query structure and saw how can we leverage the API dashboard to create the query.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=9)** In this video, we'll take the query we used in the previous videos and send the GET request via the browser.
>
> **[0:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=17)** While this is different from how we will use it when we build the pipeline, it is a good way to review the data structure.
>
> **[0:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=26)** Let's return to the dashboard and copy the query we created earlier to pull the hourly demand for electricity of the sub region PGAE.
>
> **[0:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=39)** So we have here the full query and we're going to copy, paste it.
>
> **[0:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=43)** I will copy it and I will open a new window.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=46)** Notice that we get the API_KEY_MISSING and this is because we didn't provide it the API key.
>
> **[0:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=56)** So let's fix it by adding the api_key argument to the GET request.
>
> **[1:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=62)** So let's go ahead and edit the address over here.
>
> **[1:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=64)** Go to the end and use the ampersand to add the new argument
>
> **[1:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=73)** and add api_key and pass the... I will pass over my API key.
>
> **[1:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=87)** Please note that the API key that I'm using for this demonstration will be deleted after.
>
> **[1:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=92)** Please make sure that you set and use your personal API key to send GET requests for the authentication.
>
> **[1:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=101)** Now, after we edit the API key and we can click enter and see what's going on.
>
> **[1:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=111)** You can see that the API returns the data in JSON format.
>
> **[1:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=117)** I have a plugin in my browser for reformatting JSON files, so I get a nice output.
>
> **[2:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=123)** By default, if you don't have any plugins to reformat JSON, this is how we're going to see it, which is less convenient.
>
> **[2:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=132)** I will plug it back.
>
> **[2:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=135)** And now let's review the output.
>
> **[2:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=138)** The first few sections of the JSON output provide metadata about the series we pulled, such as the total number of observation.
>
> **[2:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=147)** In this case, for this series, there are 49,487 observation, and you also get this warning that just tell you that you can only pull 5,000 observation per request.
>
> **[2:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=163)** That's why it's called incomplete return because there are more observation available for this series.
>
> **[2:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=169)** The data section provide the actual series data.
>
> **[2:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=175)** Each objective represent a row or observation.
>
> **[2:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=179)** It has the following seven fields.
>
> **[3:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=183)** Period, which is the timestamp of the observation, each observation.
>
> **[3:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=188)** In this case, for this observation, the timestamp is February 26th, 2024, 8 o'clock in the morning.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=199)** And then you have the subba and the subba-name, which represent the subregion code and full description.
>
> **[3:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=209)** Likewise, you have the parent and the parent-name, which represent the balancing authority code and the full description of the balancing authority.
>
> **[3:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=221)** Last but not least, you have the value and the value-units, which represents the value of that observation.
>
> **[3:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=229)** In this case, this is 9,779 megawatt hours.
>
> **[3:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=237)** In the following videos, we will start to work with the API using R and Python.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), json (4), pgae (1), api_key_missing (1)
> **Code Keywords:** let (4), case, (3), pass (2), default, (1)
> **API Endpoints:** get  (3)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** api_key (2)
> **Warnings:** note that (1), warning (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Querying data with R and Python
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=0)** - [Instructor] So far in the previous videos, we viewed the API functionality and saw how to set and send a get request via the browser.
>
> **[0:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=12)** We'll dedicate the rest of this chapter to learn and practice how to query data from the API using R and Python.
>
> **[0:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=21)** To pull data with R we will use the EIA API library that provides a set of functions to query data from the current version of the API V2.
>
> **[0:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=33)** The package is available on CRAN and we will use the current version 0.1.2.
>
> **[0:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=41)** For Python, currently, there is no stable library that supports the V2 of the API.
>
> **[0:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=49)** Therefore, to be consistent, I created a set of Python functions aligned with the ones available in the EIA API library, which we'll use to pull the data from the API with Python.
>
> **[1:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=64)** Throughout this course, we will use the following three functions, which are available both in R and Python to pull data from the API.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=74)** First, the EIA underscore metadata, which as its name implies returns metadata.
>
> **[1:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=84)** In the coming example, we will see how to use the function output to set the get request parameters.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=93)** Next is the EIA underscore get function, which enable us to send get request to the API.
>
> **[1:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=101)** The function retains time series data.
>
> **[1:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=106)** As we previously saw the API is a cup of 5,000 observation limitation per get request.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=114)** This might be challenging when pulling hourly data, as we're going to do heavily in this course.
>
> **[2:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=122)** This is where the failed and last function.
>
> **[2:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=124)** The EIA underscore backfill function comes in handy, enabling us to pull observation per request beyond the API limitation.
>
> **[2:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=134)** On the backend the function splits the request into a sequence of smaller requests and send them to the API using the AI get function, it then appends the return outputs into one table.
>
> **[2:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=150)** Throughout the course, we will mainly use the EIA backfill and the EIA metadata functions.
>
> **[2:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=158)** Moving forward, we'll have coding demos in both Python and R, you can choose to continue with either one of the languages and skip the other or watch both languages.

> [!info]- Semantic Content
>
> **Env Vars:** api (12), eia (7), cran (1)
> **Code Keywords:** function (7), continue (1)
> **CLI Commands:** python (6)
> **Versions:** version 0 (1), 1.2 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Pulling metadata from API with R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=0)** - [Instructor] Let's now open RStudio and demonstrate how to send a GET request to pull data from the API using the EIAapi library.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=9)** To be consistent with the previous examples, we'll continue to focus on the hourly electricity demand of the Pacific Gas and Electricity balancing authority subregion or, in short, PGAE.
>
> **[0:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=24)** Throughout this video and the next ones, I will use the following Quarto document to execute the code.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=32)** The name of the file is R_eia_api.qmd, and you can find it under the course or repository under the chapter-1 folder.
>
> **[0:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=44)** The screenshot below provides the series metadata from the dashboard that we used in the previous examples.
>
> **[0:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=52)** We'll use it later on.
>
> **[0:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=56)** Before getting started, we will load the following four libraries, the EIAapi, which we're going to use to send, GET requests to the API.
>
> **[1:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=67)** dplyr to process and manipulate data.
>
> **[1:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=71)** lubridate to format or reformat date and time objects.
>
> **[1:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=76)** And last, plotly, to visualize the data we're going to pull from the API.
>
> **[1:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=81)** Now, we can start working with the API.
>
> **[1:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=85)** Let's go ahead and pull the metadata of the PGAE series using the eia_metadata function.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=94)** The eia_metadata function has the following two arguments: API key and API path.
>
> **[1:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=103)** The API key is used to authenticate our GET request on the API, and the API path represent the route in the API that we want to pull.
>
> **[1:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=115)** In this case, the path that we want to go ahead and pull the metadata for is the electricity subregion data, which is what we used before.
>
> **[2:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=127)** We are going to set those two variables and assign it to this function and pull the data.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=133)** If you set your environment variable on your R end, you should be able to load it with the Sys.getenv function.
>
> **[2:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=142)** Let's go ahead and run it.
>
> **[2:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=145)** And now let's assign it over here and execute it.
>
> **[2:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=147)** So over here we're going to assign the variable api_key, and, over here, the api_meta_path.
>
> **[2:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=160)** Let's go ahead and execute it.
>
> **[2:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=162)** As you can see, the GET request returns the route metadata from the API.
>
> **[2:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=167)** This include the series description, the frequency information, the facets, and other information we're going to use.
>
> **[2:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=178)** In the next section, we'll use the metadata output to send a GET request to pull data.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), pgae (2)
> **Code Keywords:** let (5), function (4), continue (1), case, (1)
> **API Endpoints:** get  (5)
> **Code Identifiers:** eia_metadata (2), api_key (1), api_meta_path (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Sending a simple GET request with R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=0)** - [Instructor] In the previous video, we saw how we can use the EIA metadata function to pull metadata from the API.
>
> **[0:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=7)** In this video, we will use the metadata we pull to set and send to the API, a simple get request to pull data with the EIA get function.
>
> **[0:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=18)** To set a simple get request with the EIA get function, we will need to define the follow four arguments, API key, API path, frequency, facets.
>
> **[0:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=31)** Let's go and set those arguments using the above variables.
>
> **[0:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=37)** Similar to the get metadata function, the API key and the API path defines the API access key and route.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=46)** We will use the same method as before to load the API key using the Sys.getenv function and load it from the env variable, EI_API_KEY.
>
> **[0:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=58)** Likewise, we will use the same route as before and add the data at the end of the route as we wanted to inform the API that this is a data request and not a metadata.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=74)** Next, is the frequency argument.
>
> **[1:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=78)** Let's go ahead to the metadata output and see what are the options.
>
> **[1:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=84)** You can have it over here on the right side, and you can see frequency.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=90)** Under the frequency, there are two options.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=93)** First is hourly, which define the timestamp in UTC time zone.
>
> **[1:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=98)** And second one is local hourly which set the time zone with the local time zone.
>
> **[1:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=105)** Let's go ahead and set it as hourly as we want to be consistent across this course using UTC time zone, so I'm going to set it as hourly.
>
> **[1:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=119)** Last but not least, is the facets argument which enable us to select a specific series within the API route.
>
> **[2:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=127)** In this case, the facet argument is the following two options, and we can go ahead again to the output of the metadata.
>
> **[2:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=134)** And you can see there are two options, subba, which stand for Subregion, and parents, which stand for balancing authority.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=144)** Let's go back to a above screenshot to pull the facet setting for the PGAE series.
>
> **[2:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=152)** As you can see, the parent is defined here as CISO and the subba is defined as PGAE.
>
> **[2:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=163)** We use the list object to set the facet parameters for the EIA get function.
>
> **[2:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=168)** So let's go ahead and set the parent as CISO and the subba as PGAE.
>
> **[2:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=176)** Let's execute it and run the function.
>
> **[3:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=183)** The output indicates that the function pull data.
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=187)** Let's explore it with the str function to review the return object structure.
>
> **[3:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=196)** As you can see, it retained a data frame with 5,000 observation which is the API limit.
>
> **[3:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=204)** This include the following seven variables, period, which define the observation, timestamp, it's set as character.
>
> **[3:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=214)** We will need to reformat it later using the Lubridate package into a time object.
>
> **[3:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=220)** Subba and subba-name define the series subregion, code, and name.
>
> **[3:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=226)** Similarly, parent and parent-name define the series parent, balancing authority, code, and name.
>
> **[3:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=235)** Last but not least, are the value and value-unit which define the serious values and the corresponding units which in this case, it's megawatthours.
>
> **[4:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=248)** Let's now reformat the series timestamp using deployer.
>
> **[4:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=253)** We will use mutate to create a new variable call index and use the year, month, day, hour function or in short, ymd_h, from the Lubridate package just to reformat the period variables into a POSIX object.
>
> **[4:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=272)** Be sure to set the time zone as UTC.
>
> **[4:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=277)** We're going to reformat the structure, having the index first and then the rest of the variables using the select functions from deployer.
>
> **[4:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=287)** And last but not least, we're going to arrange the data by the index.
>
> **[4:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=292)** Let's go ahead and look at the output.
>
> **[4:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=296)** Maybe it will be easier to look from here, head df1.
>
> **[5:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=301)** And as you can see, we got the object.
>
> **[5:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=304)** We have now a new variable call index with timestamp, and the rest of the variables are also there.
>
> **[5:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=310)** In the next video, we'll explore the series and review some of the limitations of the EIA get function for pulling hourly data.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), eia (5), utc (3), pgae (3), ciso (2)
> **Code Keywords:** function (11), let (9), case, (2)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Definitions:** is a  (1), defined as (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### API limitations with R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=0)** - [Instructor] In the previous video, we saw how we can set get requests to pull data from the API using the AI get function.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=9)** In this video we will review the output and explore some of the limitation of the get request.
>
> **[0:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=15)** Let's go back to the data form we pulled during the previous lessons.
>
> **[0:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=20)** DF one, recall the data frame has 5,000 rows or observations and seven variables.
>
> **[0:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=28)** We added also, the index variable is the eight variable when we reformatted the period variable into a post six object or time object.
>
> **[0:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=36)** Let's plot the data using the plotly function from the Plotly library.
>
> **[0:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=42)** So let's feed the the, let's set the functions we want to plot DF one, we set X as index and Y as value.
>
> **[0:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=56)** And since we want to have a line chart, let's set the type as cutter and the mode to lines.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=69)** Let's go ahead and run it.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=74)** As you can notice in the time series plot, there are some weird lines.
>
> **[1:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=79)** Do not fit the serious pattern.
>
> **[1:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=82)** We can go ahead and Zoom and explore those points.
>
> **[1:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=85)** So for example, over here you can see those lines.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=88)** You can also see it over here and some other places.
>
> **[1:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=92)** So let's zoom in over here.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=96)** You can see that some of the observation are missing.
>
> **[1:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=100)** So for example, between November 4th, 2018 and September 13th, there are no points.
>
> **[1:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=107)** Similarly over here from November 5th, 2018 and till January 12th.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=114)** There are no any observations.
>
> **[1:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=116)** If you keep exploring more dense area, you can see the similar patterns.
>
> **[2:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=121)** So for example, if we just open it over here and you can see there are some buckets that are missing values.
>
> **[2:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=130)** The reason that we got those missing values is related to the API 5,000 observation limit per Git request.
>
> **[2:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=138)** If we were trying to pull five years of hourly time series data, this is more than 40,000 observation and we cannot pull it in a single request.
>
> **[2:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=150)** One way we can address it is by setting a time range.
>
> **[2:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=155)** By bounding the get request by specific time, which is aligned with the 5,000 observation limitation, we can use the start and end arguments and define this range.
>
> **[2:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=171)** Let's go ahead and do it.
>
> **[2:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=172)** On the next example, we are going to use the exact same parameters, but this time we are going to pull data between January 1st, 2024 and February 24th, 2024.
>
> **[3:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=186)** So I'm going to set those variables over here and I'm going to add to the function with the same arguments, just adding those two variable.
>
> **[3:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=197)** Let's go ahead and run the function and we go into reformat again, as we did before.
>
> **[3:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=205)** We're going to set the index as a time object and arrange the data by the index.
>
> **[3:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=215)** So you can see that we got, again, a time series in the same format.
>
> **[3:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=220)** We can go ahead and check the number of observation and roll DF two.
>
> **[3:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=228)** And now we got the 1,297 observation for this period.
>
> **[3:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=234)** And we can go ahead and plot the data.
>
> **[3:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=238)** And as you can see now, the series looks fine.
>
> **[4:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=241)** There's no any issues that are popping up when you eyeball the series.
>
> **[4:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=247)** We'll dive into more details about monitoring the data output and identify missing values and other problems in the next chapters.
>
> **[4:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=255)** While you can use the I get function to pull a large dataset looping manually over the timestamp of the series, it could be very tedious to run it manually.
>
> **[4:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=267)** This is where DA backfill function comes into place, enabling us to pull large datasets beyond the API limitation.
>
> **[4:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=276)** In the next video, we'll re pull the series this time using the A backfill function.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), function (7)
> **Cross-References:** in the next (2), previous video (1), go back to (1)
> **Env Vars:** api (3)
> **Analogies:** for example (3)
> **CLI Commands:** git (1)
> **Speakers:** - [instructor] (1)

#### Handling a large data request with R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=0)** - [Instructor] In the previous video, we saw the limitation of the EIA get function to pull a large data set due to the API role limitation per get request.
>
> **[0:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=10)** In this video, we will see how to handle a large data request from the API using the backfill function.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=19)** The EIA backfill function splits a large request into a sequence of small requests, send those requests to the API using the EIA get function, and appends the output into a single table.
>
> **[0:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=34)** The function uses the same parameters as the EIA get function with the distinction of the start and end arguments that use POSIX, CT or LT inputs.
>
> **[0:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=49)** Let's set the get request to pull data from July 1st, 2018 to February 24th, 2024.
>
> **[0:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=58)** Be sure to use the POSIX function to set those inputs, so let's start by the start argument.
>
> **[1:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=66)** We want to start by 2018, July, 07, and first, and we want to pull it.
>
> **[1:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=77)** We will set it since eight o'clock in the morning 'cause this is the first data point in this series and the minutes is zero and the second, so, set to zero.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=89)** Okay? And also, make sure to set the time zone to UTC.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=94)** Similarly, we will set the endpoint to February 24, 2024.
>
> **[1:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=100)** So we want the year 2024, the month, February, date, 24, and let's set it to zero.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=114)** Okay. The next argument is the offset.
>
> **[1:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=118)** The offset argument enable us to control the size of the sequential request the function sends to the API.
>
> **[2:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=127)** For example, if you're pulling a series with 10,000 observations and we set the offset to 1,000, the function will generate 10 sequential request each of a size of 1,000 observations.
>
> **[2:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=143)** While you can set it up to 5,000 observations, it is recommended not to set the offset beyond 2,500 observations.
>
> **[2:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=154)** Let's set it to 2,250.
>
> **[2:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=157)** Two thousand two hundred fifty, and now we can execute the code.
>
> **[2:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=166)** So let's go ahead and send the get request to the API.
>
> **[2:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=173)** Notice that since we are having a large request, this is going to close to 50,000 observation.
>
> **[3:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=181)** It might take time and you can see that the execution on the right side and this is the output.
>
> **[3:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=186)** Let's just remove it and now we can explore the output.
>
> **[3:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=192)** Again, we are going to use the head and the str function to see the structure of the data.
>
> **[3:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=200)** So let's go ahead and maybe we can see the head of the function over here.
>
> **[3:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=206)** And as you can see that we're getting almost the exact same output as before with the EIA get function with the distinction of the index.
>
> **[3:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=218)** This time, the index is set as time because it's a time object, and it's the structure can see it's already set as a POSIXct object.
>
> **[3:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=231)** We can now go ahead and plot the output and see the results.
>
> **[3:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=236)** Oh, one more thing.
>
> **[3:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=237)** As you can see over here, there was close to 50,000 observation, so we were able to pull more than 5,000 observation.
>
> **[4:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=246)** Let's go ahead and plot the series using the same method as before.
>
> **[4:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=252)** And now as you can see, the output look pretty much normal.
>
> **[4:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=256)** You might observe here, and there are some kind of like a missing values.
>
> **[4:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=260)** And those missing values are data points that are not available on the API as well.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (8)
> **Env Vars:** api (6), eia (5), posix (2), utc (1)
> **Analogies:** for example (1), kind of like (1)
> **Best Practices:** make sure to (1), recommended (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Pulling metadata from API with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=0)** - [Instructor] Let's open VSCode and demonstrate how to send a get request to pull data from the API.
>
> **[0:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=7)** Throughout this video and in the next ones, we will use the following Jupyter Notebook to execute the code.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=13)** In addition, we'll use the EIA_API script with a set of functions to work with the API.
>
> **[0:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=22)** Both files are under the course repository under chapter one folder.
>
> **[0:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=28)** Before getting started, please make sure you select the virtual environment you are using for this course.
>
> **[0:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=36)** If you are using the course image, you should select the LinkedIn_Learning virtual environment with the requirements for this notebook.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=46)** To be consistent with the previous examples, we will continue to focus on the hourly electricity demand of the Pacific Gas and Electricity Balancing Authority subregion, or, in short, PGAE.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=61)** The screenshot here provide the series metadata from the dashboard that we used in the previous examples.
>
> **[1:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=70)** Let's start by importing the required libraries and functions.
>
> **[1:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=77)** As mentioned earlier, the EIA_API is a local script with a set of Python functions that we will use throughout this course to query data from the EIA_API.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=90)** We will import the EIA_API and set it as API.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=96)** Let's go ahead and execute it.
>
> **[1:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=99)** Let's continue and load the rest of the Python libraries.
>
> **[1:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=103)** We are going to use the following three libraries, OS to import the API key from the environment variable, Datatime to reformat date and time objects, and Plotly to visualize the data that we're going to pull from the API.
>
> **[2:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=122)** Let's go ahead and also execute this core chunk.
>
> **[2:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=128)** Now we can start working with the API.
>
> **[2:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=131)** Let's start by pulling the metadata of the PGAE series using the EIA metadata function.
>
> **[2:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=139)** As you can see, there are two arguments for this function, and it's straightforward.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=144)** The API key, which we need to provide to get access to the API, and the API path, which represents the route that we want to pull metadata from.
>
> **[2:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=156)** We will use the getenv functions from the OS library to pull the environment variables with our access key, EIA_API_KEY.
>
> **[2:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=167)** If you didn't set this variable, you can also pass your API key over here, but it's not recommended.
>
> **[2:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=175)** Next, we are going to set this variable, api_meta_path, to set the route that we want to pull the metadata.
>
> **[3:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=186)** In this case, we want to pull subregion electricity data, and this is the same route as we used before.
>
> **[3:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=193)** Let's go ahead and execute this and assign it to the function.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=199)** You can see the GET request returns the metadata from the API, and we can go ahead and print it.
>
> **[3:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=208)** This includes the series description, the frequency of the series, the starting and ending point over here, and other information.
>
> **[3:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=219)** In the next video, we'll continue to work with this notebook and use the metadata output to set the GET request.

> [!info]- Semantic Content
>
> **Env Vars:** api (11), eia_api (4), pgae (2), eia (1), eia_api_key (1)
> **Code Keywords:** let (7), continue (3), function (3), from. (1), pass (1)
> **CLI Commands:** python (2), make (1)
> **API Endpoints:** get  (2)
> **Cross-References:** in the next (2)
> **UI Navigation:** select the (2)
> **Code Identifiers:** api_meta_path (1)
> **Tools:** jupyter (1)

#### Sending a simple GET request with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=0)** - [Instructor] In the previous video, we leveraged the AI metadata function to pull metadata from the API for the PG AE series.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=9)** In this video, we'll use the metadata we pulled to set and send to the API a simple get request to pull data with the EIA get function.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=19)** To set a simple get request with the EIA get function, we'll need to define the following four arguments, API key, API path, frequency, and facets.
>
> **[0:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=34)** Let's go and set those arguments using the above variables similar to the get metadata function, the API key, and the API path, define the API access key and route.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=46)** We'll use the same method as before to load the API key using the get N function.
>
> **[0:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=53)** Likewise, we will use the same route as before and add data at the end of the route to indicate that this is a data request as opposed to metadata request.
>
> **[1:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=64)** So I'm going to add your data to ensure that the API will return us data.
>
> **[1:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=70)** Next, is the frequency argument, which defines the series timestamp format.
>
> **[1:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=77)** Let's go to the metadata above and see what are the options.
>
> **[1:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=83)** Under the frequency argument, you can see that there are two options.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=88)** First is hourly, which return the format in UTC time zone.
>
> **[1:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=95)** And second is local hourly which retain the timestamp in a local time zone.
>
> **[1:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=103)** To be consistent across the course, we will use UTC, and let's go ahead and set the frequency variable as hourly.
>
> **[1:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=112)** Last is the facet argument which enable us to select or filter for specific series within the API route.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=120)** In this case, the facet argument has the following two options, and we can pull it from the metadata over here.
>
> **[2:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=128)** You have subba which stands for Subregion, and we have parent which stands for balancing authority.
>
> **[2:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=138)** Let's go back to a above screenshot to pull the facet setting for the PGAE series.
>
> **[2:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=145)** As you can see, the parent here set as CISO and the subba or the Subregion set as PGAE.
>
> **[2:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=154)** Let's go ahead and update the list with this information.
>
> **[2:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=158)** So over here, we are going to set the parent as CISO and the subba as PGAE.
>
> **[2:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=170)** After we set the variables, we can now send the request to the API.
>
> **[2:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=174)** First, let's execute it.
>
> **[2:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=176)** And now, we can go ahead and execute the get request.
>
> **[3:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=181)** The returned object has three elements, URL, which defines the full get request URL that used for this query without the API key.
>
> **[3:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=192)** So if you want to test this query from your browser, you can go ahead and pass it to your browser and add the API key.
>
> **[3:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=201)** The second one is the parameters that was used for this get request.
>
> **[3:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=206)** And last is the data, which is the data that the API return.
>
> **[3:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=211)** Let's review the data.
>
> **[3:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=212)** Aligned with the API JSON data format that we saw earlier, the return data frame as the following seven variables, period which represent the timestamp of the series or the index, subba and subba name, which represent the Subregion name and code.
>
> **[3:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=235)** Likewise, parent and parent name which represent the parent code and the parent name.
>
> **[4:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=241)** And last but not least, the value and the value units which is the values of the series and the corresponding units, which in this case, megawatt hours.
>
> **[4:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=250)** You can notice that the data frame has 5,000 observation aligned with the API limitation.
>
> **[4:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=259)** Last but not least, we can check the data frame columns attributes using the dtypes function.
>
> **[4:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=267)** And as you can see that the period is set as daytime, the rest are characters and the value is integer.
>
> **[4:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=274)** In the next video, we will explore the series and review some of the limitations of the EIA get function for pulling hourly data.

> [!info]- Semantic Content
>
> **Env Vars:** api (16), eia (3), pgae (3), utc (2), ciso (2)
> **Code Keywords:** function (7), let (7), case, (2), pass (1), return. (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Definitions:** stands for (2), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### API limitations with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=0)** - [Instructor] In the previous video, we saw how we can set a get request to pull data from the API using the IGET function.
>
> **[0:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=8)** In this video we'll review the output and explore some of the limitation of the get request.
>
> **[0:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=15)** Let's go back to the data frame we pulled during the previous video DF1.
>
> **[0:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=20)** Recall the data frame has 5,000 rows or observations and seven variables.
>
> **[0:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=27)** Let's use Plotly to plot the data.
>
> **[0:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=30)** So we're going to use the plot line function as it says time series.
>
> **[0:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=35)** Let's start with the input object, which TF1.data and our X axis is our timestamp, which is period, and our numeric value is the value column.
>
> **[0:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=51)** Let's go ahead and run it.
>
> **[0:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=57)** And as you can notice in this time sales plot, there are some weird lines that do not fit the serious pattern.
>
> **[1:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=64)** We can go ahead and zoom in and and explore it.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=68)** You can see here that some observations are missings and therefore you get those straight lines in between.
>
> **[1:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=76)** So for example, between December 14th, 2018 and Jan 13, 2019, there are no any observation.
>
> **[1:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=86)** If you keep exploring further in a more dense area of this plot, you can see that this pattern return or exist.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=97)** So as you can see over here, there are all of the straight line represent missing values in between.
>
> **[1:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=102)** The reason that we get those missing values is related to the API 5,000 observations limit per get request.
>
> **[1:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=111)** If we are trying to pull the five years of hourly time series data, that is more than 40,000 observations and we cannot pull it with a single request.
>
> **[2:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=121)** One way to address this issue is to bound the get request with a time range using the start and end arguments.
>
> **[2:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=129)** This could be useful if you want to pull a small period of the series.
>
> **[2:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=134)** Let's go ahead and modify the get request we used previously and add the start and end argument to limit the request for observations between January 1st and February 24 in 2024.
>
> **[2:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=148)** So we're going to use the date time to set the start and end as a time object.
>
> **[2:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=155)** So let's go, the start should be 2024 and it's January 1st and the first hour.
>
> **[2:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=162)** And for the end time, we want it February 24.
>
> **[2:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=166)** So it's going to be 2024 and it's going to be two for February, and the day is 24.
>
> **[2:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=175)** And we'll select the last hour 23.
>
> **[2:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=179)** And as you can notice, this is the exact same request as before.
>
> **[3:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=183)** We just had the start and end argument over here.
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=187)** Let's go ahead and execute the request and we can go ahead and report the request.
>
> **[3:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=196)** Now we can see that the data looks fairly normal.
>
> **[3:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=200)** We'll dive into more details about monitoring the data output and identify missing values in the next chapters.
>
> **[3:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=207)** While you can use the IGET function to pull a large dataset looping manually over the timestamp of the series, it could be very tedious to run it manually.
>
> **[3:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=219)** This is where the AI backfill functions comes into place, enabling us to pull large dataset beyond the API limitation.
>
> **[3:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=227)** In the next video, we'll repo the series this time using the AI backfill function.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4)
> **Env Vars:** api (3), iget (2), df1 (1), tf1 (1)
> **Cross-References:** previous video (2), in the next (2), go back to (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Handling a large data request with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=0)** - [Instructor] In the previous video, we saw the limitation of the eia_get function to pull large dataset due to the API row limitation that got request.
>
> **[0:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=11)** In this video, we'll see how to handle a large data request from the API using the eia_backfill function.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=19)** The eia_backfill function splits a large data request into a sequence of small request.
>
> **[0:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=26)** Send those request to the API using the eia_get function on the backend.
>
> **[0:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=33)** It then appends the outputs into a single table.
>
> **[0:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=36)** The function uses the same arguments as the eia_get function.
>
> **[0:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=41)** Let's re-pull the series this time using the backfill function.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=46)** We'll set the start argument to July 1st, 2018, and the end argument to February 24th, 2024.
>
> **[0:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=55)** So we're going to again use the datetime to reformat the object into time format.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=61)** So the start is going to be 2018 and it's going to be July 1st.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=69)** And the first data point is at eight o'clock in the morning.
>
> **[1:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=72)** And for the end, we are going to set it at 2024 and send it as before, February 24.
>
> **[1:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=83)** And let's set it to the end of the day.
>
> **[1:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=86)** Next is the offset argument.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=89)** The offset argument enable us to control the size of the sequential request the function sends to the API.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=97)** For example, if we are pulling a series with 10,000 observations and we set the offset to 1,000, the function will generate 10 sequential requests, each of a size of 1,000 observations.
>
> **[1:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=113)** While you can set it up to 5,000 observations, it is recommended not to set the offset beyond 2,500 observations.
>
> **[2:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=123)** Let's set it to 2,250.
>
> **[2:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=127)** So we're going to set the variable overview offset to 2,250.
>
> **[2:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=134)** Now we can resend the request.
>
> **[2:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=137)** We this time name it as df3.
>
> **[2:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=141)** It might take a few seconds until it completes the request, as we are pulling close to 50,000 observations.
>
> **[2:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=150)** And it's done, it took about close to 20 seconds.
>
> **[2:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=156)** Let's now check the data structure.
>
> **[2:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=159)** And as you can see, it follows the same structure as the eia_get function.
>
> **[2:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=165)** The table is close to 50,000 observation.
>
> **[2:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=169)** Now we can re-plot the data again using the same Plotly function.
>
> **[2:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=177)** And you can see that the series now looks much better than before.
>
> **[3:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=181)** You can still notice that some observation that are missing, but those are not available on the API as well.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (4)
> **Code Identifiers:** eia_get (4), eia_backfill (2)
> **Env Vars:** api (5)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Query the API
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=0)** - [Instructor] We will conclude this chapter with practicing what we learned so far, using the EIA dashboard to extract metadata and querying the data from the API using R or Python.
>
> **[0:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=18)** This time we're going to pull data of the San Diego Gas and Electricity balancing authority subregion.
>
> **[0:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=26)** Start by going to the EIA dashboard to extract the metadata of the San Diego Gas and Electricity balancing authority subregion.
>
> **[0:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=34)** This subregion is under the California Independent System Operator parent.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=40)** Then with R or Python, set a GET request to pull observation between January 1st and January 31st, 2024.
>
> **[0:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=50)** Last but not least, use the eia_backfill function to pull the data from January 1st, 2020 to February 1st, 2024.

> [!info]- Semantic Content
>
> **Env Vars:** eia (2), api (1)
> **CLI Commands:** python (2)
> **Code Keywords:** function (1)
> **Code Identifiers:** eia_backfill (1)
> **API Endpoints:** get  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Query the API with R
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=0)** - [Instructor] The solution for the Chapter 1 challenge is you can find it in this Quarto doc, R_challenge_solutions.
>
> **[0:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=14)** This file is under chapter-1 folder in the course repository.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=19)** Let's get started by loading the required libraries.
>
> **[0:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=22)** As before, we're going to load EIAapi to query data from the API, dplyr to process data, lubridate to reformat date and time objects, and we're going to use plotly to visualize the data.
>
> **[0:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=36)** The first question, we were asked to extract the metadata of the San Diego Gas and Electric balancing authority from the EIA dashboard.
>
> **[0:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=46)** So let's go to the [eia.gov](https://eia.gov) website.
>
> **[0:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=50)** I'm on the main page.
>
> **[0:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=51)** If you scroll down under the Features, and click the API icon.
>
> **[0:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=58)** And next, click the Browse the API, this will lead you to the API Dashboard.
>
> **[1:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=64)** Now, the first thing we want to do is select the route.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=68)** The main category here is Electricity.
>
> **[1:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=71)** Let's go ahead and select it.
>
> **[1:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=73)** And the subcategory is Electric Power Operation (Daily and Hourly).
>
> **[1:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=79)** And since we want the region level, so we're going to select Hourly Demand by Subregion.
>
> **[1:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=86)** The next step is to select the facet.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=89)** We want to narrow down out of the series that are available to get the metadata of the San Diego Balancing Authority.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=97)** So let's click the facet.
>
> **[1:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=100)** There are two option here.
>
> **[1:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=102)** Either you can go directly to the Subregion and just filter for the specific one.
>
> **[1:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=108)** You can see there are 83, overall 83 subregions.
>
> **[1:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=112)** Or you first select the, well, let's remove it first.
>
> **[1:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=117)** You can first select the Balancing Authority.
>
> **[2:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=122)** We're going to select California Independent System Operator and then go ahead and select the Subregion.
>
> **[2:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=130)** And as you can see, it's narrowed down to the four subregions under the parent balancing authority.
>
> **[2:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=138)** So now we can go ahead and click, select the San Diego Gas and Electric.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=144)** Don't forget to save the selection, and submit the request.
>
> **[2:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=149)** And as you can see, the dashboard retains the API metadata.
>
> **[2:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=154)** What we can use from here, first is the API route.
>
> **[2:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=158)** You can see that here is the API route that we are going to use, electricity/rto/region-sub-ba-data.
>
> **[2:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=168)** We'll have to add data after as we're expecting to pull data and not metadata.
>
> **[2:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=174)** Next is the header.
>
> **[2:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=176)** You can see here that the frequency is hourly and this is what we're going to use as before.
>
> **[3:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=182)** And the facet that require for pulling this series is we need the parent to be CISO and set the subba or the subregion to SDGE.
>
> **[3:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=193)** So let's go back to our studio and set the first get request.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=199)** The second question, we are required to pull the series using the metadata we extract in the first question and bound it between January 1st and January 31st, 2024.
>
> **[3:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=214)** Let's go ahead and update the parameters over here.
>
> **[3:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=217)** So we're going to use the same method to load the API.
>
> **[3:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=221)** We're going to use the same API route as before.
>
> **[3:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=227)** And the frequency we're going to set is hourly.
>
> **[3:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=230)** And for the facet we're going to set the parent as CISO and the subba should be San Diego Gas Electricity, SDGE.
>
> **[4:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=240)** Let's confirm it over here.
>
> **[4:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=243)** SDGE.
>
> **[4:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=245)** We're going to set also the start and end arguments.
>
> **[4:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=248)** Recall that the eia_get function is using string using the same format as the API, which is year, month, day and hour separate by T.
>
> **[4:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=262)** So let's go ahead and set January 1st as the start point, and the endpoint should be January 31st.
>
> **[4:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=271)** We're going ahead and execute and assign those variables.
>
> **[4:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=275)** And then let's call the function and assign it into df1.
>
> **[4:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=284)** Remember, the function return the period or the timestamp variable in a character format.
>
> **[4:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=291)** So we're going to use lubridate year, month, day, hour or ymd_h function to reformat the period or the timestamp and assign it to index.
>
> **[5:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=303)** Recall that we want to set the time zone as UTC.
>
> **[5:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=306)** We're then going to arrange the index to be the first column and sort the data by the index.
>
> **[5:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=315)** Let's go ahead and run it.
>
> **[5:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=317)** And as you can see, we got the output the same as before, but this time we can see that the subba or in the subba name is San Diego.
>
> **[5:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=325)** Last but not least, we can visualize the result with plotly.
>
> **[5:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=330)** And as you can see, this look as expected.
>
> **[5:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=332)** And we got the data starting from January 1st all the way until the end of January.
>
> **[5:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=338)** So now we can move to the next question.
>
> **[5:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=341)** In the third question, we were asked to use the eia_backfill function to pull the data between January 1st, 2020 and February 1st, 2024.
>
> **[5:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=353)** Remember that while the eia_backfill function and the eia_get function use the same arguments, the main difference between the two is that the start and end inputs or class is different.
>
> **[6:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=367)** The eia_backfill function use POSIX object to set the start and end.
>
> **[6:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=373)** We're going to use the as.POSIXct function to set the start and end according to the time range between 2020 and 2024, February.
>
> **[6:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=384)** And we're going to define the time zone as UTC.
>
> **[6:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=388)** In addition, we're going to set the offset to 2000 observation their request during the sequential request that the function running on the backend.
>
> **[6:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=399)** Let's go ahead and execute the function.
>
> **[6:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=402)** It might take a few seconds to run as we are pulling couple of thousands of observations.
>
> **[6:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=408)** Okay, we got the output, we can clear it 'cause it's not really useful.
>
> **[6:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=414)** Let's look at the structure of the dataframe that we pulled df2.
>
> **[6:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=418)** And you can see we pulled 35,000 observation and we got seven variables.
>
> **[7:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=425)** Another difference between the output of the eia_backfill and the eia_get is that it is within the timestamp as set as time, and it's already a reformat with POSIX object.
>
> **[7:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=439)** Let's go ahead and plot the output using the plotly function.
>
> **[7:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=444)** And we got the series as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (12), require (1)
> **Env Vars:** api (10), sdge (3), ciso (2), utc (2), posix (2)
> **UI Navigation:** select the (6), go to (1), scroll down (1)
> **Code Identifiers:** eia_backfill (4), eia_get (3)
> **CLI Commands:** find (1)
> **URLs:** [eia.gov](https://eia.gov) (1)
> **Cross-References:** go back to (1)
> **Best Practices:** don't forget (1)

#### Solution: Query the API with Python
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=0)** - [Instructor] We are going to use this Jupyter notebook for the solution of chapter one challenge.
>
> **[0:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=10)** This notebook Py_challenge_solutions can be found under the course repository chapter one folder.
>
> **[0:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=20)** In addition, we're going to use the AI_API Python script as before.
>
> **[0:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=25)** This Python script provides a set of functions that will enable us to query data from the API.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=32)** Let's get started by loading those libraries, and we're going to use the same libraries as before, EIA_API and set it as API.
>
> **[0:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=42)** The OS library we're going to use to load environment variables.
>
> **[0:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=47)** The date/time we'll use to reformat date and time objects.
>
> **[0:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=53)** And last is Plotly, which we're going to use to visualize the data.
>
> **[0:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=58)** Let's go to the first question.
>
> **[0:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=59)** We were asked to extract from the EIA dashboard, the metadata of the San Diego Gas and Electric Balancing Authority sub region.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=69)** Let's go to the [eia.gov](https://eia.gov) website and navigate to the dashboard.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=74)** So on the main page of [eia.gov](https://eia.gov), scroll down to the feature section, then click on the API icon, then go to the browse the API and click it, which will lead you to the API dashboard.
>
> **[1:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=92)** Let's start by setting the route.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=94)** As the main category is electricity, let's go ahead and select electricity.
>
> **[1:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=100)** And next we want to select the subcategory.
>
> **[1:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=103)** We're interested in hourly data, so let's go ahead and select electric power operations daily and hourly.
>
> **[1:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=110)** And the last subcategory is the sub region, hourly demand by sub region.
>
> **[1:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=115)** Once it's finished to load the information behind, we can start to filter by using the facet.
>
> **[2:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=122)** The facet enables us to select a specific series under this route.
>
> **[2:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=127)** Let's go ahead and expand it.
>
> **[2:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=130)** There are two ways we can go about filtering.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=133)** Either we can go to the sub region.
>
> **[2:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=136)** As you can see there are 83 overall sub regions, and filter for the one that we are interested.
>
> **[2:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=142)** In this case, we are interested in San Diego.
>
> **[2:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=146)** So let's search San Diego, and you see it pop up over here and select it.
>
> **[2:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=152)** Then select self-selection and submit.
>
> **[2:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=157)** You can see in the output that the facet here is just specifying the subba, and in this case this is SDGE, which stands for San Diego Gas and Electric.
>
> **[2:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=167)** This is sufficient, but let's see the other method you can use to filter.
>
> **[2:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=173)** Let's remove the facet and start with the balancing authority.
>
> **[3:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=180)** Given that San Diego is under California Independent System Operator, let's select CISO and save the selection.
>
> **[3:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=190)** Next, let's select the sub region.
>
> **[3:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=194)** And as you can see, it's narrowed it down to the four balancing authorities sub regions under the parent.
>
> **[3:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=202)** And here we can go ahead and select the San Diego.
>
> **[3:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=206)** Don't forget to save selection.
>
> **[3:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=208)** And let's resubmit.
>
> **[3:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=210)** As you can see, the API returned the metadata and the query information.
>
> **[3:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=215)** On the left side on the URL, you can see the gate request.
>
> **[3:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=220)** We are interested here in the route for the API path which indicate which route we want to select in the API.
>
> **[3:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=228)** In this case, this is the electricity route, so it's electricity, RTO, region sub, BA data.
>
> **[3:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=234)** And at the end we need to add data to indicate to the API that we are interested in data and not metadata.
>
> **[4:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=242)** On there we can extract some information such as the frequency.
>
> **[4:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=245)** We are going to use again hourly.
>
> **[4:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=248)** For the facet we are going to use CISO as the parent.
>
> **[4:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=252)** And for the subba we're going to use SDGE.
>
> **[4:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=255)** Let's go back to VS Code and set the get request.
>
> **[4:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=260)** So we're going to define the following six arguments, assign them to the variables, and then use those variables to assign them to the functions arguments.
>
> **[4:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=270)** Like before, we are going to use the get end function from the OS library to load the API key.
>
> **[4:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=278)** If you didn't set environment variable, you can set it here directly and load it for here.
>
> **[4:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=283)** Next we're going to set the API path.
>
> **[4:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=285)** As we saw before, this is the path.
>
> **[4:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=288)** Don't forget to add data at the end.
>
> **[4:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=291)** The frequency, we are going to select as hourly.
>
> **[4:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=294)** If you remember from the previous videos, hourly stands for setting the timestamp in a UTC time zone.
>
> **[5:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=301)** And then the facets argument.
>
> **[5:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=302)** We are going to set this list where the parents is set as CISO, and the subregional subba set is SDGE.
>
> **[5:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=312)** We then want to bound the request between January 1st and January 31st in 2024.
>
> **[5:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=317)** So we're going to use a start and end arguments to set the time.
>
> **[5:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=322)** We will use the date/time function to convert the input into a time object.
>
> **[5:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=328)** Once it's set, we can run it and send the request.
>
> **[5:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=334)** We can go ahead and check the output, the F1.data.
>
> **[5:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=341)** And as you can see where the data frame is expected, this time the subba is set to SDGE or San Diego Gas and Electric.
>
> **[5:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=350)** You can also see that the series start data point is January 1st, 1:00 AM and the endpoint is January 31st at 11 in the after night.
>
> **[6:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=363)** Next we want to visualize the data.
>
> **[6:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=366)** Let's use the plotly function again to visualize the data.
>
> **[6:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=370)** And as you can see, the series looks great as expected.
>
> **[6:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=373)** Let's go to the next question.
>
> **[6:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=375)** In question three, we were asked to use the backfill function to pull data between January 1st, 2020 and February 1st, 2024.
>
> **[6:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=386)** Given this is a large pool with more than 5,000 observation, we're going to use the backfill function.
>
> **[6:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=393)** We need to set the start and end according to this time range.
>
> **[6:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=396)** So we're going to set the start again with the date/time to January 1st, 2020, and the end time to February 1st, 2024.
>
> **[6:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=406)** We're then going to set the offset to 2000 observation the request, and then assign all to the backfill function.
>
> **[6:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=415)** Let's go ahead and execute the code.
>
> **[6:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=418)** This might take a few seconds as we are now going to pull about 35,000 observations, and it took 12 seconds to pull the data.
>
> **[7:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=428)** Let's go ahead and check the output.
>
> **[7:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=430)** And as you can see, we received the same data frame with the same structure where now the starting point is January 1st, 2020, and the endpoint is February 1st, '23 or 11 at night.
>
> **[7:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=446)** And as you can see, this data frame is more than 35,000 observations.
>
> **[7:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=452)** Last but not least, let's plot the data.
>
> **[7:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=456)** And as you can see, the series aligned with our expectation.
>
> **[7:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=461)** There doesn't seem any missing values or anything suspicious.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), function (6), case, (2), self (1)
> **Env Vars:** api (11), sdge (4), ciso (3), ai_api (1), eia_api (1)
> **UI Navigation:** go to (5), select the (3), navigate to (1), scroll down (1), click on (1)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** python (2)
> **URLs:** [eia.gov](https://eia.gov) (2)
> **Cross-References:** go back to (1), as we saw (1)
> **Tools:** jupyter (1), vs code (1)


### 3. 2. Data Automation

#### Data pipeline scope and requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=0)** - [Instructor] In this video, we will define the Data Scope and Data Pipeline Requirements.
>
> **[0:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=6)** Before getting started with the scope and requirements, let's first define what is the data pipeline.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=13)** A simple definition of a data pipeline is the process of moving data from one data source to another.
>
> **[0:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=21)** In most cases, it includes intermediate steps such as data processing, cleaning, data transformation, aggregation, and creating new fields.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=32)** The process also defined as ETL, which stands for extract, transform, and Load.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=40)** Typically, the common terms of the different stages of the data in this process are; Raw for the data source, Calculation for the intermediate steps and Normalized for the final output.
>
> **[0:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=57)** Moving forward, we'll refer to our raw data, the AI API as the source of raw data and the process data as normalized.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=69)** In the previous chapter, we saw the process of pulling data from the API to our local machine where the API in this case is our raw data source, which comes in a JSON format.
>
> **[1:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=84)** And our final output or normalized table was the DataFrame object.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=89)** The term data pipeline by itself does not define the level of automation of this process.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=97)** It could derive from a completely manual process such as coping files manually, or running a script locally on your machine to process data, to a fully automated process as we will build in this course.
>
> **[1:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=112)** With that, let's go ahead and define our data scope for this course.
>
> **[1:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=118)** First, we want to pull hourly demand for electricity by subregion, where the Geoscope is the California Independent System Operator subregions, which include the following four; Pacific Gas and Electric, San Diego Gas and Electric, Southern California Edison and Valley Electric Association.
>
> **[2:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=141)** We want to refresh the data daily.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=144)** After we defined the data scope, we can go ahead and define the data pipeline requirements.
>
> **[2:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=150)** First, we want it to be fully automated, meaning once we deploy it in production, it should be run automatically without the intervening of the user.
>
> **[2:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=162)** We want the data pipeline to have high level of customization, so think about the scenario that you want to add a new subregion, and you don't want to manually go and out code the changes.
>
> **[2:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=175)** We want to add in place data quality checks and unit test to ensure the quality of the data.
>
> **[3:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=182)** And last but not least, we want to monitor the health of the pipeline.
>
> **[3:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=188)** Last but not least, we'll create and deploy the pipeline with both R and Python.
>
> **[3:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=193)** The supporting files of the R data pipelines are under the R folder in the course repository.
>
> **[3:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=202)** Similarly, the Python data pipeline supporting files are under the Python folder.
>
> **[3:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=207)** In the next video, we'll review the data pipeline architecture.

> [!info]- Semantic Content
>
> **Env Vars:** api (3), etl (1), json (1)
> **CLI Commands:** python (3)
> **Code Keywords:** let (2)
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** defined as (1), stands for (1)
> **Analogies:** such as (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### Data pipeline architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=0)** - [Host] In the previous video, we reviewed the data scope and pipeline requirements.
>
> **[0:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=5)** In this video, we'll review the data pipeline architecture to automate the California sub regions demand for electricity data.
>
> **[0:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=14)** We'll use the following deployment.
>
> **[0:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=16)** Let's now break it down into the its different components, starting with the EIA API, our source data or raw data.
>
> **[0:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=26)** In the previous chapter, we reviewed how we can set and send a gate request to pull metadata and data from the API using the EI metadata and the EI backfill functions.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=40)** The pipeline supporting functions will leverage those functions to extract data from the API.
>
> **[0:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=47)** The second component is the data pipeline, whose main functionality is to check if new data is available in the API and refresh the data when applicable.
>
> **[0:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=59)** In addition, this function also collect metadata on each steps enabling us to monitor the health of the data pipeline.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=68)** The process is deployed on GitHub actions and we'll dive into more details about the deployment in the next chapter.
>
> **[1:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=76)** In the local environment, we have the backfill function.
>
> **[1:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=80)** The goal of this function is to restart the pipeline whenever needed and backfill all this local data.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=88)** Typically, it is a good practice to separate the backfill process from the refresh process as the initial data pool of this local data might be heavy and require more computing resources then available on the scheduler.
>
> **[1:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=104)** In this case, GitHub actions.
>
> **[1:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=106)** Last but not least is the data visualization component will deploy a simple dashboard on GitHub pages that will enable us to view the data and track the logs.
>
> **[1:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=118)** Once the data pipeline finishes updating the data with the new data points, GitHub actions will update the dashboard with the new data.
>
> **[2:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=129)** We'll focus on this component in chapter four of this course.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=133)** Throughout the rest of this chapter, we'll focus on the data refresh and backfill functions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (1), require (1), case, (1)
> **Env Vars:** api (4), eia (1)
> **Tools:** github (4)
> **Cross-References:** previous video (1), previous chapter (1), next chapter (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [host] (1)

#### Data refresh process
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=0)** - [Instructor] In this video, we will focus on the data refresh process.
>
> **[0:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=3)** Recall, the goal of the data refresh process is to keep our normalized table aligned with the most recent data that is available in the source data.
>
> **[0:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=14)** In this process, the function's main logic when triggered is to check if new data is available on the data source, and if so, to pull the incremental data, process it, and append it to the normalized data.
>
> **[0:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=30)** Note that in some cases, you may want to pull data beyond the incremental data.
>
> **[0:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=35)** For example, let's assume that you are working with sales data and restatements may have occurred in the data during the last seven days due to the company's product return policy.
>
> **[0:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=48)** Therefore, in this case, each time the pipeline refreshes the data, you may want to repull the last seven days, in addition to the incremental data.
>
> **[0:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=59)** This adds some complexity to the process, as you will have to drop the overlapping observation when appending the data back to the normalized table.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=69)** You want to ensure that the append process won't create duplication or data gaps.
>
> **[1:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=76)** In our case, we will set the refresh function to pull only new data points.
>
> **[1:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=81)** Let's now focus on the logic of the data refresh process that we will deploy on GitHub Actions.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=88)** The refresh process is set inside the Quarto dock.
>
> **[1:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=92)** One of the main reasons that I love to use Quarto docks to run my code on GitHub Actions is that it is a great way to communicate the refresh process when running code on a remote server.
>
> **[1:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=106)** It generates an HTML report that you can customize according to your needs.
>
> **[1:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=112)** We'll dive into more details about the functionality of this process later in this chapter.
>
> **[1:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=118)** The refresh process leverages a set of helper functions that handle the low capturing data quality test, appending the data back when applicable to the normalized table.
>
> **[2:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=131)** We'll review those functions in the next video.
>
> **[2:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=134)** Once the process is triggered, it loads the series information from the series.json file.
>
> **[2:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=141)** This file defines the metadata of the series we want to pull from the API and their corresponding route.
>
> **[2:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=149)** This will enable us to seamlessly onboard new subregions or remove existing ones without the need to hard code the changes.
>
> **[2:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=159)** After the function pull the series information, it starts to build the data profile for each series in this list.
>
> **[2:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=167)** First, it pull the metadata to identify the last data point available for each series in the normalized table, and based on this, calculate the GET request starting point.
>
> **[3:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=180)** Then by using the eia_metadata function, we send a GET request to pull the metadata of each series and check if new data is available on the API.
>
> **[3:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=191)** By comparing between the timestamp of the most recent data point available on the API and the one available in the normalized table, the function makes the call is to send a GET request to pull the incremental data.
>
> **[3:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=208)** If new data points are available, the function will extract them from the API and transform them into a DataFrame using the eia_backfill function and append them back to the normalized table.
>
> **[3:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=221)** In any case, if new data is available or not, the function will create a log and update the metadata.
>
> **[3:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=228)** Throughout the course, we will simulate a real-life data automation process using GitHub Actions with a caveat that for learning purposes, we will save back the files to the repository as opposed to database.
>
> **[4:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=244)** The goal here is to practice the deployment of a pipeline and learn how to work with GitHub Actions.
>
> **[4:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=251)** Generally, you should avoid storing large files on GitHub repository.
>
> **[4:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=256)** Please note that during the data refresh process, we will use a set of helper functions to support the refresh process, which we'll review in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), case, (3), let (2), this, (1)
> **Env Vars:** api (4), html (1)
> **Tools:** github (5)
> **API Endpoints:** get  (3)
> **Cross-References:** in the next (2), later in (1)
> **Warnings:** note that (2), caveat (1)
> **Code Identifiers:** eia_metadata (1), eia_backfill (1)
> **File Paths:** series.json (1)

#### ETL supporting functions
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=0)** - [Instructor] In the previous video, we reviewed the refresh process.
>
> **[0:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=4)** In this video, we will review the ETL supporting functions.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=9)** When building a process, I typically prefer to break it down into small minute processes when applicable, and then functionalize it.
>
> **[0:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=17)** This makes the process more smoother and simpler to maintain.
>
> **[0:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=22)** We'll use this approach for our ETL process.
>
> **[0:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=26)** We can break down the refresh process into the following three mini processes.
>
> **[0:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=30)** First is the data processing.
>
> **[0:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=33)** For example, pulling the data from the API and transforming it from JSON objects into a DataFrame object.
>
> **[0:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=43)** Next is the metadata, creating and updating the metadata tables and logs.
>
> **[0:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=49)** And third and last is handling the append process of new data to the normalized table.
>
> **[0:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=57)** To support those mini processes, I created the following five functions.
>
> **[1:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=62)** First is the create_metadata.
>
> **[1:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=65)** As the name implies, the function creates the metadata table for giving data input.
>
> **[1:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=71)** It then ran some unit tests to evaluate if the data refresh was successful, and if we can append the new data to the normalized table.
>
> **[1:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=80)** The load_metadata function is an helper function that reads the series details and merge it with the metadata logs.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=89)** Third is the get_metadata function.
>
> **[1:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=92)** This function checks if there are any new incremental data points or difference between the data in the source and normalized table by comparing the normalized log and the corresponding metadata available in the API.
>
> **[1:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=110)** The append_metadata, as the name implies, appends new metadata that is created during the refresh process with the metadata table.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=120)** And last but not least is the append_data, which append new data points to the normalized table.
>
> **[2:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=128)** In addition, we will use the eia_metadata and the eia_backfill functions that we saw in the previous chapter.

> [!info]- Semantic Content
>
> **Code Identifiers:** create_metadata (1), load_metadata (1), get_metadata (1), append_metadata (1), append_data (1)
> **Code Keywords:** function (5)
> **Env Vars:** etl (2), api (2), json (1)
> **Cross-References:** previous video (1), previous chapter (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Data backfilling
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=0)** - [Instructor] So far we reviewed the different component of the data pipeline.
>
> **[0:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=5)** In this video, we'll review the data backfilling process.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=9)** Let's first define what data backfill is and why we need it.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=13)** Data backfill is typically defined as the initial loading of the store call data of the dataset, which in our case is the load of all these local data of the four sub-region series.
>
> **[0:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=27)** As we have closer to six years of hourly data, this is a pool of about 50,000 observations per series, or an overall pool of 200,000 data points.
>
> **[0:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=41)** For comparison, the regular refresh process loads about 24 observation per call if the refresh process run daily.
>
> **[0:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=51)** This mean that the magnitude of the data load of the backfill is more than 2,000 times bigger than the regular refresh process.
>
> **[1:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=60)** And this is also why you typically would prefer to run the backfill process locally and not on the server.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=69)** The backfill process follow a fairly similar steps as the data refresh process we saw earlier.
>
> **[1:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=76)** The main difference is that it initiates the process and not checking for differences.
>
> **[1:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=82)** It start by creating, loading the JSON file with the series information, building the profile, and go to the API and load the data based on the time range that we provide.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=94)** It generate metadata and append, or push the data, to the normalized table.
>
> **[1:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=101)** Note that if any data were available before it will override the metadata in the normalized tables.
>
> **[1:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=108)** Let's now open VSCode and review where you can find those files.
>
> **[1:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=113)** The backfill functions, the R version and the Python version, run inside a Quarto doc.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=120)** Here on the left side you can see the Python version named data_backfile_py, it's a Quarto doc.
>
> **[2:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=128)** Similarly, on the right side you can see the R version named data_backfill_R, and again it's Quarto doc.
>
> **[2:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=138)** Both of those versions mirror each other.
>
> **[2:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=141)** You can find those folders under the python and R folders.
>
> **[2:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=147)** Once rendered it generate HTML output.
>
> **[2:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=151)** So if you go over here under the Python version, you can see that there is a file named data_backfile_py and it's a HTML file with the rendered output of the backfill.
>
> **[2:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=165)** Similarly, in the R folder, you can find the corresponding R file rendered into HTML.
>
> **[2:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=172)** Let's go now to the browser and review the outputs of those files.
>
> **[2:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=177)** You can see on the left side I have the Python version, and on the right side I have the R version.
>
> **[3:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=184)** Giving that both of them are alike, let's see the Python version.
>
> **[3:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=188)** I'm not going to go line by line, just go to explain overall the processes that this function is doing.
>
> **[3:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=195)** We start like before by loading the libraries.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=199)** You can see that we are loading here additional libraries such as Pandas and NumPy to process the data.
>
> **[3:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=206)** And we're going to use libraries such as JSON to read the series.json file with the metadata of the series that we want to pool.
>
> **[3:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=215)** In addition to the local script that we used before, the eia_api, we also loading the supporting functions for the process from the eia_data file.
>
> **[3:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=226)** After we loading the series metadata, we start to set the parameters for this pool.
>
> **[3:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=231)** Given that we want to have a backfill and we want to pool all this local data, we set the start point for the first data observation that's available for this photo series, which is July 1st, 2018.
>
> **[4:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=245)** And we set the endpoint to the most recent date during the runtime of this backfill.
>
> **[4:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=251)** And then we set the API parameters for the backfill function such as the offset, load the API key, we set the path of the metadata and the data folder.
>
> **[4:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=264)** Then we start by generating the metadata.
>
> **[4:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=267)** We check what we're comparing with the metadata available on the API to make sure that the start and endpoint align with the one that we set over here.
>
> **[4:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=277)** And this is where the magic happened.
>
> **[4:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=280)** This for loop function loop over the different series and pool the data and process it.
>
> **[4:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=287)** Here is the cleaning of the data, the test and unit test are done.
>
> **[4:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=293)** As you can see, just give indication it print each series that ran during this process.
>
> **[5:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=300)** Then we generate the metadata and append it along with the data.
>
> **[5:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=305)** You can see that in the metadata, all the series has some missing values, and this is one of the things that you need to be familiar with the data.
>
> **[5:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=313)** In this case, all those four series says 98 missing values in a given period due to some missing data in the source data.
>
> **[5:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=321)** So given that we know that this is okay, we are going to set the success to True and then we update the process and we set it also to True, and this is where it's done.
>
> **[5:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=334)** And last but not least, we will visualize the series.
>
> **[5:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=337)** This enable us to eyeball in the series to see if there is anything that our test didn't test and we want to give some attention.
>
> **[5:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=345)** In the following video, we are going to review the refresh process that is done similarly to the backfill process in Quarto doc.

> [!info]- Semantic Content
>
> **CLI Commands:** python (6), find (3), make (1)
> **Code Keywords:** let (4), function (3), override (1), case, (1)
> **Env Vars:** api (4), html (3), json (2)
> **Code Identifiers:** data_backfile_py (2), eia_api (1), eia_data (1)
> **Definitions:** is a  (2), defined as (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (2)
> **File Paths:** series.json (1)

#### Data refresh output
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=0)** - [Instructor] In the previous video, we reviewed the outputs of the backfill functions.
>
> **[0:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=6)** We saw that there is a R and Python version rendered in Quarto Documentation.
>
> **[0:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=11)** In this video, we will review the data refresh functions and their outputs.
>
> **[0:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=17)** The data refresh functions running inside a Quarto Doc similar to the backfill function.
>
> **[0:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=23)** And you can see on the screen over here that there are two versions.
>
> **[0:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=27)** On the left side, there is the R version, data_refresh_R and it's a Quarto Doc, and on the right side, there is the Python version, which is named the same ending with py.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=40)** You can find those folders on the corresponding R and Python folders in the Course Repository.
>
> **[0:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=47)** Once the data pipeline is running and executing the process, it will render it and save those files in the docs folder.
>
> **[0:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=55)** If we open the docs folders, you can see two folders here, data_refresh_python for the Python files, and you can see the HTML file here.
>
> **[1:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=65)** Similarly, for the R version, you will have data_refresh_R and you will have the HTML version.
>
> **[1:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=75)** Let's go ahead and see the outputs on the browser.
>
> **[1:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=80)** Like before, there are two versions.
>
> **[1:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=82)** Previously, we saw the Python version of the backfill.
>
> **[1:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=85)** This time, let's go ahead and check the R version.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=88)** Both of them are mirror each other.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=90)** We are starting with loading the libraries.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=93)** In this case, we are using almost the exact same libraries as before, but we also using the GT library to plot the outputs in a table format and the jsonlite to load the series.json file.
>
> **[1:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=107)** We start by loading the JSON file and creating the mapping of the series.
>
> **[1:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=113)** We also set the API parameters.
>
> **[1:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=116)** For example, we set the template for the facets.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=120)** We define the offset and load the API key.
>
> **[2:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=124)** In addition, we define the metadata and data path for the output files.
>
> **[2:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=131)** Then we start with the process of identify if there is any incremental data in the API.
>
> **[2:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=137)** We used the get_metadata to load the metadata from the local metadata file and compare it with the metadata that available in the API.
>
> **[2:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=148)** So this is the output over here for the FALSE (indistinct).
>
> **[2:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=151)** And as you can see, the most recent data point, the timestamp of the most recent data point in the local normalized table is February 28th, eight o'clock in the morning.
>
> **[2:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=164)** So if you would request the next data point, the starting point of the get request should be one hour increment, and it would be nine o'clock on February 28th.
>
> **[2:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=176)** Then we compare with the most recent timestamp in the API and we see that this is matched to the ending point.
>
> **[3:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=184)** This mean that no new data points or incremental data points available in the API and the updates_available flag set to FALSE.
>
> **[3:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=194)** Which mean that we will skip the next step of refreshing the data.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=199)** If the updates_available would be TRUE, then the function would go ahead and execute this process, which loop over each series and pull the corresponding data points.
>
> **[3:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=214)** One things that I like to do when I'm generating this type of documentation is to leave messages.
>
> **[3:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=221)** So for example, here I'm printing, "What was the output?"
>
> **[3:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=224)** And this output is, you can see forward series, there was no new data point available.
>
> **[3:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=230)** In any case, we will capture metadata even if we didn't pull new points.
>
> **[3:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=236)** And as you can see that some of the parameters here are not relevant for this pull, because we didn't pull any new data and we set them as missing value or NAs.
>
> **[4:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=246)** We're ending by appending the new metadata and we plot the series as before.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), html (2), false (2), json (1), true (1)
> **CLI Commands:** python (5), find (1)
> **Code Keywords:** function (2), let (2), case, (2)
> **Code Identifiers:** updates_available (2), data_refresh_python (1), get_metadata (1)
> **Analogies:** for example (2), similar to (1)
> **Documentation:** the docs (2)
> **File Paths:** series.json (1)
> **Cross-References:** previous video (1)

#### Data quality checks
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=0)** - [Instructor] We'll conclude this chapter with reviewing the pipeline data quality checks or unit test.
>
> **[0:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=6)** Let's start by defining the term data quality checks.
>
> **[0:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=11)** Data quality checks or data unit test is the process of evaluating the data structure and its values with the use of set of deterministic and non-deterministic assumptions.
>
> **[0:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=24)** Example of non-deterministic assumptions are data structure and data attributes.
>
> **[0:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=30)** For example, the number of columns or their attributes such as numeric string, or time objects.
>
> **[0:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=37)** The field names the value range.
>
> **[0:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=41)** So for example, for our electricity data, we do not expect negative values and duplications.
>
> **[0:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=48)** Likewise, examples of non-deterministic assumption or expectations are missing values, the value range.
>
> **[0:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=57)** So for example, in our electricity data sets, we can measure the mean, the standard deviation, and set a threshold of when we want to alert if the standard deviation is higher from the mean and delays.
>
> **[1:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=71)** Example for delay, if we expect to refresh the data every 24 hours, but the function could not identify new data available in the API in the last seven days, we should raise the red flag.
>
> **[1:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=85)** It is recommended to set a unit test between two processes.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=89)** For example, moving data from sources A and B.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=93)** The unit test is the doorkeeper.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=96)** It will allow the append of the new data to source B only if the new data passes the unit test we set.
>
> **[1:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=105)** Likewise, it'll prevent the appending of new data.
>
> **[1:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=109)** If the data fails, the quality checks.
>
> **[1:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=112)** This will prevent a potential series of data integrity issues in our pipeline and with use of monitoring will enable us to address those issues on time.
>
> **[2:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=125)** Here is the metadata that our pipeline collected throughout the refresh process.
>
> **[2:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=129)** They create meta functions, run a sequence of test, for example, comparing if the timestamp of the data we collected is aligned with the ones we set, with the start and end argument of the get request.
>
> **[2:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=145)** It then, based on some logic, defines if the data is good to get appended or not, and set a success criteria accordingly.
>
> **[2:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=155)** The function will append the new data to the normalized table if and only if the success flag is set to true.
>
> **[2:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=164)** Last but not least, the comments field provide some information about what test ran and fell, or warnings that generated throughout process.
>
> **[2:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=175)** This enables the user to identify what is the status of the test.
>
> **[2:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=179)** This table will be the best of our pipeline monitoring process.
>
> **[3:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=184)** We'll dive into more details in chapter four.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), such as (1)
> **Code Keywords:** function (2), let (1), raise (1)
> **Env Vars:** api (1)
> **Cross-References:** in the last (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Deployment

#### Introduction to GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=0)** - [Instructor] In this video, we will review GitHub Actions core functionality and features.
>
> **[0:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=6)** Let's start by explaining what GitHub Action is.
>
> **[0:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=9)** GitHub Actions, or Actions, is a CI/CD tool for software workflow automation.
>
> **[0:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=16)** It is integrated part of GitHub features, and it is, by default, available on any GitHub repository.
>
> **[0:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=24)** Workflow defines a process that we automate on Actions.
>
> **[0:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=29)** It can derive from a simple bash script with a list of commands, to a complex software build.
>
> **[0:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=36)** There are mainly two types of automation methods in Actions.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=40)** First is Triggered Workflow, which is simply define a job that is set to start when some action takes place.
>
> **[0:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=49)** For example, this workflow is triggered to run a unit test whenever a git-commit or portal request takes place.
>
> **[0:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=59)** The second type of automation is Scheduled Workflow, which run a job based on a timing or a cron job.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=68)** For example, this workflow on the right side is set to run every hour.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=74)** In this course, we will focus on scheduling jobs with GitHub Actions.
>
> **[1:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=79)** Let's review GitHub Actions key features.
>
> **[1:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=82)** First and foremost, it's fully integrated with GitHub and its features.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=88)** It supports multiple OS systems such as Windows, macOS, and Ubuntu.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=93)** It fully supports deployment with Docker, which is the method we will use in this course, provides logs, and it also provide a service for storing sensitive data such as API keys and credentials.
>
> **[1:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=109)** We will use this service to store our EIA API key.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=114)** Last but not least, the service has bought free and enterprise versions.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=120)** We will use the free version for the deployment of our data pipeline.
>
> **[2:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=126)** Let's now review the general requirements for setting a workflow on Actions.
>
> **[2:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=131)** First, you need a YAML file.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=133)** A workflow is set and configured with a YAML file, and we will build those workflow using this method.
>
> **[2:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=141)** Actions enable you to select which OS or OS versions to run your workflow.
>
> **[2:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=147)** Before you get started with defining your environment or docker container settings, please make sure Actions supports this version.
>
> **[2:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=155)** We will use Ubuntu 2020 .04.
>
> **[2:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=159)** The best practice for code deployment in scheduling system, particularly with Actions, is with Docker Container.
>
> **[2:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=167)** Generally, you can deploy your code without the use of an image by setting your environment upon the launch time of the job.
>
> **[2:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=176)** But it is not a recommended practice.
>
> **[2:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=179)** You will need to define your actions that you want to deploy.
>
> **[3:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=183)** Typically, it is a script or multiple scripts.
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=187)** If your workflow is using credentials or any other sensitive inputs, you should set them as a secret.
>
> **[3:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=195)** You can also set environment variables if needed.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=199)** Last but not least, workflows are stored in the workflows folder under the .GitHub folder.
>
> **[3:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=207)** In the next video, we will review the Docker Container settings.

> [!info]- Semantic Content
>
> **Tools:** github (9), bash (1)
> **CLI Commands:** docker (4), cd (1), git (1), make (1)
> **Env Vars:** api (2), yaml (2), eia (1)
> **Code Keywords:** let (3), default, (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (1), recommended (1)
> **Code Identifiers:** macos (1)

#### Deployment with Docker
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=0)** - [Instructor] In the previous video, we reviewed the core functionality of GitHub actions.
>
> **[0:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=5)** In this video, we will dive into more details about the motivation for deploying a workflow with Docker image.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=13)** If I need to define the motivation for using a container for our deployment, in one word, it would be environment and in two words, reproducible environment.
>
> **[0:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=24)** Docker may have a high learning curve, but it was worth the effort.
>
> **[0:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=28)** when you deploy your code in a remote environment.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=32)** It enables you to shift your code with the environment in which you developed and test the code with.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=40)** Plus, it is an industry standout and its use case go beyond code deployment.
>
> **[0:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=47)** During this course, we'll use the course image, which is rkrispin backslash data pipeline automation with GitHub actions with dash separator, with the tag of prod.
>
> **[1:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=60)** The image Docker file and its supporting files can be found under the .dev container folder in the course repository.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=68)** If you feel comfortable with Docker, I recommend going ahead and creating a new image or customizing the course image according to your needs.
>
> **[1:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=78)** If you are new to Docker and may have additional requirements that not available in the current image, I recommend checking the official Python image for Python applications or the Docker project for our applications.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=94)** In the next video, we'll learn how to create a workflow.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (6), python (2)
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** github (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Setting GitHub Actions workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=0)** - [Instructor] In this video, we will create our first workflow.
>
> **[0:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=4)** Let's first define the workflow scope.
>
> **[0:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=8)** We want the workflow to simply print a "Hello World."
>
> **[0:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=11)** We are going to use Ubuntu as our OS, and we will use our course image to set the environment.
>
> **[0:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=19)** There are two methods for adding a new workflow.
>
> **[0:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=23)** First, via GitHub. Let's open the browser and go to GitHub.
>
> **[0:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=28)** On the main menu, go to Actions, and then click on the left side, New workflow.
>
> **[0:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=38)** As you can see, GitHub offer many templates.
>
> **[0:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=41)** Over here, you can see there is a Python version and a R version.
>
> **[0:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=47)** We will set our workflow from scratch.
>
> **[0:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=50)** Select set up a workflow yourself.
>
> **[0:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=53)** And here, this is leading to the GitHub editor.
>
> **[0:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=56)** And you can start edit and set your workflow.
>
> **[0:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=59)** And at the end you save it by committing the changes back to the repository.
>
> **[1:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=65)** You can see by default GitHub named this workflow as main.yml.
>
> **[1:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=71)** And this file is under the .github/workflows folder.
>
> **[1:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=77)** Let's now not go with this route and see how we can do it on VS Code.
>
> **[1:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=82)** So we're now in the course repository.
>
> **[1:26](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=86)** To set a workflow via the local machine, you first need to make sure that you have the .github folder.
>
> **[1:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=92)** And below this, you should have the workflows folder.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=96)** If it is your first workflow, so go ahead and set those folders and open the workflows folder.
>
> **[1:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=105)** Within here, you see that I already have some workflow and we are going to create a new one.
>
> **[1:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=110)** So I'm going to create here, under the workflows folder, a new script, and I'm going to name it hello-world, with the extension of YAML without A, yml.
>
> **[2:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=128)** Click Enter.
>
> **[2:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=130)** And now, we have the file over here on the editor and we can start to edit.
>
> **[2:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=135)** This is a YAML file and it's fairly similar to a JSON file.
>
> **[2:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=139)** We'll start by defining the workflow name.
>
> **[2:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=142)** Let's use the name argument.
>
> **[2:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=144)** So let's set the name, use colons, and call it Hello World.
>
> **[2:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=151)** Next, we want to set the trigger mechanism.
>
> **[2:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=156)** Given that we want to set a cron job, we will use the on argument.
>
> **[2:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=161)** So on define on what we're going to trigger this job.
>
> **[2:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=165)** And beneath this we will set scheduler with the schedule argument, okay, -dule.
>
> **[2:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=174)** And we set the cron.
>
> **[2:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=177)** The cron argument enable us to set the time that we want to trigger a job.
>
> **[3:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=181)** So let's go ahead and define cron, and we put it inside quotes.
>
> **[3:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=188)** And by default, we use the asterisk to set cron.
>
> **[3:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=192)** So let me just write the five asterisk and I explain what each one define.
>
> **[3:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=199)** So each one of those five asterisk define a time unit.
>
> **[3:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=204)** So starting from left to right, this is defined in minutes, hours, day of the month, the month, and the day of the week.
>
> **[3:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=216)** And by edit this you can define when you want to run the job.
>
> **[3:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=223)** So for example, we want to run it hourly.
>
> **[3:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=226)** So on the second asterisk, which define the hours, we will add a backslash and add one.
>
> **[3:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=234)** We just saying we want to run it every one hour.
>
> **[3:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=237)** If for example, you want to run it every 12 hours, so you just add, set here to 12, and so on.
>
> **[4:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=246)** If you want to run it every four hours, it will be four.
>
> **[4:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=250)** So let's run it every one hour.
>
> **[4:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=252)** And let's say that we want to define the minutes in the hour that you want to run it.
>
> **[4:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=256)** So here you can use, for example, set it at the beginning of the hour.
>
> **[4:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=260)** So let's set it zero.
>
> **[4:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=262)** If for example you want to have it 10 minutes after the hour, we'll set it as 10.
>
> **[4:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=267)** Okay? So let's just keep it as zero.
>
> **[4:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=269)** I will note here that the free version is depend on availability.
>
> **[4:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=275)** So if you set it to zero, not necessarily that it will start at the beginning of the hour, it depend on the availability of the resource that GitHub offer for the free version.
>
> **[4:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=289)** Okay, so we set the cron job.
>
> **[4:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=291)** Let's now go ahead and set the jobs that we want to run.
>
> **[4:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=295)** So we want to use the jobs argument and we can start set the job.
>
> **[5:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=303)** So here we're going to first name the job name.
>
> **[5:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=305)** So let's call the job name hello-world, and end it with semicolons.
>
> **[5:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=313)** The first thing we want to define is the OS or what type of machine we want to run this job.
>
> **[5:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=319)** So let's select the runs-on argument and define it as Ubuntu.
>
> **[5:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=331)** And the version should be 22.04.
>
> **[5:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=335)** This is aligned with the version we are using in our docker container.
>
> **[5:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=340)** And then we want to set our container.
>
> **[5:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=344)** So we're going to use the container argument, and define it with the image argument.
>
> **[5:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=353)** And over here I will copy it, 'cause it's too long, rkrispin/data-pipeline-automation-with-github-actions, and the version is prod.
>
> **[6:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=368)** Next, we want to set the steps in this job.
>
> **[6:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=371)** So I need to indent it back.
>
> **[6:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=374)** And we have here, a single step.
>
> **[6:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=376)** We want to print "Hello World."
>
> **[6:19](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=379)** So first we need to name this step name.
>
> **[6:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=382)** As you can see, we define for each object here, we define a name, so this object is a step, and we start by defining the name of the step.
>
> **[6:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=391)** So we're going to use again name, and we call it, the step, print-hello-world.
>
> **[6:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=403)** And we want to define the command.
>
> **[6:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=406)** So we're going to use the run argument.
>
> **[6:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=409)** And over here, once you set the run argument, essentially you are in the command line of this Ubuntu machine.
>
> **[6:55](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=415)** So that's how, the way, you should think about it.
>
> **[6:58](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=418)** From here, you can execute script.
>
> **[7:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=420)** For example, if you want to call a Bash script, you will use the bash command, and the path of the file.
>
> **[7:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=429)** Or if you run a Python file or R, you will use the, for example, for Python is python or python3, and the file name.
>
> **[7:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=438)** So you get the gist over here.
>
> **[7:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=440)** So since we want to just print "Hello World," I'm going to use the echo command line, command echo, and I want to say "Hello World."
>
> **[7:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=454)** And that's it. This is how you set a workflow.
>
> **[7:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=458)** So the next step is to save it. Okay?
>
> **[7:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=463)** And we want to commit back this job, 'cause now it's only living in our local machine.
>
> **[7:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=469)** We want now to commit it back to GitHub to our repository.
>
> **[7:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=474)** Let's now go ahead and commit the changes on the terminal.
>
> **[7:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=477)** So first we can check that we have a change.
>
> **[8:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=480)** So let's do git status.
>
> **[8:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=483)** And you can see there is a new workflow.
>
> **[8:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=485)** So let's now go ahead and add it, git add .github/workflow/, and the file name.
>
> **[8:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=496)** Add commit message, commit -m.
>
> **[8:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=501)** And we call it, "adding new workflow to actions."
>
> **[8:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=510)** And let's push the change, git push, okay.
>
> **[8:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=515)** So there is probably a workflow that are already running.
>
> **[8:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=518)** So we first need to merge. So let's do git pull.
>
> **[8:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=524)** So on the backend, there are some workflow that are already running.
>
> **[8:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=526)** So that's why I get this error message.
>
> **[8:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=530)** And now let's do git push.
>
> **[8:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=534)** Now let's go back to the repository and see if the workflow was committed.
>
> **[9:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=541)** So let's maybe refresh first, and you can see there was commit over here, and you can see the commit message, "adding new workflow to actions."
>
> **[9:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=551)** And if you go to Actions, you can see the Hello World.
>
> **[9:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=556)** Now it might take some time until it will run, because we set it to run every hour.
>
> **[9:25](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=565)** So from the moment you push it, it typically will run in the next hour.
>
> **[9:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=573)** So in the next video, we're going to wait until the job will run and we go ahead and review the logs of the job.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), this, (1), default, (1)
> **Tools:** github (11), command line (2), bash (2), vs code (1), terminal (1)
> **CLI Commands:** git (5), python (4), make (1), docker (1), python3 (1)
> **UI Navigation:** go to (3), open the (2), click on (1), select the (1)
> **Analogies:** for example (6), similar to (1)
> **Definitions:** is a  (4)
> **Env Vars:** yaml (2), json (1)
> **Cross-References:** in the next (2), go back to (1)

#### Reviewing workflows logs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=0)** - [Instructor] In the previous video, we created our first workflow, Hello World.
>
> **[0:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=5)** Let's now go back to the Action section on the repository and see how can we explore the job logs.
>
> **[0:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=12)** First, on the repository, click the Action tab.
>
> **[0:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=16)** On the left side, you can see the list of all the actions that are available in this repository.
>
> **[0:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=22)** So for example, you can see here our action that we created in the previous video, Hello World.
>
> **[0:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=29)** On the main screen, you can see the most recent jobs that ran and their status.
>
> **[0:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=35)** A green check mark indicates that the job was completed successfully, and a red X indicates a failure.
>
> **[0:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=45)** You can access the log of the Hello World either by going to the workflow name on the left side, or click on the job name if available on the main screen.
>
> **[0:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=57)** Let's go ahead and click over here on the Hello World job.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=61)** And as you can see here, there is a description of the specific job that ran, the time, duration of the runtime.
>
> **[1:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=69)** And we can access it by clicking this box.
>
> **[1:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=72)** And here you can see the steps of running the job.
>
> **[1:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=76)** The job start by setting up the machine and then loading the container.
>
> **[1:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=83)** It then run the job.
>
> **[1:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=84)** And you can see here the name that we set for the job, print-hello-world.
>
> **[1:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=89)** And once it's done, stop the containers and complete the job.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=94)** We can expand each step by clicking the arrow.
>
> **[1:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=99)** So you can see here this is the process of creating, setting the machine.
>
> **[1:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=106)** And over here loading the image.
>
> **[1:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=110)** Let's go ahead and check the job that we set.
>
> **[1:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=113)** And as you can see here, the command that was running was run echo Hell World, and this is the output.
>
> **[2:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=121)** And as you can see, the job completely successfully as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **Cross-References:** previous video (2), go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Setting secrets and environment variables
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=0)** - [Instructor] In this video, we will see how we can set secrets and environment variables in GitHub actions.
>
> **[0:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=8)** We'll use secrets to store sensitive variables and credentials such as the EI API Access Key.
>
> **[0:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=16)** Secret and environment variables are set at the repository level.
>
> **[0:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=21)** To set secret on the repository that you are running the workflow, open the setting menu.
>
> **[0:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=28)** Then select the secrets and variables option on the left side of the menu and choose the action sub menu below.
>
> **[0:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=38)** Under the secrets tab, click the new repository secret green button, and you can add new secret.
>
> **[0:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=48)** As you can see, I have already three secrets set there.
>
> **[0:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=52)** The first EI_API_key is my access key for the repository.
>
> **[1:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=60)** The second and the third user_email and user_name are my GitHub user email and name.
>
> **[1:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=70)** In the next video, we'll see how we can commit back to the repository, and you will have to use your GitHub username and email for that workflow.
>
> **[1:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=82)** Later, in this chapter, we'll use the EI API Access Key to Access the API Via the workflow.
>
> **[1:31](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=91)** Please go ahead and set those variables as secrets.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=96)** Likewise, to set environ variables, go to the variable tab and follow the same steps.

> [!info]- Semantic Content
>
> **Env Vars:** api (3)
> **Tools:** github (3)
> **UI Navigation:** open the (1), select the (1), go to (1)
> **Code Identifiers:** user_email (1), user_name (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Advanced workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=0)** - [Instructor] In the previous video, we saw how to set environment variables and secrets.
>
> **[0:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=5)** In this video, we will increase the level of complexity and see how we can read and write back to the repository from a workflow.
>
> **[0:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=15)** Reading and writing back to repository is critical when we deploy our electricity data automation pipeline.
>
> **[0:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=23)** During this process, we will read and execute code from the report and write back to the data and metadata tables.
>
> **[0:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=32)** To write back to the repository, you will have to set your GitHub username and email as secrets as shown in the previous video.
>
> **[0:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=42)** In the next example, we want to create a workflow that captures the date and time during the workflow runtime.
>
> **[0:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=50)** Log it and write it back to a log file on the repository.
>
> **[0:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=54)** Before setting the workflow, I created an empty text file to store the logs, this file name as log.text, and it is under the chapter three folder.
>
> **[1:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=68)** We will use similar settings as the one we used in the Hello World example before and add a new step, the Checkout Action.
>
> **[1:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=78)** The Checkout Action is a built in feature that enables you to check out or clone your current repository to the workflow.
>
> **[1:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=88)** We will use the reference argument to refer to the main branch for this workflow.
>
> **[1:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=95)** You can refer to other branch in case it's applicable, and this is a great feature, enables you to test code before deployment on different branches such as dev staging and prod.
>
> **[1:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=107)** We will use version three of this feature.
>
> **[1:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=109)** From this point, run as we were inside the root folder of the main branch.
>
> **[1:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=116)** This enable you to call and reference any file in the main branch at the time of the execution of the workflow.
>
> **[2:03](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=123)** The next step will define a set logs, what are the following changes to the run argument.
>
> **[2:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=130)** It now executed the helper file named Set_logs, a bus script, and we use the end argument to load the GitHub username and email that we will use later on to commit the changes we did on the log file.
>
> **[2:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=149)** Using bus script to handle some of the workflow tasks is a common practice.
>
> **[2:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=155)** While you can write your code inside the run arguments as you are in the command line, it is cleaner to wrap it inside a bus script or any other language that is applicable for the specific application.
>
> **[2:48](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=168)** Let's now dive into the functionality of the batch script.
>
> **[2:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=172)** First, we set a variable to define the branch that we are using in this task.
>
> **[2:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=177)** In this case, we're using the main branch.
>
> **[3:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=180)** Then we use the date command to capture the date and time during the execution time and story to the log file we created for this workflow, Log.text.
>
> **[3:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=192)** Please make sure you reference the file as you are in the root folder of the repository.
>
> **[3:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=197)** So in this case, we also add the path, the full path, chapter three, and then the file name.
>
> **[3:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=204)** Next, we want to give permission to the machine we are running the workflow to write back to the repository.
>
> **[3:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=213)** We'll use the Git config command and add the path of the repository in that machine.
>
> **[3:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=219)** Added this If Or statement to validate if there are any changes in the repository before we commit the changes back.
>
> **[3:47](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=227)** Generally, this is just a safety step to prevent the process from trying to commit when there is nothing to commit back.
>
> **[3:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=234)** The next step is the commit process, where we are going to use the environment variables we pulled from the secrets with our GitHub account details to authenticate, commit the changes in the log file and push it back to the repository.
>
> **[4:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=250)** Here you can see the output of the workflow after it deployed and ran few times, the file is in the Code repository, under the chapter three folder.
>
> **[4:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=261)** You can see the commit message we set, update the log, and the logs were captured at the time of the workflow run as expected, at this time, we're ready to deploy the workflow for the electricity data automation.
>
> **[4:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=278)** In the next video, we will see how to set this workflow.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (2), in the next (2)
> **Tools:** github (3), command line (1)
> **Code Keywords:** case, (2), let (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), git (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Data pipeline deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=0)** - [Instructor] In this video, we will connect what we have learned so far in the course and deploy the data pipeline into GitHub actions.
>
> **[0:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=8)** We will use a similar deployment method as we saw in the previous video.
>
> **[0:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=12)** Let's start with the workflow general requirements.
>
> **[0:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=16)** We want to pull the repository content using the checkout actions.
>
> **[0:21](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=21)** This will enable us to use the data pipeline functions and files from the repository during the runtime of the workflow.
>
> **[0:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=30)** In addition, we want to run this workflow every 12 hours.
>
> **[0:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=34)** We will set two versions for the deployment, one for R and a second for Python.
>
> **[0:41](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=41)** Other than that, we will use the exact same setting as before.
>
> **[0:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=45)** Let's review the deployment files of the Python and R version side by side.
>
> **[0:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=50)** As before both files are in the workflows folder, and they're named as data_refresh_py.yml for the Python version and data_refresh_R.yml for the R version.
>
> **[1:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=71)** Let's go over the workflow functionality.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=74)** We set the scheduler to trigger the chron job every 12 hours.
>
> **[1:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=80)** Like the previous example, we will use the checkout action to pull the course repository using the main branch as reference.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=90)** Last but not least, we'll let the API key to the workflow environment variables and called a bash script with the run argument that triggers the data refresh process.
>
> **[1:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=103)** As you can see, the bash script names are the only difference between the R and Python versions.
>
> **[1:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=109)** Here are the bash scripts that trigger the data pipeline process.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=114)** Both the Bash scripts have the same functionality, with the exception of the Python version.
>
> **[2:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=120)** as we cannot deploy two dashboards on GitHub action at the same time, we only make the deployment for the Python version, and this is the difference between the two Bash scripts.
>
> **[2:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=131)** In the next chapter, we will dive into more details about the dashboard deployment process.
>
> **[2:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=137)** Let's review the functionality of the Bash script using the R example.
>
> **[2:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=142)** It starts with cleaning the previous rendered files if they exist.
>
> **[2:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=147)** It then renders the quarto doc.
>
> **[2:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=150)** This is where the data pipeline starts to run.
>
> **[2:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=154)** Next, it creates a copy of the outputs to the docs folder.
>
> **[2:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=159)** This enables you to link the data pipeline render outputs to the dashboard if needed.
>
> **[2:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=166)** We will dive into more details about the functionality of the Docs folder in the next chapter.
>
> **[2:52](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=172)** Last but not least, it commits the changes back to the main repository as we saw in the previous example.
>
> **[3:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=180)** Congratulations.
>
> **[3:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=181)** We have now two pipelines running on GitHub actions.
>
> **[3:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=186)** On the left side is the Python version, and on the right side is the R version.

> [!info]- Semantic Content
>
> **Tools:** bash (6), github (3)
> **CLI Commands:** python (7), make (1)
> **Code Keywords:** let (5)
> **Cross-References:** as we saw (2), in the next (2), previous video (1)
> **File Paths:** data_refresh_py.yml (1), data_refresh_r.yml (1)
> **Documentation:** the docs (2)
> **Code Identifiers:** data_refresh_py (1)
> **Env Vars:** api (1)


### 5. 4. Monitoring

#### Data pipeline maintenance
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=0)** - [Instructor] Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=2)** We now have a deployed data pipelines running on GitHub actions.
>
> **[0:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=6)** In this chapter, we will focus on the maintenance steps of the data pipeline.
>
> **[0:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=12)** Let's start by discussing when and why you need to maintain the data pipeline.
>
> **[0:18](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=18)** Typically, software upgrades, new features, and data integrity will force you to make changes in the code or the structure of the data pipeline.
>
> **[0:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=29)** Software upgrades and new features typically trigger changes in the environment settings.
>
> **[0:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=35)** Generally, it is recommended to have a clear deployment strategy for new features or changes in the environment.
>
> **[0:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=43)** A classic setting is to have three environments, dev, stage, and prod, where the dev is where you roll out first and test new software updates before pushing it to the stage and prod, and a new feature you test on the stage environment before pushing the changes to the prod environment.
>
> **[1:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=66)** This is will ensure that when you update your docker image or change a feature in the data pipeline, the production data pipeline won't crash or get affected.
>
> **[1:17](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=77)** Likewise, data integrity issues or unexpected errors will require immediate changes in the code and you want to test it before rolling out to the prod environment.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=90)** This is where monitoring, which is the process of tracking the health of the data pipeline, is a critical tool in the maintenance of the pipeline.
>
> **[1:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=99)** This includes a variety of methods and tools such as setting unit test, defining logs, and setting alerts.
>
> **[1:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=110)** In chapter two, we saw different unit test and integrated some data quality checks into the electricity data pipeline.
>
> **[1:59](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=119)** Those are just conceptual example that we use to demonstrate this topic.
>
> **[2:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=124)** Now, after you saw the process of setting a data pipeline and the functionality of actions, the sky is the limit.
>
> **[2:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=133)** There are many open source tools for data quality for both R and Python, such as the pointblank R Library or the YData profile Python library, which provides great tools for data monitoring and reporting.
>
> **[2:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=150)** Those tools can be easily integrated into the data pipeline during the runtime.
>
> **[2:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=157)** In the next video, we'll learn how to deploy render dashboard to GitHub pages using GitHub actions.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1), docker (1)
> **Tools:** github (3)
> **Code Keywords:** let (1), require (1)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Deploying dashboard to GitHub Pages
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=0)** - [Instructor] In this video, we'll learn how to deploy an HTML document, such as a dashboard or report, to GitHub Pages with GitHub actions.
>
> **[0:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=10)** Building dashboards or monitoring tools is beyond the scope of this course.
>
> **[0:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=14)** The goal here is to provide you with tools for deployment, HTML best monitoring tools, such as ones generated by the YData Profile or pointblank libraries that we saw in the previous video.
>
> **[0:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=29)** Before diving into more details, let's explain what is GitHub Pages.
>
> **[0:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=34)** GitHub Pages is a GitHub feature that enables the host of a website on any repository.
>
> **[0:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=40)** It was built to support code documentation, and it's also widely used to host personal websites, blogs, dashboards, and other HTML documentation.
>
> **[0:53](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=53)** For this demonstration, I created a simple Quarto dashboard that plots the data and presents the pipeline's logs.
>
> **[1:01](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=61)** As before, the dashboard has both R and Python versions, but for the purpose of the demonstration, we will deploy the Python version.
>
> **[1:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=70)** The deployment of the R version is identical.
>
> **[1:14](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=74)** To deploy a website, you will need an HTML file named index.html, and therefore, we set the names of both the R and Python versions of the dashboard as index.qmd.
>
> **[1:27](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=87)** Once the Quarto renders the QMD file, it sets the output as index.html and the output file is ready for the deployment in GitHub Pages.
>
> **[1:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=99)** Before setting the dashboard, let's set the website folder.
>
> **[1:42](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=102)** GitHub Pages website can run either from the root folder or from the docs folder.
>
> **[1:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=110)** We will create a docs folder and use it for the deployment of the dashboard.
>
> **[1:56](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=116)** After we set the folder, the last step is to define the rendering process of the dashboard during the pipeline runtime.
>
> **[2:04](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=124)** Let's open the bash script that triggers the data pipeline and review the dashboard deployment process.
>
> **[2:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=129)** Recall this bash script, data_refresh_py, is triggered by actions during the runtime of the workflow and it refresh the data and captures logs.
>
> **[2:22](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=142)** The code in the purple box renders the dashboard whenever new updates are available.
>
> **[2:28](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=148)** It then removes the files of the old dashboards and copies the new dashboard's files to the docs folder.
>
> **[2:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=156)** This includes the index.html file and other supporting files in the index_files folder.
>
> **[2:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=166)** Once we have the files in place, we can set the dashboard on the GitHub setting.
>
> **[2:51](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=171)** On the repository main page, enter the Setting tab, then select the Pages menu on the left side, and define the branch you want to deploy and the folder of the website.
>
> **[3:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=185)** In this case, we will deploy the website from the docs folder from the main branch.
>
> **[3:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=190)** Once you save this process, it might take a few minutes, and then you get a URL that you can access the website.

> [!info]- Semantic Content
>
> **Tools:** github (8), bash (2)
> **Env Vars:** html (4), qmd (1), url (1)
> **Code Keywords:** let (3), case, (1)
> **File Paths:** index.html (3)
> **CLI Commands:** python (3)
> **Documentation:** the docs (3)
> **Code Identifiers:** data_refresh_py (1), index_files (1)
> **UI Navigation:** open the (1), select the (1)


### 6. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980&t=0)** - Congratulations for completing the course.
>
> **[0:02](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980&t=2)** I hope you enjoyed the learning and can apply to real-life applications.
>
> **[0:06](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980&t=6)** If you want to learn more, you are welcome to follow me on LinkedIn, where I'm sharing content related to data science and engineering.
>
> **[0:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980&t=13)** Happy learning!

> [!info]- Semantic Content
>
> **Speakers:** - congratulations (1)


## Instructor

- [[Rami Krispin]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/data-pipeline-automation-with-github-actions-4503382)

## Skills Covered

- Python (Programming Language)
- R (Programming Language)
- GitHub
- Data Pipelines

## Path Context

### In [[Advance Your Data Engineering Skills]]
← [[Data Engineering Project- Build Streaming Ingestion Pipelines for Snowflake with AWS]] | **9 of 10** | [[End-to-End Data Engineering Project]] →

## Appears In

- [[Advance Your Data Engineering Skills]]

## Related Courses

_Courses sharing skills:_

- [[Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training]] — Python (Programming Language), R (Programming Language)
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub

---

[↑ Back to top](#)