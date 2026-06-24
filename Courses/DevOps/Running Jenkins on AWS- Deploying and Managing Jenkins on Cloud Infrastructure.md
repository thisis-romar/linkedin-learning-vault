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
  - '[Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)'
prev_courses:
  - '[Jenkins Essential Training](Jenkins%20Essential%20Training.md)'
path_nav: '[{"path":"Continuous Integration-Continuous Delivery (CI-CD) with Jenkins","position":3,"total":3,"prev":"Jenkins Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/devops
  - skill/jenkins
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Running%20Jenkins%20on%20AWS-%20Deploying%20and%20Managing%20Jenkins%20on%20Cloud%20Infrastructure.md)

![Running Jenkins on AWS: Deploying and Managing Jenkins on Cloud Infrastructure](https://media.licdn.com/dms/image/v2/D4E0DAQG0r7-qFsC2SA/learning-public-crop_675_1200/B4EZg4SNTOHoAY-/0/1753290954650?e=2147483647&amp;v=beta&amp;t=5qXC2cWevHWwseDS3vED62AV7AIuUNiKy48BcM5AP1Q)

# Running Jenkins on AWS: Deploying and Managing Jenkins on Cloud Infrastructure

> Learn how to create a Jenkins environment using the cloud-based servers of AWS. In this course, instructor Michael Jenkins covers steps for setting up Jenkins, creating a build environment, connecting to code repositories with webhooks, using a deployment service, and shutting down AWS resources. First, Michael shows you how to create a Jenkins controller instance, including how to configure a sec

> [LinkedIn Learning](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure) | 1h 38m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [CI/CD supercharged: Jenkins meets AWS](#cicd-supercharged-jenkins-meets-aws)
- [**1. Setting Up Jenkins**](#1-setting-up-jenkins) (8 videos)
  - [Architect the Jenkins environment on AWS](#architect-the-jenkins-environment-on-aws)
  - [Create an IAM role](#create-an-iam-role)
  - [Create a security group](#create-a-security-group)
  - [Create the Jenkins EC2 instance](#create-the-jenkins-ec2-instance)
  - [Install Java, Jenkins, and NGINX](#install-java-jenkins-and-nginx)
  - [Configure NGINX](#configure-nginx)
  - [Configure Jenkins](#configure-jenkins)
  - [Solution: Set up a Jenkins server](#solution-set-up-a-jenkins-server)
- [**2. Create a Build Environment**](#2-create-a-build-environment) (6 videos)
  - [Plan the build environment](#plan-the-build-environment)
  - [Create an IAM role for the build server](#create-an-iam-role-for-the-build-server)
  - [Create a security group and key pair for the build server](#create-a-security-group-and-key-pair-for-the-build-server)
  - [Create the build server](#create-the-build-server)
  - [Connect Jenkins to the build server](#connect-jenkins-to-the-build-server)
  - [Solution: Set up a build server](#solution-set-up-a-build-server)
- [**3. Connect Jenkins with Webhooks**](#3-connect-jenkins-with-webhooks) (5 videos)
  - [Plan the CI/CD pipeline](#plan-the-cicd-pipeline)
  - [What's a webhook?](#whats-a-webhook)
  - [Create and test a webhook with GitHub](#create-and-test-a-webhook-with-github)
  - [Solution: Connect Jenkins to GitHub](#solution-connect-jenkins-to-github)
  - [Create and test webhooks with other services](#create-and-test-webhooks-with-other-services)
- [**4. Deploy Code to AWS Lambda**](#4-deploy-code-to-aws-lambda) (6 videos)
  - [Initialize the deployment target in AWS Lambda](#initialize-the-deployment-target-in-aws-lambda)
  - [Create a GitHub repository for the application code](#create-a-github-repository-for-the-application-code)
  - [Create a freestyle job to deploy code from GitHub, part 1](#create-a-freestyle-job-to-deploy-code-from-github-part-1)
  - [Create a freestyle job to deploy code from GitHub, part 2](#create-a-freestyle-job-to-deploy-code-from-github-part-2)
  - [Deploy to AWS Lambda from GitHub](#deploy-to-aws-lambda-from-github)
  - [Solution: Deploy to AWS Lambda from GitHub](#solution-deploy-to-aws-lambda-from-github)
- [**5. Shut Down AWS Resources**](#5-shut-down-aws-resources) (2 videos)
  - [Decomission AWS resources](#decomission-aws-resources)
  - [Solution: Decommission AWS resources](#solution-decommission-aws-resources)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [CI/CD supercharged: Jenkins meets AWS](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/ci-cd-supercharged-jenkins-meets-aws?u=76281980&t=0)** - [Jenkins](../../Skills/DevOps/Jenkins.md) is a popular automation framework that you can use to manage all types of projects, including software builds, deployments, and much more. [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md), also known as AWS, is the leading [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) provider and is the perfect place for running build servers and web applications. Let's combine these two technologies to develop a complete CI/CD pipeline. We'll set up a web application, commit code to a [GitHub](../../Skills/Software%20Development/GitHub.md) repository and configure Jenkins to build, test, and deploy the app using AWS resources. Hi, I'm Michael Jenkins, a computer engineer with many years of experience using AWS and Jenkins for all kinds of projects. I hope you're as eager as I am to dive into Jenkins and AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** aws (4), cd (1)
> **Env Vars:** aws (4)
> **Definitions:** is a  (1), known as (1)
> **Prerequisites:** set up (1), configure (1)
> **Tools:** github (1)
> **Speakers:** - jenkins (1)


### 1. Setting Up Jenkins

[↑ Back to Table of Contents](#table-of-contents)

#### [Architect the Jenkins environment on AWS](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/architect-the-jenkins-environment-on-aws?u=76281980&t=0)** - [Instructor] Before we get started, let's discuss the resources we'll be creating and configuring to run a [Jenkins](../../Skills/DevOps/Jenkins.md) server on AWS. At the heart of the setup is an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance running the [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) operating system. This instance will be the host for our Jenkins server. The server will use an identity and access management role that provides secure terminal access. To support web access, the server will be attached to a security group that allows incoming HTTP traffic from any IPv4 address. The server will also use an Elastic IP address to support consistent web access, even if the instance is restarted. We'll also install three software components: [Java](../../Skills/Software%20Development/Java.md) Development Kit, which is needed to run Jenkins, Nginx, to act as a reverse proxy, and the Long-Term Support version of Jenkins. This combination of AWS infrastructure and [Open-Source Software](../../Skills/Cybersecurity/Open-Source%20Software.md) sets the stage for the skills we'll develop in the lessons ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** aws (2), ec2 (1), http (1)
> **CLI Commands:** aws (2), nginx (1)
> **Prerequisites:** setup (1), install (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Create an IAM role](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=0)** - [Instructor] Before we set up the [Jenkins](../../Skills/DevOps/Jenkins.md) server, there are a few things we need to have in place. The first of these is an identity and access management role. IAM roles allow services like [EC2](../../Skills/DevOps/Amazon%20EC2.md) to interact with other AWS services programmatically. Roles are made up of permissions, defined as policies. Policies list the permissions available to the service using the role. We'll be using the managed policy named AmazonSSMManagedInstanceCore. This will allow us to connect to an EC2 instance using AWS Systems Manager. Let's create this role in the AWS console. I'm logged into my AWS account and I'm viewing the IAM dashboard. I'll start by selecting roles and then create roles from the left hand navigation menu. On the create role screen, we're asked to choose a trusted identity. Since this role will be used by an EC2 instance, we'll choose AWS service and then EC2 for the use case, and then EC2 role for AWS Systems manager. Now select next. The policy we need is automatically selected, so we don't need to add any additional permissions here. This policy will allow us to connect to our Jenkins server without using SSH. On the next screen, we have to provide a name for the role.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role?u=76281980&t=94)** I'll call this one EC2 dash SSM. Let's also add a tag. Since I may use this role with multiple Jenkins servers. I'll just put Jenkins. Finally, I'll select create role. Next up, we'll create a security group specifically for the Jenkins server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6), [Jenkins](../../Skills/DevOps/Jenkins.md) (5)
> **Env Vars:** ec2 (6), aws (6), iam (2), ssh (1), ssm (1)
> **CLI Commands:** aws (6), ssh (1)
> **Definitions:** is an  (1), defined as (1)
> **Tools:** aws console (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create a security group](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=0)** - [Instructor] Before launching our [Jenkins](../../Skills/DevOps/Jenkins.md) server, we need to create a security group to control the traffic that can reach the instance. Security groups are associated with network interfaces and act as a firewall for our instances. Using a security group, we can specify the ports that will be accessible on the instance for incoming and outgoing traffic. Along with specifying the ports that are open. We can also specify the IP addresses that can connect to them. This is an absolute requirement to keep the resources secure because the servers will be publicly accessible on the internet. Let's go to the AWS console and create a security group for our Jenkins server. I'm logged into my AWS account and I'm viewing the [EC2](../../Skills/DevOps/Amazon%20EC2.md) dashboard. If you're following along, you'll want to make sure you're using an account that has all the permissions needed to work with EC2 resources. First, make a note of the region that you're working in. Since EC2 resources are tied to specific regions, you can find the region menu in the top right hand corner of the screen. In this case, I'm working in the US-East-2 region, so I want all of my security groups and key pairs to be created in this region as well. Start by following the security group's link under network and security. From here, select the create security group button to start creating a new group. This starts a wizard where we specify the details for our security group.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=94)** We'll start with a name and since this group will be for the Jenkins server, I'll call this one "Jenkins/Server" and I'll just use, "Allow web traffic" for the description. We'll be using the default VPC, so we can leave this as is and move on to creating rules for this security group. We're going to be creating two rules, so I'll select add rule two times. This opens up [Forms](../../Skills/Web%20Development/Forms.md) where we can specify the details for the type of traffic we want to allow. Fortunately, the first column, the type column makes filling out this form pretty easy. For this security group, we need to allow HTTP traffic on port 80, and secure HTTPS traffic on port 4-4-3, and if we select them, the protocol and port range columns get filled in for us. Now we can turn our attention to the source column. This lets us specify where the incoming traffic can come from. For the HTTP and HTTPS rules, we want all traffic sources to be able to connect, so we'll select anywhere from the source dropdown. This means requests from any IPV4 address will be allowed through the firewall. Now let's look at the outbound rules. We want any instances that use this security group to be able to access all addresses on the internet. Since this is already set up for us, we can just leave the outbound rule alone. One more thing we do need to do just
>
> **[3:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group?u=76281980&t=188)** to be complete is tag the security group with a name. It's just good practice to tag your AWS resources with a name so they're easy to identify. For the key, I'll enter name, and for the value I'll use Jenkins/Server. Finally, we can select create security group. Now our security group is in place and ready to be attached to an EC2 instance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Forms](../../Skills/Web%20Development/Forms.md) (1)
> **Env Vars:** ec2 (4), aws (3), http (2), https (2), vpc (1)
> **CLI Commands:** aws (3), make (2), find (1)
> **UI Navigation:** go to (1), select the (1), dropdown (1)
> **Ports:** port 80 (1), port 4 (1)
> **Tools:** aws console (1)
> **Definitions:** is an  (1)
> **Best Practices:** good practice (1)

#### [Create the Jenkins EC2 instance](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=0)** - [Instructor] With a security group and IAM role in place, we can create the [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance we'll be using for our [Jenkins](../../Skills/DevOps/Jenkins.md) server. On the EC2 dashboard, start by selecting Launch instance. This starts a wizard that will walk us through the EC2 creation process. The very first thing we need to do is assign a name to this server. Enter the name jenkins-server. Next, we need to select the Amazon Machine Image or AMI. We'll be using the latest available version of [Ubuntu](../../Skills/Web%20Development/Ubuntu.md). With the image selected, we can choose the instance type. We'll use a t2_micro, which is eligible for the free tier. This should provide just enough CPU and memory for our Jenkins server. Because we'll be using the console to access the server, we can proceed without a key pair. Even though this option is not recommended, we can safely move on with this selection. Under network settings, select the option to choose an existing security group, the Jenkins Server Security Group. Under storage, increase the root volume to 20 GBs to make sure there's enough room for installing software. Now, open up the advanced detail section at the bottom of the screen. In this section, we need to specify the IAM role that the server will use, and we'll select the role that was created previously. The other options can be left as is. Once everything is in place, we can select Launch instance. On the next screen, there's a message that lets us know
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-jenkins-ec2-instance?u=76281980&t=95)** that instance is launching with a link to the instance. Following that link takes us to the EC2 dashboard showing the server is up and running. There's still one more thing that we need to add, an elastic IP. If our instance is stopped and then restarted, the public IP address will change. This could be problematic if we have configurations that rely on the IP address being consistent. An elastic IP address solves this problem. In the menu on the left side of the EC2 dashboard, I'll select elastic IPs under network and security. And then I'll select Allocate Elastic IP address. On this screen, I'll keep all the defaults, but of course I'll add a name tag. And as you might have guessed, I'll use jenkins-server. Now, I'll select Allocate. We have our IP address. Now, we need to associate it with the instance we just created. Fortunately, AWS is helping us out and offering up this handy button, which will allow us to immediately associate this address. So I'll select that. Since we're associating this IP address with an instance, we'll leave the instance resource type selected and choose an instance. We only have one instance so far, the jenkins-server. I'll leave the private IP blank and select Associate. Okay, this is a good start. Our server is in place. In the next step, we'll install [Java](../../Skills/Software%20Development/Java.md), Nginx, and Jenkins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (7), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (5), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** ec2 (5), iam (2), ami (1), cpu (1), aws (1)
> **UI Navigation:** select the (3), in the menu (1)
> **CLI Commands:** make (1), aws (1), nginx (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)

#### [Install Java, Jenkins, and NGINX](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=0)** - [Instructor] Now that we have an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance up and running, we need to install the software for our [Jenkins](../../Skills/DevOps/Jenkins.md) server. Since Jenkins is a [Java](../../Skills/Software%20Development/Java.md)-based application, we'll need to install a Java Development Kit, or JDK. We'll also be installing NGINX to act as a proxy for connections to our Jenkins server. And of course, we'll be installing the Jenkins software itself. You'll find the commands for installing the software in the exercise files for this lesson. I'm logged into the AWS console and I'm viewing the EC2 instance we created to run our Jenkins server. From here, I'll select connect. On the connect screen, make sure the session manager tab is selected. Then select connect. This opens a tab with a shell connected to the Jenkins server. I'll increase the browser [Zoom](../../Skills/Software%20Development/Zoom.md) just a little bit so we can see things better. Now that we're logged in, we can switch to the root user and start installing software. I'll do that by running sudo --login. Now let's take a look at the install commands. I'm viewing the exercise files for this lesson, and from here I can copy the commands to add the APT key and the source list for Jenkins. Back in the shell, I can paste the commands in and run them. Okay, that looks good. Now let's get the commands to update the system packages. This command will take a minute to run,
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/install-java-jenkins-nginx?u=76281980&t=93)** so I'll wait for it to finish. All right, that looks good as well. After all the currently installed packages are up to date, we can install Java, NGINX, and Jenkins. For the best results, let's install Java and NGINX first. In the exercise files, I'll select the command that will install Java and NGINX, and then I'll go back to the terminal and paste them in. And last but not least, let's install Jenkins. I'll clear the screen and go back to the exercise files to copy that command. And back in the terminal, I'll paste it in and run it. To confirm that Jenkins and NGINX are installed, we can use the system CTL status command. Let's check for NGINX first. Okay, that's looking good. Now let's check for Jenkins. Okay, both applications show that they're active and running. At this point, we're almost done getting our server up and running. In the next lesson, we'll configure NGINX to serve as a proxy for Jenkins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (12), [Java](../../Skills/Software%20Development/Java.md) (5), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **Env Vars:** nginx (7), ec2 (2), jdk (1), aws (1), apt (1)
> **CLI Commands:** nginx (7), find (1), aws (1), make (1), sudo (1)
> **Prerequisites:** install (7), configure (1)
> **Exercise Files:** exercise files (4)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** terminal (2), aws console (1)
> **UI Navigation:** switch to (1), select the (1)

#### [Configure NGINX](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=0)** - [Instructor] We're at a point where we have our [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) server in place and [Jenkins](../../Skills/DevOps/Jenkins.md) and NGINX are installed. You might be wondering, why do we need to install NGINX if we're setting up a Jenkins server? Let's stop for a moment and discuss how NGINX fits into this system. We'll be configuring NGINX to act as a reverse proxy that sits in front of the Jenkins web application. So instead of accessing our Jenkins application directly, we'll be accessing NGINX, which will pass on to Jenkins whatever requests we're sending in. Jenkins will process the request and send a response back to NGINX and NGINX will then deliver the response back to us. That seems like a lot of back and forth, but this configuration has its benefits. Security for the app server is the main benefit we get from the reverse proxy. Jenkins listens on port 8080 by default. By setting up a security group and a reverse proxy that only allows access on port 80, we can make sure that all requests to the app server come through the web server first. This gives the app server some protection by limiting access. The reverse proxy also gives us the benefit of generating logs for each request. Jenkins creates logs, but the content is more operational in terms of what Jenkins is doing, not what an end user is requesting. By logging requests in the proxy,
>
> **[1:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=92)** we get much more information like when requests were made and the IP address the request came from. If there's ever a need to debug an issue with the server, the NGINX logs will make a great complement to the Jenkins logs. Using NGINX as a reverse proxy also allows for simplified SSL termination. With SSL, all of the traffic from the Jenkins application would be encrypted, improving the security of the information being transmitted. And while it's totally possible to set up SSL termination using Jenkins alone, setting up SSL in NGINX is much easier. The Jenkins documentation even suggests using a reverse proxy for SSL termination instead of poking around in the Jenkins configuration. If that's not enough convincing, I don't know what is. Now that we know why we need it, let's get NGINX configured. I'm in my AWS account on the homepage for the Jenkins server [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. And I also have tabs open with a connection to the Jenkins server and the exercise files for this lesson. Before we start, let's make sure NGINX is running by opening the server's webpage. We can find that DNS name right here along with a handy link to open the server's address. In the new tab, I'll change HTTPS to HTTP. This displays the NGINX welcome page, letting us know that everything is installed and running properly.
>
> **[3:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-nginx?u=76281980&t=185)** If you're following along and have trouble accessing this page, make sure your browser is using an HTTP connection instead of HTTPS. Now let's add the reverse proxy configuration. For that, I'll be referring to the exercise files for this video. The exercise files include the commands and configuration for setting up NGINX. I'll copy the commands from here and then apply them in the terminal. I've got the NGINX configuration in place, but before moving on, I'll make sure I haven't broken anything. I'll test the configuration with NGINX-T. We didn't get any errors here, so we can go on to reloading the configuration with a systemctl reload command. Now let's go back to the browser to make sure our reverse proxy is pointing to Jenkins as we expect. I'll refresh the browser window, and sure enough, we get the unlock Jenkins page. Awesome. Now that we have NGINX all set up, we can move on to configuring Jenkins.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (19), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** nginx (17), ssl (5), https (2), http (2), aws (1)
> **CLI Commands:** nginx (17), make (6), aws (1), find (1), systemctl (1)
> **Prerequisites:** set up (2), install (1), before we start (1)
> **Exercise Files:** exercise files (3)
> **Ports:** port 8080 (1), port 80 (1)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### [Configure Jenkins](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=0)** - [Instructor] We're at the point where we have Nginx and [Jenkins](../../Skills/DevOps/Jenkins.md) installed on our [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) instance. Nginx is configured as a reverse proxy so we can get to Jenkins via Port 80 on the instances public DNS name. Now it's time to configure Jenkins. Because this is a brand new installation of Jenkins, we're immediately prompted to unlock Jenkins by entering the initial admin password. The path to the password is given to us here. I'll copy this path so I can use it in my terminal. I'm connected to the instance where Jenkins is running and I have my session elevated to the root user. Elevated permissions are required to read the initial admin password. In the terminal, I'll run cat and then paste in the path to the initial admin password. Okay, there's the password. I'll copy this and go back to the unlock screen. With the password pasted in, we can select continue, and go to the next step. This brings us to the customized Jenkins screen. Select the default option to install the suggested plugins. On the next screen, we'll see the plugins being installed. This will take a minute or two. Once the plugins are installed, we can create the first admin user. This is useful for setting up our own username and password for logging in. Enter the values for username, password, and email address, then select save, and continue. We get one more screen for the configuration
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/configure-jenkins?u=76281980&t=95)** where we're prompted for the Jenkins URL. This URL is the root URL that we'll be using to reach the server. Jenkins will use it to build links that will be displayed in other ways as well. Fortunately, the software picks up the link that we're using now, so we can just select save and finish. And hey, we're ready. Our configuration is complete and Jenkins is ready to go. After all of that configuration, we're finally logged in to our new Jenkins server. Now we can move on to planning out the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the build environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (11), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** url (3), dns (1)
> **CLI Commands:** nginx (2), cat (1)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1), select the (1)
> **Prerequisites:** configure (1), install (1)
> **Ports:** port 80 (1)
> **Cross-References:** go back to (1)

#### [Solution: Set up a Jenkins server](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=0)** (bright electronic music)
>
> **[0:05](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-jenkins-server?u=76281980&t=5)** - [Instructor] This challenge focus on setting up and configuring a [Jenkins](../../Skills/DevOps/Jenkins.md) server using AWS resources. Let's review what I have in place for my solution. I started with the IAM role. This role has the Amazon SSM Managed Instance Core Policy attached so we can connect using Session Manager. Then I created a security group with rules for HTTP and HTTPS Access. The source is set to allow access from all IPv4 addresses. I created an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance and attached the role and security group that I created previously. I used a [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) machine image and a t2_micro instance type. I also created an elastic IP address and associated it with the EC2 instance. This will allow the server to keep the same IP address across reboots. Using Session Manager, I connect it to the server and installed the required software, [Java](../../Skills/Software%20Development/Java.md), nginx, and Jenkins. Then, I configured nginx to act as a proxy for the Jenkins server. Essentially, nginx will pass requests to Jenkins and then return the responses, which leads to the Jenkins server where I installed the default plugins and created an admin user. With all of these resources and configurations in place, I believe this challenge has been solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [Java](../../Skills/Software%20Development/Java.md) (1)
> **Env Vars:** ec2 (2), aws (1), iam (1), ssm (1), http (1)
> **CLI Commands:** nginx (3), aws (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright electronic music) (1)


### 2. Create a Build Environment

[↑ Back to Table of Contents](#table-of-contents)

#### [Plan the build environment](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=0)** - [Instructor] At this point, we have our primary [Jenkins](../../Skills/DevOps/Jenkins.md) server up and running. Let's take a moment to plan the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the build environment. We'll follow best practices for a distributed Jenkins environment by removing all executors from the Jenkins server. This will prevent any builds from starting on the primary server, which frees up resources for Jenkins to do what it does best, managing builds on other servers. To connect the primary server to a build server, we'll need a key pair for connections via secure shell and a security group to limit access. And of course, we'll need at least one build server. This is where the real action happens. Any code that gets checked out will be written to the build server and commands will be run by local processes. The results of the build will get sent back to the Jenkins server for any post-build processing like archiving or reporting. Because our build server will be manipulating AWS resources on our behalf, we'll need to create an IAM role that assigns the correct permissions. The role will allow our build servers to run AWS commands and interact with AWS APIs without having to enter credentials. As automators, this is an enormous benefit because we don't have to worry about storing and retrieving credentials every time we want the build server to do something. Once we have these resources in place, we'll be able to create Jenkins jobs
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-build-environment?u=76281980&t=93)** that can deploy applications and manage AWS resources like S3, AWS Lambda, and Amazon Elastic Container Service. For the rest of this course, we'll be focusing on AWS Lambda. Our goal will be to set up a pipeline triggered by pushes to a code repository so that changes are deployed automatically. Essentially, we'll be building the infrastructure for a [continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) pipeline, commonly referred to as CI/CD. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (1), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (1)
> **CLI Commands:** aws (6), cd (1)
> **Env Vars:** aws (6), iam (1)
> **Definitions:** is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create an IAM role for the build server](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-an-iam-role-for-the-build-server?u=76281980&t=0)** - [Instructor] As we create resources for the build server, let's start with the IAM role. You may recall, from setting up the [Jenkins](../../Skills/DevOps/Jenkins.md) server, that IAM roles help manage the credentials that AWS resources need when they access other AWS resources. I'm already on the IAM dashboard, so I'll select create role. I'll leave AWS service selected for the entity type, and under use case, I'll select [EC2](../../Skills/DevOps/Amazon%20EC2.md). We're setting up a build environment that will interact with the AWS Lambda Service, so the permissions we assign to this role should reflect that. I'll start by searching for the keyword Lambda. This narrows the list to a few results. I already know that AWS Lambda full access is the policy I want, but selecting the plus sign next to it confirms that this policy grants full access to the Lambda service. I'll select this policy and move on to the next step. I'll enter the name EC2 Lambda and add the Jenkins name tag. Now that we have our role in place, we can move on to creating the security group and key pair for the build server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2)
> **Env Vars:** aws (5), iam (3), ec2 (2)
> **CLI Commands:** aws (5)
> **Speakers:** - [instructor] (1)

#### [Create a security group and key pair for the build server](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=0)** - [Instructor] Let's continue creating the resources we need for the build server by creating a security group and a key pair. Let's start with the security group. From the [EC2](../../Skills/DevOps/Amazon%20EC2.md) dashboard, I'll select into security groups and then select create security group. For the name, let's use build-server, and for the description, let's enter SSH from [Jenkins](../../Skills/DevOps/Jenkins.md) server. Now let's add a rule. For the traffic type, we need to select SSH, which automatically fills in the port range for us. We'll leave the source as custom and search for the security group attached to the Jenkins server. For the description, let's enter the same description we used before, SSH from Jenkins server. We don't need to make any changes to the outbound rules since we want our instance to be able to reach any address on the internet. However, I will add a tag with the name build-server. When we attach this group to the EC2 instance running our build server, the server will only be accessible from the Jenkins server and only by SSH. As I mentioned before, this improves security by limiting access to this server from very specific locations. Now we need to create the key pair that our Jenkins server will use to connect to the build server. In the sidebar, I'll go to key pairs, and then create key pair. I'll enter the name build-server, and I'll select ED25519 for the key type, and PEM format. Per the usual, I'll add a build server name tag
>
> **[1:39](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=99)** before creating this key pair. Creating the key will either open a file browser or save the key to your downloads folder. Let's view and copy the contents of the key. I have the private key open in my text editor. I need to copy the contents of the key file so I can store it as a credential in the Jenkins server. Now I'll head over to Jenkins. From the Jenkins dashboard, I'll select manage Jenkins credentials. Under domains, I'll select global, and then add credentials. This opens a form where we can enter the details for the key. First, we need to select the kind of credential we're storing. In this case, it's an SSH username with a private key. For the ID, I'll enter build-server. For username, we'll enter EC2-user. This is the username that Jenkins will use when it connects with the key and it's also the name of the default user for Amazon [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md). When we create the build server, we'll be using a machine image based on Amazon Linux, so we'll enter EC2-user here to match that AMI. Under private key, we need to select the radio button next to enter directly, and then select add. This opens up a form where we'll enter the private key. Now I can paste in the key. We can leave the passphrase empty and just select create.
>
> **[3:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-security-group-and-key-pair-for-the-build-server?u=76281980&t=192)** Great, our key is listed on the credentials page. Now we can spin up our build server and get Jenkins connected to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (11), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **Env Vars:** ssh (5), ec2 (4), ed25519 (1), pem (1), ami (1)
> **CLI Commands:** ssh (5), make (1)
> **UI Navigation:** in the sidebar (1), go to (1), select the (1)
> **Speakers:** - [instructor] (1)

#### [Create the build server](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-the-build-server?u=76281980&t=0)** - [Instructor] At this point, we have everything in place to spin up our Build server instance, a role for accessing AWS resources, a security group for managing network access, and a key pair that [Jenkins](../../Skills/DevOps/Jenkins.md) can use to connect to the Build server, so let's go ahead and create this thing. From the [EC2](../../Skills/DevOps/Amazon%20EC2.md) dashboard I'll select launch instance, and of course, I'll name this instance Build Server. For the AMI I'll make sure Amazon [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) is selected. For the instance type, we'll stick with T2 Micro. Under key pair, I'll select the key that I created for the Build server. For network settings, we need to select the existing security group. Under storage, I'll change the size to be 20 gigabytes. Now I'll open up the advanced detail section. Under IAM instance profile, select the EC2 Lambda roll. Now scroll to the bottom of the advanced section to enter user data. For the user data, we need to add the script that will install all the tools needed to set up the Build Agent, work with AWS Lambda, and any other dependencies. In the exercise files, there's a script that we can use to install the tools, so I'll copy it from there. Back in the Launch Wizard, I'll paste in the script. Now I'll select launch instance. Okay, we have our Build server in place. In the next lesson we'll connect it to the Jenkins server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** aws (2), ec2 (2), ami (1), iam (1)
> **CLI Commands:** aws (2), make (1)
> **UI Navigation:** select the (3)
> **Prerequisites:** install (2), set up (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Connect Jenkins to the build server](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=0)** - [Instructor] Let's connect our [Jenkins](../../Skills/DevOps/Jenkins.md) server to the build server. In this tab, I'm viewing the details for the build server [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance. In another tab, I'm logged into the Jenkins server. We need to get the private DNS for the build server. It's important that we use the private DNS name to keep traffic inside the AWS network. This will reduce costs associated with network traffic and also keep the connection fast. I'll select the link next to the name to copy it to the dashboard. Now, let's go to Jenkins. In Jenkins, I'll select Manage Jenkins and then Nodes. This opens the page where we can manage the Jenkins server and add build servers, which are referred to as nodes. First, let's remove all the executors from the Jenkins server. This will prevent any jobs from starting on the built-in node. On the Configuration page for the built-in node, all we need to do is set the number of executors to zero and select Save. The immediate change we see here is there are no longer any executors under Build Executor Status. Now, let's add the build server. We'll go back to the Nodes page and select New Node. No surprise here, for the node name, I'm going to enter build-server. Then we need to select Permanent Agent, which is really the only option, and then select Create. On the node configuration page, we need to add a few more details. For the description,
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=94)** let's give details on the server, specifically, the type of OS it's running. I'll enter Amazon [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) 2023. For the number of executors, I'll set it to be four. Ideally, this number should match the number of CPUs on a node, but since this is the only build server at the moment, we need to set it a bit higher. This will keep jobs from getting backed up if we launch multiple jobs at the same time. The remote route directory is one of the mandatory fields on this form. This will be the directory that Jenkins uses on the build server to create workspaces where our jobs will run. So it's pretty important that this directory is defined and exists. For Amazon Linux instances, Jenkins will be connecting with the default account, so we can use the account's home directory for the remote route. Labels help Jenkins run jobs on specific compute resources. Think about an environment where our Jenkins server is connected to build servers running different operating systems or with different tools installed. We can label these servers and set up our jobs to only run on the resources that have the correct operating systems or tool for the job. For this server, I'll use the label lambda. The usage setting also helps us limit the jobs that can be run on this server. For now, I'll just leave it as the default, which is to use this note as much as possible. For the launch method, we need to select Launch agents via SSH. For the host, I'll paste in the server name
>
> **[3:09](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/connect-jenkins-to-the-build-server?u=76281980&t=189)** for the EC2 console. Yes, that value has been on the clipboard for the entire time. For the credentials, I'll select ec2-user. This is the user and key that we set up specifically for this connection. For the host verification strategy, we need to select Non-verifying Verification Strategy. Typically, when a connection is made via SSH, the user is prompted to verify the connection and store a fingerprint for the server in a file called known_hosts. But since our connection is automated, we need to skip the verification step. If we needed to, we could use availability options to set a schedule for this build server to be available. I want to note that these options to take the server offline are only for connections from the Jenkins server. They don't apply to the build server being turned on or off in the AWS console. We don't have any environment variables or tool locations to set, so we can just select Save. After adding the node, it may take a moment for the connection to be complete. Once the build server is connected, select the name to get more details, and then select the Log link to see the log of the connection. And if we scroll to the end of the log, we get the message that we've been waiting for. The agent is successfully connected and online, which means our build server is ready to run jobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (12), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2)
> **CLI Commands:** node (7), aws (2), ssh (2)
> **Env Vars:** ec2 (2), dns (2), aws (2), ssh (2)
> **UI Navigation:** select the (3), go to (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** known_hosts (1)
> **Cross-References:** go back to (1)
> **Tools:** aws console (1)

#### [Solution: Set up a build server](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=0)** - [Instructor] This challenge focused on using AWS resources to set up and configure a [Jenkins](../../Skills/DevOps/Jenkins.md) build server. Let's review what I have in place for my solution. I started with the IAM role. The main policy used by this role is AWSLambda Full Access. This role allows the build server to manage resources in the AWSLambda service. I created a security group for the build server to limit access. The one role we have in place limits SSH access to the Jenkins server. This helps prevent connections from any other location on the network, which leads to the SSH key associated with the build server. Jenkins uses this key to connect to the build server using the SSH protocol. After creating this key, I had to store it in the Jenkins server. I store the key in Jenkins as a credential using the username with private key credential type. I added the username that Jenkins uses to connect along with the home directory and the key material generated by AWS. With everything in place, I created the build server [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance, attaching the security group and IAM role and associating the SSH key for connections. The exercise files included the user data needed to configure the build server without logging in. Once the server was up and running,
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-set-up-a-build-server?u=76281980&t=95)** I copied the private DNS for the connection from Jenkins to the build server. And finally, I used the SSH credential and the private DNS string to add the build server as a new node in Jenkins, the nodes logs show confirmation that Jenkins and the build server are connected, and that this challenge was solved successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (9), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** ssh (5), aws (2), iam (2), dns (2), ec2 (1)
> **CLI Commands:** ssh (5), aws (2), node (1)
> **Prerequisites:** configure (2), set up (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Connect Jenkins with Webhooks

[↑ Back to Table of Contents](#table-of-contents)

#### [Plan the CI/CD pipeline](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=0)** - [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) and [continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) are two software engineering approaches that let development teams produce software efficiently. With continuous integration, developers work on their code in a local environment and commit their changes to a shared repository on a regular basis. Their code can then be combined, or in other words, integrated, with code from other members of the team or any existing code. Using this method, developers can find and resolve errors more quickly compared to waiting until all the code for an application is complete and integrating everything at once. Continuous delivery is a partner to the continuous integration process. Continuous delivery enables developers to build and release their software quickly and repeatedly. By automating the build process, developers can trigger builds from webhooks, and using automation framework like [Jenkins](../../Skills/DevOps/Jenkins.md) to build and deploy code to different environments. Let's discuss how our current build environment will fit into a basic CI/CD pipeline. CI/CD pipelines start with a developer. In that case, that might be you. You'll work on your code in a local environment and commit the changes to [GitHub](../../Skills/Software%20Development/GitHub.md). GitHub will be used to track changes and trigger any upstream automation via webhooks. That's where the build environment comes in. Jenkins will kick off a job on the build server. The build server will download the updated code and run the scripted commands that deploy the application to AWS Lambda.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/plan-the-ci-cd-pipeline?u=76281980&t=95)** In AWS Lambda, the environment is updated with a new code, and the application can be made available for testing, verification, or other steps in the lifecycle of the application. After deploying the application, Jenkins can send notifications to the developers, letting them know the status of the deployment, the health of the application environment, and any other information that might be needed for the next step in developing the application. This process is repeated until the application is shipped to production, and even then, is still used to deploy updates and new features. With this blueprint, let's build out the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of our CI/CD pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Continuous integration](../../Skills/Software%20Development/Continuous%20Integration%20(CI).md) (3), [Continuous delivery](../../Skills/Software%20Development/Continuous%20Delivery%20(CD).md) (3), [Jenkins](../../Skills/DevOps/Jenkins.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** cd (3), aws (2), find (1)
> **Env Vars:** aws (2)
> **Tools:** github (2)
> **Definitions:** in other words (1), is a  (1)
> **Exercise Files:** download the (1)
> **Speakers:** - continuous (1)

#### [What's a webhook?](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/what-s-a-webhook?u=76281980&t=0)** - [Instructor] Before we move on, I wanted to take a moment to explain webhooks. A webhook is a way for web applications to notify each other that something has happened. Usually the notification is sent via HTTP and is accompanied by details describing the event. In many ways, activating a webhook is a lot like placing an online order. The event is created when the order is placed. Once the order is ready for delivery, a courier notifies the recipient by ringing the doorbell or knocking on the door, and then delivers the package. In our case, we'll be creating events by pushing code to a [GitHub](../../Skills/Software%20Development/GitHub.md) repository. GitHub will store the code and then notify [Jenkins](../../Skills/DevOps/Jenkins.md) that new code has been committed to the repository and is ready to be deployed. The notification gets sent via an HTTP post to the webhook endpoint that Jenkins uses to receive these notifications. Essentially, the web hook is the door that GitHub knocks on. Along with the notification, Jenkins receives additional data, including the name of the user that committed the code, what files were changed, and other details about the repository like the name of the branch that the code was committed to, and the message that describes the commit. Once Jenkins has the code and all the info, the code can be deployed or otherwise acted on. Now that we're on the same page regarding webhooks, let's set one up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Tools:** github (3)
> **Env Vars:** http (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Create and test a webhook with GitHub](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=0)** - [Instructor] To test our webhook, we need to have a repository where our code is stored, and a job that will be triggered when code is pushed to that repository. I have two tabs open, one with [GitHub](../../Skills/Software%20Development/GitHub.md) and the other with [Jenkins](../../Skills/DevOps/Jenkins.md). I've created a public repo with nothing more than a README file. I'll be updating the README file to trigger a job in Jenkins. Before I go to the Jenkins console, I need to get the repo's URL. I can get that by selecting the Code button, and then the HTTPS tab, and then the little clipboard here next to the URL. Okay, now let's go to the Jenkins tab and create a job. I'll start by selecting New Item. On the New Item screen, let's call this job webhook-test and select Freestyle project. I'll enter a brief description. Now, I'll scroll down to the Source Code Management section and select [Git](../../Skills/Software%20Development/Git.md). In this section, I need to add the URL for the repo, so I'll paste it in here. This is a public repository, so we don't need to enter any credentials. I do need to update the Branch Specifier. The default is master. New repos in GitHub use the main branch as the default branch, so I'll update the setting to match that. If you run into any problems with your job not checking out code the way you expect, make sure you confirm that the Branch Specifier matches the correct branch name in your repo.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=95)** Next, we need to add the build trigger. In this section, we need to select GitHub hook trigger for GITScm polling. This will essentially turn on the connection between our GitHub repo and this Jenkins job. Now, let's add a build step. I'll use a shell build step. We don't need to do too much in this test, so let's just print the contents of the README by catting the file. Now, I'll select Save. Okay, now we need to configure the webhook on the GitHub side. For that, we need the URL of our Jenkins server. The easiest way to get that is to copy the URL from your browser's toolbar, or right-select on the Jenkins icon in the top left corner, and select Copy Link Address. Now, I'll go back to GitHub. In the repo, I'll select Settings and then Webhooks. On this screen, I'll select Add webhook, and in the Payload URL field, I'll paste the Jenkins server URL. One thing we need to add to this URL is the route that GitHub will use to trigger our job. We need to add github-webhook, followed by a slash. Adding this to the URL is critical for everything to work the way it's supposed to. I want to add special attention to the slash at the end of the complete URL. It has to be there. If you run into any problems with your webhooks,
>
> **[3:08](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-a-webhook-with-github?u=76281980&t=188)** check this URL setting to make sure it's configured properly. For the content type, select application/[JSON](../../Skills/Web%20Development/JSON.md). This will configure GitHub to send a JSON payload along with a push to the webhook. We'll leave the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the settings as is and select Add webhook. And if I refresh the page, there's a confirmation that the webhook is working as intended. Okay, let's make an update. On the Code screen, I'll edit the README file. I'm editing the file right here in the browser, and I'll add something to let us know that our GitHub webhook actually worked. Now, I'll commit these changes. Now, if I open the Jenkins tab, we should see something happening. In the build history, there's a job pending. It should finish pretty quickly. Okay, it's done. Let's take a look at the output. Let's take a closer look at all the things that came together in this output. In the first line of output, we can see that the build was triggered by a GitHub push, and we even see the user that triggered the push. The next line shows us that Jenkins ran this job on the build server, and we can also see the directory where the job ran. The next few lines show us the git commands that Jenkins used to clone the repository. And at the bottom of the log is the content of the README file, along with our changes. Yes, friends, our webhook test worked, it really did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (11), [Jenkins](../../Skills/DevOps/Jenkins.md) (11), [Git](../../Skills/Software%20Development/Git.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** url (11), readme (5), https (1), json (1)
> **Tools:** github (11)
> **CLI Commands:** make (3), git (2)
> **Documentation:** the readme (4)
> **UI Navigation:** go to (2), scroll down (1), open the (1)
> **Exercise Files:** source code (1), github repo (1)
> **Prerequisites:** configure (2)

#### [Solution: Connect Jenkins to GitHub](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=0)** - [Narrator] This challenge introduces us to webhooks, and how we can use a push to a [Git](../../Skills/Software%20Development/Git.md) repository to trigger jobs in [Jenkins](../../Skills/DevOps/Jenkins.md). I started with the Git repo, specifically creating a public repository containing a README file. The key piece of information needed from the repo is the URL, and I got that by selecting the Code button and then the HTTPS tab, and then copying the URL from here. With that secured, I created a freestyle job in Jenkins. I named the job webhook-test to match the name of the [GitHub](../../Skills/Software%20Development/GitHub.md) repo, and I started configuring the job in Source Code Management. I selected the Git option and added the URL for the repo. I also had to change the branch specifier from master to main, so that the correct branch was checked out by the job. Then I added a trigger. All I had to do here was select the box next to GitHub hook trigger for GITScm polling. This tells Jenkins to listen for webhooks from GitHub. To give this job something to do, I added just one build step that displays the contents of the README file. Once the job was in place, I configured the webhook back in the repo. GitHub needs to know what URL to use for the webhook, so I added the URL for the Jenkins server.
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-connect-jenkins-to-github?u=76281980&t=95)** The key part of this configuration is adding github-webhook and a trailing slash to the end of the URL. All of that has to be there, and it has to be spelled correctly. Just putting the Jenkins URL here won't work. I also selected application/[JSON](../../Skills/Web%20Development/JSON.md) as the payload type. With the repo in place, the job squared away, and the webhook set up, I was able to test everything out. I made a small change to the repo and committed the change to trigger the webhook. The message at the top of the log shows that the run was triggered by a GitHub push. And the output from the build step shows that indeed the webhook test worked, which means this challenge was completed successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Git](../../Skills/Software%20Development/Git.md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** url (7), readme (2), https (1)
> **Tools:** github (6)
> **CLI Commands:** git (3)
> **Exercise Files:** github repo (1), source code (1)
> **Documentation:** the readme (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)

#### [Create and test webhooks with other services](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-and-test-webhooks-with-other-services?u=76281980&t=0)** - [Instructor] The [GitHub](../../Skills/Software%20Development/GitHub.md) plugin is one of the default plugins that gets installed during the [Jenkins](../../Skills/DevOps/Jenkins.md) setup process. This plugin provides the functionality that we can tap into for creating webhooks between Jenkins and GitHub. Even though this course focuses on using Jenkins with GitHub, Jenkins isn't limited to GitHub alone. Other plugins allow Jenkins to integrate with additional [Version Control](../../Skills/Web%20Development/Version%20Control.md) services, like GitLab and [Bitbucket](../../Skills/Software%20Development/Bitbucket.md), among others. Take a look at the next set of exercise files to see how specific plugins can be installed to allow webhooks from GitLab and Bitbucket, just like we've done with GitHub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Bitbucket](../../Skills/Software%20Development/Bitbucket.md) (2), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Tools:** github (5), gitlab (2), bitbucket (2)
> **Exercise Files:** exercise files (1)
> **Analogies:** just like (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 4. Deploy Code to AWS Lambda

[↑ Back to Table of Contents](#table-of-contents)

#### [Initialize the deployment target in AWS Lambda](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=0)** - [Instructor] AWS Lambda lets you run code without managing servers. Just upload your code and Lambda handles scaling and availability. It's also a great CI/CD target. With a few commands, we can automate builds, tests, and deployments. AWS CloudFormation lets you create and manage AWS resources using code. Instead of clicking through the console, you define your infrastructure in a template. And CloudFormation builds it for you. In this lesson, we'll use CloudFormation to initialize the Lambda function we'll be using with [GitHub](../../Skills/Software%20Development/GitHub.md) and [Jenkins](../../Skills/DevOps/Jenkins.md). I'm viewing the Exercise Files for this lesson, specifically the CloudFormation template that defines the Lambda function resources. Take a look at this template and then download it to your local system before moving on to the next step. I'm also logged into my AWS account, and I'm on the CloudFormation home page. I'll start by selecting Create stack. On this screen, I'll select Upload a template file. And then, I'll upload the template. Now, I'll select Next. The name for the stack has to be unique for the region it's deployed in. I'll name this stack [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-api. This stack doesn't have any parameters, so I'll select Next. On the next screen, I'll scroll to the bottom and confirm that AWS will create IAM resources. On the final screen, I'll scroll to the bottom
>
> **[1:35](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/initialize-the-deployment-target-in-aws-lambda?u=76281980&t=95)** and select Submit. It'll take a moment for the stack to deploy, so I'll wait on this screen until the deployment completes. Okay, the stack is deployed. The Resources tab shows the details for all the resources created by the stack, including the Lambda function, the permission to run the function, and the URL to access the function over the web. The Outputs tab gives us more operational details with the region where the function is deployed, the name of the function, and the function URL. Make a note of these outputs. We'll be using them to configure the deployment job in Jenkins. Let's open the URL. Awesome. Right now, the function just returns a landing page inviting us to deploy the main application. We'll start that process in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** aws (5), url (3), iam (1)
> **CLI Commands:** aws (5), cd (1), python (1), make (1)
> **Exercise Files:** template (5), exercise files (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Prerequisites:** configure (1)

#### [Create a GitHub repository for the application code](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-github-repository-for-the-application-code?u=76281980&t=0)** - [Instructor] I'm logged into my [GitHub](../../Skills/Software%20Development/GitHub.md) account, and I'm viewing [github.com/new](https://github.com/new) to create a repo for the application code. Let's call this repository [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-api to match the name of our Lambda function web application. And let's also add a simple description. We'll leave the repo public. Let's add a README file and a .gitignore file for Python projects. And now let's select Create. Okay, there's our repo. Now let's add the files. I'll select this Plus icon, and then select Upload Files. On this screen, I'll select Choose Files. I've already downloaded the exercise files for this lesson. I'll select all the files and then select Open. And now, I'll select Commit Changes. Great, now that the code is in GitHub, we're one step closer to completing our pipeline. Let's move on to creating the deployment job in [Jenkins](../../Skills/DevOps/Jenkins.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Tools:** github (3)
> **CLI Commands:** python (2)
> **URLs:** [github.com](https://github.com) (1)
> **Env Vars:** readme (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Create a freestyle job to deploy code from GitHub, part 1](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=0)** - [Instructor] Now that we have the web app deployed in AWS Lambda and a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with a code for the application, we need to configure a [Jenkins](../../Skills/DevOps/Jenkins.md) job that deploys the application whenever a change is pushed to the repo. I'm starting in GitHub to get the URL for our repo, I'll select code and then HTTPS. Then I'll select the icon to copy the URL. Now let's go to Jenkins. In the Jenkins tab, I'll select new item. For the job name let's stick with the same name we use for the application and the repo, [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)-api. We'll be using a freestyle project, so I'll select that and then select OK. For the job description, let's explain exactly what this job does. It deploys our application to AWS Lambda. To start the configuration, we need to select the option to restrict where this project can run. If we add any more build servers with different roles, we want to make sure that this job runs on a server that has the Lambda role. So I'll select this option and enter Lambda. Now let's move on to source code management. Under source code management, I'll select [Git](../../Skills/Software%20Development/Git.md). Fr the repository URL, I'll paste in the repo URL. This repo is public, so we don't need to configure any credentials to access it. We also need to update the branch specifier. The repo uses the main branch,
>
> **[1:32](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-1?u=76281980&t=92)** so I'll update this option to match. Now we can set the build trigger. Under triggers we need to select GitHub hook trigger for GITScm polling. This option will trigger our job whenever we push a code change to the repository after we add a webhook. Before we do that, let's save our job with the apply button. Now I'm going to scroll up and get the URL for my Jenkins server by right clicking the icon and selecting copy link address. Now I'll go back to GitHub. On the repo page, I'll select settings, webhooks, add webhook. Under payload URL, I'll paste the Jenkins server URL, and at the end I'll add GitHub-webhook/. As I've mentioned before, it's critical to have the spelling of the GitHub-webhook route correct, as well as having the trailing slash there. It has to be there. Now I'll select application [JSON](../../Skills/Web%20Development/JSON.md) for the content type. And finally, I'll add this webhook and I'll refresh this page just to get the confirmation that the webhook is added correctly. Okay, this little green check mark here shows that the webhook is added correctly and we're good to go. Now we can go back to Jenkins and finish our deployment. Let's pick up there in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Git](../../Skills/Software%20Development/Git.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** url (7), aws (2), https (1), json (1)
> **Tools:** github (6)
> **CLI Commands:** aws (2), python (1), make (1), git (1)
> **UI Navigation:** select the (2), go to (1), scroll up (1)
> **Cross-References:** go back to (2), in the next (1)
> **Exercise Files:** source code (2)
> **Prerequisites:** configure (2)

#### [Create a freestyle job to deploy code from GitHub, part 2](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=0)** - [Instructor] I'm in [Jenkins](../../Skills/DevOps/Jenkins.md), editing the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) API deployment job. I also have browser tabs with the exercise files for this lesson and the outputs from the cloud formation stack. Let's finish configuring the deployment job by adding three build steps. I'm using the execute shell step for each one. Each step will run specific commands in the pipeline to deploy the code to AWS Lambda. We can find those commands in the exercise files. All we have to do is copy the commands for each step. The first step sets up a virtual environment for Python dependencies. I'll copy the code from here and paste it into the job configuration. The next build step is where the real action happens. The project includes a make file that bundles all the commands needed to test the code, build the deployment artifact, and then deploy the code to Lambda. Take a look at the make file to see all the commands that get run from this one command line. In the last step, we'll run another make command to test the deployed API. It makes sense for Jenkins to run this test automatically instead of us having to confirm the deployment was successful. Before we wrap up, we need to update the code with the output values from cloud formation. I know that my function is called python-api, and I'm in the us-east-2 region,
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/create-a-freestyle-job-to-deploy-code-from-github-part-2?u=76281980&t=93)** so I'll enter those values. I don't have the URL memorized, so I'll get that value from cloud formation. I'll copy the value from here, and back in Jenkins, I'll update the URL value in the deploy and test steps. Okay, the job is all configured. Let's save it and take it for a spin. Before I run the job, let's take a look at the application. Right now, the homepage shows the placeholder for the web app. If our deployment from Jenkins works as expected, this page should be updated with the application code. Okay. Here goes nothing. I'll kick things off using the Build Now button, and wait for the build to complete. Well, that was a little suspenseful, but thank goodness the job completed successfully. If you're following along, take a moment to review the console output to see all the steps Jenkins took to deploy the application. For the real proof, let's see the deployed application. I'll reload the page to update the content. Outstanding. The API is up and ready to go. Now let's take our deployment to the next level by pushing a change from [GitHub](../../Skills/Software%20Development/GitHub.md). We'll do that in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** python (3), make (3), aws (1), find (1)
> **Env Vars:** api (3), url (2), aws (1)
> **Cross-References:** in the last (1), in the next (1)
> **Tools:** command line (1), github (1)
> **Exercise Files:** exercise files (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Deploy to AWS Lambda from GitHub](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=0)** - [Instructor] This is the moment we've been working toward: making a code change that triggers a [Jenkins](../../Skills/DevOps/Jenkins.md) job and seeing that change deployed to the web application running in AWS Lambda. Let's review all of the resources we have in place. We have a [GitHub](../../Skills/Software%20Development/GitHub.md) repository with our code. We have a Jenkins job that will be triggered by a webhook from GitHub, and we have our application running in AWS Lambda. If everything works as intended, we'll be able to make a change in GitHub and see it propagated all the way to the application. Let's give it a shot. In the repository, let's make a change that will be immediately visible so that we can quickly confirm that the change was applied. The [HTML](../../Skills/Web%20Development/HTML.md) for the homepage is a good place to start. We can edit this file in the browser by selecting the pencil icon. Let's add a message explaining how the API was deployed. I'll add a message to the page header, and I'll even add a smiley face because if this works, I'll be really happy. Now we need to commit this change. For this change, let's add a commit message. We'll be able to see this message in Jenkins, which will be another way we can confirm that our changes have been pulled in. Now, once I select Commit changes, the web hook will get activated and the Jenkins job will get triggered. Here we go.
>
> **[1:33](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/deploy-to-aws-lambda-from-github?u=76281980&t=93)** I'll go to the Jenkins tab now so we can confirm that the Jenkins job got triggered. There's our job currently in pending state. Let's open the console to watch the deployment in realtime. We can see that the job is running and in the process of deploying our application. Two things we can confirm right away are the build trigger and the commit message. The very first line of the output shows us that this job was indeed triggered by a GitHub push. The commit message lets us know that Jenkins is working with the correct code. Now that the deployment is finished, let's go to the application and reload the page, and there's our change. Our checks along the way were good indications that our update was deployed exactly how we expected it to be, but this is the ultimate confirmation that the change was deployed successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (7), [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **CLI Commands:** aws (2), make (2)
> **Env Vars:** aws (2), html (1), api (1)
> **Tools:** github (4)
> **UI Navigation:** go to (2), open the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Deploy to AWS Lambda from GitHub](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=0)** - [Instructor] This is the challenge that brings everything together and applies all the skills and technologies we've studied in this course. The goal is to set up and exercise the complete CICD workflow that takes code from [GitHub](../../Skills/Software%20Development/GitHub.md) through [Jenkins](../../Skills/DevOps/Jenkins.md) and updates a web application running in AWS Lambda. Let's review. I started with the provided CloudFormation template to deploy a stack that initialized the Lambda resources. The stack also provided the details I needed to configure the deployment scripts in Jenkins. Then I created a GitHub repo and added the provided code for the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) API. Jenkins needs to know the URL for the repo to check out the code, so I gathered that piece of information by selecting Code, then the HTTPS tab, and then the clipboard icon. Then I went to Jenkins to configure the deployment job. The first thing I needed to configure was the label for the job. This makes sure the job runs on the build server with permission to manage resources in AWS Lambda. Next up was source code management. I selected [Git](../../Skills/Software%20Development/Git.md) and added the URL for the repo. I also had to change the branch specifier from master to main so that the correct branch was checked out by the job. Then I added a trigger.
>
> **[1:34](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=94)** All I had to do here was select the box next to GitHub hook trigger for GITScm polling. This tells Jenkins to listen for web hooks from GitHub. Of course, we want this job to do something when it gets triggered, so I added some build steps. This job has three build steps. The first step checks for a virtual environment and creates it if it's not there. The next step is where all the magic happens. The virtual environment gets activated, and the make command runs all the actions that test the code, build the deployment package, and then use the package to update the function running in AWS Lambda. Of course, for all those commands to work properly, I had to update the configuration to use the correct function name, region, and the URL for the application. The last step runs make again to test the newly deployed application. If the test passes, then we know the application was deployed successfully. To run an end-to-end test, I made a change to the template used by the application. This allowed me to have a visual indicator that the code was properly deployed to the Lambda function. Once I pushed the code, the GitHub webhook triggered the Jenkins job to check out the code, run tests, zip the code into a deployment artifact, and then use that artifact to update the Lambda function. The key item in the log was the message that the job was started by GitHub,
>
> **[3:10](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-deploy-to-aws-lambda-from-github?u=76281980&t=190)** which leads to the application being updated and the successful completion of this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [Jenkins](../../Skills/DevOps/Jenkins.md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Env Vars:** aws (3), url (3), cicd (1), api (1), https (1)
> **CLI Commands:** aws (3), make (2), python (1), git (1)
> **Tools:** github (6)
> **Exercise Files:** template (2), github repo (1), source code (1)
> **Prerequisites:** configure (3), set up (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)


### 5. Shut Down AWS Resources

[↑ Back to Table of Contents](#table-of-contents)

#### [Decomission AWS resources](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/decomission-aws-resources?u=76281980&t=0)** - [Instructor] As we wind down this course, we need to take a few minutes to decommission AWS resources. Removing the resources that we no longer need keeps our accounts tidy and helps us stay within the free tier. And it also prevents unexpected charges from AWS. Believe me, no one wants that. Start by deleting the cloud formation stack we used to initialize the Lambda function. Then, remove the build server, its security group, SSH key, and IAM role. Finally, remove the [Jenkins](../../Skills/DevOps/Jenkins.md) server along with its elastic IP address, security group, and IAM role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (1)
> **Env Vars:** aws (2), iam (2), ssh (1)
> **CLI Commands:** aws (2), ssh (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Decommission AWS resources](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=0)** - [Instructor] In this challenge, the goal is to clean up the AWS resources we created during the course. Let's start with the cloud formation stack we used to initialize the Lambda function. I'm starting on the cloud formation dashboard for this region. I only have one stack in this region, and it's already selected, so all I have to do is select Delete. I'm prompted to confirm the stack deletion, and I'm really sure, so I'll select Delete again. Now I'll wait for the status to change to Delete Complete. Okay, the stack is deleted. Let's move on to the [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances. On the EC2 dashboard, I'll select Instances. I only have two EC2 instances running in this region, so I'll select them both. And then under Instance state, I'll select Terminate. I get a message about the EBS-backed instances and how they'll be deleted as well. And with that information, I'll go ahead and select Terminate, and I'll hang out on this screen until both of these instances are terminated. Okay, with the servers put to bed, we need to clean up the resources associated with the servers, specifically the Elastic IP address, security groups, SSH key and IAM roles.
>
> **[1:36](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=96)** Let's start with the Elastic IP. In this menu on the left hand side, I'll go under Network & Security and select Elastic IPs. I only have one IP address in this region, so I'll select it. And then under Actions, I'll select Release Elastic IP address. I'm prompted to confirm the release, and I'm ready to let it go, so I'll select Release. Now let's get to the security groups. On the menu, I'll select Security Groups, and then identify the security groups I want to remove. One thing we need to keep in mind is the build-server security group references the [Jenkins](../../Skills/DevOps/Jenkins.md)-server security group to allow SSH access. To avoid dependency errors, we need to delete the build-server security group first. So I'll select build-server, and then select Actions, and then Delete security groups. And then I'll select Delete, and I'll refresh this screen to make sure that security group is really gone. So now I can delete the jenkins-server security group. So I'll select that one. Then select Actions, Delete security groups, and then Delete. Okay, the security groups are all cleaned up. Now let's remove the key pair used by the build-server. And again, under Network & Security, I'll select Key Pairs, and then I'll select the build-server key. Under Actions, I'll select Delete.
>
> **[3:12](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/solution-decommission-aws-resources?u=76281980&t=192)** This time I have to type the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) Delete with a capital D to confirm the deletion, and then I'll select Delete. Okay, that takes care of all the EC2 resources. Let's wrap up by removing the IAM roles. On the IAM roles page, I'll filter to the roles we used for EC2, and I'll select both of these roles. And now I'll choose Delete. For this confirmation, I have to type delete this time with a lowercase d, and then I'll select Delete. Okay, everything's been decommissioned, and we're all set to wrap things up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (5), [Jenkins](../../Skills/DevOps/Jenkins.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Env Vars:** ec2 (5), iam (3), ssh (2), aws (1), ebs (1)
> **CLI Commands:** ssh (2), aws (1), make (1)
> **UI Navigation:** select the (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/running-jenkins-on-aws-deploying-and-managing-jenkins-on-cloud-infrastructure/next-steps?u=76281980&t=0)** - I hope you enjoyed this course on [Jenkins](../../Skills/DevOps/Jenkins.md) and [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md). We covered a lot of ground, including setting up build servers, configuring web hooks, and automating deployments to AWS Lambda, but we've only scratched the surface. I hope you continue exploring the many ways Jenkins and [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) like AWS can support [Software Development](../../Topics/Software%20Development.md) and process automation. And please keep learning more about software development, Jenkins and AWS, by exploring other topics in [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. I had a great time as your instructor and I can't wait to see what you create with Jenkins and AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Jenkins](../../Skills/DevOps/Jenkins.md) (4), [Software Development](../../Topics/Software%20Development.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (4)
> **Env Vars:** aws (4)
> **Cross-References:** we covered (1)
> **Speakers:** - i (1)


## Instructor

- [Michael Jenkins](../../Instructors/DevOps/Michael%20Jenkins.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/running-jenkins-on-aws-3978678)

## Skills Covered

- Jenkins

## Path Context

### In [Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)
← [Jenkins Essential Training](Jenkins%20Essential%20Training.md) | **3 of 3**

## Appears In

- [Continuous Integration-Continuous Delivery (CI-CD) with Jenkins](../../Paths/DevOps/Learning%20Paths/Continuous%20Integration-Continuous%20Delivery%20(CI-CD)%20with%20Jenkins.md)

## Related Courses

_Courses sharing skills:_

- [Jenkins Essential Training](Jenkins%20Essential%20Training.md) — Jenkins
- [Learning Jenkins Automating Software Development And System Administration](Learning%20Jenkins%20Automating%20Software%20Development%20And%20System%20Administration.md) — Jenkins

---

[↑ Back to top](#)