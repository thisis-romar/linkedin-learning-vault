---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: low-code-no-code-data-literacy-with-knime-from-basic-to-advanced
url: "https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced"
duration_minutes: 138
duration: 2h 18m
level: Advanced
updated: 5/21/2024
learners: 4360
skills:
  - Knime
  - Data Literacy
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHUdP_8C67__Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715125641500?e=2147483647&amp;v=beta&amp;t=DpQebVY-l1om2yZviwVSu-k1O8KiglUNhhWiEnql16E"
linkedin_topic: Data Science
learning_paths:
  - '[[Data Science Professional Certificate by KNIME]]'
prev_courses:
  - '[[Data Science Foundations- Fundamentals]]'
next_courses:
  - '[[Introduction To Artificial Intelligence]]'
path_nav: '[{"path":"Data Science Professional Certificate by KNIME","position":2,"total":6,"prev":"Data Science Foundations- Fundamentals","next":"Introduction To Artificial Intelligence"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/knime
  - skill/data-literacy
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Low%20Code-No-Code%20Data%20Literacy%20with%20KNIME-%20From%20Basic%20to%20Advanced.md)

![Low Code/No-Code Data Literacy with KNIME: From Basic to Advanced](https://media.licdn.com/dms/image/v2/D560DAQHUdP_8C67__Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1715125641500?e=2147483647&amp;v=beta&amp;t=DpQebVY-l1om2yZviwVSu-k1O8KiglUNhhWiEnql16E)

# Low Code/No-Code Data Literacy with KNIME: From Basic to Advanced

> Low-code/no-code data analytics tools have been instrumental in enabling the transition from manual, code-heavy, and resource-intensive environments to an automated, scalable, and insights-driven focus. Instead of commands, low-code/no-code platforms have built-in functionality that enables users to start creating data science applications via a drag-and-drop interface. In contrast to coding appro

> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced) | 2h 18m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. KNIME Analytics Platform**](#1-knime-analytics-platform) (9 videos)
  - What is KNIME Analytics Platform?
  - What is a node? What is a workflow?
  - How to install KNIME Analytics Platform
  - Tour of the user interface of KNIME Analytics Platform
  - Build your first workflow with KNIME Analytics Platform
  - How to import and export KNIME workflows
  - The KNIME Community Hub
  - Collaboration and execution on KNIME Community Hub
  - How to install KNIME extensions
- [**2. Data Access**](#2-data-access) (2 videos)
  - Data access with KNIME: Reading files
  - Data access with KNIME: Accessing databases
- [**3. Data Cleaning**](#3-data-cleaning) (3 videos)
  - Data cleaning with KNIME: How to filter rows
  - Data cleaning with KNIME: How to filter columns
  - Data cleaning with KNIME: How to handle missing values
- [**4. Data Transformation**](#4-data-transformation) (2 videos)
  - Data transformation with KNIME: Numbers, strings, and rules
  - Data transformation with KNIME: How to split cells
- [**5. Workflow Documentation**](#5-workflow-documentation) (1 videos)
  - How to keep workflows tidy and documented
- [**6. Data Merging**](#6-data-merging) (3 videos)
  - Data merging with KNIME: How to concatenate tables
  - Data merging with KNIME: Value lookup
  - Data merging with KNIME: How to join two tables
- [**7. Data Aggregation**](#7-data-aggregation) (3 videos)
  - Data aggregation with KNIME: Simple aggregations
  - Data aggregation with KNIME: The GroupBy node
  - Data aggregation with KNIME: Pivoting
- [**8. Data Export and Visualization**](#8-data-export-and-visualization) (3 videos)
  - Data export with KNIME: Write to a CSV file
  - Data visualization with KNIME: How to create a scatter plot
  - Three steps to build an interactive dashboard with KNIME
- [**9. Flow Variables**](#9-flow-variables) (1 videos)
  - Flow variables in KNIME Analytics Platform: Concept and application
- [**10. Components**](#10-components) (2 videos)
  - What is a component in KNIME Analytics Platform?
  - Create, modify, and configure a component in KNIME Analytics Platform
- [**11. Workflow Control**](#11-workflow-control) (3 videos)
  - What is a loop?
  - Build, execute, and debug a loop in KNIME Analytics Platform
  - Switch workflow branch execution in KNIME Analytics Platform
- [**12. Error Handling**](#12-error-handling) (1 videos)
  - Error handling with try-catch in KNIME Analytics Platform
- [**13. Date and Time Data**](#13-date-and-time-data) (2 videos)
  - Handling date and time data with KNIME: Convert strings, extract date, and time fields
  - Handling date and time data with KNIME: Modify and filter date and time data
- [**14. Databases**](#14-databases) (2 videos)
  - Querying databases from KNIME Analytics Platform
  - Modify database tables from KNIME Analytics Platform

### 1. KNIME Analytics Platform

> [↑ Back to Table of Contents](#table-of-contents)

#### What is KNIME Analytics Platform?
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=0)** (mellow music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=5)** - Hi, in this video, you'll learn what KNIME Analytics Platform is, so let's get started.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=10)** KNIME Analytics Platform is a free and open source tool that enables you to access, blend, analyze and visualize data.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=18)** As a low codes, no-code platform, you build analysis in KNIME by connecting together nodes that perform discrete actions on data like accessing, transforming, merging, aggregating, visualizing, and so on.
>
> **[0:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=32)** Running your workflow of nodes now applies your step-by-step instructions to the selected data.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=38)** KNIME Analytics Platform supports multiple use cases that span in analytic depth from automating spreadsheets, simple data preparation, visualizing data, to training and applying machine learning algorithms.
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=52)** Access KNIME Community Hub to browse and learn from thousands of working examples, and you can connect with peers to get your questions answered on the KNIME forum.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=61)** In this video, you've learned what KNIME Analytics Platform is.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=65)** You can download KNIME today to get started.
>
> **[1:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-knime-analytics-platform?u=76281980&t=67)** (mellow music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (8)
> **Non-Speech:** (mellow music) (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - hi (1)

#### What is a node? What is a workflow?
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=0)** - In this video, you'll learn what nodes and workflows are in Knime Analytics Platform.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=10)** Let's jump in.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=12)** In Knime Analytics Platform, individual tasks on data are represented by nodes.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=17)** They're the smallest possible unit in Knime, and they've been created to perform all sorts of tasks, including reading and writing data, transforming it, training models, creating visualizations, and so on.
>
> **[0:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=31)** For example, an Excel reader node imports an Excel file, and a row filter node filters the rows.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=38)** A sequence of nodes creates a workflow.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=41)** A workflow as a sequence of nodes is the visual equivalent to a code script or a series of instructions.
>
> **[0:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=49)** Nodes can be connected via their input and output ports to form a workflow.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=55)** Only similar types of input and output ports can be connected.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=60)** For example, the data output of this node denoted by this black triangle can only be connected to another black triangle.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=68)** That's the data input of another node.
>
> **[1:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=71)** Also, notice that we can't execute the node's task if there's no connection going to one or more of the required inputs.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=80)** Each node has a status.
>
> **[1:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=82)** The traffic light shows the node status.
>
> **[1:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=85)** Red, when you add a new node to your workflow editor, its status is not configured.
>
> **[1:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=90)** Yellow, when you're configuring a node, the traffic light changes from red to yellow.
>
> **[1:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=95)** That means from not configured to configured, so it's now ready to run its task, but it hasn't done that yet.
>
> **[1:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=103)** Green, the green light indicates that the node has run its task successfully, and you can inspect the output.
>
> **[1:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=110)** A red cross means that the node has run the task, but the execution was unsuccessful.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=116)** Finally, you can view the output of a node in the node monitor.
>
> **[2:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=120)** This is useful to follow the progress and changes to your data along the different steps of your workflow.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-node-what-is-a-workflow?u=76281980&t=127)** In this video, you've learned what nodes and workflows are in Knime, so what are you going to build with them?

> [!info]- Semantic Content
>
> **CLI Commands:** node (13)
> **Code Keywords:** let (1), finally, (1)
> **Analogies:** for example (2)
> **Non-Speech:** (upbeat music) (2)
> **Definitions:** means that (1)
> **Speakers:** - in (1)

#### How to install KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=5)** - In this video, you'll learn how to install KNIME Analytics Platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=9)** Let's get going.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=10)** First, go to the KNIME website and click the download button.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=14)** If you want, you can fill out the form that opens and check the boxes to receive three getting started emails and information about new releases or events in your area.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=24)** Now accept the terms and conditions and click Download.
>
> **[0:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=28)** Select your operating system, Windows, Linux, or Mac, and the type of installer you want to download.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=35)** Now, click Download.
>
> **[0:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=36)** In this video we'll show you how to install KNIME for Windows, but the procedure for Linux and Mac is essentially the same.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=44)** While your installation files are downloading, have a look at the different things we recommend doing after installing KNIME on the Thank you for downloading page.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=55)** Select the folder to install KNIME.
>
> **[0:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=57)** Here I select the default location.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=60)** If you don't have the right permissions for the Program Files directory, specify a different location.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=66)** Now a couple of dialogues will open asking if you want to have a desktop shortcut created and have KNIME file extensions and URLs automatically recognized.
>
> **[1:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=76)** In the next dialogue, you can select how much memory should be allocated to KNIME.
>
> **[1:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=81)** KNIME proposes a default setting depending on your specific machine.
>
> **[1:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=85)** You can now see a summary of the installation settings.
>
> **[1:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=89)** If you want to change anything, click Back and if you're happy, click Install.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=96)** Click Finish to complete the installation and launch the program.
>
> **[1:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=100)** All done.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=101)** KNIME Analytics Platform is now installed on your machine.
>
> **[1:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=104)** After launching a workspace prompt opens for you to select a workspace.
>
> **[1:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=109)** This is the directory where KNIME will store your workflows.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=113)** In this video, you've learned how to install KNIME Analytics Platform.
>
> **[1:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=117)** You can now start getting familiar with the user interface.
>
> **[2:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-analytics-platform?u=76281980&t=120)** (gentle bright music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (11)
> **Prerequisites:** install (5), getting started (1)
> **UI Navigation:** select the (2), go to (1)
> **Code Keywords:** let (1), interface (1)
> **Non-Speech:** (gentle music) (1), (gentle bright music) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - in (1)

#### Tour of the user interface of KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=0)** (gentle upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=5)** - In this video, you'll learn how to get around Knime Analytics Platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=9)** Let's jump into it.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=10)** Start Knime Analytics Platform, and select a workspace.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=13)** This is the directory where your workflows will be stored on your local machine.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=18)** You now see the entry page.
>
> **[0:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=20)** Here, you have access to some example workflows to get you oriented right away.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=25)** The next section is your local space, which refers to the local directory on your computer, where all your Knime workflows and files are stored.
>
> **[0:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=32)** You can click here to browse your local space, or click the plus button to create a new empty workflow.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=39)** Let's open one of the example workflows to take a closer look at the user interface.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=44)** At the top, you can see the application tab, to switch between the currently open workflows, and the entry page.
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=51)** In the middle, you'll see the workflow editor, where the magic of building workflows takes place.
>
> **[0:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=57)** Select a node and execute it to see its outputs in the node monitor below.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=62)** If a node has more than one output, you can switch between them by selecting the corresponding tab.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=68)** To the left, you'll find the side panel navigation.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=72)** At the top, you find the description tab, which provides the documentation of the selected node, or a description of the current workflow if no specific node is selected.
>
> **[1:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=83)** Below, you can see the node repository tab.
>
> **[1:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=86)** In this tab, you can search and browse for nodes, and drag and drop your selected node into the workflow editor.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=93)** Next, you can see the Space Explorer tab.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=96)** When you click on it, the Space Explorer opens in the folder of the current workflow.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=101)** From here, you can also browse the workflows, folders, and data stored in your local space.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=106)** There are more features worth noting during this tour of Knime Analytics Platform.
>
> **[1:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=111)** The node action bar above a node contains the buttons to configure the node and control its execution.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=116)** You can also execute, cancel, and reset one or all nodes from the workflow toolbar.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=122)** Adding nodes is faster using the quick node adding panel.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=126)** Simply drag and drop the output of a node to an empty space.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=129)** Browse through the recommended nodes that appear in the panel, and select which nodes to append.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=134)** Speaking of adding nodes, it's important to note, that when opening Knime's Analytics Platform versions five and up for the first time, you'll see by default, the starter perspective.
>
> **[2:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=144)** This means you'll find a targeted set of nodes for commonly performed data manipulation tasks, especially for beginners and spreadsheet users.
>
> **[2:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=151)** If a node that you're looking for doesn't show up, click, more advanced nodes to see the full list.
>
> **[2:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=157)** This behavior can be changed in the settings.
>
> **[2:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=160)** Finally, notice that the blue nodes are special nodes, because they create visualizations.
>
> **[2:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=166)** Click the magnifier in the node action bar, to open the node view in a new window.
>
> **[2:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=171)** In this video, you've learned how to get around Knime Analytics Platform.
>
> **[2:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=174)** You can now start building your first workflow.
>
> **[2:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=177)** Happy Kniming.
>
> **[2:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/tour-of-the-user-interface-of-knime-analytics-platform?u=76281980&t=179)** (gentle upbeat music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (15), find (3)
> **Code Keywords:** let (2), switch (2), interface (1), default, (1), finally, (1)
> **UI Navigation:** drag and drop (2), click on (1), open the (1)
> **Non-Speech:** (gentle upbeat music) (2)
> **Documentation:** the documentation (1)
> **Definitions:** refers to (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** configure (1)

#### Build your first workflow with KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=5)** - In this video, you'll learn how to add and connect nodes to build your first workflow.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=9)** It's aimed at beginners who want to dip their toes into workflow building with a very simple example.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=14)** Let's get started.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=17)** To start, navigate to the entry page, Create a new workflow in the local space and give it a name.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=23)** First, let's read some data.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=26)** Go to the side panel navigation and open the Space Explorer tab.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=30)** Next, navigate to Example Workflows, TheData, Basics.
>
> **[0:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=36)** Drag and drop the file Rooms into the empty workflow editor.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=41)** You will see an Excel Reader node appear in the workflow editor, already configured to read the Excel file.
>
> **[0:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=47)** Execute the node, and inspect its output in the node monitor.
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=52)** Now let's get a visualization of those data.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=56)** Drag and drop the output port of the Excel Reader node to an empty space.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=61)** This opens the Quick Node Adding panel.
>
> **[1:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=64)** search for bar chart.
>
> **[1:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=71)** Hover over the bar chart, and click the magnifier icon to execute the node and open the node view.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=77)** Have a look at your first data visualization with KNIME Analytics Platform.
>
> **[1:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=83)** In this video, you've learned how to build your first workflow.
>
> **[1:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=86)** May it be the first of many.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-your-first-workflow-with-knime-analytics-platform?u=76281980&t=87)** (bright music) (bright music fades)

> [!info]- Semantic Content
>
> **CLI Commands:** node (7)
> **UI Navigation:** navigate to (2), open the (2), drag and drop (2), go to (1)
> **Code Keywords:** let (3)
> **Non-Speech:** (bright music) (2), (bright music fades) (1)
> **Env Vars:** knime (1)
> **Speakers:** - in (1)

#### How to import and export KNIME workflows
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=5)** - In this video, you'll learn how to import and export workflows with Knime Analytics platform.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=10)** Let's go.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=11)** Knime workflows are saved with a special extension dot KNWF.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=15)** Folders containing workflows and data are saved as Knime archives with a special extension dot KNAR.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=23)** Let's see how you can import these kinds of files into your local workspace.
>
> **[0:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=27)** While browsing your local space, click import workflow.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=30)** Navigate to where the Knime workflow or archive is saved.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=34)** Select the file and click open.
>
> **[0:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=36)** You'll now see the imported workflow or folder listed in your local space.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=41)** If you only want to import data, you can select add files and select the files that you want to import.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=48)** If a workflow is already open in the Workflow editor, you can find the same options by opening the Space Explorer tab and clicking the three dots.
>
> **[0:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=58)** If your workflow is located on Knime Community Hub or Knime Business Hub, you can also import it from there without needing to download it first.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=66)** Open the hub from your browser, locate your workflow, and drag and drop the yellow icon into Knime Analytics platform.
>
> **[1:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=74)** The workflow will appear in the workflow editor with a yellow bar at the top, saying that you are viewing a temporary copy.
>
> **[1:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=81)** Click save local copy and select the destination.
>
> **[1:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=85)** The workflow is now available in your local space.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=88)** If you're logged into Knime community or Knime Business Hub, you can also browse its content directly from Knime Analytics platform.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=96)** Right click the workflow in the Space Explorer and select downloads to local space to save it locally.
>
> **[1:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=103)** Now let's see how to export a workflow or a folder from Knime Analytics platform.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=108)** Browse your local space and select a workflow.
>
> **[1:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=111)** Right click on it and select Export.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=113)** Click browse to choose where to save it.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=116)** If you want to export the workflow with all nodes reset, keep the box ticked.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=121)** A reset workflow is smaller in memory size as it doesn't hold temporary data.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=127)** If you're exporting a folder, you can preview and select which files, workflows, and sub folders will be exported as part of the archive.
>
> **[2:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=138)** Alternatively, you can export a workflow by uploading it to Knime Community hub or Knime business hub directly from your local space.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=146)** Make sure to be signed into the hub.
>
> **[2:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=148)** Right click the workflow or folder and select upload.
>
> **[2:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=152)** Select the hub instance, and then the location of the folder where you want to save it.
>
> **[2:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=158)** Check the box if you want to reset the workflow before uploading and click okay.
>
> **[2:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=163)** In this video, you've learned how to import and export workflows with Knime.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-import-and-export-knime-workflows?u=76281980&t=168)** Now you can visit the Knime Community Hub and download some example workflows for more inspiration.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (4), navigate to (1), open the (1), drag and drop (1), click on (1)
> **Code Keywords:** let (3), import. (1), export. (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** knwf (1), knar (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - in (1)

#### The KNIME Community Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=5)** - [Instructor] Welcome to KNIME Community Hub, a central place for the global community of KNIME users to browse and access 20,000 plus working examples, share ideas and extensions, and collaborate.
>
> **[0:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=16)** In this video, you'll learn how to get started saving and versioning KNIME Workflows, which are freely available after creating a user account.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=24)** Let's get started.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=26)** Start by opening KNIME Analytics Platform where you've created a Workflow.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=30)** Now, you want to share your Workflow with the KNIME community.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=34)** You can make it accessible to them by saving that Workflow in a public space on KNIME Community Hub.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=39)** To access the space from within KNIME Analytics Platform, right click on your Workflow, select upload, and choose the correct space.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=48)** Now you can simply go back to your space on KNIME Community Hub, refresh your page, and find your newly uploaded Workflow.
>
> **[0:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=54)** You can choose to make this space public to the broader KNIME community, or you can subscribe to a paid plan for private collaboration.
>
> **[1:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=63)** You can easily keep track of changes and revert back with our versioning feature.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=68)** Version your Workflow, either on your instance of KNIME Analytics Platform or on KNIME Community Hub, so you can access prior versions from anywhere.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=77)** Versioning your Workflows will help you keep track of progress and edit your projects without losing data.
>
> **[1:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/the-knime-community-hub?u=76281980&t=83)** Get started collaborating and saving Workflows by signing up for an account with KNIME Community Hub.

