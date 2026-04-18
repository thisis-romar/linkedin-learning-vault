---
type: course
slug: ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172
url: "https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172"
duration_minutes: 96
duration: 1h 36m
level: Intermediate
updated: 9/4/2025
learners: 36199
skills:
  - PyTorch
  - Artificial Intelligence (AI)
  - Artificial Neural Networks
exercise_files: true
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/pytorch
  - skill/artificial-intelligence-ai
  - skill/artificial-neural-networks
status: not-started
created: 2026-04-17
---

# AI Workshop: Build a Neural Network with PyTorch Lightning

> In this interactive workshop, Janani Ravi—a certified Google cloud architect and data engineer—explores the fundamentals of building neural networks using PyTorch and PyTorch Lightning. Learn the basics of neural networks and setting up your virtual environment. Find out how to load and preprocess data, creating simple yet powerful neural networks to tackle regression tasks. Step through the conve

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172) | 1h 36m | Intermediate | 36K learners

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- PyTorch
- Artificial Intelligence (AI)
- Artificial Neural Networks

## Table of Contents

### Introduction

#### AI workshop build a neural network with PyTorch Lightning
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=1)** - [Presenter] Hi, and welcome to this course AI Workshop: Build a Neural Network with PyTorch Lightning.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=6)** Since this course is an AI workshop, for most of this course, we'll be performing hands-on coding.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=12)** We'll build a neural network with PyTorch, and we'll see how we can write cleaner, more modular reusable code with PyTorch Lightning.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=20)** Now, before we get to the demos, just a little bit of an overview of PyTorch and PyTorch Lightning.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=26)** First, what exactly is PyTorch?
>
> **[0:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=28)** Here is a definition from the PyTorch documentation.
>
> **[0:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=31)** It's an optimized tensor library for deep learning using GPUs and CPUs.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=37)** The tensors here refer to multidimensional arrays that can be trained in a distributed manner.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=44)** Another way to look at PyTorch also from the documentation, it's an open-source machine learning framework based on the Python programming language.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=53)** It has simple and intuitive APIs, which accelerate the path from research prototyping to production deployment.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=60)** The PyTorch framework is primarily used to build deep learning neural network models, and its APIs are so simple that with just basic knowledge of Python, you should be able to work in PyTorch right away.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=73)** Now, hopefully you've worked with neural networks before, and this is not your first neural network course.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=78)** Neural network models, you know, are just directed acyclic graphs.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=83)** PyTorch uses something known as dynamic computation graphs.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=87)** This means you can build the graph for the model and execute it right away.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=91)** This makes it easier and more flexible to build complex neural networks.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=96)** Now, PyTorch is deeply integrated with NumPy.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=100)** You can set up your data in the form of NumPy arrays and convert those to PyTorch tensors and vice versa very easily.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=107)** PyTorch has native support for training on GPUs.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=111)** You can have your model parameters and data all moved to the GPU available on the machine that you're running training, and the entire training process will run there.
>
> **[2:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=122)** PyTorch also uses a powerful library called Autograd for automatic differentiation.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=128)** Automatic differentiation is an important part of training a neural network model.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=133)** This involves computing partial derivatives of the loss function with respect to every model parameters, and then using that information to tweak model parameters to minimize the loss of a network.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=145)** The PyTorch library contains everything that you need to build neural networks.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=150)** You have classes for the layers of a neural network; different kinds of layers optimizers that you use to train neural networks; loss functions for different kinds of models; serializers to serialize the model autodisk.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=164)** The PyTorch framework is flexible and easy to use.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=168)** When you use PyTorch directly to build and train neural networks, you get access to a low-level API for model training.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=176)** And this is great when you really want to configure and customize your model and want very granular control over the training process.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=184)** But if you want to be abstracted away from the details of model training, using the PyTorch framework directly is not a great choice.
>
> **[3:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=193)** PyTorch has many repetitive tasks and a lot of boilerplate code.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=198)** So it's often very tedious to write code in PyTorch to train your model.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=202)** If you want to avoid working with all of these nitty gritty details and want your model code to be cleaner and more modular, well, you use PyTorch Lightning.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=212)** PyTorch Lightning is an open-source lightweight wrapper or framework built on top of PyTorch that simplifies the training and research process for deep learning models.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=221)** So this is something important.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=223)** PyTorch Lightning is just a wrapper, so you can't do anything in Lightning that you can't do with PyTorch.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=228)** The fact is it's just much easier to work with PyTorch Lightning.
>
> **[3:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=232)** PyTorch Lightning abstracts away all of the nitty gritty details and really reduces the boilerplate code that you have to write for training models.
>
> **[4:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=241)** Whatever you need to do to build and train neural networks, PyTorch Lightning will give you a high-level interface for this.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=247)** You can define datasets, define models, set up training loops, and log your experiments all using this high-level interface.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=258)** What are some of the advantages of using PyTorch Lightning?
>
> **[4:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=261)** Well, your code is much cleaner because most of the repetitive code and training loops that you have to use in PyTorch is abstracted away.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=270)** Your code is also more modular with Lightning.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=272)** It encourages a modular design by separating the different parts of the training process into well-defined components such as the model, data loaders, and training logic.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=283)** Cleaner modular code results in better reproducibility of your model and data.
>
> **[4:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=289)** Lightning provides built-in support for experiment logging and tracking as well.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=293)** Lightning support for distributed training is more straightforward because you do not need to move your model parameters and data to specific devices to actually train on that device.
>
> **[5:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=307)** Lightning offers a callback system, allowing you to add custom functionality at various points during the training process without modifying the core training loop.
>
> **[5:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=317)** Instead of writing complex four loops to train your model, the trainer class in Lightning abstracts away many training loop details.
>
> **[5:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=325)** If you feel that PyTorch Lightning does not offer you the flexibility that you need for model training, well, you can use Lightning along with the PyTorch API, so they're interoperable, giving you experiment flexibility.

> [!info]- Semantic Content
>
> **Definitions:** is an  (3), is a  (1), known as (1)
> **Code Keywords:** interface (2), function (1), this. (1)
> **Env Vars:** api (2), gpu (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** python (2)
> **Exercise Files:** boilerplate (2)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=1)** - [Instructor] Before you get hands-on, and that will be very soon, let's quickly look at some of the prereqs you need to have to make the most of your learning.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=8)** The first thing here is you need to have a basic understanding of machine learning.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=12)** This is not a beginner machine learning course.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=14)** Instead, it's an AI workshop, which means we'll get hands-on with demos right away.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=19)** A basic understanding of machine learning, regression, and classification models will really help you.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=25)** Also, you need to have a basic understanding of how neural networks work.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=30)** In the next movie, we'll quickly go through how neural networks function, but that's more of revision, rather than explaining all of the nitty gritty of neural network training.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=41)** So basic understanding of neural networks would really help.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prerequisites?u=76281980&t=44)** And finally, because we're going to be coding a lot using Python, you should be comfortable programming in Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** let (1), function (1), finally, (1)
> **Prerequisites:** you need to have (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Quick overview of neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=1)** - [Instructor] Let's do a quick revision of how neural networks work before we get down to the demos.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=6)** Remember, this is not a comprehensive overview or a look at neural network training, but a quick overview to give you the main points to remember as you dive into the code.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=16)** Neural network models are made up of layers and how these layers are arranged and connected make up the architecture of the model.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=25)** You can think of every layer in a neural network as being connected to other layers in the neural network.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=32)** The way neural networks function is that every layer in the neural network is responsible for extracting a different detail from the underlying data, and all of the layers put together make predictions.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=45)** Now, the first layer here in our neural network, that's the input layer.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=50)** This is where we feed in the input data, whether during the training process or for predictions.
>
> **[0:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=55)** The final predictions of the neural network are available from the last layer, that is the output layer.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=63)** Between the input and output layers, you have one or more hidden layers, and these hidden layers transform the data.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=71)** These transformations are applied as the data flows through the layers of the model.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=77)** The operation of each hidden layer is to extract a different bit of information from the data that passes through.
>
> **[1:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=85)** In a neural network, every layer is made up of active learning units called neurons.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=91)** They're called active learning units because it's these neurons that are identifying patterns and making generalizations from the data that passes through the network.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=101)** Neurons are fed inputs and they produce outputs, and these inputs and outputs are essentially interconnections in the model.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=110)** The output of every neuron may be connected to one or more neurons in the layer after it.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=116)** And how these connections are set up?
>
> **[1:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=118)** Well, that's a part of the neural network architecture.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=121)** Now, we've said that neurons are active learning units, but what exactly is a neuron?
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=126)** Each neuron is nothing but a mathematical function.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=130)** Each neuron applies this function that you see here at the bottom to its inputs.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=134)** It computes the weighted X values.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=138)** X values are the input, adds a bias, and applies an activation function on Wx + b to compute the final output Y.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=147)** The first of these mathematical functions that the neural network applies is responsible for learning linear relationships that exist in the data.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=156)** A neuron receives a vector of inputs.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=158)** You can think of these as X1 through Xn, and it basically applies a weight value to each element of the vector.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=167)** These weights are associated with the connections that flow into the neuron.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=171)** Wx + b is the first mathematical operation of the neuron, and this operation is responsible for learning linear relationships that exist in data.
>
> **[3:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=182)** The second mathematical function that a neuron applies to its inputs is the activation function.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=187)** The activation function is responsible for learning non-linear relationships that exist in data.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=194)** Popular activation functions include the rectified linear unit or ReLU.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=198)** There's the sigmoid activation function and many others.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=202)** The choice of activation function is a part of the neural network design.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=206)** The weights and biases of all of the neurons in your neural network make up the trainable parameters of the model.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=214)** These weights and biases are what are found during the training process.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=220)** You can think of the objective of the training process of a neural network is to find the weights and biases for all of the interconnections that minimizes the loss of the model.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=231)** The loss here is essentially a measure of how far the predictions of the model are from the actual values in the training data.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=240)** We know that model parameters are found during the training process of the neural network, but how does training work?
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=246)** Here is a very high level explanation.
>
> **[4:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=250)** During the training process, we feed training data in batches through the network and get predictions using the current parameters of the model.
>
> **[4:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=259)** These predictions, at least to start off with, will not be very good ones.
>
> **[4:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=263)** We'll measure how good the predictions of the model are by computing the loss.
>
> **[4:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=268)** The loss represents how far is the prediction of the model from the actual labels in the training data.
>
> **[4:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=276)** Once we have the loss function, we'll compute gradients.
>
> **[4:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=279)** The gradients are just the partial derivatives of the loss with respect to each parameter in model training.
>
> **[4:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=287)** These gradients give us a sense of how to tweak the model parameters to minimize the loss of the model.
>
> **[4:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=294)** We then make a backward pass through the model to update parameters to minimize the loss.
>
> **[5:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=300)** And this forward pass to get predictions and then backward pass to update the model parameters continues through the entire training process until the model parameters converge.
>
> **[5:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=312)** The entire objective of the training process is to minimize the loss of the network, and thus improve the predictions of the model.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/quick-overview-of-neural-networks?u=76281980&t=321)** This minimization of the loss of the network is done using an optimization algorithm called gradient descent.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), pass (3), let (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Building a Neural Network with PyTorch

#### Setting up the virtual environment
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=1)** - [Narrator] In this course, we'll first build a simple neural network model for regression using PyTorch, and you'll see that there are a lot of granular details that we need to know about model building in order to work with PyTorch directly.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=14)** There'll be a lot of boilerplate code.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=16)** Then we'll basically build the same neural network using PyTorch Lightning.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=21)** With PyTorch Lightning we'll eliminate a lot of the boilerplate code and create reusable components, you'll see how much cleaner the code is with PyTorch Lightning.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=30)** Before we do any of that, let's set up a virtual environment within which we'll install PyTorch and build and train our neural network models.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=39)** Now, for much of the code that we'll write in the course, we'll make use of some digital assistance.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=44)** ChatGPT, Google Gemini, and Claude.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=47)** Now I can't remember the exact set of instructions that I need to follow to set up a virtual environment in Python, so I'm going to ask ChatGPT and follow what ChatGPT has to say.
>
> **[0:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=58)** We use the VENV package to create our virtual environment, and then we activate our virtual environment.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=63)** Now, I'm working on a MacOS machine but if you're working on Windows, please use the highlighted command.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=69)** I'll now follow these instructions to set up a virtual environment.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=72)** Here I am on my local machine, and I have Python installed.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=76)** Make sure you have a recent version of Python.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=79)** You can see that I'm working with Python 3.10.9.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=83)** My working directory is going to be a projects folder that I've created earlier.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=87)** I'll just cd into that folder.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=89)** I'll now create a Python virtual environment.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=91)** A virtual environment is just an isolated environment for Python projects, ensuring that each project can have its own dependencies regardless of what dependencies other projects may have.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=102)** This command creates a virtual environment called pytorch_venv, using the VENV module.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=110)** When you create a virtual environment, this sets up a directory under your current working directory with the name of your virtual environment, you can see the PyTorch VENV directory here.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=121)** This is where all of the packages that we install in the virtual environment will be set up and stored.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=127)** Now, to activate the virtual environment you'll run the source command, pytorch_venv/bin/activate.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=133)** This will activate the virtual environment.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=135)** Notice that my prompt has changed.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=138)** If you're running on a Windows machine, the activation command is a little bit different and you can go back to the output of ChatGPT to see exactly what it is.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=146)** The name of the virtual environment is now part of the prompt.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=150)** The same version of Python that I had installed on my local machine should now be available here in my virtual environment.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=157)** It's possible to create virtual environments using different versions of Python, but I'm happy with the Python version that I have.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=163)** To ensure that I'm using the Python installed within my virtual environment, I'm going to run which Python, and you can see this is the Python that belongs to the pytorch_venv folder.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=174)** That is my virtual environment's folder.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=176)** In order to be able to work within this virtual environment on a Jupyter Notebook, let's install the IPykernel module in Python.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=184)** Use pip install to install the latest version of IPykernel.
>
> **[3:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=189)** This is the Python package that provides the kernel for Jupyter Notebook and Jupyter Lab.
>
> **[3:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=195)** The kernel is just the computational engine that executes the code on the notebook.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=200)** Now, once we have this installed, run Jupyter kernelspec list to see what Python kernels you have available.
>
> **[3:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=207)** You can see I have just the one, Python 3.
>
> **[3:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=211)** I now install the kernel associated with my virtual environment using this command here, python -m ipykernel install, the kernel with name pytorch_venv.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=222)** Remember, pytorch_venv is a folder in our current working directory, and it's that folder that will be used to set up the kernel.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=230)** Thus, we have a kernel with our virtual environment available when we use Jupyter Notebooks.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=235)** Run Jupyter kernelspec list once again, and you can see the pytorch_venv kernel.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=240)** That's the kernel that we use to run our code.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=244)** Within our virtual environment we've installed the pytorch_venv kernel, let's bring up the Jupyter Notebook server so that we can work within Jupyter Notebook to build and train models using PyTorch and PyTorch Lightning.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=257)** Here, let's open up a new notebook.
>
> **[4:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=260)** Click on new, and make sure that you choose pytorch_venv as the kernel that you want to run your code on.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=270)** If we choose this kernel, we'll be running within our virtual environment.
>
> **[4:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=274)** On the top right, notice the kernel, it's pytorch_venv.
>
> **[4:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=278)** If you happen to be in some other kernel and you need to switch, simply select the kernel dropdown menu here on this page, and there you'll find an option to switch your kernel.
>
> **[4:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=289)** Meanwhile, let's rename this notebook and give it a meaningful name.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-virtual-environment?u=76281980&t=293)** Let's call this TrainingRegressionModelUsingPytorch, because first we'll work with PyTorch, which is much more low level and involves much more boilerplate in order to understand the different components that you'll use to build a neural network model, and then we'll switch to PyTorch Lightning.

