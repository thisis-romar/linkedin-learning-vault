---
type: course
cssclasses:
  - lle-course
slug: deep-learning-fundamentals-for-healthcare
url: "https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare"
duration_minutes: 146
duration: 2h 26m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHLvL9ul_FWwg/learning-public-crop_675_1200/B4EZWHE3d5HUAg-/0/1741727955118?e=2147483647&amp;v=beta&amp;t=X49Enfvm0NEG5-tyAzBPLpEkIog97lJ06DyJAT8zbfc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[AI for Healthcare- Essentials for Technical Roles]]'
prev_courses:
  - '[[Advanced AI- NLP Techniques for Clinical Datasets]]'
path_nav: '[{"path":"AI for Healthcare- Essentials for Technical Roles","position":6,"total":6,"prev":"Advanced AI- NLP Techniques for Clinical Datasets","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/devops
  - topic/network-and-system-administration
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Deep%20Learning%20Fundamentals%20for%20Healthcare.md)

![Deep Learning Fundamentals for Healthcare](https://media.licdn.com/dms/image/v2/D4E0DAQHLvL9ul_FWwg/learning-public-crop_675_1200/B4EZWHE3d5HUAg-/0/1741727955118?e=2147483647&amp;v=beta&amp;t=X49Enfvm0NEG5-tyAzBPLpEkIog97lJ06DyJAT8zbfc)

# Deep Learning Fundamentals for Healthcare

> Explore the exciting world of deep learning applications in healthcare through this in-depth course. Learn how to classify and detect abnormalities in X-ray images through convolutional neural networks (CNNs), fine-tuning pre-trained models, and leveraging zero-shot learning. Understand the basics of deep learning, including neural networks, model training, and hyperparameter tuning tailored speci

> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare) | 2h 26m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Getting started with deep learning for healthcare](#getting-started-with-deep-learning-for-healthcare)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to Deep Learning for Healthcare**](#1-introduction-to-deep-learning-for-healthcare) (10 videos)
  - [What is deep learning?](#what-is-deep-learning)
  - [Why deep learning excels in healthcare?](#why-deep-learning-excels-in-healthcare)
  - [How deep learning works: ​Anatomy of neural networks](#how-deep-learning-works-anatomy-of-neural-networks)
  - [Deep learning architectures](#deep-learning-architectures)
  - [Deep learning algorithms](#deep-learning-algorithms)
  - [Key concepts in training deep learning models](#key-concepts-in-training-deep-learning-models)
  - [Deep learning frameworks and libraries](#deep-learning-frameworks-and-libraries)
  - [Building and implementing neural networks: TensorFlow](#building-and-implementing-neural-networks-tensorflow)
  - [Building and implementing neural networks: PyTorch](#building-and-implementing-neural-networks-pytorch)
  - [Limitations and ethical considerations](#limitations-and-ethical-considerations)
- [**2. Computer Vision for Healthcare**](#2-computer-vision-for-healthcare) (10 videos)
  - [Introduction to computer vision in healthcare](#introduction-to-computer-vision-in-healthcare)
  - [Understanding image data in healthcare](#understanding-image-data-in-healthcare)
  - [Anatomy of medical images: Exploring digital properties and structure](#anatomy-of-medical-images-exploring-digital-properties-and-structure)
  - [Preparing X-ray image datasets for computer vision tasks](#preparing-x-ray-image-datasets-for-computer-vision-tasks)
  - [Task overview : Classifying normal vs. pneumonia X-rays](#task-overview-classifying-normal-vs-pneumonia-x-rays)
  - [Classifying normal vs. pneumonia X-rays using convolutional neural networks (CNNs)](#classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns)
  - [Classifying normal vs. pneumonia X-rays using a pretrained architecture](#classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture)
  - [Classifying normal vs. pneumonia X-rays using zero-shot learning](#classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning)
  - [Task overview: Object detection in medical imaging](#task-overview-object-detection-in-medical-imaging)
  - [Zero-shot object detection in X-rays using CLIP-based models](#zero-shot-object-detection-in-x-rays-using-clip-based-models)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting started with deep learning for healthcare](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980&t=0)** - We're living in fascinating times and if you've been following conversations about data and [[Artificial Intelligence (AI)|artificial intelligence]], you've likely come across the term [[Deep Learning]] and how it's transforming our world.
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980&t=12)** In this course, we'll focus on deep learning, specifically within the context of healthcare.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980&t=18)** Our goal is to understand the fundamentals and apply them to domain-specific scenarios and use cases.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980&t=25)** Together, we'll explore how deep learning works, its connection to machine learning, the process of model training and hyperparameter tuning and explore the effective use of pre-trained models for healthcare applications.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980&t=41)** My name is Wuraola Oyewusi.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/getting-started-with-deep-learning-for-healthcare?u=76281980&t=44)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Speakers:** - we (1)

#### [What you should know](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=0)** - This course is designed to introduce you to [[Deep Learning]], an important subset of machine learning and some of the ways it's applied in healthcare.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=10)** If this is all new to you, a good starting point is my [[Machine Learning Fundamentals for Healthcare]] course on [[LinkedIn]] Learning.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=18)** In that course, I provide context on the relationship between machine learning, [[Data Science]] and [[Artificial Intelligence (AI)|artificial intelligence]].
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=28)** Throughout this course, I encourage you to code along whenever possible.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=33)** All the code is written in [[Python (Programming Language)|Python]] and we'll be working in Colab notebooks.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=38)** Plus, the exercise files are available as downloadable zipped files to make it easy to follow along.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=47)** If programming is new to you, I recommend checking out my [[Python for Health Sciences and Healthcare]] course, also on LinkedIn Learning.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-you-should-know?u=76281980&t=55)** It's designed to help you get up to speed with Python in a healthcare context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[LinkedIn]] (2), [[Deep Learning]] (1), [[Data Science]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **CLI Commands:** python (3), make (1)
> **Tools:** colab (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - this (1)


### 1. Introduction to Deep Learning for Healthcare

[↑ Back to Table of Contents](#table-of-contents)

#### [What is deep learning?](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=0)** - [Instructor] [[Deep Learning]] is a specialized subset of machine learning where [[Algorithms]] learn complex patterns from data using layered structures called [[Artificial Neural Networks]], ANNs.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=15)** The concept of interconnected layers in ANNs is modeled after the structure of Biological [[Neural Networks]], BNNs.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=24)** However, it's important to know that deep-learning algorithms are far less complex than biological neural networks.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=32)** To help paint the clearer picture, let's compare artificial neural networks and biological neural networks.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=40)** In terms of structure, ANNs are made of artificial neurons, also called nodes, connected by weighted edges.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=49)** These nodes pass information to one another, and the weight determines the importance of that information.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=57)** ANNs are inspired by the structure and function of biological neurons.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=63)** BNNs, on the other side, are composed of biological neurons connected by synapses and are found in living organisms.
>
> **[1:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=73)** When it comes to layers, ANNs are arranged in distinct layers, such as input, hidden, and output layers.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=83)** This organization influences the architecture of deep-learning models.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=88)** In contrast, the layers in BNNs are complex and not as clearly defined.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=96)** Task focus also differs significantly.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=99)** ANNs are computationally specific, such as recognizing objects in images or generating sequences like text.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=109)** BNNs, in contrast, underlying cognitive functions in living systems from perception to memory, and even [[Decision-Making]].
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=120)** Information processing in ANNs involves applying mathematical functions to numerical input through weighted sums and activation functions.
>
> **[2:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=130)** Activation functions decide whether a neuron should fire or pass its output to the next layer.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=138)** BNNs, however, process information through electrical or chemical signals transmitted via synaptic connections.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=148)** Learning mechanisms also set them apart.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=151)** ANNs learn through methods such as back propagation.
>
> **[2:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=156)** Back propagation is a method where model calculates the difference between its prediction and the actual results, then adjust the weight to reduce errors, while BNNs learn through synaptic plasticity, where the strength of synaptic connection changes based on your activity.
>
> **[2:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=177)** Energy efficiency is another key distinction.
>
> **[3:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=180)** ANNs often require significant computational resource, such as GPUs for training on large datasets, while BNNs have potential to be more energy efficient.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=192)** Research in this area is still ongoing.
>
> **[3:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=196)** The actual energy efficiency of BNNs can vary depending on the specific implementation.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=204)** By now, we know that despite their complexity, ANNs are still simplified models compared to BNNs.
>
> **[3:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=212)** To bring this comparison to life, here's a visual representation of ANNs versus BNNs.
>
> **[3:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/what-is-deep-learning?u=76281980&t=219)** This illustration was created using [[Generative AI]], a fascinating application of artificial neural networks themselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Neural Networks]] (3), [[Neural Networks]] (3), [[Algorithms]] (2), [[Deep Learning]] (1), [[Decision-Making]] (1)
> **Analogies:** such as (4), picture (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Why deep learning excels in healthcare?](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=0)** - Healthcare generates a vast amount of complex data, from medical images to electronic health records.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=7)** This diversity and complexity presents significant challenges for traditional machine learning methods.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=15)** [[Deep Learning]] offers several key advantages that address these challenges, which is why it excels in healthcare.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=26)** Handling complex data.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=28)** Deep learning excels at analyzing complex and diverse data types, including medical images, clinical notes, genomic sequences and time series data from wearable devices.
>
> **[0:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=43)** These types of data are often challenging for traditional machine learning [[Algorithms]] to process effectively.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=51)** Automatic feature extraction.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=54)** Traditional machine learning often relies on manual [[Feature Engineering]], where experts carefully select and extract specific features from the data.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=65)** This process is time consuming and can be subjective.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=70)** Deep learning models, on the other hand, can automatically learn relevant features directly from broad data, significantly reducing the need for extensive manual effort.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=84)** Improved pattern recognition.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=86)** Deep learning models are highly effective at identifying complex patterns and certain nuances within large data sets, such as detecting subtle abnormalities in medical images or predicting disease progression based on patient records.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=106)** [[Scalability]] and generalization.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=109)** Large pretrained models trained on massive data sets can be fine tuned for specific healthcare tasks, such as disease diagnoses or drug discovery.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=122)** This approach significantly reduces training time and computational resources compared to training the model from scratch.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=132)** Some of the most impactful advances in AI, including for healthcare, are rooted in these advantages of deep learning.
>
> **[2:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/why-deep-learning-excels-in-healthcare?u=76281980&t=140)** By understanding how to leverage them, deep learning has the potential to revolutionize healthcare by enabling more accurate diagnoses, personalized treatment plans, assisting clinicians in making informed decisions and ultimately improving patient outcomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (6), [[Algorithms]] (1), [[Feature Engineering]] (1), [[Scalability]] (1)
> **Analogies:** such as (2)
> **Speakers:** - healthcare (1)

