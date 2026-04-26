---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-versioning-lineage-and-quality-monitoring-for-ai
url: "https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 4/17/2025
learners: 5137
skills:
  - Data Lineage
  - Data Quality
  - Artificial Intelligence (AI)
  - AI Governance
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQHQ8Npt7hsEeA/learning-public-crop_675_1200/B4DZYhuOqeHwAY-/0/1744322489723?e=2147483647&amp;v=beta&amp;t=PJebZah1_PymfmREvJuxv849tcVVIlDpayVnB-l-udk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Working with Data- Engineering, Integration, and MLOps for AI]]'
prev_courses:
  - '[[Data Integration And Api Development For Ai Applications]]'
next_courses:
  - '[[Knowledge Graph Data Engineering for Generative AI Use Cases]]'
path_nav: '[{"path":"Working with Data- Engineering, Integration, and MLOps for AI","position":2,"total":5,"prev":"Data Integration And Api Development For Ai Applications","next":"Knowledge Graph Data Engineering for Generative AI Use Cases"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/data-lineage
  - skill/data-quality
  - skill/artificial-intelligence-ai
  - skill/ai-governance
status: not-started
created: 2026-04-21
---

![Data Versioning, Lineage, and Quality Monitoring for AI](https://media.licdn.com/dms/image/v2/D4D0DAQHQ8Npt7hsEeA/learning-public-crop_675_1200/B4DZYhuOqeHwAY-/0/1744322489723?e=2147483647&amp;v=beta&amp;t=PJebZah1_PymfmREvJuxv849tcVVIlDpayVnB-l-udk)

# Data Versioning, Lineage, and Quality Monitoring for AI

> Discover the importance of data versioning and how it impacts ML and AI workflows. Instructor Janani Ravi outlines key concepts such as snapshots, lineage, branching, and how to manage data versions effectively. Explore how to use data version control (DVC) to initialize Git, track files, and version data more efficiently. Get introduced to data lineage in Microsoft Fabric and uncover techniques a

> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai) | 1h 42m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Data Lineage
- Data Quality
- Artificial Intelligence (AI)
- AI Governance

## Table of Contents

### Introduction

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=1)** - [Instructor] Hi, and welcome to this course on data versioning, lineage, and quality monitoring for artificial Intelligence.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=8)** Now before we get to the course contents let's take a look at the prerequisites that you need to have to make the most of your learning.
>
> **[0:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=14)** Now this course assumes that you have basic familiarity and understanding of AI and ML solutions.
>
> **[0:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=20)** You understand the ML workflow.
>
> **[0:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=22)** You've built, trained, and deployed machine learning and AI models.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=27)** This course also assumes that you have a basic understanding of data and model maintenance.
>
> **[0:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=31)** You understand how data needs to be constantly refreshed and renewed to keep your models up to date.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/prerequisites?u=76281980&t=37)** And you have a basic understanding of model deployment and versioning.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### Course overview
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=1)** - [Instructor] Here is what the course includes.
>
> **[0:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=2)** We'll be covering three broad topics in this course, data versioning, data lineage, and data quality.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=8)** Data versioning ensures that datasets, models, and code are tracked over time, enabling reproducibility, collaboration and auditing in data science and machine learning projects.
>
> **[0:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=19)** In addition to understanding the concepts behind data versioning, in our course we'll implement a simple project using DVC, data version control, that allows teams to manage evolving data efficiently.
>
> **[0:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=32)** We'll then turn our attention to data lineage.
>
> **[0:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=34)** That provides visibility into the flow of data from its origin to its final use, helping organizations track transformations and ensure compliance and debug data issues.
>
> **[0:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=45)** In ours hands-on component, we'll see how Microsoft Fabric enables and implements data versioning on its platform.
>
> **[0:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=53)** And finally, we'll turn our attention to data quality.
>
> **[0:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=57)** Monitoring data quality is essential for detecting issues like schema changes, biases, and data drift that can impact model performance and decision making.
>
> **[1:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/course-overview?u=76281980&t=67)** We'll discuss key metrics that you need to track for your data, such as accuracy, completeness and timeliness, and see how you can maintain reliable, high-performing AI and data analytics systems.

> [!info]- Semantic Content
>
> **Code Keywords:** implements (1), finally, (1)
> **Env Vars:** dvc (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Importance of Data Versioning

#### Types of version control
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=0)** - [Instructor] You are likely already familiar with version control for files.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=5)** You've likely used version control systems such as Git, Mercurial or Azure DevOps within your organization.
>
> **[0:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=13)** As data becomes more important and more relevant to our projects, file version control needs to be extended to include a data version control.
>
> **[0:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=22)** But first, before we get there, let's talk about what exactly version control is all about.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=27)** Version control is a system that tracks changes to files over time.
>
> **[0:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=31)** This allows users to manage and revert to previous versions if needed.
>
> **[0:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=36)** For example, if developers have introduced a bug inadvertently in the latest version of their code, they can revert or move back to a previous version.
>
> **[0:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=45)** Version control systems enable collaboration by maintaining a history of modifications, preventing conflicts when multiple people work on the same project.
>
> **[0:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=54)** There are some important terms that you need to understand when working with version control.
>
> **[0:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=58)** A version is a snapshot of a file or project at a specific point in time that captures the state of the content at that moment.
>
> **[1:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=68)** This is what allows users to track changes and revert to previous states if needed.
>
> **[1:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=73)** Version control systems make use of repositories.
>
> **[1:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=76)** This is just a storage location that contains all versions of a file or project, including metadata about the changes that were made.
>
> **[1:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=84)** Repositories can be hosted locally on your machine or on a remote server to enable collaboration.
>
> **[1:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=91)** Commit in version control is the process of saving a new version of a file or a project to the repository.
>
> **[1:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=98)** Typically with a message describing the changes that you've made.
>
> **[1:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=102)** Every commit creates a unique record allowing developers to track their modifications over time.
>
> **[1:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=109)** The history in a version control system is a complete record of changes made to a file or project, including details about who made each change, then it was made, and any associated commit messages.
>
> **[2:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=122)** History helps in debugging, auditing, and understanding the evolution of a project.
>
> **[2:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=127)** There are three broad types of version control systems.
>
> **[2:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=130)** Local, centralized and distributed, local version control systems store all versions of a file within a single computer, making them very simple to set up and use without requiring an internet connection.
>
> **[2:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=143)** However, because there is no centralized repository, collaboration is not possible and the system has a single point of failure that is your machine.
>
> **[2:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=152)** This means that data loss is likely if the local machine crashes.
>
> **[2:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=156)** Centralized version control systems, on the other hand, use a single central repository that stores all versions of a file, allowing multiple users to collaborate by accessing and updating the repository over a network.
>
> **[2:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=169)** Now, this setup ensure consistency and centralized management.
>
> **[2:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=173)** However, it depends on network availability and there is a risk for data loss if the central server fails.
>
> **[3:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=180)** On the other hand, distributed version control systems provide every user with a complete local copy of the central repository, allowing them to work offline and commit changes locally before synchronizing their local changes with the main repository.
>
> **[3:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=197)** This of course, improves collaboration, redundancy, and fault tolerance, but requires additional disk space because every user maintains a full copy of the project history.
>
> **[3:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=208)** Here is a visualization of local version control.
>
> **[3:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=212)** The versions of your file are stored on your local machine, which means you do not need an internet connection to version your files.
>
> **[3:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=220)** But there is no central repository, meaning collaboration becomes difficult.
>
> **[3:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=225)** Centralized version control is an improvement over local version control because multiple clients can work on the same data.
>
> **[3:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=233)** The clients make their changes locally, and once they're ready to commit their changes, their changes are pushed out to the central repository.
>
> **[4:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=242)** In order to protect against data loss, it's important that the central repository is backed up and replicated.
>
> **[4:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=248)** Distributed version control combines the best of both worlds, of local version control and centralized version control.
>
> **[4:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=255)** There is a central repository that is the server that holds all versions of the files, which can be used to collaborate with multiple clients.
>
> **[4:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/types-of-version-control?u=76281980&t=264)** Every client has a complete local copy of the central repository, allowing the clients to work offline as needed and sync changes to the central repository when a network connection is available.

