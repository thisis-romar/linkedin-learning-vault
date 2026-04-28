---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: apache-spark-essential-training-big-data-engineering-23165395
url: "https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395"
duration_minutes: 64
duration: 1h 4m
level: Intermediate
updated: 10/1/2024
learners: 15553
skills:
  - Data Engineering
  - Big Data
  - Apache Spark
  - Data Pipelines
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEYVdQ6ahM3Qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726090917562?e=2147483647&amp;v=beta&amp;t=7rjZ4bFbiSWLKPUqSjIy3l4_2QVZmEz0C0SxsgnWkCc"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Processing]]'
  - '[[Moving from Data Scientist to Data Analyst]]'
  - '[[Advance Your Data Skills in Apache Spark]]'
prev_courses:
  - '[[Data Cleaning in Python Essential Training]]'
  - '[[Deep Learning Getting Started]]'
  - null
next_courses:
  - '[[ETL in Python and SQL]]'
  - '[[Python- Working with Predictive Analytics]]'
  - '[[Introduction to Spark SQL and DataFrames]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":5,"total":7,"prev":"Data Cleaning in Python Essential Training","next":"ETL in Python and SQL"},{"path":"Moving from Data Scientist to Data Analyst","position":7,"total":10,"prev":"Deep Learning Getting Started","next":"Python- Working with Predictive Analytics"},{"path":"Advance Your Data Skills in Apache Spark","position":1,"total":6,"prev":null,"next":"Introduction to Spark SQL and DataFrames"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - topic/software-development
  - skill/data-engineering
  - skill/big-data
  - skill/apache-spark
  - skill/data-pipelines
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Apache%20Spark%20Essential%20Training-%20Big%20Data%20Engineering.md)

![Apache Spark Essential Training: Big Data Engineering](https://media.licdn.com/dms/image/v2/D4E0DAQEYVdQ6ahM3Qw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726090917562?e=2147483647&amp;v=beta&amp;t=7rjZ4bFbiSWLKPUqSjIy3l4_2QVZmEz0C0SxsgnWkCc)

# Apache Spark Essential Training: Big Data Engineering

> Data engineering is the foundation for building analytics and data science applications in the new Big Data world. Data engineering requires combining multiple big data technologies to construct data pipelines and networks to stream, process, and store data. This course focuses on building full-fledged solutions that combine Apache Spark with other big data tools to create end-to-end data pipeline

> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395) | 1h 4m | Intermediate | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Data Engineering Concepts** (5 videos)
- **3. 2. Spark Capabilities for ETL** (5 videos)
- **4. 3. Batch Processing Pipelines** (5 videos)
- **5. 4. Real-Time Processing Pipelines** (5 videos)
- **6. 5. Data Engineering with Spark: Best Practices** (4 videos)
- **7. 6. End-to-End Exercise Project** (4 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Driving big data engineering with Apache Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=0)** - [Kumaran] We live in the world of big data.
>
> **[0:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=3)** This data needs to be stored, transported, and processed, in scalable and resilient ways to generate timely insights.
>
> **[0:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=11)** Apache Spark has become the top data processing technology in the world.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=16)** In this course, I will show you how to execute data engineering projects with Apache Spark.
>
> **[0:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=23)** We will discuss some salient features of Spark that will help in scalable and resilient processing, then walk through the design of batch and real-time pipelines with Spark using examples, and finally, discuss some best practices.
>
> **[0:40](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=40)** My name is Kumaran Ponnambalam.
>
> **[0:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/driving-big-data-engineering-with-apache-spark?u=76281980&t=42)** Let's now start solving data engineering problems with Apache Spark.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [kumaran] (1)

#### Course prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=0)** - [Instructor] Before we begin this course, I want to discuss the prerequisite skills needed for the students to maximize learning from this course.
>
> **[0:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=10)** The focus of this course is to help students build data engineering pipelines with Apache Spark.
>
> **[0:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=18)** It will discuss some key design principles and best practices in building pipelines and demonstrate them with examples.
>
> **[0:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=27)** The students are expected to be familiar with the basics of Apache Spark and are able to set up code and deploy applications with Spark.
>
> **[0:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=37)** Familiarity in structured streaming and SQL capabilities for Apache Spark is also desired.
>
> **[0:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=44)** The example code is in Python, so familiarity with Python concepts, programming, and using Jupyter notebooks is required.
>
> **[0:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=53)** We will build pipelines using third party data stores, namely Kafka, MariaDB, and Redis.
>
> **[1:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=60)** Familiarity in these data stores is also helpful.
>
> **[1:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=64)** We will be deploying and using these data stores with Docker, so knowledge of Docker operations is also essential.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/course-prerequisites?u=76281980&t=72)** Let's now get set up with the example code and prerequisites for this course.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3), python (2), docker (2)
> **Prerequisites:** set up (2), prerequisite (1)
> **Code Keywords:** let (1)
> **Env Vars:** sql (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Setting up the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=0)** - [Instructor] Let's set up the required software for use in this course.
>
> **[0:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=4)** We will use PySpark for our programming exercises using its own built-in Spark instance.
>
> **[0:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=12)** So we do not need to set up a Spark cluster.
>
> **[0:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=15)** We hover need data sources and sinks like MariaDB, Kafka, and Redis.
>
> **[0:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=22)** We will set them up using Docker.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=24)** First, make sure that Docker desktop is installed and set up on your system.
>
> **[0:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=30)** If not, download and install it from [docker.com](https://docker.com).
>
> **[0:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=35)** Download the exercise files into a local folder.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=38)** Open the command prompt and navigate to this folder.
>
> **[0:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=42)** If you are using Windows, use the PowerShell application.
>
> **[0:46](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=46)** I have downloaded the files in the exercise files folder.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=50)** Here, you can see the exercise files, Docker file, and dependency files that are needed.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=57)** Execute the command, docker-compose -f spark-docker.yml up -d.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=67)** You should see three containers being created and started.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=72)** This process may take a long time if the images need to be pulled from Docker hub.
>
> **[1:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=78)** Check the status of the containers using docker ps command.
>
> **[1:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=84)** Install MariaDB connector C for your operating system if it is not already installed.
>
> **[1:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=90)** This website provides information on the available packages for MariaDB connector.
>
> **[1:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=97)** If you are using Mac, you can also install the connector using brew install mariadb-connector-c.
>
> **[1:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=105)** PySpark has some environment dependencies, so they also need to be set up.
>
> **[1:51](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=111)** First, make sure that you have Java 17 installed on your system.
>
> **[1:55](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=115)** This can be checked by using the command java-version.
>
> **[2:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=120)** Next, we also need to set up the Java Home environment variable to point it to the Java 17 folder.
>
> **[2:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=128)** So this has already been set up and it can be checked by using the Environment command.
>
> **[2:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=136)** We then need a variable called PySpark Python, and that needs to point to the word Python.
>
> **[2:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=143)** We have already set this up in this environment, and we can check this using the environment command.
>
> **[2:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=153)** Next, we need to install Anaconda Navigator from the website, [anaconda.com](https://anaconda.com).
>
> **[2:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=159)** Please download and install the same.
>
> **[2:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=162)** Then go to the Anaconda Navigator, create a new environment called Spark.
>
> **[2:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=170)** Choose Python 3.11.
>
> **[2:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=174)** This creation may take some time.
>
> **[3:01](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=181)** Now install Jupyter Notebook in this new Spark environment.
>
> **[3:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=191)** Go back to the directory where the exercise files are downloaded.
>
> **[3:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=195)** Then switch to the environment Spark using conda activate spark.
>
> **[3:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=202)** Then start Jupyter Notebook using the command, jupyter notebook.
>
> **[3:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=212)** This will open the browser with the directory listing shown.
>
> **[3:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=218)** Open the file, 00_03_Spark_BDE_Setup_Prerequisites.
>
> **[3:46](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=226)** Let's now install the required packages for this course.
>
> **[3:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=230)** Run the first cell.
>
> **[3:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=232)** This will install all the required prerequisites for the exercises.
>
> **[3:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=239)** This may take some time to install.
>
> **[4:02](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=242)** If you are using Windows, then follow the additional instructions mentioned here.
>
> **[4:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=248)** Copy the Hadoop folder in the exercise files to a folder like c:/hadoop.
>
> **[4:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=254)** Create a Hadoop home environment variable pointing to this folder.
>
> **[4:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=259)** Then add c:/hadoop/bin to the path variable.
>
> **[4:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=264)** Once this is done about the Jupyter Notebook session, close the command window.
>
> **[4:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=269)** Then open a new command window and restart Jupyter Notebook.
>
> **[4:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=275)** The dependencies are successfully installed now.
>
> **[4:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=279)** Now we need to create a few databases and tables in MariaDB as well as a few topics in Kafka.
>
> **[4:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=287)** Go to the setup MariaDB section and run it.
>
> **[4:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=293)** This code will create all the required tables in MariaDB.
>
> **[4:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=297)** It creates three databases, warehouse stock, global stock, and website stats.
>
> **[5:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=305)** Then go to the setup Kafka topic section and run it.
>
> **[5:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=312)** It creates three Kafka topics, spark.streaming.websit.visits, spark.streaming.cart.abandoned and spark.exercise.lastaction.long.
>
> **[5:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=326)** Finally, create a raw data folder.
>
> **[5:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=329)** This folder will mimic a distributed file system like Hadoop.
>
> **[5:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=334)** We will not be using HDFS for this, but a proxy to represent HDFS files.
>
> **[5:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=341)** We can also check if all the required environment variables are correctly installed.
>
> **[5:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=348)** Note that if you shut down the docker containers, this setup will be lost and you will have to rerun this notebook to create these entities again.
>
> **[5:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-exercise-files?u=76281980&t=359)** Let's dive into the course now.

> [!info]- Semantic Content
>
> **Prerequisites:** install (10), set up (6), setup (3)
> **CLI Commands:** docker (9), python (3), make (2), brew (1)
> **Tools:** jupyter (5), anaconda (3), docker desktop (1), command prompt (1), powershell (1)
> **UI Navigation:** open the (3), go to (3), navigate to (1), switch to (1)
> **Code Keywords:** let (3), switch (1), finally, (1), this, (1)
> **Exercise Files:** exercise files (5), download the (1)
> **Versions:** java 17 (2), python 3 (1)
> **URLs:** [docker.com](https://docker.com) (1), [anaconda.com](https://anaconda.com) (1)


### 2. 1. Data Engineering Concepts

#### What is data engineering?
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=0)** - [Instructor] To begin the course, let's discuss the concept of data engineering.
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=5)** Data engineering deals with designing and building systems that collect and analyze data to deliver insights and actions.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=14)** The focus on data engineering is data, especially big data, and ways to process them at scale and with low latency.
>
> **[0:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=23)** Data engineering is a growing field in software engineering, especially around data processing, analytics and data science.
>
> **[0:31](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=31)** It is driven by the advancements in big data technologies.
>
> **[0:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=35)** These technologies enable building data pipelines that focus on data transport, processing, and storage.
>
> **[0:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=43)** It is essential for large scale data processing with low latency, which is becoming a key requirement for multiple application domains to deliver value to their customers.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=54)** It is a prerequisite for machine learning.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=57)** Large quantities of training data needs to be cleansed, transformed, and processed before they're used for building models.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=65)** It is also needed for pre-processing and post-processing of data during machine learning inference operations.
>
> **[1:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=73)** Data engineering has given rise to a new breed of engineering roles like data engineer and big data architect.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=81)** These roles require special skills similar to what is being provided in this course.
>
> **[1:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/what-is-data-engineering?u=76281980&t=86)** In the next video, let's examine how data engineering differs from data analytics and data science.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Prerequisites:** prerequisite (1)
> **Speakers:** - [instructor] (1)

