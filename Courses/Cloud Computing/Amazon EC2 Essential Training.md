---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: amazon-ec2-essential-training
url: "https://www.linkedin.com/learning/amazon-ec2-essential-training"
duration_minutes: 267
duration: 4h 27m
level: Intermediate
updated: 6/1/2023
learners: 3708
skills:
  - Amazon EC2
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGLTV_hboqNbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1685473977717?e=2147483647&amp;v=beta&amp;t=VfcE9GjMFzjyGbvhcGbNYbVnOQuaRzmkIE28iwwsHiU"
linkedin_topic: Cloud Computing
learning_paths:
  - Infrastructure Management on AWS- Skills for Administrators
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/devops
  - skill/amazon-ec2
status: not-started
created: 2026-04-20
---

![Amazon EC2 Essential Training](https://media.licdn.com/dms/image/v2/D4D0DAQGLTV_hboqNbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1685473977717?e=2147483647&amp;v=beta&amp;t=VfcE9GjMFzjyGbvhcGbNYbVnOQuaRzmkIE28iwwsHiU)

# Amazon EC2 Essential Training

> Amazon Elastic Compute Cloud (Amazon EC2) provides secure, resizable compute capacity in the cloud, and is one of the most widely used cloud computing services out there today. If you’re a cloud administrator/architect who wants to stay competitive in the job market, it’s more important than ever to know how to leverage Amazon EC2 as more companies move their workloads to the AWS cloud. In this co

> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training) | 4h 27m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Shyam Raj]]

## Resources

- Exercise files available

## Skills Covered

- Amazon EC2

## Table of Contents

### Introduction

#### Learning Amazon EC2
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980&t=0)** - [Shyam] In this course, I'll help you take the first steps to learning Amazon EC2.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980&t=4)** I'll teach you not only how to launch, manage and scale your own virtual servers in the AWS Cloud but also equip you with a highly valuable skillset that will open up new career opportunities.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980&t=16)** Hi, I'm Shyam Raj.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980&t=18)** I'm a technical instructor and industry specialist in cloud computing.
>
> **[0:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980&t=22)** Join me in this course to discover how Amazon EC2 can benefit you and your business.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/learning-amazon-ec2?u=76281980&t=27)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (2), aws (1)
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **Speakers:** - [shyam] (1)

#### What is Amazon EC2?
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=0)** - [Instructor] Let's begin by understanding what is Amazon EC2?
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=4)** Amazon Elastic Compute Cloud or Amazon EC2 is the compute offering from AWS.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=11)** It provides on-demand, scalable compute capacity in the form of virtual machines.
>
> **[0:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=17)** Think of virtual machines that you may have installed on your computer.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=21)** Now, move these virtual machines to the AWS cloud and they are known as EC2 instances.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=27)** So essentially, EC2 instances are virtual machines that you launch in the AWS cloud.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=34)** EC2 instances allow various configurations of CPU, memory, storage, and networking capabilities.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=41)** So when you launch an EC2 instance, you can choose from predefined configurations available for a variety of workloads.
>
> **[0:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=48)** For example, certain EC2 instance types are preconfigured for specific workloads such as web servers or database servers, while there are others for applications that require low latency, high CPU, high memory, and other requirements.
>
> **[1:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=64)** So when you launch an EC2 instance, you can pick from a predefined configuration or you can also customize the configuration.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=72)** These instances can be launched in multiple regions.
>
> **[1:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=76)** You can choose a region that is closest to you or you could choose the most cost-effective region or the one that helps you with your compliance requirements.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=85)** The Amazon EC2 service is also referred to as IaaS or infrastructure as a service.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=92)** When you create a virtual machine using Amazon EC2, you have complete control over the operating system and the applications running on it.
>
> **[1:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=100)** You can use the EC2 instance for creating a web server, a database server, or a batch processing server.
>
> **[1:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=107)** Since the infrastructure is in your control, you can decide how you want to use it and it is known as infrastructure as a service.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=115)** Imagine you want to install a database on an EC2 instance.
>
> **[1:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=119)** Since the EC2 instance is an IaaS offering or infrastructure as a service offering, you are responsible for the EC2 instance and for managing the database running on top of it.
>
> **[2:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=131)** For use cases where you don't want to manage the underlying EC2 infrastructure, AWS offers managed services such as Amazon RDS, or relational database service, AWS Lambda, AWS Elastic Beanstalk, and others.
>
> **[2:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=146)** Another thing to remember is that because the infrastructure is in your control, you are also responsible for its security, like applying operating system patches.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=157)** Now, let's talk about the key features of Amazon EC2.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=161)** The first one is low cost.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=163)** Amazon EC2 instances are launched using shared hardware.
>
> **[2:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=167)** In the background, AWS uses physical servers to launch EC2 instances, and the capacity of these physical servers is shared across multiple customers.
>
> **[2:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=178)** AWS does this using hypervisors.
>
> **[3:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=181)** A hypervisor is a software used to manage virtual machines.
>
> **[3:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=185)** Common examples include VMware and VirtualBox.
>
> **[3:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=189)** The hypervisor allocates the resources of the physical server, such as the CPU and memory to multiple virtual machines, in this case, EC2 instances.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=199)** The hypervisor is not visible to the end user.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=202)** So when you launch an EC2 instance, you only have visibility of the instance itself.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=207)** You cannot see the underlying physical server or the hypervisor.
>
> **[3:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=211)** These EC2 instances that run on the same underlying physical server may belong to different customers, and because multiple customers share the physical resources, the cost is split, making Amazon EC2 an incredibly low-cost offering.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=227)** The next key feature of Amazon EC2 is that it is quickly scalable both up and down.
>
> **[3:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=234)** Let's say you launch an EC2 instance with two vCPUs and two gigs of RAM.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=239)** Looking at its usage, you realize that you need more capacity to serve your customers.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=244)** All you need to do is shut down your instance, change the configuration, and reboot.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=249)** And now, in a matter of a few minutes, you have more capacity.
>
> **[4:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=253)** The opposite is true as well.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=255)** Let's say you start with more capacity and realize that you have over-provisioned.
>
> **[4:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=260)** In a matter of minutes, you can scale down the configuration of the instance.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=265)** Next, you have complete control over the instances.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=269)** You can control the configuration, the operating system, and any applications you install on it.
>
> **[4:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=275)** With Amazon EC2, there is no upfront investment required.
>
> **[4:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=280)** You do not need to purchase any hardware to get started.
>
> **[4:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=283)** And for usage, it has a pay-as-you-go model, you only pay for what you use.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=289)** AWS does have other payment models such as reserve instances and savings plans that give you discounts for paying upfront.
>
> **[4:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=296)** But to get started with EC2, you do not need them.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=300)** You can use the pay-as-you-go model and just pay for your consumption.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=304)** And lastly, Amazon EC2 is available in multiple locations.
>
> **[5:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=309)** Your EC2 instances can be launched in any region where AWS provides its services.
>
> **[5:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=315)** As you can imagine, these features make Amazon EC2 an attractive compute offering for small customers and large enterprises.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-is-amazon-ec2?u=76281980&t=323)** In the upcoming videos, we'll look at these features and configuration options in detail.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (29), aws (10), cpu (3), rds (1), ram (1)
> **CLI Commands:** aws (10), make (1)
> **Code Keywords:** let (4), require (1), lambda (1), case, (1)
> **Analogies:** such as (4), imagine (2), for example (1)
> **Definitions:** known as (2), is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** vcpus (1)
> **Speakers:** - [instructor] (1)

#### AWS Free Tier
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=0)** - [Instructor] Let's now talk about the AWS Free Tier.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=3)** The AWS free tier provides free hands-on experience to certain AWS services, such as Amazon EC2, Amazon S3, and others.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=13)** For new users, this can be useful, as you can try certain services without being charged.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=19)** All brand-new AWS accounts have access to the free tier.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=23)** To create a new free tier account, go to aws.[amazon.com/free](https://amazon.com/free).
>
> **[0:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=29)** Once you're here, you can see the different types of offers available with the free tier.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=34)** For example, there are some AWS services that are available as short-term free trials.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=40)** Some services are available for free for the first 12 months, and some services are always free and you can see these by scrolling down.
>
> **[0:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=50)** For example, if you are a new AWS user, you get 750 hours of EC2 per month for free for the first 12 months.
>
> **[1:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=60)** You also get 5G of storage on Amazon S3 for free for the first 12 months.
>
> **[1:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=65)** Scrolling down, you can see some more services.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=68)** For example, Amazon SageMaker is available as a free trial for the first two months and AWS Lambda provides 1 million free request per month for free always.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=81)** An important thing to keep in mind is that free usage is calculated each month across all regions and automatically apply to your bill, and another thing to bear in mind is that free usage does not accumulate.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=95)** If you are a new AWS user, I recommend checking out the FAQs for answers to common questions about the free tier.
>
> **[1:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=103)** From the AWS management console, it is possible to monitor your free tier usage.
>
> **[1:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=110)** So once you're in the AWS management console, click your account name at the top right and corner and then navigate to account.
>
> **[1:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=119)** Once you're here, click free tier on the left navigation pane.
>
> **[2:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=124)** This will show you the free tier services available in your account.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=128)** Here is the service name, the free tier usage limit, the current usage, forecasted usage, and month to date actual usage percentage and forecasted usage percentage.
>
> **[2:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=140)** This shows you free tier usage data for the current month.
>
> **[2:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=143)** If you'd like to see free tier usage for the previous months, navigate to the bill section.
>
> **[2:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=149)** First, select the required bill, and then scroll down to see the usage by service.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=157)** For example, you can see here I've used several services in the last month.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=163)** Expand any service to see its usage details.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=166)** For example, in the US East/North Virginia region, I have some free tier usage for the key management service, which is a service that allows you to manage encryption keys.
>
> **[2:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-free-tier?u=76281980&t=177)** So if you want to monitor your free tier usage for the current month, go to the free tier section and for previous months, go to the bill section.

> [!info]- Semantic Content
>
> **Env Vars:** aws (10), ec2 (2)
> **CLI Commands:** aws (11)
> **UI Navigation:** go to (3), navigate to (2), select the (1), scroll down (1)
> **Analogies:** for example (5), such as (1)
> **Code Keywords:** let (1), lambda (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)

#### AWS regions and availability zones
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=0)** - [Instructor] Let's talk about AWS regions and availability zones.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=5)** AWS services are available at multiple locations worldwide and these locations make up regions and availability zones.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=13)** Let's first talk about a region.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=16)** A region is a separate geographic area serviced by AWS.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=21)** So AWS services are available at multiple independent locations worldwide, and each of these independent locations is known as an AWS region.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=31)** Each region is designed to be completely isolated from other regions.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=35)** For example, let's say you have two EC2 instances in two different AWS regions.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=41)** You have an EC2 instance in Ireland, the eu-west-1 region, and you have another EC2 instance in London, the eu-west-2 region.
>
> **[0:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=50)** By default, these EC2 instances will not talk to each other, because each region is isolated from other regions.
>
> **[0:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=58)** This is by design and it allows the system to be fault-tolerant.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=62)** This means if one region develops a problem or stops working, other regions will remain unaffected.
>
> **[1:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=70)** Each region is represented by a name and a code.
>
> **[1:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=74)** For example, the North Virginia region is represented as is-east-1.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=79)** London is represented as eu-west-2.
>
> **[1:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=82)** Mumbai is represented as ap-south-1 and so on.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=87)** Within these regions, AWS uses physical facilities to provide services to its customers.
>
> **[1:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=93)** These facilities are known as availability zones.
>
> **[1:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=97)** Think of these as data centers.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=99)** An availability zone could be made up of a single data center or multiple data centers.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=105)** There is no way to tell, as AWS does not reveal this information, but essentially, an availability zone is a facility within a region from where AWS provides its services.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=116)** Availability zones within a region are isolated but are connected through low-latency links.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=123)** This is different from the concept of a region.
>
> **[2:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=126)** By default, regions are isolated, but availability zones inside a region are connected.
>
> **[2:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=133)** This allows you to build highly available infrastructure.
>
> **[2:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=136)** If there is a failure in one availability zone, you can quickly fail over to another availability zone.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=142)** For example, let's say we have a region with two availability zones and inside these availability zones, you have your web servers.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=151)** Servers 1 is the primary web server and it is running in Availability Zone 1 and Server 2 is secondary and it's running in the second availability zone.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=161)** Server 1 is serving traffic from the internet.
>
> **[2:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=164)** If there is a problem with the availability zone, you can quickly switch the traffic to the second availability zone.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=171)** This is possible because availability zones within a region are connected.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=176)** When you launch EC2 instances, you launch them inside an availability zone.
>
> **[3:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=181)** So when you're in the EC2 console and when you're trying to launch an EC2 instance, you will have the option to select the availability zone you want to launch in.
>
> **[3:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=190)** Every region has at least two availability zones, and again, this is for high availability reasons.
>
> **[3:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=197)** An availability zone is represented by a region code followed by a letter.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=202)** For example, the availability zones in the North Virginia region are represented as us-east-1a, us-east-1b, us-east-1c, and so on because these availability zones belong to the North Virginia region, whose region code is us-east-1.
>
> **[3:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=221)** I'm here at a document titled AWS Global Infrastructure.
>
> **[3:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=225)** This document shows the different AWS regions on a world map.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=230)** The blue dots are the AWS regions that are already available and the red ones are the ones that are coming soon.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=238)** At the time of this recording, there are 31 AWS regions and 99 availability zones.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=244)** To see more details, navigate to the Regions and Availability Zones section.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=249)** Here you will see the different AWS regions in different parts of the world.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=254)** Scrolling down, you can see more details about the regions.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=258)** For example, the US West Oregon region has four availability zones and it was launched in 2011.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=268)** Here's another document titled Regions and Zones.
>
> **[4:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=272)** Scrolling down this document, you will see a table with a list of all the AWS regions, their region code and their opt-in status.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=282)** Any region that has the opt-in status set to not required is already enabled in your AWS account.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=289)** So these regions are enabled by default in your AWS account and those regions that have the opt-in status set to required need to be enabled before you can use them.
>
> **[5:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=301)** Now let's switch to the AWS Management Console and take a look at regions and availability zones.
>
> **[5:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=308)** Once you're in the AWS Management Console, you will see the currently selected region on the top right hand corner.
>
> **[5:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=315)** To see a list of regions already enabled in your account, click your name and then navigate to the Account section.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=323)** Once you're here, scroll down to the AWS Region section.
>
> **[5:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=328)** Here you will see a list of all the regions enabled by default and you will also see other regions that can be enabled in your AWS account.
>
> **[5:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=337)** Notice you do not see availability zones and that's because availability zones are shown when you are launching an EC2 instance.
>
> **[5:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=345)** Start by clicking the Services dropdown menu, then navigate to the Compute section and then click EC2.
>
> **[5:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=356)** From the EC2 dashboard, click the Launch Instance button and then click Launch Instance.
>
> **[6:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=363)** Doing so will invoke the EC2 instance launch wizard.
>
> **[6:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=367)** To see the availability zone in which the EC2 instance will be launched, scroll down to the Network section or the Network Setting section and click Edit.
>
> **[6:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=377)** The availability zone can be seen under the Subnet dropdown.
>
> **[6:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=381)** So in this dropdown, you can see all the availability zones in the region.
>
> **[6:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=385)** For example, us-east-1a, us-east-1b, us-east-1c, and so on.
>
> **[6:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=392)** A subnet is an IP address range assigned to an availability zone.
>
> **[6:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=397)** So if you launch this EC2 instance, the instance will be launched in the North Virginia region and the availability zone you select from here.
>
> **[6:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=407)** Finally, there are two special regions that we need to talk about.
>
> **[6:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=411)** The first one is AWS GovCloud and the other one is AWS China.
>
> **[6:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=416)** AWS GovCloud is designed to hold sensitive data for US government customers.
>
> **[7:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=422)** By default, you do not have access to this region.
>
> **[7:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=426)** To gain access, you will need to contact AWS and provide your identity information.
>
> **[7:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=432)** Similarly, the AW China region is specifically designed for Chinese customers only.
>
> **[7:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=437)** You'll need to contact AWS to get access to this region.
>
> **[7:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=441)** Now that you've understood about regions and availability zones, take a moment to try this yourself.
>
> **[7:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=447)** Try to enable a region that is not enabled by default.
>
> **[7:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=451)** For example, try to enable the Cape Town region or the Zurich region.
>
> **[7:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=457)** These are not enabled by default in your account.
>
> **[7:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-regions-and-availability-zones?u=76281980&t=461)** Enabling a region does not incur charges, so feel free to turn them on.

> [!info]- Semantic Content
>
> **Env Vars:** aws (26), ec2 (13)
> **CLI Commands:** aws (26), make (1)
> **Code Keywords:** let (5), default, (3), switch (2), finally, (1), default. (1)
> **UI Navigation:** navigate to (3), dropdown (3), scroll down (2), select the (1), switch to (1)
> **Definitions:** is a  (4), known as (2), is an  (1)
> **Analogies:** for example (7)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### AWS Local Zones
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=0)** - [Instructor] So we understood that availability zones are physical facilities within an AWS region from where AWS provides its services.
>
> **[0:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=8)** Local zones are similar to availability zones in that they provide AWS services, but they are located closer to large populations and industry centers.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=19)** Here is the AWS global infrastructure map that we saw in the last video.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=23)** It shows AWS regions in different parts of the world.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=27)** For example, here in North America, AWS has regions on the west coast and the east coast.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=34)** But as you can see, there could be many other large cities that are not close to an AWS region.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=40)** Users in these cities could experience high latency when accessing services hosted in these AWS regions.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=47)** For this purpose, AWS has local zones.
>
> **[0:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=51)** A local zone is an extension of an AWS region.
>
> **[0:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=54)** It brings core AWS services such as compute, storage, and database close to large population and business centers.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=63)** It allows low latency access for use cases such as live streaming, real-time gaming, virtual workstations, and more.
>
> **[1:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=71)** It also allows you to comply with state and local data residency requirements in specific sectors such as healthcare, financial services, and government.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=81)** Every local zone is represented by an AWS region code followed by an identifier that indicates the location of the local zone.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=90)** For example, the Atlanta local zone is represented as us-east-1-atl-1.
>
> **[1:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=97)** This is because the Atlanta local zone is tied to the North Virginia region, whose region code is us-east-1.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=105)** Similarly, the Perth local zone is represented as ap-southeast-2-per-1.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=111)** This is because the Perth local zone is tied to the Sydney region, whose region code is ap-southeast-2.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=118)** Unlike availability zones, local zones are not enabled by default.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=123)** So if you'd like to launch an EC2 instance inside a local zone, the local zone first needs to be enabled in your AWS account before you can launch an EC2 instance in it.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=134)** To enable a local zone, sign in to your AWS management console, and navigate to the EC2 service.
>
> **[2:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=141)** You will find this under the Compute section.
>
> **[2:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=145)** Once you're on the EC2 dashboard, under the Account attributes section, click Zones.
>
> **[2:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=152)** Doing so will show the local zones available within the currently selected region.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=157)** As you can see, I've already enabled a couple of local zones in this region, Atlanta and Boston.
>
> **[2:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=164)** Scrolling down, you can see the other local zones available in the region and their status.
>
> **[2:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=169)** For example, if you wanted to enable the Chicago local zone, you'll need to click Manage, change the status to Enabled, and then click Update zone group.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=180)** Once the local zone has been enabled, you will need to assign it an IP address range, similar to what we saw with availability zones.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=188)** And that is done from the VPC service.
>
> **[3:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=191)** Once you assign it an IP address range, it then becomes available to launch an EC2 instance.
>
> **[3:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=197)** For example, I've already assigned an IP address range to the Atlanta local zone.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=203)** Let's take a look at it from the EC2 launch wizard.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=207)** So back to the EC2 dashboard, I'll click Launch instance, and then click Launch instance again.
>
> **[3:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=214)** Then I'll scroll down to the Network settings section.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=217)** And then click the Edit button.
>
> **[3:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=220)** From here, I can use the Subnet dropdown to see the Atlanta local zone, which can be seen over here.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=227)** And as you can see, it has an IP address range assigned to it.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=231)** Notice that the other local zones are not available for selection.
>
> **[3:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=235)** Even the Boston Local zone, which was enabled, does not show up in this list because I haven't assigned it an IP address range.
>
> **[4:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=242)** So there are two steps to use a local zone.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=245)** First, it must be enabled in your account, and second, you must assign it an IP address range.
>
> **[4:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=251)** Now, take a moment to try this yourself.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=254)** Try to enable the Las Vegas local zone on your AWS account.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=258)** Here's a tip for you: You will not find it under the North Virginia region.
>
> **[4:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=263)** Similar to a region, enabling a local zone does not incur charges.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/aws-local-zones?u=76281980&t=267)** So feel free to turn it on.

> [!info]- Semantic Content
>
> **Env Vars:** aws (15), ec2 (7), vpc (1)
> **CLI Commands:** aws (15), find (2)
> **Analogies:** for example (4), similar to (3), such as (3)
> **UI Navigation:** navigate to (1), scroll down (1), dropdown (1)
> **Code Keywords:** default. (1), let (1)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)
> **Prerequisites:** you'll need (1)

#### Picking the right region: Best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=0)** - [Instructor] With so many regions available to launch an EC2 instance, a common question is how to pick a region.
>
> **[0:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=7)** What are the factors to keep in mind when picking a region for your EC2 instance?
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=12)** Primarily, there are four factors, starting with service availability, pricing, latency, and compliance.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=21)** Let's talk about the first one, service availability.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=24)** Not all AWS services are available in all AWS regions, so it could be possible the AWS service you want to use is not available in the region of your choice.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=35)** You can verify this by looking at the AWS Regional Services document.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=41)** Here is the document titled "AWS Regional Services" and it contains a list of all AWS services available in different regions.
>
> **[0:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=49)** Amazon EC2 is probably the most popular AWS service and so it is available in all regions, but the same cannot be said for other AWS services, especially the newer ones.
>
> **[1:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=61)** So before you pick a region, it is important to verify that the service is available in the region of your choice.
>
> **[1:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=69)** The next factor is pricing.
>
> **[1:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=71)** The cost of an AWS service is different across regions, so it could be possible that the cost of an EC2 instance in North Virginia is different from that in London.
>
> **[1:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=84)** Here is a document titled "Amazon EC2 On-Demand Pricing."
>
> **[1:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=88)** This document allows you to look up the price of an EC2 instance in different regions.
>
> **[1:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=93)** For example, here, the region is set to US East (Ohio), the operating system is set to Linux, and down here we have the different EC2 instance types.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=104)** The instance type determines the configuration of the instance.
>
> **[1:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=108)** Let's use t3.micro as an example.
>
> **[1:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=112)** A t3.micro instance provides two vCPUs and one gig of RAM.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=118)** The cost of a t3.micro instance running a Linux operating system in the Ohio region is $0.0104 per hour.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=128)** Now let's change the region to London.
>
> **[2:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=132)** The cost of the same EC2 instance running a Linux operating system of type t3.micro in the London region is $0.0118 per hour, which is higher than the cost in Ohio.
>
> **[2:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=146)** This difference is due to factors such as the cost of real estate, internet, cooling, and electricity.
>
> **[2:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=153)** So before you select a region for your EC2 instances, make sure you've checked the price of the instance in that region.
>
> **[2:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=160)** The next factor is latency.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=163)** Latency is the delay that you can expect when you are accessing a service.
>
> **[2:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=168)** Consider an example where users are located in Australia and they're trying to access a server in North America.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=175)** As you can imagine, in this scenario, users can expect a high latency because the packet has to travel a long distance.
>
> **[3:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=183)** To reduce the latency, the server can be brought closer to the users.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=188)** So this is another factor to keep in mind, the location of your users.
>
> **[3:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=192)** Ideally, you would want to select a region that is closer to your users.
>
> **[3:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=198)** Next, we have compliance.
>
> **[3:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=200)** Certain businesses and certain data types are bound by data residency regulations.
>
> **[3:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=206)** For example, if you are a bank in the United Kingdom, you would want your data to be hosted in the country rather than keeping it outside the country, so this is another factor that could influence your region selection.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=219)** If you're hosting certain types of data, such as financial data or healthcare data, you may be bound by data residency regulations.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=227)** Finally, there is another factor to keep in mind which is not region specific but it is about AWS in general, and it is known as service-level agreement.
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=237)** Service-level agreement is a commitment between a vendor and a customer, in this case, between AWS and you or your business.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=245)** It outlines the level of service you can expect from AWS and it is measured in metrics that vary across different AWS services.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=255)** Here is a document titled "AWS Service Level Agreements" and it outlines the service level agreement for different AWS services.
>
> **[4:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=264)** Let's check the SLA for Amazon EC2.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=269)** For Amazon EC2, the performance is measured in monthly uptime percentage, and AWS expects to provide more than 99.99% uptime every month.
>
> **[4:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=280)** If the uptime percentage is less than 99.99% but greater than or equal to 99%, AWS provides 10% of service credits.
>
> **[4:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=290)** And similarly, you have different service credits for different tiers.
>
> **[4:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=295)** Let's look at another service.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=297)** Let's take Route 53 as an example.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=300)** Route 53 is a DNS management service from AWS, and its performance is also measured in monthly uptime percentage.
>
> **[5:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=308)** AWS expects to provide 100% uptime for Route 53.
>
> **[5:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=314)** If the monthly uptime percentage is less than 100% but greater than or equal to 99.9%, AWS provides 10% of service credits.
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=324)** So before you sign up for an AWS service, it is important to check the service-level agreement.
>
> **[5:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/picking-the-right-region-best-practices?u=76281980&t=329)** This is an important factor to keep in mind before moving your workloads to AWS.

> [!info]- Semantic Content
>
> **Env Vars:** aws (22), ec2 (11), ram (1), sla (1), dns (1)
> **CLI Commands:** aws (22), make (1)
> **Code Keywords:** let (6), finally, (1), case, (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **Versions:** 99.99 (2), 0.0104 (1), 0.0118 (1), 99.9 (1)
> **Analogies:** for example (2), such as (2), imagine (1)
> **Warnings:** keep in mind (4)
> **Code Identifiers:** vcpus (1)


### 1. Introduction to Amazon EC2

#### What makes up an EC2 instance?
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=0)** - [Instructor] Let's Understand What Makes Up an EC2 Instance.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=4)** In this video, we'll identify the components that make up an EC2 instance, and then in the following videos, we'll understand each of those components in detail.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=13)** So for now, in this video we'll keep it at a very high level.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=16)** We'll simply identify the components and the features that make up the instance and then in the following videos we'll understand each of those components and its details.
>
> **[0:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=26)** Let's start by navigating to the EC2 service.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=31)** Once you're on the EC2 console, click the launch instance button and then click Launch Instance.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=38)** Doing so will invoke the EC2 instance launch wizard.
>
> **[0:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=42)** The first thing you can configure here is tags.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=45)** Tags are key value pairs that you can assign to almost any AWS resource.
>
> **[0:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=50)** By default, you can assign a name tag, but if you'd like to add additional tags, you can click here and then add the tag key and tag value.
>
> **[1:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=60)** For example, you can add tags to identify the owner, email address, department, cost center and more.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=68)** Tags are very useful for identifying, filtering and cost allocation purposes.
>
> **[1:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=74)** Moving on, the next item you can configure is application and OS images, also known as Amazon machine image or AMI.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=83)** An AMI is a template that contains information about the operating system and applications to be installed.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=89)** on the instance.
>
> **[1:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=91)** You can select from predefined AMIs or you can explore more AMIs in the AWS marketplace and community.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=99)** Every EC2 instance must be associated with an AMI because it is the AMI that contains information about the operating system and the applications that need to be installed on your instance.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=111)** Over here, you can select the architecture of the AMI.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=115)** Moving on, the next item you can configure is instance type.
>
> **[2:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=120)** The instance type determines the size or the configuration of the instance in terms of vCPU and memory.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=127)** By default, the T2 micro instance type is selected that provides one vCPU and one gig of ram.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=135)** There are other options available that provide more or less configuration.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=139)** For example, if you select a T2 medium instance type, it provides two vCPUs and four gigs of ram.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=147)** Over here, you can see the price of a T2 medium instance running different operating systems.
>
> **[2:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=152)** Next, you have the option to configure a key pair.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=156)** A key pair is used to log into the EC2 instance.
>
> **[2:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=159)** It contains two keys, a public key and a private key and hence, it is known as a key pair.
>
> **[2:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=165)** Most EC2 instances will need a key pair for login purposes.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=170)** Without a key pair, you might not be able to log into your instance.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=175)** Moving on, you can configure network settings.
>
> **[2:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=178)** To see all settings, click the Edit button.
>
> **[3:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=181)** The first setting you can configure is the VPC.
>
> **[3:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=185)** A VPC is a virtual network in which you can launch an instance.
>
> **[3:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=189)** It corresponds to an IP address range, so essentially a VPC is an IP address range in which you can launch your EC2 instance.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=199)** A VPC maps to a region.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=201)** For example, this VPC ending with 1053 belongs to the Oregon region.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=207)** In the earlier videos, we understood that every region has multiple availability zones.
>
> **[3:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=213)** So the VPC IP address range is broken down into smaller IP address ranges known as subnets and every subnet belongs to an availability zone.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=223)** So in this dropdown, you can select the subnet or in other words, the availability zone.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=229)** For example, here in Oregon, the availability zones are US West 2a, 2b, 2c, and 2d.
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=237)** And you'll notice every subnet has an IP address range associated with it, and this IP address range belongs to the larger IP address range of the VPC.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=247)** So essentially a VPC is a large IP address range, which is then broken down into smaller IP address ranges, known as subnets, and each subnet belongs to an availability zone.
>
> **[4:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=260)** We'll talk more about VPC and subnets in the upcoming videos.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=265)** Next, we have the option to configure public IP address.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=269)** This option here allows you to control whether your EC2 instance will be assigned a public IP address or not.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=276)** Next, we have security groups; a security group is-- A security group is like a virtual firewall that controls incoming and outgoing traffic for your EC2 instances.
>
> **[4:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=288)** To configure a security group, you can define rules and within these rules you can define the type of traffic, protocol, port range and the source or destination of the traffic.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=300)** Moving on, the next important setting is storage.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=304)** Over here, you can configure the storage to be associated with your EC2 instance.
>
> **[5:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=310)** Every EC2 instance will have at least one volume known as the root volume that contains the operating system.
>
> **[5:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=317)** Here is the size and type of the root volume.
>
> **[5:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=321)** You can also add additional volumes for your EC2 instance.
>
> **[5:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=325)** Moving on, we have some advanced settings, these settings are optional, meaning you do not need to configure them to launch your instance.
>
> **[5:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=332)** However, there are some important options that we can talk about.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=336)** For example, the first one here is request spot instances.
>
> **[5:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=341)** Spot instances are a type of EC2 instance that is available at a discounted price.
>
> **[5:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=347)** We'll talk more about this in an upcoming video.
>
> **[5:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=351)** Next, we have the option to domain join the EC2 instance.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=354)** This can be useful if you want to join your EC2 instance to a domain like a Microsoft Active Directory domain.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=361)** The next important setting here is IAM instance profile.
>
> **[6:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=365)** By default, your EC2 instance will not have access to other AWS services, even if they belong to your AWS account.
>
> **[6:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=374)** For example, if your EC2 instance wants to access an image sitting in your S3 bucket, by default, the EC2 instance will not be able to do so and this is by design.
>
> **[6:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=386)** However, by assigning an IAM instance profile, also known as an IAM role to your EC2 instance, the instance will be able to access the image.
>
> **[6:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=396)** Moving on, let's look at some other important settings to be aware of like shut down behavior and stop behavior.
>
> **[6:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=403)** This controls what happens to your EC2 instance when you shut it down or when you stop it.
>
> **[6:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=410)** Then you have settings for termination protection and stop protection, and you also have a setting to turn on detailed CloudWatch monitoring.
>
> **[6:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=419)** CloudWatch is a monitoring service from AWS that monitors the different AWS resources.
>
> **[7:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=425)** By default, your EC2 instances are monitored every five minutes, but if you'd like to change that to one minute monitoring, you can turn it on from here.
>
> **[7:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=436)** Moving on, there are some other important settings to be aware of, like placement group.
>
> **[7:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=441)** By default, when you launch an EC2 instance, you do not have control over how the EC2 instance is placed on the underlying hardware or the underlying physical server.
>
> **[7:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=451)** By using placement groups, you can influence this.
>
> **[7:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=455)** A placement group allows you to influence how EC2 instances are placed on the underlying hardware.
>
> **[7:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=461)** This is typically done to improve the performance or fault tolerance of the EC2 instance.
>
> **[7:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=466)** We'll talk more about this in an upcoming video.
>
> **[7:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=469)** And finally, the other important setting to be aware of is tenancy.
>
> **[7:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=475)** The tenancy setting determines whether your EC2 instance will be launched on shared or dedicated hardware.
>
> **[8:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=482)** So as you can see, there are so many settings that you can configure when you're launching an EC2 instance.
>
> **[8:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=488)** In the upcoming videos, we'll look at each of these settings in detail.
>
> **[8:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/what-makes-up-an-ec2-instance?u=76281980&t=493)** Once you've configured your required settings, you can then click the launch instance button to launch your EC2 instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (30), vpc (9), aws (6), ami (5), iam (3)
> **Code Keywords:** default, (6), let (3), public (3), type. (1), type, (1)
> **Definitions:** known as (5), is a  (4), is an  (1), in other words (1)
> **Prerequisites:** configure (11)
> **CLI Commands:** aws (6), make (2)
> **Analogies:** for example (6)
> **Code Identifiers:** vcpu (2), vcpus (1)
> **UI Navigation:** select the (2), dropdown (1)

