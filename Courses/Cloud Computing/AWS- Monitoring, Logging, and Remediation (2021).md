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
  - '[Develop Your AWS Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Develop%20Your%20AWS%20Skills.md)'
prev_courses:
  - '[Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md)'
next_courses:
  - '[Cloud Computing Careers and Certifications](Cloud%20Computing%20Careers%20and%20Certifications.md)'
path_nav: '[{"path":"Develop Your AWS Skills","position":3,"total":4,"prev":"Complete Guide to AWS Software Deployment","next":"Cloud Computing Careers and Certifications"}]'
path_count: 1
tags:
  - course
  - topic/cloud-computing
  - topic/software-development
  - skill/amazon-web-services-aws
  - skill/system-monitoring
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cloud%20Computing/AWS-%20Monitoring%2C%20Logging%2C%20and%20Remediation%20(2021).md)

![AWS: Monitoring, Logging, and Remediation (2021)](https://media.licdn.com/dms/image/v2/C560DAQEjfTWkFZh_ig/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1627498422761?e=2147483647&amp;v=beta&amp;t=j3ifch3k7efTJip2URw5xJ00HNxCNIRQvBaNUnzL6BY)

# AWS: Monitoring, Logging, and Remediation (2021)

> As organizations increasingly move their workloads to the AWS cloud to take advantage of its speed, elasticity, and flexible pricing, it is more important than ever to continuously monitor your applications and workloads, and react to changes, to maintain a fault-tolerant and highly available ecosystem. In this course, Shyam Raj provides system administrators with a look at how to successfully mon

> [LinkedIn Learning](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021) | 1h 40m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Monitoring, logging, and remediation in AWS](#monitoring-logging-and-remediation-in-aws)
  - [What you should know](#what-you-should-know)
- [**1. AWS CloudWatch and CloudTrail**](#1-aws-cloudwatch-and-cloudtrail) (8 videos)
  - [Review monitoring concepts](#review-monitoring-concepts)
  - [Introduction to CloudWatch](#introduction-to-cloudwatch)
  - [Create a CloudWatch alarm](#create-a-cloudwatch-alarm)
  - [CloudWatch Logs](#cloudwatch-logs)
  - [CloudWatch Logs Insights](#cloudwatch-logs-insights)
  - [CloudWatch agent](#cloudwatch-agent)
  - [Dashboards](#dashboards)
  - [CloudTrail Logs](#cloudtrail-logs)
- [**2. Configure Notifications**](#2-configure-notifications) (3 videos)
  - [Configure Amazon SNS notifications](#configure-amazon-sns-notifications)
  - [Using Service Quotas](#using-service-quotas)
  - [Using AWS Health events](#using-aws-health-events)
- [**3. AWS Config**](#3-aws-config) (3 videos)
  - [Introduction to AWS Config](#introduction-to-aws-config)
  - [Setting up AWS Config](#setting-up-aws-config)
  - [AWS Config managed rules](#aws-config-managed-rules)
- [**4. Taking Action**](#4-taking-action) (5 videos)
  - [Introduction to Amazon EventBridge](#introduction-to-amazon-eventbridge)
  - [Configure Amazon EventBridge](#configure-amazon-eventbridge)
  - [Lambda in response to CloudWatch alarms](#lambda-in-response-to-cloudwatch-alarms)
  - [Understand AWS Systems Manager](#understand-aws-systems-manager)
  - [Remediate using AWS Systems Manager](#remediate-using-aws-systems-manager)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps with AWS](#next-steps-with-aws)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Monitoring, logging, and remediation in AWS](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/monitoring-logging-and-remediation-in-aws?u=76281980&t=0)** - [Instructor] Organizations are, increasingly, moving their workloads to the AWS Cloud to take advantage of its speed, elasticity and flexible pricing options. To build a fault-tolerant and highly available ecosystem, it is important to continuously monitor your applications and workloads and [react](../../Skills/Web%20Development/React.js.md) to changes. This course will walk you through the different tools and services you can deploy to monitor and log your systems and execute remediation actions. Hi, I'm Shyam Raj, I'm a technical instructor and industry specialist in [Cloud Computing](../../Topics/Cloud%20Computing.md), networking and security. I invite you to join my [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course on monitoring, logging and remediating in AWS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [React](../../Skills/Web%20Development/React.js.md) (1), [Cloud Computing](../../Topics/Cloud%20Computing.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Speakers:** - [instructor] (1)

#### [What you should know](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/what-you-should-know?u=76281980&t=0)** - [Instructor] [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) offers a variety of tools for compute, storage, [Databases](../../Skills/Software%20Development/Databases.md), governance and more. To appreciate the concepts discussed in this course, I recommend that you have a basic understanding of virtualization technology and essential services offered by AWS, such as compute and storage. You will also need an AWS account to follow along with the exercises shown in this course. We've designed this course for Systems Administrators in a Systems Operations role. By the end of this course, you will have an appreciation of the tools and features you can use to monitor your systems effectively and take remediation actions in response to changes in your environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **CLI Commands:** aws (2)
> **Env Vars:** aws (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. AWS CloudWatch and CloudTrail

[↑ Back to Table of Contents](#table-of-contents)

#### [Review monitoring concepts](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=0)** - [Instructor] Whether you're migrating existing applications or building natively in AWS, you will need monitoring tools to help you operate as efficiently and cost effectively as possible. AWS provides several services, each playing a different role. Each of these services has it's native monitoring console that allows you to watch and track basic metrics. You'll design a comprehensive monitoring solution, it is crucial to monitor all your services from one console. A good analogy to understand the importance of monitoring is the critical care unit of a hospital that's constantly monitoring different variables for each patient. These variables are used to create alarms, such as high pulse rate and blood pressure. A higher pulse rate may be acceptable for one patient, but not for the other. Similarly, monitoring your applications and workloads on AWS requires a customized approach backed by data. Monitoring must be unified and lead to actionable data. CloudWatch allows you to view data from all your AWS services in a single console providing a unified view of your operational health. Data from different services is organized into name spaces. There are multiple options available for metrics, statistic type and monitoring time range, giving you the flexibility to track in a way that works for you. CloudWatch also allows you to create alarms to get notified when critical metrics breach configure thresholds. A robust monitoring solution must also support automation. CloudWatch Events, now known as Amazon EventBridge, allows you to continuously monitor event patterns
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/review-monitoring-concepts?u=76281980&t=94)** and trigger remediation actions using Lambda functions. AWS CloudTrail is a service from AWS that allows you to log and retain account activity, enabling governance, compliance and risk auditing across your AWS infrastructure. By combining Amazon CloudWatch with AWS CloudTrail, you can visualize logs, detect anomalous behavior, configure remediation actions and troubleshoot security and operational issues in your AWS account.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (9)
> **Env Vars:** aws (9)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** configure (2)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to CloudWatch](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=0)** - [Instructor] Amazon CloudWatch is an AWS service that allows you to monitor resources and applications you run on AWS in real time. You can use the data provided by CloudWatch to monitor your applications, optimize the utilization, respond to changes in your environment, and get a unified view of your operational health. By default, CloudWatch automatically displays metrics about every AWS service you use. CloudWatch also allows you to create customized [Dashboards](../../Skills/Data%20Science/Dashboards.md) with metrics collected from your applications. These can belong to multiple AWS accounts and regions giving you a unified view of your landscape. With CloudWatch, you can also create alarms to watch your metrics. When an alarm is triggered, CloudWatch can send notifications or automatically make changes to the resources you're monitoring. A common use case is to monitor the CPU utilization of your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances. You can use this data to determine whether you need to launch additional instances to handle the increased load, or whether you need to terminate existing instances when the load is significantly less. You can use CloudWatch via the AWS management console, CloudWatch API, command line interface or [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md), and the AWS SDKs. Technically, Amazon CloudWatch is a repository of metrics. Different AWS services such as [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) put their metrics into the repository. The user then uses these metrics to retrieve [Statistics](../../Skills/Data%20Science/Statistics.md). It is also possible to put your own custom metrics
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=93)** into the repository and retrieve statistics on them. You can use these metrics to perform actions such as sending an email via Amazon SNS or Amazon simple notification service, invoke a Lambda function, route events to an Amazon SQSQ, start, stop or terminate Amazon EC2 instances, initiate Amazon EC2 auto-scaling actions and more. Before you start using CloudWatch, it is essential to understand a few terminologies and concepts. First is a namespace. This is a container for your CloudWatch metrics. Metrics belonging to different namespaces are isolated from each other. Namespaces use the naming convention of AWS last service. For example, Amazon EC2 uses the AWS/EC2 namespace. Next we have metrics. These are variables used to monitor a service. The values of these variables are known as data points. Some examples of metrics include CPU utilization of your EC2 instances, read and write operations of EBS volumes, size of S3 buckets, et cetera. For instructions on viewing the list of available metrics, please check out the documentation. Metrics exist only in the region in which you create them. You cannot delete metrics, they automatically expire after 15 months if you do not publish any data to them. Each metric data point must be associated with a timestamp. Timestamps are daytime objects that include the complete date plus hours, minutes, and seconds. Metrics are available in the following resolutions,
>
> **[3:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-cloudwatch?u=76281980&t=190)** standard resolution. This has a one minute granularity. All AWS published metrics are standard resolution by default. Standard resolution works for most use cases, but for scenarios that require fine granularity, there's high resolution. This has a one-second granularity. This resolution can provide immediate insight into your applications activity. Amazon CloudWatch integrates with AWS IAM or AWS identity and access management, allowing you to specify which cloud watch actions a user in your AWS account can perform. However, it is important to note that you cannot use IAM to control access to CloudWatch data for specific resources. So you can't have a user have access to CloudWatch data only for a specific set of instances or a specific database. When you grant permission using IAM, it covers all cloud resources you use with CloudWatch. So you've understood how CloudWatch provides a single console to monitor the operational health of your applications and resources and perform configured actions. The best way to understand CloudWatch is to configure it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **Env Vars:** aws (13), ec2 (7), iam (3), cpu (2), api (1)
> **CLI Commands:** aws (13), make (1)
> **Definitions:** is a  (3), is an  (1), known as (1)
> **Analogies:** such as (2), for example (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Warnings:** note that (1)

#### [Create a CloudWatch alarm](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=0)** - [Instructor] In addition to tracking the usage of your AWS resources, you can also use Amazon CloudWatch to create alarms. These alarms monitor configured metrics and alert you when a metric breaches the configured thresholds. A common use case for CloudWatch Alarms is to monitor estimated AWS charges. AWS stores billing metric data in the US East North Virginia region, but it represents worldwide charges. It includes estimated charges for every service in AWS from every region. Before you can create a billing alarm, you need to enable billing alerts. Doing so allows you to monitor your estimated AWS charges and create an alarm using the billing metric data. To enable billing alerts, log into the AWS Management Console with root user credentials or as an IAM user that has permission to view billing information. Click your display name on the top right corner and then click my billing dashboard. On the left navigation pane, under the preferences section, click billing preferences. Check the box to receive billing alerts and then click save preferences. Note that once you enable this preference, you cannot disable it. In my case, I've already enabled it. After you enable billing alerts for the first time, it takes about 15 minutes before you can view billing data and set billing alarms. With billing alerts enabled, now you'll configure a billing alarm that sends an email message when you account billing exceeds a specified threshold. Use the services dropdown
>
> **[1:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=95)** and navigate to the CloudWatch service. You will find this under the management and governance section. Before proceeding further, I should add that AWS regularly updates its user interface with new designs and enhancements. When you configure a billing alarms using CloudWatch, you may see a slightly different interface than what you see on my screen. The core elements of the configuration such as metric and alarm details will remain the same. Please refer to the AWS documentation for the latest information about product updates. Also, ensure that you're already in the Northern Virginia region. If not, use the region selector in the upper right corner and switched to the North Virginia region. On the left navigation pane, under the alarm section, click billing. Click the create alarm button at the bottom. The blue line represents your estimated AWS charges. Hover on any data point to see the corresponding timestamp and estimated charges. Make a note of the message at the top the alarm will trigger when the blue line goes above the red line for one data point within six hours. There is no red line because you haven't configured a threshold yet. AWS automatically sets the metric name, currency, statistic and period. The threshold type can be static or anomaly detection. When the anomaly detection option is selected, CloudWatch uses statistical and machine learning [Algorithms](../../Skills/Software%20Development/Algorithms.md) to analyze metrics, determine normal base lines
>
> **[3:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=189)** and detect anomalies. For the billing alarm, you will set the threshold type to static. Set the alarm condition as greater than and configure the threshold value. Note that after you configure the threshold value, you will see the red line if you scroll up. This corresponds to the threshold value. Under additional configuration, you can define the data points to alarm and how to treat missing data. For now, you will leave these at the defaults, click next. In this step, you will configure notification settings. A CloudWatch Alarm can have three states. The state is okay when the metric is within the configured threshold. The state is insufficient data when there isn't enough data available like when you've just configured the alarm. The state is in alarm when the metric is outside the configured threshold. For a billing alarm, you would want AWS to notify you when the alarm triggers or in other words, when the state of the alarm is in alarm. SNS or simple notification service is responsible for handling notifications. If you already have an SNS topic configured, selected from the list or provide the topic ARN using this option or select the create a new topic option and provide it topic name. Add the required email addresses in a comma separated format, then click create topic. To configure additional SNS topics, click add notification, scroll to the bottom and click next.
>
> **[4:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/create-a-cloudwatch-alarm?u=76281980&t=283)** Provide a name for the alarm, then click next. Review your selections and click create alarm. Here's the configured alarm. The state is insufficient data because you've only just created the alarm and the alarm is pending confirmation because you created a new SNS topic and the email address configured on the topic hasn't been confirmed yet. To confirm, look for an email from AWS with instructions. I waited for about a minute and refreshed the alarm. It has now moved to the okay state, which means that the metric is within the configured threshold. If you need to delete the alarm, simply select it, click actions and then click delete. Click delete again. The alarm has been deleted. So we've demonstrated how to create a billing alarm to track your AWS usage costs and prevent overuse it in your AWS account. As you can imagine, CloudWatch Alarms have many other use cases like monitoring your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, S3 buckets, database instances and more. Simply put, you can create alarms on any metric collected by CloudWatch.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** aws (14), sns (4), iam (1), arn (1), ec2 (1)
> **CLI Commands:** aws (14), find (1), make (1)
> **Prerequisites:** configure (6)
> **UI Navigation:** dropdown (1), navigate to (1), scroll up (1), select the (1)
> **Definitions:** in other words (1), means that (1)
> **Analogies:** such as (1), imagine (1)
> **Warnings:** note that (2)

#### [CloudWatch Logs](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=0)** - [Instructor] Amazon CloudWatch Logs is a feature of Amazon CloudWatch that do collect and store logs from your resources, applications, and services in near real time. You can use CloudWatch Logs to centralize logs from your systems in one place, and then search, sort, filter, or query them for patterns. You can also them by specific fields and visualize them in [Dashboards](../../Skills/Data%20Science/Dashboards.md). By default, logs are retained indefinitely and never expire. But you can configure the retention period, to be anywhere between one day in 10 years. CloudWatch Logs organises lock data using log groups. A log group is a group of log streams that share the same retention and access control settings. A log stream is a sequence of log events that share the same source. For example, the same elastic network interface. Bear in mind that not all AWS services publish to CloudWatch Logs. Some of the important services that do so, include Amazon VPC, Amazon Route 53, AWS Lambda, AWS CloudTrail, and AWS Fargate. For a complete list of services that publish to CloudWatch Logs, please refer to the CloudWatch documentation. Now you'll go to the CloudWatch console and learn how to create a log group. Then you will configure a VPC to send flow logs to the group, and then you will create a CloudWatch alarm based on the data collected by the log group. You are now at the CloudWatch console. On the left navigation pane, the lock section, click log groups.
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=94)** Then click create log group. Provide a name for the group. Then define the retention setting. If you like to encrypt log group data with a customer master key, create a new key from the key management service and provide the ARN here. For now, you will skip this. Click Create. The log group is ready. Now you'll configure your VPC to send flow logs to this log group. Use the services down menu and navigate to the VPC service. You will find this under the networking and content delivery section. On the left navigation pane, click Your VPCs, select the desired VPC. Click the actions button, and then click create flow log. Here you can provide a name for the flow log. This is optional though. The filter allows you to decide the type of traffic you want to capture in the logs. Accept, reject, or both. Set it to all. Leave the maximum aggregation interval set to 10 minutes and the destination set to, send to CloudWatch Logs. Under destination log group, select the log group that you just configured. Next, you need to provide permissions to publish logs to CloudWatch. You can do this by attaching an IAM role. In this case, even though you're configuring VPC flow logs, the logs will represent activity of [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, hosted in this VPC. So, you will need an IAM role,
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=187)** that provides permissions to the EC2 service, to publish the CloudWatch Logs. You will find more information about how to create an IAM role with the required permissions, in the CloudWatch documentation. Select the design IAM role. The next setting allows you to influence the log record format. Make a note of the default AWS format. The attributes such as source address, destination address, source port, destination port and others, are arranged in a specific order. But if you need the attributes in a different order, select custom format, and then select the attributes one by one in the desired order. For now, leave the set to AWS default format. Click create flow log. The flow log you have created is for the VPC. So all elastic network interfaces in the VPC, will publish data to the log group and each interface will have a unique log stream. Log streams or containers for flow log records. You can also create flow logs for subnets and specific network interfaces. To view log data, Use the services dropped on menu and navigate back to the CloudWatch service. On the left navigation pane click log groups. Here I've got a log group from an earlier configuration. Click the log group to see the associated log streams. Click on the stream to see the associated log events. Note that each event has a timestamp and a message.
>
> **[4:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=282)** As you can see, there's a lot of information. The fields include version, account number, elastic network interface, source IP, destination IP, source port, destination port, protocol number, packets, bytes, start time, end time, action, and flow log status. As you can imagine, this level of detail can be instrumental in analyzing traffic. Now you'll use the log events to create a CloudWatch alarm. The alarm will notify you when the number of rejected SSN sessions reaches a configured threshold. But before you can do that, you need to create a new custom metric that the alarm can track. First, you will apply a filter to search for interesting events. In this case, rejected SSH traffic. For rejected SSH events, the destination port will be 22, the protocol will be six for TCP, and the action will be reject. Let's apply a filter to identify this type of traffic. As you can see, the filters are enclosed in brackets and includes all fields, but specifies values only for the destination port, protocol, and action. Press enter to run a search using the filter. Here you can see the events that have matched the filter. To learn more about how you can search for the events, please refer to the CloudWatch documentation. Now click create metric filter. Provide a filter name.
>
> **[6:18](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=378)** Then define a new metric namespace. Also provide a metric name. Set the metric value to one. The metric will have this value, when a filter pattern match occurs. Scroll down and click Create. You've created the metric filter. Now you'll create the alarm. On the left navigation pane, click Alarms, and then click create alarm. Click select metric. In the custom namespaces section, you will find the namespace you defined earlier. Bear in mind that it could take a few minutes before you can see it here. Here I've got another namespace that I created a while ago. Click the namespace and then select the desired metric. Click select metric. The blue dots represent events corresponding to the metric filter you defined. In this case, rejected SSH traffic. Change the statistic to sum and the period to one day. This configuration means that, you're monitoring the total number of data points for one day. Scroll down, leave the threshold type set to static and change the condition to greater than or equal to, and then define the desired threshold value. Click Next. Leave the alarm state to in alarm, so CloudWatch can notify you when it triggers. Under the SNS topic section, select create a new topic
>
> **[7:52](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs?u=76281980&t=472)** and provide a topic name. Then provide a list of email addresses to notify. Click create topic. Scroll down and click Next, Provide a name for the alarm. Click Next. Review your selections and click create alarm. Here's the alarm you configured. The state is insufficient data, because you've only just created it. Note that the actions column states, pending confirmation. This is because you've provided an email address, but not verified it. Look for an email from AWS with a confirmation link. I wait for a few seconds and refresh the alarm. Note that the state has changed to in alarm. This means the metric value has reached the configured threshold. So you've seen how to use the CloudWatch Logs feature to collect logs from your applications, query them for patterns, define a new custom metric, and creat an alarm to monitor the custom metric.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Env Vars:** vpc (9), aws (7), iam (4), ssh (3), ec2 (2)
> **CLI Commands:** aws (7), find (3), ssh (3), make (1)
> **UI Navigation:** select the (5), scroll down (3), go to (1), navigate to (1), click on (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** for example (1), such as (1), imagine (1)
> **Warnings:** note that (3)
> **Prerequisites:** configure (3)

#### [CloudWatch Logs Insights](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=0)** - [Instructor] In an earlier video, you understood the different services that can send log data to CloudWatch Logs and how to configure a log group. While it helps to have your logs in a central place, it is crucial to analyze this data to identify operational issues and fix them. Amazon CloudWatch has a feature called CloudWatch Logs Insights that allows you to search and analyze your data in CloudWatch Logs interactively. It does this by generating fields from your logs and providing a purpose-built language to query these fields. CloudWatch Logs Insights automatically generates the following fields for all log types. Message, this contains the raw, unparsed log event. Timestamp, this contains the event timestamp. IngestionTime, this contains the time when the log event was received by CloudWatch Logs. LogStream, this contains the name of the log stream containing the log event. And Log, this is the log group identifier. Note that CloudWatch Logs Insights inserts the @ symbol at the start of the fields that it generates. In addition to these fields, Logs Insights also discovers additional fields from your logs depending on the service that publish them. For example, for a VPC flow log that looks like this, it automatically discovers these fields, version, accountid, interfaceid, sourceAddress, destinationAddress, sourcePort, destinationPort, protocol, packets, bytes, start time, end time, action, and log status.
>
> **[1:39](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=99)** For a lambda log that looks like this, it automatically discovers these fields, type, requestid, duration, build duration, memory size, and max memory used. Note that each of these fields have the at symbol at the beginning. This means Logs Insights has automatically generated these. For a full list of automatically discovered fields, please refer to the CloudWatch Insights documentation. Now let's go to the CloudWatch console to understand how you can use CloudWatch Insights. You are now at the CloudWatch console. Note that to use CloudWatch Insights, you must already have logs stored in CloudWatch Logs. To verify this, on the left navigation pane, click Log groups. Then click the log group, and then the log stream. This confirms that the service is receiving logs. Now click Insights. This is the query box. As you can see, there's a default query that includes the timestamp and message fields and sorts by timestamp and limits to 20 records. Select a log group to query from and then click Run query. The output includes the most recent 20 VPC flow logs. To see automatically detected fields. on the right side, click Fields. Note that you are only seeing fields related to VPC flow logs because you are currently viewing the VPC Flow Logs group. Note that there's also an option to visualize using a graph.
>
> **[3:14](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=194)** Now let's use a query that identifies the top 10 IPs with the most number of TCP sessions. I'll begin by adding a query. TCP sessions have the protocol value set at six, so start with a query that only includes TCP-based events. Next, you will aggregate these sessions or in other words, generate a count of the sessions by using the stats or statistical function. So use the stats function to count everything, store this as number of sessions, and perform this count by source address. Sort the data by number of sessions in the descending order and limit to 20 records, click Run query. This shows you the top 10 IPs with the most number of TCP sessions. As you can see by running a simple query, you're able to gain insights into your network traffic. To add this query to the dashboard, click Add to dashboard. Select an existing dashboard or click to create a new one. Provide a name and click the check mark. On the right side is a preview of the widget. Click Add to dashboard. You've added the widget to the dashboard. Note that you can also add more widgets. Click Save dashboard. Now let's try another query to visualize the hourly packet transfer. On the left navigation pane, click Insights and then select the log group.
>
> **[4:50](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-logs-insights?u=76281980&t=290)** Delete the default query and try this query. The sum function is used to generate a sum of values. In this case, the total number of bytes. The bin function rounds the value of the timestamp to the given time period, click Run query. As you can see, the output shows the hourly packet transfer in terms of bytes. Click the Visualization tab. By default, this shows a line graph but there's other options available. Note that the option to see a line or a stack graph is available when you run a query that uses the bin function to group results by time. Use the filters at the top to change the time period. Use the pre-configured options or click Custom to define an absolute or relative time period. Set this to one day and click Apply. Now click Run query. Now the graph shows bytes transferred per hour for 24 hours. Click Add to dashboard. Select the dashboard you configured earlier and click Add to dashboard. CloudWatch Logs Insights makes it easy to understand and debug application behavior by searching and visualizing logs. As you've seen, the available options present many possibilities. To fully appreciate the tool, I recommend trying some hands-on queries.

> [!info]- Semantic Content
>
> **Env Vars:** vpc (4), tcp (4)
> **Warnings:** note that (7)
> **Code Identifiers:** sourceaddress (1), destinationaddress (1), sourceport (1), destinationport (1)
> **UI Navigation:** select the (2), go to (1)
> **Definitions:** in other words (1), is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [CloudWatch agent](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=0)** - [Narrator] In the earlier videos you've seen that you can use Amazon CloudWatch to collect metrics from your [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, while Amazon CloudWatch collects standard metrics from you instances, it cannot collect internal system level and application level metrics such as disk and memory metrics. This is because CloudWatch only has visibility at the instance level, but this can be addressed with the Amazon CloudWatch Agent. You can use it to collect internal system level metrics from [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) instances. This is in addition to the metrics enabled by default on EC2 instances, you can also collect system level metrics from on premises servers. This includes metrics such as CPU, disk, memory metrics, and more. You can also collect logs from Amazon EC2 instances and on premises servers. And you can also collect custom metrics from your applications. A good use case is to log errors from your applications so you can quickly spot problems. The CloudWatch agent is available for popular operating systems, such as Amazon [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md), CentOS, Red Hat Enterprise Linux, 64 bit versions of [Windows](../../Glossary/Service/Windows.md) operating systems, and more. You will find the full list of supported operating systems in the CloudWatch documentation. The metrics collected by the agent can be stored and viewed in CloudWatch, just like other system default metrics. CloudWatch stores them under the namespace CWAgent, before getting to a demonstration. I recommend checking the list of metrics collected by the CloudWatch agent.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=93)** Now let's walk through the steps needed to install the agent. You will learn how to configure the agent to collect member utilization details from an EC2 instance running [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) 2019. Before installing the agent, you will need to create an IAM role and attach it to the instance. The agent will use this role to gain the required permissions, to write metrics to CloudWatch from the AWS management console, use the services dropdown and navigate to the IAM service. You will find this under the security, identity and compliance section. On the left navigation pane, click roles, and then click create role. On the next step, select EC2 as a service that will use this role, doing so will allow EC2 instances to use the role to call AWS services. In this step, you will need to attach a permissions policy. From the list, search for CloudWatch agent server policy.
>
> **[2:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=154)** It is an AWS managed policy and provides the permissions required to write locks to CloudWatch, select the policy and click next. For now, you will skip tags. Click next, provide a name for the role. Then click create role. You've created the role. The next step is to attach IAM role to the EC2 instance you'd like to monitor. Use the services dropdown and navigate to the EC2 service, on the left navigation pane, click instances and select the instance from which you'd like to collect metrics. Then click the actions menu, click security, and then click modify IAM role, select the IAM role that you created earlier and click save. The next step is to log in to the instance and download the agent package. I'm already logged into the instance, you can download and install the agent, using an Amazon S3 download link or using SSM, which is the AWS system manager agent or using an AWS cloud formation template. For this demonstration, you will use the Amazon S3 download link, provided in the AWS documentation. I've got the document opened, scroll down the documentation and copy the download link for Windows servers, paste the link in the address bar and press enter.
>
> **[4:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=248)** Choose run when prompted. You installed the package, the next step is to create a CloudWatch agent configuration file. It is adjacent file that tells the agent the metrics and logs that it should collect. Bear in mind, the agent can collect many metrics by using the adjacent file. You can tell the agent which ones you're interested in. You can create this file easily by invoking a wizard. First open up [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) and use the CD command to navigate, to cdrive, program files, Amazon, Amazon CloudWatch agent folder, use the DIR command to view the available files. The file we are interested in is the first one, Amazon CloudWatch agent config wizard. Next invoke the wizard by entering the file name. The wizard will ask you a few questions to create the config file. The first question is, on which [office](../../Skills/Web%20Development/Microsoft%20Office.md) are you planning to use the agent? Select two for Windows. Are you using EC2 or on premises hosts? Select one for EC2. Do you want to turn on StatsD demon? You can use the StatsD protocol to send custom metrics, from your applications to CloudWatch. In this case, you're only trying to send memory usage details, which is a host level metric. So select no. If you plan to watch other metrics such as the request count of your application, you will need to enable this. The next question is, do you have any existing CloudWatch agent configuration file
>
> **[5:42](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=342)** to import for migration? Select two for no. Do you want to monitor any host metrics such as CPU and memory? Select one for yes. Do you want to monitor a CPU metrics per core? Select two for no. Do you want to add EC2 dimensions such as image ID, instance ID and more? Select one for yes. Would you like to collect your metrics at high resolution? Use option four to set it to the standard resolution of 60 seconds. Which default metrics configure you want? Choose basic. This includes metrics related to memory and logical disk. Please refer to the AWS documentation to know more about the metrics collected by the other levels. Are you satisfied with the above config? Select one for yes. Do you want to monitor any customized log files? Select two for no. Do you want to monitor any Windows event log? Select two for no. Do you want to store the config in the SSM parameters store? Select two for no, press enter to exit, use the DIR command again, the configuration has been stored in a file called config.[JSON](../../Skills/Web%20Development/JSON.md). Now you'll run the agent by executing a PowerShell script, begin with .\ followed by the script name and follow it up with a few arguments.
>
> **[7:10](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudwatch-agent?u=76281980&t=430)** The -M suite specifies that this is for EC2 and not on-premise. The -C suite specifies the configuration file name. The -S switch starts the agent. The command is slightly different, if you're running this on a Windows server located in an on-premise environment, you will find it in the AWS documentation, press enter to execute the command. The agent installation is successful. Now you'll go back to the CloudWatch console to view the metrics. I'm here at the CloudWatch console. It can take a few minutes before you see the custom namespace and host level metrics. I've got another instance running the CloudWatch agent, so we should see the namespace. On the left navigation pane, click metrics. Here is the namespace used by the agent, CW agent click the namespace. Here, we can see two dimensions. The first dimension has metrics related to logical disk. And the second one has metrics related to memory. This is because you selected the basic detail level when creating the configuration file, click the second dimension and select the metric for the desired instance. Here we have the memory level metrics. Now you can use these metrics to create a widget and add it to the dashboard or to create a CloudWatch alarm. So you've understood how to install and use the CloudWatch agent, to collect custom metrics from your EC2 instances. As you can imagine, this can have many use cases and simplifies your monitoring solution, by having all your logs in one place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (12), [Windows](../../Glossary/Service/Windows.md) (4), [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2)
> **Env Vars:** ec2 (14), aws (8), iam (5), cpu (3), ssm (2)
> **CLI Commands:** aws (8), find (3), cd (1)
> **UI Navigation:** select the (4), dropdown (2), navigate to (2), scroll down (1)
> **Analogies:** such as (6), just like (1), imagine (1)
> **Prerequisites:** install (3), configure (2)
> **Tools:** powershell (2)
> **Exercise Files:** download the (1), template (1)

#### [Dashboards](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=0)** - [Instructor] While CloudWatch alarms provide a way to get notified when critical metrics reach a threshold, [Dashboards](../../Skills/Data%20Science/Dashboards.md) provide a unified view for selected metrics. As you can imagine, this is useful for systems and operations administrators who desire to monitor critical metrics from a single view. Dashboards allow you to assess the health of your resources and applications across one or more regions. Dashboards are global, and there's no limit on how many you can create. You can create dashboards from the AWS Management Console, AWS [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) and the API. Now let's go to the CloudWatch console and learn how to create a dashboard. You are now at the Amazon CloudWatch console. Make a note that this is the new CloudWatch interface. To switch to the old interface, use the option at the top right. To create a new dashboard, on the left navigation pane click Dashboards, and then click Create dashboard. Start by providing a name. Note that dashboard name cannot have spaces. Click Create dashboard. The dashboard has been created, it's now time to add widgets. And, as you can see, there are many different types of widgets that you can add such as Line, Stacked area, Number, Pie, Text, Logs table, Alarm status and more. For the first widget, choose the number widget type. Here, you will see the different namespaces based on usage in your account. Select the [EC2](../../Skills/DevOps/Amazon%20EC2.md) namespace,
>
> **[1:32](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=92)** and then click Per-Instance Metrics. Bear in mind, that you will see the EC2 namespace only if you're using EC2 services in your account. Select the CPU utilization metric for the instance you'd like to track. This shows the value at the top. The Graph metrics button allows you to change the color, label, statistic type and sampling period. For example, to track the maximum CPU utilization for the instance, change the statistic type to maximum. Similarly, you could change the sampling period to as little as 1 second and as high as 30 days. Leave it set to 5 minutes and reset the statistic type to Average, then click Create widget. You've added the widget to the dashboard. Use the edit option to rename the title, then click Save dashboard. Let's add one more widget that draws data from the log group you configured earlier to show top sources of traffic. Click the Add widget button and choose the widget type as Logs table. Use the dropdown, and select the log group you configured earlier. Clear the default query, and replace it with a query to identify top sources of traffic. Use the sum function to compute the total number of bytes per source address and save it as total traffic, then choose to sort in descending order and limit to top 10 entries. Click Create widget,
>
> **[3:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=188)** then click Save dashboard. Widgets can be resized and moved around. To resize, simply use the arrow that appears when you hover your mouse over the widget. To move around, simply click and hold at the top of the widget and move it around. When the dashboard is ready, click Save dashboard. You can also add alarms configured in your account to the dashboard. Click Add widget and select the Alarm status widget type. From the list, select the desired alarm and click Create widget. The dashboard name is preselected. Provide a title for the widget, then click Add to dashboard. I'll move this to the top and resize it, click Save dashboard. To view the source code of this dashboard, use the Actions button and click View/Edit source. You can copy the source code, and use it to build a new dashboard without having to build individual widgets. Also, note that you have filters at the top that allow you to change the data interval. If you have multiple dashboards, use the dropdown to switch to another dashboard. It is also possible to view dashboards in full screen. This option is useful when you'd like to display these on monitoring consoles, and you can also change the theme to dark. So you've seen how to create widgets representing different types of metrics and add them to the dashboard.
>
> **[4:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/dashboards?u=76281980&t=284)** As you've seen, there are many widget types and options available. To appreciate the dashboard capabilities, I encourage you to play around with the different options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Dashboards](../../Skills/Data%20Science/Dashboards.md) (7), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1)
> **UI Navigation:** select the (5), switch to (2), dropdown (2), go to (1)
> **Env Vars:** ec2 (3), aws (2), cpu (2), cli (1), api (1)
> **CLI Commands:** aws (2), make (1)
> **Analogies:** imagine (1), such as (1), for example (1)
> **Warnings:** note that (3)
> **Exercise Files:** source code (2)
> **Speakers:** - [instructor] (1)

#### [CloudTrail Logs](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=0)** - [Instructor] An essential tool in your arsenal for monitoring and logging activity is AWS CloudTrail. CloudTrail provides event history for actions performed through the AWS Management Console, AWS SDKs, command-line tools and other AWS services. With CloudTrail, you can identify who took which action, which resources were acted upon, and when the event occurred. For organizations, this is important as it can track changes on resources, perform security analysis, identify unusual activity, and troubleshoot issues. CloudTrail is automatically enabled when you create your AWS account. AWS records activities occurring in your account as CloudTrail events. In addition to this, you can also create trails that allow you to store events in an S3 bucket. A trail is a configuration that enables the delivery of CloudTrail events to an Amazon S3 bucket, CloudWatch Logs, and CloudWatch events. It is important to not confuse CloudTrail with CloudWatch Logs. CloudTrail captures events from all services. However, only a few services publish logs to CloudWatch Logs. And unlike CloudWatch Logs, CloudTrail requires no configuration to view events. Having said this, CloudTrail does integrate with CloudWatch Logs so you can search through your log data, identify suspicious events, and take remediation actions. To get started, log into your AWS Management Console and use the Services drop-down menu to navigate to the CloudTrail service.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=93)** You will find this under the Management and Governance section. Note that, by default, CloudTrail automatically records events occurring in your AWS account. To view these events, use the hamburger menu on the left side and navigate to Event history. This list contains events from the past 90 days. To know more about an event, click on the Event name, doing social's information like the Event time, User name, Event name, Event source, and more. Back to Event history, use the filters to narrow down to specific events. First, select the required attribute. Then, provide the desired value. Now, you're looking at events that have matched your filters. Note that you also have the option to download events in CSV or [JSON](../../Skills/Web%20Development/JSON.md) format. To store events beyond 90 days, you can create a trail. A trail is a configuration that allows you to store events in an S3 bucket. To create a trail, on the left navigation pane, click Trails. Then, click Create trail. Note the message at the top, "A trail created in the console is a multi-region trail." So, the trail you're creating now will log events from all regions. Use the [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) if you'd like to create a trail that only logs events from a single region. However, note that AWS does not recommend doing so. Start by providing a name for the trail. If you're using AWS Organizations to manage multiple AWS accounts, and you want to use this trail
>
> **[3:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=186)** for all accounts in your organization, enable this check box. Next, you'll need to define the target S3 bucket. You may use an existing bucket or create a new S3 bucket. For this demonstration, select Create new S3 bucket. Note that CloudTrail has automatically generated a bucket name. By default, Amazon S3 encrypts your CloudTrail log files on the server side using AWS Key Management Service. This capability is useful for storing sensitive data such as log files. But for this demonstration, turn off server-side encryption. You can use log file validation to ensure the integrity of your log files. With the option turned on, CloudTrail will deliver log pages to your S3 bucket. You can use the digest files to verify that your log files did not change after CloudTrail delivered them. With SNS notification turned on, CloudTrail will notify you each time it delivers a log to your bucket. When you enable CloudWatch Logs, CloudTrail will send log files to CloudWatch Logs. Like you've seen earlier, you can use CloudWatch Logs to search through your log files, create custom metrics, and configure alarms. For now, leave it unchecked. Optionally, you may assign tags. Tags can help you identify your trails and the S3 buckets that contain CloudTrail Log files. So, on this step, you are good to proceed with a name for the trail and a destination S3 bucket, click Next. In this step, you can define the type of events you want to log.
>
> **[4:38](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/cloudtrail-logs?u=76281980&t=278)** Management events capture management operations, also known as control plane operations. Examples include operations that configure security and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and user login. Data events capture operations performed on or within a resource, for example, Amazon S3 object-level API activity, AWS Lambda function execution activity and more. Insights events identify unusual activity by continuously analyzing CloudTrail management events. CloudTrail logs these events only when it detects changes in your account's API usage that differs significantly from the account's typical usage patterns. Bear in mind that, by default, a trail only captures management events. Use these check boxes to specify which type of management events to capture, read, write, or both. Click Next, review your selections and click Create trail. The trail has been created. In about 15 minutes, you will start seeing log files in the S3 bucket you specified. So, you've seen how you can log account-level activities by creating a trail in CloudTrail. When you combine this with CloudWatch, you will have a robust, always-on logging and monitoring system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** aws (13), api (2), csv (1), json (1), cli (1)
> **CLI Commands:** aws (13), find (1)
> **Warnings:** note that (4), troubleshoot (1)
> **UI Navigation:** navigate to (2), click on (1), select the (1)
> **Definitions:** is a  (3), known as (1)
> **Prerequisites:** configure (2), you'll need (1)
> **Analogies:** such as (1), for example (1)


### 2. Configure Notifications

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure Amazon SNS notifications](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=0)** - [Instructor] Amazon Simple Notification Service also known as SNS is a service that manages the delivery or sending of messages to subscribing end points or clients. It provides both application to application and application to person communication. A notification service is an important element of any monitoring solution. As you'd want to be notified when significant events occur in your infrastructure. It also allows you to decouple your applications into smaller independent components that are easier to develop and manage. SNS has two types of clients, publishers and subscribers also known as producers and consumers. Publishers asynchronously send messages to an SNS topic, which is a logical access point and communication channel. Think of a topic as a broadcasting station, you can publish messages to the topic and anyone interested in these messages can subscribe to the topic. Subscribers consume the message over one of the supported protocols, when they're subscribed to the topic. Application-to-application messaging, support subscribers, such as AWS Lambda functions, Amazon SQS queues, HTTP or HTTPS endpoints, AWS Event Fork Pipelines and Amazon Kinesis Data Firehose delivery streams. Application to person messaging provides notifications to subscribers such as mobile applications, mobile phone numbers and email addresses. SNS is widely used with Amazon CloudWatch CloudWatch Alarms can be configured to send notifications to SNS topics
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=94)** which will then be received by subscribing endpoints. To start using SNS, you create a topic and control access to it by defining policies that determine which publishers and subscribers can communicate with the topic. A publisher sends messages to the topics that they have created, or to topics that they have permission to publish to. The message is sent to a topic instead of directly sending to a specific destination address. The topic is matched to a list of subscribers who have subscribed to that topic. And the message is delivered to each of them. To set up an SNS topic from the AWS Management Console, use the services dropdown menu and navigate to simple notification service. You will find this under the application integration section to create a new topic on the left navigation pane, click topics, then click create topic. There are two types of topics that you can create. Let's first talk about standard topic. Use the standard topic when message delivery order and message duplication are not critical. All supported delivery protocols can subscribe to a standard topic. This is the topic type you are most likely to use. If you have a requirement to ensure strict message ordering and to prevent message duplication, you will use the FIFO topic. Bear in mind that the only supported subscription protocol is SQS, SQS or Simple Queue Service is a message queuing service from AWS for this demonstration use standard,
>
> **[3:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=189)** provide a name for the topic. Note that all other settings are optional. So to begin with you only need to provide a topic name. The encryption setting allows you to enable server-side encryption at [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) for your topic for now, leave it to disabled. The access policy section allows you to define who can publish and subscribe to the topic. By default only the topic owner can publish and subscribe to the topic for this demonstration, set the subscription setting to everyone. Delivery retry policy allows you to configure how SNS retries field deliveries for HTTP and HTTPS end points for now, leave it to the default. In the delivery status logging section, you can configure delivery status logging for these protocols. For now, leave this at the default and skip tags, click create topic. The topic has been created. Note that it has an ARN or Amazon Resource Name, which you can use to publish messages to this topic programmatically, to subscribe to this topic under the subscription section, click create subscription. From the list of protocols, select email, and then provide an email address as an end point. Leave other settings at the default and click create subscription. Note that the subscription status is pending confirmation to confirm your subscription, look for an email from AWS with a confirmation link,
>
> **[4:43](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-sns-notifications?u=76281980&t=283)** to publish a message to a topic, go back to the topic section, select the desired topic and click publish message. Provide an optional subject and type in your message body. Then click publish message. SNS will now deliver the message to subscribing end points. So you've understood how you can use SNS topics to deliver messages, to subscribing end points. You can also use these SNS topics with CloudWatch Alarms that you created in the earlier videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** sns (11), aws (5), sqs (3), http (2), https (2)
> **CLI Commands:** aws (5), find (1)
> **Definitions:** is a  (3), known as (2), is an  (1)
> **UI Navigation:** dropdown (1), navigate to (1), select the (1)
> **Warnings:** note that (3)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** such as (2)

#### [Using Service Quotas](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=0)** - [Instructor] In addition to monitoring the usage of resources, CIS Ops administrators are also responsible for avoiding unintentional expense due to over usage. In this regard, AWS provides a service known as service quotas. Resources and actions in your AWS account have defined limits. Also known as quotas, service quotas is an AWS service that allows you to monitor and manage your quotas. With service quotas. You can centrally manage your quotas from one location instead of going to multiple locations. You can also easily manage quota increase requests and be alerted when quotas usage exceeds a specific threshold. Each AWS service defines its quotas and has default values for those quotas. For example for Amazon S3, a storage service in AWS, you have a limit of up to 100 buckets per account. For Amazon VPC, you have a limit of five VPCs per region. Similarly, each AWS service defines its quotas. For many of the quotas. AWS allows you to request an increase, to understand quotas in detail. Let's go to the AWS management console. From the AWS console, search for service quotas, and then click the service name. The dashboard shows cards with quota information for different services. To add or remove cards, click modify dashboard cards. You can only have a maximum of nine cards. So before adding new ones
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=93)** you'll need to remove existing cards, then add the required service and click save. Click on a card to know more. For example, here is a list of quotas for Amazon VPC. As you can see, there are quite a few of them. Here's the quota name, the applied quota value, the AWS default quotas value and information about whether the quotas is adjustable. To request quotas increase, first select the desired quota name, and then click request quota increase, provide the desired quota value and then click request. Smaller increases are automatically approved and larger requests are submitted to AWS support. You can also create CloudWatch alarms to notify you when you close to a quota value threshold doing so can help you to plan ahead and request a quota increase if needed, bear in mind that you cannot create CloudWatch alarms for all quotas. And unfortunately, AWS does not publish a list of quotas that support CloudWatch alarms. Navigate back to the dashboard and click the card for AWS Lambda. If you don't find a card for AWS Lambda, click AWS services on the left navigation pane, and then search for Lambda, then click the service name. For this example, click the quota named concurrent executions. This quota represents the maximum number of events that Lambda functions can process simultaneously in the current region.
>
> **[3:05](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-service-quotas?u=76281980&t=185)** Scrolling down, you will see the monitoring section and then a section for CloudWatch alarms. To create a new alarm click create, define the alarm threshold and provide an alarm name. Then click create, you've created the alarm, but as you may have noticed, you haven't configured any notifications for the alarm. To configure a notification, click configure actions at the top doing so we'll navigate you over to the CloudWatch service and you will see the alarm configuration. To configure a notification, click actions, and then click edit, leave the configuration unchanged and click next, scroll to the top and click add notification, associate an SNS topic and scroll down and click update alarm. Now the alarm will trigger when the metric breaches, the configured threshold and SNS will notify subscribing end points. As you've seen service quotas simplifies the management of your quotas by consolidating quotas values across multiple AWS services in a single location. Service quotas was formerly known as service limits. So you may see some AWS documentation still refer to it as service limits and service quotas is free to use from the AWS console, the AWS APIs, and the command line interface.

> [!info]- Semantic Content
>
> **Env Vars:** aws (19), vpc (2), sns (2), cis (1)
> **CLI Commands:** aws (19), find (1)
> **Definitions:** known as (3), is an  (1), is a  (1)
> **UI Navigation:** go to (1), click on (1), select the (1), scroll down (1)
> **Prerequisites:** configure (3), you'll need (1)
> **Tools:** aws console (2), command line (1)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Using AWS Health events](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=0)** - [Instructor] In the earlier videos we talked about, Amazon CloudWatch, a service that allows you to monitor health at the resource level. AWS Health is an AWS service that allows you to monitor health at the service level. It provides continuous visibility into your resource performance and availability of AWS services. It also publishes events that you can use to learn how service and resource changes might affect your applications running on AWS. This type of monitoring is critical because if an AWS service is affected, it will affect all your resources from that service. With AWS Health, you can be aware of and prepare for planned activities. The service is very easy to use when you're in the AWS management console search for personal health dashboard and click the service name, the dashboard requires no configuration and is ready to use. The dashboard shows that there have been no open issues, no schedule changes, and no notifications from the past seven days. To view a list of events that apply to your account on the left navigation pane click Event Log. This shows the event name, the event status, event category, region and zone information, start time, last update time, and affected resources. To know more about an event, click the event name. AWS makes it easy to monitor for health events by configuring CloudWatch event rules, navigate back to the dashboard and click create rule
>
> **[1:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=95)** doing so we'll open the CloudWatch service in a new browser tab. You are now creating a new CloudWatch event rule, bare in mind that CloudWatch events is now Amazon Event Bridge. So you can also configure this from the Amazon Event Bridge Console. Let's configure a notification to alert when there is an operational issue or network connectivity issue with [EC2](../../Skills/DevOps/Amazon%20EC2.md). You're currently on step one under the event source section, make sure event pattern is selected, from the service named dropdown, select health. From the event type dropdown, select specific health events, select the radio button for specific services and from the dropdown select EC2, select the radio button for specific event type categories and from the dropdown select issue, select the radio button for a specific event type codes and from the dropdown select EC2 network connectivity issue and EC2 operational issue. Note that you can select the radio button for specific resources and have the configuration apply only to specific EC2 resources. For now, leave it set to any resource based on your selection. CloudWatch builds an event pattern. Next, you will configure a target scroll to the top and click add target. Since we are creating this for alerting purposes from the drop-down set the target as SNS topic, then select the desired topic,
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/using-aws-health-events?u=76281980&t=187)** scroll down and click configure details. Provide a rule name, ensure that the state is enabled and click create rule. You have created the rule when the EC2 service has an operational or network connectivity issue. CloudWatch will notify subscribing end points. So you've understood how you can use AWS Health to monitor service availability, and also configure notifications to alert you when specific service level issues or events occur.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6)
> **Env Vars:** aws (9), ec2 (6), sns (1)
> **UI Navigation:** dropdown (5), select the (5), open the (1), scroll down (1)
> **CLI Commands:** aws (9), make (1)
> **Prerequisites:** configure (5)
> **Warnings:** be aware (1), note that (1)
> **Cross-References:** we talked about (1)
> **Definitions:** is an  (1)


### 3. AWS Config

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to AWS Config](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=0)** - [Instructor] When you run production workloads in the AWS cloud, you may be required to record the state of your resources and detect changes to that state. In this regard, AWS provides a service known as AWS Config. AWS Config is a managed service that provides you an inventory of your AWS resources, configuration history, and configuration change notifications to enable security and governance. With AWS Config, you can discover existing AWS resources, get notified when resources are created, modified, or deleted and continuously monitor and record configuration changes of your AWS resources. This allows you to determine how a resource was configured at any point in time, you can also define rules for provisioning and configuring AWS resources, resource configurations that deviate from your rules automatically trigger SNS notifications and CloudWatch events. You can also view relationships between resources, for example, how many EC1 instances use a specific security group? And you can also export a complete inventory of your AWS resources with all configuration details. Before we understand how AWS Config works, let's talk about some of the basic components, specifically we'll talk about configuration item, configuration history, configuration recorder, and config rules. Let's begin with configuration item. This represents a point in time view of the various attributes of a supported AWS resource.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=93)** It includes [Metadata](../../Skills/Web%20Development/Metadata.md), attributes, relationships, current configuration and related events. AWS Config creates a configuration item whenever it detects a change to a resource type it is recording. For example, if AWS Config is recording an Amazon S3 bucket, a configuration item is created when the bucket is created, updated or deleted. The configuration item looks like this. As you can see, it includes information such as account ID, ARN, or Amazon resource name, region, and availability zone, tags, and more. Next is configuration history. This is a collection of configuration items for a given resource over any period. It is stored in an Amazon S3 bucket that you specify. Configuration history can help you answer questions. Like when was the resource first created? How was the resource configured over the last month? And what configuration changes were made last Monday? Next is the configuration recorder. This stores the configuration of supported resources in your account as configuration items. Before you can start recording, you must first create and then start the configuration recorder. Next is config rules. A config rule represents the desired configuration settings for your AWS resources. AWS Config provides predefined rules, and you can also create custom rules. If a resource violates the rule, AWS Config flags the resource and the rule as noncompliant.
>
> **[3:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=186)** Rule evaluations are triggered when there is a configuration change or periodically based on a frequency you choose. With an understanding of the basic components, let's now understand how AWS Config works. When you turn on AWS Config, it first discovers the supported AWS resources in your account and generates a configuration item for each resource. This is a point in time view of the resource. It also generates a configuration item when the configuration of a resource changes, the service maintains a historical record of the configuration items from the time you start the configuration recorder. By default, AWS Config generates a configuration item for every supported resource in the region. It uses the describe API or list API call to keep track of all changes to your resources. Imagine a couple of [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances sharing a security group. The security group has two inbound rules. When you add a new rule to the security group, AWS Config invokes the describe API call on the security group. It then invokes the described API call on all of the instances associated with the security group, the updated configuration of the security group, and the instances are recorded as configuration items and delivered to an S3 bucket. AWS Config can also post changes to an SNS topic. AWS Config supports key AWS resource types, such as [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md), Amazon S3, Amazon VPC, AWS IAM, or identity and access management, AWS Lambda,
>
> **[4:44](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-aws-config?u=76281980&t=284)** AWS cloud formation, Amazon CloudWatch, AWS cloud trail, and more, for a full list of supported AWS resources, please refer to the AWS Config documentation. So you've understood how you can audit and maintain the configuration state of your AWS resources using AWS Config. Now it's time to configure some rules and set it up. That's what we'll do in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** aws (33), api (4), sns (2), ec2 (2), ec1 (1)
> **CLI Commands:** aws (33)
> **Definitions:** is a  (4), known as (1)
> **Analogies:** for example (2), such as (2), imagine (1)
> **Prerequisites:** required to (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [Setting up AWS Config](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=0)** - [Tutor] Let's walk through the steps needed to set up AWS Config. From the AWS Management Console, use the Services dropdown and navigate to Config. You will find this under the Management and Governance section. From the AWS Config console, click Get started. By default, AWS Config records all supported resources in the region. To change this, set it to record specific resource types. For this example, we'll configure it to record [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances and EC2 SecurityGroups From the Resource type dropdown, search for EC2, and select EC2 Instance and EC2 SecurityGroup. AWS Config needs permissions to call other AWS services. And for that, you'll need to assign a role. To keep it simple, choose to use an existing AWS Config service-linked role. Note that, you can also define the role yourself and add it here. Next, you need to provide an S3 bucket to store configuration history. You can create a new bucket or choose a bucket from your account or from another account. Choose the option to create a bucket and provide a bucket name. Use this check box to send configuration changes and notifications to an SNS topic. Use the option to choose a topic from your account and provide an existing topic name. If you don't have an existing topic, use this option to create a new topic. Click Next.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=93)** In this step, you can configure remediation rules. For now, you will skip this. Click Next. Review the settings and click Confirm. Click to close the popup. Recording is now on, and AWS Config is discovering resources from your account. This process could take some time. In another region, I've already set up AWS Config with the same configuration settings. I'll now switch to the other region. To view discovered resources, on the left navigation pane, click Resources. Doing so we'll show you a list of discovered resources. To see more details, click the resource identifier. Doing so shows the resource [Metadata](../../Skills/Web%20Development/Metadata.md). Scroll down to see the configuration item. By scrolling down the configuration item, you will see the relationships of this resource. For example, this EC2 instance, is contained in a VPC, is associated with a security group, contains a network interface is contained in a sub-net, and is attached to an EBS volume. To view events associated with the resource, scroll to the top and click Resource timeline. Expand an event to know more. For example, this event has recorded an AsumeRole action. To view more details about the event, click here. Doing so we'll open the event details in CloudTrail. So you've understood how you can configure AWS Config to discover resources in your AWS account
>
> **[3:09](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/setting-up-aws-config?u=76281980&t=189)** and audit changes occurring on them. Now it's time to configure rules that represent desired configuration settings. That's what we'll do in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (6), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** aws (11), ec2 (6), sns (1), vpc (1), ebs (1)
> **CLI Commands:** aws (11), find (1)
> **Prerequisites:** configure (4), set up (2), you'll need (1)
> **UI Navigation:** dropdown (2), navigate to (1), switch to (1), scroll down (1), open the (1)
> **Analogies:** for example (2)
> **Warnings:** note that (1)
> **Speakers:** - [tutor] (1)

#### [AWS Config managed rules](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=0)** - [Instructor] AWS Config allows you to discover your AWS resources and also evaluate their configuration settings. AWS Config uses rules to evaluate compliance. These rules represent the ideal configuration state of your resources. AWS Config supports two types of rules. First is managed rules. These are predefined rules that you can customize. And second is custom rules. These are defined by the user. For example, you can configure an AWS Config rule to check if an EBS volume is encrypted. If the volume is not encrypted, AWS Config will flag the volume and the rule as noncompliant. With this understanding, let's go to the AWS Management Console and learn how to configure a Config rule. We'll configure a rule to evaluate [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances and identify those that are not of type t3.micro, and mark them as noncompliant. From the AWS Config dashboard, on the left navigation pane, click Rules. Then click Add rule. Here are the two rule types that we spoke about. AWS manage rule and custom rule. With AWS managed rule selected, search for EC2. This shows rules that apply to EC2 instances. And as you can see, there are quite a few. Select the rule named desired-instance-type. It checks whether your EC2 instances are of the specified instance type. This rule will allow us to achieve the objective of checking for instances that are not of type t3.micro. Click Next.
>
> **[1:35](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=95)** It auto fills the name and description for us. Make a note that the trigger for this rule is a configuration change. This means the rule will run when there are changes to resources. There are three options available to define the scope of changes. This setting determines when evaluations will occur. When you set it to all changes, the rule will evaluate when any resource recoded by AWS Config is created, changed or deleted. When you set it to resources, the rule will evaluate when a resource matching the type you specify is created, changed or deleted. When you set it to tags, the rule will evaluate when a resource with the specified tag is created, changed or deleted. For this example, set it to resources. Note that the service has automatically set the resource type to AWS EC2 instance. This is based on the manage rule you selected earlier. Rule parameter allows you to specify the attributes for which the resource will be evaluated. This rule checks for the desired instance type, so the attribute to evaluate is InstanceType. Set the desired InstanceType as t3.micro. Note that you can also add additional key-value pairs. Click Next. Review your selections and click Add rule. Here's the configured rule. AWS Config also allows you to remediate noncompliant resources. Let's also add remediation capabilities to this rule. This will ensure that any EC2 instance that is not of type t3.micro
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=187)** will be automatically resized. Select the rule that you just created, click the Actions button, and then click Manage remediation. There are two remediation methods available. Automatic remediation and manual remediation. Here you can select the remediation action. Make a note of the message. AWS Config applies remediation using AWS Systems Manager Automation. Systems Manager Automation is an AWS service that allows you to automate operational tasks on your AWS resources. Like in this case, automatically resize noncompliant EC2 instances. From the remediation action dropdown, select ResizeInstance. Scroll down to the resource ID parameter section. From the dropdown, select InstanceId. Doing so will cause the InstanceId to be automatically added to the remediation action. Under the parameters section, specify the desired InstanceType as t3.micro. The InstanceType you specified when you created the rule was the expected value to identify noncompliant resources. The InstanceType you specify here is the desired value for noncompliant resources. Click Save changes. The rule has been evaluated and there is one noncompliant resource. Click the rule name to know more. Scroll to the bottom to see the noncompliant resource. To remediate the resource, select the resource ID and then click Remediate. Note that the status has changed to action execution queued.
>
> **[4:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/aws-config-managed-rules?u=76281980&t=281)** Now AWS Config will resize the instance to t3.micro. Apart from AWS Config managed rules, we can also configure custom rules. Each custom rule must be associated with an AWS Lambda function to perform the required actions. So you've seen how you can use AWS Config to automatically discover your AWS resources, evaluate them for compliance and remediate them. As you can imagine, this can be an important tool in your kit to ensure the security and compliance of your AWS resources.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (7)
> **Env Vars:** aws (23), ec2 (7), ebs (1)
> **CLI Commands:** aws (23), make (2)
> **UI Navigation:** select the (4), dropdown (2), go to (1), scroll down (1)
> **Warnings:** note that (4)
> **Prerequisites:** configure (4)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1), imagine (1)


### 4. Taking Action

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to Amazon EventBridge](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=0)** - [Instructor] So far in this course, we've talked about various ways to monitor your resources and applications. Now we'll shift gears a bit and talk about taking actions using data collected from monitoring. In this regard, let's talk about Amazon EventBridge. Amazon EventBridge is a serverless event bus service that connects your applications with data from different sources. These sources maybe your own applications or SAS applications such as Shopify or AWS services. It routes data to targets such as AWS Lambda or Amazon Kinesis or an event bus in another account. Since this is an event of an architecture, it enables developers to build decoupled applications resulting in greater [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and flexibility. It also allows operations teams to respond quickly to changes and take corrective action. They can do this by writing rules to indicate which events are of interest and what actions to take when a rule matches an event. EventBridge was formally called Amazon CloudWatch Events. So any configuration you made earlier in CloudWatch Events, is also displayed in the EventBridge console. Before we learn how to configure EventBridge, let's talk about a few concepts. Specifically, we'll talk about events, rules, targets, and event bus. Let's first talk about events. Events indicate changes in an environment. This can be an AWS environment, a [SaaS](../../Glossary/Concept/SaaS.md) partner application, or your own custom application. Examples of events include change in the state
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=94)** of an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance, or change in the state of a cloud watch alarm or bucket level operations performed in Amazon S3 such as create bucket, delete bucket, and more. Next we have rules. A rule matches incoming events and routes them to targets for processing. A single rule can route to multiple targets in parallel. For example, a rule can route an event to an Amazon API gateway and an SNS topic in parallel. Next, we have targets. These are responsible for processing events. Examples include Lambda functions, Kinesis streams, SNS topics, SQS Queues, and more. For a full list of supported target, please refer to the EventBridge documentation. Next we have event bus. An event bus receives events. After creating a rule, you associate it with a specific event bus and the rule is matched only to the events received by that event bus. Now let's tie these concepts together with an example. Let's say you have an application server hosted on an EC2 instance that always needs to be in the running state. You have an EventBridge event bus that receives events from the [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) service. You've configured a rule that looks for events describing a change in state for EC2 instances. The rule matches when the state of the application server changes to stop. When matched, the rule invokes a Lambda function and also notifies an SNS topic. The Lambda function will then restart the instance and move it to the running state.
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/introduction-to-amazon-eventbridge?u=76281980&t=187)** As you can see, EventBridge allows you to connect applications using events, and it does this without writing code. And since the architecture is loosely coupled, it improves application [Resiliency](../../Skills/Software%20Development/Resiliency.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [SaaS](../../Glossary/Concept/SaaS.md) (1), [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Resiliency](../../Skills/Software%20Development/Resiliency.md) (1)
> **Env Vars:** ec2 (4), aws (3), sns (3), sas (1), api (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** aws (3)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** earlier in (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Configure Amazon EventBridge](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=0)** - Let's now configure an Amazon EventBridge rule that will notify when a critical server is shut down. You have a critical application server hosted on an [EC2](../../Skills/DevOps/Amazon%20EC2.md) instance, that always needs to be running. You will configure EventBridge to send a notification using SNS, if the server is shut down. To begin, copy the instance ID of the server. You will use this later, when you configure EventBridge. Use the services dropped on menu and navigate to the Amazon EventBridge service. You will find this under the application integration section. By default EventBridge has one event bus. To see this, click event passes on the left navigation pane. Here is the default event bus. Event buses are responsible for receiving events from various sources. We'll use this for the rule. On the left navigation pane, click Rules. Note that the default event bus is selected. Click create rule. Provide a name for the rule. Note that spaces aren't allowed in the name. In an earlier video, we understood that Amazon EventBridge was formerly known as Amazon CloudWatch events. So if you have configured CloudWatch events, you will find similarity in the configuration steps here. Under the defined pattern section, you can choose from an event pattern or schedule to invoke your targets. Since the shutdown event can occur anytime, or in other words it doesn't have a schedule, select event pattern. Select predefined pattern by service. From the service provider dropdown,
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=93)** select AWS. From the service name dropdown, search and select EC2. From the event type dropdown, select EC2 instance state change notification. For this configuration, We want the EventBridge service to notify us, when the app server is shutdown. Or in other words, when the state of the server is stopped. So select specific state and from the dropdown, set the state to stop. If you set it to any instance, EventBridge we'll notify you when the state of any server changes to stop. But in this case, we're concerned about the app server. So select specific instance IDs and provide the instance ID you copied earlier. Note that, based on your selections, the service has created an event pattern. Also note that under the select event per section, the AWS default event bus is selected and the rule will be enabled on the selected event bus. Under the select target section, use the dropdown and set the target as SNS topic. Select the desired SNS topic. Note that you can also add more than one target. Scroll down and click Create. You've created the rule. Now the rule will trigger and perform the configured action, when the state of the server changes to stopped. As you've seen, it is easy to create an EventBridge rule. While having a mechanism that monitors and notifies is great, wouldn't it help to have a configuration that automatically restart the server
>
> **[3:06](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/configure-amazon-eventbridge?u=76281980&t=186)** if it is shut down? we'll configure that in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (3)
> **Env Vars:** ec2 (3), sns (3), aws (2)
> **UI Navigation:** dropdown (5), navigate to (1), select the (1), scroll down (1)
> **Warnings:** note that (5)
> **CLI Commands:** find (2), aws (2)
> **Prerequisites:** configure (4)
> **Definitions:** in other words (2), known as (1)
> **Speakers:** - let (1)

#### [Lambda in response to CloudWatch alarms](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=0)** - [Instructor] While having a notification capability is vital for a monitoring solution. Having the ability to respond and take remediation actions can improve the availability of the application. In the last video, you configured an EventBridge rule that sends notification when a critical app server is shut down. Now, you'll configure a lambda function that will automatically restart the server. AWS Lambda is a compute service that lets you run code without managing servers. So you can provide the code to Lambda and it will take care of the infrastructure needed to run the code. First, you will create the lambda function and then add it as a target for your EventBridge rule. From the AWS Management Console, use the Services dropdown and navigate to the Lambda service. You will find this under the Compute section. Lambda organizes code as functions. Click Create Function. Select the option to author from scratch and provide a function name. Use the Runtime dropdown and set it to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.8. Next, you will need to assign an execution role. Doing so will provide the lambda function the permissions to perform actions on the app server. In this case, the lambda function needs permissions to reboot the app server. Select the option to use an existing role. And select an IAM role that provides the required permissions. The IAM role should provide permissions to the lambda function to reboot [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances. You will find more information about how to create the IAM role in the AWS documentation.
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=94)** Click Create Function. The function has been created. Now, it's time to add the code. Double-click Lambda_function.PY. Delete the default code and add the code to reboot EC2 instances. This code is available in the AWS documentation. Note that the code includes the region code and the instance ID of the app server. Click Deploy, navigate to the Configuration tab. And from the general configuration section, click Edit. Set the memory to 256 MB and increase the timeout value. Then click Save. You've created the lambda function. Now, it's time to edit the EventBridge rule and add the lambda function as a target. Use the Services dropdown and navigate to the Amazon EventBridge service. On the left navigation pane, click Rules. Select the rule you created earlier and click Edit. Scroll down to the select target section and click Add Target. Set the target type to lambda function and select the function you created earlier. Note that the SNS topic you configured earlier is also a target. So if the app server is shut down, the service will post to the SNS topic and also invoke the lambda function. Scroll down and click Update. Time to test. Navigate to the EC2 service. And on the left navigation pane, click Instances.
>
> **[3:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/lambda-in-response-to-cloudwatch-alarms?u=76281980&t=193)** Select the instance for which you configured the EventBridge rule. Then click Instance State and click Stop Instance. Click Stop to confirm. Now, EC2 is stopping the instance. We'll wait for a few seconds for the state of the instance to change. It's been a few seconds. The instance has stopped and is now rebooting. So you've seen how to use EventBridge to build a system that constantly monitors your applications, sends notifications when changes occur, and self heals in response to changes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (4), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **UI Navigation:** select the (5), navigate to (4), dropdown (3), scroll down (2), double-click (1)
> **Env Vars:** aws (4), ec2 (4), iam (3), sns (2)
> **CLI Commands:** aws (4), find (2), python (1)
> **Warnings:** note that (2)
> **File Paths:** lambda_function.py (1)
> **Versions:** python 3 (1)
> **Cross-References:** in the last (1)

#### [Understand AWS Systems Manager](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=0)** - [Instructor] AWS Systems Manager is an AWS service that allows you to view operational data from multiple AWS services and automate operational tasks. You can use Systems Manager to essentially define the configuration options and policies for your managed instances. A managed instance is a machine configured for use with Systems Manager. You can identify resources that are out of compliance and take corrective action. You can automate a variety of maintenance tasks such as patching your managed instances. You can also create runbook-style documents that define the actions to perform on your managed instances. You can group AWS resources together using different attributes, such as application, region, project, and more. You can automatically collect inventory information about your [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) instances and on-premises managed instances. Inventory information includes [Metadata](../../Skills/Web%20Development/Metadata.md), such as applications, network configuration, and more. Systems Manager groups these capabilities into five categories, operations management, application management, change management, node management, and shared resources. We'll see this in a moment when we get to the AWS Console. Systems Manager provides an agent known as the Systems Manager agent that you can install on [EC2](../../Skills/DevOps/Amazon%20EC2.md) instances, on-premises servers and [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). Systems Manager was earlier known as Simple Systems Manager or SSM. So some of the documentation may still refer to the agent as an SSM agent.
>
> **[1:33](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=93)** It is with this agent that systems manager updates, manages and configures your resources. You can install the SSM agent on [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), Mac OS, and [Windows](../../Glossary/Service/Windows.md) operating systems. For specific operating system versions, please refer to the AWS documentation. Some Amazon machine images or AMIs have the Systems Manager agent pre-installed on them, but for others, including on-premises servers, you will need to install the agent manually. You will find the list of these AMIs in the AWS documentation. Now let's go to the AWS Management Console and learn how to set up Systems Manager. From the AWS Management Console, use the services drop down menu and navigate to the Systems Manager service. You will find this under the management and governance section. Click get started with Systems Manager. Doing so invokes the quick set of functionality that allows you to configure the required security roles and commonly used capabilities on your EC2 instances. First, you will need to create a new configuration. Click create. Make a note of the different categories that we spoke about, operations management, application management, change management, node management, and shared resources. At this time, there are three types of configuration that you can create, host management, config recording, and distributor. Select host management and click next. Here you can configure systems manager
>
> **[3:07](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=187)** to update SSM agent every two weeks, collect inventory information from your instances every 30 minutes and scan instances for missing patches daily. You can also configure it to install and configure the CloudWatch agent. We spoke about this earlier in the course, and you can also configure it to update the agent once every 30 days. Next, you need to configure the targets on which you want to apply this configuration. Note that you can apply to the current region or choose the required regions. For this demonstration, select current region. For target instances, you can select all instances or specific instance tags, resource groups, or manually select the required instances. Select manual. Doing so will show you instances from the current region. Select the desired instances, then click create. Doing so will begin the deployment. Here we can see the deployment and association status. Note that this deployment can take a few minutes. About a minute later, the deployment has completed. This means SSM has deployed the agent on the instance. To see a list of managed instances, on the left navigation pane, under the node management section, click fleet manager. The instances on which you deploy the agent will show up here shortly. On-premises servers or virtual machines with SSM agents will also be listed here. This list will also include virtual machines in other cloud environments.
>
> **[4:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/understand-aws-systems-manager?u=76281980&t=281)** To install the systems manager agent on on-premise servers or virtual machines, on the left navigation pane, under the node management section, click hybrid activations. Then click create an activation. Here you can specify the instance limit. This is the total number of servers and virtual machines you want to register. Then you need to provide an IAM role. Doing so allows the servers and virtual machines to communicate with the Systems Manager service. You only need to do this once for each AWS account. Select the option to use the default role created by the system. Then click create activation. Doing so we'll show the activation code and activation ID. Make a note of this as you cannot access this again, and you will need this when installing the agent. The next step is to install the Systems Manager agent on your servers and virtual machines. The installation steps vary and will depend on the operating system. You will find the installation steps in the AWS documentation. Once you've installed the agent, you will see the instances under fleet manager. Installing the agent is only the first step. The agent allows you to view inventory and compliance information and take actions from the console. We'll see this in the following video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (7), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (2), [Amazon EC2](../../Skills/DevOps/Amazon%20EC2.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** aws (11), ssm (6), ec2 (3), iam (1)
> **CLI Commands:** aws (11), node (4), find (3), make (2)
> **Prerequisites:** install (6), configure (6), set up (1)
> **UI Navigation:** select the (3), go to (1)
> **Definitions:** is an  (1), is a  (1), known as (1)
> **Analogies:** such as (3)
> **Warnings:** note that (2)

#### [Remediate using AWS Systems Manager](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=0)** - [Instructor] Now that you've installed SSM Agents on your hosts, it is time to manage them with Systems Manager. First, let's start with Fleet Manager. As you know, this shows a list of your managed instances. To know more about an instance, simply click the instance ID. This shows an overview of the instance with options to view file system, [Windows](../../Glossary/Service/Windows.md) registry, event logs, performance counters, and users and groups. For [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) machines, you will not see the options for registry and event logs. You can connect to your instance right from here, click Instance actions, and then click Start session. You are now connected and you can start executing commands. Connecting to on premises instances requires you to be in the advanced instances tier. You will find more information about this in the AWS documentation. Back to the systems manager console on the left navigation pane under the node management section click Inventory. Here on the dashboard, you will find basic inventory information such as top five operating systems, applications, server roles, and services. With systems manager, you can also patch your instances on demand or schedule a patch job. On the left navigation pane, click Patch Manager. To patch on demand, click Patch now, select a patching operation, scan for missing patches or scan and install missing patches.
>
> **[1:34](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=94)** Then select the instances to patch and optionally provide an S3 bucket to store patching operation logs. Then click Patch now to initiate the patching operation. You can also run commands on your instances. To do so, on the left navigation pane, click Run Command, then click Run Command again. Doing so we'll show a list of command documents that you can execute and they're supportive platform types. For this demonstration, search for windows. From the list of documents, select FindWindowsUpdates. This document will list missing windows updates. Scroll down to the target section and select the options to choose instances manually. Then select the desired instances. Scroll down and provide the timeout value in seconds and for this demonstration, disable the option to write output to an S3 bucket, click Run, the command execution is in progress. Click refresh, the status has changed to success, select a target and click View output. Expand the output section. Here you can see that a few updates are missing and by scrolling down, you can see the details of the missing updates. For this one command, you've used an AWS defined document. It is also possible to create your own documents. To do so, on the left navigation pane
>
> **[3:08](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=188)** under the shared resources section, click Documents, then click Create document and select the type as command or session. You can specify the document content in [JSON](../../Skills/Web%20Development/JSON.md) or YAML format. The distributor feature allows you to install software on your manage instances. You can install AWS provided software or your own software. If you'd like to install your own software, click Create package and upload your software. This will create an installation package that you can push to your instances. For this demonstration, you will install an AWS provided software, the AmazonCloudWatchAgent. We spoke about this earlier in the course, select the package and choose the option to install one time. Doing so invokes the run command utility, scroll down and under the Target section, select the desired instances. Specified the timeout value in seconds and for this demonstration disable the option to write command output to an S3 bucket. Click Run. In addition to managing your instances, systems manager also allows you to maintain the state of your [EC2](../../Skills/DevOps/Amazon%20EC2.md) and hybrid infrastructure. This is done using state manager. First, you will need to create an association. It defines the desired state of your targets and includes a document that contains the state definition, target information and schedule.
>
> **[4:41](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=281)** Start by selecting a document. These documents apply to different resources, such as autoscaling groups, EBS volumes, S3, RDS, and more. For this demonstration, search and select the document titled DisabledPublicAccessForSecurityGroup. This document disables public SSH and RDP access for the desired security groups. Scroll down to the Input parameters section and provide the desired security group ID. Also select an IAM role. The role is required to provide systems manager, the permissions required to execute this action. In this case, the role should provide permissions to a systems manager to perform actions on VPC resources. If you'd like to block access from a specific IP address add it here or leave it blank to DisabledAllPublicAccess. Note that you can schedule this activity, select No schedule to run it once. Scroll down and click Create Association. The association has been created and is now in a pending status. Click the association name and navigate to execution history. The status has changed to success. This means systems manager has executed the configured action. As you have seen, there are so many possibilities with systems manager, we've only scratched the surface. We've only looked at host management, but you can also use it to perform operations, application, and change management,
>
> **[6:13](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/remediate-using-aws-systems-manager?u=76281980&t=373)** to fully appreciate the tools capabilities, and understand how it can help to control your infrastructure, I recommend playing around with the different options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1), [Ec2](../../Skills/DevOps/Amazon%20EC2.md) (1)
> **Env Vars:** aws (4), ssm (1), json (1), yaml (1), ec2 (1)
> **UI Navigation:** select the (7), scroll down (5), navigate to (1)
> **CLI Commands:** aws (4), find (2), node (1), ssh (1)
> **Prerequisites:** install (6), required to (2)
> **Analogies:** such as (2)
> **Cross-References:** earlier in (1)
> **Warnings:** note that (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps with AWS](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/aws-monitoring-logging-and-remediation-2021/next-steps-with-aws?u=76281980&t=0)** - [Instructor] Thanks for watching, monitoring, logging and remediating in AWS. It's been an absolute pleasure to accompany you on this exploration of tools and concepts within AWS. I hope you appreciated the different strategies you can deploy to build continuously monitored self-healing systems on AWS. [Cloud Computing](../../Topics/Cloud%20Computing.md) is a continuously evolving technology and AWS keeps updating its tool set. I highly recommend checking the AWS documentation regularly for the latest updates and service offerings. Finally, I encourage you to check out other AWS courses in the library, and I'd like to wish you the best in your journey as an AWS administrator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cloud Computing](../../Topics/Cloud%20Computing.md) (1)
> **CLI Commands:** aws (7)
> **Env Vars:** aws (7)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Shyam Raj](../../Instructors/Cloud%20Computing/Shyam%20Raj.md)

## Skills Covered

- Amazon Web Services (AWS)
- System Monitoring

## Path Context

### In [Develop Your AWS Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Develop%20Your%20AWS%20Skills.md)
← [Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md) | **3 of 4** | [Cloud Computing Careers and Certifications](Cloud%20Computing%20Careers%20and%20Certifications.md) →

## Appears In

- [Develop Your AWS Skills](../../Paths/Cloud%20Computing/Learning%20Paths/Develop%20Your%20AWS%20Skills.md)

## Related Courses

_Courses sharing skills:_

- [Complete Guide to AWS Software Deployment](Complete%20Guide%20to%20AWS%20Software%20Deployment.md) — Amazon Web Services (AWS)
- [Choosing A Cloud Platform For Developers Aws Azure And Gcp](Choosing%20A%20Cloud%20Platform%20For%20Developers%20Aws%20Azure%20And%20Gcp.md) — Amazon Web Services (AWS)
- [DevOps Foundations- Monitoring and Observability](../DevOps/DevOps%20Foundations-%20Monitoring%20and%20Observability.md) — System Monitoring
- [AWS Essential Training for Architects](../DevOps/AWS%20Essential%20Training%20for%20Architects.md) — Amazon Web Services (AWS)
- [Building Intelligent Chatbots on AWS](../Artificial%20Intelligence%20(AI)/Building%20Intelligent%20Chatbots%20on%20AWS.md) — Amazon Web Services (AWS)

---

[↑ Back to top](#)