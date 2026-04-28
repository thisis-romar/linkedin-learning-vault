---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: aws-monitoring-logging-and-remediation-2021
url: "https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021"
duration_minutes: 100
duration: 1h 40m
level: Intermediate
updated: 7/30/2021
learners: 4010
skills:
  - Amazon Web Services (AWS)
  - System Monitoring
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEjfTWkFZh_ig/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1627498422761?e=2147483647&amp;v=beta&amp;t=j3ifch3k7efTJip2URw5xJ00HNxCNIRQvBaNUnzL6BY"
linkedin_topic: Cloud Computing
learning_paths:
  - '[[Develop Your AWS Skills]]'
prev_courses:
  - '[[Complete Guide to AWS Software Deployment]]'
next_courses:
  - '[[Cloud Computing Careers and Certifications]]'
path_nav: '[{"path":"Develop Your AWS Skills","position":3,"total":4,"prev":"Complete Guide to AWS Software Deployment","next":"Cloud Computing Careers and Certifications"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/amazon-web-services-aws
  - skill/system-monitoring
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/AWS-%20Monitoring%2C%20Logging%2C%20and%20Remediation%20(2021).md)

![AWS: Monitoring, Logging, and Remediation (2021)](https://media.licdn.com/dms/image/v2/C560DAQEjfTWkFZh_ig/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1627498422761?e=2147483647&amp;v=beta&amp;t=j3ifch3k7efTJip2URw5xJ00HNxCNIRQvBaNUnzL6BY)

# AWS: Monitoring, Logging, and Remediation (2021)

> As organizations increasingly move their workloads to the AWS cloud to take advantage of its speed, elasticity, and flexible pricing, it is more important than ever to continuously monitor your applications and workloads, and react to changes, to maintain a fault-tolerant and highly available ecosystem. In this course, Shyam Raj provides system administrators with a look at how to successfully mon

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021) | 1h 40m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (2 videos)
- **2. 1. AWS CloudWatch and CloudTrail** (8 videos)
- **3. 2. Configure Notifications** (3 videos)
- **4. 3. AWS Config** (3 videos)
- **5. 4. Taking Action** (5 videos)
- **6. Conclusion** (1 videos)

### 1. Introduction

#### Monitoring, logging, and remediation in AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980&t=0)** - [Instructor] Organizations are, increasingly, moving their workloads to the AWS Cloud to take advantage of its speed, elasticity and flexible pricing options.
>
> **[0:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980&t=9)** To build a fault-tolerant and highly available ecosystem, it is important to continuously monitor your applications and workloads and react to changes.
>
> **[0:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980&t=17)** This course will walk you through the different tools and services you can deploy to monitor and log your systems and execute remediation actions.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980&t=25)** Hi, I'm Shyam Raj, I'm a technical instructor and industry specialist in Cloud computing, networking and security.
>
> **[0:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980&t=32)** I invite you to join my LinkedIn learning course on monitoring, logging and remediating in AWS.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980&t=0)** - [Instructor] Amazon Web Services offers a variety of tools for compute, storage, databases, governance and more.
>
> **[0:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980&t=8)** To appreciate the concepts discussed in this course, I recommend that you have a basic understanding of virtualization technology and essential services offered by AWS, such as compute and storage.
>
> **[0:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980&t=19)** You will also need an AWS account to follow along with the exercises shown in this course.
>
> **[0:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980&t=24)** We've designed this course for Systems Administrators in a Systems Operations role.
>
> **[0:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980&t=29)** By the end of this course, you will have an appreciation of the tools and features you can use to monitor your systems effectively and take remediation actions in response to changes in your environment.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. 1. AWS CloudWatch and CloudTrail

#### Review monitoring concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=0)** - [Instructor] Whether you're migrating existing applications or building natively in AWS, you will need monitoring tools to help you operate as efficiently and cost effectively as possible.
>
> **[0:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=10)** AWS provides several services, each playing a different role.
>
> **[0:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=15)** Each of these services has it's native monitoring console that allows you to watch and track basic metrics.
>
> **[0:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=21)** You'll design a comprehensive monitoring solution, it is crucial to monitor all your services from one console.
>
> **[0:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=28)** A good analogy to understand the importance of monitoring is the critical care unit of a hospital that's constantly monitoring different variables for each patient.
>
> **[0:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=37)** These variables are used to create alarms, such as high pulse rate and blood pressure.
>
> **[0:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=41)** A higher pulse rate may be acceptable for one patient, but not for the other.
>
> **[0:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=46)** Similarly, monitoring your applications and workloads on AWS requires a customized approach backed by data.
>
> **[0:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=53)** Monitoring must be unified and lead to actionable data.
>
> **[0:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=57)** CloudWatch allows you to view data from all your AWS services in a single console providing a unified view of your operational health.
>
> **[1:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=65)** Data from different services is organized into name spaces.
>
> **[1:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=68)** There are multiple options available for metrics, statistic type and monitoring time range, giving you the flexibility to track in a way that works for you.
>
> **[1:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=77)** CloudWatch also allows you to create alarms to get notified when critical metrics breach configure thresholds.
>
> **[1:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=84)** A robust monitoring solution must also support automation.
>
> **[1:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=88)** CloudWatch Events, now known as Amazon EventBridge, allows you to continuously monitor event patterns and trigger remediation actions using Lambda functions.
>
> **[1:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=97)** AWS CloudTrail is a service from AWS that allows you to log and retain account activity, enabling governance, compliance and risk auditing across your AWS infrastructure.
>
> **[1:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=108)** By combining Amazon CloudWatch with AWS CloudTrail, you can visualize logs, detect anomalous behavior, configure remediation actions and troubleshoot security and operational issues in your AWS account.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9)
> **Env Vars:** aws (9)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** configure (2)
> **Code Keywords:** lambda (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Introduction to CloudWatch
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=0)** - [Instructor] Amazon CloudWatch is an AWS service that allows you to monitor resources and applications you run on AWS in real time.
>
> **[0:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=8)** You can use the data provided by CloudWatch to monitor your applications, optimize the utilization, respond to changes in your environment, and get a unified view of your operational health.
>
> **[0:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=21)** By default, CloudWatch automatically displays metrics about every AWS service you use.
>
> **[0:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=27)** CloudWatch also allows you to create customized dashboards with metrics collected from your applications.
>
> **[0:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=32)** These can belong to multiple AWS accounts and regions giving you a unified view of your landscape.
>
> **[0:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=38)** With CloudWatch, you can also create alarms to watch your metrics.
>
> **[0:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=42)** When an alarm is triggered, CloudWatch can send notifications or automatically make changes to the resources you're monitoring.
>
> **[0:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=49)** A common use case is to monitor the CPU utilization of your EC2 instances.
>
> **[0:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=54)** You can use this data to determine whether you need to launch additional instances to handle the increased load, or whether you need to terminate existing instances when the load is significantly less.
>
> **[1:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=66)** You can use CloudWatch via the AWS management console, CloudWatch API, command line interface or CLI, and the AWS SDKs.
>
> **[1:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=77)** Technically, Amazon CloudWatch is a repository of metrics.
>
> **[1:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=80)** Different AWS services such as Amazon EC2 put their metrics into the repository.
>
> **[1:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=86)** The user then uses these metrics to retrieve statistics.
>
> **[1:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=90)** It is also possible to put your own custom metrics into the repository and retrieve statistics on them.
>
> **[1:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=97)** You can use these metrics to perform actions such as sending an email via Amazon SNS or Amazon simple notification service, invoke a Lambda function, route events to an Amazon SQSQ, start, stop or terminate Amazon EC2 instances, initiate Amazon EC2 auto-scaling actions and more.
>
> **[1:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=118)** Before you start using CloudWatch, it is essential to understand a few terminologies and concepts.
>
> **[2:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=124)** First is a namespace.
>
> **[2:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=126)** This is a container for your CloudWatch metrics.
>
> **[2:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=129)** Metrics belonging to different namespaces are isolated from each other.
>
> **[2:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=133)** Namespaces use the naming convention of AWS last service.
>
> **[2:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=137)** For example, Amazon EC2 uses the AWS/EC2 namespace.
>
> **[2:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=143)** Next we have metrics.
>
> **[2:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=144)** These are variables used to monitor a service.
>
> **[2:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=147)** The values of these variables are known as data points.
>
> **[2:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=150)** Some examples of metrics include CPU utilization of your EC2 instances, read and write operations of EBS volumes, size of S3 buckets, et cetera.
>
> **[2:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=161)** For instructions on viewing the list of available metrics, please check out the documentation.
>
> **[2:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=166)** Metrics exist only in the region in which you create them.
>
> **[2:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=169)** You cannot delete metrics, they automatically expire after 15 months if you do not publish any data to them.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=176)** Each metric data point must be associated with a timestamp.
>
> **[2:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=179)** Timestamps are daytime objects that include the complete date plus hours, minutes, and seconds.
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=187)** Metrics are available in the following resolutions, standard resolution.
>
> **[3:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=191)** This has a one minute granularity.
>
> **[3:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=194)** All AWS published metrics are standard resolution by default.
>
> **[3:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=198)** Standard resolution works for most use cases, but for scenarios that require fine granularity, there's high resolution.
>
> **[3:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=205)** This has a one-second granularity.
>
> **[3:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=208)** This resolution can provide immediate insight into your applications activity.
>
> **[3:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=213)** Amazon CloudWatch integrates with AWS IAM or AWS identity and access management, allowing you to specify which cloud watch actions a user in your AWS account can perform.
>
> **[3:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=225)** However, it is important to note that you cannot use IAM to control access to CloudWatch data for specific resources.
>
> **[3:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=233)** So you can't have a user have access to CloudWatch data only for a specific set of instances or a specific database.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=241)** When you grant permission using IAM, it covers all cloud resources you use with CloudWatch.
>
> **[4:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=247)** So you've understood how CloudWatch provides a single console to monitor the operational health of your applications and resources and perform configured actions.
>
> **[4:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=257)** The best way to understand CloudWatch is to configure it.

> [!info]- Semantic Content
>
> **Env Vars:** aws (13), ec2 (7), iam (3), cpu (2), api (1)
> **CLI Commands:** aws (13), make (1)
> **Code Keywords:** default, (1), interface (1), lambda (1), function (1), delete (1)
> **Definitions:** is a  (3), is an  (1), known as (1)
> **Analogies:** such as (2), for example (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Warnings:** note that (1)

#### Create a CloudWatch alarm
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=0)** - [Instructor] In addition to tracking the usage of your AWS resources, you can also use Amazon CloudWatch to create alarms.
>
> **[0:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=7)** These alarms monitor configured metrics and alert you when a metric breaches the configured thresholds.
>
> **[0:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=13)** A common use case for CloudWatch Alarms is to monitor estimated AWS charges.
>
> **[0:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=18)** AWS stores billing metric data in the US East North Virginia region, but it represents worldwide charges.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=25)** It includes estimated charges for every service in AWS from every region.
>
> **[0:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=31)** Before you can create a billing alarm, you need to enable billing alerts.
>
> **[0:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=35)** Doing so allows you to monitor your estimated AWS charges and create an alarm using the billing metric data.
>
> **[0:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=42)** To enable billing alerts, log into the AWS Management Console with root user credentials or as an IAM user that has permission to view billing information.
>
> **[0:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=53)** Click your display name on the top right corner and then click my billing dashboard.
>
> **[1:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=60)** On the left navigation pane, under the preferences section, click billing preferences.
>
> **[1:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=66)** Check the box to receive billing alerts and then click save preferences.
>
> **[1:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=71)** Note that once you enable this preference, you cannot disable it.
>
> **[1:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=75)** In my case, I've already enabled it.
>
> **[1:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=77)** After you enable billing alerts for the first time, it takes about 15 minutes before you can view billing data and set billing alarms.
>
> **[1:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=84)** With billing alerts enabled, now you'll configure a billing alarm that sends an email message when you account billing exceeds a specified threshold.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=93)** Use the services dropdown and navigate to the CloudWatch service.
>
> **[1:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=97)** You will find this under the management and governance section.
>
> **[1:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=103)** Before proceeding further, I should add that AWS regularly updates its user interface with new designs and enhancements.
>
> **[1:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=110)** When you configure a billing alarms using CloudWatch, you may see a slightly different interface than what you see on my screen.
>
> **[1:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=117)** The core elements of the configuration such as metric and alarm details will remain the same.
>
> **[2:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=122)** Please refer to the AWS documentation for the latest information about product updates.
>
> **[2:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=128)** Also, ensure that you're already in the Northern Virginia region.
>
> **[2:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=132)** If not, use the region selector in the upper right corner and switched to the North Virginia region.
>
> **[2:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=138)** On the left navigation pane, under the alarm section, click billing.
>
> **[2:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=143)** Click the create alarm button at the bottom.
>
> **[2:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=147)** The blue line represents your estimated AWS charges.
>
> **[2:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=150)** Hover on any data point to see the corresponding timestamp and estimated charges.
>
> **[2:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=156)** Make a note of the message at the top the alarm will trigger when the blue line goes above the red line for one data point within six hours.
>
> **[2:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=165)** There is no red line because you haven't configured a threshold yet.
>
> **[2:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=169)** AWS automatically sets the metric name, currency, statistic and period.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=176)** The threshold type can be static or anomaly detection.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=180)** When the anomaly detection option is selected, CloudWatch uses statistical and machine learning algorithms to analyze metrics, determine normal base lines and detect anomalies.
>
> **[3:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=190)** For the billing alarm, you will set the threshold type to static.
>
> **[3:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=194)** Set the alarm condition as greater than and configure the threshold value.
>
> **[3:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=200)** Note that after you configure the threshold value, you will see the red line if you scroll up.
>
> **[3:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=205)** This corresponds to the threshold value.
>
> **[3:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=208)** Under additional configuration, you can define the data points to alarm and how to treat missing data.
>
> **[3:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=214)** For now, you will leave these at the defaults, click next.
>
> **[3:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=219)** In this step, you will configure notification settings.
>
> **[3:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=223)** A CloudWatch Alarm can have three states.
>
> **[3:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=225)** The state is okay when the metric is within the configured threshold.
>
> **[3:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=230)** The state is insufficient data when there isn't enough data available like when you've just configured the alarm.
>
> **[3:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=236)** The state is in alarm when the metric is outside the configured threshold.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=241)** For a billing alarm, you would want AWS to notify you when the alarm triggers or in other words, when the state of the alarm is in alarm.
>
> **[4:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=250)** SNS or simple notification service is responsible for handling notifications.
>
> **[4:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=255)** If you already have an SNS topic configured, selected from the list or provide the topic ARN using this option or select the create a new topic option and provide it topic name.
>
> **[4:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=268)** Add the required email addresses in a comma separated format, then click create topic.
>
> **[4:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=276)** To configure additional SNS topics, click add notification, scroll to the bottom and click next.
>
> **[4:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=283)** Provide a name for the alarm, then click next.
>
> **[4:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=291)** Review your selections and click create alarm.
>
> **[4:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=296)** Here's the configured alarm.
>
> **[4:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=298)** The state is insufficient data because you've only just created the alarm and the alarm is pending confirmation because you created a new SNS topic and the email address configured on the topic hasn't been confirmed yet.
>
> **[5:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=311)** To confirm, look for an email from AWS with instructions.
>
> **[5:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=317)** I waited for about a minute and refreshed the alarm.
>
> **[5:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=320)** It has now moved to the okay state, which means that the metric is within the configured threshold.
>
> **[5:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=325)** If you need to delete the alarm, simply select it, click actions and then click delete.
>
> **[5:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=333)** Click delete again.
>
> **[5:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=334)** The alarm has been deleted.
>
> **[5:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=336)** So we've demonstrated how to create a billing alarm to track your AWS usage costs and prevent overuse it in your AWS account.
>
> **[5:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=344)** As you can imagine, CloudWatch Alarms have many other use cases like monitoring your EC2 instances, S3 buckets, database instances and more.
>
> **[5:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=354)** Simply put, you can create alarms on any metric collected by CloudWatch.