> [!info]- Semantic Content
>
> **CLI Commands:** python (17), make (3), cd (1), pip (1), find (1)
> **Prerequisites:** install (7), set up (5), make sure you have (1)
> **Code Keywords:** let (6), switch (3), module (2), new, (1)
> **Code Identifiers:** pytorch_venv (9)
> **Tools:** jupyter (8)
> **UI Navigation:** click on (1), select the (1), dropdown (1), switch to (1)
> **Env Vars:** venv (3)
> **Versions:** python 3 (2), 10.9 (1)

#### Loading and exploring regression data
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=1)** - [Instructor] We first going to train a regression model using raw PyTorch before we switch over to using PyTorch Lightning.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=6)** We'll be using the Scikit learn module in Python in order to pre-process our data.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=12)** So go ahead and pip install Scikit learn.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=15)** In addition, we need the standard Python packages to work with data, Pandas, Numpy, and Seaborn for visualization.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=21)** I'm just going to pip install all of these within my virtual environment.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=25)** Next, of course, we are going to be using PyTorch to train our model, so you'll need to pip install the PyTorch framework as well.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=34)** Another PyTorch-related module that you'll need is Torch Metrics.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=38)** This is the library that contains metrics to evaluate our models, mean squared error for regression, and accuracy, precision, and recall for classification.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=48)** So make sure you pip install and have this module ready within your virtual environment.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=53)** Now that we have the libraries that we need, let's confirm the PyTorch version that we are using.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=59)** I'm running PyTorch version 2.7.1, the latest version at the time of this recording, greater than or equal to two in order to be able to run these demos.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=70)** I'll now set up a bunch of input statements for all of the libraries and classes that we'll need for this demo.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=77)** I'll use Numpy, Panda, Seaborn, Matplotlib, Torch, Scikit learn.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=83)** We won't go through these import statements right now.
>
> **[1:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=85)** We'll discuss each class or a function as we use it.
>
> **[1:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=90)** The dataset that we'll be using to train our regression model is an insurance charges data set and it's present here within this datasets directory under my current working directory.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=101)** You can see this insurance.csv file.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=103)** This is the file that I'm going to read into my notebook using Pandas.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=108)** The dataset is fairly simple.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=110)** The records contain details of insurance customers, age, gender, BMI, number of children, whether they smoke or not, and the region in which they live.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=121)** These are all the features of the data.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=123)** We'll try to use this information to predict how much they've been charged for insurance.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=128)** The label column is charges.
>
> **[2:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=131)** Like I said, this is a fairly simple and small dataset, perfect for training a simple regression model using PyTorch.
>
> **[2:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=139)** The shape of the data shows us that there are a total of 1338 records.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=144)** Let's make sure every column in this data is of the right type.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=147)** For that, I run the info method on a Pandas data frame and you can see that the types are correct.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=154)** Each BMI number of children and charges are numeric columns.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=158)** The remaining are string columns or categorical columns.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=161)** Now, I'd like to do some exploratory data analysis before we turn to actually training our regression model using PyTorch.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=167)** Now, here are the columns in my data.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=170)** I'm going to make use of ChatGPT to get help with some Seaborn visualization.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=175)** You can see that I'm giving ChatGPT some context here.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=177)** I have a Pandas data frame insurance data with the following columns.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=181)** How do I use Seaborn to view a histogram of the charges field?
>
> **[3:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=186)** ChatGPT very helpfully gives me code and also explanation for that code.
>
> **[3:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=191)** Let's copy this code over, paste it to our notebook in order to visualize a histogram of charges.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=197)** I'm going to get rid of those two import statements because I already have the imports up top and we're left with simple code which calls sns.histplot to view a histogram of the charges information.
>
> **[3:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=210)** You can see that for a vast majority of customers, the insurance charges tend to be under $15,000.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=217)** You can see that on the x-axis.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=219)** However, there are a few customers for whom insurance charges tend to be very high in the order of 40 to $50,000.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=227)** In this dataset, all of the feature variables are relevant to predict the insurance charges for customers.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=235)** But one of the most significant features is this smoker feature.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=239)** Whether you are a smoker or not heavily influences your insurance charges.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=244)** You can see that for non-smokers, the insurance charges tend to be much lower than for smokers.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=249)** This box plot makes that very clear.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=253)** Also, how old the customer is influences insurance charges.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=257)** You can see a scatterplot of insurance charges versus age, and there is a linear relationship.
>
> **[4:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=264)** You can see that insurance charges tend to increase with age, but for each age, they seem to be different bands of charges.
>
> **[4:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=273)** I found that digital assistance like ChatGPT, Gemini, et cetera, are great at interpreting data.
>
> **[4:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=278)** I often use their help to verify whether my interpretations of data are correct.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=283)** I've taken a screenshot of this box plot and I'm going to drag this screenshot into ChatGPT and I'm going to ask it a question.
>
> **[4:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=291)** What can you interpret about insurance charges using this box plot?
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=295)** And here you can see ChatGPT very accurately tells me that smokers are charged significantly more.
>
> **[5:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=301)** Not only is the median insurance charge for smokers higher, but there's also greater spread of charges for smokers.
>
> **[5:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=309)** In this manner, you can use generative AI to validate the findings from your data.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=314)** Now that we've understood the data that we are working with, let's quickly split the data into training and test data using train test split.
>
> **[5:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=322)** x features include all columns except charges.
>
> **[5:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=326)** The y values that we are trying to predict are the insurance charges.
>
> **[5:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=330)** Train test split will spread the features and labels so that we have 80% of the data to train our neural network model and 20% of the data to validate the model.
>
> **[5:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-regression-data?u=76281980&t=341)** 1070 records for training and 268 records for validation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (3), switch (1), function (1), type. (1)
> **CLI Commands:** pip (4), make (3), python (2)
> **Prerequisites:** install (4), you'll need (2), set up (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** bmi (2)
> **Versions:** version 2 (1), 7.1 (1)
> **File Paths:** insurance.csv (1)
> **Speakers:** - [instructor] (1)

