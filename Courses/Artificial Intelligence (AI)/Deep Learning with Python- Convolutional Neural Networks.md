---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: deep-learning-with-python-convolutional-neural-networks
url: "https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks"
duration_minutes: 94
duration: 1h 34m
level: Intermediate
updated: 6/20/2025
learners: 2866
skills:
  - Python (Programming Language)
  - Artificial Intelligence (AI)
  - Convolutional Neural Networks (CNN)
  - Deep Learning
exercise_files: true
github: "https://github.com/LinkedInLearning/deep-learning-with-python-convolutional-neural-networks-3930067/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEkUgFwxz9nxA/learning-public-crop_675_1200/B4EZd__HrXHgAg-/0/1750198942772?e=2147483647&amp;v=beta&amp;t=7US34NHV6L_lyhRJ-fRB8RgTwT-HgdzJL4TUZrRqWGw"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in Deep Learning and Neural Networks]]'
prev_courses:
  - '[[Artificial Intelligence Foundations- Neural Networks]]'
next_courses:
  - '[[AI Workshop- Build a Neural Network with PyTorch Lightning (2023)]]'
path_nav: '[{"path":"Advance Your Skills in Deep Learning and Neural Networks","position":3,"total":8,"prev":"Artificial Intelligence Foundations- Neural Networks","next":"AI Workshop- Build a Neural Network with PyTorch Lightning (2023)"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/python-programming-language
  - skill/artificial-intelligence-ai
  - skill/convolutional-neural-networks-cnn
  - skill/deep-learning
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Deep%20Learning%20with%20Python-%20Convolutional%20Neural%20Networks.md)

