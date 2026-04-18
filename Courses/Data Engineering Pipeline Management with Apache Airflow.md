---
type: course
slug: data-engineering-pipeline-management-with-apache-airflow
url: "https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow"
duration_minutes: 128
duration: 2h 8m
level: Intermediate
updated: 8/15/2023
learners: 32450
skills:
  - Apache Airflow
  - Workflow Management
exercise_files: true
tags:
  - course
  - topic/data-science
  - topic/devops
  - skill/apache-airflow
  - skill/workflow-management
status: not-started
created: 2026-04-17
---

# Data Engineering Pipeline Management with Apache Airflow

> Take a deeper dive into data engineering pipeline management using Apache Airflow. In this course, certified Google cloud architect and data engineer Janani Ravi guides you through using Apache Airflow to complete your data engineering pipeline management workflows. Learn how to work with role-based access control, including creating users with different roles, executing a branching DAG and a SQL 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow) | 2h 8m | Intermediate | 32K learners

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Apache Airflow
- Workflow Management

## Table of Contents

### Introduction

#### Features for data engineering pipeline management
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=1)** - Hi, and welcome to this course on Data Engineering Pipeline Management with Apache Airflow.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=6)** Now, in this course, I assume that you are familiar with the basic concepts of Apache Airflow, and you know how to use Airflow to execute your workflows.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=15)** We'll focus on essential features that have to do with pipeline management.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=20)** Here are the features that I'll cover in this course.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=23)** We'll first discuss role-based access control, and see how you can configure users with different rules that have different kinds of access to your Airflow webserver.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=34)** Next, we'll look at service-level management in Apache Airflow.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=39)** We'll see how we can configure SLAs for DAGs and tasks.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=43)** We'll then move on to data-aware scheduling, where we'll schedule a DAG based on whether some data is available.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=51)** Next, we'll see how we can use Airflow plugins to customize the features available in our Airflow user interface.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=59)** And finally, we'll see how we can scale Airflow using the CeleryExecutor for distributed task processing.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=66)** The very first topic that we'll touch upon will be role-based access control.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=71)** Roles allow you to control access to the Airflow webserver, and this is handled by the Flask AppBuilder.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=79)** The webserver UI is built using Flask.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=82)** Now, there are a number of different roles that are created by default, and it's good practice to not change the permissions associated with these roles.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=90)** You should create your own custom roles with custom permissions.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=94)** Now, every role has a set of permissions associated with that role, and permissions are just a combination of resources on which actions can be performed.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=105)** Resources here refer to any fundamental concept in Apache Airflow.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=109)** A DAG is a resource, a DAG run is a resource, an audit trail is a resource, a task is a resource, variables are resources, connections are resources, everything.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=119)** Actions define what kind of actions you can perform on these different resources.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=124)** Can you create them?
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=125)** Can you read them?
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=126)** Can you edit them?
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=127)** Can you delete them?
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=128)** There are a whole host of actions available.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=131)** And permissions are just resources plus actions.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=135)** When you set up Airflow, there are five roles that are created By default.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=139)** The Public role has no permissions associated with it.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=143)** If you're an unauthenticated user of Airflow, that is, you haven't logged in with a username and password, what you can view on the Airflow UI will depend on the permissions given to this Public role, and by default, that's no permissions.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=158)** The next role is the Viewer role, which has limited viewer permissions to view different details in the webserver UI.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=165)** You can view DAGs that are available, you can view the execution status of DAGs, but you cannot change anything.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=171)** You can't even unpause DAGs.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=173)** The next role that has a little more power than the Viewer role is the User role.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=178)** So the User role has all of the permissions of the Viewer role, plus some additional abilities.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=184)** It can perform some DAG-related tasks, such as unpausing DAGs.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=188)** The next most powerful role is the Op role, which has all of the permissions associated with the User role, and plus some more.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=196)** An Op role has the ability to modify a DAG's configuration.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=201)** And finally, we have the most powerful role of all, the Admin role, and the Admin, of course, has access to perform all tasks.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=210)** Next, we'll look at configuring SLAs and triggering actions on SLA misses.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=215)** Now, SLA management, or service-level agreement management, can be set to track the time by which a task or DAG should have completed execution successfully.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=227)** Airflow allows you to configure an alerting email that can be sent to a specific email address for tasks that have missed their SLAs.
>
> **[3:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=237)** And these missed SLAs are also available via the UI, so you can go to the UI and see all of the tasks that have had SLA misses.
>
> **[4:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=246)** After working with SLA management, we move on to data-aware scheduling with datasets.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=252)** So far, we've always been scheduling DAGs based on a time interval and frequency.
>
> **[4:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=258)** However, DAGs can also be scheduled based on a task updating a certain dataset.
>
> **[4:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=264)** A dataset is just a logical grouping of data.
>
> **[4:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=267)** It's typically a file that you're interested in.
>
> **[4:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=270)** Datasets can be updated or produced by upstream producer tasks, and once the datasets are available, that triggers the execution of downstream consumer tasks that then use this dataset for further processing.
>
> **[4:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=285)** After we complete data-aware scheduling, we'll work with plugins in Apache Airflow.
>
> **[4:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=291)** Airflow has a plugin manager that can integrate external features into the Airflow webserver.
>
> **[4:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=298)** Plugins allow you to integrate new features into your Airflow UI, and thus, plugins allow organizations to customize their Airflow installations with their own specific features to meet their specific needs.
>
> **[5:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=313)** Plugins can be built using the Flask AppBuilder.
>
> **[5:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=316)** You can use hooks, listeners, and a whole host of other Airflow components to build your plugins.
>
> **[5:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=322)** And finally, towards the end of this course, we'll see how we can scale our DAG executions using the CeleryExecutor.
>
> **[5:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=330)** Now, we know that Airflow executors are responsible for running tasks in our workflow, and so far, you've likely used the SequentialExecutor that runs tasks sequentially on your local machine and the LocalExecutor that runs tasks in parallel on your local machine.
>
> **[5:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=346)** But tasks can also be run in a distributed manner on Celery or on Kubernetes using remote executors.
>
> **[5:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=355)** Both the Celery and the Kubernetes executor allow tasks to run in parallel on a distributed framework.
>
> **[6:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/features-for-data-engineering-pipeline-management?u=76281980&t=361)** So you're not running tasks on the same machine where your Airflow installation is, but you're running these tasks on a remote distributed system.

> [!info]- Semantic Content
>
> **Env Vars:** dag (7), sla (4)
> **Code Keywords:** finally, (3), default, (2), public (2), interface (1), delete (1)
> **CLI Commands:** apache (5)
> **Definitions:** is a  (4)
> **Prerequisites:** configure (3), set up (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Best Practices:** good practice (1)


### 1. Working with Role-Based Access Control

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/prerequisites?u=76281980&t=1)** - [Instructor] Before we get to the content, let's discuss some of the pre-reqs that you need to have to make the most of your learning.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/prerequisites?u=76281980&t=7)** Now, this is not a beginner level course on Apache Airflow.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/prerequisites?u=76281980&t=11)** I assume that you're familiar and comfortable with Apache Airflow concepts and you've used Apache Airflow before to model your workflows.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/prerequisites?u=76281980&t=20)** If you feel that you lack the pre-reqs for this course, here are some other courses on LinkedIn Learning that you might want to study first.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/prerequisites?u=76281980&t=27)** Learning Apache Airflow is a beginner level course that does not assume any previous airflow knowledge, and Apache Airflow Essential Training builds on the concepts that you'll study in Learning Apache Airflow.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (6), make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Quick install overview
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=1)** - [Instructor] Since I assume that you're familiar with Airflow at this point in time and you watched the courses that are prerequisites to this course, you should have an Airflow installation up and running on your local machine, whether it's a Linux machine or a Mac machine.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=14)** I'll quickly show you what my local installation of Airflow looks like.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=18)** I'm running Airflow in a production setup.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=20)** That is I'm using PostgreSQL as my metadata database.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=25)** I'm running Airflow within a virtual environment.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=28)** Notice I have Python 3.7 as a virtual environment here.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=31)** This is the environment that I'm going to activate.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=34)** I already have Airflow installed within this virtual environment.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=39)** Notice my Python version is Python 3.7.16.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=44)** This is my virtual environment.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=45)** You can see that the prompt is different.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=48)** It says Python37.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=50)** Now I already have PostgreSQL installed and running on my machine.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=55)** You can see that if I open PostgreS I have PostgreSQL 15 running, and there are already some default databases set up there.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=64)** If you look to the top left you can see that PostgreS is running on port 5432.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=69)** This Airflow metadata DB is where I'll store my Airflow metadata.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=73)** Because I've already used Airflow, this DB has already been created, but if you're setting it up for the first time, this DB should be created automatically.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=81)** Here is my Airflow config file within my Airflow install folder.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=85)** The dags_folder is the dags subfolder within Airflow.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=89)** If you scroll down below, you'll see that I enabled parallelism while running on my local machine by using the local executor.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=96)** The local executor allows us to run multiple tasks in parallel, but they'll all be run on the local machine.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=104)** And if you scroll to the very bottom here in the configuration section for database I've set the SQL_alchemy connection to PostgreSQL local host 5432 Airflow metadata DB.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=118)** This is my production grade metadata database.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=122)** Just a heads up that if you want to use the local executor, you have to use PostgreSQL or some other production grade metadata database.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=130)** This is what allows multiple connections.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=132)** SQL Light does not allow for parallel execution of tasks.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=137)** Let's go back to the terminal window, and since I have Airflow installed, I'll run Airflow version, and you can see that I'm running version 2.5.3.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=146)** Any version two of Airflow beyond this one will also work for all of your demos.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=152)** Now I haven't set up an Airflow database yet, nor any users.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=156)** I'm going to run Airflow DB init to initialize the metadata database.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=162)** Once the initialization is complete, you can check to see whether you have any users configured for your Airflow.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=167)** It's possible you have an admin user configured.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=170)** Airflow users list is the command that you run, and you can see that I have absolutely no users.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=176)** I'm going to start from scratch.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=177)** We'll configure users and see what they have access to very, very soon.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=182)** In the meanwhile, let's bring up our Airflow scheduler, and once the scheduler is up and running, open up a new tab.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=188)** Make sure that you're still within the Python environment where you have Airflow installed and run the Airflow web server.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=197)** At this point, you should have the Airflow UI up and running.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=201)** So let's head over to local Host 8080 where it's available by default.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/quick-install-overview?u=76281980&t=205)** And there you can see this is where you'd log in with a username and password.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), setup (1), install (1), initialization (1), configure (1)
> **CLI Commands:** python (4), make (1)
> **Versions:** python 3 (2), 7.16 (1), version 2 (1), 5.3 (1)
> **Code Keywords:** let (3), default. (1)
> **Code Identifiers:** dags_folder (1)
> **Ports:** port 5432 (1)
> **Env Vars:** sql (1)
> **Cross-References:** go back to (1)

#### Creating an admin user and exploring roles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=1)** - [Instructor] The Airflow UI supports role-based access control, or RBAC, as it's popularly known as.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=6)** It's a method of managing and controlling access to resources within a system based on roles assigned to individual users.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=13)** Now, we have absolutely no users set up for our Airflow web server UI.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=19)** So, we are going to now create a new user.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=22)** You do this by running the Airflow users create command -h flag will give us help for this particular command.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=29)** You'll get a simple man page showing you all of the different flags that you can pass to this command.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=35)** If you note here, there is a dash R flag which you'll use to specify a role for the user.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=41)** Roles include admin, user, op, viewer, and public.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=45)** The admin role is the most powerful role of all.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=48)** As you would expect, an admin has full access and the public role is the role for unauthenticated users.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=57)** Now, the first role that we'll create is going to be an admin role with the username cloud dot user.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=63)** Notice the dash R flag that says admin here.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=67)** The dash P flag, I've used to specify the password.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=70)** The password is simply the term password.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=72)** I'm going to be using this very unsafe password for all of the users that I plan to create.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=78)** Not a great practice, but okay for the purposes of our demo.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=82)** Now the admin role is the only one that can create and manage other roles, so it makes sense for us to work in this role by default.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=89)** We are administrators if our Airflow installation.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=92)** after all.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=92)** I run Airflow users list and you can see that a single user with the role Admin has been created.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=99)** I'll now head back to the Airflow UI running on local host 80 80 and log in as the cloud dot user administrator.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=107)** Now, if I go through, I have full access to this UI and you're familiar with this role because we've been working with this role for all of the previous courses.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=116)** If you're curious to know what user you're logged in at, you can click on this little icon at the top right and here is the option that you can choose to log out of the current user as well.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=127)** You select log out, you'll go back to the login screen.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=130)** Let's now re-login as our Admin user.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=134)** Of all of the roles, the admin rule is the only one that can create and work with users, and it's only when you log in as an admin that you'll see this security tab here and options that lie within the security tab.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=148)** Let's go ahead and list all of the users that we currently have set up in our system.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=153)** And here you can see that there's exactly one, the Admin user that we just created.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=159)** If you click on this little magnifying glass, you'll be able to see additional details.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=163)** Observe that login count is two.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=164)** We logged in twice to this particular Admin account.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=169)** There's lots of information here, including the audit information for each user, useful for any administrator.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=176)** If you're logged in as an admin, you can make changes to user's records as well.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=180)** Here, I'm going to go ahead and edit the record for my current logged in user, the administrative user.
>
> **[3:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=186)** You can change first name, last name, username, whether the user is active, the email address associated with the user, and, if you notice, at the very bottom, there is no role associated with the user.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=198)** Now, as we've discussed earlier, Airflow offers five granular roles.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=202)** If you go to security and then list roles, you'll see all of the possible roles that you can assign to the different users of Airflow.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=211)** You can see the Admin role here at the very top and all of the permissions associated with the Admin role and you can see that there are a whole lot of permissions.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=221)** Notice there are other roles here.
>
> **[3:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=222)** There is the viewer role and then there is the user role, the op role, and the public role.
>
> **[3:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=228)** Note the public role.
>
> **[3:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=229)** The public role has no permissions assigned by default.
>
> **[3:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=233)** A user logged in using the public role has no permissions on any resource.
>
> **[3:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=238)** Now, I'm going to perform a little search here within my browser and search for on users, and you can see that the Admin role is the only one that can edit, create users for Airflow.
>
> **[4:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=251)** None of the other Airflow roles can work with users, so you have to be an administrator to be able to manage other users.
>
> **[4:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=259)** Let's go ahead and edit this record associated with the Admin role and you can see all of the permissions listed for the Admin right here on this page.
>
> **[4:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=268)** This is the page that you'd go to for a role in order to be able to tweak the permissions associated with a role.
>
> **[4:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=275)** The Admin role also allows you to view user level statistics, so you can click on users statistics and you'll be able to view the statistics across users.
>
> **[4:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=286)** Notice that cloud user is the only user we have at this point in time, and cloud user has logged in twice.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=292)** That is the login count that we are seeing here.
>
> **[4:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=296)** Well, that is enough of exploration to start off with.
>
> **[4:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=298)** Let's go ahead and log out this Admin role.
>
> **[5:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-an-admin-user-and-exploring-roles?u=76281980&t=300)** We create other roles and explore those roles next.

> [!info]- Semantic Content
>
> **Code Keywords:** public (6), let (4), default. (2), pass (1)
> **UI Navigation:** click on (3), go to (2)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Env Vars:** rbac (1)
> **Cross-References:** go back to (1)
> **Documentation:** man page (1)

