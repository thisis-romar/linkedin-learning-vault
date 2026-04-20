---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: learning-apache-airflow
url: "https://www.linkedin.com/learning/learning-apache-airflow"
duration_minutes: 130
duration: 2h 10m
level: Advanced
updated: 7/12/2023
learners: 8552
skills:
  - Apache Airflow
  - IT Automation
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEnCLY1die5zA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689007956856?e=2147483647&amp;v=beta&amp;t=X7LlhPxxNEA48X3-K3en5QWJRuMSvgbkOFNXkXB5aag"
linkedin_topic: Data Science
learning_paths:
  - Advance Your Data Engineering Skills
  - Data Engineering Foundations Professional Certificate by Astronomer
path_count: 2
tags:
  - course
  - topic/data-science
  - topic/devops
  - topic/database-management
  - topic/software-development
  - skill/apache-airflow
  - skill/it-automation
status: not-started
created: 2026-04-20
---

![Learning Apache Airflow](https://media.licdn.com/dms/image/v2/D560DAQEnCLY1die5zA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1689007956856?e=2147483647&amp;v=beta&amp;t=X7LlhPxxNEA48X3-K3en5QWJRuMSvgbkOFNXkXB5aag)

# Learning Apache Airflow

> Get an introduction to Apache Airflow with Google cloud architect and data engineer Janani Ravi. With Apache Airflow—an open-source platform for developing, scheduling, and monitoring batch oriented workflows—you can schedule individual tasks that you want to run as a part of your processing pipeline, specify dependencies between these tasks, all programmatically in Python. Airflow manages these d

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow) | 2h 10m | Advanced | 9K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Apache Airflow
- IT Automation

## Table of Contents

### Introduction

