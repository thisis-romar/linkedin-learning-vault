---
type: course
slug: aws-essential-training-for-administrators-2022
url: "https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022"
level: Intermediate
updated: 3/2/2022
learners: 9774
skills:
  - Cloud Administration
  - Amazon Web Services (AWS)
exercise_files: false
tags:
  - course
  - topic/cloud-computing
  - topic/devops
  - skill/cloud-administration
  - skill/amazon-web-services-aws
status: not-started
created: 2026-04-17
---

# Aws Essential Training For Administrators

> Amazon Web Services (AWS) is the most widely used cloud platform and the go-to for many organizations looking to reduce costs by adopting a cloud infrastructure strategy. In this course, instructor Shyam Raj covers the tasks that are essential for cloud admins, including identity and access, security, storage, migration, monitoring, and more. Shyam begins with some fundamentals of cloud computing 

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022) | Intermediate | 10K learners

## Skills Covered

- Cloud Administration
- Amazon Web Services (AWS)

## Table of Contents

### Introduction

#### Simplified AWS administration
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=0)** - [Shyam] Many organizations today have some presence in the cloud or are planning to move to the cloud, and AWS has a comprehensive suite of tools for your business problems.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=9)** We'll explore how to control costs, forecast your usage, and prevent unwanted charges.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=15)** We'll simplify the administration of multiple AWS accounts, and practice enforcing adherence to best practices and industry standards.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=23)** We'll also examine how to analyze your security posture and protect sensitive information.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=28)** My name is Shyam and I'm a technical instructor by profession.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=32)** I enjoy teaching and bringing technology closer to people.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/simplified-aws-administration?u=76281980&t=36)** If you're ready to apply the tools and techniques that improve the effectiveness of your AWS deployment, let get started.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3)
> **Env Vars:** aws (3)
> **Code Keywords:** let (1)
> **Speakers:** - [shyam] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980&t=0)** - Amazon Web Services offers various tools for compute, storage, governance, controlling costs, migration, and more.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980&t=8)** To appreciate the concepts discussed in this course, I recommend that you have a basic understanding of cloud computing.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980&t=14)** You will also need an AWS account to follow along with the exercises.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980&t=19)** For exercises that teach you how to make manage a multi-account environment, you will need an additional AWS account.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980&t=26)** We've designed this course for administrators who are commonly tasked with managing identities, compute and storage infrastructure, security and compliance, migration, monitoring, and cost control.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/what-you-should-know?u=76281980&t=38)** By the end of this course, you will have a solid understanding of the tools and techniques you can use to administer your AWS infrastructure effectively.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (3), make (1)
> **Env Vars:** aws (3)
> **Speakers:** - amazon (1)


### 1. Cloud Computing

#### Cloud computing fundamentals
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=0)** - [Instructor] Let's begin this course by discussing basic cloud computing concepts, and understanding of these concepts will help us with the other topics in this course.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=8)** AWS defines cloud computing as the on-demand delivery of IT services over the internet.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=13)** Traditionally, organizations have owned IT resources and maintain them on-premises or contracted a third party to maintain them in a data center.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=22)** With cloud computing, you can deploy many of these on-premises resources in the cloud, such as servers, storage infrastructure, databases, and even networking components, such as routers and firewalls.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=35)** Cloud computing services are offered in different service models, such as Infrastructure as a Service, or IaaS, Platform as a Service, or Paas, and Software as a Service, or SaaS.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=48)** With Infrastructure as a Service, cloud computing service providers, like AWS, in this case, will give you the infrastructure on which you can host your services.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=57)** An example of this is Virtual Machines, known as Elastic Compute Cloud or EC2 instances.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=63)** These EC2 instances serve as the infrastructure for your deployment.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=67)** You can use these to deploy resources, such as databases, applications, and more.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=73)** With Infrastructure as a Service, you are in control of the infrastructure.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=77)** So you are also responsible for managing and maintaining it, like patching and applying updates.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=83)** With Platform as a Service, AWS will provide you a pre-configured environment or, in other words, a platform on which you can deploy your application.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=93)** An example of this is AWS ElasticBeanstalk.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=96)** It allows you to supply application code written in a supported language, and AWS takes care of the deployment, including capacity provisioning, load balancing, auto-scaling, and health monitoring.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=108)** Unlike Infrastructure as a Service, Platform as a Service reduces your control over the infrastructure because the underlying layer is abstracted from you.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=117)** But this also means that you can focus on the important task of developing your application.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=123)** With Software as a Service, or SaaS, the vendor provides you a product that is run and managed by them.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=130)** This model provides the least level of control, but is the easiest to get started.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=136)** An example of a SaaS product is the email services we use.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=140)** As end users, we simply use the application without managing it or awareness of the underlying infrastructure.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=147)** Lastly, let's talk about some of the advantages of hosting your services on the cloud.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=152)** First, is cost savings.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=154)** Most cloud computing services have a pay-as-you-go model, which means you only pay for the resources you are using.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=162)** Some services also allow you to make upfront payments and reserve capacity in return for discounted pricing.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=168)** And, not to forget, you don't have to own hardware to run your services.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=174)** Another significant advantage is elasticity.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=177)** To begin with, you only need to deploy the required resources without under or over-provisioning, which is a common occurrence with on-premises deployment.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=186)** As your requirements change, you simply scale up or down.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=190)** Cloud deployments also bring in agility.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=192)** A lot of the services you require are already available in the cloud, for example, databases, container environments, machine learning tools, integration tools, and more, so you can quickly get started without having to develop these applications.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=209)** Cloud computing services can be deployed in different regions, so your applications can be fault-tolerant and highly available.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=216)** At the time of this recording, AWS services are available in 25 regions.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=222)** And last, but not the least, is security.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=224)** Cloud computing vendors have built-in mechanisms and deployable tools to protect your applications and workloads from threats.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=232)** So you can see, cloud computing brings in some significant advantages compared to on-premises deployments.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-computing-fundamentals?u=76281980&t=239)** Now let's talk about the AWS Cloud.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), ec2 (2)
> **CLI Commands:** aws (7), make (1)
> **Code Keywords:** let (3), case, (1), require (1)
> **Analogies:** such as (4), for example (1)
> **Definitions:** known as (1), in other words (1), means that (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Introduction to AWS

#### AWS fundamentals
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=0)** - [Instructor] Amazon Web Services or AWS offers over 200 different services to its customers.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=5)** These services are delivered using regions and availability zones.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=10)** AWS distributes the regions worldwide, allowing customers to choose based on their preference for low latency, cost, and compliance.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=18)** So let's understand what is a region.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=20)** A region is a physical location from where AWS provides its services.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=24)** Examples of regions include North Virginia, Singapore, Sydney, and more.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=30)** AWS designs each region to be completely isolated from another, allowing for fault tolerance.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=36)** A region has multiple isolated locations known as availability zones.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=40)** They consist of one or more discreet data centers each with redundant power and connectivity.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=46)** Each availability zone is isolated but the availability zones within a region are connected through low-latency links.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=53)** And each region has at least two availability zones.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=57)** As an administrator, you can host your resources and data in multiple regions and across multiple availability zones within a region, allowing for a highly available, fault-tolerant deployment while taking care of your compliance requirements.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=72)** So to visualize this, the AWS cloud is composed of multiple regions and within each region are multiple availability zones.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=81)** Each region is assigned an identifier.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=83)** For example, North Virginia is represented as us-east-1 and the availability zones within North Virginia are represented as us-east-1a, 1b, and so on.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=96)** AWS regularly adds new regions and availability zones.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=100)** For a complete list of available regions and availability zones, please refer to the AWS documentation.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=106)** Services that AWS provides to its customers are grouped in different categories.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=111)** Important categories include compute, storage, networking, databases, identity and access management, containers, developer tools, management and governance, machine learning, and more.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=126)** Most of these categories include multiple products and have flexible pricing options so as an administrator, you can choose from a wide selection of tools.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=136)** Customers planning on migrating their resources to the cloud commonly have two concerns, security and compliance.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=143)** Talking about security, AWS uses a shared responsibility model where AWS manages the security of the cloud while you are responsible for security in the cloud.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=153)** As an example, AWS will manage the physical hardware that powers their cloud services but you'll be responsible for the data and applications you host on them.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=163)** To better understand how security is managed in the AWS cloud, I encourage you to review the AWS shared responsibility model.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=170)** It explains in detail the separation of responsibilities for AWS and the customer.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=176)** When talking about compliance, there are two aspects to consider, compliance of your resources and compliance of the cloud provider, in this case, AWS.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=186)** AWS offers several tools to monitor the configuration of your resources and evaluate them for compliance.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=193)** We'll be talking about many of these tools in this course.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=196)** Talking about compliance of AWS, the AWS infrastructure is compliant with popular standards such as SOC1, two, and three, FedRAMP, PCI DSS Level 1, ISO 9001, ISO 27001, and more.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=212)** To know more about AWS compliance, please refer to the risk and compliance document.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-fundamentals?u=76281980&t=217)** So now that you understand AWS's services, let's discuss the different ways by which you can connect to the AWS cloud.

> [!info]- Semantic Content
>
> **Env Vars:** aws (21), iso (2), soc1 (1), pci (1), dss (1)
> **CLI Commands:** aws (21)
> **Code Keywords:** let (2), this, (1), case, (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** for example (1), such as (1)
> **Speakers:** - [instructor] (1)

#### Tools to connect with AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=0)** - [Instructor] Before we begin exploring the AWS services, let's look at the different ways by which you can connect to and interact with AWS.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=8)** To connect with your AWS account, you can use the AWS Management Console.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=13)** This is the web user interface and a commonly used method.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=16)** You can also use the CLI, or command line interface.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=20)** This requires you to download and configure the tool before connecting to AWS.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=24)** But once configured, you can control multiple AWS services and automate them through scripts.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=31)** You can also use the SDKs, or software development kits.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=35)** In addition to the above two methods, AWS also provides SDKs that allow you to develop applications on AWS in several supported languages, such as Java, .net, Node.js, PHP, Python, and more.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=51)** You will find more information about SDKs in the online documentation.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=56)** And you can also use the AWS cloud shell.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=58)** This is a browser-based shell that provides a similar experience as the CLI.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=63)** More about this in a few minutes.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=65)** Now let's talk about how you can configure the AWS CLI on your local machine.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=70)** First, you will need to download the CLI installer, which is available for Windows, macOS, and Linux operating systems.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=77)** To download the installer, go to the URL, aws.[amazon.com/cli](https://amazon.com/cli).
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=84)** For this demonstration, we'll be using CLI Version Two, which is the latest version available from AWS.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=90)** Once you've installed the tool, it's just a matter of providing your account information to connect.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=96)** To configure the AWS CLI, you will need four pieces of information, access key ID, secret access key, AWS region, and output format.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=107)** The first two pieces of information, that is access key ID and secret access key, are available from the AWS Management Console.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=115)** As a best practice, AWS does not recommend using the root user account for everyday management tasks.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=122)** The root user account is the one that you use to create your AWS account.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=126)** Instead, AWS recommends creating an IAM user and using it for management tasks.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=132)** Now we'll switch to the AWS Management Console and learn how to get the information required to configure the AWS CLI.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=139)** From the AWS Console, use the Services dropdown menu at the top and navigate to the Security, Identity and Compliance section, and click IAM, or Identity and Access Management.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=153)** On the left navigation pane, click Users.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=157)** For this demonstration, you will create a new IAM user.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=162)** Click Add users.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=167)** Start by providing a user name.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=171)** Under access type, you have two options.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=174)** Enabling programmatic access will allow the user to connect with the AWS CLI.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=179)** Enabling AWS Management Console access will allow the user to sign into the Management Console we are seeing now.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=186)** Since you are creating this user for CLI access, enable Programmatic access.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=191)** Click Next Permissions.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=193)** In this step, you need to set permissions.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=196)** You can do this by adding a user to a group or copy permissions from an existing user or attach permissions policies to the user account.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=205)** For now, you will skip this step.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=208)** In a later video, we'll understand how to add users to groups and how to attach permissions policies to groups.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=214)** Click Next Tags.
>
> **[3:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=218)** Tags are key value pairs that you associate with objects for classification, filtering, and cost management purposes.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=226)** For now, you will skip Tags.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=229)** Click Next Review.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=231)** You are on the review step.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=232)** The message advises that the user has no permissions.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=235)** Click Create user.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=238)** You've created the user.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=240)** Now you can view the access key ID and secret access key.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=244)** Also, note the message at the top that this is the last time these credentials will be available to download.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=253)** So download or copy these credentials and save them in a secure location.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=257)** Now switch to your terminal to configure the AWS CLI.
>
> **[4:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=262)** Before proceeding further, make sure you've downloaded and installed the AWS CLI.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=268)** I'm demonstrating on macOS, but the process is largely similar for other operating systems and is documented on the AWS website.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=277)** Type the command aws configure and press Enter.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=281)** At the prompt, enter the access key ID you copied, followed by the secret access key.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=288)** The default region identifies the AWS region you want to send your request to by default.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=294)** Typically, this is the region closest to you, but it can be any region.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=299)** Set it to a region of your choice and press Enter.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=302)** The default output format specifies how the results are formatted.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=306)** This can be JSON, YAML, YAML Stream, text, or table.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=312)** For now, leave it at the default, which is JSON.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=315)** You've configured the AWS CLI and you're ready to tag commands to control AWS services.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=321)** Let's verify if the installation is working by using the command aws iam list-users this command will list your IAM users.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=330)** As expected, the command doesn't return any users, because this user account doesn't have any permissions yet, but the error message tells us that the installation is successful.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=341)** When using the AWS CLI, the CLI reference document is convenient for learning the commands and syntax.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=347)** You will find this in the AWS documentation.
>
> **[5:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=350)** Now let's talk about the AWS CloudShell.
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=353)** It provides a similar experience as the CLI, but requires no download or installation .
>
> **[5:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=359)** Back to the AWS Management Console, return to the home screen by clicking the AWS icon on the top left.
>
> **[6:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=367)** Then click the terminal icon at the top right.
>
> **[6:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=371)** Doing so will open CloudShell.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=373)** Dismiss the welcome message and the terminal will be ready to use in a few moments.
>
> **[6:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=379)** An important thing to note is that the CloudShell inherit the credentials of the user signed into the AWS Management Console.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=385)** So you've seen the different methods to interact with and control AWS services.
>
> **[6:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/tools-to-connect-with-aws?u=76281980&t=390)** Now let's start exploring the different services.

> [!info]- Semantic Content
>
> **Env Vars:** aws (35), cli (15), iam (4), json (2), yaml (2)
> **CLI Commands:** aws (38), find (2), node (1), php (1), python (1)
> **Code Keywords:** let (5), interface (2), switch (2), type, (1), default. (1)
> **Prerequisites:** configure (6)
> **Tools:** terminal (3), command line (1), aws console (1)
> **UI Navigation:** switch to (2), go to (1), dropdown (1), navigate to (1)
> **Code Identifiers:** macos (2)
> **Exercise Files:** download the (2)


### 3. Managing Identities and Access

#### Introduction to IAM
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=0)** - [Instructor] Identity and access management, or IAM, is a service that allows you to manage access to AWS services and resources.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=8)** You do this by creating users and groups and use permissions to allow or deny their access to resources.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=14)** When you first create your AWS account you have a single sign-in identity that has complete unrestricted access to all AWS services and resources in the account.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=24)** This identity is called the AWS root user account.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=27)** As an administrator, it is vital to ensure that the root user account is not used for everyday tasks, including administrative wants.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=35)** Instead create IAM users with appropriate permissions.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=40)** With IAM, you can enable will multifactor authentication for your users.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=45)** This adds an extra layer of authentication and improves the security of your account.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=49)** You can also define granular permissions so you can grant only the required permissions for users and resources.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=56)** For example, if you need to provide only permissions to list EC2 instances but not allow making any changes, like starting or stopping them, you can do this easily with IAM.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=67)** With IAM, you can also share access to your AWS account.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=72)** This allows you to grant other users permissions to administer and use resources in your AWS account without sharing your password or access key.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=81)** As an administrator, you might have a situation where your organization owns multiple AWS accounts such as production, development, testing, and more, and you need to share resources in one account with users in a different account.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=96)** You can do this with IAM.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=98)** You can also use IAM to configure identity federation.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=102)** This allows you to configure temporary access for users who already have a password elsewhere.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=107)** For example, in your corporate network or with an internet identity provider like Amazon, Facebook, or Google.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=115)** Administrators find this useful as they can use existing identities instead of creating new IAM users.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=122)** With IAM, you can also to analyze and identify unintended access.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=128)** You can use the IAM access analyzer tool to identify resources such as S3 buckets that users may have unintentionally shared with external entities posing a security risk to your organization.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=141)** Bear in mind that IAM is free to use, but you're charged when you or your AIM users use other AWS resources.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=149)** So for example, you are not charged for creating a user named Bob but if Bob creates other resources like EC2 instances or S3 buckets, they are charged.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=160)** As you've seen, IAM forms the basis of managing and controlling access in your AWS account.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-iam?u=76281980&t=167)** Now that we have a basic understanding of its capabilities let's learn how to configure IAM entities.

> [!info]- Semantic Content
>
> **Env Vars:** iam (13), aws (9), ec2 (2), aim (1)
> **CLI Commands:** aws (9), find (1)
> **Analogies:** for example (3), such as (2)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1), is called (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### IAM users and groups
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=0)** - An IM user is an entity you create in your AWS account to represent a person or application.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=7)** A user in AWS consists of a name and credentials.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=11)** When you create a user in IAM, it has no permissions by default.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=16)** The user is not authorized to perform any AWS operations or access any AWS resources.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=23)** There are two primary methods by which IAM users access AWS.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=28)** First is using a console password.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=31)** This is a password that the user can type to sign into the AWS management console.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=36)** And next is access keys.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=38)** This is a combination of access key ID and a secret access key that the user can use to make programmatic calls to AWS.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=46)** A user can have both a console password and access keys or any one of them.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=51)** Also, each IAM user is associated with only one AWS account.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=56)** And any activity performed by users in your account is billed to your account.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=63)** An IAM user group is simply a collection of IAM users.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=67)** User groups make it easy to assign permissions for multiple users.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=71)** For example, if you need to assign administrative permissions for five users, you can first add those users into a group and then assign permissions for the user group.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=81)** The users in the group will inherit those permissions.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=84)** Doing it this way reduces the administrative effort that would otherwise be needed in assigning permissions to the individual users.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=92)** A user group can contain many users and a user can belong to multiple user groups.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=98)** Also, user groups cannot be nested.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=101)** They can only contain users, not other user groups.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=105)** Now let's switch to the AWS management console and see how to configure users and groups.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=111)** From the IAM console, click users on the left navigation pane.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=116)** Here, you will see your IAM users.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=119)** Note that you will not see the root user account.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=123)** Click add users.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=125)** Provide a username.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=127)** Next, select the access type.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=130)** Access key for programmatic access and/or password for AWS management console access.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=137)** For this example, select password.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=140)** For the password, select the option to auto generate or provide a custom password.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=146)** The required password research checkbox will require the user to create a new password at first sign in.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=153)** Click next permissions.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=156)** For now, you will skip adding permissions.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=159)** Click next tags.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=162)** Configure a tag key and value that allows you to identify and organize this user.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=168)** Click next review.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=170)** Review your selections and click create user.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=175)** The user has been created and here is the login information.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=179)** You can also download a CSV containing this information.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=183)** Note that once you navigate away from here you will not be able to see this information again.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=189)** Also note the sign-in URL that your users will use to sign into the management console.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=195)** Click close.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=197)** From the list of users, click the user you just created.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=202)** Notice the user ARN or Amazon Resource Name.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=206)** It is a unique identifier for this user object.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=209)** Now let's create a user group and add this user to it.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=212)** On the left navigation pane, click user groups.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=217)** Click create group.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=219)** Provide a name for the group.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=221)** From the list of users, select the ones that you'd like to add to this group.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=226)** Note that you can also add users later.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=231)** Optionally, you can also attach permission policies to the group.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=236)** Scroll to the bottom and click create group.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=241)** You've created the group.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=242)** Now click the group name.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=244)** Here is the ARN, or Amazon resource name, for the group.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-users-and-groups?u=76281980&t=247)** You can add more users, attach permissions, and use the access advisor to learn about the services that this group can access and when those services were last accessed.

> [!info]- Semantic Content
>
> **Env Vars:** aws (10), iam (7), arn (2), csv (1), url (1)
> **CLI Commands:** aws (10), make (2)
> **Code Keywords:** let (2), default. (1), switch (1), type. (1), require (1)
> **UI Navigation:** select the (3), switch to (1), checkbox (1)
> **Definitions:** is a  (3), is an  (1)
> **Warnings:** note that (3)
> **Prerequisites:** configure (2)
> **Analogies:** for example (1)

#### IAM roles
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=0)** - As an administrator, an IAM entity type that you'll commonly work with, is IAM roles.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=6)** An IAM role is an identity that you create in your account, that has specific permissions.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=12)** It can be assumed by a user or a service that needs it.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=16)** For example, consider two services in your AWS account.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=20)** Amazon EC2 and Amazon S3.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=23)** an EC2 instance wants to access the contents of an S3 bucket.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=28)** Even though both services belong to your AWS account, access is not permitted.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=34)** This is because an AWS service cannot access another service by default.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=38)** To allow this access, you can create an IAM role, with permissions on the Amazon S3 service, and attach it to the EC2 instance.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=47)** Doing so will enable the EC2 instance, to access the bucket contents.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=52)** Note that, an IAM role is similar to an IAM user, in that it is an AWS identity with permissions policies, that determine what the identity can, and cannot do in AWS.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=64)** However, the key difference is that the role is intended to be assumable by anyone who needs it.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=71)** And unlike an IAM user, a role does not have credentials such as a password, or access keys associated with it.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=79)** Now let's switch to the AWS management console, and see how to create an IAM role.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=84)** We'll use the example of the EC2 instance, to understand the effects of attaching a role.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=91)** I'm here at the AWS management console, and I'm currently in the EC2 service.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=96)** I've got a running windows EC2 instance.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=99)** I'll switch to this instance terminal.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=102)** On this instance, I've installed the AWS CLI, but I haven't configured it with key and secret access Key details.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=109)** I'll begin with the command, AWS S3LS.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=112)** This command allows you to enate the S3 buckets in your account.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=116)** It returns a message, that it is unable to locate credentials, and that I should configure it Using the command, AWS configure.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=123)** Let's create an IAM role to address this.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=127)** Back to the AWS console, navigate to the IAM service.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=132)** On the left navigation pane, click roles.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=137)** Click create role.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=140)** In this step, you will select the trusted entity type.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=143)** Use the AWS service option, to allow an AWS service like in our example, the EC2 service, to perform action on your behalf.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=153)** Use the another AWS account option, to establish a trust relationship between your AWS account, and another AWS account.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=162)** This option is useful, when you need to provide another AWS account access to your resources.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=168)** Use the web identity option, to allow web identity or open ID connect federated users, to assume this role and perform actions in your account.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=177)** And use the SAML 2.0 Federation option, to allow SAML 2.0 federated users, to assume this role, and perform actions in your account.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=186)** Select AWS service.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=189)** From the list of services, select EC2, and then select EC2 again.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=198)** Click next permissions.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=201)** In this step, you will provide permissions by attaching a policy.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=206)** In the search bar, type S3 and select the policy titled, Amazon S3 read only access.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=214)** As the name implies, this policy grants read only permissions on S3 resources.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=220)** Click next tags, and configure the required tags.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=224)** Click next review.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=227)** Provide a name for the role.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=230)** Then click, create role.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=234)** The role has been created.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=236)** Now let's attach it to the EC2 instance, to provide the required permissions.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=241)** Use the services dropped on menu, and navigate to the EC2 service.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=247)** Select the desired instance, click the button, click security, and then click modify IAM role.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=258)** From the dropdown, select the role you just created, and click save.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=264)** Now the role will provide the configured permissions to the EC2 instance.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=268)** Time to test.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=269)** Back to the terminal window of the EC2 instance, Let's try the command again.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=274)** I'll use the up arrow to re-paint the command, AWS S3 LS.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=278)** And now we can see that, the S3 buckets are listed.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=282)** As you can imagine, this is a secure way of configuring CLI access, because you're not storing credentials locally on the machine.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=290)** So you've seen how you can use IAM roles, to delegate access to applications or services that you usually don't have access .
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=297)** Roles also have other users, like providing access to federated users, or users with identities outside of AWS, and providing access to AWS accounts owned by third parties.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=308)** For example, a third party company, managing your AWS resources.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-roles?u=76281980&t=313)** You will find more information about these use cases, in the AWS IAM documentation.

> [!info]- Semantic Content
>
> **Env Vars:** aws (23), ec2 (14), iam (13), cli (2), saml (2)
> **CLI Commands:** aws (23), ls (1), find (1)
> **Code Keywords:** let (4), switch (2), default. (1), this. (1), type. (1)
> **UI Navigation:** select the (4), switch to (2), navigate to (2), dropdown (1)
> **Analogies:** for example (2), similar to (1), such as (1), imagine (1)
> **Tools:** terminal (2), aws console (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** configure (3)

#### IAM policies
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=0)** - [Instructor] Now let's talk about IAM policies.
>
> **[0:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=2)** An IAM policy is an object in AWS that when associated with an identity or resource defines its permissions.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=11)** AWS evaluates these policies when an IAM principle that is a user or role makes a request.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=17)** Permissions in the policies determine whether the request is allowed or denied.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=22)** IAM policies define permissions for actions regardless of the method you use to perform the operation.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=28)** For example, if a policy allows a user to launch an EC2 instance, the user with that policy can launch an EC2 instance from the AWS management console, the AWS CLI or Command Line Interface, or the AWS API.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=43)** Now let's switch to the AWS management console and see policies in action.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=48)** From the IAM dashboard, click policies on the left navigation pane.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=54)** Here you will see any policies you may have created marked as customer managed policies and AWS managed policies.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=62)** Now let's examine a policy.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=64)** First, search for S3 and then click the policy titled Amazon S3 full access.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=70)** This policy has a simple configuration and works well to understand policies at a high level.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=76)** Under the permissions tab, you will see the JSON document that defines the policy.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=81)** It includes an effect which can be allow or deny, an action definition that establishes a list of actions that the policy allows or denies, and a resource definition that specifies a list of resources to which the actions apply.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=97)** In this case, the asterisk includes everything.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=100)** These elements are contained in a statement which is the main policy element.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=105)** The policy usage tab shows the IAM entities to which the policy is attached.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=111)** The access advisor tab is handy for administrators.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=114)** It shows when the services related to the policy were last accessed.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=119)** Now let's create a policy that grants permissions to list S3 buckets.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=124)** Navigate back to the policy section, then click create policy.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=130)** Under visual editor, expand the service dropdown and search and select S3.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=140)** Doing so will list the permissions that you can add to the policy.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=144)** Expand the list permissions.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=146)** To allow list permissions for specific buckets, select list bucket and provide the resource IDs of the required buckets.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=155)** For this demonstration, select list all my buckets.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=159)** This permission will allow the user to list all buckets in the subscription.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=163)** On the next step, add the required tags, then click next review.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=170)** Provide a name for the policy, then click create policy.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=177)** You've created the policy and you can now assign it to a user or group.
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=182)** Now let's assign this policy to a group.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=184)** On the left navigation pane, click user groups, then click an existing group.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=190)** Click the permissions tab and click add permissions, attach policies.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=197)** Select the policy you created.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=200)** Click add permissions.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=204)** You've attached the policy.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=206)** Now, when users of this group log in, they'll have the permissions to list all the S3 buckets.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=213)** So you've seen how policies are an essential tool for administrators to control access.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=217)** Note that in addition to configuring allow permissions, you can also configure deny permissions to block specific actions.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-policies?u=76281980&t=224)** To get a good understanding of how policies work, I encourage you to create different policies, attach them to another account you own and see the changes that result from them.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), iam (6), ec2 (2), cli (1), api (1)
> **Code Keywords:** let (5), interface (1), switch (1), case, (1)
> **CLI Commands:** aws (7)
> **UI Navigation:** switch to (1), dropdown (1), select the (1)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** command line (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)

#### IAM best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=0)** - [Speaker] Administrators are responsible for ensuring the security of their AWS accounts.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=5)** AWS recommends implementing some best practices to secure your IAM configuration.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=10)** First is to lock away your root user access keys.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=13)** AWS recommends deleting your root user access key because it grants full access to all your AWS services, including your billing information.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=22)** So you should delete them if you don't need them, or secure and rotate them regularly, if you must keep them.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=28)** Also, AWS recommends that you never share your root user password or access keys with anyone.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=34)** The next recommendation is to create individual IAM users.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=38)** AWS recommends that you don't use root user credentials to access AWS. Instead create individual user accounts for anyone who needs access.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=46)** Also, create an IAM user account for yourself.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=50)** Give that user administrative permissions and use that account for all your work.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=55)** By providing separate accounts to each user you can give each user a unique set of security credentials, grant different permissions to each user, and if necessary, change or revoke the user's permissions any time.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=67)** The next recommendation is to configure a strong password policy for your IAM users.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=72)** AWS recommends configuring a password policy requiring users to create strong passwords and periodically rotate their passwords.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=81)** From your AWS account, navigate to the IAM service.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=87)** Click account settings on the left navigation pane, then click change under password policy.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=93)** Here you can require users to include an uppercase, lowercase, number, and non-alphanumeric character.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=101)** You can also enable password expiration and prevent password reuse.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=107)** The next recommendation is to enable multifactor authentication.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=111)** AWS recommends enabling multifactor authentication on your root user account, and for all users in your account.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=118)** By doing so, your account resources are still secure if the password or access keys are compromised, because of the additional authentication requirement.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=127)** The next recommendation is to grant least privilege.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=131)** When you need to grant permissions, determine what your users or roles need to do, and then design policies that allow them to perform only those tasks.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=140)** Start with a minimum set of permissions, and grant additional permissions when required.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=145)** Use access levels to review IAM permissions.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=148)** AWS recommends regularly reviewing your IAM policies to ensure that they're only granting the least privilege needed to perform the necessary actions.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=157)** When reviewing a policy, you can use the access level information to determine included actions.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=164)** Back to the IAM console, click policies on the left navigation pane, and then click a policy name.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=173)** Under the permissions tab, with the policy summary view turned on, you will see the access level column.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=180)** For example, this policy grants limited list and write permissions on CloudWatch logs.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=186)** To see the exact permissions granted, switch to the JSON editor.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=195)** The next recommendation is to use roles for applications that run on Amazon EC2 instances.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=201)** When you have applications running on EC2 instances, they will need credentials to access other AWS services.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=208)** A common misconfiguration is to store AWS credentials directly within the EC2 instance and allow applications running on the instance to use those credentials.
>
> **[3:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=218)** As you can imagine, this is a security risk.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=221)** A secure way to grant permissions to the application is to create an IAM role with the required permissions and attach it to the EC2 instance.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=229)** This way you won't have to store credentials on the instance and the application will have the required access.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=236)** And lastly, monitor activity in your AWS account.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=241)** Logging allows you to determine the actions users have taken in your account, and the resources used, along with the timestamp.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=248)** AWS CloudTrail allows you to log activities occurring in your AWS account.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=253)** AWS Config is a service that provides a historical record of the configuration of your AWS resources, including IAM entities such as users, groups, roles, and policies.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=265)** It can help determine the permissions that were granted to a user or group at a specific time.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=270)** We'll configure these tools in the later videos.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/iam-best-practices?u=76281980&t=273)** Other best practices include not sharing access keys, removing unused permissions, and rotating credentials regularly. AWS has a few other best practices recommendations in their documentation, and I encourage you to check them as well.

> [!info]- Semantic Content
>
> **Env Vars:** aws (19), iam (10), ec2 (4), json (1)
> **CLI Commands:** aws (19)
> **Code Keywords:** delete (1), require (1), switch (1)
> **Analogies:** for example (1), imagine (1), such as (1)
> **UI Navigation:** navigate to (1), switch to (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (2)
> **Speakers:** - [speaker] (1)


### 4. Managing Compute

#### Amazon Machine Image
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=0)** - [Instructor] AWS provides scalable compute capacity in the form of virtual machines, known as EC2 instances.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=7)** These instances are powered by preconfigured templates known as Amazon Machine Images, or AMIs, that package the bits needed for your instances, such as operating system and additional software.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=19)** Essentially an AMI contained the information required to launch an instance.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=24)** You must specify an AMI when you launch an instance.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=28)** You can launch multiple instances from a single AMI.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=32)** When you do so, all instances will have the same configuration.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=36)** A feature of AMI that administrators find particularly useful is customization.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=42)** You can launch an instance from an existing AMI, then customize the instance.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=47)** For example, install monitoring software on the instance and save this updated configuration as a custom AMI.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=54)** When users launch instances from this new custom AMI, it will include your customizations.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=60)** This way administrators can authorize AMIs that users should use to launch instances.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=66)** The AMIs available to you to launch an EC2 instance will depend on the following selections.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=72)** First is region.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=75)** This is because AMIs are regional so not all AMIs are available in all regions.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=81)** Other factors include operating system, architecture, launch permissions, and storage of the root device.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=89)** The first three items, region, operating system, and architecture, are self explanatory.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=95)** Let's talk about launch permissions and storage of the root device.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=99)** The owner of an AMI determines its availability by specifying launch permissions.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=105)** Launch permissions can be public, meaning the owner grants permissions to all AWS accounts.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=110)** Or explicit, meaning the owner grants launch permissions to specific AWS accounts.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=115)** Or implicit, meaning the owner has implicit launch permissions for an AMI.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=120)** Talking about storage for the root device, all AMIs are categorized as either backed by Amazon EBS or backed by Instance Store.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=130)** Backed by Amazon EBS means that the root device of an instance launched from the AMI is an Amazon Elastic Block Store volume or Amazon EBS volume.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=140)** Amazon EBS provides persistent block level storage for instances.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=145)** More on this in an upcoming video.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=148)** Backed by Instance Store means that the root device for an instant launch from the AMI, is an Instance Store volume.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=156)** Instant Store volumes provide temporary block level storage for instances.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=161)** Now let's switch to the AWS management console and look at AMIs.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=166)** From the AWS management console, use the services dropdown menu and navigate to the EC2 service.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=173)** You will find this under the compute section.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=176)** On the left navigation pane, click instances.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=179)** Doing so will list your EC2 instances.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=183)** Click launch instances.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=186)** You can see that the first step is to select an AMI.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=190)** This is because other settings such as storage size and storage type, which can be Amazon EBS or Instance Store, depend on your AMI selection.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=198)** And you can configure those set in the following steps.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=202)** Every AMI includes a name, an AMI ID, the root device type, virtualization type, ENA or Elastic Network Adapter information, and architecture.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=214)** AMIs that you own are listed under my AMIs.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=220)** Under AWS marketplace, you will find AMIs published by third parties.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=226)** You can use these to launch software directly on your EC2 instances.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=231)** This allows administrators to use many of the same software they use in their on premises environment in the AWS Cloud.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=238)** Public AMIs shared by other AWS accounts are listed under community AMIs.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=243)** Click Cancel and Exit.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=247)** You will also find these AMIs listed under the AMI section.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=252)** Here you can view AMIs owned by you, private images, and public images.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=260)** To launch an instance using any one of these, select the required AMI and click Launch instance from image.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=268)** So that's about AMI.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=270)** The important thing to bear in mind is that the initial configuration of your instance will depend on the AMI you begin with.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=277)** And using IAM policies, you can control who's allowed to create, import or export images, or in other words, AMIs.
>
> **[4:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-machine-image?u=76281980&t=285)** And who's allowed to use them to launch instances.

> [!info]- Semantic Content
>
> **Env Vars:** ami (19), aws (8), ec2 (5), ebs (5), ena (1)
> **CLI Commands:** aws (8), find (4)
> **Code Keywords:** public (3), type, (3), let (2), self (1), switch (1)
> **Definitions:** known as (2), means that (2), is an  (2), in other words (1)
> **UI Navigation:** switch to (1), dropdown (1), navigate to (1), select the (1)
> **Analogies:** such as (2), for example (1)
> **Prerequisites:** required to (1), install (1), configure (1)
> **Speakers:** - [instructor] (1)

#### EBS volumes
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=0)** - [Instructor] Amazon EBS, or Elastic Block Store, provides block-level storage for EC2 instances.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=6)** EBS volumes are raw, unformatted block devices, so you can create a file system on top of these volumes or use them in any way you would use a block device, just like how you'd use a hard drive.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=18)** EBS volumes can persist independently from the life of an instance.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=23)** So you can terminate your EC2 instance, but continue to retain the EBS volume attached to it.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=28)** EBS volumes are well suited for use as the primary storage for file systems and databases or applications requiring access to raw, unformatted block-level storage.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=40)** EBS volumes support encryption using AES-256 and an Amazon-managed key infrastructure.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=46)** This allows you to meet your data at rest encryption requirements.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=50)** EBS volumes are available in two main types, solid-state drives or SSD.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=56)** These are optimized for transactional workloads involving frequent read or write operations, like in the case of databases.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=63)** And the second type is hard disk drives or HDD.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=67)** These are optimized for large streaming workloads, like big data and log processing.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=73)** SSD and HDD volume types are classified into subtypes, each supporting a specific use case and performance requirement.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=81)** To know more about these volume types, please refer to the EBS documentation.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=86)** EBS volumes also support point-in-time backups, known as snapshots.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=91)** You can restore these snapshots to create new EBS volumes or move your existing volumes across availability zones.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=98)** Now let's switch to the Amazon EC2 console and look at EBS volumes.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=104)** From the Amazon EC2 console, click Volumes on the left navigation pane.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=110)** Here, you will find volumes attached to your EC2 instances.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=114)** For example, here is a volume attached to an instance, here is the Volume ID, Type, Size, IOPS or Throughput information will depend on the volume type, Created Date, Availability Zone, Volume State, Status, and Encryption information.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=138)** To create a new volume, click Create volume.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=143)** Start by selecting a Volume type, then define the size.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=151)** The maximum available size depends on the chosen volume type.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=156)** The IOPS or Throughput information also depends on the volume type.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=161)** General Purpose and Provisioned IOPS volume types will have IOPS information, while Cold HDD and Throughput Optimized volume types will have throughput information.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=172)** Then select the Availability Zone where you'd like to create the volume.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=175)** Remember, that you can only attach the volume to an instance if they're both in the same availability zone.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=181)** If you'd like to create this volume by restoring from a snapshot, provide the Snapshot ID.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=190)** Optionally, you can encrypt the volume and configure tags.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=196)** Then click Create volume.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=200)** You've created the volume.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=202)** To attach it to an instance, select it, click Actions, and then select Attach volume.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=214)** Select a desired instance, which must be in the same availability zone, and click Attach volume.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=224)** Once attached, you will need to initialize it by logging into the instance, just like how you would normally initialize a hard drive connected to a computer.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=233)** You will will find more information about this in the EBS documentation.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=237)** You can also create EBS volumes when you're launching an EC2 instance.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=241)** We'll look at this in an upcoming video.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=244)** As you've seen, EBS volumes are a foundational element for EC2 instances.
>
> **[4:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ebs-volumes?u=76281980&t=249)** Now it's time to learn how to launch an EC2 instance.