#### Amazon Machine Image (AMI)
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=0)** - [Instructor] Let's understand the first component that makes up an EC2 instance, known as Amazon Machine Image or AMI.
>
> **[0:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=7)** An AMI is a template that contains information about the operating system and applications that need to be installed on an EC2 instance.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=16)** The best way to understand an AMI is to think of the operating system CD or DVD that we used in the past.
>
> **[0:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=22)** For new installations, we would use a CD or DVD to load the operating system.
>
> **[0:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=28)** The operating system would also have some applications pre-installed on it, such as a text editor.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=34)** Take the operating system CD or DVD and virtualize it, and now we have an AMI.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=41)** So an AMI contains the information needed to install the operating system and necessary applications on an EC2 instance.
>
> **[0:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=49)** You must specify an AMI to launch an EC2 instance because without an AMI, the EC2 service would not know which operating system to install on the instance.
>
> **[1:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=60)** So every EC2 instance begins as an AMI.
>
> **[1:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=64)** An AMI can be used to launch multiple instances.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=68)** AMIs can be of two types, predefined AMIs and custom defined AMIs.
>
> **[1:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=73)** Predefined AMIs are supplied by Amazon or a verified Amazon partner while custom defined AMIs are created by users.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=83)** Predefined AMIs are available in the AWS marketplace and they can be easily identified by looking at the green verified provider label.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=92)** AMIs are regional resources, so it is possible that an AMI available in the North Virginia region is not available in the Ohio, Oregon, or other regions, and that's because AMIs are regional resources.
>
> **[1:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=107)** Every AMI has an identifier called as the AMI ID.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=111)** When you launch an EC2 instance from the AWS management console or the user interface, you do not need to provide the AMI ID.
>
> **[2:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=120)** But if you launch an EC2 instance using the APIs or from the command line interface, you will need to provide the AMI ID.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=128)** An AMI contains information about volumes to attach to the instance when it is launched.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=134)** Every EC2 instance has at least one volume known as the root volume on which the operating system is installed.
>
> **[2:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=141)** An EC2 instance may also have additional volumes depending on the type and the use case for the instance.
>
> **[2:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=148)** So the AMI contains information about the volumes to create and attach to the instance when it is launched.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=156)** Custom AMIs are stored as Amazon Elastic Block Store or Amazon EBS snapshots.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=163)** Amazon EBS is a storage service from AWS.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=166)** It provides persistent long-term storage.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=170)** So custom AMIs, that is AMIs created by users, are stored as EBS snapshots.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=176)** Predefined AMIs provided by Amazon or its partners do not show up as snapshots.
>
> **[3:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=182)** Instead, they show up as images in the marketplace.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=186)** But if you create an AMI, which is known as a custom AMI, it gets stored as an Amazon EBS snapshot.
>
> **[3:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=193)** So here is the lifecycle of a custom AMI.
>
> **[3:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=196)** It starts as an EBS snapshot, and when you create an EC2 instance from the AMI, the EBS snapshot gets restored as an Amazon EBS volume, and the volume gets attached to an EC2 instance.
>
> **[3:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=210)** We'll talk more about this in the next video, when we create an AMI and launch an instance out of it.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=217)** AMIs can be backed by EBS volumes or instance store volumes.
>
> **[3:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=221)** The difference is in the storage type.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=224)** EBS volumes provide persistent long-term storage, while instance store volumes provide short-term or temporary storage.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=232)** If an AMI is backed by an EBS volume, the root device of the EC2 instance will be an Amazon EBS volume that provides persistent long-term storage.
>
> **[4:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=242)** By root device, we mean the root volume on which the operating system is installed.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=247)** If an AMI is backed by an instance store volume, the root device or the root volume of the instance will be an instance store volume which provides temporary storage.
>
> **[4:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=259)** So depending on your use case, you may choose an AMI backed by an EBS volume or backed by an instance store volume.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=267)** AMIs can be shared with other users.
>
> **[4:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=270)** You can share AMIs with specific AWS accounts or you can make the AMI public by sharing it with all AWS accounts.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=279)** Similarly, other users may share their AMIs with your AWS account.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=284)** An important thing to keep in mind is that there is always a risk with shared AMIs, as Amazon cannot vouch for the security and integrity of these images.
>
> **[4:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=294)** So you must perform due diligence before using them and it is recommended to use AMIs published by trusted sources.
>
> **[5:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=302)** AMIs can be copied within or across regions, and this can be useful for backup and disaster recovery purposes.
>
> **[5:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=310)** If you want to backup an EC2 instance, you can copy the AMI from one region to another, and then use the AMI to create a backup instance.
>
> **[5:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=319)** And this is possible because AMIs can be copied.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=323)** EBS backed AMIs support encryption.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=326)** Doing so can allow you to meet your security and encryption compliance requirements.
>
> **[5:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=331)** So those are the important features and concepts about AMIs.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/amazon-machine-image-ami?u=76281980&t=336)** We'll talk more about these and implement some of these in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ami (27), ec2 (14), ebs (13), aws (6), dvd (3)
> **CLI Commands:** aws (6), cd (3), make (1)
> **Code Keywords:** interface (2), let (1), type. (1), case, (1), public (1)
> **Definitions:** known as (2), is a  (2)
> **Cross-References:** in the next (2)
> **Prerequisites:** install (2)
> **Tools:** command line (1)
> **Exercise Files:** template (1)

#### How to find a pre-defined AMI
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=0)** - [Instructor] Now let's perform some hands-on exercises using AMI.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=4)** First, let's understand how to select a predefined AMI from the marketplace or from the community.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=11)** Once you're logged into the EC2 console, click instances on the left navigation pane, and then click the launch instances button.
>
> **[0:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=20)** Doing so will invoke the EC2 instance launch wizard, and from here you'll be able to select an AMI.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=27)** Over here, you can see the commonly used AMIs.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=30)** And to access the marketplace, click browse more AMIs.
>
> **[0:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=36)** From here, navigate to AWS marketplace AMIs, where you'll find AMIs published by AWS and trusted third parties.
>
> **[0:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=44)** And as you can see, there are several AMIs to choose from.
>
> **[0:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=48)** For example, in this region, there are over 7,400 AMIs in different categories, and the AMIs are listed here.
>
> **[0:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=58)** As you can see, some of these AMIs are supplied by AWS while others are supplied by third parties.
>
> **[1:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=65)** To know more about an AMI, click the AMI name or click the select button.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=72)** Here you will see more information about the AMI, such as the overview, hourly pricing, version details, operating system, some more product details, license and pricing information, user information, and support details.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=90)** So you can select an AMI from the marketplace, or you can also select an AMI from the community.
>
> **[1:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=96)** Here you will find AMIs published by developers, and you can see the AMIs as you scroll down.
>
> **[1:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=103)** For every AMI, you will see the AMI name, the AMI ID, the platform, publish date, architecture, root device type, which can be EBS or instant store, the AMI owner, virtualization type, and support for ENA, or elastic network adapter, which provides enhanced networking capabilities.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=127)** So to launch an EC2 instance, you can select a predefined AMI available in the marketplace, or from the community, or you can also create your own custom AMIs.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-find-a-pre-defined-ami?u=76281980&t=137)** And that's the topic for the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ami (13), ec2 (3), aws (3), ebs (1), ena (1)
> **CLI Commands:** aws (3), find (2)
> **Code Keywords:** let (2), type, (2), from. (1)
> **UI Navigation:** navigate to (1), scroll down (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### How to create and restore an AMI
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=0)** - [Instructor] Now let's learn how to create a custom AMI.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=3)** We'll start with a Windows EC2 instance and install IIS, or internet information service, on it.
>
> **[0:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=9)** IIS will create a web server on your EC2 instance.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=13)** Then, we'll create an AMI from the instance, so anytime you launch a new EC2 instance from the AMI, IIS should be pre-installed on it.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=23)** I've already set up my server.
>
> **[0:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=25)** Let me show you the steps I followed so you can do the same thing in your lab environment.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=30)** Once you've logged into the EC2 console, click instances on the left navigation pane, and then click the launch instances button.
>
> **[0:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=39)** From here, select a Windows AMI.
>
> **[0:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=42)** The exact Windows operating system type does not matter, so feel free to select any Windows AMI.
>
> **[0:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=49)** I selected Windows Server 2019 Base AMI.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=53)** Then select an instance type.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=57)** I selected T2 medium, which provides two virtual CPUs and four gigs of ram.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=62)** Then create a new key pair or associate an existing key pair.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=68)** Then create a new security group or associate an existing security group and make sure the security group allows inbound RDP and HTTP.
>
> **[1:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=76)** RDP will allow you to log into the EC2 instance and HTTP will allow you to access the web server.
>
> **[1:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=82)** In later videos of this course, I talk about creating key pairs and security groups and I also talk about connecting to an EC2 instance.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=90)** Feel free to check out those videos to configure your instance.
>
> **[1:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=94)** With the configuration in place, click the launch instance button to launch your EC2 instance and then log into your EC2 instance to configure IIS.
>
> **[1:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=103)** Once you've logged into the EC2 instance, click the start menu and then go to server manager.
>
> **[1:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=109)** From here, click local server on the left navigation pane.
>
> **[1:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=114)** Then click manage and click add roles and features.
>
> **[2:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=121)** Doing so will open a wizard.
>
> **[2:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=124)** On the first step, select the installation type.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=127)** In this case, we are performing a role-based or feature-based installation.
>
> **[2:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=132)** On the next step, select the server.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=134)** In this case, we are installing on the local server.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=137)** And then on the next step, from the available roles, select web server IIS.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=142)** No configuration changes are required, so click next a few times and let the installation complete.
>
> **[2:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=148)** Once the installation has completed, IIS will be installed and your EC2 instance will function as a web server.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=155)** Let's test it.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=156)** Back to the EC2 console, select your EC2 instance.
>
> **[2:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=160)** Copy the public IP address and access it from a browser.
>
> **[2:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=165)** I'm here on a browser tab.
>
> **[2:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=167)** I'll paste the public IP address and press enter and we can see the default IIS webpage.
>
> **[2:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=173)** So IIS has been installed on this EC2 instance.
>
> **[2:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=177)** Now we'll create an AMI from this instance.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=180)** Let me show you how to do it.
>
> **[3:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=182)** Back over here to the EC2 console.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=184)** To create an AMI from this instance, select the instance, click the actions button, go to image and templates, and then click create image.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=195)** Start by providing an image name or an AMI name.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=199)** Then provide an image description and then use this option to create an AMI without rebooting the EC2 instance.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=207)** By default, when you create a new AMI, AWS reboots the instance.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=212)** This is done to ensure that everything on the instance is stopped and it is in a consistent state during the creation process.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=219)** Check this box to prevent the reboot.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=223)** Down here you can see the storage information of this AMI.
>
> **[3:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=228)** This AMI will have a root volume of 30 gigs in size.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=232)** Notice you also have the option to add additional volumes.
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=237)** Next, you can configure tanks.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=239)** And with all the configuration in place, you can then click the create image button.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=245)** Doing so will initiate the AMI creation process.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=249)** To save some time, I've already created the AMI.
>
> **[4:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=252)** Let's look at it.
>
> **[4:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=253)** Back over here, I'll click AMIs on the left navigation pane.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=257)** And here is the AMI.
>
> **[4:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=259)** We'll look at the information associated with the AMI in a minute, but first, let's launch an instance from this AMI.
>
> **[4:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=266)** Select the AMI and then click launch instance from AMI.
>
> **[4:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=275)** I'll give this instance a name.
>
> **[4:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=277)** I'll call it Win server from AMI.
>
> **[4:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=281)** Notice I do not have to select an AMI because it was already selected in the previous step.
>
> **[4:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=287)** Next, I'll select an instance type.
>
> **[4:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=291)** I'll select a key pair and I'll also select a security group that allows inbound HTTP access.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=300)** Here I've selected a security group that allows all inbound access, which is okay for a lab environment, but not recommended in a production scenario.
>
> **[5:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=308)** Next, we can see the storage volume that will be associated with the EC2 instance.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=312)** In this case, the root volume will be 30 gigs in size.
>
> **[5:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=316)** And with all the configuration in place, I'll click the launch instance button.
>
> **[5:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=321)** While the instance is being launched, let's look at the information associated with the AMI.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=326)** I'll go back to AMIs and select the AMI.
>
> **[5:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=332)** Over here we can see details such as the AMI ID, the AMI name, the account owner ID, the status of the AMI, which is available, which means the AMI can be used to launch new EC2 instances, platform details, architecture, source information, creation date, and root device type.
>
> **[5:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=352)** Over here we can see the block device mappings.
>
> **[5:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=355)** We know that custom AMIs are stored as snapshots, so here is the snapshot ID, the size of the snapshot, 30 gigs in size, and the type which is general purpose GP2.
>
> **[6:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=366)** To see the associated snapshot, go to snapshots on the left navigation pane.
>
> **[6:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=371)** I'll click the refresh button and here we can see the snapshot associated with the AMI.
>
> **[6:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=377)** This snapshot will be restored as an EBS volume and then attached to the EC2 instance that we just launched.
>
> **[6:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=383)** Let's go back to AMIs and look at some more details.
>
> **[6:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=387)** Under the permissions tab, you can see the permissions of this AMI.
>
> **[6:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=392)** So this AMI is private and has not been shared with any other AWS accounts.
>
> **[6:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=397)** Now let's talk about some of the actions that you can perform on the AMI.
>
> **[6:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=401)** First, select the AMI, then click the actions button.
>
> **[6:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=405)** The first action you can perform is to copy the AMI.
>
> **[6:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=409)** AMI are regional resources and they can be copied from one region to another.
>
> **[6:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=414)** It can also be copied to the same region.
>
> **[6:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=417)** The purpose of doing this is to change the encryption status of the AMI.
>
> **[7:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=422)** This AMI is an unencrypted AMI, so if you wanted to encrypt it, you can copy to the same region and change the encryption status.
>
> **[7:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=430)** You can also copy to other regions.
>
> **[7:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=434)** Back over here, let's look at some other important actions.
>
> **[7:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=438)** With the AMI selected, click the actions button.
>
> **[7:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=442)** Here, you can change the AMI permissions, you can share the AMI privately with other AWS accounts or other AWS organizations and OUs, or you can even make the AMI public.
>
> **[7:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=456)** Notice here you have the option to add the create volume permission.
>
> **[7:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=460)** By default when you share an AMI, it can only be used to create a new EC2 instance.
>
> **[7:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=466)** With this option turned on, the AMI can also be used to create a new volume.
>
> **[7:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=471)** So in addition to using the AMI to create a new instance, it can also be used to create a new volume.
>
> **[7:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=477)** Back over here, let's look at some more options.
>
> **[8:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=482)** The AMI can also be used to request spot instances.
>
> **[8:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=485)** Spot instances are EC2 instances available at discounted pricing.
>
> **[8:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=490)** And here you also have the option to manage tags and change the description of the AMI.
>
> **[8:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=495)** Now let's look at the EC2 instance we launched from the AMI.
>
> **[8:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=499)** I'll go back to the instances section and here is the EC2 instance we launched called Win server from AMI.
>
> **[8:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=507)** Now let's verify if IIS is installed on the instance.
>
> **[8:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=511)** Select your EC2 instance, copy the public IP address, and try to access it from a web browser.
>
> **[8:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=518)** Back over here to the browser, I'll open a new tab and try to access the public IP address.
>
> **[8:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=524)** And straightaway we can see the default IIS webpage.
>
> **[8:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=528)** We did not make any configuration changes on the instance, and yet IIS was pre-installed out of the box.
>
> **[8:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=534)** As can imagine, using custom AMIs can be so useful for dev and test environments where you need preconfigured machines for testing purposes, it can save a lot of time that would otherwise be required for creating the test environment.
>
> **[9:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=548)** Now let's go back and review some more information associated with the AMI.
>
> **[9:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=552)** Back over here, let's quickly look at the volume associated with this EC2 instance.
>
> **[9:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=558)** On the left navigation pane, I'll click volumes.
>
> **[9:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=561)** The first volume belongs to the EC2 instance that we originally launched and this is the volume associated with the new EC2 instance.
>
> **[9:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=569)** And this was restored from the snapshot.
>
> **[9:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=573)** Back to AMIs, when you go to the AMI section, by default, you're looking at AMI owned by you.
>
> **[9:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=581)** If you'd like to see AMIs shared with you, use the dropdown and set it to private images and if you'd like to see public AMIs, use the dropdown and set it to public images.
>
> **[9:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=592)** Finally, let's understand how to delete an AMI.
>
> **[9:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=596)** I'll set this back to owned by me.
>
> **[9:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=599)** To delete an AMI, first you need to deregister it.
>
> **[10:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=603)** So select the AMI, click the actions button and then select deregister AMI.
>
> **[10:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=609)** Notice here, AWS gives you a warning that snapshots are not automatically deleted when you deregister an AMI and here is the associated snapshot ID.
>
> **[10:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=619)** So first, let's deregister this.
>
> **[10:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=624)** The AMI has been deregistered, which means it cannot be used to launch any more EC2 instances.
>
> **[10:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=630)** Finally, let's delete the associated snapshots.
>
> **[10:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=633)** So we'll go to snapshots, select the snapshot, click actions, delete snapshot, and then delete again.
>
> **[10:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=642)** So to delete an AMI, there are two steps we need to perform.
>
> **[10:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/how-to-create-and-restore-an-ami?u=76281980&t=645)** The first step is to deregister the AMI and the second step is to delete the associated snapshot.

> [!info]- Semantic Content
>
> **Env Vars:** ami (60), ec2 (27), iis (11), aws (5), http (3)
> **Code Keywords:** let (19), public (7), delete (7), type. (4), case, (3)
> **UI Navigation:** select the (8), go to (5), dropdown (2)
> **CLI Commands:** aws (5), make (3)
> **Prerequisites:** configure (3), install (1), set up (1)
> **Cross-References:** go back to (3)
> **Analogies:** such as (1), imagine (1)
> **Definitions:** is an  (1)

#### EC2 instance types
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=0)** - [Instructor] Now let's talk about EC2 instance types.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=3)** As we've seen in the previous videos, when you launch an EC2 instance, you must provide an instance type.
>
> **[0:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=10)** The instance type determines the configuration of your EC2 instance.
>
> **[0:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=14)** Instance types offer different compute, memory, and storage capabilities to your EC2 instance.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=21)** Instance types are grouped into different instance families, such as general purpose, compute optimized, memory optimized, and more.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=30)** We'll look at these in a minute.
>
> **[0:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=32)** You should select an instance type based on the applications you plan to run on the EC2 instance.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=38)** For example, if your application is compute intensive, you should select a compute optimized instance type.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=45)** If your application requires a balance of CPU and memory, you should select a general purpose EC2 instance type.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=53)** Now let's talk about the naming convention of instance types.
>
> **[0:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=56)** Here is an example: m6i.large.
>
> **[1:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=60)** The first letter, in this case m, represents the instance family.
>
> **[1:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=65)** The m instance type belongs to the general purpose instance family.
>
> **[1:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=70)** The number after that, in this case six, represents the generation.
>
> **[1:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=75)** And the letter after that, in this case i, is the attribute denoting the additional capability.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=81)** The m6i.large instance type has an intel processor, and that is represented with the i attribute.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=89)** The word large represents the instance size.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=92)** In this case, it provides two vCPUs and eight gigs of RAM.
>
> **[1:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=97)** Let's look at one more example, c5.9xlarge.
>
> **[1:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=102)** The letter c represents the instance family, in this case compute optimized.
>
> **[1:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=107)** The number five is the generation.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=111)** This instance type has no attribute denoting an additional capability.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=116)** 9xlarge is the instance size.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=118)** In this case, it provides 36 vCPUs and 72 gigs of RAM.
>
> **[2:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=124)** This information can be found in the AWS documentation.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=128)** Let's take a look at it.
>
> **[2:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=131)** Here is a document that provides information about the different instance families, types, and sizes.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=137)** On the left side, you have the different instance families: general purpose, compute optimized, memory optimized, accelerated computing, storage optimized, HPC optimized.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=151)** Select any instance family to see more information about it.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=155)** For example, the general purpose instance family is well-suited for web servers and code repositories.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=161)** Under the general purpose instance family you have several instance types, the most popular ones being T2, T3, M4, and M5.
>
> **[2:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=172)** Selecting an instance type will show its features and the different instance sizes available in that type.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=179)** For example, we have m5.Large, xlarge, 2xlarge, and so on.
>
> **[3:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=185)** And over here you can see their configuration.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=188)** Scrolling down, you can also see the use cases for the M5 instance type.
>
> **[3:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=194)** I highly recommend checking this document before selecting an instance type for your workload.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=199)** With so many options available to select an instance type, it is hard to find the right instance type for your workload or application requirement.
>
> **[3:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=208)** AWS has a tool in the EC2 Instance Launch Wizard to compare instance types.
>
> **[3:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=213)** Let's take a look at it.
>
> **[3:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=216)** Once you're in the EC2 Console, click the Launch Instances button.
>
> **[3:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=222)** From here, scroll down to the instance type section and click Compare Instance Types.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=229)** Over here you will find old instance types listed with their configuration and you also have the option to search for specific instance types.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=238)** For example, let's search for instance types that offer eight vCPUs, 16 gigs of memory, and high network performance.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=247)** I'll start by setting the filter for vCPUs, and I'll set this to greater than or equal to eight.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=257)** Next, I'll set the filter for memory, and I'll set this to greater than or equal to 16.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=265)** Finally, I'll apply the network performance filter and set this to high.
>
> **[4:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=272)** As you can see, it is very easy to use this tool to search the required instance type.
>
> **[4:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=277)** Even with this comparison tool, it is easy to under provision or over provision.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=282)** Under provisioning can cause performance issues, while over provisioning can lead to unnecessary costs.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=289)** AWS has a tool called Compute Optimizer that analyzes your EC2 usage and provides recommendations about instance types that can best handle the existing workload.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=300)** To discover how you can optimize your EC2 usage using Compute Optimizer, please visit the course titled AWS Cost and Performance Optimization, available in the LinkedIn Learning Library.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=312)** In this course, I also show tools and techniques that you can use to optimize your EC2 costs and improve performance.
>
> **[5:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=320)** Finally, AWS does allow changing the instance type.
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=324)** This can be useful if you feel that your instance is being over or underutilized.
>
> **[5:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=329)** There are a few things to be aware of when you're changing the instance type, and these are listed in the AWS documentation, but the most important thing to be aware of is that the instance needs to be stopped before you can change its type.
>
> **[5:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=343)** This could mean downtime if your application is running from a single instance.
>
> **[5:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=348)** Now let's see how to change the instance type.
>
> **[5:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=351)** I'll click Cancel and Cancel one more time.
>
> **[5:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=356)** Over here, I have an EC2 instance that is currently in the stopped state, and the current instance type is t3.micro.
>
> **[6:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=364)** To change the instance type, select the instance, click the Actions button, go to Instance settings, and then click Change instance type.
>
> **[6:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=374)** From here, you can select the desired instance type.
>
> **[6:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=382)** Select the required instance type and then click Apply.
>
> **[6:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=387)** And as you can see, the instance type has now changed to t3.large.
>
> **[6:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=391)** Now take a moment to try this in your AWS account.
>
> **[6:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-instance-types?u=76281980&t=395)** First, launch an EC2 instance, then stop it and try to change the instance type.

> [!info]- Semantic Content
>
> **Code Keywords:** type. (12), let (7), type, (3), case, (2), finally, (2)
> **Env Vars:** ec2 (13), aws (7), ram (2), cpu (1), hpc (1)
> **CLI Commands:** aws (7), find (2)
> **Analogies:** for example (4), such as (1), for instance (1)
> **UI Navigation:** select the (3), scroll down (1), go to (1)
> **Code Identifiers:** vcpus (4)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** be aware (2)

#### Key pairs
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=0)** - [Instructor] Now it's time to talk about EC2 key pairs.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=3)** Before we understand how key pairs work, it is important to talk about cryptography.
>
> **[0:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=9)** Cryptography is the technique of transforming data so only intended recipients can process it.
>
> **[0:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=15)** Here is an example.
>
> **[0:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=17)** Let's say person one wants to send their bank account number to person two.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=21)** Instead of sending the number in plain text, it can be encrypted, in other words, transformed before being sent on the wire.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=30)** Doing so ensures that any person in the middle who might be able to see the encrypted text cannot make sense of it because they wouldn't have the key required to decrypt it.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=41)** With this understanding, let's talk about public key cryptography.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=45)** It uses two mathematically related keys to encrypt and decrypt data.
>
> **[0:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=51)** One key is called the public key, while the other one is called the private key, and together, it is a key pair.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=59)** This type of cryptography is also known as asymmetric cryptography because it uses two keys, one for encryption and the other for decryption.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=68)** Here is an example.
>
> **[1:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=69)** Let's say we have data that needs to be encrypted.
>
> **[1:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=73)** We start with the public key.
>
> **[1:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=75)** When the public key's applied to the data, the data is transformed.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=79)** In other words, it is encrypted.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=81)** To restore the data back to its original form, we need the other key, the private key.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=87)** When the private key's applied to the encrypted data, it is restored to its original form.
>
> **[1:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=93)** With this understanding, now let's talk about EC2 key pairs.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=98)** When you're launching an EC2 instance, a key pair name can be specified.
>
> **[1:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=103)** Bear in mind, it is not mandatory to do so.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=106)** If you're already aware of the login credentials of the instance, like in the case of a custom AMI you might have created, you can skip the key pair, but if you're using the predefined AMIs provided by AWS, you will need a key pair to obtain the password of the instance.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=123)** At boot time, the public key content is placed in the instance, and when you're trying to access the instance, a private key must be specified.
>
> **[2:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=133)** An important thing to bear in mind is that key pairs are regional resources.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=137)** So a key pair that you create in one AWS Region will not exist in another Region.
>
> **[2:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=144)** Anyone who has access to your private keys can connect to your instances, so it is important to keep your key pairs in a secure place, and there is no way to recover a lost private key.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=156)** I have personally been in a situation where I lost my key pair used to log into my web server, and as a result, I did not have access to the instance.
>
> **[2:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=165)** Luckily, it turned out that my developer had a copy of the key pair, and we were able to log in.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=171)** So it is important to keep your key pairs in a secure location.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=176)** For Windows instances, the key pair can be used to decrypt the password, and for Linux instances, the key pair can be used to directly log in using the SSH command.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=187)** Now let's go to the AWS console and look at key pairs.
>
> **[3:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=192)** Once you're in the EC2 console, you can create key pairs from two places.
>
> **[3:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=197)** One way to do it is when you're launching an EC2 instance.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=201)** So when you're launching an EC2 instance, you have all this configuration that you can apply.
>
> **[3:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=205)** And down here is the Key pair section.
>
> **[3:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=209)** From here, you can create a new key pair.
>
> **[3:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=213)** You must provide a key pair name, then select a key pair type, and the private key download format.
>
> **[3:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=220)** If you're connecting from a Linux or a Mac OS machine.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=223)** you will need it in the PEM format, and if you're connecting from a Windows machine, you will need it in the PPK format.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=230)** So there are three items to configure, a key pair name, the type, and the format, and then click Create key pair.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=238)** Doing so will download the key pair to your local machine.
>
> **[4:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=241)** You can also create a key pair from the Key Pairs section on the left navigation pan.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=247)** Click Key Pairs and then click Create key pair, and you'll see the same options here.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=254)** You can also import a key pair that you may have created on your local machine.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=258)** So if you created a key pair offline on your local machine, and you want to import it into AWS, click the Actions button and then click Import key pair.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=268)** Provide a key pair name, and point your browser to the key pair file, and then click Import key pair.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=276)** We understood that key pairs are regional resources.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=279)** Over here, I have a key pair in the Ohio Region.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=282)** If I switch my Region, you will notice the same key pair does not exist in the other Region.
>
> **[4:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=288)** So here in the Oregon Region, I do not see the same key pair.
>
> **[4:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=292)** Now I'll switch back to the Ohio Region, and let's understand how key pairs can be used to log into EC2 instances.
>
> **[4:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=299)** I'll click the Instances section on the left navigation pan.
>
> **[5:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=302)** For Windows instances, the key pair can be used to obtain the password.
>
> **[5:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=307)** Select your Windows instance, click the Connect button and then navigate to RDP client.
>
> **[5:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=315)** Here you can see the public DNS name of the EC2 instance, the username, and you have the option to obtain the password.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=323)** Click Get password, and here, you can see the key pair name associated with this instance.
>
> **[5:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=328)** Then click Upload private key file.
>
> **[5:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=331)** Point your browser to the private key file, and click Open.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=336)** Then click Decrypt password.
>
> **[5:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=339)** Here is the password required to log into the Windows EC2 instance.
>
> **[5:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=344)** For Linux EC2 instances, the key pair can be used to directly log into the instance.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=349)** Select your Linux instance, click the Connect button, then go to SSH client, and here, you will see the command needed to log into your EC2 instance, and you can see that the key pair name is part of the command.
>
> **[6:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/key-pairs?u=76281980&t=364)** In the later videos of this course, we'll understand how to use the key pairs to log into Windows and Linux EC2 instances.