#### Preprocessing data for training
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=1)** - [Instructor] Now that we have training and validation data, the next step is to pre-process the data so that we can feed that into a machine learning model.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=10)** Now, neural network models and all machine learning models only understand numeric values.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=16)** You can't feed in strings to those models, which means you need to numerically encode all of your categorical variables, which may be represented as strings.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=26)** In addition, you need to scale your numeric features so that all of the features are represented using the same range.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=34)** And I'm going to take ChatGPT's help for this.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=36)** Now, I asked ChatGPT a very specific question.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=40)** "I have these categorical features for my data.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=42)** Can you set up a pre-processor in scikit-learn to encode this data?"
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=46)** Now, ChatGPT knows all of the columns in my data set.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=49)** It has the context from my previous question, so it goes above and beyond here.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=54)** In its response, not only does it give me code to encode the categorical features, but it also gives me code to scale the numeric features.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=64)** This has basically given me code for not just the current step, but also the next step of my processing.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=69)** If you see the categorical_transformer pipeline, you can see that it first imputes missing values in our data using the most frequent value in a category, and then it performs one-hot encoding of the categorical variables.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=84)** The numerical_transformer, again, performs imputation for the missing data by replacing missing values with the average values in the columns, the strategy is mean, and then it standard scales the data.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=96)** You can see on top, it has correctly identified the categorical and numerical features in our data.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=102)** And here at the bottom, it sets up a ColumnTransformer pre-processor, encoding the categorical columns and scaling the numeric columns.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=109)** Now this code is great, but I'd like to tweak it just a bit.
>
> **[1:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=113)** So I'm going to ask ChatGPT to fix the code.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=116)** I want to fix the one-hot encoding code so that we drop one of the categories to avoid the dummy variable trap.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=123)** You can see that the one-hot encoder has been instantiated with additional parameters: drop equal to first, and handle_unknown equal to ignore.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=133)** I'll explain these in more detail once we copy this code over to use in our notebook.
>
> **[2:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=137)** There are three categorical columns in our data, sex, smoker, and region.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=143)** All of these are nominal categorical values.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=147)** That means that there is no inherent ordering across categories for any of these columns.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=152)** And so one-hot encoding is perfect in such a situation.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=156)** We instantiate the one-hot encoder categorical transformer, handle_unknown is ignore, that is, if we encounter unknown values, this transformer will simply ignore them.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=168)** drop is equal to first specifies the methodology to use to drop one of the categories in the feature.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=176)** Let's say the smoker column can have two possible values, yes or no.
>
> **[3:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=182)** In the final output, you'll have just one column, either smoker yes or smoker no with zero one values indicating whether the customer is a smoker or not.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=192)** This avoids something known as the dummy variable trap, which occurs when one or more one-hot encoded variables are perfectly multicollinear with others, meaning one variable can be predicted exactly from others.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=204)** It's in order to avoid this that we specify drop equal to first to drop the column corresponding to one category value in each categorical variable.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=212)** The numerical features are age, bmi, and children, and you can see the numerical_transformer pipeline.
>
> **[3:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=218)** After imputation, it standardizes the data, that is, expresses the features in terms of number of standard deviations away from the mean.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=227)** When you feed in numeric values to neural networks, neural networks perform much better with smaller numeric values.
>
> **[3:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=236)** And also when the individual features do not have widely different ranges, and standard scaling is one way to preserve the information in individual features, but also have them all centered around zero and expressed using small numeric values.
>
> **[4:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=252)** The ColumnTransformer is our pre-processor that works on both the numeric data as well as the categorical data.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=258)** Once we've instantiated the transformer, let's pre-process our data.
>
> **[4:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=263)** I call preprocessor.fit_transform on the training data, and using the computer values on the training data, we simply call transform on the validation data.
>
> **[4:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=275)** This ensures that the properties computed on the training data are what we use to transform the validation data.
>
> **[4:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=282)** And we are left with eight features in our data after one-hot encoding.
>
> **[4:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=287)** Let's take a look at the training data, and you'll find that it's just a NumPy array.
>
> **[4:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=291)** We don't have the corresponding columns.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=293)** If you want to understand this data, let's convert it to a temporary data frame and see how the data has been transformed.
>
> **[5:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=301)** So we have one column for sex_male yes, no, one column for smoker yes, no, and then columns for northwest, southeast, and southwest.
>
> **[5:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=312)** The column corresponding to region Northeast has been dropped.
>
> **[5:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=316)** A value of all zeros for northwest, southeast, and southwest essentially indicates that the region is northeast.
>
> **[5:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=324)** The numeric columns, age, bmi, and children have been standard scaled.
>
> **[5:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=329)** We've divided every value in the column by the mean and then subtracted the standard deviation.
>
> **[5:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=335)** The y values are still in the data frame format.
>
> **[5:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=338)** Let's convert those to the NumPy format as well, and from NumPy arrays later on, we'll convert these to Torch Tensors.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=346)** Now, the y values that we need to train our model are currently in the form of a single dimensional array or a vector.
>
> **[5:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=354)** In order to feed them into a neural network, they need be in the form of a multidimensional array.
>
> **[6:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=360)** So instead of a vector of length size, we'll have a multidimensional array of dimensions, size, comma, one.
>
> **[6:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=367)** And that's what this reshape operation accomplishes.
>
> **[6:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=370)** It's the same y values, the charges, in the form of a multidimensional array.
>
> **[6:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=377)** As I mentioned before, neural networks work better when you're dealing with small numeric values.
>
> **[6:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=384)** Now, our insurance charges vary from 0 to about 50,000, $60,000.
>
> **[6:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=391)** These are not small numeric values, and in order to make our neural network training more robust, more likely to converge, I'm going to use the MinMaxScaler to scale all insurance charges to be expressed in the range zero to one.
>
> **[6:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=406)** That's what the MinMaxScaler does by default.
>
> **[6:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=409)** Now, all insurance charges are expressed as values between zero and one.
>
> **[6:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=415)** We now have our input features and labels that we'll use to train our neural network.
>
> **[7:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=421)** However, they're in the NumPy format, I'm now going to convert them to Torch Tensors.
>
> **[7:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=427)** torch.from_numpy will convert NumPy arrays to Torch Tensors.
>
> **[7:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=433)** Now, Torch Tensors are the primary data structures used in PyTorch for building neural networks and other ML models.
>
> **[7:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=441)** Torch Tensors are multidimensional arrays like NumPy, but they support distributed training using GPUs.
>
> **[7:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/preprocessing-data-for-training?u=76281980&t=447)** They're used in neural network training because they support automatic differentiation for gradient computation, an essential part of the training process of a neural network.

