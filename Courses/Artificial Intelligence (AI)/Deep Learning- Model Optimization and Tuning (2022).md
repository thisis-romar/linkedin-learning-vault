---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: deep-learning-model-optimization-and-tuning-2022
url: "https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022"
duration_minutes: 54
duration: 54m
level: Advanced
updated: 2/1/2022
learners: 86498
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Deep Learning
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG94hya2dyecw/learning-public-crop_675_1200/B4EZkLc0L2IwAg-/0/1756833727967?e=2147483647&amp;v=beta&amp;t=ZT9tm1YKLJB0SP_A9QUDasuV_L8YwzqQJbwqg50Sqfo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Fundamentals to Become a Machine Learning Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Fundamentals%20to%20Become%20a%20Machine%20Learning%20Engineer.md)'
  - '[Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)'
  - '[Advance Your Skills as a Machine Learning Specialist](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20as%20a%20Machine%20Learning%20Specialist.md)'
prev_courses:
  - '[Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md)'
  - '[Applied Machine Learning Ensemble Learning](Applied%20Machine%20Learning%20Ensemble%20Learning.md)'
  - '[Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference](Machine%20Learning%20and%20AI%20Foundations-%20Prediction%2C%20Causation%2C%20and%20Statistical%20Inference.md)'
next_courses:
  - '[Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md)'
  - '[Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md)'
  - null
path_nav: '[{"path":"Fundamentals to Become a Machine Learning Engineer","position":5,"total":7,"prev":"Deep Learning Getting Started","next":"Reinforcement Learning Foundations"},{"path":"Advance Your Skills in AI and Machine Learning","position":2,"total":16,"prev":"Applied Machine Learning Ensemble Learning","next":"Reinforcement Learning Foundations"},{"path":"Advance Your Skills as a Machine Learning Specialist","position":9,"total":9,"prev":"Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference","next":null}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/deep-learning
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Deep%20Learning-%20Model%20Optimization%20and%20Tuning%20(2022).md)

