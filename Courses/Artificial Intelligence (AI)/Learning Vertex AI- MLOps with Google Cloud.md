---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGW2u39Kq1kjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727390394338?e=2147483647&amp;v=beta&amp;t=N9FouCaiGWlHWH8_UaVRHToPDxxto73D8RKGk8chnRE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your AI Skills with Google Gemini and Google Cloud Platform]]'
prev_courses:
  - '[[Google Cloud Platform for Machine Learning Essential Training]]'
path_nav: '[{"path":"Develop Your AI Skills with Google Gemini and Google Cloud Platform","position":7,"total":7,"prev":"Google Cloud Platform for Machine Learning Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/mlops
  - skill/artificial-intelligence-ai
  - skill/vertex
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Learning%20Vertex%20AI-%20MLOps%20with%20Google%20Cloud.md)

![Learning Vertex AI: MLOps with Google Cloud](https://media.licdn.com/dms/image/v2/D4D0DAQGW2u39Kq1kjA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727390394338?e=2147483647&amp;v=beta&amp;t=N9FouCaiGWlHWH8_UaVRHToPDxxto73D8RKGk8chnRE)

# Learning Vertex AI: MLOps with Google Cloud

> Projects Use a real-world data set to build a project in Vertex AI. Train, register, and deploy a machine learning (ML) model using Vertex AI. Keep track of data history and version, ensure resource shutdown, and monitor an ML model for performance and quality. Learn how to train and manage machine learning models using Vertex AI, the MLOps cloud solution designed by Google. Join instructors Archa

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud) | 1h 38m | Intermediate | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learning Vertex AI](#learning-vertex-ai)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to MLOps**](#1-introduction-to-mlops) (4 videos)
  - [MLOps lifecycle: ML development](#mlops-lifecycle-ml-development)
  - [MLOps lifecycle: Training](#mlops-lifecycle-training)
  - [MLOps lifecycle: Deployment](#mlops-lifecycle-deployment)
  - [Vertex AI walkthrough](#vertex-ai-walkthrough)
- [**2. Feature Engineering**](#2-feature-engineering) (2 videos)
  - [Vertex AI feature store](#vertex-ai-feature-store)
  - [Vertex AI data labeling](#vertex-ai-data-labeling)
- [**3. Training and Hyperparameter**](#3-training-and-hyperparameter) (4 videos)
  - [Vertex AI AutoML](#vertex-ai-automl)
  - [Vertex AI experiments](#vertex-ai-experiments)
  - [Vertex AI model registry](#vertex-ai-model-registry)
  - [Vertex AI training](#vertex-ai-training)
- [**4. Model Serving and Deployment**](#4-model-serving-and-deployment) (3 videos)
  - [Vertex AI prediction](#vertex-ai-prediction)
  - [Vertex AI TensorBoard](#vertex-ai-tensorboard)
  - [Vertex AI endpoints](#vertex-ai-endpoints)
- [**5. Model Monitoring and Management**](#5-model-monitoring-and-management) (2 videos)
  - [Vertex AI model monitoring](#vertex-ai-model-monitoring)
  - [Vertex AI pipelines](#vertex-ai-pipelines)
- [**6. Deploy Your Project Using Vertex AI**](#6-deploy-your-project-using-vertex-ai) (2 videos)
  - [Challenge: Deploy a project](#challenge-deploy-a-project)
  - [Solution: Deploy a project](#solution-deploy-a-project)
- [**Conclusion**](#conclusion) (2 videos)
  - [Vertex AI vs. other MLOps platforms](#vertex-ai-vs-other-mlops-platforms)
  - [What next?](#what-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning Vertex AI](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/learning-vertex-ai?u=76281980&t=0)** - [Archana] It is time to stop building castles in the cloud and start investing in scalable and sustainable [[MLOps]] systems. Join us in our exciting new course on [[Vertex]] AI, where you will learn about the entire MLOps lifecycle from development to deployment. You will dive deep into [[Feature Engineering]] with feature store and data labeling, explore cutting edge training and hyper parameter tuning techniques with AutoML and experiments, and easily deploy your models using Vertex AI prediction and endpoints. You will even get an hands-on experience with a challenging project and learn how to monitor and manage your model with Vertex AI and its powerful tools. Best of all, you will discover how Vertex AI stacks up against other MLOps platforms, and what's next for the future of machine learning. Let's get started today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (4), [[MLOps]] (3), [[Feature Engineering]] (1)
> **Speakers:** - [archana] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-you-should-know?u=76281980&t=0)** - [Instructor] If you're considering taking this [[Vertex]] AI course, here are some prerequisites that is good to have. It is important to have a solid understanding of machine learning concepts, including supervised and unsupervised learning, [[Feature Engineering]], model evaluation and deployment. You should be comfortable with [[Python (Programming Language)|Python]] programming, including the ability to write, read, and modify code. Familiarity with libraries such as NumPy, [[Pandas (Software)|pandas]], Matplotlib, and scikit-learn will also come in handy. You should have a basic understanding of [[Cloud Computing]] concepts, such as [[Virtual Machines]], containers, and [[Cloud Storage]]. While not required, experience with popular machine learning frameworks, like [[TensorFlow]] or scikit-learn, can give you a head start. Having a solid foundation in these areas will make it easier for you to understand and apply these concepts and techniques taught in the Vertex AI [[MLOps]] course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (2), [[Feature Engineering]] (1), [[Python (Programming Language)|Python]] (1), [[Pandas (Software)|Pandas]] (1), [[Cloud Computing]] (1)
> **CLI Commands:** python (1), make (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Introduction to MLOps

[↑ Back to Table of Contents](#table-of-contents)

#### [MLOps lifecycle: ML development](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=0)** - [Speaker] Welcome to the exciting world of [[MLOps]] building blocks. As a student, you may be wondering what is MLOPs and why is it important? Well, MLOPs refers to the standards in practices used to build, deploy, and monitor ML systems. In simpler terms, it helps to ensure that machine learning models are not just accurate but also reliable, scalable, and ethical. These practices not only help to form the continuity of ML models in production but also offer firstly, robust ways to tackle changes in the system, including changes in data or deployment devices over time. Secondly, they help to scale ML systems to accommodate more users and data over time. Thirdly, they establish [[Ethics]] for model fairness in different teams, which means different teams can follow a single standard of what it means for the system to be fair in terms of data, model and outcomes. It also ensures shorter time to market through shorter development cycles and timely pace of different blocks of the system. This brings us to MLOPs lifecycle and looking into each of the block through a magnified lens.
>
> **[1:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=92)** And most importantly, what questions do we need to ask at every stage of the cycle? The first step to building machine learning system is to work on experimentation. This means to form a continuous pipeline which supports data, model, and code changes. So this is the step of ideation, collaboration and defining the problem statement. There are several types of team members involved in this step. Right from AI engineers, data scientists to infrastructure engineers. Some of the questions the team need to decide upon and what values are we trying to predict? What is the evaluation metric? Do we need to apply regression or classification to this problem? Where do we get the data from? Do we need realtime data? What is the vision for [[Data Collection]] or processing in the future? Do you need to retrain your model? If so, then the model needs to be reviewed and deployed regularly. Most of the steps followed in ML development might be iterative in manner. The data scientists might also wish to experiment with new data and models. Apart from that, the team needs to set up some vital resources like dataset and feature repository. This is to store the data
>
> **[3:06](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-ml-development?u=76281980&t=186)** and features processed from the data. Secondly, model registry. This is to maintain the type of models used during development. For example, let us say a data scientist might choose an ImageNet model for [[Computer Vision]] task and later on choose a mobile net model instead. The registry will serve to store and record iterations of model prototypes. ML [[Metadata]] and artifact repository. This can be used to store your model evaluation metricsk hyper parameter, training and testing split used. And finally, [[Version Control]]. This is to make sure there is a pointer to the current version being used by the system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (4), [[Ethics]] (1), [[Data Collection]] (1), [[Computer Vision]] (1), [[Metadata]] (1)
> **Definitions:** refers to (1), is a  (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [speaker] (1)

#### [MLOps lifecycle: Training](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=0)** - [Instructor] Machine learning is about creating intelligent systems that can learn from data and make predictions or decisions. But as you move from ever ML development to ML engineering, you face new challenges and opportunities. [[MLOps]] for training has two core components: training operationalization, and continuous training. Let us dive into each of them and see what they involve. During training operationalization, you set up a pipeline to complete the training and testing process. But before we do that, it is important to ask ourself a few set of questions. Firstly, how often should we run the training and the testing of models? How many computing resources should we assign to this pipeline? What fallback options do we have to use if the testing of the model fails? For example, imagine you are building a recommendation system for an [[E-Commerce]] website. You must run the training and testing pipeline periodically to update your recommendations based on new user data. You also need to ensure you have enough computing resources to handle spikes in traffic during busy periods such as Black Friday. With continuous training,
>
> **[1:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=94)** you need to track the pipeline you created with training. This involves answering questions like, how often should we schedule runs on our system? Should we set a threshold for data retrieval? For example, if the data for prediction is above a certain threshold where the model cannot predict correctly, we need to trigger the training process. Do we want the pipeline to be automatic? If so, we need to implement [[Data Validation]] steps to check for data drift or drastic changes in the data. For example, you are building a fraud detection system for a financial institution. You need to continuously monitor your system for any new fraud patterns and update your models accordingly. Finally, imagine a scenario where your train model does not behave as expected. You need to find a way to capture all the details from the input data and evaluations along the pipeline. This is where the importance of tracking and logging comes in. Overall, ML engineering is a fascinating and challenging field that requires deep understanding of machine learning [[Algorithms]], [[Data Pipelines]], infrastructure, and software engineering. With [[Vertex]] AI, you have a powerful and easy-to-use platform that can help you build,
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-training?u=76281980&t=190)** train and deploy your models at scale.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (1), [[E-Commerce]] (1), [[Data Validation]] (1), [[Algorithms]] (1), [[Data Pipelines]] (1)
> **Analogies:** for example (3), imagine (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [MLOps lifecycle: Deployment](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=0)** - [Instructor] The final piece to the [[MLOps]] lifecycle is deployment. Let us break down the different parts of this deployment. Once a machine learning model has been trained and validated on an initial data set it is time to deploy it into production. This is where the deployment stage of MLOps lifecycle comes in. Let's break down the different parts of this stage. The first step is to deploy the trained and validated model. This is typically done by storing the model in a model registry where it can be easily accessed for testing and deploying. The model registry is a central location where all versions of the model are stored. From the registry you can [[Fetch]] the registered model, run it through testing phases to ensure it's ready for deployment. Testing can be done in variety of ways depending on the organization's needs. For example, you can randomly test the model on any data. Alternatively, you can dynamically allocate test data to the model to reduce uncertainty and save time. Once the model has gone through testing it's ready for deployment. Before deploying the model, it is important to test how it compares to the model ready in production.
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=96)** In the [[Google]] Guide to MLOps white paper they suggest running the current model in parallel to the new model and then testing which model performs better. This is called A/B testing. Overall, the deployment stage is an essential part of the MLOps lifecycle. It involves deploying the trained model, testing it, comparing it to the model already in production, and serving new predictions based on incoming data. By following best practices and defining data and features, teams can ensure the success of their machine learning models in production. When you build a machine learning model, the ultimate goal is to use it to make predictions on new data. In order to do that, you need to set up a system to receive the new data and perform the model testing on them. This is known as prediction serving. Imagine your model is making realtime predictions in a mobile app, predicting what music you might like or what [[Microsoft Products|products]] you want to buy. So what will it look like? There are different ways to serve the model, like an embedded system. The model can also be in an embedded system, such as a mobile app or sensor. Or else the model can be served through the [[Representational State Transfer (REST)|REST]] API
>
> **[3:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=192)** that other applications can access. When working with large ML systems with many team players it is important to ensure that the training data and the testing data are consistent. This is where data set and feature management come into play. Teams need to lay down rules that define the data and its features to ensure consistency. Have you ever wondered how social media sites automatically tag you in photos or such as friends for you to add? It is all thanks to the power of ML models running in the background. [[Continuous Monitoring]] is a vital aspect of ML systems. Contrary to popular beliefs, models are only a part of the pipeline and they need to be actively checked and tested. As a person taking care of these ML systems you can expect data drift to happen, wherein the input data changes over time. This will cause other parts of the pipeline to change like features, training and evaluation of model. Eventually, this can cause the model to give wrong prediction and cause system failure. To prevent this, you need to monitor your models regularly. Hear how it's done. A sample of the request response payload is captured and stored in the serving log store.
>
> **[4:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/mlops-lifecycle-deployment?u=76281980&t=287)** The monitor engine periodically loads the latest inference log generating a schema and compute [[Statistics]] for the serving data. The monitoring engine compares the generated schema to reference schema to identify with schema SKUs and compares the computed statistics to baseline to identify the distributed SKUs. If the true label for the serving data are available the monitoring engine uses it to evaluate the model's predictively effectiveness in hindsight on the serving data If anomalies are identified, or if the model's performance is decaying, alerts can be pushed through various channels. For example, email or chat to notify owners to examine the model or to trigger new retraining cycle. Continuous monitoring ensures that your ML system stays up to date and provides accurate predictions. Overall, prediction serving and continuous monitoring are crucial aspects of ML systems that ensure accurate and efficient model performance over time. By understanding and implementing these concepts you can create powerful and effective ML models that drive real world impact.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (4), [[Continuous Monitoring]] (3), [[Statistics]] (2), [[Fetch]] (1), [[Google]] (1)
> **Definitions:** is a  (2), is called (1), is an  (1), known as (1)
> **Analogies:** for example (2), such as (2), imagine (1)
> **Env Vars:** rest (1), api (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Vertex AI walkthrough](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=0)** - [Instructor] Now that you know the basics of [[MLOps]], let us take a look at [[Vertex]] AI, which is an MLOps platform by [[Google]]. After opening your GCP console, you can search for Vertex AI and open it. You should now see your Vertex AI dashboard. If this is your first time opening Vertex AI, it'll probably be empty. As you progress through this course, you'll find the dashboard increasingly useful to glance at all things running in Vertex AI. This includes models you are training, endpoints you have deployed, and data sets you have created. Don't worry, we will learn how to do all of this soon. In this course, we will be using Jupyter Notebooks to learn these concepts and build projects. It is also important to note that Vertex AI is a paid service. If you follow along with the course exercises you will incur charges. Remember to run the last cell in the Jupiter notebook, to shut down any resources that you create. So the first thing we will learn is how you can create a Jupyter Notebook workspace in Vertex AI. Move to the Workbench tab and click New Notebook. You are given many options to choose from. For this course, a simple [[Python (Programming Language)|Python]] three
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=96)** notebook instance will be enough, so click that. Give it a meaningful name. You can keep the [[Representational State Transfer (REST)|rest]] of the options in their default value. You can see the notebook will be created in an instance with four CPUs and 15 GB of memory. Next, click Create. This creation process will take some time. After the instance has been created, you can look at the Open Jupyter Lab button. You should see a few folders present already. These will have some sample notebooks that you can take a look later. I suggest that you create a new folder for your coursework. Now you can start creating new notebooks and working on Vertex AI. Another tool that we will be using is Google BigQuery, which is a database used to store tabular data. You can open BigQuery by searching for it at the top. You can see that I already have a few tables created. For each table, you can get the schema information for the table. You can click the preview button,
>
> **[3:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-walkthrough?u=76281980&t=191)** to view a subset of the table. In this table, you can see data about different species of penguins. By the end of the course, you will be able to train a model on this dataset, deploy that model to an endpoint, and query the endpoint to get a prediction. Another database we will be using is [[Google Cloud Platform (GCP)|Google Cloud]] storage. Unlike BigQuery, which can only store tabular data, in [[Cloud Storage]], you can store files like images, PDF documents, and model files. Cloud storage data is divided into buckets. In this bucket, you can see some of the models I have trained previously. In a later lesson, you will see how you can track different models you have trained, and deploy the best performing model. This was a quick overview of the different tools we will be using throughout the course. Next, we will see how you can use feature store in Vertex AI to store training data for our model. Let's go!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (9), [[MLOps]] (2), [[Google]] (2), [[Cloud Storage]] (2), [[Python (Programming Language)|Python]] (1)
> **Tools:** jupyter (3), gcp console (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), python (1)
> **Env Vars:** gcp (1), pdf (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### 2. Feature Engineering

[↑ Back to Table of Contents](#table-of-contents)

#### [Vertex AI feature store](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=0)** - [Narrator] The idea behind the [[Vertex]] AI Feature Store is collectively store, organize features and collaborate on these with your team members. So let us start with a fundamental question. What exactly is a feature? Features are measurable properties of your data. Let us take an example of a [[Computer Vision]] project. What is the feature of the image? It is the edges and objects. What if you had a number-based data like predicting what movies a user might see? In this case, the user's features will be age, gender, country, et cetera. The movie's features, on the other hand, will be rating, genre and title. If you had an audio data, what would the features be? You would look at the length of the sounds, pitch, noise ratio, et cetera. Once you have identified features in your data, you will likely want to process them in some way. For example, combining, filtering or deducing new features from old ones. This is where Vertex AI Feature Store comes in handy. So why would one use the Vertex AI Feature Store? With the Vertex AI Feature Store, you can track when features are added and search for and monitor them over time. Furthermore, it unifies the storage of features through different [[Databases]] like BigQuery or [[Cloud Storage]].
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=97)** It helps to reduce training skew. Using this Feature Store, you can ensure that the exact value of a feature is used for training and testing, and most importantly, when you see a data drift happening, it helps to detect that through history of log of timestamps. Let us look into using this Feature Store. Let us create a Feature Store of users who rated movies. Remember, the feature here for the user can be gender, user ID, country, et cetera. Let us create a Feature Store for such a database. To create a new Feature Store, we need to specify the ID or the name of the Feature Store. Then we need the project ID and then finally, the location. Next, we need to create an entity. I've created an entity for users. For each entity, we need to specify some features. Below, I've added age and gender to our user entity. You also need to specify the value of the entity. We can add new features from BigQuery, a CSV file, or even app [[Pandas (Software)|pandas]] data frame. Below is a code sample to add data using pandas. We need to specify the columns from the data frame. We need to add the source DF, and the entity field.
>
> **[3:14](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=194)** You can also specify a time. This can help version your data. Let us now see what the Feature Store will look like in the console. To see your Feature Store, you can navigate to the Feature Store tab. Remember that different Feature Store can have the same entity type and features. However, their name will differ. Here I've created a Feature Store for the Iris dataset. After clicking on the Feature Store, you can see some of it stats like the latency of the Feature Store and how many queries your Feature Store is receiving. Next we can see the entities we have created for Feature Store. Here we have one entity for species, which has two features, the sepal length and the sepal width. For each feature, we can see its details like data type, when it was created and last updated. We can also see the jobs that are adding new values for this feature. To do that, navigate in the Ingestion Jobs tab. Here, we can see one job that added 150 values. You can also see other [[Metadata]]
>
> **[4:52](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-feature-store?u=76281980&t=292)** like the time it took to run the job and the source of the data. Now, there may be instances where adding a Feature Store to your team might not make sense. For example, you need to pre-process your data only once. In this case, you can use the transform function in your model code to pre-process the data. This transform is present as a clause in BigQuery or can be picked up from the TFX of [[TensorFlow]] models or let us suppose you do not need to compute your feature. If you need to use most of your features directly, without performing any calculations or compute on it, the Feature Store will be less helpful for you. In summary, the Vertex AI feature store is a powerful tool for collaborating with team members, organizing and processing features, and ensuring that your models are based on accurate and up to date data. So why not give it a try?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (5), [[Pandas (Software)|Pandas]] (2), [[Computer Vision]] (1), [[Databases]] (1), [[Cloud Storage]] (1)
> **Definitions:** is a  (3)
> **Env Vars:** csv (1), tfx (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [narrator] (1)

#### [Vertex AI data labeling](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=0)** - [Instructor] Let us talk about the exciting world of data labeling. It's a crucial step in ensuring your machine learning model is top notch and delivers accurate results. Here are some cool facts you need to know: Labeling is done for supervised ML models and tasks such as classification. Training data is the key to a successful model, so make sure it's diverse and of high quality. Continuous loop of adding new data ensures the model's prediction don't drift due to changes in input data and continue to generalize. Feeding the model with properly labeled data is key to increasing its accuracy. Imagine a large [[MLOps]] system with people labeling data sitting in the data pipeline. [[Vertex]] AI helps you to work with people labeling data and integrate the work into your model's training. For doing so, they offer a guideline to successfully label and manage them through [[Google Cloud Platform (GCP)|Google Cloud Platform]]. The first step to labeling the data is to provide good quality labels. Following are some suggestions for creating suitable labels. Firstly, only have a few labels for your defined dataset. After all, in this scenario, you have people labeling data,
>
> **[1:33](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=93)** so it is better to leave them with only 20 labels at a time. You would only have more inaccuracies and biases creep in if you increase the labels. Give proper name to your labels, don't make labels like label_1, 1, 2, et cetera, it would only confuse the people labeling data. Lastly, also, make sure to have a label with none or maybe other so that they can use it when it does not match any of the given labels. Once you have defined that you need to create instructions for people labeling data in Vertex AI. These instructions are uploaded as a PDF file. A typical instruction file should have the following: A list of labels with good examples so it is clear to people labeling data. Have a list of cases where it might be confusing to label the data. These edge cases can be listed as FAQs. Finally, a detailed explanation for the steps of annotating data. Now, let us jump right into a simple labeling task and also see what Vertex AI has to offer. First, you need to click Labeling Task on the left side menu, and then click Create. Next, you will need to provide a name for the task
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=190)** and choose the dataset that you created. In my case, I created a simple dataset with images of cats and dogs. Depending on your use case, you might want to use active learning. This will make your labeling process faster by using a model to label some of the data. The next step is to provide the labels. Since my data has images of cats and dogs, I will give those labels as well as background label called None. Next, you need to upload the instructions of your labeling tasks. The instructions must be present in the [[Cloud Storage]] bucket. In this last step, you can choose whether you want to use [[Google]]'s in-house data labeling team or your own. You can choose how many people you want to label each image. The more people labeling data you have for each image, the more confident you can be of its label, and it'll reduce biases or mistake. However, it'll also take more time and be more costly. If you choose to use your own team members, you need to specify which team you want to use, and a manager who will oversee the labeling job. Now we can finish creating a labeling task. This might take some time to set up.
>
> **[4:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=286)** Once the labeling task has started, this is what it'll look like. You can see here images that have not been labeled, let us choose one of them. Now, we can assign a label and click Save. The critical question we must ask ourselves, "Will data labeling be a valuable team for my team and my project?" To answer that, it is essential to define, firstly, the budget of the project. Check out the current pricing of data labeling on Vertex AI: Can my project afford this, or can I work with creating a label system of my own? How large is your team? If you initially hired a large number of people to label your project, would you need to have them every time new data is added to the model? If so, then Vertex AI offers a great platform to manage them. Do you envision your project dealing with new data? Let us say you have a small data set with only five labels and you don't envision these labels increasing or the dataset expanding, then data labeling might not be the right fit for you. You can consider using opensource alternatives like CVAT to labeling in case you already have an in-house team or a small budget for data labeling. However, do be aware
>
> **[6:20](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-data-labeling?u=76281980&t=380)** that you will have to deploy these tools on your own and manage how your users access these tools. This may bring additional development, efforts, and costs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (5), [[MLOps]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[Cloud Storage]] (1), [[Google]] (1)
> **CLI Commands:** make (4)
> **Env Vars:** pdf (1), cvat (1)
> **Analogies:** such as (1), imagine (1)
> **Prerequisites:** set up (1), you need to have (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 3. Training and Hyperparameter

[↑ Back to Table of Contents](#table-of-contents)

#### [Vertex AI AutoML](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=0)** - [Instructor] Now that we have covered your data needs, let us jump into the model training and selection for your project. There are two ways in which you can train your model in [[Vertex]] AI, either through AutoML or through custom training model. When would you choose AutoML or the custom training model? To answer this, you need to interspect your labels. Are the labels fitting into pre-trained classification schemes or are the labels customized for your particular problem? If it is the latter, you need to use custom training model. If not, you can use AutoML. Once the data is ready and labeled you can train your model with AutoML, splitting the data between training, testing, and validation. It uses a 80-10-10 split for your data. You can also choose to adjust your data manually. The test set is not involved in training. You need to click on evaluate to see the complete analysis of the model's performance on the test set. By clicking on the models on the right hand side tab you will get the following metrics in your result. Model output. This output is label scores for classification and loss values for regression-based model.
>
> **[1:39](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=99)** Score threshold. It helps you to understand if the model is performing overall well. If the value is low, it indicates that the model is classifying images incorrectly. Whereas if it is high, it means it classifies fewer images but has a lower risk of misclassifying images. It gives us the value of true positives, false positives, and false negatives. Finally, it gives us the average precision and recall value. But what would you do with these precision and recall values? Your ML models can end up learning your data or not learning enough from it. To achieve the balance of generalization, precision and recall come into play. Precision identifies the data which is relevant to the model, whereas recall helps in understanding how many of those data points that the model accurately define. Ideally, you want precision and recall to be high, but it is challenging to achieve that balance. So the output threshold tool can be dragged on the slider to affect the precision and recall trade off you would want to achieve. Confusion matrix is also displayed and it tells you was the label correctly identified with the blue color? Let us jump into Vertex AI walkthrough. To train an AutoML model we first need to create a dataset
>
> **[3:18](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=198)** to train our model on. To do that, you can navigate to the Datasets tab and create a new dataset. We will be using the Iris dataset for this lesson which is a tabular dataset used to classify between different species of flowers. Next, we need to upload the data to our dataset. You can either upload from your compute or specify a [[Cloud Storage]] bucket. Now we train our model. To do that, click the TRAIN NEW MODEL button, select Other, and confirm the selected dataset is correct. Choose the classification and then mention the target column which in our case is species. Here you can also add new features and change how the different column data should be interpreted. In the pricing tab, choose one to limit your training costs. Now we are ready to start training. Once the model is trained, you can view the training results to verify your model's performance. Next, we can deploy the model. Since the training the model will take some time, we can deploy a model that has been trained previously.
>
> **[4:54](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=294)** Choose one in minimum compute node and select the smallest deployment endpoint n1-standard-2 to reduce cost. We will learn more about endpoints in a later chapter. You are now ready to deploy the model.
>
> **[5:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=322)** After the model is deployed you can send a sample prediction by going to the Test section of your model.
>
> **[5:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=335)** Here you can see the sample data you can test with. If you are happy with the values, you can press to predict and get the result. After this, you can shift to the DEPLOY tab to use the model. You can deploy it to a [[Representational State Transfer (REST)|rest]] endpoint or have the request returned to a [[JSON]]. Something that stands apart in Vertex AI is that it allows you to make a simple prediction in the DEPLOY tab itself. You can also deploy them directly to our applications like phones using the [[Python (Programming Language)|Python]] code to call the cloud-hosted model from our application. Let us come to the final section of vendor's AutoML not make sense for your team or your project. While Vertex AI AutoML can be a powerful tool for automating and accelerating the machine learning process, there are some scenarios where it may not be the best choice. Here are some situations when you might want to consider other option. Vertex AI AutoML requires large datasets to train machine learning models effectively. If you have a small dataset you may not be able to generate accurate results using Vertex AI AutomML. Vertex AI AutoML automates much
>
> **[7:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-automl?u=76281980&t=430)** of the machine learning process which can be beneficial for some use cases, however, if you require more control over the model and its parameters, you need to build a custom solution or work with a data scientist. Vertex AI AutoML uses [[Google Cloud Platform (GCP)|Google Cloud platform]] infrastructure to train and deploy machine learning models. If you have specific [[Hardware]] requirements that are not supported, you may need to use a different solution. Vertex AI AutoML pricing is based on the number of training hours used for training and deploying model as well as the size of the dataset. There's a minimum charge of 10 training hours per model, and pricing varies depending on the machine type used for training. Additionally, there are charges for prediction requests and storage. Customers can choose to pay as you go or commit to a monthly plan for discounted pricing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (9), [[Cloud Storage]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[JSON]] (1), [[Python (Programming Language)|Python]] (1)
> **Env Vars:** deploy (2), train (1), model (1), json (1)
> **CLI Commands:** make (2), node (1), python (1)
> **UI Navigation:** click on (1), navigate to (1), select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Vertex AI experiments](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=0)** - [Instructor] By now, you have trained a few models either through AutoML or custom training. It is at this point that it becomes difficult for data scientists to manage their models. Remember what parameters they use for training, the data version, and also the results of those models. When developing a machine learning application, it is common for data scientists to go through multiple iterations of the model. They might use different data for training, change the parameters of the model, or change the model architecture completely. Experiment tracking is an essential component of [[MLOps]] that allows teams to keep track of various experiments they perform to develop and deploy machine learning models. The purpose of experiment tracking is to record the progress of ML experiments to make it easier for team members to collaborate, reproduce the result, share their findings, and make a decision of which model to deploy. To do so, we will use [[Vertex]] AI experiments. But first, let's talk about why is it important to track our ML experiments. Experiment tracking provides [[Version Control]] by keeping track of changes to the model its performance over time. This helps to avoid errors and consistency in the model and ensures that model is continuously improving. By controlling versions,
>
> **[1:32](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=92)** experiment tracking helps to maintain reproducibility by capturing all the details related to an experiment including code, data, parameters, and configurations. This allows team members to reproduce the results of an experiment, which is important for validating and improving the models. Tracking experiment details enables teams to monitor the performance of various models and identify the best performing one. This helps to optimize the ML models performance by identifying the best combination of parameters and configurations. Experiment tracking also enables teams to iterate faster and help in collaboration as they can view the history of experiments Compare results and share insights which help to accelerate the development and deployment of ML models. This helps to reduce the time and effort required for developing and deploying them. In conclusion, Vertex AI experiment is a service that helps you compare these models using variety of tools and techniques. It's like a playground of your models. With Vertex AI experiments, you can track the steps of an experiment learned like pre-processing and training. Vertex AI also reports back with some key metrics and visualization that you can use to better make a decision as to which model to use in your product. Firstly, it gives you summary metrics.
>
> **[3:07](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=187)** This gives you the overall score and metric of your model. It can be accuracy or loss, or even an F1 score. Time series metrics. Some metrics like the loss function are collected over time so this is a form of time series metrics which are stored in the tensor board instances of Vertex AI. For example, you can check MSE and RMSE score over time on the tensor board. Classification metrics, for classification metrics, you can use a confusion metrics present in the [[Metadata]] section. This is a useful visualization to see performance gaps or biases in your model. The first step to using experiment is to create an experiment in Vertex AI. To do so, you'll need to specify the experiment name, the project, and location. For instance, you can specify the application you're building or the model architecture or data set you're experimenting with. Each experiment can contain many runs. For example, a run can be associated with a different model and architecture, a different dataset, a different model configurations, and so on. Use the start run method to create a new run. For each run, you need to provide a name. You should be descriptive here and provide a meaningful name that will help you remember what changes you have made. Logging metrics to run is very simple. You need to use the log metrics method to do so. Here, metrics need to be a key value pair,
>
> **[4:43](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=283)** where key is the name of the metric you want to log and value as a result you want to log. You can also automatically log metrics by using auto log function. Remember to disable logging after the model has finished training. Once the run is over, you need to end it. You can do that by using the end_run function. This is it. It's very simple to set up, but will go a long wave in developing multiple ML models. Let us see what it'll look like in the dashboard. First, you need to click the Experiment tabs on the left. Next, you can open an experiment. You can see I have five runs in this experiment. The table also displays the configurations of each run as well as the training result. This makes it easy to train to see how different configurations are affecting the final result of the model. In a later lesson, we will see how you can use TensorBoard to get more powerful visualizations for each run. In conclusion, experiment tracking is a crucial component of MLOps that can help your team collaborate and develop and deploy models more efficiently to improve performance of your machine learning models. Vertex AI experiments offers a user-friendly and a powerful way to do just that. By using that, you can keep track of your model,
>
> **[6:17](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-experiments?u=76281980&t=377)** log metrics and ultimately make better decisions about which models to deploy. So why not give it a try and see how it can improve your machine learning workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (7), [[MLOps]] (2), [[Version Control]] (1), [[Metadata]] (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (2), it's like (1), for instance (1)
> **Env Vars:** mse (1), rmse (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Code Identifiers:** end_run (1)
> **Best Practices:** remember to (1)

#### [Vertex AI model registry](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=0)** - [Instructor] A lot of work that data scientists perform is on realtime data or the data that changes often. A single model is usually not good enough to generalize across this changing data. To counter this, data scientists usually create multiple model. These models will differ not only in the configurations and parameters, but also on what data they were trained on, how long they were trained for, and even the model architecture. How many times have you ended up in a situation where many model files are available but you don't know which points to the one currently being used or one in development or the one train or the latest subset of data? Luckily, [[Vertex]] AI has re introduced a Model Registry to store models and control their versions. These versions can also be linked to an experiment run, which can help you track your model throughout its lifetime. Here are some features of the Vertex AI Model Registry. With Vertex AI Model Registry, you can easily manage different versions of your trained model. This makes it easy to keep track of changes and to roll back to previous version if needed. Once you have trained and versioned your models, you can easily deploy them to production. Vertex AI Model Registry allows you to deploy models to various endpoints, including online prediction,
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=96)** batch prediction, and custom endpoints. We will learn more about prediction in a later lesson. Vertex AI Model Registry also includes powerful monitoring tools that help you track performance of your deployed model. You can easily view metrics like latency, error rate, and throughput, and use this data to decide whether to retrain or update your model. Finally, Vertex AI registry includes advanced access control features that allow you to control who can access and modify your models. You can also set up granular permissions with different users and groups and track all changes made to your model. In addition to these features, Vertex AI Model Registry integrate seamlessly with other tools in the Vertex AI suite including experiments in pipelines. This allows you to build an end-to-end machine learning works spanning the entire [[MLOps]] pipeline including [[Data Preparation]], model training, and model deployment. Overall, Vertex AI Model Registry is a tool for anyone working with machine learning models whether you are a data scientist, machine learning engineer, or a developer. However, if you have a small scale team with limited resources and budget, you might want to check the pricing of Vertex AI Model Registry. There is no direct price to store the models,
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=190)** but do remember when you deploy to an endpoint, a cost might be incurred. This depends on the type of machine you're using, which region you are using it out of, and the amount of RAM needed. Storing a new model in Vertex AI and creating a new version is super easy. For each run, you need to specify a module version alias which can be a string and a description for the model. For each model, you can specify which model is default. You can do that using the is_default_ argument parameter. But what if you want to create another version for the same model? Well, in that case, you need to specify the parent model parameter. The parameter needs to be named of the original model for which you want to create a version. In case you have pre-trained model that you want to store in Model Registry, you can do that using the upload method. You will need to specify the same details you did if you were training in Vertex AI. In addition, you can also specify a display name for the model. Let us see what this will look like in a Vertex AI dashboard. To view your models, you can go to the Model Registry. Here, you can find all the models you have trained.
>
> **[4:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-registry?u=76281980&t=285)** If you click one, you can see all the versions for that model. You can also change the default model to a different one and see if the model has been deployed to an endpoint. We will learn more about deployment in a little lesson. From here, you can compare the performance for both models and use it as batch prediction or deployed to an endpoint. You can see details of each version, like the Model ID, the job details, where the model artifacts were stored, and the configurations used to train the model. Overall, the Model Registry in Vertex AI provides users with a centralized [[Version Control]] and collaborative environment for managing tracking their machine learning models, and you should definitely use it as part of your MLOps workflow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (14), [[MLOps]] (2), [[Data Preparation]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** ram (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Vertex AI training](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=0)** - [Instructor] Now that we have looked into how to train our model using AutoML, let us check out how to do custom training in [[Vertex]] AI. Let us target our usual question of why. So why do we need to do custom training in Vertex AI? When dealing with larger models, you need a powerful infrastructure to support their training. Secondly, you should be able to identify any bottlenecks in your training performance. Then you should have the necessary computing in the form of CPU, GPU, or TPU nodes available to submit your training job. Lastly, your data should be secure and isolated in the case of any risk. Starting a training job in Vertex AI is very easy. The first step is to define your custom training job. To do that, you will need to give a name for your job. This will later help you track your job and view its results, so make sure you give a meaningful name. Next, you will need to create a script for training your model. Here, I've saved it as task.py file. Next, you need to specify a container for training your model. Vertex AI provides many pre-built containers. Here, I've used one of them that uses [[TensorFlow]] 2.8. If the containers has certain package missing,
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=97)** you can specify them in the requirements argument and Vertex AI will install them. Now, we are ready to run a training job. To do that, you have to call the run method. Here, you will need to specify the data set you want to use. In case you are using a BigQuery table, you can specify the path to that BigQuery destination parameter. You can specify splits of your data as well. If no splits are set, by default, 80% of your data will be used for training, 10% for validation, and 10% for test. You also need to specify a name for your model. Again, remember to give a meaningful name for easier tracking. Finally, you can specify extra command line arguments you want to pass to the training script using args method which need to be a list of strings. The run function is blocking, so you must wait until the training is completed to do something else. But how will your model know where the data is stored? Well, Vertex AI will pass the values you specified for your dataset as environment variable to your training script. So your training script will need to read that environment variable.
>
> **[3:10](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=190)** Below, you can see different environment variables for the different splits of your data. Now, let us look at Vertex AI. To see the models you have trained, go to the Training tab. Here, you can see the status of the models you are training, the time it took to train the model and other [[Metadata]]. If you open a model, you can see more details about the model, like the type of machine and container used for training, the arguments you pass to the model, and the location where the model artifacts are saved. In later lessons, we will learn how we can use [[MLOps]] standards and best practices like model registry, monitoring, pipelines to deploy a model and set up alerts when things go wrong. When it comes to pricing, Vertex AI offers two type of pricing for custom training: training on demand, and training with usage-based pricing. Training on demand is simpler pricing model where you can pay for the compute resources used during training job based on the duration of the training job and the machine type used. On the other hand, training with usage-based pricing is more flexible
>
> **[4:44](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-training?u=76281980&t=284)** and cost effective pricing. It allows you to pay for only what you used based on the number of training units consumed during the training job. A training unit is a combination of CPU and GPU usage and you can choose the number of training units based on the size and complexity of your model. In conclusion, Vertex AI offers a powerful and flexible infrastructure for custom training machine learning models with pricing models that suit different needs and budgets. By leveraging the resources Vertex AI provides, you can easily train complex models with high accuracy and efficiency. With its customer customizable and secure infrastructure, Vertex AI training is a great choice for business and individuals who want to scale their machine learning projects while keeping cost in check.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (11), [[TensorFlow]] (1), [[Metadata]] (1), [[MLOps]] (1)
> **Env Vars:** cpu (2), gpu (2), tpu (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), set up (1)
> **File Paths:** task.py (1)
> **CLI Commands:** make (1)
> **Versions:** 2.8 (1)
> **Tools:** command line (1)


### 4. Model Serving and Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Vertex AI prediction](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=0)** - Welcome back to the exciting world of [[Vertex]] AI. In this lesson, we will dive into how to deploy your trained [[Deep Learning]] model to make it easy for people to use. Once deployed, people can query the model and get a response, which is where Vertex AI Predictions come in. So far, we have seen how you can train a deep learning model using Vertex AI. The model you have trained is now stored in a database. In this lesson, we will deploy it to make it easy for people to use your trained model, and, once the model has been deployed, people can send a query to the model and get a response. You can deal with query your model receives in two ways. Firstly, you can batch multiple requests and then send them to your model simultaneously or create a real time system where requests are sent to your model and processed as they arrive. Depending on which prediction architecture you choose, batched or real time, how you deploy your model will also change. Prediction, batch prediction is one of the most common ways in which models are deployed. Setting up batch prediction infrastructure is easy and cheap, since you do not need to set up a dedicated server
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=96)** to perform prediction. However, do remember you cannot get an immediate response for a request when using batch prediction. Instead, you need to collect a few requests before making a prediction. Similarly, if your input data is constantly updating, then batch prediction may not be the best option, since the output from the model will become outdated quickly. For instance, the recommendations in an [[E-Commerce]] website should change as the person views different kind of [[Microsoft Products|products]]. Such a system will need to generate new results quickly and is not suitable for batch prediction. This is not necessarily a disadvantage, since not all applications need an immediate response. For instance, you may be working on an application that sends clients daily recommendations by email or for popular articles to read. Since you send an email once a day, you don't need a dedicated resource to run your model all day. Batch prediction is also better when your application needs to process large amount of in a short burst. For instance, you want to test your model's performance on an external data set to see if your model generalizes well. Let us see what would a simple
>
> **[3:12](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=192)** batch prediction model architecture look like? Well, first, your application would need a way to store the input data of your model. Input data could be generated by your customers, or by some other application, or by sensors. You can save the input prediction data into BigQuery or storage packets. Next, you need to find a way to start your batch prediction job. A common way to do this is to use Cron to schedule batch prediction jobs. Another way would be to wait 'til a certain number of input data is received and then start a trigger to start running your batch prediction job. Finally, you will need to store the result of your model. This can also be done in BigQuery or [[Cloud Storage]]. To create a batch prediction, you need to specify the following details to the batch prediction API, a name for your batch prediction job, the source of the prediction to request data, this can be either BigQuery or cloud storage buckets, the destination where you want to store the result, this should also either be BigQuery or [[Google Cloud Platform (GCP)|Google Cloud]] Storage Buckets. Remember that you need to provide
>
> **[4:45](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=285)** at least one source and destination, then the type of machine you want to use to run the prediction. Lastly, in addition, you need to specify if you want to use an accelerator, like GPU, and how many you want to use. Once your job has been completed, you can view the results in the destination Google Cloud Bucket you specified when creating the batch prediction job. To know if your job has been completed programmatically, you can use the wait method. You can also view the batch predictions job's [[Metadata]] like its name and state. To view the results of your batch prediction in the console, you can navigate to the batch prediction tab. Here, you can find batch prediction jobs. Once the status of your job is finished, you can open it. Here, you can see the location where the input data was picked up from, where the job started, and how much time it took to complete. The export location is where the results of the job are. Clicking it will take you to BigQuery where you can preview the prediction result for each sample. Now that you know how to deploy your models for prediction, you can use it to solve real world problems
>
> **[6:19](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-prediction?u=76281980&t=379)** with machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (3), [[Deep Learning]] (2), [[Cloud Storage]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[E-Commerce]] (1)
> **CLI Commands:** make (2), find (2)
> **Analogies:** for instance (3)
> **Env Vars:** api (1), gpu (1)
> **UI Navigation:** navigate to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - welcome (1)

#### [Vertex AI TensorBoard](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=0)** - [Instructor] So far, you have seen how you can train your model using [[Vertex]] AI and then deploy it using Batch prediction. Now, we will see how you can visualize your trained model and analyze its metrics. TensorBoard is a web-based visualization tool developed as part of [[TensorFlow]]. It helps you to visualize your model's architecture, track your model's training progress, and track its [[Performance Metrics]]. It can also be a helpful tool to debug your model. TensorBoard provides several advantages for developers and data scientists working on machine learning projects. Firstly, the TensorBoard helps you to visualize the architecture of your machine learning model, making it easier to understand the flow of data through the model and giving you an insight into how the model works. Secondly, with TensorBoard, you can monitor the progress of your model's training in real time, including metrics like loss and accuracy. This allows you to identify potential issues during training and adjust your model's parameters accordingly. By tracking the model's training progress, you can quickly identify when your model is overfitting or underfitting, and identify the optimal point for stopping the training.
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=97)** TensorBoard provides an easy way to compare multiple models trained on the same set. For instance, when doing hyperparameter tuning, you can visualize the performance of different models side by side, making it easier to identify the best model for your specific use case. With TensorBoard in Vertex AI, you can also create a shareable link to your TensorBoard dashboard. This can be used to quickly share results of your experiments in real time with stakeholders. TensorBoard is integrated into Vertex AI, making it easy to set up the dashboard any time to train a model. To create a new TensorBoard, you can use the following code and specify the name of your dashboard along with your project ID and the region. When you start training your model, you need to specify the name of the TensorBoard you have created. To make sure that your training script logs the results to the right TensorBoard, you need to specify the path to where the log data needs to be saved. This path is present in the AIP_TENSORBOARD_LOG_DIR environment variable.
>
> **[3:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=191)** For instance, if you're using Keras to train your model, you can use the tensorboard_callback with the environment variable to log into TensorBoard. Before we move ahead and see a walkthrough of TensorBoard, it is worth taking some time to talk about the pricing of TensorBoard. Unlike some of the other resources we have seen where the pricing is based on pay-per-use model, where you're charged only for the resource you use and the time you use it for, TensorBoard charges a monthly fee of $300 per unique active user. TensorBoard's features are great for [[Real-Time]] monitoring and visualizing your model's training. Its debugging features can also help improve the accuracy and efficiency of models which can ultimately lead to better business outcomes and cost savings. However, you should consider whether the pricing of Vertex AI TensorBoard is justified based on your specific needs and budget. For instance, you may not need a real-time monitoring of your training, especially if you're using smaller models, and you may not need to share your training results in a dashboard. With the pricing in mind, we want to talk about situations where it may not make sense to use a TensorBoard. For example, firstly, if you're using and working with simple machine learning model
>
> **[4:46](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=286)** that does not require extensive visualization or debugging, Vertex AI TensorBoard may be an overkill. In this case, a simple visualization tool or method may suffice. Or let us say you're working with a small dataset or if the data you're working with is not very complex. Vertex AI TensorBoard may not provide significant benefits over simple visualization tools. In this case, it may be more efficient to use simpler visualization methods. Also, let us suppose while Vertex AI dashboard can provide powerful insights into machine learning model, it may not be feasible for projects with limited budgets. In this case, you may need to use open-source or free visualization tools. Put simply, TensorBoard is a powerful tool, but if your application uses simpler and smaller models or dataset, it may not make sense to use TensorBoard. To see the TensorBoard dashboard associated with the model, you can go to the Experiments tab and click the OPEN TENSORBOARD button associated with the model that you have trained. Here, you can see the graphs that track the accuracy and loss throughout the training process. You can also click the GRAPHS tab and view the model's architecture.
>
> **[6:22](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-tensorboard?u=76281980&t=382)** In summary, TensorBoard is a powerful tool for visualizing and monitoring machine learning models. In Vertex AI, you can easily integrate TensorBoard into your training and deployment workflows to help you debug and optimize your models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (8), [[Real-Time]] (2), [[TensorFlow]] (1), [[Performance Metrics]] (1)
> **Env Vars:** aip_tensorboard_log_dir (1), open (1), tensorboard (1), graphs (1)
> **Analogies:** for instance (3), for example (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Code Identifiers:** tensorboard_callback (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### [Vertex AI endpoints](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=0)** - [Instructor] Hello and welcome to our lesson on how to use [[Vertex]] AI endpoints. Are you ready to learn about how to deploy your machine learning models, and get realtime predictions? Let's get started. To get realtime responses for requests from your model, we can deploy to Vertex AI Endpoint. You can think of an endpoint as a dedicated server hosting the model. You can specify the kind of resources you want the server to have like the number of CPU cores and memory depending on how much compute power your model needs, and how many requests you can expect the model to get. While deploying models to an endpoint is easy, it's more expensive, however, its benefit, and if applications that need quick and timely prediction responses. For instance, you're running an [[E-Commerce]] website, and want to suggest related [[Microsoft Products|products]] to users based on their viewing history. You want to update the recommendation quickly as they navigate your site, and show the results to your users. Since endpoints are real time, this is a perfect scenario to use them. While Vertex AI endpoints are a powerful tool for getting realtime responses for requests from your model, there are situations where they might not be the best choice. Here are some scenarios where you may not choose
>
> **[1:35](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=95)** to use Vertex AI endpoints. If your application has low traffic where you only receive a few requests per day, it may not be cost effective to use Vertex AI endpoints. Endpoints are expensive, and if you are not receiving many requests, it may be cost effective to perform batch prediction. Endpoints can be more expensive than other deployment methods, so it is important to consider the cost, and resources you have available. If you have a large model that requires a lot of computing, then deploying to an endpoint may not be the best choice. This is especially true since the time it takes to perform an inference on a large model may too slow, especially if you have a lot of traffic. Lastly, if you are making one time predictions on a large dataset, you may not need to use Vertex AI Endpoint. Endpoints are designed for [[Real-Time]] predictions, and if you are making batch predictions, consider other deployment methods. In summary, it's important to consider factors such as cost, resources, model size, and prediction type when deciding to use Vertex AI Endpoints. How do you choose a endpoint? Generally, training requires more computing power than inference, so your prediction endpoint does not need to be as powerful as your training container. While training your model may take hours a day,
>
> **[3:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=189)** your endpoint will run for weeks or months. Using a more far powerful container to train your model quickly, and less powerful machine to run your endpoint is better. I would suggest to start with a machine with four CPUs, and 15 GB of memory, like the n1-standard-4. You can then move on to a machine with more memory if you have a larger model, and a machine with more CPUs or even a GPU if you need faster inference or have a lot of load. To deploy to an endpoint, you must first create one. If you have an existing endpoint, let's say from a previous model deployment, then you can reuse it. To create an endpoint, you can use to create method, and specify the endpoint and the project where you want the endpoint to be created. Finally, to deploy your model, you need to specify the endpoint you want to deploy your model to, the type of machine you want the endpoint to have, and any extra resources for the endpoint like GPUs. You can enable explainability for that endpoint. Deploying to an endpoint may take some time. The wait method will wait till the endpoint is deployed, and after deployment is complete, we can use the predict method to send a request to it and get a response. You can terminate and delete all the resources you created
>
> **[4:47](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-endpoints?u=76281980&t=287)** using the Vertex AI [[Python (Programming Language)|Python]] API tool. To delete the training job, you can call the delete method. Next, to bring down the endpoint. You can call the delete method on the endpoint. Finally, to save on storage costs, you can delete the train model by calling the delete method of the model. Remember that Vertex AI is a paid service, so you should run the last cell in the Jupyter Notebook to shut down any resources that you create if you follow along with the exercise. To see the endpoints you have deployed, you can navigate to the endpoint tab in Vertex AI. From here, you can see that the model is deployed to the endpoint. You can also see the metrics of the endpoint, like, how much compute resources are being used, the request per second, your endpoint is processing. Clicking the sample request button will give you information on how you can invoke this endpoint using Curl and Python. Now you know how to deploy your models using both batch prediction and endpoints. In your next lesson, we will learn how you can monitor and manage your deployed models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (10), [[Python (Programming Language)|Python]] (2), [[E-Commerce]] (1), [[Microsoft Products|Products]] (1), [[Real-Time]] (1)
> **CLI Commands:** python (2), curl (1)
> **Env Vars:** cpu (1), gpu (1), api (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1), such as (1)
> **Tools:** jupyter (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)


### 5. Model Monitoring and Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Vertex AI model monitoring](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=0)** - [Instructor] So far, we have seen how you can deploy a model using [[Vertex]] AI. Once a model has been deployed, you'll want to monitor it to ensure it's running correctly. When deploying any software application, we need to monitor it for metrics, errors, down times, and failures. However, when deploying models we need to monitor not only the health of our application, but the performance of the model as well. In this lesson, we'll learn how we can use Vertex AI for model monitoring. So how is model monitoring different from monitoring a typical application? Firstly, machine learning models are heavily dependent on the quality of and distribution of data used to train them. Therefore, monitoring the performance of these models requires the tracking, the quality, and the distribution of the data they are processing, in addition to traditional [[Performance Metrics]]. Secondly, unlike traditional software monitoring methods machine learning models can experience model drift, where the model's performance deteriorates over time, due to changes in input data. Model monitoring must be able to detect this drift and adjust the model accordingly. Also, machine learning model monitoring
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=96)** requires tracking additional performance metrics, beyond the typical technical metrics such as accuracy, precision, and recall. Model monitoring may also require tracking specific [[Business Metrics]], to ensure the model is achieving the desired outcomes. Finally, in [[Software Projects]], feedback is often received from users or testers. In machine learning, feedback is received from people who label data. Monitoring the feedback loop between the model predictions and the actual labels and then integrating them into the model via training, is an important part of model monitoring. There are a few ways to monitor a model's performance. Firstly, we can observe the model's input to ensure it hasn't changed. Since the model has been trained on data with a particular distribution or properties, it'll affect its performance if the data we sent to the model during inference changes. This is called training-serving skew. You can monitor for skew by creating a statistical distribution of the training and training data, and comparing that with the distribution values seen during deployment. You can retrain the model if the distribution changes beyond the specified threshold.
>
> **[3:11](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=191)** Since you need to know the training data distribution to perform skew detection, you need to enable it during training. The second model metric we monitor is called prediction drift. This happens when the input features to the model change over time. Since prediction drift only looks for changes in the input to the model during model deployment, you can set it up after the model has been deployed. Like skew detection, we can set up a threshold for prediction drift. Once the threshold is breached, you can raise an alarm, or trigger a model retraining job. We can also monitor the importance of each input feature in the model's prediction. This is called feature attribution. Input features we need to feed to the model are typically not given the same weight by the model during inference. The importance of each feature should not drift over time for the same model. A change in the attribution, or importance score, can either signal that the data has changed or that the model's performance may drop. Training-serving skew occurs when a feature's attribution after deployment deviates from the feature's attribution score during training. This also requires us to have access to the training data.
>
> **[4:48](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=288)** Prediction drift occurs when a feature's attribution score changes after deployment, over time. This can occur due to input data changing. Let us see how to set up monitoring of your model in Vertex AI. We will see how to set up email alerts, skew detection, and drift detection. First thing we need to do is set up a config for each of them. Setting up an email alert config is easy. You only need to specify a user email ID to send an alert to. Before we can configure our drift and skew detection, we need to specify the sampling rate and schedule interval for monitoring. The schedule config sets the interval in hours, after which the model monitoring task will learn. The minimum time is one hour. The sampling rate tells Vertex AI what percentage of samples to monitor. This should be between zero and one. Next, we will set up drift detection and attribution drift. For this, we need to specify the features from our input data that we want to monitor. In case of tabular data set, this would be column names. For each feature, you also need to specify threshold. If no thresholds are specified, it is taken 30% by default. Setting up a skew detection config is very similar.
>
> **[6:26](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=386)** Except here you also need to specify the input data source as well as the target column. Finally, we need to combine our skew and drift configs into an objective config. Now that our configs are ready we can create a monitoring job. To do that, we need to specify our display name for monitoring job, the project id, the location, and the endpoint you want to monitor. After that, we specify all our configs. Now let us see what it will look like in the dashboard. First, we need to go to the Endpoints tab. From here, you need to click the endpoint for which you have enabled monitoring. And then, click Enable under monitoring column. From here, you can view the trends of the different features you monitor and see if they've drifted significantly. You can also view properties you set up for monitoring, like monitoring interval, sampling rate, and alerting email. In summary, model monitoring helps you to ensure that your model's prediction quality has not degraded. Setting up alerts ensures that you can quickly retrain your model, in case the data has drifted from what your model was initially trained for. If you're deploying models to production, have model monitoring setup will improve
>
> **[8:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-model-monitoring?u=76281980&t=480)** the performance and reliability of your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (4), [[Performance Metrics]] (2), [[Business Metrics]] (1), [[Software Projects]] (1)
> **Prerequisites:** set up (6), configure (1), setup (1)
> **Definitions:** is called (3), is an  (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Vertex AI pipelines](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=0)** - [Instructor] In this course, we have seen how you can use [[Vertex]] AI to perform the different steps in an [[MLOps]] pipeline. To recap, the first step we need to do is prepare our training data. The training data can be present in a database like BigQuery or [[Cloud Storage]]. It is good practice to version your training data and features present in your data. To version your data, you can use Vertex AI datasets and to manage features, you can create a feature store. The next step is to train a model with your data. In this step, it is important that you keep track of the configurations, hyperparameters and data used to train your model. This will help in reproducibility. You can do this with Vertex AI experiments. You should also version your models after training. You can use the model registry for doing that. Once your model is trained and you are happy with the performance, the next step is to deploy it, either to a endpoint or use it for batch prediction. Finally, you would set up monitoring of your model and retrain your model when the performance drops. You can also set up data labeling and retrain your model regularly on data that it did not classify correctly. Most machine learning application follow these steps. As an MLOps engineer, you will need to perform
>
> **[1:34](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=94)** this workflow every time a model has to be retrained or updated. Since this process has to be repeated multiple times, it makes sense to automate it by chaining all the steps into a single executionable pipeline. By doing so, you can easily run your pipeline multiple times with different inputs while being able to monitor the results. You can also reuse parts of your pipeline to train new models, making your workflow modular, repeatable, observable, and easy to set up. Well, you can do this and more in Vertex AI using Vertex AI pipeline. Let's dive a bit deeper into why you should use pipelines in your MLOps system. Efficiency, ML pipelines automate the entire process of developing, training, and deploying ML models, saving time and increasing efficiency. By automating repetitive tasks like data pre-processing, [[Feature Engineering]] and model selection, ML pipelines free up time for data scientists and machine learning engineers to focus on more strategic tasks like model optimization and experimentation. Reproducibility and collaboration. ML pipelines help ensure reproducibility which is essential for [[Building Trust]] in ML models.
>
> **[3:09](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=189)** By defining a clear and structured workflow for model deployment and development, ML pipelines allow others to reproduce your work and verify your results. [[Scalability]], ML pipelines are scalable, meaning they can handle large data sets and models. This is particularly important in production environments where models need to be trained and deployed quickly and effectively. Flexibility. ML pipelines are flexible, allowing data scientists and machine learning engineers to experiment with different [[Algorithms]], hyperparameter and data pre-processing techniques. This flexibility makes it easier to optimize models and improve performance. Let's train a simple AutoML model using Vertex AI pipelines. The first step we need to do is click the Pipelines tab on the left. Since we will be using the Iris data for training, you can select the pipeline template for tabular classification. First, we need to provide a run name. Then, we need to provide a bucket for storing the train model. Next, we need to select the dataset and the training objective. When giving a name for the model,
>
> **[4:42](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-pipelines?u=76281980&t=282)** make sure that it is descriptive. To make your pipeline run faster, you can choose not to create an evaluation and to skip architecture search. For this example, I will not skip it to show you what pipeline will look like. Finally, provide a budget for the compute and click Submit. This will start pipeline run. This is how you can fix the error if the Specify ID error turns up. You can now view the running pipeline jobs in the run step. You can also view the steps in the pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (6), [[MLOps]] (3), [[Cloud Storage]] (1), [[Feature Engineering]] (1), [[Building Trust]] (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **UI Navigation:** select the (2)
> **Exercise Files:** template (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 6. Deploy Your Project Using Vertex AI

[↑ Back to Table of Contents](#table-of-contents)

#### [Challenge: Deploy a project](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=5)** - [Instructor] Now that you've gone over the content of the course, let us look into the hands-on portion of building a project. We have a very fun challenge today of using the Penguin's data set to build a project in [[Vertex]] AI. There are various kinds of projects you can build. A classification project to recognize the type of penguins based on region and islands, predicting the beak length and depth based on species, region, flipper length, and body mass. In the interest of time, you can use selective tools from Vertex AI, namely Vertex AI training, Vertex AI Endpoints, and Vertex AI Model Registry. In this challenge, you will combine everything you've learned throughout this course to build and deploy a project using Vertex AI. You will use the penguins dataset. The first step you need to do is to download the data from BigQuery and then create a dataset in Vertex AI. After that, you will have to use the data set to train a model. Once the model has been trained you will need to register it. Remember that registering a model makes tracking of your model's version, history and performance easy. Finally, you'll deploy the model to an endpoint and query it. So what are you waiting for? Let's get cracking on this fun
>
> **[1:38](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/challenge-deploy-a-project?u=76281980&t=98)** and exciting project and show off your [[MLOps]] skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (7), [[MLOps]] (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Deploy a project](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=0)** - All right, folks. Get ready to put your ML Engineering hats on because we've got a fun project for you. We are going to be working with the Penguindata from Big Query and Training a model on that. How cool is it? First thing's first, we need to [[Fetch]] the Penguin's data from BigQuery. You can download it as a CSV or you can copy it to a BigQuery table in your own account. Next up, let's create a data set in [[Vertex]] AI. Not only will this help us to load the data for training our model but it also works to track our data history and version. We want to make sure we are keeping track of all our hard work, right? Now it's time to train our model. Don't worry, you don't need to be a Docker expert for this. Vertex AI provides a prepaid Docker container for training but you can also build your own if you're feeling adventurous. Once our model is trained and ready to go, let's register it to model registry so we can keep track of all its versions and [[Metadata]]. We want to make sure you are staying organized and on top of things. Finally, the moment we have all been waiting for, deployment. We can deploy the model to an endpoint and query it to get a result. Who knew penguins could be so exciting? Just a quick reminder. Make sure to shut down all the resources you've created, like the endpoint to avoid any extra charges.
>
> **[1:37](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/solution-deploy-a-project?u=76281980&t=97)** So, what are you waiting for? Let's dive into this fun penguin project and train our model to be the best of best.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (2), [[Fetch]] (1), [[Metadata]] (1)
> **CLI Commands:** make (3), docker (2)
> **Env Vars:** csv (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Vertex AI vs. other MLOps platforms](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=0)** - [Speaker] Every [[MLOps]] platform offers some tools which might or might not be useful for your organization. When we see as a whole [[Vertex]] AI has its own set of advantages and disadvantages. Let us dig into that as we help you make a decision on choosing the right platform for your next project. Vertex AI has several advantages. Vertex AI is a fully managed platform, which means that it takes care of infrastructure management and maintaining installs, such as scaling and provisioning resources, patching and updating software and ensuring high availability and reliability. This allows data scientists and machine learning engineers to focus on building and deploying their models without worrying about infrastructure management. Vertex AI provides autoML capabilities that enable users to create high quality models without needing extensive machine learning expertise. AutoML can help users save time and reduce costs by automating the process of model selection, hyper parameter tuning and [[Feature Engineering]]. Vertex AI supports a wide range of open source machine learning frameworks and tools such as [[TensorFlow]], pythons, and scikit-learn, making it easier to use familiar tools and libraries. And lastly, Vertex AI is built on [[Google]]'s cloud secure and compliant infrastructure,
>
> **[1:36](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/vertex-ai-vs-other-mlops-platforms?u=76281980&t=96)** which is designed to meet the higher standard of security and compliance, including HIPAA, SOC2, and ISO 27001. This enables users to store and process sensitive data and model securely. Whereas if you look at why Vertex AI may not be the best tool for you, you could look at some of its disadvantages. Vertex AI is designed to work with [[Google Cloud Platform (GCP)|Google Cloud platform]] which means there may be better choices for organizations using different cloud provider or running their own data centers. In contrast, tools like Amazon SageMakers or [[Microsoft Azure]] machine learning support multi-cloud and [[Hybrid Cloud]] deployments. Vertex AI can be more expensive than other MLOPs tools, especially for large scale projects. This may be a disadvantage for smaller organization or those with limited budgets. Ultimately, the best MLOPs tool would depend on an organization's or project's specific needs and requirement.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (9), [[MLOps]] (3), [[Feature Engineering]] (1), [[TensorFlow]] (1), [[Google]] (1)
> **Env Vars:** hipaa (1), soc2 (1), iso (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** automl (1)
> **Speakers:** - [speaker] (1)

#### [What next?](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-vertex-ai-mlops-with-google-cloud/what-next?u=76281980&t=0)** - [Trainer] Woohoo, you did it. You've completed the [[MLOps]] course with [[Vertex]] AI. With your new found skills and knowledge, you are ready to develop, train, deploy, and manage machine learning models like a pro on [[Google Cloud Platform (GCP)|Google Cloud platform]]. But wait, there's more. Follow us on Twitter or checkout our website to stay up to date with the latest in MLOps. Don't miss out on exciting directions and new discoveries in the field. And hey, have you subscribed to our newsletter? We've got exclusive insights and insider tips for MLOps enthusiasts like you. Oh, and one more thing, keep learning. We recommend you check out some [[LinkedIn]] Learning courses on MLOps to enhance your skills and knowledge further. So what are you waiting for? Keep crushing it. Stay curious and have fun in your MLOps journey.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MLOps]] (5), [[Vertex]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1), [[LinkedIn]] (1)
> **Speakers:** - [trainer] (1)


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

---

[↑ Back to top](#)