> [!info]- Semantic Content
>
> **Code Identifiers:** numerical_transformer (2), handle_unknown (2), categorical_transformer (1), fit_transform (1), sex_male (1)
> **Code Keywords:** let (5), this. (1), default. (1)
> **Definitions:** means that (1), is a  (1), known as (1)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating a simple neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=1)** - [Instructor] The next step is for us to set up a simple neural network model in PyTorch, and here I'm going to take Gemini's help.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=8)** I want a dense, fully connected neural network.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=10)** I'm going to describe the neural network that I'm looking for, how many layers, how many activation units in each layer, and I'll ask Gemini to generate the code for me.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=20)** I want a simple PyTorch neural network module called SimpleNeuralNet.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=25)** It should have three layers with 16, 32, and then 16 units.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=29)** It should use ReLU as the activation function, and I wanted to include the init forward and predict method implementations.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=38)** In PyTorch, a module is a subclass of torch.nn.module, and that can represent either a neural network layer or a complete model.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=48)** Here I'm looking for a complete model, and let's look at the code that Gemini gives us.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=52)** Now it turns out this code is perfect.
>
> **[0:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=55)** What I'm going to do is I'm just going to copy this code over and then explain it within the notebook.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=61)** Gemini has generated code not just for the neural network, but also for training the neural network.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=66)** We'll worry about training when we come to it.
>
> **[1:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=68)** For now, I'll just copy the code for the architecture of the neural network and paste it into my notebook.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=76)** Our neural network is called SimpleNeuralNet.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=79)** It inherits from the nn.module base class, and the layers of the neural network are defined within the init method.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=86)** Nn.module is the base class for all neural network modules in PyTorch.
>
> **[1:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=90)** It provides a framework for defining layers like linear or convolutional layers and organizing them into a forward computation graph.
>
> **[1:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=98)** It tracks your model parameters and buffers and makes it easy for you to save, load, and train your models.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=103)** We'll first look at the linear layers in this network, and then we'll turn our attention to the activation functions for these linear layers.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=110)** We take in the number of features as an input argument.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=114)** That is the input size variable and layer one comprises of 16 neurons.
>
> **[2:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=120)** Notice I instantiate nn.linear.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=123)** The input size that comes from the input and number of neurons equal to 16 Layer one is the first layer in our neural network.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=130)** The output of this linear layer will be fed to the second linear layer.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=136)** Our first fully connected layer is fc1, and the output of this is passed to the second linear layer fc2.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=143)** The dimensionality of the inputs to the second layer is 16, and this needs to match the number of neurons in the previous layer.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=152)** So layer one has 16 neurons.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=155)** You can see this on line 10, and this matches the number of input features fed into layer two.
>
> **[2:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=162)** That is input features equal to 16 on line 12.
>
> **[2:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=165)** Remember, this is because the output of layer one is fed into layer two.
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=169)** The number of neurons in layer two is 32, and then we have layer three, the third linear layer in our neural network.
>
> **[2:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=178)** The input features to the third linear layer is 32, and this should match the number of neurons in the previous layer, which is 32.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=188)** Layer three has just 16 neurons.
>
> **[3:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=191)** And then finally, we have the last linear layer that is the output layer.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=194)** It accepts 16 input features as input, and produces just one output.
>
> **[3:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=201)** The single output is of course, the prediction from the regression model.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=206)** The 16 features as input corresponds to the 16 neurons in the previous layer.
>
> **[3:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=211)** Each of the three layers, layer one, layer two, layer three have an activation function, and the activation function that I've chosen here is ReLU activation.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=221)** There are three variables for the ReLU activation, relu1, relu2, and relu3.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=227)** Activation functions are what allow us to learn non-linear relationships that might exist in the data.
>
> **[3:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=233)** Now the forward function defines the forward pass through the neural network.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=239)** This forward pass gives us the prediction from the model.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=242)** We receive the inputs as an input argument to this forward function.
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=246)** We apply layer one and then the relu activation function.
>
> **[4:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=251)** Then the outputs are then passed through to layer two, and then relu activation again, and the outputs are passed through to layer three, and we have the relu activation yet again.
>
> **[4:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=260)** The transformed data after passing through three layers is finally passed through the output layer and the output layer's prediction is what we return from the forward pass.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=272)** The predict method is invoked when you use this model to get predictions, and the predict method makes the same forward pass through the neural network.
>
> **[4:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=281)** The one thing that we do different here, we call torch.no_grad to disable gradient computation for the network during the inference phase.
>
> **[4:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=289)** Now that we've set up our neural network, let's explore and understand it.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=293)** Let's instantiate the neural network.
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=295)** The number of features that we have is eight.
>
> **[4:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=298)** Remember, that's the number of columns in the X train data.
>
> **[5:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-simple-neural-network?u=76281980&t=302)** Printing out the neural network will give us a string representation of the layers in the net.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), module (5), pass (4), let (3), for, (1)
> **Definitions:** is a  (1), is called (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** no_grad (1)
> **Speakers:** - [instructor] (1)

#### Setting up the Dataset and DataLoader
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=1)** - [Instructor] Now before we set up our neural network, we have pre-processed our data and set up the features and labels in the form of Torch Tensors.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=8)** Now, in order to organize and feed our data efficiently into our machine learning model, we'll make use of two PyTorch objects, the dataset and the DataLoader.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=19)** The dataset abstracts access to individual data samples in our training and test data.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=25)** And the DataLoader will automate batching, shuffling, and multi-threaded loading.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=30)** Let's get Gemini's help in setting these up.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=33)** So I have train inputs and train targets that are both to Tensors.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=37)** How do I create a dataset and a DataLoader to train a neural network?
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=41)** Now, I've found that Gemini's code tends to be overly complex.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=46)** What I'm going to do is take a look at this code and only use the stuff that I need.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=51)** Notice how it uses the Tensor dataset class to instantiate the train dataset.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=56)** And then if you scroll down, it sets up a train loader using the DataLoader class.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=62)** Now these are the bits that I'm going to copy over to set up our code.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=67)** You can see the explanations that Gemini has provided in order to understand why these objects are needed.
>
> **[1:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=74)** Let's head back to our notebook and set up our code.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=77)** In order to feed our training data into our PyTorch neural network in batches, we are going to be using a Tensor dataset and a Tensor DataLoader.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=87)** In PyTorch, the dataset and DataLoader are foundational classes provided by the torch.util.data module.
>
> **[1:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=95)** These facilitate the loading, processing and batching of data.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=100)** Dataset is an abstract base class in PyTorch, and we'll be using the derived Tensor dataset class.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=107)** You can think of a dataset as representing a collection of data items, and this Tensor dataset that we've instantiated here holds our training data.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=116)** The instantiated Tensor dataset using the train inputs and train targets, and here are the first five records in the Tensor dataset.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=126)** Just a heads up that here we've used one of the built in dataset classes, the Tensor dataset, but it's also possible for you to create your own custom dataset by deriving from the dataset base class.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=138)** Once we've set up a dataset, then we actually access the training data to train our model, we'll want to load the data in batches.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=146)** We may want to shuffle the data or use multiple workers to speed up data loading.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=151)** All of that is done via the DataLoader.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=155)** I've instantiated a DataLoader here and specified a batch size of eight.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=159)** For the training data, I've also set shuffle equal to true, so when we feed the data into our model for training, it'll be shuffled.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=167)** It'll not come in any predictable pattern.
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=169)** The DataLoader is an iterable that allows us to iterate over the data in batches.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=174)** On line five, you can see I create an iterator and call next on it, and this will allow us to see the first batch of training data.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=183)** Notice that we have eight records here.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=185)** Because we specified batch size eight.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=188)** We've now created a dataset and DataLoader for our training data.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=192)** Let's do the same for validation data.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=194)** First, we convert x_val and y_val to the Tensor format, and once that's done, we'll instantiate a Tensor dataset for our validation data and then we'll instantiate a data loader using this Tensor dataset.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=209)** Notice that when we instantiate a DataLoader for the validation data, I haven't specified shuffle equal to true.
>
> **[3:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=215)** Validation data is only used to evaluate the model and does not need shuffling.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/setting-up-the-dataset-and-dataloader?u=76281980&t=220)** Here is the first patch of records from the validation data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (3), module (1), abstract (1)
> **Prerequisites:** set up (5)
> **Code Identifiers:** x_val (1), y_val (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### Training a neural network using PyTorch
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=1)** - [Instructor] We are now ready to start training our neural network.
>
> **[0:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=3)** I'm going to set up a dictionary called loss_stats, which will hold the values of the training loss and validation loss for each epoch.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=11)** We'll run 100 epochs of training and epoch, as you likely already know, is one pass through the entire training data.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=19)** The next thing we need to do is figure out on what device we'll run this training.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=24)** I happen to be running on a new M2 Mac, and this has a GPU available.
>
> **[0:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=28)** Maybe you're running on a similar machine.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=30)** Maybe you're running on Google Colab, and you too have a GPU.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=33)** Otherwise, just run training on a CPU.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=35)** That's totally fine as well.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=36)** What we are doing here is a check to see whether a GPU is available.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=40)** If it is, we'll use the GPU.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=42)** Otherwise, we'll use the CPU.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=45)** So if torch.cuda.is_available returns true, that is we have a GPU.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=50)** Then the device will be cuda.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=53)** If torch.backends.mps is available is true.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=56)** this means that the new Metal Performance Shaders backend for GPU training and acceleration is available on your machine.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=64)** So the device will be mps.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=67)** This is likely to be available if you're working on a new Mac device, or if neither of these options is true, we'll just go with CPU training and device will be CPU.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=77)** You can see that my device says mps because I'm on a new Mac.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=82)** We'll now instantiate and train our neural network using PyTorch.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=86)** Remember, PyTorch is a lower level API, and it does not abstract us away from the details of neural network training, and there'll be a lot of boilerplate code involved.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=96)** I instantiate the neural network, input_size=8, and I call to(device) in order to move the model parameters of the neural network to whatever device we are using for training, either CPU or GPU.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=111)** Moving to the device that you're using for training is a part of PyTorch's boilerplate.
>
> **[1:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=117)** For all of your training data and your model, you have to move them to the right device so that the training occurs on the right device.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=124)** Training a neural network involves using a loss function.
>
> **[2:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=129)** This loss determines how good the neural network is at any point in time.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=134)** You can think of the loss as representing how far away the predictions of the neural network are from the actual target values.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=144)** Since this is a regression model, the loss function that we'll use is going to be the means square error loss.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=151)** The objective of training a neural network is to update your model parameters for every iteration of training so as to minimize the loss function.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=161)** In PyTorch, it's the optimizer that actually updates the model parameters using gradient values.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=168)** So I've instantiated an optimizer for that purpose.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=171)** The optimizer I've used here is the SGD or the Stochastic Gradient Descent optimizer.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=177)** There are several different optimizers available as a part of the PyTorch framework.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=181)** SGD is a commonly used straightforward optimizer.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=185)** The optimizer takes in the model parameters that need to be updated, as well as the learning rate, which I've set to 10 to the power -2.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=194)** The learning rate determines the step size for how the model parameters converge to their optimal values.
>
> **[3:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=201)** Too a large a step size, your model may not converge.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=204)** Too small a learning rate, and your model may take too long to converge.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=209)** This 0.01 works well for this particular model, and that's why I've selected it.
>
> **[3:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=215)** Next, let's set up the training loop for our model, and here is where you'll really see the boilerplate code, and you'll find that when we use PyTorch Lightning in the next demo, most of this code will be eliminated.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=228)** First, I have a for loop to iterate over the number of epochs of training that will run.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=234)** I initialize the training epoch loss to 0.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=237)** We'll reset this for every epoch, and then we make sure that the model is in training mode by calling model.train.
>
> **[4:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=245)** In the training mode, gradients will be computed so that model parameters can be updated using those gradients.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=253)** Gradients are just partial derivatives of the loss function with respect to individual model parameters, and these partial derivatives are used to determine how model parameters should be tweaked to minimize the loss function.
>
> **[4:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=268)** This is all you need to understand conceptually about gradients.
>
> **[4:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=271)** For every epoch, we run another for loop iterating over each batch of the training data.
>
> **[4:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=277)** This is on line 7.
>
> **[4:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=279)** On lines 10 and 11, we move our training data to the device that we are using for training, whether it's a GPU or a CPU.
>
> **[4:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=288)** Notice the boilerplate to device code here.
>
> **[4:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=291)** Next, we make a forward pass through the model, this is on line 16, for the first batch of training data and get predictions.
>
> **[4:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=299)** This forward pass uses the current value of the model parameters.
>
> **[5:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=304)** We then compute the loss of the model at this stage by invoking the loss function, which take in the prediction and the Y values.
>
> **[5:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=312)** Now for each batch of training, we zero out the optimizer's gradients so that gradients that were computed previously do not affect this particular batch.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=321)** And then we perform gradient descent.
>
> **[5:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=323)** We make a backward pass through the model by calling train_loss.backward.
>
> **[5:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=328)** This is where gradients are computed at partial derivatives, and optimizer.step will then use those gradients to tweak our model parameter values.
>
> **[5:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=339)** And then on line 25, we add the current training loss for this batch to the training loss of the epoch as a whole.
>
> **[5:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=347)** All of the steps you see from line 9 through line 25 is repeated for every batch of data in each epoch.
>
> **[5:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=356)** Model parameters will be updated for every batch in each epoch, and the loss function will be minimized to improve the model.
>
> **[6:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=365)** After each epoch of training, we'll run the validation data through the model and evaluate the model's performance.
>
> **[6:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=373)** You can see the with torch.no_grad(): on line 28.
>
> **[6:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=377)** That's within the outer for loop for the epoch, but outside of the for loop for the individual batches of training.
>
> **[6:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=385)** The torch_no.grad method turns off gradient computation for the model, so gradients will not be computed when we pass through the validation data.
>
> **[6:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=395)** I initialize the validation epoch loss to 0 on line 30, and on line 32, we switch the model over to the evaluation state by calling model.eval.
>
> **[6:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=406)** This is the state for evaluating the model, and once again, I have a nested for loop, where we iterate over the batches of validation data.
>
> **[6:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=414)** On lines 36 and 37, We move the validation data to the device that we are using for training CPU or GPU.
>
> **[7:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=422)** We get the predictions on the validation data on line 39, compute the loss on line 41, and we add the loss of this batch to the validation epoch loss.
>
> **[7:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=432)** On lines 45 and 46, we compute the training loss and validation loss for the entire epoch and then upend that information to our loss_stats dictionary.
>
> **[7:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=443)** This is on lines 48 and 49.
>
> **[7:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=446)** On line 51, for each epoch, we print out the training loss, and the validation loss, and that's it.
>
> **[7:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=453)** This is the training process.
>
> **[7:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=454)** It's simple, but there is really a lot of boilerplate code involved.
>
> **[7:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=459)** Let's look at the output of training.
>
> **[7:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=461)** Because this is a very simple neural network, training runs through very quickly.
>
> **[7:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=466)** You can see that after the first epoch of training, training loss was at 0.68, validation at 0.33.
>
> **[7:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-neural-network-using-pytorch?u=76281980&t=473)** By the end of training, training loss is at 0.092 and validation loss at 0.088.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (9), cpu (7), sgd (2), api (1)
> **Code Keywords:** function (7), pass (5), let (2), abstract (1), switch (1)
> **Code Identifiers:** loss_stats (2), is_available (1), input_size (1), train_loss (1), no_grad (1)
> **Definitions:** is a  (6), means that (1)
> **Versions:** 0.01 (1), 0.68 (1), 0.33 (1), 0.092 (1), 0.088 (1)
> **Exercise Files:** boilerplate (5)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** set up (2)

