---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: training-neural-networks-in-python-17058600
url: "https://www.linkedin.com/learning/training-neural-networks-in-python-17058600"
duration_minutes: 125
duration: 2h 5m
level: Advanced
updated: 11/9/2022
learners: 35685
skills:
  - Neural Networks
  - Python (Programming Language)
  - Artificial Intelligence (AI)
exercise_files: false
github: "https://github.com/LinkedInLearning/training-neural-networks-in-python-3215347/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHV4j3fIM3c8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667864483162?e=2147483647&amp;v=beta&amp;t=oqVOtld0_v33uk2RKr6tq51vsio0xD8Bcvrwp7TUW8Y"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Fundamentals to Become a Machine Learning Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Fundamentals%20to%20Become%20a%20Machine%20Learning%20Engineer.md)'
  - '[Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)'
prev_courses:
  - '[Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md)'
  - '[Introduction to Attention-Based Neural Networks](Introduction%20to%20Attention-Based%20Neural%20Networks.md)'
next_courses:
  - null
  - '[Introduction to Generative Adversarial Networks (GANs)](Introduction%20to%20Generative%20Adversarial%20Networks%20(GANs).md)'
path_nav: '[{"path":"Fundamentals to Become a Machine Learning Engineer","position":7,"total":7,"prev":"Reinforcement Learning Foundations","next":null},{"path":"Advance Your Skills in AI and Machine Learning","position":5,"total":16,"prev":"Introduction to Attention-Based Neural Networks","next":"Introduction to Generative Adversarial Networks (GANs)"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - skill/neural-networks
  - skill/python-programming-language
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Training%20Neural%20Networks%20in%20Python.md)