> [!info]- Semantic Content
>
> **Env Vars:** ebs (14), ec2 (8), iops (4), hdd (3), ssd (2)
> **Code Keywords:** type, (3), type. (2), continue (1), let (1), switch (1)
> **Analogies:** just like (2), for example (1)
> **CLI Commands:** find (2)
> **UI Navigation:** switch to (1), select the (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Launching an EC2 instance
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=0)** - [Instructor] An important aspect of an administrator's job is to create and manage virtual machines.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=5)** Virtual machines on AWS are known as EC2 instances or elastic compute cloud instances.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=11)** Let's understand how to create EC2 instances.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=14)** From the EC2 console, click instances on the left navigation pane and then click launch instances.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=22)** The first step is to select an AMI.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=25)** For this example, select a Windows server base AMI.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=35)** In the second step, you will select an instance type.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=38)** AWS provides instance types with varying combinations of CPU, memory, storage, and networking capabilities.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=47)** Some instance types provide more compute capacity, some have more memory, while others offer a balance of compute, memory and storage.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=57)** For a comparison of the instance types, please refer to the EC2 documentation.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=62)** For this example, select t3 medium.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=66)** This instance type provides two VCPUs and four GB of memory.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=70)** Bear in mind that the pricing of your instance depends on the instance type.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=75)** You will find more information about this in the EC2 instance pricing document.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=80)** Click next, configure instance details.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=85)** In this step, you can configure various instance details.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=89)** Important ones include the number of instances, purchasing option, network, subnet, IAM role, and user data.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=102)** If you'd like to learn more about these settings in detail, please refer to my course titled Amazon EC2 Fundamentals in the LinkedIn Learning Library.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=110)** For now, ensure that you set auto assign public IP to enable so that the instance will receive a public IP address.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=119)** Click next, add storage.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=122)** In this step, you will see the root volume that AWS will attach to the instance which is 30 GB for Windows instances.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=130)** Note that you have the option to attach additional volumes.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=134)** Click next, add tags.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=137)** In this step, configure tags that will help identify and organize your instance.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=142)** Adding tags is a recommended practice.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=145)** Add a name tag.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=149)** Click next, configure security group.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=152)** In this step, you will configure a security group.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=155)** Think of a security group as a virtual firewall attached to your instance.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=159)** It controls inbound and outbound traffic for your instance.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=162)** By default, all outbound traffic is allowed and you can define your inbound traffic rules here.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=170)** Select the option to create a new security group.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=174)** Then provide a name and description.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=177)** Note that a rule to allow inbound RDP traffic is already defined because you selected a Windows AMI.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=185)** If you had chosen a Linux AMI, a default rule to allow SSH will be configured.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=190)** Set the source of this rule to anywhere.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=193)** Note that this is not a recommended practice from a security standpoint, and you should only allow inbound RDP traffic from required sources.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=201)** But this configuration works well for a lab environment.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=204)** Click next, review and launch.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=207)** Review your selections and click launch.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=211)** You will be prompted to specify a key pair to connect to your instance.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=215)** AWS uses a key pair consisting of public and private keys to connect to your instance.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=222)** If you already have a key pair in this region, select from the dropdown.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=227)** Otherwise, select the option to create a new key pair and provide a key pair name.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=234)** Then click download key pair.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=238)** Doing so will download the key file on your local machine.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=242)** Note that you will not be able to download the key file after you navigate away from this page.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=247)** Now click launch instances.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=251)** You've launched the instance.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=253)** Click view instances.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=256)** Doing so will show the instance you launched and any other instances configured in this region.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launching-an-ec2-instance?u=76281980&t=261)** Now it's time to connect to the instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (6), aws (4), ami (4), rdp (2), cpu (1)
> **Code Keywords:** public (3), type. (2), let (1), default, (1), private (1)
> **CLI Commands:** aws (4), find (1), ssh (1)
> **Prerequisites:** configure (5)
> **Warnings:** note that (4)
> **UI Navigation:** select the (2), dropdown (1)
> **Exercise Files:** download the (2)
> **Definitions:** known as (1), is a  (1)

#### Connect to the EC2 instance
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=0)** - [Instructor] With the EC2 instance up and running it's now time to connect to it.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=4)** To connect, you will require the public IP address of the instance.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=8)** From the EC2 console navigate to the instances section, select the instance you would like to connect to and copy its public IP address.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=18)** Next, you will need a remote desktop client to connect.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=21)** The to connect are the same.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=23)** If you're trying from a Windows, Linux, or Macintosh computer.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=27)** Open a remote desktop client and add the IP address you copied.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=34)** Initiate a connection.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=36)** In a few seconds you will be prompted for the username and password.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=41)** note that Windows instances take about four minutes before allowing a connection.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=46)** If you don't see a prompt it could be that four minutes haven't elapsed since you launched the instance or your security group does not allow inbound RDP traffic.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=55)** The default username is Administrator.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=57)** To get the password, navigate back to the EC2 console.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=62)** With the instance selected click connect.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=67)** Navigate to the RDP client section and click get password.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=74)** Then point your browser to the private key file you downloaded earlier.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=78)** Then click decrypt password, copy the password and navigate back to the remote desktop client.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=87)** Paste the password and press enter, and you will be connected.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=95)** You are now ready to configure the server.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=97)** Now let's understand how to connect to a Linux instance.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=101)** Linux uses the SSH protocol for authentication.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=106)** Navigate back to the instances section.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=108)** Here I have a running Linux instance.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=111)** First, copy the public IP address.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=117)** To connect to a Linux instance from a Linux or Mac computer, use the built in terminal.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=122)** The command is ssh followed by the username, which is ec2 hyphen user for Amazon Linux.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=131)** To know the username for other Linux AMIs please refer to the EC2 documentation.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=136)** Next you'll need to use the @ symbol, followed by the public IP address of the instance, then use the i switch and follow it up with the name of the private key file.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=147)** When you press enter, you may see this error message.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=151)** You can fix this simply by changing the permissions of the key file.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=155)** Use the command chmod 400, followed by the file name.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=162)** Now try the SSH command again and you'll be connected to the instance.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=167)** To connect to a Linux instance from a Windows computer, you will need an SSH client like PuTTY.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=174)** You will find more information about this in the EC2 documentation.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/connect-to-the-ec2-instance?u=76281980&t=178)** You'll also find this and more related information in the Amazon EC2 Fundamentals course in the LinkedIn Learning Library.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (6), ssh (3), rdp (2)
> **Code Keywords:** public (4), private (2), require (1), let (1), switch (1)
> **CLI Commands:** ssh (4), find (2), chmod (1)
> **UI Navigation:** select the (1), navigate to (1)
> **Prerequisites:** configure (1), you'll need (1)
> **Tools:** terminal (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Launch templates
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=0)** - [Instructor] In the previous video, we looked at the steps to launch an EC2 instance.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=4)** In total there were seven steps to complete to launch an instance.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=8)** As administrators, you will often find yourself working with EC2 instances, and each time you launch an instance you will need to walk through the same set of steps.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=18)** You will often notice that you're using a similar configuration for each instance, like the same AMI, the same security group, or the same key-pair.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=27)** Launch Templates aim to simplify the steps required to launch an instance.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=32)** A Launch template contains configuration information to launch an instance.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=36)** It stores the launch parameters, so that you do not have to specify them every time you launch an instance.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=43)** For example, a Launch Template can contain the AMI ID, instance type, and network settings that you typically use to launch instances.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=52)** For each Launch template you can create one or more numbered versions.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=57)** Each version can have different launch parameters.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=59)** When you launch an instance from a Launch Template you can use any Launch Template version.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=65)** For example, consider a Launch Template named Linux Server Template.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=70)** It has three versions.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=71)** Version One contains information about the instance type, AMI, key-pair, and subnet.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=78)** Version Two has a different instance type and includes a security group.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=82)** And Version Three has a different AMI ID and security group, but these are versions of the same Template, the Linux Server Template.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=91)** Having different versions allows you to launch servers with varying configurations.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=95)** Now let's switch to the EC2 console and learn how to configure a Launch Template.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=100)** From the EC2 console, click Launch Templates on the left navigation pane.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=106)** Then click Create Launch Template.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=110)** Start by providing a name.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=112)** If you'd like to include an AMI definition in the Template, add it here.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=117)** Then specify the instance type.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=121)** Specify the key-pair that you'd like to use to log into the instance.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=126)** Select the Security group you'd like to attach to your instance.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=129)** If you need additional network interfaces for the instance, add them here, else your instance will have one interface.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=137)** If you selected an AMI, you will see the default volume.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=141)** You can add additional volumes here.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=144)** Configure tags that you would like to associate with instances created using this Launch Template.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=150)** You can configure more settings under Advanced details.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=154)** For now, leave these at the defaults and click Create Launch Template.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=160)** To see the template you created, click View Launch Templates.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=165)** Note that the default and latest version is one, the one you just created.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=172)** To launch an instance using this template, select the template, click the Actions button, and then click Launch Instance from Template.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=185)** The settings configured in the template are auto populated and you have the opportunity to modify them.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=192)** When you're ready, click Launch Instance from template.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=198)** The instance has been launched and here is the instance ID.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=201)** Click on the instance ID to see the instance.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=205)** With the instance selected, navigate to the Tag section.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=210)** Here you will see a Tag containing the template ID used to launch the instance, and another tag containing the template version.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=217)** As you can see, Launch Templates simplify the creation of instances by saving your preferences.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=224)** Now let's add a new version to the template.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=227)** To add a new version, navigate back to the list of templates, select the desired template, click the Actions button, and then click Modify template.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=237)** Add the desired changes.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=239)** For example, add a new Security Group.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=246)** When you've completed the changes, scroll down, and click Create template version.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=252)** The message at the top confirms that you've created a new version.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=257)** Back to the list of templates.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=259)** You can see that the default version is one and the latest version is two.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=265)** If you'd like to change the default version, click Versions, then select the desired version.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=272)** Use the Actions button, and click Set default version.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=279)** So as you've seen, Launch Templates make it easy to launch instances.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=284)** They're especially useful if you use different instance configurations for different purposes, like a configuration for your development servers, and another for your testing servers.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/launch-templates?u=76281980&t=294)** Simply configure them as Launch Templates and use them to launch instances.

> [!info]- Semantic Content
>
> **Exercise Files:** template (26)
> **Env Vars:** ami (6), ec2 (4)
> **UI Navigation:** select the (4), switch to (1), click on (1), navigate to (1), scroll down (1)
> **Code Keywords:** type, (2), let (2), switch (1), type. (1), interface (1)
> **Prerequisites:** configure (4)
> **Analogies:** for example (3)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** previous video (1)

#### Elastic IP and Elastic Network Interface
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=0)** - [Instructor] Each EC2 instance has a default network interface, or in other words, an elastic network interface, known as the primary network interface.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=8)** An elastic network interface is a logical networking component, that represents a virtual network card.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=15)** It provides network connectivity to an instance.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=18)** Elastic network interfaces have attributes like physical network interfaces.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=23)** Such as IPv4, and/or IPv6 addresses, and a MAC address.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=29)** You cannot detach the primary network interface of an instance, but you can create additional network interfaces and attach it to the instance.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=37)** By doing so, you can connect an instance to multiple networks.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=41)** A typical use case for this is to separate management and production traffic.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=46)** One interface can serve production traffic, while the other one can be used for management purposes.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=52)** You can also detach an existing network interface, and attach it to another instance.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=57)** Doing so can be especially useful during times like maintenance.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=61)** You can route traffic from one instance to another, simply by detaching and reattaching the network interface.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=68)** The number of interfaces you can attach to an instance, depends on the instance type.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=73)** For example, t3 micro allows a maximum of two network interfaces.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=78)** T3 medium allows a maximum of three interfaces.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=81)** While t3 X large allows four.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=84)** You will find more about supported network interfaces in the EC2 documentation.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=89)** Now let's switch to the EC2 console, and see how to create and attach interfaces.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=95)** From the instances section select a running EC2 instance, and navigate to the networking tab.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=101)** Here you will see the attached interface, and its attributes, like public and private IPv4 addresses.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=110)** This interface is the primary interface, so it cannot be detached.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=115)** To attach a new interface, you will first need to create one.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=119)** On the left navigation pane, click network interfaces.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=125)** The interface listed here, is the one being used by the instance.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=130)** Note the availability zone, as you'll need to create a new interface in the same availability zone.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=137)** Click, create network interface.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=140)** Select the subnet corresponding to the availability zone.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=145)** You can choose to auto assign a private IPv4 address from the subnet range, or assign a custom IP address.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=152)** Select one or more security groups to regulate inbound and outbound traffic.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=157)** Add a tag to make it easy to identify the interface.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=162)** Click, create network interface.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=166)** You have created the interface.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=169)** Scrolling to the right side, you will see the interface status as available.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=173)** To attach this to an instance, select the interface, click the actions button, and then click attach.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=183)** Only instances in the same availability zone as the interface will be listed.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=188)** Select the instance, and click attach.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=192)** The status has changed to in use.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=196)** Back to instances, you will see that the instance now has two private IP addresses, one from each interface.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=204)** Interfaces can also have multiple addresses associated with them.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=208)** To add an address, navigate back to network interfaces.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=212)** Select the desired interface, click the actions button, and click, manage IP addresses.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=220)** Expand the interface information, and then click, assign new IP address.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=226)** Leave it to auto-assign to have AWS assign it automatically for you, or type in the required IP address.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=233)** Click save, and then click confirm.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=237)** With the interface selected, under the details tab, you will see multiple IP addresses listed.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=244)** Now let's talk about elastic IP addresses.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=248)** An elastic IP address is a static, public IPv4 address, that you can associate with your instances.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=255)** It is allocated to your AWS account, and is yours until you release it.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=259)** You can dissociate an elastic IP address from an instance, and then associate it with a different instance.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=265)** Doing so allows you to mask the failure of an instance, by remapping the address to another instance in your account.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=271)** Back to the EC2 console, look at the instance from earlier.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=275)** Note that it has a public IP address, but no elastic IP address.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=280)** The public IP address gets changed when the instance is stopped and started.
>
> **[4:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=285)** To prevent that, you can associate an elastic IP address.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=289)** On the left navigation pane, click elastic IPs.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=295)** Then click, allocate elastic IP address.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=299)** For now, leave the settings at the default, and click allocate.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=305)** The address has been allocated to your account, but note that it is not associated with an instance.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=311)** To associate, click actions, and then click, associate elastic IP address.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=318)** You can associate to an instance, or a network interface.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=321)** Based on your selection, select the desired instance, or interface, then the private IP address, and then click associate.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=333)** If you navigate back to the instance and look at its details, you will notice that it has an elastic IP address.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=341)** Note that AWS charges for elastic IPs, if they are not associated with a running instance.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=346)** So remember to release them back to the pool if you no longer need them.
>
> **[5:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=351)** So you've seen how you can use network interfaces and elastic IPS, to improve and efficiently manage connectivity for your instances.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/elastic-ip-and-elastic-network-interface?u=76281980&t=358)** There's a lot more to these two tools, and I encourage you to play around with these, to get a better understanding of their capabilities.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (27), public (4), private (4), let (2), type. (1)
> **Env Vars:** ec2 (5), aws (3), mac (1), ips (1)
> **UI Navigation:** select the (5), switch to (1), navigate to (1)
> **CLI Commands:** aws (3), find (1), make (1)
> **Definitions:** is a  (2), in other words (1), known as (1)
> **Warnings:** note that (3)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** remember to (1)

#### Security groups
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=0)** - [Instructor] In an earlier video, we spoke about security groups.
>
> **[0:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=3)** You can use them to regulate traffic for EC2 instances.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=7)** Now, let's dive into the details.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=9)** Security groups act as virtual firewalls for EC2 instances to control incoming, and outgoing traffic.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=16)** It consists of inbound rules that control incoming traffic to your instance, and outbound rules that control outgoing traffic from your instance.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=25)** An instance can be associated with more than one security group.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=29)** When EC2 decides whether to allow traffic to reach an instance, it evaluates all the rules from all the security groups associated with the instance.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=38)** When you launch an instance in a VPC, you must specify a security group but you can change it after you launch the instance.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=46)** An important thing to remember is that security groups are associated with network interfaces not instances.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=52)** If few important things to know as you work with security groups.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=56)** By default, security groups allow all outbound traffic.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=59)** Security group rules are permissive.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=61)** You cannot create rules that deny access.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=64)** The rules you create will be to allow access.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=67)** Anything not explicitly allowed will be denied.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=70)** With security groups, you can filter traffic based on protocols and port numbers.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=75)** Security groups are stateful.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=77)** This means if traffic is allowed from the instance, the return response traffic will be automatically allowed regardless of the inbound security group rules because it belongs to an existing flow.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=88)** You can add and remove rules at any time the changes are automatically applied to the instances that are associated with the security group.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=96)** Now, let's switch to the EC2 console, and configure security groups.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=101)** From the EC2 console, click security groups on the left navigation pane.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=106)** Here you'll find all the security groups listed.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=108)** To view details of a security group, select it.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=113)** Here you will find its inbound, and outbound rules.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=116)** Note that there's only one outbound rule, the default one and it allows all traffic.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=123)** Now, let's add a new inbound rule.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=125)** Under the inbound rules tab, click edit inbound rules, then click add rule.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=132)** Select the traffic type you want to allow.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=136)** Based on your selection, it will auto populate the protocol, and port number.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=142)** If you'd like to provide custom values, use the custom TCP or custom UDP traffic type.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=148)** Set the source to my IP to automatically populate your public IP address or anywhere or custom to input a custom source.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=157)** Provide an optional description, and click save rules.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=162)** Now let's talk about a configuration scenario that you could encounter.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=166)** Imagine you have a group of servers that need access to each other.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=171)** Let's say there are four servers in the group, and each server needs to allow acess on TCP port 8088 from every other server.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=179)** One way to configure this is to add three inbound security group rules on each server.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=184)** For example, here is the security group configuration for server four.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=188)** It has three rules each allowing inbound traffic on TCP port 8088 from the remaining three servers.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=195)** A more efficient way to configure this is to use the same security group on all servers, and add an inbound rule that specifies the security group itself as the traffic source.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=205)** Here is an example.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=206)** Notice the security group ID at the top left off the image, it ends with b78c.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=212)** The same security group ID has been added as the source in the security group rule.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=217)** A configuration like this will allow configured traffic from any instance associated with the security group, and you do not need to configure individual allow rules for each server.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=227)** So in our example, you can associate the security group with all the servers to allow traffic from each other.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=234)** This configuration could also be helpful in a situation where a group of servers needs to allow access from another group of servers.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=242)** In that case, you can create two security groups.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=244)** One for each group of servers.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=246)** Then specify the security group idea of the first group of servers in the security group rule associated with the second group and vice versa.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=254)** For example, you can see here that the security group ID of the first group of servers ending with 26ed is added as a source in the security group associated with the second group of servers.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/security-groups?u=76281980&t=266)** By doing so, each server in the group will allow traffic from each server in the other group, and you don't have to reconfigure the rules even if a server changes its IP address.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), default, (1), switch (1), type. (1), public (1)
> **Env Vars:** ec2 (5), tcp (3), vpc (1), udp (1)
> **Prerequisites:** configure (4)
> **Analogies:** for example (2), imagine (1)
> **CLI Commands:** find (2)
> **Ports:** port 8088 (2)
> **UI Navigation:** switch to (1), select the (1)
> **Definitions:** is an  (1)

#### Snapshots
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=0)** - In an earlier video, we talked about EBS volumes.
>
> **[0:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=3)** They provide persistent, block-level storage for EC2 instances.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=7)** You can back up the data on your EPS volumes by taking point-in-time snapshots.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=13)** You can then use the snapshots to restore them as EBS volumes.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=17)** Snapshots are incremental backups, which means that only the blocks on the device that have changed after your most recent snapshot are saved.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=26)** For example, let's say that you have an EBS volume with 10 GB of data.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=31)** If you take a snapshot of this volume, the snapshot will also be 10 GB in size.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=37)** Let's call this Snapshot A.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=38)** Let's say that after your initial snapshot, three GB of data on the volume changed.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=44)** When you take a snapshot, it will only contain three GB of data, because that has changed since your last snapshot.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=51)** Let's call this Snapshot B.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=53)** If you restore the snapshot as an EBS volume, three GB of data is fetched from Snapshot B and seven GB of data is fetched from Snapshot A.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=62)** Let's say that after your most recent snapshot, you added four GB of data to the volume.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=67)** When you take a snapshot, it will only contain four GB of data, because that has changed since your last snapshot.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=74)** Let's call this Snapshot C.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=76)** If you restore the snapshot as an EBS volume, four GB of data is fetched from Snapshot C, three GB of data is fetched from Snapshot B and seven GB is fetched from Snapshot A.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=89)** Few other things to bear in mind about snapshots.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=92)** Snapshots are stored in Amazon S3.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=94)** These are not visible to the user.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=96)** So if you viewed your contents in S3, you would not find a bucket with snapshots stored in it.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=101)** A snapshot is constrained to the AWS region where you created it.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=105)** But unlike EBS volumes, you can copy snapshots across regions, making it possible to use snapshots for geographical expansion, data migration and disaster recovery.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=115)** Snapshots also support encryption.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=117)** Snapshots of encrypted volumes are automatically encrypted and volumes that you create from encrypted snapshots are automatically encrypted.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=126)** You can also share snapshots across AWS accounts by modifying their access permissions.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=132)** Now let's switch to the EC2 console and look at snapshots.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=137)** From the EC2 console, click Snapshots on the left navigation pane.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=143)** Here you will see snapshots owned by you.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=146)** Use the dropdown to view private and public snapshots.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=151)** To create a snapshot, first navigate to the Volume section.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=156)** If you don't have an existing volume, create one.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=160)** After you create a volume, to create a snapshot, select the desired volume, click the Actions button and click Create Snapshot.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=170)** Provide an optional description.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=172)** Note that the option to encrypt is not available because the EBS volume is not encrypted.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=177)** But when you restore the snapshot into a volume, you will have the opportunity to enable encryption.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=183)** Configure the required tags.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=185)** Then click Create Snapshot.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=188)** Here is another EBS volume that has encryption enabled.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=192)** When you create a snapshot for this volume, it will be automatically encrypted and you cannot turn it off.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=199)** To view the snapshot you created, navigate back to the Snapshot section.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=207)** To restore it, select the snapshot, click the Actions button and click Create volume from snapshot.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=215)** Note that you can change the volume type and size and restore it to a different availability zone in the same region.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=223)** So you can use snapshots to move volumes across availability zones.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=227)** You can also enable encryption.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=230)** To encrypt, you can specify a customer-managed key or use the default AWS-managed key.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=237)** Then click Create volume.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=241)** You will find the restored volume in the Volume section.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=245)** To copy a snapshot to a different region, select it, click the Actions button and click Copy snapshot.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=255)** Select a destination region and optionally choose to encrypt.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=260)** If the source snapshot is encrypted, the destination snapshot is always encrypted.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=266)** Click Copy snapshot.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=268)** The copied snapshot will be available in the destination region in a few minutes.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=273)** To make a snapshot public or private, select it, click the Actions button and click Modify permissions.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=280)** Here you can make it public or choose private and provide an AWS account number to share the snapshot with.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=288)** So you've seen how you can use snapshots to back up your data in EBS volumes.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=294)** You can also automate snapshot creation to occur at regular intervals, using a service known as Amazon EventBridge.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/snapshots?u=76281980&t=301)** We'll talk more about this in a later video.

> [!info]- Semantic Content
>
> **Env Vars:** ebs (9), aws (4), ec2 (3), eps (1)
> **Code Keywords:** let (7), private (3), public (3), switch (1)
> **CLI Commands:** aws (4), find (2), make (2)
> **UI Navigation:** select the (2), switch to (1), dropdown (1), navigate to (1)
> **Definitions:** means that (1), known as (1)
> **Warnings:** note that (2)
> **Cross-References:** we talked about (1)
> **Analogies:** for example (1)

#### EC2 purchasing options
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=0)** - [Instructor] Amazon EC2 various purchasing options for EC2 instances, allowing you to choose a suitable model for your use case.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=8)** The available options are on-demand instances, spot instances, reserved instances, dedicated hosts, dedicated instances, savings plans and capacity reservations.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=24)** With on-demand instances, you pay for compute capacity by the second with no long-term commitments.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=31)** On-demand instances are a perfect fit for applications with short-term irregular workloads that cannot be interrupted.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=38)** It is also a good fit for when you're just starting out with EC2 instances and would like to try before committing.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=44)** You will find pricing of on-demand instances in the EC2 documentation.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=49)** Spot instances allow you to request unused EC2 instances at lower than the on-demand price.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=55)** Usually you can get spot instances at highly discounted prices, but only when there's available capacity.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=62)** When you request a spot instance, you are required to specify the maximum price you're willing to pay per hour for the instance.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=69)** The cost of spot instances is set by AWS and it is known as the spot price.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=75)** When your maximum price exceeds the spot price, the instance is awarded to you, but you only charge the spot price and it is kept at the on-demand price.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=86)** So you'll never pay more than the on-demand price.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=89)** AWS may interrupt your instance when available capacity reduces or the spot price exceeds your maximum price.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=97)** Spot instances can lower your EC2 cost significantly but your applications must be able to handle interruptions.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=104)** Spot instances are well suited for workloads that aren't affected by interruptions like background processing, bad jobs and optional tasks.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=114)** Reserved instances offer billing discounts on EC2 usage when you commit to a one-year or three-year term.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=121)** Reserved instances are not a particular type of instance but rather a billing discount applied to the use of on-demand in your account.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=129)** For example, let's say you have a running on-demand T3 instance in your account for which you're currently paying on-demand rates.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=137)** When you purchase a reserved instance that matches the attributes of your running instance, the billing benefit is immediately applied or you could purchase a reserved instance first and then launch an instance with matching attributes.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=150)** When you purchase a reserved instance, you have the option to purchase a regional reserved instance or a zonal reserved instance.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=158)** A reserved instance purchased for a region is known as a regional reserved instance.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=163)** While a reserved instance purchased for a specific availability zone is known as a zonal reserved instance.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=170)** A regional reserved instance does not reserve capacity but a zonal reserve instance does reserve capacity in the specified availability zone.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=179)** While reserved instances reduce your compute costs, you are limited by attributes, such as instance family, size, operating system, tenancy, or AWS region you specified at the time of purchase.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=193)** After you purchase a reserved instance, you must launch an on-demand instance that matches the specifications of the reserved instance to take advantage of the billing discount.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=203)** Now, let's talk about dedicated instances and dedicated hosts.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=208)** As the name suggests, a dedicated instance is an instance that runs on hardware that is dedicated to a single customer.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=216)** It is a good fit for workloads that need to run on dedicated hardware, like for compliance reasons.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=222)** A dedicated host is similar to a dedicated instance.
>
> **[3:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=225)** In that it is a physical server with capacity fully dedicated to your use.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=230)** The crucial difference between the two is the visibility of sockets and physical cores.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=235)** A dedicated host gives you the visibility into the number of sockets and physical cores.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=240)** So if you have existing per-socket, per-core or per-VM software licenses, like Windows servers, Microsoft SQL Server, SUSE and Linux Enterprise Server, you can bring them over to dedicated hosts.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=254)** So if you need dedicated hardware to run your instances, a dedicated instance is a good fit.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=260)** However, if you need dedicated hardware and visibility into the cores or sockets, or you would like to bring your own license, a dedicated host is a good fit.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=271)** Savings plans like reserved instances offer lower prices compared to on-demand pricing in exchange for a specific usage commitment for a one- or three-year period.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=282)** However, unlike reserved instances, you are not limited by instance family, size, availability zone, region, operating system or tenancy.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=293)** So savings plans allow you to reduce your compute costs and are flexible compared to reserved instances.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=300)** While reserved instances and savings plans provide billing discounts, they don't reserve compute capacity for you.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=306)** That brings us to the last purchasing option known as on-demand capacity reservations.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=312)** As the name suggests, capacity reservations allow you to reserve compute capacity for your EC2 instances in a specific availability zone for any duration.
>
> **[5:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=322)** By creating capacity reservations, you are sure to have access to EC2 capacity when you need it and there's no commitment.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=330)** Reserved instances, savings plans and capacity reservations can all sound a bit similar.
>
> **[5:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=335)** So here are the main differences.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=337)** Reserved instances and savings plans require you... Reserved instances and savings plans require you to commit for a one year or three year period but on-demand capacity reservations don't need a commitment.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=349)** On-Demand capacity reservations and zonal reserved instances reserve capacity in a specific availability zone while regional reserved instances and savings plans do not.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=360)** And finally reserved instances and savings plans provide billing discounts while capacity reservations do not.
>
> **[6:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=366)** So, as you've seen, there are many options available for purchasing EC2 instances.
>
> **[6:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=371)** By knowing these well, administrators can make the right choice for their requirements.
>
> **[6:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=376)** There's a lot more to each of these purchasing options and we've only just scratched the surface.
>
> **[6:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/ec2-purchasing-options?u=76281980&t=381)** I encourage you to review the EC2 purchasing options document to know about these options in detail.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (11), aws (3), sql (1), suse (1)
> **Definitions:** is a  (4), known as (2), is an  (1)
> **CLI Commands:** aws (3), find (1), make (1)
> **Code Keywords:** let (2), require (2), case. (1)
> **Analogies:** for example (1), such as (1), similar to (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Lambda
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=0)** - [Instructor] In the previous videos we saw that Amazon EC2 allows you to deploy servers in the AWS Cloud.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=6)** AWS has another service called Lambda, that provides serverless compute capacity.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=12)** With Lambda, you can run code without provisioning or managing servers.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=17)** When you use Lambda, AWS performs all the administration of the compute resources, such as, server and operating system maintenance, capacity provisioning, and automatic scaling, code monitoring, and logging.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=30)** To get started, you need to supply your code in one of the languages that Lambda supports and organize it into Lambda functions.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=38)** You pay only for the compute time you consume.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=40)** There is no charge when your code is not running.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=43)** You can also configure other AWS services to trigger your Lambda function, or configure it to run at a scheduled time.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=50)** Administrators find Lambda to be a valuable service as it frees them from having to manage servers to host and run code.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=58)** AWS Lambda natively supports Java, Go, PowerShell, Node.js, C#, Python, and Ruby code.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=69)** It also provides a runtime API that allows you to use any additional programming languages to author your functions.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=76)** Now, let's switch to the AWS management console and learn how to create and run a Lambda function.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=83)** Let's create a function will automatically stop an EC2 instance.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=87)** So, to follow along this exercise, make sure that you've got a running EC2 instance.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=93)** Before you create a Lambda function, you will need to create an IAM policy with the permissions to stop an EC2 instance.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=100)** Then you will need to attach it to an IAM role, so that the Lambda function can assume it to gain the required permissions.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=108)** Use the Services drop-down menu and navigate to the IAM service.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=113)** On the left navigation pane click, Policies, and then click, Create Policy.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=121)** Switch to the JSON editor.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=124)** To save some time we are going to add a policy definition from an AWS support article.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=130)** Scroll down the document to find the IAM policy.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=134)** Note that the policy allows EC2 start, and stop permissions on any resource.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=139)** So you can use the same policy to build a Lambda function to start EC2 instances.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=145)** Copy this policy, go back to the JSON editor and paste it.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=152)** On the next step, configure the required tags.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=157)** Then provide a name for the policy.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=161)** Click, Create Policy.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=166)** The policy with the required permissions has been created.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=169)** Now you'll need to attach it to a role, because a role can be assumed by the required service, in our case, Lambda.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=176)** Click, Roles, and then click, Create role.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=181)** Under the Choose a use case section, select Lambda, and then click, Next.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=188)** Search and attach the policy you created.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=192)** On the next step, configure the required tags, then provide a name for the role.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=199)** Click, Create role.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=203)** With the role created, you are ready to create the Lambda function.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=207)** Use the Services drop-down menu, and navigate to the compute section, and then go to Lambda.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=214)** Click, Create function.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=216)** Select the option to author from scratch, then enter a function name.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=222)** Set the runtime as Python 3.9.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=228)** Under the permission section, Click, Change default execution role.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=233)** Select the option to use an existing role and select the role you created.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=239)** Then click, Create function.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=244)** Navigate back to the document you opened earlier, and scroll down to find the code to stop EC2 instances.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=251)** Copy the code.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=254)** Navigate back to Lambda, delete the existing code, and paste the code you copied.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=261)** Change the region code to the one you're in now.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=265)** Then include the IDs of the instances you'd like to stop.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=269)** When you're ready, click the Deploy button.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=273)** Before testing the function, we'll make a final adjustment.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=277)** Click the Configuration tab, and then click the Edit button.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=282)** Increase the timeout value to 10 seconds.
>
> **[4:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=285)** Doing so will allow the function enough time to finish the task.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=289)** Click, Save. Time to test.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=291)** Navigate to the Test section, and click, Test.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=299)** The function has been executed.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=301)** Under the Execution results section, you can see the results.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=306)** The instance was stopped.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=309)** You can also verify this by navigating to the EC2 service.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=315)** Under the instances section, you can see that the instance is being stopped.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=319)** Similarly, you can write a function to start your instances.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=323)** The Lambda function can also be executed in response to certain triggers, like a notification or a Log Event, or you can use Amazon EventBridge to schedule the instance start and stop to occur at specific times.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=336)** So, as you can see, the possibilities with Lambda are immense.
>
> **[5:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=340)** It frees you from having to run servers for executing code, and the other responsibilities that come along with maintaining servers.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=347)** To fully appreciate the capabilities of Lambda, I recommend playing around with the tool and deploying a few functions.
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=353)** In the Lambda service, you will find pre-configured templates shared by the community.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=358)** Click, Create function, and then click, Browse serverless app repository.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/lambda?u=76281980&t=362)** Here you will find several functions to deploy in your account.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (21), function (16), let (2), switch (2), case, (1)
> **Env Vars:** ec2 (8), aws (7), iam (4), json (2), api (1)
> **CLI Commands:** aws (7), find (5), python (2), make (2), node (1)
> **UI Navigation:** navigate to (3), select the (3), switch to (2), scroll down (2), go to (1)
> **Prerequisites:** configure (4), you'll need (1)
> **File Paths:** node.js (1)
> **Versions:** python 3 (1)
> **Cross-References:** go back to (1)


### 5. Managing Storage

#### Amazon S3
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=0)** - [Instructor] In addition to managing the compute infrastructure, administrators are also responsible for managing storage.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=7)** AWS offers quite a few storage services, and Amazon S3 is the most popular.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=12)** Amazon Simple Storage Service, or Amazon S3, is an object storage service.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=17)** Data is stored as objects within buckets.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=20)** An object is a file and any metadata that describes the file, while a bucket is a container for objects.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=27)** So, to start using Amazon S3, you will first create a bucket.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=31)** Then you will upload your data to the bucket as objects.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=34)** You can store any number of objects in a bucket.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=37)** When you create a bucket, you enter a bucket name and choose the AWS region where the bucket will reside.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=44)** Amazon S3 has several features that administrators find particularly useful making it a preferred choice for object storage.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=52)** Let's first talk about storage class.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=55)** Each object in Amazon S3 has a storage class associated with it, and each storage class is designed for a specific use case.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=62)** For performance-sensitive use cases, like those that require millisecond access time and frequently access data, Amazon S3 provides the S3 Standard and the Reduced Redundancy storage class.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=75)** S3 Standard is the default storage class.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=78)** So, if you don't specify the storage class when you upload an object, Amazon S3 assigns the S3 Standard storage class.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=85)** AWS provides the S3 Standard-IA and the S3 One Zone-IA storage classes for infrequently accessed data like backup copies.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=94)** IA stands for infrequent access.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=97)** The S3 Intelligent-Tiering storage class optimizes storage costs by automatically moving data to the most cost-effective access tier.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=105)** It does so by monitoring your access patterns, and automatically moves objects that you've not accessed to lower-cost access tiers.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=114)** AWS has the S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive storage classes for long term, low-cost data archiving.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=126)** Bear in mind that these storage classes have different availability, durability, minimum storage duration, and other considerations.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=134)** Before you store data in S3, please refer to the Amazon S3 documentation for more information about the storage classes.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=142)** With S3 versioning, you can keep multiple versions of an object in one bucket and restore accidentally deleted or overwritten objects.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=151)** For example, if you overwrite an object, Amazon S3 creates a new object version in the bucket.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=157)** The previous version is available for restore.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=161)** Similarly, if you delete an object, Amazon S3 inserts a delete marker, which becomes the current object version.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=168)** You can then restore the previous version.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=171)** As you can imagine, this feature is particularly useful in production environments, where an accidental delete can result in data loss.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=179)** Amazon S3 also has a feature called Object Lock that allows you to store objects using a write-once-read-many model, also known as a WORM model.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=188)** With Object Lock, you can prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=196)** Doing so can help you meet certain regulatory requirements or simply add another layer of protection against object changes and deletion.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=204)** As your storage in S3 increases, you may find it challenging to manage their life cycle.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=209)** In this regard, Amazon S3 has a lifecycle configuration.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=214)** An S3 lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=221)** With transition actions, you can define when objects transition to another Amazon S3 storage class.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=228)** With expiration actions, you can define when objects expire.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=232)** Amazon S3 will delete expired objects on your behalf.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=236)** If configured, Amazon S3 can also automatically replicate your objects allowing you to manage your data redundancy requirements.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=244)** With replication enabled, Amazon S3 will automatically create asynchronous copies of objects across a single, or multiple, S3 buckets.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=254)** The destination bucket configured for object replication may be owned by you or a different AWS account, and may exist in a different region.
>
> **[4:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=263)** Amazon S3 also supports the use of cost allocation tags.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=267)** Tags are key-value pairs that you associate with an S3 bucket.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=272)** By assigning cost allocation tags, you can track and organize your resource costs using cost allocation reports.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=280)** We'll talk more about this later in the course.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=283)** Please refer to my course titled AWS Cost and Performance Optimization for a detailed understanding of cost allocation tags available in the LinkedIn Learning library.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=293)** By default, all Amazon S3 resources are private.
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=297)** Only the resource owner can access the resource.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=300)** You can configure bucket policies and access control lists to grant permissions to users and groups of users selectively.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=308)** Doing so allows you to decide who is getting the permissions, which S3 resources they're getting permissions for, and the specific actions you want to allow on those resources.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=319)** Amazon S3 also supports protecting data while in transit and at rest.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=325)** You can protect data in transit using SSL/TLS or client-side encryption.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=330)** For data at rest, S3 supports server-side encryption and client-side encryption.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=336)** So as you've seen, Amazon S3 is robust and an excellent storage option.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=341)** Amazon S3 has many features.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=344)** In this video we've only looked at the important ones to get a high level understanding.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-s3?u=76281980&t=349)** As you consider Amazon S3 for your storage requirements, I encourage you to read the documentation to learn about the details.