#### Visualizing losses and evaluating models
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=1)** - [Instructor] Now that we have a trained model, let's visualize how the training loss and validation loss change over epochs of training.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=8)** And for that, I'm going to set up a DataFrame with the training loss and validation loss along with the epochs.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=14)** This information is available in the loss statistics that we've manually populated in the training process, and we now have this in the form of a DataFrame.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=23)** We have the epochs, then whether it's training or validation loss, and the corresponding value.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=29)** The head shows us all of the training losses.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=32)** And the tail of this DataFrame contains all of the validation losses.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=36)** Now with this information in the DataFrame format, the next step is to plot this in the form of a nice line chart.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=42)** And I'm going to take Gemini's help for this.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=45)** Now I'm going to tell Gemini exactly what I have.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=47)** I have a train_val_loss DataFrame, and then I have the columns in that DataFrame value that holds the loss.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=54)** Variable tells us whether it's a training or validation loss, and epochs tracks the number of epochs.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=60)** And then I asked Gemini, can you plot a line chart using Seaborn to display this information?
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=65)** And Gemini has a brain feed.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=67)** Instead of giving me the code, it just gives me the chart.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=71)** It basically made up some data and just plotted this line chart.
>
> **[1:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=75)** Gen AI models can have brain feeds, they can hallucinate, they can be plain wrong.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=80)** I know this is not what I want.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=81)** So here is the follow-up question.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=83)** I asked Gemini to generate the code for the line chart, and now Gemini corrects itself and gives me accurate code.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=92)** It's also set up some fake data before it gives me the plotting code.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=96)** I'm only interested in the plotting code, so I'll only copy that bit over.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=101)** Visualizing this using a Seaborn line plot is very straightforward.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=106)** We'll have epochs on the x axis and training and validation losses on the y axis.
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=112)** And here's what the line chart looks like.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=114)** From the start, you can see that for about the first 40 epochs of training, training and validation losses fall pretty drastically.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=121)** But after that, they kind of stabilize and don't really fall much further.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=126)** About 40 epochs of training would've been sufficient for this model.
>
> **[2:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=129)** Let's now compute the R square score of the model on the validation data.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=135)** Ideally, we should have a separate test dataset for this purpose, but because the dataset was fairly small, let's just do it with the validation data.
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=142)** We turn off gradients with torch.no_grad, switch the model to eval mode, model.eval, and we iterate over every batch in the validation data.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=151)** Move the features to the device, this is on line nine.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=155)** Get the predictions from the model.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=157)** y_pred will hold the predictions from the model, y_true will hold the labels from the actual data.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=163)** Let's quickly look at the format of the actual data that is in y_true.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=168)** What we have here is a list of tensors where each tensor contains a prediction for one batch of data.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=175)** You can check this out on your own.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=177)** The prediction data will also be in the same format.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=181)** I'll now perform a torch.stack operation that will give us the actual values in the form of a single tensor rather than a list of tensors.
>
> **[3:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=189)** This is what torch.stack outputs.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=192)** I now have a single tensor with all actual values.
>
> **[3:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=195)** I'll use torch.stack on the predicted values so that we now have a single tensor with all predicted values as well.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=203)** Now that the data is in this form, let's compute the mean square error and R square score for this model on the validation data.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=212)** I instantiate MeanSquaredError and R2Scored and move those to the device as well and compute the two values.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/visualizing-losses-and-evaluating-models?u=76281980&t=219)** You can see that the R square of this model is 0.893, which is a very good score.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1), switch (1)
> **Code Identifiers:** y_true (2), train_val_loss (1), no_grad (1), y_pred (1)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (2)
> **Versions:** 0.893 (1)
> **Speakers:** - [instructor] (1)


### 2. Using PyTorch Lightning to Build a Regression Model

#### Prompt engineering to convert PyTorch to PyTorch Lightning
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=1)** - [Instructor] At this point, we've successfully built and trained a neural network to perform regression, but we used PyTorch and not PyTorch Lightning.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=9)** It was important that you see how the model is built using PyTorch first so that you can see how much cleaner our code is when we use PyTorch Lightning.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=18)** We'll eliminate most of the boilerplate code that you saw for training loops and feeding data in batches, iterating through number of epochs, moving model parameters and data to the right device.
>
> **[0:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=31)** All of that code will just disappear, and we'll build our model in a very clean manner with PyTorch Lightning.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=37)** Let's say you really want to understand how PyTorch Lightning can help you.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=41)** You can turn to digital assistance.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=43)** Here I am asking Claude, what's the difference between PyTorch and PyTorch lightning?
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=47)** Maybe I haven't understood it completely.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=50)** Claude gives me a very clean breakdown.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=52)** PyTorch is the foundational deep learning framework, and this is what we are basically going to be using for all our low level tensor operations, except that when we use PyTorch Lightning, it gives us a high level wrapper that makes our code more readable and more organized.
>
> **[1:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=68)** It's a structured framework that organizes our code.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=71)** It abstracts away boilerplate code.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=73)** You automatically end up following the best practices for training, validation, and testing, and everything else just gets easier.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=81)** Let's try and understand when we would choose to use PyTorch Lightning over PyTorch.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=86)** And that's my next question to Claude.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=89)** And here it has a very clear recommendation.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=92)** When you are working with multiple developers in a production environments, PyTorch Lightning is the right choice.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=99)** PyTorch Lightning is useful for complex training scenarios and research with standard patterns.
>
> **[1:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=105)** You can clearly see here that raw PyTorch is what you'll choose when you want to understand what's happening under the hood, like we did earlier.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=114)** Raw PyTorch is great for one-off experiments or for custom loops that have unusual requirements, maybe unique architectures.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=123)** When you're coding with the help of generative AI models like ChatGPT, Gemini, or Claude, you'll find that you often have to write very little code, but you may need to reorganize or review a lot of code.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=135)** Now, for the simple regression model that we've built so far, you can actually just drag that notebook to Gemini and then basically ask Gemini to convert the code to use PyTorch Lightning, and it often works very well.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=150)** You can try this with Claude.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=151)** You can try this with ChatGPT, but I got the best results with Gemini.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=155)** This is the notebook where we wrote our code earlier.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=158)** It's my original code using PyTorch.
>
> **[2:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=160)** Can you generate code for this using PyTorch Lightning and make it clear that I want the answer in the chat response and not in the form of a notebook, so that I can quickly review it.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=170)** And this gives me great results.
>
> **[2:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=173)** Not only does it use the lightning module for data loading and pre-processing, but it also sets up the lightning module for my training, test, and validation steps.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=183)** You can see here that Gemini has given me two classes, the insurance data module that inherits from lightning data module.
>
> **[3:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=191)** This is the pre-processing data pipeline, and then there is the insurance regression model that inherits from lightning module.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=200)** Now, I have to admit that I asked Gemini, ChatGPT, and Claude this prompt several times.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=205)** The answers were always good, but not always this thorough.
>
> **[3:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=210)** So that's something to keep in mind.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=212)** Gen AI models always set up the PyTorch Lightning module for my neural network correctly, but it often forgot the data processing module.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=221)** Now, copying this code over will not allow us to learn and understand how PyTorch Lightning works.
>
> **[3:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=226)** So what I'm going to do is break this code down and explain how you would convert our regression model that we trained earlier to PyTorch Lightning.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/prompt-engineering-to-convert-pytorch-to-pytorch-lightning?u=76281980&t=235)** I thought it's important that you know that if you're migrating old code to PyTorch Lightning, you can make use of digital assistants.

> [!info]- Semantic Content
>
> **Code Keywords:** module (7), let (2)
> **CLI Commands:** make (2), find (1)
> **Exercise Files:** boilerplate (2)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Encapsulating data using a LightningDataModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=1)** - [Instructor] !pip install lightning to get PyTorch Lightning installed on your local machine.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=7)** You need the Lightning module in addition to the PyTorch framework that we've already installed.
>
> **[0:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=13)** Let's take a look at the version of PyTorch Lightning that I'm using here, lightning._version_, and this tells us that I'm using v2.5.2, the latest at the time of this recording.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=24)** Let's go ahead and set up the import statements for the various libraries that we'll be using.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=29)** The imports here are the same as in the previous demo, but I have a few additional imports for PyTorch Lightning, the one on line nine, you can see, import lightning.pytorch as pl.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=41)** In addition to abstracting away the training process of a neural network, the training loop, and other code associated with it, PyTorch Lightning also makes available the LightningDataModule.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=54)** pl.LightningDataModule allows us to abstract and organize the data related aspects of our deep learning model.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=62)** It's a way to decouple the data processing steps, the loading, pre-processing, and splitting of data from the model training logic.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=70)** When we structure all of our data processing tasks to be encapsulated within a LightningDataModule class, we are centralizing all data related operations in one place and encapsulating all of our code to make it more modular and reusable.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=88)** Here I have specified the skeleton of the InsuranceDataModule class that inherits from pl.LightningDataModule.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=96)** And you can see that there are several functions of the base class that I'm about to override.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=102)** The functions have all been named in very meaningful ways, so you know exactly what goes in each of these functions.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=109)** However, it's important that you understand what goes in each of these methods within the skeleton structure, and this is where you can take help from generative AI.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=119)** I've pasted in my skeleton structure and I've asked for an explanation of the methods that I have in the LightningDataModule.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=127)** Here is Gemini's response.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=128)** In the init method is the constructor where you initialize parameters for your data module.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=134)** The prepare_data method is invoked exactly once across the entire training process, and is one that does not require an accelerator.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=143)** This is where you might access and download data to shared storage, process data and store it in shared storage once again, where it's accessible by the workers running in a distributed manner.
>
> **[2:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=153)** It's important that you not have self.attribute assignments in prepare_data because this is run on just one worker, it's not run in a distributed manner.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=163)** The setup method is invoked on every process in distributed training, and this is where you perform data loading, splitting, transformations, and other pre-processing.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=174)** train_dataloader, as the name suggests, returns the data loader for the training data, and val_dataloader returns the data loader for the validation data.
>
> **[3:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=182)** The LightningDataModule offers other methods that you can override, but these are the basic ones that we look at.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=188)** Let's start by adding in the code for the init method here in this InsuranceDataModule, this is where we'll initialize various parameters we may want to use for the data.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=197)** The only one we have is the batch_size.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=200)** In the prepare_data function is where you access the data wherever it's stored, maybe you'll need to download the data.
>
> **[3:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=207)** Keep in mind though that this is a method that is called only once, even in distributed training.
>
> **[3:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=213)** This is not where you pre-process the data.
>
> **[3:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=215)** This is where you store whatever you do in a shared repository, where the distributed processes can access it.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=222)** Since my data is available on the local machine, I don't really need to do anything here in prepare_data, so I just pass.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=228)** Next, we have setup.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=230)** This is where you'll split the dataset and apply whatever transformations and pre-processing that you need.
>
> **[3:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=236)** This will be called on every GPU separately.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=240)** An input argument to the setup function is what stage the model is currently running.
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=246)** This can be the fit stage, that is training, or it can be the validation or test stages.
>
> **[4:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=252)** Here I use pd.read_csv to read in the dataset and store it in a member variable for this object.
>
> **[4:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=259)** Here we are keeping things simple, so I'll apply the data transformations all in the fit stage or the training stage of the model.
>
> **[4:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=267)** The data transformation operations that you see here should all be very familiar to you because these are the steps we carried out in the previous demo.
>
> **[4:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=275)** On lines 15 and 16, we extract the X features and y values.
>
> **[4:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=279)** On line 18, I check whether the stage is fit or stage is None.
>
> **[4:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=284)** So in the training phase, we split the data into training and validation, this is on lines 19 and 20.
>
> **[4:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=291)** The code on lines 22 through 34 is where we encode the categorical features of our data.
>
> **[4:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=298)** One thing I do differently here from the previous demo is that I encode the categorical features first and then scale the numeric features.
>
> **[5:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=305)** On lines 36 and 37, we convert the y values to NumPy arrays.
>
> **[5:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=311)** On lines 40 through 42, we standard scale our features.
>
> **[5:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=316)** On lines 45 through 47, we min-max scale our targets, that is the y values.
>
> **[5:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=322)** And on lines 50 through 53, we convert all our NumPy arrays into tensors.
>
> **[5:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=329)** We'll feed in data to our model in the form of tensors.
>
> **[5:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=332)** The training and validation data are available as member variables of this class, train_inputs, train_targets, val_inputs, and val_targets.
>
> **[5:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=341)** The feature and target tensors need to be instantiated as data loaders.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=346)** The train_dataloader method returns the data loader for the training data.
>
> **[5:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=352)** The steps here are, again, familiar.
>
> **[5:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=354)** We instantiate a tensor dataset, and using that, we instantiate a data loader.
>
> **[6:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=360)** Notice that I've specified num_workers = 4 for the data loader.
>
> **[6:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=365)** This is because I have four cores on my machine, and this will allow me to load data in parallel using those four cores.
>
> **[6:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=372)** The train_dataloader function returns an instance of the data loader for the training data.
>
> **[6:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=378)** In exactly the same way, I've overridden the val_dataloader function.
>
> **[6:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=383)** This is just a data loader for the validation data.
>
> **[6:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=385)** We instantiate a TensorDataset and use that to instantiate a validation data loader, num_workers again set to four so that four workers running on four cores can be used to load this data.
>
> **[6:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=399)** When we actually train our model, this InsuranceDataModule will be passed in as an input argument to the trainer object that we'll use, and the individual methods of this data module will be invoked at the right point in time to get access to the right bits of data needed for training and validation.
>
> **[6:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=419)** Let's just make sure that the InsuranceDataModule works as expected.
>
> **[7:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=423)** I'm going to create an object of the InsuranceDataModule.
>
> **[7:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=427)** Let's now call prepare_data and setup manually so that the data is available.
>
> **[7:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=433)** And now I'm going to invoke the train_dataloader and I'll print out one batch of the training data.
>
> **[7:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=439)** And you can see that there are eight records in this batch.
>
> **[7:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=442)** In a similar way, let me access the val_dataloader and I'll print out one batch of the validation data as well.
>
> **[7:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=449)** And we have eight records in this batch.
>
> **[7:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=452)** Observe how by using theta module to manage all of the data preparation and processing operations, we've created a modular bit of code that can be reused anywhere.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (4), function (4), class, (2), override (2)
> **Code Identifiers:** prepare_data (5), train_dataloader (4), val_dataloader (3), num_workers (2), batch_size (1)
> **Prerequisites:** setup (4), install (1), set up (1), you'll need (1)
> **CLI Commands:** make (2), pip (1)
> **Definitions:** is a  (1), is called (1)
> **Env Vars:** gpu (1)
> **Versions:** v2.5.2 (1)
> **Exercise Files:** download the (1)

