---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks
url: "https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks"
duration_minutes: 69
duration: 1h 9m
level: Intermediate
updated: 5/4/2023
learners: 59987
skills:
  - Supervised Learning
  - Artificial Intelligence (AI)
  - Artificial Neural Networks
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEEPm6xE-zRRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683061136354?e=2147483647&amp;v=beta&amp;t=xQxRED_ORwnogHQ-dO9m_ZbLzskqBpkHt6Qe-1MD39g"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[LinkedIn''s AI Academy]]'
prev_courses:
  - '[[Linkedin Ai Academy Ai 100 1 Demystifying Ai]]'
next_courses:
  - '[[LinkedIn AI Academy AI-100- 3 Scaling AI at LinkedIn]]'
path_nav: '[{"path":"LinkedIn''s AI Academy","position":2,"total":3,"prev":"Linkedin Ai Academy Ai 100 1 Demystifying Ai","next":"LinkedIn AI Academy AI-100- 3 Scaling AI at LinkedIn"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/supervised-learning
  - skill/artificial-intelligence-ai
  - skill/artificial-neural-networks
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/LinkedIn%20AI%20Academy%20AI-100-%202%20Supervised%20Learning%20with%20Neural%20Networks.md)

![LinkedIn AI Academy AI-100: 2 Supervised Learning with Neural Networks](https://media.licdn.com/dms/image/v2/D4D0DAQEEPm6xE-zRRw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683061136354?e=2147483647&amp;v=beta&amp;t=xQxRED_ORwnogHQ-dO9m_ZbLzskqBpkHt6Qe-1MD39g)

# LinkedIn AI Academy AI-100: 2 Supervised Learning with Neural Networks

> AI is one of the most important but least understood fields in the world. It’s changing the way we think about business, but it’s changing so fast that it’s hard to keep track. This course, taught by LinkedIn engineers Ananth Sankar and Daniel Hewlett, shows how neural networks and deep learning have transformed AI in the last decade, enabling applications that were previously impossible. Ananth a

> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks) | 1h 9m | Intermediate | 60K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The LinkedIn AI Academy: Neural networks are the heart of AI](#the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai)
- [**1. Deep Neural Networks**](#1-deep-neural-networks) (3 videos)
  - [Neuron: Basic element of neural net](#neuron-basic-element-of-neural-net)
  - [Neural nets and nonlinearly separable classification](#neural-nets-and-nonlinearly-separable-classification)
  - [Multiclass deep neural networks](#multiclass-deep-neural-networks)
- [**2. Convolutional Networks**](#2-convolutional-networks) (3 videos)
  - [What is a convolutional filter?](#what-is-a-convolutional-filter)
  - [Deep convolutional neural networks](#deep-convolutional-neural-networks)
  - [Transfer learning](#transfer-learning)
- [**3. Sequence Classifiers**](#3-sequence-classifiers) (6 videos)
  - [Modeling sequences with language models](#modeling-sequences-with-language-models)
  - [Recurrent neural network language models](#recurrent-neural-network-language-models)
  - [Machine translation and encoder-decoder networks](#machine-translation-and-encoder-decoder-networks)
  - [Attention-based neural networks](#attention-based-neural-networks)
  - [Transformer model](#transformer-model)
  - [Pretrained language models](#pretrained-language-models)
- [**4. Graph Neural Networks**](#4-graph-neural-networks) (3 videos)
  - [Motivation and introduction](#motivation-and-introduction)
  - [Node embeddings](#node-embeddings)
  - [Graph neural networks](#graph-neural-networks)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing the AI-100 learning path](#continuing-the-ai-100-learning-path)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The LinkedIn AI Academy: Neural networks are the heart of AI](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980&t=0)** - [Ananth] Deep [[Neural Networks]] have made strong inroads in many areas including [[Natural Language Processing (NLP)|natural language processing]] [[Image Processing]], and healthcare.
>
> **[0:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980&t=13)** some of the most popular neural network architectures.
>
> **[0:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980&t=16)** We'll go through simple linear classification, neural networks, [[Convolutional Neural Networks (CNN)|convolutional neural networks]],
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/the-linkedin-ai-academy-neural-networks-are-the-heart-of-ai?u=76281980&t=27)** language processing today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Image Processing]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **Speakers:** - [ananth] (1)


### 1. Deep Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Neuron: Basic element of neural net](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=0)** - [Instructor] Before we get started, if you haven't taken the previous AI Academy course with Souvik Ghosh, that's a great place to start.
>
> **[0:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=8)** He covered topics like regression, supervised and unsupervised learning, and the bias variant straight off.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=15)** These are all critical to training deep [[Neural Networks]], which are today's most popular machine learning models.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=22)** In order to understand deep neural networks, we have to first understand the basic element of a neural network called a neuron.
>
> **[0:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=30)** Let's consider the following very simple classification task.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=34)** As you can see in this figure, we have a bunch of red dots and a bunch of blue dots, each of which belong to a separate class.
>
> **[0:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=43)** Each dot represents a pair of features, X1 and X2.
>
> **[0:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=50)** When two classes can be separated by a line like this, it is called a linearly separable classification problem and it is the simplest kind of classification problem to solve.
>
> **[1:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=60)** As you probably remember from your secondary or high school mathematics classes, the line shown in this figure can be represented by the equation w1x1 plus w2x2 plus b equals zero.
>
> **[1:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=76)** For all points on the line, this expression would be equal to zero.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=81)** For points above the line, this expression will be greater than zero, and for points below this line, the expression would be less than zero.
>
> **[1:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=90)** Therefore, to implement a solution to the linearly separable classification problem, we can compute this expression for any point in this x1, x2 feature space.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=102)** And if the expression is greater than zero, we would say the point is in the blue class.
>
> **[1:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=108)** On the other hand, if the expression is less than zero, we would say the point is in the red class.
>
> **[1:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=114)** With these basics, we are now ready to describe a neuron, the basic element of a neural network.
>
> **[2:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=121)** A neuron is a block that implements a linearly separable classification task.
>
> **[2:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=126)** It does this by taking as inputs, the features x1 and x2, and computing the expression w1x1 plus w2x2 plus b.
>
> **[2:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=139)** So for this dataset, when this expression is greater than zero, the input point x1, x2 belongs to the blue class, and when the expression is less than zero, the input belongs to the red class.
>
> **[2:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=152)** Let's look at this in a little more detail.
>
> **[2:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=155)** As shown in this figure, the neuron is described by its parameters w1, w2, and b.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=161)** B is called the bias term.
>
> **[2:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=163)** The neuron multiplies its parameters w1 and w2 with its inputs x1 and x2, and then accumulates them with the bias to compute the expression w1x1 plus w2x2 plus b.
>
> **[3:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=180)** But it's actually more simple and elegant to think of this in terms of vectors and matrices.
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=186)** The input x1, x2 can be padded with the number one to form the three-dimensional vector denoted here by this x.
>
> **[3:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=195)** Similarly, the parameters of the neuron are denoted by this term w.
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=200)** The neuron then computes the scaler quantity given by the dot product of w index.
>
> **[3:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=207)** Again, if this dot product is greater than zero, we know that the input belongs to the blue class and if the dot product is less than zero, we know that the input belongs to the red class.
>
> **[3:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=219)** While this is all that is necessary to implement a linearly separable classification task, a neuron has a very important addition called its activation function.
>
> **[3:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=229)** The activation function is always non-linear.
>
> **[3:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=233)** We'll see in the future why this non-linearity is critical to solving more complex classification tasks.
>
> **[4:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=240)** In this figure, we show a non-linear activation function called the sigmoid activation function.
>
> **[4:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=248)** The sigmoid activation function is a monotonically increasing function that takes as its input the dot product w.x, and squashes it between the values of zero and one.
>
> **[4:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=262)** When the input to the sigmoid is zero, its output is 0.5.
>
> **[4:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=267)** The output of the neuron is the output of the sigmoid activation function.
>
> **[4:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=272)** Therefore, from the standpoint of our linearly separable classification task, if the output of the neuron is greater than 0.5, then its input would be in the blue class.
>
> **[4:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=284)** And if the output of the neuron is less than 0.5, then its input would be in the red class.
>
> **[4:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=290)** So to recap, in this video, we cover the basic element of a neural network, the neuron.
>
> **[4:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=296)** A neuron takes as its input the vector x, computes its dot product with the parameter vector W, and then passes the result through a non-linear activation function.
>
> **[5:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=308)** For example, the sigmoid activation function.
>
> **[5:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neuron-basic-element-of-neural-net?u=76281980&t=312)** In future videos, we'll see how neurons are put together to form neural networks, which can solve more complicated problems, such as non-linearly separable classification tasks, image recognition tasks and natural language tasks such as machine translation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (3)
> **Definitions:** is called (2), is a  (2)
> **Versions:** 0.5 (3)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Neural nets and nonlinearly separable classification](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=0)** - [Instructor] As we saw in the last video, a neuron implements a linearly separable classification problem.
>
> **[0:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=6)** It takes as its input, a vector X, and computes the dot product of that vector with the weight vector W to give W.X.
>
> **[0:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=16)** After this, the neuron passes the dot product W.X through a non-linear function, F to give F of W.X as the output.
>
> **[0:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=26)** Finally, if the result is greater than 0.5, we classify the input as one class, and if the result is less than 0.5, we classify the input as the other class.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=38)** But what happens when the classes aren't able to be split as cleanly?
>
> **[0:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=42)** Here we have what's called a non-linearly separable problem.
>
> **[0:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=46)** As before, we have two classes represented by the blue dots and the red dots.
>
> **[0:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=51)** However, in this case, the blue dots and the red dots cannot be separated by a straight line.
>
> **[0:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=58)** For example, we can try this line or this line.
>
> **[1:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=63)** Neither of these lines can separate these two classes.
>
> **[1:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=67)** A curved line is required to separate the blue dots and the red dots.
>
> **[1:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=72)** Unfortunately, as we've seen before, a neuron only implements a straight line and therefore, can only solve a linearly separable classification problem.
>
> **[1:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=83)** A single neuron is unable to solve this non-linearly separable classification task.
>
> **[1:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=89)** To solve this problem, we need to put together multiple neurons in what is called a neural network.
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=96)** The first step is to transform our non-linearly separable problem into a linearly separable problem.
>
> **[1:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=103)** This is done by using two separate neurons.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=106)** The first neuron takes the input vector X and outputs the value Y1.
>
> **[1:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=113)** The second neuron takes the same input vector X and outputs Y2.
>
> **[2:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=120)** In combination, these two neurons have transformed the input vector X into the output vector Y.
>
> **[2:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=128)** Now let's take a look at the two graphs shown here with the red dots and the blue dots.
>
> **[2:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=135)** In the first graph, we see our original problem where the red dots and the blue dots require a curve to separate them.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=143)** As we saw before, each red and blue dot corresponds to an input vector X.
>
> **[2:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=149)** When we apply our two neurons on each of these X vectors, they are transformed to a corresponding vector Y.
>
> **[2:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=158)** Different values of the weights W will result in different transform dots in the Y space.
>
> **[2:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=165)** The interesting thing is that with an appropriate set of values W, we can transform the input dots X into output dots Y that are linearly separable as shown in the figure.
>
> **[2:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=179)** In other words, we have transformed our non-linearly separable classification problem into a linearly separable classification problem.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=188)** Interestingly, and most importantly, this transformation to a linearly separable problem is only possible because of the non-linear function F, which is a part of every neuron.
>
> **[3:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=202)** This first layer is called a hidden layer and it transforms the original non-linearly separable classification problem into a linearly separable classification problem.
>
> **[3:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=214)** So we already know that a single neuron can solve a linearly separable classification problem, so all we need to do is to add a third neuron on top of the previous two as shown in this figure.
>
> **[3:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=227)** This third neuron draws a line in this Y space, nicely separating the red and the blue dots.
>
> **[3:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=234)** This completes the solution to the non-linearly separable classification task.
>
> **[4:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=240)** To recap, we use two neurons in the first layer of the neural network.
>
> **[4:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=245)** This first layer is called a hidden layer and it transforms the original non-linearly separable classification problem into a linearly separable classification problem.
>
> **[4:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/neural-nets-and-nonlinearly-separable-classification?u=76281980&t=256)** Then we add a single neuron in the second layer of this neural network to solve the resulting linearly separable classification problem.

> [!info]- Semantic Content
>
> **Definitions:** is called (3), in other words (1), is a  (1)
> **Cross-References:** as we saw (2), in the last (1)
> **Versions:** 0.5 (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Multiclass deep neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=0)** - [Instructor] A simple neural network with one hidden layer can implement nonlinear classification tasks.
>
> **[0:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=7)** However, some nonlinear classification tasks are more complicated than others, and we may require more power in our neural network to handle more complex nonlinear tasks.
>
> **[0:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=20)** For example, in this figure, we see a simple curve being implemented by a single hidden layer with two neurons.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=29)** Here we see the separating line between the two classes is a more complicated looking curve than what we had before, so we use a greater number of neurons, in this case, four neurons in the single hidden layer to implement this curve.
>
> **[0:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=46)** The classification problem could be even more complex.
>
> **[0:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=49)** For example, in this figure, we have two islands of red dots surrounded by blue dots.
>
> **[0:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=55)** In order to solve this classification problem, we may require more than one hidden layer.
>
> **[1:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=61)** The figure shows a neural network with three hidden layers and four neurons per hidden layer.
>
> **[1:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=67)** Finally, we notice that so far, we only had two output classes.
>
> **[1:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=72)** A single output neuron was enough to handle two-class problems.
>
> **[1:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=77)** However, many real life problems have more than two classes.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=81)** For example, we may want to classify a novel into one of several different genres, such as crime, romance, mystery, or science fiction.
>
> **[1:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=91)** In this figure, we show a three-class classification problem and it is handled by using a separate output neuron for each of the classes.
>
> **[1:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=101)** Each of these neurons outputs a number between zero and one, and this value is interpreted as the [[Probability]] that the input belongs to the class corresponding to that output neuron.
>
> **[1:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=114)** So as we've seen, a neural network can be as simple as a single neuron, which can solve a two-class linearly separable classification problem, or it can be as complicated as a multiple hidden layer deep neural network with multiple output neurons.
>
> **[2:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=132)** Such a deep neural network would be used for multi-class nonlinearly separable classification problems.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=141)** A simple example of a multi-class nonlinearly separable classification problem is that of image classification.
>
> **[2:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=149)** This figure shows an image classification problem where the input image should be classified into one of three categories, horse, cat, or dog.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=161)** Deep [[Neural Networks]] research has progressed in multiple directions.
>
> **[2:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=165)** They are now used for many industrial applications, such as [[Speech Recognition]], [[Image Processing]], [[Natural Language Processing (NLP)|natural language processing]], recommendation systems, self-driving cars, robotics, and medicine.
>
> **[3:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/multiclass-deep-neural-networks?u=76281980&t=180)** It is one of the most exciting technologies of today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Neural Networks]] (1), [[Speech Recognition]] (1), [[Image Processing]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Analogies:** for example (3), such as (2)
> **CLI Commands:** cat (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Convolutional Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a convolutional filter?](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=0)** - [Instructor] Let's return to the image classification problem that we spoke about earlier.
>
> **[0:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=4)** The neural network takes as input an image and predicts which of three categories this image belongs to.
>
> **[0:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=12)** In this case, the three categories are horse, cat, and dog.
>
> **[0:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=18)** In order to solve this problem, we need to impose some structure into our neural network.
>
> **[0:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=23)** This structure is imposed in the form of convolutional filters.
>
> **[0:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=28)** We show here the input image and the first hidden layer of our neural network.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=34)** A digital image is represented as a grid of pixels.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=38)** Here we have a 256 by 256 grid for a total of 65,536 pixels in our input image.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=48)** Let's say our hidden layer is a grid with 128 by 128 neurons.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=53)** In a standard fully connected neural network, each input pixel is connected to each of the neurons in the hidden layer.
>
> **[1:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=61)** That results in 1 billion parameters for the weights between the input layer and the hidden layer.
>
> **[1:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=68)** But this is for just one of the color channels of the input image.
>
> **[1:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=73)** Color images have three color channels, red, green, and blue, and each channel is represented by a 256 by 256 grid of pixels.
>
> **[1:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=84)** That means that now we have 3 billion parameters for the weights connecting the input image and the hidden layer.
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=92)** This is far too many parameters to be able to train, with even a large size data set on a large compute grid.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=100)** Clearly, we need to impose some constraints on our [[Neural Networks]] to address this problem.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=106)** The solution to this problem is a convolutional filter.
>
> **[1:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=109)** In this case, each neuron in the hidden layer gets its input from only a small portion of the input image as opposed to the entire image.
>
> **[2:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=120)** For example, in this image, we show the hidden neuron getting its input from a three by three grid instead of the entire 256 by 256 grid.
>
> **[2:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=131)** In other words, the weights connecting this particular hidden neuron to the input image consists of only nine weights as opposed to 65,536 weights.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=143)** These nine weights comprise the convolutional filter, and the neuron in the hidden layer gets its output by multiplying these weights with the corresponding pixels in the input image.
>
> **[2:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=156)** This three by three convolution filter is then moved around the input image to produce outputs for different neurons in the hidden layer for different regions of the input image.
>
> **[2:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=167)** In other words, the same three by three convolutional filter is used across this entire image to produce the values of the neurons in the hidden layer.
>
> **[2:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=177)** For three different color channels, that results in 27 weights in all.
>
> **[3:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=182)** Compare this to the three billion weights we had for a fully-connected layer.
>
> **[3:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=187)** The term convolution comes from the subject area of signal processing, where a convolutional filter is moved across the input signal to produce the output signal.
>
> **[3:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=197)** Convolutional filters can do very interesting things.
>
> **[3:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=201)** For example, the filter shown in the matrix here is a horizontal edge detector.
>
> **[3:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=207)** When it is applied to the image of this building, the hidden layer neurons essentially extract all horizontal edges.
>
> **[3:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=214)** Edges are very useful features for [[Image Processing]].
>
> **[3:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=218)** When a large number of different convolution filters are put together in a structured way, we get a convolutional neural network.
>
> **[3:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=225)** [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] are the state of the art today for image processing and classification.
>
> **[3:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/what-is-a-convolutional-filter?u=76281980&t=231)** And now that we know a bit about how they work, let's see how we can use them to solve image classification tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Image Processing]] (2), [[Neural Networks]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **Definitions:** is a  (3), in other words (2), means that (1)
> **Analogies:** for example (2), compare this to (1)
> **CLI Commands:** cat (1)
> **Speakers:** - [instructor] (1)

