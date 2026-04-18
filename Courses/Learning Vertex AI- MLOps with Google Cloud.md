---
type: course
slug: learning-vertex-ai-mlops-with-google-cloud
url: "https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud"
duration_minutes: 98
duration: 1h 38m
level: Intermediate
updated: 5/5/2023
learners: 24536
skills:
  - MLOps
  - Artificial Intelligence (AI)
  - Vertex
exercise_files: true
github: "https://github.com/LinkedInLearning/learning-vertex-ai-mlops-with-google-cloud-4366293"
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/mlops
  - skill/artificial-intelligence-ai
  - skill/vertex
status: not-started
created: 2026-04-17
---

# Learning Vertex AI: MLOps with Google Cloud

> Projects

Use a real-world data set to build a project in Vertex AI. 
Train, register, and deploy a machine learning (ML) model using Vertex AI.
Keep track of data history and version, ensure resource shutdown, and monitor an ML model for performance and quality.  
 
Learn how to train and manage machine learning models using Vertex AI, the MLOps cloud solution designed by Google. Join instructors

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud) | 1h 38m | Intermediate | 25K learners

## Instructor

- [[Archana Vaidheeswaran]]
- [[Soham Chatterjee]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/learning-vertex-ai-mlops-with-google-cloud-4366293)

## Skills Covered

- MLOps
- Artificial Intelligence (AI)
- Vertex

## Table of Contents

### Introduction

#### Learning Vertex AI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=0)** - [Archana] It is time to stop building castles in the cloud and start investing in scalable and sustainable MLOps systems.
>
> **[0:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=9)** Join us in our exciting new course on Vertex AI, where you will learn about the entire MLOps lifecycle from development to deployment.
>
> **[0:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=21)** You will dive deep into feature engineering with feature store and data labeling, explore cutting edge training and hyper parameter tuning techniques with AutoML and experiments, and easily deploy your models using Vertex AI prediction and endpoints.
>
> **[0:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=41)** You will even get an hands-on experience with a challenging project and learn how to monitor and manage your model with Vertex AI and its powerful tools.
>
> **[0:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=53)** Best of all, you will discover how Vertex AI stacks up against other MLOps platforms, and what's next for the future of machine learning.
>
> **[1:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=64)** Let's get started today.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [archana] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=0)** - [Instructor] If you're considering taking this Vertex AI course, here are some prerequisites that is good to have.
>
> **[0:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=7)** It is important to have a solid understanding of machine learning concepts, including supervised and unsupervised learning, feature engineering, model evaluation and deployment.
>
> **[0:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=19)** You should be comfortable with Python programming, including the ability to write, read, and modify code.
>
> **[0:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=26)** Familiarity with libraries such as NumPy, pandas, Matplotlib, and scikit-learn will also come in handy.
>
> **[0:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=35)** You should have a basic understanding of cloud computing concepts, such as virtual machines, containers, and cloud storage.
>
> **[0:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=43)** While not required, experience with popular machine learning frameworks, like TensorFlow or scikit-learn, can give you a head start.
>
> **[0:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=51)** Having a solid foundation in these areas will make it easier for you to understand and apply these concepts and techniques taught in the Vertex AI MLOps course.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1), make (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Introduction to MLOps

#### MLOps lifecycle: ML development
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=0)** - [Speaker] Welcome to the exciting world of MLOPs building blocks.
>
> **[0:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=4)** As a student, you may be wondering what is MLOPs and why is it important?
>
> **[0:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=10)** Well, MLOPs refers to the standards in practices used to build, deploy, and monitor ML systems.
>
> **[0:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=18)** In simpler terms, it helps to ensure that machine learning models are not just accurate but also reliable, scalable, and ethical.
>
> **[0:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=31)** These practices not only help to form the continuity of ML models in production but also offer firstly, robust ways to tackle changes in the system, including changes in data or deployment devices over time.
>
> **[0:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=49)** Secondly, they help to scale ML systems to accommodate more users and data over time.
>
> **[0:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=57)** Thirdly, they establish ethics for model fairness in different teams, which means different teams can follow a single standard of what it means for the system to be fair in terms of data, model and outcomes.
>
> **[1:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=74)** It also ensures shorter time to market through shorter development cycles and timely pace of different blocks of the system.
>
> **[1:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=84)** This brings us to MLOPs lifecycle and looking into each of the block through a magnified lens.
>
> **[1:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=92)** And most importantly, what questions do we need to ask at every stage of the cycle?
>
> **[1:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=99)** The first step to building machine learning system is to work on experimentation.
>
> **[1:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=107)** This means to form a continuous pipeline which supports data, model, and code changes.
>
> **[1:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=114)** So this is the step of ideation, collaboration and defining the problem statement.
>
> **[2:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=120)** There are several types of team members involved in this step.
>
> **[2:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=124)** Right from AI engineers, data scientists to infrastructure engineers.
>
> **[2:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=130)** Some of the questions the team need to decide upon and what values are we trying to predict?
>
> **[2:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=137)** What is the evaluation metric?
>
> **[2:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=139)** Do we need to apply regression or classification to this problem?
>
> **[2:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=144)** Where do we get the data from?
>
> **[2:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=147)** Do we need realtime data?
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=149)** What is the vision for data collection or processing in the future?
>
> **[2:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=154)** Do you need to retrain your model?
>
> **[2:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=157)** If so, then the model needs to be reviewed and deployed regularly.
>
> **[2:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=162)** Most of the steps followed in ML development might be iterative in manner.
>
> **[2:50](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=170)** The data scientists might also wish to experiment with new data and models.
>
> **[2:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=176)** Apart from that, the team needs to set up some vital resources like dataset and feature repository.
>
> **[3:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=184)** This is to store the data and features processed from the data.
>
> **[3:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=189)** Secondly, model registry.
>
> **[3:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=192)** This is to maintain the type of models used during development.
>
> **[3:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=196)** For example, let us say a data scientist might choose an ImageNet model for computer vision task and later on choose a mobile net model instead.
>
> **[3:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=206)** The registry will serve to store and record iterations of model prototypes.
>
> **[3:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=213)** ML metadata and artifact repository.
>
> **[3:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=217)** This can be used to store your model evaluation metricsk hyper parameter, training and testing split used.
>
> **[3:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=225)** And finally, version control.
>
> **[3:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=229)** This is to make sure there is a pointer to the current version being used by the system.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [speaker] (1)