#### Encapsulating a model using a LightningModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=1)** - [Instructor] In the previous demo, we built a simple regression model using PyTorch.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=6)** Now, in this demo, I'm going to build the same neural network that we used before, but this time, I'm going to use PyTorch Lightning.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=14)** What I've defined here on screen is the skeleton of a class that derives from pl.LightningModule.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=21)** Just like the LightningDataModule encapsulates all of the data-related operations, a LightningModule is a fundamental class in PyTorch Lightning that encapsulates everything related to our deep learning model.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=35)** It extends the functionality of the nn.Module class that we used in PyTorch to build up our neural network.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=43)** The LightningModule adds additional methods and structures that streamline the training, validation, testing, and prediction processes of the model.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=52)** A LightningModule organizes your PyTorch code into different sections, and each section is a different method that you override from the LightningModule base class.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=63)** You can see that I have six different methods here.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=66)** These correspond to the six different sections into which LightningModule organizes your code.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=73)** Let's get help from gen AI to understand the basic structure of a LightningModule.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=78)** I've pasted in the skeleton code with all of the methods and here is my prompt, "Can you explain each of these methods in the PyTorch LightningModule?"
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=87)** And then, let's quickly go through what each of these methods are meant for.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=91)** __init__ method, that's the constructor.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=93)** That's where we'll define the architecture for our neural network.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=96)** Gemini reminds us that it's important that we call self.save_hyperparameters within the __init__ method.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=103)** We'll do that when we actually fill out the stubs.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=107)** save_hyperparameters automatically assigns the input parameters to the __init__ method as hyperparameters that you can access later.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=115)** configure_optimizers is where we set up the optimizer for our model and the learning rate.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=121)** This is where we make a forward pass through the neural network where we pass the input data through the layers of our regression model.
>
> **[2:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=129)** And then, we have train step.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=130)** This defines what happens in a single training step with a single batch of data.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=136)** PyTorch Lightning will automatically call this in a loop for all of the batches for every epoch.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=143)** The validation step defines the code for a single batch of validation data.
>
> **[2:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=148)** And finally, predict_step defines what happens in a single prediction step.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=152)** Let's look at and understand each of these step by step, starting with __init__.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=158)** The __init__ method and in addition, there is also a setup method that I've not overridden, this is where you'll define your model.
>
> **[2:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=166)** Whatever we had specified in the nn.Module __init__ method, I've essentially moved that code in here to the __init_ method of LightningModule.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=174)** The __init__ method takes in a number of parameters for the model.
>
> **[2:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=178)** num_features is the number of input features and the learning_rate, which I've set to 0.01.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=185)** This learning_rate parameter will be used by the optimizer that we'll instantiate.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=190)** Now, within the __init__ method, you can see I've set up the layers of the neural network.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=194)** There are three linear layers, and then there is the final output layer.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=198)** And the activation function that we'll use for the three layers is the ReLU activation.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=203)** This network is exactly the same network that we've used in our earlier demo.
>
> **[3:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=208)** Gemini had highlighted the importance of calling self.save_hyperparameters within __init__.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=214)** save_hyperparameters is a method in the LightningModule base class.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=219)** When you invoke self.save_hyperparameters here in the __init__ method, all of the input arguments to __init__, here we have two, num_features and learning_rate, will be saved as hyperparameters and will be accessible by other self.hparams object.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=237)** Let me explain what I mean by adding the code here in the configure_optimizers method.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=243)** This is the method where you'll instantiate and set up any optimizers and schedulers that you use to train your model.
>
> **[4:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=251)** I once again use the stochastic gradient descent optimizer, SGD.
>
> **[4:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=256)** I pass in the parameters of the model available in self.parameters, and I pass in the learning rate of the optimizer using self.hparams.learning_rate.
>
> **[4:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=267)** The learning_rate that we passed in as an input argument to __init__ on line three has been saved in this hparams object that we access here on line 17, because we invoked self.save_hyperparameters on line 14.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=283)** self.save_hyperparameters thus saves all input arguments that you pass into __init__ The forward function is where you define the forward pass through the neural network, and here we define the same forward pass as we did before in PyTorch.
>
> **[4:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=299)** We pass the inputs through the three linear layers.
>
> **[5:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=301)** Each layer has the ReLU activation, and then finally we pass through the last output layer and return the final value.
>
> **[5:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=310)** Now, if you remember in PyTorch, we set up a training loop and within that, we defined the training process of a model.
>
> **[5:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=317)** This is what you'll define here in training_step.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=321)** This training_step function will be invoked in a loop.
>
> **[5:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=325)** What you define here are the operations that need to be performed on a single batch of training data.
>
> **[5:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=332)** You can see the input arguments.
>
> **[5:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=334)** A batch of data is passed in.
>
> **[5:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=336)** We access the x features and y values from this batch.
>
> **[5:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=339)** We make a forward pass through the model by calling self.forward on the x features.
>
> **[5:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=345)** On lines 32 and 33, we instantiate the mean squared error loss function and compute the loss for this batch of predictions, and then we simply call self.log and log the loss out.
>
> **[5:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=359)** Actually displaying the loss on screen and logging it out?
>
> **[6:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=362)** Well, PyTorch Lightning will take care of that automatically.
>
> **[6:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=365)** Make sure you return the loss from this function.
>
> **[6:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=368)** This is what the Lightning framework will use to compute gradients and update model parameters.
>
> **[6:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=373)** To define the validation process of your model, you'll simply specify validation on one batch of data here in the validation step method.
>
> **[6:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=382)** Well, validation is straightforward once again.
>
> **[6:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=384)** We make a forward pass with a batch of data using self.forward.
>
> **[6:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=389)** We compute the mean square error loss on the validation data using the loss function, and we log out the validation loss.
>
> **[6:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=397)** And we have a predict step that you can override here in order to make predictions on the data.
>
> **[6:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=403)** We access the x variables and y values from the batch and simply make a forward pass through the model to get predictions.
>
> **[6:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=410)** You can see here that the entire model training code without the additional boilerplate of moving the model to a device or the training loop has been encapsulated here in one class.
>
> **[7:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=422)** Let me just instantiate and print out a string representation of our model defined in this LightingModule class.
>
> **[7:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=430)** And in the next movie, we'll see how we'll actually train a model using PyTorch Lightning.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (12), self (11), function (6), let (5), class. (4)
> **Code Identifiers:** save_hyperparameters (7), learning_rate (5), configure_optimizers (2), num_features (2), training_step (2)
> **CLI Commands:** make (6)
> **Prerequisites:** set up (4), setup (1)
> **Definitions:** is a  (3)
> **Env Vars:** sgd (1)
> **Versions:** 0.01 (1)
> **Cross-References:** in the next (1)

