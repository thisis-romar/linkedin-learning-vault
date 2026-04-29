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
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20an%20AI%20Application%20with%20React%20and%20AWS%20SageMaker.md)

![Build an AI Application with React and AWS SageMaker](https://media.licdn.com/dms/image/v2/D560DAQG9K5NjptA6Pg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713547493798?e=2147483647&amp;v=beta&amp;t=kubxnvYjOyWeMn1vJfzqieRe2gzv-a7KWxwmaCfa_KA)

# Build an AI Application with React and AWS SageMaker

> When you want a lot more control over your data, but don't want to manage machine learning tools locally, AWS SageMaker can provide the bridge you need. In this course, Emmanuel Henri shows you how to train SageMaker on your data, tune the results, and then connect it to a React-based application for delivery to your users. Emmanuel takes you through the process step by step, from the initial setu

> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker) | 1h 12m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Introduction and Setup]]** (4 videos)
- **[[#2. Feature Engineering]]** (3 videos)
- **[[#3. Training and Deployment]]** (4 videos)
- **[[#4. React Front End]]** (4 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Build an AI application with React and SageMaker
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/build-an-ai-application-with-react-and-sagemaker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/build-an-ai-application-with-react-and-sagemaker?u=76281980&t=0)** - [Emmanuel] Have you ever been looking to build a project 2 where you'd like to create a front end in React 3 that leverages SageMaker for machine learning project, 4 all the meanwhile, you'd like to learn 5 the basics of SageMaker? 6 If you've answered yes to any of these questions, 7 you've come to the right place. 8 In this course, we'll explore 9 how these two can be integrated in a full project. 10 First, we'll walk through the initial setup of our project. 11 Then we'll explore the front end application with React 12 and build the components required. 13 Next, start to explore how we'll build our ML model 14 with working with our data for training purposes. 15 Then we'll train and tune our model in SageMaker. 16 And finally, we'll deploy our model 17 and connect the endpoint to our application. 18 Hi, I'm Manny Henri, 19
>
> **[0:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/build-an-ai-application-with-react-and-sagemaker?u=76281980&t=49)** and I've been working with React 20 since it was introduced to the market, 21 and built a few projects in SageMaker for ML purposes. 22 So if you're ready to learn about building an application 23 leveraging machine learning with React and SageMaker, 24 fire up your favorite editor and let's get started.

> [!info]- Semantic Content
>
> **Versions:** react 3 (1), react 12 (1), react 20 (1)
> **Code Keywords:** finally, (1), let (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [emmanuel] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=0)** - [Instructor] This course will teach the basics of SageMaker and ML practices.
>
> **[0:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=4)** So if you come in with no prior experience with SageMaker, we'll cover everything you need to know.
>
> **[0:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=10)** However, experience with React is a must, as we won't cover the basics of this framework as we build a front end.
>
> **[0:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=17)** You can follow along as I write the code, but it's strongly suggested to have some experience with React.
>
> **[0:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=22)** You also need to have an AWS account in order to use SageMaker.
>
> **[0:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/course-prerequisites?u=76281980&t=28)** As you'll see, I'm running on a Mac, but you can follow along on a PC as the tools work exactly the same on both platforms.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction and Setup

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Basics of machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=0)** - [Presenter] Machine learning is a subset of artificial intelligence that enables computers to learn from data, identify patterns, and make decisions with minimal human intervention.
>
> **[0:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=12)** From voice assistance to self-driving cars, machine learning is everywhere.
>
> **[0:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=17)** The concept of machine learning has been around since the mid 20th century, involving from simple pattern recognition to complex algorithms capable of learning and adapting.
>
> **[0:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=29)** There are three primary types of machine learning: supervised learning, where the model learns from labeled data; unsupervised learning where it discovers patterns in unlabeled data; and reinforcement learning where it learns by trial and error to achieve a specific goal.
>
> **[0:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=47)** For example, we'll use to provide learning in this course.
>
> **[0:51](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=51)** The machine learning process involves several steps: collecting data, preparing that data, choosing a model, training the model, evaluating its performance, and then tuning and deploying it.
>
> **[1:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=64)** We'll do all these steps in this course.
>
> **[1:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/basics-of-machine-learning?u=76281980&t=67)** In short, these are the basics of machine learning, and we'll explore all these elements as we go through the course and build a project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** self (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Introduction to SageMaker
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=0)** - [Instructor] Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly.
>
> **[0:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=12)** Amazon SageMaker presents a range of benefits compared to undertaking machine learning projects on a personal computer.
>
> **[0:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=20)** Key among these is the streamlining of the training and deployment processes.
>
> **[0:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=25)** SageMaker offers a suite of powerful tools designed to efficient data preparation, which is often the time consuming steps in machine learning.
>
> **[0:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=34)** Additionally, it's deployment capabilities are robust and user-friendly.
>
> **[0:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=40)** By utilizing this comprehensive service, you can significantly reduce the time and effort typically required for machine learning task.
>
> **[0:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=49)** SageMaker not only accelerates the development cycle, but also enhances the overall effectiveness and scalability of your machine learning projects.
>
> **[0:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=59)** SageMaker is designed for users of all skill levels, from beginners in machine learning to experienced data scientists.
>
> **[1:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker?u=76281980&t=66)** It handles much of the complexity of machine learning, allowing users to focus more on the problem at hand rather than the underlying infrastructure and mechanics.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### AWS SageMaker setup
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=0)** - [Instructor] Okay, so now we need to properly set up SageMaker.
>
> **[0:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=3)** As a first step, you need an AWS account.
>
> **[0:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=6)** If you don't have one, please go ahead and create your AWS account and then log in as you see on my screen.
>
> **[0:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=15)** So let's get started on setting up the elements we need to work on our projects with SageMaker.
>
> **[0:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=21)** So the first thing you're going to do is click on the Services here, 'cause as you can see, I already have SageMaker open on my Recently visited.
>
> **[0:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=30)** But you can find it either by searching or clicking on Services, and then finding SageMaker.
>
> **[0:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=36)** If you can't find it in the elements that you see here, you can just simply do SageMaker and then click on SageMaker here.
>
> **[0:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=45)** Once you're here, what you need to do is click on Studio.
>
> **[0:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=50)** And follow the instructions by Create a SageMaker domain first.
>
> **[0:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=55)** That's the first thing you need to do.
>
> **[0:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=57)** And follow the Set up.
>
> **[0:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=59)** If your steps are a bit different than mine because I have some things already set up in my system, just follow the steps or look into the documentation.
>
> **[1:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=68)** But it should be fairly similar to what I'm using here.
>
> **[1:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=71)** So I would use the easy setup option.
>
> **[1:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=75)** Right now, it's preparing your domain.
>
> **[1:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=79)** Okay, so once your domain is ready, what you can do is go back to Studio here and select the user that you want to go ahead and Open Studio.
>
> **[1:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=89)** Click on Open Studio.
>
> **[1:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=92)** And now you're straight into Studio.
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=95)** So once you're ready, all you have to do is open JupyterLab, but we're going to do that once we get to the chapter, once we start working on our ML.
>
> **[1:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=104)** So this is pretty much what you needed to do to set up.
>
> **[1:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/aws-sagemaker-setup?u=76281980&t=107)** Let's move on.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (4), setup (1)
> **CLI Commands:** aws (2), find (2)
> **UI Navigation:** click on (3), select the (1)
> **Code Keywords:** let (2)
> **Env Vars:** aws (2)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Analogies:** similar to (1)

#### Initializing the React project
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980&t=0)** - [Instructor] Okay, so now what we're going to do 2 is create our base project for React, 3 the project that's going to be our front end, 4 and calling into the endpoint for SageMaker. 5 So what I'm going to use is Vite as the base of my project. 6 I used to leverage Create React App in the past, 7 but now this is no longer being maintained. 8 And there's several options. 9 There's Remix, there's Next.js. I personally prefer Vite. 10 You can use whatever you want to create your React project 11 as long as you're using one of the latest frameworks. 12 So I'm going to open my terminal to do this 13 and I'm going to go on my desktop 14 and then I'm going to create the project. 15 So how you create a project with Vite is npm 16 create vite@latest, 17
>
> **[0:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980&t=50)** and then you name the project. 18 So I'm going to call this mlreact. 19 And then yes, you say yes to this one. 20 We're going to use React. 21 So if you want to use something else 22 for the front end, feel free to do so. 23 But I'm going to use React. 24 I'm going to use JavaScript for this one. 25 And that's it. 26 So now what you need to do 27 is actually get into the folder that you just created 28 and then you need to do the npm install, 29 'cause it doesn't do the installation 30 of all the dependencies automatically. 31 But it's going to do it now. 32 Okay, so I'm going to clear my terminal 33 and then what I'm going to do to run the project, 34 it's npm run dev. 35 And then you can check directly on your browser, open link. 36
>
> **[1:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980&t=104)** And this is the project. 37 So if you want to see what it looks like, 38 you can actually drop this into your favorite editor. 39 I'm going to turn this off, close this terminal, 40 and drag and drop into VS Code. 41 And you're going to see the project. 42 So basically the main files 43 that you're used to are pretty similar. 44 So you're going to have your app.jsx, main.jsx, 45 the CSS files 46 and all your static assets are in the assets here. 47 And that's how Vite actually compiles the code. 48 So if you've never worked with Vite, 49 the main public files are here. 50 And basically if you want to take a look at 51 what the Vite configuration is, 52 this is where you see all the details, 53
>
> **[2:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/initializing-the-react-project?u=76281980&t=153)** but we're not going to play into that. 54 We're going to basically create our components like usual 55 and leverage the typical React that we know well. 56 So this is basically the main project for the front end. 57 We'll keep working on this 58 for the remaining of this chapter. 59 So let's move on.