#### Creating users with different roles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=1)** - [Instructor] I'll now create a few more users with different roles, and I'll do them on the terminal window.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=6)** I use Airflow users_create.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=8)** And I create a user with the username public.user.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=13)** Notice the -r flag, this is a user with the public role.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=17)** We've explicitly created a user with a public role, but the public role is what unauthenticated users to Airflow have.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=25)** So if you're not logged in as a user, what you see is based on the permissions assigned to the public role.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=30)** We know that by default, the public role has no permissions.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=34)** We saw this in Airflow.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=35)** I'm going to create yet another user called the viewer.user.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=39)** That is the username, viewer.user.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=41)** And the -r flag gives this user the Viewer role.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=45)** The viewer role permits basic view operations on the Airflow UI, you can view DAGs, you can use some statuses.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=53)** But you can't really perform any actions.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=55)** Now let's run Airflow users list.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=58)** And you can see that we have three users with three different roles, admin, public, and viewer.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=63)** I'll now create a few more users, but this time I'll do it using the UI.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=67)** I'm going to sign back in as my admin cloud.user.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=71)** Remember, I'm in the admin role.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=73)** That's why I can see the security tab.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=75)** And when I click on list users here, you'll be able to see all of the users that we've created so far.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=81)** Our three users, with three different roles.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=85)** As an admin, I can create a user right here from this UI.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=89)** I'm going to click on the plus button here, and this will bring up a dialogue that will allow me to fill in the details for the user.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=96)** I'm going to assign this user that I create the user role.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=99)** So first name is User, last name is also User.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=103)** The username is user.user.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=107)** Now of course, we want this user to be active, so go ahead and check the Active checkbox.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=112)** Fill in an email, any email that you want for this particular user.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=116)** It may not be invalid email.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=117)** Now the role that I assign, I type in U and you can see the User role pops up.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=122)** This is the role that I want the user to have.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=124)** Specify a password, and go ahead and hit Save.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=128)** And here you can see on this list, the user that we just created.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=132)** User.user.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=133)** The user with the user role is present here, last on this list.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=137)** Now I'm going to add one more user.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=139)** Click on the plus button once again.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=142)** Let's fill in the details for this user.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=144)** The first name is going to be Op, because we are going to assign this user the Op role.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=150)** The Op role, or the operations role, is the most powerful role behind the administrator role.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=156)** So it cannot perform admin tasks, but it can execute, craft, and perform a bunch of other configuration operations.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=163)** Make sure that the Op user is set to be Active.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=166)** You can specify any email that you want.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=168)** The role here, search for O, you should find Op here in the dropdown.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=173)** Go ahead and select that role.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=175)** And Save this user.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=177)** At this point, we have five different users with five different roles.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-users-with-different-roles?u=76281980&t=182)** And we can see what kind of access each of these users have.

> [!info]- Semantic Content
>
> **Code Keywords:** public (7), let (2), default, (1)
> **UI Navigation:** click on (3), checkbox (1), dropdown (1)
> **CLI Commands:** make (1), find (1)
> **Code Identifiers:** users_create (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Executing a simple branching DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=1)** - [Instructor] At this point, to understand what permissions each user has, it's important for us to create some DAGs that we can view and run.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=9)** Having DAGs to play with will give us a better idea of the different kind of operations that each user can perform.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=16)** Remember, every user has a different role.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=18)** Now, here within my dags subfolder I have a simple_branching_with_variable.py file that contains a very simple branching DAG.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=28)** Now, the DAG doesn't really do anything meaningful.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=30)** It just prints stuff out to screen.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=32)** Notice, I have a choose_branch Python function which accesses the variable choice and it chooses the branch based on the value of choice.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=42)** I have a branch Python function that takes in a task instance.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=45)** It pulls the value of choice from taskChoose.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=48)** If choice is C, it executes taskC.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=51)** If it's E, it'll execute taskE.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=53)** And then, here is my DAG.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=56)** The DAG ID is simple_branching_with_variable and you can see that it's made up of a number of operators.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=63)** taskA is a BashOperator.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=65)** taskChoose is a PythonOperator.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=67)** taskBranch is a BranchPythonOperator.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=70)** taskC is a PythonOperator.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=71)** taskD is a bashOperator.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=74)** And then, the last task, taskE is an empty operator, an operator that does nothing.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=80)** And I've specified the dependencies for this DAG on lines 72 and 74.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=85)** Let's run this DAG through once using the Airflow UI.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=87)** You can see I have two DAGs here.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=89)** We'll look at the simple_sql_pipeline one in just a bit.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=92)** Meanwhile, go to Admin and Variables and we'll need to configure a value for the choice variable for our simple_branching_with_variable.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=101)** Click on plus here and specify a key and value for this variable.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=106)** Key is choice and the value is the task that we want to execute.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=111)** I'll set the value to C.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=112)** taskC will be chosen in the branch.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=115)** Now that we've created this variable, we can go ahead and run our branching pipeline.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=120)** Head back to DAGs.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=122)** I'm just going to click through and run this DAG.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=124)** You can take a look at all of the tasks that are available here.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=127)** You can see all of the six tasks that make up this DAG.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=131)** Now, you can view the graph view so that you can see what the dependencies between tasks look like.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=137)** And here, you can see our simple_branching_with_variable DAG.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=142)** DAGs are always paused by default, so I'm going to go ahead and unpause this DAG and allow the workflow to run through once.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-branching-dag?u=76281980&t=150)** I want to have one execution of this DAG so that we can see what the different users with different roles can actually view in the Airflow UI.

> [!info]- Semantic Content
>
> **Code Identifiers:** simple_branching_with_variable (4), taskc (3), taskchoose (2), taske (2), choose_branch (1)
> **Env Vars:** dag (11)
> **Definitions:** is a  (5), is an  (1)
> **Code Keywords:** function (2), let (1), default, (1)
> **CLI Commands:** python (2), make (1)
> **UI Navigation:** go to (1), click on (1)
> **File Paths:** simple_branching_with_variable.py (1)
> **Prerequisites:** configure (1)

#### Executing a simple SQL DAG
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=1)** - [Instructor] Before we move on, let's look at the second DAG that I have set up.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=4)** This is a simple SQL pipeline that creates a table in the SQLite database and inserts some data into that table and performs a few operations.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=13)** Here is a definition of my DAG, the simple_sql_pipeline.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=17)** I have a create_table SqliteOperator, which creates the user's table if it doesn't already exist.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=24)** Notice that this SqliteOperator uses the sqlite_conn_id, my_sqlite_conn.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=31)** All of our operators will use the same connection id.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=34)** Then if you scroll down, you'll see I have an insert_values_1 SqliteOperator which inserts some user data into the SQLite table.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=44)** I have an insert_values_2 SqliteOperator which inserts some more data, four more records into the SQLite table.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=53)** Scrolling down further, I have a SQLite operator which simply performs a SELECT * FROM users.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=60)** In order to view this result, I have set do_xcom_push to True.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=65)** This means this result will be available in xcom and we should be able to see it in the Airflow UI.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=71)** Having inserted the data and displayed it, I have a simple drop_table task which calls DROP TABLE users.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=79)** You can see the DAG dependencies on line 82.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=81)** I create the table, insert values into the table, display the result, and then finally, drop the table.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=88)** A very simple DAG using operators you're familiar with.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=92)** Now, my SQLite database is going to be within a subfolder called database, so I'm just going to create this subfolder within my Airflow install directory.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=102)** The subfolder has been created.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=104)** When I head over to the Airflow UI, I'm going to configure a new SQLite connection that points to a SQLite database within this subfolder.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=113)** Here I am within the Admin Connections page and I'll click on the plus button here.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=119)** That will allow me to create a new connection, allowing my DAG to connect to SQLite Remember the name of the connection? my_sqlite_conn.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=128)** This is what we had specified in the operators of our DAG, so make sure the connection ID is correct.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=133)** Next, choose the type of connection.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=135)** This is a SQLite connection.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=137)** Here is where you'll select the right option from the dropdown.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=140)** You'll need to specify a host for the connection which is going to be my_sqlite.db under the database subfolder in my Airflow install directory.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=150)** That's the only configuration that SQLite needs.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=153)** Go ahead and test this connection.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=155)** You can see that the connection was successfully tested which means we can save this connection.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=161)** We are now ready to execute our simple_sql_pipeline.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=166)** Head back to DAGs.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=167)** You can see the pipeline is listed right there.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=170)** Click through to this DAG.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=172)** This will take you to the main grid view so you can see all of the tasks that will be executed.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=177)** The graph view is more interesting.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=178)** This will show us the dependencies in our DAG.
>
> **[3:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=181)** Notice that the two insert values can be performed in parallel.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=185)** Let's now unpause and execute this DAG so that it runs through once.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=190)** Make sure you hit unpause.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=192)** I'm also going to hit Auto-refresh enabled so that I can watch my DAG run through.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=198)** This is complete.
>
> **[3:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=199)** Let's confirm that it did complete successfully.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=201)** Click on display_result.
>
> **[3:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=204)** If you remember, display_result performs a SELECT * FROM users.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=208)** If you go to XCom, you should find all of the users that we had inserted into the table listed here.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=215)** You can see them right here.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=216)** We have two DAGs now, both of which we've executed successfully.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-a-simple-sql-dag?u=76281980&t=220)** Let's now log in with different user IDs and see what permissions each of these users have.

> [!info]- Semantic Content
>
> **Env Vars:** dag (10), select (2), sql (1), drop (1), table (1)
> **Code Identifiers:** simple_sql_pipeline (2), my_sqlite_conn (2), display_result (2), create_table (1), sqlite_conn_id (1)
> **UI Navigation:** click on (2), scroll down (1), select the (1), dropdown (1), go to (1)
> **Code Keywords:** let (4), finally, (1)
> **Prerequisites:** install (2), set up (1), configure (1), you'll need (1)
> **CLI Commands:** make (2), find (1)
> **SQL:** select (2), drop table (1)
> **Definitions:** is a  (3)

#### The public and viewer roles
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=1)** - [Instructor] Here I am in the AirFlow login page.
>
> **[0:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=2)** I've logged out as the admin user, and I'm going to log in as the user with the least privileges.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=9)** That is the user with the public role.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=12)** The public role has no permissions, and you can do nothing in the AirFlow UI if you're assigned this role.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=19)** That is by default, this is the message that you'll see when you log in using the public role.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=26)** There's nothing that we can do here.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=28)** All we can do is log out and log in as a different role and hope for the best.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=34)** Well, the public role was kind of disappointing.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=36)** Let's log in as a viewer user.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=39)** Remember, this is the user that has been assigned the viewer role.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=43)** You can of course read up about each of these roles in detail, but in short a viewer has only read only access to the AirFlow web UI and can see the status of the different DAGs that have been executed but cannot launch or modify these DAGs.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=60)** As you click around, you'll see many of the controls available in the AirFlow UI are disabled.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=65)** You can see the DAGs that are available, and you can see that these DAGs have been successfully executed.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=71)** You can browse and look at DAG runs, jobs, audit logs and a bunch of details, and of course you have access to the AirFlow docs.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=79)** Notice that the menu here is limited.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=83)** You don't see all the options that the admin does.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=86)** You can't create connections, you can't work with variables you can't deal with security issues.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=91)** You can't create users, none of that.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=94)** If you look at the DAG runs, you'll see the executions of the two DAGs that we performed as an admin so you can see the status of each DAG run.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=103)** You get a bunch of information, but if you try to run these DAGs, well, you won't be able to.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=109)** Let's take a look at all of the individual jobs that were executed in order to actually run the DAGs.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=115)** You can see the individual jobs for each of the tasks within the two DAGs that we have.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=121)** If you go back to the DAGs view, you'll see that there are certain operations that you just can't perform as a viewer.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=127)** For example, all of our DAGs have been unposted.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=130)** If I try to pause these DAGs or change their status I just can't do it as a viewer, I can only view information.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=138)** I can't actually affect any changes via the AirFlow UI.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=142)** I can click through and view the details of individual DAGs if I want to.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=146)** I can see the DAG run.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=147)** I can see the individual tasks that succeeded, task that skipped in pink.
>
> **[2:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=152)** I can also look at the graph view and see all of the details.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=156)** Here is the DAG dependencies graph.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=158)** I can definitely view the details.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=160)** I can also take a look at the code that was used to construct each DAG.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=165)** I have access to the code tab as well.
>
> **[2:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=169)** Remember, all of this is view only access.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=172)** Not only do I have access to the status of the DAG runs, you'll see that I can access the logs and XCom values for the individual tasks as well.
>
> **[3:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=181)** Let's say you click on the task branch.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=184)** You'll see that you have access to the logs tab and here you can view the logs for this particular task and all tasks in the DAGs that you view.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=193)** This is the default set of permissions that's available to the viewer role.
>
> **[3:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=199)** If you want to view the XCom details for a task well that's also accessible, so as a viewer you have read only access to the AirFlow UI and all of the DAGs that have been executed.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=211)** You can view the status, view information but you can't really perform any operations.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-public-and-viewer-roles?u=76281980&t=216)** Now that we understand this, let's log out.

> [!info]- Semantic Content
>
> **Code Keywords:** public (4), let (4), default, (1), this, (1)
> **Env Vars:** dag (7)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### The user role
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=0)** - [Instructor] Let's log in as a user with a different role.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=3)** I log in as the user.user which has the user role assigned to it.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=8)** Now the user role has all of the permissions available to the viewer role.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=13)** So for example, if you look at the tabs on top, DAGs, datasets, browse, and docs these are the same tabs that were available to the viewer.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=21)** Also, the admin tab, the security tab is not available to the user, so you can't create connections or variables.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=28)** You'll find that many of the same details about DAGs and DAG runs are viewable by the user role as well.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=36)** So let's take a look at DAG runs and you can see the two executions of our DAG that we performed as an admin.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=43)** You can use the same dropdown for browse to take a look at jobs, audit logs, and other details.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=50)** All of these are permissions available to the viewer role.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=53)** They're also available to the user role.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=55)** The user role has a super set of the permissions that are available to the viewer role.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=61)** Now you'll find that the user role can perform some operations in the UI.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=66)** For example, if the user wanted to unpause or pause a dag, that is now possible.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=71)** This was not possible with the viewer role.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=74)** The user role can perform a minimal set of operations.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=78)** A user with the user role can also view details of DAGs that were executed with your current setup of Airflow.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=85)** Here are all of the details of this particular DAG.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=87)** You can see that the user has access to this information.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=92)** You can head over to the graph view you can look at the code view.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=95)** All of the information should be available to the user.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=99)** Now, I did say that the user can perform some operations in the UI.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=103)** The user can actually execute pipelines.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=106)** I'm going to trigger this pipeline so that it's re-executed.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=110)** Click on trigger DAG.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=111)** This is now available to the user role and you can see that the pipeline was re-executed the user role also has the ability to update the status of a DAG.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=121)** So let's head over to the grid view and here you'll find options to mark the status of a particular DAG run you'll need to select a particular DAG run first.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=132)** You can see the options here, mark failed or mark success.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=135)** Let's go ahead and click on mark Success and DAG this execution as a success.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=142)** Well, you've seen that with a user role you have some ability to perform certain operations in the Airflow UI.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-user-role?u=76281980&t=149)** Let's log out and take a look at the next role, the op role.

> [!info]- Semantic Content
>
> **Env Vars:** dag (9)
> **Code Keywords:** let (5), super (1)
> **CLI Commands:** find (3)
> **UI Navigation:** click on (2), dropdown (1)
> **Analogies:** for example (2)
> **Prerequisites:** setup (1), you'll need (1)
> **Speakers:** - [instructor] (1)