> [!info]- Semantic Content
>
> **Env Vars:** aws (14), sns (4), iam (1), arn (1), ec2 (1)
> **CLI Commands:** aws (14), find (1), make (1)
> **Code Keywords:** delete (3), interface (2), static (2), case, (1)
> **Prerequisites:** configure (6)
> **UI Navigation:** dropdown (1), navigate to (1), scroll up (1), select the (1)
> **Definitions:** in other words (1), means that (1)
> **Analogies:** such as (1), imagine (1)
> **Warnings:** note that (2)

#### CloudWatch Logs
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=0)** - [Instructor] Amazon CloudWatch Logs is a feature of Amazon CloudWatch that do collect and store logs from your resources, applications, and services in near real time.
>
> **[0:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=10)** You can use CloudWatch Logs to centralize logs from your systems in one place, and then search, sort, filter, or query them for patterns.
>
> **[0:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=19)** You can also them by specific fields and visualize them in dashboards.
>
> **[0:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=24)** By default, logs are retained indefinitely and never expire.
>
> **[0:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=28)** But you can configure the retention period, to be anywhere between one day in 10 years.
>
> **[0:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=34)** CloudWatch Logs organises lock data using log groups.
>
> **[0:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=37)** A log group is a group of log streams that share the same retention and access control settings.
>
> **[0:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=43)** A log stream is a sequence of log events that share the same source.
>
> **[0:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=47)** For example, the same elastic network interface.
>
> **[0:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=50)** Bear in mind that not all AWS services publish to CloudWatch Logs.
>
> **[0:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=55)** Some of the important services that do so, include Amazon VPC, Amazon Route 53, AWS Lambda, AWS CloudTrail, and AWS Fargate.
>
> **[1:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=65)** For a complete list of services that publish to CloudWatch Logs, please refer to the CloudWatch documentation.
>
> **[1:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=72)** Now you'll go to the CloudWatch console and learn how to create a log group.
>
> **[1:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=76)** Then you will configure a VPC to send flow logs to the group, and then you will create a CloudWatch alarm based on the data collected by the log group.
>
> **[1:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=86)** You are now at the CloudWatch console.
>
> **[1:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=88)** On the left navigation pane, the lock section, click log groups.
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=94)** Then click create log group.
>
> **[1:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=96)** Provide a name for the group.
>
> **[1:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=100)** Then define the retention setting.
>
> **[1:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=103)** If you like to encrypt log group data with a customer master key, create a new key from the key management service and provide the ARN here.
>
> **[1:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=111)** For now, you will skip this.
>
> **[1:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=114)** Click Create.
>
> **[1:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=116)** The log group is ready.
>
> **[1:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=118)** Now you'll configure your VPC to send flow logs to this log group.
>
> **[2:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=122)** Use the services down menu and navigate to the VPC service.
>
> **[2:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=127)** You will find this under the networking and content delivery section.
>
> **[2:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=132)** On the left navigation pane, click Your VPCs, select the desired VPC.
>
> **[2:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=138)** Click the actions button, and then click create flow log.
>
> **[2:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=144)** Here you can provide a name for the flow log.
>
> **[2:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=146)** This is optional though.
>
> **[2:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=148)** The filter allows you to decide the type of traffic you want to capture in the logs.
>
> **[2:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=152)** Accept, reject, or both.
>
> **[2:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=155)** Set it to all.
>
> **[2:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=156)** Leave the maximum aggregation interval set to 10 minutes and the destination set to, send to CloudWatch Logs.
>
> **[2:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=164)** Under destination log group, select the log group that you just configured.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=168)** Next, you need to provide permissions to publish logs to CloudWatch.
>
> **[2:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=172)** You can do this by attaching an IAM role.
>
> **[2:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=175)** In this case, even though you're configuring VPC flow logs, the logs will represent activity of EC2 instances, hosted in this VPC.
>
> **[3:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=184)** So, you will need an IAM role, that provides permissions to the EC2 service, to publish the CloudWatch Logs.
>
> **[3:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=192)** You will find more information about how to create an IAM role with the required permissions, in the CloudWatch documentation.
>
> **[3:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=198)** Select the design IAM role.
>
> **[3:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=203)** The next setting allows you to influence the log record format.
>
> **[3:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=207)** Make a note of the default AWS format.
>
> **[3:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=209)** The attributes such as source address, destination address, source port, destination port and others, are arranged in a specific order.
>
> **[3:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=218)** But if you need the attributes in a different order, select custom format, and then select the attributes one by one in the desired order.
>
> **[3:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=227)** For now, leave the set to AWS default format.
>
> **[3:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=231)** Click create flow log.
>
> **[3:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=235)** The flow log you have created is for the VPC.
>
> **[3:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=237)** So all elastic network interfaces in the VPC, will publish data to the log group and each interface will have a unique log stream.
>
> **[4:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=245)** Log streams or containers for flow log records.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=248)** You can also create flow logs for subnets and specific network interfaces.
>
> **[4:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=253)** To view log data, Use the services dropped on menu and navigate back to the CloudWatch service.
>
> **[4:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=262)** On the left navigation pane click log groups.
>
> **[4:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=266)** Here I've got a log group from an earlier configuration.
>
> **[4:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=269)** Click the log group to see the associated log streams.
>
> **[4:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=272)** Click on the stream to see the associated log events.
>
> **[4:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=278)** Note that each event has a timestamp and a message.
>
> **[4:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=282)** As you can see, there's a lot of information.
>
> **[4:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=286)** The fields include version, account number, elastic network interface, source IP, destination IP, source port, destination port, protocol number, packets, bytes, start time, end time, action, and flow log status.
>
> **[5:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=305)** As you can imagine, this level of detail can be instrumental in analyzing traffic.
>
> **[5:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=310)** Now you'll use the log events to create a CloudWatch alarm.
>
> **[5:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=313)** The alarm will notify you when the number of rejected SSN sessions reaches a configured threshold.
>
> **[5:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=320)** But before you can do that, you need to create a new custom metric that the alarm can track.
>
> **[5:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=326)** First, you will apply a filter to search for interesting events.
>
> **[5:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=330)** In this case, rejected SSH traffic.
>
> **[5:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=333)** For rejected SSH events, the destination port will be 22, the protocol will be six for TCP, and the action will be reject.
>
> **[5:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=343)** Let's apply a filter to identify this type of traffic.
>
> **[5:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=347)** As you can see, the filters are enclosed in brackets and includes all fields, but specifies values only for the destination port, protocol, and action.
>
> **[6:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=360)** Press enter to run a search using the filter.
>
> **[6:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=363)** Here you can see the events that have matched the filter.
>
> **[6:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=366)** To learn more about how you can search for the events, please refer to the CloudWatch documentation.
>
> **[6:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=372)** Now click create metric filter.
>
> **[6:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=375)** Provide a filter name.
>
> **[6:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=378)** Then define a new metric namespace.
>
> **[6:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=384)** Also provide a metric name.
>
> **[6:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=388)** Set the metric value to one.
>
> **[6:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=390)** The metric will have this value, when a filter pattern match occurs.
>
> **[6:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=395)** Scroll down and click Create.
>
> **[6:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=399)** You've created the metric filter.
>
> **[6:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=401)** Now you'll create the alarm.
>
> **[6:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=403)** On the left navigation pane, click Alarms, and then click create alarm.
>
> **[6:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=409)** Click select metric.
>
> **[6:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=412)** In the custom namespaces section, you will find the namespace you defined earlier.
>
> **[6:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=417)** Bear in mind that it could take a few minutes before you can see it here.
>
> **[7:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=421)** Here I've got another namespace that I created a while ago.
>
> **[7:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=424)** Click the namespace and then select the desired metric.
>
> **[7:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=429)** Click select metric.
>
> **[7:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=432)** The blue dots represent events corresponding to the metric filter you defined.
>
> **[7:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=436)** In this case, rejected SSH traffic.
>
> **[7:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=439)** Change the statistic to sum and the period to one day.
>
> **[7:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=444)** This configuration means that, you're monitoring the total number of data points for one day.
>
> **[7:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=450)** Scroll down, leave the threshold type set to static and change the condition to greater than or equal to, and then define the desired threshold value.
>
> **[7:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=460)** Click Next.
>
> **[7:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=463)** Leave the alarm state to in alarm, so CloudWatch can notify you when it triggers.
>
> **[7:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=468)** Under the SNS topic section, select create a new topic and provide a topic name.
>
> **[7:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=475)** Then provide a list of email addresses to notify.
>
> **[7:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=479)** Click create topic.
>
> **[8:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=482)** Scroll down and click Next, Provide a name for the alarm.
>
> **[8:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=490)** Click Next.
>
> **[8:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=493)** Review your selections and click create alarm.
>
> **[8:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=499)** Here's the alarm you configured.
>
> **[8:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=501)** The state is insufficient data, because you've only just created it.
>
> **[8:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=506)** Note that the actions column states, pending confirmation.
>
> **[8:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=509)** This is because you've provided an email address, but not verified it.
>
> **[8:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=514)** Look for an email from AWS with a confirmation link.
>
> **[8:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=519)** I wait for a few seconds and refresh the alarm.
>
> **[8:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=522)** Note that the state has changed to in alarm.
>
> **[8:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=525)** This means the metric value has reached the configured threshold.
>
> **[8:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=528)** So you've seen how to use the CloudWatch Logs feature to collect logs from your applications, query them for patterns, define a new custom metric, and creat an alarm to monitor the custom metric.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (9), aws (7), iam (4), ssh (3), ec2 (2)
> **CLI Commands:** aws (7), find (3), ssh (3), make (1)
> **Code Keywords:** interface (3), case, (3), default, (1), lambda (1), this. (1)
> **UI Navigation:** select the (5), scroll down (3), go to (1), navigate to (1), click on (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (1), such as (1), imagine (1)
> **Warnings:** note that (3)
> **Prerequisites:** configure (3)

#### CloudWatch Logs Insights
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=0)** - [Instructor] In an earlier video, you understood the different services that can send log data to CloudWatch Logs and how to configure a log group.
>
> **[0:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=8)** While it helps to have your logs in a central place, it is crucial to analyze this data to identify operational issues and fix them.
>
> **[0:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=16)** Amazon CloudWatch has a feature called CloudWatch Logs Insights that allows you to search and analyze your data in CloudWatch Logs interactively.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=25)** It does this by generating fields from your logs and providing a purpose-built language to query these fields.
>
> **[0:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=32)** CloudWatch Logs Insights automatically generates the following fields for all log types.
>
> **[0:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=37)** Message, this contains the raw, unparsed log event.
>
> **[0:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=41)** Timestamp, this contains the event timestamp.
>
> **[0:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=44)** IngestionTime, this contains the time when the log event was received by CloudWatch Logs.
>
> **[0:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=49)** LogStream, this contains the name of the log stream containing the log event.
>
> **[0:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=55)** And Log, this is the log group identifier.
>
> **[0:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=59)** Note that CloudWatch Logs Insights inserts the @ symbol at the start of the fields that it generates.
>
> **[1:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=65)** In addition to these fields, Logs Insights also discovers additional fields from your logs depending on the service that publish them.
>
> **[1:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=73)** For example, for a VPC flow log that looks like this, it automatically discovers these fields, version, accountid, interfaceid, sourceAddress, destinationAddress, sourcePort, destinationPort, protocol, packets, bytes, start time, end time, action, and log status.
>
> **[1:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=99)** For a lambda log that looks like this, it automatically discovers these fields, type, requestid, duration, build duration, memory size, and max memory used.
>
> **[1:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=113)** Note that each of these fields have the at symbol at the beginning.
>
> **[1:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=116)** This means Logs Insights has automatically generated these.
>
> **[2:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=120)** For a full list of automatically discovered fields, please refer to the CloudWatch Insights documentation.
>
> **[2:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=127)** Now let's go to the CloudWatch console to understand how you can use CloudWatch Insights.
>
> **[2:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=133)** You are now at the CloudWatch console.
>
> **[2:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=135)** Note that to use CloudWatch Insights, you must already have logs stored in CloudWatch Logs.
>
> **[2:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=140)** To verify this, on the left navigation pane, click Log groups.
>
> **[2:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=146)** Then click the log group, and then the log stream.
>
> **[2:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=151)** This confirms that the service is receiving logs.
>
> **[2:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=155)** Now click Insights.
>
> **[2:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=157)** This is the query box.
>
> **[2:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=159)** As you can see, there's a default query that includes the timestamp and message fields and sorts by timestamp and limits to 20 records.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=168)** Select a log group to query from and then click Run query.
>
> **[2:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=174)** The output includes the most recent 20 VPC flow logs.
>
> **[2:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=178)** To see automatically detected fields.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=180)** on the right side, click Fields.
>
> **[3:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=183)** Note that you are only seeing fields related to VPC flow logs because you are currently viewing the VPC Flow Logs group.
>
> **[3:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=191)** Note that there's also an option to visualize using a graph.
>
> **[3:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=194)** Now let's use a query that identifies the top 10 IPs with the most number of TCP sessions.
>
> **[3:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=201)** I'll begin by adding a query.
>
> **[3:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=204)** TCP sessions have the protocol value set at six, so start with a query that only includes TCP-based events.
>
> **[3:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=211)** Next, you will aggregate these sessions or in other words, generate a count of the sessions by using the stats or statistical function.
>
> **[3:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=220)** So use the stats function to count everything, store this as number of sessions, and perform this count by source address.
>
> **[3:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=229)** Sort the data by number of sessions in the descending order and limit to 20 records, click Run query.
>
> **[3:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=237)** This shows you the top 10 IPs with the most number of TCP sessions.
>
> **[4:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=242)** As you can see by running a simple query, you're able to gain insights into your network traffic.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=248)** To add this query to the dashboard, click Add to dashboard.
>
> **[4:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=253)** Select an existing dashboard or click to create a new one.
>
> **[4:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=259)** Provide a name and click the check mark.
>
> **[4:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=262)** On the right side is a preview of the widget.
>
> **[4:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=265)** Click Add to dashboard.
>
> **[4:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=270)** You've added the widget to the dashboard.
>
> **[4:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=272)** Note that you can also add more widgets.
>
> **[4:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=275)** Click Save dashboard.
>
> **[4:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=279)** Now let's try another query to visualize the hourly packet transfer.
>
> **[4:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=284)** On the left navigation pane, click Insights and then select the log group.
>
> **[4:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=290)** Delete the default query and try this query.
>
> **[4:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=294)** The sum function is used to generate a sum of values.
>
> **[4:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=297)** In this case, the total number of bytes.
>
> **[5:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=300)** The bin function rounds the value of the timestamp to the given time period, click Run query.
>
> **[5:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=309)** As you can see, the output shows the hourly packet transfer in terms of bytes.
>
> **[5:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=314)** Click the Visualization tab.
>
> **[5:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=316)** By default, this shows a line graph but there's other options available.
>
> **[5:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=322)** Note that the option to see a line or a stack graph is available when you run a query that uses the bin function to group results by time.
>
> **[5:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=330)** Use the filters at the top to change the time period.
>
> **[5:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=334)** Use the pre-configured options or click Custom to define an absolute or relative time period.
>
> **[5:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=341)** Set this to one day and click Apply.
>
> **[5:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=344)** Now click Run query.
>
> **[5:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=347)** Now the graph shows bytes transferred per hour for 24 hours.
>
> **[5:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=352)** Click Add to dashboard.
>
> **[5:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=354)** Select the dashboard you configured earlier and click Add to dashboard.
>
> **[6:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=361)** CloudWatch Logs Insights makes it easy to understand and debug application behavior by searching and visualizing logs.
>
> **[6:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=369)** As you've seen, the available options present many possibilities.
>
> **[6:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=373)** To fully appreciate the tool, I recommend trying some hands-on queries.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), this, (3), let (3), lambda (1), type, (1)
> **Env Vars:** vpc (4), tcp (4)
> **Warnings:** note that (7)
> **Code Identifiers:** sourceaddress (1), destinationaddress (1), sourceport (1), destinationport (1)
> **UI Navigation:** select the (2), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)