> [!info]- Semantic Content
>
> **Tools:** terminal (3), vs code (1)
> **File Paths:** next.js (1), app.jsx (1), main.jsx (1)
> **CLI Commands:** npm (3)
> **Code Keywords:** static (1), public (1), let (1)
> **Env Vars:** css (1)
> **UI Navigation:** drag and drop (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Feature Engineering

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Introduction to SageMaker Data Wrangler
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=0)** - [Instructor] When you do machine learning for the first time, it can be daunting.
>
> **[0:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=4)** And with SageMaker Studio, it'll make the experience of creating your first model, a nice transition into the world of AI.
>
> **[0:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=11)** So, let's start by exploring the interface we'll play with over this course.
>
> **[0:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=16)** So let's start at the top left and in the middle you have roughly the same things.
>
> **[0:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=22)** You can start an instance of any of these applications.
>
> **[0:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=25)** For example, JupyterLab, which you also have here.
>
> **[0:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=29)** It's an integrated application that allows users to create and manage Jupyter Notebooks, which are essential for running code, visualizing data, and documenting the machine learning process.
>
> **[0:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=41)** Then, you have RStudio.
>
> **[0:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=44)** This is for users who prefer R over Python.
>
> **[0:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=47)** It's available for statistical computing and graphics.
>
> **[0:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=52)** Then you have Canvas, which we're going to use today for example, for Data Wrangler.
>
> **[0:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=58)** Canvas is a visual no code tool to build machine learning models by dragging and dropping datasets, components, and analysis modules.
>
> **[1:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=67)** Then you have the Code Editor, which is here as well.
>
> **[1:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=71)** And the Code Editor is basically an idea for writing and editing code within SageMaker.
>
> **[1:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=76)** So, it's based on VS Code.
>
> **[1:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=78)** And you have also the Studio Classic here, which allows you to do some other stuff outside of this package that we have in here.
>
> **[1:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=87)** And in the middle you have roughly the same elements that I mentioned before.
>
> **[1:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=91)** So, you can jumpstart your model with prebuilt ones or even automate the end-to-end process of building, training a new model.
>
> **[1:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=99)** And we're going to use that when we start training our model.
>
> **[1:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=102)** But what will spend the bulk of the course is on the left on this menu here.
>
> **[1:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=107)** So for example, we're going to do the Data Wrangler steps in the next video.
>
> **[1:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=113)** Okay, so the next step we're going to do is grab the data.
>
> **[1:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=117)** So the data that I'm going for is from NOAA.
>
> **[2:01](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=121)** So, National Centers for Environmental Information.
>
> **[2:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=125)** And what we're going to do is go into the Service area and then into the Access area, and then scroll all the way down to Launch Data Access, Explore Datasets, and then you're going to scroll down.
>
> **[2:23](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=143)** So, the one that you want is basically this one.
>
> **[2:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=145)** The Global Historical Climatology Network - Daily.
>
> **[2:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=149)** From that report, you're going to have data that comes from every weather station in the US.
>
> **[2:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=157)** So, what you want to do is be more selective.
>
> **[2:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=160)** So, what we're going to do first is go here and then Search Data.
>
> **[2:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=166)** And then you can filter this by Data Type, which we don't have to because we're already in the GHCN Daily.
>
> **[2:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=173)** You can filter by the actual county or a specific place, and even the actual date range.
>
> **[3:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=182)** But what I'm going to do is just pick the first one on the top so I can give you an idea of what this is.
>
> **[3:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=190)** So basically here, I have the data coming from that international airport.
>
> **[3:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=195)** And what I can do is click on preview if I want to see what this data looks like.
>
> **[3:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=200)** So, let's go to a date that's more recent, 2020, month 01.
>
> **[3:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=206)** And then click on Preview Data.
>
> **[3:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=207)** So it's going to generate a PDF of what the data looks like.
>
> **[3:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=212)** So right now, as you can see, we have temperatures, precipitation, evaporation, and soil temperature.
>
> **[3:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=219)** What we want is the temperature max and min.
>
> **[3:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=224)** So, maximum and minimum.
>
> **[3:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=226)** If you want to build the application based on another type of data, then feel free to go ahead and do that.
>
> **[3:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=234)** But I'm going to basically focus on the weather because what I want to do is to be able to predict the weather in the future based on the model that we're going to train with historical data with weather.
>
> **[4:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=248)** So that's kind of the idea here for this specific project.
>
> **[4:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=253)** So, the way you do this to have specific data so you don't have too much cleaning to do when we get to data Wrangler is go to Select.
>
> **[4:23](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=263)** And then here I want a CSV, so I want the data.
>
> **[4:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=266)** And then I want to Configure and Add.
>
> **[4:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=270)** So here what I'm going to do is yes, include attributes.
>
> **[4:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=275)** If you don't know what these things are, just click on them and make sure that you understand what these are.
>
> **[4:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=281)** So, select Yes or No for data attributes to be included in your order.
>
> **[4:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=285)** Yes, I would say yes to that.
>
> **[4:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=287)** Include station location.
>
> **[4:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=288)** Do you want that? No.
>
> **[4:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=292)** Station name?
>
> **[4:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=293)** I don't need these things because what I'm going to do is simply assume that I live in that area and that I'd like to get predictions on the weather based on the area that I've selected.
>
> **[5:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=306)** So, units either metric or standard.
>
> **[5:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=308)** So, Fahrenheit is standard and Celsius is metric.
>
> **[5:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=312)** And then, what's really important is you want to edit the data type that you're going to look for.
>
> **[5:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=318)** So, you can filter them by type.
>
> **[5:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=321)** I'm going to select None first, and then I'm going to ask for temperature and see what it offers me.
>
> **[5:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=331)** So, daily maximum temperature of water.
>
> **[5:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=333)** No, I want to see the average temperature on this one.
>
> **[5:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=339)** Minimum temperature, and I want the maximum temperature.
>
> **[5:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=343)** So, we may use one of those three for our AI and machine learning.
>
> **[5:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=350)** So, everything else I don't want.
>
> **[5:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=354)** So, I'm going to accept this as is.
>
> **[5:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=357)** And you can see it.
>
> **[5:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=358)** Average temperature, maximum temperature, and minimum temperature.
>
> **[6:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=362)** So, we have these data types.
>
> **[6:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=364)** And then what you could do is the data is from 1937 to 2024.
>
> **[6:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=370)** So, that's going to give us a little bit more data to train our AI versus just the last 10 years.
>
> **[6:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=377)** Do whatever you want that makes more sense for you.
>
> **[6:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=380)** And then, I'm going to Add Order To Cart, and then I Proceed to Cart.
>
> **[6:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=387)** And what I want to do here is validate that I have the right data and the report that I'm asking here, and I don't need the station names and stuff.
>
> **[6:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=397)** Okay, so then with my email, I'm going to submit that report and I'm going to receive it.
>
> **[6:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=406)** Okay, so perfect.
>
> **[6:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/introduction-to-sagemaker-data-wrangler?u=76281980&t=407)** While the report is being generated, let's move on to the next video where we're going to start working within Data Wrangler.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1), type, (1), for. (1), type. (1)
> **UI Navigation:** click on (3), go to (2), scroll down (1)
> **Env Vars:** noaa (1), ghcn (1), pdf (1), csv (1)
> **CLI Commands:** make (2), python (1)
> **Analogies:** for example (3)
> **Cross-References:** in the next (1), next video (1)
> **Tools:** jupyter (1), vs code (1)
> **Definitions:** is a  (1)

