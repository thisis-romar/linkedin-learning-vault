---
type: course
slug: developing-ci-cd-solutions-with-azure-devops-22123562
url: "https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562"
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/network-and-system-administration
  - topic/software-development
status: not-started
created: 2026-04-17
---

# Developing Ci Cd Solutions With Azure Devops

> As a developer, you need to field a constant flow of requests for new features, updates, and bug fixes. By using Azure pipelines, you're able to build your applications and catch bugs early. In this course, Prince Mokut teaches you to configure a fully automated continuous integration and continuous delivery (CI/CD) pipeline in Azure. Prince starts with a high-level overview of Azure pipelines con

> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562)

## Instructor

- [[Prince Mokut]]

## Table of Contents

### Introduction

#### Why use Azure Pipelines?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980&t=0)** - [Prince] Azure Pipelines help with the build, test, and quick delivery of your software solutions to users.
>
> **[0:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980&t=8)** In this course, we will learn the concepts of Azure Pipelines and various features that can make your pipeline configuration easier.
>
> **[0:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980&t=17)** We will define the pipeline to build and deploy a .NET solution to Azure App Service.
>
> **[0:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980&t=24)** We will also integrate SonarCloud to scan our source code for any vulnerabilities and define a branch policy that checks for scan results before allowing modifications to be merged with a protected branch.
>
> **[0:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980&t=38)** I am Prince Mokut, a cloud architect and DevOps engineer with many years of experience designing pipelines for projects written in several programming languages.
>
> **[0:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/why-use-azure-pipelines?u=76281980&t=50)** If you're ready to start building CI/CD workflows for your development team or software projects, then come join me in my LinkedIn Learning course on Developing CI/CD Solutions with Azure Pipelines.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (2), make (1)
> **Code Keywords:** protected (1)
> **Env Vars:** net (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [prince] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we get started with this course, there are a few things you need to have.
>
> **[0:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-you-should-know?u=76281980&t=5)** First download Git to your PC for version control of the source code and Visual Studio Code for making changes to the sample web application we will deploy to Azure App Service.
>
> **[0:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-you-should-know?u=76281980&t=19)** You also need to sign up on SonarCloud so we can use the code analysis feature.
>
> **[0:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-you-should-know?u=76281980&t=25)** Next, you will need to sign up on Azure Portal and Azure DevOps.
>
> **[0:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-you-should-know?u=76281980&t=29)** So visit the link displayed on the screen to a register profile.

> [!info]- Semantic Content
>
> **Tools:** visual studio (1), azure portal (1)
> **CLI Commands:** git (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 1. Azure Pipelines

#### What really is Azure Pipelines?
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=0)** - [Instructor] Let's imagine your development team is building a new software application for the organization.
>
> **[0:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=8)** You'd have several developers collaborating on a large project that could take multiple sprints to be completed.
>
> **[0:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=17)** Consider the current toil might be waiting for the ops team to spin up new servers, manually copy compile codes or the software application to multiple environments, and fix up compatibility issues across several environments.
>
> **[0:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=34)** How can we reduce toil for the dev team, enabling them to quickly test the application and get feedback?
>
> **[0:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=44)** For the purpose of quickly making your software applications accessible to users, Azure Pipelines provides a quick, easy, and safe way to automate building and deploying your projects.
>
> **[0:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=57)** Almost any language or project type is supported with Azure Pipelines, like Node.js, Python, Java, and even mobile applications.
>
> **[1:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=68)** CICD or continuous integration and continuous delivery are combined in Azure Pipelines to build and deliver your code to any target, whether infrastructure in any cloud platform or on-premises.
>
> **[1:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=85)** Development teams utilize continuous integration in Azure Pipelines to automatically merge, build, and test their code.
>
> **[1:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=96)** Implementing CI helps to catch bugs early in the development cycle, which makes them less expensive to fix and lowers the possibility of bugs in the production environment.
>
> **[1:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=109)** To verify quality, you can design automated testing scripts that can run as part of your CI process.
>
> **[1:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=118)** The end product of a CI process is usually a build artifact which is then used by a released pipeline to support frequent or continuous deployments to environments.
>
> **[2:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=133)** The build artifact is released to one or more test and production environments using a method known as continuous delivery.
>
> **[2:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=143)** This process allows teams to deploy applications faster to several environments in the cloud or on-premises, enabling them to improve the quality of their software applications.
>
> **[2:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=156)** When using Azure Pipelines to define your continuous delivery process, you can enable approval gates, check monitoring systems to determine the state of your production environment and integrate your team's change approval board process if you use a software tool to manage change approvals.
>
> **[2:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=176)** All these things can be done before an artifact is deployed to any environment.
>
> **[3:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=183)** Azure Pipelines provides a limited hours of free pipeline run every month for projects, so you can sign up for Azure DevOps services, which is cloud-based, and choose single services like Azure Pipelines, Artifact basic plan, or basic test plans.
>
> **[3:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/what-really-is-azure-pipelines?u=76281980&t=202)** Or you can run locally in your enterprise server by installing the Azure DevOps Express tool.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), python (1)
> **File Paths:** node.js (1)
> **Code Keywords:** let (1)
> **Env Vars:** cicd (1)
> **Definitions:** known as (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### Key concepts of Azure Pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=0)** - [Instructor] Azure Pipelines is simply an automation tool that replaces the manual process of building and deploying software applications.
>
> **[0:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=9)** But this tool has several components which we will learn in a bit.
>
> **[0:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=14)** In Azure DevOps, there is the build and release pipeline.
>
> **[0:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=19)** To access Azure DevOps, you can visit dev.[azure.com](https://azure.com) and sign up or sign in with your Outlook account.
>
> **[0:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=30)** I'm already logged into my DevOps account and I've opened the sample project.
>
> **[0:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=35)** To access the build and release pipeline, you can hover your mouse on the Pipelines icon and here you would have the pipelines and releases.
>
> **[0:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=47)** If you want to create an automated workflow to build and test your software application, you use Pipelines.
>
> **[0:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=55)** So let's click Pipelines and then click on New pipeline.
>
> **[1:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=62)** Here you define the continuous integration process of your application, and if you're defining the pipeline using YAML syntax, then you can also define the continuous deployment process in the single workflow.
>
> **[1:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=78)** So for instance, if my code is in Azure Repos and I would like to define my workflow using the YAML syntax, then I would select the Azure Repos Git as the source of my code.
>
> **[1:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=93)** If you don't wish to use YAML, you can select the use classic data option.
>
> **[1:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=99)** In the next page, I would select my repository as you may I have more than one repo in this project.
>
> **[1:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=107)** Then I'll select the appropriate template that fits my code.
>
> **[1:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=112)** For example, Node.js for building my Node.js application only or Node.js Express Web App to Linux on Azure.
>
> **[2:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=122)** If I want to define all the build, test and deployment workflow in this single pipeline.
>
> **[2:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=129)** Choosing the workflow with deployment steps, you see I'll need to select my Azure subscription, click continue and then choose an existing web app in my subscription.
>
> **[2:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=141)** Then click the validate and configure button.
>
> **[2:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=145)** However, if I select the first option, which should only build my code and produce an artifact, then I don't have to immediately configure the deployment process.
>
> **[2:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=156)** You can still manually define the deployment workflow in this YAML file, if you'd like.
>
> **[2:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=163)** In this file, there is a trigger set to the default branch, which is the master branch.
>
> **[2:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=169)** A trigger is defined to start up the pipeline when an event occurs.
>
> **[2:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=174)** For example, run the pipeline when changes are pushed to the repo for a specific branch.
>
> **[3:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=183)** A pool is a computing infrastructure where jobs would run and in this case, can be a Windows or Linux server.
>
> **[3:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=192)** A pool is also referred to as an agent, especially if you use the classic data option to define your pipeline.
>
> **[3:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=202)** A step is where you define specific tasks or scripts to be executed when the pipeline is triggered.
>
> **[3:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=210)** For instance, we have a task here to install Node.js and after that run npm install and build the code.
>
> **[3:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=219)** You can add a set of tasks to test your application, as well as scan the code for vulnerabilities.
>
> **[3:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=228)** The difference between a task and a script is that a script uses command line, PowerShell or Bash to execute your custom code, while a task is more or less an abstracted package script.
>
> **[4:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=242)** All you have to do in a task is to provide the input parameters.
>
> **[4:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=247)** So if I click the last line and press enter and on the top right of the screen, I select Show assistant to search for npm and then select this npm task.
>
> **[4:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=262)** Then I can change the command from install to any other command, and then provide the necessary parameters required here if compulsory, and then click the add button.
>
> **[4:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=276)** Now comparing the script on line 18 with the task I just added, you see this starts with a task key and the command is just installed.
>
> **[4:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=290)** Now if you are defining your build and deployment workflow in the YAML file, you can use a stage two logically separate pipeline jobs.
>
> **[5:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=301)** For example, you can have a stage for the build phase, another stage to deploy to dev, QA or production environment.
>
> **[5:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=311)** I'll show you how to define a stage outside of a YAML file in releases.
>
> **[5:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=317)** Now, once you're done defining your pipeline, you can click the save and run button at the top right corner.
>
> **[5:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=325)** A run is simply an execution of a pipeline.
>
> **[5:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=328)** Here all the tasks and scripts defined in the pipeline executed one after the other.
>
> **[5:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=336)** You can also view the logs to see the progress and fix issues if errors occur during the run.
>
> **[5:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=345)** Since our sample workflow only has a build definition and no deployment task, you can define the deployment workflow in releases.
>
> **[5:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=355)** It's important to have a task in your YAML file to publish an artifact of the build code, which would then be deployed via the release pipeline.
>
> **[6:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=367)** So let's quickly look at the releases.
>
> **[6:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=370)** On the left side of the screen, I'll select the pipeline's menu and click releases.
>
> **[6:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=379)** Click on the new dropdown and then select new release pipeline.
>
> **[6:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=385)** You'll find a number of templates to choose from.
>
> **[6:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=388)** I would like to deploy to Azure Web App.
>
> **[6:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=391)** So I'll select the Azure App Service deployment and click apply.
>
> **[6:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=397)** Recall earlier that I mentioned a stage is a boundary of a set of pipeline jobs.
>
> **[6:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=403)** In releases, you must have at least one stage so you can name this stage as a dev and you can always rename this to anything later on.
>
> **[6:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=416)** You need to select an artifact for your release pipeline to run.
>
> **[7:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=421)** To do that, I'll click the add an artifact button.
>
> **[7:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=426)** Select the build pipeline and then I can click the Add button.
>
> **[7:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=436)** It'll always default to the latest version of the build pipeline.
>
> **[7:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=442)** Once it's added, I can then set trigger conditions for this release pipeline.
>
> **[7:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=448)** So I'll click the lightning icon and toggle the enable continuous deployment trigger.
>
> **[7:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=455)** Doing this will cause my release to run any time there is an updated artifact from this particular build pipeline I selected.
>
> **[7:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=466)** You can also set the build branch filters if you want the release pipeline triggered only for artifacts from a specific branch and also enable pull request trigger if you're enforcing branch policy following any branching strategies.
>
> **[8:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=486)** So let's quickly close this and then open this stage.
>
> **[8:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=491)** In this stage, we have a single job with one task name, Deploy Azure App Service.
>
> **[8:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=498)** This is where I'll define the release workflow, provide my Azure subscription web application name among other inputs.
>
> **[8:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=508)** When you're done defining your pipeline, the next step is testing to be sure it works as expected.
>
> **[8:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=516)** If the test is successful, this means that any time a developer commits and pushes changes to your repository, the build pipeline will be triggered and run.
>
> **[8:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=527)** Then create an artifact.
>
> **[8:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=530)** The release pipeline is triggered because of these updated artifacts and deploys the new version of your application to its target environment.
>
> **[8:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=539)** That's it.
>
> **[9:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=540)** Your users instantly use the updated version of the app without noticing any considerable downtime.
>
> **[9:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=549)** I so much enjoy designing pipelines because it helps me eliminate application downtime.
>
> **[9:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=554)** I want my customers to continue using my application without disruptions from deployments and I also want my development team to quickly build and test the applications.
>
> **[9:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/key-concepts-of-azure-pipelines?u=76281980&t=566)** So if you want to be like me and many other DevOps engineers, let's continue learning together.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (7), click on (2), dropdown (1), toggle (1)
> **CLI Commands:** node (4), npm (3), git (1), find (1)
> **Code Keywords:** let (4), continue (3), case, (1), from. (1)
> **Env Vars:** yaml (7)
> **Definitions:** is a  (3), is an  (1), means that (1)
> **Analogies:** for example (3), for instance (2)
> **Prerequisites:** install (3), configure (2)
> **File Paths:** node.js (4)

#### Define pipeline assets in Library
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=0)** - [Instructor] Apart from pipelines and releases, there are other features in Azure Pipelines that help make your workflow seamless to design.
>
> **[0:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=10)** If you expand the menu on the left, you'll see here that we have environments, which would usually be your virtual machines or Azure Kubernetes cluster where you can deploy your software applications or microservices.
>
> **[0:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=28)** There is a task group feature where you can define common build and deployment steps templates, then reference the templates in your pipelines.
>
> **[0:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=40)** This effectively reduces the time spent to define new pipelines for similar programming languages.
>
> **[0:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=48)** Deployment groups are useful if you have a set of application servers with pipeline agents already installed so you can concurrently deploy your applications to the groups.
>
> **[1:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=62)** There is also the library feature where you can define variables, like values and secrets to be used across multiple build and release pipelines.
>
> **[1:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=75)** You can also upload secure files, like certificates and sign-in keys.
>
> **[1:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=83)** Let's click the add variable group button here.
>
> **[1:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=89)** And you can provide the name for the variable group.
>
> **[1:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=92)** For example, project secrets.
>
> **[1:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=101)** And under variables, let's click the add button and start defining keys and values.
>
> **[1:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=109)** For example, I have a DB password as the name.
>
> **[1:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=116)** And then in the value column, I'll type my password.
>
> **[2:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=123)** If I want this value to be a secret so that it can be viewed by anyone, I can click the lock icon to the right of the value to max this value.
>
> **[2:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=135)** Now, once I click the save button at the top and then click the lock button to reveal the value, it's empty.
>
> **[2:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=149)** So you can use this variable across pipelines in this project, knowing the value remains the same and it's a secret.
>
> **[2:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=158)** This is quite useful if you are defining pipelines for microservices and applications where secrets should not be entered as plain text in your pipeline configuration.
>
> **[2:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=170)** There is also an option to link secrets from Azure Key Vault in your Azure subscription.
>
> **[2:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=177)** So for example, instead of saving my DB password locally in this variable group, I can create a secret in the Azure Key Vault and link that here in the variable group.
>
> **[3:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=190)** Now, if I need to update the database password, I'll simply do that in the key vault.
>
> **[3:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=197)** And this pipeline will retrieve the updated value from the vault during the next pipeline run.
>
> **[3:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=205)** With the security control in the library, you can specify who or which groups can read, use, define, or modify the values in a variable group.
>
> **[3:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=221)** This provides an additional layout security over assets created in the library.
>
> **[3:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/define-pipeline-assets-in-library?u=76281980&t=227)** So in your next CIC design for your team, try out the library feature and integrate your key vault.

> [!info]- Semantic Content
>
> **Analogies:** for example (3)
> **Code Keywords:** let (2)
> **CLI Commands:** make (1)
> **Env Vars:** cic (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Designing a Build Pipeline

#### Get your source code to Azure Repos
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=0)** - [Instructor] Now let's take a look at having a source code in the Azure DevOps repository.
>
> **[0:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=6)** First, we need to create a project on Azure DevOps.
>
> **[0:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=9)** So if you're not signed up to Azure DevOps, simply go to dev.[azure.com](https://azure.com) and click the Start Free button to sign up.
>
> **[0:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=19)** You would usually need an Outlook account to be able to register on Azure DevOps.
>
> **[0:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=26)** Once you're signed in, click on the New Project button at the top-right corner of the screen.
>
> **[0:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=34)** And then let's enter a project name.
>
> **[0:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=37)** For this course, my project name is Student App.
>
> **[0:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=42)** You can provide the description if you'd like.
>
> **[0:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=45)** We'll leave that blank.
>
> **[0:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=48)** I would select public visibility.
>
> **[0:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=51)** This is necessary because if I should go SonarCloud page, you can see here it's free for open source projects.
>
> **[1:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=61)** So in order to integrate SonarCloud with my project, I need to leave it as open source.
>
> **[1:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=66)** Otherwise, I'll have to pay for using SonarCloud.
>
> **[1:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=71)** So back in my project, I'll expand the advanced option and make sure my version control is Git.
>
> **[1:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=78)** Then click the create button.
>
> **[1:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=80)** Once the project is created, let's head over to the Azure Repos page.
>
> **[1:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=86)** So on the left side of the screen, click on Repos.
>
> **[1:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=91)** Now we need to import a repository from GitHub.
>
> **[1:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=96)** So to do that, I'll click on the Import button and here we see we need to paste the GitHub URL.
>
> **[1:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=104)** Let's head over to GitHub at the address displayed on the screen.
>
> **[1:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=109)** Ensure that the selected branch is main, and then click the code button towards the right of the screen.
>
> **[1:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=117)** And let's click the copy button.
>
> **[2:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=120)** Back in my Azure DevOps page, I'll paste the URL in the clone URL field.
>
> **[2:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=127)** Then click the Import button and let's wait for this to complete.
>
> **[2:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=134)** Awesome. The import was successful.
>
> **[2:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=137)** So this is a simple [ASP.NET](https://ASP.NET) Core application that shows the assessment report of all students for a particular course.
>
> **[2:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=148)** We will build the CI/CD pipeline to deploy this application to stages, also known as environments, like the dev, test and production environment.
>
> **[2:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=159)** We'll be deploying these applications to Agile Web App Service.
>
> **[2:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/get-your-source-code-to-azure-repos?u=76281980&t=165)** You'll see how to use deployment slots to ensure that there is minimal downtime when we are deploying our source code or application to the production environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (1)
> **Env Vars:** url (3), asp (1), net (1)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1), git (1), cd (1)
> **Tools:** github (3)
> **URLs:** [azure.com](https://azure.com) (1), [asp.net](https://asp.net) (1)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), known as (1)

#### Configure a build pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=0)** - [Instructor] It's time for us to create the CI or build pipeline for our sample application.
>
> **[0:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=7)** Remember that we need to enable continuous integration on this pipeline so that anytime changes are committed to the branch, it'll trigger the pipeline to build and test our source code for the linked branch.
>
> **[0:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=21)** So let's start by navigating to pipelines on the left menu.
>
> **[0:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=27)** Click to open and then click on the create pipeline button.
>
> **[0:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=34)** You get a prompt asking where your code is.
>
> **[0:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=38)** If you would like to use the YAML syntax option to define your build pipeline, then you can select any of the options that have a YAML tag and represents the location of your source code.
>
> **[0:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=51)** You can check Azure DevOps documentation to learn more about the advantages of using YAML over classic data.
>
> **[0:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=58)** For this course, I'll be using the classic data option.
>
> **[1:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=63)** In the next page, you get a prong to select your repository so make sure that the selected repo represents the name of your application and also select your default branch for manual builds.
>
> **[1:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=79)** Let's click continue to proceed.
>
> **[1:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=82)** A template comes with predefined task.
>
> **[1:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=86)** All you have to do is provide custom inputs where necessary and run the pipeline.
>
> **[1:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=92)** You can also add custom scripts and tasks like bash commands, et cetera, or even start an empty job without using a template.
>
> **[1:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=102)** In that case, you need to define custom task in the empty job in order to build your pipeline.
>
> **[1:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=111)** A sample application is an [ASP.net](https://ASP.net) Coreweb application.
>
> **[1:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=116)** So let's search for [ASP.net](https://ASP.net) Coreor scroll down.
>
> **[2:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=121)** If you don't find this in your list, you can simply use the search field.
>
> **[2:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=127)** Click the [ASP.net](https://ASP.net) Core option and then click the apply button.
>
> **[2:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=133)** Now this is what our template contains, and at the top here, we have the name of this pipeline.
>
> **[2:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=140)** I'll leave this as this, but you can change the name if you want.
>
> **[2:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=145)** Then in the tax page we have something called the pipeline settings where you select the agent pull, the agent specification, and even set some parameters that can be used across multiple tasks in your pipeline.
>
> **[2:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=163)** So in the agent specification field, click the dropdown and I'll be using Ubuntu latest since my [ASP.net](https://ASP.net) Core application can run on both Windows and Linux OSs.
>
> **[2:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=178)** Click the get sources tab and here you can configure some settings for your pipeline like change the repository, change the default branch, and also configure other settings.
>
> **[3:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=193)** Would leave this without making any modifications.
>
> **[3:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=197)** If you click on the agent's job, you have other settings you can configure here.
>
> **[3:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=203)** For example, we have the agent pool and here you see it shows inherit from pipeline.
>
> **[3:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=209)** This is because in the pipeline configuration page, we've already selected the agent pool which is Azure pipelines.
>
> **[3:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=218)** There are other settings you can configure, but I'll be leaving this as it is now.
>
> **[3:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=224)** Now remember that a task is an abstracted package script and simply commands that run to build or test your code.
>
> **[3:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=233)** Here we have the rester task.
>
> **[3:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=237)** No need to modify the task accepting situations, for example, where you have a custom feed package you want to use to build your application.
>
> **[4:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=247)** In that case, you can come here to change the settings and configure appropriately.
>
> **[4:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=252)** There are other options like the control options where you can set a condition for this task to run, and we would explore that later on in this course.
>
> **[4:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=265)** The next task is the build task which will build a sample application and we won't be making any changes.
>
> **[4:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=273)** I want to point out here that we have the path to project already defined with this parameter.
>
> **[4:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=280)** Recall earlier in the pipeline settings that there are some parameters already defined here that will be used across multiple task.
>
> **[4:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=291)** So if you check this task, the build task, you would notice that you cannot edit this field except you decide to unlink it.
>
> **[5:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=303)** I do not have any task scripts defined in my sample application, so I can either disable this task or remove it completely.
>
> **[5:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=313)** To do that, just right click on the task and then select the remove selected task option.
>
> **[5:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=320)** The .net Core published task publishes my web project to an output which is defined as the build that artifact staging directory.
>
> **[5:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=330)** This directory is then published as an artifact that can be used in my release pipeline to deploy this application to any target.
>
> **[5:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=342)** Back in the published task, you see some variables for example, build configuration.
>
> **[5:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=349)** This appears in the build task as well where we have the arguments configurations set as build configuration.
>
> **[5:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=357)** To ensure consistency in your pipeline for repeated values, it's best to use variables.
>
> **[6:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=364)** So to do that, you can go to the variables tab and you see a variable named build configuration with the value set as release.
>
> **[6:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=375)** This is not a secret, so it's not locked and you can also check this box so that anytime you need to manually trigger the pipeline, you can change the value for the build configuration from release to any value of your choice.
>
> **[6:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=392)** If you had defined a variable group as I explained in an earlier video, then you can go to variable groups and link such variable groups here.
>
> **[6:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=402)** For example, your Azure Key vault, and once this is linked, you can consume the values in Azure Key Vault inside your pipeline.
>
> **[6:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=414)** In the triggers tab, we want a pipeline to automatically run when changes are committed to the repository's main branch.
>
> **[7:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=423)** So let's click on the enable continuous integration checkbox and make sure that the selected branch is the main branch.
>
> **[7:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=433)** If you want to specify more branches and specific directories in your code to monitor for changes, then you can click the add button here to add additional branches or click the part filter add button to specify a particular path to monitor.
>
> **[7:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=455)** You can also schedule the build time for your pipeline by clicking this add button.
>
> **[7:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=462)** Select a specific day you would like a pipeline to build specific time, and also check this box so that the pipeline will only be triggered if any changes committed to the branch.
>
> **[7:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=476)** You can as well specify additional branches in your branch filter section, but I won't be using this in this course, so I'll delete this..
>
> **[8:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=485)** In the options tab, you can set build number format, click the little information icon beside the build number format and click more information to learn more about this.
>
> **[8:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=500)** There are other settings here that are quite self-explanatory and you can enable them for your project if you'd like.
>
> **[8:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=509)** Now, in the history page, it shows records of changes that has been made to this pipeline.
>
> **[8:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=516)** This is quite useful for audit purposes, but we don't have anything here listed because this is a new pipeline and hasn't been saved yet.
>
> **[8:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=525)** So if I click on the save and queue button and then select the save option and click the save button, then now there is a record in the history page.
>
> **[8:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=539)** Let's queue a build pipeline to compile the project.
>
> **[9:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=543)** So on the far right, click the queue button, and here in the run pipeline pane, you can select the agent pool because this is manually triggered, you can also change the agent specification and the branch.
>
> **[9:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=559)** And if you'd like to change your build configuration variable for example, you can click this, click the build configuration, and then change the value here.
>
> **[9:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=570)** I won't be doing this, so I'll just go back and then click on run to trigger this pipeline.
>
> **[9:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=580)** This is the summary tab that shows the pipeline was manually triggered at the top left here.
>
> **[9:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=587)** It shows you the ripple name, the branch name, and the commit number.
>
> **[9:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=593)** To view the logs of this currently running pipeline, you can click the agent job and here you can see all the tasks we defined in the pipeline, like the rest task, the build published and publish artifact task.
>
> **[10:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=609)** You can always view each of these to check for errors and we can see that the build succeeded with zero warnings and zero errors.
>
> **[10:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=618)** If we check the published artifact task, we can see that the file was uploaded, and yeah, you'd see here on line 17 that the file upload was successful.
>
> **[10:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=630)** So to view the artifact that has been created for this pipeline, you can click the agent job at the top and then click the one artifacts link.
>
> **[10:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=642)** Let's expand the drop directory and here we can see a zip file for a source code.
>
> **[10:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=650)** Pretty straightforward, right?
>
> **[10:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-build-pipeline?u=76281980&t=652)** Now assuming in a team setting where several developers are working on different parts of the project, all they need to do is commit the access code to the feature branch and create a pool request to the main branch, then the pipeline will automatically run and create an artifact like this for this project and this artifact is then used in the release pipeline to deploy to any target environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this, (3), case, (2), this. (2), continue (1)
> **UI Navigation:** click on (6), select the (4), scroll down (1), dropdown (1), go to (1)
> **Env Vars:** asp (4), yaml (3)
> **Exercise Files:** source code (3), template (3), zip file (1)
> **Definitions:** is an  (2), is a  (2), defined as (1)
> **Analogies:** for example (5)
> **Prerequisites:** configure (5)
> **URLs:** [asp.net](https://asp.net) (4)

#### Integrate SonarCloud with the build pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=0)** - [Instructor] Our project pipeline run was successful but something is missing.
>
> **[0:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=6)** It's usually important to scan your code early in your development process so that you catch bugs early before it gets to production.
>
> **[0:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=15)** With Sonar Cloud, we will see how to enable continuous code scanning and check the results to make sure we have a clean code of our sample application.
>
> **[0:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=28)** Sonar Cloud is a cloud service tool used to continuously scan source codes to detect bugs, vulnerabilities, and code smells across project branches and pull requests.
>
> **[0:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=42)** You can check out the documentation on the website to learn more about Sonar Cloud.
>
> **[0:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=48)** Before we can set up Sonar Cloud in Azure Pipelines, we need to create a profile on [sonarcloud.io](https://sonarcloud.io).
>
> **[0:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=56)** You can sign up using your Azure DevOps account, GitHub, Bitbucket, or GitLab.
>
> **[1:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=64)** I already have an account linked to my Azure DevOps profile so I won't be creating one now but it's pretty straightforward to create a profile if you follow the prompts.
>
> **[1:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=76)** Now on the Sonar Cloud page, I'll click the login button, and then select Azure DevOps.
>
> **[1:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=87)** Once I'm signed in, I'll click on the plus icon at the top right corner and select analyze new project.
>
> **[1:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=96)** If you have an error showing the Azure DevOps access token is not valid, go to the account settings and then click on your organization.
>
> **[1:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=109)** Select the administration tab and then select organization settings.
>
> **[1:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=116)** Let's scroll down to where we have personal access token.
>
> **[2:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=120)** And you see here that the token is not valid so we need to create a personal access token in Azure DevOps and provide the token in this field.
>
> **[2:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=131)** To do that, head over to your Azure DevOps page and then at the top right, click on the user settings and click personal access tokens.
>
> **[2:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=148)** Let's create a new token by clicking the new token button and then provide a name, say Sonar Cloud.
>
> **[2:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=157)** To permit Sonar Cloud, we need to grant the read and write permissions.
>
> **[2:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=161)** So under code, click the read and write permission and then click the create button.
>
> **[2:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=170)** Let's copy the token that has been created and head back to our Sonar Cloud page.
>
> **[2:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=179)** Then in the token field, let's paste the token.
>
> **[3:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=184)** Click the update button, and once you see a green tick, that means Sonar Cloud is now connected to our Azure DevOps organization.
>
> **[3:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=194)** Now let's create a project on Sonar Cloud.
>
> **[3:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=197)** At the top right corner, click the plus icon and then select analyze new project.
>
> **[3:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=204)** Now we can see a list of repositories.
>
> **[3:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=207)** Let's select the student app.
>
> **[3:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=210)** Recall that we created the student app as a public project.
>
> **[3:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=215)** That's why I can select it here.
>
> **[3:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=218)** The rest of the projects are locked because they are not public projects.
>
> **[3:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=223)** So click the setup button at the right to configure the Sonar Cloud settings.
>
> **[3:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=230)** Since we are designing the analysis for our Azure pipelines, let's click with Azure DevOps pipelines.
>
> **[3:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=238)** There're a couple of steps we need to take.
>
> **[3:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=239)** First, we need to install the Sonar Cloud extension in our Azure DevOps organization.
>
> **[4:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=245)** To do that, click the Sonar Cloud extension link.
>
> **[4:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=251)** And it will take you to Visual Studio Marketplace.
>
> **[4:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=254)** So click the get it free button and it will ask you to select your Azure DevOps organization.
>
> **[4:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=262)** Make sure the right organization is selected, then click the install button.
>
> **[4:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=269)** Once that is completed, head back to the Sonar Cloud page and let's go to the next step which is to add a new Sonar Cloud service endpoint.
>
> **[4:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=279)** To do this, let's copy the token here, and we will go to project settings and select service connections in Azure DevOps page.
>
> **[4:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=289)** So I'll close this and head back to the Azure DevOps home page.
>
> **[4:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=296)** Then open my student app project, and at the left corner, I'll click project settings.
>
> **[5:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=306)** Under pipelines, select service connections and click create service connection button.
>
> **[5:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=313)** Let's look for a service connection type of Sonar Cloud.
>
> **[5:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=319)** So I'll select Sonar Cloud and then click next.
>
> **[5:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=323)** In the next page, I'll paste the token I copied from the Sonar Cloud page and then click the verify button.
>
> **[5:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=332)** Verification succeeded.
>
> **[5:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=334)** So I can provide a service connection name.
>
> **[5:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=337)** I'll call this Sonar Cloud-Student App SVC.
>
> **[5:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=345)** You can provide a description.
>
> **[5:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=347)** I'll leave that blank and then click verify and save.
>
> **[5:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=352)** Now that is completed, let's head back to our Sonar Cloud page.
>
> **[5:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=357)** And the next step, you have to choose the option that best describes your build.
>
> **[6:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=364)** We are designing this analysis for a .Net Core application, so we'll select .Net.
>
> **[6:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=373)** You scroll down, and the next step, we have to set the fetch div value to zero.
>
> **[6:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=382)** If you defined your pipeline using the YAML syntax, you can go ahead and copy this to your file but I'll show you how to do this with the classic data model.
>
> **[6:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=393)** So back in my Azure DevOps page, I'll click on my pipelines page, and then for the pipeline, click on the ellipsis and select a date.
>
> **[6:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=407)** Once the pipeline is open, let's click on get sources and then scroll down in the settings page and uncheck shallow fetch.
>
> **[6:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=419)** This will allow the Sonar Cloud to analyze your project without any error.
>
> **[7:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=427)** So let's head back to our Sonar Cloud page.
>
> **[7:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=432)** And the next step involves adding a couple of tasks in our pipeline.
>
> **[7:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=437)** So to do that, I'll quickly copy the project key field.
>
> **[7:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=442)** Note the Sonar Cloud organization and the project name field.
>
> **[7:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=449)** Back in Azure DevOps, we need to add a task to prepare analysis configuration, run code analysis, and then publish quality gate results.
>
> **[7:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=460)** You can see for prepare analysis configuration, this task must run before your build step while the run code analysis must run after your build step.
>
> **[7:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=471)** So let's head back to our Azure DevOps page and then beside the agent job, click the plus sign and search for Sonar.
>
> **[8:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=482)** Let's add these three tasks.
>
> **[8:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=485)** Click the add button beside them.
>
> **[8:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=489)** And the first one being prepare analysis on Sonar Cloud would run before the build step.
>
> **[8:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=495)** So drag and drop before the build step.
>
> **[8:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=499)** And here, let's select the service endpoint which is a service connection we created earlier, the organization name and ensure that integrate with MS Build is selected.
>
> **[8:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=514)** In the project key field, let's paste the value we copied earlier and then in the project name field, let's type student app.
>
> **[8:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=525)** There's nothing else to set up here.
>
> **[8:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=529)** Now for the run code analysis, let's drag this just after the build task and there is nothing to configure here.
>
> **[9:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=540)** For the publish quality gate results, let's drag and drop after the code analysis.
>
> **[9:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=547)** This task is only necessary for the pull request function which will publish the quality gate results in our pipeline.
>
> **[9:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=556)** And that's all to do.
>
> **[9:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=558)** So every time the build pipeline is triggered, the source code will be scanned for vulnerabilities based on the task we've defined here.
>
> **[9:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=566)** Let's save and queue these changes and see if it runs successfully.
>
> **[9:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=571)** So at the top, click the save and queue button.
>
> **[9:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=575)** Click the save and queue button again.
>
> **[9:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=577)** We don't need to make any change here.
>
> **[9:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=579)** Then click the save and run button.
>
> **[9:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=583)** You can click the agent job to view the logs.
>
> **[9:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=589)** And now we can see the rest of tasks, the Sonar Cloud tasks we've added, like prepare analysis, run code analysis and publish the quality gate results.
>
> **[10:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=605)** The pipeline run was successful including the Sonar Cloud task.
>
> **[10:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=610)** So if you click the run code analysis, you can scroll to the end to see if the analysis was successful and you should find here on line 298, analysis successful.
>
> **[10:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=623)** And it says you can find the results at a particular URL.
>
> **[10:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=629)** So you can click this URL to go to Sonar Cloud, and here, you would see the results of the analysis.
>
> **[10:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=639)** On the Sonar Cloud page, click the main branch and you'll see that the quality gate was not computed.
>
> **[10:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=647)** Well, we have one bug here, two code smells, zero security hotspots and vulnerabilities, and 0% of coverage and duplications.
>
> **[11:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=660)** So with this result, we can ensure that quality code is only merged to our main branch and pushed to production environment.
>
> **[11:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=670)** Before we finish here, we need to define a base code that modified code changes will be scanned against to get a quality gate.
>
> **[11:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=679)** This is necessary for every new project.
>
> **[11:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=682)** You can see how this shows not computed for quality gate.
>
> **[11:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=686)** So to fix this, let's click the set new code definition and select the previous version.
>
> **[11:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=694)** This would mean that all code that has changed since the previous version bump is considered a new code and will be scanned against the old one.
>
> **[11:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=703)** So select this and it's automatically saved.
>
> **[11:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=708)** So this is how to integrate Sonar Cloud with your build pipelines to continuously scan new versions of your code for vulnerabilities and bugs.
>
> **[11:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=719)** If I head back to the overview page, and scroll down to select the main branch, then open this bug by clicking its value, you can see here a bug is displayed which says you should add a description to this table in views home index.CS HTML file.
>
> **[12:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=744)** To view this bug, you can click it to open.
>
> **[12:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=747)** It shows you where the issue is.
>
> **[12:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=749)** So if you scroll up, you see on line 14 that there is a table without a description.
>
> **[12:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=756)** You can click on why is this an issue to read the reviews and understand a non-compliant code as well as what a compliant code would look like.
>
> **[12:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=768)** You can adopt the suggestions in your code and then recommit the code to your repo.
>
> **[12:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=776)** Cool, right?
>
> **[12:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=777)** This way, you are sure to push a more secure and bug free code to production systems.
>
> **[13:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=784)** You can try to clone your code locally from Azure repos and fix the bug.
>
> **[13:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/integrate-sonarcloud-with-the-build-pipeline?u=76281980&t=790)** Then commit and check the results of your new scan to see if there are any changes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (22), public (2), this, (2), function (1)
> **UI Navigation:** click on (7), select the (5), go to (4), scroll down (4), drag and drop (2)
> **Prerequisites:** set up (2), configure (2), install (2), setup (1)
> **CLI Commands:** make (3), find (2)
> **Env Vars:** url (2), svc (1), yaml (1), html (1)
> **Tools:** github (1), bitbucket (1), gitlab (1), visual studio (1)
> **Definitions:** is a  (3)
> **URLs:** [sonarcloud.io](https://sonarcloud.io) (1)

#### Protect your important branches
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=0)** - [Instructor] We have our source code in the repo, defined the build pipeline and integrated SonarCloud to scan our code for vulnerabilities, but we need to prevent buggy code from being committed to our main branch, which is the most critical branch of our application.
>
> **[0:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=18)** How do we set this up so we can ensure that only high-quality code is pushed to the main branch?
>
> **[0:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=25)** Got any ideas?
>
> **[0:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=27)** Please share in the comments section of this course.
>
> **[0:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=32)** Azure DevOps has branch policies where you can define certain configurations to protect important branches.
>
> **[0:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=40)** Once this is set up, assuming we protect our main branch in this DevOps project, then direct commits or pushes to the main branch will fail.
>
> **[0:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=52)** The only way to update the protected branch would be via a pull request.
>
> **[0:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=58)** You can specify that approvers or code reviewers review code changes, and a build must be successful even with a pass for vulnerability scan before changes can be merged with the main branch.
>
> **[1:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=75)** Let's quickly set that up.
>
> **[1:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=78)** At the left menu of your Azure DevOps under Repos, click on Branches.
>
> **[1:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=90)** To the right of the main branch, you see on ellipsis.
>
> **[1:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=94)** Click on it and select branch policies.
>
> **[1:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=100)** The first thing we need to do is to require a minimum number of reviewers so you can toggle the button and then let's select one since this is a project with just one user.
>
> **[1:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=113)** You can also check the allow requesters to approve their own changes so we don't get stuck in the project.
>
> **[2:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=120)** There are other settings you can configure, like check for linked work items, assuming you work in an agile team.
>
> **[2:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=127)** You can also check for comment resolution and limit merge types.
>
> **[2:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=132)** Let's activate this and then uncheck every other option, except the basic merge.
>
> **[2:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=142)** This means that the history in topic branches will be preserved as we merge with the main branch.
>
> **[2:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=149)** I want changes that should be merged with my main branch to be validated first.
>
> **[2:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=155)** I want it checked for bugs or vulnerabilities, and if there are errors, the merge should fail.
>
> **[2:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=162)** You can configure that in the build validation policy.
>
> **[2:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=167)** To do that, click the plus sign, and then you have to select the build pipeline, so it's important that your pipeline has run at least once before you set this build policy.
>
> **[3:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=180)** You can also select a path filter if you'd like but I want this to monitor the whole branch.
>
> **[3:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=186)** The trigger option is set to automatic, which means whenever the search branch is updated, this build policy will be triggered as part of the pipeline run.
>
> **[3:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=197)** For the policy requirement, you can select required, which means the build must succeed in order to complete the pull request, or optional, which means a build failure will not block the completion of a pull request.
>
> **[3:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=212)** In that case, you'll be merging codes with bugs to the main branch.
>
> **[3:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=219)** For the build expiration, I'll select immediately when the main branch is updated so it deletes the build run.
>
> **[3:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=227)** Let's type a display name for this policy.
>
> **[3:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=230)** I'll call it the student app PR build policy and then click the save button.
>
> **[4:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=241)** That's the basic configuration needed to protect an important branch.
>
> **[4:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=245)** Remember, we are defining the settings on the main branch and if you'd like to have certain reviewers review code, you can configure that here in the automatically included reviewers.
>
> **[4:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=260)** This means that for every pull request that is created, these reviewers will be automatically added as part of the approvers.
>
> **[4:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=270)** So to do that, you can click the plus sign, search for a reviewer and then you can make this optional or required.
>
> **[4:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=281)** And also check the allow requesters to approve their own changes option.
>
> **[4:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=287)** If you're working with two or more people in a team setting, then you may not need to check this option.
>
> **[4:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=294)** So let's click the Save button, and that's it for branch policies.
>
> **[4:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=299)** A couple of other settings are required after defining the branch policies.
>
> **[5:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=304)** Let's enable branch filters to monitor for feature branches and then we will add the condition in our publish artifact task to only publish an artifact when the branch trigger matches the condition.
>
> **[5:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=318)** That is when the main branch is running.
>
> **[5:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=321)** To do that, let's navigate to open the Pipelines page, click on the ellipsis for this pipeline, and select a date.
>
> **[5:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=334)** Let's open the triggers tab at the top and on the branch filters, click the add button and then select the main dropdown.
>
> **[5:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=347)** Then in filter my branches, let's type features/*.
>
> **[5:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=355)** Then press enter.
>
> **[5:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=357)** You can save this by clicking the save and queue button.
>
> **[6:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=361)** Then click save so we don't lose our configuration.
>
> **[6:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=365)** Next, we need to specify a condition for the published artifact task so that the project is only published for the main branch and not the feature branches.
>
> **[6:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=375)** This allows us to use the same pipeline definition with several branches and skip certain tasks if the conditions are false.
>
> **[6:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=384)** So to do this, let's navigate to the task page.
>
> **[6:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=389)** Select the publish artifact task and then expand the control options.
>
> **[6:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=395)** Under run this task, let's click the dropdown and select custom conditions.
>
> **[6:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=403)** In there, let's type this condition and succeeded equal variables.
>
> **[6:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=410)** Build the sus branch, reps/add/main.
>
> **[6:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=416)** This task will check the system variables of a build pipeline agent, and if they build the source branch is main, then it's a match and that published task will run.
>
> **[7:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=427)** Otherwise, it's escaped.
>
> **[7:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=431)** You can save this by clicking the save and queue button at the top.
>
> **[7:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=435)** Click the save button and click the save button again.
>
> **[7:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=440)** With this setup, we cannot push changes directly to the main brunch except through a pull request and the merge requires code review from at least one person, as well as a successful build pipeline run.
>
> **[7:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=456)** As a developer, you can create a feature branch for new features you're developing and push to the repo in Azure DevOps.
>
> **[7:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=465)** Each push will cause this pipeline to run so that we can catch errors early in the process.
>
> **[7:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=472)** I've seen situations where a developer would spend weeks developing locally and only adopt remote repo weeks down the line.
>
> **[8:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=482)** This usually leads to issues and spending time resolving build pipeline errors.
>
> **[8:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=487)** For example, a developer might have been using an older or deprecated version of a package or some vulnerabilities exist in the code and now we can't push to any environment until those issues are resolved.
>
> **[8:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/protect-your-important-branches?u=76281980&t=503)** So it's best to adopt continuous integration early in your software development so you can catch and resolve issues early and always have a quality source code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), protected (1), pass (1), require (1), case, (1)
> **UI Navigation:** click on (3), select the (3), navigate to (2), open the (2), dropdown (2)
> **Prerequisites:** configure (3), set up (1), setup (1)
> **Definitions:** means that (2), is a  (1)
> **Exercise Files:** source code (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Best Practices:** it's best to (1)

#### Create a task group for build pipelines
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=0)** - [Instructor] Let's imagine this scenario.
>
> **[0:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=3)** You are in charge of designing CICD pipelines for your development teams and there is a standard framework, for example, the net call for the backend, and Next.js for the front end.
>
> **[0:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=16)** If it's quite a busy team, you will likely be defining pipelines a lot of times.
>
> **[0:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=22)** Now, how can you reduce the time spent to design a pipeline?
>
> **[0:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=29)** By using a task group.
>
> **[0:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=32)** A task group is a feature that allows you to have a template of task that can be used in several similar pipelines.
>
> **[0:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=41)** Just as you add the task to your pipeline, you can add the task group template and redefine some parameters as variables so that you provide that for each application pipeline you design.
>
> **[0:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=54)** Also, with a task group, you can modify a task and that will affect every pipeline using the task group.
>
> **[1:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=63)** This saves you time for other important work, assuming you need to just make a quick change on the main task group.
>
> **[1:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=71)** Let's create a task group for this build pipeline.
>
> **[1:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=75)** First of all, we need to unlink every shared parameter in our pipeline.
>
> **[1:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=81)** If that is not the case and we try to create a task group, an arrow is displayed unlink parameters.
>
> **[1:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=89)** Let me show you that.
>
> **[1:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=90)** So for example, if I select all this task by pressing down the control button and then click each of the task, then right click and select create a task group, I have an error, one or most selected task app settings linked to the pipeline parameters.
>
> **[1:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=110)** So let's click, okay.
>
> **[1:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=111)** So I then select everything, and remember, in the build task, we have a path to project parameter linked to the pipeline settings.
>
> **[2:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=122)** Same thing in the restore task where we have the CS proj linked to the pipeline settings.
>
> **[2:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=129)** So to do this, I'll go to the pipeline page and then click on link all, then confirm to link the parameters.
>
> **[2:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=139)** Let's check each task to know where we will define a variable.
>
> **[2:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=144)** In the restore task, there is nothing really to define here.
>
> **[2:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=151)** In the so cloud analysis task, let's create a variable for some fields.
>
> **[2:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=158)** Not the value of the SonarCloud service endpoint, this might change for different projects or pipelines that will need to reference this parameter.
>
> **[2:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=170)** So for this, I'll replace the value with dollar bracket SonarCloud endpoint.
>
> **[3:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=183)** And then for the organization, I'll type dollar bracket SonarCloud bug.
>
> **[3:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=194)** Let's copy the project key, and then I'll replace the value with dollar brackets sonar cloud project key.
>
> **[3:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=208)** And then for the project's name, which would always change for each pipeline, I'll replace the evaluate dollar bracket SonarCloud project name.
>
> **[3:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=227)** There is nothing to define in the other sections of this task, but you can just confirm that.
>
> **[3:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=236)** If you check the build task as well, there is nothing to configure here.
>
> **[4:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=243)** For the wrong code analysis, there's nothing to configure, the same applies to quality gate results.
>
> **[4:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=250)** Publish code, publish the artifacts.
>
> **[4:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=254)** So that's it.
>
> **[4:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=256)** Now that this is completed, let's press the control key again and select all the task.
>
> **[4:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=264)** Then right click and select create task group.
>
> **[4:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=268)** Let's provide a name for this task group.
>
> **[4:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=271)** I'll call it net core build task and a description, tasker for building [ASP.net](https://ASP.net) Core applications.
>
> **[4:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=289)** The category will be build.
>
> **[4:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=292)** And now in the parameters section, you can see we have default value for build configuration.
>
> **[5:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=300)** This can always be changed when you're defining a new pipeline.
>
> **[5:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=305)** So we won't be selecting default values for SonarCloud endpoint, the organization project key and project name, so that you can always provide these values when you reference this task group in a new pipeline.
>
> **[5:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=320)** So let's click the create button to create the task group.
>
> **[5:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=325)** And now the task group is automatically applied to our pipeline with some variables with empty values.
>
> **[5:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=333)** So to the right you can see we need to select a SonarCloud endpoint.
>
> **[5:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=338)** So click the dropdown and select the service connection we created earlier.
>
> **[5:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=343)** For the organization, click the dropdown.
>
> **[5:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=346)** We don't find one, so you can just type your SonarCloud organization name.
>
> **[5:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=353)** The SonarCloud project key I copied earlier, I'll just paste that here, and the project name is student app.
>
> **[6:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=362)** And that's all that needs to be done.
>
> **[6:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=365)** Now let's save and cue this to be sure that it runs successfully.
>
> **[6:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=371)** So I click the save and cue button, save and run, and then open the agent job to view the logs.
>
> **[6:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=383)** We now have a center cloud analysis running.
>
> **[6:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=388)** You can click this to be sure it's run successfully.
>
> **[6:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=393)** And there were no errors in the log which means our task group is working.
>
> **[6:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=402)** We see everything is completed and an artifact is created.
>
> **[6:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=406)** So the task group works as expected.
>
> **[6:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=410)** So if you have a new repository with totally different source code but the .net core application and you have to create a pipeline, all you have to do is navigate to pipelines, click on the new pipeline button, select the use classic data option and make sure you select the right repository and the branch for your manual build, then click continue.
>
> **[7:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=443)** Then here, instead of selecting a template, you start with an empty job, and once this page opens, you click on the plus sign beside agent job and search for your task template.
>
> **[7:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=459)** Next call, build task.
>
> **[7:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=463)** So you select the task and then add it.
>
> **[7:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=466)** And now you can define the parameters for your new pipeline like the service endpoint, the SonarCloud organization, the new project key, as well as the project name.
>
> **[7:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=479)** And that's it.
>
> **[8:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=480)** You've saved a lot of time defining multiple pipelines by just providing these four parameters.
>
> **[8:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=487)** To manage your task group, you can navigate to pipelines menu and then select task groups.
>
> **[8:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=496)** I won't save any change to that.
>
> **[8:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=499)** And here you can see your task group.
>
> **[8:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=501)** If you click to open, you can modify the task in this task group and save it by clicking the save button.
>
> **[8:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=510)** You can also save the task group as a draft, test it first with a sample application and then publish it.
>
> **[8:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=518)** In that way, you would have different versions for your task group which allows for backward compatibility, meaning new applications would use the new version of your task group while existing applications or pipelines will continue to run with the old version.
>
> **[8:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=537)** You can click on the history tab to review changes that has been made to the task group.
>
> **[9:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=543)** And you can also click on the reference tab to view the list of pipelines that are using this task group.
>
> **[9:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=552)** To a export task group, you can click the export button and export this task group to another project.
>
> **[9:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=560)** And then you can also set security permissions by clicking the ellipsis, select security, and grant permissions to individual users or groups.
>
> **[9:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=573)** I enjoy using task groups especially as a help to design pipelines for microservices.
>
> **[9:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-a-task-group-for-build-pipelines?u=76281980&t=580)** So consider using task groups when building your next set of pipelines for your development team.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this, (2), continue (2)
> **UI Navigation:** click on (5), select the (4), dropdown (2), navigate to (2), go to (1)
> **Exercise Files:** template (4), source code (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (2), imagine (1)
> **Env Vars:** cicd (1), asp (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (2)

#### Simulate CI trigger and branching policies
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=0)** - [Instructor] We now have a working build pipeline, defined by using a task group: enabled continuous integration on the main and feature branches, and also enabled branching policies to require a pull request with a successful PR build before pulling changes into the main branch.
>
> **[0:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=21)** Now, let's simulate a typical situation where a developer needs to modify code in a feature branch and merge with the main branch.
>
> **[0:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=31)** Remember, earlier in the scan result of SonarCloud, we have a bug with a suggested solution to add a description to the table.
>
> **[0:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=40)** Let's try to fix that locally in Visual Studio Code, and then push to the remote repo. to see what happens when a developer push changes.
>
> **[0:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=50)** In your student app project, navigate to repos. on the left menu, and then click on the clone button at the right side of the page.
>
> **[1:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=61)** Let's copy this URL.
>
> **[1:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=64)** Open a terminal in your system.
>
> **[1:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=68)** I have my batch terminal opened already, so I'll navigate to the downloads folder, and here I'll type git clone, and then paste the URL I copied.
>
> **[1:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=83)** So right click, and paste, then enter.
>
> **[1:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=90)** When the clone process is completed, let's navigate to the project folder.
>
> **[1:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=98)** So, CD student app, and then here I'll run code dot to open my code in Visual Studio Code.
>
> **[1:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=107)** If you don't have Visual Studio Code, you can easily download one via a Google search, and install it in your PC.
>
> **[1:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=116)** Let's wait for the VS Code to load the source code.
>
> **[2:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=124)** Then on the lower left corner of the VS Code, you shall see main, which represents the main branch.
>
> **[2:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=132)** So, let's create a feature branch to simulate a change to some part of our source code since we cannot directly push to the main branch.
>
> **[2:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=141)** So, click the main, and then select create a new branch.
>
> **[2:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=147)** Let's name this branch features, slash index, then enter.
>
> **[2:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=158)** It could be any name, but I decided to use index.
>
> **[2:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=161)** Recall earlier that we define a branch filter for features slash asterisk branches.
>
> **[2:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=169)** So, if you check again, we have features slash index branch created.
>
> **[2:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=175)** Expand demand source code directory, let's open views, expand home, and then select index dot CSHTML.
>
> **[3:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=187)** Let's add that to our SonarCloud page to review the suggestions for fixing the bug.
>
> **[3:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=194)** So in my SonarCloud page, if you click on the overview page, scroll down, and click the main branch.
>
> **[3:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=206)** Let's click overall code, and then select the bug by clicking the value, open the suggestion, and you see the issue is on line 14.
>
> **[3:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=223)** It's asking us to add a description to this table.
>
> **[3:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=226)** Now let's check why this is an issue and the suggestion is, the simplest way to do it, is to add a caption element inside the table.
>
> **[3:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=239)** So, let's add that to Visual Studio Code.
>
> **[4:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=243)** And then after the table at line 14, create a new line, and let's create a caption.
>
> **[4:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=251)** And we'll caption these assessments reports for CIS student, 2023.
>
> **[4:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=261)** Let's save the change.
>
> **[4:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=263)** And now it's time to push it back to our remote repo. in Azure DevOps.
>
> **[4:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=269)** So, let's open a terminal in VS Code at the top bar you would see the terminal menu, click and then select new terminal.
>
> **[4:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=278)** In here, let's type git, add dot, to stage the changes we've made, and type git comment, dash M, which, fixed index CSHTML bug, and then press enter.
>
> **[5:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=306)** And finally, to push, let's type git, push, dash, dash, set, dash, upstream, origin feature slash index, then enter.
>
> **[5:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=326)** This will push the change to the remote repo. now.
>
> **[5:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=330)** Awesome, once that is completed, let's head over to Azure DevOps page.
>
> **[5:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=337)** Close this pane, and let's refresh the page.
>
> **[5:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=343)** Once the page is refreshed, you should see a notification like this to create a pull request.
>
> **[5:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=351)** If you don't see that under the repos. menu at the left, you can click on pull request, and then you should see this, or you can create a new pull request.
>
> **[6:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=365)** I'll simply click the create a pull request button, and here you can see the title of the pull request, which was the comments we created in the terminal.
>
> **[6:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=377)** You can click the files tab to see the change that was made, and it's highlighted green, which shows assessment report for CIS student, 2023.
>
> **[6:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=390)** You can also view the comments tab to see the number of comments for this pull request.
>
> **[6:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=396)** Back in our overview page, notice at the top here we are creating a pull request from the feature slash index branch into the main branch.
>
> **[6:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=407)** Now, let's scroll down and we can click the create button.
>
> **[6:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=413)** Remember the build policy we defined earlier, it's part of the pull request checks.
>
> **[7:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=420)** So, first, the pipeline will run to check that there are no bugs in this code before it allows this pull request to be completed.
>
> **[7:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=431)** So, you can click the view two checks, and you'd see here, we have required the students have viewed policy, which would cause the pipeline to run fast on this feature branch.
>
> **[7:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=444)** Make sure that it runs successfully, there are no bugs, and once it's successful, then we can approve the pull request and complete it.
>
> **[7:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=456)** Click the PR build policy to view the logs, click on the agent job.
>
> **[7:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=465)** And you would notice here, that the published artifacts will be skipped because this pipeline is running for the feature branch.
>
> **[7:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=477)** Awesome, the pipeline runs successfully, and there was no artifact created because this pipeline is running for a feature branch and does not match the main branch condition we set earlier.
>
> **[8:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=491)** So, let's go back to our pull request.
>
> **[8:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=496)** I'll just navigate to repos. and select pull request, then open the PR, and you'd see that the build policy was successful.
>
> **[8:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=508)** So, the second requirement is that a user must approve a pull request.
>
> **[8:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=516)** To do that, I'll just click approve at the top here, and that's it.
>
> **[8:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=523)** To complete this pull request so that the changes made in the features slash index branch will be reflected in the main branch, let's click the complete button at the top, and here we have the merge type: merge, no fast forward.
>
> **[9:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=540)** The rest are disabled by policy we defined earlier, and then we can safely delete the feature slash index branch after merging.
>
> **[9:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=551)** So, let's click on complete merge, and now the pull request is completed.
>
> **[9:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/simulate-ci-trigger-and-branching-policies?u=76281980&t=559)** So, this is how Azure Pipelines helps with continuous integration and scanning of your source code to catch bugs early in the development process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (23), require (1), finally, (1), this, (1), type: (1)
> **UI Navigation:** click on (5), navigate to (4), scroll down (2), open the (2), select the (1)
> **Tools:** terminal (6), visual studio (4), vs code (3)
> **CLI Commands:** git (4), cd (1), make (1)
> **Env Vars:** url (2), cshtml (2), cis (2)
> **Exercise Files:** source code (4)
> **Cross-References:** earlier in (1), go back to (1)
> **Definitions:** is an  (1)


### 3. Designing a Release Pipeline

#### An overview of a release pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=0)** - [Instructor] A release pipeline enables teams to more easily deploy build artifacts to any target environment, whether in the cloud or on-premises.
>
> **[0:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=11)** You can define an environment in each stage of a release pipeline to deploy updated versions of your software application.
>
> **[0:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=20)** This reduces time to deliver new versions to your users, improves productivity of your team, and enable consistency with the use of a deployment workflow.
>
> **[0:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=31)** For a release pipeline to work, you must have added a published artifact task in your build pipeline and run your build pipeline at least once.
>
> **[0:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=42)** When a new artifact is published, depending on the release pipeline continuous deployment setting, the release pipeline is immediately triggered and all the task or workflow defined in each stage is executed one after the other.
>
> **[1:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=60)** To create a release pipeline, you go to pipelines and select releases, then click the new pipeline button.
>
> **[1:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=70)** You would need to select a template or start with an empty job or simply select App Service template.
>
> **[1:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=79)** A stage is just like an environment.
>
> **[1:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=83)** You can have multiple stages in your release pipeline.
>
> **[1:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=86)** For example, one stage for development environment, another for testing or QA, and one for production.
>
> **[1:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=95)** Each stage comes with pre-deployment configurations, as well as post-deployment configurations.
>
> **[1:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=104)** Before you define your stages, you have to select a build artifact.
>
> **[1:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=110)** To do that, you click add an artifact button and then select the build pipeline source.
>
> **[1:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=118)** You can also choose to deploy latest versions of your application or specific versions.
>
> **[2:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=125)** Then click the add button.
>
> **[2:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=128)** After selecting an artifact, you can then set up continuous deployment trigger, which means that when a new artifact is published by the build pipeline, the release pipeline will be triggered immediately.
>
> **[2:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=144)** After selecting an artifact, certain conditions can be defined for each of your stages.
>
> **[2:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=150)** For example, for the dev stage, you can set pre-deployment configurations to check for a particular artifact by branch.
>
> **[2:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=160)** You can select the branch name and this would only deploy to this stage if the build artifact was triggered by changes in this main branch.
>
> **[2:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=173)** You can also set up pre-deployment approvals whereby certain groups of persons or users must approve a deployment to a particular stage.
>
> **[3:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=185)** And then you can also define Git to evaluate before deployment and invoke a REST API to your monitoring tool or query work items or check on our cloud quality Git result to make sure there are no bugs before deploying to a particular stage.
>
> **[3:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=205)** There is also the post-deployment approval setting, which might be useful in certain scenarios, for example, after the conclusion of a user acceptance test.
>
> **[3:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=216)** The QA lead can approve to indicate that the UAT was successful and it's safe to deploy the same artifact to open environment.
>
> **[3:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=227)** To set up the workflow for each stage, you can click the one job, one task link and here you can configure your stage, for example, select the Azure subscription for this web app and then select the application type, the application service name.
>
> **[4:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=246)** You can also configure the agent.
>
> **[4:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=249)** For example, change the agent pool to self-hosted agent or use the Azure Pipelines agent.
>
> **[4:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=257)** And then in the task pane, you can add additional task to deploy your application and configure as necessary.
>
> **[4:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=267)** In the release pipeline, you also have the variables tab where you can define variables for this release pipeline and scope it to a particular stage or make it available to all the stages.
>
> **[4:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=281)** You can also make it settable at release time, which means that a user must manually enter the parameters when the pipeline is manually triggered.
>
> **[4:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=292)** You can also link variable groups, like the Azure Key Vault from Azure so that your release pipeline can consume secret values while executing.
>
> **[5:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=305)** The retention tab is where you define the number of days and releases to maintain for artifacts in each stage.
>
> **[5:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=316)** For example, I may want to retain development release artifacts for 10 days, while production artifacts can remain for as long as 20 days.
>
> **[5:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=328)** In the options tab, you can provide a description for your pipeline and modify the release name format.
>
> **[5:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=336)** You can go to the Integrations tab and check any of these boxes to report deployment status to work.
>
> **[5:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=345)** That is if you have work items linked to the repository.
>
> **[5:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=350)** You can also report status if you've integrated your Azure DevOps with Jira, et cetera.
>
> **[5:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=357)** And lastly, the History tab is where you would find a report of changes made in the release pipeline.
>
> **[6:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=364)** Use this to audit activities related to the pipelines.
>
> **[6:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/an-overview-of-a-release-pipeline?u=76281980&t=369)** We will use some of these features while designing a release pipeline for our sample application where you can check out Microsoft Learn if you'd like to learn more about Azure Pipelines.

> [!info]- Semantic Content
>
> **Analogies:** for example (6), just like (1)
> **CLI Commands:** make (3), git (2), find (1)
> **UI Navigation:** select the (4), go to (2)
> **Prerequisites:** set up (3), configure (3)
> **Env Vars:** rest (1), api (1), uat (1)
> **Code Keywords:** type, (1), self (1)
> **Exercise Files:** template (2)
> **Tools:** jira (1)

#### Create web apps in Azure
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=0)** - [Instructor] Let's create three Azure Web Apps for our sample application.
>
> **[0:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=5)** Each app will represent an environment that is the development, testing or QA and production.
>
> **[0:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=14)** Usually your production environment would be the longest running web app in Azure, while dev and test can be recreated when needed.
>
> **[0:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=24)** As a best practice, we will create a staging slot in the production web app so that users in our production environment will not experience any downtime while a deployment is initiated for the environment.
>
> **[0:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=40)** If you haven't done so yet, you should register or log into Azure portal via [portalazure.com](https://portalazure.com).
>
> **[0:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=48)** Signing up to Azure is pretty straightforward as there are prompts to guide new users.
>
> **[0:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=55)** Once you're logged in, in the home page and at the top left corner of the screen, click the create a resource button.
>
> **[1:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=65)** Under categories, scroll down and select web and then click the create button for the web app.
>
> **[1:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=74)** I'll change to the app subscription and then click create new to create a new resource group.
>
> **[1:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=85)** A resource group is like a placeholder for similar cloud resources, and I would use this resource group for my dev and test environment.
>
> **[1:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=97)** Let's name it student-dev-rg, and then click OK.
>
> **[1:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=106)** Let's provide a name for the web app.
>
> **[1:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=111)** The name must be unique, so I'll add a value, like two numbers, and then -dev.
>
> **[1:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=119)** Make sure code is selected as the publish option.
>
> **[2:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=122)** And since this application is a .NET Core application, I'll select .NET 6 LTS for my runtime stack.
>
> **[2:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=134)** Leave Windows as the operating system for this web app and choose the region closest to your location.
>
> **[2:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=142)** This is the dev application and does not necessarily require a lot of compute resources.
>
> **[2:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=149)** So to save cost, I'll change the size and switch to a free version of the app service plan.
>
> **[2:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=158)** First of all, I need to create a new app service plan.
>
> **[2:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=161)** So click the create new button, and in here, I'll type student-dev-rg app service plan -free.
>
> **[2:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=175)** Then click OK.
>
> **[2:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=178)** Then for the pricing plan, you can click the dropdown and select Free F1 at the top of the list.
>
> **[3:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=188)** You can set zone redundancy for a free version.
>
> **[3:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=192)** So let's click the next button.
>
> **[3:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=195)** If you want to set up GitHub Actions for this web app, then you can go ahead and do so.
>
> **[3:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=200)** Well, I'll leave this as it is and click the Next button.
>
> **[3:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=205)** Ensure enable public access is on so that this app can be accessible over the internet.
>
> **[3:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=214)** Click Next to go to monitoring.
>
> **[3:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=217)** You may enable Application Insights if you've configured your app for insights and want to pay for that.
>
> **[3:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=223)** Well, I'll select no.
>
> **[3:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=226)** And then click Next.
>
> **[3:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=229)** The tags where you can define name and values that you can use to identify a cloud resource.
>
> **[3:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=237)** So I'll just click next to review my entries and once I'm sure of the entries, then click the Create button.
>
> **[4:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=247)** The web app for the development environment is being deployed now.
>
> **[4:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=252)** This environment will host the dev version of our sample application.
>
> **[4:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=257)** So anytime a developer pushes changes to the repo and creates a pull request into the main branch, it will automatically deploy to this dev environment and the developer can assess it via the name we defined earlier.
>
> **[4:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=274)** Let's quickly create a web app for the test or QA and the production environment.
>
> **[4:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=280)** Click on the portal menu at the top left corner of the screen and select create a resource.
>
> **[4:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=288)** Select Create button for the web app, select the appropriate subscription, and then the resource group for the test environment.
>
> **[5:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=301)** Let's provide a name for the web app called as student app 11 -qa.
>
> **[5:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=313)** Make sure it's validated.
>
> **[5:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=315)** Code should be selected as the publish option and let's select the runtime stack, which will be the .NET LTS.
>
> **[5:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=327)** Leave the operating system as Windows and select the closest region.
>
> **[5:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=333)** For the pricing plan, I'll leave it at the App Service plan we created earlier for the dev environment.
>
> **[5:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=341)** And then just click Next button just to confirm that the configurations are accurate.
>
> **[5:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=350)** Click networking and make sure enable public access is on.
>
> **[5:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=355)** Click next to go to monitoring and disable Application Insights.
>
> **[6:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=360)** Then let's click the review and create button, and confirm the entries.
>
> **[6:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=366)** Then click create button.
>
> **[6:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=368)** While the QA app is deploying, let's click the portal menu again and select create a resource.
>
> **[6:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=377)** Select the create button for the web app and then choose the appropriate subscription.
>
> **[6:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=385)** For the production app, you'll typically have a separate resource group from the dev applications.
>
> **[6:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=392)** So click the create new button and let's name this resource group student prod -rg.
>
> **[6:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=404)** Click OK.
>
> **[6:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=406)** For the web app name, let's type student app 11 and make sure it's validated.
>
> **[6:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=415)** Select code for publish setting and for the runtime stack. Let's select .NET 6 LTS.
>
> **[7:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=423)** Make sure that Windows is selected as the operating system and choose the closest region.
>
> **[7:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=429)** For the production app, let's create a new service plan.
>
> **[7:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=435)** Call this student prod -app service and then click OK.
>
> **[7:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=444)** Now let's click Explore pricing plans.
>
> **[7:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=448)** And for the production app, just to save costs for this course, I'll select the basic B1 option.
>
> **[7:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=455)** You can see the price here per month and the cost per hour.
>
> **[7:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=462)** If you'd like to choose a cheaper version, you can select the D1 option but I'll just go with the basic option and delete this immediately after I'm done testing.
>
> **[7:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=473)** So select B1 and click the select button.
>
> **[7:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=477)** Now let's go through the same process.
>
> **[8:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=480)** Click Next to go to the deployment tab, networking.
>
> **[8:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=485)** Make sure Enable Public Access is turned on.
>
> **[8:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=489)** Check monitoring and disable Application Insights.
>
> **[8:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=493)** And then let's click the review and create button.
>
> **[8:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=496)** Confirm your entries, and then click the create button.
>
> **[8:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=502)** Awesome.
>
> **[8:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=503)** So now that the three environments are ready, we can then define a release pipeline and link each stage to the appropriate environment.
>
> **[8:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/create-web-apps-in-azure?u=76281980&t=514)** As a personal challenge, you can try to configure the release for at least the dev stage before watching the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), public (3), require (1), switch (1), delete (1)
> **UI Navigation:** select the (6), go to (3), scroll down (1), dropdown (1), click on (1)
> **Env Vars:** net (4), lts (3)
> **CLI Commands:** make (6)
> **Tools:** azure portal (1), github (1)
> **Prerequisites:** set up (1), configure (1)
> **URLs:** [portalazure.com](https://portalazure.com) (1)
> **Cross-References:** next video (1)

#### Configure a release pipeline for multistage deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=0)** - [Instructor] I hope you were able to configure release pipeline for the dev stage.
>
> **[0:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=5)** If not, that's fine.
>
> **[0:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=7)** We will do it together now.
>
> **[0:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=11)** Back in the Azure device page, let's navigate to releases.
>
> **[0:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=15)** So go to pipelines and select releases.
>
> **[0:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=21)** Click on the new pipeline button.
>
> **[0:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=25)** Just as in the build pipeline, there are a number of templates and releases for deploying applications of various frameworks and to different targets.
>
> **[0:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=35)** We want to deploy to Azure web app, so let's click the apply button for Azure app service deployment.
>
> **[0:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=44)** Let's rename this stage to development.
>
> **[0:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=49)** Close the site pane and underneath the development stage you'll see the add button.
>
> **[0:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=57)** Click to add for the QA stage, and let's select apply.
>
> **[1:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=65)** Rename the stage to QA and let's close this pane.
>
> **[1:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=72)** Under the QA stage, let's click the add button again for production.
>
> **[1:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=77)** Click the apply button beside app service deployment and rename the stage to production.
>
> **[1:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=87)** Then close the pane.
>
> **[1:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=89)** Recall earlier we added a text to our build pipeline to publish an artifact so we can deploy that artifact via our release pipeline.
>
> **[1:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=99)** To select the build artifact, click on the add an artifact button at the left side of the screen.
>
> **[1:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=106)** And then let's select the build pipeline we defined earlier.
>
> **[1:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=110)** So click the dropdown and select student app CI.
>
> **[1:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=114)** We typically want to always deploy the latest version where you can choose an older version anytime you decide to manually create a release.
>
> **[2:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=125)** Click the app button and click the continuous deployment icon, this little lightning icon, and let's toggle to enable continuous deployment.
>
> **[2:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=137)** This means that anytime a new build artifact is created, the release pipeline will be triggered automatically.
>
> **[2:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=145)** You can also specify branches in addition to this trigger so that the release is only triggered for artifacts created from specific branches.
>
> **[2:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=156)** Let's choose the main branch by clicking the add button on the build branch filters and then select the main branch.
>
> **[2:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=166)** Let's close this pane.
>
> **[2:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=168)** If you do not wish to enable continuous deployment, but rather schedule a time for releases to be triggered, you can use the schedule set features to configure this.
>
> **[3:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=182)** You can enable this and then select the days and time you'd prefer the pipeline to be triggered.
>
> **[3:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=190)** This is quite useful for teams with critical applications that cannot be updated just anytime.
>
> **[3:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=197)** All right, let's define each of the stages, starting with the dev stage.
>
> **[3:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=202)** Before that, let's disable the schedule trigger and close the pane.
>
> **[3:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=208)** Click on the one job one task link for development stage.
>
> **[3:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=213)** In the stage settings page, we will connect to our Azure subscription.
>
> **[3:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=218)** If you are logged in with the same account to both Azure DevOps and Azure Portal, you should see your subscription listed here in the Azure subscription field.
>
> **[3:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=229)** Otherwise, you can click on the manage link at the top and then select new service connection to create a service connection.
>
> **[4:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=240)** Select Azure resource manager, then scroll down and click next.
>
> **[4:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=246)** Leave service principle automatic as the authentication method, and then click next.
>
> **[4:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=252)** You select the appropriate subscription here and then you can decide to scope this to a particular resource group or leave it blank so that it covers all the resources group in this subscription.
>
> **[4:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=266)** Then provide a service connection name.
>
> **[4:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=270)** I won't be saving these since I already have a service connection linked to my subscription, therefore I'll close this.
>
> **[4:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=279)** And back in my release configuration for the dev stage, I'll click the subscription list and select the app appropriate subscription.
>
> **[4:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=291)** Then click the authorized button.
>
> **[4:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=295)** Once authorized, remember, the web app we deployed is with Windows operating system.
>
> **[5:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=302)** So let's leave the app type as web app on Windows, and then let's select the app service name.
>
> **[5:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=309)** So click the dropdown, and this is the development stage, so we'll select the studentsapp-dev.
>
> **[5:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=318)** Let's look at the deploy task.
>
> **[5:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=322)** You see here some of the settings we configured in the stage page are linked here.
>
> **[5:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=328)** If you have other settings you need to define, you can expand the categories here and define them as needed.
>
> **[5:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=338)** We are done configuring the dev stage, so let's go ahead and check out the QA stage.
>
> **[5:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=345)** To do that, place your mouse cursor over the task tab and select QA.
>
> **[5:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=352)** Let's select the appropriate subscription.
>
> **[5:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=355)** So select the first one since we've already authorized this subscription in the dev stage.
>
> **[6:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=362)** Make sure the app type is web app on Windows.
>
> **[6:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=366)** And for the QA stage, we need to select the studentapp-QA.
>
> **[6:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=373)** You can click the deploy task to review the settings, but let's head over to the production stage.
>
> **[6:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=380)** So go to the task tab and select production.
>
> **[6:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=385)** Select the upper price subscription.
>
> **[6:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=391)** Make sure the app type is web app on Windows, and then let's select the app service name for this stage.
>
> **[6:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=402)** Let's modify the pipeline name to something descriptive.
>
> **[6:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=406)** So I'll select this and type studentsapp-cd-pipeline and click the save button.
>
> **[6:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=419)** You can provide a comment and then click okay.
>
> **[7:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=423)** We don't have variables to define for our code and you can explore that later, but let's manually deploy the students app to all environments.
>
> **[7:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=435)** First, let's check the build pipeline run to confirm the latest version that created a build artifact.
>
> **[7:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=443)** To do that, click on pipelines and then select the build pipeline.
>
> **[7:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=450)** And we can see the number here, 126.6.
>
> **[7:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=455)** So back in the release page, click on create release.
>
> **[7:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=463)** If you want to manually deploy to a particular stage, you can click the stage to change from automated to manual.
>
> **[7:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=472)** You will have to click on a deploy button for that particular stage.
>
> **[7:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=477)** However, I don't need it to be manual for now.
>
> **[8:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=480)** So let's confirm the appropriate build artifact is selected, which is 126.6.
>
> **[8:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=486)** You can provide a release description and then click the create button.
>
> **[8:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=492)** To view the logs, click the release link at the top green bar and then let's wait for this stage to start deploying.
>
> **[8:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=502)** Now click the logs to view.
>
> **[8:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=505)** The agent first initializes job and then downloads the artifact from a build pipeline, and then attempts to deploy the build artifact to the Azure app service.
>
> **[8:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=518)** Now the app is deployed to the dev environment.
>
> **[8:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=522)** Let's check out the QA stage.
>
> **[8:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=525)** At the top, change the stage from development to QA, and you can see it's preparing an agent for the job and should start running the logs now.
>
> **[8:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=537)** The same process as defined in the development stage is (indistinct) for the QA web app.
>
> **[9:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=544)** First, it initialized the job, downloads the build artifacts, and then deploys to the QA web app.
>
> **[9:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=554)** Awesome. The QA stage was successful.
>
> **[9:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=557)** Now let's change to the production stage and check the logs.
>
> **[9:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=562)** The stage is preparing an agent for the job.
>
> **[9:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=566)** It initializes the job, downloads the artifacts from the build pipeline, and then deploys to the production web app.
>
> **[9:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=576)** Let's wait for this to be completed.
>
> **[9:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=578)** It might take a moment.
>
> **[9:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=581)** Awesome.
>
> **[9:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=582)** All three stages deployed successfully to the linked Azure web app.
>
> **[9:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=588)** Now let's go to Azure portal and try to assess the URL of each environment.
>
> **[9:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=595)** So head over to your Azure portal and click on the portal menu.
>
> **[10:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=602)** Then select app services.
>
> **[10:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=605)** If your web app isn't showing in the list, make sure that the filter is accurate.
>
> **[10:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=610)** So let's change this to the learning subscription and apply.
>
> **[10:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=618)** And now I would open my student app dev, and then click on the browse button to open the webpage.
>
> **[10:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=628)** Awesome, our site is up and served from the dev environment.
>
> **[10:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=634)** So going forward, new versions built from the main branch would always be automatically deployed to this environment.
>
> **[10:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=642)** This reduces the time it'll take a developer to deploy and test the dev version of an application.
>
> **[10:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-a-release-pipeline-for-multistage-deployment?u=76281980&t=650)** You can also verify that your QA and production web app are reachable by going back to your Azure portal and select the QA and production web app, then browse it.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (15), click on (9), go to (3), dropdown (2), navigate to (1)
> **Code Keywords:** let (29), this. (2)
> **CLI Commands:** make (3), cd (1)
> **Tools:** azure portal (4)
> **Versions:** 126.6 (2)
> **Prerequisites:** configure (2)
> **Env Vars:** url (1)
> **Definitions:** means that (1)

#### Reconfigure your production stage release to deploy to a staging slot
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=0)** - Now there is one problem we need to fix.
>
> **[0:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=4)** Notice how a create release action or a new build artifact would cause the release to deploy to all environments without any confirmation especially to the QA and production environment.
>
> **[0:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=18)** This should not be the case because users may be testing new features in the QA environment or a larger user base would be using your production app and deploying new versions this way could break the app causing undesirable effects.
>
> **[0:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=35)** We have to configure approvals so that deployments to non-development environments are first approved before the deployment begins.
>
> **[0:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=48)** To do that, let's head back to our Azure DevOps project and navigate to releases.
>
> **[0:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=57)** Select the student pipeline and click the edits button.
>
> **[1:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=63)** Let's enable pre-deployment approval for the QA stage.
>
> **[1:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=69)** Click on the pre-deployment conditions and scroll down to enable pre-deployment approvals.
>
> **[1:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=79)** In the approvers field search for and select your name.
>
> **[1:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=85)** If you have additional approvers to add, you can go ahead and search them.
>
> **[1:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=90)** You can also add valid user groups, for example, user groups of the QA team.
>
> **[1:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=96)** This way, the QA team would control what gets deployed to the QA environment and add the appropriate time they need a new version of the application for testing.
>
> **[1:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=109)** Once you have more than one entry, you can select an approval order.
>
> **[1:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=116)** The first option being that every approver must approve a deployment to the QA stage in any order.
>
> **[2:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=124)** The second option requires the first approver confirms the release before the next approver or you can choose the last option which means any single approver can approve a deployment.
>
> **[2:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=140)** Use the timeout settings to cancel a release if it's not approved after the set timeframe.
>
> **[2:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=147)** Let's change this to 30 minutes and I'll delete this group.
>
> **[2:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=153)** You have approval policies like denying a user that triggered a release from approving it.
>
> **[2:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=160)** This is a good policy for better control.
>
> **[2:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=163)** You also have revalidate the approver's identity which will prompt for login details and the last option to skip approval if previous stage was approved by the same person.
>
> **[2:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=175)** There are scenarios where you'd want to have a standalone stage such that it's not triggered after a stage, but after a new artifact is available.
>
> **[3:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=187)** To do that, use the trigger option at the top and you can select after release.
>
> **[3:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=193)** This means that while your new artifacts will trigger a release to the development stage, it'll also be queued for the QA stage.
>
> **[3:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=203)** I'll change this back to after stage.
>
> **[3:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=207)** Let's assume the policy for a QA team requires that every successful app testing must be followed by a member of the QA team approving a post-deployment in the QA stage.
>
> **[3:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=220)** You can do this in the post-deployment conditions so click on the post-deployment conditions and then you can enable post-deployment approvals and select either the QA team or the QA lead as part of the approvals.
>
> **[4:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=240)** I won't be setting this up here but it's something you can explore in your next CI/CD project.
>
> **[4:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=248)** Let's disable this and close the pin.
>
> **[4:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=251)** Let's quickly set up pre-deployment approvals for the production environment.
>
> **[4:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=256)** So click the conditions button for the approval stage and then scroll down to enable pre-deployment approvals and then search for and select your name.
>
> **[4:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=271)** I'll change the time-out to 30 minutes.
>
> **[4:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=274)** Close the setting screen and click the save button.
>
> **[4:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=278)** You can provide a comment, configure pre-deployment approvals for QA and prod stage.
>
> **[4:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=289)** Then click the okay button.
>
> **[4:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=293)** Now let's test this.
>
> **[4:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=295)** Click the create release button at the top right and then let's click the create button.
>
> **[5:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=301)** Click the release to in the green bar and let's wait for this to start running.
>
> **[5:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=311)** When the dev stage deployment is successful, there is an approved button in the QA stage.
>
> **[5:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=318)** If you are not logged into DevOps at the time this runs, you can always check your email for an approval notification.
>
> **[5:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=326)** You can approve this and then click on the approve button.
>
> **[5:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=331)** To see what happens to the QA stage, after the 30 minutes timeout, try to trigger the release pipeline again, but without approving the QA stage.
>
> **[5:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=342)** After that, recall earlier that for the production environment, we need to minimize service disruption or ensure application availability even during deployment of new versions of a web application.
>
> **[5:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=358)** As a challenge, modify the production stage in the release pipeline and configure tasks to enable deployments to a staging slot.
>
> **[6:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/reconfigure-your-production-stage-release-to-deploy-to-a-staging-slot?u=76281980&t=368)** Remember to create a staging slot in your production web app first so you can reference that in your pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), delete (1), this. (1)
> **UI Navigation:** click on (3), scroll down (2), navigate to (1), select the (1)
> **Prerequisites:** configure (3), set up (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **CLI Commands:** cd (1)
> **Analogies:** for example (1)
> **Best Practices:** remember to (1)
> **Speakers:** - now (1)

#### Release pipelines for staging slot deployments
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=0)** - I hope you found out what happens if a deployment to the QA stage is not approved before it times out.
>
> **[0:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=8)** For me I didn't approve the production stage, and it was automatically rejected.
>
> **[0:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=15)** Now if you need to redeploy a particular version to a particular stage, you can always go to releases, select the release, and then click on redeploy for a particular stage.
>
> **[0:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=32)** You would see the artifact that will be deployed, the version and the branch.
>
> **[0:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=39)** Click on deploy, and then it'll request for approval.
>
> **[0:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=46)** Then just click on the approve button.
>
> **[0:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=50)** You can provide a comment if you'd like and then click approve.
>
> **[0:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=56)** So this will start deploying.
>
> **[0:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=57)** You can view the logs if you'd like, but while this is deploying, let's solve the challenge from the previous video.
>
> **[1:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=65)** So rather than deploy directly to the production web app, we want to deploy a new version to a staging slot to minimize service disruptions.
>
> **[1:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=76)** So we will have a task in our production stage to deploy to the staging and swap the staging slot with the production slot.
>
> **[1:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=87)** Before we can do that, let's go create a staging slot in our production web app.
>
> **[1:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=94)** So go to your Azure portal, and if you are not on your production web app, simply click the menu button and then select app services.
>
> **[1:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=107)** Make sure the appropriate subscription is selected then click apply.
>
> **[1:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=113)** Then you can now select your production web app.
>
> **[1:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=117)** In the production web app under deployment category, let's click on deployment slots.
>
> **[2:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=124)** I don't have a deployment slot because I was attempting to save costs.
>
> **[2:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=129)** So let's upgrade our service plan to a standard tier.
>
> **[2:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=134)** So click the upgrade button, and in this specification page, click on production, and then click see additional options.
>
> **[2:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=146)** Then select S one and click the apply button.
>
> **[2:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=151)** We can quickly delete these after testing the pipeline, and we'll only pay for the hours it's been used.
>
> **[2:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=160)** Let's close this page and then in the deployment slots page for the production app, click the refresh button, and we now have a slot available for the production web app.
>
> **[2:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=175)** Let's add a new slot.
>
> **[2:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=177)** To do that, click the add slot button at the top, and let's provide a name for this slot.
>
> **[3:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=183)** Let's call it staging.
>
> **[3:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=185)** And underneath the name field, you can see the URL for the staging slot.
>
> **[3:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=191)** You can decide to clone settings from the production app or create new settings for the staging slot.
>
> **[3:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=198)** Let's clone new settings.
>
> **[3:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=200)** So click the dropdown and select the student app.
>
> **[3:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=205)** Then click add.
>
> **[3:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=209)** Once the slot is created, let's close this, and then back in my Azure DevOps portal Navigate To release this.
>
> **[3:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=222)** Make sure the student app pipeline is selected and then click the edit button.
>
> **[3:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=229)** There are a number of possible configurations you can use.
>
> **[3:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=233)** One is modifying the production stage to deploy to the staging slot of your web app.
>
> **[4:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=240)** You'll select the resource group and the slot from the dropdown list.
>
> **[4:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=245)** And then after every successful deployment to the staging slot, you have to manually add over to the app service in Azure portal and click the swap button to make the staging production, and the production becomes the staging.
>
> **[4:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=261)** That's quite a cumbersome task, but this is useful for maybe unstable applications that require close monitoring when it's being deployed.
>
> **[4:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=272)** Another option is to add an additional stage between the QA and the production and then add a task to deploy to the staging environment.
>
> **[4:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=285)** You can always add an approval gate so that deployments to staging are first approved.
>
> **[4:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=291)** But for this class, I will simply add a task to my production slot to swap the staging for production after a successful deployment to the staging slot.
>
> **[5:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=303)** So to do that, let's open the one job, one task link for production stage and then click the add button beside the agent.
>
> **[5:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=315)** And let's search for swap.
>
> **[5:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=319)** Select the Azure app service manage, and click the add button.
>
> **[5:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=326)** Now let's select the Deploy Azure app service task and then scroll down and enable deploy to slot or app service environment.
>
> **[5:38](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=338)** Click on the dropdown to select the resource group, and then by default it selects the production.
>
> **[5:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=346)** So let's change this to staging, and that's it.
>
> **[5:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=352)** So let's go to the swap slots task and select the appropriate Azure subscription.
>
> **[6:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=361)** Make sure the action is swap slots and select the app service name.
>
> **[6:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=368)** So we'll select the production app service and choose the appropriate resource group and then select the swap slot, in this case staging.
>
> **[6:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=383)** So in this case, we want to swap staging with production.
>
> **[6:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=387)** Make sure the swap with production checkbox is checked, but if you have other slots you wish to be the target then you can uncheck this option and specify the target slots for swap.
>
> **[6:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=401)** And that's it.
>
> **[6:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=403)** So when the release workflow gets to the production stage, it'll deploy your web app first to the staging slot as defined in the first task, and then swap staging slots with production as defined in the second task.
>
> **[6:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=418)** Let's click the save button to save this.
>
> **[7:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/release-pipelines-for-staging-slot-deployments?u=76281980&t=422)** You can provide a comment and then click okay.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (10), click on (6), go to (3), dropdown (3), navigate to (1)
> **Code Keywords:** let (16), this. (2), delete (1), this, (1), require (1)
> **CLI Commands:** make (5)
> **Tools:** azure portal (2)
> **Env Vars:** url (1)
> **Cross-References:** previous video (1)
> **Documentation:** specification (1)
> **Speakers:** - i (1)

#### Test release to deployment slots
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=0)** - Now that we are done defining the swap slot task for the production stage of our release pipeline, let's quickly test our pipeline.
>
> **[0:11](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=11)** First, let's browse to the staging slot URL, to see what we find in the page.
>
> **[0:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=17)** So, head back to the Azure portal page and then make sure you're in the staging app service and click the browse button.
>
> **[0:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=27)** And we see here the service is unavailable.
>
> **[0:30](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=30)** This is because we are yet to deploy any application to the staging slot.
>
> **[0:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=36)** However, if you check the production slot URL you can see the website is displayed.
>
> **[0:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=43)** Now let's imagine a scenario where, a developer has been asked to modify this application to include a serial number column, for better user experience.
>
> **[0:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=54)** To do this, let's head back to our Visual Studio Code project.
>
> **[0:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=58)** And before we make any change, let's click on the branch menu, and then select the main branch.
>
> **[1:08](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=68)** You can see here, the change we made to our feature index branch is not yet pulled into our local repository.
>
> **[1:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=76)** So to fix this, let's click on terminal, at the top.
>
> **[1:20](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=80)** And click new terminal.
>
> **[1:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=83)** Now, once the terminal is opened, we need to pull changes from the remote repository, so type "get pool" and then enter.
>
> **[1:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=96)** And now we have the change in our local repository.
>
> **[1:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=102)** Let's create a new branch so that we can make the change and add a serial number column to our project.
>
> **[1:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=108)** So at the lower left corner of the screen, click the branch menu, and select create new branch.
>
> **[1:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=117)** Let's call this branch features slash serial number.
>
> **[2:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=124)** And then press enter.
>
> **[2:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=126)** Now let's close these terminal.
>
> **[2:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=130)** And then after line 17, let's create a new line.
>
> **[2:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=134)** And then add "TH" and then let's type serial, S slash N shot for serial number.
>
> **[2:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=148)** And then where we have the T body, let's create a new line and then paste this function.
>
> **[2:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=155)** And then after reaching our elemental and line 30 let's create a new line and then paste dysfunction.
>
> **[2:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=164)** This will loop and increment, the serial number value from one to, whatever number of items we have in the table.
>
> **[2:53](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=173)** Let's quickly save this so you can press CTRL S to save.
>
> **[2:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=178)** Now let's push this code to the remote repository.
>
> **[3:02](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=182)** At the top, click on the terminal menu, and select new terminal.
>
> **[3:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=187)** To stage the change, let's type GI add dot, and enter.
>
> **[3:13](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=193)** And to commit, get commit dash M, and you provide a comment.
>
> **[3:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=201)** At that serial number.
>
> **[3:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=205)** Press enter.
>
> **[3:28](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=208)** And then to push, let's type "get push" dash, dash, set, dash, upstream, origin, and then the name of the branch which is features, slash, serial number.
>
> **[3:47](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=227)** Enter.
>
> **[3:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=232)** And it's has pushed successfully to the remotes repository.
>
> **[3:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=236)** So let's go to create a pool requests from this feature branch to the main branch in Azure DevOps page.
>
> **[4:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=244)** So back in my Azure DevOps page, I'll navigate to records, and you should see a notification that you updated the serial number feature branch some minutes ago.
>
> **[4:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=258)** Let's click create a pool request button.
>
> **[4:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=262)** And here you can see the three lines we added to this file.
>
> **[4:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=267)** Back in the overview page let's try to create the pool request.
>
> **[4:33](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=273)** So click on create, and you should see the student app, PR bill policy is triggered.
>
> **[4:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=282)** so we'll have to wait a while for this to be completed.
>
> **[4:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=285)** This will trigger the pipeline to run where it'll build the code and then try to scan the code using the SNA cloud task.
>
> **[4:54](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=294)** We defined earlier.
>
> **[4:58](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=298)** The build policy was successful, and you can view the two checks that was run.
>
> **[5:03](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=303)** And you can see here we have the required policy, which is the student app pool request build policy, as well as the quality gate from the sonar cloud report.
>
> **[5:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=314)** So let's close this and approve the pool request.
>
> **[5:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=319)** To do that, click the approved button at the top.
>
> **[5:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=323)** And now we can complete this pool request can be pulled into the main branch so click on the complete button at the top, and let's leave the delete feature branch after Managing option checked, and then click complete merge.
>
> **[5:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=341)** And that's it.
>
> **[5:43](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=343)** So if we go to the pipelines at the left, and check the build pipeline.
>
> **[5:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=349)** It should be triggered for the main branch.
>
> **[5:52](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=352)** This is automatic meaning, anytime a developer make changes and pushes to a feature branch, then create a pool request, which is then approved.
>
> **[6:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=364)** The main branch will trigger the pipeline to run and then we'll see how the release pipeline would run.
>
> **[6:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=372)** You can click on this pipeline to view the logs.
>
> **[6:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=378)** And then select agent job.
>
> **[6:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=382)** This time around an artifact will be created because the main branch triggered this pipeline.
>
> **[6:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=389)** The build for the main branch was successful and we have an artifact created.
>
> **[6:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=394)** So let's navigate to release this and then check what happens to a dev stage.
>
> **[6:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=400)** And we see here, it's already triggered for the dev stage.
>
> **[6:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=404)** To view this progress, let's click on release four and you can click on the logs, to view the progress for the development stage.
>
> **[6:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=415)** As usual, the latest artifacts is downloaded and then it's now deploying to the Azure Azure App Service.
>
> **[7:04](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=424)** This Is successful, so let's go to our, Azure Azure portal.
>
> **[7:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=429)** And then open our app services.
>
> **[7:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=436)** Let's filter based on the lending sub, subscription.
>
> **[7:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=441)** And then click apply.
>
> **[7:23](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=443)** And now I want to view my dev euro.
>
> **[7:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=445)** So I'll open the dev web app and then, click on the browse button.
>
> **[7:34](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=454)** Cool! And I'll see the serial number column in my webpage.
>
> **[7:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=459)** So let's go back to Azure portal, and check for the QA web app.
>
> **[7:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=464)** So select the QA.
>
> **[7:46](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=466)** And then click on the browse button.
>
> **[7:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=469)** We still have the old app because the serial number is not displayed here, and that is because we've not approved the deployment to the QA environment.
>
> **[8:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=480)** To do that, let's quickly go back to Azure DevOps page and select the pipeline.
>
> **[8:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=487)** And then let's click on the, approved button for the QA stage.
>
> **[8:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=492)** You can add a comment, and then click approve.
>
> **[8:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=496)** Let's click on the view logs to monitor the progress.
>
> **[8:26](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=506)** The release to the QS stage is successful so let's go back to uh, QA web app, and then refresh the page.
>
> **[8:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=517)** And now we see a serial number here.
>
> **[8:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=520)** Awesome! So let's assume, QA team is satisfied with the changes made and it's time to push to the production environment.
>
> **[8:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=531)** I'll just add over over to the release page on Azure DevOps.
>
> **[8:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=535)** Select the release pipeline and let's close this.
>
> **[8:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=539)** Then under the production stage, I'll click the approved button.
>
> **[9:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=546)** and then click approved button again.
>
> **[9:09](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=549)** You can view the logs by clicking on the view logs button and then let's wait a while for this to run.
>
> **[9:17](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=557)** As usual, the initialized job tax would run fast, and then the latest artifact is downloaded.
>
> **[9:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=565)** Then this will deploy the Azure app service to the staging SLT, and once it's done deploy into the staging SLT, it'll then swap the SLTs.
>
> **[9:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=577)** The tasks include warming up the SLT's and then swapping up service SLT's, staging, and production.
>
> **[9:45](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=585)** Once the production stage deployment is successful let's try to browse our production URL.
>
> **[9:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=591)** So I'll navigate to the website and then click the refresh button.
>
> **[9:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=597)** And now we see the serial number in the production app.
>
> **[10:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=601)** If we go to the staging SLT's, and then refresh.
>
> **[10:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=607)** We now see our web app, but the old version without any serial number column.
>
> **[10:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=614)** So this is how C I C D pipelines, help eliminate deployment issues for your development team.
>
> **[10:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=621)** Quick, easy, and reliable workflow that runs the same for every change, that needs to make it to all your linked environments.
>
> **[10:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=632)** Assuming we need to roll back the latest change for the production environment.
>
> **[10:37](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=637)** I can go back to my Azure portal, and click on the production web app, then select deployment slots and then use the swap button gear to swap between production and staging.
>
> **[10:57](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=657)** Or back in my DevOps portal I can go back and select a previous release.
>
> **[11:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=666)** Select release three, for example.
>
> **[11:10](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=670)** And then try to redeploy for a production stage.
>
> **[11:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=674)** This will still require an approval, and you can get the necessary approval and redeploy old versions of your release.
>
> **[11:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/test-release-to-deployment-slots?u=76281980&t=682)** Once this is completed, you can still browse the URL, and you see that the previous version, without the serial number, will be deployed to the production slot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (35), this, (2), function (1), delete (1), this. (1)
> **UI Navigation:** click on (13), select the (4), go to (4), navigate to (3), open the (1)
> **Env Vars:** slt (5), url (4), ctrl (1), sna (1)
> **Tools:** terminal (6), azure portal (4), visual studio (1)
> **CLI Commands:** make (5), find (1)
> **Cross-References:** go back to (4)
> **Analogies:** imagine (1), for example (1)
> **Speakers:** - now (1)


### 4. Maximizing Azure Pipelines

#### Configure notifications for successful deployments
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=0)** - [Instructor] You may have noticed that you received notifications for release approvals, timeouts, or even a fill deployment but no notification is sent for successful deployment of artifacts to environment.
>
> **[0:15](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=15)** Let's learn how to set up notifications for release pipelines that have successfully deployed artifacts to linked environments.
>
> **[0:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=24)** There are two ways to set up notifications: at the DevOps organization level, and in each project.
>
> **[0:32](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=32)** To set up notifications at the organization level, click Organization Settings.
>
> **[0:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=39)** Under General, click on global notifications.
>
> **[0:44](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=44)** You can review some default notifications, like some for build and code.
>
> **[0:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=51)** If you scroll down, you should find some notifications for release when manual intervention is pending and even when deployment approval is pending.
>
> **[1:01](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=61)** Now, to create a new notification, let's click on subscribers at the top and let's search for a group project collection valid users.
>
> **[1:16](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=76)** Then click Search.
>
> **[1:18](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=78)** Make sure that your organization name is shown and then project collection valid users.
>
> **[1:24](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=84)** Click to select this group and then here we have some notifications.
>
> **[1:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=91)** Let's set up the notification for a successful deployment.
>
> **[1:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=96)** To do that, click on the new subscription button at the top and under Category, select Release, and then select a deployment is completed template.
>
> **[1:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=109)** Click the next button, and here we see a description for this new subscription.
>
> **[1:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=115)** We have the subscriber selected and the deliver to would be members of project collection, valid users by roles.
>
> **[2:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=125)** So you can specify the roles to limit who receives the notification for a successful deployment In a typical setting, business stakeholders who are part of your DevOps project don't need this notification from release, so you can filter persons by roles to receive specific notifications.
>
> **[2:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=145)** Click on the roles dropdown and we have the deployment requested for stage owner, release requested by and approved by.
>
> **[2:35](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=155)** I'll just uncheck deployments requested for and then close this list.
>
> **[2:41](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=161)** We also need to specify any team project so that this notification can work for future projects that will be created and even existing projects in the organization.
>
> **[2:56](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=176)** Now let's set up a filter criteria.
>
> **[2:59](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=179)** Under the field, click on the dropdown and select deployment status.
>
> **[3:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=185)** Make sure the operator is the equal sign and then the value should be succeeded.
>
> **[3:12](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=192)** And that's it.
>
> **[3:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=194)** Let's click the finish button, and if you check under the release category, you can find a deployment is completed.
>
> **[3:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=202)** Subscription has been created.
>
> **[3:25](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=205)** Now let's quickly test this.
>
> **[3:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=207)** Let's go back to the Azure DevOps home page and then select the student app project.
>
> **[3:36](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=216)** Let's go to pipelines and select releases.
>
> **[3:42](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=222)** We will create an auto release for the development stage while the QA and production would be changed to manual.
>
> **[3:50](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=230)** Make sure you selected the pipeline and click create release button at the top right.
>
> **[3:55](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=235)** Then let's change this stage, the QA and production to manual so it doesn't trigger, and then let's click the create button.
>
> **[4:05](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=245)** Now you can click the release six at the top and the development stage should start running soon.
>
> **[4:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=254)** Awesome, once it starts running, you can click the logs to view that.
>
> **[4:21](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=261)** The deployment to development stage is successful and now you can check your email to confirm if you got a notification.
>
> **[4:31](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=271)** Nice, I have email from Azure DevOps showing a deployment to development succeeded with the release description, who requested the release, the branch is deployed to and as well as the artifact version.
>
> **[4:48](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=288)** Cool, right?
>
> **[4:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/configure-notifications-for-successful-deployments?u=76281980&t=289)** If you want to create this via the project settings, all you have to do is go to the project setting page, click on notifications and select a new subscription to follow the same process as we configured earlier in the global notification.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), this. (1)
> **UI Navigation:** click on (6), dropdown (2), scroll down (1), select the (1), go to (1)
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** set up (5)
> **Cross-References:** go back to (1), earlier in (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=0)** - [Prince] CI/CD solutions With Azure DevOps is a great tool to eliminate deployment toil and enable faster build, test, and delivery of your software applications to your users.
>
> **[0:14](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=14)** I enjoy creating pipelines for new projects while continuously improving existing pipelines with the help of a task group template to accommodate changes in software applications.
>
> **[0:27](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=27)** As you prepare to start your journey with configuring Azure build and release pipelines for your next project, there are many additional resources to help you along the way.
>
> **[0:39](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=39)** Check out courses on Azure DevOps in the LinkedIn Learning Library as well as documentations or tutorials on Microsoft Learn.
>
> **[0:49](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=49)** If you are already using GitHub as your source control and would like to learn how to integrate GitHub with Azure DevOps to manage your CI/CD workflow, then you can learn from my course on integrating Azure DevOps with GitHub here in the library.
>
> **[1:07](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=67)** As a reminder, we learned about the concept of Azure Pipelines, how to configure a pipeline and integrate SonarCloud to scan the source code for vulnerabilities.
>
> **[1:19](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=79)** We also found out how to protect an important branch, the main branch, so that only approved changes are merged from other branches.
>
> **[1:29](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=89)** Then, new commits to the main branch triggers a build, produces an artifact, and the release pipeline deploys the artifacts to the linked environment.
>
> **[1:40](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=100)** And lastly, we learned how to minimize service disruption by deploying to a staging slot and swapping that with production in Azure.
>
> **[1:51](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=111)** I encourage you to explore using YAML syntax in configuring your CI/CD pipelines and learn more about branching strategies like the trunk-based development, GitFlow, or GitHub flow.
>
> **[2:06](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=126)** Whatever stage you are in your CI/CD journey, I hope this course has made it easier to understand the concepts and be able to build CI/CD solutions with Azure DevOps for your next set of software projects.
>
> **[2:22](https://www.linkedin.com/learning/developing-ci-cd-solutions-with-azure-devops-22123562/next-steps?u=76281980&t=142)** Thank you for watching this course, and I wish you luck in your CI/CD journey.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (6)
> **Tools:** github (4)
> **Exercise Files:** template (1), source code (1)
> **Env Vars:** yaml (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [prince] (1)


## Path Context

### In [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
**1 of 7** | [[Migrating to Azure]] →

### In [[Getting Started as an Azure Developer]]
← [[Azure DevOps for Beginners]] | **7 of 7**

## Appears In

- [[Advancing Your Azure Developer Skills- Exploring Complex Application Development]]
- [[Getting Started as an Azure Developer]]