> [!info]- Semantic Content
>
> **Code Keywords:** private (9), let (6), public (6), type, (2), switch (2)
> **Env Vars:** ec2 (12), aws (4), ssh (2), ami (1), pem (1)
> **CLI Commands:** aws (4), ssh (2), make (1)
> **Definitions:** is an  (2), in other words (2), is called (2), is a  (1)
> **UI Navigation:** go to (2), navigate to (1)
> **Prerequisites:** required to (1), configure (1)
> **Tools:** aws console (1)
> **Exercise Files:** download the (1)

#### VPC and subnets
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=0)** - [Instructor] Now let's talk about an interesting topic, VPCs and subnets.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=5)** A VPC, also known as a virtual private cloud, is a virtual, logically isolated network of your AWS account.
>
> **[0:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=14)** Essentially, it is an IP address range in your AWS account.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=18)** Within a VPC, you can have subnets.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=21)** A subnet is a range of IP addresses in your VPC, so simply put, both VPCs and subnets are IP address ranges.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=30)** A VPC is a larger IP address range and a subnet is a smaller IP address range in your VPC.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=38)** We use a similar concept in traditional on-premises networks.
>
> **[0:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=43)** We use IP address ranges to logically isolate different segments of the network such as departments.
>
> **[0:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=50)** The same concept applies in the AWS cloud.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=53)** In the AWS cloud, we have different regions, and within a region we can have a VPC, and a VPC is simply an IP address range.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=63)** Within a region you can also have multiple VPCs.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=67)** For example, in this region, we have two VPCs.
>
> **[1:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=70)** VPC A has the IP address range 172.31.0.0/16 and VPC B has the IP address range 10.0.0.0/16.
>
> **[1:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=82)** This type of a configuration can be very useful for isolation purposes.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=87)** For example, you can have your production instances in VPC A and non-production instances in VPC B, and by default, they will not talk to each other because VPCs are logically isolated.
>
> **[1:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=100)** Within a VPC, you can have subnets and these are smaller IP address ranges that belong to the VPC IP address range.
>
> **[1:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=108)** For example, in this VPC, we have three subnets, and each of these subnets has an IP address range that belongs to the VPC IP address range.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=118)** The number you see after the slash is known as the subnet mask.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=123)** Each of the subnets has the subnet mask of /20 while the VPC has the subnet mask of /16.
>
> **[2:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=131)** This can seem a bit confusing especially if you're not from a networking background.
>
> **[2:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=136)** The subnet mask /20 seems to be larger than that of the VPC, which has a subnet mask of /16, but with subnet masks, a larger number means a smaller network.
>
> **[2:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=149)** This means the subnet mask /20 is smaller than the subnet mask /16 so these subnets have smaller IP address ranges and they belong to the VPC IP address range.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=163)** There are several subnet calculators available online.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=166)** Feel free to use them to understand subnetting at a high level.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=171)** Now let's talk about the default VPC and subnet.
>
> **[2:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=174)** If your AWS account was created after 12th April, 2013, it will have a default VPC in each region.
>
> **[3:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=182)** The default VPC is configured with subnets in each availability zone, and it also has a route table.
>
> **[3:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=189)** Now let's see this from the AWS console.
>
> **[3:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=193)** Once you're in the EC2 console, you can select a VPC when you're launching an EC2 instance.
>
> **[3:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=200)** Once you're in the EC2 instance launch wizard scroll down to the Network Settings section.
>
> **[3:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=206)** Once you're here, click the Edit button and then you'll be able to select a VPC and a subnet.
>
> **[3:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=214)** You can launch the instance in the default VPC which has the IP address range of 172.31.0.0/16 in every region, or you can also launch your instance in a custom VPC.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=227)** And then you can select a subnet.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=229)** An important thing to bear in mind is that the VPC belongs to the region and the subnet belongs to the availability zone.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=238)** For example, here we can see three subnets belonging to three different availability zones and they have an IP address range within the VPC IP address range.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=249)** Now let's see how to create a VPC.
>
> **[4:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=251)** First, click the Services dropdown menu, then navigate to the Networking & Content Delivery section, and then go to the VPC service.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=261)** From here, you will see the VPCs in the currently selected region.
>
> **[4:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=266)** For example, I have two VPCs in this region.
>
> **[4:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=270)** One of them is the default VPC, and I know this by looking at the IP address range, and I also have a custom VPC.
>
> **[4:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=278)** To create a new VPC, click the Create VPC button and from here, you can provide a VPC name and then provide an IPv4 address range and an IPv6 address range.
>
> **[4:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=290)** For example, I'll provide the IP address range, 10.1.0.0/16, then click Create VPC.
>
> **[5:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=301)** Within a VPC, you can also create subnets and they can be seen from here.
>
> **[5:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=307)** As you can see, I have got three subnets, one in each availability zone, and here you can also see the number of IP addresses available in each subnet.
>
> **[5:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=318)** To create a new subnet, click the Create subnet button, select your VPC, give your subnet a name, then select the availability zone in which you want to create the subnet, and then provide an IP address range that belongs to the VPC.
>
> **[5:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=342)** Then click Create subnet.
>
> **[5:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=346)** A VPC also has a route table associated with it.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=349)** The route table tells AWS how to handle the traffic.
>
> **[5:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=353)** For example, here's the route table that belongs to the default VPC and I can see the routes by going to the Routes tab here.
>
> **[6:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=363)** As you can see, all traffic belonging to the VPC IP address range is treated as local traffic and any other traffic destined to the internet is sent to the internet gateway.
>
> **[6:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=375)** The internet gateway is a router attached to your VPC and it allows you to send traffic to the internet.
>
> **[6:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=382)** So as you can see, a VPC has several components.
>
> **[6:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=385)** You have the VPC IP address range.
>
> **[6:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=389)** You then have subnets, which are smaller IP address ranges that belong to the VPC.
>
> **[6:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=394)** Then you also have route tables that tell AWS where to route traffic, and you also have internet gateways that send traffic to the internet.
>
> **[6:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=403)** If you do not have the default VPC in your region, it is really easy to create one.
>
> **[6:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=408)** I'll switch to a region that does not have a default VPC.
>
> **[6:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=413)** For example, I'm here in the Oregon region and here I do not have the default VPC.
>
> **[6:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=419)** To recreate it, simply click the Actions button, and click Create default VPC.
>
> **[7:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=426)** Then click Create default VPC again, and your default VPC should be created.
>
> **[7:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=432)** As you can see, it uses the same IP address range 172.31.0.0/16.
>
> **[7:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=437)** It automatically creates the required subnets in every availability zone, and also creates the internet gateway to send traffic to the internet.
>
> **[7:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=448)** Now, take a moment to try this yourself.
>
> **[7:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/vpc-and-subnets?u=76281980&t=450)** Try to create a VPC with an IP address range, and then try to create subnets within that VPC.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (53), aws (8), ec2 (3)
> **Analogies:** for example (8), such as (1)
> **CLI Commands:** aws (8)
> **Code Keywords:** let (4), private (1), default, (1), switch (1)
> **Definitions:** is a  (5), known as (1), is an  (1)
> **UI Navigation:** scroll down (1), dropdown (1), navigate to (1), go to (1), select the (1)
> **Versions:** 172.31.0 (3), 10.0.0 (1), 10.1.0 (1)
> **Tools:** aws console (1)

#### Security groups
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=0)** - [Shyam] Now let's talk about an important feature of EC2 instances known as security groups.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=5)** A security group is like a virtual firewall that controls inbound and outbound traffic for your EC2 instance.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=12)** Think of it as a wrapper that sits around your EC2 instance and monitors all inbound and outbound traffic.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=19)** It then allows or denies the traffic based on the configured rules.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=23)** Security groups allow you to filter traffic based on protocols and port numbers.
>
> **[0:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=29)** Security groups have separate rules to control both inbound and outbound traffic.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=35)** With security groups, you can only configure allow rules.
>
> **[0:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=39)** Deny rules cannot be configured.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=41)** This might seem a bit different if you work with different firewalls that allow you to configure both allow and deny rules, but with security groups, you can only configure allow rules.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=53)** By default, security groups block all inbound traffic and allow all outbound traffic.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=59)** So when you create a new security group there is an outbound rule in place that allows all traffic and there is no inbound rule in place which means no inbound traffic is allowed.
>
> **[1:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=69)** Security groups are stateful in nature.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=72)** This is very important to keep in mind as you work with security groups.
>
> **[1:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=77)** Because security groups are stateful in nature, if the initial request from your instance is allowed the response traffic is automatically allowed regardless of the inbound rules.
>
> **[1:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=88)** Here is an example.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=89)** Let's say we have an EC2 instance with a security group and the instance is trying to access a server on the internet.
>
> **[1:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=96)** The initial outbound request is allowed by the security group.
>
> **[1:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=100)** When the server responds back, the response traffic will be automatically allowed regardless of the inbound rules.
>
> **[1:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=108)** This is because security groups are stateful in nature.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=111)** They keep a track of the connections.
>
> **[1:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=114)** The response traffic belongs to an existing connection and so it will be automatically allowed regardless of the inbound rules.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=123)** Security group rules can be modified anytime.
>
> **[2:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=126)** Multiple security groups can be attached to an EC2 instance.
>
> **[2:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=130)** When you do so, rules from all security groups are evaluated to decide whether to allow traffic.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=137)** For example, imagine an EC2 instance that is receiving inbound traffic and has three security groups associated with it.
>
> **[2:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=145)** To make a decision on whether to allow traffic, the rules from all security groups will be aggregated and then evaluated.
>
> **[2:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=153)** Security groups are easy to configure.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups?u=76281980&t=156)** We'll explore this in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (6)
> **Prerequisites:** configure (4)
> **Code Keywords:** let (2), default, (1)
> **Definitions:** is an  (2), known as (1)
> **Analogies:** think of it as (1), for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [shyam] (1)

#### Demo: Security groups
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=0)** - Now let's understand how to configure security groups.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=3)** You can configure a security group when you're launching an EC2 instance.
>
> **[0:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=8)** Once you're logged into the EC2 console, click the launch instances button.
>
> **[0:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=15)** Scroll down to the network settings section and click the edit button.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=21)** From here, you can create a new security group or associate an existing security group.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=27)** To create a new security group, you must provide a name and description and then configure the inbound rules.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=35)** When you're creating a security group from here, that is from the EC2 instance Launch Wizard, you can only configure inbound rules.
>
> **[0:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=42)** You cannot configure outbound rules from this console.
>
> **[0:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=46)** Once the security group has been created, you can then change the outbound rules, but it cannot be configured from this console.
>
> **[0:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=54)** Also, bear in mind that the rules you're configuring here are allow rules.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=59)** We learned this earlier that security groups only support allow rules, not deny rules.
>
> **[1:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=64)** So the rules you're adding here are allow rules.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=68)** To configure an inbound rule, you must specify the traffic type, protocol, port range, and source information.
>
> **[1:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=76)** For traffic type, there are pre-configured options that you can select from such as SSH, SMTP, DNS, HTTP, and more.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=87)** When you select a preconfigured option, the protocol and port range is automatically populated.
>
> **[1:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=93)** If you'd like to customize these, select from one of the custom options.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=99)** For source type, there are three options available.
>
> **[1:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=102)** You can allow traffic from any IP address or custom IP address ranges, or from your public IP address.
>
> **[1:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=110)** The security group will be created when you launch your EC2 instance, and it will be automatically associated to your instance.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=118)** To see the Associated Security group, select your EC2 instance and go to the security tab.
>
> **[2:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=125)** Here, you can see the Associated Security group ID, its inbound and outbound rules.
>
> **[2:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=130)** You can also create security groups by navigating to security groups on the left navigation pane.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=137)** From here, click create security group.
>
> **[2:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=141)** Over here, you can provide a name, description, select your VPC, add inbound rules, and notice you also have the option to add outbound rules.
>
> **[2:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=152)** So when you create a security group from this console, you have the ability to configure the outbound rules.
>
> **[2:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=158)** Notice that there is no preconfigured inbound rules.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=161)** This means, by default, all inbound traffic will be blocked, and there is a preconfigured outbound rule that allows all outbound traffic.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=171)** Now let's configure the security group to allow inbound HTTP traffic.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=175)** Start by providing a name and a description, and then select the VPC.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=184)** In this region, I only have one VPC, so it is pre-selected.
>
> **[3:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=189)** Then click add rule under inbound rules and set the traffic type to HTTP.
>
> **[3:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=196)** Notice the protocol and port range is automatically set to TCP port 80.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=201)** Set the source to any IPV4 address and then click create security group.
>
> **[3:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=209)** The security group has been created.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=212)** If you'd like to make changes, you can edit the outbound rules and the inbound rules.
>
> **[3:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=218)** Now let's see how to associate the security group with an EC2 instance.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=223)** First, navigate to the instances section.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=226)** Select your EC2 instance.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=229)** Go to the actions button.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=231)** Click the actions button.
>
> **[3:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=233)** Go to security and then click change security groups.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=238)** Over here, you will see the associated security groups and to associate a new security group, click here and select the desired security group.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=249)** Then click add security group and click save.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=254)** The security group has been associated with the EC2 instance, and we can confirm this by selecting the instance and going to the security tab.
>
> **[4:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=263)** And here we can see two security groups associated with the instance.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=268)** Bear in mind that the same security group can be attached to multiple EC2 instances.
>
> **[4:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=273)** Now try this in your AWS account.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=276)** Create an EC2 instance and attach a security group that allows inbound ICMP traffic or in other words, ping requests.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=284)** Test that you are able to ping the instance and then edit your security group.
>
> **[4:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=288)** Remove the rule that allows outbound traffic and see if you're able to ping the instance.
>
> **[4:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-security-groups?u=76281980&t=294)** Finally, remove the inbound rule that allows ICMP traffic and see if you're still able to ping.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (10), http (3), vpc (3), icmp (2), ssh (1)
> **Code Keywords:** let (3), type, (3), public (1), default, (1), finally, (1)
> **Prerequisites:** configure (8)
> **UI Navigation:** go to (3), select the (2), scroll down (1), navigate to (1)
> **CLI Commands:** ssh (1), make (1), aws (1)
> **Definitions:** is a  (1), in other words (1)
> **Ports:** port 80 (1)
> **Analogies:** such as (1)

#### EBS volumes
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=0)** - [Instructor] Another important component of EC2 instances is EBS volumes.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=5)** EBS volumes, or Elastic Block Store volumes, are a block-level storage for use with EC2 instances.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=12)** Block storage is a technology where data is stored in blocks of equal sizes.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=18)** The best way to understand an EBS volume is to think of a hard drive.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=23)** We know hard drives are attached to computers for storage.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=27)** Virtualize the hard drive, and now we have an EBS volume.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=31)** EBS volumes are raw, unformatted storage volumes.
>
> **[0:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=36)** This means they do not have a file system installed on them.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=40)** An EC2 instance can have multiple EBS volumes attached to it.
>
> **[0:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=44)** Just like how a computer can have multiple hard drives attached to it, an EC2 instance can have multiple EBS volumes attached to it.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=53)** An EBS volume can be attached only to one EC2 instance.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=57)** There is an exception to this and that is the Provisioned IOPS volume type but for all other volume types, an EBS volume can only be attached to a single EC2 instance.
>
> **[1:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=69)** EBS volumes are well-suited for use as primary storage for file systems, databases, or applications that require granular updates.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=79)** To attach an EBS volume to an EC2 instance, they must be in the same availability zone.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=85)** For example, let's say we have an EC2 instance in the us-east-1a availability zone.
>
> **[1:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=91)** To attach an EBS volume, it must also be in the same availability zone as the instance.
>
> **[1:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=97)** If you have an EBS volume in the us-east-1b availability zone, it cannot be attached to the instance in the 1a availability zone.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=106)** So, the instance and the EBS volume must be in the same availability zone.
>
> **[1:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=112)** EBS volumes can persist independently from the life of an instance.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=116)** This means the EBS volume can continue to exist even if the EC2 instance has been terminated.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=123)** Now, let's talk about the types of EBS volumes.
>
> **[2:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=126)** There are three types.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=127)** Solid-state drive volumes, also known as SSD volumes, hard disk drive volumes, also known as HDD volumes, and magnetic volumes.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=137)** First, let's talk about SSD volumes.
>
> **[2:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=140)** These are optimized for transactional workloads requiring frequent read or write operations with small IO size.
>
> **[2:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=148)** IO refers to input, output.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=151)** The performance of these volumes is measured as IOPS, that is, input, output per second.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=157)** SSD volumes are ideal for use cases such as boot volumes and databases.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=163)** Boot volumes are the root device volume of an EC2 instance.
>
> **[2:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=167)** SSD volumes are further classified into two types.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=171)** General Purpose SSD and Provisioned IOPS SSD.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=175)** General Purpose SSD provides a balance of price and performance.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=180)** It is suitable for most workloads including virtual desktops, databases, and boot volumes.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=187)** Provisioned IOPS volumes are the highest performing EBS volumes.
>
> **[3:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=192)** They are suitable for workloads that require low latency such as IO-intensive NoSQL and relational databases.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=199)** Provisioned IOPS volumes support multi-attach.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=203)** It is a feature that allows a single EBS volume to be attached to multiple instances in the same availability zone.
>
> **[3:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=211)** Now, let's talk about the second type of EBS volumes, known as HDD volumes.
>
> **[3:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=216)** These are optimized for large streaming workloads.
>
> **[3:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=220)** The performance of HDD volumes is measured as throughput.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=224)** Throughput refers to the amount of data that can be transferred in a given timeframe.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=229)** This is ideal for use cases such as log processing and data warehouses.
>
> **[3:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=234)** An important thing to keep in mind is that HDD volumes cannot be used as boot volumes.
>
> **[4:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=241)** HDD volumes are classified into two types.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=244)** Throughput Optimized HDD and Cold HDD.
>
> **[4:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=248)** Throughput-optimized volumes are low-cost volumes, and they're suitable for frequently accessed, throughput intensive workloads, so they're a good fit for data warehouses and log processing.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=261)** Cold HDD volumes are low-cost volumes suitable for large sequential workloads.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=267)** They are designed to support infrequently accessed data such as big data workloads, log processing, and Windows File Servers.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=276)** The last EBS volume type is magnetic volumes.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=279)** These are backed by magnetic drives.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=282)** They are suitable for workloads with small, infrequently-accessed data sets.
>
> **[4:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=287)** These are also known as previous generation volumes.
>
> **[4:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=292)** There are differences between the volume types we discussed in terms of durability, supported size, maximum IOPS, and maximum throughput.
>
> **[5:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=301)** I highly recommend reviewing the documentation before selecting a volume type for your EC2 instance.
>
> **[5:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-volumes?u=76281980&t=307)** In the next video, we'll understand how to configure EBS volumes.

> [!info]- Semantic Content
>
> **Env Vars:** ebs (22), ec2 (11), hdd (8), ssd (7), iops (6)
> **Definitions:** known as (4), is a  (2), refers to (2), is an  (1)
> **Code Keywords:** let (4), require (2), continue (1)
> **Analogies:** such as (4), just like (1), for example (1)
> **Cross-References:** we discussed (1), in the next (1)
> **Documentation:** the documentation (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)

#### Demo: EBS volumes
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=0)** - [Instructor] Now let's understand how to configure EBS volumes.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=3)** You can configure an EBS volume when you're launching an EC2 instance.
>
> **[0:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=8)** Let's do that.
>
> **[0:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=9)** Once you're in the EC2 console, click the Launch Instances button.
>
> **[0:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=15)** Scroll down to the storage section to see the root volume configuration.
>
> **[0:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=20)** Here you can see the size of the root volume and the type.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=24)** The size depends on the selected AMI.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=27)** By default, AWS selects the Amazon Linux AMI which requires a minimum of eight gigs, but the size will change if you change the AMI.
>
> **[0:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=36)** For example, if you select a Windows AMI, it requires a minimum of 30 gigs.
>
> **[0:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=43)** To see additional configuration options, click Advanced.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=47)** Then expand the volume configuration.
>
> **[0:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=50)** So here you can configure the volume size, type, delete on termination, and encryption status.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=57)** GP2 is general purpose SSD volume, and SSD volumes have their performance measured in IOPS or input/output per second.
>
> **[1:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=66)** So the performance depends on the volume type, and it also depends on the size of the volume.
>
> **[1:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=71)** For example, if I change the size to 100 gigs, you will notice the performance change as well.
>
> **[1:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=78)** In the last video, we understood that HDD volumes cannot be used as the root volume.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=83)** So if you select any one of the available HDD volumes called HDD or throughput optimized HDD you will see an error message that it cannot be used as the root volume.
>
> **[1:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=94)** I'll set it back to GP2.
>
> **[1:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=96)** When you set the Delete on termination configuration to Yes, the EBS volume is deleted when the EC2 instance is terminated.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=104)** If you'd like to retain the EBS volume, set this to No.
>
> **[1:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=109)** Here you can change the encryption status.
>
> **[1:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=112)** Notice you also have the option to add additional EBS volumes.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=116)** Additional volumes can have the type set to HDD.
>
> **[2:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=120)** Every volume type has a minimum required size.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=123)** For this volume type, the minimum required size is 125 gigs.
>
> **[2:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=129)** Once you've configured your volumes, click the Launch Instance button.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=134)** The attached EBS volumes can be seen from the EC2 console.
>
> **[2:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=138)** Select your EC2 instance and go to the Storage section to see the attached EBS volumes.
>
> **[2:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=145)** This EC2 instance has one EBS volume attached to it.
>
> **[2:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=149)** Its size is 30 gigs and it does not have encryption enabled.
>
> **[2:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=154)** You can also create EBS volumes by going to the Volume section on the left navigation pane.
>
> **[2:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=160)** Here you can see the root volume of the EC2 instance, which is 30 gigs in size.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=166)** To create additional volumes, click the Create volume button.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=170)** From here, you can select the volume type and size.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=175)** SSD volumes have their performance measured in IOPS and HDD volumes have their performance measured in throughput.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=184)** Next, you can select the availability zone.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=186)** This is important because the EBS volume must be in the same availability zone as the EC2 instance.
>
> **[3:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=193)** Then you have the option to specify the snapshot ID.
>
> **[3:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=197)** This can be useful if you want to create an EBS volume by restoring from a snapshot.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=202)** Then you have the option to turn on encryption.
>
> **[3:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=205)** An important thing to bear in mind is that encryption can only be configured when you're creating the EBS volume.
>
> **[3:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=211)** You cannot change the encryption status after creating the volume.
>
> **[3:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=215)** Now let's create a volume and attach it to an EC2 instance.
>
> **[3:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=220)** Select the required volume type.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=223)** Then configure the volume size.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=226)** Select the availability zone in which your EC2 instance is running, and then click Create volume.
>
> **[3:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=235)** Now the volume is being created.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=239)** While the volume is being created, let's talk about modifying the size of the EBS volume.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=244)** The size of EBS volumes can be increased.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=247)** To do this, select the EBS volume, click Actions, and then click Modify volume.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=255)** From here, you can change the type, and you can also change the size.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=261)** The size of EBS volumes can only be increased.
>
> **[4:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=264)** For example, I can set this to 40 gigs, but I cannot reduce to 29 gigs.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=269)** It shows an error message that the size of a volume can only be increased, not decreased.
>
> **[4:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=275)** Also notice there is no option to change the encryption status, so the encryption status can only be configured when you're creating the volume.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=284)** Now, let's go back.
>
> **[4:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=288)** This volume is now in an available state, so we can attach it to an EC2 instance.
>
> **[4:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=294)** To attach the volume, select it, click the Actions button and then click Attach volume.
>
> **[5:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=301)** Select your EC2 instance option, optionally change the device name, and then click Attach volume.
>
> **[5:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=309)** Now the volume has been attached to the EC2 instance.
>
> **[5:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=313)** Bear in mind that new volumes cannot be used straight away.
>
> **[5:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=316)** They need a file system.
>
> **[5:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=318)** Let's see how to create one by logging into a Windows EC2 instance.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=323)** Alright, I'm here on a Windows EC2 instance.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=326)** I'll first open Explorer, and from here we can see that this EC2 instance only has the C drive available.
>
> **[5:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=334)** Even though the additional volume has been attached, it is not available for use, and that's because it needs a file system.
>
> **[5:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=341)** So click the start menu and navigate to the Disk Management utility by searching for diskmgmt.
>
> **[5:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=350)** Over here we can see both the volumes, the 30 gig volume, which is the root volume or the C drive, and the one gig volume that we attached.
>
> **[5:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=359)** This volume is currently offline.
>
> **[6:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=362)** To make it online, right click and then click Online.
>
> **[6:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=367)** Next, you'll need to initialize the volume.
>
> **[6:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=370)** To do this right, click again and select Initialize Disk.
>
> **[6:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=375)** Then click OK.
>
> **[6:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=377)** Now the volume is online, but the space is unallocated, so we need to create a file system.
>
> **[6:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=383)** Right click on the volume and select New Simple Volume.
>
> **[6:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=388)** On the next step, select the size you would like to allocate.
>
> **[6:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=392)** Then assign a drive letter, and on the next step, select the file system format.
>
> **[6:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=399)** Then click Next and click Finish, and now the volume is ready.
>
> **[6:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=405)** If we go back to Explorer, we can see that the new volume is available for use.
>
> **[6:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=410)** Similarly on Linux EC2 instances, new volumes must be initialized before they can be used.
>
> **[6:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=416)** AWS has a document that outlines the steps you need to perform to initialize a new EBS volume.
>
> **[7:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=423)** Now try this in your AWS account.
>
> **[7:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=426)** Create a new EC2 instance and try to attach an additional volume.
>
> **[7:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=430)** Also, try to change the size of the volume.
>
> **[7:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-volumes?u=76281980&t=434)** Then, detach the additional volume and try to attach it to another EC2 instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (19), ebs (17), hdd (6), ami (4), aws (3)
> **Code Keywords:** let (6), type, (4), type. (2), delete (2), default, (1)
> **UI Navigation:** select the (7), scroll down (1), go to (1), click on (1)
> **Prerequisites:** configure (4), you'll need (1)
> **CLI Commands:** aws (3), make (1)
> **Analogies:** for example (3)
> **Cross-References:** in the last (1), go back to (1)
> **Speakers:** - [instructor] (1)

#### Advanced launch options: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=0)** - [Instructor] Now let's talk about the advanced options you can configure when launching an EC2 instance.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=5)** These options are available in the EC2 instance Launch Wizard.
>
> **[0:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=9)** So I'll start by clicking the launch instances button.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=13)** The first option we'll talk about is auto-assigned public IP.
>
> **[0:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=17)** You will find this under the network setting section.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=21)** Click the edit button and here you have the option to auto-assigned a public IP address to your EC2 instance.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=27)** You can set this to enable or disable.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=30)** A public IP address is required to connect to your EC2 instance from the internet.
>
> **[0:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=36)** The default value for this option depends on your subnet configuration.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=41)** So if you'd like to change the default value, you will need to reconfigure your subnet.
>
> **[0:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=46)** You can override this value at the time of launching an EC2 instance.
>
> **[0:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=51)** Now let's talk about some more advanced options available in the advanced details section.
>
> **[0:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=56)** These configuration options are not mandatory meaning you do not need to configure this to launch your instance.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=62)** The first option is request spot instances.
>
> **[1:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=65)** Spot instances are a purchasing option that allow you to request unused EC2 capacity for a cheaper price, so essentially, spot instances or EC2 instances available at a discounted price.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=79)** We'll talk more about spot instances and how you can request them in a later video in this course.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=85)** The next option is domain join directory.
>
> **[1:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=88)** This option allows you to join your EC2 instance to a directory defined in the AWS directory service.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=95)** The AWS directory service allows you to create a Microsoft active directory in the AWS cloud.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=101)** The next option is IAM instance profile.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=105)** This option allows you to attach an IAM instance profile, also known as an IAM role, to your EC2 instance.
>
> **[1:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=113)** By default, the EC2 instance does not have permissions to access other AWS services.
>
> **[1:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=119)** By attaching an instance profile, you can provide permissions to the instance to access other services.
>
> **[2:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=125)** You can attach an instance profile at the time of launching an instance and you can also do this after the instance has been launched.
>
> **[2:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=133)** We'll talk more about this in an upcoming video.
>
> **[2:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=136)** The next option is host name type.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=139)** This setting determines the type of host name that will be assigned to your EC2 instance.
>
> **[2:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=144)** Let's talk more about this.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=147)** The host name type determines if your EC2 instance will have IP name or resource name assigned as the host name.
>
> **[2:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=154)** So host names can be of two types, IP name and resource name.
>
> **[2:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=160)** Let's talk about IP name.
>
> **[2:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=162)** When you set the host name type as IP name, the private IPv4 address of the instance is included in its host name.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=170)** Here is the format in the us-east-1 region.
>
> **[2:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=173)** It is private-ipv4-address.ec2.internal, and here is an example.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=180)** Ip-private IPv4 address.ec2.internal.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=186)** In all other AWS regions, it has a different format.
>
> **[3:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=190)** The format is private-ipv4-address.region.compute.internal.
>
> **[3:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=197)** For example, IP dash, the private IPv4 address.eu-west-one.compute.internal.
>
> **[3:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=206)** When you set the host name type as resource name, the EC2 instance ID is included in the host name.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=212)** The format in us-east-1 region is ec2-instance-id.ec2.internal.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=219)** For example, the EC2 instance ID, it has a different format in all other AWS regions.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=226)** It is ec2-instance-id.region.compute.internal.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=232)** For example, the EC2 instance-id.eu-west1.comput.internal.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=239)** The host name type you can select depends on your subnet configuration.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=244)** For example, if your subnet is IPv4 only or if it is a dual stack subnet, which means it supports both IPv4 four and IPv6, the host name type can be either IP name or resource name.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=258)** However, if your subnet is configured as IPv6 only, the host name will be resource name.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=265)** Let's look at this from the EC2 console.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=269)** Back over here, I'll click cancel and select the first EC2 instance.
>
> **[4:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=274)** This EC2 instance has the host name type set to IP name, so the host name is IP dash, the private IP address, dot region, which is us-east-2, dot compute, dot internal.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=289)** The second EC2 instance has the host name type set to resource name, so it is instance ID, followed by the region, dot compute, dot internal.
>
> **[5:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=302)** Now let's see how the subnet configuration influences your host name type.
>
> **[5:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=307)** I'll click launch instances again, scroll down to network settings and click edit.
>
> **[5:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=316)** From here, I'll select a VPC, and then I'll select an IPv4 only subnet.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=323)** This subnet here is IPv4 only.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=326)** With this subnet selected, when I scroll down, I can configure the host name type as IP name or resource name.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=336)** Now I'll change the subnet type to IPv6 only.
>
> **[5:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=341)** With an IPv6 only subnet, the host name is set to resource name.
>
> **[5:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=348)** So to summarize, the host name type can be IP name or resource name.
>
> **[5:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=353)** For IPv4 only or dual stack subnets, you can choose from either of the two.
>
> **[5:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=358)** For IPv6 only subnets, it is set to resource name.
>
> **[6:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=363)** The next option is DNS host name.
>
> **[6:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=366)** This setting determines whether your EC2 instances host name will result to an IPv4 address, an IPv6 address or both.
>
> **[6:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=375)** And this, again, depends on your subnet configuration.
>
> **[6:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=379)** The first option allows DNS request for the IP name to resolve to the private IPv4 address.
>
> **[6:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=387)** The second option allows DNS request for the resource name to resolve to the private IPv4 address.
>
> **[6:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=393)** And the third option allows DNS request for the resource name to resolve to the IPv6 address.
>
> **[6:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=400)** Right now I have an IPv6 subnet selected, so I'm able to use the third option.
>
> **[6:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=405)** If I change the subnet to an IPv4 only subnet, I'll be able to use the first two options.
>
> **[6:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=413)** So the DNS host name setting determines whether your EC2 instances host name will resolve to an IPv4 address, an IPv6 address, or both.
>
> **[7:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=424)** The next option is instance auto recovery.
>
> **[7:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=428)** With this option, your EC2 instance will be automatically recovered if it fails any of the system status checks.
>
> **[7:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=435)** An instance becomes unreachable when the underlying physical hardware fails, or if there is a problem that requires AWS involvement to repair.
>
> **[7:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=444)** In such situations, the instance is automatically recovered.
>
> **[7:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=449)** The next option is shut down behavior.
>
> **[7:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=452)** This setting determines what happens to the EC2 instance when you issue a shutdown command from within the operating system.
>
> **[7:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=460)** Will the EC2 instance stop or terminate when you shut down the instance from within the operating system?
>
> **[7:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=467)** For example, when you click the start menu in a Windows computer and issue the shutdown command.
>
> **[7:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=473)** The next option is about hibernate behavior.
>
> **[7:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=476)** Hibernation causes the state of the EC2 instance to be saved.
>
> **[8:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=480)** So when you restart the instance, it is restored to its previous state.
>
> **[8:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=485)** This is different from stopping and starting your EC2 instance, which causes the instance to lose its state.
>
> **[8:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=492)** With hibernation enabled, your instance will restore to the previous state.
>
> **[8:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=497)** An important thing to bear in mind is that the hibernation setting can only be configured at instance launch time.
>
> **[8:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=504)** If this option is not enabled here, you will not be able to hibernate your EC2 instance.
>
> **[8:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=510)** The next two options are similar, termination protection and stop protection.
>
> **[8:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=515)** When termination protection is enabled, the instance cannot be terminated unless protection is disabled.
>
> **[8:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=521)** As you can imagine, this option can be very useful for mission critical instances.
>
> **[8:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=527)** With stop protection enabled, the instance cannot be stopped unless the protection is disabled.
>
> **[8:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=533)** The next option is detailed CloudWatch monitoring.
>
> **[8:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=537)** By default, basic monitoring is automatically enabled and it collects usage metrics at five minute intervals.
>
> **[9:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=544)** With detailed monitoring, metrics are collected at one minute intervals and there is an additional charge to this.
>
> **[9:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=552)** The next option is Elastic GPU.
>
> **[9:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=554)** This is related to Amazon Elastic Graphics.
>
> **[9:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=558)** Amazon Elastic Graphics provides low-cost graphics acceleration for Windows instances.
>
> **[9:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=564)** AWS does have a separate family of instances for graphic intensive workloads, but they can be quite expensive.
>
> **[9:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=571)** Instead, for workloads that only require a small amount of additional graphics acceleration, the Elastic GPU option is a good choice.
>
> **[9:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=580)** This option only works with Windows AMIs.
>
> **[9:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=584)** So if you try to use this option without a Windows AMI, you will see an error message.
>
> **[9:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=590)** I'll set this back to select.
>
> **[9:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=593)** The next option is Elastic Inference.
>
> **[9:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=595)** This option allows you to add accelerators for deep learning inference workloads and these are available in different sizes.
>
> **[10:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=604)** You can select the type of accelerator and here, you can see the associated memory.
>
> **[10:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-1?u=76281980&t=610)** There are some more options available in the screen that you can configure, and we'll talk about these in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (27), aws (8), dns (5), iam (3), gpu (2)
> **Code Keywords:** private (8), let (6), public (3), default, (2), type. (2)
> **CLI Commands:** aws (8), find (1)
> **Definitions:** is a  (3), is an  (2), known as (1)
> **Analogies:** for example (5), imagine (1)
> **UI Navigation:** select the (2), scroll down (2)
> **Prerequisites:** configure (4)
> **Cross-References:** in the next (1)

