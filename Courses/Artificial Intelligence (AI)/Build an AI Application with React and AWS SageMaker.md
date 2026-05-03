---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: build-an-ai-application-with-react-and-aws-sagemaker
url: "https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker"
duration_minutes: 72
duration: 1h 12m
level: Intermediate
updated: 4/19/2024
learners: 4435
skills:
  - AI Software Development
  - React.js
  - Artificial Intelligence (AI)
  - AWS SageMaker
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG9K5NjptA6Pg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713547493798?e=2147483647&amp;v=beta&amp;t=kubxnvYjOyWeMn1vJfzqieRe2gzv-a7KWxwmaCfa_KA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
prev_courses:
  - '[[Integrating Generative AI into JavaScript Web Projects]]'
next_courses:
  - '[[Build with AI- Beyond Pair Programming with AI]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":7,"total":10,"prev":"Integrating Generative AI into JavaScript Web Projects","next":"Build with AI- Beyond Pair Programming with AI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/ai-software-development
  - skill/react-js
  - skill/artificial-intelligence-ai
  - skill/aws-sagemaker
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20an%20AI%20Application%20with%20React%20and%20AWS%20SageMaker.md)

![Build an AI Application with React and AWS SageMaker](https://media.licdn.com/dms/image/v2/D560DAQG9K5NjptA6Pg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713547493798?e=2147483647&amp;v=beta&amp;t=kubxnvYjOyWeMn1vJfzqieRe2gzv-a7KWxwmaCfa_KA)

# Build an AI Application with React and AWS SageMaker

> When you want a lot more control over your data, but don't want to manage machine learning tools locally, AWS SageMaker can provide the bridge you need. In this course, Emmanuel Henri shows you how to train SageMaker on your data, tune the results, and then connect it to a React-based application for delivery to your users. Emmanuel takes you through the process step by step, from the initial setu

> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker) | 1h 12m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Build an AI application with React and SageMaker](#build-an-ai-application-with-react-and-sagemaker)
  - [Course prerequisites](#course-prerequisites)
- [**1. Introduction and Setup**](#1-introduction-and-setup) (4 videos)
  - [Basics of machine learning](#basics-of-machine-learning)
  - [Introduction to SageMaker](#introduction-to-sagemaker)
  - [AWS SageMaker setup](#aws-sagemaker-setup)
  - [Initializing the React project](#initializing-the-react-project)
- [**2. Feature Engineering**](#2-feature-engineering) (3 videos)
  - [Introduction to SageMaker Data Wrangler](#introduction-to-sagemaker-data-wrangler)
  - [Data cleaning and processing with Data Wrangler](#data-cleaning-and-processing-with-data-wrangler)
  - [Feature engineering and transforming data](#feature-engineering-and-transforming-data)
- [**3. Training and Deployment**](#3-training-and-deployment) (4 videos)
  - [Overview of algorithms and the training process](#overview-of-algorithms-and-the-training-process)
  - [Train the model with Autopilot](#train-the-model-with-autopilot)
  - [Review models and deploy](#review-models-and-deploy)
  - [Predict and clean up resources](#predict-and-clean-up-resources)
- [**4. React Front End**](#4-react-front-end) (4 videos)
  - [Base app component](#base-app-component)
  - [Form component](#form-component)
  - [Results component](#results-component)
  - [Finish results component](#finish-results-component)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue learning SageMaker](#continue-learning-sagemaker)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build an AI application with React and SageMaker](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/build-an-ai-application-with-react-and-sagemaker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/build-an-ai-application-with-react-and-sagemaker?u=76281980&t=0)** - [Emmanuel] Have you ever been looking to build a project 2 where you'd like to create a front end in [[React.js|React]] 3 that leverages SageMaker for machine learning project, 4 all the meanwhile, you'd like to learn 5 the basics of SageMaker? 6 If you've answered yes to any of these questions, 7 you've come to the right place. 8 In this course, we'll explore 9 how these two can be integrated in a full project. 10 First, we'll walk through the initial setup of our project. 11 Then we'll explore the front end application with React 12 and build the components required. 13 Next, start to explore how we'll build our ML model 14 with working with our data for training purposes. 15 Then we'll train and tune our model in SageMaker. 16 And finally, we'll deploy our model 17 and connect the endpoint to our application. 18 Hi, I'm Manny Henri, 19 and I've been working with React 20 since it was introduced to the market, 21 and built a few projects in SageMaker for ML purposes. 22 So if you're ready to learn about building an application 23 leveraging machine learning with React and SageMaker, 24 fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (4)
> **Versions:** react 3 (1), react 12 (1), react 20 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [emmanuel] (1)

#### [Course prerequisites](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=0)** - [Instructor] This course will teach the basics of SageMaker and ML practices. So if you come in with no prior experience with SageMaker, we'll cover everything you need to know. However, experience with [[React.js|React]] is a must, as we won't cover the basics of this framework as we build a front end. You can follow along as I write the code, but it's strongly suggested to have some experience with React. You also need to have an AWS account in order to use SageMaker. As you'll see, I'm running on a Mac, but you can follow along on a PC as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Basics of machine learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=0)** - [Presenter] Machine learning is a subset of [[Artificial Intelligence (AI)|artificial intelligence]] that enables computers to learn from data, identify patterns, and make decisions with minimal human intervention. From voice assistance to self-driving cars, machine learning is everywhere. The concept of machine learning has been around since the mid 20th century, involving from simple pattern recognition to complex [[Algorithms]] capable of learning and adapting. There are three primary types of machine learning: [[Supervised Learning]], where the model learns from labeled data; unsupervised learning where it discovers patterns in unlabeled data; and [[Reinforcement Learning]] where it learns by trial and error to achieve a specific goal. For example, we'll use to provide learning in this course. The machine learning process involves several steps: collecting data, preparing that data, choosing a model, training the model, evaluating its performance, and then tuning and deploying it. We'll do all these steps in this course. In short, these are the basics of machine learning, and we'll explore all these elements as we go through the course and build a project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Algorithms]] (1), [[Supervised Learning]] (1), [[Reinforcement Learning]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### [Introduction to SageMaker](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=0)** - [Instructor] Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly. Amazon SageMaker presents a range of benefits compared to undertaking machine learning projects on a personal computer. Key among these is the streamlining of the training and deployment processes. SageMaker offers a suite of powerful tools designed to efficient [[Data Preparation]], which is often the time consuming steps in machine learning. Additionally, it's deployment capabilities are robust and user-friendly. By utilizing this comprehensive service, you can significantly reduce the time and effort typically required for machine learning task. SageMaker not only accelerates the development cycle, but also enhances the overall effectiveness and [[Scalability]] of your machine learning projects. SageMaker is designed for users of all skill levels, from beginners in machine learning to experienced data scientists. It handles much of the complexity of machine learning, allowing users to focus more on the problem at hand rather than the underlying infrastructure and mechanics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[Scalability]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [AWS SageMaker setup](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=0)** - [Instructor] Okay, so now we need to properly set up SageMaker. As a first step, you need an AWS account. If you don't have one, please go ahead and create your AWS account and then log in as you see on my screen. So let's get started on setting up the elements we need to work on our projects with SageMaker. So the first thing you're going to do is click on the Services here, 'cause as you can see, I already have SageMaker open on my Recently visited. But you can find it either by searching or clicking on Services, and then finding SageMaker. If you can't find it in the elements that you see here, you can just simply do SageMaker and then click on SageMaker here. Once you're here, what you need to do is click on Studio. And follow the instructions by Create a SageMaker domain first. That's the first thing you need to do. And follow the Set up. If your steps are a bit different than mine because I have some things already set up in my system, just follow the steps or look into the documentation. But it should be fairly similar to what I'm using here. So I would use the easy setup option. Right now, it's preparing your domain. Okay, so once your domain is ready, what you can do is go back to Studio here and select the user that you want to go ahead and Open Studio. Click on Open Studio. And now you're straight into Studio.
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=95)** So once you're ready, all you have to do is open JupyterLab, but we're going to do that once we get to the chapter, once we start working on our ML. So this is pretty much what you needed to do to set up. Let's move on.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (4), setup (1)
> **CLI Commands:** aws (2), find (2)
> **UI Navigation:** click on (3), select the (1)
> **Env Vars:** aws (2)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Initializing the React project](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980&t=0)** - [Instructor] Okay, so now what we're going to do 2 is create our base project for [[React.js|React]], 3 the project that's going to be our front end, 4 and calling into the endpoint for SageMaker. 5 So what I'm going to use is Vite as the base of my project. 6 I used to leverage Create React App in the past, 7 but now this is no longer being maintained. 8 And there's several options. 9 There's [[Remix]], there's [[Next.js]]. I personally prefer Vite. 10 You can use whatever you want to create your React project 11 as long as you're using one of the latest frameworks. 12 So I'm going to open my terminal to do this 13 and I'm going to go on my desktop 14 and then I'm going to create the project. 15 So how you create a project with Vite is [[npm]] 16 create vite@latest, 17 and then you name the project. 18 So I'm going to call this mlreact. 19 And then yes, you say yes to this one. 20 We're going to use React. 21 So if you want to use something else 22 for the front end, feel free to do so. 23 But I'm going to use React. 24 I'm going to use [[JavaScript]] for this one. 25 And that's it. 26 So now what you need to do 27 is actually get into the folder that you just created 28 and then you need to do the npm install, 29 'cause it doesn't do the installation 30 of all the dependencies automatically. 31 But it's going to do it now. 32 Okay, so I'm going to clear my terminal 33 and then what I'm going to do to run the project, 34
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980&t=94)** it's npm run dev. 35 And then you can check directly on your browser, open link. 36 And this is the project. 37 So if you want to see what it looks like, 38 you can actually drop this into your favorite editor. 39 I'm going to turn this off, close this terminal, 40 and drag and drop into VS Code. 41 And you're going to see the project. 42 So basically the main files 43 that you're used to are pretty similar. 44 So you're going to have your app.jsx, main.jsx, 45 the CSS files 46 and all your static assets are in the assets here. 47 And that's how Vite actually compiles the code. 48 So if you've never worked with Vite, 49 the main public files are here. 50 And basically if you want to take a look at 51 what the Vite configuration is, 52 this is where you see all the details, 53 but we're not going to play into that. 54 We're going to basically create our components like usual 55 and leverage the typical React that we know well. 56 So this is basically the main project for the front end. 57 We'll keep working on this 58 for the remaining of this chapter. 59 So let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[npm]] (3), [[Remix]] (1), [[Next.js]] (1), [[JavaScript]] (1)
> **Tools:** terminal (3), vs code (1)
> **File Paths:** next.js (1), app.jsx (1), main.jsx (1)
> **CLI Commands:** npm (3)
> **Env Vars:** css (1)
> **UI Navigation:** drag and drop (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Feature Engineering

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to SageMaker Data Wrangler](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=0)** - [Instructor] When you do machine learning for the first time, it can be daunting. And with SageMaker Studio, it'll make the experience of creating your first model, a nice transition into the world of AI. So, let's start by exploring the interface we'll play with over this course. So let's start at the top left and in the middle you have roughly the same things. You can start an instance of any of these applications. For example, JupyterLab, which you also have here. It's an integrated application that allows users to create and manage Jupyter Notebooks, which are essential for running code, visualizing data, and documenting the machine learning process. Then, you have [[RStudio]]. This is for users who prefer R over [[Python (Programming Language)|Python]]. It's available for statistical computing and graphics. Then you have Canvas, which we're going to use today for example, for Data Wrangler. Canvas is a visual no code tool to build machine learning models by dragging and dropping datasets, components, and analysis modules. Then you have the Code Editor, which is here as well. And the Code Editor is basically an idea for writing and editing code within SageMaker. So, it's based on VS Code. And you have also the Studio Classic here, which allows you to do some other stuff outside of this package that we have in here. And in the middle you have roughly the same elements that I mentioned before. So, you can jumpstart your model with prebuilt ones
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=94)** or even automate the end-to-end process of building, training a new model. And we're going to use that when we start training our model. But what will spend the bulk of the course is on the left on this menu here. So for example, we're going to do the Data Wrangler steps in the next video. Okay, so the next step we're going to do is grab the data. So the data that I'm going for is from NOAA. So, National Centers for Environmental Information. And what we're going to do is go into the Service area and then into the Access area, and then scroll all the way down to Launch Data Access, Explore Datasets, and then you're going to scroll down. So, the one that you want is basically this one. The Global Historical Climatology Network - Daily. From that report, you're going to have data that comes from every weather station in the US. So, what you want to do is be more selective. So, what we're going to do first is go here and then Search Data. And then you can filter this by Data Type, which we don't have to because we're already in the GHCN Daily. You can filter by the actual county or a specific place, and even the actual date range. But what I'm going to do is just pick the first one on the top so I can give you an idea of what this is.
>
> **[3:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=190)** So basically here, I have the data coming from that international airport. And what I can do is click on preview if I want to see what this data looks like. So, let's go to a date that's more recent, 2020, month 01. And then click on Preview Data. So it's going to generate a PDF of what the data looks like. So right now, as you can see, we have temperatures, precipitation, evaporation, and soil temperature. What we want is the temperature max and min. So, maximum and minimum. If you want to build the application based on another type of data, then feel free to go ahead and do that. But I'm going to basically focus on the weather because what I want to do is to be able to predict the weather in the future based on the model that we're going to train with historical data with weather. So that's kind of the idea here for this specific project. So, the way you do this to have specific data so you don't have too much cleaning to do when we get to data Wrangler is go to Select. And then here I want a CSV, so I want the data. And then I want to Configure and Add. So here what I'm going to do is yes, include attributes. If you don't know what these things are, just click on them and make sure that you understand what these are. So, select Yes or No for data attributes
>
> **[4:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=283)** to be included in your order. Yes, I would say yes to that. Include station location. Do you want that? No. Station name? I don't need these things because what I'm going to do is simply assume that I live in that area and that I'd like to get predictions on the weather based on the area that I've selected. So, units either metric or standard. So, Fahrenheit is standard and Celsius is metric. And then, what's really important is you want to edit the data type that you're going to look for. So, you can filter them by type. I'm going to select None first, and then I'm going to ask for temperature and see what it offers me. So, daily maximum temperature of water. No, I want to see the average temperature on this one. Minimum temperature, and I want the maximum temperature. So, we may use one of those three for our AI and machine learning. So, everything else I don't want. So, I'm going to accept this as is. And you can see it. Average temperature, maximum temperature, and minimum temperature. So, we have these data types. And then what you could do is the data is from 1937 to 2024. So, that's going to give us a little bit more data to train our AI versus just the last 10 years.
>
> **[6:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=377)** Do whatever you want that makes more sense for you. And then, I'm going to Add Order To Cart, and then I Proceed to Cart. And what I want to do here is validate that I have the right data and the report that I'm asking here, and I don't need the station names and stuff. Okay, so then with my email, I'm going to submit that report and I'm going to receive it. Okay, so perfect. While the report is being generated, let's move on to the next video where we're going to start working within Data Wrangler.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[RStudio]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** click on (3), go to (2), scroll down (1)
> **Env Vars:** noaa (1), ghcn (1), pdf (1), csv (1)
> **CLI Commands:** make (2), python (1)
> **Analogies:** for example (3)
> **Cross-References:** in the next (1), next video (1)
> **Tools:** jupyter (1), vs code (1)
> **Definitions:** is a  (1)

#### [Data cleaning and processing with Data Wrangler](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=0)** - [Instructor] Now let's use the data we've gathered from the previous step and start using Data Wrangler to prep the data. So Data Wrangler is a tool within AWS that simplifies the process of [[Data Preparation]] for machine learning and it allows you to aggregate, explore, and prepare your data visually without writing code. So if we go to data here and we click on Data Wrangler, you're going to see here run in Canvas. So if you don't have Data Wrangler already open, you need to click on run in Canvas and let it go. And while this is happening, I'm going to also show you something about the data. So I have the data that I got from NOAA directly in [[Microsoft Excel|Excel]] here. So I don't know what happened with the average, it didn't give me anything, so there's no numbers here, so I'm going to basically use the max and the min. So I'm going to already clean that data because I don't want to use that, I'm not going to use that, and I'm going to delete those rows. So it's going to make the process of working with the data very, very simple. So the TMAX attribute, I'm going to delete that, this is not going to help, and I'm going to delete the TMIN_ATTRIBUTES. So it makes for a very, very clean set of data. The station, do we need it? Do we want it?
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=95)** If you had multiple regions and the region was very important, for example, you wanted to do the entire continental US for your data, and you're going to be specific in your prompt, let's say, what is going to be the minimum and the maximum temperature in Miami for next May, then this would be important, but in our case, it's not really important. I just want to predict the actual temperature for a specific date. That's it, we're going to keep it simple. So I'm going to delete that as well. So I just have three data sets here, so it's going to make it very easy to massage that data in Data Wrangler. So I'm going to save this so I can close this down. Now what I'm going to do is open in Canvas Data Wrangler, that's the next thing we're going to do. And the other thing that you want to do before you actually go into Data Wrangler, let me show you something else, is look for empty data. So there's going to be dates where you don't have data, you might want to remove that date, just so we have a training that is actually full of data. So I'm just going to filter these very quickly. So let's go and do a filter. And let's see, do we have any data that is blanked? So let's unselect all
>
> **[3:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=193)** and just select the ones that are blank. We don't have any dates on those, so we're good. Let's go on the other one here. Same thing, let's make sure that we don't have any empties on any date. We don't, okay, so we're good, so this data is good. Let's remove the filters. And I deleted one date, so I need to save the updated document and we're good. Okay, so I can close Excel and then come to here. So I'm going to create a data flow, and basically in this data flow, there's data sets that we can actually use here, but I'm not going to do that. So I'm going to import my data. That's the first thing I'm going to do. So I'm going to call this "Weather" and create,
>
> **[4:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=256)** and we're going to import the data. Yes, tabular. Then bring our CSV that we imported here. And it's basically validating the schema of the files. It's working with the data. Good. And we're going to click preview data. And as you can see, because we made it so easy, you see, TMAX, TMIN, because we cleaned it before, we have a very good data set here. So we're going to make some changes here to make it even better, but we have something that's good. Okay, so now what we're going to do, we're going to import data. Okay, so now that we have our data imported, which is actually clean, what we're going to do is move on to the next step in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Data Preparation]] (1)
> **Env Vars:** tmax (2), aws (1), noaa (1), tmin_attributes (1), csv (1)
> **CLI Commands:** make (5), aws (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Feature engineering and transforming data](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=0)** - [Instructor] [[Data Preparation]] is probably one of the most important step in creating your ML model. So, we'll keep working on our data in Data Wrangler. So, let's work on [[Feature Engineering]]. Just as an introduction, feature engineering in machine learning is the process of using domain knowledge to extract and select features. So, the features are characteristics, properties, or attributes from the raw data that makes the machine learning [[Algorithms]] work. It is a fundamental step in the data pre-processing phase and can greatly impact the performance of a model. The goal of feature engineering is to provide a set of informative, discriminative, and independent features that allows the learning algorithm to perform optimally. So, we have the data that we imported here, so I'm going to open that data and now you see the data source. If you double click on it, you're going to get back to the screen when you imported that. If you want to show the steps, if you're not seeing the steps, you can click here. So, we're going to do two things here. The first thing we're going to do is extract the year, the month, and the days from the date string so we have days and all these different information in separate columns as opposed to just one. We're also going to change the name of these here, so TMAX and TMIN doesn't mean anything so max temperature, minimum temperature is going to be the proper name.
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=94)** So, let's start with this one here. So, what I'm going to do is go to Add steps, and what I'm going to do is do some transformations on the first one. So, let's go ahead and do that, so Add step. What I'm going to do is do a custom formula here and whatever changes that you want to do, you can actually preview it first. So, whatever transformations you do, you don't have to make it permanent. So, custom formula and the formula to extract the day, year, and month from the single field here is as follows. So, you do extract and then what we're going to extract first is the year, and what is the actual column that we're going to use to do that is the DATE column. So, as I do this, if I do a preview, you're going to see what would be processed out of this. And this is basically what's going to happen, so we're going to have all the years that's going to be extracted from the date string. So, let's go ahead and add that. And now you have the extract from date, so we have all the years here. So, if we scroll down, you're going to see that we have all the years. We're going to do that again for the month and the day. So, I'm going to do that again. Same command, extract month from date. And you can preview again, you're going to see month 3 and so on, so forth.
>
> **[3:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=189)** And you can change the output column right away, so I'm going to call this month, I didn't do that earlier for the other one so I'm going to have to make a transformation on this one, so Add. And now you see we have month, all the months, and we're going to do this again one last time for day, extract("day", DATE), and then we're going to do day. And here's a quick note before we actually execute this. One thing that you need to understand is how we're going to ask the questions to AI is very important, and what are going to be the features here. What I mean by that is we need to make relations to that right away. So, if you're going to ask about months in these numbers here, and it's not going to be March, blah, blah, blah, you need to make sure that whatever you put as a feature represents the kind of questions that you're going to ask. So, you need to make those assumptions right away. Same thing with the day and the year. So, if you're saying, well, the question would be along the line of, on the month 03 of 2026, what will be the temperature, the minimum, or the maximum temperature? You're asking a question that's very much in line
>
> **[4:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=284)** with what we have here. Anyways, just a quick note for you. Okay, so we have extracted our stuff here. Now, we need to rename some of these things. So, what I'm going to do now is go into the Add step, and we're going to be going into the transform and find the Manage columns. So, what we need to do is go here and now we can drop the DATE here, like so we can drop this one, and now we're going to rename the other ones. We're basically redoing the same thing. So, Rename column, I'm going to select TMAX.
>
> **[5:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=338)** So, what we want to make sure here is that when we rename the columns, it's something that actually makes sense and we are consistent in the way we actually do this. So, right now we have TMIN, TMAX, we have month, day, and we're going to have to rename this one year. So, what we want to make sure here is that we have a common naming scheme. So, for example, for the max temperature, we could do something like max_temperature like this. And if we do this, this is the way we're doing it for every single one of them. So, if we do this, Min_temperature,
>
> **[6:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=387)** we're going to rename this one to year. There you go, so now we have Max_temperature, Min_temperature, year, month, and we should have days. If I close this, we have day here. Okay, so now we've cleaned our data, so we have our max_temperature, we have our min_temperature, we have a year, month, and date. So, now with all this, we can move on to the next step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (3), [[Data Preparation]] (1), [[Algorithms]] (1)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** tmax (3), date (3), tmin (2)
> **Code Identifiers:** max_temperature (2), min_temperature (1)
> **UI Navigation:** click on (1), go to (1), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Training and Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of algorithms and the training process](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=0)** - [Instructor] Before we move on to train our model, and especially with the fact we'll leverage Autopilot to do most of the legwork for us, you need to understand what is happening. So the process of training the model follows a few steps, which lucky for us, SageMaker will do, but here are the steps and what's happening. First, there's an algorithm selection. An appropriate ML algorithm is chosen based on the problem type, and we'll explore the most popular ones in a minute. Then there's model building. The selected algorithm is applied to the prepared data to build the model. This step includes configuring the algorithm with initial parameters, what we call hyperparameters. Then the model training is happening. During the training, the algorithm makes predictions on the training data over and over and over, and is corrected by a learning algorithm based on the difference between the predicted and actual results. Hyperparameter tuning, this is the process of adjusting the hyperparameters of an algorithm to find a combination that produces the best model performance. And then validation. The trained model's performance is evaluated using a separate dataset to fine-tune the model and prevent overfitting. As far as the algorithm is concerned, here are the popular ones. [[Linear Regression]]. This is used for regression tasks, predicting continuous values. So this is what we're going to use.
>
> **[1:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=93)** It's popular due to its simplicity and basis in statistical theory. [[Logistic Regression]], used for binary classification tasks. Yes, no predictions. It estimates a [[Probability]] that a given instance belongs to a particular class. Decision tree, used for both regression and classification. They model decisions and their possible consequences as a tree, which is intuitive and easy to visualize. We could also use this one for the weather one, but I'm going to go simple today and go for linear regression. Random forest, an ensemble learning method used for classification and regression. It builds multiple [[Decision Trees]] and merges them to get a more accurate and stable prediction. The next one is support vector machines. It's used for classification task. It finds the hyperplane that best divides a dataset into classes. Another one is gradient boosting machines. It's an ensemble technique used for both regression and classification. It builds models sequentially with each one correcting the errors of the previous model, often resulting in higher accuracy. [[Neural Networks]] used for wide range of task, classification, regression, pattern recognition, et cetera. Neural networks are considered [[Deep Learning]], particularly powerful for complex problems and large datasets, for example, image recognition. clustering [[Algorithms]] or K-Means,
>
> **[3:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=190)** used for unsupervised learning tasks, like segmenting data into groups, useful for discovering patterns or groupings and data without pre-label outcomes. [[Reinforcement Learning]] algorithm or Q-learning, used for [[Decision-Making]] problems where an agent learns to behave in an environment by performing actions and seeing the results. So these are some of the algorithms that are used in machine learning and deep learning. If you want to read more on these subjects, please do some research.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2), [[Neural Networks]] (2), [[Deep Learning]] (2), [[Algorithms]] (2), [[Logistic Regression]] (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Train the model with Autopilot](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=0)** - [Instructor] Using AutoML in [[AWS SageMaker]], specifically SageMaker Autopilot, allows you to automate the process of machine learning model development. Once you have prepared your data with Data Wrangler, you can use Autopilot to automatically build, train, and tune a machine learning model based on the data you provide. So let's go ahead and use it for our own training. So if you're not on this screen yet, what you could do is go back here and open Canvas and you're going to find probably something that looks like this. So what you can do is double click on your data flow that we started and then this is what you're seeing. So right now we have the source data, the initial data, and the transformations that we made to that data. What you could do is run a validation if you want, just to make sure everything is going well and you have all your data ready. And what you could do is click here at the end of your data, like so, and you're going to see the transform data here. What we could do here is create a model directly from Data Wrangler right here. So you can do this or you can go My Models and start your process there, but this is a simpler step here. Create model, and then it's going to say, well wait a minute, you didn't export that data yet before you create your model, so we need to do that. So we're going to export the data. I'm going to call this Weather_transformed like so.
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=95)** It's exporting. And then you can simply click on Create Model directly from here. So what I'm going to call this is weatherModel. Now you need to select what this is going to be the problem type. So this does basically everything for you. So you're not going to select your own algorithm and then do the [[Fine Tuning]] and all this. SageMaker will do it for you. What you have to select though is what is the type of analysis you want. So is this an image analysis, text, fine-tune foundation model? You can do that as well. So in most cases, it could be text analysis. You want to ask questions on specific texts. That would be it. You want to recognize something on an image, that would be the image analysis. In our case, we want to be able to predict future weather based on a date. So this would be what we select and then you just create your model. So what you need to do next is choose the column to predict. So what we're going to do is select the Max_temperature. So what you would do in both cases, if you wanted to have the min and the max, you would create a model for each. But what we're going to do is just do the max, so we're going to choose this, and it's going to basically show us the value distribution overall at this time.
>
> **[3:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=191)** So basically based on what we selected, the model type has been selected for us. So what we could do is either configure in the model to select something else if we want, or let it select it for us. I'm going to let it select it for us. And then when you're ready, what you could do is do a quick build or go ahead and do a standard build, which would take two to four hours. If you want to have something that's more accurate, you do the two to four hours. In my case, I'm going to do a quick build so I can actually finish the course and use that build for myself. But you can do a standard build if you want, grab a coffee, go and come back when it's done. So I'm going to go ahead and select Quick Build and it's going to do the actual building for us. Analyze and go ahead and do this. So what I'm going to do is leave that up and running and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[AWS SageMaker]] (1), [[Fine Tuning]] (1)
> **CLI Commands:** aws (1), find (1), make (1)
> **UI Navigation:** click on (2), select the (1)
> **Code Identifiers:** weathermodel (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### [Review models and deploy](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=0)** - [Instructor] Okay, so now we have the results of the training, and what I'm going to do now is explain what this screen is about. So if you look at it, right now, we have a percentage that the model would predict the correct max temperature 9.11% of the time. This is very low, so that means that requires more training. So if you're getting something similar, you probably are, it's because when you did the build and the training, you selected the quick build. So if you want to have better results, you need to train longer, you need to send more data to the model and the machine learning process. If you want to take a look at what the results are here, you have: What are the actual features that had the bigger impact on the training? So the min_temperature had the better impact on all this. You can take a look at some of the data here. So let's say the min impact was 58. You can see how much of an impact it had towards the training of the model here and so on so forth on the data. You can also take a look at the scoring. So the scoring is basically information on the actual results. So for example, here we have, if the model predicts 89, it is correct 13% of the time, and you have a lot more data on the individual labels here. So if we take a look at, let's say 62,
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=95)** the accuracy is 3.297. So the 9.11 is the average of all the scores here. And then you have advanced metrics that gives you average f1, average precision, and more information on how the model actually performs. So these are low numbers, they should all be higher, they should be around 70 to 80 to get some predictions that are actually more relevant. So this would require a lot more training for this one. Or what you could do is change the algorithm. We actually explore what are the different [[Algorithms]]. You could select a different algorithm, and retrain the model with a different algorithm, and see what the actual accuracy comes at the end. You can add a new version of the model if you want and select a different dataset if you want. Let's say, for example, we were selecting from a different station, from NOAA, then you can continue adding more and more information and maybe do an average for the whole country and build your model this way. So this is a non-coding approach to building your model. It works very well for people that don't know [[Python (Programming Language)|Python]], that don't know [[JavaScript]], and so on so forth. You can build it this way. So once you're satisfied with that result, clearly this is not a good result, but I need to show you how the [[Representational State Transfer (REST)|rest]] works. You can go to Predict. So predict basically allows you to do predictions in batch or test a single prediction if you want.
>
> **[3:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=192)** So in this case, if you want to test a single prediction, we could, for example, enter value. So the minimum temperature for this specific prediction, we could say, "Okay, so I'm going to send you a minimum value of 50 Fahrenheit." And then the year would be, for example, let's say 2025, month 5, and let's go for a different month, month 8 and day 8. And then what you could do is update the prediction. So based on this information, the max temperature would be... 72. So that's the new prediction based on the information that you've given. So the year has a big impact. The min temperature has a different impact. You can change this all you want. So let's go to 1975, and the minimum temperature is, let's say, 67. Let's change them on to two and then update the prediction. You would get 77. So again, these are all based on the data you fed. So as you remember, I selected a very specific weather station to do the training, but you could add models on top of each other and train them with different datasets or combine a lot more data together.
>
> **[4:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=286)** So focus on the dataset, maybe have different regions with the same data, feed that data, and then do the training this way. And that's how you go about this. So now that we have a model trained, let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Python (Programming Language)|Python]] (1), [[JavaScript]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (4)
> **Versions:** 9.11 (2), 3.297 (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** min_temperature (1)
> **Env Vars:** noaa (1)

#### [Predict and clean up resources](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=0)** - [Instructor] Okay, so now we'll focus on deploying that model, making it available for our application to send these data points, so the min temperature, the year, the month, and the day, and get some results back as we have here. You can also download predictions if you want to do batch predictions and basically do a quick job of predictions and download it, you can actually do that as well. Okay, so let's go to Deploy. So basically all you have to do to deploy is Create Deployment, and it's going to create it for you. You can basically select the Instance type if you want, Instance count, I'm going to make it as small as I can on this one because I'm going to turn it off as soon as we're done. So I'm going to make it medium, it's fine. Instance count, I would do one. You can change this all you want. Change the instant type if you want, and then Deploy. So once you're ready, you can actually view deployment. So we're going to click on View details, and if you want, you can actually view sample code. So let's say for example, you're in [[Python (Programming Language)|Python]], you can view the sample code from Python here. If you want to know more how to invoke the URL, you can click on here but it's fairly easy, and I'm going to show you once we actually implement the code
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=95)** in the front-end application. You can also test the deployment once it's ready. And we won't do that because we'll deploy it and use it in the application. So let it create the endpoint and then we'll do the code in the front-end application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** make (2), python (2)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Exercise Files:** sample code (2)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. React Front End

[↑ Back to Table of Contents](#table-of-contents)

#### [Base app component](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=0)** - [Instructor] Okay, so now that we have an endpoint and our model ready to go, we're going to start working on the front end side of things. So the first thing we're going to do is go in app.jsx. If you know where that file is, it is in the source folder right here. And we're going to close this and then we'll remove the logo things here, clean up all of this here, all the way down like so, remove that div and we're good to go. We're going to keep the useState here because we're going to set it up for a couple of things. So might as well start with this. So the first thing we're going to do is set up a date 'cause in our form we're going to need to send a date. So we're going to create that first. And then useState we're going to initialize it with an empty string. And we're going to repeat this for a min temperature 'cause we need a min temperature to enter into our form. So we're going to do that as well. MinTemp and then setMinTemp, useState. And then also as an empty string, we're going to also set a temperature, which we'll use, setTemperature. 'Cause the way we're going to do this is take from the form, the minimum temperature and the date,
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=95)** and then send this to our AI. Our AI is going to come back with basically the temperature for the max temperature. And then we're going to use this, update the state, and then the state will re-render the components for us. This is going to be null. And then let's do this again for a loading key. And this we're going to use for UI purposes and we're going to be making it false. Okay, then what we're going to do is go all the way down to the main component, and we're going to make this as a div, close this as a div at inside of our div we're going to have a form which we'll work on shortly. Inside of that form we're going to have an input and then we're going to have another input. We'll work on these over the next few videos. I'm just building the structure just so you guys understand what we're going to do here. And then we're going to have a button. And then below the form we're going to render in the card what is the max temperature. So we're going to do a p tag, which we'll call Max Temperature, and then we're going to fill it with something and it's going to be Fahrenheit.
>
> **[3:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=190)** Okay, so we have the structure of our form here, and what we're going to do is create a few functions here to handle the applications functions. So one is going to be called handleMinTempChange.
>
> **[3:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=210)** As we fill up the form, this is basically going to update the state as we fill up the form. SetMinTemp as we are updating our form,
>
> **[3:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=230)** we're going to do another one here. That's going to be the date change, handleDateChange, same thing. And except here, we're going to set the date. And then we're going to do a handleSubmit which we'll do in a future video. But I just want to enter the function here for now. This is going to be an async function, mostly because we're going to reach out to the endpoint, right? And we're going to have a try, catch error
>
> **[4:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=274)** and just console log something for now. Let's do the console.error. We'll finish that later, like so. And then put something in the try, console.log, date and minTemp. Okay, so we have our structure here. So we have the beginning of a form, which we'll continue working on. We have some events that we're able to click here that will work further in the next few videos. And also we're going to set the background, the CSS for a couple of things here to make it look better. All right, let's move on.

> [!info]- Semantic Content
>
> **Code Identifiers:** usestate (3), setmintemp (1), settemperature (1), handlemintempchange (1), handledatechange (1)
> **CLI Commands:** make (2)
> **File Paths:** app.jsx (1)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Form component](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=0)** - [Instructor] Okay, so let's continue working on the App component, and we're going to focus now on the form itself. So, what I'm going to do here is go all the way down to the form and I'm going to start putting some more meat in here. I'm also going to have the CSS open, so I'm going to click here and have App.css completely open here. And then I'm going to switch in between the App and the CSS to make sure that I have everything that I need from a look perspective as well. Okay, so let's go ahead and continue with that. I'm first going to add the class names, and as I add the class names I'm going to after go into the CSS and fill them up. So, I'm going to create a weather-container here, and then I'm going to do onSubmit for the form 'cause we need to submit. And we're going to handleSubmit, and className of weather-form. Then in the input I'm going to have a few things. So, this is going to be of type text, value, the initial value is going to be the date, and onChange I'm going to handleDateChange. And then what I'm going to do as well is do a placeholder just to make sure that people know what to enter here,
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=94)** Enter date, example 2027-01-25,
>
> **[1:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=103)** something along those lines like just so. And then I'm going to have a className for this too, weather-input, and I'm going to have the second input fairly similar. So, what I'm going to, just delete that, copy that, and paste it here. This is going to be type number. This one is going to be minTemp. This is going to be handleMinTempChange.
>
> **[2:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=145)** And as the placeholder, minimum temperature in Fahrenheit,
>
> **[2:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=156)** and it's the same here. Okay, so for the button I'm first going to do a type submit.
>
> **[2:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=168)** className, we're going to call this one weather-submit. We're going to disable it if we're loading. And this is why we created that loading here, and we're going to change it based on where we are with handleSubmit, we'll change that code fairly quickly. Okay, so we're also going to return and have a conditional here. So, basically if we are loading then say loading,
>
> **[3:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=208)** otherwise get temperature, okay? Before we go to the CSS let's finish our handleSubmit here. So, we're going to change that handleSubmit when we actually finish the connection at the end with our end point. For the time being we're just going to do these here. So, setLoading to true as it tries to await for a response here. And in the catch error we're going to do something along the line Error fetching temperature, and then add the error. And I have a typo here, let's make sure we fix that. And if that's the case setTemperature to null. And in the meantime let's just console.log the date and the minimum temperature. And then at the end setLoading to false when this is all complete. Okay, so now let's go into our CSS for what we've filled so far. So, we need to basically remove all of this. We don't need any of this here, so I'm going to literally delete all of this. The first one that we need is the weather-container. Then we need the weather-form,
>
> **[5:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=307)** and I'm going to do those CSS styles in the next video so this video doesn't go too long in the tooth. Weather-input, I'm just going to create the classes now and then we'll finish it up in the next video. And then weather-submit, then we need the weather-input.
>
> **[5:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=331)** And let's make sure it's a class. And then we have the weather-submit by itself. And we're going to create that class now, but we're actually going to use it later, the next video. It's the response-card. Okay, so we got all the classes created, we'll work on these in the next video.

> [!info]- Semantic Content
>
> **Code Identifiers:** handlesubmit (4), classname (3), setloading (2), onsubmit (1), onchange (1)
> **Env Vars:** css (6)
> **CLI Commands:** make (4)
> **Cross-References:** in the next (3), next video (1)
> **File Paths:** app.css (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Results component](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=0)** - [Instructor] Okay, so let's keep working on the App component, finish the Results card, and then finish the CSS before we actually connect everything with the end part. So what I'm going to do in this section here, I'm going to basically create a render method here. So I'm going to do this and if there's a temperature, then render the card. So basically, if we have a temperature in our state, so right here, if we have a temperature, then render this section here. And I'm going to cut this, put it in like so, and we're good to go. Okay, so in here, all I have to do is add the className, weather-response-card, and then here, I'm going to render the temperature with the maxTemp. So I have this key and the state that I can use to actually render the max temperature here. Okay, so we have everything that we need here. If you run the application right now, let's take a look. [[npm]] run dev. If we run the application here, we have these two fields and we have the Get Temperature. We still need to add some styles here and we're going to do that right now.
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=94)** So the first thing I want to do before anything else is in the exercise files, I took the liberty to add a nice picture for you here. And this picture is going to be the background for the actual application. So you can copy that one. So I'm going to put that picture in the public folder right here like so, and you can delete the vite.svg. And I'm going to call this weather to make it simpler, like so. And then you can close all this and go back to the code. And we can close this for now. And what we're going to do also is actually go into the index.css right here. And the one thing that I'm going to do in the body, and I'm going to put a comma [[HTML]] to make sure that we're fully covering, the screen is adding two items here, padding zero and margin zero. So I'm going to connect this here and then I'm going to go into the CSS of the app and we're going to start entering some stuff here. So display flex, flex-direction, we're going to go column, align-items, we're going to go center, justify-content center as well.
>
> **[3:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=189)** And then height, we're going to do a 100vh. Background, we're going to do a url. And we're going to do our weather picture that we just added to the public directory. And we're going to not repeat, we're going to center it and fixed. And background size, we're going to cover, okay. This is for the weather container. For the weather form, we're going to do a margin-bottom of 10 pixels, actually, not 10, but 20 pixels. And again, these are all my own personal styles, so feel free to play with this. This is basically to make it look good. You can literally pause a video, do your own styles, or just move to the next video to finish the whole thing. But this is just me adding the proper styles so it looks good. So if you want to follow along, go ahead. I'm basically adding, you know, some padding and some margins across the application and making sure everything is nice and centered and the buttons are going to look good when we actually render the whole thing. And as I do this, or you do this, you can actually save and take a look at the application live, how it looks. You're going to see the changes happening live as well.
>
> **[4:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=285)** So with width of 200 pixels for that. Now, the weather-submit, the same thing. I could actually done this in one line if I wanted to. And the weather-response-card, we're going to do a padding of 20 pixels. We're going to do a border-radius of 20 pixels again. We're going to do a background-color of rgba, 255, 255, 255, 0.8 for the alpha.
>
> **[5:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=329)** Width, fit-content. And then box-shadow, 0, 4px, 6px, rgba, 0, 0, 0, 0.1. And so 0, 0, 0, 0.1. Okay, so let's do a quick check, actually here, that's what I meant. Background-color. We're going to do a specific color for this one. This is my favorite one for this one, FYI. Actually, I added a zero. Okay, color, white. [[Cursor]], pointer. Okay. Just verifying that everything is in there, just making sure, margin-bottom. And then everything here, so if we go back and we take a look at our application now, it looks much better. As you can see, we have a nice background here. We have the Get Temperature. So if you enter an actual date, 2027-05-1, and then a number here, 52, Get Temperature, nothing's working right now because we haven't finalized everything, but the card will eventually appear here. So now we've completed the front end,
>
> **[7:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=422)** in terms of the looks. We have most of the functions in here. We're going to finalize everything in the last video where we connect the endpoint and we actually render the response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1), [[HTML]] (1)
> **CLI Commands:** make (3), npm (1)
> **Analogies:** picture (4)
> **Env Vars:** css (2), fyi (1)
> **Versions:** 0.1 (2), 0.8 (1)
> **Cross-References:** go back to (1), next video (1), in the last (1)
> **Code Identifiers:** classname (1), maxtemp (1)
> **File Paths:** index.css (1)

#### [Finish results component](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=0)** - [Instructor] Okay, so now we're going to finalize everything that we need to finish this project. So the first thing we're going to do is, actually start a backend that I've built for you. This course is not about building a backend. It's about building a front end that connects to the endpoint that we created on [[AWS SageMaker]]. The problem is, you can't really call an endpoint, like SageMaker, from a front end. You need to have a backend that's going to call into SageMaker and then externally have [[React.js|react]] call into the APIs of your backend. So what I've done is built a backend for you, and I'm going to show you what it looks like. It's actually in, let me just remove all this and I'm going to minimize this for a second. Okay, so if we go into the exercise files in the chapter four and the video four, you have a backend right here. So all you have to do is copy and paste this into another folder, do an [[npm]] install, which we'll do in a second, and then add a few customized things that relates to you and then you have your backend running. Let me go into the backend file here just to make sure you have everything that you need to get it started. So in the backend here, and let me just close this here, you have a few things that you have to set. First of all, you have to make sure that you have AWS install on your system because it's basically going to look
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=95)** for your credentials inside your system, and then your backend is going to reach out to SageMaker. So if you haven't done this already, you need to do something like AWS Configure, and then it's going to ask you for credentials and things like that. So you should have that done. Once you have that, you should be good to go. This, you shouldn't have to change if you followed along on this project because the local host 5173 is the actual port for the React application. I'm using cores here because I'm actually using the local hose on both. But in reality, you shouldn't have to do this if your backend is into an API somewhere else. The region, make sure you have the proper region for you. You need to specify this. I've put notes besides the elements that you need to validate and make sure that you have. And then the endpoint name is the actual name of the endpoint that we created on SageMaker. So if we go back to SageMaker, this is the actual name that you should put inside of that settings. Once you have that, you should be good to go or basically everything right here, this is what you need. Once you have all those settings here, you should be good to go. You don't need to change anything else on the server or the backend. So I'm going to close this and I'm going to start my backend. So the first thing you need to do if you haven't done so already, so to do an NPMI to install,
>
> **[3:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=189)** and once you've done that, you do an NPM start and your server should be running on port 3001. So now that we have that running, we should be good to go to continue our project right here. So I'm going to maximize the project and we will keep working on this here What we need to change in this project is the handle submit function here. So we're going to change a few things right here because now what we're doing is calling into the application that is running with the backend we just started. So the first thing we're going to do is do a few things on the try. I'm going to remove the console log here, and the first thing I'm going to do is, create a min temp float variable. And what I'm going to do is parse float min temp. The reason why we're doing this and prepping all of this here is because the SageMaker instance is actually taking CSV as the format, not [[JSON]], but CSV. So there's a couple of things that we need to do to format the information that we get from the front end, which is react, and then sending it to the backend. And this is basically what we're going to do now. So we're going to do a verification here where if is NaN mintemp float. So if it's not a number, throw an error.
>
> **[4:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=294)** Invalid temperature input if there's no date as well. Basically sending here throw as well, a new error, invalid date input. Now what we're going to do is take the date that we got from our input and we're going to split it to actually send it to the CSV format. Then we're going to create the CSV data
>
> **[5:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=344)** with the mintemp float. Then I'm going to pass the year, the month and then the day. And then we're going to make the call to our own backend that actually is fetching from SageMaker. So this is the backend that we've built internally, which is the http localhost 3001. This is the actual port and the post. And if you want to check it, you can go into the code, but that's the actual endpoint that we created. Temperature. The method is post. The body's going to be the CSV data with the headers, content type. We're specifying that this is text/csv.
>
> **[6:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=417)** If no response, it's okay. Throw an error. So basically, if we don't get a good response, throw an error, http error and then put the status of that error just to make sure we know what is happening here. And then the response.status. And then finally we're going to have a responsebody, return.
>
> **[7:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=456)** And then we're going to set the temperature with that information, which is max temp with the response body max temp, like so. Everything else we keep and we can save this. And let's make sure we have everything that we need at the top. We didn't change anything here. Nope. Okay, so let's test this. Let's make sure everything is working. So I'm going to open a new terminal in VS code and do an NPM install just to make sure everything is good, and then do an MPM run dev. And I'm going to go into my browser, refresh, make sure that I don't have any errors in here and then I'm going to test this. So basically what we need to do now is enter a date here. So as you can see, we have an example here. So I'm going to do, let's say for example, 2025, 08, 26. And then the temperature, the low temperature is going to be 67. Okay, I am getting a little error on line 51. So let's go here. Let's take a look at line 51. So this is where it breaks, and I forgot this here, okay? Anything that I should see here?
>
> **[9:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=552)** Oh, I've got another error here. Save this. Should be fine. CSV, everything is good. Okay, so let's go back here. Let's refresh this. Let's do again another date. 09, 12, 45. Get temperature and we have the max temperature. So basically what happened here is, we sent a date with a low temperature. It was split into a CSV file sent to our backend, and then our backend sent all that information to SageMaker, SageMaker return with a result, which is 72 Fahrenheit. So that completes our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[npm]] (3), [[AWS SageMaker]] (1), [[JSON]] (1)
> **Env Vars:** csv (7), aws (3), npm (3), api (1), npmi (1)
> **CLI Commands:** make (10), aws (3), npm (3)
> **Prerequisites:** install (4), make sure you have (2), you need to have (1), configure (1)
> **Tools:** terminal (1), vs code (1)
> **Ports:** port 3001 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue learning SageMaker](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980&t=0)** - [Instructor] This was a quick exploration of building a project that leverages SageMaker and [[React.js|React]] to give you a foundation in machine learning. Needless to say, there is a lot more to explore on the subject and simply doing a quick research in our library will allow you to deepen your knowledge on the subject. Do a simple search under machine learning, SageMaker, or even go into [[TensorFlow]] or Keras for other venues in the world of [[Artificial Intelligence (AI)|artificial intelligence]]. Finally, if you got lost a bit in the front end React project, there are tons of courses to give you the basics or more to be more efficient in React. Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[TensorFlow]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Emmanuel Henri]]

## Resources

- Exercise files available

## Skills Covered

- AI Software Development
- React.js
- Artificial Intelligence (AI)
- AWS SageMaker

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[Integrating Generative AI into JavaScript Web Projects]] | **7 of 10** | [[Build with AI- Beyond Pair Programming with AI]] →

## Appears In

- [[Building Generative AI Skills for Web Developers]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)