---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mlops-tools-mlflow-and-hugging-face
url: "https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face"
duration_minutes: 314
duration: 5h 14m
level: Intermediate
updated: 9/25/2024
learners: 3045
skills:
  - MLflow
  - Machine Learning
  - MLOps
  - Artificial Intelligence (AI)
  - Hugging Face Products
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQETfg1FS6Ddug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727129495332?e=2147483647&amp;v=beta&amp;t=N0mHXgJiGkQgJF_WSRhi9Lxw7EpFW-1onQtKPrdk9pQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]'
prev_courses:
  - '[[Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios]]'
next_courses:
  - '[[Data Preparation, Feature Engineering, and Augmentation for AI Models]]'
path_nav: '[{"path":"MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security","position":4,"total":10,"prev":"Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios","next":"Data Preparation, Feature Engineering, and Augmentation for AI Models"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/mlflow
  - skill/machine-learning
  - skill/mlops
  - skill/artificial-intelligence-ai
  - skill/hugging-face-products
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/MLOps%20Tools-%20MLflow%20and%20Hugging%20Face.md)

![MLOps Tools: MLflow and Hugging Face](https://media.licdn.com/dms/image/v2/D4E0DAQETfg1FS6Ddug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727129495332?e=2147483647&amp;v=beta&amp;t=N0mHXgJiGkQgJF_WSRhi9Lxw7EpFW-1onQtKPrdk9pQ)

# MLOps Tools: MLflow and Hugging Face

> In this course, learn how to master MLflow and Hugging Face, two powerful open-source platforms for MLOps. Starting with MLflow, learn how to streamline the machine learning lifecycle, manage projects and models, use the tracking UI system, and interact with registered models. Then, get an introduction to Hugging Face, starting with an overview of the Hugging Face Hub, repositories, and Hugging Fa

> [LinkedIn Learning](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face) | 5h 14m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [MLOps platforms introduction](#mlops-platforms-introduction)
- [**1. Introduction to MLflow**](#1-introduction-to-mlflow) (4 videos)
  - [Overview of MLflow](#overview-of-mlflow)
  - [Installing and using MLflow](#installing-and-using-mlflow)
  - [Introduction to the tracking UI](#introduction-to-the-tracking-ui)
  - [Parameters, version, artifacts, and metrics](#parameters-version-artifacts-and-metrics)
- [**2. MLflow Projects**](#2-mlflow-projects) (4 videos)
  - [Working with MLflow projects](#working-with-mlflow-projects)
  - [Create an MLflow project](#create-an-mlflow-project)
  - [Run projects from remote Git repositories](#run-projects-from-remote-git-repositories)
  - [Connecting MLflow to Databricks](#connecting-mlflow-to-databricks)
- [**3. MLflow Models**](#3-mlflow-models) (4 videos)
  - [Components of the MLflow package](#components-of-the-mlflow-package)
  - [Use a registry with an MLflow model](#use-a-registry-with-an-mlflow-model)
  - [Referencing artifacts with the API](#referencing-artifacts-with-the-api)
  - [Saving and serving MLflow models](#saving-and-serving-mlflow-models)
- [**4. Introduction to Hugging Face**](#4-introduction-to-hugging-face) (5 videos)
  - [What is Hugging Face?](#what-is-hugging-face)
  - [Overview of the Hugging Face Hub](#overview-of-the-hugging-face-hub)
  - [Introduction to the Hugging Face Hub](#introduction-to-the-hugging-face-hub)
  - [Using Hugging Face repositories](#using-hugging-face-repositories)
  - [Using Hugging Face Spaces](#using-hugging-face-spaces)
- [**5. Introduction to Applied Hugging Face**](#5-introduction-to-applied-hugging-face) (3 videos)
  - [Introduction to applied Hugging Face](#introduction-to-applied-hugging-face)
  - [Using GPU-enabled Codespaces](#using-gpu-enabled-codespaces)
  - [Using the Hugging Face CLI](#using-the-hugging-face-cli)
- [**6. Using Hugging Face**](#6-using-hugging-face) (6 videos)
  - [Using the Model Hub](#using-the-model-hub)
  - [Downloading models](#downloading-models)
  - [Working with models](#working-with-models)
  - [Adding datasets](#adding-datasets)
  - [Using datasets](#using-datasets)
  - [Working with datasets](#working-with-datasets)
- [**7. Packaging Hugging Face**](#7-packaging-hugging-face) (4 videos)
  - [Hugging Face and FastAPI](#hugging-face-and-fastapi)
  - [Containerizing Hugging Face](#containerizing-hugging-face)
  - [Running FastAPI with Hugging Face](#running-fastapi-with-hugging-face)
  - [CI/CD packaging with GitHub Actions](#cicd-packaging-with-github-actions)
- [**8. Hugging Face and Azure ML Studio**](#8-hugging-face-and-azure-ml-studio) (5 videos)
  - [Hugging Face and Azure ML Studio](#hugging-face-and-azure-ml-studio)
  - [Registering a Hugging Face dataset on Azure](#registering-a-hugging-face-dataset-on-azure)
  - [Registering a Hugging Face model on Azure](#registering-a-hugging-face-model-on-azure)
  - [Inspecting a Hugging Face dataset on Azure](#inspecting-a-hugging-face-dataset-on-azure)
  - [Azure ML Python SDK](#azure-ml-python-sdk)
- [**9. Hugging Face Automation**](#9-hugging-face-automation) (4 videos)
  - [Using GitHub Actions for model deployments](#using-github-actions-for-model-deployments)
  - [Using Azure Container Registry](#using-azure-container-registry)
  - [Automating packaging with Azure Container Registry](#automating-packaging-with-azure-container-registry)
  - [Automating packaging Docker Hub](#automating-packaging-docker-hub)
- [**10. Hugging Face with Azure Containers**](#10-hugging-face-with-azure-containers) (4 videos)
  - [Create an Azure container application](#create-an-azure-container-application)
  - [Configure an Azure container application](#configure-an-azure-container-application)
  - [Deploy Hugging Face to Azure](#deploy-hugging-face-to-azure)
  - [Troubleshooting container deployment](#troubleshooting-container-deployment)
- [**11. Fine-Tuning and ONNX Exporting**](#11-fine-tuning-and-onnx-exporting) (4 videos)
  - [Introduction to fine-tuning theory](#introduction-to-fine-tuning-theory)
  - [Performing fine-tuning](#performing-fine-tuning)
  - [Introduction to ONNX and Hugging Face](#introduction-to-onnx-and-hugging-face)
  - [Exporting Hugging Face models to ONNX](#exporting-hugging-face-models-to-onnx)
- [**12. Hugging Face Spaces**](#12-hugging-face-spaces) (3 videos)
  - [Introduction to Hugging Face Spaces](#introduction-to-hugging-face-spaces)
  - [Hugging Face Spaces walkthrough](#hugging-face-spaces-walkthrough)
  - [Deploying to Hugging Face Spaces](#deploying-to-hugging-face-spaces)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [MLOps platforms introduction](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=0)** - Welcome to this course where we will cover [[MLOps]] platforms.
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=4)** So specifically some of the open source MLOps platforms.
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=8)** And we'll start with ML Flow, which is a powerful platform that allows you to deploy your models and capture all of the metrics, all of the things that happens while you're building, while you're training your models, and then deploying them.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=24)** It gives you a normalized way of deployment and a reproducible environment.
>
> **[0:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=30)** We'll see everything that you have to do in order to have these reproducible environments, regardless of the cloud provider, [[Microsoft Azure|Azure]] or GCP or even AWS.
>
> **[0:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=41)** It'll essentially work anywhere.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=43)** That's a powerful thing right there that you might be interested in exploring.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=48)** Then we'll move on to [[Hugging Face]], although Hugging Face, the actual platform, the services, the Hugging Face provides are not open source, their libraries are.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=58)** We'll look at Transformers, we'll look at data sets, and we'll see how to interact with that to get off-the-shelf models that are pre-trained and we'll interact with them.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=69)** We'll see how to deploy them, how to package them, how to push them to other cloud providers like Azure, and use different container registries.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=77)** And finally, we'll see a little bit of Onyx as well, which is a different way, a different format that you can export and import to and from, these Onyx format, which allows you to produce a model in a different framework, like say [[TensorFlow]], and then get it onto Onyx and put it into other devices that might not have everything you need for, say, TensorFlow.
>
> **[1:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=104)** So it gives you another way to normalization, which is a powerful concept in machine learning operations as well as in machine learning in general.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=112)** So we'll additionally cover some advanced Hugging Face applications and things like [[Fine Tuning]] and even using GPU, like using off-the-shelf models and fine tuning them, making some slight changes and adapting that to a new purpose.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=130)** And all of that will allow you to interact with all of these and gain some powerful knowledge to have normalized deployments, interact with powerful models that are existing today, produced by very important companies, and give you flexibility to deployment anywhere.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=148)** And that deployment can happen with Onyx or other registries or other cloud providers.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=154)** In essence, this course will allow you to do many different things related to machine learning operations and I'm excited that you're here.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/mlops-platforms-intro?u=76281980&t=162)** So let's go through all of those and hopefully by the end of it, you feel confident enough to interact with all of these technologies and start applying them in your day to day with machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[MLOps]] (2), [[Microsoft Azure|Azure]] (2), [[TensorFlow]] (2), [[Fine Tuning]] (2)
> **Env Vars:** gcp (1), aws (1), gpu (1)
> **Definitions:** is a  (3)
> **CLI Commands:** aws (1)
> **Speakers:** - welcome (1)


### 1. Introduction to MLflow

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of MLflow](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=0)** - [Instructor] Tracking is one of those components that [[MLflow]] is able to do.
>
> **[0:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=6)** So here we have a little bit of like a quick overview of what that tracking looks like.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=12)** So you have abilities to do perform certain things that are actually prefixed with log and we'll see those in detail later.
>
> **[0:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=23)** But you can log parameters.
>
> **[0:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=26)** You can see here that the parameters are basically key value pairs and those key value pairs can be anything.
>
> **[0:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=32)** So you can see here regularization and 0.1.
>
> **[0:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=36)** It can be anything.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=37)** And if you are keeping some sort of consistency in your product when you're training machine learning models or doing any kind of changes, you can keep track of those while the run is actually moving around and making progress.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=54)** So aside from parameters, which are key value pairs to log absolutely anything, you can log metrics, metrics can also be anything as well.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=64)** And here you can see accuracy 0.1.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=67)** So you're actually capturing certain things that are making sense for what you're trying to train.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=74)** So the difference between metrics and parameters is that parameters can be, are key value pairs, but you can see those as when you're going to be training and you're going to be passing some values around and you want to capture those.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=88)** And finally, you're going to be logging artifacts.
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=91)** Now logging artifacts means basically not that, you know, initially you can think about this as like, oh, well boy, it's going to report something as a log.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=102)** But no, it's actually going to capture.
>
> **[1:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=104)** So say for example, model pkl, which is stands for pickle, and it's going to push that binary to a remote server.
>
> **[1:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=114)** Next, I want to show you, well, this is kind of like the UI, which we'll see like a newer version of the UI later on on this course.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=123)** But I want to scroll here to show you the project.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=126)** So a little bit of the high overview of the projects.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=131)** Again, these are three components we just saw tracking.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=135)** Now we're going to look at Projects.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=136)** And finally we'll take a look at Models.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=137)** So Projects is a way of normalizing with configuration, plain text configuration like this one that allows you to keep track of everything that you're doing while you're going to perform some actions in your machine learning project.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=154)** So you can name is one of the most basic things that you can do, here, these files using a Conda environment and pointing to a conda yaml file.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=164)** Again, we'll see in detail what that means and what are some of the options that you can do there.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=169)** But essentially what this means is that it's configuration in a text-based file or text-based framework, rather, that you can keep track when you're doing your machinery operations and you can put them in [[Version Control]].
>
> **[3:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=185)** That means that if I come in tomorrow and change these [[Python (Programming Language)|python]] valid data pipe to do something different, to use some other file and I make a mistake, well I can always come back and make sure that this doesn't have a typo.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=197)** So those are kind of like the things that version control will give you the ability of doing.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=202)** So I'm going to scroll all the way down to models now, so that now you can actually see what that means.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=210)** Essentially, you're tracking a variety of different ways of creating a model, of producing a model.
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=219)** And here you will see that what Python functions here, instructing MLflow how it should load this model, how it should be working with what versions of the machine learning libraries are going to be using.
>
> **[3:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=234)** So in this case, sklearn is going to be version 19, zero dot 19 dot one and it's going to produce this model pkl.
>
> **[4:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-mlflow?u=76281980&t=243)** So that's it, that's a very high overview of MLflow and some of the components that we'll see in detail later.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (3), [[Version Control]] (2), [[Python (Programming Language)|Python]] (2)
> **CLI Commands:** python (2), make (2)
> **Versions:** 0.1 (2), version 19 (1)
> **Definitions:** stands for (1), is a  (1), means that (1)
> **Analogies:** kind of like (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Installing and using MLflow](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=0)** - [Instructor] Installing [[MLflow]] is very straightforward if you have a [[Python (Programming Language)|Python]] environment, I have something that I've already activated here.
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=8)** It doesn't matter if it's a virtual environment, or a conda environment, or something else.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=12)** In this case, it just happens to be a conda environment.
>
> **[0:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=15)** But we're going to go ahead and install MLflow.
>
> **[0:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=19)** So I'm going to say pip install mlflow, and that should work pretty straightforward.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=24)** It should take a couple of seconds, and then complete.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=28)** That is effectively how you install MLflow.
>
> **[0:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=30)** Just using Pip, if you have some other ways of installing, well, primarily Pip would be the one thing that you want to be using.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=38)** So, once MLflow completes installing, there's a few things that you can actually do.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=45)** Before I show you kind of how to interact with MLflow directly, I want to show you what MLflow UI will look like.
>
> **[0:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=56)** So I'm going to say mlflow, space, ui, and return.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=60)** And that will run a server.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=64)** Now, this UI is running locally, so you can see here it's running a port of 5,000 so I'm going to click here.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=71)** And it's opening up on our window which I'm going to pull into the view here.
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=76)** So you can see that it has some minimal interface with a few things that look interesting.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=84)** However, there's nothing here that you could say, well, I can't see anything that would be related to models except for you have like a chart here.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=96)** But the thing is that this is empty so not entirely super useful.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=101)** But you will see once we start putting things in there, then things will start looking much, much interesting.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=110)** So let's switch the view back to VS Code.
>
> **[1:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=113)** And we're going to create here a new file, and we're going to call it... This is going to be test-mlflow.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=122)** So it's a very simple script, it's just a Python script.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=125)** I'm going to leave the terminal there running because it's our UI.
>
> **[2:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=129)** So we're going to say, for example, from mlflow import log_metric, and log_param, and log_artifact.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=139)** This is something that we'll see later into more detail.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=143)** But basically we'll do the infamous if_name is main that basically tells Python, hey, run this, or straight away, like if I run it on the terminal, execute this as a script.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=156)** So we can start logging some params.
>
> **[2:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=158)** So for example, we can say, let's say threshold here, and we can say something like 3.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=166)** So that's a parameter.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=167)** Or we could say verbosity, can't type verbosity.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=172)** We can say, let's say for example, DEBUG.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=176)** You're logging parameters, you're logging things that you are requiring for your training to effectively work, and then be trained, and it could be anything that you want.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=187)** Similarly, we can log some metrics.
>
> **[3:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=189)** So if you're capturing, say, for example, timestamp, we could say, this would be any arbitrary number.
>
> **[3:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=201)** And we could say, time to complete, let's call it TTC for abbreviation purposes, and let's say this took 33 seconds.
>
> **[3:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=212)** So you start seeing that you can start logging other kinds of things.
>
> **[3:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=216)** And finally, we can actually log an artifact which can be an actual file.
>
> **[3:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=221)** So we can say, this file could exist already, but we can say, for example, well, we don't need to write it with Python.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=230)** We can go here and say, new file.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=233)** And we can say, this is our produced-dataset.csv.
>
> **[4:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=241)** So we can say this is empty, and doesn't have anything there, we're going to save it.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=249)** I'm going to close it out.
>
> **[4:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=250)** And then when we want to log an artifact, we are going to say log_artifact.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=256)** And then we are going to say that the artifact is going to be produced-dataset.csv.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=266)** All right, so I'm going to save these, and then I'm going to run a new terminal.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=272)** And I am going to say python test-mlflow, and see what happens.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=280)** Alright, so that completed, and I'm going to go back to the web UI, and see what happened.
>
> **[4:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=286)** So I'm going to refresh, and we should start seeing that nine seconds ago, I was able to run some things.
>
> **[4:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=294)** So this is a little bit big so let me try to make it slightly more readable there.
>
> **[5:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=301)** It's going to be a little bit smaller.
>
> **[5:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=304)** But you can see here that it's capturing things.
>
> **[5:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=307)** So metrics, which we talked about time to complete.
>
> **[5:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=311)** Now I call the TTC, and you could see that that's captured here and timestamp.
>
> **[5:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=316)** So you have metrics separated there, and we have parameters, we said threshold was going to be 3.
>
> **[5:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=323)** And verbosity was going to be DEBUG.
>
> **[5:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=325)** So you start seeing those things there, and then the source is right there.
>
> **[5:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=330)** Let's click here and see what happens.
>
> **[5:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=333)** How about the artifacts?
>
> **[5:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=334)** Well, this is the nice thing is that we can click here, and it tells me lots of [[Metadata]] about the parameter.
>
> **[5:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/installing-and-using-mlflow?u=76281980&t=342)** So that's a very, very quick overview on how to install MLflow, and how to start using it with the tracking UI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (12), [[Python (Programming Language)|Python]] (5), [[Metadata]] (1)
> **CLI Commands:** python (5), pip (3), make (1)
> **Code Identifiers:** log_artifact (2), log_metric (1), log_param (1), if_name (1)
> **Analogies:** for example (5)
> **Env Vars:** debug (2), ttc (2)
> **Tools:** terminal (3), vs code (1)
> **Prerequisites:** install (4)
> **File Paths:** produced-dataset.csv (2)

#### [Introduction to the tracking UI](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=0)** - [Instructor] Let's do a little bit of more digging into the tracking server and the UI.
>
> **[0:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=6)** So, one of the things that we're doing here is that we're going to log some metrics.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=12)** Specifically, we're going to be producing the metrics.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=14)** I'm not going to run, actually, but I'm going to simulate having certain metric names like CPU, RAM and disk.
>
> **[0:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=23)** And I'm going to, at random, capture one of those, and I'm going to select any percentage from zero to 100.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=33)** So, for 40 iterations I'm going to log a metric, either CPU, RAM or disk.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=39)** And for any number between zero and 100, I'm going to run that.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=43)** I'm going to let that [[MLflow]] capture that in the UI, in the tracking server, capturing metrics.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=50)** But let's go back to how that tracking server, or a tracking UI, looks like.
>
> **[0:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=56)** So I'm going to go here.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=57)** This is running from the terminal.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=60)** If you remember, I was running that with MLflow Space UI, and we run this before, so I have a little bit of parameters already captured that you saw the threshold, and debug, and metrics.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=74)** But now I want to create a new experiment.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=77)** So, before I run the metrics, I want to capture those metrics in a new experiment.
>
> **[1:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=83)** So, how do you go ahead and do that?
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=86)** Well, you need to run a new... You can either let MLflow create a new ID for you, or you go ahead and create one.
>
> **[1:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=98)** So let's go ahead and create one.
>
> **[1:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=100)** To create one, I'm going to go back to my editor.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=103)** I'm going to open up a new terminal.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=105)** And I'm going to run MLflow, and I'm going to run a specific command.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=111)** So I'm going to say "mlflow experiments"... And I'm going to say "create" and... Create with --experiment-name.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=123)** And that name is going to be produce-metrics.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=128)** So I'm going to create that.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=130)** And I'm going to get an ID.
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=132)** So now with that ID, you can actually instruct MLflow, anything, really, that runs MLflow, that it should track this new experiment.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=143)** So you can always also check back the UI.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=148)** So if I go here and I hit Refresh, you can see that produce-metrics is right here.
>
> **[2:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=152)** There's nothing there, nothing has been run.
>
> **[2:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=155)** And I need to go ahead and start telling MLflow to capture stuff in there.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=160)** So I'm going to go back to the terminal.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=161)** And now the way I can do this... Well, outside of running the script, or outside of running the process, I can actually export an environment variable.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=170)** I'm going to call it MLFLOW.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=172)** Well, I'm not going to call it, but it's what it accepts, which is EXPERIMENT.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=177)** And it's going to be _ID.
>
> **[2:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=179)** I'm going to say this is 2.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=181)** I'm going to run [[Python (Programming Language)|python]] produce-metrics.py.
>
> **[3:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=185)** So that's going to produce a lot of metrics.
>
> **[3:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=188)** And I'm going to go back to the UI and I'm going to refresh.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=192)** And you can see that a few seconds ago I was able to produce that, and it captures some metrics, CPU, disk, and RAM.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=200)** So again, these numbers, these percentages, are made up out of a random choice.
>
> **[3:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=207)** But the important thing is that it'll allow you to drill down and do some operations here that I want to show you.
>
> **[3:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=214)** So I'm going to click.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=217)** I'm going to click here on the Start (indistinct).
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=219)** Start Time, sorry.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=220)** You can see that the metrics that were captured are three.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=223)** Now, why there were three?
>
> **[3:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=225)** Well, because those were the only three options, even though that I was able to log them for about 30 times each.
>
> **[3:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=231)** So let's take a look at CPU.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=233)** So I'm going to click CPU, and you can see that for every single one time that I created that you could see that I was able to log 52 here, then 78, then 45..
>
> **[4:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=247)** What else?
>
> **[4:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=248)** 10, 62.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=249)** So that's kind of like trying to capture... Well, not trying, but effectively capturing every single iteration of every single metric that I'm pushing forward to.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=259)** And down here I'm simulating from zero to 100.
>
> **[4:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=263)** And you can see here that nothing went beyond 80.
>
> **[4:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=267)** Let's go back and take a look at some of the other metrics.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=271)** So we had disk.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=272)** So let's take a look at disk.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=273)** Oh, here we capture a little bit more.
>
> **[4:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=275)** So we had the 69, 92, 44.
>
> **[4:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=278)** So that's pretty good.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=280)** So it could give you, like, a very good, you know, operation here, where you can query, you can query these, you can even change the smoothness, how smooth you want this to be.
>
> **[4:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=292)** And all kinds of different things that you can have in the UI.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=296)** Now, I'm running all of these locally, but you could try to set this to a remote server.
>
> **[5:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=304)** I can actually show you that if I go back to the terminal and I do ls, you can see that there's an ML runs.
>
> **[5:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=312)** And if I do three ML runs, there are lots of different experiments running.
>
> **[5:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=318)** So you can see that the ID 1 has the metrics, the params, the tags.
>
> **[5:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=323)** ID 2, which is kind of like what we just run right now, has several artifacts and metrics and params.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=332)** So it gives you structure, and that's really good.
>
> **[5:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=335)** Now, I want to go ahead and try to look at produce-metrics here.
>
> **[5:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=342)** And then I'm going to... Instead of doing, for i in range(40), I'm going to make these more thorough.
>
> **[5:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=349)** So I'm going to make it 400 times.
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=352)** And instead of CPU, RAM, and disk, I'm just going to change these to... I'm going to change it to just CPU and see.
>
> **[6:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=362)** Well, effectively that means that the log_metric is always going to be CPU.
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=370)** So I want to show you this and how that looks, and that works.
>
> **[6:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=374)** And I'm going to... For 400 times, 400 durations, I'm going to select a number from zero to 100 and see how that works.
>
> **[6:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=384)** All right, so that means that I am going to run these Python produce-metrics for the same MLflow experiments.
>
> **[6:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=390)** So ID 2.
>
> **[6:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=391)** So I'm going to run that, it's going to run for 400 times.
>
> **[6:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=394)** And now I'm going to go back to the UI.
>
> **[6:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=397)** So here I'm going to go, I'm going to go back.
>
> **[6:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=401)** Go back again.
>
> **[6:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=402)** Produce-metrics.
>
> **[6:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=403)** Now there's a new run that came in, and the CPU was about 60.
>
> **[6:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=407)** So let's take a look at that, open up metrics, open up the CPU graph.
>
> **[6:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=413)** And now look at that, a more realistic graph, right?
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=416)** Because we have 400 points.
>
> **[6:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=418)** So you might be running a loop over your experiment training or machine learning model training, and you want to capture all of these metrics or you're going to get something that looks kind of like this, that looks really, really nice and gives you a really good overview.
>
> **[7:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=432)** So those are some of the features.
>
> **[7:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=434)** And lastly, one of the things I wanted to show you was if you come back to produce-metrics, you can query the metrics, and not only the metrics, but in this case we could say metrics, say CPU, more than, say 88.
>
> **[7:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=453)** And well, there's nothing.
>
> **[7:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=454)** We can say, let's say for example, more than... Or 14, and run.
>
> **[7:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=460)** And only the one that I run just a minute ago was able to produce CPU more than 14.
>
> **[7:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=466)** The previous one didn't.
>
> **[7:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=468)** So if I want to say, you know... I'm basically querying, almost like a [[SQL]] query.
>
> **[7:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=474)** There's nothing there.
>
> **[7:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=476)** You can see that I can do all kinds of different queries.
>
> **[7:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=478)** So imagine having several hundred experiments for produce-metrics, or whatever you want to call these, experiment name, and then query that.
>
> **[8:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=489)** It is a very powerful way.
>
> **[8:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=490)** And you can also filter with All Runs, or selected runs.
>
> **[8:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=495)** You could say model with versions and without versions.
>
> **[8:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=497)** Again, very, very useful.
>
> **[8:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-tracking-ui?u=76281980&t=499)** And this is not only... I only show metrics here, but you could do the same querying and the same type of filtering for parameters and artifacts as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (10), [[Python (Programming Language)|Python]] (2), [[SQL]] (1)
> **Env Vars:** cpu (12), ram (4), mlflow (1), experiment (1), sql (1)
> **Cross-References:** go back to (6)
> **CLI Commands:** python (2), make (2), ls (1)
> **Analogies:** kind of like (3), for example (1), imagine (1)
> **Tools:** terminal (4)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** produce-metrics.py (1)

#### [Parameters, version, artifacts, and metrics](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=0)** - [Instructor] Let's go deeper into parameters, versions, artifacts, and metrics.
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=4)** So we've already seen how we can produce tons of metrics and log them to the UI, and we're going to, I'm going to try to run this databricks/[[MLflow]] example, which happens to be in the documentation.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=17)** I'm going to run this and then I'll show you kind of, like, what the files look like.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=20)** So I'm going to execute this, it's going to [[Fetch]] the project, and it's getting into an error.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=27)** All right, so let's see what's going on here.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=29)** So one of the things that mlflow is kind of, like, strict about is that the changing parameter values is not allowed.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=38)** So you can see here that the initial value was five and then kind of, like, tried to log it with a 5.0.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=48)** So not good.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=50)** And it actually, the exception message is pretty useful here because you can see that the parameter's being logged kind of, like, this is not okay, right?
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=60)** Because you're saying, hey, this is a parameter of depth three and then parameter of the five.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=66)** So why is this not allowed?
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=68)** I think it's very helpful because what's happening here is you're logging parameters on how you would run things, say, for example, in the command line interface.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=78)** So if you're running a command and passing --debug or log level rather equals warning, you're not going to probably change that warning to say debug because you've already run that, right?
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=91)** So it doesn't make sense.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=93)** So mlflow here will complain when that happens.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=97)** In this case, you would be able to kind of, like, override some parameter if you actually absolutely 100% need to do that.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=109)** Now, don't do that, I don't think.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=111)** So, like, I think, like, the right way is to set your parameters right from the get go and then stick with those and then try to log them.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=121)** So that's what happened.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=122)** So let's take a look at what that example looks like.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=125)** So I'm going to go to the mlflow example and I'm going to actually go here to, because I've already forked the example.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=134)** And let's take a look at train.py.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=137)** So train.py will use the famous wine quality CSV dataset and is going to try to train it.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=146)** That's fine.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=147)** And let's take a look at where this is logging.
>
> **[2:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=151)** So we're passing that value of five, which is alpha right here.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=160)** So you can see here that the alpha is float c*rv1 if it's more than one.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=166)** Otherwise it's going to be 0.5.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=169)** So that is changing somehow because right here it is complaining about it.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=178)** But the thing is that we need to ensure that this is actually set correctly and not a problem.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=187)** So line 44, it's right here.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=192)** And so I've forked the example.py to prevent this problem.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=198)** I'm going to go back and I am going to show you... Go back again.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=204)** I'm going to show you kind of, like, the change that I did here to make this work.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=208)** So I'm just forcing it to be an integer and not worry about it, all right?
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=213)** So with that, let's go and back to the editor and run it again and see what happens.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=222)** So back to Visual Studio Code.
>
> **[3:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=224)** And instead of running for, let me see, running for the Databricks example, we're going to run this one right here.
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=236)** And I'm going to say alpha five and that's not this one.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=242)** So let's say, so this one with alpha, not alpha four, but alpha five.
>
> **[4:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=248)** I'm going to run this and it's going to take a second.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=251)** All right, so that completed and you can see some values are being set out.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=257)** Now, if you remember, those values are being captured in the train.py that we saw.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=262)** So we go back to the browser, you can see those values are right here and that's why those are getting printed.
>
> **[4:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=270)** But, you know, printing stuff on the terminal, it's only useful if you're running it directly, not if you're logging these metrics.
>
> **[4:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=277)** And mlflow is capturing all of that information for you, including logging the actual model.
>
> **[4:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=285)** Now, in this case it's using log model.
>
> **[4:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=288)** So it's using a helper from scikit-learn to say, hey, I'm going to produce a model for scikit-learn and I'm going to capture, it's being captured here as lr.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=299)** So that's basically right here on elastic net is producing that and the calling to fit with the train_x and train_y is producing that model.
>
> **[5:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=311)** And then we're kind of capturing there.
>
> **[5:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=313)** All right, so that's what's going on.
>
> **[5:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=316)** Let's take a look at what the UI says.
>
> **[5:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=319)** So I'm going to refresh here and we have several runs now.
>
> **[5:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=323)** We have one that failed.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=324)** So let's take a look at that one that failed.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=327)** So we can see that the command that ran was the one with Databricks, and that's good because that's the one that doesn't work because of the problem with logging.
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=340)** And you can see here that alpha was five.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=343)** And this is interesting because it's actually capturing other defaults that are being used with that mlflow run.
>
> **[5:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=351)** So that's interesting.
>
> **[5:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=353)** Let's take a look at the parameters.
>
> **[5:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=354)** The parameters again was alpha was five, so remember it was logged in as five and then it was kind of, like, wanted to change to 5.0, which is a float, and that's not okay.
>
> **[6:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=365)** So the ratio is 0.1, that's fine.
>
> **[6:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=369)** Some metrics, there are no metrics.
>
> **[6:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=371)** Let's see if there are tags, no tags and no artifacts.
>
> **[6:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=374)** Why there aren't any artifacts, because the run failed.
>
> **[6:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=378)** So you can see here the status is failed.
>
> **[6:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=380)** So let's go back and let's take a look.
>
> **[6:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=382)** And the last one that we run, which is this one, so very nice, we have a model right here.
>
> **[6:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=387)** Let's take a closer look.
>
> **[6:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=389)** So alpha was five already.
>
> **[6:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=392)** Parameters was able to log them fine.
>
> **[6:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=395)** And then we see that there are three metrics now.
>
> **[6:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=398)** We have MAER2 and RMSE.
>
> **[6:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=402)** So if we click those, it's just a single value that never change.
>
> **[6:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=406)** It was always 0.85.
>
> **[6:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=409)** And if you remember and I go back to the text data here on Visual Studio Code, that is right here on RMSE.
>
> **[6:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=419)** All right, so we run that with five, the alpha five, that's kind of, like, the default.
>
> **[7:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=425)** But we can do a few more runs.
>
> **[7:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=428)** Let's run it with three and we're changing values on the fly.
>
> **[7:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=432)** And then let's change it to 2.5 or 2.4 rather.
>
> **[7:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=439)** That actually created a problem because I'm changing a collision there, but, like, let's make an integer and not use a float.
>
> **[7:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=448)** That will work.
>
> **[7:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=449)** So, all right, so we did a few runs and I'm taking advantage that this machine is able to run this very fairly quickly.
>
> **[7:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=456)** I'm going to go back here and take a look at all of the runs.
>
> **[7:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=460)** So now they're being captured and you can see here there are several variations.
>
> **[7:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=464)** So why is this important?
>
> **[7:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=466)** Well, we're seeing now that this is fairly populated.
>
> **[7:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=471)** We're actually training with scikit-learn and the parameters are changing a little bit.
>
> **[7:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=476)** You can see the 2.4 failed.
>
> **[7:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=478)** That's why the metrics didn't, were not captured, but we're also have the ability to look at some of the models.
>
> **[8:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=485)** So you can see here that scikit-learn is actually getting captured.
>
> **[8:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=490)** And I can look at that experiment and look at the artifact.
>
> **[8:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=495)** So let's take a look at the artifact, look at everything that got captured.
>
> **[8:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=498)** So we have the ML model, we have the con.yaml, we have the model PKL, which is the pickle file, and then we have all of these, you know, we can do the predictions.
>
> **[8:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=510)** I mean, this is pretty remarkable because it's capturing absolutely everything that would be needed to run.
>
> **[8:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=517)** So, say, for example, if you want to do that on the [[Pandas (Software)|pandas]] data frame, I mean, that's tremendous.
>
> **[8:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=521)** So we can import mlflow, load the capture.log model from it tells you exactly where it's coming from, and load the model as a [[Python (Programming Language)|Python]] model and then do some predictions.
>
> **[8:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=534)** So let's try it out and see if that works.
>
> **[8:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=537)** So we're going to go to our editor and we're going to try to run, try to create an IPython notebook and let's say test IPython notebook.
>
> **[9:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=550)** And we're going to paste that and run it and it's going to install some dependencies.
>
> **[9:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=558)** I'm going to close this and it's going to run.
>
> **[9:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=562)** All right, so this is running and you can see here that, well, it took 3.8 seconds and I got some warnings in the prediction with pandas, but that's fine.
>
> **[9:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=575)** What I wanted to show you is that, well, data was not being defined.
>
> **[9:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=579)** There's something else that I need to define there, but it is a good start of, like, how you can very quickly get access to that loaded model.
>
> **[9:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=588)** So even if I don't have pandas here, I could just run this and it would be able to fetch that log model and load that from this mlflow helper called load model from this Python.
>
> **[10:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/parameters-version-artifacts-and-metrics?u=76281980&t=604)** So very, very good thorough way of interacting with the UI and the previous runs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (8), [[Pandas (Software)|Pandas]] (3), [[Fetch]] (2), [[Python (Programming Language)|Python]] (2)
> **Versions:** 5.0 (2), 2.4 (2), 0.5 (1), 0.1 (1), 0.85 (1)
> **File Paths:** train.py (3), example.py (1), con.yaml (1)
> **CLI Commands:** make (3), python (2)
> **Env Vars:** rmse (2), csv (1), maer2 (1), pkl (1)
> **Tools:** visual studio (2), command line (1), terminal (1)
> **Definitions:** is a  (3)
> **Cross-References:** go back to (2)


### 2. MLflow Projects