#### An overview of Apache Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=1)** - [Instructor] Hi, and welcome to this course on Learning Apache Airflow.
>
> **[0:04](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=4)** This is a beginner level course on Apache Airflow.
>
> **[0:07](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=7)** I assume that you have no previous experience working with Airflow, but I do assume that you are familiar with Python programming and working with the Linux terminal.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=18)** Python programming and Linux Shell commands are the prereqs for this course.
>
> **[0:22](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=22)** So let's get started.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=24)** What exactly is Apache Airflow?
>
> **[0:27](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=27)** Here is a definition.
>
> **[0:28](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=28)** It's an open source platform for developing, scheduling, and monitoring batch-oriented workflows.
>
> **[0:35](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=35)** The main objective of Apache Airflow is to be a workflow manager.
>
> **[0:40](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=40)** You can schedule individual tasks that you want to run as a part of your processing pipeline, specify dependencies between these tasks, all programmatically in Python and Airflow will automatically just manage these dependencies and make sure that your tasks are executed in the right order.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=58)** Apache Airflow models all of your workflows as code, so all workflows, tasks, and their dependencies you define using Python code.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=69)** Which is very very convenient, because once you're defining your tasks and dependencies programmatically, this allows for dynamic pipeline generation.
>
> **[1:18](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=78)** Apache Airflow is also extensible.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=81)** It contains operators to connect with a whole host of external technologies, whether that be S3 Buckets, SQL, SQLite, Python, Bash, anything.
>
> **[1:32](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=92)** Airflow is also incredibly flexible.
>
> **[1:34](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=94)** You can parameterize your workflow using Jinja templates.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=98)** These are built in, part of Airflow.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=101)** Airflow is built using a very modular design.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=105)** This modular architecture is what makes Airflow customizable.
>
> **[1:49](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=109)** Airflow is made up of a number of different components.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=112)** The scheduler is what you use to schedule your workflows.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=115)** Executors run your workflows.
>
> **[1:57](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=117)** The metadata database holds additional information about your workflow and its components.
>
> **[2:02](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=122)** And finally, the webserver is an interactive UI that you can use to manage your workflows.
>
> **[2:08](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=128)** Here is a high level architectural overview of how Airflow works.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=132)** The different components in Airflow come together to give you a nice workflow manager.
>
> **[2:19](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=139)** When you use Apache Airflow, you define all of your workflows as directed-acyclic graphs.
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=145)** The nodes in these graphs are the actual tasks that need to be executed.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=150)** The edges connecting the different task nodes refine the dependencies in your workflow.
>
> **[2:36](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=156)** Observe we have a directed edge between the ingest task and the analyze task.
>
> **[2:40](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=160)** This implies that data needs to be ingested before it can be analyzed.
>
> **[2:45](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=165)** The analyzed task has a dependency on the ingest task.
>
> **[2:49](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=169)** Here are some of the key features that make Airflow very, very useful.
>
> **[2:53](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=173)** The Directive-Acyclic Graph representation of your workflow allows modeling very complex workflows with many interdependencies.
>
> **[3:02](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=182)** Airflow offers a number of different connectors that allow you to access data from different technologies and store data to different stores.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=191)** Airflow also offers very flexible scheduling and monitoring capabilities.
>
> **[3:16](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=196)** You can schedule your workflows to run daily, hourly, or using cron expression.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=202)** if you have questions and you get stuck using Airflow, well, it has a large community of users and developers and a very rich ecosystem of plugins and integrations that you can use to unblock yourself.
>
> **[3:34](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=214)** We'll be running Airflow on our local machine but Airflow works with distributed systems as well such as Apache Spark, Kubernetes, AWS, and other cloud platforms.
>
> **[3:45](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=225)** So when might you choose to use Airflow?
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=227)** Well, Airflow is widely used in data related tasks such as building, extract, transform, and load pipelines.
>
> **[3:55](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=235)** Airflow can also be used with machine learning workflows.
>
> **[3:58](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=238)** All of the data pre-processing, all of the transformations can be done with Airflow.
>
> **[4:03](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=243)** It's often the case that you have to transfer data from one system to another, maybe from a local file system to the cloud.
>
> **[4:10](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=250)** Data transfer and processing pipelines can be built with Airflow.
>
> **[4:14](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=254)** Airflow is also used for automating business intelligence and reporting.
>
> **[4:18](https://www.linkedin.com/learning/learning-apache-airflow/an-overview-of-apache-airflow?u=76281980&t=258)** And Airflow can be used for DevOps and infrastructure automation as well.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (8), python (5), make (2), aws (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** sql (1), aws (1)
> **Tools:** terminal (1), bash (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)


### 1. Introducing Apache Airflow

#### Apache Airflow concepts and architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=1)** - [Instructor] Now that we have a basic understanding of Apache Airflow, let's discuss some key concepts and the architecture of Airflow.
>
> **[0:08](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=8)** First, what does Airflow enable us to do?
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=11)** Allows you to build and run workflows.
>
> **[0:15](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=15)** Every workflow is represented as a directed acyclic graph.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=20)** Your workflow instances in Airflow are actually referred to as DAGs.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=25)** Now, every task or bit of work that you want to perform is represented as a node or a vertex in this directed acyclic graph.
>
> **[0:34](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=34)** The edges that connect these nodes represent dependencies.
>
> **[0:39](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=39)** Each directed edge is a dependency from one task to another.
>
> **[0:43](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=43)** It also represents how data might flow between these dependencies.
>
> **[0:48](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=48)** So what exactly is a directed acyclic graph?
>
> **[0:50](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=50)** Here is an example.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=52)** Observe this graph here where every edge has an arrow indicating direction.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=58)** These directed edges typically represent the direction in which the data flows.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=62)** These are actually used to represent dependencies in Airflow.
>
> **[1:07](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=67)** The task that is pointed to depends on all of the previous tasks in the sequence, in the graph.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=73)** Now, every node here represents some bit of work that needs to be performed, a task that needs to be executed.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=81)** Now, these arrows also represent the dependencies.
>
> **[1:25](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=85)** They need not necessarily represent the data flow but they typically do.
>
> **[1:29](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=89)** That's why I mentioned that first.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=91)** It's possible for a task in the graph to access data generated by any other previously executed task.
>
> **[1:39](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=99)** Dependencies represent which task needs to be completed before another task can begin.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=105)** For example, the email error task that you see here depends on the describe integrity task, and that in turn depends on all previous tasks that come before it in the graph.
>
> **[1:56](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=116)** Now the graph cannot have cycles, because cycles represent circular dependencies, and in that case your workflow will never execute through to completion.
>
> **[2:07](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=127)** This is why we needed directed acyclic graph.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=132)** Here are the basic components that make up Airflow.
>
> **[2:14](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=134)** Here is a big picture visualization.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=137)** Now at the center of Airflow is the scheduler.
>
> **[2:20](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=140)** The scheduler is what triggers the workflows and submits the workflow to the executors so that the individual tasks in the workflow can be run.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=149)** The scheduler has to manage many important details before a task can be scheduled.
>
> **[2:34](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=154)** It determines when a task should be executed, depending on what dependencies were completed, have all of the dependencies run through for this task.
>
> **[2:43](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=163)** It'll also look at the availability of resources on your machine.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=166)** It'll keep track of the tasks' state and handle task failures and any retries that you may have configured.
>
> **[2:54](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=174)** The scheduler serves as the manager for Airflow.
>
> **[2:57](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=177)** It's the orchestrator for Airflow's Workflow Management System.
>
> **[3:03](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=183)** Next, we have the executor, whose job it is to receive tasks from the scheduler and then just execute those tasks.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=191)** Now in the default installation, which is what we'll be using, the executor actually runs inside the scheduler.
>
> **[3:17](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=197)** Now, this obviously won't work very well if you have a production workload with many complex heavy duty tasks.
>
> **[3:24](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=204)** In production deployments the executor pushes the execution out to worker nodes.
>
> **[3:30](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=210)** Airflow supports a number of different types of executors.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=213)** The sequential executor is the default executor in Airflow, and it executes tasks sequentially in a single process.
>
> **[3:41](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=221)** It's great for testing and debugging workflows.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=224)** The local executor also executes tasks in a single process, but it can run multiple tasks in parallel on the same machine.
>
> **[3:51](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=231)** This executor is the right one for small to medium-sized workflows that can be executed on a single machine.
>
> **[3:59](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=239)** Then we have the Celery executor which uses the Celery distributed task queue to distribute task execution across multiple worker nodes.
>
> **[4:08](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=248)** This is great for larger workflows.
>
> **[4:10](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=250)** Airflow also supports a Kubernetes executor that uses the Kubernetes framework to create a pod for each task instance, which allows for efficient resource utilization and better scalability.
>
> **[4:23](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=263)** This is the right choice for containerized production workflows running on Kubernetes clusters.
>
> **[4:30](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=270)** The web server component in Airflow runs a very useful user interface that we can use to inspect, trigger, and debug our DAGs and tasks.
>
> **[4:40](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=280)** We'll be working with the web server throughout this course.
>
> **[4:43](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=283)** Every workflow has some state, and it is this state that is stored in the metadata database.
>
> **[4:49](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=289)** This is used by the scheduler, executor, as well as the web server.
>
> **[4:53](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=293)** All of your workflows will be implemented in Python and stored in the DAG directory.
>
> **[4:59](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=299)** This is a folder of files which contain the DAG definitions and code, and this is the directory read by other components in Airflow.
>
> **[5:08](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=308)** At this point, you have a good high level understanding of how Airflow works.
>
> **[5:12](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=312)** I'm going to define two more terms.
>
> **[5:14](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=314)** The first term is operators.
>
> **[5:16](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=316)** Operators are predefined tasks that Airflow provides that can be used to build the nodes in your workflow directed Celery graph.
>
> **[5:26](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=326)** We'll be working with Bash operators Python operators, SQLite operators for different use cases.
>
> **[5:32](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=332)** And then finally, XComs.
>
> **[5:35](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=335)** This stands for cross communication.
>
> **[5:37](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=337)** This is a system that Airflow uses to pass data between tasks, where tasks can push and pull small bits of metadata.
>
> **[5:46](https://www.linkedin.com/learning/learning-apache-airflow/apache-airflow-concepts-and-architecture?u=76281980&t=346)** Values generated by by one task can be passed to other tasks in the workflow using XComs.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), is an  (1), stands for (1)
> **CLI Commands:** node (2), python (2), apache (1), make (1)
> **Code Keywords:** let (1), interface (1), finally, (1), pass (1)
> **Env Vars:** dag (2)
> **Analogies:** for example (1), picture (1)
> **Tools:** bash (1)
> **Speakers:** - [instructor] (1)

#### Initial setup: macOS and Windows
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=0)** - In this demo, we'll see how you can install and get set up with Apache Airflow on your local machine.
>
> **[0:06](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=6)** Now, we've already discussed that Airflow is an open source platform designed to programmatically allow you to create, schedule, and monitor workflows.
>
> **[0:15](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=15)** Now, there are several techniques that you can use to install Apache Airflow.
>
> **[0:19](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=19)** And all of these techniques are listed out here on the Apache Airflow site.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=24)** Now, some of these techniques are meant for production environments, so they require a fair bit of setup.
>
> **[0:30](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=30)** But the easiest way to get up and running with Airflow is to use PyPI.
>
> **[0:36](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=36)** PyPI is the Python Package Index.
>
> **[0:38](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=38)** It's a repository of software packages that we use with the Python Programming Language.
>
> **[0:44](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=44)** This is by far the easiest way to get up and running with Airflow on your local machine.
>
> **[0:49](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=49)** You don't have to deal with Docker, Docker containers. Nothing.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=52)** At the time of this recording, Apache Airflow can only be run POSIX-compliant operating systems.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=59)** So if you want to use a ext system with Apache Airflow you have to run a modern Linux distribution, or recent versions of macOS.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=69)** Now, it's possible for you to run Airflow on Windows, but you need to run it via WSL 1, or Windows Subsystem for Linux 2, or via Linux Containers.
>
> **[1:20](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=80)** In the first part of this movie, I'll show you how you can get set up with a virtual environment on macOS.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=86)** And we'll run Apache Airflow within this virtual environment.
>
> **[1:30](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=90)** In the second part of this movie, I'll show you how you can get set up with Windows Subsystem for Linux 2.
>
> **[1:37](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=97)** And then you can install Apache Airflow on Windows.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=101)** So the next minute or two is for the Mac users.
>
> **[1:43](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=103)** And then I'll switch over to Windows.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=105)** Now, I'm going to run python --version on my local machine to see what version of Python I have available.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=112)** I have Python 3.9.13.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=115)** Now, Airflow has been tested with Python 3.7, 3.8, 3.9, and 3.10.
>
> **[2:02](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=122)** However, it's recommended that you use a slightly older version of Python.
>
> **[2:06](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=126)** So I'm going to use Python 3.7 in a virtual environment.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=131)** However, if you have a Python version between 3.7 and 3.10, you should be fine to use it.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=137)** Now, I'm going to set up my virtual environment using my Conda installation on Anaconda.Navigator.
>
> **[2:23](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=143)** Anaconda Navigator is easily available and installable from the [anaconda.com](https://anaconda.com) site.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=149)** Head over to Environments.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=151)** And this is where I'm going to create a new environment.
>
> **[2:34](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=154)** Click on the Create button here at the bottom.
>
> **[2:37](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=157)** It'll ask you for the name of the environment.
>
> **[2:39](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=159)** Give it a meaningful name, python37 is what I've called it.
>
> **[2:43](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=163)** And make sure you specify the Python version.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=166)** Python 3.7.16 is what I've chosen.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=170)** Go ahead and click on the Create button.
>
> **[2:53](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=173)** And this will set up a new environment that you can activate from the terminal window and use.
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=179)** 'Cause I have Anaconda Navigator, I have Conda installed.
>
> **[3:02](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=182)** So I run conda env list to see the environments that I have available.
>
> **[3:07](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=187)** Notice my python37 environment is available.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=191)** So, use conda activate, and point to your environment.
>
> **[3:16](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=196)** And this will activate the 3.7 environment.
>
> **[3:19](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=199)** Now run python --version, and you should see Python 3.7.16.
>
> **[3:24](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=204)** This environment is where I'm going to be running Airflow.
>
> **[3:28](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=208)** But like I'd mentioned earlier, you don't have to run Airflow within a virtual environment.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=213)** I'm doing this because it allows me to isolate Airflow from the other programs I have running.
>
> **[3:38](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=218)** Now let's switch tracks, and see the initial setup needed for a Windows machine.
>
> **[3:43](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=223)** I'll show you how you can get set up with Windows System for Linux.
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=227)** Click on the start menu, and search for Windows features.
>
> **[3:52](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=232)** Now, you'll see an option called Turn Windows features on or off in the control panel.
>
> **[3:58](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=238)** Open up this dialogue.
>
> **[4:00](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=240)** Now here in this dialogue, at the bottom, you should find an option for Windows Subsystem for Linux.
>
> **[4:06](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=246)** Go ahead and check that option.
>
> **[4:08](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=248)** This will set up WSL on your Windows machine.
>
> **[4:11](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=251)** Click on the OK button.
>
> **[4:13](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=253)** And the setup will take about a few minutes to run, maybe two or three minutes.
>
> **[4:17](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=257)** Once this is complete, you'll need to restart your machine for this feature to take effect.
>
> **[4:23](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=263)** Click on Restart now.
>
> **[4:25](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=265)** Now, once the restart is complete, come back to the Start menu, and search for the Microsoft Store.
>
> **[4:32](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=272)** Just type in store, and you should find the Microsoft Store there.
>
> **[4:35](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=275)** Click on the open button, so that the store opens up.
>
> **[4:39](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=279)** Notice the search bar on top.
>
> **[4:41](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=281)** Search for the Ubuntu distribution.
>
> **[4:44](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=284)** I'm going to install Ubuntu so that we can work with the Linux virtual machine using WSL.
>
> **[4:51](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=291)** Click on the get button here to get the Ubuntu terminal environment.
>
> **[4:55](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=295)** Now, this will install something that might take several minutes.
>
> **[4:58](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=298)** It took about four or five minutes on my machine.
>
> **[5:01](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=301)** Once the installation is complete, click on Open.
>
> **[5:04](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=304)** And in a few minutes, you'll see a Linux terminal that you can use.
>
> **[5:08](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=308)** Let's enter a username. I've said loonycorn, but you should say something that makes sense for you.
>
> **[5:12](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=312)** Specify the password.
>
> **[5:14](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=314)** And then you'll need to retype and confirm the password.
>
> **[5:18](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=318)** This is the username and password that you'll use to log into this Linux terminal.
>
> **[5:23](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=323)** Now, there are a few more steps.
>
> **[5:24](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=324)** You need to code sudo apt update, so that all of the components of your Ubuntu distribution have been updated.
>
> **[5:32](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=332)** Code sudo apt upgrade as well, and wait for the upgrade to complete.
>
> **[5:37](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=337)** And once these commands have run through, the next thing is for you to install plp.
>
> **[5:41](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=341)** That is the Python package manager.
>
> **[5:44](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=344)** Once plp is available on your machine, you can use this to install the Python libraries that you need.
>
> **[5:50](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=350)** Click on yes here, or say yes here, to continue.
>
> **[5:54](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=354)** And you are now all set up.
>
> **[5:55](https://www.linkedin.com/learning/learning-apache-airflow/initial-setup-macos-and-windows?u=76281980&t=355)** You should be able to follow the exact same steps that I'm going to perform on the Mac machine within this Linux terminal, and get Airflow set up locally on Windows.

> [!info]- Semantic Content
>
> **CLI Commands:** python (15), apache (7), docker (2), find (2), sudo (2)
> **Prerequisites:** set up (9), install (7), setup (3), you'll need (2)
> **Versions:** python 3 (5), 3.10 (2), 3.7 (2), 7.16 (2), 9.13 (1)
> **Tools:** terminal (5), anaconda (4)
> **UI Navigation:** click on (9)
> **Code Keywords:** switch (2), let (2), require (1), continue (1)
> **Env Vars:** wsl (3), posix (1)
> **Code Identifiers:** macos (2)

#### Understanding Airflow configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=1)** - [Narrator] Now that you have the prereq setup up for MacOS or Windows, let's go ahead and install Airflow using the Python package manager pip.
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=11)** So I call pip install and I install Apache Airflow and I specify a constraints file.
>
> **[0:17](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=17)** This constraint file specification allows you to have an Airflow installation that is repeatable.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=24)** The constraints contain a tested and working set of dependencies for Apache Airflow and this is the recommended way to install Airflow.
>
> **[0:34](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=34)** Go ahead and run this.
>
> **[0:35](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=35)** Now, this might take a few minutes to run through.
>
> **[0:37](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=37)** It took about two or three minutes on my machine.
>
> **[0:40](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=40)** Apache Airflow and all of its dependencies were installed.
>
> **[0:44](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=44)** Once the Airflow installation is complete all you need to do is run Airflow version and you should see the version of Airflow that you're working with.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=52)** At the time of this recording, we are using the latest version, 2.5.3.
>
> **[0:57](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=57)** The Airflow command is what we use to bring up the various Airflow components and interact with Airflow, run Airflow-h and this will give you the help that you need for all of the different commands that you can run.
>
> **[1:10](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=70)** I'll show you a few of these commands in the next few minutes, but you can always go back to the help menu and get more information.
>
> **[1:17](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=77)** The Airflow cheat sheet gives you a quick overview of the various commands that you can use with Airflow with the scheduler, with the tag with the web server, and so on.
>
> **[1:28](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=88)** All tasks that you can perform with the Airflow UI you can perform on the command line with the Airflow command.
>
> **[1:35](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=95)** Now, Airflow info will give you information about your current Airflow installation.
>
> **[1:40](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=100)** Notice the Airflow version.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=102)** Notice the executor that Airflow uses by default.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=105)** That's the sequential executor that runs a single process at a time.
>
> **[1:49](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=109)** Everything that you see here is a configuration setting for Apache Airflow and something that you can tweak and you can observe that all of these configuration settings are grouped into sections, and these section titles are in green.
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=123)** When you install Airflow, the Airflow Home Directory is created in your current working directory.
>
> **[2:09](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=129)** So I'm going to CD the into the Airflow sub-folder in my current working directory, and I run an LS-L.
>
> **[2:16](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=136)** This is the Airflow installed directory or Home directory.
>
> **[2:20](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=140)** Notice we have a logs sub-folder.
>
> **[2:22](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=142)** That's where the logs will be stored.
>
> **[2:24](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=144)** Airflow.cfg is the config file for Airflow and web server config.py is the config file for the web server that we launch.
>
> **[2:32](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=152)** Let's take a quick peek at the Airflow config file.
>
> **[2:36](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=156)** Notice that the config file is divided into sections.
>
> **[2:39](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=159)** The section that we are viewing here is the core section and you can see core in square brackets on top.
>
> **[2:44](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=164)** The DAGs folder is where we will store the directed (indistinct) click graphs containing Airflow tasks.
>
> **[2:51](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=171)** Now the DAGs folder is set to the DAGs directory under the Airflow installation and this is where we'll continue to use it.
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=179)** Another thing to note is that the executor that Airflow will be using is the sequential executor that runs one task at a time, one process at a time.
>
> **[3:09](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=189)** This is good enough for all of the demos of this course.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=191)** We'll stick with that.
>
> **[3:13](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=193)** I'll scroll down a bit so we can look at some other sections that are useful.
>
> **[3:16](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=196)** Here is the database section, database specified in square brackets which is where we configure database settings.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=203)** Scrolling a little further down we have the logging section here.
>
> **[3:26](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=206)** Notice the base log folder.
>
> **[3:28](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=208)** That's where Airflows logs will be stored.
>
> **[3:31](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=211)** Very useful for debugging.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=213)** Scrolling further down here's the section that contains the config properties for the web server that we run.
>
> **[3:38](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=218)** Notice the URL for the web server is local host 8080.
>
> **[3:43](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=223)** This is where you change that if you wanted to.
>
> **[3:45](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=225)** Also notice the default UI timezone is UTC, so all of the times that we specify are going to be in UTC.
>
> **[3:52](https://www.linkedin.com/learning/learning-apache-airflow/understanding-airflow-configuration?u=76281980&t=232)** And then we have the section for the Airflow scheduler here at the bottom.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (4), pip (2), python (1), cd (1), ls (1)
> **Prerequisites:** install (5), setup (1), configure (1)
> **Code Keywords:** let (2), this. (1), default. (1), continue (1)
> **Env Vars:** utc (2), url (1)
> **File Paths:** airflow.cfg (1), config.py (1)
> **Versions:** 2.5.3 (1)
> **Cross-References:** in the next (1)
> **Documentation:** specification (1)

#### Running Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=1)** - [Instructor] You can interact with this config file from the UI, and we'll do that, but you can also call airflow config on the command line and interact with the config file.
>
> **[0:10](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=10)** This will give you all of the help.
>
> **[0:12](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=12)** Let's call airflow config get-value default_task_retries.
>
> **[0:16](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=16)** You can see that, by default, task retries are set to 0.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=20)** Our airflow config get value webserver base_url will tell us that our web server will run on localhost 8080.
>
> **[0:28](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=28)** What about airflow config get-value database sql_alchemy connection?
>
> **[0:33](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=33)** The SQLite database is what Airflow will use to store administrative information.
>
> **[0:38](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=38)** Now that we have Airflow on our local machine, let's configure it so that we can use it.
>
> **[0:43](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=43)** Now, Airflow requires a database.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=46)** Now, if you're just experimenting and working with Airflow, we can stick with the default SQLite database.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=52)** In a production environment, you need to configure PostgreSQL or some other production database.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=59)** Now initialize the database by calling airflow db init.
>
> **[1:03](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=63)** Now, it's quite possible that when you are running this command, you'll see a warning about SQLAlchemy, as you can see here on my screen.
>
> **[1:10](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=70)** Now, this is because Airflow is currently not compatible with SQL Alchemy 2.0, which is the latest version.
>
> **[1:17](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=77)** There is a ticket open to add Airflow support for SQLAlchemy 2.0, so it's quite possible that by the time you are running this code, SQLAlchemy 2.0 will be supported.
>
> **[1:27](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=87)** However, you can still use it, and everything will work just fine.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=91)** After initializing the database, if you run an ls -l, you'll find that in the current Airflow home folder, you'll find an airflow.db file.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=101)** This is the SQLite database that airflow will use.
>
> **[1:44](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=104)** In order to use the Airflow user interface, you need to create an admin user.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=110)** Now, by default, there are no users provisioned on Airflow.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=113)** airflow users -h will show you what commands you can run with Airflow users.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=118)** Let's call airflow users list, and you'll see that there are no users configured.
>
> **[2:04](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=124)** So let's create our user.
>
> **[2:05](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=125)** You'll need to call airflow users create and pass in a number of flags.
>
> **[2:09](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=129)** The email address, cloud.user@[loonycorn.com](https://loonycorn.com), the username, which is just cloud.user, that is the -u flag at the very bottom.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=138)** The password for the user, which is just password, that is the -p flag.
>
> **[2:23](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=143)** The role for the user, which is an administrative role, that is the -r flag, -r Admin.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=149)** The -f flag is to specify the first name, and the -l flag to specify the last name.
>
> **[2:35](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=155)** Go ahead and run this command, and a new user will be created, and we'll use this user to log in to our Airflow UI.
>
> **[2:43](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=163)** Here we can see that the cloud.user has been successfully created.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=170)** And that's it. We are done with the basic configuration.
>
> **[2:52](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=172)** We can bring up the Airflow services that we need to run Airflow.
>
> **[2:57](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=177)** The first is the scheduler.
>
> **[2:58](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=178)** Running Airflow Scheduler will bring up the scheduler running on your local machine.
>
> **[3:04](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=184)** Now, along with the scheduler, you need to run a web server, open up a new tab, make sure you're within the Airflow environment.
>
> **[3:10](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=190)** So if you've created a virtual environment for Airflow, you'll need to run a Conda activate command.
>
> **[3:16](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=196)** So you see I have my Python 3.7 environment.
>
> **[3:20](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=200)** I'm going to go ahead and activate this environment, and within this environment, I'm going to run the Airflow web server.
>
> **[3:27](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=207)** airflow webserver will bring up the web server, and it'll be available for you to use.
>
> **[3:32](https://www.linkedin.com/learning/learning-apache-airflow/running-airflow?u=76281980&t=212)** At this point, Airflow should be up and running successfully on your local machine.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (2), interface (1), pass (1)
> **CLI Commands:** find (2), ls (1), make (1), python (1)
> **Versions:** 2.0 (3), python 3 (1)
> **Prerequisites:** configure (2), you'll need (2)
> **Code Identifiers:** default_task_retries (1), base_url (1), sql_alchemy (1)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [loonycorn.com](https://loonycorn.com) (1)
> **Env Vars:** sql (1)


### 2. Running Workflows on Airflow

#### Navigating and exploring the Airflow UI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=0)** - [Instructor] Once your Airflow scheduler and that server is up and running, you should be able to go to localhost 8080 and see this nice little login page.
>
> **[0:10](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=10)** This is where you'll log in to the Airflow UI.
>
> **[0:12](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=12)** Specify the username and password for the user that you had created as an administrator on the command line and click on Sign In.
>
> **[0:21](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=21)** As soon as you sign in, you'll be taken to a page that lists out all of the directed acyclic graphs or DAGs that you have available.
>
> **[0:30](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=30)** You might say, "But I haven't set up any DAGs."
>
> **[0:32](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=32)** Well, these are all internal examples that Airflow provides.
>
> **[0:36](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=36)** Now, it's worth your while paying attention to the messages on top.
>
> **[0:39](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=39)** You can see a DAG Import Error.
>
> **[0:41](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=41)** That's because one particular directed acyclic graph could not be imported directly, and that's because we do not have Pandas installed in our virtual environment.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=52)** You may not see this error if you have Pandas installed.
>
> **[0:55](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=55)** Now, this error is useful because this is how you'll see errors when you create your own DAGs, and you have errors in them like Python syntax errors or dependency errors.
>
> **[1:05](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=65)** So make sure you pay attention to your DAG imports.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=69)** Next, you can see that there is a warning that says Do not use SQLite as a metadata DB in production.
>
> **[1:15](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=75)** Well, this is not production, so that's fine.
>
> **[1:17](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=77)** And there's another warning that says Do not use a SequentialExecutor in production.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=81)** That's fine, too.
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=82)** This is a development and testing environment.
>
> **[1:25](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=85)** Now, if you scroll down, you'll see all of the example DAGs that Airflow makes available to us.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=91)** Whatever use case you think of, if you want to see an example, I suggest you come here and search for that particular example.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=98)** Every execution of a directed acyclic graph with your task is referred to as a run, and every DAG run has a status that you can see here.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=107)** You can see whether it's queued, whether the run was successful, whether it's running, whether it's fail.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=113)** If you have multiple successes or failures, you'll get a number within that circle.
>
> **[1:57](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=117)** Now, for every task in your DAG, you'll also get a status right here.
>
> **[2:02](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=122)** So you can see whether a task was scheduled, whether it's failed, whether it's up for restart, whether it's queued, everything.
>
> **[2:08](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=128)** Let's scroll down a bit and execute one of these DAGs before we construct our own.
>
> **[2:13](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=133)** In order to execute a DAG, you'll need to unpause the DAG.
>
> **[2:16](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=136)** DAGs are paused by default.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=138)** Now, for this particular DAG, the example_branch_operator, as soon as you unpause the DAG, in a few seconds you'll find that the DAG will run through.
>
> **[2:28](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=148)** Notice the schedule for the DAG. It says @daily.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=151)** It's scheduled to run daily.
>
> **[2:33](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=153)** The minute you unpaused it, Airflow noticed that a run was due, and it triggered a run, and it was completed successfully.
>
> **[2:39](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=159)** That's why you can see the green circle with the one.
>
> **[2:42](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=162)** The timestamp in blue tells us when the DAG was executed, right now, and you can see the circles over to the right.
>
> **[2:49](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=169)** You can see the status of the individual tasks in the DAG in those circles.
>
> **[2:55](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=175)** Let's click through to the example_branch_operator and take a look at a detailed view.
>
> **[3:01](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=181)** This pane off to the left is super useful because it lists out all of the individual tasks in the DAG.
>
> **[3:08](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=188)** The first task is called run_this_first, then there is a branching, the follow_branch, a join, and so on.
>
> **[3:14](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=194)** The bar on top gives us the duration of execution for this graph.
>
> **[3:20](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=200)** You can see how long it took to complete all of the tasks.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=203)** The individual squares you see in green and pink are the statuses for each of the tasks.
>
> **[3:28](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=208)** A green indicates the task was completed successfully.
>
> **[3:32](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=212)** A pink indicates the task was skipped because of some branching condition in this case.
>
> **[3:37](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=217)** There's a nice little legend on top, starting with deferred, failed, queued, removed, restarting, and so on.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=224)** These colors give you the status colors for the individual tasks.
>
> **[3:49](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=229)** Notice success is dark green and skipped is pink.
>
> **[3:53](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=233)** If you want to force the execution of a DAG, you can trigger it.
>
> **[3:57](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=237)** Click on this little Play button, and you'll see a popup that says Trigger DAG.
>
> **[4:03](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=243)** Triggering a DAG will execute a DAG right away.
>
> **[4:06](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=246)** And here you can very clearly see the second run of execution for this DAG.
>
> **[4:12](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=252)** The branching conditions were different.
>
> **[4:13](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=253)** So you can see that different tasks were executed successfully and different tasks were skipped over.
>
> **[4:20](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=260)** Now, you might want to debug a particular run for a DAG.
>
> **[4:23](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=263)** You can hover over each run and get information.
>
> **[4:27](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=267)** You can also select a run, and you'll see additional details here in this center pane.
>
> **[4:32](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=272)** You can see when the run was scheduled, when it actually ran, a whole bunch of details.
>
> **[4:37](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=277)** Let's select the second run.
>
> **[4:39](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=279)** Once again, hovering over it will give us information.
>
> **[4:41](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=281)** And if you select it, you'll get the details of the second run.
>
> **[4:45](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=285)** Observe the Run type manual here in the middle of the screen.
>
> **[4:48](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=288)** That's because we manually triggered this run of the DAG.
>
> **[4:52](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=292)** When you execute a DAG, it's quite possible that individual tasks fail in the DAG.
>
> **[4:57](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=297)** If you want to see the status of the individual task, hover over those little boxes.
>
> **[5:02](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=302)** You can also click on a particular task, and you'll get additional details.
>
> **[5:06](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=306)** Notice the task actions, you get the task instance details, and, most importantly, you can access the logs for this task.
>
> **[5:14](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=314)** Click on Log option here, and that will take you to the logs for this particular task, the branching task.
>
> **[5:21](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=321)** Task logs are all important in Airflow.
>
> **[5:24](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=324)** This is where you'll see what exactly happened with the task, why it failed, the exceptions, everything.
>
> **[5:30](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=330)** If you want a big-picture visualization of what your DAG looks like, go to the Graph option here, and this will give you a graphical representation of the tasks that you're running.
>
> **[5:41](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=341)** This view makes it very easy for you to figure out the dependencies that you've configured between your tasks, and this is where you'll debug if your dependencies are wrong in some way.
>
> **[5:51](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=351)** This also shows you what tasks were executed.
>
> **[5:53](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=353)** All tasks outlined in a green were run through successfully.
>
> **[5:57](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=357)** Tasks outlined in pink was skipped over.
>
> **[6:01](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=361)** The solid color of the boxes indicates what kind of operator you were executing.
>
> **[6:05](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=365)** Notice the legend on the top left: BranchPythonOperator in light pink, EmptyOperator in light green.
>
> **[6:11](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=371)** And, of course, you can select and hover over individual tasks, individual paths in the graph to get additional information.
>
> **[6:21](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=381)** This will allow you to see whether things are run through successfully and so very useful tool while working with DAGs.
>
> **[6:28](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=388)** Now, if you head over to Calendar, you'll be able to see on what days this DAG was run through successfully.
>
> **[6:34](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=394)** You can see that the DAG was successfully executed for two days in this year.
>
> **[6:40](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=400)** These are the boxes highlighted in green.
>
> **[6:42](https://www.linkedin.com/learning/learning-apache-airflow/navigating-and-exploring-the-airflow-ui?u=76281980&t=402)** So there were two successful executions corresponding to the runs for these two days.

> [!info]- Semantic Content
>
> **Env Vars:** dag (25)
> **UI Navigation:** click on (4), go to (2), scroll down (2), select the (1)
> **Code Keywords:** let (3), default. (1), super (1), case. (1)
> **Code Identifiers:** example_branch_operator (2), run_this_first (1), follow_branch (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** python (1), make (1), find (1)
> **Warnings:** warning (2)
> **Prerequisites:** set up (1), you'll need (1)

#### Creating your first DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=1)** - [Instructor] In this demo, we are going to be creating and executing our very first Airflow DAG.
>
> **[0:06](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=6)** Now, but before we do that, you have to admit that the Airflow UI with all of those example DAGs in there is kind of cluttered and hard to work with.
>
> **[0:14](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=14)** Let's fix that.
>
> **[0:15](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=15)** Here I am on the terminal where I have my web server running.
>
> **[0:19](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=19)** I'm going to kill the web server, as well as the scheduler so that I can change something in the Airflow configuration file.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=25)** So my web server has been killed.
>
> **[0:28](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=28)** I'm going to head over to the terminal window where I have the scheduler running.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=31)** I'm going to go ahead and kill the scheduler as well.
>
> **[0:35](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=35)** Now, both the scheduler and the web server are down.
>
> **[0:38](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=38)** So let's head over to our airflow.cfg file, and within here, notice that we have load_examples set to True by default.
>
> **[0:48](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=48)** Now I'm going to set load_examples to False.
>
> **[0:51](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=51)** This is a configuration property within the core section.
>
> **[0:53](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=53)** Setting this to False will turn off the airflow internal examples.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=58)** Now, go back and in your terminal window, bring up the scheduler once again, and with the scheduler running, switch over to the terminal window where you bring up the web server and run airflow webserver to bring up the webserver as well.
>
> **[1:12](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=72)** Now, our scheduler and webserver are both running, and now if you head over to the Airflow UI and sign in with your admin username and password, you'll find that the example DAGs are no longer present.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=86)** And you can see here you have a clean UI and only the DAGs that you create will be present in here.
>
> **[1:32](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=92)** Based on the configuration file, all of the DAGs that we create should be in the Airflow home directory in the dags subfolder within that home directory.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=102)** I'm using VS Code to write my code.
>
> **[1:44](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=104)** I have my Airflow home directory open up here.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=107)** I'm going to create a new subfolder within this home directory called dags.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=112)** So go ahead and write dags as a sub folder.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=115)** Remember, it's within your Airflow home directory.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=118)** Now, inside this, I'm going to create a Python file that will contain my first DAG, and that's going to be a simple_hello_world.py file.
>
> **[2:08](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=128)** With this complete, I'm going to paste in the code for our very first workflow, and let's take a look at what a DAG looks like in code.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=137)** On lines one and two, I have imports for time-related libraries.
>
> **[2:22](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=142)** Now, these libraries will help in scheduling our DAG, and you'll see such imports in all DAGs that you create.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=149)** On line four, I import the DAG class.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=151)** This is what we'll use to instantiate a Directed Acyclic Graph object.
>
> **[2:37](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=157)** And on line six, I have an import for the BashOperator.
>
> **[2:40](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=160)** This is my first task.
>
> **[2:43](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=163)** We'll use the BashOperator to print out a simple hello, world to the Bash terminal shell.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=170)** Default_args here is just a dictionary of config settings that you might want to specify for your DAG or for individual tasks.
>
> **[2:57](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=177)** If they're going to be the same for each task or for the DAG and multiple tasks that you create within the DAG, it's better to just have a default_args dictionary out here separately like I have created.
>
> **[3:09](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=189)** The only property I have here is that the owner of the DAG is loonycorn.
>
> **[3:13](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=193)** Next, on lines 12 through 18, I instantiate the Directed Acyclic Graph.
>
> **[3:19](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=199)** Every DAG has a unique ID.
>
> **[3:21](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=201)** Mine is hello_world.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=202)** It's useful to have a description so you know what the DAG does.
>
> **[3:26](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=206)** I've just said "Our first Hello World DAG!"
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=209)** The default arguments for the DAG come from the default_args dictionary.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=213)** You need to have a start_date for your DAG and you need to ensure that the start_date is not in the future.
>
> **[3:40](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=220)** Otherwise, even if you explicitly trigger a DAG, it's not going to execute.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=224)** By default, Airflow operates using the UTC time zone, which is why I've given the start_date as one day ago, so that it's definitely in the past from my current time.
>
> **[3:55](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=235)** The schedule interval allows you to specify how frequently you want this DAG to be executed or run.
>
> **[4:03](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=243)** This can be something like daily, hourly or you can specify a cron expression saying every six hours on Saturday.
>
> **[4:11](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=251)** We look at those options later.
>
> **[4:13](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=253)** Setting schedule_interval to none means that you do not want this DAG to be scheduled at any point in time.
>
> **[4:19](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=259)** You'll explicitly trigger the DAG as you need it.
>
> **[4:22](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=262)** Next, we have the task that the DAG should execute.
>
> **[4:25](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=265)** I've instantiated an object of the BashOperator class.
>
> **[4:29](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=269)** Every task has a unique ID.
>
> **[4:31](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=271)** That's the hello_world_task here.
>
> **[4:33](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=273)** The other input arguments to a task will differ based on the kind of task that you set up here.
>
> **[4:39](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=279)** The BashOperator requires a Bash command where I simply say echo Hello World!
>
> **[4:44](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=284)** That's the command that will be executed and the DAG that this operator belongs to is the DAG that I have just instantiated.
>
> **[4:52](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=292)** That's the DAG argument on line 23.
>
> **[4:55](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=295)** Now I have just the single task on line 26.
>
> **[4:58](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=298)** I just put down task indicating that this is the only task with no dependencies that needs to be executed.
>
> **[5:05](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=305)** Make sure you save this file and switch over to the Airflow UI and you might want to hit refresh.
>
> **[5:12](https://www.linkedin.com/learning/learning-apache-airflow/creating-your-first-dag?u=76281980&t=312)** You should find the hello_world DAG in there.

> [!info]- Semantic Content
>
> **Env Vars:** dag (23), utc (1)
> **Code Identifiers:** start_date (3), load_examples (2), default_args (2), hello_world (2), simple_hello_world (1)
> **Code Keywords:** let (3), switch (2), class. (2), default. (1), this, (1)
> **Tools:** terminal (5), bash (2), vs code (1)
> **CLI Commands:** find (2), python (1), make (1)
> **File Paths:** airflow.cfg (1), simple_hello_world.py (1)
> **Prerequisites:** you need to have (1), set up (1)
> **Definitions:** is a  (1)

#### Running your first DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=1)** - [Instructor] Now that we can see our DAG on Airflow, we can interact with it.
>
> **[0:04](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=4)** Let's click through and take a look at the details for this DAG.
>
> **[0:07](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=7)** Notice on the left pane, we have the single task, the hello world task that's in our DAG.
>
> **[0:13](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=13)** Now if you head over to the graph view, you'll see a graphical representation of our DAG, once again with the single task.
>
> **[0:19](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=19)** This is not really that interesting.
>
> **[0:21](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=21)** If you need to know all of the configuration settings for a particular DAG, head over to the details tab, and you'll get all of the configuration settings on one page.
>
> **[0:32](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=32)** This will allow you to verify that the DAG is set up like you want it to be.
>
> **[0:37](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=37)** Notice at the very bottom, the timetable description, never external triggers only.
>
> **[0:41](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=41)** So schedule equal to none means the DAG has to be externally triggered.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=46)** Another great feature of the Airflow UI is that you can see the code for your DAG.
>
> **[0:51](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=51)** Click on code, and this will show you the actual code that we had written using VS code.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=58)** Here it is.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=59)** You can confirm that the code is correct, especially when you update your code.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=62)** This is very useful.
>
> **[1:03](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=63)** This will allow you to confirm that the updates have been picked up by Airflow.
>
> **[1:08](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=68)** Now let's head back to our original grid view.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=71)** We'll be spending most of our time in this grid view.
>
> **[1:14](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=74)** Now our DAG hasn't executed.
>
> **[1:16](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=76)** We need to execute this DAG, but we need to unpause it first so unpause the DAG, and then click on auto refresh so that we can get the UI to be auto refreshed and see the latest details.
>
> **[1:27](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=87)** And click on the play icon and select Trigger DAG.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=91)** Look on the left navigation pane, you can see that the DAG is executing the light green color, and in a bit, it will run through, and you should see the green success for our one hello world task.
>
> **[1:43](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=103)** This task seems to have run through successfully.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=105)** Note the DAG details at the center.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=107)** Total success one, one run was successful.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=110)** Let's take a look at the graph.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=112)** You'll be able to see that the diagram was successful here as well.
>
> **[1:56](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=116)** Notice the green outline around the hello world task, which is our type Bash operator.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=121)** You can hover over a task and get its status as well.
>
> **[2:04](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=124)** If you click on the task here, you'll be able to access additional details.
>
> **[2:09](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=129)** For example, you can access the logs generated by this task.
>
> **[2:13](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=133)** So go to log and scroll down to the bottom, and in the logs, you should be able to see hello world.
>
> **[2:19](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=139)** Notice the info log there, hello world.
>
> **[2:22](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=142)** That shows that our task was executed, and hello world was echoed out of the terminal.
>
> **[2:28](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=148)** The rendered template view is very useful for you to see the rendered output from your individual tasks.
>
> **[2:35](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=155)** Note that this is not the actual output of the task, but it specifies how your template was rendered.
>
> **[2:41](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=161)** When you use ginger templates in your task, later on, this will become very useful.
>
> **[2:45](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=165)** You can see echo hello world there.
>
> **[2:48](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=168)** Let's head back to the grid view, and I'm going to rerun this DAG.
>
> **[2:52](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=172)** It's always possible for you to rerun the DAG as many times as you want to.
>
> **[2:56](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=176)** Click on the play button, select trigger DAG, and in a few seconds, the second run should also run through successfully.
>
> **[3:03](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=183)** Notice the two bars on the left navigation pane.
>
> **[3:06](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=186)** Now let's go back to our code and change our code just to be a little bit.
>
> **[3:10](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=190)** Notice the schedule interval none.
>
> **[3:12](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=192)** Let's change that to have a schedule for our DAG so you know how you can specify schedules.
>
> **[3:17](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=197)** At daily means that the DAG will run at 12 midnight every day.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=203)** That's the default schedule.
>
> **[3:25](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=205)** Now the tags allows you to identify your different DAGs.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=209)** This is a beginner DAG for Bash, and it says hello world.
>
> **[3:32](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=212)** Those are the tags that I have.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=213)** I'm also going to change my Bash command just a bit.
>
> **[3:36](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=216)** Instead of just saying echo hello world, I'm going to say "hello world once again."
>
> **[3:41](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=221)** That's what I want printed out to screen.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=224)** Let's go back to the Airflow UI.
>
> **[3:45](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=225)** Now, if you have your UI on auto refresh, the DAG will be picked up automatically.
>
> **[3:50](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=230)** So go to the main Airflow page, and you can see we have hello world with a whole bunch of tags.
>
> **[3:56](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=236)** Observe that there are three runs that were successfully executed.
>
> **[4:00](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=240)** That's because Airflow has automatically run this DAG once again, once we change the schedule to be daily.
>
> **[4:07](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=247)** This is why we have three successful runs rather than the two successful runs that we had explicitly triggered.
>
> **[4:13](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=253)** There was only one task in each run, and that was executed successfully as well.
>
> **[4:19](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=259)** Let's click through to our DAG, and we'll be able to view the details of the run.
>
> **[4:23](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=263)** Observe in the grid view, there are three runs on the left navigation pane, all three successful.
>
> **[4:29](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=269)** Now let's head over to the code view, and you can see that the updated code is available here.
>
> **[4:34](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=274)** Notice the Bash command that says, "echo hello world once again."
>
> **[4:37](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=277)** Well, the updated code has been picked up.
>
> **[4:40](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=280)** Now back to the grid view.
>
> **[4:41](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=281)** I'm going to trigger this DAG so that we have a fourth run, and that was successful as well.
>
> **[4:47](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=287)** If you want to see the output of the latest run, you need to select the run that was just executed, which happens to be the second bar.
>
> **[4:55](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=295)** Let's see the output of the task.
>
> **[4:56](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=296)** Click on the little square that corresponds to the task, and once you have the details, click on the log link.
>
> **[5:03](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=303)** This will take us to the logs of our Bash operator.
>
> **[5:06](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=306)** And there you can see, "Hello world once again."
>
> **[5:09](https://www.linkedin.com/learning/learning-apache-airflow/running-your-first-dag?u=76281980&t=309)** Our updated task was executed successfully.

> [!info]- Semantic Content
>
> **Env Vars:** dag (24)
> **UI Navigation:** click on (7), go to (2), scroll down (1), select the (1)
> **Code Keywords:** let (10)
> **Tools:** bash (5), vs code (1), terminal (1)
> **Cross-References:** go back to (2)
> **Exercise Files:** template (2)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** for example (1)

#### Creating a DAG using the with keyword
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=1)** - [Instructor] Now here is how we had set up our DAG previously.
>
> **[0:03](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=3)** We instantiated the DAG on lines 12 through 19 and we passed the DAG in to our bash operator on line 24.
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=11)** Now if you have many operators, this is going to be painful.
>
> **[0:14](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=14)** Here is a better way of creating a DAG and this is the technique that we'll be following for the rest of this course.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=20)** The only change here is on lines 12 through 23.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=24)** On lines 12 through 18, I use the with keyword in Python to instantiate the DAG.
>
> **[0:30](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=30)** This is stored in the DAG variable specified on line 18.
>
> **[0:34](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=34)** Once you've instantiated the DAG with the with keyword, the body of the with keyword can contain all of the operators that belong to this DAG.
>
> **[0:43](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=43)** So the bash operator defined on lines 20 through 23 belongs to the DAG instantiated with with.
>
> **[0:50](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=50)** I do not have to explicitly specify this.
>
> **[0:53](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=53)** Just to note here that there is yet another way to define a DAG that uses something known as the TaskFlow API.
>
> **[1:00](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=60)** We won't be working with the TaskFlow API in this particular course.
>
> **[1:04](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=64)** The rest of the code is exactly the same.
>
> **[1:06](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=66)** Head over to Airflow and you can double check that this works fine.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=71)** Let's click through to the DAG and take a quick look and ensure that it works like we would expect it to.
>
> **[1:16](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=76)** Here is the Grid view.
>
> **[1:18](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=78)** Let's head over to the Code view and ensure that the new code has been picked up by this particular DAG.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=84)** Here is the new code.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=86)** We've used the with keyword to instantiate a DAG and the operators within the with keyword all use the same DAG, are part of the same dag.
>
> **[1:34](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=94)** Now let's head back to the Grid view and let's trigger this DAG.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=98)** So we have four runs already.
>
> **[1:39](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=99)** I'm going to trigger a fifth run of this DAG and you can see that DAG goes through successfully as well.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=105)** I encourage you to go and look at the logs and make sure that the hello_world is printed out to screen.
>
> **[1:51](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=111)** Now the logs that are generated for all of your DAG executions are within the Airflow folder.
>
> **[1:57](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=117)** Within Airflow, you should have a Logs subfolder that has been automatically created and if you run an ls -l here, you can see the logs corresponding to the individual DAGs that you have executed.
>
> **[2:09](https://www.linkedin.com/learning/learning-apache-airflow/creating-a-dag-using-the-with-keyword?u=76281980&t=129)** The folder has the ID of the DAG and the logs are within that folder.

> [!info]- Semantic Content
>
> **Env Vars:** dag (19), api (2)
> **Code Keywords:** let (4), this. (1)
> **CLI Commands:** python (1), make (1), ls (1)
> **Tools:** bash (2)
> **Definitions:** is a  (1), known as (1)
> **Code Identifiers:** hello_world (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 3. Defining Tasks and Dependencies

#### Specifying task dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=1)** - [Instructor] While it was exciting to run our first dag, a dag with a single task is kind of boring.
>
> **[0:06](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=6)** Now, let's see how we can specify dependencies between tasks and have one task run after the other.
>
> **[0:13](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=13)** Now, I'm within a new file called execute multiple tasks dot py.
>
> **[0:17](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=17)** That's within my dags subfolder.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=20)** I've gotten rid of all the other files that were here.
>
> **[0:22](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=22)** I'm going to paste in the contents of my new dag, which has two tasks and one task depends on another.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=29)** Notice I've used the width keyword to instantiate my dag.
>
> **[0:33](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=33)** This dag has a separate unique ID executing multiple tasks.
>
> **[0:37](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=37)** Notice the schedule interval says @once.
>
> **[0:40](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=40)** This is useful if you want to trigger the dag manually or you want to schedule the dag using an external trigger.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=47)** So, we haven't come to external triggers.
>
> **[0:49](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=49)** We don't need to worry about that, but you should know that @once is a great schedule interval, especially if you're running it manually.
>
> **[0:56](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=56)** Now, I have two operators or two tasks within this dag, task A and task B.
>
> **[1:01](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=61)** The tasks themselves are quite straightforward.
>
> **[1:04](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=64)** They simply print out to screen, task A has executed and task B has executed respectively.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=69)** What's interesting is on line 30.
>
> **[1:12](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=72)** I've used the set downstream method on task A to indicate that task B is downstream of A, meaning task B should be executed after task A has been executed.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=84)** This is one way of specifying dependencies.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=86)** Now, if you switch over to your airflow UI, you can see our dag there executing multiple tasks.
>
> **[1:32](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=92)** Let's click through and take a look.
>
> **[1:35](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=95)** Notice on the left navigation page, that task A is listed before task B, and this actually becomes much clearer if you look at the graph.
>
> **[1:44](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=104)** The graph view makes the dependencies between tasks very clear task B is downstream of A, meaning task B depends on task A being completed before it can be executed.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=115)** All we have to do is execute this dag and confirm that both operations run one after the other.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=121)** So, unpause the dag.
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=123)** Make sure you have auto refresh on so that you can see updates.
>
> **[2:06](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=126)** And since we have at schedule once this dag will automatically run through.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=131)** Notice task A is executed first, it becomes green, and then task B is executed.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=137)** Now, let's click through and take a look at the logs for both of these tasks to ensure that they were executed fine.
>
> **[2:23](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=143)** You'll need to bring up that little dialogue.
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=145)** Click on the log option here in this dialogue.
>
> **[2:28](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=148)** And here if you scroll down the logs, you should be able to see task A has executed.
>
> **[2:34](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=154)** If you click on the back button of your browser, you'll be taken back to the graph view of your task.
>
> **[2:39](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=159)** And there you can click on task B, bring up the logs for task B and confirm that task B has also been executed successfully.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=170)** And there you can see task B has executed present in our logs.
>
> **[2:53](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=173)** Now, what if the dependencies were reversed?
>
> **[2:55](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=175)** What if task B has to execute before task A?
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=179)** Switch them around.
>
> **[3:00](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=180)** Task A dot set upstream, task B set upstream allows task A to say that B should be performed first and then A needs to be performed.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=191)** Now, when you go back to your airflow UI, go back to the graph you and you will immediately see that the dependencies have been updated.
>
> **[3:18](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=198)** Notice task B occurs first and then task A.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=202)** So, task A now depends on task B.
>
> **[3:25](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=205)** If you go to the grid view, you'll be able to see the change there as well.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=209)** Notice the order of the task from the left pane.
>
> **[3:31](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=211)** Task B comes first and then task A.
>
> **[3:34](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=214)** I'm going to trigger the dags so that it's executed once again, observe that task B is executed first, and then, task A, this is on the left navigation pane.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=224)** You can actually confirm this by hovering over each task and noting when they were executed.
>
> **[3:49](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=229)** Notice this task was started at 7:17:29 UTC and the second task was started at 7:17:33 UTC.
>
> **[3:59](https://www.linkedin.com/learning/learning-apache-airflow/specifying-task-dependencies?u=76281980&t=239)** So, task B was started and completed before task A.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), switch (2)
> **UI Navigation:** click on (3), scroll down (1), go to (1)
> **Ports:** :17 (2), :29 (1), :33 (1)
> **Env Vars:** utc (2)
> **Cross-References:** go back to (2)
> **Prerequisites:** make sure you have (1), you'll need (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### Using the Bitshift operators for dependency specification
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=1)** - [Instructor] Now I don't know about you, but I find using set upstream and set downstream for task dependencies kind of hard to work with.
>
> **[0:08](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=8)** I can't really tell which task depends on which.
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=11)** Here is a different way you can specify task dependencies.
>
> **[0:14](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=14)** This is a much easier way.
>
> **[0:16](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=16)** I've set up the DAG as before.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=18)** Notice the schedule interval I use the time delta function to schedule this DAG on a daily basis.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=25)** That is the time delta days one.
>
> **[0:27](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=27)** I've also added tags to this DAG.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=29)** Now I've specified multiple bash operators here.
>
> **[0:33](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=33)** You can see the bash operators for task A and B on your screen, observe the bash command for each of these and you can see that each bash command is a script with multiple commands all within a string.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=47)** This is one way you can specify more complex bash operators in your code.
>
> **[0:51](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=51)** If you scroll further down, you can see the operators for task C and B, they're little bit simpler, but they have multiple operations as well, especially C does.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=62)** Now I want to say that B and C depend on A and then D depends on both B and C.
>
> **[1:08](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=68)** This is how I'd have to set up the task operator dependencies using set upstream and set downstream.
>
> **[1:15](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=75)** Notice I call task A dot set downstream and set both B and C and I call task B and call set upstream to set B and C once again.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=86)** This will work as you head over to the Airflow UI, notice our execute multiple tasks there.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=91)** Let's click through and let's take a look at the graph.
>
> **[1:34](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=94)** And here you'll understand that the dependencies have been set up directly.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=98)** Task B and C both depend on A and task D depends on both B and C, but really it was very unintuitive.
>
> **[1:46](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=106)** Now let's trigger this DAG and make sure things run through correctly.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=110)** Task A runs first, then task B, then task C, and then task D.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=115)** Observe that D cannot begin unless both B and C are complete.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=121)** So the dependencies have clearly been set up correctly.
>
> **[2:04](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=124)** Now I encourage you to head over to the log files for each task and confirm that each task has run through successfully.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=132)** I'll show you the logs for one task.
>
> **[2:14](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=134)** Let's say task A for our current run.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=137)** Let's head over to the log files and here you can see that our four loop in task A was executed and you can see task A printing printed out 10 times.
>
> **[2:28](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=148)** So clearly everything ran through successfully.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=151)** You can look at the remaining logs on your own.
>
> **[2:33](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=153)** Set downstream and set upstream are very rarely used in Airflow.
>
> **[2:37](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=157)** Instead, you'll use the dependency operator, the double greater than and the double less than to actually specify dependencies.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=166)** These are actually the bit shift operators, so task A bit shift right, task B means that task B depends on task A, task B bit shift left, task D means that task B depends on task D, and this is how I've set up the same dependencies as before.
>
> **[3:04](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=184)** This is a much more intuitive way of specifying dependencies.
>
> **[3:07](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=187)** Let's go to our Airflow UI.
>
> **[3:09](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=189)** It would've picked up our new DAG.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=191)** Let's click through and if you want to confirm that the new DAG has been picked up, you can head over to the code tab.
>
> **[3:18](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=198)** And here at the bottom you can see that this code uses the bit shift operators to specify task dependencies.
>
> **[3:25](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=205)** But how do we know these are correct?
>
> **[3:27](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=207)** Well, the graph will tell us.
>
> **[3:28](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=208)** So head over to the graph tab and you can see the same graph that we've been working with so far.
>
> **[3:34](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=214)** Task B and C both depend on task A and task D depends on both Task B and C.
>
> **[3:40](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=220)** And of course we can confirm this by triggering this DAG and watching the execution.
>
> **[3:46](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=226)** Observe that task A is executed first, then B, then task C.
>
> **[3:51](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=231)** Between B and C, they can be executed in any order, it doesn't matter.
>
> **[3:55](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=235)** And then finally, task D.
>
> **[3:57](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=237)** When multiple tasks have the same dependency or one task has multiple dependencies we can improve the use of this bit shift operator, as I've done here on screen.
>
> **[4:06](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=246)** The dependencies can be specified using a list.
>
> **[4:09](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=249)** It's very clear here that B and C both depend on A and that task D depends on both task B and C.
>
> **[4:17](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=257)** And this will give us the same graph that we've been working with so far.
>
> **[4:22](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=262)** So you can confirm that we have the new dependency set up with the code.
>
> **[4:25](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=265)** Just scroll to the bottom.
>
> **[4:27](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=267)** You can see that we have the new way of specifying dependencies here.
>
> **[4:30](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=270)** That's the code that we'll be executing and the graph you will of course confirm that this manner of specifying dependencies gives us the same graph with the dependency set up how we want it to be.
>
> **[4:43](https://www.linkedin.com/learning/learning-apache-airflow/using-the-bitshift-operators-for-dependency-specification?u=76281980&t=283)** For complete this, you can always trigger this DAG and watch the execution and make sure the tasks run through in the order that you expect.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (1), finally, (1), this, (1)
> **Env Vars:** dag (8)
> **Prerequisites:** set up (7)
> **Definitions:** is a  (4), means that (2)
> **Tools:** bash (5)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Using bash scripts in the DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=1)** - [Instructor] If you're working with a real world application that uses bash operators it's highly unlikely that your scripts are so tiny that they fit as strings within your Python file.
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=11)** In fact, it's not really addressable to have your external scripts be part of your DAG execution code.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=18)** You should have them in separate files.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=20)** And in this demo, I'll show you how you can set this up.
>
> **[0:23](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=23)** Notice that I'm within my Airflow DAGs sub folder, and within that I've created a new sub folder called Bash Scripts.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=31)** Inside this Bash Scripts folder, I have seven SH files.
>
> **[0:35](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=35)** These are my shell scripts, Task A through Task G.
>
> **[0:40](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=40)** These are the scripts that I'm going to execute from my bag.
>
> **[0:44](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=44)** Now let's take a look at the contents of these scripts.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=47)** You can see that Task A has some simple content.
>
> **[0:50](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=50)** It just kind of prints out something to screen and runs through.
>
> **[0:54](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=54)** Now, Task B is more interesting because notice I have an exit 99 on line three.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=59)** This will cause Task B to be skipped when it's actually executed by our DAG.
>
> **[1:05](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=65)** This will allow us to see how the Airflow UI treats skipped tasks.
>
> **[1:10](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=70)** Now I have another task here, Task C which also does something interesting.
>
> **[1:14](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=74)** Notice the exit 130.
>
> **[1:16](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=76)** This will cause this task to fail.
>
> **[1:19](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=79)** The exit code 130 will result in this task failing, not being skipped.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=84)** Now, task B, E, F, and G are very boring.
>
> **[1:28](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=88)** They just echo out to screen that the task has been completed.
>
> **[1:32](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=92)** Now let's switch over to our execute multiple tasks dot py DAG code and see how we can invoke these scripts in our DAG.
>
> **[1:40](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=100)** When we instantiate the DAG we need to specify the property template search path.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=105)** You can see this on line 19.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=107)** Airflow works with ginger templates that you can use to render your output.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=112)** Now the template search path tells the Airflow DAG this is where you ought to look for ginger templates.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=118)** Now, even if you're not using ginger templates we are using bash scripts.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=121)** The template search path property is what we have to specify to the DAG and point it to the folder where it should search for the scripts that we are interested in.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=131)** The bash operators then simply reference each of these scripts.
>
> **[2:15](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=135)** Notice the bash command for all of the operators you see here on screen, Task A through Task E.
>
> **[2:21](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=141)** The bash command simply points to the corresponding SH file.
>
> **[2:26](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=146)** And the same is true for Task F and G as well.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=149)** Their bash command properties point to the corresponding SH files.
>
> **[2:35](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=155)** So those are the shell scripts that will be executed when these tasks run.
>
> **[2:39](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=159)** Now I have the task dependencies specified on lines 57 through 61.
>
> **[2:44](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=164)** Tasks B, C, and D depend on Task A and Task E depends on B, F on C, and G on D respectively.
>
> **[2:52](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=172)** I'll now head over to the Airflow UI and let's take a look at the graph representation first, so that we understand what the dependencies are.
>
> **[3:00](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=180)** Click on graph and here you can see how the dependencies have been set up.
>
> **[3:05](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=185)** Task B, C, and D, all three depend on Task A and Task E, F, and G depend on B, C, and D respectively.
>
> **[3:13](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=193)** I'm now going to go ahead and trigger the execution of this tag, and you'll see that execution will result in a rainbow of colors.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=202)** Now, in order to interpret this rainbow of colors I encourage you to look at the legend on top, starting with deferred and going all the way through to no status.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=213)** Now, tasks A, D, and G was successfully executed.
>
> **[3:37](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=217)** That is the green outline that you see on these tasks.
>
> **[3:40](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=220)** Now, Task C failed within exit 130.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=224)** That's why it has a red outline.
>
> **[3:46](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=226)** Now because Task C failed, Task F could not be executed because it depended on Task C.
>
> **[3:53](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=233)** Now, Task F has an orange outline indicating that an upstream task failed and that's why this particular task could not be executed.
>
> **[4:02](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=242)** Now, Task B has a pink outline because it was skipped thanks to the exit 99.
>
> **[4:08](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=248)** And because we skipped Task B, we also had to skip Task E because Task E depends on B.
>
> **[4:14](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=254)** You can actually get more details of the status of each of these tasks by hovering over these tasks.
>
> **[4:19](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=259)** Task A clearly succeeded, but Task B was skipped and not executed, and this resulted in Task E that depended on Task B to also be skipped.
>
> **[4:32](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=272)** Now, if you hover over Task C, you can clearly see that this failed and the failure of Task C is what resulted in Task F also having failed because Task F depended on Task C upstream, but there was absolutely no problem with Task B, as well as Task G.
>
> **[4:51](https://www.linkedin.com/learning/learning-apache-airflow/using-bash-scripts-in-the-dag?u=76281980&t=291)** Both of these ran through to completion successfully.

> [!info]- Semantic Content
>
> **Tools:** bash (8)
> **Env Vars:** dag (7)
> **Code Keywords:** let (3), switch (1)
> **Exercise Files:** template (3)
> **CLI Commands:** python (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Using the Python Operator and XCom

#### Introducing the Python operator
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=1)** - [Narrator] At this point, you know a fair bit about Airflow.
>
> **[0:03](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=3)** You know how to use the Airflow UI, you know how to schedule your DAGs, you know how to run your DAGs, you know how to create DAGs, and you know how to use the BashOperator.
>
> **[0:13](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=13)** Now, if you only had to use the BashOperator in your DAG, that's going to be pretty boring.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=18)** So in this demo, we'll see how you can construct your tasks using the Python operator that allows you to execute Python code for your tasks.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=29)** Now, within my DAG subfolder in my Airflow home directory, I have a new file.
>
> **[0:34](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=34)** "execute_python_operators.py" is the name of the file.
>
> **[0:38](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=38)** Now, I have Python code setting up my DAG, but I'm going to be executing Python code for my individual tasks.
>
> **[0:45](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=45)** Notice on line six I have an import for the Python operator, which is what I'm going to construct my DAG.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=52)** The Python operator allows you to reference a Python function, which contains the code that you want to execute as a part of the task.
>
> **[1:00](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=60)** Now, it can be a very simple function like the one I have here on lines 12 and 13.
>
> **[1:05](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=65)** You can see I have the print function, "The simplest possible Python operator!"
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=69)** is going to reference this function.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=71)** In production environments, you'll define your Python code in a separate file.
>
> **[1:15](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=75)** Just import the module here and then reference the function that you want to invoke from your DAG.
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=82)** But here, because we are just learning, this is good enough, this is perfect, in fact.
>
> **[1:27](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=87)** Now let's see how we instantiate the DAG.
>
> **[1:29](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=89)** Nothing really new there.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=91)** Make sure your DAG has a meaningful ID.
>
> **[1:33](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=93)** "execute_python_operators" is my name, give it a meaningful description, default_args you specify as before, start_date is one day ago.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=102)** We want this DAG to run on a daily basis, that's our schedule_interval, and the tags are "simple" and "python."
>
> **[1:49](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=109)** Nothing new about the DAG instantiation.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=112)** The task is a "PythonOperator."
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=115)** It has a task ID and a python_callable as an input argument.
>
> **[1:59](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=119)** The python_callable references the Python function that you want to execute within this operator.
>
> **[2:06](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=126)** And we have just the one task in our dependency graph, which I specify on line 28.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=132)** The Airflow UI should have picked up this DAG.
>
> **[2:14](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=134)** Let's click through to execute Python operators, and we can see our single task here on the left.
>
> **[2:20](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=140)** The graph, you will of course, give us a better representation of the task that we are about to execute.
>
> **[2:26](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=146)** You have just the one python_task.
>
> **[2:28](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=148)** Notice that the python_task is pinkish in color.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=151)** And on the top left in the legend, you can see that this means that this is a Python operator.
>
> **[2:36](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=156)** Airflow uses the solid color of the task to identify different operators.
>
> **[2:41](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=161)** Now, let's unpause this DAG so that we can execute it.
>
> **[2:45](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=165)** I'm also going to enable auto-refresh, so that the UI is updated as the DAG runs.
>
> **[2:51](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=171)** Now the task will start running immediately because it was scheduled a day ago, and Airflow has actually kick-started the previous day's run.
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=179)** Once it completes, you can see the status of the task right here, and of course you can view log information if you want to.
>
> **[3:07](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=187)** Let's click through to the logs and hopefully here, we should see "The simplest possible Python operator!"
>
> **[3:12](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-python-operator?u=76281980&t=192)** And there it is.