> [!info]- Semantic Content
>
> **Definitions:** is a  (6), means that (1), is an  (1)
> **CLI Commands:** make (2), git (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** set up (1), setup (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Key concepts in data versioning
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=1)** - [Instructor] We've spoken of versioning in general so far.
>
> **[0:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=3)** Let's move our attention to data versioning.
>
> **[0:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=6)** This involves tracking and managing changes to datasets over time to ensure reproducibility, traceability, and collaboration.
>
> **[0:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=15)** There are many important advantages to versioning the data that you work with.
>
> **[0:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=19)** The first thing of course is that it ensures reproducibility of the results that you get.
>
> **[0:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=25)** This allows models to be retrained and tested with the exact datasets used in previous experiments.
>
> **[0:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=31)** Data versioning helps with experiment tracking because it allows you to compare different dataset versions to analyze their impact on model performance.
>
> **[0:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=41)** Version data supports debugging and rollbacks.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=44)** If a dataset introduces errors or biases in your models, versioning allows rolling back to a previous clean version of your data.
>
> **[0:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=53)** Data versioning facilitates collaboration by allowing data teams to work in parallel by tracking dataset modifications, merging changes, and maintaining consistency.
>
> **[1:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=63)** Data versioning helps in enforcing regulatory compliance by maintaining lineage and version history.
>
> **[1:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=71)** And this ensures transparency in AI decision making.
>
> **[1:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=75)** Here are some key concepts and terms in data versioning.
>
> **[1:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=79)** Snapshots are immutable copies of a dataset at a specific point in time.
>
> **[1:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=84)** Allowing users to retrieve or restore historical data when needed.
>
> **[1:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=89)** We talk about versions of a file.
>
> **[1:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=91)** We'll talk about snapshots of data.
>
> **[1:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=94)** Lineage tracking captures the entire history of changes that you've made to your data, including transformations and dependencies applied.
>
> **[1:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=103)** This helps with data transparency and traceability.
>
> **[1:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=107)** You know exactly who made what change.
>
> **[1:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=110)** Branching and merging enables parallel development of different dataset versions, allowing users to experiment with changes before integrating them back to the main dataset.
>
> **[2:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=120)** Let's say you have datasets from different sources of the different features, and you'd like to analyze the impact of these different kinds of data.
>
> **[2:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=128)** You can do so in parallel.
>
> **[2:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=130)** Before you bring the data together to get your final dataset.
>
> **[2:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/key-concepts-in-data-versioning?u=76281980&t=134)** Data versioning goes along with metadata management, which is responsible for storing essential details such as version history, timestamp, and user modifications, allowing you to maintain organized and structured dataset records.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Snapshots, lineage, branching and merging, and metadata management
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=1)** - [Instructor] I'll dive into each of these in a little more detail, starting with snapshots.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=5)** Snapshots create fixed unchangeable records of a dataset at a specific point in time, ensuring historical integrity.
>
> **[0:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=14)** These are immutable data copies.
>
> **[0:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=17)** Snapshots make data reproducible and auditable and ensure consistent re-execution of analyses and models by preserving exact data states used in past experiments and workflows.
>
> **[0:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=30)** Snapshots serve as a safety mechanism to roll back and recover old data.
>
> **[0:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=35)** You can restore previous versions of data in case data is corrupted, there are unintended modifications or failures.
>
> **[0:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=43)** Snapshots enable change tracking by allowing side-by-side analysis of snapshots to detect data drift or inconsistencies that may creep into data over time.
>
> **[0:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=53)** And finally, modern snapshot implementations use incremental storage and only save the deltas or the changes to your data to minimize data redundancy and improve efficiency of storage.
>
> **[1:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=65)** Snapshots enable time travel, that is, going back in time to a previous version of the dataset, and this is often built into modern data storage systems.
>
> **[1:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=75)** For example, the Databricks data management platform enables time travel for data stored in delta tables.
>
> **[1:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=83)** Time travel is enabled via the Delta Lake open storage format, and every modification that you make to the data in the table is stored as a different version of the table.
>
> **[1:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=94)** The Snowflake data management platform also enables time travel and zero copy cloning via data versioning.
>
> **[1:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=102)** Microsoft Fabric, Microsoft's data management platform, also makes use of the Delta Lake format to enable data versioning and time travel via snapshots.
>
> **[1:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=112)** Next we'll turn to discussing lineage tracking and its importance.
>
> **[1:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=116)** This refers to tracking the origins of your data, capturing where exactly your data comes from, including source systems, ingestion pipelines, and transformations that you've applied.
>
> **[2:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=127)** Lineage tracking gives you a clear view of data movement across different stages in your pipeline, from raw ingestion to the final consumption of your data.
>
> **[2:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=137)** This also helps with impact analysis, that is, assesses how changes in upstream data affect downstream reports, dashboards and models.
>
> **[2:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=147)** Lineage tracking ensures that organizations meet audit and compliance requirements by maintaining a record of data modifications and their usage.
>
> **[2:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=156)** Lineage tracking also helps with troubleshooting of data by pinpointing issues in data transformations or integrations across systems.
>
> **[2:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=164)** Modern data management platforms have built-in lineage tracking systems.
>
> **[2:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=169)** For example, Databricks has the Unity Catalog Lineage that provides end-to-end data lineage across tables, views and notebooks.
>
> **[2:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=177)** Snowflake offers object dependencies and access history, which tracks lineage of views, tables, and role-based data access.
>
> **[3:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=187)** Microsoft Fabric offers Purview data lineage that integrates with Microsoft Purview to provide full lineage across all of the data that you have stored in Fabric.
>
> **[3:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=197)** And finally, Apache Spark offers event logs and query plans that tracks transformation steps in Spark jobs using directed acyclic graphs and structured query execution.
>
> **[3:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=208)** Apache Spark, as you know, is an open-source distributed computing platform for both batch and stream processing of data.
>
> **[3:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=215)** Moving on to branching and merging of data, branching allows users to create separate versions of a dataset for testing, experimentation, or development without affecting the main data.
>
> **[3:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=228)** These serve as isolated workspaces.
>
> **[3:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=230)** Parallel development allows multiple teams to work on different data transformations or machine learning models simultaneously without conflicts.
>
> **[3:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=239)** Branches preserve historical changes, while merging integrates validated updates back to the primary dataset.
>
> **[4:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=247)** This enables change tracking and auditing.
>
> **[4:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=249)** Merging ensures that changes from multiple branches are reconciled properly, maintaining data integrity and consistency.
>
> **[4:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=257)** Conflict resolution is an important part of merging to ensure that your final primary dataset is a valid one that can be used for downstream tasks.
>
> **[4:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=267)** Branching and merging allows teams to safely test modifications, compare different dataset versions, and revert as needed without disrupting production data.
>
> **[4:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=277)** Modern data platforms offer different kinds of support for branching and merging data.
>
> **[4:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=282)** Databricks allows cloning and MERGE INTO to create isolated data versions and merge changes back into your main dataset.
>
> **[4:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=292)** Snowflake enables branching via clones of tables and merging changes using Snowflake streams and tasks.
>
> **[4:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=299)** Microsoft Fabric supports short-term branching in its lakehouse.
>
> **[5:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=303)** It leverages Delta Lake capabilities to support experimental dataset versions and controlled merges.
>
> **[5:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=310)** Data versioning involves extensive metadata management.
>
> **[5:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=314)** This involves maintaining version history with timestamps, changes and contributors to ensure the reproducibility of your data.
>
> **[5:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=322)** Schema can evolve over time.
>
> **[5:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=325)** Metadata management records schema modifications and enables seamless transitions between dataset versions.
>
> **[5:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=332)** And finally, data lineage captures the full transformation history of data from ingestion to finally output.
>
> **[5:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=339)** Metadata management helps implement the data versioning concepts that we've spoken of so far, lineage, snapshots and all other features.
>
> **[5:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=348)** In addition, it helps with access control and governance because it stores metadata on user permissions and ensures secure and compliant data usage.
>
> **[5:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/snapshots-lineage-branching-and-merging-and-metadata-management?u=76281980&t=358)** And finally, metadata helps optimize queries and storage by tracking data partitioning, indexing and access patterns.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (4), from, (1)
> **CLI Commands:** make (2), apache (2)
> **Definitions:** is an  (2), refers to (1), is a  (1)
> **Env Vars:** merge (1), into (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Version control for ML and AI
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=1)** - [Instructor] We'll now discuss version control in AI and ML.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=5)** Model development, as you know, is different from software development, and the artifacts that you have to version are different.
>
> **[0:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=12)** Let's discuss software development first because that's something that's well known to us.
>
> **[0:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=16)** Version control here ensures that artifacts, such as source code and libraries, are tracked across different versions, allowing developers to manage changes systematically.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=27)** The build process in software development generates new artifacts, like object files and executables.
>
> **[0:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=34)** Version control helps maintain a history of modifications and ensure reproducibility, collaboration, and rollback capabilities if issues arise.
>
> **[0:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=43)** In machine learning systems, the artifacts involved are different.
>
> **[0:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=48)** Version control here ensures that artifacts, such as datasets that form the inputs and trained models that form the outputs, are systematically tracked, similar to how source code and executables are managed in software development.
>
> **[1:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=61)** As the training process evolves with different datasets, hyperparameters, and model architectures.
>
> **[1:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=66)** Version control helps maintain reproducibility, compare model performance, and enable rollback to previous states.
>
> **[1:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=73)** Versioning for AI and ML thus involves tracking and managing changes to several artifacts to datasets, models, code, and experiments to ensure reproducibility, collaboration, and model governance.
>
> **[1:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=87)** Comprehensive version control in AI and ML involves versioning datasets, raw, processed, and transformed datasets used for training and evaluation.
>
> **[1:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=97)** This can also include labels and annotations in supervised learning techniques.
>
> **[1:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=103)** Other artifacts include models, trained models, and their weights and checkpoints.
>
> **[1:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=108)** This can include model architectures and hyperparameter configurations and pre-trained models and fine-tuned versions or deployment-ready model for inference.
>
> **[1:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=117)** Versioning may include code.
>
> **[1:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=119)** This can be training scripts and Jupyter Notebooks, feature engineering and pre-processing code, ML pipeline code, such as EPL scripts, model training, and inference workflows.
>
> **[2:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=130)** Model deployment may include code for APIs and serving infrastructure.
>
> **[2:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=134)** Tracking experiments in ML models include hyperparameters, such as learning rate, batch size, performance metrics, maybe, accuracy loss, precision recall, model evaluation results, and any comparisons you've performed across versions.
>
> **[2:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=149)** This can include experiment logs, visualizations, and other reports.
>
> **[2:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=153)** You'll need to track the dependencies and environment, software dependencies like Python version, TensorFlow, or PyTorch version that you're using.
>
> **[2:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=161)** Library versions, this is usually tracked in requirements.exe files or Conda environment YAML files.
>
> **[2:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=168)** You may need to track hardware configurations, such as CPU and GPU settings, or Docker containers or virtual environments to reproduce your original model.
>
> **[2:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=177)** And of course, you'll need to track the model output artifacts.
>
> **[3:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=181)** This may be inference results from different model versions, error logs and failure cases for debugging, or decision-making artifacts in explainable AI applications.
>
> **[3:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=190)** We'll discuss some of these in more detail.
>
> **[3:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=193)** Version control for datasets is essential in AI/ML applications for reliability, performance, and governance of your models.
>
> **[3:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=202)** The performance of machine learning models can degrade over time.
>
> **[3:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=205)** That is model drift.
>
> **[3:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=207)** Your data might age, become older.
>
> **[3:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=210)** That's data drift.
>
> **[3:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=211)** Versioning can track changes in datasets over time, helping to detect and mitigate effects of data drift and maintain model accuracy by retraining your model on the right data versions.
>
> **[3:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=223)** Versioning allows multiple teams to work on different dataset versions without conflicts before updates are merged together.
>
> **[3:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=231)** For example, you can have a team working on cleaning raw data, another team working on experimenting with feature engineering, and so on.
>
> **[3:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=238)** Versioning gives you the ability to restore previous dataset versions for debugging, compliance, or reverting to a known good state.
>
> **[4:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=245)** And this is extremely important for the auditability of your data, essential for meeting compliance requirements.
>
> **[4:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=252)** Now we've spoken enough about version control for datasets.
>
> **[4:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=256)** Let's turn our attention to version control for models.
>
> **[4:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=259)** Here are some important terms you should be familiar with.
>
> **[4:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=261)** A model version refers to a single snapshot of a trained model.
>
> **[4:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=266)** The snapshot includes the model architecture, as well as its trained weight.
>
> **[4:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=271)** A model artifact is a sequence of logged model versions, the collection of model weights after each training run.
>
> **[4:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=280)** A registered model is a collection of linked model versions, the candidate model for a task in production.
>
> **[4:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=286)** So let's say you're performing some kind of regression analysis.
>
> **[4:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=289)** You might have different types of models with different model versions, all relating to the same regression analysis task.
>
> **[4:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=296)** That would be a registered model.
>
> **[4:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=298)** Model versioning helps track model predictions over time.
>
> **[5:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=302)** This logs model outputs across different versions to detect performance drift and maintain consistency across models.
>
> **[5:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=310)** Model versioning enables side-by-side evaluation of predictions from different model iterations to assess improvements or regressions in your models.
>
> **[5:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=320)** And finally, when you work with your model versions alongside metrics, like accuracy, precision, and recall, this helps track long-term model effectiveness.
>
> **[5:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=330)** Version control for models has several benefits.
>
> **[5:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=333)** This guarantees that the exact model version used in training is deployed in production, preventing mismatches.
>
> **[5:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=340)** After having deployed a model version to production, you can go back to previous model versions.
>
> **[5:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=344)** if you find that the performance of the new model has degraded, it has errors, or shows unexpected behavior.
>
> **[5:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=352)** Model versioning maintains a history of trained models, including architecture, hyperparameters, and performance metrics for reproducibility.
>
> **[6:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=361)** It also allows side-by-side evaluation of different model versions to select the most effective one for deployment.
>
> **[6:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=368)** Versioning in AI includes managing dependencies and environment.
>
> **[6:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=372)** This turns out to be extremely important to avoid portability issues.
>
> **[6:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=377)** You might have issues where a model works in your development environment but not on your test environment.
>
> **[6:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=382)** To avoid this, you need to track software libraries, frameworks, and system configurations to ensure that models can be reliably reproduced across different setups.
>
> **[6:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=393)** Every model has dependencies, and dependencies can conflict.
>
> **[6:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=397)** One way to prevent compatibility issues is by specifying exact package versions.
>
> **[6:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=402)** Let's say TensorFlow 2.8 versus 2.9.
>
> **[6:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=405)** In tools like requirements.exe, Conda YAML files, or Docker files, environments can be preserved and reproduced using containerization techniques, like Docker.
>
> **[6:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=415)** This creates a fully isolated and portable environment, including the operating system, dependencies, and configurations, ensuring consistency across different machines.
>
> **[7:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=425)** Another option to manage environments is to use virtual environments using venv or Conda to isolate Python dependencies within a single system.
>
> **[7:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=435)** Virtual environments are lighter but less portable as compared to containers.
>
> **[7:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=440)** When you train or tune multiple models, you'll work with experiments and runs.
>
> **[7:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=445)** An experiment is an object that encapsulates the results of testing different configurations, datasets, models, or hyperparameters.
>
> **[7:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=453)** An experiment is usually made up of multiple runs.
>
> **[7:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=456)** A run is a single execution of model training or evaluation with specific parameters, datasets, and configurations.
>
> **[7:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=464)** Multiple runs typically exist within an experiment.
>
> **[7:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=468)** AI and ML workflows might be version controlled for experiments as well.
>
> **[7:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=472)** Versioned experiments store metadata, hyperparameters, datasets, and results for each run to ensure reproducibility.
>
> **[8:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=480)** Experiments allow side-by-side analysis of different model versions to identify the best configuration, and every run is a self-contained unit that manage code, data, and parameters together.
>
> **[8:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/version-control-for-ml-and-ai?u=76281980&t=493)** Runs help ensure that experiments are versioned holistically by linking model code, datasets, and hyperparameter settings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (1), this, (1), self (1)
> **Analogies:** such as (5), similar to (1), for example (1)
> **CLI Commands:** docker (3), python (2), find (1)
> **Definitions:** is a  (4), refers to (1), is an  (1)
> **Env Vars:** yaml (2), epl (1), cpu (1), gpu (1)
> **Versions:** 2.8 (1), 2.9 (1)
> **Exercise Files:** source code (2)
> **Prerequisites:** you'll need (2)

