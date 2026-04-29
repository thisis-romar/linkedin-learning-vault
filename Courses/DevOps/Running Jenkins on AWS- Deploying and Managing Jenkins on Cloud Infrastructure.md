---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure
url: "https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure"
duration_minutes: 98
duration: 1h 38m
level: Intermediate
updated: 7/29/2025
learners: 5359
skills:
  - Jenkins
exercise_files: true
github: "https://github.com/LinkedInLearning/running-jenkins-on-aws-3978678"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG0r7-qFsC2SA/learning-public-crop_675_1200/B4EZg4SNTOHoAY-/0/1753290954650?e=2147483647&amp;v=beta&amp;t=5qXC2cWevHWwseDS3vED62AV7AIuUNiKy48BcM5AP1Q"
linkedin_topic: DevOps
learning_paths:
  - '[[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]'
prev_courses:
  - '[[Jenkins Essential Training]]'
path_nav: '[{"path":"Continuous Integration-Continuous Delivery (CI-CD) with Jenkins","position":3,"total":3,"prev":"Jenkins Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jenkins
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Running%20Jenkins%20on%20AWS-%20Deploying%20and%20Managing%20Jenkins%20on%20Cloud%20Infrastructure.md)

![Running Jenkins on AWS: Deploying and Managing Jenkins on Cloud Infrastructure](https://media.licdn.com/dms/image/v2/D4E0DAQG0r7-qFsC2SA/learning-public-crop_675_1200/B4EZg4SNTOHoAY-/0/1753290954650?e=2147483647&amp;v=beta&amp;t=5qXC2cWevHWwseDS3vED62AV7AIuUNiKy48BcM5AP1Q)

# Running Jenkins on AWS: Deploying and Managing Jenkins on Cloud Infrastructure

> Learn how to create a Jenkins environment using the cloud-based servers of AWS. In this course, instructor Michael Jenkins covers steps for setting up Jenkins, creating a build environment, connecting to code repositories with webhooks, using a deployment service, and shutting down AWS resources. First, Michael shows you how to create a Jenkins controller instance, including how to configure a sec

> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure) | 1h 38m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Setting Up Jenkins]]** (8 videos)
- **[[#2. Create a Build Environment]]** (6 videos)
- **[[#3. Connect Jenkins with Webhooks]]** (5 videos)
- **[[#4. Deploy Code to AWS Lambda]]** (6 videos)
- **[[#5. Shut Down AWS Resources]]** (2 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### CI/CD supercharged: Jenkins meets AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=0)** - Jenkins is a popular automation framework that you can use to manage all types of projects, including software builds, deployments, and much more.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=9)** Amazon Web Services, also known as AWS, is the leading cloud services provider and is the perfect place for running build servers and web applications.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=19)** Let's combine these two technologies to develop a complete CI/CD pipeline.
>
> **[0:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=23)** We'll set up a web application, commit code to a GitHub repository and configure Jenkins to build, test, and deploy the app using AWS resources.
>
> **[0:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=34)** Hi, I'm Michael Jenkins, a computer engineer with many years of experience using AWS and Jenkins for all kinds of projects.
>
> **[0:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=42)** I hope you're as eager as I am to dive into Jenkins and AWS.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (4), cd (1)
> **Env Vars:** aws (4)
> **Definitions:** is a  (1), known as (1)
> **Prerequisites:** set up (1), configure (1)
> **Code Keywords:** let (1)
> **Tools:** github (1)
> **Speakers:** - jenkins (1)


### 1. Setting Up Jenkins

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Architect the Jenkins environment on AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=0)** - [Instructor] Before we get started, let's discuss the resources we'll be creating and configuring to run a Jenkins server on AWS.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=9)** At the heart of the setup is an EC2 instance running the Ubuntu Linux operating system.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=15)** This instance will be the host for our Jenkins server.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=19)** The server will use an identity and access management role that provides secure terminal access.
>
> **[0:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=26)** To support web access, the server will be attached to a security group that allows incoming HTTP traffic from any IPv4 address.
>
> **[0:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=35)** The server will also use an Elastic IP address to support consistent web access, even if the instance is restarted.
>
> **[0:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=43)** We'll also install three software components: Java Development Kit, which is needed to run Jenkins, Nginx, to act as a reverse proxy, and the Long-Term Support version of Jenkins.
>
> **[0:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=56)** This combination of AWS infrastructure and open-source software sets the stage for the skills we'll develop in the lessons ahead.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), ec2 (1), http (1)
> **CLI Commands:** aws (2), nginx (1)
> **Prerequisites:** setup (1), install (1)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Create an IAM role
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=0)** - [Instructor] Before we set up the Jenkins server, there are a few things we need to have in place.
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=5)** The first of these is an identity and access management role.
>
> **[0:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=10)** IAM roles allow services like EC2 to interact with other AWS services programmatically.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=17)** Roles are made up of permissions, defined as policies.
>
> **[0:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=22)** Policies list the permissions available to the service using the role.
>
> **[0:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=26)** We'll be using the managed policy named AmazonSSMManagedInstanceCore.
>
> **[0:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=32)** This will allow us to connect to an EC2 instance using AWS Systems Manager.
>
> **[0:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=39)** Let's create this role in the AWS console.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=44)** I'm logged into my AWS account and I'm viewing the IAM dashboard.
>
> **[0:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=49)** I'll start by selecting roles and then create roles from the left hand navigation menu.
>
> **[0:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=56)** On the create role screen, we're asked to choose a trusted identity.
>
> **[1:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=61)** Since this role will be used by an EC2 instance, we'll choose AWS service and then EC2 for the use case, and then EC2 role for AWS Systems manager.
>
> **[1:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=75)** Now select next.
>
> **[1:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=78)** The policy we need is automatically selected, so we don't need to add any additional permissions here.
>
> **[1:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=84)** This policy will allow us to connect to our Jenkins server without using SSH.
>
> **[1:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=90)** On the next screen, we have to provide a name for the role.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=94)** I'll call this one EC2 dash SSM.
>
> **[1:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=98)** Let's also add a tag.
>
> **[1:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=100)** Since I may use this role with multiple Jenkins servers.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=104)** I'll just put Jenkins.
>
> **[1:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=107)** Finally, I'll select create role.
>
> **[1:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=109)** Next up, we'll create a security group specifically for the Jenkins server.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (6), aws (6), iam (2), ssh (1), ssm (1)
> **CLI Commands:** aws (6), ssh (1)
> **Code Keywords:** let (2), case, (1), finally, (1)
> **Definitions:** is an  (1), defined as (1)
> **Tools:** aws console (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create a security group
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=0)** - [Instructor] Before launching our Jenkins server, we need to create a security group to control the traffic that can reach the instance.
>
> **[0:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=8)** Security groups are associated with network interfaces and act as a firewall for our instances.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=15)** Using a security group, we can specify the ports that will be accessible on the instance for incoming and outgoing traffic.
>
> **[0:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=23)** Along with specifying the ports that are open.
>
> **[0:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=26)** We can also specify the IP addresses that can connect to them.
>
> **[0:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=30)** This is an absolute requirement to keep the resources secure because the servers will be publicly accessible on the internet.
>
> **[0:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=38)** Let's go to the AWS console and create a security group for our Jenkins server.
>
> **[0:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=45)** I'm logged into my AWS account and I'm viewing the EC2 dashboard.
>
> **[0:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=49)** If you're following along, you'll want to make sure you're using an account that has all the permissions needed to work with EC2 resources.
>
> **[0:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=58)** First, make a note of the region that you're working in.
>
> **[1:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=61)** Since EC2 resources are tied to specific regions, you can find the region menu in the top right hand corner of the screen.
>
> **[1:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=69)** In this case, I'm working in the US-East-2 region, so I want all of my security groups and key pairs to be created in this region as well.
>
> **[1:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=79)** Start by following the security group's link under network and security.
>
> **[1:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=85)** From here, select the create security group button to start creating a new group.
>
> **[1:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=90)** This starts a wizard where we specify the details for our security group.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=94)** We'll start with a name and since this group will be for the Jenkins server, I'll call this one "Jenkins/Server" and I'll just use, "Allow web traffic" for the description.
>
> **[1:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=106)** We'll be using the default VPC, so we can leave this as is and move on to creating rules for this security group.
>
> **[1:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=113)** We're going to be creating two rules, so I'll select add rule two times.
>
> **[1:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=118)** This opens up forms where we can specify the details for the type of traffic we want to allow.
>
> **[2:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=124)** Fortunately, the first column, the type column makes filling out this form pretty easy.
>
> **[2:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=131)** For this security group, we need to allow HTTP traffic on port 80, and secure HTTPS traffic on port 4-4-3, and if we select them, the protocol and port range columns get filled in for us.
>
> **[2:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=146)** Now we can turn our attention to the source column.
>
> **[2:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=149)** This lets us specify where the incoming traffic can come from.
>
> **[2:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=154)** For the HTTP and HTTPS rules, we want all traffic sources to be able to connect, so we'll select anywhere from the source dropdown.
>
> **[2:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=165)** This means requests from any IPV4 address will be allowed through the firewall.
>
> **[2:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=171)** Now let's look at the outbound rules.
>
> **[2:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=174)** We want any instances that use this security group to be able to access all addresses on the internet.
>
> **[3:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=181)** Since this is already set up for us, we can just leave the outbound rule alone.
>
> **[3:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=186)** One more thing we do need to do just to be complete is tag the security group with a name.
>
> **[3:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=192)** It's just good practice to tag your AWS resources with a name so they're easy to identify.
>
> **[3:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=198)** For the key, I'll enter name, and for the value I'll use Jenkins/Server.
>
> **[3:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=204)** Finally, we can select create security group.
>
> **[3:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=207)** Now our security group is in place and ready to be attached to an EC2 instance.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (4), aws (3), http (2), https (2), vpc (1)
> **CLI Commands:** aws (3), make (2), find (1)
> **Code Keywords:** let (2), case, (1), from. (1), finally, (1)
> **UI Navigation:** go to (1), select the (1), dropdown (1)
> **Ports:** port 80 (1), port 4 (1)
> **Tools:** aws console (1)
> **Definitions:** is an  (1)
> **Best Practices:** good practice (1)