#### Data engineering vs. data analytics vs. data science
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=0)** - [Instructor] Nowadays, we hear the terms like data engineering, data analytics, and data science when discussing big data.
>
> **[0:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=8)** Often, they are used interchangeably.
>
> **[0:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=10)** So what exactly are the differences between these domains, and what are their overlaps?
>
> **[0:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=17)** This table lists a number of data processing and analytics functions that are encountered in the data analytics domain today.
>
> **[0:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=25)** Data engineering deals with the preparation of data for further analytics.
>
> **[0:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=30)** It deals with integrating data sources to extract data, build data pipelines for transport, processing, and transforming data to required formats, and aggregations to finally storing them.
>
> **[0:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=43)** This data can also be used to build business actions downstream.
>
> **[0:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=47)** Business analytics, on the other hand, works on data that is already prepared by data engineering.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=54)** It deals with using the process data to create dashboards and reports for doing exploratory data analytics and statistical modeling of data.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=63)** This includes generating recommendations for business actions.
>
> **[1:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=68)** Data science is a broad domain that encompasses data engineering and business analytics.
>
> **[1:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-vs-data-analytics-vs-data-science?u=76281980&t=73)** It also includes machine learning and generating predictions to drive business outcomes.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Data engineering functions
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=0)** - [Presenter] What are the functions of data engineering?
>
> **[0:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=3)** Data engineering consists of five functions namely acquisition, transport, storage, processing, and serving.
>
> **[0:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=11)** Data pipelines are built by combining multiple such functions to deliver a given outcome.
>
> **[0:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=18)** Let's start with data acquisition.
>
> **[0:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=20)** The goal of data acquisition is to extract or receive data from a data source and publish it into a big data pipeline.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=28)** While acquiring data, the focus is on understanding the format of the source data and converting them into formats suitable for downstream processing.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=39)** We work with interfaces provided by the source systems to extract data.
>
> **[0:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=44)** Alternatively, we can expose interfaces through which clients can publish data into the pipeline.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=50)** Security is also a major concern, especially if the data sources are not within the trust domain.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=57)** Reliability of data is of importance, especially when acquiring from remote sources.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=63)** Finally, latency is also a consideration for streaming data analytics.
>
> **[1:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=69)** Data transport deals with moving data within the pipeline to various processing and storage and endpoints.
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=75)** Data transport should be reliable and should maintain the integrity of transported data.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=81)** Transport requires scale to deal with large quantities of data in the big data world.
>
> **[1:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=86)** Data security and privacy may also be key concerns.
>
> **[1:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=90)** Latency is an important transport consideration for real-time use cases.
>
> **[1:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=95)** Finally, transport should also be cost effective.
>
> **[1:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=99)** Then comes data storage.
>
> **[1:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=101)** While designing storage for big data pipelines, a key requirement is the flexibility of data as new use cases and requirements will constantly emerge when the system grows.
>
> **[1:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=113)** Schema design needs to consider this.
>
> **[1:55](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=115)** Popular query pattern should be considered while designing the schema.
>
> **[1:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=119)** Storage should also provide for high availability and redundancy to ensure resilient operations.
>
> **[2:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=125)** Finally, the choice of technology should also be cost effective.
>
> **[2:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=130)** Data processing is the next key function.
>
> **[2:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=133)** Common requirements like scale, resiliency, latency, and security also apply to data processing.
>
> **[2:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=140)** In addition, data processing should provide capabilities for cleansing, filtering, and enriching data with additional features.
>
> **[2:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=148)** Data should also be aggregated in cost-effective operations.
>
> **[2:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=152)** Machine learning can be part of data processing operations in real-time prediction use cases.
>
> **[2:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=159)** Finally, data serving is also an important function.
>
> **[2:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=162)** Serving can be done by either exposing APIs and interfaces or by pushing data to endpoints for downstream analytics.
>
> **[2:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=170)** In any case, requirements around latency, high availability, and security also need to be considered.
>
> **[2:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=177)** Skill levels of consumers should be taken into account while exposing interfaces.
>
> **[3:02](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-functions?u=76281980&t=182)** The schema of the data should also be flexible to provide for multiple use cases and popular query patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (4), function (2), let (1), this. (1), case, (1)
> **Definitions:** is an  (1)
> **Speakers:** - [presenter] (1)

