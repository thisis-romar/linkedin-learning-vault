---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-workshop-build-a-neural-network-with-pytorch-lightning-2023
url: "https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023"
duration_minutes: 90
duration: 1h 30m
level: Intermediate
updated: 12/8/2023
learners: 4073
skills:
  - PyTorch
  - Artificial Intelligence (AI)
  - Artificial Neural Networks
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEO3pew_MlbVA/learning-public-crop_675_1200/B4EZjoiaKRHoAY-/0/1756247991159?e=2147483647&amp;v=beta&amp;t=AIiUEPc8EOC4sT4UnM38a1ccb8MFyTRBIl0P7wMot0I"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Advance Your Skills in Deep Learning and Neural Networks
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/pytorch
  - skill/artificial-intelligence-ai
  - skill/artificial-neural-networks
status: not-started
created: 2026-04-19
---

![AI Workshop: Build a Neural Network with PyTorch Lightning (2023)](https://media.licdn.com/dms/image/v2/D4E0DAQEO3pew_MlbVA/learning-public-crop_675_1200/B4EZjoiaKRHoAY-/0/1756247991159?e=2147483647&amp;v=beta&amp;t=AIiUEPc8EOC4sT4UnM38a1ccb8MFyTRBIl0P7wMot0I)

# AI Workshop: Build a Neural Network with PyTorch Lightning (2023)

> If you’re looking for hands-on AI practice, this workshop-style coding course was designed for you. Join instructor Janani Ravi as she shows you how to build a neural network with PyTorch Lightning, the open-source library from Python that provides an interface for the popular deep learning framework PyTorch. Explore the core components of building a neural network with PyTorch, including setting 

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023) | 1h 30m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

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

#### AI workshop: Build a neural network with PyTorch Lightning
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=0)** Hi, and welcome to this course.
>
> **[0:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=2)** [[AI Workshop- Build a Neural Network with PyTorch Lightning]].
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=6)** Since this course is an AI workshop, for most of this course we'll be performing hands-on coding.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=12)** We'll build a neural network with PyTorch and we'll see how we can write cleaner, more modular reusable code with PyTorch Lightning.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=19)** Now, before we get to the demos, just a little bit of an overview of PyTorch and PyTorch lightning.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=26)** First, what exactly is PyTorch?
>
> **[0:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=28)** Here is a definition from the PyTorch documentation.
>
> **[0:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=31)** It's an optimized tensor library for deep learning using GPUs and CPUs.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=37)** The tensors here refer to multi-dimensional arrays that can be trained in a distributed manner.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=44)** Another way to look at PyTorch, also from the documentation.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=47)** It's an open-source machine learning framework based on the Python programming language.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=52)** It has simple and intuitive APIs which accelerate the path from research prototyping to production deployment.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=59)** The PyTorch framework is primarily used to build deep learning neural network models, and its APIs are so simple that with just basic knowledge of Python, you should be able to work in PyTorch right away.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=73)** Now, hopefully, you've worked with neural networks before, and this is not your first neural network course.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=78)** Neural network models, you know, are just directed acyclic graphs.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=83)** PyTorch uses something known as dynamic computation graphs.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=87)** This means you can build the graph for the model and execute it right away.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=91)** This makes it easier and more flexible to build complex neural networks.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=96)** Now, PyTorch is deeply integrated with NumPy.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=100)** You can set up your data in the form of NumPy arrays and convert those to PyTorch tensors and vice-versa very easily.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=107)** PyTorch has native support for training on GPUs.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=111)** You can have your model parameters and data all moved to the GPU available on the machine that you're running training and the entire training process will run there.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=121)** PyTorch also uses a powerful library called Autograd for automatic differentiation.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=128)** Automatic differentiation is an important part of training a neural network model.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=133)** This involves computing partial derivatives of the loss function with respect to every model parameters, and then using that information to tweak model parameters to minimize the loss of a network.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=145)** The PyTorch library contains everything that you need to build neural networks.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=150)** You have classes for the layers of a neural network, different kinds of layers, optimizers that you use to train neural networks, loss functions for different kinds of models, serializers to serialize the model out to disk.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=163)** The PyTorch framework is flexible and easy to use.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=167)** When you use PyTorch directly to build and train neural networks, you get access to a low-level API for model training.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=176)** And this is great when you really want to configure and customize your model and want very granular control over the training process.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=184)** But if you want to be abstracted away from the details of model training, using the PyTorch framework directly is not a great choice.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=192)** PyTorch has many repetitive tasks and a lot of boilerplate code, so it's often very tedious to write code in PyTorch to train your model.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=202)** If you want to avoid working with all of these nitty-gritty details and want your model code to be cleaner and more modular, well, you use PyTorch Lightning.
>
> **[3:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=211)** PyTorch Lightning is an open-source lightweight wrapper or framework built on top of PyTorch that simplifies the training and research process for deep learning models.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=221)** So this is something important.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=223)** PyTorch Lightning is just a wrapper, so you can't do anything in Lightning that you can't do with PyTorch.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=228)** The fact is, it's just much easier to work with PyTorch Lightning. PyTorch Lightning abstracts away all of the nitty-gritty details and really reduces the boilerplate code that you have to write for training models.
>
> **[4:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=241)** Whatever you need to do to build and train neural networks, PyTorch Lightning will give you a high-level interface for this.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=247)** You can define data sets, define models, set up training loops, and log your experiments all using this high-level interface.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=257)** What are some of the advantages of using PyTorch Lightning?
>
> **[4:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=261)** Well, your code is much cleaner because most of the repetitive code and training loops that you have to use in PyTorch is abstracted away.
>
> **[4:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=269)** Your code is also more modular with Lightning.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=272)** It encourages a modular design by separating the different parts of the training process into well-defined components such as the model DataLoaders and training logic. Cleaner modular code results in better reproducibility of your model and data.
>
> **[4:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=288)** Lightning provides built-in support for experiment logging and tracking, as well.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=293)** Lightning support for distributed training is more straightforward because you do not need to move your model parameters and data to specific devices to actually train on that device.
>
> **[5:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=306)** Lightning offers a callback system, allowing you to add custom functionality at various points during the training process without modifying the core training loop.
>
> **[5:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=316)** Instead of writing complex for loops to train your model, the trainer class in Lightning abstracts away many training loop details.
>
> **[5:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/ai-workshop-build-a-neural-network-with-pytorch-lightning?u=76281980&t=325)** If you feel that PyTorch Lightning does not offer you the flexibility that you need for model training, well, you can use Lightning along with the PyTorch API. So they are interoperable, giving you experiment flexibility.

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
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=0)** Before you get hands-on and that will be very soon, let's quickly look at some of the prereqs you need to have to make the most of your learning.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=8)** The first thing here is you need to have a basic understanding of machine learning.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=12)** This is not a beginner machine learning course.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=14)** Instead, it's an AI workshop, which means we'll get hands-on with demos right away.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=19)** A basic understanding of machine learning, regression, and classification models will really help you.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=25)** Also, you need to have a basic understanding of how neural networks work.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=29)** In the next movie, we'll quickly go through how neural networks function, but that's more of revision rather than explaining all of the nitty gritty of neural network training.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=41)** So basic understanding of neural networks would really help.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/prerequisites?u=76281980&t=44)** And finally, because we are going to be coding a lot using Python, you should be comfortable programming in Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** let (1), function (1), finally, (1)
> **Prerequisites:** you need to have (3)
> **Cross-References:** in the next (1)