> [!info]- Semantic Content
>
> **CLI Commands:** python (14), make (1)
> **Env Vars:** dag (12)
> **Code Keywords:** function (6), let (4), module (1)
> **Code Identifiers:** execute_python_operators (2), python_callable (2), python_task (2), default_args (1), start_date (1)
> **File Paths:** execute_python_operators.py (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Python operators and dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=1)** - [Narrator] Now in this movie, we'll see that dependencies with Python operators work exactly like dependencies with pash operators.
>
> **[0:08](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=8)** In fact, dependencies work the same way with all operators that you use to specify tasks.
>
> **[0:14](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=14)** In this particular DAG we'll be creating multiple Python operators.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=18)** Once again, on line eight, I have an import for the Python operator and I have four different Python functions defined on lines 14 through 25.
>
> **[0:28](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=28)** The functions are called task A, B, C, and D.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=31)** And within each function we have a simple Python print statement indicating that the task has been executed.
>
> **[0:38](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=38)** These are the four callables that our Python operators will invoke.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=42)** Let's instantiate the DAG in exactly the same way as before.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=46)** Nothing interesting there.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=47)** I've instantiated four different tasks using the Python operator tasks, A, B, C, and D.
>
> **[0:55](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=55)** Each task has its own unique task ID and each task takes in a Python callable as an input argument.
>
> **[1:03](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=63)** And these Python callables reference the Python functions that we have set up.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=69)** And here at the bottom I've specified the dependencies between tasks.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=73)** Now, task A needs to be performed before task B and C, and task B and C both have to be performed before Task D.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=81)** Now, in the Airflow UI, I'm going to head directly over to the graph view because really we are interested in seeing how the tasks with dependencies have been set up.
>
> **[1:31](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=91)** This is what our DAG looks like, exactly what you would expect.
>
> **[1:34](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=94)** I'll use that little play button to trigger this DAG and execute it, and let's watch while it runs through successfully.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=101)** I'm quite confident it'll run through because really it's a very, very simple DAG.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=107)** When we write more complex DAGs, we should do that in a step-by-step manner, and you'll see that in a bit.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=113)** Now that the DAG has completed execution and all tasks are green, let's head over to the grade view.
>
> **[2:00](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=120)** Observe on the left, we have a visual representation of the four tasks that make up this workflow.
>
> **[2:05](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=125)** I'm going to click through to the first task.
>
> **[2:07](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=127)** And here you can click on the log link here.
>
> **[2:10](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=130)** And if you scroll down to the bottom you should see the output of the print statement in the logs.
>
> **[2:15](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=135)** Task A is executed.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=137)** In exactly the same way, I'm going to go back and click through each task so that I can view the log output.
>
> **[2:24](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=144)** Here is task B, and scrolling down to the bottom I can see task B has been executed successfully.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=150)** Here are the logs for task C.
>
> **[2:33](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=153)** That has been executed successfully as well.
>
> **[2:35](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=155)** And finally, let me check the logs for task B and this seems to have run through successfully as well.
>
> **[2:43](https://www.linkedin.com/learning/learning-apache-airflow/python-operators-and-dependencies?u=76281980&t=163)** There's the message, task D executed.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10), make (1)
> **Code Keywords:** let (4), function (1), finally, (1)
> **Env Vars:** dag (6)
> **UI Navigation:** click on (1), scroll down (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [narrator] (1)

#### Passing parameters to Python callables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=1)** - [Instructor] Now, our Python operators invoke Python callables, that is the invoke Python functions, which is where we actually have the code that performs the task that we want it to.
>
> **[0:12](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=12)** Now, if you're going to be invoking Python functions, it's natural for you to want to pass in input arguments to your function.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=20)** How do you do that with a Python operator?
>
> **[0:22](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=22)** That's what we'll see in this movie.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=24)** I have two Python callables, greet_hello and greet_hello_with_city.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=29)** These are the Python functions that do the actual work of the task.
>
> **[0:33](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=33)** Observe that greet_hello takes in a single input argument, the name of the individual, and it simply says hello, name, exclamation mark.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=42)** Greet_hello_with_city takes in two input arguments.
>
> **[0:45](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=45)** Name as well as city, and it'll print out to screen hello_name_from_city.
>
> **[0:51](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=51)** Now, the actions are very simple, but what we really want to know is, how do we pass in those input arguments?
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=58)** Instantiating the DAG is straightforward.
>
> **[1:00](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=60)** There's nothing new there.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=62)** The new thing is how we instantiate the Python operators.
>
> **[1:06](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=66)** Note that I have two Python operators here.
>
> **[1:08](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=68)** Task A on line 29 and task B on line 35.
>
> **[1:12](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=72)** Both of them have their own task IDs, both of them reference their Python callable.
>
> **[1:18](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=78)** The first one, greet_hello; the second one, greet_hello_with_city.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=81)** Observe on line 32 and 38, I use the op_kwargs input argument to specify the input parameters to the function that this operator is going to invoke.
>
> **[1:34](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=94)** Kwargs contains a dictionary.
>
> **[1:36](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=96)** On line 32, there is just one key value in the dictionary.
>
> **[1:39](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=99)** Key is name.
>
> **[1:40](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=100)** That should be the same as the name of the variable passed into Python.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=105)** The value is Desmond.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=107)** On line 38, the Python callable takes in two input arguments.
>
> **[1:51](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=111)** So my dictionary contains two entries, name and city.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=115)** Name and city are the name of the input parameters of my Python function.
>
> **[2:00](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=120)** And the values are Louise and Seattle respectively.
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=123)** And online 42, I've just specified that task A should be done before task B.
>
> **[2:08](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=128)** Switching to the Airflow UI, I've started directly in the grid view for this DAG.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=131)** You can see the two tasks on the left, greet_hello and greet_hello_with_city.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=137)** I always like to execute my task either in the grit view or graph view, especially when I want to check the dependencies.
>
> **[2:23](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=143)** You can see that greet_hello comes first and then greet_hello_with_city.
>
> **[2:27](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=147)** Go ahead and trigger the DAG.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=150)** And it should execute very comfortably successfully because there's nothing really that the individual tasks are doing that could cause it to fail.
>
> **[2:38](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=158)** Once the DAG has run through successfully, it's important for us to look at the log files here because I want to make sure that the input parameters have been passed into our functions successfully.
>
> **[2:48](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=168)** Click on the log link for the first task that I have selected.
>
> **[2:52](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=172)** Scrolling to the bottom, you can see "Hello, Desmond!"
>
> **[2:56](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=176)** So Desmond was successfully passed in as an input argument to this task.
>
> **[3:02](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=182)** In exactly the same way, navigate to the logs for the second task.
>
> **[3:07](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=187)** And there you can see, "Hello, Louise from Seattle."
>
> **[3:10](https://www.linkedin.com/learning/learning-apache-airflow/passing-parameters-to-python-callables?u=76281980&t=190)** The two input arguments were passed in successfully to the Python callable invoked by this operator.

> [!info]- Semantic Content
>
> **CLI Commands:** python (14), make (1)
> **Code Identifiers:** greet_hello (5), greet_hello_with_city (4), hello_name_from_city (1), op_kwargs (1)
> **Code Keywords:** function (3), pass (2)
> **Env Vars:** dag (4)
> **UI Navigation:** click on (1), navigate to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Introducing XCom
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=1)** - [Instructor] So far, all of our tasks in our DAGs built using either the Bash operator or the Python operator have been running in isolation.
>
> **[0:09](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=9)** Each task kind of does its own thing.
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=11)** The task is not actually performing an operation and returning a value, and the task is not really accepting a value from another task.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=20)** Well, that's pretty important if you want to build a real-world pipeline, as we shall do in a demo that follows shortly.
>
> **[0:27](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=27)** But before we get to any realistic example with task flow, we need to understand how tasks can communicate, and that's where XCom comes in.
>
> **[0:36](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=36)** XCom stands for cross-communication, and it's an Airflow feature that allows tasks to exchange messages, or cross-communicate, with each other.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=46)** The XCom mechanism is great for sharing small amounts of data between tasks, data such as status updates, metadata, or output values.
>
> **[0:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=55)** Now, in this course, I won't show you all of the different ways in which you can use XCom.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=59)** We will just learn enough in order to build simple, realistic pipelines with Airflow.
>
> **[1:05](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=65)** Notice that I'm using the Python operator.
>
> **[1:07](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=67)** The import is line 8.
>
> **[1:10](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=70)** Now, I have 2 Python functions which accept an input argument, and they also return values.
>
> **[1:17](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=77)** The increment by 1 Python function accepts a counter as an input argument.
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=82)** I print out the counter to logs, and then I return counter plus 1.
>
> **[1:28](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=88)** That is incremented by 1.
>
> **[1:29](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=89)** The multiply by a hundred function takes in a counter as an input argument and it returns counter multiplied by 100.
>
> **[1:36](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=96)** Any return values from your Python functions are automatically added to XCom and can be accessed by other tasks.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=105)** Now, in this particular iteration of the demo, we won't actually be accessing the values that have been added to XCom.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=112)** We'll just show you that these values are present in XCom.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=115)** Here is where I've instantiated my DAG, DAG ID cross task communication.
>
> **[2:00](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=120)** The schedule interval is daily, which means that as soon as I unpause my DAG, it should run through.
>
> **[2:07](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=127)** Now I have task A, that's a Python operator, which calls the Python callable increment by 1 and it passes in a counter as an input argument.
>
> **[2:17](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=137)** The value of the counter is 100.
>
> **[2:19](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=139)** The second task, task B, is also a Python operator.
>
> **[2:24](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=144)** It calls the Python callable multiply by 100, and it passes in counter with value 9 as an input argument.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=151)** So increment by 1 should give us 101, and multiply by 100 should give us 900.
>
> **[2:36](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=156)** Now, on line 46, I've simply specified that task A should be performed before task B, so there is no inherent dependency between the tasks.
>
> **[2:44](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=164)** Let's switch over to the Airflow UI, and let's click through to cross-task communication.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=170)** Observe in the grid view, we have our 2 tasks, increment by 1 and multiply by 100.
>
> **[2:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=175)** In order to run this DAG, we need to unpause the DAG first, and as soon as it's done, in about a minute or so, you'll find that the task will automatically run through, and it has run through successfully.
>
> **[3:07](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=187)** Before we look at the results, just for completeness' sake, I'll show you the graph view, and you can see increment by 1 and then multiply by 100, with the second one being dependent on the first.
>
> **[3:17](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=197)** Let's trigger a second execution of this DAG and confirm that yes, indeed, it runs through successfully, and it does.
>
> **[3:26](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=206)** Now let's head back to the grid view, and let's see whether the return values of the Python callables invoked by these tasks are available in XCom.
>
> **[3:35](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=215)** Click on the first task and you should see an option right here on top called XCom.
>
> **[3:41](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=221)** This will give you all of the XCom values that have been generated by this task.
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=227)** Click through, and here you should see return value 101.
>
> **[3:51](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=231)** We passed in 100 and we got 101.
>
> **[3:54](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=234)** Now if you go back and look at the second task, remember, that's our multiply by 100 task.
>
> **[4:00](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=240)** Once again, click on the XCom link here and you'll be able to see the communication that was pushed onto XCom by this task.
>
> **[4:08](https://www.linkedin.com/learning/learning-apache-airflow/introducing-xcom?u=76281980&t=248)** Return value 900, we passed in 9, was multiplied by 100 to give us 900.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10), find (1)
> **Code Keywords:** let (5), function (2), switch (1)
> **Env Vars:** dag (6)
> **UI Navigation:** click on (2)
> **Definitions:** stands for (1), means that (1)
> **Tools:** bash (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Using XCom to pass values
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=1)** - [Instructor] Now that we know that return values from Python functions can be added to XCom, let's see how we can have other tasks access these values.
>
> **[0:10](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=10)** Now, here I have a number of Python functions that perform a series of mathematical operations.
>
> **[0:17](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=17)** Now, the first Python function here, increment_by_1, takes in an input parameter that we'll have to pass in.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=24)** This is value.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=25)** And it simply increments that value by 1.
>
> **[0:28](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=28)** On line 17, you can see I return value + 1.
>
> **[0:32](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=32)** Now, the next Python callable multiplies that value returned by the previous task by 100.
>
> **[0:39](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=39)** Notice that its input argument is ti.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=42)** ti represents a task instance.
>
> **[0:45](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=45)** Whenever an operator is executed in TaskFlow, it is executed as a task instance.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=52)** This ti input argument allows this multiply_by_100 function to access the task instance, and once it has access to the task instance, it can pull values from XCom.
>
> **[1:03](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=63)** Observe on line 20, I have ti.xcom_pull, and I pass in a task ID.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=69)** That is increment_by_1.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=71)** This will pull whatever value was pushed onto XCom by the increment_by_1 task.
>
> **[1:18](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=78)** That is essentially whatever original value was passed in, incremented by 1.
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=82)** Then, what this task does is simply multiply this value by 100.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=86)** Whatever it pulled from XCom, it's going to multiply by 100.
>
> **[1:30](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=90)** That's the code on line 24.
>
> **[1:33](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=93)** After the initial value has been implemented by 1 and multiplied by 100, the next task in the series is subtract_9.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=101)** subtract_9 also takes in a single input argument, ti, which references the task instance.
>
> **[1:48](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=108)** On line 27, we use this task instance to call ti.xcom_pull to pull the XCom value that was placed by the multiply_by_100 task.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=118)** That is the previous task in the sequence.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=121)** This is now stored in the value variable.
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=123)** We print out the value, and then we simply subtract 9 from the value on line 31, and that is what we return from the subtract_9 function.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=131)** And finally, the last function here is print_value, which takes in a task instance as an input argument.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=138)** We call ti.xcom_pull, and it pulls whatever value was added to XCom by subtract_9.
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=145)** And all print_value does is print out this value, which will now be available in the logs.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=150)** This is on line 36.
>
> **[2:31](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=151)** This is how tasks communicate.
>
> **[2:34](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=154)** Nothing special about the DAG.
>
> **[2:35](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=155)** All of the input arguments used to construct the DAG are ones that you're familiar with.
>
> **[2:40](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=160)** And then, here below, I have instantiated the four tasks that belong to this DAG.
>
> **[2:45](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=165)** These are four Python operators, increment_by_1, multiply_by_100, subtract_9, and print_value.
>
> **[2:52](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=172)** For the first three task IDs on lines 48, 54, and 59, make sure they match what the Python code expects, because we're using the task IDs to pull the XCom values from the task.
>
> **[3:06](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=186)** Set the Python callables for all four Python operators on lines 49, 55, 60 and 65.
>
> **[3:15](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=195)** Now, we need to specify the initial value on which the arithmetic operations specified by this DAG will be performed.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=202)** This is done on line 50.
>
> **[3:24](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=204)** We pass this in to the first Python operator in the sequence.
>
> **[3:28](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=208)** We pass in an initial value of 1, it should get incremented by 1, multiplied 100, and 9 should be subtracted from it to give the final value.
>
> **[3:37](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=217)** And this is because the sequence of tasks that I have specified are in this order on line 69.
>
> **[3:43](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=223)** Our UI should have picked up this DAG by now.
>
> **[3:46](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=226)** I go straight to the Graph View, and you can see the four tasks that make up this DAG.
>
> **[3:52](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=232)** Let's now trigger this DAG and see whether we are successfully able to have our tasks communicate using XCom.
>
> **[4:00](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=240)** Things seem to be running through successfully.
>
> **[4:02](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=242)** I can see all greens here, so I'm kind of hopeful.
>
> **[4:05](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=245)** Let's look at the results by heading back to the Grid View.
>
> **[4:09](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=249)** Here, for each of the tasks in sequence, we look at the log messages as well as the XCom values pushed by that task.
>
> **[4:16](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=256)** Here is the first task. This is the increment_by_1.
>
> **[4:19](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=259)** Let's head over to the logs for this task.
>
> **[4:22](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=262)** Let's scroll to the very bottom.
>
> **[4:24](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=264)** Notice that the value that it received was 1, "Value 1!", and the return value was 2.
>
> **[4:31](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=271)** And we can confirm this.
>
> **[4:32](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=272)** Head over to the XCom for this particular task.
>
> **[4:36](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=276)** Go back, and back on the Grid View, you can click on this link for XCom, and that'll take us to the XCom for the increment_by_1 task.
>
> **[4:44](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=284)** You can see the return value is 2.
>
> **[4:46](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=286)** I'm now going to view the logs and the XCom values for each task in sequence.
>
> **[4:51](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=291)** Here we are with the multiply_by_100 task.
>
> **[4:54](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=294)** You can see the task instance name there.
>
> **[4:56](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=296)** I'll scroll to the bottom and take a look at the logs.
>
> **[4:58](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=298)** Notice the value that this task received was 2 from the previous task, and the return value was 200.
>
> **[5:06](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=306)** It multiplied by 100.
>
> **[5:07](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=307)** Let's see what was pushed onto XCom by this task, multiply_by_100.
>
> **[5:12](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=312)** The return value was 200.
>
> **[5:14](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=314)** Next, let's look at the logs for the next task in the sequence.
>
> **[5:18](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=318)** This is the subtract_9 task.
>
> **[5:20](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=320)** You can see that here on screen.
>
> **[5:21](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=321)** We'll scroll to the bottom.
>
> **[5:23](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=323)** Notice the value that it received was 200, and the return value was 191.
>
> **[5:29](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=329)** 200 minus 9 is 191.
>
> **[5:32](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=332)** And the XCom value pushed by this task, the subtract_9 task, was 191.
>
> **[5:38](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=338)** Now let's go to the logs of the last task, print_value.
>
> **[5:41](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=341)** That's the name you see here on screen.
>
> **[5:43](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=343)** Scroll to the bottom, and you can see the value it printed out was 191.
>
> **[5:48](https://www.linkedin.com/learning/learning-apache-airflow/using-xcom-to-pass-values?u=76281980&t=348)** That is the value that the last task received via XCom.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), pass (4), finally, (1), this. (1)
> **CLI Commands:** python (9), make (2)
> **Code Identifiers:** print_value (4), xcom_pull (3)
> **Env Vars:** dag (7)
> **UI Navigation:** click on (1), go to (1)
> **Speakers:** - [instructor] (1)

#### Implementing a data transformation DAG pipeline, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=1)** - [Instructor] Now that we know how to pass data between tasks, we can build a pipeline using Python operators that does something real, we'll build a data transformation pipeline.
>
> **[0:11](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=11)** The data that we'll work with is this insurance dataset available in an insurance.csv file.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=18)** Note that this dataset isn't entirely clean.
>
> **[0:21](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=21)** There are certain cells in this dataset that contain null values.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=24)** We need to clean this dataset first and then perform our transformation.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=29)** Now we'll be using the Pandas library in Python to perform data transformations which means our virtual environment needs to have Pandas installed.
>
> **[0:38](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=38)** Here I am in the Airflow folder within my virtual environment, Python three seven.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=42)** I call pip install Pandas to install the Pandas package within this virtual environment.
>
> **[0:49](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=49)** Any module or Python library that you use needs to be available in the environment in which you're running Airflow.
>
> **[0:56](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=56)** Once that's done, I need to restart the Airflow scheduler as well as the web server.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=62)** The scheduler seems to be running successfully, let's switch over to the next tab and call Airflow web server to bring up our user interface once again.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=71)** You might need to re-log in, I suggest you go ahead and do that.
>
> **[1:15](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=75)** Now, the data dataset that we'll be reading in and transforming using our pipeline is going to be stored in a dataset folder.
>
> **[1:23](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=83)** Observe on the left navigation pane, I've selected this folder, and within the datasets folder, I have the insurance.csv file.
>
> **[1:30](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=90)** The datasets folder is under my Airflow home directory, but you can place this folder anywhere on your file system as long as you reference it with an absolute path.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=101)** Now, here is the Python code for my pipeline.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=105)** I'm not going to build up the entire pipeline code at once, I'm going to build it up step by step so that you have a chance to debug things if things go wrong.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=113)** Since I'm going to be using Pandas, note that my first line is an import for Pandas as pd, Pandas has to be installed in your environment.
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=123)** Now, the first task that I'm going to execute is going to read the CSV file from my local machine, and this is implemented in the function read CSV file.
>
> **[2:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=133)** This reads in the insurance CSV file in my Airflow data sets folder.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=138)** It prints out the contents of the data frame to screen, that's on line 17, and then it returns the data frames contents in the JSON format.
>
> **[2:27](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=147)** This will be pushed onto the XCom for this task.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=150)** Now, I should tell you that XCom values can be any kind of data that can be serialized using the Python pickle library.
>
> **[2:38](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=158)** So JSON is definitely serializable and that's why I've chosen to pass the data frames data in the JSON format.
>
> **[2:47](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=167)** Now, the DAG itself is not very interesting.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=170)** You are familiar with all of the input parameters of the DAG.
>
> **[2:53](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=173)** Notice I have a Python operator which invokes the Python callable read CSV file.
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=179)** This is the only task in my DAG.
>
> **[3:02](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=182)** Let's switch over to the Airflow UI and make sure that my file is read in successfully.
>
> **[3:08](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=188)** Click through to the pipeline.
>
> **[3:10](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=190)** And here in the grid view, you can see the single task read CSV file.
>
> **[3:16](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=196)** Note on the top right that my schedule interval is set to once, which means as soon as I unpause this DAG, it'll be executed exactly once automatically.
>
> **[3:26](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=206)** It seems like the execution went through successfully.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=209)** Let's select this one task that was executed, the read CSV file, and let's take a look at the logs.
>
> **[3:36](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=216)** Now, if you remember, I had a print function printing out the contents of the data frame, and you can see it here.
>
> **[3:43](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=223)** You have the entire data frame, null values and everything.
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=227)** If you look at the XCom for this particular task, you can click on XCom from right here and see the data that has been passed on through XCom.
>
> **[3:56](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=236)** This is the same data frame data in the JSON format.
>
> **[4:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=241)** Now, let's go back to our code and let's add a task to clean the data that we read in.
>
> **[4:06](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=246)** Now, read CSV file here is exactly the same code that we had before, which reads the insurance.csv file, converts it to JSON and pushes the JSON onto XCom.
>
> **[4:17](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=257)** I have a second task here called remove null values which takes in a variable number of arguments using kwargs.
>
> **[4:25](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=265)** On line 23, I access the task instance by looking up the TI key in kwargs, and then I use ti.excom pull to pull the JSON data that the task read CSV file put in.
>
> **[4:40](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=280)** Now have the data frame in the JSON format and I use pd.read_json on line 27 to get it back in a data frame format.
>
> **[4:48](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=288)** And I remove null values by calling dropna.
>
> **[4:52](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=292)** Once I have the clean data frame, I print out the contents of the data frame and then I return df.to_json.
>
> **[4:59](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=299)** This return statement on line 33 means that remove null values now returns the clean data frame in the JSON format to any other task that might need it.
>
> **[5:09](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=309)** But for now, I just have these two tasks, the read CSV file and remove null values.
>
> **[5:14](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=314)** Read CSV file comes first and then remove null values.
>
> **[5:18](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=318)** You can see that on line 55.
>
> **[5:20](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=320)** I'll now switch over directly to the Airflow UI graph view and you can see the two tasks that make up our DAG.
>
> **[5:27](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=327)** Read the CSV file and then remove null values.
>
> **[5:30](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=330)** Let's trigger this DAG and wait for it to complete execution.
>
> **[5:34](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=334)** Things seem to be successful here.
>
> **[5:36](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=336)** Let's go back to the grid view and let's see if the XComs have been set up correctly.
>
> **[5:41](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=341)** Let's click through to the first task and let's go to the log files of the first task.
>
> **[5:46](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=346)** Now we know the data has been read successfully, you can see the original data with all of the null values within it.
>
> **[5:52](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=352)** This data in the JSON format was passed on via Xcom to whichever task needed it.
>
> **[5:59](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=359)** So this is the XCom that was pushed by the read CSV file task.
>
> **[6:04](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=364)** Now let's take a look at the logs of the remove null values task.
>
> **[6:07](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=367)** I've gone directly to the logs here, let's scroll down to the bottom and you can see the data frame here.
>
> **[6:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=373)** The contents are printed out to screen and there are no null values, they have been removed by this task.
>
> **[6:19](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=379)** This clean data is what is passed via Xcom by this remove null values task.
>
> **[6:25](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-1?u=76281980&t=385)** And if you look through, you'll find that there are absolutely no nans or null values.