#### [Deep convolutional neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=0)** - [Instructor] Remember, a convolutional filter processes only a small region of the input image.
>
> **[0:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=5)** We slide the filter of the entire image to compute the output values for every single region.
>
> **[0:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=12)** Convolutional filters are capable of extracting features such as horizontal and vertical edges from the input image.
>
> **[0:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=19)** So far, we have only considered monochrome images.
>
> **[0:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=23)** However, there are typically three color channels, red, green, and blue.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=29)** Therefore, we have to accumulate the product of the pixel values and the convolutional filter weights over all the pixels in the input grid for all three color channels of the input image.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=41)** So, if the convolutional filter processes a four by four input grid, then we would have 16 weights for each color channel.
>
> **[0:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=51)** For three color channels, this is a total of 48 weights for our convolutional filter.
>
> **[0:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=57)** We slide this filter of 48 weights over the entire input image to produce the output channel.
>
> **[1:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=65)** As we saw before, a particular convolutional filter can extract features such as horizontal edges.
>
> **[1:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=72)** We would need a different convolutional filter to extract different features such as vertical edges or slanted edges.
>
> **[1:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=80)** To enable the computation of different features, [[Convolutional Neural Networks (CNN)|convolutional neural networks]] typically have multiple filters at each layer of the neural network.
>
> **[1:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=90)** Each convolutional filter produces a separate output channel.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=94)** Another type of layer used in convolutional neural networks is called the pooling layer.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=100)** Pooling layers are used to reduce the size of each input channel.
>
> **[1:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=104)** For example, this picture shows an input channel of size eight by eight being reduced to an output channel of size four by four.
>
> **[1:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=113)** In this example, each two by two grid in the input image is reduced to a single value in the output.
>
> **[2:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=121)** Two of the most common pooling methods are max pooling and average pooling.
>
> **[2:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=128)** In max pooling we take the maximum of the four pixel values in the two by two input grid.
>
> **[2:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=134)** And in average pooling we compute the average of the four pixels in the two by two input grid.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=141)** Pooling is applied separately to each input channel.
>
> **[2:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=144)** Therefore, if you have four input channels, you would have four output channels.
>
> **[2:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=150)** Furthermore, since pooling is typically an average or a max of the input pixels, there is no weight vector associated with the pooling layer.
>
> **[2:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=159)** Convolutional neural networks are built by stacking sets of convolutional and pooling layers as shown in this figure.
>
> **[2:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=166)** Following the last pooling layer, we typically have a fully connected layer to create a single vector representation.
>
> **[2:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=174)** This fully connected layer is then connected to the final classification layer of the neural network.
>
> **[3:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=180)** The layer closest to the image extracts simple features like edges.
>
> **[3:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=184)** As we go closer to the classification layer, more complicated features are discovered.
>
> **[3:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=190)** For example, shapes like circles or squares, or even features like the ears or eyes of a dog.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=198)** The last layer of this neural network is just a linear multi-class classification layer.
>
> **[3:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/deep-convolutional-neural-networks?u=76281980&t=203)** The job of all previous layers is to compute features that can be input to this linear classifier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (2), [[Neural Networks]] (1)
> **Analogies:** such as (3), for example (2), picture (1)
> **Definitions:** is a  (1), is called (1)
> **Cross-References:** as we saw (1)
> **Speakers:** - [instructor] (1)