#### Quick overview of neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=0)** Let's do a quick revision of how neural networks work before we get down to the demos.
>
> **[0:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=5)** Remember, this is not a comprehensive overview or a look at neural network training, but a quick overview to give you the main points to remember as you dive into the code.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=16)** Neural network models are made up of layers and how these layers are arranged and connected make up the architecture of the model.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=25)** You can think of every layer in a neural network as being connected to other layers in the neural network.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=32)** The way neural networks function is that every layer in the neural network is responsible for extracting a different detail from the underlying data, and all of the layers put together make predictions.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=45)** Now, the first layer here in our neural network, that's the input layer.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=49)** This is where we feed in the input data, whether during the training process or for predictions.
>
> **[0:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=55)** The final predictions of the neural network are available from the last layer, that is the output layer. Between the input and output layers, you have one or more hidden layers and these hidden layers transform the data.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=71)** These transformations are applied as the data flow through the layers of the model.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=77)** The operation of each hidden layer is to extract a different bit of information from the data that passes through. In a neural network, every layer is made up of active learning units called neurons.
>
> **[1:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=90)** They are called active learning units because it's these neurons that are identifying patterns and making generalizations from the data that passes through the network.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=101)** Neurons are fed inputs and they produce outputs.
>
> **[1:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=105)** And these inputs and outputs are essentially interconnections in the model.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=110)** The output of every neuron may be connected to one or more neurons in the layer after it. And how these connections are set up, well, that's a part of the neural network architecture.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=121)** Now, we've said that neurons are active learning units, but what exactly is a neuron?
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=126)** Each neuron is nothing but a mathematical function.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=130)** Each neuron applies this function that you see here at the bottom to its inputs.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=135)** It computes the weighted X values, X values are the input, adds a bias, and applies an activation function on Wx + b to compute the final output Y.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=147)** The first of these mathematical functions that the neural network applies is responsible for learning linear relationships that exist in the data.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=156)** A neuron receives a vector of inputs.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=158)** You can think of these as X1 through Xn, and it basically applies a weight value to each element of the vector.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=167)** These weights are associated with the connections that flow into the neuron. Wx + b is the first mathematical operation of the neuron, and this operation is responsible for learning linear relationships that exist in data.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=181)** The second mathematical function that a neuron applies to its inputs is the activation function.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=188)** The activation function is responsible for learning non-linear relationships that exist in data.
>
> **[3:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=193)** Popular activation functions include the rectified linear unit or ReLU, there is, the sigmoid activation function, and many others.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=202)** The choice of activation function is a part of the neural network design.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=206)** The weights and biases of all of the neurons in your neural network make up the trainable parameters of the model.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=214)** These weights and biases are what are found during the training process. You can think of the objective of the training process of a neural network is to find the weights and biases for all of the interconnections that minimizes the loss of the model.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=231)** The loss here is essentially a measure of how far the predictions of the model are from the actual values in the training data. We know that model parameters are found during the training process of the neural network.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=244)** But how does training work?
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=246)** Here is a very high level explanation.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=249)** During the training process, we feed training data in batches through the network and get predictions using the current parameters of the model.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=258)** These predictions, at least to start off with, will not be very good ones.
>
> **[4:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=263)** We'll measure how good the predictions of the model are by computing the loss.
>
> **[4:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=268)** The loss represents how far is the prediction of the model from the actual labels in the training data.
>
> **[4:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=276)** Once we have the loss function, we'll compute gradients, where gradients are just the partial derivatives of the loss with respect to each parameter in model training. These gradients give us a sense of how to tweak the model parameters to minimize the loss of the model.
>
> **[4:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=294)** We then make a backward pass through the model to update parameters to minimize the loss.
>
> **[5:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=300)** And this forward pass to get predictions and then backward pass to update the model parameters continues through the entire training process until the model parameters converge.
>
> **[5:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=312)** The entire objective of the training process is to minimize the loss of the network, and thus improve the predictions of the model.
>
> **[5:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/quick-overview-of-neural-networks?u=76281980&t=320)** This minimization of the loss of the network is done using an optimization algorithm called gradient descent.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), pass (3), let (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (1)


### 1. Building a Neural Network with PyTorch

#### Setting up the virtual environment
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=0)** In this course, we'll first build a simple neural network model for regression using PyTorch.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=6)** And you'll see that there are a lot of granular details that you need to know about model building in order to work with PyTorch directly.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=14)** There will be a lot of boilerplate code.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=16)** Then we'll basically build the same neural network using PyTorch Lightning.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=21)** With PyTorch Lightning, we'll eliminate a lot of the boilerplate code and create reusable components.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=26)** You'll see how much cleaner the code is with PyTorch Lightning.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=30)** Before we do any of that, let's set up a virtual environment within which we'll install PyTorch and build and train our neural network models.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=38)** Here I am on my local machine and I have Python installed.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=43)** Make sure you have a recent version of Python.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=45)** You can see that I'm working with Python 3.10.9.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=48)** I'll now create a Python virtual environment.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=51)** A virtual environment is just an isolated environment for Python projects, ensuring that each project can have its own dependencies regardless of what dependencies other projects may have.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=62)** This command creates a virtual environment called pytorch_venv using the venv module.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=70)** When you create a virtual environment, this sets up a directory under your current working directory with the name of your virtual environment.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=78)** You can see the pytorch_venv directory here.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=81)** This is where all of the packages that we install in the virtual environment will be set up and stored.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=87)** Now, to activate the virtual environment, you'll run the source command pytorch_venv/bin/activate.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=93)** This will activate the virtual environment.
>
> **[1:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=95)** Notice that my prompt has changed.
>
> **[1:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=98)** The name of the virtual environment is now part of the prompt.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=102)** The same version of Python that I had installed on my local machine should now be available here in my virtual environment. It's possible to create virtual environments using different versions of Python, but I'm happy with the Python version that I have.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=115)** In order to be able to work within this virtual environment on a Jupyter Notebook, let's install the ipykernel module in Python.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=124)** Use pip install to install the latest version of ipykernel.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=128)** This is the Python package that provides the kernel for Jupyter Notebook and Jupyter Lab.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=134)** The kernel is just the computational engine that executes the code on the notebook.
>
> **[2:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=139)** Now, once we have this installed, run jupyter kernelspec list to see what Python kernels you have available.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=147)** You can see I have just the one Python 3.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=150)** I'll now install the kernel associated with my virtual environment using this command here, python -m ipykernel install the kernel with name pytorch_venv.
>
> **[2:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=160)** Remember, pytorch_venv is a folder in our current working directory, and it is that folder that will be used to set up the kernel.
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=169)** Thus, we have a kernel with our virtual environment available when we use Jupyter Notebooks.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=174)** Run jupyter kernelspec list once again, and you can see the pytorch_venv kernel.
>
> **[2:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=179)** That's the kernel that we'll use to run our code.
>
> **[3:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=182)** We are within our virtual environment.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=184)** We've installed the pytorch_venv kernel.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=187)** Let's bring up the Jupyter Notebook server so that we can work within Jupyter Notebook to build and train models using PyTorch and PyTorch Lightning.
>
> **[3:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=196)** Here, let's open up a new notebook, click on "New" and make sure that you choose pytorch_venv as the kernel that you want to run your code on.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=209)** If you choose this kernel, we'll be running within our virtual environment. On the top right, notice the kernel.
>
> **[3:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=215)** It's pytorch_venv.
>
> **[3:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=216)** If you happen to be in some other kernel and you need to switch, simply select the kernel dropdown menu here on this page, and there you'll find an option to switch your kernel.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=227)** Meanwhile, let's rename this notebook and give it a meaningful name.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=231)** Let's call this TrainingRegressionModelUsingPyTorch because first, we'll work with PyTorch, which is much more low-level and involves much more boilerplate in order to understand the different components that you'll use to build a neural network model and then we'll switch to PyTorch Lightning. In order to have more screen space for code, I'm going to toggle the header and toggle the toolbar here in this notebook.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=257)** So we are only left with the code cells.
>
> **[4:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-virtual-environment?u=76281980&t=261)** We don't have all this extra stuff here on top.

> [!info]- Semantic Content
>
> **CLI Commands:** python (13), make (2), pip (1), find (1)
> **Code Keywords:** let (6), switch (3), module (2)
> **Prerequisites:** install (7), set up (3), make sure you have (1)
> **Code Identifiers:** pytorch_venv (9)
> **Tools:** jupyter (8)
> **UI Navigation:** toggle (2), click on (1), select the (1), dropdown (1), switch to (1)
> **Versions:** python 3 (2), 10.9 (1)
> **Exercise Files:** boilerplate (3)

#### Loading and exploring regression data
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=0)** The first thing I'm going to do here is put in some code to ignore certain warnings in this notebook.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=7)** Now, generally, it's not a good practice to ignore warnings in your Python code, but at the time of this recording, the Seaborn Library throw some internal warnings which we can't really eliminate.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=18)** There is an issue being tracked for Seaborn right now.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=21)** The next release should fix it, but since I did not want the demo screen to be cluttered with warnings, I added these ignore statements at the very top of my code.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=30)** This is the issue that I refer to.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=33)** By the time you are watching this course, it's likely that it's fixed and you can just get rid of these warnings.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=38)** We'll be using the scikit-learn module in Python in order to preprocess our data.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=43)** So go ahead and pip install scikit-learn.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=46)** We'll use functions such as train, test, split, etc. to get training and test data to train our model.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=53)** So scikit-learn is a package that you'll need.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=56)** And I install this in the virtual environment.
>
> **[0:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=58)** Next, of course, we are going to be using PyTorch to train our model.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=62)** So you'll need to pip install the PyTorch framework, as well.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=66)** You can see the PyTorch framework version that I'm working on is 2.0.1.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=72)** Another PyTorch-related module that you need is Torch metrics.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=77)** This is the library that contains metrics to evaluate our model's mean square error for regression, no accuracy, precision, and recall for classification.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=86)** So make sure you pip install and have this module ready within your virtual environment.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=91)** Now within this virtual environment, I need to set up other commonly used libraries for data processing and analysis such as pandas.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=99)** So make sure you pip install pandas and have that available.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=103)** Another library that we need is the Seaborn Library.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=107)** This is what we'll use for visualization.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=109)** Seaborn depends on matplotlib, so the matplotlib library should also be installed.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=114)** Now that we have the libraries that we need, let's confirm the PyTorch version that we are using.
>
> **[2:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=120)** I'm running PyTorch version 2.0.1, so make sure you have a recent version of PyTorch greater than or equal to two in order to be able to run these demos.
>
> **[2:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=131)** I'll now set up a bunch of import statements for all of the libraries and classes that we need for this demo. I'll use NumPy, pandas, Seaborn, matplotlib, Torch, scikit-learn.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=144)** We won't go through these import statements right now, we'll discuss each class or function as we use it.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=150)** The dataset that we'll be using to train our regression model is an insurance charges dataset and is present here within this datasets directory.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=158)** Under my current working directory, you can see this insurance.csv file.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=163)** This is the file that I'm going to read into my notebook using pandas.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=168)** The dataset is fairly simple.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=170)** The records contain details of insurance, customers, age, gender, bmi, number of children, whether they smoke or not, and the region in which they live.
>
> **[3:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=180)** These are all the features of the data.
>
> **[3:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=182)** We'll try to use this information to predict how much they've been charged for insurance.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=187)** The label column is charges.
>
> **[3:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=189)** Like I said, this is a fairly simple and small dataset, perfect for training a simple regression model using PyTorch.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=197)** The shape of the data shows us that there are a total of 1338 records.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=202)** Let's make sure every column in this data is of the right type.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=205)** For that, I run the info method on a pandas data frame and you can see that the types are correct. Age, bmi, number of children, and charges are numeric columns, the remaining are string columns or categorical columns.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=219)** Let's just use a few visualization techniques to understand the data that we are working with.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=224)** Let's take a look at a histogram of the charges information.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=228)** You can see that for a vast majority of customers, the insurance charges tend to be under $15,000.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=235)** You can see that on the x-axis.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=237)** However, there are a few customers for whom insurance charges tend to be very high in the order of $40,000 to $50,000.
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=246)** In this dataset, all of the feature variables are relevant to predict the insurance charges for customers, but one of the most significant features is this smoker feature.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=258)** Whether you're a smoker or not, heavily influences your insurance charges.
>
> **[4:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=263)** You can see that for non-smokers, the insurance charges tend to be much lower than for smokers.
>
> **[4:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=268)** This boxplot makes that very clear.
>
> **[4:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=271)** Also, how old the customer is influences insurance charges.
>
> **[4:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=275)** You can see a scatterplot of insurance charges versus age, and there is a linear relationship.
>
> **[4:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=282)** You can see that insurance charges tend to increase with age.
>
> **[4:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=285)** But for each age, they seem to be different bands of charges.
>
> **[4:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=290)** Now that we've understood the data that we're working with, let's quickly split the data into training and test data using train_test_split. X features include all columns except charges, the Y values that we're trying to predict are the insurance charges.
>
> **[5:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-regression-data?u=76281980&t=304)** train_test_split will split the features and labels so that we have 80% of the data to train our neural network model and 20% of the data to validate the model. Thousand and seventy records for training and 268 records for validation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (3), throw (1), function (1), type. (1)
> **CLI Commands:** pip (4), make (4), python (2)
> **Prerequisites:** install (5), you'll need (2), set up (2), make sure you have (1)
> **Definitions:** is a  (3), is an  (1)
> **Versions:** 2.0.1 (1), version 2 (1), 0.1 (1)
> **Code Identifiers:** train_test_split (2)
> **Analogies:** such as (2)
> **File Paths:** insurance.csv (1)