#### File-based and checksum hash-based versioning
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=1)** - [Instructor] Now that we've discussed the versioning of different artifacts associated with the ML and AI workflow, let's turn our attention back to data versioning and discuss a few different data versioning techniques.
>
> **[0:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=13)** File-based versioning utilizes traditional version control systems, like Git, to manage datasets by tracking changes to individual files.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=21)** This is effective for small datasets.
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=24)** However, this approach may face performance issues with large files due to storage and speed limitations.
>
> **[0:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=30)** Checksum or hash-based versioning generates unique identifiers, hashes, for data blocks or files, enabling detection of changes and ensuring data integrity.
>
> **[0:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=42)** This is efficient for identifying modifications, but requires robust management to handle large datasets and ensure consistency.
>
> **[0:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=50)** Database table versioning implements version control within databases by adding timestamp records or version numbers, allowing retrieval of historical data states.
>
> **[1:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=61)** This ensures data consistency within relational databases, but can, of course, increase complexity and storage requirements for your data.
>
> **[1:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=68)** And finally, Delta or change tracking stores only the differences, that is the deltas, between data versions.
>
> **[1:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=76)** This reduces storage needs and facilitates efficient updates.
>
> **[1:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=80)** This is efficient storage management, but this may complicate data retrieval due to the need for reconstructing full datasets from the deltas available.
>
> **[1:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=90)** We'll discuss each of these four options in a little more detail, starting with file-based versioning.
>
> **[1:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=95)** This technique often involves manual or scripted file management, where you use structured file naming conventions, such as datasetv1.csv, datasetv2.csv, or automated scripts to track dataset versions.
>
> **[1:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=109)** This works only with small datasets because large datasets lead to storage inefficiencies since each version creates a full copy of your data, increasing redundancy.
>
> **[2:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=122)** Another downside of this technique is that you do not have built-in mechanisms to capture schema changes, transformations, or dependencies, unless you explicitly log them separately.
>
> **[2:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=134)** This works well for quick iterations and individual experiments, but lacks the scalability for production grade AI/ML pipelines.
>
> **[2:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=143)** In enterprise-grade systems, you'll find that file-based versioning is often not used by itself, but maybe used under the hood by other techniques that use other methods to version data.
>
> **[2:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=154)** Here are some examples of technologies that rely either fully or partially on file-based versioning in some form or the other.
>
> **[2:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=163)** Git LFS or Large File Storage extends Git to handle large dataset files efficiently, while tracking version history.
>
> **[2:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=172)** DVC or Data Version Control use file-based versioning to manage datasets, model artifacts and experiments, alongside Code.
>
> **[3:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=181)** LakeFS provides Git-like versioning for data lakes, enabling snapshots and branching for structured and unstructured data.
>
> **[3:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=189)** Pachyderm implements file-based Git-like data versioning with lineage tracking for reproducibility in AI/ML workflows.
>
> **[3:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=198)** Delta Lake with Time Travel uses file-based versioning on Apache Parquet files to enable historical queries and rollback capabilities.
>
> **[3:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=207)** Next, we'll discuss checksum and hash-based versioning.
>
> **[3:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=210)** You should know that these two types are closely related, but they can have slight differences in emphasis.
>
> **[3:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=216)** In reality, these terms are used interchangeably.
>
> **[3:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=219)** Checksum-based versioning primarily focuses on data integrity by detecting changes using cryptographic or non-cryptographic hash functions, such as MD5, SHA56, or CRC32.
>
> **[3:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=232)** It ensures that data remains unchanged and can be efficiently compared across versions.
>
> **[3:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=237)** Hash-based versioning is a broader concept that includes using hashes as unique identifiers for different versions of dataset models or files.
>
> **[4:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=247)** It's often used for deduplication, immutability, and efficient version tracking, for example, in DVC, Pachyderm, or Git-like systems.
>
> **[4:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=256)** This type of versioning using checksum or hashes results in more efficient change tracking.
>
> **[4:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=262)** Instead of storing full copies of data, you can compare dataset versions by checking hash values, thus reducing storage costs and improving performance.
>
> **[4:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=272)** Because every dataset version gets a unique hash, this ensures reproducibility, auditability, and prevents unauthorized alterations of your data.
>
> **[4:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=282)** Duplicate files are identified by comparing hashes, avoiding redundant storage of identical datasets across experiments.
>
> **[4:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=290)** This is typically used in large-scale AI/ML pipelines, like DVC, Pachyderm, or LakeFS, to ensure version consistency across multiple environments and users.
>
> **[5:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/file-based-and-checksum-hash-based-versioning?u=76281980&t=301)** As you can see, DVC uses a combination of file-based and hash-based versioning.

> [!info]- Semantic Content
>
> **CLI Commands:** git (6), find (1), apache (1)
> **Env Vars:** dvc (4), lfs (1), md5 (1), sha56 (1), crc32 (1)
> **Code Keywords:** implements (2), let (1), finally, (1), extends (1)
> **Analogies:** such as (2), for example (1)
> **File Paths:** datasetv1.csv (1), datasetv2.csv (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Database table versioning and change tracking
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=1)** - [Instructor] You might have your data stored in a database or a data warehouse, and this requires database table versioning.
>
> **[0:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=7)** Database tables allow time travel queries for historical data.
>
> **[0:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=12)** This allows you to retrieve previous dates of a table using features like Delta Lake Time Travel.
>
> **[0:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=17)** This is what Databricks supports, Snowflake time-travel, and temporal tables on SQL Server.
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=24)** Database tables may also enable role-level versioning for change tracking, which means you can track modifications at the role-level using soft deletes, audit columns, or slowly changing dimensions.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=37)** Database tables often support schema evolution management, which allows controlled schema updates without breaking existing data pipelines By maintaining versioned table structures.
>
> **[0:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=50)** the transaction consistency that database tables offer ensures that models are trained on consistent snapshots of tables.
>
> **[0:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=58)** Rollbacks allow rollback to prior versions of data in case of errors or data drift in your models.
>
> **[1:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=66)** These storage systems offer performance optimizations in the form of storage and query performance using partitioning, clustering, and incremental storage techniques to efficiently manage large data sets across different versions.
>
> **[1:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=80)** Modern data platforms enable change tracking by storing only the differences, or deltas, between data versions.
>
> **[1:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=89)** In this context, let's understand what CDC, or change data capture, means.
>
> **[1:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=94)** This is a technique for incremental data processing that is used to track and capture changes to your data.
>
> **[1:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=100)** This can be inserts, updates, or deletes databases and data lake systems often support techniques for Change Data Capture.
>
> **[1:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=111)** For example, Databricks, a popular data management platform offers something called Change Data Feed or CDF.
>
> **[1:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=119)** Databricks uses the open-source Delta Lake format to store data and Delta Lake's CDF feature tracks a role-level changes, inserts, updates, and deletes between versions of a Delta table.
>
> **[2:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=131)** This allows you to easily capture and process incremental changes for downstream applications, data warehousing and real-time analytics.
>
> **[2:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=140)** Delta Live tables on Databricks simplifies Change Data Capture by providing built-in functionality for propagating changes and storing results as slowly changing dimension, type one or type two tables.
>
> **[2:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=154)** The type one approach to slowly changing dimensions updates the existing record with new data, overriding the previous values without keeping historical changes.
>
> **[2:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=164)** Type two preserves historical data by creating a new record for each change while marking the previous record as inactive.
>
> **[2:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=171)** This enables full history tracking Snowflake.
>
> **[2:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=175)** Another popular data warehousing platform offers CDC capabilities to track changes in tables.
>
> **[3:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=181)** You can use features like streams and tasks to capture and process these changes efficiently.
>
> **[3:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=187)** Snowflake's Time Travel feature allows you to access historical data, enabling you to compare current data with previous versions and identify changes that you may have made.
>
> **[3:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=197)** Microsoft Fabric also makes use of Delta Lake for storage, and thus it has the Change Data Feed feature that allows you to track a role-level changes made to your Delta tables.
>
> **[3:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=210)** Microsoft Fabric also supports Delta Live Tables, a framework for building reliable and maintainable data pipelines on Delta Lake.
>
> **[3:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=219)** This is built in functionality for propagating changes in your data and storing results.
>
> **[3:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/database-table-versioning-and-change-tracking?u=76281980&t=224)** Change Data Feed and Delta Live Tables are both features of Delta Lakes and it's this Delta Lake format that powers these features for both Microsoft Fabric as well as Databricks.

> [!info]- Semantic Content
>
> **Env Vars:** cdc (2), cdf (2), sql (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Data versioning best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=1)** - [Narrator] A quick word on some best practices you ought to follow when versioning your data.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=5)** Make sure you implement semantic versioning.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=8)** Adopt a structured versioning scheme, for example, major.minor.patch to clearly indicate the nature and impact of changes, ensuring consistency and clarity across data sets.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=21)** Automate your versioning process if possible.
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=24)** Utilize tools and scripts to automatically create versions at key stages of the data processing pipeline, reducing manual effort and minimizing the risk of errors.
>
> **[0:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=34)** And finally, maintain detailed metadata.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-versioning-best-practices?u=76281980&t=37)** Document all of the essential information for each version, including what changes you've made, processing steps that you've applied, the transformations and the rationality behind each modification to provide context and for future reference.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


### 2. Implementing Data Versioning using DVC (Data Version Control)

#### Introducing DVC
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=0)** - [Instructor] In the hands-on demo that follows, we'll see how you can use DVC, Data Version Control, to version your data sets.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=8)** And in this movie, I'll give you a quick overview of how DCV works.
>
> **[0:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=13)** DVC is an open source tool designed to manage data sets, machine learning models, and pipelines in a version control manner.
>
> **[0:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=22)** It extends traditional version control systems like Git to handle large data files and machine learning assets efficiently.
>
> **[0:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=29)** DVC is storage-agnostic in that's designed to work with various storage backends, including cloud storage, such as Amazon's S3, Azure's Block Storage, and Google Cloud Storage.
>
> **[0:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=41)** It can work with shared local file systems and even HDFS.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=44)** DVC seamlessly integrates with Git, the most popular version control system for code.
>
> **[0:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=50)** This allows you to manage your data and model versions alongside your code in a single repository, simplifying collaboration and workflow management.
>
> **[0:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=59)** Data changes are tied to specific code commits, making it easy to see what data was used for what particular model version.
>
> **[1:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=67)** DVC can be used for both data and model versioning.
>
> **[1:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=70)** It enables precise tracking of data sets and ML models, ensuring that every version is documented and accessible.
>
> **[1:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=78)** Teams can revert to previous data states or model iterations as needed.
>
> **[1:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=83)** With DVC, you can define and manage complex machine learning pipelines, codifying each step from data ingestion to model deployment.
>
> **[1:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=91)** You can thus automate your workflows and ensure that all processes are reproducible and transparent.
>
> **[1:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=98)** DVC extends traditional Git functionalities to handle large data files and machine learning assets efficiently.
>
> **[1:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=106)** By creating lightweight meta files that reference those large files stored externally, DVC allows for synchronized versioning of code data and models, alongside the traditional Git version control that you're used to.
>
> **[1:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=119)** Let's see how data and model versioning works with DVC.
>
> **[2:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=123)** DVC leverages Git for versioning metadata about your data, and not the data itself.
>
> **[2:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=130)** This means your Git repository is lightweight and DVC tracks changes to your data files, your large data sets, by storing their hashes and pointers to their location.
>
> **[2:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=140)** These metadata changes are committed to Git, allowing you to track your data versions alongside your code.
>
> **[2:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=147)** In DVC, your trained machine learning models are treated as data artifacts.
>
> **[2:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=151)** DVC can then version these model files just like it would any other data file.
>
> **[2:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=157)** This allows you to track different versions of your models, compare their performance, and easily revert to previous model versions as needed.
>
> **[2:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=164)** Because DVC versions, both the data and the model files, along with your training code that's stored in Git, you can fully reproduce the training process.
>
> **[2:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=174)** Checking out a specific version of your DVC repository will restore the correct data code and model files, thus allowing you to recreate the exact model training environment.
>
> **[3:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=184)** DVC's pipeline management features enable you to explicitly link specific model versions to the data versions they were trained on.
>
> **[3:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=193)** This is crucial for understanding model performance and tracking how changes in data affect your models.
>
> **[3:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=199)** You can easily see which data was used to train a given model version.
>
> **[3:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=203)** Let's talk a little more about pipeline management with DVC.
>
> **[3:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=207)** DVC allows you to define your entire machine learning or data processing workflow as a series of stages.
>
> **[3:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=214)** Each stage is a step in your pipeline, such as data pre-processing, model training, validation, et cetera.
>
> **[3:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=221)** DVC then explicitly tracks the dependencies between the stages of your pipeline.
>
> **[3:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=226)** It knows which data files and code are used as input for each stage and which files are produced as output.
>
> **[3:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=234)** The pipeline definition, along with the version data and code, allows you to reproduce your entire workflow from scratch.
>
> **[4:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=241)** DVC will automatically execute the necessary stages in the right order, giving you consistent and reliable results.
>
> **[4:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=249)** What's really cool about DVC is its deep integration with Git.
>
> **[4:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=253)** DVC cleverly uses Git to manage the metadata about your data files, the hashes, the file parts, et cetera, but not the actual data itself.
>
> **[4:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=261)** This keeps your Git repository small and manageable, even when you're dealing with massive data sets.
>
> **[4:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=267)** So Git tracks what change the metadata while DVC handles where the data is stored.
>
> **[4:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=273)** Because DVC integrates with Git, you can version your data and model files alongside your code in the same Git repository.
>
> **[4:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=280)** A specific Git commit can represent a specific version of your code, and you'll use DVC push to store the corresponding data used to train the model represented by our code.
>
> **[4:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=292)** Every time you make a change to your data or model files and use DVC to track it, the metadata changes are committed to Git.
>
> **[4:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=299)** This gives you a complete history of your data and model versions, allowing you to easily revert to previous states or compare different versions.
>
> **[5:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=307)** Just like with code, you can use Git branches to experiment with different versions of your data and models.
>
> **[5:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-dvc?u=76281980&t=313)** You can create a new branch, modify your data, train a new model, and merge the changes back to your main branch if you're happy with the results.