> [!info]- Semantic Content
>
> **Env Vars:** knime (12)
> **Code Keywords:** public (2), let (1), private (1)
> **CLI Commands:** make (2), find (1)
> **Non-Speech:** (gentle music) (1), (upbeat music) (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Collaboration and execution on KNIME Community Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=0)** - [Instructor] In this video, we'll cover the major features included in a paid Teams plan on KNIME Community Hub, including private team collaboration and workflow execution.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=15)** Purchase your team by clicking on Pricing then Team Plan.
>
> **[0:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=20)** Once you've completed your purchase, you're ready to start collaborating and running your workflows.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=25)** Start by creating a team and adding your team members.
>
> **[0:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=29)** Use the manage access panel to add, manage access levels, and remove team members at any time.
>
> **[0:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=37)** Within your team you can create private spaces that your team can use to store and organize their components and versioned workflows.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=46)** Use the Manage Space Access panel to select what members can access a space and their level of permissions.
>
> **[0:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=54)** Now that we've created a team and have set up a space, let's start running our workflows.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=59)** Head on over to your workflow page.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=62)** Here you'll find all the same functions as you had with your free plan, as well as the additional option to run the workflow.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=69)** Hit that button to execute your workflow as a data app.
>
> **[1:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=74)** You can also automate the execution of the workflow by setting a schedule.
>
> **[1:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=79)** Automate your workflow to run as often as you like, and customize advanced settings which allow you, for example, to control how long jobs should run at a maximum and much more.
>
> **[1:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=92)** The Team's plan allows you to start scaling your data science efforts by sharing your work with your team, and beginning to automate and operationalize your workflows.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/collaboration-and-execution-on-knime-community-hub?u=76281980&t=102)** Subscribe now and get started right away.

> [!info]- Semantic Content
>
> **Code Keywords:** private (2), let (1)
> **Non-Speech:** (upbeat music) (2)
> **CLI Commands:** find (1)
> **Env Vars:** knime (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### How to install KNIME extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=5)** - [Instructor] In this video, you'll learn how to install extensions in KNIME Analytics Platform to get additional nodes and functionalities.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=12)** Let's have a look.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=13)** From the entry page of KNIME Analytics Platform, click the top right menu and select install extensions.
>
> **[0:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=19)** In the dialogue that pops up, you can see all the extensions available to be installed grouped by category.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=25)** Filter this list using the options at the bottom.
>
> **[0:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=28)** So what do these categories mean?
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=30)** KNIME and extensions includes all extensions produced by us here at KNIME.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=35)** The KNIME community extensions are developed and maintained by community developers.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=40)** They're categorized according to subject, bioinformatics, chem informatics, image processing, and more.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=48)** The KNIME hub and server extensions provide nodes to be used in combination with our commercial products.
>
> **[0:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=54)** KNIME Labs extensions contain cutting edge technology nodes, which are still in active development.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=60)** Even though they have passed our rigorous testing procedure, they might be susceptible to changes in the future.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=66)** The KNIME nodes development tools are for Java developers.
>
> **[1:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=70)** Finally, the KNIME partner extensions provide additional capabilities offered and maintained by our partners.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=77)** Now select the extensions you want to install.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=80)** For example, select the KNIME AI assistant and the KNIME reporting extensions and click next.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=87)** KNIME now reviews your selection and checks to see if everything is compatible with your system.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=93)** The next dialogue opens showing you the list of things you're going to install.
>
> **[1:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=97)** Now click finish and the software will be installed.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=101)** To take effect, KNIME has to be restarted.
>
> **[1:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=104)** You're asked whether this should happen now or later.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=107)** As soon as KNIME has restarted, you can start working with the newly installed extensions.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=113)** Finally, note that every extension has its own page on the KNIME Community Hub.
>
> **[1:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=118)** You can drag and drop the extension or one of its nodes into KNIME Analytics Platform to start the installation process.
>
> **[2:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=125)** In this video, you've learned how to install extensions in KNIME Analytics Platform.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=129)** Now you're set to get started building workflows from the very simple to the very complex.
>
> **[2:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-install-knime-extensions?u=76281980&t=135)** (gentle music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (17)
> **Prerequisites:** install (5)
> **Code Keywords:** finally, (2), let (1)
> **UI Navigation:** select the (2), drag and drop (1)
> **Non-Speech:** (gentle music) (2)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. Data Access

> [↑ Back to Table of Contents](#table-of-contents)

#### Data access with KNIME: Reading files
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=0)** (gentle jazz music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=5)** - In this video, you will learn how to access a file in a analytics platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=9)** Different file types such as Excel files, CSV files, and other text-based files all have dedicated reader nodes that shares a similar configuration window.
>
> **[0:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=19)** With those nodes, you can access files both locally and from remote locations.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=23)** Let's have a look.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=24)** To start off, let's take a look at the Excel Reader node.
>
> **[0:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=28)** Its first configuration option is the input location, which defines the path to the file to read.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=34)** You can find the setting with exactly the same interface in other reader nodes as well, for example, the CSV Reader and the PMML Reader.
>
> **[0:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=42)** In the read from section, you select the file system type and, if it's required, the specifier.
>
> **[0:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=49)** In the first dropdown menu, you have four options for the path type, Local File System, MountPoint, Relative To and Custom KNIME URL.
>
> **[0:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=58)** First, let's select the Local File System.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=61)** This type accesses a file based on its location on the local machine.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=65)** You can write the path manually or click the Browse button.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=69)** The File field then shows the path from the system root directory to the selected file.
>
> **[1:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=75)** The whole path can vary depending on the operating system.
>
> **[1:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=79)** Second, let's select the MountPoint option.
>
> **[1:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=82)** This type accesses a file in the Space explorer using a path that starts with the name of the mount point.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=88)** You select the name of the mount point in the second dropdown menu, LOCAL, My KNIME Hub, or a KNIME Business Hub mount point.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=96)** If a mount point is not connected, it appears gray in the menu and can't be selected.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=102)** Select LOCAL and click Browse to select a file in the local workspace.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=107)** After selecting a file, the file path only shows the path within the local workspace.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=113)** Third, select the Relative To type, which is accesses a file based on its location relative to the current workflow or current workflow data area.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=122)** If you select the current mount point as relative to path type, in this case local, you can browse files in its local workspace.
>
> **[2:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=130)** The convenient thing about the Relative To type is that for this path, the mount point is updated automatically, so if you deploy the workflow to the KNIME Business Hub, the node would execute without reconfiguring.
>
> **[2:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=143)** If you select the current workflow, you can select any file under the current active mount point so that the file path starts from the location of this workflow.
>
> **[2:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=152)** Moving to an upper folder level is indicated by two dots in the path.
>
> **[2:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=156)** If you select the current workflow data area, you can browse files in a data folder inside the workflow.
>
> **[2:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=162)** This folder is not visible in the Space explorer.
>
> **[2:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=165)** However, if you open the local workspace in the file explorer, you can see that each workflow appears there as a folder.
>
> **[2:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=171)** Furthermore, the workflow folder can contain a subfolder called data.
>
> **[2:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=176)** You can also create the folder if it doesn't exist.
>
> **[3:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=180)** If you read a file from this workflow data area, the reader node will always execute in any location when exported as a KNWF file, when deployed to a KNIME Business Hub, when shared via the KNIME Community Hub, and when moved within the local space, because the data folder always moves together with the workflow.
>
> **[3:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=200)** The fourth path type is Custom KNIME URL.
>
> **[3:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=203)** This path only consists of one part, a URL address for a path starting with the KNIME protocol.
>
> **[3:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=210)** Sometimes you want to read tables from multiple files and concatenate them into one table.
>
> **[3:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=215)** You can do so with a single reader note, for example, the Excel Reader or CSV Reader.
>
> **[3:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=221)** For that, you select files in folder in the mode selection and the path to the folder here below.
>
> **[3:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=227)** The dialogue behind the Filter options button lets you include and exclude files by their file extension, file folder name and visibility.
>
> **[3:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=236)** So far, we have only accessed files either on our local machine or in a connected mount point.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=241)** However, the same reader notes can read files in remote locations as well if you provide the connection in the input.
>
> **[4:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=248)** For example, let's access some files on Amazon S3.
>
> **[4:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=252)** You use the Amazon authentication and Amazon S3 connector nodes to create the connection.
>
> **[4:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=257)** The connection is then provided to the reader node via its dynamic file system connection input port, which is hidden by default, but can be added via the plus button or by simply connecting the two nodes.
>
> **[4:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=269)** Once connected, the configuration dialogue only shows the connected file system in the read from section.
>
> **[4:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=275)** You can browse over the remote folders and files just as you did on the local file system.
>
> **[4:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=280)** Once you have selected a file, the file path includes only the path within the remote location.
>
> **[4:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=286)** Therefore, if you switch the input connection to another remote file system, for example, to Google Cloud, the node will still execute if the path to the file remains the same.
>
> **[4:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=296)** In this video, you learned how to read files in analytics platform, how to configure the reader nodes with the different file path types, how to read multiple files with a single reader node, and finally, how to configure the path within remote file systems.
>
> **[5:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-reading-files?u=76281980&t=310)** (gentle jazz music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (8), csv (3), url (3), local (2), pmml (1)
> **Code Keywords:** let (5), type, (3), interface (1), default, (1), switch (1)
> **UI Navigation:** select the (8), dropdown (2), in the menu (1), open the (1)
> **CLI Commands:** node (6), find (1)
> **Analogies:** for example (4), such as (1)
> **Prerequisites:** configure (2)
> **Non-Speech:** (gentle jazz music) (2)
> **Speakers:** - in (1)

#### Data access with KNIME: Accessing databases
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=0)** - In this video, you will learn how to access databases in KNIME Analytics Platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=9)** Let's jump into it.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=11)** To connect to a database, you need a connector node that creates the connection to the database.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=15)** Here it's JDBC driver.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=17)** KNIME Analytics Platform provides a set of nodes for connecting to all JDBC compliant databases.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=23)** Many file-based and server-based databases such as SQLite, MySQL, or PostgreSQL have dedicated connector nodes.
>
> **[0:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=32)** These connector nodes already contain the necessary JDBC drivers and provide configuration options that are tailored to the specific database.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=39)** The nodes are part of the KNIME Analytics Platform installation, so no additional installation is necessary.
>
> **[0:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=45)** Dedicated connector nodes for big data platforms such as Apache Hive or Impala, can be obtained by installing the KNIME Big Data Extension, which is also open source.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=55)** If no dedicated connector node exists for your database, you can use the generic DB connector node.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=61)** Let's have a look at an example workflow to connect to a database.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=65)** Here you want to read data from MySQL database, so you can use the MySQL connector node.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=72)** In the configuration dialogue of the MySQL connector node in this first dropdown menu, you can change the database dialect.
>
> **[1:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=79)** In the second dropdown menu, you can change the JDBC driver.
>
> **[1:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=83)** Below define the host name and port where the database resides.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=87)** Next, enter the name of the database that you want to access.
>
> **[1:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=91)** In the authentication section, provide the credentials to access the database.
>
> **[1:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=95)** One option is to provide the username and password in this field.
>
> **[1:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=99)** However, since entering and storing a username and password directly in the dialogue might lead to security issues, KNIME allows you to provide credentials from outside the node via workflow variable connection coming from the credential configuration node.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=113)** The available credentials are shown in this menu.
>
> **[1:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=117)** The other tabs are for advanced optional settings.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=121)** In the JDBC parameter tab, you can add custom JDBC driver connections parameters.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=127)** In the advanced tab, you can configure more settings such as the query for validating the connection.
>
> **[2:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=133)** In the input type mapping and output type mapping tabs, you can define which data types in KNIME Analytics Platform correspond to the data types associated with your database.
>
> **[2:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=144)** However, the setting that are defines in the connection settings tabs are often enough to establish the connection.
>
> **[2:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=150)** So click okay.
>
> **[2:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=151)** You can access the MySQL database.
>
> **[2:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=155)** For databases that don't have dedicated connector nodes, you can use the generic DB connector node, which can connect to arbitrary JDBC compliant databases.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=164)** In such a case, it is necessary to register the corresponding JDBC driver in KNIME Analytics Platform.
>
> **[2:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=170)** Let's say you want to connect to a SAP HANA database that doesn't have a dedicated connector node.
>
> **[2:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=176)** You can register it's JDBC driver in the dialogue that opens.
>
> **[2:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=179)** You go to preferences, KNIME, databases, click add, and in the dialogue that opens, provide a unique ID and the name of the JDBC driver.
>
> **[3:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=190)** In this menu on the right, define the database type, which is SAP HANA in this case.
>
> **[3:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=195)** This database type is not listed in the menu, so select the default option.
>
> **[3:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=200)** In this field below, specify the URL template.
>
> **[3:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=203)** You can click the question mark to see the available options for creating the URL template.
>
> **[3:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=208)** Finally, provide the path to the JDBC driver in your system.
>
> **[3:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=213)** The driver can be downloaded from the website of the database provider.
>
> **[3:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=217)** Click okay, and as you can see, the newly added driver appears in the list.
>
> **[3:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=221)** Now open the configuration dialogue of the DB connector node.
>
> **[3:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=225)** It looks much the same as the configuration dialogue of the MySQL Connector node that we've seen before.
>
> **[3:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=231)** Select the newly registered SAP HANA driver here in the driver name menu.
>
> **[3:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=235)** There are other settings you can define as well, such as when you connected to the MySQL database.
>
> **[4:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=240)** Thus, the connection to the SAP HANA database has been created successfully.
>
> **[4:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=245)** Now that you're connected to a database, you could use the DB table selector node to select the table in the database and continue with many in-database manipulation operations using other DB nodes.
>
> **[4:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=255)** At any point, you could also import the data into KNIME using the DB reader node.
>
> **[4:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=262)** In this video, you have learned how to connect to a database in KNIME using the dedicated connector nodes.
>
> **[4:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=267)** Some are already provided upon installations and some can be installed via extensions.
>
> **[4:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=271)** You've also learned how to connect to any JDBC compliant database by using the DB connector node.
>
> **[4:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-access-with-knime-accessing-databases?u=76281980&t=276)** And finally, how to register a JDBC driver in KNIME Analytics Platform.

> [!info]- Semantic Content
>
> **Env Vars:** jdbc (13), knime (11), sap (4), hana (4), url (2)
> **CLI Commands:** node (14), mysql (7), apache (1)
> **Code Keywords:** let (3), finally, (2), case, (1), type, (1), case. (1)
> **UI Navigation:** select the (3), dropdown (2), go to (1), in the menu (1), open the (1)
> **Analogies:** such as (3)
> **Exercise Files:** template (2)
> **Non-Speech:** (upbeat music) (2)
> **Prerequisites:** configure (1)


### 3. Data Cleaning