#### Batch vs. real-time processing
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=0)** - [Instructor] When building data pipelines, one of the key decisions to make is whether the pipeline would be batch or real-time.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=7)** We start with batch processing.
>
> **[0:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=9)** In batch processing, we process data in batches.
>
> **[0:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=13)** A batch is a collection of records with a well-defined size or window.
>
> **[0:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=18)** We can either define batch sizes by the count of records or by a date/time range.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=24)** In batch processing, the batch of input records is already ready and complete.
>
> **[0:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=29)** This input does not change when processing is going on.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=32)** This is a key differentiator between batch and realtime processing.
>
> **[0:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=37)** Batch processing works on bounded datasets.
>
> **[0:40](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=40)** The number of records in the batch do not change after the processing has started.
>
> **[0:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=44)** Since batch processing usually waits for all the input from that batch to be ready, there is latency when beginning processing.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=52)** Also, it may take some time to process all the records.
>
> **[0:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=56)** The results of processing are usually available at the end of processing, but intermediate results can also be possible.
>
> **[1:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=64)** Batch processing is simpler to implement.
>
> **[1:06](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=66)** Since the input is constant, reprocessing would generate the same output all the time.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=72)** How is real-time processing different?
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=75)** Real-time processing or stream processing works on input data as it is created at the source.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=81)** It does not wait for the batch of records to build up.
>
> **[1:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=84)** Rather it processes one record at a time.
>
> **[1:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=87)** As processing is going on, the input data may change while processing.
>
> **[1:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=92)** Stream processing should account for such changes and reprocess when needed.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=96)** Change data capture is a key pattern used in these cases.
>
> **[1:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=101)** Real-time processing usually works on unbounded datasets.
>
> **[1:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=105)** When processing starts, the total number of records to be processed is not known.
>
> **[1:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=110)** Processing needs to consider this and compute metrics accordingly.
>
> **[1:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=114)** In real-time processing use cases, there are low latency requirements.
>
> **[1:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=119)** The insights need to be derived within seconds of receiving the source data records.
>
> **[2:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=123)** Not all use cases can qualify for real-time processing.
>
> **[2:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-processing?u=76281980&t=127)** State management becomes an important consideration in real-time when entity states or running summaries need to be kept track.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Data engineering with Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=0)** - [Instructor] Apache Spark is arguably the best processing technology available for data engineering today.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=7)** It has been constantly evolving over the last few years, adding new capabilities and improving in reliability.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=14)** Spark can be used to implement both batch and real-time use cases.
>
> **[0:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=19)** It has support for a number of capabilities to help in this regard.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=24)** It has native support for several popular data sources like RDBMS, Kafka, and HDFS.
>
> **[0:31](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=31)** It also has advanced parallel processing capabilities to process large quantities of data in real time.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=38)** Capabilities like MapReduce, windowing, state management, and joins enable powerful use cases.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=45)** Finally, it also has support for graph processing and machine learning, so these use cases can also be integrated into these big data pipelines.
>
> **[0:55](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=55)** We will explore these capabilities in detail in the course.
>
> **[0:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/data-engineering-with-spark?u=76281980&t=58)** Let's dive right into understanding what these capabilities are and use a couple of examples to implement them during this course.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Env Vars:** rdbms (1), hdfs (1)
> **CLI Commands:** apache (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Spark Capabilities for ETL

#### Spark architecture review
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=0)** - [Instructor] In order to build an optimal Spark pipeline, it is important to understand how Spark works internally.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=7)** When design decisions are made, they need to be analyzed on how they impact scalability and performance.
>
> **[0:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=15)** In this video, I will review how Spark executes a pipeline and optimizes it.
>
> **[0:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=20)** I recommend further reading on this topic to master the internals of Spark.
>
> **[0:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=26)** Spark programs run on a driver node which works with a Spark cluster to execute them.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=32)** A Spark cluster can consist of multiple executor nodes capable of executing the program in parallel.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=39)** The level of parallelism and performance achieved is dependent upon how the pipeline is designed.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=45)** Let's review an example pipeline and how it gets executed.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=50)** First, the source data is read from an external source database into the structure Data 1.
>
> **[0:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=56)** Data 1 is then converted to a data frame or its internal representation resilient distributed datasets, RDDs.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=65)** During this conversion, it is partitioned and individual partitions are assigned and moved to the executor notes that are available.
>
> **[1:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=74)** When a transform operation like map or filter is executed, these operations are pushed down to the executors.
>
> **[1:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=82)** The executors execute the code locally on their partitions and create new partitions with the result.
>
> **[1:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=88)** There is no movement of data between executors, hence, transforms can be executed in parallel.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=96)** Next, when an action like reduce or group by is performed, the partitions need to be shuffled and aggregated.
>
> **[1:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=102)** This results in movement of data between executors and can create I/O and memory bottlenecks.
>
> **[1:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=109)** Finally, when the data is collected back to the driver node, the partitions are merged and sent back to the driver.
>
> **[1:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=116)** From here, they are stored into external destination databases.
>
> **[2:01](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-architecture-review?u=76281980&t=121)** This flow needs to be understood and visualized for any pipeline that we are building to understand bottlenecks and design for scalability.