![Deep Learning: Model Optimization and Tuning (2022)](https://media.licdn.com/dms/image/v2/D4E0DAQG94hya2dyecw/learning-public-crop_675_1200/B4EZkLc0L2IwAg-/0/1756833727967?e=2147483647&amp;v=beta&amp;t=ZT9tm1YKLJB0SP_A9QUDasuV_L8YwzqQJbwqg50Sqfo)

# Deep Learning: Model Optimization and Tuning (2022)

> Deep Learning as a technology has grown leaps and bounds in the last few years. More and more AI solutions use Deep Learning as their foundational technology. Studying this technology, however, presents several challenges. IT professionals from varying backgrounds need a simplified resource to learn the concepts and build models quickly. In this course, instructor Kumaran Ponnambalam provides a si

> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022) | 54m | Advanced | 86K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Optimizing neural networks](#optimizing-neural-networks)
  - [Prerequisites for the course](#prerequisites-for-the-course)
  - [Setting up exercise files](#setting-up-exercise-files)
- [**1. Introduction to Deep Learning Optimization**](#1-introduction-to-deep-learning-optimization) (6 videos)
  - [What is deep learning?](#what-is-deep-learning)
  - [Review of artificial neural networks](#review-of-artificial-neural-networks)
  - [An ANN model](#an-ann-model)
  - [Model optimization and tuning](#model-optimization-and-tuning)
  - [The deep learning tuning process](#the-deep-learning-tuning-process)
  - [Experiment setups for the course](#experiment-setups-for-the-course)
- [**2. Tuning the Deep Learning Network**](#2-tuning-the-deep-learning-network) (6 videos)
  - [Epoch and batch size tuning](#epoch-and-batch-size-tuning)
  - [Epoch and batch size experiment](#epoch-and-batch-size-experiment)
  - [Hidden layers tuning](#hidden-layers-tuning)
  - [Determining nodes in a layer](#determining-nodes-in-a-layer)
  - [Choosing activation functions](#choosing-activation-functions)
  - [Initializing weights](#initializing-weights)
- [**3. Tuning Back Propagation**](#3-tuning-back-propagation) (6 videos)
  - [Vanishing and exploding gradients](#vanishing-and-exploding-gradients)
  - [Batch normalization](#batch-normalization)
  - [Optimizers](#optimizers)
  - [Optimizer experiment](#optimizer-experiment)
  - [Learning rate](#learning-rate)
  - [Learning rate experiment](#learning-rate-experiment)
- [**4. Overfitting Management**](#4-overfitting-management) (5 videos)
  - [Overfitting in ANNs](#overfitting-in-anns)
  - [Regularization](#regularization)
  - [Regularization experiment](#regularization-experiment)
  - [Dropouts](#dropouts)
  - [Dropout experiment](#dropout-experiment)
- [**5. Model Tuning Exercise**](#5-model-tuning-exercise) (6 videos)
  - [Tuning exercise: Problem statement](#tuning-exercise-problem-statement)
  - [Acquire and process data](#acquire-and-process-data)
  - [Tuning the network](#tuning-the-network)
  - [Tuning backpropagation](#tuning-backpropagation)
  - [Avoiding overfitting](#avoiding-overfitting)
  - [Building the final model](#building-the-final-model)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your deep learning journey](#continuing-your-deep-learning-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Optimizing neural networks](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizing-neural-networks?u=76281980&t=0)** - [Kumaran] [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) has revolutionized how humans interact with machines today. However, building deep learning models is not easy. Data scientists spend weeks trying to tune their models to get desired accuracy and cost effectiveness. Knowledge of the parameters available for tuning, the tuning process and best practices are essential for building effective models in [agile](../../Skills/DevOps/Agile%20Development.md) timeframes. My name is Kumaran Ponnambalam. In this course, I will start off by exploring the process of model optimization. Then, I will discuss various hyperparameters available and how to tune them. An end-to-end exercise project will help students to fine tune a model by applying the learnings in the course. Let's now start building optimized, deep learning models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (3), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Speakers:** - [kumaran] (1)

#### [Prerequisites for the course](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=0)** - [Instructor] Before we begin the course, let's go through the course objectives, scope and prerequisites. [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) is a vast domain with a variety of tools and technologies. This tool set is evolving rapidly. Multiple courses exist that cover various aspects of Deep Learning, including concepts, libraries, tools and implementations. One of the key components of Deep Learning is the math involved in it. Some courses covered this math in-depth, and some ignore them as tools take care of the implementation. The same place to various tools use for Deep Learning as they take care of the implementation of [Algorithms](../../Skills/Software%20Development/Algorithms.md) and techniques. So what does this course cover? The goal of this course is to educate the students about the Deep Learning hyper parameters, and how to run experiments to tune them. It focuses on the tuning process, and best practices. We will use the Keras toolkit for our examples. Keras takes care of a lot of the heavy-lifting involved in Deep Learning, and helps in quickly building robust models. We also do not cover the math behind the hyper parameters. We have omitted deeper topics for ease of learning. We also have some simple examples for getting started in Deep Learning optimization. Our goal is to introduce Deep Learning optimization in a simple fashion, and help students move forward with additional advanced learning. What are the prerequisites for the course? Students are expected to be familiar with machine learning concepts and technologies.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/prerequisites-for-the-course?u=76281980&t=93)** Hands-on experience is preferred. They should also be familiar with Deep Learning concepts. They should be familiar with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming, and using Jupiter Notebooks. We do not cover the usage of Keras and [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md). So it is recommended to compliment this course with those focusing on the use of Keras. Familiarity with other tools like scikit-learn are also preferred. Here is a list of recommended complementary courses that would help the students in coding skills with Deep Learning. They are [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md). Building and Deploying Applications with TensorFlow. And Building Deep Learning Applications with Keras 2.0. Let's now get started with optimizing Deep Learning models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (13), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (2)
> **Prerequisites:** getting started (2)
> **CLI Commands:** python (1)
> **Versions:** 2.0 (1)
> **Speakers:** - [instructor] (1)

#### [Setting up exercise files](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=0)** - [Instructor] In this video, we will set up the exercise files and the environment to use in this course. All course exercises are built using [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.8. We will be using Anaconda and Jupyter Notebooks, for these exercises. You can download and install Anaconda from the website [anaconda.com/products/individual](https://anaconda.com/products/individual) for your specific operating system. Once downloaded, we will go to the Anaconda UI. Here, we will create a new virtual environment called [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md). By clicking the create button at the bottom and providing the name of the environment. The package we will use is Python 3.8. This may take some time to set up. The deep learning environment is set up now. We will now go back to home. Choose the deep learning environment on the top, and then install Jupyter Notebook for that environment. Jupyter Notebook is installed now for the deep learning environment. Open the command prompt window. Please note that if you're on [Windows](../../Glossary/Service/Windows.md), you would want to use the Anaconda command prompt for the same. The exercise files for this course have been downloaded to the folders users, [LinkedIn](../../Skills/Web%20Development/LinkedIn.md), documents, exercise files. Please download exercise files on your computer on a similar folder.
>
> **[1:32](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/setting-up-exercise-files?u=76281980&t=92)** Navigate to this folder on the command prompt, we can explore these files from the command prompt. Now let's activate the new virtual environment we created using the command conda activate deep learning. Then, we can start the Jupyter Notebook server using the command Jupyter Notebook. Please make sure that you are in the same folder as the exercise files are before using the command. This command then opens up the Jupyter Notebook in your browser. The exercise files and the data files can be seen in the root directory. You will use these files in the later exercises. In the next chapter, we will discuss the basics of deep learning optimization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Windows](../../Glossary/Service/Windows.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** jupyter (6), anaconda (5), command prompt (4)
> **Exercise Files:** exercise files (6)
> **Prerequisites:** set up (3), install (2)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (1), open the (1), navigate to (1)
> **Versions:** python 3 (2)
> **Cross-References:** go back to (1), in the next (1)


### 1. Introduction to Deep Learning Optimization

[↑ Back to Table of Contents](#table-of-contents)

#### [What is deep learning?](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=0)** - [Instructor] Let's begin the course by reviewing the concept of [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md). What is deep learning? Deep learning is a field within machine learning that deals with building and using neural network models. [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) with more than three layers are typically categorized as deep learning networks. Neural networks mimic the functioning of a human brain. They are organized similar to the brain cells and imitate how humans process data and make decisions. Deep learning is a field that has seen exponential growth in the last few years. While [Algorithms](../../Skills/Software%20Development/Algorithms.md) for neural networks have existed for some time, the advances in large scale [Data Processing](../../Skills/Database%20Management/Data%20Processing.md), as well as inference technologies, like GPUs, have spurred their popularity in real-world applications. Deep learning has been extremely popular in [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md), as the neural network architectures are ideal for dealing with [Unstructured Data](../../Skills/Software%20Development/Unstructured%20Data.md). For the same reason, they are also popular for [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) and synthesis applications. Image recognition is another domain where deep learning has made inroads. Self-driving cars is a leading-edge technology that is being powered by deep learning. Applications that require complex learning of behaviors are usually suited for deep learning. The applications of deep learning are getting wide popularity in varied domains, like customer experience, healthcare, and robotics.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/what-is-deep-learning?u=76281980&t=94)** We will explore building optimized models for such applications in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (10), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Review of artificial neural networks](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=0)** - [Instructor] Before we get into optimization and tuning, let's review the basic concepts of [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md) in this video. An ANN is a network of perceptrons. We discussed earlier that a perceptron imitates the human brain cell. Similar to how a human brain is created with a network of cells, an ANN is created with a network of perceptrons. The perceptron is called a node in the neural network. We will use node as the term to represent perceptrons going forward in this course. Nodes are organized into multiple layers in a neural network. A deep neural network usually has three or more layers. Each node has its own weights, bias, and activation functions. Each node is connected to all the nodes in the next layer, forming a dense network. The node within a layer are not connected with each other. There are some exceptions to this in advanced use cases though. This diagram shows an example neural network. Each neural network has one input layer, one or more hidden layers, and one output layer. In the input layer, there is one node for each independent variable. In this example, there are three. The hidden layer has three layers for this example. Layer one has four nodes, layer two has five nodes, and layer three has three nodes. The number of layers, and the nodes in each layer, are determined by experience and trials, and it will vary from case to case. The number of nodes in the output layer
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/review-of-artificial-neural-networks?u=76281980&t=94)** will vary based on the type of predictions. The output layer, in this example, has two nodes. This arrangement of node represents the architecture of a given neural network. How does the ANN work for predictions? The inputs or independent variables are sent from the input layer to the network. Data may be pre-processed before using them. Inputs are passed on to the next layer. Each node is a perceptron containing weights, bias, and an activation function. The formula is applied on the weights and the outputs derived. This repeats for each node in the layer. The results from all the nodes in a layer are passed onto the next layer, and this process is repeated. As this process reaches the output layer, the final predictions will be derived. I highly recommend watching the [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) course to discuss these concepts further if you have already not done so.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **CLI Commands:** node (9)
> **Env Vars:** ann (3)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** we discussed (1), in the next (1)
> **Analogies:** similar to (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [An ANN model](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/an-ann-model?u=76281980&t=0)** - [Instructor] What is a neural network model and how do we build it? A neural network model is represented by a set of parameters and hyperparameters. The parameters include the weights of weights and biases for all the notes. The hyper-parameters includes a number of levers like layers,nodes in a layer, activation functions, cost functions, learning rate, and optimizers. Training An ANN Model means, determining the right values for these parameters, and hyperparameters such that it maximizes the accuracy of predictions for the given use case. In this course, we will look at ways to optimize these hyperparameters to achieve the best results. How do we train a model? We use training data like regular machine learning, where we know both dependent and independent variables. We will start with a network architecture by intuition. We also initialize weights and biases to random values. Then we repeat iterations of applying weights and biases to the inputs and computing the error. Based on the error found, we will adjust the weights and biases to reduce the error. We keep repeating the process of adjusting weights and biases until the error gets to an acceptable value. We will also fine tune the network hyper parameters to improve training speed and reduce iterations. Finally, we will save the model as represented by it's parameters and hyperparameters and use it for predictions.

> [!info]- Semantic Content
>
> **Env Vars:** ann (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Model optimization and tuning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/model-optimization-and-tuning?u=76281980&t=0)** - Let's start diving deeper into model optimization and tuning. We need to tune our models for both efficiency and effectiveness. Optimization can be focused on both inference and training goals. Let's begin with the inference goals. What are our goals for inference? We want better accuracy for our models. We focus on higher model metrics like F1 scores as well as avoid variance and bias. We want to lower inference costs. We want smaller model sizes so they can be effectively stored on disk and loaded into memory. We want to reduce the time taken for inference. We also want to lower the resources used during inference, namely CPU, memory and disks. Do note that the requirements for better accuracy and lower costs conflict with each other. Better accuracy would usually mean higher costs. So a balance needs to be achieved so that we get the desired outcomes at affordable costs for the solution to be cost-effective. In addition, we also want to optimize the training process. Training [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) models with large amounts of data may take multiple iterations and long training times that may run for hours or days. We want to lower the time to train a model so we can run more experiments in less time. We also want to avoid various training pitfalls like vanishing gradients, exploding gradients and overfitting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Env Vars:** cpu (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)

#### [The deep learning tuning process](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=0)** - [Instructor] Tuning a model should be executed through an organized process making sure that experiments are tracked and the results baselined. Ad hoc tuning will only lead to ineffective results in the long term. We first need to get ready for tuning. For this, the first step is to set clear goals on the outcomes. What are our accuracy or efficiency targets? Are those reasonable? We then need to select the training data and prepare it for experimentation. It is important to choose datasets that are balanced across various classes and cover a wide range of real-world samples. We should plan for testing and validation of models with independent data. Multiple real-life use cases should be covered and production-like scenarios should be used for measuring model performance. What are the key levers available in a [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) model that can be experimented with? We have the network architecture levers like layers, nodes and weights. We have multiple activation functions that can be tried out. For training, we can control the epochs and batches to see how we can achieve the desired results with lower iterations. Normalization, regularization and optimization techniques can be tried out to achieve better model stability and performance. What are the best practices for running experiments? Choose one lever or hyperparameter at a time. Use your understanding, experience and team inputs to determine a set of values to experiment with. For example, for activation functions,
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/the-deep-learning-tuning-process?u=76281980&t=95)** you may choose a subset of activation functions that you find most appropriate to your use case. Run the experiment with each of the options and log the results. Review the results, and then choose the best options/value. Once you have experimented with individual levers and chosen the best options, try combining these options and see how the performance improves. This is an iterative back and forth process until the desired levels of performance are achieved. Validate the results with multiple independent datasets to make sure that you get consistent results. Before we jump into the various levers available, there are things we need to remember during experimentation. There is no one-size-fits-all best option. Each use case is unique and different models perform differently for the same option values. So if a given option works best for one use case, do not expect the same for another use case. The key for optimization is to keep experimenting. Experiment the first time when you are building the initial model. Experiment with multiple independent datasets to ensure consistency and repeat the experiments when new datasets become available to make sure that the model continues to perform well and there is no model drift.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** select the (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Experiment setups for the course](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=0)** - In order to explore various tuning parameters and experiment with them, we have created an experiment setup. We start with a notebook called common experiment functions. In this notebook, we will use the same model for iris flower identification, that we explored in the [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) course. We first need to install the required packages for the exercises if we have already not done so. Please make sure to run this code, and check if all required dependencies are satisfied. Now let's explore the common functions that we will use throughout the course. The get data method will load up the data from iris.csv, pre-process it, extract the feature and target data sets and return them. The base model config method, initializes a set of model hyperparameters. These are the various parameters we will experiment with, in this course. For each parameter, a default value is set. During the experiment, we will change one or more of these values, build models and compare results. To create and run model method, we'll use the input model configuration, feature, and target variables to create a [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) model, and build it. Various hyperparameters that are set up in the config are used to build the model. On execution it will collect the results from the epochs, and return them to the main function.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/experiment-setups-for-the-course?u=76281980&t=94)** Finally, the plot graph function takes in an array of accuracy measures, and plots them in a graph. Each experiment has a key and a set of values. The values are the accuracy measures for each epoch. The plot shows how the accuracy of the model improves with each epoch for the given experiment. Please explore more on these functions to understand what they do under the wraps. We will use them in our experiments in our upcoming chapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (2)
> **Prerequisites:** setup (1), getting started (1), install (1), set up (1)
> **File Paths:** iris.csv (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - in (1)


### 2. Tuning the Deep Learning Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Epoch and batch size tuning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=0)** - [Instructor] Let us begin our optimization journey with the most common training parameters, namely batch sizes and epochs. The general format we will follow for optimization in this course would be a quick review of the hyper parameter, followed by an exercise to try out various values and see their relative performance. We will stay away from the background concepts informally. We recommend additional readings on these topics to learn more. What is a batch size? A batch size represents a set of samples sent through the ANN in a single pass. The input data is broken up into multiple batches and each batch is passed through the network to obtain predictions and update parameters. The maximum batch size is the size of the input data and batch sizes are usually configured in 2 power n values. If the batch sizes are higher, it would lead to better GPU utilization as the samples in a batch can be processed in parallel. It would also lead to lower training iterations and possible instability in the gradient descent. The recommendation is to experiment with the model to find the right size. A size of 32 has been found to be the most optimal for most use cases. We now look at epochs. Epochs are the number of times the entire training set is passed through the network. Epochs similar to batches will only control training progress, not inference. As epochs increase, the gains would taper off as the model gains accuracy.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-tuning?u=76281980&t=94)** An increase can also trigger instability beyond a certain point. It is recommended to choose the earliest value when accuracy stabilizers during the training process. The recommendation is to figure out the right number of batches and epochs first, and then use that for further experimentation. In the next video, we will experiment with epochs and batch sizes.

> [!info]- Semantic Content
>
> **Env Vars:** ann (1), gpu (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Epoch and batch size experiment](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=0)** - [Narrator] Let's run some experiments now. The code for this chapter is available in the notebook code-02-XX, Tuning the [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) Network. We first import the common experiments functions into this notebook. Please be aware that if you change the common experiments function notebook, you will have to save that notebook and import it again. The Epoch and Batch sizes exercise is in section 2.1. This code is a standard template for all our experiments. We first initialized the accuracy Mitchell's collection to empty. We've done experiments with Batch sizes ranging from 16 to 128 incrementing by 16. We'll get the base model configuration with the default setup for all the values from the common library. We will also load up the training data with the get data method. Now we set the Epochs to a value of 20. For all our experiments, we will anyway capture the output after each Epoch so we can see the trend for Epochs through this. We set the Batch size to the iterated value. We can also create a model name to use Astra Friends in our output and graphs. We then run the model and capture the accuracy performance after each Epoch. As we iterate for multiple Batch sizes, we captured the performance for these values. Let's review the model now. Looking at the model summary output, we see that the model remains the same irrespective of the Batch size chosen.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/epoch-and-batch-size-experiment?u=76281980&t=94)** Next we plot the captured results in a graph. Looking at the graph, we can see the trends. The x-axis has Epochs and the y-axis has accuracy found for that Epoch. Individual lines are plotted for each Batch size. Looking into the Epochs, we see that for lower Epochs the accuracy starts at a low value, but increases and stabilizes after a few Epochs. The value at which the stabilization happens will vary based on the specific use case and other model parameters. Now let's look at Batch size. For lower Batch size, we see that the accuracy starts at a much higher range. This is because there are more iterations within the Epoch for smaller Batch sizes. Again the accuracy stabilizes as the Epochs progress. For this specific use case, the accuracy range is higher for smaller Batch sizes. A warning not for all experiments in this course though. We are using a very small model with very little training data so repeating the same experiment may not provide consistent results. For real life use cases, It is recommended to use a good training data set that can provide repeatable results across multiple trends of the same experiment. Once we narrow down these parameters, we can fix them and use them for further downstream tuning with other parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Warnings:** be aware (1), warning (1)
> **Versions:** 2.1 (1)
> **Exercise Files:** template (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [narrator] (1)

#### [Hidden layers tuning](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=0)** - [Guide] One of the key model architecture hyperparameters is the number of hidden layers. Let's explore and experiment with this value in this video. A neural network can have one or more hidden layers that learns from training data and builds the model. As the number of layers increases, it increases the possibility of learning complex relationships between the feature and target variables, but it will also increase the cost and time needed for both training and inference. It also has the risk of overfitting the training set. A value of two has been found to be sufficient for simple problems. It is recommended to increase the number of layers only based on experimentation if the set accuracy levels are not achieved. Otherwise, additional layers will take resources and time without providing any additional value. Let's switch to the node book now and look at section 2.3. In this section, we keep the base model the same as the previous experiment and will only vary the number of layers. The logic is the same as the previous experiment. We experiment with layer counts of one to five. Each layer will have 32 nodes. We again get the base model and training data, but only chain the hidden nodes list. Once we create the model, we see that as the number of layers increases the number of parameters of the model also increases, which leads to more resource requirements to process and store the model. Let's plot the results and compare.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/hidden-layers-tuning?u=76281980&t=95)** With a count of one, the initial accuracies are pretty low, but they continue to improve as the training goes on. For a layer count of two, we see really high accuracy levels achieved within a few eBooks. But as the number of layers increases, accuracy actually starts dropping. A layer count of two seems optimal for this use case.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Code Identifiers:** ebooks (1)
> **Versions:** 2.3 (1)
> **UI Navigation:** switch to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [guide] (1)

#### [Determining nodes in a layer](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=0)** - [Instructor] We will experiment with nodes in a layer in this video. The nodes in a layer are associated with its corresponding weights and biases, which in turn represents the learning from the training data. As we increase the number of nodes in the layer, the model has better chances of learning more about the use case. It can model complex relationships better. However, similar to the number of layers, it will result in more training and inference resources and time. It also has the possibility of overfitting the training set. In general, the number of nodes in the layer should be somewhere between the number of nodes in the input and the number of nodes in the output. Do recollect that the number of nodes in the input layer equals the number of feature variables in the sample, and the node count in the output layer equals the number of classes in the target variable. Again, start with a low value like 32 and increase it based on experimentation. Switching to the notebooks now. The experiment for the number of layers is in section 2.4. We will use the standard size of two hidden layers and vary the number of nodes from 8 to 32 in steps of 8. Once we build and run the model, we can review the model summary. From the model summary, we can see that the number of parameters increase as the number of nodes increase resulting in bigger models that would require more and more resources. Let's proceed to plot the results. As the number of nodes increase,
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/determining-nodes-in-a-layer?u=76281980&t=93)** there is a general tendency of increase in accuracy owing to more patterns being captured by additional nodes. A count of 16 nodes seem to provide the best accuracy for this use case. Once again, due to a small dataset, you may not see consistent results across multiple runs. For real life use cases do use a big balanced data set that is sufficient to ensure consistent results across multiple runs.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1)
> **Versions:** 2.4 (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Choosing activation functions](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=0)** - [Instructor] Activation functions play a key role in building effective, [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) networks. Let's explore the options available in this video. Activation functions are useful for both hidden layers and output layers. And the selection criteria for both is different. Let's start with hidden layers. The activation function for hidden layers depends upon the choice of the problem and the network architecture. The choice can also impact the stability and speed of the gradient descent. There are a number of [Algorithms](../../Skills/Software%20Development/Algorithms.md) available for activation functions. In general, rectified linear units work best for regular [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) and [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md). Sigmoid works best for RNNs. While these choices are default, experimentation is necessary to confirm them for a specific use case. When it comes to the output layer, the activation function choice depends upon the type of machine learning problem. For binary classification, sigmoid activation works best for the output layer. For multi-class classification, softmax is the ideal choice as it provides probabilities for each class. For regression problems, the linear activation function is sufficient. Let's not run an experiment for activation functions for the hidden layer. Code for this experiment is available in section 2.5. We will experiment with three activation functions, namely a ReLU, sigmoid, and tanh. We keep all other hyper-parameters as default.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/choosing-activation-functions?u=76281980&t=94)** On reviewing the model summary, we notice that changing activation functions do not change the number of parameters. It actually impacts the values that are created inside them. On plotting the results, we see that ReLU and tanh activations seem to provide similar results in accuracy, while sigmoid activation lacks behind for this specific use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1)
> **Versions:** 2.5 (1)
> **Speakers:** - [instructor] (1)

#### [Initializing weights](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=0)** - [Instructor] While building a model, the weights and biases of all the nodes need to be initialized to some value, and then gradient descent will update them to get closer to better accuracy. The initial values of the weights play a huge role in the speed of learning and the final accuracy achieved. Multiple initialization techniques exist. In random normal initialization, random values are drawn from a standard normal distribution and used to initialize the weights. Zeros will initialize all the parameters to zeros, and ones will initialize them to the same value of one. Random uniform will draw values from a random uniform distribution. The difference between a normal and a uniform distribution is that in the case of normal, more values will be closer to the mean, while in uniform distribution, they are evenly spread out. Overall, random normal works best for most use cases, and is almost never changed unless a special need arises. More advanced and custom initialization functions are also possible. Let's jump to the weights initialization experiment now. We use the initializer list to have the list of all four techniques. Keeping the base model settings, we only change the initialization technique and compare the results. On running the code, we can plot the graph and compare. Random normal and random uniform techniques do very well, while the ones and zeros have pretty bad results.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/initializing-weights?u=76281980&t=93)** This is expected since ones and zeros will take a much longer time to get closer to ideal values than starting off with random values.

> [!info]- Semantic Content
>
> **Prerequisites:** initialization (5)
> **Speakers:** - [instructor] (1)


### 3. Tuning Back Propagation

[↑ Back to Table of Contents](#table-of-contents)

#### [Vanishing and exploding gradients](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=0)** - Building a stable and accurate [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) model is reliant upon making steady progress during the backpropagation process, to achieve accurate results. In this chapter, we will explore various options to manage backpropagation. What problems are occurring backpropagation? Let's explore in this video. Let's review the gradient descent process to begin with. After forward propagation, we compute the error in prediction, between the estimated and actual target values. Then based on that error, we compute a Delta value and update the output layer. We then derive under the Delta value from this layer and update the previous layer. And this goes on until the first hidden layer. The values of the Delta's computed, should help adjust the weights and biases in such a way, so that additional iterations through the model will progressively reduce the error. There should allow for stable progression in gradient descent. If the values are too small, then there won't be any significant change in the rates, so subsequent forward propagation will end up with the same error and smaller Delta values. This causes decay and the gradient descent will stall. This is called vanishing gradients. On the other hand if the deltas are too big, it will cause significant change in the weights. This leads to a choppy gradient descent, and the added value will fluctuate, but will never converge. This is called exploding gradients. This graph illustrates the differences. The light green line is the target line.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/vanishing-and-exploding-gradients?u=76281980&t=95)** The blue line is a good gradient descent, which progressively gets closer to the target line. The yellow line decays, and does not get closer to the target at all. This is vanishing gradient. The dark green line shows exploding gradients, but it oscillates around the targets, but never gets closer to it. Vanishing and exploding gradients is an important problem to watch for and address during the deep learning process. The right weight initialization technique needs to be used for the problem, so the weight start with optimal values. Activation functions can impact gradient descent, so the right activation function needs to be chosen after experimentation. Finally, there is a technique of batch normalization that can be applied. We will discuss batch normalization in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (2)
> **Definitions:** is called (2), is a  (2), is an  (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - building (1)

#### [Batch normalization](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=0)** - [Instructor] Batch Normalization is an important technique to manage vanishing and exploiting gradients during gradient descent. In Batch Normalization, we normalize the inputs sent to each hidden layer. When we see normalize, we actually use the StandardScaler model to center and scale the weights and biases. For normalization, the values of the outputs of the hidden layer are considered for computing the mean and standard deviation. Even if the delta updates and activation function scale down or scale up the values, this step will normalize the inputs to be of the same scale. Batch Normalizations help achieve higher accuracies with lower epochs, hence is also an optimization technique. On the other hand, it can result in additional computations during training and inference and may increase resource utilization and execution times. The experiments for this chapter, are available in the notebook, 03_XX Tuning Back Propagation. Let's explore the Batch Normalization technique in section 3.2. Here, we use two Batch Normalization options, none and batch, and use that to run our experiments. Switching to the common experiments function notebook, we see that we add Batch Normalization as a layer between the hidden layers. Switching back, we build and run the model. If you look at the model summaries, we see that for the model with batch, an additional layer has been added for Batch Normalization. We then proceed to plot and examine the results.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/batch-normalization?u=76281980&t=95)** We see that for the model with Batch Normalization, higher accuracy levels are achieved with smaller epochs. This is because Batch Normalization controls the gradient descent and makes it move closer to the center.

> [!info]- Semantic Content
>
> **Versions:** 3.2 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Optimizers](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizers?u=76281980&t=0)** - [Instructor] Optimizers are key tools, that help gradient descent, achieve faster results. The regular gradient descent process, is painfully slow and takes a lot of time to achieve the desired results. Consider a situation, where the training dataset has hundreds of thousands of samples, and the model has multiple layers. Training would take hours to run and consume significant resources, especially ,if you are using GPUs in the cloud. Limited training data, will also impact the speed of descent. Optimizers are [Algorithms](../../Skills/Software%20Development/Algorithms.md), that help speed up the training process. Introduced during back propagation, they will adjust the delta values in each step, such that it prevents vanishing and exploding descent while inching the parameter adjustments, closer to the desired states. There are a number of optimizers available in the [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) world, and we can also write a custom optimizer. The most popular ones include SGD or stochastic gradient descent, RMSprop, Adam and Adagrad. We are not going to discuss the internals informally for each of these algorithms in this course, but it's recommended for additional reading. The deep learning libraries like Keras and [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md), support these popular ones after the box. So, we simply need to provide the option during the training process. In the next video, we will run an experiment for optimizers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (2), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (2), [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md) (1)
> **Env Vars:** sgd (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Optimizer experiment](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/optimizer-experiment?u=76281980&t=0)** - [Instructor] Having learnt about optimizers in the previous video, let's run an experiment to compare the performance of various optimizers for the iris example. Here in the optimizer list, we have chosen 'agd', 'rmsprop', 'adam' and 'adagrad'. We build and run the model for each of these optimizer functions. Switching to the common experiment function notebook, there is a get_optimizer function that sets up the optimizer based on the option provider. A parameter called 'learning_rate' is also passed, which we will explore in the next video. When we compile the model. We provide the optimizer options to be used for training. Switching back to the experiment, let's run the experiment and review the results. The model definitions themselves don't change for different optimizers, but they merely impact the values of the parameters adjusted. When we run the graph, we see that for this use case, all optimizers except adagrad, perform reasonably well and provide good accuracy at lower ebooks. Again, the recommendation is to experiment and choose the right optimizer for the problem.

> [!info]- Semantic Content
>
> **Code Identifiers:** get_optimizer (1), learning_rate (1)
> **Cross-References:** previous video (1), in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Learning rate](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate?u=76281980&t=0)** - [Instructor] Associated with the optimizers, is a hyper parameter called the learning rate. Learning rate is the rate at which the weights will change in response to the estimated error. It is the speed at which the model is expected to learn from the training data and adjust its weights. Learning rates work in conjunction with the optimizer. After computing the deltas, the optimizer will adjust the delta values based on the learning rates. Learning rates are numeric values in the sub decimal ranges. How do we select the right learning rate for the problem? If the learning rate value is large, it will adjust the values too fast. This means the model can learn faster with a few epochs. At the same time, there is the risk of exploding gradients, as big adjustments to the weights, will cause the gradient to be choppy. If the value is small, then the learning would be slower, but at a steady pace with minimal chopping. But if the value gets too small, it will result in vanishing gradients, as the deltas may not be big enough to reduce the error. Again, the value should be chosen based on experimentation for this specific use case.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Learning rate experiment](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/learning-rate-experiment?u=76281980&t=0)** - [Instructor] We will now explore the learning rate experiment in the section 3.6 of the notebook for Back Propagation. We are going to experiment with multiple values of learning rate, namely 0.001, 1.005, 0.01, 0.1 and 0.5. We will build the models for all these learning rates. Switching to the common experiment functions. The learning rate is passed as a parameter while initializing the optimizer for the model. Switching back let's build and run these models and plot the graphs to review the results for learning rates. For a low value of 0.001. We see that the model settles for a low accuracy value, increasing it to 0.005 and 0.01 results in better accuracies, and this may be the ideal values for the model. Moving to 0.1 while the model gets near the previous accuracies, it is also choppy as it oscillates a lot. The value of 0.5 also results in oscillations, while the average accuracy is lower. We need to choose a learning rate that achieves higher accuracies while also making steady progress in accuracy across eBooks.

> [!info]- Semantic Content
>
> **Versions:** 0.001 (2), 0.01 (2), 0.1 (2), 0.5 (2), 3.6 (1)
> **Code Identifiers:** ebooks (1)
> **Speakers:** - [instructor] (1)


### 4. Overfitting Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Overfitting in ANNs](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=0)** - [Instructor] Overfitting is one of the main problems in building optimize models in machine learning. In this chapter, we will explore various options in controlling overfitting while building [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) networks. What is overfitting? overfitting happens when a model adapts itself to suit this training data. It overfits the training data. When overfitting happens, a model will perform with very high accuracy when predicting against the training samples also known as in sample testing, but when predicting against independent data samples that are not in the training data, the accuracy levels would be low. [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) have a tendency to overfit when the models are too deep and have more than the required number of nodes. How do we take care of overfitting? A number of solutions are available. To begin with, we should focus on simpler models with smaller number of layers and nodes in a layer. It is highly recommended to start with small numbers and only increase them when accuracy against the best data is low. Also epochs and batch sizes should be controlled and the same recommendation of starting small and increasing as required holds good for them too. Another area to focus is on training data variety, the training data should have sufficient variety to cover a large number of real world occurrences. It should be sufficiently large for the model to learn. For a classification, there also needs to be a balance between various classes in the training data.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/overfitting-in-anns?u=76281980&t=93)** Each class should be represented sufficiently in the training data set. In addition, there are two other techniques available, namely regularization and dropouts. We will discuss these two techniques in detail in the following videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Definitions:** known as (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Regularization](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization?u=76281980&t=0)** - [Kumaran] Regularization is an important technique for managing overfitting in [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). Regularization controls overfitting during model training. How does it work? Regularization [Algorithms](../../Skills/Software%20Development/Algorithms.md) provide an adjustment to the model parameters after they are updated. The adjustment reduces the variance in the model by providing a penalty when overfitting increases. There are multiple algorithms available for regularization, the most popular being L1, L2, and L1 and L2 combined. We are not going to discuss these algorithms in detail, but I recommend it for additional reading. They are already implemented in popular machine learning libraries. We can specify a regularizer when creating a hidden layer in Keras. We will compare these options in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [kumaran] (1)

#### [Regularization experiment](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/regularization-experiment?u=76281980&t=0)** - [Instructor] The code for experiments in this chapter are available in the notebook, Code_04_XX Overfitting Management. The regularization experiment is in section 4.3. Here, we are going to compare three options, L1, L2, and L1_L2. We parse them as options when creating hidden layers in Keras. Note that we are comparing validation accuracy for overfitting experiments. Let's run the experiment and review the results. L2 seems to perform better than other [Algorithms](../../Skills/Software%20Development/Algorithms.md) for this use case. For the IDs dataset, the validation dataset is very small, so repeated runs may not have consistent results. In real world experiments, it is recommended to have a larger validation set to achieve consistent results across multiple runs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** l1_l2 (1)
> **Versions:** 4.3 (1)
> **Best Practices:** recommended (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Dropouts](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropouts?u=76281980&t=0)** - [Instructor] Another popular technique used to reduce over fitting is called dropouts. Dropout works during forward propagation. By default, during forward propagation, the output of each node in the layer is sent to every node in the next layer. When using dropout, the outputs of some of the nodes in the layer are dropped randomly. During training, we can provide a percentage value to control the number of nodes being dropped. Dropping nodes randomly tends to result in focusing on feature values that have a high influence on the outcomes. But dropouts can also negatively impact the model if they drop relevant nodes that model important features. Try dropouts if you see symptoms of over fitting and use a percentage that provides the similar accuracy for both training and test data. Sometimes having no dropouts may provide the best results too. In the next video, we will experiment with dropouts.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2)
> **Cross-References:** in the next (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Dropout experiment](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/dropout-experiment?u=76281980&t=0)** - [Instructor] We will now run the exercise for dropouts in section 4.5 of the notebook. Here, we choose multiple dropout values. 0%, 10%, 20%, and 50%. We then build and run the models for each of them. Switching to the Common_Experiments_Function notebook, we see that a dropout layer will be added between hidden layers if a percentage is set. Switching back, let's run the models and compare the validation accuracies. Let's also plot the graph and examine the results. To begin with, when a dropout is added, we see a dropout layer in the model summary. Looking at the graph, a dropout percentage of 10% seemed to provide the best results for this specific use case. As discussed in the previous video, dropouts can help or hurt a model. In this case, a dropout of 10% seems to be the right value.

> [!info]- Semantic Content
>
> **Versions:** 4.5 (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 5. Model Tuning Exercise

[↑ Back to Table of Contents](#table-of-contents)

#### [Tuning exercise: Problem statement](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=0)** - Having now discussed various tuning options available for [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) networks, let's put them into practice to tune a neural network. I would again like to caution that the results would vary based on the use case being executed, and consistency of results across multiple trends would be impacted by the amount of training data. In this course, we use smaller datasets for demonstration purposes. This is an exercise that the students are encouraged to attempt on their own, and then come back to the following videos to look at solutions. There are multiple ways to solve the problem, and what is presented here, is one such example. This is the same exercise that was provided in the deep planning getting started course, and we will continue to improve the basic model we built in that course. The use case to solve relates to root cause analysis of problems found in our data center. We have a data center that runs a number of software services. Service failures do happen from time to time, and the data center team needs to look to quickly troubleshoot and identify the root cause. The team wants to build a model that can predict root causes reported by customers based on telemetric, regenerated, and errors noticed. They already have a [System Monitoring](../../Skills/Software%20Development/System%20Monitoring.md) tool that tracks CPU, memory, and application latency characteristics of their servers. In addition, they also track errors reported by their applications. Can we use this information to predict root causes of these issues?
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=93)** This is the same problem we discussed in the Deep Learning, Getting Started Course. The problem statement is as follows, using data about CPU load, memory load, network delays, and four types of errors observed, build a deep learning model to predict the root cause of the error, then optimize the model performance using various techniques described in the course. A dataset is available that has one record for each of the incident, indicating if any of the load issues or errors were noticed when the problems happen. This is the CSV file with the data available, the file called root cause analysis.CSV available in the exercises folder. Each record in the file has a unique identifier called ID that represents the Incident. There are seven feature variables, namely, CPU load, memory load, delay, Error_1000, Error 1001, Error_1002 and Error_1003. Each of them is a bullion value of one or zero. The target variable is root cause. It has three possible values, memory leak, network delay, and database issue. We need to build a model to predict the root cause based on the other values provider. For the optimization, the following hyper-parameters need to be optimized. First, determine the ideal number of layers needed for the model, then determine the ideal number of nodes for each layer, using the number of layers determined before. Next, tune the backpropagation process. First select the best optimizer for the problem,
>
> **[3:09](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-exercise-problem-statement?u=76281980&t=189)** then, using the optimizer selected, find the best learning rate for the problem. Please use batch normalization for this purpose, then reduce overfitting, by identifying the best regularization algorithm for the problem. Identify the best dropout rate while using the regularization that you have chosen. Finally assemble all the hyper-parameters selections based on the individual experiments, and create a consolidated model with all of them. Compare its performance against the default settings to see if overall improvement is obtained. While the exercise requires only a few experiments, feel free to experiment with more parameters, and combinations of them and see how the model performs. Best of luck for the exercise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (3), [System Monitoring](../../Skills/Software%20Development/System%20Monitoring.md) (1)
> **Env Vars:** cpu (3), csv (2)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** caution (1), troubleshoot (1)
> **Prerequisites:** getting started (2)
> **File Paths:** analysis.csv (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)

#### [Acquire and process data](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/acquire-and-process-data?u=76281980&t=0)** - [Instructor] The code for this exercise is available in the notebook code_05_XX Incident Root Cause Analysis. We will start with acquiring and processing the data for root cause analysis in section 5.2. For this purpose, we have created a method called get_rca_data. This will load up the root cause analysis CSV file. It will then use the label encoder to encode the target variable. We then convert the data set to a numpy array and separate the feature and target variables into separate arrays. The arrays are then returned to the main function. For building the model and plotting the graphs, we will continue to use the common experiment functions. So we will import this notebook at the beginning. For each of these experiments, we will follow the same template that we discussed earlier in the course.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1), earlier in (1)
> **Code Identifiers:** get_rca_data (1)
> **Env Vars:** csv (1)
> **Versions:** 5.2 (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Tuning the network](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-the-network?u=76281980&t=0)** - We begin our optimization exercise, by tuning the number of layers, in the network. This is available in section 5.3 of the notebook. We will start with 32 nodes in a given layer, which we will anyway tune later in this video. Then we build a model, with layer counts one to five. Then we plot the accuracy values and compare. Let's review the results from the results. From the result seen, two layers seem to provide the highest accuracy level, at lower HIPO counts, and we will choose that value for the model. Next, we move on to nodes in a layer. Here, we will try nodes counts from eight to 32, in increments of eight. We will use two hidden layers, which is the value we selected earlier. We'll then build the model, and compare its performance. A node count of 32, seems to achieve, higher levels of accuracy, earlier in the training process. So we will choose 32. We will go with a layer count of two, and 32 nodes in each layer.

> [!info]- Semantic Content
>
> **Cross-References:** later in (1), earlier in (1)
> **CLI Commands:** node (1)
> **Env Vars:** hipo (1)
> **Versions:** 5.3 (1)
> **Speakers:** - we (1)

#### [Tuning backpropagation](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/tuning-backpropagation?u=76281980&t=0)** - [Kumaran] We will tune the optimizers and learning rate for the root cause analysis model in this video. Let's start with optimizers. We will try with all the four popular optimizers, namely SGD, RMSprop, Adam, and AdaGrad. Let's run the experiment and review the results. Other than AdaGrad, all other optimizers seem to perform equally. We will go with RMSprop. It could have been any of the other two, too. Next, we go to learning rates. We will experiment with five values, as shown here. Let's run the experiment and compare the results. The smaller three values seem to provide equal and best results. So we will choose RMSprop for optimizer and 0.001 for learning rate for this exercise.

> [!info]- Semantic Content
>
> **Env Vars:** sgd (1)
> **Versions:** 0.001 (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [kumaran] (1)

#### [Avoiding overfitting](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/avoiding-overfitting?u=76281980&t=0)** - [Instructor] Let's jump to choosing regularizers and dropouts in this video. We will experiment with four values for the regularizer namely none, L1, L2 and L1 _ L2. Let's run the experiment and review the results. Both none and L2 seems to provide equivalent performance and if we run the experiment multiple times, we will see that they switch lead positions. We will go with L2 in this case. Next we move to dropouts. We will experiment with four values, namely 0%, 10%, 20% and 50%. Running these experiments, we see a dropout of 20% provide slightly better results. So we will choose L2 for regularization with a dropout rate of 0.2.

> [!info]- Semantic Content
>
> **Versions:** 0.2 (1)
> **Speakers:** - [instructor] (1)

#### [Building the final model](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/building-the-final-model?u=76281980&t=0)** - Now that we have experimented with individual hyperparameters and decided on suitable values for each of them, let's put them all together into a single model and compare. Here, we first create the base minimal model with all the default values. We create and run this model and measure its accuracy. Then, we create a model with all the optimizations we have done and then measure its accuracy too. We will compare them in a graph. Looking at the graph, we see that the optimized model performs better. It was able to achieve higher levels of accuracy earlier in the epoch iterations. One warning I want to provide here though, this is a grossly simplified example with a small amount of training data. Repeating the experiment may not provide the same results. Also, while a hyper parameter value may perform well in an isolated experiments, it may perform badly if combined with certain values of other hyperparameters. So, this is a trial and error process in the real world, and it may take days or even weeks to find the right combination of these parameters. The goal of this course is to discuss the levers, process and template for running such experiments that you can take and use in your use cases.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)
> **Exercise Files:** template (1)
> **Warnings:** warning (1)
> **Speakers:** - now (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your deep learning journey](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-model-optimization-and-tuning-2022/continuing-your-deep-learning-journey?u=76281980&t=0)** - [Kumaran] Now that you have learned about the concepts and processes for optimizing [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) models, you can take your learning even further. Explore additional topics in deep learning, including [convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) and recurrent [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md). Analyze a deep learning problem in your work area and build a deep learning model to solve it. Optimize the deep learning problem with learnings from this course. Learn about scaling and serving machine learning models in production. Data always intrigues me. I bet it intrigues you too, so let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (5), [Convolutional neural networks](../../Skills/Artificial%20Intelligence%20(AI)/Convolutional%20Neural%20Networks%20(CNN).md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **CLI Commands:** find (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [Kumaran Ponnambalam](../../Instructors/Artificial%20Intelligence%20(AI)/Kumaran%20Ponnambalam.md)

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Deep Learning

## Path Context

### In [Fundamentals to Become a Machine Learning Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Fundamentals%20to%20Become%20a%20Machine%20Learning%20Engineer.md)
← [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) | **5 of 7** | [Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md) →

### In [Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)
← [Applied Machine Learning Ensemble Learning](Applied%20Machine%20Learning%20Ensemble%20Learning.md) | **2 of 16** | [Reinforcement Learning Foundations](Reinforcement%20Learning%20Foundations.md) →

### In [Advance Your Skills as a Machine Learning Specialist](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20as%20a%20Machine%20Learning%20Specialist.md)
← [Machine Learning and AI Foundations- Prediction, Causation, and Statistical Inference](Machine%20Learning%20and%20AI%20Foundations-%20Prediction%2C%20Causation%2C%20and%20Statistical%20Inference.md) | **9 of 9**

## Appears In

- [Fundamentals to Become a Machine Learning Engineer](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Fundamentals%20to%20Become%20a%20Machine%20Learning%20Engineer.md)
- [Advance Your Skills in AI and Machine Learning](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20AI%20and%20Machine%20Learning.md)
- [Advance Your Skills as a Machine Learning Specialist](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20as%20a%20Machine%20Learning%20Specialist.md)

## Related Courses

_Courses sharing skills:_

- [Deep Learning Getting Started](Deep%20Learning%20Getting%20Started.md) — Artificial Intelligence (AI), Machine Learning, Deep Learning
- [Machine Learning and AI Foundations- Clustering and Association](Machine%20Learning%20and%20AI%20Foundations-%20Clustering%20and%20Association.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI- Advanced Decision Trees with SPSS](Machine%20Learning%20and%20AI-%20Advanced%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Decision Trees with SPSS](Machine%20Learning%20and%20AI%20Foundations-%20Decision%20Trees%20with%20SPSS.md) — Artificial Intelligence (AI), Machine Learning
- [Machine Learning and AI Foundations- Classification Modeling](../Data%20Science/Machine%20Learning%20and%20AI%20Foundations-%20Classification%20Modeling.md) — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)