#### Create the Jenkins EC2 instance
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=0)** - [Instructor] With a security group and IAM role in place, we can create the EC2 instance we'll be using for our Jenkins server.
>
> **[0:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=8)** On the EC2 dashboard, start by selecting Launch instance.
>
> **[0:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=12)** This starts a wizard that will walk us through the EC2 creation process.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=17)** The very first thing we need to do is assign a name to this server.
>
> **[0:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=21)** Enter the name jenkins-server.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=24)** Next, we need to select the Amazon Machine Image or AMI.
>
> **[0:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=30)** We'll be using the latest available version of Ubuntu.
>
> **[0:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=33)** With the image selected, we can choose the instance type.
>
> **[0:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=37)** We'll use a t2_micro, which is eligible for the free tier.
>
> **[0:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=41)** This should provide just enough CPU and memory for our Jenkins server.
>
> **[0:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=46)** Because we'll be using the console to access the server, we can proceed without a key pair.
>
> **[0:52](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=52)** Even though this option is not recommended, we can safely move on with this selection.
>
> **[0:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=57)** Under network settings, select the option to choose an existing security group, the Jenkins Server Security Group.
>
> **[1:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=65)** Under storage, increase the root volume to 20 GBs to make sure there's enough room for installing software.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=72)** Now, open up the advanced detail section at the bottom of the screen.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=77)** In this section, we need to specify the IAM role that the server will use, and we'll select the role that was created previously.
>
> **[1:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=85)** The other options can be left as is.
>
> **[1:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=88)** Once everything is in place, we can select Launch instance.
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=93)** On the next screen, there's a message that lets us know that instance is launching with a link to the instance.
>
> **[1:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=99)** Following that link takes us to the EC2 dashboard showing the server is up and running.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=104)** There's still one more thing that we need to add, an elastic IP.
>
> **[1:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=108)** If our instance is stopped and then restarted, the public IP address will change.
>
> **[1:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=114)** This could be problematic if we have configurations that rely on the IP address being consistent.
>
> **[2:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=120)** An elastic IP address solves this problem.
>
> **[2:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=123)** In the menu on the left side of the EC2 dashboard, I'll select elastic IPs under network and security.
>
> **[2:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=131)** And then I'll select Allocate Elastic IP address.
>
> **[2:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=135)** On this screen, I'll keep all the defaults, but of course I'll add a name tag.
>
> **[2:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=140)** And as you might have guessed, I'll use jenkins-server.
>
> **[2:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=144)** Now, I'll select Allocate.
>
> **[2:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=146)** We have our IP address.
>
> **[2:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=148)** Now, we need to associate it with the instance we just created.
>
> **[2:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=152)** Fortunately, AWS is helping us out and offering up this handy button, which will allow us to immediately associate this address.
>
> **[2:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=159)** So I'll select that.
>
> **[2:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=161)** Since we're associating this IP address with an instance, we'll leave the instance resource type selected and choose an instance.
>
> **[2:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=169)** We only have one instance so far, the jenkins-server.
>
> **[2:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=173)** I'll leave the private IP blank and select Associate.
>
> **[2:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=177)** Okay, this is a good start.
>
> **[2:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=178)** Our server is in place.
>
> **[3:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=180)** In the next step, we'll install Java, Nginx, and Jenkins.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (5), iam (2), ami (1), cpu (1), aws (1)
> **UI Navigation:** select the (3), in the menu (1)
> **CLI Commands:** make (1), aws (1), nginx (1)
> **Code Keywords:** type. (1), public (1), private (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)

#### Install Java, Jenkins, and NGINX
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=0)** - [Instructor] Now that we have an EC2 instance up and running, we need to install the software for our Jenkins server.
>
> **[0:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=8)** Since Jenkins is a Java-based application, we'll need to install a Java Development Kit, or JDK.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=15)** We'll also be installing NGINX to act as a proxy for connections to our Jenkins server.
>
> **[0:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=21)** And of course, we'll be installing the Jenkins software itself.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=24)** You'll find the commands for installing the software in the exercise files for this lesson.
>
> **[0:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=30)** I'm logged into the AWS console and I'm viewing the EC2 instance we created to run our Jenkins server.
>
> **[0:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=37)** From here, I'll select connect.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=40)** On the connect screen, make sure the session manager tab is selected.
>
> **[0:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=45)** Then select connect.
>
> **[0:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=47)** This opens a tab with a shell connected to the Jenkins server.
>
> **[0:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=51)** I'll increase the browser zoom just a little bit so we can see things better.
>
> **[0:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=56)** Now that we're logged in, we can switch to the root user and start installing software.
>
> **[1:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=61)** I'll do that by running sudo --login.
>
> **[1:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=66)** Now let's take a look at the install commands.
>
> **[1:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=69)** I'm viewing the exercise files for this lesson, and from here I can copy the commands to add the APT key and the source list for Jenkins.
>
> **[1:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=79)** Back in the shell, I can paste the commands in and run them.
>
> **[1:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=83)** Okay, that looks good.
>
> **[1:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=84)** Now let's get the commands to update the system packages.
>
> **[1:31](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=91)** This command will take a minute to run, so I'll wait for it to finish.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=95)** All right, that looks good as well.
>
> **[1:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=98)** After all the currently installed packages are up to date, we can install Java, NGINX, and Jenkins.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=104)** For the best results, let's install Java and NGINX first.
>
> **[1:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=109)** In the exercise files, I'll select the command that will install Java and NGINX, and then I'll go back to the terminal and paste them in.
>
> **[2:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=120)** And last but not least, let's install Jenkins.
>
> **[2:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=124)** I'll clear the screen and go back to the exercise files to copy that command.
>
> **[2:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=130)** And back in the terminal, I'll paste it in and run it.
>
> **[2:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=136)** To confirm that Jenkins and NGINX are installed, we can use the system CTL status command.
>
> **[2:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=142)** Let's check for NGINX first.
>
> **[2:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=145)** Okay, that's looking good.
>
> **[2:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=147)** Now let's check for Jenkins.
>
> **[2:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=149)** Okay, both applications show that they're active and running.
>
> **[2:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=154)** At this point, we're almost done getting our server up and running.
>
> **[2:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=158)** In the next lesson, we'll configure NGINX to serve as a proxy for Jenkins.

> [!info]- Semantic Content
>
> **Env Vars:** nginx (7), ec2 (2), jdk (1), aws (1), apt (1)
> **CLI Commands:** nginx (7), find (1), aws (1), make (1), sudo (1)
> **Prerequisites:** install (7), configure (1)
> **Code Keywords:** let (6), switch (1)
> **Exercise Files:** exercise files (4)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** terminal (2), aws console (1)
> **UI Navigation:** switch to (1), select the (1)