#### [Transfer learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=0)** - [Instructor] Let's learn how a neural network trained with a large amount of data from varied domains could be used to perform tasks in a new domain where we might have only a small amount of training data.
>
> **[0:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=11)** We call this transfer learning.
>
> **[0:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=14)** The basic idea is that a neural network gathers a lot of general knowledge by learning from a large multi-domain source corpus.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=22)** The data in this corpus may or may not contain explicit human labels, meaning that the neural network would have to learn in either a supervised or unsupervised setting respectively.
>
> **[0:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=33)** The neural network is then able to apply this general knowledge to a specific target domain using only a small amount of label data from that target domain.
>
> **[0:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=42)** Let's look at a couple of examples.
>
> **[0:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=44)** First, let's look at transfer learning for image classification.
>
> **[0:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=49)** ImageNet is a well-known data set that contains 14 million images manually annotated for 2000 different categories.
>
> **[0:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=57)** A neural network, such as [[Google]]'s InceptionNet, trained on this task could gather general knowledge about different colors and shapes and objects, how they differ from each other and how they're used in the world.
>
> **[1:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=72)** InceptionNet could then be applied to a target task such as detecting whether an image uploaded to [[LinkedIn]] is personal or professional.
>
> **[1:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=82)** InceptionNet has already learned about people, animals, [[Microsoft Office|office]] buildings, and home settings.
>
> **[1:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=89)** Therefore, with a small amount of data from the target task it can learn that a picture of multiple people sitting in an office meeting room is a professional picture, but a person playing with their dog in a garden is a personal picture.
>
> **[1:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=104)** Another example comes from the world of text.
>
> **[1:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=108)** Corpora such as Wikipedia and Books Corpus contain millions of sentences with billions of words.
>
> **[1:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=115)** This data is not supervised in the sense that there are no human labels provided.
>
> **[2:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=120)** From this dataset, a neural network such as the BERT model, which we'll talk about a bit later, could learn very powerful representations about words and the contexts in which they are used.
>
> **[2:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=132)** BERT could then be applied to a specific task such as spam text classification for LinkedIn.
>
> **[2:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=138)** Now, a neural network could be trained entirely with data from the target task, such as spam classification.
>
> **[2:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=145)** However, with transfer learning, [[Neural Networks]] usually perform better.
>
> **[2:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=150)** Transfer learning has two distinct advantages over learning entirely from the target training data.
>
> **[2:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=155)** First, and most importantly, transfer learning results in much faster learning on the target task.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=161)** This is because the neural network has already learned a lot of general knowledge from the original source data and therefore can learn a lot about the target domain with very little data.
>
> **[2:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=173)** Second, even with a large amount of data from the target domain, it is still possible that transfer learning gives better accuracy.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=181)** Again, this is because of the world knowledge the neural network has gained from the source data that it is able to bring to bear for the target task.
>
> **[3:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=192)** Transfer learning is commonly used today in both image and text problems in machine learning.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=198)** Some well-known image models are InceptionNet, EfficientNet, ResNet, and VGG.
>
> **[3:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=205)** These models have been used for many different target applications in image classification.
>
> **[3:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=210)** Well-known text models include BERT, RoBERTa, XLNet, and the GPT family of models.
>
> **[3:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transfer-learning?u=76281980&t=218)** These models are today's state of the art for a multitude of text understanding, classification and text generation problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Microsoft Office|Office]] (2), [[Google]] (1), [[Neural Networks]] (1)
> **Analogies:** such as (6), picture (3)
> **Env Vars:** bert (3), vgg (1), gpt (1)
> **Definitions:** is a  (3), we call this (1)
> **Speakers:** - [instructor] (1)