#### MLOps lifecycle: Training
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=0)** - [Instructor] Machine learning is about creating intelligent systems that can learn from data and make predictions or decisions.
>
> **[0:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=9)** But as you move from ever ML development to ML engineering, you face new challenges and opportunities.
>
> **[0:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=18)** MLOps for training has two core components: training operationalization, and continuous training.
>
> **[0:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=27)** Let us dive into each of them and see what they involve.
>
> **[0:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=32)** During training operationalization, you set up a pipeline to complete the training and testing process.
>
> **[0:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=40)** But before we do that, it is important to ask ourself a few set of questions.
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=46)** Firstly, how often should we run the training and the testing of models?
>
> **[0:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=52)** How many computing resources should we assign to this pipeline?
>
> **[0:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=57)** What fallback options do we have to use if the testing of the model fails?
>
> **[1:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=64)** For example, imagine you are building a recommendation system for an e-commerce website.
>
> **[1:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=71)** You must run the training and testing pipeline periodically to update your recommendations based on new user data.
>
> **[1:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=81)** You also need to ensure you have enough computing resources to handle spikes in traffic during busy periods such as Black Friday.
>
> **[1:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=92)** With continuous training, you need to track the pipeline you created with training.
>
> **[1:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=98)** This involves answering questions like, how often should we schedule runs on our system?
>
> **[1:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=106)** Should we set a threshold for data retrieval?
>
> **[1:50](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=110)** For example, if the data for prediction is above a certain threshold where the model cannot predict correctly, we need to trigger the training process.
>
> **[2:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=121)** Do we want the pipeline to be automatic?
>
> **[2:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=124)** If so, we need to implement data validation steps to check for data drift or drastic changes in the data.
>
> **[2:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=134)** For example, you are building a fraud detection system for a financial institution.
>
> **[2:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=140)** You need to continuously monitor your system for any new fraud patterns and update your models accordingly.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=149)** Finally, imagine a scenario where your train model does not behave as expected.
>
> **[2:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=154)** You need to find a way to capture all the details from the input data and evaluations along the pipeline.
>
> **[2:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=163)** This is where the importance of tracking and logging comes in.
>
> **[2:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=169)** Overall, ML engineering is a fascinating and challenging field that requires deep understanding of machine learning algorithms, data pipelines, infrastructure, and software engineering.
>
> **[3:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=183)** With Vertex AI, you have a powerful and easy-to-use platform that can help you build, train and deploy your models at scale.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), imagine (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### MLOps lifecycle: Deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=0)** - [Instructor] The final piece to the MLOps lifecycle is deployment.
>
> **[0:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=5)** Let us break down the different parts of this deployment.
>
> **[0:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=10)** Once a machine learning model has been trained and validated on an initial data set it is time to deploy it into production.
>
> **[0:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=19)** This is where the deployment stage of MLOps lifecycle comes in.
>
> **[0:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=24)** Let's break down the different parts of this stage.
>
> **[0:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=30)** The first step is to deploy the trained and validated model.
>
> **[0:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=35)** This is typically done by storing the model in a model registry where it can be easily accessed for testing and deploying.
>
> **[0:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=45)** The model registry is a central location where all versions of the model are stored.
>
> **[0:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=52)** From the registry you can fetch the registered model, run it through testing phases to ensure it's ready for deployment.
>
> **[1:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=62)** Testing can be done in variety of ways depending on the organization's needs.
>
> **[1:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=68)** For example, you can randomly test the model on any data.
>
> **[1:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=73)** Alternatively, you can dynamically allocate test data to the model to reduce uncertainty and save time.
>
> **[1:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=81)** Once the model has gone through testing it's ready for deployment.
>
> **[1:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=87)** Before deploying the model, it is important to test how it compares to the model ready in production.
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=96)** In the Google Guide to MLOps white paper they suggest running the current model in parallel to the new model and then testing which model performs better.
>
> **[1:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=107)** This is called A/B testing.
>
> **[1:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=111)** Overall, the deployment stage is an essential part of the MLOps lifecycle.
>
> **[1:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=117)** It involves deploying the trained model, testing it, comparing it to the model already in production, and serving new predictions based on incoming data.
>
> **[2:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=129)** By following best practices and defining data and features, teams can ensure the success of their machine learning models in production.
>
> **[2:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=141)** When you build a machine learning model, the ultimate goal is to use it to make predictions on new data.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=149)** In order to do that, you need to set up a system to receive the new data and perform the model testing on them.
>
> **[2:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=157)** This is known as prediction serving.
>
> **[2:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=161)** Imagine your model is making realtime predictions in a mobile app, predicting what music you might like or what products you want to buy.
>
> **[2:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=171)** So what will it look like?
>
> **[2:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=174)** There are different ways to serve the model, like an embedded system.
>
> **[3:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=180)** The model can also be in an embedded system, such as a mobile app or sensor.
>
> **[3:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=187)** Or else the model can be served through the REST API that other applications can access.
>
> **[3:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=196)** When working with large ML systems with many team players it is important to ensure that the training data and the testing data are consistent.
>
> **[3:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=207)** This is where data set and feature management come into play.
>
> **[3:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=212)** Teams need to lay down rules that define the data and its features to ensure consistency.
>
> **[3:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=221)** Have you ever wondered how social media sites automatically tag you in photos or such as friends for you to add?
>
> **[3:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=229)** It is all thanks to the power of ML models running in the background.
>
> **[3:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=234)** Continuous monitoring is a vital aspect of ML systems.
>
> **[3:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=239)** Contrary to popular beliefs, models are only a part of the pipeline and they need to be actively checked and tested.
>
> **[4:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=249)** As a person taking care of these ML systems you can expect data drift to happen, wherein the input data changes over time.
>
> **[4:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=258)** This will cause other parts of the pipeline to change like features, training and evaluation of model.
>
> **[4:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=266)** Eventually, this can cause the model to give wrong prediction and cause system failure.
>
> **[4:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=272)** To prevent this, you need to monitor your models regularly.
>
> **[4:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=277)** Hear how it's done.
>
> **[4:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=280)** A sample of the request response payload is captured and stored in the serving log store.
>
> **[4:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=287)** The monitor engine periodically loads the latest inference log generating a schema and compute statistics for the serving data.
>
> **[4:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=297)** The monitoring engine compares the generated schema to reference schema to identify with schema SKUs and compares the computed statistics to baseline to identify the distributed SKUs.
>
> **[5:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=311)** If the true label for the serving data are available the monitoring engine uses it to evaluate the model's predictively effectiveness in hindsight on the serving data If anomalies are identified, or if the model's performance is decaying, alerts can be pushed through various channels.
>
> **[5:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=332)** For example, email or chat to notify owners to examine the model or to trigger new retraining cycle.
>
> **[5:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=340)** Continuous monitoring ensures that your ML system stays up to date and provides accurate predictions.
>
> **[5:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=348)** Overall, prediction serving and continuous monitoring are crucial aspects of ML systems that ensure accurate and efficient model performance over time.
>
> **[5:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=359)** By understanding and implementing these concepts you can create powerful and effective ML models that drive real world impact.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), is called (1), is an  (1), known as (1)
> **Analogies:** for example (2), such as (2), imagine (1)
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** rest (1), api (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Vertex AI walkthrough
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=0)** - [Instructor] Now that you know the basics of MLOps, let us take a look at Vertex AI, which is an MLOps platform by Google.
>
> **[0:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=10)** After opening your GCP console, you can search for Vertex AI and open it.
>
> **[0:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=18)** You should now see your Vertex AI dashboard.
>
> **[0:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=22)** If this is your first time opening Vertex AI, it'll probably be empty.
>
> **[0:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=28)** As you progress through this course, you'll find the dashboard increasingly useful to glance at all things running in Vertex AI.
>
> **[0:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=39)** This includes models you are training, endpoints you have deployed, and data sets you have created.
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=46)** Don't worry, we will learn how to do all of this soon.
>
> **[0:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=52)** In this course, we will be using Jupyter Notebooks to learn these concepts and build projects.
>
> **[1:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=60)** It is also important to note that Vertex AI is a paid service.
>
> **[1:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=65)** If you follow along with the course exercises you will incur charges.
>
> **[1:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=71)** Remember to run the last cell in the Jupiter notebook, to shut down any resources that you create.
>
> **[1:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=78)** So the first thing we will learn is how you can create a Jupyter Notebook workspace in Vertex AI.
>
> **[1:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=86)** Move to the Workbench tab and click New Notebook.
>
> **[1:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=90)** You are given many options to choose from.
>
> **[1:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=94)** For this course, a simple Python three notebook instance will be enough, so click that.
>
> **[1:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=101)** Give it a meaningful name.
>
> **[1:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=105)** You can keep the rest of the options in their default value.
>
> **[1:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=112)** You can see the notebook will be created in an instance with four CPUs and 15 GB of memory.
>
> **[2:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=121)** Next, click Create.
>
> **[2:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=124)** This creation process will take some time.
>
> **[2:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=128)** After the instance has been created, you can look at the Open Jupyter Lab button.
>
> **[2:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=136)** You should see a few folders present already.
>
> **[2:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=140)** These will have some sample notebooks that you can take a look later.
>
> **[2:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=145)** I suggest that you create a new folder for your coursework.
>
> **[2:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=151)** Now you can start creating new notebooks and working on Vertex AI.
>
> **[2:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=158)** Another tool that we will be using is Google BigQuery, which is a database used to store tabular data.
>
> **[2:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=168)** You can open BigQuery by searching for it at the top.
>
> **[2:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=174)** You can see that I already have a few tables created.
>
> **[3:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=181)** For each table, you can get the schema information for the table.
>
> **[3:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=188)** You can click the preview button, to view a subset of the table.
>
> **[3:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=195)** In this table, you can see data about different species of penguins.
>
> **[3:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=201)** By the end of the course, you will be able to train a model on this dataset, deploy that model to an endpoint, and query the endpoint to get a prediction.
>
> **[3:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=214)** Another database we will be using is Google Cloud storage.
>
> **[3:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=219)** Unlike BigQuery, which can only store tabular data, in cloud storage, you can store files like images, PDF documents, and model files.
>
> **[3:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=234)** Cloud storage data is divided into buckets.
>
> **[3:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=238)** In this bucket, you can see some of the models I have trained previously.
>
> **[4:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=245)** In a later lesson, you will see how you can track different models you have trained, and deploy the best performing model.
>
> **[4:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=255)** This was a quick overview of the different tools we will be using throughout the course.
>
> **[4:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=262)** Next, we will see how you can use feature store in Vertex AI to store training data for our model.
>
> **[4:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=270)** Let's go!