![Deep Learning with Python: Convolutional Neural Networks](https://media.licdn.com/dms/image/v2/D4E0DAQEkUgFwxz9nxA/learning-public-crop_675_1200/B4EZd__HrXHgAg-/0/1750198942772?e=2147483647&amp;v=beta&amp;t=7US34NHV6L_lyhRJ-fRB8RgTwT-HgdzJL4TUZrRqWGw)

# Deep Learning with Python: Convolutional Neural Networks

> Explore the fascinating world of convolutional neural networks (CNNs) and uncover how they’ve revolutionized the field of computer vision and deep learning. Understand the building blocks of CNNs and delve into practical exercises using Python, focusing on real-world applications such as image classification, object detection, and image segmentation. Instructor Fred Nwanganga helps you develop pro

> [LinkedIn Learning](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks) | 1h 34m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Using convolutional neural networks (CNNs) with Python](#using-convolutional-neural-networks-cnns-with-python)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Computer Vision**](#1-computer-vision) (5 videos)
  - [What is computer vision?](#what-is-computer-vision)
  - [A brief history of computer vision](#a-brief-history-of-computer-vision)
  - [Understanding image data](#understanding-image-data)
  - [Preprocessing image data in Python](#preprocessing-image-data-in-python)
  - [Augmenting image data in Python](#augmenting-image-data-in-python)
- [**2. CNNs**](#2-cnns) (5 videos)
  - [CNNs](#cnns)
  - [Convolutional layers and filters](#convolutional-layers-and-filters)
  - [Pooling layers](#pooling-layers)
  - [Fully connected layers](#fully-connected-layers)
  - [Why are CNNs so effective for computer vision?](#why-are-cnns-so-effective-for-computer-vision)
- [**3. Image Classification with CNNs**](#3-image-classification-with-cnns) (3 videos)
  - [Preparing to build a CNN in Python](#preparing-to-build-a-cnn-in-python)
  - [Defining a CNN in Python](#defining-a-cnn-in-python)
  - [Training a CNN in Python](#training-a-cnn-in-python)
- [**4. CNN Architectures**](#4-cnn-architectures) (5 videos)
  - [VGGNet](#vggnet)
  - [Inception networks](#inception-networks)
  - [ResNet](#resnet)
  - [MobileNet](#mobilenet)
  - [EfficientNet](#efficientnet)
- [**5. Common Computer Vision Tasks**](#5-common-computer-vision-tasks) (6 videos)
  - [What is image classification?](#what-is-image-classification)
  - [Using a pretrained model for image classification in Python](#using-a-pretrained-model-for-image-classification-in-python)
  - [What is object detection?](#what-is-object-detection)
  - [Using a pretrained model for object detection in Python](#using-a-pretrained-model-for-object-detection-in-python)
  - [What is image segmentation?](#what-is-image-segmentation)
  - [Using a pretrained model for image segmentation in Python](#using-a-pretrained-model-for-image-segmentation-in-python)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing with deep learning](#continuing-with-deep-learning)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using convolutional neural networks (CNNs) with Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-convolutional-neural-networks-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-convolutional-neural-networks-with-python?u=76281980&t=0)** - [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]], or CNNs, have become the backbone of modern [[Computer Vision]], enabling machines to analyze and understand images and videos with incredible precision. How do CNNs see and process visual data? And how are they applied to solve real world problems, like facial recognition or medical imaging? These are just a couple of the topics we explore in this course. We'll start by breaking down the building blocks of CNNs. Then we'll get hands on with [[Python (Programming Language)|Python]] to build and evaluate a convolutional neural network. Hi, my name is Fred Nwanganga, and I'm a data scientist, teacher, and author, passionate about helping others unlock the power of AI and machine learning. Join me as we delve into the fascinating world of Convolutional Neural Networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (2), [[Computer Vision]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Speakers:** - convolutional (1)

#### [What you should know](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started, let's go over some of the background knowledge that you should have in order to get the most out of this course. First, I assume that you have a fundamental understanding of [[Neural Networks]] and [[Deep Learning]]. If you don't, I recommend that you review the first course in this series. Second, it will be helpful if you are reasonably comfortable coding in [[Python (Programming Language)|Python]]. I will assume that you know how to: "Import a Python package", "Refer to the attributes and methods of an object", "Define a function", and "Interact with loops". Finally, I do assume that you know how to use the Jupyter Notebook interactive Python environment. Specifically, I assume that you know how to edit and run code within a code cell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Neural Networks]] (1), [[Deep Learning]] (1)
> **CLI Commands:** python (3)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-the-exercise-files?u=76281980&t=0)** - [Instructor] This course is delivered using [[GitHub]] code spaces, a development environment hosted in the cloud. You won't have to install packages or set up anything. It's all done for you in the environment. The best way to become proficient in building convolutional neural network models in [[Python (Programming Language)|Python]] is to practice doing so yourself. The exercise files you need for this course will be provided to you in the course "GitHub Repo". This means that you can follow along with any of the code examples in the lessons. I recommend that you do so. The exercise files available on GitHub are organized by branches. Let's take a look at an example. The files in the 0104 branch are what we use in the fourth video of the first chapter. So these are the files that are in this folder. We have two notebooks for each of the lesson videos. The 0104B notebook is the beginning notebook. This notebook has no code in the code sales, usually to practice writing the code we go over in the lesson videos. The 0104E notebook is the ending notebook. It is a completed version of the beginning notebook. This is the notebook I would execute or go over during the coding example videos. Let's jump in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Python (Programming Language)|Python]] (1)
> **Tools:** github (3)
> **Exercise Files:** exercise files (2), github repo (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)


### 1. Computer Vision

[↑ Back to Table of Contents](#table-of-contents)

#### [What is computer vision?](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-computer-vision?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-computer-vision?u=76281980&t=0)** - [Instructor] [[Computer Vision]] is a fascinating field at the intersection of computer science and [[Artificial Intelligence (AI)|artificial intelligence]]. At its core, computer vision focuses on enabling machines to interpret and understand visual data, such as images and videos, in a way that mimics human perception. This includes recognizing objects, interpreting scenes, and making decisions based on what they observe. Today, "Computer Vision" is widely used across many industries. It "Powers facial recognition systems on smartphones", "Helps autonomous vehicles detect pedestrians and traffic signs", "Assists doctors in analyzing medical scans", and "Enables robots to navigate and interact with their surroundings". Virtually any field that involves visual input can benefit from computer vision technologies. Computer vision tasks can be categorized into six main areas. One of the most basic is "Image Classification", which involves determining what object or category appears in an image. "Object detection" builds on this by not only identifying objects, but also locating them within the image using bounding boxes. "Segmentation" goes even further by dividing an image into distinct regions and labeling each pixel. Other key tasks include "Recognition and Identification", such as matching a face to a known identity or interpreting handwritten digits.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-computer-vision?u=76281980&t=94)** "Motion Analysis" focuses on understanding how objects move across frames in a video. Finally, "3D Scene Reconstruction" attempts to infer depth and spatial relationships from two-dimensional images. Computer vision is transforming the way machines interact with the world by giving them the ability to see, interpret, and respond to visual information. As the technology continues to advance, its impact will only grow, enabling smarter systems across countless domains.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (6), [[Artificial Intelligence (AI)|Artificial intelligence]] (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [A brief history of computer vision](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/a-brief-history-of-computer-vision?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/a-brief-history-of-computer-vision?u=76281980&t=0)** - [Instructor] [[Computer Vision]] has evolved significantly over the years. The early stages, from the 1960s through the 1990s, relied heavily on manually crafted [[Algorithms]]. Basic techniques such as "Edge Detection" and "Quantum Detection" were widely used at that time. While these methods performed well in controlled settings, they often struggled with the complexity and variability of real world images. In the 2000s, machine learning models, like "Support Vector Machines", started to lead to modest improvements in the field. However, it wasn't until the rise of [[Deep Learning]] in the 2010s that major breakthroughs came about. Although [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]], or CNNs, were first introduced in the late 1980s, they did not become practical for widespread use until much later. Early on, training deep [[Neural Networks]], like CNNs, was both computationally prohibitive and limited by the lack of large label data sets. Between 2010 and 2012, two important developments helped to overcome these limitations. First, the "Introduction of Graphics Processing Units", or GPUs, made it possible to train deep neural networks far more efficiently. Models that once took weeks to train on a CPU could now be trained in a matter of days, or even hours, using a GPU. Second, "The release of large image data sets
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/a-brief-history-of-computer-vision?u=76281980&t=96)** such as ImageNet", which contains millions of labeled images across 1000 categories, provided the scale of data required to train deep models effectively and avoid overfitting. In 2012, a deep convolutional neural network called "AlexNet" made headlines by dramatically improving performance in the ImageNet large scale visual recognition challenge. It significantly reduced the classification error rate compared to previous methods. This achievement was a turning point in the field, and helped spark the current wave of innovation in Computer Vision. Since that time, Convolutional Neural Networks have become the foundation for most state-of-the-art Computer Vision systems. On benchmarks such as "ImageNet", CNN-based models have reached performance levels that are comparable to, and sometimes even surpass, human accuracy. In the remainder of this course, we'll explore how CNN's work, and understand why they've become the backbone of modern Computer Vision systems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (4), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (2), [[Neural Networks]] (2), [[Algorithms]] (1), [[Deep Learning]] (1)
> **Env Vars:** cnn (2), cpu (1), gpu (1)
> **Analogies:** such as (3)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Understanding image data](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/understanding-image-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/understanding-image-data?u=76281980&t=0)** - [Instructor] A "Digital Image" is essentially a collection of numbers arranged in a grid. For a gray scale image, this grid takes the form of a two-dimensional array, where each value represents the brightness or intensity of a single pixel. Color images, on the other hand, are typically stored as three-dimensional arrays. The third dimension represents the color channels of red, green, and blue, commonly referred to as "RGB". For instance, a color image with a resolution of 64-by-64 pixels is represented as a 64-by-64-by-3 array. Each pixel in the image contains three values corresponding to the intensity of red, green, and blue at that specific location. Most images use an eight-bit encoding system, where pixel values range from zero to 255. This is known as the "Color Depth". In gray scale images, zero represents black, and 255 represents white. For color images, each of the red, green, and blue channels follows the same range, where a pixel with values of 255, 255, 255 appears white while 0, 0, 0 appears black. However, not all images use eight bits encoding. Some may use 16 bits encoding, which is known as "High Color",
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/understanding-image-data?u=76281980&t=93)** or 24 bits encoding, which is known as "True Color". Regardless of the encoding format, before passing images to a Convolutional Neural Network, a common pre-processing step is to normalize image pixel values so they fall within a smaller range. We discuss this process in the next course video. In addition to resolution, pixel values, and color depth, the layout of image data in memory is also worth noting. [[Deep Learning]] frameworks, such as "[[TensorFlow]]" and "Keras", use what is known as a Channels Last Format". This means that images are represented as "tensors", with shape, height, width, and then channels. A 256-by-256 color image would therefore have the shape 256, 256, 3. In contrast, "[[PyTorch]]" uses the channels first format, where the order of dimensions is channels, height, and then width. This means that the same image would be represented as 3, then 256, and 256. Although the underlying data is the same, this difference in format must be accounted for when designing network architectures. The input layer of a CNN must be explicitly configured to match the shape of the incoming data. Understanding how images are represented,
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/understanding-image-data?u=76281980&t=186)** how pixel values are scaled, and how data is structured in memory provides us with some of the foundational knowledge needed for working with image data. In the next video, we will build on this foundation by exploring some of the common steps we take to pre-process images for [[Computer Vision]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1), [[TensorFlow]] (1), [[PyTorch]] (1), [[Computer Vision]] (1)
> **Definitions:** known as (4), means that (2)
> **Env Vars:** rgb (1), cnn (1)
> **Cross-References:** in the next (2)
> **Analogies:** for instance (1), such as (1)
> **Speakers:** - [instructor] (1)

#### [Preprocessing image data in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preprocessing-image-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preprocessing-image-data-in-python?u=76281980&t=0)** - [Instructor] Before we feed raw images into a [[Deep Learning]] model, we often have to transform them into a format that's easier for models to interpret. This process is called "Image Pre-Processing". In this tutorial, we're going to walk through several common pre-processing steps using a well-known dataset known as the "Kaggle Dogs versus Cat" dataset. So before we begin, let's select a Kernel. All right, so the images that we're going to be working with are stored in a directory called "Train". Within that directory, there are two sub directories. One is called "Cat" and the other is called "Dog". And obviously as the names imply, we have cat images in the cat folder and dog images in the dog folder. So let's begin by taking a look at an example from the cat folder. So we have an example image from the cat folder, and we see the image size as 299 by 196 pixels. So let's also take a look at a sample image from the dog folder. Now we have another image. This time around the image size is 396 by 500 pixels. We see that the image sizes are variable and they're not the same. All right, the first thing we're going to do now is actually to load our data. So we're going to use the Keras utility function called "Image Dataset" from directory. And so this utility function allows us to specify certain parameters. And so within the function, before we actually pass data to function, we specify the folder, the train folder,
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preprocessing-image-data-in-python?u=76281980&t=94)** which has both the cat and the dog sub folders. And one of the things that we specify here is labels is inferred, which pretty much tells the function that to label all the images in the cat folder as cat images and those in the dog folder using the name of the folder as dog images. We also specify label mode, which says that we want to use energy labels. We specify batch size. And so this is again, something that we can choose to increase or to decrease. So here I use six. There are six pictures all across two folders. So I'm just going to put everything to one batch and I set a "seed "of 1, 2, 3, 4. The reason for this seed is to make our code deterministic so that when we run it a second time, we get the same results. So let's go ahead and run that. So the process is complete. Now we can take a look at the imported images to see what they look like. And to do that we specify this function called "Display Images". And then we can call the function. And now we see all six images. So we see a cat, a cat, a dog, a dog, dog, and a cat image. And for each of these images, I specify the size. So we see that the size of each of these images has been resized, right? So each of the images has been resized to 256 by 256. This is the default resizing that's performed by the image dataset from directory utility function. We do have the option of specifying a size of our choosing.
>
> **[3:10](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preprocessing-image-data-in-python?u=76281980&t=190)** For example, "[[Neural Networks]]" like "VGG" and "Resnet" have specific size expectations for images that come in. So one of the things that we can do is when we call the image dataset from directory function, we can specify an argument for image size. So here we specify 224 by 224, and let's use that and then let's reimport our images. This time around using that new specification. The other thing we do here as well is to crop and center. So let's see what the impact of this actually is when we pull the images in. So now we see that the images now have a different dimension, so 224 by 224, as opposed to the what we had previously. The other thing that's happened here is that our images have been centered and cropped as well. So if you look carefully at, for example, this second cat image, we can see that the new cropped and centered images a little bit different. So we see that some of the edges have been cut off and then the image has been centered. The other pre-process that we can take is to normalize pixel values, right? For eight bit encoded images, pixel values range from zero to 255. Most CNN models, or most deep learning models in general actually prefer that values that we feed into them are scaled to a smaller range of values. This helps the models converge faster. So to do this, we are going to use a pre-processing layer from Keras.
>
> **[4:45](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preprocessing-image-data-in-python?u=76281980&t=285)** And so we're going to define the layer, we're going to say "layers dot rescaling", and we're going to specify that we want to rescale the values by dividing by 55, so that that way the pixel values now range between zero and one. So we're going to go ahead and define the layer. Then we are going to use a "lambda function" to pass our images to that layer, so that way the pixel values are normalized. Once that's done, we can't quite see the results, but we can actually look at each of the images and get the maximum and minimum pixel values so that way we can verify that the pixel values have indeed being normalized. So let's go ahead and do that. And here we see that before normalization, the minimum pixel value in our dataset is zero, and the maximum was 255. And after normalization, now we have zero and one. So we can see that the pixel values have been normalized using the pre-processing layer that we defined earlier. So in this tutorial, we explored the key pre-processing steps required to prepare image data for using deep learning models. We learned how to load, resize, crop, and normalize images to ensure consistency across input data. So in the next video we're going to look at another step that we typically take before we build models, which is "Image Augmentation". See you on the other side.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (3), [[Neural Networks]] (1)
> **CLI Commands:** cat (13), make (1)
> **Definitions:** is called (3)
> **Env Vars:** vgg (1), cnn (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)
> **Prerequisites:** required to (1)

#### [Augmenting image data in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/augmenting-image-data-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/augmenting-image-data-in-python?u=76281980&t=0)** - [Person] In this video, we're going to look at how we can use [[Python (Programming Language)|Python]] and Keras to augment image data. So "Image Augmentation" is a fundamental technique used in [[Deep Learning]] to artificially expand the diversity of a training dataset without actually collecting more data. Like we did in the previous video, we're going to use the "Kaggle Dogs vs. Cats" dataset to illustrate how to augment image data, so before we begin, let's select a Kernel. All right, so in the previous video, we learned how to use the image dataset from directory utility function to import data, so we're going to use the same approach this time around, we're going to import the "dogs and cats" images that we talked about in that video, so let's go ahead and import our data. Once our import is complete, we are going to define a function called "display images," which we're going to use over and over again just to be able to preview the impact of the augmentations that we are going to perform in this tutorial. So let's go ahead and run the function definition, and then, preview the images that we just imported. So we see all the images that we just brought in, so they have been resized, I think we specified 180 by 180 as the size that we preferred for them to be as they came in, so we're going to keep 'em at that size for now. The first augmentation approach we're going to use is "Geometric Transformations", so these allow us to be able to randomly flip, rotate, [[Zoom]], crop,
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/augmenting-image-data-in-python?u=76281980&t=97)** and then, resize images back to 180 by 180, so we're going to use Keras' pre-processing layer, so just like we did in the previous video, towards the end of that video, we're going to specify a layer for "RandomFlip", a layer for "RandomRotation", a layer for "RandomZoom", and "Crop" and so forth, so we're going to go ahead and specify all these layers for our images, then we are going to use a lambda function to pass every single image through those layers, and then, we're going to preview the impact, the results, so we can see exactly what impact geometric transformations had on our images. So now, we see that our images have now been transformed, so we see some of them are flipped, some of them are zoomed in, some of them are cropped and so forth, so this is one approach that we can use to augment images. The next approach is going to be using "Color and Intensity Transformations", so here, we're going to randomly adjust the images' brightness, the contrast, the saturation, the hue and so forth. So just like we did in the previous example, we're also going to be specifying this time around, we're going to use a "Random Color Jitter" layer, and within that, we specify things like "brightness factor", "contrast factor", "saturation factor", so it randomly tries to adjust these different factors for each of the images, so let's go ahead and run the code to create the layer, and then, just like we did, we're going to go ahead and pass every image to that layer and preview them.
>
> **[3:13](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/augmenting-image-data-in-python?u=76281980&t=193)** So now, we see that some of the images are slightly brighter, some are darker, some are more saturated, all have slight color tints, again, we're trying to adjust the images to build some diversity into them as part of the process of augmenting the data. The next approach we're going to use is "occlusion" and "cutouts", so here, we're going to randomly erase parts of the pixels of an image, so we are going to go ahead and create a layer, "Random Erasing" layer, we're going to define that layer, then we're going to pass our images to the layer and preview them, and here, we see that some adjustments have been made to some of the images, and you see an example here of this dog image here, where some of it has been removed, another one here has been removed, again, we're adding some noise variability to our data to be able to kind of make our models more resilient, because that way, they can now see different versions of the images. Finally, we're going to use a "catch-all" approach where we use a layer, a random augmentation layer, and again, this one here, we don't exactly know what exactly it's going to do, but it allows us to be able to specify how many types of random augmentations we want it to do, so "num ops" is two, and the "factor" is how intense the augmentation should be and so forth, so we're going to go ahead and find that layer, and then, we're going to have it run through all our images, and then, preview to see what impact this actually has. So again, since it's random augmentations,
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/augmenting-image-data-in-python?u=76281980&t=287)** I don't know exactly what you're going to get, you may get similar results or something slightly different, but the whole idea here is that we have the layer augment our data in different random ways, again, to create more diversity in the images, so we see some variations here in the augmentations that are applied to these images. So the thing to keep in mind is this, augmentation should only be applied to training data, not to validation data or to test data, because we want to evaluate a model on real images in order to assess its true performance, so the training data is the only thing that we want to augment. Secondly, the augmentations that we apply to our models should be plausible, it should not alter the image in a way that changes its class, and the example I refer to here is, for example, if an image is flipped for a traffic sign, for example, where it now points left instead of right, that could imply a change to the label of the image, it depends, so again, we have to be very thoughtful about how we augment our images so we don't change the actual class label for the image.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[Deep Learning]] (1), [[Zoom]] (1)
> **Analogies:** just like (3), for example (2)
> **Cross-References:** previous video (3), we talked about (1)
> **CLI Commands:** python (1), make (1), find (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [person] (1)


### 2. CNNs

[↑ Back to Table of Contents](#table-of-contents)

#### [CNNs](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolutional-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolutional-neural-networks?u=76281980&t=0)** - [Instructor] [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]] are a specialized class of deep [[Neural Networks]] designed to handle data that has a grid-like structure, such as "two-dimensional images". In practical terms, a CNN is a "feedforward neural network" that learns to extract features from data in a hierarchical manner. Early layers in a CNN detect simple patterns, such as "edges"," corners", or "colors". As the data progresses through deeper layers, the network learns to recognize increasingly complex structures, including "object parts", and eventually "complete objects". Although CNNs have been successfully applied to other types of data, such as "audio signals" and "texts", they have achieved their greatest success in the field of [[Computer Vision]]. The design of CNNs is loosely inspired by how the human visual system works. A typical CNN for image recognition is organized into three main types of layers, each serving a distinct function. The first are the "Convolutional Layers". These layers scan the input image with small filters to create feature maps that capture various visual patterns. Following the convolutional layers are the "Pooling Layers". Pooling reduces the spatial dimensions of the data, lowering computational requirements, and enhancing the robustness of the extracted features.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolutional-neural-networks?u=76281980&t=95)** Finally, toward the end of the network, we have fully "Connected Layers". These layers take the rich, high-level features extracted by the convolutional and pooling layers and use them to perform the final task, such as assigning a label to an image. We'll go into greater detail about each of these types of layers in the next two videos. Despite the emergence of new architectures, such as "Vision Transformers", CNNs remain a critical tool in the field of Computer Vision. They are embedded in many technologies that are a part of our everyday life. Smartphones use CNNs for face detection and scene recognition. Social media platforms rely on CNNs to automatically identify and tag individuals in photos. Autonomous vehicles depend on CNNs to perceive their environment, identifying roads, pedestrians, and obstacles in real time. CNNs have transformed the field of Computer Vision, and their impact continues to grow as new applications emerge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (3), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Neural Networks]] (1)
> **Analogies:** such as (5)
> **Env Vars:** cnn (3)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Convolutional layers and filters](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolution-layers-and-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolution-layers-and-filters?u=76281980&t=0)** - [Narrator] The first set of layers in the Convolutional Neural Network, that is besides the input layer, are the "Convolution Layers". The general objective of convolution layers is to learn local patterns in the input data. The "Convolution Process" involves sliding a small matrix of numbers, known as a "Filter" or "Feature Detector", across an image, one step at a time. At each position, an element-wise multiplication is performed between the filter and the patch of the image underneath it. The result of the operation is then summed up to produce a single value in an output matrix, known as the "Feature Map". Let's walk through an example that illustrates how this process actually works. Say, we have the following seven by seven gray scale image. If we normalize the pixel values, we'll get a seven by seven matrix of zeros and ones, as shown here. This matrix serves as the input data for the convolution process. Now, let's say we choose to use a three by three filter, as shown here. Applying this filter to the input image, which is a seven by seven matrix, will result in a five by five feature map, or, 25 possible values. This represents the total number of ways we can overlay the filter on the original image. Let's start by overlaying the filter on the top left corner of the image. Multiplying the overlapping numbers element-wise
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolution-layers-and-filters?u=76281980&t=94)** and summing them up gives us three. Next, we shift the filter across the image by one step, or "pixel". This time, the result is four. Note, that during the convolution process, the filter doesn't always have to slide pixel by pixel. This is a hyper parameter we can set. The step size, with which the filter slides, is called the "Stride". A stride of one means the filter moves one pixel at a time, producing highly detailed feature maps. Whereas, a stride of two or more, skips pixels, producing less detailed feature maps. Most CNNs use a stride of one. After shifting the filter across the first row, we shift down to the next row and continue the process. Eventually, we get to the final position at the bottom right corner of the image. At this point, we should have a fully populated feature map. A convolution layer typically has many filters, say 32 or 64, each detecting a different pattern. For example, one filter might act as a vertical edge detector. When it slides over an image, if it detects a vertical edge, then its output will be high. Else, the output will be low. Another filter might focus on detecting corners, or a certain texture in the image, and so on.
>
> **[3:10](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/convolution-layers-and-filters?u=76281980&t=190)** Consequently, each feature map is essentially a condensed version of the original image, where each pixel indicates how strongly a particular pattern is present at that location in the original image. At the start of training, the filter values in the convolutional layer are initialized randomly. However, as training progresses, the network gradually organizes itself, such that filters in the early convolution layers specialize in detecting simple patterns such as edges, corners and textures. While filters in the deeper layers, learn to recognize more complex structures, including object parts, faces and complete objects.

> [!info]- Semantic Content
>
> **Definitions:** known as (2), is a  (2), is called (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [narrator] (1)

#### [Pooling layers](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/pooling-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/pooling-layers?u=76281980&t=0)** - [Instructor] After one or more convolution layers comes a "pooling layer". Pooling reduces the spatial size, width, and height of the feature maps, while retaining the most important information. The most common type of pooling is "Max Pooling". Max pooling involves partitioning a feature map into patches and outputting the maximum value in each patch. This effectively summarizes the presence of a feature in that region. Let's walk through an example that illustrates how max polling actually works. Say, at the end of the convolution process, we have the following feature map as one of several created by the network. Typically, pooling is done over two by two regions with a stride of two, so it usually has the width and height of the feature map. Similar to what happened during the convolution process, we start the pooling process from the top left corner. The maximum value in the selected region of the feature map is four. Next, we shift with a stride of two. The maximum value in this selected region is also four. As we continue shifting, we eventually cover the entire feature map and populate the pooled feature map as shown here. This process is applied in the same manner to each of the output feature maps from the previous convolution layer. Another type of pooling is "Average Pooling".
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/pooling-layers?u=76281980&t=94)** As the name suggests, average pooling involves outputting the average value in each patch. So in this example, average pooling will result in a pooled feature value of 3.25 instead of four. It has the effect of smoothing the feature representation. In practice, however, max pooling tends to work better than average pooling for most Computer Vsion tasks. The benefits of pooling in [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]] are twofold. First, "Pooling reduces computational complexity and the memory requirements of a network" by making representation smaller and more manageable. Secondly, "It provides a form of translation in variance". This means, for example, that after learning a pattern on the lower left of one image, a CNN can recognize that same pattern on the upper right of another image. In essence, pooling helps the network focus on whether a feature is present or not, rather than the exact location of the feature.

> [!info]- Semantic Content
>
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** cnn (1)
> **Versions:** 3.25 (1)
> **Speakers:** - [instructor] (1)

#### [Fully connected layers](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/fully-connected-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/fully-connected-layers?u=76281980&t=0)** - [Instructor] After a sequence of convolution and pulling operations, [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]] typically include one or more fully connected layers that perform the final classification or regression. As we discussed in the [[Deep Learning]] with [[Python (Programming Language)|Python]] foundations course, a fully connected layer is one in which each neuron connects to every neuron in the previous layer, as well as every neuron in the subsequent layer. This dense connectivity allows the network to integrate and interpret the features extracted earlier in the model. Before the outputs from the convolution and pulling layers can be passed to the fully connected layers, they must first be converted into a one dimensional vector. This process is known as "Flattening". For example, flattening the three by three pooled feature map shown on the left results in a one dimensional feature vector with nine elements as shown on the right. The flattened feature vector then serves as the input to the fully connected layers. As we learned in previous videos, the objective of the convolution and pulling layers is to extract or identify the presence of certain features in an image. And the objective of the fully connected layers is to combine these extracted features to determine exactly what the image is. Instead of learning directly from an image, the fully connected layers learn from extracted features.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/fully-connected-layers?u=76281980&t=96)** In the last three videos, we have systematically broken down the core layers that make up a Convolutional Neural Network. In the next video, we will step back and explore why CNNs are particularly effective for [[Computer Vision]] tasks and what advantages their design offers compared to traditional approaches.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Deep Learning]] (1), [[Python (Programming Language)|Python]] (1), [[Computer Vision]] (1)
> **Cross-References:** we discussed (1), earlier in (1), in the last (1), in the next (1)
> **CLI Commands:** python (1), make (1)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Why are CNNs so effective for computer vision?](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/why-are-cnns-so-effective-for-computer-vision?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/why-are-cnns-so-effective-for-computer-vision?u=76281980&t=0)** - [Instructor] Now that we know how [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]] work, it is important to understand why they are preferred over traditional deep [[Neural Networks]] for image data and [[Computer Vision]]. Traditional [[Deep Learning]] models are fully connected, meaning every neuron in one layer connects to every neuron in the next. For image data, this becomes impractical very quickly. Consider a single 256 by 256 pixel RGB image. This image has 196,608 input values, 256 pixels times 256 pixels times three channels. Feeding this image, as is, into a fully connected layer means that a single neuron in the first hidden layer would need 196,608 weights, and that is only for one neuron. When you scale this to an entire layer of neurons, the number of parameters increases geometrically, and if the image were larger, for example, 1024 pixels by 1024 pixels, we would need 9,437,184 weights in the first layer. Such a model would not only be prone to overfitting, it would also be computationally inefficient. CNNs address these challenges through two key ideas, local connectivity and weight sharing.
>
> **[1:35](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/why-are-cnns-so-effective-for-computer-vision?u=76281980&t=95)** Instead of connecting every neuron to every input pixel, each neuron is connected only to a small localized region of the input known as its "Receptive Field". This takes advantage of the fact that nearby pixels are often highly correlated. By focusing on local patterns, CNNs are able to learn spatial hierarchies or features, progressing from simple edges to more complex shapes. CNNs also employ "weight sharing". This means that the same filter or set of weights is used across different regions of the image. For example, an edge detector that is effective in the top left corner of an image is likely just as useful in the bottom right. As we learned earlier in the course. This property is known as "Translation Invariance", and it drastically reduces the number of parameters needed in a network. Now, let's reconsider the earlier examples of a 256 by 256 pixel RGB image. As we discussed previously, a traditional deep neural network with three hidden nodes in the first layer would require 589,824 weights in the first hidden layer to learn a single pattern in the image. However, if we use a Convolutional Neural Network with a five-by-five convolution filter
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/why-are-cnns-so-effective-for-computer-vision?u=76281980&t=188)** to learn the same pattern, the convolution operation would initially yield a feature map of size 252 by 252. Now, using a two-by-two window with a stride of two for pooling reduces the spatial dimension of the feature map even further to 126 by 126. This means that the input of the first fully connected layer would be a vector of size 15,876. Therefore, the number of weights needed in the first hidden layer to learn a single pattern in the image would be 47,628, significantly fewer than the 589,824 weights needed for a traditional deep learning model. By using local connectivity and weight sharing to dramatically reduce the number of parameters, CNNs are much more effective at learning complex patterns in image data while managing computational demand.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Neural Networks]] (1), [[Computer Vision]] (1)
> **Definitions:** known as (2), means that (2)
> **Cross-References:** in the next (1), earlier in (1), we discussed (1)
> **Env Vars:** rgb (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 3. Image Classification with CNNs

[↑ Back to Table of Contents](#table-of-contents)

#### [Preparing to build a CNN in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preparing-to-build-a-convolutional-neural-network-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preparing-to-build-a-convolutional-neural-network-in-python?u=76281980&t=0)** - [Instructor] In the next three videos, we are going to build a Convolutional Neural Network in [[Python (Programming Language)|Python]] using Keras. This video is the first of the three, and this video, our focus is going to be on pre-processing our data in preparation for modeling. For our example, we're going to be using the Cipher 10 dataset, which has 10 distinct categories. Before we begin, let's select a Kernel. So if you are not quite comfortable with [[Deep Learning]] and want to learn a little bit more about deep learning, I suggest that you review my [[LinkedIn]] Learning course called "Deep Learning with Python". In that course, I explain some of the foundational principles that underlie deep learning, including how [[Neural Networks]] work, how Keras intensive flow work. And we actually in that course go through the process of building a very basic deep neural network using Keras intensive flow. So in this example, we thus begin by importing the data that we are going to work with. As I said earlier, we're going to be using the Cipher 10 dataset, which is a well-known benchmark dataset used to evaluate [[Computer Vision]] models. And so this dataset has 50,000 images for training and 10,000 images for testing. And the images are classified into 10 distinct groups for airplane, automobile, bird, cat, deer, dog, frog, horse, ship, and truck. So let's go ahead and import the data. Our import process is complete. Now let's preview the first 10 images in the dataset
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/preparing-to-build-a-convolutional-neural-network-in-python?u=76281980&t=94)** so we can get a sense of what they look like. So there we see it. So we have a few low resolution images. So we have one of a frog, a truck, another truck, a deer, an automobile, two of them, a bird, a horse, ship, and a cat. So the next thing that we do is we want to normalize our pixel values. So we talked about this in a previous video. The value of this is that normalizing our pixel values to a smaller range helps deep learning models converge faster. So here we're going to divide every pixel by 255 so that a way our pixel values now are in a smaller range of zero to one. So let's go ahead and do that for both our training and our test images. And the next thing we want to do is we want to one hot encode our labels. So we're going to one not encode our labels so that they go from zero to nine, so that we now have a vector that represents each label value. So let's go ahead and do that. All right, so our pre-processing for this example is done. In the next video, we're going to now begin the process of actually defining the layers of the model. See you over there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (5), [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1), [[Neural Networks]] (1), [[Computer Vision]] (1)
> **CLI Commands:** python (2), cat (2)
> **Cross-References:** in the next (2), we talked about (1), previous video (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Defining a CNN in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/defining-a-convolutional-neural-network-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/defining-a-convolutional-neural-network-in-python?u=76281980&t=0)** - [Instructor] This video is a second in a sequence of three that walks us through the process of building a Convolutional Neural Network in [[Python (Programming Language)|Python]] using Keras. In the previous video, we went through the process of importing and pre-process our data. So if you haven't done so, I suggest that you rerun the code up to the first four code cells in preparation for the [[Representational State Transfer (REST)|rest]] of what we're going to talk about in this video. So in this video, our focus is going to be on defining the model architecture. The first thing we do is create a "Sequential Model". This is a linear stack of layers that simplifies the construction of [[Neural Networks]]. So we specify the model name and we say "Keras.sequential" to initialize the process. Then we define the input shape of our data. So decipher 10 image dataset has images that are 32 pixels by 32 pixels in size with three color channels. Notice that this is a channel's last definition because we're using Keras. So we specify the input shape, 32, 32, three. So the width, the height, and the number of channels. So let's go ahead and specify our input image size. Then the next thing we do is specify a new layer for the first convolution. So here we're going to specify 32 filters. And so this means that we want to be able to try and see if we can identify 32 different patterns in the data. So we're going to create 32 feature maps, and for each of those filters, we're going to use a Kernel size
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/defining-a-convolutional-neural-network-in-python?u=76281980&t=93)** or filter size of three by three. And we're going to use a "ReLU" activation function. So we're going to go ahead and add this layer. Then the next layer we add is a "Batch Normalization" layer. And the reason we do this is to speed up the training process and to help the model converge a little bit faster. So let's go ahead and add a layer for batch normalization. Then we have a "Max Pooling" layer. And this time around, we use a window size of two by two. And then finally, in this sequence of layers, we add a dropout layer. And the reason for this is we want to minimize overfitting. So we learned about "batch normalization layers" and "dropout layers" in the [[Deep Learning]], optimizing deep learning models course. So if you want to learn more about that, check out that course to learn more about batch normalization and dropout. So let's go ahead and add the dropout layer. So now we go ahead and repeat these steps again. So this time around, we're going to add another convolution layer. This time around with 64 filters, batch normalization, max pulling, and dropout. We do this again a third time, another convolution. This time around with 128 filters, batch normalization, max pulling, and dropout. Once we're done with the convolution and pulling sequence of layers, now we get to the point where we want to flatten our feature maps. So as we learned in previous videos, flattening allows us to be able to now plug in our inputs to a dense layer.
>
> **[3:10](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/defining-a-convolutional-neural-network-in-python?u=76281980&t=190)** So that's the next thing we define here is a dense layer that has 512 input neurons. So this is the first hidden layer, and we're also going to use a ReLU activation function for this. Then we go through the process of batch normalization and drop out like we saw earlier. And then we specify the output layer. And because we have 10 different labels that we're trying to predict that have been one hot encoded, we specify 10 different neurons using the soft max activation function for this output layer. So that's pretty much how we define the different layers of our model. So in this example, we went through the process of adding layers one by one. We could also write this in one continuous chunk of code, which is what I've done here in this example. So you can see us doing the exact same thing we just did above, but this time around, we just have one continuous stream with a list that specifies each of the layers. So let's go ahead and run that as well and that is it. So in this video, we've gone through the process of defining each of the layers that make up our Convolution in Neural Network. In the next video, we're going to go ahead and actually train the model and evaluate the performance of the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Python (Programming Language)|Python]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Neural Networks]] (1)
> **Definitions:** is a  (4), means that (1)
> **CLI Commands:** python (1), make (1)
> **Cross-References:** previous video (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Training a CNN in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/training-a-convolutional-neural-network-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/training-a-convolutional-neural-network-in-python?u=76281980&t=0)** - [Instructor] This video is the third in a sequence of three videos where we walk through the process of building a Convolutional Neural Network in [[Python (Programming Language)|Python]] using Keras. If you haven't done so already, I suggest that you watch the previous two videos to understand how to pre-process or prepare your data and define the CNN model before we get to the point where we build the model itself. So, because of how much time it takes to actually train the model, I've pre-run the code for this tutorial. So in the previous videos, as I mentioned, we went through the process of importing and pre-processing the data. Then, in the last video, we defined the model architecture layer by layer, and now in this video, which is the next step, is we're going to compile and train the model. To compile the model we have to specify a few things. The first is the "Optimizer", so we're going to use the "Adam Optimizer", and we're also going to specify a "Loss Function". Because our data is one-hot encoded and it's a multi-class problem, we specify the categorical "cross entropy" as the loss function, and we specify accuracy as the "metric of choice". So once we do that, the next thing we need to do is to now call the "Fit Method" for a model which actually goes through the process of training the model. So the "fit method" takes a few arguments. The first is to train the images and the labels, and we specify the number of "epochs", the number of iterations that we want it to go through
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/training-a-convolutional-neural-network-in-python?u=76281980&t=93)** as it trains and optimizes, and then we specify the batch size, how many images at a time should it import in to the process as it adjusts the weight stream backpropagation, and we specify a validation split, how much of the training data should be held out to be used to validate performance as it runs through the epochs? And so as you can see here, the results are done, the model is on training, so we went through 20 epochs, and we can see the results here as we plot the training accuracy and validation accuracy. So the reason why we do this is because it's very important to understand how the model is learning along the way. So one of the things that we see here is that the validation accuracy, which is the orange line, tacks closely with the blue line, which is the training accuracy. We see some jitter as it goes back and forth down, and, again, a lot of that happens because of the fact that we're using different datasets and we're doing things like batch normalization and dropout along the way which we talked about in the previous video. But the good thing that we're seeing here is that these two lines are pretty close to each other, which suggests that our model is not overfitted. If we saw divergence between those two lines, then it could suggest some problem during training, like overfitting, for example, and we look at the loss metrics as well to see what happens across epochs, and we see a similar pattern here where the orange line is tacking pretty closely with the blue line, which is a good thing,
>
> **[3:08](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/training-a-convolutional-neural-network-in-python?u=76281980&t=188)** which means our model's validation performance is tacking pretty closely with the actual performance of the training data itself, which again suggests that our model is not overfitting. So, finally, we want to see how this model we just trained is going to perform against previously unseen images, and this is where we now pass the test data, images and labels, to the evaluate method of our model. And here, once we do that, we kind of get the accuracy, and so we see that our model was able to correctly predict the labels of 74.19% of the images in the test data. So that's actually pretty good performance for a model that we just created very quickly, we didn't do much of anything to it, we just imported data, prepared it, defined the layers, and we ran the training process. So, a very simple process. In the last three videos, we walked through this process of building a very simple Convolutional Neural Network using Keras intensive flow, and we use the CIFAR-10 dataset to illustrate this process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Cross-References:** in the last (2), we talked about (1), previous video (1)
> **Env Vars:** cnn (1), cifar (1)
> **CLI Commands:** python (1)
> **Versions:** 74.19 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. CNN Architectures

[↑ Back to Table of Contents](#table-of-contents)

#### [VGGNet](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/vggnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/vggnet?u=76281980&t=0)** - [Instructor] "VGGNet" is a widely recognized Convolutional Neural Network architecture introduced in 2014 by Karen Simonyan and Andrew Zisserman at the University of Oxford's Visual Geometry Group. It gained prominence for its outstanding performance in the 2014 ImageNet Large Scale Visual Recognition Challenge where it placed second in the "Image Classification Category". What set VGGNet apart was a straightforward, yet powerful design. Instead of using large or varied filters, the model used stacks of small three by three convolutional filters. This approach allowed the network to become deeper, while maintaining manageable complexity leading to rich hierarchical feature representations and strong performance across various vision tasks. One of the primary strengths of VGGNet lies in its simplicity and uniform structure. The model is built almost entirely from repeated blocks of three by three convolutional layers, which ReLU activation followed occasionally by max pulling layers. This consistent design makes the architecture easy to understand, implement, and adapt. As a result, VGG became an ideal starting point for those learning about CNNs and a dependable baseline for research. Its deep architecture, reaching up to 19 layers in the VGG-19 variant
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/vggnet?u=76281980&t=96)** allows there network to learn highly expressive features. This depth was instrumental in demonstrating that deeper models could significantly improve accuracy in image recognition tasks. VGG also became one of the earliest architectures widely used for transfer learning. Pre-trained models such as "VGG-16" trained on ImageNet were often used as feature extractors for tasks like "object detection" and "segmentation" because their early layers captured general purpose visual features such as "edges" and "textures". VGGNet also had a conceptual impact on [[Deep Learning]] model design. It popularized the idea that multiple smaller filters could replace larger ones influencing future architectures like "ResNet" and "Inception", which built on this principle to create more efficient networks. Despite its advantages, VGGNet has several limitations. It is a large model with roughly 138 million parameters, making it memory intensive and slow to train or deploy. The fully connected layers, in particular, contribute to significant redundancy and computational inefficiency. VGG-16, for instance, requires over 500 megabytes just to store its weights. The architecture pushed the limits of what 2014 error GPUs could handle, requiring multiple GPUs
>
> **[3:11](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/vggnet?u=76281980&t=191)** and several weeks to train on ImageNet. During inference, the high parameter count leads to slow performance, which makes VGG unsuitable for real time or resource constrained applications. Another drawback is that VGGNet lacks built-in normalization mechanisms such as "batch normalization", which became standard in later architectures. Without it, training VGG requires more careful weight initialization and smaller learning rates to achieve stable convergence. Today, VGGNet is rarely the first choice for new applications due to its inefficiency. However, it still serves a valuable role in certain contexts. Its simplicity makes it a useful tool for learning and experimentation. Many educators and researchers still use it to teach CNN principles or to benchmark against more modern models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1)
> **Env Vars:** vgg (7), cnn (1)
> **Analogies:** such as (3), for instance (1)
> **Definitions:** is a  (2)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Inception networks](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/inception-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/inception-networks?u=76281980&t=0)** - [Instructor] Inception Networks, also referred to as "GoogLeNet", were introduced by researchers at [[Google]] in 2014 with the aim of building a deep Convolutional Neural Network that achieved high accuracy while maintaining low computational costs. Unlike traditional CNNs that stack layers sequentially, Inception introduced a novel multi-path architecture. Each Inception block processes the input through multiple parallel paths using a one by one, three by three, and five by five convolutions, as well as max pooling. The results from each path are then concatenated along the channel dimension. This structure allows the network to analyze features at multiple spatial scales simultaneously, making it more efficient and effective at learning image representations. One of the key advantages of Inception Networks is their ability to achieve high accuracy with fewer parameters. For instance, GoogLeNets use approximately 4 million parameters to reach a top five error rate of 6.7% on ImageNet, outperforming much larger models like VGG16, which had 138 million parameters and a 7.3% error rate. This efficiency leads to faster inference times
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/inception-networks?u=76281980&t=94)** and reduces the risk of overfitting. Inception Networks also [[Microsoft Excel|excel]] at capturing features across different spatial scales. Smaller filters pick up fine details, while larger ones and pooling operations focus on more abstract patterns. This multi-scale approach is especially valuable in real-world images, where object sizes can vary significantly. The design is also flexible. Developers can adjust a number of filters in each path to balance performance and computational costs. Another important innovation introduced by Inception was a widespread use of one by one convolutions. These layers often used as "bottlenecks" help reduce the number of computations by decreasing the dimensionality of feature maps before more expensive operations. This concept influenced later architectures such as "ResNet" and "MobileNet", where "bottlenecks" and "point-wise" convolutions are standard. Despite its strengths, the "Inception architecture" has several limitations, As design is more complex than sequential models, making it harder to understand, implement, and modify. Each module or Inception block contains multiple branches with their own hyper parameters, which can complicate tuning and reproduction. The original GoogLeNet paper even had to provide detailed specifications in an appendix
>
> **[3:09](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/inception-networks?u=76281980&t=189)** to help others implement it correctly. Additionally, although Inception modules appear parallel in theory, actual [[Hardware]] utilization is not always optimal. Most GPUs process convolutional layers in parallel across data, not across branches. This leads to inefficiencies and increased overhead when executing many small operations instead of a few large ones. The architecture's fragmented design, which is many small operations across different branches, also contributes to memory access overhead. As models grow in depth and complexity, this overhead becomes more significant. Although Inception Networks are no longer the default choice for new applications, their design illustrates how [[Convolutional Neural Networks (CNN)|convolutional neural networks]] can be made much deeper and wider without overwhelming computational demands. Understanding them provides a foundation for thinking about model architecture and how to balance accuracy, efficiency, and complexity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Microsoft Excel|Excel]] (1), [[Hardware]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **Versions:** 6.7 (1), 7.3 (1)
> **Analogies:** for instance (1), such as (1)
> **Env Vars:** vgg16 (1)
> **Speakers:** - [instructor] (1)

#### [ResNet](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/resnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/resnet?u=76281980&t=0)** - [Instructor] ResNet, short for "Residual Network", is a landmark Convolutional Neural Network architecture introduced by Kaiming He and his team at [[Microsoft]] Research in 2015. It significantly advanced the field of [[Deep Learning]] by showing that extremely deep networks could be trained effectively without suffering from the performance degradation that previously came with added depth. Prior to ResNet, adding more layers to a neural network often made the model perform worse rather than better. This was largely due to the vanishing gradient problem, where gradient signals would weaken as they pass backward through many layers, making training difficult. ResNet solved this issue by introducing "skip connections", also known as "Residual Connections". These connections bypass one or more layers by adding the input directly to the output of a block of layers. This simple idea allows gradient signals to flow more smoothly through the network, enabling the train of very deep models with 50, 101, or even 152 layers. Thanks to this innovation, ResNet won first place in the 2015 ImageNet Large Scale Visual Recognition Challenge and set new performance standards in image classification. One of the major benefits of ResNet is its ability to support
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/resnet?u=76281980&t=94)** very deep architectures while maintaining strong accuracy. Deeper networks tend to learn more complex patterns, and ResNet made it practical to explore this depth. Despite having many layers, ResNet is surprisingly parameter efficient. A ResNet-50 has about 25 million parameters, and a ResNet-152 has around 60 million, which is significantly less than VGG-19's 144 million. This is partly due to its use of global average pooling and a bottleneck architecture that keeps the parameter count in check. The architecture also generalizes well across tasks. ResNet models were not only successful in image classification, but also played key roles in winning "Object Detection and Segmentation Challenges". Pre-trained ResNets, especially "ResNet-50", became the default backbone for many [[Computer Vision]] models due to their strong feature extraction capabilities. Beyond image classification, the residual design has proven to be highly flexible and influential. It has inspired many variants, like "ResNext" and "WideResNet", and has been adapted for use in other domains, including [[Speech Recognition]] and [[Natural Language Processing (NLP)|natural language processing]]. Modern architectures such as the
>
> **[3:06](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/resnet?u=76281980&t=186)** "transformer" also incorporate residual connections as a fundamental design principle. However, ResNet is not without its drawbacks. The introduction of skip connections, while powerful, adds some complexity to model implementation and understanding. Developers need to carefully manage tensor shapes to ensure the skip connections work properly. Although deeper ResNets generally improve performance, the returns begin to diminish after a certain point. For instance, while ResNet-152 performs better than ResNet-50, the improvement is not proportional to the increase in depth. Training time is another consideration. Deeper models, even if they learn effectively, still require more time and memory. A ResNet-152 will naturally take longer to train than a ResNet-50. Additionally, deep ResNets consume more GPU memory during training due to the need to store intermediate outputs for back propagation. Overall, ResNet remains one of the most important innovations in deep learning. Its residual connections have become a foundational element in modern neural network design, enabling deep models to be trained reliably and efficiently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Microsoft]] (1), [[Computer Vision]] (1), [[Speech Recognition]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** short for (1), is a  (1), known as (1)
> **Env Vars:** vgg (1), gpu (1)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [MobileNet](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/mobilenet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/mobilenet?u=76281980&t=0)** - [Instructor] MobileNet, introduced by [[Google]] in 2017, is a lightweight Convolutional Neural Network architecture, designed specifically for mobile and embedded devices where processing power and memory are limited. MobileNet introduced the idea of "depth-wise separable convolutions", an efficient alternative to standard convolutional operations. Rather than applying a single convolutional filter across all input channels, MobileNet first applies a depth-wise convolution that is one filter per channel, followed by a point-wise convolution that combines channels. This significantly reduces the number of operations and model size while preserving predictive performance. One of the standout benefits of MobileNet is its "computational efficiency". A depth-wise separable convolution requires roughly eight to nine times fewer computations than a standard convolution of the same size, which makes MobileNet capable of running in real time on CPUs. For instance, it can perform over 30 frames per second on mobile devices. This is something that would be impractical with larger models unless specialized [[Hardware]] is used. In addition to its speed, MobileNet models are compact, often just a few megabytes in size. The original MobileNet version one, for example,
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/mobilenet?u=76281980&t=93)** requires only about 16 megabytes to store its weights compared to 100 megabytes for ResNet-50 or over 500 megabytes for VGG-16. This small memory footprint makes it ideal for deployment on devices with limited storage or bandwidth. Another strength of MobileNet is its "tunability". The architecture includes width and resolution multipliers that lets users scale the model up or down depending on the available computational budget. This flexibility is a practical engineering innovation, allowing developers to prioritize speed, size, or accuracy based on the needs of their application. MobileNet is also suitable for transfer learning. Its learned features can be reused for tasks like "object detection". For instance, the popular "SSD Lite", a lightweight detection model well-suited for mobile applications, was created by combining MobileNet with a "single-shot detector" or "SSD". The MobileNet architecture also has its limitations. The compactness of the architecture comes with a cost and representational capacity. With fewer parameters and a constrained structure, it may struggle to learn highly complex or fine-grained features. This leads to the second limitation. In terms of absolute accuracy, MobileNet typically lags about five
>
> **[3:07](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/mobilenet?u=76281980&t=187)** to six percentage points behind heavier models like ResNet-50 or ResNet-101. If maximum accuracy is required and computational resources are available, a larger model will be preferred over MobileNet. Training MobileNet also presents some minor challenges. Depth-wise convolutions produce feature maps differently from standard convolutions. As a result, practitioners often have to spend considerable time tweaking training schedules or other hyperparameters to optimize the performance of MobileNet. The introduction of MobileNet opened the door to practical [[Deep Learning]] on mobile devices. Understanding how it uses depth-wise separable convolutions, provides insight into the design of many modern efficient architectures. Today, it remains a foundational model for [[Real-Time]] on-device AI applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Hardware]] (1), [[Deep Learning]] (1), [[Real-Time]] (1)
> **Env Vars:** ssd (2), vgg (1)
> **Analogies:** for instance (2), for example (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [EfficientNet](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/efficientnet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/efficientnet?u=76281980&t=0)** - [Instructor] Efficient Net is a family of [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]] developed by Mingxing Tan and Quoc V. Le at [[Google]] AI in 2019. It was designed to address a common challenge in [[Deep Learning]], "How to scale Convolutional Neural Networks efficiently while maintaining high performance". Traditionally making a CNN more accurate meant making it "deeper", that is giving it more layers, "wider", which means giving it more channels, or using higher resolution images. But doing all three independently often led to excessive computation and diminishing returns. To solve this, EfficientNet introduced a technique called "Compound Scaling". Rather than scaling model dimensions arbitrarily, the architecture begins with a small, efficient baseline model called "EfficientNet B-0". From there, it scales uniformly across depth, width, and resolution using a set of fixed coefficients. This principled approach balances the different aspects of the model and results in more efficient scaling. Building on the baseline, the authors of EfficientNet, created a range of models, EfficientNet B1 through EfficientNet B7, each representing a larger and more powerful version of the original. This scalable family allows developers to choose a model
>
> **[1:37](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/efficientnet?u=76281980&t=97)** that fits their specific computational constraints or performance needs. "EfficientNet-Lite" was also introduced as a variant optimized for mobile and edge devices. One of the key strengths of EfficientNet is its exceptional accuracy relative to its size. Compared to older architectures, it achieves better performance with fewer parameters and lower computational costs. For example, EfficientNet B4 has around 19 million parameters and achieves approximately 82.6% top-one accuracy on ImageNet outperforming larger models like ResNet 50. The entire B0 to B7 family provides flexibility and convenience. Smaller models like "B0" and "B1" are well suited for resource-limited environments. While larger models like "B6" and "B7" are ideal for tasks requiring maximum accuracy and can be run on high-end [[Hardware]]. Since all the models share the same architectural foundation, comparing results and selecting the right version is easy to do. The compound scaling method introduced by EfficientNet has influenced other areas of machine learning. The principle of "balance scaling" is now used in models outside of CNNs, including vision transformers. It also provides a useful intuition for model development.
>
> **[3:12](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/efficientnet?u=76281980&t=192)** Increasing capacity should be done holistically across multiple dimensions. Another major strength of EfficientNet is its broad adoption and strong community support. Since its release, the model has been open sourced and integrated into popular deep-learning frameworks such as "[[TensorFlow]]", [[PyTorch]]", and "CARES". This widespread implementation has made EfficientNet highly accessible to researchers and practitioners alike. The EfficientNet architecture does come with some limitations. Because its base model was developed using neuro architecture search, it may include unconventional layer combinations or scaling ratios that are not immediately intuitive. As a result, making custom modifications to the architecture can be more challenging compared to manually designed models like ResNet, which follow a more straightforward and easily adjustable structure. Trained in larger EfficientNet models, especially B5 through B7, can also be challenging. These models were originally trained using "TPU pods" with large input images and heavy regularization. Reproducing that level of performance without similar resources requires careful tuning and is often impractical. As a result, most users rely on pre-trained weights for these models.
>
> **[4:47](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/efficientnet?u=76281980&t=287)** While EfficientNet was state-of-the-art when introduced, newer models have since surpassed it in terms of top accuracy. Architectures such as "EfficientNet V2", "NFNets" and "Vision Transformers" have raised the bar achieving over 90% accuracy on ImageNet. Still, those models often require far more parameters and computational resources. EfficientNet remains a competitive choice for tasks where efficiency matters. Overall, EfficientNet offers a compelling balance of performance and efficiency. It illustrates how combining principle scaling methods with automated architecture search can lead to powerful yet practical models. Its influence continues to shape the development of efficient [[Neural Networks]] in both research and production settings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (2), [[Google]] (1), [[Deep Learning]] (1), [[Hardware]] (1), [[TensorFlow]] (1)
> **Env Vars:** cnn (1), cares (1), tpu (1)
> **Analogies:** such as (2), for example (1)
> **Versions:** 82.6 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Common Computer Vision Tasks

[↑ Back to Table of Contents](#table-of-contents)

#### [What is image classification?](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-image-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-image-classification?u=76281980&t=0)** - [Lecturer] Image Classification is a task of assigning an entire image a label from a predefined set of categories. For example, given a photo, an image classification model could classify it as either that of a fish, a dog, a cat, or a bird, depending on which label from its predefined list best matches the image content. Image classification is useful when you only need to know what's labeled to assign to an entire image rather than where objects are located on an image or what their exact shape is. Along with the predictive class label, the output of an image classifier usually includes a confidence score that reflects the model's certainty in its prediction. Some real-world examples of image classification include classifying medical images such as "Labeling X-rays as healthy or diseased", "Identifying plant species from photographs of leaves", and "Recognizing handwritten digits in postal codes or [[Forms]]". [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]] are especially well-suited for image classification, because they automatically learn hierarchical features from simple patterns like "edges" and "textures" to more complex representations, such as "shapes" or "object parts", all of which they use to make a final prediction. To evaluate performance in image classification, "accuracy" is one of the most commonly-used metrics. For example, if a model is able
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-image-classification?u=76281980&t=96)** to correctly label 960 out of 1200 images, it is said to have an accuracy of 80%. While simple to compute, accuracy can be misleading in imbalanced data sets, so in some cases, additional metrics such as "precision", "recall", or "F1 score" may be considered. For a detailed discussion of the precision recall and F1 score metrics, refer back to the "[[Deep Learning]] with [[Python (Programming Language)|Python]]: Foundations course". Image classification is foundational to many [[Computer Vision]] systems. It also serves as a building block for more advanced tasks, such as "object detection" and "image segmentation", both of which we'll get to later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1), [[Deep Learning]] (1), [[Python (Programming Language)|Python]] (1), [[Computer Vision]] (1)
> **Analogies:** such as (4), for example (2)
> **CLI Commands:** cat (1), make (1), python (1)
> **Cross-References:** later in (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)

#### [Using a pretrained model for image classification in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-classification-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-classification-in-python?u=76281980&t=0)** - [Presenter] In this tutorial, you'll learn how to use a pre-trained "YOLO" model for image classification. Before we begin, let's select our Kernel. By the end of this tutorial, you'll know how to load and prepare a YOLO image classification model for inference. You also know how to run inference and interpret "raw" and "formatted" outputs, including "top one" and "top five" predictions. The first thing we do is import the YOLO class and load the pre-trained classification model. Once that's complete, we now specify the path or the image we want to classify. However, before we actually classify this image, let's take a look at it just to confirm that the image that we specified is the image that we actually do want to classify. So that looks right. Now we get into the classification process. To classify this image, we pass the path of the image to the YOLO model we loaded previously. So the output is a summary line showing the "Full Path", the "Resize Dimensions", the "Top class predictions with their confidence scores", and "Timing information for pre-processing inference" and "Post-processing". The output is not very user-friendly, so we're going to reformat it in a way that actually makes it easier for us to read. So let's go ahead and run this piece of code here
>
> **[1:33](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-classification-in-python?u=76281980&t=93)** to restructure the output from our model. So based on this output, we can see that the top prediction for this image is "Egyptian cat" as the label with a confidence score of 42.72%. We also see additional predictions, so it also thinks that this could be lynx with a 16.36% prediction, a tabby, a tiger cat, and a Persian cat. Obviously, the top prediction is Egyptian cat. So finally, we want to now overlay this label with the original image. So let's go ahead and run this. So now we can see the original image along with the top one prediction of our YOLO model. In this tutorial, we learned how to use a pre-trained YOLO model to perform image classification in [[Python (Programming Language)|Python]]. It's very straightforward. As next steps you can try classifying a different image, automating the pipeline for multiple images, saving predictions to a CSV file, or integrating this code into a web service or mobile application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1)
> **Env Vars:** yolo (6), csv (1)
> **CLI Commands:** cat (4), python (1)
> **Versions:** 42.72 (1), 16.36 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [What is object detection?](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-object-detection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-object-detection?u=76281980&t=0)** - [Narrator] Object detection is the task of identifying and locating multiple objects within an image, by predicting both their class labels and bounding boxes. Unlike image classification, which assigns a single label to an entire image, object detection provides spatial information about where each object appears in an image. For example, given an image containing a dog and a cat, an object detection model would label and draw a bounding box around the dog and another around the cat. Each class label would also include a confidence score. Well-known, real world examples of object detection include "Detecting faces in smartphone cameras for auto focus and facial recognition", "Identifying pedestrians and vehicles in traffic surveillance footage", and "Monitoring wildlife by detecting animals in images or videos, captured by camera traps". When it comes to up object detection with CNNs, there are two main families of approaches. The first involves a use of what are known as "Two-stage Detectors". These models first generates region proposals, which is the first stage. Then they classify each region while refining the bounding boxes, the second stage. Classic two-stage models include the region based Convolutional Neural Network series, which "Fast R-CNN" and "Faster R-CNN" fall under. The second family of object detection approaches
>
> **[1:39](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-object-detection?u=76281980&t=99)** are the "One-stage Detectors". These models process the input image by skipping the proposal generation and directly detecting objects in a single pass through the image. The you only look once, or YOLO, and single shot multi box detector SSD models are primary examples of one-stage detectors. Two-stage approach allows for high accuracy as a second stage refines results, but it's generally slower because of the two step process. One-stage detectors are typically faster and more suitable for [[Real-Time]] applications, but they may sacrifice some accuracy, compared to two-stage methods. A common performance metric for object detection is the "Mean Average Precision", or MAP, which summarizes the precision recall performance for detected objects across all classes. However, to compute MAP, we need to first determine what constitutes a correct or an incorrect prediction. This is done using another metric, known as "Intersection Over Union", IoU. IoU measures how closely a predicted box matches the actual object. Intersection refers to the overlapping area between the predicted bounding box and the ground truth grounding box. "Union" is the total area covered by both the predicted and ground truth boxes combined. Models typically set in an acceptable IoU threshold
>
> **[3:14](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-object-detection?u=76281980&t=194)** of say 0.5. This means that a prediction is considered correct only if it's IoU is at or above 0.5. Object detection is a core task in [[Computer Vision]] that builds directly on image classification by adding the ability to locate objects within an image. It also serves as a foundation for even more advanced tasks, such as "Image Segmentation", which we will explore later in the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Computer Vision]] (1)
> **Env Vars:** cnn (2), map (2), yolo (1), ssd (1)
> **Definitions:** known as (1), refers to (1), means that (1), is a  (1)
> **CLI Commands:** cat (2)
> **Versions:** 0.5 (2)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** later in (1)
> **Speakers:** - [narrator] (1)

#### [Using a pretrained model for object detection in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-object-detection-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-object-detection-in-python?u=76281980&t=0)** - [Instructor] In this tutorial, we're going to use a pre-trained YOLO model for object detection. Before we begin, let's select our Kernel. By the end of this tutorial, you'll know how to load and prepare a YOLO object detection model for inference. You also know how to run inference and inspect raw detection outputs. Finally, you'll know how to draw and display bounding boxes with class labels and confidence scores. The first thing we do is import the YOLO class from the "ultra lytics package". This allows us to load a pre-trained object detection model. So let's go ahead and run that. So the next thing we now do is specify the path to the image that we want to process. So let's go ahead and create a variable called image path that has the path to the image we want to process. So before we actually process the image, let's preview it. This is something we do just to verify that the path and the image that we've specified is the one that we intend to process. Let's run this here to preview the image. So that is the image that we are trying to process. So we see that it's that of a cat and a dog. And so we're hoping to get those labels when we actually run the object detection process. So the next step is to actually do that. We're going to pass the path of the image to the model we just defined earlier
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-object-detection-in-python?u=76281980&t=94)** and see what exactly we get back from it. So the output shows how many objects of each class were found, along with timing for each stage of the process. Right, just like we saw during the image classification example, this output is not that user-friendly. So what we're going to do is we are going to restructure the output. We're going to parse it using a loop, and then we are going to display the objects that were identified during our process. So let's go ahead and run our code here to do that. And so now we actually see that the model detected a dog with 90.28% confidence, and it gives us the exact coordinates of the bounding box around the dog. The model also detected a cat with 86.19% confidence, and it also provides us with a bounding box coordinates. And so the next thing we do here is now we overlay these bounding boxes over the original image. So we're going to use the plot method from YOLO to do this. And as part of our process, we are going to convert our output from BGR to RGB, because when it processes the image, it converts it into BGR. But for us to be able to preview it, we want to convert it back into RGB. So let's go ahead and run that. So now we see our original image with bounding boxes around the cat and a bounding box around the dog. So this is very easy and very straightforward.
>
> **[3:09](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-object-detection-in-python?u=76281980&t=189)** In this tutorial, we learned how to use a pre-trained YOLO detection model to perform object detection. So we saw how fast it was and how efficient and how easy it was to do. Some potential next steps for you include pre-processing or processing multiple images in a directory, running detection on video or webcam streams, saving the annotated frames to disk or [[Fine Tuning]] the model that we just use on a specific dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (1)
> **Env Vars:** yolo (5), bgr (2), rgb (2)
> **CLI Commands:** cat (3)
> **Versions:** 90.28 (1), 86.19 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [What is image segmentation?](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-image-segmentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-image-segmentation?u=76281980&t=0)** - [Instructor] Image segmentation is a process of partitioning an image into multiple regions or segments where each region corresponds to a specific object or part of an object. Unlike object detection, which draws bounding boxes around objects, segmentation provides pixel level classification, allowing for more precise understanding of object shapes and boundaries. For example, given an image of a cat and a dog, image segmentation can tell us which exact pixels belong to the dog, which belong to the cat, and which belong to the background. There are two common approaches to image segmentation. The first is "Semantic Segmentation". In semantic segmentation, we classify each pixel into a category without differentiating individual object instances. If there are two cats in an image for instance, semantic segmentation maps the pixels to a single cat's category. Unlike semantic segmentation, "Instant Segmentation" treats each object instance separately. For example, given the same image with two cats, instant segmentation will treat cat one and cat two as two separate classes of pixels. Image segmentation is useful in various domains. When video conferencing platforms like [[Zoom]] or [[Google]] Meet display a custom background, they're using image segmentation to differentiate between the participant and the background.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/what-is-image-segmentation?u=76281980&t=96)** In Medical Imaging, image segmentation helps to outline tumors or organs in a scan. In Autonomous Driving Systems, road scene segmentation identifies drivable and non-drivable areas. Similar to object detection, image segmentation performance is also often measured using intersection over union, IOU. Image segmentation is a fundamental advancement beyond object detection, offering a much finer grained understanding of visual data by assigning labels at the pixel level. This enhanced precision lays groundwork for even more sophisticated [[Computer Vision]] tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1), [[Google]] (1), [[Computer Vision]] (1)
> **CLI Commands:** cat (5)
> **Analogies:** for example (2), for instance (1), similar to (1)
> **Definitions:** is a  (2)
> **Env Vars:** iou (1)
> **Speakers:** - [instructor] (1)