[↑ Back to Table of Contents](#table-of-contents)

#### [Working with MLflow projects](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=0)** - [Instructor] Let's see some of the components for working with an [[MLflow]] project.
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=4)** So we're going to take a quick look here this is the Databricks documentation in [[Microsoft Azure|Azure]], but the reason I picked this, it's not because it's actually part of the Azure documentation, but it doesn't have anything to do with Azure.
>
> **[0:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=21)** But this is one of the benefits of using MLflow, which is that you have this consistency.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=29)** It doesn't matter where you're running.
>
> **[0:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=30)** You can run locally, you can run on Databricks, you can run on Databricks on Azure as well.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=35)** So the components are going to remain the same.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=38)** You're going to be using something else remotely, but in essence, you're still going to need these things, the project names, the Conda environment specified in a YAML file, and then a [[Python (Programming Language)|Python]] or a Shells script.
>
> **[0:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=53)** You can see here any .py or .sh.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=55)** I recommend sticking with Python because that will give you the ability of using kind of like the same language as you know, everything that is on Conda and all of the libraries already for [[Data Science]], not necessarily like Shells script, unless you have a very good reason to do that.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=75)** Next, I want to show you like the YAML file here for the YAML project.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=80)** One of the things that happens with project, and I'll show you this in a second, is that because it doesn't have a dot an extension, a dotted extension, you won't get that YAML nice syntax highlighting.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=95)** So let's go through some of the things that you will see here.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=99)** First, you start by declaring the name.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=101)** In this case, they're using an example of my project.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=103)** You specify the Conda environment file.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=106)** We'll see this in a second what that means.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=109)** And then we'll have these entry points.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=111)** You can have as many entry points as you want, but you should have at least one.
>
> **[1:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=116)** This will allow you to basically use one of these to run a script with different types of parameters and even path or something like more like a number, in this case it's a float.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=131)** And you can see it defaults to 0.1.
>
> **[2:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=133)** Alright, so that's kind of like a quick overview of the documentation.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=136)** Let's go to the exploratory example that I have here.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=141)** In this example directory I have an ML project, and this is what I was explaining that doesn't have the [[GitHub]] can't tell like what type of file is this because it doesn't have the dot extension.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=154)** It doesn't have a .yaml, .yml that identifies this as a YAML file.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=160)** Similar to what we saw in the documentation you have a name, in this case it's a name, it's a data set validation.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=166)** I'm going to have a Conda environment there and I'm going to have a single main entry point with some parameters and a single command right here.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=176)** So I'm going to go back and I'm going to show you what this Python script does.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=181)** So the Python script is actually using Click, but it doesn't matter.
>
> **[3:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=185)** Click is a framework for producing Python command line tools, but it doesn't matter that I'm using Click.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=190)** You can use anything you like or nothing at all and use a plain Python script with no frameworks at all.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=197)** So what this is doing, it's actually reading a CSV file and logging some metrics.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=202)** You can see here if the logging metric is a Boolean it's true, then things will happen over here, otherwise it won't.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=209)** And it will check for unnamed columns and zero columns, like if there's a count that doesn't have any items, then that will be counted and reported there.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=220)** And I'm logging metrics and we'll see how those look.
>
> **[3:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=225)** Alright.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=226)** And then finally I want to show you the Conda environment.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=229)** So the conduct environment is a special file for Conda that is specifies what the dependencies are.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=237)** So in this case, if you were to create a new Conda environment, it would be named Exploratory.
>
> **[4:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=243)** It will be using the Conda forge channels only, or the only one channel here is the Conda forge channel, not channels.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=251)** And these are the list of dependencies.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=254)** So we're going to take a look at in detail these later, but just enough to know right now that this is a way to specify your dependencies and get a repeatable environment going.
>
> **[4:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=269)** Alright, so these are the components that you will see normally in an ML project and kind of like in this case, well I have the CSV I didn't show you the CSV, but we'll see as an example what that looks like.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=281)** It can be anything really.
>
> **[4:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-mlflow-projects?u=76281980&t=283)** And here you could train, validate and do all kinds of other things in a repeatable manner.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Microsoft Azure|Azure]] (4), [[MLflow]] (2), [[Data Science]] (1), [[GitHub]] (1)
> **Env Vars:** yaml (5), csv (3)
> **CLI Commands:** python (6)
> **Definitions:** is a  (4)
> **Analogies:** kind of like (3), similar to (1)
> **Documentation:** the documentation (2)
> **Tools:** github (1), command line (1)
> **Versions:** 0.1 (1)

#### [Create an MLflow project](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=0)** - [Instructor] Now let's go and create an actual [[MLflow]] project.
>
> **[0:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=3)** So I've listed a couple of the steps that you will need, but let's start with the dependencies.
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=9)** And for this project, we'll be using an example project called wine.ratings.csv.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=17)** It's the dataset, is just a single row, but it has many problems in it.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=22)** Actually, let's take a look at what this CSV looks like.
>
> **[0:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=26)** And it is, well actually, not this one, this one's very large.
>
> **[0:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=32)** But what I want to show you is not that one but the one on exploratory.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=38)** And this carriage.csv file, it's only a single row.
>
> **[0:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=42)** And it has problems with some of the columns.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=46)** You can see here, grape doesn't have any values.
>
> **[0:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=49)** And [[GitHub]] doesn't render that, but there's some carriage returns here on this field, right there on notes.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=57)** So the problem with carriage returns is, that might be problematic because some tools might not work with it.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=61)** So we're going to catch those, we're going to report those and we're going to make MLFlow work with that and run and install everything that we need to.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=71)** So that's in the exploratory one.
>
> **[1:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=72)** And going back to the demo, so if we go here on how to create a project, how to run it.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=80)** So I'm going to create an MLFlow project.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=82)** We're going to use the small CSV data file, and then we're going to start with the dependencies.
>
> **[1:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=87)** We're going to create a a conda environment named exploratory.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=92)** I'm going to use [[Python (Programming Language)|Python]] 3.8 because that's what I know that works with the tools that I want to use.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=97)** Then I'm going to activate that environment.
>
> **[1:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=100)** If you've never used Conda, it's essentially the same as a, well not the same, but similar to a Python virtual environment.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=106)** You create one, then you activate one, and then everything that you install in that environment will go to that environment and on to your system or other types of environments.
>
> **[1:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=114)** So there are contained dependencies in that same environment.
>
> **[1:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=118)** It can be a little bit overwhelming.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=120)** If you want to do anything very specific or different than these basic examples, I suggest you go through the documentation for Conda.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=127)** So now that that we've created the environment, we've activated the environment, then the way you create that conda_env.yaml file is by exporting it.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=139)** And once you export that, you'll end up with a file that is similar to this.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=144)** In this case I named it exploratory.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=146)** You can name it anything you want.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=148)** And that name, it can be anything you want, really.
>
> **[2:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=152)** It's just a way of identifying what it is.
>
> **[2:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=155)** The channels, I think by the default you get a conda-forge, but if you want something specific, for example, I know [[PyTorch]] wants its specific channels.
>
> **[2:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=163)** And then it list the dependencies.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=165)** So here we have some base dependencies, and that's fine.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=170)** And then we are going to use pip.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=174)** You can see we can use pip to actually go and install these extra dependencies at the very bottom right there.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=180)** So not only we're declaring pip as a dependency, but we're actually then saying, "Hey, by the way, I want pip to actually install [[Pandas (Software)|pandas]] and MLFlow," and we have some specific versions there.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=192)** And then if you're installing or adding or removing things, this is a good command to remember.
>
> **[3:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=201)** You're going to make the changes to the conda_env.yaml and then update that and then use the --prune, means that anything that is no longer defined in the conda_env.yaml is going to be removed.
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=213)** So if you don't remove anything, that's fine, but if you do, then it's going to stay consistent, right?
>
> **[3:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=218)** Let's go and take a look at exploratory.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=220)** But before we do that, we're going to see, you know, we already went through the MLproject.
>
> **[3:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=225)** It is going to be run a single entry point.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=229)** It's going to be this Python validate, we already saw the evaluation.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=233)** It is this validate.py file here.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=237)** I see here it is going to run a few commands going through the CSV and then report on it depending on what we're doing.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=246)** All right, so now we're going to go back to my terminal.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=249)** We're going to do conda activate exploratory, which I just did, but you'll see that it is showing up here.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=257)** And then now I'm going to be running MLFlow.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=260)** So mlflow run, dot for signaling that this is the specific directory that I want, and I am going to say -P filename=, this is going to be carriage... I don't remember the name of the file.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=279)** So let's see, carriage.csv, there we go.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=281)** So mlflow run . -P filename=carriage.csv.
>
> **[4:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=287)** So let's talk a little bit about what's going on here.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=290)** So MLFlow run is what we're going to use to run the project.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=293)** That means that this is the actual project.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=296)** This is, exploratory is where this lives.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=299)** Dash P, it's, we're starting to pass in parameters.
>
> **[5:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=303)** So if you remember, if I go back very quickly to here, not to the validate.py but to the MLproject file, you'll see here that the parameters listed here have log, max_errors and filename.
>
> **[5:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=321)** So filename is right there, max_errors and log.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=324)** Because log and max_errors have defaults, you can see here that default is True and the default is 1, but filename does require a parameter.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=332)** I need to specify those.
>
> **[5:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=334)** All right, so now that I know what I have to pass in, filename=carriage.csv, and I'm going to run this and see what happens.
>
> **[5:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=341)** All right, so that ran very quickly.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=343)** You can see there's a lot of output here, but special attention to this one.
>
> **[5:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=348)** It knows that my Python version is coming from a conda environment.
>
> **[5:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=353)** It found that there was an existing conda environment.
>
> **[5:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=356)** This one, it reused it and didn't create one from scratch, which is great.
>
> **[6:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=361)** And then you run python validate.py True because that's the default, and then 1 because that's also the other default.
>
> **[6:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=368)** And then you figure out a absolute path towards that carriage.csv file in it.
>
> **[6:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=374)** This would guarantee that regardless of where you're running these, it will still work.
>
> **[6:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=378)** So if you clone this repository or want to run these on your own, the path will be slightly different.
>
> **[6:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=384)** But if you pass the same thing, mlflow run . -P filename=carriage.csv, I'm sorry, right there, it will work the same.
>
> **[6:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=393)** All right, so it succeeded.
>
> **[6:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=394)** So what would happen if I do something that doesn't exist?
>
> **[6:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=397)** So say for example, fake.csv.
>
> **[6:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=400)** So what I would expect is an error and then you go error, right here is the error, "Got value fake.csv for parameter filename, but no such file or directory was found."
>
> **[6:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=412)** And what would happen if I don't pass any parameters?
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=416)** So if I do something like that, well, in this case, "No value given for missing parameters: 'filename'" because remember, filename doesn't have anything that signals a default value.
>
> **[7:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=428)** If you wanted to pass any of the other ones, if we take a look at the MLproject one, we see a log and max_error.
>
> **[7:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=436)** So we want to pass mlflow dot run -P filename=carriage.csv, and then we say -P max_errors.
>
> **[7:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=447)** We could say, you know, 10 for example.
>
> **[7:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=450)** And then we will run that, and that will get captured again over here and it would be transparent.
>
> **[7:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=456)** So you have the ability to pass extra parameters that are not captured in the defaults if you want to tweak around and play around with those.
>
> **[7:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-mlflow-project?u=76281980&t=464)** So that's it. That's how you run an MLFlow project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (11), [[Python (Programming Language)|Python]] (5), [[GitHub]] (1), [[PyTorch]] (1), [[Pandas (Software)|Pandas]] (1)
> **File Paths:** carriage.csv (7), conda_env.yaml (3), validate.py (3), fake.csv (2), wine.ratings.csv (1)
> **CLI Commands:** python (5), pip (4), make (2)
> **Code Identifiers:** max_errors (4), conda_env (3), max_error (1)
> **Analogies:** for example (3), similar to (2)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **Prerequisites:** install (4)
> **Env Vars:** csv (3)

#### [Run projects from remote Git repositories](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=0)** - [Instructor] [[MLflow]] has the ability of running remote projects if you pass in [[GitHub]] URL, so one of the things that I want to show you is that how is that possible with an example repository that is actually pretty wildly used on the MLflow documentation everywhere.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=24)** This very short project similar to what we've seen already in the previous video.
>
> **[0:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=31)** So this is on the MLflow repository organization rather slash mlflow-example that's the repository, it's a poly one.
>
> **[0:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=40)** You see that it's fairly simple and doesn't get updated too often.
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=44)** It has the same structure we've seen before we have a MLproject file over here.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=50)** Very simple just in lines [[Python (Programming Language)|python]] train.py and there's alpha which is this value right there is 0.5.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=59)** And then the l1 ratio it defaults to 0.1.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=64)** And then if we go and take a look at that train.py file it is also actually pretty straight forward.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=71)** It will do a couple of different things it will start run and use those values.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=78)** You can see right there l1 and alpha right here.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=84)** So let's take a look and try to run this project.
>
> **[1:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=89)** So how exactly are we going to run it?
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=91)** We are going to go here and what we're going to do is go to the terminal and go and run it but to run these we will need to select one piece of information here the SSH based address.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=105)** I'm going to copy that and I'm going to use it to run it in the terminal.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=110)** So I'm going to do this.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=111)** And I'm going to say mlflow run and then that address right there and I'm going to say I don't know if it's going to ask me to pass in a parameter.
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=124)** Let's just try it like that and see what happens.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=127)** All right so it fetches the project and then it starts running.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=131)** And then it succeeds.
>
> **[2:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=133)** So that's pretty straight forward.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=135)** Let's take a look at some of the things that happened.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=138)** [[Fetch]] is the project from GitHub so it goes right to the source right there to GitHub that's the URL that I passed in.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=145)** And then it grabs the master branch and it looked at an mlflow environment that already existed.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=156)** Apparently, I already ran this.
>
> **[2:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=158)** So that's why this mlflow 2b6b69a3 already existed.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=164)** So it just ran that again.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=167)** It ran this elastic model and outputs a couple of values right there.
>
> **[2:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=173)** The documentation says that this also excepts alpah0.7 and see what happens.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=181)** I think this tanks when I pass something like that.
>
> **[3:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=185)** Well it didn't it actually worked.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=187)** If take a look at the mlflow or the MLproject rather and you go here and see the parameters alpha defaults to 0.5 and l1 ratio falls to 0.1.
>
> **[3:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/run-projects-from-remote-git-repositories?u=76281980&t=201)** So there you go that's kind of like how you run if a have a repository that is an MLproject and you run it remotely you see the technique that I just showed you, you're able to run that and fetch this automatically everything with mlflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (9), [[GitHub]] (3), [[Fetch]] (2), [[Python (Programming Language)|Python]] (1)
> **Tools:** github (3), terminal (2)
> **Versions:** 0.5 (2), 0.1 (2)
> **Env Vars:** url (2), ssh (1)
> **File Paths:** train.py (2)
> **CLI Commands:** python (1), ssh (1)
> **Analogies:** similar to (1), kind of like (1)
> **Cross-References:** previous video (1)

#### [Connecting MLflow to Databricks](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=0)** - [Instructor] There are a couple of things I want to show you here on how to connect [[MLflow]] to Databricks.
>
> **[0:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=7)** There you have several options, and MLflow is pretty flexible.
>
> **[0:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=11)** Let's start here with the documentation from Databricks itself.
>
> **[0:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=15)** It doesn't matter here that it's referencing [[Amazon Web Services (AWS)|Amazon Web Services]], because any of these will work.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=22)** As you know, you can install MLflow locally, and what you want is to make sure that everything is connected.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=28)** So here, it goes about the talking about the community edition, but don't worry about that.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=34)** It really doesn't matter.
>
> **[0:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=36)** What you need to, whenever you're configuring MLflow to communicates with a Databricks hosted tracking server, is to ensure that you are exporting the MLflow tracking URI, and here, this might not look correct, it might look like this is an example, but it isn't.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=58)** What it needs here is Databricks.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=60)** And optionally, you can use Databricks username and password if you want to authenticate straight away, or you can generate a [[Representational State Transfer (REST)|rest]] API token.
>
> **[1:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=72)** When you generate a rest API token, and create your your credentials file, then you can do, instead of a username and password, then you have the option to use the host and token instead of doing this.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=92)** So it's there, you have a couple of options that you can use to connect.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=99)** Next, it tells you to configure MLflow applications, but we're not going to go through that.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=103)** But definitely, you can... Well, it tells you right here, MLflow tracking URI, Databricks, and then MLflow experiments create.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=111)** But in essence, what it means here is that if you set these variables correctly, then you should be good to go.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=120)** Now sometimes, generating a token might be tricky, and I suggest going through the docs that generate a personal access token.
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=132)** It's pretty straightforward.
>
> **[2:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=133)** You would have to go to a hosted version of Databricks, which I'll show you in a second.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=140)** So this is my hosted Databricks that I have running here, and I believe if you come here, well actually let's go step by step with the docs.
>
> **[2:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=151)** It says click on the settings tab on lower left corner of your Databricks workspace, and then to user settings.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=160)** So let's go to the user settings really quick.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=162)** I'm going to click here, User Settings.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=165)** And you can see here that it already generated one, but it can create, generate a new token.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=170)** So say for example, I'm going to say this is an example token, and this is a good thing that it has like a lifetime in days that are (indistinct) to 90.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=178)** So three months there, and then it will go and expire and go away.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=183)** A good security practice.
>
> **[3:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=185)** So you generate that, and you get one time access to these token, and then you are done.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=191)** I'm not going to use that right now, but it is how you would create that.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=195)** All right, so next up, I want to show you how to connect MLflow to [[Microsoft Azure|Azure]] Machine Learning.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=206)** And you can use the configuration there if you want to make MLflow work with Azure Machine Learning Studio, and Azure Machine Learning Registry in this case.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=217)** Because it's not the only thing you want, you have many different options to connect MLflow to other remote services.
>
> **[3:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=225)** So in this case, I also want to show you how to do it with Azure Machine Learning, and Azure Machinery Registry.
>
> **[3:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=231)** So they talk here about an MLflow URI.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=235)** So there's a couple of ways that you can get that.
>
> **[3:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=238)** You can either build it manually, let's see if they have the way on... Yeah, I don't think they explain here how to do that manually, but they do have a way of setting that manually.
>
> **[4:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=252)** And the way you do that manually, I'll show you with this notebook here.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=256)** You can see here that the Azure MLflow URI uses these notations.
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=261)** So Azure ML, colon slash slash.
>
> **[4:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=263)** You'll have to set up these variables, the region, your subscription ID, your resource group, and the workspace name.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=273)** So if you have that with Azure Machine Learning, you'll be able to connect directly, and then that's it.
>
> **[4:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=282)** So no problem there by tracking, but I want to show you another way that you can use to get that.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=290)** And it is going to the portal, and then the MLflow tracking URI will show there, and it has these very convenient link here to copy that to the clipboard, and then you can export it.
>
> **[5:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=303)** So there you go.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=305)** There's like three different ways, two different services that you can connect MLflow to a remote tracking server.
>
> **[5:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/connecting-mlflow-to-databricks?u=76281980&t=311)** One for tracking models, but you can also use it to track any other types of information.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (15), [[Microsoft Azure|Azure]] (8), [[Representational State Transfer (REST)|Rest]] (2), [[Amazon Web Services (AWS)|Amazon web services]] (1)
> **Env Vars:** uri (5), api (2)
> **Documentation:** the docs (2), the documentation (1)
> **UI Navigation:** go to (2), click on (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** install (1), configure (1), set up (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1)


### 3. MLflow Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Components of the MLflow package](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=0)** - [Instructor] Let's go through some of the information required to understand what [[MLflow]] Models are.
>
> **[0:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=6)** So, MLflow Models is just a way of formatting for how a model, a machine learning model, should be interacted with, where it came from, what are the dependencies surrounding this model, how to interact with it, how to run it, how to serve it, and essentially, hopefully how it was also built.
>
> **[0:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=30)** So I'm using the MLflow documentation here, but I'll show you a little bit extra, so that you have a good idea on how this looks.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=39)** But I want to go through a little bit of the storage format.
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=44)** So you'll have these files in, whenever you're dealing with a model, particularly the MLmodel file, which is again, if you're following the convention that they're using, you know, for ML project, it's a YAML file, and MLmodel will be a YAML file as well.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=66)** So just be mindful that when you open that, it might not look quite good, especially in text data that don't recognize that as a YAML file.
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=76)** Then you'll have a couple of things.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=77)** You'll have the actual model, in this case is a .pkl file, a P-K-L, that's a [[Python (Programming Language)|Python]]-based model there.
>
> **[1:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=89)** Then you'll have your conda.yaml, which we've already seen how that looks like.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=93)** We'll have a Python environment that we'll also take a look, and then perhaps even requirements.text for things that we install right there.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=103)** Alright, so enough of the MLflow documentation.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=106)** Let's take a look about a thing that I actually built using ML Model.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=112)** And I created this project, and we'll take a look how to build it next, but I want to show you how it looks in Visual Studio Code.
>
> **[1:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=119)** So if I went through the actual run, and you can see here we have all of these files, we have the requirements one, we have the python_model.pkl, the Python environment ML Model, and conda.yaml.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=134)** We'll start by the ML Model.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=138)** Interesting enough, VS Code did manage to find that this is a YAML file.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=145)** So the syntax highlighting is working correctly there.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=148)** So that's great.
>
> **[2:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=149)** And let's take a look at some of the things that we're seeing here.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=154)** So this is a Python function.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=156)** We haven't covered what a Python function is in the context of building machine learning models and MLflow, but we'll take a look at that next.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=165)** But it indicates a flavor.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=169)** A flavor is just a way of telling them a flow, how it should work with this model.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=177)** So you have different flavors, ONNX is a flavor, scikit-learn is another flavor.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=183)** So you have different ways of interacting, different supportive ways to deal with loading and interacting with the model.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=191)** All right, so we have the artifact path.
>
> **[3:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=193)** In this case, I went straight into the path that it had that model.
>
> **[3:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=199)** So that does the artifact path cloudpickle_version.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=202)** So you start getting into some of the specifics behind that.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=206)** It was built using Python 3.8.13.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=209)** This is important because if I was using Python, let's say something ridiculous like Python 3.1, then this wouldn't necessarily be compatible.
>
> **[3:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=218)** So this is already advertising something pretty crucial and important.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=222)** And this is important because before things like MLflow, I definitely got into problems at some point trying to run auto ML Models that came from a service that I didn't have the dependencies or Python versions, and I had to find these by trial and error.
>
> **[4:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=241)** Alright, mlflow_version, perfect.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=242)** It was using 1.28 was the UUID and run_id, so I did run these to create that.
>
> **[4:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=250)** And what's the signature, the signature is important because it tells us what the input and outputs expected are for interacting with this.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=259)** All right, moving on, let's take a look at the conda.yaml.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=262)** Nothing really out of the ordinary.
>
> **[4:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=264)** We've already seen this file before.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=266)** We'll take a look at the python_env.yaml file.
>
> **[4:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=269)** And now this tells you a little bit more about all of the stuff regarding Python, about what the Python version is, what the build dependencies were and what are the extra requirements.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=280)** And these are here requirements.text.
>
> **[4:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=284)** So MLflow, let's see, CloudPickle, iPython, ooh, Transformers.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=289)** So this indicates that this might be coming from [[Hugging Face]], and we'll see how to get this going in a separate lesson.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=299)** But this is already important because it basically allows us to have lots of information regarding how this model came to be.
>
> **[5:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=309)** And again, it is just a normalized way, whether we can see about information specific to this model, Python versions and where it came from and how to work and interact with it.
>
> **[5:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=326)** You can see here the python_function loader_module is using mlflow.sklearn.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=332)** So it's native support for scikit.learn models and that's how this works right there.
>
> **[5:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=338)** And it tells you specifically the flavor is scikit.learn and it tells you how to do that.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=343)** But this one has two flavors, right?
>
> **[5:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=345)** Scikit.learn and Python function.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=347)** And the one that I show you in VS Code was using Python function, so there you go.
>
> **[5:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/components-of-mlflow-package?u=76281980&t=351)** We'll see next some of the other components of an MLflow package.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (14), [[MLflow]] (9), [[Hugging Face]] (1)
> **CLI Commands:** python (14), find (2)
> **Code Identifiers:** python_model (1), cloudpickle_version (1), mlflow_version (1), run_id (1), python_env (1)
> **Env Vars:** yaml (4), onnx (1), uuid (1)
> **File Paths:** conda.yaml (3), python_env.yaml (1)
> **Versions:** python 3 (2), 8.13 (1), 1.28 (1)
> **Tools:** vs code (2), visual studio (1)
> **Definitions:** is a  (3)

#### [Use a registry with an MLflow model](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=0)** - [Instructor] Using a registry with an [[MLflow]] model is something that you should start getting used to.
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=9)** This feature of MLflow is not unique to MLflow.
>
> **[0:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=13)** You can actually register models and I believe almost all cloud providers have like a solution for this where you can register those models and keep changing the versions that are associated with those models, especially when models keep changing, which is a very useful feature.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=29)** Alright, so how do we do this exactly with MLflow?
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=34)** I've documented a couple of the things that you can do here.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=38)** Basically, you have many different options on registering models and then retrieving them.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=43)** But essentially what it is, is that you are training or producing models, or creating new models, or creating new environment for those models.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=54)** And then you want to find some way to register them.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=59)** You can use an existing model and register it and start that way.
>
> **[1:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=65)** Now this doesn't give you much, it basically creates an empty placeholder with almost no information.
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=73)** You can do this through the API or DSDK, as you can see here.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=80)** But you can also use the user interface and I'll show you a little bit on how that looks.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=86)** Now, I'm not going to show you how to retrieve or update models right now, but definitely to create a a new model, you'll have to produce an artifact, and the way to produce an artifact is by using the log_model when you're training it.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=105)** All right, so we've seen that we can do that, but I haven't told you the whole story.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=111)** Now, if you want to try this out locally, which I highly recommend you do, you will want to run a server.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=120)** And the way to do this is kind of tricky, so you have to have a couple of things in order.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=126)** I'm going to paste a whole command here.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=128)** All right, so the server started, but like I said, I want to show you exactly what's going on here.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=134)** So let's take a look.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=136)** MLflow server is the command and sub command that you want to use.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=140)** The backend-store-uri, I'm going to use sqlite.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=145)** Sqlite is an embedded database.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=148)** You should have that available on your system otherwise, you'll have to install sqlite three.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=153)** And this is just pointing to a path, it's the name of the file on the current path, and then the default artifact route points to /tmp, which I'm just using as a temporary solution.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=166)** And then the host is 127.0.0.0.1 and running on port 5,000.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=172)** Alright, so that is how it runs.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=176)** And you can see here that it has put it, and now if I go to the UI, I go to my browser over here.
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=186)** And I go here.
>
> **[3:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=189)** It will show that I have this available.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=192)** So let's create a model to get started.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=195)** You can use the UI, you can say for example, t5-onnx and that will create an empty model.
>
> **[3:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=203)** So that'll give you the description, tags, and that way, with this, you can then interact with this because this is exactly the same as using this API clause over here.
>
> **[3:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=218)** So that is how you start interacting with the different models and use the register.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=229)** Especially, and I'm going to show you here, there's a couple of other things that you may want to be doing.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=235)** Once you've created this model, you can see here that there's a couple differences.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=242)** You can register a model, you will use MLflow register model.
>
> **[4:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=248)** But then you can use the create registered model to create a new registered model.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=254)** And if the name exists, it'll fail because this requires a unique name.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=259)** So make sure that you're mindful of the names that you have to use there.
>
> **[4:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=265)** But then you can also do this manually.
>
> **[4:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=269)** I think this is very cumbersome, if you want to try to do this manually.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=273)** So try to make sure that whenever you're doing this are like special occasions, in very few situations where you have to actually point to the run_id and where exactly that lives.
>
> **[4:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=288)** So that's it, that is how you interact.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=290)** That is how you log the model as you can see here.
>
> **[4:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/use-a-registry-with-an-mlflow-model?u=76281980&t=297)** And then interact with this server that allows you to store model information as we did before.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (6)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2), dsdk (1)
> **Code Identifiers:** log_model (1), run_id (1)
> **Versions:** 127.0.0 (1), 0.1 (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1), is an  (1)
> **Ports:** port 5 (1)

#### [Referencing artifacts with the API](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=0)** - [Instructor] Referencing and interacting with models that are living in a remote registry is a thing that... It's kind of like taking a step further when you're working with [[MLflow]].
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=14)** So we've already seen a little bit of the examples here of how you can register one, but we haven't seen how to retrieve or update these models.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=25)** First, let's take a look at what I have here.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=28)** I've run a couple of experiments already.
>
> **[0:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=30)** These experiments were run a few minutes ago, and these experiments were able to log an actual model, but there's a couple of things that are not really straightforward, and it might take a while.
>
> **[0:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=47)** It definitely took me a while to figure out, and I want to show you.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=51)** So what I want to do is I want to open my Visual Studio Code here, and I have a couple of things here.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=58)** So I have this Jupyter Notebook with some examples on how to register models and how to interact with the API dynamically, but let's take a look, first, at how I log the model.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=70)** So I have this small script here, and I really like [[Hugging Face]].
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=75)** I think it's tremendous, and what this script is doing is actually using Hugging Face, so it's inputting the pipeline from transformers, and then it's creating these [[Python (Programming Language)|Python]] class that basically tells MLflow how exactly it needs to interact with this model.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=96)** So the way it interacts with the Hugging Face model is it sets the tokenizer and model in the constructor, and then it defines a single method that, in this case, is translating English to German, that's fine.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=109)** It constructs a model input and output, and, finally, it goes and it creates the tracking starts that run, and it logs the model.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=120)** There's a couple of key items here.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=122)** First one is the log model.
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=124)** You can see here that whenever you're logging a model, you're producing an artifact.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=130)** You're producing that model, and, here, you're capturing all of the details.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=134)** In the beginning, I didn't have a registered model name.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=137)** So that caused that it wouldn't show up on the registry.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=143)** So in this case, I decided to call this the t5-small-summarizer, and a little bit of the details there about what the model is, and it's now waiting for registration, and it's using some of the parameters that I created.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=160)** Key item here is the tracking URI has to be set.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=165)** I wasn't setting the tracking URI, and that was causing the model not to be registered.
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=171)** So if you're not setting the tracking URI, basically, you won't get registered, and you won't know because there's no output or messages saying, "By the way, there's no tracking URI."
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=182)** So make sure that the tracking URI is always set to what you're expecting, and then when you're interacting with it, when you want to poke around with that model, then you have to make sure that, in this case, I'm doing that dynamically.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=200)** I'm running on port 5000, it's running locally, and I'm setting that again.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=206)** I am not sure why that's not default.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=209)** I believe that default is the file system, and so there's that disparity, because you're expecting things to be running on the server, but they're not.
>
> **[3:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=221)** All right, so let's go and open up my terminal real quick, and in my terminal, I'm going to run this log model and see what happens.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=235)** I'm going to say python log_model.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=237)** This is just a very straightforward, very quick, and it is running that and successfully registered model t5-small-summarizer and created version 1.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=251)** All right, so let's go to my web browser, and then if I refresh these, you'll see that there's now 16 seconds ago.
>
> **[4:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=258)** I run that, it created a model.
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=261)** That's fine.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=262)** We have some versions.
>
> **[4:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=264)** That's excellent.
>
> **[4:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=265)** So now, what I want is go here to Models and see what's going on there.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=272)** So if I click on Models, you will see that, now, t5-small-summarizer appears, and that Version 1 is there.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=280)** If I click here, there's a couple of things that are interesting.
>
> **[4:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=284)** If I click on version 1 again, and then I go and click on the Source Run, several different things will come up.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=293)** These are very, very interesting.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=296)** First, you'll have captured the ML model, which we saw before, the Python environment.
>
> **[5:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=303)** It allows you to have Copy, Paste, essentially Copy Paste code that you can paste on Spark data frame.
>
> **[5:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=315)** So you can run these and interact with this, which is really tremendous.
>
> **[5:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=319)** If you want to do this on the [[Pandas (Software)|Pandas]] data frame, you absolutely can do that as well.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=324)** So very powerful, very complete solution there if you want to interact with all these models, because they're capturing everything, really like even the parameters.
>
> **[5:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=335)** Well, in this case, I didn't use any parameters.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=337)** You'll see the Metrics.
>
> **[5:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=338)** There's nothing there.
>
> **[5:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=339)** I don't believe I used tags, so there's no tags, but the Artifacts, definitely there.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=343)** Requirements, you can see transformers, torch.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=347)** There's all kinds of different things there.
>
> **[5:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=349)** All right, so that sets the t5-summarizer, and, now, let's go back to the Visual Studio Code and let's start interacting with this.
>
> **[5:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=359)** First, we're going to import MLflow, so the tracking URI, and create a client object, that's perfect.
>
> **[6:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=365)** Now, we're going to register a model and let's see what happens.
>
> **[6:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=368)** This model must not exist.
>
> **[6:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=369)** So we don't have a t5-onnx, and this is just a name.
>
> **[6:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=373)** Perfect, so register that, and if we go back to the URI, to the web service, if I click Models, you can see that t5-onnx is there.
>
> **[6:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=386)** There's no version though, and the reason there's no version is because I just created it with a name.
>
> **[6:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=390)** If I click here, there's nothing going on, nothing very useful.
>
> **[6:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=394)** Let's go back and continue with executing ourselves.
>
> **[6:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=398)** We can definitely delete a register model as well.
>
> **[6:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=401)** If I click that, Delete a registered model, t5-onnx, you'll see that if I load this, it's gone.
>
> **[6:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=407)** Now, let's play a little bit with t5-small-summarizer.
>
> **[6:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=412)** Click on this, and you can see there's no description.
>
> **[6:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=414)** The stage is None.
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=416)** So let's make some changes there.
>
> **[6:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=419)** What we're going to do is we're going to update the description, and I'm going to say, "This is the T5 model in an ONNX version 1.6 using Opset 12."
>
> **[7:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=427)** So if I run this cell and executes, it completes the API call, and if I go here and it automatically... I didn't even have to reload, and the description was updated perfectly for version 1.
>
> **[7:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=444)** You can see here that the description says now that this is the T5 model in an ONNX version 1.6.
>
> **[7:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=450)** All right, so that's a good overview of how you can interact with these models when you're registering them in a tracking URI, in a tracking server, in a remote registry.
>
> **[7:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/referencing-artifacts-with-the-api?u=76281980&t=463)** I'm using a local server here, but this would, essentially, feel the same regardless of what remote API you're using, and it is... We didn't cover absolutely everything that you can do, of course, but this should allow you to get you started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLflow]] (3), [[Hugging Face]] (3), [[Python (Programming Language)|Python]] (3), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** uri (8), api (3), onnx (2)
> **CLI Commands:** python (3), make (3)
> **Versions:** version 1 (6)
> **Tools:** visual studio (2), terminal (2), jupyter (1)
> **UI Navigation:** click on (4), go to (1)
> **Code Identifiers:** log_model (1)
> **Ports:** port 5000 (1)