#### Configure NGINX
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=0)** - [Instructor] We're at a point where we have our Ubuntu server in place and Jenkins and NGINX are installed.
>
> **[0:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=6)** You might be wondering, why do we need to install NGINX if we're setting up a Jenkins server?
>
> **[0:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=12)** Let's stop for a moment and discuss how NGINX fits into this system.
>
> **[0:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=16)** We'll be configuring NGINX to act as a reverse proxy that sits in front of the Jenkins web application.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=24)** So instead of accessing our Jenkins application directly, we'll be accessing NGINX, which will pass on to Jenkins whatever requests we're sending in.
>
> **[0:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=35)** Jenkins will process the request and send a response back to NGINX and NGINX will then deliver the response back to us.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=44)** That seems like a lot of back and forth, but this configuration has its benefits.
>
> **[0:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=50)** Security for the app server is the main benefit we get from the reverse proxy.
>
> **[0:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=55)** Jenkins listens on port 8080 by default.
>
> **[0:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=58)** By setting up a security group and a reverse proxy that only allows access on port 80, we can make sure that all requests to the app server come through the web server first.
>
> **[1:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=70)** This gives the app server some protection by limiting access.
>
> **[1:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=75)** The reverse proxy also gives us the benefit of generating logs for each request.
>
> **[1:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=80)** Jenkins creates logs, but the content is more operational in terms of what Jenkins is doing, not what an end user is requesting.
>
> **[1:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=90)** By logging requests in the proxy, we get much more information like when requests were made and the IP address the request came from.
>
> **[1:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=99)** If there's ever a need to debug an issue with the server, the NGINX logs will make a great complement to the Jenkins logs.
>
> **[1:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=106)** Using NGINX as a reverse proxy also allows for simplified SSL termination.
>
> **[1:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=113)** With SSL, all of the traffic from the Jenkins application would be encrypted, improving the security of the information being transmitted.
>
> **[2:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=123)** And while it's totally possible to set up SSL termination using Jenkins alone, setting up SSL in NGINX is much easier.
>
> **[2:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=132)** The Jenkins documentation even suggests using a reverse proxy for SSL termination instead of poking around in the Jenkins configuration.
>
> **[2:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=141)** If that's not enough convincing, I don't know what is.
>
> **[2:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=145)** Now that we know why we need it, let's get NGINX configured.
>
> **[2:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=149)** I'm in my AWS account on the homepage for the Jenkins server EC2 instance.
>
> **[2:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=155)** And I also have tabs open with a connection to the Jenkins server and the exercise files for this lesson.
>
> **[2:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=162)** Before we start, let's make sure NGINX is running by opening the server's webpage.
>
> **[2:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=167)** We can find that DNS name right here along with a handy link to open the server's address.
>
> **[2:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=173)** In the new tab, I'll change HTTPS to HTTP.
>
> **[2:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=179)** This displays the NGINX welcome page, letting us know that everything is installed and running properly.
>
> **[3:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=185)** If you're following along and have trouble accessing this page, make sure your browser is using an HTTP connection instead of HTTPS.
>
> **[3:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=195)** Now let's add the reverse proxy configuration.
>
> **[3:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=198)** For that, I'll be referring to the exercise files for this video.
>
> **[3:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=202)** The exercise files include the commands and configuration for setting up NGINX.
>
> **[3:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=207)** I'll copy the commands from here and then apply them in the terminal.
>
> **[3:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=214)** I've got the NGINX configuration in place, but before moving on, I'll make sure I haven't broken anything.
>
> **[3:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=221)** I'll test the configuration with NGINX-T.
>
> **[3:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=224)** We didn't get any errors here, so we can go on to reloading the configuration with a systemctl reload command.
>
> **[3:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=233)** Now let's go back to the browser to make sure our reverse proxy is pointing to Jenkins as we expect.
>
> **[3:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=239)** I'll refresh the browser window, and sure enough, we get the unlock Jenkins page.
>
> **[4:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=246)** Awesome.
>
> **[4:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=248)** Now that we have NGINX all set up, we can move on to configuring Jenkins.

> [!info]- Semantic Content
>
> **Env Vars:** nginx (17), ssl (5), https (2), http (2), aws (1)
> **CLI Commands:** nginx (17), make (6), aws (1), find (1), systemctl (1)
> **Code Keywords:** let (5), pass (1), default. (1), from. (1)
> **Prerequisites:** set up (2), install (1), before we start (1)
> **Exercise Files:** exercise files (3)
> **Ports:** port 8080 (1), port 80 (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### Configure Jenkins
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=0)** - [Instructor] We're at the point where we have Nginx and Jenkins installed on our Ubuntu instance.
>
> **[0:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=6)** Nginx is configured as a reverse proxy so we can get to Jenkins via Port 80 on the instances public DNS name.
>
> **[0:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=14)** Now it's time to configure Jenkins.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=17)** Because this is a brand new installation of Jenkins, we're immediately prompted to unlock Jenkins by entering the initial admin password.
>
> **[0:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=26)** The path to the password is given to us here.
>
> **[0:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=28)** I'll copy this path so I can use it in my terminal.
>
> **[0:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=33)** I'm connected to the instance where Jenkins is running and I have my session elevated to the root user.
>
> **[0:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=39)** Elevated permissions are required to read the initial admin password.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=44)** In the terminal, I'll run cat and then paste in the path to the initial admin password.
>
> **[0:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=51)** Okay, there's the password.
>
> **[0:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=53)** I'll copy this and go back to the unlock screen.
>
> **[0:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=57)** With the password pasted in, we can select continue, and go to the next step.
>
> **[1:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=63)** This brings us to the customized Jenkins screen.
>
> **[1:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=67)** Select the default option to install the suggested plugins.
>
> **[1:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=70)** On the next screen, we'll see the plugins being installed.
>
> **[1:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=74)** This will take a minute or two.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=77)** Once the plugins are installed, we can create the first admin user.
>
> **[1:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=82)** This is useful for setting up our own username and password for logging in.
>
> **[1:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=86)** Enter the values for username, password, and email address, then select save, and continue.
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=93)** We get one more screen for the configuration where we're prompted for the Jenkins URL.
>
> **[1:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=99)** This URL is the root URL that we'll be using to reach the server.
>
> **[1:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=103)** Jenkins will use it to build links that will be displayed in other ways as well.
>
> **[1:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=108)** Fortunately, the software picks up the link that we're using now, so we can just select save and finish.
>
> **[1:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=114)** And hey, we're ready.
>
> **[1:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=115)** Our configuration is complete and Jenkins is ready to go.
>
> **[1:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=119)** After all of that configuration, we're finally logged in to our new Jenkins server.
>
> **[2:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=125)** Now we can move on to planning out the rest of the build environment.

> [!info]- Semantic Content
>
> **Env Vars:** url (3), dns (1)
> **CLI Commands:** nginx (2), cat (1)
> **Code Keywords:** continue (2), public (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** configure (1), install (1)
> **Ports:** port 80 (1)
> **Cross-References:** go back to (1)

#### Solution: Set up a Jenkins server
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=5)** - [Instructor] This challenge focus on setting up and configuring a Jenkins server using AWS resources.
>
> **[0:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=11)** Let's review what I have in place for my solution.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=15)** I started with the IAM role.
>
> **[0:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=18)** This role has the Amazon SSM Managed Instance Core Policy attached so we can connect using Session Manager.
>
> **[0:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=26)** Then I created a security group with rules for HTTP and HTTPS Access.
>
> **[0:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=32)** The source is set to allow access from all IPv4 addresses.
>
> **[0:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=37)** I created an EC2 instance and attached the role and security group that I created previously.
>
> **[0:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=43)** I used a Ubuntu machine image and a t2_micro instance type.
>
> **[0:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=49)** I also created an elastic IP address and associated it with the EC2 instance.
>
> **[0:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=55)** This will allow the server to keep the same IP address across reboots.
>
> **[1:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=60)** Using Session Manager, I connect it to the server and installed the required software, Java, nginx, and Jenkins.
>
> **[1:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=73)** Then, I configured nginx to act as a proxy for the Jenkins server.
>
> **[1:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=80)** Essentially, nginx will pass requests to Jenkins and then return the responses, which leads to the Jenkins server where I installed the default plugins and created an admin user.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=94)** With all of these resources and configurations in place, I believe this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (2), aws (1), iam (1), ssm (1), http (1)
> **CLI Commands:** nginx (3), aws (1)
> **Code Keywords:** let (1), type. (1), pass (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### 2. Create a Build Environment

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Plan the build environment
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=0)** - [Instructor] At this point, we have our primary Jenkins server up and running.
>
> **[0:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=4)** Let's take a moment to plan the rest of the build environment.
>
> **[0:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=8)** We'll follow best practices for a distributed Jenkins environment by removing all executors from the Jenkins server.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=17)** This will prevent any builds from starting on the primary server, which frees up resources for Jenkins to do what it does best, managing builds on other servers.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=27)** To connect the primary server to a build server, we'll need a key pair for connections via secure shell and a security group to limit access.
>
> **[0:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=38)** And of course, we'll need at least one build server.
>
> **[0:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=41)** This is where the real action happens.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=44)** Any code that gets checked out will be written to the build server and commands will be run by local processes.
>
> **[0:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=50)** The results of the build will get sent back to the Jenkins server for any post-build processing like archiving or reporting.
>
> **[0:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=58)** Because our build server will be manipulating AWS resources on our behalf, we'll need to create an IAM role that assigns the correct permissions.
>
> **[1:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=68)** The role will allow our build servers to run AWS commands and interact with AWS APIs without having to enter credentials.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=77)** As automators, this is an enormous benefit because we don't have to worry about storing and retrieving credentials every time we want the build server to do something.
>
> **[1:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=88)** Once we have these resources in place, we'll be able to create Jenkins jobs that can deploy applications and manage AWS resources like S3, AWS Lambda, and Amazon Elastic Container Service.
>
> **[1:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=103)** For the rest of this course, we'll be focusing on AWS Lambda.
>
> **[1:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=108)** Our goal will be to set up a pipeline triggered by pushes to a code repository so that changes are deployed automatically.
>
> **[1:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=115)** Essentially, we'll be building the infrastructure for a continuous integration and continuous delivery pipeline, commonly referred to as CI/CD.
>
> **[2:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=125)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (6), cd (1)
> **Env Vars:** aws (6), iam (1)
> **Code Keywords:** let (2), lambda (2)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Create an IAM role for the build server
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=0)** - [Instructor] As we create resources for the build server, let's start with the IAM role.
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=5)** You may recall, from setting up the Jenkins server, that IAM roles help manage the credentials that AWS resources need when they access other AWS resources.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=17)** I'm already on the IAM dashboard, so I'll select create role.
>
> **[0:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=21)** I'll leave AWS service selected for the entity type, and under use case, I'll select EC2.
>
> **[0:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=29)** We're setting up a build environment that will interact with the AWS Lambda Service, so the permissions we assign to this role should reflect that.
>
> **[0:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=38)** I'll start by searching for the keyword Lambda.
>
> **[0:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=42)** This narrows the list to a few results.
>
> **[0:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=47)** I already know that AWS Lambda full access is the policy I want, but selecting the plus sign next to it confirms that this policy grants full access to the Lambda service.
>
> **[0:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=59)** I'll select this policy and move on to the next step.
>
> **[1:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=64)** I'll enter the name EC2 Lambda and add the Jenkins name tag.
>
> **[1:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=71)** Now that we have our role in place, we can move on to creating the security group and key pair for the build server.

