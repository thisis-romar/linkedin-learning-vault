---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: hands-on-pytorch-machine-learning
url: "https://www.linkedin.com/learning/hands-on-pytorch-machine-learning"
duration_minutes: 56
duration: 56m
level: Intermediate
updated: 12/13/2022
learners: 35685
skills:
  - Machine Learning
  - PyTorch
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGM57qo8MaAsQ/learning-public-crop_675_1200/B4EZnE26nyJ0AY-/0/1759944354943?e=2147483647&amp;v=beta&amp;t=6Gon_PksM4AZpJXmCMprUC3cFMbFn47i6HwIOvmxVGQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Getting Started with AI and Machine Learning]]'
prev_courses:
  - '[[Reinforcement Learning Foundations]]'
next_courses:
  - '[[Artificial Intelligence Foundations- Neural Networks]]'
path_nav: '[{"path":"Getting Started with AI and Machine Learning","position":6,"total":7,"prev":"Reinforcement Learning Foundations","next":"Artificial Intelligence Foundations- Neural Networks"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/machine-learning
  - skill/pytorch
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Hands-On%20PyTorch%20Machine%20Learning.md)

![Hands-On PyTorch Machine Learning](https://media.licdn.com/dms/image/v2/D4E0DAQGM57qo8MaAsQ/learning-public-crop_675_1200/B4EZnE26nyJ0AY-/0/1759944354943?e=2147483647&amp;v=beta&amp;t=6Gon_PksM4AZpJXmCMprUC3cFMbFn47i6HwIOvmxVGQ)

# Hands-On PyTorch Machine Learning

> Many of the world’s most exciting and innovative new tech projects leverage the power of machine learning. But if you want to set yourself apart as a data scientist or machine learning engineer, you need to stay up to date with the current tools and best practices for creating effective, predictable models.In this course, instructor Helen Sun shows you how to get up and running with PyTorch, the o

> [LinkedIn Learning](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning) | 56m | Intermediate | 36K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Explore the capabilities of PyTorch](#explore-the-capabilities-of-pytorch)
- [**1. Preparation**](#1-preparation) (4 videos)
  - [PyTorch overview](#pytorch-overview)
  - [PyTorch environment setup](#pytorch-environment-setup)
  - [PyTorch use case description](#pytorch-use-case-description)
  - [PyTorch data exploration](#pytorch-data-exploration)
- [**2. PyTorch Basics**](#2-pytorch-basics) (5 videos)
  - [Understand PyTorch tensors](#understand-pytorch-tensors)
  - [Understand PyTorch basic operations](#understand-pytorch-basic-operations)
  - [Understand PyTorch NumPy Bridge](#understand-pytorch-numpy-bridge)
  - [Understand PyTorch autograd](#understand-pytorch-autograd)
  - [Advanced PyTorch autograd](#advanced-pytorch-autograd)
- [**3. Torchvision**](#3-torchvision) (2 videos)
  - [Torchvision introduction](#torchvision-introduction)
  - [Torchvision for video and image understanding](#torchvision-for-video-and-image-understanding)
- [**4. Torchaudio**](#4-torchaudio) (2 videos)
  - [Torchaudio introduction](#torchaudio-introduction)
  - [Torchaudio for audio understanding](#torchaudio-for-audio-understanding)
- [**5. Torchtext**](#5-torchtext) (2 videos)
  - [Torchtext introduction](#torchtext-introduction)
  - [Torchtext for translation](#torchtext-for-translation)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your PyTorch learning process](#continuing-your-pytorch-learning-process)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore the capabilities of PyTorch](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/explore-the-capabilities-of-pytorch?u=76281980&t=0)** - [Dr. Sun] [[PyTorch]] is one of the most widely adapted ML frameworks. If you know TansorFlow, learning PyTorch is essential to establish a foundation in AI and ML. And if you are just starting, PyTorch is an excellent place to start learning. Working the field of AI and ML, understanding the basics of PyTorch is imperative. In this course, I'll teach you the basics of [[Computer Vision]], [[Natural Language Processing (NLP)|natural language processing]], and audio processing through some hands-on experiences. Hello, I'm Dr. Helen Sun and I'm a senior engineering leader at Meta, working in the AI and ML space. Join me in this course to learn about the PyTorch platform that is used worldwide to support the work of AI research scientists and ML engineers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (5), [[Computer Vision]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [dr (1)


### 1. Preparation

[↑ Back to Table of Contents](#table-of-contents)

#### [PyTorch overview](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=0)** - [Instructor] [[PyTorch]] is one of the most popular [[Deep Learning]] frameworks, and it continues to gain adoption in both research communities and enterprises. It is an open source machine learning framework developed and maintained by Meta. The key benefits of PyTorch include quick iteration for research, seamless eager graph mode transition with TorchScript, and production ready with TorchServe. It has a backend called Torch.Distributed, which enables scalable distributed training and optimization. PyTorch also has a rich ecosystem of tools and libraries that extends development in [[Computer Vision]], [[Natural Language Processing (NLP)|natural language processing]], and more. Some featured projects in this ecosystem include Captum for model interpretability, geometric deep learning for irregular input data, such as graphs and Point Cloud, and Skorch that enables psychic learn compatibility. In this course, I'll be using PyTorch 1.10, and cover some of its top features, including tensors, autograd, APIs, and libraries. A PyTorch tensor is a multi-dimensional container of data. It is similar to a NumPy array. Torch defines 10 tensor types with CPU and GPU variants, including boolean, 8, 16, 32, 64 bit integer, 16, 32 and 64 bit floating point,
>
> **[1:40](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=100)** 32, 64, and 128 bit complex. There are many ways to create a tensor, such as with pre-existing data. There are also many tensor operations in PyTorch, but they can be grouped into two categories, including slice and math. Autograd is what earns PyTorch it's popularity for fast and flexible iteration. PyTorch traces the computation dynamically at runtime to get correct gradients to drive learning. The key for model training is to minimize the loss through adjusting the model's learning weights. The gradients over the learning weights tells us what direction to change each weight to reduce the loss function. With deep learning, the number of derivatives goes up exponentially. Autograd tracks the history of every computation, and as a result, greatly speeds the local derivative computation. The primary API to PyTorch is [[Python (Programming Language)|Python]]. These APIs allow you to interact with PyTorch through tensors, views, CUDA, autograd, quantization, and storage. PyTorch also provides you with a C++ interface with access to PyTorch functionalities, including tensor and autograd, serializing PyTorch models, and building C++ extensions through TorchScript. The C++ APIs can also be used
>
> **[3:15](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-overview?u=76281980&t=195)** to write compact, performance-sensitive code with deep learning capabilities to perform ML inference on mobile platforms. There are five main PyTorch libraries. The first is Torchaudio for audio signal processing. Next, we have Torchtext containing [[Data Processing]] utilities and data sets for natural language processing. The third library, Torchvision with computer vision data sets, model architecture and common image transformation. Fourth is Torchserve, a highly performant and flexible serving tool for PyTorch eager modes and models. And finally, Torch_xla that runs PyTorch on xla devices such as TPU. Now that you have a high level overview, let's dig deep into the top features of PyTorch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (17), [[Deep Learning]] (4), [[Computer Vision]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** cpu (1), gpu (1), api (1), cuda (1), tpu (1)
> **Analogies:** such as (3), similar to (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** python (1)
> **Versions:** 1.10 (1)
> **Speakers:** - [instructor] (1)

#### [PyTorch environment setup](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=0)** - [Instructor] To set up the [[PyTorch]] environment, we first download the PyTorch library from the PyTorch website. Click on the Install button here. And use the default tab here, Start Locally. Scroll down to go to the selection grid. You first select the build. You'll then choose the OS. The options are Mac, [[Windows]], and [[Linux]]. And we'll choose Mac. For the package manager, we'll choose Pip. You can also select Conda, LibTorch, or build it using the source code from [[GitHub]]. There are two language options, [[Python (Programming Language)|Python]] and C++/[[Java]]. We'll choose Python. The compute platform is default here because we're using the Mac OS. Once you make all of the selections, the site will give you a command to install PyTorch: pip3 install torch torchvision torchaudio. And you just run this command to install PyTorch if you prefer to use the most recent stable version. The previous versions of PyTorch are available here on this website. Just click on this Previous PyTorch Versions tab. I'll be using the 1.10.1 for this course.
>
> **[1:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=90)** And you copy and paste this command and run it in iTerm. So here is the command, I'll run it here, but I also added an optional parameter to suppress warnings here. So it says, "no warning script location." If you receive a message saying "Command Not Found," this is probably because you don't have Pip3 environment set up properly. You need to use a package manager on Mac OS called Homebrew to install Pip3. So here's the command. Now your first command to run PyTorch installation can be resumed right here. With this installation, it includes numpy, pillow, torch, torchaudio, torchvision, and typing-extensions. We'll use these packages in our later modules. Once you see your screen saying, "Successfully installed those packages" or "These requirements already satisfied," then you're ready to go. A few other module installations that are useful for this course include: Matplotlib and Jupyter Notebook. To install Matplotlib, I'll use the command pip3 install matplotlib. This command will install Matplotlib along with a number of packages, including: Pyparsing,
>
> **[3:03](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-environment-setup?u=76281980&t=183)** python-dateutil, Packaging, Kiwisolver, Fonttools, and cycler. Once it is all and completed, you'll receive the following message here. To install the Jupyter Notebook, you can either use Anaconda or Pip3. Similar to installing PyTorch, we'll use Pip3 as follows. To verify the installation, try the following command: python3 -m notebook. You should see the console launching the Notebook environment in the browser here. There will be additional environmental setup in later modules, but this concludes the general setup.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (9), [[Python (Programming Language)|Python]] (3), [[Windows]] (1), [[Linux]] (1), [[GitHub]] (1)
> **Prerequisites:** install (9), set up (2), setup (2)
> **CLI Commands:** pip3 (6), python (3), pip (1), make (1), python3 (1)
> **Tools:** jupyter (2), github (1), iterm (1), anaconda (1)
> **UI Navigation:** click on (2), scroll down (1), go to (1), select the (1)
> **Exercise Files:** download the (1), source code (1)
> **Code Identifiers:** iterm (1)
> **Versions:** 1.10.1 (1)

#### [PyTorch use case description](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=0)** - [Instructor] The use case I'll be using throughout this course is based on a project called Piraeus. The overall objective of Project Piraeus is to democratize knowledge. Piraeus is a portal that brings together learners and tutors in a digital portal. It then leverages machine learning and AI to find the best tutors for every learner and to help tutors and learners to devise a customized learning plan. Many students struggle in rigid linear learning systems. Education and learning is personal. Unfortunately, one-on-one learning, private tutoring, and custom-designed learning paths are just too expensive for many students and communities to access. AI may be able to help. [[Artificial Intelligence (AI)|Artificial intelligence]], AI, can play a key role to achieve this objective and vision. AI provides the capability to mimic human judgment. In this case, it'll mimic the judgment of a tutor or a teacher with dedicated attention to a student's unique learning needs. The focus of our use case is to develop AI models to better match tutors with learners based on learning, characteristics, and learning objectives. We look to generate a guided learning path, select learning material, weave in checkpoints and assessment through feedback along the way, and continue to refine and adapt the next set of milestones.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-use-case-description?u=76281980&t=95)** In this course, I'll demonstrate how to develop and train the machine-learning models, using as inputs the characteristics of the learners and tutors, the performance of the learner, along with the metrics associated with the tutoring sessions including number of sessions, duration of sessions, time between sessions. The inputs to the models and predictive methods must be consistently monitored to determine the most critical inputs that produce the best possible outcome for both learners and tutors. This type of rapid iteration of exploration, experimentation, and productization makes [[PyTorch]] the ideal choice for the AI and ML framework.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[PyTorch]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [PyTorch data exploration](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=0)** - [[PyTorch]] can be used to explore a dataset for model development. PyTorch provides two data primitives DataLoader and Dataset. The Dataset class stores the samples and the corresponding annotation labels. The DataLoader class wraps in iterable around the Dataset class to enable easy access to the samples. These two classes allow you to use preloaded data sets and upload your own data. PyTorch comes with a set of domain libraries that provide many preloaded data sets. They are subclasses of torch utils: data, dataset. These libraries and subclasses implement specific functions to the particular data. One great example is Fashion MNIST which we will explore later. These preloaded data sets and functions enable ML engineers to prototype and benchmark their models. You can find these data sets and functions on the PyTorch website with the links included in this slide. For example, for image dataset go to [pytorch.org/vision/stable/datasets.html](https://pytorch.org/vision/stable/datasets.html). For text datasets go to [pytorch.org/text/stable/datasets.html](https://pytorch.org/text/stable/datasets.html). And lastly, for audio data sets go to [pytorch.org/audio/stable/datasets.html](https://pytorch.org/audio/stable/datasets.html). Now let's take a look at the Fashion MNIST dataset. I'll first import the needed libraries here.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=97)** I'll then create two data sets one for training and one for testing. The only difference is to set the parameter of train to true for training data set and false for testing data set. Next, I'll create a validation sample from the training data set. Next, I'll create three DataLoaders one for training, one for validation, and one for testing. Next, I'll create a data iterator to populate the image and label tensors. Lastly, I'll use the mat plot lib to plot the data. Next, let's upload and look at our own dataset. We'll go through four steps to load our data set. Step one, import all necessary libraries for loading our data. We will be uploading a CSV file that contains tutor's data. For that, we need to import the following libraries. Step two, find the file path. For this exercise I'll just upload our CSV file from a local drive. And here is the file path, here in the documents folder. And we'll put this path into a variable called data path. Step three, loading the data. We'll load the data using the [[Pandas (Software)|pandas]] library
>
> **[3:12](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/pytorch-data-exploration?u=76281980&t=192)** we imported in step one. If you don't have pandas installed just run the following command: pip3 install pandas. Here we created a pandas dataframe called df to store the dataset. Now let's visualize the data using the pandas function display. And this is our dataset. Step four, convert a pandas dataframe into a PyTorch tensor. In order to use the data set and PyTorch for model training we'll need to convert it into a PyTorch tensor. Here's the code to do that. And we also printed out the tensor in this format. Now this wraps up our overview chapter. In the next chapters we'll dig into the details of the PyTorch libraries.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (11), [[Pandas (Software)|Pandas]] (6), [[HTML]] (3)
> **Env Vars:** mnist (2), csv (2)
> **File Paths:** pytorch.org/vision/stable/datasets.html (1), pytorch.org/text/stable/datasets.html (1), pytorch.org/audio/stable/datasets.html (1)
> **CLI Commands:** find (2), pip3 (1)
> **URLs:** [pytorch.org](https://pytorch.org) (3)
> **UI Navigation:** go to (3)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)


### 2. PyTorch Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand PyTorch tensors](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=0)** - [Instructor] Tensors are the building blocks of a neural network. A [[PyTorch]] tensor is the central data abstraction as a generalized form of arrays in n dimensions to run arbitrary computations. A tensor can be of any dimension. For example, zero dimensional tensors are a scale numbers like 0, 10, 100, et cetera. One dimensional tensors are array of numbers like an array of 9, 8, 7, or an array of 50, 30 10, et cetera. Tensors can also be two-dimensional. They are matrix of numbers like in 2x3 matrix with a two element array of an array. So for example, an array of 1, 2, 3 and a 7, 5, 3. So now let's create some tensors by importing torch and using the torch.Tensor methods. Here's our notebook, and here we are. We're creating some torch.Tensors, and here is the output of those tensors. The simplest way to set the underlying data type of a tensor is with an optional argument at creation time. Here is an example. We're setting the torch data type, the tensor data type, to be int16. There are 10 data types available. I have listed here boolean int8, uint8, int16, int32, int64, half, float, double, or bfloat.
>
> **[1:39](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=99)** While training the model, you'll deal with higher dimensions. The neural network only accepts the dimension which is defined at the input layer while architecting the model. The dimension basically tells whether the tensor is zero-dimension, or one-dimension, or two-dimension, or even higher than that. Dimension of the tensor is also called the rank of the tensor. To get the size, you can use tensor.size method, or tensor.shape property, and to get the dimension of the tensor, use tensor.ndimension method, or tensor.ndim property. Let's take a look. There you have it. These are the examples. Sometimes working with a neural network, you need to change the dimension of the tensor. This can be done by using the tensor.view nrows, ncols method of the tensor. PyTorch tensor also provides flexibilities, such as in-place alterations, tensor copying, and changing the shape of the tensor, such as altering the dimensions of the tensor. One of the major advantages of PyTorch is its robust acceleration on CUDA-compatible NIVIDIA GPUs. CUDA stands for compute-unified device architecture, which is NIVIDIA's platform for parallel computing. By default, new tensors are created on the CPU, so we have to specify when we want to create our tensor on the GPU with the optional device argument.
>
> **[3:16](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-tensors?u=76281980&t=196)** If you have an existing tensor living on one device, you can move it to another with a to method. It is important to know that, in order to do computation involving two or more tensors, all of the tensors must be on the same device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (3)
> **Env Vars:** cuda (2), nividia (2), cpu (1), gpu (1)
> **Analogies:** for example (2), such as (2)
> **Definitions:** is an  (1), stands for (1)
> **Speakers:** - [instructor] (1)

#### [Understand PyTorch basic operations](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=0)** - [Instructor] [[PyTorch]] Tensors allow you to apply arithmetics on your tensors. PyTorch Tensors have over 300 operations that can be performed on them. You can apply these operations on [[Scala]] and multiple dimensions of tensors. The very basic operations on tensors are additions, subtractions, multiplications, and divisions. Here's an example for addition and subtraction. So we have two tensors and we are performing some additions and subtractions here, and you'll get those output. The major categories of operations include common functions such as abs, ceil, floor, clamp, trigonometric functions and their inverses such as pi, sin, asin, bitwise operations, comparisons, reductions such as max, min, standard, prod, unique, vector/matrices, and [[Linear Algebra]] operations. Now let's go over some more examples. First, here are some common functions like abs, ceil, floor, and clamp, and these are the output. Next, let's try a reduction function using the mean operator, and there you have the output. Finding maximum or minimum values in the Tensor can also be done by using tensor.max and tensor.min respectively. The expected output is right there.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-basic-operations?u=76281980&t=95)** Now let's take a look at the trigonometric functions and their inverses. Supposed you have a tensor containing various values of pi and you want to apply the sine and cosine function on it. You can use the torch.sin tensor and torch.cos tensor as follows. And we import NumPy here as well. You can expect the output here. Sometimes you have to get an evenly spaced list of numbers between a range. You can use torch.linspace, start, end, and step to do that. Let's make it more interactive by plotting the sin minus pi to sin pi and cos minus pi to cos pi, making the dataset first here. Here we have the dataset. And last but not least, let's use Matplotlib to create the graph. Here you see the plotted output. The basic PyTorch operators offer a lot of functionalities and here is an example of that and hope you get the opportunity of exploring more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (3), [[Scala]] (1), [[Linear Algebra]] (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Understand PyTorch NumPy Bridge](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=0)** - [Instructor] Broadcasting is a way to perform an operation between tensors that have similarities in their shapes. This is an important operation in [[Deep Learning]]. The common example is multiplying a tensor of learning weights by a batch of input tensors, applying the operation to each instance in the batch separately and running a tester of identical shape. Here's an example with two by four multiplying one by four returns a tester of shape two, with dimension of one, with values of two and 16. If you're familiar with broadcasting semantics and NumPy ndarrays, you'll find the same rules apply with [[PyTorch]]. The exception to the same shape rule is tensor broadcasting. The rules for broadcastings are, one, each tensors must have at least one dimension, no empty tensors. Comparing the dimension sizes of two tensors, going from last to first, each dimension must be equal or one of the dimensions must be of size one or the dimension does not exist in one of the tensors. Tensors of identical shape, of course, are trivially broadcastable, as you saw earlier. Here are some examples of situations that honor the rules and allow broadcasting. We first have tensor A and tensor B, here, has the third and second dimensions
>
> **[1:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=97)** identical to tensor A, with dimension one absent. Tensor C has third dimension equals to one, second dimension identical to A and first dimension empty. Tensor D has third dimension identical to A, second dimension equals to one and first dimension empty, and it is broadcastable as well. PyTorch's broadcast semantics are compatible with NumPy's, but the connection between PyTorch and NumPy goes even deeper than that. If you have existing ML or scientific code with data stored in NumPy ndarrays, you may wish to express the same data as PyTorch tensors. Whether to take advantage of PyTorch's GPU acceleration or its efficient abstractions for building ML models. It's easy to switch between ndarrays and PyTorch tensors. Let's take a look at some examples. Here's a conversion and here is the expected output. PyTorch creates a tensor of the same shape and containing the same data as NumPy array, going as far as to keep NumPy's default 64 bit float data type. The conversion can just as easily go the other way, here, as the example of a version. And the expected outcomes are here.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-numpy-bridge?u=76281980&t=190)** It's also important to know that these converted objects are using the same underlying memory as their source objects, meaning that changes to one are reflected in the other. And here's an example, and the expected output is shown here. And this concludes the Intro to PyTorch NumPy Bridge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (8), [[Deep Learning]] (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** gpu (1)
> **Cross-References:** as you saw (1)
> **Speakers:** - [instructor] (1)

#### [Understand PyTorch autograd](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=0)** - [Narrator] Automatic differentiation is a building block of every [[Deep Learning]] library out there. [[PyTorch]]'s automatic differentiation engine called Autograd is a tool to understand how automatic differentiation works. Modern neural network architectures can have millions of learnable parameters. From a computational point of view, training a neural network consists of two phases. The forward pass computes the value of the loss function. In forward prop, the neural network makes its best guess about the correct output. It runs the input data through each of its functions to make this guess. The backward pass computes the gradients of the learnable parameters. In backdrop, the neural network adjusts its parameters proportionate to the error and its guesses. It does this through three steps. First, it traverses backwards from the output, then it collects the derivatives of the error with respect to the parameters of the functions, aka gradients. And lastly, it optimizes the parameters using gradient dissent. The forward pass is pretty straightforward. The output of one layer is the input to the next and so forth. Backward pass is a bit more complicated since it requires us to use the chain rule to compute the gradients of the weights to the loss function. It is impractical to calculate gradients
>
> **[1:34](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/understand-pytorch-autograd?u=76281980&t=94)** of such large composite functions by solving mathematical equations, especially because these curves exist in a large number of dimensions and are impossible to fathom. This is where PyTorch's Autograd comes in. It abstracts complicated mathematics and helps us magically calculate gradients of high-dimensional curves with only a few lines of code. Let's run through an example. First, we need to import the libraries using Torch and Torch Autograd. Next, we'll use the Autograd variable function to create a variable. Let's now perform an operation of the variable. Y was created as a result of an operation, so it has a grad function. Next, let's perform more operations on y. Time to calculate the gradients now. Let's back prop now using out.backward which is equivalent to doing the following. And once we print, you should have got a matrix of 4.5.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (2), [[Deep Learning]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Versions:** 4.5 (1)
> **Speakers:** - [narrator] (1)

#### [Advanced PyTorch autograd](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=0)** - [Instructor] There's a lot more to AutoGrad and [[PyTorch]]. Let's try something more complex. In this first example, we first generate three random numbers, assign them to a variable called X, and we require, in this case, gradients for X. We then provide some operations on X to generate a new variable called Y, which will have a gradient function attached to it. Now, let's print out the gradient for X. So in your Neural Network, parameters that don't compute gradients are usually called frozen parameters. It is useful to freeze part of your model if you know in advance that you won't need the gradients of those parameters. This offers some performance benefits by reducing AutoGrad computations. Let's walk through a small example to demonstrate this. We'll first import some libraries, including torchvision, in this case. We load a pre-trained resnet18 model, in this case, and then freeze all of the parameters.
>
> **[1:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/advanced-pytorch-autograd?u=76281980&t=70)** Assume we want to fine tune the model on a new dataset with 10 labels. In ResNet, the classifier is the last linear layer, model.fc. We can simply replace it with a new linear layer, unfrozen by default, that acts as our classifier. Now, all parameters in this model, except for the parameters of model.fc, are frozen. The only parameters that compute gradients are the weights and bias of model.fc. Notice that although we register all the parameters in the optimizer, the only parameters that are computing gradients and hence, updated in the gradient descent, are the weights and the bias of the classifier. The same exclusionary functionality is available as a context manager in torch.no_grad.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (1)
> **Code Identifiers:** no_grad (1)
> **Speakers:** - [instructor] (1)


### 3. Torchvision

[↑ Back to Table of Contents](#table-of-contents)

#### [Torchvision introduction](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=0)** - [Instructor] TorchVision is a library within [[PyTorch]] for image and video processing, it contains a number of important and useful data sets, model architecture, as well as models and transformation operations that are commonly used for [[Computer Vision]] projects. There are seven main packages for the TorchVision library: dataset, IO, models, feature extraction, ops, transforms, and utils. Let's look at each one of them. TorchVision dataset, this package, as the name suggests, contains some of the most popular computer vision data sets. All data sets are subset of torch.util.data.Dataset, they have getitem and lamp methods implemented, as a result, you can pass any of them to torch.utils.data.DataLoader, which can load multiple samples in parallel using multiple processing workers. We covered the PyTorch DataLoader in previous chapters. One thing to note is that all data sets have identical implementations and signatures. All of them have these two common arguments: transform, and target transform. The former will transform the input, and latter, to transform the target. Some of the most popular data sets are CalTech, which refers to the CalTech 101 project that contains pictures of objects belonging to 101 categories,
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=95)** each category has about 40 to 800 images. CIFAR. The CIFAR 10 and CIFAR 100 are labeled data sets of the 80 million TinyImage data set. Cityscapes. The Cityscapes data set focuses on semantic understanding of urban street scenes, with 50 cities across different seasons, with 5,000 images finely annotated, and 20,000 coarsely annotated. ImageNet contains 14,197,122 annotated images
>
> **[2:13](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=133)** according to the WordNet hierarchy. Since 2010, the dataset is used in the ImageNet Large Scale Visual Recognition Challenge, a benchmark in image classification and object detection. Many of you have heard the MNIST dataset, which was developed by none other, Yann LeCun, the chief scientist at Meta who was dubbed as one of the god fathers of [[Deep Learning]]. The MNIST dataset has become a standard benchmark for learning, classification, and computer vision systems. Torch Vision Dataset also has a number of extended dataset from MNIST, including EMNIST, Extend MNIST that constitutes more challenging classification tasks involving letters and digits, and that shares the same image structure and parameters as the original MNIST tasks, allowing for direct compatibility with all existing classifiers and systems. Fashion-MNIST, consisting of a training set of 60,000 examples, and a test set of 10,000 examples. Each example is a 28 by 28 gray scale image associated with a label from 10 classes. KMNIST, it's a data set which is a replacement for the MNIST data set, 28 by 28 gray scale, with 70,000 images provided in the original MNIST format, as well as NumPy format.
>
> **[3:48](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=228)** [Torchvision.io](https://Torchvision.io), this package provides functions for performing IO operations, including reading and writing images and videos. Images, the Torch Vision IO read_image reads a JPEG or PNG image into a three-dimensional RGB tensor, optionally converts the image to the desired format. The values of the output tensor are unit 8, between 0 and 255. decode_image detects whether an image is a JPEG or PNG, and performs the appropriate operations to decode the image into a three-dimensional RGB tensor. encode_jpeg takes an input tensor and CHW layout, and returns a buffer with the content of its corresponding JPEG file. decode_jpeg decodes a JPEG image into a three-dimensional RGB tensor, optionally converts the image to the desired format. The value of the output tensor are unit 8 between 0 and 255. write_jpeg takes an input tensor and CHW layout and saves it to a JPEG file. For each of the JPEG method above, there is an equivalent for PNG format. For videos, read_video reads a video from a file, returning both the video frames as well as the audio frames.
>
> **[5:24](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=324)** read_video_timestamps list the video frames' timestamps. write_video writes a 4D tensor in THWC format, and a video file. VideoReader is a high performance, low-level API for more fine grain control video reading API, it supports frame by frame reading of various streams from a single video container. Models. The Models sub package contains definitions of models for addressing different tasks, including image classification, pixel-wise semantic segmentation, object detection, instant segmentation, person key point detection, and video classification. There are four model sub-packages, including Classification, Semantic segmentation, Object/keypoint detection, and Video classification. Operations. Feature extraction utilities enable ML engineers to access intermediate transformations of the model inputs. TorchVision provides great feature extractors for this purpose. The torch.fx.documentation provides a more general and detailed explanation of the above procedure and the inner workings of the symbolic tracing. TorchVision Ops, it implements operators that are specific for computer vision. Here are the key operators.
>
> **[6:57](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=417)** batched_nms, it performs non-maximum suppression in a batched fashion. box_area, it computes the area of a set of bounding boxes. clip_boxes_to_image, clip boxes so that they lie inside an image of a size. mask_to_boxes, it computes the bounding boxes around the provided masks. remove_small_boxes, remove boxes which contain at least one size smaller than min size. sigmoid_focal_loss, loss used in retina net for dense detection. stochastic_depth implements the stochastic depth from deep networks with stochastic depth used for randomly dropping residual branches of residual architecture. Transforms, this library allows ML engineers to perform various transformation steps on images, including rotation, cropping, composing, adjusting color jitter, converting to gray scale, adjusting padding, resize, amongst many others. For details, check out the documentation in the link below. utils, this library provides a number of processing utilities for computer vision tasks, including making a grid of images, saving a tensor into an image file,
>
> **[8:30](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-introduction?u=76281980&t=510)** and drawing segmentation masks on object detection. And the details and examples can be found at the PyTorch documentation site as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (5), [[PyTorch]] (3), [[Deep Learning]] (1)
> **Env Vars:** mnist (8), jpeg (6), cifar (3), png (3), rgb (3)
> **Code Identifiers:** read_image (1), decode_image (1), encode_jpeg (1), decode_jpeg (1), write_jpeg (1)
> **Definitions:** is a  (5), refers to (1), is an  (1)
> **URLs:** [torchvision.io](https://torchvision.io) (1)
> **Cross-References:** we covered (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Torchvision for video and image understanding](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchvision-for-video-and-image-understanding?u=76281980&t=0)** - [Instructor] Now that you have a good understanding of the TorchVision library, let's walk through a lab, continuing with the use case of Piraeus. When presenting a set of tutors to a student for selection, it'll be helpful to include some photos of the instructions in the lectures. We'll use the TorchVision image library and try a few transformation actions. First, we have to import some libraries. We then define a function to display images, here, called show. Say this is a Padre class. We'll load the images and show them here. Now, we define a function to plot various images through transformation, and the function is called plot, right here. Most transforms natively support tensors on top of the PIL images. Let's add some paddings to the image. We then try a few image transformations such as random crop, color jitter, random perspectives. And finally, let's crop to the center and find the best centered image.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** find (1)
> **Env Vars:** pil (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Torchaudio

[↑ Back to Table of Contents](#table-of-contents)

#### [Torchaudio introduction](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=0)** - [Instructor] TorchAudio is a library for audio and signal processing with [[PyTorch]]. It provides IO, signal, and [[Data Processing]] functions, datasets, model implementations, and application components. TorchAudio offers a set of APIs, including backend, functional, transforms, datasets, models, pipelines, sox_effects, compliance.kaldi, kaldi_io, and utils. Similar to TorchVision, TorchAudio also provides a number of popular datasets out of the box. Examples include CMUDict, CMU pronouncing dictionary, Common Voice, GTZAN, which is music genre classification of audio signals, speech commands, and VCTK, which is speech data uttered by 110 English speakers with various accents. Details of these datasets can be found at PyTorch dataset documentation. Audio I/O package allow you to query audio file [[Metadata]], loading audio data into a tensor, and saving audio to files. Audio resampling. To resample an audio wave form from one frequency to another, you can use transforms.Resample or functional.resample. transforms.Resample pre-computes and caches the kernel used for resampling, while functional.resample computes it on the fly.
>
> **[1:36](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=96)** TorchAudio's resample function can be used to produce results similar to that of Librosa, which is resampy's kaiser window resampling, with some noise. TorchAudio provides a variety of ways to augment audio data. TorchAudio SoX effects allows for directly applying filters, similar to those variables in SoX to tensor objects, and file object audio sources. Convolution reverb is a technique that's used to make clean audio sound as though it has been produced in a different environment. Using room impulse response, RIR, for instance, we can make a clean speech sound as though it has been uttered in a conference room. To add background noise to audio data, you can simply add a noise tensor to the tensor representing the audio data. A common method to adjust the intensity of noise is changing the signal-to-noise ratio. torchaudio.functional.apply_codec can apply codecs to a tensor object. Combining all of the above techniques, TorchAudio can simulate audio. that sounds like a person talking over a phone in an echoey room with people talking in the background. Similar to TorchVision, TorchAudio implements feature extractions commonly used in the audio domain. They are available in torchaudio.functional
>
> **[3:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-introduction?u=76281980&t=191)** and torchaudio.transforms. There are also augmentation techniques available in TorchAudio, including TimeStretch, TimeMasking, and FrequencyMasking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (2), [[Data Processing]] (1), [[Metadata]] (1)
> **Analogies:** similar to (4), for instance (1)
> **Env Vars:** cmu (1), gtzan (1), vctk (1), rir (1)
> **Code Identifiers:** sox_effects (1), kaldi_io (1), apply_codec (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Torchaudio for audio understanding](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=0)** - Now let's continue with a pyrees use case. We would like to transcribe the audio and video lectures into scripts. We'll go through an example using Pie Torch's Torch Audio Library to transcribe some audio speech. This example is provided by Hiro Moto and can be found at the Pie Torch website will be using pre-trained models from web to back 2.0 through Torch Audio. The high level steps of this pipeline includes extract the acoustic features from audio waveform and then estimate the class of the acoustic features framed by frame and then generate hypothesis from the sequence of the class probabilities. Torch audio provides an easy access to the pre-trained weights and associated information such as the expected sample rate and class labels. They're bundled together and available under the Torch Audio dot pipelines module. First, we import map plot lib. Next, we'll create a Wave two VAC two model that performs the feature extraction and the classification. We will use the torch audio dot pipelines dot wave two VAC two, ASR Base nine 60 H here. The bundle object provides the interface to instantiate model and other information. Sampling rate and the class labels are also found as follows.
>
> **[1:35](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=95)** We'll create a model through automatically fetching the pre-trained weights and loaded into the Model. Importing S S L module is important to set the context so that the model can be downloaded through HTTPS via the secure sake layer. Next, we load data. We use the speech data from Voices dataset which is licensed under Creative Commons by 4.0.
>
> **[2:08](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=128)** Let's listen to the output here.
>
> **[2:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=130)** - [Male Computer Voice] I had that curiosity beside me at this moment.
>
> **[2:14](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=134)** - Next, let's load the data into the model and run the resample if necessary for efficiency and performance. Next, we extract acoustic features frame by frame. The returned features is a set of tensors. Each tensor is the output of a transformer layer. Now let's visualize these features. All right. The result is back. As you can see, there are a total of 12 layers. Next, we'll classify these features into categories. Wave two, VAC two model provides method to perform the feature extraction and classification in one step. Let's visualize the classification. It's in the form of logics instead of probabilities. Next, we'll generate the transcript using a greedy decoding algorithm, meaning we'll simply pick up the best hypothesis at each timestamp and do not require external resources such as a dictionary. Now we will create the decoder object and decode the transcript. Lastly, let's check the result, and this is the output. I had that curiosity beside me at this moment.
>
> **[3:50](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=230)** Let's listen to the audio and see if the transcription is correct.
>
> **[3:55](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=235)** - [Male Computer Voice] I had that curiosity beside me at this moment.
>
> **[3:58](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchaudio-for-audio-understanding?u=76281980&t=238)** - Yes, it is correct. That wraps up the Torch Audio Lab.

> [!info]- Semantic Content
>
> **Env Vars:** vac (3), asr (1), https (1)
> **Speakers:** - [male (2), - now (1), - next (1), - yes (1)
> **Versions:** 2.0 (1), 4.0 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### 5. Torchtext

[↑ Back to Table of Contents](#table-of-contents)

#### [Torchtext introduction](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=0)** - TorchText is [[PyTorch]]'s Library for [[Natural Language Processing (NLP)|Natural Language Processing]]. It consists of [[Data Processing]], utilities, and useful data sets for natural language processing. It also comes with pre-trained [[Microsoft Word|word]] embedding, dataset API. Iterator API ought to be used for training models with PyTorch. TorchText comes equipped with some popular data sets for text classification, language modeling, machine translation, sequence tagging, question and answers, and also unsupervised learning. Please note that these are actually data pipes from the Torch Data Project, which is still in beta status. So, be aware that APIs might change. Couple of recommendations while using these data sets. Use data loader for shuffling the data pipe. Use the built-in worker n-net function for multi-processing. And use drop last equals to true, to ensure that all batch sizes are equal. In addition to popular data sets, TorchText package also provides utilities for text data processing for training. Functional. The TorchText data functional module contains the following set of utilities. Generate SP model for training a sentence piece tokenizer. Load SP model for loading a sentence piece model for file. Sentence piece numericalizer is a sentence piece model that numericalizes a text sentence into a generator
>
> **[1:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=97)** over the IDs. Sentence piece tokenizer is a sentence piece model to tokenize a text sentence into a generator over the [[Tokens]]. Custom replace converts text strings. Simple space split splits text strings by spaces. Mericalize tokens from literator yields a list of IDs from a token iterator with a vocab. Filter Wikipedia XML filters Wikipedia XML lines. To map style dataset converts iterable style dataset to map style dataset. The metrics modules with blue score computes the blue score between a candidate translation corpus and a reference translation corpus. The data utils module contains get tokenizer function that generates tokenizer function for a string sentence. TorchText offers some common text transforms, including a few tokenizers, such as a sentence piece tokenizer, clip tokenizer, bert tokenizer, vocab transform, ToTnesor, label index, truncate, add token, sequential, pad transform, and string to int transform. They can also be trained together using torch.nn, sequential, or using TorchText, transforms, sequential to support torch's credibility.
>
> **[3:11](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-introduction?u=76281980&t=191)** TorchText also contains a number of pre-trained models, including Roberta, that iterates on bert's pre-training procedure, including training the model longer with bigger batches over more data, removing the next sentence, prediction objective, training on longer sequences, and dynamically changing the masking pattern applied to the training data. We'll go through an example next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Data Processing]] (2), [[Tokens]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** api (2), xml (2)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), be aware (1)
> **Analogies:** such as (1)
> **Speakers:** - torchtext (1)

#### [Torchtext for translation](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=0)** - [Instructor] In this lab, we continue with the Piraeus use case. I'll walk you through the tutorial called "Classifying Names with a Character-Level RNN" by Sean Robertson. We will be building a text classifier to identify the language used in the course by the tutor. The character-level RNN reads words as a series of characters, outputting a prediction and hidden state at each step, feeding its previous hidden state into each next step. We take the final prediction to be the output, which class the [[Microsoft Word|word]] belongs to. Specifically, we'll train on a few thousand surnames from 18 languages of origin and predict which language a name is from, based on the spelling. First, we import the matplotlib. We then load the data files from the directory and build our category lines. Now we have category lines, a dictionary mapping each category, which is the language, to a list of lines, which are names. We also kept track of all categories, just a list of languages, and categories for later references. Let's print the first five lines of the Italian category. Now we have all the names organized. We need to turn them into tensors to make any use of them in our model. Next, let's create the network.
>
> **[1:37](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=97)** To run a step of this network, we need to pass an input, in our case, the tensor for the current letter, and a previous hidden state, which we initialize as zeros at first. We'll get back the output [[Probability]] of each language and a next hidden state, which we keep for the next step. We will use the lineToTensor to avoid creating a new tensor every step. This is more efficient. Before doing our training, let's create a few helper functions. First one is to get category from output. The second helper function is to quickly get training example. We will train the network using NLLLoss function. We set the learning rate accordingly, and define a function, train the model. Now we'll run the train function that we defined in the previous step with some examples. This will take a while. So after the training is done, we will plot the learning results. We are almost halfway through. Okay, now let's plot the learning results. Here we go.
>
> **[3:10](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/torchtext-for-translation?u=76281980&t=190)** Next step, we will evaluate the results. We create a confusion matrix in order to do that, which indicate for every actual language, which are rows, which language the network guesses and predicts, which are the columns. To calculate the confusion matrix, a bunch of samples are run through the network with the evaluate function, which is the same as the train function is set for minusing the backprop. This is the evaluate function. As you can see, the rows are the actual language and the columns are what the model predicts. Lastly, let's see how the model work by giving it some examples through a predict function. We're giving it four examples towards the end, and this is the prediction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Probability]] (1)
> **Env Vars:** rnn (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** linetotensor (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your PyTorch learning process](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/hands-on-pytorch-machine-learning/continuing-your-pytorch-learning-process?u=76281980&t=0)** - [Instructor] Thanks for watching. Understanding the basics of [[Computer Vision]], [[Natural Language Processing (NLP)|natural language processing]], and audio processing through [[PyTorch]] can be a lot to get your head around. So if you need to go back and rewatch videos until you get it. It's very common for new learners to take a couple of passes through this material before it really sinks in. If you want to keep learning about PyTorch or Machine Learning, the next step is to dive into the documentation and build something, create an implementation for an idea you have. And if you want to learn more about AI, there is a 10 course learning series on [[LinkedIn]] called Master The Fundamentals of AI and Machine Learning. Courses such as [[Artificial Intelligence Foundations]] [[Neural Networks]] with Doug Rose, or AI [[Algorithms]] for Gaming with Eduardo Corpeno will both be super informative and fun. If you want to keep in touch with me, please follow me on Twitter or LinkedIn or look me up on [[Facebook]] and [[Instagram]]. Thank you and bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PyTorch]] (2), [[LinkedIn]] (2), [[Computer Vision]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Artificial Intelligence Foundations]] (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Helen Sun]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- PyTorch
- Artificial Intelligence (AI)

## Path Context

### In [[Getting Started with AI and Machine Learning]]
← [[Reinforcement Learning Foundations]] | **6 of 7** | [[Artificial Intelligence Foundations- Neural Networks]] →

## Appears In

- [[Getting Started with AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)