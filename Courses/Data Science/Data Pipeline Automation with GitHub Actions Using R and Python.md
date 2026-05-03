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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Pipeline%20Automation%20with%20GitHub%20Actions%20Using%20R%20and%20Python.md)

![Data Pipeline Automation with GitHub Actions Using R and Python](https://media.licdn.com/dms/image/v2/D560DAQHvVdDve6puQA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713388433219?e=2147483647&amp;v=beta&amp;t=mG5AuFH5Tkyk2oiJYqBS0Zx_Z2OiYNRNGFYlNWvTuoA)

# Data Pipeline Automation with GitHub Actions Using R and Python

> In this course, learn how to set up workflows on GitHub Actions to automate processes with both R and Python. Instructor Rami Krispin takes you through the automation process, sharing real-world examples. He shows you how to set up a data pipeline, pull metadata from a pipeline, and deploy a live dashboard with GitHub Actions and Pages. If you’re tired of spending hours running scripts manually, o

> [LinkedIn Learning](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python) | 2h 12m | Intermediate | 9K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Data pipeline automation with GitHub Actions](#data-pipeline-automation-with-github-actions)
  - [What you should know](#what-you-should-know)
- [**1. EIA API**](#1-eia-api) (17 videos)
  - [EIA API](#eia-api)
  - [Setting an environment variable](#setting-an-environment-variable)
  - [The EIA API dashboard](#the-eia-api-dashboard)
  - [GET request structure](#get-request-structure)
  - [Querying the data via the browser](#querying-the-data-via-the-browser)
  - [Querying data with R and Python](#querying-data-with-r-and-python)
  - [Pulling metadata from API with R](#pulling-metadata-from-api-with-r)
  - [Sending a simple GET request with R](#sending-a-simple-get-request-with-r)
  - [API limitations with R](#api-limitations-with-r)
  - [Handling a large data request with R](#handling-a-large-data-request-with-r)
  - [Pulling metadata from API with Python](#pulling-metadata-from-api-with-python)
  - [Sending a simple GET request with Python](#sending-a-simple-get-request-with-python)
  - [API limitations with Python](#api-limitations-with-python)
  - [Handling a large data request with Python](#handling-a-large-data-request-with-python)
  - [Challenge: Query the API](#challenge-query-the-api)
  - [Solution: Query the API with R](#solution-query-the-api-with-r)
  - [Solution: Query the API with Python](#solution-query-the-api-with-python)
- [**2. Data Automation**](#2-data-automation) (7 videos)
  - [Data pipeline scope and requirements](#data-pipeline-scope-and-requirements)
  - [Data pipeline architecture](#data-pipeline-architecture)
  - [Data refresh process](#data-refresh-process)
  - [ETL supporting functions](#etl-supporting-functions)
  - [Data backfilling](#data-backfilling)
  - [Data refresh output](#data-refresh-output)
  - [Data quality checks](#data-quality-checks)
- [**3. Deployment**](#3-deployment) (7 videos)
  - [Introduction to GitHub Actions](#introduction-to-github-actions)
  - [Deployment with Docker](#deployment-with-docker)
  - [Setting GitHub Actions workflow](#setting-github-actions-workflow)
  - [Reviewing workflows logs](#reviewing-workflows-logs)
  - [Setting secrets and environment variables](#setting-secrets-and-environment-variables)
  - [Advanced workflow](#advanced-workflow)
  - [Data pipeline deployment](#data-pipeline-deployment)
- [**4. Monitoring**](#4-monitoring) (2 videos)
  - [Data pipeline maintenance](#data-pipeline-maintenance)
  - [Deploying dashboard to GitHub Pages](#deploying-dashboard-to-github-pages)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Data pipeline automation with GitHub Actions](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-automation-with-github-actions?u=76281980&t=0)** - Do you spend hours on running scripts manually? Do you frequently pull data from APIs or other data sources and update [[Dashboards]] and reports? If so, you are in the right place. In this course, we will learn how to set workflows on [[GitHub]] actions to automate processes with both R and [[Python (Programming Language)|Python]]. We will demonstrate the automation process with real life examples. Specifically, we will set a data pipeline to pull the hourly demand for electricity in California from the EIA API, and deploy a live dashboard with GitHub actions and pages. Hi, I'm Rami Krispin, senior manager of [[Data Science]] and Engineering. I have decades of experience in working with data. Are you ready to take the journey with me? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Dashboards]] (1), [[Python (Programming Language)|Python]] (1), [[Data Science]] (1)
> **Env Vars:** eia (1), api (1)
> **Tools:** github (2)
> **CLI Commands:** python (1)
> **Speakers:** - do (1)

#### [What you should know](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/what-you-should-know?u=76281980&t=0)** - [Instructor] To successfully complete the course, you will need to know either R or [[Python (Programming Language)|Python]], as I will demo in both languages in this course. You also need some basic command line knowledge, including [[Git]]. You can complete the course without knowledge in Docker, but it's highly recommended. All the code and examples will be used in the course are available in the course repo. This course has Docker integration setting for VS Code with the Dev Containers extension. This includes both the R and Python dependencies, which you can load on your local machine to reproduce the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Git]] (1)
> **CLI Commands:** python (2), docker (2), git (1)
> **Tools:** command line (1), vs code (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 1. EIA API

[↑ Back to Table of Contents](#table-of-contents)

#### [EIA API](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=0)** - [Instructor] During the course, we will utilize the EIA API to extract electricity related data with the help of [[GitHub]] Actions and other tools. In this chapter, our focus will be on the EIA API, its functionality, the variety of datasets available on the API, their structure, and how to retrieve the data using R and [[Python (Programming Language)|Python]]. Before getting started with the API, let's first explain what EIA is. EIA stands for Energy Information Administration or the U.S. Energy Information Administration. It is a principle agency of the U.S. Federal Statistical System and part of the U.S. Department of Energy. This agency is responsible for collecting, analyzing, and disseminating energy information to support policymaking and public understanding of this field. The EAI website, [eia.gov](https://eia.gov), is a great resource for the U.S. energy sector. On the website, you can find recent news and updates related to the energy sector, daily reports, key KPIs, such as natural gas or crude oil, future prices, short and long-term energy [[Microsoft Outlook|outlook]] and forecast, and, of course, data, a lot of it with a great API access.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/eia-api?u=76281980&t=94)** That includes more than 1 million series related to different subfields of the energy sector, such as electricity, natural gas, crude oil, CO2 emissions, and others. To use the API, you need to have a valid API key. Let's open the browser at [eia.gov](https://eia.gov) and see the steps for setting an API key. We're now on the [eia.gov](https://eia.gov) website. Let's go to the bottom of the page, Look for the Features, and under the Features, look for the API logo. Click the API logo. Then click the REGISTER button on the right side. That should pop up a registration form, where you have to fill your details. If the form is not popping up, check if an ad blocker is installed on your browser. Disable it if needed for this website and refresh the browser. Once you complete the registration process and confirm your details, you should receive an email from the EIA Developer email address with the API key.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Python (Programming Language)|Python]] (1), [[Microsoft Outlook|Outlook]] (1)
> **Env Vars:** api (11), eia (5), eai (1), co2 (1), register (1)
> **URLs:** [eia.gov](https://eia.gov) (3)
> **Definitions:** is a  (2), stands for (1)
> **CLI Commands:** python (1), find (1)
> **UI Navigation:** open the (1), go to (1)
> **Analogies:** such as (2)
> **Prerequisites:** getting started (1), you need to have (1)

#### [Setting an environment variable](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=0)** - [Instructor] In this video, we will learn how to store the EIA_API_KEY as an environment variable on the Mac operating system. We will use the terminal to set the environment variable. There are a couple of ways to store environment variables in MacOS. We will use the .zshenv file, which as its name implies, it is designated file to store environment variables, which will be available to any application upon their launch. Let's now on the terminal open the .zshenv using Vim.
>
> **[0:45](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=45)** I'm in the root folder, and the .zshenv file should be located under the root folder. So let's do Vim .zshenv, and here we go. And as you can see, the file is empty. To add the environment variable, click I to switch from the view to insert mode. As you can see, I clicked I, and now this is indicated I'm in insert mode. Now, let's set a variable by calling the variable EIA_API_KEY.
>
> **[1:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=90)** I'm using all uppercase. You can choose either way. And let's assign the value. I copy/paste the value of my API key, and I will put it over here. Now, before we go ahead and save the file, let's add export command before to make sure that this will be available to any application. Export, type here export, space, and we are ready to save the file. To save the file, we first need to exit insert mode by clicking escape. Now, click column and type W to wright and Q quit. Note that by default, the terminal sourced the .zshenv file during the terminal launch. So any changes made afterward won't be automatically sourced. So for example, if you try to print the variable with the echo command, let's type echo, dollar sign, and EIA_API_KEY, it's empty. So either you can close the terminal or to source this file, and you will be able to see the file. So let's test it. Source .zshenv, and let's try again to print. And as you can see, now, the variable is available. And if you open a new terminal window and try to run again,
>
> **[3:05](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-an-environment-variable?u=76281980&t=185)** it should be there. Last but not least, the process in [[Linux]]-based OS should be similar. Be aware that for [[Windows]] OS, the process of saving environment variables might be a little bit different, but the way you're going to load it will be the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Windows]] (1)
> **Tools:** terminal (6), vim (2)
> **Env Vars:** eia_api_key (3), api (1)
> **Warnings:** note that (1), be aware (1)
> **CLI Commands:** make (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [The EIA API dashboard](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=0)** - [Instructor] In this video, we will review the eia API dashboard and learn how to use its functionality to search data, apply filters, and extract the query settings. This information, as you will see later on this course, will be used for when setting the get request via our [[Python (Programming Language)|Python]] to pull data from the API programmatically. Let's go now to the browser and log in again to [eia.gov](https://eia.gov). Under the features section, click the API icon and then click the browse the API, which will open the API dashboard. First things first, we will select the API route, which defines the type of energy category and the subcategory below. For example, let's select the electricity category. Then a new popup will show with the electricity subcategories. As we are interested in the daily and hourly data, we'll select the electricity power operation daily and hourly. In this case, there is a second subcategory and we can see the options over here. And we are interested in the hourly demand for sub region. Let's click it.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=93)** As you can see, it's loading all the information. Once we choose the route, we can start filtering and customizing the data sets that available in this route. You can customize the series start and end time with the frequency filter. For example, you can see the data is available since 2018. In addition, you can use the facet filter to select a specific balancing authority, which represent the region, or select a specific provider using the sub region filter. Let's select both of them and see the filter options. We choose the balancing authority, which is represented the parent. It's loading all the information on the backend, so it might take a second or two. And as you can see, there are eight balancing authority, and we can select the selection and we can add also the sub region and see the one below. Overall, there are 83 sub regions available under the parent category. So now let's say we want to narrow down and we want only the one that available for California independent system operator or CISO. Let's click it and click the save selection. Now you can see the number of sub region
>
> **[3:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/the-eia-api-dashboard?u=76281980&t=188)** narrowed down to four, the one under CISO. We can finalize our selection by selecting the Pacific Gas and Electric Sub region and save the selection. Last but not least, let's submit the request. The dashboard will retain some useful information about the query such as the API endpoint on the left side and the query header on the right side in a [[JSON]] format, which we will use later to pull data directly from the API. We will talk later on in this chapter about the structure of the get request and how can we use the header and the API URL to set the get request. Last but not least, you can see the selection data below. You can plot it by clicking any of the chart symbols under the chart column.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **Env Vars:** api (9), ciso (2), json (1), url (1)
> **UI Navigation:** select the (4), open the (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** python (1)
> **URLs:** [eia.gov](https://eia.gov) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [GET request structure](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=0)** - [Instructor] In this video we'll review the structure of the API GET request, which we'll use later to query data from the API. A GET request, as the name implies, is a request from the API to get some information. In our case to get data. Before diving into more details, let's review the API main characteristics. Throughout the course we'll use version 2 of the API or v2. Please note that version 2 comes with major changes compared to version 1 therefore version 2 does not support application built for version 1. Rhe API follows standard HTTP protocol and the API is also use RESTful standards and it is stateless application. This means that the API does not have a login application or memory. You will have to attach your API key with any GET request. The API supports only GET request, which enable us to pull data from the EIA data catalog. The API provides two type of [[Data Structures]], time series and [[Metadata]], which we will use in more details in the coming slides. The EIA API follows the standard structure of GET request, which start with the API endpoint or the internet address of the API.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=96)** In this case [https://api.eia.gov](https://api.eia.gov)/ followed by the API version v2 and the sector routes, for example, electricity and its sub routes. After setting the API path, we can add the query parameters or filters followed by the API key. The API is a stateless, therefore we will have to add the API key to every GET request. Now that we concatenate the API path and the query with a question sign and use the ampersand sign to concatenate the different parameters as well as the API key. Last but not least, the order of both the query parameters and the API key does not matter. You can switch between them and it will still work. Let's review a GET request we created in the previous video to pull the electricity data for the Pacific Gas and Electricity operator under the California Balancing Authority sub region and break down to its components. Let's go back to the API dashboard we used before and review the GET request that the dashboard provided us. As you can see, this is the exact one
>
> **[3:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=190)** that we're going to review now. And it start as I discussed before with the API endpoint, followed by the version of the a API v2. And then the main route electricity sector, followed by the sub route, in this case RTO, which represent the electricity power operation and the region-sub-ba-data, which represents the hourly demand by sub region. Note that we close the route statement with data to define to the API that we want to pull data as opposed to metadata. Next, we supply the query details that indicates the filtering parameters and the additional arguments such as the frequency argument that define the time zone of the series timestamp, data argument to flag the type of data metric, the facets argument that enable us to filter the data. In this case, as our series is under the California Balancing Authority, we set the parent parameter to CISO, which stands for California Independent System Operator and the sub parameter or sub region to PGAE. And the third argument to define
>
> **[4:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/get-request-structure?u=76281980&t=286)** how we want to sort the data. Last but not least, we use the length argument to define the rows limit per query in this case set to the maximum 5,000 rows. The offset argument is set to zero, which means that we will pull the first 5,000 rows that are available under those filters. After the query, we will add the API key to the request, which is of course not included in the GET request from the dashboard. As mentioned above, we use the question sings to concatenate the API path and the route with the query and separate the query parameters using the ampersand sign between. In the next video, we'll continue to use this query to pull data via the browser.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Data Structures]] (1)
> **Env Vars:** api (28), eia (2), http (1), rto (1), ciso (1)
> **API Endpoints:** get  (9)
> **Versions:** version 2 (3), version 1 (2)
> **Definitions:** is a  (2), means that (2), stands for (1)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Analogies:** for example (1), such as (1)
> **Warnings:** note that (2)

#### [Querying the data via the browser](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=0)** - [Instructor] In the previous videos, we reviewed the query structure and saw how can we leverage the API dashboard to create the query. In this video, we'll take the query we used in the previous videos and send the GET request via the browser. While this is different from how we will use it when we build the pipeline, it is a good way to review the data structure. Let's return to the dashboard and copy the query we created earlier to pull the hourly demand for electricity of the sub region PGAE. So we have here the full query and we're going to copy, paste it. I will copy it and I will open a new window. Notice that we get the API_KEY_MISSING and this is because we didn't provide it the API key. So let's fix it by adding the api_key argument to the GET request. So let's go ahead and edit the address over here. Go to the end and use the ampersand to add the new argument
>
> **[1:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=73)** and add api_key and pass the... I will pass over my API key. Please note that the API key that I'm using for this demonstration will be deleted after. Please make sure that you set and use your personal API key to send GET requests for the authentication. Now, after we edit the API key and we can click enter and see what's going on. You can see that the API returns the data in [[JSON]] format. I have a plugin in my browser for reformatting JSON files, so I get a nice output. By default, if you don't have any plugins to reformat JSON, this is how we're going to see it, which is less convenient. I will plug it back. And now let's review the output. The first few sections of the JSON output provide [[Metadata]] about the series we pulled, such as the total number of observation. In this case, for this series, there are 49,487 observation, and you also get this warning that just tell you that you can only pull 5,000 observation per request. That's why it's called incomplete return
>
> **[2:46](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=166)** because there are more observation available for this series. The data section provide the actual series data. Each objective represent a row or observation. It has the following seven fields. Period, which is the timestamp of the observation, each observation. In this case, for this observation, the timestamp is February 26th, 2024, 8 o'clock in the morning. And then you have the subba and the subba-name, which represent the subregion code and full description. Likewise, you have the parent and the parent-name, which represent the balancing authority code and the full description of the balancing authority. Last but not least, you have the value and the value-units, which represents the value of that observation. In this case, this is 9,779 megawatt hours.
>
> **[3:57](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-the-data-via-the-browser?u=76281980&t=237)** In the following videos, we will start to work with the API using R and [[Python (Programming Language)|Python]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Metadata]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (8), json (4), pgae (1), api_key_missing (1)
> **API Endpoints:** get  (3)
> **CLI Commands:** make (1), python (1)
> **Code Identifiers:** api_key (2)
> **Warnings:** note that (1), warning (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### [Querying data with R and Python](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=0)** - [Instructor] So far in the previous videos, we viewed the API functionality and saw how to set and send a get request via the browser. We'll dedicate the [[Representational State Transfer (REST)|rest]] of this chapter to learn and practice how to query data from the API using R and [[Python (Programming Language)|Python]]. To pull data with R we will use the EIA API library that provides a set of functions to query data from the current version of the API V2. The package is available on CRAN and we will use the current version 0.1.2. For Python, currently, there is no stable library that supports the V2 of the API. Therefore, to be consistent, I created a set of Python functions aligned with the ones available in the EIA API library, which we'll use to pull the data from the API with Python. Throughout this course, we will use the following three functions, which are available both in R and Python to pull data from the API. First, the EIA underscore [[Metadata]], which as its name implies returns metadata. In the coming example, we will see how to use the function output to set the get request parameters. Next is the EIA underscore get function, which enable us
>
> **[1:38](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/querying-data-with-r-and-python?u=76281980&t=98)** to send get request to the API. The function retains time series data. As we previously saw the API is a cup of 5,000 observation limitation per get request. This might be challenging when pulling hourly data, as we're going to do heavily in this course. This is where the failed and last function. The EIA underscore backfill function comes in handy, enabling us to pull observation per request beyond the API limitation. On the backend the function splits the request into a sequence of smaller requests and send them to the API using the AI get function, it then appends the return outputs into one table. Throughout the course, we will mainly use the EIA backfill and the EIA metadata functions. Moving forward, we'll have coding demos in both Python and R, you can choose to continue with either one of the languages and skip the other or watch both languages.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Metadata]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (12), eia (7), cran (1)
> **CLI Commands:** python (6)
> **Versions:** version 0 (1), 1.2 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Pulling metadata from API with R](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=0)** - [Instructor] Let's now open [[RStudio]] and demonstrate how to send a GET request to pull data from the API using the EIAapi library. To be consistent with the previous examples, we'll continue to focus on the hourly electricity demand of the Pacific Gas and Electricity balancing authority subregion or, in short, PGAE. Throughout this video and the next ones, I will use the following Quarto document to execute the code. The name of the file is R_eia_api.qmd, and you can find it under the course or repository under the chapter-1 folder. The screenshot below provides the series [[Metadata]] from the dashboard that we used in the previous examples. We'll use it later on. Before getting started, we will load the following four libraries, the EIAapi, which we're going to use to send, GET requests to the API. dplyr to process and manipulate data. lubridate to format or reformat date and time objects. And last, plotly, to visualize the data we're going to pull from the API. Now, we can start working with the API. Let's go ahead and pull the metadata of the PGAE series using the eia_metadata function. The eia_metadata function has the following two arguments:
>
> **[1:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-r?u=76281980&t=100)** API key and API path. The API key is used to authenticate our GET request on the API, and the API path represent the route in the API that we want to pull. In this case, the path that we want to go ahead and pull the metadata for is the electricity subregion data, which is what we used before. We are going to set those two variables and assign it to this function and pull the data. If you set your environment variable on your R end, you should be able to load it with the Sys.getenv function. Let's go ahead and run it. And now let's assign it over here and execute it. So over here we're going to assign the variable api_key, and, over here, the api_meta_path. Let's go ahead and execute it. As you can see, the GET request returns the route metadata from the API. This include the series description, the frequency information, the facets, and other information we're going to use. In the next section, we'll use the metadata output to send a GET request to pull data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (5), [[RStudio]] (1)
> **Env Vars:** api (11), pgae (2)
> **API Endpoints:** get  (5)
> **Code Identifiers:** eia_metadata (2), api_key (1), api_meta_path (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Sending a simple GET request with R](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=0)** - [Instructor] In the previous video, we saw how we can use the EIA [[Metadata]] function to pull metadata from the API. In this video, we will use the metadata we pull to set and send to the API, a simple get request to pull data with the EIA get function. To set a simple get request with the EIA get function, we will need to define the follow four arguments, API key, API path, frequency, facets. Let's go and set those arguments using the above variables. Similar to the get metadata function, the API key and the API path defines the API access key and route. We will use the same method as before to load the API key using the Sys.getenv function and load it from the env variable, EI_API_KEY. Likewise, we will use the same route as before and add the data at the end of the route as we wanted to inform the API that this is a data request and not a metadata. Next, is the frequency argument. Let's go ahead to the metadata output and see what are the options. You can have it over here on the right side, and you can see frequency. Under the frequency, there are two options.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=93)** First is hourly, which define the timestamp in UTC time zone. And second one is local hourly which set the time zone with the local time zone. Let's go ahead and set it as hourly as we want to be consistent across this course using UTC time zone, so I'm going to set it as hourly. Last but not least, is the facets argument which enable us to select a specific series within the API route. In this case, the facet argument is the following two options, and we can go ahead again to the output of the metadata. And you can see there are two options, subba, which stand for Subregion, and parents, which stand for balancing authority. Let's go back to a above screenshot to pull the facet setting for the PGAE series. As you can see, the parent is defined here as CISO and the subba is defined as PGAE. We use the list object to set the facet parameters for the EIA get function. So let's go ahead and set the parent as CISO and the subba as PGAE. Let's execute it and run the function. The output indicates that the function pull data.
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=187)** Let's explore it with the str function to review the return object structure. As you can see, it retained a data frame with 5,000 observation which is the API limit. This include the following seven variables, period, which define the observation, timestamp, it's set as character. We will need to reformat it later using the Lubridate package into a time object. Subba and subba-name define the series subregion, code, and name. Similarly, parent and parent-name define the series parent, balancing authority, code, and name. Last but not least, are the value and value-unit which define the serious values and the corresponding units which in this case, it's megawatthours. Let's now reformat the series timestamp using deployer. We will use mutate to create a new variable call index and use the year, month, day, hour function or in short, ymd_h, from the Lubridate package just to reformat the period variables into a POSIX object.
>
> **[4:32](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-r?u=76281980&t=272)** Be sure to set the time zone as UTC. We're going to reformat the structure, having the index first and then the [[Representational State Transfer (REST)|rest]] of the variables using the select functions from deployer. And last but not least, we're going to arrange the data by the index. Let's go ahead and look at the output. Maybe it will be easier to look from here, head df1. And as you can see, we got the object. We have now a new variable call index with timestamp, and the rest of the variables are also there. In the next video, we'll explore the series and review some of the limitations of the EIA get function for pulling hourly data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (7), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** api (11), eia (5), utc (3), pgae (3), ciso (2)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Definitions:** is a  (1), defined as (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [API limitations with R](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=0)** - [Instructor] In the previous video, we saw how we can set get requests to pull data from the API using the AI get function. In this video we will review the output and explore some of the limitation of the get request. Let's go back to the data form we pulled during the previous lessons. DF one, recall the data frame has 5,000 rows or observations and seven variables. We added also, the index variable is the eight variable when we reformatted the period variable into a post six object or time object. Let's plot the data using the plotly function from the Plotly library. So let's feed the the, let's set the functions we want to plot DF one, we set X as index and Y as value. And since we want to have a line chart, let's set the type as cutter and the mode to lines. Let's go ahead and run it. As you can notice in the time series plot, there are some weird lines. Do not fit the serious pattern. We can go ahead and [[Zoom]] and explore those points. So for example, over here you can see those lines. You can also see it over here and some other places. So let's zoom in over here.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=96)** You can see that some of the observation are missing. So for example, between November 4th, 2018 and September 13th, there are no points. Similarly over here from November 5th, 2018 and till January 12th. There are no any observations. If you keep exploring more dense area, you can see the similar patterns. So for example, if we just open it over here and you can see there are some buckets that are missing values. The reason that we got those missing values is related to the API 5,000 observation limit per [[Git]] request. If we were trying to pull five years of hourly time series data, this is more than 40,000 observation and we cannot pull it in a single request. One way we can address it is by setting a time range. By bounding the get request by specific time, which is aligned with the 5,000 observation limitation, we can use the start and end arguments and define this range. Let's go ahead and do it. On the next example, we are going to use the exact same parameters, but this time we are going to pull data between January 1st, 2024 and February 24th, 2024. So I'm going to set those variables over here
>
> **[3:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-r?u=76281980&t=190)** and I'm going to add to the function with the same arguments, just adding those two variable. Let's go ahead and run the function and we go into reformat again, as we did before. We're going to set the index as a time object and arrange the data by the index. So you can see that we got, again, a time series in the same format. We can go ahead and check the number of observation and roll DF two. And now we got the 1,297 observation for this period. And we can go ahead and plot the data. And as you can see now, the series looks fine. There's no any issues that are popping up when you eyeball the series. We'll dive into more details about monitoring the data output and identify missing values and other problems in the next chapters. While you can use the I get function to pull a large dataset looping manually over the timestamp of the series, it could be very tedious to run it manually. This is where DA backfill function comes into place, enabling us to pull large datasets beyond the API limitation. In the next video, we'll re pull the series this time using the A backfill function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (2), [[Git]] (1)
> **Cross-References:** in the next (2), previous video (1), go back to (1)
> **Env Vars:** api (3)
> **Analogies:** for example (3)
> **CLI Commands:** git (1)
> **Speakers:** - [instructor] (1)

#### [Handling a large data request with R](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=0)** - [Instructor] In the previous video, we saw the limitation of the EIA get function to pull a large data set due to the API role limitation per get request. In this video, we will see how to handle a large data request from the API using the backfill function. The EIA backfill function splits a large request into a sequence of small requests, send those requests to the API using the EIA get function, and appends the output into a single table. The function uses the same parameters as the EIA get function with the distinction of the start and end arguments that use POSIX, CT or LT inputs. Let's set the get request to pull data from July 1st, 2018 to February 24th, 2024. Be sure to use the POSIX function to set those inputs, so let's start by the start argument. We want to start by 2018, July, 07, and first, and we want to pull it. We will set it since eight o'clock in the morning 'cause this is the first data point in this series and the minutes is zero and the second, so, set to zero. Okay? And also, make sure to set the time zone to UTC. Similarly, we will set the endpoint to February 24, 2024.
>
> **[1:40](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=100)** So we want the year 2024, the month, February, date, 24, and let's set it to zero.
>
> **[1:54](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=114)** Okay. The next argument is the offset. The offset argument enable us to control the size of the sequential request the function sends to the API. For example, if you're pulling a series with 10,000 observations and we set the offset to 1,000, the function will generate 10 sequential request each of a size of 1,000 observations. While you can set it up to 5,000 observations, it is recommended not to set the offset beyond 2,500 observations. Let's set it to 2,250. Two thousand two hundred fifty, and now we can execute the code. So let's go ahead and send the get request to the API. Notice that since we are having a large request, this is going to close to 50,000 observation. It might take time and you can see that the execution on the right side and this is the output. Let's just remove it and now we can explore the output. Again, we are going to use the head and the str function to see the structure of the data. So let's go ahead and maybe we can see the head of the function over here. And as you can see that we're getting
>
> **[3:29](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-r?u=76281980&t=209)** almost the exact same output as before with the EIA get function with the distinction of the index. This time, the index is set as time because it's a time object, and it's the structure can see it's already set as a POSIXct object. We can now go ahead and plot the output and see the results. Oh, one more thing. As you can see over here, there was close to 50,000 observation, so we were able to pull more than 5,000 observation. Let's go ahead and plot the series using the same method as before. And now as you can see, the output look pretty much normal. You might observe here, and there are some kind of like a missing values. And those missing values are data points that are not available on the API as well.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), eia (5), posix (2), utc (1)
> **Analogies:** for example (1), kind of like (1)
> **Best Practices:** make sure to (1), recommended (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Pulling metadata from API with Python](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=0)** - [Instructor] Let's open VSCode and demonstrate how to send a get request to pull data from the API. Throughout this video and in the next ones, we will use the following Jupyter Notebook to execute the code. In addition, we'll use the EIA_API script with a set of functions to work with the API. Both files are under the course repository under chapter one folder. Before getting started, please make sure you select the virtual environment you are using for this course. If you are using the course image, you should select the LinkedIn_Learning virtual environment with the requirements for this notebook. To be consistent with the previous examples, we will continue to focus on the hourly electricity demand of the Pacific Gas and Electricity Balancing Authority subregion, or, in short, PGAE. The screenshot here provide the series [[Metadata]] from the dashboard that we used in the previous examples. Let's start by importing the required libraries and functions. As mentioned earlier, the EIA_API is a local script with a set of [[Python (Programming Language)|Python]] functions that we will use throughout this course to query data from the EIA_API. We will import the EIA_API and set it as API. Let's go ahead and execute it.
>
> **[1:39](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=99)** Let's continue and load the [[Representational State Transfer (REST)|rest]] of the Python libraries. We are going to use the following three libraries, OS to import the API key from the environment variable, Datatime to reformat date and time objects, and Plotly to visualize the data that we're going to pull from the API. Let's go ahead and also execute this core chunk. Now we can start working with the API. Let's start by pulling the metadata of the PGAE series using the EIA metadata function. As you can see, there are two arguments for this function, and it's straightforward. The API key, which we need to provide to get access to the API, and the API path, which represents the route that we want to pull metadata from. We will use the getenv functions from the OS library to pull the environment variables with our access key, EIA_API_KEY. If you didn't set this variable, you can also pass your API key over here, but it's not recommended. Next, we are going to set this variable, api_meta_path, to set the route that we want to pull the metadata. In this case, we want to pull subregion electricity data, and this is the same route as we used before.
>
> **[3:13](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/pulling-metadata-from-api-with-python?u=76281980&t=193)** Let's go ahead and execute this and assign it to the function. You can see the GET request returns the metadata from the API, and we can go ahead and print it. This includes the series description, the frequency of the series, the starting and ending point over here, and other information. In the next video, we'll continue to work with this notebook and use the metadata output to set the GET request.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (7), [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (11), eia_api (4), pgae (2), eia (1), eia_api_key (1)
> **CLI Commands:** python (2), make (1)
> **API Endpoints:** get  (2)
> **Cross-References:** in the next (2)
> **UI Navigation:** select the (2)
> **Code Identifiers:** api_meta_path (1)
> **Tools:** jupyter (1)

#### [Sending a simple GET request with Python](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=0)** - [Instructor] In the previous video, we leveraged the AI [[Metadata]] function to pull metadata from the API for the PG AE series. In this video, we'll use the metadata we pulled to set and send to the API a simple get request to pull data with the EIA get function. To set a simple get request with the EIA get function, we'll need to define the following four arguments, API key, API path, frequency, and facets. Let's go and set those arguments using the above variables similar to the get metadata function, the API key, and the API path, define the API access key and route. We'll use the same method as before to load the API key using the get N function. Likewise, we will use the same route as before and add data at the end of the route to indicate that this is a data request as opposed to metadata request. So I'm going to add your data to ensure that the API will return us data. Next, is the frequency argument, which defines the series timestamp format. Let's go to the metadata above and see what are the options. Under the frequency argument, you can see that there are two options. First is hourly, which return the format in UTC time zone.
>
> **[1:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=95)** And second is local hourly which retain the timestamp in a local time zone. To be consistent across the course, we will use UTC, and let's go ahead and set the frequency variable as hourly. Last is the facet argument which enable us to select or filter for specific series within the API route. In this case, the facet argument has the following two options, and we can pull it from the metadata over here. You have subba which stands for Subregion, and we have parent which stands for balancing authority. Let's go back to a above screenshot to pull the facet setting for the PGAE series. As you can see, the parent here set as CISO and the subba or the Subregion set as PGAE. Let's go ahead and update the list with this information. So over here, we are going to set the parent as CISO and the subba as PGAE.
>
> **[2:50](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=170)** After we set the variables, we can now send the request to the API. First, let's execute it. And now, we can go ahead and execute the get request. The returned object has three elements, URL, which defines the full get request URL that used for this query without the API key. So if you want to test this query from your browser, you can go ahead and pass it to your browser and add the API key. The second one is the parameters that was used for this get request. And last is the data, which is the data that the API return. Let's review the data. Aligned with the API [[JSON]] data format that we saw earlier, the return data frame as the following seven variables, period which represent the timestamp of the series or the index, subba and subba name, which represent the Subregion name and code. Likewise, parent and parent name which represent the parent code and the parent name. And last but not least, the value and the value units which is the values of the series and the corresponding units, which in this case, megawatt hours. You can notice that the data frame has 5,000 observation aligned with the API limitation. Last but not least, we can check the data frame columns attributes
>
> **[4:23](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/sending-a-simple-get-request-with-python?u=76281980&t=263)** using the dtypes function. And as you can see that the period is set as daytime, the [[Representational State Transfer (REST)|rest]] are characters and the value is integer. In the next video, we will explore the series and review some of the limitations of the EIA get function for pulling hourly data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (7), [[JSON]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (16), eia (3), pgae (3), utc (2), ciso (2)
> **Cross-References:** previous video (1), go back to (1), in the next (1)
> **Definitions:** stands for (2), is a  (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [API limitations with Python](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=0)** - [Instructor] In the previous video, we saw how we can set a get request to pull data from the API using the IGET function. In this video we'll review the output and explore some of the limitation of the get request. Let's go back to the data frame we pulled during the previous video DF1. Recall the data frame has 5,000 rows or observations and seven variables. Let's use Plotly to plot the data. So we're going to use the plot line function as it says time series. Let's start with the input object, which TF1.data and our X axis is our timestamp, which is period, and our numeric value is the value column. Let's go ahead and run it. And as you can notice in this time sales plot, there are some weird lines that do not fit the serious pattern. We can go ahead and [[Zoom]] in and and explore it. You can see here that some observations are missings and therefore you get those straight lines in between. So for example, between December 14th, 2018 and Jan 13, 2019, there are no any observation. If you keep exploring further in a more dense area of this plot, you can see that this pattern return or exist.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=97)** So as you can see over here, there are all of the straight line represent missing values in between. The reason that we get those missing values is related to the API 5,000 observations limit per get request. If we are trying to pull the five years of hourly time series data, that is more than 40,000 observations and we cannot pull it with a single request. One way to address this issue is to bound the get request with a time range using the start and end arguments. This could be useful if you want to pull a small period of the series. Let's go ahead and modify the get request we used previously and add the start and end argument to limit the request for observations between January 1st and February 24 in 2024. So we're going to use the date time to set the start and end as a time object. So let's go, the start should be 2024 and it's January 1st and the first hour. And for the end time, we want it February 24. So it's going to be 2024 and it's going to be two for February, and the day is 24. And we'll select the last hour 23. And as you can notice, this is the exact same request as before. We just had the start and end argument over here. Let's go ahead and execute the request and we can go ahead
>
> **[3:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/api-limitations-with-python?u=76281980&t=191)** and report the request. Now we can see that the data looks fairly normal. We'll dive into more details about monitoring the data output and identify missing values in the next chapters. While you can use the IGET function to pull a large dataset looping manually over the timestamp of the series, it could be very tedious to run it manually. This is where the AI backfill functions comes into place, enabling us to pull large dataset beyond the API limitation. In the next video, we'll repo the series this time using the AI backfill function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **Env Vars:** api (3), iget (2), df1 (1), tf1 (1)
> **Cross-References:** previous video (2), in the next (2), go back to (1)
> **UI Navigation:** select the (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Handling a large data request with Python](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=0)** - [Instructor] In the previous video, we saw the limitation of the eia_get function to pull large dataset due to the API row limitation that got request. In this video, we'll see how to handle a large data request from the API using the eia_backfill function. The eia_backfill function splits a large data request into a sequence of small request. Send those request to the API using the eia_get function on the backend. It then appends the outputs into a single table. The function uses the same arguments as the eia_get function. Let's re-pull the series this time using the backfill function. We'll set the start argument to July 1st, 2018, and the end argument to February 24th, 2024. So we're going to again use the datetime to reformat the object into time format. So the start is going to be 2018 and it's going to be July 1st. And the first data point is at eight o'clock in the morning. And for the end, we are going to set it at 2024 and send it as before, February 24. And let's set it to the end of the day. Next is the offset argument. The offset argument enable us to control the size of the sequential request the function sends to the API.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/handling-a-large-data-request-with-python?u=76281980&t=97)** For example, if we are pulling a series with 10,000 observations and we set the offset to 1,000, the function will generate 10 sequential requests, each of a size of 1,000 observations. While you can set it up to 5,000 observations, it is recommended not to set the offset beyond 2,500 observations. Let's set it to 2,250. So we're going to set the variable overview offset to 2,250. Now we can resend the request. We this time name it as df3. It might take a few seconds until it completes the request, as we are pulling close to 50,000 observations. And it's done, it took about close to 20 seconds. Let's now check the data structure. And as you can see, it follows the same structure as the eia_get function. The table is close to 50,000 observation. Now we can re-plot the data again using the same Plotly function. And you can see that the series now looks much better than before. You can still notice that some observation that are missing, but those are not available on the API as well.

> [!info]- Semantic Content
>
> **Code Identifiers:** eia_get (4), eia_backfill (2)
> **Env Vars:** api (5)
> **Cross-References:** previous video (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Query the API](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/challenge-query-the-api?u=76281980&t=0)** - [Instructor] We will conclude this chapter with practicing what we learned so far, using the EIA dashboard to extract [[Metadata]] and querying the data from the API using R or [[Python (Programming Language)|Python]]. This time we're going to pull data of the San Diego Gas and Electricity balancing authority subregion. Start by going to the EIA dashboard to extract the metadata of the San Diego Gas and Electricity balancing authority subregion. This subregion is under the California Independent System Operator parent. Then with R or Python, set a GET request to pull observation between January 1st and January 31st, 2024. Last but not least, use the eia_backfill function to pull the data from January 1st, 2020 to February 1st, 2024.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (2), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** eia (2), api (1)
> **CLI Commands:** python (2)
> **Code Identifiers:** eia_backfill (1)
> **API Endpoints:** get  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Query the API with R](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=0)** - [Instructor] The solution for the Chapter 1 challenge is you can find it in this Quarto doc, R_challenge_solutions. This file is under chapter-1 folder in the course repository. Let's get started by loading the required libraries. As before, we're going to load EIAapi to query data from the API, dplyr to process data, lubridate to reformat date and time objects, and we're going to use plotly to visualize the data. The first question, we were asked to extract the [[Metadata]] of the San Diego Gas and Electric balancing authority from the EIA dashboard. So let's go to the [eia.gov](https://eia.gov) website. I'm on the main page. If you scroll down under the Features, and click the API icon. And next, click the Browse the API, this will lead you to the API Dashboard. Now, the first thing we want to do is select the route. The main category here is Electricity. Let's go ahead and select it. And the subcategory is Electric Power Operation (Daily and Hourly). And since we want the region level, so we're going to select Hourly Demand by Subregion. The next step is to select the facet. We want to narrow down out of the series that are available to get the metadata
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=94)** of the San Diego Balancing Authority. So let's click the facet. There are two option here. Either you can go directly to the Subregion and just filter for the specific one. You can see there are 83, overall 83 subregions. Or you first select the, well, let's remove it first. You can first select the Balancing Authority. We're going to select California Independent System Operator and then go ahead and select the Subregion. And as you can see, it's narrowed down to the four subregions under the parent balancing authority. So now we can go ahead and click, select the San Diego Gas and Electric. Don't forget to save the selection, and submit the request. And as you can see, the dashboard retains the API metadata. What we can use from here, first is the API route. You can see that here is the API route that we are going to use, electricity/rto/region-sub-ba-data. We'll have to add data after as we're expecting to pull data and not metadata. Next is the header. You can see here that the frequency is hourly and this is what we're going to use as before. And the facet that require for pulling this series is we need the parent to be CISO
>
> **[3:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=189)** and set the subba or the subregion to SDGE. So let's go back to our studio and set the first get request. The second question, we are required to pull the series using the metadata we extract in the first question and bound it between January 1st and January 31st, 2024. Let's go ahead and update the parameters over here. So we're going to use the same method to load the API. We're going to use the same API route as before. And the frequency we're going to set is hourly. And for the facet we're going to set the parent as CISO and the subba should be San Diego Gas Electricity, SDGE. Let's confirm it over here. SDGE. We're going to set also the start and end arguments. Recall that the eia_get function is using string using the same format as the API, which is year, month, day and hour separate by T. So let's go ahead and set January 1st as the start point, and the endpoint should be January 31st. We're going ahead and execute and assign those variables. And then let's call the function and assign it into df1.
>
> **[4:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=284)** Remember, the function return the period or the timestamp variable in a character format. So we're going to use lubridate year, month, day, hour or ymd_h function to reformat the period or the timestamp and assign it to index. Recall that we want to set the time zone as UTC. We're then going to arrange the index to be the first column and sort the data by the index. Let's go ahead and run it. And as you can see, we got the output the same as before, but this time we can see that the subba or in the subba name is San Diego. Last but not least, we can visualize the result with plotly. And as you can see, this look as expected. And we got the data starting from January 1st all the way until the end of January. So now we can move to the next question. In the third question, we were asked to use the eia_backfill function to pull the data between January 1st, 2020 and February 1st, 2024. Remember that while the eia_backfill function and the eia_get function use the same arguments, the main difference between the two is that the start and end inputs or class is different. The eia_backfill function use POSIX object to set the start and end. We're going to use the as.POSIXct function to set the start and end according to the time range
>
> **[6:20](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-r?u=76281980&t=380)** between 2020 and 2024, February. And we're going to define the time zone as UTC. In addition, we're going to set the offset to 2000 observation their request during the sequential request that the function running on the backend. Let's go ahead and execute the function. It might take a few seconds to run as we are pulling couple of thousands of observations. Okay, we got the output, we can clear it 'cause it's not really useful. Let's look at the structure of the dataframe that we pulled df2. And you can see we pulled 35,000 observation and we got seven variables. Another difference between the output of the eia_backfill and the eia_get is that it is within the timestamp as set as time, and it's already a reformat with POSIX object. Let's go ahead and plot the output using the plotly function. And we got the series as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (5)
> **Env Vars:** api (10), sdge (3), ciso (2), utc (2), posix (2)
> **UI Navigation:** select the (6), go to (1), scroll down (1)
> **Code Identifiers:** eia_backfill (4), eia_get (3)
> **CLI Commands:** find (1)
> **URLs:** [eia.gov](https://eia.gov) (1)
> **Cross-References:** go back to (1)
> **Best Practices:** don't forget (1)

#### [Solution: Query the API with Python](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=0)** - [Instructor] We are going to use this Jupyter notebook for the solution of chapter one challenge. This notebook Py_challenge_solutions can be found under the course repository chapter one folder. In addition, we're going to use the AI_API [[Python (Programming Language)|Python]] script as before. This Python script provides a set of functions that will enable us to query data from the API. Let's get started by loading those libraries, and we're going to use the same libraries as before, EIA_API and set it as API. The OS library we're going to use to load environment variables. The date/time we'll use to reformat date and time objects. And last is Plotly, which we're going to use to visualize the data. Let's go to the first question. We were asked to extract from the EIA dashboard, the [[Metadata]] of the San Diego Gas and Electric Balancing Authority sub region. Let's go to the [eia.gov](https://eia.gov) website and navigate to the dashboard. So on the main page of [eia.gov](https://eia.gov), scroll down to the feature section, then click on the API icon, then go to the browse the API and click it, which will lead you to the API dashboard. Let's start by setting the route.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=94)** As the main category is electricity, let's go ahead and select electricity. And next we want to select the subcategory. We're interested in hourly data, so let's go ahead and select electric power operations daily and hourly. And the last subcategory is the sub region, hourly demand by sub region. Once it's finished to load the information behind, we can start to filter by using the facet. The facet enables us to select a specific series under this route. Let's go ahead and expand it. There are two ways we can go about filtering. Either we can go to the sub region. As you can see there are 83 overall sub regions, and filter for the one that we are interested. In this case, we are interested in San Diego. So let's search San Diego, and you see it pop up over here and select it. Then select self-selection and submit. You can see in the output that the facet here is just specifying the subba, and in this case this is SDGE, which stands for San Diego Gas and Electric. This is sufficient, but let's see the other method you can use to filter. Let's remove the facet and start with the balancing authority. Given that San Diego is under California Independent System Operator, let's select CISO and save the selection.
>
> **[3:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=190)** Next, let's select the sub region. And as you can see, it's narrowed it down to the four balancing authorities sub regions under the parent. And here we can go ahead and select the San Diego. Don't forget to save selection. And let's resubmit. As you can see, the API returned the metadata and the query information. On the left side on the URL, you can see the gate request. We are interested here in the route for the API path which indicate which route we want to select in the API. In this case, this is the electricity route, so it's electricity, RTO, region sub, BA data. And at the end we need to add data to indicate to the API that we are interested in data and not metadata. On there we can extract some information such as the frequency. We are going to use again hourly. For the facet we are going to use CISO as the parent. And for the subba we're going to use SDGE. Let's go back to VS Code and set the get request. So we're going to define the following six arguments, assign them to the variables, and then use those variables to assign them to the functions arguments. Like before, we are going to use the get end function from the OS library to load the API key. If you didn't set environment variable, you can set it here directly and load it for here.
>
> **[4:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=283)** Next we're going to set the API path. As we saw before, this is the path. Don't forget to add data at the end. The frequency, we are going to select as hourly. If you remember from the previous videos, hourly stands for setting the timestamp in a UTC time zone. And then the facets argument. We are going to set this list where the parents is set as CISO, and the subregional subba set is SDGE. We then want to bound the request between January 1st and January 31st in 2024. So we're going to use a start and end arguments to set the time. We will use the date/time function to convert the input into a time object. Once it's set, we can run it and send the request. We can go ahead and check the output, the F1.data. And as you can see where the data frame is expected, this time the subba is set to SDGE or San Diego Gas and Electric. You can also see that the series start data point is January 1st, 1:00 AM and the endpoint is January 31st at 11 in the after night. Next we want to visualize the data. Let's use the plotly function again to visualize the data. And as you can see, the series looks great as expected. Let's go to the next question.
>
> **[6:15](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/solution-query-the-api-with-python?u=76281980&t=375)** In question three, we were asked to use the backfill function to pull data between January 1st, 2020 and February 1st, 2024. Given this is a large pool with more than 5,000 observation, we're going to use the backfill function. We need to set the start and end according to this time range. So we're going to set the start again with the date/time to January 1st, 2020, and the end time to February 1st, 2024. We're then going to set the offset to 2000 observation the request, and then assign all to the backfill function. Let's go ahead and execute the code. This might take a few seconds as we are now going to pull about 35,000 observations, and it took 12 seconds to pull the data. Let's go ahead and check the output. And as you can see, we received the same data frame with the same structure where now the starting point is January 1st, 2020, and the endpoint is February 1st, '23 or 11 at night. And as you can see, this data frame is more than 35,000 observations. Last but not least, let's plot the data. And as you can see, the series aligned with our expectation. There doesn't seem any missing values or anything suspicious.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (3), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** api (11), sdge (4), ciso (3), ai_api (1), eia_api (1)
> **UI Navigation:** go to (5), select the (3), navigate to (1), scroll down (1), click on (1)
> **Definitions:** stands for (2), is a  (1)
> **CLI Commands:** python (2)
> **URLs:** [eia.gov](https://eia.gov) (2)
> **Cross-References:** go back to (1), as we saw (1)
> **Tools:** jupyter (1), vs code (1)


### 2. Data Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Data pipeline scope and requirements](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=0)** - [Instructor] In this video, we will define the Data Scope and Data Pipeline Requirements. Before getting started with the scope and requirements, let's first define what is the data pipeline. A simple definition of a data pipeline is the process of moving data from one data source to another. In most cases, it includes intermediate steps such as [[Data Processing]], cleaning, [[Data Transformation]], aggregation, and creating new fields. The process also defined as ETL, which stands for extract, transform, and Load. Typically, the common terms of the different stages of the data in this process are; Raw for the data source, Calculation for the intermediate steps and Normalized for the final output. Moving forward, we'll refer to our raw data, the AI API as the source of raw data and the process data as normalized. In the previous chapter, we saw the process of pulling data from the API to our local machine where the API in this case is our raw data source, which comes in a [[JSON]] format. And our final output or normalized table was the DataFrame object. The term data pipeline by itself does not define the level of automation of this process.
>
> **[1:37](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=97)** It could derive from a completely manual process such as coping files manually, or running a script locally on your machine to process data, to a fully automated process as we will build in this course. With that, let's go ahead and define our data scope for this course. First, we want to pull hourly demand for electricity by subregion, where the Geoscope is the California Independent System Operator subregions, which include the following four; Pacific Gas and Electric, San Diego Gas and Electric, Southern California Edison and Valley Electric Association. We want to refresh the data daily. After we defined the data scope, we can go ahead and define the data pipeline requirements. First, we want it to be fully automated, meaning once we deploy it in production, it should be run automatically without the intervening of the user. We want the data pipeline to have high level of customization, so think about the scenario that you want to add a new subregion, and you don't want to manually go and out code the changes. We want to add in place [[Data Quality]] checks and unit test to ensure the quality of the data. And last but not least, we want to monitor the health of the pipeline. Last but not least, we'll create and deploy the pipeline
>
> **[3:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-scope-and-requirements?u=76281980&t=191)** with both R and [[Python (Programming Language)|Python]]. The supporting files of the R [[Data Pipelines]] are under the R folder in the course repository. Similarly, the Python data pipeline supporting files are under the Python folder. In the next video, we'll review the data pipeline architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Data Processing]] (1), [[Data Transformation]] (1), [[JSON]] (1), [[Data Quality]] (1)
> **Env Vars:** api (3), etl (1), json (1)
> **CLI Commands:** python (3)
> **Cross-References:** previous chapter (1), in the next (1)
> **Definitions:** defined as (1), stands for (1)
> **Analogies:** such as (2)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Data pipeline architecture](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=0)** - [Host] In the previous video, we reviewed the data scope and pipeline requirements. In this video, we'll review the data pipeline architecture to automate the California sub regions demand for electricity data. We'll use the following deployment. Let's now break it down into the its different components, starting with the EIA API, our source data or raw data. In the previous chapter, we reviewed how we can set and send a gate request to pull [[Metadata]] and data from the API using the EI metadata and the EI backfill functions. The pipeline supporting functions will leverage those functions to extract data from the API. The second component is the data pipeline, whose main functionality is to check if new data is available in the API and refresh the data when applicable. In addition, this function also collect metadata on each steps enabling us to monitor the health of the data pipeline. The process is deployed on [[GitHub]] actions and we'll dive into more details about the deployment in the next chapter. In the local environment, we have the backfill function. The goal of this function is to restart the pipeline whenever needed and backfill all this local data. Typically, it is a good practice to separate the backfill process from the refresh process
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-architecture?u=76281980&t=94)** as the initial data pool of this local data might be heavy and require more computing resources then available on the scheduler. In this case, GitHub actions. Last but not least is the data visualization component will deploy a simple dashboard on GitHub pages that will enable us to view the data and track the logs. Once the data pipeline finishes updating the data with the new data points, GitHub actions will update the dashboard with the new data. We'll focus on this component in chapter four of this course. Throughout the [[Representational State Transfer (REST)|rest]] of this chapter, we'll focus on the data refresh and backfill functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Metadata]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** api (4), eia (1)
> **Tools:** github (4)
> **Cross-References:** previous video (1), previous chapter (1), next chapter (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [host] (1)

#### [Data refresh process](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=0)** - [Instructor] In this video, we will focus on the data refresh process. Recall, the goal of the data refresh process is to keep our normalized table aligned with the most recent data that is available in the source data. In this process, the function's main logic when triggered is to check if new data is available on the data source, and if so, to pull the incremental data, process it, and append it to the normalized data. Note that in some cases, you may want to pull data beyond the incremental data. For example, let's assume that you are working with sales data and restatements may have occurred in the data during the last seven days due to the company's product return policy. Therefore, in this case, each time the pipeline refreshes the data, you may want to repull the last seven days, in addition to the incremental data. This adds some complexity to the process, as you will have to drop the overlapping observation when appending the data back to the normalized table. You want to ensure that the append process won't create duplication or data gaps. In our case, we will set the refresh function to pull only new data points. Let's now focus on the logic of the data refresh process that we will deploy on [[GitHub]] Actions. The refresh process is set inside the Quarto dock. One of the main reasons that I love to use Quarto docks
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=96)** to run my code on GitHub Actions is that it is a great way to communicate the refresh process when running code on a remote server. It generates an [[HTML]] report that you can customize according to your needs. We'll dive into more details about the functionality of this process later in this chapter. The refresh process leverages a set of helper functions that handle the low capturing [[Data Quality]] test, appending the data back when applicable to the normalized table. We'll review those functions in the next video. Once the process is triggered, it loads the series information from the series.[[JSON]] file. This file defines the [[Metadata]] of the series we want to pull from the API and their corresponding route. This will enable us to seamlessly onboard new subregions or remove existing ones without the need to hard code the changes. After the function pull the series information, it starts to build the data profile for each series in this list. First, it pull the metadata to identify the last data point available for each series in the normalized table, and based on this, calculate the GET request starting point. Then by using the eia_metadata function, we send a GET request to pull the metadata of each series and check if new data is available on the API.
>
> **[3:11](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-process?u=76281980&t=191)** By comparing between the timestamp of the most recent data point available on the API and the one available in the normalized table, the function makes the call is to send a GET request to pull the incremental data. If new data points are available, the function will extract them from the API and transform them into a DataFrame using the eia_backfill function and append them back to the normalized table. In any case, if new data is available or not, the function will create a log and update the metadata. Throughout the course, we will simulate a real-life data automation process using GitHub Actions with a caveat that for learning purposes, we will save back the files to the repository as opposed to database. The goal here is to practice the deployment of a pipeline and learn how to work with GitHub Actions. Generally, you should avoid storing large files on GitHub repository. Please note that during the data refresh process, we will use a set of helper functions to support the refresh process, which we'll review in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Metadata]] (4), [[HTML]] (1), [[Data Quality]] (1), [[JSON]] (1)
> **Env Vars:** api (4), html (1)
> **Tools:** github (5)
> **API Endpoints:** get  (3)
> **Cross-References:** in the next (2), later in (1)
> **Warnings:** note that (2), caveat (1)
> **Code Identifiers:** eia_metadata (1), eia_backfill (1)
> **File Paths:** series.json (1)

#### [ETL supporting functions](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=0)** - [Instructor] In the previous video, we reviewed the refresh process. In this video, we will review the ETL supporting functions. When building a process, I typically prefer to break it down into small minute processes when applicable, and then functionalize it. This makes the process more smoother and simpler to maintain. We'll use this approach for our ETL process. We can break down the refresh process into the following three mini processes. First is the [[Data Processing]]. For example, pulling the data from the API and transforming it from [[JSON]] objects into a DataFrame object. Next is the [[Metadata]], creating and updating the metadata tables and logs. And third and last is handling the append process of new data to the normalized table. To support those mini processes, I created the following five functions. First is the create_metadata. As the name implies, the function creates the metadata table for giving data input. It then ran some unit tests to evaluate if the data refresh was successful, and if we can append the new data to the normalized table. The load_metadata function is an helper function that reads the series details and merge it with the metadata logs. Third is the get_metadata function. This function checks
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/etl-supporting-functions?u=76281980&t=93)** if there are any new incremental data points or difference between the data in the source and normalized table by comparing the normalized log and the corresponding metadata available in the API. The append_metadata, as the name implies, appends new metadata that is created during the refresh process with the metadata table. And last but not least is the append_data, which append new data points to the normalized table. In addition, we will use the eia_metadata and the eia_backfill functions that we saw in the previous chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (7), [[Data Processing]] (1), [[JSON]] (1)
> **Code Identifiers:** create_metadata (1), load_metadata (1), get_metadata (1), append_metadata (1), append_data (1)
> **Env Vars:** etl (2), api (2), json (1)
> **Cross-References:** previous video (1), previous chapter (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Data backfilling](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=0)** - [Instructor] So far we reviewed the different component of the data pipeline. In this video, we'll review the data backfilling process. Let's first define what data backfill is and why we need it. Data backfill is typically defined as the initial loading of the store call data of the dataset, which in our case is the load of all these local data of the four sub-region series. As we have closer to six years of hourly data, this is a pool of about 50,000 observations per series, or an overall pool of 200,000 data points. For comparison, the regular refresh process loads about 24 observation per call if the refresh process run daily. This mean that the magnitude of the data load of the backfill is more than 2,000 times bigger than the regular refresh process. And this is also why you typically would prefer to run the backfill process locally and not on the server. The backfill process follow a fairly similar steps as the data refresh process we saw earlier. The main difference is that it initiates the process and not checking for differences. It start by creating, loading the [[JSON]] file with the series information, building the profile, and go to the API and load the data based on the time range that we provide.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=94)** It generate [[Metadata]] and append, or push the data, to the normalized table. Note that if any data were available before it will override the metadata in the normalized tables. Let's now open VSCode and review where you can find those files. The backfill functions, the R version and the [[Python (Programming Language)|Python]] version, run inside a Quarto doc. Here on the left side you can see the Python version named data_backfile_py, it's a Quarto doc. Similarly, on the right side you can see the R version named data_backfill_R, and again it's Quarto doc. Both of those versions mirror each other. You can find those folders under the python and R folders. Once rendered it generate [[HTML]] output. So if you go over here under the Python version, you can see that there is a file named data_backfile_py and it's a HTML file with the rendered output of the backfill. Similarly, in the R folder, you can find the corresponding R file rendered into HTML. Let's go now to the browser and review the outputs of those files. You can see on the left side I have the Python version, and on the right side I have the R version. Giving that both of them are alike, let's see the Python version.
>
> **[3:08](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=188)** I'm not going to go line by line, just go to explain overall the processes that this function is doing. We start like before by loading the libraries. You can see that we are loading here additional libraries such as [[Pandas (Software)|Pandas]] and NumPy to process the data. And we're going to use libraries such as JSON to read the series.json file with the metadata of the series that we want to pool. In addition to the local script that we used before, the eia_api, we also loading the supporting functions for the process from the eia_data file. After we loading the series metadata, we start to set the parameters for this pool. Given that we want to have a backfill and we want to pool all this local data, we set the start point for the first data observation that's available for this photo series, which is July 1st, 2018. And we set the endpoint to the most recent date during the runtime of this backfill. And then we set the API parameters for the backfill function such as the offset, load the API key, we set the path of the metadata and the data folder. Then we start by generating the metadata. We check what we're comparing with the metadata available on the API to make sure that the start and endpoint align with the one that we set over here. And this is where the magic happened. This for loop function loop over the different series
>
> **[4:44](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-backfilling?u=76281980&t=284)** and pool the data and process it. Here is the cleaning of the data, the test and unit test are done. As you can see, just give indication it print each series that ran during this process. Then we generate the metadata and append it along with the data. You can see that in the metadata, all the series has some missing values, and this is one of the things that you need to be familiar with the data. In this case, all those four series says 98 missing values in a given period due to some missing data in the source data. So given that we know that this is okay, we are going to set the success to True and then we update the process and we set it also to True, and this is where it's done. And last but not least, we will visualize the series. This enable us to eyeball in the series to see if there is anything that our test didn't test and we want to give some attention. In the following video, we are going to review the refresh process that is done similarly to the backfill process in Quarto doc.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (9), [[Python (Programming Language)|Python]] (6), [[JSON]] (3), [[HTML]] (3), [[Pandas (Software)|Pandas]] (1)
> **CLI Commands:** python (6), find (3), make (1)
> **Env Vars:** api (4), html (3), json (2)
> **Code Identifiers:** data_backfile_py (2), eia_api (1), eia_data (1)
> **Definitions:** is a  (2), defined as (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (2)
> **File Paths:** series.json (1)

#### [Data refresh output](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=0)** - [Instructor] In the previous video, we reviewed the outputs of the backfill functions. We saw that there is a R and [[Python (Programming Language)|Python]] version rendered in Quarto Documentation. In this video, we will review the data refresh functions and their outputs. The data refresh functions running inside a Quarto Doc similar to the backfill function. And you can see on the screen over here that there are two versions. On the left side, there is the R version, data_refresh_R and it's a Quarto Doc, and on the right side, there is the Python version, which is named the same ending with py. You can find those folders on the corresponding R and Python folders in the Course Repository. Once the data pipeline is running and executing the process, it will render it and save those files in the docs folder. If we open the docs folders, you can see two folders here, data_refresh_python for the Python files, and you can see the [[HTML]] file here. Similarly, for the R version, you will have data_refresh_R and you will have the HTML version. Let's go ahead and see the outputs on the browser. Like before, there are two versions. Previously, we saw the Python version of the backfill. This time, let's go ahead and check the R version. Both of them are mirror each other. We are starting with loading the libraries.
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=93)** In this case, we are using almost the exact same libraries as before, but we also using the GT library to plot the outputs in a table format and the jsonlite to load the series.[[JSON]] file. We start by loading the JSON file and creating the mapping of the series. We also set the API parameters. For example, we set the template for the facets. We define the offset and load the API key. In addition, we define the [[Metadata]] and data path for the output files. Then we start with the process of identify if there is any incremental data in the API. We used the get_metadata to load the metadata from the local metadata file and compare it with the metadata that available in the API. So this is the output over here for the FALSE (indistinct). And as you can see, the most recent data point, the timestamp of the most recent data point in the local normalized table is February 28th, eight o'clock in the morning. So if you would request the next data point, the starting point of the get request should be one hour increment, and it would be nine o'clock on February 28th. Then we compare with the most recent timestamp in the API and we see that this is matched to the ending point. This mean that no new data points
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-refresh-output?u=76281980&t=187)** or incremental data points available in the API and the updates_available flag set to FALSE. Which mean that we will skip the next step of refreshing the data. If the updates_available would be TRUE, then the function would go ahead and execute this process, which loop over each series and pull the corresponding data points. One things that I like to do when I'm generating this type of documentation is to leave messages. So for example, here I'm printing, "What was the output?" And this output is, you can see forward series, there was no new data point available. In any case, we will capture metadata even if we didn't pull new points. And as you can see that some of the parameters here are not relevant for this pull, because we didn't pull any new data and we set them as missing value or NAs. We're ending by appending the new metadata and we plot the series as before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (6), [[Python (Programming Language)|Python]] (5), [[HTML]] (2), [[JSON]] (2)
> **Env Vars:** api (6), html (2), false (2), json (1), true (1)
> **CLI Commands:** python (5), find (1)
> **Code Identifiers:** updates_available (2), data_refresh_python (1), get_metadata (1)
> **Analogies:** for example (2), similar to (1)
> **Documentation:** the docs (2)
> **File Paths:** series.json (1)
> **Cross-References:** previous video (1)

#### [Data quality checks](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=0)** - [Instructor] We'll conclude this chapter with reviewing the pipeline [[Data Quality]] checks or unit test. Let's start by defining the term data quality checks. Data quality checks or data unit test is the process of evaluating the data structure and its values with the use of set of deterministic and non-deterministic assumptions. Example of non-deterministic assumptions are data structure and data attributes. For example, the number of columns or their attributes such as numeric string, or time objects. The field names the value range. So for example, for our electricity data, we do not expect negative values and duplications. Likewise, examples of non-deterministic assumption or expectations are missing values, the value range. So for example, in our electricity data sets, we can measure the mean, the standard deviation, and set a threshold of when we want to alert if the standard deviation is higher from the mean and delays. Example for delay, if we expect to refresh the data every 24 hours, but the function could not identify new data available in the API in the last seven days, we should raise the red flag. It is recommended to set a unit test between two processes. For example, moving data from sources A and B. The unit test is the doorkeeper.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-quality-checks?u=76281980&t=96)** It will allow the append of the new data to source B only if the new data passes the unit test we set. Likewise, it'll prevent the appending of new data. If the data fails, the quality checks. This will prevent a potential series of [[Data Integrity]] issues in our pipeline and with use of monitoring will enable us to address those issues on time. Here is the [[Metadata]] that our pipeline collected throughout the refresh process. They create meta functions, run a sequence of test, for example, comparing if the timestamp of the data we collected is aligned with the ones we set, with the start and end argument of the get request. It then, based on some logic, defines if the data is good to get appended or not, and set a success criteria accordingly. The function will append the new data to the normalized table if and only if the success flag is set to true. Last but not least, the comments field provide some information about what test ran and fell, or warnings that generated throughout process. This enables the user to identify what is the status of the test. This table will be the best of our pipeline monitoring process. We'll dive into more details in chapter four.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Quality]] (3), [[Data Integrity]] (1), [[Metadata]] (1)
> **Analogies:** for example (5), such as (1)
> **Env Vars:** api (1)
> **Cross-References:** in the last (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to GitHub Actions](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=0)** - [Instructor] In this video, we will review [[GitHub]] Actions core functionality and features. Let's start by explaining what GitHub Action is. GitHub Actions, or Actions, is a CI/CD tool for software workflow automation. It is integrated part of GitHub features, and it is, by default, available on any GitHub repository. Workflow defines a process that we automate on Actions. It can derive from a simple bash script with a list of commands, to a complex software build. There are mainly two types of automation methods in Actions. First is Triggered Workflow, which is simply define a job that is set to start when some action takes place. For example, this workflow is triggered to run a unit test whenever a [[Git]]-commit or portal request takes place. The second type of automation is Scheduled Workflow, which run a job based on a timing or a cron job. For example, this workflow on the right side is set to run every hour. In this course, we will focus on scheduling jobs with GitHub Actions. Let's review GitHub Actions key features. First and foremost, it's fully integrated with GitHub and its features. It supports multiple OS systems such as [[Windows]], macOS, and [[Ubuntu]].
>
> **[1:33](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=93)** It fully supports deployment with Docker, which is the method we will use in this course, provides logs, and it also provide a service for storing sensitive data such as API keys and credentials. We will use this service to store our EIA API key. Last but not least, the service has bought free and enterprise versions. We will use the free version for the deployment of our data pipeline. Let's now review the general requirements for setting a workflow on Actions. First, you need a YAML file. A workflow is set and configured with a YAML file, and we will build those workflow using this method. Actions enable you to select which OS or OS versions to run your workflow. Before you get started with defining your environment or docker container settings, please make sure Actions supports this version. We will use Ubuntu 2020 .04. The best practice for code deployment in scheduling system, particularly with Actions, is with Docker Container. Generally, you can deploy your code without the use of an image by setting your environment upon the launch time of the job. But it is not a recommended practice. You will need to define your actions that you want to deploy. Typically, it is a script or multiple scripts. If your workflow is using credentials
>
> **[3:10](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/introduction-to-github-actions?u=76281980&t=190)** or any other sensitive inputs, you should set them as a secret. You can also set environment variables if needed. Last but not least, workflows are stored in the workflows folder under the .GitHub folder. In the next video, we will review the Docker Container settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (9), [[Ubuntu]] (2), [[Git]] (1), [[Windows]] (1)
> **Tools:** github (9), bash (1)
> **CLI Commands:** docker (4), cd (1), git (1), make (1)
> **Env Vars:** api (2), yaml (2), eia (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is a  (2)
> **Best Practices:** best practice (1), recommended (1)
> **Code Identifiers:** macos (1)

#### [Deployment with Docker](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deployment-with-docker?u=76281980&t=0)** - [Instructor] In the previous video, we reviewed the core functionality of [[GitHub]] actions. In this video, we will dive into more details about the motivation for deploying a workflow with Docker image. If I need to define the motivation for using a container for our deployment, in one [[Microsoft Word|word]], it would be environment and in two words, reproducible environment. Docker may have a high learning curve, but it was worth the effort. when you deploy your code in a remote environment. It enables you to shift your code with the environment in which you developed and test the code with. Plus, it is an industry standout and its use case go beyond code deployment. During this course, we'll use the course image, which is rkrispin backslash data pipeline automation with GitHub actions with dash separator, with the tag of prod. The image Docker file and its supporting files can be found under the .dev container folder in the course repository. If you feel comfortable with Docker, I recommend going ahead and creating a new image or customizing the course image according to your needs. If you are new to Docker and may have additional requirements that not available in the current image, I recommend checking the official [[Python (Programming Language)|Python]] image for Python applications or the Docker project for our applications. In the next video, we'll learn how to create a workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Python (Programming Language)|Python]] (2), [[Microsoft Word|Word]] (1)
> **CLI Commands:** docker (6), python (2)
> **Cross-References:** previous video (1), in the next (1)
> **Tools:** github (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Setting GitHub Actions workflow](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=0)** - [Instructor] In this video, we will create our first workflow. Let's first define the workflow scope. We want the workflow to simply print a "Hello World." We are going to use [[Ubuntu]] as our OS, and we will use our course image to set the environment. There are two methods for adding a new workflow. First, via [[GitHub]]. Let's open the browser and go to GitHub. On the main menu, go to Actions, and then click on the left side, New workflow. As you can see, GitHub offer many templates. Over here, you can see there is a [[Python (Programming Language)|Python]] version and a R version. We will set our workflow from scratch. Select set up a workflow yourself. And here, this is leading to the GitHub editor. And you can start edit and set your workflow. And at the end you save it by committing the changes back to the repository. You can see by default GitHub named this workflow as main.yml. And this file is under the .github/workflows folder. Let's now not go with this route and see how we can do it on VS Code. So we're now in the course repository. To set a workflow via the local machine, you first need to make sure that you have the .github folder. And below this, you should have the workflows folder.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=96)** If it is your first workflow, so go ahead and set those folders and open the workflows folder. Within here, you see that I already have some workflow and we are going to create a new one. So I'm going to create here, under the workflows folder, a new script, and I'm going to name it hello-world, with the extension of YAML without A, yml. Click Enter. And now, we have the file over here on the editor and we can start to edit. This is a YAML file and it's fairly similar to a [[JSON]] file. We'll start by defining the workflow name. Let's use the name argument. So let's set the name, use colons, and call it Hello World. Next, we want to set the trigger mechanism. Given that we want to set a cron job, we will use the on argument. So on define on what we're going to trigger this job. And beneath this we will set scheduler with the schedule argument, okay, -dule. And we set the cron. The cron argument enable us to set the time that we want to trigger a job. So let's go ahead and define cron, and we put it inside quotes. And by default, we use the asterisk to set cron.
>
> **[3:12](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=192)** So let me just write the five asterisk and I explain what each one define. So each one of those five asterisk define a time unit. So starting from left to right, this is defined in minutes, hours, day of the month, the month, and the day of the week. And by edit this you can define when you want to run the job. So for example, we want to run it hourly. So on the second asterisk, which define the hours, we will add a backslash and add one. We just saying we want to run it every one hour. If for example, you want to run it every 12 hours, so you just add, set here to 12, and so on. If you want to run it every four hours, it will be four. So let's run it every one hour. And let's say that we want to define the minutes in the hour that you want to run it. So here you can use, for example, set it at the beginning of the hour. So let's set it zero. If for example you want to have it 10 minutes after the hour, we'll set it as 10. Okay? So let's just keep it as zero. I will note here that the free version is depend on availability. So if you set it to zero, not necessarily that it will start at the beginning of the hour, it depend on the availability of the resource that GitHub offer for the free version.
>
> **[4:49](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=289)** Okay, so we set the cron job. Let's now go ahead and set the jobs that we want to run. So we want to use the jobs argument and we can start set the job. So here we're going to first name the job name. So let's call the job name hello-world, and end it with semicolons. The first thing we want to define is the OS or what type of machine we want to run this job. So let's select the runs-on argument and define it as Ubuntu. And the version should be 22.04. This is aligned with the version we are using in our docker container. And then we want to set our container. So we're going to use the container argument, and define it with the image argument. And over here I will copy it, 'cause it's too long, rkrispin/data-pipeline-automation-with-github-actions, and the version is prod. Next, we want to set the steps in this job. So I need to indent it back. And we have here, a single step. We want to print "Hello World." So first we need to name this step name. As you can see, we define for each object here,
>
> **[6:24](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=384)** we define a name, so this object is a step, and we start by defining the name of the step. So we're going to use again name, and we call it, the step, print-hello-world.
>
> **[6:43](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=403)** And we want to define the command. So we're going to use the run argument. And over here, once you set the run argument, essentially you are in the command line of this Ubuntu machine. So that's how, the way, you should think about it. From here, you can execute script. For example, if you want to call a Bash script, you will use the bash command, and the path of the file. Or if you run a Python file or R, you will use the, for example, for Python is python or python3, and the file name. So you get the gist over here. So since we want to just print "Hello World," I'm going to use the echo command line, command echo, and I want to say "Hello World." And that's it. This is how you set a workflow. So the next step is to save it. Okay? And we want to commit back this job, 'cause now it's only living in our local machine. We want now to commit it back to GitHub to our repository. Let's now go ahead and commit the changes on the terminal. So first we can check that we have a change. So let's do [[Git]] status. And you can see there is a new workflow. So let's now go ahead and add it, git add .github/workflow/, and the file name.
>
> **[8:16](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=496)** Add commit message, commit -m. And we call it, "adding new workflow to actions."
>
> **[8:30](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-github-actions-workflow?u=76281980&t=510)** And let's push the change, git push, okay. So there is probably a workflow that are already running. So we first need to merge. So let's do git pull. So on the backend, there are some workflow that are already running. So that's why I get this error message. And now let's do git push. Now let's go back to the repository and see if the workflow was committed. So let's maybe refresh first, and you can see there was commit over here, and you can see the commit message, "adding new workflow to actions." And if you go to Actions, you can see the Hello World. Now it might take some time until it will run, because we set it to run every hour. So from the moment you push it, it typically will run in the next hour. So in the next video, we're going to wait until the job will run and we go ahead and review the logs of the job.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (11), [[Git]] (5), [[Python (Programming Language)|Python]] (4), [[Ubuntu]] (3), [[JSON]] (1)
> **Tools:** github (11), command line (2), bash (2), vs code (1), terminal (1)
> **CLI Commands:** git (5), python (4), make (1), docker (1), python3 (1)
> **UI Navigation:** go to (3), open the (2), click on (1), select the (1)
> **Analogies:** for example (6), similar to (1)
> **Definitions:** is a  (4)
> **Env Vars:** yaml (2), json (1)
> **Cross-References:** in the next (2), go back to (1)

#### [Reviewing workflows logs](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=0)** - [Instructor] In the previous video, we created our first workflow, Hello World. Let's now go back to the Action section on the repository and see how can we explore the job logs. First, on the repository, click the Action tab. On the left side, you can see the list of all the actions that are available in this repository. So for example, you can see here our action that we created in the previous video, Hello World. On the main screen, you can see the most recent jobs that ran and their status. A green check mark indicates that the job was completed successfully, and a red X indicates a failure. You can access the log of the Hello World either by going to the workflow name on the left side, or click on the job name if available on the main screen. Let's go ahead and click over here on the Hello World job. And as you can see here, there is a description of the specific job that ran, the time, duration of the runtime. And we can access it by clicking this box. And here you can see the steps of running the job. The job start by setting up the machine and then loading the container. It then run the job. And you can see here the name that we set for the job, print-hello-world. And once it's done, stop the containers and complete the job.
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/reviewing-workflows-logs?u=76281980&t=94)** We can expand each step by clicking the arrow. So you can see here this is the process of creating, setting the machine. And over here loading the image. Let's go ahead and check the job that we set. And as you can see here, the command that was running was run echo Hell World, and this is the output. And as you can see, the job completely successfully as expected.

> [!info]- Semantic Content
>
> **Cross-References:** previous video (2), go back to (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Setting secrets and environment variables](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=0)** - [Instructor] In this video, we will see how we can set secrets and environment variables in [[GitHub]] actions. We'll use secrets to store sensitive variables and credentials such as the EI API Access Key. Secret and environment variables are set at the repository level. To set secret on the repository that you are running the workflow, open the setting menu. Then select the secrets and variables option on the left side of the menu and choose the action sub menu below. Under the secrets tab, click the new repository secret green button, and you can add new secret. As you can see, I have already three secrets set there. The first EI_API_key is my access key for the repository. The second and the third user_email and user_name are my GitHub user email and name. In the next video, we'll see how we can commit back to the repository, and you will have to use your GitHub username and email for that workflow. Later, in this chapter, we'll use the EI API Access Key to Access the API Via the workflow. Please go ahead and set those variables as secrets.
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/setting-secrets-and-environment-variables?u=76281980&t=96)** Likewise, to set environ variables, go to the variable tab and follow the same steps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Env Vars:** api (3)
> **Tools:** github (3)
> **UI Navigation:** open the (1), select the (1), go to (1)
> **Code Identifiers:** user_email (1), user_name (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Advanced workflow](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=0)** - [Instructor] In the previous video, we saw how to set environment variables and secrets. In this video, we will increase the level of complexity and see how we can read and write back to the repository from a workflow. Reading and writing back to repository is critical when we deploy our electricity data automation pipeline. During this process, we will read and execute code from the report and write back to the data and [[Metadata]] tables. To write back to the repository, you will have to set your [[GitHub]] username and email as secrets as shown in the previous video. In the next example, we want to create a workflow that captures the date and time during the workflow runtime. Log it and write it back to a log file on the repository. Before setting the workflow, I created an empty text file to store the logs, this file name as log.text, and it is under the chapter three folder. We will use similar settings as the one we used in the Hello World example before and add a new step, the Checkout Action. The Checkout Action is a built in feature that enables you to check out or clone your current repository to the workflow. We will use the reference argument to refer to the main branch for this workflow.
>
> **[1:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=95)** You can refer to other branch in case it's applicable, and this is a great feature, enables you to test code before deployment on different branches such as dev staging and prod. We will use version three of this feature. From this point, run as we were inside the root folder of the main branch. This enable you to call and reference any file in the main branch at the time of the execution of the workflow. The next step will define a set logs, what are the following changes to the run argument. It now executed the helper file named Set_logs, a bus script, and we use the end argument to load the GitHub username and email that we will use later on to commit the changes we did on the log file. Using bus script to handle some of the workflow tasks is a common practice. While you can write your code inside the run arguments as you are in the command line, it is cleaner to wrap it inside a bus script or any other language that is applicable for the specific application. Let's now dive into the functionality of the batch script. First, we set a variable to define the branch that we are using in this task. In this case, we're using the main branch. Then we use the date command to capture the date and time during the execution time and story to the log file we created for this workflow,
>
> **[3:09](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/advanced-workflow?u=76281980&t=189)** Log.text. Please make sure you reference the file as you are in the root folder of the repository. So in this case, we also add the path, the full path, chapter three, and then the file name. Next, we want to give permission to the machine we are running the workflow to write back to the repository. We'll use the [[Git]] config command and add the path of the repository in that machine. Added this If Or statement to validate if there are any changes in the repository before we commit the changes back. Generally, this is just a safety step to prevent the process from trying to commit when there is nothing to commit back. The next step is the commit process, where we are going to use the environment variables we pulled from the secrets with our GitHub account details to authenticate, commit the changes in the log file and push it back to the repository. Here you can see the output of the workflow after it deployed and ran few times, the file is in the Code repository, under the chapter three folder. You can see the commit message we set, update the log, and the logs were captured at the time of the workflow run as expected, at this time, we're ready to deploy the workflow for the electricity data automation. In the next video, we will see how to set this workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Metadata]] (1), [[Git]] (1)
> **Cross-References:** previous video (2), in the next (2)
> **Tools:** github (3), command line (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1), git (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Data pipeline deployment](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=0)** - [Instructor] In this video, we will connect what we have learned so far in the course and deploy the data pipeline into [[GitHub]] actions. We will use a similar deployment method as we saw in the previous video. Let's start with the workflow general requirements. We want to pull the repository content using the checkout actions. This will enable us to use the data pipeline functions and files from the repository during the runtime of the workflow. In addition, we want to run this workflow every 12 hours. We will set two versions for the deployment, one for R and a second for [[Python (Programming Language)|Python]]. Other than that, we will use the exact same setting as before. Let's review the deployment files of the Python and R version side by side. As before both files are in the workflows folder, and they're named as data_refresh_py.yml for the Python version and data_refresh_R.yml for the R version. Let's go over the workflow functionality. We set the scheduler to trigger the chron job every 12 hours. Like the previous example, we will use the checkout action to pull the course repository using the main branch as reference. Last but not least, we'll let the API key to the workflow environment variables
>
> **[1:36](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-deployment?u=76281980&t=96)** and called a bash script with the run argument that triggers the data refresh process. As you can see, the bash script names are the only difference between the R and Python versions. Here are the bash scripts that trigger the data pipeline process. Both the Bash scripts have the same functionality, with the exception of the Python version. as we cannot deploy two [[Dashboards]] on GitHub action at the same time, we only make the deployment for the Python version, and this is the difference between the two Bash scripts. In the next chapter, we will dive into more details about the dashboard deployment process. Let's review the functionality of the Bash script using the R example. It starts with cleaning the previous rendered files if they exist. It then renders the quarto doc. This is where the data pipeline starts to run. Next, it creates a copy of the outputs to the docs folder. This enables you to link the data pipeline render outputs to the dashboard if needed. We will dive into more details about the functionality of the Docs folder in the next chapter. Last but not least, it commits the changes back to the main repository as we saw in the previous example. Congratulations. We have now two pipelines running on GitHub actions. On the left side is the Python version, and on the right side is the R version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (7), [[GitHub]] (3), [[Dashboards]] (1)
> **Tools:** bash (6), github (3)
> **CLI Commands:** python (7), make (1)
> **Cross-References:** as we saw (2), in the next (2), previous video (1)
> **File Paths:** data_refresh_py.yml (1), data_refresh_r.yml (1)
> **Documentation:** the docs (2)
> **Code Identifiers:** data_refresh_py (1)
> **Env Vars:** api (1)


### 4. Monitoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Data pipeline maintenance](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=0)** - [Instructor] Congratulations. We now have a deployed [[Data Pipelines]] running on [[GitHub]] actions. In this chapter, we will focus on the maintenance steps of the data pipeline. Let's start by discussing when and why you need to maintain the data pipeline. Typically, software upgrades, new features, and [[Data Integrity]] will force you to make changes in the code or the structure of the data pipeline. Software upgrades and new features typically trigger changes in the environment settings. Generally, it is recommended to have a clear deployment strategy for new features or changes in the environment. A classic setting is to have three environments, dev, stage, and prod, where the dev is where you roll out first and test new software updates before pushing it to the stage and prod, and a new feature you test on the stage environment before pushing the changes to the prod environment. This is will ensure that when you update your docker image or change a feature in the data pipeline, the production data pipeline won't crash or get affected. Likewise, data integrity issues or unexpected errors will require immediate changes in the code and you want to test it before rolling out to the prod environment. This is where monitoring, which is the process of tracking the health of the data pipeline,
>
> **[1:35](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/data-pipeline-maintenance?u=76281980&t=95)** is a critical tool in the maintenance of the pipeline. This includes a variety of methods and tools such as setting unit test, defining logs, and setting alerts. In chapter two, we saw different unit test and integrated some [[Data Quality]] checks into the electricity data pipeline. Those are just conceptual example that we use to demonstrate this topic. Now, after you saw the process of setting a data pipeline and the functionality of actions, the sky is the limit. There are many open source tools for data quality for both R and [[Python (Programming Language)|Python]], such as the pointblank R Library or the YData profile Python library, which provides great tools for data monitoring and reporting. Those tools can be easily integrated into the data pipeline during the runtime. In the next video, we'll learn how to deploy render dashboard to GitHub pages using GitHub actions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Data Integrity]] (2), [[Data Quality]] (2), [[Python (Programming Language)|Python]] (2), [[Data Pipelines]] (1)
> **CLI Commands:** python (2), make (1), docker (1)
> **Tools:** github (3)
> **Analogies:** such as (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Deploying dashboard to GitHub Pages](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=0)** - [Instructor] In this video, we'll learn how to deploy an [[HTML]] document, such as a dashboard or report, to [[GitHub]] Pages with GitHub actions. Building [[Dashboards]] or monitoring tools is beyond the scope of this course. The goal here is to provide you with tools for deployment, HTML best monitoring tools, such as ones generated by the YData Profile or pointblank libraries that we saw in the previous video. Before diving into more details, let's explain what is GitHub Pages. GitHub Pages is a GitHub feature that enables the host of a website on any repository. It was built to support code documentation, and it's also widely used to host personal websites, blogs, dashboards, and other HTML documentation. For this demonstration, I created a simple Quarto dashboard that plots the data and presents the pipeline's logs. As before, the dashboard has both R and [[Python (Programming Language)|Python]] versions, but for the purpose of the demonstration, we will deploy the Python version. The deployment of the R version is identical. To deploy a website, you will need an HTML file named index.html, and therefore, we set the names of both the R and Python versions of the dashboard as index.qmd. Once the Quarto renders the QMD file, it sets the output as index.html
>
> **[1:34](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=94)** and the output file is ready for the deployment in GitHub Pages. Before setting the dashboard, let's set the website folder. GitHub Pages website can run either from the root folder or from the docs folder. We will create a docs folder and use it for the deployment of the dashboard. After we set the folder, the last step is to define the rendering process of the dashboard during the pipeline runtime. Let's open the bash script that triggers the data pipeline and review the dashboard deployment process. Recall this bash script, data_refresh_py, is triggered by actions during the runtime of the workflow and it refresh the data and captures logs. The code in the purple box renders the dashboard whenever new updates are available. It then removes the files of the old dashboards and copies the new dashboard's files to the docs folder. This includes the index.html file and other supporting files in the index_files folder. Once we have the files in place, we can set the dashboard on the GitHub setting. On the repository main page, enter the Setting tab, then select the Pages menu on the left side, and define the branch you want to deploy and the folder of the website. In this case, we will deploy the website
>
> **[3:07](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/deploying-dashboard-to-github-pages?u=76281980&t=187)** from the docs folder from the main branch. Once you save this process, it might take a few minutes, and then you get a URL that you can access the website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[HTML]] (7), [[Dashboards]] (3), [[Python (Programming Language)|Python]] (3)
> **Tools:** github (8), bash (2)
> **Env Vars:** html (4), qmd (1), url (1)
> **File Paths:** index.html (3)
> **CLI Commands:** python (3)
> **Documentation:** the docs (3)
> **Code Identifiers:** data_refresh_py (1), index_files (1)
> **UI Navigation:** open the (1), select the (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-pipeline-automation-with-github-actions-using-r-and-python/next-steps?u=76281980&t=0)** - Congratulations for completing the course. I hope you enjoyed the learning and can apply to real-life applications. If you want to learn more, you are welcome to follow me on [[LinkedIn]], where I'm sharing content related to [[Data Science]] and engineering. Happy learning!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Data Science]] (1)
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