#### [How deep learning works: ​Anatomy of neural networks](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=0)** - [Instructor] In the introductory video about [[Deep Learning]], we established that it relies on [[Artificial Neural Networks]], ANNs, which are composed of layers of interconnected nodes or artificial neurons.
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=15)** This component of the network plays a distinct role in our deep learning systems learn and make predictions.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=23)** [[Neural Networks]] perform mathematical calculations similar to how the brain processes information.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=30)** True interconnected neurons.
>
> **[0:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=33)** While the specific arrangement of layers and connection may vary depending on the model architecture, most neural networks share these essential components input layer.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=46)** This is the entry point for raw data such as medical images, genomic sequences, or electronic health records.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=54)** It pre=processes the data and passes it to the subsequent layer for analysis.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=61)** For example, in analyzing X-ray images, the input layer would represent pixel values of the image.
>
> **[1:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=71)** When coding from scratch, you must define values like the size and dimension of the input data.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=78)** If using the pretrained model, the data should be adjusted to match the models required input format.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=85)** Hidden layers.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=87)** These layers contain neurons that perform computations using weighted input and activation functions.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=95)** They extract hierarchical features from the input data.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=100)** Early layers might detect simple patterns, e.g. edges in the medical image.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=106)** Deeper layers identify more abstract representations.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=111)** For example, identifying tumors.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=115)** Output layer.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=116)** The final layer produces the models prediction or result such classifying an X-ray image as normal or abnormal.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=126)** Its purpose is to map the length features to specific outcomes.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=131)** For instance, the network would assign probabilities to each possible diagnosis.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=138)** Weight and biases.
>
> **[2:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=140)** These are the parameters that determine the strength of connections between neurons and influence the output of each layer.
>
> **[2:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=148)** Weight represent the importance of specific compute, while biases help fine-tune predictions.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=155)** These parameters are adjusted during training to minimize errors and improve accuracy.
>
> **[2:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=162)** Activation functions.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=164)** These are the mathematical functions that decide whether a neuron fires and passes its information to the next layer.
>
> **[2:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=172)** Activation function introduced non-linearity, enabling the network to model complex relationships, such as detecting a rare disease in a dataset with diverse patient characteristics.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=186)** Common examples include, ReLU, rectified linear units.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=191)** ReLU passes positive values while discarding negatives, helping the network to focus on useful patterns.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=199)** Soft marks, soft mark converts outputs into probabilities.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=204)** Useful for classification task.
>
> **[3:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=206)** Sigmoid.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=208)** Sigmoid maps values between zero and one, and it's often used for binary classification.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=216)** Hyper parameters.
>
> **[3:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=218)** These are adjustable settings that influence the model structure and behavior.
>
> **[3:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=223)** Think of them as tuning knobs for optimization.
>
> **[3:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=227)** Some of them include the number of neurons in hidden layers, which determines the model's capacity to process information affecting both the complexity and computational demand.
>
> **[4:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=240)** The choice of activation function impacts our patterns are identified.
>
> **[4:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=244)** The learning rate controls how quickly weights and biases are updated during training.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/how-deep-learning-works-anatomy-of-neural-networks?u=76281980&t=251)** Understanding these hyperparameters is critical for designing neural networks optimized for healthcare applications, such as balancing diagnostic accuracy with computational efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (3), [[Deep Learning]] (2), [[Artificial Neural Networks]] (1)
> **Analogies:** such as (3), for example (2), similar to (1), for instance (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Deep learning architectures](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=0)** - [Instructor] [[Deep Learning]] architecture defines the structural design of a neural network, specifying how its layers, connections, and components interact to process and analyze data.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=13)** It determines the flow of information, the types of computations performed, and the overall functionality of the model.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=21)** These architectures are dynamic and continuously evolving to enhance performance, efficiency, applicability as new challenges arrive, including in healthcare.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=35)** To provide context on this evolution, let's explore some architectures from the earliest to the more recent designs.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=44)** Multi-layer perceptron, MLP.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=47)** The MLP is one of the earliest deep learning architectures, and it consists of fully connected layers, forming a simple structure with an input layer, hidden layer, and an output layer.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=61)** While foundational to modern deep learning, MLPs are limited in their ability to learn complex patterns.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=68)** In healthcare, they may be suitable for simple tasks involving tabular data, such as predicting patient readmission based on electronic health records.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=80)** [[Convolutional Neural Networks (CNN)|Convolutional neural networks]], CNNs.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=84)** CNNs introduce significant advances by focusing on image data.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=89)** CNNs use convolutional layers to detect and extract features such as edges and textures.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=98)** They also incorporate pooling layers to reduce dimensionality while preserving essential features, making them highly effective for tasks such as image recognition and object detection.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=112)** Some notable CNN architectures are ResNet, DenseNet, and Inception.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=119)** CNN-based architectures are already applied in healthcare for enabling tasks such as diagnosing pneumonia from chest x-ray or classifying skin lesions to identify melanoma.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=135)** Recurrent [[Neural Networks]], RNNs.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=138)** RNNs are designed to process sequential data, such as time series, text and speech.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=146)** RNNs leverage recurrent connection to maintain information across time steps, allowing them to analyze sequences effectively.
>
> **[2:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=156)** Examples of tasks they may be ideal for in healthcare are predicting patient outcomes based on historical vital signs or monitoring ECG signals for arrhythmias.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=169)** Improvement on the basic RNN, such as long short-term memory networks, LSTMs, and gated recurrent units, GRUs, overcome issues like vanishing gradients, making them better suited for learning long-term dependencies.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=186)** Transformers.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=187)** Transformers have revolutionized deep learning.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=191)** If you've recently started learning about deep learning, you might even assume they are the only option due to their popularity.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=199)** The key innovation of transformers lie in their attention mechanism, which enables the model to focus on the most relevant part of the input data.
>
> **[3:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=210)** This feature, combined with their highly parallelizable structure, allows transformer to process large datasets and perform tasks across text, images and sequences.
>
> **[3:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=222)** Some examples of transformer-based architecture are BERT, BioBERT, ClinicalBERT, and PubMedBERT.
>
> **[3:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=231)** Transformers are currently powering applications such as medical text analysis and even drug discovery by analyzing protein sequences and identifying potential drug targets.
>
> **[4:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=245)** Other notes were the architecture include autoencoders used for dimensionality reduction and anomaly detection, [[Generative Adversarial Networks (GANs)|generative adversarial networks]], GANs.
>
> **[4:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=256)** This consists of a generator and discriminator used for synthetic data generation.
>
> **[4:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=262)** It's useful for generating synthetic medical images to augment training data sets or simulate rare conditions for research and training.
>
> **[4:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=273)** And graph neural networks, GNNs, designed to work on graph-structured data such as modeling molecular structures for drug discovery, or analyzing patient networks to identify patterns in disease propagation.
>
> **[4:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=291)** These architectures are highly adaptable and reusable, particularly through techniques like transfer learning.
>
> **[4:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=298)** Transfer learning refers to the process of leveraging knowledge gained from a large pre-trained model and applying it to a different but related task by fine-tuning its parameters.
>
> **[5:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=311)** By fine-tuning the weights of a pre-trained model on a smaller task-specific dataset, transfer learning enables optimal performance for specialized task without requiring extensive training from scratch.
>
> **[5:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=325)** Models like BioBERT and ClinicalBERT exemplified this adaptability as they are tailored version of BERT, optimized for biomedical and clinical applications.
>
> **[5:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-architectures?u=76281980&t=337)** As you progress in your career, applying deep learning to healthcare, fine-tuning models to address specific challenges and datasets will likely become a central aspect of your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (6), [[Neural Networks]] (2), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1)
> **Env Vars:** mlp (2), cnn (2), bert (2), ecg (1), rnn (1)
> **Analogies:** such as (8)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Deep learning algorithms](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=0)** - [Instructor] If you have been following this classroom from the beginning, we have covered [[Neural Networks]], their architectures, layers, and components.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=9)** Now, let's explore the [[Deep Learning]] [[Algorithms]] that enable learning.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=14)** Algorithms are step-by-step computational procedures used to train the neural network by optimizing its parameters, improving performance, and achieving the desired outcomes.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=27)** They formed the foundation of the learning process, guiding the model in finding patterns within data.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=35)** Before we dive into specific deep learning algorithms, let's explain some key concepts.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=41)** Weights and biases, these are the primary parameters within the network that determine the strength of connections between neurons and how information flows through them.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=54)** Weights represent the importance of specific input while biases allow the model to shift the activation functions output.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=63)** By adjusting those values during training, the network learns to make better predictions.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=70)** Loss function, this quantifies the difference between the model's prediction and the actual ground truth.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=78)** Minimizing the loss function to improve model accuracy and reliability is the ultimate goal of the training process.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=85)** It provides a quantitative way to evaluate how well the model is performing.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=91)** Common loss functions include mean squared error, MSE, for regression tasks and cross-entropy for classification task.
>
> **[1:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=102)** Back propagation, this is the cornerstone algorithm that enables neural networks to learn from their mistakes.
>
> **[1:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=110)** It works by computing the gradient of the loss function with respect to each weight and bias in the network, starting from the output layer and moving backwards using the chain rule of [[Calculus]] to effectively calculate how each parameter contributed to the error, adjusting weight and biases in the direction that minimizes the loss function.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=135)** This process allows the network to iteratively refine its parameters and improve its prediction over time.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=143)** Think of this as what happens in multidisciplinary medical teams where each specialist analyzes their specific area of expertise, providing targeted feedback to refine the diagnosis and treatment plan.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=158)** Just as this collaborative approach improves patient outcomes, back propagation ensures that all components of a neural network work together to achieve better predictive accuracy.
>
> **[2:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=172)** Deep learning algorithms can be broadly categorized into optimization algorithms, regularization techniques, and learning rate schedulers.
>
> **[3:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=183)** Optimization algorithms.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=186)** Optimization algorithms are designed to adjust the weight and biases of a neural network in a way that minimizes the loss function.
>
> **[3:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=195)** These algorithms guide the model towards optimal performance by iteratively updating its parameter during training.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=204)** Some examples include gradient descent, a foundational algorithm that iteratively adjusts parameters in the direction of the steepest descent on the error surface, much like adjusting the medication dosage in small increments to find the optimal therapeutic effect while minimizing side effects.
>
> **[3:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=228)** Stochastic gradient descent, SGD.
>
> **[3:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=232)** This updates the parameter after processing each training example individually, making the training more efficient.
>
> **[4:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=240)** Think of adjusting the dose of a medication for each patient in a clinical trial based on their individual responses rather than waiting for the data from the entire trial population.
>
> **[4:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=254)** This approach allows for quicker insight and faster dose optimization.
>
> **[4:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=259)** Adam, adaptive moment estimation.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=263)** This combines the benefit of both momentum and adaptive learning rate, leading to faster convergence and improved performance.
>
> **[4:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=272)** Imagine a smart infusion pump that adjust the rate of drug delivery based on both the patient's current vital signs, momentum, and long-term trend adaptive learning.
>
> **[4:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=285)** This ensures both immediate and sustained optimal therapeutic delivery.
>
> **[4:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=291)** RMSprop, root mean square propagation.
>
> **[4:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=295)** These are just the learning rates for each parameter individually, making it very efficient with recurrent neural networks.
>
> **[5:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=303)** A good analogy of this is in personalized rehabilitation therapy where each muscle group is exercised at the pace and intensity tailored to its specific recovery progress.
>
> **[5:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=317)** This ensures efficient and targeted improvement in overall functionalities based on recent performance rather than just current capability.
>
> **[5:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=329)** Regularization techniques.
>
> **[5:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=331)** These are essential to prevent overfitting.
>
> **[5:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=334)** Overfitting is a common issue in both deep and traditional machine learning where a model performs well on training data but performs poorly on unseen test data.
>
> **[5:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=347)** This occur when the model becomes overly complex and starts to memorize the training data instead of learning the underlying pattern.
>
> **[5:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=356)** By introducing constraints or penalties, regularization improves the model's ability to generalize, making it more robust and capable of handling real world data.
>
> **[6:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=368)** Some key regularization methods include dropout.
>
> **[6:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=372)** This technique temporarily deactivate a random subset of neurons during training.
>
> **[6:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=378)** This forces the network to develop redundant representation, making it less reliant on individual neurons and improving its ability to generalize.
>
> **[6:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=389)** Dropout is like alternating the use of different muscle groups during physical therapy exercise to build overall strength and reduce reliance on a single group.
>
> **[6:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=401)** Early stopping, this monitors the model's performance on the separate validation sets during training.
>
> **[6:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=408)** Training is stopped when the model's performance on the validation sets starts to degrade, preventing the model from overfitting to the training data.
>
> **[7:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=420)** Early stopping is like adjusting the drug infusion based on therapeutic effects and side effects in the validation group.
>
> **[7:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=428)** Just as you stop increasing the dose when the benefit plateaus and side effects appear, early stopping stops training when validation performance starts to decline, preventing overfitting.
>
> **[7:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=442)** L1 regularization, Lasso, add a penalty term to the loss function based on the absolute values of the model's weight.
>
> **[7:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=452)** This encourages sparsity in the model, meaning that many weights become zero effectively reducing the number of features used by the model.
>
> **[7:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=463)** L1 regularization is like surgical precision in removing unnecessary tissue while preserving essential structures.
>
> **[7:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=471)** As it completely eliminates some features, weights go to zero while maintaining critical ones.
>
> **[8:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=480)** L2 regularization, Ridge, this add a penalty term to the loss function based on the squared values of the weight.
>
> **[8:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=488)** This encourages smaller weight overall, leading to a more generalized model.
>
> **[8:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=494)** L2 regularization is like prescribing the low sodium diet to manage blood pressure, where the goal is to avoid extreme levels without completely eliminating sodium.
>
> **[8:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=507)** Learning rate schedulers.
>
> **[8:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=509)** The learning rate determines our largest step the optimization algorithm takes during parameter updates.
>
> **[8:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=515)** Similar to medication dosing where too high a dose risk adverse effects and too low a dose may be ineffective, selecting an appropriate learning rate is critical.
>
> **[8:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=528)** A high learning rate may prevent the model from converging while a low one can make training inefficient.
>
> **[8:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=536)** Learning rate schedulers dynamically adjust the learning rate during training to optimize convergence, similar to our modern drug delivery system adjust dosing based on patient response.
>
> **[9:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=549)** Some common strategies include step decay.
>
> **[9:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=553)** This reduces the learning rate by a factor after a fixed number of training epochs, like a stage prednisone taper.
>
> **[9:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=562)** This allows the model to adjust at each level before further reduction.
>
> **[9:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=568)** Exponential decay.
>
> **[9:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=570)** This decreases the learning rate exponentially similar to drug elimination kinetics, allowing increasingly fine tuned adjustment as training progresses.
>
> **[9:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=581)** Cyclic learning rate, this fluctuates the learning rate between the bounds, like interval training in cardiac rehabilitation, enabling the model to escape shallow minima and find better solutions.
>
> **[9:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=596)** Warm restarts.
>
> **[9:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=598)** Warm restarts periodically resets to high learning rate followed by gradual reduction, similar to pulse therapy in autoimmune conditions, helping overcome optimization plateaus while maintaining effectiveness.
>
> **[10:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-algorithms?u=76281980&t=614)** Modern implementation often combine these strategies or adapt them based on model performance, much like our combination therapy and personalized medicine adjust treatment plans based on patient response.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (8), [[Neural Networks]] (3), [[Deep Learning]] (3), [[Calculus]] (1)
> **Analogies:** similar to (4), imagine (1)
> **CLI Commands:** make (2), find (2)
> **Env Vars:** mse (1), sgd (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Key concepts in training deep learning models](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=0)** - [Instructor] Building upon our understanding of some basic concepts like weights and biases, loss function, and [[Algorithms]] in [[Deep Learning]], now, let's explore more, as they are pivotal in your interaction and understanding of deep learning, both for healthcare and non-healthcare-related use cases.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=20)** Data.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=21)** This is similar to how you think about data in traditional machine learning.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=26)** Deep learning is just more capable of working with large and multimodal datasets.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=31)** You can have training, validation, and test splits.
>
> **[0:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=35)** The training data is used to fit the model.
>
> **[0:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=38)** The validation data is used to tune the hyperparameters and prevent overfeeding, and the test data is used to evaluate the final model's prediction.
>
> **[0:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=48)** The quality and quantity of training data significantly impacts the model's performance.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=56)** High-quality data free from biases and errors is crucial for accurate and reliable models, especially in healthcare.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=65)** You should leverage healthcare domain expertise.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=68)** You must be thinking about the representativeness of the data, ensuring it reflects the diversity of the real-world cases.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=76)** Think about age, gender, medical history, as poor [[Data Quality]] would lead to biases and incorrect predictions.
>
> **[1:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=87)** Epochs and batches.
>
> **[1:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=89)** In the training process, an epoch refers to one full pass through the entire training dataset.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=96)** The model is trained for multiple epochs to learn the underlying patterns in the data.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=103)** After each epoch, the model's weights are updated and the error is calculated.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=109)** The number of epochs chosen is a hyperparameter that you will adjust based on the performance of the model.
>
> **[1:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=116)** An iteration is a single update to the model's weights using a batch of data.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=122)** The number of iterations is equal to the number of epochs multiplied by the number of batches, so training data divided by the batch size.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=134)** Hyperparameter tuning.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=137)** Hyperparameters are the external configurations of a model that are set before the training begins, such as the learning rate, batch size, number of hidden layers, and the number of neurons in each layer.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=151)** Choosing the right set of parameters is crucial for model performance.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=157)** Common methods for hyperparameters include grid search.
>
> **[2:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=161)** This is testing all possible combinations of hyperparameters in a defined search space.
>
> **[2:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=167)** This method is computationally expensive, but can be effective for smaller set spaces.
>
> **[2:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=174)** Random search, randomly sampling combination of hyperparameters.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=179)** This method is often more efficient than grid search, especially for high-dimensional, high-parameter spaces.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=187)** Bayesian optimization, a probabilistic model is used to predict which high-parameter configurations will work best based on previous results.
>
> **[3:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=200)** Transfer learning.
>
> **[3:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=201)** Transfer learning allows you to leverage pretrained models on large datasets, and adapt them to a new, often smaller dataset.
>
> **[3:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=211)** This is particularly useful when you have limited data for your specific problem, which is often the case in healthcare.
>
> **[3:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=219)** For example, a model pretrained on millions of non-medical images can be fine-tuned on medical images to classify different diseases.
>
> **[3:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=229)** Transfer learning reduces the need for large amounts of labeled data and training time while still achieving high performance.
>
> **[3:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/key-concepts-in-training-deep-learning-models?u=76281980&t=239)** This is particularly beneficial in healthcare, where large, annotated datasets are often limited.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (3), [[Algorithms]] (1), [[Data Quality]] (1)
> **Definitions:** is a  (2), refers to (1)
> **Analogies:** similar to (1), such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Deep learning frameworks and libraries](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=0)** - [Instructor] We have laid a solid foundation for understanding what [[Deep Learning]] is, along with its key concepts, [[Algorithms]], and architecture.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=9)** But are this concepts practically implemented to solve real-world problems in healthcare?
>
> **[0:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=15)** That's where frameworks and libraries come into play.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=19)** Libraries are like individual tools in a toolbox, providing specific functionalities, while frameworks are like a fully equipped workshop, offering a complete set of tools and a structured environment for building and managing projects.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=36)** Although the terms are often used interchangeably, we will follow the same practice here.
>
> **[0:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=42)** For historical context, earlier deep planning frameworks like Theano, Caffe, and CNTK, played the crucial part in advancing the field.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=53)** Today, some of the most popular deep learning libraries and frameworks include [[TensorFlow]], developed by [[Google]].
>
> **[1:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=62)** TensorFlow is one of the most widely used deep learning frameworks.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=67)** It offers extensive support for building and deploying machine learning models, from small prototypes to large scale production systems.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=76)** Its key features are Keras integration for high level model building, TensorFlow Lite for mobile and edge deployment, TensorFloww.js for web-based ML applications, TensorFlow Extended TFX for production machine learning pipelines, extensive visualization tools through TensorBoard, and strong community support and documentation.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=106)** PyTouch, created by Facebook.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=109)** PyTouch's renowned for its flexibility and dynamic computation graph, making it the favorite amongst researchers.
>
> **[1:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=118)** It provides a straightforward way to define entry models, along with robust support for distributed training.
>
> **[2:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=126)** Some of its key features are dynamic computational graphs, native [[Python (Programming Language)|Python]] integration, TorchVision for [[Computer Vision]] tasks, TorchAudio for speech processing, TorchText for NLP applications, easy model deployment with TorchServe, and of course, a strong research community.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=151)** MXNet.
>
> **[2:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=153)** MXNet is a scalable and efficient deep learning framework that supports multiple languages, including Python, R, and Julia.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=163)** It's optimized for both training and inference.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=168)** Its key features include multilanguage support, hybridize training, automatic differentiation, built-in distributed training, model serving capabilities, and integration with cloud platforms like Amazon SageMaker.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=186)** Do not specifically for deep learning, other commonly used libraries include scikit-learn, NumPy, [[Pandas (Software)|pandas]], and JAX.
>
> **[3:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=196)** In your application of deep learning into healthcare and other use cases, the decision on the framework of choice depends on several factors.
>
> **[3:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=205)** One, project requirement.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=208)** Factors such as the scale of deployment, performance requirement, [[Hardware]] constraints, and the team's expertise play a critical role in selecting the appropriate framework.
>
> **[3:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=220)** Two, development considerations.
>
> **[3:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=224)** This includes ease of [[Prototyping]], debugging capabilities, production deployment options, and the availability of pre-trained models.
>
> **[3:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=235)** And three, operational factors.
>
> **[3:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=238)** You need to consider the level of community support, the quality of documentation, the learning curve, and the framework's ability to integrate with existing infrastructure searches, such as the electronic health record system.
>
> **[4:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/deep-learning-frameworks-and-libraries?u=76281980&t=253)** In this course, we will be coding in Python, and we implement a deep learning task using either TensorFlow or PyTouch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (7), [[TensorFlow]] (5), [[Python (Programming Language)|Python]] (3), [[Algorithms]] (1), [[Google]] (1)
> **Env Vars:** cntk (1), tfx (1), nlp (1), jax (1)
> **CLI Commands:** python (3)
> **Analogies:** such as (2)
> **File Paths:** tensorfloww.js (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Building and implementing neural networks: TensorFlow](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=0)** - [Instructor] In the previous chapters, we explored [[Neural Networks]], their theory, and their core components.
>
> **[0:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=7)** Now, let's move on to building and implementing neural networks in practice.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=13)** We'll be writing and running the code using [[Google]] Colab notebooks.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=18)** To get started, go to colab.[google.com](https://google.com).
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=25)** If you're logged into your Google account, you should see an interface like this.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=29)** If you're not, you will be prompted to log in.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=36)** Our sample task will be to build a basic binary classification model that can predict whether a sample belongs to a class zero or class one.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=47)** We will be implementing this task using both [[TensorFlow]] and [[PyTorch]], allowing us to compare their structure and ease of use.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=56)** In the upper part of the notebook, select Runtime.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=61)** Change runtime, and choose GPU as the [[Hardware]] accelerator.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=72)** GPU enables significantly faster training speed by offloading computationally-intensive task from the CPU to the GPU.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=83)** This is especially beneficial for [[Deep Learning]] models, which often involve complex matrix operations.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=91)** The great news is that CoLab provides free access to GPUs, making it an excellent resource for learning and experimentation.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=101)** It's good practice to name your notebook, so let's name ours.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=108)** We have named it by the name of the chapter.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=115)** Let's create the text cell and name it Tensorflow.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=123)** The first step is to import the necessary libraries.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=127)** So import tensorflow as tf from tensorflow.keras import Sequential
>
> **[2:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=141)** from tensorflow.keras.layers import Dense.
>
> **[2:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=146)** As you can see, Colab attempts to suggest possible completions for you.
>
> **[2:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=152)** To use the auto complete, click on tab on your keyboard.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=157)** And then import numpy as np.
>
> **[2:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=163)** To run a cell, you can click on this button that looks like play, or on your keyboard, you can click on shift and enter together.
>
> **[2:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=173)** So the next step is to create the simple neural network and save it into a variable called model.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=179)** So model that takes a sequential model.
>
> **[3:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=184)** There are many ways to write this, but in this instance we will be providing a list of our layers in the sequential class.
>
> **[3:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=193)** So Dense 16, activation.
>
> **[3:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=201)** The activation for the first Dense there will be relu.
>
> **[3:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=205)** If you remember, we mentioned different types of activation in previous videos, and then the input_shape is 10.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=216)** The next layer is also going to be a dense layer, and in this instance is a dense layer.
>
> **[3:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=223)** That will be the final one.
>
> **[3:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=228)** And using the sigmoid activation function.
>
> **[3:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=232)** This is the final layer that decides the class of our data.
>
> **[3:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=238)** So let's run this.
>
> **[4:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=241)** So we have a syntax error.
>
> **[4:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=244)** Let's see what's Colab has to say about fixing the error.
>
> **[4:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=248)** So we can accept this and run the code again.
>
> **[4:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=254)** Okay, the next step is to compile this model that we have defined.
>
> **[4:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=260)** And the optimizer there is Adam, for the loss, binary_crossentropy.
>
> **[4:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=265)** And for the matrix that we care about, we care about accuracy.
>
> **[4:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=269)** So now that we have defined our model, we have compiled it, let's do model.summary.
>
> **[4:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=278)** So this is the summary of our current model.
>
> **[4:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=280)** It has two layers, two dense layers.
>
> **[4:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=283)** It has the total of parameters, and it shows that it has 49 trainable parameters and no non-trainable parameters.
>
> **[4:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=294)** The next step is to define the dummy data that we are going to use for this demonstration.
>
> **[4:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=299)** So x_train, this is going to contain our hypothetical training data, and then let's accept this.
>
> **[5:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=306)** X_train will be training on hundred samples.
>
> **[5:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=309)** So let's reduce this from 1000 to 100.
>
> **[5:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=313)** And y_train, are the labels for these hypothetical arrays?
>
> **[5:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=319)** If you want, you can take a look at what the x_train looks like.
>
> **[5:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=324)** So that's the x_train.
>
> **[5:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=326)** You can ask for the shape.
>
> **[5:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=330)** So this is the shape of our training data, and this is the train shape of our training test.
>
> **[5:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=343)** So now that we have defined our training data, we can now call model.feed.
>
> **[5:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=350)** This is us saying now that we have the model, we want you to train on these instances.
>
> **[5:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=356)** This is the training data, this is the training label, in five epochs so that it can be fast.
>
> **[6:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=366)** And you can also define the batch size, like do it in tens.
>
> **[6:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=373)** So this is an example of us defining hyper parameters.
>
> **[6:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=377)** Okay, so we have an interesting error.
>
> **[6:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=382)** Let's try to explain the error, let's see what happens.
>
> **[6:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=385)** So when working with data like this, especially in Colab, you can use the AI features.
>
> **[6:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=394)** So the ValueError here is saying we have a challenge, which the input data shape.
>
> **[6:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=400)** Let's look at it.
>
> **[6:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=402)** This is where we defined the input data.
>
> **[6:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=407)** So let's remove the extra shape and run this again.
>
> **[6:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=415)** This is just an opportunity for you to follow cues as you are working with this type of data.
>
> **[7:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=422)** So here we go, we have trained our first deep neural network using just two layers.
>
> **[7:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=428)** You will definitely need more than two layers in practice.
>
> **[7:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=432)** So now the next step is for us to define our test data.
>
> **[7:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=437)** Let's copy this. The test data, we only need 10.
>
> **[7:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=441)** So let's adapt this test.
>
> **[7:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=446)** Test.
>
> **[7:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=447)** And remember, we only need 10 instances rather than a hundred.
>
> **[7:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=452)** This is a very small model that has trained just over five epochs.
>
> **[7:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=457)** So we are not expecting so much.
>
> **[7:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=460)** So now I have defined our test data, and now let's say predictions, a variable called predictions.
>
> **[7:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=469)** The model that we trained, let's use it to predict the test data.
>
> **[7:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=477)** So there we go. We now have some predictions.
>
> **[8:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=482)** Okay, so this is the predictions and it's showing values.
>
> **[8:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=486)** This is sigmoid, it's showing values between zero and one.
>
> **[8:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=490)** So let's define the classes for these predictions.
>
> **[8:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=493)** Let's say prediction_classes, and predictions if it's greater than 0.5.
>
> **[8:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=504)** So let's see what it looks like.
>
> **[8:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=511)** Okay, this model seemed to have predicted almost all instances as zero, and it predicted two as one.
>
> **[8:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=520)** Let's eyeball the difference.
>
> **[8:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=523)** Remember that we have the actual label values for the classes.
>
> **[8:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=526)** So let's do y_test.
>
> **[8:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=531)** And there we go.
>
> **[8:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=532)** So this model was wrong several times because in the actual labels, if we compare this, this array shows that the first instance was zero on prediction and just one, and it's one in y_test.
>
> **[9:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-tensorflow?u=76281980&t=548)** But now you get the picture, we finally went higher to actually predict the classes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (5), [[Google]] (3), [[Neural Networks]] (2), [[PyTorch]] (1), [[Hardware]] (1)
> **Code Identifiers:** x_train (3), y_test (2), input_shape (1), binary_crossentropy (1), y_train (1)
> **Tools:** colab (6)
> **Env Vars:** gpu (3), cpu (1)
> **UI Navigation:** click on (3), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [google.com](https://google.com) (1)
> **Versions:** 0.5 (1)

#### [Building and implementing neural networks: PyTorch](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=0)** - The limitations and ethical considerations for [[Deep Learning]] in healthcare are similar to those faced when implementing any other machine learning system.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=10)** However, due to the high stakes in healthcare, where decisions can directly impact patient lives, these challenges are magnified.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=20)** In this chapter, we will explore some of the key issues and how to mitigate them in practice.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=27)** We will discuss three main limitations, data limitations, model limitations, and ethical considerations.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=36)** In the previous video, our sample task was to build a basic binary classification model that can predict whether a sample belongs to Class 0 or Class 1 using the neural network.
>
> **[0:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=50)** In that video, we used [[TensorFlow]].
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=52)** Now, we are going to repeat the same task using [[PyTorch]].
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=58)** First, let's import the necessary libraries.
>
> **[1:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=63)** Torch, import torch as nn, and then optim.
>
> **[1:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=72)** When using PyTorch, it's common to define your [[Neural Networks]] as classes in [[Python (Programming Language)|Python]].
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=80)** So let's define a class called SimpleNN that accept whatever module that you specify.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=94)** And then let's initialize.
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=99)** Remember that this is a very simple neural network.
>
> **[1:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=104)** So let it inherit.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=106)** And the first layer here will be linear layer.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=109)** Let's use the suggestions and then we can just adapt to it.
>
> **[1:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=115)** So this is the input layer.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=117)** It is linear, and then the activation function we are using here is relu.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=123)** And then the final layer here is going to be sigmoid layer and this same class.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=131)** Let's define forward.
>
> **[2:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=133)** Let me just verify that this is the exact code that we want since I'm using the autocomplete feature.
>
> **[2:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=140)** So let's run this now.
>
> **[2:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=144)** So we are going to instantiate that model and save it into a variable code model.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=154)** And then we specify binary cross-entropy.
>
> **[2:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=159)** If you're paying attention to this, you will remember that when we were using TensorFlow, we did all these, but the methods were slightly different.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=168)** And that's the goal of the session so that you can see a difference in the implementation, even though they are, theoretically, going to do exactly the same thing.
>
> **[3:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=180)** So for the X-ray here, let's just torch to generate random numbers.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=186)** So for the test, we are going to generate 100 samples, those are arrays.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=192)** And then for the binary labels to use 0 or 1 as the labels.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=199)** A good culture for you is to, for example, you can decide to check the type of data that x-train is.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=208)** It's telling you that this is a torch.sensor.
>
> **[3:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=211)** Remember, you can also check things like the shape just so that you are aware of what is going on with your data.
>
> **[3:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=220)** Okay, so now we have our hypothetical training data and labels.
>
> **[3:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=226)** So let's define the training loop for epoch.
>
> **[3:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=233)** In range[5], we wanted to train in five epochs.
>
> **[3:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=237)** We want to tell our model to actually train.
>
> **[4:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=242)** We use the zero_grad to clear the gradient.
>
> **[4:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=246)** And then we have the output that takes on the training data, specify the compute, the loss, and then update weight.
>
> **[4:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=260)** So let's ask it to print the loss per epoch as it trains.
>
> **[4:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=267)** Okay, so this error says that we are missing the required forward function in the SimpleNN then that we defined previously.
>
> **[4:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=277)** So let's investigate.
>
> **[4:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=279)** A faster way to do this, you can use [[Gemini]] in Colab to look at this.
>
> **[4:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=285)** I want you to be used to encountering errors when you are coding because it happens a lot.
>
> **[4:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=293)** So let's see what we missed out.
>
> **[4:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=297)** Well, we actually specified forward in our code.
>
> **[5:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=302)** Let me copy this and just see.
>
> **[5:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=308)** And then let's see if we have an intent error.
>
> **[5:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=318)** So this talks about the error.
>
> **[5:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=319)** It says the forward method should be at the top level of the class and not inside the initialization.
>
> **[5:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=326)** Okay, now let's run this.
>
> **[5:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=339)** Okay, and there we go.
>
> **[5:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=341)** And that is pretty fast.
>
> **[5:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=343)** So now our model has finished training.
>
> **[5:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=347)** Let's define the dummy test set.
>
> **[5:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=353)** For our dummy test set, we trained on 100 instances.
>
> **[5:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=356)** So this time around, we only want to test whatever model that was trained there on 10 instances.
>
> **[6:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=365)** And then to make predictions, let's test the model that we trained here on the test data.
>
> **[6:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=375)** And now we can print out the comparison.
>
> **[6:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=378)** Let's write the for loop for that.
>
> **[6:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=381)** For i in range, the length of the test set.
>
> **[6:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=387)** There's an arrow here.
>
> **[6:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=391)** Let me save this.
>
> **[6:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=396)** So this is a prediction versus the actual values.
>
> **[6:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=401)** And as we can see here, this is not a robust model.
>
> **[6:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=404)** It's a very simple layer.
>
> **[6:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=406)** For example, the first instance predicted, it belongs to Class 1, while the actual says it belongs to Class 0.
>
> **[6:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=414)** So a good task for you is to figure out the way to compare this and calculate the accuracy.
>
> **[7:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=422)** Accuracy is just the number of predictions that are correct out of the 10.
>
> **[7:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/building-and-implementing-neural-networks-pytorch?u=76281980&t=427)** That will be a fun exercise for you to practice with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (2), [[PyTorch]] (2), [[Deep Learning]] (1), [[Neural Networks]] (1), [[Python (Programming Language)|Python]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), similar to (1)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** zero_grad (1)
> **Cross-References:** previous video (1)
> **Tools:** colab (1)
> **Prerequisites:** initialization (1)