#### The op role
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=1)** - [Instructor] Let's log in as a user that has been assigned the OP role in Airflow.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=5)** Now the OP role is the most powerful role just below the admin.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=9)** So all of the permissions associated with the viewer role and the user role are available with the OP role plus some more.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=17)** Notice that the admin tab is now available here in the OP role.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=22)** The user with the OP role can perform administrative tasks such as creating variables, configuring connections changing other configurations, and so on.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=31)** Let's select variables and let's update the variable that we had created previously.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=36)** Here is the choice variable that has been set to a value of C indicating that taskC should be executed.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=42)** I'm going to edit this record and update the choice variable to point to taskE.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=48)** So in the branch, taskE is the branch that will be selected and executed.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=53)** Let's go back to our DAGs.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=55)** Notice that we can pause and unpause the DAG as we want to.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=58)** Let's click through to the simple branching with variable.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=62)** You can trigger DAGs, mark their statuses, everything.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=65)** Let's head over to the graph view.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=67)** We've seen that this DAG has had one run where taskC was executed, taskC was skipped.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=73)** Let's trigger this DAG and this DAG will be executed and taskE will be executed this time around.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=81)** Notice that taskE is green and C and D have been skipped.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=85)** The OP role has almost all of the permissions of the admin except for the fact that the OP-role user cannot create new users or assign permissions to users.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/the-op-role?u=76281980&t=96)** Let's log out and I'm now going to log back in as an admin.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Code Identifiers:** taske (4), taskc (3)
> **Env Vars:** dag (4)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Actions, resources, and permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=1)** - [Instructor] I'm now going to log back in as cloud.user.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=3)** Remember, this is the user with the admin role.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=6)** Let's sign in and you'll see that the admin is all powerful.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=10)** The security tab that was not available for any of the other users is now available to the admin.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=16)** Now, here within the security tab, let's understand actions, resources, and permissions and how they come together to give abilities to different roles.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=26)** Let's look at the actions first.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=27)** Now, all of the actions that can be performed on the different resources in Airflow are listed here.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=34)** Actions such as can_read, can_clear, can_delete, can_create, menu_access, and so on.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=40)** These actions are usually combined with resources to create permissions.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=46)** Let's head over to resources and see all of the possible resources available in Airflow.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=52)** Now, these resources include views in the Airflow UI.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=56)** They also include tasks such as performing DAG runs, viewing jobs, executing, DAGs, pausing/unpausing an individual DAG, and a whole bunch of resources.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=68)** You can see all of the resources listed here and if you go to the very end, let's go to the last and third page, you'll find that for every DAG that's available in Airflow, there is a resource associated with that DAG.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=82)** Here, you can see there are two resources: one for the DAG:simple_branching_with_variable and another for the simple_sql_pipeline.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=89)** Now, actions are assigned to resources and that give you permissions.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=95)** So a permission is just an action on a resource.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=99)** If you look on this page, you'll see rows that correspond to permissions and you can see every permission has two columns, an action column and a resource column.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=109)** I'll scroll down here and pick up permission at random to discuss.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=112)** For example, on top, you can see the can_edit on the resource rules.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=117)** Any user that's assigned this permission can perform edit operations on the different rules available.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=125)** By default, only the admin user has this permission.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=129)** Now, you can click through on different pages and you'll find all of the possible permissions that you can group into roles and then assign to users who have access to your Airflow system.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/actions-resources-and-permissions?u=76281980&t=142)** If you go to the very last page, you'll see permissions on the resources that we have created as well are DAGs, can_read on the simple branching with variable, can_delete on simple SQL pipeline, and so on.

> [!info]- Semantic Content
>
> **Code Identifiers:** can_read (2), can_delete (2), can_clear (1), can_create (1), menu_access (1)
> **Code Keywords:** let (5), default, (1)
> **Env Vars:** dag (5), sql (1)
> **UI Navigation:** go to (3), scroll down (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Adding permissions to the public role
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=1)** - [Instructor] We saw this early on, but let's look at it again.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=3)** In the Security tab, if you click on List Roles, you'll be able to see all of the roles that are currently available in your Airflow installations.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=13)** We know that there are five roles that are created by default; the Admin, most powerful then Viewer, User, Op, and then the Public role.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=21)** Notice that the Public role has no permissions at all which is why we couldn't do anything.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=26)** If you look at the Public role, there are no permissions.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=29)** If you list users, you'll be able to see that we have a single user here with this Public role.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=35)** As an administrator, you can configure the permissions that a particular role has.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=40)** Now, it's good practice to not change the permissions of these default roles, but I'll show you how this can be done.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=46)** I've gone over to List Roles, and here at the very bottom you can see the Public role is listed.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=52)** I'm going to click on the option to edit the record for the Public role.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=57)** If you head over to the Detail tab here you'll find that you can set a number of permissions for this Public role.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=65)** And you can start typing and here in this dropdown you'll get a list of all possible permissions and you can select and choose what permissions this particular user should have.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=76)** So I'm going to select a few permissions now, I want them to be able to read on DAG runs, I want them to be able to read on jobs, I want them to be able to read on task instances, I want them to be able to read on DAGs, DAG dependencies, task logs, and on the website.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=93)** Here you can take a quick look at all of the permissions that I've assigned to the Public role.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=97)** Now, if you remember, this is the role for unauthenticated users.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=102)** So I've assigned these permissions to the Public role, and if we scroll down to the bottom, you'll see that the Public role now has these permissions.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=110)** Let's log out as an admin so that we can log in as a user with a Public role.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=115)** Now, as soon as I log out, a surprise awaits, well, it's not really a surprise because I had mentioned this earlier.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=121)** Observe that we are not logged in, but we can still see all of this information, you can see the Log In option off to the top right.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=130)** Now the reason we can view all of this is because unauthenticated users by default use the Public role.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=137)** We've assigned a bunch of read permissions to the Public role, and those are the permissions that are being used to show us this information.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=145)** You can click through to the DAGs, you'll be able to view the status of the tasks in the DAGs.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=150)** All of these are permissions that we added to the Public role.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=154)** You can explore for yourself and see what operations you can perform and what you can view.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=159)** I'm going to log in and you'll find that if I log in as public.user with the Public role, I'll be able to see the same information I could see even when I was unauthenticated.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=170)** The Public role is the role for unauthenticated users, so be careful about what permissions you give the Public role.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=178)** Our permissions also allowed the Public role to view the graph information, but if you click on Code, you'll be presented with an Access Denied error.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=188)** We did not give the Public role access to view the code for pipelines.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=193)** Let's click through to the simple_sql_pipeline once again.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=196)** You can try other details here and see what's available and what's not, and match them up with the permissions that we had set on the Public role.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-permissions-to-the-public-role?u=76281980&t=205)** Let's log out and see how we can create a custom role and associate that with a user.

> [!info]- Semantic Content
>
> **Code Keywords:** public (21), let (4), default; (1)
> **UI Navigation:** click on (3), dropdown (1), scroll down (1)
> **CLI Commands:** find (2)
> **Env Vars:** dag (2)
> **Code Identifiers:** simple_sql_pipeline (1)
> **Best Practices:** good practice (1)
> **Warnings:** be careful (1)
> **Prerequisites:** configure (1)

#### Creating and configuring a custom role
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=1)** - [Instructor] In order to create custom roles, we'll need to log in as an admin, and that is our cloud user account.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=7)** Go ahead and use that to sign in.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=9)** Now you'll get the security tab because you're an admin.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=13)** This is where I'm going to head over to list roles.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=16)** Now here we already know the five roles that are created by default.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=20)** You can use the plus button to create your own custom role.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=25)** I'm going to call this role Loony, and I'm going to associate a bunch of permissions for this role.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=31)** Can read on DAG Runs, can read on jobs.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=34)** Since I'm going to be associating a number of different permissions, I'm going to speed this up.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=39)** A complete list of all of the permissions that I've assigned to this role will be available with the resources or the exercise files for this course.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=49)** I'm also going to give this particular role some special permissions on one of the dags.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=55)** This particular role can delete on simple SQL Pipeline and can perform a number of other operations.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=62)** Can read on simple SQL Pipeline, can edit on simple SQL Pipeline.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=68)** You can see at the bottom that you've granted special permissions on the Simple SQL Pipeline: can delete, can read, and can edit.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=75)** Go ahead and save these permissions for the Loony role.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=80)** Now that we have a role, we can now create a user and associate the Loony role with this user.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=87)** Observe the Loony role here at the very bottom.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=90)** Next, let's go to list users.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=93)** We've already created five different users with the five different default roles.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=98)** I'm now going to use the plus button here to create a new user and assign that user our Custom Loony Role.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=105)** Specify the first name and last name of your choice.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=108)** First name Loony, last name User.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=110)** Username is Loony.User.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=113)** I want this user to be active.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=115)** You can specify any kind of email address.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=118)** Remember, the email address doesn't really have to exist.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=121)** For the role, just start typing in the text box, and the options will be available.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=126)** The custom Loony Role is also here in the dropdown.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=129)** Go ahead and select that role and specify a password for this new user that you've created.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=134)** And click on the save button.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=137)** Our Loony User with the Loony role has successfully been created.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=142)** We are now ready to log out as the administrator and log in with this new user.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=149)** Go ahead and click on the login button and specify the Loony user as a username and the password that we had configured.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=157)** And I'm going to sign in, Now immediately you'll notice something.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=161)** You can see that the permissions for this user are different for the two different tags.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=166)** For example, this user can unpause and pause the simple SQL pipeline, but can't do the same thing for the simple branching with variable.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=175)** That's because of the special permissions that we give this user for the simple SQL pipeline but not for the simple branching with variable.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=184)** I suggest that you explore these two dags on your own and see what is possible.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/creating-and-configuring-a-custom-role?u=76281980&t=190)** You should be able to do a lot more with the simple SQL pipeline as compared with the simple branching with variable.

> [!info]- Semantic Content
>
> **Env Vars:** sql (7), dag (1)
> **Code Keywords:** delete (2), default. (1), let (1)
> **UI Navigation:** click on (2), go to (1), dropdown (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. Managing SLAs

#### Configuring emails for SLA management
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=1)** - [Instructor] Airflow allows you to configure and enforce service level agreements.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=5)** Service level agreements, or SLAs, are the time by which a particular task in a DAG or the entire DAG should have succeeded.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=13)** And this SLA can be configured and enforced at the task level, or at the DAG level.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=20)** If one or many instances have not succeeded by the time that you have specified, then an alert email can be sent detailing the list of tasks that missed their SLA.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=31)** You can also view the SLA misses in the Airflow UI.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=35)** Now, before we actually go into configure these SLAs, let's first set up our email from which we are going to set alerting emails.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=44)** We need to do a little bit of configuration.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=46)** I'm logged into my Gmail account here.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=49)** I'm going to open up a new tab and go to myaccount.[google.com/usecurity](https://google.com/usecurity).
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=56)** I'm logged in as Loonytestuser.001 and I want to be able to send emails from this Gmail address when an SLA Miss occurs.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=68)** In order to be able to do that, there's a little bit of configuration that you have to do.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=71)** The first thing, ensure that your Gmail account has two-step verification turned on.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=76)** In order to be able to send emails from this account, we need to create an app password for Airflow to use.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=83)** Head over to myaccount.[google.com/apppasswords](https://google.com/apppasswords).
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=88)** This will take you to a page where you can generate app passwords that allows you to sign into your Google account from apps on devices that don't support two-step verification.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=100)** If you're on a corporate account, this page may not be accessible to you.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=104)** My recommendation would be to send emails from a regular Gmail account where you have full control.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=110)** First, let's select the app that you need to use.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=113)** Now the app that you want to use is email, so select Mail here.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=117)** Next, you'll need to select the device that you are running on.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=121)** Now since I'm running on a Mac OS machine, I'm selecting Mac as the device.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=126)** You can specify some other device here or generate your own custom one.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=129)** Click on this Generate button, and a 16 digit password will be displayed to you.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=134)** Make sure you copy this password over and store it in a safe place, we are going to be using it shortly.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=140)** In order to configure Airflow to send emails you'll need to head over to the airflow.cfg file.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=145)** This is the configuration file for Airflow.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=147)** Now search for the SMTP section.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=150)** And here you'll find a number of properties.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=153)** These are the properties that we are about to configure.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=155)** I'm going to paste in the new values of these properties.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=159)** Now Airflow will send emails from a Gmail address, so the host is smtp.[gmail.com](https://gmail.com).
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=166)** The SMTP user is loony.test.001@[gmail.com](https://gmail.com).
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=170)** That's my email address, make sure you replace this with your email address.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=174)** The SMTP password is the 16 digit password that we just generated from our account.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=179)** SMTP mail from, our email address code 587, timeout and retry limit.
>
> **[3:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=186)** Now, search for the configuration setting.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=188)** Check SLAs, and make sure that this is set to true.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=191)** This setting needs to be true for SLAs to be enforced on your DAGs.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=195)** Since we've updated the config file, we'll need to rerun the airflow_scheduler, as well as the web server.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=202)** So I'll run the airflow scheduler first.
>
> **[3:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=204)** And once this is up and running, I'll switch over to another tab and run the airflow_webserver.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-emails-for-sla-management?u=76281980&t=211)** Our airflow is now set up to be able to send emails on SLA Misses.

> [!info]- Semantic Content
>
> **Env Vars:** sla (5), smtp (4), dag (3)
> **Prerequisites:** configure (4), set up (2), you'll need (2)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (2), from, (1), switch (1)
> **URLs:** [google.com](https://google.com) (2), [gmail.com](https://gmail.com) (2)
> **UI Navigation:** go to (1), select the (1), click on (1)
> **Code Identifiers:** airflow_scheduler (1), airflow_webserver (1)
> **File Paths:** airflow.cfg (1)

#### Configuring task-level SLAs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=1)** - [Instructor] With basic setup done, we are now ready to configure an SLA for a particular task in our DAG.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=6)** Now, SLAs for tasks in Airflow is counterintuitive.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=10)** You would expect by setting an SLA for a task you're defining the expected duration for that task.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=15)** But that's not how Airflow works.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=18)** What you are doing is when you set an SLA for a task, you are saying that by the time this time period has elapsed, this task should be complete.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=27)** That is starting from the time the DAG was executed, 'till the time this particular task is completed, the SLA should have been satisfied.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=38)** So it's not for an individual task.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=39)** Another thing to note is that SLAs only work with scheduled DAG runs.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=45)** So if you trigger a DAG run, SLAs will not apply to that particular run.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=52)** Let's see how we can apply an SLA to a particular task.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=55)** Here are the default arguments for our DAG.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=58)** The start date for the DAG is a day ago.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=60)** The email to which the SLA Miss will be sent is cloud.user@[loonycorn.com](https://loonycorn.com).
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=67)** So the email message will come from the email that we had configured in our Airflow config file, loony_test.001, and will be sent to cloud.user@[loonycorn.com](https://loonycorn.com).
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=80)** We won't email on failure or retry.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=82)** Retry is one and the retry delay is five minutes.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=85)** You can also configure an action to be performed in the event of an SLA Miss.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=90)** That is this Python callable, sla_missed_action.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=94)** All I do is log some stuff out to the Airflow logs.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=98)** You can perform some other action here if you want.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=100)** Now this tag is the same simple branching pipeline that we saw earlier.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=105)** I choose a branch by returning either true or false.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=108)** And in the branch operator I'm always choosing task C.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=112)** So it's kind of a fake branching pipeline right now, because we always choose task C.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=118)** And the reason I do this, that in task C, I've defined a sleep function, where I sleep for 20 seconds.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=124)** This will cause the SLA Miss.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=126)** I want task C to be executed so that the SLA Miss occurs.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=130)** Here is the DAG that I have defined using the with command.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=135)** Notice that this DAG has a scheduled interval where this DAG will be executed every minute.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=141)** In order to perform an action in the event of an SLA Miss, I set the SLA Miss callback on line 65.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=148)** Where is our task level SLA configured?
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=151)** Well, you need to scroll down and take a look at task C on lines 83 to 87.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=156)** Notice on line 86, I have configured the SLA attribute to a time delta of five seconds.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=163)** If this task is not completed within five seconds of the DAG's start, that is considered an SLA Miss.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=171)** Now you know that's not going to happen because Task C itself sleeps for 20 seconds.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-task-level-slas?u=76281980&t=175)** Because of that 20 second sleep, we know that we are definitely going to get an SLA Miss.