#### Advanced launch options: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=0)** - [Instructor] Now let's talk about the remaining options available in the advanced details section.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=4)** Starting with credit specification, the credit specification option only applies to T2, T3, T3a and T4g instances.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=16)** If you try to launch any other instance type the credit specification option will not be available.
>
> **[0:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=22)** So it only applies to these instance types and they're called as burstable performance instances.
>
> **[0:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=29)** These instances belong to the general purpose instance family, and they're designed for workloads that do not consistently need high CPU performance.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=38)** Examples include web servers and small databases that have a fairly average utilization and do not consistently need high CPU.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=47)** They're called burstable instances because they provide a baseline level of CPU performance with the ability to burst above the baseline if required.
>
> **[0:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=58)** The baseline performance for burstable instances is described in the AWS documentation.
>
> **[1:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=64)** Here we have the different instance types and here is their baseline utilization per vCPU, for example, for a t2 micro instance, the baseline performance is 10% per vCPU,.
>
> **[1:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=78)** When the instance utilization stays below the baseline, it earns CPU credits per hour.
>
> **[1:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=84)** These credits can be used to burst above the baseline if required like when the server experiences heavy utilization so it is CPU credits that determine if burstable instances are allowed to burst above the baseline CPU level.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=99)** These instances can be configured in one of two modes, standard and unlimited.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=106)** When configured in the standard mode, if the instance bursts above the baseline CPU level, it first uses the accrued credits.
>
> **[1:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=114)** When it runs out of accrued credits, it gradually comes down to the baseline CPU level and cannot burst above the baseline until it accrues more credits.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=123)** As you can imagine, there could be situations where this is not ideal.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=128)** The instance may need more CPU power, but being in the standard mode, it cannot burst above the baseline and for such use cases, you can use the unlimited mode.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=139)** When configured in the unlimited mode, if the instance bursts above the baseline CPU level, it first uses the accrued credits.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=147)** When it runs out of accrued credits, it uses surplus credits to burst.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=151)** In other words, it borrows credits.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=155)** When its performance falls below the baseline it uses the credits it earns to pay down the surplus it borrowed.
>
> **[2:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=162)** This mechanism allows the EC2 service to average the CPU utilization over a 24 hour period.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=170)** If the 24 hour average is above the baseline, additional charges are applied.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=176)** By using the unlimited mode, you are assured that your EC2 instance will be able to burst above the baseline even if it runs out of CPU credits.
>
> **[3:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=185)** If your application consistently requires high CPU, it is recommended to use fixed performance instances instead of burstable instances.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=195)** The next setting is placement group.
>
> **[3:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=198)** This setting allows you to influence the placement of instances on the underlying hardware.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=203)** Normally, when you launch multiple EC2 instances, you are not telling AWS how they should be placed on the underlying hardware, but with placement groups you can tell AWS to place your instances close to each other in a single availability zone to achieve low latency or to spread your instances across the underlying hardware to reduce correlated failures.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=226)** We'll talk more about this in an upcoming video.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=229)** The next option is EBS optimized instance.
>
> **[3:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=233)** Some instance types allow for dedicated capacity for EBS input output resulting in improved EBS performance.
>
> **[4:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=242)** An important thing to be aware of is that EC2 instances and EBS volumes are hosted on distinct underlying hardware.
>
> **[4:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=250)** This means they do not share the hardware and there is a connection between EC2 instances and the EBS volumes.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=258)** Sometimes the connection can become a performance bottleneck.
>
> **[4:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=262)** By using an EBS optimized instance, you can get dedicated throughput for your application but one thing to be aware of is that this option is only supported with certain instance types.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=276)** The next option is capacity reservation.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=279)** Capacity reservation, just like it sounds, allows you to reserve EC2 capacity.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=284)** Sometimes it is possible that AWS may not be able to launch your EC2 instance because there is no available capacity.
>
> **[4:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=292)** You will normally not see this behavior when you're launching a few instances, but if you're launching quite a lot of instances, it is possible that AWS may not be able to fulfill your request.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=304)** Using capacity reservation will ensure that you have access to EC2 capacity.
>
> **[5:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=309)** We'll talk more about this in an upcoming video.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=312)** The next option is tenancy.
>
> **[5:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=315)** This option will determine if your instance will be launched on shared or dedicated hardware.
>
> **[5:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=321)** There are two options available for dedicated tenancy.
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=324)** Dedicated instances and dedicated hosts.
>
> **[5:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=328)** We'll explore the details and differences in an upcoming video.
>
> **[5:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=333)** The next option is RAM disk ID, a RAM disk is a virtual disk created in the memory or the RAM of an EC2 instance.
>
> **[5:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=342)** By configuring the RAM disk ID, you can specify the type and size of the RAM disk to be used for the instance.
>
> **[5:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=350)** If you'd like to use a RAM disk to launch an EC2 instance, it can be specified here.
>
> **[5:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=355)** The next option is kernel ID.
>
> **[5:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=358)** If you'd like to specify a kernel ID for your EC2 instance, it can be provided here.
>
> **[6:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=364)** The next option is Nitro Enclave.
>
> **[6:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=367)** This feature allows you to create isolated execution environments called enclaves.
>
> **[6:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=373)** Because they're isolated, they can be used for handling sensitive data such as PII, also known as personally identifiable information such as financial and intellectual property data.
>
> **[6:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=385)** This option is only supported with certain instance types.
>
> **[6:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=390)** The next option is license configuration.
>
> **[6:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=393)** AWS has a tool called License Manager that allows you to manage software licenses for products such as Microsoft and Oracle.
>
> **[6:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=401)** Customers use it to track and control license usage.
>
> **[6:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=405)** The license manager configuration can be associated here to manage licenses for software running on your EC2 instance.
>
> **[6:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=413)** The next few options relate to EC2 metadata.
>
> **[6:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=416)** EC2 metadata is data about your EC2 instance.
>
> **[7:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=420)** It includes information such as AMI ID, instance ID, hostname MAC address, IP address, security groups, and more.
>
> **[7:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=430)** Essentially, it is data about your EC2 instance.
>
> **[7:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=434)** The metadata accessible option can be used to enable or disable access to the metadata.
>
> **[7:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=440)** The metadata is available in two versions, version one and version two, and you can control the version from here.
>
> **[7:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=448)** The next option is metadata response hop limit, hop limit only applies if you use metadata version two.
>
> **[7:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=456)** Version two uses a token based authentication and it uses session tokens that determine how long a session can last.
>
> **[7:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=465)** When creating a session token, the hop limit, also known as TTL, or time to live is set to one by default.
>
> **[7:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=473)** Certain use cases may need a higher hop limit value and it can be configured here.
>
> **[7:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=479)** Don't worry if any of these doesn't make sense to you right now.
>
> **[8:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=482)** We'll talk more about metadata in an upcoming video.
>
> **[8:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=486)** The next option is allow tags in metadata.
>
> **[8:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=490)** This option determines if your EC2 instance tags will be available in the metadata.
>
> **[8:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=495)** The last setting here is user data.
>
> **[8:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=498)** It allows you to run custom scripts when an EC2 instance is being launched.
>
> **[8:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=503)** You can use it for reasons like installing software or starting a service when an instance is being launched.
>
> **[8:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=510)** As you can see, there are so many options to configure your EC2 instance.
>
> **[8:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=515)** Now, try some of these in your AWS account.
>
> **[8:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/advanced-launch-options-part-2?u=76281980&t=518)** For example, try to set termination protection or stop protection and try to terminate or stop your EC2 instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (20), cpu (13), aws (7), ebs (6), ram (6)
> **CLI Commands:** aws (7), make (1)
> **Analogies:** such as (4), for example (2), imagine (1), just like (1)
> **Definitions:** is a  (2), known as (2), in other words (1)
> **Documentation:** specification (3)
> **Code Keywords:** let (1), default. (1)
> **Code Identifiers:** vcpu (2)
> **Warnings:** be aware (2)

#### EC2 user data
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=1)** - [Instructor] Now let's talk about EC2 user data.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=4)** User data can be used to run scripts at instance startup.
>
> **[0:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=7)** That is when the instance is booting up.
>
> **[0:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=10)** It can be used to automate a variety of configuration tasks, and by default it is only executed when the instance is first launched.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=19)** User data can be used to configure common tasks such as updating packages on the instance, installing a web server at launch time, installing an agent, backing up logs, and updating device configuration.
>
> **[0:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=33)** When configuring user data on Linux AMIs, it can be in the form of shell scripts or cloud init directives.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=40)** Shell scripts are run by the shell, which is the command line interpreter.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=45)** Cloud Init is a package that allows you to initialize and configure cloud instances, such as EC2 instances.
>
> **[0:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=52)** It is an open source package and it is also used to configure virtual machines of other cloud computing providers.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=59)** Cloud Init is commonly preferred for complex configuration involving multiple tasks.
>
> **[1:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=65)** An important thing to keep in mind is that user data scripts do not run interactively.
>
> **[1:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=71)** So if your script requires user input like providing a yes or no choice it needs to be coded into the script because you cannot interact with the script when it is running on the instance.
>
> **[1:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=82)** User data on Linux AMIs is executed as the root user so you do not need to include sudo in your commands.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=90)** When configuring user data on Windows AMIs, it can be provided as batch commands or as PowerShell commands.
>
> **[1:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=97)** And the user data must be enclosed within a tag.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=101)** If you're using batch commands the user data must be enclosed in the script tag.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=105)** And if you're using PowerShell commands the user data must be enclosed in the PowerShell tag.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=111)** Now let's go to the EC2 console and configure user data.
>
> **[1:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=117)** We're going to create two EC2 instances, a Windows and a Linux EC2 instance.
>
> **[2:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=121)** And on both the instances we're going to use user data to install a web server.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=127)** Let's start with the Windows instance.
>
> **[2:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=131)** I'll start by providing a name.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=134)** Next, select a Windows AMI.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=137)** The exact Windows operating system type does not matter so feel free to select any Windows AMI.
>
> **[2:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=145)** Next, select a required instance type.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=147)** I'm selecting t2.medium which provides two VCPUs and four gigs of RAM.
>
> **[2:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=153)** Next, associate a key pair and also associate a security group.
>
> **[2:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=158)** Make sure the security group allows inbound http traffic so we can test the web service.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=166)** Scroll down to the advanced details section and then scroll down to user data.
>
> **[2:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=172)** I'm going to use a PowerShell script to install the web server.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=176)** Because this is a PowerShell script, it is enclosed in the PowerShell tag.
>
> **[3:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=181)** The first command Import-Module ServerManager imports the server manager module to manage server roles and features.
>
> **[3:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=190)** The next command Add-WindowsFeature Web-Server adds the web server feature to the EC2 instance which installs the necessary components to host a web server on the machine.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=201)** The next command that is Start-Service, starts the Windows process activation service which is responsible for handling HTTP requests.
>
> **[3:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=210)** The next command creates a file called index.html in the required path.
>
> **[3:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=215)** This is the default directory of the web server and the next command sets the content of the index.html file.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=223)** As you can see we are using HTML tags such as HTML body and heading one.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=231)** When the script runs it should install a simple webpage that says "Hello world".
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=237)** Next, I'll launch the EC2 instance.
>
> **[4:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=240)** Now let's repeat the same process for a Linux EC2 instance.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=244)** I'll click launch instances, give it a name.
>
> **[4:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=251)** Next, select a Linux AMI.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=254)** In this case, I'm using the Amazon Linux AMI.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=257)** Select an instance type, t2.micro should be okay for the Linux instance.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=261)** Select a key pair.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=265)** Then select a security group that allows inbound HTTP access.
>
> **[4:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=270)** Scroll down to the advanced detail section and then to user data.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=276)** Here's the user data for the Linux EC2 instance.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=279)** It starts with the pound symbol followed by an exclamation and the path to the interpreter.
>
> **[4:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=285)** The next command that is yum update will update the packages on the Linux instance.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=289)** We learned earlier that you cannot interact with the script, so any user choices like a yes or no must be coded into the script like you can see here.
>
> **[4:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=299)** The next command will install the httpd service on the Linux instance.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=304)** The next command will write some text to a file called index.html in the route directory of the web server.
>
> **[5:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=311)** And as you can see, again we are using HTML tags, HTML body, and heading one.
>
> **[5:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=317)** And when the script runs it should install a simple webpage that says "Hello world".
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=324)** The next command will start the httpd service, and the last command chkconfig httpd on will ensure that the service automatically starts when the instance is rebooted.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=336)** Lastly, I'll click the launch instance button.
>
> **[5:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=340)** We'll go back to all instances, and let's copy the public IP address off the Windows instance to check if the web service is running.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=349)** Copy the public IP address and try to access it from a new browser tab.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=354)** And we can see the webpage that says "Hello world."
>
> **[5:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=358)** Now let's try the same thing for the Linux EC2 instance.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=361)** Back over here, select your Linux instance.
>
> **[6:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=364)** And this time instead of copying the public IP address we'll copy the public DNS name.
>
> **[6:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=369)** We should get the same result because the public DNS name should resolve to the public IP address.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=376)** So copy the public DNS name, open a new browser tab, and try to access it.
>
> **[6:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=381)** And straightaway we can see the same webpage.
>
> **[6:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=384)** So as you can see without logging into the instance we have configured a web server.
>
> **[6:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=390)** Back to the EC2 console.
>
> **[6:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=391)** If you'd like to see the user data that was supplied to the instance, you can do so by selecting the instance, going to the actions button, instant settings and then click edit user data.
>
> **[6:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=404)** And here is the user data we supplied.
>
> **[6:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=406)** We cannot edit it because the instance needs to be stopped before you can do so.
>
> **[6:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=411)** As you can imagine user data can be so useful to automate instance configuration quickly and in a scalable way.
>
> **[6:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=418)** Now, take a moment to try this in your AWS account.
>
> **[7:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/ec2-user-data?u=76281980&t=421)** Try to use the user data to install a web server on both Windows and Lenox EC2 instances.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (12), ami (4), html (4), dns (3), http (2)
> **Code Keywords:** public (7), let (6), module (2), type. (1), case, (1)
> **Prerequisites:** install (6), configure (4)
> **Tools:** powershell (6), command line (1)
> **CLI Commands:** sudo (1), make (1), yum (1), aws (1)
> **UI Navigation:** scroll down (3), go to (1)
> **Analogies:** such as (3), imagine (1)
> **File Paths:** index.html (3)

#### Connect to your EC2 instance
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=0)** - [Instructor] Now let's understand how to connect to an EC2 instance.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=3)** We're going to connect to two types of EC2 instances: a Windows and a Linux EC2 instance.
>
> **[0:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=9)** To follow along this video, you will need to launch two instances: a Windows and a Linux instance.
>
> **[0:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=15)** And the Linux instance is running the Amazon Linux AMI.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=19)** The way you connect to these instances will depend on the type of computer you're connecting from.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=24)** That is from a Windows computer or from a Linux or Mac computer.
>
> **[0:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=28)** First, let's understand how to connect to these from a Windows computer.
>
> **[0:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=33)** I'll begin by selecting the Windows EC2 instance and I'll copy the public IP address.
>
> **[0:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=39)** Next, I'll switch to a Windows computer.
>
> **[0:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=43)** From the Windows computer, you will need to use the Remote Desktop Connection utility.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=47)** So open the start menu and click Remote Desktop Connection.
>
> **[0:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=52)** Paste your public IP address and click connect.
>
> **[0:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=56)** The username and password required for this connection is available in the EC2 console.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=62)** Back over here, to obtain the username and password, select your EC2 instance.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=68)** Click connect, navigate to RDP client.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=72)** Click get password, then click upload private key file and point your browser to the private key and then click decrypt password.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=83)** Here's the password to log into the EC2 instances.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=87)** Bear in mind, this is the default password.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=90)** If you log in and change the password, you will need to connect with the new password.
>
> **[1:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=94)** So here's the password and here's the username.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=98)** Back to the Windows computer.
>
> **[1:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=100)** I'll type the username and password and then press OK.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=104)** When you try to connect, you will be presented with a certificate from the remote computer and you'll see a warning because the certificate is not issued by a trusted certifying authority.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=115)** I'll click yes to accept the connection and I'm logged into the Windows EC2 instance.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=122)** If you're unable to connect, it is likely that your security group does not allow the required inbound access.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=128)** For Windows EC2 instances, the security group should allow inbound RDP access or Remote Desktop Protocol access.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=135)** And for Linux EC2 instances, the security group should allow inbound SSH access.
>
> **[2:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=141)** So to connect to a Windows EC2 instance from a Windows computer, you'll need to use the Remote Desktop Connection utility.
>
> **[2:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=148)** Now let's understand how to connect to a Linux EC2 instance from a Windows computer.
>
> **[2:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=153)** I'll begin by closing this connection.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=156)** To connect to a Linux EC2 instance, you will need to use an SSH client like PuTTY.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=163)** The private key file that you download from the AWS console is in the PEM format and it cannot be used with PuTTY.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=170)** To use the private key file with PuTTY, it needs to be in the PPK format.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=175)** Let's go back to the EC2 console.
>
> **[2:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=177)** So back over here, I'll click cancel, and navigate to key pairs on the left navigation pane and click create key pair.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=187)** And as you can see from here, the default download format is .pem.
>
> **[3:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=191)** The PEM format cannot be used with PuTTY.
>
> **[3:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=194)** To use the private key file with PuTTY, you will need to convert it to PPK.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=199)** Let's see how to do that.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=201)** Back over here to the Windows computer, to convert from PEM to PPK format, you will need to use PuTTYgen.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=207)** PuTTYgen is automatically installed when you install PuTTY.
>
> **[3:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=211)** So we'll open up PuTTYgen, click the load button and open your private key file in the PEM format.
>
> **[3:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=218)** I'll set the visibility to all files and select the private key in the PEM format.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=224)** The file has been imported.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=226)** Click OK and then click save private key.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=230)** You'll have the option to provide a password.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=232)** For now, I'll proceed without a password.
>
> **[3:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=234)** And now you can save the file in the PPK format.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=238)** I'll set the visibility to all files.
>
> **[4:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=242)** Click my PEM file so it loads the file name and just change the extension to PPK.
>
> **[4:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=250)** Then click save, and the private key file is now saved in the PPK format.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=255)** And we can verify this by going to the File Explorer.
>
> **[4:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=259)** Here we have the PEM file and the PPK file.
>
> **[4:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=262)** Now we can use this with PuTTY to log into the Linux EC2 instance.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=268)** Back to the EC2 console, I'll click cancel, click instances on the left navigation pane, select the Linux instance and copy its public IP address.
>
> **[4:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=278)** Back over here to the Windows computer, I'll open PuTTY.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=282)** And under the host name or IP address field, I'll paste the public IP address.
>
> **[4:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=288)** Next, we need to provide the private key file.
>
> **[4:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=290)** So we'll navigate to SSH, Auth, Credentials.
>
> **[4:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=295)** And here we can provide the private key file.
>
> **[4:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=298)** So click browse, select the private key file in the PPK format.
>
> **[5:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=303)** Click open and then click open again to initiate a connection.
>
> **[5:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=307)** Now you'll need to provide the username of the Linux instance.
>
> **[5:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=310)** For Amazon Linux AMI, the username is ec2-user.
>
> **[5:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=315)** If you're connecting to any other Linux AMI, such as Ubuntu or CentOS, the username is different, and you'll find this in the AWS documentation.
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=324)** So provide your username and press enter and you'll be logged into your EC2 instance.
>
> **[5:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=330)** Once again, if you're unable to connect, it is likely that your security group does not allow inbound SSH access.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=336)** Now let's understand how to connect from a Linux or Mac computer.
>
> **[5:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=340)** Back over here, let's first connect to the Windows EC2 instance from a Mac computer.
>
> **[5:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=346)** The steps remain the same if you try to connect from a Linux computer.
>
> **[5:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=350)** Select your EC2 instance and copy the public IP address.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=354)** To connect to a Windows EC2 instance from a Linux or a Mac computer, you will need a Remote Desktop Connection utility.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=361)** Here I already have the utility installed, so I'll start by adding a PC and I'll provide the public IP address and add it.
>
> **[6:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=370)** To initiate a connection, I'll double click to initiate a connection and now I'll need to provide the username and password.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=376)** So we'll follow the same steps again.
>
> **[6:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=378)** Back to the EC2 console.
>
> **[6:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=380)** I'll click connect, RDP client, then click get password.
>
> **[6:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=387)** Upload the private key file and click decrypt password.
>
> **[6:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=394)** Here's the password, I'll copy this.
>
> **[6:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=397)** Go back to my Mac computer and provide the username and password and click continue.
>
> **[6:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=403)** You'll be presented with a warning that the certificate cannot be verified.
>
> **[6:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=407)** I'll click continue and I'm logged into the EC2 instance.
>
> **[6:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=411)** So to connect to a Windows EC2 instance from Linux or Mac computer, you need to use a Remote Desktop Connection utility.
>
> **[6:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=418)** Now let's understand how to connect to a Linux EC2 instance.
>
> **[7:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=422)** Back to the EC2 console. I'll click cancel from here.
>
> **[7:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=426)** Select the Linux EC2 instance and copy its public IP address.
>
> **[7:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=430)** And to connect to the Linux instance from a Mac computer or from a Linux computer, you'll need to use a terminal.
>
> **[7:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=437)** Here I have a terminal.
>
> **[7:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=438)** I'm going to use this to log into the Linux EC2 instance.
>
> **[7:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=442)** The first step is to use the cd command and navigate to the folder where you have the key pair.
>
> **[7:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=448)** In my case, it is in the downloads folder.
>
> **[7:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=450)** Now you can use the SSH command to log into the Linux EC2 instance.
>
> **[7:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=454)** So the command is ssh, followed by the username, which is ec2-user for Amazon Linux AMI at the public IP address we copied.
>
> **[7:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=465)** And now we need to provide the private key file name.
>
> **[7:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=468)** And to do that, we'll use the -i switch, and then the private key file name and press enter.
>
> **[7:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=475)** So once again, the command is ssh ec2-user at the public IP address -i and the private key file name.
>
> **[8:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=485)** Press enter.
>
> **[8:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=486)** You'll see a message if you want to continue connecting.
>
> **[8:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=488)** I'm going to say yes, and it presents an error message.
>
> **[8:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=492)** It says the private key file is unprotected, and this is because the permissions on the file are too open.
>
> **[8:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=498)** These permissions allow anyone to read the file, which is why the server rejects the connection.
>
> **[8:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=504)** We'll need to change the permissions of the file and it's easy to do so.
>
> **[8:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=508)** We'll use the command chmod 400 and then the file name and that should fix the problem.
>
> **[8:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=516)** When you specify the permissions as 400, only the owner of the file has read permission.
>
> **[8:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=521)** Other users have no permissions.
>
> **[8:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=524)** So the first digit represents the permissions for the file owner.
>
> **[8:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=527)** The second digit represents the permissions for the files group and the third digit represents the permission for everyone else.
>
> **[8:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=534)** And four denotes read permission.
>
> **[8:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=537)** So with 400, we're setting the permissions on the file as read only just for the owner.
>
> **[9:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=543)** And now if we repeat the command, we should be able to log in.
>
> **[9:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=546)** So ssh username at public IP address -i and the private key file name.
>
> **[9:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=555)** And we're logged into the EC2 instance.
>
> **[9:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=558)** You can also log into Linux EC2 instances directly from the EC2 console.
>
> **[9:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=563)** Back over here, to log in from the EC2 console, select your Linux EC2 instance, click connect, and then go to EC2 Instance Connect.
>
> **[9:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=574)** From here, you can enter the username, which is ec2-user, and click connect and you will be connected to your Linux EC2 instance directly from the browser.
>
> **[9:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=585)** So as you've seen, the way you connect to an EC2 instance will depend on the type of computer you're connecting from.
>
> **[9:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=591)** If you're trying to connect to a Windows computer, you will need to use Remote Desktop Connection utility.
>
> **[9:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=596)** But if you're trying to connect to a Linux EC2 instance, you can use PuTTY on Windows or you can use a terminal program on a Linux or Mac computer.
>
> **[10:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=604)** And for Linux instances, you can also log in directly from the EC2 console.
>
> **[10:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=609)** Now take a moment to try this on your AWS account.
>
> **[10:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/connect-to-your-ec2-instance?u=76281980&t=613)** Try to log into a Windows and a Ubuntu Linux EC2 instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (39), ppk (8), pem (7), ssh (5), ami (4)
> **Code Keywords:** private (18), public (10), let (8), continue (3), from. (2)
> **CLI Commands:** ssh (8), aws (3), find (1), cd (1), chmod (1)
> **UI Navigation:** navigate to (4), select the (4), switch to (1), open the (1), go to (1)
> **Tools:** terminal (3), aws console (1)
> **Prerequisites:** you'll need (3), install (1)
> **Cross-References:** go back to (2)
> **Warnings:** warning (2)