#### CloudWatch agent
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=0)** - [Narrator] In the earlier videos you've seen that you can use Amazon CloudWatch to collect metrics from your EC2 instances, while Amazon CloudWatch collects standard metrics from you instances, it cannot collect internal system level and application level metrics such as disk and memory metrics.
>
> **[0:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=18)** This is because CloudWatch only has visibility at the instance level, but this can be addressed with the Amazon CloudWatch Agent.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=25)** You can use it to collect internal system level metrics from Amazon EC2 instances.
>
> **[0:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=31)** This is in addition to the metrics enabled by default on EC2 instances, you can also collect system level metrics from on premises servers.
>
> **[0:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=40)** This includes metrics such as CPU, disk, memory metrics, and more.
>
> **[0:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=45)** You can also collect logs from Amazon EC2 instances and on premises servers.
>
> **[0:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=49)** And you can also collect custom metrics from your applications.
>
> **[0:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=53)** A good use case is to log errors from your applications so you can quickly spot problems.
>
> **[0:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=58)** The CloudWatch agent is available for popular operating systems, such as Amazon Linux, Ubuntu, CentOS, Red Hat Enterprise Linux, 64 bit versions of Windows operating systems, and more.
>
> **[1:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=72)** You will find the full list of supported operating systems in the CloudWatch documentation.
>
> **[1:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=77)** The metrics collected by the agent can be stored and viewed in CloudWatch, just like other system default metrics.
>
> **[1:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=83)** CloudWatch stores them under the namespace CWAgent, before getting to a demonstration.
>
> **[1:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=89)** I recommend checking the list of metrics collected by the CloudWatch agent.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=93)** Now let's walk through the steps needed to install the agent.
>
> **[1:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=97)** You will learn how to configure the agent to collect member utilization details from an EC2 instance running Windows server 2019.
>
> **[1:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=104)** Before installing the agent, you will need to create an IAM role and attach it to the instance.
>
> **[1:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=110)** The agent will use this role to gain the required permissions, to write metrics to CloudWatch from the AWS management console, use the services dropdown and navigate to the IAM service.
>
> **[2:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=123)** You will find this under the security, identity and compliance section.
>
> **[2:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=127)** On the left navigation pane, click roles, and then click create role.
>
> **[2:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=133)** On the next step, select EC2 as a service that will use this role, doing so will allow EC2 instances to use the role to call AWS services.
>
> **[2:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=143)** In this step, you will need to attach a permissions policy.
>
> **[2:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=146)** From the list, search for CloudWatch agent server policy.
>
> **[2:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=154)** It is an AWS managed policy and provides the permissions required to write locks to CloudWatch, select the policy and click next.
>
> **[2:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=163)** For now, you will skip tags.
>
> **[2:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=166)** Click next, provide a name for the role.
>
> **[2:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=174)** Then click create role.
>
> **[2:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=177)** You've created the role.
>
> **[2:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=178)** The next step is to attach IAM role to the EC2 instance you'd like to monitor.
>
> **[3:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=183)** Use the services dropdown and navigate to the EC2 service, on the left navigation pane, click instances and select the instance from which you'd like to collect metrics.
>
> **[3:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=197)** Then click the actions menu, click security, and then click modify IAM role, select the IAM role that you created earlier and click save.
>
> **[3:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=210)** The next step is to log in to the instance and download the agent package.
>
> **[3:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=214)** I'm already logged into the instance, you can download and install the agent, using an Amazon S3 download link or using SSM, which is the AWS system manager agent or using an AWS cloud formation template.
>
> **[3:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=228)** For this demonstration, you will use the Amazon S3 download link, provided in the AWS documentation.
>
> **[3:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=234)** I've got the document opened, scroll down the documentation and copy the download link for Windows servers, paste the link in the address bar and press enter.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=248)** Choose run when prompted.
>
> **[4:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=252)** You installed the package, the next step is to create a CloudWatch agent configuration file.
>
> **[4:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=257)** It is adjacent file that tells the agent the metrics and logs that it should collect.
>
> **[4:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=262)** Bear in mind, the agent can collect many metrics by using the adjacent file.
>
> **[4:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=268)** You can tell the agent which ones you're interested in.
>
> **[4:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=271)** You can create this file easily by invoking a wizard.
>
> **[4:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=274)** First open up PowerShell and use the CD command to navigate, to cdrive, program files, Amazon, Amazon CloudWatch agent folder, use the DIR command to view the available files.
>
> **[4:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=289)** The file we are interested in is the first one, Amazon CloudWatch agent config wizard.
>
> **[4:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=294)** Next invoke the wizard by entering the file name.
>
> **[5:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=300)** The wizard will ask you a few questions to create the config file.
>
> **[5:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=304)** The first question is, on which office are you planning to use the agent?
>
> **[5:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=308)** Select two for Windows.
>
> **[5:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=309)** Are you using EC2 or on premises hosts?
>
> **[5:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=313)** Select one for EC2.
>
> **[5:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=315)** Do you want to turn on StatsD demon?
>
> **[5:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=318)** You can use the StatsD protocol to send custom metrics, from your applications to CloudWatch.
>
> **[5:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=323)** In this case, you're only trying to send memory usage details, which is a host level metric.
>
> **[5:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=329)** So select no.
>
> **[5:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=331)** If you plan to watch other metrics such as the request count of your application, you will need to enable this.
>
> **[5:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=337)** The next question is, do you have any existing CloudWatch agent configuration file to import for migration?
>
> **[5:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=344)** Select two for no.
>
> **[5:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=345)** Do you want to monitor any host metrics such as CPU and memory?
>
> **[5:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=349)** Select one for yes.
>
> **[5:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=351)** Do you want to monitor a CPU metrics per core?
>
> **[5:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=354)** Select two for no.
>
> **[5:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=356)** Do you want to add EC2 dimensions such as image ID, instance ID and more?
>
> **[6:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=361)** Select one for yes.
>
> **[6:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=364)** Would you like to collect your metrics at high resolution?
>
> **[6:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=367)** Use option four to set it to the standard resolution of 60 seconds.
>
> **[6:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=372)** Which default metrics configure you want?
>
> **[6:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=375)** Choose basic.
>
> **[6:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=376)** This includes metrics related to memory and logical disk.
>
> **[6:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=380)** Please refer to the AWS documentation to know more about the metrics collected by the other levels.
>
> **[6:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=385)** Are you satisfied with the above config?
>
> **[6:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=388)** Select one for yes.
>
> **[6:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=390)** Do you want to monitor any customized log files?
>
> **[6:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=393)** Select two for no.
>
> **[6:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=395)** Do you want to monitor any Windows event log?
>
> **[6:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=397)** Select two for no.
>
> **[6:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=399)** Do you want to store the config in the SSM parameters store?
>
> **[6:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=403)** Select two for no, press enter to exit, use the DIR command again, the configuration has been stored in a file called config.json.
>
> **[6:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=413)** Now you'll run the agent by executing a PowerShell script, begin with .\ followed by the script name and follow it up with a few arguments.
>
> **[7:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=430)** The -M suite specifies that this is for EC2 and not on-premise.
>
> **[7:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=436)** The -C suite specifies the configuration file name.
>
> **[7:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=440)** The -S switch starts the agent.
>
> **[7:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=443)** The command is slightly different, if you're running this on a Windows server located in an on-premise environment, you will find it in the AWS documentation, press enter to execute the command.
>
> **[7:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=456)** The agent installation is successful.
>
> **[7:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=458)** Now you'll go back to the CloudWatch console to view the metrics.
>
> **[7:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=462)** I'm here at the CloudWatch console.
>
> **[7:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=465)** It can take a few minutes before you see the custom namespace and host level metrics.
>
> **[7:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=470)** I've got another instance running the CloudWatch agent, so we should see the namespace.
>
> **[7:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=475)** On the left navigation pane, click metrics.
>
> **[7:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=479)** Here is the namespace used by the agent, CW agent click the namespace.
>
> **[8:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=484)** Here, we can see two dimensions.
>
> **[8:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=486)** The first dimension has metrics related to logical disk.
>
> **[8:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=489)** And the second one has metrics related to memory.
>
> **[8:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=492)** This is because you selected the basic detail level when creating the configuration file, click the second dimension and select the metric for the desired instance.
>
> **[8:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=502)** Here we have the memory level metrics.
>
> **[8:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=505)** Now you can use these metrics to create a widget and add it to the dashboard or to create a CloudWatch alarm.
>
> **[8:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=511)** So you've understood how to install and use the CloudWatch agent, to collect custom metrics from your EC2 instances.
>
> **[8:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=517)** As you can imagine, this can have many use cases and simplifies your monitoring solution, by having all your logs in one place.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (14), aws (8), iam (5), cpu (3), ssm (2)
> **CLI Commands:** aws (8), find (3), cd (1)
> **UI Navigation:** select the (4), dropdown (2), navigate to (2), scroll down (1)
> **Analogies:** such as (6), just like (1), imagine (1)
> **Prerequisites:** install (3), configure (2)
> **Code Keywords:** let (1), case, (1), this. (1), switch (1)
> **Tools:** powershell (2)
> **Exercise Files:** download the (1), template (1)