> [!info]- Semantic Content
>
> **Env Vars:** sla (15), dag (10)
> **Code Keywords:** let (1), this, (1), function (1)
> **Prerequisites:** configure (2), setup (1)
> **Code Identifiers:** loony_test (1), sla_missed_action (1)
> **URLs:** [loonycorn.com](https://loonycorn.com) (2)
> **CLI Commands:** python (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### Triggering and viewing SLA misses
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=1)** - [Instructor] I'll now log into the Airflow UI, to run this DAG and trigger an SLA Miss.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=5)** Make sure you sign in as the admin user, so you have the ability to perform all of the possible operations.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=11)** Here is our DAG simple branching with SLA.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=14)** Let's click through and take a look here at all of the tasks here in this DAG.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=18)** Now remember that this DAG is scheduled to run for every minute.
>
> **[0:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=22)** I'm going to unpause this DAG and wait for a few minutes, so that the DAG is executed several times.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=29)** I've clearly sped up all the operations here, but this DAG basically is catching up with all of the runs, starting from the previous day.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=38)** I'll now let this run through.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=40)** SLA misses have been triggered.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=42)** I'm going to select task C here, because that is the task that will run for 20 seconds.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=48)** Click on the log files for C.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=51)** Now if you scroll down you'll see that task C was executed successfully.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=55)** So there was no problem with the execution, but it took about 20 seconds to run.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=60)** It's hard to see this on the log screen, but if you look at the start date and the end date for this task, you can see that there is a difference of 20 seconds.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=68)** Look at only the last two digits.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=70)** Now as we were viewing the logs, Airflow was still catching up, with all of the scheduled runs of this particular DAG.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=78)** Now head over to Browse, and here you'll find an option for SLA Misses.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=83)** Let's see if any sla misses have been triggered.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=86)** And once you go there, you can see that simple branching with sla Task C caused an SLA Miss for every run of this DAG.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=95)** If this is an SLA Miss, we should have received an email alert.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=99)** Now I've logged into cloud.user@[loonycon.com](https://loonycon.com).
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=103)** And you can see the first email here, this is the email from looney_test.001.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=109)** SLA Miss on DAG, simple_branching_with_sla.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=113)** Let's click through, and you'll see in the details of the email that task C was the one that triggered this SLA Miss.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=120)** And, even as I'm here on this email page the DAG is still running, and generating email alerts for this SLA Miss.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=128)** Now if you remember, we had configured an SLA Missed callback, to write out some details to Logs.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=133)** So click on Logs and click through to the scheduler's logs.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=138)** That's where we'll find our log messages.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=141)** So click through to the current date, and here I open up the log for simple branching with task sla.py.log.
>
> **[2:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=149)** And here I'm going to search for the word warning.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=154)** And you can see that there are a bunch of places where this warning message has been written out to the logs.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=160)** This is because of our Python code, which wrote this out to the logs in case of an SLA Miss.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=167)** Well, at this point, you know how to configure task level SLAs.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=170)** Let's head back to our DAGs.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=173)** And pause this simple branching with SLA DAG.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/triggering-and-viewing-sla-misses?u=76281980&t=176)** Otherwise, it'll keep running and generating emails.

> [!info]- Semantic Content
>
> **Env Vars:** dag (12), sla (12)
> **Code Keywords:** let (5)
> **CLI Commands:** find (2), make (1), python (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Code Identifiers:** looney_test (1), simple_branching_with_sla (1)
> **Definitions:** is a  (1), is an  (1)
> **Warnings:** warning (2)
> **File Paths:** sla.py (1)

#### Configuring DAG-level SLAs
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=1)** - [Instructor] I've updated the code for our branching pipeline here to configure an SLA for the DAG as a whole.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=7)** This means that from the start of the DAG run till the end of its execution, the entire DAG should be executed within the SLA we have defined as a time delta.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=18)** Once again, remember that SLAs only work for scheduled DAGs, so if your DAG has no schedule, SLAs will not work.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=26)** If your DAG has a schedule and you trigger it manually, again, your SLAs will not be enforced.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=33)** This has to do with how Airflow treats your scheduled DAG runs.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=37)** Airflow only considers the schedule execution time of each DAG run and the interval between runs.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=43)** If your DAG does not have an interval between runs, meaning there is no schedule, Airflow fails to calculate the execution dates and thus, cannot compute SLAs.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=52)** Now, notice the default_args for my DAG here.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=56)** On line 24, I have the SLA for the DAG, time delta of five seconds.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=61)** I want this entire DAG to be executed within five seconds.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=64)** The rest of the arguments are the same.
>
> **[1:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=66)** Email will be sent to cloud.user@[loonycorn.com](https://loonycorn.com) and then, we don't email on failure or retry.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=72)** Most of the constructs here are ones that we've seen before.
>
> **[1:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=75)** I have the sla_missed_action action Python function, so in case of SLA misses, we'll get these messages in the logs.
>
> **[1:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=82)** I still have my branching pipeline but I've randomized things a bit.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=86)** Notice that the branch operator will sleep for three seconds, so there'll be a three-second delay by the time we get to the branch operator.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=95)** I've removed the sleep on task_c.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=97)** Here is my DAG defined.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=100)** Notice the sla_miss_callback is set to sla_missed_action, that is a Python callable.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=105)** The SLA configuration on the DAG is set in the default_args, which I've set on line 59.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=111)** If you look at all of the tasks, that is, the operators in our DAG, notice that I haven't configured the SLA parameter for any of these operators.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=121)** The BashOperator has a sleep for 20 seconds, that's another thing to note.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=126)** So if you execute taskD, there'll be a definite SLA miss.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=130)** Let's switch over to the simple_branching_with_dag_sla.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=134)** I'm going to click through and you can see all of the tasks available here.
>
> **[2:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=138)** Let's unpause this DAG.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=140)** Remember, this DAG is scheduled to run every minute and it'll catch up with all of the previously-scheduled runs.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=147)** Some of these scheduled runs would definitely have triggered SLA misses, and we can view these if you head over to Browse and SLA Misses.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=157)** When you look at the SLA misses for our new pipeline, simple_branching_with_dag_sla, you can see a number of different tasks cause the SLA to be missed.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=166)** It's taskA, sometimes it's the branching operator, sometimes it's taskD.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=171)** It can be any of the tasks that cause our SLA miss to be triggered.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=175)** We have set our SLA to be very, very tight at five seconds for the entire DAG.
>
> **[3:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=181)** Now, let's head over to our email and there is our second email from looney_test_001, simple_branching_with_dag_sla was a miss.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=189)** And if you look through the details of these messages, you'll find the information that there have been different tasks that caused the SLA to be missed.
>
> **[3:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=199)** It's not just one task that has this problem.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-level-slas?u=76281980&t=202)** Before we move on to the next part of this demo, I'm just going to pause this DAG so that it doesn't keep executing and triggering SLA misses and generating emails.

> [!info]- Semantic Content
>
> **Env Vars:** dag (18), sla (15)
> **Code Identifiers:** simple_branching_with_dag_sla (3), default_args (2), sla_missed_action (2), taskd (2), sla_miss_callback (1)
> **Code Keywords:** let (3), function (1), switch (1)
> **CLI Commands:** python (2), find (1)
> **Definitions:** means that (1), defined as (1), is a  (1)
> **URLs:** [loonycorn.com](https://loonycorn.com) (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Configuring DAG failed action
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=1)** - [Instructor] Notice that you can configure an SLA and the SLA missed emails are sent automatically.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=6)** You can also configure email alerts in case of task failure and that's what we'll see here in this demo.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=13)** We'll use the email operator that Airflow provides to send a custom email when a particular task fails.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=21)** You can see the import I have on line 15 for the email operator.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=26)** That's what we'll be using to send an email.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=28)** Here are the default arguments that are configured for our DAG.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=32)** Notice the SLA attribute on line 29 set to a time delta of five seconds, so the DAG has to be completed within five seconds.
>
> **[0:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=40)** I've also set up a retry delay of five minutes, so the DAG will be retried only every five minutes and I've set email to be cloud.user@[loonycorn.com](https://loonycorn.com).
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=50)** That's the email address that will receive messages.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=52)** Now, email_on_failure I've set to False.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=55)** That's because I do not want the default email on task failure in a DAG.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=60)** I'm going to set up my own custom email, sla_missed_action, write some information out to the logs in case of SLA misses.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=68)** Notice lines 40 through 46, I log out some details of the DAG and the task, the execution date, and other details of the particular run that failed.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=79)** This information is available via other context passed into this SLA missed action function.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=85)** Next, I have a specific Python function dealing with task failures.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=90)** That is the task failed action that also takes in a context as an input argument.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=95)** This is the interesting bit.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=97)** In the case of task failure, we log out details of the DAG task and execution date to the logs.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=104)** This is on lines 51 through 55.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=107)** Next, I set up a custom message for an email.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=111)** On line 57, I define the subject of the message.
>
> **[1:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=114)** I specify what task caused the failure.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=118)** That is the specific task ID.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=120)** Next, on lines 59 through 63, I have the body of the message, which contains the details of the DAG.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=126)** And on line 65 through 71, I instantiate the email operator with the task ID send email.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=133)** We'll send an email to cloud.user@[loonycorn.com](https://loonycorn.com) with the subject equal to subject.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=139)** The HTML content of the email will be set to the body string.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=142)** And the mime type is just HTML.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=145)** And I call email_operator.execute and pass in the current context for this operator.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=153)** Next, in the branch function, I've set up some code to randomly cause this DAG to fail.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=160)** The branch function chooses between 0 and 1.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=163)** And whenever the choice is 1, I throw an exception, intentional task failure.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=168)** Each time the choice is 1, the branch task will fail and the task failed action should be triggered and we should receive an email.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=177)** Let's scroll down and see our DAG here.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=179)** The configuration is exactly the same.
>
> **[3:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=181)** Of course the description is different.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=182)** The DAG ID is different, but notice I have on line 103, the sla_miss_callback that will invoke the sla_missed_action function.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=191)** And on line 104, I have the on_failure_callback and that will invoke the task_failed_action python function.
>
> **[3:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=199)** And this is the callback that will trigger a custom email to be sent to us.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=205)** The remaining operators in the bag are the same as before.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=208)** Notice taskD has a sleep 20.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=211)** So, if taskD is executed, that will definitely cause an SLA miss.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=216)** So, we'll have DAG failures, as well as SLA misses.
>
> **[3:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=219)** Nothing really new to see in the rest of the DAG here.
>
> **[3:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=222)** Exactly the same as before.
>
> **[3:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=224)** Let's switch over to the Airflow UI and execute this simple branching with SLA email.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=230)** This DAG is scheduled to run every minute.
>
> **[3:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=233)** I'm going to unpause this DAG, so it'll catch up with all of the previous executions from a day ago.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=239)** Let's watch this DAG run.
>
> **[4:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=241)** You can see a number of executions.
>
> **[4:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=243)** Many of these executions are failures and many of them won't be failures as well.
>
> **[4:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=248)** Observe that all of the failures are in the task branch.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=252)** That's where we throw the exception, causing our DAG to fail and causing that task to fail.
>
> **[4:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=257)** Now, let's take a look at the SLA misses first.
>
> **[4:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=261)** Go to browse and SLA misses and you can see that there have been SLA misses as well.
>
> **[4:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=266)** The DAG failed and you can see a bunch of SLA misses available here and we'll get the corresponding emails as well.
>
> **[4:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=273)** I'll now head over to cloud.user@loonycorn and you can see that there are two kinds of emails here.
>
> **[4:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=279)** There are several emails which contain in their subject line, Failed for Task, and then the ID of a task.
>
> **[4:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=286)** Those are failure emails.
>
> **[4:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=289)** Those are the custom emails sent by the email operator, because our DAG failed to execute.
>
> **[4:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=296)** Now, we get these emails for several different tasks, because even though the branching tasks through an exception, other tasks were also failed that depended on the branching tasks.
>
> **[5:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=306)** That's why we get failures for other tasks as well.
>
> **[5:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=309)** Now, notice the second email which says SLA miss on DAG=simple_branching_with_sla_email, that is an sla miss email that was triggered by default in case of SLA misses.
>
> **[5:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=320)** Now, it's the custom email that is the new one.
>
> **[5:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=323)** So, I'm going to click through to one of the custom emails and you can see the additional details in the body.
>
> **[5:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=330)** This is the custom body that we had configured.
>
> **[5:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-dag-failed-action?u=76281980&t=333)** I leave it you to explore the other emails on your own, but you've seen that we have sent a custom email in case of DAG failures, and we also know which individual task has failed.

> [!info]- Semantic Content
>
> **Env Vars:** dag (20), sla (14), html (2)
> **Code Keywords:** function (6), let (4), throw (2), pass (1), switch (1)
> **Code Identifiers:** sla_missed_action (2), taskd (2), email_on_failure (1), email_operator (1), sla_miss_callback (1)
> **Prerequisites:** set up (4), configure (2)
> **CLI Commands:** python (2)
> **URLs:** [loonycorn.com](https://loonycorn.com) (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Definitions:** is an  (1)


### 3. Scheduling DAGs with Datasets

#### Dataset producer pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=1)** - [Lecturer] In this demo, we'll see how we can perform data-aware scheduling in Airflow using data sets.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=6)** An Airflow data set is just a logical grouping of data.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=11)** Data sets can be updated by producer tasks that lie upstream in the workflow, and data set updates contribute to scheduling downstream consumer workflows.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=24)** You can set up Airflow DAGs to monitor a data set and if the data has been updated, then the DAG can be scheduled to run.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=33)** Now, all of the data that we're going to work with will be here in the data sets folder.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=38)** I have just one file here, the customers.csv file.
>
> **[0:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=42)** You can see that this file contains some customer's data, name, email, IP address, city, country, and so on.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=49)** I'll be writing a very simple DAG that will read from this data set and perform some simple operations.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=54)** We'll read from the data set folder, that is the customers.csv file, and we'll write the final output to the output subfolder.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=63)** Also inside the Airflow installed directory.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=65)** Now the DAG that I'm about to run is the producer pipeline that will write out the data set that'll then be used by a consumer pipeline.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=74)** Notice the name of the file, producer pipeline customers.py.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=77)** On line one, I import the pandas library in order to read and work with data.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=83)** Make sure you have pandas installed in the virtual environment where you have Airflow running.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=88)** The original data that this pipeline will read is the customer's data, the customers.csv file assigned to the customers data path variable on line 14, and the output produced by this producer pipeline will be written out to the Clean Customers data path, the file clean_customers.csv.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=108)** On line 17, I instantiate a data set pointing to the clean customers data path.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=115)** Our producer pipeline will write to this data set and Airflow DAGs will have the ability to monitor this data set for changes.
>
> **[2:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=124)** Next, let's take a quick look at our processing pipeline.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=127)** I have a function called Reading the Data which calls pd.read csv and reads the original customer's data and returns it in the JSON format.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=137)** The remove null values function pulls the JSON data from the reading the data task, and drops all of the null values in that data, and it returns the clean data set in JSON form.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=150)** And finally, this clean data is saved out to clean customers.csv using the function saving cleaned data.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=159)** Notice on line 43, I call df.to_csv and save out the clean data to the Clean Customers data path.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=168)** Next, let's take a look at our DAG.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=170)** The DAG ID is Producer Pipeline Customers, because it produces the clean customers data.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=176)** The first operator is reading the data.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=179)** Once we've read the data, the second operator in sequence will be removing null values and then saving cleaned data.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=187)** Notice that the Saving Clean Data Task has an outlets attribute that I have defined on line 68.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=193)** This indicates to Airflow that this producer pipeline produces a data set that may be monitored by consumer pipelines.
>
> **[3:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=203)** This outlets parameter indicates that this task produces a data set.
>
> **[3:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=208)** And then of course, I have the DAG definition on line 71.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=211)** Let's head over to the Airflow UI, and let's click through to this producer pipeline customers.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=216)** Let's just confirm that this DAG runs through successfully.
>
> **[3:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=219)** I'm going to unpause this DAG.
>
> **[3:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=220)** That will cause this to be executed once.
>
> **[3:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=224)** You can see all of the tasks are green, and we can head over to the output folder and ensure that the Clean Customers file is present there.
>
> **[3:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=233)** And yes, indeed it is.
>
> **[3:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=234)** If you open up this file, you'll see that it has a lot fewer records than the original data which contained many null values.
>
> **[4:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=242)** Now that we know this producer pipeline works, I'm going to delete this clean customers.csv file.
>
> **[4:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-producer-pipeline?u=76281980&t=247)** We'll regenerate it when we rerun the pipeline along with the consumer.