#### [Saving and serving MLflow models](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=0)** - Now that you know how to register some of the models that you'll be working with, it's time to find about how to interact with them.
>
> **[0:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=10)** And one way that you can do that is by serving them.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=14)** We've already seen a little bit of these script that I created to log that model, which has a couple of components.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=22)** The first component is this one where we have the summarizer class, which inherits from this [[Python (Programming Language)|Python]] model class.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=33)** So as you know, this is so that you can, so that ML flow understands how to interact with that.
>
> **[0:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=41)** And in this case, we've used a hugging phase, API so that we can do some predictions.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=51)** In reality what we're doing is translating English to German.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=55)** As you can see here, we're going to get the input and then we're going to use that input to the tokenizer.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=61)** And then the predict method is going to return the actual output.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=68)** Now we've also, and this is pretty important, especially when you're serving, we've also determined that we have the model input and model output right there.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=80)** And we are defining how to interact with this model.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=86)** Now, when we run the script, we were able to log that model run.
>
> **[1:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=94)** You can see here that we did log it and we used that registered model name t5 small summarizer.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=102)** Now you can interact with this model from local runs, and that is how we're going to do that.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=110)** And the way, and I put this right here at the very bottom, the curl command that you can use to make that happen.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=117)** All right so I'm going to go to my terminal and see how we can make that work.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=122)** Okay so I'm here in my terminal and I have ML flow installed.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=127)** I have a couple of ML runs already.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=131)** You can see if I list the contents there, you'll see that there are several.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=138)** So let's go through some of the components you will need to know in order to run from a local run.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=146)** So you can do ML flow models serve, and I'm going to pick this run ID 151650, which is right here, right that one.
>
> **[2:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=163)** So that one is the one that we're going to use and you can see has kind of like a path slash model and I'm going to use port 5,001.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=175)** And the reason is because if I don't use port 5,001 and let's try it out really quickly, so that you can see kind of like what you'll be getting into is an error condition.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=187)** You are getting this error condition because the port is already in use, as you can see here, connection in use port 5,000.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=198)** So that is because I have already a tracking server or a tracking URI running already.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=202)** So I am going to use, I'm going to use port 5,001.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=210)** So if I run this, you'll see that it was able to boot up correctly and it is running already.
>
> **[3:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=218)** Now good thing that I was able to save that curl command so that I can interact with it in the terminal.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=226)** So remember this is serving an API and one of the things that this will do is that like if I go to a browser and go to this address, nothing will happen.
>
> **[3:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=238)** It only has one end point, which is invocations.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=242)** And this is true for anything that you will serve with ML flow.
>
> **[4:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=245)** So here on this new tab, I have the command pasted and the command is going to use that same URL or URI 127.0.0.1 on port 5,001.
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=261)** And you can see that I am also using invocations.
>
> **[4:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=264)** This is critical because if you don't use that path, it will get you into trouble.
>
> **[4:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=270)** And remember those inputs and outputs?
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=272)** That is defined here.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=273)** You can see I'm using columns, text and the data.
>
> **[4:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=277)** And this is kind of like a, almost like a [[Pandas (Software)|pandas]], it is a pandas format.
>
> **[4:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=282)** You can see here that the format is pandas split.
>
> **[4:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=287)** Alright, so let's see what happens if I run this.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=289)** So I'm not summarizing but doing a translation to German.
>
> **[4:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=294)** And I wanted to translate today's a perfect day to practice automation skills.
>
> **[5:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=301)** We can of course do all kinds of different things here and we can say, we can say something, something different.
>
> **[5:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=308)** Say for example, curl can be difficult to get right, and we can run that and curl can- Well I can't read German, but you get the gist of it.
>
> **[5:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=323)** So if we go back to the other tab on my terminal, you'll see that interaction in fact is happening correctly with a little bit of output.
>
> **[5:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=333)** You know there's some warnings about the max length.
>
> **[5:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=336)** The tokenizer is not working quite correctly given the type of input but that's fine.
>
> **[5:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=344)** We are able to interact with it.
>
> **[5:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=346)** Now, one of the caveats here, and we'll see these in other videos, is that you are kind of like left in the dark as to how this will work.
>
> **[5:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=357)** So I'm going to cancel the serving so that you can see a little bit of what is going on in this specific run right there.
>
> **[6:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=368)** So I'm going to have several runs and I'm going to say Emma runs a list of contents of the directory and zero.
>
> **[6:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=376)** And you can see there's plenty.
>
> **[6:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=379)** Let's find all of the runs that have models in it.
>
> **[6:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=384)** So actually what I want to do is not, I did the the wrong rep here, so I'm trying to find anything that has a model and see if the contents are there.
>
> **[6:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=396)** So there you go.
>
> **[6:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=397)** So you have a few, just a few runs that were actually able to produce one of those models.
>
> **[6:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=403)** So if I go and grab, so for example the first one, and I do three so that we can see what the contents are you should already be familiar with this type of setup.
>
> **[6:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=414)** This is the magic that allows ML flow to understand what is going on, how to serve it, what are the requirements, where is the model, what the Python environment looks like, and conduct environment if anything that's kind of like what it needs to do.
>
> **[7:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=433)** And the ML model explaining what it is and how it works.
>
> **[7:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=438)** So in fact, if we were able to look at that ML model file and if we concatenate the contents of that run, you can see here that it has the actual signature and it has a timestamp and all kinds of different useful information that again we've already seen for ML flow.
>
> **[7:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=459)** So that's super useful.
>
> **[7:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=460)** And that is the those are the parameters, those are the things, that [[Metadata]] that allows ML flow to serve a model.
>
> **[7:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=468)** So there you go.
>
> **[7:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/saving-and-serving-mlflow-models?u=76281980&t=469)** That's how you serve a model that was previously run from an an ML run with a capture ML run on a local disc.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (3), [[Python (Programming Language)|Python]] (2), [[Metadata]] (1)
> **CLI Commands:** curl (4), find (3), python (2), make (2)
> **Analogies:** kind of like (5), for example (2)
> **Ports:** port 5 (5)
> **Env Vars:** api (2), uri (2), url (1)
> **Tools:** terminal (4)
> **UI Navigation:** go to (3)
> **Definitions:** is an  (1), is a  (1)


### 4. Introduction to Hugging Face

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Hugging Face?](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=0)** - [Alfredo] Let's dive in into a little bit about what [[Hugging Face]] is.
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=4)** Now, sometimes people don't see Hugging Face as a platform, but in fact it is.
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=9)** You can see here right off, like the main website, we see models, datasets, spaces, and docs.
>
> **[0:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=16)** We'll cover a few of those in detail later, but it is enough to say that we're going to be able to interact with and host models and create our own version of our models, work with datasets, existing ones and our own as well.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=35)** So the way I see it, is that it's a platform, a way where we can cross-collaborate with everything machine learning.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=46)** Now I've gone ahead and created my own profile, an account, and you can see here that there's models and datasets.
>
> **[0:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=53)** I don't have anything yet.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=54)** I'll have to fix that pretty soon, but this is the way, again, the way I see it is kind of like [[GitHub]].
>
> **[1:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=62)** Just like GitHub isfor software engineering, I see Hugging Face being the same thing, but for machine learning, collaboration, and interaction.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=70)** The other thing that I want to show you is once I created my account, I had these programmatic access using the hubs, [[Python (Programming Language)|Python]] client library.
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=81)** We'll get into a little bit more details as to what the hub is, but you can start seeing here that sometimes it's not only the website, but you have libraries that you can use to create repositories with specific names and with a specific purpose, like say, for example, a model or a dataset or even a space.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=107)** Now spaces are its own special a thing, and we'll cover those later as well, but just wanted to show you that you have the ability to interact with Hugging Face in many different ways.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=122)** And then the last thing I want to show you is that, and this is the Python Package Index.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=128)** This is where PIP goes and finds itself packages.
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=132)** There are a couple things I want to show you.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=135)** First is, the first one is Transformers, and if you search for Transformers, and you go to this one right here, version 4.22.2 in this case, you'll see that the familiar Hugging Face logo is right there, and this is in fact coming from Hugging Face.
>
> **[2:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=155)** So this Hugging Face itself providing open source tooling, open source libraries to interact with models.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=166)** And here, Transformers is specifically for text, vision, and audio, and it is definitely a joy to use, and we'll see a couple of things that we can use, and then you have all these kinds of demos available.
>
> **[3:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=184)** Now, the one thing I want to show you in relation to this.
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=186)** I'm going to go back here.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=187)** So you see here T5 and GPT-2 mentioned.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=191)** Let's go back to the website, to the main website over on this, the first one, the first step, rather, and I'm going to search for GPT-2.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=200)** I'm going to say that, I'm going to hit return, and then you'll have several different things.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=206)** So this means that you have support for [[PyTorch]], [[TensorFlow]], TF Lite, It uses several different things here, and you have this model card.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=220)** The model card allows you to demo or explain what this is about and give you a little bit of information.
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=228)** You can look at this, you can deploy it.
>
> **[3:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=231)** Hugging Face has its own way of deploying its models.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=235)** You have like a hosted API where you can do live inference and you have like the endpoints, and even SageMaker, Direct SageMaker, SageMaker Connection.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=246)** So that's pretty interesting, and I'm going to scroll back here because I'm going to show you, well, here's the hosted inference API.
>
> **[4:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=253)** So let's try to compute that and see what happens, and then we'll see these being completed by the model.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=260)** So pretty good, pretty useful, and what I was telling you about before, and I mentioned Spaces a little bit, was that you have the ability to use this GPT-2 model and do something else with it and repurpose it and fine tune it to your own needs.
>
> **[4:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=278)** And all of these are lots of different accounts that have been doing something with it.
>
> **[4:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=284)** Now here you have examples, you have a little bit of documentation, and then we saw Transformers, but you can see here pipeline and set_seed.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=293)** So Transformers allows you to have an abstraction library with Python to do text generation.
>
> **[5:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=300)** In this case, this example is going to be using text generation.
>
> **[5:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=303)** You can see here, and then it's like GPT-2, and again, we'll see all of this in detail later, but you get the output.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=310)** So essentially four lines of Python if you're counting the import statements, and then you get something really powerful out.
>
> **[5:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/what-is-hugging-face?u=76281980&t=318)** So you get libraries, hosting data sets, hosting models, and interaction all from Hugging Face in a web UI that allows cross-collaboration for anything machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (9), [[Python (Programming Language)|Python]] (4), [[GitHub]] (2), [[PyTorch]] (1), [[TensorFlow]] (1)
> **Env Vars:** gpt (4), api (2), pip (1)
> **CLI Commands:** python (4), pip (1)
> **Analogies:** kind of like (1), just like (1), for example (1), it's like (1)
> **Versions:** version 4 (1), 22.2 (1)
> **Tools:** github (2)
> **Code Identifiers:** set_seed (1)
> **Cross-References:** go back to (1)

#### [Overview of the Hugging Face Hub](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=0)** - [Instructor] Let's do a quick overview of the [[Hugging Face]] hub.
>
> **[0:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=3)** Now, the Hugging Face hub means that you will be interacting with repositories, models, data sets, spaces, and even perhaps organizations and endpoints, depending on what you're trying to do.
>
> **[0:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=19)** So I have the main, for my account, the main Hugging Face space.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=25)** So if I go ahead and go towards the New button over here, you'll see that you have three main options.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=34)** If I go to Model, well, that's effectively a repository.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=39)** So I'm going to click here and you'll see that I get prompted to create a new model.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=46)** So in here, you can actually fill out the names and have a couple options.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=51)** If you've worked before with [[GitHub]], this will feel very, very familiar.
>
> **[0:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=56)** It's similar interactions, and you can do the same thing here with the Hugging Face [[CLI]].
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=63)** So you'll have to specify who's the owner, in this case, I'm the only owner.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=68)** I don't have, I'm not part of any organization.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=71)** And I'll put the model name, for example, example model name, and then the license, I'll pick, you know, probably ,say something like MIT, if it's supported, I think I scrolled past by it.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=82)** I can say MIT and if it's public or private.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=86)** So once that's available, that is uploaded, I can consume these from anywhere, either with the libraries from Hugging Face or directly from this page.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=99)** But there's more to the hub than these.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=102)** And I'll continue exploring some of the other things.
>
> **[1:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=104)** The data set is, it's the same interface.
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=108)** And again, you can do this with the command line tool as well, where you can put information here as to what the dataset is.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=115)** Now, datasets similarly will allow you to have those files hosted in.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=121)** And all of these, by the way, are GitHub repositories.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=125)** So both the dataset, the model, they're all GitHub.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=127)** GitHub, not GitHub, [[Git]] repositories where you can interact with and have full requests and changes and even clone the repositories locally so that you can have some interaction.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=141)** You'll have to have Git LFS.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=144)** And actually this is covered in the documentation.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=148)** If I go back here, you can see here that to clone your model or dataset locally, it'll require LFS.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=157)** So I think newer versions of Git, the command line tool will come with LFS installed.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=162)** But if it doesn't, you can see here it's Git LFS installed, and then that's good tool and then you can clone it pretty straightforward, like that.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=172)** And similarly, going back to this, this was with a data set.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=176)** If we go back and say Space, this is the one that I wanted to show you.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=182)** Space is allows you to have a hosted version of your own application using Hugging Face.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=192)** And in this case it has options of, here it tells you Streamlit or Gradio, but in fact you have these three options.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=202)** You can use Streamlit, Gradio or Static.
>
> **[3:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=205)** What does this mean?
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=206)** Like, if you want to demonstrate what your hosted application can do, and you want to do that interactively, you can use any of these options to do just that.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=217)** So the space will allow you to have some of those running and make it really, really interactive.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=226)** So that's it, that's kind of like a big high level overview.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=230)** I didn't cover organizations, but essentially that's if you're having a group of people or your own company and you're working with all machine learning engineers and you want to create your own or new organization, then you will do that, similar to what you would do with GitHub and an organization, when you join a company, say, for example, let's see some of these ones right here.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=254)** Well, these ones are not organizations, but you'll get, [[Google]] is an organization.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=259)** So we go, let's take a look at that one.
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=261)** And in this case, Google is the organization and this is the project.
>
> **[4:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=267)** So if I was collaborating, probably here, Google have to give me access to their own organization and help me contribute to this.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=276)** And I don't want to translate this right now.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=279)** And that's a quick overview of what the hub is, essentially a few different components that we discussed.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/overview-of-the-hugging-face-hub?u=76281980&t=290)** We talked a little bit about data sets, spaces, organizations, and models and repositories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (6), [[GitHub]] (6), [[Git]] (4), [[Google]] (3), [[CLI]] (1)
> **Tools:** github (6), command line (2)
> **Env Vars:** lfs (4), mit (2), cli (1)
> **CLI Commands:** git (4), make (1)
> **Analogies:** for example (2), kind of like (1), similar to (1)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)

#### [Introduction to the Hugging Face Hub](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=8)** - [Instructor] [[Hugging Face]] Hub is really about just a few [[Microsoft Products|products]].
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=12)** First, you have the ability to log in and create an account, and you can see here's my profile and I have settings enabled as well.
>
> **[0:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=21)** And if we go to settings, the most important aspect of your settings beyond putting your full name in homepage, et cetera, is to actually create an access token.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=34)** The access token allows you to programmatically interact with the Hugging Face Hub.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=39)** So what it means is that from [[GitHub]] actions, you could push maybe artifacts into Hugging Face from a development environment, you could go through and read and write data, for example, a data set, or you could configure a Spaces application as well.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=58)** So I would say this is the first part of the Hugging Face Hub is make sure you got an account and you've created an access token and save that token somewhere secure.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=67)** The next thing to be aware of is the models.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=70)** So if we go to models here, this is really the heart and soul of a large component of Hugging Face.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=77)** At this time you can see there's 80,000 models, I'm sure this is growing by the month, and it could be into the millions at some point.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=86)** And these models here are composed of multiple tasks.
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=91)** And you can see the tasks.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=92)** We have image classification, translation, et cetera.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=96)** And if we go through here, you can even pull down even higher level categories like [[Computer Vision]].
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=102)** These are all models that deal with computer vision.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=105)** [[Natural Language Processing (NLP)|Natural language processing]], like translation or doing text generation.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=111)** We also have audio.
>
> **[1:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=113)** In this case, you could see things like automatic [[Speech Recognition]].
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=117)** In fact, if we select automatic speech recognition here, one of the things you'll notice here is that they have a sort by the most downloads.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=126)** You can see all the different downloads here for speech recognition.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=131)** And you could take a look at which particular model you may want to play around with when you're dealing with models.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=137)** So really the ranking here are actually good ways to actually figure out what it is you want to do when you're dealing with a particular category.
>
> **[2:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=150)** And in fact, one of the more popular recent additions is OpenAI Whisper, and notice that this openai/whisper-large, you can actually use Hugging Face to actually include it and transcribe things inside of a project.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=167)** So that's models.
>
> **[2:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=168)** Now, if we go to data sets, the next thing to be aware of with data sets is that there are also a large amount of data sets.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=176)** And the reason why these data sets are interesting is that they can be used for [[Fine Tuning]].
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=183)** So this means that you can customize these pre-trained models and make them even more accurate for particular problems you're solving.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=191)** So here we say fine grained tasks like language modeling, multi-class classification, et cetera.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=198)** These are all useful places to use these datasets.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=202)** And what's also helpful is that if you go to the dataset, you can see here that there are the structure, information about the dataset.
>
> **[3:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=211)** You can even preview it and you can even select right here, this API call and just query it inside of your terminal.
>
> **[3:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=221)** And finally, you can even go and train inside of your Hugging Face environment.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=226)** In general here, the dataset is one of the more useful aspects of the Hugging Face platform.
>
> **[3:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=232)** And you can also upload data into the dataset.
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=236)** The last key component here is Spaces.
>
> **[3:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=239)** And what's useful about Spaces is the way to make machine learning applications.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=244)** And it is quite easy to actually create one.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=246)** If you just say create new space, it'll ask you for the name of the space and then what technology you want to use.
>
> **[4:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=252)** Streamlit, Gradio, Static.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=255)** And you can actually share this out with a particular license if you want.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=259)** You can also go through and look at other models.
>
> **[4:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=263)** And this is actually a great way to get familiar with certain things.
>
> **[4:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=268)** If you want to take a look at, you know, some potential example of something, you can go through here and figure out, for example, the files themselves.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=279)** You can actually read through, and look at the particular files that were used for something.
>
> **[4:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=285)** Here's another one, [[Stable Diffusion]] demo.
>
> **[4:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=288)** We can see there's an application file right here and they're using Gradio for their Spaces application.
>
> **[4:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=294)** So really it's a place that collects models, data sets, spaces to use it programmatically.
>
> **[5:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-the-hugging-face-hub?u=76281980&t=300)** You would go in and create a profile, create a settings section where you use an API key, and we're going to get into this in a little bit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (8), [[Speech Recognition]] (3), [[Computer Vision]] (2), [[Microsoft Products|Products]] (1), [[GitHub]] (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (3)
> **Env Vars:** api (2)
> **Tools:** github (1), terminal (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (2)
> **Definitions:** means that (1)

#### [Using Hugging Face repositories](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=0)** - [Instructor] Let's get started with [[Hugging Face]] repositories.
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=4)** So here what I have is the default page from Hugging Face.
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=9)** I've logged in.
>
> **[0:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=10)** I don't have any models or datasets yet on my account.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=14)** Let's take a look.
>
> **[0:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=16)** You can see here that I have the options to create one, but I'm going to follow the documentation from Hugging Face to be able to create a repository.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=27)** So I am going to go and use one of the libraries.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=29)** I'm going to open up my terminal over here.
>
> **[0:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=31)** I'm going to create a new virtual environment, well, I'm going to call the venv module, and I'm just going to call it venv as well.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=39)** And then next I'm going to activate this as always.
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=44)** And now that I'm activated, I'm going to follow the instructions from Hugging Face, which tell me to install this huggingface_hub, which is what we're going to go through today.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=59)** And it's going to go ahead and install some dependencies.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=61)** And next I want to log in.
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=63)** So to log in is, I'm going to go [[Hugging Face|huggingface]]-[[CLI]] login.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=70)** And then that's going to tell me that I now need a token.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=74)** So I have to go through and generate a token from this URL over here.
>
> **[1:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=79)** And that's fine, I'm going to go back to here, and I'm going to say, well, let's actually go ahead and copy this, and open up that tab.
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=91)** And I am going to go ahead and create a new token.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=95)** So [[Tokens]] are kind of like the ability of like have like temporary passwords for the same thing, for authenticating to the same place.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=103)** I'm going to say this is for a demo, and I want to not only read, but I want to also write.
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=108)** So I'm going to generate the token and I'm going to have this available now.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=112)** I'm not going to show it even though that is temporary, but I'm going to copy.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=115)** So I'm going to, I'll be using this little icon right there, and later if I want to remove it, I can definitely go ahead and delete it.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=123)** And then that's fine.
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=124)** So I'm going to go and copy that, and then go back to the terminal over here.
>
> **[2:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=129)** I'm going to paste it over there. And then hit Return.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=134)** And then it says that the token has been saved to /Users, .huggingface/token, that's perfectly fine.
>
> **[2:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=142)** Authenticated through [[Git]]-credential store.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=145)** But this is in the helper defined on your machine.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=148)** You might have to re-authenticate when pushing to the Hugging Face Hub.
>
> **[2:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=152)** Run the following command in your terminal in case you want to see this credential helper as a default.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=157)** To demonstrate what I want to do, right now, I want to show you the website or the URL rather for the welcome site.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=165)** So essentially what I want to do is right here, where we've already installed Hugging Face Hub.
>
> **[2:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=173)** Now we've done the CLI login, and now I want to create a repository.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=177)** So I'm not going to use the website interface.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=180)** So what we want here is huggingface-cli repo create, and then we're going to do, we'll figure out the repo name in a second.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=190)** And then what I want to do is upload a model.
>
> **[3:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=193)** I have a model already, a preexisting model, so I'm going to do that.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=197)** So I'm going to go back to the terminal where I've authenticated already.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=200)** I'm going to paste this. This is not exactly correct.
>
> **[3:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=203)** So let's go ahead and change this.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=206)** I'm going to say demo-onnx is going to be the repository I'm going to create.
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=213)** And the type is model. That's fine.
>
> **[3:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=215)** I'm going to hit Return and see what happens.
>
> **[3:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=218)** All right, you're about to create alfredodeza/demo-onnx.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=223)** Proceed? Yes, I want to proceed.
>
> **[3:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=224)** Let's go ahead, and perfect. So that has been created.
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=228)** Now let's take a look and see what's going on here.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=233)** And I've opened, and now there's no model card, that's fine.
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=236)** There are no files and, but we could definitely upload some files.
>
> **[4:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=240)** So I can do that over here.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=242)** And you can see that I can definitely start pushing some of the things that I want.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=249)** So let's take a look at again here at the welcome page and see what else we can do.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=257)** So now let's try to add a model.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=260)** So I'm going to be able to upload a model and then see how we can get that into our repositories.
>
> **[4:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=265)** Now that my repository has been created, I'm going to clone it back again.
>
> **[4:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=270)** So I'm going to create this repo inside of my repo demo, and that's empty.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=276)** And I'm going to say, I'm going to clone this, and now I will have, I'll go to demo-onnx.
>
> **[4:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=284)** And now it's empty except a single file.
>
> **[4:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=286)** So I'm going to add this t5 very large model that I have here, and I'm going to put it here and I'm going to add it.
>
> **[4:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=298)** And then that's going to take a quite a chunk of processing there, and I'm going to push it back to Hugging Face.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=305)** So I'm going to say a git push, and then I'm going to have to authenticate again.
>
> **[5:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=313)** Now that is fine.
>
> **[5:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=316)** I'm going to say that's my username, and then my password is going to be the one that I used before.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=324)** So that's one of the problems that you may have if you're trying to authenticate over the command line tool.
>
> **[5:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=331)** But I'm going to go ahead and paste my token.
>
> **[5:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=334)** So now that I'm back on Hugging Face, I want to upload the model that I had before.
>
> **[5:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=339)** So I'm going to click here on Add file and upload new files.
>
> **[5:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=342)** If I wanted to create a new file, I would have to go through the text file versions.
>
> **[5:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=346)** I mean, you can see here, that if I click there, you'll slash, then the name of your file, then the contents, and then I can commit.
>
> **[5:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=353)** But I don't want that. I want to upload some files.
>
> **[5:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=356)** I'm going to click here.
>
> **[5:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=357)** And then I am going to drag them from my window, from my operating system right here.
>
> **[6:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=364)** So I'm going to put this file over there.
>
> **[6:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=366)** It's going to start uploading, and I'm going to commit directly to the main branch.
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=370)** And those changes are fine.
>
> **[6:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=372)** And I'm going to say commit changes.
>
> **[6:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=374)** So that's going to upload.
>
> **[6:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=376)** And this is going to take a second, because this is a very, very large model.
>
> **[6:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=380)** So I can see that my operating system is reporting that I'm uploading, well, at a very, a fairly fast rate.
>
> **[6:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=388)** I'm able to push it almost 60 megabytes per second.
>
> **[6:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=391)** So this is going to take a second.
>
> **[6:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=392)** And you can see there that it was able to go through and push 439 megabytes of these t5 encoders.
>
> **[6:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=402)** So that's great.
>
> **[6:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=404)** The file is stored with Git LFS, it's too big to display, of course, because it's very large.
>
> **[6:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=409)** And now the next thing, if I wanted to make this available to others and make it easier for us to consume, I would have to go to the model card over here and then start uploading details about how to use this, and it's essentially a README.md markdown file that will allow me to display how this would work.
>
> **[7:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=432)** So if I go, say, for example, to show you a different model, if I go here to Models, let's say for example, this one, stable-diffusion.
>
> **[7:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=441)** This right here is the model card.
>
> **[7:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=444)** So you see that it is just a markdown file that you can add, allow to put some documentation, some useful links.
>
> **[7:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=452)** Essentially this is the README file.
>
> **[7:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-repositories?u=76281980&t=454)** So there you go, that is how you would go in, and make some updates, create a repository and upload a model to this repository.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (8), [[Hugging Face|Huggingface]] (3), [[CLI]] (3), [[Git]] (3), [[Tokens]] (1)
> **CLI Commands:** git (3), make (3)
> **Env Vars:** url (2), readme (2), cli (1), lfs (1)
> **Tools:** terminal (4), command line (1)
> **Cross-References:** go back to (3)
> **Analogies:** for example (2), kind of like (1)
> **Documentation:** the documentation (1), the readme (1)
> **UI Navigation:** go to (2)

#### [Using Hugging Face Spaces](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=0)** - [Instructor] Let's see what [[Hugging Face]] Spaces is all about.
>
> **[0:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=3)** We've already done a little bit of work with models and we've interacted with Hugging Face, the platform itself a little bit already, but right now we're going to concentrate in creating a Space.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=17)** So to do that, I am going to go ahead and create a new Space.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=22)** I'm going to click here on this button over here called New and I'm going to say I'm going to create a new Space, create an interactive machine learning demo.
>
> **[0:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=31)** So what that is, what a Space is, it will allow us to get this machine learning demo going.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=37)** So we'll see what are some of the options.
>
> **[0:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=40)** Now, you can also do this on the command line tool, but I'll concentrate using the web interface.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=45)** I have already my account over here, and we'll create a new Space name, we'll set up a license, and then I'll pick up Gradio.
>
> **[0:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=53)** You have three different options.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=55)** You have Streamlit, you have the ability of using that.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=61)** I'm going to use Gradio, like I said, but you can also do a static application.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=66)** So this is the interactive portion of it, and we'll see why that is important in a second.
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=73)** So for this one, we'll say space-demo and we'll be using a model and we'll see how that looks.
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=81)** And for license, MIT is fine for now.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=84)** You can actually pick any license that you may want, like I said, and we're going to make this use Gradio and we're going to leave it public.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=93)** You can have the option to make it private, and that's fine.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=96)** And so that's essentially it, like three different, well, four options, the name, the license, the Space SDK, in this case I'm going to use Gradio and then I'm going to make it public.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=107)** Next I'm going to create Space.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=109)** This is going to take a quick second and you can see here that this is pretty much ready to go.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=117)** So let's explore a couple of the things that are needed here.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=121)** First, there's always, this is a [[GitHub]] repository.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=125)** Next, are you going to have to create in app.py.
>
> **[2:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=129)** This is a requirement.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=130)** It is kind of like the main entry point, and we're going to be using Gradio.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=134)** So here you have this example that imports Gradio as gr and then it builds the interface and then it launches it.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=141)** And once you're done, you can commit your changes and push them to your application.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=146)** And then that's done.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=147)** I think that for now we're going to, oh, and one last thing is that the requirements, if you have special requirements, you have to add them.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=156)** So those will get automatically installed and it takes a few seconds.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=161)** So let's, instead of like going through the command line tool and showing you all of that, I want to go ahead and I'm going to create a file.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=176)** So I'm going to go to files over here and I am going to create that app.py.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=182)** So you can see already, have a README and you can see that there's a little bit of stuff that was added automatically.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=191)** So I'm going to add a file and here I'm going to say create new file and I'm going to say app.py.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=200)** And then I'm going to paste a pre-made, ready-to-go app.py that I already have.
>
> **[3:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=205)** And we'll go through it.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=206)** So I pasted that.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=208)** Let's take a quick look at what are some of the things that I have pasted.
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=213)** So first of all, I am going to use transformers and I'm going to use from transformers, I'm going to use specifically, I'm going to use the pipeline, and then I'm going to create a summarizer application.
>
> **[3:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=227)** Now, we haven't gone through some of the APIs needed for transformers, for Hugging Face and how this all works, but to demo the ability of interactive demo, you have to deal a little bit with this, and this is going to be enough.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=246)** I mean, you don't need to understand all of the inner workings on how all of these are set up, but we'll cover those later.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=255)** But this is going to be very useful to understand the Spaces and how the demo works.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=259)** All right, so we have a single function called translate, and it's going to accept a single input called text.
>
> **[4:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=265)** We're going to make sure that we're not getting any quotes or we're transforming, changing, replacing quotes and transforming, changing ampersands.
>
> **[4:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=277)** That's fine.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=279)** This is optional.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=280)** I left it there because I think it's a good idea.
>
> **[4:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=283)** Then the result is this one line, and when I say minimum length is 180, and then we're going to return these, which is effectively the text.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=293)** Next we're going to create the interface.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=296)** And the interface for Gradio is going to specify the single function.
>
> **[5:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=301)** You can see here that it's the name of the function app here.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=305)** And then the inputs is going to be a text box.
>
> **[5:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=309)** What does this mean?
>
> **[5:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=309)** That when we create this, it's going to show us a text box for input.
>
> **[5:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=314)** And then when I say lines is 10, that's going to be kind of like the Space that we're going to have available to input our text and then a placeholder.
>
> **[5:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=322)** Then we're going to say, "Hey, enter some text to summarize."
>
> **[5:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=325)** You can put here whatever you want.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=327)** And then the outputs is going to be a text output.
>
> **[5:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=331)** This is useful because there are outputs that are, for example, image outputs.
>
> **[5:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=334)** And then finally this is going to launch that.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=337)** Alright, so I'm going to commit that directly and I'm going to do that.
>
> **[5:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=341)** You can press the button and then up here you can see that there's this thing called, the icon has changed to Building.
>
> **[5:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=349)** So let's take a quick look at, I mean, I can't click there, it's just like an image, but I can click view log.
>
> **[5:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=356)** So I'm going to click here and see what's going on.
>
> **[5:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=359)** Alright, so there's a lot of things here going on.
>
> **[6:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=361)** And you can see these mostly looks like a Docker log output.
>
> **[6:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=369)** And that's right, this is Docker log output.
>
> **[6:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=373)** And you can see here that it's using [[Python (Programming Language)|Python]] 3.8 and it's copying requirements.txt, and it's creating some, some of the defaults that this application will need to run.
>
> **[6:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=385)** Now that's all good except we now are getting into trouble because requirements.txt is a file that we do not have.
>
> **[6:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=394)** So why is that important?
>
> **[6:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=396)** Well, because if I go back to our app.py, we're importing, we're using transformers, but we're not importing it and we're using [[TensorFlow]] and we're not installing it.
>
> **[6:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=410)** Sorry, like we are importing it, but we're not installing.
>
> **[6:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=413)** So let's go ahead and create another file.
>
> **[6:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=419)** Now you'll see that here we're building up here, but because we don't have the requirements, the application will try to start behind the scenes and it will fail.
>
> **[7:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=429)** So we'll probably, if I'm not fast enough, we'll see that this becomes an error.
>
> **[7:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=434)** All right, so I'm going to go to Files again, I'm going to create a new file and I'm going to call these requirements.txt.
>
> **[7:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=443)** So I'm going to say requirements.txt, and then I'm going to put transformers, I'm going to use 4.21.2 and TensorFlow, 2.9.1.
>
> **[7:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=454)** Those are things that I know will work with this demo.
>
> **[7:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=456)** And then I'll commit them directly to the main branch.
>
> **[7:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=460)** So I'm going to say create requirements.txt, and then commit new file.
>
> **[7:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=467)** And then that's going to trigger the building again.
>
> **[7:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=470)** So if I click logs again, you can see here what I was telling you before.
>
> **[7:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=476)** Application startup is telling me the module not found, module name transformer is not there.
>
> **[8:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=483)** So this is an error and it's something to be aware when you can see here that we already got into trouble, so this is runtime error and that's fine.
>
> **[8:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=494)** So when you have a problem with the things that you're adding to the Space, you'll get into this runtime error and red button here if you're not taking a look.
>
> **[8:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=504)** So verifying once again the logs, well it's no longer outputting anything because right now it should be building again.
>
> **[8:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=513)** So let's wait a second and wait until that building works and it completes so that we can check these Space running.
>
> **[8:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=525)** Alright, let's take a look at the logs here.
>
> **[8:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=528)** Several things have been going on and you can see here that the dynamic downloading of the models is happening and a lot of the things required for these to work effectively is going on behind the scenes.
>
> **[9:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=545)** I clicked on the logs and you can see that the logs are coming from the container.
>
> **[9:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=550)** There, that might be kind of small to see, but it says logs/container and it keeps scrolling down here.
>
> **[9:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=555)** And you can see now that the application is starting to load.
>
> **[9:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=559)** So the important thing here is that all this is happening automatically.
>
> **[9:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=564)** I'm not doing anything except adding a new file.
>
> **[9:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=567)** And then at the very end you can see that the application is now running, it has a port, and that's perfect.
>
> **[9:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=576)** So I'm going to go back to our application space-demo and I'm going to click here and let's see what happens.
>
> **[9:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=583)** Alright, so I've clicked there and there's a couple of different things that are happening here.
>
> **[9:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=588)** First I have the text box.
>
> **[9:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=589)** Remember we added enter text to summarize, well, that's here, that's the placeholder.
>
> **[9:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=594)** And then we have the output.
>
> **[9:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=595)** So because I want to do summarization, I'm going to paste a lot of text in here and hopefully it will show up in the output and will interact with the model.
>
> **[10:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=606)** So you have a page here called [[MLOps]] from like the definition from MLOps from Wikipedia.
>
> **[10:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=614)** I'm going to select all of that and I'm going to copy, go back to our space-demo, enter the text to summarize, paste that, and then I'm going to hit submit.
>
> **[10:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=624)** Now because there are different types of settings for the pricing models on the underlying compute that is processing all of these, these will take quite a long time.
>
> **[10:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=638)** Actually, while this is going, I'll show you some of the settings here.
>
> **[10:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=641)** So I'm going to click here, open up a new tab, and you can see that I'm using the CPU basics.
>
> **[10:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=647)** So two virtual CPUs and 16 gigs of ram.
>
> **[10:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=650)** So this is not going to be a very fast option for what we're trying to do, which is interact with a T5 model and do summarization.
>
> **[11:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=662)** So I would recommend that if you're going to do something like this, any of these will work very, very well.
>
> **[11:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=670)** Well, actually even the T4 small sounds like a good deal right there at almost half a dollar an hour.
>
> **[11:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=677)** But if you want super fast, any of these will work.
>
> **[11:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=681)** Now, if you are making it public, of course you're going to get hammered with these instances over there.
>
> **[11:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=687)** So let's take a look at space-demo. Let's see.
>
> **[11:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=690)** It's still processing.
>
> **[11:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=691)** By my estimation, this will take around 90 seconds.
>
> **[11:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=697)** Oh. It took 70 seconds or around 70 seconds, but I was close.
>
> **[11:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=701)** So there you go.
>
> **[11:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=702)** That's a summarization.
>
> **[11:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=704)** And we did a couple of things to make this work.
>
> **[11:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=707)** We created the Gradio app, we created the requirements of text, we installed our dependencies.
>
> **[11:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=714)** The Gradio app allow us to create this text input.
>
> **[11:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=719)** The buttons are already there.
>
> **[12:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=721)** I didn't create any of the buttons and the nice CSS and the nice interactive, and you can see here I'm getting a little bit of a garbage there, but that's fine.
>
> **[12:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=730)** I think this is a very solid summarization.
>
> **[12:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=733)** So this effectively allows you to create a nice interactive demo for any application that you may have.
>
> **[12:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=742)** And you can see now that this is now running and you can also always access the logs.
>
> **[12:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=747)** So there you go.
>
> **[12:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-spaces?u=76281980&t=748)** Hopefully this is useful and you can start creating your demos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (3), [[TensorFlow]] (2), [[MLOps]] (2), [[GitHub]] (1), [[Python (Programming Language)|Python]] (1)
> **File Paths:** app.py (5), requirements.txt (5)
> **CLI Commands:** make (5), docker (2), python (1)
> **Env Vars:** mit (1), sdk (1), readme (1), cpu (1), css (1)
> **Definitions:** is a  (4), is an  (1)
> **Versions:** python 3 (1), 4.21.2 (1), 2.9.1 (1)
> **Cross-References:** go back to (3)
> **Tools:** command line (2), github (1)