> [!info]- Semantic Content
>
> **Env Vars:** aws (5), iam (3), ec2 (2)
> **Code Keywords:** lambda (5), let (1), type, (1), case, (1)
> **CLI Commands:** aws (5)
> **Speakers:** - [instructor] (1)

#### Create a security group and key pair for the build server
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=0)** - [Instructor] Let's continue creating the resources we need for the build server by creating a security group and a key pair.
>
> **[0:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=7)** Let's start with the security group.
>
> **[0:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=10)** From the EC2 dashboard, I'll select into security groups and then select create security group.
>
> **[0:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=16)** For the name, let's use build-server, and for the description, let's enter SSH from Jenkins server.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=24)** Now let's add a rule.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=27)** For the traffic type, we need to select SSH, which automatically fills in the port range for us.
>
> **[0:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=33)** We'll leave the source as custom and search for the security group attached to the Jenkins server.
>
> **[0:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=39)** For the description, let's enter the same description we used before, SSH from Jenkins server.
>
> **[0:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=47)** We don't need to make any changes to the outbound rules since we want our instance to be able to reach any address on the internet.
>
> **[0:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=54)** However, I will add a tag with the name build-server.
>
> **[0:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=59)** When we attach this group to the EC2 instance running our build server, the server will only be accessible from the Jenkins server and only by SSH.
>
> **[1:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=68)** As I mentioned before, this improves security by limiting access to this server from very specific locations.
>
> **[1:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=75)** Now we need to create the key pair that our Jenkins server will use to connect to the build server.
>
> **[1:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=81)** In the sidebar, I'll go to key pairs, and then create key pair.
>
> **[1:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=86)** I'll enter the name build-server, and I'll select ED25519 for the key type, and PEM format.
>
> **[1:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=96)** Per the usual, I'll add a build server name tag before creating this key pair.
>
> **[1:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=102)** Creating the key will either open a file browser or save the key to your downloads folder.
>
> **[1:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=107)** Let's view and copy the contents of the key.
>
> **[1:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=111)** I have the private key open in my text editor.
>
> **[1:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=114)** I need to copy the contents of the key file so I can store it as a credential in the Jenkins server.
>
> **[2:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=121)** Now I'll head over to Jenkins.
>
> **[2:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=124)** From the Jenkins dashboard, I'll select manage Jenkins credentials.
>
> **[2:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=130)** Under domains, I'll select global, and then add credentials.
>
> **[2:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=136)** This opens a form where we can enter the details for the key.
>
> **[2:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=140)** First, we need to select the kind of credential we're storing.
>
> **[2:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=143)** In this case, it's an SSH username with a private key.
>
> **[2:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=148)** For the ID, I'll enter build-server.
>
> **[2:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=152)** For username, we'll enter EC2-user.
>
> **[2:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=156)** This is the username that Jenkins will use when it connects with the key and it's also the name of the default user for Amazon Linux.
>
> **[2:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=164)** When we create the build server, we'll be using a machine image based on Amazon Linux, so we'll enter EC2-user here to match that AMI.
>
> **[2:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=174)** Under private key, we need to select the radio button next to enter directly, and then select add.
>
> **[3:02](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=182)** This opens up a form where we'll enter the private key.
>
> **[3:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=186)** Now I can paste in the key.
>
> **[3:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=189)** We can leave the passphrase empty and just select create.
>
> **[3:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=192)** Great, our key is listed on the credentials page.
>
> **[3:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=196)** Now we can spin up our build server and get Jenkins connected to it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), private (4), type, (2), continue (1), case, (1)
> **Env Vars:** ssh (5), ec2 (4), ed25519 (1), pem (1), ami (1)
> **CLI Commands:** ssh (5), make (1)
> **UI Navigation:** in the sidebar (1), go to (1), select the (1)
> **Speakers:** - [instructor] (1)

#### Create the build server
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=0)** - [Instructor] At this point, we have everything in place to spin up our Build server instance, a role for accessing AWS resources, a security group for managing network access, and a key pair that Jenkins can use to connect to the Build server, so let's go ahead and create this thing.
>
> **[0:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=18)** From the EC2 dashboard I'll select launch instance, and of course, I'll name this instance Build Server.
>
> **[0:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=26)** For the AMI I'll make sure Amazon Linux is selected.
>
> **[0:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=30)** For the instance type, we'll stick with T2 Micro.
>
> **[0:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=33)** Under key pair, I'll select the key that I created for the Build server.
>
> **[0:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=38)** For network settings, we need to select the existing security group.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=44)** Under storage, I'll change the size to be 20 gigabytes.
>
> **[0:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=48)** Now I'll open up the advanced detail section.
>
> **[0:52](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=52)** Under IAM instance profile, select the EC2 Lambda roll.
>
> **[0:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=57)** Now scroll to the bottom of the advanced section to enter user data.
>
> **[1:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=63)** For the user data, we need to add the script that will install all the tools needed to set up the Build Agent, work with AWS Lambda, and any other dependencies.
>
> **[1:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=74)** In the exercise files, there's a script that we can use to install the tools, so I'll copy it from there.
>
> **[1:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=81)** Back in the Launch Wizard, I'll paste in the script.
>
> **[1:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=85)** Now I'll select launch instance.
>
> **[1:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=88)** Okay, we have our Build server in place.
>
> **[1:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=90)** In the next lesson we'll connect it to the Jenkins server.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), ec2 (2), ami (1), iam (1)
> **Code Keywords:** lambda (2), let (1), type, (1)
> **CLI Commands:** aws (2), make (1)
> **UI Navigation:** select the (3)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Connect Jenkins to the build server
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=0)** - [Instructor] Let's connect our Jenkins server to the build server.
>
> **[0:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=4)** In this tab, I'm viewing the details for the build server EC2 instance.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=9)** In another tab, I'm logged into the Jenkins server.
>
> **[0:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=12)** We need to get the private DNS for the build server.
>
> **[0:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=16)** It's important that we use the private DNS name to keep traffic inside the AWS network.
>
> **[0:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=22)** This will reduce costs associated with network traffic and also keep the connection fast.
>
> **[0:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=28)** I'll select the link next to the name to copy it to the dashboard.
>
> **[0:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=33)** Now, let's go to Jenkins.
>
> **[0:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=35)** In Jenkins, I'll select Manage Jenkins and then Nodes.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=40)** This opens the page where we can manage the Jenkins server and add build servers, which are referred to as nodes.
>
> **[0:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=48)** First, let's remove all the executors from the Jenkins server.
>
> **[0:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=51)** This will prevent any jobs from starting on the built-in node.
>
> **[0:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=55)** On the Configuration page for the built-in node, all we need to do is set the number of executors to zero and select Save.
>
> **[1:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=63)** The immediate change we see here is there are no longer any executors under Build Executor Status.
>
> **[1:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=70)** Now, let's add the build server.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=72)** We'll go back to the Nodes page and select New Node.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=77)** No surprise here, for the node name, I'm going to enter build-server.
>
> **[1:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=81)** Then we need to select Permanent Agent, which is really the only option, and then select Create.
>
> **[1:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=88)** On the node configuration page, we need to add a few more details.
>
> **[1:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=92)** For the description, let's give details on the server, specifically, the type of OS it's running.
>
> **[1:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=99)** I'll enter Amazon Linux 2023.
>
> **[1:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=102)** For the number of executors, I'll set it to be four.
>
> **[1:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=106)** Ideally, this number should match the number of CPUs on a node, but since this is the only build server at the moment, we need to set it a bit higher.
>
> **[1:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=115)** This will keep jobs from getting backed up if we launch multiple jobs at the same time.
>
> **[2:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=121)** The remote route directory is one of the mandatory fields on this form.
>
> **[2:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=125)** This will be the directory that Jenkins uses on the build server to create workspaces where our jobs will run.
>
> **[2:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=131)** So it's pretty important that this directory is defined and exists.
>
> **[2:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=136)** For Amazon Linux instances, Jenkins will be connecting with the default account, so we can use the account's home directory for the remote route.
>
> **[2:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=146)** Labels help Jenkins run jobs on specific compute resources.
>
> **[2:31](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=151)** Think about an environment where our Jenkins server is connected to build servers running different operating systems or with different tools installed.
>
> **[2:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=159)** We can label these servers and set up our jobs to only run on the resources that have the correct operating systems or tool for the job.
>
> **[2:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=168)** For this server, I'll use the label lambda.
>
> **[2:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=171)** The usage setting also helps us limit the jobs that can be run on this server.
>
> **[2:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=176)** For now, I'll just leave it as the default, which is to use this note as much as possible.
>
> **[3:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=181)** For the launch method, we need to select Launch agents via SSH.
>
> **[3:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=187)** For the host, I'll paste in the server name for the EC2 console.
>
> **[3:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=191)** Yes, that value has been on the clipboard for the entire time.
>
> **[3:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=196)** For the credentials, I'll select ec2-user.
>
> **[3:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=199)** This is the user and key that we set up specifically for this connection.
>
> **[3:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=204)** For the host verification strategy, we need to select Non-verifying Verification Strategy.
>
> **[3:31](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=211)** Typically, when a connection is made via SSH, the user is prompted to verify the connection and store a fingerprint for the server in a file called known_hosts.
>
> **[3:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=221)** But since our connection is automated, we need to skip the verification step.
>
> **[3:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=227)** If we needed to, we could use availability options to set a schedule for this build server to be available.
>
> **[3:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=234)** I want to note that these options to take the server offline are only for connections from the Jenkins server.
>
> **[4:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=241)** They don't apply to the build server being turned on or off in the AWS console.
>
> **[4:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=247)** We don't have any environment variables or tool locations to set, so we can just select Save.
>
> **[4:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=254)** After adding the node, it may take a moment for the connection to be complete.
>
> **[4:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=259)** Once the build server is connected, select the name to get more details, and then select the Log link to see the log of the connection.
>
> **[4:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=268)** And if we scroll to the end of the log, we get the message that we've been waiting for.
>
> **[4:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=272)** The agent is successfully connected and online, which means our build server is ready to run jobs.

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), aws (2), ssh (2)
> **Code Keywords:** let (5), private (2), lambda (1), default, (1), for. (1)
> **Env Vars:** ec2 (2), dns (2), aws (2), ssh (2)
> **UI Navigation:** select the (3), go to (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** known_hosts (1)
> **Cross-References:** go back to (1)
> **Tools:** aws console (1)

#### Solution: Set up a build server
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=0)** - [Instructor] This challenge focused on using AWS resources to set up and configure a Jenkins build server.
>
> **[0:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=13)** Let's review what I have in place for my solution.
>
> **[0:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=16)** I started with the IAM role.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=19)** The main policy used by this role is AWSLambda Full Access.
>
> **[0:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=25)** This role allows the build server to manage resources in the AWSLambda service.
>
> **[0:31](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=31)** I created a security group for the build server to limit access.
>
> **[0:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=36)** The one role we have in place limits SSH access to the Jenkins server.
>
> **[0:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=41)** This helps prevent connections from any other location on the network, which leads to the SSH key associated with the build server.
>
> **[0:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=50)** Jenkins uses this key to connect to the build server using the SSH protocol.
>
> **[0:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=56)** After creating this key, I had to store it in the Jenkins server.
>
> **[1:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=60)** I store the key in Jenkins as a credential using the username with private key credential type.
>
> **[1:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=67)** I added the username that Jenkins uses to connect along with the home directory and the key material generated by AWS.
>
> **[1:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=76)** With everything in place, I created the build server EC2 instance, attaching the security group and IAM role and associating the SSH key for connections.
>
> **[1:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=86)** The exercise files included the user data needed to configure the build server without logging in.
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=93)** Once the server was up and running, I copied the private DNS for the connection from Jenkins to the build server.
>
> **[1:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=100)** And finally, I used the SSH credential and the private DNS string to add the build server as a new node in Jenkins, the nodes logs show confirmation that Jenkins and the build server are connected, and that this challenge was solved successfully.