![Training Neural Networks in Python](https://media.licdn.com/dms/image/v2/C560DAQHV4j3fIM3c8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667864483162?e=2147483647&amp;v=beta&amp;t=oqVOtld0_v33uk2RKr6tq51vsio0xD8Bcvrwp7TUW8Y)

# Training Neural Networks in Python

> Prerequisites You must feel comfortable writing code in Python 3. Project Build a neural network from scratch using Python. Neural networks are widely used in everyday applications like online shopping, weather forecasting, and smartphones. This course by Eduardo Corpeño teaches the inner workings of neural networks in Python, allowing you to fully understand the algorithms behind them. Although t

> [LinkedIn Learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600) | 2h 5m | Advanced | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Creating a neural network in Python](#creating-a-neural-network-in-python)
  - [What you should know](#what-you-should-know)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Choosing a Neural Network**](#1-choosing-a-neural-network) (6 videos)
  - [What is a neural network?](#what-is-a-neural-network)
  - [Why Python](#why-python)
  - [The many applications of machine learning](#the-many-applications-of-machine-learning)
  - [Types of classifiers](#types-of-classifiers)
  - [Types of neural networks](#types-of-neural-networks)
  - [Multilayer perceptrons](#multilayer-perceptrons)
- [**2. The Building Blocks of Neural Networks**](#2-the-building-blocks-of-neural-networks) (9 videos)
  - [Neurons and the brain](#neurons-and-the-brain)
  - [A simple model of a neuron](#a-simple-model-of-a-neuron)
  - [Activation functions](#activation-functions)
  - [Perceptrons: A better model of a neuron](#perceptrons-a-better-model-of-a-neuron)
  - [Challenge: Finish the perceptron](#challenge-finish-the-perceptron)
  - [Solution: Finish the perceptron](#solution-finish-the-perceptron)
  - [Logic gates](#logic-gates)
  - [Challenge: Logic gates with perceptrons](#challenge-logic-gates-with-perceptrons)
  - [Solution: Logic gates with perceptrons](#solution-logic-gates-with-perceptrons)
- [**3. Building Your Network**](#3-building-your-network) (4 videos)
  - [Linear separability](#linear-separability)
  - [Writing the multilayer perceptron class](#writing-the-multilayer-perceptron-class)
  - [Challenge: Finish the multilayer perceptron class](#challenge-finish-the-multilayer-perceptron-class)
  - [Solution: Finish the multilayer perceptron class](#solution-finish-the-multilayer-perceptron-class)
- [**4. Training Your Network**](#4-training-your-network) (8 videos)
  - [The need for training](#the-need-for-training)
  - [The training process](#the-training-process)
  - [The error function](#the-error-function)
  - [Gradient descent](#gradient-descent)
  - [The Delta rule](#the-delta-rule)
  - [The Backpropagation algorithm](#the-backpropagation-algorithm)
  - [Challenge: Write your own Backpropagation method](#challenge-write-your-own-backpropagation-method)
  - [Solution: Write your own Backpropagation method](#solution-write-your-own-backpropagation-method)
- [**5. Let's Make a Segment Display Classifier**](#5-lets-make-a-segment-display-classifier) (8 videos)
  - [Segment display recognition](#segment-display-recognition)
  - [Challenge: Design your own SDR neural network](#challenge-design-your-own-sdr-neural-network)
  - [Solution: Design your own SDR neural network](#solution-design-your-own-sdr-neural-network)
  - [Challenge: Train your own SDR neural network](#challenge-train-your-own-sdr-neural-network)
  - [Solution: Train your own SDR neural network](#solution-train-your-own-sdr-neural-network)
  - [7 to 1 network GUI demo](#7-to-1-network-gui-demo)
  - [7 to 10 network GUI demo](#7-to-10-network-gui-demo)
  - [7 to 7 network GUI demo](#7-to-7-network-gui-demo)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating a neural network in Python](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/creating-a-neural-network-in-python?u=76281980&t=0)** - [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) are everywhere and chances are you are using them every day when you're shopping online and a product you like pops up, when you see a weather forecast and why not, when you use your smartphone. I'm Eduardo Corpeno and I'd like to invite you to take this course where we will create a neural network from scratch in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Whether you are starting your journey into [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning or you have some experience using neural networks with popular tools like [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) or [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) and you'd like to brush up on the basics, this course is for you. Although professional tools allow you to train neural networks from a high-level perspective, the objective of this course is to give you a chance to tap into the details of the [Algorithms](../../Skills/Software%20Development/Algorithms.md) behind neural networks. This will allow you to fully understand what's going on inside and you'll make much better use of professional machine learning tools in the future. So come join me in my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course and let's have fun with neural networks and Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) (1), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1)
> **CLI Commands:** python (2), make (1)
> **Speakers:** - neural (1)

#### [What you should know](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we start, here are some things you should know. First and foremost, you must feel comfortable with writing code in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3. If you're not sure, I suggest that you give it a try until you reach the first programming exercise. If you still need some training, go ahead and browse our library to choose one of our many courses on Python. Second, you may run the exercise files using a [GitHub](../../Skills/Software%20Development/GitHub.md) code space, which is a nice [Cloud Development](../../Skills/Software%20Development/Cloud%20Development.md) environment for you to test your code without having to install anything. We'll tell you more about this later. In case you prefer to run the code in your computer, you'll need to have Python 3 installed with the NumPy library. Also, for the final project, I will show you an application with a graphical user interface that uses the [Tkinter](../../Skills/Software%20Development/Tkinter.md) package, which probably came with your Python distribution. In the GitHub Codespace, you will use the cloud version of Visual Studio Code, but I also recommend that you install this IDE in your computer if you intend to run the code locally. We'll be discussing functions like summations and exponentials, so having experience with that level of mathematics will be helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Cloud Development](../../Skills/Software%20Development/Cloud%20Development.md) (1), [Tkinter](../../Skills/Software%20Development/Tkinter.md) (1)
> **CLI Commands:** python (4)
> **Prerequisites:** install (2), before we start (1), you'll need (1)
> **Tools:** github (2), visual studio (1)
> **Versions:** python 3 (2)
> **Env Vars:** ide (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi De Lobos, Senior Staff Instructor at [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning, and I'm going to show you how to work with LinkedIn Learning courses using [GitHub](../../Skills/Software%20Development/GitHub.md) [Codespaces](../../Skills/Software%20Development/Codespaces.md). Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands on practice that mirrors [Software Development](../../Topics/Software%20Development.md) in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click Open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor, running on GitHub's servers. Your course can have one or more extensions preinstalled based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic,
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our course's GitHub repositories. From here, click Code and then Create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a b at the end of the branch, that's how the code looked at the beginning. If you see an e, that's how the code looked at the end. Let's switch to how the code looked
>
> **[3:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=187)** on chapter two in the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[HTML](../../Skills/Web%20Development/HTML.md) file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like, say, 07_03e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the Force Checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking let's you create your own copy of the repository on your account, so that you can keep any changes that you've made. Even if you've deleted the codespace. To create your own fork, you can click on the Fork button on the repository. I'm going to hit Create fork. Now I have my own copy of this repository. And if I want to, I can start a new codespace on that fork. This forked version
>
> **[4:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=280)** is almost exactly like the original repository, but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch. In the source control panel, you can also see a 1 for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the Commit button. And I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here, I'll hit OK. You can also let it go ahead and run [Git](../../Skills/Software%20Development/Git.md) [Fetch](../../Skills/Web%20Development/Fetch.md). That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry. If you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Look for additional course specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Codespaces](../../Skills/Software%20Development/Codespaces.md) (9), [GitHub](../../Skills/Software%20Development/GitHub.md) (8), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Software Development](../../Topics/Software%20Development.md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** click on (3), switch to (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Choosing a Neural Network

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a neural network?](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/what-is-a-neural-network?u=76281980&t=0)** - [Presenter] Let's start by defining what a neural network is. A neural network is a piece of software. It's a model of the brain, and like so, it's capable of reproducing some behaviors of the brain like learning and classifying. That is, it can be taught to recognize the category of a set of things you present to it. For example, telling the difference between apples and oranges in a picture. Now let's consider what a neural network is not so that we get some misconceptions out of the way. A neural network is not a series of if-then statements or any other form of hard-coded data the software may [Fetch](../../Skills/Web%20Development/Fetch.md) to produce an answer. A neural network is not all there is to machine learning. In fact, you'll see that machine learning is an extensive field of knowledge on its own. And lastly, although [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) are useful for classifying, they are certainly not the only type of classifier out there. Now I'd like to give you an idea of what constitutes a neural network. Simply put, a neural network is a collection of neurons which are small computing units that perform simple calculations to collectively solve a problem. These neurons may be interconnected in several ways. In the illustration, I'm showing the multilayer perceptron, a very popular type of neural network and the one we will implement up ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Fetch](../../Skills/Web%20Development/Fetch.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (1), picture (1)
> **Speakers:** - [presenter] (1)

#### [Why Python](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/why-python?u=76281980&t=0)** - [Instructor] I'd like to take a moment to tell you why we chose [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) as the programing language for this course. So here are some of the most important aspects about Python I'd like you to know. First, Python is undoubtedly one of the most popular programming languages today. It has a very convenient syntax for machine learning, especially because of the mathematical capabilities already embedded in the language. There are lots of libraries available for pretty much any application in machine learning, and this includes lots of neural network variants. Lastly, Python is a very friendly language when it comes to porting your code from one platform to another. So I feel pretty confident when I say that you'll be able to run your code anywhere. That's why I don't expect you to have any platform-related trouble when setting up your environment or trying out your code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4)
> **CLI Commands:** python (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The many applications of machine learning](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=0)** - [Instructor] Since [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) are an important part of machine learning I'd like to tell you just a few of the most popular applications of machine learning, which is the field of computer science related to training machines to solve problems. Machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) are widely used for image recognition where a machine can be taught to make sense of still images or video. An example of this would be face recognition in surveillance systems. [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) is something you may already be used to. Well, this is another typical application of machine learning where the input from thousands and thousands of people has taught a machine what the words mean over time. These people may have different voices and accents, and this makes the computer even better at understanding what new people are saying. Prediction is a big application of machine learning, which is useful at producing stock market advice, weather [Forecasting](../../Skills/Data%20Science/Forecasting.md), and even at many stages of health care, like diagnostics and treatment. Another big application of machine learning are recommender systems, which I'm sure you are experiencing all the time in your video services like Netflix and Amazon Prime Video, in online stores like [Amazon.com](https://Amazon.com), and even in the advertisements you get in social media. These systems don't only learn from your product feedback, whether you liked a product or not, or how many stars you gave to it, but also from your purchase or view history and from the data of people who behave like you. Finally, an example of machine learning I like very much
>
> **[1:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=97)** is [akinator.com](https://akinator.com), which is a genie capable of telling who or what you are thinking of by simply asking questions to you. A similar one is [20q.net](https://20q.net), which plays the game 20 questions against you. You should try these two whenever you get bored. They're surprisingly good. Now, let me briefly tell you about the three broad paradigms of machine learning and some of their best known tools. First, we have [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) where you actively teach the AI by providing it with lots of data samples along with the results you expect. Here are two big problems supervised learning can solve. Regression, where the AI comes up with the continuous function that behaves like the data you provided. I'm talking about tools like the linear regressions you may have used in spreadsheets. This is useful for making stock market predictions and weather forecasting. Next, we have classification, or recognizing the category a sample belongs to. Among other famous tools we have the support vector machine, neural networks, and [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md), which are very suitable for implementing the software behind [akinator.com](https://akinator.com) and [20q.net](https://20q.net). The second paradigm of machine learning is unsupervised learning where you simply feed data into the AI, and it makes sense of this data on its own. Among unsupervised learning tools we have a big family of clustering algorithms to divide samples into clusters,
>
> **[3:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-many-applications-of-machine-learning?u=76281980&t=190)** thus learning from the data. This applies to medical imaging and recommender systems. Anomaly detection systems are capable of finding uncommon samples or outliers. This is crucial for detecting credit card fraud, typos in text, or medical conditions to name a few. Finally, there's a whole family of neural networks that learn from the data. Among these we have autoencoders, self-organizing maps, and deep belief networks. The third paradigm of machine learning is [Reinforcement Learning](../../Skills/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning.md) where the AI is composed of a feedback loop with rewards and penalties based on its behavior. For this area I'll just mention the most famous application today, [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) capable of learning how to play video games without supervision. If you've seen one of these projects you may know that they often exceed human capabilities, which I personally find mind blowing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (2), [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (2), [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) (1)
> **URLs:** [akinator.com](https://akinator.com) (2), [20q.net](https://20q.net) (2), [amazon.com](https://amazon.com) (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Types of classifiers](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=0)** - [Instructor] In this course, we'll work with [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) for classification, their oldest application. So let me show you a few classifiers in machine learning and where neural networks fit in. First we have the [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md), which is a function with an input vector and a single return value. Depending on the values in the input vector the function will return a value between zero and one as a way of classifying the input as belonging to class zero or class one. This classifier is technically a very simplistic neural network known as a perceptron. We'll take a detailed look at perceptrons shortly. Another type of classifier is the K-nearest neighbors algorithm. To understand how it works, suppose that we plot our samples in a 2D plane so that we have some samples that belong to one category shown as squares and some other samples belonging to a second category shown as triangles. This algorithm takes in a new sample of an unknown category shown as a circle near the center and classifies it in the same category as the majority of its K-nearest neighbors. To avoid ties, K must be a odd number, and even so, it's value is very crucial. For instance, suppose we chose K equals three for this plot then the new sample would be classified as a triangle because most of its neighbors are triangles. However, if K equals five,
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=95)** then it would fall into the square category. That said, the advantage of this algorithm is its evident simplicity. There are very few calculations going on. Support vector machines are very similar to neural networks in their input and output structure and they often solve the same problem. Take this plot, for example. A support vector machine is capable of finding the line that acts as a boundary between the two categories of points shown as squares and triangles respectively. This boundary is aligned for this 2D example, but in general, it's known as a hyperplane. So here we have a valid boundary with a potential inconvenience. It's too close to some samples. Here's another boundary that's way too close to some samples. One of the most useful features of support vector machines is that they are capable of finding something close to the optimal boundary, that is a line that separates the categories while maximizing its distance to every point in the plot. Here's an example of such boundary. A seemingly different approach to classification are [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md). These [Algorithms](../../Skills/Software%20Development/Algorithms.md) have a tree-like structure of questions very much like a series of if-else statements, but not quite. It turns out that a decision tree uses a training algorithm based on information theory to produce the shortest possible tree, that is, to classify a new sample in the smallest number of steps.
>
> **[3:10](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-classifiers?u=76281980&t=190)** In the illustration, we have a decision tree to determine whether a passenger of the Titanic survived or not. This tree was produced by observing data and noticing that most of the survivors in the Titanic were women and young children with not so many siblings. It's not perfect. It may fail sometimes because it's based on probabilities but the goal is to come up with a decision tree that asks fewer questions while getting it right more often. The tree is very simple and any programmer could write the code for this decision tree. The really tricky part is getting a computer to figure that out from the survivor data. And finally, we have the classifier we are interested in, feedforward neural networks. Here are some features of neural networks that make them stand out among other tools. They were biologically inspired to mimic the brain. So although they end up performing like other tools, their architecture is very flexible. They may have as many outputs as needed in a single network and their learning algorithm is very clever and simple.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (5), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (2), known as (2)
> **Analogies:** for instance (1), similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Types of neural networks](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=0)** - As you could see, machine learning has an extensive set of tools for pretty much any problem out there. Now let's zero in on [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). There are dozens of neural network types but I'd like to mention three very special types. First, we have Hopfield neural networks which have a fully-connected architecture. That is, every neuron in the network sends its output to all the other neurons. It does have inputs and outputs. The inputs modify what's going on inside the network including the output values. The logic behind this architecture is to let the neurons collectively perform the necessary computation in an emerging manner. That is, the individual neurons aren't aware of the big picture, but we can influence the whole network to produce the outputs we need given the inputs we feed into the network. Perhaps the best-known category of neural networks is the feedforward model where we have a set of inputs, a series of layers of neurons with signals propagating forward until they reach the output. The success of these type of neural networks led to the development of a large family called deep neural networks which have a large number of neural layers between the input and the output. One example of this evolution of deep neural networks are [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md). An application I like very much is the Deep Dream Generator which is a convolutional neural network
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/types-of-neural-networks?u=76281980&t=93)** that takes in a picture as input, then processes it through the many, many layers it has, and finally shows you the modifications it has added to the original picture. These modifications include information it has collected over time from thousands of pictures it has seen before. So it seems the AI has been dreaming with your picture, distorting it with interesting imagery in the process. Here we have a nice picture of my dog, Nicholas, and this is the dream it caused. Notice the bird-like tail. This AI has definitely seen birds before. Here's a picture of me looking all smart, and this is the resulting dream. Notice the tattoos all over my skin, the armrest at the left looks like a plant to me, and my knee turned into a bug. Finally, here's my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning profile picture, and this is the resulting dream. I just love how the AI dreamt of me with a lizard head instead of a hand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (6), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Analogies:** picture (7)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### [Multilayer perceptrons](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=0)** - [Instructor] Now we've come to the point when we'll talk about the multilayer perceptron. This is the best-known feedforward neural network and it's one of the oldest models of the brain. It consists of neurons organized in layers and the data traverses the network from input to output. This is typically sketched from left to right. Feedforward [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) have a so-called fully-connected architecture between layers of neurons. Here's an example. First, we have the input layer. It contains the inputs of the network, technically known as the input vector. This is the only layer that does not contain neurons. You can think of these elements as input terminals. This is important, especially for the implementation, so I'll say it again. You don't have to place neurons in this layer. Second, we have the set of hidden layers, which are composed of neurons. Notice how all neurons from the first hidden layer are taking in all of the inputs from the input layer. The second hidden layer is composed of neurons that take all of the outputs from the first hidden layer. This is what fully connected means in this context. These layers are called hidden because the neural network does not expose them to the outside world. The outside world modifies the behavior of the network through its inputs and the outside world gets modified by the network through its outputs but the neurons in the middle layers are hidden. Lastly, we have the output layer,
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/multilayer-perceptrons?u=76281980&t=93)** which is the last layer of neurons. There are as many neurons in this layer as outputs in the network. So there you have it. Now we are ready to start writing some code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. The Building Blocks of Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Neurons and the brain](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=0)** - Earlier I mentioned that [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) were inspired by the brain, so it makes sense to take a quick view at the ultimate computer. There are many things we know about the brain and so many other things we don't. Here are some important things we do know. The brain is made of neurons. The brain is a biological neural network. Each neuron in the brain performs a very modest cognitive function contributing to larger cognitive functions. Finally, the combination of these cognitive functions results in our brain's mental ability. Everything the brain does is the result of these tiny computations, feelings, memories, movement, speech, dreams, all of it. So let's take some of the known facts of neurons to come up with a computational model of a biological neuron. The structure of biological neurons consists of several parts. We are only interested in three parts of the neuron. Dendrites take electrical signals coming from nerves or other neurons. These signals may come from sense organs like the eyes, tongue, or ears. The nucleus of the neuron is where some processing is believed to happen, so that the combination of inputs can yield some response. This response is usually interpreted as binary, so that if the stimulus from the inputs is high enough, it is said that the neuron fires an output signal. This output signal
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/neurons-and-the-brain?u=76281980&t=93)** goes through an extension called "The Axon" into other neurons, or some other part of the body that will [react](../../Skills/Web%20Development/React.js.md) to this signal, such as muscles. Now let's build a computational model of a neuron based on these three elements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - earlier (1)

#### [A simple model of a neuron](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=0)** - [Instructor] So based on the roles of the dendrites, nucleus, and axons, let's just assign those roles to a set of inputs a calculation unit, and an output respectively. To come up with the block diagram, you can see at the right, we'll call the inputs X0 through Xn minus 1 for a neuron with n inputs. Now, biological neurons seem to [react](../../Skills/Web%20Development/React.js.md) in different sensitivities to different incoming signals, so we'll model that mathematically by assigning a weight to each input channel. Let's call them W0 through Wn minus 1. Next, the computation performed in order to fire or not is a simple weighted sum as shown inside the circle and that's exactly what our output will be. Here's an example of how a neuron would help us classify. Let's suppose we have a two input neuron and we feed data with two features into it. These features are shown in the plot at the right, which shows the risk of getting some medical condition X based on two factors, A and B, as the horizontal and vertical axis. Each point represents a person and its shape represents that person's risk of getting that medical condition. Triangles are at risk while squares are not at risk. Let's say these points come from a number of observations in a research study. Now, let's suppose we want to predict
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=93)** if a person is at risk of getting that medical condition X based on factors A and B alone. We could feed A through X0 and B through X1 into our neuron and it will give us some useful information. Notice that the weights I assign to the inputs are 1 and minus 1. This means that the boundary that divides positive and negative output results would be this line. Take a moment to look at this line and notice that whenever A is greater than B, that is for a point above the line, the result of the weighted sum will be positive. And whenever B is greater than A, meaning that the point is below the line, the weighted sum will be negative. So this neuron model is indeed capable of classifying if we interpret the sign of the weighted sum as the category. This way, a positive result means that the person represented by A and B is at risk, while a negative sum means that the person is not at risk. Now although this neuron is capable of producing a boundary line, it's very limited. That's why we need to talk about bias inputs. So as you noticed, a weighted sum is a linear function. It has a weight assigned to each input which will provide a slope to the boundary. However, an additional independent input is needed to move the line vertically. And this extra input is usually
>
> **[3:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=186)** fed a constant value of 1, but it has its own weight. Now let me show you why we need a bias term. The neuron we've considered so far is only capable of producing boundary lines that pass through the origin or the coordinate zero,zero. So consider this plot where we have a set of students who passed or failed some class and we want to classify other students based only on their grades on two exams in that class, even though there was more graded work. The squares passed and the triangles failed. Our first attempt of a neuron could produce any line with a positive slope like this one. But notice that, try as we might, there's no way of dividing the two categories with a line like this one. How about inverting the slope by switching the signs of the weights? Well, we would get a little closer because the triangles and squares seem to be separated by a negative slope line. But again, stick to the origin and there's no way of placing the line between the categories. As you may have already guessed, a simple solution is to add a biased term. A term that's independent of the grades of exams one and two. Technically, this is the intercept in the equation of a straight line. Notice how this line does the trick for us. None of the previous attempts would've divided the categories like this one does. So this will be a refined model of a neuron.
>
> **[4:41](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/a-simple-model-of-a-neuron?u=76281980&t=281)** It produces a linear function that can place the boundary wherever it's needed. Also, notice that the examples we saw have only two inputs. This was done to keep the explanation simple and in two dimensions. But our neurons can have any number of inputs making the boundary go from a line to a plane or in general to a hyperplane. Pay attention to the notation I'm using here. This is an n input neuron with inputs numbered from 0 to n minus 1. It has an implicit bias input, which doesn't count as an input because the bias is usually a part of the neural network. It doesn't come from the outside. So technically the neuron will have n plus 1 inputs, but we'll say that it has n inputs based on the outside world standpoint. All of these features of a neuron are going to help us classify, but there's still one missing piece if we want to give this neuron the ability to learn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1)
> **Definitions:** means that (3), is a  (2), is an  (1)
> **Speakers:** - [instructor] (1)

#### [Activation functions](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=0)** - [Instructor] We are almost there but our neuron is still missing something. So let me tell you what's wrong with weighted sums. There are two inconveniences I'd like to mention. First, values aren't constrained so a sum may sometimes result in a very large value or a very small value. Second, a weighted sum is a linear function. So the threshold to fire is not very well defined. That is, a change between true and false is not very notable. And most importantly, it's not easily trained. It turns out that other functions that make learning easier are non-linear. This is the real reason to add an element to our neuron. So what's wrong with having a very large and a very small value? Consider this example where we have a two input neuron and we are feeding 1000 to X0 and two to X1. For now, let's leave the bias weight at zero so the bias is not shown to keep the diagram simple. If we run the neuron, we'll have a result of 2006. So notice that although the weights are very similar, two and three, the big difference in the input values has made the neuron very sensitive to X0 and insensitive to X1. That's the job of the weights, not of the inputs. And what's wrong with linear functions? Well consider this neuron
>
> **[1:32](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=92)** with one feature input and one bias input. At the right, we have a plot of the output as a function of X0. Now, this is not the usual 2D plot we have seen so far. The line is not the boundary. This plot is showing the output sum Z as a function of X0, so the boundary is the horizontal axis. Remember, this neuron will classify the input values as one of two categories based on the sign of the output. That means that whenever X0 is greater than -1.25, the output will be positive, putting X0 in the positive category bucket. On the other hand, whenever X0 is less than -1.25, it will go to the negative category bucket. A somewhat inconvenient detail of these type of function is that close calls don't have a very dramatic difference. For example, if X0 is -1.26 and increases by a small amount to -1.24 the category will change from negative to positive but the value of the function will be close to zero either way. A more dramatic change in these cases would give us a bit more confidence in the classification. Once again, the real reason why linear functions are inappropriate for a neuron is that this dramatic distinction between the categories near the boundary will make it very easy
>
> **[3:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=186)** for this neuron to learn. So in conclusion, we need a non-linear element in our neuron that's achieved by adding a so-called activation function to our model, and we'll do that by simply plugging this function to the output of our model so far. This means that the sum will be sent as an argument to the function G. So let's do a quick recap on activation functions. These functions model the desired dramatic threshold behavior of the boundary. They usually constrain the output values and most importantly, they provide non-linearity to the neuron, thus enabling training by backpropagation, which is the method we will use. This requires activation functions to be differentiatable. So let me show you some popular activation functions. First, we have the binary step function, which limits the output values between zero and one. Actually outputs are exactly zero or one. Here's the expression for the function. So as you can see in the plot, the function returns one for positive values of X and zero for negative values of X. There's the dramatic distinction in the boundary. The function jumps between zero and one. Next we have the logistic or sigmoid function. This is the one we'll use in our neuron. This one also limits the output values between zero and one. However, output values are real numbers
>
> **[4:39](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=279)** between zero and one. Here's the expression for the sigmoid function. As you can see in the plot, this function has a smooth change in the boundary, and it turns out that its derivative is a very simple function which we will need for the learning part. This is definitely a keeper. We also have the hyperbolic tangent function. This function limits the output between -1 and plus 1. Outputs are also real numbers in this range. The expression is a well known function composed of exponentials. Now looking at the plot, you may think of the sigmoid function we just saw, and that's because the hyperbolic tangent is the same sigmoid function with a scaling factor and a vertical shift. That's why these two functions behave in a similar way, and you may want to choose one or the other depending on how you want to represent your outputs. For example, if you want to represent false with zero and true with one, use the sigmoid. And if you want to use -1 for false and plus one for true, then use this hyperbolic tangent function. Lastly, we have the rectified linear unit function, often called ReLU. This function limits outputs to positive values, but it's unbounded for positive values. As you can see in the mathematical expression this function leaves the value of X unchanged for positive values and outputs zero for negative values of X. All of these traits are visible in the plot,
>
> **[6:14](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/activation-functions?u=76281980&t=374)** and although the function is unbounded it's a very popular activation function for [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Definitions:** is a  (3), means that (2)
> **Versions:** 1.25 (2), 1.26 (1), 1.24 (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Perceptrons: A better model of a neuron](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=0)** - [Instructor] Now we have our complete model known as a perceptron. As you can see, it has a set of inputs with a global bias term. This input vector will go through a weighted sum and this value will go into our sigmoid activation function. Once again, pay attention to the numbering, the inputs and their weights are numbered from zero to N minus one and the bias is treated as input number N. So how should we interpret the output values of our neuron? Well, the output comes from the sigmoid function. Notice that the output is greater than 0.5 for a positive input, that is for a positive weighted sum. This way, an output value of 0.5 seems like a reasonable threshold for firing. So before we dive into the code, let me point out some implementation notes. All values must be real numbers, not integers. The weights and inputs may be implemented as one dimensional vectors. In our case, we'll use NumPy arrays. This way the weighted sum may be calculated in one operation as the dot product between the two vectors. That's one line of code. Finally, we'll feed the weighted sum to our implementation of the sigmoid function. Before we get to the code, let me show you how to set up a code space and browse through the branches in Visual Studio Code.
>
> **[1:36](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=96)** Here we have the [GitHub](../../Skills/Software%20Development/GitHub.md) repository for the course. To start a code space, you can click on the code button and go to the code spaces tab. Here you will see a list of your existing code spaces. You may start a code space by clicking on its name to continue where you left off. If this is your first code space in this repository, you can create it by pressing the create code space on main button. Let's do that. This will open a tab to set up your new code space. Setting up a code space may take a while but only the first time. Reopening an existing code space is much faster. After booting up, you will see the web version of Visual Studio Code with access to the repository. As you can see in the explorer pane at the left, there is no source folder. That's because we are in the main branch, which has no code. This is a multi-branch repository. So to access the exercise files for a specific video, you must switch to its corresponding branch. You can do that by clicking on the branch symbol at the bottom. Notice that it reads main. When you click on it, you will see a dropdown menu where you can select a branch. The branches in this list are named with the chapter number followed by the video number. This is the fourth video in chapter two
>
> **[3:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=192)** so its branch name must be 0204. Now, some branches are provided in the state shown at the beginning of a video, as well as at the end of it. These have a letter B or an E at the end of the branch name. So for this exercise, I will pick branch 0204B, as in beginning. Look at the folders at the left. Now we have a source folder. Let me expand it and open the mlp.py source file. Now let me get the bottom and left panes out of the way. So here we have the first part of our perception class. First, we have the header for the constructor in line nine to create a new preceptor and object with a specified number of inputs and a bias term, which will be one by default. The only member data we need for this class are the weights and the bias term. So let me initialize the weights as a random array of floating point numbers between minus one and plus one. This random initial state will be important for the training phase. I decided to use NumPy arrays here. That's why I imported NumPy as NP at the top. So I'll do this with the random function in NumPy. Now, the size of the array must be the number of inputs plus one because of the bias input.
>
> **[4:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=289)** Now, this random function returns values from zero to one. So let me add a scaling factor of two and a shift of minus one. That'll do it. And finally, let me save the bias term for later.
>
> **[5:12](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/perceptrons-a-better-model-of-a-neuron?u=76281980&t=312)** Now, let's go to line 14 to write the run function which feeds an input array X into the perception to return the activation function's output. This is a one-liner, but I'll write it in two lines. First, let's calculate the weighted sum with NumPy's dot product between the input and the weights. Notice that I'm inserting the bias at the end of the X array because I'll use it as the last input. And finally, let's plug the sum into the activation function and return that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **UI Navigation:** go to (2), switch to (1), click on (1), dropdown (1), open the (1)
> **Tools:** visual studio (2), github (1)
> **Versions:** 0.5 (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **File Paths:** mlp.py (1)
> **Exercise Files:** exercise files (1)

#### [Challenge: Finish the perceptron](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-perceptron?u=76281980&t=0)** - Ready for your first challenge? Let's finish up the Perceptron class. First, in order to test the class, we'll need to be able to set the weights of specific values. So we need a method for that, and you can find it in line 21. Just replace the pass statement in line 23, and also, remember we'll use a sigmoid as the activation function. So that's the second thing you'll have to write, starting at line 25. Again, do this by replacing the pass statement in line 27. So once again, your task is to write two class methods. The sigmoid activation function, and a separate method to write values to the weights. For the argument, receive a regular [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) list of floating point numbers. You may or may not validate that the length of this list matches the number of inputs in the neuron, including the bias. This is not crucial because we'll use it for simple tests. This should take you about 15 minutes. When you are done, let me show you my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** find (1), python (1)
> **Cross-References:** in the next (1)
> **Speakers:** - ready (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Finish the perceptron](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-perceptron?u=76281980&t=7)** - [Eduardo] Here we have my solution. Both methods are one-liners. First, let's look at the set_weights method starting at line 19. As you can see in line 21, I'm simply assigning the NumPy array version of the argument to the class's weights. Now let's see the sigmoid methods starting at line 23. As you can see, the sigmoid is simply written as the definition we saw earlier, and I used the NumPy exponential function for this. That's it, now we are ready to test our neuron, but first, let's give some meaning to our test.

> [!info]- Semantic Content
>
> **Code Identifiers:** set_weights (1)
> **Speakers:** - [eduardo] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### [Logic gates](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=0)** - In their early days, [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) were tested with simple functions to see if they were capable of performing the calculations they were designed to perform. This led to implementing logic gates with perceptrons. So let's take a look at a two input AND Gate, and its truth table, which summarizes its behavior. Supposing zero means false and one means true, the gate outputs true only in the case where both inputs are true. You may already be familiar with this, but let's look at it from a totally different angle, as a classification problem. This plot shows four data points. The coordinates of these data points are the values of inputs A and B. Notice that the data points show their category as a zero or a one. This way, a two input classifier may come up with a boundary that divides the categories. So based on this, a perceptron may behave as an AND gate. Let me show you how the classification is possible. The boundary we are seeing in this 2D plot is technically the line where the sigmoid is 0.5. Now, a 3D plot may help making this explanation better. So let's add a third axis, now vertical to express the output of the sigmoid. This will be the category that the perceptron has inferred. So if we apply the sigmoid, all of the data points will
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=95)** be a part of the surface of the sigmoid, like objects lying on this uneven terrain. So once again, the height of these subjects finally determines the category the perceptron assigns to them. The decision plane will be located at the middle of the sigmoid. So here is a valid implementation of a two input AND gate. It's a two input perceptron with the following weights: 10 for both inputs and minus 15 for the bias. I just came up with these weights by aiming to get a negative sum for a result of zero and a positive sum for one. After testing it with my perceptron class, I got the values shown in this table. Notice that I included a column for the weighted sum Z. Those were the values I was aiming for with the weights I used. So as you can see in the Y column, the top three values are very close to zero, so they may be safely rounded to zero, and the last value is almost one. So here's how I tested the perceptron at the bottom of the code. First, I created a perceptron with two inputs in line 29, and then I entered the weights as a list in line 30. Notice the order of the weights, 10 and 10 for the inputs and minus 15 for the bias. That's it. In the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the code,
>
> **[3:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/logic-gates?u=76281980&t=187)** I'm testing all four cases with the print function. Let's see it working. If you look at the terminal at the bottom, you'll see something very similar to the truth table of the AND gate. Great. So our perceptron can indeed operate as an AND gate. Let's move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Versions:** 0.5 (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### [Challenge: Logic gates with perceptrons](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=0)** (quirky music)
>
> **[0:05](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-logic-gates-with-perceptrons?u=76281980&t=5)** - [Instructor] Ready for your next challenge. Your task is to make your perception behave as a 2 input OR Gate. Here's the truth table for the OR Gate, and this is what the classification problem looks like. So to be clear, what you need to do is come up with a combination of weight that will make the perception behave as an OR Gate. It may help to fill out the Z column of this table first. Remember, you want a negative sum whenever you want the output to be 0, and a positive sum for 1. Go ahead and tweak the code to test your new OR Gate. This shouldn't take you more than 15 minutes, especially because you may use the provided code which is a modification of the AND Gate code you just saw. When you're done, watch the next video for my solution and comments.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (quirky music) (1)

#### [Solution: Logic gates with perceptrons](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-logic-gates-with-perceptrons?u=76281980&t=0)** - [Instructor] Here we have my solution in line 30. The values I came up with, are 15 for both inputs and -10 for the bias. This way, any input value of one will make the weighted sum positive. Let's see it working. Looking at the terminal at the bottom, we can see the OR behavior. That is, for an input of zero zero, we get an output value very close to zero. The [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the input combinations yield an output greater than 0.99. If you like this exercise, you may want to create the NAND and the NOR gate next. Great! So our perceptron can operate as we ask with the weights we write into it. Now we are ready to teach a behavior to our perception.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** nand (1), nor (1)
> **CLI Commands:** make (1)
> **Versions:** 0.99 (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Building Your Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Linear separability](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=0)** - [Man] There's a reason why perceptrons work as classifiers. Let me tell you what it is. Looking back at the pass or fail example, this situation is suitable for a perceptron because it is linearly separable. Simply put, linear separability is a property of a data set with two categories where a linear function can separate the categories. This is a 2D plot and there is a straight line that separates the categories. Therefore, this example is linearly separable and a perceptron can take care of it. For more dimensions, a plane or hyperplane would separate the categories, but it's still a linear function. Let's look at a pesky logic gate example. The XOR gate outputs one when only one of its two inputs is one, but not both. Look at the 2D plot. I dare you to find one single straight line that divides the zeros and the ones. Did you find it? Of course not, because there is none. The XOR problem is not linearly separable so it's impossible to solve it with a single perceptron. See what I did there? I chose my words carefully. We cannot implement an XOR gate with one perceptron but we can implement it with three perceptrons. Let me show you how. Recall the OR gate. This gate takes care of the first three XOR cases in the truth table. Look at the 2D plot of the XOR gate.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=95)** If we used an OR gate, we would get all but one of the points correctly classified. The top right point should be zero, but the OR gate would classify it as one. What about a NAND gate? This one gets the last three XOR cases right. If we used a NAND gate to classify the XOR cases, we would misclassify the bottom left point. See where I'm going? If we could somehow combine the OR gate with the NAND gate, we would get an XOR. Well, almost. We still need some simple logic. Look at the overlap between the 2D plots. We want to classify as one, only the points that get classified as one by both gates, so the AND gate would do the trick. This isn't anything new though. This is a well known implementation of the XOR gate: a composition of an OR, a NAND, and an AND gate. Here's the schematic of such composition. So this looks like a plan. Let's create a network of three perceptrons. We've already figured out the weights for the AND and OR gates. All that's left is the NAND gate. So let me show you our first neural network to create this logic circuit. Here's our NAND gate. You may want to pause the video and look at the weights to verify that it indeed behaves as a NAND gate.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/linear-separability?u=76281980&t=189)** Here is the OR gate you already designed. And, finally, we plug the outputs into our AND gate. Notice that the bias is always one, and that's a very common practice to tie all the bias inputs to a constant value of one and only deal with the bias weights.

> [!info]- Semantic Content
>
> **Env Vars:** xor (9), nand (7)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2)
> **Speakers:** - [man] (1)

#### [Writing the multilayer perceptron class](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=0)** - [Instructor] So it turns out that the network we just described is a multilayer perceptron. Think about it. It's made of perceptrons, they are interconnected in a feed forward fashion, and they are organized in layers. This is the input layer. Remember, no neurons, just the inputs. This is the hidden layer with two neurons and this is the output layer with just one neuron. So it's time to start writing code again. So here's our first implementation of the MultiLayerPerceptron class. I'll write the constructor and you'll write the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). In the constructor, starting at line 36, I'm receiving a parameter called layers, which is a [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) list of integers, which represent the number of neurons per layer. This includes the input layer, which has no neurons but here we mean the number of inputs. The other parameter is the bias with a default value of one. Now let me show you the data members of the class, starting at line 38. The layers list becomes the layers NumPy array with exactly the same data as the parameter. The bias is also a member. Now in line 40, we have the actual network. It will be a NumPy array of NumPy arrays at the end but for the moment, I'll use a list of lists, mostly because I'll create arrays of arrays of different sizes.
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=93)** And lastly, we'll need another array with the same dimensions as the network to hold the output values of the neurons. This will be useful for propagating the results through the network. The next part is where I'll write some code. It consists of two nested loops to create the neurons layer by layer. The outer loop iterates on i for each layer. So for each layer, we need to have a list of values and a list of neurons. The new list of values will be filled with zeros for every neuron in the layer. Now the inner loop iterates on J for each neuron in the layer but we'll leave the first layer empty because it has no neurons. So for every neuron, I'll create a perceptron with as many inputs as the neurons in the previous layer. Not counting the bias input here. And I also pass the bias value to the perceptron.
>
> **[2:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/writing-the-multilayer-perceptron-class?u=76281980&t=170)** And the last two lines turn our newly created lists into NumPy arrays.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Finish the multilayer perceptron class](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=0)** (bright electronic music)
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-finish-the-multilayer-perceptron-class?u=76281980&t=7)** - [Presenter] Are you ready for your next challenge? Now you must write two methods so we can test our multilayer perceptron. First, we have the set-weights method in line 56. For the W-init argument, you may use the organization you want, but I suggest that you make it capable of initializing a network of any size. Don't forget the bias weights. Also notice that I have written a printWeights method starting at line 61. This is for you to check if your neural network received the weights correctly, and to see the weights when you have trained it later in the course. And lastly, we have the run method starting at line 68, which feeds a sample to the network and returns a NumPy array with the output values. Let me tell you what to return, just to be clear. We simply return the last element in the values array, which is a NumPy array containing exactly the output layered values. So to recap, you must write the method to write values to the weights, and the run method to produce an output. You can test your neural network with the weights we just saw to make it behave as an XOR gate. This shouldn't take you more than 15 minutes, so have fun coding and come back to look at my solution.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Identifiers:** printweights (1)
> **Env Vars:** xor (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright electronic music) (1)

#### [Solution: Finish the multilayer perceptron class](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=0)** (bright upbeat music)
>
> **[0:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=7)** - [Presenter] Here's my solution. For the set-weights method starting at line 54, I'm implementing W-init as a list of lists of lists. That's three dimensions and that's because I'm specifying the layer, the neuron, and the input associated to each weight. However, W-init will have one less entry in the first dimension because I'm not specifying anything for the input layer as it has no neurons. So I implemented two nested loops starting at line 57. The outer loop iterates I through the layers in the network, and the inner loop iterates J through the neurons in each layer. Now, inside the inner loop, I'm using the set-weights method for each neuron. Notice that since W-init doesn't have anything for the input layer, I am indexing the network array at I-plus-one. Now let's look at the run method starting at line 68. So here, the first thing I do is turning X into a NumPy array. Then, I copy X into the first layer of the values array. Now it's time to run a two-level nested loop for every layer in ascending order, and every neuron in each layer. The body of the loop is simply running the current neuron by feeding it the values in the previous layer. That's it. Now we are ready to run a test on the whole thing starting at line 79.
>
> **[1:42](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-finish-the-multilayer-perceptron-class?u=76281980&t=102)** So first, we create a multilayer perceptron with the dimensions of the XOR gate design. Next, I'm assigning the required weights. These are the weights we just saw. Next, I'm printing the weights, just as a sanity check. And finally, we have four print lines to test our network. So let's run it. And here's the result in the terminal at the bottom. As you can see, it has indeed taken the weights we wrote and it's behaving as an XOR gate. Give yourself a pat on the back.

> [!info]- Semantic Content
>
> **Env Vars:** xor (2)
> **Tools:** terminal (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 4. Training Your Network

[↑ Back to Table of Contents](#table-of-contents)

#### [The need for training](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=0)** - [Instructor] This is one of the most important moments in this course. It's time to talk about the need for training. So let's look back and reflect on the following points. Throughout the coding exercises of this course, we haven't seen a useful neural network yet. True, we have seen networks that behave like gates and they may be useful. But there are much better hard-coded alternatives to perceptrons when it comes to implementing a NAND or an XOR. For example, we could simply use the logic embedded in programming languages to get away with logic. Well, it turns out that the real value of [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) lie in their ability to learn. Sure, we just got a multilayer perceptron to behave as an XOR gate by writing the exact weights it needed. But what if we could show the neural network a lot of examples of how an XOR behaves so that it can learn from those examples? Wouldn't that be something. So I have good news. Up ahead, we'll see an algorithm to train multilayer perceptrons known as the back propagation algorithm. So sit tight and pay attention. But wait, there's another reason to train a neural network. Remember, linear separability? Well, I have bad news. Linear separability is hardly a given. Consider this example of classifying things as small or large based on their length and width. Let's say that small is represented by triangles
>
> **[1:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=94)** and large is represented by dots. Moreover, notice that this is not linearly separable. There is no straight line that will divide the two categories but that doesn't mean that a single perceptron won't do a good job at classifying these samples. Take this line, for example. Notice that it will misclassify one dot and two triangles, which doesn't seem so bad. And even if we used a multilayer perceptron, we will get a nonlinear boundary like this one, which does a better job misclassifying only one triangle. It's better but it's not perfect. And that's the whole point of training. We are looking for a model that will get most of the samples correctly classified because we don't know so much about the problem and we are basing our judgment on the samples we have seen. This brings me to the problem of generalizing. This neural network may work very well for the provided data points but it still has to prove useful for new data it hasn't seen before. So let me tell you about three situations in the spectrum of misclassifying and generalizing. Here we have a different dataset for the same problem we just saw. I'm showing the same plot three times because I want you to compare these three situations for a classifier. So look at the leftmost plot and suppose we use a single perceptron with a straight line as boundary. As you can see, this one misclassifies two dots
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-need-for-training?u=76281980&t=189)** and five triangles. This situation is known as underfitting where the network misclassifies too often, so it's not very accurate. So we don't want this. This is bad. Now, look at the middle plot. Suppose we use a multilayer perceptron that ends up using an arc as a boundary. Notice that the misclassification has dropped to one dot and two triangles. Now, these numbers aren't as important as the visible shape of the trend between the categories. When we train a neural network, we are aiming for a boundary that works just right. That is it rarely misclassifies and it generalizes well. If we feed new unseen samples to this network, chances are it will get it right most of the time. Now look at the rightmost plot. Suppose we exhaustively train a very complex neural network so that it always gets it right with perfectly accurate boundary. Notice that it seems wrong to get every outlier correctly classified. It seems wrong because it is wrong. This situation is known as overfitting and you may have guessed that an overfitting neural network is bad at generalizing. If we feed new unseen data to this classifier, it will probably fail often for data points near the boundary. In the real world, outliers are inevitable and we don't need to sacrifice the accuracy of our classifier just to classify known data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Env Vars:** xor (3), nand (1)
> **Definitions:** known as (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [The training process](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=0)** - [Instructor] When training your neural network, there's a usual top-level procedure I'll briefly describe to you. But first, let me tell you what a dataset is. First of all, a dataset is a collection of samples that contain features and labels. We usually represent features with X and labels with Y. The input signals for the network are known as features because what you usually feed a neural network are features of a data point, which can be represented as numbers. For example, length, height, price, salary, number of rooms in a house, large sugar level, and so on. The labels, on the other hand, are the known category attached to each sample. This is how we teach the network. We show the samples to it. And finally, the network is able to learn with each feature label pair. So here's the usual training process. You typically want to use three datasets: a training set, a validation set, and a testing set. The training set is used to train the network so that it learns all it's supposed to learn. This is important so I'll say it again with different words. This is the only dataset that will be used with the training algorithm. The other two are used for two rounds of assessments. So we run the training set with the training algorithm. Another important detail is that we have to run the training set lots of times. Each time we run the training set
>
> **[1:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=94)** with the learning algorithm, it's known as a training epoch. Well, the training process usually involves hundreds or thousands of training epochs. We stop after some number of epochs or until some error metric drops under a desired value. We'll talk about this error metric in a bit. After that, the neural network will have learned something from the samples. The validation set is used to assess how well our neural network has learned as compared to other competitors. There's nothing we intend to do to improve the learning. Actually, what's usually done here is that we prepare several classifiers, say two support vector machines and three [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). We may tweak our network, you know? We could use one with one hidden layer and another with three hidden layers. We may also vary the number of neurons per layer and we may use different activation functions, for example. So we train all of the competing classifiers. And then we feed the validation set to all classifiers. This time, we only run the dataset. We don't train the classifiers. The validation set will allow us to rank our classifiers and choose the one that shows the best performance for us. Let's say that's our neural network A. Lastly, the testing set is used for evaluating the finally chosen model, just to make sure it's being able to classify data
>
> **[3:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-training-process?u=76281980&t=188)** it hasn't seen before. Okay, so what happens when we run one single training sample? This is important for us to write our training code. So first, we feed an input sample X to the network. Then we compare the output to the correct value Y. With this output and the expected correct value, we may calculate the error. And we can use this error to adjust the weights in the network. And we do that to classify that sample a little better in the future without messing up our response to other samples the network learned earlier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Definitions:** known as (2), is a  (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [The error function](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=0)** - [Instructor] Earlier I mentioned the error of a neural network output. So let me tell you what I meant by that. An error function measures how bad a classifier is doing. So a large value is bad and a small value is good. This function is essential in the training process. So up ahead we'll learn about a training process called gradient dissent. Throughout the algorithm, we'll calculate two types of error metrics, one for the output of a neuron and one for the whole network. So the first metric is not formally known as the error because it's just the measure of how far off a neuron is from the expected value dictated by the label in the dataset. It's simply a subtraction. Let me show you. Suppose we enter a sample {x, Y} to a neural network which for now will be a single layer perception. Now suppose that the output of this one output network is 0.6, and let's say that the label for that input sample is y equals one. This way, the error or deviation can be calculated as the subtraction Y minus out. Again, this output error is just a step in the calculations but it will show up quite often. So the point is that the training function must somehow contribute to getting out closer to why over time. That is making the error approach zero. Now, when we are assessing the performance
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-error-function?u=76281980&t=93)** of the neural network, we use a metric known as the mean squared error. There are several important details about this function. The error is calculated as the sum of the squared output errors for all neurons in the output layer, all of this divided by n, the number of neurons in the output layer. Remember, a neural network may have more than one output. Since we'll use this error to check how our training is going, the training process seeks to minimize this error. A nice thing about this metric is that it gets rid of the sign of the actual error. So when minimizing the error, we're not interested in the direction of this error. It's all the same to us if the output is over or under the desired value. What we extract from this function is the size of the error. This way we always want to minimize this function.

> [!info]- Semantic Content
>
> **Definitions:** known as (2)
> **Versions:** 0.6 (1)
> **Speakers:** - [instructor] (1)

#### [Gradient descent](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=0)** - [Instructor] Great, now that we know about the error function we want to minimize, let's talk about the general algorithm known as gradient descent. This is a training method to minimize the error of our neural network. It consists on adjusting the weights in order to find the minimum error. To get an idea of the logic behind gradient descent, think about trying to go downhill to the lowest valley in the error function. So here's a graphic aid to understand what gradient descent is all about. For now, suppose we have a neural network with several weights but we are only interested in modifying one weight to see how it affects the overall error of the network. So let's say we get this function and we set this weight to say this value. Now think of valuating this function as placing a marble over the function, like this. Reducing the weight will get us to a higher, thus worse, error. But increasing the weight will lead us downhill. If we keep increasing the weight, we'll eventually reach the lowest point in the plot. That's our objective. This is the global minimum of the function and that's the best error we can get by modifying this particular weight. So in some sense, we want to simulate gravity in this plot. And that's what gradient descent will do for us. Now let me quickly warn you about a possible problem here. Since we don't know what our error function will look like
>
> **[1:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/gradient-descent?u=76281980&t=97)** and we initialize our weights randomly, what would happen if we start with this value for the weight? Well, simulating the same gravity effect with gradient descent, we would move the marble to the left, eventually getting stuck in this valley, which is not the global minimum but a local minimum. Don't worry, there are several methods to overcome this local minina problem. Pushing our example a little forward, think about modifying two weights to manipulate the error. This would give us a 3D plot where the height is the error and the two weights will place the marble at different points in this surface with mountains and valleys. The objective is still to get the marble to the lowest point. As you can see, it becomes a bit more complicated with more weights. So with two weights, this became a tri-dimensional plot. Well, the XR neural network has nine weights so this becomes a 10-dimensional plot, which we can't even understand graphically. The good news is that we have a method that will simulate this gravity for us, so we don't have to worry about the number of weights involved.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [The Delta rule](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=0)** - [Instructor] The simplest form of the algorithm we'll implement is known as the delta rule. It's a simple update formula for adjusting the weights in a single perceptron, that is a neuron. Yes, it's a simple formula but its reasoning is very clever. The delta rule considers the following values. The output error, this is the simple subtraction error. One input, the one affected by the weight we are going to tweak. And a constant known as the learning rate. So here's a nice equation to calculate the update in a weight i in a neuron k. Let's call it delta w sub ik. And it's the value we'll have to add to w sub ik to get the boundary closer to what we want. So to calculate this delta, we multiplied the learning rate eta times the output error. That is the label y sub k minus the neuron's output o sub k times the ith input value x sub ik. Yeah, it's very simple but notice what's happening there. The output error will be positive if the label y is higher than the output, and it will be negative if y is lower than the output. This means that when we later update w, it will contribute to making the output closer to the provided label. If we calculate all of the delta ws,
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=95)** and add them to the ws, our perceptron will be one step closer to having the boundary we want. So let me tell you a few things about the learning rate. First, it's a unique constant in the neural network. There's only one learning rate for all neurons. As the name suggests, it directly affects the rate of learning because higher values will result in larger leaps for the weights and lower values will result in smaller leaps for the weights. Does a higher learning rate mean faster learning? Yes. Does a higher learning rate mean better? No. The learning rate is usually initialized at 0.5 but you may have to tune it if learning is too fast or too slow. Here's why. Let me show you six updates of a weight in this error function, considering a learning rate that's too slow. So pay attention to the marble. One, two, three, four, five, six. The marble will eventually find a minimum. It will take a long time and it may get stuck at the first local minimum it finds. This could be much better. Let's see six steps again with a learning rate that's too high. One. Two. Three. Four. Five.
>
> **[3:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-delta-rule?u=76281980&t=187)** Six. Large leaps may miss the minimum, getting stuck around it or even missing it all together. The desired situation is a learning rate that's just right. Notice that it may mimic inertia going a bit past the minimum but being drawn back into the valley. One. Two. Three. Four. Five. Six.

> [!info]- Semantic Content
>
> **Definitions:** known as (2), is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)

#### [The Backpropagation algorithm](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=0)** - [Instructor] We are finally ready to see the back propagation training algorithm. This is a general form of the Delta rule. It has several requirements on the neuron model especially on the activation function. Don't worry, the sigmoid makes it easy. The algorithm calculates all weight updates throughout the network. This is done by propagating the error back through the layers. So here are the steps of the backpropagation algorithm to train a multilayer perception with one sample. One, feed a sample to the network. Two, calculate the mean squared error. Three, calculate the error term of each output neuron. Four iteratively calculate the error terms in the hidden layers. Five, apply the delta rule and six, adjust the weights. Now for your next challenge you'll have to write the back propagation algorithm. That's why we're going to have a closed look at each of these steps because it's easy to get confused. For this example, I'll use a volunteer which is this network with three inputs- four neurons in the first hidden layer three neurons in the second one and two in the output layer. In my multilayer perception class, these are layers zero through three respectively. As you can see, our neurons are explicitly showing their bias inputs because we'll use them in the algorithm. But remember that these inputs are rarely shown
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=93)** for the sake of simplicity. The bias is fixed at one. So don't confuse it with the bias input weights of the neurons. The first step is to run the network forward. So we feed a sample, say X equals 251 and let's say that our network spitted out the output vector O equals 0.2 and 0.49. Our training sample included a vector of labels. Y equals zero one. That is the expected output for the first output neuron is zero and one for the second one. The second step is to calculate the mean squared error. This needs to be done at this point because we will assess the accuracy of the neural network later and we are about to change its weights. Remember, the MSE is calculated on the outputs so we use Y and O. So subtracting vectors Y minus O we get minus 0.2 and 0.51. Squaring those values, we get 0.04 and 0.2601. Adding those values and dividing by two we finally get 0.15. That's the current state of the error metric for this network when it receives X as input. We'll use this value later to review how well the network is learning. This is the error function
>
> **[3:07](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=187)** that is undergoing gradient dissent. Is 0.15 a large or small error? Bear with me when I say that it doesn't matter. What matters is reducing this number very much as we iterate. Step three is to calculate the output error terms. This is a third error metric and it's an intermediate error calculation that will be used for guessing how bad each neuron is doing. Notice that we're paying attention to the output layer. We'll later use these error terms to calculate the error terms in the hidden layers moving backwards through the network. That's the reason for the name back propagation. Finally, we'll know the error term for all of the neurons in the network and we will apply the delta rule to calculate the deltas and adjust the weights. So the error term for neuron K in the output layer is represented by lower case delta sub K, and it's related to the partial derivative of the error of the network with respect to each weight in that neuron. So delta sub K equals O sub K. That's the output value of neuron K times one minus O, sub K times the simple output error Y sub K minus O sub K. Just so you know this part is the derivative of the sigmoid function which is very simple,
>
> **[4:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=280)** and that's one of the main reasons to use the sigmoid function as an activation function for our neurons. So let's suppose we are interested in calculating the error term for output 01. Now let's [Zoom](../../Skills/Software%20Development/Zoom.md) into the output layer for this example. To calculate lowercase delta sub one that's the error term for neuron number one in the output layer, we'll use O sub one and Y sub one in the equation. It's that simple. The fourth step is where the magic happens. Now we're going to calculate the error terms for the hidden layers and we do this backwards. The previous step was done in the output layer. This step iterates from the last hidden layer all the way to the first hidden layer to find a error term per neuron. Here's the equation for a error term lowercase delta sub H. It's almost the same as for the output layer. The derivative of the sigmoid is still there, but in the hidden layer we have no idea about the error because we simply don't know what to expect from the intermediate neurons. So what we use instead is a sum of a product that includes the error terms in the neurons connected to this neurons output. These neurons are in the next layer and we have just calculated their error terms lower case deltas of K but that's not all we calculate in this sum.
>
> **[6:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=373)** We must multiply these error terms by the weight of the input that's connected to the output of our neuron H. So let's zoom in again to see what happens in the second neuron of the second hidden layer. This will be neuron one in the last hidden layer. So in the equation H will be one. Actually, by lowercase delta one, I'm hiding the layer number. So let me be more specific in the diagram and call this lowercase delta two one, meaning that this neuron is in layer two and it's neuron number one, the second neuron. To calculate lowercase delta sub two one, we'll need the usual derivative of the sigmoid times the weighted sum of the error terms. So these are the [products](../../Skills/Software%20Development/Microsoft%20Products.md) we'll have to add for this neuron. Lower case delta three zero or the error term of the output neuron zero times W zero one. That is the input weight one of this output neuron. We'll add this product with the product of lower case delta three one, which is the error term of the other output neuron times W one one which is the weight of the input connected to our neuron two one. See why I call this magic? We are reacting to the error propagated back through the network in the right proportion
>
> **[7:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/the-backpropagation-algorithm?u=76281980&t=467)** by scaling the error terms with the weights. This means that errors with higher weights will take more of the blame and errors with lower weights will get less of the blame. Now, just for completeness, let's back up to layer one. So now in layer one, let's say we are interested in the third neuron. That's lowercase delta two in this layer or it's full name would be lowercase delta one two as shown in the diagram. To calculate this sum, we'll have to multiply W zero two with delta two zero W one two with delta two one W two two with delta two two, and add these three products. It's all downhill from here. Step five is to apply the delta rule. Since we now have all of the error turns the lower case deltas, we may proceed to calculate the weight adjustments or upper case deltas. So as the equation shows, to compute the weight adjustment for an input J in a neuron I we need to multiply the learning rate times the error term of the neuron I times the input value J in neuron I. Great, now that we have the deltas we simply add them to the weights and we are done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (2)
> **Versions:** 0.2 (2), 0.15 (2), 0.49 (1), 0.51 (1), 0.04 (1)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** in the next (1), in the last (1)
> **CLI Commands:** find (1)
> **Env Vars:** mse (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Write your own Backpropagation method](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=0)** - [Instructor] Ready to finish up your multilayer perceptron class? This time your task is to write a backpropagation trainer method, which will run one sample through the network with the backpropagation algorithm. Don't worry, you'll just have to write a few lines per step in the provided code. In fact, you'll just have to fill in the blanks. You can do this. And feel free to go back to the backpropagation videos if you get stuck. The method is called bp and it receives a feature vector x and a label vector y. Both are regular [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) lists. So the first two lines convert those lists into NumPy arrays as usual to have the operations in NumPy. Now your challenge starts in line 87. Notice that I've placed a comment for each step and skeleton code for the loops. Now for steps three and four, you'll need a new NumPy array of arrays I added to the class to store the error terms or lowercase deltas. That's why I named it lowercase d. You may want to check the constructor code starting at line 36 and look for this array. So as you can see, I have highlighted all the appearance of d in the constructor. And if you pay attention,
>
> **[1:33](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=93)** you'll see that it has the same organization as the value's array. So it's created and initialized right next to it. So this d array holds the error term for each neuron, just like the values array holds their output values. Now let's go back to the backpropagation method. As you can see in line 109, we must return the mean squared error because we'll need it the training process later. Speaking of training, at the bottom, I have included a training example starting at line 113. So notice that I'm running the bp method once for each case in the XOR truth table and that's my whole dataset. Just four samples. I'm running it for 3,000 epochs and I'm calculating the mean of the four errors in an epoch. Notice that I'm only printing the error every 100 epochs. So I'm expecting to see 30 error values in the terminal to keep it simple. In line 126, I am also printing out the weights for you to see what the neural network finally came up with. And finally, we print the truth table. So when you're ready to test your backpropagation method, you will see the error drop as the training advances. You will see the final weights and lastly, the four cases will be tested. So you'll know how your training method is doing.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-write-your-own-backpropagation-method?u=76281980&t=189)** This may take you a while. Anything between 30 and 45 minutes. So have fun and when you're done, look at my solution in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** python (1)
> **Env Vars:** xor (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Prerequisites:** you'll need (1)

#### [Solution: Write your own Backpropagation method](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=6)** - So here's my solution. Step one is the simplest. In line 93, we just run X through the network and assign the result to a new array called outputs. Step two is where we calculate the mean squared error. So first, I save the simple errors in an array called errors, and notice that I'm using NPI vector operations like the subtraction Y minus outputs. Then the mean squared error is the sum of the values in error squared divided by the number of neurons in the last layer. Step three is also done in vector operations. Just following the equation, notice that the result goes to the last element in our D array. Now for step four, pay attention to the loop starting at line 1 0 3. First, I calculate the weighted sum of the forward error terms and then use that sum for the current neurons error term. Notice that the outputs are not recalculated They are fetched from the values cash. All this is assigned to each element in the D array which contains the error terms. Steps five and six contain the most code but it's actually quite simple. I goes through the layers, J goes through the neurons and K goes through the inputs.
>
> **[1:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=100)** That's why it goes from zero to the number of neurons in the previous layer, plus one because of the bias weight. And that's exactly what the body of the innermost loop is doing. Look at line one 14. If K is the last weight, we calculate the delta by multiplying the learning rate times the error term in that neuron times the bias term as the input because well, that's the input. On the other hand, if it's not the bias weight we are checking with K. Then we calculate the delta as the learning rate times the error term times the actual input, which comes from our values. Cash indexed at the previous layer. That's it. Finally, we return the mse. So let's see it working here. We have the results. Pay attention to the 30 error values as they go down.
>
> **[2:48](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=168)** Next we have the weights. Notice that it came up with something other than the nan or and combination we designed earlier. Look at the values and signs of the weights. This is surely a logical equivalent of that initial ex o R. And finally, we have the truth table at the bottom. As you can see we are practically getting the ex o r behavior meaning that our artificial brain has learned it's alive. Now, this is my favorite part of the whole process. This plot shows the learning process for the Exor gate. We just saw I got this data by training an exor like we just saw and I copied the 30 error values reported in the terminal. I pasted them in a spreadsheet to finally make the plot. You should try it on your own and you'll get something very similar. As you can see, the plot shows how the error drops as the neural network learns epoch after reoc. These plots usually show a very subtle improvement in the error in the first iterations. But as the gradient dissent starts to pay off you'll see a dramatic drop after which the improvement is subtle. Again, that's just the law of diminishing returns working and that's a smart way of telling when you should stop training. You don't want to waste your time getting less significant improvements or even worse getting your neural network to over fit.
>
> **[4:24](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-write-your-own-backpropagation-method?u=76281980&t=264)** So if we look at the plot you will see that the dramatic improvement happened sometime around 1000 eppo, and you'll also see that the diminishing returns started to show at about 1500 eppo. So with this in mind maybe we should have stopped training some time before 2000 to avoid overfitting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** npi (1)
> **Cross-References:** in the last (1)
> **Tools:** terminal (1)
> **Speakers:** - so (1)


### 5. Let's Make a Segment Display Classifier

[↑ Back to Table of Contents](#table-of-contents)

#### [Segment display recognition](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=0)** - [Instructor] Congratulations for making it this far. You've learned an impressive number of concepts that will be useful in your journey into [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning. Now it's time to have some fun with a practical application of your brand new multilayer perception class. The project is a simplified version of optical character recognition or OCR. So let me tell you a few details about OCR. It's a set of [Algorithms](../../Skills/Software%20Development/Algorithms.md) used to recognize characters in a picture. It's useful for many applications like digitizing books or documents. For example, if you have an old book, a contract, or a printed document you'd like to convert to a PDF file. A more advanced version of OCR is used for taking notes by hand on your tablet or smartphone. This software is able to learn from your own handwriting. Another application is actually reading. I'm talking about systems that are supposed to understand written text in front of them. A nice example would be a robot that reads books out loud. It has to understand the printed characters prior to converting text to speech. Now about our project. It's a Segment Display Recognition system which I decided to call SDR. This is not a formal term, I just came up with the name. But if you do a web search for systems that recognize digits from seven segment display, you'll find lots of interesting projects and research papers. The objective here is to recognize digits from a single seven segment display like this one.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=95)** The letters shown inside each segment are their standard names, A through G. We are all familiar with these displays, and these are the most popular digit patterns for seven segment display, and they are the ones we will use for training our neural network. So again, the objective is to recognize multi-digit numbers by first recognizing the digits separately. This is a suitable task for a neural network because the input may come from a picture or a camera used by some [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) system. The software will extract the brightness of each segment and send that seven number vector to our neural network. We'll take it from there. Since we'll receive the brightness of each segment, our neural network will have the chance to generalize and guess what a pattern really means. In other words, not all numbers will have a 100% brightness in every segment that's on. Actually, there may be some ambiguous patterns. Take this alarm clock, for example. The second digit looks like a zero but it has its middle segment, segment G, somewhat visible, so it may be an eight. Here's another example. Look at the third digit. It's easy for a human to know that's a four. Even though it's segment F, the leftmost is quite dim. We as humans wouldn't expect this digit to be a minus one. Well, for these ambiguous patterns our neural network may be a very good alternative
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/segment-display-recognition?u=76281980&t=189)** to a simple lookup table.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1)
> **Env Vars:** ocr (3), pdf (1), sdr (1)
> **Analogies:** picture (2), for example (2)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Design your own SDR neural network](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-design-your-own-sdr-neural-network?u=76281980&t=0)** - [Instructor] All right. Here's a system-level challenge for you. Design your own segment display recognition neural network. We'll give some thought to the design first, so please don't write any code just yet. Instead, try to answer this question. How would you recognize numbers from zero to nine? Think about the dimensions of your multilayer Perceptron. We already know that we want seven inputs because we'll receive seven brightness levels, one for each segment, but try to answer these questions. How many inputs and outputs would you use? How many hidden layers, and how many neurons per hidden layer, would you use? And also, try to think how you want the data to be presented at the output of your neural network. Your solution should be a diagram like this one, showing the inputs, the neurons, their connections, and the outputs. Don't worry about showing the bias inputs for all neurons. They will be there, just not in the diagram. Give some thought to this. As with many computing problems, this is one of the most important steps. This should take you about 15 minutes. When you are done, watch the next video for a few solutions I came up with.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Design your own SDR neural network](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=0)** - [Instructor] How did you do? I came up with three plausible solutions for this single digit SDR neural network. The first has seven inputs and one output. The second has seven inputs and 10 outputs and the third has seven inputs and seven outputs. Let me tell you what I was thinking when I designed each of them. My first network has seven inputs, one hidden layer with seven neurons, and one output. In fact, all three designs have just one hidden layer with seven neurons. My thinking was to allow each segment to affect one neuron exclusively, if needed. You could have used more or less neurons in this layer and you could have used more hidden layers. Now, since I only have one output neuron, my output will be a real value between zero and one, so some calculations have to be made to output numbers from zero to nine. I was thinking of assigning buckets to encode each digit. For example, anything from 0.1 to 0.1999, many nines, will correspond to one. Anything from 0.5 to 0.5999, many nines, will correspond to five. That is, the recognized digit will be the truncated integer of 10 times the output. Although this is a valid model, a one-output neural network for a multi-class problem
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=95)** is almost always avoided and discouraged. The reason is that it has many setbacks and the alternatives are much better at little to no cost. Here, we have two things that are wrong about this approach. First, we are solving a classification problem with a regression tool. The sigmoid function in the output makes it a binary classification tool. So, assigning the output values to uniformly distributed buckets in the output domain is not an easy task with the nonlinear sigmoid, because those buckets aren't so uniformly distributed for the input domain. The reason for this is that we are using a good tool for the wrong problem. In other words, we are drilling with a screwdriver. It may get the job done, but our drill would do a much better job. Here's the second reason not to use this model. We are assigning the values to consecutive buckets in the output. That is, we are mapping our unrelated classes to sequential values as if our classes needed to be sorted that way. Yes, in our segment recognition system, we are using digits, but they don't have to represent their values. They're just symbols for now. Think about it with a different example, like this one with four classes: bird, dog, cat, and mouse. There's no real reason to say that dog is greater than mouse or bird is greater than cat. So, with this mapping,
>
> **[3:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=188)** we are constraining our classifier to satisfy an additional and useless requirement. This adds complexity to the learning struggle of our neural network. So, this is my first system. Once again, this is a valid model, but there's a universally accepted alternative. My second network is that alternative. It has the required seven inputs and 10 outputs in a technique known as one-hot encoding. What this means is that each of the outputs represents one of the output classes, and so each of the output neurons will raise its hand, if you will, whenever we enter the pattern that neuron is sensitive to. The way for us to show the recognized number would be to report the class of the output with the greatest value. Notice that we've solved both problems of the previous model. All of the classes have their own independent neuron so they're not constrained by each other. How's that for a convenient alternative to the one output system? There's really no reason not to choose this system. My third system is something different. This one has the seven inputs and seven outputs that also represent the same seven segments. So, yes, whenever you enter, say, the pattern for number four, it will output the same pattern for number four. Now, this may not sound like a very good idea at first, but think of it like the text predictor in your smartphone, which suggests to complete the words you are typing.
>
> **[4:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-design-your-own-sdr-neural-network?u=76281980&t=284)** Well, this system will suggest to complete the number you are entering if we were to edit the number pattern we are sending into the network. My objective here is not to predict numbers entered segment by segment over time because that's not done in reality. However, this system is able to let you peek into the reasoning of a neural network. This system will show you how certain it is of the pattern it has recognized. I'll show you what I mean in my implemented system a few videos ahead.

> [!info]- Semantic Content
>
> **Versions:** 0.1 (1), 0.1999 (1), 0.5 (1), 0.5999 (1)
> **Definitions:** is a  (2), in other words (1), known as (1)
> **CLI Commands:** cat (2)
> **Analogies:** for example (1), think of it like (1)
> **Env Vars:** sdr (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Challenge: Train your own SDR neural network](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=0)** - [Instructor] We have come to our final challenge. It's time to train the segment display recognition neural network you designed. So here's what you have to do in this challenge. Create the neural network you just designed. Train it either using the provided datasets or your own. Now, my dataset is the very minimum. We'll simple train the network with the 10 ideal patterns. So you may add your own patterns if you want. Train the network for a large number of epochs. Something between 1,000 and 3,000 epochs will do the trick. Just like the XOR training challenge, we will not use the validation or test phases. Finally, test the neural network with your own samples. Do this in the text terminal to keep it quick and simple. Now, after I show you the text-based solution for this challenge, I will show you three separate applications that implement the three [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) we saw earlier using sliders, buttons and other GUI controls. And you'll have the chance to use your neural network in these demos if you'd like. So remember, you are only expected to test your neural network in the terminal. That said, if you would still like to make your own GUI, please feel free to do so.
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=95)** So as usual, I have prepared some testing code at the bottom. Here you should be ready to write your own code but I have provided the very minimum training set for the three models I showed you in case you decided to implement one of them. Be aware that these code snippets aren't functional on their own. So you'll have to write the missing code if you want to use them. If not, feel free to delete them from this file. So starting at line 124, we have a piece of code you may use to train the seven to one neural network. Notice that the patterns in the input are entered with zeros and ones. Pick a moment to read these lines and verify that each sample corresponds to the number in the comment at the right. So for the labels, notice that I'm assigning each pattern to the midpoint of its intended bucket. For example, the pattern for seven is mapped to 0.75. Stating at line 140, we have the patterns for the 7 to 10 neural network. The patterns are the same as before but notice the nice identity matrix look of the labels. That's how one hot encoding looks like. No pun intended. Finally, starting at line 156, we have the simplistic dataset for the seven to seven neural network.
>
> **[3:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/challenge-train-your-own-sdr-neural-network?u=76281980&t=189)** Again, at first glance, it looks silly to assign the same input values to the outputs. But I actually find it very interesting. You'll see why in the next videos. This shouldn't take you much longer than 15 minutes. So go train that network and come back to see my text-based solution, followed by three demo programs with a hopefully nice GUI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Env Vars:** gui (3), xor (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** terminal (2)
> **Analogies:** just like (1), for example (1)
> **Versions:** 0.75 (1)
> **Cross-References:** in the next (1)
> **Warnings:** be aware (1)

#### [Solution: Train your own SDR neural network](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=0)** - Let's see my solution. This program will train each of the three systems and then it will read an array of seven floats from the terminal to show us the outputs. In line 121, we are obtaining the number of epochs from the user. Then we initialize mlp1 as the seven to one system, mlp2 as the seven to ten system and mlp3 as the seven to seven system. Next, we have the provided training code for mlp1
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=49)** then for mlp2, and for mlp3. Then starting at line 176, we have a loop where the input pattern is read from the terminal. The array must be entered as a series of exactly seven values corresponding to the segments A, B, C, D, E, F, and G all separated by spaces. When a negative value is entered, the program ends. So the body of the loop prints an interpreted version of the output for each system. Look at line 182 for the output of the seven to one system. Notice that I'm multiplying the [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) output by 10 and then printing the truncated version of that number. That is an integer between zero and nine. In line 185, we have the output of the one hot encoded seven to 10 system. Here I'm printing the index of the highest value in the network's output. This is easily achieved with the arg max function. And for the seven to seven system in line 188, I'm printing around that version of the output array. So, we will only see zeros and ones. Let's see it all working.
>
> **[2:23](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/solution-train-your-own-sdr-neural-network?u=76281980&t=143)** First, we are asked for the number of epochs to train the neural networks. Let me enter 3000. Now, we wait. Remember that each system is being trained for thousands of epochs, so this will take a while. Now, we get to enter patterns to the three neural networks. Let's start with an easy one. The pattern for number one is 0110000. There you have it, the seven to one network recognized number one. The seven to 10 system recognized one as well, and the seven to seven system outputs the same input pattern. Let's see it again with a pattern that's not in the training set. I'll enter a variation of number seven. That is three ones followed by four zeros, but I'll enter nearly ones and nearly zeros instead. Like this. And there you have it, all three systems recognized number seven. Now, let's deviate a bit more. As you can see, they are all recognizing number seven. Feel free to try different patterns and tweak the code. I understand if you are not having much fun with this example, this is a visual system so a GUI application is more appropriate, and that's what we are going to see in the next videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (2)
> **Tools:** terminal (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** gui (1)
> **Cross-References:** in the next (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### [7 to 1 network GUI demo](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=0)** - I wrote three applications for our segment display recognition neural network, all with a graphical user interface to allow you to see the neural network working as you tweak the input values. Please note that you cannot run these demos in the [GitHub](../../Skills/Software%20Development/GitHub.md) code space because of the gooey elements. So if you'd like to follow along, you'll need to have [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) installed in your computer, along with Non-py and TK inter. What you are seeing right now is my local installation of Visual Studio Code. The source files are called SDRNN_7to1, SDRNN_7to10, and SDRNN_7to7.py respectively and they all import MLP.py, so you may try your own neural network with them. For your convenience, all these files are included in the code for the three demo videos. If you would like to read through these source files, be advised that they contain a lot of code to implement the graphical stuff, so you may be interested in two functions that deal with the neural network. These functions are present in all three implementations. The first one is called train callback and that's where the back propagation happens. You can see it here starting at line 73. The second one is called run.ann
>
> **[1:35](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=95)** and that's where the neural network is run once every time the user changes the input controls. I'd rather show you the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) in the running application. Let's start with the 7 to 1 model. So first, let me tell you about the user interface. At the left, I created a set of seven sliders to act as the segments in the input. Moving them causes their color to simulate becoming brighter. At the right we have parameters and results. You may enter the number of Epochs to train next which will happen when you press the button. Then as a result, the application displaced the last reported training error, the number of Epochs trained so far, the raw output value, and finally the recognized number in a big, bold font. So let me train this network in steps of 100 epochs. Pay attention to the training error as it drops.
>
> **[2:45](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=165)** I'll keep training until the error drops below 0.0001. In other words, when it reaches four zeros to the right of the decimal point. As you can see I have trained this network for 1700 epochs. Now, none of these applications has a valid excuse for not recognizing a trained pattern. So all numbers from zero to nine must be correctly recognized. Let me show you a few patterns. Here's number one,
>
> **[3:30](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=210)** here's number four,
>
> **[3:40](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=220)** and number nine.
>
> **[3:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=229)** Not recognizing either of them would've been unacceptable. Okay, recall I mentioned something wrong about this model. Now let me show you what that is. Let me enter number seven. Yes, it's classified correctly but now let me change the input values from total zeros and ones to nearly zeros and nearly ones, and let's see what happens.
>
> **[4:26](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=266)** Does this look more like a six than a seven?
>
> **[4:46](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=286)** How about this? And this does not look like a five at all. With this behavior, we are witnessing a system that is not very good at generalizing. Now, let me show you something worse.
>
> **[5:16](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=316)** Here we have the pattern for number zero recognized correctly but let me slowly change the middle segment to turn this zero into an eight and back. Pay attention to the output number as I move the slider. Watch closely.
>
> **[5:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-1-network-gui-demo?u=76281980&t=349)** Did you see that? Now, ask yourself, is it necessary to go through 1, 2, 3 all the way to eight? Does changing the brightness of the middle segment make the pattern look more like a four or like a five? Of course not. Our neural network was forced to satisfy that constraint and in doing so it has sacrificed its ability to generalize. That does not look good for a neural network at all.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Definitions:** is called (2), in other words (1)
> **File Paths:** sdrnn_7to7.py (1), mlp.py (1)
> **CLI Commands:** python (1), make (1)
> **Tools:** github (1), visual studio (1)
> **Env Vars:** mlp (1)
> **Versions:** 0.0001 (1)
> **Warnings:** note that (1)

#### [7 to 10 network GUI demo](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=0)** - [Instructor] All right. Now let's look at the one hot and coding model, the seven to 10 network. Notice that we have the same controls except for the raw output, which is now showing us 10 raw outputs. That is one output per class. So remember, the output with the highest value will be the one reported as the recognized number. Let me train this network for 1000 epochs. So again, let's see if it recognizes number three correctly.
>
> **[0:49](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=49)** How about number five? Now, let's see, number seven.
>
> **[1:09](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=69)** So far, so good. Let's see how tolerant to small changes this classifier is.
>
> **[1:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=88)** As you can see, I am entering nearly zeros and nearly ones. And the recognized number remained a solid seven. So as you can see, this is way more tolerant than the seven to one network. And now for the zero to eight and back test, let me set up the segment.
>
> **[2:03](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=123)** Here, we have the pattern for zero. Now, before I slide the middle segment remember that there's no reason for the output to show anything other than zero and eight. So let's see it.
>
> **[2:37](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-10-network-gui-demo?u=76281980&t=157)** There you have it. So, now it feels like we are using a neural network free from the shackles of a forced sequence in the trained patterns.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [7 to 7 network GUI demo](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=0)** - Lastly, let's look at the seven to seven network. Now, I'm not showing the raw outputs any longer but another set of sliders simulating an actual LED seven segment display. This display will show us what the neural network infers from the input. Again, if the input is a valid pattern, then there is no excuse for outputting anything other than that pattern because the neural network is very well trained. The interesting part is the output we get when we enter an invalid pattern. Let me train the network for 2000 epochs.
>
> **[0:44](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=44)** Once again, let me test the networks to see if it's working correctly. So let's enter number two.
>
> **[1:01](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=61)** Then number six.
>
> **[1:13](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=73)** And finally number one.
>
> **[1:28](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=88)** Great. And now I want to show you a nice example of how the neural network struggles to get the incoming pattern right. I'll show you an invalid pattern now.
>
> **[1:47](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=107)** The pattern at the left is very special because depending on the state of the bottom left and the bottom right segments, it could be two or three. If both segments are on, the pattern is invalid as well as when both segments are off. So at this point, both segments are off and the output is showing something that looks more like a three than a two. But notice as I slowly increase the brightness of the leftmost segment, the output becomes more confident of seeing a two and less confident of seeing a three. So you will see those two sliders at the right go in opposite directions.
>
> **[2:38](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=158)** In fact, whenever I move either of those sliders, the sliders at the right will be having a tug of war towards the correct pattern.
>
> **[3:08](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=188)** Like I said, the interesting part is the output we get when we enter an invalid or rather an incomplete pattern. This behavior is similar to a text completion application. For example, if I turn every segment off, it suggests something that looks like a nine
>
> **[3:34](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=214)** or maybe a four. Now let me turn on segment B. It looks to me like a one and slightly as a seven.
>
> **[3:50](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/7-to-7-network-gui-demo?u=76281980&t=230)** Now let's see what happens when I turn on the top left segment. This incomplete pattern seems to make our neural network think of number four. So that's it for the demos. Now, I don't expect these videos to be enough for you. So if you are following along go ahead and play around with these three systems hopefully with your own version of MLP dot pi.

> [!info]- Semantic Content
>
> **Env Vars:** led (1), mlp (1)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - lastly (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/training-neural-networks-in-python-17058600/next-steps?u=76281980&t=0)** - [Eduardo] So that's it. I hope you had fun learning how to use [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) to create [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). Of course, there's so much more you can learn about neural networks, so as next steps, I suggest the following. Put your models to the test by using training, validation, and testing datasets. Assess your neural networks for usual problems like overfitting and underfitting. Experiment with more hidden layers and with more or less neurons per layer, and you may want to try all of these things with a readily available neural network tool like [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) or [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) instead of writing the code by yourself. Thank you for taking the course. Now I'll leave you to get to work on your next neural network application. Till next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1), [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [eduardo] (1)


## Instructor

- [Eduardo Corpeño](../../Instructors/Artificial%20Intelligence%20(AI)/Eduardo%20Corpe%C3%B1o.md)

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/training-neural-networks-in-python-3215347/codespaces)

## Skills Covered

- Neural Networks
- Python (Programming Language)
- Artificial Intelligence (AI)

## Path Context

### In [Fundamentals to Become a Machine Learning Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Fundamentals%20to%20Become%20a%20Machine%20Learning%20Engineer.md)
← [Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md) | **7 of 7**

### In [Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)
← [Introduction to Attention-Based Neural Networks](Introduction%20to%20Attention-Based%20Neural%20Networks.md) | **5 of 16** | [Introduction to Generative Adversarial Networks (GANs)](Introduction%20to%20Generative%20Adversarial%20Networks%20(GANs).md) →

## Appears In

- [Fundamentals to Become a Machine Learning Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Fundamentals%20to%20Become%20a%20Machine%20Learning%20Engineer.md)
- [Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Python in Excel- Machine Learning](../Data%20Science/Advanced%20Python%20in%20Excel-%20Machine%20Learning.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Hands-On AI- Image Processing with Python](Hands-On%20AI-%20Image%20Processing%20with%20Python.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Introduction to Attention-Based Neural Networks](Introduction%20to%20Attention-Based%20Neural%20Networks.md) — Artificial Intelligence (AI), Neural Networks
- [Advanced Python Projects- Build AI Applications](Advanced%20Python%20Projects-%20Build%20AI%20Applications.md) — Python (Programming Language), Artificial Intelligence (AI)
- [Machine Learning with Python- Association Rules](Machine%20Learning%20with%20Python-%20Association%20Rules.md) — Python (Programming Language), Artificial Intelligence (AI)

---

[↑ Back to top](#)