### 5. Introduction to Applied Hugging Face

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to applied Hugging Face](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=8)** - Hi, my name is Noah Gift and I'm going to introduce you to [[Hugging Face]], a really popular new platform for dealing with large data sets, pre-trained models and also demoing those [[Microsoft Products|products]].
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=22)** And what's exciting about this particular course is that we're going to cover three different categories.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=27)** In the first section of the course, we're going to talk about how to get data into Hugging Face, how to put models into Hugging Face and then actually pull that back down inside of development environments, like GPU-enabled [[GitHub]] [[Codespaces]].
>
> **[0:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=42)** Next, in the second section, we'll cover how to fine tune trained models, so essentially get the latest models from the top brands in the world that are doing AI and ML, take those models, for example, a summarization model, fine tune it a little bit with custom data and then take that model and put it back into your Hugging Face model repository so you can use it later in the future.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=68)** We'll also talk about how you can use the GPUs inside of GitHub Codespaces or some other GPU-enabled environment to speed up that transfer learning process.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=78)** Finally, in the third section, we're going to talk about Spaces, a great way to demo your portfolio of building things with machine learning, including Streamlit and also Gradio.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=90)** Both of these are great platforms to build products.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-applied-hugging-face?u=76281980&t=92)** So let's go ahead and get started. We have a lot to cover.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Microsoft Products|Products]] (2), [[GitHub]] (2), [[Codespaces]] (2)
> **Env Vars:** gpu (2)
> **Tools:** github (2)
> **Cross-References:** later in (1)
> **Analogies:** for example (1)
> **Speakers:** - hi (1)

#### [Using GPU-enabled Codespaces](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=8)** - [Instructor] Let's dive into [[GitHub]] [[Codespaces]], which happened to be one of the best possible locations for students to use GPU-enabled workspaces.
>
> **[0:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=19)** You can take a look at how this works is that you have this temporary environment that you can actually code in, and it actually has, in many cases, much more power than your laptop, and it has the ability to even create prebuilt containers.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=34)** And, so, those prebuilt images launch up very, very quickly.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=39)** And you also are able to use the full power of Visual Studio.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=43)** So let's take a look at how I have done this in my classrooms at Duke University.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=48)** I have a organization here, and this organization has an [[MLOps]]-template that I've created.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=55)** So notice that I use this functionality called Public Template and if I select this icon here and go to settings, and if we scroll down here, you can see that I've made this a template repository.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=70)** Now, the reason why this is so powerful is that I've also gone inside of here, and I have a dot dev container environment, which allows me to customize this development environment and it will preload whatever I put in this docker file.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=88)** So I say use the dev container universal build, so use the standard GitHub container here, install some packages like FFmpeg or [[Python (Programming Language)|Python]] 3.8 or GCC.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=102)** Also go through here and install my packages.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=105)** So I use the mink file to do a installation, and then I also am able to actually configure the Visual Studio Code environment, as well, and enable things like the NVIDIA CUDA drivers so that when I later want to go through and use GPU features I can.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=127)** So once I've got all that set up, then I can actually go through here and launch a new instance, or I can use this template to create a new repo.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=138)** Let's go ahead and take a look at both.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=139)** So first, if we go to code here, I could actually create a new code space, and this would be a new development environment and if I go and I customize this and I select inside of this machine type, notice there's a bunch of different options here, including very powerful 16-core machines that are great for CPU tasks, or in this case, the thing I want to use for dealing with [[Hugging Face|HuggingFace]] is I want to use a six-core GPU, six-core machine with one GPU and 112 gigabytes of RAM and 128 gigabytes of storage.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=178)** So for a university setting, if I want to use pre-trained models, do inference, do training, do fine-tuning, this is really the recommended environment to set up.
>
> **[3:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=189)** Now, once you've gone through that, you can launch it and it'll go ahead and create an environment.
>
> **[3:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=193)** Now, I've gone through and I've used this whole template to create a new repo called HuggingFace tutorials, and that's what we're going to be covering in this course.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=204)** And, in fact, I've already launched this particular environment.
>
> **[3:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=207)** So, I'm going to go ahead and go into this code space here.
>
> **[3:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=212)** Let's take a look at some of the things that I've done.
>
> **[3:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=214)** So, one of the things that I've done is I have a virtual environment set up, and this allows me to have a specific version of Python that is going to be targeted towards a installation that I've already got set up, so I don't have to install anything.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=230)** I've also got all my requirements pinned here.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=233)** So, notice here that I have lots of different packages like fast API, I have Jupiter, you know, I also have, in fact, HuggingFace data here.
>
> **[4:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=243)** So I have the Transformers, I have the dataset, I have the tokenizers, I have even accuracy metrics inside of here, like the rouge score are all created inside of this pinned environment.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=257)** And, finally, I have a Utils directory, which allows me to test out the GPU functionality of my machine.
>
> **[4:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=265)** Now, let's go ahead and take a look at this real quick.
>
> **[4:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=269)** Notice I have something called Verify PI Torch.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=271)** And what this does is it says, "Let's make sure that the GPU CUDA is available, basically the SDK for the NVIDIA GPU."
>
> **[4:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=283)** So if I type in Python and I type in Utils and verify [[PyTorch]], anybody that uses my template can launch this and they can see, "Yes, in fact, this is working, we've got this thing enabled."
>
> **[4:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=297)** The other thing that we can do to test things out is that in this Util's directory, I've uploaded a audio file that is a narration of the "Gettysburg Address".
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=310)** And this is a very small file here, and what I do is I use the Whisper tool, which is available from OpenAI that does automatic [[Speech Recognition]] to transcribe that file.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=324)** So let's go ahead and take a look really quick at what Whisper is.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=327)** So, if we take a look at Whisper, this is a open-source automatic speech recognition system.
>
> **[5:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=335)** And, in fact, we can see the architecture here.
>
> **[5:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=338)** They have the encoder block, the decoder block, and inside of this, it's able to go through that pipeline and give us these great transcriptions and also transcribe from one language to another.
>
> **[5:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=353)** It's also available inside of HuggingFace.
>
> **[5:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=356)** And we can see here that it's under Whisper large and you can actually import this directly inside of your project by just following these instructions.
>
> **[6:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=366)** But we can, in fact, even more quickly just run the Whisper utility because I've already installed it on this system, and let's go ahead and do that.
>
> **[6:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=376)** And if I run this, this is going to kick off a Whisper job and I can launch inside of here another environment to monitor the GPU.
>
> **[6:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=388)** So, if I type in NVIDIA SMI dash L one, this will actually kick off a monitoring tool that will allow me to view the GPU usage while this is transcribing things.
>
> **[6:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=405)** And, so, here we have Whisper loading a very large language model, and this language model is going to take that audio file, and it's going to convert it to a text format by using the GPU that's enabled on this platform.
>
> **[7:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=423)** So, it takes a little bit of time to ramp everything up, but once it does, it will go through here and step-by-step transcribe each of the components of this particular project.
>
> **[7:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=438)** Here we go.
>
> **[7:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=439)** We see that the GPU is has definitely been spiking up and down.
>
> **[7:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=442)** So it's actually doing some work here.
>
> **[7:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=444)** Here we go, it's spiking again, and it's doing this work.
>
> **[7:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=448)** And we can see then, in fact, the GPU is being summarized or is using the transcription to take that audio file and convert it into a text-based format.
>
> **[7:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=461)** And here we go.
>
> **[7:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=462)** It's working.
>
> **[7:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=465)** All the libraries are loaded, and the next step will be to step-by-step transcribe it and notice how it directly corresponds with the the GPU load here.
>
> **[7:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=476)** And once it's done, then the GPU load will go back down to zero.
>
> **[8:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-gpu-enabled-codespaces?u=76281980&t=480)** So, really, in a nutshell, this is one of the advantages of using this GPU-based environment is that I can work alongside of the HuggingFace ecosystem and use pre-trained models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face|Huggingface]] (5), [[Python (Programming Language)|Python]] (3), [[GitHub]] (2), [[Speech Recognition]] (2), [[Codespaces]] (1)
> **Env Vars:** gpu (15), nvidia (3), cuda (2), gcc (1), cpu (1)
> **Prerequisites:** set up (4), install (3), configure (1)
> **Exercise Files:** template (6)
> **CLI Commands:** python (3), docker (1), make (1)
> **Tools:** github (2), visual studio (2)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is a  (2)

#### [Using the Hugging Face CLI](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=8)** - [Presenter] One of the more powerful ways to get involved with [[Hugging Face]] is to use the Hugging Face command line interface.
>
> **[0:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=15)** In general, I'm a huge fan of using command line tools, and you can see here we have Hugging Face [[CLI]] that's installed.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=22)** And if you just run it, it'll give you a help menu.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=25)** One of the first things that I would recommend doing is looking at some of the tools that are sub command.
>
> **[0:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=32)** So for example, if we go to Hugging Face login, one of the things that we see here is that you can actually log in by going to the [[Tokens]] directory.
>
> **[0:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=42)** And inside of the tokens settings inside of Hugging Face, this will be something you can set up and then pass in and then authenticate.
>
> **[0:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=52)** And now once you've done that, Hugging Face knows who you are when you're developing in a workspace like this.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=59)** So what this means is if you go back here, and we go to the help menu, and we take a look at the next command, which is "whoami," it'll know who I am.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=71)** There we go.
>
> **[1:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=72)** It says, "noahgift."
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=73)** That's right, it shows that I'm a member of two Duke organizations, and that's a really useful component of the authenticated experience.
>
> **[1:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=83)** If I wanted to log out, I could also go ahead and do a logout command here.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=88)** And if you look at the help menu, it just tells you exactly what the command does.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=93)** And then also repos, right?
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=95)** So we could also go through here and go to repo, and that would be another command that we could do.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=101)** And there's also the integration of large files and multi-part upload.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=105)** I would say one of the, the commands that I use quite a bit that's included here is the scan cache.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=112)** And if we go through here and we type in "scan-cache," one of the nice things that happens with this tool is it tells you locally what is actually on your machine.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=122)** And this can be invaluable when you're going to go through and take a look at things like, do I need to free up this space or some other utility?
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-hugging-face-cli?u=76281980&t=130)** So definitely take a look at the Hugging Face CLI, make sure you have a token so you can authenticate, and then you can actually use it to interface with Hugging Face Hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (8), [[CLI]] (2), [[Tokens]] (2)
> **UI Navigation:** go to (3)
> **Env Vars:** cli (2)
> **Tools:** command line (2)
> **Prerequisites:** set up (1), make sure you have (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)


### 6. Using Hugging Face

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Model Hub](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=0)** - Let's do a quick overview of what the model hub is.
>
> **[0:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=5)** There's more to it than we've already seen.
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=8)** We're using models, data sets, and spaces.
>
> **[0:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=13)** So we've already covered a couple of of those things.
>
> **[0:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=16)** So I think that is a good idea to kind of give one other quick overview as to what we have here with [[Hugging Face]].
>
> **[0:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=26)** So I'm going to go ahead and start with models.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=29)** And within models, if I click here, you'll have a few sections here to the left and primarily tasks, library, data sets and languages.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=39)** All of these are kind of like labels or categorizations that you can see to try to filter out things that you might want to be working with.
>
> **[0:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=49)** Specifically, for example, if I were to go to the languages section and say, for example, I want to do something with Spanish, which might be interesting to me, can click on these and then suddenly all of the models here will start getting filters.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=67)** So that's, that's a good thing.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=69)** And then you can keep going on to filter out.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=74)** So if I want to say, I want to do summarization, so you can see now summarization and Spanish are now selected.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=82)** And you can see here that summarization only for Spanish will be kind of like what are we're seeing here.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=88)** So you can see here, there's bert2bert_shared Spanish-finetuned=summarization.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=93)** That sounds like a pretty interesting, and it filters out, like I said, kind of like the things that we've already looked at.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=102)** So if I click on the X right here, then I see all of the other ones that are available for summarization.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=110)** So next I'm going to click on one of these models and we've already seen a little bit of what the model card is, and the model card allows you to, I'll describe better, but this is up to you, the user, you have to create a read me that makes sense and just like on a [[GitHub]] repository.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=134)** And you'll have these hosted inference API.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=137)** As you know, we've already created a little bit of that, but some of these models will have the ability to interact with this.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=145)** So here's summarization.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=147)** So we can see, compute and see what happens.
>
> **[2:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=149)** And there you go.
>
> **[2:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=150)** Well, the computation diamond CPU was cached.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=153)** That was why the response was almost immediate because the text doesn't change.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=159)** Alright, so summarization, pretty cool there.
>
> **[2:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=163)** Next you have the ability to deploy these.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=166)** And for deploying you have Amazon sage makers or you can use the inference API on on your own account.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=175)** Now the other thing that you can do is that you have examples.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=178)** You have Amazon SageMaker, but you can also use it in transformers.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=181)** And I really like these extra documentation because you have ready to use copy paste snippets that you can start doing for doing inference in your own code.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=195)** So if you wanted to clone the repo, remember everything with Hugging Face, especially with models, will need LFS, so that needs to be enabled.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=204)** And then you can copy any of these and then start playing around with that.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=210)** All right, so beyond models, we have datasets.
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=213)** We've already covered a few of those, but let's take a look at some of the interesting task categories here for the dataset.
>
> **[3:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=221)** So let's start, for example, let's say text generation.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=226)** Within text generation, say for example, we wanted something with wiki text.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=229)** Let's take a look at what we have here.
>
> **[3:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=232)** Now, the dataset preview, we do have a dataset preview, and we have the ability to do a split for test training and validation.
>
> **[4:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=243)** That is really nifty because sometimes the specific dataset that you have, you want something for testing, another one for validation.
>
> **[4:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=252)** And by the way, and we'll cover these a little bit later, on the more hands-on examples, you have access through the data sets library in [[Python (Programming Language)|Python]], and select which one of these are going to be working for.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=266)** Like are you going to do the test, a training, the validation, and then you can even create a subset there as well.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=273)** Let's take a look at the code dataset viewer.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=276)** And here you can see a little bit of what is covered.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=280)** So you have tons of different snippets that you can take a look to try to see where the data is and how it looks.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=290)** Let's take a look at training.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=293)** I'm pretty sure this is going to be more thorough, but here you can see there's tons of information and you start getting a look and feel of what that is going to be.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=305)** And you have all kinds of different sections here.
>
> **[5:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=307)** You have, this is a raw V one.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=310)** I don't know what that exactly means, but it's just a different type of subset of the dataset.
>
> **[5:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=317)** And then as always, you can poke around the files and this is when you go into the files, you'll see that you have the ability to see the commits.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=327)** Here, there's 11 commits, and it's just like a GitHub repository really.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=332)** But you start seeing that there's a README dataset, infos.
>
> **[5:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=336)** Let's take a look at the infos.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=337)** You get to see the description, and this is kind of like what Hugging Face does behind the scenes to try to figure out how to present these best.
>
> **[5:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=348)** And there's this Python file it seems here to try to do, let's see, we have citation, we have it uses the data sets, the data sets library over there for a nested class or a China class, do class inheritances there with Python.
>
> **[6:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=366)** So all in all very good ways.
>
> **[6:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=369)** You can see here some of the the languages it supports, the source data sets, what are the source data sets.
>
> **[6:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=376)** That's always a good idea to take a look.
>
> **[6:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=378)** And finally we have models, data sets, spaces.
>
> **[6:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=381)** And spaces, like I said, we've already seen some of those.
>
> **[6:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=385)** And you have the ability to play around with radio when I close this.
>
> **[6:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=393)** But essentially you have the ability to interact with it.
>
> **[6:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=396)** So you have, let's say vendi_score.
>
> **[6:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=398)** The other ones, more interactive with some music even.
>
> **[6:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=400)** And you can construct these very easily, like we've seen before.
>
> **[6:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-the-model-hub?u=76281980&t=404)** So again, Hugging Face, when you hear, what is the Hugging Face hub, it refers to all of these components working together for giving you a one stop shop so you can play around, demo, interact, contribute, and, and reuse a lot of these different things that are available to you from the platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (5), [[Python (Programming Language)|Python]] (3), [[GitHub]] (2)
> **Analogies:** kind of like (4), for example (4), just like (2)
> **Env Vars:** api (2), cpu (1), lfs (1), readme (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2), refers to (1)
> **Tools:** github (2)
> **Code Identifiers:** vendi_score (1)

#### [Downloading models](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=0)** - [Instructor] I have a Jupyter Notebook here.
>
> **[0:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=2)** We're using [[Python (Programming Language)|Python]] 3.8, and I'm going to show you how you can, well, a couple of ways that you can download models with [[Hugging Face]].
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=9)** Usually, what you want is everything dynamic.
>
> **[0:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=11)** That's the true nature of Hugging Face libraries.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=14)** Here, we've installed transformers and the Python library from Hugging Face and we import the pipeline.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=20)** So I'm going to go ahead and get that started.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=22)** It's going to take, it was very fast.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=25)** And then we're going to say that we want some summarization.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=29)** We are going to pass in the task that we want to complete, and we're going to specify that the model is going to be the t5.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=35)** That's also the model and the tokenizer, and we want truncation and the framework is [[TensorFlow]].
>
> **[0:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=41)** So I'm going to run that. This is going to take a quick second.
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=44)** So what is going on here behind the scenes is that it is getting downloaded locally.
>
> **[0:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=53)** Now it doesn't specify where it is.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=54)** It doesn't matter because what we want to do is to be able to use the model.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=59)** The pipeline allows us, it's an abstraction for the model, and it's a generic abstraction.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=66)** So I can change these to say, for example, bert-cased.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=71)** I think it's the r1.
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=73)** We can definitely change that.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=75)** I mean, I think it's bert-cased.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=78)** And the way to do that, by the way, is if I go here, you can see, well that's the t5-small.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=84)** But if I go to Hugging Face and I look for, there we go, roberta, base-uncased.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=90)** If I click that one, then I will want to use this one, and then go back here and then paste that to the model.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=99)** So that's the model ID.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=101)** I am not sure if there's a tokenizer for bert-base-uncased, but we can try and see if we get into trouble.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=107)** So there we go, it is actually downloading, and this is what I wanted to show you because it's downloading the tf_model.h5.
>
> **[1:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=114)** You see it's 511 megabytes.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=117)** So it's effectively downloading that for summarization.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=121)** Now you can see that I'm getting into trouble here, but because that's necessarily the right model for summarization.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=128)** So let's go back here, change this to T5-small, and run this again.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=137)** But I just wanted to show you that so that you could see, because I've run these before, it didn't show the downloading.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=143)** So you can see here, there's no download, there's no progress being showed at all.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=147)** All right, so for summarization, I have a file here called [[MLflow]].txt.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=153)** It's something that I've used before for doing a little bit of a definition of what MLflow is, and it has tons of different text in here.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=162)** I'm going to go back to the Jupyter Notebook.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=164)** I'm going to see how we can do summarization with this pipeline.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=169)** So I'm going to run this, and it's probably going to get me a single line of the summarization using all of the defaults.
>
> **[2:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=179)** Of course, this is going to take a quick second.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=181)** Let's just wait it out.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=182)** Okay, so that took a little bit long in my compute system, and I got that big text summarized to use.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=190)** Just this, "Cookiecutter template helps streamlining, allows the data team to focus more on implementation of the model."
>
> **[3:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=196)** So, "Tool, platform that manages the ML life cycle."
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=200)** So that's pretty good.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=202)** So that is how behind the scenes it is downloading.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=206)** So we saw how just by calling it, it would download.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=210)** Why would you want to do that?
>
> **[3:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=211)** Because when you're building, say a container, you don't want to necessarily build a container that'll take, you know, five gigabytes if the model is tremendously big.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=220)** But what you want is dynamic loading.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=223)** Now what if you really wanted to have that model locally and inspected around?
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=228)** So, oops, sorry for scrolling super fast.
>
> **[3:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=232)** I'm going to show you these.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=233)** If you install the Hugging Face library, you're able to use this hf_hub_download, and you need the repo_id and then the filename.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=244)** Let's take a look at what does this library need.
>
> **[4:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=248)** So the repo_id will be the name of the repository.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=251)** So if I go back to the browser, t5-small, this was bert-base-uncased, t5-small will be this one, right?
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=260)** So this is a repo_id right here, and what we want to understand is what type of file we're going to download.
>
> **[4:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=267)** So from the repository, we're going to be able to download a single file.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=271)** So we're going to go to files here, and any of these files are going to be fair game, are going to be okay to use to download.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=280)** So I think I have, I think it's the pytorch_model one that I have, but I can, you know, I could do the tf_model.h5.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=290)** So we can change that to download this one.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=293)** So tf_model.h5, I'm going to go back here.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=299)** I'm going to say t5, (keyboard clacking) and let's double check here, tf_model.h5, tf_model.h5.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=310)** And I'm going to run this, and it's going to take, it's downloading 240-something megabytes' worth of a file.
>
> **[5:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=318)** And then the resulting operation is going to be a path.
>
> **[5:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=322)** So now this means that I have a cache from Hugging Face, and you can see the models.
>
> **[5:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=328)** In this case, it's t5-small and it's cached in that.
>
> **[5:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=331)** So whenever I'm using tf_model like from t5-small, then Hugging Face will use the cache so that I don't have to redownload these over and over again.
>
> **[5:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=344)** In fact, if I run this again, you'll see that it's immediate.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=347)** It took like .1 second because it's just looking at the cache.
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=352)** One last way that I want to show you for downloading files from the hub is by using, I'm going to show you this piece of documentation here on the website.
>
> **[6:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=366)** So I'm going to hit over to my browser. I open a new tab.
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=370)** What I want to show you here is the Hugging Face documentation on how to download documents, but this is using [[Git]].
>
> **[6:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=376)** So for doing this, I'm going to scroll down here, you're going to have to use two things, git lfs install.
>
> **[6:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=383)** So make sure you have LFS, the ability to do LFS, Large File System installed.
>
> **[6:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=390)** And then git clone <MODEL URL>. Which one's the MODEL URL?
>
> **[6:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=394)** Well, let's take a look at bert-base-uncased.
>
> **[6:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=397)** The MODEL URL would be, let me see, I think it would be this one right here.
>
> **[6:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=404)** So in that case, you will go in and get those files because this is effectively a repository.
>
> **[6:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=414)** So if I go here to files, you can see here there's even a way to contribute.
>
> **[6:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=419)** You have the ability to download all of these files using Git.
>
> **[7:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=426)** So if I go back here to documentation, that's the MODEL URL.
>
> **[7:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=429)** That's where you will be effectively using to do the cloning.
>
> **[7:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=433)** So that's it, that's how you download models locally from Hugging Face, I showed you like a few different ways, actually three different ways.
>
> **[7:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/downloading-models?u=76281980&t=441)** One is dynamic, one using the libraries, and the other one was, let's see, from using pipeline, which is the regular way we use the libraries from Hugging Face, Then we did the hf, Hugging Face hub download, and the r1 using Git with git lfs installed and enabled.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (11), [[Git]] (6), [[Python (Programming Language)|Python]] (2), [[MLflow]] (2), [[TensorFlow]] (1)
> **Code Identifiers:** tf_model (6), repo_id (3), hf_hub_download (1), pytorch_model (1)
> **Env Vars:** model (4), url (4), lfs (2)
> **CLI Commands:** git (6), python (2), make (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Prerequisites:** install (2), make sure you have (1)
> **Cross-References:** go back to (2)
> **Tools:** jupyter (2)

#### [Working with models](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=8)** - [Instructor] Let's take a look at this [[Hugging Face]] model ecosystem here.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=12)** There's more than just one thing you would do with Hugging Face because there are interactive workflows.
>
> **[0:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=19)** First, one of the things you may want to start with, and probably most people start with, is you go to Hugging Face, look at all the models, you know, hundred thousands of them, and go ahead and use them in potentially a Spaces app that's hosted on the Hugging Face platform, right?
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=38)** So this is really the first place to play around.
>
> **[0:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=40)** Now, one of the problems with this is that GPU is not something you're going to get by default, and so as a result of that, you may want to use a workspace, like for example [[GitHub]] workspaces, that actually have access to GPUs, which will significantly speed up your performance, right?
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=61)** So that's really helpful.
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=63)** Likewise, if you had a chameleon tool potentially that you're using, GPU could be integrated with that command line tool.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=71)** Likewise, if you wanted to, you could build out a fast API or a Gradio app or something like this that would also be able to use a GPU as well.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=82)** So there's lots of different ways that you could use it.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=84)** In general, these are the four that we'll cover briefly.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=88)** Now the other thing you can do is you can actually just download the model itself, and we'll cover that in detail as well, but one of the things to be aware of with this is that when you do download, you may want to pin a revision, and the idea here with pinning a revision is that you're able to specifically get the same version over and over, and if it's a large model, like five gigabytes, you're not going to have to download it over and over again, because you can save it locally on your file system.
>
> **[1:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=118)** The other thing to be aware of is that you can also just, you know, upload this through the web, right?
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=123)** You can go to the web interface and put this inside of the Hugging Face ecosystem.
>
> **[2:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=129)** We're going to do it in a second.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=130)** And then finally, the last thing you can do is you can fine tune potentially with the GPU, and let's say, you know, GitHub Code Spaces, and then push that model back into the Hugging Face ecosystem, right?
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=146)** So there's a lot of really cool things that you can do when you're playing around with the Hugging Face ecosystem.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=153)** It really depends on what type of problem you're solving, and this would be, again, push back to the model repository as you make changes that are helpful, like better accuracy, that is fine tuned for the model that you're using.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=172)** Okay, let's go ahead and take a look at how we would actually accomplish this.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=175)** The first thing I would recommend is go to Hugging Face.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=178)** Take a look all the models that are available, and pick the one that you want to use, and in particular, I think again, the interface here where you look at the most downloads or most likes, these are a good idea.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=191)** The [[Google]] Pegasus is a good one to play around with here.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=195)** Notice what it does is allows us to just play around with it without having to do a bunch of stuff, and so if I go through here and I say compute, right?
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=204)** It goes through here and it is able to summarize all that into one sentence.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=209)** Now, if I wanted to use this locally, notice here that I could actually go ahead and put that into some code and build out some kind of a solution, right?
>
> **[3:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=218)** So first step is play around with it inside of the interface.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=223)** Second, potentially look at the community, look at some of the things that are happening here, and potentially look at some of the code spaces that are using this, and then go from there.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=233)** Now what we're going to do is we're going to go over to a GitHub code space here, and we're going to actually do something similar.
>
> **[4:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=241)** I'm going to use a command line tool.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=242)** In this case, Click, and I'm going to use Beautiful Soup, Wikipedia, also a newspaper library that can interface with our code.
>
> **[4:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=252)** And if I go ahead and I run this and I say main --help, notice all the different things that we can do.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=260)** So we can encode, we can summarize, and if I go through here and I say let's look at what kind of summarize code I've got built up, one of the things that we can do is we can actually summarize a Wikipedia page just by putting it in.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=276)** So how do we do this?
>
> **[4:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=277)** Well, first I use the Wikipedia library here, which is a very small amount of code.
>
> **[4:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=283)** You can say it's just this, right?
>
> **[4:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=285)** I just say Wikipedia page essentially, and then what I do is I put this into the Hugging Face model here, and we can say right here, here's our Hugging Face model.
>
> **[4:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=298)** We have a tokenizer that prepares the data for us, and then at the end, we can just put this into a command line tool.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=305)** And in this case right here, I just created a Click command line tool called Summarize, and actually it will choose some kind of a model as a default, but we could also change it out based on whatever it is we want it to do.
>
> **[5:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=318)** So the first thing I would recommend would be, let's go ahead and do that [[Python (Programming Language)|Python]] example here.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=324)** So again, if we we look at this, summarize, it's going to tell us that if we say --Wikipedia page Python Programming that it should be able to go and summarize this Python programming page.
>
> **[5:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=342)** So what is it going to do?
>
> **[5:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=344)** Well, we can take a look real quick while it's running.
>
> **[5:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=346)** It's going to go to Wikipedia, right here, the Python programming language page, and it's going to grab all of this text in this page, and it's going to create a nice little summary of what's happening on this particular page.
>
> **[6:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=360)** And if we go back here, we can see it summarizing the text from that particular problem.
>
> **[6:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=365)** There we go, and it created a nice summary of what it is that we were trying to solve here.
>
> **[6:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=371)** And if I wanted to, because I've enabled these flags here for model, I could swap it out for lots of different models that appear right here.
>
> **[6:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=381)** So this is, I think, one of the better ways to play around with the Hugging Face interface.
>
> **[6:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=386)** Now the next thing I'm going to show you here is that if you wanted to, you could also save the model locally, and how would you do this?
>
> **[6:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=395)** Well, in this piece of code here, I say from transformers import pipeline, and then I say model, and I save it in particular, this is the model and this is actually the revision.
>
> **[6:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=408)** So when you download it, it'll print out the revision number and you can say, I want to just save this particular revision.
>
> **[6:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=415)** And once it's saved, you can actually unzip it, and in fact, keep it locally on your machine.
>
> **[7:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=422)** So in this case, we see this downloaded model here, and then in order to use it, if I want to have a really fast performance, every time I load it, I can just say load model.
>
> **[7:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=432)** And look, we just go here, and we say here's a text file I want you to read.
>
> **[7:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=437)** And in this case, we want to actually use the pre-trained model, that's actually on disc, which is right here, and it'll actually go through and run this summarization.
>
> **[7:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=448)** So I'm going to go ahead and run this, and what it's going to do is going to look at this text file, which is just the Gettysburg Address, and it's going to summarize it.
>
> **[7:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=456)** So we just say Python load model.
>
> **[7:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=459)** It's going to look for this text file, use the pre-trained model that's been downloaded onto the disk, and then actually do its summarization.
>
> **[7:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=468)** There we go.
>
> **[7:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=469)** It was actually extremely fast, because one, it's got GPU2, it's actually on the disk.
>
> **[7:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=474)** So we've covered, I think, almost everything with the exception potentially of uploading a model.
>
> **[8:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=483)** Now, how would we do this?
>
> **[8:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=484)** Well, a really easy way to upload the model would be to grab a second learn model.
>
> **[8:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=490)** In this case, I've got one in the noahgift Python [[MLOps]] Cookbook.
>
> **[8:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=494)** I have model.joblib.
>
> **[8:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=496)** I'm going to go ahead and grab this and click download.
>
> **[8:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=500)** Once I download, it's very easy to go over to my own interface here on my profile, and I can go down to models right here, and you can see that I could put new models into my ecosystem right here.
>
> **[8:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=517)** So if I go here, I say, here's my model.
>
> **[8:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=520)** Let's go ahead and upload a file.
>
> **[8:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=523)** I can just take that file that I just downloaded and put this directly inside of this repository, and then now we've got a model all set up for us.
>
> **[8:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=536)** And in fact, it knows that it's a joblib model, and I could tweak it out further and further.
>
> **[9:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=541)** So in a nutshell, really there is a lot to be said for going through here and bringing out the different interfaces of what it is you're trying to build and pulling up exactly the the kind of ecosystem that you want to pull up, right?
>
> **[9:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=559)** So do you want to use the model?
>
> **[9:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=561)** Do you want to download the model?
>
> **[9:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=563)** Do you want to upload the model?
>
> **[9:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=564)** Do you want to do a fine tuned retraining of the model?
>
> **[9:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-models?u=76281980&t=567)** These are all different things that are important to consider when you're dealing with Hugging Face.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (12), [[Python (Programming Language)|Python]] (6), [[GitHub]] (3), [[Google]] (1), [[MLOps]] (1)
> **CLI Commands:** python (6), make (1), unzip (1)
> **Tools:** command line (4), github (3)
> **Env Vars:** gpu (4), api (1), gpu2 (1)
> **UI Navigation:** go to (4)
> **Definitions:** is a  (3)
> **Exercise Files:** download the (2)
> **Warnings:** be aware (2)