#### Dashboards
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=0)** - [Instructor] While CloudWatch alarms provide a way to get notified when critical metrics reach a threshold, dashboards provide a unified view for selected metrics.
>
> **[0:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=9)** As you can imagine, this is useful for systems and operations administrators who desire to monitor critical metrics from a single view.
>
> **[0:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=17)** Dashboards allow you to assess the health of your resources and applications across one or more regions.
>
> **[0:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=23)** Dashboards are global, and there's no limit on how many you can create.
>
> **[0:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=28)** You can create dashboards from the AWS Management Console, AWS CLI and the API.
>
> **[0:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=34)** Now let's go to the CloudWatch console and learn how to create a dashboard.
>
> **[0:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=38)** You are now at the Amazon CloudWatch console.
>
> **[0:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=41)** Make a note that this is the new CloudWatch interface.
>
> **[0:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=44)** To switch to the old interface, use the option at the top right.
>
> **[0:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=48)** To create a new dashboard, on the left navigation pane click Dashboards, and then click Create dashboard.
>
> **[0:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=56)** Start by providing a name.
>
> **[1:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=60)** Note that dashboard name cannot have spaces.
>
> **[1:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=62)** Click Create dashboard.
>
> **[1:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=65)** The dashboard has been created, it's now time to add widgets.
>
> **[1:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=68)** And, as you can see, there are many different types of widgets that you can add such as Line, Stacked area, Number, Pie, Text, Logs table, Alarm status and more.
>
> **[1:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=81)** For the first widget, choose the number widget type.
>
> **[1:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=86)** Here, you will see the different namespaces based on usage in your account.
>
> **[1:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=90)** Select the EC2 namespace, and then click Per-Instance Metrics.
>
> **[1:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=95)** Bear in mind, that you will see the EC2 namespace only if you're using EC2 services in your account.
>
> **[1:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=103)** Select the CPU utilization metric for the instance you'd like to track.
>
> **[1:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=107)** This shows the value at the top.
>
> **[1:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=110)** The Graph metrics button allows you to change the color, label, statistic type and sampling period.
>
> **[1:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=117)** For example, to track the maximum CPU utilization for the instance, change the statistic type to maximum.
>
> **[2:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=124)** Similarly, you could change the sampling period to as little as 1 second and as high as 30 days.
>
> **[2:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=131)** Leave it set to 5 minutes and reset the statistic type to Average, then click Create widget.
>
> **[2:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=139)** You've added the widget to the dashboard.
>
> **[2:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=142)** Use the edit option to rename the title, then click Save dashboard.
>
> **[2:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=149)** Let's add one more widget that draws data from the log group you configured earlier to show top sources of traffic.
>
> **[2:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=156)** Click the Add widget button and choose the widget type as Logs table.
>
> **[2:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=162)** Use the dropdown, and select the log group you configured earlier.
>
> **[2:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=167)** Clear the default query, and replace it with a query to identify top sources of traffic.
>
> **[2:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=173)** Use the sum function to compute the total number of bytes per source address and save it as total traffic, then choose to sort in descending order and limit to top 10 entries.
>
> **[3:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=184)** Click Create widget, then click Save dashboard.
>
> **[3:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=191)** Widgets can be resized and moved around.
>
> **[3:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=194)** To resize, simply use the arrow that appears when you hover your mouse over the widget.
>
> **[3:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=200)** To move around, simply click and hold at the top of the widget and move it around.
>
> **[3:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=206)** When the dashboard is ready, click Save dashboard.
>
> **[3:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=210)** You can also add alarms configured in your account to the dashboard.
>
> **[3:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=214)** Click Add widget and select the Alarm status widget type.
>
> **[3:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=220)** From the list, select the desired alarm and click Create widget.
>
> **[3:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=226)** The dashboard name is preselected.
>
> **[3:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=228)** Provide a title for the widget, then click Add to dashboard.
>
> **[3:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=235)** I'll move this to the top and resize it, click Save dashboard.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=241)** To view the source code of this dashboard, use the Actions button and click View/Edit source.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=248)** You can copy the source code, and use it to build a new dashboard without having to build individual widgets.
>
> **[4:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=255)** Also, note that you have filters at the top that allow you to change the data interval.
>
> **[4:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=260)** If you have multiple dashboards, use the dropdown to switch to another dashboard.
>
> **[4:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=266)** It is also possible to view dashboards in full screen.
>
> **[4:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=270)** This option is useful when you'd like to display these on monitoring consoles, and you can also change the theme to dark.
>
> **[4:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=278)** So you've seen how to create widgets representing different types of metrics and add them to the dashboard.
>
> **[4:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=284)** As you've seen, there are many widget types and options available.
>
> **[4:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=287)** To appreciate the dashboard capabilities, I encourage you to play around with the different options.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (5), switch to (2), dropdown (2), go to (1)
> **Code Keywords:** let (2), interface (2), switch (2), type. (2), function (1)
> **Env Vars:** ec2 (3), aws (2), cpu (2), cli (1), api (1)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** imagine (1), such as (1), for example (1)
> **Warnings:** note that (3)
> **Exercise Files:** source code (2)
> **Speakers:** - [instructor] (1)

#### CloudTrail Logs
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=0)** - [Instructor] An essential tool in your arsenal for monitoring and logging activity is AWS CloudTrail.
>
> **[0:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=6)** CloudTrail provides event history for actions performed through the AWS Management Console, AWS SDKs, command-line tools and other AWS services.
>
> **[0:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=15)** With CloudTrail, you can identify who took which action, which resources were acted upon, and when the event occurred.
>
> **[0:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=23)** For organizations, this is important as it can track changes on resources, perform security analysis, identify unusual activity, and troubleshoot issues.
>
> **[0:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=33)** CloudTrail is automatically enabled when you create your AWS account.
>
> **[0:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=37)** AWS records activities occurring in your account as CloudTrail events.
>
> **[0:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=42)** In addition to this, you can also create trails that allow you to store events in an S3 bucket.
>
> **[0:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=48)** A trail is a configuration that enables the delivery of CloudTrail events to an Amazon S3 bucket, CloudWatch Logs, and CloudWatch events.
>
> **[0:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=57)** It is important to not confuse CloudTrail with CloudWatch Logs.
>
> **[1:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=61)** CloudTrail captures events from all services.
>
> **[1:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=64)** However, only a few services publish logs to CloudWatch Logs.
>
> **[1:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=68)** And unlike CloudWatch Logs, CloudTrail requires no configuration to view events.
>
> **[1:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=74)** Having said this, CloudTrail does integrate with CloudWatch Logs so you can search through your log data, identify suspicious events, and take remediation actions.
>
> **[1:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=85)** To get started, log into your AWS Management Console and use the Services drop-down menu to navigate to the CloudTrail service.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=93)** You will find this under the Management and Governance section.
>
> **[1:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=98)** Note that, by default, CloudTrail automatically records events occurring in your AWS account.
>
> **[1:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=103)** To view these events, use the hamburger menu on the left side and navigate to Event history.
>
> **[1:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=109)** This list contains events from the past 90 days.
>
> **[1:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=112)** To know more about an event, click on the Event name, doing social's information like the Event time, User name, Event name, Event source, and more.
>
> **[2:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=124)** Back to Event history, use the filters to narrow down to specific events.
>
> **[2:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=129)** First, select the required attribute.
>
> **[2:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=131)** Then, provide the desired value.
>
> **[2:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=135)** Now, you're looking at events that have matched your filters.
>
> **[2:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=138)** Note that you also have the option to download events in CSV or JSON format.
>
> **[2:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=143)** To store events beyond 90 days, you can create a trail.
>
> **[2:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=147)** A trail is a configuration that allows you to store events in an S3 bucket.
>
> **[2:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=151)** To create a trail, on the left navigation pane, click Trails.
>
> **[2:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=156)** Then, click Create trail.
>
> **[2:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=158)** Note the message at the top, "A trail created in the console is a multi-region trail."
>
> **[2:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=163)** So, the trail you're creating now will log events from all regions.
>
> **[2:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=167)** Use the CLI if you'd like to create a trail that only logs events from a single region.
>
> **[2:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=173)** However, note that AWS does not recommend doing so.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=176)** Start by providing a name for the trail.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=180)** If you're using AWS Organizations to manage multiple AWS accounts, and you want to use this trail for all accounts in your organization, enable this check box.
>
> **[3:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=190)** Next, you'll need to define the target S3 bucket.
>
> **[3:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=193)** You may use an existing bucket or create a new S3 bucket.
>
> **[3:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=198)** For this demonstration, select Create new S3 bucket.
>
> **[3:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=202)** Note that CloudTrail has automatically generated a bucket name.
>
> **[3:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=205)** By default, Amazon S3 encrypts your CloudTrail log files on the server side using AWS Key Management Service.
>
> **[3:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=213)** This capability is useful for storing sensitive data such as log files.
>
> **[3:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=217)** But for this demonstration, turn off server-side encryption.
>
> **[3:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=221)** You can use log file validation to ensure the integrity of your log files.
>
> **[3:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=225)** With the option turned on, CloudTrail will deliver log pages to your S3 bucket.
>
> **[3:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=230)** You can use the digest files to verify that your log files did not change after CloudTrail delivered them.
>
> **[3:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=236)** With SNS notification turned on, CloudTrail will notify you each time it delivers a log to your bucket.
>
> **[4:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=243)** When you enable CloudWatch Logs, CloudTrail will send log files to CloudWatch Logs.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=248)** Like you've seen earlier, you can use CloudWatch Logs to search through your log files, create custom metrics, and configure alarms.
>
> **[4:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=256)** For now, leave it unchecked.
>
> **[4:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=258)** Optionally, you may assign tags.
>
> **[4:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=260)** Tags can help you identify your trails and the S3 buckets that contain CloudTrail Log files.
>
> **[4:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=266)** So, on this step, you are good to proceed with a name for the trail and a destination S3 bucket, click Next.
>
> **[4:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=275)** In this step, you can define the type of events you want to log.
>
> **[4:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=278)** Management events capture management operations, also known as control plane operations.
>
> **[4:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=284)** Examples include operations that configure security and routing and user login.
>
> **[4:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=289)** Data events capture operations performed on or within a resource, for example, Amazon S3 object-level API activity, AWS Lambda function execution activity and more.
>
> **[5:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=301)** Insights events identify unusual activity by continuously analyzing CloudTrail management events.
>
> **[5:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=307)** CloudTrail logs these events only when it detects changes in your account's API usage that differs significantly from the account's typical usage patterns.
>
> **[5:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=316)** Bear in mind that, by default, a trail only captures management events.
>
> **[5:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=320)** Use these check boxes to specify which type of management events to capture, read, write, or both.
>
> **[5:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=328)** Click Next, review your selections and click Create trail.
>
> **[5:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=334)** The trail has been created.
>
> **[5:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=336)** In about 15 minutes, you will start seeing log files in the S3 bucket you specified.
>
> **[5:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=341)** So, you've seen how you can log account-level activities by creating a trail in CloudTrail.
>
> **[5:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=346)** When you combine this with CloudWatch, you will have a robust, always-on logging and monitoring system.