#### Training the model using the PyTorch Lightning Trainer
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=1)** - We've defined our model, our training step and validation step nicely encapsulated in a PyTorch lightning module, and we are now ready to train our model.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=12)** If you remember in PyTorch, you had to write a lot of code to actually train your model and get validation metrics for your model after each epoch.
>
> **[0:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=22)** In addition, in order to ensure that your model trains on a GPU, if A GPU is present, you had to also move the model parameters as well as the X and Y values that you're using to train your model to the right device for training.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=37)** Now, keep all of that in mind while we see how easy it is to train a model using PyTorch Lightning.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=45)** You see those five lines of code here on screen, including the import statement?
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=49)** Well, that's all the code you need to run a training loop, run validation at the end of every epoch and display all of that nicely to screen.
>
> **[0:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=58)** No nested for loops, no moving the model to the right device, no loss computation on training and validation data.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=65)** No optimizer step, no loss.backward, nothing.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=70)** So what's the code that we write?
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=71)** First, let's take a look at the import statement where I import a CSV logger that will log the details of the training process to our local machine in a CSV format.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=82)** Next, I instantiate the insurance data module class, which encapsulates all of the data preparation and processing operations for the data that I plan to use to train the model.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=94)** Next on line 5 I instantiate a CSV logger class to write the logs out to the logs sub folder under my current working directory.
>
> **[1:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=104)** The actual training process will be taken care of by the pl.trainer class.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=110)** This is a central class that manages and automates the entire training process and abstracts away a lot of the boilerplate code typically associated with training loops, distributed training and evaluation.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=123)** I instantiate the trainer, specify I want to run a maximum of 50 epochs of training passing in the CSV logger so that logs are generated in my current working directory and that's it.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=135)** I call trainer.fit.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=138)** Trainer.fit takes on an instance of a lightning module that is the model that we want to train and a data module that is a dataset we should use for training.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=147)** Trainer.fit will invoke the right methods on the model class as well as the data class to get the right data for training and validation, and it'll run the training process for 50 epochs.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=161)** Our training process has begun.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=164)** Observe that the trainer automatically checks to see whether a GPU or a TPU is available.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=170)** If not, it'll just run training on the CPU.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=174)** You can see that I do have a GPU available so that GPU will be used for training.
>
> **[2:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=178)** The trainer also shows you how many trainable parameters your model has.
>
> **[3:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=182)** We have about 1.2K or 1200 parameters.
>
> **[3:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=186)** As the training process continues, you'll see for every epoch of training, the trainer prints out the epoch.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=194)** So you can see epoch 16 here on screen.
>
> **[3:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=196)** The training loss at this epoch and the validation loss at this epoch.
>
> **[3:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=201)** We had set show progress bar to TRUE when we logged out our training loss and validation loss, and that's why you see these progress bars on screen as well.
>
> **[3:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=210)** At epoch 49, our 50th epoch, the training process is complete.
>
> **[3:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=216)** The training loss at this point is 0.00889 and validation loss is 0.00525.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=224)** Now that we have a trained model, let's see how easy it is to get predictions from the model.
>
> **[3:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=229)** I call trainer.predict.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=231)** Pass the model in and specify the validation data loader as the data loader for the data for which I want predictions, and you can see the predictions from the model output here on screen.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=244)** Now, in addition to that, you can see a warning here on screen.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=247)** It's good practice to pay attention to these warnings.
>
> **[4:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=250)** You may want to ignore certain warnings, but not others.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=253)** I found generative AI incredibly useful in helping me debug warnings, letting me know whether I can ignore this or not.
>
> **[4:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=260)** Before I switch over to get Gemini's help with this warning, let's just take a look at the result.
>
> **[4:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=265)** The output format of the predictions gives us the predictions for every batch of the input in a separate tensor, and this is something we'll have to deal with in a bit.
>
> **[4:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=274)** Now about the warning, I'm going to copy the warning over and I head over to Gemini to ask it what exactly this is about.
>
> **[4:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=281)** Now this is actually interesting.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=283)** The warning has to do with the performance of the predictions on your data.
>
> **[4:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=288)** When you have multiple workers in your data loader, remember, we had set this to four, you need to set an additional parameters.
>
> **[4:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=294)** Persistent workers equal to TRUE for faster loading of data.
>
> **[4:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=299)** Without this additional parameter, the workers are reinitialized for each batch of data loaded, but when you set persistent workers equal to TRUE, the worker processes do not need to be reinitialized each time making your data loading more performant.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=314)** I'm not going to rerun my code, but let me show you the change that you need to make.
>
> **[5:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=318)** Here we have two data loaders, the trained data loader and the VAL data loader.
>
> **[5:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=323)** I've set persistent workers equal to true for both of these data loaders.
>
> **[5:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=328)** Since I'm not going to rerun the code, you won't see that these warnings have disappeared, but I'll leave it to you to try this out on your own.
>
> **[5:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=334)** Let's go back to our data where we have predictions for each batch in a separate tensor.
>
> **[5:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=339)** Let's get all of these in a stacked format by using torch.cat to concatenate them.
>
> **[5:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=345)** This will give us a single answer with all the predictions from our model for the validation data.
>
> **[5:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=352)** In order to compute metrics for the model, I need the actual values or the labels from the validation data as well, and I extract this by using a for loop.
>
> **[6:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=362)** Now that I have this, let's stack the labels as well so we get a single tensor with all of the labels from our data.
>
> **[6:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=371)** Now that we have the predictions as well as the labels, all that's left to do is to compute the mean square error and the R square score for this model.
>
> **[6:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=380)** And here's the R square score for this model.
>
> **[6:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=382)** In the same ranges before, 0.87.
>
> **[6:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=385)** If you remember, we passed in a CSV logger to the pl.trainer object that we had instantiated to log out the metrics during the training process.
>
> **[6:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=395)** We can now access these metrics.
>
> **[6:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=398)** There'll be in a metrics.csv file in your log directory.
>
> **[6:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=402)** The log directory is accessible via other trainer instance trainer.logger.log_dir/metrics.csv.
>
> **[6:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=410)** This is a data frame that I read in which gives us the training loss, validation loss for every epoch.
>
> **[6:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=417)** We do a little bit of pre-processing with this metrics data frame.
>
> **[7:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=420)** For instance, I drop the step column and then I go ahead and display the metrics as a line plot.
>
> **[7:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=428)** Along the X-axis, we have the epoch of training.
>
> **[7:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=431)** Along the Y-axis we have the training and validation losses.
>
> **[7:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=435)** The blue line represents the training loss and the orange dotted line is the validation loss.
>
> **[7:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=440)** Now you've trained the same model using PyTorch Lightning and you can see how much simpler and more intuitive the code was.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (4), class, (1), class. (1), pass (1)
> **Env Vars:** gpu (5), csv (5), true (3), tpu (1), cpu (1)
> **Warnings:** warning (5)
> **Versions:** 0.00889 (1), 0.00525 (1), 0.87 (1)
> **Definitions:** is a  (3)
> **File Paths:** metrics.csv (1), trainer.logger.log_dir/metrics.csv (1)
> **CLI Commands:** make (1), cat (1)
> **Code Identifiers:** log_dir (1)


### 3. Using PyTorch Lightning to Build a Classification Model

#### Loading and exploring classification data
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=1)** - [Instructor] We've seen how easy it is to build and train a neural network, using PyTorch Lightning.
>
> **[0:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=5)** Let's get some more practice with this and this time, we'll build and train a classification model.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=11)** Here I am on a new Jupyter Notebook.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=14)** I'll first set up the import statements for all of the libraries that we use.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=18)** This involves data access, data processing, libraries.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=21)** You can see that I've also imported lightning.pytorch as pl on line 10 because this is a classification model.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=29)** We'll evaluate this model with a different set of metrics.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=33)** On line 13, you can see that I import binary F1 score and binary accuracy.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=38)** These are the metrics we'll use to evaluate the model.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=41)** I have the data that we'll use to train the model in the datasets folder here.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=46)** This is a churn modeling dataset.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=49)** We'll have information for a number of customers, and we'll use that information to predict whether the customer churned or not.
>
> **[0:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=55)** Let's read in and take a look at the data before we actually set up a lightning data module to encapsulate all our data operations.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=64)** I'm going to read in from the churn modeling .CSV file under datasets.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=69)** Here in this dataset, we have information for bank, customers, row number, customer ID, last name, credit score, gender, age, tenure, whether the customer has a credit card or not.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=80)** And finally, the last column here is exited.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=84)** That column contains the labels that we are trying to predict, exited equal to one, meaning the customer churned, zero means the customer did not churn.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=93)** When you take a look at the columns here in this dataset, it's pretty clear that there are certain columns which are not really relevant in predicting whether the customer churned or not.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=103)** Now, when you look at the columns here in this dataset, one question you might ask yourself, are all of these columns relevant, columns like row number, customer ID?
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=112)** Will they really help us predicting churn?
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=114)** We'll take generative AI's help to figure out.
>
> **[1:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=117)** Next, let's take a look at the data types for the various columns to make sure they're all of the right type.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=124)** A quick glance over the column shows me that numeric values are numeric types, either integer or floats, and categorical values are of type objects or strings.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=134)** Things look good so far.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=135)** I'm going to copy these columns over, and I'm going to ask ChatGPT, what columns are relevant for training our classification model?
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=142)** So I give ChatGPT to the columns, and I ask it, do you think all of the features are relevant in predicting customer churn?
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=150)** And ChatGPT gives me a very nice breakdown of what features might be useful and what features are not.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=157)** These are the features that ChatGPT thinks are relevant, and it also tells you why those features may be relevant and less useful or redundant features include row number, customer ID, and surname.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=168)** When we process our data, these are the columns that we'll drop.
>
> **[2:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=172)** The classification model that we are trying to train is a binary classification model.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=176)** We are trying to predict whether a bank customer exited the relationship or not.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=181)** We are trying to predict churn.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=183)** If you look at the value counts for the exited field, you can see that this data set is very skewed.
>
> **[3:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=189)** 8,000 out of the 10,000 customers did not churn and only 2,000 did.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=194)** You can actually view the same information, using a nice C bone count plot.
>
> **[3:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=199)** Based on the exited values, you can see that there are many more customers who haven't exited as compared with customers who have exited or churned.
>
> **[3:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=208)** Once again, this is a skewed dataset, and I'll give you a heads up right now, but we won't actually be mitigating the skewness of this data.
>
> **[3:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=215)** So I won't perform any sampling to balance out the customers who have churned and who've not churned.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=220)** So there is a limit to how good our binary classification model can be.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=225)** If your training data is skewed, it's hard to build a great classification model.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/loading-and-exploring-classification-data?u=76281980&t=230)** But since our focus is primarily on learning to use PyTorch Lightning to build a neural network model, we'll work with this queued data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (1), finally, (1), type. (1)
> **Definitions:** is a  (5)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Env Vars:** csv (1)
> **Tools:** jupyter (1)
> **Warnings:** heads up (1)
> **Speakers:** - [instructor] (1)

#### Creating a LightningDataModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=1)** - [Instructor] If you remember the previous regression demo where we used PyTorch Lightning, the first thing we set up was a data module class.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=8)** This data module encapsulated all of the data preparation, processing, and other operations to work with our training and validation data.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=18)** Here is our bank customer churn data module, which inherits from the PL dot lightning data module based class.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=26)** Now in the init method is where we initialize the parameters of the data.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=30)** We just have the batch size, and that's the only input argument to the init method.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=35)** In repair data is where we load the data from wherever it's available and download it and make it available to a shared repository.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=44)** Since our dataset is available on our local machine and we are not running distributed training, I don't really need to write any code in here.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=50)** Remember that prepare data is not run in a distributed manner, so it's not run on every machine where distributed training runs.
>
> **[0:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=58)** It's run on a single machine.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=60)** The setup function is where we perform data transformations and pre-processing and data splitting.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=66)** It takes in the stage as an input argument.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=69)** The first thing that we do within setup is read in the contents of the churn modeling CSV file and assign it to a self-attribute, self-taught bank customer churn data.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=79)** Now this data contains missing values.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=81)** I'll use drop init to drop records with missing values, and I'll use drop duplicates to get rid of duplicate rows.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=88)** Now, ChatGPT had suggested that certain columns are not relevant, such as row number, customer ID, and surname.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=94)** Let's drop those.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=96)** The X features will not include exited.
>
> **[1:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=98)** That's of course the target.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=99)** We have to drop that, but we'll also not include room number, customer ID and surname, because these fields do not have any predictive power to figure out whether a customer churned or not.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=111)** The Y value, or the target of the classification is the exited that I assign on line 21.
>
> **[1:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=118)** Now, I'll pre-process the data only if stage is equal to fit or stage is equal to none.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=124)** That is only in the training phase.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=126)** The training phase, we'll get the training as well as validation data and pre-process them both.
>
> **[2:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=132)** In the training phase on lines 24 and 25, I first use train test split from psychic learn to split the data 80% for training and the remaining 20% to evaluate the model.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=145)** On lines 28 through 37, we one hot encode the categorical values present in the data.
>
> **[2:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=153)** The only categorical features include geography and gender, and we instantiate the one hot encoder and then use a column transformer to one hot encode these values.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=164)** On lines 39 and 40 is where we actually perform the one hot end coding by calling fit transform on the training data and transform on the validation data.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=175)** On line 42, we convert the Y values to number array and on lines 45 through 48, we use the standard scaler to standardize all numeric values.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=187)** And finally, on lines 51 through 54, we take our training as well as validation data and convert them all to PyTorch.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=198)** And then of course, we have the train data loader function, which returns the data loader for the training data.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=203)** We instantiate a tensor data set, and then we use that to instantiate a data loader.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=209)** We load the data using four workers, since I have four cores on my machine.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=214)** And keeping in mind, the performance related warning from the previous demo, I've set persistent workers to true.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=219)** Because we are using multiple workers, I don't want the workers to be reinitialized for every batch of data loaded.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=225)** The worker should be persistent and the code and the validation data loader is identical.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=230)** We instantiate a tensile data set with the validation data and use that to instantiate a data loader.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=237)** Let's quickly check that our data module works just fine.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=240)** I instantiate the bank customer churn data module, call, prepare data, and then set up.
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=246)** I now access the train data loader, and let's take a look at one batch of training data.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=253)** Once again, we've used a batch size of eight.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=257)** After all of the pre-processing that we've performed, let's see the number of features that we have in the input data.
>
> **[4:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=264)** We access one record of the training data, use the shape property, and get the second dimension, which will give us a number of features.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=272)** It's equal to 11.
>
> **[4:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=274)** Remember, we need this information to set up the layers of our neural network model.
>
> **[4:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=280)** Next, let's look at one batch of the validation data to make sure that the validation data loader is also working fine, and you can see that indeed it is.
>
> **[4:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningdatamodule?u=76281980&t=289)** All that's left for us is to set up a lightning module with our model and train the model, using a lightning trainer object.