#### [Adding datasets](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=0)** - [Instructor] Let's go through some of the steps that you will need to know in order to add some datasets.
>
> **[0:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=5)** So, I have here my account, and you can see that I've already added, well actually, updated the dataset one day ago.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=14)** Well, I'll show you a couple of the things that you can do in order to create your own dataset.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=20)** So in [[Hugging Face]] in the webpage, in the main UI, however it is, make sure that you have an account.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=27)** I've logged in and I've authenticated, so that's why my profile shows up.
>
> **[0:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=31)** So, make sure that that's a thing for you, as well.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=35)** And then don't head over to actually Datasets here, because that's kind of like more of the exploratory datasets that you might want to take a look and want to reuse.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=46)** Now, what you want to do is click on your profile.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=48)** So, I'm going to click over here and then I'm going to say I want to add a new dataset.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=54)** So, how does this work?
>
> **[0:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=56)** I'm going to click here and then, it is essentially, as we've seen all throughout Hugging Face, a new repository.
>
> **[1:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=65)** Now, there's a distinction here.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=67)** It says this is going to be a dataset repository, right?
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=71)** But behind the scenes it is still a [[Git]] repo, and you are going to be uploading some files.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=77)** So here, we could say something like this is going to be temporary, so I'm going to say temporary-dataset and the license.
>
> **[1:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=87)** Sure, why don't we do Apache?
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=90)** You can pick any license that you actually prefer or you feel like you're more comfortable with.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=95)** So then, you want to click Create dataset.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=97)** And of course, this can also be done through the command line tool as I've shown you before.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=102)** Now, once this loads, you have a couple of different things.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=107)** First, there's nothing available.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=109)** So, you can see here that there's a Dataset Preview.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=111)** So, these are features related to a dataset.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=115)** What we're going to be doing is trying to add an actual dataset.
>
> **[1:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=118)** There's a couple of things that you can do here.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=121)** You can either upload a file.
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=124)** So, if we go here and say Files, you can see here that there's gitattributes and a basic README, so you can add a file and add a CSV file directly.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=136)** Now, adding a CSV file directly, I'm going to click Upload files and then select a file to upload that.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=144)** All right, so I'm going to drag a file here or click to browse.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=148)** So, I'm just going to drag one and then get that uploaded and then commit.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=153)** So, I'm dragging this CSV file.
>
> **[2:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=155)** It's a common separator value file.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=157)** It's called test.csv, and as always, this is going to require me to make a commit.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=162)** So, the default message for this is fine.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=165)** I'm going to commit the changes and the test.csv has been committed.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=170)** Now, one thing to note is that this is just 81 kilobytes, so it's very, very small.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=175)** Now, if I go to temporary-dataset and I click on on here, you'll see that now, the dataset preview is right there and you even have an API.
>
> **[3:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=184)** So, let's take a look at the API.
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=186)** You have the ability to use curl to get that, actually the whole dataset, or if you want to see if there are splits, we'll take a look at what those splits are.
>
> **[3:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=199)** But essentially, it gives you the ability to have different ways to access these.
>
> **[3:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=203)** And of course, you can also clone this repository because behind the scenes, as I've told you before, this is a Git repository and you can use the datasets library from Hugging Face to interact with that.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=217)** Now, here we have like a few columns.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=220)** You can see here there's a name.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=222)** It has detected the types, region, variety, rating, ratings of float64.
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=228)** That sounds about correct.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=229)** And it is a dataset about wines and ratings and I've been able to upload that.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=235)** So, that is how you add datasets to Hugging Face, and then anyone that wants to interact with this, like I said, has the ability to actually use temporary-dataset, or if you want to actually use the datasets library, you will be able to do that with the data with this name, which is my account, and then the name.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=262)** So, I'm going to show you opening up a Jupyter Notebook here and then we'll see how that goes.
>
> **[4:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=268)** Let me open up a VS Code with a Jupyter Notebook.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=271)** So, I have this Jupyter Notebook here.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=272)** I'm going to execute this again, make sure that this runs.
>
> **[4:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=275)** I have the datasets library installed, and now, I am going to load that dataset that we just uploaded.
>
> **[4:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=283)** So, the way to do that is going to be, say, for example, dataset.
>
> **[4:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=287)** It's going to be datasets.load.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=293)** We're going to use the load_dataset and this was alfredodeza/ what was it?
>
> **[5:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=303)** Demo-dataset, right?
>
> **[5:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=306)** So, let's just triple check that's true.
>
> **[5:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=309)** It's actually temporary-dataset, so you have to be careful with the naming.
>
> **[5:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=313)** Otherwise, this is not going to work out.
>
> **[5:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=316)** So, I'm going to say temporary-dataset, and I'm going to run this.
>
> **[5:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=320)** And this is going to [[Fetch]].
>
> **[5:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=322)** It's going to fetch that. It's going to cache it.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=324)** You can see here it's using a cache and then it's going to download that.
>
> **[5:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=328)** That's perfect. So now, we have a dataset.
>
> **[5:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=330)** Let's explore what that dataset is.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=332)** I'm going to click Code and let's do dataset and then execute the cell.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=337)** And it's a dataset dictionary.
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=340)** And the first thing will show it's a test.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=343)** So we can actually get that test, is this is a dictionary behind the scenes and we can say as_pandas, and I think this should work and this should return a [[Pandas (Software)|pandas]], oh.
>
> **[6:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=360)** So, it is not.
>
> **[6:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=361)** So let's try to poke a little bit more dataset, test_dataset, and then let's do that.
>
> **[6:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=368)** And then let's poke around what this test_dataset object is.
>
> **[6:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=374)** Now, we have some features and I'm pretty sure that, oh, it's to_pandas.
>
> **[6:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=380)** It's not as_pandas.
>
> **[6:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=381)** So, if we run that, it will create a data from, so there you go.
>
> **[6:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=384)** That is how you add very quickly a CSV.
>
> **[6:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/adding-datasets?u=76281980&t=388)** Now, I show you one way, which is through the UI, and you can do this with different other ways, including using the [[GitHub]] repository or even using the [[CLI]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Git]] (2), [[Fetch]] (2), [[Pandas (Software)|Pandas]] (1), [[GitHub]] (1)
> **CLI Commands:** make (4), git (2), apache (1), curl (1)
> **Env Vars:** csv (4), api (2), readme (1), cli (1)
> **Code Identifiers:** as_pandas (2), test_dataset (2), load_dataset (1), to_pandas (1)
> **Tools:** jupyter (3), command line (1), vs code (1), github (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (3)
> **File Paths:** test.csv (2)

#### [Using datasets](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=0)** - [Instructor] We've seen how to add a CSV file directly into [[Hugging Face]], and then start serving that with the datasets' repository and access it either with the UI, so through here, or using the datasets Hugging Face library.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=17)** So one thing that you could do that is slightly different, I'm going to show you things that you can actually implement, is to add a custom files, these are optional, for CSV, tab separator values, and I think even [[JSON]], you can add them directly into the UI.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=35)** But I'll show you a couple things that are extra that you can do here.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=38)** Now, I've added the same wine-ratings, but with different splits.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=43)** The splits allows you to have access to a subset of the same data so that you don't have to, or to make it easier for your users if they want to have different parts of the data.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=55)** So here, because I've added a few of those supporting files, you can see here that now I have a split.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=61)** If I click here, I have test and I have validation.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=64)** So if training, will have, I'm going to scroll here, it's truncated to a hundred rows, but it has around 2 or 3,000 I believe, rows.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=75)** And if I change this to say test, it will just have a couple hundred, I think it's just 200.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=82)** Now doesn't have an ID.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=84)** So that's kind of problematic there, but I'm telling you that that's actually the case.
>
> **[1:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=89)** So that is why, that is why this is useful.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=93)** And again, if we go here to list the split names for this dataset, this is why, this is why this is useful, because now you can see what the splits are and you can actually get a specific split.
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=108)** You can see here, even the split that you will get, if you do the curl command, will be the test one.
>
> **[1:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=113)** Now, if you don't want the test one and you want the one, the full one, like the train, that will be this one right here.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=120)** So how do you do that?
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=121)** Let me show you a few files that you can add.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=123)** And again, these are all optional.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=126)** The first thing that you'll notice is that the train one is 13 megabytes and that will have the LFS icon in there.
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=132)** That means that you have to enable LFS if you're adding this on the command line tool.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=139)** If I click here, it will download the file, we don't want to download the file.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=143)** Again, this is the LFS.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=145)** If you do it on the command line tool, that's [[Git]] lfs install, and that will install some pre hooks, pre commit hooks, and pre push hooks that will enable that LFS.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=154)** It'll actually work.
>
> **[2:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=155)** If you don't do that, you'll get into trouble.
>
> **[2:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=158)** So don't worry, if you do that, you'll have some output that shows you right on the terminal what's going on.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=164)** All right, so a few files are going on here.
>
> **[2:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=168)** Let me show you first the wine_ratings.py.
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=171)** So this file is, there's a sample actually that you can use.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=176)** And what it is is that you can get a little bit of the particulars of this dataset.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=183)** I've put that this was created by myself.
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=186)** I created it back in, well, in 2022.
>
> **[3:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=189)** I add a short description, it was a homepage.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=192)** That's, you know, fine, you can actually add those inside the UI.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=197)** But then we start getting into particulars of these datasets.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=200)** So I added a version here, and this is captured by the UI.
>
> **[3:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=205)** We can also have a little bit of the features.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=208)** The features here actually are what are some of the columns that we have.
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=213)** So you can see here, that I have name, region, and I added that rating is actually a float and everything else is a string.
>
> **[3:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=221)** So then we continue to, well this is the information, and then we return this object, the DatasetInfo object, with all of those things.
>
> **[3:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=231)** And now we get into the split generator.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=233)** So what are the split generators?
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=235)** We are telling these what are the specific splits that we want to provide through the API to any user downloading this.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=244)** So you can see here there's a train one, there's a validation one, and there's a test one.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=249)** This is fairly, fairly common, and the template that Hugging Face offers for creating these datasets, optional files, all have these pre-made.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=260)** So you don't have to remember all the syntax.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=262)** And you can of course, reference these wine_ratings.py file whenever you want to get a quick refresher on how to do these.
>
> **[4:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=270)** And finally you can generate examples from the dataset if you want to generate a little bit of samples on how to do this.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=281)** All right, so let's go back and show you why these file paths are important.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=289)** If I go back to Files, we should be able to see that there is a test one, there you go, a train, and a validation.csv.
>
> **[5:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=302)** Now train is the main one, is the full one, is the big CSV.
>
> **[5:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=307)** But, why are these right here? Because it's allowed.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=310)** When you have CSV files, Hugging Face allows you to get that in there.
>
> **[5:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=314)** But this could live somewhere else, and that's why you may want to consider an optional file for loading.
>
> **[5:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=323)** So a file that is not hosted, that is not in Hugging Face, we'll need to have like a loader, and the loader will point, and I'll show you.
>
> **[5:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=333)** Let's go to another datasets here.
>
> **[5:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=336)** So say for example, blimp, if we click on this one, there's a dataset preview, that's perfect.
>
> **[5:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=342)** Let's take a look at the files.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=343)** So if we look at the files, there's no data sitting there.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=347)** There's a dummy here.
>
> **[5:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=348)** You know, there's a little bit of a, let me see if there's some stuff in there.
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=352)** Yeah, so there is some dummy data.
>
> **[5:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=357)** But if we take a look at blimp.py, which is the loader, let's take a look at what the URLs are.
>
> **[6:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=365)** So you can see that the download URL will be on [[GitHub]].
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=370)** So this loader will know how these URLs are going to go through and [[Fetch]] that data and provide it through Hugging Face, which is a pretty nifty way of serving things.
>
> **[6:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=381)** And you can see here that the features, these are the actual column names.
>
> **[6:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=386)** So that's fine. And then we go into the generate examples.
>
> **[6:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=389)** Very, very similar to what I was having.
>
> **[6:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=392)** Now, the split generators, you'll see that it will use the URLs.
>
> **[6:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=396)** So here, download URLs.
>
> **[6:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=397)** It has a downloaded_file, downloaded_urls.
>
> **[6:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=400)** You'll have a way of defining where these resources live so that you can access them.
>
> **[6:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=408)** So if we go back to the wine_ratings one, now you have, we've explained what these CSV files are here for, what this loading file is here for.
>
> **[6:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=418)** The README has some information, which is called a card for datasets, which is the documentation for how people can use your dataset.
>
> **[7:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=425)** And I haven't been good, because I haven't added much information there.
>
> **[7:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=428)** And the last thing is this dataset_info file, which is again, super optional, and you don't, it has the description.
>
> **[7:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=436)** Citation is effectively something that is generated from this wine_ratings file.
>
> **[7:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=444)** It has the class, and the info, and all of those nifty files.
>
> **[7:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=448)** Now if you remember, this has, if I go click here, this will have these different splits and we can actually do some things there.
>
> **[7:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=461)** Now you can use this in a dataset library.
>
> **[7:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=466)** So if you want, this example is great, because then it has everything.
>
> **[7:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=470)** You can clone the repo.
>
> **[7:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=472)** Remember that you have to, you have to do git lfs install, which is this one right here.
>
> **[7:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=479)** That'll make sure that you have, your good to go.
>
> **[8:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=482)** But if you don't want to get all of those super large files sent to your computer, then you can do that.
>
> **[8:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=489)** So we're going to do this one right here.
>
> **[8:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=491)** I'm going to copy that, and I'm going to go to the Jupyter Notebook and see how we can work with that.
>
> **[8:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=498)** All right, so we are here in the Jupyter Notebook, and I'm going to paste what Hugging Face was suggesting we should be doing.
>
> **[8:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=505)** And I'm going to run this and we're going to see, I'm going to poke around this dataset.
>
> **[8:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=510)** Oh, actually it found a cached dataset, so it didn't have to download anything.
>
> **[8:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=514)** So if I run this, it's again going to be super fast, because I've already downloaded that.
>
> **[8:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=519)** So let's poke around this dataset object, see what it returns.
>
> **[8:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=524)** And as always, it's going to return a DatasetDict.
>
> **[8:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=527)** Now this dictionary will have the splits, the train, the test one, and the validation one.
>
> **[8:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=534)** So you can see here, this is 200 rows, 200 rows, and the train, the main one, will have 32,000 rows, which is like the complete dataset.
>
> **[9:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=548)** And you have the features, name, region, variety, ratings.
>
> **[9:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=551)** So you could essentially have something customized where you only have, say for example, region and rating in a dataset that is custom.
>
> **[9:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=560)** And you're advertising this through this configuration.
>
> **[9:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=564)** And so say for example, we only want the test one, and we want to get the test one.
>
> **[9:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=570)** So test dataset, well, we're getting the auto complete, like the nifty auto complete over there.
>
> **[9:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=578)** And we could say test_dataset.to_pandas, to a [[Pandas (Software)|Pandas]] DataFrame, we're going to call that.
>
> **[9:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=588)** And we're going to assign this to the DF variable.
>
> **[9:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=593)** So we run that, that's perfect.
>
> **[9:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=594)** And now we can say df.describe and see what is going on here with this dataset.
>
> **[10:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=600)** And you can see there is, in fact, 200 rows.
>
> **[10:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=604)** We have some values there on the rating, and that's perfect.
>
> **[10:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=607)** We have the ratings usually, go all the way from 85 usually to 100, but this dataset only has a wine that goes up all the way up until 99.
>
> **[10:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=618)** So there you go.
>
> **[10:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=619)** That is what you need to know when you are dealing with the specifics of a dataset on Hugging Face, with all of these different ways of enhancing a dataset.
>
> **[10:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=631)** We saw something that was very simple before.
>
> **[10:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-datasets?u=76281980&t=634)** Now this is a slightly like a step above that, where you are able to do and interact with different splits and define those with a custom loading file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (8), [[Git]] (2), [[JSON]] (1), [[GitHub]] (1), [[Fetch]] (1)
> **Env Vars:** csv (5), lfs (4), json (1), api (1), url (1)
> **Code Identifiers:** wine_ratings (4), downloaded_file (1), downloaded_urls (1), dataset_info (1), test_dataset (1)
> **Tools:** command line (2), jupyter (2), terminal (1), github (1)
> **Definitions:** is a  (4), means that (1), is called (1)
> **CLI Commands:** make (2), git (2), curl (1)
> **File Paths:** wine_ratings.py (2), validation.csv (1), blimp.py (1)
> **Exercise Files:** download the (2), template (1), clone the repo (1)

#### [Working with datasets](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=8)** - [Instructor] Here we're in the [[Hugging Face]] interface, and I'm going to talk a little bit about datasets here.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=14)** Now, datasets are one of the raw materials for working with the Hugging Face hub.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=20)** And in fact, one of the best ways to look at a dataset is to go to the datasets interface here and filter through things like the most likes, for example, and in fact, here's a really useful one, Wikipedia.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=35)** We can take a look at this and say that the Wikipedia dataset contains cleaned up articles of all languages, and it's from the dump.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=43)** So, super useful.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=45)** Someone could actually get inside of here and grab this entire Wikipedia dataset here and get it from a particular date and go through here and do whatever they needed to do.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=58)** For example, make instances of the dataset, get a very large file.
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=63)** Now, if you wanted to grab a slightly smaller version, you can take a look at Glue here, which is a very popular dataset, and if we go to the dataset viewer here, this really shows you how it's designed for machine learning, right?
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=77)** So that's one of the differences here, is it's really the raw material so if we go to Split, you can see I can grab the validation, I can grab the test, right?
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=88)** I can go through here and pick subsets of the data and I can actually get this information inside of a fine tuned job, for example.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=97)** So this is previewing the data, and it's also fairly easy to write some code that talks to this and pulls it into your local workspace.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=106)** But what if you want to upload your own dataset?
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=108)** Well, fortunately it's fairly straightforward.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=110)** If we go to the profile section here, notice how there's New Model, New Dataset, New Space.
>
> **[1:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=116)** We'll just go to New Dataset right here.
>
> **[1:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=119)** And we can call this one nba dataset.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=123)** And inside of this nba dataset, I would just go ahead and say create dataset and all I would need to do now is put this dataset inside of this location.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=136)** So how would I do this?
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=138)** I would just go to files and say add file.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=141)** So this is one of the easiest ways to add things to your information here.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=147)** And notice that I'm going to grab some data from a previous Kaggle project I did five years ago.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=153)** I'm going to go ahead and just upload it inside of here and I'm going to say upload files.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=159)** Select something that's on my desktop, see if we can find this particular dataset.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=164)** Here we go, here's this nba data set.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=167)** And it's very straightforward to then immediately start using it because this particular piece of data has now been uploaded and I can actually use this inside of a particular project.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=183)** So once you've gone through here, you've set it up, you can go to the dataset viewer, it should be available in just a second and I also could curl this dataset and grab it into a particular project.
>
> **[3:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=196)** So let's go ahead and take a look at a dataset that I've already uploaded previously.
>
> **[3:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=201)** If I go back to my profile here and I look at data sets here, here's one that I've uploaded the exact same dataset.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=210)** And one of the things that we'll notice is that this particular dataset has the information about it, it has the API call that I could actually use if I wanted to curl it.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=222)** And in fact, let's go ahead and try that.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=223)** If I go here and I say copy and I want to go into this workspace that I've got set up here, I could just paste that command in and you'll see that in fact, it is able to actually do a curl, right?
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=236)** So it's a really useful way to interact with my data.
>
> **[4:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=240)** I can also go to the dataset viewer and look at all the different stats here, as well.
>
> **[4:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=245)** Now, the really useful part next, once you've got it inside of there, would be to actually go into the interface and interact with it.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=254)** So what I'm going to do is I'm going to go to download data right here.
>
> **[4:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=258)** And you can see that there's not much code to programmatically download the data.
>
> **[4:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=264)** You just say, "from datasets import load_dataset".
>
> **[4:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=268)** If you want, you could pretty-print it and then you just put the name of the organization and the name of the dataset location that you created, in this case social-power-nba.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=279)** At that point, I can print out the features and then I can print out one of the examples as well.
>
> **[4:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=286)** In this case, I can print out this particular record so let's go ahead and do that.
>
> **[4:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=290)** We'll just go ahead and say, "[[Python (Programming Language)|python]] hugging-face/download_data.py" and notice that it is able to go to Hugging Face, grab this data set, and in fact, pull this one record directly out of here and it has all of the information about this particular player, right?
>
> **[5:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=312)** And if I wanted to change it or build it into a command line tool or whatever it is I need it to do, it would be pretty straightforward to actually do more to it.
>
> **[5:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=320)** Now, another way that I would recommend that would be a great way to interact with datasets is to use ipython.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=327)** In fact, if you go through here and you do this, this is one of the more useful ways to interact with a dataset would be to load in the dataset into a variable right here and then you could actually go through and have a little bit more of an interaction with the particular dataset.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=347)** So in this case, notice that I did grab that player again, but what if I wanted to grab the next record?
>
> **[5:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=353)** Well, it's pretty easy now because I interactively could play around with it and here we see this player is Anthony Davis.
>
> **[6:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=360)** If I wanted to grab a third player, I could go through here and I could play around with it.
>
> **[6:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=364)** So once you've got this dataset loaded here, there are a couple really good options to interact with it.
>
> **[6:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=372)** One would be to use ipython, a second would be to use a command line tool library like Qlik, for example, and to programmatically play around with it.
>
> **[6:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=382)** Again, though, you also could just go back to this interface, look at the dataset card if you wanted to, and notice how it says this API call, you could just go through here and copy it and just run it and also get the entire bit of information as well.
>
> **[6:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/working-with-datasets?u=76281980&t=398)** So there's lots of different ways to interact with a dataset on the Hugging Face hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** go to (10)
> **CLI Commands:** curl (3), make (1), find (1), python (1)
> **Analogies:** for example (4)
> **Code Identifiers:** load_dataset (1), download_data (1)
> **Env Vars:** api (2)
> **Cross-References:** go back to (2)
> **Tools:** command line (2)


### 7. Packaging Hugging Face

[↑ Back to Table of Contents](#table-of-contents)

#### [Hugging Face and FastAPI](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=0)** - [Instructor] Let's take a look at [[Hugging Face|huggingface]] working with FastAPI, which is a web framework from [[Python (Programming Language)|Python]] that allows you to expose an API, and in this case it's going to be, of course, a machine learning API.
>
> **[0:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=13)** So we have a couple of files here in a couple of directories.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=17)** Let's take a look first how huggingface and FastAPI work together.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=22)** We're going to concentrate in this web app directory, and it's only a single file called main.py, and we're trying to make it super simple so that it is very straightforward.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=35)** All right, so I'm going to go in into the code and let's go step by step and see what is going to be doing.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=43)** First, we're going to get our imports done.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=46)** We're going to be using the pipeline from Transformers, which is an abstraction, actually, that allows you to interact with various different models from Transformers.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=57)** Now, that abstracts away all of the complexity from dealing with different types of models.
>
> **[1:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=62)** That is going to be fine.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=64)** Then from FastAPI, we're going to import the FastAPI to create our application, and then we're going to import [[HTML]] response because we are going to be using a little bit of HTML.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=77)** And finally we're going to do a little bit of typing.
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=81)** That is why we're going to import this base model over here.
>
> **[1:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=85)** All right, moving on.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=86)** We have the generator, so that's going to instantiate.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=90)** It's going to download dynamically the, in this case, the GPT2 model from huggingface, and we're going to concentrate specifically on the text generation part.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=101)** So we're going to do some text generation.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=103)** I'm going to try to make this a little bit bigger.
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=108)** There we go.
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=108)** So once we do that GPT2 generation, we're going to instantiate and I'm going to, I'm actually going from top to bottom, so I'm going to instantiate here the FastAPI, similar to Flask, if you're familiar with Flask.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=122)** We're going to create this class so that we can define exactly what our inputs are for this HTTP API and that's going to be that the [[JSON]] body with a key of text and the value is going to be string.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=139)** So that's how we define our schema that is going to be accepting for JSON body that our endpoint is going to be accepting.
>
> **[2:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=150)** Then we're going to expose slash, so the root of this web application, and we're going to return an HTML response, which is this right here.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=161)** Nothing too complex is really actually very bad HTML form there, but oversimplifying things to concentrating the actual example.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=170)** Alright, and finally we are going to generate, we're going to generate, we're going to expose this generate endpoint, which is this one right here, and that generate endpoint is going to allow us to interact.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=183)** It's going to send requests to that /generate on our hosted API and use the generator from line six right here and use it here for results and then return the first item that those square brackets in the zero in the middle means that we'll return the first item.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=206)** So that's all we are going to need.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=209)** I'm going to go very quickly through the requirements, which is the last thing I want to show you so that you can take a look at how this is going to work.
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=219)** So a couple of the things that we're going to use, well, we're going to use Transformers, we're going to use [[TensorFlow]] for, because Transformers will need either [[PyTorch]] or TensorFlow installed for this to work.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=230)** Then we're going to be using FastAPI with that version.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=233)** And then to run all of these, we're going to use uvicorn, which is the recommended server that FastAPI works with.
>
> **[4:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-and-fastapi?u=76281980&t=241)** So that's a quick overview how huggingface and FastAPI would work together to serve a machine learning model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face|Huggingface]] (4), [[HTML]] (4), [[JSON]] (2), [[TensorFlow]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** api (4), html (4), gpt2 (2), json (2), http (1)
> **CLI Commands:** make (2), python (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** main.py (1)
> **Analogies:** similar to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Containerizing Hugging Face](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=0)** - [Instructor] Now that we have seen a quick overview of this [[Hugging Face|huggingface]]-ghcr, and we'll see later why that is important.
>
> **[0:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=11)** Now that we've seen a little bit of the kind of, like, how huggingface would work with FastAPI, let's look at how we would containerize huggingface.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=22)** So we have already the application, but now we want to see some of these files and specifically the Docker file and how is the web application going to be part of this container.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=37)** So what we're going to be doing here right now is going to take a look at Docker file and then see what are the important parts when you're constructing, you're building, you're containerizing this web application.
>
> **[0:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=52)** So the first thing that, and this is just 13 lines of a configuration file for Docker.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=59)** It's called a Docker file.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=60)** If you're familiar with Docker, then this will feel very straightforward.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=64)** If you're not, it is just a configuration file so that we know how to construct this container.
>
> **[1:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=72)** We're going to start from the top.
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=73)** We're going to use the [[Python (Programming Language)|Python]] 3.8.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=75)** And why Python 3.8?
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=76)** Well, I'll tell you in a second when we see the requirements, because once we see the requirements, you'll understand it.
>
> **[1:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=83)** As of this day, it is Python 3.8 is kind of, like, my go-to version because some of these requirements will not be able to get installed.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=93)** Next we set the working directory to be /webapp and we go ahead and install the dependencies inside the container.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=103)** Next, we copy all of the contents from the local web application into the remote or inside the container/webapp directory.
>
> **[1:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=114)** Finally, and this is best practice, we're going to be using the entry point, and here the executable is uvicore, which is the command line tool, the Python server that is going to help us serve FastAPI.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=127)** Finally, we're going to use this command to serve it when we start the container, it's going to be --host and then we're going to bind to any address and we're going to use main:app.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=140)** All right, so let's take a look very quickly at the requirements, although we've quickly seen that before.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=147)** And I'm going to click here and then go to requirements and see why that is important.
>
> **[2:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=152)** Well, the important thing is that [[TensorFlow]] has some issues with other Python versions that are not Python 3.8.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=159)** So I'm going for what I know works, and this is something that you as an engineer, either a data engineer or ML ops engineer or even a machine learning engineer that is dealing with dependencies have to go through, find what works and find how you can make sure that whatever you are packaging, like in this case I am, that is going to work very well.
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=186)** So that is how you would go and package something like huggingface.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=192)** Notice that I just listed dependencies.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=195)** And then next step, we've seen how this works with the web app and we've seen the main.py and how we're doing the inference and how we're generating essentially an interaction with the text generation, with the GPT2 model, how that comes to be a container.
>
> **[3:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/containerizing-hugging-face?u=76281980&t=215)** So those are the important files and that is how you would go ahead and configure that containerization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (6), [[Hugging Face|Huggingface]] (4), [[TensorFlow]] (1)
> **CLI Commands:** python (6), docker (5), find (2), make (1)
> **Versions:** python 3 (4)
> **Prerequisites:** install (1), configure (1)
> **File Paths:** main.py (1)
> **Env Vars:** gpt2 (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)

#### [Running FastAPI with Hugging Face](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=0)** - [Instructor] Now that we've seen the components of containerizing [[Hugging Face]] application using FastAPI, we need to actually go ahead and build that container.
>
> **[0:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=10)** The first thing that I want to do before I build a container, I want to show you how, let's open up the Dockerfile again and close this.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=20)** How is it that we're going to be running it?
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=22)** So effectively, we need to run this uvicorn, and then host.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=27)** It is important to run it locally because otherwise, you're going to not be able to verify that after containerization is going to work.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=35)** So let's make sure that this works locally.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=38)** I'm going to run and create a virtual environment in solo dependencies, run uvicorn, and see if that works.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=43)** And then if it works, perfect, I'll create the the Docker container.
>
> **[0:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=47)** So I'm going to go back and create a terminal, Create New Terminal, and then I'm going to close this up and make this the sole window.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=57)** And then I am going to run python3.8, and I'm going to specify that I want the virtual environment module, which is -m venv, and I'm going to create a venv, virtual environment.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=69)** So I'm going to do these, and depending on your system, you might get something that wants to have like a dependency.
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=76)** And yes, we want to make sure that VSCode will use that.
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=81)** So it will use that interpreter.
>
> **[1:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=83)** And now we're going to do, we're going to source venv/bin/activate.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=88)** And now that we've activate it, we're going to go and install our dependencies.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=92)** Now I know that that comes from requirements.txt, so I'm going to use pip.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=96)** And this is going to take a second, so I'm going to go ahead and run it, and then come back when it completes.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=102)** All right, so that completed.
>
> **[1:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=104)** And one thing that we want to do now is to make sure that uvicorn is accessible.
>
> **[1:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=108)** So I'm going to do which uvicorn, and you can see that that's running there.
>
> **[1:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=113)** So now we need to go and open up our Dockerfile, take a look at our Dockerfile.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=122)** So I'm going to make this window a little bit smaller.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=126)** There we go. So what we want is to capture the command.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=128)** So let's go ahead and change directories into webapp.
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=132)** And now we're going to do uvicorn --host 0.0.0.0, which means bind to anything, and then I'm going to say main:app, which is the [[Python (Programming Language)|Python]] module is main and app is the application for uvicorn.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=147)** So I'm going to run this.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=148)** I'll probably get a message that this is now running on port 8000, which is the default port for running uvicorn applications.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=156)** So Hugging Face will get those models downloaded, and then we have that available on port 8000.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=164)** So we want to open that, and then you can see that we have the self-documenting API to interact with the GPT2 model and generate some text.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=172)** So I'm going to go to /docs and I'm going to say go ahead.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=177)** And this is the interactive FastAPI, which is Swagger, the OpenAPI.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=182)** And we have the text generation when I want to try it out.
>
> **[3:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=188)** And this is probably going to take a quick second while it interacts with the model.
>
> **[3:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=193)** So it's effectively interacting with the API.
>
> **[3:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=196)** Now this is not necessarily tremendously important, but it allows you to get a little bit of interaction.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=206)** So you can see here that it was able to generate what it seems like a little bit of code.
>
> **[3:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=211)** So string.pair, and it basically created a function, I believe.
>
> **[3:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=216)** So that's fine. We verified that it works.
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=219)** I'm going to go back here to the terminal.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=220)** I'm going to Control + C, and now I want to show you how to actually build this container.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=226)** So I'm going to make this a bigger window, and then I'm going to close this.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=230)** The first thing that you want to make sure is that you have Docker installed.
>
> **[3:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=234)** In this case, I do have Docker installed.
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=236)** And what you need to do is make sure that you are in the same path where that Docker file is.
>
> **[4:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=243)** So to build this container, I'm going to say docker build, and I'm going to say, I have to tag it.
>
> **[4:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=250)** So in this case, I'm going to say [[Hugging Face|huggingface]], and that's the container name.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=256)** And then I'm going to use a label saying local.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=260)** And I am going to use dot to signal or to tell Docker the context, the main, the root directory where the build going to happen is right there.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=271)** So I'm going to run this, and this is going to take a second because it's going to be downloading several layers, and then it's going to be installing the dependencies.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=280)** All right, so that went really fast.
>
> **[4:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=282)** Usually, it's not this fast, but the reason it's this fast is because I was able to run it before.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=289)** And so some of these layers were not necessary to download them again.
>
> **[4:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=295)** Now we want to run it and we want to make sure that this also works as a container, not only building it.
>
> **[5:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=301)** So I'm going to say docker run, and I'm going to make it interactive.
>
> **[5:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=306)** And I am also going to expose the port 8000
>
> **[5:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=315)** from the container locally to port 8000 on this machine.
>
> **[5:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=320)** And then I am going to run huggingface:local.
>
> **[5:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=326)** And then let's see what happens.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=327)** So this is going to take a second, and it's almost like running a new application.
>
> **[5:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=334)** All right, so that seems like it's available.
>
> **[5:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=336)** I'm going to open that up again, and I immediately get a bad gateway.
>
> **[5:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=339)** Why is that?
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=340)** Well, because this is still trying to load this amount again.
>
> **[5:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=346)** Now you already saw that it downloaded in the beginning, now it's downloading them again.
>
> **[5:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=351)** Why is it doing that?
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=352)** Well, because this time, it's in a container.
>
> **[5:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=354)** It is no longer running locally.
>
> **[5:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=356)** It's running in these containers.
>
> **[5:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=358)** So you can see now that the port 8000, now that the application is up and running.
>
> **[6:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=362)** So let's go back to our tab here that said bad gateway.
>
> **[6:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=365)** I'm going to do a refresh, and then you can see that it's loading.
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=370)** And you can see now that the output here in the logs, it's a 200 OK.
>
> **[6:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=375)** This is effectively interacting with Hugging Face and FastAPI through the OpenAPI through Swagger, which is what we did before.
>
> **[6:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=385)** So I'm going to go ahead and interact with these.
>
> **[6:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=388)** I'm going to say /docs, I'm going to run the local OpenAPI, and I'm going to try to test it out with something else that is not a string.
>
> **[6:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=399)** So we can say, for example, what's the definition of [[MLOps]] is, and then we're going to say, I want to see if that actually works and generates something interesting.
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=416)** These will take a couple of seconds on my system, and we'll just wait it out until it completes.
>
> **[7:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=420)** All right, so that completed and we get our curl output there, and we are going to get, "The definition of MLOps is the implementation of a simple, flexible, and portable tool to manage files of a kind known as [[Microservices]]."
>
> **[7:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=433)** Well, not quite what I was looking for here, but we verified that this works both running locally and running in a container.
>
> **[7:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/running-fastapi-with-hugging-face?u=76281980&t=443)** We also saw how to build these with Docker and containerizer properly with some commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (3), [[Hugging Face|Huggingface]] (2), [[MLOps]] (2), [[Python (Programming Language)|Python]] (1), [[Microservices]] (1)
> **CLI Commands:** make (10), docker (8), python3 (1), pip (1), python (1)
> **Ports:** port 8000 (5)
> **Env Vars:** api (2), gpt2 (1)
> **Tools:** terminal (3)
> **File Paths:** requirements.txt (1)
> **Versions:** 0.0.0 (1)
> **Cross-References:** go back to (1)

#### [CI/CD packaging with GitHub Actions](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=0)** - [Instructor] Let's go back to our [[Hugging Face|huggingface]] repository.
>
> **[0:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=3)** We've already seen the containerization, how it works and FastAPI, and how all of these can be created, creating a build image.
>
> **[0:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=13)** But assuming some of the YAML ops, some of the machine learning operations workflows that you'll be doing, one of the things that you want to keep in mind is that you need to automate.
>
> **[0:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=23)** So if you had to publish these containers somehow, let's see if you open the Dockerfile and you go through, you go through all of these steps and then you build this container and then you push it to a registry, could be the Docker Hub, could be some other registry like a private registry, [[Microsoft Azure|Azure]] has its own container registry, Amazon as well, AWS, all of them have their own different destinations.
>
> **[0:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=49)** If you had to do this manually, there's a few steps involved, right?
>
> **[0:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=52)** You have to make sure that you have Docker installed, that these things are not changing, and then you're tagging properly, but you need to always think about automation.
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=63)** Automation is the foundational process where you'll have everything go or, as much as possible, go in one click.
>
> **[1:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=72)** So I'm going to show you one way that we can accomplish this by using [[GitHub]] Actions.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=78)** Actions are possible to do right here.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=82)** You can see there's this button called Actions in GitHub.
>
> **[1:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=87)** Essentially, you can do this anywhere, but Actions is pretty straightforward because it's already in GitHub.
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=91)** So what I've done here is I've create a workflow.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=95)** And a workflow can be created by either creating, clicking on Actions and adding a new workflow.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=102)** I'll show you right here what happens if I click New workflow.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=105)** I can search any workflow, but I can say, for example, build, let's see if I can do this with container, if something happens.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=115)** So there you go, Publish Docker Container.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=117)** So you would select something like this one, and see you have also Deploy a container to an Azure Web App, but let's take a look at what the Publish Docker Container will look like.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=128)** So you click on Configure, and the beautiful thing about this is that you will be able to have everything already pre-done for you.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=138)** So, well, here's a cosign in, a few things you might want.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=143)** But everything's already done for you, and all that you need to do is, well, this is a lot of sign-in stuff to make sure that you're actually publishing a Docker container.
>
> **[2:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=155)** But you can, you can use GitHub Actions to pre-do everything that you need to do.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=162)** And essentially you could just use this as is because you can see here that the REGISTRY is [ghcr.io](https://ghcr.io).
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=169)** That means that's the GitHub container registry.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=172)** So you don't need to set any other account.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=174)** You'll be able to authenticate very straightforward with the same credentials as the GitHub Action.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=180)** All right, so why am I showing you this?
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=182)** Well, I'm going to click Cancel.
>
> **[3:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=184)** The reason I'm showing you this is because you don't need to write this from scratch.
>
> **[3:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=188)** You can certainly use this repository as an example.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=192)** I'll show you the one that I created here that is very straightforward.
>
> **[3:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=196)** I'm not signed in the container.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=198)** It's just a very simple, very straightforward process that you can use as a foundational one to build upon.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=204)** So let's go, let's go through some of the steps.
>
> **[3:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=207)** Basic workflow to help you get started.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=210)** You can name this whatever you want. Then the controls.
>
> **[3:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=214)** Basically, I'm commenting out the push and pull_request.
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=219)** I'm not publishing any containers when I'm merging, but you can certainly uncomment these.
>
> **[3:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=224)** And whenever you're making a change or pushing a change to, say, the main branch, you are able to, you're able to publish effectively when there's a change pushed to main.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=237)** Now, a thing that, it's oddly worded or oddly phrased is this workflow_dispatch thing.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=244)** It allows you to, and I'll show you in a second, to trigger, to trigger a build by, manually, by clicking a button.
>
> **[4:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=253)** You have an option to do this.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=256)** Next, well, you have to define jobs and then build, and where is it going to run?
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=261)** Well, this is going to run in [[Ubuntu]]-latest. That's fine.
>
> **[4:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=264)** And then what are the steps?
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=266)** Well, the first steps, the first step is always to check out the repository, contents of this repository.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=272)** And then this Set up Docker Buildx means that you'll get all of the tooling necessary to do a Docker build.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=280)** And the next, we're going to authenticate to the GitHub container registry.
>
> **[4:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=285)** You can see here that the authentication is already taken care of.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=289)** These two variables are already defined.
>
> **[4:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=291)** I don't need to add anything. They're already there.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=293)** You don't need to change anything.
>
> **[4:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=295)** So, so far, I think we are good to go here with authenticating and setting up the environment.
>
> **[5:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=303)** Next, there's these little weird couple lines here.
>
> **[5:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=306)** All that means is that we will make a lowercase representation of our GITHUB_REPOSITORY name.
>
> **[5:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=314)** So if our repository name had uppercasing or camel casing, this will make sure that that's right, and it's all lowercase, and that it's a constraint that we must follow for publishing the container.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=327)** And then, lastly, Build and push container image to registry.
>
> **[5:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=331)** You can see here push is true, like if you wanted to just build it and not push, then that will be false.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=337)** And then, finally, what are the tags?
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=340)** So remember I was talking about doing this manually, having to tag every time?
>
> **[5:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=345)** Well, this would be using the github.sha which is the commit hash used for the commit the previous, this change.
>
> **[5:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=354)** All right, so that is the workflow, the full automation.
>
> **[6:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=360)** And you could actually essentially copy-paste this and put it in your own repository, and which is where you don't need to even change anything here because I'm not using any variables or any hard-coded variables, that is.
>
> **[6:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=372)** I'm going to show you how to run this.
>
> **[6:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=373)** I'm going to go to Actions, and then I am going to go to the CI.
>
> **[6:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=378)** Remember that was a name. That's what this means.
>
> **[6:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=381)** I'm going to click here, CI.
>
> **[6:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=383)** You can see I run it like a few months ago.
>
> **[6:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=385)** And that workflow_dispatch, remember we had that workflow_dispatch that is oddly named?
>
> **[6:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=390)** That's what allows you to do this.
>
> **[6:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=391)** I'm going to click here, Run workflow, and run workflow from main.
>
> **[6:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=395)** I'm going to build that.
>
> **[6:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=396)** It's going to take a second to appear over here because this is all done asynchronously.
>
> **[6:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=402)** And then once it does, we'll see how that log appears.
>
> **[6:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=406)** All right, so you can see that the workflow run was successfully requested.
>
> **[6:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=410)** Now, it appears, it's queued.
>
> **[6:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=412)** Now, it's in progress.
>
> **[6:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=413)** I'm going to click here and see how that looks.
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=416)** All right, so this is what you would be presented with.
>
> **[6:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=419)** You will see that the status is in progress, the build is going on, what are the jobs.
>
> **[7:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=426)** If you have a workflow that requires many different jobs, you will see that that is going on there.
>
> **[7:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=431)** And now I want to check, I want to check on the logs.
>
> **[7:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=436)** I'm going to click on build, and you can see that the Set up job, Run actions/checkout.
>
> **[7:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=441)** Remember we were going through some of the, sorry for the scrolling, but this happens automatically.
>
> **[7:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=445)** Remember we were going through some of the processes.
>
> **[7:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/ci-cd-packaging-with-github-actions?u=76281980&t=448)** There are some of the steps in the workflow, checkout will be one, the other one, to set up Build, Docker Build, authenticating to the container registry,

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Microsoft Azure|Azure]] (2), [[Hugging Face|Huggingface]] (1), [[Ubuntu]] (1)
> **CLI Commands:** docker (8), make (4), aws (1)
> **Tools:** github (8)
> **UI Navigation:** click on (2), go to (2), open the (1)
> **Code Identifiers:** workflow_dispatch (3), pull_request (1)
> **Env Vars:** yaml (1), aws (1), registry (1), github_repository (1)
> **Prerequisites:** set up (3), configure (1)
> **Definitions:** means that (2), is a  (1)