> [!info]- Semantic Content
>
> **Env Vars:** dag (8), json (3)
> **Code Keywords:** let (5), function (3), finally, (1), delete (1)
> **File Paths:** customers.csv (5), customers.py (1), clean_customers.csv (1)
> **Code Identifiers:** clean_customers (1), to_csv (1)
> **Prerequisites:** set up (1), make sure you have (1)
> **CLI Commands:** make (1)
> **Speakers:** - [lecturer] (1)

#### Dataset consumer pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=1)** - [Instructor] Now let's look at the consumer DAG that will be scheduled only once we have the clean customers data.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=7)** The consumer_pipeline_customers.py file what I'm looking at.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=11)** Now, notice the data paths on lines 18 and 19.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=15)** We access the clean_customers.csv file, perform some transformations, and write out the final data to the groupby_country.csv file.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=25)** The data set that this DAG needs before it can be executed is the one at the clean customers data path, so I've instantiated this dataset on line 21.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=35)** Next, let's look at the operations here.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=37)** I have the function reading_clean_data that will read from the clean customers data path.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=43)** We then perform a grouping operation by country and count the number of records for each country.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=48)** That's groupby_country.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=49)** And then we save the group data to the groupby_country data path.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=55)** Here we've defined the DAG for our consumer pipeline.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=57)** Notice the schedule attribute that are set on line 59.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=61)** Rather than having a regular schedule, it's based on the clean customers dataset, indicating that this DAG will be scheduled only after the clean data is available.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=73)** The tasks that make up this DAG are quite straightforward.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=76)** We read the clean data, we perform the grouping operation, and save out the grouped data.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=81)** Now that we have a producer pipeline producing a dataset and a consumer pipeline consuming that dataset, let's head over to the datasets tab in our Airflow UI, and notice this little flow chart that you can see here.
>
> **[1:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=93)** This flow chart clearly indicates that the producer pipeline produces the clean_customers.csv file, which is then consumed by the consumer pipeline.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=103)** And if you click on the dataset here on the left pane, you'll be able to see the same flow chart.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=108)** You get a clear picture of who produces the dataset and who will consume the dataset.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dataset-consumer-pipeline?u=76281980&t=113)** Now with this information, let's go back to our DAGs and see how this data aware scheduling will work.

> [!info]- Semantic Content
>
> **Code Identifiers:** groupby_country (3), clean_customers (2), consumer_pipeline_customers (1), reading_clean_data (1)
> **Code Keywords:** let (4), function (1)
> **Env Vars:** dag (5)
> **File Paths:** clean_customers.csv (2), consumer_pipeline_customers.py (1), groupby_country.csv (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Analogies:** picture (1)

#### Data-aware scheduling
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=1)** - [Instructor] I currently have one tab open to the Airflow UI here.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=4)** I'm going to open up a second tab for the same Airflow UI.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=9)** The first tab we'll run the producer_pipeline and in the second tab, we'll run the consumer_pipeline.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=14)** So you can see I have two tabs side by side.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=17)** In this first tab, I'm going to click through to the producer_pipeline for the clean_customers data.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=23)** Now, let's switch over to the second tab.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=25)** And here, I'm going to click through to the consumer_pipeline, which will read the clean data and produce some grouping result.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=32)** If you look at the top right, you'll see that this DAG is scheduled based on the dataset, clean_customers.csv, which is not present in the output directory at this point in time.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=43)** So now, let's go back to the producer-pipeline_customers and unpause this DAG.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=48)** It's not going to run through because it was scheduled to run through just once.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=52)** Now, let's head over to the consumer_pipeline and unpause this DAG as well.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=56)** Notice that it is not running through.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=59)** That's because clean_customers.csv isn't available yet.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=63)** The consumer_pipeline scheduled on a dataset will just wait for that dataset to be available.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=68)** Now, let's go over to the producer_pipeline, and I'm going to trigger a run of this tag so that it produces the clean_customers.csv file.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=77)** Trigger a run and as this DAG is executing, I'm going to switch over to the consumer_pipeline and you'll see that it starts automatically as soon as the data set is available, and it runs through to completion.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=92)** This is a data aware scheduling.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=94)** The consumer_pipeline was triggered as soon as the dataset that it was waiting on was available.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=100)** If you go to the output folder, you'll find clean_customers.csv and there is a groupby_country.csv as well.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=106)** Let's take a look at the data here.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=109)** Notice that there are two records from China, two records from Sweden, and one record from the United States.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=115)** I'm just picking these records at random, keep these in mind.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=118)** Now, I'm going to go back to my VS code editor and I've selected the customers.csv file.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=125)** I'm going to update the data in the csv file and re-trigger the producer_pipeline.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=130)** I've added a number of records here at the bottom.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=133)** The records starting from line numbers 27 through 36 are the ones that I added right now.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=140)** Now, having made these changes, let's go back to our Airflow UI and in the producer_pipeline, I'm going to trigger the DAG to be executed once more.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=150)** As this DAG is executing, let's go to the consumer_pipeline and here you'll see that in a few seconds, this starts executing as well.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=157)** That's because the producer_pipeline wrote out some new data to clean_customers.csv, as soon as this pipeline saw that new data was available, this DAG was triggered and rescheduled to run.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=171)** Now, if you look at groupby_country.csv, notice that China now has four records based on the new data, the United States has two records, and Sweden still has only two records.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=183)** There were no new records for Sweden in the new data.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling?u=76281980&t=187)** And this is data aware scheduling using data sets.

> [!info]- Semantic Content
>
> **Code Identifiers:** consumer_pipeline (7), producer_pipeline (6), clean_customers (6), groupby_country (2), pipeline_customers (1)
> **Code Keywords:** let (7), switch (2)
> **File Paths:** clean_customers.csv (5), groupby_country.csv (2), customers.csv (1)
> **Env Vars:** dag (7)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)

#### Purchases producer pipeline and join pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=1)** - [Instructor] With data aware scheduling, you can have a DAG wait for two data sets to be available before it'll be executed.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=8)** And that's what we'll see here in this demo that'll span more than one movie.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=12)** Now, here in my data sets folder, I have two CSV files, the customer's CSV file we've already seen and worked with earlier, the additional file here is for customer purchases.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=24)** If you open up this file, you'll see that it contains various different products, price and quantity of those products, purchased by different customers.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=33)** You can see the second column here is for customer ID.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=36)** That's the customer that made the purchase.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=38)** Let's get a big picture understanding of what we are about to do, first.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=41)** Observe here under the DAGS folder, I have four different Python files.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=45)** Now, you're already familiar with the producer pipeline for customers and the consumer pipeline for customers.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=52)** Those are the DAGS that we've already executed and we know that the consumer pipeline for customers depends on the dataset produced by the producer pipeline for customers.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=62)** Now I have another producer pipeline for purchases that will clean up the purchases data that we have from the purchases dot CSV file.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=69)** I have a consumer pipeline for a join operation.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=74)** This consumer pipeline will wait for both the customer's dataset as well as the purchases dataset to be available and then perform a join between the two and write out results.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=84)** With this in mind, let's take a look at the producer pipeline for purchases.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=89)** Purchases data path points to the data that this DAG will read from, the purchases dot CSV file, and it'll write out to the clean purchases data path.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=98)** It'll write out clean purchases dot csv.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=100)** This clean purchases data is what our join pipeline needs as one of its input.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=105)** That's why we have, on line 17, the clean purchases dataset.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=109)** So, I've instantiated a dataset using the clean purchases data path.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=113)** I have the reading the data Python function defined here, which simply reads the purchases data from the original path.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=121)** Let's take a look at the other Python functions.
>
> **[2:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=123)** Removing null values cleans the data, saving clean data, writes the data out to the output folder, the clean purchases data.
>
> **[2:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=131)** Here below is our DAG.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=133)** The schedule interval is at once.
>
> **[2:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=135)** There are three tasks: reading the data, removing all values, and saving clean data.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=140)** I've set the outlets attribute on saving clean data.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=144)** Outlets points to the clean purchases dataset.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=147)** This is a dataset that this pipeline will produce.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=151)** This DAG is pretty straightforward, so let's head over to our consumer pipeline, joined.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=157)** This is going to be much more interesting.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=159)** Now, this pipeline is going to perform a join operation between the clean customers and clean purchases data.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=166)** So, on lines 18 and 19, I have variables pointing to the data path for the input files.
>
> **[2:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=173)** On line 20, I have the path to the output joined data.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=177)** That is the joining data path.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=179)** The output will be written to join data dot CSV.
>
> **[3:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=182)** Now this DAG will work for both inputs to be available.
>
> **[3:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=186)** So, both inputs should be instantiated as data sets.
>
> **[3:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=189)** And I have done this on lines 22 and 23.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=192)** These are the two data sets that need to be available before this DAG is scheduled.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=197)** Now, let's take a look at what we'll do here in this DAG.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=201)** The function reading clean customers data will read the clean customers data without null values.
>
> **[3:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=207)** The function reading clean purchases data will read the clean purchases data.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=211)** And here below, I have the Python function that'll actually join the two data sets.
>
> **[3:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=218)** On lines 42 through 46, I access the customer's data and purchases data available on xcom.
>
> **[3:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=225)** On line 48 is where I actually perform the join operation.
>
> **[3:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=229)** You can see that we join on the customer ID column.
>
> **[3:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=233)** On the left data frame, the column is called ID and on the right data frame it's called Customer ID.
>
> **[3:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=238)** Then on lines 50 through 54, I dropped some additional columns that are not really needed for our final result.
>
> **[4:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=245)** On line 56, I compute a total price column which is simply price multiplied by quantity.
>
> **[4:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=252)** This joined data is what we return that will be pushed onto xcom.
>
> **[4:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=256)** And finally, I have this function to save this joined data out to the output folder as a C S V file.
>
> **[4:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=264)** Next, we define the actual DAG.
>
> **[4:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=266)** Notice the schedule property on line 77.
>
> **[4:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=269)** This DAG needs for two data sets to be available before it can be triggered.
>
> **[4:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=275)** If the data sets are updated, then both of the updates have to take place before this DAG will be rescheduled.
>
> **[4:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=282)** Clean customers dataset and clean purchases dataset.
>
> **[4:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=285)** And here below we have the operators that make up the DAG.
>
> **[4:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=289)** We read clean customers data, read clean purchases data, join the two data sets together, and save out the joined data.
>
> **[4:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/purchases-producer-pipeline-and-join-pipeline?u=76281980&t=298)** And I define the dependencies for this tag on lines 102 and 103.

> [!info]- Semantic Content
>
> **Env Vars:** dag (11), csv (5), dags (2)
> **Code Keywords:** let (5), function (5), from, (1), finally, (1)
> **CLI Commands:** python (4), make (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Data-aware scheduling with multiple datasets
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=1)** - [Instructor] Now that we've seen the code, let's take a look at the Airflow UI.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=4)** We have four different pipelines running, two producers and two consumers.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=9)** One producer for clean customers data, that is the producer pipeline customers, producer pipeline purchases for clean purchases data, consumer pipeline customers only works on the customers information, and consumer pipeline join needs both customers as well as purchases datasets.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=27)** Now let's head over to the datasets tab and see what this flow looks like.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=32)** Observe that the dependencies between the different datasets and the dags are clearly delineated here.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=39)** Producer pipeline customers produces clean customers dot CSV.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=43)** This is consumed by consumer pipeline customers as well as consumer pipeline join.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=48)** Producer pipeline purchases produces clean purchases dot CSV which is consumed only by consumer pipeline join.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=56)** This is a combined flowchart of dependencies.
>
> **[0:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=58)** You can click on the individual datasets and view the individual datasets' dependencies.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=64)** Here's the pipeline for purchases, going from producer pipeline purchases to consumer pipeline join.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=71)** And if you click on the customers dataset, you'll see the pipeline only for this dataset produced by producer pipeline customers, consumed by two dags, consumer pipeline customers and consumer pipeline join.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=84)** Let's set up the dags to be executed so that we can see how data aware scheduling works.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=90)** Now there are four dags.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=91)** I'm going to go ahead and un-pause the consumer pipeline for customers and the producer pipeline for customers.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=97)** These are the dags that we ran earlier.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=100)** I'll un-pause the other dags in a bit.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=102)** Now I'm going to open up these dags in different tabs.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=106)** The first tab will contain the producer pipeline for customers.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=110)** The second tab will also be the producer pipeline, the producer pipeline for purchases.
>
> **[1:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=116)** Notice, that this pipeline is opened in the second tab.
>
> **[1:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=119)** I'll open up a third tab and this will contain the consumer pipeline for customers.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=125)** This is the consumer pipeline that we worked with earlier.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=127)** And the fourth and last tab will contain the consumer pipeline for the join operation.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=134)** Of these, two pipelines are enabled, the ones on the first and third tabs, the producer pipeline for customers and the consumer pipeline for customers.
>
> **[2:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=143)** The remaining dags are disabled as of now.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=146)** Now I'm going to head over to the first tab, the producer pipeline for customers, and I'm going to trigger an execution of this dag.
>
> **[2:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=154)** This will produce the clean customers CSV file.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=158)** Now go ahead and trigger this dag, and as soon as the pipeline completes execution, you can head over to the third tab, consumer pipeline for customers.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=167)** You can see that that has a run through as well.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=170)** Remember that this consumer only depends on the single dataset, clean customers.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=175)** Now let's head over to the output folder and here you'll find clean customers dot CSV is available and the output of the consumer pipeline, group by country dot CSV.
>
> **[3:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=186)** Now, I'll head over to the tab where I have my consumer pipeline join operation.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=191)** Remember, this depends on two datasets.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=193)** I'm going to un-pause this dag and you'll find that this dag will still keep waiting.
>
> **[3:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=200)** That's because the second dataset, the purchases dataset is not yet available.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=205)** Let's run the pipeline that will produce the second dataset, producer pipeline purchases.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=211)** Now this dag is paused.
>
> **[3:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=213)** I'm going to go ahead and un-pause this dag and it'll run through once.
>
> **[3:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=218)** Once this has completed, if you head over to the consumer pipeline join and enable auto refresh, you'll see that this pipeline has finally triggered and you can see that it has run through.
>
> **[3:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=230)** Once both datasets were available, the join operation was performed.
>
> **[3:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=235)** Now, if you go to output, you'll see the joined data is present here.
>
> **[3:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=239)** Let's open up the joined data and you can see the final result of this consumer pipeline join.
>
> **[4:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=246)** Notice that there are a total of about 26 records here.
>
> **[4:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=249)** Now I'm going to update both the original customers data as well as the purchases data.
>
> **[4:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=254)** The first thing I'm going to do is click on the customers dot CSV file.
>
> **[4:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=258)** There are a number of records that we've already processed here.
>
> **[4:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=261)** I'm going to go to the very bottom and add a few more records.
>
> **[4:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=265)** The records on lines 37 through 42 are the ones that I have just added.
>
> **[4:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=271)** Now, in exactly the same way, I'm going to update the purchases dot CSV file as well.
>
> **[4:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=276)** I'll scroll to the very bottom and add a few more purchases made by customers.
>
> **[4:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=281)** All of the purchases added on lines 32 through 37 are newly added purchases.
>
> **[4:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=287)** Now, having made these changes to the original dataset let's trigger all of the pipelines once again.
>
> **[4:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=293)** Here I am in the producer pipeline for customers.
>
> **[4:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=296)** I'm going to go ahead and trigger a run of this dag.
>
> **[4:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=299)** Our join pipeline depends on customers as well as purchases, and notice that the join pipeline has not been triggered because only one of the two datasets have been updated.
>
> **[5:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=311)** Now, let's go to the producer pipeline for purchases and trigger this dag as well, so that purchases data is also updated.
>
> **[5:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=320)** And now if you quickly switch over to the consumer pipeline for the join operation, you'll find that it has been triggered and it has produced an output.
>
> **[5:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=328)** If your dag depends on multiple datasets, both of those datasets have to be updated before the dag will be scheduled.
>
> **[5:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=335)** Let's take a look at the joined data and you can see that we have the new records.
>
> **[5:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=341)** There are many more records here in the joined result.
>
> **[5:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/data-aware-scheduling-with-multiple-datasets?u=76281980&t=345)** We have 32 records, when originally, we just had about maybe 26 or 27.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (1)
> **Env Vars:** csv (7)
> **UI Navigation:** click on (3), go to (3)
> **CLI Commands:** find (3)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Working with Airflow Plugins