> [↑ Back to Table of Contents](#table-of-contents)

#### Data cleaning with KNIME: How to filter rows
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=0)** (mellow music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=5)** - In this video, you will learn how to filter rows from a table in KNIME Analytics Platform using various criteria.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=11)** Let's jump into it.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=13)** You have a sales table where each row contains the data for a sales contract.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=18)** There is the sold product, the country of sale, the date of the contract, the number of items, the amount of money generated by this contract, and whether the transaction was paid by credit card or not.
>
> **[0:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=29)** Some columns are of type string and some columns are of type integer.
>
> **[0:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=33)** Some other columns also have missing values, like here, for example.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=38)** First, you want to extract all the sales made in a specific country.
>
> **[0:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=42)** Thus, open the configuration of the row filter and specify as the column to test the column country.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=48)** You can now specify a pattern to be matched for this column, for example, Germany.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=53)** Close the configuration and execute the node.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=56)** The output provides all the rows matching the specified pattern, Germany, in the selected column, country.
>
> **[1:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=64)** You can also specify more complex patterns by making use of regular expressions and wildcards.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=69)** For example, specify U* as a pattern and select the wildcard flag to filter all the data rows whose country starts with the letter U.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=80)** Note that you can also reverse the filtering.
>
> **[1:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=82)** Select exclude rows by attribute value to select, in this case, all the data rows whose country does not start with the letter U.
>
> **[1:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=90)** Now, let's filter rows based on their values into the integer columns.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=94)** For example, you want to extract sales records according to their quantity, which is the number of sold products.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=101)** Change the column to test to quantity and use the range checking criteria to specify a lower bound.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=107)** For example, 2.
>
> **[1:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=109)** The row filter now selects only the data rows whose quantity is greater or equal than 2.
>
> **[1:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=115)** To select the rows where quantity is exactly 2, you can set 2 in the upper bound as well.
>
> **[2:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=123)** Intuitively, you can also specify a higher upper bound, for example, 6.
>
> **[2:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=128)** The result now contains all the sales data whose amount is between 2 and 6.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=134)** As for the pattern matching, you can reverse the filtering and exclude the rows where quantity is in the defined range.
>
> **[2:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=141)** Sometimes it is necessary to select all data rows where a field is missing.
>
> **[2:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=145)** Let's select as the column to test the column card and select the last matching criterion only missing value match.
>
> **[2:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=152)** Similar as before, you can choose to include all the rows with missing value or exclude them.
>
> **[2:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=158)** In some cases, you know exactly which row you want to keep.
>
> **[2:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=162)** In this case, there is no need for a matching criteria.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=164)** It's enough to say from row X to row Y.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=168)** This is possible by selecting, include or exclude rows by number and entering the decide range.
>
> **[2:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=173)** For example, from row number 5 to row number 10.
>
> **[2:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=177)** Finally, if you want to keep both included and excluded rows, you can use the row splitter node.
>
> **[3:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=185)** This node has exactly the same configuration window as the row filter, but features two output ports, one for the included and one for the excluded rows.
>
> **[3:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=197)** In this video, you have learned how to filter rows in analytics platform using various criteria.
>
> **[3:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-rows?u=76281980&t=203)** Note that if you want to perform more complex filtering or are dealing with other data types, you can use more advanced nodes such as the rule-based rule filter, the reference rule filter, and the date and time based rule filter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), match. (1), finally, (1)
> **Analogies:** for example (7)
> **UI Navigation:** select the (3), open the (1)
> **CLI Commands:** node (3)
> **Warnings:** note that (2)
> **Non-Speech:** (mellow music) (1), (upbeat music) (1)
> **Env Vars:** knime (1)
> **Speakers:** - in (1)

#### Data cleaning with KNIME: How to filter columns
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=0)** (casual music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=5)** - In this video, you will learn how to filter columns from a table in Analytics Platform in three different ways: manual, pattern-based, or type-based selection.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=14)** Let's have a look.
>
> **[0:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=16)** You have a table of sales data.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=18)** It contains the country and the date of the sale, a column card indicating whether the transaction has been performed with credit card or not, and finally, various columns with the IDs of the product involved in the transaction.
>
> **[0:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=31)** You can easily configure the column filter node to remove some of the columns from this table.
>
> **[0:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=36)** The configuration window shows the column in two lists.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=40)** On the left, the columns to be excluded, and on the right, the columns to be included in the output table.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=46)** You can move the columns between the list with the arrows in the middle or by double-clicking their names.
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=52)** In this case, let's exclude the column card.
>
> **[0:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=54)** By executing the node, you will see that the column card is not present in the output table.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=60)** Sometimes you want to select multiple columns at once.
>
> **[1:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=63)** In those cases, you can toggle a card.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=68)** Here you can specify a pattern to include a group of columns based on their names.
>
> **[1:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=73)** For example, write pro* to include all the columns of the products.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=78)** In this way, even if more product columns are added in the future, they will be included in the output table.
>
> **[1:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=84)** If you prefer, you can also select the columns by using a regular expression.
>
> **[1:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=89)** Additionally, you have the option to make the pattern case-sensitive and to reverse the column selection.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=94)** That is include all the columns that do not follow the provided pattern.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=102)** Finally, a last button allows you to filter the columns based on their type.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=106)** Here you can include all the string type columns or all the integer columns, or both, or any other combination of column types.
>
> **[1:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=114)** The excludes and includes list will be populated accordingly.
>
> **[1:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=119)** In this video, you have learned how to filter columns from a table in Analytics Platform by using manual, pattern-based, or type-based selection.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-filter-columns?u=76281980&t=127)** (casual music)

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (2), case, (1), type. (1)
> **CLI Commands:** node (2), make (1)
> **UI Navigation:** toggle (1), select the (1)
> **Non-Speech:** (casual music) (2)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### Data cleaning with KNIME: How to handle missing values
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=0)** (mellow music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=5)** - In this video, you will learn how to handle missing values from a table in KNIME analytics platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=9)** Let's get started.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=12)** When dealing with real data, it is common that some values are missing for a certain column.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=17)** In KNIME analytics platform, missing values in a table are represented by the red question mark.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=23)** For example, in this table of customers, there are missing values in the columns, customer ID age, email, and so on.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=30)** You can handle missing values with a missing value node.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=34)** In this configuration, you can select the default replacement for all the missing values of a certain type.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=39)** For example, you can place a fixed value, such as the string unknown every time a string is missing.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=46)** In some cases, you want to be more granular.
>
> **[0:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=49)** For example, a customer with a missing customer ID is not useful.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=53)** Hence, you want to remove the corresponding row.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=56)** To do that, use the column setting tab.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=59)** Double click the column name, customer ID and select remove row.
>
> **[1:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=64)** All the rows with missing customer IDs are now excluded from the output table.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=69)** Note that the replacement options vary depending on the column type.
>
> **[1:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=73)** Let's handle the missing values of the column age, which is an integer column.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=77)** In this case, you can choose to replace missing value with the statistics computed over the values of the column, such as the maximum, the mean, the most frequent value, and so on.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=87)** Once you define a strategy to handle missing values, you can apply to the new data using the missing value apply node.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=93)** This node needs no configuration.
>
> **[1:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=95)** It just applies the same missing value strategy to another data table.
>
> **[1:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=99)** In this case, it removes the rows with missing customer IDs and uses the mean age when the age is missing.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=106)** Note that for statistical values such as the mean, most frequent value, et cetera, the missing value apply will use the statistics of the original table and will not recalculate for the new table.
>
> **[1:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=117)** In some cases, information is spread or missing over multiple columns.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=122)** For example, customers have an email or a corporate email, or both.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=126)** For you, one email is enough, no matter if personal or corporate.
>
> **[2:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=130)** You can merge those two columns with a column merger node, select email as the primary column, and populate its missing value with the values of the secondary column, corporate email.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=140)** Finally, some columns have so many missing values that they are of no use.
>
> **[2:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=145)** You can choose to remove them by using the missing value column filter node.
>
> **[2:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=149)** Select the columns to test, for example, newsletter and set the threshold.
>
> **[2:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=158)** This, the newsletter column has more than 60% of roles with missing values excluded from the table.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=164)** In this video, you have learned how to handle missing values from a table in KNIME analytics platform.
>
> **[2:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-cleaning-with-knime-how-to-handle-missing-values?u=76281980&t=169)** (mellow music)

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), type. (2), case, (2), finally, (1), this, (1)
> **Analogies:** for example (5), such as (2)
> **CLI Commands:** node (5)
> **Env Vars:** knime (3)
> **UI Navigation:** select the (2)
> **Warnings:** note that (2)
> **Non-Speech:** (mellow music) (2)
> **Definitions:** is an  (1)


### 4. Data Transformation

> [↑ Back to Table of Contents](#table-of-contents)

#### Data transformation with KNIME: Numbers, strings, and rules
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=0)** - In this video, you will learn how to apply rule-based transformations and how to transform numbers and strings in Analytics Platform, let's have a look.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=14)** You have a table containing demographic data.
>
> **[0:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=16)** F or each person, you have their age, education, occupation, and so on.
>
> **[0:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=21)** You notice that the native countries are written with a hyphen and want to remove it.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=26)** You also want to round up people's age to the nearest 10.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=30)** And finally, you want to create three categories of people unemployed, employed part-time, and employed full-time based on their number of weekly work hours.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=40)** Let's start with the last task.
>
> **[0:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=42)** You can perform the categorizing of people with a Rule Engine node.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=46)** First, open its configuration window.
>
> **[0:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=49)** On the left, find the column list, which shows all the available columns from the input data table.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=56)** Right underneath you have the Flow Variable List, which lists all the flow variables available to the node.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=62)** In the middle, you can find the function panel, which contains the functions and logical operations to be used in the rule set.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=69)** Note that you can filter functions by category.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=72)** When a function is selected in the function panel, the description of its tasks and the mode of use is displayed.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=78)** Finally, at the bottom you have the Expression panel, which is the core piece of this node.
>
> **[1:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=83)** Here you can define a set of rules to apply.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=87)** Every rule consists of a condition and a consequence and is applied to each row of a table.
>
> **[1:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=92)** First, you want to define that people who work zero hours per week are unemployed.
>
> **[1:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=98)** The column to test is the hour per week, so double click it to insert in the rule editor with the right syntax already populated.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=107)** Now, you need to compare the column value to zero.
>
> **[1:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=110)** Search the operator equal in the function list and double click it to insert in the rule, then write zero after the equal sign.
>
> **[1:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=119)** You have a condition, so now you need the consequence.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=122)** The symbol here made by an equal sign followed by a greater sign, is a symbol that introduces the consequence value.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=129)** In this case, the consequence is a string value unemployed.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=134)** Note, quotation marks to define the string.
>
> **[2:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=137)** Write the result in a new column work status.
>
> **[2:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=141)** The rows where hours per week is zero get unemployed in this new column.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=146)** What about the other cases?
>
> **[2:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=148)** Define a new rule.
>
> **[2:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=149)** If a person works more than zero hours but less than 40, their status is part-time.
>
> **[2:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=157)** A third rule states that if a person works 40 hours or more per week, their status is full-time.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=164)** However, since this last rule should include all remaining input data rows, we can just introduce a default condition covering all remaining data as true.
>
> **[2:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=174)** This keyword true means that this condition is always true.
>
> **[2:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=178)** Since conditions in the Rule Engine are verified from top to bottom, placing true at the end of the rule system collects all the leftover data rows.
>
> **[3:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=187)** The next transformation is numeric, you want to round up each person's age to the nearest 10.
>
> **[3:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=193)** You can do this with the Math Formula node.
>
> **[3:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=195)** As you can see, the configuration of this node has the same structure as the one of the Rule Engine node.
>
> **[3:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=201)** The functions are of course different.
>
> **[3:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=208)** Look for the function round and add it via the double click.
>
> **[3:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=212)** This function takes two parameters, the first is the value that you want to round.
>
> **[3:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=217)** In this case, the H column, which you can add by double clicking it in the column list.
>
> **[3:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=222)** The second parameter is the precision, write minus one to round the value to the closest 10.
>
> **[3:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=228)** This time, replace the column age and convert the result to an integer type.
>
> **[3:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=234)** As a last task, you want to change the values in the native country column by replacing hyphens with the space character.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=241)** Perform this with the String Manipulation node.
>
> **[4:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=244)** You know the configuration window already, look for the function replace.
>
> **[4:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=250)** You can see that many variations of the function are possible.
>
> **[4:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=253)** Choose the one with string column to work on the old substring to replace and the new substring to use as a replacement.
>
> **[4:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=261)** Double click the column native country in the column list panel.
>
> **[4:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=265)** Add the substring to be replaced as hyphen, and the replacement substring as space character.
>
> **[4:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=272)** Note again, that strings must be enclosed in quotation marks.
>
> **[4:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=276)** Replace the values in the native country column with the new values.
>
> **[4:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=281)** In the output table, you can see that composite values in the native country column are now separated by a space and not by a hyphen.
>
> **[4:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=288)** In this video, you have learned how to apply rule-based transformations with the Rule Engine node, how to transform numbers with the Math Formula node, and how to transform strings with the String Manipulation.
>
> **[5:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-numbers-strings-and-rules?u=76281980&t=300)** (uplifting music)

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (2), finally, (2), case, (2), type. (1)
> **CLI Commands:** node (9), find (2)
> **Definitions:** is a  (2), means that (1)
> **Non-Speech:** (upbeat music) (1), (uplifting music) (1)
> **Warnings:** note that (1)
> **Speakers:** - in (1)

#### Data transformation with KNIME: How to split cells
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=5)** - In this video, you will learn how to split the content of a table into multiple columns or into a collection column using KNIME Analytics Platform.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=12)** Let's get started.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=14)** Sometimes data loves to stick together.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=17)** No matter if the result of a computation or data is not saved in a clear way, sometimes a cell contains more than one information and it will be more handy to keep it separate.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=26)** This table contains three columns, each storing multiple information.
>
> **[0:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=31)** Let's see how to split the content of each cell with a cell splitter node.
>
> **[0:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=36)** For example, the column CustomerID source a string with two pieces of information, the group and the actual CustomerID, separated by a underscore.
>
> **[0:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=45)** To divide it, add a cell splitter node.
>
> **[0:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=47)** Select the column CustomerID, and enter the delimiter underscore.
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=52)** With the default configuration, the node splits the content of the column into multiple columns for each occurrence of the divider.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=59)** In this case, you get one column containing the group ID and one with the CustomerID.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=65)** Consider now the second column.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=68)** The country and city are separated by a space.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=72)** Add a new cell splitter node and type a space in the delimiter field.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=80)** Note that the table output is not correct since some cities also contain spaces within their names.
>
> **[1:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=86)** In this case, you're lucky since the city names are enclosed in quotation marks.
>
> **[1:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=90)** Set the quotation mark character in the configuration window of the cell splitter.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=94)** This will make it skip all the space delimiters, and closing quotation marks.
>
> **[1:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=99)** For more complex cases, for example, if those words were not enclosed in quotation marks, you can explore more sophisticated solutions with regular expressions that can be applied with other nodes, such as the regex split.
>
> **[1:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=112)** If the column name can be split in the same manner as the column's content, you can select the checkbox split input column name.
>
> **[1:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=119)** In this case, the node renames the splitted column with the splitted column names.
>
> **[2:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=124)** Finally, the cell splitter node also allows you to create collection columns.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=129)** Collections is the column type to use if you want to correctly store multiple elements in the same cell.
>
> **[2:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=135)** Select the column product, set to the delimiter comma, and set the output as list.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=140)** The output table contains a new column of type list with the content of the column stored in an array format.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=146)** You can also select a set if you want to remove all the duplicate elements from each cell.
>
> **[2:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=152)** In this video, you have learned how to split the content of a table into multiple columns or into a collection column using KNIME Analytics Platform.
>
> **[2:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-transformation-with-knime-how-to-split-cells?u=76281980&t=159)** (lively music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (6), make (1)
> **Code Keywords:** case, (3), let (2), finally, (1)
> **UI Navigation:** select the (3), checkbox (1)
> **Analogies:** for example (2), such as (1)
> **Env Vars:** knime (2)
> **Non-Speech:** (lively music) (2)
> **Warnings:** note that (1)
> **Speakers:** - in (1)


### 5. Workflow Documentation

> [↑ Back to Table of Contents](#table-of-contents)

#### How to keep workflows tidy and documented
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=0)** (mellow music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=5)** - In this video, you will learn how to tidy up and document your workflows in Analytics Platform.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=10)** Let's get started.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=12)** You have created a workflow that solves various problems.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=15)** It treats some customer data, cleans entries, and transforms a bunch of values.
>
> **[0:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=20)** You open it after one week and you have absolutely no memory of what is going on here.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=25)** Which data were you reading?
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=26)** Which new columns have you created?
>
> **[0:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=29)** To get the best out of visual programming, it is important to keep your workflows tidy and documented.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=34)** Let's look at a few ways to do that effectively.
>
> **[0:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=37)** First of all, it is very useful to edit the node label.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=41)** Select a node, double click Add Comment and write a short sentence about what happens in that node.
>
> **[0:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=47)** Then right click on an empty space and add the new workflow notation.
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=51)** They are very handy to comment on parts of a workflow.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=55)** Resize the workflow notation and double click to edit its content.
>
> **[0:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=58)** Use the toolbar above to format the content, set headings, add bullet point or numbered lists, format the text, align it, add text dividers, and change the color of the annotation.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=78)** You can also add links.
>
> **[1:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=79)** For example, add the link to the data source in a new annotation.
>
> **[1:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=85)** A workflow can have hundreds of nodes.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=87)** Sometimes it is clever to hide some of the complexity to keep the workflow readable and understandable.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=93)** Metanodes can help you with that.
>
> **[1:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=95)** You can imagine metanodes as simple folders containing a bunch of nodes inside.
>
> **[1:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=100)** Ideally, those nodes together create a logical block in your workflow.
>
> **[1:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=103)** For example, these three nodes perform some sort of cleaning.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=107)** Select them and put them inside a metanode, which you can name Data Cleaning.
>
> **[1:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=114)** Now the workflow looks tidier because it shows fewer node, but it's still possible to understand what is going on at a glance.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=121)** You can inspect the content of a metanode anytime by double clicking it.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=126)** Note that you can also tidy up your workflow with components.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=129)** Components look a lot like metanodes but are way more complex.
>
> **[2:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=133)** They can have their own configuration window, a composite view, and can be more easily shared and reused.
>
> **[2:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=139)** Finally, each workflow has its own description to be edited.
>
> **[2:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=143)** Move to the description tab and click the pencil to edit the workflow metadata, write a meaningful description, add relevant external resources, and set the related text.
>
> **[2:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=153)** Note that if you upload the workflow to the Community Hub, the information given here will appear in the workflow page.
>
> **[2:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=163)** In this video, you have learned how to tidy up and document your workflows in Analytics Platform.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/how-to-keep-workflows-tidy-and-documented?u=76281980&t=168)** (mellow music continues)

