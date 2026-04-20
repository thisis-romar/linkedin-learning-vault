---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-workshop-hands-on-with-gans-with-deep-convolutional-networks
url: "https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks"
duration_minutes: 96
duration: 1h 36m
level: Intermediate
updated: 1/5/2024
learners: 3859
skills:
  - Artificial Intelligence (AI)
  - Convolutional Neural Networks (CNN)
  - Generative Adversarial Networks (GANs)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFOR4mPVjCsAQ/learning-public-crop_675_1200/B4EZjoh_NlGYAY-/0/1756247881353?e=2147483647&amp;v=beta&amp;t=5ge7kp0gCjfyApMnE0V13EBKbp2wJMmMK8gSKEJtjS0"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Advance Your Skills in Deep Learning and Neural Networks
  - Advance Your Skills in AI and Machine Learning
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/convolutional-neural-networks-cnn
  - skill/generative-adversarial-networks-gans
status: not-started
created: 2026-04-19
---

![AI Workshop: Hands-on with GANs with Deep Convolutional Networks](https://media.licdn.com/dms/image/v2/D4E0DAQFOR4mPVjCsAQ/learning-public-crop_675_1200/B4EZjoh_NlGYAY-/0/1756247881353?e=2147483647&amp;v=beta&amp;t=5ge7kp0gCjfyApMnE0V13EBKbp2wJMmMK8gSKEJtjS0)

# AI Workshop: Hands-on with GANs with Deep Convolutional Networks

> If you’re looking for hands-on AI practice, this workshop-style coding course was designed for you. Join instructor Janani Ravi as she shows you how to build and train deep convolutional generative adversarial networks (DCGANs). Explore the core components of convolutional and pooling layers, including setting up Google Colab cloud-hosted notebooks, transforming multichannel images to tensors, app

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks) | 1h 36m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Artificial Intelligence (AI)
- Convolutional Neural Networks (CNN)
- Generative Adversarial Networks (GANs)

## Table of Contents

### Introduction

#### A quick overview of GANs
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=0)** Hi, and welcome to this AI Workshop: Hands-On with GANs, that is Generative Adversarial Networks, Using Deep Convolutional Networks.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=10)** Now, I'll do a quick overview of how generative adversarial networks work, but I'll make an assumption here that you have some basic understanding of GANs.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=18)** Now, generative adversarial networks belong to a class of machine learning models known as generative models.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=26)** A generative model trains on a large corpus of data, and it learns the probability distribution and features of that data, and can use this information to generate new data instances that do not belong to the training set.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=41)** These are entirely unique instances.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=43)** These instances will be similar to the data the model was trained on.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=47)** A generative adversarial network is one kind of generative model.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=51)** The term adversarial comes from the fact that a GAN has two neural network components within it, and these two neural networks compete with one another to become better at what they do, more accurate in their predictions.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=65)** The two networks are essentially playing a zero-sum game.
>
> **[1:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=68)** When one improves, the other gets worse.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=70)** The adversaries in a GAN have very specific names and very specific objectives.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=76)** The first adversary is the generator responsible for generating instances.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=81)** The second adversary is the discriminator responsible for classifying instances.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=86)** Let's understand the generator first.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=88)** The objective of a generator is to generate plausible realistic data, and this data is then fed in as negative samples to a discriminator.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=99)** To start off, the samples that a generator creates is of poor quality.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=103)** The discriminator is easily able to identify fake data from the generator versus the real data that it receives from a training dataset.
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=112)** As training progresses, the generator receives feedback from the discriminator and steadily improves the quality of the generated data till the generator is able to fool the discriminator.
>
> **[2:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=125)** The discriminator will then find it hard to tell what data is generated and what data is real.
>
> **[2:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=132)** The second adversary in a GAN is the discriminator, and the discriminator's objective is to distinguish the fake data generated by the generator from the real data instances that are also fed into the discriminator.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=146)** If the discriminator is able to identify the generator's fake data, it penalizes the generator for generating implausible data, thus forcing the generator to improve. During the training process, as the generator improves, the discriminator's ability to distinguish real from fake steadily diminishes.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=167)** During training, the generator will improve to such an extent till the discriminator is unable to tell fake and real data apart.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=175)** Hopefully, you're already familiar with the basics of GANs from the previous AI Workshop: Hands-on with GANs Using Dense Neural Networks.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=184)** In this workshop, we'll work with convolutional neural networks.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=188)** Convolutional neural networks, or CNNs, are a neural network architecture that is primarily used for image recognition and processing tasks.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=197)** The architecture of the layers in a CNN mimic the visual cortex of the brain, and how our eye and brain together perceive images.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=206)** And this is why convolutional neural networks work very well with image data.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=212)** The GAN that we'll build will essentially use the architecture of a convolutional neural network.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=219)** This is going to be a deep convolutional GAN.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=222)** You can think of the DCGAN as a class of CNNs that have certain architectural constraints, and can learn a hierarchy of representations from input images.
>
> **[3:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/a-quick-overview-of-gans?u=76281980&t=232)** When you use deep convolutional GANs to construct the generator and discriminator network, this can greatly improve the quality of generated images.

> [!info]- Semantic Content
>
> **Env Vars:** gan (5), cnn (1), dcgan (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1)
> **Definitions:** known as (1)
> **Analogies:** similar to (1)


### 1. Understanding Convolutional and Pooling Layers

#### Course outline and prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=0)** Before we get to the content of this workshop, let's take a quick look at what we'll be covering today and also some of the prereqs that you need to have to make the most of your learning.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=10)** Now, I make the assumption that you have some basic knowledge of how GANs work.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=15)** So we'll start this workshop off by understanding how convolutional neural networks work.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=20)** We'll then understand the role of convolutional layers and pooling layers in a convolutional neural network.
>
> **[0:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=27)** We'll see how the discriminator is essentially just a classification model, learning to identify real and fake images.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=35)** We'll understand the architecture of the constrained deep convolutional GAN, and we'll build and train a GAN using the deep convolutional network.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=45)** Here are some of the prereqs that you need to get the most out of this workshop.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=49)** You need to be comfortable programming in Python because we'll be writing all of our code in Python.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=54)** You need to be familiar with neural networks and how they work.
>
> **[0:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=57)** This is not a basic neural network course, and you should be comfortable using the PyTorch framework to build and train neural networks.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=65)** I also assume that you know the fundamentals of how GANs are built and trained.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=70)** And if you feel that you've never worked with GANs before, here is a course that you might want to study first, AI Workshop: Hands-on with GANs Using Dense Neural Networks.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/course-outline-and-prerequisites?u=76281980&t=79)** This course here is a prereq for the current workshop.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), python (2)
> **Env Vars:** gan (2)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Prerequisites:** you need to have (1)

#### Setting up Google Colab cloud-hosted notebooks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=0)** In this movie, we'll set up the environment that we'll be using to run the demos of this course.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=6)** Now, all of the neural network training that we're going to be doing, we'll do on Google Colab.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=11)** So head over to colab..research.[google.com](https://google.com).
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=15)** Now, if you've never worked with Google Colab before, let me give you a quick overview of what it is.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=20)** Google Colab is short for Google Co-laboratory.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=24)** It's a free, cloud-based platform provided by Google that allows users to run and execute Python code in a web-based interactive environment.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=33)** Colab is based on Jupyter Notebooks, which are essentially interactive documents that combine code, text, and visualizations.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=40)** You've likely used Jupyter Notebooks on your local machine.
>
> **[0:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=43)** Well, now you can use it on the cloud using Colab.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=47)** However, there are so many cloud-based notebooks out there.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=50)** Why is Colab special?
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=51)** Well, Colab provides free access to GPUs, that is, graphics processing units and TPUs, tensor processing units, which are hardware accelerators used for training deep learning models.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=64)** Access to these GPUs and TPUs are absolutely free on Colab, so long as you're within a certain limit, and we'll definitely not be exceeding those limits when we are doing the demos of this course.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=77)** Because we are going to be training deep convolutional generative adversarial networks that train on multi-channel or color images, well, we could do with a GPU.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=87)** This code is going to run really slowly on our local machine.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=91)** Hence we are using Colab.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=93)** In order to use GPUs in Colab, you'll need to sign in and any Google account will do.
>
> **[1:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=98)** If you have a Gmail account, you can use that to sign in, or if you have a Google account from your organization, you can use that to sign in as well.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=106)** I'm signing in with my organization's Google account.
>
> **[1:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=110)** And here I am within Colab.
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=112)** Now let's create a new notebook within which we'll write our code.
>
> **[1:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=117)** Now you work with Colab Notebooks, just like you would work with Jupyter Notebooks.
>
> **[2:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=122)** Before we start coding, let's give this notebook a meaningful name.
>
> **[2:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=125)** I've called it ConvolutionalFilters because that's what we're going to explore in the first demo.
>
> **[2:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=131)** At this point, you have a conceptual understanding of how convolutional layers and pooling layers work.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=136)** Now you'll get some hands-on experience with how these layers function.
>
> **[2:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=140)** Now, before we get there, let's talk about the runtime that we'll use to execute our code.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=145)** Under runtime, you can change the runtime type to pick what kernel you want to use to run your code.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=152)** We'll be writing code in Python 3, so that's the kernel that I have selected.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=157)** Now in addition to the kernel, this is where you select what kind of hardware you want to run your code on.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=163)** In this first demo, we won't be doing anything computationally extensive, so it's fine for us to use the CPU accelerator.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=170)** But later on when we train our GAN, we'll need a GPU.
>
> **[2:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=174)** We'll see that when we get to it, but for now, go ahead, pick the CPU and save the changes.
>
> **[3:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=180)** The next thing I'm going to do is show you how you can access folders on the machine where your cloud notebook is hosted.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=187)** Click on the little folder icon to the left of your screen, and this will show you the folders that you have access to in your runtime environment.
>
> **[3:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=196)** Now the cool thing is, you can also upload data to these folders.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=200)** Right-click, select the upload option.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=202)** This will bring up a browser window on your local machine.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=205)** Select the car.jpeg file that is available along with the resources of this course, and go ahead and open and upload this image to your cloud-hosted notebook.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=217)** Anything that you upload to your runtime environment can be accessed by code in your notebook.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-google-colab-cloud-hosted-notebooks?u=76281980&t=223)** And that's why I've performed this upload.