#### Preprocessing data for training
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=0)** Now that we have training and validation data, the next step is to preprocess the data so that we can feed that into a machine learning model.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=10)** Now, neural network models and all machine learning models only understand numeric values.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=16)** You can't feed in strings to those models, which means you need to numerically encode all of your categorical variables, which may be represented as strings.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=26)** Now, there are different ways to numerically encode this data.
>
> **[0:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=28)** We'll use one-hot encoding.
>
> **[0:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=31)** There are three categorical columns in our data; sex, smoker, and region.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=36)** All of these are nominal categorical values.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=39)** That means that there is no inherent ordering across categories for any of these columns.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=45)** And so one-hot encoding is perfect in such a situation. We instantiate the one-hot encoder categorical transformer, handle unknown is ignored.
>
> **[0:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=55)** That is, if we encounter unknown values, this transformer will simply ignore them.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=60)** Drop is equal to first specifies the methodology to use to drop one of the categories in the feature.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=67)** Let's say the smoker column can have two possible values, yes or no.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=72)** In the final output, you'll have just one column, either smoker yes or smoker no with zero/one values indicating whether the customer is a smoker or not.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=82)** Sparse output set to false means that the resulting one-hot encoded values will not be in the sparse representation.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=89)** It will be a complete representation.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=91)** Let's instantiate a column transformer next to perform the preprocessing, and this column transformer uses the one-hot encoder for categorical values.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=101)** For the remaining numeric columns, we'll just pass through, meaning the numeric columns won't be affected, only the categorical columns will be affected.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=110)** Once we've instantiated the transformer, let's pre-process our data.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=115)** I call preprocessor.fit_transform on the training data, and using the computed values on the training data, we simply call transform on the validation data.
>
> **[2:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=125)** This ensures that the properties computed on the training data are what we use to transform the validation data, and we are left with eight features in our data after one-hot encoding.
>
> **[2:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=137)** Let's take a look at the training data and you'll find that it's just a NumPy array.
>
> **[2:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=141)** We don't have the corresponding columns.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=143)** If you want to understand this data, let's convert it to a temporary data frame and see how the data has been transformed.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=151)** So we have one column for gender, male, yes/no; one column for smoker, yes/no; and then columns for northwest, southeast, and southwest.
>
> **[2:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=160)** Notice that the categorical feature southeast, that column has been dropped.
>
> **[2:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=165)** A value of all zeros for northwest, southeast, and southwest essentially indicates that the region is southeast.
>
> **[2:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=173)** The numeric columns; age, bmi, and children, they have been passed through unaffected.
>
> **[3:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=180)** The Y values are still in the data frame format.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=183)** Let's convert those to the NumPy format, as well.
>
> **[3:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=186)** And from NumPy arrays, later on, we'll convert these to Torch tensors.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=190)** We haven't yet completed the preprocessing of our data.
>
> **[3:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=193)** We've converted all of the columns to numeric values.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=197)** And I'm now going to standard scale these numeric values.
>
> **[3:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=201)** Standard scaling involves converting all numeric values to z scores, that is, expressing every feature in terms of number of standard deviations from the mean.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=212)** When you feed in numeric values to neural networks, neural networks perform much better with smaller numeric values, and also when the individual features do not have wildly different ranges.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=225)** And standard scaling is one way to preserve the information in individual features, but also have them all centered around zero and expressed using small numeric values.
>
> **[3:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=236)** So I call fit_transform on the training data, and the mean and standard deviation computed on the training data will be used to transform the validation data.
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=246)** Notice I call just transform on X_val.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=249)** And now if you look at the training data, you can see that the numbers are very small, usually between -3 and +3.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=257)** Standard scaling or standardization computes the mean for each feature, subtracts the mean from every value, and then divides by the standard deviation so that the values are expressed in terms of z scores or number of standard deviations away from the mean.
>
> **[4:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=273)** Now, the Y values that we need to train our model are currently in the form of a single-dimensional array or a vector.
>
> **[4:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=281)** In order to feed them into a neural network, they need to be in the form of a multi-dimensional array.
>
> **[4:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=287)** So instead of a vector of length size, we'll have a multi-dimensional array of dimensions size comma one.
>
> **[4:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=294)** And that's what this reshape operation accomplishes.
>
> **[4:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=297)** It's the same Y values, the charges, in the form of a multi-dimensional array.
>
> **[5:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=303)** As I mentioned before, neural networks work better when you're dealing with small numeric values.
>
> **[5:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=310)** Now, our insurance charges vary from zero to about $50,000, $60,000.
>
> **[5:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=316)** These are not small numeric values.
>
> **[5:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=319)** And in order to make our neural network training more robust, more likely to converge, I'm going to use the min_max_scaler to scale all insurance charges to be expressed in the range zero to one.
>
> **[5:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=331)** That's what the min_max_scaler does by default.
>
> **[5:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=334)** Now, all insurance charges are expressed as values between zero and one.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=340)** We now have our input features and labels that we'll use to train our neural network.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=346)** However, they are in the NumPy format.
>
> **[5:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=349)** I'm now going to convert them to Torch tensors.
>
> **[5:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=352)** torch.from_numpy will convert NumPy arrays to Torch tensors.
>
> **[5:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=358)** Now, Torch tensors are the primary data structures used in PyTorch for building neural networks and other ML models.
>
> **[6:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=365)** Torch tensors are multi-dimensional arrays like NumPy, but they support distributed training using GPUs.
>
> **[6:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/preprocessing-data-for-training?u=76281980&t=372)** They are used in neural network training because they support automatic differentiation for gradient computation and essential part of the training process of a neural network.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (1), default. (1)
> **Code Identifiers:** fit_transform (2), min_max_scaler (2), from_numpy (1)
> **Definitions:** means that (2), is a  (1)
> **CLI Commands:** find (1), make (1)

#### Creating a simple neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=0)** At this point, our training data is processed and ready to be used to train a neural network model.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=6)** So the first thing we'll do is set up a very simple neural network.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=10)** In fact, the simplest possible neural network, one with just one neuron and no activation function.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=18)** So all this neural network will be able to learn is linear relationships in the data.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=23)** Since the dataset that we're using is a simple straightforward one, you'll find that this very simple neural network also does fairly well and can be used to build a fairly decent regression model.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=36)** Let's see how we set up this very simple neural network.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=39)** Here I've defined a class called SimpleNeuralNet that inherits from the PyTorch nn.Module class.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=46)** nn.Module is a base class for all neural networks that you'll build using PyTorch.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=52)** It gives you a wide range of functionality that makes the development and management of neural networks easier and more sustainable.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=59)** Within the init method of the nn.Module class, you'll specify the layers of the neural network.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=66)** Here are init method, takes in one input argument, the number of features in the training data, and within that we have just one layer, and that layer has just one neuron.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=78)** We instantiate that layer using the nn.Linear object.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=82)** Notice this linear layer takes in num features as input, that is all of the features in our training data, and has just one neuron.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=92)** You override the forward function in the base nn.Module class to specify the forward pass-through the neural network.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=100)** Notice the forward function here takes in the record as an input argument, that is, a training data and essentially invokes the linear layer on the training data.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=111)** So you're passing the input data through that linear layer.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=115)** And this transformed output x is what we return.
>
> **[1:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=118)** The nn.Module class gives you other bits of functionality that will be useful, such as moving all of the parameters of the neural network to a CPU or GPU device so that it can be trained on that device.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=130)** Now that we have our very first simple neural network, let's explore and understand it.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=135)** Let's instantiate the neural network.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=138)** The number of features that we have are eight.
>
> **[2:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=140)** Remember that's the number of columns in the X train data.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=144)** Printing out the neural network will give us a string representation of the layers in the net.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=150)** We have just one linear layer with a single neuron and no activation function.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=156)** Before a neural network is trained, these weights and biases are initialized to random values.
>
> **[2:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=162)** You can actually access the weights and biases of each layer by running a for loop through the layers in your model.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=170)** Here, for every linear layer in the model, we have just one.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=174)** I print out the weights and biases, and you can see that there are eight weights corresponding to the eight features that are going to be fed into the single neuron in our linear layer and one bias value.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=187)** These weights and biases are the model parameters that will be found during the training process of the model.
>
> **[3:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=193)** These weights and biases will converge to some values, allowing the model to make predictions.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=200)** You can actually count the number of parameters that this model is going to train.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=204)** Here is a count parameters function that will help us do that.
>
> **[3:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=208)** You can iterate over all of the model parameters by accessing the parameters function on the model, and if the parameter requires gradients, that is, gradients will be computed, you know that it's a trainable parameter.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=222)** And by running this, you see that we have a total of nine trainable parameters for this very simple neural network, eight weights and one bias.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=230)** Training a neural network involves using a loss function.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=235)** This loss determines how good the neural network is at any point in time.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=239)** You can think of the loss as representing how far away the predictions of the neural network are from the actual target values.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=249)** Since this is a regression model, the loss function that we'll use is going to be the mean squared error loss available in F.mse_loss.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=258)** Let's compute the loss on predictions made by our untrained model.
>
> **[4:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=263)** Notice that we pass train inputs through the model and then compare those predictions with the train targets.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=270)** And then we compute the loss function.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=272)** And the loss here is 0.5406.
>
> **[4:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=275)** The loss is not really meaningful unless we see how the loss falls as we train the model.
>
> **[4:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=281)** But this is just to show you how the loss function is computed.
>
> **[4:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=285)** Let's get and view the predictions from our model at this point in time.
>
> **[4:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=289)** Remember we haven't trained the model at all.
>
> **[4:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=291)** The model parameters all have random values.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=293)** So these predictions are actually just random predictions.
>
> **[4:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=297)** What we are seeing here is some of the steps that we'll be performing during the model training process.
>
> **[5:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=303)** Once the model has been trained and we get the final predictions from the model, we'll evaluate the model using the r-square score and by computing the mean squared error.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=314)** The R2Score and the MeanSquaredError classes are available as a part of Torch metrics regression.
>
> **[5:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=320)** We instantiate those objects, MSE and r2score, and we compute these values on Lines 8 and 9 by passing in the predictions from the model and the actual target values.
>
> **[5:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=332)** Again, remember the model has not been trained.
>
> **[5:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=335)** So both the mean squared error, that's just the loss, and the r squared will essentially have random values.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-simple-neural-network?u=76281980&t=340)** The r squared is actually negative.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (5), module (5), pass (2), class. (1)
> **Definitions:** is a  (4)
> **Env Vars:** cpu (1), gpu (1), mse (1)
> **CLI Commands:** find (1), make (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** mse_loss (1)
> **Versions:** 0.5406 (1)
> **Analogies:** such as (1)

#### Setting up the dataset and DataLoader
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=0)** In order to feed our training data into our PyTorch neural network in batches, we are going to be using a tensor dataset and a tensor DataLoader. In PyTorch, the dataset and DataLoader are foundational classes provided by the torch.utils.data module.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=18)** These facilitate the loading, processing, and batching of data.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=23)** Dataset is an abstract base class in PyTorch and we'll be using the derived tensor dataset class.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=30)** You can think of a dataset as representing a collection of data items.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=34)** And this tensor dataset that we've instantiated here holds our training data.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=39)** We instantiate a tensor dataset using the train inputs and train targets, and here are the first five records in the tensor dataset.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=48)** Just a heads up that here we've used one of the built-in dataset classes, the tensor dataset, but it's also possible for you to create your own custom dataset by deriving from the dataset base class.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=60)** Once we've set up a dataset, when we actually access the training data to train our model, we'll want to load the data in batches.
>
> **[1:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=68)** We may want to shuffle the data or use multiple workers to speed up data loading.
>
> **[1:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=74)** All of that is done via the DataLoader.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=76)** I've instantiated a DataLoader here and specified a batch size of 8. For the training data, I've also set shuffle equal to true.
>
> **[1:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=85)** So when we feed the data into our model for training, it will be shuffled.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=89)** It will not come in any predictable pattern.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=92)** The DataLoader is an iterable that allows us to iterate over the data in batches. On Line 5 you can see I create an iterator and call next on it, and this will allow us to see the first batch of training data.
>
> **[1:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=105)** Notice that we have eight records here because we specified batch Size 8.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=110)** We've now created a dataset and DataLoader for our training data.
>
> **[1:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=113)** Let's do the same for validation data.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=116)** First, we convert X and Y value to the tensor format.
>
> **[2:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=120)** And once that's done, we'll instantiate a tensor dataset for our validation data.
>
> **[2:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=125)** And then we'll instantiate a DataLoader using this tensor dataset.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=130)** Notice that when we instantiate a DataLoader for the validation data, I haven't specified shuffle equal to true.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=136)** Validation data is only used to evaluate the model and does not need shuffling.
>
> **[2:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/setting-up-the-dataset-and-dataloader?u=76281980&t=141)** Here is the first batch of records from the validation data.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (2), module (1), abstract (1), let (1)
> **Definitions:** is an  (2)
> **Warnings:** heads up (1)
> **Prerequisites:** set up (1)