> [!info]- Semantic Content
>
> **Env Vars:** aws (13), api (2), csv (1), json (1), cli (1)
> **CLI Commands:** aws (13), find (1)
> **Code Keywords:** default, (3), this, (2), lambda (1), function (1)
> **Warnings:** note that (4), troubleshoot (1)
> **UI Navigation:** navigate to (2), click on (1), select the (1)
> **Definitions:** is a  (3), known as (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Analogies:** such as (1), for example (1)


### 3. 2. Configure Notifications

#### Configure Amazon SNS notifications
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=0)** - [Instructor] Amazon Simple Notification Service also known as SNS is a service that manages the delivery or sending of messages to subscribing end points or clients.
>
> **[0:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=10)** It provides both application to application and application to person communication.
>
> **[0:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=15)** A notification service is an important element of any monitoring solution.
>
> **[0:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=20)** As you'd want to be notified when significant events occur in your infrastructure.
>
> **[0:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=24)** It also allows you to decouple your applications into smaller independent components that are easier to develop and manage.
>
> **[0:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=32)** SNS has two types of clients, publishers and subscribers also known as producers and consumers.
>
> **[0:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=38)** Publishers asynchronously send messages to an SNS topic, which is a logical access point and communication channel.
>
> **[0:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=46)** Think of a topic as a broadcasting station, you can publish messages to the topic and anyone interested in these messages can subscribe to the topic.
>
> **[0:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=56)** Subscribers consume the message over one of the supported protocols, when they're subscribed to the topic.
>
> **[1:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=62)** Application-to-application messaging, support subscribers, such as AWS Lambda functions, Amazon SQS queues, HTTP or HTTPS endpoints, AWS Event Fork Pipelines and Amazon Kinesis Data Firehose delivery streams.
>
> **[1:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=77)** Application to person messaging provides notifications to subscribers such as mobile applications, mobile phone numbers and email addresses.
>
> **[1:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=87)** SNS is widely used with Amazon CloudWatch CloudWatch Alarms can be configured to send notifications to SNS topics which will then be received by subscribing endpoints.
>
> **[1:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=97)** To start using SNS, you create a topic and control access to it by defining policies that determine which publishers and subscribers can communicate with the topic.
>
> **[1:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=107)** A publisher sends messages to the topics that they have created, or to topics that they have permission to publish to.
>
> **[1:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=114)** The message is sent to a topic instead of directly sending to a specific destination address.
>
> **[1:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=119)** The topic is matched to a list of subscribers who have subscribed to that topic.
>
> **[2:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=124)** And the message is delivered to each of them.
>
> **[2:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=127)** To set up an SNS topic from the AWS Management Console, use the services dropdown menu and navigate to simple notification service.
>
> **[2:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=136)** You will find this under the application integration section to create a new topic on the left navigation pane, click topics, then click create topic.
>
> **[2:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=150)** There are two types of topics that you can create.
>
> **[2:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=152)** Let's first talk about standard topic.
>
> **[2:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=155)** Use the standard topic when message delivery order and message duplication are not critical.
>
> **[2:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=161)** All supported delivery protocols can subscribe to a standard topic.
>
> **[2:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=165)** This is the topic type you are most likely to use.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=168)** If you have a requirement to ensure strict message ordering and to prevent message duplication, you will use the FIFO topic.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=176)** Bear in mind that the only supported subscription protocol is SQS, SQS or Simple Queue Service is a message queuing service from AWS for this demonstration use standard, provide a name for the topic.
>
> **[3:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=194)** Note that all other settings are optional.
>
> **[3:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=197)** So to begin with you only need to provide a topic name.
>
> **[3:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=201)** The encryption setting allows you to enable server-side encryption at rest for your topic for now, leave it to disabled.
>
> **[3:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=209)** The access policy section allows you to define who can publish and subscribe to the topic.
>
> **[3:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=214)** By default only the topic owner can publish and subscribe to the topic for this demonstration, set the subscription setting to everyone.
>
> **[3:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=224)** Delivery retry policy allows you to configure how SNS retries field deliveries for HTTP and HTTPS end points for now, leave it to the default.
>
> **[3:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=235)** In the delivery status logging section, you can configure delivery status logging for these protocols.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=241)** For now, leave this at the default and skip tags, click create topic.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=248)** The topic has been created.
>
> **[4:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=250)** Note that it has an ARN or Amazon Resource Name, which you can use to publish messages to this topic programmatically, to subscribe to this topic under the subscription section, click create subscription.
>
> **[4:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=264)** From the list of protocols, select email, and then provide an email address as an end point.
>
> **[4:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=270)** Leave other settings at the default and click create subscription.
>
> **[4:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=274)** Note that the subscription status is pending confirmation to confirm your subscription, look for an email from AWS with a confirmation link, to publish a message to a topic, go back to the topic section, select the desired topic and click publish message.
>
> **[4:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=292)** Provide an optional subject and type in your message body.
>
> **[4:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=297)** Then click publish message.
>
> **[5:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=300)** SNS will now deliver the message to subscribing end points.
>
> **[5:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=304)** So you've understood how you can use SNS topics to deliver messages, to subscribing end points.
>
> **[5:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=310)** You can also use these SNS topics with CloudWatch Alarms that you created in the earlier videos.

> [!info]- Semantic Content
>
> **Env Vars:** sns (11), aws (5), sqs (3), http (2), https (2)
> **CLI Commands:** aws (5), find (1)
> **Definitions:** is a  (3), known as (2), is an  (1)
> **Code Keywords:** lambda (1), let (1), default. (1)
> **UI Navigation:** dropdown (1), navigate to (1), select the (1)
> **Warnings:** note that (3)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** such as (2)

#### Using Service Quotas
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=0)** - [Instructor] In addition to monitoring the usage of resources, CIS Ops administrators are also responsible for avoiding unintentional expense due to over usage.
>
> **[0:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=9)** In this regard, AWS provides a service known as service quotas.
>
> **[0:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=14)** Resources and actions in your AWS account have defined limits.
>
> **[0:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=18)** Also known as quotas, service quotas is an AWS service that allows you to monitor and manage your quotas.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=25)** With service quotas.
>
> **[0:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=27)** You can centrally manage your quotas from one location instead of going to multiple locations.
>
> **[0:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=32)** You can also easily manage quota increase requests and be alerted when quotas usage exceeds a specific threshold.
>
> **[0:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=40)** Each AWS service defines its quotas and has default values for those quotas.
>
> **[0:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=45)** For example for Amazon S3, a storage service in AWS, you have a limit of up to 100 buckets per account.
>
> **[0:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=53)** For Amazon VPC, you have a limit of five VPCs per region.
>
> **[0:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=58)** Similarly, each AWS service defines its quotas.
>
> **[1:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=62)** For many of the quotas.
>
> **[1:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=63)** AWS allows you to request an increase, to understand quotas in detail.
>
> **[1:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=68)** Let's go to the AWS management console.
>
> **[1:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=72)** From the AWS console, search for service quotas, and then click the service name.
>
> **[1:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=79)** The dashboard shows cards with quota information for different services.
>
> **[1:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=84)** To add or remove cards, click modify dashboard cards.
>
> **[1:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=88)** You can only have a maximum of nine cards.
>
> **[1:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=91)** So before adding new ones you'll need to remove existing cards, then add the required service and click save.
>
> **[1:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=100)** Click on a card to know more.
>
> **[1:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=102)** For example, here is a list of quotas for Amazon VPC.
>
> **[1:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=106)** As you can see, there are quite a few of them.
>
> **[1:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=110)** Here's the quota name, the applied quota value, the AWS default quotas value and information about whether the quotas is adjustable.
>
> **[1:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=119)** To request quotas increase, first select the desired quota name, and then click request quota increase, provide the desired quota value and then click request.
>
> **[2:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=131)** Smaller increases are automatically approved and larger requests are submitted to AWS support.
>
> **[2:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=137)** You can also create CloudWatch alarms to notify you when you close to a quota value threshold doing so can help you to plan ahead and request a quota increase if needed, bear in mind that you cannot create CloudWatch alarms for all quotas.
>
> **[2:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=151)** And unfortunately, AWS does not publish a list of quotas that support CloudWatch alarms.
>
> **[2:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=157)** Navigate back to the dashboard and click the card for AWS Lambda.
>
> **[2:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=163)** If you don't find a card for AWS Lambda, click AWS services on the left navigation pane, and then search for Lambda, then click the service name.
>
> **[2:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=174)** For this example, click the quota named concurrent executions.
>
> **[2:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=178)** This quota represents the maximum number of events that Lambda functions can process simultaneously in the current region.
>
> **[3:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=185)** Scrolling down, you will see the monitoring section and then a section for CloudWatch alarms.
>
> **[3:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=191)** To create a new alarm click create, define the alarm threshold and provide an alarm name.
>
> **[3:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=199)** Then click create, you've created the alarm, but as you may have noticed, you haven't configured any notifications for the alarm.
>
> **[3:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=208)** To configure a notification, click configure actions at the top doing so we'll navigate you over to the CloudWatch service and you will see the alarm configuration.
>
> **[3:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=222)** To configure a notification, click actions, and then click edit, leave the configuration unchanged and click next, scroll to the top and click add notification, associate an SNS topic and scroll down and click update alarm.
>
> **[4:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=244)** Now the alarm will trigger when the metric breaches, the configured threshold and SNS will notify subscribing end points.
>
> **[4:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=251)** As you've seen service quotas simplifies the management of your quotas by consolidating quotas values across multiple AWS services in a single location.
>
> **[4:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=261)** Service quotas was formerly known as service limits.
>
> **[4:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=264)** So you may see some AWS documentation still refer to it as service limits and service quotas is free to use from the AWS console, the AWS APIs, and the command line interface.

> [!info]- Semantic Content
>
> **Env Vars:** aws (19), vpc (2), sns (2), cis (1)
> **CLI Commands:** aws (19), find (1)
> **Code Keywords:** lambda (4), let (1), interface (1)
> **Definitions:** known as (3), is an  (1), is a  (1)
> **UI Navigation:** go to (1), click on (1), select the (1), scroll down (1)
> **Prerequisites:** configure (3), you'll need (1)
> **Tools:** aws console (2), command line (1)
> **Analogies:** for example (2)

#### Using AWS Health events
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=0)** - [Instructor] In the earlier videos we talked about, Amazon CloudWatch, a service that allows you to monitor health at the resource level.
>
> **[0:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=7)** AWS Health is an AWS service that allows you to monitor health at the service level.
>
> **[0:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=13)** It provides continuous visibility into your resource performance and availability of AWS services.
>
> **[0:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=19)** It also publishes events that you can use to learn how service and resource changes might affect your applications running on AWS.
>
> **[0:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=27)** This type of monitoring is critical because if an AWS service is affected, it will affect all your resources from that service.
>
> **[0:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=35)** With AWS Health, you can be aware of and prepare for planned activities.
>
> **[0:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=41)** The service is very easy to use when you're in the AWS management console search for personal health dashboard and click the service name, the dashboard requires no configuration and is ready to use.
>
> **[0:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=54)** The dashboard shows that there have been no open issues, no schedule changes, and no notifications from the past seven days.
>
> **[1:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=62)** To view a list of events that apply to your account on the left navigation pane click Event Log.
>
> **[1:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=69)** This shows the event name, the event status, event category, region and zone information, start time, last update time, and affected resources.
>
> **[1:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=80)** To know more about an event, click the event name.
>
> **[1:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=84)** AWS makes it easy to monitor for health events by configuring CloudWatch event rules, navigate back to the dashboard and click create rule doing so we'll open the CloudWatch service in a new browser tab.
>
> **[1:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=99)** You are now creating a new CloudWatch event rule, bare in mind that CloudWatch events is now Amazon Event Bridge.
>
> **[1:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=106)** So you can also configure this from the Amazon Event Bridge Console.
>
> **[1:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=110)** Let's configure a notification to alert when there is an operational issue or network connectivity issue with EC2.
>
> **[1:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=117)** You're currently on step one under the event source section, make sure event pattern is selected, from the service named dropdown, select health.
>
> **[2:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=128)** From the event type dropdown, select specific health events, select the radio button for specific services and from the dropdown select EC2, select the radio button for specific event type categories and from the dropdown select issue, select the radio button for a specific event type codes and from the dropdown select EC2 network connectivity issue and EC2 operational issue.
>
> **[2:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=157)** Note that you can select the radio button for specific resources and have the configuration apply only to specific EC2 resources.
>
> **[2:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=165)** For now, leave it set to any resource based on your selection.
>
> **[2:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=169)** CloudWatch builds an event pattern.
>
> **[2:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=171)** Next, you will configure a target scroll to the top and click add target.
>
> **[2:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=178)** Since we are creating this for alerting purposes from the drop-down set the target as SNS topic, then select the desired topic, scroll down and click configure details.
>
> **[3:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=191)** Provide a rule name, ensure that the state is enabled and click create rule.
>
> **[3:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=199)** You have created the rule when the EC2 service has an operational or network connectivity issue.
>
> **[3:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=204)** CloudWatch will notify subscribing end points.
>
> **[3:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=207)** So you've understood how you can use AWS Health to monitor service availability, and also configure notifications to alert you when specific service level issues or events occur.