#### [Limitations and ethical considerations](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=0)** - [Instructor] The limitations and ethical considerations for [[Deep Learning]] in healthcare are similar to those faced when implementing any other machine learning system.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=10)** However, due to the high stakes in healthcare where decisions can directly impact patients' lives, these challenges are magnified.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=20)** In this chapter, we will explore some of the key issues and how to mitigate them in practice.
>
> **[0:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=27)** We will discuss three main limitations, data limitations, model limitations, and ethical considerations.
>
> **[0:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=36)** Data limitations like data bias and imbalance.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=40)** Healthcare data often reflect societal biases, such as disparities in healthcare access and outcomes for different populations.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=51)** If training data is biased, the model will perpetuate and even amplify this biases, leading to unfair or inaccurate outcomes, particularly for underrepresented groups.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=65)** For example, if a deep learning model is primarily trained on high-resolution X-ray images from well-resourced environment, it may perform poorly on lower quality images in low-resource health systems.
>
> **[1:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=81)** Some of the ways to mitigate this include diversifying [[Data Collection]], supporting research in low-resource environments, and systemic paths audits.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=94)** Data scarcity.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=96)** Deep learning requires vast amount of data for training, a need further emphasized in healthcare where [[Privacy]] is a major concern.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=106)** Some of the ways to mitigate these include institutionalized [[Data Sharing]], transfer learning, federated learning, and in some cases, the use of synthetic data, even though synthetic data is not always effective.
>
> **[2:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=122)** [[Data Privacy]] and security.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=125)** One of the cases for the need of healthcare-focused expertise in deep learning is that patient data is sensitive and governed by stringent privacy regulations, for example, HIPAA and GDPR Safeguarding patient privacy while allowing the use of this data for training deep learning model is a complex challenge.
>
> **[2:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=149)** Some of the ways to mitigate this is data anonymization, robust encryption, and federated learning, which trains models on decentralized data, reducing the need to transfer sensitive information.
>
> **[2:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=166)** Data heterogeneity.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=168)** Healthcare data comes from diverse sources, such as electronic health records, medical images, genomic data, and wearable devices.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=179)** Integrating and harmonizing these heterogenous data sources can be complex.
>
> **[3:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=185)** This has been improved by encouraging the use of standardized data formats, like HL7 or FHIR, to ensure data compatibility and implementing multimodal learning approaches that can process and integrate heterogeneous data to derive more robust insights.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=204)** This means sometimes before a deep learning problem can be solved, you solve the data formatting problem.
>
> **[3:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=212)** Model limitations, the black box problem.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=216)** Deep learning models, especially a complex one, can be hard to interpret, making it difficult for clinicians to trust the model's decisions.
>
> **[3:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=227)** In out care, transparency is essential to ensure clinical adoption and safety.
>
> **[3:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=233)** Some of the ways to improve this is to use explainable AI to make models more interpretable.
>
> **[4:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=240)** Use simplified models and live clinician collaboration during model development to ensure that the model output align with clinical reasoning.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=251)** Deep learning models are also susceptible to adversarial attacks, where small, often imperceptible changes in impute data can lead to significant errors.
>
> **[4:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=262)** In healthcare, this could result in misdiagnoses, so it is wise to treat models using adversarial examples to make them more robust, introduce variability into the training data, making models more resilient, and regularly test models with adversarial examples to identify weaknesses.
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=287)** Ethical considerations, algorithmic bias.
>
> **[4:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=291)** Deep learning models are not magical.
>
> **[4:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=293)** They are susceptible to biases, and this can cause the model to produce biased output, exacerbating health disparities, so implementing techniques, like reweighing, resampling, or adversarial de-biasing, to reduce bias in model and ongoing fairness audit to ensure that the model's prediction do not harm marginalized groups.
>
> **[5:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=321)** [[Accountability]] and responsibility.
>
> **[5:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=324)** Determining accountability when AI models make error is a significant ethical challenge.
>
> **[5:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=331)** In case of adverse effect, it's essential to define responsibility clearly, so it is important to establish legal and ethical frameworks with clear guidelines for model accountability, outlining roles for developers, healthcare providers, and institutions.
>
> **[5:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=354)** Include human-in-the-loop.
>
> **[5:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=356)** These are qualified healthcare professionals in the [[Decision-Making]] process, particularly for high-risk cases, and also enforce transparency in model decisions by keeping detailed records of model development and decisions to ensure accountability.
>
> **[6:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/limitations-and-ethical-considerations?u=76281980&t=375)** Then generally, ensuring the ethical development of AI in healthcare requires careful consideration of patient autonomy, informed consent, and potential misuse of technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (9), [[Accountability]] (4), [[Privacy]] (3), [[Data Collection]] (1), [[Data Sharing]] (1)
> **Analogies:** such as (2), for example (2), similar to (1)
> **Env Vars:** hipaa (1), gdpr (1), hl7 (1), fhir (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)