#### Training a neural network using PyTorch
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=1)** We are now ready to start training our neural network.
>
> **[0:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=3)** I'm going to set up a dictionary called loss_stats which will hold the values of the training loss and validation loss for each epoch.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=12)** We'll run 100 epochs of training and epoch, as you likely already know, is one pass through the entire training data.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=19)** The next thing we need to do is figure out on what device we'll run this training.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=24)** Now, because I'm running on my local machine, I do not have access to a GPU, but it's possible that you are running this on Google Colab or a machine where a GPU is available.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=35)** What we are doing here is a check to see whether a GPU is available.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=39)** If it is, we'll use the GPU.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=40)** Otherwise, we'll use the CPU.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=43)** So if torch.cuda.is_available returns true, that is, we have a GPU, then the device will be CUDA.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=51)** If torch.backends.mps.is_available is true, this means that the new metal performance shaders backend for GPU training and acceleration is available on your machine, so the device will be mps.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=65)** This is likely to be available if you're working on a new Mac device, or if neither of these options is true, we'll just go with CPU training and device will be CPU.
>
> **[1:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=75)** You can see here that we're using the CPU device because I do not have a GPU available.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=80)** We'll now instantiate and train our neural network using PyTorch.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=84)** Remember PyTorch is a lower-level API and it does not abstract us away from the details of neural network training.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=92)** And there will be a lot of boilerplate code involved.
>
> **[1:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=95)** I instantiate the simple neural network num features is equal to eight, and I call to device in order to move the model parameters of the neural network to whatever device we are using for training either CPU or GPU.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=109)** Moving to the device that you're using for training is a part of PyTorch's boilerplate.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=116)** For all of your training data and your model, you have to move them to the right device so that the training occurs on the right device.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=123)** The objective of training a neural network is to update your model parameters for every iteration of training, so as to minimize the loss function.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=134)** In PyTorch, it's the optimizer that actually updates the model parameters using gradient values.
>
> **[2:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=141)** So I've instantiated an optimizer for that purpose.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=144)** The optimizer I've used here is the SGD or the stochastic gradient descent optimizer.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=150)** There are several different optimizers available as a part of the PyTorch framework.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=155)** SGD is a commonly used straightforward optimizer.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=158)** The optimizer takes in the model parameters that need to be updated, as well as the learning rate, which are set to 10^-2.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=167)** The learning rate determines the step size for how the model parameters converge to their optimal values.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=174)** Too larger step size, your model may not converge, too smaller learning rate, and your model may take too long to converge.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=181)** This 0.01 works well for this particular model, and that's why I've selected it.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=187)** Next, let's set up the training loop for our model.
>
> **[3:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=191)** And here is where you'll really see the boilerplate code.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=194)** And you'll find that when we use PyTorch Lightning in the next demo, most of this code will be eliminated.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=200)** First, I have a for loop to iterate over the number of epochs of training that we'll run.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=205)** I initialize the training epoch loss to zero, we'll reset this for every epoch, and then we make sure that the model is in training mode by calling model.train.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=217)** In the training mode, gradients will be computed so that model parameters can be updated using those gradients.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=224)** Gradients are just partial derivatives of the loss function with respect to individual model parameters, and these partial derivatives are used to determine how model parameters should be tweaked to minimize the loss function.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=239)** This is all you need to understand conceptually about gradients.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=243)** For every epoch, we run another for loop, iterating over each batch of the training data.
>
> **[4:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=248)** This is on Line 7.
>
> **[4:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=250)** Now, for each batch of training, we zero out the optimizers gradients so that gradients that were computed previously do not affect this particular batch.
>
> **[4:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=259)** On Lines 12 and 13, we move our training data to the device that we are using for training, whether it's a GPU or a CPU.
>
> **[4:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=268)** Notice the boilerplate to device code here.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=272)** Next, we make a forward pass through the model, this is on Line 16, for the first batch of training data and get predictions.
>
> **[4:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=280)** This forward pass uses the current value of the model parameters.
>
> **[4:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=284)** We then compute the loss of the model at this stage by invoking the loss function, which takes in the prediction and the Y values, and then we perform a gradient descent.
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=295)** We make a backward pass-through the model by calling train_loss.backward.
>
> **[5:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=300)** This is where gradients are computed, are partial derivatives, and optimizer.step will then use those gradients to tweak our model parameter values.
>
> **[5:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=310)** And then on Line 25, we add the current training loss for this batch to the training loss of the epoch as a whole.
>
> **[5:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=319)** All of the steps you see from Line 9 through Line 25 is repeated for every batch of data in each epoch.
>
> **[5:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=327)** Model parameters will be updated for every batch in each epoch, and the loss function will be minimized to improve the model.
>
> **[5:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=336)** After each epoch of training, we'll run the validation data through the model and evaluate the model's performance.
>
> **[5:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=344)** You can see the with torch.no_grad with block on Line 28, that's within the outer for loop for the epoch, but outside of the for loop for the individual batches of training.
>
> **[5:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=356)** The torch.no_grad method turns off gradient computation for the model, so gradients will not be computed when we pass through the validation data.
>
> **[6:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=366)** I initialize the validation epoch loss to zero on Line 30, and on Line 32, we switch the model over to the evaluation state by calling model.eval.
>
> **[6:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=376)** This is the state for evaluating the model.
>
> **[6:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=378)** Then once again I have a nested for loop where we iterate over the batches of validation data.
>
> **[6:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=385)** On Lines 36 and 37, we move the validation data to the device that we are using for training, CPU or GPU.
>
> **[6:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=392)** We get the predictions on the validation data on Line 39, compute the loss on Line 41, and we add the loss of this batch to the validation epoch loss.
>
> **[6:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=403)** On Lines 45 and 46, we compute the training loss and validation loss for the entire epoch, and then append that information to our loss stats dictionary.
>
> **[6:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=414)** This is on Lines 48 and 49. On Line 51, for each epoch, we print out the training loss and the validation loss.
>
> **[7:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=423)** And that's it.
>
> **[7:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=424)** This is the training process.
>
> **[7:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=425)** It's simple, but there is really a lot of boilerplate code involved.
>
> **[7:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=429)** Let's look at the output of training. Because this is a very simple neural network, training runs through very quickly.
>
> **[7:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=437)** You can see that after the first epoch of training, training loss was at 0.07 and validation at 0.01, but then training loss falls to 0.011, validation loss falls to 0.008. Training loss further falls to 0.010 and stays there for the remaining epochs.
>
> **[7:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-neural-network-using-pytorch?u=76281980&t=457)** That is the lowest value of loss for this particular neural network that our model was able to achieve.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (10), cpu (7), sgd (2), cuda (1), api (1)
> **Code Keywords:** pass (5), function (5), let (2), abstract (1), switch (1)
> **Code Identifiers:** is_available (2), no_grad (2), loss_stats (1), train_loss (1)
> **Versions:** 0.01 (2), 0.07 (1), 0.011 (1), 0.008 (1), 0.010 (1)
> **Definitions:** is a  (5), means that (1)
> **Exercise Files:** boilerplate (5)
> **CLI Commands:** make (3), find (1)
> **Prerequisites:** set up (2)