> [!info]- Semantic Content
>
> **CLI Commands:** node (4)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** for example (2), imagine (1)
> **Warnings:** note that (2)
> **Non-Speech:** (mellow music) (1), (mellow music continues) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - in (1)


### 6. Data Merging

> [↑ Back to Table of Contents](#table-of-contents)

#### Data merging with KNIME: How to concatenate tables
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=5)** - In this video, you will learn how to concatenate tables in KNIME Analytics Platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=9)** Let's have a look.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=11)** With the concatenate operation, you can merge two or more tables by putting them on top of each other.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=17)** The common columns appearing in both input tables will always be shown in the output table.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=23)** If exclusive columns are appearing in only one of the two tables, you have two ways to proceed.
>
> **[0:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=29)** Take the intersection of the columns and retain only the common columns or the union of the columns, and retain all the columns in both table regardless of whether they are in common or exclusive.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=40)** Have a look at these two tables.
>
> **[0:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=42)** They have one exclusive column each, two and three.
>
> **[0:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=45)** If you concatenate the tables and choose to keep an intersection of columns, the output table will not contain these exclusive columns.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=53)** If you choose to keep a union of columns instead, these columns will appear in the resulting table, together with the common columns.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=60)** Note that the concatenation operation retains the row order.
>
> **[1:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=63)** The rows in the top part of the output table come from the first input table, whereas the rows in the bottom part are from the second input table.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=72)** Also, as you can see here, the table shows missing values in columns two and three because these are the exclusive columns.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=80)** Let's have a look at an example workflow in KNIME Analytics Platform.
>
> **[1:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=84)** The table of this workflow holds sales information.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=87)** The first dataset contains sales records for the years 2010 and 2011 with an exclusive column card unique to this dataset.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=96)** The second dataset contains sales record for 2011 with an exclusive column insurance unique to this dataset.
>
> **[1:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=103)** To put together these two tables, you can use the concatenate node.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=108)** First, select to combine the input columns by intersection.
>
> **[1:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=112)** The node also lets you select how to handle duplicate through IDs.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=116)** Choose to append the suffix.
>
> **[1:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=118)** Close the configuration and execute node.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=121)** As expected, the exclusive columns card and insurance are not there.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=126)** In addition to that, if you look at the date column, you can see that the rows from the first data table appear first with the dates between 2010 and 2011, followed by the concatenated sales data from the second table.
>
> **[2:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=139)** In addition, you can see some raw IDs with the duplicate suffix, indicating duplicate RowIDs in the input tables.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=146)** Select now to keep the union of columns.
>
> **[2:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=148)** The card and insurance columns are now included.
>
> **[2:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=153)** The insurance column is filled with missing values for the rows originating from the first dataset.
>
> **[2:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=159)** Likewise, missing values are seen in the card column for the rows from the second table.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=164)** This is because these columns appear only in one of the datasets.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=168)** Finally, notice that the concatenate node has dynamic ports to let you concatenate as many tables as you want.
>
> **[2:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=174)** Simply drag the connection from another table to create a new input port.
>
> **[2:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=179)** You can also add input and output ports to nodes by clicking the plus button.
>
> **[3:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=184)** In this video, you have learned how to concatenate two or more tables in the KNIME Analytics Platform using the concatenate node.
>
> **[3:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-concatenate-tables?u=76281980&t=191)** (lively music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (5)
> **Code Keywords:** let (3), finally, (1)
> **Env Vars:** knime (3)
> **Non-Speech:** (lively music) (2)
> **Warnings:** note that (1)
> **Speakers:** - in (1)

#### Data merging with KNIME: Value lookup
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=0)** (slow melodic music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=5)** - In this video, you will learn how to perform value lookup in analytics platform.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=9)** Let's get started.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=11)** Value lookup is an operation that lets you append values from a dictionary table to a data table according to a matching column.
>
> **[0:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=19)** In the data table, you have the order number and the store ID.
>
> **[0:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=22)** In a second table, the dictionary table, you have for each store ID, the information whether the store is an online or onsite store.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=30)** You can use the value lookup node to bring to the data table the information about the store type from the dictionary table according to the matching store ID.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=40)** Let's see how to perform the value lookup operation in an analytics platform.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=44)** You have to provide the data table and the dictionary table as input of the value lookup node.
>
> **[0:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=50)** In this example, the data table contains the orders and the dictionary table contains the information about the stores.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=56)** In the configuration window, select the two columns that have to match.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=60)** In this case, the column containing the store ID in the data and dictionary tables.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=65)** As you can see, the columns don't have to have the same name.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=69)** You can also select which columns you want to retrieve from the dictionary table.
>
> **[1:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=74)** In this case, select to only keep the store type column, since the store ID column is already used as lookup.
>
> **[1:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=81)** In case of multiple matches, that is if the dictionary column contains more rows with the same store ID, you can select to use the first or the last of these rows as they appear in the dictionary table.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=94)** For the last row, the note outputs a missing value for the store type, since the store 0000 is not available in the dictionary table.
>
> **[1:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=103)** In case of no matches like this one, you can also select to match the next smaller or larger value of the dictionary.
>
> **[1:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=109)** Note that node also offers advanced settings if you want to match a sub stringing of the lookup value to match with the wild card and RegEx, and to append an additional column indicating whether a match was found.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=122)** In this video, you have learned how to look up values from a dictionary table in the analytics platform.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=127)** Note that value lookup node covers frequent yet basic use cases.
>
> **[2:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-value-lookup?u=76281980&t=131)** For more complex operations, such as using more than one matching column, have a look at the joiner node.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), match. (1), type, (1)
> **CLI Commands:** node (5)
> **Definitions:** is an  (2)
> **Warnings:** note that (2)
> **Non-Speech:** (slow melodic music) (1), (upbeat music) (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### Data merging with KNIME: How to join two tables
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=5)** - In this video, you will learn how to join two tables in KNIME Analytics Platform, how to configure the joiner node for the different join modes, and finally, the differences between the value lookup and the joiner node.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=17)** Let's have a look.
>
> **[0:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=19)** The joiner node has two input ports, the upper port for the left table and the bottom port for the right table.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=26)** In this example, the left table contains order and the relative store, and the right table contains information about each store.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=34)** The column containing the StoreIDs is present in both tables.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=38)** However, both table contains some StoreIDs that is not present in the other table.
>
> **[0:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=43)** Open the configuration of the joiner node.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=46)** First, you have to provide the columns on which you want to join.
>
> **[0:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=49)** In this case, provide the column containing the StoreID in the left and right tables.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=55)** You can add more joining columns by clicking the plus button.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=59)** Rows from the left and the right tables are matched based on the values in these columns.
>
> **[1:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=64)** If you select more than one joining column, you can specify here whether the rows are matched based on all or any values of those columns.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=72)** Next, you can select which rows are included in the join result, or in other words, specify in the join mode.
>
> **[1:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=79)** The Venn diagram on the right-hand side helps to understand the corresponding join mode.
>
> **[1:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=84)** The option matching rows corresponds to the inner join mode.
>
> **[1:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=89)** Matching rows and left unmatched rows correspond to the left outer join.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=94)** Right unmatched rows correspond to the right outer join when selected together with the matching rows option.
>
> **[1:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=100)** Selecting all three options is a full outer join.
>
> **[1:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=104)** Deactivating the matching rows box outputs only the unmatched rows.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=108)** The respective join modes are called anti-joins.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=113)** For this example, select the inner join to keep only the source that appear in both tables.
>
> **[1:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=119)** In the column selection tab, you can select which columns of the two tables will be included in the join table and specify how to handle possible duplicate column names.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=129)** Execute and have a look at the results of the inner join.
>
> **[2:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=132)** The join table has the columns from both tables, order number from the orders table, StoreType from the stores table, and the two joining columns Store and StoreID from both tables.
>
> **[2:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=145)** The table has three rows for those stores' ID that were present in both tables.
>
> **[2:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=150)** Change the settings to perform the full outer join.
>
> **[2:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=153)** Now the join table has all the rows from both input tables.
>
> **[2:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=157)** The rows that don't have matching rows in the other table are filled with missing values.
>
> **[2:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=163)** If you check the option split join result into multiple tables, the matched rows will appear in the first output port and the unmatched rows from the left and right tables in the second and third port respectively.
>
> **[2:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=176)** Let's now have a look at one last example when there are multiple matching rows.
>
> **[3:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=181)** In this table, the store 2392 appears twice.
>
> **[3:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=185)** In this case, the matching row from the left table is joined with both rows from the right table with this store already, creating duplicates in output.
>
> **[3:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=194)** Notice that this is true for all types of joins, inner, left, right, and full outer join.
>
> **[3:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=200)** You can see the joiner node is a more complex and powerful version of the value lookup node.
>
> **[3:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=205)** Although the two operations present some substantial differences.
>
> **[3:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=209)** The value lookup only lets you select one matching or lookup column, while you can select multiple matching or joining columns in the joiner node and even declare a match if only some of their values match.
>
> **[3:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=222)** In the value lookup node, you can only handle multiple or no matches from the data table.
>
> **[3:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=227)** The joiner node, on the other hand, gives you more freedom with the selection of inner, left, right and full outer join.
>
> **[3:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=234)** In addition to that, in case of multiple matches, it creates duplicate rows in output.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=241)** Finally, the value lookup can only filter columns of the dictionary table while the joiner has options to filter both left and right tables.
>
> **[4:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=250)** In this video, you have learned how to join two tables in KNIME Analytics Platform, how to configure the joiner node for different join modes, and the differences between the value lookup and the joiner node.
>
> **[4:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-merging-with-knime-how-to-join-two-tables?u=76281980&t=261)** (lively music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (11)
> **Code Keywords:** finally, (2), let (2), case, (2), match. (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** knime (2)
> **UI Navigation:** open the (1), select the (1)
> **Prerequisites:** configure (2)
> **Non-Speech:** (lively music) (2)
> **Speakers:** - in (1)


### 7. Data Aggregation

> [↑ Back to Table of Contents](#table-of-contents)

#### Data aggregation with KNIME: Simple aggregations
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=0)** (soft upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=5)** - In this video, you will learn what data aggregation is and how to perform basic data aggregation in KNIME Analytics Platform.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=12)** Let's jump into it.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=14)** Performing data aggregation means creating a summarized version of the data.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=18)** In this table, each product, indicated by its product ID, is associated with a category, Clothing, Home, and Electronics, and a number of ordered items.
>
> **[0:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=28)** You can create an aggregated version of this table by, for example, listing all the unique categories and summing the order items for each of those categories.
>
> **[0:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=37)** The column used for the aggregation is called group or category column.
>
> **[0:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=42)** You can then select a certain aggregation method, in this case, the sum to be performed on one or more aggregation columns, in this case, the order items.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=53)** Let's see how to perform data aggregation in KNIME Analytics Platform using the Row Aggregator Node.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=59)** This data table contains transaction data.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=62)** Each order is repeated in multiple rows, each of which contains a single product of the order, its unit price and the quantity in that order.
>
> **[1:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=71)** You want to calculate how many items are in each order.
>
> **[1:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=74)** This means that you need to select all the rows of a certain order number and sum up the quantity.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=80)** Drag and drop the Row Aggregator Node and open its configuration window.
>
> **[1:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=84)** As Category column, select the OrderNumber.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=87)** You can choose among multiple aggregation methods, select Sum.
>
> **[1:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=91)** Finally, select only Quantity as the aggregation column.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=96)** Have a look at the result.
>
> **[1:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=97)** The output table contains the unique orders and the total amount of items in each of them.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=102)** You can also select the Weight column when performing the aggregation.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=106)** In this example, the total value of an order is given by the price of the products multiplied by the quantity.
>
> **[1:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=112)** Configure the Row Aggregator to perform this additional operation.
>
> **[1:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=115)** Select the column Price as Weight column.
>
> **[2:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=120)** This time, while calculating the sum of items quantity for each order, the node multiplies each quantity for the respective price.
>
> **[2:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=128)** Finally, by selecting grand totals, the second output port of the node shows the total sum of the table values without Category column.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=140)** In this video, you've learned what data aggregation is and how to perform basic data aggregations using the Row Aggregator Node.
>
> **[2:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=147)** Note that the Row Aggregator Node covers frequent yet basic use cases.
>
> **[2:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=152)** For more complex aggregations, such as using more than one Category column or more advanced aggregation methods, Have a look at the Group By Node.
>
> **[2:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-simple-aggregations?u=76281980&t=159)** (soft upbeat music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (7)
> **Code Keywords:** let (2), case, (2), finally, (2)
> **UI Navigation:** select the (3), drag and drop (1)
> **Env Vars:** knime (2)
> **Definitions:** is called (1), means that (1)
> **Analogies:** for example (1), such as (1)
> **Non-Speech:** (soft upbeat music) (2)
> **Warnings:** note that (1)

#### Data aggregation with KNIME: The GroupBy node
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=0)** - In this video, you will learn how to perform advanced data aggregations using the group by node in Analytics Platform, let's have a look.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=13)** The most straightforward way to perform data aggregation in KNIME is using the raw aggregator.
>
> **[0:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=19)** Sometimes, however, you need to perform more complex aggregations grouping by multiple columns, for example, or using multiple aggregation methods.
>
> **[0:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=27)** In those cases, the group by node is the way to go.
>
> **[0:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=32)** You have a data table, sorting customer transaction data.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=35)** Each order number is repeated multiple times, one for each of the products it contains, together with the unit price of the product and the quantity.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=44)** You want to aggregate the table in order to obtain the number of times that a certain customer bought a product.
>
> **[0:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=50)** Therefore, you need to select each combination of product and customer.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=55)** In the configuration window of the group by node, in the group tab, include the columns customer ID and product number.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=62)** Executing the node as is will output all the combinations of customer and products available in the table.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=69)** To count to number of times an item was bought by a customer, you need to sum up the quantity column.
>
> **[1:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=75)** To do that, move to the manual aggregation tab, double click the column quantity and change the aggregation method to sum.
>
> **[1:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=84)** The node create a new column containing the sum of the quantity for each combination of customer and product.
>
> **[1:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=91)** The aggregation power of the group by node does not stop here.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=94)** You can add as many aggregation methods as you need, on the same column or on multiple columns.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=101)** Note that the list of aggregation methods changes according to the data type of the aggregation column.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=107)** Some of the aggregation methods are however available for all column types.
>
> **[1:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=112)** Among them, the count aggregation method is the one that you can use to count the total number of records per group.
>
> **[1:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=118)** This aggregation method is independent from the column values.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=122)** That means count returns the same value no matter on which column you're applying the aggregation method.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=129)** Note that for each aggregation method, you can also set to include or ignore possible missing values by ticking the corresponding checkbox.
>
> **[2:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-the-groupby-node?u=76281980&t=138)** In this video, you have learned how to perform advanced data aggregations in Analytics Platform using the group by node.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7)
> **Warnings:** note that (2)
> **Non-Speech:** (upbeat music) (2)
> **Code Keywords:** let (1)
> **Env Vars:** knime (1)
> **UI Navigation:** checkbox (1)
> **Analogies:** for example (1)
> **Speakers:** - in (1)