> [!info]- Semantic Content
>
> **Tools:** jupyter (3), gcp console (1)
> **Code Keywords:** let (2), from. (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** gcp (1), pdf (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 2. Feature Engineering

#### Vertex AI feature store
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=0)** - [Narrator] The idea behind the Vertex AI Feature Store is collectively store, organize features and collaborate on these with your team members.
>
> **[0:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=10)** So let us start with a fundamental question.
>
> **[0:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=12)** What exactly is a feature?
>
> **[0:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=14)** Features are measurable properties of your data.
>
> **[0:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=18)** Let us take an example of a computer vision project.
>
> **[0:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=22)** What is the feature of the image?
>
> **[0:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=24)** It is the edges and objects.
>
> **[0:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=27)** What if you had a number-based data like predicting what movies a user might see?
>
> **[0:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=34)** In this case, the user's features will be age, gender, country, et cetera.
>
> **[0:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=40)** The movie's features, on the other hand, will be rating, genre and title.
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=46)** If you had an audio data, what would the features be?
>
> **[0:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=51)** You would look at the length of the sounds, pitch, noise ratio, et cetera.
>
> **[0:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=59)** Once you have identified features in your data, you will likely want to process them in some way.
>
> **[1:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=65)** For example, combining, filtering or deducing new features from old ones.
>
> **[1:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=71)** This is where Vertex AI Feature Store comes in handy.
>
> **[1:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=75)** So why would one use the Vertex AI Feature Store?
>
> **[1:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=79)** With the Vertex AI Feature Store, you can track when features are added and search for and monitor them over time.
>
> **[1:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=89)** Furthermore, it unifies the storage of features through different databases like BigQuery or Cloud Storage.
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=97)** It helps to reduce training skew.
>
> **[1:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=100)** Using this Feature Store, you can ensure that the exact value of a feature is used for training and testing, and most importantly, when you see a data drift happening, it helps to detect that through history of log of timestamps.
>
> **[1:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=117)** Let us look into using this Feature Store.
>
> **[2:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=121)** Let us create a Feature Store of users who rated movies.
>
> **[2:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=125)** Remember, the feature here for the user can be gender, user ID, country, et cetera.
>
> **[2:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=133)** Let us create a Feature Store for such a database.
>
> **[2:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=139)** To create a new Feature Store, we need to specify the ID or the name of the Feature Store.
>
> **[2:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=145)** Then we need the project ID and then finally, the location.
>
> **[2:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=151)** Next, we need to create an entity.
>
> **[2:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=154)** I've created an entity for users.
>
> **[2:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=158)** For each entity, we need to specify some features.
>
> **[2:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=162)** Below, I've added age and gender to our user entity.
>
> **[2:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=167)** You also need to specify the value of the entity.
>
> **[2:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=172)** We can add new features from BigQuery, a CSV file, or even app pandas data frame.
>
> **[2:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=179)** Below is a code sample to add data using pandas.
>
> **[3:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=185)** We need to specify the columns from the data frame.
>
> **[3:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=189)** We need to add the source DF, and the entity field.
>
> **[3:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=194)** You can also specify a time.
>
> **[3:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=197)** This can help version your data.
>
> **[3:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=200)** Let us now see what the Feature Store will look like in the console.
>
> **[3:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=206)** To see your Feature Store, you can navigate to the Feature Store tab.
>
> **[3:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=212)** Remember that different Feature Store can have the same entity type and features.
>
> **[3:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=218)** However, their name will differ.
>
> **[3:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=221)** Here I've created a Feature Store for the Iris dataset.
>
> **[3:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=227)** After clicking on the Feature Store, you can see some of it stats like the latency of the Feature Store and how many queries your Feature Store is receiving.
>
> **[4:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=242)** Next we can see the entities we have created for Feature Store.
>
> **[4:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=248)** Here we have one entity for species, which has two features, the sepal length and the sepal width.
>
> **[4:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=259)** For each feature, we can see its details like data type, when it was created and last updated.
>
> **[4:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=270)** We can also see the jobs that are adding new values for this feature.
>
> **[4:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=278)** To do that, navigate in the Ingestion Jobs tab.
>
> **[4:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=282)** Here, we can see one job that added 150 values.
>
> **[4:50](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=290)** You can also see other metadata like the time it took to run the job and the source of the data.
>
> **[4:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=299)** Now, there may be instances where adding a Feature Store to your team might not make sense.
>
> **[5:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=308)** For example, you need to pre-process your data only once.
>
> **[5:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=313)** In this case, you can use the transform function in your model code to pre-process the data.
>
> **[5:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=319)** This transform is present as a clause in BigQuery or can be picked up from the TFX of TensorFlow models or let us suppose you do not need to compute your feature.
>
> **[5:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=332)** If you need to use most of your features directly, without performing any calculations or compute on it, the Feature Store will be less helpful for you.
>
> **[5:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=343)** In summary, the Vertex AI feature store is a powerful tool for collaborating with team members, organizing and processing features, and ensuring that your models are based on accurate and up to date data.
>
> **[5:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=358)** So why not give it a try?

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (2), finally, (1), type, (1), function (1)
> **Definitions:** is a  (3)
> **Env Vars:** csv (1), tfx (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [narrator] (1)

#### Vertex AI data labeling
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=0)** - [Instructor] Let us talk about the exciting world of data labeling.
>
> **[0:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=4)** It's a crucial step in ensuring your machine learning model is top notch and delivers accurate results.
>
> **[0:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=11)** Here are some cool facts you need to know: Labeling is done for supervised ML models and tasks such as classification.
>
> **[0:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=20)** Training data is the key to a successful model, so make sure it's diverse and of high quality.
>
> **[0:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=29)** Continuous loop of adding new data ensures the model's prediction don't drift due to changes in input data and continue to generalize.
>
> **[0:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=39)** Feeding the model with properly labeled data is key to increasing its accuracy.
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=46)** Imagine a large MLOps system with people labeling data sitting in the data pipeline.
>
> **[0:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=53)** Vertex AI helps you to work with people labeling data and integrate the work into your model's training.
>
> **[1:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=61)** For doing so, they offer a guideline to successfully label and manage them through Google Cloud Platform.
>
> **[1:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=71)** The first step to labeling the data is to provide good quality labels.
>
> **[1:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=77)** Following are some suggestions for creating suitable labels.
>
> **[1:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=82)** Firstly, only have a few labels for your defined dataset.
>
> **[1:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=89)** After all, in this scenario, you have people labeling data, so it is better to leave them with only 20 labels at a time.
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=97)** You would only have more inaccuracies and biases creep in if you increase the labels.
>
> **[1:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=106)** Give proper name to your labels, don't make labels like label_1, 1, 2, et cetera, it would only confuse the people labeling data.
>
> **[1:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=117)** Lastly, also, make sure to have a label with none or maybe other so that they can use it when it does not match any of the given labels.
>
> **[2:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=129)** Once you have defined that you need to create instructions for people labeling data in Vertex AI.
>
> **[2:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=136)** These instructions are uploaded as a PDF file.
>
> **[2:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=139)** A typical instruction file should have the following: A list of labels with good examples so it is clear to people labeling data.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=149)** Have a list of cases where it might be confusing to label the data.
>
> **[2:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=154)** These edge cases can be listed as FAQs.
>
> **[2:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=159)** Finally, a detailed explanation for the steps of annotating data.
>
> **[2:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=165)** Now, let us jump right into a simple labeling task and also see what Vertex AI has to offer.
>
> **[2:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=176)** First, you need to click Labeling Task on the left side menu, and then click Create.
>
> **[3:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=186)** Next, you will need to provide a name for the task and choose the dataset that you created.
>
> **[3:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=194)** In my case, I created a simple dataset with images of cats and dogs.
>
> **[3:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=200)** Depending on your use case, you might want to use active learning.
>
> **[3:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=205)** This will make your labeling process faster by using a model to label some of the data.
>
> **[3:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=213)** The next step is to provide the labels.
>
> **[3:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=216)** Since my data has images of cats and dogs, I will give those labels as well as background label called None.
>
> **[3:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=227)** Next, you need to upload the instructions of your labeling tasks.
>
> **[3:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=233)** The instructions must be present in the Cloud Storage bucket.
>
> **[3:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=239)** In this last step, you can choose whether you want to use Google's in-house data labeling team or your own.
>
> **[4:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=248)** You can choose how many people you want to label each image.
>
> **[4:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=252)** The more people labeling data you have for each image, the more confident you can be of its label, and it'll reduce biases or mistake.
>
> **[4:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=261)** However, it'll also take more time and be more costly.
>
> **[4:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=267)** If you choose to use your own team members, you need to specify which team you want to use, and a manager who will oversee the labeling job.
>
> **[4:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=278)** Now we can finish creating a labeling task.
>
> **[4:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=282)** This might take some time to set up.
>
> **[4:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=286)** Once the labeling task has started, this is what it'll look like.
>
> **[4:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=292)** You can see here images that have not been labeled, let us choose one of them.
>
> **[4:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=299)** Now, we can assign a label and click Save.
>
> **[5:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=305)** The critical question we must ask ourselves, "Will data labeling be a valuable team for my team and my project?"
>
> **[5:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=314)** To answer that, it is essential to define, firstly, the budget of the project.
>
> **[5:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=322)** Check out the current pricing of data labeling on Vertex AI: Can my project afford this, or can I work with creating a label system of my own?
>
> **[5:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=333)** How large is your team?
>
> **[5:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=335)** If you initially hired a large number of people to label your project, would you need to have them every time new data is added to the model?
>
> **[5:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=344)** If so, then Vertex AI offers a great platform to manage them.
>
> **[5:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=349)** Do you envision your project dealing with new data?
>
> **[5:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=353)** Let us say you have a small data set with only five labels and you don't envision these labels increasing or the dataset expanding, then data labeling might not be the right fit for you.
>
> **[6:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=366)** You can consider using opensource alternatives like CVAT to labeling in case you already have an in-house team or a small budget for data labeling.
>
> **[6:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=377)** However, do be aware that you will have to deploy these tools on your own and manage how your users access these tools.
>
> **[6:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=387)** This may bring additional development, efforts, and costs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (2), continue (1), finally, (1), this, (1)
> **CLI Commands:** make (4)
> **Env Vars:** pdf (1), cvat (1)
> **Analogies:** such as (1), imagine (1)
> **Prerequisites:** set up (1), you need to have (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 3. Training and Hyperparameter

#### Vertex AI AutoML
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=0)** - [Instructor] Now that we have covered your data needs, let us jump into the model training and selection for your project.
>
> **[0:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=9)** There are two ways in which you can train your model in Vertex AI, either through AutoML or through custom training model.
>
> **[0:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=17)** When would you choose AutoML or the custom training model?
>
> **[0:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=22)** To answer this, you need to interspect your labels.
>
> **[0:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=27)** Are the labels fitting into pre-trained classification schemes or are the labels customized for your particular problem?
>
> **[0:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=38)** If it is the latter, you need to use custom training model.
>
> **[0:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=43)** If not, you can use AutoML.
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=46)** Once the data is ready and labeled you can train your model with AutoML, splitting the data between training, testing, and validation.
>
> **[0:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=57)** It uses a 80-10-10 split for your data.
>
> **[1:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=63)** You can also choose to adjust your data manually.
>
> **[1:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=68)** The test set is not involved in training.
>
> **[1:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=73)** You need to click on evaluate to see the complete analysis of the model's performance on the test set.
>
> **[1:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=80)** By clicking on the models on the right hand side tab you will get the following metrics in your result.
>
> **[1:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=88)** Model output.
>
> **[1:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=90)** This output is label scores for classification and loss values for regression-based model.
>
> **[1:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=99)** Score threshold.
>
> **[1:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=101)** It helps you to understand if the model is performing overall well.
>
> **[1:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=106)** If the value is low, it indicates that the model is classifying images incorrectly.
>
> **[1:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=112)** Whereas if it is high, it means it classifies fewer images but has a lower risk of misclassifying images.
>
> **[2:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=121)** It gives us the value of true positives, false positives, and false negatives.
>
> **[2:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=127)** Finally, it gives us the average precision and recall value.
>
> **[2:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=132)** But what would you do with these precision and recall values?
>
> **[2:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=136)** Your ML models can end up learning your data or not learning enough from it.
>
> **[2:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=142)** To achieve the balance of generalization, precision and recall come into play.
>
> **[2:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=148)** Precision identifies the data which is relevant to the model, whereas recall helps in understanding how many of those data points that the model accurately define.
>
> **[2:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=160)** Ideally, you want precision and recall to be high, but it is challenging to achieve that balance.
>
> **[2:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=167)** So the output threshold tool can be dragged on the slider to affect the precision and recall trade off you would want to achieve.
>
> **[2:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=178)** Confusion matrix is also displayed and it tells you was the label correctly identified with the blue color?
>
> **[3:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=188)** Let us jump into Vertex AI walkthrough.
>
> **[3:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=192)** To train an AutoML model we first need to create a dataset to train our model on.
>
> **[3:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=199)** To do that, you can navigate to the Datasets tab and create a new dataset.
>
> **[3:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=207)** We will be using the Iris dataset for this lesson which is a tabular dataset used to classify between different species of flowers.
>
> **[3:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=218)** Next, we need to upload the data to our dataset.
>
> **[3:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=222)** You can either upload from your compute or specify a cloud storage bucket.
>
> **[3:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=229)** Now we train our model.
>
> **[3:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=231)** To do that, click the TRAIN NEW MODEL button, select Other, and confirm the selected dataset is correct.
>
> **[4:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=242)** Choose the classification and then mention the target column which in our case is species.
>
> **[4:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=249)** Here you can also add new features and change how the different column data should be interpreted.
>
> **[4:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=260)** In the pricing tab, choose one to limit your training costs.
>
> **[4:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=267)** Now we are ready to start training.
>
> **[4:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=272)** Once the model is trained, you can view the training results to verify your model's performance.
>
> **[4:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=279)** Next, we can deploy the model.
>
> **[4:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=285)** Since the training the model will take some time, we can deploy a model that has been trained previously.
>
> **[4:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=294)** Choose one in minimum compute node and select the smallest deployment endpoint n1-standard-2 to reduce cost.
>
> **[5:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=307)** We will learn more about endpoints in a later chapter.
>
> **[5:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=313)** You are now ready to deploy the model.
>
> **[5:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=322)** After the model is deployed you can send a sample prediction by going to the Test section of your model.
>
> **[5:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=335)** Here you can see the sample data you can test with.
>
> **[5:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=339)** If you are happy with the values, you can press to predict and get the result.
>
> **[5:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=345)** After this, you can shift to the DEPLOY tab to use the model.
>
> **[5:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=354)** You can deploy it to a rest endpoint or have the request returned to a JSON.
>
> **[6:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=362)** Something that stands apart in Vertex AI is that it allows you to make a simple prediction in the DEPLOY tab itself.
>
> **[6:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=373)** You can also deploy them directly to our applications like phones using the Python code to call the cloud-hosted model from our application.
>
> **[6:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=386)** Let us come to the final section of vendor's AutoML not make sense for your team or your project.
>
> **[6:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=395)** While Vertex AI AutoML can be a powerful tool for automating and accelerating the machine learning process, there are some scenarios where it may not be the best choice.
>
> **[6:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=408)** Here are some situations when you might want to consider other option.
>
> **[6:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=413)** Vertex AI AutoML requires large datasets to train machine learning models effectively.
>
> **[6:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=419)** If you have a small dataset you may not be able to generate accurate results using Vertex AI AutomML.
>
> **[7:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=427)** Vertex AI AutoML automates much of the machine learning process which can be beneficial for some use cases, however, if you require more control over the model and its parameters, you need to build a custom solution or work with a data scientist.
>
> **[7:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=446)** Vertex AI AutoML uses Google Cloud platform infrastructure to train and deploy machine learning models.
>
> **[7:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=453)** If you have specific hardware requirements that are not supported, you may need to use a different solution.
>
> **[7:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=461)** Vertex AI AutoML pricing is based on the number of training hours used for training and deploying model as well as the size of the dataset.
>
> **[7:50](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=470)** There's a minimum charge of 10 training hours per model, and pricing varies depending on the machine type used for training.
>
> **[7:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=478)** Additionally, there are charges for prediction requests and storage.
>
> **[8:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=482)** Customers can choose to pay as you go or commit to a monthly plan for discounted pricing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), finally, (1), require (1)
> **Env Vars:** deploy (2), train (1), model (1), json (1)
> **CLI Commands:** make (2), node (1), python (1)
> **UI Navigation:** click on (1), navigate to (1), select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Vertex AI experiments
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=0)** - [Instructor] By now, you have trained a few models either through AutoML or custom training.
>
> **[0:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=7)** It is at this point that it becomes difficult for data scientists to manage their models.
>
> **[0:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=13)** Remember what parameters they use for training, the data version, and also the results of those models.
>
> **[0:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=21)** When developing a machine learning application, it is common for data scientists to go through multiple iterations of the model.
>
> **[0:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=28)** They might use different data for training, change the parameters of the model, or change the model architecture completely.
>
> **[0:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=37)** Experiment tracking is an essential component of MLOps that allows teams to keep track of various experiments they perform to develop and deploy machine learning models.
>
> **[0:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=48)** The purpose of experiment tracking is to record the progress of ML experiments to make it easier for team members to collaborate, reproduce the result, share their findings, and make a decision of which model to deploy.
>
> **[1:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=63)** To do so, we will use Vertex AI experiments.
>
> **[1:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=68)** But first, let's talk about why is it important to track our ML experiments.
>
> **[1:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=73)** Experiment tracking provides version control by keeping track of changes to the model its performance over time.
>
> **[1:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=83)** This helps to avoid errors and consistency in the model and ensures that model is continuously improving.
>
> **[1:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=90)** By controlling versions, experiment tracking helps to maintain reproducibility by capturing all the details related to an experiment including code, data, parameters, and configurations.
>
> **[1:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=104)** This allows team members to reproduce the results of an experiment, which is important for validating and improving the models.
>
> **[1:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=113)** Tracking experiment details enables teams to monitor the performance of various models and identify the best performing one.
>
> **[2:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=122)** This helps to optimize the ML models performance by identifying the best combination of parameters and configurations.
>
> **[2:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=132)** Experiment tracking also enables teams to iterate faster and help in collaboration as they can view the history of experiments Compare results and share insights which help to accelerate the development and deployment of ML models.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=149)** This helps to reduce the time and effort required for developing and deploying them.
>
> **[2:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=155)** In conclusion, Vertex AI experiment is a service that helps you compare these models using variety of tools and techniques.
>
> **[2:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=162)** It's like a playground of your models.
>
> **[2:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=166)** With Vertex AI experiments, you can track the steps of an experiment learned like pre-processing and training.
>
> **[2:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=172)** Vertex AI also reports back with some key metrics and visualization that you can use to better make a decision as to which model to use in your product.
>
> **[3:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=184)** Firstly, it gives you summary metrics.
>
> **[3:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=187)** This gives you the overall score and metric of your model.
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=190)** It can be accuracy or loss, or even an F1 score.
>
> **[3:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=194)** Time series metrics.
>
> **[3:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=195)** Some metrics like the loss function are collected over time so this is a form of time series metrics which are stored in the tensor board instances of Vertex AI.
>
> **[3:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=205)** For example, you can check MSE and RMSE score over time on the tensor board.
>
> **[3:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=211)** Classification metrics, for classification metrics, you can use a confusion metrics present in the metadata section.
>
> **[3:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=220)** This is a useful visualization to see performance gaps or biases in your model.
>
> **[3:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=227)** The first step to using experiment is to create an experiment in Vertex AI.
>
> **[3:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=232)** To do so, you'll need to specify the experiment name, the project, and location.
>
> **[3:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=239)** For instance, you can specify the application you're building or the model architecture or data set you're experimenting with.
>
> **[4:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=246)** Each experiment can contain many runs.
>
> **[4:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=250)** For example, a run can be associated with a different model and architecture, a different dataset, a different model configurations, and so on.
>
> **[4:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=260)** Use the start run method to create a new run.
>
> **[4:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=264)** For each run, you need to provide a name.
>
> **[4:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=266)** You should be descriptive here and provide a meaningful name that will help you remember what changes you have made.
>
> **[4:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=273)** Logging metrics to run is very simple.
>
> **[4:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=276)** You need to use the log metrics method to do so.
>
> **[4:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=280)** Here, metrics need to be a key value pair, where key is the name of the metric you want to log and value as a result you want to log.
>
> **[4:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=289)** You can also automatically log metrics by using auto log function.
>
> **[4:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=294)** Remember to disable logging after the model has finished training.
>
> **[4:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=298)** Once the run is over, you need to end it.
>
> **[5:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=301)** You can do that by using the end_run function.
>
> **[5:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=305)** This is it.
>
> **[5:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=306)** It's very simple to set up, but will go a long wave in developing multiple ML models.
>
> **[5:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=314)** Let us see what it'll look like in the dashboard.
>
> **[5:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=317)** First, you need to click the Experiment tabs on the left.
>
> **[5:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=323)** Next, you can open an experiment.
>
> **[5:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=327)** You can see I have five runs in this experiment.
>
> **[5:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=332)** The table also displays the configurations of each run as well as the training result.
>
> **[5:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=338)** This makes it easy to train to see how different configurations are affecting the final result of the model.
>
> **[5:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=345)** In a later lesson, we will see how you can use TensorBoard to get more powerful visualizations for each run.
>
> **[5:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=354)** In conclusion, experiment tracking is a crucial component of MLOps that can help your team collaborate and develop and deploy models more efficiently to improve performance of your machine learning models.
>
> **[6:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=368)** Vertex AI experiments offers a user-friendly and a powerful way to do just that.
>
> **[6:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=374)** By using that, you can keep track of your model, log metrics and ultimately make better decisions about which models to deploy.
>
> **[6:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=381)** So why not give it a try and see how it can improve your machine learning workflow.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), it's like (1), for instance (1)
> **Env Vars:** mse (1), rmse (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Code Identifiers:** end_run (1)
> **Best Practices:** remember to (1)

#### Vertex AI model registry
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=0)** - [Instructor] A lot of work that data scientists perform is on realtime data or the data that changes often.
>
> **[0:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=7)** A single model is usually not good enough to generalize across this changing data.
>
> **[0:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=13)** To counter this, data scientists usually create multiple model.
>
> **[0:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=18)** These models will differ not only in the configurations and parameters, but also on what data they were trained on, how long they were trained for, and even the model architecture.
>
> **[0:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=31)** How many times have you ended up in a situation where many model files are available but you don't know which points to the one currently being used or one in development or the one train or the latest subset of data?
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=46)** Luckily, Vertex AI has re introduced a Model Registry to store models and control their versions.
>
> **[0:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=54)** These versions can also be linked to an experiment run, which can help you track your model throughout its lifetime.
>
> **[1:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=64)** Here are some features of the Vertex AI Model Registry.
>
> **[1:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=68)** With Vertex AI Model Registry, you can easily manage different versions of your trained model.
>
> **[1:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=75)** This makes it easy to keep track of changes and to roll back to previous version if needed.
>
> **[1:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=82)** Once you have trained and versioned your models, you can easily deploy them to production.
>
> **[1:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=88)** Vertex AI Model Registry allows you to deploy models to various endpoints, including online prediction, batch prediction, and custom endpoints.
>
> **[1:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=99)** We will learn more about prediction in a later lesson.
>
> **[1:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=104)** Vertex AI Model Registry also includes powerful monitoring tools that help you track performance of your deployed model.
>
> **[1:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=112)** You can easily view metrics like latency, error rate, and throughput, and use this data to decide whether to retrain or update your model.
>
> **[2:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=123)** Finally, Vertex AI registry includes advanced access control features that allow you to control who can access and modify your models.
>
> **[2:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=135)** You can also set up granular permissions with different users and groups and track all changes made to your model.
>
> **[2:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=143)** In addition to these features, Vertex AI Model Registry integrate seamlessly with other tools in the Vertex AI suite including experiments in pipelines.
>
> **[2:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=156)** This allows you to build an end-to-end machine learning works spanning the entire MLOps pipeline including data preparation, model training, and model deployment.
>
> **[2:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=169)** Overall, Vertex AI Model Registry is a tool for anyone working with machine learning models whether you are a data scientist, machine learning engineer, or a developer.
>
> **[2:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=179)** However, if you have a small scale team with limited resources and budget, you might want to check the pricing of Vertex AI Model Registry.
>
> **[3:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=188)** There is no direct price to store the models, but do remember when you deploy to an endpoint, a cost might be incurred.
>
> **[3:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=196)** This depends on the type of machine you're using, which region you are using it out of, and the amount of RAM needed.
>
> **[3:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=204)** Storing a new model in Vertex AI and creating a new version is super easy.
>
> **[3:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=211)** For each run, you need to specify a module version alias which can be a string and a description for the model.
>
> **[3:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=221)** For each model, you can specify which model is default.
>
> **[3:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=227)** You can do that using the is_default_ argument parameter.
>
> **[3:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=234)** But what if you want to create another version for the same model?
>
> **[3:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=238)** Well, in that case, you need to specify the parent model parameter.
>
> **[4:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=242)** The parameter needs to be named of the original model for which you want to create a version.
>
> **[4:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=249)** In case you have pre-trained model that you want to store in Model Registry, you can do that using the upload method.
>
> **[4:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=257)** You will need to specify the same details you did if you were training in Vertex AI.
>
> **[4:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=263)** In addition, you can also specify a display name for the model.
>
> **[4:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=270)** Let us see what this will look like in a Vertex AI dashboard.
>
> **[4:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=275)** To view your models, you can go to the Model Registry.
>
> **[4:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=281)** Here, you can find all the models you have trained.
>
> **[4:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=285)** If you click one, you can see all the versions for that model.
>
> **[4:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=291)** You can also change the default model to a different one and see if the model has been deployed to an endpoint.
>
> **[5:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=300)** We will learn more about deployment in a little lesson.
>
> **[5:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=304)** From here, you can compare the performance for both models and use it as batch prediction or deployed to an endpoint.
>
> **[5:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=315)** You can see details of each version, like the Model ID, the job details, where the model artifacts were stored, and the configurations used to train the model.
>
> **[5:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=329)** Overall, the Model Registry in Vertex AI provides users with a centralized version control and collaborative environment for managing tracking their machine learning models, and you should definitely use it as part of your MLOps workflow.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), for, (1), finally, (1), super (1), module (1)
> **CLI Commands:** find (1)
> **Env Vars:** ram (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Vertex AI training
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=0)** - [Instructor] Now that we have looked into how to train our model using AutoML, let us check out how to do custom training in Vertex AI.
>
> **[0:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=9)** Let us target our usual question of why.
>
> **[0:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=12)** So why do we need to do custom training in Vertex AI?
>
> **[0:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=17)** When dealing with larger models, you need a powerful infrastructure to support their training.
>
> **[0:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=23)** Secondly, you should be able to identify any bottlenecks in your training performance.
>
> **[0:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=31)** Then you should have the necessary computing in the form of CPU, GPU, or TPU nodes available to submit your training job.
>
> **[0:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=42)** Lastly, your data should be secure and isolated in the case of any risk.
>
> **[0:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=48)** Starting a training job in Vertex AI is very easy.
>
> **[0:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=53)** The first step is to define your custom training job.
>
> **[0:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=57)** To do that, you will need to give a name for your job.
>
> **[1:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=61)** This will later help you track your job and view its results, so make sure you give a meaningful name.
>
> **[1:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=70)** Next, you will need to create a script for training your model.
>
> **[1:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=75)** Here, I've saved it as task.py file.
>
> **[1:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=80)** Next, you need to specify a container for training your model.
>
> **[1:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=85)** Vertex AI provides many pre-built containers.
>
> **[1:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=89)** Here, I've used one of them that uses TensorFlow 2.8.
>
> **[1:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=94)** If the containers has certain package missing, you can specify them in the requirements argument and Vertex AI will install them.
>
> **[1:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=103)** Now, we are ready to run a training job.
>
> **[1:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=107)** To do that, you have to call the run method.
>
> **[1:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=111)** Here, you will need to specify the data set you want to use.
>
> **[1:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=116)** In case you are using a BigQuery table, you can specify the path to that BigQuery destination parameter.
>
> **[2:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=126)** You can specify splits of your data as well.
>
> **[2:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=129)** If no splits are set, by default, 80% of your data will be used for training, 10% for validation, and 10% for test.
>
> **[2:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=140)** You also need to specify a name for your model.
>
> **[2:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=143)** Again, remember to give a meaningful name for easier tracking.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=149)** Finally, you can specify extra command line arguments you want to pass to the training script using args method which need to be a list of strings.
>
> **[2:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=162)** The run function is blocking, so you must wait until the training is completed to do something else.
>
> **[2:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=171)** But how will your model know where the data is stored?
>
> **[2:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=174)** Well, Vertex AI will pass the values you specified for your dataset as environment variable to your training script.
>
> **[3:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=185)** So your training script will need to read that environment variable.
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=190)** Below, you can see different environment variables for the different splits of your data.
>
> **[3:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=198)** Now, let us look at Vertex AI.
>
> **[3:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=204)** To see the models you have trained, go to the Training tab.
>
> **[3:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=210)** Here, you can see the status of the models you are training, the time it took to train the model and other metadata.
>
> **[3:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=219)** If you open a model, you can see more details about the model, like the type of machine and container used for training, the arguments you pass to the model, and the location where the model artifacts are saved.
>
> **[3:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=239)** In later lessons, we will learn how we can use MLOps standards and best practices like model registry, monitoring, pipelines to deploy a model and set up alerts when things go wrong.
>
> **[4:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=255)** When it comes to pricing, Vertex AI offers two type of pricing for custom training: training on demand, and training with usage-based pricing.
>
> **[4:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=266)** Training on demand is simpler pricing model where you can pay for the compute resources used during training job based on the duration of the training job and the machine type used.
>
> **[4:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=279)** On the other hand, training with usage-based pricing is more flexible and cost effective pricing.
>
> **[4:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=286)** It allows you to pay for only what you used based on the number of training units consumed during the training job.
>
> **[4:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=294)** A training unit is a combination of CPU and GPU usage and you can choose the number of training units based on the size and complexity of your model.
>
> **[5:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=305)** In conclusion, Vertex AI offers a powerful and flexible infrastructure for custom training machine learning models with pricing models that suit different needs and budgets.
>
> **[5:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=316)** By leveraging the resources Vertex AI provides, you can easily train complex models with high accuracy and efficiency.
>
> **[5:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=325)** With its customer customizable and secure infrastructure, Vertex AI training is a great choice for business and individuals who want to scale their machine learning projects while keeping cost in check.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (3), default, (1), finally, (1), function (1)
> **Env Vars:** cpu (2), gpu (2), tpu (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **File Paths:** task.py (1)
> **CLI Commands:** make (1)
> **Versions:** 2.8 (1)
> **Tools:** command line (1)


### 4. Model Serving and Deployment

#### Vertex AI prediction
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=0)** - Welcome back to the exciting world of Vertex AI.
>
> **[0:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=3)** In this lesson, we will dive into how to deploy your trained deep learning model to make it easy for people to use.
>
> **[0:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=13)** Once deployed, people can query the model and get a response, which is where Vertex AI Predictions come in.
>
> **[0:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=20)** So far, we have seen how you can train a deep learning model using Vertex AI.
>
> **[0:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=26)** The model you have trained is now stored in a database.
>
> **[0:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=30)** In this lesson, we will deploy it to make it easy for people to use your trained model, and, once the model has been deployed, people can send a query to the model and get a response.
>
> **[0:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=44)** You can deal with query your model receives in two ways.
>
> **[0:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=49)** Firstly, you can batch multiple requests and then send them to your model simultaneously or create a real time system where requests are sent to your model and processed as they arrive.
>
> **[1:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=66)** Depending on which prediction architecture you choose, batched or real time, how you deploy your model will also change.
>
> **[1:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=77)** Prediction, batch prediction is one of the most common ways in which models are deployed.
>
> **[1:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=85)** Setting up batch prediction infrastructure is easy and cheap, since you do not need to set up a dedicated server to perform prediction.
>
> **[1:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=98)** However, do remember you cannot get an immediate response for a request when using batch prediction.
>
> **[1:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=107)** Instead, you need to collect a few requests before making a prediction.
>
> **[1:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=113)** Similarly, if your input data is constantly updating, then batch prediction may not be the best option, since the output from the model will become outdated quickly.
>
> **[2:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=129)** For instance, the recommendations in an e-commerce website should change as the person views different kind of products.
>
> **[2:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=138)** Such a system will need to generate new results quickly and is not suitable for batch prediction.
>
> **[2:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=146)** This is not necessarily a disadvantage, since not all applications need an immediate response.
>
> **[2:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=153)** For instance, you may be working on an application that sends clients daily recommendations by email or for popular articles to read.
>
> **[2:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=164)** Since you send an email once a day, you don't need a dedicated resource to run your model all day.
>
> **[2:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=173)** Batch prediction is also better when your application needs to process large amount of in a short burst.
>
> **[3:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=180)** For instance, you want to test your model's performance on an external data set to see if your model generalizes well.
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=190)** Let us see what would a simple batch prediction model architecture look like?
>
> **[3:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=195)** Well, first, your application would need a way to store the input data of your model.
>
> **[3:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=203)** Input data could be generated by your customers, or by some other application, or by sensors.
>
> **[3:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=210)** You can save the input prediction data into BigQuery or storage packets.
>
> **[3:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=217)** Next, you need to find a way to start your batch prediction job.
>
> **[3:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=222)** A common way to do this is to use Cron to schedule batch prediction jobs.
>
> **[3:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=228)** Another way would be to wait 'til a certain number of input data is received and then start a trigger to start running your batch prediction job.
>
> **[4:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=241)** Finally, you will need to store the result of your model.
>
> **[4:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=246)** This can also be done in BigQuery or cloud storage.
>
> **[4:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=252)** To create a batch prediction, you need to specify the following details to the batch prediction API, a name for your batch prediction job, the source of the prediction to request data, this can be either BigQuery or cloud storage buckets, the destination where you want to store the result, this should also either be BigQuery or Google Cloud Storage Buckets.
>
> **[4:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=282)** Remember that you need to provide at least one source and destination, then the type of machine you want to use to run the prediction.
>
> **[4:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=293)** Lastly, in addition, you need to specify if you want to use an accelerator, like GPU, and how many you want to use.
>
> **[5:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=304)** Once your job has been completed, you can view the results in the destination Google Cloud Bucket you specified when creating the batch prediction job.
>
> **[5:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=315)** To know if your job has been completed programmatically, you can use the wait method.
>
> **[5:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=321)** You can also view the batch predictions job's metadata like its name and state.
>
> **[5:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=330)** To view the results of your batch prediction in the console, you can navigate to the batch prediction tab.
>
> **[5:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=337)** Here, you can find batch prediction jobs.
>
> **[5:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=342)** Once the status of your job is finished, you can open it.
>
> **[5:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=348)** Here, you can see the location where the input data was picked up from, where the job started, and how much time it took to complete.
>
> **[6:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=360)** The export location is where the results of the job are.
>
> **[6:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=364)** Clicking it will take you to BigQuery where you can preview the prediction result for each sample.
>
> **[6:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=372)** Now that you know how to deploy your models for prediction, you can use it to solve real world problems with machine learning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (2)
> **Code Keywords:** let (1), finally, (1), from, (1)
> **Analogies:** for instance (3)
> **Env Vars:** api (1), gpu (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - welcome (1)

#### Vertex AI TensorBoard
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=0)** - [Instructor] So far, you have seen how you can train your model using Vertex AI and then deploy it using Batch prediction.
>
> **[0:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=8)** Now, we will see how you can visualize your trained model and analyze its metrics.
>
> **[0:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=15)** TensorBoard is a web-based visualization tool developed as part of TensorFlow.
>
> **[0:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=23)** It helps you to visualize your model's architecture, track your model's training progress, and track its performance metrics.
>
> **[0:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=33)** It can also be a helpful tool to debug your model.
>
> **[0:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=38)** TensorBoard provides several advantages for developers and data scientists working on machine learning projects.
>
> **[0:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=47)** Firstly, the TensorBoard helps you to visualize the architecture of your machine learning model, making it easier to understand the flow of data through the model and giving you an insight into how the model works.
>
> **[1:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=63)** Secondly, with TensorBoard, you can monitor the progress of your model's training in real time, including metrics like loss and accuracy.
>
> **[1:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=73)** This allows you to identify potential issues during training and adjust your model's parameters accordingly.
>
> **[1:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=82)** By tracking the model's training progress, you can quickly identify when your model is overfitting or underfitting, and identify the optimal point for stopping the training.
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=97)** TensorBoard provides an easy way to compare multiple models trained on the same set.
>
> **[1:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=104)** For instance, when doing hyperparameter tuning, you can visualize the performance of different models side by side, making it easier to identify the best model for your specific use case.
>
> **[2:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=121)** With TensorBoard in Vertex AI, you can also create a shareable link to your TensorBoard dashboard.
>
> **[2:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=129)** This can be used to quickly share results of your experiments in real time with stakeholders.
>
> **[2:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=139)** TensorBoard is integrated into Vertex AI, making it easy to set up the dashboard any time to train a model.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=149)** To create a new TensorBoard, you can use the following code and specify the name of your dashboard along with your project ID and the region.
>
> **[2:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=161)** When you start training your model, you need to specify the name of the TensorBoard you have created.
>
> **[2:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=169)** To make sure that your training script logs the results to the right TensorBoard, you need to specify the path to where the log data needs to be saved.
>
> **[3:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=182)** This path is present in the AIP_TENSORBOARD_LOG_DIR environment variable.
>
> **[3:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=191)** For instance, if you're using Keras to train your model, you can use the tensorboard_callback with the environment variable to log into TensorBoard.
>
> **[3:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=204)** Before we move ahead and see a walkthrough of TensorBoard, it is worth taking some time to talk about the pricing of TensorBoard.
>
> **[3:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=212)** Unlike some of the other resources we have seen where the pricing is based on pay-per-use model, where you're charged only for the resource you use and the time you use it for, TensorBoard charges a monthly fee of $300 per unique active user.
>
> **[3:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=234)** TensorBoard's features are great for real-time monitoring and visualizing your model's training.
>
> **[4:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=240)** Its debugging features can also help improve the accuracy and efficiency of models which can ultimately lead to better business outcomes and cost savings.
>
> **[4:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=251)** However, you should consider whether the pricing of Vertex AI TensorBoard is justified based on your specific needs and budget.
>
> **[4:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=260)** For instance, you may not need a real-time monitoring of your training, especially if you're using smaller models, and you may not need to share your training results in a dashboard.
>
> **[4:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=272)** With the pricing in mind, we want to talk about situations where it may not make sense to use a TensorBoard.
>
> **[4:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=280)** For example, firstly, if you're using and working with simple machine learning model that does not require extensive visualization or debugging, Vertex AI TensorBoard may be an overkill.
>
> **[4:55](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=295)** In this case, a simple visualization tool or method may suffice.
>
> **[5:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=301)** Or let us say you're working with a small dataset or if the data you're working with is not very complex.
>
> **[5:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=308)** Vertex AI TensorBoard may not provide significant benefits over simple visualization tools.
>
> **[5:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=315)** In this case, it may be more efficient to use simpler visualization methods.
>
> **[5:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=321)** Also, let us suppose while Vertex AI dashboard can provide powerful insights into machine learning model, it may not be feasible for projects with limited budgets.
>
> **[5:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=334)** In this case, you may need to use open-source or free visualization tools.
>
> **[5:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=340)** Put simply, TensorBoard is a powerful tool, but if your application uses simpler and smaller models or dataset, it may not make sense to use TensorBoard.
>
> **[5:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=353)** To see the TensorBoard dashboard associated with the model, you can go to the Experiments tab and click the OPEN TENSORBOARD button associated with the model that you have trained.
>
> **[6:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=367)** Here, you can see the graphs that track the accuracy and loss throughout the training process.
>
> **[6:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=375)** You can also click the GRAPHS tab and view the model's architecture.
>
> **[6:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=382)** In summary, TensorBoard is a powerful tool for visualizing and monitoring machine learning models.
>
> **[6:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=390)** In Vertex AI, you can easily integrate TensorBoard into your training and deployment workflows to help you debug and optimize your models.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (2), case. (1), for, (1), require (1)
> **Env Vars:** aip_tensorboard_log_dir (1), open (1), tensorboard (1), graphs (1)
> **Analogies:** for instance (3), for example (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** tensorboard_callback (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### Vertex AI endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=0)** - [Instructor] Hello and welcome to our lesson on how to use Vertex AI endpoints.
>
> **[0:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=5)** Are you ready to learn about how to deploy your machine learning models, and get realtime predictions?
>
> **[0:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=11)** Let's get started.
>
> **[0:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=13)** To get realtime responses for requests from your model, we can deploy to Vertex AI Endpoint.
>
> **[0:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=21)** You can think of an endpoint as a dedicated server hosting the model.
>
> **[0:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=27)** You can specify the kind of resources you want the server to have like the number of CPU cores and memory depending on how much compute power your model needs, and how many requests you can expect the model to get.
>
> **[0:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=42)** While deploying models to an endpoint is easy, it's more expensive, however, its benefit, and if applications that need quick and timely prediction responses.
>
> **[0:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=56)** For instance, you're running an e-commerce website, and want to suggest related products to users based on their viewing history.
>
> **[1:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=66)** You want to update the recommendation quickly as they navigate your site, and show the results to your users.
>
> **[1:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=73)** Since endpoints are real time, this is a perfect scenario to use them.
>
> **[1:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=80)** While Vertex AI endpoints are a powerful tool for getting realtime responses for requests from your model, there are situations where they might not be the best choice.
>
> **[1:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=92)** Here are some scenarios where you may not choose to use Vertex AI endpoints.
>
> **[1:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=98)** If your application has low traffic where you only receive a few requests per day, it may not be cost effective to use Vertex AI endpoints.
>
> **[1:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=109)** Endpoints are expensive, and if you are not receiving many requests, it may be cost effective to perform batch prediction.
>
> **[1:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=118)** Endpoints can be more expensive than other deployment methods, so it is important to consider the cost, and resources you have available.
>
> **[2:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=128)** If you have a large model that requires a lot of computing, then deploying to an endpoint may not be the best choice.
>
> **[2:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=136)** This is especially true since the time it takes to perform an inference on a large model may too slow, especially if you have a lot of traffic.
>
> **[2:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=146)** Lastly, if you are making one time predictions on a large dataset, you may not need to use Vertex AI Endpoint.
>
> **[2:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=154)** Endpoints are designed for real-time predictions, and if you are making batch predictions, consider other deployment methods.
>
> **[2:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=162)** In summary, it's important to consider factors such as cost, resources, model size, and prediction type when deciding to use Vertex AI Endpoints.
>
> **[2:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=174)** How do you choose a endpoint?
>
> **[2:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=176)** Generally, training requires more computing power than inference, so your prediction endpoint does not need to be as powerful as your training container.
>
> **[3:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=186)** While training your model may take hours a day, your endpoint will run for weeks or months.
>
> **[3:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=192)** Using a more far powerful container to train your model quickly, and less powerful machine to run your endpoint is better.
>
> **[3:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=202)** I would suggest to start with a machine with four CPUs, and 15 GB of memory, like the n1-standard-4.
>
> **[3:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=211)** You can then move on to a machine with more memory if you have a larger model, and a machine with more CPUs or even a GPU if you need faster inference or have a lot of load.
>
> **[3:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=226)** To deploy to an endpoint, you must first create one.
>
> **[3:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=231)** If you have an existing endpoint, let's say from a previous model deployment, then you can reuse it.
>
> **[3:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=238)** To create an endpoint, you can use to create method, and specify the endpoint and the project where you want the endpoint to be created.
>
> **[4:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=247)** Finally, to deploy your model, you need to specify the endpoint you want to deploy your model to, the type of machine you want the endpoint to have, and any extra resources for the endpoint like GPUs.
>
> **[4:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=261)** You can enable explainability for that endpoint.
>
> **[4:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=266)** Deploying to an endpoint may take some time.
>
> **[4:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=269)** The wait method will wait till the endpoint is deployed, and after deployment is complete, we can use the predict method to send a request to it and get a response.
>
> **[4:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=283)** You can terminate and delete all the resources you created using the Vertex AI Python API tool.
>
> **[4:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=291)** To delete the training job, you can call the delete method.
>
> **[4:55](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=295)** Next, to bring down the endpoint.
>
> **[4:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=298)** You can call the delete method on the endpoint.
>
> **[5:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=302)** Finally, to save on storage costs, you can delete the train model by calling the delete method of the model.
>
> **[5:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=311)** Remember that Vertex AI is a paid service, so you should run the last cell in the Jupyter Notebook to shut down any resources that you create if you follow along with the exercise.
>
> **[5:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=324)** To see the endpoints you have deployed, you can navigate to the endpoint tab in Vertex AI.
>
> **[5:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=333)** From here, you can see that the model is deployed to the endpoint.
>
> **[5:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=338)** You can also see the metrics of the endpoint, like, how much compute resources are being used, the request per second, your endpoint is processing.
>
> **[5:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=353)** Clicking the sample request button will give you information on how you can invoke this endpoint using Curl and Python.
>
> **[6:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=363)** Now you know how to deploy your models using both batch prediction and endpoints.
>
> **[6:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=370)** In your next lesson, we will learn how you can monitor and manage your deployed models.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (6), let (2), finally, (2)
> **CLI Commands:** python (2), curl (1)
> **Env Vars:** cpu (1), gpu (1), api (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), such as (1)
> **Tools:** jupyter (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 5. Model Monitoring and Management

#### Vertex AI model monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=0)** - [Instructor] So far, we have seen how you can deploy a model using Vertex AI.
>
> **[0:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=5)** Once a model has been deployed, you'll want to monitor it to ensure it's running correctly.
>
> **[0:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=12)** When deploying any software application, we need to monitor it for metrics, errors, down times, and failures.
>
> **[0:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=22)** However, when deploying models we need to monitor not only the health of our application, but the performance of the model as well.
>
> **[0:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=31)** In this lesson, we'll learn how we can use Vertex AI for model monitoring.
>
> **[0:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=38)** So how is model monitoring different from monitoring a typical application?
>
> **[0:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=43)** Firstly, machine learning models are heavily dependent on the quality of and distribution of data used to train them.
>
> **[0:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=52)** Therefore, monitoring the performance of these models requires the tracking, the quality, and the distribution of the data they are processing, in addition to traditional performance metrics.
>
> **[1:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=69)** Secondly, unlike traditional software monitoring methods machine learning models can experience model drift, where the model's performance deteriorates over time, due to changes in input data.
>
> **[1:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=85)** Model monitoring must be able to detect this drift and adjust the model accordingly.
>
> **[1:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=93)** Also, machine learning model monitoring requires tracking additional performance metrics, beyond the typical technical metrics such as accuracy, precision, and recall.
>
> **[1:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=106)** Model monitoring may also require tracking specific business metrics, to ensure the model is achieving the desired outcomes.
>
> **[1:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=118)** Finally, in software projects, feedback is often received from users or testers.
>
> **[2:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=125)** In machine learning, feedback is received from people who label data.
>
> **[2:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=131)** Monitoring the feedback loop between the model predictions and the actual labels and then integrating them into the model via training, is an important part of model monitoring.
>
> **[2:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=145)** There are a few ways to monitor a model's performance.
>
> **[2:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=149)** Firstly, we can observe the model's input to ensure it hasn't changed.
>
> **[2:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=155)** Since the model has been trained on data with a particular distribution or properties, it'll affect its performance if the data we sent to the model during inference changes.
>
> **[2:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=168)** This is called training-serving skew.
>
> **[2:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=172)** You can monitor for skew by creating a statistical distribution of the training and training data, and comparing that with the distribution values seen during deployment.
>
> **[3:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=185)** You can retrain the model if the distribution changes beyond the specified threshold.
>
> **[3:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=191)** Since you need to know the training data distribution to perform skew detection, you need to enable it during training.
>
> **[3:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=200)** The second model metric we monitor is called prediction drift.
>
> **[3:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=205)** This happens when the input features to the model change over time.
>
> **[3:29](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=209)** Since prediction drift only looks for changes in the input to the model during model deployment, you can set it up after the model has been deployed.
>
> **[3:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=220)** Like skew detection, we can set up a threshold for prediction drift.
>
> **[3:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=225)** Once the threshold is breached, you can raise an alarm, or trigger a model retraining job.
>
> **[3:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=234)** We can also monitor the importance of each input feature in the model's prediction.
>
> **[4:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=240)** This is called feature attribution.
>
> **[4:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=243)** Input features we need to feed to the model are typically not given the same weight by the model during inference.
>
> **[4:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=252)** The importance of each feature should not drift over time for the same model.
>
> **[4:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=259)** A change in the attribution, or importance score, can either signal that the data has changed or that the model's performance may drop.
>
> **[4:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=272)** Training-serving skew occurs when a feature's attribution after deployment deviates from the feature's attribution score during training.
>
> **[4:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=282)** This also requires us to have access to the training data.
>
> **[4:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=288)** Prediction drift occurs when a feature's attribution score changes after deployment, over time.
>
> **[4:55](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=295)** This can occur due to input data changing.
>
> **[4:58](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=298)** Let us see how to set up monitoring of your model in Vertex AI.
>
> **[5:04](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=304)** We will see how to set up email alerts, skew detection, and drift detection.
>
> **[5:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=310)** First thing we need to do is set up a config for each of them.
>
> **[5:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=314)** Setting up an email alert config is easy.
>
> **[5:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=318)** You only need to specify a user email ID to send an alert to.
>
> **[5:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=326)** Before we can configure our drift and skew detection, we need to specify the sampling rate and schedule interval for monitoring.
>
> **[5:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=335)** The schedule config sets the interval in hours, after which the model monitoring task will learn.
>
> **[5:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=343)** The minimum time is one hour.
>
> **[5:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=346)** The sampling rate tells Vertex AI what percentage of samples to monitor.
>
> **[5:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=351)** This should be between zero and one.
>
> **[5:55](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=355)** Next, we will set up drift detection and attribution drift.
>
> **[6:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=360)** For this, we need to specify the features from our input data that we want to monitor.
>
> **[6:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=367)** In case of tabular data set, this would be column names.
>
> **[6:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=371)** For each feature, you also need to specify threshold.
>
> **[6:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=375)** If no thresholds are specified, it is taken 30% by default.
>
> **[6:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=381)** Setting up a skew detection config is very similar.
>
> **[6:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=386)** Except here you also need to specify the input data source as well as the target column.
>
> **[6:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=393)** Finally, we need to combine our skew and drift configs into an objective config.
>
> **[6:41](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=401)** Now that our configs are ready we can create a monitoring job.
>
> **[6:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=406)** To do that, we need to specify our display name for monitoring job, the project id, the location, and the endpoint you want to monitor.
>
> **[6:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=416)** After that, we specify all our configs.
>
> **[7:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=421)** Now let us see what it will look like in the dashboard.
>
> **[7:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=425)** First, we need to go to the Endpoints tab.
>
> **[7:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=429)** From here, you need to click the endpoint for which you have enabled monitoring.
>
> **[7:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=434)** And then, click Enable under monitoring column.
>
> **[7:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=439)** From here, you can view the trends of the different features you monitor and see if they've drifted significantly.
>
> **[7:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=447)** You can also view properties you set up for monitoring, like monitoring interval, sampling rate, and alerting email.
>
> **[7:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=456)** In summary, model monitoring helps you to ensure that your model's prediction quality has not degraded.
>
> **[7:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=464)** Setting up alerts ensures that you can quickly retrain your model, in case the data has drifted from what your model was initially trained for.
>
> **[7:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=474)** If you're deploying models to production, have model monitoring setup will improve the performance and reliability of your application.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2), require (1), raise (1), this, (1)
> **Prerequisites:** set up (6), configure (1), setup (1)
> **Definitions:** is called (3), is an  (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Vertex AI pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=0)** - [Instructor] In this course, we have seen how you can use Vertex AI to perform the different steps in an MLOps pipeline.
>
> **[0:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=8)** To recap, the first step we need to do is prepare our training data.
>
> **[0:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=14)** The training data can be present in a database like BigQuery or cloud storage.
>
> **[0:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=19)** It is good practice to version your training data and features present in your data.
>
> **[0:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=26)** To version your data, you can use Vertex AI datasets and to manage features, you can create a feature store.
>
> **[0:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=34)** The next step is to train a model with your data.
>
> **[0:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=37)** In this step, it is important that you keep track of the configurations, hyperparameters and data used to train your model.
>
> **[0:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=46)** This will help in reproducibility.
>
> **[0:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=49)** You can do this with Vertex AI experiments.
>
> **[0:53](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=53)** You should also version your models after training.
>
> **[0:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=57)** You can use the model registry for doing that.
>
> **[1:01](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=61)** Once your model is trained and you are happy with the performance, the next step is to deploy it, either to a endpoint or use it for batch prediction.
>
> **[1:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=72)** Finally, you would set up monitoring of your model and retrain your model when the performance drops.
>
> **[1:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=79)** You can also set up data labeling and retrain your model regularly on data that it did not classify correctly.
>
> **[1:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=88)** Most machine learning application follow these steps.
>
> **[1:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=91)** As an MLOps engineer, you will need to perform this workflow every time a model has to be retrained or updated.
>
> **[1:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=99)** Since this process has to be repeated multiple times, it makes sense to automate it by chaining all the steps into a single executionable pipeline.
>
> **[1:50](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=110)** By doing so, you can easily run your pipeline multiple times with different inputs while being able to monitor the results.
>
> **[2:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=120)** You can also reuse parts of your pipeline to train new models, making your workflow modular, repeatable, observable, and easy to set up.
>
> **[2:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=132)** Well, you can do this and more in Vertex AI using Vertex AI pipeline.
>
> **[2:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=137)** Let's dive a bit deeper into why you should use pipelines in your MLOps system.
>
> **[2:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=144)** Efficiency, ML pipelines automate the entire process of developing, training, and deploying ML models, saving time and increasing efficiency.
>
> **[2:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=156)** By automating repetitive tasks like data pre-processing, feature engineering and model selection, ML pipelines free up time for data scientists and machine learning engineers to focus on more strategic tasks like model optimization and experimentation.
>
> **[2:56](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=176)** Reproducibility and collaboration.
>
> **[3:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=180)** ML pipelines help ensure reproducibility which is essential for building trust in ML models.
>
> **[3:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=189)** By defining a clear and structured workflow for model deployment and development, ML pipelines allow others to reproduce your work and verify your results.
>
> **[3:23](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=203)** Scalability, ML pipelines are scalable, meaning they can handle large data sets and models.
>
> **[3:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=211)** This is particularly important in production environments where models need to be trained and deployed quickly and effectively.
>
> **[3:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=220)** Flexibility.
>
> **[3:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=222)** ML pipelines are flexible, allowing data scientists and machine learning engineers to experiment with different algorithms, hyperparameter and data pre-processing techniques.
>
> **[3:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=234)** This flexibility makes it easier to optimize models and improve performance.
>
> **[4:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=240)** Let's train a simple AutoML model using Vertex AI pipelines.
>
> **[4:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=246)** The first step we need to do is click the Pipelines tab on the left.
>
> **[4:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=253)** Since we will be using the Iris data for training, you can select the pipeline template for tabular classification.
>
> **[4:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=264)** First, we need to provide a run name.
>
> **[4:27](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=267)** Then, we need to provide a bucket for storing the train model.
>
> **[4:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=275)** Next, we need to select the dataset and the training objective.
>
> **[4:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=280)** When giving a name for the model, make sure that it is descriptive.
>
> **[4:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=287)** To make your pipeline run faster, you can choose not to create an evaluation and to skip architecture search.
>
> **[4:55](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=295)** For this example, I will not skip it to show you what pipeline will look like.
>
> **[5:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=302)** Finally, provide a budget for the compute and click Submit.
>
> **[5:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=307)** This will start pipeline run.
>
> **[5:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=311)** This is how you can fix the error if the Specify ID error turns up.
>
> **[5:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=317)** You can now view the running pipeline jobs in the run step.
>
> **[5:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=321)** You can also view the steps in the pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Exercise Files:** template (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 6. Deploy Your Project Using Vertex AI

#### Challenge: Deploy a project
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=5)** - [Instructor] Now that you've gone over the content of the course, let us look into the hands-on portion of building a project.
>
> **[0:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=14)** We have a very fun challenge today of using the Penguin's data set to build a project in Vertex AI.
>
> **[0:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=21)** There are various kinds of projects you can build.
>
> **[0:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=24)** A classification project to recognize the type of penguins based on region and islands, predicting the beak length and depth based on species, region, flipper length, and body mass.
>
> **[0:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=38)** In the interest of time, you can use selective tools from Vertex AI, namely Vertex AI training, Vertex AI Endpoints, and Vertex AI Model Registry.
>
> **[0:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=49)** In this challenge, you will combine everything you've learned throughout this course to build and deploy a project using Vertex AI.
>
> **[0:57](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=57)** You will use the penguins dataset.
>
> **[1:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=62)** The first step you need to do is to download the data from BigQuery and then create a dataset in Vertex AI.
>
> **[1:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=70)** After that, you will have to use the data set to train a model.
>
> **[1:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=75)** Once the model has been trained you will need to register it.
>
> **[1:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=80)** Remember that registering a model makes tracking of your model's version, history and performance easy.
>
> **[1:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=88)** Finally, you'll deploy the model to an endpoint and query it.
>
> **[1:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=94)** So what are you waiting for?
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=96)** Let's get cracking on this fun and exciting project and show off your MLOps skills.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### Solution: Deploy a project
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=0)** - All right, folks.
>
> **[0:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=7)** Get ready to put your ML Engineering hats on because we've got a fun project for you.
>
> **[0:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=12)** We are going to be working with the Penguindata from Big Query and Training a model on that.
>
> **[0:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=17)** How cool is it?
>
> **[0:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=19)** First thing's first, we need to fetch the Penguin's data from BigQuery.
>
> **[0:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=24)** You can download it as a CSV or you can copy it to a BigQuery table in your own account.
>
> **[0:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=31)** Next up, let's create a data set in Vertex AI.
>
> **[0:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=35)** Not only will this help us to load the data for training our model but it also works to track our data history and version.
>
> **[0:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=45)** We want to make sure we are keeping track of all our hard work, right?
>
> **[0:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=49)** Now it's time to train our model.
>
> **[0:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=52)** Don't worry, you don't need to be a Docker expert for this.
>
> **[0:55](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=55)** Vertex AI provides a prepaid Docker container for training but you can also build your own if you're feeling adventurous.
>
> **[1:03](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=63)** Once our model is trained and ready to go, let's register it to model registry so we can keep track of all its versions and metadata.
>
> **[1:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=74)** We want to make sure you are staying organized and on top of things.
>
> **[1:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=77)** Finally, the moment we have all been waiting for, deployment.
>
> **[1:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=81)** We can deploy the model to an endpoint and query it to get a result.
>
> **[1:25](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=85)** Who knew penguins could be so exciting?
>
> **[1:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=88)** Just a quick reminder.
>
> **[1:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=90)** Make sure to shut down all the resources you've created, like the endpoint to avoid any extra charges.
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=97)** So, what are you waiting for?
>
> **[1:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=100)** Let's dive into this fun penguin project and train our model to be the best of best.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), finally, (1), for, (1)
> **CLI Commands:** make (3), docker (2)
> **Env Vars:** csv (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

#### Vertex AI vs. other MLOps platforms
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=0)** - [Speaker] Every MLOps platform offers some tools which might or might not be useful for your organization.
>
> **[0:08](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=8)** When we see as a whole Vertex AI has its own set of advantages and disadvantages.
>
> **[0:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=14)** Let us dig into that as we help you make a decision on choosing the right platform for your next project.
>
> **[0:21](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=21)** Vertex AI has several advantages.
>
> **[0:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=24)** Vertex AI is a fully managed platform, which means that it takes care of infrastructure management and maintaining installs, such as scaling and provisioning resources, patching and updating software and ensuring high availability and reliability.
>
> **[0:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=42)** This allows data scientists and machine learning engineers to focus on building and deploying their models without worrying about infrastructure management.
>
> **[0:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=52)** Vertex AI provides autoML capabilities that enable users to create high quality models without needing extensive machine learning expertise.
>
> **[1:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=65)** AutoML can help users save time and reduce costs by automating the process of model selection, hyper parameter tuning and feature engineering.
>
> **[1:16](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=76)** Vertex AI supports a wide range of open source machine learning frameworks and tools such as TensorFlow, pythons, and scikit-learn, making it easier to use familiar tools and libraries.
>
> **[1:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=88)** And lastly, Vertex AI is built on Google's cloud secure and compliant infrastructure, which is designed to meet the higher standard of security and compliance, including HIPAA, SOC2, and ISO 27001.
>
> **[1:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=105)** This enables users to store and process sensitive data and model securely.
>
> **[1:51](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=111)** Whereas if you look at why Vertex AI may not be the best tool for you, you could look at some of its disadvantages.
>
> **[1:59](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=119)** Vertex AI is designed to work with Google Cloud platform which means there may be better choices for organizations using different cloud provider or running their own data centers.
>
> **[2:13](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=133)** In contrast, tools like Amazon SageMakers or Microsoft Azure machine learning support multi-cloud and hybrid cloud deployments.
>
> **[2:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=142)** Vertex AI can be more expensive than other MLOPs tools, especially for large scale projects.
>
> **[2:30](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=150)** This may be a disadvantage for smaller organization or those with limited budgets.
>
> **[2:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=155)** Ultimately, the best MLOPs tool would depend on an organization's or project's specific needs and requirement.