> [!info]- Semantic Content
>
> **Code Keywords:** class. (5), delete (4), let (1), case. (1), require (1)
> **Env Vars:** aws (6), worm (1), ssl (1), tls (1)
> **CLI Commands:** aws (6), find (2)
> **Definitions:** is a  (3), is an  (1), stands for (1), known as (1)
> **Analogies:** for example (1), imagine (1)
> **Cross-References:** later in (1)
> **Documentation:** the documentation (1)
> **Prerequisites:** configure (1)

#### Configure an S3 bucket
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=0)** - [Instructor] Let's now understand how to create and configure an S3 bucket.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=4)** We'll also look at some of the important settings that you're likely to use in a production environment.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=9)** From the AWS management console use the services dropdown menu, and navigate to the storage section, and then go to S3.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=17)** If you already have some buckets configured, you will find them here.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=23)** To create a new bucket, click the Create bucket button.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=28)** First, you will need to provide a bucket name.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=31)** Bucket names can consist only of lowercase characters, numbers, dots, and hyphens, and must begin and end with a letter or number.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=39)** Also the bucket name must be unique.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=42)** Next, select an AWS region where you'd like to create the bucket.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=47)** Use this option to copy settings from an existing bucket.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=51)** You can see that the object ownership is set to bucket owner enforced.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=55)** This means you as the bucket owner, own and have full control over every object in the bucket.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=61)** Scroll down to the public access setting section.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=65)** By default, AWS will block all public access to this bucket.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=69)** If you'd like to change this, simply uncheck the option to block all public access.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=74)** For now, leave it at the default setting.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=77)** Here you can enable bucket versioning.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=80)** This allows you to keep multiple versions of an object in the same bucket.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=85)** Bucket versioning is beneficial as a delete protection mechanism.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=89)** When you delete an object, S3 inserts a delete marker, instead of removing the object permanently from storage.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=96)** You can then restore the deleted object.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=99)** If you'd like to tag your bucket, add them here.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=103)** By default, server-side encryption is turned off, but you can turn it on here.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=108)** When you enable encryption, you can choose from an Amazon S3 key or an AWS key management service key.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=115)** Use the KMS key option to use your own key for encryption.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=119)** For now, leave it disabled.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=122)** Under advanced settings, you will find the object lock setting which allows you to store objects using a right ones read many model.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=130)** It prevent objects from being deleted or overwritten.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=134)** This can be useful for compliance requirements.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=137)** Bear in mind that object lock works only with versioning.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=140)** So if you enable object lock, versioning is automatically enabled.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=144)** For now leave it disabled, and click Create bucket.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=150)** You've created the bucket.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=152)** Now click the bucket name.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=155)** Right now there aren't any objects in this bucket.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=157)** Use the upload option to upload objects into this bucket.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=162)** Click Add files, and point your browser to the files you'd like to upload.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=170)** You can configure bucket policies to control access to the objects in the bucket.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=175)** Under the property section, you can set the storage class.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=179)** By default, this is set to standard.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=183)** Scroll down and click Upload.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=189)** After uploading, click Close to return to the bucket.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=193)** Under the property section, you can configure important settings.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=198)** Down here, you can enable server access logging.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=202)** Doing so will log request to access the bucket.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=205)** Configure event notifications to generate notifications for events such as objects created, objects deleted, objects replicated and more.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=215)** You can also enable transfer acceleration.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=217)** Doing so will provide you an accelerated endpoint to upload data faster to S3 for an additional fee.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=224)** Requester pays is an interesting feature.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=226)** Generally, the bucket owner pays for all storage and data transfer costs associated with their bucket.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=232)** With requester pays enabled.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=234)** The requester is required to pay for requests and data transfer.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=238)** The bucket owner still pays the cost of storing data.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=241)** This option is useful when you want to share data, but not incur charges associated with others accessing the data.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=248)** You can also use this bucket to host a static website.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=252)** Under the permissions tab, there are two main settings that administrators commonly use to control access to the bucket, bucket policy and access control lists.
>
> **[4:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=263)** Using bucket policies, you can control what actions that allowed and denied on objects in the bucket.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=270)** Bucket policies are applied at the bucket level, but the permission specified in the bucket policy applied to all objects in the bucket.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=277)** For example, I'm going to add a bucket policy as an example.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=281)** As you can see, the bucket policy has the allow action configured.
>
> **[4:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=285)** The defined principle is a user called Alice.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=289)** The defined action includes all S3 actions and the user is allowed to perform actions on the bucket.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=295)** And the buckets contents.
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=297)** Back to our bucket, access control lists or ACLS are a basic mechanism to define which accounts or groups are granted access and the type of access.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=309)** However, ACLS are a legacy feature and where possible, you should use IAM policies as an access controlled mechanism.
>
> **[5:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=317)** There are two more features that you'll find helpful while managing S3 storage.
>
> **[5:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=322)** They're located under the management tab.
>
> **[5:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=324)** First is lifecycle rules.
>
> **[5:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=327)** You can use this to define rules to automatically transition the storage class and state of your objects.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=333)** For example, let's say you want to automatically transition objects to glacier storage class 30 days after uploading.
>
> **[5:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=340)** So you'll start with a new rule and provide a name.
>
> **[5:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=345)** Then define the scope of the rule, which can be all objects or limited to a few.
>
> **[5:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=350)** Use the option to transition current and or non-current versions between storage classes.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=357)** Notice that you also have the option to expire or permanently delete versions.
>
> **[6:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=363)** Then choose the desired storage class and provide a value for days after object creation.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=370)** Click Create rule.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=374)** As you can see, it's a simple configuration to handle transitions and object states automatically.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=380)** Another feature you'll find under the management tab is replication rules.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=385)** They allow you to automatically replicate your objects to a bucket owned by you, or another AWS account in the same or a different region.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=393)** This can be useful for data redundancy purposes.
>
> **[6:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=396)** As you can see Amazon S3 true to its name, is a simple to use storage service with a robust feature set.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-an-s3-bucket?u=76281980&t=403)** To fully understand its features and how it could suit your use cases, I encourage you to play around with the different configuration options.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (4), public (3), default, (3), let (2), this, (1)
> **CLI Commands:** aws (5), find (4)
> **Env Vars:** aws (5), acls (2), kms (1), iam (1)
> **UI Navigation:** scroll down (2), dropdown (1), navigate to (1), go to (1)
> **Prerequisites:** configure (4), required to (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### S3 Glacier
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=0)** - [Instructor] One of the storage requirements for businesses is long-term storage or data archival for infrequently access data.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=7)** Most times, this is due to the need to preserve digital data or for compliance reasons.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=12)** Amazon S3 has three storage classes that you can use for data archival: Glacier Instant Retrieval, Glacier Flexible Retrieval, and Glacier Deep Archive.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=22)** These storage classes are incredibly low cost and aimed at long-term backup for months, years, or even decades.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=30)** Using Glacier, administrators can offload critical storage related tasks commonly found in on-premises environments such as capacity planning, hardware provisioning, data replication, and hardware failure detection and recovery.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=44)** There's a couple of ways by which you can store your files in Glacier.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=48)** One way is to upload objects to an S3 bucket and use one of the Glacier storage classes.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=54)** Another way is to use the AWS CLI.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=57)** It is important to note that when you upload objects to Glacier using the first method, that is using an S3 bucket, you can't access them from the S3 Glacier service console even though internally, the objects are stored in Glacier.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=71)** Before we understand how to upload objects to Glacier, let's quickly compare prizes.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=76)** I'm here at the Amazon S3 pricing page and here are the charges for US East, Ohio.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=83)** For the S3 Standard storage class, the pricing for the first 50 TB per month is $0.02 per GB, and over 500 TB per month, it drops to 0.021 per GB.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=97)** For S3 Glacier Instant Retrieval, you can see it drops down significantly to 0.004 per GB.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=103)** And for Glacier Deep Archive, it drops even further to 0.00099 per GB.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=110)** Now let's look at the configuration.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=112)** From the AWS Management Console, use the services drop down menu and navigate to the S3 service, under the storage section.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=122)** Click the bucket name to which you would like to upload objects.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=126)** Click Upload, and then click Add files, and point your browser to the files you would like to upload.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=135)** Under the Properties section, set the storage class to one of the Glacier storage options.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=143)** Then click Upload.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=147)** The object has been uploaded.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=149)** Click Close.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=151)** If you need to download objects stored in Glacier Flexible Retrieval or Glacier Deep Archive, you will first need to restore them.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=160)** When you select the file, you will notice that the download option is grayed out.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=165)** To make this file available for download, click Actions, and then click Initiate restore.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=172)** Specify the number of days you'd like the file to be available after it is restored.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=178)** Also specify the retrieval tier which will affect how soon your file is available for download, and the cost.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=185)** Then click, Initiate restore.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=188)** You've initiated the restore.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=190)** Click Close.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=192)** When the file is restored, the download option will be enabled.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=196)** Configuring lifecycle rules is another way to automatically move objects to the Glaciers storage class.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=202)** You can do this from the Management tab.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=205)** We saw this in an earlier video.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=208)** AWS also has a separate service console for Glacier.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=212)** Let's look at it.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=213)** From the services drop down menu, navigate to the S3 Glacier service under the storage section.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=222)** Note that this console does not display objects uploaded to the Glacier storage class using the S3 console.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=228)** Uploading objects to Glacier from this console is different than uploading via the S3 console.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=234)** The first difference you will notice is that you must begin by creating a vault.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=238)** A vault is a container for storing archives.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=241)** And an archive can be any data such as a photo, video, or document.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=247)** So essentially, just like an object is for S3, an archive is the base unit for storage in Glacier.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=255)** A vault can contain an unlimited number of archives.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=258)** Bear in mind that vaults are region specific.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=260)** The second difference is that unlike S3, it is not possible to upload using the console.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=266)** Instead, you will need to use the AWS command line interface or write code to make requests.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=272)** To create a vault, click Create Vault.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=276)** Provide a name for the vault.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=278)** Click Next Step.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=281)** In this step, you can configure notifications to be sent when Glacier jobs are completed.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=287)** Jobs include operations such as uploading or retrieving an archive.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=291)** For now, leave it at the default and click next step.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=295)** Review your selections, and click Submit.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=299)** You've created the vault, and now you can start uploading archives into it.
>
> **[5:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=303)** Remember, archives are just objects you want to upload.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=307)** Let's switch to the CLI to upload an archive.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=311)** First, ensure that you've configured the AWS CLI with the correct access key and region settings.
>
> **[5:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=317)** We spoke about this in an earlier video.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=319)** To list the vaults, use the list vaults command.
>
> **[5:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=322)** So the command is, "aws glacier list-vaults --account-id" The output will display your vaults.
>
> **[5:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=331)** To upload an archive, use the upload archive command.
>
> **[5:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=334)** So the command is, "aws glacier upload-archive --account-id --vault-name" and then use the body switch to specify the file name.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=349)** We've uploaded this archive in a single request.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=352)** Note the archive ID as you will need this when you need to download it.
>
> **[5:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=356)** For large archives, AWS recommends using the S3 multi-part upload command that allows you to upload an archive in parts.
>
> **[6:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=363)** You will find more information about this in the Glacier CLI documentation.
>
> **[6:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=367)** To download the archive, there's an extra step.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=370)** First, you will initiate an archive retrieval job.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=373)** When the job is complete, you will follow it up with a download command.
>
> **[6:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=377)** Please refer to the documentation to learn about the command syntax.
>
> **[6:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=381)** If you want to delete an archive, use the delete archive command.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=385)** So the command is, "aws glacier delete-archive --account-id --vault name Vault-2 --archive-id" The command returns no output.
>
> **[6:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=400)** And to delete the vault, you can use the delete vault command, or delete it from the Glacier console.
>
> **[6:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=406)** So you've seen how you can use Glacier as a low cost, long-term storage solution.
>
> **[6:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/s3-glacier?u=76281980&t=411)** Before you consider Glacier as your preferred cold storage solution, I recommend reviewing the documentation to analyze its costs, durability and retrieval times.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (6), let (4), switch (2), class, (1), class. (1)
> **CLI Commands:** aws (9), make (2), find (1)
> **Env Vars:** aws (6), cli (4)
> **UI Navigation:** navigate to (2), switch to (2), select the (1)
> **Versions:** 0.02 (1), 0.021 (1), 0.004 (1), 0.00099 (1)
> **Analogies:** such as (3), just like (1)
> **Documentation:** the documentation (2)
> **Warnings:** note that (2)

#### Amazon EFS
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=0)** - [Instructor] In an on-premises environment, it is common to have a file sharing service that allows users to share files and documents, and collaborate with other users.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=10)** AWS has a similar service known as elastic file system, or EFS, for use with AWS cloud services and on-premises resources.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=18)** It is serverless and scales automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth, which is a common concern in on-premises environments.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=30)** Also, being a managed service, AWS takes care of deploying, patching, and maintaining the file system configurations.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=37)** EFS supports Network File System version four protocol, and you pay only for the storage used by your file system.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=44)** When using EFS, you can choose from two storage classes.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=48)** First is Standard storage class.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=50)** This includes EFS Standard and EFS Standard-Infrequent Access.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=54)** This storage class stores data across multiple availability zones in a region, and the second option is One Zone storage class.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=61)** The includes EFS One Zone, and EFS One Zone-Infrequent Access.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=66)** This has a lower cost because data is stored in a single availability zone.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=71)** And as you would expect, Amazon EFS supports authentication, authorization, and encryption.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=77)** It supports encryption in transit and at rest.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=80)** To start using EFS, you will first create a file system and then mount it on an Amazon EC2 instance.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=87)** Bear in mind that you can only use EFS on a Linux instance.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=92)** You cannot use EFS with a Microsoft Windows-based instance.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=96)** You will find the list of supported AMIs in the EFS documentation.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=100)** Now, let's switch to the AWS Management Console, and see how to configure EFS.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=107)** From the AWS console, use the services drop down menu, and navigate to the storage section and then click EFS.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=115)** Click Create File System.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=117)** Optionally provide a name for the file system, and then select the VPC.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=121)** Then select from one of the available options for availability and durability, Regional or One Zone.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=128)** Click Create.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=130)** I'm going to cancel out from here because I've already created a file system.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=135)** Click the file system ID.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=138)** Here, you can view and edit settings of the file system.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=141)** Scroll down and navigate to the Network tab.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=143)** Here, you will find the mount targets that EFS has created in each availability zone.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=149)** To use the file system, you will need to mount it on an EC2 instance.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=154)** From the services drop-down menu navigate to the EC2 service.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=159)** From the Instances section, click Launch Instances.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=165)** Select the Amazon Linux 2 AMI.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=169)** Leave it to the default size, and click Next.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=173)** In this step, you will see an option to add a file system.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=177)** Click Add File System.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=179)** It should automatically point to the file system you created.
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=182)** When you use this option at the time of launching the instance, EC2 will automatically create a mount point on your instance and mount the file system.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=191)** Note that you also have the option to create a new file system.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=194)** If you do not add the file system here, you will need to log into the instance and manually mount the file system.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=201)** Before proceeding further, note the mount path as you will need this to access the file system.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=206)** Also note the message that to enable access to the file system, the required security groups will be automatically created and attached to this instance.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=215)** Leave this option turned on, and proceed with creating the instance like you normally would.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=224)** Leave the storage and tags options at the default.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=230)** Attach a security group that allows SSH traffic, as you will need to log into the instance.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=236)** The message here talks about the additional security groups that will be created and attached to your instance.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=243)** Finish the remaining steps to launch the instance.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=251)** I'll cancel out because I've already launched an instance with this file system attached.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=256)** Let's look at the instance and the attached file system.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=261)** On this terminal I'm logged into the instance.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=264)** Navigate to the mount point using the cd command.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=268)** Then use the df -h command to view the disk space.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=272)** Here, you can see the mounted file system and its available storage, eight exabytes.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=277)** You could also manually mount the file system on an EC2 instance, but as you've just seen, allowing AWS to do it automatically is easier and seamless.
>
> **[4:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=286)** Please visit the EFS documentation to learn how you can manually mount the file system.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=291)** EFS is a shared file system meant to be accessed by multiple users.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=296)** So you can mount the same file system on other instances too.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=299)** Before we wrap up this video, I'd like to mention that just like EFS for Linux instances, AWS also has a file server designed for Windows workloads.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-efs?u=76281980&t=309)** Known as Amazon FSx for Windows File Server, it is backed by a fully native Windows file system and supports the industry standard SMB protocol to access file storage over a network.

> [!info]- Semantic Content
>
> **Env Vars:** efs (18), aws (7), ec2 (5), vpc (1), ami (1)
> **CLI Commands:** aws (7), find (2), ssh (1), cd (1)
> **UI Navigation:** navigate to (3), select the (2), switch to (1), scroll down (1)
> **Code Keywords:** class. (2), let (2), switch (1), default. (1)
> **Definitions:** is a  (2), known as (1)
> **Tools:** aws console (1), terminal (1)
> **Analogies:** just like (1)
> **Warnings:** note that (1)

#### Amazon FSx for Windows File Server
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=0)** - In an earlier video, we looked at Amazon EFS, or Elastic File System, a file system for use with Linux instances.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=8)** AWS also has a file server for use with Windows instances and it is called Amazon FSx for Windows File Server.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=15)** It is a fully managed service, eliminating the administrative overhead of provisioning hardware, maintaining software, addressing failures and performing backups.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=25)** It is backed by a fully native Windows file system, and supports the industry standard Server Message Block, or SMB protocol, to access file storage over a network.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=34)** From a configuration standpoint, it's slightly different from EFS.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=39)** You have to specify the amount of storage and throughput capacity while creating the file system, though you can change this later.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=46)** Once provisioned, the file system comes with a default Windows file share called \share.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=52)** A file share is a specific folder within your file system that you can access using the SMB protocol.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=57)** You can access your shares from all Windows versions, starting from Windows 2008 and Windows 7, and current Linux versions.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=66)** You can also map your FSx shares on EC2 instances, Amazon WorkSpaces instances, Amazon AppStream 2.0 instances, and VMware Cloud on AWS VMs.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=77)** Now, let's get to the configuration.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=79)** To perform the exercises in this demonstration, you will need an AWS Managed or Self-managed Microsoft Active Directory.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=86)** If you don't have one already, you can create one when creating the file system.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=92)** From the AWS Management Console, use the Services drop-down menu and navigate to the Storage section, and go to the FSx service.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=101)** Click Create file system.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=103)** From the available options, select Amazon FSx for Windows File Server.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=108)** Click Next.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=113)** Optionally, you can provide a name for the file system.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=116)** A Multi-AZ file system maintains the availability of your data.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=121)** For this demonstration, select Single-AZ.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=124)** Select the desired storage type, SSD or HDD, and configure the minimum required storage capacity.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=131)** Make a note of the security group that will be associated with the file system's network interface.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=136)** You will update this later to allow the required inbound traffic.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=141)** Also specify the subnet in which you would like the file system's network interface to reside.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=147)** Next, you will need to choose an Active Directory.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=150)** This is required to provide user authentication and file and folder level access control.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=155)** If you already have an AWS Managed Microsoft Active Directory, select it from the drop-down.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=161)** Or use the option to create one.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=164)** Alternatively, you may also select a Self-managed Microsoft Active Directory.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=169)** The Active Directory I've chosen, uses the lab.[example.com](https://example.com) domain.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=174)** We'll talk more about creating an AWS Managed Microsoft Active Directory, later in the course.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=180)** Leave other settings at the default and click Next.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=186)** Review your selections and click Create file system.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=190)** Note that when you create a file system, it can take a few minutes before it becomes available.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=195)** Here I've got another file system that's already available.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=199)** Click the file system name or ID to view the details.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=203)** Scroll down to the Network & security section and copy the DNS name.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=208)** You will need this to access it from a domain join instance.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=212)** Before you connect to this file system, there's one final thing to verify, the associated security group.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=219)** Scroll to the bottom and click the Network interface ID.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=224)** Doing so will open the in interface details in a new browser tab.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=231)** Under the Security groups column, click the Security group ID.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=237)** Verify that the Inbound rules section contains a rule to allow inbound SMB traffic.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=242)** If not, add a rule to allow this from all sources.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=247)** In a production network, you should allow this traffic only from required sources, but since this is a demo environment, set it to any source.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=256)** Now, let's switch to a domain join instance and see how to access the file system.
>
> **[4:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=262)** Under the Instances section, I've got an instance that I've already joined to lab.[example.com](https://example.com).
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=267)** I'll now switch to the instance.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=270)** I'm here at the domain join instance.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=272)** I'll first navigate to Server Manager.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=275)** Under the Local Server settings, you can see that this instance is part of lab.[example.com](https://example.com).
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=281)** To access the file system, open a File Explorer.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=284)** In the address bar, begin with \\ and follow it up with the DNS name you copied earlier.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=291)** Press Enter.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=292)** When prompted, use admin as the username, and the password you configured on your Active Directory.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=298)** Here's the share, ready for use.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=301)** If you would like to map the share, right-click and choose Map network drive.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=306)** Choose a required drive letter and click Finish.
>
> **[5:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=310)** Now, if you go to My PC, you will find the map share.
>
> **[5:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=314)** View the properties of the share to view its size.
>
> **[5:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=317)** About 32 GB.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=320)** You can also create additional shares in the file system, using the file share snapping tool.
>
> **[5:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=327)** Open the Start menu and search for fsmgmt.msc.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=333)** Press Enter once you see this tool.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=336)** It opens the Shared Folders utility, and you can see it is connected to Local.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=341)** Right-click Shared Folders, and click Connect to another computer.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=346)** Here you can paste the DNS name of your file system and press Enter.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=352)** Now you're connected to the file system.
>
> **[5:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=355)** If you click Shares, you will see the default share.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=360)** If you'd like to create a new share, right-click Shares, and then click New Share.
>
> **[6:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=368)** Here you can also see active sessions and open files.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=373)** So you've seen how you can create a Windows file system using Amazon FSx for Windows.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-fsx-for-windows-file-server?u=76281980&t=378)** Your existing code, applications and tools that your Windows developers use today, can continue to work unchanged on Amazon FSx for Windows.

> [!info]- Semantic Content
>
> **Env Vars:** aws (6), smb (3), dns (3), efs (2), ec2 (1)
> **UI Navigation:** right-click (3), navigate to (2), go to (2), open the (2), switch to (2)
> **Code Keywords:** interface (4), let (2), self (2), switch (2), type, (1)
> **CLI Commands:** aws (6), az (2), make (1), find (1)
> **Definitions:** is a  (3), is called (1)
> **URLs:** [example.com](https://example.com) (3)
> **Prerequisites:** configure (1), required to (1)
> **Versions:** 2.0 (1)

#### Cloud storage with AWS storage gateway
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=0)** - [Instructor] One of the challenges businesses face when moving to the cloud is bridging the gap between their on-premises environment and the cloud infrastructure.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=7)** You may want to use cloud backed storage but your applications still need to remain on-premises, maybe because they're legacy applications, or simply because it's a complex migration.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=17)** AWS Storage Gateway helps to address this problem.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=20)** Simply put, it allows you to connect on-premises workloads with cloud-based storage.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=26)** This is a win-win for businesses and administrators.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=29)** Businesses benefit from having access to virtually unlimited, low latency cloud backed storage, while administrators benefit from having a simplified storage management solution.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=40)** And it's easy for developers too because they don't need to change application code.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=44)** Storage Gateway offers three types of gateways.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=47)** File-based file gateways are available as Amazon S3 file gateway and Amazon FSx file gateway.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=54)** With the Amazon S3 file gateway You will store and retrieve objects from Amazon S3, using standard protocols such as Network File System or NFS, and Server Message Block or SMB.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=66)** Amazon FSx file gateway allows you to create file shares on a Windows file server.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=71)** Volume-based file gateways provide storage volumes that you can mount as iSCSI devices from your on-premises application servers, it supports cached and stored volume configuration.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=83)** And tape-based file gateways provide cloud-backed virtual tape storage that you can use to archive data in Glacier.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=90)** Many of you may know about the effort involved in maintaining a physical tape infrastructure, and the tape-based gateway frees you from that.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=98)** Regardless of the type, the gateway is a software appliance you deploy in your on-premises environment as a virtual machine running on VMware ESXi, Microsoft HyperV, or Linux KVM Hypervisor.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=110)** You can also deploy the gateway on an Amazon EC2 instance, using a specific file gateway AMI, we'll use it in this video.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=117)** Now let's look at the configuration.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=120)** We'll understand how to deploy an Amazon S3 file gateway on an EC2 instance.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=124)** Once deployed, we'll create a file share that connects to an S3 bucket.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=128)** Then we'll access the file share from an EC2 instance.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=132)** Before diving into the configuration, I'd like to highlight that there are many settings that you can configure based on your use case.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=139)** In this demonstration, we'll focus on getting up and running with a quick and easy configuration.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=145)** From the AWS Management Console, use the services dropdown menu, and navigate to the storage section, and then click Storage Gateway.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=153)** Click create gateway.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=155)** From the available types, select Amazon S3 file gateway.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=160)** Before proceeding further, it's worth noting the prerequisites.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=164)** You will need an S3 bucket to connect to the gateway, you will also need an IAM role with appropriate permissions, you will also need to ensure that port requirements are met, the storage gateway documentation explains this in detail, and if you plan to use SMB file shares with Active Directory Authentication, you will need an administrator user account.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=184)** Click next.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=187)** In this step, you will select the host platform on which you plan to deploy the gateway.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=192)** For this demonstration, choose Amazon EC2, review the instructions, and then click launch instance.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=202)** Doing so will open the launch instance wizard in a new browser tab.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=206)** The gateway AMI is already selected in step one.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=209)** AWS recommends using the m4.xlarge instance type for deploying the gateway, select it and click next.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=219)** In this step, set the auto assigned public IP setting to enable.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=226)** Click next.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=228)** Note that the root volume is 80 GB in size, but you'll also need an additional EBS volume for cache storage.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=236)** For file gateway type the minimum required is 150 GB.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=241)** So click add new volume and change the size to 150 GB.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=246)** Click next, add the required tags, and click next.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=252)** In this step choose the option to create a new security group and provide a name and description.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=259)** All gateway types must allow HTTP traffic inbound.
>
> **[4:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=263)** AWS uses this to activate the gateway, and since we are going to connect using NFS, also allow NFS traffic.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=270)** In a production network.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=271)** you should allow traffic only from the required source, but since this is a demonstration set the source to anywhere.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=279)** Click review and launch, review your selections, and click launch.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=284)** Create a new key pair or select an existing one and click launch.
>
> **[4:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=289)** I'm going to cancel out from here because I've already launched a gateway instance to save some time.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=294)** When the instance is ready, copy its public IP address.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=301)** Return to the browser tab where you are deploying the gateway.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=305)** On this wizard click next.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=309)** In this step you will need to select the service endpoint.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=312)** Select public to allow the gateway to communicate with AWS storage services over the public internet.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=318)** Click next.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=320)** In this step provide the public IP address you copied earlier and click next.
>
> **[5:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=327)** Note that if you just launched the instance you should wait a couple of minutes before reaching this step.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=333)** Now you're ready to activate the gateway.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=336)** Select the gateway time zone and provide a gateway name, then click activate gateway.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=346)** In this step you will specify the local disc to be used as a cache.
>
> **[5:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=351)** This can take a few moments.
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=353)** Here is the additional disc you configured earlier, and it is allocated to cache.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=358)** Click save and continue.
>
> **[6:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=361)** In this step you can configure logging, for now set it to disable and click save and continue.
>
> **[6:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=368)** Review your selections and click finish.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=374)** A new gateway has been created.
>
> **[6:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=376)** It can take a few moments before the gateway changes status.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=380)** Here I another gateway that is in the running state.
>
> **[6:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=384)** Click the gateway name to see the details.
>
> **[6:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=387)** Now let's create a file share.
>
> **[6:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=388)** In the left navigation pane click file shares, and then click create file share, from the dropdown, select the gateway you deployed, then select the S3 bucket name option, and provide the name of an existing S3 bucket.
>
> **[6:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=407)** Your gateway will use this bucket to store and retrieve files.
>
> **[6:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=412)** Make sure you've chosen the correct region for your S3 endpoint.
>
> **[6:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=415)** Here you can provide a file shared name, otherwise it defaults to the bucket name.
>
> **[7:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=420)** Over here, you can specify the protocol that you want to use to access the share.
>
> **[7:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=425)** Leave it set to NFS, and other settings at the default, and click next.
>
> **[7:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=432)** Here you can set the storage class for new objects in the bucket.
>
> **[7:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=436)** The gateway needs permissions to access the S3 bucket, if you have an existing IAM role with appropriate permissions, you can add it here.
>
> **[7:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=445)** Otherwise use the create option to have AWS create one for you.
>
> **[7:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=450)** Click next.
>
> **[7:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=452)** In this step, you can configure file access settings such as mount options, and file and directory permissions, leave this at the default and click next.
>
> **[7:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=463)** Review your selections and click create.
>
> **[7:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=468)** The file share has been created, when the status changes to available you'll be able to connect to it.
>
> **[7:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=474)** Here I've got another file share that I created earlier.
>
> **[7:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=477)** Click the share ID to view the details.
>
> **[8:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=480)** Scroll to the bottom to copy the command you'll need to use to mount the share.
>
> **[8:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=485)** Copy the command for the required operating system.
>
> **[8:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=488)** To mount the share switch to a Linux EC2 instance in the same region.
>
> **[8:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=493)** Note that this is not the gateway instance but another instance you'd like to use to access the share.
>
> **[8:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=499)** To mount the share you will need to create a directory to use as the mount point, sudo su and then create a new directory to use as the mount point.
>
> **[8:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=508)** I've named the directory as efs, you can call it anything.
>
> **[8:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=512)** Now use the command copied from the gateway console and replace the mount point, press enter, and you've mounted the share.
>
> **[8:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=519)** Now use the df -h command and you will see the mounted share.
>
> **[8:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=524)** As you can see, it has 8 exabytes of storage.
>
> **[8:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=528)** Any files that you add to the share will be added to the S3 bucket.
>
> **[8:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=532)** Let's give it a try.
>
> **[8:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=534)** I'll quickly create a text file called demo.txt, I'll add some contents to the file.
>
> **[9:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=544)** Once done, I'll save and exit.
>
> **[9:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=547)** The cat command shows the file contents.
>
> **[9:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=550)** I'll use the cp command to copy to the file share.
>
> **[9:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=557)** To verify the upload, I'll go back to the AWS console, then I'll use the services dropdown menu and navigate to the S3 service, then I'll click the bucket name.
>
> **[9:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=570)** Here is the file I copied from the machine.
>
> **[9:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=572)** So you've seen how easy it is to set up cloud backed storage with Storage Gateway.
>
> **[9:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=577)** Sure, there are a few steps to set up the gateway, but once done it is just a case of mounting the share and using it.
>
> **[9:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=583)** To fully appreciate the capabilities of Storage Gateway, I encourage you to review the documentation and deploy test scenarios using the other gateway types, such as volume and tape gateway.
>
> **[9:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloud-storage-with-aws-storage-gateway?u=76281980&t=593)** Also remember to clean up your resources after you finish testing.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), ec2 (5), nfs (4), smb (2), ami (2)
> **Code Keywords:** public (5), let (3), continue (2), type, (1), case. (1)
> **UI Navigation:** select the (5), dropdown (3), navigate to (2), open the (1), switch to (1)
> **CLI Commands:** aws (7), make (1), sudo (1), cat (1), cp (1)
> **Prerequisites:** configure (3), set up (2), you'll need (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **Warnings:** note that (3)

#### AWS Backup
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=0)** - [Instructor] Backing up critical data and making sure it is available for restore is a fundamental task for administrators.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=6)** AWS Backup is a managed data protection service that allows you to centrally manage backups across the AWS services that your applications use.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=16)** AWS Backup makes it easy for administrators, as they do not have to manage backups from the individual Service Consoles.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=23)** AWS backup allows you to create backup policies known as backup plans.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=28)** You can use backup plans to define your backup requirements such as when and what to backup, where to store them, and then apply them to the AWS resources that you want to protect.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=39)** Backups consume storage, and regular backups can quickly add to your storage costs.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=44)** So AWS Backup allows you to minimize costs by storing backups in cold storage.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=50)** Or you can also define lifecycle policies to automatically transition from warm to cold storage based on a defined schedule.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=57)** Also, backups are incremental.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=60)** So the first backup of an AWS resource is a full copy of the data, and each successive backup only backs up the changes made to the resource.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=68)** It also supports copying backups to multiple different AWS regions on demand, or automatically as part of your scheduled backup plan.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=76)** And if you have multiple accounts as part of an AWS organization, you can centrally manage backups across all the accounts.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=84)** You can backup the following resources using AWS backup.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=88)** Amazon FSx, Elastic File System or EFS, DynamoDB, EC2, Elastic Block Store or EBS, Relational Database Service or RDS, Amazon Aurora, AWS Storage Gateway and Windows Volume Shadow Copy Service.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=108)** This list can change, so please refer to the AWS Backup Documentation for the latest information.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=113)** Now let's switch to the AWS Management Console, and learn how to configure AWS Backup.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=119)** We'll see how to schedule a backup of an EBS volume using its resource ID, and an EC2 instance using tags.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=127)** We'll also see how to run an on-demand backup job for an EC2 instance.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=131)** From the AWS Management Console, use the Services dropdown menu and navigate to the Storage section, and then click AWS Backup.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=144)** Click Create Backup plan.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=147)** Note that AWS has predefined templates that you can use to build your backup plan.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=151)** For this demonstration, we'll create a new backup plan.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=156)** Choose the option to Build a new plan, and then provide a name for the plan.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=162)** Under the backup plan, you can define rules that specify backup schedule, lifecycle rules and other configuration items.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=170)** Provide a name for the rule.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=172)** A vault is required to store backups.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=175)** AWS has a default vault that you can use, but its default access policies are restrictive.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=180)** So you'll need to edit them before including the vault in a backup plan.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=185)** To keep things simple, we'll create a new vault.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=188)** Click Create new Backup vault and provide a vault name.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=192)** Then specify the Encryption key.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=194)** You can use the Default key or provide a Custom key.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=198)** Click Create Backup vault.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=202)** Next, use the dropdown to select a backup frequency.
>
> **[3:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=206)** Note that there're preconfigured options, or you can use the Custom cron expression option to specify a custom frequency.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=214)** If you need to follow a backup window, define it here or use the default one which begins at 5:00 a.m. UTC and lasts for eight hours.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=224)** Use the Transition to cold storage option to define when your backup should be moved to cold storage.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=229)** If you'd like to create a cross region backup, configure the destination region here.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=234)** You can also configure a cross account backup by turning on the option to copy to another account's vault, and then specify the ARN of the external account's vault.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=244)** For now, turn these options off.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=247)** Click Create plan.
>
> **[4:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=249)** You've created the plan and now it's time to assign resources.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=253)** Click Assign resources.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=256)** Provide your resource assignment name.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=259)** Then you need to specify an IAM role.
>
> **[4:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=262)** The IAM role will provide AWS Backup the permissions required create and manage backups.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=267)** You can create a custom role and attach it here, but we'll stick to the default role for this demonstration.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=272)** To assign resources, you have two choices.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=275)** You can include all resource types or specific resource IDs, or assigned by tags.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=281)** From the Resource type dropdown, select EBS.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=287)** Then select the volumes you'd like to backup.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=292)** Click Assign resources.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=298)** The resource assignment has been created.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=299)** Now the backups will occur at the configure schedule which is currently set to the default window 5:00 a.m. UTC.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=307)** But as you can imagine, assigning resources by their IDs isn't scalable.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=311)** So let's add one more assignment.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=313)** This time will use tags to set up a backup plan for an EC2 instance.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=319)** Click Assign resources and add a Resource assignment name.
>
> **[5:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=326)** Enter the desired Tag Key and Value.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=328)** I've already got a running EC2 instance that I've tagged.
>
> **[5:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=331)** So the Tag Key and Value populates in the dropdown AWS Backup will automatically backup resources if you tag them with the same Tag Keys you configure here.
>
> **[5:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=340)** Click Assign resources.
>
> **[5:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=345)** Now the resource will be backed up during the configured backup window.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=349)** As you can imagine, backing up using tags would be easier and effective if users tagged the resources at the time of creation.
>
> **[5:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=356)** You can enforce resource tagging using tagging policies.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=360)** The AWS documentation explains how you can enforce resource tagging.
>
> **[6:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=365)** With correct tags applied at resource creation time, the AWS Backup plan will automatically recognize those resources and back them up.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=373)** Sometimes you may be in a situation where you want to perform an on demand backup.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=378)** Doing so is easy.
>
> **[6:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=379)** On the left navigation pane, click Protected resources.
>
> **[6:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=384)** Then click Create on-demand backup.
>
> **[6:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=389)** Select the Resource type and provide the resource ID.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=393)** The configuration is like what we saw the backup plan.
>
> **[6:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=397)** The only difference you'll notice is the Backup window.
>
> **[6:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=400)** Here you have an option that allows you to create a backup now.
>
> **[6:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=405)** Specify a vault and click Create on-demand backup.
>
> **[6:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=412)** The backup job will not reboot your instance.
>
> **[6:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=415)** The job has been created.
>
> **[6:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=417)** Here I have another job that has been completed.
>
> **[7:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=420)** The backup is available for restore from the vault.
>
> **[7:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=424)** Click Backup vaults on the left navigation pane, and then click the vault name.
>
> **[7:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=429)** The completed backup is listed under the Backup section.
>
> **[7:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=434)** This backup is often EC2 instance.
>
> **[7:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=437)** To restore this, select the backup, click Actions, and then click Restore.
>
> **[7:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=445)** Now you'll be presented with the same options that you'd see if you were to launch a new EC2 instance.
>
> **[7:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=450)** Like the Instance type, VPC, Security groups and more.
>
> **[7:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=456)** Configure the required settings, and when you're ready, click Restore backup.
>
> **[7:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=461)** As you've just seen, AWS backup provides a single console to centrally managed backups for multiple resource types.
>
> **[7:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=469)** And it is a one time set up.
>
> **[7:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-backup?u=76281980&t=470)** Once configured, the service will automatically back up and archive the data, allowing you to stay consistent and compliant with your backup requirements.