> [!info]- Semantic Content
>
> **Env Vars:** ssh (5), aws (2), iam (2), dns (2), ec2 (1)
> **CLI Commands:** ssh (5), aws (2), node (1)
> **Code Keywords:** private (3), let (1), type. (1), finally, (1)
> **Prerequisites:** configure (2), set up (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Connect Jenkins with Webhooks

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Plan the CI/CD pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=0)** - Continuous integration and continuous delivery are two software engineering approaches that let development teams produce software efficiently.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=9)** With continuous integration, developers work on their code in a local environment and commit their changes to a shared repository on a regular basis.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=19)** Their code can then be combined, or in other words, integrated, with code from other members of the team or any existing code.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=27)** Using this method, developers can find and resolve errors more quickly compared to waiting until all the code for an application is complete and integrating everything at once.
>
> **[0:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=37)** Continuous delivery is a partner to the continuous integration process.
>
> **[0:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=42)** Continuous delivery enables developers to build and release their software quickly and repeatedly.
>
> **[0:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=48)** By automating the build process, developers can trigger builds from webhooks, and using automation framework like Jenkins to build and deploy code to different environments.
>
> **[0:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=58)** Let's discuss how our current build environment will fit into a basic CI/CD pipeline.
>
> **[1:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=65)** CI/CD pipelines start with a developer.
>
> **[1:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=67)** In that case, that might be you.
>
> **[1:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=70)** You'll work on your code in a local environment and commit the changes to GitHub.
>
> **[1:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=75)** GitHub will be used to track changes and trigger any upstream automation via webhooks.
>
> **[1:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=81)** That's where the build environment comes in.
>
> **[1:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=84)** Jenkins will kick off a job on the build server.
>
> **[1:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=87)** The build server will download the updated code and run the scripted commands that deploy the application to AWS Lambda.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=95)** In AWS Lambda, the environment is updated with a new code, and the application can be made available for testing, verification, or other steps in the lifecycle of the application.
>
> **[1:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=107)** After deploying the application, Jenkins can send notifications to the developers, letting them know the status of the deployment, the health of the application environment, and any other information that might be needed for the next step in developing the application.
>
> **[2:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=121)** This process is repeated until the application is shipped to production, and even then, is still used to deploy updates and new features.
>
> **[2:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=130)** With this blueprint, let's build out the rest of our CI/CD pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (3), aws (2), find (1)
> **Code Keywords:** let (3), lambda (2), case, (1)
> **Env Vars:** aws (2)
> **Tools:** github (2)
> **Definitions:** in other words (1), is a  (1)
> **Exercise Files:** download the (1)
> **Speakers:** - continuous (1)

#### What's a webhook?
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=0)** - [Instructor] Before we move on, I wanted to take a moment to explain webhooks.
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=5)** A webhook is a way for web applications to notify each other that something has happened.
>
> **[0:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=11)** Usually the notification is sent via HTTP and is accompanied by details describing the event.
>
> **[0:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=18)** In many ways, activating a webhook is a lot like placing an online order.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=24)** The event is created when the order is placed.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=27)** Once the order is ready for delivery, a courier notifies the recipient by ringing the doorbell or knocking on the door, and then delivers the package.
>
> **[0:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=37)** In our case, we'll be creating events by pushing code to a GitHub repository.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=44)** GitHub will store the code and then notify Jenkins that new code has been committed to the repository and is ready to be deployed.
>
> **[0:52](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=52)** The notification gets sent via an HTTP post to the webhook endpoint that Jenkins uses to receive these notifications.
>
> **[1:02](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=62)** Essentially, the web hook is the door that GitHub knocks on.
>
> **[1:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=66)** Along with the notification, Jenkins receives additional data, including the name of the user that committed the code, what files were changed, and other details about the repository like the name of the branch that the code was committed to, and the message that describes the commit.
>
> **[1:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=82)** Once Jenkins has the code and all the info, the code can be deployed or otherwise acted on.
>
> **[1:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=89)** Now that we're on the same page regarding webhooks, let's set one up.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Code Keywords:** case, (1), let (1)
> **Env Vars:** http (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Create and test a webhook with GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=0)** - [Instructor] To test our webhook, we need to have a repository where our code is stored, and a job that will be triggered when code is pushed to that repository.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=9)** I have two tabs open, one with GitHub and the other with Jenkins.
>
> **[0:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=14)** I've created a public repo with nothing more than a README file.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=19)** I'll be updating the README file to trigger a job in Jenkins.
>
> **[0:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=23)** Before I go to the Jenkins console, I need to get the repo's URL.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=27)** I can get that by selecting the Code button, and then the HTTPS tab, and then the little clipboard here next to the URL.
>
> **[0:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=37)** Okay, now let's go to the Jenkins tab and create a job.
>
> **[0:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=43)** I'll start by selecting New Item.
>
> **[0:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=46)** On the New Item screen, let's call this job webhook-test and select Freestyle project.
>
> **[0:52](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=52)** I'll enter a brief description.
>
> **[0:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=55)** Now, I'll scroll down to the Source Code Management section and select Git.
>
> **[1:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=61)** In this section, I need to add the URL for the repo, so I'll paste it in here.
>
> **[1:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=67)** This is a public repository, so we don't need to enter any credentials.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=72)** I do need to update the Branch Specifier.
>
> **[1:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=75)** The default is master.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=77)** New repos in GitHub use the main branch as the default branch, so I'll update the setting to match that.
>
> **[1:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=84)** If you run into any problems with your job not checking out code the way you expect, make sure you confirm that the Branch Specifier matches the correct branch name in your repo.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=95)** Next, we need to add the build trigger.
>
> **[1:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=98)** In this section, we need to select GitHub hook trigger for GITScm polling.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=104)** This will essentially turn on the connection between our GitHub repo and this Jenkins job.
>
> **[1:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=110)** Now, let's add a build step.
>
> **[1:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=113)** I'll use a shell build step.
>
> **[1:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=115)** We don't need to do too much in this test, so let's just print the contents of the README by catting the file.
>
> **[2:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=124)** Now, I'll select Save.
>
> **[2:06](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=126)** Okay, now we need to configure the webhook on the GitHub side.
>
> **[2:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=130)** For that, we need the URL of our Jenkins server.
>
> **[2:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=133)** The easiest way to get that is to copy the URL from your browser's toolbar, or right-select on the Jenkins icon in the top left corner, and select Copy Link Address.
>
> **[2:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=143)** Now, I'll go back to GitHub.
>
> **[2:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=146)** In the repo, I'll select Settings and then Webhooks.
>
> **[2:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=152)** On this screen, I'll select Add webhook, and in the Payload URL field, I'll paste the Jenkins server URL.
>
> **[2:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=160)** One thing we need to add to this URL is the route that GitHub will use to trigger our job.
>
> **[2:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=167)** We need to add github-webhook, followed by a slash.
>
> **[2:53](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=173)** Adding this to the URL is critical for everything to work the way it's supposed to.
>
> **[2:58](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=178)** I want to add special attention to the slash at the end of the complete URL.
>
> **[3:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=183)** It has to be there.
>
> **[3:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=185)** If you run into any problems with your webhooks, check this URL setting to make sure it's configured properly.
>
> **[3:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=192)** For the content type, select application/json.
>
> **[3:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=196)** This will configure GitHub to send a JSON payload along with a push to the webhook.
>
> **[3:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=202)** We'll leave the rest of the settings as is and select Add webhook.
>
> **[3:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=207)** And if I refresh the page, there's a confirmation that the webhook is working as intended.
>
> **[3:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=212)** Okay, let's make an update.
>
> **[3:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=215)** On the Code screen, I'll edit the README file.
>
> **[3:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=219)** I'm editing the file right here in the browser, and I'll add something to let us know that our GitHub webhook actually worked.
>
> **[3:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=227)** Now, I'll commit these changes.
>
> **[3:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=230)** Now, if I open the Jenkins tab, we should see something happening.
>
> **[3:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=234)** In the build history, there's a job pending.
>
> **[3:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=237)** It should finish pretty quickly.
>
> **[3:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=239)** Okay, it's done.
>
> **[4:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=240)** Let's take a look at the output.
>
> **[4:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=243)** Let's take a closer look at all the things that came together in this output.
>
> **[4:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=248)** In the first line of output, we can see that the build was triggered by a GitHub push, and we even see the user that triggered the push.
>
> **[4:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=256)** The next line shows us that Jenkins ran this job on the build server, and we can also see the directory where the job ran.
>
> **[4:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=264)** The next few lines show us the git commands that Jenkins used to clone the repository.
>
> **[4:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=270)** And at the bottom of the log is the content of the README file, along with our changes.
>
> **[4:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=276)** Yes, friends, our webhook test worked, it really did.