> [!info]- Semantic Content
>
> **Tools:** colab (13), jupyter (3)
> **Code Keywords:** let (4), function (1)
> **Env Vars:** gpu (2), cpu (2), gan (1)
> **UI Navigation:** select the (2), click on (1), right-click (1)
> **Prerequisites:** set up (1), you'll need (1), before we start (1)
> **CLI Commands:** python (2)
> **URLs:** [google.com](https://google.com) (1)
> **Versions:** python 3 (1)

#### Understanding convolutional neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=0)** Let's get a big picture understanding of how convolutional neural networks or CNNs work.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=6)** CNNs are a class of deep learning models primarily used for computer vision tasks.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=12)** They are designed to automatically and adaptively learn hierarchical features from input images, making them well-suited to tasks such as image classification and object detection.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=23)** The CNN architecture, like I mentioned before, is meant to mimic the visual cortex of the brain, essentially how humans perceive images.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=33)** CNN are able to extract data from images in two dimensions, so they also get the spatial information present in an image.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=42)** Dense neural networks with fully connected layers can also be made to work with images.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=48)** Essentially, you flatten the image data that you will feed into a dense neural network.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=53)** However, flattening the image data does not let the network capture the spatial features of images.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=60)** The location of an object at the top right or the bottom left of an image, that information is lost.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=67)** Now, training dense neural networks on images leads to parameter explosion.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=73)** There are millions of parameters for even very simple images.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=77)** And if you have a fully connected neural network, well, training that is just very, very tough.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=83)** Convolutional neural networks, on the other hand, are sparse neural networks.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=88)** They have far fewer parameters to train, and they work very well with image data.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=94)** CNNs are able to capture location invariant spatial features that are present in the input.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=101)** So let's say you're trying to detect an object.
>
> **[1:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=104)** That object could be in the center of the image or to the top left or the top right.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=107)** It doesn't matter.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=109)** CNNs will be able to detect this.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=111)** Convolutional Neural Networks are made up of two types of layers.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=115)** The convolutional layer applies learnable filters or kernels to input data, and these filters detect various features like edges, textures, or patterns within the input data.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=126)** Pooling layers are often referred to as subsampling layers that reduce the spatial dimensions of the input data.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=135)** Pooling layers help reduce the computational complexity of the network and focus the network on the most important features of the input.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=144)** Lets understand how each of these layers work, starting with the convolutional layer.
>
> **[2:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=149)** The convolutional layer involves a learnable filter, also called a kernel, that is slid in a horizontal and vertical fashion over the input image.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=159)** This kernel is trainable in that the weights of the kernel are found during the training process of the neural network, and this kernel is responsible for extracting features or information from the input data.
>
> **[2:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=173)** The sliding kernel learns hierarchical representations that exist in the input image, and the output of the convolutional layer is feature map representations.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=184)** A single input image can generate several feature maps, where each feature map contains different information that has been extracted from the input image.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=194)** Here is a visual overview of how convolutional neural networks work.
>
> **[3:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=198)** I'm going to break down this image step-by-step so you can see what's going on.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=203)** Let's say this is the input that you feed into a convolutional layer.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=206)** The input is typically an image, but it can also be a feature map generated by a previous convolutional layer.
>
> **[3:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=213)** A k x k learnable filter or kernel is slid over the input image, and this kernel performs elementwise multiplications and sums the results over and over again over small regions, and this is what helps the layer learn hierarchical representations.
>
> **[3:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=233)** The kernel may slide over the original image, or you may choose to add some zero padding around the edges of the image before the kernel actually slides over the image.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=243)** So the input image may be zero padded with p zeros.
>
> **[4:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=248)** Now the kernel moves over the image with a stride represented by s.
>
> **[4:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=253)** The stride refers to the number of pixels the kernel moves at each step.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=258)** The kernel will have a horizontal stride for horizontal movement and a vertical stride for vertical movement.
>
> **[4:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=264)** The elementwise multiplication that the kernel performs on the input produces an output feature map, and this feature map has extracted some kind of representation from the input image.
>
> **[4:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=277)** Maybe it's detected horizontal edges, vertical edges, maybe it's blurred the input or sharpen the input, anything. The size of the output feature map, that is, the width and height of the output feature map is computed using this formula.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=293)** Now the output over here can be the width or the height.
>
> **[4:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=296)** p refers to the padding that you've added to the input image, the zero-padded layers.
>
> **[5:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=301)** k refers to the size of the kernel, and s refers to the stride either in the horizontal or vertical direction.
>
> **[5:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=309)** If you're using the stride in the horizontal direction, the output will be the width of the image, and if the stride s refers to the vertical stride, the output here will be the height of the image.
>
> **[5:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=319)** Convolutional neural networks have a second kind of layer, the pooling layer, which is responsible for subsampling or down-sampling of the input.
>
> **[5:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=329)** The objective is to reduce the sample size.
>
> **[5:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=332)** The pooling layer typically computes a summary statistic on the input image.
>
> **[5:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=337)** It performs some kind of aggregating operations.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=340)** Now the aggregations can include average pooling, max pooling.
>
> **[5:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=344)** There are different pooling layers you can use for different use cases.
>
> **[5:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=347)** The objective of the pooling layer is to preserve the important representations in the input data, while reducing the number of parameters the network has to deal with.
>
> **[5:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=358)** It reduces the computational complexity of the network.
>
> **[6:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=362)** Here is what the general architecture of a CNN looks like.
>
> **[6:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=365)** Convolution and pooling layers are interleaved with one another, they alternate. After every convolution layer, you generally have a pooling layer.
>
> **[6:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-convolutional-neural-networks?u=76281980&t=374)** And at the very end, after the convolutional and pooling layers are done, there's generally a dense, fully connected layer which produces the final output, whether it's an image classification or some kind of object detection.

> [!info]- Semantic Content
>
> **Definitions:** refers to (5), is a  (1)
> **Code Keywords:** let (4), this. (1)
> **Env Vars:** cnn (3)
> **Analogies:** picture (1), such as (1)

#### Transforming a multichannel image to tensor
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=0)** You know that convolutional neural networks are made up of two types of layers; convolutional layers and pooling layers.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=6)** Convolutional layers have a kernel that slides over the image input to that layer, and this kernel extracts features from the underlying image, and different kernels extract different kinds of features.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=20)** Pooling layers apply some kind of aggregation function and are used to subsample the input, reduce the dimensionality of the input.
>
> **[0:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=27)** In this demo, we'll apply convolutional and pooling layers to an input image and see their effect.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=33)** Let's set up the imports for some of the libraries that we'll be using.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=37)** We are using the PyTorch framework to train our neural network model, so the first four imports you see are all for libraries in PyTorch.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=46)** Notice I didn't have to install these libraries.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=49)** The PyTorch framework is available as a part of the installed libraries in Colab. nn is the neural network library, F is the functional library to apply functions, T is the transforms library to transform our data.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=64)** In addition, we'll use numpy to work with images, the pillow library to read in an image and matplotlib to plot the result.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=72)** Let me just show you the version of PyTorch that I'm using.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=76)** If you are on an older version, some of these things may not work in exactly the same way.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=80)** PyTorch 2.0.1.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=82)** This is one of the most recent versions available at the time of this recording.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=87)** Now with that done, let's go ahead and read in the car.jpeg file that's in my current working directory, and I read this in using the image object from the pillow library.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=100)** Neural networks operate on images represented as tensors.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=103)** This image is not in the tensor format, and we'll need to convert that to a tensor format.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=109)** And I'm going to perform that conversion using transforms.
>
> **[1:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=113)** The original image is a rather large one.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=116)** So the first transformation I apply is to resize the image.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=119)** This transformation will change the height of the image to be 450.
>
> **[2:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=123)** The width of the image will be determined based on the aspect ratio of the original image.
>
> **[2:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=129)** Is to convert that image to a PyTorch tensor using the ToTensor transformation.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=135)** Now let's go ahead and actually transform the input image so that we get the result in the form of an image tensor.
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=142)** It's kind of hard to see here in the raw image pixels, but this is actually a multi-channel image, a color image where a single pixel is represented using its RGB values.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=155)** And this will become much clearer when you take a look at the shape of the tensor.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=159)** img_tensor.shape will show you that this is a multichannel image.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=164)** Notice the dimensions of this tensor.
>
> **[2:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=166)** They are specified in the form that PyTorch accepts as an input to its neural networks.
>
> **[2:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=172)** The first dimension, 3, is the number of channels in the image.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=176)** The second dimension is the height of the image, 450 pixels, that's what we had resizes do. And the third dimension refers to the width of the image, 800 pixels.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=185)** This 450 by 800 preserves the original aspect ratio of the image.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=190)** The three channels of this image represent the RGB values of each pixels; red, blue, and green.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=197)** When you feed images to a PyTorch neural network, your image's dimensions need to be in a certain format.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=204)** PyTorch expects images to be represented in this form.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=209)** The first dimension refers to the batch size, then number of channels, then height, and then width.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=217)** The image tensor that we have for a single image does not have this extra dimension for batch size, which is why I performed the img_tensor.unsqueeze operation with an index of zero.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=228)** Unsqueeze will add a new dimension of size one at the index position that you've specified, which in our case is index position zero.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=237)** So notice the image tensor shape is now (1, 3, 450, 800).
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/transforming-multichannel-image-to-tensor?u=76281980&t=243)** The first dimension with a value of 1 is the dimension for the batch.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (1)
> **Definitions:** is a  (2), refers to (2)
> **Code Identifiers:** img_tensor (2)
> **Env Vars:** rgb (2)
> **Prerequisites:** set up (1), install (1)
> **Versions:** 2.0.1 (1)
> **Tools:** colab (1)

#### Applying convolutional and pooling layers
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=0)** In this demo, we'll see how we can apply convolutional kernels of different types to the input image and look at the resulting image.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=8)** We'll also see the result of applying a max pooling layer after we've applied the convolutional kernel.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=15)** Every kernel that we apply will perform a different operation on the underlying image.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=20)** For example, this very first kernel here is a sharpened kernel.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=24)** The sharpened kernel has weights which serve to sharpen the underlying image.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=29)** Sharpening is a combination of edge detection plus the original image.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=35)** The sharpened kernel has a sum of one.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=38)** Now how exactly this kernel sharpens the underlying image?
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=42)** That's a mathematical construct that we won't get into, but we'll focus on how to apply these convolutional filters to the input image and view the result.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=50)** Observe that I've specified the kernel in four dimensions.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=54)** This corresponds to the four dimensions in which the original image is expressed.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=59)** If you remember the original image, that's a 4D tensor as well.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=62)** Here is the sharpened kernel defined as a matrix.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=66)** Let's now convert this to a tensor format using torch.Tensor.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=71)** I've called the resulting tensor the sharpen_filter because it performs a filtering operation on the underlying image, and you can see the dimensions of the sharpen_filter.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=81)** The F.conv2d function in PyTorch accepts custom filters that you can apply to images.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=88)** We pass in the images of 4D tensor, we pass in our filter.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=92)** We don't apply any padding to the input image, and we get the convolutional tensor at the output.
>
> **[1:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=97)** Observe that the resulting tensor has batch size equal to one, number of channels equal to one.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=103)** Our sharpening filter was applied to just one channel, and you can see that the dimensions of the image are a little smaller, 798 pixels along the width, rather than 800.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=114)** That's because we applied no padding to the input image.
>
> **[1:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=118)** Next, from this convolutional tensor, in order to access only the image, I'm going to get rid of the batch size dimension so that we get the image 450 x 798, and one channel.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=130)** In order to display this image using matplotlib, I'm going to convert the image to a NumPy format so that it's no longer a PyTorch tensor.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=138)** Here is the image in NumPy, 450 x 798.
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=142)** We are now finally ready to view this image.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=144)** This image is just a feature map that extracts the sharpened version for a single channel of the underlying image.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=152)** And here is what the resulting feature map looks like.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=156)** It's a single channel image, and if you look closely, it does seem much sharper than the original.
>
> **[2:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=162)** Our image was a grayscale image, and you might wonder why this particular image is displayed in green.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=167)** That's because by default, the color map that matplotlib uses for grayscale images is something called Viridis, which is like a greenish color.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=176)** Convolutional layers in a convolutional neural network are usually followed by pooling layers.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=181)** Next, let's apply a max pool operation on the input image.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=185)** And here is the max pool function that I have defined, MaxPool2d.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=190)** I'll now pass the convolution tensor through the max pool layer.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=194)** And let's take a look at the shape of the pooling tensor.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=197)** You can see that it's about half the size of the original feature map, 225 x 399.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=205)** Now let's extract the image in the pooling layer as well.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=209)** I'm going to get rid of the first dimension.
>
> **[3:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=211)** The next step is to convert this result, the pooled image, to a NumPy array and get rid of the channel as well.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=219)** So we get a 225 x 399 image.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=223)** And let's plot this using matplotlib as well.
>
> **[3:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=226)** So this is the pooled image.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=228)** And you can see the slight aggregation of the image, it's slightly blurred as compared to the previous image that was the output of the convolutional layer.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/applying-convolutional-and-pooling-layers?u=76281980&t=237)** And this is how convolutional and pooling layers work, the building blocks of convolutional neural networks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), pass (3), function (2), default, (1)
> **Definitions:** is a  (2), defined as (1)
> **Code Identifiers:** sharpen_filter (2)
> **Analogies:** for example (1)