#### Data aggregation with KNIME: Pivoting
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=0)** - In this video, you will learn what pivoting is and how to create a pivot table in analytics platform.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=10)** Let's jump into it.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=12)** First, let's take a look at some example use cases where pivoting is helpful.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=17)** Here you have a dataset that contains daily weather information from different cities over the course of one year.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=23)** In the pivot table, each cell quantifies the total sum of sunshine hours for each city here in the column headers, in each month, here in the rows.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=35)** In the second example, you have a dataset containing sales information: country, purchase order date, and purchase order value.
>
> **[0:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=43)** In the pivot table, each cell quantifies the average purchase order value for each country in each month.
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=51)** The third example includes, once again, sales data.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=55)** You want to know the number of times each product has been purchased in the online and onsite stores.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=61)** In the pivot table, you want to report the product numbers in the rows and the store types In the columns.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=68)** Each cell contains the total number of times a particular product has been purchased in that store type.
>
> **[1:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=74)** Using the pivot node in Analytics Platform, it is easy to create this kind of aggregated tables.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=80)** The different values of one column becomes unique rows, and the different values of another column becomes column headers.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=88)** In addition, an aggregation method is applied to a third column.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=93)** Every time you create a pivot table, you have to define which column to use to generate the rows, which column to use to generate the column headers and which column to use to apply the aggregation method.
>
> **[1:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=104)** The column product number is the group column.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=108)** This means the values in this column generate the rows In the pivot table.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=113)** Store type column is the pivot column.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=116)** This means the values in this column generate the column headers in the pivot table.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=121)** Quantity is the column chosen for the aggregation, and the aggregation method is sum.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=127)** Now, let's do that in Analytics platform.
>
> **[2:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=130)** The columns that you're interested in are the columns product number, store type, and quantity.
>
> **[2:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=137)** Open the configuration of the pivot node.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=140)** Do you remember the three options: group, pivot and aggregate?
>
> **[2:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=144)** Here you can see that for each option you have one tab.
>
> **[2:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=147)** In the groups tab, you can define the rows in the pivot table.
>
> **[2:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=152)** In this example, each value in the product number column produces one row in the pivot table.
>
> **[2:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=158)** Therefore, include this column in the group columns.
>
> **[2:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=162)** The pivot table will have two columns: one for the online and one for the onsite store.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=168)** Include the column store type in the pivot columns.
>
> **[2:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=172)** Under the include and exclude fields in the pivot tab, there is also an option that allows missing values to generate their own pivot column.
>
> **[3:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=181)** You have now defined the column headers and the rows of the pivot table.
>
> **[3:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=186)** Next, define the aggregation column and the aggregation method in the manual aggregation tab.
>
> **[3:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=192)** Like the group I node, the pivot node offers many aggregation methods.
>
> **[3:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=195)** For example, count, mean, percent, and sum.
>
> **[3:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=199)** If the meaning of some of the aggregation methods is not clear, you can find a handy explanation in the description tab.
>
> **[3:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=208)** In this example, you want to compute the number of times an item has been purchased for each store type.
>
> **[3:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=214)** In practice, this means that you want to sum the value quantity in these groups.
>
> **[3:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=218)** Select the quantity column as the aggregation column and sum as the aggregation method.
>
> **[3:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=228)** In addition, you can define some more advanced settings in the lower part of the configuration dialogue.
>
> **[3:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=234)** Using these two menus, you can define the column names and the pivot table.
>
> **[4:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=240)** In the first menu, select if you want to include the pivot column value and the aggregation method name or only the pivot column value.
>
> **[4:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=246)** In the second menu, select how the aggregation method name is going to appear, whether it should be included in the column names or not.
>
> **[4:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=254)** Execute the node and have a look at the output.
>
> **[4:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=257)** In the first output table, you can see the expected pivot table.
>
> **[4:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=262)** Note that if a combination of product and store type is not present, the node outputs a missing value.
>
> **[4:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=268)** In addition to the pivot table, the node has two other output tables.
>
> **[4:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=273)** The second output table shows the group totals, that is the totals by row.
>
> **[4:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=278)** The third output table shows the pivot totals.
>
> **[4:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=280)** There is the total by columns.
>
> **[4:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-aggregation-with-knime-pivoting?u=76281980&t=283)** In this video, you have learned what pivoting is and how to create a pivot table in Analytics Platform.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), find (1)
> **Code Keywords:** let (3), type. (2), type, (1)
> **UI Navigation:** open the (1), select the (1)
> **Non-Speech:** (upbeat music) (2)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - in (1)


### 8. Data Export and Visualization

> [↑ Back to Table of Contents](#table-of-contents)

#### Data export with KNIME: Write to a CSV file
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=0)** (lively music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=5)** - In this video, you will learn how to save data to a CSV formatted file and how to write files directly to a remote file system.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=13)** Note that we'll be using CSV files, but data export works pretty much the same for the many other file types such as Excel files, JSON files, and so on.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=23)** Let's have a look.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=24)** CSV means comma separated values, and it's the format that typically stores tabular data in plain text.
>
> **[0:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=32)** The data entries are organized by rows, and the values are separated by the specified delimiter.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=39)** Usually the delimiter is a comma, but it can also be a semicolon, tab, or some other special characters.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=46)** Typically, the first row of the CSV file source the column headers.
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=51)** Let's see how to export the data table to a CSV file in analytics platform.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=56)** You have performed some operations on your data and want to write the results on a CSV file.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=62)** Add the CSV writer node to the workflow.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=65)** In its configuration window, you have to define the output location of the file that you want to write in the local file system.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=72)** You can provide the full absolute path, for example, via browsing the desired location.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=78)** Just as in reader nodes, you can also write relatively to a specified mount point, current workflow or current workflow data area, or use a custom URL in the path.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=87)** You can provide not only the existing location and the file name, but also the new folders to be created.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=93)** Missing folders will be created automatically if we check the relative box.
>
> **[1:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=98)** If the file already exists, you can either overwrite it, append the new rows to the end of the existing file, or stop the writing operation.
>
> **[1:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=107)** If you want to append new data to the existing file, note that you can check the option, don't write column headers if file exists.
>
> **[1:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=114)** This will append the new data to the table without the column headers in between.
>
> **[2:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=120)** Below, you can specify the format of the CSV file, set the column delimiter, the road delimiter, the quote, and the escape character.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=129)** In the advanced settings, you can specify when to use quotes.
>
> **[2:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=133)** Here you can also set the characters to use as decimal separator, as well as some additional options for numeric values.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=140)** The node also gives you the possibility to set the comment in the beginning of the file and the character set for encoding.
>
> **[2:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=147)** Once the node is executed, the CSV file will appear in the chosen location.
>
> **[2:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=153)** You can also write the files directly to a remote file system.
>
> **[2:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=156)** If you want to write the results to a file located on Amazon S3, for example, use the Amazon Authenticator and the Amazon S3 Connector Node to set up the connection and specify the remote working directory.
>
> **[2:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=169)** Then, provide the file system connection to the CSV writer node.
>
> **[2:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=173)** The port will show up automatically, but you can also add it manually by clicking the plus icon on the bottom right corner of the node.
>
> **[3:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=182)** In the CSV writer node, the output location is now set to Amazon S3.
>
> **[3:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=187)** You can now provide the file path by browsing on S3 like you did for the local file system.
>
> **[3:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=192)** Execute the CSV writer node to write the data to the CSV file in the specified location on Amazon S3.
>
> **[3:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=199)** You can do the same for the many other cloud remote and distribute file systems supported, such as Google Cloud Storage, Microsoft SharePoint, Azure Drop Storage, Databricks, and more.
>
> **[3:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=210)** In this video, you have learned how to save data to a CSV formatted file and how to write files directly to our remote file system.
>
> **[3:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-export-with-knime-write-to-a-csv-file?u=76281980&t=218)** (lively music)

> [!info]- Semantic Content
>
> **Env Vars:** csv (14), json (1), url (1)
> **CLI Commands:** node (8)
> **Analogies:** such as (2), for example (2)
> **Code Keywords:** let (2)
> **Warnings:** note that (2)
> **Non-Speech:** (lively music) (2)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### Data visualization with KNIME: How to create a scatter plot
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=0)** (chill lofi music)
>
> **[0:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=6)** - In this video, you will learn how to plot your data on an interactive scatter plot.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=10)** Let's get started.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=12)** One classic way to visualize the relationship between two columns is through a scatter plot.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=18)** A scatter plot represents input data rows as point in a two-dimensional chart.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=23)** Let's see how to implement such a plot in Analytics Platform with a scatter plot node.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=30)** This dataset describes the weather in Austin in the last few years.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=34)** For each day, it reports the temperature, dew point, humidity, wind, and precipitation.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=41)** Provide this data to the scatter plot node and open its configuration.
>
> **[0:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=45)** You can see the fields to configure the node on the right and a space for the preview on the left.
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=51)** If you click Save & execute, you can see a preview of the plot with the current configuration.
>
> **[0:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=57)** On the right, first, select the columns that you want to plot in the horizontal and vertical dimensions.
>
> **[1:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=63)** Select the average temperature for the horizontal dimension and dew point for the vertical dimension.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=69)** The plot gets updated as you go.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=72)** Scroll down and give a name to your plot.
>
> **[1:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=75)** You also have the possibility to change the axes limits, label the axes, and scale them.
>
> **[1:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=82)** You can visualize the node by clicking the magnifier in the node action bar.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=87)** The plot is fully interactive.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=88)** You can zoom in and out, pan, select points, and show their values.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=93)** In the top right corner, you can find the buttons to download the plot as an image, control the zooming, and select multiple points at once.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=102)** You can only plot two dimensions in the scatter plot.
>
> **[1:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=105)** However, a third dimension can be introduced using colors.
>
> **[1:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=109)** Use a Color Manager node to color each row according to the values in a column.
>
> **[1:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=114)** Select, for example, the humidity.
>
> **[1:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=117)** This is a numeric column, so the color will be assigned from a continuous color scale.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=121)** Select light green for the minimum and dark green for the maximum value.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=127)** Note that a color gets associated with each row of the output table.
>
> **[2:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=132)** In the configuration of the scatter plot, select the column to use as color dimension.
>
> **[2:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=137)** Each point gets now displayed with its shade of green.
>
> **[2:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=141)** The node also provides an interactive filter if you want to display only part of the data.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=146)** You can also assign a color to nominal values.
>
> **[2:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=149)** Open again the Color Manager and select the column, Rain.
>
> **[2:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=155)** Map the values yes and no to a color from the available palette.
>
> **[2:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=159)** Select the column Rain as color dimension.
>
> **[2:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=163)** Note that also in this case, you can filter the points according to the nominal column used for coloring.
>
> **[2:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=170)** In this video, you have learned how to create a scatter plot and how to encode one more dimension using the Color Manager node.
>
> **[2:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=177)** In Analytics Platform, there are several built-in nodes to create visualizations, and soon you will learn that you can also combine them into a single interactive view to create powerful dashboards.
>
> **[3:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/data-visualization-with-knime-how-to-create-a-scatter-plot?u=76281980&t=188)** (chill lofi music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), find (1)
> **UI Navigation:** select the (5), scroll down (1)
> **Code Keywords:** let (2), case, (1)
> **Warnings:** note that (2)
> **Non-Speech:** (chill lofi music) (2)
> **Cross-References:** in the last (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)

#### Three steps to build an interactive dashboard with KNIME
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=5)** - In this video, you will learn how to build an interactive dashboard with multiple plots in three easy steps.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=11)** Let's get started.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=13)** This dashboard shows what was going on in the Netflix catalog in the past years.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=18)** The sunburst chart displays how the shows are distributed among the categories.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=24)** Stacked area chart displays the number of new movies and TV shows added to the catalog.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=30)** Scrolling down, you get some information about the movies and TV shows' length, respectively from the histogram and the bar chart.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=38)** As you can see, a clear majority of the TV shows last only one season.
>
> **[0:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=43)** At the bottom, a table view shows the rows of the data behind the dashboard, possibly selected from the histogram and the bar chart above.
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=52)** Let's see how to build this kind of a dashboard in KNIME Analytics Platform in three easy steps.
>
> **[0:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=57)** The KNIME workflow behind the dashboard is pretty simple.
>
> **[1:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=60)** There is a CSV Reader node to load the data into the workflow and meta nodes that encapsulate the pre-processing steps.
>
> **[1:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=67)** At this point, the data is in the form needed to create the visualizations.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=72)** Start with an histogram to show the duration of the movies.
>
> **[1:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=80)** Then add the bar chart to plug the number of seasons for the TV shows.
>
> **[1:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=89)** Step two, wrap the visualization up into a component.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=93)** The histogram and bar chart nodes create single views.
>
> **[1:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=97)** If you want to see them together, you have to group them into a component.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=101)** Select the nodes, right-click, and select Create component.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=106)** Give it a meaningful name, Netflix Overview, for example.
>
> **[1:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=111)** If you open the view of the component, you can see that the two visualizations are shown together, one under the other in the same interactive view.
>
> **[1:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=119)** What is missing now is a bit of rearrangement.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=122)** Step three, customize the view layout.
>
> **[2:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=125)** Open the component by right-click, Component, Open.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=129)** As you can see, it contains all the nodes that you selected before.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=134)** To configure the layout of the dashboard, click Open layout editor in the toolbar.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=140)** In the window that pops up, you can set the size and the position of the elements by drag and drop.
>
> **[2:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=145)** Organize them in columns and rows by adding placeholders from the left.
>
> **[2:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=150)** Set the histogram and bar chart to appear one next to the other.
>
> **[2:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=154)** Note that you can also add and remove columns by clicking the icons on the sides.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=164)** You can further customize the layout by adding a title to the page using the Text Output Widget node.
>
> **[2:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=170)** It supports plain and HTML Text.
>
> **[2:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=177)** Open again the layout editor and place the title at the top of the page.
>
> **[3:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=188)** In the same way, you can build all the visualizations that you desire.
>
> **[3:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=191)** For example, here is the component with all the elements of the Netflix dashboard.
>
> **[3:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=197)** It is important to note that you can select data in the visualizations and propagate the selection across the views.
>
> **[3:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=206)** In this example workflow, for example, you can configure the table view to only show the rows that are selected in the histogram and bar chart above.
>
> **[3:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=215)** Optionally, such a dashboard can be deployed as a data app on KHIME Business Hub to be accessed by anyone via web browser.
>
> **[3:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=222)** In this video, you have learned how easy it is to build an interactive dashboard in KNIME Analytics Platform.
>
> **[3:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=228)** Just keep in mind the three easy steps.
>
> **[3:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=231)** Create a few plots, wrap them up into a component, and edit the view layout.
>
> **[3:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=236)** Finally, if you want to make your dashboard accessible via web browser, you can deploy it as a data app on KNIME Business Hub.
>
> **[4:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/3-steps-to-build-an-interactive-dashboard-with-knime?u=76281980&t=242)** (bright music) (bright music fades)

> [!info]- Semantic Content
>
> **Env Vars:** knime (4), csv (1), html (1), khime (1)
> **UI Navigation:** right-click (2), open the (2), select the (1), in the toolbar (1), drag and drop (1)
> **CLI Commands:** node (2), make (1)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** for example (3)
> **Non-Speech:** (bright music) (2), (bright music fades) (1)
> **Definitions:** is a  (2)
> **Warnings:** note that (1), keep in mind (1)


### 9. Flow Variables