> [!info]- Semantic Content
>
> **CLI Commands:** node (2)
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Parallel processing with Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=0)** - [Instructor] Big data processing is all about processing data in parallel to achieve high throughput in less time.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=7)** How does Apache Spark help with this goal?
>
> **[0:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=10)** Data processing involves multiple activities, which, in general, can be grouped into the following.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=16)** First data is read from data sources, like databases.
>
> **[0:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=20)** Then various operations, like transformations, data filtering, and validation checks, are performed.
>
> **[0:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=27)** Data may then be aggregated to create summary metrics.
>
> **[0:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=30)** Finally, transformed data is returned to sinks.
>
> **[0:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=34)** When we talk about scaling data processing, we need to scale all these steps.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=39)** We need the ability to parallelize all these steps involved in data processing/ Steps that cannot be parallelized become bottlenecks, and the speed of the processing pipeline would be based on how fast these bottlenecks can process data.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=54)** How does Apache's Park help in parallelizing activities and removing bottlenecks?
>
> **[1:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=60)** Let's start with reading data from data sources.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=63)** Spark supports out-of-the-box parallel read operations from various data sources.
>
> **[1:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=69)** Subsets of records can be directly read into multiple executor nodes in parallel.
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=75)** For example, it supports partitioning of data by column values for JDBC sources.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=81)** Different executors can read and process different subsets of data, partitioned based on column values.
>
> **[1:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=88)** Similarly, with a Kafka source, each executor can read from a subset of Kafka partitions.
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=94)** It's possible to implement custom parallelism techniques and configure the level of parallelism in Spark.
>
> **[1:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=101)** Spark also implements predicate pushdown.
>
> **[1:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=104)** Any filtering operations in Spark are instantly executed on the data source itself.
>
> **[1:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=108)** So unwanted records are not read into memory.
>
> **[1:51](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=111)** This is done by the optimizer while deciding on the execution plan.
>
> **[1:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=116)** What about processing of data?
>
> **[1:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=118)** Transformation operations, like map and filter, are parallelized by Spark.
>
> **[2:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=123)** Different executor nodes can process transformations in parallel on subsets of data.
>
> **[2:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=129)** In order to enable parallelism and reduce bottlenecks, cache should be taken during pipeline design.
>
> **[2:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=135)** For example, perform map type operations early in the cycle so we can execute as much of the work in parallel and filter out unwanted data.
>
> **[2:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=144)** Reduce operations introduce shuffling of data across executors.
>
> **[2:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=149)** Focus on reducing shuffling and using the right partitions for data.
>
> **[2:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=153)** Also, repartition data as needed during processing to reduce the number of partitions.
>
> **[2:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=159)** Finally, let's look at writing data to sinks.
>
> **[2:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=162)** Spark, again, supports out-of-the-box parallel writes to data sinks.
>
> **[2:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=167)** For example, each executor can write to JDBC sinks in parallel, and this parallelism can be configured.
>
> **[2:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=174)** Similarly, executors can write to Kafka topics in parallel too.
>
> **[2:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=178)** Again, Spark provides custom parallelism options.
>
> **[3:02](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/parallel-processing-with-spark?u=76281980&t=182)** It also supports batching of writes to minimize network I/O and optimize write operations.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2), implements (1)
> **Analogies:** for example (3)
> **CLI Commands:** apache (2)
> **Env Vars:** jdbc (2)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Spark execution plan
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=0)** - [Instructor] Spark execution plans play an important role in optimizing pipelines.
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=5)** When a job is submitted to Apache Spark, it first analyzes all the code given to it and comes up with an execution plan.
>
> **[0:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=13)** Spark has an optimizer that analyzes the steps needed to process data and optimizes for performance and resource utilization.
>
> **[0:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=22)** Spark only executes code when an action like reduce or collect is performed.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=28)** At this point, the optimizer kicks in and analyzes all the previous steps required to achieve this action.
>
> **[0:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=34)** It then comes up with a physical execution plan.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=38)** The optimizer looks for reducing I/O, shuffling, and memory usage.
>
> **[0:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=42)** If the data sources can support parallel I/O, then Spark accesses them directly from the executor and paralyzes these operations.
>
> **[0:51](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=51)** This provides improved performance and reduces memory requirements on the driver.
>
> **[0:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=56)** It is recommended to print and analyze execution plans to understand what Spark is doing underneath and look for opportunities to optimize them.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-execution-plan?u=76281980&t=65)** Please refer to others Spark documentation and courses regarding execution plans.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Stateful stream processing
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=0)** - [Instructor] One of the challenges in stream processing is the need to maintain current state for computing aggregations and managing transitions.
>
> **[0:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=9)** It is also needed to resume processing after a pipeline is halted.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=14)** How does Spark help in this regard?
>
> **[0:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=17)** Let's start with the feature of checkpointing in Apache Spark.
>
> **[0:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=20)** Checkpointing is the ability to save the state of the pipeline to a persistent data store like HDFS or S3.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=28)** When a job fails and needs to be restarted, the information saved during checkpointing will be used to resume processing from where it left off.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=38)** Checkpointing will store a number of metadata elements as well as some RDDs at periodic intervals to the checkpoint store.
>
> **[0:46](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=46)** This includes Kafka offsets, so processing can resume from the last process record.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=52)** Also, if the state is tracked by keys, then that information can also be checkpointed.
>
> **[0:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=58)** Finally, if there are RDDs that require operations like windowing across multiple batches, they will also be stored in the checkpointing process.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=67)** Watermarks is another important feature of Apache Spark that is useful for event-time operations.
>
> **[1:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=74)** Event-time is the time a specific event or record is created at source.
>
> **[1:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=79)** If windowing needs to be done based on event-time, then processing of any window may have to wait until all events for that window arrive at the Spark Executors.
>
> **[1:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=90)** Watermarks are used to set the delay required before processing of an event-time window can happen.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=96)** Spark waits for this delay until all events for that window are expected to arrive.
>
> **[1:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=101)** It keeps track of the events and their ordering until the watermark has passed and the data is ready for processing.
>
> **[1:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=109)** Another interesting real-time use case is tracking the state of entities by keys.
>
> **[1:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=114)** For example, if you need to track the state of a browser session in real time, Spark can help track using the browser session ID as the key.
>
> **[2:02](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=122)** State changes are signified by new events that indicate the change.
>
> **[2:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=127)** The UpdateStateByKey operation is used to update the state for the given key.
>
> **[2:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/stateful-stream-processing?u=76281980&t=132)** Newly updated states are published as DStream to downstream transformations and actions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1), require (1)
> **CLI Commands:** apache (2)
> **Env Vars:** hdfs (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Spark analytics and ML
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=0)** - [Instructor] Analytics and machine learning are two alike domains with data engineering, Apache Spark can also help extend data engineering pipelines to perform analytics and machine learning.
>
> **[0:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=11)** Let's start with analytics.
>
> **[0:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=13)** Spark supports Spark SQL, a simple, yet powerful SQL interface to perform computations and aggregations.
>
> **[0:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=21)** SQL is internally-translated into distributed operations that can efficiently process large datasets.
>
> **[0:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=29)** Spark SQL can be used on both batch and real-time streaming pipelines Spark SQL syntax mimics standard SQL.
>
> **[0:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=37)** It's simple to use and yet powerful to transform, filter, and aggregate data in one single statement.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=45)** SQL-based analytics can be added to the same Spark pipeline that does data engineering, so implementation and deployment becomes easier.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=54)** Data pipelines can be cascaded with analytics, where the output of one operation can be passed on to downstream operations for further analytics and processing.
>
> **[1:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=64)** Results of analytics can either be persisted to databases or sent as streams for downstream consumers.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=72)** How about machine learning with Spark?
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=75)** Yes, Spark supports ML through a library.
>
> **[1:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=78)** Spark ML provides various out-of-the-box features for pre-processing of data.
>
> **[1:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=83)** This includes feature extraction, transformation, and dimensionality reduction.
>
> **[1:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=89)** Spark provides some popular machine learning algorithms and can support ML pipelines for both training and inference.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=96)** ML pipelines can be used to stitch data extraction, pre-processing, training, and inference into a single flow.
>
> **[1:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=103)** Spark thus provides an integrated end-to-end solution for data engineering, analytics, and machine learning.
>
> **[1:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/spark-analytics-and-ml?u=76281980&t=109)** Having discussed the capabilities of Apache Spark, let's use them to build a couple of data engineering use cases in the next few chapters.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7)
> **Code Keywords:** let (2), interface (1)
> **CLI Commands:** apache (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Batch Processing Pipelines

#### Batch processing use case: Problem statement
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=0)** - [Instructor] Having discussed the capabilities for Apache Spark in the earlier chapter, let's now design and implement a batch processing pipeline in this chapter.
>
> **[0:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=9)** Let's start off with discussing the business use case we are trying to solve with this pipeline.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=16)** We want to build a pipeline that will do stock aggregation across multiple locations for an enterprise.
>
> **[0:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=22)** This enterprise has warehouses across the globe.
>
> **[0:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=25)** Warehouses maintain stock of items by location, and distribute them to local stores.
>
> **[0:31](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=31)** Each warehouse also has a local data center with all the required hardware, and software deployed in that center.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=39)** A stock management application runs in each warehouse.
>
> **[0:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=43)** It is the same software, but has local independent instances deployed in the local data center.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=50)** A local MariaDB database keeps track of warehouse stock information.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=54)** Stock is maintained by each item for each day.
>
> **[0:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=58)** We keep track of the opening stock, receipts, and issues for each item for each day.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=65)** The enterprise wants to create a consolidated central stock database.
>
> **[1:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=69)** Item stock information needs to be collected from across warehouses on a daily basis, and then consolidate in a central MariaDB database.
>
> **[1:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=79)** We need to set up batch processing to upload local warehouse data into a central data cloud, and then aggregate stock across locations.
>
> **[1:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=89)** The solution should be scalable to hundreds of warehouses.
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-problem-statement?u=76281980&t=93)** This is a simple use case, but representative of a number of real life use cases that require data gathering, consolidation and aggregation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), require (1)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Batch processing use case: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=0)** - [Instructor] How does the "Batch Data Engineering: Use Case Design" look like?
>
> **[0:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=4)** Let's consider three warehouse locations, namely London, New York, and Los Angeles.
>
> **[0:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=10)** Each location has a MariaDB database called warehouse_stock.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=14)** There is also a central data center to which the data needs to be uploaded.
>
> **[0:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=20)** In order to store the uploaded data in the central data center, we need a file system that is scalable and provides concurrent access.
>
> **[0:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=29)** We want to create folders for each warehouse in this file system and provide permissions to the local warehouses to upload their respective files daily.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=39)** We will choose a distributed file system like HDFS or S3 that provides concurrent access, scaling, and security.
>
> **[0:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=48)** Files will also be created in Parquet format that allows for parallel reads by Spark.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=54)** Now, in each local data center, we will run a stock upload job built with Apache Spark.
>
> **[1:01](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=61)** This job will run on a daily basis on a local Spark cluster.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=65)** The job will read daily stock information from the warehouse_stock database and upload them into the respective warehouse folder on the distributed file system.
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=75)** The file format will be Parquet.
>
> **[1:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=77)** A stock aggregator job runs on a Spark cluster in the central data center.
>
> **[1:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=82)** It'll start after data uploads are expected to be complete every day.
>
> **[1:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=87)** The stock aggregator job will read all the Parquet files across locations, consolidate across warehouses, and store the results in a global_stock database on MariaDB.
>
> **[1:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-processing-use-case-design?u=76281980&t=99)** The bad jobs will run every day and consolidate data for further reporting.

> [!info]- Semantic Content
>
> **Code Identifiers:** warehouse_stock (2), global_stock (1)
> **CLI Commands:** apache (1)
> **Code Keywords:** let (1)
> **Env Vars:** hdfs (1)
> **Speakers:** - [instructor] (1)