#### Viewing the effect of different filters
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=0)** In the previous movie, we saw how we could apply a convolutional kernel to extract feature maps from the underlying image.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=7)** We displayed the result of applying the convolutional kernel, that is, the feature map obtained at the output of a convolutional layer.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=15)** We then passed the output of the convolutional layer through a pooling kernel and saw the resulting image as well.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=23)** Now there were lots of operations we had to perform for this.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=26)** So if you're going to explore the different kinds of kernels that we can apply to input images, we need to set all of this up as a function.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=34)** And that's exactly what I have done here.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=36)** All of the individual operations that we performed in the previous movie, I've brought into one function; apply kernel and show.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=45)** This takes the image tensor as an input argument and the kernel that we want to apply to the image.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=51)** The code from line 2 through 22 is the same code that we've seen before.
>
> **[0:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=57)** We apply the convolutional kernel to the input image, view the feature map, pass this feature map through a pooling layer and view the result.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=65)** And we plot the output of the convolutional layer and the output of the pooling layer side-by-side.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=72)** Now let's apply different kinds of convolutional kernels to the input.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=76)** Here is a kernel that detects vertical edges in the input.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=80)** This is the vertical edge kernel.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=82)** This particular vertical edge detector is referred to as a Prewitt filter.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=87)** Observe that the first column contains all negative ones, then the second column zeros, and the third column positive ones.
>
> **[1:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=95)** This particular set of weights for the kernel allows the kernel to detect vertical edges.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=100)** I'm going to invoke apply_kernel_and_show, pass in our img_tensor, and the vertical_edge_kernel.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=106)** And this is what the result looks like.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=108)** The image on the left is the output of the convolutional layer and the image on the right, the output of the pooling layer.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=114)** Notice the image on the left, the vertical edges are highlighted in that image.
>
> **[2:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=120)** The image on the right is the same as the input, but with an aggregated effect.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=124)** Now that we've done vertical edge detection, let's take a look at a horizontal edge kernel.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=130)** You can see that the weights of this kernel are similar to what we used for the vertical edge detector.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=135)** But the same kernel weights are arranged horizontally and not vertically.
>
> **[2:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=140)** We have a row of negative ones, then a row of zeros, and then a row of positive ones.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=144)** And here is what the result of the horizontal edge detector looks like.
>
> **[2:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=149)** On the left, you can observe that the horizontal lines or edges in the image are emphasized far more than the vertical edges.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=157)** And on the right, we have the pooling output, which is just a sub-sampled and aggregated version of the image on the left.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=163)** Next, let's take a look at another filter.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=167)** This is the Sobel filter for vertical edge detection.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=171)** Once again, the first column comprises of negative values, the second column of zeros, and the third column of positive values.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=177)** The Sobel filter works similar to the Prewitt filter, but it places greater emphasis on pixels that are closer to the center of this kernel mask.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=187)** Let's take a look at what the result looks like here.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=190)** Now I can see the vertical edges emphasized in this image on the left, but it's hard for me to tell how this output is different from that of the Prewitt filter.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=200)** To my untrained eye, it looks the same.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=202)** Similarly, we have the horizontal edge detector.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=206)** This is the Sobel filter for detecting horizontal edges.
>
> **[3:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=210)** And here is what the result looks like.
>
> **[3:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=213)** Again, it's hard for me to tell how this output is different from that of the Prewitt horizontal edge detector.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=219)** The next convolution kernel that we'll work with is the Gaussian Blur filter.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=225)** The Gaussian Blur is used to soften the image that we are looking at.
>
> **[3:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=229)** And here is the result.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=231)** If you look at the image on the left, there is definitely a little bit of a smoothing out of all of the edges in the image, that is the blur.
>
> **[3:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=238)** And the last convolutional kernel that we'll explore today is the Emboss filter.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=244)** It's also called a directional difference filter.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=247)** And this filter generates highlights and shadows in the output feature map to create an effect which makes the image look like an embossed image.
>
> **[4:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=256)** And here is what the result looks like.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=258)** There is definitely a highlighting effect.
>
> **[4:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-the-effect-of-different-filters?u=76281980&t=260)** There is almost a 3D effect that you can see with the car and the image on the left.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), pass (2), this. (1)
> **Code Identifiers:** apply_kernel_and_show (1), img_tensor (1), vertical_edge_kernel (1)
> **Analogies:** similar to (2)
> **Definitions:** is a  (1)


### 2. Training a Discriminator as a Classification Model

#### Types of convolutional layers
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=1)** Before we look at the architecture of any of the adversaries, the generator, or the discriminator, let's understand the different types of convolutional layers.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=9)** There is the standard convolutional layer.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=11)** This is where a learnable filter is slid over the input image to generate a feature representation of that image.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=18)** Then we have the deconvolutional layer which does the opposite of the standard convolutional layer.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=24)** And finally, we have the transposed convolutional layer used for upsampling the input image.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=30)** Now the standard convolutional layer is one that we are familiar with.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=34)** This is where a sliding kernel is applied to the input, an elementwise multiplication is performed using the weights of the kernel, and this allows the convolutional layer to extract hierarchical representations from the underlying image.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=49)** And we've seen the basics of a convolutional layer in a previous movie.
>
> **[0:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=54)** The deconvolution layer does the opposite of a convolution layer.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=59)** It reverses the standard convolution layer's operation.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=63)** It takes in a feature map as an input, and produces the original input that was used to generate the feature map.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=71)** If you have a representation of the original image, a deconvolution layer will give you back the original image.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=78)** And finally, we have the transposed convolutional layer.
>
> **[1:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=82)** And this is important because this is what we are going to use in the generator.
>
> **[1:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=86)** The objective of the transposed convolutional layer is to perform upsampling of input data.
>
> **[1:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=92)** So you feed in a feature map, and this transposed convolutional layer will generate another feature map that has a spatial dimension greater than that of the input. Transposed convolutional layers also use learnable parameters, the filters to figure out how the input is transformed to the output, and here is a representation of how the transposed convolutional layer works.
>
> **[1:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=117)** Here we have the input to the layer and the kernel applied to the input.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=121)** The kernel is of size k x k.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=124)** Now observe the two parameters here, s and p.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=127)** These refer to the stride and padding of the transposed convolutional layer.
>
> **[2:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=132)** But stride and padding here means something different from the stride and padding parameters that we saw in a regular convolutional layer.
>
> **[2:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=141)** We use the stride and padding that we've chosen to compute new parameters.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=146)** z = s - 1, p' = k - p - 1, where k refers to the size of the kernel, and s' is always set to 1, that is, the stride of the kernel as it slides over the input feature map representation.
>
> **[2:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=162)** The parameter z, that we've computed as s - 1, is the number of zeros that you add to the input feature map between the individual rows and columns of that feature map.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=175)** Here, z = 1 and you can see how I've added one row of zero padding represented in purple between each row and column of the input feature map.
>
> **[3:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=186)** In addition to this, you add p' number of zeros around the input feature map. So this is additional padding around the edges.
>
> **[3:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=196)** You then slide the kernel over the input feature map, the stride of this kernel, both in the horizontal and vertical direction is always equal to one.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=204)** What you get at the result is an output image or feature map representation that is upsampled from the input.
>
> **[3:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=213)** So this upsampling was performed using the trainable parameters in the kernel, and the dimensions of the output upsampled map can be computed using this formula.
>
> **[3:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=225)** s is the stride that we had chosen, k is the size of the kernel, and p is the original padding that we had chosen.
>
> **[3:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=232)** Once again, s and p, the stride and padding that I refer to here don't mean the same thing as the parameters in a standard convolutional layer.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/types-of-convolutional-layers?u=76281980&t=242)** Those parameters are represented by variables, s' and p', that we computed from this original stride and padding.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), this, (1)
> **Definitions:** is a  (1), refers to (1), is an  (1)

#### Training data for discriminator bad fakes and real images
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=0)** Before we actually train a deep convolutional generative adversarial network, in this demo, we'll work with the discriminator alone.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=9)** Remember, the discriminator component in a GAN is a simple classification model.
>
> **[0:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=14)** We'll see how we can train that model on fake images and real images that I have previously generated.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=21)** Once we see how the discriminator works standalone, we'll see the discriminator and the generator work together in a generative adversarial network.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=30)** The data that I'm going to be using to train my discriminator is stored here on Google Drive.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=36)** Within Google Drive, I have a folder called ai_workshop_dcgans.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=41)** Here I've created a subfolder called anime_classification.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=45)** I'm now going to click through to the subfolder and here you'll find two more subfolders; real_images and bad_fake _images.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=53)** The real_images folder here contains real images from our training data.
>
> **[0:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=57)** The bad_fake_images are fake images generated from a generative adversarial network that I had previously trained.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=66)** But these are bad fakes because these are the outputs of the generator early on in the training.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=72)** So they are very clearly identifiable as fake.
>
> **[1:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=75)** Let's take a look at a few samples of the real images.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=78)** First, let me open up this particular image and you can see this is an image of anime faces.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=84)** I suggest you explore a few more of the real images here, and you can see that the image quality is pretty good.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=91)** This is what we'll finally train our deep convolutional GAN to generate.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=96)** And all of these images are multichannel or color images.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=99)** Now let's go back and take a look at the bad_fake_images.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=103)** The bad_fake_images have a name which includes the epoch of training the GAN was in when the image was generated.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=111)** For example, an im_5 image was generated in the fifth epoch of training, and you can see that this image is pretty terrible.
>
> **[1:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=118)** Many of the images generated early on during GAN training are going to be pretty bad. But if you look at images a little later on in the GAN training, they'll be better, but they are still pretty terrible fakes.
>
> **[2:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=132)** The bad fake images that I have generated are from the first few epochs of training.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=138)** So I'm going to sort, and here are some images from epoch 20.
>
> **[2:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=142)** This is from a previously trained GAN, and you can see that they are better than images in epoch 5, but they are still pretty terrible.
>
> **[2:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=150)** Our discriminator is going to have no trouble at all telling apart the fake images from the real anime faces in the dataset.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=158)** And that's what we'll observe first. We'll be training our discriminator in Google Colab.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=164)** So let's get set up with a Colab notebook.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=167)** And this Colab notebook will train only the discriminator.
>
> **[2:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=171)** So I'm going to call it TrainingDiscriminatorOnBad FakesAndRealImages. Because we're going to be using a discriminator with strided convolutional layers, let's ensure that we are using the GPU runtime.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=184)** Notice my runtime here says T4 GPU.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=187)** This is freely available for you to use, provided you don't go beyond a certain limit.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=192)** Now in Google Colab, PyTorch is installed by default.
>
> **[3:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=196)** Let's import all of the PyTorch libraries that we'll be using to train our discriminator.
>
> **[3:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=201)** We need torch.nn to set up our neural network, torch.optim to set up the optimizer to train our model, torchvision.datasets to set up containers that will hold our training data transforms to apply transformations to the input images.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=217)** And then, of course, the torchvision library, which has a number of vision-related utilities.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=223)** The first thing we have to do is access our training data, which is on Google Drive.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=228)** And you can do that using the drive object.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=231)** drive.mount will mount the Google Drive associated with your currently logged in Google account, and make it available within Colab.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=240)** You'll need to connect and authenticate yourself to Google Drive using your Google username and password.
>
> **[4:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=247)** Make sure you allow Colab to access the contents of your Google Drive folder, and in a few moments, your Google Drive has been mounted at this location, /content/drive.
>
> **[4:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=259)** If you open up the folder on the left navigation pane, you should find My Drive in there.
>
> **[4:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=266)** That's essentially the home folder for your Google Drive.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-bad-fakes-and-real-images?u=76281980&t=270)** Now we shall be able to access content on drive from Colab.