> [!info]- Semantic Content
>
> **Env Vars:** dvc (26), dcv (1), hdfs (1)
> **CLI Commands:** git (17), make (1)
> **Code Keywords:** extends (2), let (2)
> **Analogies:** such as (2), just like (2)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Initialize git and DVC
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=1)** - [Instructor] In this demo, we'll see how you can version your data using DVC.
>
> **[0:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=4)** DVC works in tandem with Git, so you need to have Git installed before you can work with data version control.
>
> **[0:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=11)** In any project where you use DVC, you'll use Git to version your code files, and you'll use DVC to version your data files.
>
> **[0:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=19)** Let's take a look at the Python version I have installed.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=21)** Make sure you have a fairly recent version of Python.
>
> **[0:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=23)** Python 3.10.9 is what I have.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=27)** Next, I'm going to use the python -m command to create a virtual environment called dvc_env, and it's within this environment that I'll install and work with DVC.
>
> **[0:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=38)** If you're on a Mac or a Linux machine, use the source command to activate the virtual environment.
>
> **[0:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=43)** If you're on a Windows machine, you'll simply run the activate.batch file.
>
> **[0:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=48)** Before you can use DVC, you need to have Git installed on your machine.
>
> **[0:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=52)** You can see that I have a pretty recent version of kit already available, 2.39.2.
>
> **[0:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=58)** At this point in time, I do not have DVC installed, so if I were to run dvc --version, you can see that I get command not found: dvc.
>
> **[1:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=68)** Now installing DVC is very straightforward.
>
> **[1:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=70)** All you need to do is pip install.
>
> **[1:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=73)** So pip install dvc will get you the latest version of DVC available.
>
> **[1:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=78)** Once you've run the pip install, you should be able to run dvc --version within your virtual environment, and you can see I have a recent version of DVC, 3.59.1.
>
> **[1:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=90)** As long as you have DVC 3, the steps that I'm going to run here in this demo should work for you.
>
> **[1:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=95)** If you're working on a data project, you likely have a subdirectory dedicated to that project, and that's what I create here, my-dvc-project, and I'm going to cd into this subdirectory.
>
> **[1:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=105)** This is going to be my current working directory.
>
> **[1:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=108)** The first thing I'm going to do here is initialize a Git repository, a local repository, by running the git init command, You can choose to connect up a remote repository on GitHub or anywhere else corresponding to this local repository, but I won't really be doing that.
>
> **[2:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=122)** We'll focus on DVC.
>
> **[2:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=124)** ls -la will show me all files, including the hidden files, in my current working directory, and notice the hidden folder .git has been created.
>
> **[2:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=133)** This is the hidden folder that Git Version Control will use to store metadata and other detail.
>
> **[2:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=139)** Just like we use git init to initialize a Git repository, if you'd like to use DVC in your Git project, you'll use dvc init to initialize DVC.
>
> **[2:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=150)** DVC works hand-in-hand with Git.
>
> **[2:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=152)** You'd use DVC to version your data.
>
> **[2:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=155)** DVC will create metadata files that tracks what version of your data corresponds to the code that you commit to Git, and these metadata files will be tracked in Git.
>
> **[2:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=166)** If you run the command to view files, including hidden files in your directory now, you'll see that DVC has created its own set of hidden files and folders.
>
> **[2:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=176)** .dvc is the code directory where DVC stores its configuration, cache links, and state tracking files.
>
> **[3:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=182)** .dvcingore is a file similar to the .gitignore file in Git.
>
> **[3:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=188)** This specifies files and directories that DVC should ignore or not look at while trafficking data.
>
> **[3:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=195)** I'll take a quick peek at the contents of this .dvc folder, and you'll find that there are three files here.
>
> **[3:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=203)** This .gitignore tells Git, which is responsible for file versioning, that DVC-managed data files and cache directories should be ignored by Git.
>
> **[3:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=214)** The config file contains settings that you configure in DVC.
>
> **[3:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=218)** We'll come back to that in a bit.
>
> **[3:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=219)** And the temp folder contains temporary storage that DVC uses.
>
> **[3:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=224)** Now, DVC metadata files should be committed to Git.
>
> **[3:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=228)** If you run git status, you'll find a number of new files added to Git tracking, the .dvcignore, the config file within the .dvc folder, and the .gitignore file within the .dvc folder.
>
> **[4:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=241)** The DVC metadata files are tracked by Git.
>
> **[4:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=245)** DVC is responsible for tracking your data files, so these configuration files have to be committed to your Git repository, and that's exactly what I've done here, committed the initial DVC configuration files to my local Git repo.
>
> **[4:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=258)** Now, of course, if you connect up a remote repository to your local repository, you can push these changes to your remote repository.
>
> **[4:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/initialize-git-and-dvc?u=76281980&t=266)** I've purposely not done that, so we can keep our focus on DVC and not worry about git remote.

> [!info]- Semantic Content
>
> **CLI Commands:** git (24), python (4), pip (3), find (2), make (1)
> **Env Vars:** dvc (28)
> **Prerequisites:** install (4), you need to have (2), make sure you have (1), configure (1)
> **Versions:** python 3 (1), 10.9 (1), 2.39.2 (1), 3.59.1 (1)
> **Code Keywords:** this . (2), let (1)
> **Analogies:** just like (1), similar to (1)
> **Code Identifiers:** dvc_env (1)
> **Tools:** github (1)

#### Tracking files using DVC
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=1)** - [Instructor] For this demo, we'll keep our data file simple.
>
> **[0:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=3)** It's just going to be a text file.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=5)** However, in your data project, this data file might be a CSV file or a parquet file that contains the data that you're going to visualize run analytics on, or maybe used to perform machine learning.
>
> **[0:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=16)** I'm going to create a data.txt file with just, "Hello, DVC," within it.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=21)** Notice my data.txt file in my current working directory.
>
> **[0:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=25)** And if you were to take a look at the contents of the file using catdata.txt, you can see it contains, "Hello, DVC."
>
> **[0:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=32)** When you first create your data file.
>
> **[0:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=34)** DVC does not automatically track your data file.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=37)** In order to have DVC start tracking your data file, you need to call the DVC add command and specify the name of the file that you want to track.
>
> **[0:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=46)** Dvc add will stage the files on your local machine so that DVC can start tracking this file.
>
> **[0:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=53)** Notice you can enable auto staging for your files by running DVC config core auto stage and set that to true.
>
> **[1:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=60)** We'll stick with manual staging.
>
> **[1:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=62)** When you run DVC add to have DVC start tracking your data files, DVC creates two metadata files to track your data file.
>
> **[1:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=71)** The first thing to observe is that there is a dot gitignore file in your current working directory.
>
> **[1:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=76)** This does not exist before.
>
> **[1:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=78)** This dot gitignore files tells git to ignore this data file data.txt, because it's being tracked by D vvc.
>
> **[1:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=87)** Another file that has been added is the data.txt.DVC file.
>
> **[1:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=92)** This file has the same name as your data file with a .DVC extension.
>
> **[1:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=98)** DVC uses this file as a pointer or a reference to the current version of your data file.
>
> **[1:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=104)** Let's take a look at this data.txt.dvc first and see how DVC uses this as a pointer.
>
> **[1:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=111)** The MD5 hash here represents a hash representation of the current contents of your data.txt file.
>
> **[1:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=119)** Our text file currently has a size of 12 bytes and its path is data.txt in the current working directory.
>
> **[2:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=126)** DVC uses the contents of this file to find the correct version of your file in version storage.
>
> **[2:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=133)** Since DVC is now responsible for tracking and versioning our data, this .gitignore file that it has generated tells Git ignore data text, you are not responsible for tracking it, I am.
>
> **[2:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=146)** DVC works with Git because GIT is responsible for versioning your other files, your code files, and DVC's metadata files.
>
> **[2:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=154)** So this .gitignore and data.txt.DVC should both be added to your Git version control.
>
> **[2:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=161)** Remember, GIT is responsible for all metadata files.
>
> **[2:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=164)** DVC is responsible only for your data files.
>
> **[2:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=168)** These data tracking metadata files should be stored and versioned along with the code files that use your data so your code versions and data versions can be kept in sync.
>
> **[2:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=179)** So let's go ahead and add data.txt.DVC and .gitignore to Git tracking and I'm going to commit these to my local Git repository.
>
> **[3:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=188)** So I'm tracking data.text with DVC.
>
> **[3:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=191)** At this point, all we've run is DVCadd.data.txt, which means it's tracking the data.txt file in our local machine.
>
> **[3:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=201)** This file hasn't been stored to any kind of remote storage.
>
> **[3:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=205)** Now, in order to push this data.txt file to a remote store, you need to create and configure a remote store for your DVC repository.
>
> **[3:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=213)** DVC supports a number of different locations that you can use as the remote store for your data.
>
> **[3:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=218)** You can choose to store your data on Amazon S3 or Google Cloud storage buckets, or you can store your data in a shared file system within your organization.
>
> **[3:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=227)** You'll of course need to configure the right credentials for DVC to connect to your remote storage.
>
> **[3:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=231)** Now in this demo, I'm going to use a folder in my local machine as DVC's remote store.
>
> **[3:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=238)** So a folder in the /temp directory called DVC Remote Store will serve as my shared remote storage.
>
> **[4:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=245)** This is of course not shared, this is just on my local machine, but you can imagine that this is some kind of shared drive.
>
> **[4:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=252)** In order to configure this folder as a remote storage location for DVC, you'll use the DVC remote add command.
>
> **[4:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=260)** My remote is the name of my remote storage and /temp/DVCremotestore is the path to my remote storage.
>
> **[4:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=269)** Just like you have a GIT remote repository on GitHub or Bitbucket, you can have a DVC remote repository on a shared file system or on the cloud somewhere.
>
> **[4:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=279)** My remote is the default remote for my current DVC repository.
>
> **[4:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=284)** And you'll find when you run Git status that the DVC remote add command that we ran has updated the DVC config file.
>
> **[4:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=294)** This configuration file has been updated to contain the details of the remote repository associated with DVC's local repository on our machine.
>
> **[5:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=304)** This is a change to DVC's configuration file and this has to be tracked by Git.
>
> **[5:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=309)** So I'm going to go ahead and add this to Git tracking.
>
> **[5:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=313)** I'll stage it with Git and I'm going to commit this to my Git local repository.
>
> **[5:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=319)** The next step is for us to ensure that the data.txt file that we have on our local machine is pushed out to the remote repository and this is a complete with A DVC push command.
>
> **[5:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/tracking-files-using-dvc?u=76281980&t=330)** Just like we have Git push pushing local changes to a remote Git repository like GitHub, we have DVC push that pushes data changes to DVC's remote repository.

> [!info]- Semantic Content
>
> **Env Vars:** dvc (38), git (3), csv (1), md5 (1)
> **CLI Commands:** git (16), find (2)
> **File Paths:** data.txt (12), catdata.txt (1), dvcadd.data.txt (1)
> **Code Keywords:** let (2), this . (2)
> **Tools:** github (2), bitbucket (1)
> **Definitions:** is a  (3)
> **Analogies:** just like (2), imagine (1)
> **Prerequisites:** configure (3)