### 2. Computer Vision for Healthcare

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to computer vision in healthcare](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=0)** - [Instructor] Based on use in data type, there are different subfields of [[Artificial Intelligence (AI)|artificial intelligence]], each specializing in solving specific types of problems.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=10)** Examples of those subfields include [[Natural Language Processing (NLP)|natural language processing]], NLP, focused on sequences, such as text and speech data, [[Computer Vision]] for visual information, like images and videos, robotics integrate physical systems with AI to interact with the physical world, from autonomous surgical robots to delivery drones.
>
> **[0:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=40)** In the first chapter, we have laid a solid foundation for [[Deep Learning]], a subtype of machine learning.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=47)** Deep learning utilizes artificial neural network with multiple layers to learn complex pattern from data.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=56)** To bring deep learning principles to life, we will focus on computer vision as a primary example throughout this course.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=65)** This will allow us to understand how deep learning models can effectively process and interpret visual information, enabling a wide range of applications in healthcare.
>
> **[1:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=78)** So what is computer vision, and why is it useful in healthcare?
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=84)** Computer vision is a subfield of AI that focuses on enabling machines to interpret, analyze, and understand visual data.
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=93)** By processing images, videos, or other visual inputs, computer vision models can extract meaningful insights, automates task, and make accurate predictions.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=108)** Computer vision-based tasks include image classification, where the model assigns a label to an entire image, for example, determine whether an X-ray shows signs of pneumonia or not, image recognition, identifying object, patterns, and anomalies within images, object detection, localizing and classifying objects within an image, providing both the objects class and its position bounding box.
>
> **[2:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=144)** This is used in tasks like identifying tumors or tracking surgical instruments, Image segmentation, dividing an image into different regions or segments by classifying each pixel.
>
> **[2:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=159)** For example, segmenting different organs in an MRI scan to distinguish between healthy and diseased tissues.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=169)** Image generation and reconstruction.
>
> **[2:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=172)** Often used in applications like enhancing low-quality medical scans or synthesizing missing part of an image.
>
> **[3:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=182)** Motion tracking, tracking the movement of object, analyze activities, or detect changes in videos over time.
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=191)** Depth estimation, creating 3D representation from 2D images for surgical planning and navigation.
>
> **[3:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=200)** Pose estimation, detecting and tracking human body position for physical therapy applications.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=208)** The integration of computer vision into healthcare is transforming how we diagnose, treat, and monitor patients.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=216)** Below are some key areas where computer vision is making a significant impact.
>
> **[3:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=221)** Enhanced diagnosis.
>
> **[3:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=224)** For medical image analysis, deep learning models can analyze medical images, like X-rays, CT scans, MRIs, and ultrasounds, to detect abnormalities, such as tumors, fractures, and organ diseases.
>
> **[4:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=242)** In dermatology, to assist dermatologists in identifying skin cancers and other skin conditions by analyzing skin images, and in ophthalmology to analyze retinal images to detect early signs of diabetic pathy and other eye diseases.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=263)** Treatment support.
>
> **[4:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=265)** Computer vision powered by deep learning [[Algorithms]] can provide [[Real-Time]] guidance during surgeries, helping surgeons to visualize complex anatomical structures and perform procedures with greater precision.
>
> **[4:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=280)** These systems can also do things like patient gait analysis to assess their mobility and identify potential risk for falls.
>
> **[4:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=291)** Research.
>
> **[4:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=292)** Computer vision can analyze microscopic images of cells and tissues to identify potential drug targets and accelerate drug discovery.
>
> **[5:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=303)** Clinical trials.
>
> **[5:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=304)** Computer vision can automate the analysis of medical images in clinical trials, speeding up the evaluation of new treatments.
>
> **[5:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=313)** Biomarker discovery.
>
> **[5:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=314)** Advanced image analysis can identify novel visual biomarkers that predict disease progression or treatment response.
>
> **[5:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=324)** These are only a few examples of how computer vision is currently being used in healthcare.
>
> **[5:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/introduction-to-computer-vision-in-healthcare?u=76281980&t=331)** As you continue exploring, you'll uncover even more innovative applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (12), [[Deep Learning]] (6), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Algorithms]] (1)
> **Analogies:** such as (2), for example (2)
> **Env Vars:** nlp (1), mri (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding image data in healthcare](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=0)** - One of the reasons machine learning including [[Deep Learning]] [[Algorithms]] shine is their versatility with data types.
>
> **[0:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=8)** They can process and make predictions with complex data type such as images and videos.
>
> **[0:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=16)** In the previous chapter, we have established that we will be focusing on [[Computer Vision]] in healthcare.
>
> **[0:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=23)** Now, let's understand image data in healthcare.
>
> **[0:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=29)** Healthcare institutions such as hospitals, medical diagnostic centers, research facilities generate a wide range of image data from various modalities, each designed to capture specific aspect of the human body.
>
> **[0:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=45)** These include: X-rays: used primarily for imaging bone and detecting fractures, pneumonias, and other abnormalities.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=55)** Computer tomography, CT: combines X-rays from various angles to create cross-sectional images, allowing detailed view of organs and tissues.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=68)** Magnetic resonance imaging, MRI: employs magnetic fields and radio waves to create detailed images of soft tissue, useful for diagnosing conditions like brain tumors or ligament injuries.
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=85)** Ultrasound: captures [[Real-Time]] images using sound waves, often used in prenatal care or to assess organs like the heart and kidneys.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=97)** Microscopic imaging: provides eye resolution images of cells and tissues, aiding in pathology and drug discovery.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=107)** Positron emission tomography, PET: uses radioactive tracers to create 3D images of metabolic processes.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=117)** Processing medical images present several challenges, including variability.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=124)** Images can vary widely depending on equipment, settings, and patient-specific factors.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=132)** Eye dimensionality.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=134)** Medical images often contain large amounts of data, requiring computational efficient models to process them.
>
> **[2:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=143)** Noise and artifacts.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=145)** Medical images may include noise, distortions, or artifacts due to limitation in imaging equipment or patient movement.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=155)** [[Data Privacy]] and security.
>
> **[2:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=158)** Medical images contain sensitive patient's information, requiring special handling.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=165)** Label quality.
>
> **[2:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=167)** Obtaining accurate annotation from medical expert is a time-consuming and expensive process.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=175)** Class imbalance.
>
> **[2:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=176)** Many medical conditions are rare, leading to imbalanced datasets.
>
> **[3:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=182)** To ensure consistency, interoperability, and ease of analysis, medical images are stored and shared in standardized formats.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=192)** Some of them include DICOM, Digital Imaging and Communications in Medicine.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=199)** DICOM supports different modalities such as X-rays, CT, and MRI scans.
>
> **[3:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=205)** It includes both image data and [[Metadata]] such as patient's information and imaging parameters.
>
> **[3:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=214)** NIfTI, Neuroimaging Informatics Technology Initiative.
>
> **[3:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=220)** This is optimized for storing 3D and 4D volumetric data and commonly used in research, particularly for MRI and functional MRI data.
>
> **[3:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=231)** TIFF, Tagged Image File Format.
>
> **[3:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=235)** This supports eye resolution images, allowing for lossless compression, ensuring image quality is maintained.
>
> **[4:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=243)** It is often used in microscopic imaging and is compatible with annotations.
>
> **[4:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=249)** JPEG and PNG.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=251)** While widely used in general imaging, these formats have significant limitations for medical data.
>
> **[4:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=258)** JPEG's looser compression risk losing crucial diagnostic details, while PNG, though lossless, cannot store the extensive metadata sometimes required for medical imaging.
>
> **[4:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=272)** They serve primarily as supplementary formats when specialized medical imaging standards are not required.
>
> **[4:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=281)** It is important that you're familiar with these data types because if you have not worked with healthcare data before, you may never have had the need to work with this file format.
>
> **[4:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=294)** By now, you should have some context regarding the potential sources of image data for healthcare applications.
>
> **[5:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/understanding-image-data-in-healthcare?u=76281980&t=302)** It is worth noting that computer vision is one of the most widely applied AI techniques in healthcare, primarily because of the vast array of image data available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (2), [[Metadata]] (2), [[Deep Learning]] (1), [[Algorithms]] (1), [[Real-Time]] (1)
> **Env Vars:** mri (4), dicom (2), jpeg (2), png (2), pet (1)
> **Analogies:** such as (4)
> **CLI Commands:** make (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is a  (1)
> **Speakers:** - one (1)

#### [Anatomy of medical images: Exploring digital properties and structure](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=0)** - [Instructor] To work effectively with image data in [[Deep Learning]], the most important principle to understand is that [[Algorithms]] operate on numeric data.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=10)** Regardless of the method or model being applied, the image must be represented numerically at some stage in the process.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=19)** To demonstrate this concept, let's explore the anatomy of a sample x-ray image.
>
> **[0:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=25)** I encourage you to follow along.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=28)** To get started, open a new notebook in colab.[[[Google]].com](https://google.com) or any [[Python (Programming Language)|Python]] programming environment.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=37)** First, upload the Sample_Xray_Image.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=44)** Now that we have the image file in our workspace, you can view the image by simply double clicking on it or by loading it programmatically using Python libraries like NumPy, Matplotlib, and Pillow.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=61)** Import matplotlib, from pillow, import image.
>
> **[1:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=74)** Now let's define a variable called image_path that contains the file paths to the image, and then another variable called xray_image that opens that file path.
>
> **[1:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=98)** Now if we type in xray_image and run the code, we can see the Sample_Xray_Image that we have uploaded.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=112)** So this is how to programmatically load a sample image.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=117)** If this were a directory, we will iterate over the directory and filter it.
>
> **[2:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=124)** We can check basic characteristic of our x-ray image by doing xray_image.format.
>
> **[2:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=134)** We do know that this is PNG, but it's great to confirm.
>
> **[2:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=140)** We can check details like xray_image.mode.
>
> **[2:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=147)** This L means that it's a gray scale image.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=151)** We can check for size, and this size is 1024 by 1024.
>
> **[2:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=161)** This is just the length and the breadth.
>
> **[2:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=164)** So it's a pretty big image.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=168)** So let's say we wanted to display the image with maybe some title.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=175)** Let's create the figure.
>
> **[2:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=178)** Let's make the figure smaller.
>
> **[3:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=182)** So this is 10 by 10.
>
> **[3:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=184)** Let's make it smaller by making it eight by eight.
>
> **[3:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=189)** And then we say Matplotlib should show the x-ray image and keep the cmap as gray.
>
> **[3:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=198)** Let's write it in this style, as you are specifying that this cmap should be gray.
>
> **[3:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=204)** Generally that means you can specify other things.
>
> **[3:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=209)** Let's give it a title.
>
> **[3:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=211)** It makes sense for your images to have a title.
>
> **[3:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=215)** And if you follow the suggestion it says X-Ray Image, that's a good guess.
>
> **[3:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=221)** Let's include Chest X-Ray Image.
>
> **[3:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=225)** And we don't want the axis to show. So let's turn it off.
>
> **[3:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=230)** So, okay, so now we have the x-ray image showing in an eight by eight figure.
>
> **[3:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=237)** And remember we turned off the axis.
>
> **[4:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=242)** Let's see what happens if we turn it on.
>
> **[4:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=246)** So if we turn it on, we can see the axis, the numbers.
>
> **[4:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=253)** We can assess the matrix of the image.
>
> **[4:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=258)** The matrix there is simply the numerical representation of this exact image that we have here.
>
> **[4:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=265)** So let's put the image in the NumPy array and then see the matrix.
>
> **[4:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=272)** If you've done it well, it should be a bunch of numbers.
>
> **[4:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=275)** So this is the numerical representation of this image.
>
> **[4:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=279)** If we render it back, it should give us this image.
>
> **[4:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=284)** Another interesting task we can do is to analyze the pixel intensity.
>
> **[4:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=289)** So the pixel intensity will mean that these areas that are darker should have higher values since we are analyzing it between the scale of 0 and 1.
>
> **[5:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=302)** So let's plot this and see what we find, plt.figure.
>
> **[5:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=311)** Let's do a figure size of eight by six this time around, figsize.
>
> **[5:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=319)** And then, to plot the pixel intensity, let's put it in an histogram.
>
> **[5:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=327)** So say plt.hist.
>
> **[5:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=332)** Let's accept some of the suggestion and edit it.
>
> **[5:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=335)** So the image matrix, then we ravel it, put it in 256 bins, which is the typical range of pixel.
>
> **[5:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=347)** Define the range between 256 to between 0 and 255, and let's make it color blue.
>
> **[5:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=358)** Many times when you are defining hyper parameters or values like this, it simply means that you can play around with them.
>
> **[6:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=366)** So you can decide that for your use case, you want it to be red and not blue like me.
>
> **[6:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=372)** So I encourage you to do that a lot when programming.
>
> **[6:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=376)** And then the name I prefer is pixel intensity distribution.
>
> **[6:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=382)** So rather than histogram, let's call it pixel, pixel intensity distribution of chest x-ray image.
>
> **[6:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=395)** And on the X-axis we have the pixel value or pixel intensity.
>
> **[6:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=403)** And on the Y-axis you have frequency.
>
> **[6:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=407)** If you like for this to have grid, grid are the lines across, you can do plt.grid.
>
> **[6:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=414)** Let's say, make it true.
>
> **[7:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=420)** So for this chest x-ray image, this is what the pixel intensity look like.
>
> **[7:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=425)** So we have quite the number of pixel values that are pretty high.
>
> **[7:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=431)** You should know you can also flatten your matrices.
>
> **[7:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=435)** So let's flatten this matrix, flattened_matrix, image_matrix.
>
> **[7:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=445)** Let's call flattened directly.
>
> **[7:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=452)** So if you flatten the matrix, it's going to come back just as one array rather than several arrays in the list, like we have the previous time.
>
> **[7:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=464)** The first time that we showed the image, I mentioned that the image is large.
>
> **[7:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=469)** So a common operation when working with images is to resize an image.
>
> **[7:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=476)** So xray_image.
>
> **[8:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=480)** So let's resize it from 1024 by 1024 to 256 by 256.
>
> **[8:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=489)** So there we have a smaller and compact image.
>
> **[8:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=494)** You can also normalize the matrix value to values between 0 and 1.
>
> **[8:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=499)** So we can do normalized_matrix, and image_matrix divided by 255.0.
>
> **[8:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=513)** So now all the values in the normalized matrix are between 0 and 1.
>
> **[8:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=520)** Some of the most common things that you will do when working with images, sometimes you need to flip an image.
>
> **[8:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=527)** So we can flip this image by transforming, rather transposing, xray_image.transpose, and then Image.FLIP_LEFT_RIGHT.
>
> **[9:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=546)** So this is just turning the image to the other side.
>
> **[9:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=550)** If you look at the first image, this arrow, so that it shows that we've truly transposed it, it was on the right.
>
> **[9:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=558)** This time around after transposing it, it's now on the left.
>
> **[9:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=564)** You can also rotate images.
>
> **[9:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=566)** Rotating images is one of the actions you take when trying to vary the same image to maybe augment your data or just to improve how your model, just to expose the images to different angles.
>
> **[9:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=582)** And let's say we decided to rotate it by 45 degree.
>
> **[9:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=588)** So, this turns.
>
> **[9:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=592)** So if we have a small data set so we can have the formatted x-ray image, we can rotate it by 45.
>
> **[9:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=599)** We can choose other degrees, the same variance just to expose the model to different orientations of the data set.
>
> **[10:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=607)** So by now, you should have a good intuition of how images work.
>
> **[10:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/anatomy-of-medical-images-exploring-digital-properties-and-structure?u=76281980&t=611)** There are relationship with deep learning models and some of the pre-processing and transformation that we will apply in future videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Python (Programming Language)|Python]] (2), [[Algorithms]] (1), [[Google]] (1)
> **Code Identifiers:** xray_image (6), image_matrix (2), image_path (1), flattened_matrix (1), normalized_matrix (1)
> **CLI Commands:** make (4), python (2), find (1)
> **Env Vars:** png (1), flip_left_right (1)
> **URLs:** [google.com](https://google.com) (1)
> **Versions:** 255.0 (1)
> **Tools:** colab (1)
> **Definitions:** means that (1)

#### [Preparing X-ray image datasets for computer vision tasks](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=0)** - [Instructor] In your [[Deep Learning]] journey, you will spend a significant amount of time understanding data, its structure, storage, and distribution.
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=10)** Sometimes you'll also be involved in decision making to determine the optimal approach to handle these aspects.
>
> **[0:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=17)** In this video, we will work with an extra dataset from Mendeley.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=22)** For our task, we'll only need the normal and pneumonia subset.
>
> **[0:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=26)** Therefore, we will download the dataset, select the required subset, split the data, and save it in the necessary format for future task.
>
> **[0:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=37)** Let's copy the download link.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=39)** (keys clicking) We are going to use Weget to download the data to our workspace.
>
> **[0:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=49)** This process is going to take a few seconds.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=55)** Now that the download is complete, if you check your folder, you will see a zipped file called file_downloaded.
>
> **[1:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=64)** Let's copy the path and unzip.
>
> **[1:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=67)** (keys clicking) So now that we're unzipping, we can see all the data inflating into a folder called Pneumonia_Normal.
>
> **[1:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=83)** Remember I mentioned that for this task, we only care about the normal and the pneumonia folder, so that's what we are going to focus on.
>
> **[1:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=91)** If you click on the normal folder and select one of the files in it, so this is an x-ray image that is considered normal in this instance.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=109)** Now let's count the number of files in the normal folder.
>
> **[1:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=112)** We can use Colab's AI-assisted generate code feature.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=117)** So let me copy the file path, copy path, and in generate with AI, we can prompt like this.
>
> **[2:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=128)** (keys clicking) Count the number of files in this folder using bash.
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=135)** (keys clicking) So this is supposed to automatically generate the code for this.
>
> **[2:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=144)** So if we run this, it says there are 1,525 in the normal folder.
>
> **[2:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=152)** If we copy this code and repeat the same for pneumonia, (keys clicking) it has an equal number of files, 1,525.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=169)** The reason why I specified that generate AI should use Bash is because there are other methods to count files, but I know Bash is fast and tidy, so that's why we use the Bash.
>
> **[3:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=181)** We want to split this dataset into train and test set, with approximately 80% of each class in the train set and 20% in the test set.
>
> **[3:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=194)** To make things clear, it's a good idea to prepend the class name, normal or pneumonia, to the file names before splitting.
>
> **[3:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=202)** If you look at this, it just gives the file name with a bunch of numbers, so now rather than just being a number for this file name, I want this name to contain normal at the beginning.
>
> **[3:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=216)** That way when we separate the data, we can easily find the ones that belong to normal or pneumonia.
>
> **[3:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=224)** We're going to use the generate code feature again for this, so let's copy the file path to normal, and we say prepend.
>
> **[3:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=238)** Prepend means put this at the beginning, normal (keys clicking) to the beginning (keys clicking) of all file names (keys clicking) in this folder.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=251)** (keys clicking) So let me specify the folder.
>
> **[4:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=254)** (keys clicking) Okay, so with generate AI, we have generated the code to add normal to the beginning of all file names.
>
> **[4:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=266)** If we run this, let's refresh, my normal assumption is that for every file here, there is normal at the beginning, and that's exactly what has happened.
>
> **[4:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=277)** Let's repeat the same for the pneumonia folder.
>
> **[4:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=282)** Let me copy the entire code, (keys clicking) change this to pneumonia, (keys clicking) and change this to pneumonia, (keys clicking) and we run the code.
>
> **[5:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=303)** So this has been repeated for all the files in the pneumonia folder, so this way, it's easy to sort what group each file belongs to.
>
> **[5:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=313)** Now we're going to create two new folders, train and test.
>
> **[5:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=319)** We're going to use shebang make directory train.
>
> **[5:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=325)** This is going to create the new directory called train.
>
> **[5:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=329)** If you refresh this, now we have an empty directory called train, and we will repeat the same thing (keys clicking) for test.
>
> **[5:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=343)** So these our new target directories.
>
> **[5:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=348)** And now again using the generate with AI feature, let's move the first 80% of files from the normal folder to train.
>
> **[6:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=362)** Option, Copy path, and here, we say something like move (keys clicking) the first 80% of files from (keys clicking) to, we want to move it to the train folder.
>
> **[6:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=384)** Let's copy the path there too.
>
> **[6:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=388)** Enter, and there we go.
>
> **[6:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=397)** If we run this code now, inside the train folder, we should have 80% of the normal files.
>
> **[6:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=406)** Let's repeat the same for pneumonia, copy the same code, (keys clicking) and we are moving from pneumonia (keys clicking) to train.
>
> **[6:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=419)** (keys clicking) If we refresh this, inside the train folder, we should have some pneumonia now.
>
> **[7:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=430)** (mouse clicking) To verify that this data has moved properly, let's use the same code that we used to count the number of files initially.
>
> **[7:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=442)** So this is normal, (keys clicking) and yes, so in normal now, we only have 305 left instead of the initial 1,525, so our move was successful.
>
> **[7:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=458)** We can verify the same for pneumonia, (keys clicking) and that's also correct.
>
> **[7:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=467)** So now that we are sure that we only have 305 files left in normal and pneumonia, we can use move, shebang move, (keys clicking) and say all the [[Representational State Transfer (REST)|rest]] of the file in normal.
>
> **[8:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=484)** Let's copy the path.
>
> **[8:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=487)** Let's include the place order that everything here.
>
> **[8:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=490)** (keys clicking) Let's move it to test (keys clicking) option, copy file.
>
> **[8:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=497)** (keys clicking) So we are moving everything left and not copying.
>
> **[8:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=501)** If this is successful, the folder should be empty after this.
>
> **[8:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=506)** So if we run this code now, if this was successful, (keys clicking) it should say zero.
>
> **[8:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=514)** So that was successful.
>
> **[8:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=516)** Let's do the same for pneumonia.
>
> **[8:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=518)** (keys clicking) This is an opportunity to show you different ways of moving files between folders, because you'll be doing that a lot.
>
> **[8:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=532)** So if we check inside test now, there we go, we have the data that we've moved, and this is now empty.
>
> **[9:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=542)** So finally, let's zip the train and the test folder for future use.
>
> **[9:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=548)** Let's use generate with AI again, and say something like zip (keys clicking) the content, (keys clicking) copy the file path, let's copy train first, (keys clicking) and test.
>
> **[9:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=569)** (keys clicking) So this is a pretty long code to do this, but since we have used the Bash previously, let's use this this time.
>
> **[9:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=585)** So what this code is doing is attempting to zip the content in train and test data.
>
> **[9:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=593)** It's zipping them separately.
>
> **[9:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=596)** I would prefer for us to zip this (keys clicking) and give it a new name, so let me write the code in Bash.
>
> **[10:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=606)** Let's name it x-ray normal (keys clicking) pneumonia (keys clicking) .zip, (keys clicking) and I want it to contain all the content in train and test.
>
> **[10:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=622)** So this code has finished running.
>
> **[10:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=624)** It's zipped the content in train, it made it a zipped file.
>
> **[10:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=628)** The content in test, it make this a zipped file.
>
> **[10:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=631)** But since I want the both to be saved into a new file name that I named xray_normal_pneumonia, I wrote the code again, this time using Bash.
>
> **[10:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=644)** So when we run this, my expectation is that we have one file that is named x-ray_normal_pneumonia that is a zipped file.
>
> **[10:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=656)** So let's wait for that to finish running.
>
> **[10:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=658)** So you can see the zipping process, it's literally just compressing the files and making them compact.
>
> **[11:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=667)** If we refresh now, now we have an x-ray_normal_pneumonia zipped folder.
>
> **[11:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=674)** You can decide to test if this works, so copy path.
>
> **[11:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=678)** If it works well, if we apply unzip, (keys clicking) we should have it trying to inflate it back, and it's putting it in the content folder, so this works well.
>
> **[11:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=693)** The next step for you is to download this dataset to your local computer, because we're going to use it in future task.
>
> **[11:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=702)** So this data is about 785 MB, it's quite heavy.
>
> **[11:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=706)** For you to download it, click on those three dots, and then you can click on Download.
>
> **[11:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=713)** So now you have an idea of some of the ways you will need.
>
> **[11:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=716)** So move data around before your task.
>
> **[11:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/preparing-x-ray-image-datasets-for-computer-vision-tasks?u=76281980&t=719)** In dummy tasks, the data is usually preprocessed for you, but this is just to show you, you can move data around, you can rearrange them, you can split them by sizes, and it's going to be a normal part of your workflow as you apply deep learning in healthcare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Non-Speech:** (keys clicking) (36), (mouse clicking) (1)
> **Tools:** bash (7), colab (1)
> **CLI Commands:** make (3), unzip (2), find (1)
> **Code Identifiers:** ray_normal_pneumonia (2), file_downloaded (1), xray_normal_pneumonia (1)
> **UI Navigation:** click on (3), select the (1)
> **Definitions:** is an  (2), is a  (2)
> **Exercise Files:** download the (2)