> [!info]- Semantic Content
>
> **Code Identifiers:** bad_fake_images (3), real_images (2), ai_workshop_dcgans (1), anime_classification (1), bad_fake (1)
> **Env Vars:** gan (6), gpu (2)
> **Code Keywords:** let (6), default. (1)
> **Tools:** colab (7)
> **Prerequisites:** set up (4), you'll need (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)

#### Loading and transforming training image data
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=0)** In this movie, we'll load in and take a look at the data that we are going to be using to train the discriminator.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=7)** We've already mounted Google Drive that contains our training data to this notebook.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=11)** The next step is to indicate what device we are going to be using for training.
>
> **[0:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=17)** Now the device will be a GPU device if one is available, otherwise, it will be CPU.
>
> **[0:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=22)** Now, because we have set the runtime type to have GPU, notice that a CUDA device is available for us to use.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=29)** Next, we'll load in the Anime Faces dataset and create a dataset by pointing to the image folder that contains our data.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=38)** The batch size that we'll use for training will be 16.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=42)** The size of each image is 64 x 64.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=45)** And remember, these are color images or multi-channel images.
>
> **[0:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=49)** The route points to the path on drive where the data is located under /content/drive, we have My Drive, that is the home folder of Google Drive.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=60)** And then within that, we have the ai_workshop_dcgans subfolder.
>
> **[1:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=64)** And within that, the anime_classification subfolder.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=67)** We then apply a number of transformations to the input image.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=70)** Each image will have a height of 64 pixels using the resize operation.
>
> **[1:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=75)** And then we perform a center crop so that every image is 64 x 64.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=80)** We convert the images to a tensor format and normalize using 0.5 as the mean and 0.5 as the standard deviation.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=89)** Here I kind of approximate the mean and standard deviation values for the input data.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=94)** The ideal thing would be to actually take a look at your data and compute the mean and standard deviation you should use to normalize those images, but 0.5 should work well for this demo.
>
> **[1:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=105)** This should ensure that all of the RGB channel values are centered around zero, and that will actually improve the training of the model.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=115)** Once this is done, let's take a look at the classes in this data set.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=119)** If you look at the classes, you can see there are two; bad_fake_images and real_images.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=124)** The classes correspond to the folders that we had in our Google Drive.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=128)** This is what we're going to train the discriminator to identify.
>
> **[2:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=132)** Now the total number of images that we have is 2048; 1024 bad fakes and 1024 real images.
>
> **[2:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=140)** I'm going to randomly split the anime_faces dataset into a training set and a test set.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=146)** 80 percent of the records we'll use to train the discriminator and 20 percent to evaluate the discriminator.
>
> **[2:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=153)** The random split will ensure that the training data is shuffled.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=157)** Next, let's set up the data loaders for the training and test data.
>
> **[2:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=162)** Data loaders in PyTorch allow us to iterate over the training and test data in batches.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=168)** Note that I've set shuffle = true in the train data loader, so the training data will be shuffled when we train the model.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=175)** The testloader has shuffle = false.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=177)** We'll use that only to evaluate how the discriminator does once it has been trained.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=183)** Next, let's take a look at some of the images that we'll use to train our model.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=187)** I set up an iterator over the train data loader and extract the first batch of images.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=192)** Observe here the shape of the PyTorch tensor of a batch of data.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=197)** This will be the shape of each batch that we use to train our discriminator model.
>
> **[3:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=203)** The first dimension here, 16 refers to the batch size, 3 is the number of channels in each image, and every image is 64 x 64.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=212)** Next, I'll set up a utility function to display the images that we are working with.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=217)** This function is called display.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=219)** It takes in an image tensor and then displays it using matplotlib.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=224)** The mathematical operation on line 2 unnormalizes the data.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=228)** If you remember, we had normalized our data by subtracting a mean of 0.5 and dividing by a standard deviation of 0.5.
>
> **[3:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=236)** This is just the reverse operation.
>
> **[3:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=238)** The permute function swaps the dimensions of the image, so the height of the image comes first, then the width, and then the number of channels.
>
> **[4:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=245)** PyTorch accepts a number of channels first, then height and width.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=249)** The rest of the code in the function is to just convert the image to a NumPy array and display it using matplotlib.
>
> **[4:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=257)** and then on line 13, I invoke the display function by invoking make_grid on a batch of images.
>
> **[4:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=263)** make_grid is just a PyTorch utility that will take in the images in a batch, and lay them out in a grid format.
>
> **[4:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=270)** The print functions on lines 11 and 15 will essentially display the labels associated with the images; real images are bad fakes. So let's take a look at this first batch of images in our training data.
>
> **[4:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=284)** You can observe the bad fakes interspersed with the real images.
>
> **[4:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=288)** It's very easy to tell those apart.
>
> **[4:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=290)** The discriminator is going to have a very easy job of it.
>
> **[4:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/loading-and-transforming-training-image-data?u=76281980&t=293)** That's pretty clear.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (4)
> **Code Identifiers:** make_grid (2), ai_workshop_dcgans (1), anime_classification (1), bad_fake_images (1), real_images (1)
> **Env Vars:** gpu (2), cpu (1), cuda (1), rgb (1)
> **Versions:** 0.5 (5)
> **Prerequisites:** set up (3)
> **Definitions:** refers to (1), is called (1)
> **Warnings:** note that (1)

#### Understanding the discriminator architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=0)** In this movie, we'll set up the discriminator that we'll train to classify real images and fake images.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=8)** And as we've mentioned before, this discriminator is going to have an easy job to do.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=12)** This discriminator will use strided convolutional layers that can be used for downsampling or upsampling your input images.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=20)** Strided convolutions allow the network to learn its own spatial down or upsampling.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=26)** The discriminator will not be using any pooling layers.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=30)** The implementation of the discriminator is taken from this PyTorch DCGANs Tutorial.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=36)** We'll be using the same architecture for the discriminator as in this tutorial, which in turn has been inspired from the original DCGANs paper.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=46)** The dataset that we'll be working with is different.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=50)** All right, we are ready to set up the discriminator for classification.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=53)** Let's specify a few parameters. nc = 3 specifies the number of channels in our input image.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=60)** For color images, this is equal to three.
>
> **[1:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=62)** ndf is the variable that we'll use to represent the size of the feature maps in the discriminator.
>
> **[1:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=68)** The number of feature maps that we produce at the output will essentially be a multiple of this ndf, and the learning rate we'll use for the optimizer in the discriminator is 0.0002.
>
> **[1:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=80)** Now, the original deep convolutional GANs paper recommended a certain way to initialize the weights or the parameters of the model before you start training, and this function essentially defines that.
>
> **[1:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=93)** The authors of the original paper specify that all weights should be randomly initialized from a normal distribution, with a mean of 0 and a standard deviation of 0.02.
>
> **[1:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=104)** This weights_init function takes in a neural network model as an input, and reinitializes all its weights to match the criteria set by the original paper.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=116)** On line 6, we initialize the weights of the convolutional layers and on lines 9 and 10, we initialize the weights of the batch normalization layers that exist in the discriminator.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=127)** Next, let's set up the discriminator itself.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=130)** The discriminator class inherits from the nn.Module base class, and the neural network that makes up the discriminator is defined in the init function.
>
> **[2:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=141)** You can see on line 5 that this neural network is simply a sequential stacking of layers.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=147)** The layers include convolutional layers, batch normalization layers, and the LeakyReLU activation function.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=154)** Now, the first strided convolutional layer is on lines 7 through 14.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=159)** Observe, just above it, I've specified in a comment the dimensions of the input that's fed into this layer.
>
> **[2:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=166)** These are the dimensions of the input images in our training data set, number of channels multiplied by height and width, 64 x 64.
>
> **[2:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=175)** For the first convolutional layers, the number of channels at the input in channels is equal to nc.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=181)** This is 3, remember. The out_channels defines the number of feature maps generated at the output, and that's equal to ndf for the first layer.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=190)** Remember this is 64.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=192)** The kernel size we use is 4, we have a stride of 2 for the kernel, and a padding of 1, and no bias, bias is false.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=200)** This convolutional layer is followed by a LeakyReLU activation function with a slope of 0.2.
>
> **[3:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=207)** In practice, the LeakyReLU activation, which has a small negative slope, has been shown to greatly improve the performance of the discriminator in a GAN. The LeakyReLU greatly mitigates the problem of dying or saturated neurons.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=224)** The first strided convolutional layer with the LeakyReLU activation is followed by a second one.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=230)** The second convolutional layer is defined on lines 18 through 25.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=234)** Notice the size of the input that's passed into this second convolutional layer, (ndf) x 32 x32.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=242)** The output of the previous convolutional layer is an input to this convolutional layer, and the output of a convolutional layer we know can be computed using a formula that includes the size of the original image, the stride, the padding, and the size of the kernel. in_channels, that is, the number of channels in the input is equal to ndf, and this should match the out_channels of the previous layer defined on line 9, that was also equal to ndf.
>
> **[4:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=269)** This layer will produce many more feature maps, ndf multiplied by 2, so 128 feature maps.
>
> **[4:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=277)** The second convolutional layer is followed by batch normalization defined on line 26, which recenters the output of this layer to have a mean of zero and unit variance.
>
> **[4:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=288)** The use of batch normalization in the discriminator helps mitigate many problems that we encounter in training a GAN, problems of poor initialization.
>
> **[4:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=298)** Better propagation of gradients through the deeper layers of the model mitigates vanishing gradients and so on.
>
> **[5:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=305)** So the batch normalization layer is what we apply.
>
> **[5:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=308)** And then that's followed by the LeakyReLU activation.
>
> **[5:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=312)** The third stack of layers seen here at the bottom of the screen on lines 30 through 39, is essentially similar to the second stack, strided convolution, followed by batch normalization and LeakyReLU activation.
>
> **[5:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=325)** The in_channels of this layer on line 31 match the out_channels of the previous layer on line 20. And the comment on line 29 gives us the size of the input fed into this layer.
>
> **[5:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=337)** Observe that the height and width of the feature maps are getting smaller, they are now 16 x 16.
>
> **[5:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=343)** The strided convolutions are downsampling the image.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=346)** The fourth stack of layers is here at the bottom, defined on lines 42 through 51.
>
> **[5:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=352)** Again, these are similar to the previous stack and need no explanation.
>
> **[5:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=357)** And finally, we have the last convolutional layer of the discriminator defined on lines 54 through 61.
>
> **[6:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=363)** This is not followed by a batch normalization layer as per the original paper.
>
> **[6:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=369)** The out_channels here is equal to one because the classifier produces a single output, a probability score indicating whether the input image was real or fake.
>
> **[6:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=380)** Observe the Sigmoid activation at the final layer of the discriminator.
>
> **[6:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=385)** The sigmoid activation is used because it generates output in the range 0 to 1, which is essentially a probability score for the input image.
>
> **[6:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=395)** The forward function here in this class is the forward pass through the neural network.
>
> **[6:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=399)** The input x is simply passed through the discriminator to generate a probability.
>
> **[6:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=405)** Now let's instantiate the discriminator.
>
> **[6:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=408)** Initialize its weights using the weights_init function that we had defined, and print out the layers of the discriminator.
>
> **[6:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=415)** Just to note, on line 1, we move the discriminator model's parameters to the GPU device, which is what we'll use for training.
>
> **[7:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/understanding-the-discriminator-architecture?u=76281980&t=423)** At this point, we have the discriminator set up and ready to be trained as a classification model.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (3), module (1), class, (1), finally, (1)
> **Code Identifiers:** out_channels (4), weights_init (2), in_channels (2)
> **Prerequisites:** set up (4), initialization (1)
> **Env Vars:** gan (2), gpu (1)
> **Versions:** 0.0002 (1), 0.02 (1), 0.2 (1)
> **Analogies:** similar to (2)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)