#### Versioning data using DVC
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=1)** - [Instructor] Once you run dvc_push your data files are available in remote storage.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=5)** Now our remote storage happens to be in the tmp folder in our local machine.
>
> **[0:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=10)** So let's check the dvcremotestore.
>
> **[0:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=13)** Notice we have a file sub folder within there and you'll see that data.txt is present in this file's sub folder in a part that comprises of the data.txt files content hash.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=27)** That's the hash that starts with b9578.
>
> **[0:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=30)** If you remember this content hash is an entry in the data.txt.dvc file, and that acts as a reference to our data file.
>
> **[0:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=38)** The content hash in the data.txt.dvc file that is checked in with our code file is what allows dvc to know the right version of data associated with a particular version of your code.
>
> **[0:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=50)** Let's assume you set up a new Git repository and you'd like to access the current version of data.txt.
>
> **[0:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=57)** In order to simulate that, I'm going to get rid of the data.txt file in my current working directory.
>
> **[1:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=63)** If I run an ls -l command here, notice I have the data.txt.dvc, but I do not have my original data file.
>
> **[1:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=71)** All I need to do to get the latest version of the data file back in my current working directory is run the dvc_pull command.
>
> **[1:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=78)** Dvc_pull will check the content hash in data.txt.dvc and pull the right version of the data file back into my current working directory.
>
> **[1:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=88)** You can see data.txt is now back.
>
> **[1:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=90)** Let's see how data versioning works.
>
> **[1:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=92)** At any point in time, the training data for ML model or your analytics data might be updated.
>
> **[1:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=98)** And this is what I simulate here.
>
> **[1:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=100)** I've updated the contents of the data.txt file to say, "Hello DVC.
>
> **[1:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=104)** "This is an updated version."
>
> **[1:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=106)** When you update the data in your data file, you'll need to indicate to DVC that your content has changed, and you'll do this using dvc_add_data.txt.
>
> **[1:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=115)** Dvc will once again start tracking this data file for changes.
>
> **[2:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=120)** If you run git_status, you'll see that data.txt.dvc has been automatically modified by DVC to track this new version.
>
> **[2:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=131)** Data.txt.dvc contains the new content hash for your updated data file and this is what Git tracks if you remember.
>
> **[2:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=139)** So I've added this to Git and you can see I've staged this file with Git and I'm going to go ahead and commit this updated .dvc file I call git_commit to commit to my local repository.
>
> **[2:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=152)** Now the contents of data.txt.dvc have changed, so let's take a look at what they are.
>
> **[2:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=158)** Notice the content hash is now different.
>
> **[2:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=161)** It starts with 29288.
>
> **[2:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=163)** The size of our data file is larger.
>
> **[2:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=165)** It's now 40 bytes are not 12 bytes as it was previously.
>
> **[2:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=169)** Well, we added more text.
>
> **[2:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=171)** It goes without saying that the size will be larger.
>
> **[2:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=174)** The content hash, which is a reference to the original data, is important.
>
> **[2:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=179)** This is what the DVC remote storage will use to track the current version of the data file.
>
> **[3:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=185)** You can now use dvc_push to push the updated changes to your data to your dvc_remote.
>
> **[3:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=193)** I leave it up to you to check the folder that holds your dvc_remote.
>
> **[3:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=196)** You should find two sub folders with two different content hashes holding two different versions of your data.txt file.
>
> **[3:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=204)** Let's say you want to go back to an older version of your code and an older version of your data.
>
> **[3:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=209)** How would you do that?
>
> **[3:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=210)** Here is my Git log and let's say I want to go back to my commit, which starts with 324f7.
>
> **[3:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=217)** The way I do it in Git is to use git_checkout to check out that version of my code files and I run exactly that right now.
>
> **[3:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=226)** For each version of your code files, you have a corresponding data.txt.dvc file which references the correct version of the data file that you should be using.
>
> **[3:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=237)** If you look at the contents of data.txt.dvc, notice that it points to our older version with the content hash that starts with 52b95.
>
> **[4:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=247)** This is the text file that just contains "Hello DVC."
>
> **[4:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=251)** Now, in order to get the same version of the data file on your local machine, you'll run dvc_checkout.
>
> **[4:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=257)** This will look at the data.txt.dvc file, find the content hash of the data version that you're interested in, and make that data.txt file available in your local repository.
>
> **[4:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=269)** So if you were to now look at the data.txt file that you have available locally in the current working directory, notice we have the old version that contains "Hello DVC."
>
> **[4:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/versioning-data-using-dvc?u=76281980&t=279)** And this is how you can use Git versioning in tandem with DVC versioning to get version control for your code files and your data files.

> [!info]- Semantic Content
>
> **File Paths:** data.txt (19), dvc_add_data.txt (1)
> **CLI Commands:** git (7), find (2), ls (1), make (1)
> **Code Identifiers:** dvc_push (2), dvc_remote (2), dvc_pull (1), dvc_add_data (1), git_status (1)
> **Env Vars:** dvc (7)
> **Code Keywords:** let (6)
> **Definitions:** is an  (2), is a  (1)
> **Cross-References:** go back to (2)
> **Prerequisites:** set up (1), you'll need (1)


### 3. Tracking Data Lineage

#### Introducing data lineage
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=1)** - [Presenter] After having explored and understood data versioning, let's turn our attention to data lineage.
>
> **[0:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=7)** Data lineage is the process of tracking and visualizing the origin, movement, and transformation of data throughout its lifecycle.
>
> **[0:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=15)** Showing how it's created, modified, and used.
>
> **[0:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=18)** Data lineage provides a comprehensive understanding of data's journey from source to destination.
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=24)** There are four basic components of data lineage.
>
> **[0:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=26)** The first is data origin.
>
> **[0:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=28)** This involves identifying the initial source of data such as databases, external systems, or files.
>
> **[0:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=35)** This is essential for identifying the authenticity of data and tracing where data comes from.
>
> **[0:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=42)** Next, we have data transformations.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=44)** This involves documenting processes that modify data, including cleaning, aggregation, and normalization.
>
> **[0:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=51)** These processes ensure data consistency and adherence to require standards.
>
> **[0:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=56)** Lineage helps document each step of the transformation process.
>
> **[1:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=60)** Next, we have data flows.
>
> **[1:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=62)** This refers to how data is moved between different systems or locations such as through ETL pipelines, data lakes, or data warehouses.
>
> **[1:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=71)** Lineage tracks these movements, mapping the movement of data between systems and processes, helps identify bottlenecks, optimize workflows, and maintain secure data transfers.
>
> **[1:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=83)** And finally, we have data targets.
>
> **[1:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=85)** These are the final destinations of the data such as reports, dashboards, analytical models, or other applications.
>
> **[1:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=94)** Lineage shows where the data ultimately ends up.
>
> **[1:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/introducing-data-lineage?u=76281980&t=98)** And so includes data usage where you understand how data is accessed, analyzed, and applied within an organization.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), from. (1), require (1), finally, (1)
> **Analogies:** such as (3)
> **Env Vars:** etl (1)
> **Definitions:** refers to (1)
> **Speakers:** - [presenter] (1)

#### Use cases and benefits of data lineage tracking
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=1)** - [Instructor] Let's now discuss why tracking data lineage is useful.
>
> **[0:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=4)** Lineage is essential for meeting regulatory requirements and ensuring data governance.
>
> **[0:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=9)** Lineage provides an audit trail of data movement and transformations, demonstrating how data is used and complying with privacy regulations like GDPR or CCPA.
>
> **[0:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=20)** GDPR stands for General Data Protection Regulation, which is a EU regulation that governs data privacy and protection for individuals within the EU.
>
> **[0:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=29)** CCPA is the California Consumer Privacy Act, which is a US state law that provides California residents with rights over their personal data, such as the right to know, delete, and opt out of data sales.
>
> **[0:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=42)** Once you've enabled lineage tracking on your data, if there is a problem with your data quality or reporting, lineage will help you trace the issue back to its source.
>
> **[0:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=51)** By following the data's path, you can identify where the error occurred, whether it was a data entry mistake, a faulty transformation, or a data integration issue.
>
> **[1:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=61)** Lineage helps with impact analysis as well.
>
> **[1:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=64)** When changes are made to data or systems, Lineage helps understand the downstream impact of those changes.
>
> **[1:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=71)** For example, you might modify a data source, then Lineage will tell you which reports, dashboards, or models will be affected.
>
> **[1:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=78)** Lineage helps with data discovery and understanding.
>
> **[1:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=81)** By visualizing the data's journey, users can gain insights into its origin, transformations, and relationships with other data assets, making it easier to discover and use data effectively.
>
> **[1:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=94)** With lineage, you're able to track where your data errors occur, and this understanding allows for targeted data cleaning, validation, and process improvements, resulting in higher quality data.
>
> **[1:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=106)** To summarize, here are some of the benefits of data lineage tracking.
>
> **[1:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=110)** By providing visibility into data transformations and movements, data lineage helps in identifying and rectifying errors promptly, leading to improved data accuracy and reliability, and thus, improved data quality.
>
> **[2:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=124)** Many industries, for example, healthcare and finance industries, are subject to regulations that require transparent data handling practices.
>
> **[2:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=133)** Data lineage assists organization in demonstrating compliance by maintaining detailed records on data flows and transformations.
>
> **[2:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=140)** Data lineage helps with efficient troubleshooting and maintenance of your workflows.
>
> **[2:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/use-cases-and-benefits-of-data-lineage-tracking?u=76281980&t=145)** With a clear map of how your data moves, IT and data teams can quickly pinpoint issues, assess the impact of changes, and perform system maintenance with minimal disruption.