#### Navigating the EC2 console
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=0)** - [Instructor] Now let's look at some important information available on the EC2 console, and some of the actions you can perform from here.
>
> **[0:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=7)** Once you're in the EC2 console, select a running EC2 instance and navigate to the Details tab.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=13)** Here, you will find important information, such as the EC2 Instance ID, the public IPv4 address, private IPv4 address, the public and private IPv4 DNS name, the state of the EC2 instance, hostname of the instance, the instance type, in this case, t2.micro, the VPC and subnet IDs, the AMI ID that was used to launch the EC2 instance, the platform of the instance, and the status of stop protection and termination protection, the status of detailed monitoring, which in this case is disabled.
>
> **[0:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=49)** Down here, we also have the launch time.
>
> **[0:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=52)** So this instance has been running for about 15 minutes, and scrolling down, you will see some more information, such as the key pair associated with this EC2 instance, the credit specification, and the owner of the EC2 instance.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=67)** Scrolling back to the top, under the Security tab, you will see the security groups associated with the EC2 instance.
>
> **[1:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=74)** This instance has two security groups associated with it, and here, we can see the aggregated inbound and outbound rules.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=83)** Under the Networking tab, you will see the network adapters associated with the instance.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=87)** This EC2 instance only has a single adapter associated with it, and here, we can see the public and private IPv4 addresses.
>
> **[1:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=96)** Under the Storage section, you will see the volumes associated with the instance.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=101)** This EC2 instance has two volumes associated with it.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=104)** The primary volume or the root volume is eight gigs in size, and the additional volume is one gig in size.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=111)** Under the status checks tab, you will find checks used by AWS to detect problems with the EC2 instance, and there are two types of checks, system status checks and instance status checks.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=123)** System status checks are used by AWS to monitor the underlying system on which the EC2 instance runs.
>
> **[2:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=130)** It detects problems with the underlying hardware that require AWS involvement to repair.
>
> **[2:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=136)** Examples of these problems include loss of power, network connectivity, and software or hardware issues on the physical host on which the EC2 instance is running.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=147)** Instance status checks monitor the software and network configuration of your individual EC2 instance.
>
> **[2:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=153)** Examples of these problems include incorrect network configuration, exhausted memory, and corrupted file system.
>
> **[2:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=160)** These problems must be addressed by the user, and these can be done by rebooting the EC2 instance, or by changing the configuration of the instance.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=170)** These status checks are performed automatically by AWS every minute, and these are built into EC2, so these cannot be disabled or deleted.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=179)** Under the monitoring tab, you will find graphs that monitor the usage of the EC2 instance in terms of CPU utilization, network usage, disk usage, and in case of burstable instances, like t2 and t3 instances, you will also see graphs for CPU credit balance and CPU credit usage.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=199)** At the top here, you do have the option to change the time period for the graphs, and you also have the option to enable detailed monitoring, which monitors your EC2 instances every one minute.
>
> **[3:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=211)** By default, basic monitoring is turned on, which monitors your EC2 instances every five minutes.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=217)** And then you have the Tags section, that shows the tags associated with the EC2 instance.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=223)** In this case, I have two tags, a name tag, which can be seen here, and another tag for the owner of the EC2 instance.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=232)** Now let's look at some of the options available at the top.
>
> **[3:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=235)** The Connect button will provide information about how you can connect to the EC2 instance.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=239)** So with the EC2 instance selected, click the Connect button, and under SSH client, you will see the command that you need to use to log in to the EC2 instance.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=249)** In case of Linux instances, you can also log in directly from the browser using EC2 Instance Connect.
>
> **[4:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=256)** We talked about this in a previous video.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=258)** So you would provide your EC2 instance username and click Connect to connect from the browser.
>
> **[4:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=264)** I'll cancel from here, select the EC2 instance, and the Instance state button can be used to change the state of the instance.
>
> **[4:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=273)** For example, you can stop the instance, reboot the instance, and terminate the instance.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=279)** The hibernate option is available only if you enable hibernation at the time of launching the EC2 instance.
>
> **[4:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=285)** Now let's look at some of the options available under the Actions button.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=289)** So with the EC2 instance selected, click the Actions button.
>
> **[4:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=293)** Over here, you have the same option, Connect.
>
> **[4:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=296)** You also have the option to View details.
>
> **[4:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=298)** These are the same details we saw earlier in this panel at the bottom.
>
> **[5:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=303)** You also have the option to change the instance state, and under Instance settings, you can change the options you configured at the time of launching the EC2 instance.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=312)** For example, you have the option to attach to an Auto Scaling Group.
>
> **[5:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=317)** Auto Scaling is a feature of AWS that allows you to build scalable applications in the AWS cloud.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=323)** If you'd like to know more about this, check the course titled EC2 Load Balancers in the LinkedIn Learning Library.
>
> **[5:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=330)** Some other options you can configure here include termination protection, stop protection, shutdown behavior, auto recovery behavior, in case of burstable instances, you can change the credit specification, and you also have options to edit user data, allow tags and metadata, and manage the tags of the EC2 instance.
>
> **[5:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=351)** Some of these options are unavailable because they can only be used when the EC2 instance is stopped, and this option here, Change Nitro Enclaves, is only available with certain EC2 instance types.
>
> **[6:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=363)** The next option here is Networking.
>
> **[6:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=365)** This allows you to perform network related actions, like attaching or detaching network interfaces.
>
> **[6:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=371)** You can also manage your IP addresses, and you also have the option to change source or destination check.
>
> **[6:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=378)** Source or destination check is automatically turned on for every EC2 instance, and it ensures that the instance is either the source or the destination of any traffic it receives.
>
> **[6:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=389)** This is turned on by default.
>
> **[6:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=391)** However, you will need to turn off source or destination check if your instance is running services such as NAT, or network address translation, or firewalls, because those type of instances must be able to send or receive traffic when the source or destination is not itself.
>
> **[6:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=408)** So by default, source/destination check is automatically turned on.
>
> **[6:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=412)** However, if you're running special services on your EC2 instance, such as NAT or firewall, you can turn it off by using this option.
>
> **[7:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=421)** The next option is to manage security.
>
> **[7:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=423)** From here, you can change the security groups associated with your EC2 instance, and you can also modify the IAM role, or the IAM policy, and you can also modify the IAM role associated with your EC2 instance.
>
> **[7:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=437)** The next option is Image and templates.
>
> **[7:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=439)** It allows you to create an image or an AMI from your EC2 instance.
>
> **[7:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=443)** You can also create a template from the currently running EC2 instance, and you can launch more instances like the currently running EC2 instance.
>
> **[7:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=452)** The last option is Monitor and troubleshoot, and here, you have an important option called Get system log.
>
> **[7:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=459)** This option can be very useful for troubleshooting purposes.
>
> **[7:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=463)** For example, if your EC2 instance isn't responding, and you need to see what happened on the EC2 instance, you can click Get system log to get a log for your EC2 instance.
>
> **[7:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=473)** As you can imagine, this information can be very useful for troubleshooting purposes.
>
> **[7:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=479)** I'll cancel from here and go back to the EC2 console.
>
> **[8:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=483)** I'll select the EC2 instance, click Actions, go to Monitor and troubleshoot, and the next option is Get Instance screenshot.
>
> **[8:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=491)** This option again can be very useful for troubleshooting purposes, especially if your instance isn't responding and you would like to see the state of the EC2 instance.
>
> **[8:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=501)** So this will take a screenshot of the EC2 instance.
>
> **[8:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=506)** I'll cancel from here, and go to the Actions menu again.
>
> **[8:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=510)** Under Monitor and troubleshoot, you have some more options, like being able to turn on detailed monitoring.
>
> **[8:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=516)** If you have any alarms configured on your EC2 instance using the CloudWatch service, you can turn it on from here.
>
> **[8:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=522)** If you'd like to get serial console access to the EC2 instance, that can be done from here, and you also have the option to replace the root volume of the EC2 instance.
>
> **[8:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=532)** You can also use Fleet Manager.
>
> **[8:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=534)** This is a feature of the AWS Systems Manager service that allows you to view the health and perform management tasks on a fleet of EC2 instances.
>
> **[9:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=543)** So as you can see, there is a lot of useful information available in the EC2 console.
>
> **[9:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-console?u=76281980&t=548)** In the next video, we'll explore the EC2 dashboard.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (55), aws (7), cpu (3), iam (3), ami (2)
> **Code Keywords:** let (3), public (3), private (3), case, (2), default, (2)
> **CLI Commands:** aws (7), find (3), ssh (1)
> **Analogies:** such as (4), for example (3), imagine (1)
> **UI Navigation:** select the (2), go to (2), navigate to (1)
> **Cross-References:** we talked about (1), previous video (1), go back to (1), in the next (1)
> **Definitions:** is a  (3)
> **Warnings:** troubleshoot (3)

#### Navigating the EC2 dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=0)** - [Instructor] Now let's look at important information available on the EC2 dashboard.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=4)** Once you're in the EC2 console, you can access the EC2 dashboard by clicking the link on the left navigation pane.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=11)** Here you can see the count of important resource types, such as your running EC2 instances, dedicated hosts, EC2 instances having any status, such as running, stopped, and hibernated, load balancers, security groups, EBS volumes, auto-scaling groups, elastic IPs, key pairs, placement groups, and EBS snapshots.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=34)** Down here, we have information about the service health in the currently selected region, so the service is operating normally.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=41)** And down here, we can also see the availability zones.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=45)** On the top right hand corner, you can see the account attributes, such as the supported platforms, which can be EC2 Classic or EC2 VPC, the default VPC in this region, and some other settings that you can enable at the region or account level.
>
> **[1:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=60)** For example, settings for EBS encryption, availability zones and local zones, and EC2 serial console.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=68)** This option here allows you to manage serial console access.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=72)** Serial console is a method of accessing the device by using a serial cable and attaching it directly to the device.
>
> **[1:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=80)** Because it does not require IP connectivity, since you're using a serial cable, it is commonly used for troubleshooting.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=85)** The EC2 serial console option you see here is a virtual serial connection.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=92)** You also have the option to change the default credit specification.
>
> **[1:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=96)** This only applies to burstable EC2 instances, and you also have the option to change your participation in console experiments.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=104)** Scrolling down, you have some links to documents and some additional information, such as forums, pricing and contact us.
>
> **[1:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=112)** On the left hand pane is an important option called EC2 global view.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=116)** This tool gives you a summarized view of your EC2 resources across all regions.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=122)** So here under Region Explorer, I can see that I've got 17 enabled regions, 17 subnets in four regions, one EC2 instance in one region, the number of security groups, VPCs and volumes.
>
> **[2:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=138)** As you can imagine, without this information, if you wanted to consolidate your resources, you would have to switch between regions.
>
> **[2:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=146)** Down here, you also have the resource count per region.
>
> **[2:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=150)** So for the different regions, you have the count of EC2 instances, VPCs, subnets, security groups, volumes, and auto-scaling groups.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=161)** At the top here, you also have the option to perform a global search using the resource ID or tag or region name.
>
> **[2:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=168)** And you can also download your resources in a CSV file.
>
> **[2:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=174)** Back over here, the event section contains information about events, such as instance reboot, instance start or stop, and instance retirement.
>
> **[3:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=183)** You also have the option to view tags used on your EC2 instances and other resources, and you also have the option to view limits for different types of resources.
>
> **[3:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=194)** For example, you can see the name of the limit, the limit type, and the current limit applied on your AWS account.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=201)** As an example, let's look at VPC limits.
>
> **[3:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=204)** So I'll change the category to networking.
>
> **[3:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=206)** And down here, we have the option to view the EC2 limit.
>
> **[3:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=210)** So in my account, I have a limit of five VPCs in a region.
>
> **[3:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=215)** If you'd like to increase your limit, you can click Request Limit Increase, and this will allow you to open a case with support to get the limit increased for that resource type.
>
> **[3:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=225)** And you also have the option to calculate VCPU limit.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=230)** This option allows you to identify the current limit for VCPUs on your AWS account.
>
> **[3:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=235)** For example, let's say we have a workload that requires 24 VCPUs, and let's say we need to use T3 instance type for the workload.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=245)** So we can add the instance type here.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=247)** Let's say we would like to use T3 2X large.
>
> **[4:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=251)** A T3 2X large instance type provides eight VCPUs, and we need three of these instances for 24 VCPUs.
>
> **[4:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=260)** And we can see that we are currently in the allowed limit.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=265)** This means the request can be fulfilled within the currently allowed limit.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=269)** So as you can see, there is a lot of important information in the EC2 dashboard.
>
> **[4:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=274)** Now take a moment to try this yourself.
>
> **[4:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/navigating-the-ec2-dashboard?u=76281980&t=275)** Play around with the different options available in the EC2 dashboard, and also review the limits for different resource types in your AWS account.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (18), ebs (3), vpc (3), aws (3), csv (1)
> **Code Keywords:** let (5), require (1), switch (1), type, (1), type. (1)
> **Analogies:** such as (5), for example (3), imagine (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** aws (3)
> **Documentation:** specification (1)
> **Speakers:** - [instructor] (1)


### 2. EC2 Deep Dive

#### EBS snapshots
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=0)** - [Instructor] In this section of the course, we'll deep dive into some interesting concepts starting with EBS Snapshots.
>
> **[0:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=7)** We spoke about EBS Snapshots in an earlier video about AMIs.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=11)** Now, let's explore this in detail.
>
> **[0:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=14)** EBS Snapshots are a mechanism to backup data on EBS volumes.
>
> **[0:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=20)** EBS Snapshots are stored in a service called Amazon S3.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=24)** Amazon S3, or Simple Storage Service, is a storage service from AWS.
>
> **[0:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=29)** So when you create a snapshot from an EBS volume, that snapshot is stored in Amazon S3, EBS Snapshots can be restored back as EBS volumes.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=41)** When you restore an EBS Snapshot as an EBS volume, the new volume begins as an exact replica of the original volume that was used to create the snapshot.
>
> **[0:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=51)** Snapshots are incremental.
>
> **[0:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=54)** This means when you take multiple snapshots of an EBS volume, only the blocks that have changed since the most recent snapshot are saved.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=63)** Let's understand this in detail with the help of an AWS document.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=68)** I'm here at an AWS document that explains incremental snapshots.
>
> **[1:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=73)** Here we have a volume, which is 10 gigs in size, and we take the first snapshot of this volume known as snapshot A.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=81)** Because this is the first snapshot, it will be a full snapshot of the EBS volume and it will be 10 gigs in size.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=89)** Now, let's say after snapshot A was taken, four gigs of data have changed on the volume.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=95)** Now, when you take a snapshot known as snapshot B, it will only contain the data that has changed on the EBS volume.
>
> **[1:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=102)** So snapshot B will only be four gigs in size.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=106)** However, to restore snapshot B into an EBS volume, it will also need the remaining six gigs of data So for the remaining six gigs, it references snapshot A.
>
> **[1:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=117)** So snapshot B contains the data that was changed, that is four gigs in size, and for the remaining six gigs it relies on snapshot A.
>
> **[2:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=126)** As a result of this mechanism, the size of snapshot B is only four gigs.
>
> **[2:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=131)** Now, let's say after snapshot B was taken, two gigs of data were added to the EBS volume.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=137)** Now, when you take a snapshot that is snapshot C, it will only contain two gigs of data.
>
> **[2:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=144)** However, to restore it back to the EBS volume we need the remaining data as well.
>
> **[2:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=149)** So for the remaining four gigs, snapshot C references snapshot B, and for the remaining six gigs of data snapshot C references snapshot A.
>
> **[2:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=160)** If each of these snapshots were full snapshots, the total storage required would be 10 plus 10 plus 12 gigs which is a total of 32 gigs.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=170)** With incremental snapshots, the total storage required is 10 plus four plus two gigs, which is a total of 16 gigs.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=180)** Incremental snapshots save time required to create the snapshot, and they also save storage costs.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=188)** Snapshots only capture data that has been written to the EBS volume at the time the snapshot was created.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=195)** This means if there is any data that has been cached by applications or by the operating system, they will not be included in the snapshot.
>
> **[3:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=204)** So AWS recommends detaching the EBS volume before taking the snapshot.
>
> **[3:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=209)** If it is a root volume, it cannot be detached.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=212)** So for root volumes, AWS recommends that the instance should be stopped before the snapshot is taken.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=219)** Snapshots can be copied from one region to another allowing for data migration.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=224)** Let's look at a use case for this.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=226)** Let's say we have an EBS volume in US East one, and we want to create a copy of this volume in another regio, EU West one.
>
> **[3:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=235)** EBS volumes cannot be copied from one region to another.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=239)** So instead, we can create a snapshot of the EBS volume in the same region and then copy the snapshot to another region and then restore the snapshot back as an EBS volume.
>
> **[4:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=250)** So snapshots can be copied from one region to another allowing you to move EBS volumes to different regions.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=257)** Snapshots can also be encrypted and snapshots can also be shared with other AWS accounts and also publicly.
>
> **[4:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=265)** Users that have access to your snapshot can use it to create their own EBS volumes and the original snapshots will be unaffected.
>
> **[4:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/ebs-snapshots?u=76281980&t=274)** In the next video, we'll put these concepts into practice on the EC2 console console.

> [!info]- Semantic Content
>
> **Env Vars:** ebs (24), aws (6), ec2 (1)
> **Code Keywords:** let (6), this. (1)
> **CLI Commands:** aws (6)
> **Definitions:** is a  (4), known as (2)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### Demo: EBS snapshots
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=0)** - [Instructor] Now, let's understand how to configure snapshots.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=3)** Once you've logged into the EC2 console, go to snapshots on the left navigation pane.
>
> **[0:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=10)** By default, you will see snapshots owned by you, but you can also use the dropdown to view private and public snapshots.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=18)** To create a snapshot, you will need an EBS volume.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=21)** So navigate to the volume section and create two EBS volumes.
>
> **[0:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=26)** Both the volumes have the same configuration in terms of type and size.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=30)** The only difference is their encryption status.
>
> **[0:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=33)** The first volume is not encrypted, while the second one is.
>
> **[0:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=37)** Now, let's snapshot these.
>
> **[0:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=39)** We'll start with the unencrypted volume.
>
> **[0:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=42)** Select the volume, click the actions button, and click create snapshot.
>
> **[0:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=48)** Here, you'll be able to provide a description for the snapshot.
>
> **[0:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=51)** Notice that you're not allowed to change the encryption status.
>
> **[0:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=55)** This means if your EBS volume was not encrypted, your snapshot is also not encrypted.
>
> **[1:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=61)** Scroll down and click create snapshot.
>
> **[1:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=65)** Now, let's repeat the same process for the encrypted EBS volume.
>
> **[1:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=69)** So select the volume, click the actions button, and click create snapshot.
>
> **[1:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=75)** Notice that the encryption status cannot be changed.
>
> **[1:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=77)** The EBS volume was encrypted, so the snapshot is automatically encrypted.
>
> **[1:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=82)** So this is an important thing to bear in mind.
>
> **[1:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=84)** The encryption status of the snapshot depends on the encryption status of the volume.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=90)** If the volume is encrypted, the snapshot is automatically encrypted.
>
> **[1:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=94)** If the volume is not encrypted, the snapshot is also not encrypted.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=99)** Scroll down and click create snapshot.
>
> **[1:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=102)** The snapshots have been created.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=104)** Now, let's take a look at them.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=106)** Click snapshots on the left navigation pane, and here's the two snapshots we created.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=111)** I'll assign them name tags based on their encryption status.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=115)** So I'll select the snapshot, and down here we can see this one is encrypted.
>
> **[1:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=119)** So I'll assign a name tag called Encrypted, and I'll call the other one as Unencrypted.
>
> **[2:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=129)** In the last video, we understood that snapshots are stored in Amazon S3.
>
> **[2:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=133)** Let's take a look at it.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=135)** Use the services dropdown menu and navigate to the storage section and then go to S3.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=142)** In the S3 console, you will see your buckets and your objects.
>
> **[2:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=146)** But as you can see here, the snapshots are not visible.
>
> **[2:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=149)** So this is another important thing to keep in mind that snapshots are not visible in the Amazon S3 console.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=156)** Even though snapshots are stored in S3, they're not visible on the console.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=161)** Now, let's go back to EC2.
>
> **[2:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=164)** Back over here to snapshots.
>
> **[2:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=167)** Now, let's understand how to restore a snapshot back to an EBS volume.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=171)** We'll begin with the unencrypted snapshot.
>
> **[2:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=174)** So select a snapshot, click actions, and then click create volume from snapshot.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=180)** Notice that you have the option to change the volume type and size, so when you're restoring a snapshot back to a volume, you can change the type and the size.
>
> **[3:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=189)** And if the snapshot was not encrypted, you can turn on encryption when you're restoring back to a volume.
>
> **[3:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=196)** You also have the option to select the availability zone to which you want to restore, and then click create volume.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=203)** Now, let's try the same thing for the encrypted snapshot.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=207)** So, select the encrypted snapshot, click the actions button, and then click create volume from snapshot.
>
> **[3:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=214)** We have the same options.
>
> **[3:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=215)** We are allowed to change the volume type and size.
>
> **[3:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=218)** We can also provide the desired availability zone, but notice, we cannot change the encryption status.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=224)** So if the snapshot was encrypted, the restored volume will be automatically encrypted.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=230)** However, you can change the key used for encryption.
>
> **[3:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=234)** Scroll down and click create volume.
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=237)** Now, let's look at some other options available with snapshots.
>
> **[4:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=240)** Select a snapshot, click the actions button, and here we have an option called create image from snapshot.
>
> **[4:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=248)** This option can be used to create an AMI from a snapshot of a root device volume.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=254)** The next option is copy snapshot.
>
> **[4:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=256)** This option allows you to copy a snapshot to a different region.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=261)** The next option is modify permissions.
>
> **[4:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=263)** By default, a snapshot is private, which means only you are allowed to access it, but you can modify the permissions to share the snapshot with other AWS accounts and also publicly.
>
> **[4:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=274)** Bear in mind, only unencrypted snapshots can be shared.
>
> **[4:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=278)** For example, if I select the encrypted snapshot, you will notice that the modify permissions option is grayed out.
>
> **[4:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=286)** The next option is manage fast snapshot restore.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=289)** Normally, when a snapshot is restored to an EBS volume, there is latency when the volume is accessed for the first time.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=297)** This is because the volume needs to be initialized.
>
> **[5:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=301)** Normally this is not a problem, but it can be a concern for certain use cases such as virtual desktop infrastructure, or VDIs, and backup and restore scenarios.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=312)** With FSR, or fast snapshot restore, enabled, the restored EBS volume is fully initialized at creation.
>
> **[5:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=319)** This means there is no latency when trying to access its contents.
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=324)** To use this feature, you'll need to first enable it at the availability zone level.
>
> **[5:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=329)** So click on manage fast snapshot restore, and select the availability zones in which you'd like to enable this feature, and click the enable button.
>
> **[5:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=338)** Here, you will see a message telling you about the charges for this feature.
>
> **[5:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=342)** So this feature is available at an additional cost.
>
> **[5:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=346)** Once FSR is enabled at the availability zone level, when you restore a snapshot in that availability zone, it is automatically restored using fast snapshot restore.
>
> **[5:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=357)** I'll cancel and close from here, and let's look at some more options.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=361)** Select the EBS volume, click actions, and the next option is archive snapshot.
>
> **[6:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=368)** You can archive a snapshot to move it into a low cost, long-term storage tier.
>
> **[6:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=373)** We know that snapshots incur storage charges.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=376)** By moving it to the archived tier, you can save on storage costs.
>
> **[6:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=381)** This can be ideal for snapshots that do not need to be accessed frequently, like when you need to store snapshots for compliance reasons.
>
> **[6:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=389)** To archive a snapshot, click the archive snapshot option, and then click archive snapshot.
>
> **[6:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=395)** The archival status of a snapshot can be seen by selecting the snapshot and then going to the storage tier tab.
>
> **[6:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=402)** For example, this snapshot has not been archived, so it is in the standard storage tier.
>
> **[6:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=408)** Here, I have a snapshot that has been archived, and we can see that the storage tier is archived.
>
> **[6:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=414)** Bear in mind, the minimum archive period is 90 days.
>
> **[6:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=417)** So if you delete or permanently restore before the 90 days period, you are still billed for the full 90 days.
>
> **[7:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=425)** Archived snapshots need to be restored to the standard tier before they can be used to create a volume.
>
> **[7:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=431)** To restore an archived snapshot, you'll select the snapshot, click the actions button, and then select restore snapshot from archive.
>
> **[7:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=440)** There are two types of restore, permanent and temporary.
>
> **[7:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=443)** Permanent restore causes the snapshot to be restored from the archive to the standard tier, and the snapshot is deleted from the archive tier.
>
> **[7:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=451)** Temporary restore causes the snapshot to be restored to the standard tier, and a copy remains in the archive tier.
>
> **[7:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=459)** The other option available in the actions menu is delete snapshot.
>
> **[7:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=465)** By default, when you delete a snapshot, it is deleted forever and cannot be recovered.
>
> **[7:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=471)** As you can imagine, this can be a concern in certain situations like production environments.
>
> **[7:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=476)** However, you can use the Recycle Bin to protect your critical snapshots from accidental deletion.
>
> **[8:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=483)** With Recycle Bin, you can create retention rules for deleted snapshots and AMIs.
>
> **[8:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=489)** Let's take a look at it.
>
> **[8:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=490)** I'll click Recycle Bin, and here we can create a retention rule.
>
> **[8:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=495)** To create a retention rule, you'll start by providing a name and a description.
>
> **[8:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=499)** Down here, you can select the type of resources you'd like to protect.
>
> **[8:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=503)** In our example, we are talking about EBS snapshots.
>
> **[8:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=506)** You can apply this to all resources or resources that match a specific tag.
>
> **[8:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=511)** we'll apply to all.
>
> **[8:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=513)** And then you can select a retention period, which can be a minimum of one day and a maximum of 365 days.
>
> **[8:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=520)** The rule type can be unlocked or locked, and then you can click create retention rule.
>
> **[8:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=525)** By doing this, any deleted EBS snapshot will be stored in the Recycle Bin for the duration of the retention rule.
>
> **[8:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=533)** Now, take a moment to configure EBS snapshots in your AWS account.
>
> **[8:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=538)** Create a volume, and then try to snapshot it.
>
> **[9:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=541)** Try to restore it and play around with the different options like changing the volume type and size.
>
> **[9:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-ebs-snapshots?u=76281980&t=548)** In the end, be sure to delete unnecessary volumes and snapshots to avoid storage charges.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), delete (4), default, (3), private (2), public (1)
> **Env Vars:** ebs (12), ec2 (2), aws (2), fsr (2), ami (1)
> **UI Navigation:** select the (10), scroll down (3), go to (2), dropdown (2), navigate to (1)
> **Analogies:** for example (2), such as (1), imagine (1)
> **Prerequisites:** configure (2), you'll need (1)
> **CLI Commands:** aws (2)
> **Cross-References:** in the last (1), go back to (1)
> **Definitions:** is an  (1)

#### Instance store
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=0)** - [Instructor] In the previous videos we talked about EBS volumes and that they provide persistent storage for EC2 instances.
>
> **[0:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=7)** Another type of volume that you can attach to your instances are instance store volumes.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=13)** Instance store volumes provide temporary block-level storage for your EC2 instances.
>
> **[0:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=20)** Unlike EBS volumes, instance store volumes are physically attached to the host computer.
>
> **[0:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=26)** So when you launch an EC2 instance and attach an EBS volume, the instance and the volume are on distinct underlying hardware.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=34)** But with instance store volumes, the volumes are hosted on the same underlying physical host as that of the EC2 instance.
>
> **[0:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=43)** And for this reason, instance store volumes provide high-speed, low-latency access to data.
>
> **[0:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=50)** So while instance store volumes only provide temporary storage, the data can be accessed at a high-speed and with very low-latency.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=59)** And this makes it ideal for short-lived data and storage such as buffers, caches, and other temporary content.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=67)** Instance store volumes for an EC2 instance can only be specified at launch time.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=72)** So if you want to use instance store volumes, you must include them when you're launching the EC2 instance.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=79)** Instance store volumes cannot be detached from one instance and attached to another.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=85)** The data in an instance store volume only persists during the lifetime of its associated instance.
>
> **[1:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=91)** This means your data is lost if the instance is stopped, terminated, or hibernated, and the data is also lost if there is a failure on the underlying disk drive.
>
> **[1:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=102)** However, data is not lost if the instance reboots.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=106)** Due to the temporary nature of the data on the instance store volume, it is not suitable for valuable, long-term data.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=115)** An important thing to bear in mind is that not all EC2 instance types support instance store volumes.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=122)** The number and size of available instance store volumes depends on the instance type.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=128)** Let's talk more about this.
>
> **[2:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=130)** I'm here at an AWS document that talks about instance store volumes.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=135)** Scrolling down this document, you will see all the EC2 instance types that support instance store volumes.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=142)** For example, an m1.xlarge instance type supports four instance store volumes, each of size 420 gigs.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=151)** Let's take a look at this from the EC2 console.
>
> **[2:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=154)** From the EC2 console, click the Launch instance button, then select an instance type that supports instance store volumes.
>
> **[2:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=164)** For example, I'm going to select m1.xlarge.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=170)** Scrolling down to the storage section we can see the instance store volumes.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=175)** So this instance type has a root volume of type EBS and it also supports up to four instance store volumes, each of size 420 gigs.
>
> **[3:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=185)** Notice that the storage type is ephemeral.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=188)** So instance store volumes are labeled as ephemeral0, ephemeral1, and so on.
>
> **[3:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=194)** And these volumes can only be attached at launch time.
>
> **[3:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=198)** Back over here, now let's talk about the differences between EBS volumes and instance store volumes.
>
> **[3:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=205)** EBS volumes provide persistent storage, while instance store volumes provide temporary storage.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=212)** EBS volumes are located on disks that are on a separate storage system, while instance store volumes are located on disks that are physically attached to the host computer.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=223)** EBS volumes can persist independently from the EC2 instance, while instance store volumes can only persist during the lifetime of the associated instance.
>
> **[3:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=233)** EBS volumes can be attached to an instance at launch time or afterwards.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=238)** But instance store volumes can only be attached at the time of launching the instance.
>
> **[4:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=244)** EBS volumes can be detached from one instance and attached to another, while instance store volumes cannot be detached from an instance and attached to another.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-store?u=76281980&t=254)** And lastly, EBS volumes are ideal for long-term, durable storage, while instance store volumes are ideal for short-lived data.

> [!info]- Semantic Content
>
> **Env Vars:** ebs (11), ec2 (11), aws (1)
> **Code Keywords:** let (3), type. (1), this. (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** aws (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Elastic IP
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=0)** - [Instructor] Now let's talk about elastic IP addresses.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=3)** We've seen in the previous videos that when you launch an EC2 instance, it automatically gets assigned a public IP address.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=11)** The public IP address of an instance changes when it is stopped or hibernated and started again.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=18)** As you can imagine, this could be a problem if you have users or applications connecting to the public IP address, but this problem can be easily overcome by using an elastic IP address.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=31)** An elastic IP address is a static IPv4 address reachable from the internet.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=38)** The keyword here is static.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=40)** So essentially an elastic IP address is a fixed IP address for your EC2 instances.
>
> **[0:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=46)** It is associated with your AWS account and can be assigned to any EC2 instance in the region.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=53)** An elastic IP address is used to ensure that the public IP address of the instance remains fixed.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=59)** It can also be used to mask the failure of an instance or software by remapping the address to another instance.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=67)** Here is an example.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=68)** Let's say you have an EC2 instance running in the US East 1A availability zone.
>
> **[1:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=74)** It has an elastic IP address assigned to it, which is used by users on the internet to connect to the instance.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=81)** Now, let's say there is a failure in the availability zone and the instance needs to be redeployed in US East 1B.
>
> **[1:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=88)** The same elastic IP address can be assigned to the new instance in the US East 1B availability zone, and your users can continue to connect with the instance using the same elastic IP address.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=101)** An important thing to bear in mind is that an hourly charge is imposed if an elastic IP is not associated to a running EC2 instance.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=111)** This is because there is a global shortage of public IPv4 addresses.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=115)** So it is important to make sure that elastic IP addresses are judiciously used, and so AWS supplies an hourly charge if the elastic IP is not associated to a running instance.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=128)** Also, bear in mind that elastic IP addresses can only be used in the allocated region.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=135)** Now let's go to the EC2 console and see how to configure an elastic IP.
>
> **[2:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=140)** I'm here at the EC2 console and I have a running EC2 instance.
>
> **[2:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=144)** As you can see, this EC2 instance has a public IPv4 address and it also has a public DNS name that contains the public IP address, and it does not have an elastic IP address.
>
> **[2:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=158)** Now let's associate elastic IP address to this instance.
>
> **[2:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=162)** So we'll navigate to elastic IPs on the left navigation pane, and we'll need to begin by allocating an IP to the account.
>
> **[2:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=169)** So click allocate elastic IP address.
>
> **[2:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=173)** We'll choose from Amazon's pool of IPv4 addresses and click allocate.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=179)** Now an elastic IP address has been allocated to the account, but it is not associated with an instance.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=186)** So let's do that.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=187)** Select your elastic IP address, click the actions button, and then click associate elastic IP address.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=195)** There's two ways to do this.
>
> **[3:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=196)** You can associate the elastic IP address to an instance or to a network interface.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=202)** My EC2 instance only has a single interface, so I can use any of these options.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=207)** But if your instance has multiple interfaces, you will need to use the second option that is network interface.
>
> **[3:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=214)** So I'll select the instance option, then select the desired instance and the private IP address, and click associate.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=223)** Now let's see the changes on the instance.
>
> **[3:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=225)** So we'll go back to instances and refresh, and I'll select the instance again.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=231)** And now we can see that the public IP address has changed to the elastic IP address.
>
> **[3:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=236)** We can verify this by looking at elastic IP addresses here.
>
> **[4:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=240)** Also, note that the DNS name has been updated to include the elastic IP address.
>
> **[4:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=246)** Now let's go back to elastic IPs.
>
> **[4:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=250)** Notice that there is also the option to update your reverse DNS settings.
>
> **[4:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=256)** This option can be used if you're planning to use the elastic IP address to send emails.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=261)** Reverse DNS configuration is commonly used to avoid emails from being flagged as spam.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=267)** An elastic IP address can also be transferred to another account.
>
> **[4:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=272)** Now let's see how to dissociate and release the elastic IP address.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=276)** Before the IP can be released back to the pool, it must be dissociated from the instance.
>
> **[4:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=281)** So with the instance selected from the actions menu, select dissociate elastic IP address and then click dissociate again.
>
> **[4:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=290)** Once the IP address has been dissociated, it can be released back to Amazon's pool.
>
> **[4:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=295)** And to do this, select your elastic IP address, click the actions button, then click release elastic IP addresses, and click release again.
>
> **[5:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=305)** Now take a moment to try this in your AWS account.
>
> **[5:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=308)** Associate an elastic IP address to an instance, then try to dissociate the elastic IP and associate with another EC2 instance.
>
> **[5:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-ip?u=76281980&t=317)** When you're done, be sure to release the elastic IP address back to the pool to avoid unnecessary charges.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), public (9), interface (3), static (2), continue (1)
> **Env Vars:** ec2 (11), dns (4), aws (3)
> **UI Navigation:** select the (3), go to (1), navigate to (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** aws (3), make (1)
> **Cross-References:** go back to (2)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)