#### Setting up the local DB
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=0)** - [Instructor] Let's implement the batch processing pipeline we designed in the previous video.
>
> **[0:06](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=6)** The code for this chapter is available in the notebook code_03_XX_Spark_BDE_Batch_Data_Engineering.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=16)** Before we build the jobs for stock processing, we need to create some sample data in the source database warehouse_stock.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=24)** We will do so in this video.
>
> **[0:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=26)** This is done using the Setup local database code.
>
> **[0:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=30)** This data generator generates data for three warehouses, New York, Los Angeles, and London.
>
> **[0:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=37)** In the real world, these will be three separate database instances, but for this example, we will create data for all the three warehouses in the same database.
>
> **[0:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=48)** We first establish a connection to the warehouse_stock database and open a cursor.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=57)** Then we delete all old data in the item stock table.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=63)** The generate_data method is called once for each of the three warehouses.
>
> **[1:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=68)** This method uses assimilated list of items and their values.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=72)** It also uses a random number generator to generate stock counts.
>
> **[1:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=80)** We iterate on this for three days.
>
> **[1:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=82)** For each item in the list of items, we pick random values for opening stock, receipts and issues, then we insert this information into the database.
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=94)** We generate stock information for three previous days related to the current date, and we execute this method for the three warehouses.
>
> **[1:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=104)** Let's run this code now and create the base data.
>
> **[1:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/setting-up-the-local-db?u=76281980&t=109)** The base data is now created.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), delete (1)
> **Code Identifiers:** warehouse_stock (2), generate_data (1)
> **Cross-References:** previous video (1)
> **Definitions:** is called (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Uploading stock to a central store
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=0)** - [Instructor] We will build the daily stock upload job in this video.
>
> **[0:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=4)** The code for this job is available in 03.04, Upload stock to the central store section.
>
> **[0:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=13)** We begin by first setting up this park session.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=16)** This is required to read the local stock information and then upload to the central database.
>
> **[0:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=23)** We use local of 2 to run the embedded version with two task notes for Spark.
>
> **[0:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=29)** The default parallelism is also set to 2.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=32)** While running this in a cluster, this can be fine tuned based on scale requirements.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=38)** Let's create the Spark session.
>
> **[0:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=44)** The upload stock method is used to upload stock for a given warehouse and a time period.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=50)** Multiple copies of this job are expected to run, one each for each of the local data centers.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=57)** We will, however, run all of them together in this example for demo purposes.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=63)** In this job, we first create a SQL query to find the minimum and maximum values of the ID column for the given date range, and warehouse ID.
>
> **[1:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=74)** The ID is an auto-generated column populated in the source database when new records are inserted.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=81)** We will use this column to partition data reads across multiple stock executors.
>
> **[1:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=87)** The minimum and maximum values are captured and stored in the min bounce and max bounce variables.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=96)** Now we set up the query to get stock information for a given date, range and warehouse ID.
>
> **[1:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=104)** We execute this query and read the results into a data set through the Spark session.
>
> **[1:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=110)** While reading, we provide various database connection parameters like URL, dbtable, user and password.
>
> **[1:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=117)** In order to enable parallelism, we provide the partition column and the lower and upper bones.
>
> **[2:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=125)** The num partition parameter determines the number of parallel connections that will be created to MariaDB.
>
> **[2:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=132)** This is usually equal to the number of available task executors.
>
> **[2:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=137)** This will enable reading and uploading of data in parallel across multiple executors and enable scaling of the job.
>
> **[2:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=147)** We are not going to use S3 or HDFS as the central file store for this example.
>
> **[2:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=154)** Instead, we are going to use a local file store created in the raw data directory under the project folder.
>
> **[2:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=162)** Please delete the contents of the raw data folder if they already exist.
>
> **[2:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=168)** Otherwise, it may generate an error.
>
> **[2:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=170)** For using S3 or HGFS, simply provide the corresponding URL.
>
> **[2:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=176)** The file is created in Parquet format.
>
> **[2:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=179)** We will also partition this data by the stock date and warehouse ID.
>
> **[3:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=184)** This will help in querying data later if filters need to be applied based on these attributes.
>
> **[3:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=191)** This process is executed for all the warehouses for the data ranges provided earlier.
>
> **[3:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=197)** Let's execute this code and review the results.
>
> **[3:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=204)** We see that the uploading process is complete for each of the warehouses.
>
> **[3:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=210)** We can go back and look at the raw data folder.
>
> **[3:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=214)** Here, we can see that the process has created sub folders by stock date, and then under that it has created sub folders by warehouse ID.
>
> **[3:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/uploading-stock-to-a-central-store?u=76281980&t=227)** Data is stored in Parquet format.

> [!info]- Semantic Content
>
> **Env Vars:** url (2), sql (1), hdfs (1), hgfs (1)
> **Code Keywords:** let (2), delete (1)
> **Prerequisites:** required to (1), set up (1)
> **CLI Commands:** find (1)
> **Versions:** 03.04 (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Aggregating stock across warehouses
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=0)** - [Instructor] Let's aggregate the stock information we collected across warehouses.
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=5)** This is expected to run in the central data center.
>
> **[0:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=8)** This job will summarize stock values for all records available in the source directory provided.
>
> **[0:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=15)** The source directory is draw data that we populated in the previous video.
>
> **[0:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=20)** We first create a MariaDB connection to the global stock database that will be the destination for the aggregated data.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=28)** Then we set up a new Spark session for the aggregation job.
>
> **[0:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=33)** Let's run this code.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=38)** We also delete any existing data in the central database to initialize.
>
> **[0:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=43)** This is an optional step only to be used when reinitializing this database.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=52)** To process, we read the source directory in Parquet format and create a dataset.
>
> **[0:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=58)** Next, we create a view on the dataset.
>
> **[1:01](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=61)** Creating a view enables us to directly run SQL statements against this table.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=67)** It makes it easier to do computations and queries this way.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=72)** Then we run a group by query for summarizing stock across warehouses.
>
> **[1:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=77)** It groups data by stock date and item name.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=81)** It adds up the opening stock, receipts, and issues.
>
> **[1:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=85)** It also computes the closing stock and the value of the stock.
>
> **[1:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=90)** The results are stored in the stock summary data frame.
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=94)** We then print some of the results to console.
>
> **[1:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=97)** Next, we will write these results to the item stock table in the global stock database.
>
> **[1:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=103)** Spark allows out-of-the-box capabilities to open data to a JDBC table.
>
> **[1:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=109)** Do note that we are using MySQL in the URL instead of MariaDB, since there could be potential issues by using MariaDB in the URL.
>
> **[1:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=119)** This functionality is the same, whether the target database is MySQL or MariaDB.
>
> **[2:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=125)** Let's run this code and review the results.
>
> **[2:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=130)** The job has successfully executed and printed the data processed.
>
> **[2:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=135)** We can now crosscheck the counts between the local databases and the global database.
>
> **[2:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=141)** This code here does the check.
>
> **[2:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=144)** Let's run this code now.
>
> **[2:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=149)** We can see that the total opening stock receives and issues tally between the two databases.
>
> **[2:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/aggregating-stock-across-warehouses?u=76281980&t=155)** This completes our batch data engineering pipeline, where we acquire data, transport it to a central location, consolidated it, and then persisted in the destination.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (1)
> **Env Vars:** url (2), sql (1), jdbc (1)
> **CLI Commands:** mysql (2)
> **Cross-References:** previous video (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Real-Time Processing Pipelines

#### Real-time use case: Problem
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=0)** - [Instructor] What will a real-time data engineering solution be like?
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=5)** Let's design and implement an example real-time data engineering pipeline in this chapter.
>
> **[0:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=11)** The business scenario for the real-time example is website analytics.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=16)** An enterprise runs an ecommerce website selling multiple items, like [amazon.com](https://amazon.com).
>
> **[0:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=23)** This website is used across multiple countries.
>
> **[0:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=26)** The enterprise wants to track visits to the website by its users.
>
> **[0:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=30)** It wants to know about the visit date, country, and duration for which the users stay in the website.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=38)** It also wants to track the last action before the user exited out of the website.
>
> **[0:43](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=43)** This last action may be in the catalog page, the FAQ page, the shopping cart, or the order fulfillment page.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=52)** To enable this real-time analytics, we need to build a pipeline that will receive a stream of website visit records.
>
> **[1:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=60)** For each user who visits this website, the stream will have one record.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=65)** The record will contain the visit date, the last action performed by the user, the country from where the browser session was initiated, and the duration of the visit.
>
> **[1:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=76)** Using this information, we need to compute the following in real-time.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=81)** We need to compute five second summaries by last action performed and write it to a database.
>
> **[1:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=88)** We need to keep track of the number of visits by users by each country.
>
> **[1:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=92)** We also need to identify records where the last action is shopping cart.
>
> **[1:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=98)** Then this needs to be published into an abandoned shopping cart queue for further downstream processing.
>
> **[1:44](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-problem?u=76281980&t=104)** Let's first design the processing pipeline and then proceed to implement the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Env Vars:** faq (1)
> **Speakers:** - [instructor] (1)