#### Data cleaning and processing with Data Wrangler
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=0)** - [Instructor] Now let's use the data we've gathered from the previous step and start using Data Wrangler to prep the data.
>
> **[0:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=6)** So Data Wrangler is a tool within AWS that simplifies the process of data preparation for machine learning and it allows you to aggregate, explore, and prepare your data visually without writing code.
>
> **[0:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=20)** So if we go to data here and we click on Data Wrangler, you're going to see here run in Canvas.
>
> **[0:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=31)** So if you don't have Data Wrangler already open, you need to click on run in Canvas and let it go.
>
> **[0:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=38)** And while this is happening, I'm going to also show you something about the data.
>
> **[0:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=43)** So I have the data that I got from NOAA directly in Excel here.
>
> **[0:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=49)** So I don't know what happened with the average, it didn't give me anything, so there's no numbers here, so I'm going to basically use the max and the min.
>
> **[1:01](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=61)** So I'm going to already clean that data because I don't want to use that, I'm not going to use that, and I'm going to delete those rows.
>
> **[1:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=70)** So it's going to make the process of working with the data very, very simple.
>
> **[1:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=76)** So the TMAX attribute, I'm going to delete that, this is not going to help, and I'm going to delete the TMIN_ATTRIBUTES.
>
> **[1:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=86)** So it makes for a very, very clean set of data.
>
> **[1:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=92)** The station, do we need it? Do we want it?
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=95)** If you had multiple regions and the region was very important, for example, you wanted to do the entire continental US for your data, and you're going to be specific in your prompt, let's say, what is going to be the minimum and the maximum temperature in Miami for next May, then this would be important, but in our case, it's not really important.
>
> **[2:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=122)** I just want to predict the actual temperature for a specific date.
>
> **[2:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=128)** That's it, we're going to keep it simple.
>
> **[2:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=130)** So I'm going to delete that as well.
>
> **[2:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=133)** So I just have three data sets here, so it's going to make it very easy to massage that data in Data Wrangler.
>
> **[2:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=140)** So I'm going to save this so I can close this down.
>
> **[2:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=145)** Now what I'm going to do is open in Canvas Data Wrangler, that's the next thing we're going to do.
>
> **[2:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=154)** And the other thing that you want to do before you actually go into Data Wrangler, let me show you something else, is look for empty data.
>
> **[2:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=162)** So there's going to be dates where you don't have data, you might want to remove that date, just so we have a training that is actually full of data.
>
> **[2:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=173)** So I'm just going to filter these very quickly.
>
> **[2:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=179)** So let's go and do a filter.
>
> **[3:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=182)** And let's see, do we have any data that is blanked?
>
> **[3:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=189)** So let's unselect all and just select the ones that are blank.
>
> **[3:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=197)** We don't have any dates on those, so we're good.
>
> **[3:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=204)** Let's go on the other one here.
>
> **[3:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=208)** Same thing, let's make sure that we don't have any empties on any date.
>
> **[3:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=215)** We don't, okay, so we're good, so this data is good.
>
> **[3:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=219)** Let's remove the filters.
>
> **[3:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=222)** And I deleted one date, so I need to save the updated document and we're good.
>
> **[3:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=228)** Okay, so I can close Excel and then come to here.
>
> **[3:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=233)** So I'm going to create a data flow, and basically in this data flow, there's data sets that we can actually use here, but I'm not going to do that.
>
> **[4:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=243)** So I'm going to import my data.
>
> **[4:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=246)** That's the first thing I'm going to do.
>
> **[4:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=248)** So I'm going to call this "Weather" and create,
>
> **[4:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=256)** and we're going to import the data.
>
> **[4:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=260)** Yes, tabular.
>
> **[4:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=262)** Then bring our CSV that we imported here.
>
> **[4:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=268)** And it's basically validating the schema of the files.
>
> **[4:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=271)** It's working with the data.
>
> **[4:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=274)** Good.
>
> **[4:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=275)** And we're going to click preview data.
>
> **[4:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=279)** And as you can see, because we made it so easy, you see, TMAX, TMIN, because we cleaned it before, we have a very good data set here.
>
> **[4:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=290)** So we're going to make some changes here to make it even better, but we have something that's good.
>
> **[4:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=296)** Okay, so now what we're going to do, we're going to import data.
>
> **[5:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/data-cleaning-and-processing-with-wrangler?u=76281980&t=302)** Okay, so now that we have our data imported, which is actually clean, what we're going to do is move on to the next step in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), delete (4), case, (1), else, (1)
> **Env Vars:** tmax (2), aws (1), noaa (1), tmin_attributes (1), csv (1)
> **CLI Commands:** make (5), aws (1)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Feature engineering and transforming data
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=0)** - [Instructor] Data preparation is probably one of the most important step in creating your ML model.
>
> **[0:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=5)** So, we'll keep working on our data in Data Wrangler.
>
> **[0:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=8)** So, let's work on feature engineering.
>
> **[0:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=11)** Just as an introduction, feature engineering in machine learning is the process of using domain knowledge to extract and select features.
>
> **[0:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=21)** So, the features are characteristics, properties, or attributes from the raw data that makes the machine learning algorithms work.
>
> **[0:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=31)** It is a fundamental step in the data pre-processing phase and can greatly impact the performance of a model.
>
> **[0:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=38)** The goal of feature engineering is to provide a set of informative, discriminative, and independent features that allows the learning algorithm to perform optimally.
>
> **[0:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=49)** So, we have the data that we imported here, so I'm going to open that data and now you see the data source.
>
> **[0:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=56)** If you double click on it, you're going to get back to the screen when you imported that.
>
> **[1:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=60)** If you want to show the steps, if you're not seeing the steps, you can click here.
>
> **[1:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=64)** So, we're going to do two things here.
>
> **[1:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=66)** The first thing we're going to do is extract the year, the month, and the days from the date string so we have days and all these different information in separate columns as opposed to just one.
>
> **[1:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=82)** We're also going to change the name of these here, so TMAX and TMIN doesn't mean anything so max temperature, minimum temperature is going to be the proper name.
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=94)** So, let's start with this one here.
>
> **[1:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=96)** So, what I'm going to do is go to Add steps, and what I'm going to do is do some transformations on the first one.
>
> **[1:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=104)** So, let's go ahead and do that, so Add step.
>
> **[1:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=107)** What I'm going to do is do a custom formula here and whatever changes that you want to do, you can actually preview it first.
>
> **[1:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=115)** So, whatever transformations you do, you don't have to make it permanent.
>
> **[2:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=120)** So, custom formula and the formula to extract the day, year, and month from the single field here is as follows.
>
> **[2:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=131)** So, you do extract and then what we're going to extract first is the year, and what is the actual column that we're going to use to do that is the DATE column.
>
> **[2:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=142)** So, as I do this, if I do a preview, you're going to see what would be processed out of this.
>
> **[2:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=150)** And this is basically what's going to happen, so we're going to have all the years that's going to be extracted from the date string.
>
> **[2:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=158)** So, let's go ahead and add that.
>
> **[2:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=161)** And now you have the extract from date, so we have all the years here.
>
> **[2:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=165)** So, if we scroll down, you're going to see that we have all the years.
>
> **[2:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=169)** We're going to do that again for the month and the day.
>
> **[2:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=173)** So, I'm going to do that again.
>
> **[2:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=175)** Same command, extract month from date.
>
> **[3:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=183)** And you can preview again, you're going to see month 3 and so on, so forth.
>
> **[3:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=189)** And you can change the output column right away, so I'm going to call this month, I didn't do that earlier for the other one so I'm going to have to make a transformation on this one, so Add.
>
> **[3:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=202)** And now you see we have month, all the months, and we're going to do this again one last time for day, extract("day", DATE), and then we're going to do day.
>
> **[3:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=220)** And here's a quick note before we actually execute this.
>
> **[3:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=225)** One thing that you need to understand is how we're going to ask the questions to AI is very important, and what are going to be the features here.
>
> **[3:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=239)** What I mean by that is we need to make relations to that right away.
>
> **[4:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=244)** So, if you're going to ask about months in these numbers here, and it's not going to be March, blah, blah, blah, you need to make sure that whatever you put as a feature represents the kind of questions that you're going to ask.
>
> **[4:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=258)** So, you need to make those assumptions right away.
>
> **[4:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=261)** Same thing with the day and the year.
>
> **[4:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=264)** So, if you're saying, well, the question would be along the line of, on the month 03 of 2026, what will be the temperature, the minimum, or the maximum temperature?
>
> **[4:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=281)** You're asking a question that's very much in line with what we have here.
>
> **[4:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=285)** Anyways, just a quick note for you.
>
> **[4:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=288)** Okay, so we have extracted our stuff here.
>
> **[4:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=292)** Now, we need to rename some of these things.
>
> **[4:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=294)** So, what I'm going to do now is go into the Add step, and we're going to be going into the transform and find the Manage columns.
>
> **[5:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=309)** So, what we need to do is go here and now we can drop the DATE here, like so we can drop this one, and now we're going to rename the other ones.
>
> **[5:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=328)** We're basically redoing the same thing.
>
> **[5:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=329)** So, Rename column, I'm going to select TMAX.
>
> **[5:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=338)** So, what we want to make sure here is that when we rename the columns, it's something that actually makes sense and we are consistent in the way we actually do this.
>
> **[5:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=349)** So, right now we have TMIN, TMAX, we have month, day, and we're going to have to rename this one year.
>
> **[5:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=358)** So, what we want to make sure here is that we have a common naming scheme.
>
> **[6:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=362)** So, for example, for the max temperature, we could do something like max_temperature like this.
>
> **[6:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=372)** And if we do this, this is the way we're doing it for every single one of them.
>
> **[6:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=378)** So, if we do this, Min_temperature,
>
> **[6:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=387)** we're going to rename this one to year.
>
> **[6:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=393)** There you go, so now we have Max_temperature, Min_temperature, year, month, and we should have days.
>
> **[6:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=403)** If I close this, we have day here.
>
> **[6:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=406)** Okay, so now we've cleaned our data, so we have our max_temperature, we have our min_temperature, we have a year, month, and date.
>
> **[6:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/feature-engineering-and-transform-data?u=76281980&t=416)** So, now with all this, we can move on to the next step.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (5), let (4), this. (4)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** tmax (3), date (3), tmin (2)
> **Code Identifiers:** max_temperature (2), min_temperature (1)
> **UI Navigation:** click on (1), go to (1), scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. Training and Deployment

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Overview of algorithms and the training process
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=0)** - [Instructor] Before we move on to train our model, and especially with the fact we'll leverage Autopilot to do most of the legwork for us, you need to understand what is happening.
>
> **[0:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=9)** So the process of training the model follows a few steps, which lucky for us, SageMaker will do, but here are the steps and what's happening.
>
> **[0:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=18)** First, there's an algorithm selection.
>
> **[0:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=21)** An appropriate ML algorithm is chosen based on the problem type, and we'll explore the most popular ones in a minute.
>
> **[0:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=29)** Then there's model building.
>
> **[0:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=31)** The selected algorithm is applied to the prepared data to build the model.
>
> **[0:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=36)** This step includes configuring the algorithm with initial parameters, what we call hyperparameters.
>
> **[0:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=43)** Then the model training is happening.
>
> **[0:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=45)** During the training, the algorithm makes predictions on the training data over and over and over, and is corrected by a learning algorithm based on the difference between the predicted and actual results.
>
> **[0:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=58)** Hyperparameter tuning, this is the process of adjusting the hyperparameters of an algorithm to find a combination that produces the best model performance.
>
> **[1:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=69)** And then validation.
>
> **[1:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=71)** The trained model's performance is evaluated using a separate dataset to fine-tune the model and prevent overfitting.
>
> **[1:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=80)** As far as the algorithm is concerned, here are the popular ones.
>
> **[1:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=85)** Linear regression.
>
> **[1:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=87)** This is used for regression tasks, predicting continuous values.
>
> **[1:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=91)** So this is what we're going to use.
>
> **[1:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=93)** It's popular due to its simplicity and basis in statistical theory.
>
> **[1:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=99)** Logistic regression, used for binary classification tasks.
>
> **[1:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=103)** Yes, no predictions.
>
> **[1:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=105)** It estimates a probability that a given instance belongs to a particular class.
>
> **[1:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=110)** Decision tree, used for both regression and classification.
>
> **[1:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=115)** They model decisions and their possible consequences as a tree, which is intuitive and easy to visualize.
>
> **[2:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=122)** We could also use this one for the weather one, but I'm going to go simple today and go for linear regression.
>
> **[2:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=129)** Random forest, an ensemble learning method used for classification and regression.
>
> **[2:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=135)** It builds multiple decision trees and merges them to get a more accurate and stable prediction.
>
> **[2:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=142)** The next one is support vector machines.
>
> **[2:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=144)** It's used for classification task.
>
> **[2:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=147)** It finds the hyperplane that best divides a dataset into classes.
>
> **[2:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=153)** Another one is gradient boosting machines.
>
> **[2:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=156)** It's an ensemble technique used for both regression and classification.
>
> **[2:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=161)** It builds models sequentially with each one correcting the errors of the previous model, often resulting in higher accuracy.
>
> **[2:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=169)** Neural networks used for wide range of task, classification, regression, pattern recognition, et cetera.
>
> **[2:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=177)** Neural networks are considered deep learning, particularly powerful for complex problems and large datasets, for example, image recognition.
>
> **[3:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=187)** clustering algorithms or K-Means, used for unsupervised learning tasks, like segmenting data into groups, useful for discovering patterns or groupings and data without pre-label outcomes.
>
> **[3:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=202)** Reinforcement learning algorithm or Q-learning, used for decision-making problems where an agent learns to behave in an environment by performing actions and seeing the results.
>
> **[3:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=214)** So these are some of the algorithms that are used in machine learning and deep learning.
>
> **[3:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/overview-of-algorithms-and-training-process?u=76281980&t=219)** If you want to read more on these subjects, please do some research.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (1), class. (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Train the model with Autopilot
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=0)** - [Instructor] Using AutoML in AWS SageMaker, specifically SageMaker Autopilot, allows you to automate the process of machine learning model development.
>
> **[0:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=11)** Once you have prepared your data with Data Wrangler, you can use Autopilot to automatically build, train, and tune a machine learning model based on the data you provide.
>
> **[0:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=21)** So let's go ahead and use it for our own training.
>
> **[0:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=24)** So if you're not on this screen yet, what you could do is go back here and open Canvas and you're going to find probably something that looks like this.
>
> **[0:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=34)** So what you can do is double click on your data flow that we started and then this is what you're seeing.
>
> **[0:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=40)** So right now we have the source data, the initial data, and the transformations that we made to that data.
>
> **[0:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=47)** What you could do is run a validation if you want, just to make sure everything is going well and you have all your data ready.
>
> **[0:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=54)** And what you could do is click here at the end of your data, like so, and you're going to see the transform data here.
>
> **[1:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=62)** What we could do here is create a model directly from Data Wrangler right here.
>
> **[1:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=68)** So you can do this or you can go My Models and start your process there, but this is a simpler step here.
>
> **[1:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=75)** Create model, and then it's going to say, well wait a minute, you didn't export that data yet before you create your model, so we need to do that.
>
> **[1:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=84)** So we're going to export the data.
>
> **[1:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=86)** I'm going to call this Weather_transformed like so.
>
> **[1:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=95)** It's exporting.
>
> **[1:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=97)** And then you can simply click on Create Model directly from here.
>
> **[1:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=103)** So what I'm going to call this is weatherModel.
>
> **[1:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=109)** Now you need to select what this is going to be the problem type.
>
> **[1:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=114)** So this does basically everything for you.
>
> **[1:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=118)** So you're not going to select your own algorithm and then do the fine tuning and all this.
>
> **[2:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=125)** SageMaker will do it for you.
>
> **[2:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=127)** What you have to select though is what is the type of analysis you want.
>
> **[2:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=132)** So is this an image analysis, text, fine-tune foundation model?
>
> **[2:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=138)** You can do that as well.
>
> **[2:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=140)** So in most cases, it could be text analysis.
>
> **[2:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=142)** You want to ask questions on specific texts. That would be it.
>
> **[2:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=147)** You want to recognize something on an image, that would be the image analysis.
>
> **[2:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=151)** In our case, we want to be able to predict future weather based on a date.
>
> **[2:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=157)** So this would be what we select and then you just create your model.
>
> **[2:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=163)** So what you need to do next is choose the column to predict.
>
> **[2:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=169)** So what we're going to do is select the Max_temperature.
>
> **[2:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=173)** So what you would do in both cases, if you wanted to have the min and the max, you would create a model for each.
>
> **[3:01](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=181)** But what we're going to do is just do the max, so we're going to choose this, and it's going to basically show us the value distribution overall at this time.
>
> **[3:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=191)** So basically based on what we selected, the model type has been selected for us.
>
> **[3:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=197)** So what we could do is either configure in the model to select something else if we want, or let it select it for us.
>
> **[3:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=204)** I'm going to let it select it for us.
>
> **[3:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=207)** And then when you're ready, what you could do is do a quick build or go ahead and do a standard build, which would take two to four hours.
>
> **[3:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=216)** If you want to have something that's more accurate, you do the two to four hours.
>
> **[3:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=221)** In my case, I'm going to do a quick build so I can actually finish the course and use that build for myself.
>
> **[3:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=229)** But you can do a standard build if you want, grab a coffee, go and come back when it's done.
>
> **[3:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=235)** So I'm going to go ahead and select Quick Build and it's going to do the actual building for us.
>
> **[4:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=243)** Analyze and go ahead and do this.
>
> **[4:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/train-the-model-with-autopilot?u=76281980&t=246)** So what I'm going to do is leave that up and running and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (3), case, (2), type. (1), this, (1)
> **CLI Commands:** aws (1), find (1), make (1)
> **UI Navigation:** click on (2), select the (1)
> **Code Identifiers:** weathermodel (1)
> **Env Vars:** aws (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)