> [!info]- Semantic Content
>
> **Env Vars:** aws (23), ec2 (7), ebs (3), utc (2), iam (2)
> **CLI Commands:** aws (23)
> **Prerequisites:** configure (6), set up (2), required to (1), you'll need (1)
> **UI Navigation:** dropdown (4), select the (3), switch to (1), navigate to (1)
> **Code Keywords:** let (2), switch (1), protected (1), this, (1), type, (1)
> **Definitions:** is a  (4), known as (1)
> **Analogies:** imagine (2), such as (1)
> **Ports:** :00 (2)


### 6. Monitoring and Logging

#### CloudWatch
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=0)** - [Instructor] The responsibilities of administrators include EC2 key aspects: monitoring and logging.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=6)** In this video and the following two, we'll focus on the tools to help you with these two aspects.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=11)** First, let's talk about CloudWatch.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=14)** CloudWatch is an AWS service that collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of your AWS resources, applications, and services that you run on AWS and on-premises servers.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=30)** With CloudWatch, you can monitor usage of your workloads and applications, set alarms to monitor and get notified when resource utilization breaches a configured threshold, configure dashboards that give you a bird's eye view of your account, take automated actions in response to events, detect anomalous behavior in your environment, and visualize logs and metrics side by side.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=56)** In this video, I'd like to introduce you to those capabilities that you as an administrator will find most useful, precisely monitoring, setting alarms, configuring dashboards, and visualizing logs.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=69)** Let's begin with the Instances section within the EC2 service.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=73)** To view metrics for a running instance, select it and navigate to the Monitoring section.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=78)** Here you will find critical metrics related to CPU utilization, network usage, and disc operations.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=86)** These metrics are provided by CloudWatch.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=89)** You can also collect detailed operating system and application-related metrics by installing the CloudWatch agent on the instance.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=96)** You can install it on a variety of operating systems, both on Amazon EC2 and on-premises servers.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=103)** To know about how you can install the agent for your preferred operating system, please refer to the CloudWatch documentation.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=110)** I also explained this in detail in my LinkedIn Learning course titled AWS Monitoring and Reporting.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=115)** Before navigating away from here, copy the instance ID.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=120)** Now use the Services dropdown menu and navigate to the Management & Governance section and then go to the CloudWatch service.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=129)** Let's create an alarm that will alert when the CPU utilization of an EC2 instance goes above a configured threshold.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=135)** From the left navigation pane, click All alarms and then click Create alarm.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=140)** The first step is to select a metric that you'd like to monitor.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=144)** The metrics you will see here will depend on the AWS services you are using, so you may not see all the metrics that I'm seeing or you may see more depending on your usage.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=155)** Click EC2 and then click Per-Instance Metrics.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=159)** Here you will see EC2-related metrics for your instances.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=163)** Filter using instance ID, then select the metric named CPUUtilization Click Select metric.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=174)** Here you can change the statistic type and monitoring period.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=178)** Scroll down and under the Conditions section, make sure that the option for Greater is selected.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=183)** Set the threshold as 80%.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=188)** Click Next.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=189)** Here you need to configure the alarm state that will trigger the desired action.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=195)** Select In alarm.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=197)** This is the state when the metric has breached your configured threshold.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=201)** If you'd like to send notifications, select an existing SNS topic or create a new one.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=208)** SNS is simple notification service, and it is responsible for handling notifications.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=214)** The new topic name is autopopulated.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=217)** Add the required email addresses.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=223)** Then click Create topic.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=224)** A couple of things I'd like you to take note of, when the alarm triggers, you can execute an Auto Scaling action like adding new EC2 instances.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=234)** This configuration can be helpful if your instances are sitting behind a load balancer.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=239)** So when one instance experiences high CPU utilization, you can automatically spin up another instance to share the load.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=246)** You can also configure an EC2 action like rebooting the instance.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=251)** As you can see, it not only helps you to detect a situation but also notifies you and allows you to recover from it, which is critical for administrators.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=260)** Click Next.
>
> **[4:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=263)** Provide a name for the alarm.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=266)** Click Next.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=271)** Review your selections and click Create alarm.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=275)** When the alarm has collected some data, you will see the state change, and it will trigger when the CPU utilization of the instance goes above 80 percentage.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=284)** You can also create dashboards with CloudWatch.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=287)** If you've configured dashboards with any other tool in the past, it feels similar.
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=297)** Here I've got a dashboard I configured earlier.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=300)** As you can see, it quickly gives insights into key performance indicators such as CPU, network, and disc.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=307)** And it is easy to add more widgets.
>
> **[5:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=310)** Click Add widget, then choose a type, for example, Line.
>
> **[5:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=316)** On the next step, specify where you'd like to draw data from: metrics or logs, then click Configure.
>
> **[5:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=324)** Now you will see a window like what you saw when configuring the alarm.
>
> **[5:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=331)** Select the desired metric type and then select the required metrics.
>
> **[5:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=340)** Then click Create widget.
>
> **[5:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=345)** The widget I've created gives me a quick overview of the chosen instance's disc usage.
>
> **[5:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=350)** Since this is a lab machine, there's not much happening on it.
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=353)** As you can imagine, dashboards can truly simplify account and resource administration.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=358)** CloudWatch also allows you to centralize logs from all of your systems and applications in one place, known as CloudWatch Logs.
>
> **[6:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=366)** You can then search them for specific patterns, filter them based on specific fields, or archive them for future analysis.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=374)** To get started, you need to create a log group.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=378)** A log group is a group of log streams that share the same retention, monitoring, and access control settings.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=385)** Once you're in the Log groups section on the left navigation pane, click Create log group.
>
> **[6:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=391)** Provide a name for the log group.
>
> **[6:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=395)** Define a retention setting and click Create.
>
> **[6:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=398)** With the log group created, now you can figure services to send logs to this group.
>
> **[6:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=404)** For example, let's see how you can capture information about the IP traffic going to and from network interfaces of your EC2 instances.
>
> **[6:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=413)** You can achieve this with a VPC flow log.
>
> **[6:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=417)** So use the Services dropdown menu and navigate to the VPC service.
>
> **[7:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=422)** You will find this under the Networking section.
>
> **[7:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=429)** On the left navigation pane, click Your VPCs and select the VPC in which your EC2 instance is hosted.
>
> **[7:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=437)** Navigate to the Flow logs tab, then click Create flow log.
>
> **[7:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=441)** Define the type of traffic you'd like to capture: Accept, Reject, or All.
>
> **[7:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=447)** Set the destination to the log group you configured earlier.
>
> **[7:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=451)** Select an IAM role.
>
> **[7:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=453)** An IAM role is required to provide permissions to publish logs to the CloudWatch log group.
>
> **[7:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=458)** Please follow the link on screen to learn how you can create an IAM role with the required permissions.
>
> **[7:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=464)** Then click Create flow log.
>
> **[7:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=467)** Now the network interfaces in this VPC will start sending logs to the group.
>
> **[7:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=473)** Navigate back to CloudWatch.
>
> **[7:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=479)** Under Log groups, I've got a log group I configured earlier.
>
> **[8:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=483)** Clicking on the group shows log streams corresponding to the different network interfaces.
>
> **[8:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=487)** A log stream is a sequence of log events that share the same source, like in this case, the network interface.
>
> **[8:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=493)** Click on the log stream to see the events.
>
> **[8:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=495)** Once you're here, you can drill down to the details of each event or apply filters to find events of interest, like all traffic coming from or going towards a specific source or destination.
>
> **[8:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=508)** You can also use Insights to visualize data.
>
> **[8:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=511)** I find this to be a powerful tool.
>
> **[8:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=515)** For example, I'll by selecting a log group.
>
> **[8:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=519)** Then I'll use a predefined query provided by AWS.
>
> **[8:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=523)** This query identifies the top 10 by transfers, by source, and destination IP address.
>
> **[8:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=529)** The stats function summarizes the sum of bytes, by source, and destination address and stores them as bytesTransferred, which is then sorted in the descending order and limited to 10 records.
>
> **[9:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=544)** When I run this query, it shows a table of the top 10 source and destination IPS and a histogram.
>
> **[9:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=551)** As you can imagine, Log groups and Log Insights can provide valuable operational insights about your applications.
>
> **[9:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=557)** As you've just seen, CloudWatch is a fundamental service in AWS, and as an administrator, you could find yourself spending a lot of time with it.
>
> **[9:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=566)** I encourage you to play around with the tool and familiarize yourself with the capabilities and configuration.
>
> **[9:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=572)** AWS provides several configuration examples and tutorials in the CloudWatch documentation.
>
> **[9:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudwatch?u=76281980&t=576)** I encourage you to check them as well.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (10), aws (8), cpu (5), vpc (4), iam (3)
> **CLI Commands:** aws (8), find (6), make (1)
> **UI Navigation:** navigate to (4), select the (4), dropdown (2), go to (1), scroll down (1)
> **Code Keywords:** let (4), type, (1), from: (1), case, (1), interface (1)
> **Prerequisites:** configure (4), install (2), required to (1)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **Analogies:** for example (3), imagine (2), such as (1)
> **Code Identifiers:** bytestransferred (1)

#### CloudTrail
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=0)** - [Instructor] AWS CloudTrail is a service that records actions taken by a user, role, or an AWS service as AWS events.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=9)** This includes actions taken in the AWS management console, AWS command line interface, AWS SDKs, and APIs.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=19)** AWS CloudTrail helps you with key administrative and operational requirements such as governance, compliance, and risk auditing of your AWS account.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=29)** CloudTrail is automatically enabled when you create your AWS account.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=33)** When an activity occurs in your AWS account that activity is recorded as a CloudTrail event for 90 days.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=40)** In addition, you can create a CloudTrail trail to store events beyond 90 days by delivering them to an S3 bucket.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=47)** Now let's switch to the AWS management console and learn how to configure CloudTrail.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=55)** From the Services dropdown menu, navigate to the Management & Governance section and then click the CloudTrail service.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=63)** On the left navigation pane, click Event history.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=67)** Doing so will show a list of events that have occurred in your account in the past 90 days.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=72)** Click an event to know more.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=74)** For example, this event is about a delete alarms operation.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=79)** Here you can see the event time, username, event source, source IP, and more.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=87)** By scrolling down, you can see the full event record.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=90)** To store events beyond 90 days, you will need to create a trail and deliver them to an S3 bucket.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=97)** On the left navigation pane, click Trails and then click Create trail.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=103)** Note the message at the top, a trail created in the console is a multi-region trail.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=109)** So this trail will log events from all AWS regions.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=113)** If you'd like to log events in a single region you will need to use the AWS CLI, though AWS does not recommend doing so.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=121)** Provide a name for the trail, then choose to create a new S3 bucket or select an existing bucket.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=129)** For now, turn off encryption.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=133)** Notice that you also have the option to forward events to CloudWatch Logs.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=138)** These events will be stored under a specific log group so you can run queries to filter events.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=143)** You can also use Logs insights to visualize the events like we saw in an earlier video.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=149)** Click Next.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=151)** A trail can capture three types of events.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=155)** Management events provide information about management operations performed on your AWS resources.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=161)** For example, a user login activity, security related events, and more.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=166)** Data events provide information about resource operations performed on or in a resource.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=172)** For example, S3 object level activity Lambda function execution activity, and more.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=178)** Insights events capture unusual activity in your AWS account.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=183)** These events are logged only when CloudTrain detects changes in your accounts usage that differ significantly from the accounts typical usage patterns.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=191)** For now select Management event.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=194)** Click Next.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=198)** Review your selections and click Create trail.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=202)** The trail has been created, and it will start logging events to the configured S3 bucket.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=207)** Here I have a trail that I created earlier.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=210)** Let's look at the events that have been delivered to the corresponding S3 bucket.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=214)** Click the bucket name.
>
> **[3:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=218)** Once you're in the bucket, navigate to the folders until you find the appropriate log file.
>
> **[3:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=225)** Select the log file and click Download.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=229)** Once downloaded, you can use a JSON reader to view details.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=233)** Now I'm going to switch to another AWS account where I have a trail that captures Insights events.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=239)** Here is the trail that captures Insights events.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=242)** When you configure a trail for Insights events, it might be useful to enable SNS notifications.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=247)** By doing so, you'll be notified whenever CloudTrail detects a new insight about an unusual activity.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=254)** To view unusual activities detected, click Insights on the left navigation pane.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=259)** Here is an event named DeleteSnapshot that CloudTrail has marked as unusual and there's quite a few of them in a short span of time.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=267)** By clicking on an event, it shows a graph of API call volumes before or after one or more insight events are logged.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=275)** The additional information section shows the associated event IDs.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=282)** The Insights event record section contains the full record details such as the expected baseline average and the insight event average.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=290)** The CloudTrail events tab shows related events that CloudTrail analyzed to determine unusual activity.
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=297)** As you can imagine, this information can be helpful when you're analyzing this event.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=302)** You can take this a step forward and configure a Lambda function to be invoked when an SNS notification is generated.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=309)** By doing so you can configure response actions to occur when an event is recorded.
>
> **[5:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=314)** So that's about CloudTrail.
>
> **[5:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=316)** It's a simple configuration to ensure that events occurring in your account are captured.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cloudtrail?u=76281980&t=320)** You can use AWS IAM to control which users can create, configure, or delete trails, start and stop logging, and access the buckets that contain log information.

> [!info]- Semantic Content
>
> **Env Vars:** aws (18), sns (2), cli (1), json (1), api (1)
> **CLI Commands:** aws (18), find (1)
> **Code Keywords:** let (2), switch (2), delete (2), lambda (2), function (2)
> **UI Navigation:** switch to (2), navigate to (2), dropdown (1), select the (1)
> **Analogies:** for example (3), such as (2), imagine (1)
> **Prerequisites:** configure (5)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** command line (1)

#### EventBridge
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=0)** - [Instructor] One of the operational advantages of hosting your applications in the cloud is seamless connectivity between the services hosting them.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=7)** Amazon EventBridge is one such service that connects your applications with data from various sources.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=13)** It is a serverless event bus service that delivers a stream of real time data from your applications to targets such as AWS Lambda functions, HTTP invocation endpoints, or event buses in other AWS accounts.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=27)** At the core of EventBridge is an event.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=30)** An event is an indicator of a change in the environment.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=33)** When EventBridge receives an event, it applies a rule to route the event to a target.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=39)** Rules match events to targets based on either the type of event, called an event pattern, or on a schedule.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=46)** So there are a couple of ways in which you can invoke targets.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=49)** First is to configure a pattern to match events.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=52)** For example, the EC2 service creating a snapshot of an EBS volume is an example of an event, or when the state of a CloudWatch alarm has changed.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=62)** When a pattern match occurs, EventBridge will invoke the configure target.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=67)** Examples of targets include Lambda functions, SNS topics, EC2 instance actions, like stop and terminate instance, and more.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=76)** The second way is to invoke your targets at a scheduled interval.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=80)** This method can be helpful for regular backups of EBS volumes, periodic checks of EC2 instances and more.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=87)** Now let's switch to the AWS management console and learn how to configure EventBridge.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=92)** We'll configure two rules, one that automatically creates snapshots of an EBS volume once per day and another rule that notifies an administrator if the snapshot creation has failed.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=104)** From the AWS management console, use the services drop down menu and navigate to the application integration section and then click Amazon EventBridge.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=115)** EventBridge was formally called CloudWatch Events, so any rules that you created under CloudWatch Events will also show in the EventBridge console.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=124)** Before you can create a rule, you need an event bus.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=128)** An event bus is a pipeline that receives events.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=132)** EventBridge has a default event bus, which you can see by clicking event buses on the left navigation pane.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=137)** So for this exercise, you do not need to create a new event bus.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=142)** To create a new rule, begin by clicking rules on the left navigation pane.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=147)** Note that the default bus is selected.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=150)** Click create rule.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=153)** Provide a name for the rule.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=156)** Under the define pattern section, select schedule.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=160)** Use the fixed rate option and set it to every one day.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=165)** Notice that you can also define the schedule using a CRON expression, which is a powerful, easy to configure job scheduler.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=173)** Scroll down to the select target section and take a moment to review the targets that you can configure.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=179)** As you can see, you can choose from quite a few predefined targets and if there's a specific target or action you're looking for that isn't listed here, you can define a new Lambda function for that action and reference it here.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=193)** To automate snapshot creation, select the EC2 create snapshot API call.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=200)** Then provide the volume ID of the EBS volume for which you'd like to create snapshots.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=205)** To perform this action, EventBridge will require permissions on the EC2 service.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=210)** If you have an existing IAM role with the required permissions, you can add it here or use the option to create a new role with the required permissions automatically.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=220)** Notice that you can also add more targets, so when a rule matches, you can invoke multiple targets at once.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=228)** Scroll down and click create.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=231)** You've created the rule to create snapshots automatically.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=235)** Now let's create another rule that will trigger a notification if the snapshot creation fails.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=240)** Click create rule.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=242)** Provide a name.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=244)** Under the define pattern section, select event pattern.
>
> **[4:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=250)** Then select the pre-defined pattern by service option.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=253)** From the service provider dropdown, select AWS.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=257)** From the service name dropdown, select EC2.
>
> **[4:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=262)** And from the event type dropdown, select EBS snapshot notification.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=269)** Select the specific event option and set it to create snapshot.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=276)** Select the specific result option and set it to failed.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=282)** Notice that you also have the option to use the succeeded result.
>
> **[4:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=286)** This can be useful if you plan to trigger another action once the snapshot creation completes.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=292)** For example, you might want to invoke a Lambda function to copy the snapshot to another region for backup purposes.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=299)** From the target dropdown, select an SNS topic and choose a topic with the required email addresses configured.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=311)** So now you've got two rules, one to automatically create snapshots every day and another to alert you if snapshot creation fails.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=320)** As you've seen, EventBridge allows you to seamlessly connect events across services and build decoupled event-driven architectures.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=328)** It also allows you to connect events from third party software as a service applications such as Shopify, MongoDB, Salesforce and more.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/eventbridge?u=76281980&t=337)** Lastly, make sure that you delete the rules that you've configured in this exercise as automatic snapshot creation can add to your storage costs.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (6), aws (5), ebs (5), sns (2), http (1)
> **UI Navigation:** select the (4), dropdown (4), scroll down (2), switch to (1), navigate to (1)
> **Code Keywords:** lambda (4), let (2), function (2), switch (1), require (1)
> **CLI Commands:** aws (5), make (1)
> **Definitions:** is a  (3), is an  (3)
> **Prerequisites:** configure (6)
> **Analogies:** such as (2), for example (2)
> **Warnings:** note that (1)


### 7. Managing Security

#### Access Analyzer
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=0)** - [Instructor] While administrators are responsible for granting access to resources, they're also responsible for identifying unintended access.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=8)** IAM Access Analyzer is a tool that helps you do precisely this.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=12)** It lets you identify unintended access to your resources and data, helps you implement least privilege access and reduces your risk exposure.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=22)** You can use Access Analyzer to analyze S3 buckets, IAM roles, AWS key management service, or KMS keys.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=31)** These are the keys that you use to encrypt your resources, Lambda functions, Simple Queue Service or SQS queues and secrets manager secrets.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=41)** You begin by enabling Access Analyzer for your account or AWS organization known as your zone of trust for the analyzer.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=48)** The analyzer monitors all supported resources within your zone of trust.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=53)** If Access Analyzer identifies a policy that grants access to an external principle that isn't within your zone of trust, it generates a finding.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=63)** The finding includes details about the resource, the external entity with access to it and permissions granted.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=71)** Now let's switch to the AWS management console and learn how to configure Access Analyzer.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=77)** Use the services drop down menu and navigate to the security identity and compliance section and then go to the IAM service.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=89)** On the left navigation pane, click Access Analyzer.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=94)** Then click create analyzer.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=98)** Note that the region is automatically set to your currently selected region.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=103)** Remember that you'll need to enable this in every region where you plan to analyze access.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=109)** Notice that a name has been automatically populated.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=113)** Here is your zone of trust, your current account.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=117)** Scroll down and click create analyzer.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=122)** The analyzer has been created.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=125)** Notice that it has generated a finding for an S3 bucket, a KMS key and an IAM role.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=132)** To review the finding, click the finding ID.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=137)** Here's the resource ID, resource owner account, external principle with which the resource is shared, finding status and permissions granted on the resource.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=150)** As you can imagine, this information is key in determining if this access was intended.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=156)** If the access was intended, you can archive the finding.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=160)** In this case, the IAM role was intentionally created as part of setting up AWS organizations.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=166)** So I'll click archive.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=167)** The status of the finding has changed to archived.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=171)** Back to the list of findings.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=175)** Now let's review the finding related to the S3 bucket.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=179)** The finding states that the bucket allows public access and here's the configured access level.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=185)** It also states that the bucket is shared using a bucket ACL.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=190)** This does not look like intended access so let's go to the resource by clicking the resource ID.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=196)** Doing so takes you directly to the resource, navigate to the permission's tab, and under the access control list section you can see the public list and read access has been configured.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=208)** To fix this, I'll click edit.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=213)** Then I'll remove the check boxes that grant public access.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=217)** Then I'll click save changes.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=221)** Now I'll return to the Access Analyzer service to verify that the findings status has been updated.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=232)** I'll click the finding ID and then click re-scan.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=240)** We can see that the status has changed to resolved.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=244)** Back to the list of findings, you will find archived and resolved findings under their respective tabs.
>
> **[4:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=250)** As you've just seen, Access Analyzer is simple to enable, quickly reviews your resources, and identifies those that have been shared with external principles.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=259)** With this tool, administrators can quickly identify unintended access without manually reviewing policies associated with resources.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=267)** I should add that the tool would have been more helpful if it natively had notification capabilities.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=273)** But there's a workaround to this.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=275)** You can configure notifications using EventBridge.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=277)** First, navigate to the EventBridge service, click create rule, provide a name for the rule, under the defined pattern section, select event pattern.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=293)** Then select custom pattern and add this event pattern in the box.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=299)** This event pattern has the source set to access analyzer and it matches when a finding is generated or changes state.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=305)** You will find more information about this event pattern in the EventBridge documentation, click save.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=313)** From the target dropdown, select SNS topic and then select the desired topic.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=321)** Scroll down and click create.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=325)** The rule is created.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=328)** Remember that the event pattern matches every new finding and change of finding state.
>
> **[5:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=332)** So you'll receive a notification for every generated finding.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=336)** In an earlier video, you saw that you can also invoke a Lambda function within an EventBridge rule.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=341)** By doing so, you can configure automated actions to occur when a rule is matched because of a new finding.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=347)** You will find more information about this in the AWS documentation and Access Analyzer is a free service.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=354)** So that's about Access Analyzer.
>
> **[5:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/access-analyzer?u=76281980&t=356)** It is simple to configure and once enabled, it will keep analyzing your resources to look for those allowing unintended access.

> [!info]- Semantic Content
>
> **Env Vars:** iam (5), aws (5), kms (2), sqs (1), acl (1)
> **Code Keywords:** let (3), public (3), this. (2), lambda (2), switch (1)
> **UI Navigation:** go to (2), scroll down (2), navigate to (2), switch to (1), dropdown (1)
> **CLI Commands:** aws (5), find (3)
> **Prerequisites:** configure (4), you'll need (1)
> **Definitions:** is a  (2), known as (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)

#### Managing keys and secrets
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=0)** - Encryption is an essential and fundamental security requirement for production workloads.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=5)** In this regard, it is helpful for administrators to know how AWS handles encryption.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=9)** AWS has a service called Key Management Service or KMS that allows you to create and control the cryptographic keys used to protect data.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=19)** Within KMS, you can create keys to encrypt and decrypt data.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=23)** Keys can be symmetric or asymmetric.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=27)** Symmetric keys are used for encryption and decryption while asymmetric keys consist of a key pair of a private and public key.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=35)** When one key is used for encryption, the other is used for decryption.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=39)** Symmetric keys and the private keys of asymmetric keys never leave KMS unencrypted.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=45)** When working with KMS, your keys can be AWS managed or customer managed.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=50)** AWS Managed Keys are created, managed, and used on your behalf by an AWS service integrated with KMS.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=58)** You cannot use these keys directly, but rather the service that creates them, uses them on your or behalf.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=64)** A Customer Managed Key is one that you create, own, and manage.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=68)** You can audit the usage of KMS keys in AWS cloud trail logs.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=73)** Now, let's switch to the AWS Management Console and see how you can create keys.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=78)** From the services dropdown menu, navigate to the Security Identity and Compliance section, and then go to Key Management Service.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=88)** From here, click AWS managed keys.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=91)** Here, you can see that I've got several AWS managed keys.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=94)** But notice that, you do not have the option to create a new key.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=98)** This is because the services that need the keys will create them.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=101)** Now, let's create a Customer Managed Key.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=103)** Click customer managed keys, and then click create key.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=109)** Select the symmetric key type and click next.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=114)** Provide a display name for the key.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=117)** Click next.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=120)** This step, that is step number three, and the next are important steps.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=125)** In this step, you can choose the IM Rules and users allowed to administer this key.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=131)** Typically, you would want this permission to rest with specific accounts only.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=136)** Click next.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=138)** Here, you can choose the users and rules allowed to use the key for cryptographic operations such as encryption and decryption.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=145)** So here, you can add users such as application developers, who need to use this key.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=150)** Notice that you can also add other AWS accounts.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=154)** On the next step, review your selections.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=158)** Note that you cannot change the configuration after you create the key.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=161)** Click finish.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=163)** The key has been created and will be available when you try to perform an operation like encryption.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=170)** For example, let's navigate to the EC2 service.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=177)** On the left navigation pane, click volumes, and then click create volume.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=184)** Down here, if you choose to encrypt the volume, you will see that the default AWS managed keys is available and the key that you created.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=192)** One final thing I'd like to add here, is that customer managed keys can only be scheduled for deletion.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=199)** So, if you no longer or need a key, select it, go to key actions, and select schedule key deletion.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=207)** Here you can configure a waiting period between seven and 30 days.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=211)** Confirm that you want to delete the key after waiting period, and click schedule deletion.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=216)** Now the key has been scheduled for deletion.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=219)** If you change your mind within the waiting period, select the key, click key actions, and select cancel key deletion.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=228)** Now let's shift our attention to another related service.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=232)** A common misconfiguration for applications that access information from a database, is to embed the database credentials in the application itself.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=241)** This approach presents two challenges.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=243)** One is really to security.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=245)** Since the credentials are exposed in the application code, anyone with access to the code can get the credentials.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=252)** The second is related to key rotation.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=254)** When you rotate the database credentials you need to update the application code as well.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=259)** And to avoid this, if you choose not to rotate the credentials, you end up exposing your application to risk.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=265)** AWS has a service called Secrets Manager, that allows you to address this problem.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=269)** You can store your secrets, such as passwords in Secrets Manager.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=273)** So when your application needs it, it can use an API called retrieve it programmatically.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=278)** With Secrets Manager, you can store database details such as server name, IP address, port number and the username, and password used to sign in.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=287)** The protected text of a secret is encrypted using KMS.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=291)** You can also configure Secrets Manager to rotate your secrets automatically.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=295)** It does this using a Lambda function.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=299)** Now let's switch to the AWS Console and see this in action.
>
> **[5:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=303)** Use the services dropdown menu, and go to Secrets Manager, under the Security Identity and Compliance section.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=313)** From here, click store a new secret.
>
> **[5:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=317)** First, you need to select the secret type you'd like to store.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=321)** For this demonstration, you will store secrets for an RDS database.
>
> **[5:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=326)** Use this option if you'd like to store other information types that don't fit into these available options.
>
> **[5:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=332)** For example, IP address, port number, and more.
>
> **[5:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=335)** Here, you can specify the username and password that grants access to the database.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=341)** Next, you will need to select an encryption key to secure your secret information.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=346)** You can use the default encryption key or a customer managed key.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=352)** In the next section, you will find your database just listed.
>
> **[5:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=356)** Select a database and click next.
>
> **[6:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=361)** Provide a name for the secret.
>
> **[6:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=367)** Leave other settings at the default and click next.
>
> **[6:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=371)** In this step, you can configure automatic rotation.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=374)** Select the option to enable automatic rotation and define the rotation interval.
>
> **[6:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=379)** Notice the message at the top.
>
> **[6:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=381)** If you enable automatic rotation, the first rotation will occur when you store the secret.
>
> **[6:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=386)** So if your application is already using the secret, it will need to retrieve it from Secrets Manager.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=393)** Down here, you can choose to create a new Lambda function to perform rotation or use an existing one.
>
> **[6:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=401)** Provide a name for the function.
>
> **[6:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=404)** Click next.
>
> **[6:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=406)** This is the last step where you can review your selections.
>
> **[6:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=411)** I like that AWS provides you with a sample code in different languages that you can use to retrieve the secret programmatically.
>
> **[6:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=418)** So you can give this code to your developers to update their application code.
>
> **[7:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=425)** Scroll down and click store.
>
> **[7:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=428)** The secret has been stored and is ready for your applications to retrieve programmatic.
>
> **[7:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/managing-keys-and-secrets?u=76281980&t=432)** One last thing I'd like to add here, is that when you create a secret, it is stored in a single region, but you can replicate it in multiple AWS regions to support multi-region applications and disaster recovery scenarios.

> [!info]- Semantic Content
>
> **Env Vars:** aws (15), kms (7), ec2 (1), api (1), rds (1)
> **Code Keywords:** let (5), function (3), private (2), switch (2), lambda (2)
> **CLI Commands:** aws (15), find (1)
> **UI Navigation:** select the (4), go to (3), switch to (2), dropdown (2), navigate to (2)
> **Analogies:** such as (4), for example (2)
> **Prerequisites:** configure (3)
> **Cross-References:** in the next (1)
> **Tools:** aws console (1)

#### Amazon GuardDuty
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=0)** - [Instructor] AWS has a service known as GuardDuty that allows you to continuously analyze information from multiple sources to identify unexpected and potentially malicious activity in your account.
>
> **[0:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=11)** It processes information from VPC flow logs, CloudTrail management event logs, CloudTrail S3 data event logs, and DNS logs.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=22)** It correlates information from these sources with threat intelligence feeds to identify issues such as malicious IP addresses, privilege escalation, and use of exposed credentials.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=34)** A potential security issue detected in your account is represented as a finding.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=39)** Each finding has a severity level within the range of 0.1 to 8.9, that reflects the potential risk the finding could have in your network.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=47)** A higher value indicates a higher security risk.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=50)** For EC2 instances, some of the findings that GuardDuty detects include backdoors, unusual behavior, cryptocurrency related activity, Trojans, unauthorized access, and more.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=63)** For S3 findings include, penetration testing, unauthorized access, attempts to discover resources in your AWS account, attempts to modify access permissions on an S3 bucket, and more.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=77)** For IAM, findings include, penetration testing, unauthorized access, attempts to access credentials, attempts to evade defensive measures, attempts to obtain high level permissions, and more.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=91)** You will find the full list of finding types in the GuardDuty documentation.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=96)** An important note about GuardDuty.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=98)** It is a regional service, so you will need to enable it in each region that you want to monitor.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=104)** Now let's switch to the AWS Management Console and configure GuardDuty.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=111)** From the services dropdown menu navigate to the security identity and compliance section and then go to the GuardDuty service.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=120)** Click get started, then click enable GuardDuty.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=126)** Now GuardDuty will evaluate your resources and generate findings.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=131)** This can take a while, so we'll generate sample findings provided by GuardDuty.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=135)** Go to settings on the left navigation pane and click generate sample findings.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=144)** Now, if you go back to findings, you will notice that your account has been populated with sample findings.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=150)** Let's look at some of these findings.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=153)** This finding states that a specific EC2 instance is behaving in a manner that may indicate that it is being used to perform a denial of service attack.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=163)** Scrolling down, you will see the affected resource and its details.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=168)** You can also investigate this with Detective.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=171)** It allows you to visualize and quickly investigate incidents.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=179)** Here is another finding that is reporting and EC2 instance that is communicating on an unusual port 25 with a remote host.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=187)** Click info to know more about a finding.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=190)** If you'd like to further process these findings like notify an SNS topic, or take further action with a Lambda function, you can do so with EventBridge.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=200)** First, navigate to the EventBridge service.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=203)** Click create rule.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=208)** Use the event pattern option then select redefined pattern by service and AWS as the service provider.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=217)** Set the service to GuardDuty and the event type to GuardDuty Finding.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=223)** Then under the target section you can invoke a Lambda function or an SNS topic.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=228)** So that's about GuardDuty.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=230)** It is a simple to configure service and once enabled, it will continuously evaluate your resources for malicious activity.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/amazon-guardduty?u=76281980&t=237)** As you can imagine, security analysis with GuardDuty can significantly improve the security posture and reduce the threat exposure of your organization.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), ec2 (3), sns (2), vpc (1), dns (1)
> **Code Keywords:** include, (2), let (2), lambda (2), function (2), switch (1)
> **UI Navigation:** navigate to (2), go to (2), switch to (1), dropdown (1)
> **CLI Commands:** aws (4), find (1)
> **Definitions:** is a  (2), known as (1)
> **Versions:** 0.1 (1), 8.9 (1)
> **Analogies:** such as (1), imagine (1)
> **Prerequisites:** configure (2)

#### Protect sensitive data with Amazon Macie
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=0)** - [Instructor] One of the most common misconfigurations that occur in the AWS Cloud is misconfigured S3 buckets.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=6)** S3 buckets can contain images, videos, sensitive files, application logs, and even database backups.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=15)** As you can imagine, for large organizations that use S3 as an object storage service, it can be an challenge to ensure that sensitive data is not publicly exposed and buckets are not incorrectly configured.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=28)** AWS has a service called Amazon Macie that automatically discovers sensitive data, such as personally identifiable information, personal health information, and financial data stored in your S3 buckets.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=40)** It does so using managed data identifiers, which are pre-configured patterns and criteria used to detect sensitive data types for many countries and regions.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=49)** With Macie you can also define custom data identifiers using regular expressions.
>
> **[0:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=54)** A regular expression is a text pattern that you'd like to match.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=58)** Additionally, it also identifies buckets that are unencrypted or overly permissive.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=63)** It is a fully managed service, so it eliminates the need to manually review the data contained in your buckets.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=69)** Detections made by Macie are reported as findings that you can analyze within Macie, or export to third-party applications for further processing.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=78)** There are two types of findings, policy findings and sensitive data findings.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=84)** A policy finding highlights a potential policy violation for an S3 bucket.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=89)** For example, a bucket that allows public read access.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=93)** While a sensitive data finding highlights sensitive data in an S3 object.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=97)** For example, personally identifiable information, like credit card numbers found in an object.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=102)** Now, let's switch to the AWS Management Console, and see how to configure Macie.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=108)** From the services drop-down menu navigate to the Security, Identity, and Compliance section, and then go to Amazon Macie.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=118)** Click Get Started.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=121)** On this screen, AWS tells you that Macie will create a service-linked role to get the required permissions on S3.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=128)** It also states that there's no charge for analyzing up to one GB of data each month.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=133)** Read the text, and click Enable Macie.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=137)** Once enabled, Macie will start retrieving data from your S3 buckets.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=142)** This can take a few moments.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=145)** Over here, you can see details about publicly accessible buckets.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=149)** Next is encryption related details, such buckets with encryption enabled and disabled, and next is information about buckets that have been shared.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=159)** As you can see, this visibility is helpful, especially for production environments where you're likely to have hundreds of buckets with varying configurations and a higher likelihood of a possible misconfiguration.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=170)** These checks have been applied at the bucket level.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=173)** Now, let's analyze the contents of your bucket.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=176)** On the left navigation pane click Get Started.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=179)** You have the option to analyze a bucket or analyze a public bucket.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=185)** Click Create Job.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=187)** Here, you can manually select the buckets, or enter criteria to specify the buckets you'd like to analyze.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=193)** Choose the first option, and select the buckets you'd like to analyze.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=199)** Click Next.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=202)** Review your bucket selections, and click Next.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=205)** In this step, you can configure this to be a one-time job or a scheduled job.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=210)** If your bucket contents get updated, it is a good idea to schedule the job to occur at a regular interval.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=217)** If you'd like your job to include only certain objects or exclude some, you can configure this from the additional settings section.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=224)** Select the criteria such as file extension, and then add it to the include or exclude list.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=230)** Click Next.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=232)** In this step, you can specify the AWS defined, or manage data identifiers you'd like to include in your checks.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=239)** Remember, a data identifiers are pre-configured patterns and criteria used to detect sensitive data types.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=247)** By default, everything is included, but if you choose either include or exclude, you'll be able to view the pre-configured data identifiers.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=255)** It contains identifiers for information, such as bank account numbers, driving license numbers, phone numbers, credit card numbers, and more.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=264)** Set it to all, and click Next.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=269)** In this step, you can define custom data identifiers.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=273)** This can be useful to look for specific types of data not already matched by the predefined identifiers.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=280)** Provide a name for the job.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=282)** Click Next.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=284)** This is the final step where you can review your selections.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=288)** Click Submit.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=291)** The job has been created and is running.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=294)** It can take a few minutes to complete.
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=297)** In another region, I've already set up Macie.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=301)** Let's switch to the other region.
>
> **[5:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=303)** Click Findings on the left navigation pane.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=306)** As you can see, I've got some findings.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=308)** When I click this finding, it says that the object contains credentials such as access keys and account IDs.
>
> **[5:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=314)** Scrolling down, you will see useful information like the resource name, bucket name, public access, and encryption status, and more.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=323)** You can also suppress findings.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=325)** This can be useful when your application developers are working with a sample data set.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=330)** You also have the option to view findings by bucket.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=333)** This can be useful if you have many buckets, and you'd like to work your way through the findings bucket by bucket.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=338)** You can also view findings by finding type and by job.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=342)** One last thing I'd like to show you here, is the Usage section.
>
> **[5:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=345)** It shows you estimated month-to-date costs.
>
> **[5:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=348)** You might want to take findings from Macie, and process it further.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=352)** You can do this with EventBridge.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=354)** I'll show this to you quickly.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=357)** Navigate to the EventBridge service.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=360)** Click Create Rule, and match an event pattern for the Macie service.
>
> **[6:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=365)** Then you can invoke a target each time a finding is generated, like passing the finding details to a Lambda function, which can then send it to your security incident and event management system, or SIEM system, or you also send a notification via SMS.
>
> **[6:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=381)** So as you've seen, Macie is simple to configure and it can help improve your data security and data privacy.
>
> **[6:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/protect-sensitive-data-with-amazon-macie?u=76281980&t=387)** It can also be helpful in meeting regulations, such as HIPAA and GDPR.