> [!info]- Semantic Content
>
> **Env Vars:** csv (12), json (10), dag (6)
> **Code Keywords:** let (13), switch (3), pass (2), function (2), module (1)
> **CLI Commands:** python (8), make (2), pip (1), find (1)
> **File Paths:** insurance.csv (3)
> **UI Navigation:** click on (1), go to (1), scroll down (1)
> **Prerequisites:** install (2), set up (1)
> **Code Identifiers:** read_json (1), to_json (1)
> **Cross-References:** go back to (2)

#### Implementing a data transformation DAG pipeline, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=1)** - [Instructor] My pipeline isn't complete yet.
>
> **[0:02](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=2)** I want to perform some more data transformations and write out the results to a folder.
>
> **[0:07](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=7)** This is exactly what we'll do here in this movie.
>
> **[0:10](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=10)** Now, I'm going to create a directory under my Airflow home directory and call the directory output, because this will contain my output files, files that I write out from my dag.
>
> **[0:21](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=21)** The output folder is empty to start off with.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=25)** Now, once that has been created, let me update the code, and you'll find that most of the code is the same.
>
> **[0:30](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=30)** Now, here is the code to read in the CSV file.
>
> **[0:33](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=33)** We've already seen that, and then we have the code too to remove null values from our data.
>
> **[0:39](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=39)** So the function on lines 23 through 32 remove_null_values will return a cleaned data frame.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=47)** Now this data is going to be used by two other tasks defined by these functions, groupby_smoker on line 35 and groupby_region on line 49.
>
> **[0:57](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=57)** Let's look at groupby_smoker first.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=59)** It takes in a task instance as an input argument, and then calls ti.xcom_pull and gets the clean data frame in the JSON format from the task ID remove_null_values.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=73)** We convert the JSON to a data frame by calling pd.read_json on the JSON data.
>
> **[1:20](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=80)** And then on lines 39 through 43, I apply the transformation.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=84)** I group the data based on the smoker columns, we have smokers and non-smokers, and I compute the average age, BMI, and insurance charges for each of these categories.
>
> **[1:36](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=96)** This gives me a group data frame, smoker_df which I then write out to a CSV file stored in the output folder.
>
> **[1:43](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=103)** This is the smoker_df.to_csv.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=107)** Let's now look at groupby_region.
>
> **[1:49](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=109)** This also takes in a task instance as an input argument and calls ti.xcom_pull and pulls the clean data from the task remove_null_values.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=121)** Observe that you can have multiple tasks access the same data in XCom.
>
> **[2:06](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=126)** There is nothing that says that only one other task can access this data.
>
> **[2:10](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=130)** We convert the JSON data to a data frame using pd.read_json, and then I call df.groupby_region to get the average age, BMI, and insurance charges for each region.
>
> **[2:23](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=143)** And then I call region_df.to_csv to write out the result to a CSV file in the output folder.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=150)** And all that's left to do is to define our dag.
>
> **[2:33](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=153)** The dag instance has parameters that we're familiar with.
>
> **[2:37](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=157)** We have four Python operators here in this dag.
>
> **[2:40](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=160)** I've defined these, read_csv_file, remove_null_values, groupby_smoker, and groupby_region.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=166)** All four have Python callables referencing the right Python function.
>
> **[2:51](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=171)** Make sure you set up the task IDs correctly so that the XCom communication between tasks will work.
>
> **[2:57](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=177)** And here at the bottom on line 93, I set up the dag read_csv_file comes first then remove_null_values, and then both groupby_smoker and groupby_region depend on the first two tasks, and they're independent of one another.
>
> **[3:10](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=190)** Let's go back to the Airflow UI.
>
> **[3:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=193)** Here is what the graph view looks like.
>
> **[3:15](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=195)** Groupby_region and groupby_smoker depend on data from remove_null_values, and that's why the graph is set up this way.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=203)** Let's now execute this dag and see whether our data transformation pipeline runs through successfully.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=209)** You'll have to wait for a few minutes, maybe about a minute and a half.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=213)** That's how it long it took on my machine.
>
> **[3:35](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=215)** And you'll find that the execution should be successful.
>
> **[3:39](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=219)** You can check the logs for the individual tasks, but let's look at the output, that's what I'm interested in.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=224)** Here is the output folder that we had created.
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=227)** Notice there are two files in there.
>
> **[3:49](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=229)** Let's take a look at groupedby_region, and you can see the average age, BMI, and charges for each region available here in this file.
>
> **[4:00](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=240)** Let's take a look at the other file.
>
> **[4:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-data-transformation-dag-pipeline-part-2?u=76281980&t=241)** This was groupedby_smoker, so let's click on that and you should see the same information grouped by smokers and non-smokers, average age, BMI, and insurance charges.