> [!info]- Semantic Content
>
> **Env Vars:** aws (9), ec2 (6), sns (1)
> **UI Navigation:** dropdown (5), select the (5), open the (1), scroll down (1)
> **CLI Commands:** aws (9), make (1)
> **Prerequisites:** configure (5)
> **Warnings:** be aware (1), note that (1)
> **Code Keywords:** let (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is an  (1)


### 4. 3. AWS Config

#### Introduction to AWS Config
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=0)** - [Instructor] When you run production workloads in the AWS cloud, you may be required to record the state of your resources and detect changes to that state.
>
> **[0:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=8)** In this regard, AWS provides a service known as AWS Config.
>
> **[0:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=12)** AWS Config is a managed service that provides you an inventory of your AWS resources, configuration history, and configuration change notifications to enable security and governance.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=25)** With AWS Config, you can discover existing AWS resources, get notified when resources are created, modified, or deleted and continuously monitor and record configuration changes of your AWS resources.
>
> **[0:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=39)** This allows you to determine how a resource was configured at any point in time, you can also define rules for provisioning and configuring AWS resources, resource configurations that deviate from your rules automatically trigger SNS notifications and CloudWatch events.
>
> **[0:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=56)** You can also view relationships between resources, for example, how many EC1 instances use a specific security group?
>
> **[1:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=64)** And you can also export a complete inventory of your AWS resources with all configuration details.
>
> **[1:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=71)** Before we understand how AWS Config works, let's talk about some of the basic components, specifically we'll talk about configuration item, configuration history, configuration recorder, and config rules.
>
> **[1:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=85)** Let's begin with configuration item.
>
> **[1:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=87)** This represents a point in time view of the various attributes of a supported AWS resource.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=93)** It includes metadata, attributes, relationships, current configuration and related events.
>
> **[1:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=101)** AWS Config creates a configuration item whenever it detects a change to a resource type it is recording.
>
> **[1:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=108)** For example, if AWS Config is recording an Amazon S3 bucket, a configuration item is created when the bucket is created, updated or deleted.
>
> **[1:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=118)** The configuration item looks like this.
>
> **[2:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=120)** As you can see, it includes information such as account ID, ARN, or Amazon resource name, region, and availability zone, tags, and more.
>
> **[2:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=131)** Next is configuration history.
>
> **[2:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=133)** This is a collection of configuration items for a given resource over any period.
>
> **[2:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=138)** It is stored in an Amazon S3 bucket that you specify.
>
> **[2:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=142)** Configuration history can help you answer questions.
>
> **[2:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=144)** Like when was the resource first created?
>
> **[2:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=147)** How was the resource configured over the last month?
>
> **[2:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=150)** And what configuration changes were made last Monday?
>
> **[2:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=153)** Next is the configuration recorder.
>
> **[2:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=156)** This stores the configuration of supported resources in your account as configuration items.
>
> **[2:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=161)** Before you can start recording, you must first create and then start the configuration recorder.
>
> **[2:47](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=167)** Next is config rules.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=168)** A config rule represents the desired configuration settings for your AWS resources.
>
> **[2:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=174)** AWS Config provides predefined rules, and you can also create custom rules.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=180)** If a resource violates the rule, AWS Config flags the resource and the rule as noncompliant.
>
> **[3:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=186)** Rule evaluations are triggered when there is a configuration change or periodically based on a frequency you choose.
>
> **[3:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=193)** With an understanding of the basic components, let's now understand how AWS Config works.
>
> **[3:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=199)** When you turn on AWS Config, it first discovers the supported AWS resources in your account and generates a configuration item for each resource.
>
> **[3:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=208)** This is a point in time view of the resource.
>
> **[3:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=211)** It also generates a configuration item when the configuration of a resource changes, the service maintains a historical record of the configuration items from the time you start the configuration recorder.
>
> **[3:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=224)** By default, AWS Config generates a configuration item for every supported resource in the region.
>
> **[3:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=231)** It uses the describe API or list API call to keep track of all changes to your resources.
>
> **[3:57](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=237)** Imagine a couple of EC2 instances sharing a security group.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=241)** The security group has two inbound rules.
>
> **[4:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=244)** When you add a new rule to the security group, AWS Config invokes the describe API call on the security group.
>
> **[4:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=251)** It then invokes the described API call on all of the instances associated with the security group, the updated configuration of the security group, and the instances are recorded as configuration items and delivered to an S3 bucket.
>
> **[4:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=266)** AWS Config can also post changes to an SNS topic.
>
> **[4:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=270)** AWS Config supports key AWS resource types, such as Amazon EC2, Amazon S3, Amazon VPC, AWS IAM, or identity and access management, AWS Lambda, AWS cloud formation, Amazon CloudWatch, AWS cloud trail, and more, for a full list of supported AWS resources, please refer to the AWS Config documentation.
>
> **[4:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=298)** So you've understood how you can audit and maintain the configuration state of your AWS resources using AWS Config.
>
> **[5:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=305)** Now it's time to configure some rules and set it up.
>
> **[5:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=308)** That's what we'll do in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** aws (33), api (4), sns (2), ec2 (2), ec1 (1)
> **CLI Commands:** aws (33)
> **Code Keywords:** let (3), this. (1), default, (1), lambda (1)
> **Definitions:** is a  (4), known as (1)
> **Analogies:** for example (2), such as (2), imagine (1)
> **Prerequisites:** required to (1), configure (1)
> **Speakers:** - [instructor] (1)

#### Setting up AWS Config
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=0)** - [Tutor] Let's walk through the steps needed to set up AWS Config.
>
> **[0:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=4)** From the AWS Management Console, use the Services dropdown and navigate to Config.
>
> **[0:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=11)** You will find this under the Management and Governance section.
>
> **[0:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=16)** From the AWS Config console, click Get started.
>
> **[0:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=20)** By default, AWS Config records all supported resources in the region.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=25)** To change this, set it to record specific resource types.
>
> **[0:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=29)** For this example, we'll configure it to record EC2 instances and EC2 SecurityGroups From the Resource type dropdown, search for EC2, and select EC2 Instance and EC2 SecurityGroup.
>
> **[0:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=42)** AWS Config needs permissions to call other AWS services.
>
> **[0:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=46)** And for that, you'll need to assign a role.
>
> **[0:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=49)** To keep it simple, choose to use an existing AWS Config service-linked role.
>
> **[0:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=54)** Note that, you can also define the role yourself and add it here.
>
> **[0:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=58)** Next, you need to provide an S3 bucket to store configuration history.
>
> **[1:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=63)** You can create a new bucket or choose a bucket from your account or from another account.
>
> **[1:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=69)** Choose the option to create a bucket and provide a bucket name.
>
> **[1:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=75)** Use this check box to send configuration changes and notifications to an SNS topic.
>
> **[1:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=81)** Use the option to choose a topic from your account and provide an existing topic name.
>
> **[1:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=86)** If you don't have an existing topic, use this option to create a new topic.
>
> **[1:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=91)** Click Next.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=93)** In this step, you can configure remediation rules.
>
> **[1:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=96)** For now, you will skip this.
>
> **[1:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=99)** Click Next.
>
> **[1:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=101)** Review the settings and click Confirm.
>
> **[1:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=105)** Click to close the popup.
>
> **[1:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=108)** Recording is now on, and AWS Config is discovering resources from your account.
>
> **[1:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=113)** This process could take some time.
>
> **[1:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=115)** In another region, I've already set up AWS Config with the same configuration settings.
>
> **[2:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=121)** I'll now switch to the other region.
>
> **[2:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=125)** To view discovered resources, on the left navigation pane, click Resources.
>
> **[2:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=130)** Doing so we'll show you a list of discovered resources.
>
> **[2:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=134)** To see more details, click the resource identifier.
>
> **[2:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=138)** Doing so shows the resource metadata.
>
> **[2:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=141)** Scroll down to see the configuration item.
>
> **[2:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=145)** By scrolling down the configuration item, you will see the relationships of this resource.
>
> **[2:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=150)** For example, this EC2 instance, is contained in a VPC, is associated with a security group, contains a network interface is contained in a sub-net, and is attached to an EBS volume.
>
> **[2:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=163)** To view events associated with the resource, scroll to the top and click Resource timeline.
>
> **[2:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=169)** Expand an event to know more.
>
> **[2:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=172)** For example, this event has recorded an AsumeRole action.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=176)** To view more details about the event, click here.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=180)** Doing so we'll open the event details in CloudTrail.
>
> **[3:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=183)** So you've understood how you can configure AWS Config to discover resources in your AWS account and audit changes occurring on them.
>
> **[3:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=192)** Now it's time to configure rules that represent desired configuration settings.
>
> **[3:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=197)** That's what we'll do in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** aws (11), ec2 (6), sns (1), vpc (1), ebs (1)
> **CLI Commands:** aws (11), find (1)
> **Prerequisites:** configure (4), set up (2), you'll need (1)
> **Code Keywords:** let (1), default, (1), this, (1), this. (1), switch (1)
> **UI Navigation:** dropdown (2), navigate to (1), switch to (1), scroll down (1), open the (1)
> **Analogies:** for example (2)
> **Warnings:** note that (1)
> **Speakers:** - [tutor] (1)

#### AWS Config managed rules
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=0)** - [Instructor] AWS Config allows you to discover your AWS resources and also evaluate their configuration settings.
>
> **[0:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=7)** AWS Config uses rules to evaluate compliance.
>
> **[0:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=10)** These rules represent the ideal configuration state of your resources.
>
> **[0:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=15)** AWS Config supports two types of rules.
>
> **[0:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=17)** First is managed rules.
>
> **[0:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=19)** These are predefined rules that you can customize.
>
> **[0:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=22)** And second is custom rules.
>
> **[0:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=23)** These are defined by the user.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=25)** For example, you can configure an AWS Config rule to check if an EBS volume is encrypted.
>
> **[0:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=32)** If the volume is not encrypted, AWS Config will flag the volume and the rule as noncompliant.
>
> **[0:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=38)** With this understanding, let's go to the AWS Management Console and learn how to configure a Config rule.
>
> **[0:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=44)** We'll configure a rule to evaluate EC2 instances and identify those that are not of type t3.micro, and mark them as noncompliant.
>
> **[0:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=54)** From the AWS Config dashboard, on the left navigation pane, click Rules.
>
> **[1:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=60)** Then click Add rule.
>
> **[1:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=62)** Here are the two rule types that we spoke about.
>
> **[1:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=65)** AWS manage rule and custom rule.
>
> **[1:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=68)** With AWS managed rule selected, search for EC2.
>
> **[1:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=72)** This shows rules that apply to EC2 instances.
>
> **[1:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=75)** And as you can see, there are quite a few.
>
> **[1:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=78)** Select the rule named desired-instance-type.
>
> **[1:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=81)** It checks whether your EC2 instances are of the specified instance type.
>
> **[1:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=86)** This rule will allow us to achieve the objective of checking for instances that are not of type t3.micro.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=93)** Click Next.
>
> **[1:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=95)** It auto fills the name and description for us.
>
> **[1:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=98)** Make a note that the trigger for this rule is a configuration change.
>
> **[1:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=101)** This means the rule will run when there are changes to resources.
>
> **[1:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=105)** There are three options available to define the scope of changes.
>
> **[1:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=109)** This setting determines when evaluations will occur.
>
> **[1:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=112)** When you set it to all changes, the rule will evaluate when any resource recoded by AWS Config is created, changed or deleted.
>
> **[2:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=121)** When you set it to resources, the rule will evaluate when a resource matching the type you specify is created, changed or deleted.
>
> **[2:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=129)** When you set it to tags, the rule will evaluate when a resource with the specified tag is created, changed or deleted.
>
> **[2:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=137)** For this example, set it to resources.
>
> **[2:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=140)** Note that the service has automatically set the resource type to AWS EC2 instance.
>
> **[2:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=146)** This is based on the manage rule you selected earlier.
>
> **[2:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=150)** Rule parameter allows you to specify the attributes for which the resource will be evaluated.
>
> **[2:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=155)** This rule checks for the desired instance type, so the attribute to evaluate is InstanceType.
>
> **[2:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=161)** Set the desired InstanceType as t3.micro.
>
> **[2:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=165)** Note that you can also add additional key-value pairs.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=168)** Click Next.
>
> **[2:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=169)** Review your selections and click Add rule.
>
> **[2:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=173)** Here's the configured rule.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=176)** AWS Config also allows you to remediate noncompliant resources.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=180)** Let's also add remediation capabilities to this rule.
>
> **[3:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=183)** This will ensure that any EC2 instance that is not of type t3.micro will be automatically resized.
>
> **[3:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=189)** Select the rule that you just created, click the Actions button, and then click Manage remediation.
>
> **[3:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=196)** There are two remediation methods available.
>
> **[3:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=199)** Automatic remediation and manual remediation.
>
> **[3:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=202)** Here you can select the remediation action.
>
> **[3:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=205)** Make a note of the message.
>
> **[3:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=207)** AWS Config applies remediation using AWS Systems Manager Automation.
>
> **[3:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=211)** Systems Manager Automation is an AWS service that allows you to automate operational tasks on your AWS resources.
>
> **[3:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=218)** Like in this case, automatically resize noncompliant EC2 instances.
>
> **[3:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=223)** From the remediation action dropdown, select ResizeInstance.
>
> **[3:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=230)** Scroll down to the resource ID parameter section.
>
> **[3:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=233)** From the dropdown, select InstanceId.
>
> **[3:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=236)** Doing so will cause the InstanceId to be automatically added to the remediation action.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=241)** Under the parameters section, specify the desired InstanceType as t3.micro.
>
> **[4:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=246)** The InstanceType you specified when you created the rule was the expected value to identify noncompliant resources.
>
> **[4:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=253)** The InstanceType you specify here is the desired value for noncompliant resources.
>
> **[4:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=259)** Click Save changes.
>
> **[4:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=261)** The rule has been evaluated and there is one noncompliant resource.
>
> **[4:26](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=266)** Click the rule name to know more.
>
> **[4:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=268)** Scroll to the bottom to see the noncompliant resource.
>
> **[4:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=271)** To remediate the resource, select the resource ID and then click Remediate.
>
> **[4:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=277)** Note that the status has changed to action execution queued.
>
> **[4:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=281)** Now AWS Config will resize the instance to t3.micro.
>
> **[4:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=285)** Apart from AWS Config managed rules, we can also configure custom rules.
>
> **[4:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=290)** Each custom rule must be associated with an AWS Lambda function to perform the required actions.
>
> **[4:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=296)** So you've seen how you can use AWS Config to automatically discover your AWS resources, evaluate them for compliance and remediate them.
>
> **[5:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=304)** As you can imagine, this can be an important tool in your kit to ensure the security and compliance of your AWS resources.