> [↑ Back to Table of Contents](#table-of-contents)

#### Flow variables in KNIME Analytics Platform: Concept and application
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=0)** (calm music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=5)** - In this video, you will learn what a flow variable is and how to create and use it.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=10)** Let's look into that.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=13)** In this workflow, we read in some sales data, filter the entries for Germany, calculate the total revenue, and finally, rename the Total Revenue column to Germany.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=24)** This workflow works fine for the country of Germany.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=26)** However, if you want to obtain the same table for the USA, you need to change the configuration of both the Row Filter and the Column Renamer nodes.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=35)** This is a simple workflow, but if you had a more complex workflow with more nodes and settings to update, it would be inefficient and error prone to reconfigure it manually.
>
> **[0:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=46)** This is exactly where you need flow variables.
>
> **[0:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=49)** A flow variable is a parameter in a KNIME workflow to overwrite a node's configuration settings.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=55)** In our example, you can control a node's settings configuring the country with a parameter, flow variable, to execute the workflow for different countries without manually changing the settings.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=66)** Similar to data columns, flow variables can be of different types: string, integer, double, arrays, or path.
>
> **[1:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=75)** There are different ways to create a flow variable.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=78)** Let's first have a look at how we can export a node's configuration as a flow variable.
>
> **[1:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=83)** Now that we have defined the filtering pattern, Germany, in the Row Filter node, we can export it as a flow variable and reuse this pattern in the downstream nodes.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=93)** Filtering pattern is a common setting to be controlled by a flow variable in the Row Filter node.
>
> **[1:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=98)** Therefore, for this setting, there is a special Flow Variable button to both control and export this setting.
>
> **[1:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=105)** We can export it by clicking the checkbox and writing the name of the flow variable, country.
>
> **[1:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=112)** Less common configuration settings don't have a special Flow Variable button, but all the settings can be controlled and exported in the Flow Variables tab.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=122)** You can see that the pattern setting is here too.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=126)** In the Node Monitor, in the Flow Variables tab, you can now find the variable country with value Germany.
>
> **[2:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=133)** Once created, flow variables are passed to all downstream nodes in a workflow branch.
>
> **[2:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=138)** Therefore, the country variable can be used by the subsequent nodes in the workflow.
>
> **[2:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=144)** Another way to create a flow variable is by using a dedicated node.
>
> **[2:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=148)** This can be for instance, Configuration nodes, Table Row or Column to Variable nodes, or the Variable Creator node.
>
> **[2:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=156)** The Variable Creator node is very simple.
>
> **[2:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=159)** It allows you to create multiple variables of different types.
>
> **[2:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=162)** Table Row or Column to Variable nodes create a flow variable from the first row or column of the input table, respectively.
>
> **[2:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=171)** Configuration nodes can be useful when you want to prompt a user to provide a variable of a particular type in a dedicated node or a component.
>
> **[3:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=180)** In our example, we need to create a flow variable of type string.
>
> **[3:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=184)** Therefore, we use the String Configuration node.
>
> **[3:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=189)** We set the name of the flow variable to country and the default value to Germany.
>
> **[3:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=198)** The red circle at the node output indicates a flow variable port and contains the created variable.
>
> **[3:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=205)** Now, to use this flow variable, we'll have to pass it to the Row Filter node.
>
> **[3:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=210)** Each node has input and output flow variable ports in their left and right upper corners.
>
> **[3:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=216)** They get visible when you hover over them.
>
> **[3:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=218)** By connecting the String Configuration and the Row Filter nodes, we create a red flow variable connection that you can use to pass variables to any nodes.
>
> **[3:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=228)** Now in the Row Filter node, we can use this flow variable to control the filtering pattern setting.
>
> **[3:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=234)** We click the Flow Variable button, tick the option Use Variable, and select the variable country.
>
> **[4:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=240)** Now that we use the variable created in the Configuration Node, we can untick the Create Variable option.
>
> **[4:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=246)** As before, if we needed to control a setting that doesn't have a Flow Variable button, we could do it in this Flow Variables tab.
>
> **[4:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=256)** Let's also overwrite a setting for the Column Renamer node.
>
> **[4:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=260)** We don't have to connect the String Configuration and the Column Renamer explicitly as the flow variable is being passed through the whole branch.
>
> **[4:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=267)** Starting with KNIME Version 5, some nodes have an updated configuration window as, for instance, the Column Renamer node.
>
> **[4:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=274)** Similar to classic configuration window settings that are commonly controlled by flow variables, they have a dedicated Flow Variable button.
>
> **[4:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=282)** In our case, we want to rename the Sum/Amount column with the selected country name, and hence we select the country variable from the dropdown menu.
>
> **[4:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=292)** To control or export all configuration settings by or as flow variables, you can right-click the node and select Configure flow variables.
>
> **[5:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=303)** You can see that the records got filtered for Germany and the Total Revenue column got renamed to Germany.
>
> **[5:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=310)** Let's now execute the same workflow for sales in the USA.
>
> **[5:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=314)** In the String Configuration node, we change the value to USA and execute the whole workflow.
>
> **[5:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=319)** You can see that the records got filtered for the USA and the column got renamed accordingly.
>
> **[5:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=325)** Note that we didn't change any setting in the workflow.
>
> **[5:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=329)** They got automatically adjusted by the flow variable we provided in the String Configuration node.
>
> **[5:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=335)** In this video, you have learned what a flow variable is, when it is useful, and how to create and use flow variables to control node settings and to automate parts of your workflow.
>
> **[5:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/flow-variables-in-knime-analytics-platform-concept-and-application?u=76281980&t=345)** (calm music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (22), find (1)
> **Code Keywords:** let (4), pass (2), finally, (1), case, (1)
> **Env Vars:** usa (4), knime (2)
> **UI Navigation:** select the (2), checkbox (1), dropdown (1), right-click (1)
> **Definitions:** is a  (4)
> **Analogies:** similar to (2), for instance (2)
> **Non-Speech:** (calm music) (2)
> **Versions:** version 5 (1)


### 10. Components

> [↑ Back to Table of Contents](#table-of-contents)

#### What is a component in KNIME Analytics Platform?
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=5)** - [Instructor] In this video, we explain what Components are in KNIME.
>
> **[0:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=9)** Let's jump into it.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=10)** A component is a KNIME node that contains a KNIME workflow, which lets you bundle functionality for sharing and reusing, has its own configuration dialog, and its own composite view.
>
> **[0:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=21)** Components are useful because they can hide complexity, but still let you dive into the details when needed, be reused in your own workflows, and shared with the community on KNIME Community Hub or with your colleagues on KNIME Business Hub.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=35)** Create interactive composite views combining multiple widget and visualization views, represent webpages in data apps deployed on KNIME Business Hub.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=44)** Let's first have a look at configuration nodes and widget nodes and how they complement the component.
>
> **[0:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=50)** You can find these nodes in the Node Repository on the Workflow Abstraction.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=55)** These nodes are important as they're used to explicitly model what parameters can be adjusted when using a component inside your own workflow and which visualizations are used to compose the Components view.
>
> **[1:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=67)** Adding configuration nodes to the workflow inside the component allows you to configure the component from the outside.
>
> **[1:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=73)** That is, from the Components Configuration dialog.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=77)** This could be, for example, entering a parameter or filtering rows without having to open the component or manually changing the configuration of any nodes inside of it.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=88)** Configuring a component works the same way as configuring any other KNIME node.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=94)** To summarize, because Components have their own dialog, they can be configured without touching the individual nodes inside them, providing a handy way to hide configuration complexity in your KNIME workflows and make repeatable functionality reusable.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=108)** If you need, of course, you can still dive into the details inside a component and make any adjustments relevant to your own use case.
>
> **[2:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=120)** Adding Widget nodes, along with View nodes inside your component, on the other hand, allows you to create a composite view and customize it.
>
> **[2:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=128)** For example, you could create a title, various parameters similar to configuration settings, or a Refresh button to refresh the views according to the widget settings.
>
> **[2:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=138)** You can also customize the composite views layout as you need.
>
> **[2:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=143)** The Components view then also corresponds to a page of a data app deployed on KNIME Business Hub.
>
> **[2:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=150)** Let's next have a more detailed look at one of the key features of Components, reusing and sharing.
>
> **[2:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=156)** Data science projects often involve repeated tasks, entering credentials for a database, optimizing the parameters of a machine learning model, or calculating some KPIs, to name a few.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=168)** These kinds of tasks can be bundled up into Components.
>
> **[2:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=173)** You can then store a component on your local machine on KNIME Community Hub or KNIME Business Hub.
>
> **[3:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=180)** Once the component is created and stored, you can reuse it in the same or in other workflows and share it with others to avoid double work.
>
> **[3:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=189)** If there is repeatable functionality you need, check out the KNIME Community Hub where you can find various Components, for example, for automating the selection of the classification threshold and for visualizing data in a world map.
>
> **[3:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=202)** From here, you can drag and drop the component directly onto your KNIME Workflow Editor and start using it.
>
> **[3:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=210)** Another key feature of Components is a composite view that can combine multiple views and represent a webpage in a data app.
>
> **[3:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=217)** Using Components, you can build workflows that, once deployed on KNIME Business Hub, can be a valuable as one or multi-page data apps and accessible on a web browser from any machine independent of the local installation of KNIME Analytics Platform.
>
> **[3:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=232)** For example, here is one-page data app that visualizes the stockout trend for selected warehouse locations and item categories.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=241)** The view is interactive.
>
> **[4:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=243)** This means a selection in one view is also published in other views.
>
> **[4:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=248)** The view you can see on this webpage is provided by one component that contains view and widget nodes that compose the Components view.
>
> **[4:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=257)** In this video, you have learned what Components are and how they're useful for hiding the complexity and workflows, reusing and sharing functionality with others, and representing data app pages.
>
> **[4:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-component-in-knime-analytics-platform?u=76281980&t=269)** (gentle upbeat music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (15)
> **CLI Commands:** node (3), find (2), make (2)
> **Code Keywords:** let (4), case. (1)
> **Analogies:** for example (4), similar to (1)
> **UI Navigation:** open the (1), drag and drop (1)
> **Definitions:** is a  (2)
> **Non-Speech:** (gentle music) (1), (gentle upbeat music) (1)
> **Prerequisites:** configure (1)

#### Create, modify, and configure a component in KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=5)** - In this video, you'll learn how to create and modify a component, create a component configuration, and how to create a composite view for a component.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=14)** Let's get started.
>
> **[0:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=16)** Here, you see a workload that contains a Configuration node.
>
> **[0:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=20)** This Date&Time Configuration node allows you to create a flow variable with a date value.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=25)** The Date&Time-based row filter then filters the data using this flow variable.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=30)** How do you turn this functionality into a component?
>
> **[0:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=33)** You start by selecting the nodes.
>
> **[0:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=35)** Next, right-click and select Create component.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=39)** The selected nodes get wrapped into a component, and you can directly give it a name, for example, Filter Sales Data.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=48)** If you right-click on the component and select Component, you can see possible actions, such as Open, Rename, change the layout, Expand, or Share a component locally or on KNIME Community or Business Hub.
>
> **[1:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=63)** You can quickly open the component by pressing Control and double-clicking on it.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=69)** Here, you can inspect and modify the nodes inside of the component.
>
> **[1:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=73)** To return to the main workflow, click here.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=77)** You can configure the component in the same way as any other KNIME node.
>
> **[1:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=81)** In the Configuration Dialog, the date input is shown as defined by the Date&Time Configuration node inside the component.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=88)** If you change the value, the component will produce different results.
>
> **[1:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=93)** However, now you don't see the output unless you open the component.
>
> **[1:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=97)** Let's modify it.
>
> **[1:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=99)** First, let's add an output table port to it.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=102)** For that, hover over the component.
>
> **[1:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=105)** Click the plus button on the right side of it and select Table port type.
>
> **[1:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=110)** Next, let's open the component and connect the table output to the component output.
>
> **[1:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=117)** You can add other configuration settings to the component's Configuration Dialog.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=122)** Let's add a Nominal Row Filter Configuration node to filter the data by country.
>
> **[2:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=128)** In its Configuration Dialog, you can enter the component configuration setting label.
>
> **[2:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=133)** name the output variable, select the column to filter data by and lock it, and select the default values.
>
> **[2:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=140)** Now, if you check the Component Configuration Dialog, the newly created configuration setting appears there as well.
>
> **[2:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=147)** You can change the layout of the Component Configuration Dialog.
>
> **[2:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=151)** For that, open the Layout Editor, navigate to Configuration Dialog Layout, and drag and drop the configuration settings.
>
> **[2:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=160)** Another thing you can modify is the flow variable scope.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=164)** By default, a variable defined inside a component is not a valuable outside of it, and the variable defined outside the component is not a valuable insight.
>
> **[2:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=173)** to change the default behavior inside of the component, in the Component Input, you can import variables from the main workflow to the component.
>
> **[3:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=182)** Similarly, in the component output, you can export variables from the component to the main workflow.
>
> **[3:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=193)** A configurable component is a great tool for reusing and sharing.
>
> **[3:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=197)** Another powerful feature of a component is a composite view that can combine interactive widgets and views.
>
> **[3:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=204)** Such a component can then represent a data app page once a workflow is deployed to KNIME Business Hub.
>
> **[3:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=211)** Here, you can see a component with a composite view.
>
> **[3:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=214)** It allows a user to select a date and the country and visualize the selected data.
>
> **[3:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=220)** How do you create such a view?
>
> **[3:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=222)** Inside, you can see the Date&Time and Nominal Row Filter widget nodes.
>
> **[3:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=227)** Their configuration is similar to the one of the respective Configuration nodes.
>
> **[3:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=231)** The Bar Chart node creates an interactive visualization.
>
> **[3:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=235)** The widgets and the visualization are combined into an interactive composite view.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=241)** To update the bar chart according to the widget settings provided by user in the composite view, the Refresh Button Widget is added before the nodes that have to be re-executed.
>
> **[4:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=250)** You can also beautify the view by adding descriptions, guides, and a header in different styles.
>
> **[4:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=257)** Similar to the Configuration layout, you can adjust the composite view layout.
>
> **[4:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=267)** If you change the widget settings and click the Refresh button, the bar chart gets adjusted automatically, depending on your input.
>
> **[4:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=274)** This interactive view is local and can be used as a preview of a data app webpage before the workflow is deployed on KNIME Business Hub.
>
> **[4:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=282)** In this video, you have learned how to create a new component and modify it, create components configuration options, and composite view.
>
> **[4:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/create-modify-and-configure-a-component-in-knime-analytics-platform?u=76281980&t=290)** (bright music) (bright music fades)

> [!info]- Semantic Content
>
> **UI Navigation:** open the (4), right-click (2), select the (2), navigate to (1), drag and drop (1)
> **Code Keywords:** let (5), type. (1), default, (1)
> **CLI Commands:** node (6)
> **Env Vars:** knime (4)
> **Analogies:** for example (1), such as (1), similar to (1)
> **Non-Speech:** (bright music) (2), (bright music fades) (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1)


### 11. Workflow Control

> [↑ Back to Table of Contents](#table-of-contents)

#### What is a loop?
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=0)** - In this video, you'll learn what loop is, how to build a loop, and how to distinguish between different types of loop nodes in analytics platform.
>
> **[0:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=14)** Let's jump into it.
>
> **[0:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=16)** Imagine the following use case.
>
> **[0:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=18)** You have a list of orders from different countries, and you want to write the orders for each country into a separate sheet, in this example, in Excel sheet.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=26)** What you can do of course, is to check which countries are there in the table, select the first one, filter its orders, write it to a separate sheet, and then repeat the process for the next country until you go through all of them.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=40)** This can be a tedious and error-prone process.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=44)** What if the number of countries is large, or what if new countries appear in the orders from time to time?
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=51)** Is there a simpler way?
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=52)** Yes, you can repeat the workflow segment for different data by using a loop.
>
> **[0:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=58)** You can also define the parameters for parts of this workflow segment that should dynamically change, depending on the iteration with flow variables.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=66)** So let's see what a loop is.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=69)** A loop can iterate over a workflow segment and repeat its execution automatically for different inputs, but changes for each iteration can be a parameter value, a dataset, a subgroup of the same dataset, a single column, or a single row as flow variables.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=88)** A loop in KNIME begins with a loop start node, contains the loop body, and ends with a loop end node.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=94)** Generally, the loop start node increases the iteration counter, and sends the data to the loop body.
>
> **[1:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=100)** The loop body then executes the operations to be repeated.
>
> **[1:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=104)** After those are performed, the loop end node checks if the end condition is fulfilled, and if not, the loop start node starts the next iteration, and the loop body performs the operations again.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=116)** When the end condition is fulfilled, the loop end node collects the data from the different iterations and closes the loop.
>
> **[2:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=124)** Let's look at a simple example of a loop that can solve the task discussed earlier, namely, to filter the orders for each country and write them to a separate sheet.
>
> **[2:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=133)** The group loop start node here defines the column categories the loop iterates through.
>
> **[2:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=138)** At each new iteration, it filters the data for one category and sends it to the loop body.
>
> **[2:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=143)** It also exports a flow variable describing which category is used in this iteration.
>
> **[2:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=149)** In the loop body, we have only one node, the Excel writer, which at each iteration, writes the order data from the country to a separate sheet.
>
> **[2:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=158)** This node will name each sheet according to the corresponding country because it's parametrized by the category flow variable from the group loop start node.
>
> **[2:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=167)** The loop body can of course be as complex as you need, with multiple nodes, more advanced workflow structures, and even nested loops.
>
> **[2:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=176)** Finally, the variable loop end node checks whether the loop iterated through all the countries, and if yes, closes the loop and collects flow variables from all the iterations.
>
> **[3:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=186)** The loop you saw now is just one of many types of loops available in KNIME Analytics Platform.
>
> **[3:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=192)** For different types of loops, there are different loop start and loop end nodes.
>
> **[3:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=197)** For example, a group loop start, you saw in the example, iterates over groups of data until it iterates through all of them.
>
> **[3:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=205)** A similar node is a chunk loop start.
>
> **[3:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=207)** It does the same for consecutive data chunks of a specified size.
>
> **[3:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=211)** These two nodes are useful when in each loop iteration you need to process a different group of data.
>
> **[3:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=218)** Another common node is a counting loop start node that performs a specified number of iterations.
>
> **[3:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=224)** This node is useful when you know beforehand how many times the loop should execute.
>
> **[3:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=229)** A different type of loop is a recursive loop.
>
> **[3:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=232)** A recursive loop start node iterates over the loop body output data table until a particular condition is met.
>
> **[3:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=239)** This loop is useful, for example, when you need to retry some action until success.
>
> **[4:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=245)** Let's have a look at a couple of examples of loop end nodes.
>
> **[4:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=249)** The most common way to close a loop is with a loop end node.
>
> **[4:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=253)** It concatenates the data from iterations.
>
> **[4:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=256)** A loop end column append does the same but column wise, by joining the tables from different iterations.
>
> **[4:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=263)** A variable loop end node that you saw in the example provides a way to close the loop that doesn't produce any data, for example, when all the data processing ends and the data gets exported in the loop body.
>
> **[4:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=276)** You can see that there are many other loop start and end nodes available in KNIME Analytics Platform.
>
> **[4:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=282)** While some loop start nodes can be paired only with one type of loop end node, some loop start nodes have several options with which loop end node to be combined.
>
> **[4:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/what-is-a-loop?u=76281980&t=292)** In this video, you have learned what a loop is, how to build a loop, and how to distinguish between different types of loop nodes available in KNIME Analytics Platform.

> [!info]- Semantic Content
>
> **CLI Commands:** node (20)
> **Code Keywords:** let (4), case. (1), finally, (1)
> **Env Vars:** knime (4)
> **Analogies:** for example (3), imagine (1)
> **Definitions:** is a  (3)
> **Non-Speech:** (upbeat music) (2)
> **UI Navigation:** select the (1)
> **Speakers:** - in (1)