> [!info]- Semantic Content
>
> **Code Identifiers:** remove_null_values (6), groupby_smoker (5), groupby_region (5), xcom_pull (2), read_json (2)
> **Code Keywords:** let (9), function (2)
> **Env Vars:** json (4), bmi (4), csv (3)
> **CLI Commands:** python (3), find (2), make (1)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### 5. Using the SQLite Operator for SQL Operations

#### Setting up the SQLite DB and connection
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=1)** - [Instructor] In this demo, we'll see how we can use Airflow operators to work with SQL databases.
>
> **[0:06](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=6)** Specifically, we'll work with the SQLite Database.
>
> **[0:10](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=10)** SQLite is a lightweight and self-contained relational database that is implemented as a library in the C programming language.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=18)** This database is typically embedded into other applications such as mobile applications or even web apps.
>
> **[0:24](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=24)** It's used as a local store of data.
>
> **[0:27](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=27)** Now here I am in the Airflow home directory.
>
> **[0:30](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=30)** I'm going to create a sub-folder here called database and within this sub-folder, I'll just cd into it, I'm going to create a SQLite database.
>
> **[0:40](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=40)** You can just create a My SQLite dot DB file.
>
> **[0:44](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=44)** You can give the file any name you want.
>
> **[0:45](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=45)** I've just called it My SQLite.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=47)** This is our SQLite database.
>
> **[0:49](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=49)** It's just a file where you can store data and run queries.
>
> **[0:53](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=53)** You can also connect to your SQLite database using SQLite Three.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=58)** It should be available in the environment where you are using Airflow.
>
> **[1:01](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=61)** This gives you access to an interactive shell where you can run your SQL queries.
>
> **[1:06](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=66)** Now, if you run dot databases here you'll see what databases are available.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=71)** There is just one main SQLite DB.
>
> **[1:14](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=74)** If you run dot tables, you'll see that there are no tables here in this database at this point in time.
>
> **[1:19](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=79)** Before we set up any workflows to work with SQLite let's head over to the Airflow UI and let's set up a connection to SQLite.
>
> **[1:28](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=88)** Go to Admin and Connections.
>
> **[1:30](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=90)** Now, you'll find here that there are a whole bunch of connections configured, and you can change any of these existing connections to point to your own values.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=98)** But I'm going to click on the plus icon and add a new connection.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=102)** Now, every connection has a connection ID and this is what we'll use to reference the connection from our DAG code.
>
> **[1:49](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=109)** Next, you need to specify the connection type.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=112)** You can see here right at the bottom, SQLite, because we are connecting to a SQLite database, a connection type of SQLite.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=118)** Next, you need to specify the host.
>
> **[2:00](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=120)** Where exactly is this SQLite database located?
>
> **[2:04](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=124)** Well, it's under users LoonyCorn Airflow Database MySQLite dot DB.
>
> **[2:10](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=130)** We don't need any other configuration property here.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=132)** No username, password, no port, nothing.
>
> **[2:15](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=135)** Let's scroll to the bottom and let's test our connection.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=138)** Click on the test button, and if you scroll to the top and you see the success message you know that we are able to access our database.
>
> **[2:27](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=147)** So let's go back and save this connection.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=150)** We'll be referencing this connection from our DAG when we want access the SQLite DB.
>
> **[2:35](https://www.linkedin.com/learning/learning-apache-airflow/setting-up-the-sqlite-db-and-connection?u=76281980&t=155)** Notice we have the MySQLite connection right here in the center of the page.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (1), type. (1)
> **Env Vars:** sql (2), dag (2)
> **CLI Commands:** cd (1), find (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Introducing the SQLite operator
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=1)** - [Instructor] Now, the very first DAG that we are going to set up here is going to create a table in our SQLite database.
>
> **[0:08](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=8)** Observe on line 3, I have an import for the SqliteOperator.
>
> **[0:12](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=12)** This is the operator that you'll use to run SQL commands on our SQLite DB.
>
> **[0:17](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=17)** Let's take a look at the actual DAG.
>
> **[0:19](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=19)** We instantiate a DAG using the with keyword, and notice I have a single operator, the SQLite operator that I instantiate on line 20.
>
> **[0:28](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=28)** This is the create_table operator, that's the task ID, and it has a SQL parameter which I use to specify the SQL statement that I want this operator to execute.
>
> **[0:39](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=39)** The SQL statement is defined as a multi-line Python string, starting on line 22 going through to line 30.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=46)** This is a "CREATE TABLE IF NOT EXISTS users", and every user has an ID, name, age, is_active, and created_at.
>
> **[0:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=55)** Now, on line 31, I specify the SQLite Connection ID.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=58)** That's set to my_sqlite_conn.
>
> **[1:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=61)** This is the connection ID that we had set up in the previous movie.
>
> **[1:05](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=65)** And then, of course, I have the create_table task specified on line 35.
>
> **[1:10](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=70)** Let's switch over to the Airflow UI.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=71)** You can see that this DAG has been picked up.
>
> **[1:14](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=74)** Click through to executing_sql_pipeline, and you can see our single create_table task is in here.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=81)** Now, if you switch over to the Graph View, you'll see the single task there.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=84)** And observe that the task is in this purple color because that is a SQLite operator.
>
> **[1:30](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=90)** You can see the legend on the top left.
>
> **[1:32](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=92)** Let's go ahead and unpause this DAG and set the schedule interval to once, which means it will run right away.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=98)** I'm also going to enable auto-refresh so that the UI will be refreshed automatically.
>
> **[1:44](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=104)** Now our single task has been executed, and hopefully it has created the table that we are looking for.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=110)** Let's look at the logs for this task.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=113)** Here is where we'll see any errors.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=115)** You can see that everything looks clean and that one create_table command was executed.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=121)** One way to verify whether this task was run is to head over to our SQLite console and run .tables once again, and here you can see that the users table is available.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=131)** Let's check the schema of this table.
>
> **[2:13](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=133)** You can do that by running .schema users.
>
> **[2:16](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=136)** And you can see the schema matches the schema that we had specified in our SQLite operator.
>
> **[2:22](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=142)** Now, this table, we know, should be empty.
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=145)** Let's run a "SELECT * FROM users" to confirm that this is indeed the case.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/introducing-the-sqlite-operator?u=76281980&t=149)** And it is.