#### [Task overview : Classifying normal vs. pneumonia X-rays](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=0)** - [Instructor] In this course, our first practical [[Computer Vision]] task using [[Deep Learning]] will be X-ray image classification to distinguish between normal and pneumonia X-ray images.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=13)** Pneumonia caused by various infectious agents is a significant global health concern that often require rapid and accurate diagnosis to ensure timely treatment.
>
> **[0:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=24)** Chest X-ray imaging is one of the most widely used diagnostic tools for identifying pneumonia.
>
> **[0:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=31)** It is non-invasive, relatively cost-effective, and provides essential insight into lung abnormalities.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=41)** To help you understand the versatility of deep learning techniques in medical imaging, we will explore three different approaches to classifying X-rays.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=51)** These approaches are examples designed to illustrate the range of methods available.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=58)** However, it is important to note that with the rapid evolution in this field, many other techniques and advancement exist, making this an ever-expanding area of study.
>
> **[1:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=70)** First, classifying normal versus pneumonia X-ray using [[Convolutional Neural Networks (CNN)|convolutional neural networks]], CNNs.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=79)** Our first approach involves training the convolutional neural network from scratch, which is a foundational architecture in computer vision tasks.
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=88)** This method uses a relatively large dataset of labeled chest X-rays to allow the CNN to learn task-specific features directly from the data.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=101)** By doing so, the model develops a deep understanding of patterns that differentiate normal lungs from pneumonia cases.
>
> **[1:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=111)** While training CNNs from scratch can produce highly accurate results, it has some practical considerations.
>
> **[1:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=119)** This approach requires significant computational resource and an ample supply of labeled data.
>
> **[2:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=127)** As such, it is most suitable for scenarios where large datasets and high-performance [[Hardware]] are available.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=137)** Two, classifying normal versus pneumonia X-ray using a pre-trained architecture.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=145)** The second approach focuses on fine-tuning pre-trained models, a highly effective solution for scenarios where labeled training data is limited.
>
> **[2:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=157)** Pre-trained models such as ResNet or EfficientNet are trained on large, general-purpose datasets and serve as a strong foundation for a variety of tasks.
>
> **[2:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=169)** For pneumonia classification, these models can be adopted by fine-tuning their final layer using a smaller, domain-specific dataset of X-rays.
>
> **[3:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=180)** This approach not only reduces the computational burden, but also leverages the rich feature representations learned during pre-training.
>
> **[3:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=190)** As a result, fine-tuning enables effective learning, even with smaller datasets, making it an efficient and practical solution for many real-world applications.
>
> **[3:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=203)** Finally, we explore zero-shot learning, a method particularly appealing in scenarios where labeled data is scarce or unavailable.
>
> **[3:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=215)** Unlike traditional machine learning methods that rely on task-specific training, zero-shot learning utilizes models pre-trained on extensive and diverse datasets to generalize to new, unseen tasks.
>
> **[3:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=230)** In the context of X-ray classification, zero learning method like CLIP, Contrastive Language-Image Pre-Training, enables the classification of chest X-rays as normal or pneumonia without requiring direct task-specific training.
>
> **[4:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=248)** This is achieved by aligning pre-trained feature representation with descriptive labels or categories, allowing the model to make predictions based on semantic similarities rather than explicit training examples.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=263)** This approach is especially useful in medical application where collecting and labeling large datasets can be time-consuming, expensive, and sometimes infeasible.
>
> **[4:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=277)** Zero-shot learning represents a scalable and efficient alternative, enabling rapid deployment in data-limited contexts.
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=287)** By the end of the classes, you will gain a practical understanding of the diversity of deep learning techniques available for X-ray or any other medical image classification.
>
> **[4:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-classifying-normal-vs-pneumonia-x-rays?u=76281980&t=298)** Each method offers unique strengths and is suited to different scenarios, providing a comprehensive foundation for tackling medical imaging challenges using deep learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (4), [[Computer Vision]] (2), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Hardware]] (1)
> **Env Vars:** cnn (1), clip (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Classifying normal vs. pneumonia X-rays using convolutional neural networks (CNNs)](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=0)** - [Instructor] One of the most common task in [[Computer Vision]] is image classification.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=5)** In this video we will train a deep planning model to classify pneumonia and normal X-ray images.
>
> **[0:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=11)** We will use the dataset prepared in the previous video, which is available in the exercise file folder as X-ray normal pneumonia zip.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=22)** Remember to open a collab notebook, change your run time to GPU and upload the dataset.
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=32)** I should warn you that the upload may take a bit and the next step is to unzip this dataset into our workspace.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=44)** Now that we have unzipped this, if we look into the content folder, we have a test set and a train set just like we saved in the previous video.
>
> **[0:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=54)** You should note that you can optionally create the validation set as well.
>
> **[0:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=59)** Typically, you will train your model on the train set, tune your IPA parameters using the validation set, and then make predictions on the test set.
>
> **[1:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=68)** However, in this case, we will skip the validation step and focus on training and directly making predictions.
>
> **[1:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=76)** During this demo, we are going to be using from directory function.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=80)** So we will need the normal and the pneumonia x-ray classes to be in separate sub directories.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=86)** To sort that, we will use the generate AI function to separate the files in the test folder into pneumonia and normal.
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=97)** So let's copy the file part and then say something like the folder name contains files with normal and pneumonia in their file names.
>
> **[1:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=117)** Create sub directories for each group using bash.
>
> **[2:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=125)** Remember I mentioned that you can choose not to use bash, but I just think bash is more efficient.
>
> **[2:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=132)** Interestingly, this is one of the downsides of using generative models.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=139)** This code is going to do exactly what we want, but it did not use bash as I requested.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=145)** I'm going to use the code like that soon as I know it's going to work.
>
> **[2:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=151)** So now if we check the test folder, my assumption would be that all the files will not be either in normal or pneumonia if it works well.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=165)** Okay, so the code works well.
>
> **[2:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=168)** The files in normal starts with normal just as we expect.
>
> **[2:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=173)** And the files that is pneumonia starts with pneumonia.
>
> **[2:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=177)** We need to repeat exactly the same step for the train folder.
>
> **[3:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=183)** So let's change all the places that has tests to train.
>
> **[3:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=202)** Okay, so this code should work well and work on the train folder two.
>
> **[3:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=210)** And there we go.
>
> **[3:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=211)** We have our files properly separated into sub directories.
>
> **[3:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=217)** So the next step is for us to import the necessary libraries.
>
> **[3:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=223)** So for this task, these are the libraries that we are going to need.
>
> **[3:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=227)** We import [[TensorFlow]] as stf.
>
> **[3:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=232)** We import image data generator from keras pre-processing.
>
> **[3:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=239)** We import sequential from models.
>
> **[4:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=243)** And then in addition to the convolutional neural layer, which is called 2D here, you will notice we have other layers like max pooling, flatten, dense.
>
> **[4:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=257)** We are not going to use the dropout in this instance, but it's commonly used.
>
> **[4:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=262)** From keras preprocessing import image.
>
> **[4:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=268)** We need numpy and we need matplotlib.
>
> **[4:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=272)** Matplotlib is popular for image visualization.
>
> **[4:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=278)** So the next step is to define the part to the dataset.
>
> **[4:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=282)** So let's say train directory is contained here.
>
> **[4:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=286)** Let's verify that we have the correct copy path.
>
> **[4:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=291)** We have the correct directory part.
>
> **[4:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=295)** And then the next step is to create an image data generator object and save it into a variable called train datagen image data generator.
>
> **[5:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=309)** And we are requesting that as it loads the image that it rescales it.
>
> **[5:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=317)** And then the next step is for us to prepare the train and test data to flow directly from the directory.
>
> **[5:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=325)** This is pretty cool.
>
> **[5:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=327)** So train generator.
>
> **[5:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=331)** Let's see if the auto suggested work train generator should do.
>
> **[5:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=336)** So we are asking train datagen to flow from directory.
>
> **[5:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=340)** Our target size is 150 by 150.
>
> **[5:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=345)** So let's edit that.
>
> **[5:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=347)** Let's use a batch size of 32 to enrich our work.
>
> **[5:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=352)** Let's ask it to automatically shuffle the data, which is true.
>
> **[5:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=357)** So let's run this and see if it works.
>
> **[6:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=360)** So tensorFlow is confirming that it can see about 202,440 images belonging to two classes, which is true.
>
> **[6:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=371)** And this is the importance of splitting our data into the right folders and then test.
>
> **[6:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=385)** Okay, so in the test sets we have 610 images belonging to two classes, which is also true.
>
> **[6:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=393)** So for this task, we are going to be building a simple CNN model.
>
> **[6:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=398)** So let's define a variable code model.
>
> **[6:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=402)** And then in a sequential, the sequential should take list.
>
> **[6:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=410)** First of a convolutional layer, conv2D that has 32 nodes
>
> **[7:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=423)** that uses radio activation.
>
> **[7:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=426)** Remember the radio is just one of the available options.
>
> **[7:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=430)** And then the input shape is 150.
>
> **[7:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=435)** Remember, we have resized our data to 150 by 150 in three channels.
>
> **[7:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=442)** And then after that let's have a max pooling layer.
>
> **[7:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=448)** And then we flatten that layer.
>
> **[7:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=451)** Remember when we flatten that matrices when we were looking at the anatomy of images.
>
> **[7:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=459)** And then the next step, a dense layer with 64 activation.
>
> **[7:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=467)** It's also relu and a final dense layer.
>
> **[7:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=474)** This is where the prediction will happen.
>
> **[7:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=478)** And then activation sigmoid.
>
> **[8:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=481)** So we have defined our model.
>
> **[8:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=484)** I should mention that there is a lot you can do here.
>
> **[8:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=487)** You can have other layer types, but this is a simple model just for this demo.
>
> **[8:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=493)** And then we will request to compile this.
>
> **[8:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=499)** We'll be using Adam optimizer, binary crossentropy and our metrics of choice is accuracy.
>
> **[8:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=506)** For this Adam let's specify a Adam learning rates.
>
> **[8:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=513)** This is an IPA parameter that you can play around with.
>
> **[8:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=517)** So let's make it 0.001.
>
> **[8:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=522)** I see.
>
> **[8:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=525)** So this says that Adam is not defined.
>
> **[8:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=527)** That means we did not import Adam.
>
> **[8:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=531)** Let's use [[Gemini]] to import Adam.
>
> **[8:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=535)** So Gemini is asking us to simply import Adam optimizer as a class from tensorflow optimizers.
>
> **[9:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=550)** Okay, so there we go.
>
> **[9:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=551)** We have compiled our model.
>
> **[9:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=553)** The next step will be for us to define the trainer.
>
> **[9:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=559)** We'll be saving the output into history.
>
> **[9:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=562)** So let's feed our model onto train generator.
>
> **[9:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=566)** We wanted to train for so that it finishes early.
>
> **[9:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=570)** Let's do just five epochs for the validation set here.
>
> **[9:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=575)** Let's ask this to use the test generator.
>
> **[9:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=583)** So this is going to take a bit, it's part of why we chose just five epochs.
>
> **[9:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=589)** And if you're paying attention to this, you can see the assumed accuracy.
>
> **[9:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=594)** That means the model is automatically training the model and then comparing the predictions.
>
> **[10:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=601)** And typically if you're looking at this, you should pay attention to the loss function, to the loss reducing.
>
> **[10:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=608)** You want this to be going down many times if it's consistently, let's say it's reducing and then it goes up in a couple of epochs, then your model is starting to over feed and memorizing the dataset.
>
> **[10:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=622)** So this is the validation accuracy.
>
> **[10:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=625)** Our model seem to be doing well.
>
> **[10:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=627)** By the first epoch, it has validation accuracy of 92.9%.
>
> **[10:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=633)** So let's wait 'til the end of the training.
>
> **[10:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=636)** And again, the decision on the number of epochs, it's dynamic.
>
> **[10:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=639)** It's an IPA parameter.
>
> **[10:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=640)** Sometimes it won't work this way and you may need to increase it or reduce it.
>
> **[10:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=652)** So as the model is training, this is me writing the code to print out the final accuracy and loss just to save time.
>
> **[11:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=667)** So as the model is training, I'm going ahead to write the other functions that we need.
>
> **[11:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=672)** For example, we like to view an x-ray image and see the original class and the predicted class for it.
>
> **[11:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=685)** So our model is on the fifth epoch.
>
> **[11:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=689)** So it's rounding up soon.
>
> **[11:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=692)** Okay, so our model has finished training.
>
> **[11:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=696)** This is the code to evaluate the final.
>
> **[11:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=701)** So our model has finished training, and on this particular test set, the accuracy is 92.62, which is pretty good.
>
> **[11:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=711)** So this means that model 9 out of 10 times, our model was correct in its prediction training on that particular data set.
>
> **[11:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=719)** Like I mentioned that you should and definitely play around with this.
>
> **[12:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=723)** If you're curious about what you now do when you have trained the model, you save it, you can save the model into an H5 format, which if you run this code, it should be showing here.
>
> **[12:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=739)** Let's refresh.
>
> **[12:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=741)** Okay, there we go.
>
> **[12:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=743)** So this is the model that you just trained.
>
> **[12:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=745)** You can download it and load it for future task.
>
> **[12:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=750)** So the next thing that we want to do is visualize the predictions.
>
> **[12:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=754)** I have started writing the code as I was running the model.
>
> **[12:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=760)** So predicted label.
>
> **[12:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=765)** Let's see what the suggestion says.
>
> **[12:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=767)** How about actual label?
>
> **[12:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=773)** So this time around, we are trying to extract the actual label from the file name.
>
> **[12:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=778)** Remember what I said about preparing the file name?
>
> **[13:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=784)** So let me close this up.
>
> **[13:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=789)** So this is the title and in the formatting, and this is the place order for actual label.
>
> **[13:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=802)** So let's see if this works well.
>
> **[13:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=806)** Ah, there's something with the F string that I defined here.
>
> **[13:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=811)** Let's use help to fix that.
>
> **[13:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=815)** Okay, so Gemini has reformatted our code.
>
> **[13:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=819)** Let's copy that.
>
> **[13:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=823)** So now we are going to have a sample file part.
>
> **[13:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=829)** Let's copy one.
>
> **[14:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=840)** And then we apply the function, visualize predictions, sample file parts to the model.
>
> **[14:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=850)** Ah, this is interesting.
>
> **[14:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=852)** This is not showing any of the images.
>
> **[14:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=856)** Let's see what is wrong.
>
> **[14:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=859)** Okay, so while Gemini was helping, there's something wrong with this piece.
>
> **[14:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=866)** Let's clear this part of the code.
>
> **[14:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=873)** Okay, so there we go.
>
> **[14:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=874)** In this particular file part, we know that it's normal and the model predicted it as normal.
>
> **[14:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=880)** Yeah, so let's play around with this.
>
> **[14:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=883)** Let's copy one for pneumonia.
>
> **[14:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=886)** If we change the file part, yeah.
>
> **[14:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=890)** And run.
>
> **[14:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=892)** Okay, so in this instance, the predicted label is normal, but the actual label is pneumonia.
>
> **[15:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=900)** So this is a cure for you to test whatever model that you're training.
>
> **[15:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=905)** Remember that the general accuracy for this model is just 92% and we want something that does 100%.
>
> **[15:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-convolutional-neural-networks-cnns?u=76281980&t=915)** So you have successfully trained your folder x-ray classifier using the convolutional neural network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (4), [[TensorFlow]] (3), [[Computer Vision]] (1)
> **Definitions:** is a  (3), is called (1), is an  (1), means that (1)
> **Env Vars:** ipa (3), gpu (1), cnn (1)
> **Tools:** bash (4)
> **CLI Commands:** make (2), unzip (1)
> **Versions:** 0.001 (1), 92.9 (1), 92.62 (1)
> **Code Identifiers:** tensorflow (1), conv2d (1)
> **Cross-References:** previous video (2)