#### Introducing plugins
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=1)** - [Instructor] In this demo, you'll get a quick taste of how it is to work with Airflow plugins.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=5)** Plugins in Apache Airflow are custom extensions that allow you to add or modify the functionality of Airflow's core components.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=14)** Plugins provide a way to extend Airflow's capabilities and customize its behavior to suit your specific needs.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=21)** Think of Airflow as a generic toolbox for working with data but different organizations may have different needs from Airflow, and using Airflow plugins can be a way for companies to customize their Airflow installation to reflect their specific needs.
>
> **[0:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=38)** Plugins are typically used to write, share, and activate new sets of features.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=44)** Now, Airflow has a simple plugin manager built in, that can integrate external features into its core by simply dropping files into a plugins folder.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=54)** I have the airflow.cfg file open and I'm going to search for the plugins_folder setting.
>
> **[1:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=60)** Notice that the plugins_folder points to airflow/plugins.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=65)** This is the folder to which we'll add our plugins.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=68)** Go ahead and close out this configuration file.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=70)** Here, within the Airflow install directory, I'm going to create a new folder called plugins and we'll be adding in Python code for our plugins in just a bit here.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=81)** To start off with, the plugins folder is completely empty.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=84)** We don't have any plugins configured.
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=86)** If you go to Admin and then Plugins, here on this page, you'll see that there are no plugins loaded.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=94)** In our first example here, we'll create a completely empty plugin.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=98)** Here, within the plugins folder, I'm going to create a new Python file called empty_plugin.py and this will contain code for a completely empty plugin, something that does nothing.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=110)** I import the AirflowPlugin class.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=112)** The EmptyPlugin inherits from the AirflowPlugin, you can see this on line three.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=117)** The name of the plugin is simply EmptyPlugin.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=120)** The on_load function is where you'd specify code that you want to run when the plugin is first loaded.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=126)** I've just set it to pass.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=128)** In order for this plugin to be loaded into the Airflow UI, you'll need to kill the Airflow scheduler and web server that you have running.
>
> **[2:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=137)** And once that's done, we can head back and restart the Airflow scheduler first.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=142)** And when that's up and running, let's restart the web server as well.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=147)** When both the scheduler and the web server have been restarted, your plugin should now be available in the Airflow UI.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=153)** Here I am in the UI.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=155)** Let's head over to Admin and Plugins, and you should see our empty plugin right here.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=160)** And here is our empty plugin, available right here in this UI.
>
> **[2:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=164)** Now, notice all of these attributes.
>
> **[2:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=166)** Every attribute here represents a feature that you can use to plug into Airflow.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=172)** In earlier versions of Airflow, before version 2.0, you could use plugins to create custom operators, sensors, and hooks.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=180)** Version 2.0 onwards, these extensions should be regular Python modules, they need not be plugins.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=187)** There are many plugin components that you can add into Airflow.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=190)** For example, appbuilder_menu_items can be used to add additional sections and links to the Airflow menus.
>
> **[3:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=198)** flask_blueprints and appbuilder_views offer the possibility to build a Flask project on top of Airflow.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=205)** macros expand on existing Jinja templates using custom functions.
>
> **[3:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/introducing-plugins?u=76281980&t=211)** Executors are what you'd configure to set up custom executors to work with your Airflow, not just the ones Airflow provides by default.

> [!info]- Semantic Content
>
> **Code Identifiers:** plugins_folder (2), empty_plugin (1), on_load (1), appbuilder_menu_items (1), flask_blueprints (1)
> **Code Keywords:** let (2), class. (1), function (1), pass (1), default. (1)
> **CLI Commands:** python (3), apache (1)
> **Prerequisites:** install (1), you'll need (1), configure (1), set up (1)
> **File Paths:** airflow.cfg (1), empty_plugin.py (1)
> **Versions:** version 2 (2)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### Adding menu items using plugins
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=1)** - [Instructor] In this demo, we'll see how we can use an Airflow plugin to add new menu items that can be accessed from the Airflow UI.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=9)** My plugin is in a Python file defined under the plugins folder, company_info_plugin.py.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=16)** Now, I import the Airflow plugin on line one and on lines three through 18, I have created three app builder subitems.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=25)** These subitems refer to the three menu items that I want to add to Airflow.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=30)** SubitemA and B have the same category, Company Information.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=35)** So company information will be the top level tab and this subitemA and B will be menu items under that tab.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=44)** SubitemA contains information about LinkedIn and subitemB contains information about Loonycorn.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=50)** Notice that I have URLs for both companies here.
>
> **[0:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=54)** The third appbuilder item is a top-level item on lines 15 through 18.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=59)** The name is Plugin Documentation, that will be the top-level tab, and this will lead to the URL which contains the documentation for plugins.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=67)** And here is the actual definition for the plugin itself.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=70)** CompanyInfoPlugin deriving from Airflow plugin, name is Company Information Plugin, app_builder_menu_items is set to the three menu items that we have defined.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=81)** We don't do anything special on_load that's just set to pass.
>
> **[1:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=85)** That's all this plugin contains.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=87)** And of course, we'll need to restart the Airflow scheduler and web server so that this plugin will be loaded.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=95)** I've killed the processes that were already running.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=97)** Let's bring up the Airflow scheduler first and then let's bring up the Airflow web server.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=103)** Once these are up and running, our UI plugin will automatically be loaded and available in the Airflow web server.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=112)** And here they are.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=112)** Notice on top that we have two more tabs: one for plugin documentation, and another one for company information.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=120)** These are our own custom tabs.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=122)** If you click on company information, you see two menu items, Linked In and Loonycorn.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=127)** If you click on these menu items, you'll be taken to the corresponding URL.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=133)** Let's go back to Airflow, you'll have to hit the back button.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=136)** Click on plugin documentation, and this will take you to the Airflow documentation for plugin.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=142)** And this is what it looks like at the time of this recording.
>
> **[2:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=145)** These are just very simple plugins.
>
> **[2:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/adding-menu-items-using-plugins?u=76281980&t=147)** You can build entire complex flask applications for any components that you need using plugins and thus, customize the look and feel of your Airflow web server.

> [!info]- Semantic Content
>
> **Code Identifiers:** company_info_plugin (1), subitema (1), subitemb (1), app_builder_menu_items (1), on_load (1)
> **Code Keywords:** let (3), pass (1)
> **UI Navigation:** click on (3)
> **Env Vars:** url (2)
> **File Paths:** company_info_plugin.py (1)
> **CLI Commands:** python (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)

#### Exploring the CSV reader plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=1)** - [Instructor] This last plugin that we are going to build is going to be a CSV Reader plugin.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=6)** We'll read CSV data from our local machine and display it in the Airflow UI.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=11)** I've already loaded this plugin in and restarted the Airflow scheduler and web server.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=16)** If you look at the tabs on top, you can see that we have an additional data tab, and if you click on this, you'll see that we have an option for a CSV Reader.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=25)** This is our custom plugin.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=27)** Select the CSV Reader option and we'll see exactly what it does.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=31)** It displays a simple UI to enter a CSV file path.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=36)** So let's say I enter datasets/purchases.CSV.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=39)** Purchases.CSV is already present in my datasets folder.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=43)** I click on View CSV and this will give you all of the details for this particular CSV file.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=49)** The first section here gives us a simple column overview for each column in this dataset.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=55)** Remember, this is the purchases dataset and here below, you can see the actual data, the CSV data printed out in a tabular format.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=64)** Now all of the empty or null cells will be highlighted in yellow but there are no null values in the purchases dataset.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=72)** I'm going to hit the back button and go back to the previous screen, and instead of purchases.csv, let's take a look at the customers.csc file.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=80)** This definitely has a few null values.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=83)** Click on the View CSV button and we'll go back to the CSV Details page.
>
> **[1:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=88)** We get a column overview of all of the columns in this data set, and here in the CSV Data, we get the actual data where all of the null values are highlighted in yellow.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=99)** Those cells are in yellow.
>
> **[1:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=101)** This is the plugin that we'll be building in Python.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=104)** Let's take a look at the files that I've used to build this plugin.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=107)** In the plugins folder, notice I have a csv_reader_plugin.py file.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=113)** I also have templates sub folder which contains two HTML files.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=118)** getCSVPathURL.HTML is for the first screen where we actually enter the CSV file that we want to view.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/exploring-the-csv-reader-plugin?u=76281980&t=127)** CSVDisplay.html will display information about the CSV file that we have specified.

> [!info]- Semantic Content
>
> **Env Vars:** csv (15), html (2)
> **File Paths:** purchases.csv (2), datasets/purchases.csv (1), csv_reader_plugin.py (1), getcsvpathurl.html (1), csvdisplay.html (1)
> **Code Keywords:** let (3), this, (1)
> **UI Navigation:** click on (3), select the (1)
> **Code Identifiers:** csv_reader_plugin (1), getcsvpathurl (1)
> **Cross-References:** go back to (2)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Implementing the CSV reader plugin
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=1)** - [Instructor] The CSV reader plugin is a very simple flask application that can be integrated into the airflow UI.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=8)** You can see the imports here on lines 3 through 9.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=11)** You can see that we have a bunch of flask specific imports.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=15)** From wtforms, we import string field and submit field.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=19)** This will be the fields in our flask form and I've also imported the CSV library to read CSV data.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=25)** On lines 11 through 15, I instantiate a flask blueprint, which is a way to organize and group related views, templates, static files, and other resources in a flask web app.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=37)** Now if you remember, the CSV reader provides an overview for the individual columns in your dataset.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=43)** Now, the get data type function that you see here takes in a column as an input argument and checks to see what kind of data the column holds.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=52)** It returns the data type for the column passed in.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=56)** For every column, we display a count of unique values and that's implemented in the function get unique value count.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=63)** We pass in a column and get the number of unique values in that column.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=67)** The get unique values function returns the actual unique values present in a column, not just the count.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=74)** The CSV form class inherits from the flask form base class.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=79)** This is a form with a single input text box where we enter the CSV file that we want to read in and a submit button which we click on to view the CSV.
>
> **[1:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=89)** The string field is the input text box and the submit field is the view CSV button.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=95)** The CSV reader view which inherits from the app builder base view sets up the views that we'll see in our plugin.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=103)** We have two views.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=104)** One to enter the name of the CSV file and the second one to view the CSV details.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=110)** The get CSV path URL function is what displays the form to us.
>
> **[1:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=115)** The at expose decorator specifies the URL path at which this particular view is available.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=122)** Within this view, we instantiate a CSV form object on line 68 and render the template, get CSV path URL dot html and pass in the form information to this template.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=136)** The display CSV file function maps to the second view where we see the details of our CSV file.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=142)** The at expose decorator maps this particular view to the path, forward slash CSV display and this HTML page responds to get requests as well as post requests specified in methods.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=157)** We instantiate the CSV form.
>
> **[2:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=159)** Now if the request method is a post method, the form has been submitted to this page and the form contains the CSV file that we're going to read in and display details for.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=171)** Form dot validate on submit checks the submitted form.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=175)** We access the path specified by the user and then call self dot read CSV data to read in the CSV data available at this path.
>
> **[3:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=185)** The code on lines 83 through 93 gets the column overview details and it appends all of this information in a list called column overview, instantiated on line 83.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=197)** Once we have the column overview and the original CSV data, we call self dot render template to render this template out using the CSV display dot HTML file.
>
> **[3:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=209)** This template takes in two input arguments, the CSV data and the column overview.
>
> **[3:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=214)** If the request made with this view is a get request, the code on line 101 is executed where we render the template get CSV path URL dot HTML file and pass in the form as an input argument.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=227)** This render template function that we are invoking is present in the app builder base view class, the base class of the class that we are currently writing code for.
>
> **[3:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=237)** The read CSV data function on lines 103 through 113 simply reads the CSV data specified at the path input by the user.
>
> **[4:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=247)** This class defines our simple flask views app.
>
> **[4:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=250)** I instantiate the CSV reader view on line 115, set up the menu item for this view on lines 117 through 121, and then on lines 123 through 130 I create the plugin that references this flask app.
>
> **[4:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=264)** I set the flask blueprints and app builder views properties for this plugin.
>
> **[4:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=270)** Under the templates folder, I have the two HTML files which render the two views for our plugin.
>
> **[4:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=277)** The first file that we look at is the CSV display dot HTML file.
>
> **[4:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=282)** Observe that this is a Jinja template.
>
> **[4:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=284)** The style element defined on lines 5 through 24 defines the CSS styles used by the simple HTML page.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=292)** Within the body of this HTML, this first table defined on lines 30 through 49 defines the overview of the CSV data.
>
> **[5:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=302)** Notice all of the percentage signs.
>
> **[5:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=305)** This is a Jinja template used to render our data out.
>
> **[5:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=309)** If you look at line 40, we reference the column overview, the input data that we pass in when we render this Jinja template.
>
> **[5:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=317)** If you scroll further down, you'll see the actual CSV data.
>
> **[5:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=321)** This is displayed in the table defined on lines 52 through 69.
>
> **[5:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=326)** Notice on line 55, we reference the CSV data input parameter passed in when we render this template.
>
> **[5:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=334)** On line 64 is where we apply the special style to show null cells in the yellow color.
>
> **[5:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=340)** Let's take a look at the second Jinja template, get CSV path URL dot HTML.
>
> **[5:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=345)** This is the first page where we enter the path of the CSV file that we want to view.
>
> **[5:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=350)** You can see the form element defined on lines 8 through 13.
>
> **[5:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=354)** This takes in the form input that is submitted when we click on the view CSV button.
>
> **[5:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=359)** Once I set up this plugin, I restarted the airflow scheduler and web server and that's how this plugin was available here in the UI.
>
> **[6:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=367)** Let's click through and take a look at how this plugin works once again.
>
> **[6:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=372)** Here is the form where we enter the CSV file path.
>
> **[6:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=375)** Remember, this is a path on your local machine.
>
> **[6:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=377)** If you click on view CSV, you'll be able to see the column overview, that's the first table, and if you scroll down, you'll be able to see the CSV data that is the second table.
>
> **[6:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=388)** Null values are highlighted in yellow.
>
> **[6:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=391)** This plugin is a simple flask app integrated with the airflow UI.
>
> **[6:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/implementing-the-csv-reader-plugin?u=76281980&t=396)** You can build much more complex apps to fit in with what your ecosystem needs.

> [!info]- Semantic Content
>
> **Env Vars:** csv (38), html (8), url (5), css (1)
> **Code Keywords:** function (7), pass (4), for. (2), self (2), let (2)
> **Exercise Files:** template (12)
> **Definitions:** is a  (9)
> **UI Navigation:** click on (3), scroll down (1)
> **Prerequisites:** set up (2)
> **Speakers:** - [instructor] (1)


### 5. Scaling Airflow