### 8. Hugging Face and Azure ML Studio

[↑ Back to Table of Contents](#table-of-contents)

#### [Hugging Face and Azure ML Studio](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=0)** - [Instructor] I'm going to be doing a quick overview of what [[Microsoft Azure|Azure]] Machine Learning Studio is.
>
> **[0:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=5)** I'm here in the portal from [[Microsoft Azure]], and I'm going to create or go to the Azure Machine Learning or Azure Machine Learning Studio section here and I'm going to create a new workspace.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=20)** And these are the steps that you would have to follow if you want to get a little bit involved with this service.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=28)** So like always, you are always going to have to have a resource group.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=33)** I'm going to do demo ml, I'm going to call it that.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=38)** And the workspace name, I'm going to do the same.
>
> **[0:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=40)** I usually tend to do the same for the workspace name and the resource group, especially if I want to do something like a demo.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=46)** And then I'm going to review and create, that's going to go through some validation steps.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=51)** And then, I'm going to finally click create.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=54)** So once that's done, it's going to initialize and submit the deployment.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=58)** It's going to be in progress and that's going to take a quick while.
>
> **[1:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=62)** So let's come back when that deployment is complete and we can load Azure Machine Learning Studio.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=68)** Alright, so the deployment is complete.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=70)** So we're going to go to the resource.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=71)** Going to the resource means that we will be able to launch the studio.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=75)** So I've clicked on launching the studio there and that will be going pretty fast.
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=81)** And we are going to see a couple of interesting things regarding a couple of the different things that we are going to be doing with Hugging Faces specifically.
>
> **[1:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=94)** We are going to be registering a [[Hugging Face]] data set.
>
> **[1:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=98)** Next, we're going to register a Hugging Face model and finally, we'll do some inspection.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=103)** So how does that work?
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=105)** Well, the first thing that we need to take a look is this section over here.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=111)** So this section over here allows us to do various different operations.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=117)** You can always go to the create new if you're adding something new, like say for example, a dataset, which I'll show you later, or a model which also show you later.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=128)** But essentially, this is your main section.
>
> **[2:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=133)** Now, depending on how zoomed in you are, like right now, I'm pretty zoomed in, your view might might change a little bit, but I usually try to do demos in this way.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=144)** Alright, so you have this main section here.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=148)** We're going to be looking at data and then we're going to be looking at models.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=154)** So these two in particular, let's take a look at data.
>
> **[2:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=158)** We can actually create data.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=162)** We're able to create a data asset.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=167)** So creating a data asset, they call it a data asset because it can be several different things.
>
> **[2:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=173)** I tend to call them data sets.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=174)** And the way we're going to be doing that later is by creating one.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=178)** So say for example, we wanted to test over here in the description test, I'm going to go very quickly here.
>
> **[3:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=184)** I'm going to select the tabular one.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=187)** And then next, you are going to see that you have different types of origins for or sources for those.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=198)** You can even play around with Azure open data sets and even from web files.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=202)** From web files, it means that you would only need to paste a web URL and do some [[Data Validation]].
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=208)** So I'm not going to go through that because we're going to do that later when we start registering a data set with or going through the actual steps of doing that with Hugging Face, but we're actually just reviewing how these set will work.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=223)** And again, we're working primarily with data sets and now with models.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=229)** So let's go to models here.
>
> **[3:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=232)** And if I go to models, we will do something similar.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=235)** We would click register and we could do from local files from our job output.
>
> **[3:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=239)** And all of these actions are available also through the Azure SDK.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=244)** I'm going to go here to the home.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=246)** And within here, we're not going to be touching on a few of these different things like auto ML and designer notebooks.
>
> **[4:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=253)** You can definitely play around with notebooks.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=255)** But you have a fully dedicated environment for doing all kinds of machine learning operations.
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-azure-ml-studio?u=76281980&t=261)** Alright, so that is a very, very quick overview of how to create an Azure Machine Learning studio workspace and how are the components of Azure Machine Learning Studio are going to work with the next steps with Hugging Face.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (8), [[Hugging Face]] (4), [[Microsoft Azure]] (1), [[Data Validation]] (1)
> **UI Navigation:** go to (5), select the (1)
> **Definitions:** means that (2), is a  (1)
> **Env Vars:** url (1), sdk (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Registering a Hugging Face dataset on Azure](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=0)** - [Instructor] Now, let's see how we can download a dataset from [[Hugging Face]].
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=4)** For this operation, we're going to be using the data sets, or the dataset library from Hugging Face.
>
> **[0:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=11)** And here you can see that I'm going to be using the wine ratings dataset from my account, and I'm going to go ahead and click this one that is very, very handy.
>
> **[0:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=23)** I really like it.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=24)** It has all of the examples that we need.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=27)** So, we essentially need to have these from datasets, import load dataset, to get these dataset, you have to make sure that you have your PIP installing datasets.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=38)** It's effectively PIP installed data sets.
>
> **[0:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=40)** I already done that, so I'm going to copy that, and I'm going to use a Jupyter notebook so that I can load that and make that work.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=50)** So, I'm going to head over to [[Microsoft Azure|Azure]] studio code and I already have data sets.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=55)** I made sure that that's working.
>
> **[0:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=56)** But I'm going to paste from datasets, import loaded dataset, and then I'm going to execute on line three and then make sure that that is loaded.
>
> **[1:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=65)** All right, so that downloaded a csv data, and now I'm going to create a new cell.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=74)** And let's poke around what this data set contains.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=77)** So, I'm going to run this and as suspected, we're going to have three, three different types of distinct types of data.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=88)** And I really want to have the full trained one.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=93)** So, in order to get that, I have to say train.
>
> **[1:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=98)** So, I'm going to say this is going to be a, you know, the train, train data set.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=106)** I'm going to say that equals to that, and I'm going to run that.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=111)** That's perfect.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=112)** And now if I poke a train data set, and I run these, you'll see that now I have like all of those 3,200 rows.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=122)** Now, what is it that I want?
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=125)** Well, I want to download it locally.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=128)** So I am going to, I'm going to, there's a lot of information here.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=135)** I want to make it go to [[Pandas (Software)|pandas]].
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=137)** So, I'm going to say df, which is stands for data frame.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=143)** I'm going to send it over to pandas and see what I get.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=146)** Perfect, so that works.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=148)** And now I can say df, describe, yep, let's see what happens there, perfect.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=156)** So 32,000 rows.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=159)** That's perfect.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=160)** That's exactly what I want.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=161)** Now, what I'm going to be doing is I'm going to send it to a csv file.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=167)** Alright, so I'm going to click code again.
>
> **[2:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=168)** So, I'm going to do df and I'm going to say to exactly to csv, and I'm going to say perfect wine ratings.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=177)** csv index false.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=180)** That's fine, that's going to create, it's going to create the csv file over there, right?
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=186)** I like to do this with pandas.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=187)** If there's another method that you'd like to use, that's fine as well.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=190)** But for this is going to be useful to just use pandas.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=192)** All right, so I'm going to execute these.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=195)** And you can see here that my handy wine ratings file, it's over here.
>
> **[3:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=200)** And then you, we have all kinds of different things.
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=202)** What are we going to do?
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=206)** We're going to register these on Azure.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=208)** So, in order to do that, we're going to head over to the web browser.
>
> **[3:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=215)** And then instead of going here, I'm going to go to Azure Machinery Studio.
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=219)** And then I'm going to go and head over to data.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=222)** I'm going to click create on create, I'm going to say wine dataset.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=230)** This is a wine dataset from Hugging Face.
>
> **[3:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=238)** And the type is going to be, this is going to be tabular.
>
> **[4:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=247)** And I'm clicking next.
>
> **[4:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=248)** And then we're going to save from, I'm going to upload it from my local, my local drive, which is fine.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=254)** So, local files, then next.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=257)** And then we're going to, this is fine, this is the storage.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=262)** Like where, like what type of storage I want, Azure blob storage is fine.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=266)** I'm going to click next.
>
> **[4:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=267)** And now I'm going to say, yeah, fine.
>
> **[4:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=270)** If the path already exists, and I'm going to click upload, it's going to bring up this, a small window.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=280)** I'm going to select the wine ratings.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=281)** I know that it, this is very small, but this is essentially what we're going to do.
>
> **[4:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=286)** I'm going to open that, I'm going to upload that, that was 12 megabytes.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=289)** I'm going to click next.
>
> **[4:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=292)** And then that's going to do some validation behind the scenes.
>
> **[4:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=295)** See that validation that, well that completed.
>
> **[4:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=297)** Yes, this is a format is limited comma, UTF-8.
>
> **[5:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=302)** Perfect, skip rows, I don't want to skip any, column headers.
>
> **[5:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=304)** All files have the same headers, that's fine.
>
> **[5:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=307)** And that's pretty good.
>
> **[5:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=312)** We have name region variety, rating and then, which is exactly what the data set is, if you remember, if I go back here and click out of that name, region, variety, rating and some notes.
>
> **[5:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=325)** So exactly the same, nothing has changed.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=327)** So I'm going to go next and now here behind the scenes, Azure has done a lot of validation on some of the column names and what type of, what type of data we're dealing here.
>
> **[5:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=342)** This is more than the decimal is kind of like a, well, I was looking more for like a float, but a decimal with a dot.
>
> **[5:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=351)** That sounds great.
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=352)** And that sounds perfect.
>
> **[5:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=354)** So, it was able to correctly do that.
>
> **[5:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=357)** So, you can change that.
>
> **[5:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=358)** If, for example, this was like a bullion, you would change that here, that's perfect.
>
> **[6:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=362)** On click next.
>
> **[6:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=363)** And then finally I'm going to click create.
>
> **[6:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=366)** So, it's going to create the dataset, they call it now, data assets.
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=370)** I still call this datasets, that's fine.
>
> **[6:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=374)** And what is the thing here is that we have, we have versions.
>
> **[6:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=383)** So, do you see here files in dataset one and current version one?
>
> **[6:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=388)** That means that every single change, every time I'm pushing a new version to this data set will get this uploaded.
>
> **[6:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=396)** And this is more meaningful if you're doing this programmatically with say for example the Azure [[CLI]] or using some of the APIs where you might be doing this programmatically and changing this.
>
> **[6:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=408)** But I wanted to show you using the UI so that you can get like a more, more paused, a more easy way of understanding what are some of the things that you will be seeing instead of me running several commands and making something happen.
>
> **[7:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=425)** But this is programmatically accessible through the [[Python (Programming Language)|Python]] API as well as other, other SDKs, other languages that are supported.
>
> **[7:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=436)** So, you could say for if I have a hundred versions here, you could say, you know, I want version 10, not version 100.
>
> **[7:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=441)** And then that would also work.
>
> **[7:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=444)** So there you go.
>
> **[7:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-dataset-on-azure?u=76281980&t=445)** That is how you do download a Hugging Face, data set locally, and then you get to upload it up to Azure Machine Learning Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (7), [[Hugging Face]] (4), [[Pandas (Software)|Pandas]] (4), [[CLI]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (4), pip (2), python (1)
> **Env Vars:** pip (2), utf (1), cli (1), api (1)
> **Definitions:** is a  (2), stands for (1), means that (1)
> **UI Navigation:** go to (2), select the (1)
> **Analogies:** for example (2), kind of like (1)
> **Versions:** version 10 (1), version 100 (1)
> **Tools:** jupyter (1)

#### [Registering a Hugging Face model on Azure](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=0)** - [Instructor] I have the GPT-2 model here loaded on the [[Hugging Face]] web UI.
>
> **[0:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=6)** And what I'm going to be doing is looking at how to use it in Transformers.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=12)** So essentially I want to find out how does the API look.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=17)** So I'm going to click here and this very nice card is going to open up.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=22)** I'm not going to clone it.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=24)** Although for effects of what we're going to try to do right now, which is downloading first and then pushing it over to [[Microsoft Azure|Azure]] Machinery Studio, what we're going to be doing is not, I mean you can absolutely a hundred percent do a [[Git]] clone of GPT-2 and then upload whatever files you want.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=43)** But we're not going to do that.
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=44)** We are going to do it with code.
>
> **[0:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=47)** So we're going to use it with Transformers.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=50)** I'm going to copy these and I actually have it already good to go.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=54)** And I've pre-installed a [[PyTorch]] and Transformers already for this to work.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=60)** So I'm going to open Visual Studio Code and you can see here I've already pasted that over here.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=66)** So I'm going to run this code.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=69)** And the model, well, I don't really need the tokenizer the model was pre downloaded before, that's why it took 3.8 seconds.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=78)** If you have not run this code before, it will take a few seconds to run.
>
> **[1:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=83)** All right, so now that model is downloaded in the local system somewhere.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=90)** And now I'm going to do here is, I'm going to say model save pre-trained.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=96)** Yes, I want to use that and yes, I want to use GPT-2.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=102)** So what do you think that will do?
>
> **[1:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=104)** Let's run it and find out.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=106)** I'm going to run this, take a a few seconds and now I have a GPT-2 directory and inside of there I have this config.[[JSON]] which essentially tells me lots of [[Metadata]] for the model that I just downloaded.
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=124)** And I have this PyTorch model bin.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=128)** So this PyTorch model bin is GPT-2, that is loadable or consumable with PyTorch itself.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=137)** So, alright, so now I have the bin there and I'm going to go back to the browser and then I'm going to open Azure Machinery Studio.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=148)** Now remember before we're looking at the one data set, we got that uploaded.
>
> **[2:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=151)** Now I'm going to go home and what we're going to do now is we are going to take a look at the model.
>
> **[2:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=158)** So the model is the one that will allow us to register a model.
>
> **[2:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=163)** So again, you can do this programmatically with the SDK with [[Python (Programming Language)|Python]], you can, I believe maybe the Azure [[CLI]], for sure the SDK.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=172)** So if you're doing this programmatically with Python in a automated way, you can definitely do this.
>
> **[2:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=176)** I'm going to click register and I'm going to save from local files.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=180)** Again, model type I am going to do, I'm going to let it as unspecified type, which is fine.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=190)** And I'm going to select the model file or folders.
>
> **[3:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=193)** I'm going to click here and then browse file.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=195)** Alright, so that loaded.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=197)** And instead of downloading the CSV like before, and I know this is kind of tiny, but here I'm going to say I want to upload the PyTorch_model.bin.
>
> **[3:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=207)** So 486.75 megabytes.
>
> **[3:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=212)** That is fine.
>
> **[3:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=212)** I'm going to click next and then I'm going to say this is GPT-2.
>
> **[3:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=219)** And then for the description, let's go here and do a little bit of this description over there.
>
> **[3:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=227)** I'm going to go here, put it here.
>
> **[3:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=230)** And then what version is it?
>
> **[3:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=232)** Well, for this we're going to just use whatever the default is.
>
> **[3:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=239)** In this case it's going to be one, I'm not going to use any tags.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=242)** I'm going to click next and I'm going to click register.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=246)** Okay, so that completed and it took quite a second.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=249)** Remember I was uploading almost 500 megabytes worth of data and we have our model GPT-2 right here.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=256)** And then we have a little bit of metadata.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=259)** But why would you want to have these registered on Azure Machine Learning Studio?
>
> **[4:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=263)** Well, there's various different things and various reasons why you may want to do that.
>
> **[4:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=268)** First is that you have the ability to have a simple versioning scheme.
>
> **[4:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=274)** And this is not tied only to anything with Hugging Face.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=279)** You can do it with ONNX and all kinds of other models as well or types.
>
> **[4:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=284)** But you can also deploy it like if you wanted to do something with this model you wanted to deploy, you could deploy to, look at this, to a batch endpoint, to a real time endpoint.
>
> **[4:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=294)** You could share the model you have.
>
> **[4:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=297)** Right now we only have one version, but imagine having like 10 versions.
>
> **[5:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=302)** We could check if explanations of fairness, we could like have a cluster and do some analysis and do all kinds of different things there.
>
> **[5:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=312)** And this asset ID at the very bottom would allow us to retrieve that model if we wanted to and have some interaction.
>
> **[5:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/registering-a-hugging-face-model-on-azure?u=76281980&t=321)** Alright, so that is how you would download a Hugging Face model using Transformers to a local directory and then upload that, register that as a version model on Azure Machine Learning Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[PyTorch]] (4), [[Hugging Face]] (3), [[Metadata]] (2), [[Python (Programming Language)|Python]] (2)
> **Env Vars:** gpt (7), sdk (2), api (1), cli (1), csv (1)
> **CLI Commands:** find (2), python (2), git (1)
> **Versions:** 3.8 (1), 486.75 (1)
> **File Paths:** config.json (1)
> **Cross-References:** go back to (1)
> **Tools:** visual studio (1)
> **UI Navigation:** select the (1)

#### [Inspecting a Hugging Face dataset on Azure](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=0)** - [Instructor] Back on the [[Microsoft Azure|Azure]] Machine Learning Studio interface we remember we already have our dataset, our wine dataset, and we want to do some exploratory analysis.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=12)** So if we go to explore up here, this is going to generate a little bit of data, but like nothing really like, this is kind of like a working a little bit with [[Pandas (Software)|pandas]] and you're showing kind of like the head and it is giving you a little bit of like a preview.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=34)** But the other thing that you can do is like, if you go and click profile, and for what we're trying to do here, I'm going to make this a little bit smaller so you can have a bigger picture.
>
> **[0:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=47)** You can see here that get a little bit of like informational stuff that you'll have here.
>
> **[0:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=52)** You have Napa Valley, the regions, Oregon, Tuscany, and you have all kinds of different information that you get from the get go without running anything specific on the dataset.
>
> **[1:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=65)** Variety and ratings, you can have ratings on wines go from all the way from 85 to a little bit over 100, and you can see that there's almost nothing.
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=76)** There's only 88 out of the 3,200 that are in the range of 97 to 99.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=82)** So, and we don't have anything, I think on 100, but you get a little bit of information and this is already very useful.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=90)** So now that we have that here, one of the things that you can do besides exploring, that you can see actually here we already talked a little bit about the rating and the notes and the region.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=105)** You can see that the notes, because it's all text and string, there's nothing there.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=112)** One thing that I wanted to show you is this way of consuming.
>
> **[1:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=116)** So now these would be slightly different than doing it with [[Hugging Face]].
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=125)** You essentially come here and that's the [[Python (Programming Language)|Python]] SDK.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=128)** So there you go, some details.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=131)** You can create newer versions if I don't want to essentially override, we want to make some changes.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=138)** And then I would do that same process of uploading these.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=141)** Now I can also do that with the SDK, but then that wouldn't matter.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=146)** All right. So that is how you do some exploratory work over here with data sets and take a look at how that looks and how to work with it and what type of things we will be dealing with.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/inspecting-a-hugging-face-dataset-on-azure?u=76281980&t=164)** And this is all coming from Hugging Face.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2), [[Microsoft Azure|Azure]] (1), [[Pandas (Software)|Pandas]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** make (2), python (1)
> **Env Vars:** sdk (2)
> **Analogies:** kind of like (1), picture (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Azure ML Python SDK](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=0)** - [Instructor] We've gone through a couple of the things that you can do with [[Hugging Face]] models and data sets and uploading those to [[Microsoft Azure|Azure]].
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=9)** But I wanted to take a moment to describe a little bit of the Azure Machine Learning [[Python (Programming Language)|Python]] SDK.
>
> **[0:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=16)** It is a great way to programmatically interact with what we've already seen within the portal and Azure Machine Learning Studio.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=25)** So all of the steps that I've already covered in the UI mostly are going to have parity with the Python SDK.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=33)** This allows you to do all kinds of different things, including setting up infrastructure, configuring nodes.
>
> **[0:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=41)** You can see here that some of the key areas that are essential here for this SDK.
>
> **[0:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=49)** I specifically like the ability to be able to deploy web services.
>
> **[0:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=53)** So you can actually deploy and serve a model right away, but you can also get trigger training models, and doing that with specialized infrastructure.
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=63)** Now specifically, I want to use a couple of the things that we've already touched on.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=69)** One is registering a model.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=71)** So I'm going to search this because this is a very, very, very intense and very thorough documentation.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=82)** So there's lots you can, I don't know if you can see my [[Cursor]] there, but we're not even halfway through, and there's lots to cover.
>
> **[1:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=89)** So let's just start with the model and how is it that you can actually go and register?
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=96)** I'm going to go a little bit towards here, and this is pretty powerful right here because once you have your model, and you can see here that you can name it, you know what the model is, kind of like the [[Forms]] that we've already filled out when we were creating that.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=117)** Now that's, I think that's very powerful.
>
> **[1:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=119)** Once you are able to authenticate, you can interact with the model.
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=124)** You can even delete it later.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=125)** You can download it.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=126)** So basically allows you to do, and you can run this locally as well.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=131)** So you don't need to be running on the cloud as long as authentication is done.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=135)** So I'm going to scroll all the way to the top so that you can see how you can authenticate on that.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=141)** I'm going to go way to the top.
>
> **[2:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=142)** This is stable versus experimental.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=145)** There's always new features coming up, but workspace is kind of like the main thing that you need to be aware with when you're interacting with all of these models, and actually Azure in reality.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=157)** So the main piece whenever you're interacting with anything in Azure and machine learning, you have to create these, it's always referenced in the docs as WS, and that stands for workspace.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=170)** So you can see here workspace create.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=172)** You have for the name of your workspace, remember we created a workspace specifically for Azure Machinery Studio, and then there's subscription ID, the resource group.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=181)** And if it doesn't exist, it has this ability of creating the resource group for you in any case and what's the location.
>
> **[3:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=189)** And then you're able to get that going.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=191)** So once that's done, you're going to be able to use that workspace in any environment really.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=198)** But you can actually save that to a configuration file, and that is known as the config adjacent.
>
> **[3:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=207)** You can save it like that and then reuse it whenever you want to reload it.
>
> **[3:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=212)** So different ways of actually getting that authentication, getting that already done for you to select the right machine learning workspace.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=222)** Now last, what I want to show you is the dataset APIs that you can do here.
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=228)** So I'm going to scroll almost all the way to the bottom here.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=233)** And this is the model deployment.
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=236)** And this is exactly the part where I wanted to show you what this dataset is.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=242)** So dataset is kind of like what we did before with Hugging Face datasets.
>
> **[4:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=248)** You have the same ability of registering a dataset using the APIs here.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=254)** You can see we're importing from AzureML.core import dataset.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=259)** And then you define that this is delimited files.
>
> **[4:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=263)** In this case, a dataset already exists in Azure, and you're able to use that, and it has the ability to send those to [[Pandas (Software)|Pandas]] dataframe, which is pretty useful.
>
> **[4:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=278)** And you have the ability to inject or retrieve those data sets from also URL paths.
>
> **[4:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=286)** You can definitely, there's the ability to do registering as well, but that doesn't seem to be covered here.
>
> **[4:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=295)** But definitely lots of other abilities to explore more what you can do with the Python SDK.
>
> **[5:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=302)** And so why is this is all relevant?
>
> **[5:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=304)** Because once you're in the Azure infrastructure, in the Azure Cloud, you can use these things that came from Hugging Face for your own exploring and your own training of your own models and your own deployment.
>
> **[5:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/azureml-python-sdk?u=76281980&t=318)** And it's very useful to have it and leverage the power of a cloud service provider like Azure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (10), [[Hugging Face]] (3), [[Python (Programming Language)|Python]] (3), [[Forms]] (1), [[Pandas (Software)|Pandas]] (1)
> **Env Vars:** sdk (4), url (1)
> **Definitions:** is a  (2), stands for (1), known as (1)
> **CLI Commands:** python (3)
> **Analogies:** kind of like (3)
> **Cross-References:** coming up (1)
> **Documentation:** the docs (1)
> **UI Navigation:** select the (1)


### 9. Hugging Face Automation

[↑ Back to Table of Contents](#table-of-contents)

#### [Using GitHub Actions for model deployments](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=0)** - Let's go through some of the things that you'll have to know and understand in order to be able to use [[GitHub]] actions for model deployments and specifically [[Hugging Face|Huggingface]].
>
> **[0:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=11)** So we're going to take a look and we're going to be working with this repository called "Huggingface Deploy [[Microsoft Azure|Azure]]."
>
> **[0:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=18)** And what we're going to be doing here is go through some of the details that are required and then we'll take several different approaches to actually deploy.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=27)** So the first thing that I want to show you is that this is a web application similar to what we've seen before in, in many of the examples is going to be using GPT-2 for doing some text generation live through the FastAPI that is being exposed.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=46)** So there's nothing much to it.
>
> **[0:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=49)** Let's take a look, a quick look at the, the dependencies and then the docker file and then we'll go through some of the more interesting parts on the GitHub action side of things.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=59)** So Transformers, let's see [[TensorFlow]] FastAPI and Uvicorn so that we are able to run these.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=67)** So that's, those are the requirements.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=69)** Let's take a look very quickly.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=71)** The Docker file, the docker files just 15 lines long and just very, very few things that are actually important.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=80)** We have the installation of the requirements, we copy the web application.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=84)** We're exposing port 8,000.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=86)** The entry point is Uvicorn, which is in charge of launching actually making these application run.
>
> **[1:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=94)** So that's, that's very good.
>
> **[1:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=96)** And then we are running the host 0.0.0.
>
> **[1:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=100)** So basically binding to any address and then making sure that main app is that is coming from web app is is actually being run.
>
> **[1:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=113)** Alright, so those are the details.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=115)** Let's take a look now at GitHub actions.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=117)** For that we're going to go to the GitHub/workflows, going to look at main.yml and let's take a look at a few things that are going to be happening here.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=127)** First, I'm going to make sure that the Azure container app name is called "demo-container."
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=132)** In this case, if you want something else you'll have to update that.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=135)** The Azure group name. One thing that I tend to follow is that I tend to use the same name that way remember and I can destroy the resources when I'm done.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=144)** Next. I have all of these commont out because I don't want to automatically trigger for now, every time I push to the main branch.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=153)** You can actually uncommon this if you're ready to, to do this like in a production environment where anything will get triggered once the changes are made to the main branch.
>
> **[2:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=163)** And what we're going to have here when we're going to be working with is a workflow_dispatch, which allows us to manually trigger.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=170)** This is oddly named and it's kind of like difficult to remember, but it's something that is useful to know when you're starting to work and design your workflow for a pipeline using GitHub actions.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=182)** Alright, so let's see, what are some of the things that we're going to be doing?
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=186)** So this is going to start with creating a docker image.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=190)** Set ups, sets up docker buildx.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=192)** That means that everything that is needed for building the docker image will happen there.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=197)** It is going to authenticate to different registries in this case, this one's registering or authenticating to the GitHub Container Registry.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=206)** That is what [ghcr.io](https://ghcr.io) means, is the GitHub Container Registry.
>
> **[3:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=211)** And you don't need to add any secrets because all those are already set up for you.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=217)** Then we're going to mangle the, the name and make sure that everything's lowercase.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=222)** That's why it is using the shell actually to, to make sure that those are set.
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=228)** Index is going to build, push the con, the contents to the GitHub Container Registry using the name of the repository and the commit.
>
> **[3:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=238)** Now on the deployment side of things, this is going to stay very consistent except for a couple of things that we'll see in a second.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=244)** First, we're going to authenticate login to Azure and I'll show you how, how to make sure those Azure credentials are set.
>
> **[4:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=253)** Next we're going to do this operation again where we're making sure that everything's lowercased in the naming conventions.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=259)** And finally we're going to deploy to a container app.
>
> **[4:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=263)** We're going to use the Azure [[CLI]] action and we're going to use this snippet here, this inline script that is going to allow us to do that.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=273)** In this case it is authenticating to the, to ghcr.
>
> **[4:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=278)** You have container registry is passing some, some secrets.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=281)** You can see here that there's a secrets.pat and that is what is going to take to deploy that.
>
> **[4:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=288)** Now I understand that this is a lot to take in.
>
> **[4:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=291)** It is not very demonstrative, but what I wanted to do is take you through step by step, on everything that you will have to do.
>
> **[4:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=298)** Some things will change here a little bit depending on the target destination that we're going to be working with.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=305)** So say for example, if we're going to be using Docker, we're going to use the Azure Container Registry.
>
> **[5:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=309)** While some of these details are going to be used for things.
>
> **[5:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=313)** We've already seen examples on using, the GitHub Container Registry, we will be using something slightly different.
>
> **[5:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=320)** And for now we were, we are going to, concentrate only in the packaging and the pushing to different container, different, different destinations, specifically Docker Hub and Azure.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=332)** The Azure Container Registry we're not yet going to deploy.
>
> **[5:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=336)** We'll be seeing that a little bit later.
>
> **[5:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-github-actions-for-model-deployments?u=76281980&t=338)** Alright, so that is a quick overview on the, the GitHub actions needed for model deployments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (10), [[Microsoft Azure|Azure]] (9), [[Hugging Face|Huggingface]] (2), [[TensorFlow]] (1), [[CLI]] (1)
> **CLI Commands:** docker (8), make (4)
> **Tools:** github (10)
> **Definitions:** is a  (4), is called (1), means that (1)
> **Analogies:** similar to (1), kind of like (1), for example (1)
> **Env Vars:** gpt (1), cli (1)
> **File Paths:** main.yml (1)
> **Code Identifiers:** workflow_dispatch (1)