> [!info]- Semantic Content
>
> **Env Vars:** hipaa (1), soc2 (1), iso (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Code Identifiers:** automl (1)
> **Speakers:** - [speaker] (1)

#### What next?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=0)** - [Trainer] Woohoo, you did it.
>
> **[0:02](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=2)** You've completed the MLOps course with Vertex AI.
>
> **[0:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=5)** With your new found skills and knowledge, you are ready to develop, train, deploy, and manage machine learning models like a pro on Google Cloud platform.
>
> **[0:15](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=15)** But wait, there's more.
>
> **[0:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=17)** Follow us on Twitter or checkout our website to stay up to date with the latest in MLOps.
>
> **[0:24](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=24)** Don't miss out on exciting directions and new discoveries in the field.
>
> **[0:28](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=28)** And hey, have you subscribed to our newsletter?
>
> **[0:31](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=31)** We've got exclusive insights and insider tips for MLOps enthusiasts like you.
>
> **[0:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=36)** Oh, and one more thing, keep learning.
>
> **[0:40](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=40)** We recommend you check out some LinkedIn Learning courses on MLOps to enhance your skills and knowledge further.
>
> **[0:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=47)** So what are you waiting for?
>
> **[0:49](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=49)** Keep crushing it.
>
> **[0:50](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=50)** Stay curious and have fun in your MLOps journey.

> [!info]- Semantic Content
>
> **Speakers:** - [trainer] (1)


## Path Context

### In [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]
← [[Google Cloud Platform for Machine Learning Essential Training]] | **7 of 7**

## Appears In

- [[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]

## Related Courses

_Courses sharing skills:_

- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Monitoring Model Drift and Bias]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Deployment and Monitoring]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Development and Integration]] — Artificial Intelligence (AI), MLOps
- [[MLOps and Data Pipeline Orchestration for AI Systems]] — Artificial Intelligence (AI), MLOps