#### Scaling Apache Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=1)** - [Instructor] If you're prototyping or just testing your DAGs, it's completely fine to run your DAG locally.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=7)** Let us run it on the same machine where you have Airflow installed.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=10)** But in a production environment, you might want to run your tasks in a distributed framework, and configuring the Airflow executor will help you achieve the scaling.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=20)** Now, let's understand how the different executors that Apache Airflow supports work.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=26)** Now, here is the basic Airflow architecture, and you can see that the Airflow scheduler and executor is at the very heart of this architecture.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=36)** The scheduler is responsible for triggering scheduled workflows and the scheduler submits the individual tasks to the executor to run.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=45)** The executor is responsible for managing the execution of tasks within workflows.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=51)** The executor receives the tasks that it has to run from the scheduler, and in the default installation of Airflow, the executor actually runs inside the scheduler as a local process.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=62)** This is okay for testing, but in production deployments, we need something more scalable and robust, which is why in production environments, you'll choose an executor that pushes the execution of tasks out to worker nodes that run on a remote machine.
>
> **[1:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=79)** Now, Airflow supports multiple executors, each with its own way of scheduling and executing tasks, and the choice of executor determines how Airflow manages task distribution and parallelism.
>
> **[1:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=91)** Here are some of the different types of executors that Airflow supports.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=94)** We have the SequentialExecutor, the LocalExecutor, the CeleryExecutor, and the KubernetesExecutor.
>
> **[1:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=102)** This is not an exhaustive list, there's also the DaskExecutor and the CeleryKubernetesExecutor, I won't discuss those.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=109)** Of all of these executors, when you first install Airflow, the SequentialExecutor is what is configured by default.
>
> **[1:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=117)** The SequentialExecutor is a lightweight local executor, which runs only one task instance at a time and is not production ready.
>
> **[2:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=126)** Running just one task instance means that there is no parallelism.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=130)** This is the only executor that can work with the SQLite database for metadata management since SQLite does not support multiple connections.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=140)** Now, this executor is not good for production environments, because it's prone to single point failure, and it's great for debugging purposes, that's where we typically tend to use this.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=150)** One step up from the SequentialExecutor is the LocalExecutor.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=155)** As its name suggests, this also runs tasks on the local machine, not on a remote machine.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=162)** However, the LocalExecutor can run multiple tasks in parallel on the same machine.
>
> **[2:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=168)** This executor is suitable for small to medium sized workflows that can be run on a single machine.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=174)** Notice within the executor, there are multiple tasks running in parallel.
>
> **[2:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=179)** Now, in order to work with the LocalExecutor you'll need to configure a production metadata database such as PostgreSQL or MySQL.
>
> **[3:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=187)** If you want to run a distributed processing for your tasks, you can use the CeleryExecutor.
>
> **[3:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=193)** Notice that the CeleryExecutor ships off tasks to Celery workers where those tasks are executed in parallel.
>
> **[3:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=201)** Now, the CeleryExecutor is so-called, because it leverages Celery, a distributed task queue system to execute tasks in a distributed environment.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=212)** With Celery, you can run multiple Celery workers and distribute tasks to these workers using a message broker such as a RabbitMQ or Redis.
>
> **[3:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=222)** Now, the tasks in your DAGs will be executed on a remote machine running Celery, so this is a remote executor used for horizontal scaling where workers run on multiple machines.
>
> **[3:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=234)** Now, in our demo, we're going to be running Celery on the same machine where we have Airflow installed, but in a production environment, you'll have Celery running on a remote distributed system.
>
> **[4:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=244)** Because it's a distributed system, the CeleryExecutor allows your task to be fault tolerant and allows for real-time processing and task scheduling.
>
> **[4:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=254)** And finally, the KubernetesExecutor is another distributed processing executor.
>
> **[4:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=260)** It uses the Kubernetes API for resource optimization and runs as a fixed single pod in the scheduler that only requires access to the Kubernetes API.
>
> **[4:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=270)** With the KubernetesExecutor, you'll use Kubernetes worker pods to run your tasks on a Kubernetes cluster.
>
> **[4:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/scaling-apache-airflow?u=76281980&t=279)** This way, your task will automatically be distributed and parallelized.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default. (1), this. (1), finally, (1)
> **Env Vars:** api (2), dag (1)
> **Prerequisites:** install (1), you'll need (1), configure (1)
> **CLI Commands:** apache (1), mysql (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Basic setup for the transformation pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=1)** - [Lecturer] When you're running in a production environment, you won't be using the sequential executor, that's only for development, nor the local executor.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=8)** That's only for executing tasks on your local machine.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=12)** You'll want to run your task in a distributed environment, and for that, you'll use something like the Kubernetes Executor or the Celery Executor.
>
> **[0:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=19)** Here in this demo, we'll see how you can use the Celery Executor to run your tasks in a distributed framework.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=26)** Here I am in my virtual environment, and I'm going to run Airflow info and grep providers that have been installed along with my current version of Airflow.
>
> **[0:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=37)** Notice that the Apache Airflow Providers Celery version 3.1.0 has already been installed.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=44)** That's because when we installed Airflow, we also installed Celery.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=49)** Celery is an open source distributed task queue system that allows you to manage task execution and scheduling in a distributed environment.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=59)** When we installed Airflow, we ran a pip-installed command that looked like this, Apache Airflow in square bracket Celery equal to version 2.5.3, and we specified a path to a constraints file.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=73)** Now the fact that we included Celery in our installation, this is why we have the Celery provider available here.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=80)** In order to test our Celery executor, I'm going to run a DAG that performs some operations on PostgreSQL.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=87)** I type in psql, and here I am in the interactive shell for Postgres.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=92)** I'm going to create a new database here called cars_db.
>
> **[1:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=96)** This is the database that we'll connect to from Airflow.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=100)** Let's connect to this cars_db database, and you'll find that there are no tables in this database to start off with.
>
> **[1:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=106)** It's completely empty.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=108)** Backslash dt should tell you that it did not find any relations.
>
> **[1:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=112)** Now, let's set up a connection in the Airflow UI so that the DAG that we're about to run will be able to connect to this database here in PostgreSQL.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=121)** Go to admin, connections, and add a new connection.
>
> **[2:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=125)** Hopefully, you're very familiar with this process so we can go through this quickly.
>
> **[2:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=129)** Specify the connection ID, cars_postgres_connection, specify the connection type.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=134)** You should have the Postgres option here, provided that the Postgres provider has been installed.
>
> **[2:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=140)** Since we've been working with Postgres as our metadata database, the Postgres provider should have been installed in your Airflow installation.
>
> **[2:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=148)** Next, specify description for your connection.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=151)** You can keep this whatever you want it to be.
>
> **[2:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=153)** Also, specify the host.
>
> **[2:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=155)** That is local host.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=156)** That's where Postgres is running.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=157)** The schema is the path to your database, cars_db.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=162)** Specify the login and the password.
>
> **[2:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=165)** The login is the root login and the root password, because we need superuser privileges on Postgres.
>
> **[2:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=172)** PostgreSQL is running on port 5432.
>
> **[2:54](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=174)** Go ahead and test this connection.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=177)** Hopefully, you should see the green on the top of your screen.
>
> **[3:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=180)** Now, save this connection so that we can use it in our DAG.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=184)** Now, the workflow that we'll build using our DAG will contain tasks that will run on the Celery executor.
>
> **[3:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=190)** This workflow will read in data that's available here in this data sets folder.
>
> **[3:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=195)** Notice the card details, the CSV file.
>
> **[3:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/basic-setup-for-the-transformation-pipeline?u=76281980&t=197)** This is the file that we'll read in, and we'll write out some transform information either to a CSV file or to a table in Postgres.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (2), find (2), grep (1), pip (1), psql (1)
> **Env Vars:** dag (4), csv (2)
> **Code Keywords:** let (2), this, (1), type. (1)
> **Code Identifiers:** cars_db (3), cars_postgres_connection (1)
> **Versions:** version 3 (1), 1.0 (1), version 2 (1), 5.3 (1)
> **Ports:** port 5432 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)

#### DAG for the transformation pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=1)** - [Instructor] The data transformation pipeline that we'll set up contains a mix of SQL operators and Python operators.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=7)** The PostgreSQL operator will execute the SQL statements present in this sub folder called SQL statements under the Airflow installed directory.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=17)** Create_table_car_SQL contains a create table command where the table name is passed in as an input parameter and all of the columns here contains car details, different attributes of cars.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=31)** The insert car data SQL file contains a copy command that copies some data from an original C S V file.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=39)** Notice the from parameter on line six into the table specified by table name on line one.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=46)** Copying from the C S V file at the path to a particular table is performed based on a condition.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=52)** Notice the where clause on line eight.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=55)** Condition is a column in the original C S V data and if condition matches the condition that we specify, only that data will be inserted into the table.
>
> **[1:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=65)** Now that you've seen these SQL statements, let's take a look at the pipeline.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=69)** I'll give you a quick overview.
>
> **[1:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=71)** Data processing pipeline dot py is the name of the file.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=74)** The original data path contains the original car data that we'll read in at the beginning of the DAG.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=81)** The cleaned data when null values have been removed will be written out to the clean data path and the final output will be written out to the output path.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=90)** The name of the file in the output path is a parameter that we have to specify when we actually write out the data.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=97)** Next, let's look at the various tasks.
>
> **[1:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=99)** The Read C S V file function simply reads the C S V file from the original data path.
>
> **[1:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=105)** The remove null values drops all of the records with null values from the original data set.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=111)** It also converts car model year and mileage to integer types and writes out the clean data to the cleaned data path on line 48.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=122)** Next, I have the determine branch function, where we choose completely at random, whether the final output will be written out to a C S V file or saved to a table.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=132)** If the brand choice is to write out the final result as a C S V file, these are the Python functions that will be executed: filter by new car, filter by used car, and filter by certified car.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=144)** All of these filtering operations take the cleaned data and apply some kind of filtering to the original data.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=151)** On lines 65, 74, and 83, you can see the three different filter conditions that are applied.
>
> **[2:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=158)** So, we filter by cars that are new, used, or certified pre-owned.
>
> **[2:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=163)** And on lines 67, 76, and 85, we write out the filtered results to the output path with the right name, new cars, used cars, or certified cars.
>
> **[2:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=176)** Next, let's set up the DAG.
>
> **[2:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=177)** There's nothing new that you're going to learn in this DAG setup except that this DAG is fairly complex.
>
> **[3:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=183)** I wanted a fairly complex one to be able to scale up and run using Celery.
>
> **[3:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=188)** So, we have the Python operators read C S V file, remove null values.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=192)** We have the branch Python operator determine branch.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=196)** I then have the two empty operators that form the first task in each of the two branches, save output as C S V and save output as table.
>
> **[3:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=205)** If you choose to save output as C S V, the three filtering operations will be performed, filter by new car, filter by used car, and filter by certified car.
>
> **[3:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=215)** If you choose to save output as table, if that was the branch that was chosen, then these tasks will be executed: create table new car, create table used car, and create table certified car.
>
> **[3:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=227)** The Postgres connection ID for all three of them is cars Postgres connection.
>
> **[3:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=232)** Notice that they all reference the create table car dot SQL file.
>
> **[3:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=236)** The params that are passed in is the table name which is new car, used car, and certified car, respectively.
>
> **[4:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=243)** Once we've created these tables, the filtered data for each of the three types of cars will be inserted into these tables.
>
> **[4:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=250)** Notice I have the three Postgres operators here, insert data new car, insert data used car, and insert data certified car.
>
> **[4:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=258)** Let's understand just one of these operators and the remaining two operators are essentially almost identical.
>
> **[4:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=265)** Let's look at the first operator.
>
> **[4:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=266)** Insert data new car.
>
> **[4:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=269)** The SQL that is executed is present in the insert car data dot SQL file.
>
> **[4:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=274)** You need to pass in a number of parameters for that SQL statement.
>
> **[4:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=278)** Table name is new car.
>
> **[4:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=279)** The C S V path is the path to the cleaned data and notice how I have specified that path within quotes.
>
> **[4:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=287)** And finally, the condition on which to filter the cars inserted is on condition new.
>
> **[4:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=292)** Now, in exactly the same way, we've set up the insert data for used car and the insert data for the certified car.
>
> **[5:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=301)** And here on lines 191 through 202 have defined the dependencies for the DAG.
>
> **[5:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=308)** These dependencies are best understood if you look at a graphical representation of this pipeline.
>
> **[5:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=313)** So, in the Airflow view UI, let's click through to the pipeline.
>
> **[5:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=316)** Here is the grid view.
>
> **[5:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=317)** Let's head over to the graph view.
>
> **[5:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=319)** And here you can see that we have a fairly complex pipeline set up.
>
> **[5:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=324)** We read the C S V file, remove null values, determine the right branch.
>
> **[5:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=328)** If the branches save output as C S V, then we invoke the filter by certified car C S V, filter by new car C S V, and filter by used car C S V tasks.
>
> **[5:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=339)** And this will write out the C S V files based on our filtering operations.
>
> **[5:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=344)** If the brand choice is to save output as table, we create tables for certified car, new car, and used car and insert data for these records into the table that we've created.
>
> **[5:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/dag-for-the-transformation-pipeline?u=76281980&t=356)** This is the pipeline that we execute using the Celery executor.

> [!info]- Semantic Content
>
> **Env Vars:** sql (9), dag (5)
> **Code Keywords:** let (7), function (2), new, (1), pass (1), finally, (1)
> **Prerequisites:** set up (4), setup (1)
> **CLI Commands:** python (4)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Install RabbitMQ on macOS and Linux
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=1)** - [Instructor] We have the pipeline ready.
>
> **[0:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=2)** We are now close to configuring our CeleryExecutor.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=5)** Now Celery is a task queue, which helps in distributing tasks across multiple CeleryExecutors.
>
> **[0:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=11)** The CeleryExecutor distributes the workload from the main application onto multiple workers with the help of a message broker such as RabbitMQ or Redis.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=21)** Now in this movie, we'll set up RabbitMQ on your local machine.
>
> **[0:25](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=25)** In the first part of this movie, I'll use Homebrew to install RabbitMQ on my macOS.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=31)** In the second part of this movie, I'll install RabbitMQ on WSL Windows System for Linux two.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=39)** Here I am on the terminal window of my macOS machine and I'm going to use the Home Brew Package manager I call, brew install rabbitmq.
>
> **[0:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=48)** This should download and install RabbitMQ on your local machine.
>
> **[0:52](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=52)** Now this process was fairly long, it took about maybe 10 minutes on my machine.
>
> **[0:57](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=57)** I have a rather old machine so 10 minutes is what everything normally takes.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=62)** Now let's start the RabbitMQ service.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=64)** You can call, brew services restart rabbitmq, this is for a restart or just brew services start rabbitmq.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=72)** I already had a previous version of RabbitMQ running, this is an upgrade, so I need to call restart.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=78)** If you're setting it up for the first time, brew services start rabbitmq should be good enough.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=84)** Let's confirm that RabbitMQ is indeed running.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=87)** Run, brew info rabbitmq and this will give you some information.
>
> **[1:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=92)** Notice that we have RabbitMQ stable version 3.11.17, RabbitMQ is an open source message broker that provides a robust and scalable messaging system for applications.
>
> **[1:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=104)** And this is going to be used by Celery to distribute task to Celery workers.
>
> **[1:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=109)** If you notice on this screen here, management plugin has been enabled by default at HTTP local host 15672.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=118)** That's where we'll be able to access the UI for RabbitMQ.
>
> **[2:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=122)** So open up a browser window and head over to local host 15672.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=128)** And you should see the login page here for rabbitmq.
>
> **[2:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=132)** If you're running airflow using WSL for Windows, you might want to install RabbitMQ on your Ubuntu installation on Windows.
>
> **[2:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=141)** Select WSL, that is the Ubuntu installation that you're already using.
>
> **[2:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=146)** Let's run a grep on airflow info to check whether we have the Celery provider.
>
> **[2:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=151)** And you can see that Apache Airflow Provider Celery is available here.
>
> **[2:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=156)** Let's make sure that we have the latest update for the apt GIT Package manager on Linux, sudo apt update and sudo apt upgrade are the two commands that I'll run.
>
> **[2:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=167)** Once these commands run through, we are ready to install RabbitMQ.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=171)** Now RabbitMQ has a dependency on erlang, so you'll need to run sudo app install erlang first.
>
> **[2:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=178)** And once this installation is complete, only then will you be able to install RabbitMQ.
>
> **[3:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=184)** Everything seems to have gone through smoothly, I'm going to run sudo app install and install the RabbitMQ server.
>
> **[3:11](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=191)** Once this installation goes through, we're ready to start the RabbitMQ server, sudo rabbitmq server will bring the server up and running.
>
> **[3:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=202)** Now RabbitMQ has a management interface that's not enabled by default.
>
> **[3:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=206)** When you install RabbitMQ on Linux, you'll need to do something special to get that set up.
>
> **[3:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=212)** I'm going to open up a new Linux terminal window on my WSL and I'm going to run sudo rabbitmq-plugins enable rabbitmq-management.
>
> **[3:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=221)** This will enable the RabbitMQ management plugin that will give us access to the administrative console.
>
> **[3:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/install-rabbitmq-on-macos-and-linux?u=76281980&t=228)** Once the plugin has been enabled, you should be able to head over to a browser terminal to local host 15672 and there is our RabbitMQ administrative terminal and we'll log in and see what to do next in the next movie.