#### Training a discriminator on bad fakes
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=0)** We have the discriminator set up, now it's time to train it.
>
> **[0:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=4)** The loss function that we'll use is the BCELoss or the Binary Cross Entropy loss.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=10)** The BCELoss is a loss function that measures the difference between two probability distributions. In the context of binary classification, the two probability distributions are the predicted probabilities of the positive class and the negative class, as compared with the actual labels in the data.
>
> **[0:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=27)** Next, we use the Adam optimizer to train the discriminator.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=32)** The Adam optimizer has an adaptive learning rate that has been shown to work well for a GAN. We're only training the discriminator, but we are using the same optimizer and the same parameters like we would for the discriminator when it's part of a GAN.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=46)** Next, let's set up a training loop to train our classification model.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=51)** Now we'll train just for two epochs.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=53)** You can see the for loop for epochs on line 1.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=56)** We only train for two epochs because that's more than sufficient for the discriminator to learn from the data.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=61)** That's because the discriminator's task is super easy in this example. Our fake images are pretty terrible, and it's going to be very easy for the discriminator to tell them apart from the real images.
>
> **[1:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=73)** At the beginning of GAN training, this is what is true.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=76)** The generator generates pretty bad-looking fake images, and the discriminator finds it easy to tell them apart.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=83)** On line 5, we have the nested for loop to iterate over the batches in our training data. We access the input data and the corresponding labels and move them all to the GPU where we are training.
>
> **[1:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=95)** This is on lines 8 and 9.
>
> **[1:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=97)** We call optimizer.zero_grad() to zero out the parameter gradients on the discriminator, and then we make a forward pass through the discriminator on line 15.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=108)** This will give us the predictions from the discriminator that we then use to compute the loss on line 17. We compare the predictions from the discriminator with the actual labels on the data. loss.backward() will make a backward pass through the discriminator model to compute gradients and optimizer.step() will use those gradients to update the model's parameters, and this is, of course, done for every batch and every epoch.
>
> **[2:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=136)** We compute the running loss, and for every 20 batches, we print out the epoch, the current step, and the current loss of the classification model.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=145)** Let's start the training process.
>
> **[2:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=147)** The training will go through fairly quickly because we are only training for two epochs.
>
> **[2:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=151)** We have very little data, and we are also using a GPU.
>
> **[2:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=155)** Once training is complete, let's take a look at some of the predictions made by the discriminator classification model.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=163)** We get the first batch of data from our testloader.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=168)** I'm going to display the ground truth labels first, the actual labels for all of the images in this first batch of test data.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=176)** Let's take a look at the output that we'll display in the form of a grid.
>
> **[3:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=180)** Now here you can see the original labels for the real and fake data.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=185)** Next, let's get predictions from the discriminator.
>
> **[3:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=189)** Make a forward pass through the discriminator using this first batch of images.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=194)** The output here will be probability that a particular image is real.
>
> **[3:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=199)** Let's use torch.round to get the predictions in the form of 0/1 values.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=205)** Once again, we'll display a grid of images from this batch and output the predictions of the discriminator.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=212)** Let's take a look.
>
> **[3:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=213)** And here you can see that the discriminator gets everything correct.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=217)** The first image on the top left is a bad fake.
>
> **[3:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=219)** It has been labeled as such.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=221)** The second image is real.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=222)** It has been labeled as such.
>
> **[3:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=223)** The third image and fourth image both bad fakes.
>
> **[3:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=226)** And again, all of the labels are correct.
>
> **[3:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=229)** Let's compute the accuracy of the discriminator on the test data.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=234)** We'll keep track of the number of correct predictions and the total number of predictions in the variables initialized on lines 1 and 2.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=240)** Turn off gradients for the discriminator network with torch.no_grad().
>
> **[4:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=245)** Iterate over batches of data in the test loader.
>
> **[4:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=248)** Get the images and labels, move them to the GPU by calling to(device).
>
> **[4:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=252)** This is the code on line 7 and 8.
>
> **[4:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=255)** Get the probability scores from the discriminator on line 11, convert that to predicted labels on line 13, and then basically, keep track of the total predictions and the correct predictions.
>
> **[4:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=267)** The correct predictions are where the predictions from the model match the ground truth labels.
>
> **[4:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=273)** We compute this on line 16. And finally, print out the accuracy of the network.
>
> **[4:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=278)** And here you can see that it's 100 percent.
>
> **[4:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=280)** This shouldn't have been surprising to you.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=283)** We made the discriminator's task way too simple by using fake images that were pretty terrible.
>
> **[4:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=289)** Next, I set up some code to compute the accuracy of the discriminator on real labels and fake labels.
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=295)** Initialize two dictionaries called correct_pred and total_pred and initialize the value 0 for each of the classes in correct_pred and total_pred.
>
> **[5:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=307)** So these two dictionaries will have values of zero for the keys, bad fake images, and real images.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=314)** You already are familiar with the code that you see on line 6 through 15.
>
> **[5:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=318)** That's when we get the predictions from the discriminator.
>
> **[5:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=322)** On lines 18 through 21, we compute the correct predictions for each output class or category, and on lines 24 through 26, we print out the accuracy score that we've computed for each output class or category.
>
> **[5:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=338)** And once again, this is 100 percent.
>
> **[5:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=340)** Our discriminator has superlative performance.
>
> **[5:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=344)** Well, that's what happens when you give it too easy of a job to do.
>
> **[5:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-bad-fakes?u=76281980&t=348)** And this is how the discriminator works in the early stages of GAN training, when the generator basically is not capable of generating very good fakes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (3), function (2), class, (1), super (1)
> **Env Vars:** gan (4), gpu (3)
> **Code Identifiers:** correct_pred (2), total_pred (2), zero_grad (1), no_grad (1)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (3)
> **Definitions:** is a  (2)

#### Training data for discriminator good fakes and real images
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=0)** In this demo, we will train the discriminator as a classification model again, but we'll train with fake images that are much better than the fake images that we used earlier.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=9)** I've called them good_fake_images.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=11)** Here I am in the same Google Drive folder as before, My Drive, ai_workshop_dcgans, anime_classification.
>
> **[0:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=18)** I have two sets of images here.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=20)** I have the real images that we used in the earlier demo.
>
> **[0:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=23)** You've already seen that, so I won't show you those again.
>
> **[0:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=26)** And then I have some good_fake_images.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=29)** Notice the new folder here called good_fake_images.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=32)** Now if you click through to this good_fake_images folder, you will find that the fakes that have been generated here in this folder are much better than the previous fakes.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=42)** As you can see, these are fakes from epoch 55 of training a GAN.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=47)** The generator that created these was trained for a longer time and hence produced better fakes.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=53)** And you will see this consistently across all of the images.
>
> **[0:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=57)** The fakes are much better though in many cases, you can tell that these are still fakes, but there are so much better than the fakes that we saw in the earlier demo.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=66)** Let me change the sorting here in drive so we'll see the generated images from a later epoch, epoch 70 of training.
>
> **[1:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=74)** And these images are very realistic.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=77)** You must admit that these are pretty good fakes.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=81)** By using these good fakes, we are mimicking the process later on in GAN training, when the fakes generated by the generator progressively get better, and the discriminator finds it harder and harder to identify those fakes.
>
> **[1:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=95)** Let's go back to our Colab notebook, where we'll train the discriminator again.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=99)** The name of the notebook is TrainingDiscriminatorOnGood FakesAndRealImages.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=103)** In order to speed things up, we'll train using a GPU.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=106)** Make sure that your runtime type is set to T4 GPU.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=111)** Go ahead and save this, and you'll find that the code that we use is very similar to the code that we set up in the previous demo.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=119)** So I'm not going to walk you through every cell of code that I execute.
>
> **[2:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=122)** The import statements, connecting to Colab, mounting Google Drive so that we can access our data, reading in the good fakes and the real images, transforming the data, splitting the data into training data and test data, and finally setting up the trainloader and testloader in order to access our train and test datasets.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=146)** Before we move on to training the discriminator on this new data set, let's take a quick look at the real and fake images in the first batch.
>
> **[2:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=154)** Once again, we'll use the display utility function and use make_grid to display the images in the form of a grid.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=161)** Observe the labels that correspond to the images.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=163)** You can see that the fakes are pretty good.
>
> **[2:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=166)** For example, on the top left, the second from the top left, that's a fake image that looks pretty realistic to me.
>
> **[2:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=172)** The third image from the top row, that's a fake image as well.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=176)** The fourth image from the bottom row, that's also a fake image.
>
> **[3:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=180)** Those are fakes that look pretty realistic.
>
> **[3:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-data-for-discriminator-good-fakes-and-real-images?u=76281980&t=183)** The discriminator is definitely going to have a harder time with these images.

> [!info]- Semantic Content
>
> **Code Identifiers:** good_fake_images (4), ai_workshop_dcgans (1), anime_classification (1), make_grid (1)
> **Code Keywords:** let (3), this, (1), function (1)
> **Env Vars:** gan (2), gpu (2)
> **CLI Commands:** find (2), make (1)
> **Tools:** colab (2)
> **Analogies:** similar to (1), for example (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)

#### Training a discriminator on good fakes
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=0)** Next, we'll actually train the discriminator.
>
> **[0:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=3)** And again, the parameters and the steps we follow are the same as in the previous demo.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=8)** So I won't repeat the same information over and over again.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=12)** Here is where we set up variables with the number of channels, the size of feature maps in the discriminator, and the learning rate for the optimizer.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=21)** Next, we set up the function to initialize the weights of the discriminator based on the recommendation of the original DCGANs paper.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=29)** Then, of course, we instantiate the class for the discriminator.
>
> **[0:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=32)** This is the same discriminator network that we saw in the previous demo, and that we explored in a lot of detail, so I won't go through the explanations again.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=42)** Notice that we have convolutional layers, batch normalization layers, and the LeakyReLU activation, and the last convolutional layer of the discriminator, of course, has the sigmoid activation.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=52)** Now, after we've set up the discriminator, let's instantiate the discriminator and move it to the device that we'll use for training, initialize its weights.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=61)** And here is what the discriminator looks like.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=63)** We'll use the binary cross-entropy loss function for the discriminator and the Adam optimizer to update the weights of the model parameters.
>
> **[1:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=72)** We'll set up the training loop exactly as we did before.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=76)** Make sure you move the images and labels to the GPU device, and we'll be training on good fakes and real images.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=84)** Now training will run for two epochs, and at the end of two epochs, we'll see how the discriminator performs.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=91)** Let's quickly look at some of the images from the first batch of the test data, along with the ground truth labels for those images. You can see, these are the images and these are the ground truth labels.
>
> **[1:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=103)** Let's take a look at the predictions from the model, make a forward pass through the discriminator, get the outputs.
>
> **[1:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=109)** Make sure you round the output so you get classes or categories as predictions.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=114)** And then we'll display the predictions from the model, along with a grid of images from the first batch of data.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=121)** Now, I found it hard to tell how well the discriminator did, just by looking at the categorizations from the discriminator.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=128)** Let's actually compute the accuracy of the discriminator using the same code as in the previous demo, and you can see that the discriminator's accuracy has fallen to 95 percent.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=138)** Now mind you, for a normal classification model, this is still great, but you can see how the accuracy, which was 100 percent when we actually had bad fake images has fallen to 95 percent, now that the fakes generated are better.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=152)** Again, I'll use the same code as in the previous demo to get the accuracy for each category or class.
>
> **[2:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=160)** So the accuracy for the good fakes and the accuracy for the real images.
>
> **[2:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=164)** One change I've made in the code here is to set up two variables; all_labels and all_predictions.
>
> **[2:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=170)** all_labels will hold all of the ground truth labels from the test data, and all_predictions will hold all of the predictions made by the model on the test data.
>
> **[2:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=179)** And within the loop where I make the predictions on line 16 and 21 respectively, I populate the all_labels and all_predictions lists.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=188)** Let's take a look at how this model performs on the real and fake images.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=194)** The accuracy for the good fakes is 96 percent.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=197)** That means 4 percent of those images were misclassified as real images, and the accuracy for real images is 95.6.
>
> **[3:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=204)** So 4.4 percent was misclassified as fake.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=209)** So really, the improvement in the generator is pretty clear here.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=212)** Now I'm curious about the images that the discriminator wasn't able to classify correctly, where the discriminator got things wrong.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=220)** In order to do that, I'm going to set up a helper function here called show that takes in an image and a title and just displays that to screen.
>
> **[3:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=229)** Next, let's actually try to identify the misclassified images from the model.
>
> **[3:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=235)** The first for loop iterates over all batches of data in the testloader, that is, the test data set.
>
> **[4:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=241)** The second for loop iterates over all of the predictions of the model, which is stored in an all_predictions variable.
>
> **[4:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=249)** We get the predicted class from the model and the actual class from the ground truth labels, and then we only display those images where the predicted class is not equal to the actual class.
>
> **[4:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=261)** Let's run this and take a look at the mispredictions from the discriminator.
>
> **[4:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=264)** The model predicted that this was a fake image, but this is actually a real image.
>
> **[4:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=269)** Here is another one where the model predicted that this was a real image, but this is actually a fake.
>
> **[4:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=275)** Doesn't seem like a great fake, but the model still got it wrong.
>
> **[4:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=278)** Again, here is a prediction from the model of fake, but this was a real image, and there are many more here.
>
> **[4:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/training-a-discriminator-on-good-fakes?u=76281980&t=285)** And this actually makes it very clear that as the generator generates better and better fakes, during the training process, the discriminator performance will get worse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (3), class. (2), pass (1)
> **Code Identifiers:** all_predictions (4), all_labels (3)
> **Prerequisites:** set up (6)
> **CLI Commands:** make (4)
> **Versions:** 95.6 (1), 4.4 (1)
> **Env Vars:** gpu (1)
> **Definitions:** is a  (1)


