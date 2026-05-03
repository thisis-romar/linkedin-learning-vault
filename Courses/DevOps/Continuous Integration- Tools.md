---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: continuous-integration-tools-20202338
url: "https://www.linkedin.com/learning/continuous-integration-tools-20202338"
duration_minutes: 63
duration: 1h 3m
level: Beginner
updated: 12/12/2023
learners: 29136
skills:
  - Continuous Integration (CI)
exercise_files: true
github: "https://github.com/LinkedInLearning/continuous-integration-tools-4490242"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQF_XV39CwrXiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702073152131?e=2147483647&amp;v=beta&amp;t=PArj2EExCoyrMjjDLxpN6FpMfIxXkw62Yc0W0KhhHBQ"
linkedin_topic: DevOps
learning_paths:
  - '[[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]'
prev_courses:
  - '[[DevOps Foundations- Continuous Delivery-Continuous Integration]]'
path_nav: '[{"path":"Getting Started with Continuous Integration - Continuous Delivery (CI-CD)","position":3,"total":3,"prev":"DevOps Foundations- Continuous Delivery-Continuous Integration","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/continuous-integration-ci
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Continuous%20Integration-%20Tools.md)

![Continuous Integration: Tools](https://media.licdn.com/dms/image/v2/D4D0DAQF_XV39CwrXiw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702073152131?e=2147483647&amp;v=beta&amp;t=PArj2EExCoyrMjjDLxpN6FpMfIxXkw62Yc0W0KhhHBQ)

# Continuous Integration: Tools

> Continuous integration and continuous delivery (CI/CD) practices enable developers to reliably and quickly produce applications at scale—enhancing overall team collaboration in the process. As CI/CD has grown to become one of the most prominent subfields of DevOps, new CI/CD tools have emerged and proliferated across the entire industry. Curious about which tools are right for your team? This cour

> [LinkedIn Learning](https://www.linkedin.com/learning/continuous-integration-tools-20202338) | 1h 3m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (6 videos)
  - [Building your CI/CD pipeline](#building-your-cicd-pipeline)
  - [What you should know](#what-you-should-know)
  - [CI/CD tool categories](#cicd-tool-categories)
  - [Pros and cons](#pros-and-cons)
  - [The experimental pipeline](#the-experimental-pipeline)
  - [About the exercise files](#about-the-exercise-files)
- [**1. Self-Hosted**](#1-self-hosted) (4 videos)
  - [Jenkins](#jenkins)
  - [Bamboo](#bamboo)
  - [TeamCity](#teamcity)
  - [Comparing self-hosted tools](#comparing-self-hosted-tools)
- [**2. Software as a Service (SaaS)**](#2-software-as-a-service-saas) (3 videos)
  - [Travis CI](#travis-ci)
  - [CircleCI](#circleci)
  - [Comparing SaaS tools](#comparing-saas-tools)
- [**3. Cloud Service Providers**](#3-cloud-service-providers) (4 videos)
  - [Amazon Web Services (AWS) CodePipeline and CodeBuild](#amazon-web-services-aws-codepipeline-and-codebuild)
  - [Azure Pipelines](#azure-pipelines)
  - [Google Cloud Platform (GCP) Cloud Build](#google-cloud-platform-gcp-cloud-build)
  - [Comparing cloud service provider tools](#comparing-cloud-service-provider-tools)
- [**4. Code Repositories**](#4-code-repositories) (4 videos)
  - [GitHub Actions](#github-actions)
  - [GitLab CI](#gitlab-ci)
  - [Bitbucket Pipelines](#bitbucket-pipelines)
  - [Comparing code repository tools](#comparing-code-repository-tools)
- [**5. Selecting a CI Tool**](#5-selecting-a-ci-tool) (1 videos)
  - [Selecting the right CI tool](#selecting-the-right-ci-tool)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building your CI/CD pipeline](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/building-your-ci-cd-pipeline?u=76281980&t=0)** [[Continuous Integration (CI)|Continuous integration]], [[Continuous Delivery (CD)|continuous delivery]], and continuous deployment are fundamental concepts in modern [[Software Development]]. More commonly known as CI/CD. Technologies of all kinds use these automated approaches to produce applications efficiently and reliably. By the end of this course, you will know how to categorize CI/CD tools and the pros and cons of each category. You'll also see how an experimental pipeline gets implemented in different CI/CD applications. Hi, I'm Michael [[Jenkins]], a computer engineer with experience building CI/CD pipelines and supporting the tools behind them. We've got a lot of ground to cover, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1), [[Jenkins]] (1)
> **CLI Commands:** cd (4)
> **Definitions:** known as (1)

#### [What you should know](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=0)** Before we get into any technical details, let's discuss the meaning of [[Continuous Integration (CI)|continuous integration]], [[Continuous Delivery (CD)|continuous delivery]], and continuous deployment. With continuous integration, developers work on their code in a local environment and commit their changes to a shared repository on a regular basis. Their code can then be combined, or in other words, integrated with code already stored in the repository. The new code is tested and checked for any errors. Using this method, developers can find and resolve problems more quickly compared to waiting until all the code for an application is complete and integrating everything at once. Continuous delivery is a partner to the continuous integration process. Continuous delivery enables developers to build, test, and release their software with every new change. By including tests in the delivery process, engineers can be confident that the final product meets requirements and doesn't have any unexpected features, also known as bugs. Once the application is delivered, it can be deployed as needed. When a deployment completes without human interaction, is referred to as continuous deployment. In this case, the application is automatically built, tested, and deployed into a production environment. To give another dimension to this course, exercise files are available. The files are packed with information to help you get the most out of this course, especially if you want a more hands-on experience with any of the tools we discuss.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/what-you-should-know?u=76281980&t=96)** If you're working through the hands-on exercises, it'll be helpful if you're familiar with [[Application Development]] and the [[Software Development]] process. If you already have some experience building, testing, and deploying applications, you'll be fine. Many CI/CD tools are configured with scripts and command line tools, so if you're comfortable scripting and using a command line interface, you'll be all set. It'll also be helpful if you're familiar with source code management tools like [[GitHub]], [[Bitbucket]], or GitLab. Most tools start their processes when changes are applied to a code base, so you'll want to know how to push code to a repository, either from your local system or a web interface. I'll share more information on the exercise files in an upcoming video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (3), [[Continuous Delivery (CD)|Continuous delivery]] (3), [[Software Development]] (1), [[GitHub]] (1), [[Bitbucket]] (1)
> **Tools:** github (1), bitbucket (1), gitlab (1)
> **Exercise Files:** exercise files (2), source code (1)
> **Definitions:** in other words (1), is a  (1), known as (1)
> **CLI Commands:** find (1), cd (1)

#### [CI/CD tool categories](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=0)** With dozens of CI/CD tools to choose from, we won't be able to explore all of them, but we can narrow our focus by sorting tools into four categories. With plenty of CI/CD tools to choose from, we won't be able to explore all of them, but we can start narrowing our focus a bit by sorting tools into four categories. Self-hosted tools run on your [[Hardware]]. This could mean the tool runs on a server in your company's data center, a VM running in the cloud, or it could be your local workstation. Whatever the platform, you are responsible for installing and maintaining the tool. Tools that fit into the [[SaaS|Software as a Service]] or a [[SaaS]] category offer an alternative to self-hosting. In this case, a vendor provides and maintains the tool and allows you to access it. All you have to do is log in and get started. The next category is an extension of the Software as a Service category. Cloud service providers offer SaaS-based CI/CD tools, but they also offer other cloud-based features like [[Virtual Machines]], managed services, and storage. If you think of a code repository, your first thought is probably of a place where you can store your code. But along with giving you a place to track and manage your code, many modern repositories also provide CI/CD tools for turning your code into software. Now let's take a look at some of the pros and cons of tools in
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/ci-cd-tool-categories?u=76281980&t=95)** each of these categories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (2), [[Hardware]] (1), [[SaaS|Software as a service]] (1), [[Virtual Machines]] (1)
> **CLI Commands:** cd (4)
> **Definitions:** is an  (1)

#### [Pros and cons](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=0)** - [Presenter] Let's discuss a few of the benefits and drawbacks of using tools from each of the CI/CD categories. Hosting your own CI/CD tools gives you the most flexibility in comparison to any other option. You can specify the entire technology stack, including the software, the [[Hardware]], and the network. You also have more control over any data that flows into or out of the tool. You won't have to worry as much about unexpected data leaks or potentially harmful exposures. That flexibility and peace of mind comes at a price though. Since you own the entire technology stack, you also have to maintain it. This can be difficult if you don't have the time or the inclination to install and administer a full-blown CI/CD system along with your normal duties. You'll also be limited by the scale of the infrastructure you have on hand. If all of a sudden you need to increase the throughput of your pipelines, you'll be limited to the capacity of your existing system. Also, getting started with self-hosted tools can be intimidating for the uninitiated, causing difficulties with bringing resources online. [[SaaS|Software as a Service]] options, on the other hand, do their best to make it super easy to get started. All of the heavy lifting of maintaining the tool is abstracted away, and all you need to do is worry about coding your application. There are also plenty of free or reasonably priced [[SaaS]] CI/CD services available. And maybe it's just me,
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=95)** but I love the fact that SaaS CI/CD tools create triggers from your repo automatically. For me, that's just one less thing to think about. SaaS tools might be free or have low fees to start, but they can become expensive over time. As your team or rate of development increases, you could see large bills from the CI/CD service provider. And lastly, there may be security concerns with running your data on a system that you don't have access to or control of. Honestly, security vulnerabilities have the potential to pop up in all of these systems, so just assume that's the case for the other categories as well. If you're using a cloud service provider's CI tool, you'll be more likely to use their other services as well. With easy integration, it just makes sense to keep everything under the same roof. And along with the additional services, cloud service providers may offer better control over who has access to your projects. Using identity and access management, you'll be able to control who can push code to your repos and start deployments. Cloud service providers also have unlimited resources. Well, maybe not totally unlimited, but certainly more than you might have available in your server closet or local data center. On the flip side, setting up CI/CD pipelines with cloud service providers can be more complex than other options. You may need to set up special permissions
>
> **[3:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/pros-and-cons?u=76281980&t=189)** or configure additional tools along with getting your build instructions in place. Also, some may argue that hosting builds on cloud service providers leads to vendor lock-in. That could be the case, but considering how every CI/CD system has a different configuration format, choosing any one provider will lead to different levels of vendor lock-in no matter what platform you choose. When it comes to CI/CD, code repositories have the unique position of having your code and the CI/CD tool all in one place. And there are plenty of free or low-fee options to get started. One downside though, using code repository-based CI/CD services can get expensive when used at larger scales.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS]] (3), [[Hardware]] (1), [[SaaS|Software as a service]] (1)
> **CLI Commands:** cd (11), make (1)
> **Prerequisites:** install (1), getting started (1), set up (1), configure (1)
> **Speakers:** - [presenter] (1)

#### [The experimental pipeline](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=0)** As we explore CI/CD tools, it's helpful to have a sample pipeline to work with. We'll be configuring a pipeline that builds, tests, and deploys a web application. Our application is a [[Python (Programming Language)|Python]] script that serves [[JSON]] data over a simple API. The application will be packaged as a zip file and then deployed to an AWS Lambda function environment. For now, we won't worry too much about the application. Instead, we'll be focusing on the steps needed to build it, test it, and deploy it to the target environment. Our pipeline will have seven stages. We'll trigger the pipeline by using an update to the [[Git]] repository where the application code is stored, or we may trigger it manually if needed. In the first two stages, we'll install any dependencies and do a sanity check. We'll scan our code using Python linters and run some unit tests to make sure the specification has been followed correctly. It makes sense to do these quick checks early in the pipeline to keep from building and deploying bad code. This is the integration part of our CI/CD pipeline. At this stage, we could also include additional tests that improve the quality of our application. We could scan for vulnerabilities or check to make sure sensitive information hasn't been committed to the repository. In the third stage, we'll build the application. To keep our experimental build as simple as possible, we'll bundle the application files into a zip archive.
>
> **[1:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/the-experimental-pipeline?u=76281980&t=97)** This step is the delivery portion of our CI/CD pipeline, since we're making a new version available to be deployed. And you might have guessed what comes next, deployment. We'll use stages 4 and 5 to deploy our application to a staging environment. In this environment, we'll be able to run tests on the application before it goes live in production. If those tests pass, then our application will be ready for the big time. In the last stages of the pipeline, we can confidently deploy our application to a production environment. By this time, the code has been integrated, linted, tested at the unit level, built into a deliverable artifact, and deployed and tested in a staging environment. But to make sure nothing went wrong, we'll run one more test on the live application. As you're viewing this course, you might already have a pipeline in mind that you're looking to implement. Just know that all the stages I've mentioned here might not apply to your project, but at the least, they should give you an idea of the stages in a typical CI/CD pipeline. Are you ready to explore? Let's begin.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[JSON]] (1), [[Git]] (1)
> **CLI Commands:** cd (4), make (3), python (2), aws (1), git (1)
> **Env Vars:** json (1), api (1), aws (1)
> **Cross-References:** in the last (1)
> **Documentation:** specification (1)
> **Exercise Files:** zip file (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [About the exercise files](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=0)** The goal of this course is to provide an overview of popular CI/CD tools in four categories. In addition, exercise files are available to help you get hands-on experience with each tool that we discuss. Exercise files are available as a [[GitHub]] repository. You'll want to download the exercise files as a zip archive, so you can access them on your local system. From the repo home page, select code, local, download zip. The directories follow the course structure, with directories for each chapter and section. Inside the directory for each section, you'll find all the files you need to configure the pipeline using that specific tool. You'll also find a README file with recommended resources, everything that you need to have in place before starting, and steps to set up the experimental pipeline to deploy a sample application we'll be using with all the tool demonstrations. To deploy the sample application, you'll need an AWS account. You can sign up for an AWS account by browsing to aws.[amazon.com/free](https://amazon.com/free). I suggest creating your own account so you have admin privileges. We'll also be creating and destroying resources, so using a sandbox account will prevent any accidental disruption to any production services. Once you have your account in place, open the interface for AWS CloudFormation.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=96)** On the CloudFormation homepage, select "Create stack". Confirm that "Template is ready" is selected and under specified template, select "Upload a template file". Then select "Choose file". Browse to the location where you open the zip archive for the exercise files. Select "sample-application.yml" and then choose "Open". Then click "Next". We need to enter a name for the stack under stack name and I'll use sample-application. And then I'll click "Next". On this screen, configure stack options, we can keep all options as the default. We just need to scroll to the bottom of the page and select "Next". On the review screen, scroll to the bottom of the page and select the checkbox next to "I acknowledge that AWS CloudFormation might create IAM resources with custom names" and then select "Submit". Review the events tab on the stack home page until create complete is reported under the status column for the logical ID that matches your stack name. Once the stack creation is complete, select the outputs column. This is where you'll be able to find all the details you'll need to configure the experimental pipeline
>
> **[3:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/about-the-exercise-files?u=76281980&t=191)** for each tool. You can make a note of these values or come back to this page when you need them. Most importantly, please keep values for the access keys secure. Basically, treat them as passwords and don't share them or commit them to a repository. To view the sample application, use the links to the production and staging environments. Now we can use the sample application to explore a variety of CI/CD tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** aws (5), find (3), cd (2), make (1)
> **Exercise Files:** exercise files (4), template (3), download the (1)
> **Prerequisites:** configure (3), you'll need (2), you need to have (1), set up (1)
> **Env Vars:** aws (4), readme (1), iam (1)
> **UI Navigation:** open the (2), select the (2), checkbox (1)
> **File Paths:** sample-application.yml (1)
> **URLs:** [amazon.com](https://amazon.com) (1)


### 1. Self-Hosted

[↑ Back to Table of Contents](#table-of-contents)

#### [Jenkins](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=0)** The CI tools in the self-hosted category are some of the most capable tools we'll consider. They also give us the most flexibility because we control almost all aspects of the installation, administration, and maintenance. We'll discuss a few tools from this category, starting with [[Jenkins]]. When developers think of tools for [[Continuous Integration (CI)|continuous integration]], Jenkins is likely the first to come to mind. It's easily one of the most well-known and widely used automation tools available. More than one million users around the world turn to Jenkins for their automation needs, including continuous integration and delivery. Price is one of the reasons that keep application developers and software engineers turning to Jenkins, its free and open-source. Enterprise support for Jenkins is available through CloudBees, the company founded by the original creator of Jenkins. CloudBees is also one of the largest contributors to the Jenkins open-source project. Jenkins is essentially an automation framework that can be extended through plugins. If the base functionality doesn't cover what you need, there's probably a plugin that can do the job for you. There are nearly 1,500 plugins available in the plugin index. One plugin we'll be using to enhance our pipeline experience is the Blue Ocean plugin. Blue Ocean is actually a collection of plugins that enhances the Jenkins user interface specifically for visualizing pipelines.
>
> **[1:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=94)** Jenkins includes a pipeline viewer out of the box, but the Blue Ocean plugin provides a more modern and up-to-date interface. We can model our pipeline in the Jenkins web interface, or with a Jenkins file stored with our code. The Jenkins file format is based on the Groovy programming language, and uses a declarative approach to describe the stages of a pipeline and the actions needed to complete the stage. Let's get started by taking a look at our experimental pipeline as implemented in a Jenkins file. The Jenkins file format is easy to follow, with each configuration element broken out into bracketed sections. At the top, we have an environment block that injects our configuration parameters and AWS credentials into the process running our pipeline. The actual values for the credentials are stored securely in Jenkins to prevent exposure in the repository or log files. Beneath that, we have our stages. I've modeled our experimental pipeline to follow the seven stages used to get the application code and run some quick tests, build a new version of the application, and then deploy and test in the staging and production environments. Each stage contains the steps that run the commands or scripts needed to fulfill the actions for that stage. In the check stage, I've used the parallel directive to tell Jenkins to run the linting and unit tests at the same time.
>
> **[3:07](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=187)** Using parallelization will help speed up the build. Now let's run our pipeline. In the default pipeline view, Jenkins provides a nice visualization of the pipeline, showing each of the stages we've defined in our Jenkins file. However, we can use the Blue Ocean plugin for what I'll call a more aesthetic pipeline visualization. To get to that view, I'll select "Open Blue Ocean". In the Blue Ocean view, our pipeline homepage shows past runs along with results, commit messages, and other details. We also have this handy Run button to start the pipeline process. We could also set up a Webhook with our [[Git]] repo so the pipeline runs automatically. But for this demo, I'll just use the Run button. We can also see the stages of our pipeline by clicking into the running job. In this view, we can see each stage of our pipeline along with its status. The green and white checkmarks let us know the stages have passed and the blinking blue icon lets us know which stage is active. The log for each stage is displayed below, and we can expand the form to follow the log in [[Real-Time]]. Now let's wait for the build to finish. The green color in the banner at the top lets us know all stages of the pipeline have completed successfully. With a clear pipeline as code format and extensive plugin library and pipeline visualizations
>
> **[4:41](https://www.linkedin.com/learning/continuous-integration-tools-20202338/jenkins?u=76281980&t=281)** with the Blue Ocean plugin, Jenkins remains a viable tool for continuous integration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (20), [[Continuous Integration (CI)|Continuous integration]] (3), [[Git]] (1), [[Real-Time]] (1)
> **CLI Commands:** aws (1), git (1)
> **Env Vars:** aws (1)
> **Prerequisites:** set up (1)

#### [Bamboo](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=0)** Bamboo is a self-hosted CI/CD solution developed by [[Atlassian]], the company behind applications like [[Confluence]], [[Jira]], and [[Bitbucket]]. For teams that are using other Atlassian [[Microsoft Products|products]], Bamboo is a nice fit for adding a CI/CD server to project management and issue tracking workflows. Work assigned in Jira, for example, can be directly associated with a pipeline in Bamboo. Bamboo also provides integration with Bitbucket, Atlassian's source code repository product. Bamboo is a paid product. The price for an annual license is based on the number of remote agents connected to the main Bamboo server. The number of agents needed by a team will depend on the size of the team, and the number of CI jobs being run. Agents can number from one into the thousands, with a license cost increasing accordingly. Check the Bamboo website for the most current pricing. To extend functionality, Atlassian provides a marketplace for Bamboo plugins. Some plugins are free, while others have a cost associated with them. Out of the box, Bamboo pipelines are configured from the web interface. However, Bamboo also supports spec files that can be stored along with the application code. Spec files can be written in YAML or [[Java]], with both of these formats having their benefits. YAML is easy to read and understand, even for someone that might not be familiar with programming. Java might be a bit more complicated to read,
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=96)** but it's a popular language and many developers are familiar with it. Let's see how we can implement our experimental pipeline in Bamboo. Bamboo pipelines are called Plans. I've configured the plan for our experimental pipeline using the web interface. To get a better view, I'll select "Actions" and then "Configure plan". Plans contain stages and jobs. In this implementation, our experimental pipeline has one stage and one job. The job contains seven tasks, with each task representing a section of our pipeline. Each task performs a specific action; checking out code, running a script, or running a command. Other types of tasks are available for pipelines that need more specific actions. Let's run this plan by selecting "Run" and then "Run plan". While the build is running, we get this nice progress bar right at the top of the page showing the overall progress of the build. And we're also given easy access to any logs produced by the build so we can follow along. Let's wait for this build to complete. Bamboo has plenty of capabilities and can do even more when paired with other Atlassian products. If you're working at a shop that uses Confluence or Jira, for example, Bamboo might be a good choice for your software
>
> **[3:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bamboo?u=76281980&t=191)** integration needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Atlassian]] (5), [[Jira]] (3), [[Confluence]] (2), [[Bitbucket]] (2), [[Microsoft Products|Products]] (2)
> **Tools:** jira (3), confluence (2), bitbucket (2)
> **Definitions:** is a  (3)
> **CLI Commands:** cd (2)
> **Env Vars:** yaml (2)
> **Documentation:** spec (2)
> **Analogies:** for example (2)
> **Prerequisites:** configure (1)

#### [TeamCity](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=0)** TeamCity is an enterprise-grade CI/CD server produced by JetBrains, the company behind popular integrated development environments like IntelliJ and PyCharm. TeamCity can be used directly from the IDEs developed by JetBrains. Developers will benefit from being able to work with TeamCity while staying in their preferred coding environment. They can trigger builds or analyze build results, all without ever having to leave their editor. TeamCity also has integrations for other IDEs like Visual Studio. TeamCity is a closed-source application but has free licensing available. The free license includes full access to all product features, 100 build configurations, and support for three build agents. Enterprise licenses are available for unlimited builds and additional agents. Pricing is based on the number of build agents. TeamCity provides capabilities for quickly configuring build plans based on a project's code. For example, TeamCity can detect Maven or Ant build files in a [[Java]]-based project and suggest build plans for Java. TeamCity can be configured from the web interface or with configuration files in XML or [[Kotlin]] formats. XML provides a great deal of structure for describing a configuration, but it can be verbose and difficult for humans to process. Kotlin is a general-purpose programming language that runs
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=95)** on the Java Virtual Machine. It's no surprise that JetBrains would use Kotlin as a configuration format for TeamCity, since they're the ones that developed the language. Compared to XML, Kotlin is a bit easier to read and can be familiar to programmers, even if they aren't familiar with the language. It also lends itself to code reuse in the form of templates that can be parameterized and used across different pipelines. Let's implement our experimental pipeline in TeamCity. The exercise files for this lesson include a Kotlin-based settings file that can be imported to configure a TeamCity project. The file includes definitions for the project parameters and steps for each section of our experimental pipeline. I've created a project by importing the settings files. To get to the configuration, I'll select the "Build job", then "Edit configuration", and then "Build steps". In this view, we can clearly see the steps that make up each section of the pipeline. Each step is configured by selecting a runner type. I'm using a command line running type Rephrase. Each step is configured by selecting a runner type. I'm using a command line runner, but there are plenty of other options available for different technologies and actions. For now, let's run the pipeline.
>
> **[3:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/teamcity?u=76281980&t=191)** To see our pipeline in action, we need to go back to the home page, and click into the actively running build. On this page, we get a summary of the build's status along with which step the build is currently running. If we click "Build log", we can view the log in [[Real-Time]]. Now let's wait for the build to complete. Once the build is complete, we can review the output from specific steps by clicking the plus icon next to the step we want to see. Out of the box, the capabilities and price of TeamCity make it a good fit for small and medium-sized teams. If your team is already using JetBrains' IDEs like IntelliJ or PyCharm, you might get even more benefit by integrating TeamCity with those tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kotlin]] (5), [[Java]] (3), [[Real-Time]] (1)
> **Tools:** intellij (2), pycharm (2), command line (2), visual studio (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (2), cd (1)
> **Env Vars:** xml (3)
> **UI Navigation:** select the (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for example (1)

#### [Comparing self-hosted tools](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-self-hosted-tools?u=76281980&t=0)** Self-hosted CI/CD tools give us full control over the [[Hardware]] and software, running tests, creating artifacts, and deploying applications. However, that control comes with the responsibility of installing and maintaining the entire stack. [[Jenkins]] is open-source, free, and supports thousands of plugins. The Jenkins file format is also great for easily modeling pipeline stages. Bamboo is known for tight integration with other [[Atlassian]] [[Microsoft Products|products]] and connects to a marketplace for plugins and extensions. Bamboo also provides a web-based interface for creating pipelines. TeamCity works seamlessly with JetBrains' IDEs and other editors like Visual Studio Code. Project detection speeds up configuration, and [[Kotlin]]-based pipeline files are approachable for most developers using TeamCity. Now, let's explore the next category, [[SaaS|Software as a Service]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jenkins]] (2), [[Hardware]] (1), [[Atlassian]] (1), [[Microsoft Products|Products]] (1), [[Kotlin]] (1)
> **CLI Commands:** cd (1)
> **Tools:** visual studio (1)


### 2. Software as a Service (SaaS)

[↑ Back to Table of Contents](#table-of-contents)

#### [Travis CI](https://www.linkedin.com/learning/continuous-integration-tools-20202338/travis-ci?u=76281980)

#### [CircleCI](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=0)** CircleCI provides CI/CD [[Workflow Management]], a variety of build environments, and capabilities that can support all types of projects. CircleCI uses a variety of Docker containers or [[Virtual Machines]] to run your CI and CD build steps. This gives developers access to [[Ubuntu]], [[Windows]], and MacOS environments. In addition, projects that require more compute resources or specialized processors can use GPUs and ARM-based environments. For mobile developers, CircleCI also provides support for building and testing applications for iOS and [[Android]] platforms. Cost-wise, it's easy to get started on CircleCI. Three tiers of pricing are available with support for individual developers, teams, and enterprises. Each tier provides a generous amount of free build minutes each month, with additional minutes available for purchase as needed. Pricing starts out at $0 per month and scales up from there, according to the number of concurrent jobs and the number of members contributing to projects in an account. Be sure to check the CircleCI website for the most up-to-date pricing information. CircleCI workflows and jobs are configured in a file named config.yml, located in a hidden directory named .circleci. The config.yml file is used to define all jobs and workflows for the project.
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=95)** CircleCI also has a convention known as an orb, which defines packaged shareable configurations. Orb save time by allowing developers to reuse configurations. CircleCI even provides an orb registry where you can find configurations for tools and third-party vendors. There's also a handy CircleCI command line tool for testing configurations, debugging jobs on a local system, and more. Now let's take a look at our experimental pipeline running on CircleCI. I've modeled the experimental pipeline in CircleCI as four jobs. Each job defines the steps needed to fulfill that stage of the pipeline. We can start a new build by pushing code to the repo, or from here, I can use the "Rerun pipeline" button. And from here, I'll select the actively running pipeline. We can follow the pipeline progress by selecting actively running steps to see the commands and output. Once the build is complete, we can see the status of each stage and the overall status of the pipeline. Beyond running workflows, CircleCI also provides trends on how our builds have run over time. This information can be found on the Insights page. Insights provide our average runtime, when the last job was run,
>
> **[3:11](https://www.linkedin.com/learning/continuous-integration-tools-20202338/circleci?u=76281980&t=191)** and a visual indicator for jobs that have failed or succeeded along with the success rate. With an easy onboarding process and generous pricing options, CircleCI provides a capable and competitive CI/CD option for teams of all sizes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Workflow Management]] (1), [[Virtual Machines]] (1), [[Ubuntu]] (1), [[Windows]] (1), [[Android]] (1)
> **CLI Commands:** cd (3), docker (1), find (1)
> **File Paths:** config.yml (2)
> **Code Identifiers:** ios (1)
> **Env Vars:** arm (1)
> **Tools:** command line (1)
> **UI Navigation:** select the (1)
> **Definitions:** known as (1)

#### [Comparing SaaS tools](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-saas-tools?u=76281980&t=0)** CI tools in the [[SaaS|Software as a Service]] category offer the convenience of easy configuration and maintenance-free operations. This is also one of the first categories where we can benefit from unbounded scale. If there's a need for increased capacity for tests and deployments, more compute resources or build minutes can be added as needed. Travis CI has long been a first choice for large open-source projects for integrating code and running tests. It has close ties to projects hosted in [[GitHub]], but also supports other code repositories. And the YAML configuration is intuitive and elegant at the same time. CircleCI is known for its speed and efficiency in testing and building applications. It also provides orbs for creating reusable pipeline components. And CircleCI Insights is another strong feature showing trends from a project's history. Now let's get into the next category of CI tools, Cloud Service Providers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS|Software as a service]] (1), [[GitHub]] (1)
> **Env Vars:** yaml (1)
> **Tools:** github (1)


### 3. Cloud Service Providers

[↑ Back to Table of Contents](#table-of-contents)

#### [Amazon Web Services (AWS) CodePipeline and CodeBuild](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=0)** When we're heavily invested in the cloud, it can make sense to keep our CI/CD tools on the same platform we use for servers, [[Databases]], and other resources. Let's discuss tools in the cloud service provider category, starting with AWS CodePipeline and CodeBuild. CodePipeline and CodeBuild are tools for implementing CI/CD in [[Amazon Web Services (AWS)|Amazon Web Services]]. With CodePipeline, developers can model the stages of their pipeline and the actions that need to be taken in each stage. CodeBuild provides an on-demand build service that can be used with CodePipeline to implement the steps needed to build, deliver, and deploy code. CodePipeline takes input from several sources, including [[GitHub]] repositories, Amazon's hosted [[Git]] repo service, CodeCommit, Amazon's Elastic Container Registry, also known as ECR, and Amazon Simple Storage Service, most commonly known as S3. Depending on the input, CodePipeline collects additional information to help developers create stages in the pipeline for building, testing, and deploying the application. Each stage calls on an action provider to do the work for that stage. With so many services in AWS, there are plenty of action providers to choose from, including CloudFormation, Amazon Lambda, Amazon Elastic Container Service, and well, you get the idea.
>
> **[1:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=94)** You can even use actions from third parties or create custom actions to meet specific needs. CodeBuild is one of the most common providers to use with CodePipeline. When working with a repository-based project, CodeBuild is configured by a file named buildspec.yml, located in the root directory of the project. The configuration defines the specific steps that CodeBuild will take and where to store any artifacts created by the process. The configuration can also be parameterized, so CodeBuild workflows can be used with different projects. CodeBuild uses [[Linux]] or [[Windows]] VMs that are created on demand for each build. VMs can be sized according to the CPU and RAM needed to build or test the application. Like other AWS services, there are no upfront costs for CodePipeline and CodeBuild. You only pay for the resources that you use. Pipelines are free for the first 30 days after they're created. After that, each active pipeline costs $1 per month. CodeBuild includes 100 build minutes for free each month. This free limit continues even after the free tier expires. If all free minutes are consumed, additional minutes are priced at fractions of a cent for small instances and just pennies more for larger instances. Let's see how CodePipeline and CodeBuild handle our experimental pipeline.
>
> **[3:09](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=189)** The buildspec for our sample application is made up of sections called phases. We have four phases represented; install, pre-build, build, and post-build. In CodePipeline, we'll define steps that call CodeBuild and pass parameters to these phases for both environments of our sample application. Here's a view of our experimental pipeline with three stages. The first stage named source, receives webhooks from our GitHub repository. Whenever there's a new change pushed to the repo, the source stage will pull the new code and kick off the next stage in the pipeline. Deploy staging uses a CodeBuild action to run the steps defined in the buildspec file. This stage is also parameterized to build, test, and deploy the staging environment before triggering the next stage. Deploy production uses the same CodeBuild configuration as the previous stage, but is parameterized for the production environment. To trigger the pipeline, I'll select "Release change". We can follow the pipeline's progress from this view, or we can view the logs from each action. Now let's wait for the pipeline to complete. From the execution history view,
>
> **[4:42](https://www.linkedin.com/learning/continuous-integration-tools-20202338/amazon-web-services-aws-codepipeline-and-codebuild?u=76281980&t=282)** we can see the status and details of past pipeline runs. And we can get more detailed information for each stage in the build history view for CodeBuild. We've only seen just a little bit of what AWS CodePipeline and CodeBuild can do in this overview. There's plenty more that you can do with both of these tools and other AWS services.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Databases]] (1), [[Amazon Web Services (AWS)|Amazon web services]] (1), [[Git]] (1), [[Linux]] (1)
> **CLI Commands:** aws (5), cd (2), make (1), git (1)
> **Env Vars:** aws (5), ecr (1), cpu (1), ram (1)
> **Tools:** github (2)
> **Definitions:** known as (2)
> **File Paths:** buildspec.yml (1)
> **Prerequisites:** install (1)

#### [Azure Pipelines](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=0)** [[Microsoft Azure|Azure]] Pipelines is part of the Azure [[DevOps]] product line. Azure DevOps includes a complete set of hosted tools for [[Application Development]], with pipelines as the main tool for building, testing, and deploying applications. Pipelines can interact with [[Virtual Machines]], [[Kubernetes]] clusters, or other resources running in Azure. Jobs can also be configured to deploy to other clouds as well. Azure Pipelines allows developers to build projects on a variety of platforms including [[Ubuntu]] [[Linux]], MacOS, and [[Windows]], all hosted in the Azure Cloud. Open-source projects using Azure Pipelines can benefit from unlimited build time and 10 jobs running in parallel. Teams of five or less can use up to 1,800 build minutes per month on one hosted job. Jobs are defined in Azure Pipelines using agents and tasks. To increase feedback and contributions from the community, [[Microsoft]] has made the standard agents and tasks open-source and available for collaboration on [[GitHub]]. Developers can use their own custom agents and tasks as well. Each Azure Pipelines project is configured with a YAML file named azure-pipelines.yml, located in the root directory. The file specifies the virtual machine image to use for builds, and any other project parameters needed to run tests or deploy applications. Okay. Now let's go to the Azure Pipelines console. The Azure Pipelines console provides a nice visualization of
>
> **[1:37](https://www.linkedin.com/learning/continuous-integration-tools-20202338/azure-pipelines?u=76281980&t=97)** the experimental pipeline. Each section of the pipeline contains the jobs and steps that will take place in that section. I'll push a change to the repo and go to the actively running pipeline. From this view, we'll be able to see each job and step as it's running along with status updates. And if we select a running stage, we can follow along with each build step. Now let's wait for the pipeline to complete. Along with the functionality we've seen in this overview, Azure Pipelines includes release management, task groups, and more. These features make Azure Pipelines a capable tool for managing CI for resources hosted in Azure and other clouds as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (15), [[DevOps]] (2), [[Application Development]] (1), [[Virtual Machines]] (1), [[Kubernetes]] (1)
> **UI Navigation:** go to (2)
> **File Paths:** azure-pipelines.yml (1)
> **CLI Commands:** make (1)
> **Env Vars:** yaml (1)
> **Tools:** github (1)

#### [Google Cloud Platform (GCP) Cloud Build](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=0)** Cloud Build is an integration service from the [[Google Cloud Platform (GCP)|Google Cloud Platform]] suite of tools. It originally started as an image builder for containers. Over time, it's grown into a tool that can be applied to CI/CD tasks as well. The core functionality of Cloud Build is a workflow manager for building and testing applications before deploying them to other GCP services like App Engine, [[Kubernetes]] Engine, or even services running on other cloud platforms. Cloud Build pricing is part of the GCP free tier. Standard builds are given 2,500 minutes per month, and additional minutes start at just $0.003 per minute. Please check the Cloud Build website for current pricing. Cloud Build is initially configured by adding a trigger from [[Bitbucket]], [[GitHub]], or GCP's own cloud source repository. Once a trigger is added, Cloud Build is activated when a new commit is pushed to the repo. The trigger can be further configured to build on specific branches or tags. For projects that only need a container image to be created, the repo just needs to contain a Docker file and any supporting files. To do anything beyond creating an image like testing or deploying, a Cloud Build configuration file is required. Build steps are defined in a file named cloudbuild.yml, or if you're more of a [[JSON]] fan, you can use the JSON format in a file named cloudbuild.json.
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=96)** This file is usually located in the root directory of the project. Let's take a look at the Cloud Build configuration for our experimental pipeline. The cloudbuild.yml file has an easy-to-follow format. At the top of the file, the steps keyword starts off the list of steps that will be included in the build. For Cloud Build, I've modeled our experimental pipeline in nine steps. Each step has a name, but is not the name of the step. It's actually the name of the container image that Cloud Build will use to run the step. Each step is a command that gets passed to the containers runtime environment. We can also include environment variables using the ENV directive. This is key to passing in the credentials and project parameters needed to deploy our application to AWS. Now that we know how our pipeline is laid out, let's kick off a build. On the Cloud Build homepage, we can see the build history for all the pipelines in our project. If I click into a build that ran successfully, I can rebuild it from this Build's homepage. This gives us a great view of our build steps and a log where the output of each step is written. One of the cool things about this log is this option here, "Show newest entries first". Select that and Cloud Build will update the log backwards, so you can see the most recent output at the top of the log.
>
> **[3:14](https://www.linkedin.com/learning/continuous-integration-tools-20202338/google-cloud-platform-gcp-cloud-build?u=76281980&t=194)** No more scrolling down to see the output. Once the build completes, we can see the status for each stage. If we need to see the output from a specific stage, we can open that stage log file right from this window and start debugging. In summary, Cloud Build's straightforward configuration, and generous free tier make it a well-suited option for CI/CD.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Kubernetes]] (1), [[Bitbucket]] (1), [[GitHub]] (1)
> **Env Vars:** gcp (3), json (2), env (1), aws (1)
> **CLI Commands:** cd (2), docker (1), aws (1), make (1)
> **File Paths:** cloudbuild.yml (2), cloudbuild.json (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** bitbucket (1), github (1)
> **Versions:** 0.003 (1)

#### [Comparing cloud service provider tools](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-cloud-service-provider-tools?u=76281980&t=0)** Cloud service providers offer CI/CD tools that are seamlessly integrated into their respective cloud ecosystems. Building software in the cloud where it's intended to be deployed comes with the advantage of access management and other security controls. Scale is also a benefit, with clouds providing access to essentially unlimited resources. CodePipeline and CodeBuild are a dynamic duo for CI/CD projects hosted on AWS. Each tool contributes to modeling pipelines with stages, actions, and reusable build components. [[Microsoft Azure|Azure]] Pipelines ties in nicely with the project management features of the Azure [[DevOps]] platform. Azure Pipelines also includes features for release management. GCP Cloud Build is known for its fast runtimes and simple configuration. Projects based on containers can benefit from Cloud Build's native functionality for creating container images. Up next, let's take a look at CI tools provided by platforms many developers use every day, Code Repositories.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Azure|Azure]] (3), [[DevOps]] (1)
> **CLI Commands:** cd (2), aws (1)
> **Env Vars:** aws (1), gcp (1)


### 4. Code Repositories

[↑ Back to Table of Contents](#table-of-contents)

#### [GitHub Actions](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=0)** Code repositories allow us to manage our code along with the CI/CD services, running our tests and deployments. There are some really amazing tools in this category, including this one, [[GitHub]] Actions. GitHub is one of the world's most popular code repositories, with millions of users, more than 100 million repositories, and a suite of tools for modern [[Software Development]], including [[Continuous Integration (CI)|continuous integration]]. GitHub provides [[Git]]-based source code management and is home to thousands of open-source projects. Access to GitHub is free and includes unlimited public and private repositories. In the GitHub Marketplace, developers can find third-party applications and tools to extend GitHub's native capabilities. This includes tools for getting notifications, conducting code reviews, scanning code for security vulnerabilities, and much more. GitHub also includes GitHub Actions, a [[Workflow Management]] tool for repositories hosted on GitHub. Workflows are configured with YAML files stored in a hidden folder named .github/ workflows. Repositories can have multiple workflows, with each one performing a specific task. Workflows are triggered in response to activity in the repo, along with standard triggers like pushing updated code, workflows can be triggered by just about any other repo activity based on the GitHub API.
>
> **[1:32](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=92)** This includes activity that might not even involve code, like adding comments to pull requests, or when someone new joins a project. GitHub actions provides compute environments for [[Windows]], [[Linux]], and macOS called runners. You can also host your own runners for more flexibility. The workflow files define which runners will be used, along with jobs, steps, and actions. Jobs and steps can define pipeline stages, and actions are used for discrete tasks. Thousands of predefined actions can be sourced from the GitHub Marketplace, or developers can create their own custom actions to share or use across multiple repos. Let's use a GitHub Actions workflow to run our experimental pipeline. For GitHub Actions, I've modeled the experimental pipeline using jobs to represent the stages of the pipeline. This workflow run was triggered by a push to the repo. I can also trigger the workflow manually by going to the workflows main page and selecting "Run workflow". Now I'll select the active pipeline. Right now our pipeline is queued and waiting to run. Let's wait a few minutes for it to run and complete. The big green checkmark on the left lets us know that our workflow completed successfully. And beneath that, we can see a similar result for
>
> **[3:06](https://www.linkedin.com/learning/continuous-integration-tools-20202338/github-actions?u=76281980&t=186)** each job in the pipeline. We're also provided with an interface where we can explore the status and output from each step of the workflow. Along with keeping code and CI/CD in one location, GitHub and GitHub Actions provide plenty of capabilities for software development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (17), [[Software Development]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[Git]] (1), [[Workflow Management]] (1)
> **Tools:** github (17)
> **CLI Commands:** cd (2), git (1), find (1)
> **Env Vars:** yaml (1), api (1)
> **Code Identifiers:** macos (1)
> **UI Navigation:** select the (1)
> **Exercise Files:** source code (1)

#### [GitLab CI](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=0)** [Gitlab.com](https://Gitlab.com) includes code management, project planning, and of course, [[Continuous Integration (CI)|continuous integration]]. GitLab's core functionality is [[Git]]-based code management and collaboration. Fans of [[Open-Source Software]] will be happy to know that GitLab is an open-source product, with some portions licensed as source available. All of the code is available on [gitlab.com](https://gitlab.com) and [github.com](https://github.com). If you want to raise an issue with the development team or submit a pull request, you can start from either site. [Gitlab.com](https://Gitlab.com) provides unlimited public and private repositories and unlimited collaborators for free. GitLab CI is GitLab's continuous integration service. [[Linux]] is the primary platform for hosted runners on GitLab. At the time I'm recording this, beta support is available for hosted runners using [[Windows]] and macOS. Using your own self-hosted runners is also an option. GitLab's free tier includes 400 pipeline minutes per month. Upgrading to a paid tier adds more pipeline minutes and access to other services and features. GitLab CI pipelines are configured in a file named .gitlab-ci.yml, located in the root directory of the project. The configuration defines each stage of a pipeline in order, followed by the jobs and scripts that belong to each stage. Let's take a look at our experimental pipeline
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/gitlab-ci?u=76281980&t=95)** in GitLab CI. For GitLab CI, I've modeled the pipeline stages using six jobs. Pipelines are triggered by pushes to the repo, but we can also run a pipeline manually by selecting "Pipelines" and then "Run pipeline". Once the pipeline finishes, we can review the logs from any stages that need attention. We can also view pipeline metrics by selecting "Analyze" and then "CI/CD analytics". From this view, we can see a variety of [[Statistics]] from previous pipeline runs. Along with CI/CD, GitLab has many more features, making it a viable platform for [[Software Development]], security auditing, and project management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (2), [[Git]] (1), [[Open-Source Software]] (1), [[GitHub]] (1), [[Linux]] (1)
> **Tools:** gitlab (14), github (1)
> **URLs:** [gitlab.com](https://gitlab.com) (3), [github.com](https://github.com) (1)
> **CLI Commands:** cd (2), git (1)
> **File Paths:** gitlab-ci.yml (1)
> **Code Identifiers:** macos (1)
> **Definitions:** is an  (1)

#### [Bitbucket Pipelines](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=0)** [[Bitbucket]] pipelines is part of the Bitbucket Repository service offered by [[Atlassian]], the same company that produces [[Jira]], [[Confluence]], and the self-hosted CI/CD system, Bamboo. Bitbucket provides source code management for [[Git]] and Mercurial revision control systems. The repo service also integrates well with other Atlassian [[Microsoft Products|products]] for tracking issues and project management. Individual users can use Bitbucket for free. For additional features and support, pricing for small teams and enterprises is reasonable. Check the Bitbucket website for the current rates. To configure Bitbucket pipelines, projects need to include a configuration file named bitbucket-pipeline.yml, located in the root folder of the repository. Pipelines use containers to run the commands based on the configuration in the YAML file. Individual developers and small teams using Bitbucket for free are given 50 minutes of build time per month. So to keep within that free tier, you'll want to use pipelines for running quick tests and efficient deployments. Let's see how our experimental pipeline is implemented in Bitbucket pipelines. I've implemented the stages of our experimental pipeline using six steps. The check and test steps are run in parallel to speed things up a bit. Each step contains a script section that runs the commands
>
> **[1:35](https://www.linkedin.com/learning/continuous-integration-tools-20202338/bitbucket-pipelines?u=76281980&t=95)** implementing that stage of the pipeline. I'll commit a change to this file to trigger the pipeline. While the pipeline is running, we get an indicator showing the active step. And if we select an active step, the logs are updated in [[Real-Time]] so we can follow along. While the pipeline runs, let's look at the Deployments view. The Deployments view gives us a neat way to see the flow of code through our pipeline. We can use the build number and commit hashes to see which version of our code has been deployed to each environment. Once the build is complete, we can see that all portions of the pipeline have processed the same version of code. Bitbucket pipelines has some really nice features for showing you the flow of code through your pipeline. This is great for knowing what's been deployed and what your pipeline is doing in each stage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Bitbucket]] (10), [[Atlassian]] (2), [[Jira]] (1), [[Confluence]] (1), [[Git]] (1)
> **Tools:** bitbucket (10), jira (1), confluence (1)
> **CLI Commands:** cd (1), git (1)
> **File Paths:** bitbucket-pipeline.yml (1)
> **Env Vars:** yaml (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** configure (1)

#### [Comparing code repository tools](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=0)** CI tools provided by code repositories have the unique advantage of being in the same place that developers store their code. This comes with the productivity benefit of minimizing context switching from one tool to the next. Tools in this category also benefit from advanced pipeline analytics, increased observability of code deployed to different environments, and the use of custom pipeline components. Code repo CI tools also provide hosted runners for a variety of operating systems, along with the option for us to use our own self-hosted runners. Projects using [[GitHub]] Actions can include multiple workflows managed in separate files, and these workflows can be triggered by a variety of different activities taking place in the GitHub repo. GitHub Actions workflows also benefit from the GitHub Marketplace, which is home to thousands of actions that can be used to build pipelines. GitLab CI leans into the YAML configuration format and provides pipeline functionality for the most complex projects. GitLab CI also includes native tools for analyzing pipeline results and trends. [[Bitbucket]] has strong features for observing pipeline execution and deployments to different environments. It also provides integration with [[Atlassian]] project management applications. As we wrap up this overview of CI tools, let's discuss how we can use what we've learned to select
>
> **[1:34](https://www.linkedin.com/learning/continuous-integration-tools-20202338/comparing-code-repository-tools?u=76281980&t=94)** the right tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Bitbucket]] (1), [[Atlassian]] (1)
> **Tools:** github (4), gitlab (2), bitbucket (1)
> **Env Vars:** yaml (1)
> **Exercise Files:** github repo (1)


### 5. Selecting a CI Tool

[↑ Back to Table of Contents](#table-of-contents)

#### [Selecting the right CI tool](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=0)** We've covered a lot in this course. Let's wind things down by figuring out how to pick the right tool for you and your CI/CD projects. We separated tools into four categories: Self-hosted, [[SaaS|Software as a Service]], cloud service providers, and code repositories. Self-hosted tools are going to require the most from you in terms of setting up the infrastructure, installing the software, and maintaining everything for as long as you're actively using CI/CD. But they'll also provide the most flexibility in running pipelines that are unique to your requirements. Tools in the Software as a Service category make it easy to get up to speed quickly, because the vendor providing the CI/CD service takes the responsibility of hosting the software for you. Cloud service providers have an edge over other CI/CD vendors because they can offer integrations with cloud-based [[Microsoft Products|products]] and services. With this option, you can easily have your CI/CD running on the same platform hosting your networks, servers, and [[Databases]]. And rounding out the pack are the code repositories that we rely on to store code that eventually becomes software. Using the same platform to manage CI/CD, along with managing our code, can simplify collaboration, issue tracking, and many other parts of the [[Software Development]] process. So when it comes to you and your code, which tool category makes the most sense? If you're an individual developer, you'll want to minimize the time
>
> **[1:36](https://www.linkedin.com/learning/continuous-integration-tools-20202338/selecting-the-right-ci-tool?u=76281980&t=96)** and effort it takes to get started so you can focus on your code. Consider using a tool from the Software as a Service or code repository categories. If you're part of a small team, you'll need CI tools that can handle integration and deployments at scale, while also providing capabilities for project management. Tools from a code repository category will likely be the best fit. If you're trying to find the right CI tool for your business or enterprise, you're free to choose a tool from any of these categories. However, tools from the self-hosted and cloud service provider categories will give you the most options for integrating CI tools with your business processes and security requirements. You might be thinking all this information is helpful, but it doesn't answer the question, which tool should I pick? Well, I can't answer that question for you, but I can tell you this, experiment and be open to change. Pick the tool that works for you now and get started. If it's not the right fit, you can always try another one. As you research CI tools, come back to this course as needed. Be sure to use the exercise files. They have all the information you need for hands-on exploration. Thanks for joining me for this course. I wish you all the best on your journey with [[Continuous Integration (CI)|continuous integration]] tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[SaaS|Software as a service]] (2), [[Microsoft Products|Products]] (1), [[Databases]] (1), [[Software Development]] (1)
> **CLI Commands:** cd (6), make (1), find (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** you'll need (1)


## Instructor

- [[Michael Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/continuous-integration-tools-4490242)

## Skills Covered

- Continuous Integration (CI)

## Path Context

### In [[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]
← [[DevOps Foundations- Continuous Delivery-Continuous Integration]] | **3 of 3**

## Appears In

- [[Getting Started with Continuous Integration - Continuous Delivery (CI-CD)]]

---

[↑ Back to top](#)