#### Real-time use case: Design
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=0)** - [Instructor] What does the design for the real-time website analytics use case look like?
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=5)** We have an e-commerce application that is running in the cloud data center.
>
> **[0:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=10)** The application creates user visit records when the user exits the application and publishes them to a Kafka queue called spark.streaming.website.visits.
>
> **[0:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=22)** It's possible that the application is located in multiple data centers across the globe.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=28)** Even in such cases, the data is streamed into a single central Kafka queue.
>
> **[0:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=33)** An Apache Spark job called Website Analytics runs and consumes the visit records in real time from the Kafka queue.
>
> **[0:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=41)** On the data that is received, it will execute multiple actions.
>
> **[0:46](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=46)** First, it computes five second summaries and inserts them into a MariaDB database called website_stats.
>
> **[0:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=53)** A table called visit_stats is used to capture that information.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=57)** Next, it maintains a running counter of the total duration by country using a Redis sorted set.
>
> **[1:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=64)** Finally, it filters those visits, which ended in the shopping cart, and publishes them to the spark.streaming.carts.abandoned topic.
>
> **[1:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=74)** This solution is natively scalable.
>
> **[1:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=77)** Kafka provides scalable real-time streaming of data.
>
> **[1:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=80)** Spark jobs can scale across multiple executors based on the incoming data load.
>
> **[1:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=86)** Redis is a distributed, real-time database that, again, can scale horizontally.
>
> **[1:31](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=91)** Each executor can open individual connectors to MariaDB and insert summary records in Paddle.
>
> **[1:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/real-time-use-case-design?u=76281980&t=97)** Let's now proceed to implement and execute the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1), let (1)
> **Code Identifiers:** website_stats (1), visit_stats (1)
> **CLI Commands:** apache (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Generating a visits data stream
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=0)** - [Instructor] To execute the website visit pipeline.
>
> **[0:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=3)** We first need a streaming data source.
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=5)** Let's create an example data stream.
>
> **[0:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=8)** The code for this chapter is in the notebook code 0403 Spark BDE generate a visit stream.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=16)** We have already created the required Maria DB table and the Kafka topic for this chapter.
>
> **[0:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=23)** When we ran the setup prerequisite script earlier in the course.
>
> **[0:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=27)** In this notebook, we simulate a data stream and publish it into the Kafka topic.
>
> **[0:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=33)** We begin by defining a string serializer.
>
> **[0:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=36)** Then we create a Kafka producer.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=39)** The bootstrap server is set to the port on which our Kafka instance is listening to.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=45)** The key and value serializer are set to the string serializer.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=50)** We then define a sample list of countries and a list of last actions.
>
> **[0:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=56)** We then generate hundred sample visit records.
>
> **[0:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=59)** For each record, we pick a random country and last action from the predefined list.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=65)** We set the time to the current time.
>
> **[1:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=68)** We also set the duration to a random value.
>
> **[1:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=73)** We form adjacent record for the visit with all the attributes we have simulated.
>
> **[1:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=79)** Then we publish the data to the Kafka topic, Spark.Streaming.Website.Visits.
>
> **[1:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=85)** We print the data published to the console.
>
> **[1:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=88)** Then we proceed to sleep for a random time of one to three seconds.
>
> **[1:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=94)** At the end of all publishing, we flush and close the producer.
>
> **[1:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/generating-a-visits-data-stream?u=76281980&t=98)** This notebook can be used to create the data stream concurrently while we consume it and compute metrics in the next couple of videos.

