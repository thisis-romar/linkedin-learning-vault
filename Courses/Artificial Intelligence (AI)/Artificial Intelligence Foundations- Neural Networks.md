---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: artificial-intelligence-foundations-neural-networks-22853427
url: "https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427"
duration_minutes: 116
duration: 1h 56m
level: Beginner
updated: 1/29/2026
learners: 35685
skills:
  - Neural Networks
  - Machine Learning
  - Artificial Intelligence (AI)
  - Artificial Intelligence Foundations
exercise_files: true
github: "https://github.com/LinkedInLearning/artificial-intelligence-foundations-neural-networks-4381282"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEoegTVKM0iTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694723397057?e=2147483647&amp;v=beta&amp;t=Nn5XMdUTS1tcv2sWCXtk_RPTRd0wUMBaXEe8Bs4yl88"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Advance Your Skills in Deep Learning and Neural Networks](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Deep%20Learning%20and%20Neural%20Networks.md)'
  - '[Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)'
prev_courses:
  - '[Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md)'
  - '[Hands-On PyTorch Machine Learning](Hands-On%20PyTorch%20Machine%20Learning.md)'
next_courses:
  - '[Deep Learning with Python- Convolutional Neural Networks](Deep%20Learning%20with%20Python-%20Convolutional%20Neural%20Networks.md)'
  - null
path_nav: '[{"path":"Advance Your Skills in Deep Learning and Neural Networks","position":2,"total":8,"prev":"Deep Learning Getting Started","next":"Deep Learning with Python- Convolutional Neural Networks"},{"path":"Getting Started with AI and Machine Learning","position":7,"total":7,"prev":"Hands-On PyTorch Machine Learning","next":null}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - skill/neural-networks
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/artificial-intelligence-foundations
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Artificial%20Intelligence%20Foundations-%20Neural%20Networks.md)