#### Build, execute, and debug a loop in KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=0)** (gentle music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=5)** - In this video, you will learn how to build, execute, and debug loops in KNIME Analytics Platform.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=10)** Ready? Let's go.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=12)** Let's have a look at the example workflow.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=15)** Here, we want to use a loop to create a timestamp of the 15th stay for each month in 2023.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=23)** We create the table with two columns, day and year, each having one value, 15 and 2023.
>
> **[0:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=30)** Next, we want to repeat creating a timestamp 12 times and concatenate the results.
>
> **[0:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=37)** For that, we add a Counting Loop Start node to the workflow.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=41)** Some Loop Start nodes have dynamic ports, meaning you can add different types and numbers of ports.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=48)** If you use the quick node adding panel, the correct port will be added automatically.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=53)** We set the number of iterations to 12.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=59)** Each Loop Start node produces the flow variable current iteration with the counter of the current iteration.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=65)** Counting in KNIME Analytics Platform starts from zero, so the first iteration number is zero.
>
> **[1:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=71)** In the loop body, we then use a Math Formula node to add one to the current iteration number and produce the month's value, and we use a String Manipulation node to create a timestamp.
>
> **[1:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=84)** Finally, we add a Loop End node.
>
> **[1:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=87)** In the configuration of this node, you can decide how to treat duplicate RowIDs from different iterations; add an iteration column if you want to indicate which rows are generated in which iteration; export variables modified in the loop body back to the main workflow, by default, the modified values won't be propagated; and finally, enable or disable varying inputs from the different iterations.
>
> **[1:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=112)** This allows us to handle generation of empty tables and deal with data where mismatches in column types can occur.
>
> **[2:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=120)** The most straightforward way to execute the whole loop is by executing the Loop End node.
>
> **[2:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=128)** While the loop is executing, you can see the progress loop sign at the Loop End node.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=134)** At the node monitor, you can see the progress of the loop execution in the changing flow variable current iteration and the maximum number of iterations.
>
> **[2:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=143)** Now, the loop has been executed.
>
> **[2:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=145)** The resulting table has 12 rows with the respective timestamp and the iteration number in which each row was created.
>
> **[2:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=153)** If you want to reset the whole loop, you can reset any node in the loop body, as well as the Loop Start and the Loop End node.
>
> **[2:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=161)** Before starting the whole loop, you might want to test that it executes as expected on a couple of iterations.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=168)** Besides, sometimes a loop can fail, and you might need to debug a particular iteration.
>
> **[2:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=174)** This is where the stepwise execution comes in handy.
>
> **[2:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=178)** For that, in the Loop End node action bar, click the Stop button.
>
> **[3:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=182)** This will execute one iteration of the loop and pause.
>
> **[3:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=186)** You can see in the node monitor that the current iteration is now at iteration zero.
>
> **[3:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=191)** If you now click the Stop button again, the loop will go to iteration one and so on.
>
> **[3:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=197)** To run all the remaining steps, you can click the button Resume.
>
> **[3:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=202)** To pause the loop during execution, click on the Pause button.
>
> **[3:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=206)** Note that the nodes in the loop body will be fully executed for this iteration, but starting the next iteration will be paused.
>
> **[3:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=213)** You can also choose to cancel the loop execution.
>
> **[3:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=217)** Another way to debug a loop is by using a Breakpoint node.
>
> **[3:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=220)** It can be inserted in any place in the loop body, and when enabled, holds execution when the incoming data fulfills a specified condition.
>
> **[3:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=229)** A breakpoint can activate, for example, when a variable matches a particular value.
>
> **[3:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=235)** For instance, we want to stop the loop when it reaches June, meaning at iteration number five.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=241)** Let's execute the loop.
>
> **[4:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=245)** As you can see, at the fifth iteration, the breakpoint failed, the loop stopped, and we can inspect the results.
>
> **[4:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=252)** Once we are ready, we can disable the breakpoint and execute the loop completely.
>
> **[4:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=259)** In this video, you have learned how to build, execute, and debug loops.
>
> **[4:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/build-execute-and-debug-a-loop-in-knime-analytics-platform?u=76281980&t=264)** (gentle upbeat music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (15)
> **Code Keywords:** let (3), finally, (2), default, (1)
> **Env Vars:** knime (2)
> **UI Navigation:** go to (1), click on (1)
> **Analogies:** for example (1), for instance (1)
> **Non-Speech:** (gentle music) (1), (gentle upbeat music) (1)
> **Warnings:** note that (1)
> **Speakers:** - in (1)

#### Switch workflow branch execution in KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=0)** (mellow instrumental music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=5)** - In this video you will learn how to switch between different workflow branches in KNIME Analytics Platform.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=11)** Let's look into it.
>
> **[0:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=12)** In this workflow we read in order data for 2021 and visualize total revenue per store type in the bar chart.
>
> **[0:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=20)** Let's now do the same for the data for 2022.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=24)** You can see that the total revenue values are significantly lower.
>
> **[0:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=28)** That is because in 2022 the price started to be recorded in thousands instead of its absolute values.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=34)** So, we would need to add a Math Formula node to multiply the price by thousand.
>
> **[0:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=40)** But then the workflow won't show the correct numbers for the previous years anymore.
>
> **[0:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=45)** How can you make the workflow work correctly for both data sets before and after change?
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=51)** You can create two workflow branches and switch between them with switch nodes.
>
> **[0:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=56)** They allow you to activate and deactivate branches depending on the input.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=61)** KNIME has two types of switch nodes, CASE and IF switches.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=66)** Essentially, they both switch the workflow branches.
>
> **[1:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=69)** The CASE switch nodes however are more flexible since they support different numbers and types of ports.
>
> **[1:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=75)** Every switch starts with the Switch Start node.
>
> **[1:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=79)** The Switch Start node splits a workflow into multiple branches and activates one of them depending on its configuration.
>
> **[1:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=86)** The Switch Block then can be closed with the Switch End node.
>
> **[1:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=89)** You don't have to use it when you don't need to continue the execution of the workflow, for example, if you switch at the end of your workflow between different visualizations or different writer nodes.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=102)** However, you need to close the Switch Block if you want to collect the data from an active branch and continue workflow.
>
> **[1:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=110)** Each output port in the Switch Start node corresponds to one workflow branch.
>
> **[1:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=115)** The type of output ports in the Switch Start node doesn't have to match the type of input ports in the Switch End node.
>
> **[2:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=122)** Let's now return to our example with CASE Switch nodes added.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=127)** By default, the CASE Switch nodes don't have input and output ports.
>
> **[2:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=132)** If you add the node using the quick node adding panel, the correct ports are used automatically.
>
> **[2:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=137)** If you drag and drop the node from the node repository you can manually add them by hovering over the Switch node and clicking the plus button.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=146)** Since the only difference between the branches in our example is the Math Formula node we place the Start and End Switch nodes around it.
>
> **[2:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=154)** The upper branch then is used for the data before 2022 where prices come in absolute values, so no transformation is needed.
>
> **[2:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=163)** The bottom branch is used for years starting in 2022 where price transformation is required.
>
> **[2:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=170)** In our example, there are only two branches, but if needed, you can add more by clicking the plus button.
>
> **[2:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=177)** In the configuration window of the CASE Switch Start node you can define which output port should be activated, and hence which branch should be executed.
>
> **[3:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=187)** You can do it manually in the active port dropdown window or by using a flow variable.
>
> **[3:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=193)** The ports of the CASE Switch Start node are denoted by indexes starting from zero for the most upper port.
>
> **[3:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=199)** To control the port activation with a flow variable it should have an integer value corresponding to the port index.
>
> **[3:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=207)** In this example, the branch should be activated depending on the year in the Input Data table.
>
> **[3:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=213)** You can use a Table Row to Variable node to export the year value from the table to a flow variable called year.
>
> **[3:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=220)** To create a flow variable that can control the CASE Switch Start node you need to convert the year variable into an integer value corresponding to port index, zero or one.
>
> **[3:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=231)** You can do it with the Rule Engine Variable node.
>
> **[3:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=234)** It allows you to create a new flow variable by applying your own rule, or in other words, logical expression to the selected variable.
>
> **[4:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=243)** In the configuration window you need to write the rule.
>
> **[4:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=247)** If the flow variable year is less than 2022 then the new variable should be equal to zero.
>
> **[4:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=256)** For all other cases, the new variable should be equal to one.
>
> **[4:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=261)** You can name the new flow variable, for example, port.
>
> **[4:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=266)** Then in the CASE Switch Start node you can now control the port selection automatically with the newly created integer port variable.
>
> **[4:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=276)** Now, when the input data is earlier than 2022 the port variable is zero, and the upper port gets activated.
>
> **[4:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=285)** When the data is from 2022 or later the port variable is one, and the lower port gets activated.
>
> **[4:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=293)** Now, independent of which branch is active you need to continue the workflow execution with the correct data.
>
> **[4:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=299)** The CASE Switch End node merges the created branches into one single branch and passes the data from the active branch to it.
>
> **[5:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=307)** In most cases you can use the default configuration of the node.
>
> **[5:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=312)** If needed, the configuration settings also allow you to deal with multiple active boards.
>
> **[5:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=318)** Now, let's execute the whole workflow for data from 2022 and look at the bar chart.
>
> **[5:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=324)** The price scale is adjusted, and the chart looks correct.
>
> **[5:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=328)** If you execute the workflow for the data from 2021 the original price scale is used, and the bar chart is correct for this data too.
>
> **[5:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=337)** In this video you have learned how to switch between different workflow branches in KNIME Analytics Platform manually and automatically.
>
> **[5:45](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/switch-workflow-branch-execution-in-knime-analytics-platform?u=76281980&t=345)** (mellow instrumental music)

> [!info]- Semantic Content
>
> **Code Keywords:** switch (26), let (4), continue (3), default, (1)
> **CLI Commands:** node (21), make (1)
> **Env Vars:** case (9), knime (3)
> **UI Navigation:** drag and drop (1), dropdown (1)
> **Analogies:** for example (2)
> **Non-Speech:** (mellow instrumental music) (2)
> **Definitions:** in other words (1)
> **Speakers:** - in (1)


### 12. Error Handling

> [↑ Back to Table of Contents](#table-of-contents)

#### Error handling with try-catch in KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=0)** (lively music)
>
> **[0:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=6)** - In this video, you will learn how to handle errors in KNIME workflows with try and catch block.
>
> **[0:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=11)** Let's jump into it.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=13)** Let's have a look at the following workflow.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=15)** Here a table with new contracts is read from a remote data source, Google Sheets in this case, and is appended to a table with all the contracts.
>
> **[0:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=24)** If we want new contracts to be added automatically on a regular basis, this workflow should run smoothly or get fixed as soon as possible in case of errors.
>
> **[0:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=34)** But imagine the Google Sheets reader node unexpectedly fails due to some external reason.
>
> **[0:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=39)** For example, due to the file not being there.
>
> **[0:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=42)** If the workflow fails, the data isn't added and no one is notified.
>
> **[0:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=47)** This is where the try and catch block comes in handy.
>
> **[0:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=50)** Let's see how it works.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=53)** The try and catch block always consists of two nodes: try and catch.
>
> **[0:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=58)** The try node initiates the try and catch block and attempts to execute nodes inside of the block.
>
> **[1:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=63)** Those nodes are part of the main workflow that you're attempting to execute.
>
> **[1:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=68)** Let's call it the main branch.
>
> **[1:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=70)** If the execution succeeds, the catch errors node collects the data from the main branch and passes it to the downstream nodes.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=78)** However, the idea of the try and catch block is to continue execution even if there are errors in the main branch.
>
> **[1:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=85)** Therefore, the try and catch block also has an alternative branch.
>
> **[1:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=90)** If the main branch fails, the catch errors node collects the data from the alternative branch.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=96)** There are sets of try and catch errors nodes with different ports.
>
> **[1:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=99)** They can be combined with each other in various ways, depending on the ports needed at the beginning and at the end of the try and catch block.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=108)** Let's go back to our example now with the try and catch block added.
>
> **[1:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=113)** Remember, we expect that the Google Sheets reader node might fail from time to time.
>
> **[1:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=118)** You can add a try node with variable ports before the Google Sheets reader node and initiate it from the previous node.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=126)** The try node doesn't require any configuration.
>
> **[2:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=129)** Next, you need to close the try and catch block with a catch errors node with data ports.
>
> **[2:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=135)** The first input port takes the data expected when the main branch executes successfully, new contracts data, in this case.
>
> **[2:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=142)** The alternative branch can differ depending on your workflow design.
>
> **[2:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=147)** In this example, we use an empty table of the correct structure with which the rest of the workflow can execute.
>
> **[2:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=153)** Let's see the configuration of the catch errors data ports node.
>
> **[2:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=157)** In case of a failure, this node will create three variables containing the name of the failing node, the error message, and this stack trace with more details for debugging.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=168)** If you use these variables further in the workflow, select always populate error variables so that the nodes that need these variables can execute.
>
> **[2:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=178)** Now the workflow will execute in both cases when the reader node succeeds in importing the new contracts data and when it fails.
>
> **[3:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=187)** This design is suitable in case the workflow executes automatically and you expect that it's normal for the reader node to fail sometimes.
>
> **[3:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=195)** A useful node for try and catch block is the active branch inverter.
>
> **[3:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=199)** It changes the branch status from inactive to active and vice versa.
>
> **[3:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=204)** You can add it between the last node in the main branch and the first node in the alternative branch.
>
> **[3:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=209)** The alternative branch then will only execute if the main branch fails.
>
> **[3:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=214)** This can be useful in the alternative branch.
>
> **[3:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=216)** For example, if you read in some large data.
>
> **[3:40](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=220)** With try and catch nodes, you can handle errors in many different ways.
>
> **[3:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=224)** It's up to you to decide which nodes you expect might fail.
>
> **[3:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=227)** For example, in our workflow, you can also expect that an authentication might fail and initiate the try node already before it.
>
> **[3:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=235)** You can also decide what to do after your error is scored.
>
> **[3:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=239)** One option would be to continue the execution with an empty table or with some alternative data.
>
> **[4:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=245)** For example, you can use the last saved data instead of the fresh data from an external service that is sometimes down.
>
> **[4:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=253)** Another option would be to stop the execution of the workflow and notify the workflow owners about the failure.
>
> **[4:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=259)** You can also wrap the try and catch block with a recursive loop to retry the execution.
>
> **[4:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=264)** For example, if you know the service you connect to is often down, but responds again after a couple of connection retries.
>
> **[4:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=272)** In this video, you have learned how to handle errors in KNIME workflows with try and catch blocks.
>
> **[4:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/error-handling-with-try-catch-in-knime-analytics-platform?u=76281980&t=277)** (lively music)

> [!info]- Semantic Content
>
> **CLI Commands:** node (19)
> **Code Keywords:** let (6), continue (2), case, (1), catch. (1), require (1)
> **Analogies:** for example (5), imagine (1)
> **Env Vars:** knime (2)
> **Non-Speech:** (lively music) (2)
> **Cross-References:** go back to (1)
> **Speakers:** - in (1)


### 13. Date and Time Data

> [↑ Back to Table of Contents](#table-of-contents)

#### Handling date and time data with KNIME: Convert strings, extract date, and time fields
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=0)** - In this video, you will learn about date and time data type, how to convert strings to it, and how to extract date and time fields from date and time values.
>
> **[0:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=15)** Let's get started.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=17)** In many cases, a data table has columns that contain date and time values, yet they're often imported as strings.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=25)** However, it's problematic for machines to read such strings with the same logic humans would do.
>
> **[0:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=31)** The reason for this is that date and time values have different granularity, which includes date, time, and the time zone, and can be saved in varying order or separated by different symbols.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=44)** Therefore, to be able to process date and time values, you need to convert strings to the dedicated date and time type, which enables machines to read these values correctly.
>
> **[0:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=53)** Let's see an example.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=55)** In this workflow, we want to aggregate orders data by months for each year and visualize the results.
>
> **[1:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=61)** For aggregation, we need year and month values of the orders.
>
> **[1:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=65)** However, the order date column is of a type string and we need to convert it to date and time data type.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=72)** You can do it with a string to date and time node.
>
> **[1:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=76)** In the configuration dialogue of this node, you first select the column to convert.
>
> **[1:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=81)** In the next section you can select the replace selected columns option to replace the string column.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=88)** Alternatively, you could append a converted column to the table.
>
> **[1:32](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=92)** Next, you need to tell (mumbling) how to convert the string values to date and time values.
>
> **[1:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=97)** You can do it manually in these three fields or try to outguess the correct type and format by clicking the guess data type and format button.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=106)** In rare cases, when outguessing didn't work, you first need to select a new data type.
>
> **[1:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=111)** In this case, date and time.
>
> **[1:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=114)** Next, you need to define the format of the string you're trying to convert.
>
> **[1:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=119)** This specifies which characters in the string respond to years, months, days, hours, minutes, and so on.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=126)** Check the dropdown menu of all the available formats, if yours is already there selected from the menu.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=134)** If the format of your string is not in the menu, you can write the format yourself.
>
> **[2:19](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=139)** Here you can see the preview of your values in the selected string column, and you can use it to provide the string format.
>
> **[2:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=147)** In our example, the string has first days, then months, and years separated by full stops, then space, and finally hours, minutes, seconds, and subseconds separated by a colon.
>
> **[2:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=161)** You can also add the brackets around seconds and subseconds, which means that they are optional.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=168)** Once you add new formats, they will be saved in a variable in the dropdown menu in the future.
>
> **[2:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=174)** The local option can be used to define the language and the region if you convert strings that have written terms, such as weekdays or months names.
>
> **[3:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=182)** By checking the fail on error option, you can force the node to fail if the conversion doesn't work.
>
> **[3:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=188)** Otherwise, missing values will be generated for inconvertible values.
>
> **[3:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=192)** Let's now execute the node.
>
> **[3:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=194)** In the output table, you can see that the column order date is now converted from type string to type date and time.
>
> **[3:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=202)** Next, we want to calculate the yearly and monthly sales.
>
> **[3:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=205)** For this we need to extract the date and time fields, in our case years and months, from the order date column with the extract date and time fields node.
>
> **[3:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=215)** In the configuration dialogue we first select the order date column, then you can select which date fields you want to extract from the order dates.
>
> **[3:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=224)** In our case, these are year, month number, and month name.
>
> **[3:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=229)** Finally, we set the language of the month's names to English in this local menu, and execute the node.
>
> **[3:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=237)** in the output table, you can see that the year and month's information has been extracted from the date values to separate columns.
>
> **[4:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=244)** You can now use these values to aggregate data by months for each year and visualize the results.
>
> **[4:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-convert-strings-and-extract-date-and-time-fields?u=76281980&t=252)** In this video you have learned about date and time data types, how to convert string to this type, and how to extract date and time fields.