> [!info]- Semantic Content
>
> **Prerequisites:** setup (1), prerequisite (1)
> **Code Keywords:** let (1)
> **Env Vars:** bde (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Building a website analytics job
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=0)** - [Instructor] Let's start building the streaming website analytics job now.
>
> **[0:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=4)** The code for this is available in the notebook, code_04_04_Spark_BDE_Build_a_streaming_analytics_job.
>
> **[0:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=13)** We first define a few methods.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=16)** We first have the right to Redis method that updates Redis with the last action stats.
>
> **[0:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=22)** Here we connect to the Redis instance running on the local Docker container.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=28)** Then we increment the duration for the country in a sorted set identified by the key last action stats.
>
> **[0:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=36)** We are defining this as a method here.
>
> **[0:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=38)** However, in production systems, it's recommended to define it as a class that implements the data stream writer interface of Spark.
>
> **[0:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=49)** Then we define another function to write to MariaDB.
>
> **[0:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=53)** Here we first connect to the MariaDB database website stats.
>
> **[0:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=58)** We then insert the last action and the duration values into the website stats table.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=65)** Let's go to the main job now.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=67)** In this job, we define a schema for the visit record received through Kafka.
>
> **[1:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=73)** Then we initiate a Spark session with local as the master.
>
> **[1:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=79)** This runs an embedded PySpark instance.
>
> **[1:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=84)** We then proceed to subscribe and receive visit data from the Kafka topic.
>
> **[1:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=89)** To extract relevant attributes from the Kafka record, we use the schema defined and cast the values into specific columns.
>
> **[1:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=99)** The first analytics we perform is to filter for records where the last action is shopping cart.
>
> **[1:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=105)** We publish these records to a Kafka topic called spark.streaming.carts.abandoned.
>
> **[1:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=112)** We first format the record into a CSV and then publish it to Kafka.
>
> **[1:59](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=119)** Next, we will update Redis to maintain total duration by country.
>
> **[2:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=123)** The right to red function is used for this purpose.
>
> **[2:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=129)** Finally, we will compute 5 second summaries.
>
> **[2:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=132)** For this, we first create a watermark with event time using the timestamp attribute that is part of the visit record.
>
> **[2:20](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=140)** Then we group by timestamp and last action.
>
> **[2:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=144)** Then we find the sum of the duration from the data.
>
> **[2:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=148)** To write this data into MariaDB, we use the right to MariaDB function.
>
> **[2:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=154)** The three tasks will run continuously and concurrently as new records are received from Kafka.
>
> **[2:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=161)** Finally, we start a countdown latch to keep the program running.
>
> **[2:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-website-analytics-job?u=76281980&t=165)** Now let's proceed to execute the pipeline and review the results.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), finally, (2), implements (1), interface (1)
> **CLI Commands:** docker (1), find (1)
> **Env Vars:** csv (1)
> **UI Navigation:** go to (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Executing the real-time pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=0)** - [Instructor] The realtime pipeline writes to three different destinations, namely Kafka, MariaDB, and Redis.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=7)** We need to monitor these destinations to make sure that they are updated while the pipeline is running.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=14)** We will do so in this notebook.
>
> **[0:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=17)** This code is available in code 04_05_Spark_BDE_Execute_the_pipeline.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=24)** We start with the Kafka topic that has the abandoned cards.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=28)** We subscribe to that topic.
>
> **[0:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=30)** Next, we connect to Redis to read the country stats.
>
> **[0:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=35)** Finally, we connect to MariaDB to get the website stats.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=39)** We get the total duration by last action using the summary stat SQL.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=45)** Now we go into a monitoring loop.
>
> **[0:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=48)** We first fetch the Kafka messages in the abandoned cards topic, and print them.
>
> **[0:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=53)** Then we get the current scores in Redis, and print them.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=57)** Finally, we read the last action stats from the MariaDB database, and print them.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=63)** We go to sleep for five seconds and repeat the loop.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=67)** Let's run the demo now.
>
> **[1:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=69)** We first start the execute pipeline monitoring loop.
>
> **[1:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=77)** Then we go to the code we built in the previous video for website analytics, and start the job.
>
> **[1:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=87)** You can ignore the errors shown here.
>
> **[1:31](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=91)** Finally, we go to the Kafka stream generator and then start the generator.
>
> **[1:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=101)** We see that now some streaming data is being generated.
>
> **[1:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=105)** Let's go to the execute pipeline notebook and observe the results.
>
> **[1:51](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=111)** We can see that some stats data start showing up here.
>
> **[1:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=116)** As we can see, the Kafka topic gets new messages, then gets analyzed in real time, and results are published into the destination Kafka queue.
>
> **[2:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=125)** We can also see results from Redis and MariaDB.
>
> **[2:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=129)** The counts in Redis and MariaDB keeps getting incremented.
>
> **[2:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/executing-the-real-time-pipeline?u=76281980&t=134)** This completes our streaming pipeline example.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), let (2)
> **UI Navigation:** go to (4)
> **CLI Commands:** make (1)
> **Env Vars:** sql (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Data Engineering with Spark: Best Practices

#### Batch vs. real-time options
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=0)** - [Instructor] When building an Apache Spark pipeline, would you choose a batch or a real-time pipeline?
>
> **[0:06](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=6)** Data engineers and architects have a tendency to build all pipelines as real-time pipelines whenever possible.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=14)** The key justification is that it is super fast, would generate the required insights instantly, and enable business actions.
>
> **[0:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=22)** It is also considered cool in the data engineering world.
>
> **[0:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=25)** But before jumping into building realtime pipelines, we need to understand the complexities involved.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=32)** Realtime pipelines deal with unbounded data sets.
>
> **[0:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=36)** This makes it difficult to size compute resources, like memory and clusters.
>
> **[0:41](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=41)** When doing time-based aggregations, we need to deal with windowing and watermarks.
>
> **[0:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=47)** Irrespective of how delayed the watermarks are, we do end up with missed events and incorrect aggregations.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=54)** Real-time state management is another challenge to ensure that state is properly maintained across the Spark cluster.
>
> **[1:02](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=62)** Reprocessing of events is complex when issues happen.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=67)** It is not a simple rerun of the job, but a number of items need to be reset, like checkpoints and state.
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=75)** So when building a pipeline, it's important to analyze the requirements thoroughly before deciding if a real-time pipeline is appropriate for the use case.
>
> **[1:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=86)** Go for real-time pipelines when responses, analytics, and actions are needed with latency of few seconds.
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=93)** Do make sure that this is a mandatory requirement, not a nice one to have.
>
> **[1:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=98)** If this pipeline needs to process a continuous stream of real-time events, then real-time pipelines are a good choice.
>
> **[1:46](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=106)** The processing should also involve minimal and mandatory aggregation and analytics.
>
> **[1:51](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=111)** Adding too many aggregation steps will introduce complexity with watermarks and state management.
>
> **[1:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=118)** Make sure that the compute resources are sufficiently available for realtime pipelines.
>
> **[2:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=123)** Choose realtime pipelines only when the use case demands it.
>
> **[2:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=127)** You can also build hybrid pipelines where part of the pipeline is realtime and the rest is batch.
>
> **[2:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/batch-vs-real-time-options?u=76281980&t=133)** We will execute such a hybrid use case in our course exercise.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), apache (1)
> **Code Keywords:** super (1), case. (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Scaling extraction and loading operations
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=0)** - [Presenter] When scaling a data engineering pipeline, all stages in the pipeline need to scale in order for the entire pipeline to scale.
>
> **[0:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=8)** Extracting data and loading process data into destinations are time-consuming as they usually deal with discreets and rights.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=16)** How do we scale these steps when building pipelines with Apache Spark?
>
> **[0:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=21)** Let's start with data extraction.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=24)** Spark supports parallel extraction of data from various data sources.
>
> **[0:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=29)** For example, Spark can read JDBC records in parallel across its executors.
>
> **[0:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=35)** Similarly, it can divide up Kafka partitions between executors and process them in parallel.
>
> **[0:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=42)** For the data source being used, analyze the out-of-the-box options provided by Spark for that data source.
>
> **[0:49](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=49)** Exploit these options for parallel reads of data while maintaining data consistency.
>
> **[0:56](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=56)** If possible, choose a source technology and build the source schema in such a way to suit parallel operations.
>
> **[1:04](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=64)** This option is only available if the source systems are also being designed and built at the same time as the data engineering pipelines.
>
> **[1:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=73)** Spark supports predicate push downs.
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=75)** This pushes down filtering operations to the data sources, so unwanted records are not read into memory.
>
> **[1:22](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=82)** Leverage them when possible.
>
> **[1:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=85)** When doing parallel extractions, build defenses against missed records and duplicate records to ensure accurate results.
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=93)** What about loading data after processing into data syncs?
>
> **[1:38](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=98)** Each Spark executor can write independently and in parallel to a data sync for most out-of-the-box data syncs.
>
> **[1:46](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=106)** Analyze how Spark works with a specific data sync technology like RDBMS or a Kafka queue.
>
> **[1:53](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=113)** Understand the impact of record additions and updates on transactions, locking, and serialization.
>
> **[2:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=120)** You may have to limit the number of parallel connections to the sync based on supported capacity and parallelism.
>
> **[2:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=127)** Repartitioning RDDs is an effective way to control parallelism.
>
> **[2:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-extraction-and-loading-operations?u=76281980&t=132)** Finally, build defenses against missed updates and duplicate updates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** jdbc (1), rdbms (1)
> **CLI Commands:** apache (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Scaling processing operations
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=0)** - [Instructor] How can we scale processing of data with Apache Spark?
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=5)** Apache Spark is built for massive distributed operations, but care should be taken during pipeline design to avoid choke points and shuffles between executors.
>
> **[0:16](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=16)** Filter any unwanted data as early as possible in the pipeline.
>
> **[0:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=21)** This reduces the amount of data kept in memory and moved around executors.
>
> **[0:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=27)** Minimize reduce operations and associated shuffling yearly in the pipeline.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=32)** If needed, move them to the end of the pipeline as much as possible.
>
> **[0:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=36)** Repartition data as needed to reduce the number of partitions.
>
> **[0:40](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=40)** Certain operations have the tendency to create too many RDS, so keep track of this.
>
> **[0:47](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=47)** Cache results in the pipeline when appropriate to reduce reprocessing of data.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=52)** Avoid actions that send back data to the driver program until the end.
>
> **[0:57](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/scaling-processing-operations?u=76281980&t=57)** This minimizes shuffles between executors.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2)
> **Code Keywords:** this. (1)
> **Env Vars:** rds (1)
> **Speakers:** - [instructor] (1)

#### Building resiliency
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=0)** - [Lecturer] When we build scalable data pipelines, we also need to build resilience into them to make sure that the pipelines can support critical operations and deliver reliable outcomes.
>
> **[0:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=13)** Apache Spark provides various resilience capabilities out of the box against failures.
>
> **[0:19](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=19)** It handles failures at a task level, stage level, and executor level.
>
> **[0:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=25)** That is an important reason to use Apache Spark.
>
> **[0:28](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=28)** However, some additional considerations are required to make the solution resilient.
>
> **[0:34](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=34)** Monitor Spark jobs and Spark clusters for unhandled failures.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=39)** Create alerting systems by which required personnel are informed and problems can be fixed quickly.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=45)** Use checkpoints for streaming jobs with persistent data stores.
>
> **[0:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=50)** Even if Spark restarts, it can resume from where it left off.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=54)** Build resilience in associated input stores and output sinks.
>
> **[0:58](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=58)** After all, it's not enough for Spark jobs to be resilient, but the entire solution should be.
>
> **[1:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=65)** Choose data stores that provide redundancy and persistence of data.
>
> **[1:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=69)** The compute infrastructure needs resilience too.
>
> **[1:12](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-resiliency?u=76281980&t=72)** Deploys Spark and cluster setups, so failure of one node does not bring down the entire pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), apache (2), node (1)
> **Definitions:** is an  (1)
> **Speakers:** - [lecturer] (1)


### 7. 6. End-to-End Exercise Project