![Artificial Intelligence Foundations: Neural Networks](https://media.licdn.com/dms/image/v2/D560DAQEoegTVKM0iTw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1694723397057?e=2147483647&amp;v=beta&amp;t=Nn5XMdUTS1tcv2sWCXtk_RPTRd0wUMBaXEe8Bs4yl88)

# Artificial Intelligence Foundations: Neural Networks

> An artificial neural network uses the human brain as inspiration for creating a complex machine learning system. They can classify millions of sounds, videos, and images, answer our questions, understand our behaviors, and even drive our cars. Neural networks are also the foundation of generative AI.This course introduces the fundamental techniques and principles of neural networks, common models,

> [LinkedIn Learning](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427) | 1h 56m | Beginner | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Neural networks 101: Your path to AI brilliance](#neural-networks-101-your-path-to-ai-brilliance)
  - [What you should know](#what-you-should-know)
- [**1. What Are Neural Networks?**](#1-what-are-neural-networks) (4 videos)
  - [Neural networks: The building blocks of generative AI](#neural-networks-the-building-blocks-of-generative-ai)
  - [Machine learning and neural networks](#machine-learning-and-neural-networks)
  - [Neural network fundamentals](#neural-network-fundamentals)
  - [The need for multilayer networks](#the-need-for-multilayer-networks)
- [**2. Key Components in Neural Network Architecture**](#2-key-components-in-neural-network-architecture) (3 videos)
  - [Layers: Input, hidden, and output](#layers-input-hidden-and-output)
  - [Transfer and activation functions](#transfer-and-activation-functions)
  - [How neural networks learn](#how-neural-networks-learn)
- [**3. Other Types of Neural Networks**](#3-other-types-of-neural-networks) (4 videos)
  - [Convolutional neural networks (CNN)](#convolutional-neural-networks-cnn)
  - [Transformer architecture: The model that redefined modern AI](#transformer-architecture-the-model-that-redefined-modern-ai)
  - [Why we need more than CNNs](#why-we-need-more-than-cnns)
  - [Self-attention in vision transformers](#self-attention-in-vision-transformers)
- [**4. Build a Simple Neural Network Using Keras**](#4-build-a-simple-neural-network-using-keras) (8 videos)
  - [The Keras Sequential model](#the-keras-sequential-model)
  - [Use case and determine evaluation metric](#use-case-and-determine-evaluation-metric)
  - [Data checks and data preparation](#data-checks-and-data-preparation)
  - [Data preprocessing](#data-preprocessing)
  - [Train the neural network using Keras](#train-the-neural-network-using-keras)
  - [How to use the challenge exercise files](#how-to-use-the-challenge-exercise-files)
  - [Challenge: Build a neural network](#challenge-build-a-neural-network)
  - [Solution: Build a neural network](#solution-build-a-neural-network)
- [**5. Best Practices for Optimizing a Neural Network**](#5-best-practices-for-optimizing-a-neural-network) (6 videos)
  - [Overfitting and underfitting: Two common ANN problems](#overfitting-and-underfitting-two-common-ann-problems)
  - [Hyperparameters and neural networks](#hyperparameters-and-neural-networks)
  - [How do you improve model performance?](#how-do-you-improve-model-performance)
  - [Regularization techniques to improve overfitting models](#regularization-techniques-to-improve-overfitting-models)
  - [Challenge: Manually tune hyperparameters](#challenge-manually-tune-hyperparameters)
  - [Solution: Manually tune hyperparameters](#solution-manually-tune-hyperparameters)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Neural networks 101: Your path to AI brilliance](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-networks-101-your-path-to-ai-brilliance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-networks-101-your-path-to-ai-brilliance?u=76281980&t=0)** - [Gwendolyn] No doubt you've been hearing about [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md), but did you know [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) are the foundation of generative AI? By the end of this course, you will have a solid understanding of how to build, train, improve, and use neural networks. And don't worry, there is just a little coding and nothing to install. If you are a student and you just need another resource, or if you are just starting out, this course is for you. I am Gwendolyn Stripling, and I have helped thousands of students understand [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) and machine learning concepts. This is your moment in time to make the career pivot you have been dreaming of.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **CLI Commands:** make (1)
> **Prerequisites:** install (1)
> **Speakers:** - [gwendolyn] (1)

#### [What you should know](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/what-you-should-know?u=76281980&t=0)** - [Instructor] This introductory course is designed for anyone interested in a high level look at [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) and [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). I welcome all skill levels. If you want to follow along with the challenges, it may be helpful, but not necessary, to have some exposure to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Once you complete this foundational course, your knowledge of [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md), data analysis, data pre-processing, and how to build and train a neural network will help you determine where you want to go next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 1. What Are Neural Networks?

[↑ Back to Table of Contents](#table-of-contents)

#### [Neural networks: The building blocks of generative AI](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-networks-the-building-blocks-of-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-networks-the-building-blocks-of-generative-ai?u=76281980&t=0)** In this video, we'll explore the foundations of modern AI – the systems that make technologies like [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) and [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) possible. This image shows how [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) serve as the foundation on which both generative AI and AI agents are built. Think of neural networks as the base layer. Like solid building blocks that everything else depends on. On this foundation, we build two major structures. Generative AI, which creates content, and AI agents, which act and make decisions. Together, they form the skyline of today's AI ecosystem. and action, built on the same architecture. This illustration perfectly captures our central message that neural networks are the foundation of modern AI. On the left side, we have generative AI, and on the right side, we have AI agents. What's critical to understand is that both of these seemingly different applications are built on the exact same foundation – neural networks. Generative AI focuses on creativity. It generates new content, such as text, images,
>
> **[1:36](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-networks-the-building-blocks-of-generative-ai?u=76281980&t=96)** music, or code, based on patterns learned from data. AI agents, on the other hand, focus on action. They use those same learning principles to make decisions, solve problems, and interact with their environments, like autonomous vehicles, game systems, and [Decision-Making](../../Skills/Data%20Science/Decision-Making.md). Now, let's break down the architecture of how generative AI actually works. Think of it as a three-layer structure, like building a house from the ground up. At the very bottom we have Neural Networks as the foundation. Built on top of that foundation are the different neural network architectures. [Convolutional Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) or CNNs, Recurrent Neural Networks or RNNs, and Transformers, which act as specialized components that can be combined and configured to create various generative AI applications. At the top, we have the applications, the tools we actually interact with. For example, text chat systems, image creation tools, code assistants, music creation platforms, and video generation. Each of these applications is built using
>
> **[3:10](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-networks-the-building-blocks-of-generative-ai?u=76281980&t=190)** those neural network building blocks from the middle layer, customized for specific tasks. Just like generative AI, AI agents are also built on top of neural networks with the same foundation and building blocks. The difference is how they use what they've learned. By combining CNNs and vision transformers for perception, RNNs and transformers for memory, transformers for reasoning, interpreting relationships, drawing conclusions, and planning, and policy networks trained with [Reinforcement Learning](../../Skills/Artificial%20Intelligence%20(AI)/Reinforcement%20Learning.md) for action, AI agents are able to perceive, remember, reason, and take intelligent action. In the videos that follow, we will break down what a neural network actually looks like. From the structure of a single artificial neuron to how layers of neurons work together to recognize patterns and make predictions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (7), [AI Agents](../../Skills/Artificial%20Intelligence%20(AI)/AI%20Agents.md) (7), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (6), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1)
> **CLI Commands:** make (4)
> **Analogies:** such as (1), think of it as (1), for example (1), just like (1)

#### [Machine learning and neural networks](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/machine-learning-and-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/machine-learning-and-neural-networks?u=76281980&t=0)** - [Narrator] We begin by answering the question, "What are [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md)?" After completing this chapter, you will be able to describe the differences between machine learning and neural networks, understand how biological networks lay the foundation for [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md), and describe the single-layer perceptron. In order to answer the question, "What are neural networks?" we need to define machine learning. We begin with an example. One question that machine learning can help with is predicting some type of outcome. For example, you are studying for a certification exam. You ask yourself, "If I study really, really hard and if I put some serious study hours, can I improve my score on my certification exam?" This is a prediction problem that can be solved using machine learning. You want to know if your future exam score can be predicted based upon the number of hours you study. This image shows a graph of hours of study on the x-axis versus test scores on the y-axis. Let's assume this data represents prior test takers
>
> **[1:33](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/machine-learning-and-neural-networks?u=76281980&t=93)** who were surveyed about the number of hours they studied. Test takers who studied between five and 10 hours received test scores between 50 and 60 and failed their certification exam. Test takers who studied between 30 and 35 hours received test scores close to 90 and passed the certification exam. So yes, it appears you can improve your test scores based on this pattern, meaning there is a positive relationship between hours of study and test scores. Machine learning uses data to detect various patterns in any data set by analyzing and outputting a prediction. The machine learns from past data and improves it automatically. For example, a machine learning mathematical formula, or model, takes the input data, the table shown here, and learns the relationship between the number of study hours and test scores. In machine learning speak, we try to map the relationship between input data and output data in such a way that it can generalized or be applied well on unseen data. For example, Exam Day 1 is our original input data. Exam Day 2 and 3 are the unseen data.
>
> **[3:13](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/machine-learning-and-neural-networks?u=76281980&t=193)** Our machine learning model will be able to apply the learned relationships to this unseen data. Based on our machine learning these relationships, your future test score could be predicted. (chuckles) In fact, the more data you feed it, the more it's learning improves. Training of the model takes place by comparing the actual output with the predicted output. A cost function is used to reduce the total error between the actual and predicted values. We will learn more about cost functions in later videos. At a higher level, machine learning is the branch of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md), or AI, which is devoted to making machines think and act like humans. In our certification exam use case, our exam machine would have the ability to automatically learn and improve from experience if we actually used an ML framework to test the model. The primary aim is to allow the computer to learn automatically without human involvement or assistance and then adjust actions accordingly. A subset of machine learning is called [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md), which is based on artificial neural networks,
>
> **[4:48](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/machine-learning-and-neural-networks?u=76281980&t=288)** which are based on biological neural networks. Let's take a look at that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (4), [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** for example (3)
> **Speakers:** - [narrator] (1)

#### [Neural network fundamentals](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-network-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-network-fundamentals?u=76281980&t=0)** In this video, we will explore how artificial neurons work and how they connect to form [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). When you unlock your phone with face detection, that is image recognition powered by neural networks. When you use [Google](../../Glossary/Service/Google.md) Translate or chat with a customer service bot, that's [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md). When a retailer recommends your next binge-worthy show or when the retailer suggests [products](../../Skills/Software%20Development/Microsoft%20Products.md) you might like, those are recommendation systems using neural networks. And autonomous vehicles, or self-driving cars, use neural networks to understand their environment and make split-second decisions. Neural institutions use neural networks for [Forecasting](../../Skills/Data%20Science/Forecasting.md) market trends and detecting fraud. These are not futuristic applications. They're happening right now all around us. Neural networks have become essential because they can find patterns in data. Let's take a look at how the human brain inspired neural networks. In the human brain, we have a biological neural network made of 100 billion neurons, which are simply nerve cells that communicate through
>
> **[1:32](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-network-fundamentals?u=76281980&t=92)** electrical signals. Electrical signals travel through synapses where information is processed in parallel, allowing many neurons to work together at the same time. This parallel activity allows our brains to learn from experience by recognizing patterns. Neural networks take inspiration from the human brain. Each connection between nodes, like synapses between neurons, has a weight that strengthens or weakens as the model learns. And over time, these connected nodes work together to recognize patterns, make predictions, and solve complex problems. A perceptron is the basic building block of a neural network. Think of it as a tiny decision maker that takes in information and decides what to output. This diagram shows that the perceptron works in two sequential steps. On the left side, marked by the summation symbol, is where the neuron does its math. On the right side, marked by the f of x, is the activation function. This is where the neuron makes its final decision based on the result of the summation. Essentially, a single-layer perceptron takes
>
> **[3:08](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/neural-network-fundamentals?u=76281980&t=188)** several inputs and produces one output through a single computational layer. Data moves in one direction from inputs to output in what's called a feed-forward process. And even though it's simple, a perceptron can still learn to classify patterns. And it provides the foundation for understanding deeper neural networks. To summarize, artificial neurons have three key characteristics. They can receive multiple inputs at once, and each input has a weight that determines how important it is. These weighted inputs are summed together with a bias, and an activation function transforms that sum into an output. We will explore each of these components in more detail later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (8), [Google](../../Glossary/Service/Google.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **CLI Commands:** make (2), find (1)
> **Cross-References:** later in (1)
> **Analogies:** think of it as (1)

#### [The need for multilayer networks](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-need-for-multi-layer-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-need-for-multi-layer-networks?u=76281980&t=0)** We've seen how powerful the single neuron or perceptron can be, but like any simple tool, it has a significant limitation, and some problems need more layers to learn truly complex patterns. A single-layer perceptron has several limits. First, it can only solve linearly separable problems. It can only find solutions that can be drawn by a single straight line. And it fails at complex nonlinear solutions. Let's look at an example. This visual is the most important one for understanding the limit of the simple single layer perceptron. We are using our hypothetical exam prediction problem where a student's performance depends on their study hours and sleep hours. Green dots mean pass and red X's mean fail. Given this problem, a single layer perceptron tries to draw a single straight blue line, called a decision boundary. separate the passes from the fails. The problem is simple. If you have high study hours or high sleep
>
> **[1:36](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-need-for-multi-layer-networks?u=76281980&t=96)** hours, you pass. However, notice the errors. The student who studied 9 hours but got only 1 hour of sleep still failed. Yet the blue line predicts a pass. The single-layer perceptron is unable to find the correct balance between the two inputs, resulting in these wrong predictions. This is what we actually need. The relationship is not a straight line. It's a curved boundary. purple ellipse that defines a sweet spot. This nonlinear model correctly identifies that you need the right combination of high study hours and high sleep hours to pass. The model creates a pass-a-zone which perfectly separates the successful students from the unsuccessful ones. So why does non-linearity matter? Because real-world problems don't follow straight lines. In image recognition, detecting a cat requires understanding curved edges, textures, and how features combine.
>
> **[3:13](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-need-for-multi-layer-networks?u=76281980&t=193)** What pixel patterns create complex boundaries no straight line can capture? In language, the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) bank changes meaning based on context. Is it a river bank or a place to deposit your money? This context requires modeling intricate word relationships. Let's look at the single-layer perceptron structural limitations. First, the inputs are connected directly to the output. There are no intermediate stages, no hidden layers for processing. Second, the core work is done by just one [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) step, the combination of summation and activation. Because it only has this single, simple computational step, the perceptron is fundamentally limited to drawing only one straight line to solve problems. It cannot handle the complex, curved relationships we see in real-world data. If one simple neuron is limited, the solution is to go deeper. We connect neurons into layers to create the multilayer perceptron, or MLP.
>
> **[4:49](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-need-for-multi-layer-networks?u=76281980&t=289)** An MLP has 3 main layers. The input layer receives our data. The output layer produces the final result. And most importantly, there is one or more hidden layers in between. The addition of these hidden layers is where [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) begins. By stacking simple nonlinear decisions across multiple layers, the network gains the computational power to solve any nonlinear problem that was impossible for a single neuron. This is the architecture that powers most modern AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **CLI Commands:** find (2), cat (1)
> **Env Vars:** mlp (2)


### 2. Key Components in Neural Network Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Layers: Input, hidden, and output](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/layers-input-hidden-and-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/layers-input-hidden-and-output?u=76281980&t=0)** - [Instructor] In this video, you learn about neural network layers, which allow [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) to solve complex non-linear problems. This image shows an input layer, hidden layer, and output layer. The middle layer is always referred to as hidden as it hides between the input and output layers. The layers are composed of nodes stacked on top of each other and are connected input to output until the final output node. Signals go from an input layer to additional layers. Each layer is fully connected to the other. There are no loops. This is what it means when you see the term fully connected. You feed your data or features into the first layer because it is used to provide the input data or features to the network. Thus, it is referred to as the input layer. The input layer is the very beginning of the workflow for the artificial neural network. The input layer is considered passive because it does not take in information from the previous layer. No computation is performed in any of the input nodes. They just pass on the information to the hidden nodes. The hidden layer is located between the input and output layer. Hidden layers perform computations and transfer information
>
> **[1:38](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/layers-input-hidden-and-output?u=76281980&t=98)** from the input nodes to the output nodes. A feedforward network will only have a single input layer and a single output layer, but you can increase the number of hidden layers as much as you want to address data and/or use case complexity. In the hidden layer, neurons or nodes take in a set of weighted inputs and produce an output through an activation function. You'll learn more about activation functions in the next video. While you feed your input data into the input layer, you take the output from the output layers. This is the layer which gives you predictions. The output nodes, yes, there can be more than one, are collectively referred to as the output layer and are responsible for computations and transferring information from the network to you. Since the output layer node may be designed differently according to the use case, let's dive a bit deeper into the network to understand how transformation and activation functions work to solve problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **CLI Commands:** node (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Transfer and activation functions](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transfer-and-activation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transfer-and-activation-functions?u=76281980&t=0)** - [Narrator] In this video, let's build on your knowledge of neural network components and learn how transfer and activation functions work. A traditional artificial neuron is composed of some weighted inputs, a transfer or transformation, which is any function that takes the weighted sum of the inputs to a neuron and produces an output value, and an activation function, which is a special type of transfer function that introduces non-linearity into the neural network. Although the images show two distinct steps, the transfer in activation functions occur inside one computational node. Let's add two features from our housing data set to understand the mathematical calculations that occur inside a computational node. This image shows two features, a house's zip code and ocean proximity. Which do you think has more influence on the predicted price? This network takes numerical inputs, x1 and x2, and has weights w1 and w2 associated with those inputs. The numerical and weight inputs are summed together, thus the summation symbol in step one. Additionally, there is another input 1 with weight b called the bias.
>
> **[1:35](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transfer-and-activation-functions?u=76281980&t=95)** The bias can be defined as the constant value which is added to the product or multiplication of features and weights. It is used to offset the result. It helps the model to shift the activation function towards the positive or negative side. Step two is the activation function. After the numerical and weight inputs are summed together, the node then applies a function f to the weighted sum of its inputs. The function f is non-linear, and its purpose is to introduce non-linearity into the output of the node. Since most real world data is non-linear, you want to make sure that the nodes learn these non-linear representations. Note that the node learns both linear or non-linear decision boundaries based on the activation function. There are different types of activation functions. These three are the most widely used. The ReLU function is a non-linear function that has a linear shape for positive inputs and a zero output for negative inputs. It is a popular choice for [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) because it is computationally efficient and easy to train. The sigmoid function is a non-linear function that has a sigmoid shape.
>
> **[3:11](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transfer-and-activation-functions?u=76281980&t=191)** It's often used in neural networks because it can produce outputs that are between 0 and 1. The tanh function is similar to the sigmoid function but it has a range of -1 to 1, and this makes it a good choice for neural networks that need to output values in this range. Take a moment and think about the activation function shown in this image. What type is it?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3)
> **CLI Commands:** node (5), make (1)
> **Definitions:** is a  (4), defined as (1)
> **Analogies:** similar to (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [How neural networks learn](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-neural-networks-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-neural-networks-learn?u=76281980&t=0)** - [Instructor] In this video, let's learn how [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) actually learn, the data characteristics, and patterns. This image is what we'll use to understand how neural networks learn. Our use case is how to predict the price of a house. Is this a classification problem or a regression problem? If you answer it regression problem then you are correct. You are not looking to classify house prices in buckets of low, medium, or high but to predict the house price based on a set of features. Now, back to our image. First, let's refer to the transfer function as weighted sum for easier understanding. And let's add Y hat as the output. This is commonly referred to as the predicted value. In learning, the predicted value is compared to the actual value. For your dataset, this would be the predicted price of the house compared to the actual price of the house in the dataset. And we've added the summation and activation function formula to remind you of the mathematical calculations. To simplify the formula let's use notation
>
> **[1:35](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-neural-networks-learn?u=76281980&t=95)** for the summation and activation function. So, how does a neural network learn? One method is by using the back propagation algorithm. This image shows the regression problem as a [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) use case. The actual values of the size and price of the house are shown in the table and plotted on a graph. The line shown on a graph is the line of best fit and are the predicted values. First, your housing dataset training samples are passed through the network, and the number of training examples in one forward pass is called the batch size. This image shows the output or Y hat obtained from the network's forward pass compared to the actual output. The goal is to minimize the error or the difference between the actual and the predicted value. This image shows the error calculations for each individual data point. The error is used to adjust or change weights of the notes such that the error, meaning the distance between the true or actual value and predicted value decreases gradually. Why is this important? We need a way to evaluate our predictive model.
>
> **[3:11](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-neural-networks-learn?u=76281980&t=191)** In our regression housing example, we used a root mean squared error as our cost or loss function shown here. So what we mean by learning is which weights and bias minimize a certain cost function. In our case, root mean squared error. The process for calculating root mean squared error, our loss function evaluation metric is to, one, get the errors for the training examples. Two, compute the squares of the error values. Three, compute the mean of the squared error values. And four, take a square root of the mean. The notation here is to use a little hat symbol on top of the Y that represents your model's prediction and to use a plain Y to represent the label. So now, back to backpropagation, no pun intended. Think of our goal as decreasing the distance to the line between our true and predicted values. The back propagation step is also known as updating the weights, which is a bit easier to visualize. So how is this weight adjustment done? Well, the back propagation algorithm
>
> **[4:45](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-neural-networks-learn?u=76281980&t=285)** iteratively passes batches of data through the network, updating the weights so that the error is decreased in the forward pass. The signal flow moves from the input layer, through the hidden layers, to the output layer, and the decision of the output layer is measured against the ground truth or actual label. In the backward pass, using back propagation and [Calculus](../../Skills/Data%20Science/Calculus.md), the various weights and biases are back propagated through the network making those adjustments. The network keeps playing this back and forth like a game of tennis until the error can go no lower. This state is known as convergence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (2), [Supervised Learning](../../Skills/Artificial%20Intelligence%20(AI)/Supervised%20Learning.md) (1), [Calculus](../../Skills/Data%20Science/Calculus.md) (1)
> **Definitions:** known as (2), is called (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Other Types of Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Convolutional neural networks (CNN)](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=0)** - [Instructor] In previous videos, we've defined [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) and looked at their components and how neural networks learn patterns in data. We specifically looked at multilayer perceptrons. In this video, we'll look at three additional neural network types. After completing this introductory video, you will be able to: describe [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md), commonly referred to as CNNs, describe recurrent neural networks, commonly referred to as RNNs, and transformer neural networks. There are many other types of neural networks, but they are out of scope for our course. Let's begin by describing use cases for convolutional neural networks. Image classification. Object detection, like in self-driving cars or determining if a person is smiling or not, these are all examples of use cases that use convolutional neural networks. CNNs have other use cases as well, such as processing natural language and other complex image classification problems. In an earlier video, you learned about the feed-forward neural network, also known as multilayer perceptron where you have a series of fully connected layers,
>
> **[1:36](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=96)** but this type of network is not suitable for the use cases previously mentioned. And why is that? A digital image is an array of pixels and each pixel is characterized by its x, y coordinates and its value. Shown here as discrete points on a rectangular grid is a digital representation of a 2D image on the left and a 3D image on the right. Machines view images as 2D arrays of numbers to decipher them. If we include colors, then it becomes a 3D array. To a computer, an image is just another array of numbers. Each object has its pattern, and that is what the computer will use to identify an object in an image. The machine takes this image as input and provides a classification output. Similar to the processes followed by the human brain, is it a one or not? In this image, notice that just to capture the rows requires four inputs into the four nodes for just the number one. What if the machine had to recognize an eight or determine if the color image of a dog was a dog or a cat? Images represent a large input for a neural network. They can have hundreds of thousands
>
> **[3:09](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=189)** of pixels and up to three-color channels. In a classic, fully connected network, this requires a huge number of connections and network parameters. So the classic neural network architecture is inefficient for [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) tasks. This is where the feed-forward convolutional neural network architecture comes into play. CNNs take a regular image as input and provides a classification output, similar to the processes followed by the human brain. This image shows a CNN predicting cat as an output when presented with an image of both a dog and a cat. CNNs contain five types of layers: input, convolution, pooling, fully connected, and output.
>
> **[4:09](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=249)** This is the input layer that holds the raw pixel values of an image. The input, convolution, and pooling layers are where feature extraction is done. Think of the convolutional layer as a filter that passes over the image scanning a few pixels at a time. The convolutional layer is the core building block of a CNN and it is where the majority of computation occurs. It requires a few components, which are input data, a filter, and a feature map. It extracts different features from an image, such as the cheek, ears, nose, eyes, and then creates a feature map. When we talk about filters in convolutional neural networks, then we are talking about the weights. These are the feature detectors. These filters will determine which pixels or parts of the image the model will focus on. The filter is always smaller than input data and the dot product is performed between input and filter array. Feature maps are what we get after a filter has passed through the pixel values of an input image. It is what the convolutional layer sees after passing the filters on the image. It is what we call a convolution operation in terms of [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md).
>
> **[5:43](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=343)** If we were to add numbers to the input map, the dot product, the multiplication of the input map and the convolution filter of the first scan would look like the image shown here. If the full scan of the input would be done, you can see that the input would be reduced from a five-by-five table to a three-by-three table. The pooling layer takes small rectangular blocks from the convolutional layer and subsamples it to produce a single output from that block. There are several ways to do this pooling, such as taking the average of, or the maximum, or a learned linear combination of the neurons in the block. Essentially, pooling layers reduces the spatial size of the input, making it easier to process data. Pooling basically helps reduce the number of parameters and computations present in the network. Essentially, pooling layers reduces the spatial size of the input, making it easier to process data. Pooling basically helps reduce the number of parameters and computations present in the network. There are two main types of pooling: max pooling and average pooling.
>
> **[7:18](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=438)** Shown here is max pooling, which takes the maximum value from each feature map, and average pooling, which takes the average value. Pooling layers are typically used after convolutional layers in order to reduce the size of the input before it is fed into a fully connected layer. The fully connected layer, or input layer, or the flattened layer takes the output of the previous layers, flattens them and turns them into a single vector that can be input to the next stage. A fully connected layer takes all neurons in the previous layer and connects it to every single neuron it has. Fully connected Layers are typically used towards the end of a CNN when the goal is to take the features learned by the previous layers and use them to make predictions. For example, if we were using a CNN to classify images of animals, the final fully connected layer might take the features learned by the previous layers and use them to classify an image as containing a dog, cat, bird, or duck. CNNs are often used for image recognition and classification tasks. For example,
>
> **[8:50](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/convolutional-neural-networks-cnn?u=76281980&t=530)** CNNs can be used to identify objects in an image or to classify an image as being a cat or a dog. CNNs can also be used for more complex tasks, such as generating descriptions of an image or identifying the points of interest in an image. CNNs can also be used for time series data, such as audio data or text data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (5), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (4), [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Analogies:** such as (5), similar to (2), for example (2)
> **CLI Commands:** cat (5), make (1)
> **Env Vars:** cnn (4)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Transformer architecture: The model that redefined modern AI](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transformer-architecture-the-model-that-redefined-modern-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transformer-architecture-the-model-that-redefined-modern-ai?u=76281980&t=0)** Transformers are now the backbone of most modern AI systems. In this video, we'll explore what its main building blocks are, and how the encoder, decoder, and attention mechanism work together. Before Transformers, models like Recurrent [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) read text one piece at a time. Each new step depended on the step before it. Imagine reading a book one letter at a time and you aren't allowed to look at the next letter until you completely finish thinking about the previous one. That's how RNNs processed sequences, through recurrence, step by step. The transformer model, introduced in the 2017 paper Attention is All You Need, changed everything by enabling full parallel processing, effectively replacing recurrence with attention. Instead of reading text letter by letter, a transformer can take the entire sentence at once and instantly understand how each [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) relates to every other word. This shift made global understanding possible. Shown here is the classic transformer architecture similar to the one in the original paper. Let's walk through a simple example of how
>
> **[1:37](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transformer-architecture-the-model-that-redefined-modern-ai?u=76281980&t=97)** it works by using the high-level overview shown here. And we're going to translate a phrase from English to Spanish. In this example, the cat sat on the mat is our input into the transformer, which has an encoder and decoder. The encoder's job is to read and understand the input text. the encoder does two key things. First, it uses something called self-attention. This is like highlighting the important relationships between words. For example, it figures out that Cat is the one doing the sitting and Mat is where the sitting happens. Second, It processes this information through feed-forward layers, which refine and encode this understanding into a mathematical representation. The encoded understanding gets passed by the decoder, whose job is to generate the translation, one word at a time. It's a bit more complex because it has to do two types of attention. First, cross-attention lets the decoder look at what the encoder understood about the input sentence. It's constantly asking, what part of the English
>
> **[3:11](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/transformer-architecture-the-model-that-redefined-modern-ai?u=76281980&t=191)** sentence am I translating right now? Second, Cephatension helps the decoder keep track of what it has already generated. As it writes el gato se sento, it needs to remember that context to properly generate the next word. When we put these components together and train them on massive amounts of text, we we get what's called a generative pre-trained transformer model. Generative means it can generate new text, for example, and pre-trained means it has already learned from billions of examples. And transformer is the name of the specific architecture we're discussing. And here's our result, El gato se sento en la alfombra. A natural, accurate Spanish translation. Most modern [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) use only portions of the original encoder-decoder design. Some models use only the encoder for understanding tasks. Others use only the decoder for generation tasks. And many still use the full encoder-decoder structure when both understanding and generation are required.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (4), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1)
> **Analogies:** for example (2), imagine (1), similar to (1)
> **CLI Commands:** cat (2)

#### [Why we need more than CNNs](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/why-we-need-more-than-cnns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/why-we-need-more-than-cnns?u=76281980&t=0)** Earlier, we explored how [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) became the backbone of [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md). In this video, we'll explore how and why the field is shifting from CNNs toward transformer-based architectures for computer vision. Some visual tasks require understanding relationships between distant regions. For example, matching a logo on one side of an image with text on the other, or recognizing that two far apart objects belong to the same scene. CNNs can only compare nearby pixels, and they require many stacked layers to connect distant regions. This makes them slower, harder to train, and sometimes less accurate for global reasoning. This raises an important question. What if we could see everything at once? What if every part of the image could directly attend to every other part simultaneously? This example shows two cars for a part in a parking lot scene. The cars are spatially distant. CNNs would need many convolutions and pooling layers to bring these pixels close together in the feature space.
>
> **[1:36](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/why-we-need-more-than-cnns?u=76281980&t=96)** For example, at the start, each convolutional filter only sees a tiny window of the image. The two cars are on opposite sides, so the CNN detects each one locally, but it has no idea that they relate to each other. There is no way yet for the network to connect them. After their first pooling, the image has been reduced in resolution, but the cars are still far apart. Pooling compresses space, but it does not create relationships. Each car is still treated as an isolated feature with no shared context. As we go deeper, more pooling and convolution occur, leading to more compression. The cars finally begin to move closer together in the feature map, but something else starts to happen. As the image gets compressed, these small details fade away. Only after many layers do the two cars finally appear close enough for a CNN to relate them. But by that point, important details may have been blurred or lost during the compression process. token transformers work differently.
>
> **[3:10](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/why-we-need-more-than-cnns?u=76281980&t=190)** They don't rely on stacked convolutional layers at all. Instead, they borrow the transformer architecture from [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) and apply it to images. The core idea is to treat an image the same way we treat a sentence. But instead of a sequence of words, we break the image into patch [Tokens](../../Skills/Web%20Development/Tokens.md). And each patch can interact with every other patch at the same time through self-attention.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) (2), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** cnn (2)
> **Analogies:** for example (2)

#### [Self-attention in vision transformers](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/self-attention-in-vision-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/self-attention-in-vision-transformers?u=76281980&t=0)** Let's take a look at how self-attention works. First, we divide the image into fixed-size patches. Typically, these are 16 by 16 pixels, creating a grid of patches across the entire image, divided into a 4 by 4 grid, giving us 16 patches, labeled P1 through P16. Each patch embedding is transformed into a query, a key, and a value. The query asks what should I pay attention to? The keys represent what does each patch contain and the values carry the actual information passed forward. For example, first the query q is compared with every key k using dot product to compute similarity scores. This tells us how relevant is each key to this query. Next, these similarity scores are passed through Softmax to create attention weights that sum to 1.0. Higher weights mean pay more attention to this. Then, each value v is multiplied by its attention weight and all weighted values are summed together to produce the final product. Values with higher weights contribute more to the output. The takeaway here is that attention allows the model to focus on relevant information
>
> **[1:34](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/self-attention-in-vision-transformers?u=76281980&t=94)** – high weights – while ignoring irrelevant information – low weights. This diagram shows a bottom row, K1 through K16, where each K represents the key for its corresponding patch. This step, converting patches into k-vectors, is one of the building blocks that allows vision transformers to analyze the entire image holistically. Next, we flatten each patch into four quadrants to create a single feature vector. This turns the 2D image region into a 1D token, exactly the format a transformer expects. Every image patch becomes a small bundle of information that tells the model both what it is and where it is. For example, this illustration shows how a vision transformer gets information from an image into a format it can understand. Each blue square is one patch of the image. But transformers can't look at image patches directly. They need everything turned into simple numbers called [Tokens](../../Skills/Web%20Development/Tokens.md). To create each token, we add two pieces of information. Patch embedding tells the model what is inside the patch, its colors, shapes, and textures. And position embedding tells the model where the patch came from in the original image. When we add these two particular parts together,
>
> **[3:09](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/self-attention-in-vision-transformers?u=76281980&t=189)** each patch becomes a token with meaning and location. That full token is then sent into the transformer. Each patch is now a token that can attend to every other patch simultaneously. These patches are our fundamental units of processing, just like words are the fundamental units in language models. Here's a simplified view of the same architecture, making it easier to see the key components. Image with Patches, Linear Projection, Token Embeddings, Transformer Encoder, and Final Output. So how do you decide which to use in practice? Choose [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) when you have smaller datasets. You need fast inference, as CNNs are more efficient. You're deploying to edge devices, since CNNs require less memory and computation. And you have [Real-Time](../../Skills/Database%20Management/Real-Time.md) requirements, as CNNs are faster. Choose vision transformers when you have larger datasets. When you can use pre-trained models, as transfer learning works well with vision transformers. when complex global patterns matter, self-attention captures long-range dependencies, and use them when computational cost isn't
>
> **[4:43](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/self-attention-in-vision-transformers?u=76281980&t=283)** the primary concern. The best solution is to use hybrid architectures that combine the strengths of both approaches. Models like ConvNext, SWIN Transformer, and CoAdNet blend the efficiency of convolutional
>
> **[5:05](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/self-attention-in-vision-transformers?u=76281980&t=305)** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) with the global reasoning power of transformers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Env Vars:** p16 (1), k16 (1), swin (1)
> **Analogies:** for example (2), just like (1)
> **Versions:** 1.0 (1)


### 4. Build a Simple Neural Network Using Keras

[↑ Back to Table of Contents](#table-of-contents)

#### [The Keras Sequential model](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-keras-sequential-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-keras-sequential-model?u=76281980&t=0)** - [Instructor] In this chapter, we focus on how to use the Keras library to build regression models. We'll build a simple neural network to reinforce the concepts you have learned. We'll start with an overview of the Keras Sequential API, one of the easiest ways to build, train, and evaluate a neural network. Then, we'll use an actual use case to implement the neural network using Keras. This will require loading and visualizing a dataset and then building the neural network. You'll then have a hands-on challenge lab with a solution that follows. The best way to understand [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) is to build one for yourself. Let's get started with creating and training a neural network in Keras. By now, you should be very familiar with this multi-layer perceptron neural network, but how would you actually use this to solve a use case or problem? Would you believe that you can implement a simple neural network with just a few lines of code? Shown here is the same neural network, but with code from the Keras Sequential Application Programming Interface or API. Note that for each layer shown in the picture, there is a corresponding line of code:
>
> **[1:34](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-keras-sequential-model?u=76281980&t=94)** The input layer, hidden layer, and output layer, each have a line of code. This is really all you need to build the model. There are a few additional steps such as compiling and fitting the model, but these two are simple lines of code. Keras is perfect for those that do not have a strong background in [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) because it is easy to learn. It builds the neural network using a modular approach with minimal code. You can design and iterate on machine learning ideas, moving from experiments to production very quickly. Keras consists of two objects, which means Keras is primarily built of two components, layers and models. Keras supports both recurrent and convolutional networks. Keras also provides support for training on central processing units or CPUs, or graphics processing units or GPUs. Keras offers a number of APIs you can use to define your neural network, including the Sequential API which lets you create a model layer by layer for most problems. It's straightforward, just a simple list of layers in sequence, but it's limited to single-input,
>
> **[3:08](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/the-keras-sequential-model?u=76281980&t=188)** single-output stacks of layers. The Functional API is a full featured API that supports arbitrary model architectures. It's more flexible and complex than a Sequential API. It is fully customizable, and it can accept multiple inputs and have multiple outputs. And there's also model subclassing which lets you implement everything from scratch, and this is suitable for research in highly complex use cases, but really rarely used In practice. Using the Sequential API, Keras simply arranges the neural network layers in a sequential order, which means the data flows from one layer to another layer in the given order until the data finally reaches the output layer. The simplest way to build a neural network is to use the Keras Sequential API by using the add layer method as shown here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Env Vars:** api (8)
> **Definitions:** is a  (2)
> **Analogies:** picture (1), such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Use case and determine evaluation metric](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/use-case-and-determine-evaluation-metric?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/use-case-and-determine-evaluation-metric?u=76281980&t=0)** - [Instructor] To improve profits, organizations spend money advertising [products](../../Skills/Software%20Development/Microsoft%20Products.md) and services. The channels they choose to advertise on can range from digital media to newspapers. One typical use case organizations encounter is how to optimally allocate budgets across marketing channels and measure the true contribution of each channel or campaign. They also need to predict or forecast sales given historical data from each channel or campaign. The dataset is composed of historical marketing channel data that can be leveraged to gain insights for spend allocation and to predict sales. The use case is a simple [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) problem with just five variables. You have been asked to build this sales predictive model, and recall that [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) are excellent for finding patterns and datasets. So for your simple neural network, you will build, train, and evaluate a prediction model for sales using the Keras sequential model. In this model, we feed the advertising budgets of digital, TV, newspaper, and radio to the model, and the model will predict sales.
>
> **[1:35](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/use-case-and-determine-evaluation-metric?u=76281980&t=95)** The advertising dataset captures the sales revenue generated from advertising in thousands of units for a particular product advertising budget in thousands of dollars for digital, TV, radio, and newspaper media. Using this data, you will be able to create a foundational marketing plan to discuss with your team. The dataset is based on data taken from an introduction to statistical learning with applications in R. However, for this course, the dataset has been updated to include a digital feature variable and modified to reflect the impact of this additional variable on sales. The number of markets has been increased from 200 to 1,200. Thus, the data consists of the advertising budgets for four media channels, digital, TV, radio, and newspapers, and the overall sales in 1,200 different markets. The goal is to produce a model that represents the best fit to some observed data according to an evaluation criterion. While Keras will do all of the heavy lifting for you, as a point of reference, the objective is to use multiple linear regression to assess the impact of advertisement on sales. Regression is a supervised machine learning process.
>
> **[3:12](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/use-case-and-determine-evaluation-metric?u=76281980&t=192)** It is similar to classification, but rather than predicting a label, you try to predict a continuous value. Linear regression defines the relationship between a target variable, Y, and a set of predictive features, X. Simply stated, if you need to predict a number, then use regression. We will evaluate the performance of the model using root mean squared error, or RMSE, a commonly used metric for regression problems. It is the loss parameter you will use for your Keras sequential model. RMSE is a metric that tells you the average distance between the predicted values from the model, the line on the graph, and the actual values in the dataset. The lower the RMSE, the better a given model is able to fit a dataset. No need to worry about learning the mathematics of this formula, because you will not need to type it. Shown here is the Keras sequential model. Note here that for loss, MSE is shown. MSE is the mean squared error. We use this simple three letter [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) to denote the loss, and we could use this, but root means squared error is more popular than mean squared error,
>
> **[4:45](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/use-case-and-determine-evaluation-metric?u=76281980&t=285)** and we'll just take the square root of this once the model has run. Believe it or not, these six lines of code are all you need to build and train your model. Before you get to this point, you'll need to load the dataset, do a small bit of [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), and then perform exploratory data analysis. These are the typical steps you would follow in any [Data Science](../../Topics/Data%20Science.md) or machine learning project. The next videos walk you through the steps to help you on this journey of knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (3), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Env Vars:** rmse (3), mse (2)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Data checks and data preparation](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/data-checks-and-data-preparation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/data-checks-and-data-preparation?u=76281980&t=0)** - [Instructor] In this video, we load and check the data, then perform exploratory data analysis. Here we use a Jupyter Notebook to run our code. A Jupyter Notebook lets you run [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), an open source programming language. You'll find out more in the challenge instructions where you'll only need to focus on building the neural network, which is writing six lines of code to train your network. So let's assume you've already imported the necessary libraries and modules in Python. The first step is to load the data. Here, the dataset is being pulled from the course's [GitHub](../../Skills/Software%20Development/GitHub.md) repo. Once the data is pulled in, you can check the first 10 lines. Note that the last column has the target that we would like to predict, which is sales. Shown here is the .info method, which gives you information on your dataset. The information contains the number of columns, column labels, column data types, memory usage, range index, and the number of cells in each column. Shown here is the describe method, which computes and displays summary [Statistics](../../Skills/Data%20Science/Statistics.md) for the dataset. Shown here is the .shape method, which gives you the number of rows and columns in the dataset.
>
> **[1:34](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/data-checks-and-data-preparation?u=76281980&t=94)** Here, 1,200 rows because the count starts at zero and you also have five columns. Shown here is the .isnull method, which shows you any null values in the dataset. Shown here is a heat map or correlation matrix. This visual shows how each feature is correlated to another. You would use this matrix to see how sales correlates with the other four features. Shown here is another heat map that clearly shows the top two features that have a relationship with sales, which is TV and radio. And again, just another way of seeing very quickly, using a gradient color scheme, how each media channel impacts sales. This is the same data and table form. Shown here are scatterplots that show the relationships between digital, TV, newspaper, and radio to sales.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **CLI Commands:** python (2), find (1)
> **Tools:** jupyter (2), github (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Data preprocessing](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/data-preprocessing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/data-preprocessing?u=76281980&t=0)** - [Instructor] This slide shows how to split the dataset into the input features, which we call X, and the label, which we call Y. Shown here is the output of the normalization step. Use Keras pre-processing to scale the dataset so that all the X input features lie between zero and one, inclusive. This best practice is called normalization. Why? Essentially, if the inputs are not similar, it makes it difficult to initialize a neural network. You create potential problems for yourself. If you feed into a neural network values that have widely different ranges. The network might be able to automatically adapt to these mixed data scales, but it would definitely make learning more difficult. Now we are down to our last step in processing the data, which is to split our dataset into a training set and a test set. We will use the code from scikit-learn called train_test_split, which, as the name suggests, splits our data into a training set and a test set. The code will store the split data into the first four variables on the left of the equals sign, as the variable names suggest. Unfortunately, this function only helps us
>
> **[1:34](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/data-preprocessing?u=76281980&t=94)** split our dataset into two. For our lab, we'll keep it simple and use the two sets, but as a best practice, you want to split the dataset into three, training, validation, and test. As you can see, the training set has 719 data points, while the test set has 480 data points each. The X variables have four input features, while the Y variable only has one feature to predict

> [!info]- Semantic Content
>
> **Best Practices:** best practice (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** train_test_split (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Train the neural network using Keras](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/train-the-neural-network-using-keras?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/train-the-neural-network-using-keras?u=76281980&t=0)** - [Instructor] Since we will be using the Keras Sequential model, we merely need to describe the layers and sequence. model equal Sequential means that we will store our model in the variable model, and we'll describe it sequentially layer by layer in between the square brackets. Our first layer is a Dense layer with four neurons and relu activation. Defining the input shape or the number of inputs is optional, so we did not add it. Recall that Dense refers to a fully connected layer. The second layer is a Dense hidden layer with three neurons and relu activation. Note that we do not have to describe the input shape since Keras can infer from the output of our first layer. The third layer is a Dense output layer with one neuron, linear activation. And that's it. The model architecture is built. So now that we've built the model architecture, we need to configure the model by adding an optimization algorithm. Here, we use adam. For the loss function, we use mean squared error. Configuring the model with these settings
>
> **[1:35](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/train-the-neural-network-using-keras?u=76281980&t=95)** requires us to call the function model.compile. Training on the data is pretty straightforward and requires us to write one line of code. The function is called fit as we are fitting the parameters to the data. You have to specify what data you are training on which is X_train and y_train. And then you specify what your validation_data is so that the model can tell you how it is doing on the validation data at each point. This function will output a history which you save under the variable history. You then specify the number of epochs or how many iterations you want the model to go through when training. And then for this simple network, we're just going to use 32. If you had a very large dataset, you would want to specify a batch size. Once you run the code in the cell, the model starts training. You can now see that the model is training. What we might want to do is to plot the training loss and the validation loss over the number of epochs passed. In the first cell of the Jupyter Notebook, you may have noticed this code which imports matplotlib that will help us create some really nice graphs of our results. Shown here is an example
>
> **[3:11](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/train-the-neural-network-using-keras?u=76281980&t=191)** visualizing the training loss and the validation loss. The first two lines of the code says that we want to plot the loss and the validation loss. The third line specifies the title of this graph, Model loss. The fourth and fifth line tells us what the y and x axes should be labeled, respectively. The sixth line includes a legend of our graph, and the location of the legend will be in the upper right. And the seventh line shows the graph. Since the improvements in our model to the training set looks somewhat matched up with improvements to the validation set, it doesn't seem like overfitting is a huge problem in our model. Each curve shows that loss is decreasing through the iterations. To sum it up, you use matplotlib to visualize the training and validation loss over time to see if there's overfitting in our model. Overfitting is a common and serious problem because it affects the ability of our model to generalize a new unseen test data. Shown here is an image of an overfitting model. While a training curve is moving downward as loss decreases, the validation, our test data, is not. It is overfitting the unseen data.
>
> **[4:47](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/train-the-neural-network-using-keras?u=76281980&t=287)** In this example, the model tries to fit the training data, even memorizing data patterns and any random fluctuations. Note here the peaks and values are similar shapes. We cover ways to mitigate overfitting in our next chapter. After training, the model outputs a list of predicted values from the test set. You can print those test predictions, shown here on the left. You can also show the true value and the predicted value, shown here on the right. Notice that the two red boxes highlight the same numbers for the predicted values. You can also visualize the true and predicted values graphically, as shown here. Let's evaluate our model. First, note the code circled in red. Here, we take the square root of the mean squared error by using the NumPy square root function. This is a fast and efficient way to calculate the square root of an array or a single value in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Recall that the square root of the mean squared error gives us the root mean squared error metric. Our model is achieving a stable performance with not much variance in the train and test set root mean squared error values
>
> **[6:21](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/train-the-neural-network-using-keras?u=76281980&t=381)** where we have 4.67 versus 4.72.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (6), is an  (2), means that (1), refers to (1), is called (1)
> **Code Identifiers:** y_train (1), validation_data (1)
> **Versions:** 4.67 (1), 4.72 (1)
> **CLI Commands:** python (1)
> **Cross-References:** next chapter (1)
> **Tools:** jupyter (1)
> **Warnings:** note that (1)

#### [How to use the challenge exercise files](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-to-use-the-challenge-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-to-use-the-challenge-exercise-files?u=76281980&t=0)** - [Instructor] At the end of the course, there will be two hands-on challenges for you to try on your own. The files needed for these challenges are located in the course's [GitHub](../../Skills/Software%20Development/GitHub.md) repository. To use the files, please clone the repo into your own GitHub account or download the files locally. You'll see a begin and an extras file for each challenge. Use the begin files to try the challenge on your own. Feel free to reference the end files for the solution and the extras file for added code that you can run for additional functionality. We'll be working in [Google](../../Glossary/Service/Google.md)'s Colaboratory notebooks. You can open the notebook from your GitHub, or you can download the files as a ZIP and upload them from your computer. Let's look at the begin file for chapter four. At the top of the notebook, you will see the table of contents. Feel free to use this to navigate the sections of code in the notebook. Type in your code where prompted. And when it's time to run it, click on the arrow button shown here. And that should be all you need to know to access the challenge exercise files for this course. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Google](../../Glossary/Service/Google.md) (1)
> **Exercise Files:** download the (2), clone the repo (1), exercise files (1)
> **Tools:** github (3)
> **UI Navigation:** open the (1), click on (1)
> **Env Vars:** zip (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Build a neural network](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/challenge-build-a-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/challenge-build-a-neural-network?u=76281980&t=0)** - [Instructor] In this challenge, let's build a simple neural network. Use the provided notebook in [Google](../../Glossary/Service/Google.md) Collaboratory, and run each cell one by one to see their output. Then build the Keras sequential neural network we covered previously. Note, there will be a placeholder for you to add your six lines of code. Then run the cell. Then evaluate the model by entering the code to plot the graph. Run the cells and evaluate your loss curves. So go ahead and give this a try. And when you're ready, join me in the next video to see the solution. You got this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (1)
> **Cross-References:** we covered (1), in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Build a neural network](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-build-a-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-build-a-neural-network?u=76281980&t=0)** - [Instructor] Well, I hope you enjoyed that challenge. Let's now take a look at the solution. What we're going to do is just run through the cells one by one and see the output. So first we need to import our necessary libraries. Then we need to grab our data from the [GitHub](../../Skills/Software%20Development/GitHub.md) repo, put that into a [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) data frame. And then we're using the pandas info function to get a concise summary of the data frame. And now we want to get some summary [Statistics](../../Skills/Data%20Science/Statistics.md) of the data. And here we're just looking to see the shape of the data frame. And in this cell, we're really just using the is null method to check and see if there are any null values. So let's do a little bit of exploratory data analysis. So here we're just going to plot the heat map so that the values are shown. And here we're going to use a correlation matrix. And then down here we're going to have another correlation matrix but this time in table form. We're going to here visualize the correlation using gradient coloring. And down here we're going to use a scatter plot to again see the linear relationship
>
> **[1:32](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-build-a-neural-network?u=76281980&t=92)** between the features and sales. So now we enter the data pre-processing step. We're just going to go ahead and split the features X feature and Y target. We're going to go ahead and scale those features or normalize those features. Now we're going to split the data into a training and test set. Going to go ahead and print that and see what that looks like. So now we're at step two and this is the section where I challenged you to write your own code to create a simple three layer neural network. So your first line should have said model equals sequential because you're using the Keras Sequential API, then you needed to build the network by adding layers so you added the input layer, you added a hidden layer and you added an output layer. Your input layer had four neurons. Your hidden layer had three, and your output layer had one. You then compile the model using the atom optimizer. You used MSE for your loss function and a metric as well. And then you fit the model by writing this bit of code. You should have put in 32 for your number of epochs. So let's go ahead and run it. It'll go through 32 iterations.
>
> **[3:07](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-build-a-neural-network?u=76281980&t=187)** And for our final step, let's look at a visualization of our model. So here we're using some standard graphing code just to plot the model and see the visualization. We're essentially plotting a graph of the model loss where we are showing the graph of model loss in training and validation. You simply have to make sure that you have your metrics here, and then just run the code. And there you have it. We have our graph and you can see there's convergence. And this is just what we expected. I hope you enjoyed that challenge. Don't worry if your code doesn't look exactly like mine. That is the nature of working with data and its iterations. And if you're interested in learning more and playing more, check out the extras file we provided.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **Env Vars:** api (1), mse (1)
> **Tools:** github (1), atom (1)
> **CLI Commands:** make (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Best Practices for Optimizing a Neural Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Overfitting and underfitting: Two common ANN problems](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/overfitting-and-underfitting-two-common-ann-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/overfitting-and-underfitting-two-common-ann-problems?u=76281980&t=0)** - [Instructor] In this chapter, we focus on understanding what makes a good model, which means you learn about underfitting and overfitting. Typically, the two major problems you will encounter with your models. You'll then learn the difference between model parameters and hyperparameters, which gives you the foundation to improve your model performance. You'll then work with the learning rate in a pre-coded lab to see how it impacts model performance. Models that are accurate and generalizable, which means you can feed unseen data into it, and it will give you similar results from your validation results, are considered good models. Models that overfit or underfit are not. Also, good models have less minimal bias and variance errors. You will learn about bias and variance later in the chapter. In the previous chapter, you built a simple neural network using Caris. You saw how easy it was to build a three-layer model, compile, and fit the model to the training data. You also learned how to plot the training and validation curves for the model loss, which gave you the loss curves shown on the right. So how do you interpret this curve? Does it mean you have a good model? And underfitting model or an overfitting model? Let's take a look at three typical examples
>
> **[1:33](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/overfitting-and-underfitting-two-common-ann-problems?u=76281980&t=93)** that show loss curves for validation data and training data. The far left example shows an underfitting model loss curve. The middle shows a right fitting model loss curve, and the right figure shows an overfitting model curve. Underfitting is a common problem in machine learning. An underfit model is a model that does not accurately predict the target variable, meaning that it is so simple, it cannot create a relationship between the input and the output. It does not capture the relationship between the features and the target variable. And therefore, these models are unable to generalize. So think of an underfitting model as having poor performance on the training and the test data. The causes of underfitting occur because the model is too simple. The model is not trained long enough, the model is not regularized enough, or the model is not using enough data. Here are some of the solutions to underfitting. Make the model more complex by adding more neurons to hidden layers or adding more layers. Train the model for longer by increasing the number of epochs or iterations. Use more data or use regularization, which you'll learn about later in the chapter. A good fitted model is a model that accurately
>
> **[3:08](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/overfitting-and-underfitting-two-common-ann-problems?u=76281980&t=188)** predicts the target variable given the features. A good fitted model is neither underfit nor overfit. This means that the model has captured the relationship between the features and the target variable but has not memorized the training data. We want to find the optimal fitting situation, where the model has a similar gap between the training and validation error values. The model should be able to generalize to unseen data. Overfitting is a common problem in machine learning that occurs when a model learns the training data too well and is unable to generalize to new data. This can lead to poor performance on unseen data. An overfit model is a model that can accurately predict the target variable on the training data but does not accurately predict the target variable on the test data. This is because the model is too complex and has memorized the training data. Solutions to overfitting include data augmentation, which involves artificially increasing the size of the training data by creating new data points that are similar to the existing data points. And this can help to prevent the model from learning the training data too well. Another solution includes regularization, which means you're adding constraints to the model to prevent it from becoming too complex.
>
> **[4:44](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/overfitting-and-underfitting-two-common-ann-problems?u=76281980&t=284)** And you can also use early stopping, which involves stopping the training process early before the model has a chance to overfit the training data.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), means that (1)
> **Cross-References:** later in (2), previous chapter (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Hyperparameters and neural networks](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/hyperparameters-and-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/hyperparameters-and-neural-networks?u=76281980&t=0)** - [Instructor] In this video, we look at hyperparameters which provides techniques to let you improve your model performance and avoid underfitting and overfitting models. If you are not using [automated machine learning](../../Skills/Data%20Science/Automated%20Machine%20Learning%20(AutoML).md) where the training process is handled automatically by an AutoML framework, then hyperparameters need to be set by you. Lastly, model parameters are not hyperparameters. Let's look at some examples. This image shows a six layer deep neural network using the dataset features from our hands-on lab in the previous section, for example, digital, television, newspaper, and radio. Below the neural network, there is an expanded drawing of the summation and activation functions which was covered in a previous video. Model parameters are something that a model learns on its own. They are estimated and learned by data during training. So when you think of model parameters, think of the model weights or nodes or bias in a neural network. These model weights cannot be manually set by you. They must be learned from the forward and backward pass workflow you saw in a previous video. But when you think of hyperparameters,
>
> **[1:37](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/hyperparameters-and-neural-networks?u=76281980&t=97)** think of what you can set. You can determine the number of epochs, the learning rate, and what regularization techniques to use. These are the components shown in the blue bubbles. There are other hyperparameters we'll cover later in the video. So let's look at this hands-on neural network from the CARES Lab you previously built. Model parameters are learned during training when we optimize a loss function. Model hyperparameters cannot be learned during training but are set beforehand. Model hyperparameters define the model's architecture but are external to the model. Thus, they do not change with your model during training, and there is no learning as part of model training. Since they are not a part of the trained model, no values are saved. Hyperparameters are used to optimize the model performance. Typical hyperparameters for a neural network include the number and size of the hidden layers, nodes, weight initialization scheme, learning rate, activation and it's decay, dropout, and gradient clipping thresholds, for example. Model parameters are estimated during the training with historical data.
>
> **[3:10](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/hyperparameters-and-neural-networks?u=76281980&t=190)** It is a part of the model. The estimated value is saved with the trained model. It does not define the model's architecture or optimize performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Automated machine learning](../../Skills/Data%20Science/Automated%20Machine%20Learning%20(AutoML).md) (1)
> **Cross-References:** previous video (2), later in (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Env Vars:** cares (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [How do you improve model performance?](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-do-you-improve-model-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-do-you-improve-model-performance?u=76281980&t=0)** - [Instructor] As you may recall, the image on the left is of an underfitting model. In chapter four, you had a hands-on lab, where you built a simple Keras neural network. The image on the right shows the model's loss curves for the validation and training data for that model. The model loss curve appears to be very close to underfitting. You could tune the hyperparameters to improve your model's performance and in this example, hyperparameters are knobs that you can tune or change to see if the model improves. You could change the model's architecture, the optimizer, the loss function, and the number of epochs. Shown here is the code you use to build your simple neural network in the hands-on lab. The code shows a three-layer neural network with four input units in the first layer to receive the four features. A second hidden layer with three nodes, or units, and one output layer. Note the optimizer as "adam" and the metric or loss function you chose. Lastly, the number of iterations, or epochs, was 32. So, as you can see, hyperparameters are those which you supply to the model. The image on the left is the code for the simple neural network just shown.
>
> **[1:33](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-do-you-improve-model-performance?u=76281980&t=93)** The image on the right shows the model's validation and training loss curves after training the model. This is the neural network that you will experiment with by manually changing hyperparameters. Here is an architectural view of that three-layer network. The table presents two hyperparameter options you will first use to improve model performance. If you increase the number of layers, you can make this simple model a bit more complex. Increasing the number of nodes in the layers also makes the model a bit more complex and may help mitigate the underfitting. You can also adjust the learning rate, which is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The image on the left shows the neural network with an additional hidden layer and an additional node. Note that the optimizer learning rate of 0.001 is the default learning rate for the atom optimizer. It is shown here simply to show you that this learning rate appears to improve the model's loss curves as is shown by the image on the right. So, in addition to adding an additional layer and additional nodes, what if you increase the number of epochs? The loss curves now appear to underfit, again. It appears that the most improved model is where the number
>
> **[3:12](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/how-do-you-improve-model-performance?u=76281980&t=192)** of iterations is set to 32 as has can be seen when the top image of the loss curves is compared against the good fit model image below. Typically, when training a model, the number of epochs is set to a large number, for example, a hundred, and an early stopping is used to determine when to stop training. This means that the model will continue to train until either the validation loss stops improving or the maximum number of epochs is reached. Now that you have seen an example of improving an underfitting model, let's look at how you can improve an overfitting model.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1), means that (1)
> **CLI Commands:** make (1), node (1)
> **Versions:** 0.001 (1)
> **Tools:** atom (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Regularization techniques to improve overfitting models](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/regularization-techniques-to-improve-overfitting-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/regularization-techniques-to-improve-overfitting-models?u=76281980&t=0)** - [Instructor] The purpose of a neural network is to capture the dominant trends in the data. Overfitting is bad because it means that the machine learning algorithm did not capture the dominant trend in the data and therefore won't be able to recognize any trend on new data it has never seen. This means that the model did not really learn anything but only memorize the training data without understanding it. This means that your model cannot make accurate predictions so your validation error is large while your training error is small as is shown in the image on the left. Regularization is a hyperparameter technique to improve overfitting models. It refers to a set of different techniques that lower the complexity of a neural network model during training and thus may prevent overfitting. The image on the right shows a list of regularization techniques to help mitigate overfitting. Let's take a look at three of them. Early stopping, dropout and regularization. In early stopping, you stop the training process early before the model learns the patterns and details of the data. Dropout works by randomly dropping out or setting to zero neurons during training. Regularization is a technique used in machine learning to prevent models from overfitting the training data by adding a penalty to the model's loss function which encourages the model to be simpler and less likely to overfit.
>
> **[1:36](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/regularization-techniques-to-improve-overfitting-models?u=76281980&t=96)** Early stopping is a regularization technique that helps us avoid overfitting by stopping the training process of a neural network before it reaches the maximum number of iterations. The training process is stopped early before the model has had a chance to learn the specific details of the training data and start to overfit. So early stopping helps to avoid overfitting by monitoring, storing and updating the best parameters during training so that when parameter updates no longer yield an improvement. After a set number of iterations, training is stopped and the last best parameter is used. If the performance of the model on the validation data set starts to degrade, eg. loss begins to increase, or accuracy begins to decrease then the training process is stopped. To implement early stopping, you need to split your data into three sets, training, validation, and test. The training set is used to update the network parameters. The validation set is used to evaluate the network performance and decide when to stop the training and this test set is used to measure the final accuracy of the network. The model is trained on the training set and its performance is evaluated on the validation set.
>
> **[3:11](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/regularization-techniques-to-improve-overfitting-models?u=76281980&t=191)** If the model's performance on the validation set starts to decrease, then training is stopped. Another approach to early stopping is to use a callback function. A callback function is a piece of code that is executed at regular intervals during the training process, which returns information from the training learning algorithm. As soon as your chosen metric stops improving for a fixed number of iterations, training stops as shown in the image here where the carrot's early stopping callback is used to monitor specific metrics like validation loss. Essentially, the callback function can be used to monitor the model's performance on the validation set and to stop training if the model's performance starts to decrease. With dropout, essentially at every iteration, a node is randomly selected and dropped along with all of their incoming and outgoing connections which means we don't use those nodes in both forward propagation and back propagation. This means that all nodes are not active at the same time which forces the learning algorithm to spread out the weights and not focus on certain nodes. In machine learning, regularization penalizes the coefficients. In [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md), it penalizes the weight matrices
>
> **[4:45](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/regularization-techniques-to-improve-overfitting-models?u=76281980&t=285)** of the nodes. A penalty term is added to the loss function during training, which discourages the model from becoming too complex or having large parameter values. L1 regularization, also known as lasso regression prevents models from overfitting the training data by shrinking the weight values to zero. This makes some features obsolete. This encourages the model to have fewer features with larger weights, which can help to prevent overfitting. The L1 formula on the right shows a regularization penalty term added to the model's loss function based on the absolute values of the model's parameters. L2 regularization is the most common type of all regularization techniques and it's commonly known as weight decay or rich regression. L2 combats overfitting by forcing weights to be small but not making them exactly zero. The L2 formula on the right shows a penalty term added to the model's loss function where it takes the square of the weights. For example, when you are predicting media sales, this means that less significant features for predicting media sales such as newspaper budget would still have some influence over the final prediction, though very small. The main goal of training a neural network is to
>
> **[6:18](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/regularization-techniques-to-improve-overfitting-models?u=76281980&t=378)** acquire a model which is able to generalize optimally on new unseen data. Unfortunately, most neural network architectures often suffer from overfitting or under fitting. Recall that overfitting is the effect when the model fits the training data too well. That means the model is not able to make sense of unseen data it receives. Under fitting is a situation in which a model does not learn the underlying patterns of the data well enough. So in addition to using hyperparameters, best practices for optimizing [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) include many techniques that involve the feature dataset from feature selection and [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) to normalizing, splitting and shuffling the dataset. Recall that in the hands-on data pre-processing portion of the exercise to build a simple neural network, you normalize the features before using them in the model. Since the features had different ranges. You also split the data into a training and test set and it was noted that a best practice is to split the data into three. A training, validation, and test the set.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1)
> **Definitions:** is a  (5), means that (4), known as (2), refers to (1)
> **CLI Commands:** make (2), node (1)
> **Analogies:** for example (1), such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Manually tune hyperparameters](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/challenge-manually-tune-hyperparameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/challenge-manually-tune-hyperparameters?u=76281980&t=0)** - [Instructor] In this hands-on challenge, you will manually tune the hyperparameters of the simple Keras neural network you previously built. Open your CoLab notebook for this video, and in the notebook, add an additional layer, then add four nodes to this layer. And note that since this is a regression problem, the output layer should not be changed. Then increase the number of epochs, and then run all cells. So go ahead and try this on your own. And when you're ready, join me in the next video to see the solution. Have fun.

> [!info]- Semantic Content
>
> **Cross-References:** in the next (1)
> **Tools:** colab (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Manually tune hyperparameters](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-manually-tune-hyperparameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-manually-tune-hyperparameters?u=76281980&t=0)** - [Instructor] I hope you enjoyed solving that challenge. Now let's look at the solution. So first we're going to start by running all the cells, and while that's going, let's go ahead and open a table of contents and we're going to scroll down to the base model and we're going to look at the visualization from the model. So this is what the results are from our initial base model. Now let's go down to step three, where we're going to tune the neural network hyper parameters. So here I'm going to add an additional layer and I'm going to add or change from three to four neurons and then we're going to scroll down and change the number of epochs to 100,
>
> **[1:09](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/solution-manually-tune-hyperparameters?u=76281980&t=69)** and they were going to run the cell. Okay, now that the cell is done executing and the number of epochs has been reached, we're going to simply see the visualization and take a look at our results. So if we compare this result to this result, ask yourself, is the model under fitting or overfitting with the parameters you've just modified? I encourage you to keep playing around with this base neural network model by adding more layers or changing the number of epochs or even adding early stopping or callback function that we covered earlier in the course. If you'd like to see more functionality, check out the extras file for this chapter.

> [!info]- Semantic Content
>
> **Cross-References:** we covered (1), earlier in (1)
> **UI Navigation:** scroll down (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/next-steps?u=76281980&t=0)** - [Instructor] You've done it. Hug yourself. This is an amazing accomplishment. I hope you had fun learning what [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) are, how they are used, how to build them, and how to improve them. You have completed a course that will help you apply what you have learned in any setting, whether for work, a school project, or personal growth toward work in the field of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md). Of course, there's so much more you can learn about neural networks, so as next steps I suggest the following. Find datasets that classify something and learn about [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) by using [Google](../../Glossary/Service/Google.md)'s free Colab Jupyter Notebook to build a Keras sequential model. Assess your neural network for usual problems like overfitting and underfitting. Experiment with more hidden layers and with more or less neurons per layer. Add a callback function or early stopping. Play, play, play, and play some more. If you want to see other examples of data pre-processing and Keras neural networks, check out my new book with co-author Michael Abel entitled "Low-Code AI: A Practical Project-Driven Approach to Machine Learning" and see the downloadable PDF with URLs to resources I recommend for you on your journey. Please feel free to reach out to me on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md)
>
> **[1:36](https://www.linkedin.com/learning/artificial-intelligence-foundations-neural-networks-22853427/next-steps?u=76281980&t=96)** and also join the Machine Learning Community Group on LinkedIn. Thank you for taking the course, and remember, this is your moment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Tools:** colab (1), jupyter (1)
> **CLI Commands:** find (1)
> **Env Vars:** pdf (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Gwendolyn Stripling](../../Instructors/Artificial%20Intelligence%20(AI)/Gwendolyn%20Stripling.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/artificial-intelligence-foundations-neural-networks-4381282)

## Skills Covered

- Neural Networks
- Machine Learning
- Artificial Intelligence (AI)
- Artificial Intelligence Foundations

## Path Context

### In [Advance Your Skills in Deep Learning and Neural Networks](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Deep%20Learning%20and%20Neural%20Networks.md)
← [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) | **2 of 8** | [Deep Learning with Python- Convolutional Neural Networks](Deep%20Learning%20with%20Python-%20Convolutional%20Neural%20Networks.md) →

### In [Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)
← [Hands-On PyTorch Machine Learning](Hands-On%20PyTorch%20Machine%20Learning.md) | **7 of 7**

## Appears In

- [Advance Your Skills in Deep Learning and Neural Networks](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Deep%20Learning%20and%20Neural%20Networks.md)
- [Getting Started with AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Getting%20Started%20with%20AI%20and%20Machine%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [Artificial Intelligence Foundations- Machine Learning](Artificial%20Intelligence%20Foundations-%20Machine%20Learning.md) — Artificial Intelligence (AI), Machine Learning, Artificial Intelligence Foundations
- [Artificial Intelligence Foundations Thinking Machines](Artificial%20Intelligence%20Foundations%20Thinking%20Machines.md) — Artificial Intelligence (AI), Machine Learning, Artificial Intelligence Foundations
- [Machine Learning and AI Foundations- Clustering and Association](Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI- Advanced Decision Trees with SPSS](Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Decision Trees with SPSS](Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)