### 3. Training a Deep Convolutional GAN

#### Generator and discriminator
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=0)** Now that we've understood convolutional layers and pooling layers, let's do a quick overview of the generator and the discriminator adversaries in a generative adversarial network.
>
> **[0:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=11)** This is just to refresh our memory.
>
> **[0:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=13)** Here is an architectural overview of the GAN model.
>
> **[0:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=17)** Notice the components, the generator, and the discriminator.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=21)** The objective or the role of the generator in this network is to generate samples of fake data, and in order to do so, the generator takes in some random noise at the input.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=33)** In addition to train a GAN, you also need a database of real instances.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=39)** Now we are going to be training our GAN using images, so let's just take images as our example.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=44)** This data set of real images will make up our training data, and the generator needs to produce images that look like these real images. The real images from the real database, and the fake images generated by the generator are both fed in as input to the discriminator.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=65)** Now the discriminator has to identify what images are real and what images are fake.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=71)** It needs to output a probability score for each image, indicating whether it's real or fake.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=77)** Essentially, the role of the discriminator is just that of a traditional classification model; identify real and fake images and categorize them as such.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/generator-and-discriminator?u=76281980&t=88)** In order to have the generator generate images at its output, the generator needs some latent noise which it uses to create data, and this all put together gives us the architecture of a GAN.

> [!info]- Semantic Content
>
> **Env Vars:** gan (4)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)

#### Deep convolutional GANs (DCGANs)
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=1)** In this movie, let's understand what a deep convolutional GAN is and how it's different from a regular GAN.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=8)** A deep convolutional generative adversarial network is a GAN where each adversary is a convolutional neural network, and these CNNs have certain architectural constraints.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=20)** The architectural constraints are so set up that they help the adversarial pair learn a hierarchy of representations which help create better-generated images.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=30)** Now, deep convolutional GANs build upon the original GAN paper.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=34)** They use the same principle as GANs, the generator and discriminator as adversaries.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=40)** The only difference is in the architecture for the neural networks that we use for the generator and the discriminator.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=47)** Both neural networks are architecturally constrained convolutional neural networks.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=53)** The constraints introduced in these architectures help the CNN be more stable during the training process of the GAN.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=60)** The authors of the paper on deep convolutional GANs found that it was hard to use traditional CNN architectures for the generator and the discriminator.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=71)** They encountered difficulties in scaling GANs using these architectures, which is why they developed this constrained architecture that they call the deep convolutional GAN.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=81)** The original paper that introduced deep convolutional GANs was published in 2016. So this was about two years after the original paper on GANs.
>
> **[1:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=91)** The deep convolutional GANs paper is by Alec Radford and other authors.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=96)** And if you're interested in finding this on [arxive.org](https://arxive.org), the link is right here.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=101)** Here are the changes made to the original convolutional neural network architecture.
>
> **[1:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=106)** The pooling layers that we use in traditional CNNs are replaced with strided convolutions.
>
> **[1:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=113)** Strided convolution layers allow the network to learn its own spatial downsampling of input feature maps.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=121)** Another change is the use of batch normalization layers in both the generator as well as the discriminator.
>
> **[2:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=128)** Batch normalization stabilizes the learning process of the GAN by normalizing the input to each unit to have zero mean and unit variance.
>
> **[2:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=139)** In typical CNN architectures, the convolutional and pooling layers are followed by fully connected deep layers, and deep convolutional GANs actually eliminate these fully connected layers.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=152)** The authors found that by eliminating these deep layers, they could connect the output of the generator directly to the input of the discriminator, and that worked well.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=163)** The authors also found that the results were good when they used the ReLU activation in the generator for all layers except the last convolutional output layer, and that used the Tanh activation function.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=176)** These activation functions help the model to learn more quickly to saturate and cover the color space of the training distribution.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=184)** And finally, they used the LeakyReLU activation in the discriminator and found that this works well for high-resolution modeling.
>
> **[3:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=192)** Now I'll just dive into the first three architectural constraints in a little more detail, starting with replacing the pooling layer with strided convolutions.
>
> **[3:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=202)** The authors found that global average pooling increased the stability of the model but hurt model convergence speed.
>
> **[3:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=210)** Instead, they just used strided convolutions in the discriminator to downsample inputs and transposed convolutions in the generator to upsample inputs.
>
> **[3:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=220)** Another important constraint, they added, was the use of batch normalization layers in both the generator and discriminator.
>
> **[3:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=228)** Batch normalization recenters the output of each strided convolution and transposed convolution layer to have a mean of zero and unit variance, and this mitigates a lot of issues that are encountered while training a GAN.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=243)** Batch normalization helps deal with issues that might arise due to poor initialization of the network.
>
> **[4:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=250)** Batch normalization also helps with gradient flow through models that have deeper layers, and it mitigates the problem of vanishing gradients that can stall the model training process.
>
> **[4:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=261)** Batch normalization also helps prevent mode collapse.
>
> **[4:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=265)** This is where the generator learns a single data point that effectively folds the discriminator, and then collapses to just produce that data point over and over again.
>
> **[4:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=276)** Batch normalization is applied to all layers except the generator output layer and the discriminator input layer.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=283)** When batch normalization was used with these layers as well, this resulted in sample oscillation and model instability.
>
> **[4:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=291)** Another change was eliminating the fully connected layer at the end of the convolutional layers, and this greatly improved model performance.
>
> **[5:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=300)** The first layer of the generator in the GAN takes in a uniform noise distribution, Z, as the input, which is then reshaped to a four-dimensional tensor, and this is the start of the convolutional stack.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=314)** Here is the generator architecture that was proposed in the deep convolutional GANs paper.
>
> **[5:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=320)** We'll essentially be mimicking the architecture.
>
> **[5:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=323)** Only the depths of the feature map in the individual layers might vary.
>
> **[5:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=327)** Observe the latent noise that is fed into the generator, which is then shaped into a four-dimensional tensor.
>
> **[5:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=334)** The feature maps in the tensor get larger and larger as they pass through the layers.
>
> **[5:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=339)** Start with 4 x 4 images, then 8 x 8, then 16 x 16, and then 32 x 32.
>
> **[5:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=346)** And finally, we end up with a 64 x 64 three-channel image, that is the generated image from the generator.
>
> **[5:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=354)** The architecture for the discriminator is a mirror image of that for the generator.
>
> **[5:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/deep-convolutional-gans-dcgans?u=76281980&t=359)** The discriminator takes in a multi-channel image at the input, it downsamples the input using strided convolutional layers till finally it produces a single output, the probability score of whether the input image was real.

> [!info]- Semantic Content
>
> **Env Vars:** gan (9), cnn (3)
> **Code Keywords:** finally, (2), let (1), function (1), pass (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (1), initialization (1)
> **URLs:** [arxive.org](https://arxive.org) (1)

#### Setting up data for GAN training
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=0)** Now that we've seen how the discriminator performs on good fakes and bad fakes, it's time for us to train our Generative Adversarial Network.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=8)** Let me show you the data that we are working with.
>
> **[0:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=10)** Here I am in my ai_workshop_dcgans folder on Google Drive.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=15)** This is right under the home directory, My Drive, and I'm within the anime_classification subfolder.
>
> **[0:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=21)** And here I have a zip file, anime_images.zip.
>
> **[0:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=24)** This is a file with a much larger corpus of anime images that we'll use to train our GAN.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=30)** Now let's head over to our Colab notebook, TrainingDCGANS OnAnimeFacesData.
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=36)** This training has to be performed on a GPU, otherwise, it'll take a very long time on a CPU.
>
> **[0:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=41)** Let's make sure that our runtime type is set to T4 GPU.
>
> **[0:46](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=46)** Make sure you have the selection on in your notebook before you run any code.
>
> **[0:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=51)** With that done, let's set up the imports for all of the PyTorch libraries that we'll be using.
>
> **[0:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=56)** You're familiar with most of the libraries here.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=59)** One thing that might be new is on line 11, the tqdm library.
>
> **[1:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=63)** This is just a library that shows a progress bar.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=67)** Very useful if you want to visualize the progress of training.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=71)** We'll, of course, have to mount Google Drive so that it's accessible from our notebook.
>
> **[1:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=76)** You're familiar with this code.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=77)** You'll have to authenticate yourself with your Google account in order to be able to mount Drive.
>
> **[1:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=84)** Once Drive is mounted, we'll need to extract the zip files to access the images training data, and you can do this using the unzip command.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=94)** The path that you see here is the absolute path to the anime images.zip file that we had uploaded to Google Drive.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=102)** The -d '/content/images' will extract all of the contents of the zip to this folder on my cloud-hosted notebook.
>
> **[1:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=113)** Running this command will extract the files.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=116)** It will inflate the zip file so that it's available right here within your notebook.
>
> **[2:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=122)** And you can actually view these images if you click on the little folder icon off to the left.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=126)** This will show you the folder is accessible from here in your notebook.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=130)** Notice that we have a separate images folder here.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=133)** Under that, there is another images subfolder.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=135)** If you expand that, that's where you'll find the images of our training data.
>
> **[2:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=140)** Let's get started with the setup that we need for training.
>
> **[2:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=144)** First, we need to initialize the device that we'll be using. Because we have access to the GPU, the device will be a CUDA device.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=152)** Next, we instantiate the dataloader for the training data.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=157)** For each batch of training, we'll use 64 images.
>
> **[2:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=159)** That's the batch size.
>
> **[2:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=160)** Image size will be 64 x 64.
>
> **[2:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=163)** On lines 5 through 11, we create the anime_faces_dataset.
>
> **[2:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=167)** We load in the data from our image folder, /content/images, and apply transformations to resize the images, convert the images to a tensor representation and normalize the images.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=181)** These transforms are the same ones that we used earlier when we were training the discriminator as a classification model.
>
> **[3:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=188)** Once we have the data set, we set up the dataloader.
>
> **[3:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=191)** This is a code on lines 14 through 20.
>
> **[3:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=193)** Shuffle = True for this training dataloader, and drop_last = True will drop the last batch of images if the batch size is not a full 64, for the last batch.
>
> **[3:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=207)** If you compute the length of the training dataloader, that will tell us how many batches we'll have for each epoch of training.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=214)** And you can see it's 993.
>
> **[3:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=216)** Before we start the training process, let's quickly look at one batch of images.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=221)** We'll use the make_grid utility once again to display one batch in the form of a grid.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=227)** And you can see that we have to perform that little transpose of dimensions so that the images are in the form that can be displayed by matplotlib.
>
> **[3:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=236)** And here is our anime faces training data.
>
> **[4:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=240)** We are familiar with this data.
>
> **[4:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-data-for-gan-training?u=76281980&t=242)** We'll now use it to train a GAN, which is much more exciting than just training a discriminator.