#### Visualizing losses and evaluating models
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=1)** Now that we have a trained model, let's visualize how the training loss and validation loss change over epochs of training.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=8)** And for that, I'm going to set up a data frame with the training loss and validation loss along with the epochs.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=14)** This information is available in the loss statistics that we've manually populated in the training process.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=20)** And we now have this in the form of a data frame.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=23)** We have the epochs, then whether it's training or validation loss and the corresponding value. The head shows us all of the training losses, and the tail of this data frame contains all of the validation losses.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=36)** Now with this information in the data frame format, visualizing this using a Seaborn lineplot is very straightforward.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=45)** We'll have epochs on the x-axis and training and validation losses on the y-axis.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=50)** And here is what the line chart looks like.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=52)** The training loss and the validation loss falls drastically in the first two or three epochs, but remains constant after that.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=61)** Two to three epochs of training was sufficient for this model.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=64)** The model does not improve beyond that.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=67)** Let's now compute the R-square score of the model on the validation data.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=72)** Ideally, we should have a separate test dataset for this purpose, but because the dataset was fairly small, let's just do it with the validation data.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=80)** We turn off gradients with torch.no_grad, switch the model to eval mode, model.eval, and we iterate over every batch in the validation data.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=89)** Move the features to the device.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=91)** This is on Line 9.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=93)** Get the predictions from the model. y_pred will hold the predictions from the model, y_true will hold the labels from the actual data.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=100)** Let's quickly look at the format of the actual data that is in y_true.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=106)** What we have here is a list of tensors where each tensor contains a prediction for one batch of data.
>
> **[1:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=113)** You can check this out on your own.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=115)** The prediction data will also be in the same format.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=119)** I'll now perform a torch.stack operation that will give us the actual values in the form of a single tensor, rather than a list of tensors.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=130)** This is what torch.stack outputs.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=133)** I now have a single tensor with all actual values.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=136)** I'll use torch.stack on the predicted values so that we now have a single tensor with all predicted values, as well.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=144)** Now that the data is in this form, let's compute the mean squared error and R-square score for this model on the validation data.
>
> **[2:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=153)** I instantiate mean squared error and R-square score and move those to the device as well and compute the two values.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/visualizing-losses-and-evaluating-models?u=76281980&t=159)** You can see that the R-square of this model is 0.797, which is a fairly good score.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), switch (1)
> **Code Identifiers:** y_true (2), no_grad (1), y_pred (1)
> **Definitions:** is a  (2)
> **Versions:** 0.797 (1)
> **Prerequisites:** set up (1)

#### Building and training a more complex neural network
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=0)** What I've done here is scroll back up in our Jupyter Notebook to where we had defined our simple neural network.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=8)** Remember we mentioned that this neural network contains just a single linear neuron with no activation function.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=15)** When you use a neural network with a single neuron, essentially what you're doing is performing linear regression that you would with a traditional machine learning library such as scikit-learn.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=25)** I'm now going to replace this neural network to have a more complex one with several layers and interconnections.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=33)** I've still called it SimpleNeuralNet.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=35)** We still inherit from the nn.Module base class, but you can see that overall the neural network has many more layers.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=43)** The layers are defined in the init method.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=46)** We take in the number of features as an input argument, and Layer 1 comprises of 16 neurons.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=53)** Notice I instantiate nn.Linear num features, that is, the input and the number of neurons is 16.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=60)** Layer 1 is the first layer in our neural network.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=63)** The output of this linear layer will be fed to the second linear layer.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=69)** This is Layer 2 instantiated once again using nn.Linear.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=73)** The dimensionality of the inputs to the second layer is 16, and this needs to match the number of neurons in the previous layer.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=82)** So Layer 1 has 16 neurons and this matches the number of input features fed into Layer 2.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=89)** Remember this is because the output of Layer 1 is fed into Layer 2.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=93)** The number of neurons in Layer 2 is 32.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=96)** And then we have Layer 3, the third linear layer in our neural network.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=102)** The input features to the third linear layer is 32, and this should match the number of neurons in the previous layer which is 32.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=111)** Layer 3 has just 16 neurons.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=115)** And then finally, we have the last linear layer, that is the output layer, layer out.
>
> **[2:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=120)** It accepts 16 input features as input and produces just one output.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=127)** The 16 features as input corresponds to the 16 neurons in the previous layer.
>
> **[2:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=132)** Each of the three layers; Layer 1, Layer 2, Layer 3 have an activation function, and the activation function that I've chosen here is ReLU activation.
>
> **[2:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=143)** Activation functions are what allow us to learn nonlinear relationships that might exist in the data.
>
> **[2:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=149)** Now, the forward function defines the forward pass-through the neural network.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=155)** We receive the inputs as an input argument to this forward function, we apply Layer 1 and then the ReLU activation function.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=163)** Then the outputs are then passed through to Layer 2, and then ReLU activation again.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=168)** And the outputs are passed through to Layer 3, and we have the ReLU activation yet again. The transformed data after passing through three layers is finally passed through the output layer.
>
> **[2:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=179)** And the output layer's prediction is what we return from the forward pass.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=184)** The predict method is invoked when you use this model to get predictions.
>
> **[3:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=189)** And the predict method makes the same forward pass-through the neural network.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=194)** Now, let's quickly execute all of the remaining steps here in this Jupyter Notebook.
>
> **[3:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=199)** Here is a representation of the model, three linear layers and output layer and ReLU activation.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=205)** Now this model will have many more parameters since we have a large number of layers and many interconnections between layers.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=214)** The weights and biases of each layer have been initialized to random values.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=219)** Let's count the number of parameters in this model, and you can see that this model has 1233 parameters.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=227)** You are familiar with the remaining steps here.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=230)** I'll just quickly execute them and let's go directly to where we set up the dataset and DataLoader and train our model.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=239)** Here is where we instantiate the dataset.
>
> **[4:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=241)** You've already seen how that works before.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=243)** And once we have the dataset, we set up the DataLoader.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=247)** This is for the training data.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=249)** We do the exact same thing for the validation data, as well.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=253)** Set up the dataset and the DataLoader.
>
> **[4:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=255)** Again, we initialize the loss_stats dictionary and we'll train for 100 epochs.
>
> **[4:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=260)** We then see what device is available and that is stored in the device variable.
>
> **[4:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=266)** Now that we've set all this up, instantiate the simple neural network and move the model parameters to the device that we're using for training.
>
> **[4:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=274)** Once again, initialize the optimizer, which will update the model parameters during the training process.
>
> **[4:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=281)** Next, we actually train the model.
>
> **[4:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=284)** We train for 100 epochs, and after each epoch, we pass the validation dataset through the model and compute the validation loss.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=293)** I'm going to kickstart the training process and let's see how this more complex neural network performs.
>
> **[4:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=299)** You can see that initially our training loss was 0.041, the validation loss is the same.
>
> **[5:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=305)** And as we run through epochs of training, notice how both the training loss and the validation loss drops.
>
> **[5:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=313)** Until at the very end, after about 99 epochs, our training loss is 0.007 and validation loss 0.005.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=321)** Let's set up the data frame with the training loss and the validation loss so that we can plot and visualize the values.
>
> **[5:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=330)** Execute this visualization code and you'll be able to see how the training loss and validation loss fall over epochs of training.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=340)** Both losses fall until about 45 epochs of training, after which they remain fairly steady.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=346)** I'll hit "Shift-Enter" to get the predictions from the model and the actual values from the data.
>
> **[5:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=352)** I'll use torch.stack to get the predictions and the actual values in a single tensor.
>
> **[5:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=358)** And let's compute the R-square and the mean squared error.
>
> **[6:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=362)** Notice the R-square score has gone up.
>
> **[6:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=364)** It's now 0.881.
>
> **[6:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/building-and-training-a-more-complex-neural-network?u=76281980&t=366)** So a more complex neural network that included an activation function improve the performance of our model.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (6), pass (4), module (1), class, (1)
> **Versions:** 0.041 (1), 0.007 (1), 0.005 (1), 0.881 (1)
> **Prerequisites:** set up (3)
> **Tools:** jupyter (2)
> **Code Identifiers:** loss_stats (1)
> **Cross-References:** we mentioned (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)


### 2. Using PyTorch Lightning to Build a Regression Model

#### Encapsulating data using a LightningDataModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=0)** At this point, we've successfully built and trained a neural network to perform regression, but we used PyTorch and not PyTorch Lightning.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=9)** It was important that you see how the model is built using PyTorch first, so that you can see how much cleaner our code is when we use PyTorch Lightning. We'll eliminate most of the boilerplate code that you saw for training loops and feeding data in batches, iterating through number of epochs, moving model parameters, and data to the right device.
>
> **[0:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=31)** All of that code will just disappear, and we'll build our model in a very clean manner with PyTorch Lightning.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=37)** PyTorch Lightning is a lightweight PyTorch wrapper that helps researchers and developers organize their PyTorch code and streamline the training process.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=46)** PyTorch Lightning eliminates boilerplate code, simplifies the training loop, and provides a more structured approach to PyTorch programming without compromising flexibility.
>
> **[0:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=57)** Pip install lightning to get PyTorch Lightning installed on your local machine. You need the lightning module in addition to the PyTorch framework that we've already installed.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=69)** Let's go ahead and set up the import statements for the various libraries that we'll be using.
>
> **[1:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=75)** The imports here are the same as in the previous demo, but I have a few additional imports for PyTorch Lightning.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=81)** The one on Line 9, you can see import lightning.pytorch as pl.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=86)** In addition to abstracting away the training process of a neural network, the training loop, and other code associated with it, PyTorch Lightning also makes available the lightning data module.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=100)** pl.LightningDataModule allows us to abstract and organize the data-related aspects of our deep learning model.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=108)** It's a way to decouple the data processing steps, the loading, preprocessing, and splitting of data from the model training logic.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=115)** When we structure all of our data processing tasks to be encapsulated within a lightning data module class, we are centralizing all data-related operations in one place and encapsulating all of our code to make it more modular and reusable.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=134)** Here, I've specified the skeleton of the insurance data module class that inherits from pl.LightningDataModule.
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=142)** And you can see that there are several functions of the base class that I'm about to override.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=147)** The functions have all been named in very meaningful way.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=151)** So you know exactly what goes in each of these functions.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=154)** Let's start by adding in the code for the init method here in this insurance data module.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=159)** This is where we'll initialize various parameters we may want to use with the data.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=164)** The only one we have is the batch size. In the prepare_data function is where you access the data wherever it's stored, maybe you'll need to download the data, and you can also perform a little bit of preprocessing if needed.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=177)** The only thing I do here is to read in the insurance.csv file into a pandas data frame insurance data.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=184)** This method is not invoked in a distributed manner and usually called on a single GPU.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=190)** Next, we have setup.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=192)** This is where you will split the dataset and apply whatever transformations and pre-processing that you need.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=198)** This will be called on every GPU separately.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=202)** An input argument to the setup function is what stage the model is currently running.
>
> **[3:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=208)** This can be the fit stage, that is, training or it can be the validation or test stages.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=214)** Here we are keeping things simple, so I'll apply the data transformations all in the fit stage or the training stage of the model.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=222)** The data transformation operations that you see here should all be very familiar to you because these are the steps we carried out in the previous demo.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=230)** On Lines 9 and 10, we extract the X features and Y values.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=235)** On Line 12, I check whether the stage is fit or stage is none.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=239)** So in the training phase, we split the data into training and validation.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=244)** This is on Lines 13 and 14.
>
> **[4:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=246)** The code on Lines 16 through 28 is where we one-hot encode the categorical features in our data.
>
> **[4:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=254)** On Lines 30 and 31, we convert the Y values to NumPy arrays. On Line 33 through 36, we standard scale our features. On Lines 38 through 41, we minmax scale our targets.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=270)** That is the Y values. And on Lines 43 through 47, we convert all our NumPy arrays into tensors.
>
> **[4:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=278)** We'll feed in data to our model in the form of tensors.
>
> **[4:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=282)** The training and validation data are available as member variables of this class; train_inputs, train_targets, val_inputs, and val_targets.
>
> **[4:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=290)** The feature and target tensors need to be instantiated as DataLoaders.
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=295)** The train_dataloader method returns the DataLoader for the training data.
>
> **[5:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=300)** The steps here are again familiar.
>
> **[5:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=302)** We instantiate a tensor dataset, and using that, we instantiate a DataLoader.
>
> **[5:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=309)** Notice that I've specified num workers equal to four for the DataLoader.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=314)** This is because I have four cores on my machine, and this will allow me to load data in parallel using those four cores.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=321)** The train_dataloader function returns an instance of the DataLoader for the training data. In exactly the same way, I've overridden the val_dataloader function.
>
> **[5:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=332)** This is just a DataLoader for the validation data.
>
> **[5:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=335)** We instantiate a tensor dataset and use that to instantiate a validation DataLoader.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=340)** num_workers, again, set to four, so that four workers running on four cores can be used to load this data.
>
> **[5:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=347)** When we actually train our model, this insurance data module will be passed in as an input argument to the trainer object that we'll use.
>
> **[5:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=357)** And the individual methods of this data module will be invoked at the right point in time to get access to the right bits of data needed for training and validation.
>
> **[6:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=368)** Let's just make sure that the insurance data module works as expected.
>
> **[6:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=372)** I'm going to create an object of the insurance data module.
>
> **[6:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=375)** Let's now call prepare data and set up manually so that the data is available.
>
> **[6:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=381)** And now I'm going to invoke the train_dataloader, and I'll print out one batch of the training data.
>
> **[6:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=388)** And you can see that there are eight records in this batch.
>
> **[6:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=391)** In a similar way, let me access the val_dataloader and I'll print out one batch of the validation data, as well.
>
> **[6:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=398)** And we have eight records in this batch.
>
> **[6:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-data-using-a-lightningdatamodule?u=76281980&t=400)** Observe how by using a data module to manage all of the data preparation and processing operations, we've created a modular bit of code that can be reused anywhere.