> [!info]- Semantic Content
>
> **Code Keywords:** public (3), let (3), switch (2), match. (1), default, (1)
> **Env Vars:** aws (5), siem (1), sms (1), hipaa (1), gdpr (1)
> **Analogies:** such as (5), for example (2), imagine (1)
> **UI Navigation:** select the (3), switch to (2), go to (1), navigate to (1)
> **CLI Commands:** aws (5)
> **Prerequisites:** configure (4), set up (1)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### Manage SSL certificates with AWS Certificate Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=0)** - [Speaker] A critical component in any production network is SSL/TLS Certificates.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=5)** SSL/TLS certificates are important for a variety of use cases, like encrypting network communication and protecting sensitive data over the internet, verifying the identity of websites over the internet, securing communication in a private network between applications, servers, and mobile devices and meeting regulatory and compliance requirements for encryption of data in transit.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=27)** If you've hosted your applications and workloads in the AWS cloud, you may also want your certificates to be managed natively on AWS.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=35)** AWS has a service known as AWS Certificate Manager or ACM.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=40)** That helps you manage your certificates.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=42)** ACM allows you to create, store, and renew public and private SSL, TLS X.509 certificates.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=49)** You can issue certificates directly from ACM or import your existing third-party certificates.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=55)** The most common use case of ACM is to secure public websites.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=59)** Currently you can use certificates issued by ACM with these applications - Elastic load balancers, Amazon CloudFront, AWS Elastic Beanstalk, Amazon API gateway, AWS Nitro Enclaves and AWS CloudFormation.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=77)** I should also add that you cannot install a certificate issued by ACM directly on your website or application.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=84)** You will need to use it with one of the supported applications.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=88)** Certificates issued by ACM are domain validated.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=91)** This means that you must validate that you own the domains you specify in your request.
>
> **[1:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=96)** They have a validated period of 13 months.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=100)** They are trusted by major browsers, such as Google Chrome, Mozilla Firefox, and others and they support the use of wild card names such as star.[example.com](https://example.com).
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=110)** Which you can use to protect multiple domains like blog.[example.com](https://example.com) and images.[example.com](https://example.com).
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=117)** ACM also has an offering called ACM Private CA or ACM Private Certificate Authority for customers who want to build public key infrastructure inside the AWS cloud and use it privately within the organization.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=131)** ACM Private CA is excellent for internal use and you can use it to create your own certificate authority or CA hierarchy, issue certificates for internal use, and use certificates to authenticate users, computers, applications, and other devices.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=147)** As the name implies, you cannot use certificates issued by ACM Private CA on the public internet.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=154)** Now let's switch to the AWS management console and look at the configuration.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=160)** From the services dropdown menu, navigate to the Security, Identity, and Compliance section and then go to Certificate Manager.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=168)** From here, you can request a certificate, import a certificate issued by a third-party, or create a private CA.
>
> **[2:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=176)** Let's walk through the steps to request a certificate.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=181)** If you have a private CA setup in AWS, you can request a private certificate, but we don't have one right now, so we'll request a public certificate.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=191)** Enter the fully qualified domain name that you'd like to protect.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=194)** Note that you can also add a wild card and add more than one domain name to the certificate.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=200)** Next, you need to select a validation method so AWS can verify that you own or control the domain.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=207)** DNS validation is a common method.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=210)** Add the required tags and click request.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=216)** Here is your certificate request and as you can see, it is pending validation.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=220)** Click the request to see the CNAME name and value that you must add by logging into your domain provider's account.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=227)** Sometimes it may take a minute for these values to populate.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=230)** If that's the case, just refresh the page.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=234)** I should mention that the steps you'll need to follow to add the CNAME record will depend on your domain registrar.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=240)** So I recommend that you consult their documentation.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=243)** Generally, it's a simple process.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=245)** I also recommend that you review ACM's DNS validation document, as it contains some helpful information.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=251)** I have a request in another region for which I've already validated the domain ownership.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=257)** So I'll switch the region.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=260)** Here you can see that ACM has issued a certificate.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=264)** Just to reiterate, you won't be able to install the certificate directly on your website or application, but you can use it in a supported application, like Elastic Load Balancers.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=274)** Let's look at it.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=276)** First, I'll switch to the EC2 service.
>
> **[4:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=281)** On the left navigation pane, I'll click Load Balancers.
>
> **[4:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=285)** Then I'll click Create Load Balancer and from the available types, I'll select Application Load Balancer.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=293)** I'm going to skip these details and scroll down to the listener section.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=298)** I'll set the protocol as HTTPS.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=300)** When I switch to HTTPS, I have the ability to add a default SSL certificate and here in the dropdown, I can select the certificate issued by ACM.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=311)** As you can see, it is seamless once the certificate is issued.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=315)** You can also import a certificate into ACM.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=321)** One reason to import your certificate is that you may have application specific requirements that are not met by ACM issued certificates.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=330)** Click the import button and fill in the details such as body, private key, and optionally the certificate chain.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=338)** In the next step, you will add the required tags and in the last step you will review and finish the import.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=344)** Now let's see how you can create an ACM Private CA.
>
> **[5:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=348)** On the left navigation pane, click "Private CA".
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=353)** Doing so will open the service in an new browser tab.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=357)** Click "Create a private CA".
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=360)** In the first step, you will specify if you want to create a Root CA or a Subordinate CA, which is the case if you're going to create a CA that is subordinate to an existing CA.
>
> **[6:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=372)** In the next step, you will need to provide at least one distinguished name.
>
> **[6:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=375)** Such as organization, organization unit, country, state, locality, name and common name.
>
> **[6:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=383)** Enter any one of these.
>
> **[6:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=388)** In the next step, select the key algorithm you would like to use for your CA.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=393)** In the next step, you will configure how you want to manage certificate revocations.
>
> **[6:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=398)** You can use a CRL, which is a Certificate Revocation List.
>
> **[6:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=401)** It uses an S3 bucket.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=403)** Or you can use OSCP, also known as Online Certificate Status Protocol.
>
> **[6:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=408)** If you're not sure which is the right one for you your IT infrastructure team may be able to help.
>
> **[6:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=414)** Then configure the required tags.
>
> **[6:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=416)** In the next step, you will need to provide ACM permissions to renew certificates issued from the CA.
>
> **[7:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=424)** In the last step, review your selections, acknowledge the pricing and click confirm and create.
>
> **[7:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=431)** The ACM Private CA is an expensive resource but there is a 30 day free trial for the first private CA created in the account and region.
>
> **[7:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=438)** So I won't recommend a trial deployment unless you are in the free tier.
>
> **[7:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/manage-ssl-certificates-with-aws-certificate-manager?u=76281980&t=442)** As you've seen, ACM is simple to use and checks an important box for administrators which is to have a robust certificate management system.

> [!info]- Semantic Content
>
> **Env Vars:** acm (21), aws (11), ssl (4), tls (3), dns (2)
> **Code Keywords:** private (15), public (5), let (4), switch (4), case, (1)
> **CLI Commands:** aws (11)
> **UI Navigation:** switch to (3), dropdown (2), navigate to (1), go to (1), scroll down (1)
> **Cross-References:** in the next (5), in the last (2)
> **Definitions:** is a  (3), known as (1), means that (1), is an  (1)
> **Prerequisites:** install (2), configure (2), setup (1), you'll need (1)
> **Analogies:** such as (4)

#### AWS Security Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=0)** - [Instructor] When you have production workloads hosted in the AWS cloud you would want to ensure that they are following security best practices and compliance requirements.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=9)** Administrators can review their adherence to best practices in a couple of ways.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=13)** One way is to manually review the resource configuration which is prone to errors and can take a significant amount of time.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=20)** Another way is to use an automated tool.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=22)** AWS Security Hub is a service that collects security data from your AWS accounts, services and third party partner products, analyzes and compares them against security standards and best practices.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=36)** With Security Hub, you can continuously and automatically review configuration, reduce the effort required to collect and prioritize for findings, get a consolidated view of findings across your AWS accounts and partner products and automate remediation of findings by integrating with services such as Amazon EventBridge.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=53)** Now let's switch to the AWS management console and look at the configuration.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=60)** From the services drop down menu, navigate to the security identity and compliance section and then go to the Security Hub service.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=70)** If this is the first time you are here, you will see a splash screen.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=74)** Click go to Security Hub.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=77)** Security Hub relies on another service called AWS Config to perform security checks.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=83)** AWS Config is a service that allows you to record the configuration of your resources and understand how your resources are related to each other.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=90)** We'll talk more about AWS Config in a later video.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=94)** There's a couple of ways to enable AWS Config.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=97)** You can do it from the service console or you can download a template from here and execute it in the CloudFormation service.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=104)** I'll show you how to do it from the service console.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=107)** From the services menu, go to the management and governance section and then go to the config service.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=116)** From here, click one click setup then click confirm.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=122)** When the setup has completed, return to the Security Hub service.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=130)** Here you can select the security standards against which you'd like to evaluate your resources.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=136)** Then click enable Security Hub.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=140)** Once enabled, it can take up to two hours to generate findings.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=144)** I've got some findings in another region so I'm going to switch my region.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=149)** At the top, we've got an overall security score computed against the security standards we've enabled.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=155)** Next, there's a widget representing resources with the most failed security checks.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=160)** These are your low hanging fruits and you can make rapid progress in improving your security posture by remediating these resources.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=167)** Let's spend some time here.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=169)** I'll click on the first resource.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=172)** Doing so shows the associated findings.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=175)** I'll reverse sort by severity so we are looking at the most important ones first.
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=182)** Here I've got a critical severity finding that has failed because I do not have hardware multifactor authentication enabled for the root account.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=189)** I've already secured this account with a virtual MFA device.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=193)** So I'll suppress this finding.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=194)** To do so, I'll select the finding, click workflow status and then click suppressed.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=201)** Scrolling down the list, I can see there's a fail check that requires IAM password policy to have a password length of a minimum of 14 characters.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=209)** Let's fix this.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=211)** To learn how you can remediate this finding, click the finding title.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=215)** Doing so will bring up a panel with all the information including how you can remediate.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=224)** To remediate this, I'll navigate to the IAM service.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=231)** Then I'll navigate to account settings.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=235)** Under the password policy section, I'll click change.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=240)** I'll set the minimum password length to 14 characters and enable the other check boxes to require at least one upper case letter, one number and one symbol preventing password reuse.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=252)** Then I'll click save changes.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=254)** That should take care of those failed findings and their status should update in a little while.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=261)** Back to Security Hub, here we can see some more useful widgets like this one here.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=266)** It shows findings by region.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=269)** This information helps review regional status without visiting each region.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=273)** The new findings over time by severity widget helps analyze progress over time.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=278)** And scrolling further, you've got widgets representing findings from individual services.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=284)** To review findings by standards, click security standard on the left navigation pane.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=291)** Then click view results for the desired standard.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=294)** As an example, this is a list of findings from AWS foundational security best practices.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=300)** Use the download option to get this information in a CSV file.
>
> **[5:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=304)** You can then pass this to another team who might be responsible for mitigating them.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=309)** The insight section contains some helpful information.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=312)** An insight is a collection of related findings and helps identify a security area that requires attention.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=319)** Some important ones include S3 buckets with public write or read permissions, AWS principles with suspicious access key activity, S3 buckets with sensitive data, credentials that may have leaked, EC2 instances with general unusual behavior and more.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=337)** And all generated findings are listed under the findings tab.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=341)** The full potential of a tool like Security Hub can be leveraged by feeding it with data from third party sources.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=347)** By clicking integrations, you will see the AWS services from which Security Hub is already accepting findings with the option to stop accepting.
>
> **[5:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=355)** You will also see AWS partner network solutions.
>
> **[5:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=359)** It is an extensive library, and you're likely to find your enterprise solutions listed here.
>
> **[6:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=364)** To learn how you can manage third party product integrations with Security Hub, please refer to the documentation.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=370)** As you'd imagine to take full advantage of this tool, you would want to automate remediation of findings.
>
> **[6:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=377)** Security Hub automatically sends all new findings and updates to existing findings to EventBridge as events.
>
> **[6:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=383)** As you've seen earlier in this course, you can configure the actions to be taken when EventBridge receives an event.
>
> **[6:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=390)** Actions include posting to an SNS topic, invoking a Lambda function for further processing and more.
>
> **[6:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=396)** Instead of automatically processing all findings, you may want to process a smaller set of findings.
>
> **[6:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=402)** For example, you may want to send a finding detail to your security admin for further investigation.
>
> **[6:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=408)** You can do this by creating a custom action.
>
> **[6:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=410)** On the left navigation pane, click settings and then click custom actions.
>
> **[6:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=416)** Create a new custom action.
>
> **[6:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=419)** You'll need to provide a name, description and custom action ID.
>
> **[7:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=425)** Then click create custom action.
>
> **[7:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=429)** Copy the ARN of the custom action.
>
> **[7:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=432)** Copy the ARN of the custom action.
>
> **[7:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=435)** Now you can create an EventBridge rule with this.
>
> **[7:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=438)** Navigate to the EventBridge service.
>
> **[7:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=441)** Once you're in EventBridge, create a new rule.
>
> **[7:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=445)** Provide a name for the rule.
>
> **[7:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=448)** Select event pattern and then select predefined pattern by service.
>
> **[7:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=454)** Set the service provider to AWS.
>
> **[7:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=457)** Set the service name as Security Hub.
>
> **[7:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=461)** And the event type as Security Hub findings custom action.
>
> **[7:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=466)** Then specify the ARN of your custom action.
>
> **[7:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=470)** Scroll down and configure the desired target.
>
> **[7:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=473)** In this case, I'll select SNS topic and then I'll select the topic.
>
> **[7:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=478)** Then click create.
>
> **[8:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=482)** With the rule created, now you can send findings to this custom action.
>
> **[8:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=487)** Return to the Security Hub service.
>
> **[8:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=492)** Click findings then select the desired findings.
>
> **[8:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=496)** Click the actions button and point it to the custom action.
>
> **[8:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-security-hub?u=76281980&t=501)** So as you've seen, Security Hub is a service that can reduce the effort required to analyze your adherence to best practices, reduce your attack surface by helping you mitigate failed findings, and function as a one stop for security findings across your enterprise applications.

> [!info]- Semantic Content
>
> **Env Vars:** aws (14), arn (3), iam (2), sns (2), mfa (1)
> **CLI Commands:** aws (14), make (1), find (1)
> **Code Keywords:** let (3), switch (2), this. (2), function (2), this, (1)
> **UI Navigation:** navigate to (4), go to (4), select the (4), switch to (1), click on (1)
> **Definitions:** is a  (5), is an  (1)
> **Prerequisites:** setup (2), configure (2), required to (1), you'll need (1)
> **Analogies:** such as (1), imagine (1), for example (1)
> **Cross-References:** earlier in (1)


### 8. Management and Compliance

#### AWS Organizations
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=0)** - [Instructor] Organizations with workloads hosted in AWS usually begin with one AWS account and add more later as their business requirements grow and change.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=10)** Customers have multiple AWS accounts because it allows them to group workloads based on business purpose and ownership, apply distinct security controls based on environment, restrict access to sensitive information, limit the scope of impact from adverse events, and support multiple IP operating models.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=28)** But more accounts also means increased management overhead.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=31)** For each account, you will need to control access, monitor governance, audit for compliance, and of course, manage billing.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=39)** AWS Organizations is an account management service that allows you to consolidate multiple AWS accounts into an organization that you create and centrally manage.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=48)** As an administrator of the organization, you can add existing accounts or create new accounts in the organization.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=55)** The account you use to create the organization is called a management account, and the account you add to the organization is called a member account.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=63)** With AWS organizations, you can centralize management by combining your accounts into an organization.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=69)** You can consolidate billing for member accounts.
>
> **[1:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=72)** The management account is built for all charges of the member accounts.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=75)** You can also hierarchically group your accounts into organizational units, also known as OUs.
>
> **[1:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=81)** An OU is a way to group your accounts logically.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=84)** It is a container for accounts within the parent container, which is known as the root account.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=89)** You can also attach different access policies to each OU.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=93)** With AWS Organizations, you can also define permissions for member accounts by using service control policies, also known as SCPs.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=102)** Using SCPs, you can restrict the AWS services, resources, and actions the users and roles in each member account can access.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=110)** Let's understand this with an illustration.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=113)** At the top is root, the parent container for other accounts in the organization.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=119)** Root contains the management account, the one you use to create the organization.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=123)** Under root you can define the OUs.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=126)** As an example, here we've got two OUs, production and non-production.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=131)** The non-production OU has two nested OUs, testing and development.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=135)** Each of these OUs contains one member account.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=139)** When you apply a policy at the root, it applies to all accounts in the organization.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=143)** When you apply a policy to an OU, it only applies to the accounts within the OU.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=148)** You can also apply a policy directly to a member account, which affects the account only.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=153)** Since the management account is the most important account in an AWS Organization, AWS recommends using it only for tasks that absolutely require the management account.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=163)** All your resources should be stored in member accounts of the organization and kept out of the management account.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=168)** You should also use a complex password and enable multifactor authentication for the management account's root user.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=175)** Doing this will improve the management account security, and this also applies to the member accounts.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=180)** Finally, I'd like to add that AWS Organizations is free to use.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-organizations?u=76281980&t=185)** You're only charged when you access other AWS services from the accounts in your AWS organization.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (13)
> **Env Vars:** aws (13)
> **Definitions:** known as (3), is called (2), is a  (2), is an  (1)
> **Code Keywords:** let (1), require (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Create an AWS Organization
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=0)** - [Instructor] Now let's walk through the steps to create an AWS organization.
>
> **[0:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=3)** To perform the steps in this demonstration, you will need two AWS accounts.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=8)** You'll configure one as the management account and then you will add another account as a member within the organization.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=14)** Under the management account, you will create two OUs or organizational units, production and non-production.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=21)** Then you will invite an existing AWS account as a member account under the production OU.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=25)** Start with the AWS account you intend to use as the management account.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=29)** To distinguish the accounts, I've named my management account as account one and the member account as account two.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=36)** From the services dropdown menu, navigate to the management and governance section, and then go to the AWS organization service.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=45)** Click create an organization.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=47)** The organization has been created.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=51)** At the top is root which contains the management account.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=55)** This is the account you're currently logged into.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=59)** Now let's create the required OUs under root.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=62)** Select root, click actions and then click create new.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=68)** Provide a name for this OU in this case, production.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=73)** Add tags if required and click create organizational unit.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=77)** Repeat the process to create another OU named non-production.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=85)** With the OUs created, let's add an account to the production OU.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=89)** Click add an AWS account.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=92)** Note that you have the option to create a new AWS account or invite an existing account.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=100)** Enter the email address or account ID of the AWS account you would like to invite as a member account.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=107)** Note that you can add more than one account.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=110)** Include an optional message and require tags, then click send an invitation.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=120)** The administrator of the member account will receive an email with a link to accept the invitation.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=125)** Alternatively, you can also accept the invitation from the service console.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=130)** Let's do it that way.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=131)** Log into the console of the member account.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=135)** Once you're in the member account navigate to AWS organizations.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=141)** Here you will see the invitation sent from the management account.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=144)** If you do not see an invitation here, it means that you already have an organization created on this account.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=150)** So you'll first need to delete the organization and then you'll be able to view and accept the invitation.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=157)** View the invitation and accept it.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=162)** Now let's return to the management account.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=166)** Back to the management account, refresh the page to see the member account.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=171)** Select the member account, click actions, and then click move.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=178)** Select the production OU and click move AWS account.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=184)** The member account is now part of the production OU.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=188)** Now let's explore the use of service control policies or SCPs.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=192)** SCPs allow you to control the maximum available permissions for accounts in your organization.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=198)** By default, member account users have full access but you can control this with SCPs.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=204)** Let's say users in the production OU account need access to the ec2 service, and you have determined that they do not need access to other services.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=214)** So let's create a service control policy that will allow permissions on the ec2 service, but nothing else.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=221)** First, you will need to enable the use of SCPs.
>
> **[3:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=225)** On the left navigation pane, click policies.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=229)** By default service control policies are disabled.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=233)** Click on it and then enable it.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=236)** Now let's create a policy.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=240)** Start by providing a name.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=243)** Scroll down to the editor and from the list of services, search and select ec2.
>
> **[4:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=250)** From the list of actions, select all.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=254)** Scroll down to the resources section and add all resources.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=264)** Note that, by default the action is set to deny.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=269)** Change this to allow.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=271)** Then click create policy.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=275)** Now it's time to attach it to the production OU.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=278)** When you attach it policy to an OU, it is inherited by its member accounts.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=283)** On the left navigation pane, navigate to AWS accounts, then click the production OU.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=290)** Go to the policy section and click attach.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=296)** Select the policy you created and click attach policy.
>
> **[5:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=304)** For this to work correctly, you will also need to remove the policy named full AWS access.
>
> **[5:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=310)** It is an AWS managed policy that is automatically attached to all roots or use an accounts and allows all permissions.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=318)** Select the policy and click detach.
>
> **[5:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=322)** AWS warns you about the effect of the detached action, click detach policy.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=328)** The policy has been detached and it is now time to test.
>
> **[5:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=332)** Navigate back to the member AWS account.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=336)** From here, go to the ec2 service.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=341)** To verify if access is working, I'll navigate to security groups.
>
> **[5:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=345)** I can view my existing security groups as expected, because this is allowed by the SCP.
>
> **[5:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=351)** Now let's navigate to another service, maybe CloudTrail.
>
> **[5:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=356)** You will see a message notifying you that permissions are missing.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=360)** So we've verified that the member account can only access what is allowed by the SCP.
>
> **[6:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=365)** It is worth reiterating that the SCPs only defining the maximum available permission and not granting it.
>
> **[6:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=372)** Permissions are granted by IAM policies.
>
> **[6:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=375)** So while the SCP may be allowing access to a service, if the IAM policy attached to the user account does not grant the permission, the user cannot perform the intended action.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=385)** So the SCP defines the maximum permission at the member account level, but at the user level, permissions are controlled by IAM policies.
>
> **[6:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=394)** Back to the management account, there are some other policy types that you can take advantage of.
>
> **[6:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=400)** Backup policies can be used to configure organization wide backup of your resources.
>
> **[6:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=405)** This can help with disaster recovery and compliance.
>
> **[6:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=409)** Tag policies can be used to standardize the use of tags across all resources in your organization.
>
> **[6:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=415)** In the tag policy, you can define allowed tag keys and their values.
>
> **[7:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=420)** And lastly, note that when you add a member account to the organization, the management account becomes responsible for the member accounts charges.
>
> **[7:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=428)** So you've just seen how to configure AWS organizations and add member accounts.
>
> **[7:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=433)** If you are responsible for managing multiple AWS accounts and haven't added them to an organization yet, I encourage you to do so.
>
> **[7:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=441)** I'm confident you will appreciate the simplicity it brings to account management and billing processes.
>
> **[7:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/create-an-aws-organization?u=76281980&t=446)** But as always, before making any changes to your production account I urge you to view the AWS documentation.

> [!info]- Semantic Content
>
> **Env Vars:** aws (18), scp (4), iam (3)
> **CLI Commands:** aws (18)
> **Code Keywords:** let (10), new. (1), case, (1), require (1), delete (1)
> **UI Navigation:** navigate to (5), select the (4), go to (3), scroll down (2), dropdown (1)
> **Warnings:** note that (4)
> **Prerequisites:** configure (3)
> **Definitions:** means that (1), is an  (1)
> **Speakers:** - [instructor] (1)

#### AWS Single Sign-On
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=0)** - [Instructor] It is common for organizations to have multiple AWS accounts, and cloud applications.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=5)** In such situations, it becomes cumbersome for users to maintain multiple login accounts, and for administrators to manage user access to multiple applications, single sign-on in general, is an authentication method that allows users to authenticate to multiple applications using just one set of credentials.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=23)** AWS Single Sign-on is a service that allows you to centrally manage SSO access to all of your AWS accounts, and commonly used cloud applications such as Salesforce, Box and Office 365.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=36)** AWS SSO integrates with AWS organizations.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=40)** You can use AWS SSO to sign into the accounts you've configured under AWS organizations.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=45)** It also allows you to create, and manage users and groups.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=49)** You can manage your users and groups directly in the SSO console or connect to an existing AWS Managed Microsoft Active Directory to manage users with active directory management tools.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=60)** It also allows you to use your existing corporate entities.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=63)** AWS SSO integrates with Microsoft Active Directory, so your users can sign in using their corporate active directory credentials.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=71)** We'll see this in an upcoming video.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=73)** AWS SSO coexist with existing IAM users, roles and policies.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=78)** AWS SSO has no impact on the users, roles or policies that you're already manage in IAM.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=85)** A few things to bear in mind before configuring AWS SSO.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=89)** First, you must set up AWS Organizations.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=92)** Then sign in with the AWS Organizations Management Account Credentials, and determine the identity source to use.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=99)** This will determine which users will have SSO access to the user portal.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=104)** You can need use the default SSO store or connect to an external identity provider.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=108)** Now, let's switch to the AWS Management Console, and configure SSO.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=114)** In this account, I've already configured AWS organizations.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=118)** Use the services dropped down menu, and navigate to the security identity and compliance section, and then go to AWS Single Sign-on.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=127)** If you do not have AWS SSO enabled, you'll be prompted to enable it before you can start managing it.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=133)** When you click enable AWS SSO, it will create a service linked role in all accounts within the organization.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=141)** This role allows AWS SSO to access each account's resources on your behalf.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=145)** AWS SSO is now enabled.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=148)** Under settings, you will see that the identity source is set to AWS SSO.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=154)** You can change this to active directory or an external identity provider.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=160)** This is the user portal URL your users will use to access the SSO portal.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=165)** Here you can define multifactor authentication behavior for your users.
>
> **[2:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=169)** Like when should they be prompted for multifactor authentication?
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=173)** When prompted, what mechanisms can your users use?
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=177)** If your user does not have a registered MFA device, should they be allowed to log in?
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=182)** And who is allowed to manage MFA devices?
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=185)** Users listed under the user section will be able to use the SSO portal login.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=191)** Let's add a new user.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=193)** Enter a username and use the option to generate a password.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=197)** Enter the email address, first name, last name, and display name.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=203)** Click next.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=205)** Adding users to groups makes it easy to manage permissions at scale.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=209)** Create a new group.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=212)** Provide a name and click create.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=216)** Select a group and click add user.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=221)** The user has been created.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=222)** Now, let's try to log in with this user information.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=227)** And when you log in for the first time, you will need to change the password.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=236)** We've logged in, but the user does not have access to any applications.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=242)** Back to the management account.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=243)** Let's grant permissions to the user.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=246)** On the left navigation pane, click AWS accounts.
>
> **[4:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=250)** Doing so will list the accounts in your organization.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=253)** Here you can configure the accounts to which you'd like to grant access to your users.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=257)** But before we do this, let's create a permission set.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=261)** Permission sets are used to control access for users and groups.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=264)** Click create permission set.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=267)** You can use an existing job function policy to create a permission set or create a custom.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=272)** Job function include common ones such as billing, network administrator, database administrator and more.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=279)** Select create a custom permission set, and click next.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=284)** Enter a name for the permission set.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=287)** Make a note of the message.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=288)** Your users will see this on the user portal, and you cannot change this later.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=293)** Configure the session duration.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=296)** You can attach AWS managed policies or create a custom permissions policy.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=302)** Select attach AWS managed policies.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=305)** From the list of policies, select the desired wants to grant permissions to users belonging to this group.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=313)** Notice that I've selected easy to full access.
>
> **[5:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=317)** On the next step, add tags.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=320)** Click next.
>
> **[5:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=322)** Review your configuration and click create.
>
> **[5:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=326)** Now, let's configure the access.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=328)** Navigate back to AWS accounts, and select the accounts to which you would like to grant access.
>
> **[5:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=334)** Then click assign users.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=338)** Under the group tab, select a group you configured earlier.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=344)** Select a permission set and click finish.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=347)** Time to test.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=349)** I'll navigate back to the browser window where I'm logged in as the SSO user, and refresh the page.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=358)** As you can see, the user now has access to an AWS account.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=362)** Click the account, and choose how you'd like to access it using the Management Console or Command Line.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=370)** From the Management Console, I'll navigate to the EC2 services.
>
> **[6:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=379)** I'm able to view the EC2 resources such as security groups.
>
> **[6:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=383)** Now, I'll navigate to the S3 Service.
>
> **[6:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=387)** Notice that I'm presented with an error message that I do not have the permissions.
>
> **[6:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=391)** This is because the permission set associated with this user only grants permissions on the EC2 service.
>
> **[6:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=397)** If you'd like to grant similar access to other users, you just need to add them to the group you created earlier.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=403)** Back to the management account, the application section contains the enterprise applications that you'd like to grant access to your users via SSO.
>
> **[6:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=415)** Back to the management account, the application section contains the enterprise applications that you'd like to grant access to your users via SSO.
>
> **[7:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=425)** To learn about how you can configure your application access, please refer to the SSO documentation.
>
> **[7:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-single-sign-on?u=76281980&t=431)** As you've seen, AWS SSO simplifies account management for administrators and end users, administrators can centrally manage their identities while end users can use a single portal to access multiple accounts and applications.

> [!info]- Semantic Content
>
> **Env Vars:** aws (28), sso (23), ec2 (3), iam (2), mfa (2)
> **CLI Commands:** aws (28), make (1)
> **Code Keywords:** let (6), function (2), switch (1), this, (1)
> **UI Navigation:** navigate to (3), select the (2), switch to (1), go to (1)
> **Prerequisites:** configure (5), set up (1)
> **Analogies:** such as (3)
> **Definitions:** is an  (1), is a  (1)
> **Tools:** command line (1)

#### Introduction to AWS Control Tower
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=0)** - [Instructor] In the earlier videos, we learned how to consolidate account management with AWS organizations.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=6)** It helps you bring multiple accounts under one umbrella for consolidated billing and permissions management.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=13)** We also explored the use of service control policies to define maximum permissions for the member accounts in the organization, but one thing that was missing was best practices governance.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=24)** With AWS organizations there is no way to centrally audit and enforce best practices on the member accounts.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=31)** That's where AWS Control comes into the picture.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=35)** AWS Control Tower allows you to manage a multi-account AWS environment based on best practices.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=41)** In a way it is an extension to AWS organizations.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=45)** Control Tower allows you to implement guardrails.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=47)** These are preventive and detective controls that help you govern and monitor your resources for compliance and detect drift from best practices.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=56)** For example, one of the guardrails requires you to enable CloudTrail in all regions.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=62)** CloudTrail as you know is an auditing service and maintains logs of all activities.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=67)** As you can begin to imagine, having an orchestration layer such as Control Tower can simplify account management and governance, especially if you're an organization with several AWS accounts.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=79)** When you set up Control Tower, it creates a landing zone.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=83)** The landing zone is your starting point for Control Tower configuration.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=87)** It is a container for your organizational units or OUs, accounts, users and other resources that you want to subject to governance.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=95)** Inside the landing zone is root.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=98)** This is the parent that contains all other OUs in your landing zone.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=103)** Inside the landing zone is also the security OU.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=106)** This OU is automatically created when you create your landing zone and it contains two accounts.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=112)** The first account is the log archive account.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=116)** This account works as a repository of logs for API activities and resource configurations from all accounts in the landing zone.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=123)** The second account is the audit account.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=126)** This gives read and write access to all accounts in your landing zone.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=131)** The access granted is programmatic only.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=134)** So you can't use the audit account to log into other accounts manually.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=139)** Your security and compliance teams can use this account to audit usage of the other accounts in your landing zone.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=145)** Inside the landing zone is also the sandbox OU.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=148)** It is designed to contain accounts who enroll into your landing zone.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=152)** Your users can use this OU to deploy workloads.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=155)** In addition to these changes Controlled Tower also does the following, when you create a landing zone.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=161)** It creates a cloud-native directory in AWS SSO with pre-configured single sign on access.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=167)** It applies 20 mandatory, preventive guardrails to enforce policies.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=172)** A preventive guardrail ensures that your accounts maintain compliance by disallowing actions that lead to policy violations.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=180)** It also applies two mandatory, detective guardrails to detect configuration violations.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=186)** A detective guardrail detects non-compliance of resources within new accounts and provides alerts through the dashboard.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=193)** To know about these guardrails, please refer to the Control Tower documentation.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=197)** Bear in mind that guardrails are apply to the whole organization except the management account.
>
> **[3:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=203)** And when you create your landing zone, your existing OUs and accounts created with AWS organizations are unaffected.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=209)** Now let's switch to the AWS Management Console and configure Control Tower.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=215)** Before we begin configuration, I'd like to mention that I do not have AWS organizations configured on this account, but you can configure control Tower on an account that has AWS organizations configured.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=228)** To follow along this demonstration, you will need two email addresses not associated with AWS accounts.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=235)** Control Tower will use this to create the log archive and the audit account.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=239)** From the services dropdown menu navigate to the Management & Governance section and then go to the Control Tower service.
>
> **[4:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=248)** First, you'll need to set up your landing zone.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=252)** select the home region for your landing zone.
>
> **[4:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=255)** You won't be able to change this after creating your landing zone.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=260)** The region deny setting allows you to deny access to AWS services in any region.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=265)** This can be useful if you'd like to ensure that your resources are hosted in specific regions only.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=272)** You can change the setting after configuring your landing zone.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=276)** For now leave the set to not enabled and click Next.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=282)** As part of creating the landing zone, Control Tower will create a security OU which contains two accounts, log archive and security audit.
>
> **[4:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=291)** The OU name is customizable.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=294)** Control Tower will also set up an additional OU called sandbox that you can use to host your production and development accounts.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=302)** Click Next.
>
> **[5:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=304)** Here is the email address of the management account.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=308)** Next, you will need to provide two email addresses.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=311)** This is to create the log archive and the audit accounts.
>
> **[5:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=316)** The email addresses should not have AWS accounts associated with them.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=321)** Enter these email addresses and click Next.
>
> **[5:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=327)** In the last step, review your selections, acknowledge that Control Tower will use permissions on your behalf and click Set up landing zone.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=338)** Now control tower will create your landing zone which will take about an hour.
>
> **[5:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=343)** Here is a summary of changes.
>
> **[5:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=345)** Control Tower will create two OUs, security and sandbox.
>
> **[5:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=350)** It will create three shared accounts of which one is the management account and the other two are log archive and audit account.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/introduction-to-aws-control-tower?u=76281980&t=358)** It will also create a cloud directory in AWS SSO and it will apply 20 preventive and two detective guardrails.

> [!info]- Semantic Content
>
> **Env Vars:** aws (16), sso (2), api (1)
> **CLI Commands:** aws (16)
> **Prerequisites:** set up (4), configure (2), you'll need (1)
> **UI Navigation:** switch to (1), dropdown (1), navigate to (1), go to (1), select the (1)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** picture (1), for example (1), imagine (1), such as (1)
> **Code Keywords:** let (1), switch (1)
> **Cross-References:** in the last (1)