#### [Classifying normal vs. pneumonia X-rays using a pretrained architecture](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=0)** - [Instructor] In the previous video, we trained a CNN-based [[Deep Learning]] model from scratch.
>
> **[0:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=5)** So classifying normal versus pneumonia x-ray images.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=9)** In this session, we will repeat the same task but this time using a pretrained architecture and a much smaller dataset.
>
> **[0:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=18)** Remember, go to colab.[[[Google]].com](https://google.com) to open the notebook, change your run time to GPU and from the provided exercise files, upload the xray_normal_pneumonia_small dataset.
>
> **[0:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=39)** Please note that this is a very small dataset.
>
> **[0:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=41)** In the previous task, we used over 2,500 training images and tested on more than 600 images.
>
> **[0:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=51)** This time however, we will train our model on just 100 images and test on 20.
>
> **[0:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=57)** We are relying on the feature extraction capability of pre-trained models to compensate for the limited dataset size.
>
> **[1:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=66)** So let's unzip our data.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=69)** Copy path, unzip, and there we go.
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=75)** We have our train and test set.
>
> **[1:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=80)** The next step is to import the necessary libraries from [[TensorFlow]].keras.applications import.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=96)** We are going to use ResNet50.
>
> **[1:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=100)** Let's see the suggestions.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=101)** For the layers, we are going to use Dense GlobalAveragePooling.
>
> **[1:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=108)** We need Flatten and Sequential.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=114)** From models, let's import Sequential.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=123)** And then from keras.preprocessing, there's import ImageDataGenerator.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=131)** From keras.optomizer, let's import the Adam.
>
> **[2:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=137)** And then we are not using the classification report.
>
> **[2:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=142)** We need matplotlib, we need numpy.
>
> **[2:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=145)** And then from tensorflow.keras .preprocessing import image.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=155)** So there we go, we have all the necessary libraries.
>
> **[2:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=160)** There's an arrow here, let's fix this.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=165)** And there we go.
>
> **[2:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=166)** So just like we did in the previous video, let's define a train directory, which is this.
>
> **[2:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=174)** Copy path.
>
> **[2:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=179)** And then test directory.
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=187)** So this is us still pre-processing our data, train_datagen, in the image data generator, we can do some argumentation if we like, like horizontally flipping the image, zooming it, and playing around with the share range.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=208)** But this time around, we only want to rescale.
>
> **[3:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=211)** So that's the only thing we are going to do this time around.
>
> **[3:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=214)** But you should know that you have options on some data argumentation techniques.
>
> **[3:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=221)** Test_datagen, you can say that whatever we are doing to the train data, you need to do the same to the text data.
>
> **[3:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=230)** And then the next thing, let's do the train_generator.
>
> **[3:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=236)** This uses train_datagen from the directory.
>
> **[4:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=240)** And then the target size that we care about is 150 by 150.
>
> **[4:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=245)** So let me edit that.
>
> **[4:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=249)** And then the class mode.
>
> **[4:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=251)** If you remember the other time we said, shuffle this dataset.
>
> **[4:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=256)** This time around we are saying false.
>
> **[4:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=257)** Don't shuffle the dataset.
>
> **[4:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=261)** We need exactly the same code for the test data generator.
>
> **[4:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=270)** So let's change all the train here to test.
>
> **[4:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=281)** Okay, so this has confirmed the data size that we are using.
>
> **[4:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=286)** We have 100 images for training belonging to two classes, which are pneumonia and normal.
>
> **[4:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=292)** And for the test set we have 20 images belonging to two classes.
>
> **[4:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=297)** The next step is for us to load the pretrained base model.
>
> **[5:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=301)** So let's say base_model.
>
> **[5:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=304)** So technically, what we are doing this time is using this as our, like whatever you have learned from this, let's reuse it, which is pretty fun and interesting and let's say that.
>
> **[5:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=321)** And then let's freeze the base layer since we only want to change the last layer.
>
> **[5:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=327)** There are really interesting things like this to do when working with deep learning models.
>
> **[5:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=334)** This should trigger a download of wait from ResNet, ImageNet.
>
> **[5:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=340)** As it's downloading, let's build our model.
>
> **[5:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=344)** Model = Sequential().
>
> **[5:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=348)** That takes a list of the base_model.
>
> **[5:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=353)** The next layer is the GlobalAveragePooling.
>
> **[6:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=361)** The next one is a dense layer with 128 neurons, 128, and the activation function on this layer is relu, and for the final prediction layer, we would like to have also a dense layer with only one neuron that decides it's a binary classification and use a sigmoid activation for that.
>
> **[6:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=392)** So now let's compile the model.
>
> **[6:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=395)** We are using Adam, the same learning rate as we used in the previous video.
>
> **[6:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=401)** We are using binary_crossentropy.
>
> **[6:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=402)** This is two classes, so it makes sense for our loss.
>
> **[6:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=406)** And then for metrics, we care about accuracy.
>
> **[6:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=411)** And then the next thing we are going to train our model and save it into your history so that it's accessible.
>
> **[7:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=420)** So train_generator, and this is just five epochs.
>
> **[7:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=425)** Since this is a short class, it may make sense for us to train for them because we have such a small dataset this time around and this is the validation set.
>
> **[7:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=436)** So let's start training.
>
> **[7:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=439)** While this is training, I will keep writing the [[Representational State Transfer (REST)|rest]] of the code.
>
> **[7:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=446)** So, loss accuracy, we want to test it here and if you like to save this model, just like we did the other time, so let's save it if you care about that.
>
> **[7:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=462)** We can make this pretrained.
>
> **[7:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=465)** It makes sense for you to name your files properly.
>
> **[7:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=470)** We will be comparing our predictions.
>
> **[7:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=472)** So we will write a function called visualize_prediction.
>
> **[8:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=480)** That takes the file path and the model, and it's preprocesses the image.
>
> **[8:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=489)** That means it loads whatever image in the file path and puts it in the target.
>
> **[8:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=494)** Let's look at the loss and accuracy of our model.
>
> **[8:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=499)** So this time around, we have a test loss of 0.69 and a test accuracy of 0.5.
>
> **[8:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=505)** And this is as good as a guesswork.
>
> **[8:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=508)** But remember that this dataset is extremely small compared to when we trained our model from scratch.
>
> **[8:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=515)** The goal of this is just to show you how it works if you were loading from a pre-trained architecture.
>
> **[8:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=520)** So this isn't a great model.
>
> **[8:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=523)** So I don't have big expectation for when we visualize some of the predictions.
>
> **[8:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=537)** So for predicted_label, since we want our visualization to display both the predicted_label and the actual labels, so we include that in our function.
>
> **[9:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=554)** For the actual label, we are just saying that the model should extract it from the file path, which is faster, but imagine if we were wrong in the file path.
>
> **[9:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=564)** That's going to make our visualization also wrong.
>
> **[9:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=568)** Let's switch off the axis and okay, this is a good title.
>
> **[9:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=574)** And then plt.show().
>
> **[9:40](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=580)** Okay, so we have an arrow here.
>
> **[9:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=583)** Let's remove this.
>
> **[9:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=587)** Okay, so let's find the sample file path.
>
> **[9:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=593)** I'm not sure of this file name.
>
> **[9:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=596)** So let's copy a real one from test.
>
> **[10:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=605)** So there we go, of an actual file name.
>
> **[10:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=612)** Okay, just like we expected, this model in this instance predicted that this is pneumonia, but the actual bill is normal.
>
> **[10:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=620)** But this is how you use a base model on your data.
>
> **[10:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=624)** So imagine if we increase the data size from 100 like we did there for training and we made it, let's say 300 or 500.
>
> **[10:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=634)** We may be able to get similar accuracy as using a lot more data to train the model from scratch.
>
> **[10:42](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=642)** So that's a way for you to practice.
>
> **[10:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-a-pretrained-architecture?u=76281980&t=644)** Increase the data size from 100 to maybe 200 or 300 and you can see what you find.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[TensorFlow]] (2), [[Google]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Code Identifiers:** train_datagen (2), train_generator (2), base_model (2), predicted_label (2), xray_normal_pneumonia_small (1)
> **CLI Commands:** make (3), unzip (2), find (2)
> **Analogies:** just like (3), imagine (2)
> **Definitions:** is a  (4)
> **Cross-References:** previous video (3)
> **Env Vars:** cnn (1), gpu (1)
> **Versions:** 0.69 (1), 0.5 (1)

#### [Classifying normal vs. pneumonia X-rays using zero-shot learning](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=0)** - [Instructor] So classify x-ray images as normal or pneumonia, we will use zero shot classification with the pre-trained model.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=9)** Zero shot learning enables classification without task-specific training data.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=14)** So we do not need a training data in this instance.
>
> **[0:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=19)** In this video, we will implement this approach using a clip based model from organ phase transformers library.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=28)** To get started, remember to open the Colab notebook at colab.research.[[[Google]].com](https://google.com) and upload xray_normal_pneumonia_small that is provided for you in the exercise files.
>
> **[0:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=47)** Now that the upload is complete, let's copy the file path and unzip into our workspace.
>
> **[0:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=56)** So we have a dataset in the content folder.
>
> **[1:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=61)** Now let's go ahead and import the necessary libraries.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=65)** Import torch from pillow, PIL, import image
>
> **[1:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=75)** from torchvision imports transforms,
>
> **[1:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=85)** and then from transformers import, CLIPprocessor, and CLIPmodel.
>
> **[1:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=103)** So now let's run the cell.
>
> **[1:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=107)** The next step for us is to load the clip-based model.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=114)** So this is a notebook downloading the weight for the pre-trained models, and we would define our labels.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=123)** The labels that we care about this time is, is the x-ray image we are supplying, is it normal or it's related to pneumonia?
>
> **[2:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=135)** Now we are going to write the function that classifies our images.
>
> **[2:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=139)** So there classify, classify image, this is an image path, the model, and then processor.
>
> **[2:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=155)** So the first step is for whatever image that is provided to be opened, let's convert it to RGB so that it has three channels.
>
> **[2:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=170)** Remember that our extra images are gray skills.
>
> **[2:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=175)** So this is an opportunity for you to play around with this.
>
> **[2:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=178)** And for the input in the processor, we specify that these are our labels, which we have defined here.
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=186)** This is our image, and we wanted to return the tensors as [[PyTorch]] and then to path the data.
>
> **[3:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=196)** So now that we've pre-processed the data a bit, we will pass it into the model as input.
>
> **[3:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=202)** And in a variable code logits_per_image, we assess the logits per image of the output, and then we define the probabilities.
>
> **[3:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=218)** We still want some more processes.
>
> **[3:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=221)** So let's have a predicted index.
>
> **[3:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=229)** Since our prediction is going to return a range of value, we are going to assess the highest one, the argmax,
>
> **[4:01](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=241)** and then for the predicted label, we reassess the label that is associated with this index.
>
> **[4:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=248)** So we can have something like print the predicted label and return the predicted label because that's what we care about, this function that we're writing.
>
> **[4:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=259)** The job is to take our image, pre-process it, pass it to this model that we downloaded here, and let's see what it predicts.
>
> **[4:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=269)** So let's have a variable called sample_file_path.
>
> **[4:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=276)** Let's copy one of the file paths from our test set, even though we did not train this time.
>
> **[4:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=281)** So we may as well use data from the training set.
>
> **[4:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=285)** Whatever you prefer, copy the path.
>
> **[4:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=288)** And then for the first predicted label, let's do classify image, sample file data.
>
> **[4:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=298)** The model processor, we already put the labels inside the processor and now we should just have a predicted label.
>
> **[5:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=311)** Okay, so this says that the function that we specified requires labels since we already specified labels here.
>
> **[5:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=321)** Actually it does. Let's include labels.
>
> **[5:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=330)** Okay, so this says that this data that we are sure is normal.
>
> **[5:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=335)** It says that it's pneumonia, so the model is wrong in this instance.
>
> **[5:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=341)** So this time around we use the general clip model.
>
> **[5:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=346)** What if we decided to use a biomedical focused model?
>
> **[5:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=350)** So let's do this.
>
> **[5:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=354)** So from transformers, remember the general clip is just for general multimodal items.
>
> **[6:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=362)** So let's import something that is biomedical focused, maybe to do a better job in predicting x-ray images, an auto processor, auto processor.
>
> **[6:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=377)** And then we want this model, Automodel.from_pretrained.
>
> **[6:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=386)** So this is the name of a model that has been adopted as a biomed clip, and we are going to specify that it should trust remote code.
>
> **[6:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=398)** If we don't specify this, it's going to ask for some more authentication details.
>
> **[6:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=404)** So let's just specify that it's trusted.
>
> **[6:48](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=408)** So now we are asking to load this biomed clip based model that is focused on biomedical data and its processor.
>
> **[6:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=419)** I think there's an error with our code. Okay?
>
> **[7:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=423)** Model is capital, not the small m.
>
> **[7:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=435)** So now we are downloading a new model.
>
> **[7:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=439)** And what we are going to do with this download, is that the same prediction.
>
> **[7:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=445)** Let's see if it does a better job classifying it.
>
> **[7:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=452)** Remember now that our model is the biomed, which we have instantiated here.
>
> **[7:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=458)** So let's see what happens.
>
> **[7:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=461)** Okay, so this model does a better job.
>
> **[7:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=463)** It realizes that this is normal, just like we expect.
>
> **[7:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=467)** So this is how it works in practice.
>
> **[7:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=470)** We try the general clip model that is not designed for biomedical or clinical images, and we can see, but we were able to establish that even the click base was able to make some predictions even though it's wrong without us training afresh.
>
> **[8:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=485)** And when we decided to go for the biomed focused one, we got better responses.
>
> **[8:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=492)** A good task for you is for you to actually visualize this image.
>
> **[8:16](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=496)** You can look at the previous code and just copy it here so that it shows you what's normal and what the actual label versus the predicted label look like.
>
> **[8:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/classifying-normal-vs-pneumonia-x-rays-using-zero-shot-learning?u=76281980&t=506)** Even in this instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[PyTorch]] (1)
> **Code Identifiers:** xray_normal_pneumonia_small (1), logits_per_image (1), sample_file_path (1), from_pretrained (1)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** unzip (1), make (1)
> **Env Vars:** pil (1), rgb (1)
> **Tools:** colab (2)
> **URLs:** [google.com](https://google.com) (1)
> **UI Navigation:** open the (1)

#### [Task overview: Object detection in medical imaging](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=0)** - [Instructor] In the previous series of videos, we explored various approaches to image classification in healthcare, focusing on differentiating between normal and pneumonia x-ray images.
>
> **[0:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=13)** In this video, we are introducing an exciting new task, object detection in medical images.
>
> **[0:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=21)** Object detection is a task where we identify and localize objects within an image by drawing bounding boxes or other shapes around areas of interest.
>
> **[0:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=34)** In the context of medical imaging, these areas might correspond to abnormalities in x-rays, micrographs, or even MRI scans.
>
> **[0:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=46)** So this task goes beyond simply classifying images as normal or pneumonia.
>
> **[0:52](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=52)** Instead, we aim to pinpoint specific regions of interest within an image.
>
> **[0:58](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=58)** For example, using the same x-ray dataset, our goal is to detect and localize critical findings such as lung consolidation, infiltrates in the lungs, lung opacity, pneumonia in the lung, infected lung tissue, pleural effusion.
>
> **[1:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=79)** To implement object detection, there are typically two approaches.
>
> **[1:24](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=84)** Training the model from scratch using architectures like U-NET, which is popular for working with small training data and has been used for medical images.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=95)** This will usually be supervised and requires creating a labeled data set where bounding boxes or masks are drawn around areas of interest.
>
> **[1:46](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=106)** And then transfer learning with pretrained models.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=109)** General object detection [[Algorithms]] such as YOLO, You Only Look Once, or Faster R-CNN, can be fine-tuned on medical imaging dataset.
>
> **[2:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=120)** These algorithms [[Microsoft Excel|excel]] in detecting objects in real world images and can be adapted for medical context with sufficient labeled data.
>
> **[2:11](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/task-overview-object-detection-in-medical-imaging?u=76281980&t=131)** In the next video, we will explore zero-shot detection based transfer learning, attempting to use a CLIP based multimodal model to detect and localize findings in x-ray images.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** mri (1), net (1), yolo (1), cnn (1), clip (1)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Zero-shot object detection in X-rays using CLIP-based models](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=0)** - [Instructor] In this video, we're going to practice zero-shot object detection using the CLIP-based model on X-ray images.
>
> **[0:06](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=6)** Remember to open colab.[[[Google]].com](https://google.com).
>
> **[0:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=10)** In this instance, since we are only making inference, you don't have to use GPU instance and upload the xray_normal_pneumonia_small dataset provided for you in the Exercise File.
>
> **[0:22](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=22)** And let's go ahead to unzip it.
>
> **[0:30](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=30)** Now, let's import the necessary libraries like torch, image from Pillow, numpy, matplotlib.
>
> **[0:44](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=44)** We will need patches from matplotlib.patches.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=53)** And then from transformers, import Automodel and Autoprocessor.
>
> **[1:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=65)** We are also going to need cv2.
>
> **[1:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=69)** Now let's do the BioMed CLIP, model = Automodel.from_pretrained, and this is the BioMed version of CLIP.
>
> **[1:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=86)** This is available on [[Hugging Face]].
>
> **[1:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=88)** You can look it up and read more about the model and how it was trained, if you care about that.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=95)** And let's specify to trust_remote_code.
>
> **[1:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=101)** For the same model, we should download the processor.
>
> **[1:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=109)** So this is the code downloading this pre-trained BioMed CLIP model.
>
> **[1:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=114)** So we're going to define a bunch of prompts of possible things that we are looking for from our data.
>
> **[2:03](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=123)** So we are looking for things like lung consolidation, infiltrates in the lung, lung opacity.
>
> **[2:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=138)** You can look for a whole range of things.
>
> **[2:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=141)** These are just things that we will be asking the model, like for areas of the image related to this, attempt to label them using some of this themes.
>
> **[2:34](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=154)** Infected lung tissue.
>
> **[2:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=159)** We can also say it should look for pleural effusion.
>
> **[2:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=165)** And what if the lung is just normal, it does not find anything?
>
> **[2:50](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=170)** So I encourage you to play around with some of this prompts.
>
> **[2:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=174)** You can add yours.
>
> **[2:56](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=176)** Let's see if you can see pneumonia in the lungs tool, just in case there are things.
>
> **[3:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=184)** Now we have defined our possible prompt, and these are sort of labels.
>
> **[3:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=189)** We are asking that based on those image that we are going to provide to the model, it should try to to use areas that have things like this.
>
> **[3:19](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=199)** So let's say, let's define the function that can detect objects in lung.
>
> **[3:27](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=207)** Let's make it more general.
>
> **[3:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=208)** Let's make it detect object in image.
>
> **[3:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=212)** It takes the image part, it takes a model processor.
>
> **[3:38](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=218)** This processor is similar to, if you're familiar with this library, it's similar to what tokenizers will typically do.
>
> **[3:47](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=227)** Image, the image provided, open it.
>
> **[3:57](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=237)** The X-ray images are grayscale, so let's make them three channels by converting them to RGB.
>
> **[4:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=245)** Then the input will be the processor that takes the text_prompts, image, it's returns tensors that [[PyTorch]]-compatible, and you pad it, and then you apply the model to this input.
>
> **[4:23](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=263)** The next step is to define the logic_per_image variable.
>
> **[4:31](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=271)** So the logic_per_image and then the [[Probability]].
>
> **[4:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=275)** We are going to use softmax, one dimension.
>
> **[4:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=279)** We still want to predict the indexes.
>
> **[4:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=285)** So let's see if this suggested code is correct, assess item.
>
> **[4:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=295)** And the predicted label will be the text prompt for the predicted_idx.
>
> **[4:59](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=299)** It's accessible directly.
>
> **[5:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=302)** So let's fix that in the code.
>
> **[5:08](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=308)** So let's ask the it returns a string of Predicted label, and let's visualize so that we can see exactly what is going on.
>
> **[5:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=320)** Let's define the fig.ax, and say, plt subplot 1.
>
> **[5:29](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=329)** And in the subplot, let's define a figure size that is 12-by-9.
>
> **[5:36](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=336)** You can play around with the size.
>
> **[5:37](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=337)** It's not specific.
>
> **[5:41](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=341)** And then in the axis, let's set a title.
>
> **[5:45](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=345)** The title should be, let's make it Detected.
>
> **[5:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=351)** So this is what the model can see.
>
> **[5:54](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=354)** And let's return predicted_label.
>
> **[6:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=362)** Okay, so we have successfully written our function.
>
> **[6:05](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=365)** Let's pick a sample file path.
>
> **[6:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=369)** Let's pick it from the test set, copy path.
>
> **[6:17](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=377)** So let's call this image_path.
>
> **[6:21](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=381)** It takes a string of the file path, and then we apply our function, and say something like predicted_label we apply our function to the model.
>
> **[6:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=395)** And if we run this, okay, so this time around, the model says that in this particular X-ray image, it can detect lung opacity.
>
> **[6:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=411)** So now that we know that this function works, this function has successfully shown what the CLIP-based model detected that this particular lung image, there are some detected opacity.
>
> **[7:04](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=424)** We should improve on our function for it to draw bounding boxes in areas where it suspects that there are interesting things.
>
> **[7:13](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=433)** This is a pretty long code.
>
> **[7:15](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=435)** So it's mostly us building on the first code that we have here that only detects objects in image and returns the value as text.
>
> **[7:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=446)** This time around, we wanted to draw bounding boxes around the areas that it thinks that there may be interesting things to observe.
>
> **[7:35](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=455)** So now that I have run the code, let's run this again and see what happens.
>
> **[7:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=463)** So if we run this now, if it works well, we should have put the predicted_label by the CLIP model.
>
> **[7:51](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=471)** And now these are the places in the image that the model thinks that there are interesting things, either to take extra look at or to help in your diagnosis.
>
> **[8:02](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=482)** We have successfully used the pretrained model, a pretrained biomed CLIP model to find the interesting patterns in our data.
>
> **[8:10](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=490)** For example, in this instance, it says that it thinks that based on this X-ray image, there is lung opacity.
>
> **[8:18](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=498)** And we've gone ahead to do some masking to be able to draw bound in boxes around this.
>
> **[8:25](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=505)** Yes, so that's what the model thinks.
>
> **[8:26](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=506)** And this is amazing.
>
> **[8:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=508)** What is amazing about this is that we didn't even need to provide with our own training data.
>
> **[8:33](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=513)** But if I were making decisions about this in an actual sense, we should double-check this.
>
> **[8:39](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=519)** If it has actually worked well, we should double check this.
>
> **[8:43](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=523)** If maybe we can use this type of model in our pipeline to draw bounding boxes, because that can take a lot of time.
>
> **[8:49](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/zero-shot-object-detection-in-x-rays-using-clip-based-models?u=76281980&t=529)** But this is how it works, and I would like you to practice further.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Hugging Face]] (1), [[PyTorch]] (1), [[Probability]] (1)
> **Code Identifiers:** predicted_label (3), logic_per_image (2), xray_normal_pneumonia_small (1), from_pretrained (1), trust_remote_code (1)
> **Env Vars:** clip (7), gpu (1), rgb (1)
> **CLI Commands:** make (4), find (2), unzip (1)
> **Analogies:** similar to (2), for example (1)
> **Exercise Files:** exercise file (1), download the (1)
> **URLs:** [google.com](https://google.com) (1)
> **Tools:** colab (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=0)** - We've been on an incredible journey, learning all about [[Deep Learning]] and its practical applications in healthcare together.
>
> **[0:09](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=9)** So, what's next for you?
>
> **[0:12](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=12)** My advice is to practice.
>
> **[0:14](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=14)** Try applying some of the techniques you've learned to your own datasets at work.
>
> **[0:20](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=20)** You may find certain parts challenging, but solving them will be both rewarding and potentially life-changing.
>
> **[0:28](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=28)** In this course, we focused on [[Computer Vision]].
>
> **[0:32](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=32)** If you're interested in exploring [[Natural Language Processing (NLP)|natural language processing]], NLP for healthcare, check out my [[LinkedIn]] Learning course, [[Advanced AI- NLP Techniques for Clinical Datasets]], and to practice further, explore my Hands-on [[Data Science]] and AI course on LinkedIn.
>
> **[0:53](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=53)** Congratulations on completing this course.
>
> **[0:55](https://www.linkedin.com/learning/deep-learning-fundamentals-for-healthcare/next-steps?u=76281980&t=55)** I wish you all the very best in your journey ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Deep Learning]] (1), [[Computer Vision]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Data Science]] (1)
> **Env Vars:** nlp (2)
> **CLI Commands:** find (1)
> **Speakers:** - we (1)


## Instructor

- [[Wuraola Oyewusi]]

## Path Context

### In [[AI for Healthcare- Essentials for Technical Roles]]
← [[Advanced AI- NLP Techniques for Clinical Datasets]] | **6 of 6**

## Appears In

- [[AI for Healthcare- Essentials for Technical Roles]]

---

[↑ Back to top](#)