> [!info]- Semantic Content
>
> **Code Keywords:** module (10), let (5), function (4), abstract (1), class, (1)
> **Code Identifiers:** train_dataloader (3), val_dataloader (2), prepare_data (1), train_inputs (1), train_targets (1)
> **Prerequisites:** set up (2), setup (2), install (1), you'll need (1)
> **CLI Commands:** make (2), pip (1)
> **Exercise Files:** boilerplate (2), download the (1)
> **Env Vars:** gpu (2)
> **File Paths:** insurance.csv (1)
> **Definitions:** is a  (1)

#### Encapsulating a model using a LightningModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=0)** In the previous demo, we built a simple regression model using PyTorch.
>
> **[0:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=5)** Now in this demo, I'm going to build the same neural network that we used before, but this time I'm going to use PyTorch Lightning.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=14)** What I've defined here on screen is the skeleton of a class that derives from pl.LightningModule.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=21)** Just like the lightning data module encapsulates all of the data-related operations, a lightning module is a fundamental class in PyTorch Lightning that encapsulates everything related to our deep learning model.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=35)** It extends the functionality of the nn.Module class that we used in PyTorch to build up our neural network.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=42)** The lightning module adds additional methods and structures that streamline the training, validation, testing, and prediction processes of the model.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=51)** A lightning module organizes your PyTorch code into different sections, and each section is a different method that you override from the lightning module base class.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=62)** You can see that I have six different methods here.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=65)** These correspond to the six different sections into which lightning module organizes your code.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=71)** Let's look at and understand each of these step by step, starting with init. The init method, and in addition, there is also a setup method that I've not overridden, this is where you'll define your module. Whatever we had specified in the nn.Module init method, I've essentially moved that code in here to the init method of lightning module.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=93)** The init method takes in a number of parameters for the model, num features is the number of input features and the learning rate, which I've set to 0.01.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=103)** This learning rate parameter will be used by the optimizer that we'll instantiate.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=108)** Now within the init method, you can see I've set up the layers of the neural network.
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=112)** There are three layers, and then the final output layer. And the activation function that we'll use for the three layers is the ReLU activation.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=121)** This network is exactly the same network that we've used in our earlier demo.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=126)** An interesting thing to note here is the code on Line 11 where I call self.save_hyperparameters.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=133)** save_hyperparameters is a method in the lightning module base class.
>
> **[2:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=137)** When you invoke self.save_hyperparameters here in the init method, all of the input arguments to init, here we have two, num features and learning rate, will be saved as hyperparameters and will be accessible via the self.hparams object.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=156)** Let me explain what I mean by adding the code here in the configure optimizers method.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=161)** This is the method where you will instantiate and set up any optimizers and schedulers that you use to train your model.
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=169)** I once again use the stochastic gradient descent optimizer, SGD, I pass in the parameters of the model available in self.parameters, and I pass in the learning rate of the optimizer using self.hparams.learning rate.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=185)** The learning rate that we passed in as an input argument to init on Line 3 has been saved in this hparams object that we access here on Line 13 because we invoked self.save_hyperparameters on line 11. self.save_hyperparameters thus saves all input arguments that you pass into init.
>
> **[3:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=208)** The forward function is where you define the forward pass-through the neural network, and here we define the same forward pass as we did before in PyTorch. We pass the inputs through the three linear layers.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=220)** Each layer has the ReLU activation.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=222)** And then finally, we pass through the last output layer and return the final value.
>
> **[3:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=229)** Now if you remember in PyTorch, we set up a training loop, and within that, we define the training process of a model.
>
> **[3:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=236)** This is what you'll define here in training step.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=239)** This training step function will be invoked in a loop.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=244)** What you define here are the operations that need to be performed on a single batch of training data.
>
> **[4:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=251)** You can see the input arguments a batch of data is passed in.
>
> **[4:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=254)** We access the X features and Y values from this batch.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=258)** We make a forward pass through the model by calling self.forward on the X features.
>
> **[4:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=264)** On Lines 26 and 27, we instantiate the mean squared error loss function and compute the loss for this batch of predictions.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=272)** And then we simply call self.log and log the loss out.
>
> **[4:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=277)** Actually, displaying the loss on screen and logging it out, well, PyTorch Lightning will take care of that automatically.
>
> **[4:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=284)** To define the validation process of your model, you'll simply specify validation on one batch of data here in the validation step method.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=293)** Well, validation is straightforward.
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=295)** Once again, we make a forward pass with a batch of data using self.forward, we compute the mean squared error loss on the validation data using the loss function, and we log out the validation loss.
>
> **[5:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=307)** And we have a predict step that you can override here.
>
> **[5:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=310)** In order to make predictions on the data, we access the X variables and Y values from the batch and simply make a forward pass through the model to get predictions.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=321)** You can see here that the entire model training code, without the additional boilerplate of moving the model to a device or the training loop, has been encapsulated here in one class.
>
> **[5:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=332)** Let me just instantiate and print out a string representation of our model defined in this lightning module class.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/encapsulating-a-model-using-a-lightningmodule?u=76281980&t=340)** And in the next movie, we'll see how we will actually train a model using PyTorch Lightning.

> [!info]- Semantic Content
>
> **Code Keywords:** module (12), self (10), pass (10), function (5), class. (4)
> **Code Identifiers:** save_hyperparameters (5)
> **Prerequisites:** set up (3), setup (1), configure (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (3)
> **Env Vars:** sgd (1)
> **Versions:** 0.01 (1)
> **Cross-References:** in the next (1)

#### Training the model using the PyTorch Lightning Trainer
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=1)** We've defined our model, our training step, and validation step nicely encapsulated in a PyTorch Lightning module, and we are now ready to train our model.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=12)** If you remember in PyTorch, you had to write a lot of code to actually train your model and get validation metrics for your model after each epoch.
>
> **[0:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=22)** In addition, in order to ensure that your model trains on a GPU, if a GPU is present, you had to also move the model parameters as well as the X and Y values that you're using to train your model to the right device for training.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=37)** Now, keep all of that in mind while we see how easy it is to train a model using PyTorch Lightning.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=45)** You see those five lines of code here on screen, including the import statement, well, that's all the code you need to run a training loop, run validation at the end of every epoch, and display all of that nicely to screen.
>
> **[0:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=58)** No nested for loops, no moving the model to the right device, no loss computation on training and validation data, no optimizer step, no loss.backward.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=69)** Nothing.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=69)** So what's the code that we write?
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=71)** First, let's take a look at the import statement, where I import a CSVLogger that will log the details of the training process out to screen in a CSV format.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=81)** Next, I instantiate the insurance data module class, which encapsulates all of the data preparation and processing operations for the data that I plan to use to train the model.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=93)** Next, on Line 5, I instantiate a CSVLogger class to write the logs out to the logs subfolder under my current working directory.
>
> **[1:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=104)** The actual training process will be taken care of by the pl.Trainer class.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=110)** This is a central class that manages and automates the entire training process, and abstracts away a lot of the boilerplate code typically associated with training loops, distributed training, and evaluation.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=123)** I instantiate the trainer, specify I want to run a maximum of 50 epochs of training, passing the CSVLogger so that logs are generated in my current working directory.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=133)** And that's it.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=134)** I call trainer.fit.
>
> **[2:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=137)** Trainer.fit takes in an instance of a lightning module, that is the model that we want to train, and a data module, that is a data set we should use for training.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=147)** Trainer.fit will invoke the right methods on the model class, as well as the data class to get the right data for training and validation, and it will run the training process for 50 epochs.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=161)** Our training process has begun.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=163)** Observed that the trainer automatically checks to see whether a GPU or a TPU is available.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=170)** If not, it will just run training on the CPU.
>
> **[2:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=173)** The trainer also shows you the number of trainable parameters in the model.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=177)** We had manually computed this earlier in PyTorch. We have about 1.2K or 1200 parameters.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=184)** As the training process continues, you'll see for every epoch of training, the trainer prints out the epoch, so you can see Epoch 16 here on screen, the training loss at this epoch, and the validation loss at this epoch.
>
> **[3:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=199)** We had set show progress bar to true when we logged out our training loss and validation loss.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=204)** And that's why you see these progress bars on screen, as well. At Epoch 49 are 50th epoch, the training process is complete.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=214)** The training loss at this point in time is 0.00598, and the validation loss is 0.00477.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=222)** Now that we have a trained model, let's see how easy it is to get predictions from the model. I call trainer.predict, pass the model in, and specify the validation DataLoader as the DataLoader for the data for which I want predictions.
>
> **[3:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=238)** And you can see the predictions from the model output here on screen.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=242)** The output format of predictions gives us every batch of predictions in a separate tensor.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=247)** Let's get all of these in a stacked format by using torch.cat to concatenate them.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=253)** This will give us a single tensor with all the predictions from our model for the validation data.
>
> **[4:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=260)** In order to compute metrics for the model, I need the actual values or the labels from the validation data as well, and I extract this by using a for loop.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=270)** Now that I have this, let's stack the labels as well so we get a single tensor with all of the labels from our data.
>
> **[4:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=279)** Now that we have the predictions as well as the labels, all that's left to do is to compute the mean squared error and the R-square score for this model.
>
> **[4:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=288)** And since this is the exact same neural network as the one we built in PyTorch, the R-square score is also the same 0.882.
>
> **[4:57](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=297)** If you remember, we passed in a CSVLogger to the pl.Trainer object that we had instantiated to log out the metrics during the training process.
>
> **[5:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=307)** We can now access these metrics.
>
> **[5:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=309)** They'll be in a metrics.csv file in your log directory.
>
> **[5:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=313)** The log directory is accessible via the trainer instance, trainer.logger.log_dir/metrics.csv.
>
> **[5:21](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=321)** This is a data frame that I read in, which gives us the training loss, validation loss for every epoch.
>
> **[5:28](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=328)** We do a little bit of pre-processing with this metrics data frame.
>
> **[5:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=331)** For instance, I drop the step column and then I go ahead and display the metrics as a line plot.
>
> **[5:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=339)** Along the x-axis, we have the epochs of training.
>
> **[5:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=342)** Along the y-axis, we have the training and validation losses.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=346)** The blue line represents the training loss and the orange dotted line is the validation loss.
>
> **[5:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-the-model-using-the-pytorch-lightning-trainer?u=76281980&t=352)** Now, you've trained the same model using PyTorch Lightning, and you can see how much simpler and more intuitive the code was.