> [!info]- Semantic Content
>
> **CLI Commands:** brew (6), sudo (6), apt (3), grep (1), apache (1)
> **Prerequisites:** install (11), set up (2), you'll need (2)
> **Code Keywords:** let (4), interface (1), default. (1)
> **Env Vars:** wsl (4), http (1), git (1)
> **Tools:** terminal (4)
> **Definitions:** is an  (2), is a  (1)
> **Code Identifiers:** macos (2)
> **Versions:** version 3 (1), 11.17 (1)

#### Set up an admin user for RabbitMQ
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=1)** - [Instructor] Let's now log into our RabbitMQ console and set up an admin user.
>
> **[0:05](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=5)** There is a default user with a default password created for you.
>
> **[0:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=9)** Guest is the username and the password is also guest.
>
> **[0:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=13)** Use that to log in.
>
> **[0:15](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=15)** Here we are in the Overview page.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=17)** We haven't processed any messages using the RabbitMQ broker, that's why everything you see is completely empty.
>
> **[0:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=23)** Click on the Admin tab, that's where we'll set up a new user.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=28)** You can see that the guest user is an administrator.
>
> **[0:31](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=31)** We'll set up a new Loonycorn user as an administrator as well.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=35)** Click on the option that you see here to add a user, and here you can specify a username.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=41)** I'm just going to set it as loonycorn.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=43)** Specify the password and confirm the password that you want for this user.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=49)** Next, specify the tag or role for this user, click on Admin from within this Set option.
>
> **[0:56](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=56)** You can see the details of the administrator here.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=59)** Just like with other technologies, the admin is the most powerful user.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=63)** Go ahead and close this dialogue and notice that we've added administrator as a tag for the Loonycorn user.
>
> **[1:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=70)** Click on the Add user button.
>
> **[1:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=73)** Now you can see that this Loonycorn user has no access, and that's something that we need to configure.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=80)** Click through to the Loonycorn user and you can see the message here, "This user does not have permission to access any virtual hosts."
>
> **[1:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=86)** We need to click on Set permission to grant this permission.
>
> **[1:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=90)** Click on the Set permission button here and scroll down and click on Set topic permission as well.
>
> **[1:38](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=98)** So now this admin user has all of the right permissions let's log out as the guest user and log in as the Loonycorn admin user.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=107)** Username is loonycorn, password, whatever password you have specified.
>
> **[1:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/set-up-an-admin-user-for-rabbitmq?u=76281980&t=111)** Go ahead and log in and you should be able to log in just fine.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), scroll down (1)
> **Prerequisites:** set up (3), configure (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Configuring the CeleryExecutor for Airflow
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=1)** - [Instructor] Here I am in the Airflow.CFG file.
>
> **[0:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=3)** This is the configuration file where we configure the Celery executor.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=8)** Now here in this file notice on line 24 I have the executor set to the local executor.
>
> **[0:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=14)** This is what we did at the start of this course.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=16)** I'm going to change this executor.
>
> **[0:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=18)** Use the Celery executor.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=20)** Now that we have Celery more or less configured on our local machine there is still a little bit of configuration left.
>
> **[0:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=27)** I'll do that in a bit.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=28)** After updating the executor configuration setting you'll need to specify the broker URL For Celery go to the broker URL property and set it to what you see here on screen.
>
> **[0:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=41)** The broker URL uses the Loonycorn username.
>
> **[0:44](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=44)** That is the admin that we had set up.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=46)** And password is just password.
>
> **[0:49](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=49)** Make sure you specify the username and password that you have configured.
>
> **[0:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=53)** This broker URL is what Celery uses to point to the RabbitMQ server.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=59)** Next, we need to specify the result backend for Celery.
>
> **[1:03](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=63)** This is what Celery uses to send updates on Airflow tasks.
>
> **[1:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=68)** Make sure that you point to your PostgreSQL metadata database.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=72)** PostgreSQL is running on local host 5432 for me and the super user is Loonycorn with the password password.
>
> **[1:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=81)** Make sure you specify your username and password here.
>
> **[1:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=84)** In order to apply these configuration changes to Airflow we'll need to restart the Airflow scheduler and once the scheduler is up and running we'll need to restart the Airflow web server as well.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/configuring-the-celeryexecutor-for-airflow?u=76281980&t=97)** With this done, we are now ready to give the final touches to our Celery setup and execute our Airflow tasks on Celery.

> [!info]- Semantic Content
>
> **Env Vars:** url (4), cfg (1)
> **Prerequisites:** configure (1), you'll need (1), set up (1), setup (1)
> **CLI Commands:** make (3)
> **File Paths:** airflow.cfg (1)
> **Code Keywords:** super (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Executing tasks on a single Celery worker
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=1)** - [Instructor] The next thing that we need to set up before we can use the Celery executor is Flower.
>
> **[0:06](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=6)** Flower is a web-based monitoring and administration tool for the Celery distributed task queue system.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=12)** It gives you a user-friendly interface to monitor the activity and status of Celery workers, tasks, and queues in real time.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=20)** airflow celery flower is the command that you have to run to set up Celery on your local installation.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=28)** Now that Flower is up and running, let's open up a new tab and access this administration UI.
>
> **[0:33](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=33)** Go to localhost:5555, and here is the Flower user interface.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=39)** Here is the main dashboard which shows you the status of all Celery workers.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=43)** We haven't configured any workers yet, that's why this is empty.
>
> **[0:46](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=46)** If you click on the tasks tab, you'll see all of the tasks that are executed and if you click on the broker tab, you'll see the broker URL that we had set up in the Airflow config file.
>
> **[0:59](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=59)** This is the broker URL that Celery uses to communicate with RabbitMQ.
>
> **[1:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=64)** Now, let's switch over to the terminal window, and make sure you are within your virtual environment.
>
> **[1:09](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=69)** I'm going to run a Celery worker, and this is the command to bring one worker up and running.
>
> **[1:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=77)** This is a single Celery worker, and we'll run our DAG on the single Celery worker first.
>
> **[1:23](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=83)** You can see the status of this one worker here in the Flower UI.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=87)** If you click through to the name of the worker, you should be able to see a bunch of statistics for this worker.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=94)** If you look at queues, you'll see that this worker uses the default queue.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=100)** Now, let's head over to our DAG in the Airflow UI.
>
> **[1:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=103)** Now, when we execute this DAG, it'll use the Celery executor to run.
>
> **[1:48](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=108)** So go ahead and unpause this DAG and let it run through.
>
> **[1:53](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=113)** You can see the branch that was selected was save_output_ as_csv, which means we should have some csv data in the output folder.
>
> **[2:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=121)** The Celery executor would have executed the task of this DAG on its single worker.
>
> **[2:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=127)** If you head over to the Gantt chart, you can see how the task was scheduled and executed on Celery.
>
> **[2:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=134)** Let's head over to the Flower UI and confirm that the tasks indeed ran on Celery.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=139)** Here is our single worker and notice that it has now processed six tasks.
>
> **[2:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=144)** If you head over to the tasks tab, you'll be able to see the tasks that were executed on this worker.
>
> **[2:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=150)** You get a lot of administrative information for each specific task, and you can get more detail if you click through to the individual tasks as well.
>
> **[2:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=160)** Back to the main dashboard tab.
>
> **[2:42](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=162)** Let's click through to the one worker that we have running on Celery, and let's take a look at the tasks on this worker.
>
> **[2:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=170)** Right now, there are no active tasks, that's why this page is completely empty.
>
> **[2:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=175)** But if I switch over to my Airflow UI and then trigger the DAG that I have set up, as the DAG is running, if you switch back quickly to your Flower UI, you'll be able to see that there are active tasks running on this one worker.
>
> **[3:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=192)** So you'll be able to see the UI change and process active tasks.
>
> **[3:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=196)** So different tasks in the original DAG will be active at different points in time, and you'll be able to see the execution in real time.
>
> **[3:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=204)** I'll now head over to the terminal window and hit control C and shut down the single Celery worker.
>
> **[3:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=210)** So far, we've been successful in executing our DAGs using Celery, but we have just one worker.
>
> **[3:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-a-single-celery-worker?u=76281980&t=216)** Let's now execute our tasks in a distributed manner with multiple Celery workers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (3), interface (2)
> **Env Vars:** dag (8), url (2)
> **Prerequisites:** set up (4)
> **UI Navigation:** click on (2), go to (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** as_csv (1)

#### Executing tasks on multiple Celery workers
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=1)** - [Instructor] I'm now going to run two salary workers on two different terminal tabs.
>
> **[0:04](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=4)** Here on my first tab I'm going to run the worker named Salary Worker one wait for the worker to be up and running.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=12)** Now I have another tab logged into my virtual environment and I'm going to run Salary Worker two here in this tab.
>
> **[0:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=20)** With both our workers up and running you should be able to see these workers in the Flower UI.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=26)** Notice that we have Salary worker one.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=28)** Salary Worker two.
>
> **[0:29](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=29)** Both of these are online.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=30)** Our original worker, the default assigned name is offline.
>
> **[0:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=35)** If you now switch over to the Airflow UI and trigger this tag run once again, you'll see that this tag will now be executed using multiple salary workers.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=47)** The branch that was executed was save output as stable.
>
> **[0:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=50)** Because we have multiple salary workers there would've been a lot of battle processing of tasks.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=55)** If you head over to the Gantt chart, you'll see that several tasks would've been executed In parallel, you can see that the three create table and the three insert data tasks were executed in parallel.
>
> **[1:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/executing-tasks-on-multiple-celery-workers?u=76281980&t=67)** And if you switch over to the Flower UI you'll see that the tasks were distributed across the two workers, Salary Worker one processed five of the nine tasks and Salary Worker two processed four out of the nine tasks.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Assigning tasks to queues
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=1)** - [Instructor] Now it's possible that you want much more control over how your tasks are assigned to the different workers.
>
> **[0:07](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=7)** You can also configure which task is assigned to which celery worker using queues.
>
> **[0:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=12)** Now what I'm going to do is stop the two celery workers that I have running.
>
> **[0:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=16)** I've stopped the first worker.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=17)** I'm going to go ahead and stop the second worker as well.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=21)** I'm going to bring up two new workers and assign them to specific queues.
>
> **[0:26](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=26)** I'm going to bring up the first worker, celery worker one.
>
> **[0:30](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=30)** Notice the dash Q flag.
>
> **[0:32](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=32)** This worker will receive tasks from queue A.
>
> **[0:36](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=36)** These are the queues that will be used by the RabbitMQ messaging broker to send tasks to celery.
>
> **[0:43](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=43)** Here's celery worker two.
>
> **[0:45](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=45)** And notice the dash Q flag.
>
> **[0:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=47)** This worker will receive tasks that are sent to queue B.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=51)** Wait for this worker to be up and running as well.
>
> **[0:55](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=55)** Now, within your DAG definition, it's possible for you to configure which queue a particular task should be sent to.
>
> **[1:02](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=62)** Now there is not much change to the actual code for the individual tasks, but I am going to change the operators to add an additional queue parameter.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=72)** Here is my new code.
>
> **[1:14](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=74)** Let's take a look at the queue parameter that I've assigned to each operator.
>
> **[1:18](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=78)** The first two tasks here have been assigned to queue A and the third task, the determine branch task has been assigned to queue B.
>
> **[1:27](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=87)** And in this manner, I have assigned all these different operators to different queues, either queue A or queue B.
>
> **[1:35](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=95)** So every operator has the queue property set, and it's set to either queue A or queue B, determining where exactly this particular operator or task will be executed.
>
> **[1:47](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=107)** Know what kind of parallelism is possible in your DAG.
>
> **[1:50](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=110)** Make sure that tasks that can run in parallel are assigned to different queues, so that they're actually executed in parallel.
>
> **[1:58](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=118)** Now this is the only change that I have made.
>
> **[2:00](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=120)** Let's go back to the graph view of our Airflow UI and trigger the execution of this DAG once again.
>
> **[2:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=128)** Back to the Flower UI.
>
> **[2:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=130)** Celery worker one and two are both online.
>
> **[2:13](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=133)** Worker one has processed a total of nine tasks.
>
> **[2:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=136)** This includes the tasks that were processed previously.
>
> **[2:19](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=139)** Worker two has processed a total of six tasks.
>
> **[2:22](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=142)** I'll leave it to you to look through the individual tasks to confirm this, but all tasks assigned to queue A will have been executed by Worker One, and all tasks assigned to queue B will have been executed by worker two.
>
> **[2:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=157)** We've successfully gotten control over which worker executes which task.
>
> **[2:41](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=161)** If you head over to RabbitMQ and select the Queues tab, you'll find that Queue A and Queue B have been created here within RabbitMQ.
>
> **[2:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/assigning-tasks-to-queues?u=76281980&t=171)** These are the cues that this messaging broker uses to pipe tasks through to celery workers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** dag (3)
> **CLI Commands:** make (1), find (1)
> **Prerequisites:** configure (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Summary and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=1)** - [Instructor] And with this demo, we come to the very end of this course on Data Engineering Pipeline Management with Apache Airflow.
>
> **[0:08](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=8)** Let's take a quick look at what we covered in this course.
>
> **[0:10](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=10)** We first used role-based access control to manage user access to the Airflow UI.
>
> **[0:17](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=17)** We saw the permissions associated with the default rules that Airflow provides.
>
> **[0:21](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=21)** We also created our own custom role.
>
> **[0:24](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=24)** We then worked with SLA Management in Apache Airflow.
>
> **[0:28](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=28)** We saw how we could track SLA breaches and configure email alerts for SLA misses.
>
> **[0:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=34)** We then saw how data-aware scheduling works with datasets.
>
> **[0:39](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=39)** We created producer pipelines that updated datasets and consumer pipelines that consumed these datasets and were scheduled once the datasets that it was waiting on were available.
>
> **[0:51](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=51)** Then we used plugin to configure Airflow with custom features, and we saw how we could build a CSV viewer right into our Airflow UI.
>
> **[1:01](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=61)** And finally, we scaled the execution of our DAGs in Apache Airflow by using the CeleryExecutor that allowed us to run tasks on a distributed framework.
>
> **[1:12](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=72)** Here we are at the very end of the course, but maybe you are interested in studying further.
>
> **[1:16](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=76)** Here are some other interesting courses on LinkedIn Learning.
>
> **[1:20](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=80)** Apache Kafka Essential Training: Getting Started will introduce you to the Apache Kafka message broking service, or if you'd rather do some big data processing, Introduction to Spark is a great course for you to watch.
>
> **[1:34](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=94)** Well, that's it from me here today.
>
> **[1:37](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=97)** I hope you had fun studying this course.
>
> **[1:40](https://www.linkedin.com/learning/data-engineering-pipeline-management-with-apache-airflow/summary-and-next-steps?u=76281980&t=100)** Thank you for listening.

> [!info]- Semantic Content
>
> **CLI Commands:** apache (5)
> **Env Vars:** sla (3), csv (1)
> **Prerequisites:** configure (2), getting started (1)
> **Code Keywords:** let (1), finally, (1)
> **Cross-References:** we covered (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance Your Data Engineering Skills]]
← [[Learning Apache Airflow]] | **7 of 10** | [[Data Engineering Project- Build Streaming Ingestion Pipelines for Snowflake with AWS]] →

## Appears In

- [[Advance Your Data Engineering Skills]]

## Related Courses

_Courses sharing skills:_

- [[Jira- Managing Custom Workflows]] — Workflow Management
- [[Learning Apache Airflow]] — Apache Airflow