#### Configure AWS Control Tower
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=0)** - The landing zone has been created.
>
> **[0:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=2)** Now let's explore its features.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=4)** When you initiate the creation of your landing zone you will receive a welcome email on each of the two email addresses you provided.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=10)** This email notifies you that a new AWS account has been created for log archiving and another for auditing.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=17)** Click AWS organizations on the left to view the OUs that have been created.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=22)** We've got root, sandbox and security.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=27)** If you've got OUs created from AWS organizations, they will be listed here but they won't be registered with Control Tower.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=34)** In my case, I don't have any OUs from AWS organizations.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=39)** If you click the security OU, you will see the log archive and audit accounts.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=46)** On the left navigation pane, click accounts to see the ones that Control Tower is managing.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=53)** Accounts with the enrolled status are the ones that Control Tower manages.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=57)** If you have any accounts added to AWS organizations they will be listed here, but won't be enrolled.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=63)** Account factory is an important feature.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=66)** It allows you to create new AWS accounts or enroll existing accounts.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=71)** When you attempt to create a new account, you might see an error message that looks like this.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=76)** You will see this message when you're logged in as the root account.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=80)** To enroll accounts, you will need to do two things.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=83)** One is to log in as an IAM user and the second can is to add the IAM user to the service catalog.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=90)** Before we talk about this further, let's first navigate to service catalog.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=94)** You will find this under the management and governance section.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=101)** Service catalog manages the catalog of services that are approved for use on your AWS account.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=108)** Control Tower uses service catalog to provision new accounts.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=111)** When you create a Control Tower landing zone, it creates a service catalog portfolio.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=117)** A portfolio is simply a collection of products and allows you to define who can use specific products.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=123)** We'll talk more about this in an upcoming video.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=126)** So here is the Control Tower Account Factory Portfolio.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=129)** When you click this and navigate to groups, roles, and users tab you will notice that your IAM users don't exist here.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=138)** So you will need to add the IAM user account you plan to use for enrolling accounts.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=143)** Click add groups, roles, users and add the required IAM users to allow them to enroll accounts.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=150)** In my case, I've already added an IAM user I plan to use for an enrolling accounts.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=159)** Now I'll switch to a private window where I'm logged in as this IAM user.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=165)** First, I'll navigate to Control Tower.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=171)** Then I'll click account factory on the left navigation pane.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=175)** From this account, when I click enroll account, you will notice that I do not receive the error message.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=181)** One more item to note here is the network configuration.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=184)** By default, there's a network configuration applied which allows IAM users to create VPCs with these settings only.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=192)** The settings included here are internet-accessible subnet, address range, regions for VPC creation, maximum number of private subnets and availability zone count.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=204)** These are pulled from your landing zone settings.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=207)** You can change these settings.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=210)** So when a new account is enroll, it will have these VPC settings applied.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=215)** Now let's enroll an account.
>
> **[3:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=218)** Start with an email address and display name.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=221)** Then assign an SSO email address.
>
> **[3:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=225)** Also provide the first and last name and associate this account with an OU then click enroll account.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=234)** The email address you provided here will receive an invitation to activate AWS SSO in a couple of minutes but it could be a few minutes before you are able to activate the account.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=245)** To see the account you enrolled, first navigate to service catalog, then click provisioned products on the left navigation pane.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=257)** Here, you will see the account you enrolled.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=260)** The status should change to succeeded before you can activate using the link sent to your email address.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=267)** Click on the account to see the details.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=270)** Here, you can see the account ID, SSO user email address and SSO user portal URL.
>
> **[4:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=277)** In another browser window, I've logged in using the account I enrolled earlier in the sandbox OU.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=283)** Allow switch to the other window.
>
> **[4:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=285)** On this account, I'll navigate to CloudTrail.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=292)** Here, I can see a trail created by Control Tower.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=296)** When I try to delete the trail, I get an error message stating that I do not have permissions to perform this action and this is because a mandatory guardrail protects this configuration.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=307)** Let's look at it.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=309)** I'll navigate back to the management account.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=313)** From here, I'll navigate back to the Control Tower service.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=319)** On the left navigation pane, click guardrails to view a list of mandatory and elective guardrails.
>
> **[5:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=325)** Here is the guardrail that was preventing changes to the CloudTrail configuration.
>
> **[5:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=329)** Click any guardrail to see more information.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=333)** Remember that only mandatory guardrails are enabled by default.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=337)** You will need to enable elective and strongly recommended guardrails on the required OU.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=342)** For example, this one is an elective guardrail, scroll down and click enable guardrail on OU then select the desired OU and enable it.
>
> **[5:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=355)** But if you've just initiated the enrollment of a new account into your OU, you will see an error message that looks like this.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=362)** You will need to wait for the account enrollment to complete before enabling the guardrail.
>
> **[6:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=368)** Now let's look at a guardrail that detects EBS volumes that are not attached to EC2 instances.
>
> **[6:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=377)** As you can see, this guardrail's status is in violation, scrolling down, we can see the resource ID and the account in which this violation has occurred.
>
> **[6:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=387)** To comply with this guardrail, I will need to attach the EBS volume to an EC2 instance or delete it.
>
> **[6:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=394)** On the left navigation pane, go to users and access section to view your SSO settings.
>
> **[6:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=401)** Control Tower configures federated access and user identity management using AWS SSO and it does this automatically when you create a landing zone.
>
> **[6:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=410)** Control Tower will send you an email invitation to activate your AWS SSO user account when you set up the landing zone.
>
> **[6:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=417)** When you click the link, you'll be required to provide your SSO password.
>
> **[7:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=421)** Once done, your SSO account will be activated and you can use the SSO URL to log in.
>
> **[7:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=427)** In another browser window, I've logged in using my management account's SSO email address.
>
> **[7:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=433)** From here, I can access all my accounts.
>
> **[7:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=438)** Back to the management account, you can also view your landing zone settings.
>
> **[7:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=443)** Here you can see the landing zone versions and the one that's enabled on your account.
>
> **[7:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=449)** Under the region section, you will see the regions governed by the landing zone.
>
> **[7:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=453)** You had configured this when you created the landing zone.
>
> **[7:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=457)** You can add more regions by modifying the settings.
>
> **[7:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=462)** The configuration section is self explanatory.
>
> **[7:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=465)** From the decommission section, you can decommission your landing zone.
>
> **[7:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=471)** The activity section is particularly useful, it displays a list of Control Tower actions that you've initiated from the management account.
>
> **[7:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=479)** For example, you can see some actions that I've been performing like describing managed accounts getting guardrail compliance status and so on.
>
> **[8:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=487)** So that is a high level overview of Control Tower.
>
> **[8:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=490)** As you've seen, it has powerful capabilities to simplify and centralize account management and enforce compliance but there are important aspects to consider like the accounts you plan to add, the users you plan to give access to and the guardrails you plan to enable.
>
> **[8:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/configure-aws-control-tower?u=76281980&t=506)** I recommend reviewing this requirements and the Control Tower documentation before deploying it in your production environment.

> [!info]- Semantic Content
>
> **Env Vars:** sso (11), aws (10), iam (8), vpc (2), url (2)
> **Code Keywords:** let (5), case, (2), this. (2), switch (2), private (2)
> **CLI Commands:** aws (10), find (1)
> **UI Navigation:** navigate to (5), switch to (2), click on (1), scroll down (1), select the (1)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), required to (1)
> **Cross-References:** earlier in (1)

#### AWS Service Catalog
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=0)** - Governance and compliance are significant check boxes for administrators.
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=4)** As an administrator, it might benefit you to control the AWS services that your users have access to and how they're allowed to deploy those services.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=13)** For example, you might want your development team to have permissions to deploy EC2 instances only and deploy only using allowed instance sizes and apply the required tags.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=24)** Having centralized control over user access allows you to meet your governance and compliance goals because they're allowed to access only the required products and you can standardize deployment by specifying the configuration options.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=37)** It also allows you to control costs, because your users can launch only the products to which you've granted access.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=44)** AWS Service Catalog allows you to meet these goals.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=47)** It allows administrators to create and manage catalogs of approved products for end users.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=52)** Examples of products that you can include in a catalog include virtual machine images, servers, software, databases, and more.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=61)** With service catalog, there are two types of users.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=64)** First, is catalog administrators simply known as administrators, they are responsible for managing a catalog of products and granting access to end users.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=73)** And you have end users.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=75)** They launch products to which they have been granted access.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=78)** A product is an IT service that you make available for deployment and may indicate just one resource or even more.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=85)** So a product can be as simple as an EC2 instance or it could also be a fully configured, multi-tiered web application.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=93)** To make a product available to your end users, you will need to define it as a cloud formation template.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=99)** We talked about cloud formation earlier in this course.
>
> **[1:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=101)** It is an AWS service that allows you to deploy infrastructure using code.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=106)** The cloud formation template you provide must define the AWS resources that are required to provision your product, the relationships between resources and the parameters your end users can input when they launch the product.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=118)** So the cloud formation template is the central component of service catalog.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=123)** It is what you will use to define available products.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=126)** You can create a portfolio, which is a collection of products.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=129)** By creating portfolios, you can define who can use specific products and how they can use them.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=135)** We'll see this in detail when we dive into the configuration.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=138)** As an example, you might have a portfolio of products for your dev team and another for your testing team.
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=144)** Now let's see service catalog in action.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=148)** For this demonstration, you will need an AWS account with administrative or management access and with an IM user configured.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=156)** You will use the management account to configure service catalog, and you will use the IM user account to test the access.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=163)** Using the administrative account, navigate to the management and governance section and then go to the service catalog service.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=171)** Let's begin by creating a product.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=174)** Remember, a product is a service that you make available for your end users.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=178)** Click products on the left navigation pane and then click upload new product.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=185)** You'll create a product that allows your dev team to deploy Linux instance with SSH access.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=191)** Enter a product name and specify the owner.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=195)** For this demonstration you will use a sample cloud template provided in the service catalog documentation.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=202)** You can upload a template from your local machine, provide a URL containing the template or use a cloud formation stack you've already deployed.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=211)** Copy and paste the URL from the documentation.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=214)** Optionally, you can provide a version name.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=219)** Click review and on the next screen click create product.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=226)** With the product created, now it is time to create a portfolio.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=230)** On the left navigation pane click portfolios, and then click create portfolio.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=236)** Enter a name and the owner's details.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=240)** Then click create.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=244)** Now click the portfolio name and click add product to portfolio, select the product you created and click add product to portfolio.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=254)** Next, you need to define the groups, users or roles allowed to access this portfolio.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=261)** Click add groups, roles, users, and go to the users tab and select an IM user.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=269)** Then click add access.
>
> **[4:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=271)** Now the portfolio will be a available to the selected end users when they sign in.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=276)** Now, let's see the end user experience.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=279)** In another browser window, I've logged in as the end user.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=283)** First, I'll navigate to service catalog.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=290)** The available products can be seen by clicking products on the left navigation pane.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=295)** To deploy the product, they'll need to select it and click launch product.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=300)** After providing a provision product name they'll see the available versions and configurable parameters.
>
> **[5:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=306)** These parameters are defined in the cloud formation template used to build the product.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=311)** Here is the cloud formation template we referenced.
>
> **[5:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=314)** As you can see under the parameters section the end user is allowed to specify the key paired name that they'll use to log into the instance, instance type and the IP address from which to allow inbound SSH connections.
>
> **[5:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=327)** One other thing I'd like to mention here is that if you plan to use this template, make sure you're working in a supported region.
>
> **[5:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=334)** This template does not contain mappings for all regions.
>
> **[5:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=340)** Back to this window where I'm logged in as the end user, you can see the same parameters.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=346)** I'll enter the instance type, key paired name and IP address to allow SSH connections.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=352)** One crucial aspect for ensuring success and which is easy to overlook is IAM permissions.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=357)** This end user will need appropriate IAM permissions to deploy this product.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=362)** In this case, the role you assign to the end user must include permissions to access service catalog, to view the products, Amazon S3 to retrieve the stored cloud formation template and Amazon EC2 to deploy the instance.
>
> **[6:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=375)** So make sure that you've granted these permissions to the end user before you deploy the product, otherwise the deployment will fail.
>
> **[6:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=382)** Scroll down and click launch product.
>
> **[6:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=386)** As you've just seen, this is a controlled experience allowing the administrator to define what the end user can deploy and configure.
>
> **[6:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=394)** Now we'll wait for the deployment to complete.
>
> **[6:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=398)** After a couple of minutes the deployment has completed.
>
> **[6:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=402)** By scrolling down, you can see the public IP address and DNS name of the instance.
>
> **[6:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=407)** You can control this output from the cloud formation template.
>
> **[6:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=412)** Back to the template, you can see that the output section contains the public DNS name and IP address, so this is shown to the end user.
>
> **[7:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=420)** So you are in control of the information that service catalog exposes to the end user.
>
> **[7:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=425)** Now let's take this a step further.
>
> **[7:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=428)** Let's say the same cloud formation template is used to provision products for multiple teams.
>
> **[7:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=433)** But for the dev team you'd like to allow smaller instant sizes only, like T2 micro.
>
> **[7:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=439)** You can achieve this by defining constraints.
>
> **[7:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=442)** Back to the managed account.
>
> **[7:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=443)** To configure a constraint from the portfolio, navigate to the constraints tab and click create constraint.
>
> **[7:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=452)** Select the product and choose a constraint type.
>
> **[7:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=457)** For our example, choose the type as template.
>
> **[7:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=461)** This allows you to limit the options available at deployment time, set the method as interactive editor and enter a rule name.
>
> **[7:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=470)** Select the product version and the parameter you'd like to limit, in this case, instance type.
>
> **[7:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=477)** From the available options select T2 micro, then click add rule and click create.
>
> **[8:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=487)** Now let's test again as the end user.
>
> **[8:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=491)** I'll select the product and click launch product.
>
> **[8:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=495)** Under parameters, you will notice that the only option allowed is what is defined in the constraint.
>
> **[8:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=500)** So with the constraint feature you can use a single cloud formation template to create multiple portfolios, each with its own set of constraints.
>
> **[8:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=511)** When you need to delete a product, go to provision products, select the product you deployed, click the actions button, and then click terminate.
>
> **[8:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=523)** Another option that you'll find very useful is tag options.
>
> **[8:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=527)** Under tag options library, you can define tags that you want to apply to provision products automatically.
>
> **[8:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=534)** This makes it easy for accounting and billing purposes.
>
> **[8:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=539)** Configure the required tag keys and values and add them.
>
> **[9:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=546)** Then go to the portfolio you created, click the portfolio, click tag options and associate the tag option you created.
>
> **[9:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=559)** Now when the end user provisions a product using this portfolio, this tag key value pair will be automatically added.
>
> **[9:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=566)** All right, so that's about service catalog.
>
> **[9:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=569)** As you've seen, working with products and portfolios is quite straightforward for administrators and end users.
>
> **[9:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=575)** The only step that requires some effort is configuring the cloud formation templates.
>
> **[9:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=580)** For administrators, service catalog makes governance and compliance easy and for end users, it simplifies product provisioning.
>
> **[9:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=588)** It takes resource configuration out of the equation which is most likely to cause compliance issues.
>
> **[9:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-service-catalog?u=76281980&t=594)** With service catalog, the end users only need to select the product which is already configured by the template and deploy it.

> [!info]- Semantic Content
>
> **Env Vars:** aws (5), ec2 (3), ssh (3), url (2), iam (2)
> **Exercise Files:** template (17)
> **CLI Commands:** aws (5), make (5), ssh (3), find (1)
> **Code Keywords:** let (6), case, (2), public (2), type. (2), type, (1)
> **UI Navigation:** select the (6), go to (3), navigate to (2), scroll down (1)
> **Definitions:** is a  (3), is an  (2), known as (1)
> **Prerequisites:** configure (4)
> **Cross-References:** we talked about (1), earlier in (1)

#### AWS Resource Access Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=0)** - [Narrator] In the preceding videos, we looked at tools to consolidate the management of multiple AWS accounts.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=6)** By doing so you can reduce the operational overhead of managing multiple accounts from their individual consoles.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=12)** While that solves a big problem that is account management, duplicate resources may still be created in the individual accounts.
>
> **[0:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=20)** Your users may be provisioning the same type of resources in multiple accounts, resulting in the additional overhead of managing the duplicate resources AWS resource access manager, aims to solve this problem.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=32)** With AWS Resource Access Manager or AWS Ram, you can share resources with individual AWS accounts or with accounts in an AWS organization.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=42)** Important resource types that you can share with AWS Ram include Amazon Aurora, AWS Certificate Manager, Private Certificate Authority, AWS Code Build, Amazon Ec2 , AWS Glue, AWS License Manager, AWS network firewall, Amazon VPC, and more.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=62)** For a full list of resources you can share using Resource Access Manager, please refer to the documentation.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=70)** There are certain services that you can also share with individual IM users and roles.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=75)** To know about these, please refer to the documentation.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=78)** When you share a resource with another account they can access it as if they owned it.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=84)** Now let's switch to the AWS management console and see how to configure a resource share.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=91)** In this demonstration you will create a resource share to share a subnet with other AWS accounts in your organization.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=98)** Once done, the users can deploy resources like Ec2 instances and RDS instances in the shared subnet.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=105)** First, let's look at the VPC in which the subnet is located.
>
> **[1:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=112)** Here I've got a VPC called Pre Prod VPC.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=117)** And there are three subnets configured under this VPC, two private and one public.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=123)** I plan to share the private subnets with other accounts in my organization.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=127)** A subnet simply represents a range of IP addresses.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=131)** You can launch resources like Ec2 instances into a specific subnet.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=135)** Now, let's navigate to resource access manager.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=138)** Use the services drop down menu, and navigate to the security identity and compliance section, and then go to the resource access manager service.
>
> **[2:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=148)** You can share resources with or without an AWS organization configured in your account.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=153)** But if you have an organization configured, it is easy to share resources As you don't have to send invitations.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=160)** I'm on an account that has AWS organizations configured.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=164)** Navigate to settings and enable the checkbox to enable sharing with AWS organizations.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=170)** Then save your settings.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=172)** As you can see I've already configured this.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=175)** Now let's share a resource.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=177)** Click resource shares and then click create resource share.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=185)** Start with a name for the share.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=187)** Click the select resource dropdown.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=190)** As you can see, there's a long list of resources you can share.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=194)** Select subnets.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=197)** From the list, select the subnets you'd like to share.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=204)** Configure the required tags and click next.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=208)** In this step, you will need to associate permissions with the resource type you're sharing.
>
> **[3:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=213)** Based on the resource type you're sharing, a pre configured permission set is automatically associated.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=219)** These permissions are defined in the permissions library.
>
> **[3:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=221)** Click next.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=223)** In this step, you can select the principles that you want to grant access to.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=227)** You can allow sharing with external principles or with principles in your organization only.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=232)** For this demonstration, select this option.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=235)** Then toggle the switch to display organizational structure.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=239)** Select the principles to which you would like to grant access.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=243)** Then click next.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=246)** On the last step, Review your selections and click create resource share.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=254)** Remember that RAM is a regional service.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=257)** You have shared a resource that exists in the Oregon region.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=260)** So the accounts that have access to this will need to access it from the same region.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=265)** In this browser window I'm logged into the account that has access to the shared resource.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=270)** I'll navigate to the Ec2 service.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=275)** Then I'll try to launch a new instance.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=279)** I'll select the required AMI and the desired instance type.
>
> **[4:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=286)** In step three, under the VPC dropdown I can select the shared VPC.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=292)** And I can select from one of the shared subnets.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=296)** Notice that I can use the shared resource because I'm in the region from where the resource was shared.
>
> **[5:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-resource-access-manager?u=76281980&t=303)** As you've seen, with a simple configuration you can share in centralized resource deployment reducing the overhead of managing multiple instances of the same resource type in multiple accounts.

> [!info]- Semantic Content
>
> **Env Vars:** aws (17), vpc (7), rds (1), ram (1), ami (1)
> **CLI Commands:** aws (17)
> **UI Navigation:** select the (5), navigate to (3), switch to (2), dropdown (2), go to (1)
> **Code Keywords:** let (4), private (3), switch (2), public (1), this. (1)
> **Documentation:** the documentation (2)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### AWS Trusted Advisor
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=0)** - [Narrator] AWS provides several tools to improve the security and performance of your AWS account.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=6)** One such tool is AWS Trusted Advisor.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=9)** Trusted Advisor inspects your AWS environment, and provides recommendations to improve system availability, performance and security, and reduce costs.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=19)** It provides best practices recommendations, or checks as they're called, in the following categories: cost optimization, performance, fault tolerance, security, and service limits.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=32)** The checks available to you depend on your AWS support plan.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=36)** If you have a Basic or Developer Support plan, you can access all checks in the service limits category, and six checks in the security category.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=44)** If you have a Business or Enterprise Support plan, you can access all Trusted Advisor checks.
>
> **[0:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=50)** Cost optimization recommendations, focus on opportunities to reduce your costs by highlighting unused resources.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=58)** For example, a checks for EC2 instances showing low utilization, idle load balancers, underutilized EBS volumes, unassociated elastic IP addresses and more.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=70)** Performance recommendations focus on opportunities to improve the speed and response time of your applications.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=76)** For example, it checks for EC2 instances that have a large number of security group rules applied to them.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=82)** EC2 instances with high CPU utilization levels, security groups that have an excessive number of rules resulting in performance degradation, over utilized EBS magnetic volumes and more.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=94)** Fault tolerance recommendations help to make your solutions more resilient, by looking for redundancy shortfalls, service limits, and overused resources.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=104)** For example, it looks for the distribution of EC2 instances across availability zones in a region and across load balancers, automated backups of RDS DB instances, health check configuration of auto scaling groups, logging configuration of S3 buckets and more.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=122)** Security recommendations help to make your AWS solutions more secure.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=126)** For example, it looks for security groups that allow unrestricted access, S3 buckets that have open access permissions, root account that does not have multifactor authentication enabled, exposed access keys and more.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=141)** Service limit recommendations inspect your accounts usage, and check to see if your account is approaching or exceeding specific service limits, also known as quotas.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=150)** For example, it looks for service usage that is more than 80% of the service limit for important services such as Amazon VPC, Amazon EC2, Auto scaling groups, elastic block store or EBS volumes, Simple Email Service, AWS CloudFormation Stacks, elastic load balancers, relational database service or RDS instances, identity and access management or IM entities such as users, roles, groups and policies, and other services.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=181)** This list is only partial, AWS provides service limit checks for many services.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=187)** For a complete and updated list of checks, please refer to the Trusted Advisor documentation.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=193)** Trusted Advisor shows recommendations using different colors.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=197)** Red means there's a recommended action.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=199)** Yellow means there's a possible issue, and green means there's no problem detected.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=205)** You may also see a gray color that indicates excluded items like resources that you want a check to ignore.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=212)** Now let's switch to the AWS Management Console and look at some recommendations.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=219)** From the services dropdown menu, navigate to the Management and Governance section, and then go to the Trusted Advisor service.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=229)** Here on the dashboard, you will see a summary of items that require an action or investigation and excluded items.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=236)** Over on the left side are the five categories we spoke about.
>
> **[4:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=242)** Checks in the cost optimization, performance and fault tolerance categories require AWS Business Support or higher.
>
> **[4:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=251)** On this account, I have the Basic Support plan, so these checks are grayed out.
>
> **[4:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=257)** Let's look at the service limit checks.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=259)** Here you will see a list of services and your usage across each of them.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=265)** Expand any service to know more.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=267)** For example, here is my current auto scaling group usage across regions.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=272)** I haven't exceeded the quota for any region.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=276)** You also have a link to request a limit increase, and a link to a document explaining this products limits.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=283)** Now let's look at security checks.
>
> **[4:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=286)** Remember that six security checks are available for all customers, and you can see them here along with their status.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=294)** For example, this check looks for security groups that allow unrestricted access on specific ports, such as 3389 or remote desktop protocol.
>
> **[5:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=303)** As you can already see, reviewing security groups manually region by region can be cumbersome.
>
> **[5:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=309)** Having an automated check like this makes it scalable and easy.
>
> **[5:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=313)** Let's fix the security group that has an action recommended.
>
> **[5:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=317)** I'll click the security group name.
>
> **[5:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=319)** Doing so opens a new browser tab with the affected resource.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=323)** The inbound rules tab shows the rule that's causing the check to fail.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=328)** To fix this, I'll click edit inbound rules.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=333)** We can see that the source of this rule is set to any IP address.
>
> **[5:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=338)** To fix this, I'll change the source of this rule to only the required IP addresses.
>
> **[5:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=343)** In this case, my current public IP address.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=347)** I'll save the configuration.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=349)** Now I'll return to the previous tab.
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=353)** When the checks are refreshed, the security group should pass the check, and will be removed from the list.
>
> **[5:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=359)** At times you may have a situation where you cannot fix the resource that's causing the check to fail.
>
> **[6:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=364)** In such a situation, you can exclude the resource from examination.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=370)** Select the required resource, and click exclude and refresh.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=374)** You can also download your checks in a CSV format.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=378)** This file might be helpful if you need to pass this information to another team that's responsible for fixing the failures.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=385)** You can also configure Trusted Advisor to send you a weekly summary of your check results.
>
> **[6:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=391)** Under the preferences section, you can configure the recipients of the weekly summary.
>
> **[6:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=396)** This can be your billing, operations, or security contact.
>
> **[6:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=400)** You can configure these from the account settings page.
>
> **[6:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=404)** So that's about Trusted Advisor.
>
> **[6:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-trusted-advisor?u=76281980&t=407)** As you've just seen, it requires no configuration at all, and provides guidance to deploy resources using AWS best practices.

> [!info]- Semantic Content
>
> **Env Vars:** aws (11), ec2 (5), ebs (3), rds (2), cpu (1)
> **CLI Commands:** aws (11), make (2)
> **Code Keywords:** let (4), require (2), this, (2), pass (2), switch (1)
> **Analogies:** for example (7), such as (3)
> **UI Navigation:** switch to (1), dropdown (1), navigate to (1), go to (1), select the (1)
> **Prerequisites:** configure (3)
> **Best Practices:** recommended (2)
> **Definitions:** known as (1)

#### AWS Config
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=0)** - [Instructor] When you run production workloads in the AWS cloud, it may be beneficial for administrators to record the configuration state of resources and detect changes to that state.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=10)** It allows them to see how resources were configured in the past and how the configurations changed over time.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=17)** AWS Config is a managed service that provides you an inventory of your AWS resources, their configuration history, and configuration change notifications to enable security and governance.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=28)** It allows you to discover existing AWS resources, get notified when resources are created, modified, or deleted, continuously monitor and record configuration changes of your AWS resources, define rules for provisioning and configuring AWS resources.
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=46)** Resource configurations that deviate from your rules automatically trigger SNS notifications and CloudWatch events.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=53)** It also allows you to view relationships between resources.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=57)** For example, how many EC2 instances use a specific security group.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=62)** And it also allows you to export a complete inventory of your AWS resources with all configuration details.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=68)** Before we understand how AWS Config works, let's talk about some of the basic components.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=74)** The first component is configuration item.
>
> **[1:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=77)** It represents a point-in-time view of the various attributes of a supported AWS resource.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=84)** A configuration item includes metadata, attributes, relationships, current configuration, and related events.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=92)** AWS Config creates a configuration item whenever it detects a change to a resource type it is recording.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=98)** For example, if AWS Config records an Amazon S3 bucket, a configuration item is created when the bucket is created, updated, or deleted.
>
> **[1:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=107)** The configuration item looks like this.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=109)** As you can see, it includes important resource information such as account ID, ARN or Amazon Resource Name, region and availability zone, tags, and more.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=121)** The next component is configuration history.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=124)** It is a collection of configuration items for a given resource over any period.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=129)** It is stored in an Amazon S3 bucket that you specify.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=133)** Configuration history can help you answer questions like, when was the resource first created?
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=139)** How was the resource configured over the last month?
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=142)** And what configuration changes were made last Monday?
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=145)** The next component is configuration recorder.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=149)** It stores the configuration of supported resources in your account as configuration items.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=154)** Before you start recording, you must first create and start the configuration recorder.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=160)** The next component is config rules.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=162)** A config rule represents the desired configuration settings for your AWS resources.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=168)** There are predefined rules, known as managed rules, and you can create custom rules too.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=173)** If a resource violates the rule, AWS Config flags the resource and the rule as noncompliant.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=179)** Rule evaluations are triggered when there is a configuration change or periodically based on a frequency you choose.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=186)** With an understanding of the basic components, now let's understand how AWS Config works.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=192)** When you turn on AWS Config, it first discovers the supported AWS resources in your account and generates a configuration item for each resource.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=201)** This is a point-in-time view of the resource.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=204)** It also generates a configuration item when the configuration of a resource changes.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=209)** The service maintains a historical record of the configuration items from the time you start the configuration recorder.
>
> **[3:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=216)** By default, AWS Config generates a configuration item for every supported resource in the region.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=222)** Imagine a couple of EC2 instances sharing a security group.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=226)** The security group has two inbound rules.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=229)** When you add a new rule to the security group, AWS Config records its configuration state.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=235)** It then records the configuration state of the instances because they're associated with the security group.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=241)** The updated configuration of the security group and the instances are saved as configuration items and delivered to an S3 bucket.
>
> **[4:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=249)** AWS Config supports key AWS resource types such as Amazon EC2, Amazon S3, Amazon VPC, AWS IAM or identity and access management, AWS Lambda, AWS CloudFormation, Amazon CloudWatch, AWS CloudTrail, and more.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=269)** For a complete list of supported AWS resources, please refer to the AWS Config documentation.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=276)** Now let's switch to the AWS Management Console and learn how to configure AWS Config.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=283)** We'll configure AWS Config to record EC2 instances and security groups.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=288)** We'll also configure a remediation rule that will flag instances that are not of type t3.micro as noncompliant.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=296)** Use the services dropped on menu to navigate to Config from the Management & Governance section.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=302)** Click Get started.
>
> **[5:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=304)** By default AWS Config records all resources in the region.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=308)** To change this, set it to record specific resource types.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=312)** From the resource type dropdown, search for EC2 and then include EC2 instances and EC2 security group.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=321)** AWS Config needs permissions to call other AWS services, and for that, you will need to assign a role.
>
> **[5:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=328)** In my account I've already enabled AWS Config in a different region so I have the option to use an existing service-linked role.
>
> **[5:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=336)** If you haven't enabled AWS Config in any other region, you will see the option to create a service-linked role.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=342)** Choose that option to have AWS create the role for you.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=347)** Note that you can also define the role yourself and add it here.
>
> **[5:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=350)** Next, you need to define an S3 bucket to store configuration history.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=354)** You can create a new bucket or choose a bucket from your account or another account.
>
> **[6:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=361)** Choose the appropriate option.
>
> **[6:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=363)** Use this check box to send configuration changes and notifications to an SNS topic.
>
> **[6:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=369)** Click Next.
>
> **[6:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=371)** In this step, you can configure remediation rules.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=374)** For now you will skip this, but you will add a rule later.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=378)** Scroll down and click Next.
>
> **[6:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=381)** Review the settings and click Confirm.
>
> **[6:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=385)** Recording is now on, and AWS Config is discovering resources from your account.
>
> **[6:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=391)** This process could take some time.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=393)** In another region I've already set up AWS Config.
>
> **[6:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=397)** I'll now switch to the other region.
>
> **[6:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=401)** Under the Resources section, you will see a list of your discovered resources.
>
> **[6:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=408)** To see more details, click a resource identifier.
>
> **[6:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=411)** Doing so shows the resource metadata.
>
> **[6:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=415)** Scroll down to see the configuration item.
>
> **[7:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=420)** By scrolling down the configuration item, you can see the relationships of this resource.
>
> **[7:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=427)** For example, this EC2 instance is contained in a VPC, is associated with a security group.
>
> **[7:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=434)** It is also attached to an EBS volume.
>
> **[7:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=437)** It has a network interface and is contained in a subnet.
>
> **[7:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=442)** To view events associated with the resource, scroll to the top and click Resource Timeline.
>
> **[7:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=449)** Expand an event to know more.
>
> **[7:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=453)** For example, here is an event that has recorded an instance stop action.
>
> **[7:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=459)** To view the recorded changes for this resource, Look for events of type configuration change.
>
> **[7:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=466)** So that is how you enable configuration recording, now let's take this a step further and configure a rule.
>
> **[7:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=473)** Rules allow you to define the ideal configuration state of your resources.
>
> **[7:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=477)** For our example, let's configure a rule that checks EC2 instances to determine if they're of type t3.micro.
>
> **[8:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=485)** If they're not, the rule is flagged as noncompliant.
>
> **[8:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=489)** Click Rules and then click Add rule.
>
> **[8:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=492)** For this example, we'll use a managed rule or a predefined rule.
>
> **[8:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=496)** Note that you can also define your custom rules.
>
> **[8:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=501)** Search for EC2.
>
> **[8:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=503)** On page two, select the rule named desired-instance-type.
>
> **[8:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=509)** It checks whether your EC2 instances are of the specified type.
>
> **[8:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=513)** This rule will allow us to achieve the objective of checking for instances that are not of type t3.micro.
>
> **[8:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=520)** Click Next.
>
> **[8:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=522)** It auto-fills the name and description.
>
> **[8:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=525)** Note that the trigger for this rule is a configuration change.
>
> **[8:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=529)** This means the rule will run when there are changes to resources.
>
> **[8:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=533)** There are three options available to define the scope of changes.
>
> **[8:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=536)** This setting will determine when evaluations occur.
>
> **[8:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=539)** When you set it to All changes, the rule will evaluate when any resource recorded by AWS Config is created, changed, or deleted.
>
> **[9:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=548)** When you set it to Resources, the rule will evaluate when a resource matching the type you specify is created, changed, or deleted.
>
> **[9:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=555)** When you set it to Tags, the rule will evaluate when a resource with the specified tag is created, changed, or deleted.
>
> **[9:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=564)** For this rule, set it to Resources.
>
> **[9:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=566)** Note that the service has automatically set the resource type to AWS EC2 instance.
>
> **[9:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=571)** This is based on the managed rule you selected from the previous step.
>
> **[9:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=576)** Rule parameters allow you to specify the attributes for which the resources will be evaluated.
>
> **[9:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=581)** This rule checks for the desired instance type so the attribute to evaluate is InstanceType.
>
> **[9:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=587)** Set the desired instance type as t3.micro.
>
> **[9:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=592)** Note that you can also add additional key value pairs.
>
> **[9:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=596)** Click next.
>
> **[9:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=598)** Review your selections and click Add rule.
>
> **[10:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=603)** Here's the configured rule.
>
> **[10:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=606)** Now let's force an evaluation of this rule.
>
> **[10:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=609)** Click the rule name, then click the Actions button and select Re-evaluate.
>
> **[10:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=616)** On refreshing the page, you can see that a resource has been flagged as noncompliant.
>
> **[10:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=622)** This means I have an EC2 instance that is not of the specified type t3.micro.
>
> **[10:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=628)** AWS Config also allows you to remediate noncompliant resources.
>
> **[10:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=632)** Let's also add remediation capabilities to this rule.
>
> **[10:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=636)** Doing so will ensure that any EC2 instances that aren't of the type t3.micro will be automatically resized.
>
> **[10:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=643)** Select the rule, click the Actions button, and then select Manage remediation.
>
> **[10:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=649)** There are two remediation methods available: automatic and manual.
>
> **[10:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=654)** For this example, we'll choose manual.
>
> **[10:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=657)** Here you can select remediation action.
>
> **[11:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=660)** Make a note of the message, "Remediation is achieved using a service called AWS Systems Manager Automations."
>
> **[11:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=667)** Systems Manager Automation allows you to automate operational tasks on your AWS resources, like in this case, automatically resized noncompliant EC2 instances.
>
> **[11:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=678)** For this rule, we'll use the AWS-ResizeInstance action.
>
> **[11:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=682)** Under the Resource ID parameter section, select InstanceID.
>
> **[11:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=688)** Doing so will add it to the remediation action.
>
> **[11:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=692)** Under the Parameters section, specify the desired instance type t3.micro.
>
> **[11:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=699)** The instance type you specified earlier when creating the rule was the expected value to identify noncompliant resources.
>
> **[11:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=707)** The instance type you're defining here is the desired for noncompliant resources.
>
> **[11:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=713)** Click Save changes.
>
> **[11:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=715)** Now let's remediate the resource.
>
> **[11:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=717)** Here is the noncompliant resource.
>
> **[12:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=720)** To remediate it, select the resource and click Remediate.
>
> **[12:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=726)** Note that the status has changed to Action execution queued.
>
> **[12:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=730)** Now AWS Config will resize the instance to t3.micro.
>
> **[12:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=735)** If you figure and automatic remediation action, AWS Config will automatically address noncompliant resources without manual intervention.
>
> **[12:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=744)** So you've seen how AWS Config can be a critical tool in your kit to ensure security and compliance.
>
> **[12:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-config?u=76281980&t=750)** It takes care of important administrative functions, like discovering resources, evaluating them for compliance, and remediating them.

> [!info]- Semantic Content
>
> **Env Vars:** aws (46), ec2 (15), sns (2), vpc (2), arn (1)
> **CLI Commands:** aws (46), make (1)
> **Code Keywords:** let (8), switch (2), this, (2), type. (2), this. (1)
> **UI Navigation:** select the (3), switch to (2), scroll down (2), navigate to (1), dropdown (1)
> **Definitions:** is a  (5), known as (1), is an  (1)
> **Analogies:** for example (4), such as (2), imagine (1)
> **Prerequisites:** configure (6), set up (1)
> **Warnings:** note that (6)