> [!info]- Semantic Content
>
> **Code Keywords:** type, (3), let (3), type. (2), case, (2), finally, (1)
> **CLI Commands:** node (6)
> **UI Navigation:** select the (2), dropdown (2), in the menu (1)
> **Non-Speech:** (upbeat music) (2)
> **Cross-References:** in the next (1)
> **Definitions:** means that (1)
> **Analogies:** such as (1)
> **Speakers:** - in (1)

#### Handling date and time data with KNIME: Modify and filter date and time data
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=6)** - In this video, you'll learn about two popular operations applicable specifically to date and time data type values.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=13)** One allows you to modify such data format by adding, changing, or removing date, time, or time zone fields, and the second one enables filtering of such data bi specified time window.
>
> **[0:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=26)** Let's jump into it.
>
> **[0:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=29)** In this example workflow, we import a data sample with orders from today and want to append them to a file containing historical data.
>
> **[0:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=37)** But before doing so, we need to add an order date and correct the time zone.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=41)** First, we need to add a date value to the order times to keep historical data for different days.
>
> **[0:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=47)** You can do this with the modified date node.
>
> **[0:50](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=50)** In the configuration dialogue, you first select the column that you want to modify.
>
> **[0:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=55)** In the date selection section, you can define how to modify the date values.
>
> **[0:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=59)** You can append, change, or remove the date.
>
> **[1:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=64)** Depending on the selected option, only columns with a suitable initial date and time type will be available in the selection field.
>
> **[1:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=72)** Hence, for the column order time, we can only append the date specified in this field.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=78)** In this example, the date is controlled by a flow variable with the current execution date coming from the date and time configuration node.
>
> **[1:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=86)** Next, we tick the checkbox time zone to specify the time zone to be appended to the values of the order time column.
>
> **[1:34](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=94)** Based on the origin of this data, we select the time zone Europe, Berlin and execute the node.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=101)** In the output table.
>
> **[1:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=102)** You can see that the specified date and time zone have been added to the times of the orders.
>
> **[1:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=108)** However, some orders come from the US and we want to shift their times to the correct time zone.
>
> **[1:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=115)** We split the data in two tables, one for the US and another for Germany, and adjusted time zone for the US data.
>
> **[2:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=123)** You can do that with a modified time zone node.
>
> **[2:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=126)** The configuration dialogue is similar to the one of the modified date node, apart from the options in the time zone selection section.
>
> **[2:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=134)** The first option here, set time zone, either adds a time zone to a time step without the time zone or changes the existing zone without adjusting the time.
>
> **[2:24](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=144)** In our case, the original time zone is Berlin and we want to shift the Berlin time zone and adjust the time accordingly.
>
> **[2:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=151)** So we select the shift time zone option and US specific option in the dropdown menu.
>
> **[2:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=159)** If needed, You can also remove the existing time zone.
>
> **[2:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=164)** In the output table, You can see that the time zone and time have been adjusted for the US orders.
>
> **[2:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=169)** Now you can concatenate both tables and append the orders to the historical data.
>
> **[2:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=174)** Next, let us look at another use case.
>
> **[2:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=178)** Here we want to analyze monthly aggregated sales data in a line plot.
>
> **[3:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=183)** The order date column here is of a local date and time type, but the time values are similar for all records and can be removed with modified time node.
>
> **[3:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=193)** In the configuration, we select the order date column and remove option in the time selection field.
>
> **[3:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=202)** Next, we want to filter the table by keeping only the orders for 2018.
>
> **[3:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=207)** For that, you can use the date and time based draw filter node, which is dedicated to filter rows within a specified time range.
>
> **[3:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=216)** In the configuration, you first need to select the date and time column, order date in this example.
>
> **[3:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=222)** Second, you need to specify the time window, its start and end.
>
> **[3:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=227)** You can specify either both or only the start or only the end by ticking these check boxes.
>
> **[3:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=234)** Start and end of the time window can have different granularity depending on the input data type.
>
> **[4:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=241)** We set the start date to the 1st of January, 2018, and the end date to the 31st of December, 2018.
>
> **[4:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=249)** You can also tick the inclusive check boxes to include both start and end dates.
>
> **[4:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=255)** The buttons now allow you to specify the current date and time.
>
> **[4:20](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=260)** Note though that if you re-execute the workflow, it'll keep the time step at the moment when you clicked.
>
> **[4:27](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=267)** To have your workflow taking the current date and time value every time it's re-executed, you need to take the use execution date and time check box.
>
> **[4:35](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=275)** Instead of specifying the end date explicitly, you can set a period to be added to the start date in the duration format or as a numeric value with a specified granularity.
>
> **[4:49](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/handling-date-and-time-data-with-knime-modify-and-filter-date-and-time-data?u=76281980&t=289)** In this video, you have learned how to modify date and time data type values with modified time, date, and time zone nodes, and how to filter date and time values by user-defined time window.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7)
> **Code Keywords:** let (2), case, (1), case. (1), type, (1), type. (1)
> **UI Navigation:** select the (4), checkbox (1), dropdown (1)
> **Analogies:** similar to (1)
> **Speakers:** - in (1)


### 14. Databases

> [↑ Back to Table of Contents](#table-of-contents)

#### Querying databases from KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=0)** (relaxing jazz music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=5)** - In this video, you will learn how to query data on databases in a KNIME workflow.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=10)** Let's get into it.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=13)** While you can read a full database table into KNIME Analytics Platform with a DB reader node and then process the data in KNIME, the KNIME database extension allows you to do even more.
>
> **[0:23](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=23)** You can efficiently move the processing of data from the KNIME Analytics platform, which runs locally, to a database server by using the dedicated database query nodes.
>
> **[0:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=33)** This frees up execution resources available locally or on KNIME Business Hub.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=38)** The reason is that database tables can be large.
>
> **[0:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=41)** Reading full database tables into KNIME can take longer than querying and reading its aggregated and filtered version.
>
> **[0:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=48)** Moreover, sometimes you don't even need to read data into KNIME.
>
> **[0:52](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=52)** You might process a database table and directly write a new table back to the database.
>
> **[0:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=57)** The database extension provides multiple nodes for querying database data, such as DB GroupBy, DB Row Filter, DB Joiner nodes to name a few.
>
> **[1:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=66)** Good news is that most of the time these node configurations resemble their data transformation counterparts, so in most cases, you don't need to learn any new configurations.
>
> **[1:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=78)** In the background, a database query node automatically builds an SQL query according to its configuration.
>
> **[1:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=85)** Besides, each query node wraps the incoming SQL query into a subquery.
>
> **[1:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=90)** Hence, you can use multiple query nodes to visually assemble complex SQL queries.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=96)** As always in KNIME, you don't need to write the code, neither to create a single query nor to combine them.
>
> **[1:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=103)** Unlike with processing data in KNIME, when using query nodes, processing of data happens on a database and the data stays with the database until you read it into KNIME, for example, with the DB Reader node.
>
> **[1:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=116)** However, for each query node, you can preview the table that the current query in this node would produce.
>
> **[2:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=123)** Let's have a look at an example workflow.
>
> **[2:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=125)** Here, the products and contracts data are stored in the H2 database tables.
>
> **[2:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=131)** We want to get the information about the products with more than 10,000 contracts from the database.
>
> **[2:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=136)** Instead of importing two whole database tables into KNIME, we can import the data that is already aggregated, filtered, and joined on the database.
>
> **[2:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=146)** For that, we will create the following queries.
>
> **[2:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=148)** First, to count contracts for each product.
>
> **[2:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=151)** Second, to filter our products with less than 10,000 contracts.
>
> **[2:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=156)** And third, to join the products table with aggregated and filtered table with contract counts.
>
> **[2:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=162)** Let's start by selecting two tables: products and contracts in two DB Table Selector nodes.
>
> **[2:48](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=168)** The DB Table Selector node as a result, creates an SQL query that selects the whole table from a database and passes this query to the downstream query node.
>
> **[2:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=178)** Now, let's query with the contracts table to get aggregated and filtered contract data.
>
> **[3:04](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=184)** First, we want to count the number of contracts for each product.
>
> **[3:08](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=188)** You can do it with a DB GroupBy node.
>
> **[3:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=191)** Its configuration dialogue is similar to the one of the GroupBy node.
>
> **[3:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=195)** You group by products.
>
> **[3:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=197)** In the manual aggregation tab, you can select any column and the count function.
>
> **[3:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=202)** Note that the available functions depend on a database.
>
> **[3:26](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=206)** Alternatively, you can select add count option.
>
> **[3:30](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=210)** Let's execute the node.
>
> **[3:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=213)** Now, the DB GroupBy node has generated an SQL query and edited on top of the SQL query generated by the DB Table Selector node.
>
> **[3:42](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=222)** The resulting query will then group the table selected in the DB Table Selector accordingly.
>
> **[3:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=227)** This query is then passed to the next node, the Row Filter.
>
> **[3:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=231)** But you don't really have to understand the details about the generated SQL queries.
>
> **[3:57](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=237)** You can fetch the first 100 rows and preview the data generated by the query in the node.
>
> **[4:03](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=243)** You can see that all products except the two have at least 10,000 contracts.
>
> **[4:09](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=249)** Next, let's filter out these two products.
>
> **[4:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=252)** You can do it with a DB Row Filter node.
>
> **[4:15](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=255)** Here, the configuration is different to a simple row filter node and allows you to combine multiple filtering conditions.
>
> **[4:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=262)** First, select the column to filter by in this menu, contracts number in our case.
>
> **[4:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=268)** Then select the operator to create the filtering condition.
>
> **[4:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=271)** In our case, greater than.
>
> **[4:33](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=273)** The available operators for filtering depend on the column type.
>
> **[4:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=278)** Finally, enter the filtering value, 10,000 in our case.
>
> **[4:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=283)** For categorical columns, you can also use the fetch possible values button for the values to appear in the dropdown menu.
>
> **[4:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=291)** The filtering condition that you just built is shown here on the left.
>
> **[4:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=295)** To add further conditions, you can click the add condition button.
>
> **[4:59](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=299)** For example, let's create a condition to check that the product's column value is not missing.
>
> **[5:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=306)** Now you have two conditions and can decide whether a row is included if both conditions are true.
>
> **[5:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=311)** You select and as a condition group connection, or if at least one of them is true, then you select or.
>
> **[5:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=318)** You can also create nested condition groups by selecting a condition, clicking the add group button, and creating more conditions.
>
> **[5:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=328)** Finally, let's apply the inner join operation to join the products information from the products table and the contracts count from our aggregated and filtered contracts table for the popular products.
>
> **[5:39](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=339)** You can do it with the DB Joiner node.
>
> **[5:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=341)** This node's configuration dialogue is also similar to its data transformation counterpart.
>
> **[5:47](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=347)** We select the inner join mode, product names as the joining columns, specify the columns to be in the final table and execute.
>
> **[5:56](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=356)** In this video, you have learned how to query database data and create complex SQL queries without writing an SQL code with KNIME database extension.
>
> **[6:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/querying-databases-from-knime-analytics-platform?u=76281980&t=365)** (relaxing jazz music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (13), sql (9)
> **CLI Commands:** node (20)
> **Code Keywords:** let (8), case. (2), finally, (2), function (1), case, (1)
> **UI Navigation:** select the (3), dropdown (1)
> **Analogies:** for example (2), such as (1), similar to (1)
> **Non-Speech:** (relaxing jazz music) (2)
> **Warnings:** note that (1)
> **Speakers:** - in (1)

#### Modify database tables from KNIME Analytics Platform
> [LinkedIn Learning](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=0)** (gentle jazz music)
>
> **[0:05](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=5)** - In this video, you will learn how to modify database tables from KNIME Analytics Platform.
>
> **[0:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=10)** Let's jump into it.
>
> **[0:13](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=13)** Let's first look at how to create a new database table from KNIME.
>
> **[0:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=17)** You can do it, for example, with a DB Table Creator node.
>
> **[0:21](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=21)** This node has an optional data table port for table specs.
>
> **[0:25](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=25)** In the configuration dialogue, you first need to provide the name of a new table.
>
> **[0:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=29)** Next, if a table with the same name already exists, you can define whether you want to replace it, keep it unchanged, or stop the execution.
>
> **[0:38](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=38)** Alternatively, you can check and remove the table with a DB Table Remover node.
>
> **[0:44](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=44)** For some databases, this node also allows the cascade option to remove all the dependent tables and views.
>
> **[0:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=51)** But let's get back to the DB Table Creator.
>
> **[0:54](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=54)** The default option, use dynamic settings, means that the database table will be created automatically based on the input data table spec.
>
> **[1:02](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=62)** In this case, the columns and keys tabs responsible for manual database table creation are in read-only mode here.
>
> **[1:10](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=70)** In the Dynamic Type Settings tab, you can change the type mapping between KNIME data table and the database table.
>
> **[1:17](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=77)** For example, if you want all integer columns in KNIME to be written as double columns in the database, in the KNIME Based SQL Type Mapping tab, click Add.
>
> **[1:28](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=88)** In the menu under KNIME Type, select Integer.
>
> **[1:31](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=91)** And in the second menu under SQL Type select Double.
>
> **[1:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=96)** Not null option will prohibit missing values in these columns.
>
> **[1:41](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=101)** You can also map types for columns with particular name patterns.
>
> **[1:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=106)** In the Dynamic Key Settings tab, you can define unique keys for the database table based on the column names and define one of them as a primary key.
>
> **[1:55](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=115)** The DB Table Creator node then creates a new table, but at this point it is still empty.
>
> **[2:01](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=121)** You can insert data into the table with, for example, a DB Insert node.
>
> **[2:07](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=127)** In the configuration dialogue, you need to select a table that you've just created.
>
> **[2:12](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=132)** Next, you need to select the columns to insert into the database table.
>
> **[2:16](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=136)** Note that the selected columns need to exactly match the columns in the database table.
>
> **[2:22](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=142)** The KNIME database extension provides several alternative nodes to load data to a database table.
>
> **[2:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=149)** For example, if your database supports bulk loading, you can use the DB Loader node to insert a large amount of data.
>
> **[2:37](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=157)** A DB Write node is very flexible and lets you create a new database table, overwrite an existing table or append rows to a table.
>
> **[2:46](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=166)** However, it does not allow you to control the database table structure.
>
> **[2:51](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=171)** Additional nodes, for example, DB Merge, DB Update, and DB Delete are available to update database tables with local data from KNIME.
>
> **[3:00](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=180)** Now, what if you want to update a database table based on an SQL query?
>
> **[3:06](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=186)** For example, you aggregate data on a database and want to directly create another database table without reading the data into KNIME.
>
> **[3:14](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=194)** You can do this with a DB Connection Table Writer node.
>
> **[3:18](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=198)** In its configuration dialogue, you need to define the name of a new table and decide if you want to create a new table, overwrite an existing table, or append rows to an existing table.
>
> **[3:29](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=209)** At this point, once the table is imported from a database to KNIME, this timestamp column is in string type.
>
> **[3:36](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=216)** If you want to convert it to, for example, local date and time type, you can fix it with the DB Type Mapper node.
>
> **[3:43](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=223)** In its configuration dialogue, in the column name menu, select the column and in the mapping menu, correct mapping, string to local date and time in this case.
>
> **[3:53](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=233)** Now this column is in the appropriate data type in KNIME.
>
> **[3:58](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=238)** In this video, you have learned how to delete and create a database table, how to move a table into a database from KNIME or a database, and finally, how to map data types between KNIME and a database.
>
> **[4:11](https://www.linkedin.com/learning/low-code-no-code-data-literacy-with-knime-from-basic-to-advanced/modify-database-tables-from-knime-analytics-platform?u=76281980&t=251)** (upbeat jazzy music)

> [!info]- Semantic Content
>
> **Env Vars:** knime (13), sql (3)
> **Code Keywords:** let (3), type, (2), delete (2), case, (1), type. (1)
> **CLI Commands:** node (10)
> **Analogies:** for example (7)
> **UI Navigation:** select the (2), in the menu (1)
> **Non-Speech:** (gentle jazz music) (1), (upbeat jazzy music) (1)
> **Documentation:** spec (1)
> **Definitions:** means that (1)


## Instructor

- [[KNIME AG]]

## Resources

- Exercise files available

## Skills Covered

- Knime
- Data Literacy

## Path Context

### In [[Data Science Professional Certificate by KNIME]]
← [[Data Science Foundations- Fundamentals]] | **2 of 6** | [[Introduction To Artificial Intelligence]] →

## Part of

- [[Data Science Professional Certificate by KNIME]]

## Appears In

- [[Data Science Professional Certificate by KNIME]]

## Related Courses

_Courses sharing skills:_

- [[Big Data in the Age of AI]] — Data Literacy
- [[Machine Learning and AI Foundations- Advanced Decision Trees with KNIME]] — Knime
- [[Introduction To Machine Learning With Knime]] — Knime
- [[Machine Learning and AI Foundations- Decision Trees with KNIME]] — Knime

---

[↑ Back to top](#)