### 3. Sequence Classifiers

[↑ Back to Table of Contents](#table-of-contents)

#### [Modeling sequences with language models](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=0)** - [Instructor] Let's talk about sequence classification, and in particular, language models which are used to predict the next [[Microsoft Word|word]] in a sentence.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=9)** To start, recall how feedforward [[Neural Networks]] work.
>
> **[0:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=13)** In a feedforward neural network, the input vector X is passed to the first hidden layer which produces an output vector Y.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=22)** The output goes to another hidden layer which produces the vector Z and so on until we reach the output layer of the neural network.
>
> **[0:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=32)** The output layer has one output for each of many classes.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=36)** So a feedforward neural network classifies the input vector X into one of many classes at the output layer.
>
> **[0:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=43)** You can see here we are showing a neural network which has three output classes.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=48)** Each layer of the neural network produces its output by multiplying its input with the weight metrics and then passing that result through a non-linear activation function.
>
> **[0:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=58)** The activation functions are shown by the letters F and G.
>
> **[1:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=62)** For a simplified view, we often depict each layer of the neural network by a rectangle.
>
> **[1:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=67)** Using the simplified representation an image classification neural network that classifies pictures of animals can be represented like you can see over here.
>
> **[1:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=77)** But image classification isn't the only thing that neural networks are good for.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=81)** Let's switch to predicting sequences of text.
>
> **[1:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=84)** For example, we want to predict the next word in a sentence.
>
> **[1:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=89)** Let's consider the simple sentence, how old are you?
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=93)** We want to predict the next word in the sentence given the previous words.
>
> **[1:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=97)** Let's see how a feedforward neural network would accomplish this task.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=102)** In the beginning, we have the word how, and we want to predict the next word, which is the word old.
>
> **[1:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=110)** Of course, the network has many possible words it can output but let's pretend it outputs the correct word, old.
>
> **[1:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=119)** Next, we give the network the word old as its input, and we want to predict the word are.
>
> **[2:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=125)** Next, we give the network the word are, and we want it to predict the word you.
>
> **[2:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=131)** Finally, we give the network the word you as its input, and we want it to predict the token end of sentence.
>
> **[2:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=140)** However, at each point in time, the network sees just one word at its input.
>
> **[2:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=146)** It's as if all previous words are blanked out.
>
> **[2:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=150)** This lack of context makes the task very hard.
>
> **[2:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=153)** For example, when the input word is are, the output can be any of many possible words, and the feedforward neural network can only take a random guess.
>
> **[2:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=164)** On the other hand, if the network could see all the previous words, how old are, then it would easily predict the next word as you.
>
> **[2:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=174)** Unfortunately, a feedforward neural network has no way to remember the previous words in the sentence, and therefore lacks this critical context.
>
> **[3:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=184)** We need something more powerful than a feedforward neural network to predict the next word of a sentence.
>
> **[3:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=192)** The device that accomplishes this task is called a language model.
>
> **[3:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=196)** Language models take the entire previous context of a sentence to predict the next word.
>
> **[3:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/modeling-sequences-with-language-models?u=76281980&t=202)** In our next video, we will see how to modify feedforward neural networks to create a language model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (17), [[Neural Networks]] (3)
> **Analogies:** for example (2)
> **Cross-References:** next video (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Recurrent neural network language models](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=0)** - [Instructor] Let's talk about a new kind of neural network called the recurrent neural network which is used for doing language modeling and other sequence classification tasks.
>
> **[0:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=11)** We build up the idea of recurrent [[Neural Networks]] using the same task we described in the last video that of predicting the next [[Microsoft Word|word]] in the sentence given all the previous words.
>
> **[0:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=21)** As before let's consider the sentence, "How old are you?"
>
> **[0:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=26)** Each word represents a different point in time.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=29)** The word how occurs at time instant one.
>
> **[0:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=33)** The word old occurs at time instant two, and so on.
>
> **[0:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=37)** Given the first word of the sentence how, we want our network to predict the next word of the sentence, old.
>
> **[0:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=45)** Since there's no previous context before the first word how, a feed forward neural network can accomplish this task.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=53)** So we move on to the next word.
>
> **[0:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=56)** Now the feed forward neural network has to predict the word are because the feed forward neural network can only consider one word at its input, it can only use the word old to predict the word are.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=70)** What we really want is for the network to consider not just the word old, but the words how and old in order to predict the word are.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=81)** At its input layer, the network can only look at one word.
>
> **[1:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=85)** So how do we consider both the words how and old at the same time?
>
> **[1:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=91)** This can be accomplished by a simple device.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=94)** At the second time instant when the neural network is processing the word old, we allow its hidden layer to also see its own output from the previous time instant.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=106)** The output of the hidden layer at the first time instant is multiplied by the weight metrics Wh and passed as an additional input to the same layer of the neural network in the second time instant.
>
> **[1:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=119)** So at the second time instant, the hidden layer sees not only the word old but also its own output from the first time instant multiplied by the weight metrics Wh.
>
> **[2:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=132)** The output of the hidden layer at the second time instant is, therefore, dependent on both the words, how and old.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=141)** The connection between the first and second time instance of the hidden layer is called a recurrent connection.
>
> **[2:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=148)** We can think of this as a time shifted self loop from the output of the hidden layer back to its input.
>
> **[2:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=155)** Continuing this idea when the recurrent neural network sees the word are, it processes the word are, but also the words how and old because of the recurrent connection in the hidden layer.
>
> **[2:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=170)** Finally, when the neural network sees the words how, old, are, and you, it is able to easily predict the end of sentence marker because of the context it has built through its recurrent connections.
>
> **[3:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=185)** What we have seen so far is called the unrolled representation of the recurrent neural network.
>
> **[3:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=191)** Sometimes recurrent neural networks are also shown with a loop as in the right of this figure.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=198)** By unrolling this loop over time, we get the unrolled representation on the left of this figure.
>
> **[3:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=205)** It is far more easy to think about recurrent neural networks using the unrolled representation because you can clearly see how each word is processed in time.
>
> **[3:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/recurrent-neural-network-language-models?u=76281980&t=216)** This is particularly useful when we train models, but that's beyond the scope of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (20), [[Neural Networks]] (3)
> **Definitions:** is called (2)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### [Machine translation and encoder-decoder networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=0)** - [Instructor] Let's consider an application of recurrent [[Neural Networks]] that we commonly use at [[LinkedIn]], machine translation.
>
> **[0:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=8)** We'll use our previous sentence, "How old are you?"
>
> **[0:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=11)** And try to translate it into Chinese.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=15)** First, we will consider what happens if we do simple [[Microsoft Word|word]] for word translation of the words in the sentence.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=22)** So first we translate the word how into its Chinese equivalent.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=27)** Then we translate the word old.
>
> **[0:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=30)** Next, we translate the word are.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=34)** Finally, we translate the word you.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=38)** If we look at the sequence of Chinese words we got from these word for word translations, it turns out that it means something quite different in Chinese than what we intended.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=48)** The English sentence, "How old are you?"
>
> **[0:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=51)** Has been translated into the Chinese sentence, "Why is it always you?"
>
> **[0:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=56)** Clearly, this is a poor translation.
>
> **[0:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=59)** The correct translation is shown in this figure.
>
> **[1:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=62)** The Chinese sentence has only three words as opposed to the four words in the English sentence.
>
> **[1:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=69)** And the sequence of three words correctly translates the English sentence into Chinese.
>
> **[1:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=75)** Apart from the number of words in the Chinese sentence being less than that of the English sentence, the words in the Chinese sentence are also in a different order than in the English sentence.
>
> **[1:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=88)** It is obvious that a word for word translation cannot possibly get us this correct translation.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=94)** But unfortunately, it turns out that a recurrent neural network cannot really do this task.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=100)** The reason for this is that a recurrent neural network outputs a word for every input word.
>
> **[1:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=107)** If the English sentence had four words, the recurrent neural network will output four words.
>
> **[1:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=112)** Additionally, the recurrent neural network cannot reorder its output words in a different order than the input words.
>
> **[2:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=120)** This is because it only sees the previous words as its input context.
>
> **[2:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=126)** Here is another translation pair from English to French.
>
> **[2:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=131)** We are translating the sentence "The black cat drank milk."
>
> **[2:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=135)** into French.
>
> **[2:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=136)** In this case, it turns out that the English and the French words are in the same order.
>
> **[2:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=142)** However, the number of French words is greater than the number of English words.
>
> **[2:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=147)** As we've seen, a recurrent neural network by itself cannot handle this task.
>
> **[2:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=154)** In order to do machine translation, we need a new kind of neural network called an encoder-decoder neural network.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=161)** An encoder-decoder neural network is built out of two models.
>
> **[2:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=166)** As one might imagine, the first model is the encoder model and the second model is the decoder model.
>
> **[2:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=173)** Both of these models are built using recurrent neural networks.
>
> **[2:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=177)** In the encoder model, all the outputs of the hidden layer of the neural network are processed together to get a single representation for the entire input sentence.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=188)** For example, we have seven hidden representations for the seven different points in time of the English sentence, "The black cat drank milk."
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=200)** Each of these hidden representations is passed to an aggregating function, F, which creates a single representation.
>
> **[3:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=208)** The aggregating function could be one of many things.
>
> **[3:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=212)** For example, we might just average all of the hidden representations.
>
> **[3:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=217)** Or we may just take the last hidden representation, h7, and consider that to be the representation of the entire sentence.
>
> **[3:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=226)** The decoder model is just a recurrent neural network language model.
>
> **[3:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=231)** This neural network takes the output representation of the encoder model and a start of sentence token as its first input.
>
> **[4:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=240)** It then predicts the first word of the French sentence.
>
> **[4:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=243)** After that, it operates just like a recurrent neural network language model to predict the following words in French.
>
> **[4:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=251)** We can consider the decoder model to be a conditional language model.
>
> **[4:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=254)** Because it is a recurrent neural network language model that is conditioned on the representation it gets from the encoder neural network.
>
> **[4:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=263)** Derivatives of this type of encoder-decoder neural network translation model constitute the state of the art in today's machine translation technology.
>
> **[4:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=273)** There are several other applications of encoder-decoder neural networks.
>
> **[4:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=277)** For example, in text summarization we want to take a long piece of text and summarize it into a shorter piece, capturing the essence of the text.
>
> **[4:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=289)** Another example is image captioning.
>
> **[4:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=291)** In this case, the input is an image and the encoder network [[Forms]] a representation of the input image.
>
> **[4:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=299)** The decoder network then spits out a sentence which describes the input image.
>
> **[5:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=305)** We use encoder-decoder neural networks at LinkedIn in many ways.
>
> **[5:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=310)** One of our applications is that of related search.
>
> **[5:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=314)** When a user types a query into LinkedIn, we want to suggest other related queries that might be interesting to the user.
>
> **[5:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=321)** In this case, the encoder network takes the input query and forms a representation of it.
>
> **[5:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/machine-translation-and-encoder-decoder-networks?u=76281980&t=327)** This representation is then fed to the decoder network which spits out a bunch of possible queries related to the input query.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (13), [[Neural Networks]] (4), [[LinkedIn]] (3), [[Forms]] (2)
> **Analogies:** for example (3), imagine (1), just like (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** cat (2)
> **Speakers:** - [instructor] (1)

#### [Attention-based neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=0)** - [Instructor] In this video, we'll introduce the topic of attention in deep [[Neural Networks]].
>
> **[0:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=5)** Attention is a way for a neural network to focus on specific parts of its inputs to produce more accurate outputs.
>
> **[0:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=14)** To explain attention, we'll use the machine translation and coder-decoder model that we described in the previous video.
>
> **[0:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=23)** In the encoder-decoder model, the encoder takes an English sentence and produces a representation of it.
>
> **[0:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=30)** The decoder language model takes this representation as input and produces a French sentence as output.
>
> **[0:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=37)** As we saw in the previous video, this language model is called a conditional language model because it is conditioned on the English sentence representation, produced by the encoder.
>
> **[0:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=49)** Let's look at our example English sentence.
>
> **[0:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=51)** The black cat drank milk, and the corresponding French translation.
>
> **[0:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=56)** It is obvious that certain words in the French output depend on only certain words in the English input.
>
> **[1:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=63)** In particular, when producing the words that are colored in green, The French language model needs to consider only the corresponding green words in the English sentence and can safely ignore the words that are colored in yellow.
>
> **[1:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=78)** However, the encoder in our encoder-decoder neural network produces a single representation for the entire English sentence.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=87)** It does not produce a separate representation for the yellow words and for the green words.
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=93)** Therefore, the decode has no option but to consider the entire English sentence as a unit when producing its output.
>
> **[1:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=101)** It is unable to separately consider the yellow words and the green words.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=106)** We will now describe the attention mechanism which allows the decoder to consider only relevant parts of the English sentence when it is producing corresponding parts of the French sentence.
>
> **[1:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=118)** Let us start with the first [[Microsoft Word|word]] produced by the decoder.
>
> **[2:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=122)** This word is le and it is produced by using the hidden state representation of the first time unit of the decoder.
>
> **[2:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=130)** This hidden state representation is shown in this figure as S one.
>
> **[2:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=135)** In a normal encoder-decoder neural network, S one would be computed using the single representation of the entire English sentence.
>
> **[2:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=145)** Now, we will explain how attention allows us to compute S one based on only relevant hidden representations of the English encoder.
>
> **[2:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=155)** To figure out the relevant English encoder hidden states, we compute a similarity between S one and each of the hidden representations in the encoder, h1, h2, h3, et cetera.
>
> **[2:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=170)** These similarities are shown in this figure as S(1,1), S(1,2), S(1,3), et cetera.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=181)** We then normalize each of these similarities by dividing by the sum of all similarities.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=188)** These normalized similarities are shown in this figure as alpha one one, alpha one two, alpha one three, et cetera.
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=200)** The encoder representation is then computed by weighing the hidden state representations with these normalized similarities.
>
> **[3:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=209)** We would expect that when producing the first French word le, the English word the should have the most influence, because the translates to le in French.
>
> **[3:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=225)** As we can see by the orange bars, the attention mechanism achieves this by computing a high value for alpha one two, corresponding to the word the.
>
> **[3:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=237)** We now look at the second word produced by the French decoder.
>
> **[4:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=242)** This is the word chat, which is the French translation for the English word cat.
>
> **[4:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=249)** As we'd expect, the English word cat should have the most influence in producing this French word.
>
> **[4:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=256)** As we can see, the orange bars show that the word cat has the highest alpha value.
>
> **[4:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=262)** The word black is the next most important, because it characterizes the word cat, but the other words are of little importance.
>
> **[4:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=271)** The third French word is noir, which is the translation for the English word black.
>
> **[4:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=278)** Again, as we can see by the orange bars, the alpha weight for the word black turns out to be the largest.
>
> **[4:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=287)** Going through the first three words produced by the French decoder, we have seen how the attention mechanism computes a different representation for the English sentence at each time, focusing the attention of the decoder on only the relevant English words.
>
> **[5:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=303)** This is in sharp contrast to the simple encoder-decoder model where the same encoder representation is used to produce all French words.
>
> **[5:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=313)** This figure shows how attention works during machine translation.
>
> **[5:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=317)** In the figure, the English sentence is shown on the vertical axis and the corresponding French translation is shown on the horizontal axis.
>
> **[5:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=326)** The amount of attention between each French and English word pair is shown in grayscale, with black meaning zero attention and white meaning the maximum attention value of one.
>
> **[5:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=338)** As we can see in the figure, the French word noir has high attention with the English word black, but low attention with words like cat or milk.
>
> **[5:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/attention-based-neural-networks?u=76281980&t=349)** Because of this attention, when the neural network outputs the translated French word noir, it considers mostly the English word black, resulting in superior translation accuracy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (21), [[Neural Networks]] (1)
> **CLI Commands:** cat (6)
> **Cross-References:** previous video (2), as we saw (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)