#### AWS Systems Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=0)** - [Instructor] Administrators are often responsible for key operational activities, such as maintaining an inventory of assets, remotely managing assets, installing required software, applying missing patches and more.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=13)** AWS Systems Manager can help with these and a variety of other tasks.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=18)** AWS Systems Manager is a service that allows you to view operational data from multiple AWS services and automate operational tasks.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=27)** With Systems Manager, you can centrally define the configuration options and policies for your managed instances.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=34)** A managed instance is a machine configured for use with Systems Manager.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=38)** You can identify resources that are out of compliance and corrective action.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=43)** You can automate a variety of maintenance tasks such as patching your managed instances.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=49)** You can create runbook style documents that define the actions to perform on your managed instances.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=55)** You can group AWS resources together using different attributes such as application, region, project, business unit and more.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=65)** You can also automatically collect inventory information about your Amazon EC2 and on-premises manage instances.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=73)** Inventory information includes metadata such as applications, network configuration and more.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=79)** Systems Manager groups these capabilities into five categories, operations management, application management, change management, node management, and shared resources.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=93)** We'll see these in a moment when we get to the AWS console.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=97)** Systems Manager was formally known as Simple Systems Manager or SSM.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=102)** Systems Manager provides an agent called a Systems Manager agent also known as the SSM agent that you can install on EC2 instances, on-premises servers or virtual machines.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=115)** With this agent, Systems Manager updates, manages and configures your resources.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=120)** You can install the SSM agent on Linux, MacOS and Windows operating systems.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=126)** For specific operating system, flavors and versions, please refer to the Systems Manager documentation.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=132)** Some Amazon machine images or AMIs have the Systems Manager agent pre-installed on them but you'll need to install the agent manually for others including on-premises servers.
>
> **[2:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=143)** You will find the list of these AMIs in the documentation.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=147)** Now let's go to the AWS management console and explore the capabilities of Systems Manager.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=153)** To follow along with the demonstration, you will need a running EC2 instance that has the SSM agent pre-installed on it like Windows 2016 or Windows 2019.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=164)** Use the services drop down menu and navigate to the management and governance section and then go to Systems Manager.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=174)** Click get started with Systems Manager.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=177)** When you configure Systems Manager for the first time you'll be prompted to select a home region.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=183)** It is the region where AWS will create the resources that are required to deploy your configuration.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=189)** Bear in mind, once chosen, you cannot change the home region.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=192)** After selecting the home region, you will reach this page here.
>
> **[3:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=196)** You can invoke the quick set of functionality to figure the required security roles and commonly used capabilities for EC2 instances.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=204)** First, you will need to create a new configuration.
>
> **[3:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=207)** Click the create button.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=209)** From the available configuration types, select host management.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=214)** Then click next.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=217)** In this step, you can configure Systems Manager to update the SSM agents every two weeks, collect inventory metadata every 30 minutes and scan instances for missing patches daily.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=228)** You can also configure it to install and configure the CloudWatch agent.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=233)** CloudWatch is a monitoring service and it includes an agent that allows you to collect custom metrics from hosts.
>
> **[4:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=240)** You can also configure it to up to the CloudWatch agent every 30 days.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=244)** Next, you need to configure the targets on which you want to apply this configuration.
>
> **[4:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=249)** If you have AWS organizations configured on this account, you can deploy it in the entire organization or specific OUs and regions or the current account.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=260)** If you do not have AWS organizations configured, you will not see the options to deploy in the OUs.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=266)** Then choose to apply in the current region or choose from a list of regions.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=272)** Here you can choose your target instances.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=275)** You can include all instances or instances having a specific tag or instances in a resource group or manually select the desired instances.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=287)** Select the appropriate option and then select the desired instances that you'd like to manage with Systems Manager.
>
> **[4:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=294)** Then click create to begin the setup.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=298)** Here we can see the deployment and association status.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=302)** Note that this deployment can take a few minutes.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=305)** In another account, I've got Systems Manager set up and the agent installed on an instance.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=311)** I'll now switch to the other account.
>
> **[5:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=314)** On this account, I'll first navigate to Systems Manager.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=318)** On the left navigation pane, under the node management section, click fleet manager to see a list of managed instances.
>
> **[5:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=327)** The instance on which you deployed the agent will show up here shortly.
>
> **[5:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=332)** On-premises servers or virtual machines with SSM agents will also be listed here.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=337)** This list will also include virtual machines in other cloud environments.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=341)** To know more about an instance, simply click the ID.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=344)** Doing so will show an overview of the instance and the to view file system, performance counters, processes, users and groups, event logs, and Windows registry.
>
> **[5:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=359)** For Linux machines, you will not see the options for registry and event logs.
>
> **[6:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=363)** You can connect to your instance right from here.
>
> **[6:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=366)** Click node actions and then choose start terminal session.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=373)** You are now connected and you can start executing commands.
>
> **[6:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=377)** Connecting to on-premises instant requires you to be in the advanced instances tier.
>
> **[6:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=383)** You will find more information about this in the documentation Back to the Systems Manager console, on the left navigation pane, under node management, click inventory.
>
> **[6:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=399)** Here you will see basic inventory information on the dashboard such as top five operating systems, applications, server roles and services.
>
> **[6:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=407)** With Systems Manager, you can also patch your instances on demand or schedule a patch job.
>
> **[6:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=413)** On the left navigation pane, under node management, click patch manager.
>
> **[6:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=419)** To patch on demand, click patch now.
>
> **[7:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=422)** Then select a patch operation.
>
> **[7:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=424)** Scan for miss patches or scan and install missing patches.
>
> **[7:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=431)** Select the instances to patch and provide a bucket name to store patching operation logs.
>
> **[7:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=439)** You can also run commands on your instances.
>
> **[7:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=441)** On the left navigation pane, click run command.
>
> **[7:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=448)** Click the run command button.
>
> **[7:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=451)** Doing so will show a list of command documents that you can execute and their supported platforms.
>
> **[7:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=457)** It includes documents that allow you to install missing updates, create and delete registry keys, install applications, terminate processes, run scripts, create users and more.
>
> **[7:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=469)** Let's run a command to see how this works.
>
> **[7:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=471)** Search and select the get users document.
>
> **[7:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=474)** This document will list the users configured on the instance.
>
> **[7:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=478)** Scroll down to the target section and select choose instances manually.
>
> **[8:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=483)** Then select the desired instance.
>
> **[8:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=487)** For now, disable writing the output to an S3 bucket and click run.
>
> **[8:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=497)** The command execution has completed.
>
> **[8:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=500)** To view the results, select the instance and click view output.
>
> **[8:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=508)** Expand the output section.
>
> **[8:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=510)** The users are listed here.
>
> **[8:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=512)** There's an administrator account, a guest account and one other account.
>
> **[8:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=520)** For this run command, you've used an AWS defined document.
>
> **[8:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=525)** It is also possible to create your own documents.
>
> **[8:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=528)** To do so, click documents under the shared resources section.
>
> **[8:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=538)** Then click create document.
>
> **[9:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=540)** Choose the type as command or session.
>
> **[9:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=543)** You can specify the document content in JSON or YAML format.
>
> **[9:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=548)** The distributor feature allows you to install software on your managed instances.
>
> **[9:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=553)** You can install AWS provided software packages or your own software.
>
> **[9:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=558)** If you'd like to install your own software, click create package and upload your software.
>
> **[9:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=564)** Doing so will create an installation package that you can push to your instances.
>
> **[9:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=569)** For this demonstration, let's install an AWS provider software, the Amazon CloudWatch agent.
>
> **[9:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=576)** Select a package and click install one time.
>
> **[9:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=580)** Doing so invokes the run command utility that we saw a minute ago.
>
> **[9:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=586)** Select the target instances.
>
> **[9:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=594)** Optionally, provide an S3 bucket name to write the output and click run.
>
> **[10:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=602)** In addition to managing your instances, Systems Manager also allows you to maintain the state of your EC2 and hybrid infrastructure.
>
> **[10:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=610)** You can do this using state manager.
>
> **[10:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=616)** First, you will need to create an association.
>
> **[10:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=619)** It defines the desired state of your targets and includes a document that contains the state definition, target information and schedule.
>
> **[10:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=628)** These documents apply to different resources such as auto scaling groups, EBS volumes, CloudTrail, CloudWatch, S3, RDS, CloudFormation and more.
>
> **[10:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=640)** For this demonstration, search and select the document titled disable public access for security group.
>
> **[10:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=647)** This document disables public SSH and RDP access for the desired security groups.
>
> **[10:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=654)** Under input parameters, provide the target security group ID and an IAM role.
>
> **[11:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=660)** The role is required to provide Systems Manager with the necessary permissions to execute this action.
>
> **[11:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=665)** In this case, the role should provide permissions to Systems Manager to perform actions on VPC resources.
>
> **[11:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=672)** Here I've provided a custom role.
>
> **[11:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=675)** If you'd like to block access from a specific IP address, add it here or leave it blank to disable all public access.
>
> **[11:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=683)** Note that you can schedule this activity.
>
> **[11:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=686)** Select no schedule to run it once.
>
> **[11:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=689)** Then click create association.
>
> **[11:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=693)** The association has been created and is now in a pending status.
>
> **[11:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=699)** Click the association and navigate to execution history.
>
> **[11:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=704)** The status has changed to success.
>
> **[11:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=707)** This means Systems Manager has executed the configured action.
>
> **[11:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=710)** As you've seen, there are so many possibilities with Systems Manager.
>
> **[11:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=714)** We've only scratched the surface.
>
> **[11:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=717)** We've only looked at host management but you can also use it to perform operations, application and change management.
>
> **[12:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-systems-manager?u=76281980&t=726)** To fully appreciate this tool's capabilities and understand how it can help control your infrastructure, I recommend playing around with the different options.

> [!info]- Semantic Content
>
> **Env Vars:** aws (12), ssm (6), ec2 (5), json (1), yaml (1)
> **Prerequisites:** install (12), configure (6), required to (2), you'll need (1), setup (1)
> **CLI Commands:** aws (12), node (5), find (2), ssh (1)
> **UI Navigation:** select the (9), navigate to (3), go to (2), switch to (1), scroll down (1)
> **Code Keywords:** let (3), public (3), switch (1), delete (1), case, (1)
> **Analogies:** such as (6)
> **Definitions:** is a  (3), known as (1)
> **Documentation:** the documentation (2)

#### AWS License Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=0)** - [Instructor] In production environments, one of the common administrative tasks is license management.
>
> **[0:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=5)** It includes provisioning and tracking license usage, preventing license violations, and limiting usage to only what is required.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=14)** AWS License Manager aims to help with these goals.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=17)** AWS License Manager helps to manage software licenses centrally across AWS and your on-premises environments.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=25)** It gives you visibility into the usage of your licenses so you can limit overages and reduce the risk of non-compliance.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=32)** With License Manager, you can define and enforce license rules.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=36)** These rules contain settings that reflect the terms of your enterprise agreement.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=41)** You can also discover the usage of software installed on AWS and on-premises instances.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=48)** License Manager integrates with AWS Systems Manager, allowing you to discover any software running on your managed instances.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=55)** As we saw in an earlier video, Systems Manager uses an agent to communicate with your managed instances.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=62)** With License Manager, you can and track software that is licensed based on virtual cores, or VCPUs, physical cores, sockets, and number of instances.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=73)** Common use cases include tracking Microsoft Windows Server, SQL Server, and Oracle Database licenses.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=80)** Now, let's switch to the AWS management console and look at the configuration.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=86)** Use the services dropdown menu and navigate to the management and governance section, and then go to License Manager.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=95)** Let's begin with a simple configuration that tracks usage of Microsoft Server 2019.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=100)** If you're using License Manager for the first time, you'll be prompted to grant the required permissions to the service to manage licenses used by your resources.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=109)** On my account, I've already granted permissions.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=113)** Click create customer managed license.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=117)** Enter a name for the license configuration, then select a licensing type.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=122)** For this example, select VCPUs.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=126)** It is optional to define the number of VCPUs.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=130)** Since we are creating this configuration for tracking purposes only, leave this blank.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=135)** Note that you have the option to enforce license limit and configure rules.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=142)** You can configure rules to enforce conditions like the minimum or maximum VCPUs the resource must have to consume a license.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=151)** You can also restrict license usage by the instance tendency.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=155)** For example, only allow license usage on EC2 instances that have a dedicated tendency.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=161)** And you can also configure it to honor CPU options.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=164)** These options are available when you launch an instance.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=168)** For now, you will skip this.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=171)** You can also configure rules to discover license usage.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=175)** For now, click submit.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=178)** Now you have a few options.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=180)** You can associate this configuration with an AMI, so anytime a user uses the associated AMI to launch an instance, the consumption will be tracked.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=190)** You can also associate it with a CloudFormation template or with service catalog products.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=195)** For this example, let's associate it with an EC2 launch template, so anytime a user launches an instance with the template, the user will be tracked.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=205)** First, navigate to the EC2 service.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=208)** On the left navigation pane, click launch templates, and then click create launch template.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=217)** Since our focus is License Manager, we'll configure only the bare minimum items required to get it working.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=224)** Start by providing a name for the template.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=226)** Use the AMI dropdown to search and select the Microsoft Windows Server 2019 base AMI.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=234)** Also, associate a key pair.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=239)** Scroll down to the advanced detail section.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=243)** As you can see, there are many settings that you can configure to customize your EC2 launch experience, but now we are interested in license configuration.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=253)** Associate the license configuration you defined.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=258)** Then click create launch template.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=260)** Now let's launch an instance using this template.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=264)** Select an instance type that has one VCPU.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=268)** Even a small instance type will work.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=270)** Performance is not a concern here, because we won't be logging in to the instance.
>
> **[4:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=275)** Scroll down and click launch instance from template.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=282)** Now let's switch back to the License Manager console.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=290)** Back over here, on refreshing the page, you can see that the license usage has been tracked.
>
> **[4:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=296)** Let's take this a step further and enforce a license limit.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=299)** Select the configuration, click actions, and then click edit Define the number of VCPUs as one and check the box to enforce license limit.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=312)** Click update.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=315)** Now let's return to the EC2 console and try to launch an instance using the same template.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=323)** Select a template, click the actions button, and choose launch instance from template.
>
> **[5:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=331)** Select any instance type.
>
> **[5:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=335)** Scroll down and click launch instance from template.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=342)** And we are presented with an error message that the license count has been exceeded.
>
> **[5:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=346)** So you can see, with a simple configuration, you can track and enforce license consumption.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=352)** Let's go back to the License Manager console.
>
> **[5:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=356)** Under the setting section, you can also link your AWS organization's accounts.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=362)** By doing so, you can use the organization's management account to manage and control license usage centrally.
>
> **[6:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=368)** You can also turn on cross-account resource discovery to perform an inventory search across all your accounts.
>
> **[6:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=375)** You can configure an SNS topic to which License Manager can send notifications.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=380)** You can also configure a conversion task to change your license type between BYOL, or bring your own license, and AWS provided licensing.
>
> **[6:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=389)** For example, if you're migrating your existing on-premises workloads to AWS, you might start with an AWS provided license.
>
> **[6:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=397)** When the migration is complete, you can create a conversion task to change from AWS provided license to BYOL, or bring your own license.
>
> **[6:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=406)** Any licenses that have been granted to you will show up here, and you can also generate reports about your license usage.
>
> **[6:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-license-manager?u=76281980&t=414)** So to summarize, License Manager aims to simplify and centralize how you monitor and control your licenses across AWS and on-premises resources, and there is no additional charge for License Manager.

> [!info]- Semantic Content
>
> **Env Vars:** aws (12), ec2 (5), ami (4), byol (2), sql (1)
> **Code Keywords:** let (8), switch (2), type. (2), this. (1)
> **CLI Commands:** aws (12)
> **Exercise Files:** template (12)
> **UI Navigation:** scroll down (3), dropdown (2), switch to (1), go to (1), navigate to (1)
> **Prerequisites:** configure (8), required to (1)
> **Cross-References:** as we saw (1), go back to (1)
> **Analogies:** for example (2)

#### AWS CloudFormation
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=0)** - [Instructor] One of the challenges system administrators find with cloud-based solutions is that they need to deploy the individual components that make up a solution, configure them, and establish the relationships between them.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=12)** This problem may be compounded if you are required to tear down and build the solution again each time the need arises.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=19)** AWS CloudFormation is a service that aims to simplify and speed up infrastructure deployment.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=25)** AWS CloudFormation allows you to deploy and configure resources using a template that contains the description of those resources.
>
> **[0:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=33)** So you don't have to create and configure the required resources individually.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=37)** The CloudFormation template handles it for you.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=39)** To understand how CloudFormation can simplify deployment, let's look at an example.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=45)** Imagine you have a multi-tiered web application.
>
> **[0:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=48)** The application is accessible from the internet so it has a public-facing load balancer that distributes traffic to the connected web servers.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=57)** The solution also includes two internal load balancers that distribute traffic to the application servers and to the connected databases.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=66)** A simple solution like this could require configuring several services, such as VPC, EC2, security groups, load balancers, autoscaling groups, database instances, Route 53 for DNS management, CloudWatch for monitoring, SNS for notifications, and more.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=84)** Each of these services is configured from their individual consoles requiring time and is prone to error.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=90)** Instead, you can declare these resources, their configuration and relationships in a CloudFormation template.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=97)** The template will configure the solution when executed.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=100)** The template is a JSON or YAML formatted text file.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=103)** Resources created by a template are managed as a single unit called a Stack.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=108)** CloudFormation can deploy many types of resources, and the possibilities are immense.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=113)** Let's look at a simple example that will help you appreciate its usefulness.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=118)** For this example, we'll use a sample solution template provided by AWS.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=123)** We'll use the WordPress basic single instance template that installs and deploys WordPress on a single Amazon EC2 instance with a local MySQL database for storage.
>
> **[2:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=134)** Before we run the template, let's examine it.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=138)** A template has four sections.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=141)** The Resources section contains the definition of the resources you want to create.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=146)** You have the object name followed by the object type.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=151)** For example, this template defines a security group named WebServerSecurityGroup followed by its properties.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=158)** Each resource that the template must deploy must be configured here.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=164)** The Parameters section declares values that can be passed with a template at deployment time, so it is used to collect user input.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=171)** For example, you can define a parameter to specify a username and password at runtime rather than storing it in the template.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=179)** In this template, the Parameters section requires you to input a KeyName and instance type.
>
> **[3:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=186)** Note that there's a default value or you can pick from these configured values.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=191)** It also requires you to input SSHLocation, DBName, which by default will be wordpressdb, DBUser, DBPassword, and DBRootPassword.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=204)** In the Mappings section, you can declare conditional values that are evaluated like a lookup table.
>
> **[3:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=210)** In this template, the Mapping section is used to lookup the AMI architecture and the AMI ID based on the region where you execute the template.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=219)** For example, if you execute this template from us-west-2, this AMI ID will be used to deploy the WordPress server.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=228)** And finally, you have the Outputs section.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=231)** It is used to define the values you'd like to return after deployment.
>
> **[3:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=235)** This template will return the WordPress WebsiteURL.
>
> **[3:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=238)** Now it's time to execute this template.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=241)** Let's switch to the AWS account.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=244)** Use the Services drop down menu and navigate to the Management & Governance section and then go to CloudFormation.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=252)** Click Create stack.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=254)** Remember, a stack is a collection of resources created by a template.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=258)** You can upload a template from an S3 URL or your local machine.
>
> **[4:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=262)** Use a sample template or create a template using the Designer.
>
> **[4:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=267)** Select the option to Use a sample template and select the first WordPress blog template.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=274)** Click Next.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=276)** Enter a name for the stack.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=280)** Under the Parameters section, enter values for DBPassword, DBRootPassword, and DBUser.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=290)** Select an InstanceType and select an existing KeyPair.
>
> **[4:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=299)** In the next step, you will need to provide permissions.
>
> **[5:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=303)** This is because CloudFormation needs the necessary permissions to deploy and configure the resources.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=308)** If you don't provide a role, CloudFormation will use permissions based on your user account.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=315)** In the next step, review your selections and click Create Stack.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=320)** The stack has now been created.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=323)** By using the refresh button, you can see the events as they occur.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=330)** And resources that have been created will show up under the Resources tab.
>
> **[5:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=335)** A SecurityGroup has been created and an EC2 instance is being deployed.
>
> **[5:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=343)** Okay, the stack creation has been completed.
>
> **[5:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=347)** Under than Outputs section, you will see the URL.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=352)** Clicking on the URL, we are presented with the WordPress welcome page.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=357)** As you've seen, CloudFormation simplifies and speeds up resource deployment.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=362)** Back to the Stack, if you don't need it anymore, you can delete it with one click.
>
> **[6:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=367)** I hope you can begin to appreciate the power of CloudFormation.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=370)** As an administrator, you can code common and repetitive tasks as a template and execute them when required.
>
> **[6:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cloudformation?u=76281980&t=377)** There is a bit of a learning curve, in that you will need to know how to format your template, but once created, you can reuse the templates.

> [!info]- Semantic Content
>
> **Exercise Files:** template (28)
> **Env Vars:** aws (4), ec2 (3), ami (3), url (3), vpc (1)
> **Code Keywords:** let (4), type. (2), public (1), require (1), finally, (1)
> **CLI Commands:** aws (4), find (1), make (1), mysql (1)
> **Prerequisites:** configure (5), required to (1)
> **UI Navigation:** select the (2), switch to (1), navigate to (1), go to (1)
> **Analogies:** for example (3), imagine (1), such as (1)
> **Definitions:** is a  (4)

#### AWS Audit Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=0)** - [Instructor] Administrators are often responsible for auditing resource usage, ensuring that policies and procedures are operating in line with guidelines, and preparing audit-ready reports.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=10)** Most times, these activities are performed manually, resulting in a process that's cumbersome, time-consuming and prone to errors.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=17)** AWS Audit Manager aims to simplify and automate audit-related activities, such as auditing usage, collecting evidence, and building reports.
>
> **[0:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=26)** AWS Audit Manager continuously audits your AWS usage and automates evidence collection, helping you assess if your activities, policies, and procedures are operating in line with regulations and industry standards.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=39)** Audit Manager includes controls that describe how to fulfill a given requirement.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=44)** Controls ensure that your resources are operating in compliance with regulations.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=49)** There are predefined controls, but you can create custom controls, too.
>
> **[0:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=53)** Here are some examples of controls.
>
> **[0:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=55)** Multifactor authentication should be enabled for all IAM users that have a console password.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=60)** S3 buckets should have server-side encryption enabled.
>
> **[1:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=64)** And VPC flow logging should be enabled in all VPCs.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=68)** As you can see, it is a control that is responsible for laying out the requirements.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=73)** Audit Manager has built in frameworks that you can use to assess your compliance.
>
> **[1:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=78)** A framework is a collection of controls, and it maps your AWS resources to the requirements in a control.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=85)** These frameworks are based on AWS best practices for different compliance standards and regulations.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=91)** It includes well-known frameworks, such as CIS, GDPR, HIPAA, FedRAMP, and more.
>
> **[1:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=97)** You can also create a custom framework to suit your organization's compliance requirements.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=102)** You can build this from scratch or customize an existing framework.
>
> **[1:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=106)** Before we dive into the console for a demonstration, let's look at the important services that integrate with Audit Manager.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=113)** First is Security Hub.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=115)** In an earlier video, we have seen that Security Hub monitors your resources using security checks based on best practices and industry standards.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=123)** Audit Manager imports Security Hub findings to generate evidence for the monitored services.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=129)** Next is AWS Config.
>
> **[2:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=131)** AWS Config collects configuration information about your resources, including how they're related to one another and how they were configured in the past.
>
> **[2:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=140)** Audit Manager collects log data from AWS Config and analyzes them to generate evidence for monitored services.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=147)** Next is Control Tower.
>
> **[2:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=149)** Control Tower lets you enforce guardrails that help govern and monitor your resources for compliance and detect drift from best practices.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=157)** Audit Manager imports guardrail logs and maps them to user events collected from CloudTrail and AWS Config.
>
> **[2:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=165)** It uses logs as evidence of compliance or noncompliance to the guardrails.
>
> **[2:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=170)** Now let's switch to the AWS Management Console and configure Audit Manager.
>
> **[2:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=175)** From the Services dropdown menu, navigate to the Security, Identity and Compliance section and click AWS Audit Manager.
>
> **[3:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=184)** Click Set up AWS Audit Manager.
>
> **[3:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=188)** Note the message.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=189)** For optimal experience, AWS recommends that you enable Security Sub and Config.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=195)** Audit Manager uses a service-linked IAM role for the required permissions, so no action is needed.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=202)** By default, a KMS-managed key is used for encrypting data.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=205)** We'll leave it at the default, so uncheck the box for customization.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=211)** You can use Audit Manager for multiple accounts with AWS organizations.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=215)** If you plan to do so, Audit Manager will run assessments over multiple accounts and consolidate evidence into a delegated administrator account, which you can specify here.
>
> **[3:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=224)** For now, we'll skip this.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=226)** Optionally, you can also enable AWS Config and Security Hub to generate evidence from these services.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=233)** Of course, using these services will incur charges.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=236)** Click Complete setup.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=239)** The setup is complete.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=241)** Now let's select a framework and perform an assessment.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=245)** At the top, click Start with a framework.
>
> **[4:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=249)** As you can see, there are several prebuilt frameworks.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=252)** Select the AWS Foundational Security Best Practices framework.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=256)** It has 121 controls grouped into 29 sets.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=261)** Click the framework name if you'd like to see the included controls.
>
> **[4:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=266)** Then browse through the control sets and click on the desired control to know more.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=272)** At the top, click Create assessment Enter an assessment name.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=282)** Next, select an S3 bucket to store the assessment reports.
>
> **[4:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=288)** Click Next.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=292)** Currently, there's only account in scope.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=295)** If you had AWS organizations enabled, you would see the accounts in your organization.
>
> **[5:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=300)** Select and click Next.
>
> **[5:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=302)** In this step, you need to select the services to include in the scope.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=305)** By default, Security Hub is selected.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=308)** Click Next.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=312)** In this step, you will need to select an audit owner which can be an IAM user or role with full permissions over Audit Manager resources.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=320)** Select a desired audit owner and click Next.
>
> **[5:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=326)** In the last step, review your selections and click Create assessment.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=333)** When you do so, Audit manager will automatically collect evidence and you'll need to wait 24 hours to view it.
>
> **[5:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=340)** In another region, I've already created an assessment.
>
> **[5:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=343)** Let's look at it.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=344)** I'll switch to the other region and cancel out from the wizard.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=352)** Here is the assessment I created earlier.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=354)** The status is active.
>
> **[5:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=357)** The Dashboard contains information, such as the controls with non-compliant evidence, count of non-compliant evidence, and active assessments.
>
> **[6:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=366)** Scrolling down, you can see the evidence breakdown of the control domains.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=374)** Expand a domain to reveal the controls within.
>
> **[6:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=377)** Navigate to Assessments and click an assessment name.
>
> **[6:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=381)** Here, you will find controls grouped in control sets.
>
> **[6:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=387)** Let's dive into the details of a control in the IAM section.
>
> **[6:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=392)** Here is a control that states Hardware multifactor authentication should be enabled for the root user.
>
> **[6:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=398)** Let's click on it.
>
> **[6:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=399)** Click on the control name.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=403)** By default, all controls have the status set to Under review.
>
> **[6:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=408)** It is the default status indicating that the control hasn't yet been reviewed.
>
> **[6:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=412)** The Evidence folder tab lists the evidence collected automatically for this control.
>
> **[6:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=417)** It is organized into a folder every day.
>
> **[7:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=420)** Clicking on a folder shows the evidence that was collected.
>
> **[7:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=426)** Note that the source for this evidence is Security Hub.
>
> **[7:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=430)** Let add this evidence to an assessment report that we'll generate later.
>
> **[7:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=439)** By clicking on the evidence, you can see further details, such as ControlID, findingDescription, Remediation, Severity, Title, and Type.
>
> **[7:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=451)** As you can see, the information available is very granular.
>
> **[7:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=455)** Now let's return to the evidence folder and upload evidence.
>
> **[7:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=459)** Doing so can help demonstrate compliance for that control.
>
> **[7:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=463)** Click Upload manual evidence.
>
> **[7:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=466)** Manual evidence can be added as an S3 URI, so you will need to upload your evidence into an S3 bucket, copy the object URI, and add it here.
>
> **[7:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=477)** Then click Upload.
>
> **[8:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=481)** With the evidence uploaded, I'll now change the control status to Reviewed.
>
> **[8:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=494)** If you navigate back to the list of controls, you will see that the control status has been updated.
>
> **[8:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=503)** You can delegate a control set to another user or role.
>
> **[8:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=507)** This can be useful when you'd like another user to review the controls associated with a service.
>
> **[8:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=514)** Select the desired control set and click Delegate control set.
>
> **[8:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=518)** The Changelog tab shows a list of activities you performed in Audit Manager.
>
> **[8:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=524)** To generate an assessment report, go to the Assessment report selection tab, then click Generate assessment report.
>
> **[8:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=533)** Provide a name for the report.
>
> **[8:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=535)** Then click the Generate button.
>
> **[8:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=539)** When the status changes to Generated, you will be able to download the report.
>
> **[9:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=543)** It contains the same information we've seen on the console and can be useful to present to other users.
>
> **[9:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=550)** A good auditing tool must allow creating custom frameworks and controls.
>
> **[9:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=554)** You can do this with Audit Manager.
>
> **[9:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=557)** You can a custom framework from the Framework library section.
>
> **[9:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=561)** You can also use a standard framework as a template to add and remove controls and create a custom framework.
>
> **[9:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=569)** Creating a custom framework can be helpful if you'd like to evaluate against a custom set of controls applicable to your organization.
>
> **[9:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=577)** The Control library allows you to view existing controls and create custom controls.
>
> **[9:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=582)** So that's about Audit Manager.
>
> **[9:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=584)** As you've seen, it includes the capabilities you would expect from a good auditing tool: automatic evidence collection and assessment, the ability to manually add evidence, delegate assessments, create custom controls and frameworks, and generate reports.
>
> **[10:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=600)** Though there's one capability that I think would be a good addition, the ability to create or request exceptions to exempt a resource from evaluation.
>
> **[10:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-audit-manager?u=76281980&t=609)** This can be useful when you're unable to comply with the control requirements and you have a business justification.

> [!info]- Semantic Content
>
> **Env Vars:** aws (17), iam (4), uri (2), vpc (1), cis (1)
> **CLI Commands:** aws (17), find (1)
> **Code Keywords:** let (8), default, (4), switch (2), this. (1), type. (1)
> **UI Navigation:** select the (3), click on (3), switch to (2), navigate to (2), dropdown (1)
> **Prerequisites:** setup (2), configure (1), set up (1), you'll need (1)
> **Analogies:** such as (4)
> **Definitions:** is a  (3)
> **Exercise Files:** download the (1), template (1)

#### AWS Directory Service
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=0)** - [Instructor] When you migrate your Active Directory-dependent and Windows workloads to the AWS cloud, they will need access to Active Directory Domain Controllers, or DCs.
>
> **[0:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=10)** Also, if you plan to use AWS services, such as Amazon WorkSpaces, with your Active Directory account, you will need to integrate them with Active Directory.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=19)** AWS Directory Service allows your directory-aware workloads, and AWS resources, to use Managed Active Directory in AWS.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=27)** With AWS Directory Service, you can set up and run directories in the AWS cloud, manage users and groups, provide single sign-on to applications and services, create and apply group policy, and join Amazon EC2 instances to a domain.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=43)** AWS Directory Service for Microsoft Active Directory is referred to as AWS Managed Microsoft AD.
>
> **[0:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=49)** It is powered by Windows Server 2012 R2.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=52)** It allows your end-users to use their existing corporate credentials when accessing AWS applications, such as Amazon WorkSpaces, Amazon WorkDocs, and Amazon WorkMail, as well as directory-aware Microsoft workloads, including custom .NET and SQL Server-based applications.
>
> **[1:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=70)** You can also configure a trust relationship between AWS Managed Microsoft AD and your on-premises Microsoft AD, allowing users and groups to access resources in either domain using single sign-on.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=83)** When you deploy AWS Managed Microsoft AD, it is created as a highly available pair of domain controllers in different Availability Zones.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=91)** It is a managed service, so AWS does the heavy lifting for you.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=95)** It takes care of high availability, monitoring, recovery, data replication, backups, and patching.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=102)** AWS manages the licensing of your Windows server instances, so you only pay for the instances you use.
>
> **[1:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=109)** Now let's switch to the AWS Management Console and learn how to configure directory service.
>
> **[1:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=115)** To follow along this demonstration, you will need an existing Active Directory.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=119)** If you don't have one already, you can deploy it on an EC2 instance.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=124)** You will use it to create a trust relationship with the AWS Managed AD.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=128)** From the Services dropdown menu, go to the Security, identity, & Compliance section, and then go to Directory Service.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=137)** Click Set up directory.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=142)** Select AWS Managed Microsoft AD and click next.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=147)** Because we are deploying in a lab environment, choose Standard edition.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=152)** Review the monthly and hourly pricing before proceeding.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=155)** Provide a fully qualified domain name for your directory.
>
> **[2:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=160)** Note the message that it will resolve inside your VPC only.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=164)** Then provide a password for the admin account.
>
> **[2:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=172)** In this step, you can specify the VPC and subnet where you'd like to deploy the domain controllers.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=179)** Click Next.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=181)** Review your selections and click Create directory.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=185)** Your directory can take up to 45 minutes to create.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=189)** In another region, I've already created a directory.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=192)** Let's look at it.
>
> **[3:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=194)** I'll cancel out of this wizard, and here you can see the directory.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=201)** Its status is Active.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=204)** Click on the Directory ID to see the information.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=208)** Under the Scale & share tab, you will see the IP addresses of your domain controllers.
>
> **[3:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=214)** Now let's see how to use the directory we've created.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=217)** For EC2 instances, you will have the option to domain join then at launch time.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=222)** I'll first switch to the EC2 service.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=227)** On the left navigation pane, click Instances, and then click Launch instance.
>
> **[3:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=234)** On Step 1, select a Windows-based AMI.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=239)** In the next step, select the desired instance type.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=243)** In this step, you have the option to domain join directory.
>
> **[4:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=253)** For this operation to succeed, you will need to attach an IAM role that includes these two permissions.
>
> **[4:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=259)** AmazonSSMManagedInstanceCore and AmazonSSMDirectoryServiceAccess.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=265)** When you launch this instance, AWS will configure it to be a part of the domain.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=269)** You can also join existing Windows instances to this domain.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=272)** Please refer to the AWS documentation to learn how you can do this.
>
> **[4:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=276)** Now let's go back to the managed directory.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=280)** Under the Networking & security tab, you will see the DNS addresses for this directory.
>
> **[4:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=286)** You will need this if you plan to create a trust relationship.
>
> **[4:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=290)** A trust relationship is a way to connect distinct Active Directory domains so users in one domain can authenticate against resources in the other.
>
> **[4:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=298)** For example, you can grant users in your on-premises Active Directory access to AWS resources.
>
> **[5:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=305)** Let's quickly see an example of this configuration.
>
> **[5:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=308)** Here I've got an existing trust relationship with an on-premises Active Directory domain called corp.[example.com](https://example.com).
>
> **[5:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=316)** AWS has detailed documentation that explains how to create a trust relationship.
>
> **[5:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=320)** First, let's enable single sign-on using AWS SSO.
>
> **[5:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=326)** By doing so, your users can use a single set of credentials to access multiple applications.
>
> **[5:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=332)** This includes the AWS Management Console and other business applications, such as Office 365, Salesforce, and others.
>
> **[5:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=341)** Navigate to the SSO service and click Enable AWS SSO.
>
> **[5:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=348)** SSO is now activated.
>
> **[5:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=351)** Under the Settings section, you will see that the identity source is set to AWS SSO.
>
> **[5:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=358)** Let's change this.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=360)** Click Actions and select Change identity source.
>
> **[6:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=366)** Set it to Active Directory and click Next.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=370)** Select your Active Directory domain.
>
> **[6:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=374)** In the next step, read and accept the changes.
>
> **[6:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=378)** Then click Change identity source.
>
> **[6:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=382)** Back to the SSO portal, now SSO will use the Managed Active Directory as the identity source.
>
> **[6:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=388)** Note the User portal URL.
>
> **[6:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=390)** Your users will use this for SSO.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=393)** Now let's grant an on-premises user access to an AWS account in this organization.
>
> **[6:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=398)** On the left navigation pane, click AWS accounts.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=403)** In this account, I've already set up AWS organizations, so the associated accounts are listed here.
>
> **[6:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=410)** Select the account to which you'd like to grant access.
>
> **[6:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=413)** Then click Assign users.
>
> **[6:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=417)** From the dropdown, select your on-premises directory and search for the desired user from the connected directory.
>
> **[7:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=429)** Select the user and click Next.
>
> **[7:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=434)** In this step, you need to assign a permission set to define the level of access the user will have.
>
> **[7:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=440)** If you don't have an existing permission set, you can create one from here.
>
> **[7:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=444)** Doing so will open the wizard in a new browser tab.
>
> **[7:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=448)** Select the option to Create a custom permission set.
>
> **[7:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=452)** In the next step, enter a name for the permission set.
>
> **[7:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=459)** Select the option to Attach AWS managed policies and attach the required policies.
>
> **[7:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=467)** Finish creating the permission set.
>
> **[7:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=474)** Now return to the previous browser tab, refresh, and select the permission set.
>
> **[8:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=482)** Then click finish.
>
> **[8:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=485)** Now let's test access.
>
> **[8:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=490)** Back to Settings, back to the Settings section, open the User portal URL in a private browser window.
>
> **[8:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=499)** Over here, in the private browser window, log in with the user's corporate credentials.
>
> **[8:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=508)** And you can see that the user is able to use his or her existing corporate credentials to access the AWS account to which you've granted access.
>
> **[8:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=517)** As you've seen, with AWS Directory Service, you can easily extend your existing on-premises Active Directory to AWS and use it to manage application access centrally.
>
> **[8:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-directory-service?u=76281980&t=528)** And being a managed service, it takes over the complexity that's typically involved in managing a directory infrastructure.