#### Elastic network interface
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=0)** - [Instructor] Now let's talk about Elastic network interfaces.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=4)** An Elastic network interface is a logical networking component that represents a virtual network card.
>
> **[0:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=10)** When we use a physical computer, it has a physical network card that provides network connectivity.
>
> **[0:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=15)** Similarly, EC2 instances have a virtual network card, known as Elastic network interface, and it provides network connectivity.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=24)** Every instance in a VPC has a default network interface called as the primary interface, and it is represented as eth0.
>
> **[0:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=33)** You can attach multiple network interfaces to the same EC2 instance.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=38)** Let's look at a use case for this.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=40)** Imagine a VPC with two subnets, a private and a public subnet in the same availability zone.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=47)** You can have an EC2 instance with two interfaces in two different subnets, an interface in the private subnet and an interface in the public subnet.
>
> **[0:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=58)** This configuration is commonly used to separate management traffic from production traffic.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=62)** The interface in the public subnet has a private and a public IP, and it serves production traffic from the internet, while the interface in the private subnet only has a private IP and it serves management traffic from the corporate data center only.
>
> **[1:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=78)** So by assigning multiple interfaces in different subnets, you can separate management traffic from production traffic.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=85)** Here's another example.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=87)** Let's say we have an application server with two interfaces, eth0 and eth1.
>
> **[1:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=93)** Eth0 seves management traffic, while eth1 serves production traffic.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=98)** Let's say there is a failure on the server, and the application needs to be redeployed on another server.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=105)** The production traffic can be redirected to App Server 2 simply by attaching eth1 one to the instance.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=111)** So as you can see, it's easy to redirect traffic simply by reattaching the interface.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=118)** Now let's talk about the attributes of Elastic network interfaces.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=122)** Every Elastic network interface has a primary private IPv4 address.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=127)** It can also have one or more secondary private IPv4 addresses.
>
> **[2:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=132)** It can have one Elastic IP per private IPv4 address.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=137)** It can have one public IPv4 address, which can be the same as the Elastic IP address.
>
> **[2:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=143)** It can also have one or more IPv6 addresses.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=147)** It can also be associated to one or more security groups.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=151)** It also has a MAC address, which is commonly known as the physical address, and it cannot be changed.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=157)** It can also have a source or destination check flag, and it is usually enabled to ensure that the instance is the source or destination of any traffic it receives.
>
> **[2:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=167)** However, if you're running special services, such as NAT, or network address translation, routing, or firewalls, source or destination check flag should be disabled on that interface.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=180)** And finally, every interface also has a description associated with it.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=186)** An Elastic network interface can be attached to a running or a stopped EC2 instance.
>
> **[3:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=191)** An important thing to bear in mind is that the interface and the instance must be in the same availability zone.
>
> **[3:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=198)** And the primary interface, which is eth0, cannot be detached from the instance.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=203)** You can detach secondary or additional interfaces, but the primary interface cannot be detached.
>
> **[3:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=210)** Each network interface can have multiple private IPv4 addresses.
>
> **[3:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=215)** The maximum private IPv4 addressed per interface and the maximum number of interfaces that can be attached to the instance depend on the instance type.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=226)** Here is an AWS document that talks about the number of IP addresses per interface, per instance type.
>
> **[3:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=233)** And scrolling down the document, you can see the different instance types, the maximum number of interfaces they support, and the number of private IPv4 addresses you can assign per interface.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=245)** For example, on a t2.micro instance, you can attach two interfaces, and each interface can have two private IPv4 addresses.
>
> **[4:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=254)** But look at some of these large instance types.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=257)** For example, on a t2.xlarge instance, you can attach three interfaces, and each interface can have a maximum of 15 private IPv4 addresses.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=268)** So that's a lot of private IP addresses that you can assign to the instance.
>
> **[4:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/elastic-network-interface?u=76281980&t=273)** In the next video, we'll understand how to configure Elastic network interfaces.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (22), private (14), let (5), public (5), type. (2)
> **Env Vars:** ec2 (4), vpc (2), mac (1), nat (1), aws (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **Analogies:** for example (2), imagine (1), such as (1)
> **CLI Commands:** aws (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Demo: Elastic network interface
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=0)** - [Instructor] Now let's configure elastic network interfaces.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=3)** Here in the EC2 console I've got two EC2 instances running, server one and server two, and they're running in different availability zones.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=12)** Let's begin by reviewing the interface associated with server one.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=16)** So I'll select server one and go to the networking tab, and down here I can see that it has an elastic network interface and here is the public and private IPv4 address.
>
> **[0:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=28)** Now let's assign an additional private IP address to the same interface.
>
> **[0:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=33)** To do this, we'll go to network interfaces on the left navigation pane, and here we can see the two interfaces belonging to the two instances, server one and server two.
>
> **[0:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=43)** I'll begin by selecting the first interface that belongs to server one.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=47)** Then click actions and manage IP addresses, expand the interface, and here we can see the existing private and public IP address.
>
> **[0:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=58)** To assign an additional IP address, click assign new IP address.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=63)** You can manually assign an IP address from that subnet range or you can leave it set to auto-assign, in which case AWS will automatically assign an IP address from that range.
>
> **[1:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=75)** Scroll down and click save, and then confirm.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=79)** And now the interface should have two private IP addresses.
>
> **[1:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=82)** We can verify this by selecting the interface.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=85)** And down here under the details tab we can see the primary IPv4 address, and we can also see the secondary private IPv4 address.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=95)** Let's also verify this on the instance.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=98)** So back to instances, we'll refresh and select server one, and then go to networking and we should see the two private IP addresses, primary and secondary.
>
> **[1:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=110)** Now let's create an additional interface and assign it to the instance.
>
> **[1:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=114)** What we did now was assigning an additional IP address to the same interface, but now we'll create an additional interface and assign it to the instance.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=123)** So we'll go back to network interfaces and we'll create a new interface.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=128)** But before that, we should make a note of the availability zone in which the instance is running because the interface and the instance need to be in the same availability zone.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=137)** So server one is running in US East 2B.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=142)** I'll click create network interface, then we need to select a subnet.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=147)** In the US East 2B availability zone I have two subnets, subnet one and subnet two.
>
> **[2:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=154)** You can select any subnet, the important thing is the availability zone.
>
> **[2:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=159)** So I'll select the first subnet in that availability zone, US East 2B.
>
> **[2:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=165)** Next for private IPv4 address, we can auto-assign or we can manually assign the IP address.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=171)** The next option is elastic fabric adapter.
>
> **[2:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=174)** An elastic fabric adapter is a network device that you can attach to your EC2 instance to accelerate high performance computing, also known as HPC and machine learning applications.
>
> **[3:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=185)** Scroll down and then associate the required security groups with your interface.
>
> **[3:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=191)** For this, you can associate multiple security groups if required and then scroll down and click create network interface.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=199)** So here's the interface we created.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=201)** Now let's associate it with the EC2 instance.
>
> **[3:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=204)** So select the instance, click the actions button, and then click attach.
>
> **[3:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=210)** In the instance dropdown, you'll notice we only see one instance because that is the only instance running in the US East 2B availability zone.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=219)** The other instance is in a different availability zone, so it does not show in the dropdown.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=224)** We'll click attach.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=227)** So the interface has been attached.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=229)** Now let's check this from the instance.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=231)** Let's go back to instances on the left navigation pane, and refresh, and select server one networking and scrolling down, we can see there are two interfaces attached to the same EC2 instance.
>
> **[4:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=246)** We can also verify this by logging into the EC2 instance.
>
> **[4:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=251)** Once you've logged into your EC2 instance, click the network button, and then click network and internet settings, and then click ethernet on the left navigation pane.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=261)** And here you can see the two interfaces that we attached to the instance.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=267)** Back over here, now let's attach an elastic IP address to the interface.
>
> **[4:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=272)** Scrolling up, we can see that we already have a public IP address.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=276)** This IP address is associated with the primary interface, (indistinct), and we can see that here.
>
> **[4:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=283)** Now let's attach an elastic IP address to the second interface that we attached, and it has a private IP address ending with .189.
>
> **[4:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=294)** So we'll begin by navigating to elastic IPs on the left navigation pane, and then we'll click allocate elastic IP address.
>
> **[5:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=302)** We'll choose Amazon's pool of IPv4 addresses and click allocate.
>
> **[5:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=307)** The elastic IPs allocated to the account, now we need to associate it with the instance.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=312)** So with the elastic IP selected, click the actions button, then click associate elastic IP address.
>
> **[5:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=319)** We're going to use the network interface option because the EC2 instance has multiple interfaces associated with it.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=326)** So select the network interface option, then select the desired interface.
>
> **[5:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=331)** This is the additional interface we created, and here is the private IP address ending with .189.
>
> **[5:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=338)** Then click associate.
>
> **[5:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=340)** The elastic IP has been associated.
>
> **[5:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=342)** Now let's verify the changes from the instance.
>
> **[5:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=345)** Back over here, I'll refresh and select server one.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=349)** And now we should see two public IP addresses, the first one ending with .29 associated with the primary interface, and the second one ending with .250 associated with the secondary interface.
>
> **[6:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=362)** And we can also verify this by going to the networking tab.
>
> **[6:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=366)** And scrolling down, we can see the two interfaces and both the interfaces have a public and a private IP address.
>
> **[6:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=374)** Now take a moment to try this in your AWS account.
>
> **[6:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=378)** Try to associate multiple interfaces with the EC2 instance, and then assign multiple IP addresses to the interfaces.
>
> **[6:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/demo-elastic-network-interface?u=76281980&t=385)** As a configuration scenario, try to attach two interfaces belonging to two different subnets to the same EC2 instance.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (26), let (11), private (10), public (5), this, (2)
> **Env Vars:** ec2 (10), aws (2), hpc (1)
> **UI Navigation:** select the (4), go to (3), scroll down (3), dropdown (2)
> **CLI Commands:** aws (2), make (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), known as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Placement groups
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=0)** - [Instructor] Now, let's talk about an interesting topic: placement groups.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=4)** Imagine that you're launching multiple EC2 instances.
>
> **[0:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=8)** How will AWS deploy these instances on the underlying hardware?
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=12)** Will all the instances share the same underlying hardware, or will the instances be spread across distinct underlying hardware?
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=19)** By default, when you're launching EC2 instances, you do not have control over how AWS deploys them on the underlying hardware, but you can influence this using placement groups.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=31)** Placement groups allow you to influence the placement of instances on the underlying hardware.
>
> **[0:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=37)** This can be useful for use cases, like achieving low latency or reducing the likelihood of failure.
>
> **[0:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=44)** For example, you may want to pack your instances closely together to achieve low latency, or spread them across distinct underlying hardware to reduce the likelihood of failure.
>
> **[0:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=55)** By default, the EC2 service attempts to place instances in a way that spreads them across the underlying hardware, but as you can imagine, this may not always be the ideal scenario, especially if you're trying to pack them together to achieve low latency.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=72)** There are three types of placement groups: cluster, partition, and spread.
>
> **[1:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=78)** A cluster placement group is a logical grouping of instances in a single availability zone.
>
> **[1:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=84)** All instances in a cluster placement group have access to a high-throughput and a high-bandwidth segment of the network, and for this reason, a cluster placement group is ideal for low-latency and high-throughput applications.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=98)** For example, high-performance computing or HPC applications that need to process data and perform calculations at high speeds.
>
> **[1:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=108)** Cluster placement groups are also recommended when majority of the traffic is between instances in the group, because all instances in a cluster placement group are in a single availability zone.
>
> **[2:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=120)** It is important to bear in mind that cluster placement groups are not supported for burstable performance instances, like T2 and T3 instances.
>
> **[2:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=129)** Next is partition placement groups.
>
> **[2:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=132)** With partition placement groups, instances are grouped into partitions, and each partition is hosted on a separate rack.
>
> **[2:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=140)** Each rack has its own network and power source, and no two partitions in a placement group share the same rack.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=147)** Because instances are hosted on distinct partitions, it reduces the likelihood of correlated hardware failures.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=155)** It is important to bear in mind that partitions can be spread across multiple availability zones in the same region, and you can have a maximum of seven partitions per availability zone.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=166)** Partition placement groups are ideal for deploying large distributed workloads, such as Hadoop, Cassandra, and Kafka, across distinct racks.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=176)** Next is spread placement groups.
>
> **[2:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=178)** With a spread placement group, each instance is placed on distinct underlying hardware.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=184)** So, the difference between partition and spread placement groups is that with a partition placement group, a group of instances share the same partition, and no two partitions share the same rack, but with spread placement groups, each instance is on a different rack.
>
> **[3:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=200)** Each rack has its own network and power source, and it reduces the risk of simultaneous failure, which would occur if instances share the same hardware.
>
> **[3:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=210)** Spread placement group is ideal for critical applications where instances must be isolated from each other.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=217)** Some other key points about placement groups, there is no charge for creating a placement group, placement groups cannot be merged, and an EC2 instance can only belong to one placement group.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=229)** Now, let's go to the EC2 console and configure placement groups.
>
> **[3:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=234)** Before you can launch an EC2 instance in a placement group, you must first configure it.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=239)** To configure a placement group, navigate to Placement Groups on the left navigation pane.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=245)** From here, click Create Placement Group.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=249)** Here, we can see the three types we talked about: cluster, partition, and spread.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=255)** Let's create a placement group of each type, beginning with cluster placement group.
>
> **[4:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=260)** I'll call this "Cluster PG."
>
> **[4:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=263)** Set the type as cluster, and click Create Group.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=267)** I'll repeat the same thing for the remaining two types.
>
> **[4:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=271)** Create Placement Group.
>
> **[4:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=273)** Let's call this as "Spread Placement Group," and the type is spread.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=279)** With a spread placement group, you can choose the type of spread, also known as the spread level.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=284)** Normally, you will use rack.
>
> **[4:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=286)** However, if you're using AWS Outposts, you can also set it to host.
>
> **[4:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=291)** AWS Outposts allows you to bring AWS services to your on-premises environment or your data center.
>
> **[4:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=298)** For this example, we'll set it to rack and click Create Group.
>
> **[5:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=303)** And we'll repeat the same thing for the partition placement group.
>
> **[5:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=306)** I'll call this as "Partition PG," and set the type to partition.
>
> **[5:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=312)** When you're creating a partition placement group, you can define the number of partitions you'd like to create.
>
> **[5:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=318)** I'm going to set it to four and click Create Group.
>
> **[5:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=322)** Now that we have the placement groups, we can launch EC2 instances on these.
>
> **[5:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=327)** Let's try to do this.
>
> **[5:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=329)** I'll go to instances on the left navigation pane and click Launch Instances.
>
> **[5:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=335)** I'll select an AMI.
>
> **[5:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=337)** Then, an instance type.
>
> **[5:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=339)** I'll also provide a key pair.
>
> **[5:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=343)** I'll select an existing security group.
>
> **[5:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=348)** Then, I'll scroll down to advanced details, where I can set the placement group.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=354)** Here, we can see the three placement groups we created: cluster, partition, and spread.
>
> **[6:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=360)** When you select the partition placement group, you can also select the partition on which you would like to launch the instance.
>
> **[6:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=366)** For example, if I select the partition placement group, I can see all four partitions, and then, I can select the partition on which the instance should be launched.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=376)** So, with a partition placement group, you do have visibility into the partition on which the instance will be launched.
>
> **[6:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=383)** Once you've configured the required items, click Launch Instance, and then, click View All Instances.
>
> **[6:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=390)** The placement group details can be viewed by selecting the instance.
>
> **[6:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=394)** So, select your EC2 instance, and under the Details tab, you will find details about the placement group.
>
> **[6:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=401)** For example, this EC2 instance is using a partition placement group.
>
> **[6:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=406)** Here's the placement group ID and the partition number on which the instance has been launched.
>
> **[6:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/placement-groups?u=76281980&t=412)** So, as we've seen, placement groups can be very useful in influencing how AWS deploys the instances on the underlying hardware.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (9), aws (6), hpc (1), ami (1)
> **Code Keywords:** let (5), default, (2), type, (1), this. (1), type. (1)
> **UI Navigation:** select the (4), go to (2), navigate to (1), scroll down (1)
> **CLI Commands:** aws (6), find (1)
> **Analogies:** for example (4), imagine (2), such as (1)
> **Prerequisites:** configure (3)
> **Definitions:** is a  (1), known as (1)
> **Cross-References:** we talked about (1)

#### Instance metadata
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=0)** - [Instructor] Let's talk about instance metadata.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=3)** Instance metadata is data about your EC2 instance.
>
> **[0:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=6)** It contains important attributes of your EC2 instance, such as the ami-id, hostname, instance-id, public-ipv4 address, security groups, and more.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=19)** To retrieve instance metadata, you will need to access a specific IP address using the HTTP protocol.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=27)** For IPv4, the URL is [http://169.254.169.254/latest/meta-data](http://169.254.169.254/latest/meta-data).
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=38)** There is a similar URL for IPv6 as well.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=41)** The IP address used by the metadata service is a special IP address known as the link local address, and it is only accessible by software running on the instance.
>
> **[0:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=52)** Software or scripts running on your instance can access the metadata to get information such as hostname, public IP address, MAC address, and more.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=62)** To access instance metadata, requests can be made in one of two versions.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=67)** Version one, which is a request response method, and version two, which is a session oriented method.
>
> **[1:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=73)** While version one is fully secure, version two adds additional protection in the form of session authentication.
>
> **[1:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=80)** By default, you can use either version one or version two, or both.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=85)** Here is the version one command.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=87)** It uses the curl utility followed by the URL.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=92)** Curl is a utility that allows you to interact with HTTP content using the command line.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=98)** For version two, you will need to use two commands.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=101)** The first command uses the curl utility to send an HTTP put request for a token.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=106)** The -H option specifies a token with a duration of 21,600 seconds.
>
> **[1:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=113)** When the token is returned, it is stored in a variable called TOKEN in uppercase.
>
> **[1:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=119)** The next command passes the token with a specific header value to access the metadata.
>
> **[2:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=125)** While both version one and version two are supported, it is possible to enforce the use of version two, and this is described in the AWS documentation.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=134)** Now let's go to the EC2 console, and see how to access metadata.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=139)** I'm here at the command line interface of your Linux EC2 instance.
>
> **[2:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=143)** You can also access the metadata from a Windows EC2 instance.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=147)** First, let's try the version one command.
>
> **[2:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=150)** I've already tried the command on this machine, so I'm going to repaint it by using the up arrow.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=155)** The command as we know is curl followed by the URL.
>
> **[2:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=159)** When I press enter, I can see all the attributes that I can access.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=163)** For example, if I wanted to view the ami-id, I can add that keyword to the end of the command.
>
> **[2:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=170)** Let's try that.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=171)** Curl followed by the URL, and towards the end we'll add ami-id.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=176)** And here is the ami-id of the EC2 instance.
>
> **[3:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=180)** Let's try one more.
>
> **[3:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=181)** I'll first clear my screen, use the up arrow, and let's try to access the host name.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=187)** I'll add the hostname keyword to the end and press enter.
>
> **[3:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=191)** And here we can see the host name of the EC2 instance.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=195)** This command can also be used to access the user data.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=199)** To access the user data, the keyword we need to use is user-data.
>
> **[3:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=205)** So the command is curl http, followed by the IP address, /latest/user-data.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=212)** And here we can see the user data that was supplied to the EC2 instance.
>
> **[3:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=216)** If you did not supply any user data, you will see the 404 not found message.
>
> **[3:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=221)** This command can also be used to access the identity document.
>
> **[3:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=225)** The identity document contains important information, such as the account id, availability zone, and more.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=232)** To access the identity document, the command is curl, followed by the URL, /latest/dynamic/instance-identity/document.
>
> **[4:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=248)** And here we can see the instance-identity document.
>
> **[4:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=251)** As you can see, it contains important information, such as the accountId, architecture, availabilityZone, instanceId, type, region, and more.
>
> **[4:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=263)** Now let's try to access the instance metadata using version two.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=267)** I'll first clear the screen.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=269)** We know that for version two we need to use two commands.
>
> **[4:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=272)** The first command is used to request a token, and save it in a variable.
>
> **[4:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=277)** I've already tried the command, so I'll repaint it using the up arrow.
>
> **[4:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=280)** And here is the command.
>
> **[4:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=281)** We begin by setting the variable called token, and then we use the curl utility with the http PUT request for a token, and the TTL value is set to 21,600 seconds.
>
> **[4:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=294)** When I press enter, a token is returned and stored in the variable, and the next command will use the token to access the metadata.
>
> **[5:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=302)** Here is the second command.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=304)** As you can see, it uses the token variable, and uses the same URL that we used earlier, [http://169.254.169.254/latest/meta-data](http://169.254.169.254/latest/meta-data).
>
> **[5:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=316)** Press enter, and you will see the same attributes.
>
> **[5:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=320)** Let's try to access a specific attribute.
>
> **[5:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=323)** I'll first clear the screen, and towards the end of the command, let's add mac.
>
> **[5:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=329)** This will show the MAC address of the EC2 instance.
>
> **[5:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=332)** The information we are looking for is here.
>
> **[5:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=335)** This is the MAC address of the EC2 instance.
>
> **[5:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=337)** As you can see, this command adds a lot of information, like the IP address you're trying to access, here's the token, and the TTL remaining on the token.
>
> **[5:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=347)** If you'd like to hide this information, you can remove the -v switch from the command.
>
> **[5:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=353)** Let's try that again.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=354)** I'll use the up arrow, and remove the -v token, and try again.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=361)** And straight away we can see the output, the MAC address of the EC2 instance.
>
> **[6:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=367)** Now let's go to a Windows EC2 instance and try to access the metadata.
>
> **[6:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=371)** From a Windows EC2 instance, you can use the PowerShell utility to access the instance metadata.
>
> **[6:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=378)** I've already opened up PowerShell, and I've already tried the command, so I'll use the up arrow.
>
> **[6:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=384)** It's the same command, curl followed by the URL.
>
> **[6:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=388)** And when I press enter, I can see all the attributes that I can access.
>
> **[6:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=392)** And this is described in the content section.
>
> **[6:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=395)** Now let's try to access a specific attribute.
>
> **[6:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=397)** I'll first clear the screen, and let's try to access the instance-id.
>
> **[6:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=402)** So I'll add instance-id to the end.
>
> **[6:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=405)** And under the content section, we can see the instance-id of the instance.
>
> **[6:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=410)** You can also access the metadata from a browser.
>
> **[6:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=413)** Let's try that.
>
> **[6:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=415)** I have a browser open here.
>
> **[6:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=417)** When you're trying from the browser, you do not need to use the curl utility.
>
> **[7:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=421)** You can use the URL as it is.
>
> **[7:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=423)** So http followed by the IP address, /latest/metadata.
>
> **[7:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=429)** Press enter, and here's all the attributes.
>
> **[7:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=433)** Let's try to access the public IP address of this instance.
>
> **[7:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=436)** So towards the end of the command, we can add public-ipv4, press enter, and here's the public IP address of the instance.
>
> **[7:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/instance-metadata?u=76281980&t=447)** So as you've seen, instance metadata can be used to access important attributes of your EC2 instance, such as the IP address, instance-id, security groups, MAC address, availability zone, region, and more.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (14), url (9), mac (5), http (3), ttl (2)
> **Code Keywords:** let (15), public (5), default, (1), interface (1), type, (1)
> **CLI Commands:** curl (10), aws (1)
> **Definitions:** is a  (5), known as (1)
> **Analogies:** such as (5), for example (1)
> **Tools:** command line (2), powershell (2)
> **Code Identifiers:** accountid (1), availabilityzone (1), instanceid (1)
> **URLs:** [http://169.254.169.254/latest/meta-data](http://169.254.169.254/latest/meta-data) (2)

#### Attaching an IAM role
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=0)** - [Instructor] Now let's talk about attaching an IAM role to an EC2 instance.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=4)** By default, your EC2 instances do not have access to other AWS services.
>
> **[0:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=10)** Here is an example.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=11)** Let's say you have an EC2 instance running in your AWS account, and you also have other AWS services in the same account.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=18)** For example, you have an S3 bucket with objects in it and you also have an Amazon RDS database.
>
> **[0:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=25)** By default, your EC2 instance will not be able to access these objects or these services even if they belong to the same AWS account.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=34)** Let's verify this from the EC2 console.
>
> **[0:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=38)** I'm here at the EC2 console.
>
> **[0:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=39)** For this demonstration I'm going to use an Amazon Linux EC2 instance.
>
> **[0:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=44)** This EC2 instance has the Amazon Linux AMI.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=47)** And the reason I'm using this is because it has the AWS command-line tools pre-installed on it.
>
> **[0:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=53)** You can use any AMI of your choice, including Windows AMIs, but you may need to install the AWS CLI on it.
>
> **[1:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=61)** With Amazon Linux AMI the AWS CLI is pre-installed so I'm going to use this for the demo.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=67)** Before we go to the terminal of this EC2 instance let's verify that we have a bucket in the S3 service.
>
> **[1:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=73)** So I'll use the Services dropdown menu.
>
> **[1:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=76)** I'll scroll down to the Storage section and then go to the S3 service.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=81)** As you can see here I already have a bucket in the S3 service.
>
> **[1:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=84)** Now let's try to access this bucket from the EC2 instance.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=89)** I'm here at the terminal of the EC2 instance.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=92)** And to access the S3 service I'm going to use the command aws s3 ls.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=99)** You start with the aws keyword, followed by the service, in this case S3, followed by the command you'd like to access, in this case ls, which is for listing the S3 buckets.
>
> **[1:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=110)** If you'd like to see other AWS services you can interact with, you can use the command aws help.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=116)** Scroll down and you will see all the services that you can interact with using the command-line interface.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=122)** Press Q to exit.
>
> **[2:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=124)** So let's use the command aws s3 ls.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=128)** By the way, if you'd like to see other commands available with the S3 service, you can type in aws S3 help.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=134)** Scroll down the page using the Space bar and you will be able to see the different commands supported for the S3 service.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=142)** Q to exit.
>
> **[2:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=143)** Now let's try the command aws s3 ls and we can see an error message here that says, "Unable to locate credentials."
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=151)** So the EC2 instance is not able to access the S3 bucket.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=155)** Now let's understand how to fix this.
>
> **[2:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=158)** Back over here, to grant permissions to the EC2 instance there are two options.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=163)** You can add access keys to the EC2 instance or you can attach an IAM role.
>
> **[2:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=169)** Let's talk about adding access keys to the EC2 instance.
>
> **[2:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=173)** Access keys are credentials associated with a user account.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=176)** So you can hardcode these access keys into the EC2 instance to provide permissions to the instance to access another service.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=184)** But as you can imagine, hard coding access keys into the EC2 instance is a security risk because anyone with access to the EC2 instance can use the keys to access another service.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=195)** So it is not a recommended security best practice.
>
> **[3:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=198)** Also, for better security, the keys must be rotated.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=203)** Alternatively, to grant permissions to the EC2 instance, you can attach an IAM role.
>
> **[3:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=208)** So you can attach IAM roles to EC2 instances to grant them permissions or access to other AWS services.
>
> **[3:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=216)** Let's talk about IAM roles.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=219)** An IAM role is an AWS identity with specific permissions associated to it.
>
> **[3:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=225)** It is similar to an IAM user in that it is an identity with permissions.
>
> **[3:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=229)** However, unlike an IAM user, which allows you to log into AWS, an IAM role is intended to be assumable.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=238)** So in simple words, an IAM role is an object within AWS with specific permissions and other objects can assume the role to gain specific permissions.
>
> **[4:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=250)** An IAM role does not have long-term credentials such as a password or access keys associated with it.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=257)** Instead, when a role is assumed it provides temporary security credentials for that session.
>
> **[4:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=264)** And this is transparent to the end user.
>
> **[4:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=266)** The end user does not see the temporary security credentials that are generated.
>
> **[4:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=270)** AWS handles this in the background.
>
> **[4:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=272)** So to grant permissions to your EC2 instance you should prefer IAM roles over adding access keys.
>
> **[4:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=279)** Going back to the earlier scenario, to grant access to this EC2 instance, you can attach an IAM role with the necessary permissions.
>
> **[4:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=286)** And when you do so the instance should be able to access the S3 bucket and the Amazon RDS database.
>
> **[4:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=293)** Now let's go to the AWS console and see how to configure this.
>
> **[4:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=298)** Back over here to the AWS console.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=300)** To configure an IAM role, we'll need to go to the IAM service.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=304)** So we'll use the Services dropdown menu and navigate to Security, Identity, and Compliance.
>
> **[5:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=310)** And then go to the IAM service.
>
> **[5:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=313)** From the IM console you can create both access keys and IAM roles.
>
> **[5:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=318)** If you're logged in as the root user or the first user account of your AWS subscription you can create access keys from here by clicking My Security Credentials.
>
> **[5:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=328)** Once you're here, scroll down, and from here you can create an access key.
>
> **[5:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=333)** If you'd like to create an access key for an IAM user you can go to Users on the left navigation pane, click the required username, go to Security Credentials, and then create the required access keys from here.
>
> **[5:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=345)** But we are going to use IAM roles.
>
> **[5:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=348)** To create IAM roles click Roles on the left navigation pane and then create a role.
>
> **[5:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=355)** The first step is to define the entity type that will be using the role.
>
> **[5:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=359)** In this case, an AWS service, that is EC2, will be using the IAM role.
>
> **[6:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=365)** Next, we need to provide a use case.
>
> **[6:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=368)** In our scenario The EC2 instance wants access to other AWS services so we're going to use the EC2 use case.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=376)** Click Next.
>
> **[6:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=378)** On this step, you will need to attach a permissions policy.
>
> **[6:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=382)** A permissions policy is a document with permissions attached to it.
>
> **[6:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=386)** There are predefined policies managed by AWS and you also have the ability to create a custom policy.
>
> **[6:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=392)** For this demonstration we are going to use a predefined policy.
>
> **[6:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=396)** So we'll search for S3, and the policy we are looking for is AmazonS3ReadOnlyAccess.
>
> **[6:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=403)** We're only trying to list the S3 bucket from the EC2 instance so read-only access should be sufficient.
>
> **[6:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=410)** If you'd like to see how the policy is defined click the plus symbol.
>
> **[6:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=414)** As you can see this policy provides list permissions on all resources, so this policy should be enough to list the S3 buckets from the EC2 instance.
>
> **[7:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=424)** So select the policy, scroll down and click Next.
>
> **[7:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=430)** Provide a name for your IAM role.
>
> **[7:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=432)** I'm going to call this as EC2S3ReadOnlyAccess.
>
> **[7:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=439)** Scroll down and click Create Roll.
>
> **[7:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=444)** Now the role has been created.
>
> **[7:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=446)** The last step is to attach the role with the EC2 instance.
>
> **[7:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=450)** So we'll go back to the EC2 service.
>
> **[7:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=453)** Scroll to Instances on the left navigation pane.
>
> **[7:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=457)** Select your EC2 instance, click the Actions button then go to Security and click Modify IAM role.
>
> **[7:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=466)** From the dropdown select the IAM roll you just created called EC2S3ReadOnlyAccess, then click Update IAM role.
>
> **[7:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=476)** Now the EC2 instance should have the necessary permissions to list the S3 buckets.
>
> **[8:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=481)** Let's verify this.
>
> **[8:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=483)** Back over here to the EC2 terminal, let's try to use the same command again.
>
> **[8:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=487)** aws s3 ls.
>
> **[8:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=490)** And now we can see the S3 buckets in this AWS account.
>
> **[8:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=494)** So as you can see the advantage of doing it this way is that access keys are not hard coded into the EC2 instance.
>
> **[8:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=501)** By the way, if you did want to configure access keys the command to do this is aws configure.
>
> **[8:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=507)** So let's say you had access keys and you wanted to add them to your EC2 instance, you would use the command aws configure, press Enter, and here you can type in your access key ID, your secret access key which is also available from the same console, the default region, and the default output format.
>
> **[8:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=525)** And when you press Enter your access keys and your secret access keys, get hard coded into the EC2 instance.
>
> **[8:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=532)** But as we now know, this is not a recommended security best practice.
>
> **[8:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=536)** To grant permissions to the EC2 instance you should always attach an IAM role.
>
> **[9:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=542)** Now, take a moment to try this in your AWS account.
>
> **[9:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=545)** Try to access any other AWS service from your EC2 instance.
>
> **[9:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/attaching-an-iam-role?u=76281980&t=549)** As an example try to list the IAM roles in your AWS account.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (37), iam (27), aws (23), ami (3), rds (2)
> **CLI Commands:** aws (32), ls (5)
> **Code Keywords:** let (14), this. (3), default, (2), case. (2), interface (1)
> **UI Navigation:** go to (8), scroll down (6), dropdown (3), select the (2), navigate to (1)
> **Definitions:** is an  (4), is a  (2)
> **Prerequisites:** configure (5), install (1)
> **Tools:** terminal (3), aws console (2)
> **Best Practices:** recommended (2), best practice (2), you should always (1)

