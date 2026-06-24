---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-working-with-files
url: "https://www.linkedin.com/learning/openai-api-working-with-files"
duration_minutes: 36
duration: 36m
level: Intermediate
updated: 2/5/2024
learners: 2764
skills:
  - OpenAI API
  - API Development
  - OpenAI Products
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/openai-api-working-with-files-4556031"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFOZf2CmFd-fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706825069771?e=2147483647&amp;v=beta&amp;t=fihFsN396gI0FkbniTmZtEI7A4mv40QcIsBByBHJw2M"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)'
prev_courses:
  - '[Openai Api Introduction](Openai%20Api%20Introduction.md)'
next_courses:
  - '[OpenAI API- Function Calling (2023)](OpenAI%20API-%20Function%20Calling%20(2023).md)'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":2,"total":10,"prev":"Openai Api Introduction","next":"OpenAI API- Function Calling (2023)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/api-development
  - skill/openai-products
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Working%20with%20Files.md)

![OpenAI API: Working with Files](https://media.licdn.com/dms/image/v2/D4E0DAQFOZf2CmFd-fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1706825069771?e=2147483647&amp;v=beta&amp;t=fihFsN396gI0FkbniTmZtEI7A4mv40QcIsBByBHJw2M)

# OpenAI API: Working with Files

> This course provides an in-depth overview of the OpenAI Files API, which allows you to manage extremely large datasets effectively and efficiently for AI applications. Instructor Fikayo Adepoju covers the basics of the Files API including how to configure and set up your development environment as well as how to upload, manage, store, and utilize files.Along the way, develop the skills you need to

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-working-with-files) | 36m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Uploading large files to the OpenAI API](#uploading-large-files-to-the-openai-api)
  - [What you should know](#what-you-should-know)
- [**1. Understanding the Files API**](#1-understanding-the-files-api) (2 videos)
  - [The significance of the Files API](#the-significance-of-the-files-api)
  - [Benefits of the Files API](#benefits-of-the-files-api)
- [**2. Using the Files API**](#2-using-the-files-api) (5 videos)
  - [Setting up your development environment](#setting-up-your-development-environment)
  - [Uploading files](#uploading-files)
  - [Query a file](#query-a-file)
  - [Listing files](#listing-files)
  - [Deleting files](#deleting-files)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Uploading large files to the OpenAI API](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-large-files-to-the-openai-api?u=76281980&t=0)** - [Fikayo] OpenAI's API now allows you to upload large files to be used for modeling, training, testing, and other machine learning applications. Whether you're a developer, a data scientist, or just someone passionate about AI, this course is tailored for you. We're keeping this course beginner-friendly, but insightful and hands-on. I am Fikayo Adepoju, a software developer and tech instructor with over 14 years' experience developing scalable applications and teaching the next set of developers. If you're ready to unlock the potential of OpenAI files API, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Speakers:** - [fikayo] (1)

#### [What you should know](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you start out to this course, here are some things you need to know. This course was developed to help learners understand the capabilities of the OpenAI Files API. You'll learn what the API can help you to do and how to achieve it. While we are going to be doing some programming in this course and familiarity with the programming language will help you implement the exercises, you can follow along with this course without programming knowledge and still fully understand what the OpenAI Files API can do for you, and how to use it. As long as you have an interest in implementing AI-powered features in your applications, you can follow along with all the tutorials in this course. So strap in, and let's get started learning about the OpenAI Files API.

> [!info]- Semantic Content
>
> **Env Vars:** api (4)
> **Speakers:** - [instructor] (1)


### 1. Understanding the Files API

[↑ Back to Table of Contents](#table-of-contents)

#### [The significance of the Files API](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=0)** - [Instructor] In this video, we're going to be discussing the significance of the OpenAI Files API and why it is a game changer for handling data for our AI applications. OpenAI's Files API is a tool that helps you upload, manage, and delete large data files for processing. So with this, you can manage all your AI training data and even use them between multiple projects. Now, why is this important? Traditional APIs have limitations in data handling, especially with large data sets. With the Files API, this issue is immediately resolved as you can upload and process bulk data efficiently and securely. The versatility of the Files API allows you to use it for tasks like training custom AI models with large data sets, [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md), and complex data analysis. One of the key benefits of the Files API is efficiency. You can upload large data sets once and use them multiple times, saving bandwidth and processing time. Security is paramount in data handling. Thus the Files API ensures that your data is processed without exposing it in multiple API requests, offering an added layer of security. The Files API is also invaluable for advanced AI tasks like model training. It helps to streamline the process and make it easier to work with complex data sets. All these make the Files API powerful tool in the OpenAI suite. Its ability to undo large data sets efficiently and securely makes it a must know
>
> **[1:34](https://www.linkedin.com/learning/openai-api-working-with-files/the-significance-of-the-files-api?u=76281980&t=94)** for anyone working in the [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Env Vars:** api (9)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Benefits of the Files API](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=0)** - In this video, we'll be describing the benefits of using the OpenAI files API to manage your data sets. And we'll also be looking at some use cases. So one-by-one, let's first take a look at the benefits of using the OpenAI Files API. First, is enhanced data handling. The Files API excels in handling large data sets. This allows it to be efficient for managing bulk data in machine learning operations. Next, is improved security. [Data Security](../../Skills/Data%20Science/Data%20Security.md) is crucial when training models for AI applications. The Files API ensures that data is uploaded and stored safely, minimizing the risk of exposure during processing. Another key benefit of using the Files API is [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and flexibility. Whether it's a small or really huge data set, the Files API adapts to your needs, offering immense flexibility. There is also the time and cost efficiency benefit. By streamlining [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) using the Files API, you save valuable time and resources, and also your operational costs are significantly reduced. The last benefit we'll look at is how using the Files API leads to enhanced productivity. Managing and automating data processing using the Files API allows you and your team members to focus on more strategic tasks, rather than wasting time on routine [Data Management](../../Skills/Software%20Development/Data%20Management.md) tasks. Now that we've seen the benefits of using the OpenAI Files API, let's take a look at some of its use cases.
>
> **[1:34](https://www.linkedin.com/learning/openai-api-working-with-files/benefits-of-the-files-api?u=76281980&t=94)** First, is in training machine learning models. With the Files API, we can undo large data sets for creating and [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) machine learning models. [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) for analytics is another interesting use case. We can leverage the API for efficient batch processing of data that we need for large scale data analytics. We can also use the API to securely manage and process sensitive data for research or business insights, ensuring [Data Privacy](../../Skills/Data%20Science/Data%20Privacy.md) and security. For historical data analysis, we can also utilize the Files API to process and analyze sensitive historical data sets. This is useful in fields like [Market Research](../../Skills/Data%20Science/Market%20Research.md) or historical studies. Finally on our list, we can use the Files API for automated content generation. This can be achieved by applying the Files API to automate generation of content such as reports or articles where large data sets are used as input for AI driven [Content Creation](../../Skills/Software%20Development/Content%20Creation.md) or content creation tools. All that we have discussed in this video further shows why the OpenAI Files API is an invaluable tool to any individual or teams looking to manage their machine learning data sets. But enough talk. In the next chapter, we'll start demonstrating how you can use the Open AI Files API to manage your data sets and get all its efficiency, security, and cost saving benefits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (2), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (2), [Content Creation](../../Skills/Software%20Development/Content%20Creation.md) (2), [Data Security](../../Skills/Data%20Science/Data%20Security.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** api (18)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)


### 2. Using the Files API

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up your development environment](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=0)** - [Instructor] In this video, I'll be showing you how to get your development environment ready for using the OpenAI files API. To demonstrate the use of the API we'll be making use of [Node.js](../../Skills/Web%20Development/Node.js.md) and also use OpenAI's Node.js SDK package from [npm](../../Skills/Web%20Development/npm.md). However, you can follow along if you won't be using Node.js or if you're not familiar with Node.js. The workflow is very similar for any language or SDK you choose to work with. To get your development environment set up to follow along with the exercises in this course, three core things are required. First, you need to have Node.js installed on your system. This will enable you run the examples in Node.js and using the Node.js OpenAI SDK. To install Node.js and also NPM, which is the package manager for Node.js, simply visit the Node.js website at [nodejs.org](https://nodejs.org). Here you can download and install the appropriate Node.js runtime for your operating system. Next, you will need an [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) key. To get this key, you first need to have an OpenAI platform account and use the trial credits or attach a card to your account to be charged as you use the API. To get an API key, first log into your dashboard and on the side menu navigate to the API keys page. Here you can create a new key by clicking the button with the label plus create new secret key. Supply a name for your key, and click the create secret key button to create the key. Once your key is created,
>
> **[1:34](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=94)** you can then copy it for use later. I've already created a key for this course, so I'm not going to be creating one right now. To begin creating our project, let's create a new folder for the project. You can create this folder however you want, but I'll be using the command line 'cause it's just so cool. To create a new folder you say make DIR OpenAI files. You can give this folder any name you want, but this is the name we're going to be using in this course. Click enter to create the folder. CD to go into the folder. And the next thing we're going to do is to initialize this as a Node.js project. To do that I'm going to be using the command NPM init -y. We have added the -y flag to simply accept the default from the Node.js project initialization process. So lets it enter. With the project initialized the next step is to install the Node.js SDK for OpenAI. This SDK can be found on the NPM website and it's the official SDK for working with the OpenAI API in Node.js projects. To install the SDK run the following command in the root of the project, NPM install OpenAI. And lets hit enter to install the package. With the package installed, we can now work with the Node.js SDK for OpenAI to access the OpenAI API. On our package will be installing is the Node.js package that will help us hold our API key
>
> **[3:09](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=189)** in an environment variable. This is the .ENV package. We'll also be running an NPM command to install this package. But first let me clear the screen. Good. And now to install the .ENV package, we say NPM install dotenv. And it enter to trigger the installation. With these two in place, we can now move into Visual Studio Code and start writing some code. Here in VS Code we have our project opened, OpenAI files. We have our Node.js folder that holds our models and we have our package.[JSON](../../Skills/Web%20Development/JSON.md) and package lock.json files. Now the first step we're going to be taking is to create a .ENV file that is going to hold our API key. So at the root of the project, let's create a .ENV file. In this file we're going to enter the name of the environment variable that will hold our API key. We'll name this environment variable in all caps and call it OpenAI_API_KEY, and set its value to a string. Within this string codes is where we're going to be placing our OpenAI API key. So let's grab that and paste it here. With the key now inserted, ensure that you save this file. Do note that you have to ensure that you secure this key and make sure you do not mistakenly push it to a public repository like [GitHub](../../Skills/Software%20Development/GitHub.md). So this is a good time to add a [Git](../../Skills/Software%20Development/Git.md) ignore file. And add .ENV that .ENV file as a file to be ignored.
>
> **[4:52](https://www.linkedin.com/learning/openai-api-working-with-files/setting-up-your-development-environment?u=76281980&t=292)** With this project skeleton in place, we can now start working with the OpenAI files API. In the next video, we'll be uploading our first file to our OpenAI account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Node.js](../../Skills/Web%20Development/Node.js.md) (18), [npm](../../Skills/Web%20Development/npm.md) (7), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** api (13), sdk (8), npm (7), env (6), dir (1)
> **CLI Commands:** node (18), npm (7), make (2), cd (1), git (1)
> **File Paths:** node.js (18), package.json (1), lock.json (1)
> **Prerequisites:** install (9), set up (1), you need to have (1), initialization (1)
> **Tools:** command line (1), visual studio (1), vs code (1), github (1)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Cross-References:** in the next (1)

#### [Uploading files](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=0)** - [Instructor] In this video, you'll be learning how to upload the files containing our datasets to openai using the OpenAI Files API. For this purpose, I have added two files to our project, the assistant-queries.txt file, and the spanish-translated-sample-file.jsonl file. First, let's look at the assistant-queries file. Open it and pull this. Yep, to the left. Good. Now, the assistant_queries.txt file contains a list of queries, or prompts to test an openai assistant's responses for the purpose it has been trained for. Each line contains a query to which the assistant's response will be tested to determine the accuracy of its responses. Next, let's take a look at the Spanish translated sample file. This [JSON](../../Skills/Web%20Development/JSON.md)-L file is a file used to train an openai model to learn how to translate prompts to Spanish. If I collapse the files menu so that we can see this file very well, you can see that each line consists of a prompt and completion pair. The prompt is in English, and the completion is in Spanish. Each line consists of data to fine-tune the base model from openai to be able to translate English words into Spanish. We'll be uploading these two files to openai
>
> **[1:33](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=93)** using the files API. So, let's begin. First, let me close these files. And the first piece of code we'll be writing is a configuration file for the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). This configuration file will allow us to use the configuration across different files without having to repeat the whole process. So, at the root of the project, let's create a new file with the name openaiConfig.js. This file will be responsible for importing the openai library and configuring it with our API key. So first, let's start by importing the openai library. Say import openai from openai. Next, to work with our environment variable, let's also bring in the .env library. Import. Good. To have access to our environment variables, we need to call the config function on the .env library. So, let's go ahead and do that. Say.env and we call the config function. Now we have access to all the environment variables defined in the .env file. The next step is to set up our configuration of the openai [Node.js](../../Skills/Web%20Development/Node.js.md) library that allows us to work seamlessly with the files API. To do this, we need to create a new variable called openaiConfig and set it to a new instance of the openai object.
>
> **[3:09](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=189)** Next, we need to pass a configuration object inside this new instance so that we can give it our API key. Our API key can be set in this configuration object by using the API key property. The API key property is a standard property in the configuration object, and its value is the API key we obtained from our openai dashboard. We already have this key set in our environment variable, so let's set this property to the value of our API key in the environment variable.
>
> **[3:46](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=226)** Perfect. With all this set up, let us export openai config from our file so that we can use it in other files. Awesome. Now with these in place, we can now start uploading our files to openai. To do that, let's create a new file to undo our file uploads. At the root of the project, create the file upload_files, upload_files.js. Inside this file, we're going to be uploading any file that we need to upload to our openai account using the openai Files API. Inside this file, let's begin by bringing in our openai configuration model. To do that, we say import. Let's call the import openai. Let's say from and target our openaiConfig. Config start with a capital C. openaiConfig.js file. Because we will be uploading files from our local system, we will also need the Node.js FS module to read our files. So, let's bring that in also. Say import fs from fs. With all these libraries in place, now let's upload our files. The first file we'll upload is the text file that is used to test an openai assistance model. That is our assistant_queries.txt file. To begin, first let's create an async function called main.
>
> **[5:22](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=322)** This is the function that we'll run when we run our file. All the code that is going to be used to upload our files is going to be written inside this main function. Inside the function, let's create a variable called file_upload_response. This variable will then be set to the value of our API call. We start with the await keyword because we are going to be making an asynchronous request. Next, we'll call our openai library and call the files object on the library. The files object is where all the functions and properties for the openai files API reside. To upload a file, we then call the create method on this object and open its braces. The create method on the files object takes in a request object. The request object will take in two main parameters. First is the file we need to upload. And that will be set using a file property. This property will be set to the read stream of the file that we want to upload. So, let's do that using the FS module that we imported from the Node.js standard library. So, we call the create read stream method on the FS module and pass it the file we want to upload. This file is going to be our assistant_queries.txt file.
>
> **[7:01](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=421)** Now that we have our file logged in, the next parameter that is to be set is called the purpose property. But first, let me collapse the files window so that we can have more room. Good. Like I earlier said, the next parameter we're going to be setting is the purpose property. This property defines the function of the file that we are about to upload and also affects the format of the file we are uploading. For example, if you are uploading for the purpose of training, or testing an openai assistant, this parameter can accept both text files and JSON-L files. However, if the purpose is to fine-tune a model, which we are going to be seeing later, this parameter only accepts JSON-L files at the moment. This current upload is for the assistant's purpose. So, let's go ahead and set the value to a string, and that string is going to be assistants. The purpose property comes with a set of standard values, which are assistants, which we're currently using, and fine-tune, which we're going to be using much later. With the request set up in place, let us log the response to our console. To do that, we say console.log file_upload.response.
>
> **[8:20](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=500)** Finally, let's make sure that we run this function by calling it after the definition. So, come down here and call the main function. Perfect. Now, before we run this code, there's one little change we need to do, and that will be in our package.json file. So, let's go into package.json. Currently, our main file is set to this index.js file, which doesn't exist in our project. So, let's change that to upload_files.js. We'll also be adding a type property and be setting it to model. Good. This is to ensure that all our imports work and our files run correctly. So, enough coding. Let's take this out for a run. Now back at the terminal at the root of the project. To run the code that we just wrote that is going to upload our assistant_queries.txt file, let's run the command, node upload_files.js. To upload our file, let's hit enter, wait for the request, and boom. Yup, our file has been successfully uploaded. As you can see, the response returns an object describing the file that we just uploaded. Here you can see the actual file name, which is assistant_queries.txt. There is a file ID, which we're going to be making use of later. And other useful information like the size in bytes, status,
>
> **[9:54](https://www.linkedin.com/learning/openai-api-working-with-files/uploading-files?u=76281980&t=594)** and the purpose that we set. Do take note of this file ID, as we'll be using it to retrieve our file in a coming video. But in this video, we have successfully uploaded a file to our openai account. Aside this response as a confirmation that our file has been uploaded, you can also view your files on your openai dashboard. Here on the openai dashboard, if we click the files link on the side menu, you see a page that loads up and now we have our assistant_queries.txt file already uploaded. You can click this file to see more details about the file, which is displayed here on the right-hand side. This file is now available on our account and can be accessed across different projects on our openai account. In the next video, we will learn how we can query this single file from our account using the openai files API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (5), [Node.js](../../Skills/Web%20Development/Node.js.md) (3), [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1)
> **File Paths:** assistant_queries.txt (6), node.js (3), upload_files.js (3), openaiconfig.js (2), package.json (2)
> **Env Vars:** api (15), json (3)
> **Code Identifiers:** assistant_queries (6), openaiconfig (4), upload_files (4), file_upload_response (1), file_upload (1)
> **CLI Commands:** node (4), make (1)
> **Definitions:** is a  (4), is called (1)
> **Prerequisites:** set up (3)
> **Cross-References:** in the next (1)

#### [Query a file](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=0)** - [Instructor] Now that we have uploaded the file, let's see how we can query the file using the file's API. From our previous upload, a file ID was returned in our file upload response. In this video, we'll be using that file ID to retrieve the file information. Now, just in case you have cleared your console and you can no longer see your file ID, you can also retrieve your file ID from your OpenAI dashboard. Here on the Open AI dashboard, to get your file ID, make sure that you have selected your file. Once you selected it, your file information displays here on the right and you can hover on your file ID and click to copy it. Now we have our file ID to use in our code. So let's go back to VS Code. To begin writing the code to help us retrieve our file, let's start by creating a file with the name retrieve_file.js. Go to side menu, retrieve_file.js. Inside this file, we'll be importing our OpenAI configuration and creating our main function that will be called when we run the file. So let's go ahead and do that. With our scaffold in place, we can now add our file retrieving function within this main function. To begin, let's create a variable for the request and this variable will be set to our API request to be made using the OpenAI instance. As you can see, we start the request with our await keyword as we're making an asynchronous request
>
> **[1:33](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=93)** and we will then call the files object on the OpenAI instance. To retrieve a file, you call the retrieve function on the file's object, so say .retrieve. The retrieve function takes a single argument, which will be the ID of the file you want to retrieve. Remember the file ID from the file upload request? Yup, that is what goes in here. So within the retrieve braces, inside the string, let us paste in our file ID. Perfect. I'm going to collapse the files window so that we can have more room to see our code. And finally, let us log the retrieve file to our console. Now that we have all our code in place, including the call to the main function, let's run this code in our terminal. Back in the terminal, we run our code by typing the command node retrieve_file.js and now let's hit Enter to run the code. Once the API call completes, the response returns what is known as a file object, which represents a document that has been uploaded to your OpenAI account. Similar to what we saw when we uploaded our file, this object contains properties describing the file that was uploaded. The object property describes the object type, which in the case of the file's API is always the value file. The ID property is the file's unique identifier, which can be referenced in API endpoints.
>
> **[3:08](https://www.linkedin.com/learning/openai-api-working-with-files/query-a-file?u=76281980&t=188)** The purpose property describes the intended purpose of the file, while the filename property is the name of the uploaded file, which is the same as its name on your local machine. The bytes property tells you the size of the file in bytes. The created_at property is the Unix timestamp in seconds for when the file was created. And lastly, the status and the status_details properties represent the current status of the file and details on why a [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) training file failed validation respectively. According to the OpenAI documentation, the last two properties that is status and status_details will soon be deprecated. In the next video, we'll demonstrate how we can list all the files that have been uploaded to our OpenAI account using the files API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1)
> **Code Identifiers:** retrieve_file (3), status_details (2), created_at (1)
> **Env Vars:** api (6)
> **File Paths:** retrieve_file.js (3)
> **Tools:** terminal (2), vs code (1)
> **CLI Commands:** make (1), node (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** go to (1)

#### [Listing files](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=0)** - [Instructor] In this video, we'll demonstrate how to list all the files we have uploaded to our OpenAI account. So far in this course we have only uploaded one file, so to make things more interesting, let's upload another file. This time we'll be uploading our JSONL file that is meant for training a base model using the fine-tuning API. So let's go back to our upload_files.js file to upload our second file. Here, we only need to change two items in the parameters passed into our request object. First, is the file we are referencing for upload. We're currently referencing the assistant_queries.txt file. So let's change this to the spanish_translated_sample_file.jsonl file. First, let's collapse this, and we'll say spanish_translated_sample_file.jsonl,
>
> **[1:02](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=62)** which is the name of our file, meant for training a base model using the fine-tuning API. The next thing to change is our upload purpose. Currently we're uploading for the purpose of assistants, but this file is for a [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) operation, so we'll be changing the purpose from assistants to fine-tune, and we are done. Let's go ahead and run this code to upload our JSONL file. Back in our terminal, let's run the command node upload_files.js to run the code and upload our training file. Press Enter, and our file is successfully uploaded. From the file object returned, we can see the details and confirm that this is indeed the JSONL file. Looking at the file name returned, we now have two files uploaded, so let's go ahead and list our files. Back in VS Code, let's create a new file with the name list_files.js. Inside this file, let us once again write our configuration import and main function definition. With our base scaffold once again in place, we can now write the code to list our files. Let's start by creating a variable named uploadedFiles and set it to our request. On the files object, to list our files, we will need to call the list function. The list function according to its name, lists all the file
>
> **[2:36](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=156)** that we have uploaded to our OpenAI account. Now let's log the files returned to our console. Once the file is saved, and make sure you're calling the main function, we can now head over to our terminal to run this piece of code. Now back in our terminal, let's list our files by running the code node list_files.js. With that in place, let's hit Enter and wait for the API request to be complete. Oh my, as we can see, this returns a complete FilesObjectPage. So much data and [Metadata](../../Skills/Web%20Development/Metadata.md) in here, but the property we're most interested in is the data property. So let's scroll down to see that. And yep, we have it right here. The data property is a collection of all our file objects. This is returned as an array of file objects, and as we can see, we have the two files that we have uploaded, the fine tuning file and the assistants file. These are all the files returned by the list function on the files object. The list function can also take an optional object where we can filter the files by the purpose. Let's check this out. So currently we have uploaded two files, one for the assistants and one for fine tuning. So let's see how we can return only the files that have been uploaded for the purpose of assistants. To do that, we pass an object into our list function, we set the purpose property, and we set this to assistants.
>
> **[4:11](https://www.linkedin.com/learning/openai-api-working-with-files/listing-files?u=76281980&t=251)** Good. Now let's save the file and run it in our terminal. Back in the terminal. Once again, let's run node list_files. Press Enter, and observe what is returned. Now we see the data property returned, and if you look closely, you'll see that only the files, or the only file that we've uploaded for the assistants, is returned. This no longer returns the file that we uploaded for fine tuning purposes. How cool is that? Now that we have demonstrated how to upload files, query a file, and list files, in the next video, we will learn how to delete a file. This is very important for cleanup work or removing any wrong or corrupted file. See you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Code Identifiers:** list_files (3), upload_files (2), spanish_translated_sample_file (2), assistant_queries (1), uploadedfiles (1)
> **Env Vars:** jsonl (3), api (3)
> **Tools:** terminal (5), vs code (1)
> **File Paths:** upload_files.js (2), list_files.js (2), assistant_queries.txt (1)
> **CLI Commands:** node (3), make (2)
> **Cross-References:** in the next (2), go back to (1)
> **UI Navigation:** scroll down (1)

#### [Deleting files](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=0)** - [Instructor] Now that we have uploaded and also retrieved our file data using the API, let's demonstrate how we can delete files that we no longer need using the API. Right now we currently have two files uploaded to our account, the Spanish translated file and the assistant queries file. For this demo we're going to be uploading a new file just for the purpose of deleting it. Back in VS Code I have added a new file with the name testfile.txt. This file simply contains over 50,000 lines of the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) test file content. We're going to be uploading this file, then later delete it using the OpenAI files API. To upload the file, let's go into our upload underscore file.js file. Let's pull this to the side and then we'll need to change the file parameter and the purpose parameter. So let's do that. First, let's change this file, the file we're referencing to say test file.txt and we'll change this back to assistance. We can now run this file in order to upload our test file. Back in the terminal, let's run our upload file. Our upload response is back. And as you can see, we have successfully uploaded the test file.txt. Back in our dashboard, if we refresh the page, we can now see test file.txt in our list of uploaded files. Now let's go back to VS Code to see
>
> **[1:33](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=93)** how we can delete this file using the OpenAI files API. Back in VS code, let's go back to our test file.txt. So let's assume that we uploaded this file by mistake, or we later realize that we no longer need it, or the file was in the wrong format, or just contains the wrong content. The file's API gives us the ability to delete the file, to write the code that is going to make use of the API to delete this file, let's create a new file and let's call it delete underscore file.js. Inside the file, let's begin by creating our usual scaffold, which involves importing the OpenAI configuration and adding the main function. With our scaffold in place, now let's write the code that helps delete our file. We start by creating a variable called deleted file set to our request, which is in place. We then call the del function on our files object, the del function, which will help us delete our file, takes in one argument, which is the ID of the file we want to delete. So let's get the ID of the file from the previous upload. We can either copy that from our terminal or from the dashboard. Just going to copy it from the dashboard. Here in the dashboard, let's click our file and over on the file ID and click to copy it, now back in VS Code. First I'll put this aside, then let's open a string and paste our file ID.
>
> **[3:09](https://www.linkedin.com/learning/openai-api-working-with-files/deleting-files?u=76281980&t=189)** With this in place, let us log our deleted file information to the console. Perfect. We can now run this file and see what happens when we delete a file. Back in the terminal. First I'm going to clear the screen and we're going to run node delete file.js let's hit enter to delete the test file. Once the API request is complete, it returns with a file deletion object with a file ID and a status confirming that the file has indeed been deleted. To further confirm that the file has been deleted, we can come to our OpenAI dashboard and refresh the page. Now as you can see, we no longer have our test file.txt file. The file has been removed from our OpenAI account, so we have successfully deleted the file from our account using the OpenAI files API. And now we know how to upload a file, retrieve a file, list all files or a subset of files, and also delete a file from our OpenAI account.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **File Paths:** file.txt (5), file.js (3), testfile.txt (1)
> **Env Vars:** api (8)
> **Tools:** vs code (4), terminal (3)
> **CLI Commands:** make (1), node (1)
> **Cross-References:** go back to (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-working-with-files/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you have successfully completed this course on working with the OpenAI files API. This course is a part of a full series on different parts of the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md). So I'll advise that you check out other OpenAI courses in the series to get a complete knowledge of all the offerings contained in the OpenAI API Suite of features. Two other courses that I'll be recommending are Morten Rand-Hendriksen's courses on "Fine-Tuning Your Own GPT Model" and "Building Assistants" using the OpenAI API. Both courses are available here on the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning Library. These courses will further expand your knowledge on how you can apply what you have gained in this course to building AI tools for real world use cases, and also trading AI models to suit your use case. I am also open to answering all your questions regarding this course, so feel free to follow me and shoot me a message on my socials. Thanks for joining me on this incredible journey, learning about the OpenAI Files API, and I hope you add a great time as I did making this course. It's now time to go build some awesome stuff. Happy coding.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Env Vars:** api (5), gpt (1)
> **CLI Commands:** go build (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Fikayo Adepoju](../../Instructors/Artificial%20Intelligence%20(AI)/Fikayo%20Adepoju.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/openai-api-working-with-files-4556031)

## Skills Covered

- OpenAI API
- API Development
- OpenAI Products
- Artificial Intelligence (AI)

## Path Context

### In [Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)
← [Openai Api Introduction](Openai%20Api%20Introduction.md) | **2 of 10** | [OpenAI API- Function Calling (2023)](OpenAI%20API-%20Function%20Calling%20(2023).md) →

## Appears In

- [Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)

## Related Courses

_Courses sharing skills:_

- [Openai Api Introduction](Openai%20Api%20Introduction.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Code Interpreter and Advanced Data Analysis](OpenAI%20API-%20Code%20Interpreter%20and%20Advanced%20Data%20Analysis.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Moderation](OpenAI%20API-%20Moderation.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Speech](OpenAI%20API-%20Speech.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API
- [OpenAI API- Vision](OpenAI%20API-%20Vision.md) — Artificial Intelligence (AI), OpenAI Products, OpenAI API

---

[↑ Back to top](#)