#### [Using Azure Container Registry](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=0)** - [Instructor] One of the different destinations that we're going to cover is using [[Microsoft Azure|Azure]] Container Registry.
>
> **[0:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=5)** So in order to create an Azure container Registry, well, what we need to do is go through the portal in Azure, make sure you're authenticated, and then take a look at the registry.
>
> **[0:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=19)** So we're going to open here when I look for this on the same registry, and we're going to select the container registries, and there's no container registries to display, of course, and we're going to be creating a new one.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=33)** So I'm going to go ahead and create container registry and go through the steps.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=38)** So in this case, I'm going to use a very specific subscription that I have here.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=43)** I am going to create a new resource group, and I'm going to call it demo-container.
>
> **[0:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=49)** That sounds okay.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=50)** And I'm be using these for other services I'm going to be creating in Azure so that I can deploy these containers later.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=58)** So the registry name is going to be demo-alfredo.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=64)** That way I make sure that it is unique.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=67)** In this case, resource names may contain only alphanumeric characters, so I'm going to remove the dash and make that compliance.
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=73)** So there we go. I don't think Canada Central is good for me.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=77)** I'm going to try and pick and choose East US and hopefully that works.
>
> **[1:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=85)** Availability zones is not something that I need for this.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=88)** The SKU standard sounds okay.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=90)** There are other premiums and basic operations that are also needed.
>
> **[1:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=94)** So this is fine for now, I'm going to review and create.
>
> **[1:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=98)** So the validation pass there, I'm going to click create, and this is going to take a second.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=101)** You're going to see that the deployment is initialized and now it's in progress.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=107)** And this is going to take a while and we'll just wait it out.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=110)** All right, so that went very, very fast.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=112)** Let's go to the resource and take a look at some of these things that we will be needing here.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=117)** So in this case, we are required to do some things.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=123)** So let's take a look at the access keys.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=126)** And the access keys, in this case, we want to actually have the ability to log in, to log into to this.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=137)** And we need to make sure that whenever we're able to log in, we have the ability to have an admin user.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=145)** This is a requirement to use Azure Container Registry when we're pushing images, this is the one that you'll be using.
>
> **[2:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=154)** So in this case, you can see here that there's two passwords.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=157)** There's a username. The username is actually demoalfredo.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=160)** That's fine.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=161)** And there's some passwords I'm going to be using, There's another password if you need to use two passwords And you have the ability to regenerate those as well.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/using-azure-container-registry?u=76281980&t=175)** This is exactly what you need to log in and authenticate to an Azure Container Registry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6)
> **CLI Commands:** make (4)
> **UI Navigation:** select the (1), go to (1)
> **Env Vars:** sku (1)
> **Definitions:** is a  (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [Automating packaging with Azure Container Registry](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=0)** - [Instructor] Let's automate the packaging with the [[Microsoft Azure|Azure]] Container Registry that we were able to create before.
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=9)** In order to automate that, let's take a look again at the workflow file here, which is this YAML file, and we'll need to make some changes to these defaults that I already have.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=20)** So you can see here that I have this login to [[GitHub]] Container Registry.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=24)** I am going to be using the Azure Container Registry.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=28)** So this will need to get updated.
>
> **[0:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=32)** And then the other thing that we'll need to update is this tag so that it has the actual server from the container registry that we created.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=43)** All right, so we're going to have to make those changes.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=45)** And then the other thing is I'm going to have to use the username and password from the container registry.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=51)** Those are going to be secrets.
>
> **[0:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=53)** I'm going to have to update those.
>
> **[0:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=55)** So now that we know what the things that I need to update, I'm going to go to settings and create those secrets for my repository over here.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=66)** So I have secrets.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=67)** I'm going to say I want secrets for actions because this is what we need.
>
> **[1:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=72)** And I'm going to click new repository secret.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=75)** This is going to be, I'm going to prefix everything with ACR, which is Azure Container Registry.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=80)** I'm going to say username, and then I'm going to go back to the portal where I have this demoalfredo registry.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=88)** And the registry name is demoalfredo.
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=91)** The username is demoalfredo.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=92)** Yes, I want to copy that and then I'm going to add it as a secret.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=95)** Remember, once you add it as a secret, you don't have access to the plain text anymore, and this will be part of a secret.
>
> **[1:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=102)** You can update it and delete it, but not read it back again.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=105)** So one thing to be mindful about.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=107)** So I'm going to click add secret.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=109)** So perfect, I have one ACR username, then I have another one, which is the ACR password.
>
> **[1:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=116)** So I'm going to see ACR password, and then the password is going to be one of these two.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=122)** Let me pick the first one.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=123)** I'm going to copy that to the clipboard and then back to action secrets.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=127)** I'm going to paste that here.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=128)** I'm going to add that secret.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=130)** And now I have these two secrets.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=134)** So perfect.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=135)** So that's good to know that this is now ready and set.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=139)** And now we can go and update our workflow file.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=143)** So I'm going to go to the GitHub workflows directory and open the YAM: file and go ahead and edit.
>
> **[2:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=150)** I can use right here, the web interface to do this.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=153)** It is going to be pretty, pretty straightforward.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=157)** So these are some things that I'm not going to need right now because I'm not going to be doing a deployment.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=164)** I am just going to be doing the containerization and pushing out.
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=171)** So if you remember, I need to make sure that the registry is updated.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=175)** So let's take a look again back at the portal.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=177)** And that login is basically the login server.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=180)** So I'm going to copy that, go back to the GitHub actions, go to registry and make sure that this value is updated.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=187)** So in this case it's demoalfredo, like if you're using something else, that will probably change.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=192)** And the username is going to be, this is going to be secrets.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=198)** And this is going to be ACR username.
>
> **[3:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=201)** Remember we were adding those as the secrets in our repository.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=206)** This is going to be secrets.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=208)** And this is not going to be token, this is going to be ACR_password.
>
> **[3:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=214)** Next, we're going to let take a look at the next step.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=217)** So that's lowercase the repo name that stays the same.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=220)** And then we're going to build and push to container to image to, let's call it to a ACR registry.
>
> **[3:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=227)** Push is true.
>
> **[3:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=228)** That means that you have the option to actually not use anything in there.
>
> **[3:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=233)** And the tags are going to require this registry name again.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=237)** So I'm going to copy that.
>
> **[3:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=239)** I'm going to put it over here.
>
> **[4:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=241)** I'm going to say that.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=242)** So demoalfredo.[azurezurecr.io](https://azurezurecr.io) and then it's going to go to the repository environment.
>
> **[4:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=250)** And the GitHub SHA is going to be the file Docker file is fine.
>
> **[4:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=253)** That's exactly what I have already.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=255)** You've already seen the Docker file.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=256)** Now I'm going to start a commit, update main.yaml.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=259)** That sounds fine.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=260)** I'm going to commit the changes.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=262)** All right, so changes have been committed and now what we need to do is actually, well, we're double checking that our changes are there.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=272)** We have the username and password and we have here the things that we need to do to, to tell Docker where he needs to push it.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=280)** Now I'm going to actually go ahead and trigger.
>
> **[4:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=282)** So I'm going to go to the action tab and you can see here that there's nothing on, because there are no workflows run.
>
> **[4:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=289)** But our little workflow yaml has this thing, the title over there trigger auto deployment.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=296)** I want to run the workflow.
>
> **[4:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=297)** This is what allows me to run it manually.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=299)** And when I click run the workflow and see what happens, this is going to take a second to update.
>
> **[5:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=304)** And once stat's done, we'll come back here to take a look.
>
> **[5:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=308)** Oh actually there we go.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=310)** That was pretty fast.
>
> **[5:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=311)** But this will take, you can see was queued.
>
> **[5:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=313)** Now it's in progress.
>
> **[5:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=314)** This will take a second because it needs to build.
>
> **[5:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=317)** Let's take a look at some of the logs and you can see it's logging and authenticating and it's building the image.
>
> **[5:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=323)** And then we'll push it.
>
> **[5:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=324)** Once it's done, we'll come back and see what the result is.
>
> **[5:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=329)** Alright, so that completed and it took about a little bit over three minutes to complete.
>
> **[5:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=335)** And we were able to, well be mindful that everything that you name in the step will be used here in the logs.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=343)** This is not post logging into GitHub Container Registry.
>
> **[5:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=346)** This is ACR.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=347)** And you can see here that the ACR registry made change that we made that was being captured.
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=352)** Alright, so that's great.
>
> **[5:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=353)** We've been able to post to the Azure Container Registry.
>
> **[5:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=358)** That means that if I go here, back to this over and I do an overview, I can say activity log, I will be able to see that there's some operations.
>
> **[6:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=369)** There we go.
>
> **[6:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=370)** You can see that logging credentials was used, some operations were created.
>
> **[6:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=377)** Well, this is actually happening with the subscription when we were creating this and were creating or updating the container registry.
>
> **[6:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=387)** So that's pretty good.
>
> **[6:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=389)** Let's take a look at some of the things that we have here.
>
> **[6:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=391)** We have repositories and we have the alfredodeza/[[Hugging Face|huggingface]] azure acr that actually came from using that automation.
>
> **[6:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=399)** We can have here, we can see the tags last modified like, well just a few minutes ago.
>
> **[6:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=405)** Tag count, manifest count one.
>
> **[6:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=407)** And this is actually coming from, this repository name is coming from the actual tag that we use.
>
> **[6:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=415)** So there you go.
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-with-azure-container-registry?u=76281980&t=416)** That is how you use this automation to push containers to the Azure Container Registry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (6), [[GitHub]] (5), [[Hugging Face|Huggingface]] (1)
> **Env Vars:** acr (8), yaml (1), yam (1), sha (1)
> **CLI Commands:** make (4), docker (3)
> **UI Navigation:** go to (5), open the (1)
> **Tools:** github (5)
> **Cross-References:** go back to (2)
> **Definitions:** means that (2)
> **File Paths:** main.yaml (1)

#### [Automating packaging Docker Hub](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=0)** - [Instructor] Let's take a look at how we can package our machine learning model with [[GitHub]] Actions and push it to Docker Hub.
>
> **[0:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=9)** So I have my repository here, and in here, we're going to take a look at the workflows that are going to be configured for what we want to try to do.
>
> **[0:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=22)** Let's see all of the components that are actually needed to make that happen.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=25)** So I'm going to go into the workflows directory under .github, and I'm going to open this YAML file.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=33)** So this is very, very straight forward.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=37)** What we need to do is just define when this is going to get triggered.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=45)** In this case, anytime that I'm making a push to the main branch.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=48)** And you can configure this in any way you want, we're not going to dive into the details as to how all of these different options work on GitHub Actions.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=57)** But we are also going to add the workflow dispatch so that we can trigger these manually, and you'll see these manual triggering later on in a few minutes.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=68)** Alright, so moving on.
>
> **[1:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=69)** We're going to bring down the project as well, we're going to check out all of the components, all of the code, all of the files.
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=76)** And we're going to use the docker/login-action, at the version one.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=82)** So this means that we'll use these provided by Docker and it will allow us to essentially authenticate to Docker.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=93)** It requires using the username and password, which I'll show you in a second how to do this.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=99)** Essentially, this is username and your access token.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=103)** Once that is done and you've successfully authenticated to Docker Hub, you will be able to push the container to Docker Hub.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=111)** In this case, I want to actually build and push.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=115)** So I'll set the context, I'll say that the Docker file is the one at the root level, and "push: true" means that yes, in fact don't only build it but also push it once you are done.
>
> **[2:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=128)** And the tag is going to be [[Hugging Face|huggingface]]-fastapi: latest.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=134)** Great.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=135)** So now, what are these things and how do I get them?
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=139)** Well, we go to hub.[docker.com](https://docker.com), I have that here.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=144)** If you are logged in, you will see your repositories.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=148)** I can actually log out and so you can see this as well.
>
> **[2:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=151)** This is what you would get if you go to hub.[docker.com](https://docker.com), then you would go and sign in as I was doing before and you would be able to see all of your repositories again.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=164)** Alright, so how do you get those [[Tokens]]?
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=167)** You will go to settings, Account Settings right here.
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=171)** And then you will go to Security, and then you will see that your Access Tokens are right here.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=177)** So some of these are auto generated, some of these are manual.
>
> **[3:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=181)** You would go to New Access Token right there, click on that, and create a token description.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=187)** So you'll be giving a description, so say for example, "GitHub Actions Packaging" for "ML," and then you would generate access permissions: read, write, and delete.
>
> **[3:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=198)** Sounds okay to me for the type of things that we want to do because we want to actually push that.
>
> **[3:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=203)** And then, you will get something like this.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=206)** This will allow you to paste this inside your GitHub Actions.
>
> **[3:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=211)** So you need to grab that and make sure that that's available.
>
> **[3:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=216)** So now you have these, you have your username, you have your token.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=220)** What you need to do is go back to your GitHub repository and you're going to go to Settings.
>
> **[3:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=229)** And then in Settings, we're going to scroll down to "Secrets and variables," and you're going to select Actions.
>
> **[3:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=238)** So I'm going to click on Actions, and you're going to add them right here with a "New repository secret."
>
> **[4:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=245)** You can see that I've already added DOCKER_HUB_ACCESS_TOKEN and DOCKER_HUB_USERNAME.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=251)** So make sure that whatever you're adding here is exactly the same as the ones that we were seeing in the workflow.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=260)** So again, if we go very quickly to check the code and we go to .github/workflows and the docker-image, those need to match these ones right here.
>
> **[4:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=269)** So I know they match and I know they're already set and correctly done, so I'm going to go ahead and trigger that.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=276)** How do I trigger that?
>
> **[4:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=277)** Go to Actions.
>
> **[4:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=279)** I select Docker Image CI, which is the one workflow that I have, I click on that.
>
> **[4:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=285)** And then because I have workflow_dispatch, I'm going to click on "Run workflow."
>
> **[4:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=288)** I'm going to click on "Run Workflow," and then that is going to take a second, and then it's going to show up right here once it's ready.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=299)** And there we go, it shows up.
>
> **[5:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=301)** Now, I'm going to click on this one, which I had just run a few minutes ago, and you can see it finished under three minutes, pretty fast.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=310)** In two minutes, 18 seconds, it was able to push no problem.
>
> **[5:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=314)** So if I go back to Docker Hub and exit out of here, and I go back to where I was before, you will see that huggingface-fastapi is right there.
>
> **[5:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=326)** This is using the tag that I set on the GitHub Action, and you can see that the latest appears right here, coming up seven minutes ago.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=337)** So once the run completes, I'll get an updated version here.
>
> **[5:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/automating-packaging-dockerhub?u=76281980&t=343)** So that is very quickly how we can set up and push to Docker Hub if you have an account, and do it with your [[Hugging Face]] models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (8), [[Hugging Face|Huggingface]] (2), [[Tokens]] (2), [[Hugging Face]] (1)
> **CLI Commands:** docker (13), make (3)
> **UI Navigation:** go to (8), click on (6), scroll down (1)
> **Tools:** github (8)
> **Cross-References:** go back to (3), coming up (1)
> **Env Vars:** yaml (1), docker_hub_access_token (1), docker_hub_username (1)
> **URLs:** [docker.com](https://docker.com) (2)
> **Definitions:** means that (2)


### 10. Hugging Face with Azure Containers

[↑ Back to Table of Contents](#table-of-contents)

#### [Create an Azure container application](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=0)** - [Instructor] Now, what are [[Microsoft Azure|Azure]] Container Apps?
>
> **[0:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=3)** It's the ability to have serverless infrastructure for your deployments.
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=8)** It allows you to deploy an actual container and not think about anything else.
>
> **[0:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=14)** And this is a very powerful way to deploy [[Hugging Face]] models, and in fact actually, pretty much anything machine learning models wise.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=24)** And you will see that you have instance scale and the ability to select different things when you're creating one.
>
> **[0:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=31)** So I'm going to go ahead and going to create a Container Application, which is the first step in order to try to deploy.
>
> **[0:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=39)** And then, we'll go and try to go through the steps that will be needed in order to have deployment.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=48)** So let's take a look at the process here when I click "Create container app."
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=54)** When I click this, this is going to load the subscription, that's fine.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=58)** The resource group, we've been using one that is demo-container, and that will be great, that's exactly what we need.
>
> **[1:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=67)** The container app name is pretty important because if we choose something here, whatever name we pick will be used for our automation later.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=82)** And actually, I want to show you here kind of like, why is that important?
>
> **[1:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=85)** Because here, we will need to update these values.
>
> **[1:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=90)** So the Azure container app name is demo-container, the Azure group name is also named the same.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=95)** These are options, and these are variables actually, so these values can be whatever you're using.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=103)** So demo-container is fine.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=105)** So if I go back here, demo-container is correct, and container app name will have to be something unique.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=115)** So if I was doing only demo, let's see, well that still works and that's fine.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=121)** But demo-container sounds fine to me.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=126)** I don't understand why this is suggesting Canada Central, you know, that's fine.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=131)** I want East US.
>
> **[2:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=133)** And we will be doing "Review and create."
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=137)** And then this looks correct to me.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=140)** And now, let's see, "Accepting traction from anywhere," on Port 8,000.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=145)** So these are some of the settings that we'll be using.
>
> **[2:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=148)** And this looks okay, so I'm going to go ahead... Let's actually take a quick look at some of the things that we have here.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=160)** Alright, so we have, well, this quickstart image.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=165)** Let's take a look at the quickstart image, "Simple hello world container," that sounds fine.
>
> **[2:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=170)** This all looks okay, and the target port is 80, we'll be able to change those later.
>
> **[2:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=175)** Alright, so I'm going to go click Create, and then wait a second until it completes.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=182)** Alright, so this completed.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=183)** So let's go to the resource here, I'm going to click going to the resource.
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=187)** This has loaded, this is fine.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=190)** Let's take a look at some of the different things that we have here.
>
> **[3:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=194)** So we have an Application URL.
>
> **[3:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=196)** Actually, if I go there, we'll have a, "Welcome to Azure Container Apps," which is the basic example container that's going to be used.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=204)** And we are going to be using some of those.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=209)** Now, you have the ability to pass in secrets, set up continuous deployment, and manage your app through revisions.
>
> **[3:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=215)** So that looks pretty good.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=217)** We have monitoring as well, so if there are any problems, we can take a look there.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=222)** And then, we can see what Ingress looks like.
>
> **[3:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=227)** And here, we'll have the ability to map some of the ports.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=235)** Now remember, if I go here to my tab, remember that if I'm using Hugging Face, FastAPI, the Uvicorn setting, if I take a look at the Docker file over here, we'll be using port 8,000.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=251)** So we'll need to make sure that those are updated.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=255)** But this effectively allows us to have everything ready.
>
> **[4:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=260)** So I'm going to make that tiny change, I'm going to make sure that this is port 8,000 on the target port, and the Ingress type, HTTP for now.
>
> **[4:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=270)** "Accepting traffic from anywhere," that looks okay.
>
> **[4:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=273)** And I'm going to click Save, and then that's it.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=276)** This is going to update the Ingress, and then that is going to be mapped when we do an actual deployment to Azure.
>
> **[4:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=285)** Alright, update Ingress has been completed.
>
> **[4:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=288)** And there you go, this is how you create a Container App.
>
> **[4:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/create-an-azure-container-application?u=76281980&t=292)** And then, we'll go and proceed to see how we can automate and push something so that this is working, serving our Hugging Face with FastAPI model and application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (5), [[Hugging Face]] (3)
> **CLI Commands:** make (3), docker (1)
> **Ports:** port 8 (3)
> **Env Vars:** url (1), http (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Prerequisites:** set up (1)

#### [Configure an Azure container application](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=0)** - [Instructor] After creating your container out, there are a couple of things that you will need to make sure that are set.
>
> **[0:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=6)** First is the ability to ensure and triple check, and we've already gone through this, but triple check that the ingress, let's take a look at this is, well, first of all, that it is of course enabled, that ingress traffic is accepting traffic from anywhere.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=24)** You can also say, limited to container apps environments.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=27)** So anything behind the firewall on [[Microsoft Azure|Azure]].
>
> **[0:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=32)** Ingress type http is fine for now.
>
> **[0:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=35)** Remember, we don't have SSL enabled and I'm going to scroll through here and transport this auto. That's fine.
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=43)** And insecure connections are, we can be allow or disallow, but specifically, we've already changed this to port 8000.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=51)** Make sure that this is set and map correctly to the exact port that you're going to be using.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=57)** I know UB Corn uses port 8000, so that's why I went ahead and did it and made that change before.
>
> **[1:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=63)** The other thing is that for the type of model, for the type of service that we want, we have a thing here in our application that we'll need to make sure it is changed.
>
> **[1:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=77)** That is in the containers side of things here in application.
>
> **[1:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=80)** So let's take a quick look and see what happens there.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=86)** All right, so I've clicked on containers and the container here is, well, I basically can choose whatever I want.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=93)** But in here, you can see some of the simple hello work container, where is it coming from, what's the name.
>
> **[1:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=100)** But in this case, it's coming from Azure Container Registry, Azure Docs, that's fine.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=106)** And then we can go here and see that in this case, the container resource allocation has a quarter of a CPU core and only a half a gig of RAM.
>
> **[2:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=121)** That is tiny, that is barely, barely enough to get this container up and running.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=126)** We will need to make some changes here so that when we're deploying [[Hugging Face]] and the fast API application, we will be able to make changes here and actually be able to load.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=139)** So you have to go through the edit and deploy.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=143)** And we're not going to deploy right now.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=145)** But we're going to make some edits here on the performance on these containers.
>
> **[2:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=152)** So I'm going to click on this simple hello world one, and I'm going to go and say I want to, these are some of the basics and here I'm going to scroll and I want to say that this is going to need, let me see, the maximum is two cores.
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=171)** If I do three, it won't let me.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=174)** And half a gig is not enough, so I'm going to say four gigs. I'm going to save that.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=180)** And then you can take a look at scale.
>
> **[3:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=184)** And this is the scale rule setting.
>
> **[3:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=186)** This is great because it can go through minimum of zero, a maximum of 10.
>
> **[3:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=190)** It can be more, it can be 30, I think zero to 10 is fine and that sounds pretty good.
>
> **[3:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=199)** And then you go to create.
>
> **[3:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=201)** Now, we don't need to change this right this second, but whenever we are, this is to create and deploy a new revision.
>
> **[3:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=211)** But when we're done pushing our image, we'll need to come here and change this and I'll show you how that works.
>
> **[3:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=217)** But these are things that we'll need to do anyways, and you need to be aware where these options are.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=223)** Next time when we're deploying, I'll go and change these very fast and not go into deep explanation.
>
> **[3:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=231)** All right, so we've gone through a couple of the things here that you will need to know on containers, on what the scale is, and how that looks.
>
> **[3:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=239)** And you can see here that you can make that change regardless on the scale rules.
>
> **[4:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=247)** And you can make those change there as well.
>
> **[4:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=250)** So it actually takes you there.
>
> **[4:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=251)** It's kind of confusing because it takes you there to the same thing.
>
> **[4:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=254)** Now, if you want to set up authentication, if you have some models that you don't want to have completely open in the wild, then you would add that here.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=262)** We're not going to set that up right now.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=266)** Finally, you have continuous deployment which allows you to sign in with [[GitHub]] and update GitHub for you so that it sets up the options that you want.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=276)** So here you can see here the demoalfredo is already setting the registry in the images demo container.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=281)** We're not going to be doing that because we already have everything ready to deploy.
>
> **[4:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/configure-azure-container-application?u=76281980&t=287)** So we're going to skip this for now and then head over to do the automation on the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[GitHub]] (2), [[Hugging Face]] (1)
> **CLI Commands:** make (8)
> **Env Vars:** ssl (1), cpu (1), ram (1), api (1)
> **Ports:** port 8000 (2)
> **Tools:** github (2)
> **UI Navigation:** click on (1), go to (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)

#### [Deploy Hugging Face to Azure](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=0)** - [Instructor] Now we're ready to deploy our [[Hugging Face]] application, our Hugging Face containerized application to [[Microsoft Azure|Azure]].
>
> **[0:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=7)** We have several things in place, but there are a couple more things that we're going to need to complete this full automation.
>
> **[0:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=16)** I'm going to scroll here down on this repository.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=20)** We're not going to necessarily need a personal access token from [[GitHub]] because we are not going to be using GitHub Container Registry.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=29)** This is something that you would use if you were using a container registry on GitHub.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=33)** We are going to be using Azure Container Registry itself, so don't pay attention to the generate a PAT.
>
> **[0:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=42)** We are going to need an Azure Service Principle.
>
> **[0:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=46)** And then what we're going to be doing then, once we capture that output of running this command, is we're going to be able to add it as a secret with Azure credentials.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=58)** So what you need to do is run this command, and you need to be very aware of the Azure subscription ID.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=66)** It is something that you'll have to be able to follow it and find it like actually with these links.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=74)** But it is something that is everywhere.
>
> **[1:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=76)** You go on the portal, the Azure subscription ID will be there.
>
> **[1:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=79)** So you run that command and you capture that output and it'll be [[JSON]].
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=82)** So let's take this step by step.
>
> **[1:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=85)** I'm going to scroll all the way up here, go to settings, then go to Secrets, once again.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=93)** I'm going to click Secrets, then going to click actions, and then here we're going to have these three ones.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=99)** We've already seen the Azure Container Registry password, the username, but now we are going to add the Azure_Credentials, and that is so that we can authenticate to Azure and tell Azure, hey, we have a new image, it's been built.
>
> **[1:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=112)** You need to publish it and get that deployment updated.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=117)** All right, so once you have that, we're going to go back to the actions so that we can see what are some of the things that we need to change.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=126)** So GitHub workflows, and I made a couple of changes already.
>
> **[2:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=129)** I'm going to go to the main.yaml, the only workflow, the only yaml file, and then I'm going to scroll all the way down.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=136)** And I should have been able to update these, but I didn't, and I hard coded them.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=143)** This is just something to keep in mind.
>
> **[2:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=146)** I forgot to update those over there.
>
> **[2:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=149)** But let's walk through kind of like the process here that we're going to be following to make this happen.
>
> **[2:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=157)** So first, as you know, and we've already done a little bit of this, we're going to set up the Docker build.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=162)** We're going to log into the actually Azure Container Registry.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=167)** You can see here that we tried before using the GitHub Container Registry, but it uses the same action.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=174)** So I forgot to mention here that we're going to be using Azure, that's the name, that doesn't matter.
>
> **[3:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=180)** You can say anything, it's just a string to identify what's happening here.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=183)** This is the important part.
>
> **[3:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=185)** The registry is [demoalfredoazurecr.io](https://demoalfredoazurecr.io), Azure Container Registry IO.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=192)** That's the address we used before, the ACR_username and the password, which was generated when we created that.
>
> **[3:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=199)** We're going to make sure that the name is lowercase and then we're going to build.
>
> **[3:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=205)** We're going to build and push container to the ACR registry.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=209)** Now you can see here that the tags is very important, because I'm using demoalfredo.[azurecr.io](https://azurecr.io), which is exactly where we need to push.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=220)** Otherwise this wouldn't be able to understand.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=222)** If you're missing this part, which is something that is pretty crucial, what will happen is Docker behind the scenes would assume that you're pushing to the Docker hub.
>
> **[3:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=231)** And in this case, we're not pushing to the Docker hub, we're pushing to the Azure Container Registry.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=237)** All right, so once all of that building is done, it's going to push that to the container registry.
>
> **[4:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=243)** Then we're going to authenticate to Azure again.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=246)** And this is where the service principle credentials.json output that is going to happen once you run that command, it's captured here at AZURE_CREDENTIALS.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=255)** That is how you're going to authenticate.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=257)** And then next we're going to finally deploy to the container app.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=262)** Now I'm going to make this slightly bigger.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=266)** Let me see if I can do this.
>
> **[4:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=268)** I'm going to make this a little bit bigger.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=271)** Actually, let me go and do 175% because I want to cover some of these things that we want to run here.
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=280)** So we're going to use the the Azure [[CLI]] action, and that allows us to call some Azure CLI commands using GitHub action.
>
> **[4:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=293)** So first we're going to say that we are going to install the extensions automatically without a prompt.
>
> **[4:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=299)** That allows us to ensure that the container app extension is going to be installed, regardless if it's available or not.
>
> **[5:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=308)** Then we're going to say on that first line, I'm going to keep scrolling here, on that first line, we're going to say that demo-container is the name of our container.
>
> **[5:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=320)** That's also the group of the container.
>
> **[5:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=322)** And we're going to say that the server is demoalfredo.[azurecr.io](https://azurecr.io), which does a container registry.
>
> **[5:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=328)** Then we have to pass in the username and password.
>
> **[5:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=330)** So we're setting those secrets, those authentication things that Azure will need to know.
>
> **[5:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=337)** So this is effectively setting that on the Azure side of things.
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=340)** Then we're going to update so that we are using two CPUs and four gigs of RAM, which is, we're basically maxing out the container, what Azure allows us for container applications.
>
> **[5:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=355)** And then we're going to do one last update, and I hope you can see that here, which is going to be that we're saying what the image is and what the SHA specifically is.
>
> **[6:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=365)** And in this case I'm using demoalfredo.[azurecr.io/alfredodeza](https://azurecr.io/alfredodeza) which, if you remember, that's a registry, that's a repo actually, and the [[Hugging Face|huggingface]]-azure-acr is the repository that I used to build this.
>
> **[6:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=382)** And I actually named my container the same.
>
> **[6:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=385)** And finally the GitHub SHA, which is the commit where all of this action happened.
>
> **[6:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=392)** Okay, so those are all of the steps.
>
> **[6:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=397)** Because I want to try to make this go a little bit faster, I already went ahead and triggered these.
>
> **[6:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=403)** So I'm going to go to actions, and you can see I was able to trigger the auto deployments.
>
> **[6:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=408)** So basically you go here and you run the workflow manually, and then that's fine.
>
> **[6:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=413)** So let's take a look at this last trigger auto deployment.
>
> **[6:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=417)** And you can see here that the build took four minutes and the deployment took a minute and 45 seconds.
>
> **[7:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=422)** Let's take a quick look at the build, which we've already seen before.
>
> **[7:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=426)** It sets up the job, sets Docker Buildx, which I've already explained that that's the environment for being able to build with Docker.
>
> **[7:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=433)** And then it builds the container and pushes it to the container registry.
>
> **[7:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=438)** So once that's done, we go onto the deployment, which is something that you haven't seen yet, which we've already seen before on the yaml, but not actually as an actual deployment, as an actual GitHub action item, a GitHub workflow that has run.
>
> **[7:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=454)** We authenticated to Azure login and that worked perfectly.
>
> **[7:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=458)** And then we deploy to the container app, and inside the container app we have all kinds of different outputs.
>
> **[7:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=463)** You can see here that the identity is already protected because we're using secrets.
>
> **[7:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=467)** And once that's done, it completes the job.
>
> **[7:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=470)** So what does completing the job mean?
>
> **[7:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=473)** Well, a good thing that I want to show you here is I'm going to open up a new tab, I'm going to scroll all the way to the bottom so that you can see a couple of things that you need to make sure.
>
> **[8:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=483)** Make sure that you have enough RAM, well, some of these things are going to be covered next, but specifically I wanted to tell you how to tell the logs.
>
> **[8:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=493)** And it's this specific command that you want to run.
>
> **[8:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=497)** And I want to show you my terminal as I was deploying these.
>
> **[8:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=502)** Now this is my terminal, and you can see here that the AZ container apps, logs, show name, demo container resource group, demo container follow, that's the command that I need to do.
>
> **[8:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=512)** I've already authenticated on the command line and this is what we will be looking at in order to see what's going on.
>
> **[8:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=519)** Now I ran it and this is effectively going and showing me the output.
>
> **[8:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=525)** Now we are seeing all of these funky characters here because that's color coded, but whenever I'm running that container on the command line, it will go ahead and download, remember Hugging Face downloads models dynamically.
>
> **[8:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=537)** So this is downloading the model and we're seeing the [[Microsoft Products|products]] here.
>
> **[9:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=541)** 30%, 40%, 50%, 60%.
>
> **[9:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=543)** I'm going to scroll super fast here so I can go all the way to the bottom.
>
> **[9:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=546)** And then once that's done, then Uvicorn is telling us that it starts, the process is waiting for application startup, and then it starts.
>
> **[9:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=555)** And remember it's mapped to port 8000, and you need to make sure that that port is mapped on the ingress on the container app.
>
> **[9:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=563)** All right, so once it completes, well, I'm pretty sure this is already running.
>
> **[9:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=568)** I can see that there's not anymore logs.
>
> **[9:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=571)** And you can see here that there's some 200s.
>
> **[9:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=574)** That's me trying out the application.
>
> **[9:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=576)** So I'm going to change over to the browser and see how that looks.
>
> **[9:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=581)** All right, on the browser I want to show you the Azure container application and some of the things that you should be looking at when this is completed.
>
> **[9:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=592)** First, it might sound suspicious that this is still the simple-hello-work-container.
>
> **[9:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=597)** Well, I didn't update that.
>
> **[9:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=599)** What I did is I overwrote its values.
>
> **[10:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=601)** You can see that the image source, it's coming from the Azure Container Registry, but the registry has changed.
>
> **[10:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=607)** This is demoalfredo.[azurecr.io](https://azurecr.io), which is exactly what we created before, and now the image is no longer the default one, it's now huggingface-azure-acr and the image tag, well that's the latest SHA that we created over there.
>
> **[10:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=624)** And then the container resource allocation is now updated to use two CPU cores and a memory size of four gigabytes.
>
> **[10:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=632)** All right, so those are two things that I wanted to show you there.
>
> **[10:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=635)** But one thing that I wanted to show you additionally is that this is now deployed in demo-container.
>
> **[10:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=642)** And you can see here there's a SHA identifier, eastus.[azurecontainerapps.io](https://azurecontainerapps.io).
>
> **[10:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=647)** That's effectively the application running in the cloud.
>
> **[10:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=652)** So now let's try it out.
>
> **[10:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=654)** I'm going to go to /docs and that's going to load the Swagger, the fast API Swagger implementation of openAPI.
>
> **[11:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=664)** All right, so this loaded and we can play around a little bit with the openAPI.
>
> **[11:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=668)** We're going to effectively try it out.
>
> **[11:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=670)** We've already seen how to do this and we're going to say cloud deployments, I'm going to give it a prompt, cloud deployments are, and then going to execute this so that we can do some text generation.
>
> **[11:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=681)** It's going to execute, it's going to talk to that model.
>
> **[11:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=684)** All right, that took a second.
>
> **[11:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=685)** We get the cURL command and then we get the request URL and then generated text.
>
> **[11:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=691)** "These cloud deployments are expected to come from our key players; customers in their respective field, developers, data, and customers with a large user base."
>
> **[11:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=697)** All right, so that seems pretty okay.
>
> **[11:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=700)** And this is effectively how you automate specifically with GitHub actions deploying Hugging Face to Azure using the Azure Container Registry.
>
> **[11:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploy-hugging-face-to-azure?u=76281980&t=710)** You can use any registry you want, but you'll have to remember to update the required settings in order to properly authenticate and pull from those sources of truth, those sources of where your container will be living.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (26), [[GitHub]] (10), [[Hugging Face]] (4), [[JSON]] (2), [[CLI]] (2)
> **CLI Commands:** make (8), docker (6), find (1), az (1), curl (1)
> **Env Vars:** sha (4), cli (2), ram (2), pat (1), json (1)
> **Tools:** github (10), terminal (2), command line (2)
> **URLs:** [azurecr.io](https://azurecr.io) (4), [demoalfredoazurecr.io](https://demoalfredoazurecr.io) (1), [azurecontainerapps.io](https://azurecontainerapps.io) (1)
> **UI Navigation:** go to (5)
> **Code Identifiers:** openapi (2), curl (1)
> **File Paths:** main.yaml (1), credentials.json (1)

#### [Troubleshooting container deployment](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=0)** - So now we've dealt with a broken container.
>
> **[0:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=3)** It doesn't start.
>
> **[0:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=4)** But what happens if you have the incorrect port?
>
> **[0:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=7)** Well, let's make that change again.
>
> **[0:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=10)** We're going to clean this up.
>
> **[0:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=13)** Make that syntax error go away and change the port to something else.
>
> **[0:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=19)** So I'm going to remove these syntax error so it doesn't bother us anymore.
>
> **[0:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=24)** And here I'm going to put, say Port 8000.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=28)** And I'm going to commit those changes and say setting up port 8000.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=37)** And then commit those changes.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=38)** And what this is going to do is, as you know, we have automation now. It's going to build this container, push it to the [[GitHub]] container Registry, and then it's going to tell [[Microsoft Azure|Azure]] that it needs to pull this new container and try to run it up again.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=57)** So let's click on this one.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=60)** You'll see that it's building the container.
>
> **[1:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=62)** That's going to take a few seconds, hopefully not too long, and then it will go back and deploy.
>
> **[1:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=70)** So let's just wait a minute until these setting up port 8000 commit gets built and deployed and pushed to Azure.
>
> **[1:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=79)** Okay, so our action was successfully completed.
>
> **[1:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=86)** It gives us the URL.
>
> **[1:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=87)** So I'm going to click on that and what's going to happen?
>
> **[1:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=91)** I'm going to click this, you know, will just stay there loading.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=95)** Nothing seems to happen.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=97)** So what you need to do is, again, go back to the portal.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=103)** You'll get here.
>
> **[1:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=105)** And you need to go back to the deployment center, click on that, and then check the logs.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=115)** And let's make this a little bit bigger. There we go.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=120)** And you will see that it's waiting, waiting for response to warm up for a container.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=126)** It's been waiting there for 61 seconds.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=130)** So that's, that's not good. That's not good.
>
> **[2:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=134)** And you can see here something interesting.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=137)** Docker run port 80.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=140)** So this is, this is crucial right here.
>
> **[2:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=143)** And nothing is telling you that you have the wrong port.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=147)** So what it will happen is that this will stay there for a while.
>
> **[2:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=152)** It will try to load that and it'll eventually time out.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=156)** Once it times out, it will tell you.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=159)** But all this time you'll be waiting and seeing, trying to see if there's anything going on.
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=167)** So you definitely want to check that there's a smaller threshold there to check for the port.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=174)** So you might want to have a test or something that prevents changes like this happening.
>
> **[2:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=179)** Now for the problems with the syntax error, I was scrolling all the way back and I was able to see here in the logs that were captured that the syntax error, I'm going to go all the way up.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=195)** I'm going to scroll pretty fast.
>
> **[3:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=197)** And I've scrolled almost all the way to the top.
>
> **[3:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=199)** And you can see here that we have the syntax error that I introduced before.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=204)** So it does end up showing in the logs.
>
> **[3:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=206)** It's just somehow pretty hard to catch.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=209)** But if you go through and pour through all of the logs, you will be able to see it.
>
> **[3:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=214)** Now if I go all the way to the bottom, you'll see that it's still waiting for a response because it can't get any responses from port 80.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=223)** So you now have a couple of things that can go wrong.
>
> **[3:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=227)** Wrong port, and wrong or invalid code, like a syntax error that breaks your container when it tries to start and it gets to Azure and gets deployed.
>
> **[3:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=237)** So that's it.
>
> **[3:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/troubleshooting-container-deployment?u=76281980&t=238)** Those are two things that you need to watch out for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[GitHub]] (1)
> **Ports:** port 8000 (3), port 80 (2)
> **CLI Commands:** make (3), docker (1)
> **UI Navigation:** click on (3)
> **Cross-References:** go back to (2)
> **Env Vars:** url (1)
> **Tools:** github (1)
> **Warnings:** watch out (1)