> [!info]- Semantic Content
>
> **Env Vars:** dag (5), sql (4), create (1), table (1), exists (1)
> **Code Keywords:** let (6), switch (2), for. (1), case. (1)
> **Code Identifiers:** create_table (4), is_active (1), created_at (1), my_sqlite_conn (1), executing_sql_pipeline (1)
> **SQL:** create table (1), select (1)
> **Definitions:** defined as (1), is a  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Implementing a SQL-based DAG pipeline, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=0)** - [Instructor] At this point, we know how to work with the SQLite Operator so let's make our DAG a little more interesting.
>
> **[0:06](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=6)** I've updated the code here in my executing_sql_pipeline.py file to have multiple SQLite Operators.
>
> **[0:14](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=14)** The DAG instance here is the same whatever we had in the previous instance of this demo.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=20)** Let's take a look at all of the individual tasks that I have defined within this workflow.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=25)** First, I have the create_table SqliteOperator defined on lines 20 through 33.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=31)** There's absolutely no change here.
>
> **[0:32](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=32)** The task ID is create table.
>
> **[0:34](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=34)** It runs the create table if not exists, SQL command specified on lines 23 through 29.
>
> **[0:41](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=41)** The SQL connection ID that it uses is my_sqlite connection.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=47)** Now I have a second operator, which depends on the first.
>
> **[0:51](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=51)** This is the insert_values_1 SqliteOperator.
>
> **[0:56](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=56)** I'm using this to insert some data into the user's table that we have just created.
>
> **[1:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=61)** The insert command is specified on lined 49 through 44.
>
> **[1:06](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=66)** Insert into users name agent is active and I insert five different users.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=73)** Now I have another SqliteOperator insert_values_2 that insert some additional data into the same user table.
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=82)** This inserts into users, name and age, and there are four different records specified on lines 54 through 57.
>
> **[1:30](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=90)** Is active for these users will be set to the default value of True and for all inserts, the created at will be set to the current timestamp.
>
> **[1:40](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=100)** We have a table here.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=101)** I've inserted data into the table and then I have a fourth SqliteOperator.
>
> **[1:46](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=106)** This is the display_result SqliteOperator.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=110)** Notice this SQL command that it runs, select star from users.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=115)** This task will just execute this command and the results of this execution will be available on XCom.
>
> **[2:02](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=122)** And how do I accomplish that?
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=123)** Notice online 68, I have do_xcom_push set to True.
>
> **[2:09](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=129)** Whatever result this operator will generate that will be pushed to XCom thanks to this parameter.
>
> **[2:16](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=136)** And then I have my DAG defined on line 72.
>
> **[2:19](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=139)** You have the create table task run first and then either of insert_values_1, insert_values_2, and finally display result.
>
> **[2:27](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=147)** This is a much more interesting DAG.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=149)** Let's switch to the graph view in the AirFlow UI, and this is what my workflow looks like.
>
> **[2:34](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=154)** Insert_values_1 and insert_values_2, both depend on create table.
>
> **[2:38](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=158)** The table has to exist before we can insert values into them.
>
> **[2:42](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=162)** And then finally, after both inserts are completed we'll display the result.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=166)** One thing to note before I execute this DAG, the table users already exists in my database but my create table does a create if does not exist.
>
> **[2:57](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=177)** So it's totally fine to re-execute that.
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=179)** Let's now trigger this DAG and see whether we can see the results of inserting values into our SQLite table.
>
> **[3:09](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=189)** Wait for the execution to go through.
>
> **[3:10](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=190)** Everything seems to be a success.
>
> **[3:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=193)** You can look at the logs for the individual task but I'm really interested in the display result.
>
> **[3:17](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=197)** Click on it.
>
> **[3:18](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=198)** This'll bring up the dialogue here.
>
> **[3:20](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=200)** And let's head over to XCom.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=202)** We should have the result of the final select star here in this XCom, and you can see it right here on screen.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=209)** Let's verify the completion of this workflow by heading over to the SQLite Interface.
>
> **[3:35](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=215)** I'll run a select star from users here.
>
> **[3:37](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=217)** And here you can see all nine users have been inserted into this table successfully.
>
> **[3:43](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=223)** Now, before we go any further and add more tasks to this workflow, I'm going to drop the user's table so the next time we run a DAG, it'll be recreated.
>
> **[3:53](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-1?u=76281980&t=233)** Now we need to actually do this because we are going to be reinserting the same records into this table, and I don't want those tasks to fail which is why I dropped the table so that we start afresh.