> [!info]- Semantic Content
>
> **Env Vars:** aws (32), sso (8), ec2 (4), vpc (2), url (2)
> **CLI Commands:** aws (32)
> **Code Keywords:** let (9), switch (2), this. (2), private (2), type. (1)
> **UI Navigation:** select the (6), switch to (2), dropdown (2), go to (2), open the (2)
> **Prerequisites:** set up (3), configure (3)
> **Cross-References:** in the next (3), go back to (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (2)


### 9. Controlling Costs

#### AWS Pricing Calculator
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=0)** - [Instructor] What will it cost to migrate, host or expand our solution in the cloud?
>
> **[0:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=4)** This is a common concern for organizations and administrators are often responsible for estimating and managing the costs of cloud-hosted solutions.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=13)** AWS provides a tool called pricing calculator that makes it easy to estimate the cost of a solution.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=19)** Using the pricing calculator, you can estimate what it will cost to migrate your solution to the AWS cloud or expand the scope of a cloud-hosted solution.
>
> **[0:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=28)** You don't need to log in to access this tool.
>
> **[0:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=31)** Let's estimate the cost of running a multi-tiered web application that has the following components.
>
> **[0:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=36)** It has a public facing web tier hosted on two on-demand EC2 instances, sitting behind an application load balancer.
>
> **[0:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=44)** The web tier is connected to the application tier consisting of two on-demand EC2 instances sitting behind an internal application load balancer.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=52)** The application tier is connected to two load balanced RDS SQL server databases.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=58)** For simplicity, we'll assume that the EC2 instances and RDS instances are of type T3 large and all services are hosted in the Ohio region.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=68)** Now let's switch to the pricing calculator.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=71)** Begin by creating an estimate.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=76)** Here you can search for the required services.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=79)** Search for EC2 and click configure.
>
> **[1:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=84)** Select the required region.
>
> **[1:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=87)** In our case, the operating system is Linux.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=91)** Search instances by name and set it to T3 large.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=99)** Set the quantity to four, two for the web servers and two for application servers.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=105)** Configure the expected usage to 50% utilization per month and set the pricing strategy as on demand.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=116)** In a production environment, you are likely to reserve capacity, but we'll use on demand for this example.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=122)** For storage, leave the type set to general purpose SSD and set the storage amount to 100 GB.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=130)** Click add to my estimate.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=135)** Let's add the next service.
>
> **[2:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=138)** Search and add elastic load balancing.
>
> **[2:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=142)** Use the pre-selected type, application load balancer.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=146)** We'll need three load balancers, one external and two internal.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=151)** Next, we need to add load balancer capacity units or LCUs.
>
> **[2:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=156)** This helps AWS understand how much load balancing capacity you're going to use.
>
> **[2:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=161)** Let's enter the average number of new connections per ALB as one per minute and the average connection duration as two minutes.
>
> **[2:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=171)** Before going forward, I'd like you to spend a moment just reading through these different options.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=177)** It'll give you a sense of how granular you can get to estimate your spending.
>
> **[3:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=180)** Let's add it to the estimate.
>
> **[3:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=185)** The next service we'll add is Amazon RDS for SQL server.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=193)** We'll need two nodes of type T3 large.
>
> **[3:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=199)** We expect this to be about 50% utilized per month.
>
> **[3:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=202)** The deployment option is single-AZ only because of the type we chose above.
>
> **[3:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=208)** Other instance types support a multi AZ deployment.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=212)** We'll leave the other options at the default, on demand pricing, license included, express edition and 100 GB general purpose storage.
>
> **[3:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=222)** Add this to the estimate.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=226)** So this works out to about $352 USD per month.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=230)** Of course we've simplified this example.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=233)** In a production solution, you are likely to use other services such as reserved instances for compute infrastructure, auto scaling to respond to spikes or dips in traffic, route 53 for DNS, cloud front for content delivery, cloud watch for monitoring, cloud trail for logging and SNS for notifications among others.
>
> **[4:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=254)** You may also use other services like Lambda and EventBridge for event driven architecture, S3 for object storage and long term archival and a technical support plan.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=264)** Also, a production solution is likely to be deployed across multiple regions.
>
> **[4:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=269)** You will need to add these to your report to get an accurate estimate.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=273)** Once your estimate is ready, you can export it in a CSV file.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=278)** You can also share it with other users using a public link.
>
> **[4:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-pricing-calculator?u=76281980&t=283)** As you've seen, the pricing calculator provides a good starting point to identify how much your business migration or expansion will cost in the AWS cloud.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), ec2 (4), rds (3), sql (2), ssd (1)
> **Code Keywords:** let (5), public (2), switch (1), case, (1), type, (1)
> **CLI Commands:** aws (4), az (2)
> **UI Navigation:** switch to (1), select the (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Cost allocation tags
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=0)** - [Instructor] Administrators can find it challenging to track usage and costs across different organization segments, such as departments, cost centers, and projects.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=9)** Cost allocation tags provide a solution to this problem.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=13)** First, let's understand what is a tag.
>
> **[0:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=16)** A tag is a label that you assign to your resources.
>
> **[0:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=19)** Essentially, it's a key value pair.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=22)** As an example, here are some tags applied to an EC2 instance.
>
> **[0:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=27)** Name equals Windows Server WS1, department equals Engineering, project equals App 1, and cost center equals 10012.
>
> **[0:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=38)** When configured correctly, tags can be used to organize efficiently, search for, and filter your resources.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=45)** You can also use tags to track your costs on a detail level, such tags are known as cost allocation tags.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=52)** AWS will use the configured cost allocation tags, to organize and categorize your resource costs on your cost allocation report.
>
> **[1:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=60)** Here is an example of a cost allocation report.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=63)** This to report has several columns, but I've hidden many of them so we can focus on the ones important for our discussion.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=71)** Here we've got columns that represent usage start and end date, product code, usage type, operation, usage amount, cost, region, and then we've got the cost allocate tags.
>
> **[1:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=91)** AWS created by, cost center, department, and name.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=98)** As you can see, the report shows the total cost across different tags, making it easy to track your AWS costs.
>
> **[1:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=105)** If you have untagged resources, AWS will also include them in the report.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=110)** Since this is a CSV report, you can apply filters to make the data more actionable for you.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=116)** For cost allocation tags to work effectively, there's a couple of items to bear in mind.
>
> **[2:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=121)** First, you should configure your resources with the required tags, and second, you should designate tags that you intend to use for cost allocation purposes, as cost allocation tags in the billing and cost management console, AWS will include them in your billing data.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=137)** When you begin exploring the usage of cost allocation tags, a natural question is, how you should plan the tags?
>
> **[2:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=144)** What criteria you should use to build tags?
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=147)** AWS recommends looking at your current IT financial reporting practices for guidance around building your tags.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=154)** Doing so will provide insights into the various dimensions you can include in your tags such as cost center, department, location, application owner, business unit, and more.
>
> **[2:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=166)** By aligning your cost allocation tags with your financial reporting dimensions you'll be able to streamline your cost reporting and cost management.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=174)** AWS also recommends having a consistent tagging approach, and tagging all resources that support their use.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=181)** If a significant portion of your resources is untagged, your cost reporting could be inaccurate.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=187)** Most resource type support tagging.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=189)** By tagging them, you can bring them under your cost reporting.
>
> **[3:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=193)** Cost allocation tags can be of one of two types.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=197)** AWS-generated or User-generated.
>
> **[3:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=200)** One of the AWS-generated tags is the CreatedBy tag.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=205)** AWS defines and applies this tag to supported resources for cost allocation purposes.
>
> **[3:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=211)** Once enabled, AWS will apply the tag to supported resources you create after activating the AWS-generated tag.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=219)** The format of the CreatedBy tag looks like this, key = aws:CreatedBy, and value = account-type followed by account ID, or access-key followed by user-name or role session name.
>
> **[3:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=232)** Valid values for account type include Root, IAMUser, AssumedRole, and FederatedUser.
>
> **[3:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=239)** Account ID is the account number of the root account, or the federated user who created the resource.
>
> **[4:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=245)** Access key tracks the IAM access key used to performing action.
>
> **[4:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=249)** Here is an example of an AWS generated tag.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=252)** The tag Key is aws: createdBy, the tag Value includes Root, which is the account type followed by the account ID.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=260)** Important services to which AWS apply is the CreatedBy tag include AWS CloudFormation, Amazon EC2, AWS Elastic Beanstalk, Elastic Load Balancing, Amazon S3, Amazon Relational Database Service or RDS, Amazon Route53, and more.
>
> **[4:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=280)** For a complete list of supported resource types and events, please refer to the AWS documentation.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=287)** To activate AWS-generated tags, log into your AWS Management Console using a management account.
>
> **[4:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=293)** Click your display name on the upper right corner and click billing dashboard, on the left navigation pane click cost allocation tags, under the AWS-generated cost allocation tag section select the AWS created by tag, and click activate.
>
> **[5:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=312)** Click activate again.
>
> **[5:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=314)** It can take up to 24 hours for tags to activate.
>
> **[5:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=318)** Note that all other AWS-generated tags are prefixed with AWS.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=323)** Bear in mind that the CreatedBy tag is only available in the billing and cost management console, and will not appear anywhere else in the AWS console, including the tag editor.
>
> **[5:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=333)** Finally, there are a few essential things to know before you start using AWS-generated tags.
>
> **[5:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=339)** Only a management account can activate AWS-generated tags, doing so will activate it for all member accounts in the AWS organization.
>
> **[5:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=348)** You cannot out update, edit, or delete AWS generated tags.
>
> **[5:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=352)** AWS will tag only those resources that should create after activating the AWS-generated tag.
>
> **[5:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=359)** And AWS generated tags use the reserved prefix aws:.
>
> **[6:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=363)** In addition to the AWS-generated tags, you can also configure user defined tags for cost allocation purposes.
>
> **[6:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=370)** Back to the AWS Management Console.
>
> **[6:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=373)** Click User-defined cost allocation tags, to see the tags that have already applied to your resources.
>
> **[6:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=380)** Select the tags you'd like to use for cost allocation purposes and click activate, click activate again.
>
> **[6:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=390)** Just like AWS-generated tags, User-defined tags also have some restrictions.
>
> **[6:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=396)** AWS prefixes user-defined tags with user:, you should use a tag key only once for each resource.
>
> **[6:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=403)** If you use the same key twice, the service will reject your request, and application of tags cannot be backdated.
>
> **[6:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=410)** So tags only start appearing on your reports after you apply them and don't appear on earlier reports.
>
> **[6:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=417)** Now let's switch back to the AWS console to see how you can include cost allocation tags in a report.
>
> **[7:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=423)** To see tags in a report you will need to create the cost and usage report.
>
> **[7:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=428)** Click create report, then enter a name for the report, click next.
>
> **[7:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=437)** Configure an S3 bucket where you'd like the report to be delivered.
>
> **[7:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=443)** You can use an existing bucket or create a new bucket.
>
> **[7:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=448)** In the next step, review and accept the policy that will be applied to your bucket.
>
> **[7:36](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=456)** Enter a prefix or folder under which you'd like the reports to be stored.
>
> **[7:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=460)** Then select a time granularity, hourly, daily, or monthly, and select a desired compression type.
>
> **[7:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=471)** In the next step, review your selections and complete the setup.
>
> **[7:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=478)** Now AWS will deliver cost and usage reports with the configured tags at the configured interval.
>
> **[8:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/cost-allocation-tags?u=76281980&t=484)** As you've seen, by configuring cost allocation tags you can add the required business context and make it easy to track costs, and align them with resource usage.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (40), make (2), find (1)
> **Env Vars:** aws (37), ec2 (2), ws1 (1), csv (1), iam (1)
> **Code Keywords:** let (2), for, (1), type, (1), this, (1), finally, (1)
> **Definitions:** is a  (3), is an  (2)
> **Prerequisites:** configure (3), setup (1)
> **Analogies:** such as (2), just like (1)
> **Cross-References:** in the next (2)
> **Tools:** aws console (2)

#### AWS Budgets
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=0)** - An essential requirement for organizations using cloud services, such as AWS, is planning and analyzing their cloud costs.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=7)** AWS provides several tools to calculate, forecast, and analyze your spending.
>
> **[0:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=13)** One of them is AWS Budgets.
>
> **[0:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=15)** AWS Budgets allows you to track your cost and usage, and take action using the available data.
>
> **[0:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=21)** With AWS Budgets, you can set a cost budget with a fixed or variable target amount and be alerted for actual and forecasted spending.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=30)** Examples of budgets that you can create include cost budgets.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=34)** Use this to plan how much you want to spend on a service.
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=37)** Usage budgets.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=39)** Use this to plan how much you want to use one or more services.
>
> **[0:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=43)** Reserved instances utilization budgets.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=45)** Use this to define a utilization threshold and receive alerts when your reserved instances usage falls below that threshold.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=52)** This is useful in identifying unused, or underutilized, reserved instances.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=57)** Reserved instances coverage budgets.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=59)** Use this to define a coverage threshold and receive alerts when the number of instance hours covered by reserved instances falls below that threshold.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=68)** This is useful in identifying how much of your instance usage is covered by you reservation.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=73)** Savings plan utilization budgets.
>
> **[1:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=75)** Use this to define a utilization threshold and receive alerts when the usage of your savings plans falls below that threshold.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=83)** This is useful in identifying savings plans that are unused, or underutilized.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=88)** Similar to reserved instances, savings plan is a pricing model that offers lower prices on Amazon EC2 instance usage, regardless of instance family, size, operating system, tenancy, or AWS region.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=102)** Of course, this is an exchange for a commitment that you will use a specific amount of compute power for a one, or three year period.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=110)** Back to our discussion.
>
> **[1:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=111)** So, you can use AWS Budgets to define a savings plan utilization budget.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=117)** Savings plan coverage budgets.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=119)** Use this to define a coverage threshold and receive alerts when your savings plan usage falls below that threshold.
>
> **[2:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=126)** This is useful in identifying how much of your instance usage is covered by savings plan.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=132)** Now, let's see how to configure AWS Budgets.
>
> **[2:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=136)** Log in to the AWS Management Console, click your display name in the upper right corner, and then click billing dashboard.
>
> **[2:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=145)** On the left navigation pane, click budgets.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=150)** Now you're in AWS Budgets.
>
> **[2:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=152)** Currently, there are no budgets configured.
>
> **[2:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=155)** To configure one, click create a budget.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=159)** Here are the four types of budgets that we spoke about.
>
> **[2:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=162)** You can use both reservation and savings plan budgets to track utilization and coverage.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=168)** For this example, select cost budget and click the next.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=173)** Select the budget period, which can be daily, monthly, quarterly, or annually.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=179)** For this exercise, set it to monthly.
>
> **[3:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=183)** Select a budget type, recurring or expiring.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=187)** Recurring budgets renew on the first day of every monthly billing period.
>
> **[3:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=191)** While expiring budget stop renewing on the last day of the configured expiration month.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=197)** Use the fixed option to provide a fixed amount, or the monthly budget planning option to configure varying amounts for different months.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=205)** If you anticipate your spending to increase in the upcoming months, use the auto fill budgeted amounts option to automatically input the amounts based on a configured increase per month.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=217)** Provide a starting budget and the expected budget growth percentage per month.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=223)** Then, click okay.
>
> **[3:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=226)** The tool auto fills the monthly budget based on your configuration.
>
> **[3:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=230)** For this exercise, set it to fixed and enter your budgeted amount.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=237)** The solid line here corresponds to your budgeted amount.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=241)** Optionally, you can configure additional budget parameters to filter the cost information.
>
> **[4:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=247)** You can do this by setting filters, such as service, linked account, region, instance type, and more.
>
> **[4:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=256)** You may also filter aggregate costs by unblended, blended, and amortized costs.
>
> **[4:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=262)** To understand the differences between these cost types, please refer to the AWS documentation.
>
> **[4:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=268)** Enter a budget name and click next.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=272)** In this step, you can define a threshold, which when reached, will trigger a notification.
>
> **[4:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=278)** Click add an alert threshold.
>
> **[4:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=282)** You can base the threshold percentage on your budgeted amount or your absolute spending value.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=287)** You can configure the alert to trigger based on actual or forecasted cost.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=292)** Set this to 80% of the budgeted amount.
>
> **[4:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=295)** Next, configure the email addresses on which you'd like to receive the notification.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=301)** Note, that you may also configure notifications to Amazon SNS and AWS ChatBot.
>
> **[5:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=307)** You can also add additional alert thresholds.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=311)** In the next step, you can configure additional budget actions.
>
> **[5:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=315)** Like attaching an IAM policy to IAM entities, like users or groups, to limit their permissions.
>
> **[5:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=321)** Or attach a service control policy to limit permissions at the account level.
>
> **[5:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=326)** You can also stop EC2 or RDS instances.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=330)** Before you can configure an action, you will need to attach an IAM role that grants the required permissions.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=337)** Once attached, you will see the available actions.
>
> **[5:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=342)** For now, we'll skip this.
>
> **[5:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=348)** Review your selections and click create budget.
>
> **[5:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=354)** So, as you've seen, you can use AWS Budgets to track cost, usage, coverage, and utilization.
>
> **[6:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-budgets?u=76281980&t=361)** And you can also set custom budgets that will alert you your usage breaches configured thresholds.

> [!info]- Semantic Content
>
> **Env Vars:** aws (13), iam (3), ec2 (2), sns (1), rds (1)
> **CLI Commands:** aws (13)
> **Prerequisites:** configure (9)
> **Code Keywords:** type, (2), let (1), this. (1)
> **Analogies:** such as (2), similar to (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)

#### AWS Cost Explorer
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=0)** - [Instructor] AWS Cost Explorer is a tool that allows you to analyze your AWS usage and costs using graphs and usage reports.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=8)** It allows you to view data for the past 12 months, forecast your estimated cost for the next 12 months and provides recommendations for adding reserved instances.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=17)** Cost Explorer is free when used from the user interface, and there's a small fee for accessing the data programmatically.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=24)** Bear in mind once enabled, Cost Explorer cannot be disabled.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=29)** To start using Cost Explorer, log into your AWS Management Console.
>
> **[0:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=34)** Click the display name on the upper-right corner and then click Billing Dashboard.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=40)** On the left navigation pane click Cost Explorer.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=45)** When you access this for the first time you will see a page titled, welcome to Cost Explorer with an option to launch Cost Explorer.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=52)** After enabling, the current months data is available in about 24 hours.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=57)** The rest of your data takes a few days longer.
>
> **[0:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=59)** And Cost Explorer updates your data at least once every 24 hours.
>
> **[1:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=63)** If you've already enabled a service, you will see this view.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=68)** Click launch Cost Explorer, doing so opens a new browser tab with the default graph.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=73)** At the top you can see the current month costs and the forecasted month end costs.
>
> **[1:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=79)** Trends can be helpful for planning purposes.
>
> **[1:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=82)** The trend here says that AWS CloudTrail costs have gone up and account and region usage costs have gone up too.
>
> **[1:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=90)** And I could have saved by purchasing reserved instances.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=93)** The graph in the center shows the daily unblended costs.
>
> **[1:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=98)** There are certain days where my usage has been higher than average.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=102)** To apply filters and narrow down to specific data sets, click explore costs.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=108)** Doing so shows the date range and granularity which is set to daily.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=114)** Note the filters on the right side.
>
> **[1:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=116)** By default AWS includes all data.
>
> **[2:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=120)** Now let's try something interesting.
>
> **[2:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=122)** I'll change the granularity to monthly and then choose to group by service.
>
> **[2:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=127)** As you can see, in my case most of the charges are incurred from the EC2 service.
>
> **[2:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=133)** Let's narrow this down further to see usage hours.
>
> **[2:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=137)** Click the usage type group filter, scroll down and include the EC2 running hours filter.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=147)** Then click apply filters.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=151)** Now you can see the usage hours by month.
>
> **[2:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=154)** This view can be useful in comparing your usage hours month on month.
>
> **[2:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=159)** And as you can see, there are several filters you can configure to get insights into your usage patterns.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=168)** Click the X symbol to remove the group by setting.
>
> **[2:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=174)** To forecast your costs use the data range dropdown and set the end date to a date in the future.
>
> **[3:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=181)** For this example, use the auto select option to set it to plus three months and click apply.
>
> **[3:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=189)** Now you have a graph that shows cost for the last month, forecast for the current month, plus next three months.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=198)** The upper end of the stack represents the estimated cost and you will find exact values in the table below.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=204)** When you found the right combination of filters, you can save the report by clicking Save as at the top, enter a name for the report and click save report.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=217)** To view your saved reports and those preconfigured by AWS, click reports on the left navigation pane, then click the name of a report.
>
> **[3:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=229)** This report shows monthly costs by service.
>
> **[3:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=233)** In my case, EC2 to use it makes up most of the costs.
>
> **[3:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=236)** You also have an option to download this information in CSV format.
>
> **[4:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=241)** On the left navigation pane, under the reservation section, click recommendations.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=246)** AWS recommends that if I opt for reserved instances for a one-year term, with the all upfront payment option I can save 41% of my spending.
>
> **[4:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=258)** As you can imagine, this can be useful for forecasting, estimating and planning infrastructure costs.
>
> **[4:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=264)** So you've seen how to use Cost Explorer to analyze your usage based on different criteria and how to use the forecasting tool to plan ahead.
>
> **[4:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-cost-explorer?u=76281980&t=272)** To fully appreciate the tool and understand how you can use it to analyze and forecast your costs, I recommend playing around with the different options.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), ec2 (3), csv (1)
> **CLI Commands:** aws (7), find (1)
> **Code Keywords:** let (2), interface (1), case, (1)
> **UI Navigation:** scroll down (1), dropdown (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 10. Migration

#### Overview of migration services
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=0)** - [Instructor] More organizations today are considering moving their workloads to the cloud for benefits such as cost savings, efficient IT infrastructure management, reduced unplanned downtime, improved productivity, business agility, and a modern operating model.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=17)** Almost all workloads used in an on-premises environment can be moved to AWS.
>
> **[0:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=22)** This includes physical or virtual servers, storage, websites, databases, and applications.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=29)** When you decide to migrate to the cloud, common questions that could come up include, what should be the strategy to move workloads?
>
> **[0:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=37)** What resources will be required to support migration?
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=40)** Will migration cause downtime?
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=42)** And what will be the cost and timeline for migration?
>
> **[0:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=46)** AWS provides documents that help answer these questions including best practices for migration.
>
> **[0:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=52)** AWS recommends that you adopt a three-phase approach for migration.
>
> **[0:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=57)** Assess, mobilize, and migrate and modernize.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=61)** The assess phase is about determining your organization's current readiness for cloud migration.
>
> **[1:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=67)** It also describes developing a business case and identifying desired outcomes for migration.
>
> **[1:13](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=73)** AWS has a tool called Migration Evaluator that discovers on-premises instances that are overprovisioned and recommends alternate AWS instances that meet or exceed those requirements at a lower cost.
>
> **[1:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=85)** The mobilized phase is about creating a migration plan.
>
> **[1:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=89)** You address any gaps in your organization's readiness that were discovered in the assess phase.
>
> **[1:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=95)** You begin this phase by understanding the interdependencies between applications, and evaluate migration strategies to meet your business case objectives.
>
> **[1:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=103)** AWS has a tool called AWS Application Discovery Service that automatically collects information about application dependencies and utilization to help plan migration.
>
> **[1:54](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=114)** You can also use a service called AWS Migration Hub that helps to plan and track application migrations across AWS and partner tools.
>
> **[2:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=124)** The migrate and modernized phase is about designing, migrating, and validating applications.
>
> **[2:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=130)** A service called AWS Application Migration Service allows you to quickly lift and shift a large number of servers from physical, virtual or cloud infrastructure to AWS.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=141)** It automatically converts your source servers to run natively on AWS.
>
> **[2:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=146)** If you're migrating your databases, AWS Database Migration Service can be useful.
>
> **[2:31](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=151)** It keeps the source database fully operational during the migration minimizing downtime.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=157)** As for your existing software portfolio, you can use the AWS Marketplace to deploy and manage third party software solutions.
>
> **[2:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=164)** Lastly, you will have data that needs to be moved.
>
> **[2:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=167)** You can use AWS DataSync or AWS Transfer Family to move data between on-premises storage solutions and Amazon S3 and Amazon Elastic File System.
>
> **[2:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=177)** For large volumes of data transfer, you can use AWS Snow Family.
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=182)** It provides portable devices to physically transport data into and out of AWS.
>
> **[3:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=187)** And AWS also provides managed services to assist your existing operations team with the knowledge and resources needed to successfully migrate your workloads.
>
> **[3:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=197)** That is a high level overview of the tools and strategies that you can use to migrate your workloads to the AWS Cloud.
>
> **[3:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=204)** AWS has a document titled, Migrate with AWS, that contains detailed information to assist with your migration requirements.
>
> **[3:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/overview-of-migration-services?u=76281980&t=212)** I highly recommend reviewing the document to understand how you can move your business solutions to the AWS Cloud.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (23)
> **Env Vars:** aws (23)
> **Code Keywords:** include, (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### AWS Application Migration Service
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=0)** - [Tutor] Once you've decided to migrate to the AWS cloud, one of the major components you'll need to move is servers.
>
> **[0:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=6)** To help smoothly migrate your servers, AWS has a service called AWS Application Migration Service.
>
> **[0:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=12)** AWS Application Migration Service, also known as AWS MGN, allows you to lift and shift physical, virtual or cloud servers, without compatibility issues and performance disruption.
>
> **[0:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=25)** It replicates source servers into your AWS account, using a replication agent.
>
> **[0:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=30)** Source servers simply means the servers you want to migrate to AWS.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=35)** When you're ready to complete migration, it converts and launches your servers on AWS.
>
> **[0:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=41)** Before we look at the configuration, let's understand the service architecture.
>
> **[0:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=45)** On the left side is the corporate network that has a server with two attached discs.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=51)** On the right side is the AWS region where the server will be migrated.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=56)** Before setting up AWS MGN, you will need to create a subnet that the service will use as a staging area for data replicated from the source servers to AWS.
>
> **[1:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=66)** You will also need to define a subnet for your test and cutover instances.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=71)** Test instances are used to validate that migration has occurred as intended.
>
> **[1:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=76)** Cutover instances are your fully migrated servers.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=80)** You'll need to install a replication agent on your source servers to begin replication.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=86)** Upon installation, the agent registers itself with the MGN service causing the provision of the staging area resources.
>
> **[1:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=93)** This includes replication servers, staging volumes and EBS snapshots.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=99)** Replication servers are Amazon EC2 instances used to replicate data from your source servers and these are automatically launched and terminated as needed.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=108)** After the required resources are provisioned, the replication begins.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=113)** The data is encrypted before it is moved to the staging subnet.
>
> **[1:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=117)** Now let's switch to the AWS Management Console and look at the configuration.
>
> **[2:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=123)** Use the services dropdown menu and navigate to the Migration and Transfer section.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=128)** And then go to Application Migration Service.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=132)** Click get started.
>
> **[2:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=135)** First you'll need to create a replication settings template to initialize the service.
>
> **[2:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=141)** Begin by specifying the subnet you intend to use as the staging area subnet.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=147)** Then specify the replication server instance type.
>
> **[2:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=150)** The default is t three small.
>
> **[2:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=153)** Remember it is a server that AWS uses to replicate your data.
>
> **[2:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=157)** Other options include EBS volume type, encryption and security groups.
>
> **[2:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=163)** Leave these at the default and click create template.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=168)** Now it's time to add the source servers by installing the replication agent on them but before you do so, you will need to create an IAM user to which you will associate the installation.
>
> **[2:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=179)** Navigate to the IAM service.
>
> **[3:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=182)** On the left navigation pane, click users and then click add user.
>
> **[3:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=190)** Enter a username, select the access type as programmatic access.
>
> **[3:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=195)** This will generate the required keys to associate with the replication agent.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=201)** On the next step, use the option to attach existing policies, search and attach the policy named AWS Application Migration Agent Policy.
>
> **[3:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=215)** Complete the remaining steps to create the user account.
>
> **[3:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=219)** Once created, note the access key ID and secret access key.
>
> **[3:43](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=223)** Be aware that this is the last time you'll be able to view this information.
>
> **[3:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=228)** Now let's see how to download and install the replication agent.
>
> **[3:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=231)** The replication agent can be installed on Windows and Linux instances.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=237)** I'm here on a windows host and I've already downloaded and installed the replication agent.
>
> **[4:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=243)** You will find download instructions in the AWS documentation.
>
> **[4:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=246)** Once you've downloaded the installer, follow these steps.
>
> **[4:10](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=250)** First, use the Start menu and open PowerShell as an administrator Then use the CD command to navigate to the downloads folder.
>
> **[4:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=261)** Then execute the replication agent exe file and include three parameters Region, access key ID, and secret access key.
>
> **[4:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=274)** Then you'll be asked to identify the disks you'd like to replicate.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=279)** Press enter to replicate all or specify paths of individual disks.
>
> **[4:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=284)** For example, here I've specified C drive.
>
> **[4:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=287)** This will cause the replication agent to be downloaded and installed.
>
> **[4:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=292)** When the installation begins, you will see this source server populate in the MGN console.
>
> **[4:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=297)** Now let's return to the AWS account.
>
> **[5:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=301)** First, I'll switch to the MGN service and then to another region where I've got a source server configured.
>
> **[5:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=311)** Here you can see the source server, it's data replication status is healthy.
>
> **[5:16](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=316)** This means all data has been copied from the source server and any changes are being continuously replicated.
>
> **[5:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=323)** By clicking on the source server, you can see its lifecycle stage.
>
> **[5:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=330)** It'll be in the not ready status until the replication is complete.
>
> **[5:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=334)** Then it moves to the various stages of testing and cutover.
>
> **[5:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=337)** Under launch settings, you can configure the settings you'd like to use for launching the test and cutover instances.
>
> **[5:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=344)** MGN uses an EC2 to launch template to specify the instant settings.
>
> **[5:49](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=349)** A launch template is simply a collection of settings used to launch an EC2 instance.
>
> **[5:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=353)** Note that by default MGN will launch test and cutover instances of type C4XLarge.
>
> **[6:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=360)** This is too big for testing purposes.
>
> **[6:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=362)** So let's modify the configuration and change it to a smaller instance size.
>
> **[6:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=369)** This is an important message, when you modify the launch template, it creates a new version, but the new version does not become the default version automatically.
>
> **[6:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=379)** You will need to mark the new version as the default.
>
> **[6:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=383)** Click modify.
>
> **[6:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=386)** Now you're in the launch template, change the instance type setting to a smaller one like T2 medium.
>
> **[6:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=393)** Also, if your surf server allows specific inbound traffic, this is a good time to add the required security groups to allow the same traffic to your test and cutover instances.
>
> **[6:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=404)** When you're ready, click create template version.
>
> **[6:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=408)** Doing so will create a new template version.
>
> **[6:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=411)** Now let's set the latest version as the default version, select the template, click the action button and then click set default version.
>
> **[7:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=424)** Select the latest version and set it as the default.
>
> **[7:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=431)** Now the default version is the same as the latest version.
>
> **[7:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=435)** Now let's go back to the MGN console.
>
> **[7:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=440)** Here there's one final setting to change, under launch settings notice that the instance type being set to T2 medium.
>
> **[7:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=447)** Change the instance type right sizing setting.
>
> **[7:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=450)** With the default setting, MGN will launch a test or cutover instance that best matches the source server's hardware configuration, which overrides the configuration in the launch template.
>
> **[7:41](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=461)** It is the ideal setting for production environments but will control the instance type in this exercise.
>
> **[7:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=468)** Edit the configuration and set it to none.
>
> **[7:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=473)** Then save the settings.
>
> **[7:55](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=475)** Now let's see how to launch a test instance to ensure everything is working as expected.
>
> **[8:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=481)** Click test and cutover and select launch test instances.
>
> **[8:06](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=486)** I've already launched a test instance, so let's go to the EC2 service to see the changes.
>
> **[8:15](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=495)** When you launch a test instance, you will notice that a conversion server has been launched in the EC2 console.
>
> **[8:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=501)** The conversion server converts the disks to boot and run on AWS.
>
> **[8:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=506)** When the conversion server completes its task, it will terminate.
>
> **[8:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=510)** And then a test instance will be launched.
>
> **[8:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=514)** The test instance is stopped after the first launch and then automatically restarted.
>
> **[8:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=519)** The whole process of launching a conversion server followed by the test instance, could take a few minutes.
>
> **[8:45](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=525)** Now let's go back to the MGN console for the remaining steps.
>
> **[8:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=530)** When you've completed testing, you will need to mark the instance as ready for cutover.
>
> **[8:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=538)** At this stage, you are ready to launch the cutover instance.
>
> **[9:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=542)** Like before, this action will launch a conversion server followed by the actual cutover instance.
>
> **[9:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=549)** After launching the cutover instance, validate connectivity, perform acceptance test for your application and ensure that the instance functions correctly.
>
> **[9:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=558)** When you've completed testing, you can finalize the cutover.
>
> **[9:22](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=562)** Doing so will stop data replication and all AWS services used for data replication will be discarded and the migration life cycle will be marked as cut over complete.
>
> **[9:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=572)** You can archive the source server to remove this from the main console.
>
> **[9:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=577)** So as you've seen, AWS application migration service, streamlines and automates what would otherwise be complex task of migrating a server to AWS.
>
> **[9:46](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=586)** Migration is a business critical task and all aspects should be carefully considered before attempting it.
>
> **[9:52](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-application-migration-service?u=76281980&t=592)** I recommend reviewing the documentation as it contains important tips and best practices to ensure a smooth migration of your servers.

> [!info]- Semantic Content
>
> **Env Vars:** aws (20), mgn (10), ec2 (5), ebs (2), iam (2)
> **CLI Commands:** aws (20), find (1), cd (1)
> **Code Keywords:** let (10), switch (2), default. (2), type. (1), type, (1)
> **UI Navigation:** navigate to (3), select the (3), switch to (2), go to (2), dropdown (1)
> **Exercise Files:** template (10)
> **Prerequisites:** you'll need (3), install (2), configure (1)
> **Definitions:** is a  (3), known as (1), is an  (1)
> **Cross-References:** go back to (2)

#### AWS Snow Family
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=0)** - [Instructor] In addition to migrating servers and applications, your data is the other major component that you will need to migrate to the cloud.
>
> **[0:07](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=7)** Situations like cloud migration, disaster recovery, and data center relocation can involve large amounts of data.
>
> **[0:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=14)** Moving large amounts of data over the network can be time consuming and expensive.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=18)** And these problems are amplified if the location has no connectivity at all.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=23)** AWS Snow Family is a collection of physical devices that help migrate large amounts of data into and out of the cloud without depending on networks.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=32)** The Snow Family has three types of devices, AWS Snowcone, AWS Snowball, and AWS Snowmobile.
>
> **[0:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=40)** AWS Snowcone is the smallest of the three, and you can use it to transfer up to 8 TB or 14 TB of data to the AWS cloud by shipping the device back to AWS.
>
> **[0:51](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=51)** In addition to migrating data, you can also use Snowcone to run edge computing workloads that use Amazon EC2 instances.
>
> **[0:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=58)** You can also use it to store data securely.
>
> **[1:01](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=61)** This capability can be useful in austere or non-data center edge environments or where there's a lack of consistent network connectivity.
>
> **[1:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=69)** AWS Snowball is bigger than Snowcone and suitable for data migration and edge computing.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=74)** Snowball Edge, as it is referred to in the documentation, is available in three configuration options, storage optimized, compute optimized, and compute optimized with GPU.
>
> **[1:26](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=86)** The storage optimized variant is suitable for data transfer and has 80 TB usable storage capacity.
>
> **[1:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=92)** The compute optimized variants can be useful for compute intense workloads like machine learning and video analysis in disconnected environments.
>
> **[1:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=100)** AWS Snowmobile is a shipping container moved with a tractor trailer.
>
> **[1:44](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=104)** It moves up to 100 petabytes of data and is ideal for petabyte or exabyte scale migrations.
>
> **[1:50](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=110)** After you load your data onto the Snowmobile, it is driven back to an AWS region, where the data is loaded into Amazon S3.
>
> **[1:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=118)** AWS has a feature comparison table that contains the technical differences between the various Snow products.
>
> **[2:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=125)** So that is a high-level overview of the various Snow Family products.
>
> **[2:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-snow-family?u=76281980&t=129)** It is an excellent alternative to moving large amounts of data on the wire.

> [!info]- Semantic Content
>
> **Env Vars:** aws (11), ec2 (1), gpu (1)
> **CLI Commands:** aws (11)
> **Definitions:** is a  (3), is an  (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### AWS Migration Hub
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=0)** - [Instructor] Once you start migrating your servers and applications to the AWS cloud, you will need a mechanism to track these migrations.
>
> **[0:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=8)** AWS Migration Hub provides a central location to track the status of the various components your migrating such as servers, applications, and databases.
>
> **[0:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=18)** It makes it easy to view the overall migration progress and reduces the time spent determining the next steps.
>
> **[0:24](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=24)** It provides tools to discover your existing servers, plan migrations and track the status of each application migration.
>
> **[0:32](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=32)** Migration Hub is available at no additional charge.
>
> **[0:35](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=35)** You pay only for the cost of the migration tools you use.
>
> **[0:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=39)** Migration Hub is simple to configure and use.
>
> **[0:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=42)** Let's dive into the AWS management console and look at the configuration.
>
> **[0:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=47)** Use the services dropdown menu and navigate to the migration and transfer section, and then go to AWS Migration Hub.
>
> **[0:56](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=56)** When you visit the service console for the first time, you'll be required to specify your migration home region.
>
> **[1:02](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=62)** You can also do this from the settings section.
>
> **[1:05](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=65)** I've already done it on my account.
>
> **[1:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=68)** Let's begin with the help and support section.
>
> **[1:11](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=71)** Here, you will see two workflows.
>
> **[1:14](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=74)** Workflow one involves three steps, discover, migrate and track.
>
> **[1:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=80)** Workflow two has two steps, migrate and track.
>
> **[1:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=83)** Scrolling down, you will see a dashboard with sample data of a migration project.
>
> **[1:28](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=88)** Under the dashboard section, you will see that I have one server and one application being migrated.
>
> **[1:34](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=94)** The server is being migrated using the AWS application migration service.
>
> **[1:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=99)** We spoke about this in an earlier movie.
>
> **[1:42](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=102)** When you begin the migration with application migration service, Migration Hub will automatically detect this.
>
> **[1:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=108)** The server section will list the servers being migrated.
>
> **[1:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=113)** The source is application migration service and here is the migration status.
>
> **[1:59](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=119)** You can group servers as an application to track them collectively.
>
> **[2:08](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=128)** The applications tab will list the applications you're migrating.
>
> **[2:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=132)** Here, I've got an application called WordPress whose migration status is in progress.
>
> **[2:19](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=139)** I'll add another application that's part of the ongoing server migration.
>
> **[2:27](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=147)** Then I'll associate it with the server.
>
> **[2:38](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=158)** Then I'll mark the application migration as in progress.
>
> **[2:48](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=168)** When the application has been fully migrated and tested, I'll mark it as completed.
>
> **[2:53](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=173)** Discovery tools are listed under the tools section.
>
> **[2:58](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=178)** You can use an import template to upload data about your servers and applications, deploy a discovery connector in VMware vCenter, or use the discovery agent, which we did in an earlier movie with application migration service.
>
> **[3:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=192)** You can use EC2 instance recommendations to get recommendations for your servers.
>
> **[3:18](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=198)** This is based on your server's current configuration.
>
> **[3:21](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=201)** Here you can specify how you'd like to compute CPU or RAM sizing.
>
> **[3:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=205)** I'll select average utilization.
>
> **[3:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=209)** Next, select the region, tenancy, which can be shared or dedicated, and pricing model.
>
> **[3:37](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=217)** Then click export recommendations.
>
> **[3:40](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=220)** Doing so will cause a CSV file with recommendations to be downloaded on your local machine.
>
> **[3:47](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=227)** Strategy recommendations analyze your server inventory and runtime environment and combine this with your business goals to recommend a migration strategy.
>
> **[3:57](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=237)** It also recommends tools that you can use and any application incompatibilities that you'll need to resolve.
>
> **[4:04](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=244)** To get these recommendations, you must download a data collector or import template.
>
> **[4:12](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=252)** Your migration updates can be seen here and recommended migration tools are listed here.
>
> **[4:20](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=260)** Bear in mind that AWS server migration service is due to be discontinued.
>
> **[4:25](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=265)** So AWS recommends using the application migration service for migrating servers.
>
> **[4:30](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=270)** So that's about the AWS Migration Hub.
>
> **[4:33](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=273)** This can be a valuable tool for administrators who need to migrate multiple production servers and applications.
>
> **[4:39](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/aws-migration-hub?u=76281980&t=279)** Having a centralized console is convenient and reduces the time and complexity involved in tracking multiple migrations.

> [!info]- Semantic Content
>
> **Env Vars:** aws (8), ec2 (1), cpu (1), ram (1), csv (1)
> **CLI Commands:** aws (8)
> **UI Navigation:** dropdown (1), navigate to (1), go to (1), select the (1)
> **Code Keywords:** let (2), this. (1)
> **Prerequisites:** configure (1), required to (1), you'll need (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** vcenter (1)
> **Analogies:** such as (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980&t=0)** - [Shyam] Thanks for watching AWS Essentials for Administrators.
>
> **[0:03](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980&t=3)** It's been an absolute pleasure in accompanying you on this exploration of concepts and tools within AWS.
>
> **[0:09](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980&t=9)** I hope you appreciated the different services and strategies you can deploy to improve the administration and effectiveness of your AWS Solutions.
>
> **[0:17](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980&t=17)** Cloud computing is a constantly evolving technology, and AWS keeps updating its toolset.
>
> **[0:23](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980&t=23)** I recommend regularly checking the AWS documentation for the latest updates and service offerings.
>
> **[0:29](https://www.linkedin.com/learning/aws-essential-training-for-administrators-2022/next-steps?u=76281980&t=29)** Finally, I encourage you to check other AWS courses in the library, and I'd like to wish you the best in your journey as an AWS Administrator.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (7)
> **Env Vars:** aws (7)
> **Code Keywords:** finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [shyam] (1)


## Path Context

### In [[Infrastructure Management on AWS- Skills for Administrators]]
**1 of 5** | [[Amazon EC2 Essential Training]] →

## Appears In

- [[Infrastructure Management on AWS- Skills for Administrators]]

## Related Courses

_Courses sharing skills:_

- [[AWS- Networking]] — Cloud Administration, Amazon Web Services (AWS)
- [[AWS- Monitoring, Logging, and Remediation (2021)]] — Amazon Web Services (AWS)
- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[AWS Essential Training for Architects]] — Amazon Web Services (AWS)