### 11. Fine-Tuning and ONNX Exporting

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to fine-tuning theory](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=8)** - [Instructor] Let's take a look at some of the advantages of Transfer Learning as opposed to other types of machine learning.
>
> **[0:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=15)** A very classic type of machine learning is supervised machine learning.
>
> **[0:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=18)** Many people have heard about it and it really is about taking historical data, training a model on their historical data to then make a prediction, like for example, the points for a player could it predict the salary that that player would make in the future, right?
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=34)** That would be a classic supervised machine learning problem.
>
> **[0:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=36)** And in particular with NLP here, we can see here that you would have some news data.
>
> **[0:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=42)** You would go through and create a summarization model, and then that could be trained on lots of data and maybe the model would be a large language model, so there would be billions of parameters and it would take a very expensive process to create a prediction.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=58)** And then, if you have a different kind of NLP problem and you have a different domain, in this case, there would be a literature data set, you'd have to do the same thing again and create a different kind of news summarization model.
>
> **[1:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=71)** It also could be billions of parameters and be very expensive.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=75)** So, the problem here is that, for many people, many organizations, they don't have the data, really the raw data to begin with, and they also don't have the compute resources to do really this global scale type supervised machine learning.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=92)** Fortunately, this is where transfer learning comes in, and really this is one of the advantages of the [[Hugging Face]] platform is that you can take a news data set, for example, or some dataset that was trained in a particular domain, and you can take the body of that model and you can actually replace the HEAD, in this case, the News Summarization Model HEAD.
>
> **[1:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=116)** You can fine-tune it with a smaller amount of data and then serve out a prediction.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=122)** Similarly, you could also fine-tune something on a totally different domain.
>
> **[2:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=127)** So, let's say this was trained on a news dataset.
>
> **[2:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=130)** You could take a literature dataset, and again, use the body, which could have billions of parameters inside of it, and be trained by some of the top machine learning engineers in the world, and machine learning researchers, and then you would just take a little bit of new data, create an evaluation metric, and then put the HEAD of that particular fine-tuned job with some new data, and then you would be able to serve out a prediction.
>
> **[2:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=158)** So, the idea here is that you can create high-quality models that are trained extremely efficiently and on another domain, right?
>
> **[2:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-fine-tuning-theory?u=76281980&t=167)** So, this is one of the key advantages of transfer learning and how it applies to the Hugging Face platform.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (2)
> **Env Vars:** head (3), nlp (2)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **API Endpoints:** head  (1)
> **Speakers:** - [instructor] (1)

#### [Performing fine-tuning](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=8)** - [Instructor] Let's go ahead and take a look at the official [[Hugging Face]] documentation here and take a look at this course.
>
> **[0:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=13)** You can see there's lots of different useful things in this course, but I want to take a look at the [[Fine Tuning]] section here, fine tuning a pre-trained model, and take a look at how I could actually implement that myself.
>
> **[0:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=26)** So I'm going to go ahead and select this button here.
>
> **[0:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=28)** And one of the nice things about this course is it opens up a CoLab notebook and it gives us a nice overview of the sections as well.
>
> **[0:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=38)** So we can see here it's not a lot of code here, it's just a section here that installs some software.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=45)** It then goes through and has a tokenize function.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=48)** It then has a trainer, which goes right here.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=51)** And then we go ahead and we do a train and it will actually do the fine tune operation and then show us exactly what's happening.
>
> **[0:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=59)** Now, if I wanted to run this myself and get better and better accuracy, what I could do is use the CoLab environment here.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=68)** Now what's nice about this is if I connect to the runtime, by default it's going to connect to a CPU based runtime here, and we can actually verify that if I say change runtime type.
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=81)** Notice I don't have any [[Hardware]] acceleration.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=84)** What's nice about this is it allows me to benchmark what would happen if I needed to fine tune a model by training it with a CPU.
>
> **[1:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=93)** And so we can actually go through here and say runtime run all, and this will actually allow me to go through and kick off an installation first.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=103)** And we can see that it does take a little bit of time when you're using CoLab to install software because of the fact that it is not preloaded on this machine, unlike your own workspace or something like [[GitHub]] code spaces.
>
> **[1:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=117)** Next, if we scroll down here, it's going through and it's running the next section, which is loading this dataset, which could take a little bit of time here.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=126)** And then once it's gone through and loaded the dataset, the next thing that it's going to do is it's going to go through here and set up the training job.
>
> **[2:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=138)** So give this a second here.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=140)** We can go through here, we can get the pre-trained model right here, that's the next step that's happening.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=147)** And once this is complete, then we can actually go through the fine tuning step here.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=153)** So this is a good benchmark here to show what would happen if we were going to fine tune a model using more of like commodity type hardware, a CPU or a CoLab notebook that only has CPU available.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=169)** What would we get?
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=171)** And here we go.
>
> **[2:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=172)** We can actually go into transformers here and take a look at this.
>
> **[2:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=179)** And we can see here that it is in fact doing three epochs and we can actually see that it will take quite some time.
>
> **[3:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=189)** You can see here, this is the training job.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=191)** It's going to take a while to run this.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=195)** And in fact, of the 1377 steps, it's only done four so far, right?
>
> **[3:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=202)** So we can probably extrapolate that could take us, who knows, maybe 20, 30 minutes to get this running.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=208)** So I'm going to leave this running, and if I go back to that same code here and I take a look at running it inside of a GitHub Codespace with GPU enabled, what we can do is basically implement the same code.
>
> **[3:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=223)** So I'm going to say from datasets import load_datasets, grab the transformer pieces of code that I need, like the training sets, and then I'm going to go through here and I'm going to download the data set that I'm going to use, which in this case would be the glue data set, create a tokenize function.
>
> **[4:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=241)** And then in here I would just set up all of the different things I would need for my model.
>
> **[4:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=246)** So in this case, I could create my own compute metrics section, and then I would just tell the trainer itself what is my data that I'm going to use.
>
> **[4:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=256)** And again, it's the data that we downloaded earlier.
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=259)** And then I can go through here and say, here's my evaluation metric, and then let's go ahead and run it.
>
> **[4:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=265)** So what's great is I can actually do nvidia-smi -l 1 to kick off the the GPU monitoring.
>
> **[4:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=278)** And then next I can actually go through here and pop this on the screen above and actually run the training job.
>
> **[4:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=286)** So let's go ahead and do this, we'll go ahead and say [[Python (Programming Language)|python]] hugging-face/ft we'll say fine tuning course example.
>
> **[4:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=297)** So I'm going to take the example from the official documentation.
>
> **[5:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=300)** I'm going to run it inside of this particular environment.
>
> **[5:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=304)** So there will be some things that will take a little bit of time.
>
> **[5:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=308)** For example, anytime you need to download data, it'll take a little bit of time, but because we have these GPU resources available, it should significantly change what's happening.
>
> **[5:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=319)** And we can actually do a comparison against that fine tuning job that's running in CoLab.
>
> **[5:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=325)** So here we go, we found a cached data set.
>
> **[5:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=327)** So this is again, a huge advantage of having your own environment.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=332)** And we're going to now train this fine tuned model and get better accuracy.
>
> **[5:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=339)** So let's go ahead and run this.
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=340)** Here we go.
>
> **[5:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=341)** It says number of examples 408, epochs, you can see here it's just really running through this very, very quickly.
>
> **[5:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=348)** And look, we can see that the GPU is actually being hit.
>
> **[5:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=352)** And if we go back to CoLab here, look at this, it's still stuck on basically step 30 here.
>
> **[5:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=358)** And here we see it's just grinding through all of the different steps that are necessary.
>
> **[6:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=366)** And also we can see here it's saturating this particular GPU, which is a Tesla V100, a very nice, powerful machine here.
>
> **[6:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=376)** And as we're training the fine tuning job, we can actually get whatever metric we're caring about, maybe it's the F1 score is what we're caring about, is that we want this F1 score to get better and better so that we're able to have the metric that we're optimizing for improved.
>
> **[6:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=395)** And as we improve this metric, this will help us build out really a fine tuned model that's using custom data, right?
>
> **[6:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=405)** So this is a good example of some of the advantages of having your own GPU available and fine tuning.
>
> **[6:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=412)** You can get your own improved accuracy.
>
> **[6:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=415)** Look, you can see here this was maybe the baseline and now here's our new improved accuracy.
>
> **[7:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=421)** And if we needed to as well, what we could do is we could actually push this change every time it makes a new improvement.
>
> **[7:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=430)** We could actually tweak the code a little bit right here under training arguments and we could say, look, I want to push this to Hugging Face into a new model that's hosted.
>
> **[7:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=443)** And you can see this is kind of the same concept that other people have done on Hugging Face.
>
> **[7:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=448)** So if we go back to Hugging Face real quick and we look at models, and let's take a look at summarization, you can take a look.
>
> **[7:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=455)** This is similar to what potentially people have been doing here, right?
>
> **[7:38](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=458)** In this particular model here you can see that in fact it's based on the original [[Facebook]] model, but it's been fine tuned and it's been pushed into this particular directory.
>
> **[7:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=472)** So you can do the same thing yourself by doing fine tuning.
>
> **[7:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=476)** And again, if you're using these GPU resources here, look, it's already done.
>
> **[8:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=480)** It's complete.
>
> **[8:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/performing-fine-tuning?u=76281980&t=482)** It's a great way to experiment with fine tuning your own models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (9), [[Hugging Face]] (4), [[Hardware]] (2), [[GitHub]] (2), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** gpu (7), cpu (4), v100 (1)
> **Tools:** colab (6), github (2)
> **Cross-References:** go back to (3)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (2), install (1)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** python (1)

#### [Introduction to ONNX and Hugging Face](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=0)** - [Instructor] Let's go through some of the concepts that you'll need in order to work with [[Hugging Face]] and Onnx.
>
> **[0:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=5)** And Onnx specifically, I want to show you the main landing page here, the get started page, because it has a couple of things that are useful to understand before we dive in into the details.
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=17)** So first off is that you have the ability to work regardless of the framework that you're choosing to create the model or to work with the model, you can export to a normalized, or that is like an Onnx format.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=34)** Now the Onnx format will allow you to deploy to different types of architectures and regardless of where that machine learning framework came from.
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=44)** And then finally, you'll have [[Cloud Services]] that work natively with the Onnx former format so that you can interact with it and not specifically be tied to an actual framework.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=57)** Now, exporting to the Onnx format is specifically what we're going to concentrate on today, and we'll take a quick look at what the Onnx Model Zoo is and we'll work a little bit with, not a specifically a, a reference tutorial, but we'll be using Hugging Face, which is what we've been covering.
>
> **[1:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=75)** Now, inferencing using Onnx and exporting to another framework are definitely things that I highly suggest you do and go through.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=82)** Now let's take a look at the repository Hugging Face dash Onnx, which I put together.
>
> **[1:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=88)** Let's take a very quick look at the environment, the YML file and see what are the dependencies you'll be working with.
>
> **[1:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=95)** Alright, so primarily the dependencies are [[Python (Programming Language)|Python]] three eight.
>
> **[1:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=99)** I'm going to be installing [[PyTorch]] from the PyTorch channel.
>
> **[1:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=103)** This is a Conda environment file.
>
> **[1:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=106)** That means that we'll be using Conda behind the scenes to work with these.
>
> **[1:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=110)** And we're going to of course install the Hugging Face Transformers library that has this special notation that the square brackets that say, Hey, I'm going to be working with Onnx.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=122)** That will pull in some extra dependencies they'll be needing.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=125)** Finally, the Onnx runtime and a couple of extra things for working with Jupiter notebooks.
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=131)** So pretty straightforward, not many dependencies.
>
> **[2:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=135)** And this will get you up and running in no time.
>
> **[2:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=140)** So next, the other things that we need to do is, well, we're going to explore a little bit of the notebooks, in this part we're going to do the introductory portion of it.
>
> **[2:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=150)** So let's go quickly and run this notebook with, with like include a notebook with Conda and install dependency.
>
> **[2:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=162)** So that's going to be the introduction notebook right here.
>
> **[2:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=165)** So this is the Read me, this is the same repository and run new Visual studio code here.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=169)** And going to take a look at what is this about.
>
> **[2:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=173)** Alright, so the first thing that you need to make sure is that ensure that you are using the, the one, the right interpreter.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=182)** Here I'm using the kernel, it has the Conda base one that I just created and I made sure that Conda installed all the dependencies.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=191)** So here have like a brief introduction.
>
> **[3:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=194)** This is again, kind of like what you'll need to install with Conda like this already doesn't match exactly what you need to install.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=204)** Please refer to the environment, the YML file that has everything you need to is going to be updated with exactly the, the things that you need to do.
>
> **[3:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=212)** Alright, so Hugging Face has the ability to work with configurations that are already ready to use without you having to figure out anything.
>
> **[3:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=224)** For some of the most, like the top, like the top models, the most popular models like BART, BERT, Open AI GPT-2, roBERTa, and T-5.
>
> **[3:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=236)** I mean these are, you know, highly popular, highly desirable models that you can work with.
>
> **[4:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=242)** So once you've installed all the dependencies, you can make sure that everything works by executing the, the help menu.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=249)** So you can use the transformers that Onnx dash dash help that will give you, essentially what you're using here is the Onnx portion of the libraries with the Transformers library so that you can start interacting with it.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=266)** So what you're going to be doing this, in this way of running Python dash m using the Onnx module.
>
> **[4:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=272)** So Transformers dot Onnx as a command line tool.
>
> **[4:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=276)** So let's poke around a little bit of the help menu output here.
>
> **[4:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=282)** This is the way that you verify that this has been installed and everything is ready to go.
>
> **[4:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=287)** So here you have, you know, the, the module and then you pass in.
>
> **[4:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=292)** What, what features, and we're going to be looking at the features that are available.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=296)** Opsets is the type of opset for Onnx And we won't be diving into that.
>
> **[5:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=305)** And you can see here, you can export from, from [[TensorFlow]] or PyTorch.
>
> **[5:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=310)** We're going to be using PyTorch by default and you have a little bit of extra settings here that we're not going to be touching either.
>
> **[5:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=317)** And then one thing that you are required to do is using the positional argument, the output, and we'll see how that works.
>
> **[5:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=325)** And you can essentially name the Onnx model, the resulting Onnx model with anything, any other name that you may want.
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=332)** Alright, so scrolling down here, primarily the thing that we want to know is what type of configuration we are going to be using.
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=340)** So here you can see that I'm importing from the models.
>
> **[5:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=345)** I'm going to Transformers dot models dot roBERTa, I'm going to import roBERTa config and roBERTa Onnx config.
>
> **[5:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=351)** These come from the Transformers library itself.
>
> **[5:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=355)** So by running this code, I'm going to be able to see that I do have a couple of different types of features.
>
> **[6:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=364)** These features, these configurations are available to, you know, I can select one or the other and I can, I can poke around what, what exactly is available for me from, in this case, the roBERTa model.
>
> **[6:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=380)** Alright, so I do have a little bit of suggested reading here, the Hugging Face transformer serialization, that's really good.
>
> **[6:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=387)** But essentially what I wanted to cover today are a couple of things.
>
> **[6:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=391)** Basically how you get all of these dependencies installed.
>
> **[6:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=393)** We used Onnx, rather Conda, we made sure that the Conda, the Conda kernel was selected.
>
> **[6:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=401)** We were able to verify works, we poked around some of the, the different, different features and and flags that we're going to be using and how is that going to work.
>
> **[6:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=410)** And we're going to see that in a different video.
>
> **[6:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=412)** But specifically the configuration was something really, really crucial.
>
> **[6:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=416)** One last thing I want to show you is the model Sue.
>
> **[7:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=420)** If you've never heard about a model Sue, it's the [github.com/Onnx/models](https://github.com/Onnx/models).
>
> **[7:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=426)** It's called the Onnx Sue because that is where people tend to store, or the Onnx organization rather tends to store some of the Onnx models.
>
> **[7:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=436)** So let's, let's quickly go through here.
>
> **[7:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=439)** So the Read me has a lot of information but, and this is specifically I want to talk about machine comprehension.
>
> **[7:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=446)** So we're going to look at that and we have GPT two, bert squad, but I wanted to show you roBERTa, which I really like, want to hide these and use cases.
>
> **[7:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=456)** So we have dependencies. The model, you have a description and you can even go ahead and download.
>
> **[7:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=461)** So you have roBERTa Base roBERTa sequence classification.
>
> **[7:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=464)** So you can download these.
>
> **[7:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=465)** These are stored on [[GitHub]] using LFS.
>
> **[7:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=468)** And it is, you're able to go through a little bit of the details of the model.
>
> **[7:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=475)** So you can see here what OnxX version is supported and the opposite version.
>
> **[7:59](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=479)** So those are two crucial details you will need to understand for Onnx if you are going to be working with that.
>
> **[8:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=486)** So you have even a little bit of information on the pre-processing and the output and how, what should be expected if you are going to be doing a little bit of working, working with, working with Onnx.
>
> **[8:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=502)** So you can even see here that it's using high interface transformers already because this, the sequence classification and tokenize are coming from there as well.
>
> **[8:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=510)** So whenever you're hearing, hey, let's take a look at the Onnx model sue.
>
> **[8:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=516)** That means you are looking at Onnx slash models, the GitHub organization and the models github repository.
>
> **[8:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-onnx-and-hugging-face?u=76281980&t=524)** So that's it. Those are the key concepts that you'll need to know in order to work with Onnx and Hugging Face.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (7), [[PyTorch]] (4), [[GitHub]] (4), [[Python (Programming Language)|Python]] (2), [[Cloud Services]] (1)
> **Code Identifiers:** roberta (8)
> **Env Vars:** yml (2), gpt (2), bart (1), bert (1), lfs (1)
> **Prerequisites:** install (4), you'll need (3)
> **Tools:** github (4), visual studio (1), command line (1)
> **CLI Commands:** python (2), make (2)
> **Definitions:** is a  (1), means that (1)
> **URLs:** [github.com](https://github.com) (1)

#### [Exporting Hugging Face models to ONNX](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=0)** - [Instructor] Now let's do a little bit of a hands-on experimentation here with [[Hugging Face]] in ONNX.
>
> **[0:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=6)** And going to look at exporting the exporting Jupyter notebook that I have here already running.
>
> **[0:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=12)** Again, make sure that you have the right kernel installed.
>
> **[0:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=15)** In this case, I'm using the one that is from Conda that has all of the dependencies installed.
>
> **[0:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=21)** All right, so first off, let's find the features.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=25)** In this case, you're going to import the features module from the ONNX library here on the transformers at ONNX module, rather.
>
> **[0:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=36)** And you can import the features manager.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=37)** And then for these specifically, for these example specifically, when I be doing with DistilBERT, and want to look at what those, what those features are.
>
> **[0:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=48)** And I'll tell you in a second why that is important.
>
> **[0:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=51)** So let's, it's connecting to the kernel.
>
> **[0:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=54)** This is going to take a second, and we'll wait it out until that completes.
>
> **[0:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=57)** So right, so these completed, and what are the features?
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=60)** Well, this model has different things, different tasks that it can do, right?
>
> **[1:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=65)** So it can have sequence classification, for example, multiple choice, token classification, or question answering, which is something that I really enjoy working with with models that do question answering.
>
> **[1:18](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=78)** All right, so why is this important?
>
> **[1:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=79)** Why would you need to understand that?
>
> **[1:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=81)** Well, if you know exactly what you need and have a model that is doing something very specific, then let's say for example, question answering, then you can say, well, I want to port over the DistilBERT model to ONNX just to do question answering.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=97)** And the way you accomplish that is by again, working with the transformers, that ONNX module as a command line tool.
>
> **[1:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=104)** And you can pass in [[Python (Programming Language)|Python]] -m transformers.onnx.
>
> **[1:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=107)** Actually, let's just walk through some of these things you will need to know.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=111)** For the first, you're going to be using transformers.onnx.
>
> **[1:53](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=113)** Again, you're using the module as a command line tool because of the -m flag right here.
>
> **[2:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=120)** Next, we are going to pass in the model.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=123)** Like exactly what's the model that you want to be working with.
>
> **[2:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=126)** In this case is going to be the DistilBERT-base-uncased-finetuned-sst-2-English.
>
> **[2:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=132)** Well, that's a mouthful, but that is exactly the model that we're going to working with.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=136)** And then we're going to say the feature that we want is the question answering.
>
> **[2:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=141)** And lastly, and it's, this is kind of hard to see here, we have a dot.
>
> **[2:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=145)** Now this dot is a pretty important because it means that we want to produce the model right here in this same directory.
>
> **[2:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=153)** If we wanted something else, we could do something like a path, and then the name to the model that we want to.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=159)** I just want to generate that right there.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=161)** So that is going to allow us to generate that.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=164)** So I'm going to run this, it's going to take a few seconds.
>
> **[2:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=166)** And it's going to start producing, producing output.
>
> **[2:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=169)** So now, right now it's downloading the DistilBERT based on case finetuned model.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=174)** So let's scroll through the output and see what's going on here.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=178)** What you need to look for at the end is specifically the model validation.
>
> **[3:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=184)** So you can see here, "All good, model saved at: model.onnx".
>
> **[3:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=187)** If I would've passed in a path, you would've been something slightly different.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=191)** Or if I want a different name.
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=192)** And you can see here that the model output names, these are the ones that you'll be needing to work with.
>
> **[3:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=199)** So if I go back to the Explorer, you can see now the Explorer is saying, hey, you have something going on here.
>
> **[3:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=205)** And that's our model that has been produced right here.
>
> **[3:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=209)** The model, that ONNX, which is exactly this one coming from right there.
>
> **[3:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=214)** So there you go.
>
> **[3:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=215)** That is how you would like, let me scroll here all the way to the top, you would find the features.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=222)** In this case, we're producing one for question answering.
>
> **[3:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/exporting-hugging-face-models-to-onnx?u=76281980&t=224)** And this is how you would work with Hugging Face in coordination with ONNX to port models from Hugging Face over to ONNX and produce a working model for ONNX.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (3), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** onnx (9)
> **CLI Commands:** find (2), make (1), python (1)
> **Tools:** command line (2), jupyter (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 12. Hugging Face Spaces

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Hugging Face Spaces](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=8)** - [Instructor] Let's take a look at [[Hugging Face]] spaces.
>
> **[0:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=11)** The idea here is that you can discover amazing machine learning apps made by the community, or what you can do as well is you can create your own new space.
>
> **[0:20](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=20)** It's really a good idea to take a look here at some of the new stuff that's being developed, which is really cool.
>
> **[0:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=26)** And we can actually look at most likes, for example.
>
> **[0:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=29)** We have [[DALL-E]] mini, [[Stable Diffusion]].
>
> **[0:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=31)** These are all kind of fun things to play around with.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=33)** I think this is a good one to start with, Stable Diffusion.
>
> **[0:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=36)** Enter your prompt.
>
> **[0:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=37)** We can just say, you know, Mickey Mouse, Mickey Mouse on the moon, right?
>
> **[0:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=44)** Something kind of fun, and it will go through here and it will run a machine learning prediction based on essentially the pre-trained model that's hosted on Hugging Face, and here we go.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=58)** We got some great images here.
>
> **[1:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=60)** And that's kind of the fun part about this, is we get to play around with this particular model.
>
> **[1:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=64)** And if we go to the files right here and we go to apps, we can say all of the different things that are happening in the set of app, this particular application.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=74)** And we can actually go through here and play around with this particular application and really steal ideas that are good ideas from other people.
>
> **[1:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=84)** So the other thing we can do besides playing around with models is that we also can go over to the model section itself and even find particular categories.
>
> **[1:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=97)** So again, if we go through here and we look at, for example, text, and we look at something like summarization, and we go to one of these summarization models like [[Google]] Pegasus.
>
> **[1:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=114)** What's nice about this is if I scroll down here, we can look inside and see who has actually used this in one of their applications.
>
> **[2:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=123)** So this is a great way to actually play around with a particular model first when you're trying to explore it.
>
> **[2:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=129)** So, look, this is pretty easy, right?
>
> **[2:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=131)** If I wanted to go through and, for example, take some [[Python (Programming Language)|Python]] Wikipedia page code and paste it inside of here, we could actually try it out and it would go through here and do our text summarization.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=144)** And again, what's nice about this after it's done, is we could go through to the files and we could take a look at the app and we could actually copy exactly the code inside of here and play around with it.
>
> **[2:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=156)** So that's really the main takeaway here when you're dealing with Spaces.
>
> **[2:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=161)** Now, probably the most fun thing to do though would be to go over to the Spaces environment and create your own.
>
> **[2:48](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=168)** So let's go ahead and do that, we'll go ahead and say Create new Space.
>
> **[2:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=171)** And I'm going to go ahead and I'm going to call this hello5000.
>
> **[2:57](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=177)** And I'm going to select one of these technologies, Streamlit, which is a machine learning visualization technology, Gradio, which is the one that's most closely aligned with Hugging Face or Static.
>
> **[3:11](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=191)** Let's go ahead and pick Gradio and we'll go ahead and say Create Space.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=195)** Now, once this has been created, I could clone this and really work with it in another environment, and I'll show how to do that in a little bit.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=204)** Or what we could do is we could actually just play with it from right here.
>
> **[3:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=208)** And this is actually not a bad idea.
>
> **[3:30](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=210)** So if we go through here and I go to the file section here and I go ahead and I say Add, and say Create a new file, I can actually play around with it right here.
>
> **[3:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=221)** So we just call this app dot py and I can actually paste this in.
>
> **[3:46](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=226)** And what will happen is once I paste it in, immediately, it'll start building and I can actually look at the build log in real time and take a look at it.
>
> **[3:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=235)** Here we go, we can see by default it installs some, you know, packages that are, that are very common and it pushes this image locally here.
>
> **[4:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=244)** And as it's building, we can actually take a look at the process.
>
> **[4:07](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=247)** If there's errors, it would also show up here.
>
> **[4:10](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=250)** And then finally when it's done, it'll actually give us a Hello World application.
>
> **[4:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=255)** Alright, so here we have another version of the same thing, right?
>
> **[4:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=259)** This is just a kind of a Hello World application.
>
> **[4:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=262)** We can take a look at the code and if I want to play with it, notice it's running.
>
> **[4:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=266)** If we go to this application and we type in something, you can see in action, it works, right?
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=271)** So that's the idea is you can prototype things very, very quickly.
>
> **[4:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=274)** Most of the time, you probably want to prototype a data set or a model, but you can also play around with just Hello World applications like that.
>
> **[4:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/introduction-to-hugging-face-spaces?u=76281980&t=281)** And that's really the usefulness of the Hugging Face space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Stable Diffusion]] (2), [[DALL-E]] (1), [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **UI Navigation:** go to (5), scroll down (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** dall (1)
> **Speakers:** - [instructor] (1)

#### [Hugging Face Spaces walkthrough](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=8)** - [Instructor] All right, so you're convinced you love [[Hugging Face]] Spaces because again, according to the documentation, it offers a simple way to host ML demo apps directly on your profile, but what if you want to learn a little bit more about it?
>
> **[0:23](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=23)** Well, I would say, first thing is look at the docs right here.
>
> **[0:26](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=26)** We can see some of the demos.
>
> **[0:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=27)** This is a great place to kind of look through things, look at the dependencies, all those kinds of things.
>
> **[0:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=33)** We can also look at the fact that you can do GPU upgrades.
>
> **[0:36](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=36)** So for example, if this is a side project, you could potentially ask for the ability to do GPU, right?
>
> **[0:43](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=43)** Which would be pretty neat.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=45)** And also you could install other packages like, for example, [[PyTorch]], JAX, et cetera.
>
> **[0:52](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=52)** The other thing you can do, if we look at the Gradio Spaces here, is it gives you a bunch of documentation about how to actually build your own applications.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=61)** And really the idea here is that you can actually load pre-existing applications and build them very quickly.
>
> **[1:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=68)** So one of the classic ones is going to be the Hot Dog Classifier here.
>
> **[1:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=73)** So if I go to the documentation here, what I could do is I could just copy this code, but where do I run it?
>
> **[1:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=79)** I could run it inside of the Spaces interface, which is not bad, but I also could just run it inside of [[GitHub]] Code Spaces, which itself is a great interface for building demos.
>
> **[1:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=92)** So inside of here, I have a Hugging Face directory and I'm going to CD into there and I'm going to call this hotdog.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=101)** And what's nice about this is that I can actually get this very fast feedback loop by running things inside of this directory here.
>
> **[1:51](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=111)** And so in fact, I'll go ahead and piece that code in like this.
>
> **[1:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=116)** And notice there's not a lot of code.
>
> **[1:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=118)** I say "import gradio as gr", I also have to in invoke the transformers, right?
>
> **[2:04](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=124)** In this case, this is somebody's hotdog or not pipeline right here, and then I would actually upload a particular image that has a hotdog or doesn't have a hotdog.
>
> **[2:16](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=136)** So let's go ahead and run this.
>
> **[2:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=137)** We'll say "[[Python (Programming Language)|python]] hotdog", and let's go ahead and get this thing launched.
>
> **[2:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=144)** So this will take just a second and it will again use our nice GPU interface here to play around with the official documentation and what's great about this is that I can also play around iteratively with this particular application.
>
> **[2:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=160)** Aha, there we go. We can actually drop an image right here.
>
> **[2:44](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=164)** And so what I would need to do is find a picture of a hotdog somewhere on the internet, and I found one and I'm going to take it, I'm going to save the image locally on my desktop.
>
> **[2:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=178)** I'm going to go ahead and select this and then grab that hotdog image.
>
> **[3:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=182)** Here we go.
>
> **[3:03](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=183)** The other thing we can do is we can just go to this user's profile, look at this application and look, I dropped the hotdog on here and it says, "Yep, hot dog."
>
> **[3:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=192)** It was able to figure it out.
>
> **[3:15](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=195)** And so I can either play with it inside of somebody else's interface or again, get it running locally here and iterate on it.
>
> **[3:24](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=204)** Now in this particular example, that was a hotdog, but what if I wanted to go through here and look at maybe another kind of a demo?
>
> **[3:33](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=213)** And so I'm going to go into these Gradio demos here and I have one that is a text generation demo.
>
> **[3:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=220)** And if we take a look at this, it's very simple.
>
> **[3:42](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=222)** I do "from transformers import pipeline", I say "import gradio as gr", I define the model, which is going to be a text generation model, I then define a predict function, and then I make the interface, which is very straightforward here, and gives us the ability to use it.
>
> **[4:00](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=240)** So this is really nice because the feedback loop, again, is very quick because it's local and it's all installed inside of this environment.
>
> **[4:09](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=249)** Let's go ahead and take a look at how this works.
>
> **[4:12](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=252)** Here we go.
>
> **[4:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=253)** I'm going to look at the documentation, too.
>
> **[4:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=257)** It says that it's using GPT2, here we go.
>
> **[4:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=261)** And we can say "the fastest man in the world".
>
> **[4:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=269)** And let's go ahead and see what happens.
>
> **[4:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=271)** It says, "The fastest man in the world is Mike Tice, ESPN".
>
> **[4:35](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=275)** "CJ's been able to make at least 50 tackles this year."
>
> **[4:37](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=277)** "He's been a dominant tackler at defensive tackle", right?
>
> **[4:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=280)** So we have some nice output here for maybe like a chat bot or some other kind of interface here and I've been able to really, really quickly prototype it because I'm using the ability to make an interface and also wire in some code.
>
> **[4:56](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=296)** Now, you don't need to only build out things that work with models, although that's one of the more useful things, you also can take a look at data sets.
>
> **[5:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=306)** And in this case, this is a Gradio example that has a Supersoaker Defective Product Prediction and I can put some description data in here and look, I load the interface, I load the Hugging Face Scikit Learn Tabular-Playground, and I can pass in the title and I can pass in the description and I can play around with things as well.
>
> **[5:28](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=328)** So let's go ahead and try that.
>
> **[5:29](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=329)** We'll say "python dataset_gradio".
>
> **[5:32](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=332)** Again, we go through here and we launch it.
>
> **[5:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=334)** And this allows me to also play around with things like datasets, right?
>
> **[5:40](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=340)** And make new rows and do all kinds of really fun things inside of a interface here and submit things.
>
> **[5:47](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/hugging-face-spaces-walkthrough?u=76281980&t=347)** And so what's really useful about this kind of a interface here is that I have the ability to rapidly prototype both dataset attributes as well as model attributes and this is really the advantage of using Gradio and Hugging Face Spaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Python (Programming Language)|Python]] (2), [[PyTorch]] (1), [[GitHub]] (1)
> **CLI Commands:** make (4), python (2), cd (1), find (1)
> **Env Vars:** gpu (3), jax (1), gpt2 (1), espn (1)
> **Definitions:** is a  (5)
> **Documentation:** the documentation (3), the docs (1)
> **Analogies:** for example (2), picture (1)
> **UI Navigation:** go to (2)
> **Code Identifiers:** dataset_gradio (1)

#### [Deploying to Hugging Face Spaces](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:08](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=8)** - [Instructor] Let's take a look at the lifecycle of how to do a [[Continuous Delivery (CD)|continuous delivery]] of a [[Hugging Face]] Spaces application using [[GitHub]].
>
> **[0:17](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=17)** You can see here that I could grab a token from Hugging Face, right?
>
> **[0:21](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=21)** That's one of the key things to be aware of.
>
> **[0:25](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=25)** Once I take that token, I would put this into the GitHub Codespace environment, as well as the GitHub Actions environment.
>
> **[0:34](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=34)** From here, this allows me to do anything I need to do, like, for example, push a model back into Hugging Face, as well as interact with the Spaces Application.
>
> **[0:45](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=45)** In this case, I could test first the Gradio Application here.
>
> **[0:50](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=50)** Let's say, for example, Text Summarization, and then later, automatically push that change directly to Spaces.
>
> **[0:58](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=58)** So, this is continuous delivery of machine learning applications.
>
> **[1:01](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=61)** Now, let's go ahead and take a look at how that would work in practice.
>
> **[1:06](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=66)** What I would do is I would go to GitHub to the workflow here, and notice, I would say Sync to Hugging Face.
>
> **[1:14](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=74)** Under the main branch, I would run this on [[Ubuntu]]-latest, and I would have my secret that would be set up inside of Hugging Face.
>
> **[1:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=82)** I would go ahead and add this whatever location the space lives in.
>
> **[1:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=87)** In this case, this particular one would be noahgiftdemo, and then I would push this automatically every time I make a change to this repository, so I could add in steps as well for testing other things.
>
> **[1:41](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=101)** And now if we look at the application, it's a very straightforward, right, a very simple application here that does a summarization pipeline.
>
> **[1:49](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=109)** So, how would we actually make sure that this continuous delivery would actually work?
>
> **[1:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=114)** Well, pretty easy.
>
> **[1:55](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=115)** What we would do is use our Codespace environment, and you can see here I've got a couple of 'em running.
>
> **[2:02](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=122)** So, what I'm going to do is I'm going to toggle over to one of 'em, and here we go.
>
> **[2:05](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=125)** We've got this application right here, and notice that when I run this locally, it'll actually launch an interface.
>
> **[2:13](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=133)** And once I've launched this interface here, I can actually browse it directly inside of this environment.
>
> **[2:19](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=139)** And look, I pasted in some [[Python (Programming Language)|Python]] code.
>
> **[2:22](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=142)** I pasted in some information about the Python language, and I had it summarize it.
>
> **[2:27](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=147)** And there we go, we actually were able to summarize that change.
>
> **[2:31](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=151)** So, if I clear it and I want to go through here and grab that same data again, we can see the same application workflow again.
>
> **[2:39](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=159)** So, it's a great way to prototype out what it is you're building, and use, in fact, both the local development environment as well as the continuous delivery process of the GitHub ecosystem here.
>
> **[2:54](https://www.linkedin.com/learning/mlops-tools-mlflow-and-hugging-face/deploying-hugging-face-spaces?u=76281980&t=174)** In fact, this synchronization, if it was failing, in this case, it was, we would have to double check if there was some kind of a lint problem or there was a test problem, and this is really the beauty of doing continuous delivery using both GitHub as well as Hugging Face Spaces.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (6), [[GitHub]] (6), [[Continuous Delivery (CD)|Continuous delivery]] (5), [[Python (Programming Language)|Python]] (2), [[Ubuntu]] (1)
> **Tools:** github (6)
> **CLI Commands:** make (2), python (2)
> **UI Navigation:** go to (1), toggle (1)
> **Analogies:** for example (2)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Alfredo Deza]]
- [[Pragmatic AI Labs]]

## Resources

- Exercise files available

## Skills Covered

- MLflow
- Machine Learning
- MLOps
- Artificial Intelligence (AI)
- Hugging Face Products

## Path Context

### In [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]
← [[Generative AI and Predictive AI in the Cloud- Foundational Concepts and Scenarios]] | **4 of 10** | [[Data Preparation, Feature Engineering, and Augmentation for AI Models]] →

## Appears In

- [[MLOps Essentials for Developers and AI Engineers- Tools, Pipelines, Security]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[MLOps Essentials- Model Deployment and Monitoring]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[MLOps Essentials- Model Development and Integration]] — Artificial Intelligence (AI), Machine Learning, MLOps
- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)