#### [Transformer model](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=0)** - [Instructor] In the previous video, we learned how encoder decoder [[Neural Networks]] can use attention to improve their accuracy for machine translation.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=9)** When the decoder [[Forms]] the representation of a translated [[Microsoft Word|word]] in the target language, it focuses its attention only on the relevant words in the source language.
>
> **[0:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=19)** In this video, we will discuss how attention is used in one of the most important neural networks of today.
>
> **[0:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=26)** The transformer model.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=27)** The transformer model, is central to all state-of-the-art [[Natural Language Processing (NLP)|natural language processing]] neural networks today.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=34)** Transformer neural networks are used to model sequences.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=38)** For example, a sentence is a sequence of words and a video is a sequence of image frames.
>
> **[0:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=45)** The key aspect of the transformer model is a concept called self attention.
>
> **[0:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=50)** Through this attention mechanism, when computing the representation of any word in a sentence the transformer model decides how much weight to give` to each of the other words in the sentence.
>
> **[1:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=62)** It is called self attention because the model is attending to words in the same sentence as the word it is trying to represent.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=70)** Remember, in an encode or decode or neural network when computing representations for words in an output sentence, the encoder computes attention waits for word representations formed by the encoder for an input sentence.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=87)** In self attention the encoder does something similar.
>
> **[1:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=91)** While computing the representation for an input sentence, the encoder computes attention waits for words in the same input sentence.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=100)** For example, in the sentence, 'Cats like cold milk", to compute the representation of the word cats, the encoder first computes attention waits for all the words in the sentence.
>
> **[1:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=114)** Cats, like, cold, and milk.
>
> **[1:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=119)** We expect the attention weight for the word cat to be the strongest when representing the word cat.
>
> **[2:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=127)** However, milk may also have a strong attention weight because cats are often associated with milk.
>
> **[2:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=135)** It then multiplies these weights with the input representations for the corresponding words to produce the output representation for the word cats.
>
> **[2:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=144)** Similarly, when computing the representation for the next word, "like" the encoder computes a different set of attention weights for all the words in the input sentence, and multiplies those weights with the input representations of the words to give the output representation of the word, "like".
>
> **[2:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=165)** The encoder then computes the output representation for the next word "cold", and then for the final word, "milk".
>
> **[2:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=174)** In this manual, a transformer model uses self attention to compute output representations of the words in a sentence given their input representations.
>
> **[3:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=185)** Next, the transformer model passes these representations through a feed forward neural network to create the final output representation.
>
> **[3:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=195)** This combination of a self attention layer and a feed forward neural network layer constitutes the basic layer of a transformer network.
>
> **[3:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=203)** By stacking such transformer layers one after the other, we get a multilayer transformer neural network model.
>
> **[3:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=211)** Just like in any deep neural network, as we increase the number of transformer layers the model is able to form more powerful representations of the input sentence.
>
> **[3:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=221)** Today, transformer neural networks represent the state of the art for all natural language processing neural network models, including natural language understanding and natural language generation.
>
> **[3:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/transformer-model?u=76281980&t=234)** Transformers have also given strong results for image and video processing applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (12), [[Neural Networks]] (5), [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Forms]] (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** cat (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [Pretrained language models](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=0)** - [Instructor] Pretrained Language Models are large multilayered transformer based [[Neural Networks]] used to represent [[Microsoft Word|word]] sequences.
>
> **[0:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=8)** They are trained on extremely large amounts of unsupervised text data from sources such as Wikipedia, books, and news.
>
> **[0:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=17)** Popular pretrained language models have hundreds of millions of parameters and are trained on several billions of words.
>
> **[0:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=25)** The idea is that by training on such a large corpora of text data representing various domains and topics, these [[Large Language Models (LLM)|large language models]] will learn the nuances of words and the contexts in which they are used.
>
> **[0:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=40)** However, because this training data doesn't contain any explicit human labels, we fashion special training tasks that provide us labels required for learning.
>
> **[0:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=52)** Let's talk about the Mask Language Model and Next Sentence Prediction tasks which are used to pretrain BERT, one of the most popular pretrained language models.
>
> **[1:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=63)** The BERT model architecture is exactly the multilayer transformer model we learned about in the last video.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=70)** The special thing about BERT is how it is trained.
>
> **[1:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=74)** At its input layer, BERT takes in a pair of sentences, separated by a separator, or a SEP token.
>
> **[1:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=82)** BERT also has a beginning of sentence token represented by CLS BERT processes these input [[Tokens]] to produce representations of them at all layers of the model.
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=95)** At the output layer, the CLS representation represents the entire input word sequence.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=102)** The output layer also has separate contextual representations for each word in the input sequence.
>
> **[1:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=109)** Two specific tasks were fashioned to pretrain BERT.
>
> **[1:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=113)** For the first task, some fraction of the input words are masked and BERT is required to predict those words at its output layer.
>
> **[2:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=123)** This is called the Mask Language Model Task.
>
> **[2:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=126)** To perform this task well, BERT needs to learn representations that capture the context in which different words appear in sentences.
>
> **[2:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=136)** The second task is called the Next Sentence Prediction Task.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=141)** In this task, BERT is required to predict whether the second sentence in the input naturally follows the first sentence.
>
> **[2:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=150)** During training, BERT is represented with sentence pairs that follow each other from the original text, but also with random pairs of sentences which do not follow each other.
>
> **[2:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=162)** The next sentence, they also like to groom themselves, naturally follows the first sentence, and so we would like BERT to predict yes for this sentence pair.
>
> **[2:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=172)** In this example we have the same first sentence as the previous one.
>
> **[2:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=177)** However, the second sentence, "The man wore a red shirt," clearly doesn't have anything to do with the first sentence and so we'd like BERT to predict no for this sentence pair.
>
> **[3:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=190)** To perform the next sentence prediction task, BERT needs to understand sentence meaning and the context in which sentences occur in paragraphs.
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=200)** When BERT is trained on the Mask Language Model and Next Sentence Prediction Task, using hundreds of millions of sentences with billions of words, it [[Forms]] an extremely powerful representation of language.
>
> **[3:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=214)** This pretrained BERT model can then be further trained for different target tasks in a process called [[Fine Tuning]].
>
> **[3:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=223)** For example, the target task might be to determine if a movie review is positive or negative.
>
> **[3:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=231)** We would have a small number of labeled examples of positive and negative movie reviews, and we'd used this data to fine tune the already pretrained BERT language model.
>
> **[4:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=241)** The input to BERT would just be the text corresponding to the movie review, and the output would be either a positive or negative label, depending on whether the review was positive or negative.
>
> **[4:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=254)** Another target task is that of textual entailment.
>
> **[4:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=258)** In textual entailment, the model needs to predict whether the second sentence is true, false, or neutral, given the first sentence.
>
> **[4:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=268)** In the example shown in this figure, the second sentence, "Pat is a dog," is true.
>
> **[4:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=276)** Given that the first sentence says, "Pat is a small brown dog."
>
> **[4:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=280)** In this example, we see a false entailment because the second sentence, "Pat is a dolphin," cannot be true given that the first sentence tells us, "Pat is a small brown dog."
>
> **[4:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=293)** Pretrained language models based upon the transformer architecture have become the state of the art in today's [[Natural Language Processing (NLP)|natural language processing]] tasks.
>
> **[5:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=302)** By training on a large amount of unsupervised data, pretrained language models form an extremely powerful representation of language.
>
> **[5:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=311)** They can then be fine tuned on several target tasks.
>
> **[5:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=314)** We described two different fine tuning tasks, classification and entailment.
>
> **[5:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=320)** However, there are several other target tasks such as name identity recognition, question answering, and part of speech tagging.
>
> **[5:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/pretrained-language-models?u=76281980&t=329)** At [[LinkedIn]], we make use of many of these tasks to process things like queries, posts, member profiles, and job descriptions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (3), [[Fine Tuning]] (2), [[Neural Networks]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Tokens]] (1)
> **Env Vars:** bert (18), cls (2), sep (1)
> **Definitions:** is a  (4), is called (2)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** required to (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)


### 4. Graph Neural Networks

[↑ Back to Table of Contents](#table-of-contents)

#### [Motivation and introduction](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=0)** - [Instructor] Let's introduce the field of Graph [[Neural Networks]], where we apply deep neural networks to graph structure data to solve a variety of prediction problems.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=9)** Throughout this course, we've seen several methods for working with sequential data like recurrent neural networks and transformers for text, which is a sequence of words or characters.
>
> **[0:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=19)** We've also seen methods for working with two-dimensional data like [[Convolutional Neural Networks (CNN)|convolutional neural networks]] for images, which we can conceive of as a grid of pixels.
>
> **[0:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=28)** However, many kinds of data are more naturally represented using a graph.
>
> **[0:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=33)** Formally speaking, a graph or network graph is a data structure defined by a set of nodes or vertices, and set of links or edges connecting them.
>
> **[0:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=44)** Graphs are the most expressive type of data we've looked at so far.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=48)** Sequences and images can even be viewed as restricted kinds of graphs, where each position is represented as a node and connected only to the adjacent positions.
>
> **[0:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=58)** Of course, graphs can also have connection between arbitrary pairs of nodes, making their structure much more variable.
>
> **[1:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=65)** Taking advantage of this more complex structure is one of the reasons to use graph neural networks, which we also call GNNs.
>
> **[1:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=73)** Let's consider a social graph, where the nodes are people, and edges indicate which people know each other.
>
> **[1:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=79)** Imagine a single node that represents yourself.
>
> **[1:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=83)** We could add a node for everyone you know, and connect those nodes to your node to represent that relationship.
>
> **[1:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=90)** In graph terminology, the set of nodes directly connected to a given node is called a neighborhood, which will be an important concept in graph neural networks as we'll see.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=100)** Naturally, some of the folks you know probably also know each other, so we can add edges between their nodes.
>
> **[1:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=107)** Now, we can expand the graph to include all the friends of your friends and all the ways in which they are connected to everyone already in the graph.
>
> **[1:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=115)** If we kept going like this, we could expand the social graph to include millions or even billions of people from around the world as some modern social networks do.
>
> **[2:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=124)** Building on this basic social graph, we can add other types of nodes, like interests and edges showing which people have which interests.
>
> **[2:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=133)** We can now use the social graph to answer questions.
>
> **[2:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=136)** For example, to answer the question of whether person A knows person B, we could query the graph to see if there is an edge between the nodes A and B.
>
> **[2:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=147)** Similarly, we can find all the interests of person A by searching for all the interest nodes in the graph that are connected to person A's node.
>
> **[2:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=156)** This works if the graph contains every person and all their interests.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=161)** But in the real world, the information in graph data sets is often incomplete and noisy, so we need to go beyond simply inspecting the structure of the graph to making predictions about its contents.
>
> **[2:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=174)** For instance, some nodes in an online social network graph might be bots, not actual humans.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=181)** If we can label some of the nodes as humans, H, and others as bots, B, we can use these nodes as instances for a [[Supervised Learning]] problem.
>
> **[3:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=191)** This is an example of node classification.
>
> **[3:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=194)** In general, with graph neural networks, we'll be able to learn embeddings for nodes in a graph that we can use for a variety of node level prediction problems.
>
> **[3:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=204)** Even when the data in the graph is accurate, it's often incomplete.
>
> **[3:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=208)** In real life, social network users connect with only some of the people they know, and indicate only some of the interests they have, but based on patterns observed for other users, we could make educated guesses about whether a person has a certain interest, or is connected to a certain other person.
>
> **[3:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=224)** These are examples of link prediction.
>
> **[3:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=227)** When using GNNs for link prediction, we can infer a [[Probability]] that any two nodes in the graph are linked in a particular way.
>
> **[3:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=235)** These predicted links could be used to fill in missing data in the graph or to make recommendations, such as interest a given person might want to explore.
>
> **[4:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/motivation-and-introduction?u=76281980&t=245)** Next, we'll see how we can learn unsupervised embeddings for nodes in a graph, and then how GNNs can solve supervised prediction problems like these.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (6), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Supervised Learning]] (1), [[Probability]] (1)
> **CLI Commands:** node (8), make (2), find (1)
> **Definitions:** is a  (2), is an  (2), is called (1)
> **Analogies:** imagine (1), for example (1), for instance (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Node embeddings](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=0)** - [Instructor] In this video we'll look at ways we can learn embeddings for nodes in a graph.
>
> **[0:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=4)** These techniques produce generic embeddings that encode information about the graph structure.
>
> **[0:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=10)** After training, these unsupervised embeddings can be used for a variety of prediction problems.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=15)** While we often represent graphs visually it's important to remember that graphs are logical [[Data Structures]] defined by the set of nodes and edges they contain.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=24)** The two graphs shown here are actually the same graph.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=27)** I've just moved the nodes around.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=29)** In a sense this is what we're doing when we learn node embeddings.
>
> **[0:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=33)** We're assigning each node to a point in an embedding space.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=36)** Depending on the embedding approach, the same node might end up in very different places.
>
> **[0:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=42)** In general, embedding techniques allow us to map our space of items into an embedding space in such a way that the distance between any two items in the embedding space represents their similarity.
>
> **[0:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=54)** It's important to understand that there's no single correct way to create node embedding some graphs.
>
> **[0:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=59)** A variety of techniques are used depending on which nodes we see as similar to each other.
>
> **[1:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=64)** Let's look at a couple of examples of different but equally valid ways of thinking about similarity between nodes in a graph.
>
> **[1:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=71)** Using a social graph for illustration in this social graph, nodes represent people and their interests, for people to be similar it might mean that they share similar interests and are connected to similar sets of people the way person A and person B are, in the example here.
>
> **[1:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=88)** We might consider two interests to be similar if many of the same people are interested in them like interest one and interest two in this example.
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=96)** This version of similarity represents structural similarity where nodes are similar to each other 'cause they stand in the same relationship to other nodes in the graph.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=106)** On the other hand, we might take a different view of similarity based on the idea that people tend to connect to others because they have things in common.
>
> **[1:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=115)** In this scenario, also known as homophily, we would want to learn an embedding space where connected nodes are closer to each other than nodes that aren't connected.
>
> **[2:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=125)** Applying this version of similarity to our social graph, we might end up with an embedding space like the one shown here.
>
> **[2:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=132)** Let's compare these two ways of embedding the same graph.
>
> **[2:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=136)** We can see that certain nodes, like one and two that were close together in the first embedding space are far apart in the second version, simply because they're not directly connected.
>
> **[2:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=147)** As this example illustrates, the same graph can lead to a very different set of node embeddings, depending on how we define similarity between nodes.
>
> **[2:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=156)** Taking the latter view of similarity where connected nodes are seen as similar to each other.
>
> **[2:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=162)** Let's turn to how we might learn embeddings for the nodes in any given graph.
>
> **[2:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=167)** We'll now describe an iterative procedure for learning node embeddings.
>
> **[2:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=170)** We start by initializing the node of embeddings randomly as shown here, and then refine them with each iteration until convergence or the point when they stop changing very much.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=181)** The key with any such iterative procedure is how to update the embedding values during each iteration.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=188)** Since we're working with a definition of similarity in which connected nodes are seen as more similar and unconnected nodes as less similar we can take every pair of nodes in the graph as a training example.
>
> **[3:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=201)** Pairs of nodes that are directly connected in the graph become positive training examples, and pairs of nodes that aren't directly connected are negative examples.
>
> **[3:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=211)** Now, on each iteration, we can examine each pair of nodes in turn.
>
> **[3:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=217)** If it's a positive example meaning the nodes were connected in the graph we move the embeddings of both nodes slightly closer together like this.
>
> **[3:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=228)** If it's a negative example meaning the nodes were not connected in the graph we move the embeddings of both nodes slightly further apart like this.
>
> **[3:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=237)** As an analogy, think of the positive pairs of nodes as attracting each other and the negative pairs of nodes as repelling each other.
>
> **[4:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=245)** Early on the nodes might move around a lot as they're being pulled and pushed by many other nodes but over time they'll settle down.
>
> **[4:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=253)** After we've processed all the positive and negative examples in this way, we complete the iteration.
>
> **[4:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=259)** The embedding space might look something like this.
>
> **[4:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=261)** We could either repeat this note embedding update procedure for a fixed number of iterations or we could compare the embeddings before and after each iteration and stop when they've changed less than a certain amount, meaning the training has converged.
>
> **[4:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=277)** So we've learned a basic iterative approach for deriving node embeddings from the connections in a graph.
>
> **[4:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=283)** Methods like this can be effective for fixed graphs, but consider what would happen if we were to add some new nodes to the graph like node four here.
>
> **[4:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=292)** We wouldn't immediately know where to put the new nodes in the embedding space because what we have learned is simply a mapping from the existing nodes to their embeddings.
>
> **[5:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=301)** We could, of course rerun the entire training process starting over with random embeddings for all the nodes but this could get very expensive, especially if we are repeatedly adding a small number of nodes to a very large graph, which often happens in real life social networks.
>
> **[5:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/node-embeddings?u=76281980&t=318)** In the next video, we'll look at graph neural network methods that are able to compute embeddings for new nodes in the graph by combining embeddings for existing nodes.

> [!info]- Semantic Content
>
> **CLI Commands:** node (9)
> **Analogies:** similar to (2)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Graph neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=0)** - [Narrator] Thinking back on the supervised neural network approaches we've seen, there is a basic pattern at work.
>
> **[0:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=6)** The first stage is to convert a complex data structure, such as a document or an image, into a fixed-length vector, or embedding.
>
> **[0:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=13)** The architecture of the deep neural network chosen here depends on the specific data structure we're working with.
>
> **[0:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=20)** In the second stage, the embedding is then transformed into a prediction for a supervised prediction problem.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=27)** This part of the network is defined by the prediction problem itself.
>
> **[0:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=30)** So we might use a softmax classifier for a classification problem, for example.
>
> **[0:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=35)** During training, the entire network can be optimized to best solve the supervised objective.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=41)** Graph [[Neural Networks]], or GNNs, apply the same pattern to making predictions about nodes in a graph.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=48)** GNNs can learn node embeddings as part of a single end-to-end supervised neural network that solves a specific prediction problem.
>
> **[0:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=56)** In supervised settings, this ability to optimize all the parameters against the supervised objective can be an advantage over the unsupervised node embedding approaches we saw in the previous video, which can encode generic properties of the graph structure.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=70)** Let's look at an example GNN for a node classification problem.
>
> **[1:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=74)** We'll build up our GNN starting from a single node, like node A in this graph.
>
> **[1:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=79)** In the GNN context, we consider each node to be associated with a feature vector X, as well as a set of edges connecting it to other nodes.
>
> **[1:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=88)** Given that, the simplest way we could build a node classifier would be to use a basic feed-forward neural network, like a multi-layer perceptron, or MLP, to transform the feature vector X into an embedding for the node and then apply a standard classifier over this embedding.
>
> **[1:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=104)** But this would not be a true GNN, as we can see that it does not consider the graph structure.
>
> **[1:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=110)** The model would make the same prediction for any two nodes with the same feature vector, regardless of where they are in the graph.
>
> **[1:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=117)** How can we incorporate the graph structure into the neural network architecture?
>
> **[2:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=121)** We can extend the approach to involve the node's neighbors by applying the same kind of MLP transformation to each of their feature vectors and then aggregating those embeddings together into a neighborhood embedding via a pooling operation.
>
> **[2:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=137)** The simplest pooling operation would be to average the embeddings of the neighbor nodes.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=141)** Now, we can concatenate the embedding for the neighborhood with the feature vector for our current node and feed that into the MLP to create our embedding for node A, which is then fed to the classifier as before.
>
> **[2:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=153)** Before going further, it's worth pausing to consider what we've done with this seemingly simple change.
>
> **[2:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=158)** We have created a node embedding that incorporates both the features of the current node and those of the nodes it's connected to in the graph, its neighborhood.
>
> **[2:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=167)** The structure of this neural network, its computation graph, is now dependent on the structure of the original graph.
>
> **[2:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=174)** In social graph terms, that means that the embedding for a person would include information about which people and interests they're directly connected to.
>
> **[3:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=182)** We can extend this pattern even further by including the neighbors' neighbors into the network's computation graph.
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=188)** In this version, I've hidden the neighborhood pooling layers for simplicity.
>
> **[3:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=193)** Each time we add another layer like this, we're making the GNN more expressive in two ways.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=198)** First, the network gets deeper, adding more nonlinear layers.
>
> **[3:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=203)** Second, the sets of nodes and edges that influence the current node's embedding increases significantly.
>
> **[3:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=210)** At this point, the embedding for node A is already influenced by all the other nodes in the example graph, sometimes via multiple paths.
>
> **[3:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=219)** Unlike in the previous video, the GNN approach we've just described can be used to make predictions for any new nodes added to the network or, in general, reapplied after the graph structure changes.
>
> **[3:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=230)** This is because it can translate the new graph structure into a new computation graph and then apply the learned network parameters in the new computation graph to generate a different prediction.
>
> **[4:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=241)** Let's say we've trained the network parameters on the original graph, and then we add a node F to the graph, as shown here.
>
> **[4:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=249)** We can generate an embedding for F using the graph structure and the MLP parameters we've already learned and make classification predictions for F right away.
>
> **[4:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=260)** The embeddings of the existing nodes in the graph will also be changed, as their computation graphs will now include node F and be influenced by its features and connections.
>
> **[4:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=271)** To recap, in this series of videos, we covered some graph fundamentals and introduced core graph prediction problems, like node classification.
>
> **[4:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=279)** Then we looked at different ways of understanding similarity between nodes in a graph and how we might learn unsupervised embeddings that encode the graph structure.
>
> **[4:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=288)** Finally, we introduced graph neural networks, or GNNs, a powerful family of techniques where the structure of computation in the neural network is dictated by the structure of the original graph.
>
> **[5:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/graph-neural-networks?u=76281980&t=300)** GNNs can then learn node embeddings as part of end-to-end training within a specific prediction problem.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (2)
> **CLI Commands:** node (19), make (3)
> **Env Vars:** gnn (6), mlp (4)
> **Cross-References:** previous video (2), we covered (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing the AI-100 learning path](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=0)** - [Ananth] You've reached the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=2)** Congratulations.
>
> **[0:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=3)** - [Daniel] Now that you understand the basics of some of the most popular neural network architectures, we hope you'll continue on your journey by delving deeply into specific models that may be of interest to you or the problems you are solving.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=15)** - [Ananth] If anything in this course was particularly interesting or relevant to you, check out the [[LinkedIn]] Learning Library to dive deeper into that topic.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=24)** - [Daniel] Also, check out the final course in the AI Academy 100 series where I and some of our other LinkedIn AI staff discuss how we apply these concepts to problems right here at LinkedIn.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=36)** I'm Daniel Hewlett.
>
> **[0:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=37)** - I'm Ananth Sankar.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=38)** - [Daniel And we really enjoyed helping you along your AI journey.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-2-supervised-learning-with-neural-networks/continuing-the-ai-100-learning-path?u=76281980&t=41)** Thanks so much.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3)
> **Speakers:** - [ananth] (2), - [daniel] (2), - i (1), - [daniel (1)


## Instructor

- [[Daniel Hewlett]]
- [[Ananth Sankar]]

## Skills Covered

- Supervised Learning
- Artificial Intelligence (AI)
- Artificial Neural Networks

## Path Context

### In [[LinkedIn's AI Academy]]
← [[Linkedin Ai Academy Ai 100 1 Demystifying Ai]] | **2 of 3** | [[LinkedIn AI Academy AI-100- 3 Scaling AI at LinkedIn]] →

## Appears In

- [[LinkedIn's AI Academy]]

## Related Courses

_Courses sharing skills:_

- [[AI Workshop- Build a Neural Network with PyTorch Lightning]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[AI Workshop- Build a Neural Network with PyTorch Lightning (2023)]] — Artificial Intelligence (AI), Artificial Neural Networks
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)