> [!info]- Semantic Content
>
> **Env Vars:** url (11), readme (5), https (1), json (1)
> **Code Keywords:** let (8), public (2), type, (1)
> **Tools:** github (11)
> **CLI Commands:** make (3), git (2)
> **Documentation:** the readme (4)
> **UI Navigation:** go to (2), scroll down (1), open the (1)
> **Exercise Files:** source code (1), github repo (1)
> **Prerequisites:** configure (2)

#### Solution: Connect Jenkins to GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=0)** - [Narrator] This challenge introduces us to webhooks, and how we can use a push to a Git repository to trigger jobs in Jenkins.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=15)** I started with the Git repo, specifically creating a public repository containing a README file.
>
> **[0:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=22)** The key piece of information needed from the repo is the URL, and I got that by selecting the Code button and then the HTTPS tab, and then copying the URL from here.
>
> **[0:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=35)** With that secured, I created a freestyle job in Jenkins.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=40)** I named the job webhook-test to match the name of the GitHub repo, and I started configuring the job in Source Code Management.
>
> **[0:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=50)** I selected the Git option and added the URL for the repo.
>
> **[0:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=55)** I also had to change the branch specifier from master to main, so that the correct branch was checked out by the job.
>
> **[1:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=63)** Then I added a trigger.
>
> **[1:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=65)** All I had to do here was select the box next to GitHub hook trigger for GITScm polling.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=72)** This tells Jenkins to listen for webhooks from GitHub.
>
> **[1:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=76)** To give this job something to do, I added just one build step that displays the contents of the README file.
>
> **[1:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=83)** Once the job was in place, I configured the webhook back in the repo.
>
> **[1:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=88)** GitHub needs to know what URL to use for the webhook, so I added the URL for the Jenkins server.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=95)** The key part of this configuration is adding github-webhook and a trailing slash to the end of the URL.
>
> **[1:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=103)** All of that has to be there, and it has to be spelled correctly.
>
> **[1:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=107)** Just putting the Jenkins URL here won't work.
>
> **[1:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=111)** I also selected application/json as the payload type.
>
> **[1:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=116)** With the repo in place, the job squared away, and the webhook set up, I was able to test everything out.
>
> **[2:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=123)** I made a small change to the repo and committed the change to trigger the webhook.
>
> **[2:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=129)** The message at the top of the log shows that the run was triggered by a GitHub push.
>
> **[2:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=135)** And the output from the build step shows that indeed the webhook test worked, which means this challenge was completed successfully.

> [!info]- Semantic Content
>
> **Env Vars:** url (7), readme (2), https (1)
> **Tools:** github (6)
> **CLI Commands:** git (3)
> **Code Keywords:** public (1), type. (1)
> **Exercise Files:** github repo (1), source code (1)
> **Documentation:** the readme (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)

#### Create and test webhooks with other services
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980&t=0)** - [Instructor] The GitHub plugin is one of the default plugins that gets installed during the Jenkins setup process.
>
> **[0:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980&t=7)** This plugin provides the functionality that we can tap into for creating webhooks between Jenkins and GitHub.
>
> **[0:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980&t=14)** Even though this course focuses on using Jenkins with GitHub, Jenkins isn't limited to GitHub alone.
>
> **[0:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980&t=22)** Other plugins allow Jenkins to integrate with additional version control services, like GitLab and Bitbucket, among others.
>
> **[0:31](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980&t=31)** Take a look at the next set of exercise files to see how specific plugins can be installed to allow webhooks from GitLab and Bitbucket, just like we've done with GitHub.