> [!info]- Semantic Content
>
> **Env Vars:** gpu (3), gan (2), cpu (1), cuda (1)
> **Code Keywords:** let (6)
> **Code Identifiers:** ai_workshop_dcgans (1), anime_classification (1), anime_images (1), anime_faces_dataset (1), drop_last (1)
> **Prerequisites:** set up (2), make sure you have (1), setup (1), before we start (1)
> **CLI Commands:** make (2), unzip (1), find (1)
> **Exercise Files:** zip file (3)
> **Definitions:** is a  (2)
> **Tools:** colab (1)

#### Setting up the generator and discriminator
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=1)** We'll now define the neural networks that make up the generator and the discriminator.
>
> **[0:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=5)** But before that, here is the weights_init function that we've seen earlier.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=9)** It takes in a model as an input argument, and it initializes the weights of the model parameters using the criteria specified in the original DCGANs paper.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=20)** The author suggests that model weights should be randomly initialized from a normal distribution with mean equal to zero and standard deviation equal to 0.02.
>
> **[0:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=31)** And that's what we do with every convolutional layer.
>
> **[0:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=34)** That's the initialization on line 5. On line 7 and 8, we initialize the weights for the batch normalization layer.
>
> **[0:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=42)** The model weights are initialized using a normal distribution with a mean of one and standard deviation of 0.02, and the biases are initialized with the zero constant.
>
> **[0:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=53)** Next, we set up a bunch of variables for the various parameters that we'll use to construct our generator and discriminator networks.
>
> **[1:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=60)** nc we've seen earlier, number of channels in the training data.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=65)** nc = 3 to represent color images.
>
> **[1:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=68)** nz is the size of the latent noise vector that is fed into the generator so that it can produce an image using that noise.
>
> **[1:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=77)** nz = 100.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=79)** The size of the feature maps in the generator, ngf is 64, and the size of the feature maps in the discriminator is ndf = 64.
>
> **[1:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=88)** We'll train the Generative Adversarial Network for 50 epochs of training, using a learning rate of 0.002.
>
> **[1:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=96)** Now I've specified the number of GPUs that we have.
>
> **[1:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=100)** It's just one.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=101)** Let's set up the device that we'll use for training.
>
> **[1:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=105)** If CUDA is available, that is, if GPU is available, the device will be set to cuda, otherwise, the device will be a CPU.
>
> **[1:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=112)** Since we have a GPU, the device is cuda.
>
> **[1:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=116)** The GAN structure that we'll use for both the generator architecture and the discriminator architecture is from this PyTorch tutorial here at this link.
>
> **[2:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=126)** And this tutorial is basically inspired from the GAN network used in the original deep convolutional GAN paper.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=134)** We are now ready to define the generator neural network.
>
> **[2:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=137)** Remember, the generator takes in latent noise as an input and produces an image at the output, and the generator uses the transposed convolutional layers that we discussed earlier.
>
> **[2:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=149)** The generator class inherits from the nn.Module base class, and within the init method is where we define its layers.
>
> **[2:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=156)** The layers are just a sequential stack of layers.
>
> **[2:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=160)** Each stack of layers include a transposed convolutional layer, followed by batch normalization, followed by ReLU activation.
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=169)** The in_channels to the first transposed convolutional layers is nz, that is, the size of the latent noise variable.
>
> **[2:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=177)** We had initialized this to 100.
>
> **[2:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=179)** The out_channels represent the depth of the feature maps generated by this transposed convolutional layer.
>
> **[3:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=185)** The input noise variable is projected and reshaped into a three-dimensional convolutional spatial representation.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=194)** The out_channels produced by this first layer is very, very deep, ngf * 8.
>
> **[3:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=200)** We've specified a kernel size of four, stride of one, padding of zero, and a bias = false.
>
> **[3:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=206)** The transposed convolutional layer is used to upsample the input that is fed to it.
>
> **[3:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=212)** The batch normalization layer will center the output of the transposed convolution layer to be at zero with a variance of one.
>
> **[3:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=221)** And as we've discussed earlier, this mitigates a lot of problems that we encounter with GAN training.
>
> **[3:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=227)** And finally, we have the ReLU activation.
>
> **[3:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=229)** Now, the comments before each stack of layers tells you the shape of the input going into that layer. So the first layer, we just have the noise variable, Z.
>
> **[3:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=239)** This is the comment on line 6.
>
> **[4:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=241)** The output of the first layer is fed into the second layer, and that has dimensions ngf x 8 and 4 x 4 feature maps.
>
> **[4:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=250)** The in_channels of the second layer correspond to the out_channels of the previous layer.
>
> **[4:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=255)** in_channels here is equal to ngf * 8.
>
> **[4:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=258)** Observe that the out_channels is ngf * 4, that is, the out_channels is shallower.
>
> **[4:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=266)** The output of this layer pass through batch normalization, and ReLU activation is fed into the next transposed convolutional layer.
>
> **[4:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=274)** The in_channels on line 31, ngf * 4, matches the out_channels of the previous layer defined on line 21.
>
> **[4:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=283)** You can see the other layers that have been defined here.
>
> **[4:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=287)** Observe that the inputs to each layer gets larger and larger and shallower and shallower till finally we have the last transposed convolutional layer.
>
> **[4:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=298)** This layer does not use batch normalization and has the Tanh activation function.
>
> **[5:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=304)** The Tanh activation function produces an output in the range -1 to 1, and these lie in the pixel intensity ranges that we want for the generated image.
>
> **[5:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=314)** The output of the generator produces an image and the state size here is a number of channels by 64 by 64.
>
> **[5:22](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=322)** That is essentially the dimensions of a single image generated by the generator.
>
> **[5:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=328)** And it is this image that will be fed into the discriminator.
>
> **[5:31](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=331)** Let's now instantiate our generator network and move all of its model parameters to our GPU device.
>
> **[5:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=339)** Also, apply the weights_init function to initialize the model weights.
>
> **[5:43](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=343)** Once the generator has been initialized, we'll set up the discriminator.
>
> **[5:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=347)** We've already seen the architecture of the discriminator model in a lot of detail, so I won't belabor the point here.
>
> **[5:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=354)** Notice the strided convolutional layers with LeakyReLU activation and batch normalization.
>
> **[6:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=360)** The discriminator is the same discriminator that we've used before, and the output of the discriminator is a probability score indicating whether this is a real image or a fake one.
>
> **[6:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-generator-and-discriminator?u=76281980&t=371)** I'll now instantiate the discriminator and initialize the weights of the discriminator as well.

> [!info]- Semantic Content
>
> **Code Identifiers:** out_channels (6), in_channels (4), weights_init (2)
> **Code Keywords:** function (4), let (2), module (1), class, (1), finally, (1)
> **Env Vars:** gan (4), gpu (3), cuda (1), cpu (1)
> **Prerequisites:** set up (3), initialization (1)
> **Versions:** 0.02 (2), 0.002 (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)

#### Output from an untrained generator and discriminator
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=0)** Now that we have our generator and discriminator set up, let's take a look at what a sample output from each of these modules looks like.
>
> **[0:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=9)** Now z here is the random noise variable that I initialize to feed into the generator network.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=15)** Observe that I've used a batch size of 64 for the latent noise variable.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=19)** So we'll have 64 noise variables, each having a dimensionality of 100 that we'll use to generate 64 images.
>
> **[0:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=27)** We then pass z in to our untrained generator model, and this will generate a batch of 64 images.
>
> **[0:35](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=35)** Now remember that these 64 images are unlikely to be very good.
>
> **[0:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=39)** In fact, they'll be terrible because the generator has not been trained at all.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=44)** So here is what the tensor of 64 images looks like.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=48)** Let's take a look at the shape of the generated output.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=52)** And you can get this by invoking the .shape member variable.
>
> **[0:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=57)** There are 64 images in this batch.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=59)** That's the first dimension.
>
> **[1:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=61)** Each image is a multi-channel, three-channel, 64 x 64 image.
>
> **[1:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=66)** Let's view one of these generated images to see what they look like.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=70)** So I'm going to look at the very first image at index 0.
>
> **[1:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=74)** I have to do a little bit of permutation to display that image in matplotlib.
>
> **[1:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=79)** You already know the details of that.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=81)** You can see that the generated image is a color image, but it's completely random.
>
> **[1:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=85)** It's a pretty bad fake.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=87)** Using similar code, let's take a look at the grid of generated images from this batch of 64.
>
> **[1:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=94)** Once again, there's a bit of normalization and dimension swapping that you have to perform to display this in matplotlib.
>
> **[1:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=101)** And here is what this batch of images from the untrained generator looks like.
>
> **[1:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=107)** If the untrained generator produces pretty bad images, the discriminator also makes pretty bad predictions.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=114)** I'll now get the predictions from the discriminator for this batch of generated images.
>
> **[1:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=119)** I'll just display the first 10 predictions here.
>
> **[2:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=122)** Remember, the predictions are in the form of probability scores.
>
> **[2:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=127)** For an untrained discriminator, all of the prediction probabilities that you see here are close to 0.5.
>
> **[2:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/ouput-from-an-untrained-generator-and-discriminator?u=76281980&t=133)** The discriminator is just guessing at random at this point.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (1)
> **Definitions:** is a  (2)
> **Versions:** 0.5 (1)
> **Prerequisites:** set up (1)