> [!info]- Semantic Content
>
> **Env Vars:** aws (23), ec2 (7), ebs (1)
> **CLI Commands:** aws (23), make (2)
> **Code Keywords:** let (2), type. (2), type, (1), case, (1), lambda (1)
> **UI Navigation:** select the (4), dropdown (2), go to (1), scroll down (1)
> **Warnings:** note that (4)
> **Prerequisites:** configure (4)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), imagine (1)


### 5. 4. Taking Action

#### Introduction to Amazon EventBridge
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=0)** - [Instructor] So far in this course, we've talked about various ways to monitor your resources and applications.
>
> **[0:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=6)** Now we'll shift gears a bit and talk about taking actions using data collected from monitoring.
>
> **[0:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=11)** In this regard, let's talk about Amazon EventBridge.
>
> **[0:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=15)** Amazon EventBridge is a serverless event bus service that connects your applications with data from different sources.
>
> **[0:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=22)** These sources maybe your own applications or SAS applications such as Shopify or AWS services.
>
> **[0:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=29)** It routes data to targets such as AWS Lambda or Amazon Kinesis or an event bus in another account.
>
> **[0:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=37)** Since this is an event of an architecture, it enables developers to build decoupled applications resulting in greater scalability and flexibility.
>
> **[0:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=46)** It also allows operations teams to respond quickly to changes and take corrective action.
>
> **[0:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=51)** They can do this by writing rules to indicate which events are of interest and what actions to take when a rule matches an event.
>
> **[0:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=59)** EventBridge was formally called Amazon CloudWatch Events.
>
> **[1:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=63)** So any configuration you made earlier in CloudWatch Events, is also displayed in the EventBridge console.
>
> **[1:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=70)** Before we learn how to configure EventBridge, let's talk about a few concepts.
>
> **[1:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=74)** Specifically, we'll talk about events, rules, targets, and event bus.
>
> **[1:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=80)** Let's first talk about events.
>
> **[1:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=82)** Events indicate changes in an environment.
>
> **[1:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=85)** This can be an AWS environment, a SaaS partner application, or your own custom application.
>
> **[1:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=92)** Examples of events include change in the state of an EC2 instance, or change in the state of a cloud watch alarm or bucket level operations performed in Amazon S3 such as create bucket, delete bucket, and more.
>
> **[1:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=106)** Next we have rules.
>
> **[1:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=108)** A rule matches incoming events and routes them to targets for processing.
>
> **[1:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=112)** A single rule can route to multiple targets in parallel.
>
> **[1:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=116)** For example, a rule can route an event to an Amazon API gateway and an SNS topic in parallel.
>
> **[2:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=123)** Next, we have targets.
>
> **[2:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=124)** These are responsible for processing events.
>
> **[2:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=127)** Examples include Lambda functions, Kinesis streams, SNS topics, SQS Queues, and more.
>
> **[2:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=134)** For a full list of supported target, please refer to the EventBridge documentation.
>
> **[2:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=140)** Next we have event bus.
>
> **[2:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=141)** An event bus receives events.
>
> **[2:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=143)** After creating a rule, you associate it with a specific event bus and the rule is matched only to the events received by that event bus.
>
> **[2:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=151)** Now let's tie these concepts together with an example.
>
> **[2:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=155)** Let's say you have an application server hosted on an EC2 instance that always needs to be in the running state.
>
> **[2:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=161)** You have an EventBridge event bus that receives events from the Amazon EC2 service.
>
> **[2:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=166)** You've configured a rule that looks for events describing a change in state for EC2 instances.
>
> **[2:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=172)** The rule matches when the state of the application server changes to stop.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=176)** When matched, the rule invokes a Lambda function and also notifies an SNS topic.
>
> **[3:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=182)** The Lambda function will then restart the instance and move it to the running state.
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=187)** As you can see, EventBridge allows you to connect applications using events, and it does this without writing code.
>
> **[3:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=193)** And since the architecture is loosely coupled, it improves application resiliency.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (4), aws (3), sns (3), sas (1), api (1)
> **Code Keywords:** let (5), lambda (4), function (2), delete (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** aws (3)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Configure Amazon EventBridge
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=0)** - Let's now configure an Amazon EventBridge rule that will notify when a critical server is shut down.
>
> **[0:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=6)** You have a critical application server hosted on an EC2 instance, that always needs to be running.
>
> **[0:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=12)** You will configure EventBridge to send a notification using SNS, if the server is shut down.
>
> **[0:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=18)** To begin, copy the instance ID of the server.
>
> **[0:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=21)** You will use this later, when you configure EventBridge.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=25)** Use the services dropped on menu and navigate to the Amazon EventBridge service.
>
> **[0:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=30)** You will find this under the application integration section.
>
> **[0:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=33)** By default EventBridge has one event bus.
>
> **[0:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=36)** To see this, click event passes on the left navigation pane.
>
> **[0:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=40)** Here is the default event bus.
>
> **[0:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=42)** Event buses are responsible for receiving events from various sources.
>
> **[0:46](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=46)** We'll use this for the rule.
>
> **[0:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=48)** On the left navigation pane, click Rules.
>
> **[0:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=51)** Note that the default event bus is selected.
>
> **[0:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=55)** Click create rule.
>
> **[0:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=56)** Provide a name for the rule.
>
> **[1:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=60)** Note that spaces aren't allowed in the name.
>
> **[1:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=63)** In an earlier video, we understood that Amazon EventBridge was formerly known as Amazon CloudWatch events.
>
> **[1:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=69)** So if you have configured CloudWatch events, you will find similarity in the configuration steps here.
>
> **[1:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=75)** Under the defined pattern section, you can choose from an event pattern or schedule to invoke your targets.
>
> **[1:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=81)** Since the shutdown event can occur anytime, or in other words it doesn't have a schedule, select event pattern.
>
> **[1:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=89)** Select predefined pattern by service.
>
> **[1:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=92)** From the service provider dropdown, select AWS.
>
> **[1:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=95)** From the service name dropdown, search and select EC2.
>
> **[1:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=100)** From the event type dropdown, select EC2 instance state change notification.
>
> **[1:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=105)** For this configuration, We want the EventBridge service to notify us, when the app server is shutdown.
>
> **[1:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=111)** Or in other words, when the state of the server is stopped.
>
> **[1:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=115)** So select specific state and from the dropdown, set the state to stop.
>
> **[2:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=120)** If you set it to any instance, EventBridge we'll notify you when the state of any server changes to stop.
>
> **[2:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=126)** But in this case, we're concerned about the app server.
>
> **[2:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=130)** So select specific instance IDs and provide the instance ID you copied earlier.
>
> **[2:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=136)** Note that, based on your selections, the service has created an event pattern.
>
> **[2:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=142)** Also note that under the select event per section, the AWS default event bus is selected and the rule will be enabled on the selected event bus.
>
> **[2:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=152)** Under the select target section, use the dropdown and set the target as SNS topic.
>
> **[2:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=158)** Select the desired SNS topic.
>
> **[2:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=161)** Note that you can also add more than one target.
>
> **[2:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=164)** Scroll down and click Create.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=168)** You've created the rule.
>
> **[2:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=170)** Now the rule will trigger and perform the configured action, when the state of the server changes to stopped.
>
> **[2:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=176)** As you've seen, it is easy to create an EventBridge rule.
>
> **[2:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=179)** While having a mechanism that monitors and notifies is great, wouldn't it help to have a configuration that automatically restart the server if it is shut down?
>
> **[3:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=188)** we'll configure that in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** ec2 (3), sns (3), aws (2)
> **UI Navigation:** dropdown (5), navigate to (1), select the (1), scroll down (1)
> **Warnings:** note that (5)
> **CLI Commands:** find (2), aws (2)
> **Prerequisites:** configure (4)
> **Code Keywords:** let (1), this, (1), case, (1)
> **Definitions:** in other words (2), known as (1)
> **Speakers:** - let (1)

#### Lambda in response to CloudWatch alarms
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=0)** - [Instructor] While having a notification capability is vital for a monitoring solution.
>
> **[0:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=4)** Having the ability to respond and take remediation actions can improve the availability of the application.
>
> **[0:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=10)** In the last video, you configured an EventBridge rule that sends notification when a critical app server is shut down.
>
> **[0:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=17)** Now, you'll configure a lambda function that will automatically restart the server.
>
> **[0:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=22)** AWS Lambda is a compute service that lets you run code without managing servers.
>
> **[0:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=27)** So you can provide the code to Lambda and it will take care of the infrastructure needed to run the code.
>
> **[0:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=33)** First, you will create the lambda function and then add it as a target for your EventBridge rule.
>
> **[0:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=39)** From the AWS Management Console, use the Services dropdown and navigate to the Lambda service.
>
> **[0:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=45)** You will find this under the Compute section.
>
> **[0:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=49)** Lambda organizes code as functions.
>
> **[0:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=52)** Click Create Function.
>
> **[0:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=53)** Select the option to author from scratch and provide a function name.
>
> **[0:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=59)** Use the Runtime dropdown and set it to Python 3.8.
>
> **[1:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=64)** Next, you will need to assign an execution role.
>
> **[1:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=67)** Doing so will provide the lambda function the permissions to perform actions on the app server.
>
> **[1:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=72)** In this case, the lambda function needs permissions to reboot the app server.
>
> **[1:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=76)** Select the option to use an existing role.
>
> **[1:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=79)** And select an IAM role that provides the required permissions.
>
> **[1:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=83)** The IAM role should provide permissions to the lambda function to reboot EC2 instances.
>
> **[1:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=89)** You will find more information about how to create the IAM role in the AWS documentation.
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=94)** Click Create Function.
>
> **[1:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=98)** The function has been created.
>
> **[1:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=99)** Now, it's time to add the code.
>
> **[1:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=101)** Double-click Lambda_function.PY.
>
> **[1:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=104)** Delete the default code and add the code to reboot EC2 instances.
>
> **[1:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=109)** This code is available in the AWS documentation.
>
> **[1:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=113)** Note that the code includes the region code and the instance ID of the app server.
>
> **[1:59](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=119)** Click Deploy, navigate to the Configuration tab.
>
> **[2:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=122)** And from the general configuration section, click Edit.
>
> **[2:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=127)** Set the memory to 256 MB and increase the timeout value.
>
> **[2:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=134)** Then click Save.
>
> **[2:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=137)** You've created the lambda function.
>
> **[2:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=138)** Now, it's time to edit the EventBridge rule and add the lambda function as a target.
>
> **[2:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=144)** Use the Services dropdown and navigate to the Amazon EventBridge service.
>
> **[2:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=149)** On the left navigation pane, click Rules.
>
> **[2:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=152)** Select the rule you created earlier and click Edit.
>
> **[2:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=158)** Scroll down to the select target section and click Add Target.
>
> **[2:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=162)** Set the target type to lambda function and select the function you created earlier.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=168)** Note that the SNS topic you configured earlier is also a target.
>
> **[2:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=173)** So if the app server is shut down, the service will post to the SNS topic and also invoke the lambda function.
>
> **[3:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=180)** Scroll down and click Update.
>
> **[3:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=184)** Time to test. Navigate to the EC2 service.
>
> **[3:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=189)** And on the left navigation pane, click Instances.
>
> **[3:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=193)** Select the instance for which you configured the EventBridge rule.
>
> **[3:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=197)** Then click Instance State and click Stop Instance.
>
> **[3:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=202)** Click Stop to confirm.
>
> **[3:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=205)** Now, EC2 is stopping the instance.
>
> **[3:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=207)** We'll wait for a few seconds for the state of the instance to change.
>
> **[3:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=213)** It's been a few seconds.
>
> **[3:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=214)** The instance has stopped and is now rebooting.
>
> **[3:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=218)** So you've seen how to use EventBridge to build a system that constantly monitors your applications, sends notifications when changes occur, and self heals in response to changes.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), lambda (13), case, (1), delete (1), self (1)
> **UI Navigation:** select the (5), navigate to (4), dropdown (3), scroll down (2), double-click (1)
> **Env Vars:** aws (4), ec2 (4), iam (3), sns (2)
> **CLI Commands:** aws (4), find (2), python (1)
> **Warnings:** note that (2)
> **File Paths:** lambda_function.py (1)
> **Versions:** python 3 (1)
> **Cross-References:** in the last (1)