> [!info]- Semantic Content
>
> **Code Keywords:** module (4), let (4), class, (2), class. (1), pass (1)
> **Env Vars:** gpu (3), csv (1), tpu (1), cpu (1)
> **Versions:** 0.00598 (1), 0.00477 (1), 0.882 (1)
> **Definitions:** is a  (3)
> **File Paths:** metrics.csv (1), trainer.logger.log_dir/metrics.csv (1)
> **CLI Commands:** cat (1)
> **Code Identifiers:** log_dir (1)
> **Exercise Files:** boilerplate (1)


### 3. Using PyTorch Lightning to Build a Classification Model

#### Loading and exploring classification data
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=0)** We've seen how easy it is to build and train a neural network using PyTorch Lightning.
>
> **[0:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=5)** Let's get some more practice with this.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=7)** And this time, we'll build and train a classification model.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=11)** Here I am on a new Jupyter Notebook.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=14)** Since we'll be exploring and visualizing a new dataset comprising of classification data, I'm going to ignore some warnings that will display when I use Seaborn for visualization.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=25)** By the time you're watching this course, you're unlikely to need this bit of code if you're using the latest version of Seaborn.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=32)** Next, I set up the import statements for all of the libraries that I'll use.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=36)** This involves data access, data processing libraries.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=39)** You can see that I've also imported lightning.pytorch as pl on Line 10. Because this is a classification model, we'll evaluate this model with a different set of metrics.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=51)** On Line 13 and 14, you can see I import accuracy and F1Score.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=56)** These are the metrics we'll use to evaluate the model.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=60)** I have the data that we'll use to train the model in the datasets folder here.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=64)** This is a churn modeling dataset.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=67)** We'll have information for a number of customers, and we'll use that information to predict whether the customer churned or not.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=73)** Let's read in and take a look at the data before we actually set up a lightning data module to encapsulate all our data operations.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=82)** I'm going to read in from the Churn_Modelling.csv file under datasets.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=86)** Here in this dataset, we have information for bank customers, row number, customer ID, last name, credit score, gender, age, tenure, whether the customer has a credit card or not.
>
> **[1:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=98)** And finally, the last column here is exited.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=102)** That column contains the labels that we are trying to predict.
>
> **[1:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=105)** Exited equal to one, meaning the customer churned.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=108)** Zero means the customer did not churn.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=111)** When you take a look at the columns here in this dataset, it's pretty clear that there are certain columns which are not really relevant in predicting whether the customer churned or not.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=121)** For example, columns such as row number, customer ID, or even the surname or last name of a customer.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=128)** Those are bits of information not really relevant to figuring out churn.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=133)** Those are some columns we'll get rid of during data preprocessing.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=138)** Next, let's take a look at the data types for the various columns to make sure they are all of the right type.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=144)** A quick glance over the column shows me that numeric values are numeric types, either integers or floats, and categorical values are of type objects or strings.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=154)** Things look good so far.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=156)** This dataset contains fields with missing values.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=159)** We'll clean up this data by using dropna to drop any records which have missing values, that's the code on Line 1, and then this dataset also contains a few duplicate records.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=171)** And we'll eliminate duplicates by calling drop_duplicates on a pandas data frame.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=176)** And once both of these are done, the number of records we are left with for training as well as validation data is about 10,000 records.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=185)** The classification model that we're trying to train is a binary classification model.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=190)** We are trying to predict whether a bank customer exited the relationship or not.
>
> **[3:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=195)** We are trying to predict churn.
>
> **[3:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=196)** If you look at the value counts for the exited field, you can see that this data set is very skewed.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=203)** Eight thousand out of the 10,000 customers did not churn and only 2,000 did.
>
> **[3:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=207)** You can actually view the same information using a nice Seaborn count plot. Based on the exited values, you can see that there are many more customers who haven't exited as compared with customers who have exited or churned.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=221)** Once again, this is a skewed dataset, and I'll give you a heads-up right now that we won't actually be mitigating the skewness of this data.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=228)** So I won't perform any sampling to balance out the customers who have churned and who've not churned.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=234)** So there is a limit to how good our binary classification model can be.
>
> **[3:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=238)** If your training data is skewed, it's hard to build a great classification model.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/loading-and-exploring-classification-data?u=76281980&t=243)** But since our focus is primarily on learning to use PyTorch Lightning to build a neural network model, we'll work with the skewed data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), module (1), finally, (1), type. (1)
> **Definitions:** is a  (5)
> **Analogies:** for example (1), such as (1)
> **Prerequisites:** set up (2)
> **File Paths:** churn_modelling.csv (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** drop_duplicates (1)
> **Tools:** jupyter (1)

#### Creating a LightningDataModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=0)** If you remember the previous regression demo where we used PyTorch Lightning, the first thing we set up was a data module class.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=8)** This data module encapsulated all of the data preparation, processing, and other operations to work with our training and validation data.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=18)** Here is our BankCustomerChurnDataModule which inherits from the pl.LightningDataModule base class.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=25)** Now, in the init method is where we initialize the parameters of the data.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=29)** We just have the batch size, and that's the only input argument to the init method.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=34)** In prepare_data is where we load the data from wherever it's available and perform a few preprocessing operations to set up our data.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=44)** The prepare_data method when we train our model is run on a single GPU.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=49)** Here I just read the CSV file from the datasets folder, and then I drop all of the records with missing values using dropna and I drop records that are duplicates by invoking drop_duplicates.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=63)** The setup function is where we perform data transformations and preprocessing and data splitting.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=69)** It takes in the stage as an input argument.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=73)** Now, the first thing I do in setup is drop those columns that are not relevant for prediction.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=79)** The X features will not include exited.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=82)** That's of course the target.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=83)** We have to drop that.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=84)** But we'll also not include row number, customer ID, and surname because these fields do not have any predictive power to figure out whether a customer churned or not.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=94)** The Y value or the target of the classification is the exited column that I assign on Line 18.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=102)** Now, I'll preprocess the data only if stage is equal to fit or stage is equal to none.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=107)** That is only in the training phase.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=110)** The training phase will get the training as well as validation data and preprocess them both. In the training stage on Lines 21 and 22, I first use train_test_split from scikit-learn to split the data, 80% for training, and the remaining 20% to evaluate the model.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=128)** On Lines 24 through 37, we one-hot encode the categorical values present in the data.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=136)** The only categorical features include geography and gender, and we instantiate the one-hot encoder and then use a column transformer to one-hot encode these values. On Lines 36 and 37 is where we actually perform the one-hot encoding by calling fit_transform on the training data and transform on the validation data.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=158)** On Line 39, we convert the Y values to NumPy arrays, and on Lines 41 through 45, we use the standard scalar to standardize all numeric values.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=171)** And finally, on Lines 47 through 51, we take our training as well as validation data and convert them all to PyTorch tensors.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=181)** And then, of course, we have the train_dataloader function, which returns the DataLoader for the training data.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=187)** We instantiate a tensor dataset and then we use that to instantiate a DataLoader.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=192)** We load the data using four workers since I have four cores on my machine.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=197)** And the code in the validation DataLoader is identical, we instantiate a tensor dataset with the validation data and use that to instantiate a DataLoader.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=206)** Let's quickly check that our data module works just fine.
>
> **[3:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=210)** I instantiate the bank_customer_churn data module, call prepare_data, and then set up.
>
> **[3:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=216)** I'll now access the train_dataloader, and let's take a look at one batch of training data.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=223)** Once again, we've used a batch size of eight.
>
> **[3:46](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=226)** After all of the pre-processing that we've performed, let's see the number of features that we have in the input data.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=234)** We access one record in the training data, use the shape property, and get the second dimension, which will give us a number of features.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=242)** It's equal to 11.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=243)** Remember, we need this information to set up the layers of our neural network model.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=249)** Next, let's look at one batch of the validation data to make sure that the validation DataLoader is also working fine.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=257)** And you can see that indeed it is.
>
> **[4:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningdatamodule?u=76281980&t=259)** All that's left for us is to set up a lightning module with our model, and train the model using a lightning trainer object.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), let (4), class. (2), function (2), finally, (1)
> **Code Identifiers:** prepare_data (3), train_dataloader (2), drop_duplicates (1), train_test_split (1), fit_transform (1)
> **Prerequisites:** set up (5), setup (2)
> **Env Vars:** gpu (1), csv (1)
> **CLI Commands:** make (1)