> [!info]- Semantic Content
>
> **Env Vars:** dag (7), sql (3)
> **Code Keywords:** let (6), switch (1), finally, (1), interface (1)
> **Code Identifiers:** executing_sql_pipeline (1), create_table (1), my_sqlite (1), display_result (1), do_xcom_push (1)
> **UI Navigation:** switch to (1), click on (1)
> **File Paths:** executing_sql_pipeline.py (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Implementing a SQL-based DAG pipeline, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=1)** - [Instructor] Now I've updated my SQL pipeline one last time to include some more operators to not only insert data but also delete and update data in my user's table.
>
> **[0:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=13)** Let's go straight to the tasks that make up our workflow.
>
> **[0:16](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=16)** I have the tree table SqliteOperator which creates the user's table if it does not exist.
>
> **[0:22](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=22)** Now notice on line 27, there is a city associated with each record and we haven't really specified a value for the city in our insert operations.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=31)** Now the same is true now, I have insert_values_1 and insert_values_2 which inserts some records into the user's table, but we do not specify a value for city, it's set to null after these insert operators run.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=46)** Now, if you scroll down a bit, you'll see that I've defined some new operators that form part of this dag.
>
> **[0:53](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=53)** I have the delete_values SqliteOperator which runs the command DELETE FROM users WHERE is_active = 0.
>
> **[1:00](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=60)** It will delete all the inactive users.
>
> **[1:03](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=63)** I have another task, the update_values task which updates all of the records in the user's table and sets the city for everyone to be equal to Seattle.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=73)** This is the command on line 76.
>
> **[1:16](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=76)** And then finally I have the last task, display_result which simply runs a SELECT * FROM users.
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=82)** And because do_xcom_push is True, it'll push the result to xcom and we can view it there.
>
> **[1:28](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=88)** Let's scroll down and you will see how I've defined the dag, the dependencies between tasks.
>
> **[1:33](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=93)** Create_table comes first and then either of insert_values_1 or insert_values_2.
>
> **[1:39](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=99)** And then I have delete_values, update_values, and finally, display_result.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=105)** Delete, update, and display can only run after insertion is complete.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=110)** I'll switch over directly to the graph view of this dag in the Airflow UI and you can see what the tasks and the dependencies look like.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=118)** We have create_table then the two insert_values, then delete, update, and display.
>
> **[2:03](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=123)** Let's go ahead and trigger this dag and see whether it runs through successfully.
>
> **[2:08](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=128)** It might take a minute or two to run through, but we've set up things correctly and all tasks should indicate success.
>
> **[2:15](https://www.linkedin.com/learning/learning-apache-airflow/implementing-a-sql-based-dag-pipeline-part-2?u=76281980&t=135)** Let's head back to SQLite, let's do a SELECT * FROM users, and you should find only active users here in the result, the remaining users have been deleted, and all users have had their city set to Seattle.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (5), finally, (1), switch (1)
> **Code Identifiers:** delete_values (2), update_values (2), display_result (2), is_active (1), do_xcom_push (1)
> **Env Vars:** select (2), sql (1), delete (1), where (1)
> **SQL:** select (2), delete from (1), where (1)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** scroll down (2)
> **API Endpoints:** delete  (1)
> **Definitions:** is a  (1)


### 6. Conditional Branching and TaskGroups

#### Introducing branching
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=1)** - [Instructor] So far all of the workflows that we've worked with have had dependencies, single dependencies, multiple dependencies, but no conditional branching.
>
> **[0:09](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=9)** Conditional branching is where you want to execute one branch of your workflow or one branch of your DAG based on a condition that you evaluate.
>
> **[0:20](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=20)** The result of that condition will determine what path you will take.
>
> **[0:23](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=23)** I have the code for my DAG implementing conditional branching here in this file, executing_branching.py.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=31)** Notice on line five, I have an import statement for the BranchPythonOperator.
>
> **[0:37](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=37)** This is the Airflow operator that will allow us to implement conditional branching.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=42)** The Python operators in my workflow invoke these Python callables.
>
> **[0:47](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=47)** On line 13 I have a method called has_driving_license which returns a random choice of either true or false.
>
> **[0:56](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=56)** So each time you run the DAG, this particular function will return either true or false and this will be completely at random, and let's assume that is actually the result of whether a particular person has a driving license or not.
>
> **[1:10](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=70)** Next, I define the function for the branch operator.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=73)** Now I've called the function branch and it takes in the task instance as an input argument.
>
> **[1:18](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=78)** It uses this task instance on line 17 to call xcom_pull on the task ID has_driving_license.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=86)** That is the previous task and it checks to see whether the individual has a driving license or not.
>
> **[1:33](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=93)** Now if has_driving_license returns true, then the next task that will be executed in sequence will be the task with ID eligible_to_drive.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=102)** That's the ID that this task returns on line 18.
>
> **[1:46](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=106)** If has_driving_license returns false, then the next task that will be executed in sequence will be not_eligible_to_drive.
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=115)** If has_driving_license is false, the branching task will return not_eligible_to_drive.
>
> **[2:00](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=120)** This is on line 20.
>
> **[2:02](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=122)** So based on the branching condition, one of the two tasks of eligible_to_drive and not_eligible_to-drive defined on lines 22 and 25 will be executed.
>
> **[2:14](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=134)** Now the function eligible_to_drive simply prints out to screen, "You can drive, you have a license."
>
> **[2:19](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=139)** And not_eligible_to_drive simply prints out to screen, "I'm afraid you're out of luck, you need a license to drive."
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=145)** Only one of these two functions, eligible_to_drive or not_eligible_to_drive, will be executed based on the value that has driving license returns, true or false.
>
> **[2:37](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=157)** As usual, I've instantiated the DAG using the with statement and then as you scroll down, you'll see the four Python operators within this workflow.
>
> **[2:47](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=167)** The first task has the ID has_driving_license and the python_callable set to has_driving_license.
>
> **[2:53](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=173)** This is what will return the condition of true or false.
>
> **[2:57](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=177)** Now the branch Python operator has the task ID branch.
>
> **[3:01](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=181)** It's useful to have a meaningful task ID for your branches so that it's clear when you look at the graph and it invokes the python_callable branch.
>
> **[3:09](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=189)** And then we have task C and task B, eligible_to_drive or not_eligible_to_drive.
>
> **[3:15](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=195)** Our dependencies are on line 58.
>
> **[3:17](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=197)** Task A, then task B and task C and D both depend on task B, the branch operator.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=203)** Let's switch over to the Airflow UI.
>
> **[3:25](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=205)** It should have picked up our DAG.
>
> **[3:27](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=207)** There you can see it, executing_branching.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=209)** Let's click through and go to the Grid view.
>
> **[3:32](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=212)** Now in the Grid view on the left navigation pane, you'll find that all four tasks are present, has_driving_license, branch, eligible_to_drive, not_eligible_to_drive.
>
> **[3:42](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=222)** Let's take a look at the Graph view where we can clearly see the dependencies and here you can see the branching condition, and the two tasks that depend on the branching condition.
>
> **[3:52](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=232)** Only one can be executed for any DAG run.
>
> **[3:56](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=236)** When you look at this graph, there is no way to tell that the branch task is actually a conditional branch.
>
> **[4:03](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=243)** That's why it's useful for you to have a meaningful name there.
>
> **[4:06](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=246)** Otherwise it seems like both eligible_to_drive and not_eligible_to_drive just depend on the branch task, and both can be executed once branch is complete.
>
> **[4:15](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=255)** Make sure your conditional branches have a meaningful task ID.
>
> **[4:19](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=259)** Let's now unpause this DAG so that we can execute it.
>
> **[4:23](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=263)** I'm also going to auto-refresh my UI so that I can see changes.
>
> **[4:27](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=267)** Once this is done, the DAG should automatically execute and you can see this time driving license returned true and eligible_to_drive was the task that was executed.
>
> **[4:38](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=278)** not_eligible_to_drive is in pink, that was skipped.
>
> **[4:41](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=281)** Now you can see the same information in the Grid view.
>
> **[4:45](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=285)** Remember tasks in dark green have completed successfully and the task in pink has been skipped.
>
> **[4:51](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=291)** Now I'm going to trigger the DAG once again.
>
> **[4:53](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=293)** Because we've chosen random choice this time, eligible_to_drive has been skipped and not_eligible_to_drive was successfully completed.
>
> **[5:03](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=303)** You can rerun this DAG as many times as you want.
>
> **[5:06](https://www.linkedin.com/learning/learning-apache-airflow/introducing-branching?u=76281980&t=306)** Each time, based on what random choice returns, either true or false, a different branch of the DAG will be executed.

> [!info]- Semantic Content
>
> **Code Identifiers:** eligible_to_drive (9), not_eligible_to_drive (9), has_driving_license (8), executing_branching (2), python_callable (2)
> **Env Vars:** dag (11)
> **Code Keywords:** let (5), function (4), switch (1)
> **CLI Commands:** python (4), find (1), make (1)
> **UI Navigation:** scroll down (1), go to (1)
> **File Paths:** executing_branching.py (1)
> **Speakers:** - [instructor] (1)

#### Conditional branching with variables
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=1)** - [Instructor] Now, you may have a workflow that executes several operation and you want to choose one of the operations to perform for each run, and this choice will be based on some kind of configuration that you provide.
>
> **[0:13](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=13)** You can specify your configuration in Apache Airflow using variables.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=18)** Variables are a way to store and retrieve arbitrary values that can be used across the different DAGs.
>
> **[0:25](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=25)** Go to Admin and Variables.
>
> **[0:27](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=27)** And here you'll see all of the variables available to your Airflow installation.
>
> **[0:33](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=33)** If you click on this plus button here, you'll be able to add a new variable that you can then access from your DAG code.
>
> **[0:40](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=40)** Variables are just key-value stores.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=42)** The variable key here is transform_action, and the action that I want to perform is filter_by_southwest.
>
> **[0:50](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=50)** We'll work with the insurance data that we've seen earlier in this course, and we'll filter all records pertaining to the Southwest region.
>
> **[0:58](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=58)** That is the transform_action.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=59)** Go ahead and save this variable.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=62)** I'll access and use this variable within the DAG that I set up.
>
> **[1:06](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=66)** You can see that the transform_action variable has been successfully configured.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=71)** Now, let's switch over to our code in VS Code.
>
> **[1:14](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=74)** I've updated the code in the executing_branching.py file.
>
> **[1:19](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=79)** Notice, I still use the branch PythonOperator.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=81)** The import is on line seven.
>
> **[1:23](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=83)** On line eight, I have an import for the Variable class.
>
> **[1:27](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=87)** This is what I used to access variables configured in my Airflow setup.
>
> **[1:32](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=92)** On line 15., I have the DATASETS_PATH constant, which points to the insurance.csv file that is in my datasets folder.
>
> **[1:41](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=101)** On line 17, I have specified an output path.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=105)** The output path where the final transform results will be stored.
>
> **[1:49](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=109)** The output path points to the output folder.
>
> **[1:52](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=112)** The name of the CSV file is something that I'll specify when I actually write out the output and that's why there is a placeholder for it.
>
> **[2:01](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=121)** The first task in my workflow will be to read the CSV file, the functions defined on lines 19 through 24.
>
> **[2:08](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=128)** This returns the insurance DataFrame in the JSON format.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=132)** Next, I have the remove_null_values function that takes in a task instance as an input argument.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=138)** You've seen the code for this before.
>
> **[2:20](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=140)** This is the function that will return the cleaned DataFrame without null values.
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=145)** Next, I have the determine_branch.
>
> **[2:28](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=148)** This is our branching function.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=150)** Now, on line 39, I use variable.get to get the value of the transform_action variable.
>
> **[2:37](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=157)** Now, if the transform_action starts with the term filter, it's a filtering action and the transform_action string itself specifies the task ID to execute.
>
> **[2:50](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=170)** And that's why I have the return transform_action on line 42.
>
> **[2:54](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=174)** What we've currently configured is filter_by_southwest, and that will be the task ID executed.
>
> **[3:01](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=181)** Otherwise, if transform_action is groupby_region_smoker, then the task ID that will be executed is groupby_region_smoker, and that's what we return on line 44.
>
> **[3:12](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=192)** Next, I have all of the functions that perform filtering actions, filter_by_southwest on line 47 and filter_by_southeast on line 56.
>
> **[3:22](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=202)** Let's look at the code of one of these tasks.
>
> **[3:24](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=204)** The code for the remaining tasks are identical.
>
> **[3:27](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=207)** Now, on line 48, you can see that we access the JSON data, the clean data.
>
> **[3:32](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=212)** We convert that to a DataFrame.
>
> **[3:33](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=213)** And on line 51, I filter by the Southwest region.
>
> **[3:37](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=217)** On line 53, I write out the resulting filtered DataFrame to the output path with the name southwest.
>
> **[3:45](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=225)** That'll be the name of the CSV file.
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=227)** I do exactly the same set of steps for all of the filter_by tasks.
>
> **[3:52](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=232)** Filter_by_northwest on line 65 and filter_by_northeast is on line 74.
>
> **[3:57](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=237)** I also have a grouping task that's different from the filtering task, groupby_region_smoker.
>
> **[4:03](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=243)** Again, we are familiar with the code that goes into this task.
>
> **[4:06](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=246)** We access the data grouped_by_region, grouped_by_smoker and compute the average values of age, BMI and insurance charges.
>
> **[4:14](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=254)** On lines 93 and 101, I write out two CSV files with both of these grouped results.
>
> **[4:21](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=261)** Now, if you scroll down, you'll see that I've instantiated the DAG.
>
> **[4:24](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=264)** Nothing special there.
>
> **[4:25](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=265)** Notice the three tasks: read_csv_file, remove_null_values and determine_branch.
>
> **[4:30](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=270)** Those are the first three tasks that we'll call in sequence.
>
> **[4:33](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=273)** And then below, I have all of the filter tasks on line 129, 134, 139, and 144.
>
> **[4:40](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=280)** And finally at the very bottom, I have the PythonOperator for the groupby_region_smoker task and then the DAG definition on lines 154 through 158.
>
> **[4:51](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=291)** We read the CSV file, remove null values, determine the branch.
>
> **[4:55](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=295)** And then after that, we have all of the possible operations that we could perform.
>
> **[5:00](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=300)** Four filtering operations and one groupby operation.
>
> **[5:04](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=304)** Let's go straight to the graph view in our Airflow UI.
>
> **[5:08](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=308)** And here you can see our conditional branching DAG.
>
> **[5:12](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=312)** The transform_action variable that we set will determine what branch will be executed.
>
> **[5:18](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=318)** We've currently set it to filter_by_southwest.
>
> **[5:21](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=321)** Now let's trigger this DAG and see whether the right branch is executed.
>
> **[5:26](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=326)** You'll have to wait for a bit.
>
> **[5:27](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=327)** And yes, filter_by_southwest was executed and the other branches were skipped.
>
> **[5:32](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=332)** They're all in pink.
>
> **[5:33](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=333)** And you can confirm this by heading over to the output directory.
>
> **[5:36](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=336)** Within this, you should find the southwest.csv file.
>
> **[5:39](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=339)** Click on this file and here you'll find all of the records for the Southwest region.
>
> **[5:45](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=345)** Notice the region column here.
>
> **[5:47](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=347)** Let's try this one more time with a different value for transform_action.
>
> **[5:51](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=351)** Head over to variables and edit the transform_action variable at the very bottom here.
>
> **[5:58](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=358)** Instead of filter_by_southwest, let's say I want to perform the groupby_region_smoker.
>
> **[6:03](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=363)** Go ahead and save this update to the variable.
>
> **[6:06](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=366)** Observe that I haven't updated the DAG.
>
> **[6:08](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=368)** I haven't changed the code of the DAG.
>
> **[6:10](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=370)** I haven't re-uploaded the DAG.
>
> **[6:12](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=372)** Now I'm going to go back to the graph view.
>
> **[6:14](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=374)** This is what it looks like.
>
> **[6:16](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=376)** The last time filter_by_southwest was executed.
>
> **[6:19](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=379)** I'm now going to rerun this DAG and because I've updated the value of the transform_action variable, the groupby operation should be executed this time around.
>
> **[6:28](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=388)** Trigger the DAG, and there it is.
>
> **[6:30](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=390)** Groupby_region_smoker was executed and we can verify that the output is present by heading over to the output directory.
>
> **[6:39](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=399)** And here you can see that the grouped output has been generated, grouped_by_region and grouped_by_smoker.
>
> **[6:45](https://www.linkedin.com/learning/learning-apache-airflow/conditional-branching-with-variables?u=76281980&t=405)** You can open up these files and take a look.

> [!info]- Semantic Content
>
> **Code Identifiers:** transform_action (12), filter_by_southwest (7), groupby_region_smoker (5), remove_null_values (2), determine_branch (2)
> **Env Vars:** dag (11), csv (5), json (2), datasets_path (1), bmi (1)
> **Code Keywords:** let (6), function (3), switch (1), class. (1), this, (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **File Paths:** executing_branching.py (1), insurance.csv (1), southwest.csv (1)
> **CLI Commands:** find (2), apache (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** go back to (1)

#### Task groups and edge labels
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=1)** - [Narrator] Even as you are doing this course, it's pretty clear that our workflows are getting more and more complex, and this is even more true in the real world.
>
> **[0:10](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=10)** In order to manage complex workflows, if you're looking at individual tasks, that can get quite overwhelming.
>
> **[0:16](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=16)** In this demo, we'll see how you can organize your complex workflows using task groups and edge labels.
>
> **[0:23](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=23)** Task groups allow you to group related tasks together within a DAG, making it easier for you to understand the overall structure of the workflow.
>
> **[0:31](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=31)** Edge labels, on the other hand, allow you to add labels to the edges between tasks in a DAG, providing additional information about the dependencies between tasks.
>
> **[0:41](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=41)** We work with the same Python pipeline that we did in the previous demo, the branching pipeline.
>
> **[0:46](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=46)** Here I am in Airflow's variables UI and I've just updated the transform action variable to be filtered by Northwest, because that is the operation I want my DAG to perform.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=59)** When you look at the code that I have here, you'll see that it's essentially the same as in the previous demo.
>
> **[1:04](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=64)** There are a few changes, and I'll highlight those.
>
> **[1:06](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=66)** Take a look at the read_csv_file function.
>
> **[1:09](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=69)** It takes in a task instance as an input argument, and on line 26, I call ti.xcom_push to push the JSON value that I want to pass on to other tasks with the key my_csv.
>
> **[1:25](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=85)** Now, when other tasks want to access this value, they can only specify the key rather than the task ID, so read_csv_file no longer returns a value that is implicitly added to xcom.
>
> **[1:37](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=97)** Instead, it explicitly pushes a value to xcom by calling xcom_push.
>
> **[1:43](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=103)** Notice remove_null_values.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=105)** It takes in a task instance as an input argument.
>
> **[1:47](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=107)** I call ti.xcom_pull and I pull the value with the key my_csv.
>
> **[1:54](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=114)** It removes the null values from the data frame and on line 38 it calls ti.xcom_push and pushes the clean CSV onto xcom, where it can be accessed by other tasks.
>
> **[2:06](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=126)** Determine_branch once again reads the transform_action variable on line 42.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=132)** Now, on line 46, if the transform action starts with filter, then we have to invoke one of the filtering tasks.
>
> **[2:19](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=139)** On line 47, notice that the task ID starts with filtering, then there is a dot and then there is the actual task ID.
>
> **[2:27](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=147)** Filtering here is the name of the task group to which the filtering tasks belong.
>
> **[2:32](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=152)** When you use task groups, when you reference a task, you have to specify the name of the task group as a prefix.
>
> **[2:39](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=159)** The same is on true line 49.
>
> **[2:41](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=161)** Grouping is the name of the task group to which the grouping task belongs, so we have grouping dot and then the task ID.
>
> **[2:49](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=169)** Now, all of the filtering and grouping actions here are familiar to you.
>
> **[2:53](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=173)** The one thing to note, on lines 53, 62, and 71, they all use ti.xcom_pull and explicitly pull the data associated with the key my_clean_csv.
>
> **[3:05](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=185)** The same thing is true of the grouping task.
>
> **[3:08](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=188)** It pulls the value associated with the key my_clean_csv.
>
> **[3:13](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=193)** Now let's go to where we've defined our task groups within our DAG.
>
> **[3:17](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=197)** Notice on line 119, I have with TaskGroup reading_and_preprocessing.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=203)** Now, within that, I've defined two tasks, read_csv_file and remove_null_values.
>
> **[3:29](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=209)** Both of these tasks are part of the reading_and_preprocessing task group, and on line 131, I specify the dependencies between these two tasks.
>
> **[3:38](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=218)** The CSV file comes first and then remove_null_values.
>
> **[3:42](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=222)** The branching operator does not really belong to a task group, so it's a standalone task, so you can mix task groups and standalone tasks if you need to.
>
> **[3:50](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=230)** Now I have a task group called filtering with all of the filtering operators.
>
> **[3:55](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=235)** This task group is defined on line 138, and then I have the four filter operators, filter by southwest, by southeast, by northwest, and northeast, all within this task group.
>
> **[4:05](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=245)** Now, all of the filter tasks in this group are independent of one another.
>
> **[4:09](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=249)** There are no dependencies to specify here, so you can just skip that step.
>
> **[4:14](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=254)** I have one more task group here at the bottom, called grouping, and it contains a single Python operator, groupby_region_smoker.
>
> **[4:23](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=263)** Now, when you specify your final DAG, you'll actually use the task group labels.
>
> **[4:28](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=268)** Reading_and_preprocessing comes first, and then determine_branch.
>
> **[4:32](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=272)** Now the edge will have an edge label called preprocessed data.
>
> **[4:38](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=278)** This indicates that the output of the reading and preprocessing group is preprocessed data.
>
> **[4:43](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=283)** Now, after determined_branch, I have another edge label that says branch on condition, and then I have the two task groups for filtering and grouping.
>
> **[4:52](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=292)** Let's head over to the Airflow UI and see what this DAG looks like.
>
> **[4:56](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=296)** If you look over to the left, you can see sections.
>
> **[4:59](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=299)** Reading_and_preprocessing contains read_csv_file and remove_null_values, the filtering section contains the four filtering tasks, and the grouping section contains the groupby_region_smoker.
>
> **[5:09](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=309)** All of your tasks are nicely arranged in logical sections, and the same is true of the graph view as well.
>
> **[5:16](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=316)** In fact, it's even clearer in the graph view.
>
> **[5:19](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=319)** Observe that our graph is so much simpler.
>
> **[5:22](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=322)** We have reading_and_preprocessing, then preprocessed data goes to determine_branch, and then we branch on condition and do either filtering or grouping.
>
> **[5:31](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=331)** The graph is much cleaner, much easier to understand, and we haven't lost the detail.
>
> **[5:36](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=336)** You can click on any of these groups and you'll get additional information.
>
> **[5:40](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=340)** For example, if you click on reading_and_preprocessing, you can see the two tasks that make up this task group.
>
> **[5:47](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=347)** If you click on this once again, you'll close this and you'll be able to see only the task group.
>
> **[5:52](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=352)** Let's click through to the filtering task group and you can see the four filtering tasks that go in here.
>
> **[5:58](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=358)** And then finally, let's click through to the grouping task group.
>
> **[6:02](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=362)** You need to close the filtering one first so that we can see things, and let's see that the grouping task group has just one task within it.
>
> **[6:10](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=370)** Now, the actual workflow hasn't changed, so if you trigger this DAG, you need to unpause and enable it first.
>
> **[6:18](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=378)** You'll see the same results that we got in the previous demo, so the task group and edge labels haven't actually changed what you execute, but they have changed how you visualize your DAG.
>
> **[6:31](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=391)** Let's take a look at the output of this DAG, and there you see northwest.csv.
>
> **[6:37](https://www.linkedin.com/learning/learning-apache-airflow/task-groups-and-edge-labels?u=76281980&t=397)** Let's open this up, and this will contain all of the records from the Northwest.

> [!info]- Semantic Content
>
> **Code Identifiers:** read_csv_file (4), remove_null_values (4), reading_and_preprocessing (4), xcom_push (3), my_csv (2)
> **Env Vars:** dag (9), csv (2), json (1)
> **Code Keywords:** let (7), function (1), pass (1), finally, (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** python (2), make (1)
> **File Paths:** northwest.csv (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 7. Catch Up, Backfill, and CRON Expressions

#### Catch up with all previously scheduled runs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=0)** - [Instructor] In this movie, we'll see how Catchup works in Apache Airflow.
>
> **[0:04](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=4)** In Airflow, Catchup refers to the process of scheduling and executing all the past DAG runs that would have been scheduled if the DAG had been created and running at an earlier point in time.
>
> **[0:18](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=18)** When Catchup is enabled, airflow will create DAG runs for all past intervals that have not yet been executed and will execute them in sequence until it reaches the current interval.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=29)** Essentially, Airflow will catch up all previous runs that should have been executed but wasn't.
>
> **[0:37](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=37)** In this demo, we'll use cron expressions to schedule R-DAG.
>
> **[0:43](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=43)** Now the actual DAG is going to be pretty straightforward.
>
> **[0:45](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=45)** This particular DAG contains a mix of Python operators and bash operators.
>
> **[0:50](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=50)** Notice the three Python functions here.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=52)** Choose branch, branch and task C.
>
> **[0:55](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=55)** Choose branch just returns true or false as a random choice branch takes in a task instance as an input argument pulls the result of task choose and then based on whether task choose returned true or false will execute Task C or D.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=73)** Task C is the Python function with simply prints out Task C executed.
>
> **[1:19](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=79)** Now let's take a look at the DAG which uses a cron expression for scheduling.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=84)** Notice the schedule interval.
>
> **[1:26](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=86)** That's what is the most interesting.
>
> **[1:27](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=87)** Now, a cron expression has five different components and each field represents a different aspect of the date and time for the job to run.
>
> **[1:37](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=97)** A cron expression has five components.
>
> **[1:40](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=100)** The first part is the minute.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=102)** That is the minute that a particular task should run.
>
> **[1:45](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=105)** Zero implies the top of the R 30 minutes means 30 minutes past the R.
>
> **[1:50](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=110)** The next component is the hour.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=113)** This is a value between zero and 23 where zero implies midnight.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=118)** Now if you look at our schedule interval, we have zero zero in the first two positions indicating that this cron should run at midnight at the top of the R.
>
> **[2:09](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=129)** The third component is the day of the month.
>
> **[2:12](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=132)** It can be a value between one and 31 and asterisk represents every day of the month.
>
> **[2:18](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=138)** The fourth component is the actual month and this is a value between 1 and 12, both inclusive.
>
> **[2:25](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=145)** Now when you have an asterisk there this means every month.
>
> **[2:29](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=149)** The last component which is optional, is the year.
>
> **[2:32](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=152)** We have an asterisk there on line 34 and that means this will run every year so this particular job will run every day exactly at midnight for every month of every year.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=166)** Notice that my start date is five days ago so when I run this dag, it'll have to catch up to the executions of the last five days.
>
> **[2:55](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=175)** Notice that I've explicitly specified catch up equal to true online 35.
>
> **[2:59](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=179)** Catch up is true by default.
>
> **[3:01](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=181)** Here I've explicitly set it to be true.
>
> **[3:04](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=184)** Now what the actual tag looks like, well, it doesn't really matter because we are focused on catch up here.
>
> **[3:11](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=191)** I have a task A, that's a bash operator.
>
> **[3:14](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=194)** The task choose is a Python operator, which makes a choice so there is a branch.
>
> **[3:18](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=198)** Then I have the task branch which is a branch Python operator.
>
> **[3:23](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=203)** Task C is a Python operator, D a bash operator and task E is something called an empty operator which is just a no, it does nothing.
>
> **[3:32](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=212)** And then I have the dependency specified on line 68 and 70.
>
> **[3:36](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=216)** Now what exactly the DAG looks like does not matter.
>
> **[3:40](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=220)** Let's focus on the cron expression and let's focus on catch up.
>
> **[3:44](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=224)** Now here I am in the graph view of this DAG.
>
> **[3:47](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=227)** This is what our workflow looks like.
>
> **[3:50](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=230)** I've defined the workflow with a mix of operators but the workflow doesn't really do anything meaningful.
>
> **[3:55](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=235)** We're focused on understanding how Catchup works.
>
> **[3:59](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=239)** Let's head over to the grid view and here you can see the same graph.
>
> **[4:03](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=243)** Now I'm going to enable this DAG and then wait for a little while.
>
> **[4:08](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=248)** Now I've set this task to have a start time of five days ago and it was due to run at midnight every day.
>
> **[4:16](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=256)** Observe that there are multiple executions of this task in progress at this point in time.
>
> **[4:22](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=262)** That's because Airflow is automatically catching up with all of the runs that were not executed for the last five days.
>
> **[4:30](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=270)** In about three or four minutes, all five executions should be complete.
>
> **[4:35](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=275)** Airflow has caught up with the scheduled runs of this DAG.
>
> **[4:40](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=280)** Now, all of the runs were executed right now but these were actually runs from previous days.
>
> **[4:45](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=285)** If you go over to calendar, you'll see that there are five days in green indicating that the task was executed for those five scheduled times With Catchup equal to true, Airflow automatically caught up with previously scheduled runs.
>
> **[5:02](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=302)** I'm going to change my chron expression to have a different schedule interval for this tag, but first I'm going to delete this bag completely so that we start off on a fresh sleep.
>
> **[5:13](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=313)** The DAG has disappeared from the Airflow UI.
>
> **[5:16](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=316)** Now, let's go back to the code and I'm going to make a single change.
>
> **[5:20](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=320)** I'm going to change the schedule interval for this DAG.
>
> **[5:24](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=324)** I'm going to specify a different cron expression.
>
> **[5:27](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=327)** That means run this task every 12 hours on Saturday and Sunday at the top of the hour, so it'll run at midnight then at 12:00 PM then at midnight on Sunday at 12:00 PM on Sunday, and it'll repeat this for every weekend.
>
> **[5:46](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=346)** The first zero indicates that the DAG will run at the top of the R.
>
> **[5:49](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=349)** The asterisk slash 12 means every 12 bars, and the 6 at the end indicates that the DAG should run on Saturday the sixth day of the week.
>
> **[5:59](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=359)** Now we have a zero and the six and the zero are separated by a comma.
>
> **[6:03](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=363)** This means that the DAG should run on the sixth day of the week, which is a Saturday.
>
> **[6:08](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=368)** It should also run on the zero day of the week, which is Sunday and that's why this DAG runs on Saturdays and Sundays.
>
> **[6:15](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=375)** I'll also change the start date of the DAG to be 30 days ago because then there'll be several weekends in there.
>
> **[6:23](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=383)** If I just said five days, there may not be a weekend in there, but with 30 days we know we'll have several weekends.
>
> **[6:29](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=389)** Please note that catch up is still true, which means that this DAG will catch up with all previous runs.
>
> **[6:37](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=397)** I'm now going to go back to the Airflow UI directly to the grid view, observe that because we started afresh there have been no executions of this DAG previously.
>
> **[6:46](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=406)** The first thing to do is unpause this DAG so that it gets scheduled and make sure that auto refreshes enabled so that we can see the runs in the UI.
>
> **[6:55](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=415)** Observe that the runs are being caught up too.
>
> **[6:59](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=419)** Multiple runs are being scheduled to catch up with all of the missed runs over the past 30 days.
>
> **[7:06](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=426)** Now this took about five or six minutes to run on my machine.
>
> **[7:10](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=430)** Let's head over to the calendar and see for what these these runs were executed and if you head over to the calendar, you'll see that DAG runs were complete for every Saturday and every Sunday in the last 30 days.
>
> **[7:25](https://www.linkedin.com/learning/learning-apache-airflow/catch-up-with-all-previously-scheduled-runs?u=76281980&t=445)** Now that we've seen how cron expressions and Catchup work, let's go ahead and delete this DAG and in the next movie we'll see how backfill works.

> [!info]- Semantic Content
>
> **Env Vars:** dag (23)
> **Code Keywords:** let (7), delete (2), function (1), default. (1), while. (1)
> **CLI Commands:** python (6), make (2), apache (1)
> **Definitions:** is a  (7), refers to (1), means that (1)
> **Cross-References:** go back to (2), in the last (1), in the next (1)
> **Tools:** bash (3)
> **Ports:** :00 (2)
> **Warnings:** note that (1)

#### Backfill scheduled runs
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=1)** - [Instructor] Now that we've understood catchup, in this demo we'll see how backfill works in Apache Airflow.
>
> **[0:06](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=6)** Now, backfill refers specifically to the process of executing past DAG runs for a specific gate range rather than all past DAG runs.
>
> **[0:17](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=17)** Backfill can be useful when you need to rerun a subset of the past DAG runs, maybe the runs for a particular week or a month.
>
> **[0:26](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=26)** The DAG that I'll execute is the same DAG as in the previous demo.
>
> **[0:30](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=30)** Nothing has really changed, but I'm going to change catchup to false.
>
> **[0:35](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=35)** I do not want the DAG to be re-executed and catchup with all previously scheduled DAG runs.
>
> **[0:42](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=42)** Instead, I'll use a backfill to execute runs for a particular date range.
>
> **[0:48](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=48)** Now the start date for this DAG is 30 days ago from the current date, and the schedule interval is as before, every Saturday and Sunday every 12 hours.
>
> **[0:59](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=59)** So there'll be four runs every weekend.
>
> **[1:02](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=62)** Now let's head over to our Airflow scheduler.
>
> **[1:05](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=65)** Here I'm in the grid view.
>
> **[1:07](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=67)** Let me un-pause this DAG and also enable auto-refresh.
>
> **[1:11](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=71)** Because we specified catchup equal to false when we instantiate the DAG, the DAG will run exactly once.
>
> **[1:18](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=78)** Only the last scheduled run will be executed.
>
> **[1:21](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=81)** No previous runs will be caught up to.
>
> **[1:25](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=85)** Let's head over to the calendar here and see which run was executed.
>
> **[1:29](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=89)** I'm actually on the 25th of April, 2023, and you can see the run that was executed was for the previous Sunday.
>
> **[1:38](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=98)** Now let's see how we can backfill this DAG run for a specified period.
>
> **[1:42](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=102)** I'm now going to switch over to my terminal window and run airflow dags dash help to get help information for all commands I can use with DAGs.
>
> **[1:53](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=113)** Notice the very first command backfill?
>
> **[1:55](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=115)** This is the command that I plan to use.
>
> **[1:58](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=118)** Now let's take a look at the current date.
>
> **[2:00](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=120)** If I simply invoke the cal command here, you can see that I'm on the 25th of April, 2023.
>
> **[2:07](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=127)** Now, let's say we want to backfill a previous date.
>
> **[2:11](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=131)** Let's say this date is from one year ago.
>
> **[2:13](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=133)** Well, you can do that.
>
> **[2:14](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=134)** Airflow dags backfill -s gives us the start date, that is the 1st of April, 2022 and -e gives us the end date, that is the 20th of April, 2022.
>
> **[2:27](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=147)** And then you specify the ID of the DAG that you want backfilled.
>
> **[2:30](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=150)** That is the cron_catchup_backfill DAG.
>
> **[2:34](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=154)** Go ahead and hit enter and wait for just a little bit.
>
> **[2:38](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=158)** All of the previously scheduled DAGs for that particular period that we specified will be executed and backfilled.
>
> **[2:46](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=166)** And we can confirm this by heading over to the UI.
>
> **[2:49](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=169)** First, let's take a look at the grid view and here you can see that there have been multiple executions of this DAG.
>
> **[2:56](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=176)** I'll hover over one of these runs and get additional details.
>
> **[3:00](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=180)** Observe the type of run.
>
> **[3:03](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=183)** It was of type backfill.
>
> **[3:05](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=185)** All that's left here is to head over to the calendar and see whether these runs were for the specified time period.
>
> **[3:12](https://www.linkedin.com/learning/learning-apache-airflow/backfill-scheduled-runs?u=76281980&t=192)** You can see information for the year 2022 and 2023 and you can see that on Saturdays and Sundays in April of 2022, that's the period that we backfilled.

> [!info]- Semantic Content
>
> **Env Vars:** dag (15)
> **Code Keywords:** let (8), switch (1)
> **CLI Commands:** apache (1)
> **Code Identifiers:** cron_catchup_backfill (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=0)** - [Narrator] And with this demo, we come to the very end of this course on learning Apache Airflow.
>
> **[0:05](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=5)** Let's take a quick look at what we covered in this course.
>
> **[0:08](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=8)** We started off by discussing Airflow concepts and we saw the basic architecture of the Airflow Workflow Management service.
>
> **[0:17](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=17)** We then built a variety of workflows using directed acyclic graphs.
>
> **[0:22](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=22)** We saw how we could set up the individual tasks in a workflow and specify upstream and downstream dependencies.
>
> **[0:29](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=29)** We created tasks using the built-in operators that Airflow provided.
>
> **[0:34](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=34)** We then saw how we could pass data between tasks using XComs and we visualized our workflow using TaskGroups to group logical tasks together.
>
> **[0:45](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=45)** We brought all of this together using real world examples of a Python processing pipeline and a SQL operations pipeline.
>
> **[0:52](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=52)** And finally, we ended this course by discussing Cron scheduling of bags, catch up and backfilling bags.
>
> **[1:00](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=60)** If you're interested in big data processing and building pipelines, here are some other courses on LinkedIn Learning that you might like.
>
> **[1:07](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=67)** "[[Introduction to Spark SQL and DataFrames]]" will show you how you can process data using SQL in Apache Spark.
>
> **[1:13](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=73)** Or you might be interested in stream messaging systems.
>
> **[1:17](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=77)** Then the course for you would be "Learn Apache Kafka for Beginners."
>
> **[1:22](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=82)** Well, that's it from me here today.
>
> **[1:24](https://www.linkedin.com/learning/learning-apache-airflow/summary-and-next-steps?u=76281980&t=84)** It's time for me to say goodbye. Thank you for listening.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (3), python (1)
> **Code Keywords:** let (1), pass (1), finally, (1)
> **Env Vars:** sql (3)
> **Cross-References:** we covered (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)


## Path Context

### In [[Advance Your Data Engineering Skills]]
← [[Complete Guide to Data Lakes and Lakehouses]] | **6 of 10** | [[Data Engineering Pipeline Management with Apache Airflow]] →

### In [[Data Engineering Foundations Professional Certificate by Astronomer]]
← [[Hands-On Introduction- Data Engineering]] | **4 of 6** | [[Introduction to Data Warehouses]] →

## Part of

- [[Data Engineering Foundations Professional Certificate by Astronomer]]

## Appears In

- [[Advance Your Data Engineering Skills]]
- [[Data Engineering Foundations Professional Certificate by Astronomer]]

## Related Courses

_Courses sharing skills:_

- [[Data Engineering Pipeline Management with Apache Airflow]] — Apache Airflow
- [[PowerShell- Automating IT Administration]] — IT Automation
- [[Exploring AIOps]] — IT Automation

---

[↑ Back to top](#)