#### Review models and deploy
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=0)** - [Instructor] Okay, so now we have the results of the training, and what I'm going to do now is explain what this screen is about.
>
> **[0:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=9)** So if you look at it, right now, we have a percentage that the model would predict the correct max temperature 9.11% of the time.
>
> **[0:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=19)** This is very low, so that means that requires more training.
>
> **[0:23](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=23)** So if you're getting something similar, you probably are, it's because when you did the build and the training, you selected the quick build.
>
> **[0:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=33)** So if you want to have better results, you need to train longer, you need to send more data to the model and the machine learning process.
>
> **[0:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=42)** If you want to take a look at what the results are here, you have: What are the actual features that had the bigger impact on the training?
>
> **[0:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=52)** So the min_temperature had the better impact on all this.
>
> **[0:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=56)** You can take a look at some of the data here.
>
> **[0:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=58)** So let's say the min impact was 58.
>
> **[1:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=62)** You can see how much of an impact it had towards the training of the model here and so on so forth on the data.
>
> **[1:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=71)** You can also take a look at the scoring.
>
> **[1:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=73)** So the scoring is basically information on the actual results.
>
> **[1:20](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=80)** So for example, here we have, if the model predicts 89, it is correct 13% of the time, and you have a lot more data on the individual labels here.
>
> **[1:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=92)** So if we take a look at, let's say 62, the accuracy is 3.297.
>
> **[1:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=99)** So the 9.11 is the average of all the scores here.
>
> **[1:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=103)** And then you have advanced metrics that gives you average f1, average precision, and more information on how the model actually performs.
>
> **[1:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=114)** So these are low numbers, they should all be higher, they should be around 70 to 80 to get some predictions that are actually more relevant.
>
> **[2:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=124)** So this would require a lot more training for this one.
>
> **[2:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=127)** Or what you could do is change the algorithm.
>
> **[2:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=130)** We actually explore what are the different algorithms.
>
> **[2:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=133)** You could select a different algorithm, and retrain the model with a different algorithm, and see what the actual accuracy comes at the end.
>
> **[2:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=142)** You can add a new version of the model if you want and select a different dataset if you want.
>
> **[2:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=148)** Let's say, for example, we were selecting from a different station, from NOAA, then you can continue adding more and more information and maybe do an average for the whole country and build your model this way.
>
> **[2:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=163)** So this is a non-coding approach to building your model.
>
> **[2:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=167)** It works very well for people that don't know Python, that don't know JavaScript, and so on so forth.
>
> **[2:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=173)** You can build it this way.
>
> **[2:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=175)** So once you're satisfied with that result, clearly this is not a good result, but I need to show you how the rest works.
>
> **[3:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=183)** You can go to Predict.
>
> **[3:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=184)** So predict basically allows you to do predictions in batch or test a single prediction if you want.
>
> **[3:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=192)** So in this case, if you want to test a single prediction, we could, for example, enter value.
>
> **[3:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=198)** So the minimum temperature for this specific prediction, we could say, "Okay, so I'm going to send you a minimum value of 50 Fahrenheit."
>
> **[3:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=210)** And then the year would be, for example, let's say 2025, month 5, and let's go for a different month, month 8 and day 8.
>
> **[3:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=224)** And then what you could do is update the prediction.
>
> **[3:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=227)** So based on this information, the max temperature would be... 72.
>
> **[3:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=236)** So that's the new prediction based on the information that you've given.
>
> **[4:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=240)** So the year has a big impact.
>
> **[4:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=242)** The min temperature has a different impact.
>
> **[4:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=245)** You can change this all you want.
>
> **[4:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=247)** So let's go to 1975, and the minimum temperature is, let's say, 67.
>
> **[4:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=257)** Let's change them on to two and then update the prediction.
>
> **[4:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=265)** You would get 77.
>
> **[4:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=266)** So again, these are all based on the data you fed.
>
> **[4:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=270)** So as you remember, I selected a very specific weather station to do the training, but you could add models on top of each other and train them with different datasets or combine a lot more data together.
>
> **[4:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=286)** So focus on the dataset, maybe have different regions with the same data, feed that data, and then do the training this way.
>
> **[4:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=296)** And that's how you go about this.
>
> **[4:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/review-models-and-deploy?u=76281980&t=298)** So now that we have a model trained, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (2), require (1), continue (1), case, (1)
> **Analogies:** for example (4)
> **Versions:** 9.11 (2), 3.297 (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** python (1)
> **Code Identifiers:** min_temperature (1)
> **Env Vars:** noaa (1)

#### Predict and clean up resources
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=0)** - [Instructor] Okay, so now we'll focus on deploying that model, making it available for our application to send these data points, so the min temperature, the year, the month, and the day, and get some results back as we have here.
>
> **[0:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=16)** You can also download predictions if you want to do batch predictions and basically do a quick job of predictions and download it, you can actually do that as well.
>
> **[0:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=26)** Okay, so let's go to Deploy.
>
> **[0:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=29)** So basically all you have to do to deploy is Create Deployment, and it's going to create it for you.
>
> **[0:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=37)** You can basically select the Instance type if you want, Instance count, I'm going to make it as small as I can on this one because I'm going to turn it off as soon as we're done.
>
> **[0:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=50)** So I'm going to make it medium, it's fine.
>
> **[0:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=52)** Instance count, I would do one.
>
> **[0:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=58)** You can change this all you want.
>
> **[0:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=59)** Change the instant type if you want, and then Deploy.
>
> **[1:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=64)** So once you're ready, you can actually view deployment.
>
> **[1:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=68)** So we're going to click on View details, and if you want, you can actually view sample code.
>
> **[1:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=74)** So let's say for example, you're in Python, you can view the sample code from Python here.
>
> **[1:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=84)** If you want to know more how to invoke the URL, you can click on here but it's fairly easy, and I'm going to show you once we actually implement the code in the front-end application.
>
> **[1:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=96)** You can also test the deployment once it's ready.
>
> **[1:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=99)** And we won't do that because we'll deploy it and use it in the application.
>
> **[1:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/predict-and-clean-up-resources?u=76281980&t=105)** So let it create the endpoint and then we'll do the code in the front-end application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), python (2)
> **UI Navigation:** click on (2), go to (1), select the (1)
> **Code Keywords:** let (3)
> **Exercise Files:** sample code (2)
> **Env Vars:** url (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. React Front End

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Base app component
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=0)** - [Instructor] Okay, so now that we have an endpoint and our model ready to go, we're going to start working on the front end side of things.
>
> **[0:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=7)** So the first thing we're going to do is go in app.jsx.
>
> **[0:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=11)** If you know where that file is, it is in the source folder right here.
>
> **[0:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=15)** And we're going to close this and then we'll remove the logo things here, clean up all of this here, all the way down like so, remove that div and we're good to go.
>
> **[0:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=32)** We're going to keep the useState here because we're going to set it up for a couple of things.
>
> **[0:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=36)** So might as well start with this.
>
> **[0:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=39)** So the first thing we're going to do is set up a date 'cause in our form we're going to need to send a date.
>
> **[0:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=45)** So we're going to create that first.
>
> **[0:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=48)** And then useState we're going to initialize it with an empty string.
>
> **[0:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=53)** And we're going to repeat this for a min temperature 'cause we need a min temperature to enter into our form.
>
> **[1:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=63)** So we're going to do that as well.
>
> **[1:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=65)** MinTemp and then setMinTemp, useState.
>
> **[1:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=73)** And then also as an empty string, we're going to also set a temperature, which we'll use, setTemperature.
>
> **[1:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=87)** 'Cause the way we're going to do this is take from the form, the minimum temperature and the date, and then send this to our AI.
>
> **[1:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=97)** Our AI is going to come back with basically the temperature for the max temperature.
>
> **[1:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=102)** And then we're going to use this, update the state, and then the state will re-render the components for us.
>
> **[1:51](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=111)** This is going to be null.
>
> **[1:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=114)** And then let's do this again for a loading key.
>
> **[2:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=120)** And this we're going to use for UI purposes and we're going to be making it false.
>
> **[2:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=127)** Okay, then what we're going to do is go all the way down to the main component, and we're going to make this as a div, close this as a div at inside of our div we're going to have a form which we'll work on shortly.
>
> **[2:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=150)** Inside of that form we're going to have an input and then we're going to have another input.
>
> **[2:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=155)** We'll work on these over the next few videos.
>
> **[2:39](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=159)** I'm just building the structure just so you guys understand what we're going to do here.
>
> **[2:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=164)** And then we're going to have a button.
>
> **[2:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=167)** And then below the form we're going to render in the card what is the max temperature.
>
> **[2:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=175)** So we're going to do a p tag, which we'll call Max Temperature, and then we're going to fill it with something and it's going to be Fahrenheit.
>
> **[3:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=190)** Okay, so we have the structure of our form here, and what we're going to do is create a few functions here to handle the applications functions.
>
> **[3:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=202)** So one is going to be called handleMinTempChange.
>
> **[3:30](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=210)** As we fill up the form, this is basically going to update the state as we fill up the form.
>
> **[3:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=218)** SetMinTemp as we are updating our form,
>
> **[3:50](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=230)** we're going to do another one here.
>
> **[3:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=232)** That's going to be the date change, handleDateChange, same thing.
>
> **[4:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=240)** And except here, we're going to set the date.
>
> **[4:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=245)** And then we're going to do a handleSubmit which we'll do in a future video.
>
> **[4:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=251)** But I just want to enter the function here for now.
>
> **[4:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=255)** This is going to be an async function, mostly because we're going to reach out to the endpoint, right?
>
> **[4:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=266)** And we're going to have a try, catch error
>
> **[4:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=274)** and just console log something for now.
>
> **[4:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=277)** Let's do the console.error.
>
> **[4:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=280)** We'll finish that later, like so.
>
> **[4:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=284)** And then put something in the try, console.log, date and minTemp.
>
> **[4:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=294)** Okay, so we have our structure here.
>
> **[4:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=296)** So we have the beginning of a form, which we'll continue working on.
>
> **[4:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=299)** We have some events that we're able to click here that will work further in the next few videos.
>
> **[5:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=307)** And also we're going to set the background, the CSS for a couple of things here to make it look better.
>
> **[5:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/base-app-component?u=76281980&t=314)** All right, let's move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), try, (2), this. (1), this, (1)
> **Code Identifiers:** usestate (3), setmintemp (1), settemperature (1), handlemintempchange (1), handledatechange (1)
> **CLI Commands:** make (2)
> **File Paths:** app.jsx (1)
> **Env Vars:** css (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Form component
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=0)** - [Instructor] Okay, so let's continue working on the App component, and we're going to focus now on the form itself.
>
> **[0:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=8)** So, what I'm going to do here is go all the way down to the form and I'm going to start putting some more meat in here.
>
> **[0:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=16)** I'm also going to have the CSS open, so I'm going to click here and have App.css completely open here.
>
> **[0:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=24)** And then I'm going to switch in between the App and the CSS to make sure that I have everything that I need from a look perspective as well.
>
> **[0:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=34)** Okay, so let's go ahead and continue with that.
>
> **[0:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=37)** I'm first going to add the class names, and as I add the class names I'm going to after go into the CSS and fill them up.
>
> **[0:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=48)** So, I'm going to create a weather-container here, and then I'm going to do onSubmit for the form 'cause we need to submit.
>
> **[0:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=57)** And we're going to handleSubmit, and className of weather-form.
>
> **[1:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=67)** Then in the input I'm going to have a few things.
>
> **[1:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=70)** So, this is going to be of type text, value, the initial value is going to be the date, and onChange I'm going to handleDateChange.
>
> **[1:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=87)** And then what I'm going to do as well is do a placeholder just to make sure that people know what to enter here, Enter date, example 2027-01-25,
>
> **[1:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=103)** something along those lines like just so.
>
> **[1:46](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=106)** And then I'm going to have a className for this too, weather-input, and I'm going to have the second input fairly similar.
>
> **[1:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=117)** So, what I'm going to, just delete that, copy that, and paste it here.
>
> **[2:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=126)** This is going to be type number.
>
> **[2:11](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=131)** This one is going to be minTemp.
>
> **[2:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=135)** This is going to be handleMinTempChange.
>
> **[2:25](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=145)** And as the placeholder, minimum temperature in Fahrenheit,
>
> **[2:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=156)** and it's the same here.
>
> **[2:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=158)** Okay, so for the button I'm first going to do a type submit.
>
> **[2:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=168)** className, we're going to call this one weather-submit.
>
> **[2:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=174)** We're going to disable it if we're loading.
>
> **[3:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=180)** And this is why we created that loading here, and we're going to change it based on where we are with handleSubmit, we'll change that code fairly quickly.
>
> **[3:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=194)** Okay, so we're also going to return and have a conditional here.
>
> **[3:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=199)** So, basically if we are loading then say loading,
>
> **[3:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=208)** otherwise get temperature, okay?
>
> **[3:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=215)** Before we go to the CSS let's finish our handleSubmit here.
>
> **[3:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=221)** So, we're going to change that handleSubmit when we actually finish the connection at the end with our end point.
>
> **[3:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=232)** For the time being we're just going to do these here.
>
> **[3:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=234)** So, setLoading to true as it tries to await for a response here.
>
> **[4:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=244)** And in the catch error we're going to do something along the line Error fetching temperature, and then add the error.
>
> **[4:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=257)** And I have a typo here, let's make sure we fix that.
>
> **[4:23](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=263)** And if that's the case setTemperature to null.
>
> **[4:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=268)** And in the meantime let's just console.log the date and the minimum temperature.
>
> **[4:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=274)** And then at the end setLoading to false when this is all complete.
>
> **[4:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=281)** Okay, so now let's go into our CSS for what we've filled so far.
>
> **[4:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=288)** So, we need to basically remove all of this.
>
> **[4:51](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=291)** We don't need any of this here, so I'm going to literally delete all of this.
>
> **[4:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=296)** The first one that we need is the weather-container.
>
> **[5:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=303)** Then we need the weather-form, and I'm going to do those CSS styles in the next video so this video doesn't go too long in the tooth.
>
> **[5:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=313)** Weather-input, I'm just going to create the classes now and then we'll finish it up in the next video.
>
> **[5:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=321)** And then weather-submit, then we need the weather-input.
>
> **[5:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=331)** And let's make sure it's a class.
>
> **[5:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=336)** And then we have the weather-submit by itself.
>
> **[5:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=341)** And we're going to create that class now, but we're actually going to use it later, the next video.
>
> **[5:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=349)** It's the response-card.
>
> **[5:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/form-component?u=76281980&t=352)** Okay, so we got all the classes created, we'll work on these in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (2), delete (2), this. (2), switch (1)
> **Code Identifiers:** handlesubmit (4), classname (3), setloading (2), onsubmit (1), onchange (1)
> **Env Vars:** css (6)
> **CLI Commands:** make (4)
> **Cross-References:** in the next (3), next video (1)
> **File Paths:** app.css (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Results component
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=0)** - [Instructor] Okay, so let's keep working on the App component, finish the Results card, and then finish the CSS before we actually connect everything with the end part.
>
> **[0:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=10)** So what I'm going to do in this section here, I'm going to basically create a render method here.
>
> **[0:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=16)** So I'm going to do this and if there's a temperature, then render the card.
>
> **[0:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=26)** So basically, if we have a temperature in our state, so right here, if we have a temperature, then render this section here.
>
> **[0:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=36)** And I'm going to cut this, put it in like so, and we're good to go.
>
> **[0:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=45)** Okay, so in here, all I have to do is add the className, weather-response-card, and then here, I'm going to render the temperature with the maxTemp.
>
> **[1:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=66)** So I have this key and the state that I can use to actually render the max temperature here.
>
> **[1:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=74)** Okay, so we have everything that we need here.
>
> **[1:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=77)** If you run the application right now, let's take a look.
>
> **[1:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=81)** Npm run dev.
>
> **[1:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=84)** If we run the application here, we have these two fields and we have the Get Temperature.
>
> **[1:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=89)** We still need to add some styles here and we're going to do that right now.
>
> **[1:34](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=94)** So the first thing I want to do before anything else is in the exercise files, I took the liberty to add a nice picture for you here.
>
> **[1:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=104)** And this picture is going to be the background for the actual application.
>
> **[1:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=109)** So you can copy that one.
>
> **[1:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=112)** So I'm going to put that picture in the public folder right here like so, and you can delete the vite.svg.
>
> **[2:01](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=121)** And I'm going to call this weather to make it simpler, like so.
>
> **[2:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=125)** And then you can close all this and go back to the code.
>
> **[2:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=132)** And we can close this for now.
>
> **[2:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=134)** And what we're going to do also is actually go into the index.css right here.
>
> **[2:23](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=143)** And the one thing that I'm going to do in the body, and I'm going to put a comma html to make sure that we're fully covering, the screen is adding two items here, padding zero and margin zero.
>
> **[2:43](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=163)** So I'm going to connect this here and then I'm going to go into the CSS of the app and we're going to start entering some stuff here.
>
> **[2:53](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=173)** So display flex, flex-direction, we're going to go column, align-items, we're going to go center, justify-content center as well.
>
> **[3:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=189)** And then height, we're going to do a 100vh.
>
> **[3:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=194)** Background, we're going to do a url.
>
> **[3:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=199)** And we're going to do our weather picture that we just added to the public directory.
>
> **[3:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=207)** And we're going to not repeat, we're going to center it and fixed.
>
> **[3:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=217)** And background size, we're going to cover, okay.
>
> **[3:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=222)** This is for the weather container.
>
> **[3:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=225)** For the weather form, we're going to do a margin-bottom of 10 pixels, actually, not 10, but 20 pixels.
>
> **[3:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=237)** And again, these are all my own personal styles, so feel free to play with this.
>
> **[4:03](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=243)** This is basically to make it look good.
>
> **[4:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=245)** You can literally pause a video, do your own styles, or just move to the next video to finish the whole thing.
>
> **[4:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=252)** But this is just me adding the proper styles so it looks good.
>
> **[4:16](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=256)** So if you want to follow along, go ahead.
>
> **[4:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=259)** I'm basically adding, you know, some padding and some margins across the application and making sure everything is nice and centered and the buttons are going to look good when we actually render the whole thing.
>
> **[4:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=273)** And as I do this, or you do this, you can actually save and take a look at the application live, how it looks.
>
> **[4:42](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=282)** You're going to see the changes happening live as well.
>
> **[4:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=285)** So with width of 200 pixels for that.
>
> **[4:51](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=291)** Now, the weather-submit, the same thing.
>
> **[4:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=295)** I could actually done this in one line if I wanted to.
>
> **[5:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=300)** And the weather-response-card, we're going to do a padding of 20 pixels.
>
> **[5:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=307)** We're going to do a border-radius of 20 pixels again.
>
> **[5:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=312)** We're going to do a background-color of rgba, 255, 255, 255, 0.8 for the alpha.
>
> **[5:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=329)** Width, fit-content.
>
> **[5:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=332)** And then box-shadow, 0, 4px, 6px, rgba, 0, 0, 0, 0.1.
>
> **[5:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=348)** And so 0, 0, 0, 0.1.
>
> **[5:51](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=351)** Okay, so let's do a quick check, actually here, that's what I meant.
>
> **[5:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=358)** Background-color.
>
> **[5:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=359)** We're going to do a specific color for this one.
>
> **[6:01](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=361)** This is my favorite one for this one, FYI.
>
> **[6:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=366)** Actually, I added a zero.
>
> **[6:09](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=369)** Okay, color, white.
>
> **[6:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=374)** Cursor, pointer.
>
> **[6:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=379)** Okay.
>
> **[6:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=381)** Just verifying that everything is in there, just making sure, margin-bottom.
>
> **[6:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=387)** And then everything here, so if we go back and we take a look at our application now, it looks much better.
>
> **[6:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=395)** As you can see, we have a nice background here.
>
> **[6:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=398)** We have the Get Temperature.
>
> **[6:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=400)** So if you enter an actual date, 2027-05-1, and then a number here, 52, Get Temperature, nothing's working right now because we haven't finalized everything, but the card will eventually appear here.
>
> **[6:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=419)** So now we've completed the front end, in terms of the looks.
>
> **[7:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=424)** We have most of the functions in here.
>
> **[7:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/results-component?u=76281980&t=426)** We're going to finalize everything in the last video where we connect the endpoint and we actually render the response.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), public (2), delete (1), this. (1)
> **CLI Commands:** make (3), npm (1)
> **Analogies:** picture (4)
> **Env Vars:** css (2), fyi (1)
> **Versions:** 0.1 (2), 0.8 (1)
> **Cross-References:** go back to (1), next video (1), in the last (1)
> **Code Identifiers:** classname (1), maxtemp (1)
> **File Paths:** index.css (1)