> [!info]- Semantic Content
>
> **Code Keywords:** module (7), let (5), class. (2), function (2), self (2)
> **Prerequisites:** set up (4), setup (2)
> **CLI Commands:** make (2)
> **Env Vars:** csv (1)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Creating a LightningModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=1)** - [Instructor] We are now ready to define our PyTorch lightning module, which will hold our model as well as have the steps required for training and validating our model.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=11)** Here's a class that I've defined, binary classification module.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=14)** We are going to be performing binary classification, predicting whether customers churned or not.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=20)** We inherit from the lightning module base class.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=24)** The init method is where we set up our model.
>
> **[0:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=28)** This is where we define the model architecture and its layers.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=32)** Now, init takes into input arguments, the number of features in the input data and the learning rate that I've set to 0.001.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=40)** I'm using a smaller learning rate here.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=43)** My model comprises of three linear layers.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=46)** Again, layer one, layer two, and layer three.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=49)** And each of the three linear layers has a ReLu activation, and these are initialized separately as activation one, activation two, and activation three.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=59)** The final output is also a linear layer.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=62)** This is the output layer on line 12.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=65)** The output of this layer will be a probability score, and this is the probability score that we use to determine whether a particular customer churned or not.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=76)** Once again, I call self.save hyper parameters on line 16.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=81)** This will cause num features and learning rate both to be saved as members of the H params object that can then be accessed by the optimizer.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=92)** The forward function is where we define what a forward pass through the model looks like.
>
> **[1:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=97)** You can see we pass the input through the three layers, each layer has the ReLu activation.
>
> **[1:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=104)** And finally, we pass the data through the output layer.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=108)** This will give us the final predictions that we return.
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=112)** The training step defines the operations for a forward pass through the model for a single batch of data.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=119)** The batch is passed in as an input argument.
>
> **[2:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=122)** We access the X features and the Y variables, and then we do a forward pass through the model by invoking self on the input features.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=130)** A forward pass through the model will output logits for classification.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=135)** The term logits refers to the raw, unnormalized prediction scores output by a model for each class or category.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=143)** Since it's binary classification, we'll have just one logits scores.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=147)** Now, the loss function that we use for our binary classification model is the BCE with logits loss.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=154)** BCE here stands for binary cross entropy.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=159)** The BCE with logits loss converts the raw logic scores into probabilities.
>
> **[2:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=165)** It squashes the output logits to be probability values in the range zero to one.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=171)** It then computes the binary cross entropy laws, which is essentially computing the difference between two probability distributions, the probability distributions of the actual value versus the predicted values.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=184)** On line 33, we compute the BCE with logits loss for one batch of data, and we log that out as a training loss along with a progress bar.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=194)** In the validation step, we perform predictions on one batch of validation data.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=200)** You can see that the code on 40 through 44 is the same as in the training step, we compute logits and then compute the loss.
>
> **[3:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=207)** However, here in the validation data, we want the actual predictions from the model, and we compute that by converting the raw logits scores to probability scores using the torch.sigmoid activation.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=221)** This will give us probability scores in the range zero to one.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=224)** torch.round of this probability score will give us the model prediction, zero for not exited, one for exited.
>
> **[3:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=232)** On line 48, we print out the loss on the validation data during the training process.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=237)** The predict step just gives us the predictions from the model.
>
> **[4:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=241)** Here we just make a forward ask through the model.
>
> **[4:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=245)** In configure optimizers, you can see that we've set up an Adam optimizer The Adam optimizer is an adaptive learning rate optimization algorithm.
>
> **[4:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/creating-a-lightningmodule?u=76281980&t=255)** Very popular and widely used in the real world.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (6), module (3), self (2), function (2), class. (1)
> **Env Vars:** bce (4)
> **Definitions:** refers to (1), stands for (1), is an  (1)
> **Prerequisites:** set up (2), configure (1)
> **CLI Commands:** make (1)
> **Versions:** 0.001 (1)
> **Speakers:** - [instructor] (1)

#### Training a classification model and evaluating metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=1)** - [Instructor] Now that we've defined our lightning module, let's instantiate our classification module we need to pass in the number of features.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=8)** Here is what the layers of the model look like.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=12)** We know that the training process of this model is a very straightforward using a PyTorch trainer.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=18)** Once again, I use a CSV logger to log out the training metrics in a CSV file.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=25)** I instantiate the data module on line three, the logger on line five and the trainer, which will actually run the training and validation process on line seven.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=36)** We'll run for a maximum of 20 epochs of training and start the training process by calling trainer.fit.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=43)** The trainer rightly identifies that I do have a GPU on my machine and it'll train the model using the GPU.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=49)** Notice, GPU available is true.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=51)** Now, the training process took about six or seven minutes to run.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=56)** At the end of one epoch of training, both training and validation losses are rather high.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=61)** Validation loss, 0.436, train loss, 0.48.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=65)** I let this run through again for all 20 epochs.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=69)** And at epoch 19, let's take a look at the various scores.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=73)** Validation loss is 0.351, it's fallen a bit.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=76)** Train loss is 0.331.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=78)** But the real question is how well does the model perform?
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=82)** Meanwhile, let's access the metrics for the training process of this model in the metrics.csv file under the training logs directory.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=91)** Let's now go ahead and plot all of these metrics in a nice visualization, a Seaborn line plot.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=99)** And here you get a nice plot of how the training and validation losses change over the course of the epochs of training that we ran.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=106)** Next, I'll call model.predict on the validation data so we get predictions from the model and we get them as a stacked answer.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=115)** So we have one tensor with all the predictions.
>
> **[1:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=118)** The predictions here are in the form of raw unnormalized logic scores.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=124)** In order to get these scores in the form of probability values between zero and one, you need to apply the torch. sigmoid function, and then torch round will give us the actual predictions in the form of zero one values.
>
> **[2:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=137)** I'll now get the ground truth labels from the validation data.
>
> **[2:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=141)** We'll have to compare the predictions from the model against these actual values.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=145)** We need to call torch.stack on these labels as well in order to get them all in a single tensor.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=151)** Now that we have the predictions and the actual values, let's compute some evaluation metrics for the validation data.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=159)** We'll compute accuracy, precision, recall, and the F1 score.
>
> **[2:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=165)** The accuracy tells us how many predictions the model got, right?
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=169)** But because we have a skewed data set, the accuracy is not a great measure of how good this model is.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=175)** Precision is the proportion of positive identification the model got and recall measures of the positive identifications in the dataset.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=184)** How many was the model able to correctly identify?
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=188)** The F1 score here represents a trade off between precision and recall metrics that are better suited to evaluate models trained on skewed data.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=198)** Let's go ahead and hit + shift enter and we'll see how the model is.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=202)** Accuracy is quite good at 0.857.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=205)** Recession, which is the proportion of positive identifications of exited customers that the model got right is quite high, 0.77.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=214)** The recall score is on the lower side, 0.466.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=217)** Of the customers identified as exited or churned by the model, how many were actually right?
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=223)** This is what recall measures.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=225)** And finally, we have the F1 score, which is the trade off between precision and a recall, and that's at 0.58.
>
> **[3:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=233)** That's great.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/training-a-classification-model-and-evaluating-metrics?u=76281980&t=234)** At this point, you've successfully built and trained a classification model using PyTorch Lightning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (3), pass (1), function (1), finally, (1)
> **Versions:** 0.436 (1), 0.48 (1), 0.351 (1), 0.331 (1), 0.857 (1)
> **Env Vars:** gpu (3), csv (2)
> **File Paths:** metrics.csv (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=1)** - [Instructor] And this demo brings us to the very end of this AI workshop on building a neural network with PyTorch Lightning.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=7)** Now, we started this course off with a quick overview of PyTorch and PyTorch Lightning, and we discussed how PyTorch Lightning allows us to write cleaner and more modular code for model training.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=20)** We then got hands-on and we trained a regression model using the PyTorch APIs.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=25)** We identified that there was a lot of boilerplate code here in the model building and training process and we eliminated a lot of this boilerplate repetitive code in the next demo, where we trained the same regression model, but this time we used PyTorch Lightning.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=41)** And then in order to get some more practice with PyTorch Lightning for model training, we built and trained a classification model using PyTorch Lightning.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=51)** Well, this brings us to the very end of this AI workshop.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=54)** If you're interested in neural networks and you want to study further, here are some other courses on LinkedIn Learning you might want to watch.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=61)** TensorFlow: Neural Networks and Working with Tables and Hands-on PyTorch Machine Learning are both great courses that might be a good fit for you.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=71)** Well, that's it from me here today.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=73)** I hope you had fun in this AI workshop.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-26906172/summary-and-next-steps?u=76281980&t=76)** Thank you for listening.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1), in the next (1)
> **Exercise Files:** boilerplate (2)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your Skills in Natural Language Processing]]
← [[Deep Learning with TensorFlow- Insights and Innovations]] | **5 of 6** | [[Generative AI- Working with Large Language Models]] →

## Appears In

- [[Advance Your Skills in Natural Language Processing]]

## Related Courses

_Courses sharing skills:_

- [[AI Workshop- Build a Neural Network with PyTorch Lightning (2023)]] — Artificial Intelligence (AI), Artificial Neural Networks, PyTorch
- [[Hands-On PyTorch Machine Learning]] — Artificial Intelligence (AI), PyTorch
- [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[LinkedIn AI Academy AI-100- 2 Supervised Learning with Neural Networks]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