> [!info]- Semantic Content
>
> **Env Vars:** gdpr (2), ccpa (2)
> **Definitions:** is a  (3), stands for (1)
> **Code Keywords:** let (1), delete (1), require (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### Data lineage vs. data provenance vs. data governance
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=1)** - [Instructor] Data lineage is closely associated with data provenance and data governance.
>
> **[0:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=6)** Let's take a moment to understand what exactly these terms refer to, how they're similar, how they're different, and what the overlap is.
>
> **[0:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=15)** First, a quick definition.
>
> **[0:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=16)** Data lineage is the process of tracking and visualizing the flow of data from its origin through various transformations to its final destination.
>
> **[0:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=26)** Data provenance includes detailed documentation of where the data came from, of data's origin and ownership.
>
> **[0:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=35)** Data governance, on the other hand, is a set of practices and policies, ensuring the secure and ethical use of data within an organization.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=44)** Let's first compare data lineage and data provenance.
>
> **[0:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=48)** Data lineage tracks the entire data journey from source to consumption, including transformations and dependencies.
>
> **[0:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=54)** Data provenance, on the other hand, focuses on the origin, history, and ownership of data, ensuring authenticity and traceability.
>
> **[1:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=62)** You can see that data lineage is a much broader concept and includes the idea of data provenance.
>
> **[1:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=69)** Now, data lineage provides a high level view of data movement across systems, workflows, and transformations.
>
> **[1:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=77)** Data provenance, on the other hand, offers granular tracking of how, when, and by whom data was created, modified, or accessed.
>
> **[1:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=87)** The primary use cases for data lineage include impact analysis, debugging, and regulatory compliance by tracking data dependencies.
>
> **[1:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=97)** On the other hand, the primary use case for data provenance is for data trust, security, and authenticity by verifying data integrity and origins.
>
> **[1:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=107)** Data lineage is often visualized using graphs or flow diagrams, showing data movement and dependencies.
>
> **[1:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=115)** Data provenance is typically detailed in metadata logs, or structured records documenting data changes.
>
> **[2:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=122)** Now, let's understand how data lineage compares with data governance.
>
> **[2:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=127)** Data lineage, as you know, tracks the flow and transformation of data from source to destination.
>
> **[2:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=131)** Data governance encompasses policies, standards, and controls to ensure data quality, security, and compliance.
>
> **[2:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=140)** The scope of data lineage is on how data moves and changes across pipelines, systems, and processes.
>
> **[2:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=147)** The scope of data governance covers data ownership, access controls, security compliance, and policies for overall data management.
>
> **[2:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=157)** The primary use case of data lineage, as you know, is for impact analysis, debugging, and transparency in data workflows.
>
> **[2:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=163)** The primary use case for data governance is to ensure data quality, regulatory compliance, and risk management across an organization.
>
> **[2:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=172)** Data lineage is often implemented via automated line tools and meta data management.
>
> **[2:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=179)** Data governance is enforced through frameworks, policies, role-based access controls, RBACs, and compliance audits.
>
> **[3:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-vs-data-provenance-vs-data-governance?u=76281980&t=187)** You can say that data lineage forms one part of data governance, but data governance has a broader scope and a much broader use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), from, (1), case. (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Techniques to track data lineage
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=1)** - [Instructor] Let's a quick overview of some of the techniques that can be used to track data lineage in data management systems.
>
> **[0:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=7)** The first is lineage tracking through data tagging.
>
> **[0:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=12)** This method relies on a transformation tool, tagging data after each modification, allowing lineage tracking by identifying these tags throughout the pipeline.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=21)** It's effective in controlled environments where a single transformation tool is consistently used.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=27)** However, this technique becomes unreliable in open systems with multiple tools as inconsistent tagging can lead to gaps in tracing data.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=37)** Self-contained lineage is tracked within a closed environment where all data storage, processing, and transformation tools are managed internally.
>
> **[0:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=46)** This ensures comprehensive lineage within the system, but does not account for data interactions outside the organization's infrastructure.
>
> **[0:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=54)** While effective for internally governance, this lacks visibility in hybrid or multi-cloud setups.
>
> **[1:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=61)** Passing based lineage analyzes transformation logic by reading code or scripts to reconstruct how data evolved.
>
> **[1:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=69)** It enables detailed end-to-end lineage tracing, but depends on understanding specific programming languages and tools.
>
> **[1:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=77)** While this technique is highly accurate, it lacks the flexibility in heterogeneous environments with diverse technologies.
>
> **[1:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=84)** And finally, we have pattern-based lineage where instead of analyzing transformation logic, this method detects lineage by identifying data movement patterns.
>
> **[1:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=95)** This is a technology agnostic technique and works across different ecosystems, but its accuracy depends on the visibility of patterns.
>
> **[1:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/techniques-to-track-data-lineage?u=76281980&t=104)** Complex transformations within code may go undetected, making this approach less reliable for detailed lineage tracking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), self (1), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Best practices for data lineage tracking
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=1)** - [Instructor] In this movie, we'll have a quick discussion about the best practices that you should follow for data lineage tracking.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=8)** The first, of course, is to embrace automation and move away from manual tracking.
>
> **[0:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=13)** Traditionally, organizations have relied on manual data lineage tracking, but with the increasing complexity of modern systems, this approach is no longer practical.
>
> **[0:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=22)** Automated tools, particularly advanced data catalogs, leverage AI and ML to integrate metadata from multiple sources, creating a logical lineage flow.
>
> **[0:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=33)** These tools can also analyze metadata to identify patterns and generate insights, improving accuracy and efficiency.
>
> **[0:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=40)** Since data is prone to errors, involving process and tool owners in lineage tracking ensures greater accuracy.
>
> **[0:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=48)** These individuals have the best understanding of the data their applications generate and can help detect inconsistencies or bugs.
>
> **[0:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=56)** Their insights are crucial for maintaining reliable and error-free lineage records, and all of this metadata validation is an integral part of maintaining data lineage.
>
> **[1:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=68)** Make sure you include all of your metadata sources.
>
> **[1:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=72)** To achieve precise lineage tracking, it's essential to capture metadata from all processes involving data transformation and transfer.
>
> **[1:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=80)** This metadata provides critical context, helping to reconstruct an accurate history of data movement.
>
> **[1:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=86)** Integrating these sources enhances transparency and ensures a more complete lineage structure.
>
> **[1:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=93)** Recording metadata in sequence, based on the stages of the data pipeline, creates a clear timeline and improves readability of your lineage.
>
> **[1:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=101)** This structured approach enables step-by-step validation, where high level relationships are confirmed first, before you dive into granular details.
>
> **[1:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/best-practices-for-data-lineage-tracking?u=76281980&t=110)** Progressive validation reduces errors and ensures a logical, systematic understanding of data lineage.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Data lineage tools
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=1)** - [Instructor] Lineage tracking is often integrated into modern data platforms.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=5)** However, if you're looking for specific tools for the purposes of lineage tracking, those are the ones that we'll discuss in this movie.
>
> **[0:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=12)** Let's first discuss the generations of data lineage platforms, which started off with basic version control.
>
> **[0:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=19)** The first generation of version control systems involved manual version tracking.
>
> **[0:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=25)** A single person was responsible for managing document access using a locking mechanism.
>
> **[0:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=31)** The approach was primitive and lacked collaboration features, making it inefficient for large teams or dynamic projects.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=37)** And really, lineage tracking was way beyond such systems capabilities.
>
> **[0:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=42)** The second generation of systems were collaborative, but still rigid.
>
> **[0:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=47)** These systems introduced multi-user collaboration, allowing in-house teams to work together on the same code base.
>
> **[0:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=54)** However, these systems struggled with merging changes efficiently, requiring developers to manually resolve conflicts before committing final versions.
>
> **[1:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=62)** This limitation made version control cumbersome for growing teams.
>
> **[1:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=66)** The third generation improved upon the shortcomings of the previous generation and allowed developers worldwide to collaborate on the same code base.
>
> **[1:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=75)** It introduced improving merging mechanisms, enabling teams to integrate changes even after committing, facilitating scalability and driving the growth of open source development.
>
> **[1:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=85)** And it's the last generation of version control mechanisms that have data lineage integration built-in.
>
> **[1:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=92)** This extends version control beyond code to the entire AI and data pipeline, integrating with platforms like Pachyderm.
>
> **[1:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=99)** These systems track all components involved in production, including cloud infrastructure, storage, data versions and algorithms, ensuring end-to-end traceability while maintaining immutability.
>
> **[1:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=111)** Here are some tools that can be used to track your data.
>
> **[1:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=115)** The Talend Data Catalog access a central hub for understanding your data's journey, automatically finding, organizing, and securing information about how your data is processed from various sources.
>
> **[2:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=127)** IBM Data Storage is designed for AI development, and the platform provides a comprehensive data management solution combining analytics, cloud capabilities, governance, and data ops within a containerized environment to ensure high quality data.
>
> **[2:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=143)** The Datameer platform simplifies data pipeline creation with a visual no-code interface fostering collaboration among data teams for data discovery, modeling, and transfer while offering a strong user experience and technical support.
>
> **[2:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-tools?u=76281980&t=157)** [neptune.ai](https://neptune.ai) is an experiment tracking tool that emphasizes collaboration and scalability, enabling users to monitor extensive model training, manage large data sets, and quickly compare metrics with easy integration into existing machine learning workflows and flexible data structure definitions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), extends (1), interface (1)
> **URLs:** [neptune.ai](https://neptune.ai) (1)
> **Env Vars:** ibm (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Data lineage in Microsoft Fabric
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=1)** - [Narrator] In this demo, we'll get a quick taste of how data lineage works in Microsoft Fabric.
>
> **[0:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=5)** We'll see how Fabric tracks data as it moves through different systems, processes, and transformations.
>
> **[0:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=12)** Microsoft Fabric is an all-in-one data and analytics platform that integrates various data services including data engineering, data science, realtime analytics, and business intelligence.
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=24)** Here, I'm logged in with my Microsoft Fabric free trial account at app.fabric.[microsoft.com](https://microsoft.com).
>
> **[0:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=31)** You create workspaces to work on the different projects that your team might collaborate on in Microsoft Fabric.
>
> **[0:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=37)** A workspace called My Workspace will be automatically created for you when you set up your Fabric free rial account, and that's the one I'm using.
>
> **[0:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=45)** Within this workspace, I've clicked on New Item, and I'm going to create a data lakehouse.
>
> **[0:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=50)** A data lakehouse is a unified platform for data storage, processing, and analytics that combines the best features of data lakes and data warehouses.
>
> **[1:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=60)** Data lakehouses can be used to store raw, structured, semi-structured, and unstructured data.
>
> **[1:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=67)** Here, my new lakehouse is called LooneyLineageLakehouse, and I'm going to upload some raw data in a file format to this lakehouse and then create a lakehouse table.
>
> **[1:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=79)** Let's head over to Files here, and if you click on Get data, you'll see an option to Upload files from your local machine to the lakehouse.
>
> **[1:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=89)** Select Upload files and select the file that you're interested in by clicking on this file browser dialogue.
>
> **[1:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=95)** This will bring up an Explorer dialogue on your local machine, and I'll select and upload this car_data.csv file that I have here.
>
> **[1:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=103)** Now, this file will now be available within the Files sub folder in my LoonyLineageLakehouse.
>
> **[1:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=111)** I click on Upload.
>
> **[1:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=112)** The file has been successfully uploaded and is now available.
>
> **[1:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=115)** Data in a lakehouse is typically stored in tables called Delta tables, and you can load the CSV data into a new table right here by clicking on the three dots.
>
> **[2:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=126)** Delta tables are a type of table in Delta Lake, which is an open-source storage layer that enhances Apache Spark and datalakes with ACID transactions.
>
> **[2:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=137)** I load the contents of this file into a new table called car_data.
>
> **[2:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=140)** I'll use the column header in the file to create the columns in the table.
>
> **[2:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=145)** And since this is a CSV file, the separator for the fields is the default comma.
>
> **[2:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=150)** Let's go ahead and load this data.
>
> **[2:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=152)** Microsoft Fabric makes use of Apache Spark as a processing engine.
>
> **[2:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=156)** Observe that we have this new table created here on the left, car_data.
>
> **[2:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=160)** We'll use Fabric notebooks to run code to read data from this car_data table.
>
> **[2:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=167)** Let's head over to our workspace where we've created this LooneyLineageLakehouse, and there, off to the top-right, you'll find a lineage view.
>
> **[2:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=176)** Click on the lineage view, and you can see the current lineage for your data.
>
> **[3:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=180)** The original data was loaded into a file and able in the lakehouse.
>
> **[3:05](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=185)** Every lakehouse in Microsoft Fabric exposes a SQL Analytics endpoint, which can be used to run SQL queries on that data.
>
> **[3:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=192)** Every lakehouse has a default semantic model.
>
> **[3:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=195)** A semantic model is just a structured, governed way to define relationships, calculations, and aggregations over the raw data stored in the lakehouse.
>
> **[3:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=204)** Now, these three components are the only components in our lineage view so far.
>
> **[3:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=209)** Back to the LoonyLineageLakehouse.
>
> **[3:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=212)** Here, I'm going to create a new notebook that connects to this lakehouse and reads data from the car_data table.
>
> **[3:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=220)** Notice on the left, under Lakehouses, we have 1 item added.
>
> **[3:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=223)** This is what indicates to us that our notebook is connected to the lakehouse that we just created.
>
> **[3:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=230)** I'll run a simple query on this car_data delta table.
>
> **[3:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=234)** Click on the three dots, select Load data, and let's select Spark.
>
> **[3:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=238)** This is the Spark query to query the data in the car_data Delta table.
>
> **[4:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=246)** This code runs on the Apache Spark cluster available in Microsoft Fabric that the notebook is automatically connected to.
>
> **[4:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=252)** Apache Spark is an open source distributed computing framework designed for fast and scalable big data processing.
>
> **[4:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=260)** This data will be loaded into df.
>
> **[4:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=262)** This is a Spark DataFrame, a tabular structure that runs in a distributed manner on a Spark cluster.
>
> **[4:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=268)** a Fabric notebook is automatically connected to a Spark cluster, and when you run this code, this code will run on Spark.
>
> **[4:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=276)** Notice you can see six Spark jobs were run to query and display this data.
>
> **[4:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=282)** Now we have this notebook that has access to the data in our LoonyLakehouse and can perform transformations on this data.
>
> **[4:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=291)** I'll now save this notebook with a meaningful name.
>
> **[4:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=294)** I'm going to call it LineageLakehouseNotebook.
>
> **[4:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=298)** I'll now click on My workspace, and this will automatically take me back to the lineage view because that's what we had opened previously.
>
> **[5:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=306)** Observe the change in the lineage view here.
>
> **[5:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=308)** The LineageLakehouseNotebook is connected to the LoonyLineageLakehouse, and can access and transform the data in that lakehouse.
>
> **[5:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=316)** If you click on the little icon on the LoonyLineageLakehouse, this will show you all of the child items that depend on or are connected to this lakehouse and all of the downstream items that will be impacted if there are changes to the data in this lakehouse.
>
> **[5:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=332)** I'll now head over to the LoonyLineageLakehouse, and I'm going to build a Power BI report using the data here in this lakehouse.
>
> **[5:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=341)** For that, I'll first access the SQL analytics endpoint that allows us to query data using SQL, and here, in the reporting tab, there is an option to create a new Power BI report right here within the Microsoft Fabric portal.
>
> **[5:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=356)** You should know that the way Microsoft Fabric works, the Power BI report that we'll build won't directly use the data in the lakehouse, it'll be connected to the default semantic model that has been automatically constructed for us using the lakehouse data.
>
> **[6:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=372)** Now, the report itself is going to be very simple.
>
> **[6:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=374)** I'll just drag a table onto the Power BI report, and I'll select all of the columns available here in the car_data table and include these as a part of the table.
>
> **[6:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=385)** All this report does is display the data in our car_data Delta table in a tabular format.
>
> **[6:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=392)** I'll hit Control + S, or Command + S to save this report.
>
> **[6:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=395)** I'm going to call this LineageLakehouseReport, and the report has been saved successfully.
>
> **[6:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=401)** We now have the report in our lakehouse, accessing the lakehouse data via the semantic model.
>
> **[6:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=407)** Let's head back to my workspace.
>
> **[6:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=409)** It's open to our lineage view, and here the lineage view has been updated to include our Power BI report.
>
> **[6:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=415)** The Power BI report connects to the semantic model of the LooneyLineageLakehouse, which is in turn built on top of the SQL analytics endpoint, which works with the raw data in the lakehouse.
>
> **[7:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/data-lineage-in-microsoft-fabric?u=76281980&t=426)** The lineage view thus gives you a quick overview of all of the downstream items that will be affected if the data in your lakehouse changes.

> [!info]- Semantic Content
>
> **Code Identifiers:** car_data (9)
> **Env Vars:** sql (5), csv (2), acid (1)
> **Definitions:** is an  (4), is a  (3), is called (1)
> **UI Navigation:** click on (6), select the (1)
> **CLI Commands:** apache (4), find (1)
> **Code Keywords:** let (5)
> **File Paths:** car_data.csv (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)


### 4. Monitoring Model and Data Quality

#### Issues with data: Processing and schema management
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=1)** - [Instructor] Data sourced from the real world, from real events, and real customers will always have issues, which means quality monitoring of the data becomes essential.
>
> **[0:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=10)** First, before we get to quality monitoring, let's talk about the potential issues that you'll encounter with data.
>
> **[0:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=16)** Now, these issues may occur in various phases or stages.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=21)** These issues can be due to data processing.
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=24)** These issues can be due to the schema of your data.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=27)** If not carefully handled, it's possible that you suffer data loss, and finally, the data itself might be biased.
>
> **[0:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=35)** Let's discuss the potential issues that we encounter during data processing first.
>
> **[0:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=40)** The data that you work with may be subject to a lot of variability.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=44)** Variability in data sources leads to mismatched schemas, missing standardization, and difficulties in versioning datasets.
>
> **[0:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=52)** These are the inconsistent data formats that you have to deal with.
>
> **[0:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=56)** Data in the real world might be incomplete or contain missing data.
>
> **[1:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=61)** Gaps in collected data can be due to sensor failures, user input errors, or incomplete logs, and these impact model accuracy and require the use of data imputation strategies.
>
> **[1:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=74)** Data pipelines often ingest the same records multiple times, leading to duplicate and redundant records.
>
> **[1:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=82)** This leads to versioning inefficiencies and incorrect model training.
>
> **[1:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=87)** The data that you're working with might be outdated.
>
> **[1:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=90)** Data might be collected at an earlier time and may not reflect the current situation or trends.
>
> **[1:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=96)** Using outdated data can result in models that are no longer relevant or accurate.
>
> **[1:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=103)** And finally, another potential issue is data drift from source changes.
>
> **[1:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=108)** Shifts in data collection methods, for example, changes in the survey questions that you ask, or the new logging systems that you set up, introduce inconsistencies that affect model performance over time.
>
> **[2:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=120)** Here are some best practices to keep in mind while processing your data.
>
> **[2:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=124)** Make sure you implement data cleaning techniques to identify and correct errors, inconsistencies, and missing values, and make sure your data processing operations are all automated.
>
> **[2:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=136)** As you process data in a pipeline, make sure you implement data validation rules and checks during the data collection process itself to prevent errors and inconsistencies from occurring in the first place.
>
> **[2:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=148)** This can include using input validation masks, range text, and other consistency checks that make sense.
>
> **[2:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=155)** Your data will likely contain missing values.
>
> **[2:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=158)** Make sure you handle missing data correctly with statistical imputation, such as mean/mode imputation, or interpolation as needed.
>
> **[2:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=167)** The data that you collect from source systems may not be sufficient for the purposes of your analysis, so make sure you augment datasets with synthetic data wherever feasible.
>
> **[2:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=177)** And of course, don't forget to implement a system for tracking and versioning data, including metadata about the data collection process, data sources, and any changes that you made to the data.
>
> **[3:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=188)** This can help ensure reproducibility and enable comparison of results across different versions of data.
>
> **[3:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=195)** From processing issues, let's move on and discuss schema issues.
>
> **[3:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=200)** Make sure you use a schemas correctly.
>
> **[3:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=203)** A schema defines a constrained structure and data types for your data.
>
> **[3:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=208)** This prevents inconsistencies, like storing the same information in different formats.
>
> **[3:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=212)** For example, you may have two different formats for dates, and you may store the same information again.
>
> **[3:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=218)** Other inconsistencies can include using different names for the same field.
>
> **[3:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=222)** Consistency makes data easier to process and reduces errors.
>
> **[3:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=227)** Use schema to enforce consistency in your data.
>
> **[3:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=231)** Once you have a schema in place, you can now enforce data validation rules.
>
> **[3:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=236)** This means checking if the incoming data conforms to the defined structure and types before it's stored.
>
> **[4:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=242)** For example, you can ensure that the price field is always a number and within a reasonable range.
>
> **[4:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=247)** This proactive validation catches errors early.
>
> **[4:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=251)** Use schemas to automate quality monitoring.
>
> **[4:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=254)** This enables a real-time validation checks to detect schema drift, unexpected values, or format mismatches.
>
> **[4:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=263)** A schema can help you enforce data governance.
>
> **[4:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=266)** It helps you track changes to the data structure and maintain a consistent definition of your data.
>
> **[4:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=271)** Schemas provide a clear framework for managing and controlling your data assets, crucial for compliance with regulations, like GDPR, and ensuring data quality over time.
>
> **[4:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=281)** If you mismanage your data schema definition, this can lead to a lot of issues.
>
> **[4:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=287)** For example, dropping or altering fields without versioning controls can lead to missing context, reduced explainability and auditability in AI/ML workflows.
>
> **[4:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=298)** You might have backward compatibility issues.
>
> **[5:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=301)** Older dataset versions may become incompatible with updated schema structures, making historical comparisons and retraining difficult.
>
> **[5:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=310)** Mismanaging schemas can lead to broken pipelines.
>
> **[5:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=313)** If your data processing pipelines rely on a specific schema, changes to that schema can break the pipeline.
>
> **[5:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=319)** Code that expects certain fields or data types might fail when encountering new or modified structures.
>
> **[5:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=326)** This requires pipeline updates and can lead to downtime.
>
> **[5:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=329)** Schema drift can affect the performance of your model.
>
> **[5:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-processing-and-schema-management?u=76281980&t=333)** Unexpected changes in feature availability, missing columns, or added attributes can lead to degraded model accuracy or misinterpretation of data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (7)
> **Code Keywords:** let (3), finally, (2), require (1)
> **Analogies:** for example (4), such as (1)
> **Env Vars:** gdpr (1)
> **Best Practices:** don't forget (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Issues with data: Data loss and bias
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=1)** - [Instructor] To continue our discussion of potential issues with data quality, let's talk about data loss.
>
> **[0:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=7)** Data loss is the unintentional or accidental deletion, corruption, or unavailability of data.
>
> **[0:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=14)** This can include the loss of raw data, processed data, or metadata associated with data.
>
> **[0:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=20)** Now, what are the ways in which data loss occurs?
>
> **[0:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=24)** Accidental deletion is all too common.
>
> **[0:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=26)** Human errors, misconfigured scripts, or unintended overrides can remove important datasets without recovery options.
>
> **[0:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=33)** Hardware crashes, disk failures, or cloud storage issues count here as well.
>
> **[0:38](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=38)** Errors in software used for data storage, processing, or transfer can cause data corruption or loss.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=44)** Cyberattacks or other malicious attacks, like ransomware or data breaches, can result in data deletion or encryption, effectively making the data lost.
>
> **[0:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=57)** If you have untracked schema changes, that's another source of data loss.
>
> **[1:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=62)** Dropping or modifying columns without version control can result in permanent loss of historical data or feature information.
>
> **[1:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=70)** Data loss can occur because of poor versioning and backup strategies.
>
> **[1:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=74)** Lack of proper data versioning, snapshots, or backups makes it impossible to restore previous dataset states.
>
> **[1:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=81)** And finally, your compliance regulations may force compliance-driven data expiry.
>
> **[1:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=88)** You may have automated retention policies or regulatory constraints that may remove data that is still needed for AI ML applications.
>
> **[1:37](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=97)** So here are some steps that you can take to protect yourself against data loss.
>
> **[1:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=102)** Implement robust data versioning mechanisms.
>
> **[1:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=105)** Use version control systems such as DVC, lakeFS, Delta Lake, or Snowflake Time Travel to track and recover dataset changes.
>
> **[1:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=113)** Make sure you automate your data backups.
>
> **[1:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=117)** Schedule frequent snapshots and incremental backups to ensure data can be restored in case of accidental deletion or corruption.
>
> **[2:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=126)** Enforce schema change management.
>
> **[2:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=128)** Use schema evolution frameworks that allow safe modifications to your schema while preserving historical data versions.
>
> **[2:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=136)** Enable access control and audit logs, restrict deletion modification privileges on your data, and maintain logs to track who accessed or altered your data so that you can always go back and check how data changed.
>
> **[2:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=152)** Make sure you configure the right data retention policies.
>
> **[2:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=155)** Define clear rules for data storage, archival, and lifecycle management to prevent unintended loss due to compliance-driven expirations.
>
> **[2:45](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=165)** Make sure you develop and regularly test a comprehensive disaster recovery plan.
>
> **[2:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=170)** This plan should outline the steps to take in the event of major data loss incidents, including procedures for restoring data from backups, communicating with stakeholders, and minimizing downtime.
>
> **[3:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=181)** And finally, let's talk about the last point here on maintaining data quality, unintended bias in your data.
>
> **[3:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=189)** Biases in your data can exist due to a variety of reasons.
>
> **[3:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=193)** Sampling bias is when the data collected is not representative of the population the model is intended to serve.
>
> **[3:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=201)** For example, if you're building a model to predict customer behavior but only collect data from your existing customer base, you might miss out on the behavior of other potential customers.
>
> **[3:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=211)** Measurement bias includes systematic errors in how data is collected or measured.
>
> **[3:36](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=216)** This could be due to faulty equipment, inconsistent data entry practices, or poorly designed surveys.
>
> **[3:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=222)** For example, if a survey question is phrased in a leading manner, this can influence the responses.
>
> **[3:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=228)** Now, if you have human-annotated datasets, that is, where humans have attached labels to your data, this may contain subjective or inconsistent labels, introducing bias into supervised learning models, such as regression or classification.
>
> **[4:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=244)** Bias can arise from the interaction between the model and its users.
>
> **[4:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=248)** For example, if a model is used to recommend products, and users from certain demographics tend to click on different types of products, the model might reinforce existing stereotypes by recommending similar products to those users in the future.
>
> **[4:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=263)** It's also possible for your data to be unbiased but the algorithm to introduce bias in your models.
>
> **[4:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=270)** This can happen due to the way the algorithm is designed or the choices made in its implementation.
>
> **[4:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=275)** For example, some algorithms might be more sensitive to certain features than others.
>
> **[4:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=280)** Biased data can lead to a variety of problems.
>
> **[4:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=283)** For example, models trained on biased data may not generalize well to real-world scenarios.
>
> **[4:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=289)** If the training data doesn't accurately represent the population the model will be used on, the model's performance can degrade significantly when deployed.
>
> **[4:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=298)** Bias in training data can cause models to perform well on certain demographics or conditions by failing in others, reducing generalizability.
>
> **[5:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=307)** Such problems are very hard to detect and debug.
>
> **[5:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=311)** And finally, biased models can lead to discriminatory outcomes, raising legal and ethical concerns.
>
> **[5:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-data-data-loss-and-bias?u=76281980&t=317)** For example, a loan approval system that is biased against certain demographics could result in unfair denial of loans as well as legal proceedings and liabilities.