#### [Using a pretrained model for image segmentation in Python](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-segmentation-in-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-segmentation-in-python?u=76281980&t=0)** - [Instructor] In this tutorial, you'll learn how to use a pre-trained YOLO model for Image Segmentation. Before we begin, let's select a Kernel. By the end of this tutorial, you know "How to load and prepare a YOLO image segmentation model for inference". You also know "How to run segmentation inference and inspect raw mask outputs". Finally, you know "How to overlay masks, bounding boxes, and labels on the original image". To begin, we import the YOLO class from the ultralytics package, and we specify a model. This time around, we're going to use the nano model, which is the "yolo11n-seg" for segmentation. So let's go ahead and import the weight for our model. So once that process is complete, we now specify a path for the image that we want to segment. So let's run the code here. So now our image path is specified in a variable called "image path". So, but before we actually segment the image itself, let's preview the image to see exactly what it is that we specified here. Just to verify that the image we're trying to work with is exactly what it is that we want to work with. So this is exactly what we want. We have an image of two cats, one in a bowl of some sort, and then the other one next to some leaves and some flowers. So this is exactly the image that we want to segment.
>
> **[1:36](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-segmentation-in-python?u=76281980&t=96)** So now let's begin the segmentation process. So it's very straightforward. All we have to do is pass the path of the image to the model which we just initialized earlier, and the results will go into this variable called "results". Let's go ahead and run that. So the process is complete. Just like we saw in the previous examples using YOLO, this output is obviously not very user-friendly, so we can make out some of what's going on, but it'll be helpful for us to kind of reformat it so it's actually easier to interpret. So what we're going to do here is we're going to use a loop to parse through the output and output it in a way that's easier for us to understand. So let's go ahead and run our code. And then once that's done, we can now see that the model itself was able to detect two things, two cats. So the first cat, it detected with a 76.9% confidence, and it also gives us a bounding box around the cat. So this looks a little bit similar to the object detection example, but we know that image segmentation goes a little bit farther than object detection. And then the second cat, with the 55.84% confidence, and it also gives us the bounding box for that cat as well. So now on this next step here, we are now going to overlay the mask of the actual pixel boundaries for each of the cats over the original image. So let's go ahead and look at that and see what exactly we get.
>
> **[3:10](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/using-a-pretrained-model-for-image-segmentation-in-python?u=76281980&t=190)** So now we actually see the segmentation output where cat one was identified, so the cat with the 56% about confidence, and then the second cat as well labeled as cat, with a 77% confidence. So you see how easy that was. In this tutorial, you obviously learned how to use a pre-trained YOLO segmentation model to perform image segmentation. Straightforward, easy to use. Some potential next steps that you may want to consider include batch segmenting folders of images, so multiple images in the folder using the loop, applying segmentation to video streams, or fine-tuning the segmentation model on a specific dataset.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (8), make (1)
> **Env Vars:** yolo (5)
> **Versions:** 76.9 (1), 55.84 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with deep learning](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/continuing-on-with-deep-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/continuing-on-with-deep-learning?u=76281980&t=0)** - [Instructor] Congrats on completing "[[Deep Learning]] with [[Python (Programming Language)|Python]] [[Convolutional Neural Networks (CNN)|Convolutional Neural Networks]]". You now understand what [[Computer Vision]] is and how it's evolved over time. You also have a better understanding of image data, how to pre-process it and how to augment it. You learn what a Convolutional Neural Network is and the layers that make up the architecture of these types of networks Through hands-on practice, you trained your own CNN in Python using CARES. You also explored advanced CNN based architectures and learned how to apply pre-trained models for a variety of tasks, including Image Classification, Object Detection, and Image Segmentation. The knowledge you have acquired in this course is an essential stepping stone towards further exploration in the field of "Deep Learning". So what comes next? Here are some recommendations to continue building your expertise. The best way to reinforce your learning is to apply it. Take on real world computer vision challenges that push you to use what you've learned. Experiment with new data sets. Explore novel architectures and don't be afraid to make mistakes. That's how learning happens. Stay connected and inspired by engaging with the broader AI and Deep Learning community. Join online forums, attend workshops, and participate in meetups to exchange ideas and stay motivated. Thank you for being part of this journey.
>
> **[1:34](https://www.linkedin.com/learning/deep-learning-with-python-convolutional-neural-networks/continuing-on-with-deep-learning?u=76281980&t=94)** I hope this course has not only strengthened your technical abilities, but also sparked a lasting interest in exploring the powerful world of Computer Vision. Good luck and I look forward to seeing you in future courses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (3), [[Computer Vision]] (3), [[Python (Programming Language)|Python]] (2), [[Convolutional Neural Networks (CNN)|Convolutional neural networks]] (1)
> **CLI Commands:** python (2), make (2)
> **Env Vars:** cnn (2), cares (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Frederick Nwanganga]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/deep-learning-with-python-convolutional-neural-networks-3930067/codespaces)

## Skills Covered

- Python (Programming Language)
- Artificial Intelligence (AI)
- Convolutional Neural Networks (CNN)
- Deep Learning

## Path Context

### In [[Advance Your Skills in Deep Learning and Neural Networks]]
← [[Artificial Intelligence Foundations- Neural Networks]] | **3 of 8** | [[AI Workshop- Build a Neural Network with PyTorch Lightning (2023)]] →

## Appears In

- [[Advance Your Skills in Deep Learning and Neural Networks]]

## Related Courses

_Courses sharing skills:_

- [[Deep Learning with Python- Optimizing Deep Learning Models]] — Python (Programming Language), Artificial Intelligence (AI), Deep Learning
- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Hands-On AI- Image Processing with Python]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Advanced Python Projects- Build AI Applications]] — Python (Programming Language), Artificial Intelligence (AI)
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI)

---

[↑ Back to top](#)