#### Understand AWS Systems Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=0)** - [Instructor] AWS Systems Manager is an AWS service that allows you to view operational data from multiple AWS services and automate operational tasks.
>
> **[0:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=10)** You can use Systems Manager to essentially define the configuration options and policies for your managed instances.
>
> **[0:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=17)** A managed instance is a machine configured for use with Systems Manager.
>
> **[0:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=21)** You can identify resources that are out of compliance and take corrective action.
>
> **[0:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=25)** You can automate a variety of maintenance tasks such as patching your managed instances.
>
> **[0:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=31)** You can also create runbook-style documents that define the actions to perform on your managed instances.
>
> **[0:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=37)** You can group AWS resources together using different attributes, such as application, region, project, and more.
>
> **[0:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=45)** You can automatically collect inventory information about your Amazon EC2 instances and on-premises managed instances.
>
> **[0:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=52)** Inventory information includes metadata, such as applications, network configuration, and more.
>
> **[0:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=58)** Systems Manager groups these capabilities into five categories, operations management, application management, change management, node management, and shared resources.
>
> **[1:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=70)** We'll see this in a moment when we get to the AWS Console.
>
> **[1:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=74)** Systems Manager provides an agent known as the Systems Manager agent that you can install on EC2 instances, on-premises servers and virtual machines.
>
> **[1:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=83)** Systems Manager was earlier known as Simple Systems Manager or SSM.
>
> **[1:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=88)** So some of the documentation may still refer to the agent as an SSM agent.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=93)** It is with this agent that systems manager updates, manages and configures your resources.
>
> **[1:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=99)** You can install the SSM agent on Linux, Mac OS, and Windows operating systems.
>
> **[1:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=105)** For specific operating system versions, please refer to the AWS documentation.
>
> **[1:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=110)** Some Amazon machine images or AMIs have the Systems Manager agent pre-installed on them, but for others, including on-premises servers, you will need to install the agent manually.
>
> **[2:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=121)** You will find the list of these AMIs in the AWS documentation.
>
> **[2:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=126)** Now let's go to the AWS Management Console and learn how to set up Systems Manager.
>
> **[2:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=132)** From the AWS Management Console, use the services drop down menu and navigate to the Systems Manager service.
>
> **[2:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=139)** You will find this under the management and governance section.
>
> **[2:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=144)** Click get started with Systems Manager.
>
> **[2:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=148)** Doing so invokes the quick set of functionality that allows you to configure the required security roles and commonly used capabilities on your EC2 instances.
>
> **[2:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=156)** First, you will need to create a new configuration.
>
> **[2:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=160)** Click create.
>
> **[2:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=162)** Make a note of the different categories that we spoke about, operations management, application management, change management, node management, and shared resources.
>
> **[2:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=173)** At this time, there are three types of configuration that you can create, host management, config recording, and distributor.
>
> **[3:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=182)** Select host management and click next.
>
> **[3:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=185)** Here you can configure systems manager to update SSM agent every two weeks, collect inventory information from your instances every 30 minutes and scan instances for missing patches daily.
>
> **[3:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=197)** You can also configure it to install and configure the CloudWatch agent.
>
> **[3:21](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=201)** We spoke about this earlier in the course, and you can also configure it to update the agent once every 30 days.
>
> **[3:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=208)** Next, you need to configure the targets on which you want to apply this configuration.
>
> **[3:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=213)** Note that you can apply to the current region or choose the required regions.
>
> **[3:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=217)** For this demonstration, select current region.
>
> **[3:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=221)** For target instances, you can select all instances or specific instance tags, resource groups, or manually select the required instances.
>
> **[3:51](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=231)** Select manual.
>
> **[3:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=232)** Doing so will show you instances from the current region.
>
> **[3:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=236)** Select the desired instances, then click create.
>
> **[4:01](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=241)** Doing so will begin the deployment.
>
> **[4:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=243)** Here we can see the deployment and association status.
>
> **[4:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=247)** Note that this deployment can take a few minutes.
>
> **[4:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=251)** About a minute later, the deployment has completed.
>
> **[4:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=254)** This means SSM has deployed the agent on the instance.
>
> **[4:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=258)** To see a list of managed instances, on the left navigation pane, under the node management section, click fleet manager.
>
> **[4:27](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=267)** The instances on which you deploy the agent will show up here shortly.
>
> **[4:31](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=271)** On-premises servers or virtual machines with SSM agents will also be listed here.
>
> **[4:36](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=276)** This list will also include virtual machines in other cloud environments.
>
> **[4:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=281)** To install the systems manager agent on on-premise servers or virtual machines, on the left navigation pane, under the node management section, click hybrid activations.
>
> **[4:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=292)** Then click create an activation.
>
> **[4:55](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=295)** Here you can specify the instance limit.
>
> **[4:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=298)** This is the total number of servers and virtual machines you want to register.
>
> **[5:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=302)** Then you need to provide an IAM role.
>
> **[5:04](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=304)** Doing so allows the servers and virtual machines to communicate with the Systems Manager service.
>
> **[5:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=310)** You only need to do this once for each AWS account.
>
> **[5:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=313)** Select the option to use the default role created by the system.
>
> **[5:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=317)** Then click create activation.
>
> **[5:20](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=320)** Doing so we'll show the activation code and activation ID.
>
> **[5:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=324)** Make a note of this as you cannot access this again, and you will need this when installing the agent.
>
> **[5:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=330)** The next step is to install the Systems Manager agent on your servers and virtual machines.
>
> **[5:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=335)** The installation steps vary and will depend on the operating system.
>
> **[5:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=339)** You will find the installation steps in the AWS documentation.
>
> **[5:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=343)** Once you've installed the agent, you will see the instances under fleet manager.
>
> **[5:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=348)** Installing the agent is only the first step.
>
> **[5:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=350)** The agent allows you to view inventory and compliance information and take actions from the console.
>
> **[5:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=356)** We'll see this in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** aws (11), ssm (6), ec2 (3), iam (1)
> **CLI Commands:** aws (11), node (4), find (3), make (2)
> **Prerequisites:** install (6), configure (6), set up (1)
> **UI Navigation:** select the (3), go to (1)
> **Definitions:** is an  (1), is a  (1), known as (1)
> **Analogies:** such as (3)
> **Warnings:** note that (2)
> **Code Keywords:** let (1)

#### Remediate using AWS Systems Manager
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=0)** - [Instructor] Now that you've installed SSM Agents on your hosts, it is time to manage them with Systems Manager.
>
> **[0:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=6)** First, let's start with Fleet Manager.
>
> **[0:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=9)** As you know, this shows a list of your managed instances.
>
> **[0:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=12)** To know more about an instance, simply click the instance ID.
>
> **[0:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=17)** This shows an overview of the instance with options to view file system, windows registry, event logs, performance counters, and users and groups.
>
> **[0:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=28)** For Linux machines, you will not see the options for registry and event logs.
>
> **[0:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=33)** You can connect to your instance right from here, click Instance actions, and then click Start session.
>
> **[0:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=40)** You are now connected and you can start executing commands.
>
> **[0:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=44)** Connecting to on premises instances requires you to be in the advanced instances tier.
>
> **[0:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=49)** You will find more information about this in the AWS documentation.
>
> **[0:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=54)** Back to the systems manager console on the left navigation pane under the node management section click Inventory.
>
> **[1:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=63)** Here on the dashboard, you will find basic inventory information such as top five operating systems, applications, server roles, and services.
>
> **[1:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=74)** With systems manager, you can also patch your instances on demand or schedule a patch job.
>
> **[1:19](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=79)** On the left navigation pane, click Patch Manager.
>
> **[1:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=83)** To patch on demand, click Patch now, select a patching operation, scan for missing patches or scan and install missing patches.
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=94)** Then select the instances to patch and optionally provide an S3 bucket to store patching operation logs.
>
> **[1:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=102)** Then click Patch now to initiate the patching operation.
>
> **[1:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=105)** You can also run commands on your instances.
>
> **[1:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=108)** To do so, on the left navigation pane, click Run Command, then click Run Command again.
>
> **[1:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=116)** Doing so we'll show a list of command documents that you can execute and they're supportive platform types.
>
> **[2:03](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=123)** For this demonstration, search for windows.
>
> **[2:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=128)** From the list of documents, select FindWindowsUpdates.
>
> **[2:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=132)** This document will list missing windows updates.
>
> **[2:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=136)** Scroll down to the target section and select the options to choose instances manually.
>
> **[2:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=142)** Then select the desired instances.
>
> **[2:24](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=144)** Scroll down and provide the timeout value in seconds and for this demonstration, disable the option to write output to an S3 bucket, click Run, the command execution is in progress.
>
> **[2:40](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=160)** Click refresh, the status has changed to success, select a target and click View output.
>
> **[2:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=168)** Expand the output section.
>
> **[2:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=170)** Here you can see that a few updates are missing and by scrolling down, you can see the details of the missing updates.
>
> **[2:58](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=178)** For this one command, you've used an AWS defined document.
>
> **[3:02](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=182)** It is also possible to create your own documents.
>
> **[3:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=185)** To do so, on the left navigation pane under the shared resources section, click Documents, then click Create document and select the type as command or session.
>
> **[3:17](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=197)** You can specify the document content in JSON or YAML format.
>
> **[3:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=203)** The distributor feature allows you to install software on your manage instances.
>
> **[3:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=208)** You can install AWS provided software or your own software.
>
> **[3:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=212)** If you'd like to install your own software, click Create package and upload your software.
>
> **[3:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=218)** This will create an installation package that you can push to your instances.
>
> **[3:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=222)** For this demonstration, you will install an AWS provided software, the AmazonCloudWatchAgent.
>
> **[3:48](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=228)** We spoke about this earlier in the course, select the package and choose the option to install one time.
>
> **[3:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=236)** Doing so invokes the run command utility, scroll down and under the Target section, select the desired instances.
>
> **[4:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=246)** Specified the timeout value in seconds and for this demonstration disable the option to write command output to an S3 bucket.
>
> **[4:15](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=255)** Click Run.
>
> **[4:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=258)** In addition to managing your instances, systems manager also allows you to maintain the state of your EC2 and hybrid infrastructure.
>
> **[4:25](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=265)** This is done using state manager.
>
> **[4:29](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=269)** First, you will need to create an association.
>
> **[4:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=272)** It defines the desired state of your targets and includes a document that contains the state definition, target information and schedule.
>
> **[4:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=281)** Start by selecting a document.
>
> **[4:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=284)** These documents apply to different resources, such as autoscaling groups, EBS volumes, S3, RDS, and more.
>
> **[4:53](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=293)** For this demonstration, search and select the document titled DisabledPublicAccessForSecurityGroup.
>
> **[5:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=300)** This document disables public SSH and RDP access for the desired security groups.
>
> **[5:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=306)** Scroll down to the Input parameters section and provide the desired security group ID.
>
> **[5:12](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=312)** Also select an IAM role.
>
> **[5:16](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=316)** The role is required to provide systems manager, the permissions required to execute this action.
>
> **[5:22](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=322)** In this case, the role should provide permissions to a systems manager to perform actions on VPC resources.
>
> **[5:28](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=328)** If you'd like to block access from a specific IP address add it here or leave it blank to DisabledAllPublicAccess.
>
> **[5:37](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=337)** Note that you can schedule this activity, select No schedule to run it once.
>
> **[5:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=342)** Scroll down and click Create Association.
>
> **[5:45](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=345)** The association has been created and is now in a pending status.
>
> **[5:49](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=349)** Click the association name and navigate to execution history.
>
> **[5:54](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=354)** The status has changed to success.
>
> **[5:56](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=356)** This means systems manager has executed the configured action.
>
> **[6:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=360)** As you have seen, there are so many possibilities with systems manager, we've only scratched the surface.
>
> **[6:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=366)** We've only looked at host management, but you can also use it to perform operations, application, and change management, to fully appreciate the tools capabilities, and understand how it can help to control your infrastructure, I recommend playing around with the different options.

> [!info]- Semantic Content
>
> **Env Vars:** aws (4), ssm (1), json (1), yaml (1), ec2 (1)
> **UI Navigation:** select the (7), scroll down (5), navigate to (1)
> **CLI Commands:** aws (4), find (2), node (1), ssh (1)
> **Prerequisites:** install (6), required to (2)
> **Code Keywords:** let (1), public (1), case, (1)
> **Analogies:** such as (2)
> **Cross-References:** earlier in (1)
> **Warnings:** note that (1)


### 6. Conclusion

#### Next steps with AWS
> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=0)** - [Instructor] Thanks for watching, monitoring, logging and remediating in AWS.
>
> **[0:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=5)** It's been an absolute pleasure to accompany you on this exploration of tools and concepts within AWS.
>
> **[0:11](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=11)** I hope you appreciated the different strategies you can deploy to build continuously monitored self-healing systems on AWS.
>
> **[0:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=18)** Cloud computing is a continuously evolving technology and AWS keeps updating its tool set.
>
> **[0:23](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=23)** I highly recommend checking the AWS documentation regularly for the latest updates and service offerings.
>
> **[0:30](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=30)** Finally, I encourage you to check out other AWS courses in the library, and I'd like to wish you the best in your journey as an AWS administrator.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (7)
> **Env Vars:** aws (7)
> **Code Keywords:** self (1), finally, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Shyam Raj]]

## Skills Covered

- Amazon Web Services (AWS)
- System Monitoring

## Path Context

### In [[Develop Your AWS Skills]]
← [[Complete Guide to AWS Software Deployment]] | **3 of 4** | [[Cloud Computing Careers and Certifications]] →

## Appears In

- [[Develop Your AWS Skills]]

## Related Courses

_Courses sharing skills:_

- [[Complete Guide to AWS Software Deployment]] — Amazon Web Services (AWS)
- [[Choosing A Cloud Platform For Developers Aws Azure And Gcp]] — Amazon Web Services (AWS)
- [[DevOps Foundations- Monitoring and Observability]] — System Monitoring
- [[AWS Essential Training for Architects]] — Amazon Web Services (AWS)
- [[Building Intelligent Chatbots on AWS]] — Amazon Web Services (AWS)

---

[↑ Back to top](#)