> [!info]- Semantic Content
>
> **Analogies:** for example (6), such as (2)
> **Code Keywords:** finally, (3), let (2), continue (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** lakefs (1)
> **Env Vars:** dvc (1)
> **UI Navigation:** click on (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Issues with models
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=1)** - [Instructor] Just like you need data quality monitoring to track potential issues with data, you need model quality monitoring to track potential issues with models.
>
> **[0:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=10)** Here are some broad categories of model issues that you may need to deal with.
>
> **[0:14](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=14)** There are often challenges arising from the quality, representativeness, and biases in the data that was used for training models.
>
> **[0:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=23)** Problems may be inherent to the model's design and training process such as over-fitting, under-fitting, and interpretability; these are model-specific issues.
>
> **[0:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=33)** You may also encounter difficulties during the deployment and maintenance of models, and this can include scalability, monitoring, and adaptation to changing data distributions.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=44)** Each of these is worth discussing in more detail.
>
> **[0:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=47)** Let's start with the data-related issues.
>
> **[0:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=49)** Now, data quality problems can arise because of inaccurate, incomplete, or inconsistent data, and this can lead to unreliable model predictions and poor decision making.
>
> **[1:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=60)** Your training data may be biased, imbalanced, or non-representative data sets can result in models that favor certain groups, leading to unfair outcomes.
>
> **[1:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=72)** Changes in real world data over time is called data drift.
>
> **[1:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=76)** This can cause models to perform poorly if they're not retrained on updated data.
>
> **[1:22](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=82)** Gaps or errors in data can reduce model effectiveness, requiring imputation or data cleaning techniques.
>
> **[1:30](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=90)** You often tend to use feature engineering to improve your model's predictions, however, poorly selected or irrelevant features can limit model accuracy and generalizability.
>
> **[1:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=102)** Even if your data is just fine, you may have to deal with model specific issues.
>
> **[1:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=108)** For example, your model may be over-fitted or under-fitted.
>
> **[1:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=112)** Over-fitted occurs when a model learns patterns too well in the training data, and this includes noise, leading to poor generalization on new data.
>
> **[2:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=123)** Under-fitting occurs when the model is too simple to capture important patterns, resulting in high bias and poor accuracy.
>
> **[2:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=130)** Models tend to capture relationships that exist in the real world, and these relationships can change over time.
>
> **[2:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=137)** Concept drift occurs when the relationship between input features and the target variable shifts over time, causing model performance to degrade.
>
> **[2:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=147)** Your model performs its best when it's just deployed.
>
> **[2:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=152)** Models tend to decay or become less effective as real world conditions evolve, requiring retraining or adaptation.
>
> **[2:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=160)** Very powerful models often tend to be complex, such as deep learning models, and they act as black boxes, which makes it difficult to understand how exactly the model arrived at a decision or a prediction.
>
> **[2:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=174)** Model performance depends heavily on tuning parameters like learning rate, regularization, and architecture choices.
>
> **[3:02](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=182)** Certain models may be very sensitive to these design parameters or hyperparameters.
>
> **[3:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=188)** Models may struggle with slight variations in input data, leading to unpredictable behavior in real-world scenarios.
>
> **[3:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=196)** Models may not be robust to their data.
>
> **[3:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=199)** Machine learning workflows tend to be fairly complex and you shouldn't be surprised if you encounter operational issues while deploying and maintaining your model.
>
> **[3:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=209)** Models may struggle with scalability.
>
> **[3:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=212)** They may struggle to handle large volumes of real-time requests or growing data sets efficiently.
>
> **[3:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=219)** Continuous monitoring of models is essential.
>
> **[3:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=222)** This is required to detect data drift, concept drift, and the degradation of your model over time.
>
> **[3:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=228)** Moving models from development to production requires infrastructure optimization, versioning and integration with existing systems, and there might be many challenges that you encounter in this process.
>
> **[4:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=241)** In order to keep models relevant, models need to be constantly retrained on fresh data.
>
> **[4:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=248)** Keeping models up to date with evolving data distributions requires automated pipelines for retraining and redeployment.
>
> **[4:16](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=256)** Models today tend to be very large and complex, and these models demand high computational power, increasing cost of cloud infrastructure and inference operations.
>
> **[4:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/issues-with-models?u=76281980&t=267)** Resource and cost management might become a challenge.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), just like (1), for example (1)
> **Code Keywords:** let (1)
> **Definitions:** is called (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Importance of quality monitoring
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=1)** - [Presenter] Now that we know the potential issues that can occur with data and our models, let's talk about the importance of quality monitoring.
>
> **[0:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=9)** In the context of data and models, quality monitoring refers to the continuous assessment and validation of data integrity and model performance to ensure accuracy, consistency, and reliability in outputs.
>
> **[0:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=23)** There are various components to quality monitoring.
>
> **[0:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=26)** The first is data profiling, which is the process of analyzing data sources to understand their structure, content, and quality characteristics.
>
> **[0:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=34)** Data profiling helps you identify anomalies, inconsistencies, and patterns within the data, serving as a foundation for subsequent quality assurance measures.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=44)** Next, we have data validation: the practice of verifying that data meets predefined rules and constraints to ensure its accuracy and consistency.
>
> **[0:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=54)** This helps ensure that data aligns with business requirements and standards preventing erroneous data from influencing analysis and decisions.
>
> **[1:04](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=64)** Continuous monitoring is the ongoing process of tracking data and model performance to detect and address quality issues in real time.
>
> **[1:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=73)** This maintains the reliability and relevance of both data and models by promptly identifying deviations or drifts that can impact outcomes.
>
> **[1:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=83)** And finally, we have data governance, a framework of policies, procedures, and standards that oversee the management and quality of data issues.
>
> **[1:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=93)** Data governance is what you use to establish accountability and ensure compliance with regulatory and organizational standards.
>
> **[1:42](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=102)** Data profiling is all about understanding and knowing your data.
>
> **[1:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=106)** This is what you'll use to understand your data structure.
>
> **[1:49](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=109)** You'll analyze the schema, data types, and distributions to detect inconsistencies and anomalies in datasets.
>
> **[1:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=116)** Data profiling helps identify data quality issues.
>
> **[2:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=120)** You'll use this to detect missing values, duplicate records, and outliers that could impact the performance of your model.
>
> **[2:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=127)** You can use data profiling to track your feature distributions.
>
> **[2:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=131)** You'll monitor the statistical properties of your input features to ensure that they align with expected ranges and training data.
>
> **[2:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=139)** For example, if you have a field called Age, you can use this to ensure that your ages are not about say 100 years or below 0.
>
> **[2:28](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=148)** Bias mitigation involves identifying imbalances in your data representation.
>
> **[2:33](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=153)** That is you closely monitor underrepresented groups to prevent biased model predictions.
>
> **[2:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=160)** Detecting data drift involves comparing incoming data with historical trends to identify shifts that could degrade the accuracy of the model trained with this data.
>
> **[2:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=171)** Once you have data profiling in place, you can set up validation checks on your data.
>
> **[2:57](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=177)** Validation is used to ensure data accuracy.
>
> **[3:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=180)** This is what you'll use to verify that the data values are correct, meaningful, and free from errors before you use this data in a model.
>
> **[3:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=188)** Data validation should include validating the schema and format of your data.
>
> **[3:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=193)** This is where you check whether data follows predefined formats, types, and constraints, such as numerical ranges, date types, and so on.
>
> **[3:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=201)** Here's where you'd identify and process missing, incomplete, or corrupted data to prevent model degradation.
>
> **[3:29](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=209)** Data validation can include compliance checks as well.
>
> **[3:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=212)** This is where you'll ensure data meets regulatory standards, governance policies, and business rules to maintain ethical and legal integrity.
>
> **[3:41](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=221)** You should also validate that the data that you use for model training does not contain unintended information that could artificially inflate the performance of your models.
>
> **[3:52](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=232)** Data and models need to be continuously monitored.
>
> **[3:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=236)** This is important to track your data consistency.
>
> **[3:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=239)** This ensures incoming data remains stable and aligns with historical patterns to prevent unexpected variations.
>
> **[4:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=248)** If your model performance degrades beyond a point, you should know right away.
>
> **[4:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=252)** Continuously monitor key metrics of your model, accuracy, precision, recall, to identify signs of model drift or decay.
>
> **[4:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=261)** Include realtime anomaly detection in your monitoring.
>
> **[4:25](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=265)** Flag outliers, sudden data shifts, or unusual patterns that could impact prediction's reliability.
>
> **[4:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=272)** Maintaining transparency by tracking how model inputs and outputs evolve is important in building the trust of your customers and users in the predictions of your models.
>
> **[4:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=283)** Monitor all kinds of details for your models, feature distributions, performance strengths, so that you can proactively address any issues before they impact decision-making.
>
> **[4:54](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=294)** An important aspect of quality monitoring is data governance.
>
> **[4:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=298)** This is where you establish your data policies.
>
> **[5:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=300)** You'll define standards for data management, security, and usage to ensure consistency across the organization.
>
> **[5:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=308)** Make sure you implement the right access controls on your data.
>
> **[5:11](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=311)** This is what you'll use to regulate who can access, modify, or share data to maintain confidentiality and integrity.
>
> **[5:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=320)** And we've spoken about this a lot: Maintain data lineage.
>
> **[5:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=324)** Track the origin transformations and movements of data to ensure traceability and accountability for your analysis.
>
> **[5:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=332)** Standardize your data definitions by ensuring uniformity in naming conventions, formats, and structures to avoid any inconsistencies in your data.
>
> **[5:43](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/importance-of-quality-monitoring?u=76281980&t=343)** And finally, make sure that you regularly audit your data processes to ensure adherence to legal, regulatory, and organization requirements.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (1), such as (1)
> **Definitions:** refers to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [presenter] (1)