#### Finish results component
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=0)** - [Instructor] Okay, so now we're going to finalize everything that we need to finish this project.
>
> **[0:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=6)** So the first thing we're going to do is, actually start a backend that I've built for you.
>
> **[0:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=12)** This course is not about building a backend.
>
> **[0:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=14)** It's about building a front end that connects to the endpoint that we created on AWS SageMaker.
>
> **[0:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=21)** The problem is, you can't really call an endpoint, like SageMaker, from a front end.
>
> **[0:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=27)** You need to have a backend that's going to call into SageMaker and then externally have react call into the APIs of your backend.
>
> **[0:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=35)** So what I've done is built a backend for you, and I'm going to show you what it looks like.
>
> **[0:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=41)** It's actually in, let me just remove all this and I'm going to minimize this for a second.
>
> **[0:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=49)** Okay, so if we go into the exercise files in the chapter four and the video four, you have a backend right here.
>
> **[1:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=60)** So all you have to do is copy and paste this into another folder, do an NPM install, which we'll do in a second, and then add a few customized things that relates to you and then you have your backend running.
>
> **[1:15](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=75)** Let me go into the backend file here just to make sure you have everything that you need to get it started.
>
> **[1:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=81)** So in the backend here, and let me just close this here, you have a few things that you have to set.
>
> **[1:28](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=88)** First of all, you have to make sure that you have AWS install on your system because it's basically going to look for your credentials inside your system, and then your backend is going to reach out to SageMaker.
>
> **[1:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=100)** So if you haven't done this already, you need to do something like AWS Configure, and then it's going to ask you for credentials and things like that.
>
> **[1:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=112)** So you should have that done.
>
> **[1:55](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=115)** Once you have that, you should be good to go.
>
> **[1:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=117)** This, you shouldn't have to change if you followed along on this project because the local host 5173 is the actual port for the React application.
>
> **[2:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=128)** I'm using cores here because I'm actually using the local hose on both.
>
> **[2:13](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=133)** But in reality, you shouldn't have to do this if your backend is into an API somewhere else.
>
> **[2:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=139)** The region, make sure you have the proper region for you.
>
> **[2:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=142)** You need to specify this.
>
> **[2:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=144)** I've put notes besides the elements that you need to validate and make sure that you have.
>
> **[2:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=149)** And then the endpoint name is the actual name of the endpoint that we created on SageMaker.
>
> **[2:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=155)** So if we go back to SageMaker, this is the actual name that you should put inside of that settings.
>
> **[2:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=164)** Once you have that, you should be good to go or basically everything right here, this is what you need.
>
> **[2:51](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=171)** Once you have all those settings here, you should be good to go.
>
> **[2:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=176)** You don't need to change anything else on the server or the backend.
>
> **[2:59](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=179)** So I'm going to close this and I'm going to start my backend.
>
> **[3:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=184)** So the first thing you need to do if you haven't done so already, so to do an NPMI to install, and once you've done that, you do an NPM start and your server should be running on port 3001.
>
> **[3:18](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=198)** So now that we have that running, we should be good to go to continue our project right here.
>
> **[3:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=204)** So I'm going to maximize the project and we will keep working on this here What we need to change in this project is the handle submit function here.
>
> **[3:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=217)** So we're going to change a few things right here because now what we're doing is calling into the application that is running with the backend we just started.
>
> **[3:49](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=229)** So the first thing we're going to do is do a few things on the try.
>
> **[3:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=232)** I'm going to remove the console log here, and the first thing I'm going to do is, create a min temp float variable.
>
> **[4:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=244)** And what I'm going to do is parse float min temp.
>
> **[4:10](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=250)** The reason why we're doing this and prepping all of this here is because the SageMaker instance is actually taking CSV as the format, not JSON, but CSV.
>
> **[4:23](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=263)** So there's a couple of things that we need to do to format the information that we get from the front end, which is react, and then sending it to the backend.
>
> **[4:31](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=271)** And this is basically what we're going to do now.
>
> **[4:35](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=275)** So we're going to do a verification here where if is NaN mintemp float.
>
> **[4:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=285)** So if it's not a number, throw an error.
>
> **[4:54](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=294)** Invalid temperature input if there's no date as well.
>
> **[5:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=307)** Basically sending here throw as well, a new error, invalid date input.
>
> **[5:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=319)** Now what we're going to do is take the date that we got from our input and we're going to split it to actually send it to the CSV format.
>
> **[5:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=336)** Then we're going to create the CSV data
>
> **[5:44](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=344)** with the mintemp float.
>
> **[5:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=347)** Then I'm going to pass the year, the month and then the day.
>
> **[5:56](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=356)** And then we're going to make the call to our own backend that actually is fetching from SageMaker.
>
> **[6:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=365)** So this is the backend that we've built internally, which is the http localhost 3001.
>
> **[6:14](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=374)** This is the actual port and the post.
>
> **[6:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=379)** And if you want to check it, you can go into the code, but that's the actual endpoint that we created.
>
> **[6:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=384)** Temperature.
>
> **[6:29](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=389)** The method is post.
>
> **[6:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=396)** The body's going to be the CSV data with the headers, content type.
>
> **[6:48](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=408)** We're specifying that this is text/csv.
>
> **[6:57](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=417)** If no response, it's okay.
>
> **[7:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=424)** Throw an error.
>
> **[7:05](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=425)** So basically, if we don't get a good response, throw an error, http error and then put the status of that error just to make sure we know what is happening here.
>
> **[7:19](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=439)** And then the response.status.
>
> **[7:24](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=444)** And then finally we're going to have a responsebody, return.
>
> **[7:36](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=456)** And then we're going to set the temperature with that information, which is max temp with the response body max temp, like so.
>
> **[7:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=472)** Everything else we keep and we can save this.
>
> **[7:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=478)** And let's make sure we have everything that we need at the top.
>
> **[8:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=482)** We didn't change anything here. Nope.
>
> **[8:04](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=484)** Okay, so let's test this.
>
> **[8:06](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=486)** Let's make sure everything is working.
>
> **[8:07](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=487)** So I'm going to open a new terminal in VS code and do an NPM install just to make sure everything is good, and then do an MPM run dev.
>
> **[8:21](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=501)** And I'm going to go into my browser, refresh, make sure that I don't have any errors in here and then I'm going to test this.
>
> **[8:33](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=513)** So basically what we need to do now is enter a date here.
>
> **[8:38](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=518)** So as you can see, we have an example here.
>
> **[8:40](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=520)** So I'm going to do, let's say for example, 2025, 08, 26.
>
> **[8:45](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=525)** And then the temperature, the low temperature is going to be 67.
>
> **[8:52](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=532)** Okay, I am getting a little error on line 51.
>
> **[8:58](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=538)** So let's go here. Let's take a look at line 51.
>
> **[9:01](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=541)** So this is where it breaks, and I forgot this here, okay?
>
> **[9:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=548)** Anything that I should see here?
>
> **[9:12](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=552)** Oh, I've got another error here.
>
> **[9:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=557)** Save this. Should be fine.
>
> **[9:22](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=562)** CSV, everything is good. Okay, so let's go back here.
>
> **[9:26](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=566)** Let's refresh this. Let's do again another date.
>
> **[9:32](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=572)** 09, 12, 45.
>
> **[9:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=577)** Get temperature and we have the max temperature.
>
> **[9:41](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=581)** So basically what happened here is, we sent a date with a low temperature.
>
> **[9:47](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=587)** It was split into a CSV file sent to our backend, and then our backend sent all that information to SageMaker, SageMaker return with a result, which is 72 Fahrenheit.
>
> **[10:02](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/finish-results-component?u=76281980&t=602)** So that completes our project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this. (6), throw (4), this, (1), else. (1)
> **Env Vars:** csv (7), aws (3), npm (3), api (1), npmi (1)
> **CLI Commands:** make (10), aws (3), npm (3)
> **Prerequisites:** install (4), make sure you have (2), you need to have (1), configure (1)
> **Tools:** terminal (1), vs code (1)
> **Ports:** port 3001 (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** exercise files (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Continue learning SageMaker
> [LinkedIn Learning](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980&t=0)** - [Instructor] This was a quick exploration of building a project that leverages SageMaker and React to give you a foundation in machine learning.
>
> **[0:08](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980&t=8)** Needless to say, there is a lot more to explore on the subject and simply doing a quick research in our library will allow you to deepen your knowledge on the subject.
>
> **[0:17](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980&t=17)** Do a simple search under machine learning, SageMaker, or even go into TensorFlow or Keras for other venues in the world of artificial intelligence.
>
> **[0:27](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980&t=27)** Finally, if you got lost a bit in the front end React project, there are tons of courses to give you the basics or more to be more efficient in React.
>
> **[0:37](https://www.linkedin.com/learning/build-an-ai-application-with-react-and-aws-sagemaker/continue-learning-sagemaker?u=76281980&t=37)** Thanks very much for taking my course, and I'll see you in a bit.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
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