> [!info]- Semantic Content
>
> **Tools:** github (5), gitlab (2), bitbucket (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Deploy Code to AWS Lambda

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Initialize the deployment target in AWS Lambda
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=0)** - [Instructor] AWS Lambda lets you run code without managing servers.
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=5)** Just upload your code and Lambda handles scaling and availability.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=9)** It's also a great CI/CD target.
>
> **[0:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=13)** With a few commands, we can automate builds, tests, and deployments.
>
> **[0:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=18)** AWS CloudFormation lets you create and manage AWS resources using code.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=24)** Instead of clicking through the console, you define your infrastructure in a template.
>
> **[0:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=29)** And CloudFormation builds it for you.
>
> **[0:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=32)** In this lesson, we'll use CloudFormation to initialize the Lambda function we'll be using with GitHub and Jenkins.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=40)** I'm viewing the Exercise Files for this lesson, specifically the CloudFormation template that defines the Lambda function resources.
>
> **[0:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=49)** Take a look at this template and then download it to your local system before moving on to the next step.
>
> **[0:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=55)** I'm also logged into my AWS account, and I'm on the CloudFormation home page.
>
> **[1:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=60)** I'll start by selecting Create stack.
>
> **[1:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=63)** On this screen, I'll select Upload a template file.
>
> **[1:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=67)** And then, I'll upload the template.
>
> **[1:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=70)** Now, I'll select Next.
>
> **[1:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=73)** The name for the stack has to be unique for the region it's deployed in.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=77)** I'll name this stack python-api.
>
> **[1:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=80)** This stack doesn't have any parameters, so I'll select Next.
>
> **[1:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=85)** On the next screen, I'll scroll to the bottom and confirm that AWS will create IAM resources.
>
> **[1:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=92)** On the final screen, I'll scroll to the bottom and select Submit.
>
> **[1:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=97)** It'll take a moment for the stack to deploy, so I'll wait on this screen until the deployment completes.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=104)** Okay, the stack is deployed.
>
> **[1:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=106)** The Resources tab shows the details for all the resources created by the stack, including the Lambda function, the permission to run the function, and the URL to access the function over the web.
>
> **[1:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=119)** The Outputs tab gives us more operational details with the region where the function is deployed, the name of the function, and the function URL.
>
> **[2:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=129)** Make a note of these outputs.
>
> **[2:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=131)** We'll be using them to configure the deployment job in Jenkins.
>
> **[2:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=135)** Let's open the URL.
>
> **[2:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=138)** Awesome.
>
> **[2:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=139)** Right now, the function just returns a landing page inviting us to deploy the main application.
>
> **[2:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=145)** We'll start that process in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), lambda (5), let (1)
> **Env Vars:** aws (5), url (3), iam (1)
> **CLI Commands:** aws (5), cd (1), python (1), make (1)
> **Exercise Files:** template (5), exercise files (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** configure (1)

#### Create a GitHub repository for the application code
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=0)** - [Instructor] I'm logged into my GitHub account, and I'm viewing [github.com/new](https://github.com/new) to create a repo for the application code.
>
> **[0:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=9)** Let's call this repository python-api to match the name of our Lambda function web application.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=17)** And let's also add a simple description.
>
> **[0:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=21)** We'll leave the repo public.
>
> **[0:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=23)** Let's add a README file and a .gitignore file for Python projects.
>
> **[0:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=28)** And now let's select Create.
>
> **[0:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=30)** Okay, there's our repo.
>
> **[0:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=32)** Now let's add the files.
>
> **[0:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=34)** I'll select this Plus icon, and then select Upload Files.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=40)** On this screen, I'll select Choose Files.
>
> **[0:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=44)** I've already downloaded the exercise files for this lesson.
>
> **[0:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=47)** I'll select all the files and then select Open.
>
> **[0:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=51)** And now, I'll select Commit Changes.
>
> **[0:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=54)** Great, now that the code is in GitHub, we're one step closer to completing our pipeline.
>
> **[1:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=60)** Let's move on to creating the deployment job in Jenkins.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), lambda (1), function (1), public (1)
> **Tools:** github (3)
> **CLI Commands:** python (2)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** readme (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Create a freestyle job to deploy code from GitHub, part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=0)** - [Instructor] Now that we have the web app deployed in AWS Lambda and a GitHub repository with a code for the application, we need to configure a Jenkins job that deploys the application whenever a change is pushed to the repo.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=15)** I'm starting in GitHub to get the URL for our repo, I'll select code and then HTTPS.
>
> **[0:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=23)** Then I'll select the icon to copy the URL.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=27)** Now let's go to Jenkins.
>
> **[0:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=29)** In the Jenkins tab, I'll select new item.
>
> **[0:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=32)** For the job name let's stick with the same name we use for the application and the repo, python-api.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=40)** We'll be using a freestyle project, so I'll select that and then select OK.
>
> **[0:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=45)** For the job description, let's explain exactly what this job does.
>
> **[0:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=50)** It deploys our application to AWS Lambda.
>
> **[0:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=54)** To start the configuration, we need to select the option to restrict where this project can run.
>
> **[1:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=60)** If we add any more build servers with different roles, we want to make sure that this job runs on a server that has the Lambda role.
>
> **[1:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=68)** So I'll select this option and enter Lambda.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=72)** Now let's move on to source code management.
>
> **[1:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=75)** Under source code management, I'll select Git.
>
> **[1:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=78)** Fr the repository URL, I'll paste in the repo URL.
>
> **[1:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=82)** This repo is public, so we don't need to configure any credentials to access it.
>
> **[1:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=88)** We also need to update the branch specifier.
>
> **[1:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=90)** The repo uses the main branch, so I'll update this option to match.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=95)** Now we can set the build trigger.
>
> **[1:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=98)** Under triggers we need to select GitHub hook trigger for GITScm polling.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=104)** This option will trigger our job whenever we push a code change to the repository after we add a webhook.
>
> **[1:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=111)** Before we do that, let's save our job with the apply button.
>
> **[1:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=116)** Now I'm going to scroll up and get the URL for my Jenkins server by right clicking the icon and selecting copy link address.
>
> **[2:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=125)** Now I'll go back to GitHub.
>
> **[2:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=128)** On the repo page, I'll select settings, webhooks, add webhook.
>
> **[2:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=134)** Under payload URL, I'll paste the Jenkins server URL, and at the end I'll add GitHub-webhook/.
>
> **[2:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=144)** As I've mentioned before, it's critical to have the spelling of the GitHub-webhook route correct, as well as having the trailing slash there.
>
> **[2:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=153)** It has to be there.
>
> **[2:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=155)** Now I'll select application JSON for the content type.
>
> **[2:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=159)** And finally, I'll add this webhook and I'll refresh this page just to get the confirmation that the webhook is added correctly.
>
> **[2:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=169)** Okay, this little green check mark here shows that the webhook is added correctly and we're good to go.
>
> **[2:56](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=176)** Now we can go back to Jenkins and finish our deployment.
>
> **[2:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=179)** Let's pick up there in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), lambda (4), public (1), match. (1), type. (1)
> **Env Vars:** url (7), aws (2), https (1), json (1)
> **Tools:** github (6)
> **CLI Commands:** aws (2), python (1), make (1), git (1)
> **UI Navigation:** select the (2), go to (1), scroll up (1)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** source code (2)
> **Prerequisites:** configure (2)

#### Create a freestyle job to deploy code from GitHub, part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=0)** - [Instructor] I'm in Jenkins, editing the Python API deployment job.
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=5)** I also have browser tabs with the exercise files for this lesson and the outputs from the cloud formation stack.
>
> **[0:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=13)** Let's finish configuring the deployment job by adding three build steps.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=19)** I'm using the execute shell step for each one.
>
> **[0:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=23)** Each step will run specific commands in the pipeline to deploy the code to AWS Lambda.
>
> **[0:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=29)** We can find those commands in the exercise files.
>
> **[0:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=32)** All we have to do is copy the commands for each step.
>
> **[0:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=36)** The first step sets up a virtual environment for Python dependencies.
>
> **[0:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=41)** I'll copy the code from here and paste it into the job configuration.
>
> **[0:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=46)** The next build step is where the real action happens.
>
> **[0:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=50)** The project includes a make file that bundles all the commands needed to test the code, build the deployment artifact, and then deploy the code to Lambda.
>
> **[1:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=60)** Take a look at the make file to see all the commands that get run from this one command line.
>
> **[1:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=67)** In the last step, we'll run another make command to test the deployed API.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=72)** It makes sense for Jenkins to run this test automatically instead of us having to confirm the deployment was successful.
>
> **[1:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=81)** Before we wrap up, we need to update the code with the output values from cloud formation.
>
> **[1:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=87)** I know that my function is called python-api, and I'm in the us-east-2 region, so I'll enter those values.
>
> **[1:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=96)** I don't have the URL memorized, so I'll get that value from cloud formation.
>
> **[1:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=102)** I'll copy the value from here, and back in Jenkins, I'll update the URL value in the deploy and test steps.
>
> **[1:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=111)** Okay, the job is all configured.
>
> **[1:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=114)** Let's save it and take it for a spin.
>
> **[1:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=117)** Before I run the job, let's take a look at the application.
>
> **[2:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=121)** Right now, the homepage shows the placeholder for the web app.
>
> **[2:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=125)** If our deployment from Jenkins works as expected, this page should be updated with the application code.
>
> **[2:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=133)** Okay. Here goes nothing.
>
> **[2:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=135)** I'll kick things off using the Build Now button, and wait for the build to complete.
>
> **[2:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=140)** Well, that was a little suspenseful, but thank goodness the job completed successfully.
>
> **[2:26](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=146)** If you're following along, take a moment to review the console output to see all the steps Jenkins took to deploy the application.
>
> **[2:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=153)** For the real proof, let's see the deployed application.
>
> **[2:37](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=157)** I'll reload the page to update the content.
>
> **[2:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=161)** Outstanding.
>
> **[2:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=162)** The API is up and ready to go.
>
> **[2:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=165)** Now let's take our deployment to the next level by pushing a change from GitHub.
>
> **[2:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=170)** We'll do that in the next lesson.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), make (3), aws (1), find (1)
> **Code Keywords:** let (5), lambda (2), function (1)
> **Env Vars:** api (3), url (2), aws (1)
> **Cross-References:** in the last (1), in the next (1)
> **Tools:** command line (1), github (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Deploy to AWS Lambda from GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=0)** - [Instructor] This is the moment we've been working toward: making a code change that triggers a Jenkins job and seeing that change deployed to the web application running in AWS Lambda.
>
> **[0:13](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=13)** Let's review all of the resources we have in place.
>
> **[0:16](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=16)** We have a GitHub repository with our code.
>
> **[0:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=20)** We have a Jenkins job that will be triggered by a webhook from GitHub, and we have our application running in AWS Lambda.
>
> **[0:30](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=30)** If everything works as intended, we'll be able to make a change in GitHub and see it propagated all the way to the application.
>
> **[0:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=38)** Let's give it a shot.
>
> **[0:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=40)** In the repository, let's make a change that will be immediately visible so that we can quickly confirm that the change was applied.
>
> **[0:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=48)** The HTML for the homepage is a good place to start.
>
> **[0:52](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=52)** We can edit this file in the browser by selecting the pencil icon.
>
> **[0:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=57)** Let's add a message explaining how the API was deployed.
>
> **[1:02](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=62)** I'll add a message to the page header, and I'll even add a smiley face because if this works, I'll be really happy.
>
> **[1:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=72)** Now we need to commit this change.
>
> **[1:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=74)** For this change, let's add a commit message.
>
> **[1:18](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=78)** We'll be able to see this message in Jenkins, which will be another way we can confirm that our changes have been pulled in.
>
> **[1:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=85)** Now, once I select Commit changes, the web hook will get activated and the Jenkins job will get triggered.
>
> **[1:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=92)** Here we go.
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=93)** I'll go to the Jenkins tab now so we can confirm that the Jenkins job got triggered.
>
> **[1:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=98)** There's our job currently in pending state.
>
> **[1:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=101)** Let's open the console to watch the deployment in realtime.
>
> **[1:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=105)** We can see that the job is running and in the process of deploying our application.
>
> **[1:50](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=110)** Two things we can confirm right away are the build trigger and the commit message.
>
> **[1:55](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=115)** The very first line of the output shows us that this job was indeed triggered by a GitHub push.
>
> **[2:02](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=122)** The commit message lets us know that Jenkins is working with the correct code.
>
> **[2:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=127)** Now that the deployment is finished, let's go to the application and reload the page, and there's our change.
>
> **[2:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=134)** Our checks along the way were good indications that our update was deployed exactly how we expected it to be, but this is the ultimate confirmation that the change was deployed successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), lambda (2)
> **CLI Commands:** aws (2), make (2)
> **Env Vars:** aws (2), html (1), api (1)
> **Tools:** github (4)
> **UI Navigation:** go to (2), open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Solution: Deploy to AWS Lambda from GitHub
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=0)** - [Instructor] This is the challenge that brings everything together and applies all the skills and technologies we've studied in this course.
>
> **[0:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=14)** The goal is to set up and exercise the complete CICD workflow that takes code from GitHub through Jenkins and updates a web application running in AWS Lambda.
>
> **[0:25](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=25)** Let's review.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=27)** I started with the provided CloudFormation template to deploy a stack that initialized the Lambda resources.
>
> **[0:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=36)** The stack also provided the details I needed to configure the deployment scripts in Jenkins.
>
> **[0:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=42)** Then I created a GitHub repo and added the provided code for the Python API.
>
> **[0:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=49)** Jenkins needs to know the URL for the repo to check out the code, so I gathered that piece of information by selecting Code, then the HTTPS tab, and then the clipboard icon.
>
> **[1:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=61)** Then I went to Jenkins to configure the deployment job.
>
> **[1:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=65)** The first thing I needed to configure was the label for the job.
>
> **[1:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=70)** This makes sure the job runs on the build server with permission to manage resources in AWS Lambda.
>
> **[1:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=77)** Next up was source code management.
>
> **[1:20](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=80)** I selected Git and added the URL for the repo.
>
> **[1:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=84)** I also had to change the branch specifier from master to main so that the correct branch was checked out by the job.
>
> **[1:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=92)** Then I added a trigger.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=94)** All I had to do here was select the box next to GitHub hook trigger for GITScm polling.
>
> **[1:40](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=100)** This tells Jenkins to listen for web hooks from GitHub.
>
> **[1:44](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=104)** Of course, we want this job to do something when it gets triggered, so I added some build steps.
>
> **[1:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=111)** This job has three build steps.
>
> **[1:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=114)** The first step checks for a virtual environment and creates it if it's not there.
>
> **[2:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=120)** The next step is where all the magic happens.
>
> **[2:03](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=123)** The virtual environment gets activated, and the make command runs all the actions that test the code, build the deployment package, and then use the package to update the function running in AWS Lambda.
>
> **[2:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=137)** Of course, for all those commands to work properly, I had to update the configuration to use the correct function name, region, and the URL for the application.
>
> **[2:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=148)** The last step runs make again to test the newly deployed application.
>
> **[2:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=154)** If the test passes, then we know the application was deployed successfully.
>
> **[2:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=159)** To run an end-to-end test, I made a change to the template used by the application.
>
> **[2:45](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=165)** This allowed me to have a visual indicator that the code was properly deployed to the Lambda function.
>
> **[2:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=171)** Once I pushed the code, the GitHub webhook triggered the Jenkins job to check out the code, run tests, zip the code into a deployment artifact, and then use that artifact to update the Lambda function.
>
> **[3:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=184)** The key item in the log was the message that the job was started by GitHub, which leads to the application being updated and the successful completion of this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** lambda (6), function (4), let (1)
> **Env Vars:** aws (3), url (3), cicd (1), api (1), https (1)
> **CLI Commands:** aws (3), make (2), python (1), git (1)
> **Tools:** github (6)
> **Exercise Files:** template (2), github repo (1), source code (1)
> **Prerequisites:** configure (3), set up (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 5. Shut Down AWS Resources

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Decomission AWS resources
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=0)** - [Instructor] As we wind down this course, we need to take a few minutes to decommission AWS resources.
>
> **[0:07](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=7)** Removing the resources that we no longer need keeps our accounts tidy and helps us stay within the free tier.
>
> **[0:14](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=14)** And it also prevents unexpected charges from AWS.
>
> **[0:19](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=19)** Believe me, no one wants that.
>
> **[0:22](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=22)** Start by deleting the cloud formation stack we used to initialize the Lambda function.
>
> **[0:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=27)** Then, remove the build server, its security group, SSH key, and IAM role.
>
> **[0:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=35)** Finally, remove the Jenkins server along with its elastic IP address, security group, and IAM role.