#### Project exercise requirements
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=0)** - [Instructor] Having learned about data engineering with Apache Spark, let's implement them in an end-to-end project.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=7)** This is an exercise for the students to try out by themselves and then refer to the solutions provided in the chapter.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=14)** There are always multiple ways to achieve the same end result.
>
> **[0:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=18)** The solution provided in this chapter is only one such possible result.
>
> **[0:24](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=24)** Here is the problem statement for the exercise.
>
> **[0:27](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=27)** In chapter four, streaming use case, we created a MariaDB table with five second summaries of the last action performed by website users.
>
> **[0:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=36)** We are going to use this table as the input and then build a downstream pipeline to analyze significant actions and maintain a running count table of the significant actions.
>
> **[0:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=48)** Let's review the detailed requirements for the exercise.
>
> **[0:51](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=51)** The task is to run a job every day and extract last action records with a total duration of more than 15 seconds within a five second window.
>
> **[1:01](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=61)** To make sure that you have executed the examples in chapter four, so there is already data available in this table.
>
> **[1:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=69)** Next, stream these significant last actions to a realtime Kafka topic, a topic called spark.exercise.lastaction.long has already been created for you during the setup process for the course.
>
> **[1:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=83)** Then analyze the significant actions in the Kafka topic in real time and maintain a running counter of the significant last actions by action name.
>
> **[1:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=93)** This use case combines a batch processing task and a real-time processing task and is an example of an hybrid pipeline.
>
> **[1:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=102)** The example itself is made, but will demonstrate the use of the techniques learned in the course.
>
> **[1:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=108)** Best of luck for the exercise.
>
> **[1:50](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/project-exercise-requirements?u=76281980&t=110)** Please refer to the rest of the videos in this chapter after you have completed this exercise.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **CLI Commands:** apache (1), make (1)
> **Definitions:** is an  (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Solution design
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=0)** - [Instructor] What would the hybrid pipeline for the course project look like?
>
> **[0:05](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=5)** We start off with the MariaDB table called visit_stats in the website_stats database.
>
> **[0:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=11)** We first build a long last action extraction job.
>
> **[0:14](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=14)** Actions with long durations are considered significant actions.
>
> **[0:18](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=18)** This job will filter records from the database and extract those with a duration of greater than 15 seconds.
>
> **[0:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=26)** Each of these records will be published to the Kafka topic, spark.exercise.lastaction.long.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=32)** We then build a second job, scorecard for last action job.
>
> **[0:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=37)** This job will listen to the Kafka topic in real time.
>
> **[0:40](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=40)** The job will maintain a Redis sorted set to track lost actions and their counts.
>
> **[0:45](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=45)** Each time a last action is received from the topic, the sorted set will be incremented for that specific action.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/solution-design?u=76281980&t=52)** Let's proceed to the next video to review the code for this exercise.

> [!info]- Semantic Content
>
> **Code Identifiers:** visit_stats (1), website_stats (1)
> **Code Keywords:** let (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Extracting long last actions
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=0)** - [Instructor] Let's examine the example code for the first part of the exercise, Extracting_long_last_actions.
>
> **[0:08](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=8)** The code for this example is available in the notebook code 06_03_Spark_BDE_long_last_actions.
>
> **[0:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=17)** Here, we need to extract the records from the MariaDB database.
>
> **[0:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=21)** Please note that the original records were generated using system date when the website visits data generator was run.
>
> **[0:29](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=29)** So please make sure to use the right date ranges.
>
> **[0:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=36)** A connection to the MariaDB database is obtained in Summary Con.
>
> **[0:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=42)** In order to take advantage of parallelism, we first find the min and max bounce for the records using the bounce query.
>
> **[0:52](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=52)** Then we define a Spark session.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=54)** We execute the query to filter for long actions and store them in the last action data frame.
>
> **[1:03](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=63)** We take advantage of parallelism by setting the relevant options for bounce and partitions.
>
> **[1:10](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=70)** We print the top 10 records in last action.
>
> **[1:13](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=73)** Next, we extract the last action column from the data set and publish it to the Kafka topic, spark.exercise.lastaction.long.
>
> **[1:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=85)** Let's run this code and review the results.
>
> **[1:30](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=90)** We see that the last action count is published as 32 for an FAQ record.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/extracting-long-last-actions?u=76281980&t=96)** We will build the second job in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (2)
> **Cross-References:** in the last (1), in the next (1)
> **Env Vars:** faq (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Building a scorecard
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=0)** - [Instructor] Let's build a running scorecard for long last actions published to Kafka in the previous video.
>
> **[0:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=7)** The code for this job is available in code 06_04_Spark_BDE_scorecard_for_last_action notebook.
>
> **[0:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=17)** To help with managing the Redis sorted set, we also have the write_to_redis function.
>
> **[0:23](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=23)** The Redis writer maintains a sorted set called long-last-action-stats on the Redis instance running on Docker.
>
> **[0:32](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=32)** Here, it increments the count by one every time a last action occurs in the data stream.
>
> **[0:39](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=39)** In the main job, we defined a Spark session.
>
> **[0:42](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=42)** Since we only have one value in topic, last_action, we do not need to define a schema.
>
> **[0:48](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=48)** Bury the topic directly into the raw_last_action dataframe.
>
> **[0:54](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=54)** From here, we extract the value as last_action into the last_action dataframe.
>
> **[1:01](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=61)** To maintain the Redis sorted set, we use the writeStream method and call the registrator for each record.
>
> **[1:07](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=67)** This will update and maintain the Redis sorted set.
>
> **[1:11](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=71)** We use the start method to start the Spark pipeline.
>
> **[1:15](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=75)** In order to review the values in the sorted set, we start a while loop.
>
> **[1:21](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=81)** We query the stats and Redis every five minutes and print it to the console.
>
> **[1:26](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=86)** Let's run this code now.
>
> **[1:31](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=91)** We can see that the long last action stats are getting updated in the UI.
>
> **[1:36](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/building-a-scorecard?u=76281980&t=96)** This completes our exercise and the course.

> [!info]- Semantic Content
>
> **Code Identifiers:** last_action (3), write_to_redis (1), raw_last_action (1), writestream (1)
> **Code Keywords:** let (2), function (1)
> **CLI Commands:** docker (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)


### 8. Conclusion

#### More about Apache Spark
> [LinkedIn Learning](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=0)** - [Kumaran] Now that you have learned about how to build data engineering use cases with Apache Spark, you can take your learning even further.
>
> **[0:09](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=9)** First, learn more about batch and stream processing use cases with Apache Spark with other courses in this platform.
>
> **[0:17](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=17)** Second, learn about how to use similar technologies like Kafka Streams and Apache Flink for the same use cases.
>
> **[0:25](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=25)** And finally, solve a new data engineering problem in your organization using the learnings from this course.
>
> **[0:33](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=33)** Data always intrigues me.
>
> **[0:35](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=35)** I bet it intrigues you too.
>
> **[0:37](https://www.linkedin.com/learning/apache-spark-essential-training-big-data-engineering-23165395/more-about-apache-spark?u=76281980&t=37)** So let's keep exploring it and find better ways of extracting knowledge out of it.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3), find (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [kumaran] (1)


## Instructor

- [[Kumaran Ponnambalam]]

## Resources

- Exercise files available

## Skills Covered

- Data Engineering
- Big Data
- Apache Spark
- Data Pipelines

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Processing]]
← [[Data Cleaning in Python Essential Training]] | **5 of 7** | [[ETL in Python and SQL]] →

### In [[Moving from Data Scientist to Data Analyst]]
← [[Deep Learning Getting Started]] | **7 of 10** | [[Python- Working with Predictive Analytics]] →

### In [[Advance Your Data Skills in Apache Spark]]
**1 of 6** | [[Introduction to Spark SQL and DataFrames]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Processing]]
- [[Moving from Data Scientist to Data Analyst]]
- [[Advance Your Data Skills in Apache Spark]]

## Related Courses

_Courses sharing skills:_

- [[Big Data Analytics with Hadoop and Apache Spark]] — Data Engineering, Apache Spark
- [[Databricks Certified Data Engineer Associate Cert Prep]] — Data Engineering
- [[Introduction to Spark SQL and DataFrames]] — Apache Spark
- [[Transition from Data Science to Data Engineering]] — Data Engineering
- [[Advanced Data Engineering with Snowflake]] — Data Pipelines

---

[↑ Back to top](#)