#### Creating a LightningModule
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=1)** We are now ready to define our PyTorch Lightning module, which will hold our model as well as have the steps required for training and validating our model.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=11)** Here is the class that I have defined, LitBinaryClassificationModule.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=15)** We are going to be performing binary classification, predicting whether customers churned or not.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=20)** We inherit from the lightning module base class.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=24)** The init method is where we set up our model.
>
> **[0:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=27)** This is where we define the model architecture and its layers.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=32)** Now, init takes in two input arguments, the number of features in the input data and the learning rate that I've set to 0.001.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=40)** I'm using a smaller learning rate here.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=43)** My model comprises of three linear layers again, Layer 1, Layer 2, and Layer 3.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=49)** And each of the three linear layers has a ReLU activation.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=53)** And these are initialized separately as Activation 1, Activation 2, and Activation 3.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=59)** The final output is also a linear layer.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=62)** This is the output layer on Line 12.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=64)** The output of this layer will be a probability score, and this is the probability score that we'll use to determine whether a particular customer churned or not.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=76)** Once again, I call self.save_hyperparameters on Line 13.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=80)** This will cause num features and learning rate both to be saved as members of the hparams object that can then be accessed by the optimizer.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=91)** The forward function is where we define what a forward pass-through the model looks like.
>
> **[1:37](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=97)** You can see we pass the input through the three layers, each layer has the ReLU activation, and finally, we pass the data through the output layer.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=107)** This will give us the final predictions that we return.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=111)** The training step defines the operations for a forward pass through the model for a single batch of data. The batch is passed in as an input argument, we access the X features and the Y variables, and then we do a forward pass through the model by invoking self on the input features.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=130)** A forward pass through the model will output logits for classification.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=135)** The term "logits" refers to the raw unnormalized prediction scores output by a model for each class or category.
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=142)** Since it's binary classification, we'll have just one logits score.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=146)** Now, the loss function that we use for our binary classification model is the BCE with logits loss.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=154)** BCE here stands for binary cross-entropy.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=158)** The BCE with logits loss converts the raw logit scores into probabilities.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=164)** It squashes the output logits to be probability values in the range zero to one.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=171)** It then computes the binary cross-entropy loss, which is essentially computing the difference between two probability distributions.
>
> **[2:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=179)** The probability distributions of the actual value versus the predicted values.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=183)** On Line 30, we compute the BCE with logits loss for one batch of data, and we log that out as a training loss along with a progress bar.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=194)** In the validation step, we perform predictions on one batch of validation data, so you can see the code on Lines 37 through 42 is the same.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=203)** We compute logits and then compute the loss.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=206)** However, here in the validation data, we want the actual predictions from the model.
>
> **[3:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=211)** And we compute that by converting the raw logits scores to probability scores using the torch.sigmoid activation.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=220)** This will give us probability scores in the range zero to one.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=223)** torch.round of this probability score will give us the model prediction, zero for not exited, one for exited.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=231)** Next, on Lines 46 through 49, we compute the accuracy as well as the F1Score of the classification model.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=239)** The accuracy tells us how many predictions the model got right, but because we have a skewed dataset, the accuracy is not a great measure of how good this model is.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=249)** The F1Score here represents a trade-off between precision and recall, metrics that are better suited to evaluate models trained on skewed data.
>
> **[4:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=259)** Precision is the proportion of positive identifications the model got right, and recall measures of the positive identifications in the dataset, how many was the model able to correctly identify.
>
> **[4:32](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=272)** In the validation step, we log out the validation loss, the validation accuracy, and the validation F1Score.
>
> **[4:40](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=280)** The predict step just gives us the predictions from the model.
>
> **[4:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=284)** Here we just make a forward pass through the model.
>
> **[4:47](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=287)** In configure_optimizers, you can see that we've set up an Adam optimizer.
>
> **[4:52](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/creating-a-lightningmodule?u=76281980&t=292)** The Adam optimizer is an adaptive learning rate optimization algorithm, very popular and widely used in the real world.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (7), module (2), self (2), function (2), class. (1)
> **Env Vars:** bce (4)
> **Definitions:** refers to (1), stands for (1), is an  (1)
> **Code Identifiers:** save_hyperparameters (1), configure_optimizers (1)
> **CLI Commands:** make (1)
> **Versions:** 0.001 (1)
> **Prerequisites:** set up (1)

#### Training a classification model and evaluating metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=0)** Now that we've defined our lightning module, let's instantiate our classification module.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=6)** We need to pass in the number of features.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=8)** Here is what the layers of the model look like.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=12)** We know that the training process of this model is very straightforward using a PyTorch trainer.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=18)** Once again, I use a CSVLogger to log out the training metrics in a CSV file.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=25)** I instantiate the data module on Line 3, the logger on Line 5, and the trainer, which will actually run the training and validation process on Line 7.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=35)** We'll run for a maximum of 20 epochs of training and start the training process by calling trainer.fit.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=42)** The trainer will identify that we don't have a GPU here on this machine, and it will automatically train the model using the CPU.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=51)** Now, the training process took about 6 or 7 minutes to run.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=56)** Here at the end of one epoch of training, validation accuracy is 0.819, so accuracy is high.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=62)** The F1 score is just 0.268.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=65)** I let this run through again for all 20 epochs.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=69)** And at Epoch 19, let's take a look at the various course. Validation accuracy is 0.859, it has risen, the validation F1 score is 0.41, much better than before, but not great. Now for some reason, the validation F1 score doesn't display correctly here when we look at the output of the training of the model.
>
> **[1:30](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=90)** We'll actually compute the accuracy, precision, recall, and F1 score for the validation data in just a bit.
>
> **[1:38](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=98)** Meanwhile, let's access the metrics for the training process of this model in the metrics.csv file under the training logs directory.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=108)** In addition to the training and validation loss, we also logged out the validation accuracy and the validation F1 scores.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=115)** Those additional metrics are also available here as part of the logs.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=119)** Let's now go ahead and plot all of these metrics in a nice visualization, a Seaborn line plot.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=127)** And here you can see four different lines corresponding to the four metrics that were tracked during the training process.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=134)** The orange dotted line on top is the validation accuracy, the green dotted line is the validation F1 score, and the remaining two lines represent the training and validation losses, respectively.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=147)** Next, I'll call model.predict on the validation data.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=151)** So we get predictions from the model and we get them as a stacked tensor.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=156)** So we have one tensor with all the predictions.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=159)** The predictions here are in the form of raw unnormalized logits scores.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=164)** In order to get these scores in the form of probability values between zero and one, you need to apply the torch.sigmoid function and then torch.round will give us the actual predictions in the form of zero/one values.
>
> **[2:58](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=178)** Let's get the actual values from the validation data.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=181)** We'll have to compare the predictions from the model against these actual values.
>
> **[3:06](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=186)** We need to call torch.stack on these labels as well in order to get them all in a single tensor.
>
> **[3:11](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=191)** Now that we have the predictions and the actual values, let's compute some evaluation metrics for the validation data.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=200)** We'll compute accuracy, precision, recall, and the F1 score.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=205)** Let's go ahead and hit "Shift-Enter" and we'll see how the model is.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=209)** Accuracy is quite good at 0.859.
>
> **[3:33](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=213)** Precision, which is the proportion of positive identifications of exited customers that the model got right is quite high, 0.785.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=221)** The recall score is on the lower side, 0.464.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=225)** Of the customers identified as exited or churned by the model, how many were actually right?
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=231)** This is what recall measures.
>
> **[3:53](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=233)** And finally, we have the F1 score, which is the trade-off between precision and recall, and that's the 0.58.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=240)** That's great.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/training-a-classification-model-and-evaluating-metrics?u=76281980&t=242)** At this point, you've successfully built and trained a classification model using PyTorch Lightning.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), module (3), pass (1), function (1), finally, (1)
> **Versions:** 0.859 (2), 0.819 (1), 0.268 (1), 0.41 (1), 0.785 (1)
> **Env Vars:** csv (1), gpu (1), cpu (1)
> **File Paths:** metrics.csv (1)


### Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=0)** And this demo brings us to the very end of this AI workshop on building a neural network with PyTorch Lightning.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=7)** Now, we started this course off with a quick overview of PyTorch and PyTorch Lightning, and we discussed how PyTorch Lightning allows us to write cleaner and more modular code for model training.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=19)** We then got hands-on and we trained a regression model using the PyTorch APIs.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=25)** We identified that there was a lot of boilerplate code here in the model building and training process, and we eliminated a lot of this boilerplate repetitive code in the next demo where we train the same regression model, but this time we used PyTorch Lightning.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=41)** And then in order to get some more practice with PyTorch Lightning for model training, we built and trained a classification model using PyTorch Lightning.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=50)** Well, this brings us to the very end of this AI workshop.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=54)** If you're interested in neural networks and you want to study further, here are some other courses on LinkedIn learning you might want to watch. TensorFlow: Neural networks and working with tables and [[Hands-On PyTorch Machine Learning]] are both great courses that might be a good fit for you.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=70)** Well, that's it from me here today.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=73)** I hope you had fun in this AI workshop.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-build-a-neural-network-with-pytorch-lightning-2023/summary-and-next-steps?u=76281980&t=76)** Thank you for listening.

> [!info]- Semantic Content
>
> **Exercise Files:** boilerplate (2)
> **Cross-References:** we discussed (1)


## Path Context

### In [[Advance Your Skills in Deep Learning and Neural Networks]]
← [[Deep Learning with Python- Convolutional Neural Networks]] | **4 of 8** | [[Deep Learning with Python- Optimizing Deep Learning Models]] →

## Appears In

- [[Advance Your Skills in Deep Learning and Neural Networks]]

## Related Courses

_Courses sharing skills:_

- [[AI Workshop- Build a Neural Network with PyTorch Lightning]] — Artificial Intelligence (AI), Artificial Neural Networks, PyTorch
- [[Hands-On PyTorch Machine Learning]] — Artificial Intelligence (AI), PyTorch
- [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[LinkedIn AI Academy AI-100- 2 Supervised Learning with Neural Networks]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)