#### Launch templates
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=0)** - [Instructor] When you're launching an EC2 instance, you are required to provide parameters or configuration information, such as the AMI ID, instance type, key pair, VPC and subnet information, security groups, storage information, and more.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=16)** And you're required to provide this information each time you launch an EC2 instance.
>
> **[0:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=21)** You can save some time by saving this information in a launch template.
>
> **[0:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=25)** With launch templates, you can store EC2 launch parameters and use them to launch EC2 instances.
>
> **[0:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=33)** A launch template contains configuration information required to launch an EC2 instance.
>
> **[0:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=39)** It contains all the information you would configure from the EC2 instance launch wizard, such as the AMI ID, instance type, subnets, security groups, and more.
>
> **[0:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=49)** Launch templates can be used to launch instances from the Amazon EC2 console or the user interface, the AWS SDKs, or software development kits, and the AWS CLI, or the Command Line Interface.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=63)** Each template can have one or more numbered versions.
>
> **[1:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=66)** When you create a new template, it is Version 1, and every time you edit the template, you are creating a numbered version.
>
> **[1:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=74)** Each version can have different parameters, and any version can be set as the default.
>
> **[1:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=80)** Each version can have different parameters, and any version can be set as the default.
>
> **[1:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=86)** Here's an example.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=87)** Let's say you create a new launch template.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=89)** When you create a new template, it is Version 1.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=92)** Version 1 of this template has information such as the AMI ID, the instance type, security group, and key pair.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=101)** When you edit the template, it creates a new version.
>
> **[1:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=103)** That is Version 2.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=105)** In this case, the difference between Version 1 and Version 2 is that Version 2 has a different security group, and additionally, it also has the subnet configuration.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=115)** Again, when you edit the template, you create a new version.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=118)** That is Version 3 In this case, the difference between Version 2 and Version 3 is that Version 3 has a different instance type and subnet configuration.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=128)** Version 3 has been configured as the default.
>
> **[2:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=132)** Even though Version 3 is the default, you can still use Version 1 and Version 2 to launch EC2 instances.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=139)** Launch templates are immutable, so when you edit a template, a new version is automatically created.
>
> **[2:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=145)** A launch template can contain all or some of the parameters to launch an EC2 instance.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=151)** Parameters contained in the template can be overwritten at launch time.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=155)** For example, let's say you have a launch template that has the instance type configured as t2.micro.
>
> **[2:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=161)** When you use the launch template to launch an EC2 instance, the instance type can be changed.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=166)** For example, you can change it from t2.micro to t2.medium.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=171)** Launch templates can also be used to launch instances with Amazon EC2 Auto Scaling.
>
> **[2:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=177)** Auto Scaling is an AWS service that allows you to create highly available and fault tolerant applications in the AWS Cloud.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=184)** If you'd like to learn more about Auto Scaling, check out the course titled EC2 Load Balancers in the LinkedIn Learning Library.
>
> **[3:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=192)** Now let's go to the EC2 console and configure a launch template.
>
> **[3:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=197)** Once you're in the EC2 console, navigate to the Launch Templates section on the left navigation pan.
>
> **[3:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=203)** From here, click Create launch template.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=207)** You'll need to start by providing a name.
>
> **[3:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=209)** I'm going to use this launch template to create Linux EC2 instances, so I'll call this template as LinuxServerTemplate.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=217)** Next, you can provide a description.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=219)** Check this box if you plan to use this template with an Auto Scaling group.
>
> **[3:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=225)** Next, you have the option to tag the template.
>
> **[3:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=228)** The tags you define here will be applied to the template itself and not to the EC2 instances launched with the template.
>
> **[3:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=236)** If you'd like to tag the EC2 instances, there is a Configuration option towards the bottom, but the tags you define here will only apply to the template.
>
> **[4:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=245)** Next is the Source template option.
>
> **[4:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=248)** Use this option if you'd like to copy the settings from an existing template.
>
> **[4:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=253)** Scrolling down, you will see the exact same settings that you see in the EC2 instance launch wizard.
>
> **[4:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=258)** Starting with the AMI information.
>
> **[4:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=261)** Bear in mind that all the settings you see here are optional, meaning you may or may not configure them.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=268)** For this launch template, I'm going to use the Amazon Linux AMI, which is in the Quick Start section.
>
> **[4:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=274)** If you'd like to select an AMI from the Marketplace or Community, click the option Browse more AMIs.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=282)** Scrolling down, I'm going to select an instance type.
>
> **[4:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=285)** I'll set this to t2.micro.
>
> **[4:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=288)** I'll also provide a key pair name.
>
> **[4:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=291)** Then I'll select an existing security group.
>
> **[4:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=294)** Scrolling down, we have the Storage section.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=297)** Here we can see the root volume, which is eight gigs in size, and this setting is inherited from the AMI you select.
>
> **[5:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=303)** Notice, you also have the option to add additional volumes.
>
> **[5:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=308)** Next, we have Resource tags.
>
> **[5:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=309)** The tags you define here will be applied to the EC2 instances launched using this template.
>
> **[5:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=315)** Let's add a tag.
>
> **[5:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=320)** I've added a tag for the Owner.
>
> **[5:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=322)** This tag will be applied to any EC2 instance we launch with this template.
>
> **[5:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=327)** Scrolling down, we have the Advanced details section, which contains information such as the IAM instance profile, hostname type, shutdown behavior, hibernate behavior, termination protection, and more.
>
> **[5:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=339)** These are the exact same options that we see in the EC2 instance launch wizard.
>
> **[5:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=344)** Once you complete your configuration, click Create launch template.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=349)** The template has been created, and we can see it here on the console.
>
> **[5:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=353)** This template only has one version, and it is the default version.
>
> **[5:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=358)** To create an EC2 instance using this template, you can select it, click the Actions button, and then click Launch instance from template.
>
> **[6:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=367)** But before we do that, let's create another version of this template.
>
> **[6:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=371)** So with the template selected, click the Actions button, and then click Modify template, which will create a new version.
>
> **[6:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=379)** You will notice here that all the settings have been copied from the original template.
>
> **[6:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=384)** We can make any changes over here.
>
> **[6:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=386)** For this version, I'm going to change the instance type.
>
> **[6:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=389)** I'm going to change this from t2.micro to t2.medium.
>
> **[6:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=393)** I'll leave all of the settings the way they are and click Create template version.
>
> **[6:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=398)** So a new version has been created, and we can see that here.
>
> **[6:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=401)** This template has two versions, and the default version is Version 1.
>
> **[6:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=407)** Let's change the default version.
>
> **[6:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=409)** Select your template, click the Actions button, and then click Set default version.
>
> **[6:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=415)** From here, select the version that you'd like to make default, and then click Set as default version.
>
> **[7:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=421)** So now we have two versions of the template, and Version 2 is the default version.
>
> **[7:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=426)** Now let's launch an EC2 instance using this template.
>
> **[7:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=429)** With the template selected, click the Actions button and then click Launch instance from template.
>
> **[7:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=436)** Doing so will invoke the EC2 instance launch wizard, and you will notice all the configuration items are automatically populated from the template.
>
> **[7:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=445)** Here, you will see all versions of the template, and you can select any version to launch the EC2 instance.
>
> **[7:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=452)** So we can see that the AMI is pre-selected.
>
> **[7:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=456)** The instance type, key pair, security group, and all of the configuration items are automatically configured from the launch template.
>
> **[7:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=464)** I'm going to click Launch instance, and the instance has been launched.
>
> **[7:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=469)** As you can see, storing the information in a launch template simplifies the EC2 instance launch experience.
>
> **[7:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=475)** We do not need to configure every parameter.
>
> **[7:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=478)** Now let's see the EC2 instance we launched.
>
> **[8:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=481)** I'll go back to the EC2 console, click Instances on the left navigation pain, and here is the EC2 instance we launched.
>
> **[8:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=489)** Let's view the tags of this EC2 instance.
>
> **[8:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=492)** When you create an EC2 instance using your launch template, it will automatically have two tags assigned to it.
>
> **[8:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=498)** The first tag is the Template ID, and the second tag is the Template Version.
>
> **[8:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=504)** Additionally, we can see one more tag because we added this tag through the launch template.
>
> **[8:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=510)** So as you can see, launch templates can save a lot of time that would otherwise be needed to configure the EC2 instance.
>
> **[8:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=517)** Now, try this in your AWS account.
>
> **[8:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/launch-templates?u=76281980&t=519)** Create a launch template with the desired settings and then override some of these when you're launching the instance.

> [!info]- Semantic Content
>
> **Exercise Files:** template (54)
> **Env Vars:** ec2 (32), ami (8), aws (5), vpc (1), cli (1)
> **Code Keywords:** let (9), type, (5), default. (3), interface (2), case, (2)
> **Versions:** version 1 (6), version 2 (6), version 3 (5)
> **Prerequisites:** configure (5), required to (3), you'll need (1)
> **CLI Commands:** aws (5), make (2)
> **Analogies:** such as (4), for example (2)
> **UI Navigation:** go to (1), navigate to (1), select the (1)

#### Security groups as source or destination
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=0)** - [Tutor] In an earlier video, we talked about security groups in that they are like a virtual firewall that control inbound and outbound traffic for EC2 instances.
>
> **[0:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=9)** We also learned that we can configure IP addresses as the source or destination of security groups.
>
> **[0:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=15)** Interestingly, a security group can also reference another security group as its source or destination.
>
> **[0:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=22)** So we can not only configure an IP address as the source or destination, but we can also configure a security group as the source or destination for another security group.
>
> **[0:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=32)** Let's understand this with an example.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=35)** Let's say we have two servers in the US east-1 region, a web server, and a monitoring server.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=41)** Both these servers are associated with different security groups.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=45)** The web server needs to allow web traffic from the internet so the inbound rule of the web server security group is configured like this.
>
> **[0:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=52)** It allows HTTP traffic on port 80 from all IP addresses.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=57)** The monitoring server also needs to access the web server on ICMP to perform health checks.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=63)** The IP address of the monitoring server is 10.1.1.1.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=67)** To allow this access we can configure an inbound rule that looks like this.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=72)** It allows ICMP traffic from the source IP address of 10.1.1.1, which is the monitoring server.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=79)** While this configuration will work if the monitoring server's IP address changes or if you add additional monitoring servers you will need to update the inbound rule.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=90)** So instead of configuring the inbound rule with the IP address of the monitoring server we can configure the security group associated with the monitoring server.
>
> **[1:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=99)** So now the inbound rule allows ICMP traffic from the security group associated with the monitoring server.
>
> **[1:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=105)** This means the rule will continue to allow access even if the IP address of the monitoring server changes or even if you add additional monitoring servers.
>
> **[1:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=116)** A similar configuration can also be applied to outbound rules.
>
> **[2:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=120)** Here is an example.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=122)** Let's say the same web server also needs to send logs to a logging server at 10.1.1.5 on TCP 9999.
>
> **[2:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=130)** The logging server is associated with a different security group.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=134)** To allow this access we can configure an outbound rule that looks like this.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=139)** It allows custom TCP traffic on TCP 9999 towards the destination 10.1.1.5.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=147)** While this configuration will work if you change the IP address of the logging server or if you add additional logging servers you will need to update the outbound rule.
>
> **[2:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=156)** So instead of configuring the outbound rule with the IP address of the logging server you can add the security group of the logging server as the destination.
>
> **[2:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=165)** Now, the IP address of the logging server does not matter.
>
> **[2:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=168)** You can change the IP address or you can add additional logging servers and the access should still work.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=175)** Here's another example, which is a typical scenario in a production environment.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=179)** A group of web servers need to access a group of database servers on TCP 1433.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=186)** To allow this access, the source of the database server security group inbound rules can be set as the security group associated with the web servers.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=195)** This means if you add additional web servers in future they should continue to have access to the database servers.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=202)** Now, let's go to the EC to console and configure this.
>
> **[3:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=206)** Here is the configuration scenario we are going to use.
>
> **[3:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=208)** We have a web server that needs to allow internet traffic.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=212)** We have a web server that needs to allow web traffic from the internet, and it also needs to allow ICMP traffic from the monitoring server.
>
> **[3:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=220)** Now, let's go to the EC2 console and configure this.
>
> **[3:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=224)** I'm here at the EC2 console.
>
> **[3:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=226)** I've already configured two servers, a web server and a monitoring server.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=231)** Let's begin by reviewing the security groups associated with these servers.
>
> **[3:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=235)** I'll select the web server first.
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=237)** Go to the security tab and here we can see that the security group associated with the web server is called WebServer SG, and it has two inbound rules.
>
> **[4:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=247)** The first rule allows web traffic on port 80 from all IP addresses and the second rule allows ICMP traffic from all IP addresses.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=257)** The second server, which is called as the monitoring server has a security group associated with it called as the Monitoring SG.
>
> **[4:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=264)** So both the servers have been configured with different security groups.
>
> **[4:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=268)** This security group allows SSH traffic from all IP addresses, so administrators can use this to log into the monitoring server.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=276)** The current security group configuration of the web server allows ICMP traffic from all IP addresses.
>
> **[4:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=282)** We need to update this rule to only allow ICMP traffic from the monitoring server.
>
> **[4:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=287)** But before we do that, let's verify the access.
>
> **[4:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=291)** I'll first copy the private IP address of the web server and try to ping it from the monitoring server.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=297)** So here's the private IP address of the web server.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=300)** I'll now switch to a terminal window.
>
> **[5:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=303)** I'm here at a terminal window and I'm logged into the monitoring server.
>
> **[5:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=306)** From here, I'll ping the private IP address of the web server.
>
> **[5:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=310)** And as you can see, we are receiving responses.
>
> **[5:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=314)** So the monitoring server is able to access the web server on ICMP to perform the required health checks.
>
> **[5:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=320)** Let's also verify that the web server also allows ICMP from the internet.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=326)** Back over here to the EC2 console, I'll copy the public IP address of the web server.
>
> **[5:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=331)** Back to the terminal, I'll try to ping this from my local computer.
>
> **[5:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=336)** This traffic will traverse the internet and we can see that the web server is responding to ICMP request from the internet.
>
> **[5:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=343)** Now, we need to change this configuration.
>
> **[5:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=345)** We need to modify the security group of the web server so it only allows ICMP traffic from the monitoring server, not from the internet.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=354)** Back over here to the EC2 console, let's first navigate to security groups on the left navigation pane.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=361)** Then I'll select the security group associated with the web server, which is called as WebServer SG.
>
> **[6:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=367)** I'll navigate to inbound rules and then click edit Inbound rules.
>
> **[6:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=372)** Here is the inbound rule that allows ICMP traffic from the internet.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=376)** We need to change the source of this rule to the security group associated with the monitoring server.
>
> **[6:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=381)** The existing rule cannot be updated so we have to add a new rule that allows all ICMP traffic from a custom source and will set the source to the security group of the monitoring server which is called MonitoringServer SG.
>
> **[6:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=398)** So this rule will only allow ICMP traffic from the monitoring server, and now we can delete the other rule that allows ICMP from everywhere.
>
> **[6:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=407)** Then I'll click save rules.
>
> **[6:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=409)** Now the security group looks good.
>
> **[6:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=411)** It allows HTTP traffic from all IP addresses and ICMP traffic only from the monitoring server.
>
> **[6:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=418)** Now let's go to the terminal and verify this.
>
> **[7:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=421)** Back over here, I'll first try to ping from the internet and we can see that pings are getting blocked.
>
> **[7:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=427)** Now let's try to ping from the monitoring server.
>
> **[7:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=430)** I'll switch to this tab here and try to ping the private IP address of the web server and we can see that pings are being allowed.
>
> **[7:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=438)** With this configuration, in future, if we add any more monitoring servers they will also be able to ping the web server.
>
> **[7:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/security-groups-as-source-or-destination?u=76281980&t=445)** As you can see, using a security group as a source or destination for another security group can simplify security group rules and reduce their complexity particularly in large deployments.

> [!info]- Semantic Content
>
> **Env Vars:** icmp (16), ec2 (5), tcp (4), http (2), ssh (1)
> **Code Keywords:** let (11), this. (6), private (4), continue (2), switch (2)
> **UI Navigation:** go to (4), select the (2), switch to (2), navigate to (2)
> **Prerequisites:** configure (8)
> **Definitions:** is called (4), is an  (1), is a  (1)
> **Versions:** 10.1.1 (4)
> **Tools:** terminal (4)
> **Ports:** port 80 (2)


### 3. EC2 Purchasing Options

#### Introduction to EC2 purchasing options
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=0)** - [Narrator] Now let's shift gears and talk about EC2 purchasing options.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=4)** When launching EC2 instances in your AWS account, you have the option to use different purchasing options.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=11)** These purchasing options allow you to optimize costs and usage based on your needs.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=16)** There are seven purchasing options in total, starting with on-demand instances, capacity reservations, spot instances, reserved instances, savings plans, dedicated instances, and dedicated hosts.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=31)** Let's talk about some of the use cases for these purchasing options.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=35)** On-demand EC2 instances allow you to get started with EC2 without any long-term commitments.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=41)** With reserved instances, you can reserve capacity with upfront payment in exchange for a billing discount.
>
> **[0:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=48)** Spot instances allow you to use spare EC2 capacity available at lower costs.
>
> **[0:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=54)** And with dedicated instances and dedicated hosts, you can run your EC2 instances on dedicated hardware.
>
> **[1:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=61)** So as you can see, there are different use cases and scenarios, and EC2 purchasing options make these possible.
>
> **[1:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/introduction-to-ec2-purchasing-options?u=76281980&t=68)** In the following videos, we'll explore each of these purchasing options in detail.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (7), aws (1)
> **CLI Commands:** aws (1), make (1)
> **Code Keywords:** let (2)
> **Speakers:** - [narrator] (1)

#### On-demand instances and capacity reservations
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=0)** - [Instructor] Let's explore the first two purchasing options, that is, on-demand instances and capacity reservations.
>
> **[0:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=6)** On-demand instances are those that we've been launching all throughout this course.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=11)** These are the instances you launch from the EC2 Console without any reservations or special pricing.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=18)** With on-demand instances you pay by the hour or second without any long-term commitments.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=24)** You have full control over the EC2 instance lifecycle.
>
> **[0:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=28)** You can launch, stop, hibernate, reboot, or terminate the instance anytime.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=34)** On-demand instances are ideal for short-term workloads that cannot be interrupted.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=40)** With on-demand instances pricing is based on per instance hour.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=45)** Partial instance-hour is built per second for Linux EC2 instances, Windows instances, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web instances.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=57)** For all other instance types the partial instance-hour is billed as a full hour.
>
> **[1:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=63)** Now let's go to an AWS document that explains pricing for on-demand instances.
>
> **[1:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=69)** Here is a document titled "Amazon EC2 On-Demand Pricing," and this document allows you to look up the prices for on-demand instances.
>
> **[1:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=77)** You can do this by specifying the region, operating system, and instance type, and AWS will tell you the hourly price for that on-demand EC2 instance.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=87)** Bear in mind this is not the only price you pay for EC2 instances.
>
> **[1:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=91)** You also pay for data transfer, and it is described here.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=95)** In addition to this, you also pay an hourly price for storage attached to the EC2 instance.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=101)** While on-demand instances are a great choice for short-term workloads, their availability is not guaranteed.
>
> **[1:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=108)** Imagine that you have an event coming up for which you need 100 EC2 instances for a short duration.
>
> **[1:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=114)** When you try to launch those instances, it is not guaranteed that there will be available capacity to fulfill your request.
>
> **[2:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=122)** For such situations, there is on-demand capacity reservations.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=127)** On-demand capacity reservations allow you to reserve compute capacity and mitigate the risk of capacity constraints.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=135)** Capacity is reserved in a specific availability zone for any duration.
>
> **[2:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=140)** Capacity reservations are ideal for business-critical workloads that require capacity assurance, for example, if you need compute capacity for an upcoming event.
>
> **[2:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=153)** Capacity reservations can be created anytime without requiring a long-term commitment.
>
> **[2:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=159)** Billing starts when you provision capacity and stops when you cancel the reservation.
>
> **[2:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=164)** You are charged at the equivalent on-demand rate whether you use the capacity or not.
>
> **[2:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=169)** And other than that, there are no additional charges.
>
> **[2:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=173)** To create a capacity reservation you must specify the availability zone in which to reserve capacity, the number of instances, and instance attributes such as the instance type, tenancy, and platform or operating system.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=188)** Now let's go to the EC2 Console and see how to create a capacity reservation.
>
> **[3:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=193)** From the EC2 Console click Capacity Reservations on the left navigation pane.
>
> **[3:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=198)** Then click Create Capacity Reservation.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=202)** First, you'll need to provide the instance type, the platform, which is the operating system, and then the availability zone.
>
> **[3:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=209)** Next, you can provide the tenancy, which is shared or dedicated hardware.
>
> **[3:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=214)** If you'd like to put your instances in a placement group, you can define that here.
>
> **[3:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=218)** Then you can define the number of instances required for this reservation.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=223)** And down here you can define when the reservation ends.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=227)** If you set this to manual, the capacity reservation ends when you manually end it.
>
> **[3:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=233)** Or if you'd like it to end at a specific date and time, you can use this option and provide the end date and end time.
>
> **[4:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=240)** The next option is instance eligibility.
>
> **[4:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=243)** Instance eligibility defines which instances will count towards this reservation.
>
> **[4:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=248)** If you set this to open, any instance matching the attributes you define above will count towards this reservation.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=255)** If you set it to targeted, only instances launched with the reservation ID will count towards the reservation.
>
> **[4:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=262)** So when you create the reservation, your reservation ID is generated, which you can specify at the time of launching the EC2 instance.
>
> **[4:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=270)** When you finish the configuration, click Create at the bottom to create your capacity reservation.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=276)** So just to recap, for short-lived workloads, on-demand instances are a great choice because you do not need to enter into any commitments.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/on-demand-instances-and-capacity-reservations?u=76281980&t=284)** For short-lived workloads that require guaranteed capacity, on-demand capacity reservations are a good choice because it provides capacity assurance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (11), sql (3), aws (2)
> **Code Keywords:** let (3), type, (3), require (2), this, (1)
> **Analogies:** imagine (1), for example (1), such as (1)
> **CLI Commands:** aws (2)
> **UI Navigation:** go to (2)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)

#### Spot instances
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=0)** - [Narrator] The next purchasing option is probably the most interesting one, Spot Instances.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=5)** Spot Instances are unused EC2 instances available at less than the On-Demand price.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=12)** Spot Instances are available at steep discounts, allowing you to lower your EC2 usage costs.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=18)** In some cases, Spot Instances may be available at up to 90% discount compared to On-Demand Instances.
>
> **[0:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=25)** Now let's understand how you can request a Spot Instance.
>
> **[0:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=29)** AWS sets the hourly price of Spot Instances, and this is known as the Spot price.
>
> **[0:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=35)** When you're requesting a Spot Instance, you're required to provide your maximum price per hour.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=41)** If the maximum price you're willing to pay per hour exceeds the Spot price, the request is fulfilled.
>
> **[0:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=48)** Here is an example.
>
> **[0:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=49)** Let's say the Spot price for an EC2 instance is $0.80 per hour.
>
> **[0:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=54)** This is set by AWS.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=57)** The maximum price you're willing to pay is $0.65 per hour.
>
> **[1:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=61)** In this case, the maximum price does not exceed the Spot price, and so the request will not be fulfilled, meaning the Spot Instance will not be allocated to you.
>
> **[1:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=71)** In this case, the maximum price does not exceed the Spot price, so the request will not be fulfilled, meaning the Spot Instance will not be allocated to you.
>
> **[1:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=80)** The Spot price changes based on demand and supply.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=83)** Let's say the Spot price has changed to $0.60 per hour.
>
> **[1:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=87)** Now the maximum price exceeds the Spot price, so the request will be fulfilled, and the Spot Instance will be allocated to you.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=95)** Now let's say the Spot price has changed again, and it is now $0.75 per hour.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=101)** Now your maximum price no longer exceeds the Spot price, so the Spot Instance will be interrupted, meaning the Spot Instance will either be terminated, stopped, or hibernated, depending on your configuration.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=115)** An important thing to bear in mind is that with Spot Instances, you always pay the Spot price, which is set by Amazon EC2.
>
> **[2:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=123)** Even though the request is only fulfilled when your maximum price exceeds the Spot price, you are charged the Spot price, and it is kept at the On-Demand rate.
>
> **[2:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=132)** This means you will never pay for a Spot Instance more than the On-Demand rate.
>
> **[2:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=137)** To request a Spot Instance, you start by creating a Spot Instance request.
>
> **[2:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=142)** In the request, you'll need to include the maximum price you're willing to pay per hour, the desired number of instances, the instance type, and availability zone.
>
> **[2:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=152)** When using Spot Instances, one thing to be aware of is interruptions.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=157)** When Amazon EC2 reclaims a Spot Instance, it is known as a Spot Instance interruption.
>
> **[2:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=164)** This can happen if AWS needs to repurpose capacity, that is, use the capacity of Spot Instances for other services, or if the Spot price is higher than your maximum price.
>
> **[2:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=175)** In both these situations, the Spot Instance will be interrupted.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=179)** When Amazon EC2 interrupts a Spot Instance, it either terminates, stops, or hibernates the instance, depending on the configuration.
>
> **[3:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=189)** When using Spot Instances, your application should be prepared for an interruption.
>
> **[3:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=194)** To help you prepare for interruptions, AWS provides two types of signals.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=199)** The first one is EC2 instance rebalance recommendation, and the second one is Spot Instance interruption notice.
>
> **[3:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=207)** The EC2 instance rebalance recommendation is a signal that notifies you when a Spot Instance is at elevated risk of interruption.
>
> **[3:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=215)** A Spot Instance interruption notice is a warning that is issued two minutes before the Spot Instance is interrupted.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=223)** So when you see the EC2 instance rebalance recommendation, it means there is a good chance that your Spot Instance will be interrupted.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=230)** The rebalance recommendation allows you to move your workloads to other Spot Instances that are not at an elevated risk of interruption.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=238)** When you see the Spot Instance interruption notice, you can be sure that your Spot Instance will be interrupted in the next two minutes.
>
> **[4:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=246)** Upon interruption, Spot Instances are terminated, stopped, or hibernated, depending on the configuration.
>
> **[4:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=253)** When set to stop or hibernate, Spot Instances will automatically resume when capacity is available.
>
> **[4:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=260)** Rebalance recommendations and interruption notifications can be captured using two services, Amazon EventBridge and instance metadata.
>
> **[4:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=269)** Amazon EventBridge allows you to capture events occurring in your AWS account and take actions on them.
>
> **[4:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=275)** Here is an example of a rebalance recommendation captured using Amazon EventBridge.
>
> **[4:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=280)** It contains the event ID and the detail type, which is set to EC2 Instance Rebalance Recommendation.
>
> **[4:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=287)** Other details include source, account, time, region, and the affected instance ID.
>
> **[4:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=295)** Here is an example of a Spot Instance interruption notice captured using Amazon EventBridge.
>
> **[5:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=301)** It contains the ID, the detail type, which is set to EC2 Spot Instance Interruption Warning, source, account, time, region, the affected instance ID, and the instance action, which is terminate.
>
> **[5:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=317)** The rebalance recommendation and interruption notice can also be captured using instance metadata.
>
> **[5:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=322)** We use the same instance metadata URL that we discussed in an earlier video.
>
> **[5:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=327)** The command is curl http followed by the IP address 169.254.169.254 /latest/meta-data/events /recommendations/rebalance.
>
> **[5:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=344)** The output of this command is the time at which the rebalance recommendation was generated.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=349)** Here is an example of the Spot Instance interruption notice captured using the instance metadata.
>
> **[5:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=355)** The command is the same, curl http followed by the IP address /latest/meta-data/spot/instance-action.
>
> **[6:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=366)** The output of this command is the action, which is terminate, and the time at which the action is scheduled to occur.
>
> **[6:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=372)** When you're creating a Spot Instance request, it can be of one of two types.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=376)** It can be a one-time request or a persistent request.
>
> **[6:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=381)** With a one-time request, the request remains active until EC2 launches the Spot Instance or until the request expires or until you cancel the request.
>
> **[6:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=392)** After the request is fulfilled, if capacity is no longer available, the Spot Instance is terminated, and the request is closed.
>
> **[6:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=400)** With persistent requests, even after the request is fulfilled, the request remains active until it expires or you cancel it.
>
> **[6:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=409)** If capacity is no longer available, the Spot Instance is interrupted.
>
> **[6:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=414)** If the interruption behavior is set to be stopped or hibernated, it can be resumed.
>
> **[6:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=419)** If the interruption behavior is set to be terminated, the Spot Instance request is reopened, and a new Spot Instance is launched.
>
> **[7:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=427)** This is because the request type is persistent.
>
> **[7:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=431)** Finally, let's talk about the differences between On-Demand and Spot Instances.
>
> **[7:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=436)** On-Demand Instances can be launched immediately, while Spot Instances can be launched if capacity is available and if there is an active Spot request.
>
> **[7:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=445)** With On-Demand Instances, the hourly price is fixed.
>
> **[7:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=448)** With Spot Instances, the hourly price varies based on demand.
>
> **[7:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=453)** On-Demand Instances are interrupted by the user, while Spot Instances can be interrupted by the service when capacity is no longer available or when the Spot price exceeds your maximum price On-Demand Instances are suitable for workloads that cannot be interrupted, such as servers and databases, while Spot Instances are suitable for workloads that can be interrupted, like batch processing and data analytics.
>
> **[7:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=479)** So as you've just seen, Spot Instances can provide cost savings if your application can handle interruptions.
>
> **[8:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/spot-instances?u=76281980&t=486)** In the next video, we'll understand how to request a Spot Instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (12), aws (5), url (1)
> **Code Keywords:** let (5), type, (3), case, (2), finally, (1)
> **Definitions:** is an  (5), is a  (3), known as (2)
> **CLI Commands:** aws (5), curl (2)
> **Versions:** 0.80 (1), 0.65 (1), 0.60 (1), 0.75 (1), 169.254.169 (1)
> **Cross-References:** in the next (2), we discussed (1)
> **Warnings:** warning (2), be aware (1)
> **Prerequisites:** required to (1), you'll need (1)