> [!info]- Semantic Content
>
> **Env Vars:** aws (2), iam (2), ssh (1)
> **CLI Commands:** aws (2), ssh (1)
> **Code Keywords:** lambda (1), function (1), finally, (1)
> **Speakers:** - [instructor] (1)

#### Solution: Decommission AWS resources
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=0)** - [Instructor] In this challenge, the goal is to clean up the AWS resources we created during the course.
>
> **[0:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=12)** Let's start with the cloud formation stack we used to initialize the Lambda function.
>
> **[0:17](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=17)** I'm starting on the cloud formation dashboard for this region.
>
> **[0:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=21)** I only have one stack in this region, and it's already selected, so all I have to do is select Delete.
>
> **[0:28](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=28)** I'm prompted to confirm the stack deletion, and I'm really sure, so I'll select Delete again.
>
> **[0:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=35)** Now I'll wait for the status to change to Delete Complete.
>
> **[0:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=41)** Okay, the stack is deleted.
>
> **[0:43](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=43)** Let's move on to the EC2 instances.
>
> **[0:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=47)** On the EC2 dashboard, I'll select Instances.
>
> **[0:52](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=52)** I only have two EC2 instances running in this region, so I'll select them both.
>
> **[0:59](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=59)** And then under Instance state, I'll select Terminate.
>
> **[1:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=65)** I get a message about the EBS-backed instances and how they'll be deleted as well.
>
> **[1:11](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=71)** And with that information, I'll go ahead and select Terminate, and I'll hang out on this screen until both of these instances are terminated.
>
> **[1:23](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=83)** Okay, with the servers put to bed, we need to clean up the resources associated with the servers, specifically the Elastic IP address, security groups, SSH key and IAM roles.
>
> **[1:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=96)** Let's start with the Elastic IP.
>
> **[1:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=99)** In this menu on the left hand side, I'll go under Network & Security and select Elastic IPs.
>
> **[1:47](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=107)** I only have one IP address in this region, so I'll select it.
>
> **[1:51](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=111)** And then under Actions, I'll select Release Elastic IP address.
>
> **[1:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=117)** I'm prompted to confirm the release, and I'm ready to let it go, so I'll select Release.
>
> **[2:02](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=122)** Now let's get to the security groups.
>
> **[2:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=125)** On the menu, I'll select Security Groups, and then identify the security groups I want to remove.
>
> **[2:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=132)** One thing we need to keep in mind is the build-server security group references the jenkins-server security group to allow SSH access.
>
> **[2:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=141)** To avoid dependency errors, we need to delete the build-server security group first.
>
> **[2:27](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=147)** So I'll select build-server, and then select Actions, and then Delete security groups.
>
> **[2:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=155)** And then I'll select Delete, and I'll refresh this screen to make sure that security group is really gone.
>
> **[2:42](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=162)** So now I can delete the jenkins-server security group.
>
> **[2:46](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=166)** So I'll select that one.
>
> **[2:48](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=168)** Then select Actions, Delete security groups, and then Delete.
>
> **[2:54](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=174)** Okay, the security groups are all cleaned up.
>
> **[2:57](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=177)** Now let's remove the key pair used by the build-server.
>
> **[3:01](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=181)** And again, under Network & Security, I'll select Key Pairs, and then I'll select the build-server key.
>
> **[3:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=189)** Under Actions, I'll select Delete.
>
> **[3:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=192)** This time I have to type the word Delete with a capital D to confirm the deletion, and then I'll select Delete.
>
> **[3:21](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=201)** Okay, that takes care of all the EC2 resources.
>
> **[3:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=204)** Let's wrap up by removing the IAM roles.
>
> **[3:29](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=209)** On the IAM roles page, I'll filter to the roles we used for EC2, and I'll select both of these roles.
>
> **[3:38](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=218)** And now I'll choose Delete.
>
> **[3:41](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=221)** For this confirmation, I have to type delete this time with a lowercase d, and then I'll select Delete.
>
> **[3:49](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=229)** Okay, everything's been decommissioned, and we're all set to wrap things up.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (15), let (7), lambda (1), function (1)
> **Env Vars:** ec2 (5), iam (3), ssh (2), aws (1), ebs (1)
> **CLI Commands:** ssh (2), aws (1), make (1)
> **UI Navigation:** select the (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980&t=0)** - I hope you enjoyed this course on Jenkins and Amazon Web Services.
>
> **[0:04](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980&t=4)** We covered a lot of ground, including setting up build servers, configuring web hooks, and automating deployments to AWS Lambda, but we've only scratched the surface.
>
> **[0:15](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980&t=15)** I hope you continue exploring the many ways Jenkins and cloud services like AWS can support software development and process automation.
>
> **[0:24](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980&t=24)** And please keep learning more about software development, Jenkins and AWS, by exploring other topics in LinkedIn Learning.
>
> **[0:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980&t=33)** I had a great time as your instructor and I can't wait to see what you create with Jenkins and AWS.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (4)
> **Env Vars:** aws (4)
> **Code Keywords:** lambda (1), continue (1)
> **Cross-References:** we covered (1)
> **Speakers:** - i (1)


## Instructor

- [[Michael Jenkins]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/running-jenkins-on-aws-3978678)

## Skills Covered

- Jenkins

## Path Context

### In [[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]
← [[Jenkins Essential Training]] | **3 of 3**

## Appears In

- [[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins]]

## Related Courses

_Courses sharing skills:_

- [[Jenkins Essential Training]] — Jenkins
- [[Learning Jenkins Automating Software Development And System Administration]] — Jenkins

---

[↑ Back to top](#)