#### Setting up the GAN training loop
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=1)** We are now ready to train our deep convolutional generative adversarial network.
>
> **[0:06](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=6)** While training a GAN, the generator network and the discriminator network have to be trained together and we'll train them alternately in the same iteration.
>
> **[0:16](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=16)** Let's set up some parameters for training.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=19)** The loss function that we'll use is the binary cross entropy loss function, which will essentially mimic the minimax loss used to train a generative adversarial network.
>
> **[0:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=30)** We'll set up the loss functions in such a way that the discriminator will maximize the probability of classifying real images as real and fake images as fake, whereas the generator will maximize the probability of having the discriminator classify fake images as real.
>
> **[0:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=45)** I've initialized a batch of 64 fixed noise latent variables.
>
> **[0:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=50)** Now, every so often during the training of the generator, we'll look at some sample images to see how the generator is performing at that point in the training.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=59)** We'll use this fixed noise that I've set up here to generate images from the generator.
>
> **[1:05](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=65)** So it's the same noise variables, and we'll see how the generator performance changes over time.
>
> **[1:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=70)** Next, we set up the categories or classes that the discriminator uses to identify reals and fakes.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=78)** Real images will be labeled as 1, fake images will be labeled as 0.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=83)** We also set up Adam optimizers, one for generator training and another for discriminator training.
>
> **[1:30](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=90)** I'd mentioned just a bit ago that at periodic intervals during the training process, we'll have the generator generate images from fixed noise.
>
> **[1:39](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=99)** We'll display those images in the form of an image grid using this utility function here.
>
> **[1:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=104)** This function contains all the basic little transformations that you need to do to display the image grid in matplotlib.
>
> **[1:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=111)** Next, let's set up the training loop.
>
> **[1:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=115)** The list that I've initialized, G_losses and D_losses, will track the generator and discriminator losses over the iterations of training.
>
> **[2:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=124)** real_score_list and fake_score_list will keep track of the scores that were achieved by the discriminator on the real data and the fake data, respectively.
>
> **[2:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=134)** On lines 12 and 13, I make sure that both the generator as well as the discriminator are in training mode, so that the gradients will be updated.
>
> **[2:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=145)** I have two for loops running.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=146)** The first for loop on line 15 is to iterate over the number of epochs of training.
>
> **[2:32](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=152)** The second for loop on line 17 is to iterate over the batches in each epoch.
>
> **[2:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=157)** Every iteration will train the discriminator as well as the generator, starting with the discriminator.
>
> **[2:45](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=165)** On line 22, we zero out the gradients of the discriminator.
>
> **[2:49](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=169)** We get the first batch of real images on line 24 and generate the labels for those images.
>
> **[2:56](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=176)** Real labels, remember, equal to 1.
>
> **[2:58](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=178)** We'll make a forward pass with the real images through the discriminator to get the predictions from the discriminator.
>
> **[3:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=184)** This is on line 28. And then we compute the loss of the discriminator on the real images.
>
> **[3:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=190)** The code on line 32 is our loss function.
>
> **[3:14](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=194)** The discriminator will try to minimize this loss.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=197)** Discriminator wants to classify all real images as real, and we'll compare the predictions of the discriminator with the real labels.
>
> **[3:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=205)** We then compute gradients in the backward pass through the discriminator.
>
> **[3:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=209)** This is on line 35. And then we compute the score of the discriminator on the real images, D_x.
>
> **[3:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=217)** The discriminator wants the score to be as close to 1 as possible.
>
> **[3:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=222)** Next, in the same iteration, we generate a batch of fake images using the current parameters of the generator.
>
> **[3:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=230)** We initialize the noise to be used for the generator on line 40.
>
> **[3:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=234)** We pass this noise through the generator on line 42 and get the fake images generated using the current generator parameters.
>
> **[4:03](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=243)** We set up fake labels that will be all 0s for this batch, and on line 46, we pass the fake images through the discriminator to get the discriminator's predictions.
>
> **[4:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=255)** And then we compute the loss of the discriminator or the error of the discriminator on these fake images.
>
> **[4:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=261)** The objective of the discriminator is to classify fake images as fake, and the error that it will try and minimize is that its predictions are equal to the fake labels. On line 53, using the loss on the fake images, we make another backward pass through the discriminator to compute gradients.
>
> **[4:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=282)** The gradients computed will be accumulated or summed up with the previous gradients that we had computed on the batch of real images. And on line 55, we compute the score of the discriminator on the fake images.
>
> **[4:55](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=295)** The discriminator wants the score to be as close to zero as possible.
>
> **[4:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=299)** Our discriminator training is almost complete.
>
> **[5:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=302)** We compute the total error, which is just the sum of the error on the real and fake images.
>
> **[5:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=308)** And then we call optimizerD.step() to update the parameters of the discriminator.
>
> **[5:13](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=313)** Next, in the same iteration, we train the generator.
>
> **[5:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=317)** We zero out the gradients for the generator, and then we pass the fake images that the generator had previously generated through the newly updated discriminator.
>
> **[5:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=329)** Remember, the discriminator's parameters have just been updated in this iteration, and we use the new parameters to see what predictions the discriminator makes on the fake images that were previously generated.
>
> **[5:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=341)** Next, we compute the loss of the generator.
>
> **[5:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=344)** The objective of the generator is to get the discriminator to classify fake images as real.
>
> **[5:50](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=350)** On line 73, we compare the predictions of the discriminator with the real labels, and this is the error that the generator tries to minimize.
>
> **[6:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=361)** We compute gradients for the generator by making a backward pass through the generator, and we compute the score of the discriminator on the generated images.
>
> **[6:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=371)** This is on line 78.
>
> **[6:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=372)** The discriminator wants the score to be close to zero, the generator wants the score to be close to one.
>
> **[6:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=378)** And then we update the generator parameters using optimizerG.step().
>
> **[6:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=384)** At certain intervals during training, we'll print out the epoch, the current step, the losses from the generator and the discriminator, and the discriminator scores on real and fake data.
>
> **[6:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=396)** In addition, we'll use the fixed noise and pass that through the generator, this is the code on line 97, to get a batch of fake images at this point in the generator training. We'll then display those fake images in a grid format. And for each epoch of training, we keep track of the generator and discriminator losses, code on lines 100 and 101, and the discriminator's scores on real and fake data.
>
> **[7:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/setting-up-the-gan-training-loop?u=76281980&t=424)** We'll visualize this as an interesting plot after the GAN training is complete.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (8), function (5), let (2)
> **Prerequisites:** set up (7)
> **Code Identifiers:** real_score_list (1), fake_score_list (1), optimizerd (1), optimizerg (1)
> **CLI Commands:** make (3)
> **Env Vars:** gan (2)

#### Viewing GAN training results
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=0)** We set up the code for the training loop.
>
> **[0:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=2)** All we have to do is run this code and let's see how our GAN performs.
>
> **[0:08](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=8)** Now here we are in the very first epoch, epoch 0.
>
> **[0:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=12)** This is where the results are completely random, both the generator and discriminator weights are completely untrained.
>
> **[0:19](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=19)** Now let's iterate through a few epochs and then take a look at how these perform.
>
> **[0:25](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=25)** The next output will be at around 200 batches of training.
>
> **[0:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=29)** We are still on epoch 0, though you can't really see the epoch there.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=33)** If you look at the generated images now, you can no longer call them complete noise.
>
> **[0:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=37)** The generator has improved tremendously with just 200 iterations of training, but it's still pretty bad.
>
> **[0:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=44)** The discriminator's total loss is 0.412.
>
> **[0:47](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=47)** It's still low.
>
> **[0:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=48)** The generator loss is 7.63, quite high.
>
> **[0:52](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=52)** The real score of the discriminator is close to one, the fake score is close to zero, indicating the discriminator is doing a good job.
>
> **[0:59](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=59)** The fake score after discriminator update is also close to zero, so the discriminator is clearly better at this point in time.
>
> **[1:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=67)** Let's wait for a few more batches of training.
>
> **[1:09](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=69)** Training will run rather slowly.
>
> **[1:11](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=71)** The entire training took about 30 to 40 minutes on the GPU.
>
> **[1:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=75)** Here we are on epoch 0, step 600.
>
> **[1:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=78)** Notice the discriminator's loss, 0.523.
>
> **[1:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=81)** It's gone up just a bit.
>
> **[1:23](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=83)** The generator's loss still seems to be around the same, 7.788.
>
> **[1:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=87)** The discriminator is still doing well.
>
> **[1:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=89)** The real score is close to one, fake score close to zero, and the fake score after discriminator update also very close to zero.
>
> **[1:37](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=97)** The images generated are getting better, but still, they are not great.
>
> **[1:42](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=102)** Let's train for some more time and you can see that the images are gradually improving.
>
> **[1:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=108)** Let's run training for some more time, and let's look at an output at epoch2, step 600.
>
> **[1:54](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=114)** Notice the discriminator loss is going up, 0.619 now, generator loss is going down, 4.6.
>
> **[2:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=121)** If you observe the generated images at the bottom, they look pretty good, and you can see that the real score for the discriminator is coming down, it's 0.654.
>
> **[2:10](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=130)** The discriminator is finding it harder to identify real images.
>
> **[2:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=135)** Both fake scores are still close to zero.
>
> **[2:18](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=138)** I'll let this run for some more time, and you can marvel at the quality of images produced by the generator as training continues.
>
> **[2:26](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=146)** Let's head over to epoch 8, step 600.
>
> **[2:29](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=149)** The images at the bottom are pretty good quality.
>
> **[2:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=153)** The discriminator and generator losses seem unusually high, but let's look at the score.
>
> **[2:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=158)** Notice the fake score of the discriminator, it's getting closer to one.
>
> **[2:41](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=161)** The discriminator is finding it harder to differentiate fake images from real ones.
>
> **[2:48](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=168)** Well, I'll now let training continue till the very end.
>
> **[2:53](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=173)** And if you look at the last batch of generated images, after training is complete, you can see that those images look pretty realistic.
>
> **[3:01](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=181)** The generator started by generating complete noise, but it has rarely improved during the course of training.
>
> **[3:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=187)** Now let's visualize the generator and discriminator losses over the course of training, and also the accuracy score of the discriminator on the real and fake data.
>
> **[3:17](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=197)** Now this visualization isn't that great.
>
> **[3:21](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=201)** That's because there is so much noise here for each iteration of training that you can't really see what's going on.
>
> **[3:28](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=208)** But overall, as the generator improves, the generator's losses fall, discriminator's losses increase.
>
> **[3:34](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=214)** The discriminator starts off with a very high accuracy on real and fake data, and this accuracy falls over time till it gets close to 50 percent.
>
> **[3:44](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=224)** Unfortunately, the noise involved in the individual iterations really obscure this bit of information.
>
> **[3:51](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=231)** One thing to keep in mind that there is no way to identify convergence for GAN training.
>
> **[3:57](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=237)** As the generator steadily improves, the discriminator gets worse at identifying real images from fake.
>
> **[4:04](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=244)** But as the discriminator gets worse, the discriminator starts predicting things randomly, and this causes the generator to get worse.
>
> **[4:12](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=252)** So you should train a GAN till the generator improves the quality of its images, but at some point the generator will start getting worse because of the worse feedback it gets from the discriminator.
>
> **[4:24](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/viewing-gan-training-results?u=76281980&t=264)** Just something to keep in mind, when I tried training this GAN for 70 or 80 epochs, well, I felt the generated images got far worse.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), continue (1)
> **Versions:** 0.412 (1), 7.63 (1), 0.523 (1), 7.788 (1), 0.619 (1)
> **Env Vars:** gan (4), gpu (1)
> **Warnings:** keep in mind (2)
> **Prerequisites:** set up (1)


### Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=0)** We've come to the end of this course.
>
> **[0:02](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=2)** Let's take a quick look at what we covered here in this AI workshop.
>
> **[0:07](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=7)** We first understood how convolutional neural networks work, and we understood the working of the convolutional layer and the pooling layer.
>
> **[0:15](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=15)** We then saw how we could use the discriminator as a classification model.
>
> **[0:20](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=20)** And then we put everything together and we built and trained the GAN using a deep convolutional network.
>
> **[0:27](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=27)** If generative AI is something that you're interested in, here is another course on LinkedIn that you might find interesting.
>
> **[0:33](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=33)** [[Generative AI- Working with Large Language Models]].
>
> **[0:36](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=36)** Well, it's time for me to say goodbye.
>
> **[0:38](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=38)** I hope you enjoyed this workshop.
>
> **[0:40](https://www.linkedin.com/learning/ai-workshop-hands-on-with-gans-with-deep-convolutional-networks/summary-and-next-steps?u=76281980&t=40)** Thank you for listening.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Env Vars:** gan (1)
> **Cross-References:** we covered (1)


## Path Context

### In [[Advance Your Skills in Deep Learning and Neural Networks]]
← [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] | **8 of 8**

### In [[Advance Your Skills in AI and Machine Learning]]
← [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] | **8 of 16** | [[Exploring AIOps]] →

## Appears In

- [[Advance Your Skills in Deep Learning and Neural Networks]]
- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] — Artificial Intelligence (AI), Generative Adversarial Networks (GANs)
- [[Introduction to Generative Adversarial Networks (GANs)]] — Artificial Intelligence (AI), Generative Adversarial Networks (GANs)
- [[Deep Learning with Python- Convolutional Neural Networks]] — Artificial Intelligence (AI), Convolutional Neural Networks (CNN)
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)