#### Requesting spot instances
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=0)** - [Instructor] Now let's understand how to launch a spot instance.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=3)** There are two ways to request a spot instance.
>
> **[0:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=6)** The first option is to click the launch instances button here and then set the instance type to spot instance.
>
> **[0:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=13)** The second option is to create a spot request by navigating to spot request on the left navigation pane.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=19)** First, let's create a spot instance request from here.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=23)** Begin by clicking the launch instances button.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=27)** Configure the required items such as the EMI, instance type, key pair and more, and then scroll down to the advanced details section.
>
> **[0:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=36)** From here, select the checkbox to request spot instances.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=41)** Click customize to see the configuration options.
>
> **[0:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=44)** The first option is to set the maximum price.
>
> **[0:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=47)** This is the maximum price per hour for the spot instance.
>
> **[0:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=51)** You can set this to a custom price, or leave it set to no maximum price in which case the maximum price is capped at the on-demand price.
>
> **[1:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=60)** Bear in mind that even though you're configuring the maximum price, you will always pay the spot price for your spot instance.
>
> **[1:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=67)** And the spot price is defined by AWS.
>
> **[1:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=70)** The next option allows you to define the request type which can be a one-time request or a persistent request.
>
> **[1:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=77)** Then you have the option to configure the validity of your spot instance request.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=83)** Configure the desired settings, then click the launch instance button to launch your spot instance.
>
> **[1:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=88)** Once the instance has been launched, you will see your spot instance here.
>
> **[1:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=93)** As you can see, I've already launched a spot instance.
>
> **[1:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=96)** I know that this is a spot instance because by selecting the instance and going to the detail section, I can see that the life cycle is set to spot.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=106)** So this is a spot instance.
>
> **[1:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=109)** We can also verify this by navigating to spot requests on the left navigation pane.
>
> **[1:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=113)** And here is the spot request I created earlier with the associated instance ID.
>
> **[1:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=119)** You can also request a spot instance from here by clicking request spot instances.
>
> **[2:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=125)** On this screen you have more configuration options beginning with launch parameters.
>
> **[2:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=130)** Launch parameters allow you to define the settings of your EC2 instance.
>
> **[2:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=135)** You can configure this manually or use a launch template.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=139)** If you choose to configure this manually, you can define things like the AMI, the key pair, and down here you can define additional settings such as storage information, monitoring, tenancy and security groups.
>
> **[2:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=154)** Bear in mind the launch parameters do not include the instance type.
>
> **[2:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=159)** This is defined later in the configuration.
>
> **[2:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=162)** The other option is to define the launch parameters using your launch template.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=166)** Select the option, and from the dropdown select your launch template.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=171)** If your launch template has multiple versions, select the desired version from here.
>
> **[2:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=176)** The next option is additional request details.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=179)** And by default the box to apply defaults is checked.
>
> **[3:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=183)** Uncheck the box to see the configuration options.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=187)** The first option is IAM fleet role.
>
> **[3:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=190)** The IAM role is an AWS-defined role that provides the EC2 service that required permissions to launch and terminate spot instances on your behalf.
>
> **[3:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=200)** Next you have the option to set the maximum price.
>
> **[3:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=204)** You can leave it set to default in which case it will be kept at the on-demand price, or you can set your custom maximum price.
>
> **[3:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=213)** The pricing history tool can be useful to see historical prices.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=217)** The black line corresponds to the on-demand price, and these lines correspond to the spot prices.
>
> **[3:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=223)** As you can see, the spot prices for this instance type are significantly lower than the on-demand price.
>
> **[3:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=231)** Back over here, the next option allows you to configure the validity of your spot instance request.
>
> **[3:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=237)** Then you have the option to terminate the instances when the request expires.
>
> **[4:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=242)** You also have the option to register your spot instances behind a load balancer.
>
> **[4:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=248)** The next section allows you to define your target capacity.
>
> **[4:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=252)** This can be defined in terms of instances, vCPUs or memory.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=257)** For this example I'll set the total target capacity as two.
>
> **[4:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=262)** The next option allows you to include on-demand based capacity.
>
> **[4:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=267)** With this option, you can allocate a portion of the total capacity as on-demand capacity.
>
> **[4:33](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=273)** This strategy can be useful in ensuring that your workloads do not get interrupted.
>
> **[4:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=278)** Even if your spot instance gets terminated, your on-demand instance will continue to run.
>
> **[4:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=284)** Bear in mind this option is only available if you choose to use launch templates.
>
> **[4:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=291)** I'll scroll down and set the on-demand capacity as one.
>
> **[4:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=295)** So we are requesting a total of two instances.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=297)** Of which one instance will be a spot instance and the other instance will be an on-demand instance.
>
> **[5:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=304)** The next option allows you to maintain target capacity.
>
> **[5:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=308)** With this option turned on, replacement instances will be launched if your spot instance is terminated due to change in pricing or available capacity.
>
> **[5:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=318)** With this option turned on, you can define the interruption behavior.
>
> **[5:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=321)** This can be set to terminate, stop or hibernate.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=326)** The next option is capacity rebalance.
>
> **[5:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=329)** We know that the EC2 instance rebalance recommendation signal is emitted when the spot instance is at an elevated risk of interruption.
>
> **[5:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=338)** With this option turned on, AWS will attempt to replace such instances before they are interrupted.
>
> **[5:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=345)** With this option turned on, you can define the replacement strategy.
>
> **[5:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=349)** This can be set to launch only or launch before terminate.
>
> **[5:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=353)** When set to launch only, AWS will launch replacement instances, but not terminate the ones that receive the rebalance recommendation signal.
>
> **[6:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=362)** When said to launch before terminate, AWS will launch replacement instances and terminate the ones that receive the rebalance recommendation signal.
>
> **[6:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=372)** The next option allows you to set the maximum cost for spot instances.
>
> **[6:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=376)** This is the maximum cost for all of your spot instances.
>
> **[6:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=379)** The option we saw earlier was the maximum price per spot instance.
>
> **[6:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=384)** But this option allows you to set the maximum price for all your spot instances.
>
> **[6:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=391)** Next you have the option to define the VPC and the availability zone.
>
> **[6:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=396)** In the next section you can define the instance type requirements.
>
> **[6:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=400)** You can set your instance type requirement by specifying instance attributes, or by manually selecting the desired instance types.
>
> **[6:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=408)** When you select the first option to specify instance attributes, you can define the attributes in terms of vCPUs, memory, or you can select additional attributes such as CPU manufacturer, instance generation, storage and network information.
>
> **[7:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=425)** Or you can manually select the instance types.
>
> **[7:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=428)** When you select this option, AWS automatically suggests instance types that will result in a strong fleet strength.
>
> **[7:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=436)** Fleet strength determines the likelihood of fulfilling your request.
>
> **[7:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=440)** As you can see, AWS has suggested different instance types.
>
> **[7:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=444)** And these selections result in a strong fleet strength.
>
> **[7:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=447)** If you'd like to change the instance types, you can select the desired instance types and delete them, or add additional instance types.
>
> **[7:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=456)** Based on your selection, the fleet strength will vary.
>
> **[7:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=459)** In this case I have two instance types across three availability zones in this region resulting in a total of six instance pools.
>
> **[7:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=468)** For each instance type you can see the configuration in terms of vCPU and memory, the spot price and savings on the on-demand price.
>
> **[7:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=477)** The next section allows you to define the allocation strategy.
>
> **[8:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=481)** Here you can define the allocation strategy for spot instances and for on-demand instances.
>
> **[8:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=487)** To see all the available options, click show all strategies.
>
> **[8:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=491)** The lowest price strategy will result in maximum cost savings, but comes at a high risk of interruption.
>
> **[8:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=497)** Capacity optimized has the lowest risk of interruption, but is not the most price optimized.
>
> **[8:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=503)** When you select diversified across all pools, your spot instances will be distributed evenly across all pools.
>
> **[8:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=511)** Price capacity optimized provides a balance of price and interruption risk.
>
> **[8:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=517)** Next we have the option to set the on-demand allocation strategy.
>
> **[8:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=520)** This can be set to lowest price which means your on-demand instances will be selected from the lowest price pools.
>
> **[8:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=527)** Or you can set to prioritized.
>
> **[8:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=529)** Setting this to prioritized will cause instance types to be selected in the priority order.
>
> **[8:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=534)** The priority order can be seen over here.
>
> **[8:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=537)** To set the priority order, set the strategy to capacity optimized.
>
> **[9:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=541)** Then select prioritize instance types.
>
> **[9:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=544)** And then define your priority.
>
> **[9:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=547)** Scroll to the bottom to see a summary of your selections.
>
> **[9:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=551)** In this example we've requested two instances, of which one instance is a spot instance and the other one is an on-demand instance.
>
> **[9:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=559)** Here we can see the instance requirements which have been provided as a launch template named LinuxServerTemplate.
>
> **[9:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=565)** The fleet strength is weak because we have selected two instance types across three availability zones resulting in six matching instance pools.
>
> **[9:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=575)** The estimated hourly price is $0.042 per hour.
>
> **[9:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=579)** And this results in a 70% savings compared to on-demand prices.
>
> **[9:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=584)** As you can see, you can be very granular with your spot instance configuration.
>
> **[9:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=589)** When you've configured the required items, click the launch button to create your spot instance request.
>
> **[9:56](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=596)** As you can see, you can be very granular with your spot instance configuration.
>
> **[10:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/requesting-spot-instances?u=76281980&t=600)** By carefully planning your spot instances, you can have significant savings over on-demand instances.

> [!info]- Semantic Content
>
> **Env Vars:** aws (7), ec2 (3), iam (2), emi (1), ami (1)
> **UI Navigation:** select the (6), scroll down (2), checkbox (1), dropdown (1)
> **CLI Commands:** aws (7)
> **Code Keywords:** let (2), type, (1), type. (1), continue (1), delete (1)
> **Prerequisites:** configure (6)
> **Exercise Files:** template (5)
> **Definitions:** is a  (3), is an  (2)
> **Code Identifiers:** vcpus (2), vcpu (1)

#### Reserved instances
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=0)** - [Instructor] The next purchasing option is Reserved Instances.
>
> **[0:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=3)** Reserved Instances provide significant discounts on EC2 usage when you commit to a one year or three year term.
>
> **[0:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=11)** Reserved Instances are not a specific instance type, but rather a billing discount applied to the use of On-Demand instances.
>
> **[0:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=19)** With Reserved Instances, you have a term commitment.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=23)** Reserved Instances can be purchased for a tenure of one year or three years.
>
> **[0:28](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=28)** When Reserved Instances expire at the end of the tenure, you go back to paying on-demand rates.
>
> **[0:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=34)** With Reserved Instances, you have three payment options, all upfront, partial upfront, and no upfront.
>
> **[0:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=42)** With all upfront, full payment is made at the start of the term with no other costs or additional hourly charges incurred for the remainder of the term regardless of the hours used.
>
> **[0:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=54)** With partial upfront, a portion of the cost must be paid upfront and the remaining hours in the term are billed at a discounted hourly rate, regardless of whether the Reserved Instance is being used.
>
> **[1:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=66)** As the name suggests, with no upfront, you are not required to make any upfront payment.
>
> **[1:11](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=71)** You are billed a discounted hourly rate for every hour within the term, regardless of whether the Reserved Instance is being used.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=79)** Generally speaking, you can save more money by making a higher upfront payment for Reserved Instances.
>
> **[1:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=86)** The following attributes determine the price of a Reserved Instance.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=90)** The instance type, region, tenancy and platform.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=95)** Reserved Instances are available in two offering classes, standard and convertible.
>
> **[1:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=101)** Both standard and convertible offering classes allow certain attributes to be modified.
>
> **[1:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=106)** However, if you like the flexibility to exchange instances, you should choose the convertible offering class.
>
> **[1:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=112)** The standard offering class does not allow instances to be exchanged.
>
> **[1:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=117)** Let's talk about modifying Reserved Instances.
>
> **[2:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=120)** Modifying a Reserved Instance allows you to change certain configuration and continue to benefit from the billing discount.
>
> **[2:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=128)** Both standard and convertible Reserved Instances can be modified and the following attributes are available for modification, availability zones within the same region, instance size within the same instance family and generation for Linux and Unix instances only, for example, you can change from t2.micro to t2.small instances but you can't change the family, so you can't change from T2 to T3 instance family, and you can also modify the scope.
>
> **[2:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=157)** That is you can change from a zonal to a regional Reserved Instance and vice versa.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=163)** We'll talk about the scope in a couple of minutes.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=166)** The ability to change the instance type is governed by a normalization factor.
>
> **[2:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=172)** Here is an AWS document that describes the normalization factor for different instance sizes.
>
> **[2:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=178)** For example, the normalization factor for a t2.micro instance is 0.5 versus while the normalization factor for a t2.medium instance is two.
>
> **[3:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=188)** So if you've purchased a t2.medium Reserved Instance, you can change that to four t2.micro Reserved Instances.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=195)** This is based on the normalization factor.
>
> **[3:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=199)** Now let's talk about exchanging Reserved Instances.
>
> **[3:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=201)** Only convertible Reserved Instances can be exchanged.
>
> **[3:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=205)** Exchanging allows you to modify these attributes, instance family, operating system and tenancy.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=212)** So when you're modifying the Reserved Instance, you can only change the instance size, but when you're exchanging, you can change the instance family.
>
> **[3:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=220)** So if you like the flexibility to change the instance family, you should consider using convertible Reserved Instances.
>
> **[3:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=227)** Now let's talk about the scope of Reserved Instances.
>
> **[3:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=230)** This can be either regional or zonal.
>
> **[3:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=233)** When you purchase a Reserved Instance for a region, it is known as a regional Reserved Instance.
>
> **[3:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=239)** When you purchase a Reserved Instance for a specific availability zone, it is known as a zonal Reserved Instance.
>
> **[4:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=246)** The scope does not affect the price of the Reserved Instance.
>
> **[4:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=250)** Now let's talk about the differences between regional and zonal Reserved Instances.
>
> **[4:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=255)** Regional Reserved Instances do not reserve capacity, while zonal Reserved Instances do reserve capacity in the specified availability zone.
>
> **[4:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=263)** So if you'd like capacity reservation, you should opt for zonal Reserved Instances.
>
> **[4:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=270)** With regional Reserved Instances, the discount applies to usage in any availability zone in the region.
>
> **[4:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=276)** With zonal Reserved Instances, the discount only applies to usage in the specified availability zone.
>
> **[4:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=283)** With regional Reserved Instances, the billing discount applies to any instance size within the family.
>
> **[4:49](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=289)** For zonal Reserved Instances, the billing discount applies to the usage for the specified instance type and size only.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=297)** So unless you're looking for capacity reservation, you should choose regional Reserved Instances.
>
> **[5:03](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=303)** Now, let's go to the EC2 console, and understand how to purchase a Reserved Instance.
>
> **[5:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=309)** From the EC2 console, click Reserved Instances on the left navigation pane, then click Purchase Reserved Instances.
>
> **[5:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=318)** From here, you can define the attributes you're interested in and then search for an available Reserved Instance.
>
> **[5:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=324)** For example, you can define the platform, the tenancy, which is default for shared and dedicated for dedicated hardware, the offering class, which can be convertible or standard, the instance type, the term, which can be one year or three years, and the payment option, which can be no upfront, partial upfront, or all upfront.
>
> **[5:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=346)** After defining new attributes, click the Search button.
>
> **[5:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=350)** Doing so will show you all Reserved Instances with the matching attributes in this region.
>
> **[5:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=355)** Here you have the seller, which can be AWS or third party.
>
> **[6:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=360)** Next you have the term, which can be 12 months or 36 months.
>
> **[6:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=364)** Then you have the payment option, which could be all upfront, no upfront or partial upfront.
>
> **[6:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=370)** Then you have the effective rate and the upfront price.
>
> **[6:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=373)** For all upfront Reserved Instances, you are required to pay the full amount upfront, and for partial upfront, you'll only be paying a portion of the cost upfront.
>
> **[6:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=382)** The next column is hourly rate.
>
> **[6:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=385)** For all upfront Reserved Instances, this is set to zero because you're paying the full amount upfront but you will see this for no upfront and partial upfront Reserved Instances.
>
> **[6:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=396)** Next, you have the offering class, which can be standard or convertible.
>
> **[6:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=400)** Then you have the available quantity, the desired quantity, and the normalization factor, which depends on the selected instance type.
>
> **[6:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=408)** The Reserved Instances you're seeing here are regional Reserved Instances.
>
> **[6:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=413)** If you'd like to see zonal Reserved Instances, you can toggle the switch here to only show offerings that reserve capacity, in other words, zonal Reserved Instances.
>
> **[7:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=422)** And when you turn on this toggle, you will see a new column is added called Availability Zone.
>
> **[7:08](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=428)** Now, when you select a Reserved Instance, it is going to be a zonal Reserved Instance.
>
> **[7:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=433)** Set the desired quantity, add it to the cart, and complete the purchase to purchase a Reserved Instance.
>
> **[7:20](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=440)** Reserved Instances are automatically applied to running On-Demand instances if the specifications match.
>
> **[7:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=447)** If you have no running On-Demand instances that match the specifications of your Reserved Instance, the Reserved Instance is unused until you launch an instance with the required specifications.
>
> **[7:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=458)** While Reserved Instances provide billing discount, you are bound by selections such as the instance family, region, and operating system.
>
> **[7:47](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=467)** And for this reason, AWS recommends using Savings Plans over Reserved Instances to reduce compute costs.
>
> **[7:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/reserved-instances?u=76281980&t=474)** And that's the topic for the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), type, (3), class, (2), class. (1), continue (1)
> **Env Vars:** ec2 (3), aws (3)
> **CLI Commands:** aws (3), make (1)
> **Definitions:** known as (2), is an  (1), in other words (1)
> **Analogies:** for example (3), such as (1)
> **UI Navigation:** toggle (2), go to (1)
> **Cross-References:** go back to (1), next video (1)
> **Prerequisites:** required to (2)

#### Savings plans
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=0)** - [Instructor] Now let's talk about savings plans.
>
> **[0:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=2)** Savings plans is a flexible pricing model that offers low prices on EC2 usage in exchange for a commitment of one or three years.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=12)** This sounds like reserved instances but here is the difference.
>
> **[0:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=16)** Savings plans provide lower prices on EC2 instance usage regardless of the instance family, size, operating system, tenancy or the AWS region.
>
> **[0:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=27)** As you can see, it is more flexible compared to reserved instances.
>
> **[0:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=32)** With savings plans, there are three plan types: compute savings plans, EC2 instance savings plans and SageMaker savings plans.
>
> **[0:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=41)** Let's talk about the first one.
>
> **[0:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=43)** With compute savings plans, discounted pricing is automatically applied to your EC2 instance usage regardless of the instance family, region, operating system and tenancy.
>
> **[0:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=55)** Here is an example.
>
> **[0:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=57)** Let's say you are using the C5 instance family in the us-east-1 region.
>
> **[1:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=61)** With compute savings plans, you can change the instance family and the region.
>
> **[1:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=66)** As an example, you can switch to the M5 instance family in the eu-west-1 region.
>
> **[1:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=73)** With EC2 instance savings plans, discounted pricing is automatically applied to your usage regardless of the instance size, operating system and tenancy.
>
> **[1:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=83)** However, you must commit to a specific instance family in a chosen region.
>
> **[1:29](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=89)** Here is an example.
>
> **[1:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=90)** Let's say you are using a t3.large Windows instance in the us-east-1 region.
>
> **[1:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=95)** With the EC2 instance savings plan, you can change the instance size and operating system but not the family and the region.
>
> **[1:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=103)** So as an example, you could switch to a t3-medium Linux instance in the same region, that is us-east-1.
>
> **[1:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=111)** To purchase a savings plan, you will need to enable Cost Explorer.
>
> **[1:55](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=115)** Cost Explorer is a service that allows you to visualize and manage your AWS costs and usage.
>
> **[2:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=121)** Once purchased, savings plans apply automatically to your eligible AWS usage.
>
> **[2:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=127)** Here is a document that allows you to look up the prices for savings plans and here are the option we discussed, compute savings plans and EC2 instance savings plans.
>
> **[2:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=138)** Here you can define the attributes, such as the region, term length, payment options, operating system and tenancy.
>
> **[2:27](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=147)** And based on the attributes you define, the results are displayed in this table.
>
> **[2:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=151)** Here is the instance name or the instance type, the on-demand rate for that instance type, the savings plans rate, the savings compared to on-demand rates, region, operating system and tenancy.
>
> **[2:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=166)** Now let's go to the EC2 console and see how to purchase a savings plan.
>
> **[2:51](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=171)** From the EC2 console, click savings plans on the left navigation pane then click purchase savings plans.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=179)** Doing so will navigate you over to the cost management service and from here, you can purchase a savings plan.
>
> **[3:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=186)** Here are the three plan types we discussed: compute savings plans, EC2 instant savings plans and SageMaker savings plans.
>
> **[3:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=194)** To purchase a savings plan, you'll first need to define the term, which can be one year or three years, then your hourly commitment in terms of USD then the payment option and down here, you can see the cost based on your selections, you can add this to the card and complete your purchase.
>
> **[3:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=212)** If you choose the EC2 instance savings plan, you will need to define the region and the instance family as well.
>
> **[3:39](https://www.linkedin.com/learning/amazon-ec2-essential-training/savings-plans?u=76281980&t=219)** So here you can select the region, then the instance family, then the hourly commitment, payment option and then add to the card and complete the purchase to begin the savings plan usage.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (11), aws (3), usd (1)
> **Code Keywords:** let (5), switch (2), type, (2)
> **Definitions:** is a  (3), is an  (2)
> **CLI Commands:** aws (3)
> **UI Navigation:** switch to (1), go to (1), select the (1)
> **Cross-References:** we discussed (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Dedicated instances vs. dedicated hosts
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/dedicated-instances-vs-dedicated-hosts?u=76281980)

#### Launching dedicated instances and dedicated hosts
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=0)** - [Narrator] Now, let's understand how to launch dedicated instances, and dedicated hosts.
>
> **[0:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=5)** To launch a dedicated instance, you would begin just as you normally would by clicking the launch instances button.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=12)** Configure the required settings such as the AMI, instance type, key pair, security groups and storage and then scroll down to the advanced details section.
>
> **[0:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=24)** From here navigate to the tenancy option and set this to dedicated instance.
>
> **[0:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=30)** Then click launch instance.
>
> **[0:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=32)** The EC2 instance will be launched as a dedicated instance.
>
> **[0:36](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=36)** Now, let's talk about launching instances on a dedicated host.
>
> **[0:40](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=40)** To launch instances on a dedicated host, you will first need to allocate a host to the account.
>
> **[0:45](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=45)** After allocating, the capacity is made available immediately and you can start launching instances on it.
>
> **[0:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=52)** Navigate to the dedicated host section on the left navigation pane and then click allocate dedicated host.
>
> **[0:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=59)** Begin by providing a name for the dedicated host.
>
> **[1:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=62)** Then you have the option to define the instance family.
>
> **[1:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=66)** The option you define here specifies the instance family that will be supported by the dedicated host.
>
> **[1:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=72)** For example, if I set this to C4, I can use the dedicated host to launch C4 instances only.
>
> **[1:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=79)** The next option is instance type.
>
> **[1:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=81)** Here you can select a single instance type.
>
> **[1:25](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=85)** For example, if I select C4 large, the dedicated host will only support C4 large instances.
>
> **[1:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=92)** Most of the instance families you see in this list only support a single instance size or type.
>
> **[1:38](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=98)** However, there are certain instance families that support multiple instance types.
>
> **[1:44](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=104)** These include C5, M5, R5, C5n, M5n, and R5n.
>
> **[1:53](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=113)** I'll select any one of these instance families, for example C5.
>
> **[1:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=118)** When I select this instance family, I have the option to enable support for multiple instance types.
>
> **[2:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=124)** So if I select the C5 instance family, I can launch multiple instance sizes belonging to the C5 family on the same dedicated host.
>
> **[2:14](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=134)** The next option allows you to select an availability zone for your dedicated host.
>
> **[2:19](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=139)** Next, you have the option to define the Outpost ARN, or the Outpost Identifier.
>
> **[2:24](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=144)** AWS Outpost is a service that allows you to deploy AWS in your local on-premises environment, or your data center.
>
> **[2:32](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=152)** The next option is about instance auto placement.
>
> **[2:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=155)** Auto placement allows you to specify whether instances are launched onto a specific dedicated host, or any available dedicated host.
>
> **[2:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=163)** When the option is enabled, that is auto placement is enabled, EC2 instances will be automatically placed on this dedicated host.
>
> **[2:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=172)** When you disable this option, you must use the host ID of this dedicated host when you're launching an EC2 instance.
>
> **[2:59](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=179)** Doing so will launch the EC2 instance on this dedicated host.
>
> **[3:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=184)** The next option is about host recovery.
>
> **[3:07](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=187)** If there is a problem with a dedicated host, AWS will automatically restart your EC2 instances on a new replacement dedicated host.
>
> **[3:15](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=195)** This could be due to loss of network connectivity, system power, or hardware or software issues on the physical server.
>
> **[3:22](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=202)** The next option is about host maintenance.
>
> **[3:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=206)** When the performance of the dedicated host is degraded, a new dedicated host is allocated and your EC2 instances are scheduled to be automatically rebooted, and moved to the new dedicated host.
>
> **[3:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=217)** The maintenance is scheduled to occur after 14 days and you have the option to reschedule.
>
> **[3:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=222)** Host recovery is triggered when the dedicated host has failed and recovery is immediate.
>
> **[3:48](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=228)** Typically, this means your dedicated host is unreachable.
>
> **[3:52](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=232)** Host maintenance is triggered when the dedicated host has degraded performance and recovery is scheduled.
>
> **[3:58](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=238)** Your dedicated host is still reachable.
>
> **[4:02](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=242)** Next, you have the option to define the required quantity, tag your dedicated host and then click the allocate button.
>
> **[4:09](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=249)** Doing so will allocate a dedicated host to your AWS account.
>
> **[4:13](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=253)** You can then use the dedicated host to launch instances on it.
>
> **[4:17](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=257)** To launch an instance on the dedicated host, click the instances section on the left navigation pane, click the launch instances button, then scroll down to the advanced details section, and then navigate to the tenancy option.
>
> **[4:34](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=274)** From here, set this to dedicated host.
>
> **[4:37](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=277)** When you set this to dedicated host, you have a few options that you can configure.
>
> **[4:41](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=281)** The first option allows you to define how you will target the dedicated host.
>
> **[4:46](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=286)** You can do this by host ID or by host resource group.
>
> **[4:50](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=290)** If you set this to host ID, you can select the dedicated host on which you would like to launch the EC2 instance.
>
> **[4:57](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=297)** You can also target by host resource group.
>
> **[5:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=300)** Host resource group is a collection of dedicated hosts that you manage as a single entity.
>
> **[5:06](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=306)** This allows you to group dedicated hosts by purpose.
>
> **[5:10](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=310)** For example, you could have a group of dedicated hosts for the dev environment, and another for production.
>
> **[5:16](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=316)** This is also commonly done to manage software licenses on dedicated hosts.
>
> **[5:21](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=321)** You can create host resource groups from the AWS License Manager service.
>
> **[5:26](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=326)** The next option allows you to define tenancy affinity.
>
> **[5:30](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=330)** Tenancy affinity establishes a relationship between an EC2 instance and a dedicated host.
>
> **[5:35](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=335)** When you set this to host, an EC2 instance launched on a specific dedicated host will always be restarted on the same host.
>
> **[5:43](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=343)** When you set this to off, AWS tries on a best effort basis to launch the EC2 instance back onto the last dedicated host it ran on.
>
> **[5:54](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=354)** Configure the remaining settings and then click the Launch Instance button to launch this EC2 instance on a dedicated host.
>
> **[6:01](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=361)** So that is about dedicated instances, and dedicated hosts.
>
> **[6:05](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=365)** Bear in mind that both these options have additional charges because your instances will use dedicated hardware.
>
> **[6:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=372)** If you're only interested in having your instances on dedicated hardware, you should consider dedicated instances.
>
> **[6:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/launching-dedicated-instances-and-dedicated-hosts?u=76281980&t=378)** But if you'd like visibility into the physical server on which your EC2 instances will be placed, and also the ability to bring your per core, per socket, and per virtual machine licenses, you should consider dedicated hosts.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (12), aws (6), ami (1), arn (1)
> **UI Navigation:** navigate to (3), scroll down (2), select the (2)
> **CLI Commands:** aws (6)
> **Code Keywords:** type. (3), let (2), type, (1)
> **Analogies:** for example (4), such as (1)
> **Definitions:** is a  (3)
> **Prerequisites:** configure (3)
> **Speakers:** - [narrator] (1)


### Conclusion

#### Additional resources
> [LinkedIn Learning](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=0)** - [Shyam] Congratulations on completing this course on Amazon EC2.
>
> **[0:04](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=4)** By now, you should have gained a solid understanding of how to launch, manage, and scale EC2 instances in the AWS cloud.
>
> **[0:12](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=12)** I hope you found this course insightful and that the skills you acquired will help you in your career.
>
> **[0:18](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=18)** It has been my pleasure to guide you through this course and help you gain a valuable skillset.
>
> **[0:23](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=23)** If you're interested in taking your EC2 knowledge to the next level, I encourage you to check out my course on EC2 load balancers.
>
> **[0:31](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=31)** This is where you'll learn how to optimize your EC2 infrastructure for scalability and high availability and gain a deeper understanding of how load balancers work in the AWS cloud.
>
> **[0:42](https://www.linkedin.com/learning/amazon-ec2-essential-training/additional-resources?u=76281980&t=42)** Thank you again for choosing to learn with me, and I wish you all the best in your future endeavors.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (5), aws (2)
> **CLI Commands:** aws (2)
> **Speakers:** - [shyam] (1)


## Path Context

### In [[Infrastructure Management on AWS- Skills for Administrators]]
← [[Aws Essential Training For Administrators]] | **2 of 5** | [[AWS- Networking]] →

## Appears In

- [[Infrastructure Management on AWS- Skills for Administrators]]

---

[↑ Back to top](#)