#### Metrics to track data and model quality
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=1)** - [Narrator] Let's discuss some of the metrics that you'll use to track your data and model quality.
>
> **[0:06](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=6)** You've deployed your model successfully.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=8)** What should you track?
>
> **[0:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=10)** Make sure you track all calls made to your models.
>
> **[0:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=13)** Track API requests, response times, and error rates to detect failures, ensure reliability, and analyze usage patterns.
>
> **[0:21](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=21)** Make sure you track missing data.
>
> **[0:23](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=23)** Monitor the presence of missing values in your input data and assess their impact on model performance, and flag data pipeline issues.
>
> **[0:32](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=32)** Track feature values and data drift.
>
> **[0:35](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=35)** Track statistical changes in input features to detect data drift outliers and shifts in the relationships between features and predictions.
>
> **[0:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=44)** Every model has its own key performance indicators.
>
> **[0:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=48)** This could be accuracy, error rates, or bias.
>
> **[0:51](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=51)** Make sure you measure these indicators to detect degradation, ensure fairness, and maintain the reliability of your model.
>
> **[0:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=59)** And then of course, monitor system health and operational metrics.
>
> **[1:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=63)** Monitor resource usage, uptime of your model, and throughput to ensure model availability, scalability, and efficient system performance.
>
> **[1:13](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=73)** When monitoring your AI models, there are three broad categories of metrics that you should track.
>
> **[1:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=78)** The first is data quality metrics.
>
> **[1:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=80)** This is what you'll use to assess the condition of data to ensure it's accurate, complete, consistent, and reliable.
>
> **[1:26](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=86)** You'll also track your model performance metrics to evaluate the effectiveness and efficiency of your predictive models.
>
> **[1:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=94)** And finally, you'll track operational metrics to monitor the practical aspects of data and model workflows to ensure smooth and efficient operations.
>
> **[1:44](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=104)** So what are some metrics you can use to assess data quality?
>
> **[1:48](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=108)** The first is accuracy that measures how closely data reflects the true values or real-world entities.
>
> **[1:56](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=116)** Completeness can be used to evaluate whether all required data is present without any missing values.
>
> **[2:03](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=123)** Consistency checks for uniformity of data across different data sets and systems.
>
> **[2:09](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=129)** Timeliness is especially important for real-time systems.
>
> **[2:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=132)** This assesses whether your data is up to date and available when needed.
>
> **[2:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=137)** Validity ensures that data conforms to defined formats, structures, and business rules.
>
> **[2:24](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=144)** Uniqueness verifies that each data record is distinct and does not contain any duplicates.
>
> **[2:31](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=151)** Integrity ensures the accuracy and consistency of data over its lifecycle, maintaining relationships and linkages between data elements.
>
> **[2:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=160)** Based on the kind of model that you've deployed, there are several metrics that you can use to track your model's performance.
>
> **[2:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=166)** Loss metrics for regression models can be the mean squared error that measures the average difference between predicted and actual values.
>
> **[2:55](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=175)** Cross-entropy is loss of the classification models.
>
> **[2:58](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=178)** This quantifies the difference between predicted probabilities and actual class labels and can be used as a measure of how well the classification model performs.
>
> **[3:07](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=187)** Regression R-squared evaluates how well a regression model explains the variance in the target variable, with higher values indicating better fit.
>
> **[3:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=197)** Measures like accuracy, precision recall, and F1 score assess classification performance by measuring correctness, that is precision, completeness, that is recall, and their harmonic mean, that is F1 score, to balance both aspects of precision and recall.
>
> **[3:34](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=214)** And then we have operational metrics that are common across all kinds of models.
>
> **[3:39](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=219)** Here you might want to track the data processing time, the time taken to collect, clean, and prepare your data for analysis.
>
> **[3:47](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=227)** You have the model training time that measures the duration required to train a model on a given data set.
>
> **[3:53](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=233)** For complex models trained on a large amount of data, model training time can be pretty significant.
>
> **[3:59](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=239)** We then have scalability metrics, such as latency and QPS, that assesses the system's ability to handle increasing volumes of data or more complex models without performance degradation.
>
> **[4:12](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=252)** System uptime monitors the availability and reliability of data and modeling systems.
>
> **[4:18](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/metrics-to-track-data-and-model-quality?u=76281980&t=258)** And finally, incident response time evaluates the speed at which issues or anomalies are detected and resolved within the data pipeline or the modeling process.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** finally, (2), let (1)
> **Env Vars:** api (1), qps (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Summary and further study
> [LinkedIn Learning](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=1)** - [Instructor] This brings us to the very end of this course on data versioning, lineage, and quality monitoring for AI.
>
> **[0:08](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=8)** Here is a quick overview of what we covered in this course.
>
> **[0:10](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=10)** We started off by discussing the importance of data and model versioning, and we discussed tools, techniques, and use cases of versioning.
>
> **[0:19](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=19)** We also performed hands-on implementation of data versioning using DVC, or data version control.
>
> **[0:27](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=27)** We then moved on to discussing data lineage tracking, which involved visualizing the flow or movement of data from its origin to its final destination, along with all the transformations along the way.
>
> **[0:40](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=40)** We got some hands-on experience here viewing how Microsoft Fabric tracks data lineage.
>
> **[0:46](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=46)** And, finally, we moved on to quality monitoring for data and models.
>
> **[0:50](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=50)** We discussed potential issues that could arise with data and models in the AI workflow, and what you should be tracking and monitoring to mitigate these issues.
>
> **[1:00](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=60)** If you're interested in AI systems and workflows, here are some other courses on LinkedIn Learning that you might find interesting, [[MLOps and Data Pipeline Orchestration for AI Systems]] and [[Secure Data Management for AI Implementation]].
>
> **[1:15](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=75)** Well, that's it from me here to today.
>
> **[1:17](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=77)** I hope you had fun starting this course.
>
> **[1:20](https://www.linkedin.com/learning/data-versioning-lineage-and-quality-monitoring-for-ai/summary-and-further-study?u=76281980&t=80)** Thank you for listening.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (2), we covered (1)
> **CLI Commands:** find (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** dvc (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Working with Data- Engineering, Integration, and MLOps for AI]]
← [[Data Integration And Api Development For Ai Applications]] | **2 of 5** | [[Knowledge Graph Data Engineering for Generative AI Use Cases]] →

## Appears In

- [[Working with Data- Engineering, Integration, and MLOps for AI]]

## Related Courses

_Courses sharing skills:_

- [[Operationalizing AI Governance- Strategy and Foundations by All Tech Is Human]] — Artificial Intelligence (AI), AI Governance
- [[Governing Agentic Ai Systems By All Tech Is Human]] — Artificial Intelligence (AI), AI Governance
- [[AI Data Governance, Compliance, and Auditing for Developers]] — Artificial Intelligence (AI), AI Governance
- [[AI Product Security- Building Strong Data Governance and Protection]] — Artificial Intelligence (AI), AI Governance
- [[Introduction to AI Governance]] — Artificial Intelligence (AI), AI Governance

---

[↑ Back to top](#)